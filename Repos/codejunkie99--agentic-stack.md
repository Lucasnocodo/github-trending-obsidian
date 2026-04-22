---
repo: codejunkie99/agentic-stack
url: https://github.com/codejunkie99/agentic-stack
owner: codejunkie99
owner_type: User
language: Python
license: Apache-2.0
description: "One brain, many harnesses. Portable .agent/ folder (memory + skills + protocols) that plugs into Claude Code, Cursor, Windsurf, OpenCode, OpenClaw, Hermes, or DIY Python — and keeps its knowledge when you switch."
homepage: ""
stars: 1275
stars_per_day: 213
forks: 152
open_issues: 2
created: 2026-04-15
pushed_at: 2026-04-21
first_seen: 2026-04-22
week: "2026-W17"
month: "2026-04"
category: "Other"
subcategory: ""
release_tag: "v0.8.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-22
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-25"
contributor_count: 5
engagement: "medium"
issue_close_rate: 60
repo_size_kb: 5213
readme_length: 9757
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-22"
star_history: "2026-04-22:1275"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "agentic-stack"
  - "codejunkie99/agentic-stack"
---

# agentic-stack

**1.3k** stars · **213** stars/天 · 建立 6 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/codejunkie99--agentic-stack");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!warning] AI 摘要產生失敗
> 此筆記的中文翻譯和分析未能成功產生。以下為原始資料，你可以手動補充。

`v0.8.0`

> [!summary] 一句話摘要
> One brain, many harnesses. Portable .agent/ folder (memory + skills + protocols) that plugs into Claude Code, Cursor, Windsurf, OpenCode, OpenClaw, Hermes, or DIY Python — and keeps its knowledge when you switch.

## 專案簡介

