---
repo: dzhng/jevgrep
url: https://github.com/dzhng/jevgrep
owner: dzhng
owner_type: User
language: TypeScript
license: MIT
description: "Find code by asking what it does. A CLI for coding agents that uses Jev to discover relevant files and source context."
homepage: ""
stars: 2015
stars_per_day: 336
forks: 132
open_issues: 25
created: 2026-09-26
pushed_at: 2026-10-02
first_seen: 2026-09-29
week: "2026-W40"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: "v0.6.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-29
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-10-05"
contributor_count: 4
engagement: "low"
issue_close_rate: 22
repo_size_kb: 7728
readme_length: 7342
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-09-29"
star_history: "2026-09-29:1522,2026-09-30:1805,2026-10-01:1922,2026-10-02:2015"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - "topic/ai_sdk"
  - "topic/claude_code"
  - "topic/cli"
  - "topic/code_search"
  - "topic/codex"
aliases:
  - "jevgrep"
  - "dzhng/jevgrep"
---

# jevgrep

**1.5k** stars · **507** stars/天 · 建立 3 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/dzhng--jevgrep");
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

`v0.6.0`

`ai-sdk` `claude-code` `cli` `code-search` `codex` `coding-agents` `context-retrieval` `developer-tools` `jev` `semantic-search` `typescript` `vercel-ai-gateway`

> [!summary] 一句話摘要
> Find code by asking what it does. A CLI for coding agents that uses Jev to discover relevant files and source context.

## 專案簡介

