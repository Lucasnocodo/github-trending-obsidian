---
repo: boona13/mykonos-island-voxels
url: https://github.com/boona13/mykonos-island-voxels
owner: boona13
owner_type: User
language: JavaScript
license: MIT
description: "A browser-based isometric island builder with the soft, sun-bleached look of Mykonos. Vanilla ES modules, no bundler, mobile-friendly."
homepage: "https://mykonos-island-voxels.netlify.app"
stars: 782
stars_per_day: 43
forks: 182
open_issues: 1
created: 2026-05-14
pushed_at: 2026-05-14
first_seen: 2026-05-20
week: "2026-W21"
month: "2026-05"
category: "遊戲"
subcategory: "建造遊戲"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-20
use_case: "一個基於瀏覽器的等角島嶼建造工具，讓使用者輕鬆創建美麗的島嶼景觀。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-28"
contributor_count: 0
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 81388
readme_length: 6501
bus_factor: 0
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-20"
star_history: "2026-05-20:661,2026-05-20:663,2026-05-21:679,2026-05-21:679,2026-05-23:704,2026-05-24:733,2026-05-25:753,2026-05-26:757,2026-05-27:757,2026-05-29:767,2026-05-30:775,2026-05-31:777,2026-06-01:778,2026-06-02:782"
tags:
  - github
  - "category/遊戲"
  - "lang/javascript"
  - easy_install
  - "topic/canvas2d"
  - "topic/city_builder"
  - "topic/html5_game"
  - "topic/isometric_game"
  - "topic/mobile_friendly"
aliases:
  - "mykonos-island-voxels"
  - "boona13/mykonos-island-voxels"
  - "一個基於瀏覽器的等角島嶼建造工具，讓使用者輕鬆創建美麗的島嶼景觀。"
---

# mykonos-island-voxels

**782** stars · **43** stars/天 · 建立 18 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/boona13--mykonos-island-voxels");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`canvas2d` `city-builder` `html5-game` `isometric-game` `mobile-friendly` `open-source` `vanilla-js`

