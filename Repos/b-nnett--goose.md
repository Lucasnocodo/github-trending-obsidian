---
repo: b-nnett/goose
url: https://github.com/b-nnett/goose
owner: b-nnett
owner_type: User
language: Rust
license: N/A
description: "Goose Swift proof-of-concept README"
homepage: ""
stars: 752
stars_per_day: 752
forks: 231
open_issues: 2
created: 2026-06-02
pushed_at: 2026-06-02
first_seen: 2026-06-03
week: "2026-W23"
month: "2026-06"
category: "開發工具"
subcategory: "健康數據應用"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-03
use_case: "提供 WHOOP 5.0 數據和健康指標的本地應用原型。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-06"
contributor_count: 1
engagement: "high"
issue_close_rate: 0
repo_size_kb: 8090
readme_length: 8726
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-03"
star_history: "2026-06-03:752"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
aliases:
  - "goose"
  - "b-nnett/goose"
  - "提供 WHOOP 5.0 數據和健康指標的本地應用原型。"
---

# goose

**752** stars · **752** stars/天 · 建立 1 天前 · Rust · 未標註授權

```dataviewjs
const me = dv.page("Repos/b-nnett--goose");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 提供 WHOOP 5.0 數據和健康指標的本地應用原型。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (752 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要開發 WHOOP 5.0 數據應用的 iOS 開發者和健康科技創業者。
> **一句話重點** Goose 是一個有潛力的健康數據應用，但仍需時間來優化性能和擴展功能。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/b-nnett--goose");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "健康數據應用" && p.file.name !== "b-nnett--goose" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 健康數據應用 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，15 小時整合，得到一個健康數據處理的原型，值得有開發背景的團隊使用。

> [!abstract] 核心創新
> Goose 提供了一個獨立於 WHOOP 的本地數據處理解決方案。

## 專案簡介

Goose 是一個針對 WHOOP 5.0 的本地健康數據應用，旨在將來自 WHOOP 5.0 手環的數據轉換為健康指標。用戶透過 iOS 應用連接手環，數據經由 Rust 核心處理，最終呈現為健康、恢復、睡眠等指標的視圖。這個專案目前仍在原型階段，並不適合用於實際的健康數據追蹤。主要的功能包括 SwiftUI 應用框架、CoreBluetooth 連接流程，以及 JSON-over-C 的 Rust 核心橋接。Goose 的設計目的是為了提供一個獨立於 WHOOP 的解決方案，並且未來可能會擴展至其他平台。

這個專案的賣點在於其本地數據處理能力，並且能夠在不依賴雲端的情況下提供健康數據的可視化。使用者需要具備 Xcode 和 Rust 的基本知識來構建和運行應用，這使得它更適合開發者而非普通用戶。由於目前性能尚未優化，使用時可能會感受到延遲，這是未來需要改進的重點。整體而言，Goose 是一個有潛力的專案，但在成熟度上仍需時間發展。

**技術棧**：`Rust` · `Swift` · `Xcode`

## 重點功能

- 本地數據處理 — 透過 Rust 核心處理 WHOOP 5.0 數據，無需雲端依賴。
- SwiftUI 應用框架 — 提供現代化的用戶界面設計，易於擴展和維護。
- CoreBluetooth 連接 — 支持與 WHOOP 5.0 手環的藍牙連接，實現即時數據同步。
- 健康指標視圖 — 包含睡眠、恢復、壓力等多個健康指標的可視化展示。
- JSON-over-C 橋接 — 允許 Swift 和 Rust 之間的數據交互，提升性能。
- 模組化設計 — 各個功能模組獨立，便於開發和測試。
- 開發者友好 — 提供詳細的構建指引和開發文檔，適合開發者使用。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/b-nnett/goose.git
```
2. 安裝 Rust 和 Cargo
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
3. 打開 Xcode 專案
```bash
open GooseSwift.xcodeproj
```
4. 構建應用
```bash
xcodebuild -project GooseSwift.xcodeproj -scheme GooseSwift -configuration Debug build
```

## 程式碼範例

