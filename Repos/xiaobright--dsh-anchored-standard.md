---
repo: xiaobright/dsh-anchored-standard
url: https://github.com/xiaobright/dsh-anchored-standard
owner: xiaobright
owner_type: User
language: JavaScript
license: NOASSERTION
description: "Two-phase DeepSeek Harness preset: Minimal-aligned bootstrap, then full Standard tools (Project2 98/99)"
homepage: "https://github.com/xiaobright/modeltest"
stars: 3570
stars_per_day: 893
forks: 107
open_issues: 27
created: 2026-08-14
pushed_at: 2026-08-17
first_seen: 2026-08-16
week: "2026-W34"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-16
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-08-22"
contributor_count: 5
engagement: "low"
issue_close_rate: 16
repo_size_kb: 119
readme_length: 9554
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-08-16"
star_history: "2026-08-16:2247,2026-08-17:3102,2026-08-18:3435,2026-08-19:3570"
tags:
  - github
  - "category/other"
  - "lang/javascript"
  - "topic/deepseek"
  - "topic/deepseek_harness"
  - "topic/dsh_plugin"
  - "topic/llm_agent"
aliases:
  - "dsh-anchored-standard"
  - "xiaobright/dsh-anchored-standard"
---

# dsh-anchored-standard

**2.2k** stars · **2.2k** stars/天 · 建立 1 天前 · JavaScript · NOASSERTION

