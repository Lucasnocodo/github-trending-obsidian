---
repo: lucasmarkes/hairline
url: https://github.com/lucasmarkes/hairline
owner: lucasmarkes
owner_type: User
language: TypeScript
license: MIT
description: "Six isometric line figures that answer the pointer. For React and for anything with a DOM."
homepage: "https://hairline.lucasmarkes.com"
stars: 1174
stars_per_day: 196
forks: 61
open_issues: 6
created: 2026-10-01
pushed_at: 2026-10-08
first_seen: 2026-10-08
week: "2026-W41"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.3.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-08
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-15"
contributor_count: 1
engagement: "low"
issue_close_rate: 14
repo_size_kb: 6122
readme_length: 9750
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-08"
star_history: "2026-10-08:1174"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - "topic/animation"
  - "topic/isometric"
  - "topic/react"
  - "topic/shadcn"
  - "topic/svg"
aliases:
  - "hairline"
  - "lucasmarkes/hairline"
---

# hairline

**1.2k** stars · **196** stars/天 · 建立 6 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/lucasmarkes--hairline");
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

`個人專案` `v0.3.0`

`animation` `isometric` `react` `shadcn` `svg` `typescript`

> [!summary] 一句話摘要
> Six isometric line figures that answer the pointer. For React and for anything with a DOM.

## 專案簡介