```rust
{
  "前置條件": "需要安裝 Xcode 和 Rust。",
  "指令": "xcodebuild -project GooseSwift.xcodeproj -scheme GooseSwift -configuration Debug -destination 'platform=iOS Simulator,name=iPhone 17' -derivedDataPath /tmp/goose-swift-deriveddata build",
  "預期輸出": "構建成功，生成應用程序。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 752 stars（752/天），forks 231（30.7%），這顯示出開發者對這個專案的高度興趣。作者 b-nnett 是一位活躍的開發者，專注於健康數據應用的開發。這個專案解決了目前 WHOOP 5.0 數據處理的需求，提供了一個本地化的解決方案，避免了雲端依賴的風險。由於專案剛開始，尚未有大量的社群討論或推廣活動，但其潛在的應用場景吸引了不少開發者的注意。這樣的增長率顯示出對健康數據應用的需求正在上升，尤其是在個人數據隱私日益受到重視的背景下。

## 適合誰使用

**目標受眾**：需要開發 WHOOP 5.0 數據應用的 iOS 開發者和健康科技創業者。

> [!example] 使用場景
> - iOS 開發者用它來開發 WHOOP 5.0 數據的本地應用，因為它提供了直接的數據處理和可視化功能。
> - 健康科技創業者用它來評估 WHOOP 5.0 數據的商業潛力，因為這個原型能快速展示數據的應用場景。
> - 數據科學家用它來分析健康數據的趨勢，因為它能夠提供即時的數據視圖和歷史數據追蹤。

## 架構分析

Goose 的架構基於 SwiftUI 和 Rust 的結合，主要分為前端應用和後端數據處理兩部分。前端使用 SwiftUI 提供用戶界面，後端則利用 Rust 處理數據。這樣的設計選擇使得應用能夠在本地快速處理數據，減少對網絡的依賴。

數據流從 WHOOP 手環通過藍牙連接到應用，然後經由 Rust 核心進行解析和存儲。這種架構的代價在於需要開發者具備一定的 Rust 和 Swift 知識，並且在性能優化上仍有空間。擴展性方面，未來可以考慮支持其他版本的 WHOOP 或其他健康數據源，但目前的設計主要針對 WHOOP 5.0。

## 技術深入分析

Goose 的核心技術機制在於結合了 Rust 和 Swift 的優勢，Rust 負責數據的高效處理，而 Swift 則提供用戶友好的界面。這樣的設計使得應用能夠在本地快速處理 WHOOP 5.0 的數據，並且減少了對網絡的依賴。效能方面，由於目前仍在原型階段，應用的性能尚未優化，使用者可能會感受到延遲。設計取捨方面，選擇 Rust 作為後端處理語言帶來了高效能的優勢，但也要求開發者具備相應的技術能力。技術風險方面，未來在擴展到其他健康數據源時，可能會面臨兼容性和性能的挑戰。整合方面，Goose 目前主要針對 WHOOP 5.0，未來若要擴展至其他平台，可能需要重新設計數據處理流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的構建指引，但對於新手來說仍然有一定的學習曲線。安裝過程需要配置 Xcode 和 Rust，對於不熟悉這些工具的開發者來說可能會遇到困難。整體而言，對於有經驗的開發者來說，30 分鐘內可以完成基本的構建和運行。

## 優缺點分析

> [!success] 優點
> - 本地數據處理，提升數據隱私。
> - 現代化的用戶界面設計，易於使用和擴展。
> - 支持即時數據同步，提升用戶體驗。

> [!danger] 缺點
> - 性能尚未優化，使用時可能會感到延遲。
> - 目前僅支持 WHOOP 5.0，限制了用戶群。
> - 需要開發背景才能構建和使用，普通用戶不易上手。

> [!warning] 注意事項
> - 目前僅支持 WHOOP 5.0，其他版本不兼容。
> - 性能尚未優化，使用時可能會感到延遲。
> - 不適合普通用戶，需具備開發背景才能使用。
> - 仍在原型階段，功能不完整，數據可能顯示為空。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理生成，而 Goose 主要針對健康數據處理。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理系統，而 Goose 專注於單一健康數據源的整合。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於數據存儲和管理，而 Goose 主要針對健康數據的即時處理。 | 如果需要一個強大的數據存儲解決方案，而不僅僅是健康數據的可視化。 | medium，因為需要重新設計數據流和存儲結構。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理系統以處理不同數據源，而 Goose 專注於單一健康數據源的整合。 | 如果需要處理多種健康數據來源，並且希望有更靈活的數據處理能力。 | high，因為需要重構整個數據處理邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **goose** | **boneyard** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據存儲和管理，而 Goose 主要針對健康數據的即時處理。 | 提供多代理系統以處理不同數據源，而 Goose 專注於單一健康數據源的整合。 |
> | 遷移成本 | - | medium，因為需要重新設計數據流和存儲結構。 | high，因為需要重構整個數據處理邏輯。 |
> | 適用場景 | 主要場景 | 如果需要一個強大的數據存儲解決方案，而不僅僅是健康數據的可視 | 如果需要處理多種健康數據來源，並且希望有更靈活的數據處理能力 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合開發者進行原型測試，不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 應用在性能上尚未優化，使用時可能會感到延遲。
  - 解法：等待未來的性能更新。
- [MEDIUM] 目前僅支持 WHOOP 5.0，其他版本不兼容。
  - 解法：未來可能會擴展，但目前無法使用其他版本。
- **[HIGH]** 需要開發背景才能構建和使用，普通用戶不易上手。
  - 解法：建議有經驗的開發者使用。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型健康科技創業公司開發新應用 | 非常適合 | 提供了即時數據處理和可視化功能，能快速驗證商業模式。 |
| 個人開發者想要追蹤健康數據 | 不適合 | 需要具備開發背景，普通用戶難以使用。 |
| 大型企業需要整合多種健康數據來源 | 普通 | 雖然具備數據處理能力，但目前僅針對 WHOOP 5.0。 |
| 學術研究團隊需要分析健康數據 | 適合 | 能提供即時數據視圖，適合進行數據分析。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~15 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，15 小時整合，得到一個健康數據處理的原型，值得有開發背景的團隊使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：應用主要在本地處理數據，無需高權限操作，且不存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/b-nnett--goose");
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
> const me = dv.page("Repos/b-nnett--goose");
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
| Forks | 231 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-02 |
| 建立日期 | 2026-06-02 |
| Repo 大小 | 7.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/b-nnett/goose) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 73
>     "Swift" : 26
>     "Python" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@b-nnett](https://github.com/b-nnett) | 10 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者可以參與討論和貢獻。
**連結**：[文件](https://github.com/b-nnett/goose/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-01 ~ 2026-06-02）
> **活躍天數** 2 天 · **最新 commit** Use typed capture frame write rows

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/b-nnett/goose/issues/2) | [Discussion] Cross-platform foundations: consider architectu | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Goose - Local Companion for WHOOP 5.0
> 
> **Alpha proof of concept. This build is for developers to evaluate whether a project of this scope is viable. It is not ready to use as an app for tracking personal health data yet.**
> 
> If you don't know what Xcode is, or how to build the Rust core, this build is not for you. Come back on 13 June 2026 for the first public beta on TestFlight.
> 
> This prototype targets WHOOP 5.0 only. Other WHOOP generations are not supported in this build.
> 
> The app and backend have had very little attention put into performance. The app will lag, very considerably. Performance PRs are welcome, or you can wait until I address it in due course.
> 
> Goose is a local-first WHOOP 5.0 data and health metrics project. The iOS app connects to WHOOP 5.0 bands, routes packet data through the Goose Rust core, and turns that data into daily health, recovery, sleep, strain, stress, cardio, energy, coach, and debug views.
> 
> ## Project Layout
> 
> ```text
> GooseSwift/                         SwiftUI app source
> GooseWorkoutLiveActivityExtension/  Live Activity widget extension
> Rust/                               iOS static library, headers, per-platform outputs
> Scripts/build_ios_rust.sh           Xcode build phase for the Goose Rust core
> docs/goose-swift-mvp/               MVP plans, contracts, and data-readiness docs
> GooseSwift.xcodeproj                Xcode project
> ```
> 
> Key Swift entry points:
> 
> - `GooseSwiftApp.swift`: app lifecycle and deep-link handling.
> - `RootView.swift`: onboarding gate and global sync toast host.
> - `AppShellView.swift`: tab shell and shared health store wiring.
> - `GooseAppModel.swift`: app state, BLE ownership, lifecycle, and bridge summaries.
> - `GooseBLEClient.swift`: Bluetooth scan/connect/sync logic.
> - `GooseRustBridge.swift`: Swift wrapper around the Rust C bridge.
> - `HealthView.swift` and `Health*` files: health dashboards, metric pages, trends, and sheets.
> - `CoachView.swift` and `Coach*` files: coach UI and chat support.
> - `MoreView.swift`: operational/debug/settings surfaces.
> 
> This is an active prototype. Because the data pipeline is still evolving, some metrics appear as empty or unavailable until the app has a source for them.
> 
> ## Independence
> 
> Goose is an independent project and is not affiliated with WHOOP. This repository does not include or reference source code owned by WHOOP. The app communicates with WHOOP 5.0 bands over Bluetooth using services and data exposed by the device, then parses and stores that local data through the Goose Rust core. Product names are used only to describe compatibility.
> 
> ## Design Credit
> 
> The current health metric UI draws heavily from [Bevel](https://www.bevel.health/), especially the Sleep, Recovery, Strain, Stress, and trend-detail surfaces. Bevel is not affiliated with Goose; this credit is here because their product design has been a major visual reference.
> 
> ## Current Scope
> 
> - SwiftUI app shell with Home, Health, Coach, and More tabs.
> - Onboarding and persisted profile state.
> - CoreBluetooth scan/connect flows for WHOOP 5.0 devices.
> - JSON-over-C bridge into the Goose Rust core.
> - Health metric surfaces for Sleep, Recovery, Strain, Stress, Cardio Load, Energy Bank, Health Monitor, Packet Inputs, Algorithms, References, and Calibration.
> - HealthKit sleep import and workout write support.
> - Coach surfaces that summarize local metrics and explain missing data.
> - More/Debug operational surfaces for device state, capture, sync, algorithms, storage, privacy, and support.
> - Workout Live Activity extension.
> 
> ## Requirements
> 
> - macOS with Xcode installed.
> - iOS 26 SDK and an iOS 26 capable simulator/device.
> - Apple Developer signing configured for the `com.goose.swift` bundle identifier.
> - Rust and Cargo for building the Goose Rust core from the committed `Rust/core` source.
> - iOS Rust targets installed with `rustup`; see the Rust Core Bridge section below.
> 
> Built Rust `.a` archives are generated locally during Xcode builds and are not committed. Set `GOOSE_SKIP_RUST_CORE_BUILD=1` only when the matching local archive already exists for the active Xcode platform.
> 
> ## Build
> 
> Open `GooseSwift.xcodeproj` in Xcode and build the `GooseSwift` scheme, or build from the command line.
> 
> Simulator build:
> 
> ```sh
> xcodebuild \
>   -project GooseSwift.xcodeproj \
>   -scheme GooseSwift \
>   -configuration Debug \
>   -destination 'platform=iOS Simulator,name=iPhone 17' \
>   -derivedDataPath /tmp/goose-swift-deriveddata \
>   build
> ```
> 
> Physical device build:
> 
> ```sh
> xcodebuild \
>   -project GooseSwift.xcodeproj \
>   -scheme GooseSwift \
>   -configuration Debug \
>   -destination 'platform=iOS,id=' \
>   -derivedDataPath /tmp/goose-swift-deriveddata-device \
>   -allowProvisioningUpdates \
>   build
> ```
> 
> List connected devices:
> 
> ```sh
> xcrun devicectl list devices
> ```
> 
> ## Reinstall On A Device
> 
> After a successful physical-device build, reinstall and launch:
> 
> ```sh
> xcrun devicectl device uninstall app \
>   --device  \
>   com.goose.swift
> 
> xcrun devicectl device install app \
>   --device  \
>   /tmp/goose-swift-deriveddata-device/Build/Products/Debug-iphoneos/GooseSwift.app
> 
> xcrun devicectl device process launch \
>   --device  \
>   --terminate-existing \
>   com.goose.swift
> ```
> 
> ## Rust Core Bridge
> 
> The Rust bridge source is committed in `Rust/core`. Do not commit built `.a`
> archives; Xcode generates them locally through `Scripts/build_ios_rust.sh`.
> 
> Prerequisites:
> 
> - Xcode command line tools.
> - Rust via `rustup`.
> - iOS Rust targets:
> 
> ```bash
> rustup target add aarch64-apple-ios aarch64-apple-ios-sim x86_64-apple-ios
> ```
> 
> `Scripts/build_ios_rust.sh` builds `Rust/core` for the active Xcode platform:
> 
> - `iphoneos` -> `aarch64-apple-ios`
> - `iphonesimulator` on Apple Silicon -> `aarch64-apple-ios-sim`
> - `iphonesimulator` on Intel -> `x86_64-apple-ios`
> 
> Outputs are staged into:
> 
> ```text
> Rust/iphoneos/libgoose_core.a
> Rust/iphonesimulator/libgoose_core.a
> ```
> 
> The Swift target links `Rust/$(PLATFORM_NAME)/libgoose_core.a` and reads the C
> bridge header from `Rust/core/include/goose_core_bridge.h`. The default Cargo
> target directory is `build/rust-target/goose-core`, so Rust build products stay
> outside the committed source tree.
> 
> Manual builds:
> 
> ```bash
> # Simulator on Apple Silicon
> PLATFORM_NAME=iphonesimulator CURRENT_ARCH=arm64 Scripts/build_ios_rust.sh
> 
> # Physical iPhone
> PLATFORM_NAME=iphoneos CURRENT_ARCH=arm64 Scripts/build_ios_rust.sh
> ```
> 
> You normally do not need to run these by hand; the Xcode build phase runs the
> script before compiling Swift.
> 
> ## Data And Privacy
> 
> - Metric views show empty, stale, or unavailable states when a source is missing.
> - Metric rows and trend sheets show where values came from when that information is available.
> - Raw packet payloads stay in debug/export flows rather than everyday health views.
> - Coach responses use the same local metric summaries shown in the app.
> - Health and fitness data is local by default. Any future backend or AI feature will need its own consent flow and privacy notes.
> 
> ## Documentation
> 
> Detailed implementation plans live in `docs/goose-swift-mvp/`:
> 
> - `Home.md`: Home tab contract and remaining work.
> - `Health.md`: Health surfaces, metric pages, packet inputs, trends, and acceptance checks.
> - `Coach.md`: Coach tab plan and chat architecture notes.
> - `More.md`: operational settings/debug/capture/privacy surfaces.
> - `CodexCoachServer.md`: viability notes for a future Codex-powered coach.
> - `RemainingDataTodo.md`: unresolved data-source and persistence work.
> 
> Recovery-specific follow-up work is tracked in `recovery-todo.md`.
> 
> ## Contributing
> 
> This project moves quickly, so small focused changes are easiest to review.
> 
> Want to talk to other contributors? [Join the group here](https://x.com/i/chat/group_join/g2061785795330019536/3SHQtt2O8f).
> 
> - Keep changes close to the feature or bug you are working on.
> - Match the existing SwiftUI style before introducing new patterns.
> - Build after touching Swift, Rust bridge, project, or signing settings.
> - Check both empty and populated states for metric UI

## 延伸閱讀

相關概念：[[健康數據]] · [[本地應用]] · [[數據隱私]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]]

[GitHub](https://github.com/b-nnett/goose)

## 相關收錄

> [!note]- 直接競品（同子分類：健康數據應用）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "健康數據應用" AND file.name != "b-nnett--goose"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "b-nnett--goose"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "b-nnett--goose" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W23" AND file.name != "b-nnett--goose"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["健康數據","本地應用","數據隱私"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "b-nnett--goose" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/b-nnett--goose");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "b-nnett--goose" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "b-nnett" AND file.name != "b-nnett--goose"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/b-nnett--goose");
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
> const me = dv.page("Repos/b-nnett--goose");
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
> const me = dv.page("Repos/b-nnett--goose");
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
> const me = dv.page("Repos/b-nnett--goose");
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
> const me = dv.page("Repos/b-nnett--goose");
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

> **2026-06-03** — 首次收錄
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

- [[2026-06-03|2026-06-03]] — 首次收錄，752 stars
