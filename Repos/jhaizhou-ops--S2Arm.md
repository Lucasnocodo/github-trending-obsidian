---
repo: jhaizhou-ops/S2Arm
url: https://github.com/jhaizhou-ops/S2Arm
owner: jhaizhou-ops
owner_type: User
language: C#
license: Apache-2.0
description: "Run your own Switch games natively on iPhone, iPad and Mac: game code rewritten to ARM64, graphics direct to Metal, one app for the whole library. Bring your own games and keys. 把你自己的 Switch 游戏原生带到 iPhone / iPad / Mac。"
homepage: "https://jhaizhou-ops.github.io/S2Arm/"
stars: 2803
stars_per_day: 561
forks: 515
open_issues: 343
created: 2026-11-08
pushed_at: 2026-11-13
first_seen: 2026-11-10
week: "2026-W46"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v0.2.2"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-10
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-11-16"
contributor_count: 5
engagement: "medium"
issue_close_rate: 20
repo_size_kb: 37050
readme_length: 6114
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-10"
star_history: "2026-11-10:2148,2026-11-11:2481,2026-11-12:2671,2026-11-13:2803"
tags:
  - github
  - "category/other"
  - "lang/c#"
  - "topic/apple_silicon"
  - "topic/arm64"
  - "topic/game_porting"
  - "topic/ios"
  - "topic/ipados"
aliases:
  - "S2Arm"
  - "jhaizhou-ops/S2Arm"
---

# S2Arm

**2.1k** stars · **1.1k** stars/天 · 建立 2 天前 · C# · Apache-2.0

