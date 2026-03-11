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
      .slice(0, 10000)
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

async function fetchTopIssues(fullName, token) {
  try {
    const res = await fetch(
      `${GITHUB_API}/repos/${fullName}/issues?state=open&sort=reactions&per_page=5`,
      { headers: gh(token) }
    );
    if (!res.ok) return [];
    const data = await res.json();
    return data
      .filter(i => !i.pull_request) // 排除 PR
      .slice(0, 5)
      .map(i => ({
        title: i.title,
        number: i.number,
        reactions: i.reactions?.total_count || 0,
        comments: i.comments || 0,
        labels: (i.labels || []).map(l => l.name).slice(0, 3),
      }));
  } catch {
    return [];
  }
}

async function fetchRecentCommits(fullName, token) {
  try {
    const res = await fetch(
      `${GITHUB_API}/repos/${fullName}/commits?per_page=10`,
      { headers: gh(token) }
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (!data.length) return null;
    const dates = data.map(c => c.commit?.author?.date?.split('T')[0]).filter(Boolean);
    const uniqueDates = [...new Set(dates)];
    const latestMsg = data[0]?.commit?.message?.split('\n')[0] || '';
    return {
      total_recent: data.length,
      active_days: uniqueDates.length,
      latest_message: latestMsg.slice(0, 100),
      period: dates.length >= 2 ? `${dates[dates.length - 1]} ~ ${dates[0]}` : dates[0] || '',
    };
  } catch {
    return null;
  }
}

async function fetchRepoDetails(repo, token) {
  const [readme, contributors, release, languages, topIssues, recentCommits] = await Promise.all([
    fetchReadme(repo.full_name, token),
    fetchContributors(repo.full_name, token),
    fetchLatestRelease(repo.full_name, token),
    fetchLanguages(repo.full_name, token),
    fetchTopIssues(repo.full_name, token),
    fetchRecentCommits(repo.full_name, token),
  ]);
  return {
    ...repo,
    _readme: readme,
    _contributors: contributors,
    _release: release,
    _languages: languages,
    _topIssues: topIssues,
    _recentCommits: recentCommits,
  };
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

嚴格品質防線（違反任何一條視為失敗）：
- 禁止編造程式碼範例：如果 README 沒有提供指令或範例，就從 quickstart 推導，並標注「# 基於文件推測」。絕對不要生成 placeholder 程式碼（如 // 這裡放置邏輯）
- 禁止編造語言組成：嚴格依據提供的「語言」欄位。如果只給 C++，就不要寫 Python/JavaScript
- 禁止萬用架構句型：「用戶輸入 → 系統處理 → 輸出結果」是垃圾，每個軟體都成立。必須說明具體的技術節點和設計決策
- why_trending 必須引用提供的數字：我給了你 Stars、Forks、建立天數。用這些數字。例如「1 天內累積 2094 stars（每天 2094），forks/stars 比 6.7% 屬中等」
- 禁止萬用結尾句：「適合對 XX 有興趣的開發者」對任何專案都成立。要說具體是什麼條件的人（已經在用什麼工具、遇到什麼問題、在什麼規模下工作）
- summary 不是 README 改寫：README 說了什麼機制，你要解釋「為什麼這樣設計」和「跟不這樣做有什麼差別」
- 如果 README 太短（< 200 字）或資訊不足，直接說「README 資訊不足，以下為根據 repo metadata 的推測」，不要假裝你知道細節
- 如果提供了「熱門 Issues」，在 summary 和 known_gotchas 中引用它們——Issues 是社群真實的痛點訊號，比 README 更能反映實際使用體驗

請為每個 GitHub 專案提供以下欄位（JSON 物件）：

1. "repo": 完全等於 owner/name（區分大小寫）
2. "description_zh": 一句話說明「解決什麼問題」。好的例子：「讓 AI 自動跑實驗，你只要早上起來看結果」。壞的例子：「自動化 AI 研究平台」
3. "summary": 18-22 句話的深度分析（這是筆記最重要的段落。你的價值不是複述 README——讀者能自己讀 README。你的價值是解釋「為什麼這樣設計」「跟不用這個工具有什麼差別」「什麼情況下會後悔用了它」。每句話都要有資訊密度，禁止空洞句型）。結構：
   - 第 1-4 句：白話說核心機制，要具體到「輸入什麼 → 中間怎麼處理 → 輸出什麼」的完整流程。但不要只複述 README 的第一段——要加上 README 沒說的「為什麼選這個方法」。如果有 CLI 指令，帶出最關鍵的 1-2 個指令
   - 第 5-8 句：技術實作方式，具體到用了什麼框架、演算法、通訊協議、資料格式。如果 README 有提到效能數據或 benchmark，一定要帶數字。說明技術選型的理由（為什麼用 X 而不是 Y）
   - 第 9-12 句：跟同類工具的具體差異（至少比較 2 個替代品）。不要只說「比 X 更好」，要說「X 用 polling 但這個用 WebSocket，所以延遲從 500ms 降到 50ms」這種具體對比。包含功能覆蓋範圍的差異
   - 第 13-16 句：實際使用的效果和限制（效能數據、支援範圍、需要什麼硬體、多大規模的資料能處理）。帶出使用者可能遇到的常見問題和解法
   - 第 17-19 句：你的觀點——成熟度（alpha/beta/stable）、值不值得現在就用、適合什麼規模的團隊。要有明確的判斷而非模棱兩可的描述
   - 第 20-22 句：給讀者的具體建議——什麼情境該用（舉出 2 個場景）、什麼情境不該用（舉出 1 個場景）、有什麼替代方案
4. "why_trending": 4-6 句具體分析。第一句必須引用我提供的數字（Stars, Forks, 建立天數），例如「建立 1 天就累積 2094 stars（2094/天），forks 140（6.7%），這是極端爆發式增長」。禁止寫「隨著 XX 的發展/流行」這種廢話。接下來回答：(a) 作者是誰、過去做過什麼？(b) 解決了什麼「之前沒有好方案」的痛點？之前怎麼做、為什麼不夠好？(c) 有沒有觸發事件（tweet、HN 討論）？(d) 技術生態的什麼變化讓這個工具可行？(e) forks/stars 比率高/低代表什麼（>20% 代表很多人在實際修改使用，<5% 代表純觀望）？如果真的無法判斷，就直說「爆紅原因不明確，數據顯示是自然擴散模式」
5. "use_cases": 陣列，3 個場景。格式：「[具體角色] 用它來 [具體動作+預期結果]，因為 [具體好處，要有數據或對比]」。例子：「後端工程師用它來在 CI 中自動檢測 API breaking changes，因為手動 diff OpenAPI spec 容易漏掉 nested field 的變動」
6. "target_audience": 一句話，越具體越好。不要寫「開發者」，要寫「需要在 M1 Mac 上跑 LLM 推論但不想裝 Docker 的獨立開發者」
7. "category": AI/ML、開發工具、Web 應用、CLI 工具、資料科學、安全、教學資源、基礎設施、生產力、遊戲、其他（選一個）
7b. "subcategory": 更精確的子分類（2-3 個字）。例如開發工具底下可以是：API 工具、WeChat 工具、Claude 工具、MCP 工具、程式碼工具、自動化、監控、測試、CI/CD 等。AI/ML 底下可以是：LLM 訓練、推論優化、影像生成、NLP、Agent 等。自行判斷合理的子分類名稱
8. "key_features": 陣列，5-8 個功能特色。每個要具體到可操作的層面，格式：「功能名 — 具體描述（含數據、指令、參數）」。壞的：「支持多種圖表類型」。好的：「8 種圖表格式（ascii/spark/bars/columns/heatmap/unicode/braille/svg），用 -t 參數切換」
9. "quickstart_steps": 陣列，3-5 個安裝/使用步驟。每步是物件：{"step": "簡潔說明", "cmd": "完整可複製貼上的指令"}。從 README 提取真實指令。沒有就回傳 []
10. "code_example": 從 README 原文中擷取最有代表性的程式碼或指令（含語言標記如 bash/python/js）。嚴禁編造——如果 README 有 code block，直接複製最關鍵的那段。結構：(a) # 前置條件（1 行）；(b) 真實指令/程式碼（從 README 複製）；(c) # 預期輸出（從 README 複製，或根據 README 描述推斷，標注來源）。如果 README 完全沒有程式碼，寫 "# README 未提供程式碼範例" 加上你根據文件推測的最小用法（標注推測）。絕對禁止生成 placeholder 如 "// 這裡放置邏輯" 或假的 CLI 指令。不超過 25 行
11. "limitations": 陣列，3-4 個注意事項。要具體（例如 ["僅支援 Python 3.10+", "需要 NVIDIA GPU (CUDA 12+)", "不支援 Windows", "alpha 階段，API 每週都在變"]）
12. "similar_tools": 陣列，2-4 項。每項是物件：{"name": "工具名（優先用 GitHub owner/repo 格式，如 crewai/crewai）", "diff": "跟本專案的具體差異，要提到功能差異和適用場景差異（2 句話）"}。這是筆記中最有決策價值的段落，一定要認真寫。想不到就回 []
13. "related_concepts": 陣列，3-5 個相關技術概念。優先從以下預定義概念中選擇（繁體中文，如果沒有符合的可以自創）：
   RAG, MCP Protocol, WebAssembly, LoRA, RLHF, 向量資料庫, 邊緣推論, CLI/TUI, 語音合成, 多模態, Agent 框架, 安全漏洞, 程式碼生成, LLM 推論, Prompt Engineering, 微服務, 容器化, CI/CD, 資料視覺化, API 設計, 機器學習, 深度學習, 自然語言處理, 電腦視覺, 自動化測試, 爬蟲, 即時通訊, 區塊鏈, 隱私保護, 效能優化
14. "tech_stack": 陣列，列出核心技術棧（含版本號，例如 ["Next.js 14", "FastAPI", "PostgreSQL 16"]），從 README 提取
15. "novelty_claim": 一句話：這個專案最核心的創新點是什麼？（從 README 提取具體 claim，不要自己編）。沒有明顯創新就回傳 null
16. "install_complexity": "easy"（一行 npm/pip install 或 npx）、"medium"（需要 clone + config）、"hard"（需要 GPU/Docker/複雜環境）
17. "architecture": 6-10 句話描述專案的整體架構。禁止只寫「用戶輸入 → 處理 → 輸出」——這對任何軟體都成立，毫無資訊量。要回答的核心問題是「為什麼這樣設計？有什麼代價？」。結構：(1) 架構模式及選擇理由（例如「單 Go binary + SQLite，因為設計目標是零依賴部署，代價是無法做到讀寫分離和水平擴展」）；(2) 資料流的每個具體節點——不是「處理」而是「用 X 演算法/協議/格式做 Y」；(3) 至少 1 個具體的 trade-off（選了 A 而非 B，得到什麼、犧牲什麼）；(4) 擴展性瓶頸分析。如果 README 太短，根據語言+框架+repo 大小推斷，但標注「推斷」。不要回傳 null
18. "pros_cons": 物件，包含 "pros"（陣列，3-4 個優點，每個要具體）和 "cons"（陣列，3-4 個缺點，每個要具體，不要跟 limitations 重複）
19. "community": 物件，可選欄位。"docs_url"（文件網站）、"discord"（Discord 連結）、"activity"（一句話描述社群活躍度）。都沒有就回傳 null
20. "key_insight": 一句話，你讀完這個專案後最想告訴朋友的一件事。例如：「這個專案最厲害的不是功能，而是它證明了用 Markdown 就能『編程』AI agent 的研究行為」
21. "deep_dive": 8-12 句話的技術深入分析。這是筆記中最有技術含量的段落。即使 README 簡短，也要盡力從語言選擇、架構模式、依賴關係等角度分析。結構：
   - 第 1-3 句：核心技術機制——用了什麼演算法、資料結構、通訊模式？（從 README 或語言/框架推斷）
   - 第 4-6 句：效能和規模特性——能處理多大的資料？有什麼瓶頸？需要多少資源？（有數字就用數字，沒有就從架構推斷）
   - 第 7-9 句：設計取捨分析——為什麼選這個語言/框架而不是另一個？這個選擇帶來什麼好處和代價？
   - 第 10-12 句：技術風險評估——哪些設計決策可能在規模擴大時出問題？有什麼技術債？安全性考量？
   不要回傳 null，每個專案都值得從技術角度分析
   分類特定要求：
   - AI/ML 類：必須提到模型大小、推論速度、GPU 需求、跟 HuggingFace/OpenAI 生態的整合程度
   - 安全類：必須提到 CVE 覆蓋範圍、OWASP 對應、誤報率、能否整合到 CI pipeline
   - CLI 工具：必須提到 shell 整合方式、跟現有工具鏈（bash/zsh/fish）的相容性、可否 pipe/script 化
   - 開發工具：必須提到 IDE 整合、CI/CD 整合、團隊協作支援程度

22. "onboarding_evaluation": 3-5 句話評估「新手體驗」。包含：(1) README 文件品質（是否清楚、有沒有範例）；(2) 安裝過程是否順暢（有沒有坑）；(3) 是否有好的 getting started guide；(4) 文件有沒有中文/多語言。這段幫助讀者判斷「花 30 分鐘能不能跑起來」
23. "alternatives_detail": 陣列，2-3 項結構化的替代方案對比（這是筆記中最有決策價值的段落，必須認真寫，禁止回空陣列）。每項是物件：{"name": "工具名", "stars": 估計的 stars 數（整數，可以大概猜），"approach": "技術路線差異（1-2 句話，具體到技術選型，例如「用 Rust 實作 vs 本專案用 Python，記憶體用量少 10 倍但 plugin 生態不如 Python」）", "when_to_choose": "什麼情況下應該選它而不是本專案（1-2 句話，要具體到場景，例如「如果你的團隊已經在用 Kubernetes 且需要橫向擴展到 100+ 節點」）", "migration_effort": "從本專案遷移到它的難度（low/medium/high + 一句話原因）"}。即使找不到直接替代品，也要列出「最接近的替代方案」或「沒有這個工具時的 workaround」
24. "maturity_assessment": 物件，評估專案成熟度。包含：{"stage": "alpha/beta/stable/production（從 README、版本號、issue 數量推斷）", "production_ready": true/false, "breaking_change_risk": "high/medium/low（API 穩定度）", "recommendation": "一句話，例如『適合個人 side project 試用，不建議用在生產環境的核心路徑上』"}
25. "known_gotchas": 陣列，2-4 個「踩坑才知道」的隱性問題（這跟 limitations 不同——limitations 是設計上的限制，gotchas 是實際使用時才會發現的坑）。格式：每項是物件 {"issue": "問題描述（具體到什麼情境下會遇到）", "workaround": "解法或規避方式（如果有的話）", "severity": "high/medium/low"}。從 README 的 known issues、GitHub issues、或根據技術架構推斷可能的坑。例如：{"issue": "Windows 上路徑處理有 bug，空格和中文路徑會導致 crash", "workaround": "用 WSL 或加 --force-posix-paths flag", "severity": "high"}。如果 README 沒有明確提到，根據技術棧和架構推斷最可能的 3 個坑（標注「推斷」）
26. "use_case_fit": 陣列，4-6 個使用情境的適合度評估。每項是物件：{"scenario": "具體使用情境（要夠具體，例如「10 人以下的新創公司後端 API」而不是「小型專案」）", "fit": "非常適合/適合/普通/不適合/未測試", "reason": "為什麼（1 句話，要提到具體的技術原因）"}。這是幫讀者快速判斷「我的情況適不適合用這個」的決策工具

回傳 JSON 陣列，只回傳 JSON，不要加 markdown 標記。`;

function buildRepoPrompt(repos) {
  return repos
    .map((r) => {
      const parts = [`## ${r.full_name}`];
      parts.push(`描述: ${r.description || 'No description'}`);
      parts.push(`語言: ${Object.keys(r._languages || {}).join(', ') || r.language || 'N/A'}`);
      const daysOld = Math.max(1, Math.floor((Date.now() - new Date(r.created_at).getTime()) / 86400000));
      const spd = Math.round(r.stargazers_count / daysOld);
      const forkPct = r.stargazers_count > 0 ? (r.forks_count / r.stargazers_count * 100).toFixed(1) : 0;
      parts.push(`Stars: ${r.stargazers_count}, Stars/天: ${spd}, Forks: ${r.forks_count} (${forkPct}%), Open Issues: ${r.open_issues_count || 0}`);
      parts.push(`建立: ${r.created_at.split('T')[0]} (${daysOld} 天前), 最後推送: ${r.pushed_at?.split('T')[0] || 'N/A'}`);
      if (r.license?.spdx_id) parts.push(`授權: ${r.license.spdx_id}`);
      if (r._contributors?.length)
        parts.push(`主要貢獻者: ${r._contributors.map((c) => c.login).join(', ')}`);
      if (r._release) parts.push(`最新版本: ${r._release.tag}`);
      if (r.homepage) parts.push(`官方網站: ${r.homepage}`);
      if (r.topics?.length) parts.push(`Topics: ${r.topics.join(', ')}`);
      if (r._topIssues?.length) {
        parts.push(`熱門 Issues:\n${r._topIssues.map(i => `- #${i.number} ${i.title} (reactions: ${i.reactions}, comments: ${i.comments})`).join('\n')}`);
      }
      if (r._recentCommits) {
        parts.push(`最近 commit 活動: ${r._recentCommits.active_days} 天活躍 (${r._recentCommits.period}), 最新: ${r._recentCommits.latest_message}`);
      }
      if (r._readme) parts.push(`README:\n${r._readme.slice(0, 10000)}`);
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

async function callLLMBatch(repos, token, vaultRepoNames = null) {
  await waitForCooldown();
  let prompt = buildRepoPrompt(repos);
  if (vaultRepoNames?.length) {
    prompt += `\n\n---\n\n[系統補充] 我們的 vault 中已收錄以下 repo（similar_tools 優先使用這些名稱）：${vaultRepoNames.slice(0, 60).join(', ')}`;
  }
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
      max_tokens: 16384,  // 27 JSON fields per repo at BATCH_SIZE=1
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

async function callLLM(repos, token, vaultRepoNames = null) {
  const BATCH_SIZE = 1;  // v9: 每個 repo 產生 24 欄位豐富內容，必須逐個處理避免 token 截斷
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
        const batchResult = await callLLMBatch(batch, token, vaultRepoNames);
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

// ── v12: 間隔複習日期計算 ──────────────────────────────────
function nextReviewDate(today, starsPerDay) {
  const d = new Date(today);
  // 高優先 3 天後、中 7 天、低 14 天
  const days = starsPerDay >= 200 ? 3 : starsPerDay >= 30 ? 7 : 14;
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

// ── v12: 參與度指標（forks/stars ratio）──────────────────────
function engagementLevel(stars, forks) {
  if (!stars || stars === 0) return '"unknown"';
  const ratio = forks / stars;
  if (ratio >= 0.3) return '"high"';
  if (ratio >= 0.1) return '"medium"';
  return '"low"';
}

// ── 個別 Repo Note 產生 ────────────────────────────────────

function generateRepoNote(repo, llmInfo, today, existingRepos = null) {
  const days = daysAgo(repo.created_at);
  const rate = starsPerDay(repo.stargazers_count, repo.created_at);
  const langPct = langPercents(repo._languages || {});
  const cat = llmInfo?.category || 'Other';
  const catTag = cat.toLowerCase().replace(/[/\s]/g, '_');
  const llmFailed = llmInfo?._llm_failed === true;

  // ── 品質驗證：修正 LLM 幻覺 ──
  if (llmInfo?.code_example) {
    // 移除明顯的 placeholder 程式碼
    const placeholderPatterns = ['// 這裡放置', '// TODO:', '// placeholder', '// 在此處'];
    for (const pat of placeholderPatterns) {
      if (llmInfo.code_example.includes(pat)) {
        llmInfo.code_example = null;
        break;
      }
    }
  }

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
    `subcategory: "${llmInfo?.subcategory || ''}"`,
    `release_tag: "${repo._release?.tag || ''}"`,
    `install_complexity: "${installLabel}"`,
    `status: to-review`,
    `my_rating: 0`,
    `last_reviewed: ${today}`,
    `use_case: "${(llmInfo?.description_zh || '').replace(/"/g, '\\"').slice(0, 80)}"`,
    `priority: ${rate >= 200 ? 'high' : rate >= 30 ? 'medium' : 'low'}`,
    `ring: assess`,
    `discovered_via: "GitHub Trending"`,
    `appearances: 1`,
    `next_review: "${nextReviewDate(today, rate)}"`,
    `engagement: ${engagementLevel(repo.stargazers_count, repo.forks_count)}`,
    `verdict: ""`,
    `ring_history: "assess@${today}"`,
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

  // ── README 資訊不足警告 ──
  const readmeLen = repo._readme?.length || 0;
  if (readmeLen < 200 && !llmFailed) {
    lines.push('> [!caution] README 資訊不足');
    lines.push(`> 此專案的 README 僅 ${readmeLen} 字元，以下分析可能含有推測內容。建議直接查看 [GitHub](${repo.html_url}) 原始碼。`);
    lines.push('');
  }

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
    // 授權解讀
    const licenseId = repo.license?.spdx_id || '';
    const permissive = ['MIT', 'Apache-2.0', 'BSD-2-Clause', 'BSD-3-Clause', 'ISC', 'Unlicense', '0BSD'];
    const copyleft = ['GPL-2.0', 'GPL-3.0', 'AGPL-3.0', 'LGPL-2.1', 'LGPL-3.0', 'MPL-2.0'];
    const licenseLabel = permissive.includes(licenseId) ? `${licenseId} (商業友好)`
      : copyleft.includes(licenseId) ? `${licenseId} (Copyleft，商用需注意)`
      : licenseId && licenseId !== 'N/A' ? licenseId
      : '未標註授權 (風險較高)';
    // 維護健康指標
    const pushedAt = repo.pushed_at ? new Date(repo.pushed_at) : null;
    const daysSincePush = pushedAt ? Math.floor((Date.now() - pushedAt.getTime()) / 86400000) : null;
    const maintLabel = daysSincePush === null ? '未知'
      : daysSincePush <= 7 ? 'Active'
      : daysSincePush <= 30 ? 'Moderate'
      : daysSincePush <= 90 ? 'Slow'
      : 'Stale';
    const maintDetail = daysSincePush !== null ? `最後推送 ${daysSincePush} 天前` : '';
    lines.push('> [!info] 速覽');
    lines.push(`> **安裝難度** ${installIcon} · **專案狀態** ${ageLabel} · **熱度** ${momentumLabel} (${fmt(rate)} stars/day)`);
    const contribCount = repo._contributors?.length || 0;
    const busFactor = contribCount <= 1 ? 'Solo (bus factor 風險)' : contribCount <= 3 ? `${contribCount} 人` : `${contribCount}+ 人`;
    // 參與度
    const forkRatio = repo.stargazers_count > 0 ? (repo.forks_count / repo.stargazers_count) : 0;
    const engageLabel = forkRatio >= 0.3 ? 'High' : forkRatio >= 0.1 ? 'Medium' : 'Low';
    lines.push(`> **授權** ${licenseLabel} · **維護** ${maintLabel}${maintDetail ? ` (${maintDetail})` : ''} · **貢獻者** ${busFactor} · **參與度** ${engageLabel}`);
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
    // 嘗試將長 summary 分段（按句號計數，大約每 4-5 句分一段）
    const sentences = llmInfo.summary.match(/[^。！？]+[。！？]+/g) || [llmInfo.summary];
    if (sentences.length >= 12) {
      // 足夠長，按 LLM prompt 結構分段
      const chunks = [
        sentences.slice(0, 4).join(''),
        sentences.slice(4, 8).join(''),
        sentences.slice(8, 12).join(''),
        sentences.slice(12).join(''),
      ].filter(c => c.trim());
      lines.push(chunks.join('\n\n'));
    } else {
      lines.push(llmInfo.summary);
    }
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
    lines.push(llmInfo.deep_dive);
    lines.push('');
  }

  // ── 新手體驗評估 ──
  if (llmInfo?.onboarding_evaluation) {
    lines.push('## 新手體驗');
    lines.push('');
    lines.push('> [!info] 上手難度評估');
    lines.push(`> ${llmInfo.onboarding_evaluation}`);
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
        // 使用外部 GitHub 連結，避免產生指向不存在 repo 的 ghost wikilinks
        // vault-internal 交叉連結由 延伸閱讀 的 autoCrossLink 負責
        const toolName = t.name || '';
        const display = toolName.includes('/')
          ? `[${toolName}](https://github.com/${toolName})`
          : toolName;
        lines.push(`| ${display} | ${t.diff || ''} |`);
      }
    } else {
      lines.push(`相關替代方案：${llmInfo.similar_tools.map(t => typeof t === 'string' ? t : t.name).join('、')}`);
    }
    lines.push('');
  }

  // ── 替代方案決策表 ──
  if (llmInfo?.alternatives_detail?.length) {
    lines.push('## 替代方案決策');
    lines.push('');
    lines.push('> [!question] 什麼時候該選別的工具？');
    lines.push('');
    lines.push('| 工具 | 技術路線 | 選它的時機 | 遷移難度 |');
    lines.push('| --- | --- | --- | --- |');
    for (const alt of llmInfo.alternatives_detail) {
      const name = (alt.name || '').includes('/')
        ? `[${alt.name}](https://github.com/${alt.name})`
        : alt.name || '';
      const migration = alt.migration_effort || '';
      lines.push(`| ${name} | ${alt.approach || ''} | ${alt.when_to_choose || ''} | ${migration} |`);
    }
    lines.push('');
  }

  // ── 成熟度評估 ──
  if (llmInfo?.maturity_assessment) {
    const ma = llmInfo.maturity_assessment;
    lines.push('## 成熟度評估');
    lines.push('');
    const stageEmoji = { alpha: 'Alpha', beta: 'Beta', stable: 'Stable', production: 'Production' };
    const readyLabel = ma.production_ready ? 'Yes' : 'No';
    const breakingLabel = ma.breaking_change_risk || 'unknown';
    lines.push(`| 項目 | 評估 |`);
    lines.push(`| --- | --- |`);
    lines.push(`| 開發階段 | ${stageEmoji[ma.stage] || ma.stage || 'Unknown'} |`);
    lines.push(`| 生產環境就緒 | ${readyLabel} |`);
    lines.push(`| Breaking Change 風險 | ${breakingLabel} |`);
    lines.push('');
    if (ma.recommendation) {
      lines.push(`> [!tip] 採用建議`);
      lines.push(`> ${ma.recommendation}`);
      lines.push('');
    }
  }

  // ── 已知陷阱 ──
  if (llmInfo?.known_gotchas?.length) {
    lines.push('## 已知陷阱');
    lines.push('');
    lines.push('> [!bug] 踩坑才知道的問題');
    lines.push('');
    for (const g of llmInfo.known_gotchas) {
      if (typeof g === 'string') {
        lines.push(`- ${g}`);
      } else {
        const sev = g.severity === 'high' ? '**[HIGH]**' : g.severity === 'medium' ? '[MEDIUM]' : '[low]';
        lines.push(`- ${sev} ${g.issue}`);
        if (g.workaround) {
          lines.push(`  - 解法：${g.workaround}`);
        }
      }
    }
    lines.push('');
  }

  // ── 使用情境適合度 ──
  if (llmInfo?.use_case_fit?.length) {
    lines.push('## 使用情境適合度');
    lines.push('');
    lines.push('| 情境 | 適合度 | 說明 |');
    lines.push('| --- | --- | --- |');
    for (const uc of llmInfo.use_case_fit) {
      const fitLabel = uc.fit || '';
      lines.push(`| ${uc.scenario || ''} | ${fitLabel} | ${uc.reason || ''} |`);
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

  // ── 開發動態 ──
  if (repo._recentCommits) {
    const rc = repo._recentCommits;
    lines.push('## 開發動態');
    lines.push('');
    lines.push(`> [!abstract] 最近 10 次 commit（${rc.period}）`);
    lines.push(`> **活躍天數** ${rc.active_days} 天 · **最新 commit** ${rc.latest_message}`);
    lines.push('');
  }

  // ── 熱門議題 ──
  if (repo._topIssues?.length) {
    lines.push('## 熱門議題');
    lines.push('');
    lines.push('> [!question]- 社群最關注的問題');
    lines.push('> | # | Issue | Reactions | Comments |');
    lines.push('> | --- | --- | --- | --- |');
    for (const issue of repo._topIssues) {
      const labels = issue.labels.length ? ` \`${issue.labels.join('` `')}\`` : '';
      lines.push(`> | [#${issue.number}](${repo.html_url}/issues/${issue.number}) | ${issue.title.slice(0, 60)}${labels} | ${issue.reactions} | ${issue.comments} |`);
    }
    lines.push('');
  }

  // ── README 摘錄（可收合）──
  if (repo._readme) {
    lines.push('## README 摘錄');
    lines.push('');
    lines.push('> [!info]- 展開查看原文 README');
    const readmeLines = repo._readme.slice(0, 5000).split('\n');
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
  // 跨 repo wikilinks：只連結 vault 內已存在的 repo（避免 ghost links）
  if (llmInfo?.similar_tools?.length) {
    const repoLinks = llmInfo.similar_tools
      .filter(t => typeof t === 'object' && t.name?.includes('/'))
      .filter(t => {
        if (!existingRepos) return true; // 沒有清單時不過濾（向下相容）
        const fileName = t.name.replace(/\//g, '--');
        return existingRepos.has(fileName);
      })
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

  // ── 相關收錄（同子分類 + 同分類 + 同週 + 共用概念）──
  lines.push('## 相關收錄');
  lines.push('');
  const safeFn = repoFileName(repo.full_name).replace('.md', '');
  const subcat = llmInfo?.subcategory || '';

  // v16: 同子分類直接競品（最有決策價值）
  if (subcat) {
    lines.push(`> [!note]- 直接競品（同子分類：${subcat}）`);
    lines.push('> ```dataview');
    lines.push('> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"');
    lines.push('> FROM "Repos"');
    lines.push(`> WHERE subcategory = "${subcat}" AND file.name != "${safeFn}"`);
    lines.push('> SORT stars DESC');
    lines.push('> ```');
    lines.push('');
  }

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

  // v16: 共用概念的專案（透過知識圖譜找到隱藏關聯）
  if (llmInfo?.related_concepts?.length) {
    lines.push('> [!note]- 共用概念的相關專案');
    lines.push('> ```dataviewjs');
    lines.push(`> const concepts = ${JSON.stringify(llmInfo.related_concepts)};`);
    lines.push('> const pages = dv.pages(\'"Repos"\')')
    lines.push(`>   .where(p => p.file.name !== "${safeFn}" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))`);
    lines.push('>   .sort(p => p.stars, "desc")');
    lines.push('>   .limit(5);');
    lines.push('> if (pages.length > 0) {');
    lines.push('>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {');
    lines.push('>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));');
    lines.push('>     return [p.file.link, p.stars, p.category, shared.join(", ")];');
    lines.push('>   }));');
    lines.push('> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }');
    lines.push('> ```');
    lines.push('');
  }

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
  lines.push('> 測試環境 :: _OS / Node / Python 版本_');
  lines.push('> 安裝過程 :: _順利 / 遇到問題（描述）_');
  lines.push('> 花費時間 :: _從零到可用_');
  lines.push('> 實際效果 :: _達到預期 / 不如預期（原因）_');
  lines.push('> 踩到的坑 :: _描述 + 解法_');
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
  lines.push('> [!warning]- 替換成本');
  lines.push('> 若半年後要換掉，難度多高？資料格式是標準的嗎？');
  lines.push('> ');
  lines.push('> 侵入性:: _低 / 中 / 高_');
  lines.push('> 遷移路徑:: _描述_');
  lines.push('');
  lines.push('### 想法與筆記');
  lines.push('');
  lines.push('_隨時記錄想法、發現、跟其他工具的比較..._');
  lines.push('_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_');
  lines.push('');
  lines.push('**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`');
  lines.push('**Tech Radar**：`assess` → `trial` → `adopt` / `hold`');
  lines.push('');
  lines.push('> [!info]- 評估完成後');
  lines.push('> 更新 frontmatter：');
  lines.push('> - `ring`: adopt / trial / assess / hold');
  lines.push('> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）');
  lines.push('> - `verdict`: 一句話結論');
  lines.push('> - `my_rating`: 1-5 分');
  lines.push('> - `status`: reading / tried / integrated / archived');
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
    '| # | 專案 | 分類 | Stars | 速度 | 安裝 | 語言 | 用途 |',
    '| :--: | --- | --- | ---: | ---: | --- | --- | --- |',
  ];

  // 表格
  for (let i = 0; i < repos.length; i++) {
    const r = repos[i];
    const info = _get(r.full_name);
    const cat = info?.category || '';
    const installBadge = info?.install_complexity ? `\`${info.install_complexity}\`` : '';
    const useCase = (info?.description_zh || r.description || '').slice(0, 40);
    const link = `[[${repoFileName(r.full_name).replace('.md', '')}\\|${r.full_name}]]`;
    lines.push(
      `| ${i + 1} | ${link} | ${cat} | ${fmt(r.stargazers_count)} | ${fmt(starsPerDay(r.stargazers_count, r.created_at))}/天 | ${installBadge} | ${r.language || 'N/A'} | ${useCase} |`
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

    const installBadge = info?.install_complexity ? ` · \`${info.install_complexity}\`` : '';
    lines.push(
      `**${fmt(r.stargazers_count)}** stars · **${fmt(starsPerDay(r.stargazers_count, r.created_at))}** stars/天 · ${r.language || 'N/A'}${installBadge}`
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

## 今日行動建議

\`\`\`dataviewjs
const pages = dv.pages('"Repos"');
const toReview = pages.where(p => p.status === "to-review");
const highPri = toReview.where(p => p.priority === "high");
const easy = toReview.where(p => p.install_complexity === "easy");
const actions = [];

if (highPri.length > 0) {
  const top = highPri.sort(p => p.stars_per_day, "desc").first();
  actions.push(\`**優先回顧** \${top.file.link}（\${top.stars_per_day} stars/天，priority: high）\`);
}
if (easy.length > 0) {
  const pick = easy.sort(p => p.stars_per_day, "desc").first();
  if (!highPri.length || pick.file.name !== highPri.sort(p => p.stars_per_day, "desc").first()?.file.name) {
    actions.push(\`**快速試用** \${pick.file.link}（easy install，\${pick.stars_per_day} stars/天）\`);
  }
}
const stale = pages.where(p => {
  if (!p.last_reviewed || p.status === "archived") return false;
  const d = new Date(p.last_reviewed.toString());
  return (Date.now() - d.getTime()) > 14 * 86400000 && p.my_rating > 3;
});
if (stale.length > 0) {
  actions.push(\`**重新檢視** \${stale.first().file.link}（高評分但超過 14 天未回顧）\`);
}
if (actions.length > 0) {
  dv.list(actions);
} else {
  dv.paragraph("所有專案都已處理完畢！");
}
\`\`\`

## 今日待複習

> [!tip] 根據間隔複習排程，以下專案該回顧了

\`\`\`dataview
TABLE
  next_review AS "預定複習日",
  stars_per_day AS "Stars/天",
  category AS "分類",
  use_case AS "用途",
  priority AS "優先級"
FROM "Repos"
WHERE next_review AND date(next_review) <= date(today) AND status != "archived"
SORT date(next_review) ASC
\`\`\`

## 參與度分析

> [!info] Fork/Star 比率反映社群實際使用程度

\`\`\`dataviewjs
const pages = dv.pages('"Repos"').where(p => p.engagement);
const groups = { high: [], medium: [], low: [] };
for (const p of pages) {
  const e = p.engagement?.toString() || "low";
  if (groups[e]) groups[e].push(p);
}
dv.paragraph(\`**High** (fork 比 >=30%): \${groups.high.length} · **Medium** (10-30%): \${groups.medium.length} · **Low** (<10%): \${groups.low.length}\`);
if (groups.high.length > 0) {
  dv.header(4, "高參與度專案");
  dv.table(
    ["專案", "Stars", "Forks", "分類"],
    groups.high.sort((a,b) => (b.stars||0) - (a.stars||0)).map(p => [p.file.link, p.stars, p.forks, p.category])
  );
}
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

## Tech Radar 總覽

\`\`\`dataview
TABLE WITHOUT ID
  ring AS "Ring",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
WHERE ring != null AND ring != ""
GROUP BY ring
SORT choice(ring, "adopt", 1, choice(ring, "trial", 2, choice(ring, "assess", 3, 4))) ASC
\`\`\`

## 有結論的專案

\`\`\`dataview
TABLE
  verdict AS "結論",
  ring AS "Ring",
  ring_history AS "歷程",
  ("★" * my_rating + "☆" * (5 - my_rating)) AS "評分",
  category AS "分類"
FROM "Repos"
WHERE verdict != "" AND verdict != null
SORT my_rating DESC
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

## 依子分類瀏覽

> [!tip]- 展開查看細分類

\`\`\`dataview
TABLE WITHOUT ID
  category AS "主分類",
  subcategory AS "子分類",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
WHERE subcategory != ""
GROUP BY category + " / " + subcategory
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

## 多次上榜

> [!tip] 這些專案反覆出現在 GitHub Trending，值得留意

\`\`\`dataview
TABLE
  appearances AS "上榜次數",
  stars AS "Stars",
  stars_per_day AS "Stars/天",
  category AS "分類",
  priority AS "優先級"
FROM "Repos"
WHERE appearances > 1
SORT appearances DESC
\`\`\`

## 持續熱門

> [!tip] 收錄超過 7 天仍在活躍開發的專案

\`\`\`dataviewjs
const pages = dv.pages('"Repos"')
  .where(p => {
    if (!p.first_seen || !p.pushed_at) return false;
    const daysSinceSeen = (new Date() - new Date(p.first_seen?.toString())) / 86400000;
    const daysSincePush = (new Date() - new Date(p.pushed_at?.toString())) / 86400000;
    return daysSinceSeen > 7 && daysSincePush < 7 && (p.stars_per_day || 0) > 50;
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

## 授權分佈

\`\`\`dataview
TABLE WITHOUT ID
  license AS "授權",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
GROUP BY license
SORT length(rows) DESC
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
  // 從 pushed_at 計算維護狀態
  let maint = "-";
  if (p.pushed_at) {
    const days = Math.floor((Date.now() - new Date(p.pushed_at.toString()).getTime()) / 86400000);
    maint = days <= 7 ? "Active" : days <= 30 ? "OK" : days <= 90 ? "Slow" : "Stale";
  }
  rows.push([
    p.file.link,
    (p.stars_per_day || 0) + "/d",
    install,
    maint,
    p.category || "",
    desc.slice(0, 40) + (desc.length > 40 ? "..." : "")
  ]);
}
dv.table(["專案", "速度", "安裝", "維護", "分類", "一句話"], rows);
\`\`\`

## 熱門概念（被最多專案引用）

\`\`\`dataviewjs
const pages = dv.pages('"Repos"');
const conceptCounts = {};
for (const p of pages) {
  const extMatch = p.file.outlinks?.filter(l => {
    const target = dv.page(l.path);
    return target?.tags?.includes("concept");
  }) || [];
  for (const link of extMatch) {
    const name = link.path.split("/").pop();
    conceptCounts[name] = (conceptCounts[name] || 0) + 1;
  }
}
const sorted = Object.entries(conceptCounts)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 15);
if (sorted.length > 0) {
  dv.table(
    ["概念", "引用次數", "視覺化"],
    sorted.map(([name, count]) => {
      const bar = "█".repeat(count) + "░".repeat(Math.max(0, 20 - count));
      return [dv.fileLink("Concepts/" + name, false, name), count, bar];
    })
  );
}
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

## 筆記完整度

> [!info] 檢查哪些筆記缺少重要區塊

\`\`\`dataviewjs
const pages = dv.pages('"Repos"').where(p => p.status !== "archived");
const checks = [
  { name: "成熟度評估", pattern: "## 成熟度評估" },
  { name: "已知陷阱", pattern: "## 已知陷阱" },
  { name: "使用情境適合度", pattern: "## 使用情境適合度" },
  { name: "替代方案決策", pattern: "## 替代方案決策" },
  { name: "技術深入分析", pattern: "## 技術深入分析" },
  { name: "新手體驗", pattern: "## 新手體驗" },
  { name: "架構分析", pattern: "## 架構分析" },
  { name: "開發動態", pattern: "## 開發動態" },
  { name: "熱門議題", pattern: "## 熱門議題" },
];
const incomplete = [];
for (const p of pages) {
  const content = await dv.io.load(p.file.path);
  const missing = checks.filter(c => !content.includes(c.pattern)).map(c => c.name);
  if (missing.length > 0) {
    incomplete.push({ link: p.file.link, stars: p.stars, missing: missing.join(", "), count: missing.length });
  }
}
if (incomplete.length > 0) {
  incomplete.sort((a, b) => b.count - a.count);
  dv.paragraph(\`**\${incomplete.length}** 筆記有缺失區塊（共 \${pages.length} 非封存筆記）\`);
  dv.table(
    ["專案", "Stars", "缺失區塊", "缺失數"],
    incomplete.slice(0, 15).map(i => [i.link, i.stars, i.missing, i.count])
  );
} else {
  dv.paragraph("所有筆記都有完整的區塊！");
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
> - [Dataview](https://github.com/blacksmithgu/obsidian-dataview) — Dashboard 和查詢（必裝）
> - [Contribution Graph](https://github.com/vran-dev/obsidian-contribution-graph) — 收錄熱力圖
> - [Charts View](https://github.com/caronchen/obsidian-chartsview-plugin) — 語言分佈圖表
> - [Periodic Notes](https://github.com/liamcain/obsidian-periodic-notes) — 每週回顧自動化
> - [Smart Connections](https://github.com/brianpetro/obsidian-smart-connections) — AI 語意關聯推薦
> - [Advanced Canvas](https://github.com/Developer-Mike/obsidian-advanced-canvas) — Tech Radar 視覺決策板
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
  use_case AS "用途"
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
  const subs = {};
  let maxSpd = 0; let fastest = null;
  for (const p of pages) {
    const c = p.category || "其他";
    cats[c] = (cats[c] || 0) + 1;
    const l = p.language || "Other";
    langs[l] = (langs[l] || 0) + 1;
    if (p.subcategory) {
      const sub = p.category + " > " + p.subcategory;
      subs[sub] = (subs[sub] || 0) + 1;
    }
    if ((p.stars_per_day || 0) > maxSpd) { maxSpd = p.stars_per_day; fastest = p; }
  }
  const topCat = Object.entries(cats).sort((a,b) => b[1]-a[1])[0];
  const topLang = Object.entries(langs).sort((a,b) => b[1]-a[1])[0];
  const easyCount = pages.where(p => p.install_complexity === "easy").length;

  dv.paragraph(\`本週 \${pages.length} 個專案中，**\${topCat[0]}** 類最多（\${topCat[1]} 個），主要語言為 **\${topLang[0]}**。\`);
  if (fastest) dv.paragraph(\`成長最快：\${fastest.file.link}（\${maxSpd} stars/天）\`);
  if (easyCount > 0) dv.paragraph(\`有 **\${easyCount}** 個 easy-install 專案可以快速試用。\`);
  // 子分類聚集分析
  const hotSubs = Object.entries(subs).filter(([_, c]) => c >= 2).sort((a, b) => b[1] - a[1]);
  if (hotSubs.length > 0) {
    dv.paragraph("**子分類聚集**：" + hotSubs.map(([s, c]) => \`\${s}（\${c} 個）\`).join("、") + " — 同子分類多個專案上榜代表該方向正在被密集探索。");
  }
}
\`\`\`

## 概念熱度

> [!abstract] 本週專案引用最多的技術概念

\`\`\`dataviewjs
const pages = dv.pages('"Repos"').where(p => p.week === "${weekStr}");
const conceptCount = {};
for (const p of pages) {
  for (const link of (p.file.outlinks || [])) {
    if (link.path?.startsWith("Concepts/")) {
      const name = link.path.replace("Concepts/", "").replace(".md", "");
      conceptCount[name] = (conceptCount[name] || 0) + 1;
    }
  }
}
const sorted = Object.entries(conceptCount).sort((a, b) => b[1] - a[1]).slice(0, 8);
if (sorted.length > 0) {
  dv.table(
    ["概念", "引用數", "佔比"],
    sorted.map(([name, count]) => {
      const pct = Math.round((count / pages.length) * 100);
      return [dv.fileLink("Concepts/" + name, false, name), count, pct + "%"];
    })
  );
} else {
  dv.paragraph("_本週專案尚未建立概念連結_");
}
\`\`\`

## 回歸專案

> [!tip] 多次上榜的專案值得重點關注

\`\`\`dataviewjs
const thisWeek = dv.pages('"Repos"').where(p => p.week === "${weekStr}");
const returning = thisWeek.where(p => (p.appearances || 1) > 1);
if (returning.length > 0) {
  dv.table(
    ["專案", "上榜次數", "Stars", "Stars/天", "分類"],
    returning.sort(p => p.appearances, "desc").map(p => [
      p.file.link, p.appearances, p.stars, p.stars_per_day, p.category
    ])
  );
} else {
  dv.paragraph("_本週無回歸專案_");
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

## 本月回顧進度

\`\`\`dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  const fs = p.first_seen?.toString();
  return fs && fs.startsWith("${monthStr}");
});
const statusMap = {};
for (const p of pages) {
  const s = p.status || "unknown";
  statusMap[s] = (statusMap[s] || 0) + 1;
}
const total = pages.length;
if (total > 0) {
  const lines = Object.entries(statusMap)
    .sort((a, b) => b[1] - a[1])
    .map(([s, c]) => {
      const pct = Math.round((c / total) * 100);
      const filled = Math.round(pct / 5);
      return s + ": " + "█".repeat(filled) + "░".repeat(20 - filled) + " " + c + " (" + pct + "%)";
    });
  dv.paragraph(lines.join("\\n"));
} else {
  dv.paragraph("_本月尚無收錄_");
}
\`\`\`

## 本月概念地圖

> [!abstract] 哪些技術概念在本月最被關注？

\`\`\`dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  const fs = p.first_seen?.toString();
  return fs && fs.startsWith("${monthStr}");
});
const conceptCount = {};
for (const p of pages) {
  for (const link of (p.file.outlinks || [])) {
    if (link.path?.startsWith("Concepts/")) {
      const name = link.path.replace("Concepts/", "").replace(".md", "");
      conceptCount[name] = (conceptCount[name] || 0) + 1;
    }
  }
}
const sorted = Object.entries(conceptCount).sort((a, b) => b[1] - a[1]).slice(0, 10);
if (sorted.length > 0) {
  dv.table(
    ["概念", "引用數", "佔比"],
    sorted.map(([name, count]) => {
      const pct = Math.round((count / pages.length) * 100);
      return [dv.fileLink("Concepts/" + name, false, name), count, pct + "%"];
    })
  );
} else {
  dv.paragraph("_本月專案尚未建立概念連結_");
}
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

## 依子分類

\`\`\`dataview
TABLE WITHOUT ID
  subcategory AS "子分類",
  length(rows) AS "數量",
  rows.file.link AS "專案"
FROM "Repos"
WHERE category = "${category}"
GROUP BY subcategory
SORT length(rows) DESC
\`\`\`

## 決策矩陣

> [!tip] 快速比較：哪個最適合你的情境？

\`\`\`dataviewjs
const pages = dv.pages('"Repos"').where(p => p.category === "${category}" && p.status !== "archived");
if (pages.length > 0) {
  dv.table(
    ["專案", "Stars/天", "安裝", "授權", "維護", "評分", "子分類"],
    pages.sort(p => p.stars_per_day, "desc").map(p => {
      const pushedAt = p.pushed_at ? new Date(p.pushed_at.toString()) : null;
      const daysSincePush = pushedAt ? Math.floor((Date.now() - pushedAt.getTime()) / 86400000) : null;
      const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
      return [
        p.file.link,
        p.stars_per_day || 0,
        p.install_complexity || "?",
        p.license || "N/A",
        maint,
        p.my_rating > 0 ? ("★".repeat(p.my_rating) + "☆".repeat(5 - p.my_rating)) : "未評",
        p.subcategory || ""
      ];
    })
  );
} else {
  dv.paragraph("_此分類無專案_");
}
\`\`\`

## 子分類推薦

> [!abstract] 每個子分類中的最佳候選

\`\`\`dataviewjs
const pages = dv.pages('"Repos"').where(p => p.category === "${category}" && p.status !== "archived" && p.subcategory);
const subs = {};
for (const p of pages) {
  const sub = p.subcategory;
  if (!subs[sub]) subs[sub] = [];
  subs[sub].push(p);
}

const rows = [];
for (const [sub, repos] of Object.entries(subs)) {
  // 以 stars_per_day 排序，取最高的
  repos.sort((a, b) => (b.stars_per_day || 0) - (a.stars_per_day || 0));
  const best = repos[0];
  rows.push([
    sub,
    repos.length,
    best.file.link,
    best.stars_per_day || 0,
    best.install_complexity || "?",
    (best.use_case || "").slice(0, 50)
  ]);
}
if (rows.length > 0) {
  dv.table(["子分類", "專案數", "最熱門", "Stars/天", "安裝", "用途"], rows.sort((a, b) => b[1] - a[1]));
} else {
  dv.paragraph("_尚無子分類資料_");
}
\`\`\`

## 相關概念

\`\`\`dataviewjs
const repos = dv.pages('"Repos"').where(p => p.category === "${category}");
const concepts = new Map();
for (const r of repos) {
  for (const link of (r.file.outlinks || [])) {
    const target = dv.page(link.path);
    if (target?.tags?.includes("concept")) {
      const name = target.file.name;
      concepts.set(name, (concepts.get(name) || 0) + 1);
    }
  }
}
const sorted = [...concepts.entries()].sort((a, b) => b[1] - a[1]).slice(0, 10);
if (sorted.length > 0) {
  dv.table(["概念", "相關專案數"], sorted.map(([name, count]) => [dv.fileLink(name), count]));
} else {
  dv.paragraph("_尚無相關概念連結_");
}
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
| [[MOC - 生產力]] | 生產力 |
| [[MOC - 遊戲]] | 遊戲 |
| [[MOC - 其他]] | 其他分類 |

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

## 今日待複習

> [!tip] 間隔複習排程：到期的專案會自動出現在這裡

\`\`\`dataview
TABLE
  next_review AS "複習日",
  stars_per_day AS "Stars/天",
  category AS "分類",
  priority AS "優先級"
FROM "Repos"
WHERE next_review AND date(next_review) <= date(today) AND status != "archived"
SORT priority DESC, date(next_review) ASC
LIMIT 8
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

## 本週亮點

\`\`\`dataviewjs
const thisWeek = dv.pages('"Repos"')
  .where(p => {
    if (!p.first_seen) return false;
    const d = new Date(p.first_seen.toString());
    return (Date.now() - d.getTime()) < 7 * 86400000;
  })
  .sort(p => p.stars_per_day, "desc")
  .limit(3);

if (thisWeek.length > 0) {
  for (const p of thisWeek) {
    const desc = p.use_case || p.description || "";
    dv.paragraph(\`**\${p.file.link}** — \${p.stars_per_day} stars/day · \${p.category || ""}\\n> \${desc.slice(0, 100)}\`);
  }
} else {
  dv.paragraph("本週尚無新收錄。");
}
\`\`\`

## 快速篩選

> [!tip]- 立即可用的專案（easy install + 高 stars）
> \`\`\`dataview
> TABLE stars AS "Stars", category AS "分類", language AS "語言"
> FROM "Repos"
> WHERE install_complexity = "easy" AND status = "to-review"
> SORT stars_per_day DESC
> LIMIT 5
> \`\`\`

> [!tip]- 商業友好授權（MIT/Apache）
> \`\`\`dataview
> TABLE stars AS "Stars", license AS "授權", category AS "分類"
> FROM "Repos"
> WHERE license = "MIT" OR license = "Apache-2.0"
> SORT stars DESC
> LIMIT 5
> \`\`\`

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
>
> **使用流程**：
> 1. 每日查看「今日待複習」，花 5 分鐘快速掃描
> 2. 有興趣的專案修改 frontmatter: \`status: reading\`
> 3. 試用後填寫「個人筆記 → 試用記錄」
> 4. 評估完更新 \`ring\`（adopt/trial/hold）、\`verdict\` 和 \`ring_history\`
> 5. 低價值專案會在 14 天後自動封存
> 6. 用 [[Tech-Radar]] Canvas 視覺化追蹤採用決策
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
    '生產力',
    '遊戲',
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

const CONCEPT_DESCRIPTIONS = {
  '機器學習': '簡單說就是讓電腦從資料中自動找到規律，不用你一條一條寫 if-else。常見的應用包括推薦系統、圖片辨識、垃圾郵件過濾等。如果你的問題有大量歷史資料且規則難以手動定義，通常就是機器學習的守備範圍。',
  '深度學習': '機器學習的子集，用多層神經網路來處理複雜的模式識別問題。跟傳統 ML 最大的差別是它可以自動從原始資料中提取特徵，不用你手動設計。代價是需要大量資料和 GPU 算力，但在影像、語音、自然語言等領域的效果遠超傳統方法。',
  '大型語言模型': '用海量文本資料訓練出來的超大型神經網路，能理解和生成人類語言。GPT、Claude、Llama 都屬於這類。它的核心能力是「下一個 token 預測」，但湧現出了推理、翻譯、寫程式等複雜能力。',
  'Agent 框架': '讓 AI 不只是回答問題，而是能自主規劃步驟、使用工具（搜尋、寫檔案、呼叫 API）、完成多步驟任務的框架。簡單說就是把 LLM 從「聊天機器人」升級成「數位員工」。常見的有 LangChain、CrewAI、AutoGPT 等。',
  '自然語言處理': '讓電腦理解和處理人類語言的技術。從早期的關鍵字比對、到統計模型、再到現在的 Transformer，NLP 已經可以做到相當準確的翻譯、摘要、情感分析和問答。LLM 的爆發基本上就是 NLP 的最新成果。',
  '程式碼生成': 'AI 根據自然語言描述自動產生程式碼。從 GitHub Copilot 到 Claude Code，這個領域正在快速改變開發者的工作方式。目前最適合處理 boilerplate 和常見 pattern，但複雜的架構決策還是需要人。',
  '多模態': '同時處理文字、圖片、音訊、影片等不同類型資料的 AI 能力。以前各類型要用不同模型，現在 GPT-4V、Claude 3 等模型可以「看圖說話」或「聽音辨識」。這讓 AI 的應用場景大幅擴展。',
  'CLI/TUI': '命令列介面（CLI）和終端使用者介面（TUI）工具。CLI 用純文字指令操作，TUI 在終端中提供互動式圖形介面。對開發者來說，好的 CLI/TUI 工具能大幅提升效率，尤其在 SSH 遠端操作時特別有價值。',
  'API 設計': '設計程式之間溝通介面的藝術。好的 API 讓使用者一看就懂、不容易誤用、向後相容。REST、GraphQL、gRPC 是目前最常見的風格。API 設計的好壞直接影響產品的開發者體驗和採用率。',
  'CI/CD': '持續整合（CI）和持續部署（CD）的自動化流程。每次 push 程式碼就自動跑測試、建構、部署。GitHub Actions、GitLab CI、Jenkins 是常見工具。沒有 CI/CD 的專案就像沒有安全網的走鋼索。',
  '容器化': '用 Docker 等工具把應用程式和它的所有依賴打包在一起，確保在任何環境都能一致運行。解決了「在我電腦上可以跑」的千年問題。搭配 Kubernetes 做編排，是現代後端部署的標配。',
  '微服務': '把一個大應用拆成多個獨立的小服務，每個服務專注做一件事，透過 API 溝通。好處是可以獨立部署和擴展，壞處是分散式系統的複雜度（網路、一致性、除錯）會暴增。不是所有專案都適合。',
  '安全漏洞': '軟體中可被攻擊者利用的弱點，包括注入攻擊、XSS、權限提升等。OWASP Top 10 列出了最常見的種類。寫程式時做好輸入驗證、最小權限、加密傳輸是基本功，但安全是持續的過程不是一次性的。',
  '滲透測試': '以攻擊者的角度模擬入侵來找出系統弱點的安全測試方法。跟掃描工具不同的是，滲透測試會嘗試真正利用漏洞。分為黑箱（不知內部）和白箱（有原始碼）兩種，是企業安全合規的重要一環。',
  '即時通訊': '讓訊息在使用者之間即時傳遞的技術。從 IRC 到 Slack、Discord，底層技術從輪詢演進到 WebSocket 和 Server-Sent Events。開發即時通訊系統需要處理連線管理、訊息排序、離線同步等挑戰。',
  'WebSocket': '建立在 TCP 上的全雙工通訊協議，讓瀏覽器和伺服器可以雙向即時傳資料。比起 HTTP 輪詢，WebSocket 延遲更低、開銷更小。適合聊天室、即時通知、協作編輯、遊戲等需要即時更新的場景。',
  '自動化測試': '用程式自動執行測試案例來驗證軟體是否正確運作。分為單元測試、整合測試、E2E 測試等層級。寫測試看起來像在拖慢速度，但長期來看能大幅減少 bug 和重構的風險。Jest、pytest、Playwright 是常見工具。',
  '效能優化': '提升系統回應速度和資源使用效率的技術。包括演算法優化、快取策略、資料庫查詢調校、CDN、懶加載等。關鍵原則是「先測量再優化」，用 profiler 找到真正的瓶頸，而不是憑直覺猜。',
  '資料視覺化': '把數據轉換成圖表、圖形等視覺呈現，幫助人腦快速理解趨勢和模式。D3.js、ECharts、Matplotlib 是常見工具。好的視覺化不只是漂亮，更重要的是選對圖表類型來傳達正確的訊息。',
  '自動化交易': '用程式根據預設策略自動執行買賣交易。包含策略設計、回測、風險控管和執行引擎。優點是消除人為情緒影響和反應速度快，但需要嚴格的風控機制避免程式 bug 造成大額損失。',
  'RAG': '檢索增強生成（Retrieval-Augmented Generation），讓 LLM 在回答前先搜尋相關文件，減少幻覺並提供最新資訊。基本流程是：問題 → 向量搜尋 → 取出相關文件 → 連同問題一起丟給 LLM。是企業 AI 應用的核心架構。',
  'MCP Protocol': 'Model Context Protocol，Anthropic 提出的標準化協議，讓 AI 模型能連接外部工具和資料來源。類似 AI 的 USB-C — 一個統一介面就能連各種服務。目前 Claude Code 和多個 IDE 已支援。',
  'LoRA': '低秩適應（Low-Rank Adaptation），一種高效微調 LLM 的技術。不需要更新所有參數，只訓練一小部分「適配器」權重，大幅降低微調的 GPU 需求和時間。是目前最流行的 LLM 客製化方法。',
  'RLHF': '人類反饋強化學習（Reinforcement Learning from Human Feedback），用人類的偏好來訓練 AI 模型。ChatGPT 之所以比普通 GPT 好用，RLHF 功不可沒。流程是：人類標注偏好 → 訓練獎勵模型 → 用強化學習優化生成。',
  '向量資料庫': '專門儲存和查詢高維向量的資料庫，是 RAG 和語意搜尋的基礎設施。把文字轉成向量後存進去，就能用「意思相近」而不是「關鍵字相同」來搜尋。Pinecone、Milvus、Chroma 是常見選擇。',
  '邊緣推論': '在靠近使用者的裝置（手機、IoT、邊緣伺服器）上直接跑 AI 模型，而不是傳到雲端。好處是延遲低、隱私好、不需要網路。挑戰是裝置算力有限，需要模型壓縮和量化技術。',
  '語音合成': '把文字轉換成自然的人類語音（TTS）。從早期的機械感合成到現在的 AI 語音，已經幾乎無法分辨真人和合成。目前最先進的模型能模仿特定聲音、控制語氣和情感。',
  'Prompt Engineering': '設計和優化給 AI 模型的提示詞，讓它產生更好的回應。不只是「問對問題」，還包括 few-shot 範例、chain-of-thought、system prompt 設計等技巧。是目前使用 LLM 最關鍵的技能之一。',
  '爬蟲': '自動從網站抓取資料的程式。Python 的 Scrapy、Playwright 是常見工具。需要處理反爬蟲機制、速率限制、動態渲染等挑戰。使用前要注意 robots.txt 和法律規範。',
  '區塊鏈': '去中心化的分散式帳本技術，資料一旦寫入就幾乎不可篡改。除了加密貨幣，也用於供應鏈追蹤、數位身份等場景。但不是所有「需要不可篡改」的問題都需要區塊鏈，大部分情況普通資料庫就夠了。',
  '隱私保護': '保護使用者資料不被未授權存取或濫用的技術和實踐。包括加密、匿名化、差分隱私、零知識證明等。GDPR 和各國隱私法規讓這個領域從「nice-to-have」變成「must-have」。',
  '電腦視覺': '讓電腦從影像和影片中提取資訊的技術。從基礎的物件偵測到進階的場景理解，CNN 和 Vision Transformer 是目前主流架構。自駕車、醫療影像分析、人臉辨識都是典型應用。',
  '靜態分析': '不實際執行程式就分析原始碼來找出 bug、安全漏洞和程式碼品質問題的技術。ESLint、SonarQube、Semgrep 是常見工具。比測試更早發現問題，是 CI/CD 流程中的重要防線。',
  '生成式 AI': '能生成新內容（文字、圖片、音樂、程式碼）的 AI 技術。從 GPT 到 Stable Diffusion，生成式 AI 正在改變創作和開發的方式。核心技術包括 Transformer、Diffusion Model 和 GAN。',
  '資訊安全': '保護資訊系統免於未授權存取、破壞和洩漏的整體實踐。涵蓋網路安全、應用安全、資料安全等面向。CIA 三角（機密性、完整性、可用性）是基本原則。',
  '特權提升': '攻擊者取得比預期更高的系統權限的技術。從普通使用者提升到管理員或 root 權限。分為本地提權和遠端提權，是滲透測試中的核心環節。',
  '攻擊鏈分析': '把多個獨立的安全漏洞串聯成完整的攻擊路徑來分析風險。Cyber Kill Chain 和 MITRE ATT&CK 是常見框架。幫助防禦者理解攻擊者的思維模式，找出防禦中的薄弱環節。',
  '跨平台': '讓同一套程式碼在不同作業系統（Windows、macOS、Linux）或平台（Web、Mobile、Desktop）上運行的技術。Electron、Flutter、React Native 是常見方案。省開發成本但可能犧牲原生體驗。',
  '設計模式': '軟體開發中反覆出現的問題的通用解決方案。GoF 的 23 種經典模式是基礎，但現代開發更常用的是 Repository、Observer、Strategy 等模式。重點是理解何時用、為什麼用，而不是機械式套用。',
  '量化交易': '用數學模型和演算法自動執行金融交易策略。包含策略開發、回測、風控和即時執行。需要同時掌握金融知識和程式設計能力，Python 和 C++ 是主流語言。',
  '本地 AI': '在個人裝置上直接運行 AI 模型，而不依賴雲端 API。llama.cpp、Ollama 讓普通電腦也能跑 LLM。好處是隱私、離線可用、零成本，代價是速度和模型大小受限。',
  'OAuth': '開放授權標準，讓使用者不需分享密碼就能授權第三方應用存取自己的資料。你按「用 Google 登入」就是在用 OAuth。OAuth 2.0 是目前最廣泛使用的版本。',
  'OAuth2': '開放授權標準 2.0 版，定義了四種授權流程（Authorization Code、Implicit、Resource Owner Password、Client Credentials）。是目前網路服務間安全授權的事實標準。',
  'CUDA': 'NVIDIA 的平行運算平台和程式模型，讓開發者用 GPU 來加速通用計算。深度學習訓練和推論幾乎都依賴 CUDA。這也是為什麼 NVIDIA GPU 在 AI 領域佔主導地位。',
  '開源情報': '從公開來源（社群媒體、新聞、公共資料庫）收集和分析情報的方法，英文叫 OSINT。用於安全研究、競爭分析、新聞調查等。工具包括 Maltego、theHarvester 等。',
  'UI 設計': '使用者介面設計，決定使用者如何與產品互動。好的 UI 設計要兼顧美觀和易用，遵循一致性、回饋、容錯等原則。Figma 是目前最主流的 UI 設計工具。',
  '視頻編輯': '用工具對影片進行剪輯、特效、調色等後製處理。從 FFmpeg 的命令列到 Premiere Pro 的專業軟體，AI 正在讓這個領域變得更自動化，像是自動字幕、場景偵測、風格轉換。',
  '生物信息學': '用計算方法分析生物資料（基因序列、蛋白質結構等）的交叉學科。Python 和 R 是主流語言，BioPython 是常見工具。隨著定序成本下降，這個領域的資料量正在爆發。',
  '藥物發現': 'AI 輔助藥物發現正在加速新藥開發流程。從分子生成、靶點預測到臨床試驗設計，AI 可以將傳統需要數年的篩選過程縮短到數月。AlphaFold 在蛋白質結構預測的突破就是典型例子。',
  '記憶管理': 'AI 系統中讓模型記住和利用歷史對話或資料的機制。從簡單的 context window 到 RAG、向量資料庫，再到 MemGPT 式的分層記憶。是建構有狀態 AI 應用的核心挑戰。',
  '自動化': '用程式或工具取代人工重複操作的做法。從 shell script 到 CI/CD、從 cron job 到 AI agent，自動化的層次越來越高。關鍵是辨識哪些任務值得自動化（重複頻率高、出錯代價大）、哪些不值得（一次性、需要人類判斷）。',
  'LLM 推論': '讓大型語言模型接收輸入並產生回應的過程。推論比訓練便宜但仍有成本考量。優化方式包括量化（INT8/INT4）、KV cache、推測解碼、批次處理等。vLLM、TGI、llama.cpp 是常見的推論引擎。',
};

function generateConceptNote(concept) {
  const desc = CONCEPT_DESCRIPTIONS[concept] || '_用 2-3 句話解釋這個概念。想像對象是一個聰明但不熟悉這個領域的工程師朋友。_';
  return `---
tags:
  - concept
aliases:
  - "${concept}"
---

# ${concept}

## 是什麼

${desc}

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

## 週趨勢

> [!abstract] 這個概念在不同週次的出現頻率

\`\`\`dataviewjs
const pages = dv.pages('"Repos"').where(p => {
  return p.file.outlinks?.some(l => l.path === dv.current().file.path);
});
const weekCount = {};
for (const p of pages) {
  const w = p.week || "unknown";
  weekCount[w] = (weekCount[w] || 0) + 1;
}
const sorted = Object.entries(weekCount).sort((a, b) => b[0].localeCompare(a[0]));
if (sorted.length > 0) {
  dv.table(["週次", "出現次數", "視覺化"], sorted.map(([w, c]) => {
    return [w, c, "█".repeat(c) + "░".repeat(Math.max(0, 5 - c))];
  }));
} else {
  dv.paragraph("_尚無時間趨勢資料_");
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

  // 為所有被引用的概念建立筆記（消除 ghost links）
  await mkdir(CONCEPTS_DIR, { recursive: true });
  let created = 0;
  for (const [concept, count] of Object.entries(conceptCounts)) {
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

// ── 自動充實 Concept 描述 ────────────────────────────────────

async function enrichConceptDescriptions(token) {
  if (!token) return;
  const { readdir } = await import('fs/promises');
  const files = await readdir(CONCEPTS_DIR).catch(() => []);
  const placeholder = '用 2-3 句話解釋這個概念';

  // 先用字典更新已知概念（不需要 LLM）
  let dictUpdated = 0;
  const needsDesc = [];
  for (const file of files) {
    if (!file.endsWith('.md')) continue;
    const content = await readFile(join(CONCEPTS_DIR, file), 'utf-8');
    if (!content.includes(placeholder)) continue;
    const name = file.replace('.md', '');
    // 字典中有描述的直接更新
    if (CONCEPT_DESCRIPTIONS[name]) {
      const newContent = content.replace(
        `_${placeholder}。想像對象是一個聰明但不熟悉這個領域的工程師朋友。_`,
        CONCEPT_DESCRIPTIONS[name]
      );
      if (newContent !== content) {
        await writeFile(join(CONCEPTS_DIR, file), newContent, 'utf-8');
        dictUpdated++;
      }
    } else {
      needsDesc.push({ name, file, content });
    }
  }
  if (dictUpdated > 0) {
    console.log(`Concepts: ${dictUpdated} updated from dictionary`);
  }
  if (needsDesc.length === 0) {
    console.log('Concepts: all have descriptions');
    return;
  }
  console.log(`Concepts: ${needsDesc.length} need LLM descriptions, generating...`);

  // 批次 LLM 呼叫（每次最多 25 個概念）
  const BATCH = 25;
  let updated = 0;
  for (let i = 0; i < needsDesc.length; i += BATCH) {
    const batch = needsDesc.slice(i, i + BATCH);
    const names = batch.map(c => c.name);
    const prompt = `請為以下技術概念各寫一段繁體中文描述（2-3 句話）。
想像對象是一個聰明但不熟悉這個領域的工程師朋友。
要求：
- 用白話文解釋，不要學術腔
- 第一句解釋「是什麼」，後面解釋「為什麼重要」或「典型應用」
- 如果有知名工具/框架，舉 2-3 個例子
- 每個描述獨立成段，不要超過 100 字

回傳 JSON 格式：{"概念名": "描述", ...}

概念列表：
${names.map((n, idx) => `${idx + 1}. ${n}`).join('\n')}`;

    try {
      await waitForCooldown();
      const res = await fetch(LLM_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          model: LLM_MODEL,
          messages: [
            { role: 'system', content: '你是技術概念解說專家，使用台灣繁體中文。' },
            { role: 'user', content: prompt },
          ],
          temperature: 0.3,
          max_tokens: 4096,
        }),
      });
      if (!res.ok) {
        console.warn(`Concept LLM batch ${Math.floor(i/BATCH)+1} failed: HTTP ${res.status}`);
        continue;
      }
      const data = await res.json();
      let text = data.choices[0].message.content.trim()
        .replace(/^```json?\n?/m, '')
        .replace(/\n?```$/m, '');
      const descs = JSON.parse(text);

      for (const item of batch) {
        const desc = descs[item.name];
        if (!desc || desc.length < 10) continue;
        // 替換 placeholder 文字
        const newContent = item.content.replace(
          `_${placeholder}。想像對象是一個聰明但不熟悉這個領域的工程師朋友。_`,
          desc
        );
        if (newContent !== item.content) {
          await writeFile(join(CONCEPTS_DIR, item.file), newContent, 'utf-8');
          updated++;
        }
      }
      console.log(`  Batch ${Math.floor(i/BATCH)+1}: updated ${updated} concepts`);
    } catch (err) {
      console.warn(`Concept LLM batch error: ${err.message}`);
    }
  }
  console.log(`Concepts: ${updated}/${needsDesc.length} descriptions generated`);
}

// ── 自動交叉連結 ────────────────────────────────────────────

async function autoCrossLink() {
  const { readdir } = await import('fs/promises');
  const files = await readdir(REPOS_DIR);
  const mdFiles = files.filter(f => f.endsWith('.md'));

  // 建立 category → repo 名稱映射 + 概念映射
  const catMap = {};   // { category: [{ file, name }] }
  const repoSet = new Set(); // vault 內所有 repo 檔名（不含 .md）
  const repoConcepts = {}; // { repoName: Set<concept> }

  for (const file of mdFiles) {
    const content = await readFile(join(REPOS_DIR, file), 'utf-8');
    const catMatch = content.match(/^category: "?([^"\n]+)"?$/m);
    const cat = catMatch ? catMatch[1] : null;
    const name = file.replace('.md', '');
    repoSet.add(name);
    if (cat) {
      if (!catMap[cat]) catMap[cat] = [];
      catMap[cat].push({ file, name });
    }
    // 提取概念
    const conceptMatch = content.match(/^相關概念：(.+)$/m);
    if (conceptMatch) {
      const concepts = (conceptMatch[1].match(/\[\[([^\]]+)\]\]/g) || [])
        .map(c => c.replace(/\[\[|\]\]/g, ''));
      repoConcepts[name] = new Set(concepts);
    }
  }

  let linkCount = 0;

  for (const file of mdFiles) {
    const filePath = join(REPOS_DIR, file);
    let content = await readFile(filePath, 'utf-8');
    const name = file.replace('.md', '');
    const catMatch = content.match(/^category: "?([^"\n]+)"?$/m);
    const cat = catMatch ? catMatch[1] : null;
    if (!cat) continue;

    const peers = (catMap[cat] || []).filter(p => p.name !== name);
    if (peers.length === 0) continue;

    // 提取現有的相關專案 wikilinks
    const existingMatch = content.match(/^相關專案：(.+)$/m);
    const existingLinks = existingMatch
      ? (existingMatch[1].match(/\[\[[^\]]+\]\]/g) || [])
      : [];

    // 如果現有連結超過上限，先修剪（修復早期無上限累積的問題）
    const MAX_RELATED = 8;
    if (existingLinks.length > MAX_RELATED && existingMatch) {
      const trimmed = existingLinks.slice(0, MAX_RELATED);
      const trimmedLine = `相關專案：${trimmed.join(' · ')}`;
      content = content.replace(/^相關專案：.+$/m, trimmedLine);
      await writeFile(filePath, content, 'utf-8');
      linkCount++;
      continue; // 修剪後跳過本輪新增
    }

    // 已達上限，跳過
    if (existingLinks.length >= MAX_RELATED) continue;

    const existingKeys = new Set(
      existingLinks.map(l => l.replace(/\[\[/, '').replace(/\|.*/, '').replace(/\]\]/, ''))
    );

    const slotsLeft = MAX_RELATED - existingLinks.length;

    // 找出同類別中存在於 vault 但尚未連結的 repo
    const newLinks = [];
    for (const peer of peers) {
      if (!existingKeys.has(peer.name)) {
        const display = peer.name.replace('--', '/');
        newLinks.push(`[[${peer.name}|${display}]]`);
        if (newLinks.length >= Math.min(3, slotsLeft)) break;
      }
    }

    // 跨分類連結：共享 2+ 概念的 repo（最多再加 2 個）
    if (newLinks.length < slotsLeft && repoConcepts[name]?.size > 0) {
      const myConcepts = repoConcepts[name];
      for (const [otherName, otherConcepts] of Object.entries(repoConcepts)) {
        if (otherName === name || existingKeys.has(otherName)) continue;
        if (newLinks.some(l => l.includes(otherName))) continue;
        const shared = [...myConcepts].filter(c => otherConcepts.has(c));
        if (shared.length >= 2) {
          const display = otherName.replace('--', '/');
          newLinks.push(`[[${otherName}|${display}]]`);
          if (newLinks.length >= slotsLeft) break;
        }
      }
    }

    if (newLinks.length === 0) continue;

    // 限制最多 8 個連結，保留既有的優先（手動策展可能更精準）
    const allLinks = [...existingLinks, ...newLinks].slice(0, 8);
    const mergedLine = `相關專案：${allLinks.join(' · ')}`;

    if (existingMatch) {
      content = content.replace(/^相關專案：.+$/m, mergedLine);
    } else {
      // 沒有現有的相關專案行，插入到延伸閱讀區塊
      const insertResult = content.replace(
        /^(## 延伸閱讀\n\n(?:相關概念：.+\n\n)?)/m,
        `$1${mergedLine}\n\n`
      );
      if (insertResult !== content) {
        content = insertResult;
      } else {
        // 找不到插入點，跳過
        continue;
      }
    }

    await writeFile(filePath, content, 'utf-8');
    linkCount += newLinks.length;
  }

  if (linkCount > 0) {
    console.log(`Auto cross-link: added ${linkCount} new vault-internal links`);
  }
}

// ── v12: 自動封存過期的低優先 to-review 筆記 ─────────────────
async function autoArchiveStale() {
  const { readdir } = await import('fs/promises');
  const files = await readdir(REPOS_DIR).catch(() => []);
  const mdFiles = files.filter(f => f.endsWith('.md'));
  let archivedCount = 0;

  for (const file of mdFiles) {
    const filePath = join(REPOS_DIR, file);
    const content = await readFile(filePath, 'utf-8');

    // 只處理 status: to-review + priority: low
    const status = content.match(/^status: (.+)$/m)?.[1];
    const priority = content.match(/^priority: (.+)$/m)?.[1];
    if (status !== 'to-review' || priority !== 'low') continue;

    // 檢查 first_seen 是否超過 14 天
    const firstSeen = content.match(/^first_seen: (.+)$/m)?.[1];
    if (!firstSeen) continue;
    const daysSince = Math.floor((Date.now() - new Date(firstSeen).getTime()) / 86400000);
    if (daysSince < 14) continue;

    // 自動封存
    const updated = content.replace(/^status: to-review$/m, 'status: archived');
    await writeFile(filePath, updated, 'utf-8');
    archivedCount++;
  }

  if (archivedCount > 0) {
    console.log(`Auto-archive: ${archivedCount} stale low-priority repos archived`);
  }
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
    await autoCrossLink();
    return;
  }
  console.log(`${newRepos.length} repos to process`);

  // 3. 平行抓取每個 repo 的詳細資料
  console.log('Fetching repo details (README, contributors, releases, languages)...');
  const detailedRepos = await Promise.all(
    newRepos.map((r) => fetchRepoDetails(r, token))
  );

  // 4. LLM 翻譯 + 摘要（傳入 vault 已有 repo 清單讓 LLM 優先引用）
  console.log('Generating Chinese content with LLM...');
  const preExisting = await import('fs/promises').then(m => m.readdir(REPOS_DIR).catch(() => []));
  const vaultRepoNames = preExisting.filter(f => f.endsWith('.md')).map(f => f.replace('.md', '').replace(/--/g, '/'));
  const llmData = await callLLM(detailedRepos, token, vaultRepoNames);
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

  // 建立 vault 內已存在的 repo 清單（用於過濾 ghost wikilinks）
  const { readdir } = await import('fs/promises');
  const existingFiles = await readdir(REPOS_DIR).catch(() => []);
  const existingRepos = new Set(existingFiles.filter(f => f.endsWith('.md')).map(f => f.replace('.md', '')));

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
          // 更新 frontmatter 中的動態數值
          const final = updated
            .replace(/^stars: \d+$/m, `stars: ${repo.stargazers_count}`)
            .replace(/^stars_per_day: \d+$/m, `stars_per_day: ${starsPerDay(repo.stargazers_count, repo.created_at)}`)
            .replace(/^forks: \d+$/m, `forks: ${repo.forks_count}`)
            .replace(/^open_issues: \d+$/m, `open_issues: ${repo.open_issues_count || 0}`)
            .replace(/^pushed_at: .+$/m, `pushed_at: ${repo.pushed_at?.split('T')[0] || 'N/A'}`);
          // 多次上榜自動提升 priority（出現 3+ 次 → high）+ 更新 appearances 計數
          const appearanceCount = (final.match(/^- \[\[/gm) || []).length;
          const curPriority = final.match(/^priority: (.+)$/m)?.[1];
          let promoted = final;
          // 更新 frontmatter appearances 計數
          if (promoted.includes('appearances:')) {
            promoted = promoted.replace(/^appearances: \d+$/m, `appearances: ${appearanceCount}`);
          } else {
            // 舊筆記沒有 appearances 欄位，加入
            promoted = promoted.replace(/^discovered_via: .+$/m, `$&\nappearances: ${appearanceCount}`);
          }
          if (appearanceCount >= 3 && curPriority !== 'high') {
            promoted = promoted.replace(/^priority: .+$/m, 'priority: high');
            console.log(`  Priority promoted to high (appeared ${appearanceCount} times)`);
          }
          // v12: 再次上榜 → 重置複習日期（3 天後）+ 更新參與度
          const newRate = starsPerDay(repo.stargazers_count, repo.created_at);
          const newReview = nextReviewDate(today, newRate);
          if (promoted.includes('next_review:')) {
            promoted = promoted.replace(/^next_review: ".+"$/m, `next_review: "${newReview}"`);
          } else {
            promoted = promoted.replace(/^appearances: .+$/m, `$&\nnext_review: "${newReview}"`);
          }
          const newEngagement = engagementLevel(repo.stargazers_count, repo.forks_count);
          if (promoted.includes('engagement:')) {
            promoted = promoted.replace(/^engagement: .+$/m, `engagement: ${newEngagement}`);
          } else {
            promoted = promoted.replace(/^next_review: .+$/m, `$&\nengagement: ${newEngagement}`);
          }
          // 如果被自動封存了，再次上榜時恢復
          if (promoted.match(/^status: archived$/m)) {
            promoted = promoted.replace(/^status: archived$/m, 'status: to-review');
            console.log(`  Unarchived: ${fileName} (re-appeared on trending)`);
          }
          await writeFile(filePath, promoted, 'utf-8');
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

    const note = generateRepoNote(repo, getLLMInfo(repo.full_name), today, existingRepos);
    await writeFile(filePath, note, 'utf-8');
    console.log(`  Created: Repos/${fileName}`);
    newNoteCount++;
    existingRepos.add(fileName.replace('.md', '')); // 新建的 repo 也加入清單
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

  // 8.7.1 自動充實概念描述（用 LLM 為空白概念生成描述）
  await enrichConceptDescriptions(token);

  // 8.8 自動交叉連結（為同類別的 vault-internal repo 建立 wikilinks）
  await autoCrossLink();

  // 8.9 自動封存：低優先、超過 14 天未動的 to-review 筆記
  await autoArchiveStale();

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
         !content.includes('priority:') ||   // v5: 優先級
         !content.includes('subcategory:') || // v6: 子分類
         !content.includes('**授權**') ||     // v7: 速覽授權顯示
         !content.includes('ring:') ||        // v8: Tech Radar ring
         !content.includes('verdict:') ||     // v8: 一句話結論
         !content.includes('新手體驗') ||      // v9: 豐富內容（deep_dive+onboarding+alternatives）
         !content.includes('**維護**') ||       // v10: 維護健康指標
         !content.includes('appearances:') ||   // v11: 出現次數追蹤
         !content.includes('next_review:') ||   // v12: 間隔複習日期
         !content.includes('engagement:') ||    // v12: 參與度指標
         !content.includes('ring_history:') ||     // v13: 狀態變更歷程
         !content.includes('成熟度評估') ||            // v14: 成熟度評估 + 強化替代方案 + 預期輸出
         !content.includes('## 開發動態') ||             // v15: 開發動態 + 熱門議題
         !content.includes('直接競品');                   // v16: 同子分類競品 + 共用概念
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

  // 限制每次 refresh 的數量和時間，避免 Actions 超時
  const MAX_REFRESH = parseInt(process.env.MAX_REFRESH || '15', 10);
  const MAX_REFRESH_TIME = parseInt(process.env.MAX_REFRESH_TIME || '1200', 10) * 1000; // 預設 20 分鐘
  const actualToRefresh = toRefresh.slice(0, MAX_REFRESH);
  console.log(`${toRefresh.length} notes need refresh (processing max ${MAX_REFRESH}, time limit ${MAX_REFRESH_TIME/1000}s)`);
  if (toRefresh.length > MAX_REFRESH) {
    console.log(`  Remaining ${toRefresh.length - MAX_REFRESH} will be refreshed in next run`);
  }
  let refreshedCount = 0;
  let skippedCount = 0;
  const refreshStart = Date.now();

  // 批次處理（每 3 個一批，避免 rate limit）
  const BATCH = 3;
  for (let i = 0; i < actualToRefresh.length; i += BATCH) {
    // 超時保護
    if (Date.now() - refreshStart > MAX_REFRESH_TIME) {
      console.log(`\nTime limit reached (${MAX_REFRESH_TIME/1000}s). Stopping refresh. Remaining notes will be processed in next run.`);
      break;
    }
    const batch = actualToRefresh.slice(i, i + BATCH);
    const elapsed = Math.round((Date.now() - refreshStart) / 1000);
    const pct = Math.round(((i) / actualToRefresh.length) * 100);
    console.log(`\nBatch ${Math.floor(i / BATCH) + 1}/${Math.ceil(actualToRefresh.length / BATCH)} (${batch.length} repos) — ${pct}% done, ${elapsed}s elapsed`);

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
    // vault repo 清單供 LLM 參考
    const refreshVaultNames = (await import('fs/promises').then(m => m.readdir(REPOS_DIR).catch(() => [])))
      .filter(f => f.endsWith('.md')).map(f => f.replace('.md', '').replace(/--/g, '/'));

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
          const result = await callLLMBatch([repoClone], token, refreshVaultNames);
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

    // 建立 vault 內已存在的 repo 清單（用於過濾 ghost wikilinks）
    const { readdir: readdirRefresh } = await import('fs/promises');
    const existingFilesRefresh = await readdirRefresh(REPOS_DIR).catch(() => []);
    const existingReposRefresh = new Set(existingFilesRefresh.filter(f => f.endsWith('.md')).map(f => f.replace('.md', '')));

    // 重新產生筆記
    for (let ri = 0; ri < repos.length; ri++) {
      const item = repos[ri];
      console.log(`  Merging ${ri + 1}/${repos.length}: ${item.file}`);
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
      const ringMatch = item.content.match(/^ring: (.+)$/m);
      const savedRing = ringMatch ? ringMatch[1] : 'assess';
      const verdictMatch = item.content.match(/^verdict: "(.+)"$/m);
      const savedVerdict = verdictMatch ? verdictMatch[1] : '';
      const discoveredMatch = item.content.match(/^discovered_via: "(.+)"$/m);
      const savedDiscovered = discoveredMatch ? discoveredMatch[1] : 'GitHub Trending';

      // 從舊筆記提取手動策展的 相關專案 wikilinks（延伸閱讀區塊）
      const oldRelatedMatch = item.content.match(/^相關專案：(.+)$/m);
      const oldRelatedLinks = oldRelatedMatch
        ? (oldRelatedMatch[1].match(/\[\[[^\]]+\]\]/g) || [])
        : [];

      const newNote = generateRepoNote(item.repo, llmInfo, firstSeen, existingReposRefresh);

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
        const mergedLine = `相關專案：${allLinks.slice(0, 8).join(' · ')}`;
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
        .replace(/^priority: (high|medium|low)$/m, `priority: ${savedPriority}`)
        .replace(/^ring: assess$/m, `ring: ${savedRing}`)
        .replace(/^verdict: ""$/m, `verdict: "${savedVerdict}"`)
        .replace(/^discovered_via: "GitHub Trending"$/m, `discovered_via: "${savedDiscovered}"`);
      // 保留 appearances 計數
      const savedAppearances = item.content.match(/^appearances: (\d+)$/m)?.[1];
      if (savedAppearances) {
        merged = merged.replace(/^appearances: \d+$/m, `appearances: ${savedAppearances}`);
      }
      // 保留使用者可能修改過的 next_review
      const savedNextReview = item.content.match(/^next_review: "(.+)"$/m)?.[1];
      if (savedNextReview) {
        merged = merged.replace(/^next_review: ".+"$/m, `next_review: "${savedNextReview}"`);
      }
      // 保留使用者累積的 ring_history
      const savedRingHistory = item.content.match(/^ring_history: "(.+)"$/m)?.[1];
      if (savedRingHistory) {
        merged = merged.replace(/^ring_history: ".+"$/m, `ring_history: "${savedRingHistory}"`);
      }
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

  const totalElapsed = Math.round((Date.now() - refreshStart) / 1000);
  const remaining = toRefresh.length - MAX_REFRESH;
  console.log(`\nRefresh complete! ${refreshedCount}/${actualToRefresh.length} notes updated, ${skippedCount} skipped (${totalElapsed}s total)${remaining > 0 ? ` — ${remaining} notes deferred to next run` : ''}`);

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
  await enrichConceptDescriptions(token);

  // refresh 後也自動交叉連結
  await autoCrossLink();
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
