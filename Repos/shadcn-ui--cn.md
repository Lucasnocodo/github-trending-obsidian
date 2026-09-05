---
repo: shadcn-ui/cn
url: https://github.com/shadcn-ui/cn
owner: shadcn-ui
owner_type: Organization
language: TypeScript
license: MIT
description: "cn is a new engine for Tailwind class merging and conflict resolution. It replaces tailwind-merge and clsx. Same APIs. Full parity. And it is 30× faster."
homepage: ""
stars: 1114
stars_per_day: 279
forks: 7
open_issues: 5
created: 2026-08-31
pushed_at: 2026-09-04
first_seen: 2026-09-04
week: "2026-W36"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: "cn@0.2.5"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-04
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-09-08"
contributor_count: 3
engagement: "low"
issue_close_rate: 43
repo_size_kb: 1838
readme_length: 7456
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-09-04"
star_history: "2026-09-04:993,2026-09-05:1114"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - org
  - "topic/clsx"
  - "topic/cn"
  - "topic/shadcn"
  - "topic/tailwind_merge"
  - "topic/tailwindcss"
aliases:
  - "cn"
  - "shadcn-ui/cn"
---

# cn

**993** stars · **331** stars/天 · 建立 3 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/shadcn-ui--cn");
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

`ORG` `cn@0.2.5`

`clsx` `cn` `shadcn` `tailwind-merge` `tailwindcss`

> [!summary] 一句話摘要
> cn is a new engine for Tailwind class merging and conflict resolution. It replaces tailwind-merge and clsx. Same APIs. Full parity. And it is 30× faster.

## 專案簡介

