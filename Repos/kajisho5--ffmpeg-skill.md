---
repo: kajisho5/ffmpeg-skill
url: https://github.com/kajisho5/ffmpeg-skill
owner: kajisho5
owner_type: User
language: Python
license: MIT
description: ""
homepage: ""
stars: 896
stars_per_day: 149
forks: 63
open_issues: 2
created: 2026-09-03
pushed_at: 2026-09-09
first_seen: 2026-09-10
week: "2026-W37"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: "v0.16.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-10
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-09-17"
contributor_count: 3
engagement: "low"
issue_close_rate: 92
repo_size_kb: 8983
readme_length: 9811
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-09-10"
star_history: "2026-09-10:896"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "ffmpeg-skill"
  - "kajisho5/ffmpeg-skill"
---

# ffmpeg-skill

**896** stars · **149** stars/天 · 建立 6 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/kajisho5--ffmpeg-skill");
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

`v0.16.0`

> [!summary] 一句話摘要
> No description

## 專案簡介

No description available.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/kajisho5--ffmpeg-skill");
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
> const me = dv.page("Repos/kajisho5--ffmpeg-skill");
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
| Forks | 63 |
| Open Issues | 2 |
| Issue 解決率 | 92% (23 closed) |
| 最後推送 | 2026-09-09 |
| 建立日期 | 2026-09-03 |
| Repo 大小 | 8.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/kajisho5/ffmpeg-skill) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "Shell" : 1
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@kajisho5](https://github.com/kajisho5) | 90 |
> | [@claude](https://github.com/claude) | 3 |
> | [@srthomas21](https://github.com/srthomas21) | 1 |

**最新版本**：v0.16.0 — 0.16.0 (2026-09-09)

> [!info]- Release Notes
> New tool: composite `--cols`x`--rows` clips into one grid (e.g. a 4x2 wall
> of takes or angles), each cell letterboxed (not stretched) to a common
> `--cell-width`/`--cell-height` so mismatched aspect ratios and resolutions
> line up cleanly. `--label auto` (default) burns each clip's own filename,
> extension stripped, into its cell's bottom-right corner; `--label none`
> turns that off. No audio unless `--audio-from` picks one input's track --
> mixing every clip's audio together is rarely what a comparison grid needs,
> so this tool never does it silently. Runs only as long as the shortest
> clip by default; `--pad` instead holds each shorter clip's last frame (with
> silence) out to the longest.
> 
> The per-cell label is filename-derived text reaching a `drawtext=text=...`
> option, the same injection class fixed in 0.15.3 -- wrapped with the
> existing `escape_drawtext()` helper from the start, with a regression test
> that builds a clip literally named to look like a filter-graph breakout
> payload and confirms it renders as inert literal text (not a new filter).
> 
> 
> 
> ## What's Changed
> * add .npmignore: stop shipping __pycache__ in the npm tarball by @kajisho5 in https://github.com/kajisho5/ffmpeg-skill/pull/102
> * Add sphere.py: flat-viewport extraction from 360/spherical video by @kajisho5 in https://github.com/kajisho5/ffmpeg-skill/pull/103
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-09 ~ 2026-09-09）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #110 from kajisho5/add-grid-tool

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#111](https://github.com/kajisho5/ffmpeg-skill/issues/111) | A failed ffprobe deletes the input file (partial-output clea | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> ffmpeg-skill
> 
> Give your coding agent a video editor.
> 
>   Local FFmpeg · No cloud · No API keys · Python standard library
>   Claude Code · Cursor · Codex · MCP
> 
>   
>   
>   
>   
>   
> 
> ```bash
> npx ffmpeg-skill
> ```
> 
> `ffmpeg-skill` is an [Agent Skill](https://docs.anthropic.com/en/docs/agents-and-tools/agent-skills) for Claude Code, Cursor, Codex and any agent that reads `SKILL.md`. It teaches the agent a fixed workflow (probe → edit losslessly where possible → check → verify) and ships **40 tools** that do the actual work with `ffmpeg` / `ffprobe`: cut, join, silence removal, fit to duration and aspect, captions and karaoke, overlays and motion graphics, HDR → SDR and LUTs, audio clean-up and typed dynamics, sync with drift correction, multicam, loudness, delivery checks, whole-edit project rendering, batch folders. Every tool is also an MCP tool, and the whole set is described by a machine-readable contract.
> 
> If `ffmpeg` and `python3` are on your PATH, it works: offline, on footage you would rather not upload.
> 
> > **SPEC** (Self-Producing Execution Contract), coined by this project's author
> > [kajisho5](https://github.com/kajisho5): each tool's `input_schema` — the part of its contract
> > and MCP tool definition that has to track the CLI flag-for-flag — is never hand-authored beside
> > the code. It's derived, at run time, from the same `argparse` parser that already defines the
> > CLI, and CI fails the build if any of it drifts. → [full explanation](#what-is-spec)
> 
> ---
> 
> 
> ## Quick start
> 
> ```bash
> 
> # 1. install the skill for Claude Code (Cursor: --cursor, Codex: --codex, all three: --all)
> npx ffmpeg-skill
> 
> 
> ## Install
> 
> ```bash
> npx ffmpeg-skill              # Claude Code   → ~/.claude/skills/ffmpeg-skill
> npx ffmpeg-skill --cursor     # Cursor        → ~/.cursor/skills/ffmpeg-skill
> npx ffmpeg-skill --codex      # Codex         → ~/.codex/skills/ffmpeg-skill
> npx ffmpeg-skill --all        # all three
> npx ffmpeg-skill --project    # this project  → ./.claude/skills/ffmpeg-skill
> npx ffmpeg-skill --dir ./my-skills
> npx ffmpeg-skill --uninstall  # remove from the selected targets
> ```
> 
> Without Node: clone this repository and copy `SKILL.md`, `scripts/`, `references/` and `mcp/` into your agent's skills directory.
> 
> After installing:
> 
> ```bash
> npx ffmpeg-skill doctor           # every required FFmpeg component present?
> npx ffmpeg-skill contract --json  # what the agent framework will see
> ```
> 
> FFmpeg itself:
> 
> | OS | Command |
> |----|---------|
> | macOS | `brew install ffmpeg-full` (the plain `ffmpeg` formula lacks the subtitles, drawtext and zscale filters) |
> | Ubuntu / Debian | `sudo apt install ffmpeg` |
> | Windows | `winget install Gyan.FFmpeg` |
> 
> 
> ## Why
> 
> An agent that "knows FFmpeg" still guesses: it assumes a frame rate, picks a codec the container cannot hold, re-encodes a file that only needed a stream copy, and reports "done" without opening the result. ffmpeg-skill exists to take the guessing out:
> 
> - **Real files first.** Every job starts with `probe.py`; the agent decides from the measured duration, fps, resolution, colour and audio layout, not from the file name.
> - **Structured tools, not shell strings.** Each operation is a script with typed arguments. Nothing runs through a shell; no filter graph is accepted from the caller.
> - **A contract the agent can read.** `contract --json` states, for every tool, what it takes, what it writes, which FFmpeg components it needs and how the result is verified. The MCP surface is derived from it.
> - **Verification after execution.** The result is probed, checked against the destination's spec and, when the picture changed, looked at as a contact sheet.
> - **Local first.** No cloud, no API keys, no Python dependencies. Optional local transcription is used when a whisper is installed, never required.
> 
> 
> ## Standalone, and in an ecosystem
> 
> **Standalone**, this is a local FFmpeg engine: probe → edit → verify, `npx ffmpeg-skill` and nothing else. No API key, no account, no other repo required. Everything above and below this section describes that standalone tool, and none of it changes if you never read the rest of this one.
> 
> **In [kajisho5](https://github.com/kajisho5)'s wider video-production ecosystem**, this repo is the *hands*: it cuts, measures and exports files, and reports back in structured JSON. It does not decide what to cut, whether a deliverable is approvable, or what makes a highlight interesting — those are a *brain*'s job, sitting in front of this engine, not inside it.
> 
> | You want to... | Use |
> |---|---|
> | Cut / join / measure / export a file right now | **this repo** (`ffmpeg-skill`), standalone |
> | Decide cut points, approve a deliverable, plan a whole edit | [`video-production-agent`](https://github.com/kajisho5/video-production-agent) / [`AI-video-production-OS`](https://github.com/kajisho5/AI-video-production-OS) |
> | Build a typed editing graph across a workspace, without writing raw `ffmpeg` | [`video-editing-skill`](https://github.com/kajisho5/video-editing-skill) / [`audio-production-skill`](https://github.com/kajisho5/audio-production-skill) |
> 
> Other repos in the ecosystem — [`media-analysis-skill`](https://github.com/kajisho5/media-analysis-skill), [`transcription-skill`](https://github.com/kajisho5/transcription-skill), [`subtitle-skill`](https://github.com/kajisho5/subtitle-skill), [`thumbnail-skill`](https://github.com/kajisho5/thumbnail-skill), [`color-grading-skill`](https://github.com/kajisho5/color-grading-skill), [`motion-graphics-skill`](https://github.com/kajisho5/motion-graphics-skill), [`qc-skill`](https://github.com/kajisho5/qc-skill) — read this repo's `contract --json`, its tools' `--json` output and `doctor`, the same way any agent framework would; this repo does not call into any of them. The dependency runs one way.
> 
> ---
> 
> **Contents**
> [Standalone, and in an ecosystem](#standalone-and-in-an-ecosystem) · [Why](#why) · [Quick start](#quick-start) · [How it works](#how-it-works) · [Design principles](#design-principles) · [Tools](#tools) · [Audio](#audio-is-a-first-class-input) · [Built for agents](#built-for-agents) · [FFmpeg compatibility](#ffmpeg-compatibility) · [Tested on real footage](#tested-on-real-footage) · [Install](#install) · [Requirements](#requirements) · [Development](#development) · [Docs](#docs)
> 
> ---
> 
> 
> # 2. check the machine: ffmpeg, ffprobe and every FFmpeg component the tools need
> npx ffmpeg-skill doctor
> 
> 
> # 3. (for agent frameworks) read the machine-readable contract
> npx ffmpeg-skill contract --json | head -40
> ```
> 
> Already installed? re-run `npx ffmpeg-skill` to refresh `~/.claude/skills/ffmpeg-skill`. Copies are not updated automatically.
> 
> `doctor`'s overall `ok` and a single tool's `usable: no` are different signals: `ok` means nothing *required by every tool* is missing, but a plain Homebrew `ffmpeg` on macOS can still be `ok` while `caption.py` specifically can't run (no `subtitles` filter) — check `doctor --json`'s `tools` field for the per-tool answer, not just `ok`.
> 
> Then talk to your agent:
> 
> > "Take `interview.mp4`, keep 0:45–3:10 and 5:00–6:30, and make it exactly 60 seconds for Reels."
> 
> The agent runs `probe.py`, `cut.py --segments 0:45-3:10,5:00-6:30`, `fit.py --duration 60 --aspect 9:16 --fit crop`, `export.py --preset reels`, `check.py --platform reels` and `look.py`, then reports "final.mp4: 59.98 s, 1080×1920, 30 fps, AAC stereo" with the contact sheet it inspected.
> 
> The tools also work on their own, from any shell:
> 
> ```bash
> S=~/.claude/skills/ffmpeg-skill/scripts
> python3 $S/probe.py input.mp4 --compact
> python3 $S/fit.py input.mp4 --duration 60 --aspect 9:16 --dry-run    # print the plan, run nothing
> python3 $S/export.py input.mp4 --preset reels --json                 # structured result with a probe of the output
> ```
> 
> On Windows in Git Bash, `python3` is only on PATH if Python was installed from the Microsoft Store; a python.org install exposes `python` (or the `py` launcher) instead — replace `python3` with `python` above if you see a "command not found". `bin/in

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/kajisho5/ffmpeg-skill)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "kajisho5--ffmpeg-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "kajisho5--ffmpeg-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W37" AND file.name != "kajisho5--ffmpeg-skill"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/kajisho5--ffmpeg-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "kajisho5--ffmpeg-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "kajisho5" AND file.name != "kajisho5--ffmpeg-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/kajisho5--ffmpeg-skill");
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
> const me = dv.page("Repos/kajisho5--ffmpeg-skill");
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
> const me = dv.page("Repos/kajisho5--ffmpeg-skill");
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
> const me = dv.page("Repos/kajisho5--ffmpeg-skill");
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
> const me = dv.page("Repos/kajisho5--ffmpeg-skill");
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

> **2026-09-10** — 首次收錄
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

- [[2026-09-10|2026-09-10]] — 首次收錄，896 stars
