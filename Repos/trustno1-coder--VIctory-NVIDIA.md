---
repo: trustno1-coder/VIctory-NVIDIA
url: https://github.com/trustno1-coder/VIctory-NVIDIA
owner: trustno1-coder
owner_type: User
language: Rust
license: GPL-3.0
description: "VIctory (Xbox Series compatibility layer) tuned for NVIDIA RTX cards: Series X at 2560x1440 with DLSS, about 26-30 fps on an RTX 5070, DLSS frame generation 2x-6x, an F1 settings menu and F3 stats panel, open water without dark blocks. Built on many repos combined into one. No game files or NVIDIA files included."
homepage: ""
stars: 4545
stars_per_day: 2273
forks: 1619
open_issues: 562
created: 2026-11-25
pushed_at: 2026-11-28
first_seen: 2026-11-28
week: "2026-W48"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v2026.11.28.01"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-28
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-12-01"
contributor_count: 5
engagement: "high"
issue_close_rate: 21
repo_size_kb: 2406
readme_length: 9984
bus_factor: 2
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-28"
star_history: "2026-11-28:4545"
tags:
  - github
  - "category/other"
  - "lang/rust"
  - "topic/compatibility_layer"
  - "topic/directx_12"
  - "topic/dlss"
  - "topic/frame_generation"
  - "topic/nvidia"
aliases:
  - "VIctory-NVIDIA"
  - "trustno1-coder/VIctory-NVIDIA"
---

# VIctory-NVIDIA

**4.5k** stars · **2.3k** stars/天 · 建立 2 天前 · Rust · GPL-3.0