Six isometric line figures that answer the pointer. For React and for anything with a DOM.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/lucasmarkes--hairline");
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
> const me = dv.page("Repos/lucasmarkes--hairline");
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
| Forks | 61 |
| Open Issues | 6 |
| Issue 解決率 | 14% (1 closed) |
| 最後推送 | 2026-10-08 |
| 建立日期 | 2026-10-01 |
| 官方網站 | [Link](https://hairline.lucasmarkes.com) |
| Repo 大小 | 6.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/lucasmarkes/hairline) |
| Topics | `animation` `isometric` `react` `shadcn` `svg` `typescript` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `ajv` `esbuild` `turbo` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 58
>     "HTML" : 26
>     "JavaScript" : 12
>     "CSS" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@lucasmarkes](https://github.com/lucasmarkes) | 157 |

**最新版本**：v0.3.0 (2026-10-05)

> [!info]- Release Notes
> ### Added
> 
> - `loupe` and `Loupe`: a stand loupe over a blank ruled sheet. The pointer
>   drags it across, and the rules pass enlarged under the glass with nothing
>   between them. A stronger `intensity` magnifies more.
> - `sieve` and `Sieve`: three test sieves stacked over a pan. The pointer's
>   height picks one, it rises clear of the stack, and every mesh is bare. A
>   stronger `intensity` opens the gap further.
> - `rail` and `Rail`: a garment rail with seven bare hangers. The pointer
>   brushes them, and each rocks away from it, the nearest most. A stronger
>   `intensity` reaches more hangers.
> - `plug` and `Plug`: a wall socket and a plug lying on the floor at the end of
>   its cord. The pointer draws the plug up toward the socket; it stops short and
>   falls back. A stronger `intensity` brings it closer.
> - `query` and `Query`: a question mark built as a bent bar over a loose ball.
>   The hook turns toward the pointer and the ball rolls after it. A stronger
>   `intensity` turns it further.
> - `drawer` and `Drawer`: a cabinet of three drawers. The pointer's height
>   picks one, and it slides out to show two dividers with nothing between them.
>   A stronger `intensity` opens it further.
> - `basket` and `Basket`: a wire basket under a bail handle. It tilts toward
>   the pointer and shows its bare floor. A stronger `intensity` tilts it
>   further.
> - `plot` and `Plot`: a bar chart with seven flat tabs where the bars would
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-05 ~ 2026-10-05）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #30 from lucasmarkes/funding

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#31](https://github.com/lucasmarkes/hairline/issues/31) | Invitation to share hairline on GithubStarMate and help more | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # hairline
> 
> Twenty-seven isometric line figures that answer the pointer. For React and for anything with a DOM.
> 
> [](https://www.npmjs.com/package/@lucasmarkes/hairline)
> [](https://github.com/lucasmarkes/hairline/actions/workflows/ci.yml)
> [](./LICENSE)
> 
> Live, with a slider for `intensity`: **[hairline.lucasmarkes.com](https://hairline.lucasmarkes.com)**
> 
> ## Install
> 
> ```sh
> npm i @lucasmarkes/hairline
> ```
> 
> No dependencies. ESM only. React 18 or later is an optional peer, needed only by `@lucasmarkes/hairline/react`.
> 
> With shadcn, which adds the package and a wrapper that reads your theme's tokens:
> 
> ```sh
> npx shadcn@latest add https://hairline.lucasmarkes.com/r/hairline.json
> ```
> 
> ## Use
> 
> ### React
> 
> ```tsx
> import { Terrain } from "@lucasmarkes/hairline/react";
> 
> export function Hero() {
>   return ;
> }
> ```
> 
> The figure fills its parent's width at a 5:4 aspect ratio. The entry is a client module, so a Server Component can render it with no `"use client"` of its own. Every component takes the options below and every `` attribute, and forwards its ref to the ``.
> 
> ### Anything else
> 
> ```ts
> import { terrain } from "@lucasmarkes/hairline";
> 
> const figure = terrain(document.getElementById("figure")!);
> 
> figure.update({ intensity: 0.8 });
> figure.destroy();
> ```
> 
> A figure draws into the element you give it, at the element's width and a 5:4 aspect ratio. `update` changes options on the running figure; `destroy` removes what the figure added. That is the shape of a Svelte action, so `use:terrain={{ intensity }}` works as it is.
> 
> ## The figures
> 
> | Function | Component | What it is | A stronger `intensity` |
> | --- | --- | --- | --- |
> | `riffle` | `Riffle` | A tray of eight cards. The card under the pointer stands up; the arrow keys walk the cards. | The ripple spreads further from the pulled card. |
> | `terrain` | `Terrain` | Eighty-one pillars on a plinth that rise around the pointer. | A wider area rises. |
> | `exploded` | `Exploded` | An app window in four layers. Moving across opens the gap; moving down picks a layer. | The layers open further. |
> | `phosphor` | `Phosphor` | A dot matrix that plays a loop, and fades like phosphor where the pointer paints it. | The trail lingers longer. |
> | `slow` | `Slow` | Crates riding a belt through a gate. Hovering slows the clock without stopping it. | Time slows down more. |
> | `turntable` | `Turntable` | Blocks on a turntable. A flick spins it; it settles on the nearest quarter turn. | The spin coasts longer. |
> | `keyboard` | `Keyboard` | A sixty-key board. The key under the pointer sinks, and its neighbours follow it down. | A wider patch of keys sinks. |
> | `elevator` | `Elevator` | Four floors beside an open shaft. The pointer's height picks a floor; the car travels there. | The car travels faster between floors. |
> | `phone` | `Phone` | A phone in layers: glass, board, battery, shell. Moving across opens the gap; moving down picks a layer. | The layers open further. |
> | `laptop` | `Laptop` | A thin laptop, open on its hinge. The pointer's height sets the lid; it follows on a spring. | The lid opens wider. |
> | `terminal` | `Terminal` | A terminal window with its history in rows. The pointer's height scrolls back; the line under it lifts and its neighbours follow. | The lift spreads further. |
> | `cabinet` | `Cabinet` | A rack of twelve blades, a few half out. The pointer's height pulls the nearest ones out, the farther the less. | More blades come out. |
> | `branches` | `Branches` | A commit graph with a branch forking off main and merging back. The commit under the pointer rises, and its history rises after it. | More of the history rises. |
> | `vault` | `Vault` | A vault door with a dial and three bolts. The pointer turns the dial; detents catch every ten, and on the combination the bolts draw back. | The dial coasts longer. |
> | `lockers` | `Lockers` | A bank of twelve lockers, one ajar at rest. The locker under the pointer opens; the one at rest closes. | The door opens wider. |
> | `padlock` | `Padlock` | A padlock with its shackle in. As the pointer comes near the shackle lifts out and swings open. | The shackle swings further. |
> | `patch` | `Patch` | A patch panel of twenty-four ports with cables. The cable under the pointer lifts and its neighbours lean away. | The lean spreads further. |
> | `dish` | `Dish` | A parabolic dish on a two-axis gimbal. The pointer aims the dish; it follows on a spring. | The dish swings further. |
> | `router` | `Router` | A router with its antennas up. Each antenna leans toward the pointer, the nearest most. | The lean spreads further. |
> | `loupe` | `Loupe` | A stand loupe on a blank ruled sheet. The pointer drags it across; the rules pass enlarged under the glass, with nothing between them. | The glass magnifies more. |
> | `sieve` | `Sieve` | Three test sieves stacked over a pan. The pointer's height picks one; it rises clear of the stack, and every mesh is bare. | The gap opens further. |
> | `rail` | `Rail` | A garment rail with seven bare hangers. The pointer brushes them; each rocks away, the nearest most, and settles. | The brush reaches more hangers. |
> | `plug` | `Plug` | A wall socket, and a plug lying on the floor at the end of its cord. The pointer draws the plug up toward the socket; it stops short, and falls back. | The plug comes closer to the socket. |
> | `query` | `Query` | A question mark built as a bent bar over a loose ball. The hook turns toward the pointer, and the ball rolls after it. | The hook turns further. |
> | `drawer` | `Drawer` | A cabinet of three drawers. The pointer's height picks one; it slides out and shows two dividers with nothing between them. | The drawer opens further. |
> | `basket` | `Basket` | A wire basket under a bail handle. It tilts toward the pointer and shows its bare floor; the handle swings after it. | The basket tilts further. |
> | `plot` | `Plot` | A bar chart with seven flat tabs where the bars would stand. The pointer brushes them; each lifts a little and drops back to zero. | The tabs lift higher. |
> 
> ## Options
> 
> Every figure takes the same four, all optional:
> 
> | Option | Type | Default | |
> | --- | --- | --- | --- |
> | `intensity` | `number` | `0.5` | How strongly the figure answers the pointer, from 0 (subtle) to 1 (strong). A number outside 0…1 is clamped; anything that is not a number is 0.5. |
> | `theme` | `"auto" \| "light" \| "dark"` | `"auto"` | `"auto"` follows the page: an ancestor with class `dark` or `data-theme="dark"`, then the page's `color-scheme`. |
> | `label` | `string` | a description in English | The accessible name. In React, `aria-label` does the same. |
> | `onRead` | `(text: string) => void` | | The figure's caption, each time it changes: `"03"`, `"gap 28.0"`, `"rate 0.20×"`. |
> 
> In `update`, a key set to `undefined` goes back to its default, and a key left out stays as it is.
> 
> ## Theme
> 
> Six custom properties, set on the figure or on anything above it:
> 
> ```css
> .figures {
>   --hairline-plate: #101014; /* the fill of every plate: the colour the figure sits on */
>   --hairline-hi: #fafafa;    /* what is lit */
>   --hairline-edge: #a1a1aa;  /* silhouettes */
>   --hairline-mid: #52525b;   /* every other stroke */
>   --hairline-lo: #27272a;    /* what recedes */
>   --hairline-stroke: 0.9;    /* stroke width, in CSS pixels at any size */
> }
> ```
> 
> `--hairline-plate` is the one to get right. Plates are filled, not transparent, because a plate hides what is drawn behind it; on a background that is neither white nor `#08090a`, set it to that background.
> 
> The figure's styles have no specificity, so any rule of yours wins without `!important`.
> 
> ## Notes
> 
> - **Accessibility.** A figure is an image with a description you can replace with `label`. Riffle is the exception: it is a focusable group, the arrow keys walk its cards, and a live region reads the card out.
> - **Reduced motion.** With `prefers-reduced-motion`, the figures that play on their own (Phosphor and Slow) hold still, and every figure still answers the pointer.
> - **Performance.** Every figure on a page sh

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/lucasmarkes/hairline) · [官方網站](https://hairline.lucasmarkes.com)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "lucasmarkes--hairline"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "lucasmarkes--hairline" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W41" AND file.name != "lucasmarkes--hairline"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/lucasmarkes--hairline");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "lucasmarkes--hairline" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "lucasmarkes" AND file.name != "lucasmarkes--hairline"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/lucasmarkes--hairline");
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
> const me = dv.page("Repos/lucasmarkes--hairline");
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
> const me = dv.page("Repos/lucasmarkes--hairline");
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
> const me = dv.page("Repos/lucasmarkes--hairline");
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
> const me = dv.page("Repos/lucasmarkes--hairline");
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

> **2026-10-08** — 首次收錄
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

- [[2026-10-08|2026-10-08]] — 首次收錄，1.2k stars
