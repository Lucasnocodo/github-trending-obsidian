---
repo: kruzovic7/ai-data-extractor
url: https://github.com/kruzovic7/ai-data-extractor
owner: kruzovic7
owner_type: User
language: Python
license: MIT
description: "Free open-source extractor for AI coding assistant chat histories. Supports Claude Code, Cursor, Windsurf, Aider, Cline/Roo Code, and more."
homepage: ""
stars: 827
stars_per_day: 165
forks: 133
open_issues: 0
created: 2026-09-11
pushed_at: 2026-09-11
first_seen: 2026-09-15
week: "2026-W38"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-15
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-09-24"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 59
readme_length: 9992
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-09-15"
star_history: "2026-09-15:813,2026-09-16:823,2026-09-17:827"
tags:
  - github
  - "category/other"
  - "lang/python"
  - "topic/ai"
  - "topic/ai_data_extraction"
  - "topic/claude_code"
  - "topic/cursor"
aliases:
  - "ai-data-extractor"
  - "kruzovic7/ai-data-extractor"
---

# ai-data-extractor

**813** stars · **271** stars/天 · 建立 3 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/kruzovic7--ai-data-extractor");
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

`個人專案`

`ai` `ai-data-extraction` `claude-code` `cursor`

> [!summary] 一句話摘要
> Free open-source extractor for AI coding assistant chat histories. Supports Claude Code, Cursor, Windsurf, Aider, Cline/Roo Code, and more.

## 專案簡介

