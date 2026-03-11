import { readFile, writeFile, mkdir, access } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA_DIR = join(ROOT, 'data');
const DAILY_DIR = join(ROOT, 'Daily');
const REPOS_DIR = join(ROOT, 'Repos');
const SEEN_FILE = join(DATA_DIR, 'seen-repos.json');

const TOP_N = 10;
const GITHUB_API = 'https://api.github.com';
const LLM_API = 'https://models.inference.ai.azure.com/chat/completions';
const LLM_MODEL = 'gpt-4o-mini';

// ── GitHub API helpers ──────────────────────────────────────

function gh(token) {
  const h = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'github-trending-obsidian',
  };
  if (token) h.Authorization = `Bearer ${token}`;
  return h;
}

async function fetchTrending(token) {
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  const since = weekAgo.toISOString().split('T')[0];
  const query = `created:>=${since} fork:false`;
  const url = `${GITHUB_API}/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=50`;
  const res = await fetch(url, { headers: gh(token) });
  if (!res.ok) throw new Error(`GitHub Search API ${res.status}: ${await res.text()}`);
  return (await res.json()).items || [];
}

async function fetchReadme(fullName, token) {
  try {
    const res = await fetch(`${GITHUB_API}/repos/${fullName}/readme`, {
      headers: gh(token),
    });
    if (!res.ok) return '';
    const data = await res.json();
    return Buffer.from(data.content, 'base64')
      .toString('utf-8')
      .slice(0, 8000)
      .replace(/!\[[^\]]*\]\([^)]+\)/g, '') // remove images
      .replace(/<img[^>]*>/g, '')
      .replace(/<\/?[^>]+>/g, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  } catch {
    return '';
  }
}

async function fetchContributors(fullName, token) {
  try {
    const res = await fetch(
      `${GITHUB_API}/repos/${fullName}/contributors?per_page=5`,
      { headers: gh(token) }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data.map((c) => ({ login: c.login, contributions: c.contributions }));
  } catch {
    return [];
  }
}

async function fetchLatestRelease(fullName, token) {
  try {
    const res = await fetch(
      `${GITHUB_API}/repos/${fullName}/releases?per_page=1`,
      { headers: gh(token) }
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.length) return null;
    const r = data[0];
    return {
      tag: r.tag_name,
      name: r.name || r.tag_name,
      date: r.published_at?.split('T')[0],
    };
  } catch {
    return null;
  }
}

async function fetchLanguages(fullName, token) {
  try {
    const res = await fetch(`${GITHUB_API}/repos/${fullName}/languages`, {
      headers: gh(token),
    });
    if (!res.ok) return {};
    return await res.json();
  } catch {
    return {};
  }
}

async function fetchRepoDetails(repo, token) {
  const [readme, contributors, release, languages] = await Promise.all([
    fetchReadme(repo.full_name, token),
    fetchContributors(repo.full_name, token),
    fetchLatestRelease(repo.full_name, token),
    fetchLanguages(repo.full_name, token),
  ]);
  return { ...repo, _readme: readme, _contributors: contributors, _release: release, _languages: languages };
}

// ── LLM ─────────────────────────────────────────────────────

const SYSTEM_PROMPT = `你是一位台灣的資深技術部落客和開源愛好者。你的文字風格像是在跟工程師朋友分享一個有趣的發現——直接、有觀點、不廢話。你寫的內容要讓讀者覺得「這篇比我自己去讀 README 還有價值」。

重要規則：
- 仔細讀 README 內容，不要只看名稱猜測
- 每個專案的內容要有差異化，寫出只屬於這個專案的獨特分析
- 禁止使用：「隨著...的流行」「這個專案因此受到關注」「在...的背景下」等空洞句型
- 使用場景要想像一個真實的人在做什麼
- 說出跟替代方案的具體差異
- summary 要夠詳細，讓讀者不看 README 也能理解這個專案在幹嘛
- 功能描述要具體到參數、數據、指令，不要只寫「支持 XXX 功能」
- 從 README 中提取真實的指令和範例，不要自己編造

請為每個 GitHub 專案提供以下欄位（JSON 物件）：

1. "repo": 完全等於 owner/name（區分大小寫）
2. "description_zh": 一句話說明「解決什麼問題」。好的例子：「讓 AI 自動跑實驗，你只要早上起來看結果」。壞的例子：「自動化 AI 研究平台」
3. "summary": 10-12 句話的深度分析。結構：
   - 第 1-2 句：白話說核心機制，要具體到流程（例如「它讓 AI agent 每 5 分鐘改一次 train.py、跑訓練、比對 loss，如果變好就 commit，變差就 revert，整晚自動跑」）
   - 第 3-4 句：技術實作方式，具體到用了什麼框架、演算法、通訊協議。如果 README 有提到效能數據或 benchmark，一定要提
   - 第 5-6 句：跟同類工具的具體差異（要具體到功能和架構層面）
   - 第 7-8 句：實際使用的效果和限制（效能數據、支援範圍、需要什麼硬體）
   - 第 9-10 句：你的觀點——成熟度（alpha/beta/stable）、值不值得現在就用、適合什麼規模的團隊
   - 第 11-12 句：給讀者的建議——什麼情況下該用、什麼情況下不該用
4. "why_trending": 3-4 句具體分析。包含：作者背景、切中什麼需求、觸發事件、為什麼現在爆紅而不是更早
5. "use_cases": 陣列，3 個場景。格式：「[具體角色] 用它來 [具體動作+預期結果]，因為 [具體好處，要有數據或對比]」。例子：「後端工程師用它來在 CI 中自動檢測 API breaking changes，因為手動 diff OpenAPI spec 容易漏掉 nested field 的變動」
6. "target_audience": 一句話，越具體越好。不要寫「開發者」，要寫「需要在 M1 Mac 上跑 LLM 推論但不想裝 Docker 的獨立開發者」
7. "category": AI/ML、開發工具、Web 應用、CLI 工具、資料科學、安全、教學資源、基礎設施、其他（選一個）
8. "key_features": 陣列，5-8 個功能特色。每個要具體到可操作的層面，格式：「功能名 — 具體描述（含數據、指令、參數）」。壞的：「支持多種圖表類型」。好的：「8 種圖表格式（ascii/spark/bars/columns/heatmap/unicode/braille/svg），用 -t 參數切換」
9. "quickstart_steps": 陣列，3-5 個安裝/使用步驟。每步是物件：{"step": "簡潔說明", "cmd": "完整可複製貼上的指令"}。從 README 提取真實指令。沒有就回傳 []
10. "code_example": 一段展示核心用法的程式碼或指令（含語言標記如 bash/python/js）。從 README 提取最有代表性的範例，展示輸入輸出。不超過 15 行。沒有就回傳 null
11. "limitations": 陣列，3-4 個注意事項。要具體（例如 ["僅支援 Python 3.10+", "需要 NVIDIA GPU (CUDA 12+)", "不支援 Windows", "alpha 階段，API 每週都在變"]）
12. "similar_tools": 陣列，2-4 項。每項是物件：{"name": "工具名（優先用 GitHub owner/repo 格式，如 crewai/crewai）", "diff": "跟本專案的具體差異，要提到功能差異和適用場景差異（2 句話）"}。這是筆記中最有決策價值的段落，一定要認真寫。想不到就回 []
13. "related_concepts": 陣列，3-5 個相關技術概念。優先從以下預定義概念中選擇（繁體中文，如果沒有符合的可以自創）：
   RAG, MCP Protocol, WebAssembly, LoRA, RLHF, 向量資料庫, 邊緣推論, CLI/TUI, 語音合成, 多模態, Agent 框架, 安全漏洞, 程式碼生成, LLM 推論, Prompt Engineering, 微服務, 容器化, CI/CD, 資料視覺化, API 設計, 機器學習, 深度學習, 自然語言處理, 電腦視覺, 自動化測試, 爬蟲, 即時通訊, 區塊鏈, 隱私保護, 效能優化
14. "tech_stack": 陣列，列出核心技術棧（含版本號，例如 ["Next.js 14", "FastAPI", "PostgreSQL 16"]），從 README 提取
15. "novelty_claim": 一句話：這個專案最核心的創新點是什麼？（從 README 提取具體 claim，不要自己編）。沒有明顯創新就回傳 null
16. "install_complexity": "easy"（一行 npm/pip install 或 npx）、"medium"（需要 clone + config）、"hard"（需要 GPU/Docker/複雜環境）
17. "architecture": 4-6 句話描述專案的整體架構。嚴格根據 README 和 repo 資訊描述，不要猜測或編造未提到的技術。要包含：(1) 架構模式（單體/前後端分離/CLI/微服務/plugin）；(2) 核心資料流（用箭頭：用戶輸入 → 處理 → 輸出）；(3) 關鍵技術決策；(4) 專案目錄結構的關鍵檔案（如 README 有提到）。如果 README 沒有提供足夠的架構資訊就回傳 null，不要編造
18. "pros_cons": 物件，包含 "pros"（陣列，3-4 個優點，每個要具體）和 "cons"（陣列，3-4 個缺點，每個要具體，不要跟 limitations 重複）
19. "community": 物件，可選欄位。"docs_url"（文件網站）、"discord"（Discord 連結）、"activity"（一句話描述社群活躍度）。都沒有就回傳 null
20. "key_insight": 一句話，你讀完這個專案後最想告訴朋友的一件事。例如：「這個專案最厲害的不是功能，而是它證明了用 Markdown 就能『編程』AI agent 的研究行為」
21. "deep_dive": 5-8 句話的技術深入分析。這是給想深入了解的讀者看的，要有技術含量。結構：
   - 核心演算法或資料結構的工作原理（如果 README 有提到）
   - 效能特性（benchmark 數據、支援規模、記憶體用量等具體數字）
   - 關鍵設計取捨（為什麼選 A 而不是 B？有什麼 trade-off？）
   - 跟競品在實作層面的差異（不是功能差異，是技術決策的差異）
   如果 README 沒有提供足夠的技術細節就回傳 null，不要編造

回傳 JSON 陣列，只回傳 JSON，不要加 markdown 標記。`;

function buildRepoPrompt(repos) {
  return repos
    .map((r) => {
      const parts = [`## ${r.full_name}`];
      parts.push(`描述: ${r.description || 'No description'}`);
      parts.push(`語言: ${Object.keys(r._languages || {}).join(', ') || r.language || 'N/A'}`);
      parts.push(`Stars: ${r.stargazers_count}, Forks: ${r.forks_count}`);
      parts.push(`建立: ${r.created_at.split('T')[0]}, 最後推送: ${r.pushed_at?.split('T')[0] || 'N/A'}`);
      if (r._contributors?.length)
        parts.push(`主要貢獻者: ${r._contributors.map((c) => c.login).join(', ')}`);
      if (r._release) parts.push(`最新版本: ${r._release.tag}`);
      if (r.homepage) parts.push(`官方網站: ${r.homepage}`);
      if (r.topics?.length) parts.push(`Topics: ${r.topics.join(', ')}`);
      if (r._readme) parts.push(`README:\n${r._readme.slice(0, 5000)}`);
      return parts.join('\n');
    })
    .join('\n\n---\n\n');
}

// 從 429 錯誤訊息中解析等待秒數
function parseRateLimitWait(errorText) {
  const match = errorText.match(/wait (\d+) seconds/i);
  return match ? parseInt(match[1], 10) : 60; // 預設等 60 秒
}

// 全局冷卻追蹤：避免在冷卻期內發送請求
let rateLimitCooldownUntil = 0;

async function waitForCooldown(context = '') {
  const now = Date.now();
  if (rateLimitCooldownUntil > now) {
    const waitMs = rateLimitCooldownUntil - now;
    console.log(`  ${context}Rate limit cooldown: waiting ${Math.ceil(waitMs / 1000)}s...`);
    await new Promise(r => setTimeout(r, waitMs));
  }
}

async function callLLMBatch(repos, token) {
  await waitForCooldown();
  const prompt = buildRepoPrompt(repos);
  const res = await fetch(LLM_API, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      model: LLM_MODEL,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: prompt },
      ],
      temperature: 0.3,
      max_tokens: 14000,
    }),
  });
  if (!res.ok) {
    const errText = await res.text().catch(() => '');
    if (res.status === 429) {
      const waitSec = parseRateLimitWait(errText);
      rateLimitCooldownUntil = Date.now() + (waitSec + 2) * 1000; // 多等 2 秒緩衝
      throw new Error(`LLM HTTP 429: wait ${waitSec}s — ${errText.slice(0, 200)}`);
    }
    throw new Error(`LLM HTTP ${res.status}: ${errText}`);
  }
  const data = await res.json();
  const text = data.choices[0].message.content.trim();
  // 清理 LLM 回傳的常見格式問題
  let cleaned = text
    .replace(/^```json?\n?/m, '')
    .replace(/\n?```$/m, '')
    .replace(/[\x00-\x1F\x7F]/g, (c) => c === '\n' || c === '\t' ? c : ' '); // 移除控制字元
  try {
    return JSON.parse(cleaned);
  } catch (parseErr) {
    // 嘗試修復常見的 JSON 問題（尾隨逗號、不匹配的括號）
    cleaned = cleaned.replace(/,\s*([}\]])/g, '$1');
    try {
      return JSON.parse(cleaned);
    } catch {
      throw new Error(`JSON parse failed: ${parseErr.message} — first 200 chars: ${cleaned.slice(0, 200)}`);
    }
  }
}

