---
repo: donvito/codex-astra-luna-orchestrator
url: https://github.com/donvito/codex-astra-luna-orchestrator
owner: donvito
owner_type: User
language: Python
license: Apache-2.0
description: "Use Astra as orchestrator and Luna for subagents in Codex"
homepage: ""
stars: 933
stars_per_day: 187
forks: 70
open_issues: 3
created: 2026-09-05
pushed_at: 2026-09-11
first_seen: 2026-09-11
week: "2026-W37"
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
last_reviewed: 2026-09-11
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-09-18"
contributor_count: 3
engagement: "low"
issue_close_rate: 0
repo_size_kb: 43
readme_length: 9407
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-09-11"
star_history: "2026-09-11:933"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "codex-astra-luna-orchestrator"
  - "donvito/codex-astra-luna-orchestrator"
---

# codex-astra-luna-orchestrator

**933** stars · **187** stars/天 · 建立 5 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/donvito--codex-astra-luna-orchestrator");
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

> [!summary] 一句話摘要
> Use Astra as orchestrator and Luna for subagents in Codex

## 專案簡介

Use Astra as orchestrator and Luna for subagents in Codex

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/donvito--codex-astra-luna-orchestrator");
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
> const me = dv.page("Repos/donvito--codex-astra-luna-orchestrator");
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
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-09-11 |
| 建立日期 | 2026-09-05 |
| Repo 大小 | 43 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/donvito/codex-astra-luna-orchestrator) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 47
>     "PowerShell" : 32
>     "Shell" : 21
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@donvito](https://github.com/donvito) | 16 |
> | [@EinProfispieler](https://github.com/EinProfispieler) | 1 |
> | [@rksharma-owg](https://github.com/rksharma-owg) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-06 ~ 2026-09-11）
> **活躍天數** 5 天 · **最新 commit** Separate Pro and Plus profiles and preserve existing agent instructions

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/donvito/codex-astra-luna-orchestrator/issues/5) | Feedback from real project usage | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Codex Astra Orchestrator + Luna Subagents
> 
> A configurable Codex setup where GPT-6 Astra is the root/orchestrator and reviewer, while GPT-5.6 Luna is the default and pinned model for execution subagents.
> 
> The installer asks which Codex plan you are on. Pro uses GPT-6 Astra at medium reasoning to orchestrate and GPT-5.6 Luna at max reasoning for execution subagents. Plus uses GPT-5.6 Luna at max reasoning to orchestrate and medium reasoning for execution subagents. Both plans retain the separate GPT-6 Astra reviewer at low reasoning.
> 
> ## Layout
> 
> ```text
> .
> ├── profiles/
> │   ├── pro/
> │   │   ├── codex/           (config.toml and agents/*.toml)
> │   │   └── agents/          (skills/astra-orchestrator/SKILL.md)
> │   └── plus/
> │       ├── codex/           (config.toml and agents/*.toml)
> │       └── agents/          (skills/astra-orchestrator/SKILL.md)
> ├── guides/
> │   ├── fast-iteration.md
> │   ├── complex-repo-work.md
> │   ├── routine-coding.md
> │   ├── full-orchestration.md
> │   ├── plus-plan.md
> │   └── token-usage.md
> ├── scripts/
> │   └── token_usage.py
> ├── AGENTS.md
> ├── setup.sh
> ├── setup.ps1
> └── LICENSE
> ```
> 
> ## Current Plus and Pro configuration
> 
> | Role or setting | Plus | Pro |
> |---|---|---|
> | Orchestrator | GPT-5.6 Luna — max | GPT-6 Astra — medium |
> | Explorer, worker, tester, researcher | GPT-5.6 Luna — medium | GPT-5.6 Luna — max |
> | Default subagent | GPT-5.6 Luna — medium | GPT-5.6 Luna — max |
> | Independent reviewer | GPT-6 Astra — low | GPT-6 Astra — low |
> | Concurrent subagent limit | 4 | 4 |
> 
> ### Pro — `profiles/pro/codex/config.toml`
> 
> ```toml
> model = "gpt-6-astra"
> model_reasoning_effort = "medium"
> 
> approval_policy = "on-request"
> sandbox_mode = "workspace-write"
> 
> [agents]
> enabled = true
> max_concurrent_threads_per_session = 4
> default_subagent_model = "gpt-5.6-luna"
> default_subagent_reasoning_effort = "max"
> ```
> 
> ### Plus — `profiles/plus/codex/config.toml`
> 
> ```toml
> model = "gpt-5.6-luna"
> model_reasoning_effort = "max"
> 
> approval_policy = "on-request"
> sandbox_mode = "workspace-write"
> 
> [agents]
> enabled = true
> max_concurrent_threads_per_session = 4
> default_subagent_model = "gpt-5.6-luna"
> default_subagent_reasoning_effort = "medium"
> ```
> 
> The installer copies `profiles//codex` to `.codex` and
> `profiles//agents` to `.agents` in the target repository. Each profile
> is ready to copy, with no configuration rewriting during setup.
> 
> Each role file is explicitly pinned to its intended model: Luna for explorer, worker, tester, and researcher; Astra for reviewer. This means changing only `default_subagent_model` will affect generic spawned agents, but not the named roles.
> 
> The four Luna role files explicitly set `model_reasoning_effort = "max"` in the Pro profile and `"medium"` in the Plus profile. The reviewer keeps its explicit `low` effort in both.
> 
> When updating an existing installation, copy the role files along with `config.toml` from the selected profile. Replace `` below with `pro` or `plus`.
> 
> If you want all named roles, including the reviewer, to follow the `[agents]` defaults, remove both the `model` and `model_reasoning_effort` overrides from their role files.
> 
> ## Project setup
> 
> Clone this repository:
> 
> ```bash
> git clone https://github.com/donvito/codex-astra-luna-orchestrator.git
> cd codex-astra-luna-orchestrator
> ```
> 
> The target project must already exist and must be different from this setup
> repository.
> 
> ### macOS and Linux
> 
> Run the shell installer:
> 
> ```bash
> ./setup.sh
> ```
> 
> ### Windows
> 
> Run the PowerShell installer from Windows PowerShell:
> 
> ```powershell
> powershell -ExecutionPolicy Bypass -File .\setup.ps1
> ```
> 
> With PowerShell 7, you can use:
> 
> ```powershell
> pwsh -File .\setup.ps1
> ```
> 
> ### Installer prompts
> 
> When asked for the target repository, enter its absolute or relative path. For
> example:
> 
> ```text
> Target repository path: ../my-project
> ```
> 
> Next, choose your Codex plan:
> 
> ```text
> Codex plan:
>   1) Pro  - GPT-6 Astra orchestrates, GPT-5.6 Luna executes, GPT-6 Astra reviews
>   2) Plus - GPT-5.6 Luna (max reasoning) orchestrates, GPT-5.6 Luna executes, GPT-6 Astra reviews
> Select plan [1/2] (default 1):
> ```
> 
> The selected configuration sets both the root and default subagent reasoning.
> Agent role files are shared between plans: explorer, worker, tester, and
> researcher use Luna at the plan's default effort; the reviewer uses Astra at low
> effort on both plans.
> 
> The installer then asks whether to install each component:
> 
> - `profiles//codex` contains the root configuration and agent role profiles, installed as `.codex`.
> - `profiles//agents` contains the `astra-orchestrator` skill, installed as `.agents`.
> - `AGENTS.md` gives Codex the project-level orchestration instructions. If it
>   already exists, setup appends the instructions and preserves its contents.
>   Re-running setup skips the append when the same instructions are already
>   present. Symbolic links and incompatible targets are skipped.
> 
> Press Enter or answer `y` to install a component; answer `n` to skip it. All
> three components are selected by default.
> 
> If a component already exists, the installer lists the exact paths that would
> be overwritten and asks again before making changes:
> 
> ```text
> WARNING: the following existing files will be overwritten:
>   - .codex/config.toml
> Update .codex? New files will be added; only paths listed above will be replaced. [y/N]
> ```
> 
> Existing-file updates default to `n`. If approved, missing files are added and
> only the listed paths are replaced. Other files already present in the target
> component remain untouched.
> 
> After setup, launch Codex from the target repository. Project-scoped `.codex`
> configuration is loaded only for trusted projects.
> 
> See `guides/` for copy-paste model presets and the Astra + Luna topology. The
> guides are intentionally separate from the installers so you can review and
> adapt settings for your Codex version without changing a global config
> automatically.
> 
> ## Personal/global setup
> 
> For agents, copy the TOML files from `profiles//codex/agents/` to:
> 
> ```text
> ~/.codex/agents/
> ```
> 
> For the skill, copy `profiles//agents/skills/astra-orchestrator/` to:
> 
> ```text
> ~/.agents/skills/astra-orchestrator/
> ```
> 
> Merge the settings from `profiles/pro/codex/config.toml` (Pro) or `profiles/plus/codex/config.toml`
> (Plus) into your existing:
> 
> ```text
> ~/.codex/config.toml
> ```
> 
> Do not blindly overwrite your existing global config if you already have MCP servers, providers, permissions, or other settings.
> 
> ## Using the skill
> 
> Codex may select the skill automatically when the task matches its description.
> 
> You can also invoke it explicitly from Codex CLI or the IDE extension with:
> 
> ```text
> $astra-orchestrator
> ```
> 
> Example prompt:
> 
> ```text
> $astra-orchestrator
> 
> Implement the new invoice export endpoint.
> Have explorer map the existing invoice/export path first.
> Use workers for bounded implementation, tester for verification,
> and reviewer for an independent final review.
> ```
> 
> ## Suggested topology
> 
> ```text
>                  GPT-6 Astra
>              root / orchestrator
>                       |
>       +---------------+---------------+
>       |               |               |
>    explorer          worker         researcher
>      Luna             Luna             Luna
>       |               |
>       +-------+-------+
>               |
>            tester
>             Luna
>               |
>           reviewer
>            Astra
>               |
>               v
>          GPT-6 Astra
>       integrate + verify
> ```
> 
> ## Tuning
> 
> For cheaper/faster runs:
> - lower Pro's Astra reasoning from `medium` to `low`
> - set Luna reasoning to `low` or `medium`
> - use 3-4 concurrent threads
> 
> For larger codebases:
> - consider raising Pro's Astra reasoning to `high`
> - start with your plan's Luna default and adjust based on results
> - use 6-8 concurrent threads, only when tasks are actually independent
> 
> For strict parent/child separation:
> - keep explorer/reviewer/researcher read-only
> - keep worker/tester workspace-write
> - leave the root in workspace-write so it can integrate changes
> 
> ## Token usage
> 
> Orchestration is not free: th

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]]

[GitHub](https://github.com/donvito/codex-astra-luna-orchestrator)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "donvito--codex-astra-luna-orchestrator"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "donvito--codex-astra-luna-orchestrator" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W37" AND file.name != "donvito--codex-astra-luna-orchestrator"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/donvito--codex-astra-luna-orchestrator");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "donvito--codex-astra-luna-orchestrator" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "donvito" AND file.name != "donvito--codex-astra-luna-orchestrator"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/donvito--codex-astra-luna-orchestrator");
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
> const me = dv.page("Repos/donvito--codex-astra-luna-orchestrator");
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
> const me = dv.page("Repos/donvito--codex-astra-luna-orchestrator");
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
> const me = dv.page("Repos/donvito--codex-astra-luna-orchestrator");
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
> const me = dv.page("Repos/donvito--codex-astra-luna-orchestrator");
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

> **2026-09-11** — 首次收錄
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

- [[2026-09-11|2026-09-11]] — 首次收錄，933 stars