Free open-source extractor for AI coding assistant chat histories. Supports Claude Code, Cursor, Windsurf, Aider, Cline/Roo Code, and more.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/kruzovic7--ai-data-extractor");
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
> const me = dv.page("Repos/kruzovic7--ai-data-extractor");
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
| Forks | 132 |
| Open Issues | 0 |
| 最後推送 | 2026-09-11 |
| 建立日期 | 2026-09-11 |
| Repo 大小 | 59 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/kruzovic7/ai-data-extractor) |
| Topics | `ai` `ai-data-extraction` `claude-code` `cursor` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@kruzovic7](https://github.com/kruzovic7) | 6 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-11 ~ 2026-09-11）
> **活躍天數** 1 天 · **最新 commit** add LICENSE

## README 摘錄

> [!info]- 展開查看原文 README
> # AI Coding Assistant Data Extraction
> 
> Extract your **own local chat history** from AI coding assistants into a single,
> normalized JSONL format - for fine-tuning, personal analytics, or just backing
> up years of conversations before an app's local database gets cleared.
> 
> 
> 
> ## Quick start
> 
> ```bash
> 
> ## Features
> 
> Auto-discovers and extracts complete conversation history, including:
> 
> - User messages & assistant responses
> - Code context (file paths, selections, snippets)
> - Code diffs / suggested edits, where the tool records them
> - Tool calls and their results
> - Timestamps, session IDs, project paths, model names - whatever each
>   tool's storage actually contains
> 
> 
> ### Why Cline and Aider
> 
> They're two of the most-used AI coding tools that the original list left out,
> and both have a genuinely different (and instructive) storage shape:
> 
> - **Cline** (and its fork **Roo Code**) is the most popular open-source
>   autonomous coding *agent* extension. It stores raw Anthropic-format
>   message arrays per task, so its extractor doubles as the simplest example
>   of parsing that format if you want to add your own tool later.
> - **Aider** is the most popular *terminal-only* pair-programming tool, and
>   it's structured completely differently from everything else here: no
>   central database, just a markdown transcript sitting in every project
>   directory. It's included specifically to prove the toolkit generalizes
>   beyond "SQLite or JSONL in one app-data folder."
> 
> 
> ## Supported sources
> 
> | # | Tool | Storage | Search location |
> |---|------|---------|------------------|
> | 1 | **Claude Code** | JSONL, one file per session | `~/.claude/projects/**/*.jsonl` |
> | 2 | **Codex CLI** | JSONL "rollout" files | `~/.codex/sessions/**/rollout-*.jsonl` |
> | 3 | **Cursor** | SQLite (`state.vscdb`) | `~/…/Cursor/User/{global,workspace}Storage` |
> | 4 | **Windsurf** | SQLite, undocumented schema (heuristic) | `~/…/Windsurf/User/{global,workspace}Storage` |
> | 5 | **Trae** | SQLite + JSONL, undocumented (heuristic) | `~/…/Trae` |
> | 6 | **Continue** | JSON, one file per session | `~/.continue/sessions/*.json` |
> | 7 | **Gemini CLI** | JSON, one file per chat | `~/.gemini/tmp//chats/*.json` |
> | 8 | **OpenCode** | JSON (session/message/part trees) | `~/.local/share/opencode/storage/` |
> | 9 | **Cline / Roo Code** *(new)* | JSON, one folder per task | `/User/globalStorage//tasks/` |
> | 10 | **Aider** *(new)* | Markdown transcript per project | `/.aider.chat.history.md` |
> 
> Every script searches macOS, Linux, and Windows conventions
> (`~/Library/Application Support`, `~/.config`, `~/.local/share`, `%APPDATA%`,
> `%LOCALAPPDATA%`) automatically - you don't need to tell it which OS you're on.
> 
> 
> # No dependencies -- standard library only
> python --version   # 3.9+ required, 3.10+ recommended
> 
> 
> # Interactive: pick which sources to extract from a numbered menu
> python extract.py
> 
> 
> # Or drive it directly
> python extract.py --all
> python extract.py --sources cursor,claude_code,aider
> python extract.py --list                    # just show what's installed, don't extract
> python extract.py --all --merge             # also write all_conversations.jsonl
> 
> 
> # Shorthand for "extract everything"
> ./extract_all.sh
> ```
> 
> 
> ### CLI reference
> 
> ```
> python extract.py [--all] [--sources ids] [--list] [--output-dir DIR]
>                     [--search-path PATH ...] [--merge]
> 
> --all                 Extract every supported source, no prompts.
> --sources ids         Comma-separated source ids (see table above for names,
>                        or run with --list to see them). Skips the menu.
> --list                Report what was found for each source without
>                        extracting anything -- a fast, safe preview.
> --output-dir DIR      Where to write JSONL (default: ./extracted_data)
> --search-path PATH    Extra directory to search, on top of the normal OS
>                        locations. Repeatable. Mainly useful for:
>                          - Aider, which has no fixed app-data folder and
>                            needs to know where your projects live
>                          - nonstandard install locations for anything else
> --merge               After extracting, also concatenate everything into
>                        all_conversations.jsonl
> ```
> 
> Each extractor can also still be run standalone, same as the original
> toolkit (`python -m extractors.cursor` from the project root, or
> `python extractors/cursor.py`), which is handy while debugging one source.
> 
> 
> ## Output format
> 
> Every run creates timestamped files under `extracted_data/`:
> 
> ```
> extracted_data/
> ├── claude_code_conversations_20260816_143022.jsonl
> ├── cursor_conversations_20260816_143022.jsonl
> ├── aider_conversations_20260816_143022.jsonl
> ├── cline_conversations_20260816_143022.jsonl
> └── ... one file per source you extracted, plus all_conversations.jsonl if --merge
> ```
> 
> Each line is one JSON conversation:
> 
> ```json
> {
>   "messages": [
>     {
>       "role": "user",
>       "content": "How do I fix this TypeScript error?",
>       "code_context": [
>         {"file": "/Users/you/project/src/index.ts", "code": "const x: string = 123;"}
>       ],
>       "timestamp": "2026-01-16T14:30:22Z"
>     },
>     {
>       "role": "assistant",
>       "content": "The error occurs because you're assigning a number to a string type...",
>       "tool_use": [{"name": "edit_file", "input": {"path": "src/index.ts"}}],
>       "timestamp": "2026-01-16T14:30:25Z"
>     }
>   ],
>   "source": "cursor-composer",
>   "session_id": "c1a2b3...",
>   "project_path": "/Users/you/project",
>   "name": "TypeScript Type Error Fix",
>   "created_at": 1705414222000
> }
> ```
> 
> Fields vary a bit by source (not every tool records `code_context`, token
> usage, or `project_path`) - `messages`, `source`, and `session_id` are the
> only ones you can always rely on.
> 
> 
> ## How it works
> 
> 1. **Detect the OS** and build a list of plausible data roots
>    (`Application Support`, `.config`, `.local/share`, `%APPDATA%`, etc).
> 2. **Search each root** for the tool's known folder name(s).
> 3. **Read the storage** - JSONL line-by-line, SQLite via a read-only
>    connection (so a running app never blocks us), or JSON trees, depending
>    on the tool.
> 4. **Normalize** whatever's found into the `messages[]` schema above.
> 5. **Write JSONL**, one conversation per line, into `extracted_data/`.
> 
> Nothing here ever opens a database for writing, and every reader is wrapped
> so that one corrupt or locked file can't take down the whole run - you'll
> get a partial result and move on, not a stack trace.
> 
> 
> ### A note on Cursor, Windsurf, and Trae
> 
> None of these publish their storage schema, and it has changed multiple
> times (Cursor alone has gone through at least three shapes: workspace
> `ItemTable` chat, inline composer, and split `bubbleId` composer). The
> `cursor.py` extractor implements all three known shapes explicitly.
> `windsurf.py` and `trae.py` instead use a **generic heuristic**
> (`extractors/common.py::heuristic_extract_chat_from_kv`) that scans
> chat-related keys and walks the parsed JSON looking for objects shaped like
> a role + text pair. It's honest best-effort, not a documented format - if
> a future version changes shape and stops matching, that's expected; adjust
> `KEY_HINTS` in the relevant file or send a PR.
> 
> 
> ### A note on Aider
> 
> Aider has no central session store - every project directory gets its own
> `.aider.chat.history.md`. By default this toolkit scans your home directory
> plus a handful of common project-root names (`projects`, `code`, `dev`,
> `repos`, `workspace`, `src`, `Documents`) up to 5 directories deep, skipping
> `node_modules`, `.git`, and similar. If your projects live somewhere else,
> point at them directly:
> 
> ```bash
> python extract.py --sources aider --search-path ~/client-work --search-path /mnt/data/repos
> ```
> 
> 
> ## Extending it: adding a new source
> 
> Every extractor is a small modu

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]]

[GitHub](https://github.com/kruzovic7/ai-data-extractor)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "kruzovic7--ai-data-extractor"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "kruzovic7--ai-data-extractor" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W38" AND file.name != "kruzovic7--ai-data-extractor"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/kruzovic7--ai-data-extractor");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "kruzovic7--ai-data-extractor" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "kruzovic7" AND file.name != "kruzovic7--ai-data-extractor"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/kruzovic7--ai-data-extractor");
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
> const me = dv.page("Repos/kruzovic7--ai-data-extractor");
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
> const me = dv.page("Repos/kruzovic7--ai-data-extractor");
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
> const me = dv.page("Repos/kruzovic7--ai-data-extractor");
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
> const me = dv.page("Repos/kruzovic7--ai-data-extractor");
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

> **2026-09-15** — 首次收錄
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

- [[2026-09-17|2026-09-17]] — 再次上榜，827 stars
- [[2026-09-16|2026-09-16]] — 再次上榜，823 stars
- [[2026-09-15|2026-09-15]] — 首次收錄，813 stars