```dataviewjs
const me = dv.page("Repos/xiaobright--dsh-anchored-standard");
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

`deepseek` `deepseek-harness` `dsh-plugin` `llm-agent`

> [!summary] 一句話摘要
> Two-phase DeepSeek Harness preset: Minimal-aligned bootstrap, then full Standard tools (Project2 98/99)

## 專案簡介

Two-phase DeepSeek Harness preset: Minimal-aligned bootstrap, then full Standard tools (Project2 98/99)

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/xiaobright--dsh-anchored-standard");
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
> const me = dv.page("Repos/xiaobright--dsh-anchored-standard");
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
| Forks | 70 |
| Open Issues | 31 |
| Issue 解決率 | 16% (6 closed) |
| 最後推送 | 2026-08-15 |
| 建立日期 | 2026-08-14 |
| 官方網站 | [Link](https://github.com/xiaobright/modeltest) |
| Repo 大小 | 119 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/xiaobright/dsh-anchored-standard) |
| Topics | `deepseek` `deepseek-harness` `dsh-plugin` `llm-agent` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@xiaobright](https://github.com/xiaobright) | 11 |
> | [@3067997259-design](https://github.com/3067997259-design) | 5 |
> | [@Greenhand-monster](https://github.com/Greenhand-monster) | 5 |
> | [@wushi2333](https://github.com/wushi2333) | 3 |
> | [@AHCzyz](https://github.com/AHCzyz) | 2 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-15 ~ 2026-08-15）
> **活躍天數** 1 天 · **最新 commit** Merge branch 'develop': self-contained modes, README restructure, subagent guide

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#50](https://github.com/xiaobright/dsh-anchored-standard/issues/50) | [OMP Port] omp-deepseek-anchor — dsh-anchored-standard 移植到 O | 0 | 0 |
> | [#49](https://github.com/xiaobright/dsh-anchored-standard/issues/49) | instruction-hint 的命令式措辞会把锚定轨迹打回 "let me"；中性/建议式措辞能保住 "we"——且 | 0 | 2 |
> | [#47](https://github.com/xiaobright/dsh-anchored-standard/issues/47) | 更拉跨了，直接运行十几分钟没反应 | 0 | 0 |
> | [#46](https://github.com/xiaobright/dsh-anchored-standard/issues/46) | [Community] 独立插件 All-WarmUp：借鉴了 dsh-anchored-standard 的 epoc | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # dsh-anchored-standard
> 
> [中文说明](./README.zh-CN.md)
> 
> Experimental DeepSeek Harness agent presets — one base mode plus two variants
> — that anchor a session's first model request on the Minimal condition
> (real Minimal tool schema, no auto-injected context), then promote to a small
> resident catalog once the session is durable, unlocking heavier Standard tools
> on demand.
> 
> This is a community project. It is not an official DeepSeek preset and is not
> affiliated with or endorsed by DeepSeek.
> 
> 
> ## Install
> 
> Clone this repository, then copy the entire `preset` directory into the user
> preset root under the id `anchored-standard`. Every mode directory in this
> repository is self-contained: the `zero-anchored-standard/` and
> `whoami-standard/` variants install the same way, alone or together, with no
> other directory required (see their sections below).
> 
> PowerShell:
> 
> ```powershell
> $target = Join-Path $env:USERPROFILE '.dsh\.agent-presets\anchored-standard'
> if (Test-Path -LiteralPath $target) { throw "Preset already exists: $target" }
> New-Item -ItemType Directory -Force -Path (Split-Path -Parent $target) | Out-Null
> Copy-Item -Recurse -LiteralPath '.\preset' -Destination $target
> ```
> 
> Linux/macOS:
> 
> ```sh
> dsh_home="${DSH_HOME:-$HOME/.dsh}"
> mkdir -p "$dsh_home/.agent-presets"
> test ! -e "$dsh_home/.agent-presets/anchored-standard"
> cp -R preset "$dsh_home/.agent-presets/anchored-standard"
> ```
> 
> Fully restart DeepSeek Harness, create a blank session, and select
> **Anchored Standard (experimental)**. Do not switch an active session from a
> different preset.
> 
> 
> ## Configuration reference
> 
> All knobs are rows in each mode's `agent.cordis.yml`. Unknown keys fail at
> preset mount.
> 
> `tool-bootstrap` (in `preset/agent.cordis.yml`; the row must stay FIRST —
> waterfall registration order decides the first-request strip):
> 
> | Key | Default | Meaning |
> |---|---|---|
> | `bootstrapTools` | `[bash, str_replace_editor]` | Tools visible on request #1. |
> | `promoteOn` | `either` | Promotion trigger: `either`, `tool-call`, or `assistant-message`. |
> | `bootstrapMaxTokens` | unset | Optional output cap for request #1; stripped after promotion. |
> | `suppressedContextSources` | `[agent-instructions, skill-catalog]` | `source.kind` values stripped during bootstrap; `[]` disables the filter. |
> | `compactionTools` | `[]` | Extra tools available between a compaction boundary and re-promotion. |
> 
> `zero-tool-bootstrap` (in `zero-anchored-standard/` and `whoami-standard/`):
> `suppressedContextSources` and `compactionTools` have the same semantics
> (promotion is always the first `assistant/message`), plus
> `includeSubagents` — whether subagents also take the anchor phase (set `true`
> in `whoami-standard`, `false` in `zero-anchored-standard`).
> 
> `anchor-turn` (in both variants): `text` — the synthetic first user message
> (default "This round is a test. Tools are not open yet; all tools will open
> next round." in zero-anchored, "你是谁" in whoami); `includeSubagents` —
> whether subagents also take the anchor turn.
> 
> `instruction-hint` (all modes): `promoteOn` matching the mode's promotion
> semantics (`either` in the base mode, `assistant-message` in the variants) —
> the one-shot "instruction files exist, read them before acting" hint waits
> for promotion.
> 
> 
> ## Why
> 
> DeepSeek V4 Pro conditions strongly on the API-visible tool catalog. In the
> Project2 evaluation, Standard and PTC produced scores of 91 and 92, while the
> official Minimal preset produced 99 and 96. Permanently staying on Minimal,
> however, gives up the Standard preset's broader tool set.
> 
> Anchored Standard separates initial trajectory selection from later tool use:
> 
> 1. Keep the Minimal complete system prompt.
> 2. Expose the Minimal preset's REAL tool schemas — persistent `bash` +
>    `str_replace_editor`, byte-identical to the official Minimal composition —
>    on the first model request (lever 1 above).
> 3. Strip the auto-injected context on that first request as well — the
>    AGENTS.md/CLAUDE.md workspace digest and the available-skills reminder that
>    true Minimal never mounts (`suppressedContextSources` in the
>    `tool-bootstrap` row; lever 3). User-initiated skill gestures are not
>    filtered, and both injections return unchanged from request #2 on.
> 4. After the session records its first durable promotion signal — a `tool/call`
>    or the first `assistant/message`, whichever comes first — promote to the
>    RESIDENT catalog: the bootstrap pair plus the discovery tools plus whatever
>    the model has explicitly unlocked via `dev_tool_search`. Dumping the full
>    Standard catalog at promotion pulled the trajectory back to standard-like
>    behavior (the post-promotion regression), so heavier tools — `web_search`,
>    `subagent`, `workflow`, … — stay one `dev_tool_search` call away. Request
>    #1 always sees the bootstrap catalog; request #2 always sees the resident
>    catalog, so a text-only first reply can no longer trap the session in
>    bootstrap. (`promoteOn` in the `tool-bootstrap` row selects the trigger:
>    `either` default, `tool-call`, or `assistant-message`.)
> 5. Derive the phase from durable session events so resume and reload preserve it.
> 
> The bootstrap catalog is the same on every platform: the Minimal pair
> (`bash`/`str_replace_editor`). The preset's shell is the persistent PTY bash
> (the sandboxed Standard `bash` row is disabled — both register the `bash` name
> into the same layer, and the tools registry rejects duplicates; Windows never
> had the sandboxed bash anyway). `pwsh` remains available in the promoted
> catalog on Windows.
> 
> 
> ## Modes at a glance
> 
> | Mode | Directory | First model request | Anchor mechanism | Promotion signal | Cost |
> |---|---|---|---|---|---|
> | Anchored Standard | `preset/` | 2 tools (the Minimal pair) | Minimal tool schema | first durable `tool/call` **or** `assistant/message` (`promoteOn: either`) | none |
> | Zero-Anchored Standard | `zero-anchored-standard/` | 0 tools | one fixed anchor turn | the anchor reply (`assistant/message`) | +1 model call |
> | Whoami Standard | `whoami-standard/` | 0 tools | one "你是谁" self-introduction turn | the self-introduction reply (`assistant/message`) | +1 model call |
> 
> Every mode directory is self-contained and installs alone under whatever id
> you copy it to (see [Install](#install)).
> 
> 
> ## Terminology
> 
> - **trajectory** — the style of the model's first reasoning chain. The
>   Minimal condition produces "We need…" first lines; the Standard condition
>   produces "Let me…" ("standard-like") first lines.
> - **anchor** — the first-request conditions that select the trajectory. Issue
>   #11 isolated three levers: the tool schema, the output budget, and the
>   injected reminders.
> - **bootstrap phase** — request #1 of a session: the bootstrap tool pair, no
>   auto-injected context, optional output cap.
> - **promotion** — the durable session event that ends the bootstrap phase.
>   Base mode: first `tool/call` or `assistant/message`, whichever comes first.
>   Variants: the anchor reply.
> - **durable** — recorded in the session event log. Phase state is derived
>   from durable events, so resume and reload preserve it.
> - **resident catalog** — the promoted tool set: the bootstrap pair plus the
>   discovery tools plus every tool the model explicitly unlocked.
> - **discovery tools** — `dev_tool_search`, `skill_search`, `skill_load`: the
>   on-demand unlock surface for heavier Standard tools.
> - **materialized copy** — the committed copy of a `shared/` plugin inside a
>   mode directory, generated by `npm run sync`.
> 
> 
> ## How it works
> 
> The base mode in one request lifecycle (the variants change only the first
> turn — see their sections):
> 
> ```
> user's first message
>         │
>         ▼
> ┌ request #1 ─ bootstrap phase ──────────────────────────────┐
> │ tools    : bash + str_replace_editor (Minimal's real pair) │
> │ context  : no AGENTS.md digest, no skill-catalog reminder  │
> │ budget   : adapter default (`bootstrapMaxTokens` optional) │
> └─────────────────────────────────────────────────────────────┘
>         │ first durable tool/call OR assistant/m

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]] · [[FareedKhan-dev--kimi-k3-in-c|FareedKhan-dev/kimi-k3-in-c]]

[GitHub](https://github.com/xiaobright/dsh-anchored-standard) · [官方網站](https://github.com/xiaobright/modeltest)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "xiaobright--dsh-anchored-standard"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "xiaobright--dsh-anchored-standard" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W34" AND file.name != "xiaobright--dsh-anchored-standard"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/xiaobright--dsh-anchored-standard");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "xiaobright--dsh-anchored-standard" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "xiaobright" AND file.name != "xiaobright--dsh-anchored-standard"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/xiaobright--dsh-anchored-standard");
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
> const me = dv.page("Repos/xiaobright--dsh-anchored-standard");
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
> const me = dv.page("Repos/xiaobright--dsh-anchored-standard");
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
> const me = dv.page("Repos/xiaobright--dsh-anchored-standard");
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
> const me = dv.page("Repos/xiaobright--dsh-anchored-standard");
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

> **2026-08-16** — 首次收錄
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

- [[2026-08-19|2026-08-19]] — 再次上榜，3.6k stars
- [[2026-08-18|2026-08-18]] — 再次上榜，3.4k stars
- [[2026-08-17|2026-08-17]] — 再次上榜，3.1k stars
- [[2026-08-16|2026-08-16]] — 首次收錄，2.2k stars
