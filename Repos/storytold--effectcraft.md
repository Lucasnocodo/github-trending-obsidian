---
repo: storytold/effectcraft
url: https://github.com/storytold/effectcraft
owner: storytold
owner_type: Organization
language: Rust
license: Apache-2.0
description: ""
homepage: ""
stars: 1881
stars_per_day: 314
forks: 765
open_issues: 16
created: 2026-10-01
pushed_at: 2026-10-08
first_seen: 2026-10-08
week: "2026-W41"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.4.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-08
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-11"
contributor_count: 5
engagement: "high"
issue_close_rate: 84
repo_size_kb: 22646
readme_length: 9730
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-08"
star_history: "2026-10-08:1881"
tags:
  - github
  - "category/other"
  - "lang/rust"
  - org
aliases:
  - "effectcraft"
  - "storytold/effectcraft"
---

# effectcraft

**1.9k** stars · **314** stars/天 · 建立 6 天前 · Rust · Apache-2.0

```dataviewjs
const me = dv.page("Repos/storytold--effectcraft");
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

`ORG` `v0.4.0`

> [!summary] 一句話摘要
> No description

## 專案簡介

No description available.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/storytold--effectcraft");
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
> const me = dv.page("Repos/storytold--effectcraft");
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
| Forks | 765 |
| Open Issues | 16 |
| Issue 解決率 | 84% (83 closed) |
| 最後推送 | 2026-10-08 |
| 建立日期 | 2026-10-01 |
| Repo 大小 | 22.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/storytold/effectcraft) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members` `default-members` `version` `edition` `license` `rust-version` `repository` `effectcraft-time` `effectcraft-geom` `effectcraft-color` `effectcraft-raster` `effectcraft-path` `effectcraft-keyframe` `effectcraft-project`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 94
>     "WGSL" : 3
>     "JavaScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@echelon](https://github.com/echelon) | 543 |
> | [@bflatastic](https://github.com/bflatastic) | 216 |
> | [@claude](https://github.com/claude) | 16 |
> | [@storybored379](https://github.com/storybored379) | 6 |
> | [@dexterlabs1](https://github.com/dexterlabs1) | 4 |

**最新版本**：v0.4.0 — EffectCraft v0.4.0 (2026-10-07)

> [!info]- Release Notes
> ## Highlights
> 
> A release built around the issues people filed since v0.3.1: more than 40 of them are fixed.
> 
> - **Timeline:** Alt+wheel zooms out to the whole comp; the Time Navigator's ends drag to zoom and `;` toggles frame level / the whole comp; reveal shortcuts (U, E, P…) only touch the selected layers; enabling Time Remapping reveals it; Project items land where you drop them.
> - **Viewer:** drop Project items, files and effects straight onto the comp; Pan Behind snaps the anchor to its own layer, with Alt-drag, Shift-drag and Ctrl+double-click to center; a locked viewer keeps its comp.
> - **Panels and editing:** clicking a value or name field selects it, so typing replaces it (Enter commits, Escape cancels); the gaps between the right column's stacked panels drag to resize them; Delete removes selected animators, masks and shape groups; the font menus list your installed fonts.
> - **Export:** VP9 WebM frames always decode (no false superframe markers); long audio keeps its sound past 12:36; `--format hevc` / `av1` and `.mp4` outputs keep the codec you chose; AV1 WebM refuses alpha instead of silently dropping it.
> - **Reliability:** running out of video memory falls back to the CPU instead of crashing; GPU start-up failures are contained; the CLI no longer panics when its output is piped into `head`.
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-08 ~ 2026-10-08）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #233 from ulanch/fix-variable-font-axis-test

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#227](https://github.com/storytold/effectcraft/issues/227) | [EffectCraft 0.4.0] - Misc. Missing Features | 1 | 2 |
> | [#246](https://github.com/storytold/effectcraft/issues/246) | EffectCraft Audio Problem | 0 | 0 |
> | [#243](https://github.com/storytold/effectcraft/issues/243) | Failed to open Effectcraft on an igpu | 0 | 0 |
> | [#234](https://github.com/storytold/effectcraft/issues/234) | [Bug] macOS 27 / Apple Silicon: app exits after ~10s without | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> EffectCraft
> 
>   Motion graphics and visual effects; an open-source, clean-room reimplementation of Adobe After Effects, rebuilt in pure Rust.
> 
>   A free, open-source compositor in the spirit of After Effects: compositions, layers,
>   keyframes, 306 effects, layer styles, expressions, 3D cameras and lights, and a render queue, native on macOS,
>   Windows and Linux, and in the browser. Young, moving fast, and already usable.
> 
>   
>   
>   
> 
>   
> 
>   EffectCraft on getartcraft.com ·
>   ArtCraft ·
>   All Crafting Apps
> 
>   
> 
> > [!NOTE]
> > **ArtCraft is a community of artists from all walks of life.** Digital, generative, music,
> > games &mdash; if you make things, you're one of us. **[Come say hi on Discord](https://discord.gg/artcraft).**
> 
>   What it is ·
>   Animate ·
>   Effects ·
>   3D ·
>   Export ·
>   Agents ·
>   Get started ·
>   Status ·
>   How it's made ·
>   The Crafting Apps ·
>   License
> 
> 
> ## What EffectCraft is
> 
> EffectCraft is for animated titles, motion graphics and compositing work: the kind of thing
> people reach for After Effects to do. You build a composition out of layers (solids, shapes,
> text, footage, other compositions), animate their properties with keyframes, stack effects on
> them and render the result.
> 
> The aim is to feel familiar to anyone who has used After Effects, with the same panels (Project,
> Composition, Timeline, Effect Controls, Effects & Presets) and the same keyframe behaviour, and
> then to go further in a few places where it matters to us:
> 
> - **Lottie import and export built in**, so animations can go straight to the web and apps
>   without a plugin.
> - **A project file you can read.** Projects are versioned JSON (`.ecproj`), so they diff cleanly
>   in version control.
> - **Everything is scriptable.** Every menu item, timeline drag and property edit goes through one
>   command registry, so the same actions are reachable from a command line, a JSON control
>   channel and an MCP server for agents.
> - **No FFmpeg.** Video and audio decoding and encoding are pure Rust: FilmCraft's codecs and
>   EffectCraft's own VP9, AV1, HEVC and Opus encoders.
> 
> 
> ## Animate
> 
> The panels, menus and shortcuts follow After Effects, so your muscle memory carries over:
> Project, Composition, Timeline, Effect Controls, Properties, Effects & Presets, Character,
> Paragraph, Align, Info, Preview, Audio and the Render Queue, docked the way you expect. Drag
> footage, comps and effects between them: onto the comp viewer, where they land under the pointer,
> or into the Timeline, between layers and at the time you point to.
> 
> - **Layers of every kind:** solids, shapes, text, footage, nested compositions, nulls,
>   adjustment layers, cameras and lights; parenting, track mattes, all 38 blend modes, motion blur.
> - **Keyframes that behave the same:** linear, Bezier, hold, auto and continuous Bezier, roving
>   keys, Easy Ease (F9), Keyframe Velocity and Interpolation dialogs, copy and paste at the current
>   time, and a **Graph Editor** with value and speed graphs and draggable handles.
> - **Time:** time remapping, time stretch, time-reverse, freeze frame, work area, markers, exact
>   frame-accurate timing at every frame rate including 29.97 drop-frame.
> - **Shapes and masks:** shape layers with trim paths, repeaters, round corners, offset, zig zag,
>   twist, wiggle, merge paths and gradient strokes; masks drawn with the pen tool, with modes,
>   feather, expansion and vertex editing in the viewer.
> - **Text:** point and paragraph text with real shaping in any font installed on your machine, the
>   Character and Paragraph panels, and text animators with range selectors.
> - **Expressions:** JavaScript with the After Effects object model (`wiggle`, `loopOut`,
>   `thisComp.layer("…")`, vector maths on arrays), an inline editor and the pick-whip.
> - **Timeline like you know it:** twirl layers open to Transform, masks, effects and the rest; drag
>   rows to reorder layers; rename with Enter or a double-click; the property shortcuts (A, P, S,
>   R, T, M, F, E, L, U and their double presses AA, PP, SS, RR, TT, MM, FF, EE, LL, UU), Shift to
>   add properties, Alt+Shift+A/P/S/R/T to key the current time, Ctrl+` to twirl selected layers.
> - **Puppet tools:** Position, Advanced, Bend, Starch and Overlap pins on a mesh built from the
>   layer, real-time pin recording, rotate/scale handles, pins driven by (or carrying) nulls for
>   rigging, and follow-through for hair and cloth.
> 
>   
> 
> 
> ## Effects
> 
> 306 effects (every one of After Effects' 298, and more) across its categories, each with its parameter names, order and
> defaults: blur and sharpen, channel, color correction (Curves, Levels, Hue/Saturation, Lumetri
> Color…), distort (Warp, Bulge, Turbulent Displace, CC Power Pin…), generate (Fractal Noise,
> Gradient Ramp, Stroke, Write-on, Audio Spectrum…), keying, matte, noise and grain, perspective,
> **simulation** (CC Particle World, CC Rainfall, Shatter, Card Dance, Caustics, Wave World…),
> stylize (Glow, CC Glass…), **time** (Echo, Posterize Time, Timewarp, Time Displacement…),
> **audio** (Reverb, Parametric EQ, Delay, Stereo Mixer…), text, transitions, utility and expression
> controls. All nine **Layer Styles** (Drop Shadow, Inner/Outer Glow, Bevel and Emboss, Satin,
> overlays, Stroke) with Global Light. Preview plays audio in sync, with meters and waveforms.
> 
>   
> 
> 
> ## 3D
> 
> Classic 3D the way After Effects does it: 3D layers with orientation and material options,
> one- and two-node **cameras** with depth of field, **lights** (parallel, spot, point, ambient)
> with soft ray-traced shadows, layers that intersect correctly, orbit, pan and dolly camera
> tools, and Front, Top, Left and Custom views.
> 
>   
> 
> 
> ## Export
> 
> A Render Queue like After Effects', with Render Settings and Output Modules: **H.264** MP4 and
> **ProRes** MOV (Proxy to 4444 XQ with alpha) with audio, **HEVC** (Main / Main 10) and **AV1**
> MP4, **WebM** (VP9 with inter frames and alpha, or AV1; Opus audio), PNG, JPEG, TIFF and 32-bit EXR sequences, animated GIF and WAV/AIFF. Field
> rendering with 3:2 pulldown, effect/solo/guide/depth overrides, crop, region of interest and
> resize, Render Settings and Output Module templates with defaults, post-render actions, storage
> overflow and render logs. The same queue runs from the command line. Every encoder is pure
> Rust (FilmCraft's H.264, ProRes and AAC; EffectCraft's own VP9, AV1, HEVC and Opus); there is no
> FFmpeg inside.
> 
> **Lottie** goes both ways: File ▸ Export ▸ Lottie JSON… writes a composition (precomps, shape,
> solid, image, text and null layers, eased and spatial keyframes, masks, track mattes, blend
> modes, time remapping, optionally expressions) as `.json` or `.lottie`, and lists anything Lottie
> cannot express; File ▸ Import ▸ Lottie… opens one as a new composition.
> 
>   
> 
> 
> ## Built for agents
> 
> Everything you can do from a menu is a command with an id, and agents can reach every one of
> them:
> 
> - **MCP server:** `effectcraft-cli mcp` speaks the Model Context Protocol over stdio, headless
>   or bridged to the running app (`--bridge 9877`). Tools cover commands, the project and property
>   tree, keyframes and rendered frames. This repository ships a ready [`.mcp.json`](.mcp.json).
> - **Command line:** one-shot calls with JSON output, for example
>   `effectcraft-cli set Main '#1' transform/position '[100,360]' --time 0 main.ecproj --save`
>   or `effectcraft-cli render --comp Main --out main.mp4`, or
>   `effectcraft-cli exec file.exportLottie '{"comp":"Main","path":"main.json"}' main.ecproj`.
> - **Control channel:** `effectcraft --control 9877` accepts JSON lines to run commands, inspect
>   and click any widget by its automation id, and take screenshots.
> 
> See [docs/agents.md](docs/agents.md) and [docs/control-protocol.md](docs/control-protocol.md).
> 
> 
> ## Get started
> 
> Installers for each version are on the [Releases](https://github.com/storytold/effectcraft/releases)
> page: a universal macOS app; Windows MSIs and portable zips for x64, x86 and ARM64; and Linux
> AppImage, deb, rpm and tar.gz for x86_64 and aarch64. The Windows ARM64 build runs natively on
> Windows on

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]]

[GitHub](https://github.com/storytold/effectcraft)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "storytold--effectcraft"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "storytold--effectcraft" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W41" AND file.name != "storytold--effectcraft"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/storytold--effectcraft");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "storytold--effectcraft" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "storytold" AND file.name != "storytold--effectcraft"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/storytold--effectcraft");
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
> const me = dv.page("Repos/storytold--effectcraft");
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
> const me = dv.page("Repos/storytold--effectcraft");
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
> const me = dv.page("Repos/storytold--effectcraft");
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
> const me = dv.page("Repos/storytold--effectcraft");
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

- [[2026-10-08|2026-10-08]] — 首次收錄，1.9k stars