cn is a new engine for Tailwind class merging and conflict resolution. It replaces tailwind-merge and clsx. Same APIs. Full parity. And it is 30× faster.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/shadcn-ui--cn");
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
> const me = dv.page("Repos/shadcn-ui--cn");
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
| Forks | 7 |
| Open Issues | 4 |
| Issue 解決率 | 43% (3 closed) |
| 最後推送 | 2026-09-04 |
| 建立日期 | 2026-08-31 |
| Repo 大小 | 1.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/shadcn-ui/cn) |
| Topics | `clsx` `cn` `shadcn` `tailwind-merge` `tailwindcss` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@changesets/changelog-github` `@changesets/cli` `@eslint/js` `@ianvs/prettier-plugin-sort-imports` `eslint` `eslint-config-prettier` `globals` `prettier` `typescript-eslint`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 55
>     "JavaScript" : 39
>     "HTML" : 6
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@shadcn](https://github.com/shadcn) | 18 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 6 |
> | [@aidenybai](https://github.com/aidenybai) | 5 |

**最新版本**：cn@0.2.5 (2026-09-04)

> [!info]- Release Notes
> ### Patch Changes
> 
> - [#16](https://github.com/shadcn-ui/cn/pull/16) [`014ad31`](https://github.com/shadcn-ui/cn/commit/014ad31d79afda5609720b4591f664fdb29d76e9) Thanks [@aidenybai](https://github.com/aidenybai)! - Accept a single class or theme definition in an extension instead of throwing.
> 
> - [#22](https://github.com/shadcn-ui/cn/pull/22) [`5135277`](https://github.com/shadcn-ui/cn/commit/513527747a3c6de7e38b563553713b0a764b95ca) Thanks [@aidenybai](https://github.com/aidenybai)! - Exclude the generated output file from content scans when its path matches a content glob.
> 
> - [#17](https://github.com/shadcn-ui/cn/pull/17) [`6f421fc`](https://github.com/shadcn-ui/cn/commit/6f421fc00396a0eea653dfc2fb6678d6b6e1b415) Thanks [@aidenybai](https://github.com/aidenybai)! - Accept readonly arrays in config extensions. This lets token tuples declared
>   with `as const` work without a defensive copy.

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-02 ~ 2026-09-04）
> **活躍天數** 3 天 · **最新 commit** chore(release): version packages (#18)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#24](https://github.com/shadcn-ui/cn/issues/24) | Vite/Next plugins for dev file watcher | 0 | 0 |
> | [#23](https://github.com/shadcn-ui/cn/issues/23) | font-[<non-numeric>] is merged as font-weight instead of fon | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # cn
> 
> `cn` is a [new engine](https://github.com/shadcn-ui/cn/blob/main/docs/how-it-works.md) for Tailwind class merging and
> conflict resolution. It replaces `tailwind-merge` and `clsx`. Same APIs.
> Full parity. **And it is [30× faster](#how-much-faster).**
> 
> ```ts
> import { cn } from "cn"
> 
> // conditional joining (like clsx) + conflict resolution (like tailwind-merge)
> cn("px-2 py-1", isActive && "bg-blue-500", { "text-white": isActive })
> ```
> 
> `cn` has zero dependencies and is framework-agnostic: it works with React,
> Vue, Svelte, Solid, Astro, or plain server templates, and runs in browsers,
> Node, Bun, Deno, and edge runtimes. **It works in any Tailwind CSS project. You don't need shadcn/ui.**
> 
> `cn` is built and maintained by [aidenybai](https://x.com/aidenybai) and [shadcn](https://x.com/shadcn).
> 
> ## Can I use this today?
> 
> Yes. You can replace `tailwind-merge` and `clsx` with `cn` today. It's a drop-in replacement.
> 
> Here's a command to migrate:
> 
> ```bash
> npx shadcn@latest migrate cn
> ```
> 
> ## Install
> 
> ```bash
> npm i cn
> ```
> 
> ### New project
> 
> Import it and go. Nothing to configure:
> 
> ```tsx
> import { cn } from "cn"
> 
> export function Button({
>   className,
>   active,
>   ...props
> }: React.ComponentProps & { active?: boolean }) {
>   return (
>     
>   )
> }
> ```
> 
> ### Existing shadcn/ui project
> 
> #### Using the `shadcn` CLI
> 
> ```bash
> npx shadcn@latest migrate cn
> ```
> 
> #### Manually
> 
> Your components already import `cn` from `@/lib/utils`. Replace the wrapper with the one from `cn`.
> 
> ```diff
> // lib/utils.ts
> - import { clsx, type ClassValue } from "clsx";
> - import { twMerge } from "tailwind-merge";
> 
> - export function cn(...inputs: ClassValue[]) {
> -   return twMerge(clsx(inputs));
> - }
> + export { cn } from "cn";
> ```
> 
> Then remove `clsx` and `tailwind-merge` from your dependencies. If other
> packages still import them, [alias them to `cn`](https://github.com/shadcn-ui/cn/blob/main/docs/aliasing.md)
> so your bundle only carries one implementation.
> 
> ## How much faster?
> 
> The following benchmarks compare `cn` against `clsx` + `tailwind-merge`,
> which is what most projects run today.
> 
> We ran each library through every workload in its own isolated process with
> its own warmup, and kept the best of 5 runs.
> 
> To see the results for yourself, run `pnpm bench`. The methodology is
> in [docs/how-it-works.md](https://github.com/shadcn-ui/cn/blob/main/docs/how-it-works.md#benchmark-methodology).
> 
> | scenario                                                   | clsx + tailwind-merge |     cn | faster |
> | ---------------------------------------------------------- | --------------------: | -----: | -----: |
> | the call your components make most¹                        |                320 ns |  10 ns |    30× |
> | same classes as last render (cache hit)                    |                 14 ns |   7 ns |   1.9× |
> | typical component strings, warm                            |                 13 ns |   7 ns |   1.9× |
> | thousands of recurring strings (a real repo's working set) |                2.4 µs |  14 ns |   172× |
> | cold render, many arbitrary values                         |                3.4 µs | 1.1 µs |   3.0× |
> | cold render, SSR-style unique strings                      |                2.3 µs | 360 ns |   6.4× |
> | very first call (page load)                                |                3.2 ms | 0.4 ms |     7× |
> 
> ¹ `cn(base, variant, condition && extra)` with stable class strings. This is
> the shape almost every component call has. `cn` learns repeated call
> sequences, so a render loop's calls verify by identity and skip the work
> entirely.
> 
> ### Real repositories
> 
> The rows above are synthetic. `pnpm bench:corpus` replays every `cn()` call
> harvested from 58 open source codebases (144,265 calls) through each
> library, one isolated process per library and repository, and prints the
> per-repository table. Geometric mean across the 58 repositories: `cn` is
> **37× faster** than `clsx` + `tailwind-merge`.
> 
> `cn` ships the least JavaScript to parse in every setup, 26 KB minified.
> 
> If you want an even smaller bundle with the same performance, see
> [`cn build`](https://github.com/shadcn-ui/cn/blob/main/docs/build-setup.md).
> 
> ## Custom themes
> 
> `cn/config` accepts the same `{ extend, override, prefix }` shape, under the
> same name:
> 
> ```ts
> // before
> import { extendTailwindMerge } from "tailwind-merge"
> 
> const twMerge = extendTailwindMerge({
>   extend: { classGroups: { "font-size": [{ text: ["hero"] }] } },
> })
> ```
> 
> ```ts
> // after
> import { createCn } from "cn/config"
> 
> const cn = createCn({
>   extend: { classGroups: { "font-size": [{ text: ["hero"] }] } },
> })
> ```
> 
> Custom validator functions work as-is. `fromTheme`, `validators`,
> `mergeConfigs`, and `defaultConfig` are exported from `cn/config`. Tailwind
> v4 prefixes are supported: `createCn({ prefix: "tw" })`.
> 
> ## Coming from tailwind-merge
> 
> `cn` produces the same output as tailwind-merge for every input. We verify
> this with 356,000 differential tests.
> 
> Every export maps to the same name or a familiar one:
> 
> | tailwind-merge               | cn                                     |
> | ---------------------------- | -------------------------------------- |
> | `twMerge(...)`               | `twMerge(...)` from `"cn"`, identical  |
> | `twJoin(...)`                | `twJoin(...)` from `"cn"`, identical   |
> | `extendTailwindMerge(ext)`   | same name, from `"cn/config"`          |
> | `createTailwindMerge(fn)`    | `createTwMerge(fn)` from `"cn/config"` |
> | `getDefaultConfig()`         | `defaultConfig()` from `"cn/config"`   |
> | `fromTheme`, `validators`    | same names, from `"cn/config"`         |
> | `mergeConfigs`               | same name, from `"cn/config"`          |
> | `experimentalParseClassName` | not supported                          |
> 
> ## Gotchas
> 
> - `cn` supports Tailwind CSS v4, like tailwind-merge v3. On Tailwind v3,
>   stay with tailwind-merge v2.
> - Classes that merely _look like_ Tailwind utilities (`text-2xs`) are
>   treated as Tailwind utilities. Same behavior and guidance as
>   [tailwind-merge's docs](https://github.com/dcastil/tailwind-merge/blob/main/docs/limitations.md).
> - With [`cn build`](https://github.com/shadcn-ui/cn/blob/main/docs/build-setup.md), dynamically constructed class names (`"p-" + size`) can't
>   be detected. Same rule as Tailwind itself. Use `--safelist`.
> - The CLI needs Node 20+.
> 
> ## API
> 
> - **`cn`**: `cn(...inputs)`, `twMerge(...)`, `twJoin(...)`, `clsx(...)`
> - **`cn/config`**: `createCn(ext?)`, `extendTailwindMerge(ext?)`,
>   `createTwMerge(ext?)`, `fromTheme`, `validators`, `defaultConfig()`,
>   `mergeConfigs(base, ext)`
> - **`cn/engine`**: `createCn(tables, ...)`, `createEngine(tables, ...)` for
>   build-time compiled tables
> - **`cn/lite`**: `clsx(...)`, strings-only join (`clsx/lite` parity)
> - **CLI**: `npx cn build --help`
> 
> ## Credits
> 
> - `cn`'s merge engine, compiler, and table format are original work.
> - The package's conflict-resolution **semantics** intentionally match those of
>   [tailwind-merge](https://github.com/dcastil/tailwind-merge) by Dany Castillo
>   (MIT licensed), and the default tables it ships are compiled from
>   tailwind-merge's default configuration.
> - The `clsx`-compatible join layer implements the argument semantics of
>   [clsx](https://github.com/lukeed/clsx) by Luke Edwards (MIT licensed).
> - The argument-identity cache for repeated variadic calls re-implements an optimization pioneered by
>   [cnfast](https://github.com/aidenybai/cnfast) by Aiden Bai (MIT licensed).
> 
> Thank you to all three authors.

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[CopilotKit--OpenBot|CopilotKit/OpenBot]]

[GitHub](https://github.com/shadcn-ui/cn)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "shadcn-ui--cn"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "shadcn-ui--cn" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W36" AND file.name != "shadcn-ui--cn"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/shadcn-ui--cn");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "shadcn-ui--cn" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "shadcn-ui" AND file.name != "shadcn-ui--cn"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/shadcn-ui--cn");
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
> const me = dv.page("Repos/shadcn-ui--cn");
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
> const me = dv.page("Repos/shadcn-ui--cn");
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
> const me = dv.page("Repos/shadcn-ui--cn");
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
> const me = dv.page("Repos/shadcn-ui--cn");
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

> **2026-09-04** — 首次收錄
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

- [[2026-09-05|2026-09-05]] — 再次上榜，1.1k stars
- [[2026-09-04|2026-09-04]] — 首次收錄，993 stars