```dataviewjs
const me = dv.page("Repos/jhaizhou-ops--S2Arm");
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

`v0.2.2`

`apple-silicon` `arm64` `game-porting` `ios` `ipados` `macos` `metal` `s2arm` `static-recompilation` `switch`

> [!summary] 一句話摘要
> Run your own Switch games natively on iPhone, iPad and Mac: game code rewritten to ARM64, graphics direct to Metal, one app for the whole library. Bring your own games and keys. 把你自己的 Switch 游戏原生带到 iPhone / iPad / Mac。

## 專案簡介

Run your own Switch games natively on iPhone, iPad and Mac: game code rewritten to ARM64, graphics direct to Metal, one app for the whole library. Bring your own games and keys. 把你自己的 Switch 游戏原生带到 iPhone / iPad / Mac。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/jhaizhou-ops--S2Arm");
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
> const me = dv.page("Repos/jhaizhou-ops--S2Arm");
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
| Forks | 414 |
| Open Issues | 184 |
| Issue 解決率 | 20% (47 closed) |
| 最後推送 | 2026-11-10 |
| 建立日期 | 2026-11-08 |
| 官方網站 | [Link](https://jhaizhou-ops.github.io/S2Arm/) |
| Repo 大小 | 36.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jhaizhou-ops/S2Arm) |
| Topics | `apple-silicon` `arm64` `game-porting` `ios` `ipados` `macos` `metal` `s2arm` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C#" : 41
>     "C" : 18
>     "Python" : 16
>     "Objective-C" : 10
>     "Shell" : 6
>     "Swift" : 3
>     "C++" : 2
>     "Java" : 1
>     "GLSL" : 1
>     "Makefile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jhaizhou-ops](https://github.com/jhaizhou-ops) | 582 |
> | [@n06ody](https://github.com/n06ody) | 18 |
> | [@DanielZhangyc](https://github.com/DanielZhangyc) | 13 |
> | [@Catnip202X](https://github.com/Catnip202X) | 13 |
> | [@wwmogu](https://github.com/wwmogu) | 10 |

**最新版本**：v0.2.2 (2026-11-10)

> [!info]- Release Notes
> # S2Arm v0.2.2
> 
> ## 修复
> - **Mac：出包明明成功却显示失败（#343）。** 游戏已经装好，收尾时被访达自动生成的 `.DS_Store` 文件绊了一下，整个出包被记成失败；现在修好了。同类地方一起修了：Windows 上选一个只带 `desktop.ini` / `Thumbs.db` 的文件夹建游戏库，不再误报「文件夹里已有别的文件」。
> - **手机锁屏时覆盖装可能丢档（#333）。** 覆盖装前要先备份手机上的存档；以前查不到手机上装没装过时（锁屏、断开），会被当成第一次装、跳过备份直接覆盖。现在只有手机明确回「没装过」才跳过，其它情况一律停下、提示解锁手机。同时修了锁屏时装机直接报一段原始错误、推资源包失败只报内部文件名的问题。Mac 和 Windows 都修了。
> - **同时跑两个任务时偶发失败。** 两个任务同时整理日志时会互相删掉对方正要用的目录，导致任务失败；现在修好了。
> - **装到 iPhone 后游戏库里没有游戏（#336）。** 资源包已经推上手机、但电脑没能拉起手机上的 S2Arm 去解包时（Windows 上更常见），旧版会把这款游戏藏起来，显示「0 款可玩」。现在游戏库照常显示这款，点「开始」时现场解开。遇到过这个问题的，升级后重新装一次即可，不用重新出包。
> - **自动更新失败时说清楚原因，并给出路。** 更新失败时，原因和错误码直接显示在按钮旁边，不用再把鼠标停在上面才看得到；同时多了「打开下载页」按钮。GitHub 限制访问次数时会单独提示大约几分钟后恢复，不再反复重试；网络断开或服务器临时出错会自动再试。
>   *Auto-update failures now show the reason and an error code next to the button, plus an "Open download page" button. Rate limits from GitHub are reported separately with an estimated wait.*
> - **Windows：游戏封面不显示（#330）。** 0.2.x 把游戏文件夹改成按英文名命名后，大部分游戏的封面都只显示占位图，自定义封面也一样；现在恢复正常。Mac 上存过的键位设置重开后显示成默认的同类问题一并修好。
> - **Windows：装到 iPhone 报 9401。** Windows 装机时包名里混进了大写的团队号，和 Mac 装的不是同一个包名；现在两端统一用同一个小写包名，已经装过的只差大小写的旧包名会沿用，存档不会留在另一个 App 里。
> - **Mac：出包一开始就停（#235）。** 数据目录路径里带空格时（比如默认的「Application Support」），出包前的排队记录会被读坏、整个出包停下；现在修好了。
> - **Mac：没装 Xcode 却显示已装（#109）。** 只装了命令行工具的 Mac，环境检查不再误判「Xcode 已装」，也不再给出必然失败的「一键下载」，而是明确提示需要安装 Xcode。
> - **DLC 大小显示（#141 中提到的问题）。** 每个 DLC 显示它自己的大小，「原包合计」不再把同一份文件算多次。
> 
> ## 改进
> - **出包完成页的两个按钮分开了。** 「显示 .ipa」和「打开游戏文件夹」现在是两个按钮，找不到对应文件时会说明原因，不再点了没反应。
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-10 ~ 2026-11-10）
> **活躍天數** 1 天 · **最新 commit** Merge commit '0708ced645ae1b8caadb47720ad361c56a1e1a04' into HEAD

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#394](https://github.com/jhaizhou-ops/S2Arm/issues/394) | [MK11/0100F2200C222000] iPhone 16 Pro Max (A18 Pro) / iOS 27 `area:perf` | 0 | 0 |
> | [#393](https://github.com/jhaizhou-ops/S2Arm/issues/393) | [测试] GCC 14+ 上 android/tests/vk/run.sh 红在 #968 夹具：桩头缺 ANativ `area:repo` | 0 | 1 |
> | [#392](https://github.com/jhaizhou-ops/S2Arm/issues/392) | 自动玩家：标题页背景整片轮换时，按键都被判成「画面变了」，A 永远进不了「试过没用」 `area:repo` `已知限制` | 0 | 1 |
> | [#391](https://github.com/jhaizhou-ops/S2Arm/issues/391) | [问题] iOS 档位梯子起局把 S2A_DOCKED=1 设进环境，盖掉「Switch 模式」设置；灵视异闻 FILE `area:feature` | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> **Your own Switch games, running natively on iPhone, iPad and Mac.** Game code is rewritten to native ARM64 and runs directly on the device's processor, with graphics going straight to Metal. Your whole library lives in one app, and a few clicks in the Mac or Windows launcher take a game from import to play.
> 
> Platforms: iPhone / iPad (iOS / iPadOS 18 and later) · Mac (Apple silicon, macOS 15 and later) · Build on Mac or Windows · Android / HarmonyOS coming soon · License: Apache-2.0 · **Bring your own games**
> 
> [简体中文](README.zh-CN.md) · [Download the launcher](https://jhaizhou-ops.github.io/S2Arm/) · [All releases](https://github.com/jhaizhou-ops/S2Arm/releases) · [Evidence](docs/validation/EVIDENCE.md)
> 
> 
> ## Graphical launchers, next to zero setup
> 
> There is a graphical launcher for Mac and one for Windows. On first launch the welcome page boils everything down to three steps: get this computer ready, add your keys, add your games, with a single primary button at any moment. Everything else is either bundled or fetched in one click, and you never touch a command line.
> 
> After you click Build, every stage shows its progress, elapsed and remaining time, and disk use. Several games can queue up and build one after another. [Evidence](docs/validation/EVIDENCE.md#graphical-launchers)
> 
>   
>   
> 
>   
>   
> 
> 
> ## Getting started
> 
> 1. Download the Mac or Windows launcher from the [download page](https://jhaizhou-ops.github.io/S2Arm/) and open it. Building for iPhone on a Mac needs the free Xcode from the App Store, signed in with your Apple ID; the launcher walks you through it.
> 2. Import your own keys and games. Put the base game, updates and DLC in one folder and import them together.
> 3. Choose iPhone / iPad or this Mac, then click Build.
> 4. Follow the launcher to sign and install with your own Apple ID (the Windows launcher ships with the Impactor signing tool), open S2Arm, and pick a game from the library.
> 
> Back up your saves before updating the app. The release uses the new app identifier `io.s2arm.*`, which the system treats as a new app: saves from the beta builds do not carry over automatically.
> 
> 
> ## A native port, not an emulator
> 
> The game's own ARM64 code is rewritten at build time and then runs directly on the processor in your iPhone, iPad or Mac. There is no CPU emulator in between. Graphics calls are translated straight to Metal, and system services come from a native host. That is where the speed, the low heat and the battery life come from. [Evidence](docs/validation/EVIDENCE.md#native-port)
> 
> 
> ## One app, your whole library
> 
> Every game you import goes into the same S2Arm app; open it and pick what to play. The whole library takes a single App slot on your developer account, so adding a game never means installing another app or spending another signing slot. [Evidence](docs/validation/EVIDENCE.md#one-app-whole-library)
> 
> 
> ## Let an AI drive
> 
> Both the Mac and Windows launchers expose a control interface, `s2armctl`. An AI assistant can import games, build, install, follow progress and read errors, and every step shows up in the launcher window. A companion self-check, self-fix and feedback toolkit lets the AI find a problem, apply the documented fix, and, when it cannot, package a diagnostic bundle for you to file. Watch an AI diagnose and fix a real problem end to end: [Evidence](docs/validation/EVIDENCE.md#ai-at-the-wheel)
> 
> 
> ### Have an AI do it for you
> 
> Send this to your AI assistant (it needs to be able to run commands on your computer):
> 
> > Please read https://github.com/jhaizhou-ops/S2Arm/blob/main/launchers/macos/skill/s2arm-operator/SKILL.md and then help me install my Switch game on my iPhone.
> 
> It moves forward with a few commands, and you can watch every step in the launcher window:
> 
> ```bash
> /Applications/S2Arm.app/Contents/Resources/s2armctl start        # open and connect to the launcher
> /Applications/S2Arm.app/Contents/Resources/s2armctl next         # what to do now, who does it, and why
> /Applications/S2Arm.app/Contents/Resources/s2armctl diag export ~/Desktop/S2Arm-diagnostics.zip   # export a diagnostic bundle if it cannot fix a problem
> ```
> 
> Anything only you can do (system permission prompts, signing in with your Apple ID, tapping Trust on your phone), the AI stops and asks you to do. On Windows, use `s2armctl.cmd` in the launcher folder with the same commands; exporting a diagnostic bundle is currently Mac-only.
> 
> 
> ## Tested at scale
> 
> **211** games surveyed with a **95%** first-try build success rate. **4,700+** test runs on real iOS devices and **1,000+** on macOS. [Evidence](docs/validation/EVIDENCE.md#tested-at-scale)
> 
> 
> ## Fast, smooth, and easy on the battery
> 
> On a 16 GB MacBook Air (M3), from importing a game to a finished iPhone build, completely cold:
> 
> | Game | Game files | Shaders | Build time |
> |---|---|---|---|
> | A 23.5 GB action RPG | 23.5 GB | 1,222 | **6.4 min** |
> | A 12.0 GB life-sim game | 12.0 GB | 9,315 | **8.6 min** |
> | A 17.5 GB open-world game | 17.5 GB | 26,999 | **34 min** |
> 
> A Switch 2 game, measured on an iPhone 17 Pro Max: a **full 60 fps** while the phone is cool, **37–43 fps** once sustained load has heated it up, at about **0.15 J per frame**. [Evidence](docs/validation/EVIDENCE.md#speed-and-efficiency)
> 
> 
> ## Platforms
> 
> | Platform | Support |
> |---|---|
> | iPhone / iPad | iOS / iPadOS 18 and later; every game is chosen inside one app |
> | Mac | Apple silicon, macOS 15 and later; builds locally and plays games right on the Mac |
> | Windows | Graphical launcher that builds and installs games for iPhone / iPad |
> | Android / HarmonyOS | Coming soon |
> 
> [Evidence](docs/validation/EVIDENCE.md#platforms)
> 
> 
> ## Honest boundaries
> 
> S2Arm runs 64-bit (AArch64) games. Apple silicon cannot execute 32-bit ARM code, so 32-bit games are outside what S2Arm supports, as are games that need a 36-bit address space.
> 
> 
> ## Development
> 
> [Contributing](CONTRIBUTING.md) · [AI collaboration policy](LLM_POLICY.md) · [Diagnosis and root-fix skills for AI](skills/) · [Report a problem](https://github.com/jhaizhou-ops/S2Arm/issues) · [Third-party licenses](THIRD_PARTY_LICENSES.md)
> 
> 
> ## Star History
> 
> 

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/jhaizhou-ops/S2Arm) · [官方網站](https://jhaizhou-ops.github.io/S2Arm/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "jhaizhou-ops--S2Arm"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C#" AND file.name != "jhaizhou-ops--S2Arm" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W46" AND file.name != "jhaizhou-ops--S2Arm"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/jhaizhou-ops--S2Arm");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "jhaizhou-ops--S2Arm" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "jhaizhou-ops" AND file.name != "jhaizhou-ops--S2Arm"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/jhaizhou-ops--S2Arm");
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
> const me = dv.page("Repos/jhaizhou-ops--S2Arm");
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
> const me = dv.page("Repos/jhaizhou-ops--S2Arm");
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
> const me = dv.page("Repos/jhaizhou-ops--S2Arm");
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
> const me = dv.page("Repos/jhaizhou-ops--S2Arm");
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

> **2026-11-10** — 首次收錄
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

- [[2026-11-13|2026-11-13]] — 再次上榜，2.8k stars
- [[2026-11-12|2026-11-12]] — 再次上榜，2.7k stars
- [[2026-11-11|2026-11-11]] — 再次上榜，2.5k stars
- [[2026-11-10|2026-11-10]] — 首次收錄，2.1k stars
