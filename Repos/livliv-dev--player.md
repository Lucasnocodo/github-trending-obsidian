---
repo: livliv-dev/player
url: https://github.com/livliv-dev/player
owner: livliv-dev
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "A lightweight 2.5D character player for the web, with lip sync and webcam face tracking."
homepage: "https://livliv-dev.github.io/player/"
stars: 1360
stars_per_day: 272
forks: 144
open_issues: 3
created: 2026-11-04
pushed_at: 2026-11-09
first_seen: 2026-11-09
week: "2026-W46"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v0.3.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-09
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-12"
contributor_count: 4
engagement: "medium"
issue_close_rate: 50
repo_size_kb: 23816
readme_length: 8011
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-09"
star_history: "2026-11-09:1360"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - org
  - "topic/avatar"
  - "topic/character"
  - "topic/face_tracking"
  - "topic/lip_sync"
  - "topic/pngtuber"
aliases:
  - "player"
  - "livliv-dev/player"
---

# player

**1.4k** stars · **272** stars/天 · 建立 5 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/livliv-dev--player");
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

`ORG` `v0.3.0`

`avatar` `character` `face-tracking` `lip-sync` `pngtuber` `vrm` `vtuber` `webgl2`

> [!summary] 一句話摘要
> A lightweight 2.5D character player for the web, with lip sync and webcam face tracking.

## 專案簡介