async function callLLM(repos, token) {
  const BATCH_SIZE = 2;  // 每個 repo 產生更多內容，減小批次以避免 token 上限
  const results = [];
  let consecutiveFailures = 0;

  for (let i = 0; i < repos.length; i += BATCH_SIZE) {
    const batch = repos.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(repos.length / BATCH_SIZE);
    console.log(`  LLM batch ${batchNum}/${totalBatches} (${batch.length} repos)...`);

    let success = false;
    for (let attempt = 0; attempt < 3 && !success; attempt++) {
      if (attempt > 0) {
        await waitForCooldown('LLM retry: ');
      }
      try {
        const batchResult = await callLLMBatch(batch, token);
        results.push(...batchResult);
        success = true;
        consecutiveFailures = 0;
      } catch (err) {
        console.warn(`  Attempt ${attempt + 1} failed: ${err.message}`);
      }
    }

    if (!success) {
      consecutiveFailures++;
      for (const r of batch) {
        results.push({ repo: r.full_name, _llm_failed: true });
      }
      // 連續失敗 3 次就停止（可能是 API 完全不可用）
      if (consecutiveFailures >= 3) {
        console.warn(`  Stopping LLM: ${consecutiveFailures} consecutive failures`);
        for (let j = i + BATCH_SIZE; j < repos.length; j++) {
          results.push({ repo: repos[j].full_name, _llm_failed: true });
        }
        break;
      }
    }

    // 批次間等待（指數增加避免 rate limit）
    if (i + BATCH_SIZE < repos.length) {
      const waitTime = 1500 + (batchNum * 500); // 2s, 2.5s, 3s, ...
      await new Promise((r) => setTimeout(r, waitTime));
    }
  }

  return results.length > 0 ? results : null;
}

// ── Seen repos (object map) ────────────────────────────────

async function loadSeen() {
  try {
    const raw = JSON.parse(await readFile(SEEN_FILE, 'utf-8'));
    // 相容舊格式（純陣列 → 轉為 object map）
    if (Array.isArray(raw)) {
      const obj = {};
      for (const name of raw) {
        obj[name] = { first_seen: 'unknown', stars_first: 0, stars_last: 0, times_seen: 1 };
      }
      return obj;
    }
    return raw;
  } catch {
    return {};
  }
}

async function saveSeen(seen) {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(SEEN_FILE, JSON.stringify(seen, null, 2), 'utf-8');
}

// ── Utility ─────────────────────────────────────────────────

function fmt(n) {
  return n >= 1000 ? `${(n / 1000).toFixed(1)}k` : String(n);
}

function daysAgo(dateStr) {
  return Math.max(1, Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000));
}

function starsPerDay(stars, dateStr) {
  return Math.round(stars / daysAgo(dateStr));
}

function repoFileName(fullName) {
  return fullName.replace('/', '--') + '.md';
}

function langPercents(languages) {
  const total = Object.values(languages).reduce((a, b) => a + b, 0);
  if (!total) return {};
  const result = {};
  for (const [lang, bytes] of Object.entries(languages)) {
    const pct = Math.round((bytes / total) * 100);
    if (pct > 0) result[lang] = pct;
  }
  return result;
}

function langStats(repos) {
  const counts = {};
  for (const r of repos) {
    const lang = r.language || 'Other';
    counts[lang] = (counts[lang] || 0) + 1;
  }
  return Object.entries(counts).sort((a, b) => b[1] - a[1]);
}

function getWeekString(dateStr) {
  const d = new Date(dateStr);
  const jan1 = new Date(d.getFullYear(), 0, 1);
  const days = Math.floor((d - jan1) / 86400000);
  const week = Math.ceil((days + jan1.getDay() + 1) / 7);
  return `${d.getFullYear()}-W${String(week).padStart(2, '0')}`;
}

async function fileExists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

// ── 個別 Repo Note 產生 ────────────────────────────────────

