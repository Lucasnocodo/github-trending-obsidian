---
repo: kageroumado/phosphene
url: https://github.com/kageroumado/phosphene
owner: kageroumado
owner_type: User
language: Swift
license: MIT
description: "A video wallpaper engine for macOS Tahoe"
homepage: ""
stars: 686
stars_per_day: 114
forks: 17
open_issues: 9
created: 2026-05-20
pushed_at: 2026-05-24
first_seen: 2026-05-23
week: "2026-W21"
month: "2026-05"
category: "其他"
subcategory: "桌面工具"
release_tag: "v1.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-23
use_case: "讓你的 macOS 桌面和鎖屏變成視頻牆紙，隨心所欲地使用自己的視頻檔案。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-06-03"
contributor_count: 2
engagement: "low"
issue_close_rate: 0
repo_size_kb: 90
readme_length: 7189
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-23"
star_history: "2026-05-23:597,2026-05-24:627,2026-05-25:654,2026-05-26:673,2026-05-27:686"
tags:
  - github
  - "category/其他"
  - "lang/swift"
aliases:
  - "phosphene"
  - "kageroumado/phosphene"
  - "讓你的 macOS 桌面和鎖屏變成視頻牆紙，隨心所欲地使用自己的視頻檔案。"
---

# phosphene

**597** stars · **299** stars/天 · 建立 2 天前 · Swift · MIT

```dataviewjs
const me = dv.page("Repos/kageroumado--phosphene");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.0`

