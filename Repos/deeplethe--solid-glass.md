---
repo: deeplethe/solid-glass
url: https://github.com/deeplethe/solid-glass
owner: deeplethe
owner_type: Organization
language: TypeScript
license: MIT
description: "A design system for AI applications. Material, physical, tactile, technical."
homepage: "https://deeplethe.github.io/solid-glass"
stars: 1826
stars_per_day: 365
forks: 22
open_issues: 7
created: 2026-10-12
pushed_at: 2026-10-16
first_seen: 2026-10-17
week: "2026-W42"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-17
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-10-21"
contributor_count: 3
engagement: "low"
issue_close_rate: 0
repo_size_kb: 17714
readme_length: 8442
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-10-17"
star_history: "2026-10-17:1498,2026-10-18:1826"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - org
  - "topic/agent_ui"
  - "topic/ai"
  - "topic/ai_agents"
  - "topic/chat_ui"
  - "topic/design_system"
aliases:
  - "solid-glass"
  - "deeplethe/solid-glass"
---

# solid-glass

**1.5k** stars · **375** stars/天 · 建立 4 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/deeplethe--solid-glass");
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

`ORG`

`agent-ui` `ai` `ai-agents` `chat-ui` `design-system` `llm` `react` `shadcn` `shadcn-ui` `tailwindcss` `theme`

> [!summary] 一句話摘要
> A design system for AI applications. Material, physical, tactile, technical.

## 專案簡介

