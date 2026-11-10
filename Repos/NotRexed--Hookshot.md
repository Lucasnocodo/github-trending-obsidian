---
repo: NotRexed/Hookshot
url: https://github.com/NotRexed/Hookshot
owner: NotRexed
owner_type: User
language: C++
license: GPL-3.0
description: "A Native Recompilation Of The Legend Of Zelda: Ocarina Of Time Nintendo Switch 2 Remake"
homepage: ""
stars: 5534
stars_per_day: 1384
forks: 495
open_issues: 123
created: 2026-11-05
pushed_at: 2026-11-10
first_seen: 2026-11-08
week: "2026-W46"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "no-visual-studio"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-08
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-11-13"
contributor_count: 5
engagement: "low"
issue_close_rate: 55
repo_size_kb: 3558
readme_length: 9710
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-08"
star_history: "2026-11-08:2087,2026-11-09:3437,2026-11-10:5534"
tags:
  - github
  - "category/other"
  - "lang/c++"
aliases:
  - "Hookshot"
  - "NotRexed/Hookshot"
---

# Hookshot

**2.1k** stars · **1.0k** stars/天 · 建立 2 天前 · C++ · GPL-3.0

```dataviewjs
const me = dv.page("Repos/NotRexed--Hookshot");
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

`no-visual-studio`

> [!summary] 一句話摘要
> A Native Recompilation Of The Legend Of Zelda: Ocarina Of Time Nintendo Switch 2 Remake

## 專案簡介

A Native Recompilation Of The Legend Of Zelda: Ocarina Of Time Nintendo Switch 2 Remake

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/NotRexed--Hookshot");
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
> const me = dv.page("Repos/NotRexed--Hookshot");
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
| Forks | 196 |
| Open Issues | 180 |
| Issue 解決率 | 55% (223 closed) |
| 最後推送 | 2026-11-08 |
| 建立日期 | 2026-11-05 |
| Repo 大小 | 3.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NotRexed/Hookshot) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C++" : 66
>     "C" : 25
>     "Python" : 8
>     "C#" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@NotRexed](https://github.com/NotRexed) | 108 |
> | [@monsterlag](https://github.com/monsterlag) | 25 |
> | [@klimovich008](https://github.com/klimovich008) | 19 |
> | [@shayderrr](https://github.com/shayderrr) | 16 |
> | [@gab9281](https://github.com/gab9281) | 8 |

**最新版本**：no-visual-studio — No Visual Studio needed, fewer flashes, controls, faster (2026-11-08)

> [!info]- Release Notes
> **Build again with this Hookshot Builder** (Windows: `HookshotBuilder.zip`; Linux: the `.AppImage` below, added by the build a few minutes after this release). Your saves and settings stay where they are.
> 
> ## No more Visual Studio or Windows SDK
> The builder now brings its own compiler (llvm-mingw, as the TotK port does). You no longer need Visual Studio, the Build Tools or the Windows SDK: unzip, pick your game files, build. "Windows SDK not found" is gone.
> 
> ## Fixes
> - **Flicker and white flashes**: CPU reads of GPU results now wait for the work that writes them (EvilBoyce's fix, #296), and the VRAM mirrors no longer overwrite the GPU query results that decide which passes run (fewer one-frame dark frames).
> - **Missing geometry on every GPU**: 30 mesh shaders that failed to translate (`LoadGlobalS16`, #351) now work.
> - **CPUs without AVX2** (older Xeons, Ivy Bridge): the game is built for your CPU and no longer crashes at start (#363).
> - **User folders with accents** (e.g. `Magalhães`) no longer break the build (#230).
> - **Movie thread crash** when memory runs short (#342).
> - **Black movies on Windows**: if Windows has no AV1 decoder, the game now tells you and opens the free "AV1 Video Extension" page (#380).
> - **Incomplete .nup files** are named as such right away, instead of failing late with "short read" (Linux and Windows).
> - **Linux on AMD (RADV)**: the renderer's submits are batched (#413, thanks myylkn): ~10 fps -> 30-50 fps on a Radeon 8060S.
> 
> ## Faster
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-08 ~ 2026-11-08）
> **活躍天數** 1 天 · **最新 commit** Revert the Hookshot-Builder.exe name: the setup stays HookshotBuilder.exe

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#481](https://github.com/NotRexed/Hookshot/issues/481) | Add semver `enhancement` | 3 | 0 |
> | [#19](https://github.com/NotRexed/Hookshot/issues/19) | Feature request: DLSS | 3 | 0 |
> | [#421](https://github.com/NotRexed/Hookshot/issues/421) | You cant just merge every god damn thing everywhere. This is `enhancement` | 2 | 6 |
> | [#361](https://github.com/NotRexed/Hookshot/issues/361) | Corrupted rendering (noise / psychedelic colours) on AMD RAD `enhancement` | 2 | 7 |
> | [#145](https://github.com/NotRexed/Hookshot/issues/145) | weird darkened bars on the left and right and brightness fli | 2 | 15 |

## README 摘錄

> [!info]- 展開查看原文 README
> Hookshot
>   
> 
> The Legend of Zelda: Ocarina of Time (Nintendo Switch 2) running natively on Windows & Linux, with no emulator.
> 
>   Status |
>   How to build |
>   In-game menu |
>   How it works |
>   Want to help? |
>   Credits |
>   License
> 
> Hookshot is a static recompilation. The game's code is translated to C and compiled into a Windows program, the
> console's system software is reimplemented, and the Switch 2 graphics are rebuilt on Vulkan. All of this happens
> **on your PC, from your own copy of the game**.
> 
> Discord: https://discord.gg/DVQQJphbBf
> 
> > [!IMPORTANT]
> > This repository **does not contain the game, keys or an executable**, and it does not explain how to get them. You
> > need your own copy. Everything the build creates (`hookshot.exe`, the generated code, the shader caches and your
> > saves) comes from your game and stays on your PC. Never share those files.
> 
> 
> ## How to build
> 
> The game does not come ready-made: it is built on your PC from your copy.
> 
> **With Hookshot Builder, the easiest:**
> 
> 1. Download the HookshotBuilder zip from the Releases page, extract it, and run `HookshotBuilder.exe`. Keep the `tools`
>    folder beside it.
> 2. Choose your game's `.nup`, or your `romfs` and `exefs` folders. The builder checks that it is the right version.
> 3. Choose a language and a folder for the finished game, and start the build.
> 4. When it finishes, open `hookshot.exe` in that folder.
> 
> **From the command line:**
> 
> ```powershell
> python -I nx2/make_game.py --nup "C:\path\your-game.nup" --out "C:\Games\Hookshot" --language en-US
> ```
> 
> Or with folders:
> 
> ```powershell
> python -I nx2/make_game.py --romfs "C:\path\romfs" --exefs "C:\path\exefs" --out "C:\Games\Hookshot" --language en-US
> ```
> 
> Add `--check` with your `.nup` or `--exefs` to only check the game's version. It builds nothing.
> 
> A build takes about 40 minutes, and you can use your PC in the meantime.
> 
> 
> ## Project status
> 
> Experimental. It has only been tested on **one PC** (Ryzen 5 7600X, RTX 4060 Ti 16 GB), mostly in the area at the start
> of the game.
> 
> | What | Status |
> |---|---|
> | Kokiri Forest: reaching gameplay and walking around | ✅ Works |
> | Sound, controller, keyboard and saves | ✅ Works |
> | In-game menu, frame generation and upscaling | ✅ Works |
> | Black flashes while moving | ✅ Fixed in testing, more play needed |
> | Performance without frame generation | ⚠️ About 50 fps walking, not yet a steady 60 |
> | Models with missing pieces (doors, fences, parts of trees) | ✅ Fixed where tested, more play needed |
> | Stutter when entering new areas | ⚠️ Still happens, mostly the first time |
> | Ultrawide | ⚠️ The 3D keeps its shape, but the HUD is stretched and the picture is softer |
> | Hyrule Field and the rest of the game | ❓ Not tested yet |
> | AMD and Intel cards | ❓ Never tested |
> 
> 
> ### On Linux
> 
> 1. Download `Hookshot--x86_64.AppImage` from the Releases page (or the Linux AppImage workflow's artifact),
>    make it executable (`chmod +x`) and start it. It is Hookshot Builder with everything it needs inside: the compiler,
>    the libraries and the Vulkan renderer. Nothing else has to be installed.
> 2. Choose your `.nup` (or your `romfs` and `exefs` folders), a language and a folder for the game, and build.
> 3. When it finishes, press Play. The game is also added to your applications menu. The same AppImage starts that
>    game without opening the builder: `./Hookshot--x86_64.AppImage --play`, or `--play ~/Games/Hookshot`
>    for a different folder. The game itself is `hookshot` in the folder you chose: it runs without the AppImage.
> 
> From the command line: `./Hookshot--x86_64.AppImage --cli --nup ~/your-game.nup --out ~/Games/Hookshot`
> (the same options as `make_game.py`).
> 
> You need a 64-bit x86 PC with glibc 2.35 or newer (Ubuntu 22.04, Debian 12, Fedora, Arch, SteamOS ...), a Vulkan 1.3
> driver with mesh shaders (Mesa or NVIDIA), and the same memory and disk space as on Windows. The build's own files go
> to `~/.cache/hookshot-builder`. Saves go in `$XDG_DATA_HOME/hookshot` (`~/.local/share/hookshot`). A `user` folder
> beside the game from an earlier build is moved there once. `HOOKSHOT_JOBS` sets how many files compile at once.
> Switches to test (`RX_VK_NOOPT=1` and the others) go in `hookshot_env.txt` beside the game, one `NAME=VALUE` a line,
> as on Windows.
> 
> `RX_VK_MOVIE_UPSCALE=linear` replaces the movie's neural upscale with the existing linear path. The default `auto` behavior
> keeps the networks and falls back only when movie GPU time exceeds the existing 40 ms trigger. This switch does not change
> the gameplay upscaler and can make movie images look softer. It works on Windows and Linux; `RX_VK_NETWORK_KEEP=all` takes
> precedence and keeps the movie networks enabled.
> 
> Building it yourself without the AppImage: `clang` and `lld` (LLVM 23 or newer reads the play profile; an older one
> builds without it), Python 3 with `lz4`, `numpy`, `capstone`, `unicorn` and `zstandard`, FFmpeg's development files
> (with dav1d, for the movies) and SDL2. Then `python -I nx2/make_game.py ...` as above, with `RX_CPM` pointing at a folder
> with Vulkan-Headers, SPIRV-Headers and VulkanMemoryAllocator in CPM's layout (`scripts/linux/deps.sh` makes one).
> `scripts/linux/deps.sh` and `scripts/linux/appimage.sh` make the AppImage.
> 
> 
> ### Updating to a newer release
> 
> A new release is not a patch to your game folder: the game is built again from your copy, with the new code. Your
> saves and settings are kept. What changed in each release is in [changelog.txt](changelog.txt).
> 
> 1. Close the game.
> 2. To be safe, copy your saves somewhere first: the `user` folder beside `hookshot.exe` on Windows, or
>    `~/.local/share/hookshot` on Linux.
> 3. Get the new release:
>    - **Hookshot Builder:** download the new HookshotBuilder zip and extract it to a new folder (with its `tools`
>      folder). The old builder folder can then be deleted.
>    - **Linux:** download the new AppImage and make it executable. The old one can be deleted, the game is not removed with it.
>    - **Command line:** `git pull` in your clone, and take the `tools` folder's contents (see
>      [What you need](#what-you-need)) from the new HookshotBuilder zip, as they can change between releases.
> 4. Build again with the same `.nup` (or `romfs` and `exefs` folders) and **the same game folder** as before. With the
>    same `.nup`, the game is not read again, but the translation and the compile still run, so it takes about as long
>    as the first build.
> 5. Start the game as before.
> 
> What a new build keeps and what it replaces in the game folder:
> 
> | Kept | Replaced |
> |---|---|
> | Your saves (`user`, or `~/.local/share/hookshot` on Linux) | `hookshot.exe` (`hookshot` on Linux) and its files |
> | `hookshot_options.ini`, the in-game menu's choices | `image.bin` and the shader list |
> | `hookshot_env.txt` | `language.txt`, written again with the language you choose |
> 
> 
> ### What you need
> 
> - Nothing to install for the build itself: Hookshot Builder brings its own compiler ([llvm-mingw](https://github.com/mstorsjo/llvm-mingw),
>   as TotK Recomp does), Python and libraries. Visual Studio and the Windows SDK are no longer needed.
> - 64-bit Windows 10 or 11.
> - A graphics card with Vulkan 1.3 and mesh shaders, with an up-to-date driver. Only NVIDIA has been tested.
> - 16 GB of RAM or more. A run uses about 10 GB.
> - About 60 GB free while building.
> - **Your copy of the game at the supported version:** program `0400486024DEC000`, update v131072, build `e0f3ccfa`.
>   Other versions do not work.
> 
> To build from the command line you also need:
> 
> - Python 3 with `lz4`, `numpy`, `capstone`, `unicorn` and `zstandard`:
>   `pip install lz4 numpy capstone "unicorn>=2.1,Insert in game, or on a controller the Home button (or Select and Start together). Everything is off
> by default, and your choices are saved in `hookshot_options.ini` beside the game. On a controller the D-pad chooses
> and changes, the bottom face button changes too, and the right one closes the menu.
> 
> | Option | Choices |
> |---|---|
> | Quality preset | Custom, Minimum (4GB), Low (

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/NotRexed/Hookshot)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "NotRexed--Hookshot"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C++" AND file.name != "NotRexed--Hookshot" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W46" AND file.name != "NotRexed--Hookshot"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/NotRexed--Hookshot");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "NotRexed--Hookshot" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "NotRexed" AND file.name != "NotRexed--Hookshot"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/NotRexed--Hookshot");
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
> const me = dv.page("Repos/NotRexed--Hookshot");
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
> const me = dv.page("Repos/NotRexed--Hookshot");
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
> const me = dv.page("Repos/NotRexed--Hookshot");
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
> const me = dv.page("Repos/NotRexed--Hookshot");
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

> **2026-11-08** — 首次收錄
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

- [[2026-11-10|2026-11-10]] — 再次上榜，5.5k stars
- [[2026-11-09|2026-11-09]] — 再次上榜，3.4k stars
- [[2026-11-08|2026-11-08]] — 首次收錄，2.1k stars
