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
      .slice(0, 4000)
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

const SYSTEM_PROMPT = `你是一位台灣的資深技術部落客和開源愛好者。你的文字風格像是在跟工程師朋友分享一個有趣的發現——直接、有觀點、不廢話。

重要規則：
- 仔細讀 README 內容，不要只看名稱猜測
- 每個專案的內容要有差異化，寫出只屬於這個專案的獨特分析
- 禁止使用：「隨著...的流行」「這個專案因此受到關注」「在...的背景下」等空洞句型
- 使用場景要想像一個真實的人在做什麼
- 說出跟替代方案的具體差異
- summary 要夠詳細，讓讀者不看 README 也能理解這個專案在幹嘛

請為每個 GitHub 專案提供以下欄位（JSON 物件）：

1. "repo": 完全等於 owner/name（區分大小寫）
2. "description_zh": 一句話說明「解決什麼問題」。好的例子：「讓 AI 自動跑實驗，你只要早上起來看結果」。壞的例子：「自動化 AI 研究平台」
3. "summary": 6-8 句話的深度分析。結構：
   - 第 1 句：白話說核心機制（例如「它讓 AI agent 每 5 分鐘改一次程式碼、訓練、比對結果」）
   - 第 2-3 句：技術實作方式（用了什麼框架/演算法/架構，怎麼串起來的）
   - 第 4 句：跟同類工具的具體差異（要具體到功能層面）
   - 第 5-6 句：實際使用的效果和限制（例如效能數據、支援範圍）
   - 第 7-8 句：你的觀點（成熟度、值不值得試、適合什麼階段的專案使用）
4. "why_trending": 3-4 句具體分析。包含：作者背景、切中什麼需求、觸發事件、為什麼現在爆紅而不是更早
5. "use_cases": 陣列，3 個場景。格式：「[角色] 用它來 [動作]，因為 [好處]」
6. "target_audience": 一句話，越具體越好
7. "category": AI/ML、開發工具、Web 應用、CLI 工具、資料科學、安全、教學資源、基礎設施、其他（選一個）
8. "key_features": 陣列，5-8 個功能特色（中文，每個一句話，從 README 提取具體功能，不要籠統的描述）
9. "quickstart_steps": 陣列，2-5 個安裝/使用步驟。每步是物件：{"step": "說明", "cmd": "指令"}。沒有安裝指令就回傳 []
10. "limitations": 陣列，2-3 個注意事項（例如 ["僅支援 Linux", "需要 GPU", "早期 alpha，API 可能變動"]）
11. "similar_tools": 陣列，2-4 項。每項是物件：{"name": "工具名", "diff": "跟本專案的具體差異（一句話）"}。想不到就回 []
12. "related_concepts": 陣列，3-5 個相關技術概念（繁體中文）
13. "tech_stack": 陣列，列出核心技術棧（例如 ["Next.js", "FastAPI", "PostgreSQL"]），從 README 提取
14. "novelty_claim": 一句話：這個專案最核心的創新點是什麼？（從 README 提取具體 claim，不要自己編）。沒有明顯創新就回傳 null
15. "install_complexity": "easy"（一行 npm/pip install）、"medium"（需要 clone + config）、"hard"（需要 GPU/Docker/複雜環境）
16. "architecture": 2-3 句話描述專案的整體架構。例如：「前後端分離架構，前端用 React + Vite，後端用 FastAPI。資料流是 用戶輸入 → API Server → LLM 推理 → 結果緩存到 Redis → 回傳前端渲染。」沒有明顯架構就回傳 null
17. "pros_cons": 物件，包含 "pros"（陣列，2-3 個優點）和 "cons"（陣列，2-3 個缺點），每個都是一句話
18. "community": 物件，可選欄位。"docs_url"（文件網站）、"discord"（Discord 連結）、"activity"（一句話描述社群活躍度，例如「每週 20+ commits，issue 回應快」或「3 天前建立，社群尚在建立中」）。都沒有就回傳 null

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
      if (r._readme) parts.push(`README:\n${r._readme.slice(0, 2500)}`);
      return parts.join('\n');
    })
    .join('\n\n---\n\n');
}

async function callLLMBatch(repos, token) {
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
      max_tokens: 10000,
    }),
  });
  if (!res.ok) throw new Error(`LLM HTTP ${res.status}`);
  const data = await res.json();
  const text = data.choices[0].message.content.trim();
  return JSON.parse(text.replace(/^```json?\n?/m, '').replace(/\n?```$/m, ''));
}

async function callLLM(repos, token) {
  const BATCH_SIZE = 5;
  const results = [];

  for (let i = 0; i < repos.length; i += BATCH_SIZE) {
    const batch = repos.slice(i, i + BATCH_SIZE);
    const batchNum = Math.floor(i / BATCH_SIZE) + 1;
    const totalBatches = Math.ceil(repos.length / BATCH_SIZE);
    console.log(`  LLM batch ${batchNum}/${totalBatches} (${batch.length} repos)...`);

    try {
      const batchResult = await callLLMBatch(batch, token);
      results.push(...batchResult);
    } catch (err) {
      console.warn(`  Batch ${batchNum} failed: ${err.message}, retrying...`);
      await new Promise((r) => setTimeout(r, 2000));
      try {
        const retry = await callLLMBatch(batch, token);
        results.push(...retry);
        console.log(`  Batch ${batchNum} retry succeeded`);
      } catch (err2) {
        console.warn(`  Batch ${batchNum} retry also failed: ${err2.message}`);
        // 標記失敗的 repo，讓筆記顯示警告
        for (const r of batch) {
          results.push({ repo: r.full_name, _llm_failed: true });
        }
      }
    }

    // 批次間等 1 秒避免 rate limit
    if (i + BATCH_SIZE < repos.length) {
      await new Promise((r) => setTimeout(r, 1000));
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
    `category: "${cat}"`,
    `release_tag: "${repo._release?.tag || ''}"`,
    `install_complexity: "${installLabel}"`,
    `status: to-review`,
    `my_rating: 0`,
    `last_reviewed: ${today}`,
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
    const readmeLines = repo._readme.slice(0, 2500).split('\n');
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
  const extLinks = [`[GitHub](${repo.html_url})`];
  if (repo.homepage) extLinks.push(`[官方網站](${repo.homepage})`);
  lines.push(extLinks.join(' · '));
  lines.push('');

  // ── 個人筆記區 ──
  lines.push('---');
  lines.push('');
  lines.push('## 個人筆記');
  lines.push('');
  lines.push('> [!question]+ 我的評估');
  lines.push('> _填寫後更新 frontmatter 的 `my_rating` 和 `status` 欄位_');
  lines.push('> ');
  lines.push('> **實用性**：/5');
  lines.push('> **技術新穎性**：/5');
  lines.push('> **成熟度**：早期 / 可用 / 穩定');
  lines.push('> ');
  lines.push('> _想法、使用心得、跟其他工具的比較..._');
  lines.push('');
  lines.push('### 試用記錄');
  lines.push('');
  lines.push('試用日期 :: ');
  lines.push('試用版本 :: ');
  lines.push('安裝難度 :: ');
  lines.push('試用結果 :: ');
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
> Stars/天 最高的專案最值得優先回顧

\`\`\`dataview
TABLE
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  category AS "分類",
  install_complexity AS "安裝",
  first_seen AS "收錄日期"
FROM "Repos"
WHERE status = "to-review"
SORT stars_per_day DESC
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

## 每日記錄

\`\`\`dataview
LIST
FROM "Daily"
SORT date ASC
\`\`\`

---

## 本週心得

> [!question]+ 週回顧
> _本週有什麼值得注意的趨勢？哪些專案讓你印象深刻？_

> [!todo]+ 行動項目
> - [ ] 選出本週最值得試用的 3 個專案
> - [ ] 更新已試用專案的狀態和評分
> - [ ] 記錄發現的新趨勢

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

  // 7. 產生/更新 Dashboard
  const dashboardPath = join(ROOT, 'Dashboard.md');
  await writeFile(dashboardPath, generateDashboard(), 'utf-8');
  console.log('Updated: Dashboard.md');

  // 8. 產生 MOC 分類索引頁
  await generateMOCs();

  // 8.5 產生/更新週報
  await mkdir(WEEKLY_DIR, { recursive: true });
  const weekStr = getWeekString(today);
  const weeklyPath = join(WEEKLY_DIR, `${weekStr}.md`);
  await writeFile(weeklyPath, generateWeeklyReview(weekStr), 'utf-8');
  console.log(`Updated: Weekly/${weekStr}.md`);

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
  return !content.includes('install_complexity:') ||
         !content.includes('my_rating:') ||
         !content.includes('pushed_at:') ||
         !content.includes('aliases:') ||
         !content.includes('## 優缺點分析');
}

function hasLLMContent(content) {
  // 檢查是否有中文 LLM 產生的內容（一句話摘要不是純英文）
  const summaryMatch = content.match(/> \[!summary\] 一句話摘要\n> (.+)/);
  if (!summaryMatch) return false;
  const summary = summaryMatch[1];
  // 如果摘要全是 ASCII（英文），代表 LLM 沒有成功翻譯
  return /[\u4e00-\u9fff]/.test(summary);
}

function mergeNote(newNote, userNotes, appearances) {
  // 替換新筆記的個人筆記區和出現記錄
  const boundary = newNote.indexOf('\n---\n\n## 個人筆記');
  if (boundary === -1) return newNote;

  const autoGenPart = newNote.slice(0, boundary);

  // 重建尾部
  const lines = [autoGenPart, '', '---', '', userNotes, ''];
  if (appearances) {
    // 確保出現記錄在最後
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

  // 批次處理（每 5 個一批，避免 rate limit）
  const BATCH = 5;
  for (let i = 0; i < toRefresh.length; i += BATCH) {
    const batch = toRefresh.slice(i, i + BATCH);
    console.log(`\nBatch ${Math.floor(i / BATCH) + 1}/${Math.ceil(toRefresh.length / BATCH)} (${batch.length} repos)...`);

    // 抓取 GitHub 詳細資料
    const repos = [];
    for (const item of batch) {
      try {
        const res = await fetch(`${GITHUB_API}/repos/${item.repoName}`, { headers: gh(token) });
        if (!res.ok) { console.log(`  Skip ${item.repoName}: API ${res.status}`); continue; }
        const repo = await res.json();
        const detailed = await fetchRepoDetails(repo, token);
        repos.push({ ...item, repo: detailed });
      } catch (err) {
        console.log(`  Skip ${item.repoName}: ${err.message}`);
      }
    }

    if (repos.length === 0) continue;

    // LLM 翻譯
    console.log(`  Running LLM for ${repos.length} repos...`);
    let llmResult = null;
    try {
      llmResult = await callLLMBatch(repos.map(r => r.repo), token);
    } catch (err) {
      console.log(`  LLM failed: ${err.message}, retrying...`);
      await new Promise(r => setTimeout(r, 2000));
      try { llmResult = await callLLMBatch(repos.map(r => r.repo), token); } catch { llmResult = null; }
    }

    const llmMap = {};
    if (llmResult) {
      for (const item of llmResult) {
        if (item.repo) { llmMap[item.repo] = item; llmMap[item.repo.toLowerCase()] = item; }
      }
      // index-based fallback
      if (llmResult.length === repos.length) {
        for (let j = 0; j < repos.length; j++) {
          const key = repos[j].repo.full_name;
          if (!llmMap[key] && !llmMap[key.toLowerCase()]) llmMap[key] = llmResult[j];
        }
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

      // 從舊 frontmatter 提取 first_seen
      const firstSeenMatch = item.content.match(/^first_seen: (.+)$/m);
      const firstSeen = firstSeenMatch ? firstSeenMatch[1] : today;

      const newNote = generateRepoNote(item.repo, llmInfo, firstSeen);
      const merged = mergeNote(newNote, userNotes, appearances);
      await writeFile(join(REPOS_DIR, item.file), merged, 'utf-8');
      console.log(`  Refreshed: ${item.file}`);
    }

    // 批次間等 2 秒
    if (i + BATCH < toRefresh.length) {
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  console.log('\nRefresh complete!');
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