```dataviewjs
const me = dv.page("Repos/trustno1-coder--VIctory-NVIDIA");
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

`v2026.11.28.01`

`compatibility-layer` `directx-12` `dlss` `frame-generation` `nvidia` `rust`

> [!summary] 一句話摘要
> VIctory (Xbox Series compatibility layer) tuned for NVIDIA RTX cards: Series X at 2560x1440 with DLSS, about 26-30 fps on an RTX 5070, DLSS frame generation 2x-6x, an F1 settings menu and F3 stats panel, open water without dark blocks. Built on many repos combined into one. No game files or NVIDIA files included.

## 專案簡介

VIctory (Xbox Series compatibility layer) tuned for NVIDIA RTX cards: Series X at 2560x1440 with DLSS, about 26-30 fps on an RTX 5070, DLSS frame generation 2x-6x, an F1 settings menu and F3 stats panel, open water without dark blocks. Built on many repos combined into one. No game files or NVIDIA files included.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/trustno1-coder--VIctory-NVIDIA");
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
> const me = dv.page("Repos/trustno1-coder--VIctory-NVIDIA");
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
| Forks | 1.6k |
| Open Issues | 562 |
| Issue 解決率 | 21% (146 closed) |
| 最後推送 | 2026-11-28 |
| 建立日期 | 2026-11-25 |
| Repo 大小 | 2.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/trustno1-coder/VIctory-NVIDIA) |
| Topics | `compatibility-layer` `directx-12` `dlss` `frame-generation` `nvidia` `rust` |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members` `exclude` `version` `edition` `rust-version` `license` `publish` `victory-core` `victory-pe` `victory-loader` `victory-hle` `victory-gpu` `victory-shader` `victory-formats`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 99
>     "PowerShell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Marvisak](https://github.com/Marvisak) | 174 |
> | [@readmet3xt-lab](https://github.com/readmet3xt-lab) | 91 |
> | [@trustno1-coder](https://github.com/trustno1-coder) | 61 |
> | [@fxceless](https://github.com/fxceless) | 36 |
> | [@Dufftwt](https://github.com/Dufftwt) | 32 |

**最新版本**：v2026.11.28.01 (2026-11-28)

> [!info]- Release Notes
> ## victory.exe v2026.11.28.01
> 
> Put `victory.exe` beside `game_scarlett_master.exe` and double-click it, as before.
> 
> ### New
> - **Series S picture size in F1.** With CONSOLE set to Series S, the menu shows **SERIES S PICTURE** in place of SERIES X PICTURE: **1920X1080 (DLAA)**, **1280X720 (THE GAME)**, **1113X626** or **960X540 (FASTEST)**. The picture on screen stays 1920x1080.
>   - The size is DLSS's mode: 1080 is DLAA, 720 Quality, 626 Balanced, 540 Performance. Changing either row changes the other to match.
>   - Sizes other than 720 need DLSS. With DLSS off, the game renders at its own 720.
>   - It applies at the next start (SAVE AND RESTART NOW).
> 
> ### Changed
> - **Memory use:** texture slots no longer in use are given back, old command allocators are replaced, and small buffers share card memory. This lowers RAM and VRAM use. It's on by default again. `VICTORY_SLOT_EVICT=0`, `VICTORY_ALLOCATOR_TRIM=0` and `VICTORY_BUDGET_PACK=0` turn the three parts off.
> 
> Everything from v2026.11.27.10 is still in.
> 
> SHA-256 of victory.exe: `49cebc4fac51cede9c8cca151c37f34c82d4733aa95093ab3bea9af9d60fbb33`

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-27 ~ 2026-11-28）
> **活躍天數** 2 天 · **最新 commit** Series S picture row in F1 down to 540p, memory stack on by default

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#877](https://github.com/trustno1-coder/VIctory-NVIDIA/issues/877) | ✅ 🎮 [GUIDE] GTA 6 PC Port — Download & Guide | 5 | 14 |
> | [#833](https://github.com/trustno1-coder/VIctory-NVIDIA/issues/833) | [Profiling / 12GB VRAM] Breakdown of ~70ms SUBMIT BUSY on RT | 4 | 2 |
> | [#564](https://github.com/trustno1-coder/VIctory-NVIDIA/issues/564) | What about the game | 4 | 3 |
> | [#438](https://github.com/trustno1-coder/VIctory-NVIDIA/issues/438) | Ultrawide monitors | 3 | 5 |

## README 摘錄

> [!info]- 展開查看原文 README
> # VIctory on NVIDIA
> 
> > **Reporting a problem?** Please attach **both** logs from the run that went
> > wrong. Without them we can only guess. Paste `%LOCALAPPDATA%` into the address
> > bar of File Explorer to get there.
> >
> > 1. **The play log**, in `%LOCALAPPDATA%\victory\logs\`: the newest
> >    `victory-nvidia-play---.log` (from `victory.exe`) or
> >    `victory-nvidia--.log` (from the script launcher). The window
> >    shows its path at the start, on the line `Log: ...`.
> > 2. **The crash log**: `%LOCALAPPDATA%\VIctory\data\7952987A\crashes.log`, and,
> >    if there is one from that run, the newest `victory---.crash.log`
> >    in `%LOCALAPPDATA%\VIctory\data\7952987A\temp\`.
> >
> > Also say which GPU, Windows version (10 or 11) and release you used.
> 
> 
> ## Quick start: how to run it
> 
> **The easy way: one file, nothing to build**
> 
> 1. Download `victory.exe` from the
>    [latest release](https://github.com/trustno1-coder/VIctory-NVIDIA/releases/latest).
> 2. Put it into the folder of **your own dump** of the title's Xbox Series
>    build v1.0.2.1, next to `game_scarlett_master.exe`.
> 3. Double-click it. Windows may say the publisher is unknown (the file is not
>    signed): "More info", then "Run anyway".
> 
> - The first start asks once whether to download NVIDIA's DLSS and frame
>   generation files (about 70 MB) from NVIDIA's own GitHub. They are NVIDIA's
>   and are not part of this program; say no and the game still runs, with its
>   own upscaling and no frame generation.
> - Settings, saves, caches, logs and NVIDIA's and AMD's files are kept under
>   `%LOCALAPPDATA%\victory`. The one exception is on Windows 10. Its own Direct3D 12
>   stops at shader model 6.5, and the game's translated shaders need 6.6. Without
>   6.6 the game shows a black screen and closes within seconds. So the first start
>   there offers to fetch Microsoft's newer Direct3D 12 runtime (the D3D12 Agility
>   SDK, `D3D12Core.dll`, about 22 MB from nuget.org). It goes into a `D3D12`
>   folder beside `victory.exe`. `victory.exe get-d3d12` does the same by hand.
>   The file is checked against Microsoft's signature and the tested SHA-256.
>   Windows 11 keeps using its own runtime. A `D3D12` folder that is already
>   there, for example from a repack or another guide (1.618, 1.620), is used
>   at the version of its `D3D12Core.dll`. Before v2026.11.27.6 that version
>   had to be 1.614, or Windows refused Direct3D 12 with `0x887E0003` (the
>   fix in .4 and .5 did not take effect).
> - C: drive full? Set `VICTORY_HOME` to another folder, once, in a command
>   prompt: `setx VICTORY_HOME D:\victory`. Then start victory.exe from a new
>   window. Settings, saves, caches, logs and the downloads all go there
>   instead of `%LOCALAPPDATA%\victory`. To keep what you have, move that
>   folder's contents there first.
> - You need Windows 10 or 11, 32 GB of RAM or more, an SSD and an NVIDIA
>   GeForce RTX card with a recent driver. This repository and its releases
>   contain no game files.
> - **The first start of each new version restarts by itself once.** A new
>   `victory.exe` runs at about 14 fps on its first start, and normally from then
>   on. So the first start plays about 20 seconds, says so at the top of the
>   picture, and starts the game again. It doesn't happen again for that version
>   (a mark is kept in `%LOCALAPPDATA%\victory\warmed`).
> - RTX 20 and 30 cards can try DLSS frame generation with the
>   [MFG Unlocker](https://github.com/dashdogy/MFG-Unlocker) mod (not ours, and
>   not tested with this fork, which was only run on an RTX 50). It is an option,
>   off by default: **F1, MFG UNLOCKER, ON**, then restart. On, the next start
>   downloads it by itself from the mod's own GitHub release (v1.7.2, about 5 MB,
>   checked against the SHA-256 its author published) into
>   `%LOCALAPPDATA%\victory\mfg-unlocker`, and every start loads it. Nothing is
>   renamed or copied. On an RTX 20 or 30 the first start also asks once (No unless
>   you type y). `victory.exe get-mfg` downloads it by hand. The mod writes its own
>   `RTXMFG-...` logs and settings beside `victory.exe`, and Backspace opens its
>   menu. The start's notice says "UNLOCKED BY A MOD" and the log says it was
>   loaded. If the game crashes or frame generation fails, turn it off in F1 (or
>   add `VICTORY_MFG_UNLOCKER=` to `%LOCALAPPDATA%\victory\victory-settings.txt`).
>   FSR 3 frame generation (2x) is the supported way on those cards. A
>   `winmm.dll` copy of the mod beside `victory.exe` still works too.
> 
> **In the game**
> 
> - **F1** brings up the settings menu (arrow keys pick and change, Enter does
>   it): DLSS, frame generation, frame rate cap and more.
> - **F3** shows the stats panel (frame rate, frame generation, draws, GPU and
>   memory numbers).
> 
> **Building it yourself instead**
> 
> Install [Rust](https://rustup.rs) and the
> [Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/)
> with "Desktop development with C++", then in PowerShell:
> 
> ```powershell
> git clone https://github.com/trustno1-coder/VIctory-NVIDIA
> cd VIctory-NVIDIA
> .\Get-NVIDIA-DLSS.cmd
> powershell -ExecutionPolicy Bypass -File scripts\play-nvidia.ps1 -Exe 'D:\Games\MyDump\game_scarlett_master.exe'
> ```
> 
> Put the path to **your** `game_scarlett_master.exe` in the last line. The
> first start builds the layer, which takes a few minutes.
> 
> Options, requirements in full and the details are under
> [How to run it](#how-to-run-it).
> 
> A fork of [VIctory](https://github.com/Marvisak/VIctory), a compatibility layer
> that runs an Xbox Series title natively on Windows from files **you** supply,
> tuned for **NVIDIA RTX** cards.
> 
> > **This repository contains no game files, code or assets.** You need your
> > own legally obtained copy of the title. It is not affiliated with or endorsed
> > by the title's developer or publisher, nor by NVIDIA. See
> > [docs/asset-policy.md](docs/asset-policy.md).
> 
> 
> ## How to run it
> 
> You need Windows 10 or 11 (x64), a CPU with AVX2, 32 GB of RAM or more, an
> SSD, an NVIDIA GeForce RTX card with a recent driver (RTX 40 or later for frame
> generation, with hardware-accelerated GPU scheduling on; more than 2x needs an
> RTX 50), [Rust](https://rustup.rs) (the toolchain is pinned), the Visual Studio
> Build Tools with "Desktop development with C++", and **your own dump** of the
> title's Xbox Series build v1.0.2.1 (the folder with
> `game_scarlett_master.exe`).
> 
> ```powershell
> git clone https://github.com/trustno1-coder/VIctory-NVIDIA
> cd VIctory-NVIDIA
> copy victory.example.toml victory.toml      # then set game_dir to your dump's folder, outside this one
> .\Get-NVIDIA-DLSS.cmd                        # once: NVIDIA's DLSS and frame generation files, about 70 MB
> scripts\play-nvidia.ps1 -Exe 'D:\Games\MyDump\game_scarlett_master.exe'
> ```
> 
> The first start builds the layer (a few minutes). `Get-NVIDIA-DLSS.cmd` gets
> NVIDIA's files from
> [NVIDIA-RTX/Streamline](https://github.com/NVIDIA-RTX/Streamline) into
> `nvidia-sdk\` (git-ignored). They are NVIDIA's, under NVIDIA's licences, which
> are saved beside them; this repository does not carry them and may not. Nothing
> is downloaded unless you run that file; `VICTORY_STREAMLINE_DIR` names another
> folder if you have the Streamline SDK already.
> 
> `scripts\play-nvidia.ps1` is `scripts\play-foxhound.ps1` under the name this
> fork has always had; its options:
> 
> | Option | What |
> |---|---|
> | *(none)* | Series X profile, 2560x1440, DLSS Quality, no frame rate cap, frame generation ready but off |
> | `-FrameGen`, `-FrameGenX 4` | frame generation on from the start, 2 to 6 frames shown for each one rendered |
> | `-Dlss off` / `dlaa` / `balanced` / `performance` | the title's own upscaling, or another DLSS mode |
> | `-Fps 60` | a frame rate cap (30 is the title's own) |
> | `-SeriesS` | the Series S profile: 1280x720 inside, faster, softer |
> | `-Res 1080to1440` / `4k` | scene at 1080p upscaled by the title / the stock 3840x2160 output |
> | `-FrameGenReady` | frame generation made ready but off, so the F1 menu can switch it while playing (costs frame rate: ready, frames go through Streamline's swap chain; without

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[4lwayz--portwatch-vi|4lwayz/portwatch-vi]] · [[852wa--JIZURA|852wa/JIZURA]] · [[AFK-surf--xnulinux|AFK-surf/xnulinux]] · [[ARahim3--DigUp|ARahim3/DigUp]]

[GitHub](https://github.com/trustno1-coder/VIctory-NVIDIA)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "trustno1-coder--VIctory-NVIDIA"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "trustno1-coder--VIctory-NVIDIA" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W48" AND file.name != "trustno1-coder--VIctory-NVIDIA"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/trustno1-coder--VIctory-NVIDIA");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "trustno1-coder--VIctory-NVIDIA" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "trustno1-coder" AND file.name != "trustno1-coder--VIctory-NVIDIA"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/trustno1-coder--VIctory-NVIDIA");
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
> const me = dv.page("Repos/trustno1-coder--VIctory-NVIDIA");
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
> const me = dv.page("Repos/trustno1-coder--VIctory-NVIDIA");
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
> const me = dv.page("Repos/trustno1-coder--VIctory-NVIDIA");
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
> const me = dv.page("Repos/trustno1-coder--VIctory-NVIDIA");
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

> **2026-11-28** — 首次收錄
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

- [[2026-11-28|2026-11-28]] — 首次收錄，4.5k stars