A lightweight 2.5D character player for the web, with lip sync and webcam face tracking.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/livliv-dev--player");
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
> const me = dv.page("Repos/livliv-dev--player");
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
| Forks | 144 |
| Open Issues | 3 |
| Issue 解決率 | 50% (3 closed) |
| 最後推送 | 2026-11-09 |
| 建立日期 | 2026-11-04 |
| 官方網站 | [Link](https://livliv-dev.github.io/player/) |
| Repo 大小 | 23.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/livliv-dev/player) |
| Topics | `avatar` `character` `face-tracking` `lip-sync` `pngtuber` `vrm` `vtuber` `webgl2` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@mediapipe/tasks-vision` `@pixiv/three-vrm` `@types/three` `playwright-core` `three` `typescript` `vite`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 73
>     "HTML" : 15
>     "JavaScript" : 13
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@mekoand](https://github.com/mekoand) | 8 |
> | [@Huyvux12](https://github.com/Huyvux12) | 6 |
> | [@cursoragent](https://github.com/cursoragent) | 1 |
> | [@neverbiasu](https://github.com/neverbiasu) | 1 |

**最新版本**：v0.3.0 — LivLiv Player 0.3.0 (2026-11-06)

> [!info]- Release Notes
> The first version of LivLiv Player on npm. The interface settled first, so a page written for 0.2 needs a few changes. Format 4 is unchanged.
> 
> ## What to change from 0.2
> 
> | 0.2 | 0.3 |
> |---|---|
> | `import ... from '@livliv/player'` and its subpaths | `'@livliv-dev/player'`, the package's name on npm. |
> | `player.act('away')` | `player.setAway(true)` and `setAway(false)`. `act('away')` now throws: it was a switch among one-off moves. |
> | `player.puppet` | No longer in the types. `player.poke()` and `player.canvasToModel()` are what pages used it for. The field still exists and can change in any version. |
> | `player.load(a); player.load(b)` played `a`, then `b` | The new load replaces the one running, which rejects with an `AbortError`. If you catch errors, let this one through: `if (e.name === 'AbortError') return`. |
> | `dispose()` on a load running rejected with an `Error` | It rejects with an `AbortError`, as `load()` on a disposed player does. |
> | Errors told apart by their message | `e.code`, on a `LivLivError`. The messages can change. |
> 
> ## Install
> 
> ```sh
> npm install @livliv-dev/player
> ```
> 
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-07 ~ 2026-11-09）
> **活躍天數** 3 天 · **最新 commit** Merge pull request #9 from Huyvux12/fix/issue-8-expression-labels

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/livliv-dev/player/issues/10) | Player freezes the page after a few minutes of lip-syncing a | 0 | 1 |
> | [#1](https://github.com/livliv-dev/player/issues/1) | VRM exported from Blender doesn't load in the demo `bug` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> A lightweight 2.5D character player for the web, with lip sync and webcam face tracking. A few lines of code put a character in a page, a stream overlay or an app.
>   Comes with 21 featured characters in different styles, ready to use.
> 
> English · 中文 · 日本語 · Tiếng Việt
> 
> - WebGL2, no dependencies, about 30 KB gzipped for the core
> - Lip sync (microphone, audio, video) and webcam face tracking (MediaPipe), both in the browser, imported only when you need them
> - Plays LivLiv, VRM and PNGTuber characters through the same API
> - 21 featured characters in [`characters/`](characters/), ready to use
> 
> ## Try it
> 
> - **Online**: the examples run on [livliv-dev.github.io/player](https://livliv-dev.github.io/player/).
> - **Here**: `npm install && npm run build`, serve this folder with any static server and open `/example/demo.html`
>   (expressions, actions, microphone, camera; `?model=../characters//` picks another character).
>   `/example/png.html` and `/example/vrm.html` show a PNGTuber and a VRM.
> - **On livliv.ai**: each character's page there plays it with the same renderer. Start at
>   [livliv.ai/discover](https://livliv.ai/discover).
> 
> ## Project LivLiv
> 
> We want the art of creating characters to belong to everyone.
> 
> We're open-sourcing our AI tools for character creation, the player and its playback protocol, and a stage
> where your characters can meet an audience.
> 
> Come say hello on [Discord](https://discord.gg/ac5qF36T2H) and follow us on [X (Twitter)](https://x.com/livliv_ai).
> 
> ## Use it in your page
> 
> ```sh
> npm install @livliv-dev/player
> ```
> 
> ```js
> import { Player } from '@livliv-dev/player'
> 
> const player = new Player(document.querySelector('canvas'))
> await player.load('characters/k01/')   // a folder with model.json and textures/, or a .livliv file
> 
> player.setExpression('smile')          // ids are in player.expressions
> player.act('nod')
> player.params.mouthOpen = 0.6          // 0..1
> ```
> 
> Lip sync and face tracking:
> 
> ```js
> import { createSpeech } from '@livliv-dev/player/voice'
> import { startFaceTracking } from '@livliv-dev/player/tracking'   // needs @mediapipe/tasks-vision
> 
> const speech = createSpeech(player)
> button.onclick = () => { speech.unlock(); speech.say('/reply.mp3') }
> 
> await startFaceTracking(player)
> ```
> 
> A VRM or a PNGTuber, on the same API:
> 
> ```js
> import { BodyPlayer } from '@livliv-dev/player/body'
> import { VrmBody } from '@livliv-dev/player/vrm'    // needs three and @pixiv/three-vrm
> import { PngBody } from '@livliv-dev/player/png'
> 
> const vrm = new BodyPlayer(canvasA, new VrmBody())
> await vrm.load('/avatars/me.vrm')
> const png = new BodyPlayer(canvasB, new PngBody())
> await png.load({ closed: 'me-closed.png', open: 'me-open.png' })
> ```
> 
> The whole API is in [API.md](API.md): options, params, expressions and actions, drivers, VRM and PNGTuber characters,
> the limits on untrusted files, the model package and the format version. The LivLiv package format (`.livliv`,
> `model.json` v4) is in [FORMAT.md](FORMAT.md), with a JSON Schema in [`schema/`](schema/); packages exported before v4
> are described in [FORMAT-v3.md](FORMAT-v3.md) and still play.
> 
> > The npm package is the player alone. The featured characters are in this repository's [`characters/`](characters/): copy
> > the ones you use next to your page, with their licence.
> 
> ## Featured characters
> 
> `characters/` holds 21 characters, ready to `load()`. They carry a small LivLiv mark in the bottom-right corner, which
> the player draws. They are **not** covered by the Apache License. Most were made by LivLiv: use those free for personal, non-commercial projects with credit
> ("Characters: LivLiv (livliv.ai)"); don't sell them, use them commercially or train AI models on them. Nana is
> LivLiv's mascot. The terms are in [characters/LICENSE.md](characters/LICENSE.md).
> 
> Kujira, Kujira Q and Pen come from other people's work: that licence and that credit don't cover them. Their sources,
> credits and terms are in [characters/CREDITS.md](characters/CREDITS.md).
> 
> Each also has a `cover.webp` (512 x 768, about 50 KB), its first frame without the mark. `player.load(source, { poster })`
> shows it on the canvas until the first frame. To have it before any script has run, put it under the canvas with
> `object-fit: contain` and fade the character in over it, as [example/loading.js](example/loading.js) does.
> 
> | id | name | id | name | id | name |
> |---|---|---|---|---|---|
> | `k01` | Sena | `d01` | Yui | `v01` | Aster |
> | `k02` | Elio | `d02` | Leo | `v03` | Mira |
> | `char06` | Aoi | `d03` | Nana | `v04` | Kai |
> | `char07` | Sora | `d03ft` | Nana (refined) | `v05` | Lilith |
> | `s01` | Hana | `p01` | Kujira | `v06` | Usa |
> | `q02` | Mochi | `p02` | Kujira Q | `v07` | Stella |
> | `q03` | Kotaro | `p03` | Pen | `w01` | Max |
> 
> ## Characters of your own
> 
> You can bring in a PNGTuber's pictures, or a VRM (drawn with three.js); or make a character of your own from one
> picture on [livliv.ai](https://livliv.ai).
> 
> - **A PNGTuber**: two pictures (mouth closed, mouth open), and two more with the eyes closed if you have them.
> - **A VRM**: from VRoid Studio or any tool that exports VRM 0.x or 1.0.
> - **A LivLiv model**: make one from a picture on [livliv.ai](https://livliv.ai), then download its model package from
>   the character's page (**Model package**): a `.livliv` file. Pass it to `load()` as it is (a URL, or the `File`
>   someone picked), or unzipped as a folder. Packages on the free plan carry the LivLiv mark, and the player draws it.
> 
> ## About the player and the characters
> 
> LivLiv Player and the `.livliv` format are LivLiv's own work. They use no Live2D software or Cubism SDK and do not
> read `.moc3` or `.cmo3` files. "Live2D" is a trademark of Live2D Inc.; LivLiv is not affiliated with it.
> 
> Making a character on livliv.ai uses AI. The player itself only plays: it calls no AI service and reads only the files
> you point it at. Face tracking runs Google's MediaPipe in the browser, and camera images stay on the device; API.md has
> the networking details.
> 
> The featured characters in this repository were made on LivLiv too, also with AI; Kujira, Kujira Q and Pen adapt other
> people's characters ([credits](characters/CREDITS.md)). Refined Nana (`d03ft`) also has
> swinging parts and head-turn keyforms added with LivLiv's own tools.
> 
> A package's `meta.author` and `meta.license` record who made it and on what terms: keep them and follow them. When you
> show a character made with LivLiv in public, say that AI was used to make it, and don't present it as hand-drawn or
> hand-rigged.
> 
> ## Embed without code
> 
> ```html
> 
> ```
> 
> The same `/live/` page has a transparent background and works as an OBS Browser Source.\
> (Powered by [https://livliv.ai](https://livliv.ai))
> 
> ## Develop
> 
> ```sh
> git clone https://github.com/livliv-dev/player
> cd player
> npm install
> npm run check          # types
> npm run build          # dist/: index.js, tracking.js, voice.js, body.js, png.js, vrm.js (ES modules), chunks/ and types/
> npm test               # unit and fuzz tests (Node 22.18 or newer, no browser)
> npm run test:browser   # every featured character drawn in headless Chromium; once: npx playwright-core install chromium-headless-shell
> npm run test:engines   # a sample on Firefox and WebKit, where WebGL2 starts (a GPU or a software GL); once: npx playwright-core install firefox webkit
> ```
> 
> `src/runtime/` is the renderer and motion code livliv.ai runs; this repository is published from it. See
> [CONTRIBUTING.md](CONTRIBUTING.md). Security reports: [SECURITY.md](SECURITY.md).
> 
> ## Browser support
> 
> WebGL2 and ES2023: Chrome / Edge 97+, Firefox 104+, Safari 15.4+. Tested on current desktop browsers, not yet on phones.
> 
> ## License
> 
> The code is under the [Apache License 2.0](LICENSE) (see also [NOTICE](NOTICE)). The featured characters have their
> own licence, [characters/LICENSE.md](characters/LICENSE.md). Neither licence covers the LivLiv name and logos.
> 
> ## Thanks
> 
> Thanks to 上善无形, ZipZipPipe and 贱兔死顺盖, whose characters Kujira, Kujira Q and Pen are based on: see [characters/CREDITS.md](characters/C

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/livliv-dev/player) · [官方網站](https://livliv-dev.github.io/player/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "livliv-dev--player"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "livliv-dev--player" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W46" AND file.name != "livliv-dev--player"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/livliv-dev--player");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "livliv-dev--player" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "livliv-dev" AND file.name != "livliv-dev--player"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/livliv-dev--player");
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
> const me = dv.page("Repos/livliv-dev--player");
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
> const me = dv.page("Repos/livliv-dev--player");
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
> const me = dv.page("Repos/livliv-dev--player");
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
> const me = dv.page("Repos/livliv-dev--player");
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

> **2026-11-09** — 首次收錄
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

- [[2026-11-09|2026-11-09]] — 首次收錄，1.4k stars