function generateRepoNote(repo, llmInfo, today) {
  const days = daysAgo(repo.created_at);
  const rate = starsPerDay(repo.stargazers_count, repo.created_at);
  const langPct = langPercents(repo._languages || {});
  const cat = llmInfo?.category || 'Other';
  const catTag = cat.toLowerCase().replace(/[/\s]/g, '_');
  const llmFailed = llmInfo?._llm_failed === true;

  // ── Frontmatter ──
  const installLabel = llmInfo?.install_complexity || 'unknown';
  const fm = [
    '---',
    `repo: ${repo.full_name}`,
    `url: ${repo.html_url}`,
    `owner: ${repo.owner.login}`,
    `owner_type: ${repo.owner.type}`,
    `language: ${repo.language || 'N/A'}`,
    `license: ${repo.license?.spdx_id || 'N/A'}`,
    `description: "${(repo.description || '').replace(/"/g, '\\"')}"`,
    `homepage: "${repo.homepage || ''}"`,
    `stars: ${repo.stargazers_count}`,
    `stars_per_day: ${rate}`,
    `forks: ${repo.forks_count}`,
    `open_issues: ${repo.open_issues_count || 0}`,
    `created: ${repo.created_at.split('T')[0]}`,
    `pushed_at: ${repo.pushed_at?.split('T')[0] || 'N/A'}`,
    `first_seen: ${today}`,
    `week: "${getWeekString(today)}"`,
    `month: "${today.slice(0, 7)}"`,
    `category: "${cat}"`,
    `release_tag: "${repo._release?.tag || ''}"`,
    `install_complexity: "${installLabel}"`,
    `status: to-review`,
    `my_rating: 0`,
    `last_reviewed: ${today}`,
    `use_case: "${(llmInfo?.description_zh || '').replace(/"/g, '\\"').slice(0, 80)}"`,
    `priority: medium`,
    'tags:',
    '  - github',
    `  - "category/${catTag}"`,
    `  - "lang/${(repo.language || 'other').toLowerCase()}"`,
  ];
  if (repo.owner.type === 'Organization') fm.push('  - org');
  if (installLabel === 'easy') fm.push('  - easy_install');
  if (repo.topics?.length) {
    for (const t of repo.topics.slice(0, 5)) {
      fm.push(`  - "topic/${t.replace(/-/g, '_')}"`);
    }
  }
  // Aliases for Obsidian search
  const repoName = repo.full_name.split('/')[1];
  fm.push('aliases:');
  fm.push(`  - "${repoName}"`);
  fm.push(`  - "${repo.full_name}"`);
  if (llmInfo?.description_zh) fm.push(`  - "${llmInfo.description_zh.slice(0, 60)}"`);
  fm.push('---');

  const lines = [...fm, ''];

  // ── Title + Stats Bar ──
  lines.push(`# ${repo.full_name.split('/')[1]}`);
  lines.push('');
  lines.push(
    `**${fmt(repo.stargazers_count)}** stars · **${fmt(rate)}** stars/天 · 建立 ${days} 天前 · ${repo.language || 'N/A'} · ${repo.license?.spdx_id || '未標註授權'}`
  );
  lines.push('');

  // ── LLM 失敗警告 ──
  if (llmFailed) {
    lines.push('> [!warning] AI 摘要產生失敗');
    lines.push('> 此筆記的中文翻譯和分析未能成功產生。以下為原始資料，你可以手動補充。');
    lines.push('');
  }

  // ── 快速信號 ──
  const signals = [];
  if (repo.owner.type === 'Organization') signals.push('`ORG`');
  else if (repo._contributors?.length === 1) signals.push('`個人專案`');
  if (repo._release) signals.push(`\`${repo._release.tag}\``);
  if (installLabel === 'easy') signals.push('`easy-install`');
  else if (installLabel === 'hard') signals.push('`need-GPU/Docker`');
  if (repo.archived) signals.push('`ARCHIVED`');
  if (signals.length) {
    lines.push(signals.join(' '));
    lines.push('');
  }

  // ── 一句話摘要 ──
  const descZh = llmInfo?.description_zh || repo.description || 'No description';
  lines.push('> [!summary] 一句話摘要');
  lines.push(`> ${descZh}`);
  lines.push('');

  // ── 速覽卡片（一眼看出值不值得深入）──
  if (!llmFailed) {
    const installIcon = installLabel === 'easy' ? 'Easy' : installLabel === 'medium' ? 'Medium' : 'Hard';
    const ageLabel = days <= 7 ? 'Brand New' : days <= 30 ? 'Recent' : days <= 90 ? 'Growing' : 'Established';
    const momentumLabel = rate >= 1000 ? 'Viral' : rate >= 100 ? 'Hot' : rate >= 10 ? 'Growing' : 'Steady';
    lines.push('> [!info] 速覽');
    lines.push(`> **安裝難度** ${installIcon} · **專案狀態** ${ageLabel} · **熱度** ${momentumLabel} (${fmt(rate)} stars/day)`);
    if (llmInfo?.target_audience) {
      lines.push(`> **適合** ${llmInfo.target_audience}`);
    }
    if (llmInfo?.key_insight) {
      lines.push(`> **一句話重點** ${llmInfo.key_insight}`);
    }
    lines.push('');
  }

  // ── 核心創新 ──
  if (llmInfo?.novelty_claim) {
    lines.push('> [!abstract] 核心創新');
    lines.push(`> ${llmInfo.novelty_claim}`);
    lines.push('');
  }

  // ── 專案簡介 ──
  lines.push('## 專案簡介');
  lines.push('');
  if (llmInfo?.summary) {
    lines.push(llmInfo.summary);
  } else {
    lines.push(repo.description || 'No description available.');
  }
  lines.push('');

  // ── 技術棧 ──
  if (llmInfo?.tech_stack?.length) {
    lines.push(`**技術棧**：${llmInfo.tech_stack.map(t => `\`${t}\``).join(' · ')}`);
    lines.push('');
  }

  // ── 重點功能 ──
  if (llmInfo?.key_features?.length) {
    lines.push('## 重點功能');
    lines.push('');
    for (const feat of llmInfo.key_features) {
      lines.push(`- ${feat}`);
    }
    lines.push('');
  }

  // ── 快速開始（結構化步驟）──
  const steps = llmInfo?.quickstart_steps;
  if (steps?.length) {
    lines.push('## 快速開始');
    lines.push('');
    for (let i = 0; i < steps.length; i++) {
      const s = typeof steps[i] === 'string' ? { step: steps[i], cmd: null } : steps[i];
      lines.push(`${i + 1}. ${s.step}`);
      if (s.cmd) {
        lines.push('```bash');
        lines.push(s.cmd);
        lines.push('```');
      }
    }
    lines.push('');
  } else if (llmInfo?.quickstart) {
    // 向下相容舊格式
    lines.push('## 快速開始');
    lines.push('');
    lines.push(llmInfo.quickstart);
    lines.push('');
  }

  // ── 程式碼範例 ──
  if (llmInfo?.code_example) {
    lines.push('## 程式碼範例');
    lines.push('');
    lines.push(llmInfo.code_example);
    lines.push('');
  }

  // ── 為什麼值得關注 ──
  if (llmInfo?.why_trending) {
    lines.push('## 為什麼值得關注');
    lines.push('');
    lines.push('> [!tip] 爆紅原因');
    lines.push(`> ${llmInfo.why_trending}`);
    lines.push('');
  }

  // ── 適合誰 + 使用場景 ──
  if (llmInfo?.use_cases?.length || llmInfo?.target_audience) {
    lines.push('## 適合誰使用');
    lines.push('');
    if (llmInfo.target_audience) {
      lines.push(`**目標受眾**：${llmInfo.target_audience}`);
      lines.push('');
    }
    if (llmInfo.use_cases?.length) {
      lines.push('> [!example] 使用場景');
      for (const uc of llmInfo.use_cases) {
        lines.push(`> - ${uc}`);
      }
      lines.push('');
    }
  }

  // ── 架構分析 ──
  if (llmInfo?.architecture) {
    lines.push('## 架構分析');
    lines.push('');
    lines.push(llmInfo.architecture);
    lines.push('');
  }

  // ── 技術深入分析 ──
  if (llmInfo?.deep_dive) {
    lines.push('## 技術深入分析');
    lines.push('');
    lines.push('> [!note]- 展開深入分析');
    lines.push(`> ${llmInfo.deep_dive.split('\n').join('\n> ')}`);
    lines.push('');
  }

  // ── 優缺點 ──
  if (llmInfo?.pros_cons) {
    lines.push('## 優缺點分析');
    lines.push('');
    if (llmInfo.pros_cons.pros?.length) {
      lines.push('> [!success] 優點');
      for (const p of llmInfo.pros_cons.pros) {
        lines.push(`> - ${p}`);
      }
      lines.push('');
    }
    if (llmInfo.pros_cons.cons?.length) {
      lines.push('> [!danger] 缺點');
      for (const c of llmInfo.pros_cons.cons) {
        lines.push(`> - ${c}`);
      }
      lines.push('');
    }
  }

  // ── 注意事項 ──
  if (llmInfo?.limitations) {
    const lims = Array.isArray(llmInfo.limitations) ? llmInfo.limitations : [llmInfo.limitations];
    lines.push('> [!warning] 注意事項');
    for (const lim of lims) {
      lines.push(`> - ${lim}`);
    }
    lines.push('');
  }

  // ── 類似工具比較（結構化表格 + 跨筆記連結）──
  if (llmInfo?.similar_tools?.length) {
    lines.push('## 類似工具比較');
    lines.push('');
    const first = llmInfo.similar_tools[0];
    if (typeof first === 'object' && first.name) {
      lines.push('| 工具 | 差異 |');
      lines.push('| --- | --- |');
      for (const t of llmInfo.similar_tools) {
        // 嘗試將工具名轉為 wikilink（如果可能是 GitHub repo）
        const toolName = t.name || '';
        const display = toolName.includes('/') ? `[[${repoFileName(toolName).replace('.md', '')}\\|${toolName}]]` : toolName;
        lines.push(`| ${display} | ${t.diff || ''} |`);
      }
    } else {
      lines.push(`相關替代方案：${llmInfo.similar_tools.map(t => typeof t === 'string' ? t : t.name).join('、')}`);
    }
    lines.push('');
  }

  // ── 技術細節（不重複 stats bar 已有資訊）──
  lines.push('## 技術細節');
  lines.push('');
  lines.push('| 欄位 | 值 |');
  lines.push('| --- | --- |');
  lines.push(`| Forks | ${fmt(repo.forks_count)} |`);
  lines.push(`| Open Issues | ${repo.open_issues_count} |`);
  lines.push(`| 最後推送 | ${repo.pushed_at?.split('T')[0] || 'N/A'} |`);
  lines.push(`| 建立日期 | ${repo.created_at.split('T')[0]} |`);
  if (repo.homepage) lines.push(`| 官方網站 | [Link](${repo.homepage}) |`);
  if (repo.size) lines.push(`| Repo 大小 | ${repo.size > 1024 ? `${(repo.size / 1024).toFixed(1)} MB` : `${repo.size} KB`} |`);
  lines.push('');

  // 語言組成 pie chart
  const langEntries = Object.entries(langPct);
  if (langEntries.length > 1) {
    lines.push('> [!info]- 語言組成');
    lines.push('> ```mermaid');
    lines.push('> pie title 語言組成');
    for (const [lang, pct] of langEntries) {
      lines.push(`>     "${lang}" : ${pct}`);
    }
    lines.push('> ```');
    lines.push('');
  }

  // 貢獻者
  if (repo._contributors?.length) {
    lines.push('> [!info]- 主要貢獻者');
    lines.push('> | 貢獻者 | Commits |');
    lines.push('> | --- | --- |');
    for (const c of repo._contributors) {
      lines.push(`> | [@${c.login}](https://github.com/${c.login}) | ${c.contributions} |`);
    }
    lines.push('');
  }

  // 最新版本
  if (repo._release) {
    lines.push(
      `**最新版本**：${repo._release.tag}${repo._release.name !== repo._release.tag ? ` — ${repo._release.name}` : ''} (${repo._release.date})`
    );
    lines.push('');
  }

  // ── 社群與生態 ──
  if (llmInfo?.community) {
    lines.push('## 社群與生態');
    lines.push('');
    const comm = llmInfo.community;
    if (comm.activity) lines.push(`**社群活躍度**：${comm.activity}`);
    const commLinks = [];
    if (comm.docs_url) commLinks.push(`[文件](${comm.docs_url})`);
    if (comm.discord) commLinks.push(`[Discord](${comm.discord})`);
    if (commLinks.length) lines.push(`**連結**：${commLinks.join(' · ')}`);
    lines.push('');
  }

  // ── README 摘錄（可收合）──
  if (repo._readme) {
    lines.push('## README 摘錄');
    lines.push('');
    lines.push('> [!info]- 展開查看原文 README');
    const readmeLines = repo._readme.slice(0, 4000).split('\n');
    for (const rl of readmeLines) {
      lines.push(`> ${rl}`);
    }
    lines.push('');
  }

  // ── 延伸閱讀 ──
  lines.push('## 延伸閱讀');
  lines.push('');
  if (llmInfo?.related_concepts?.length) {
    lines.push(`相關概念：${llmInfo.related_concepts.map((c) => `[[${c}]]`).join(' · ')}`);
    lines.push('');
  }
  // 跨 repo wikilinks：連結到 similar_tools 中存在於 vault 的 repo
  if (llmInfo?.similar_tools?.length) {
    const repoLinks = llmInfo.similar_tools
      .filter(t => typeof t === 'object' && t.name?.includes('/'))
      .map(t => `[[${t.name.replace(/\//g, '--')}|${t.name}]]`);
    if (repoLinks.length) {
      lines.push(`相關專案：${repoLinks.join(' · ')}`);
      lines.push('');
    }
  }
  const extLinks = [`[GitHub](${repo.html_url})`];
  if (repo.homepage) extLinks.push(`[官方網站](${repo.homepage})`);
  lines.push(extLinks.join(' · '));
  lines.push('');

  // ── 相關收錄（同分類 + 同週）──
  lines.push('## 相關收錄');
  lines.push('');
  const safeFn = repoFileName(repo.full_name).replace('.md', '');
  lines.push(`> [!note]- 同分類的其他專案`);
  lines.push('> ```dataview');
  lines.push('> TABLE stars, install_complexity AS "難度", status');
  lines.push('> FROM "Repos"');
  lines.push(`> WHERE category = "${cat}" AND file.name != "${safeFn}"`);
  lines.push('> SORT stars DESC');
  lines.push('> LIMIT 8');
  lines.push('> ```');
  lines.push('');
  lines.push(`> [!note]- 同週收錄`);
  lines.push('> ```dataview');
  lines.push('> TABLE category AS "分類", stars, stars_per_day AS "stars/天"');
  lines.push('> FROM "Repos"');
  lines.push(`> WHERE week = "${getWeekString(today)}" AND file.name != "${safeFn}"`);
  lines.push('> SORT stars DESC');
  lines.push('> ```');
  lines.push('');

  // ── 個人筆記區 ──
  lines.push('---');
  lines.push('');
  lines.push('## 個人筆記');
  lines.push('');
  lines.push('> [!question]+ 快速評估（30 秒填完）');
  lines.push('> ');
  lines.push('> 相關性:: 未評估');
  lines.push('> 印象:: _一句話_');
  lines.push('> 行動:: 不需要');
  lines.push('> ');
  lines.push('> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_');
  lines.push('> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_');
  lines.push('');
  lines.push('### 試用記錄');
  lines.push('');
  lines.push('> [!example]- 試用 #1');
  lines.push('> 試用日期 :: ');
  lines.push('> 試用版本 :: ');
  lines.push('> 安裝過程 :: _順利 / 遇到問題（描述）_');
  lines.push('> 實際效果 :: _達到預期 / 不如預期（原因）_');
  lines.push('> 決定 :: _繼續使用 / 暫時擱置 / 放棄（原因）_');
  lines.push('');
  lines.push('> [!question]- 待研究的問題');
  lines.push('> _記下看完後還沒有答案的問題，未來回來補充_');
  lines.push('> ');
  lines.push('> - [ ] ');
  lines.push('');
  lines.push('### 採用判斷');
  lines.push('');
  lines.push('> [!tip]- 什麼時候該用 / 不該用');
  lines.push('> **該用的情況**：');
  lines.push('> - ');
  lines.push('> ');
  lines.push('> **不該用的情況**：');
  lines.push('> - ');
  lines.push('');
  lines.push('### 想法與筆記');
  lines.push('');
  lines.push('_隨時記錄想法、發現、跟其他工具的比較..._');
  lines.push('_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_');
  lines.push('');
  lines.push('**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`');
  lines.push('');

  // 出現記錄
  lines.push('## 出現記錄');
  lines.push('');
  lines.push(`- [[${today}|${today}]] — 首次收錄，${fmt(repo.stargazers_count)} stars`);
  lines.push('');

  return lines.join('\n');
}

