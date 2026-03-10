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
      .slice(0, 2000)
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

const SYSTEM_PROMPT = `你是一位台灣的資深技術部落客，擅長用清晰易懂的中文介紹開源專案。

請為每個 GitHub 專案提供：
1. "description_zh": 翻譯描述（一句話，口語自然）
2. "summary": 3-4 句話說明：做什麼？什麼技術？解決什麼痛點？獨特之處？
3. "why_trending": 1-2 句分析為什麼現在爆紅
4. "use_cases": 陣列，3 個具體使用場景
5. "target_audience": 一句話說明適合誰
6. "category": 從 AI/ML、開發工具、Web 應用、CLI 工具、資料科學、安全、教學資源、其他 選一個
7. "related_concepts": 陣列，3 個相關技術概念（中文）

回傳 JSON 陣列：[{"repo":"owner/name","description_zh":"...","summary":"...","why_trending":"...","use_cases":["..."],"target_audience":"...","category":"...","related_concepts":["..."]}]
只回傳 JSON。`;

function buildRepoPrompt(repos) {
  return repos
    .map((r) => {
      const parts = [`${r.full_name}: ${r.description || 'No description'}`];
      if (r._readme) parts.push(`README: ${r._readme.slice(0, 300)}`);
      return parts.join('\n');
    })
    .join('\n---\n');
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
      max_tokens: 4000,
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
      console.warn(`  Batch ${batchNum} failed: ${err.message}`);
      // 失敗的 batch 跳過，繼續下一批
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

  // ── Frontmatter ──
  const fm = [
    '---',
    `repo: ${repo.full_name}`,
    `url: ${repo.html_url}`,
    `owner: ${repo.owner.login}`,
    `owner_type: ${repo.owner.type}`,
    `language: ${repo.language || 'N/A'}`,
    `license: ${repo.license?.spdx_id || 'N/A'}`,
    `stars: ${repo.stargazers_count}`,
    `forks: ${repo.forks_count}`,
    `created: ${repo.created_at.split('T')[0]}`,
    `first_seen: ${today}`,
    `category: "${cat}"`,
    `status: to-review`,
    'tags:',
    '  - github',
    `  - ${catTag}`,
  ];
  if (repo.language) fm.push(`  - ${repo.language.toLowerCase()}`);
  if (repo.topics?.length) {
    for (const t of repo.topics.slice(0, 5)) {
      fm.push(`  - ${t.replace(/-/g, '_')}`);
    }
  }
  fm.push('---');

  // ── Body ──
  const lines = [...fm, ''];

  // Title
  lines.push(`# ${repo.full_name.split('/')[1]}`);
  lines.push('');

  // Summary callout
  const descZh = llmInfo?.description_zh || repo.description || 'No description';
  lines.push('> [!summary] 一句話摘要');
  lines.push(`> ${descZh}`);
  lines.push('');

  // 專案簡介
  lines.push('## 專案簡介');
  lines.push('');
  if (llmInfo?.summary) {
    lines.push(llmInfo.summary);
  } else {
    lines.push(repo.description || 'No description available.');
  }
  lines.push('');

  // 為什麼值得關注
  lines.push('## 為什麼值得關注');
  lines.push('');
  if (llmInfo?.why_trending) {
    lines.push('> [!tip] 爆紅原因');
    lines.push(`> ${llmInfo.why_trending}`);
    lines.push('');
  }
  lines.push(
    `**${fmt(repo.stargazers_count)}** stars · **${fmt(rate)}** stars/天 · 建立 ${days} 天前`
  );
  lines.push('');

  // 使用場景
  if (llmInfo?.use_cases?.length) {
    lines.push('## 適合誰使用');
    lines.push('');
    if (llmInfo.target_audience) {
      lines.push(`**目標受眾**：${llmInfo.target_audience}`);
      lines.push('');
    }
    lines.push('> [!example] 使用場景');
    for (const uc of llmInfo.use_cases) {
      lines.push(`> - ${uc}`);
    }
    lines.push('');
  }

  // 技術細節
  lines.push('## 技術細節');
  lines.push('');
  lines.push('| 欄位 | 值 |');
  lines.push('| --- | --- |');
  lines.push(`| 語言 | ${repo.language || 'N/A'} |`);
  lines.push(`| 授權 | ${repo.license?.spdx_id || 'N/A'} |`);
  lines.push(`| Stars | ${fmt(repo.stargazers_count)} |`);
  lines.push(`| Forks | ${fmt(repo.forks_count)} |`);
  lines.push(`| Issues | ${repo.open_issues_count} |`);
  lines.push(`| 建立日期 | ${repo.created_at.split('T')[0]} |`);
  if (repo.homepage) lines.push(`| 官方網站 | [Link](${repo.homepage}) |`);
  lines.push('');

  // 語言組成 pie chart
  const langEntries = Object.entries(langPct);
  if (langEntries.length > 1) {
    lines.push('### 語言組成');
    lines.push('');
    lines.push('```mermaid');
    lines.push('pie title 語言組成');
    for (const [lang, pct] of langEntries) {
      lines.push(`    "${lang}" : ${pct}`);
    }
    lines.push('```');
    lines.push('');
  }

  // 貢獻者
  if (repo._contributors?.length) {
    lines.push('### 主要貢獻者');
    lines.push('');
    lines.push('| 貢獻者 | Commits |');
    lines.push('| --- | --- |');
    for (const c of repo._contributors) {
      lines.push(`| [@${c.login}](https://github.com/${c.login}) | ${c.contributions} |`);
    }
    lines.push('');
  }

  // 最新版本
  if (repo._release) {
    lines.push('### 最新版本');
    lines.push('');
    lines.push(`**${repo._release.tag}**${repo._release.name !== repo._release.tag ? ` — ${repo._release.name}` : ''} (${repo._release.date})`);
    lines.push('');
  }

  // README 摘錄（可收合）
  if (repo._readme) {
    lines.push('## README 摘錄');
    lines.push('');
    lines.push('> [!info]- 展開查看原文 README');
    // 分行處理，每行加 > 前綴
    const readmeLines = repo._readme.slice(0, 1200).split('\n');
    for (const rl of readmeLines) {
      lines.push(`> ${rl}`);
    }
    lines.push('');
  }

  // 相關概念
  if (llmInfo?.related_concepts?.length) {
    lines.push('## 相關概念');
    lines.push('');
    lines.push(llmInfo.related_concepts.map((c) => `[[${c}]]`).join(' · '));
    lines.push('');
  }

  // 個人筆記區
  lines.push('---');
  lines.push('');
  lines.push('> [!question] 個人筆記');
  lines.push('> _在此寫下你的想法、使用心得..._');
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
  if (llmData) for (const item of llmData) llm[item.repo] = item;

  const topInfo = llm[top.full_name];
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
    const info = llm[r.full_name];
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
    const info = llm[r.full_name];
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
---

# GitHub Trending Dashboard

> [!summary] 總覽
> 使用 Dataview 插件自動彙總所有收錄的 GitHub 專案

## 所有專案（依 Stars 排序）

\`\`\`dataview
TABLE
  stars AS "Stars",
  language AS "語言",
  category AS "分類",
  status AS "狀態",
  first_seen AS "收錄日期"
FROM "Repos"
SORT stars DESC
\`\`\`

## 依分類瀏覽

\`\`\`dataview
TABLE WITHOUT ID
  file.link AS "專案",
  stars AS "Stars",
  language AS "語言",
  status AS "狀態"
FROM "Repos"
GROUP BY category
SORT stars DESC
\`\`\`

## 待回顧的專案

\`\`\`dataview
TABLE
  stars AS "Stars",
  category AS "分類",
  first_seen AS "收錄日期"
FROM "Repos"
WHERE status = "to-review"
SORT stars DESC
\`\`\`

## 本週新增

\`\`\`dataview
TABLE
  stars AS "Stars",
  language AS "語言",
  category AS "分類"
FROM "Repos"
WHERE date(first_seen) >= date(today) - dur(7 days)
SORT stars DESC
\`\`\`

## 語言統計

\`\`\`dataview
TABLE WITHOUT ID
  language AS "語言",
  length(rows) AS "數量",
  sum(rows.stars) AS "總 Stars"
FROM "Repos"
GROUP BY language
SORT length(rows) DESC
\`\`\`

---

> [!info] 使用說明
> 此頁面需要安裝 [Dataview](https://github.com/blacksmithgu/obsidian-dataview) 插件才能正常顯示。
> 安裝方式：設定 → 社群插件 → 搜尋 Dataview → 安裝並啟用
`;
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

  const llmMap = {};
  if (llmData) for (const item of llmData) llmMap[item.repo] = item;

  // 5. 產生個別 Repo Notes
  await mkdir(REPOS_DIR, { recursive: true });
  let newNoteCount = 0;

  for (const repo of detailedRepos) {
    const fileName = repoFileName(repo.full_name);
    const filePath = join(REPOS_DIR, fileName);

    // 如果筆記已存在，不覆蓋（保護使用者的手動編輯）
    if (await fileExists(filePath)) {
      console.log(`  Skip (exists): ${fileName}`);
      continue;
    }

    const note = generateRepoNote(repo, llmMap[repo.full_name], today);
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
  if (!(await fileExists(dashboardPath))) {
    await writeFile(dashboardPath, generateDashboard(), 'utf-8');
    console.log('Created: Dashboard.md');
  }

  // 8. 更新 seen repos
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

  console.log(`\nDone! ${newNoteCount} new repo notes, 1 daily digest.`);
  console.log(`Tracking ${Object.keys(seen).length} repos total.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