One brain, many harnesses. Portable .agent/ folder (memory + skills + protocols) that plugs into Claude Code, Cursor, Windsurf, OpenCode, OpenClaw, Hermes, or DIY Python — and keeps its knowledge when you switch.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/codejunkie99--agentic-stack");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   // v29: README 品質和 Issue 解決率
>   const readmeLen = me.readme_length || 0;
>   const readmeQ = readmeLen > 5000 ? "Excellent" : readmeLen > 2000 ? "Good" : readmeLen > 500 ? "Basic" : readmeLen > 0 ? "Minimal" : "None";
>   const icr = me.issue_close_rate;
>   const icrLabel = icr === undefined || icr < 0 ? "N/A" : icr + "%";
>   const icrEval = icr === undefined || icr < 0 ? "?" : icr >= 80 ? "Excellent" : icr >= 50 ? "Good" : icr >= 20 ? "Fair" : "Poor";
>   const repoKB = me.repo_size_kb || 0;
>   const sizeLabel = repoKB > 102400 ? (repoKB/1024).toFixed(0) + " MB" : repoKB + " KB";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Issue 解決率", icrLabel, icrEval],
>     ["Bus Factor", (me.bus_factor || 0) + " 人", (me.bus_factor || 0) >= 3 ? "Good" : (me.bus_factor || 0) >= 2 ? "OK" : "Risk"],
>     ["README 品質", readmeLen.toLocaleString() + " 字元", readmeQ],
>     ["Repo 大小", sizeLabel, repoKB > 102400 ? "Large" : repoKB > 10240 ? "Medium" : "Small"],
>     ["發版節奏", me.release_cadence || "unknown", me.release_cadence === "weekly" || me.release_cadence === "monthly" ? "Active" : me.release_cadence === "never" ? "No releases" : "Check"],
>     ["距上次發版", (me.last_release_days || 0) >= 0 ? (me.last_release_days + " 天") : "N/A", (me.last_release_days || -1) < 0 ? "?" : (me.last_release_days || 0) <= 30 ? "Fresh" : (me.last_release_days || 0) <= 90 ? "OK" : "Stale"],
>   ]);
> }
> ```

> [!abstract]- CHAOSS 社群健康度雷達
> ```dataviewjs
> const me = dv.page("Repos/codejunkie99--agentic-stack");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : 999;
>   const dims = [
>     ["維護活躍度", Math.max(0, 5 - Math.floor(daysSincePush / 14))],
>     ["貢獻者多樣性", Math.min(5, Math.floor((me.bus_factor || 0) * 1.5 + (me.contributor_count || 0) / 3))],
>     ["Issue 回應力", (me.issue_close_rate || 0) >= 80 ? 5 : (me.issue_close_rate || 0) >= 50 ? 4 : (me.issue_close_rate || 0) >= 20 ? 2 : 1],
>     ["發版節奏", me.release_cadence === "weekly" ? 5 : me.release_cadence === "monthly" ? 4 : me.release_cadence === "quarterly" ? 3 : me.release_cadence === "irregular" ? 2 : 1],
>     ["社群規模", Math.min(5, Math.floor(Math.log10(Math.max(me.stars || 1, 1)) * 1.2))],
>     ["Fork 活躍度", (me.forks || 0) > 100 ? 5 : (me.forks || 0) > 30 ? 4 : (me.forks || 0) > 10 ? 3 : (me.forks || 0) > 3 ? 2 : 1],
>   ];
>   dv.table(["維度", "分數", "視覺化"], dims.map(([name, score]) => [
>     name, score + "/5", "\u2588".repeat(score) + "\u2591".repeat(5 - score)
>   ]));
>   const avg = (dims.reduce((a, b) => a + b[1], 0) / dims.length).toFixed(1);
>   dv.paragraph("**綜合健康度：" + avg + "/5**");
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 152 |
| Open Issues | 2 |
| Issue 解決率 | 60% (3 closed) |
| 最後推送 | 2026-04-21 |
| 建立日期 | 2026-04-15 |
| Repo 大小 | 5.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/codejunkie99/agentic-stack) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `anthropic` `openai`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 96
>     "PowerShell" : 2
>     "Shell" : 2
>     "Ruby" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@codejunkie99](https://github.com/codejunkie99) | 25 |
> | [@aliirz](https://github.com/aliirz) | 1 |
> | [@JagritGumber](https://github.com/JagritGumber) | 1 |
> | [@mimed95](https://github.com/mimed95) | 1 |
> | [@smartsastram](https://github.com/smartsastram) | 1 |

**最新版本**：v0.8.0 — v0.8.0 — Antigravity adapter + rich episodic logging (2026-04-21)

> [!info]- Release Notes
> First release since v0.7.2. Brings the Antigravity harness, makes Claude Code's episodic memory actually useful, and consolidates per-version notes into [CHANGELOG.md](https://github.com/codejunkie99/agentic-stack/blob/master/CHANGELOG.md).
> 
> ## Added
> - **Google Antigravity adapter** (`./install.sh antigravity`). Drops `ANTIGRAVITY.md` into the project root so Antigravity agents pick up the portable brain in `.agent/`. Brings the supported-harness count to 9. Thanks to @smartsastram (#9).
> - **Rich `PostToolUse` episodic logging for Claude Code.** New `.agent/harness/hooks/claude_code_post_tool.py` reads the JSON payload Claude Code sends via stdin and derives a real action label, importance score, and non-empty reflection per tool call. Replaces the old hardcoded `post-tool ok` that produced identical entries every session and left the dream cycle with nothing to cluster on. Ships with a 54-test validation suite. Thanks to @aliirz (#8).
> - **User-owned stack tuning via `hook_patterns.json`.** Drop your own high-stakes and medium-stakes patterns into `.agent/protocols/hook_patterns.json` so the hook scores `vercel deploy`, `supabase migrate`, etc. correctly for your stack. Ships with empty arrays and an `_examples` section.
> - **`on_failure()` severity overrides.** A failed production deploy records its real severity instead of the flat `importance=7 / pain_score=8` defaults.
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-20 ~ 2026-04-21）
> **活躍天數** 2 天 · **最新 commit** docs: refresh Repo layout + architecture diagram for v0.8.0

## README 摘錄

> [!info]- 展開查看原文 README
> # agentic-stack
> 
> **Keep one portable memory-and-skills layer across coding-agent harnesses, so switching tools doesn't reset how your agent works.**
> 
> A portable `.agent/` folder (memory + skills + protocols) that plugs into Claude Code, Cursor, Windsurf, OpenCode, OpenClaw, Hermes, Pi Coding Agent, or a DIY Python loop — and keeps its knowledge when you switch.
> 
>   
> 
>   
> 
> [](https://github.com/codejunkie99/agentic-stack/releases)
> [](LICENSE)
> Made by https://x.com/Av1dlive
> 
> 
> ## Quickstart
> 
> 
> # tap + install (one-time — both lines required)
> brew tap codejunkie99/agentic-stack https://github.com/codejunkie99/agentic-stack
> brew install agentic-stack
> 
> 
> # clone + run the native installer
> git clone https://github.com/codejunkie99/agentic-stack.git
> cd agentic-stack
> .\install.ps1 claude-code C:\path\to\your-project
> ```
> 
> 
> ### Already installed?
> 
> ```bash
> brew update && brew upgrade agentic-stack
> ```
> 
> 
> # or on Windows PowerShell: .\install.ps1 claude-code
> 
> # enable during onboarding (or set manually in .agent/memory/.features.json)
> python3 .agent/memory/memory_search.py "deploy failure"
> python3 .agent/memory/memory_search.py --status
> python3 .agent/memory/memory_search.py --rebuild
> ```
> 
> Falls back to **ripgrep** (`rg`) if installed, then to `grep` — both
> restricted to `.md` / `.jsonl` so source files never pollute results.
> The index is stored at `.agent/memory/.index/` and gitignored.
> 
> 
> ### macOS / Linux
> 
> ```bash
> 
> # drop the brain into any project — the onboarding wizard runs automatically
> cd your-project
> agentic-stack claude-code
> 
> # or: cursor | windsurf | opencode | openclaw | hermes | pi | standalone-python | antigravity
> ```
> 
> 
> ### Windows (PowerShell)
> 
> ```powershell
> 
> ### Clone instead?
> 
> ```bash
> git clone https://github.com/codejunkie99/agentic-stack.git
> cd agentic-stack && ./install.sh claude-code         # mac / linux / git-bash
> 
> # adapters: claude-code | cursor | windsurf | opencode | openclaw | hermes | pi | standalone-python | antigravity
> ```
> 
> 
> ## Onboarding wizard
> 
> After the adapter is installed, a terminal wizard populates
> `.agent/memory/personal/PREFERENCES.md` — the **first file your AI reads
> at the start of every session** — and writes a feature-toggle file at
> `.agent/memory/.features.json`.
> 
> Six preference questions (each skippable with Enter):
> 
> | Question | Default |
> |---|---|
> | What should I call you? | *(skip)* |
> | Primary language(s)? | `unspecified` |
> | Explanation style? | `concise` |
> | Test strategy? | `test-after` |
> | Commit message style? | `conventional commits` |
> | Code review depth? | `critical issues only` |
> 
> Plus one **Optional features** step (opt-in, off by default):
> 
> | Feature | Default |
> |---|---|
> | Enable FTS memory search `[BETA]` | `no` |
> 
> **Flags:**
> 
> ```bash
> agentic-stack claude-code --yes          # accept all defaults, beta off (CI/scripted)
> agentic-stack claude-code --reconfigure  # re-run the wizard on an existing project
> ```
> 
> Edit `.agent/memory/personal/PREFERENCES.md` any time to refine your
> conventions, or `.agent/memory/.features.json` to flip feature toggles.
> 
> 
> ## Review protocol (host-agent CLI)
> 
> The nightly `auto_dream.py` cycle only **stages** candidate lessons. It
> does not mark anything accepted or modify semantic memory. Your host
> agent does the review in-session:
> 
> ```bash
> 
> # list pending candidates, sorted by priority
> python3 .agent/tools/list_candidates.py
> 
> 
> # accept with rationale (required)
> python3 .agent/tools/graduate.py  --rationale "evidence holds, matches PREFERENCES"
> 
> 
> # reject with reason (required); preserves decision history
> python3 .agent/tools/reject.py  --reason "too specific to generalize"
> 
> 
> # requeue a previously-rejected candidate
> python3 .agent/tools/reopen.py 
> ```
> 
> Graduated lessons land in `semantic/lessons.jsonl` (source of truth) and
> are rendered to `semantic/LESSONS.md`. Rejected candidates retain full
> decision history so recurring churn is visible, not fresh.
> 
> See [`docs/architecture.md`](docs/architecture.md) for the full lifecycle.
> 
> ---
> 
> 
> ## What this is
> 
> Every guide shows the folder structure. This repo gives you the folder
> structure **plus the files that actually go inside**: a working portable
> brain with five seed skills, four memory layers, enforced permissions, a
> nightly staging cycle, host-agent review tools, and adapters for eight
> harnesses.
> 
> - **Memory** — `working/`, `episodic/`, `semantic/`, `personal/`. Each
>   layer has its own retention policy. Query-aware retrieval (salience ×
>   relevance); nightly compression into reviewable candidates.
> - **Review protocol** — `auto_dream.py` stages candidate lessons
>   mechanically. Your host agent reviews them via CLI tools
>   (`graduate.py`, `reject.py`, `reopen.py`) and commits decisions with
>   a required rationale. No unattended reasoning, no provider coupling.
> - **Skills** — progressive disclosure. A lightweight manifest always
>   loads; full `SKILL.md` files only load when triggers match the task.
>   Every skill ships with a self-rewrite hook.
> - **Protocols** — typed tool schemas, a `permissions.md` that the
>   pre-tool-call hook enforces, and a delegation contract for sub-agents.
> 
> 
> ## Memory search `[BETA]`
> 
> Opt-in FTS5 keyword search over all memory documents:
> 
> ```bash
> 
> ## Repo layout
> 
> ```
> .agent/                         # the portable brain (same across harnesses)
> ├── AGENTS.md                   # the map
> ├── harness/                    # conductor + hooks (standalone path)
> │   └── hooks/
> │       ├── claude_code_post_tool.py  # rich PostToolUse logging (v0.8+)
> │       ├── pre_tool_call.py    # permissions enforcement
> │       ├── post_execution.py   # log_execution() entry point
> │       └── on_failure.py       # failure write + repeated-failure rewrite flag
> ├── memory/                     # working / episodic / semantic / personal
> │   ├── auto_dream.py           # staging-only dream cycle
> │   ├── cluster.py              # content clustering + pattern extraction
> │   ├── promote.py              # stage candidates
> │   ├── validate.py             # heuristic prefilter (length + exact duplicate)
> │   ├── review_state.py         # candidate lifecycle + decision log
> │   ├── render_lessons.py       # lessons.jsonl → LESSONS.md
> │   └── memory_search.py        # [BETA] FTS5 search (opt-in)
> ├── skills/                     # _index.md + _manifest.jsonl + SKILL.md files
> ├── protocols/                  # permissions + tool schemas + delegation
> │   └── hook_patterns.json      # user-owned high/medium-stakes regex (v0.8+)
> └── tools/                      # host-agent CLI + memory_reflect + skill_loader
>     ├── learn.py                # one-shot lesson teaching (stage + graduate)
>     ├── recall.py               # surface lessons relevant to an intent
>     ├── show.py                 # colorful brain-state dashboard
>     ├── list_candidates.py
>     ├── graduate.py
>     ├── reject.py
>     └── reopen.py
> 
> adapters/                       # one small shim per harness
> ├── claude-code/   (CLAUDE.md + settings.json hooks)
> ├── cursor/        (.cursor/rules/*.mdc)
> ├── windsurf/      (.windsurfrules)
> ├── opencode/      (AGENTS.md + opencode.json)
> ├── openclaw/      (system-prompt include)
> ├── hermes/        (AGENTS.md)
> ├── pi/            (AGENTS.md + .pi/skills symlink)
> ├── standalone-python/  (DIY conductor entrypoint)
> └── antigravity/   (ANTIGRAVITY.md)
> 
> docs/                           # architecture, getting-started, per-harness
> install.sh                      # mac / linux / git-bash installer
> install.ps1                     # Windows PowerShell installer
> CHANGELOG.md                    # per-version release notes (v0.1.0 onward)
> onboard.py                      # onboarding wizard entry point
> onboard_features.py             # .features.json read/write
> onboard_ui.py                   # ANSI palette, banner, clack-style layout
> onboard_widgets.py              # arrow-key prompts (text, select, confirm)
> onboard_render.py               # answers → PREFERENCES.md content
> onboard_write.py                # atomic file write with backup
> test_claude_code_hook.py        # hook 

## 延伸閱讀

[GitHub](https://github.com/codejunkie99/agentic-stack)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "codejunkie99--agentic-stack"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "codejunkie99--agentic-stack" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "codejunkie99--agentic-stack"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/codejunkie99--agentic-stack");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "codejunkie99--agentic-stack" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
>     .sort(p => p.stars_per_day || 0, "desc").limit(5);
>   if (better.length > 0) {
>     dv.table(["專案", "Ring", "Stars/天", "安裝", "用途"], better.map(p => [
>       p.file.link, p.ring, p.stars_per_day || 0, p.install_complexity || "?", (p.use_case || "").toString().slice(0, 40)
>     ]));
>   } else { dv.paragraph("_此分類中沒有 Ring 更高的專案（你可能已經在用最好的了）_"); }
> }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "codejunkie99" AND file.name != "codejunkie99--agentic-stack"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/codejunkie99--agentic-stack");
> const all = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars_per_day || 0, "desc");
> const rank = all.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const catAll = all.where(p => p.category === me?.category);
> const catRank = catAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const totalStarsAll = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars || 0, "desc");
> const starsRank = totalStarsAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> if (rank > 0) {
>   const pct = Math.round((1 - rank / all.length) * 100);
>   dv.paragraph(`Stars/天排名：**全 vault 第 ${rank}**/${all.length}（前 ${100 - pct}%）· **${me.category} 第 ${catRank}**/${catAll.length}\nStars 總量排名：**第 ${starsRank}**/${totalStarsAll.length}`);
> }
> ```

## Star 趨勢

> [!abstract]- Stars 成長追蹤
> ```dataviewjs
> const me = dv.page("Repos/codejunkie99--agentic-stack");
> if (me?.star_history) {
>   const raw = me.star_history.toString();
>   const points = raw.split(",").map(p => { const [d, s] = p.split(":"); return { date: d, stars: parseInt(s) }; }).filter(p => !isNaN(p.stars));
>   if (points.length >= 2) {
>     const max = Math.max(...points.map(p => p.stars));
>     const lines = points.map(p => {
>       const w = Math.round(p.stars / max * 25);
>       return `${p.date} ${"\u2588".repeat(w)}${"\u2591".repeat(25-w)} ${p.stars.toLocaleString()}`;
>     });
>     const first = points[0].stars;
>     const last = points[points.length-1].stars;
>     const growth = first > 0 ? Math.round((last - first) / first * 100) : 0;
>     lines.push(`\n**成長** +${(last-first).toLocaleString()} stars（${growth}%）in ${points.length} snapshots`);
>     // 趨勢方向偵測
>     if (points.length >= 3) {
>       const mid = Math.floor(points.length / 2);
>       const fh = points.slice(0, mid), sh = points.slice(mid);
>       const rateF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
>       const rateS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
>       const ratio = rateF > 0 ? rateS / rateF : rateS > 0 ? 2 : 1;
>       const dir = ratio > 1.3 ? "Rising（加速中）" : ratio < 0.7 ? "Cooling（降溫中）" : "Stable（穩定）";
>       lines.push(`**趨勢方向** ${dir}（加速比 ${Math.round(ratio * 100) / 100}x）`);
>     }
>     dv.paragraph(lines.join("\n"));
>   } else { dv.paragraph("需要 2+ 次快照才能顯示趨勢"); }
> } else { dv.paragraph("尚無 star_history 資料（下次出現在 trending 時會開始追蹤）"); }
> ```

## 相對成長速度

> [!abstract]- 跟 vault 中同類專案比較
> ```dataviewjs
> const me = dv.page("Repos/codejunkie99--agentic-stack");
> if (me) {
>   const all = dv.pages('"Repos"').where(p => p.status !== "archived");
>   const sameCat = all.where(p => p.category === me.category);
>   const avgAll = all.length > 0 ? Math.round(all.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / all.length) : 0;
>   const avgCat = sameCat.length > 0 ? Math.round(sameCat.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / sameCat.length) : 0;
>   const mySpd = me.stars_per_day || 0;
>   const vsAll = avgAll > 0 ? Math.round(mySpd / avgAll * 100) : 0;
>   const vsCat = avgCat > 0 ? Math.round(mySpd / avgCat * 100) : 0;
>   dv.table(["比較對象", "平均 Stars/天", "本專案", "倍數"], [
>     ["全 Vault", avgAll, mySpd, vsAll + "%"],
>     ["同分類 (" + me.category + ")", avgCat, mySpd, vsCat + "%"],
>   ]);
>   if (vsAll >= 300) dv.paragraph("**極速成長** — 成長速度是 vault 平均的 3 倍以上");
>   else if (vsAll >= 150) dv.paragraph("**高速成長** — 成長速度高於 vault 平均");
>   else if (vsAll >= 50) dv.paragraph("**正常速度** — 接近 vault 平均水平");
>   else dv.paragraph("**低速成長** — 低於 vault 平均，可能已過熱度高峰");
> }
> ```

## 決策分數

> [!abstract]- 綜合評估（自動計算）
> ```dataviewjs
> const me = dv.page("Repos/codejunkie99--agentic-stack");
> if (me) {
>   let score = 0;
>   let breakdown = [];
>   // 熱度 (0-25)
>   const spd = me.stars_per_day || 0;
>   const heat = Math.min(25, Math.round(spd / 40 * 25));
>   score += heat; breakdown.push(`熱度: ${heat}/25`);
>   // 安裝難度 (0-20)
>   const inst = me.install_complexity === "easy" ? 20 : me.install_complexity === "medium" ? 12 : 5;
>   score += inst; breakdown.push(`易用性: ${inst}/20`);
>   // 成熟度 (0-20)
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
>   const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
>   score += mat; breakdown.push(`成熟度: ${mat}/20`);
>   // 社群 (0-20)
>   const forks = me.forks || 0;
>   const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
>   score += comm; breakdown.push(`社群: ${comm}/20`);
>   // 授權 (0-15)
>   const lic = me.license || "";
>   const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
>   const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
>   score += licScore; breakdown.push(`授權: ${licScore}/15`);
>   const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
>   const bar = "\u2588".repeat(Math.round(score/5)) + "\u2591".repeat(20 - Math.round(score/5));
>   dv.paragraph(`## ${grade} (${score}/100)\n${bar}\n\n${breakdown.join(" | ")}`);
> }
> ```

---

## 個人筆記

> [!abstract]- 評估進度
> ```dataviewjs
> const me = dv.page("Repos/codejunkie99--agentic-stack");
> if (me) {
>   const steps = [
>     { name: "已讀", done: me.status && me.status !== "to-review" },
>     { name: "已評分", done: (me.my_rating || 0) > 0 },
>     { name: "有結論", done: me.verdict && me.verdict !== "" },
>     { name: "Ring 決策", done: me.ring && me.ring !== "" && me.ring !== "assess" },
>     { name: "試用記錄", done: me.status === "tried" || me.status === "integrated" },
>   ];
>   const done = steps.filter(s => s.done).length;
>   const pct = Math.round((done / steps.length) * 100);
>   const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
>   dv.paragraph(`${bar} **${done}/${steps.length}** (${pct}%)`);
>   const todo = steps.filter(s => !s.done).map(s => s.name);
>   if (todo.length > 0) dv.paragraph("待完成：" + todo.join(" / "));
> }
> ```

> [!question]+ 快速評估（30 秒填完）
> 
> 相關性:: 未評估
> 印象:: _一句話_
> 行動:: 不需要
> 
> | 維度 | 分數 (1-5) | 說明 |
> | --- | :---: | --- |
> | 信心 | /5 | _我對這工具的了解程度_ |
> | 興趣 | /5 | _想投入時間研究的程度_ |
> | 風險 | /5 | _導入風險，5=極低風險_ |
> 
> _填完後更新 frontmatter：`score_confidence` / `score_interest` / `score_risk`_
> 
> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_
> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 測試環境 :: _OS / Node / Python 版本_
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 花費時間 :: _從零到可用_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 踩到的坑 :: _描述 + 解法_
> 決定 :: _繼續使用 / 暫時擱置 / 放棄（原因）_

> [!question]- 待研究的問題
> _記下看完後還沒有答案的問題，未來回來補充_
> 
> - [ ] 

### 採用判斷

> [!tip]- 什麼時候該用 / 不該用
> **該用的情況**：
> - 
> 
> **不該用的情況**：
> - 

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

### 決策記錄

> [!abstract]- 為什麼評估這個工具？
> **當時的痛點**：_遇到什麼問題才開始找工具？_
> **觸發來源**：_GitHub Trending / HN / 同事推薦 / 其他_
> **當時的約束**：_時間 / 團隊 / 語言 / 部署環境_

> [!note]- 最終決策
> decision:: _選了什麼（或為何還在觀望）_
> why:: _當時的理由（越具體越好）_
> outcome:: _後來實際發生了什麼_

### 探索日誌

_按時間記錄，每次接觸時追加一段（最新在上）_

> **2026-04-22** — 首次收錄
> _第一印象：_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-04-22|2026-04-22]] — 首次收錄，1.3k stars