> [!summary] 一句話摘要
> 一個基於瀏覽器的等角島嶼建造工具，讓使用者輕鬆創建美麗的島嶼景觀。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (43 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 18 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 喜歡簡單創作工具的獨立開發者和設計師。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "建造遊戲" && p.file.name !== "boona13--mykonos-island-voxels" && p.status !== "archived")
>     .sort(p => p.stars || 0, "desc").limit(5);
>   if (rivals.length > 0) {
>     dv.table(["專案", "Stars", "Stars/天", "安裝", "授權", "Ring"], rivals.map(p => [
>       p.file.link,
>       (p.stars || 0).toLocaleString(),
>       p.stars_per_day || 0,
>       p.install_complexity || "?",
>       p.license || "?",
>       p.ring || "assess"
>     ]));
>   } else { dv.paragraph("_目前 vault 中沒有其他 建造遊戲 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 這個專案的創新點在於其無需打包的純 ES 模組架構，簡化了開發和使用流程。

## 專案簡介

Mykonos Island Voxels 是一個基於瀏覽器的等角島嶼建造工具，使用者可以在 14×14 的網格上放置各種資產，創建出獨特的島嶼景觀。這個工具的設計理念是提供一個無壓力的創作環境，沒有得分或資源管理的需求，讓使用者專注於視覺的排列和美感。使用者可以透過簡單的點擊和拖曳操作，輕鬆放置和刪除物件，並且有超過 75 種畫風資產可供選擇，包括建築、自然和裝飾物。這個專案採用純 ES 模組，無需打包工具，直接在瀏覽器中運行，這樣的設計使得開發和使用都非常簡單。

技術上，專案使用了高解析度的資產緩存技術，確保在不同解析度下都能保持清晰的畫面，並且支援自動保存功能，讓使用者的創作不會丟失。與其他類似的建造遊戲相比，如 0x0funky/agent-sprite-forge，Mykonos Island Voxels 更加注重簡單的操作和即時的視覺反饋，適合喜愛輕鬆創作的使用者。這個工具的社群活躍度不高，目前只有一個開放的問題，顯示出專案仍在早期階段，未來可能需要更多的功能擴展和社群支持。整體而言，這是一個適合個人創作和小型團隊使用的工具，未來可能會隨著使用者需求的增加而進一步發展。

**技術棧**：`JavaScript` · `CSS` · `HTML` · `Python`

## 重點功能

- 點擊建造等角網格 — 使用者可以從右側的資產面板選擇物件，點擊網格單元即可放置。
- 一鍵填充草地 — 使用者可以快速用草地覆蓋整個島嶼，迅速開始佈局。
- 75+ 種畫風資產 — 包含建築、自然和裝飾物，讓使用者自由創作。
- 觸控優先的移動端 UI — 支援觸控操作，適合各種設備。
- 高保真資產管線 — 確保在不同解析度下畫面清晰，並支援自動保存功能。

## 快速開始

1. 啟動本地伺服器
```bash
python3 -m http.server 8000
```
2. 在瀏覽器中打開
```bash
http://localhost:8000
```
3. 開始創建你的島嶼
```bash
使用滑鼠或觸控操作放置資產
```

## 程式碼範例

```js
{
  "前置條件": "需要在本地伺服器上運行",
  "指令": "python3 -m http.server 8000",
  "預期輸出": "伺服器啟動，並在瀏覽器中顯示 Mykonos Island Voxels"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 18 天就累積 782 stars（43/天），forks 182（23.3%），這顯示出使用者對這個輕鬆創作工具的興趣。作者 boona13 之前可能有其他開源專案經驗，這次專案解決了傳統建造遊戲中繁瑣的資源管理和得分系統的痛點，讓使用者能夠專注於創作。這個專案的簡單性和即時反饋吸引了不少使用者，並且在社群中引發了一些討論。隨著瀏覽器技術的進步，這個工具的無需打包特性使得它在現代開發環境中變得更加可行。

## 適合誰使用

**目標受眾**：喜歡簡單創作工具的獨立開發者和設計師。

> [!example] 使用場景
> - 獨立開發者用它來快速創建遊戲原型，因為它的簡單操作和即時反饋能夠加速開發流程。
> - 教育工作者用它來教導學生關於設計和創作的基本概念，因為它不需要複雜的編程知識，讓學生能夠專注於創意。
> - 遊戲設計師用它來探索不同的島嶼佈局，因為它提供了豐富的資產選擇和靈活的布局方式。

## 架構分析

Mykonos Island Voxels 採用純 HTML/CSS/ES 模組架構，無需打包工具，這樣的設計使得開發者能夠直接在瀏覽器中運行。資料流方面，使用者的操作會通過 InputManager.js 處理，然後更新遊戲狀態，最後通過 Renderer.js 進行畫面渲染。這種分層架構使得各個模組之間的耦合度較低，便於未來的擴展。選擇高解析度的資產緩存技術，確保在不同設備上都能保持清晰的畫面，這是為了提升使用者體驗。整體架構的設計使得即使在資源有限的環境下，仍然能夠流暢運行，這對於一個網頁遊戲來說是非常重要的。

> [!warning] 注意事項
> - 目前僅支援桌面和移動瀏覽器，無法在本地文件系統直接運行。
> - 僅有一個開放的問題，顯示出社群活躍度不高。
> - 不支援多用戶協作，僅限單人創作。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色創建和動畫，而 Mykonos Island Voxels 更加注重環境建設和視覺美感。 |
| [BuilderPulse/BuilderPulse](https://github.com/BuilderPulse/BuilderPulse) | 提供更複雜的建設和資源管理系統，而 Mykonos Island Voxels 則是輕鬆的創作工具。 |

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
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
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
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
| Forks | 182 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-14 |
| 建立日期 | 2026-05-14 |
| 官方網站 | [Link](https://mykonos-island-voxels.netlify.app) |
| Repo 大小 | 79.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/boona13/mykonos-island-voxels) |
| Topics | `canvas2d` `city-builder` `html5-game` `isometric-game` `mobile-friendly` `open-source` `vanilla-js` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 86
>     "CSS" : 10
>     "Python" : 2
>     "HTML" : 2
> ```

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-14）
> **活躍天數** 1 天 · **最新 commit** Initial open-source release

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/boona13/mykonos-island-voxels/issues/1) | Game Frontend | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Mykonos Island Voxels
> 
> A browser-based isometric island builder with the soft, sun-bleached
> Mediterranean look of Mykonos: cobalt-blue domes on whitewashed walls,
> bougainvillea spilling over stone, olive trees, windmills, narrow
> cobble paths, and a sea you can carve with a click.
> 
> It's a small, self-contained creative toy — drop blocks on a 14×14 grid
> and a tiny village builds itself in front of you. There's no goal,
> no resource grind, no scoring; just the puzzle-piece pleasure of
> arranging things until they look right.
> 
> **🌐 Play it: **
> 
> ---
> 
> ## Features
> 
> - **Click-to-build isometric grid.** Pick an asset from the right-side
>   palette, click a cell, and it pops in with an elastic placement
>   animation.
> - **One-click "Fill with grass"** to carpet the island and start
>   arranging in seconds.
> - **75+ painterly assets** organised into terrain, nature, props, water,
>   and buildings — chapels, windmills, two-story villas, cypress, olive
>   trees, agave, wells, lanterns, fences, bridges, and more.
> - **Touch-first mobile UI.** Tap to place, long-press to erase, drag
>   to brush, two-finger pinch and pan. Layout adapts from desktop down
>   to small phones with safe-area insets for the iPhone notch.
> - **High-fidelity asset pipeline.** Source PNGs are pre-rendered at
>   6× display resolution at load time, baked into high-DPI cached
>   layers, then composited per frame so the canvas stays crisp at
>   every zoom on every screen density.
> - **Auto-save.** Your island is persisted to `localStorage` and
>   re-loaded on the next visit.
> - **Tasteful sound design.** Distinct placement sounds for water,
>   stone, wood, small vegetation, large vegetation, and UI clicks,
>   with debounced overlap so brush-painting doesn't flood the bus.
> - **Pure ES modules.** No bundler, no transpiler, no `node_modules` —
>   open `index.html` and it runs.
> 
> ## Controls
> 
> ### Mouse + keyboard
> 
> | Input | Action |
> |---|---|
> | Click | Place selected asset |
> | Drag | Brush-place across cells |
> | Right click | Erase tile |
> | Right drag | Brush-erase |
> | Shift + drag | Pan camera |
> | Scroll wheel | Zoom |
> | `H` / `V` | Flip the placement preview |
> | `E` | Toggle erase mode |
> | `G` | Toggle grid overlay |
> | `1`–`5` | Switch palette categories |
> | `S` / `R` | Save / reset |
> 
> ### Touch
> 
> | Gesture | Action |
> |---|---|
> | Tap | Place selected asset |
> | Drag | Brush-place across cells |
> | Long-press (~420 ms) | Erase the tile under your finger |
> | Two-finger pinch | Zoom |
> | Two-finger drag | Pan camera |
> 
> ## Run it locally
> 
> The project is plain HTML / CSS / ES modules — there's no build step
> required to develop on it. Because browsers refuse to load ES modules
> from `file://` URLs, you do need to serve it over HTTP. Pick whichever
> of these is easiest:
> 
> ```bash
> # any one of these from the project root:
> python3 -m http.server 8000
> npx serve .
> npx http-server -c-1 .
> ```
> 
> Then open .
> 
> ## Deploy
> 
> The site is deployed to Netlify. The included `netlify.toml` and
> `netlify-build.mjs` produce a clean `dist/` folder containing only the
> runtime files (no design references, no `.DS_Store`, no `.webp`
> duplicates) and ship the right cache headers (immutable for assets,
> must-revalidate for HTML/CSS/JS).
> 
> ```bash
> netlify deploy --prod
> ```
> 
> ## Project layout
> 
> ```
> .
> ├── index.html               # entry point
> ├── styles.css               # the entire UI (no framework)
> ├── src/
> │   ├── main.js              # boot, asset loading, starter scene
> │   ├── config.js            # grid size, tile dims, palette, debug flags
> │   ├── core/
> │   │   ├── Game.js          # game state + tool dispatch
> │   │   ├── Camera.js        # pan / zoom / change notifications
> │   │   ├── Renderer.js      # layered canvas caching + animations
> │   │   └── InputManager.js  # mouse + touch + keyboard
> │   ├── grid/
> │   │   ├── IsoGrid.js       # screen ↔ cell math
> │   │   └── TileMap.js       # terrain + objects, occupancy index
> │   ├── building/
> │   │   └── PlacementSystem.js
> │   ├── assets/
> │   │   ├── assetManifest.js # the 75+ asset definitions
> │   │   ├── assetLoader.js   # PNG → display canvas + shadow canvas
> │   │   ├── imageToAsset.js  # silhouette extraction, anchor inference
> │   │   └── voxelRenderer.js # procedural fallback when PNGs missing
> │   ├── ui/
> │   │   ├── UIManager.js
> │   │   ├── Toolbar.js
> │   │   ├── AssetPalette.js
> │   │   ├── HUD.js
> │   │   └── Audio.js         # WebAudio clip routing + debouncing
> │   └── persistence/
> │       └── SaveSystem.js
> ├── assets/                  # PNG asset pack (pre-generated)
> ├── *.ogg                    # placement / UI sound effects
> ├── netlify.toml
> └── netlify-build.mjs
> ```
> 
> ## Architecture notes
> 
> A few choices worth flagging if you want to hack on the renderer:
> 
> - **Layered cache rendering.** `Renderer.js` keeps four cache canvases:
>   a screen-space backdrop + vignette pair (rebuilt on resize), a
>   world-space platform (rebuilt on grid resize), a world-space terrain
>   layer (rebuilt when the terrain version counter changes), and a
>   world-space static-objects layer (rebuilt on add/remove). Each frame
>   the renderer composites these caches and overlays only the currently
>   animating tiles. Idle frames are essentially free.
> - **High-DPI cache canvases.** Cache canvases are sized at
>   `world × CACHE_SCALE` (2× on standard displays, 3× on retina) so
>   that even after the camera scales them up, the pixels are at or
>   near final on-screen resolution. The asset displayCanvases are
>   pre-rendered at up to 6× their reference size, so detail flows
>   through without any "softening" intermediate.
> - **Spatial occupancy index in `TileMap`.** Object lookup and free-cell
>   checks are O(1) per cell instead of O(N) over the object list.
> - **Dirty-flag rendering.** `markDirty()` is called from camera /
>   input / tool transitions; the loop early-exits when the scene is
>   static and no animations are pending.
> 
> ## Contributing
> 
> PRs welcome. Please:
> 
> - Keep it framework-free — no bundlers, no transpilers, no
>   `node_modules` for the runtime.
> - Keep the asset count modest and the visual style coherent
>   (cobalt-on-cream, soft shadows, gentle elastic motion).
> - Don't add per-frame `ctx.filter`, ImageBitmap shenanigans, or
>   anything that would re-introduce frame drops at heavy scenes.
>   The renderer's caching invariants are load-bearing.
> 
> ## License
> 
> MIT — see [LICENSE](LICENSE).
> 
> The PNG asset pack in `assets/` is released under the same license,
> generated for this project. Audio clips were authored separately;
> see file metadata if you need to attribute them.

## 延伸閱讀

相關概念：[[遊戲設計]] · [[即時通訊]] · [[自動化測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[Juwluuu--Subnautica-2-Release|Juwluuu/Subnautica-2-Release]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[calesthio--Crucix|calesthio/Crucix]] · [[op7418--Claude-to-IM-skill|op7418/Claude-to-IM-skill]]

[GitHub](https://github.com/boona13/mykonos-island-voxels) · [官方網站](https://mykonos-island-voxels.netlify.app)

## 相關收錄

> [!note]- 直接競品（同子分類：建造遊戲）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "建造遊戲" AND file.name != "boona13--mykonos-island-voxels"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "遊戲" AND file.name != "boona13--mykonos-island-voxels"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "boona13--mykonos-island-voxels" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "boona13--mykonos-island-voxels"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["遊戲設計","即時通訊","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "boona13--mykonos-island-voxels" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "boona13--mykonos-island-voxels" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "boona13" AND file.name != "boona13--mykonos-island-voxels"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
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
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
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
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
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
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
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
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
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

> **2026-05-20** — 首次收錄
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

- [[2026-05-21|2026-05-21]] — 再次上榜，679 stars
- [[2026-05-20|2026-05-20]] — 首次收錄，661 stars