> [!summary] 一句話摘要
> 讓你的 macOS 桌面和鎖屏變成視頻牆紙，隨心所欲地使用自己的視頻檔案。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (299 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 希望在 macOS 上自定義視頻牆紙的創意專業人士。
> **一句話重點** Phosphene 讓 macOS 用戶能夠輕鬆自定義視頻牆紙，提升桌面個性化體驗。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/kageroumado--phosphene");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "桌面工具" && p.file.name !== "kageroumado--phosphene" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 桌面工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Medium (需設定)

> [!abstract] 核心創新
> 利用 Apple 的私有 `WallpaperExtensionKit` 框架實現無縫視頻牆紙播放。

## 專案簡介

Phosphene 是一款專為 macOS Tahoe 設計的視頻牆紙引擎，能讓用戶將自定義視頻作為桌面和鎖屏牆紙。用戶只需將 MP4 或 MOV 格式的視頻導入，這些視頻會顯示在系統的牆紙選擇器中，與 Apple 的內建 Aerials 共同呈現。其核心賣點在於無縫循環播放，透過精確的 PTS/DTS 偏移來避免任何閃爍或延遲，並且支持多顯示器和多空間的選擇，這些設置會被 macOS 自動保存。技術上，Phosphene 使用 Apple 的私有 `WallpaperExtensionKit` 框架，這意味著播放是在進程外運行，能夠在應用退出後持續運行，並與系統的鎖屏和閒置狀態整合。這樣的設計使得用戶在使用視頻牆紙時不會影響系統的性能。除了基本的視頻播放功能，Phosphene 還具備根據電池狀態和熱狀態調整播放行為的能力，這在長時間使用時尤為重要。

**技術棧**：`Swift 6` · `Objective-C` · `Xcode 17+`

## 重點功能

- 視頻導入 — 支持 MP4 / MOV / 任何 AVFoundation 可讀格式的視頻。
- 無縫循環播放 — 精確的 PTS/DTS 偏移，避免閃爍和延遲。
- 多顯示器支持 — 每個顯示器和空間可以選擇不同的牆紙，設置會被 macOS 自動保存。
- 電源感知播放 — 根據電池狀態和熱狀態自動調整播放行為，延長設備使用壽命。
- 自適應變體 — 可選擇預渲染較低解析度或較低幀率的視頻變體，以節省資源。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/kageroumado/phosphene.git
```
2. 打開 Xcode 專案
```bash
cd phosphene && open Phosphene.xcodeproj
```
3. 運行專案
```bash
在 Xcode 中選擇 Phosphene scheme 並運行。
```

## 程式碼範例

```swift
{
  "前置條件": "需要在 macOS Tahoe 上運行，並安裝 Xcode 17+。",
  "指令": "xcodebuild -project Phosphene.xcodeproj -scheme Phosphene -configuration Debug -destination 'generic/platform=macOS' CODE_SIGNING_ALLOWED=NO CODE_SIGNING_REQUIRED=NO CODE_SIGN_IDENTITY='' build",
  "預期輸出": "在 ~/Library/Developer/Xcode/DerivedData/Phosphene-*/Build/Products/Debug/Phosphene.app 生成未簽名的調試應用。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 597 stars（299/天），forks 17（2.8%），顯示出一定的關注度。作者 kageroumado 之前有商業背景，這個專案的開源是因為市場競爭激烈，顯示出對視頻牆紙需求的高漲。這個工具解決了 macOS 用戶在視頻牆紙方面的需求，因為之前的選擇有限且多數為付費軟體。近期的推廣活動或社群討論可能也促進了其曝光率。這個工具的成功也反映了 macOS 生態系統中對於個性化桌面環境的需求增長。

## 適合誰使用

**目標受眾**：希望在 macOS 上自定義視頻牆紙的創意專業人士。

> [!example] 使用場景
> - 設計師用它來展示自己的作品集作為桌面牆紙，因為這樣可以隨時吸引客戶的注意，提升專業形象。
> - 遊戲開發者用它來在開發過程中使用遊戲場景作為桌面牆紙，因為這樣可以保持靈感來源，並隨時檢視設計效果。
> - 內容創作者用它來將自己的視頻作品作為桌面背景，因為這樣可以隨時展示自己的創作，吸引潛在觀眾。

## 架構分析

Phosphene 的架構由兩個主要部分組成：Phosphene.app 和 PhospheneExtension.appex。Phosphene.app 是一個菜單欄應用，負責管理視頻庫和用戶界面，而 PhospheneExtension.appex 則在系統的 WallpaperAgent 中運行，負責視頻的實際渲染。這種設計使得視頻播放能夠在應用退出後持續運行，並且能夠與 macOS 的鎖屏和閒置狀態無縫整合。選擇使用私有框架的代價在於未來的兼容性風險，因為 Apple 可能會隨時更改這些 API。整體架構的擴展性良好，但在使用私有 API 時需謹慎，因為未來的更新可能導致功能失效。

## 技術深入分析

Phosphene 的核心技術機制在於利用 Apple 的私有 `WallpaperExtensionKit` 框架，這使得視頻播放能夠在進程外運行，並且能夠與系統的鎖屏和閒置狀態整合。這種設計使得用戶在使用視頻牆紙時不會影響系統性能。效能方面，Phosphene 能夠實現無縫循環播放，透過精確的 PTS/DTS 偏移來避免任何閃爍或延遲。這意味著即使在長時間使用的情況下，系統也能保持穩定。

設計上選擇私有框架的代價在於未來的兼容性風險，因為 Apple 可能會隨時更改這些 API。整體架構的擴展性良好，但在使用私有 API 時需謹慎，因為未來的更新可能導致功能失效。技術風險方面，對於依賴私有框架的設計決策，未來可能會面臨兼容性問題，這需要開發者持續關注 Apple 的更新。整合方面，Phosphene 與 macOS 的桌面環境無縫整合，能夠在用戶體驗上提供流暢的視頻播放效果，並且支持多顯示器設置，這在多任務處理時尤為重要。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用指南，並包含了必要的範例。安裝過程相對順暢，但需要注意私有框架的使用可能會帶來未來的兼容性問題。整體上，對於新手來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 支持多種視頻格式，靈活性高。
> - 無縫循環播放，提升使用體驗。
> - 根據系統狀態自動調整播放行為，節省資源。

> [!danger] 缺點
> - 依賴私有框架，未來可能面臨兼容性問題。
> - 僅支援特定版本的 macOS，限制了用戶基礎。
> - 需要 Apple Silicon，對於舊設備不友好。

> [!warning] 注意事項
> - 僅支援 macOS Tahoe (26.0+)。
> - 需要 Apple Silicon (arm64-apple-macos26.0)。
> - 使用私有框架，未來可能因 Apple 更新而失效。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/kageroumado--phosphene");
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
> const me = dv.page("Repos/kageroumado--phosphene");
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
| Forks | 17 |
| Open Issues | 9 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-21 |
| 建立日期 | 2026-05-20 |
| Repo 大小 | 90 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/kageroumado/phosphene) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 98
>     "Objective-C" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@kageroumado](https://github.com/kageroumado) | 5 |
> | [@0oAstro](https://github.com/0oAstro) | 2 |

**最新版本**：v1.0 — v1.0 — initial release (2026-05-21)

> [!info]- Release Notes
> First public release of Phosphene.
> 
> A video wallpaper engine for macOS Tahoe that integrates with the system's native wallpaper picker. Bring your own video files; they appear alongside Apple's built-in Aerials in **System Settings → Wallpaper**.
> 
> ## What's in v1.0
> 
> - Play any MP4 / MOV / AVFoundation-readable file as your desktop and lock-screen wallpaper.
> - Plays on the desktop too (not just the lock screen).
> - Multi-display + per-Space selections, persisted by macOS.
> - Gapless looping — frame-accurate PTS/DTS offset across loop boundaries, no flush, no stutter.
> - Power-aware playback: pauses or down-shifts based on thermal state, battery level, brightness, occlusion, Game Mode, lock-screen state, and screen sleep.
> - Optional per-video pre-rendered variants (lower resolution / lower FPS) selected adaptively at loop boundaries.
> 
> ## Installation
> 
> 1. Download `Phosphene.dmg` below and drag Phosphene.app to Applications.
> 2. Launch Phosphene. Use the menu bar icon to add videos to your library.
> 3. Open **System Settings → Wallpaper** and pick a video from the Phosphene collection.
> 
> ## Requirements
> 
> - macOS Tahoe (26.0 or newer)
> - Apple Silicon
> 
> ## Notes
> 
> The app is signed with a Developer ID certificate and notarized by Apple, so Gatekeeper will let it launch without warnings.
> 
> Phosphene loads Apple's private `WallpaperExtensionKit.framework` to register as a wallpaper provider. This works on macOS 26.x; future major OS releases may require maintenance.

## 社群與生態

**社群活躍度**：最近兩天內活躍，顯示出一定的開發動力。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-20 ~ 2026-05-21）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #3 from 0oAstro/codex/await-thumbnail-generation

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/kageroumado/phosphene/issues/1) | 2 monitor setup: it switches the other monitor to the last c | 3 | 4 |
> | [#11](https://github.com/kageroumado/phosphene/issues/11) | Validate WallpaperExtension XPC callers before accepting con | 0 | 0 |
> | [#10](https://github.com/kageroumado/phosphene/issues/10) | Reduce filesystem blast radius with app sandbox and a docume | 0 | 0 |
> | [#8](https://github.com/kageroumado/phosphene/issues/8) | Harden private runtime bridging and unsafe WallpaperExtensio | 0 | 0 |
> | [#9](https://github.com/kageroumado/phosphene/issues/9) | Validate library metadata and prevent path traversal | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Phosphene
> 
> A video wallpaper engine for macOS Tahoe.
> 
> Phosphene is a menu bar app + wallpaper extension that plays your own video files as the macOS desktop and lock-screen wallpaper. It plugs into the system's native wallpaper picker, so videos appear alongside Apple's built-in Aerials in **System Settings → Wallpaper**.
> 
> It is built on top of Apple's private `WallpaperExtensionKit` framework — the same one Apple's own Aerials use — which means playback runs out-of-process, survives app quits, and integrates with the OS-level lock-screen / idle / sleep lifecycle.
> 
> > ⚠️ **Private framework.** Phosphene loads `WallpaperExtensionKit` via `dlopen` and uses Mirror-based runtime introspection to talk to its XPC types. Apple could change this at any major OS release. The project tracks macOS 26 (Tahoe).
> 
> ## Features
> 
> - **Bring your own videos.** Import MP4 / MOV / any AVFoundation-readable file. They show up in the system wallpaper picker.
> - **Gapless looping.** Frame-accurate loops by offsetting PTS/DTS across loop boundaries — no flush, no stutter.
> - **Multi-display + per-Space selections.** Different wallpapers per display, persisted by macOS.
> - **Power-aware playback.** A graduated `PlaybackPolicy` reduces work or pauses entirely based on thermal state, battery level, on-battery vs AC, Game Mode, and presentation mode (active / locked / idle).
> - **Smooth lock-screen ramp.** When *Only on Lock Screen* is enabled, the wallpaper eases in/out with a cubic curve as you lock and unlock, matching Apple's own Aerials behavior.
> - **Pause when occluded.** Detects when every display is fully covered by windows and pauses rendering until the desktop is visible again.
> - **Adaptive variants.** Optionally pre-render lower-resolution / lower-fps variants of a video; the renderer swaps to the cheapest variant that satisfies the current policy at each loop boundary.
> - **Menu bar control.** Preview the current wallpaper, toggle pause, switch displays, configure behavior, launch at login.
> 
> ## Requirements
> 
> - **macOS Tahoe (26.0+).** Phosphene depends on the Wallpaper extension point introduced in macOS 14 but uses Tahoe-only SwiftUI and `glassEffect()` APIs.
> - **Apple Silicon.** Targets `arm64-apple-macos26.0`.
> - **Xcode 17+** to build, with Swift 6 strict concurrency enabled.
> 
> ## Building
> 
> ```sh
> git clone https://github.com/kageroumado/phosphene.git
> cd phosphene
> open Phosphene.xcodeproj
> ```
> 
> In Xcode, select the **Phosphene** scheme and Run. The project uses synchronized filesystem groups, so adding/removing files in `Phosphene/` or `PhospheneExtension/` requires no pbxproj edits.
> 
> You'll need to set a development team for code signing. The wallpaper extension is embedded into the app bundle and registered with the system when the app launches.
> 
> For a headless compile check without local signing identities:
> 
> ```sh
> xcodebuild -project Phosphene.xcodeproj -scheme Phosphene -configuration Debug \
>   -destination 'generic/platform=macOS' \
>   CODE_SIGNING_ALLOWED=NO CODE_SIGNING_REQUIRED=NO CODE_SIGN_IDENTITY='' build
> ```
> 
> On the default DerivedData path, the unsigned debug app is produced at:
> 
> ```text
> ~/Library/Developer/Xcode/DerivedData/Phosphene-*/Build/Products/Debug/Phosphene.app
> ```
> 
> To install that local debug build into Applications:
> 
> ```sh
> rm -rf /Applications/Phosphene.app
> cp -R ~/Library/Developer/Xcode/DerivedData/Phosphene-*/Build/Products/Debug/Phosphene.app /Applications/
> ```
> 
> ### Using a video wallpaper
> 
> 1. Launch Phosphene. Use the menu bar icon to **Manage Library** and add one or more videos.
> 2. Open **System Settings → Wallpaper**. Phosphene's videos appear under their own collection.
> 3. Pick a video. macOS handles the actual wallpaper assignment — Phosphene's extension provides the frames.
> 
> ## Architecture
> 
> ```
> ┌─────────────────────────┐         ┌──────────────────────────────┐
> │  Phosphene.app          │         │  PhospheneExtension.appex     │
> │  (menu bar UI)          │         │  (host: WallpaperAgent)       │
> │                         │         │                              │
> │  • Library management   │  Darwin │  • XPC handler                │
> │  • Per-video metadata   │ ──────▶ │  • AVSampleBufferDisplayLayer │
> │  • Optimization (HEVC)  │  notif. │  • Power / thermal monitor    │
> │  • Preferences          │         │  • Snapshot generator         │
> └─────────────────────────┘         └──────────────────────────────┘
>                   │                              │
>                   └──────────────┬───────────────┘
>                                  ▼
>                   Shared App Group container
>                   (~/Library/Group Containers/glass.kagerou.phosphene)
>                   • Video library + variants
>                   • WallpaperPrefs.plist
>                   • BMP snapshot cache
> ```
> 
> **App side** (`Phosphene/`) — SwiftUI menu-bar app. Manages the on-disk video library, transcodes optional lower-resolution variants via `VideoOptimizationService`, exposes preferences, and posts a Darwin notification when the library changes.
> 
> **Extension side** (`PhospheneExtension/`) — runs inside the system `WallpaperAgent` process when a Phosphene wallpaper is active. Loads `WallpaperExtensionKit.framework` at runtime, registers as a wallpaper provider, and renders frames into a remote `CAContext` via `AVSampleBufferDisplayLayer`. It receives XPC `acquire` / `update` / `invalidate` / `snapshot` calls from `WallpaperAgent` and routes presentation-mode changes through `PlaybackPolicy`.
> 
> **`PlaybackPolicy`** is the single source of truth for playback behavior. Inputs (thermal state, battery, presentation mode, user pause, occlusion, etc.) collapse to one of `full / reduced / minimal / paused`. The renderer applies the policy on every state change.
> 
> **`VideoRenderer`** owns the decode pipeline. Instead of `AVPlayerLayer` — which silently fails inside a remote `CAContext` — it drives `AVSampleBufferDisplayLayer` manually: one `AVAssetReader` for the current loop, a preloaded one for the next, and a PTS offset that grows across loops to keep the timeline monotonically increasing. Result is glitch-free looping without flushing the renderer.
> 
> ## Quirks worth knowing
> 
> - **`WallpaperSnapshotXPC` swizzle.** The system's snapshot encoder checks `type(of: coder) == NSXPCCoder.self`, but the real coder is a subclass. Without the runtime swizzle in `PhospheneExtension.swift`, snapshots silently encode to nothing and you get a grey lock screen during transitions.
> - **Mirror-based XPC parsing.** Apple's request types (`WallpaperCreationRequestXPC` etc.) aren't part of any public SDK header. The extension reads them via `Mirror` reflection. If Apple renames fields, expect surgical breakage.
> - **Variants are advisory.** A "1080p@30" variant won't be selected if Power-Monitor thinks we're on AC and idle — `PlaybackPolicy` always picks the highest tier that's still allowed.
> 
> ## License
> 
> [MIT](LICENSE). Do whatever you want, no warranty.
> 
> ## Acknowledgements
> 
> Built by [@kageroumado](https://x.com/kageroumado). Phosphene was originally a commercial project; it's open-source now because the market for "video wallpaper apps on macOS" turned out to be more crowded than it looked.

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[桌面環境]]

相關專案：[[xw7872081123--wallpaper-engine-steam|xw7872081123/wallpaper-engine-steam]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[FULU-Foundation--OrcaSlicer-bambulab|FULU-Foundation/OrcaSlicer-bambulab]] · [[GENEXIS-AI--chromex|GENEXIS-AI/chromex]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]]

[GitHub](https://github.com/kageroumado/phosphene)

## 相關收錄

> [!note]- 直接競品（同子分類：桌面工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "桌面工具" AND file.name != "kageroumado--phosphene"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "kageroumado--phosphene"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "kageroumado--phosphene" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "kageroumado--phosphene"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","桌面環境"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "kageroumado--phosphene" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/kageroumado--phosphene");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "kageroumado--phosphene" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "kageroumado" AND file.name != "kageroumado--phosphene"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/kageroumado--phosphene");
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
> const me = dv.page("Repos/kageroumado--phosphene");
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
> const me = dv.page("Repos/kageroumado--phosphene");
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
> const me = dv.page("Repos/kageroumado--phosphene");
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
> const me = dv.page("Repos/kageroumado--phosphene");
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

> **2026-05-23** — 首次收錄
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

- [[2026-05-27|2026-05-27]] — 再次上榜，686 stars
- [[2026-05-26|2026-05-26]] — 再次上榜，673 stars
- [[2026-05-25|2026-05-25]] — 再次上榜，654 stars
- [[2026-05-24|2026-05-24]] — 再次上榜，627 stars
- [[2026-05-23|2026-05-23]] — 首次收錄，597 stars
