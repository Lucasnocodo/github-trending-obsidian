---
repo: storytold/lightcraft
url: https://github.com/storytold/lightcraft
owner: storytold
owner_type: Organization
language: Rust
license: Apache-2.0
description: "An open-source, clean-room reimplementation of Adobe Lightroom in pure Rust."
homepage: "https://getartcraft.com/apps/lightcraft"
stars: 1575
stars_per_day: 263
forks: 482
open_issues: 40
created: 2026-09-30
pushed_at: 2026-10-06
first_seen: 2026-10-07
week: "2026-W41"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.2.1"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-07
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-10"
contributor_count: 5
engagement: "high"
issue_close_rate: 57
repo_size_kb: 29962
readme_length: 9972
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-07"
star_history: "2026-10-07:1575"
tags:
  - github
  - "category/other"
  - "lang/rust"
  - org
  - "topic/art"
  - "topic/lightroom"
  - "topic/photography"
  - "topic/raw"
  - "topic/raw_editor"
aliases:
  - "lightcraft"
  - "storytold/lightcraft"
---

# lightcraft

**1.6k** stars · **263** stars/天 · 建立 6 天前 · Rust · Apache-2.0

```dataviewjs
const me = dv.page("Repos/storytold--lightcraft");
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

`ORG` `v0.2.1`

`art` `lightroom` `photography` `raw` `raw-editor` `raw-processing` `rust`

> [!summary] 一句話摘要
> An open-source, clean-room reimplementation of Adobe Lightroom in pure Rust.

## 專案簡介

An open-source, clean-room reimplementation of Adobe Lightroom in pure Rust.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/storytold--lightcraft");
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
> const me = dv.page("Repos/storytold--lightcraft");
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
| Forks | 482 |
| Open Issues | 40 |
| Issue 解決率 | 57% (52 closed) |
| 最後推送 | 2026-10-06 |
| 建立日期 | 2026-09-30 |
| 官方網站 | [Link](https://getartcraft.com/apps/lightcraft) |
| Repo 大小 | 29.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/storytold/lightcraft) |
| Topics | `art` `lightroom` `photography` `raw` `raw-editor` `raw-processing` `rust` |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members` `version` `edition` `license` `rust-version` `repository` `lightcraft-geom` `lightcraft-sysmem` `lightcraft-color` `lightcraft-raster` `lightcraft-tiff` `lightcraft-raw` `lightcraft-codecs` `lightcraft-meta`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 98
>     "WGSL" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@echelon](https://github.com/echelon) | 478 |
> | [@storybored379](https://github.com/storybored379) | 6 |
> | [@arata-1972](https://github.com/arata-1972) | 5 |
> | [@leipsfur](https://github.com/leipsfur) | 1 |
> | [@benlukka](https://github.com/benlukka) | 1 |

**最新版本**：v0.2.1 — LightCraft v0.2.1 (2026-10-06)

> [!info]- Release Notes
> ## What's Changed
> * Persistence: a failed save fails the command (change kept in memory, queued, retried) by @echelon in https://github.com/storytold/lightcraft/pull/82
> * Local: forget untouched browse records of folders not browsed for 30 days by @echelon in https://github.com/storytold/lightcraft/pull/83
> * Issue #78: GPU export: respect device limits, fall back to CPU on GPU errors by @echelon in https://github.com/storytold/lightcraft/pull/84
> * Issue #10: Raw: Nikon compressed NEF (lossless + lossy) by @echelon in https://github.com/storytold/lightcraft/pull/86
> * Docs: honest parity assessment — where we stand, where we're going by @echelon in https://github.com/storytold/lightcraft/pull/87
> * Issue #85: Raw: CR2 colour pattern from the file's CR2CFAPattern tag, not a constant by @echelon in https://github.com/storytold/lightcraft/pull/88
> * Ignore /target-*/ build dirs by @echelon in https://github.com/storytold/lightcraft/pull/89
> * docs: point agents to the shared test corpora by @echelon in https://github.com/storytold/lightcraft/pull/90
> * FreeBSD: build and test the workspace in a FreeBSD VM by @echelon in https://github.com/storytold/lightcraft/pull/91
> * FreeBSD CI: match the shared template by @echelon in https://github.com/storytold/lightcraft/pull/108
> * Metadata: gracefully ignore invalid Unicode timezone offsets by @storybored379 in https://github.com/storytold/lightcraft/pull/111
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-06 ~ 2026-10-06）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #158 from storytold/fix/issue-148-rx100m3-green

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#74](https://github.com/storytold/lightcraft/issues/74) | Tablet editing `enhancement` `roadmap` | 1 | 3 |
> | [#183](https://github.com/storytold/lightcraft/issues/183) | `app.export` `watermark` object: accepted keys and the unit  | 0 | 0 |
> | [#182](https://github.com/storytold/lightcraft/issues/182) | MCP `select_photos` with a nonexistent photo id returns `sel | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> LightCraft
> 
> Your photos. Your pixels. Your machine.
> 
>   Photo library and raw development; an open-source, clean-room reimplementation of Adobe Lightroom, rebuilt in pure Rust.
>   Native on macOS, Windows and Linux. In the browser via WebAssembly. Drivable end to end by AI agents over MCP.
> 
>   
>   
>   
>   
>   
> 
>   
> 
>   LightCraft on getartcraft.com ·
>   ArtCraft ·
>   All Crafting Apps
> 
>   
>   
>   Ansel Adams, "The Tetons and the Snake River" (1942). Public domain, U.S. National Archives. Developed in LightCraft.
> 
> > [!NOTE]
> > **ArtCraft is a community of artists from all walks of life.** Digital, generative, music,
> > games &mdash; if you make things, you're one of us. **[Come say hi on Discord](https://discord.gg/artcraft).**
> 
>   Editing ·
>   Color grading ·
>   Before &amp; after ·
>   Masking ·
>   Presets ·
>   Library ·
>   Agents &amp; MCP ·
>   Performance ·
>   Status ·
>   Quick start ·
>   Roadmap ·
>   Crafting Apps
> 
> 
> ## Quick start
> 
> ```sh
> git clone https://github.com/storytold/lightcraft && cd lightcraft
> cargo run --release -p lightcraft                       # opens your library (~/Pictures/LightCraft Library; a new one starts with demo photos)
> cargo run --release -p lightcraft -- ~/Pictures/trip    # import your photos (folders are scanned, duplicates skipped)
> cargo run --release -p lightcraft -- --memory           # a throwaway in-memory demo session (writes nothing)
> cargo run --release -p lightcraft -- --control 7980     # with the automation channel
> cargo xtask web --serve                                 # the same app in the browser: http://127.0.0.1:8080/
> cargo run --release -p lightcraft-cli -- render photo.jpg -o out.jpg --set light.exposure=0.5
> cargo xtask ci                                          # fmt, clippy, tests, layering, wasm checks
> ```
> 
> **Japanese text** needs the shared font repo, an optional build input (official releases always include it):
> 
> ```sh
> git clone https://github.com/storytold/craft-fonts ../craft-fonts
> CRAFT_FONTS_DIR=../craft-fonts cargo run --release -p lightcraft
> ```
> 
> Without it LightCraft builds and runs the same, but Japanese text has no glyphs. Fonts are never committed to this
> repo; see [craftrules `standards/fonts.md`](https://github.com/storytold/craftrules/blob/main/standards/fonts.md).
> 
> The web build needs the `wasm32-unknown-unknown` target and the matching `wasm-bindgen` CLI
> (`cargo xtask web` prints the exact install command); see [docs/web.md](docs/web.md).
> 
> **Keyboard:** G grid · D detail · E edit · C crop · M masking ·
> Shift+P presets · \\ original · Y before/after · Z zoom ·
> J clipping · ⌘Z undo · ⌘/ all shortcuts.
> 
> 
> ## Feature status
> 
> LightCraft is young and moving fast. **Where we honestly stand** (details in the [roadmap](ROADMAP.md#where-we-stand)):
> 
> - **By feature count we're at ~79%** of Lightroom (core features 98%), tracked row by row in
>   [docs/parity.md](docs/parity.md).
> - **As a day-to-day Lightroom replacement we're nearer 60–70%.** It's great for JPEG/DNG and most Nikon / Sony /
>   older-Canon raws on one machine.
> - **The biggest gaps:**
>   - **camera colour calibration:** raws other than DNG develop with a neutral colour matrix today, so colour is muted;
>   - **CR3 and compressed Fujifilm / Olympus raws:** these open as embedded previews only;
>   - **AI masks and denoise:** subject and sky selection are classical heuristics;
>   - **HDR, video and the Classic Print / Book / Map modules.**
> - **What's next:** see [where we're going](ROADMAP.md#where-were-going).
> 
> | Area | Status |
> |---|---|
> | Library: albums, folders, smart albums, stacks (incl. auto-stack), virtual copies, ratings, flags, labels, filter bar, search, sort, grids, filmstrip | ✅ |
> | Culling: Compare (synced zoom) and Survey views, auto-advance, instant previews | ✅ |
> | Light, Color, Effects (vignette styles), Tone Curve (+ refine saturation, targeted adjustment), Color Mixer (+ targeted), Point Color, Color Grading, Calibration, B&W | ✅ |
> | Masking: brush, linear, radial, luminance/colour range, add/subtract/intersect | ✅ (AI subject/sky use classical heuristics for now) |
> | Crop, straighten tool + auto straighten, flip, rotate, aspect ratios, overlays | ✅ |
> | Profiles (Color, Neutral, Vivid, Landscape, Portrait, Monochrome: our own looks), presets, versions, history, copy/paste/sync settings | ✅ |
> | Camera colour: DNG files use their own matrices | ✅ · our own calibration for other raws ⬜ (top priority; neutral fallback today) |
> | Native macOS menu bar (generated from the command registry), control channel + every widget addressable, headless UI snapshots | ✅ |
> | RAW: DNG, CR2, ARW, NEF (uncompressed + lossless/lossy compressed), Fujifilm RAF (uncompressed, Bayer + X-Trans), Panasonic RW2, Pentax PEF, Olympus ORF (uncompressed); embedded previews for every format incl. CR3 | ✅ · CR3, compressed RAF/ORF decode ⬜ |
> | Detail: sharpening, luminance + colour noise reduction | ✅ · AI Denoise, Super Resolution ⬜ |
> | Remove / Heal / Clone spots (auto source), Visualize Spots, Red Eye and Pet Eye (auto pupil detection, catchlight) | ✅ · content-aware fill, spot pin editing 🚧 |
> | Export: JPEG / PNG / TIFF / WebP / AVIF / DNG / original, sizing, file-size limit, output sharpening, naming templates, batch, metadata policy, text or image watermark | ✅ · HDR export ⬜ |
> | Library persistence (crash-safe op log + snapshots, background compaction, failed saves reported), disk thumbnail cache | ✅ |
> | Import: Add in place / Copy / Move, rename and folder templates, devices, duplicate detection, watched folders; Local folder browsing | ✅ |
> | MCP server (headless or live app, persistent libraries), CLI, control channel | ✅ |
> | XMP sidecars (read/write, auto-write), reading `crs:` develop settings, preset files (`.lcpreset`, XMP presets) | ✅ |
> | Optics (distortion, vignetting, auto + manual CA, defringe, DNG-embedded lens corrections), Geometry (transforms, Constrain Crop), Upright (Auto/Level/Vertical/Full/Guided) | ✅ · camera lens profiles (our own) ⬜ |
> | Photo Merge: HDR (auto-align, deghost), Panorama (spherical/cylindrical/perspective, boundary warp, auto crop), HDR Panorama → DNG | ✅ |
> | GPU pipeline (wgpu compute, CPU-exact within 1/255), CPU fallback on device limits / errors | ✅ · WebGPU in the browser 🚧 |
> | AI: segmentation masks, AI denoise, super resolution, faces; HDR editing; video | ⬜ (see [roadmap](ROADMAP.md#where-were-going)) |
> | Web build (same UI in the browser via WASM): persistent library in OPFS/IndexedDB, Web Worker rendering, export downloads | ✅ · WebGPU, Safari/Firefox testing 🚧 |
> 
> ✅ works today · 🚧 in progress · ⬜ not started
> 
> 
> ## Edit like you mean it
> 
> LightCraft is a complete darkroom in a single native app. Every adjustment is **non-destructive**, so your originals
> are never touched. Every slider renders through a **scene-referred, wide-gamut, 32-bit float pipeline**: highlights
> roll off like film, shadows open up without halos, and colour stays clean from capture to export.
> 
> 
> ### ☀️ Light
> **Exposure, Contrast, Highlights, Shadows, Whites, Blacks**, with edge-aware local tone mapping (a guided filter on
> log-luminance). Pulling −100 Highlights recovers a blown sky without the grey halos you'd get from a naive curve.
> 
> 
> ### 🎨 Color
> **White balance** by temperature and tint (Kelvin for raw, relative for JPEG) with presets, Auto and a
> click-to-neutralise **eyedropper**. **Vibrance** that protects skin tones, **Saturation**, an 8-band **Color Mixer**
> (hue / saturation / luminance) and 3-way **Color Grading** wheels with blending and balance. All of it is computed in
> OkLCh, a modern perceptual colour space.
> 
> 
> ### ✨ Effects
> **Texture** for fine detail, **Clarity** for mid-tone punch, **Dehaze** (dark-channel prior with guided refinement;
> push it negative to add atmosphere), post-crop **Vignette** with highlight priority, roundness and feather, and
> resolution-independent film **Grain** with size and roughness.
> 
> 
> ### 📈 Tone Curve
> Parametric region curve with movable splits **plus** point curves for RGB, Red, Green and Blue. Curves are monotone by

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/storytold/lightcraft) · [官方網站](https://getartcraft.com/apps/lightcraft)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "storytold--lightcraft"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "storytold--lightcraft" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W41" AND file.name != "storytold--lightcraft"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/storytold--lightcraft");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "storytold--lightcraft" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "storytold" AND file.name != "storytold--lightcraft"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/storytold--lightcraft");
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
> const me = dv.page("Repos/storytold--lightcraft");
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
> const me = dv.page("Repos/storytold--lightcraft");
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
> const me = dv.page("Repos/storytold--lightcraft");
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
> const me = dv.page("Repos/storytold--lightcraft");
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

> **2026-10-07** — 首次收錄
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

- [[2026-10-07|2026-10-07]] — 首次收錄，1.6k stars
