---
repo: tangerineturtle1/NX2navi
url: https://github.com/tangerineturtle1/NX2navi
owner: tangerineturtle1
owner_type: User
language: C
license: MIT
description: ""
homepage: ""
stars: 3966
stars_per_day: 661
forks: 301
open_issues: 717
created: 2026-11-07
pushed_at: 2026-11-13
first_seen: 2026-11-09
week: "2026-W46"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v0.5.0"
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
appearances: 6
next_review: "2026-11-17"
contributor_count: 4
engagement: "low"
issue_close_rate: 2
repo_size_kb: 10044
readme_length: 5168
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-09"
star_history: "2026-11-09:1590,2026-11-10:2569,2026-11-11:2975,2026-11-12:3339,2026-11-13:3650,2026-11-14:3966"
tags:
  - github
  - "category/other"
  - "lang/c"
aliases:
  - "NX2navi"
  - "tangerineturtle1/NX2navi"
---

# NX2navi

**1.6k** stars · **1.6k** stars/天 · 建立 1 天前 · C · MIT

```dataviewjs
const me = dv.page("Repos/tangerineturtle1--NX2navi");
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

`v0.5.0`

> [!summary] 一句話摘要
> No description

## 專案簡介

No description available.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/tangerineturtle1--NX2navi");
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
> const me = dv.page("Repos/tangerineturtle1--NX2navi");
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
| Forks | 82 |
| Open Issues | 200 |
| Issue 解決率 | 2% (5 closed) |
| 最後推送 | 2026-11-09 |
| 建立日期 | 2026-11-07 |
| Repo 大小 | 9.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/tangerineturtle1/NX2navi) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C" : 72
>     "Python" : 21
>     "C++" : 4
>     "C#" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tangerineturtle1](https://github.com/tangerineturtle1) | 135 |
> | [@claude](https://github.com/claude) | 2 |
> | [@valentderah](https://github.com/valentderah) | 1 |
> | [@Wintego](https://github.com/Wintego) | 1 |

**最新版本**：v0.5.0 — NX2navi 0.5.0 (2026-11-08)

> [!info]- Release Notes
> A fix release for *The Legend of Zelda: Ocarina of Time* for Nintendo Switch 2 (game version 1.1.1): the fog and lighting are back to the game's own. **No game files are included**: the setup builds the game on your PC from your own dump.
> 
> ## Install or update
> 
> - **Already have 0.4.0:** start the launcher; it offers 0.5.0 and updates. The first start after the update prepares the shaders again (about a minute and a half on the boot screen).
> - **New install:** download **`NX2navi-Setup-0.5.0.exe`** below, put it next to your `.nup` dump of the game and start it. Windows SmartScreen warns on the first start because the setup is not signed: choose *More info* and *Run anyway*. The launcher builds the game (10 to 25 minutes, once), prepares every shader and starts it.
> 
> **Requirements:** Windows 10 or 11; an x86-64 CPU with SSE4.2; 16 GB of RAM; about 30 GB free for the game and 1.5 GB for the launcher; a GPU with Vulkan 1.3, `VK_EXT_external_memory_host` and `VK_EXT_mesh_shader` (current NVIDIA and AMD cards).
> 
> ## Fixed in this release
> 
> - Kokiri Forest and other foggy areas are no longer washed out in a bright white and yellow haze: the fog the game builds up on the GPU adds up correctly again (0.4.0 broke the shader loop that adds to it).
> - Small white flowers and other foliage in the grass no longer flicker white from frame to frame.
> - The trees stay fixed: no dark columns reaching the sky.
> 
> ## Known issues
> 
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-08 ~ 2026-11-09）
> **活躍天數** 2 天 · **最新 commit** Pin the launcher's default settings in a test: updates checked at start, hidden while playing, build

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#34](https://github.com/tangerineturtle1/NX2navi/issues/34) | add 1080p `enhancement` | 10 | 0 |
> | [#55](https://github.com/tangerineturtle1/NX2navi/issues/55) | LINUX SUPPORT !!!!!! `enhancement` | 9 | 11 |
> | [#89](https://github.com/tangerineturtle1/NX2navi/issues/89) | Mention totk-pc-recomp as the base project | 6 | 1 |
> | [#109](https://github.com/tangerineturtle1/NX2navi/issues/109) | Linux port of the Ocarina build, with DualSense/Steam Deck p | 5 | 1 |
> | [#3](https://github.com/tangerineturtle1/NX2navi/issues/3) | Linux port? `enhancement` | 5 | 5 |

## README 摘錄

> [!info]- 展開查看原文 README
> # NX2navi
> 
> **Join the official NX2navi update discord server: https://discord.com/invite/uf6gSrsPpq** 
> 
> **NX2navi** is a static recompilation of *The Legend of Zelda: Ocarina of Time* for Nintendo Switch 2 (game
> version 1.1.1) into a native x86-64 application for Windows, with a Vulkan renderer
> ([docs/architecture.md](docs/architecture.md)).
> 
> > [!IMPORTANT]
> > **No game files are included.** You need your own legally obtained copy of the game, dumped from your own console.
> > Instructions for obtaining those files will not be provided.
> >
> > The game is built from your files on your machine, so the result contains the game. It is for your own use. Do not share it.
> 
> ## Status
> 
> Early development, playable. Kokiri Forest, Kakariko Village, Death Mountain Trail and its crater, the Temple of
> Time and the Great Fairy fountains play at 60 fps and above on current GPUs, from the title screen and from saves.
> Visual bugs and occasional crashes are still expected ([Known issues](#known-issues)).
> 
> Report problems as issues, following [CONTRIBUTING.md](CONTRIBUTING.md).
> 
> ## Features
> 
> - Native code, not emulation
> - 60 fps by default, or a limit of 30 to 240 fps, the display's refresh rate or unlimited
> - Native widescreen and ultrawide (the window's shape, 21:9 or 32:9) with the HUD, menus and movies kept 16:9
> - Resolutions above the game's 1440p: 1800p, 4K, 5K or the window's own size, sharp on high-DPI displays
> - Upscaling and anti-aliasing: NVIDIA DLSS (DLAA, Quality, Balanced, Performance, Ultra Performance; RTX GPUs) or
>   AMD FSR 3.1 (Native AA and the same modes; any GPU), which render the 3D scene at the mode's share and keep the HUD
>   sharp; or AMD FSR 1 or bilinear scaling to the window, with a sharpness setting; black bars or stretch
> - Frame generation with AMD FSR 3.1 (any GPU): a generated frame between every two the game draws, with the HUD kept
>   out of it, for about twice the frame rate on a fast display; in a window of another shape than the picture, frames
>   are generated inside the picture only, so the black bars stay clean
> - HDR on HDR displays: the game's own native HDR, or an enhanced HDR made from its SDR picture
> - Every shader prepared when the game is built, and the pipelines met in play built again in the background at each
>   start, so play does not stop to compile them; a draw that must wait for its pipeline has it built on worker
>   threads, never on the game's drawing thread
> - In-game settings menu (F1, or Minus and Plus together on a gamepad) and performance overlay (F10)
> - Keyboard, mouse and gamepads with remapping, Nintendo or Xbox button layout, rumble and gyro; the game follows
>   whichever connected gamepad you press
> - Stereo or 5.1 surround sound output
> - Docked or handheld console mode
> - The game's textures stay compressed (BC3, about half the video memory at the same speed) unless the PC has 20 GiB of
>   video memory and 48 GiB of RAM, as Windows counts video memory against the system's commit limit
> 
> ## Installing
> 
> Download `NX2navi-Setup-.exe` from the releases and start it next to your `.nup` dump. It is the only file
> you need. The launcher it
> installs finds the dump, downloads the build tools, builds the game on your PC (10 to 25 minutes, once) and starts
> it; afterwards it keeps the port up to date and rebuilds only what changed ([docs/launcher.md](docs/launcher.md)).
> [docs/README-BuildKit.md](docs/README-BuildKit.md) describes the same build by hand, [docs/building.md](docs/building.md)
> building from source. Settings are in the in-game menu and in `nx2navi.ini` ([nx2navi.ini.example](nx2navi.ini.example)
> lists every key). Controls: [docs/controls.md](docs/controls.md).
> 
> Requirements: Windows 10 or later; an x86-64 CPU with SSE4.2 (AVX2/FMA machines get a faster build); 16 GB of RAM; about
> 30 GB free for the game and 1.5 GB for the launcher and its tools; a GPU with Vulkan 1.3, `VK_EXT_external_memory_host`
> and `VK_EXT_mesh_shader`. The setup is not signed, so SmartScreen warns on its first start.
> 
> ## Known issues
> 
> - The first start after an install or update, and the first visit to an area, can pause briefly while the graphics
>   driver builds what it has not seen; later starts are smooth.
> - A rare crash in the game's particle code.
> - DLSS Frame Generation is not offered yet: AMD FSR 3.1 frame generation works on every GPU, NVIDIA's included.
> 
> ## License
> 
> The source is public to read. Its additions and changes are all rights reserved ([LICENSE-ADDITIONS](LICENSE-ADDITIONS)):
> no part of them may be copied or published without written permission. The base import stays under its
> [MIT License](LICENSE), and third-party code keeps its own license ([THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md)).
> No license grants anything for Nintendo's game.
> 
> NX2navi is an independent, non-commercial fan project, not affiliated with or endorsed by Nintendo. *The Legend
> of Zelda*, *Ocarina of Time* and *Nintendo Switch* are trademarks of Nintendo.
> 
> ## Building from source
> 
> [docs/building.md](docs/building.md) lists the toolchain and the steps. Everything the build writes stays under
> `build\` and `generated\`, which git ignores; run `tools/check_content.py` before a commit.

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/tangerineturtle1/NX2navi)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "tangerineturtle1--NX2navi"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C" AND file.name != "tangerineturtle1--NX2navi" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W46" AND file.name != "tangerineturtle1--NX2navi"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/tangerineturtle1--NX2navi");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "tangerineturtle1--NX2navi" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "tangerineturtle1" AND file.name != "tangerineturtle1--NX2navi"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/tangerineturtle1--NX2navi");
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
> const me = dv.page("Repos/tangerineturtle1--NX2navi");
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
> const me = dv.page("Repos/tangerineturtle1--NX2navi");
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
> const me = dv.page("Repos/tangerineturtle1--NX2navi");
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
> const me = dv.page("Repos/tangerineturtle1--NX2navi");
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

- [[2026-11-14|2026-11-14]] — 再次上榜，4.0k stars
- [[2026-11-13|2026-11-13]] — 再次上榜，3.6k stars
- [[2026-11-12|2026-11-12]] — 再次上榜，3.3k stars
- [[2026-11-11|2026-11-11]] — 再次上榜，3.0k stars
- [[2026-11-10|2026-11-10]] — 再次上榜，2.6k stars
- [[2026-11-09|2026-11-09]] — 首次收錄，1.6k stars
