import { readFile, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DATA_DIR = join(ROOT, 'data');
const TRENDING_DIR = join(ROOT, 'trending');
const SEEN_FILE = join(DATA_DIR, 'seen-repos.json');

const TOP_N = 10;

async function fetchTrendingRepos(token) {
  const now = new Date();
  const weekAgo = new Date(now);
  weekAgo.setDate(weekAgo.getDate() - 7);
  const since = weekAgo.toISOString().split('T')[0];

  // 搜尋本週新建立的 repo，依星數排序，排除 fork
  const query = `created:>=${since} fork:false`;
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&sort=stars&order=desc&per_page=50`;

  const headers = {
    Accept: 'application/vnd.github+json',
    'User-Agent': 'github-trending-obsidian',
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const res = await fetch(url, { headers });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub API error ${res.status}: ${body}`);
  }

  const data = await res.json();
  return data.items || [];
}

async function loadSeen() {
  try {
    return JSON.parse(await readFile(SEEN_FILE, 'utf-8'));
  } catch {
    return [];
  }
}

async function saveSeen(seen) {
  await mkdir(DATA_DIR, { recursive: true });
  await writeFile(SEEN_FILE, JSON.stringify(seen, null, 2), 'utf-8');
}

function formatNumber(n) {
  if (n >= 1000) {
    return `${(n / 1000).toFixed(1)}k`;
  }
  return String(n);
}

function generateMarkdown(repos, today) {
  const lines = [
    '---',
    `date: ${today}`,
    'tags:',
    '  - github',
    '  - trending',
    '  - weekly',
    '---',
    '',
    `# GitHub Trending - ${today}`,
    '',
    '> 本週新建立且星數最高的熱門專案（已排除過去收錄過的）',
    '',
  ];

  repos.forEach((repo, i) => {
    lines.push(`## ${i + 1}. [[${repo.name}|${repo.full_name}]]`);
    lines.push('');
    lines.push(`| 欄位 | 值 |`);
    lines.push(`| --- | --- |`);
    lines.push(`| Stars | ${formatNumber(repo.stargazers_count)} |`);
    lines.push(`| Language | ${repo.language || 'N/A'} |`);
    lines.push(`| 建立日期 | ${repo.created_at.split('T')[0]} |`);
    lines.push(`| License | ${repo.license?.spdx_id || 'N/A'} |`);
    lines.push('');
    lines.push(`**Description**: ${repo.description || 'N/A'}`);
    lines.push('');

    if (repo.topics && repo.topics.length > 0) {
      lines.push(`**Topics**: ${repo.topics.map((t) => `\`${t}\``).join(' ')}`);
      lines.push('');
    }

    lines.push(`[GitHub](${repo.html_url})`);
    lines.push('');
    lines.push('---');
    lines.push('');
  });

  return lines.join('\n');
}

async function main() {
  const token = process.env.GITHUB_TOKEN;

  console.log('Fetching trending repos from GitHub...');
  const allRepos = await fetchTrendingRepos(token);
  console.log(`Found ${allRepos.length} repos from API`);

  const seen = await loadSeen();
  const seenSet = new Set(seen);

  const newRepos = allRepos
    .filter((repo) => !seenSet.has(repo.full_name))
    .slice(0, TOP_N);

  if (newRepos.length === 0) {
    console.log('No new trending repos today. Skipping.');
    return;
  }

  console.log(`${newRepos.length} new repos after dedup`);

  const today = new Date().toISOString().split('T')[0];
  const md = generateMarkdown(newRepos, today);

  await mkdir(TRENDING_DIR, { recursive: true });
  const notePath = join(TRENDING_DIR, `${today}-github-trending.md`);
  await writeFile(notePath, md, 'utf-8');
  console.log(`Written: trending/${today}-github-trending.md`);

  const updatedSeen = [...seen, ...newRepos.map((r) => r.full_name)];
  await saveSeen(updatedSeen);
  console.log(`Seen repos updated: ${updatedSeen.length} total`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
