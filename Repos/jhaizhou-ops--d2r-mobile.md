---
repo: jhaizhou-ops/d2r-mobile
url: https://github.com/jhaizhou-ops/d2r-mobile
owner: jhaizhou-ops
owner_type: User
language: C
license: MIT
description: "Open-source iOS / macOS compatibility layer for Diablo II: Resurrected with the Reign of the Warlock expansion. Runs your own Switch copy natively on iPhone, iPad and Mac — full touch controls, 60 fps, new endgame modes. Bring your own game files. 开源的《暗黑破坏神 II：狱火重生》术士君临 iOS / macOS 兼容层"
homepage: ""
stars: 3929
stars_per_day: 655
forks: 1098
open_issues: 32
created: 2026-10-12
pushed_at: 2026-10-17
first_seen: 2026-10-15
week: "2026-W42"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v1.0.15"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-15
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-10-22"
contributor_count: 1
engagement: "medium"
issue_close_rate: 57
repo_size_kb: 5331
readme_length: 9924
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-15"
star_history: "2026-10-15:2393,2026-10-16:3280,2026-10-17:3565,2026-10-18:3741,2026-10-19:3929"
tags:
  - github
  - "category/other"
  - "lang/c"
  - "topic/compatibility_layer"
  - "topic/diablo_2_resurrected"
  - "topic/diablo2"
  - "topic/game_port"
  - "topic/ios"
aliases:
  - "d2r-mobile"
  - "jhaizhou-ops/d2r-mobile"
---

# d2r-mobile

**2.4k** stars · **1.2k** stars/天 · 建立 2 天前 · C · MIT

