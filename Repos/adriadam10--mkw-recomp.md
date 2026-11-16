---
repo: adriadam10/mkw-recomp
url: https://github.com/adriadam10/mkw-recomp
owner: adriadam10
owner_type: User
language: C
license: MIT
description: "Static recompilation of Mario Kart World (Nintendo Switch 2) to a native PC program"
homepage: ""
stars: 1278
stars_per_day: 213
forks: 82
open_issues: 164
created: 2026-11-09
pushed_at: 2026-11-15
first_seen: 2026-11-16
week: "2026-W47"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v0.1.12"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-16
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-19"
contributor_count: 5
engagement: "low"
issue_close_rate: 53
repo_size_kb: 5879
readme_length: 9139
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-16"
star_history: "2026-11-16:1278"
tags:
  - github
  - "category/other"
  - "lang/c"
aliases:
  - "mkw-recomp"
  - "adriadam10/mkw-recomp"
---

# mkw-recomp

**1.3k** stars · **213** stars/天 · 建立 6 天前 · C · MIT

```dataviewjs
const me = dv.page("Repos/adriadam10--mkw-recomp");
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

`v0.1.12`

> [!summary] 一句話摘要
> Static recompilation of Mario Kart World (Nintendo Switch 2) to a native PC program

## 專案簡介

Static recompilation of Mario Kart World (Nintendo Switch 2) to a native PC program

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/adriadam10--mkw-recomp");
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
> const me = dv.page("Repos/adriadam10--mkw-recomp");
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
| Open Issues | 164 |
| Issue 解決率 | 53% (183 closed) |
| 最後推送 | 2026-11-15 |
| 建立日期 | 2026-11-09 |
| Repo 大小 | 5.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/adriadam10/mkw-recomp) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C" : 76
>     "Python" : 18
>     "C++" : 5
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@adriadam10](https://github.com/adriadam10) | 366 |
> | [@guillo1990](https://github.com/guillo1990) | 19 |
> | [@andreknieriem](https://github.com/andreknieriem) | 16 |
> | [@EdouardSence](https://github.com/EdouardSence) | 15 |
> | [@flavio-silva](https://github.com/flavio-silva) | 9 |

**最新版本**：v0.1.12 (2026-11-15)

> [!info]- Release Notes
> A new start screen and settings by @ViniciusStanula; 20 and 15 fps at the race's real speed, Low latency and frame
> generation that splits the screen's refreshes evenly; a second fix for NVIDIA's "instruction pointer invalid" crashes,
> with one part by @Elenedeath; Classic Grand Prix, faster audio and Steam Deck fixes by @andreknieriem; the Windows
> setup sized by the PC's real memory by @fraustiz; and fixes for the setup's shaders step (cause found by @Talaric0),
> the minimap on AMD (diagnosed by @elenotrindade) and game version 1.8.0 (photo mode, Thai, LAN play, button icons).
> Thanks to @ViniciusStanula, @andreknieriem, @Elenedeath, @fraustiz, @SavageCore, @Talaric0 and @elenotrindade.
> 
> ## Changes
> 
> - **The start screen's main page, with the update at the top right** (#357 by @ViniciusStanula): the profile that
>   plays is a chip beside Play (it opens Profiles) instead of a menu row, the first controller SDL sees sits under
>   Play — with how many more, and a click through to Controls, refreshed when a pad is connected or removed — and the
>   update is offered as a card in the upper right with the release, the size in use, Update and What's new. The
>   desktop shortcut is offered once after setup instead of taking a menu entry, and the game files' state at the
>   lower left names the version the last setup installed.
> - **Settings in five tabs plus Advanced and Hacks** (#358 by @ViniciusStanula): the eight tabs become Screen,
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-15 ~ 2026-11-15）
> **活躍天數** 1 天 · **最新 commit** docs(changelog): 0.1.12's Tested section, setups from both packages

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#442](https://github.com/adriadam10/mkw-recomp/issues/442) | Game is trying SO HARD to stay at 30 fps now. [v0.1.12] `bug` `gpu-nvidia` `v0.1.12` | 1 | 3 |
> | [#438](https://github.com/adriadam10/mkw-recomp/issues/438) | [Graphics] 3D objects and geometry disappearing during gamep `bug` `gpu-amd` `v0.1.12` | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> mkw-recomp
> 
>   Mario Kart World (Nintendo Switch 2) recompiled to run natively on Linux and Windows.
> 
>   
>   
>   
> 
>   Releases ·
>   Help wiki ·
>   Changelog ·
>   Contributing ·
>   Sources ·
>   Roadmap ·
>   Performance ·
>   Issues ·
>   Discussions ·
>   Archive
> 
>   English ·
>   简体中文 ·
>   Español ·
>   العربية ·
>   हिन्दी ·
>   Português (Brasil) ·
>   Português (Portugal)
> 
> A static recompilation of *Mario Kart World* (Nintendo Switch 2, versions 1.0.0 and 1.8.0) into a native PC program for Linux and
> Windows. It needs your own copy of the game, dumped from your own console: nothing of the game is in this repository
> or in its releases.
> 
> **It is a recompilation, not an emulator.** The game's AArch64 code is translated to C ahead of time and compiled
> for the PC's CPU (x86-64, or AArch64 on Linux); there is no CPU interpreter or JIT. The GPU is not emulated either:
> NVN2, the Switch 2 graphics API, is reimplemented on top of Vulkan at the API level, and the game's SM86 shaders are
> translated to SPIR-V ahead of time. Nintendo SDK functions (`nn::*`) are replaced by name with our own code.
> 
> 
> ## Extra features
> 
> Beyond the console, all optional and off (or at the console's value) by default:
> 
> - **Display**: internal resolution above or below the console's, 21:9, 32:9 and 48:9 (races show more at the sides), AMD FSR 1 scaling, HDR on HDR
>   screens, VSync, mailbox or immediate presentation.
> - **Frame generation**: frames made between the game's (a race at 30 fps shown at 60, or at 240 on a 240 Hz screen).
>   Smoother, not faster: the picture is up to one frame later, and fast motion and the minimap can smear.
> - **Frame rate**: 20 and 15 fps besides the console's 60 and 30; Automatic drops to them when frames take too long,
>   so a slow graphics card keeps the race at its real speed. **Low latency** (on by default: it changes no picture,
>   only when each frame starts) starts each frame as late as the card allows, so a press reaches the screen sooner.
> - **Graphics**: texture filtering and quality, detail distance and shadow quality above or below the console's.
> - **Sound**: 5.1 surround.
> - **Controls**: every key and button rebindable, mouse camera, Nintendo, Xbox or PlayStation button icons, motion
>   steering, vibration strength; local multiplayer with one controller each.
>   Switch 2 controllers (Pro Controller, Joy-Con, GameCube) work over Bluetooth and, on Linux, over USB; on Windows
>   USB needs a one-time driver step, below.
> - **Hacks**: turbo (hold or toggle F2), skip movies, unlock everything, the same randomness every time, straight to
>   time trial or free roam.
> - **Languages**: the menus in 20 languages; the game itself also in Catalan, Galician and Basque.
> - **Game files**: choose the installation folder; a dump as folders or as one `.nup` or `.nx` file, used where it is;
>   updates from the start screen.
> - **Performance overlay** (FPS, or CPU, GPU and memory in full) and a one-click system info for bug reports.
> 
> 
> ## Status
> 
> Early, and moving fast. On 12/11/2026:
> 
> - It boots, plays the intro movies, goes through the menus and races, on Linux and on Windows (x86-64), and on Linux
>   on AArch64 (its own AppImage; tested on an Adreno 740 handheld).
> - The start screen sets the game up from your copy on your machine (generates and compiles the C, translates the
>   shaders, warms up the pipeline cache) and holds every setting: display, graphics quality, controls, hacks.
> - Races run at 60 fps on high-end GPUs and at 30 on mid-range ones; see [Performance](#performance).
> - Known problems: a few menus (mode, character and vehicle select) still need work, the kart's shadow misses a frame
>   now and then, some audio cuts during movies, and on some AMD drivers the GPU can hang. There is no online play.
> 
> 
> ## Roadmap
> 
> The main open work, in order; the details are in [docs/roadmap.md](docs/roadmap.md).
> 
> - **60 fps in races.** Today a race frame is a serial chain: the game finishes its frame (~3 ms\*), then the Vulkan
>   back end records the game's big submit (~19 ms\*), then the GPU runs it (~10 ms\*), and only then does the next frame
>   start.
>   Recording is on the critical path, so the work is recording with less CPU: dynamic state only when it changes, draw
>   caches across frames, parallel recording, and a faster game thread.
> - **The picture as on the console**: the last shader translator bugs, the kart's shadow, push constants, zero Vulkan
>   validation errors.
> - **Every menu checked** against the console: mode, character and vehicle select are next.
> - **No GPU hangs** and less GPU memory, then loading without stutter and a Linux package for non-rolling distributions.
> - **1.8.0 on par with 1.0.0**: its ultrawide aspect, shadow map size and fixed seed ([#19](https://github.com/adriadam10/mkw-recomp/issues/19)).
> 
> \* Measured on 09/11/2026 on our test machine: Radeon 660M APU (Ryzen 5 7535HS), Linux, 720p internal resolution.
> 
> 
> ## Performance
> 
> Measured frame times, each with its date, are in [docs/performance.md](docs/performance.md). To add your machine,
> open a [performance report](https://github.com/adriadam10/mkw-recomp/issues/new?template=performance.yml): it goes
> into the table with the date of the report. The times are the game's own frames: frame generation shows more frames
> but does not shorten them. 16.7 ms is 60 fps; Frame rate on Automatic (the console's) drops to 30 fps when 60 is out of
> reach, and a frame over 33.3 ms runs the race slower than real time.
> 
> | Date | GPU | Internal resolution | Race fps | Race frame time |
> |---|---|---|---|---|
> | 11/11/2026 | RX 7900 XTX (Windows) | 2160p | 60 | 16.7 ms |
> | 11/11/2026 | RX 9070 XT (Linux, RADV) | 720p to 2160p | 60 | 16.7 ms |
> | 10/11/2026 | RTX 3060 (Windows) | 1080p | ~48 | ~21 ms |
> | 11/11/2026 | RTX 3050 Laptop (Windows) | 720p | ~37 | 26.7 ms |
> | 09/11/2026 | Radeon 660M (Linux, RADV) | 720p | 30-32 | 31-33 ms |
> | 11/11/2026 | GTX 1650 SUPER (Windows) | 1080p | ~24 | ~41 ms |
> | 09/11/2026 | GTX 1050 Ti (Windows) | 1080p | 22-24 | 42-45 ms |
> 
> 
> ## Playing
> 
> > **Stuck or have a question?** Search the [wiki](https://github.com/adriadam10/mkw-recomp/wiki) first: installation,
> > settings, controls, [known errors by their log line](https://github.com/adriadam10/mkw-recomp/wiki/Troubleshooting)
> > and a [FAQ](https://github.com/adriadam10/mkw-recomp/wiki/FAQ).
> 
> 1. Dump Mario Kart World 1.0.0 or 1.8.0 from your Switch 2 (`exefs/` and `romfs/`, decrypted; 1.8.0 with the update
>    merged into the base game's RomFS), or the same dump packed as one `.nup` or `.nx` file.
> 2. Download the launcher for your system from [Releases](https://github.com/adriadam10/mkw-recomp/releases): on Linux
>    the `.AppImage` (`-aarch64` on ARM; the default game folder is `~/.local/share/mkw-recomp`; glibc 2.31 or newer: Debian 11,
>    Ubuntu 20.04, SteamOS and later), on Windows the `.zip`, unpacked into a folder. Either needs about 30 GB free.
> 3. Run the AppImage (`chmod +x` first) or `mkw.exe`, open **Game files**, optionally use **Choose game folder** to select
>    where the game will be installed (or an existing installation), then point it at your dump (**Choose folder** or
>    **Choose .nup or .nx file**) and press **Set up**. The launcher remembers the installation folder; the compiled
>    game, prepared files, saves, settings and caches live there. Selecting another folder keeps existing files in place.
>    The first setup takes a while (it compiles the whole game and downloads NVIDIA's `nvdisasm` and `ptxas`, 84 MB on
>    Linux and 126 MB on Windows, to describe the shader encoding on your machine); after that, **Play**.
> 4. When a newer release is out, the start screen offers it (**Update to vX**): it downloads it, checks it, replaces
>    the program and sets up again only what changed. **Settings → Menu → Check for updates** turns the check off.
> 
> Requirements: x86-64 CPU with AVX2 (or, on Linux, AArch64 with ARMv8.2: LSE, FP16, RCpc, DotProd,
> CRC32), a GPU with Vulkan 1.3 (`VK_EXT_mesh_shader` recommended; without it, task and mesh shaders run as compute),
> 16 GB of R

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/adriadam10/mkw-recomp)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "adriadam10--mkw-recomp"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C" AND file.name != "adriadam10--mkw-recomp" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W47" AND file.name != "adriadam10--mkw-recomp"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/adriadam10--mkw-recomp");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "adriadam10--mkw-recomp" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "adriadam10" AND file.name != "adriadam10--mkw-recomp"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/adriadam10--mkw-recomp");
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
> const me = dv.page("Repos/adriadam10--mkw-recomp");
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
> const me = dv.page("Repos/adriadam10--mkw-recomp");
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
> const me = dv.page("Repos/adriadam10--mkw-recomp");
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
> const me = dv.page("Repos/adriadam10--mkw-recomp");
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

> **2026-11-16** — 首次收錄
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

- [[2026-11-16|2026-11-16]] — 首次收錄，1.3k stars