// ── Daily Digest（索引頁）────────────────────────────────────

function generateDailyDigest(repos, llmData, today) {
  const totalStars = repos.reduce((s, r) => s + r.stargazers_count, 0);
  const langs = langStats(repos);
  const top = repos[0];

  const llm = {};
  if (llmData) {
    for (const item of llmData) {
      if (!item.repo) continue;
      llm[item.repo] = item;
      llm[item.repo.toLowerCase()] = item;
    }
  }
  const _get = (name) => llm[name] || llm[name.toLowerCase()] || null;

  const topInfo = _get(top.full_name);
  const topDesc = topInfo?.description_zh || top.description || '';

  const lines = [
    '---',
    `date: ${today}`,
    'tags:',
    '  - github',
    '  - daily',
    `total_stars: ${totalStars}`,
    `repo_count: ${repos.length}`,
    '---',
    '',
    `# GitHub Trending - ${today}`,
    '',
    '> [!summary] 本日摘要',
    `> 收錄 **${repos.length}** 個新專案，合計 **${fmt(totalStars)}** stars`,
    `> 語言分佈：${langs.map(([l, c]) => `${l} (${c})`).join(' · ')}`,
    '',
    '> [!tip] 本週焦點',
    `> **[[${repoFileName(top.full_name).replace('.md', '')}|${top.full_name}]]** — ${daysAgo(top.created_at)} 天內累積 ${fmt(top.stargazers_count)} stars（${fmt(starsPerDay(top.stargazers_count, top.created_at))} stars/天）`,
    `> ${topDesc}`,
    '',
    '```mermaid',
    'pie title 語言分佈',
    ...langs.map(([lang, count]) => `    "${lang}" : ${count}`),
    '```',
    '',
    '---',
    '',
    '## 收錄列表',
    '',
    '| # | 專案 | 分類 | Stars | 速度 | 語言 |',
    '| :--: | --- | --- | ---: | ---: | --- |',
  ];

  // 表格
  for (let i = 0; i < repos.length; i++) {
    const r = repos[i];
    const info = _get(r.full_name);
    const cat = info?.category || '';
    const link = `[[${repoFileName(r.full_name).replace('.md', '')}\\|${r.full_name}]]`;
    lines.push(
      `| ${i + 1} | ${link} | ${cat} | ${fmt(r.stargazers_count)} | ${fmt(starsPerDay(r.stargazers_count, r.created_at))}/天 | ${r.language || 'N/A'} |`
    );
  }

  lines.push('');
  lines.push('---');
  lines.push('');

  // 每個 repo 的簡短介紹 + 連結
  lines.push('## 重點摘要');
  lines.push('');

  for (let i = 0; i < repos.length; i++) {
    const r = repos[i];
    const info = _get(r.full_name);
    const noteLink = `[[${repoFileName(r.full_name).replace('.md', '')}|${r.full_name}]]`;

    lines.push(`### ${i + 1}. ${noteLink}${info?.category ? ` \`${info.category}\`` : ''}`);
    lines.push('');

    if (info?.description_zh) {
      lines.push(`> ${info.description_zh}`);
      lines.push('');
    }

    lines.push(
      `**${fmt(r.stargazers_count)}** stars · **${fmt(starsPerDay(r.stargazers_count, r.created_at))}** stars/天 · ${r.language || 'N/A'}`
    );
    lines.push('');

    if (info?.why_trending) {
      lines.push(`_${info.why_trending}_`);
      lines.push('');
    }

    lines.push('---');
    lines.push('');
  }

  return lines.join('\n');
}

// ── Dashboard（Dataview 彙總頁）─────────────────────────────

function generateDashboard() {
  return `---
tags:
  - dashboard
cssclasses:
  - dashboard
---

# GitHub Trending Dashboard

> [!summary] 總覽
> 使用 Dataview 插件自動彙總所有收錄的 GitHub 專案

## 回顧進度

\`\`\`dataviewjs
const pages = dv.pages('"Repos"');
const total = pages.length;
const reviewed = pages.where(p => p.status && p.status !== "to-review").length;
const rated = pages.where(p => p.my_rating > 0).length;
const tried = pages.where(p => p.status === "tried").length;
const integrated = pages.where(p => p.status === "integrated").length;
const archived = pages.where(p => p.status === "archived").length;
const pct = total > 0 ? Math.round((reviewed / total) * 100) : 0;

dv.paragraph(\`**\${total}** 個專案 · 已回顧 **\${reviewed}** (\${pct}%) · 已評分 **\${rated}** · 已試用 **\${tried}** · 已整合 **\${integrated}** · 已封存 **\${archived}\`);
dv.paragraph(\`<progress value="\${reviewed}" max="\${total}" style="width:100%"></progress>\`);
\`\`\`

## 收錄時間軸

\`\`\`dataview
CALENDAR first_seen
FROM "Repos"
\`\`\`

## 依狀態分群

\`\`\`dataview
TABLE WITHOUT ID
  status AS "狀態",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
GROUP BY status
SORT length(rows) DESC
\`\`\`

## 爆紅專案 Top 15

\`\`\`dataview
TABLE
  stars_per_day AS "Stars/天",
  stars AS "Stars",
  language AS "語言",
  category AS "分類",
  install_complexity AS "安裝難度",
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分"
FROM "Repos"
SORT stars_per_day DESC
LIMIT 15
\`\`\`

## 已評分的專案

\`\`\`dataview
TABLE
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分",
  stars AS "Stars",
  category AS "分類",
  status AS "狀態",
  install_complexity AS "安裝"
FROM "Repos"
WHERE my_rating > 0
SORT my_rating DESC
\`\`\`

## 待回顧（優先順序）

> [!tip] 回顧建議
> Stars/天 最高的專案最值得優先回顧。use_case 欄位幫你快速判斷是否相關。

\`\`\`dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  category AS "分類",
  install_complexity AS "安裝",
  use_case AS "解決什麼問題",
  priority AS "優先級"
FROM "Repos"
WHERE status = "to-review"
SORT stars_per_day DESC
\`\`\`

## 依優先級分群

\`\`\`dataview
TABLE WITHOUT ID
  priority AS "優先級",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
WHERE status != "archived"
GROUP BY priority
SORT choice(priority, "high", 1, choice(priority, "medium", 2, 3)) ASC
\`\`\`

## 需要重新檢視（超過 30 天未回顧）

\`\`\`dataview
TABLE
  last_reviewed AS "最後回顧",
  status AS "狀態",
  stars AS "Stars"
FROM "Repos"
WHERE last_reviewed AND date(today) - date(last_reviewed) > dur(30 days)
  AND status != "archived"
SORT last_reviewed ASC
\`\`\`

## 依分類瀏覽

\`\`\`dataview
TABLE WITHOUT ID
  category AS "分類",
  length(rows) AS "數量",
  sum(rows.stars) AS "總 Stars",
  round(sum(rows.my_rating) / length(rows.where(r => r.my_rating > 0)), 1) AS "平均評分"
FROM "Repos"
GROUP BY category
SORT length(rows) DESC
\`\`\`

## 依語言瀏覽

\`\`\`dataview
TABLE WITHOUT ID
  language AS "語言",
  length(rows) AS "數量",
  sum(rows.stars) AS "總 Stars",
  rows.file.link AS "專案"
FROM "Repos"
GROUP BY language
SORT length(rows) DESC
\`\`\`

## 安裝難度分佈

\`\`\`dataview
TABLE WITHOUT ID
  install_complexity AS "難度",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
GROUP BY install_complexity
SORT choice(install_complexity, "easy", 1, choice(install_complexity, "medium", 2, 3)) ASC
\`\`\`

## 本週新增

\`\`\`dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  language AS "語言",
  category AS "分類",
  install_complexity AS "安裝"
FROM "Repos"
WHERE date(first_seen) >= date(today) - dur(7 days)
SORT stars DESC
\`\`\`

## 每週收錄量

\`\`\`dataview
TABLE WITHOUT ID
  week AS "週次",
  length(rows) AS "收錄數",
  sum(rows.stars) AS "總 Stars",
  max(rows.stars_per_day) AS "最快 Stars/天"
FROM "Repos"
GROUP BY week
SORT week DESC
\`\`\`

## 持續熱門

> [!tip] 收錄超過 7 天仍在活躍開發的專案

\`\`\`dataviewjs
const pages = dv.pages('"Repos"')
  .where(p => {
    if (!p.first_seen || !p.pushed_at) return false;
    const daysSinceSeen = (new Date() - new Date(p.first_seen?.toString())) / 86400000;
    const daysSincePush = (new Date() - new Date(p.pushed_at?.toString())) / 86400000;
    return daysSinceSeen > 7 && daysSincePush < 7 && (p.stars_per_day || 0) > 100;
  })
  .sort(p => p.stars, "desc");

if (pages.length > 0) {
  dv.table(
    ["專案", "Stars/天", "收錄日期", "最後推送", "分類"],
    pages.map(p => [p.file.link, p.stars_per_day, p.first_seen, p.pushed_at, p.category])
  );
} else {
  dv.paragraph("目前沒有符合條件的持續熱門專案（需追蹤超過 7 天）");
}
\`\`\`

## 分類趨勢

\`\`\`dataviewjs
const pages = dv.pages('"Repos"');
const catData = {};
for (const p of pages) {
  const cat = p.category || "其他";
  catData[cat] = (catData[cat] || 0) + 1;
}
const sorted = Object.entries(catData).sort((a,b) => b[1] - a[1]).slice(0, 10);
dv.table(
  ["分類", "數量", "佔比", "視覺化"],
  sorted.map(([cat, count]) => {
    const pct = Math.round((count / pages.length) * 100);
    const bar = "█".repeat(Math.round(pct / 5)) + "░".repeat(20 - Math.round(pct / 5));
    return [cat, count, pct + "%", bar];
  })
);
\`\`\`

## 月度趨勢

\`\`\`dataviewjs
const pages = dv.pages('"Repos"');
const months = {};
for (const p of pages) {
  const fs = p.first_seen?.toString();
  if (!fs) continue;
  const m = fs.slice(0, 7);
  if (!months[m]) months[m] = { count: 0, stars: 0, rated: 0 };
  months[m].count++;
  months[m].stars += (p.stars || 0);
  if (p.my_rating > 0) months[m].rated++;
}
const sorted = Object.entries(months).sort((a, b) => b[0].localeCompare(a[0]));
dv.table(
  ["月份", "收錄數", "總 Stars", "已評分", "平均 Stars"],
  sorted.map(([m, d]) => [
    dv.fileLink(m, false, m),
    d.count,
    d.stars.toLocaleString(),
    d.rated,
    Math.round(d.stars / d.count).toLocaleString()
  ])
);
\`\`\`

## Easy Install 專案

> [!tip] 立即可試
> 安裝複雜度為 easy 的專案，一行指令就能開始使用

\`\`\`dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  category AS "分類",
  language AS "語言",
  status AS "狀態"
FROM "Repos"
WHERE install_complexity = "easy"
SORT stars DESC
LIMIT 10
\`\`\`

## 速覽清單

> [!tip] 快速掃描
> 一眼看完每個專案的重點

\`\`\`dataviewjs
const pages = dv.pages('"Repos"')
  .sort(p => p.stars_per_day || 0, "desc");

const rows = [];
for (const p of pages) {
  const desc = p.aliases?.[2] || p.description || "";
  const install = p.install_complexity === "easy" ? "Easy" : p.install_complexity === "medium" ? "Mid" : "Hard";
  rows.push([
    p.file.link,
    (p.stars_per_day || 0) + "/d",
    install,
    p.category || "",
    desc.slice(0, 50) + (desc.length > 50 ? "..." : "")
  ]);
}
dv.table(["專案", "速度", "安裝", "分類", "一句話"], rows);
\`\`\`

## 孤立筆記（缺少連結）

> [!warning] 這些筆記沒有跟其他筆記建立連結，Graph View 中會是孤島

\`\`\`dataviewjs
const pages = dv.pages('"Repos"');
const orphans = pages.where(p => {
  const outlinks = p.file.outlinks?.length || 0;
  const inlinks = p.file.inlinks?.length || 0;
  return (outlinks + inlinks) < 3;
});
if (orphans.length > 0) {
  dv.table(
    ["專案", "Stars", "分類", "外連結", "內連結"],
    orphans.sort(p => p.stars, "desc").limit(10).map(p => [
      p.file.link,
      p.stars,
      p.category,
      p.file.outlinks?.length || 0,
      p.file.inlinks?.length || 0
    ])
  );
} else {
  dv.paragraph("所有筆記都有足夠的連結！");
}
\`\`\`

## 所有專案

\`\`\`dataview
TABLE
  stars AS "Stars",
  language AS "語言",
  category AS "分類",
  status AS "狀態",
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分",
  first_seen AS "收錄日期"
FROM "Repos"
SORT stars DESC
\`\`\`

---

> [!info] 使用說明
> 此頁面需要安裝 [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 插件才能正常顯示。
> 安裝方式：設定 → 社群插件 → 搜尋 Dataview → 安裝並啟用
> DataviewJS 需在 Dataview 設定中啟用（設定 → Dataview → Enable JavaScript Queries）
>
> **推薦插件**：
> - [Contribution Graph](https://github.com/vran-dev/obsidian-contribution-graph) — 收錄熱力圖
> - [Charts View](https://github.com/caronchen/obsidian-chartsview-plugin) — 語言分佈圖表
> - [Periodic Notes](https://github.com/liamcain/obsidian-periodic-notes) — 每週回顧自動化
`;
}

// ── 週報 ─────────────────────────────────────────────────────

const WEEKLY_DIR = join(ROOT, 'Weekly');

function generateWeeklyReview(weekStr) {
  return `---
tags:
  - weekly
week: "${weekStr}"
---

# 週報 - ${weekStr}

## 本週總覽

\`\`\`dataviewjs
const pages = dv.pages('"Repos"').where(p => p.week === "${weekStr}");
const total = pages.length;
const totalStars = pages.array().reduce((s, p) => s + (p.stars || 0), 0);
const topRepo = pages.sort(p => p.stars, 'desc').first();
const topName = topRepo ? topRepo.file.link : "N/A";
const topStars = topRepo ? topRepo.stars : 0;
dv.paragraph(\`本週收錄 **\${total}** 個專案 · 合計 **\${totalStars.toLocaleString()}** stars\`);
if (topRepo) dv.paragraph(\`本週之星：\${topName}（\${topStars.toLocaleString()} stars）\`);
\`\`\`

## 本週新增專案

\`\`\`dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  language AS "語言",
  category AS "分類",
  install_complexity AS "安裝",
  description AS "描述"
FROM "Repos"
WHERE week = "${weekStr}"
SORT stars DESC
\`\`\`

## 本週亮點（Stars/天 >= 500）

\`\`\`dataview
TABLE
  stars_per_day AS "Stars/天",
  stars AS "Stars",
  category AS "分類",
  language AS "語言"
FROM "Repos"
WHERE week = "${weekStr}" AND stars_per_day >= 500
SORT stars_per_day DESC
\`\`\`

## 分類分佈

\`\`\`dataview
TABLE WITHOUT ID
  category AS "分類",
  length(rows) AS "數量",
  sum(rows.stars) AS "總 Stars"
FROM "Repos"
WHERE week = "${weekStr}"
GROUP BY category
SORT length(rows) DESC
\`\`\`

## 語言分佈

\`\`\`dataview
TABLE WITHOUT ID
  language AS "語言",
  length(rows) AS "數量",
  sum(rows.stars) AS "總 Stars"
FROM "Repos"
WHERE week = "${weekStr}"
GROUP BY language
SORT length(rows) DESC
\`\`\`

## 安裝難度分佈

\`\`\`dataview
TABLE WITHOUT ID
  install_complexity AS "難度",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
WHERE week = "${weekStr}"
GROUP BY install_complexity
\`\`\`

## Easy Install 推薦

> [!tip] 一行就能跑
> 本週安裝最簡單的專案，適合快速試用

\`\`\`dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  category AS "分類"
FROM "Repos"
WHERE week = "${weekStr}" AND install_complexity = "easy"
SORT stars DESC
\`\`\`

## 每日記錄

\`\`\`dataview
LIST
FROM "Daily"
SORT date ASC
\`\`\`

## 自動趨勢分析

\`\`\`dataviewjs
const pages = dv.pages('"Repos"').where(p => p.week === "${weekStr}");
if (pages.length === 0) { dv.paragraph("_本週尚無收錄_"); }
else {
  const cats = {};
  const langs = {};
  let maxSpd = 0; let fastest = null;
  for (const p of pages) {
    const c = p.category || "其他";
    cats[c] = (cats[c] || 0) + 1;
    const l = p.language || "Other";
    langs[l] = (langs[l] || 0) + 1;
    if ((p.stars_per_day || 0) > maxSpd) { maxSpd = p.stars_per_day; fastest = p; }
  }
  const topCat = Object.entries(cats).sort((a,b) => b[1]-a[1])[0];
  const topLang = Object.entries(langs).sort((a,b) => b[1]-a[1])[0];
  const easyCount = pages.where(p => p.install_complexity === "easy").length;

  dv.paragraph(\`本週 \${pages.length} 個專案中，**\${topCat[0]}** 類最多（\${topCat[1]} 個），主要語言為 **\${topLang[0]}**。\`);
  if (fastest) dv.paragraph(\`成長最快：\${fastest.file.link}（\${maxSpd} stars/天）\`);
  if (easyCount > 0) dv.paragraph(\`有 **\${easyCount}** 個 easy-install 專案可以快速試用。\`);
}
\`\`\`

---

## 本週趨勢觀察

> [!question]+ 趨勢分析（每週花 5 分鐘寫）
>
> **主要趨勢**：_本週最明顯的技術趨勢是什麼？（例如：某個框架生態爆發、某類工具集中出現）_
>
> **印象最深的專案**：_哪個專案改變了你對某件事的看法？_
>
> **跟上週比**：_趨勢有延續還是轉向？_

> [!todo]+ 行動項目
> - [ ] 選出本週最值得試用的 1-2 個專案
> - [ ] 更新已試用專案的 status（to-review → reading/tried）
> - [ ] 在印象最深的專案筆記中寫下想法

`;
}

// ── 月報 ─────────────────────────────────────────────────────

const MONTHLY_DIR = join(ROOT, 'Monthly');

function getMonthString(dateStr) {
  const d = new Date(dateStr);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
}

function generateMonthlyReview(monthStr) {
  // monthStr 格式：2026-03
  const [year, month] = monthStr.split('-');
  const monthName = `${year} 年 ${parseInt(month)} 月`;
  return `---
tags:
  - monthly
month: "${monthStr}"
---

# 月報 - ${monthName}

## 本月總覽

\`\`\`dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  const fs = p.first_seen?.toString();
  return fs && fs.startsWith("${monthStr}");
});
const total = pages.length;
const totalStars = pages.array().reduce((s, p) => s + (p.stars || 0), 0);
const reviewed = pages.where(p => p.status && p.status !== "to-review").length;
const rated = pages.where(p => p.my_rating > 0).length;
const avgRating = rated > 0 ? (pages.where(p => p.my_rating > 0).array().reduce((s, p) => s + p.my_rating, 0) / rated).toFixed(1) : "N/A";

dv.paragraph(\`本月收錄 **\${total}** 個專案 · 合計 **\${totalStars.toLocaleString()}** stars · 已回顧 **\${reviewed}** · 已評分 **\${rated}**\`);
if (rated > 0) dv.paragraph(\`平均評分：**\${avgRating}**/5\`);
\`\`\`

## 本月之星 Top 10

\`\`\`dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  const fs = p.first_seen?.toString();
  return fs && fs.startsWith("${monthStr}");
}).sort(p => p.stars, 'desc').limit(10);

dv.table(
  ["專案", "Stars", "Stars/天", "分類", "語言", "評分"],
  pages.map(p => [
    p.file.link,
    p.stars,
    p.stars_per_day,
    p.category,
    p.language,
    p.my_rating > 0 ? "★".repeat(p.my_rating) + "☆".repeat(5 - p.my_rating) : "-"
  ])
);
\`\`\`

## 分類趨勢

\`\`\`dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  const fs = p.first_seen?.toString();
  return fs && fs.startsWith("${monthStr}");
});

const cats = {};
for (const p of pages) {
  const c = p.category || "其他";
  if (!cats[c]) cats[c] = { count: 0, stars: 0 };
  cats[c].count++;
  cats[c].stars += (p.stars || 0);
}

const sorted = Object.entries(cats).sort((a, b) => b[1].count - a[1].count);
dv.table(
  ["分類", "數量", "總 Stars", "佔比"],
  sorted.map(([cat, data]) => [
    cat,
    data.count,
    data.stars.toLocaleString(),
    Math.round((data.count / pages.length) * 100) + "%"
  ])
);
\`\`\`

## 語言分佈

\`\`\`dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  const fs = p.first_seen?.toString();
  return fs && fs.startsWith("${monthStr}");
});

const langs = {};
for (const p of pages) {
  const l = p.language || "Other";
  langs[l] = (langs[l] || 0) + 1;
}

const sorted = Object.entries(langs).sort((a, b) => b[1] - a[1]);
dv.table(
  ["語言", "數量", "佔比"],
  sorted.map(([lang, count]) => [
    lang,
    count,
    Math.round((count / pages.length) * 100) + "%"
  ])
);
\`\`\`

## 安裝難度分佈

\`\`\`dataview
TABLE WITHOUT ID
  install_complexity AS "難度",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
WHERE first_seen AND dateformat(first_seen, "yyyy-MM") = "${monthStr}"
GROUP BY install_complexity
\`\`\`

## 本月週報

\`\`\`dataview
LIST
FROM "Weekly"
WHERE contains(file.name, "${year}")
SORT file.name ASC
\`\`\`

## 值得關注的發現

\`\`\`dataview
TABLE
  stars_per_day AS "Stars/天",
  stars AS "Stars",
  category AS "分類",
  install_complexity AS "安裝"
FROM "Repos"
WHERE first_seen AND dateformat(first_seen, "yyyy-MM") = "${monthStr}"
  AND stars_per_day >= 200
SORT stars_per_day DESC
\`\`\`

---

## 月度回顧

> [!question]+ 本月回顧
> _回顧本月的技術趨勢、值得注意的專案、以及個人收穫_

> [!abstract]+ 趨勢觀察
> _本月的主要技術趨勢是什麼？哪些領域最活躍？_

> [!todo]+ 下月計劃
> - [ ] 從本月收錄中選出 3 個深入研究的專案
> - [ ] 更新所有已試用專案的狀態
> - [ ] 整理本月發現的新工具和新技術

`;
}

// ── MOC（Map of Content）分類索引頁 ─────────────────────────

const MOC_DIR = join(ROOT, 'MOC');

function generateMOCContent(category) {
  return `---
tags:
  - moc
  - ${category.toLowerCase().replace(/[/\s]/g, '_')}
---

# MOC - ${category}

> 所有分類為「${category}」的 GitHub Trending 專案

## 總覽

\`\`\`dataviewjs
const pages = dv.pages('"Repos"').where(p => p.category === "${category}");
const total = pages.length;
const reviewed = pages.where(p => p.status && p.status !== "to-review").length;
const avgStars = total > 0 ? Math.round(pages.array().reduce((s, p) => s + (p.stars || 0), 0) / total) : 0;
dv.paragraph(\`**\${total}** 個專案 · 已回顧 \${reviewed}/\${total} · 平均 Stars: \${avgStars.toLocaleString()}\`);
\`\`\`

## 依狀態分群

\`\`\`dataview
TABLE WITHOUT ID
  status AS "狀態",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
WHERE category = "${category}"
GROUP BY status
SORT length(rows) DESC
\`\`\`

## 專案列表（依 Stars 排序）

\`\`\`dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  language AS "語言",
  install_complexity AS "安裝",
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分",
  status AS "狀態",
  first_seen AS "收錄日期"
FROM "Repos"
WHERE category = "${category}"
SORT stars DESC
\`\`\`

## 依語言分群

\`\`\`dataview
TABLE WITHOUT ID
  language AS "語言",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
WHERE category = "${category}"
GROUP BY language
SORT length(rows) DESC
\`\`\`

## 待回顧（優先）

\`\`\`dataview
TABLE
  stars_per_day AS "Stars/天",
  stars AS "Stars",
  install_complexity AS "安裝"
FROM "Repos"
WHERE category = "${category}" AND status = "to-review"
SORT stars_per_day DESC
\`\`\`

## 每週趨勢

\`\`\`dataview
TABLE WITHOUT ID
  week AS "週次",
  length(rows) AS "新增數",
  rows.file.link AS "專案"
FROM "Repos"
WHERE category = "${category}"
GROUP BY week
SORT week DESC
\`\`\`
`;
}

function generateHome() {
  return `---
tags:
  - home
cssclasses:
  - home
---

# GitHub Trending Vault

> 自動追蹤 GitHub 上最熱門的新專案，每日更新，用 Obsidian 整理和回顧。

## 快速導覽

| 頁面 | 說明 |
| --- | --- |
| [[Dashboard]] | 完整數據儀表板 — 統計、排行、分類 |
| [[Triage]] | 快速分流 — 看板式工作流 |
| [[MOC - AI-ML]] | AI/ML 相關專案 |
| [[MOC - 開發工具]] | 開發者工具 |
| [[MOC - Web 應用]] | Web 應用程式 |
| [[MOC - CLI 工具]] | 命令列工具 |
| [[MOC - 安全]] | 安全相關 |
| [[MOC - 資料科學]] | 資料科學 |
| [[MOC - 教學資源]] | 教學資源 |
| [[MOC - 基礎設施]] | 基礎設施 |

## 統計快照

\`\`\`dataviewjs
const pages = dv.pages('"Repos"');
const total = pages.length;
const reviewed = pages.where(p => p.status && p.status !== "to-review").length;
const tried = pages.where(p => p.status === "tried" || p.status === "integrated").length;
const rated = pages.where(p => p.my_rating > 0).length;
const pct = total > 0 ? Math.round((reviewed / total) * 100) : 0;

const cats = {};
for (const p of pages) {
  const c = p.category || "其他";
  cats[c] = (cats[c] || 0) + 1;
}
const topCat = Object.entries(cats).sort((a,b) => b[1] - a[1])[0];

dv.paragraph(\`**\${total}** 個專案 · 回顧 **\${reviewed}** (\${pct}%) · 試用 **\${tried}** · 評分 **\${rated}**\`);
dv.paragraph(\`<progress value="\${reviewed}" max="\${total}" style="width:100%"></progress>\`);
if (topCat) dv.paragraph(\`最多分類：**\${topCat[0]}** (\${topCat[1]} 個)\`);
\`\`\`

## 最新收錄

\`\`\`dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  category AS "分類",
  language AS "語言"
FROM "Repos"
SORT first_seen DESC
LIMIT 10
\`\`\`

## 待回顧（優先）

\`\`\`dataview
TABLE
  stars_per_day AS "Stars/天",
  category AS "分類",
  install_complexity AS "安裝"
FROM "Repos"
WHERE status = "to-review"
SORT stars_per_day DESC
LIMIT 5
\`\`\`

## 已評分的精選

\`\`\`dataview
TABLE
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分",
  category AS "分類",
  status AS "狀態"
FROM "Repos"
WHERE my_rating > 0
SORT my_rating DESC
LIMIT 10
\`\`\`

## 最近的週報

\`\`\`dataview
LIST
FROM "Weekly"
SORT file.name DESC
LIMIT 4
\`\`\`

## 月報

\`\`\`dataview
LIST
FROM "Monthly"
SORT file.name DESC
LIMIT 3
\`\`\`

---

> [!info] 關於這個 Vault
> 由 [GitHub Actions](https://github.com/Lucasnocodo/github-trending-obsidian) 每日自動更新。
> 使用 GitHub Models API (gpt-4o-mini) 產生中文摘要和分析。
`;
}

async function generateMOCs() {
  await mkdir(MOC_DIR, { recursive: true });
  const categories = [
    'AI/ML',
    '開發工具',
    'Web 應用',
    'CLI 工具',
    '資料科學',
    '安全',
    '教學資源',
    '基礎設施',
    '其他',
  ];
  for (const cat of categories) {
    const fileName = `MOC - ${cat.replace(/\//g, '-')}.md`;
    const filePath = join(MOC_DIR, fileName);
    await writeFile(filePath, generateMOCContent(cat), 'utf-8');
  }
  console.log(`Updated: ${categories.length} MOC pages`);
}

// ── 概念筆記（Zettelkasten 概念層）───────────────────────────

const CONCEPTS_DIR = join(ROOT, 'Concepts');

function generateConceptNote(concept) {
  return `---
tags:
  - concept
aliases:
  - "${concept}"
---

# ${concept}

## 是什麼

_用 2-3 句話解釋這個概念。想像對象是一個聰明但不熟悉這個領域的工程師朋友。_

## 快速統計

\`\`\`dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  return p.file.outlinks?.some(l => l.path === dv.current().file.path);
});
const total = pages.length;
const cats = {};
const langs = {};
for (const p of pages) {
  const c = p.category || "其他";
  cats[c] = (cats[c] || 0) + 1;
  const l = p.language || "Other";
  langs[l] = (langs[l] || 0) + 1;
}
const topCat = Object.entries(cats).sort((a,b) => b[1]-a[1])[0];
const topLang = Object.entries(langs).sort((a,b) => b[1]-a[1])[0];
const avgStars = total > 0 ? Math.round(pages.array().reduce((s,p) => s + (p.stars||0), 0) / total) : 0;
dv.paragraph(\`**\${total}** 個相關專案 · 平均 \${avgStars.toLocaleString()} stars\`);
if (topCat) dv.paragraph(\`主要分類：**\${topCat[0]}**（\${topCat[1]} 個）· 主要語言：**\${topLang?.[0] || 'N/A'}**（\${topLang?.[1] || 0} 個）\`);
\`\`\`

## 核心問題

- [ ] 這個技術解決的根本問題是什麼？
- [ ] 目前最成熟的實作方案是？
- [ ] 什麼情況下不該用這個技術？

## 相關專案

\`\`\`dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  install_complexity AS "難度",
  status AS "狀態",
  use_case AS "用途"
FROM "Repos"
WHERE contains(file.outlinks, this.file.link)
SORT stars DESC
\`\`\`

## 相關概念

\`\`\`dataviewjs
const thisLinks = dv.current().file.inlinks;
const related = new Set();
for (const link of thisLinks) {
  const page = dv.page(link.path);
  if (!page || !page.file?.outlinks) continue;
  for (const out of page.file.outlinks) {
    const target = dv.page(out.path);
    if (target?.tags?.includes("concept") && target.file.path !== dv.current().file.path) {
      related.add(target.file.link);
    }
  }
}
if (related.size > 0) {
  dv.list([...related]);
} else {
  dv.paragraph("_暫無相關概念_");
}
\`\`\`

## 學習資源

_關鍵文章、教學、論文..._

## 我的理解

_自己的話重新解釋，寫下使用心得和判斷_
`;
}

async function generateConceptNotes() {
  const { readdir } = await import('fs/promises');
  const files = await readdir(REPOS_DIR);
  const conceptCounts = {};

  // 掃描所有 repo 筆記中的 [[概念]] 連結
  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const content = await readFile(join(REPOS_DIR, file), 'utf-8');
    // 從「延伸閱讀」區塊提取 wikilinks
    const extMatch = content.match(/相關概念：(.*)/);
    if (extMatch) {
      const links = extMatch[1].match(/\[\[([^\]]+)\]\]/g);
      if (links) {
        for (const link of links) {
          const concept = link.replace(/\[\[|\]\]/g, '');
          conceptCounts[concept] = (conceptCounts[concept] || 0) + 1;
        }
      }
    }
  }

  // 只為出現 2 次以上的概念建立筆記
  await mkdir(CONCEPTS_DIR, { recursive: true });
  let created = 0;
  for (const [concept, count] of Object.entries(conceptCounts)) {
    if (count < 2) continue;
    // 清理概念名稱中的特殊字元（如 CI/CD 的斜線）
    const safeName = concept.replace(/[/\\:*?"<>|]/g, '-');
    const fileName = `${safeName}.md`;
    const filePath = join(CONCEPTS_DIR, fileName);
    if (!(await fileExists(filePath))) {
      await writeFile(filePath, generateConceptNote(concept), 'utf-8');
      created++;
    }
  }
  console.log(`Concepts: ${Object.keys(conceptCounts).length} found, ${created} new notes created`);
}

// ── Main ────────────────────────────────────────────────────

async function main() {
  const token = process.env.GITHUB_TOKEN;

  // 1. 抓 trending repos
  console.log('Fetching trending repos...');
  const allRepos = await fetchTrending(token);
  console.log(`Found ${allRepos.length} repos`);

  // 2. 去重（同一天不重複收錄，但允許不同天再出現）
  const seen = await loadSeen();
  const today = new Date().toISOString().split('T')[0];

  const newRepos = allRepos
    .filter((r) => {
      const entry = seen[r.full_name];
      // 完全沒見過，或是上次見到不是今天
      return !entry || entry.last_seen !== today;
    })
    .slice(0, TOP_N);

  if (newRepos.length === 0) {
    console.log('No new trending repos today.');
    return;
  }
  console.log(`${newRepos.length} repos to process`);

  // 3. 平行抓取每個 repo 的詳細資料
  console.log('Fetching repo details (README, contributors, releases, languages)...');
  const detailedRepos = await Promise.all(
    newRepos.map((r) => fetchRepoDetails(r, token))
  );

  // 4. LLM 翻譯 + 摘要
  console.log('Generating Chinese content with LLM...');
  const llmData = await callLLM(detailedRepos, token);
  console.log(llmData ? `LLM done (${llmData.length} items)` : 'LLM unavailable, using fallback');

  // 建立 LLM 資料查詢表（支援模糊匹配：大小寫、多餘空格等）
  const llmMap = {};
  if (llmData) {
    for (const item of llmData) {
      if (!item.repo) continue;
      llmMap[item.repo] = item;
      llmMap[item.repo.toLowerCase()] = item;
    }
    // 如果數量不匹配，嘗試按順序配對
    if (llmData.length === detailedRepos.length) {
      for (let i = 0; i < detailedRepos.length; i++) {
        const key = detailedRepos[i].full_name;
        if (!llmMap[key] && !llmMap[key.toLowerCase()]) {
          llmMap[key] = llmData[i];
          console.log(`  LLM match by index: ${key} ← ${llmData[i].repo}`);
        }
      }
    }
    // 報告匹配結果
    let matched = 0;
    for (const repo of detailedRepos) {
      if (getLLMInfo(repo.full_name) || llmMap[repo.full_name.toLowerCase()]) matched++;
    }
    console.log(`  LLM matched ${matched}/${detailedRepos.length} repos`);
  }

  function getLLMInfo(fullName) {
    return llmMap[fullName] || llmMap[fullName.toLowerCase()] || null;
  }

  // 5. 產生個別 Repo Notes
  await mkdir(REPOS_DIR, { recursive: true });
  let newNoteCount = 0;
  let updatedNoteCount = 0;

  for (const repo of detailedRepos) {
    const fileName = repoFileName(repo.full_name);
    const filePath = join(REPOS_DIR, fileName);

    if (await fileExists(filePath)) {
      // 已存在的筆記：追加出現記錄 + 更新 frontmatter stars
      try {
        const existing = await readFile(filePath, 'utf-8');
        const newEntry = `- [[${today}|${today}]] — 再次上榜，${fmt(repo.stargazers_count)} stars`;
        if (!existing.includes(`[[${today}|${today}]]`)) {
          // 追加出現記錄
          const updated = existing.replace(
            /^(## 出現記錄\n\n)/m,
            `$1${newEntry}\n`
          );
          // 更新 frontmatter 中的 stars 和 pushed_at
          const final = updated
            .replace(/^stars: \d+$/m, `stars: ${repo.stargazers_count}`)
            .replace(/^stars_per_day: \d+$/m, `stars_per_day: ${starsPerDay(repo.stargazers_count, repo.created_at)}`)
            .replace(/^pushed_at: .+$/m, `pushed_at: ${repo.pushed_at?.split('T')[0] || 'N/A'}`);
          await writeFile(filePath, final, 'utf-8');
          console.log(`  Updated: ${fileName} (再次上榜)`);
          updatedNoteCount++;
        } else {
          console.log(`  Skip (today exists): ${fileName}`);
        }
      } catch {
        console.log(`  Skip (read error): ${fileName}`);
      }
      continue;
    }

    const note = generateRepoNote(repo, getLLMInfo(repo.full_name), today);
    await writeFile(filePath, note, 'utf-8');
    console.log(`  Created: Repos/${fileName}`);
    newNoteCount++;
  }

  // 6. 產生 Daily Digest
  await mkdir(DAILY_DIR, { recursive: true });
  const dailyPath = join(DAILY_DIR, `${today}.md`);
  const digest = generateDailyDigest(detailedRepos, llmData, today);
  await writeFile(dailyPath, digest, 'utf-8');
  console.log(`Created: Daily/${today}.md`);

  // 7. 產生/更新 Dashboard + Home
  const dashboardPath = join(ROOT, 'Dashboard.md');
  await writeFile(dashboardPath, generateDashboard(), 'utf-8');
  console.log('Updated: Dashboard.md');

  const homePath = join(ROOT, 'Home.md');
  await writeFile(homePath, generateHome(), 'utf-8');
  console.log('Updated: Home.md');

  // 8. 產生 MOC 分類索引頁
  await generateMOCs();

  // 8.5 產生/更新週報（保留使用者手寫的趨勢觀察）
  await mkdir(WEEKLY_DIR, { recursive: true });
  const weekStr = getWeekString(today);
  const weeklyPath = join(WEEKLY_DIR, `${weekStr}.md`);
  await writePeriodicNote(weeklyPath, generateWeeklyReview(weekStr), '\n---\n\n## 本週趨勢觀察', WEEKLY_USER_MARKERS);
  console.log(`Updated: Weekly/${weekStr}.md`);

  // 8.6 產生/更新月報（保留使用者手寫的月度回顧）
  await mkdir(MONTHLY_DIR, { recursive: true });
  const monthStr = getMonthString(today);
  const monthlyPath = join(MONTHLY_DIR, `${monthStr}.md`);
  await writePeriodicNote(monthlyPath, generateMonthlyReview(monthStr), '\n---\n\n## 月度回顧', MONTHLY_USER_MARKERS);
  console.log(`Updated: Monthly/${monthStr}.md`);

  // 8.7 產生/更新概念筆記
  await generateConceptNotes();

  // 9. 更新 seen repos
  for (const repo of detailedRepos) {
    const existing = seen[repo.full_name];
    seen[repo.full_name] = {
      first_seen: existing?.first_seen || today,
      last_seen: today,
      times_seen: (existing?.times_seen || 0) + 1,
      stars_first: existing?.stars_first || repo.stargazers_count,
      stars_last: repo.stargazers_count,
    };
  }
  await saveSeen(seen);

  console.log(`\nDone! ${newNoteCount} new, ${updatedNoteCount} updated repo notes, 1 daily digest.`);
  console.log(`Tracking ${Object.keys(seen).length} repos total.`);
}

// ── Weekly/Monthly 筆記合併（保留使用者手寫的趨勢觀察）───────

const WEEKLY_USER_MARKERS = ['_本週最明顯的技術趨勢是什麼？', '_哪個專案改變了你對某件事的看法？', '_趨勢有延續還是轉向？'];
const MONTHLY_USER_MARKERS = ['_回顧本月的技術趨勢', '_本月的主要技術趨勢是什麼？', '從本月收錄中選出 3 個深入研究'];

function isDefaultPeriodicContent(userPart, markers) {
  // 如果包含所有預設 placeholder 文字，就視為未編輯
  return markers.every(m => userPart.includes(m));
}

async function writePeriodicNote(filePath, newContent, userSectionBoundary, defaultMarkers) {
  let existing = null;
  try {
    existing = await readFile(filePath, 'utf-8');
  } catch {
    // 檔案不存在，直接寫入
    await writeFile(filePath, newContent, 'utf-8');
    return;
  }

  // 從現有檔案提取使用者手寫的部分
  const existingBoundary = existing.indexOf(userSectionBoundary);
  if (existingBoundary === -1) {
    // 舊版格式沒有使用者區域，直接覆寫
    await writeFile(filePath, newContent, 'utf-8');
    return;
  }

  const existingUserPart = existing.slice(existingBoundary);

  // 如果使用者沒有編輯過（全是預設 placeholder），直接覆寫
  if (isDefaultPeriodicContent(existingUserPart, defaultMarkers)) {
    await writeFile(filePath, newContent, 'utf-8');
    return;
  }

  // 使用者有手寫內容，保留它
  const newBoundary = newContent.indexOf(userSectionBoundary);
  if (newBoundary === -1) {
    await writeFile(filePath, newContent, 'utf-8');
    return;
  }

  const merged = newContent.slice(0, newBoundary) + existingUserPart;
  await writeFile(filePath, merged, 'utf-8');
}

// ── Refresh：重新產生舊格式筆記 ────────────────────────────

function extractUserSection(content) {
  // 保留「個人筆記」和「出現記錄」
  const boundary = content.indexOf('\n---\n\n## 個人筆記');
  if (boundary === -1) return { userNotes: '', appearances: '' };

  const userPart = content.slice(boundary + '\n---\n\n'.length);

  // 提取出現記錄
  const appMatch = userPart.match(/## 出現記錄\n\n([\s\S]*?)$/);
  const appearances = appMatch ? appMatch[1].trim() : '';

  // 提取個人筆記（出現記錄之前的部分）
  const appIdx = userPart.indexOf('## 出現記錄');
  const userNotes = appIdx > 0 ? userPart.slice(0, appIdx).trim() : userPart.trim();

  return { userNotes, appearances };
}

function needsRefresh(content) {
  // 檢查是否缺少任何必要的格式元素
  // 注意：每次加入新欄位時，加入新條件可觸發全面刷新
  return !content.includes('install_complexity:') ||
         !content.includes('my_rating:') ||
         !content.includes('pushed_at:') ||
         !content.includes('aliases:') ||
         !content.includes('## 優缺點分析') ||
         !content.includes('## 相關收錄') ||
         !content.includes('速覽') ||
         !content.includes('30 秒填完') ||  // v4: 簡化快速評估
         !content.includes('同週收錄') ||    // v4: 同週收錄 Dataview
         !content.includes('use_case:') ||   // v5: triage 欄位
         !content.includes('priority:');     // v5: 優先級
}

function hasLLMContent(content) {
  // 檢查是否有中文 LLM 產生的內容（一句話摘要不是純英文）
  const summaryMatch = content.match(/> \[!summary\] 一句話摘要\n> (.+)/);
  if (!summaryMatch) return false;
  const summary = summaryMatch[1];
  // 如果摘要全是 ASCII（英文），代表 LLM 沒有成功翻譯
  return /[\u4e00-\u9fff]/.test(summary);
}

function isDefaultUserNotes(userNotes) {
  // 檢查個人筆記區是否還是預設模板（使用者沒有編輯過）
  const trimmed = userNotes.replace(/## 出現記錄[\s\S]*$/, '').trim();
  return trimmed.includes('_在此寫下你的想法') ||
         trimmed.includes('_一句話_') ||
         trimmed.includes('_隨時記錄想法') ||
         trimmed.includes('相關性:: 未評估') || // v4 新模板的預設值
         (!trimmed.includes('30 秒填完') && trimmed.includes('快速評估')) || // 舊版快速評估模板
         trimmed.length < 200;
}

function mergeNote(newNote, userNotes, appearances) {
  // 替換新筆記的個人筆記區和出現記錄
  const boundary = newNote.indexOf('\n---\n\n## 個人筆記');
  if (boundary === -1) return newNote;

  const autoGenPart = newNote.slice(0, boundary);

  // 如果使用者沒有編輯過個人筆記區，使用新模板
  if (isDefaultUserNotes(userNotes)) {
    // 從新筆記提取個人筆記區模板
    const newUserPart = newNote.slice(boundary);
    // 但保留出現記錄
    if (appearances) {
      const newAppIdx = newUserPart.indexOf('## 出現記錄');
      if (newAppIdx > 0) {
        const templatePart = newUserPart.slice(0, newAppIdx);
        return autoGenPart + templatePart + '## 出現記錄\n\n' + appearances + '\n';
      }
    }
    return autoGenPart + newUserPart;
  }

  // 使用者有自訂內容，保留它們
  const lines = [autoGenPart, '', '---', '', userNotes, ''];
  if (appearances) {
    if (!userNotes.includes('## 出現記錄')) {
      lines.push('## 出現記錄', '', appearances, '');
    }
  }
  return lines.join('\n');
}

async function refreshRepos(token, failedOnly = false) {
  const { readdir } = await import('fs/promises');
  const files = await readdir(REPOS_DIR);
  const mdFiles = files.filter(f => f.endsWith('.md'));

  console.log(`Found ${mdFiles.length} repo notes to check...`);
  console.log(`Mode: ${failedOnly ? '--refresh-failed (only notes missing Chinese content)' : '--refresh (old format notes)'}`);

  // 找出需要更新的筆記
  const toRefresh = [];
  for (const file of mdFiles) {
    const content = await readFile(join(REPOS_DIR, file), 'utf-8');
    const shouldRefresh = failedOnly ? !hasLLMContent(content) : needsRefresh(content);
    if (shouldRefresh) {
      const repoMatch = content.match(/^repo: (.+)$/m);
      if (repoMatch) {
        toRefresh.push({ file, repoName: repoMatch[1], content });
      }
    }
  }

  if (toRefresh.length === 0) {
    console.log('All notes are up to date!');
    return;
  }
  console.log(`${toRefresh.length} notes need refresh`);
  let refreshedCount = 0;
  let skippedCount = 0;

  // 批次處理（每 5 個一批，避免 rate limit）
  const BATCH = 3;
  for (let i = 0; i < toRefresh.length; i += BATCH) {
    const batch = toRefresh.slice(i, i + BATCH);
    console.log(`\nBatch ${Math.floor(i / BATCH) + 1}/${Math.ceil(toRefresh.length / BATCH)} (${batch.length} repos)...`);

    // 抓取 GitHub 詳細資料
    const repos = [];
    for (const item of batch) {
      try {
        const res = await fetch(`${GITHUB_API}/repos/${item.repoName}`, { headers: gh(token) });
        if (res.status === 404) {
          // Repo 已刪除或改名，標記到筆記中
          console.log(`  Repo deleted/renamed: ${item.repoName} (404)`);
          const updated = item.content.replace(/^status: .+$/m, 'status: archived');
          if (updated !== item.content) {
            await writeFile(join(REPOS_DIR, item.file), updated, 'utf-8');
            console.log(`  Marked as archived: ${item.file}`);
          }
          continue;
        }
        if (!res.ok) { console.log(`  Skip ${item.repoName}: API ${res.status}`); continue; }
        const repo = await res.json();
        const detailed = await fetchRepoDetails(repo, token);
        repos.push({ ...item, repo: detailed });
      } catch (err) {
        console.log(`  Skip ${item.repoName}: ${err.message}`);
      }
    }

    if (repos.length === 0) continue;

    // LLM 翻譯：逐個處理（refresh 需要完整 20 欄位，批次容易被 token 截斷）
    console.log(`  Running LLM for ${repos.length} repos (one by one)...`);
    const llmMap = {};

    for (const item of repos) {
      const key = item.repo.full_name;
      let succeeded = false;
      for (let attempt = 0; attempt < 3 && !succeeded; attempt++) {
        if (attempt > 0) {
          await waitForCooldown(`Retry ${key}: `);
        }
        try {
          const repoClone = { ...item.repo };
          if (attempt >= 1 && repoClone._readme) {
            const truncLen = attempt === 1 ? 3000 : 1500;
            repoClone._readme = repoClone._readme.slice(0, truncLen);
            console.log(`  Truncating README to ${truncLen} chars for retry...`);
          }
          const result = await callLLMBatch([repoClone], token);
          if (result?.[0]) {
            const r = result[0];
            llmMap[r.repo] = r;
            llmMap[r.repo?.toLowerCase()] = r;
            if (!llmMap[key] && !llmMap[key.toLowerCase()]) llmMap[key] = r;
            console.log(`  LLM OK: ${key}`);
            succeeded = true;
          }
        } catch (err) {
          console.log(`  LLM attempt ${attempt + 1} failed for ${key}: ${err.message}`);
        }
      }
      if (!succeeded) {
        console.log(`  LLM failed after 3 attempts: ${key}`);
      }
    }

    const today = new Date().toISOString().split('T')[0];

    // 重新產生筆記
    for (const item of repos) {
      const llmInfo = llmMap[item.repo.full_name] || llmMap[item.repo.full_name.toLowerCase()] || null;

      // LLM 失敗時跳過，保留現有內容（避免覆蓋好的中文翻譯）
      if (!llmInfo || llmInfo._llm_failed) {
        console.log(`  Skip (LLM failed): ${item.file}`);
        continue;
      }

      const { userNotes, appearances } = extractUserSection(item.content);

      // 從舊 frontmatter 提取需要保留的使用者編輯欄位
      const firstSeenMatch = item.content.match(/^first_seen: (.+)$/m);
      const firstSeen = firstSeenMatch ? firstSeenMatch[1] : today;
      const statusMatch = item.content.match(/^status: (.+)$/m);
      const savedStatus = statusMatch ? statusMatch[1] : 'to-review';
      const ratingMatch = item.content.match(/^my_rating: (.+)$/m);
      const savedRating = ratingMatch ? ratingMatch[1] : '0';
      const reviewedMatch = item.content.match(/^last_reviewed: (.+)$/m);
      const savedReviewed = reviewedMatch ? reviewedMatch[1] : today;
      const weekMatch = item.content.match(/^week: "(.+)"$/m);
      const savedWeek = weekMatch ? weekMatch[1] : null;
      const monthMatch = item.content.match(/^month: "(.+)"$/m);
      const savedMonth = monthMatch ? monthMatch[1] : null;
      const priorityMatch = item.content.match(/^priority: (.+)$/m);
      const savedPriority = priorityMatch ? priorityMatch[1] : 'medium';

      // 從舊筆記提取手動策展的 相關專案 wikilinks（延伸閱讀區塊）
      const oldRelatedMatch = item.content.match(/^相關專案：(.+)$/m);
      const oldRelatedLinks = oldRelatedMatch
        ? (oldRelatedMatch[1].match(/\[\[[^\]]+\]\]/g) || [])
        : [];

      const newNote = generateRepoNote(item.repo, llmInfo, firstSeen);

      // 合併舊的手動 wikilinks 到新筆記的延伸閱讀（去重）
      let mergedNote = newNote;
      if (oldRelatedLinks.length > 0) {
        const newRelatedMatch = mergedNote.match(/^相關專案：(.+)$/m);
        const newRelatedLinks = newRelatedMatch
          ? (newRelatedMatch[1].match(/\[\[[^\]]+\]\]/g) || [])
          : [];
        // 合併：新的 + 舊的（去重，以 alias 前的 key 為準）
        const seen = new Set();
        const allLinks = [];
        for (const link of [...newRelatedLinks, ...oldRelatedLinks]) {
          const key = link.replace(/\[\[/, '').replace(/\|.*/, '').replace(/\]\]/, '');
          if (!seen.has(key)) {
            seen.add(key);
            allLinks.push(link);
          }
        }
        const mergedLine = `相關專案：${allLinks.join(' · ')}`;
        if (newRelatedMatch) {
          mergedNote = mergedNote.replace(/^相關專案：.+$/m, mergedLine);
        } else {
          // 新筆記沒有相關專案行，插入到延伸閱讀區塊
          mergedNote = mergedNote.replace(
            /^(## 延伸閱讀\n\n(?:相關概念：.+\n\n)?)/m,
            `$1${mergedLine}\n\n`
          );
        }
      }

      // 還原使用者編輯過的欄位（避免 refresh 覆蓋手動更改）
      let merged = mergeNote(mergedNote, userNotes, appearances);
      merged = merged
        .replace(/^status: to-review$/m, `status: ${savedStatus}`)
        .replace(/^my_rating: 0$/m, `my_rating: ${savedRating}`)
        .replace(/^last_reviewed: .+$/m, `last_reviewed: ${savedReviewed}`)
        .replace(/^priority: medium$/m, `priority: ${savedPriority}`);
      if (savedWeek) {
        merged = merged.replace(/^week: ".+"$/m, `week: "${savedWeek}"`);
      }
      if (savedMonth) {
        merged = merged.replace(/^month: ".+"$/m, `month: "${savedMonth}"`);
      }
      await writeFile(join(REPOS_DIR, item.file), merged, 'utf-8');
      refreshedCount++;
      console.log(`  Refreshed [${refreshedCount}/${toRefresh.length}]: ${item.file}`);
    }

    // 批次間等待（GitHub API 用；LLM rate limit 由全局 cooldown 處理）
    if (i + BATCH < toRefresh.length) {
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  console.log(`\nRefresh complete! ${refreshedCount}/${toRefresh.length} notes updated, ${toRefresh.length - refreshedCount} skipped`);

  // refresh 後也更新 Dashboard/Home/MOC/Weekly/Monthly（因為筆記內容變了）
  const today = new Date().toISOString().split('T')[0];
  const dashPath = join(ROOT, 'Dashboard.md');
  await writeFile(dashPath, generateDashboard(), 'utf-8');
  console.log('Updated: Dashboard.md');

  const homePath = join(ROOT, 'Home.md');
  await writeFile(homePath, generateHome(), 'utf-8');
  console.log('Updated: Home.md');

  await generateMOCs();

  await mkdir(WEEKLY_DIR, { recursive: true });
  const weekStr = getWeekString(today);
  await writePeriodicNote(join(WEEKLY_DIR, `${weekStr}.md`), generateWeeklyReview(weekStr), '\n---\n\n## 本週趨勢觀察', WEEKLY_USER_MARKERS);
  console.log(`Updated: Weekly/${weekStr}.md`);

  await mkdir(MONTHLY_DIR, { recursive: true });
  const monthStr = getMonthString(today);
  await writePeriodicNote(join(MONTHLY_DIR, `${monthStr}.md`), generateMonthlyReview(monthStr), '\n---\n\n## 月度回顧', MONTHLY_USER_MARKERS);
  console.log(`Updated: Monthly/${monthStr}.md`);

  await generateConceptNotes();
}

// ── Entry point ──────────────────────────────────────────────

const isRefresh = process.argv.includes('--refresh');
const isRefreshFailed = process.argv.includes('--refresh-failed');

if (isRefresh || isRefreshFailed) {
  const token = process.env.GITHUB_TOKEN;
  refreshRepos(token, isRefreshFailed).catch((err) => { console.error(err); process.exit(1); });
} else {
  main().catch((err) => { console.error(err); process.exit(1); });
}