```dataviewjs
const me = dv.page("Repos/jhaizhou-ops--d2r-mobile");
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

`個人專案` `v1.0.15`

`compatibility-layer` `diablo-2-resurrected` `diablo2` `game-port` `ios` `ipad` `iphone` `mac` `macos` `metal` `reign-of-the-warlock`

> [!summary] 一句話摘要
> Open-source iOS / macOS compatibility layer for Diablo II: Resurrected with the Reign of the Warlock expansion. Runs your own Switch copy natively on iPhone, iPad and Mac — full touch controls, 60 fps, new endgame modes. Bring your own game files. 开源的《暗黑破坏神 II：狱火重生》术士君临 iOS / macOS 兼容层

## 專案簡介

Open-source iOS / macOS compatibility layer for Diablo II: Resurrected with the Reign of the Warlock expansion. Runs your own Switch copy natively on iPhone, iPad and Mac — full touch controls, 60 fps, new endgame modes. Bring your own game files. 开源的《暗黑破坏神 II：狱火重生》术士君临 iOS / macOS 兼容层

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/jhaizhou-ops--d2r-mobile");
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
> const me = dv.page("Repos/jhaizhou-ops--d2r-mobile");
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
| Forks | 758 |
| Open Issues | 17 |
| Issue 解決率 | 57% (23 closed) |
| 最後推送 | 2026-10-15 |
| 建立日期 | 2026-10-12 |
| Repo 大小 | 5.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jhaizhou-ops/d2r-mobile) |
| Topics | `compatibility-layer` `diablo-2-resurrected` `diablo2` `game-port` `ios` `ipad` `iphone` `mac` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C" : 52
>     "Python" : 20
>     "Objective-C" : 19
>     "Shell" : 6
>     "Assembly" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jhaizhou-ops](https://github.com/jhaizhou-ops) | 41 |

**最新版本**：v1.0.15 (2026-10-14)

> [!info]- Release Notes
> ## English
> 
> The shell is now clearly build input — it is a `.zip`, not something you install — and the app checks itself at launch: an incomplete package or an unsupported device gets a clear message instead of a crash.
> 
> | Asset | For |
> |---|---|
> | `D2RMobile-shell-build-input.zip` | **Build input, not installable.** iOS 26 and later |
> | `D2RMobile-shell-ios18-build-input.zip` | **Build input, not installable.** iOS 18 – 25 |
> 
> Make your install package from it with `d2rm_pack.py` ([docs/NO_XCODE.md](https://github.com/jhaizhou-ops/d2r-mobile/blob/main/docs/NO_XCODE.md), step 1), using the source of this same release, and install the package that step writes. Moving to a new release always means redoing step 1; the resource archives already on your phone stay where they are. The rewriter's output generation is unchanged (r44). If you build with Xcode, pull `main` and rebuild.
> 
> ### No more crashes at launch for the wrong package or device
> 
> - **Installing the shell itself** (or a package assembled from different releases) used to crash right after the resource archives were copied in, with `FATAL open …/main.fixups.tsv` in the log (#40). The app now checks the package against the shell's own list at launch; if anything is missing, or the package mixes releases, it shows "This Package Is Not Ready", names what is missing, and points you to step 1.
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-14 ~ 2026-10-15）
> **活躍天數** 2 天 · **最新 commit** README: list Apple TV 4K (community port, developer preview) in the platforms line and intro

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#53](https://github.com/jhaizhou-ops/d2r-mobile/issues/53) | Apple TV (tvOS) community port by @yinqingyan — thanks, and  | 2 | 3 |
> | [#49](https://github.com/jhaizhou-ops/d2r-mobile/issues/49) | [10150343／待定位] 进入A2后右上角小地图消失，3D场景正常 | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # D2R Mobile
> 
> **An open-source iOS / macOS compatibility layer for Diablo II: Resurrected with the Reign of the Warlock expansion.** It brings the Nintendo Switch release you bought, expansion included, to iPhone, iPad and Mac in full: the original game code runs natively, every control is rebuilt for touch, the frame rate holds at 60 fps, and you are in a game one second after the main menu. There is now a native macOS version as well (first version): on an Apple silicon Mac it starts on double-click and works with keyboard, mouse and gamepad. Apple TV 4K (3rd generation, A15) has a community port (developer preview) that has reached the character-selection screen only on its author's device; see the device table below.
> 
> This is not a tech demo that "sort of runs". It is a mobile version polished for daily play, from your first character all the way through the endgame.
> 
> Platforms: iPhone / iPad (iOS 26 and later; iOS 18 – 25 with the older-API build) · Mac (Apple silicon, macOS 26 or later; macOS 15 – 25 with the older-API build) · Apple TV 4K (3rd generation, A15; community port, developer preview) · Game version: Switch release with Reign of the Warlock, 1.0.34.0 (corresponds to PC version 3.3.94012) · English / 中文 · License: MIT · **Bring your own game files**
> 
> 中文: [README.zh-CN.md](README.zh-CN.md)
> 
>   
> 
>   
>   
> 
> | 100% | 60 fps | about 1 s | about 3.8 W |
> |:---:|:---:|:---:|:---:|
> | The original gameplay, because it is the original program | Steady, with no drops once the device warms up | From the main menu into a game | Whole-device power draw at 60 fps |
> 
> 
> ## Getting started
> 
> Both routes start with **the files of the game you bought**: the Switch release of Diablo II: Resurrected plus the Reign of the Warlock expansion, updated to 1.0.34.0 (the version the console shows; it corresponds to PC version 3.3.94012, and the directory names and tools in this repository use the latter number). This project is built for the version with that expansion; using it without the expansion is not supported and has not been verified. How to prepare them is in [docs/GAME_FILES.md](docs/GAME_FILES.md).
> 
> > This project provides only tools and an install shell that contains no game content. We do not distribute or endorse, and are not responsible for, any third party distributing game assets, game executables or install packages that contain game content. Please use only game files you legally own.
> 
> This project is implemented and verified on the Switch release 1.0.34.0 (which corresponds to PC version 3.3.94012), and by default the tools accept only that version. Community users have reported adapting other versions on their own by following the structure of this repository, and running them successfully. The rule tables are grouped by game version (in `dm/tools/patch_nso.py`, keyed by the build ID of the main program); you are welcome to contribute the version you adapted.
> 
> **Check your device first**: the "Which devices are supported" table above tells you which build to use and whether you also need a Legacy Device Pack.
> 
> | | With a Mac | Without a Mac |
> |---|---|---|
> | Computer | An Apple silicon Mac with Xcode installed | Windows / Linux / a Mac without Xcode |
> | Method | A full build from source | Download a "shell" with no game content, use the packaging tool to add your own game content, then install it with a sideloading tool |
> | Status | The main route; everything above comes from it | Works end to end on Windows, from making the package to playing on a device, and the game program produced on the two systems is byte-for-byte identical; the one step nobody has tried yet is signing with a sideloading tool — try it and tell us |
> | Instructions | The three steps below | [docs/NO_XCODE.md](docs/NO_XCODE.md) |
> 
> The Apple account used for signing: a paid developer account gives you everything; a free Apple ID works too (no iCloud save sync, and the app has to be re-signed and reinstalled every 7 days). The full list of dependencies is in [docs/DEPENDENCIES.md](docs/DEPENDENCIES.md).
> 
> 
> ## What it is, and what it is not
> 
> **It is:**
> 
> - The game's own aarch64 program, **executing directly on the device**, with no emulated CPU. iPhone and Switch use the same class of processor; only the handful of instructions that cannot run unchanged under Apple's kernel are rewritten, and every other byte of the program is left exactly as shipped. Every class, every Runeword, Terror Zones, bosses, drop rules and quest flow are identical to the original.
> - The platform services the game expects — system calls, the file system, the graphics API, audio, input — provided by a small host written for Apple platforms. The graphics API is reimplemented entirely on Apple's Metal with no emulation layer in between, and the shaders are translated offline from the game's originals.
> - A port built for phones, and taken all the way: a complete touch control scheme, edge-to-edge iPhone and true full-screen iPad display, controller support, a power saver mode, save sync, English and Chinese, and a whole set of endgame modes and quality-of-life features the original never had.
> 
> **It is not:**
> 
> - An emulator, cloud gaming, or streaming.
> - **A source of game content. It contains none and distributes none.** There is no game program, art, text, data table or shader in this repository; all of that is generated on your own machine from your own files (see [docs/GAME_FILES.md](docs/GAME_FILES.md)). What the repository does carry is the interface information we recorded to make the port work — shader interface descriptions, the graphics API function table, addresses inside the program and the like — listed item by item in [docs/DERIVED.md](docs/DERIVED.md).
> - Online. There is no multiplayer; the game runs fully offline and needs no online account.
> 
> 
> ## Battle-tested
> 
> All **44** iPhones and iPads in the closed beta — 35 devices registered for direct install (25 iPhones and 10 iPads), plus 9 TestFlight accounts with one device each — **completed Normal, Nightmare and Hell with multiple characters**, and the experience was excellent. From an iPhone 14 Pro Max with 6 GB of memory to the latest iPad Pro, not one device fell behind.
> 
> | | Models |
> |---|---|
> | iPhone | 14 Pro Max, 15, 15 Pro, 15 Pro Max, 16 Plus, 16 Pro, 16 Pro Max, 17 Pro Max and more |
> | iPad | iPad Air, iPad mini, iPad Pro 11-inch and 12.9 / 13-inch (including M2 and M4) and more |
> | Lowest model tested | **iPhone 14 Pro Max (A16, 6 GB): a flawless 60 fps** |
> 
> iPhone and iPad share a single install package.
> 
>   
>   
>   
>   
>   
> 
> 
> ## Fast, smooth, and easy on the battery
> 
> Measured on a real device (iPhone 17 Pro Max):
> 
> | Item | Reading |
> |---|---|
> | In-game frame rate | **60 fps**, steady, with no drops once the device warms up |
> | App launch | 0.15 s |
> | To the main menu | about 1 s |
> | From the main menu into a game | **about 1 s** |
> | Quick Restart, back in a game | about 1.2 s |
> | Longest frame when changing acts | about 0.1 s |
> | Whole-device power, 60 fps | **about 3.8 W** (in camp, 50% brightness): nearly 5 hours of continuous play on a full charge |
> | Whole-device power, power saver mode at 30 fps | **about 1.85 W**, about half the 60 fps figure, for about twice the battery life |
> 
> Measurement conditions: power is whole-device power measured on 2026-10-10 on an iPhone 17 Pro Max, standing in the Act I camp at 50% brightness, with 60 fps and power saver mode measured in the same scene; battery life is calculated from the measured power and the battery capacity, not by playing from full to empty. Launch and game-entry times were measured on the same model in 2026-10; frame rate and act-change readings were taken on the same model on 2026-10-12 while moving through areas and changing acts after entering a game.
> 
> The install package is only a little over 100 MB. The game resources (about 5.6 GB) are placed on the phone separately, and updating the app touches neither your saves nor the resources.
> 
> Why it is this fast: the program executes 

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/jhaizhou-ops/d2r-mobile)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "jhaizhou-ops--d2r-mobile"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C" AND file.name != "jhaizhou-ops--d2r-mobile" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W42" AND file.name != "jhaizhou-ops--d2r-mobile"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/jhaizhou-ops--d2r-mobile");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "jhaizhou-ops--d2r-mobile" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "jhaizhou-ops" AND file.name != "jhaizhou-ops--d2r-mobile"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/jhaizhou-ops--d2r-mobile");
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
> const me = dv.page("Repos/jhaizhou-ops--d2r-mobile");
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
> const me = dv.page("Repos/jhaizhou-ops--d2r-mobile");
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
> const me = dv.page("Repos/jhaizhou-ops--d2r-mobile");
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
> const me = dv.page("Repos/jhaizhou-ops--d2r-mobile");
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

> **2026-10-15** — 首次收錄
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

- [[2026-10-19|2026-10-19]] — 再次上榜，3.9k stars
- [[2026-10-18|2026-10-18]] — 再次上榜，3.7k stars
- [[2026-10-17|2026-10-17]] — 再次上榜，3.6k stars
- [[2026-10-16|2026-10-16]] — 再次上榜，3.3k stars
- [[2026-10-15|2026-10-15]] — 首次收錄，2.4k stars