Find code by asking what it does. A CLI for coding agents that uses Jev to discover relevant files and source context.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/dzhng--jevgrep");
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
> const me = dv.page("Repos/dzhng--jevgrep");
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
| Forks | 96 |
| Open Issues | 18 |
| Issue 解決率 | 22% (5 closed) |
| 最後推送 | 2026-09-29 |
| 建立日期 | 2026-09-26 |
| Repo 大小 | 7.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/dzhng/jevgrep) |
| Topics | `ai-sdk` `claude-code` `cli` `code-search` `codex` `coding-agents` `context-retrieval` `developer-tools` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `oxfmt` `oxlint` `turbo` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 59
>     "JavaScript" : 22
>     "Python" : 18
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@dzhng](https://github.com/dzhng) | 173 |
> | [@tmchow](https://github.com/tmchow) | 2 |
> | [@a-lang](https://github.com/a-lang) | 1 |
> | [@mubaid](https://github.com/mubaid) | 1 |

**最新版本**：v0.6.0 — Jevgrep 0.6.0 (2026-09-29)

> [!info]- Release Notes
> Jevgrep 0.6.0 adds local search-scope inspection and custom gateway support.
> 
> ## New
> 
> - `jg files [root]` reports eligible file counts, byte totals, top-level directory groups, and filter skips without credentials or provider requests. Counts are an upper bound; searches still apply content checks.
> - Repeatable `--exclude PATTERN` narrows searches and file inventories using root-relative gitignore patterns.
> - `jg auth --provider custom --base-url URL --model ID --stdin` configures a TypeSafe-compatible gateway. Interactive auth also offers Custom endpoint.
> - The bundled skill has clearer behavioral-search triggers, preserves grep for exact lookups, and explains inventories, exclusions, and delegated discovery.
> 
> ## Fixes and documentation
> 
> - Reject malformed trailing-backslash exclusion patterns and custom URLs containing credentials, queries, or fragments.
> - Document the minimal custom-gateway `noul` protocol and clarify saved-credential behavior.
> - Correct benchmark work-clock handling for inventories and excluded searches; retain exploratory skill-comparison evidence separately from full-cohort claims.
> 
> Thanks to tmchow for #25 and #26, mubaid for #28, and the contributors to #29 for the skill-trigger evidence.
> 
> ## Upgrade
> 
> ```sh
> npm install --global @dzhng/jevgrep@0.6.0
> jg --version
> jg skill
> ```
> 
> Run `jg skill` in each project whose installed agent skill you want to refresh. Existing saved provider credentials continue to work.
> 
> ## Verification
> 
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-29 ~ 2026-09-29）
> **活躍天數** 1 天 · **最新 commit** Replace Pyodide with packaged Tree-sitter for Python parsing (#27)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/dzhng/jevgrep/issues/5) | Windows support | 2 | 2 |
> | [#15](https://github.com/dzhng/jevgrep/issues/15) | Isolate npm publishing credentials from the build and test j | 1 | 0 |
> | [#10](https://github.com/dzhng/jevgrep/issues/10) | Skill is unclear about how to phrase the query | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # jevgrep
> 
> [](https://www.npmjs.com/package/@dzhng/jevgrep)
> [](LICENSE)
> [](apps/cli/README.md)
> [](https://github.com/dzhng/jevgrep/actions/workflows/publish.yml)
> 
> **Same intelligence. ~30% lower cost.**
> 
> Find code by asking what it does. In our ten-task SWE-bench comparison, Jevgrep
> successfully completed the same 8 of 10 tasks as the baseline, at lower cost.
> 
> Coding agents spend part of every unfamiliar task finding the right files.
> Jevgrep gives them a place to start: ask a repository question, and `jg` returns
> relevant files, reading leads, and verbatim source excerpts in one stdout response.
> It uses [Jev](https://vercel.com/ai-gateway/models/jev) to judge relevance across
> folders, files, and declarations. Your coding agent then implements and tests the change.
> 
> ```sh
> npm install -g @dzhng/jevgrep
> jg auth
> jg skill
> jg "How are telemetry events recorded and sent?" ./my-project
> ```
> 
> Requires **Node.js 22+**, **macOS or Linux**, and a key for **Vercel AI Gateway, TypeSafe, OpenRouter, OpenCode Zen, or a custom TypeSafe-compatible endpoint**.
> No separate Python, Bun, or ripgrep installation is required to use `jg`.
> 
> Provider selection requires **0.3.0 or newer**. Upgrade an older installation with
> `npm install --global @dzhng/jevgrep@latest`.
> 
> ## Install the agent skill — required for agent setup
> 
> Installing the CLI alone does not teach your coding agent to use it. **Install
> the skill as well**, from the project where your agent works:
> 
> ```sh
> jg skill
> ```
> 
> The installer detects your coding agents (Claude Code, Codex, OpenCode and
> others) and asks where to install. Add `--global` for a user-wide install, or
> `--yes` for unattended installation. The
> [skill](skills/jevgrep/SKILL.md) explains installation, invocation and the meaning of returned context.
> It leaves research and implementation decisions to the calling agent. The current repository skill
> checks for `jg` and installs the CLI if it is missing; authentication still needs
> your selected provider’s key. The skill installer itself does not configure credentials.
> 
> `jg skill` delegates to the [skills CLI](https://github.com/vercel-labs/skills)
> and needs npm/npx plus network access. You can also run that installer directly,
> without the CLI installed:
> 
> ```sh
> npx skills add dzhng/jevgrep --skill jevgrep
> ```
> 
> In 0.1.0, `jg skill` only prints the bundled skill; use `npx skills` with that version.
> 
> ### Upgrade
> 
> There is currently no `jg upgrade` command. Upgrade the CLI with npm:
> 
> ```sh
> npm install -g @dzhng/jevgrep@latest
> jg --version
> ```
> 
> Update the installed skill separately by rerunning `jg skill`. Updating the npm package does not
> overwrite skill files in your projects. See the [package guide](apps/cli/README.md)
> for authentication details.
> 
> ## Start with a question, leave with source
> 
> Use `jg` when you know the behavior you need to understand but not where it lives:
> 
> ```sh
> jg "Where is authentication checked before a request reaches a handler?" .
> jg "How are database connections created, pooled, and closed?" ./src
> jg "Which tests cover retry behavior when a request times out?" .
> ```
> 
> Jevgrep explores the repository hierarchy and follows qualifying branches. It
> selects files using content previews, then identifies useful source units and
> surrounding context. It keeps qualifying file locations even when it cannot
> confidently return an excerpt; it does not force every search into a fixed top-two
> list.
> 
> The summary and compact file list come first, followed by selected source with
> line references, then detailed declaration and call locations. Python and TypeScript/JavaScript support declaration
> parsing; other text uses a fallback. The output is evidence for the agent to use,
> not a generated answer or a guarantee that every relevant file was found.
> [See a recorded output example](specs/done/jevgrep/assets/stdout-example.txt).
> 
> When you already know an exact symbol or path, a direct read or `rg` search may be
> all you need. Jevgrep is most useful for questions that span unfamiliar files.
> 
> ## What we measured
> 
> **Same intelligence, ~30% lower coding-agent cost.** Both
> Jevgrep and the no-Jev baseline solved **8/10 tasks**. Full Sol cost fell from
> **$7.62 to $5.44**—a measured **28.6% reduction**, rounded to ~30%—including failed
> attempts and excluding Jev cost.
> 
> This comparison uses ten tuned Python SWE-bench tasks, one frozen installed
> package and the exact public skill in this repository. It measures task success
> and cost, not a speed improvement or guaranteed savings on every repository.
> See the [results and methodology](evals/results/relevance-threshold-2026-09-27.md)
> for per-task costs, artifact identities and limitations. A separate
> [speed study](evals/results/speed-2026-09-28.md) measures the follow-up local
> optimizations with Jev’s native TypeSafe endpoint.
> 
> The [0.4.3 total-cost rerun](evals/results/total-cost-2026-09-28.md), including
> Jev, measured **25.8% lower total cost with the same 8/10 tasks solved**.
> The older ~30% graphic above reports Sol-only cost. Future benchmark totals include Jev.
> 
> The [0.5.0 evaluation](evals/results/combined-cost-research-2026-09-28.md) retained
> 8/10 solves while reducing native Jev cost by about 59% versus that 0.4.3 run.
> Combined Sol-plus-Jev cost was 2–3% higher, accepted as a small tradeoff for this
> release. These single-run observations do not establish statistical equivalence
> or a speed improvement.
> 
> ## Source, credentials, and local state
> 
> Searches send eligible source content to Jev through the provider selected during auth. Default
> filesystem filtering respects ignore files and excludes hidden, dependency/build,
> binary, and obvious credential files. These filters are not a guarantee that all
> sensitive information has been removed; choose a search root you intend to send.
> `jg files [root]` counts the files a search under that root may read, grouped by
> top-level directory, with no provider key or network request. It takes the same
> filtering flags as search.
> To skip paths inside that root for one search, pass `--exclude` with a gitignore pattern
> relative to the root, for example `--exclude '**/*.test.ts' --exclude 'src/generated/'`.
> 
> `jg auth` asks for your provider, then saves its key in an owner-only config file.
> Re-running auth replaces that setup; searches always use the saved provider.
> `jg doctor` checks it with synthetic input. Existing saved keys without a provider
> remain Vercel keys. Environment-based credentials and endpoint overrides are not
> used; run `jg auth` if you previously relied on them.
> Evaluation answers are cached locally by default. The CLI writes its output to
> stdout and does not create report files. Use `jg --help` for cache controls,
> search overrides, and incomplete-result behavior.
> 
> ## Development
> 
> The repository uses TypeScript, Bun workspaces, and Turborepo. From a checkout:
> 
> ```sh
> bun install --frozen-lockfile
> bun run dev --help
> bun run verify
> ```
> 
> Verification includes Docker tests of the installed Node-only package. For the
> reasoning behind retrieval, parsing, caching, and failure handling, start with the
> [architecture](docs/architecture.md) and [implementation record](specs/done/jevgrep/README.md).
> [Release guidance](scripts/RELEASING.md) covers tag-triggered npm publication and
> verification of the exact public package.
> 
> [MIT](LICENSE). [Artwork and generation prompts](assets/README.md).

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[ArasTey--lunel|ArasTey/lunel]]

[GitHub](https://github.com/dzhng/jevgrep)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "dzhng--jevgrep"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "dzhng--jevgrep" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W40" AND file.name != "dzhng--jevgrep"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/dzhng--jevgrep");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "dzhng--jevgrep" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "dzhng" AND file.name != "dzhng--jevgrep"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/dzhng--jevgrep");
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
> const me = dv.page("Repos/dzhng--jevgrep");
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
> const me = dv.page("Repos/dzhng--jevgrep");
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
> const me = dv.page("Repos/dzhng--jevgrep");
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
> const me = dv.page("Repos/dzhng--jevgrep");
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

> **2026-09-29** — 首次收錄
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

- [[2026-10-02|2026-10-02]] — 再次上榜，2.0k stars
- [[2026-10-01|2026-10-01]] — 再次上榜，1.9k stars
- [[2026-09-30|2026-09-30]] — 再次上榜，1.8k stars
- [[2026-09-29|2026-09-29]] — 首次收錄，1.5k stars