A design system for AI applications. Material, physical, tactile, technical.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/deeplethe--solid-glass");
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
> const me = dv.page("Repos/deeplethe--solid-glass");
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
| Forks | 21 |
| Open Issues | 7 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-10-16 |
| 建立日期 | 2026-10-12 |
| 官方網站 | [Link](https://deeplethe.github.io/solid-glass) |
| Repo 大小 | 17.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/deeplethe/solid-glass) |
| Topics | `agent-ui` `ai` `ai-agents` `chat-ui` `design-system` `llm` `react` `shadcn` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 78
>     "MDX" : 18
>     "CSS" : 3
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@WaylandYang](https://github.com/WaylandYang) | 85 |
> | [@Maya-Kid](https://github.com/Maya-Kid) | 6 |
> | [@Floating-Y](https://github.com/Floating-Y) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-15 ~ 2026-10-16）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #52 from deeplethe/dev

## README 摘錄

> [!info]- 展開查看原文 README
> # Solid Glass
> 
> [The style](#the-style) · [Install](#install) · [What is here](#what-is-here) · [Contributing](#contributing)
> 
> [](https://github.com/deeplethe/solid-glass/stargazers)
> [](LICENSE)
> [](https://deeplethe.github.io/solid-glass/docs/components/status-glyph)
> [](https://ui.shadcn.com)
> 
> [](https://deeplethe.github.io/solid-glass)
> [](https://deeplethe.github.io/solid-glass/r/registry.json)
> [](https://tailwindcss.com)
> [](https://react.dev)
> [](https://github.com/deeplethe)
> 
> A refined glass-inspired aesthetic that feels solid from afar and reveals its subtle materiality up
> close. Delicate highlights, fine borders, and soft shadows create depth, while a restrained finish
> emphasizes clarity, stability, and a sense of solidity over transparency, refraction, and fluidity.
> 
> [](https://deeplethe.github.io/solid-glass/blocks)
> 
> That is one of the [blocks](https://deeplethe.github.io/solid-glass/blocks): whole screens made of the
> components, to look at, read and copy in. Below, the components themselves.
> 
> It stands between flat design and liquid glass. Flat is an opaque block with no finish to speak of;
> liquid glass is nearly clear, and on a page with a lot of text the reader is always fighting the
> background for the words. Solid Glass lets only an outline through: enough to know it is glass, not
> enough to get in the way of reading.
> 
> ## The style
> 
> | | |
> |---|---|
> | **Tactility** | Interfaces that feel tangible. Every interaction carries a subtle sense of touch and response. |
> | **Precision** | Clean geometry, refined details, and restrained lighting create a precise, technical aesthetic. |
> | **Physicality** | Depth comes from thickness, shadow, and spatial hierarchy, giving every element a sense of physical presence. |
> | **Materiality** | Subtle edge highlights, fine borders, and soft shadows define the character of each surface. |
> 
> ### Why it is built this way
> 
> AI applications are built around information that is constantly changing — responses streaming in,
> agents performing tasks, and decisions waiting for human input.
> 
> Solid Glass keeps the interface calm and readable. Neutral surfaces reduce visual distractions,
> depth establishes hierarchy, and color and motion are reserved for meaningful feedback.
> 
> The entire system is built with lightweight CSS and works with existing shadcn/ui components in both
> light and dark modes.
> 
> The [Material](https://deeplethe.github.io/solid-glass/docs/material) page shows how a pane is made,
> and the [Create](https://deeplethe.github.io/solid-glass/create) page lets you turn the dials.
> 
> ## Install
> 
> Solid Glass is one stylesheet. It finds each part of a shadcn/ui component by the `data-slot` and
> the classes it already carries, so the components you have need no changes.
> 
> Start from a shadcn/ui project (React 19, Tailwind CSS 4, the Base UI components):
> 
> ```bash
> npx shadcn@latest init
> ```
> 
> Add the stylesheet, straight from this repository:
> 
> ```bash
> npx shadcn@latest add deeplethe/solid-glass/solid-glass
> ```
> 
> Import it after Tailwind and shadcn's stylesheet, and delete the `:root` and `.dark` colour
> variables that `shadcn init` wrote (Solid Glass defines the same names):
> 
> ```css
> @import "tailwindcss";
> @import "tw-animate-css";
> @import "shadcn/tailwind.css";
> @import "./solid-glass.css";
> ```
> 
> Dark is the material as designed; light is there too. The
> [installation page](https://deeplethe.github.io/solid-glass/docs/installation) has the rest.
> 
> Solid Glass's own components install the same way:
> 
> ```bash
> npx shadcn@latest add deeplethe/solid-glass/status-glyph
> ```
> 
> | Component | What it is |
> |---|---|
> | `status-glyph` | Three points of light that say a turn is going, and what it is doing. |
> | `panel`, `tag`, `dot-loader` | The thinnest pane, a small label, and a row of dots that waits. |
> | `turn-status`, `composer`, `tool-steps`, `diff-view`, `ask-card`, `context-ring`, `task-notice`, `reasoning` | For interfaces where an agent works: its status line, the box you write to it in, the steps it took, a diff, a question it asks, how full its context is, a notice from a task, and its thinking. |
> 
> ## What is here
> 
> | Path | What it is |
> |---|---|
> | `src/solid-glass.css` | The theme. The whole material in one file: colours, the three thicknesses of glass, the one state, motion. It defines shadcn/ui's own variable names. |
> | `registry.json` | The registry: what `shadcn add` installs from. Written by `scripts/build-registry.mjs`, which also builds `public/r/` for the site. |
> | `src/components/ui/` | The components the site shows. shadcn/ui's (Base UI, `base-nova`), installed with its command line, and Solid Glass's own. A few of shadcn/ui's (`button`, `input`, `tabs`, `dialog`, `dropdown-menu`, `sheet`, `sidebar` and some form controls) differ from stock in small ways; the stylesheet does not depend on those differences. |
> | `src/create/`, `src/pages/create.tsx` | The Create page: the material with its dials out (thickness, tint, chart colour, type, radius, rim, blur), a preview that takes each choice as it is made, and the few lines of CSS that come of it. `options.ts` says what each choice does to the stylesheet's variables; the preview cards are shadcn/ui's. |
> | `src/blocks/`, `src/pages/blocks.tsx` | Blocks: whole screens made of the components, shown on the Blocks page in a frame of their own (`/view/`). The single files at the top of the folder are Solid Glass's own (`agent-workspace`) and are in its registry; the folders are shadcn/ui's blocks in the material, installed from shadcn/ui. |
> | `src/examples/` | One small file per example, as on ui.shadcn.com: shadcn/ui's own examples, and Solid Glass's for its own components. |
> | `content/` | The documentation. `components/` is shadcn/ui's page for each component; `solid/` and `docs/` are Solid Glass's. |
> | `src/site/`, `src/pages/`, `src/home/` | The site: header, sidebar, component preview, and the wall of cards on the home page. |
> | `.github/` | The checks every pull request must pass (`checks.yml`), the workflow that publishes `main` (`pages.yml`), and the templates for issues and pull requests. |
> | `scripts/build-docs.mjs` | Turns `content/` into `src/docs/generated.json`, which the site renders. |
> 
> ## Run
> 
> ```bash
> npm install
> npm run dev         # http://localhost:5191
> npm run build       # into dist/
> npm run typecheck
> ```
> 
> `/dev/banner` (development only) is the banner above, drawn with the theme: `docs/banner-5.webp` is a
> screenshot of it in an 820 by 200 window at twice the size, saved as WebP like the other pictures
> here (a quarter of the size of the same picture as PNG). When the picture changes, save it under
> the next number and point the README at that: GitHub serves a README's pictures from one address
> per file, whatever is added to the link, and a browser keeps what it fetched from it.
> 
> `/dev/examples` (development only) mounts every example at once and lists any that fail. It takes
> `?q=button,card` to show some of them, `?theme=light`, `?hover=` to show what matches as
> if the pointer were on it, and `?click=` to press something and look at what it opens.
> 
> `SOLID_GLASS_ORIGIN` is the address the site is served from (Solid Glass's own components name one
> another by it) and `SOLID_GLASS_BASE` the path it lives under there; the defaults are this
> repository's GitHub Pages.
> 
> ## Add a component of Solid Glass's own
> 
> 1. `src/components/ui/.tsx`, written like a shadcn/ui component: function components, a
>    `data-slot` on every part, `cn()` from `@/lib/utils`.
> 2. `src/examples/-demo.tsx`, and one file per further example.
> 3. `content/solid/.mdx`: front matter (`title`, `description`), then
>    `-demo" />`, Installation, Usage, and a heading per example.
> 
> Keep to the four rules (the Material page shows them): the finish is at the edge; heavy, not airy;
> depth is thickness; one state.
> 
> ## Contributing
> 
> Changes land on `dev` by pull request and reach `main`, and with it the published site and
> registry, when a maintainer merges `dev` into it. [CONTRIBUTING.md](CONTRIBUTING.md) has the re

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/deeplethe/solid-glass) · [官方網站](https://deeplethe.github.io/solid-glass)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "deeplethe--solid-glass"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "deeplethe--solid-glass" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W42" AND file.name != "deeplethe--solid-glass"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/deeplethe--solid-glass");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "deeplethe--solid-glass" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "deeplethe" AND file.name != "deeplethe--solid-glass"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/deeplethe--solid-glass");
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
> const me = dv.page("Repos/deeplethe--solid-glass");
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
> const me = dv.page("Repos/deeplethe--solid-glass");
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
> const me = dv.page("Repos/deeplethe--solid-glass");
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
> const me = dv.page("Repos/deeplethe--solid-glass");
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

> **2026-10-17** — 首次收錄
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

- [[2026-10-18|2026-10-18]] — 再次上榜，1.8k stars
- [[2026-10-17|2026-10-17]] — 首次收錄，1.5k stars
