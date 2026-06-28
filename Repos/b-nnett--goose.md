---
repo: b-nnett/goose
url: https://github.com/b-nnett/goose
owner: b-nnett
owner_type: User
language: Rust
license: N/A
description: "Goose Swift proof-of-concept README"
homepage: ""
stars: 2608
stars_per_day: 104
forks: 647
open_issues: 35
created: 2026-06-02
pushed_at: 2026-06-02
first_seen: 2026-06-03
week: "2026-W23"
month: "2026-06"
category: "開發工具"
subcategory: "健康數據處理"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-03
use_case: "提供 WHOOP 5.0 數據和健康指標的本地應用程式原型。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 7
next_review: "2026-06-12"
contributor_count: 1
engagement: "medium"
issue_close_rate: 34
repo_size_kb: 8090
readme_length: 8726
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-03"
star_history: "2026-06-03:752,2026-06-03:757,2026-06-04:1470,2026-06-04:1472,2026-06-05:1869,2026-06-05:1872,2026-06-06:2120,2026-06-06:2120,2026-06-07:2168,2026-06-07:2168,2026-06-08:2253,2026-06-08:2255,2026-06-09:2322,2026-06-09:2322,2026-06-10:2361,2026-06-11:2414,2026-06-12:2458,2026-06-13:2480,2026-06-14:2500,2026-06-15:2513,2026-06-16:2530,2026-06-17:2540,2026-06-18:2556,2026-06-19:2563,2026-06-20:2577,2026-06-21:2584,2026-06-22:2591,2026-06-23:2595,2026-06-24:2600,2026-06-25:2604,2026-06-26:2605,2026-06-27:2607,2026-06-28:2608"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
aliases:
  - "goose"
  - "b-nnett/goose"
  - "提供 WHOOP 5.0 數據和健康指標的本地應用程式原型。"
---

# goose

**2.6k** stars · **104** stars/天 · 建立 25 天前 · Rust · 未標註授權

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

`個人專案` `ARCHIVED`

> [!summary] 一句話摘要
> 提供 WHOOP 5.0 數據和健康指標的本地應用程式原型。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (104 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Moderate (最後推送 25 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望開發針對 WHOOP 5.0 數據的健康應用的開發者。
> **一句話重點** Goose 專注於 WHOOP 5.0 數據的本地處理，提供即時健康指標，這在市場上是相對獨特的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/b-nnett--goose");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "健康數據處理" && p.file.name !== "b-nnett--goose" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 健康數據處理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到即時健康指標，值得探索。

> [!abstract] 核心創新
> 這個專案的核心創新在於其本地數據處理能力，專為 WHOOP 5.0 設計，能夠即時顯示健康指標。

## 專案簡介

Goose 是一個針對 WHOOP 5.0 的本地健康數據應用程式，旨在將來自 WHOOP 5.0 手環的數據轉換為健康、恢復、睡眠等指標。用戶透過 iOS 應用與手環連接，數據經由 Rust 核心處理，最終呈現於應用界面。這個原型目前仍在開發階段，尚未準備好用於個人健康數據追蹤，性能尚未優化，使用者需耐心等待未來的改進。核心功能包括健康指標的視覺化、教練界面及調試選項，並支援與 HealthKit 的整合。主要的 Swift 入口點包括 `GooseSwiftApp.swift` 和 `GooseBLEClient.swift`，這些文件負責應用的生命週期管理和藍牙連接邏輯。

這個專案的賣點在於它的本地數據處理能力，並且不依賴於 WHOOP 的伺服器，這樣能夠更好地保護用戶隱私。相較於其他健康追蹤應用，Goose 專注於 WHOOP 5.0 的獨特數據，並提供即時的健康指標更新。由於目前仍處於原型階段，使用者可能會遇到數據缺失或延遲的情況，這是因為數據管道尚未完全成熟。社群活躍度較高，開發者歡迎貢獻性能改進的 PR，顯示出對未來發展的期待。

**技術棧**：`Rust` · `Swift` · `Python` · `Shell` · `C`

## 重點功能

- 本地數據處理 — 透過 Rust 核心處理 WHOOP 5.0 數據，無需依賴雲端服務。
- 健康指標視覺化 — 提供睡眠、恢復、壓力等指標的即時更新。
- 藍牙連接 — 使用 `GooseBLEClient.swift` 管理與 WHOOP 5.0 的藍牙連接。
- HealthKit 整合 — 支援將睡眠數據導入 HealthKit，方便用戶管理健康數據。
- 模組化設計 — 各個功能模組獨立，便於未來擴展和維護。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/b-nnett/goose.git
```
2. 打開 Xcode 專案
```bash
open GooseSwift.xcodeproj
```
3. 構建專案
```bash
xcodebuild -project GooseSwift.xcodeproj -scheme GooseSwift -configuration Debug build
```

## 程式碼範例

```rust
[
  "# 前置條件：需要安裝 Xcode 和 Rust",
  "xcodebuild \\",
  "  -project GooseSwift.xcodeproj \\",
  "  -scheme GooseSwift \\",
  "  -configuration Debug \\",
  "  -destination 'platform=iOS Simulator,name=iPhone 17' \\",
  "  -derivedDataPath /tmp/goose-swift-deriveddata \\",
  "  build",
  "# 預期輸出：成功構建 GooseSwift 應用"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 25 天內累積 2608 stars（104/天），forks 647（24.8%），這顯示出相對高的參與度。主要貢獻者 b-nnett 之前有開發相關健康數據應用的經驗，這使得他能夠針對特定的健康追蹤需求進行開發。該專案解決了現有健康應用在處理 WHOOP 5.0 數據時的不足，特別是針對本地數據處理的需求。近期的社群討論中，對於專案的維護狀況和未來功能的需求引發了熱烈的反響，顯示出用戶對這個專案的關注和期待。這個專案的成功也反映了健康數據追蹤工具在市場上的需求增長，尤其是在個人數據隱私日益受到重視的背景下。

## 適合誰使用

**目標受眾**：希望開發針對 WHOOP 5.0 數據的健康應用的開發者。

> [!example] 使用場景
> - 健身教練用它來追蹤客戶的健康數據，因為它能提供即時的恢復和睡眠指標，幫助他們制定個性化的訓練計劃。
> - 健康愛好者用它來分析自己的運動數據，因為它能將 WHOOP 5.0 的數據轉換為可視化的健康指標，便於理解和追蹤。
> - 開發者用它來測試和改進健康數據處理的算法，因為它的開源特性允許他們自由修改和擴展功能。

## 架構分析

Goose 的架構由 SwiftUI 應用和 Rust 核心組成，這樣的設計使得應用能夠在本地處理數據，減少對網路的依賴。數據流從 WHOOP 5.0 手環經藍牙傳輸到 Swift 應用，然後通過 Rust 核心進行處理。這種設計的好處是能夠提高數據隱私性，但代價是需要用戶具備一定的技術能力來構建和維護應用。擴展性方面，由於 Rust 核心是獨立的，未來可以根據需求進行功能擴展，但目前仍需注意性能優化的挑戰。

## 技術深入分析

Goose 的核心技術機制是基於 Rust 和 Swift 的結合，Rust 負責數據處理和性能優化，而 Swift 則用於構建用戶界面。這種設計允許應用在本地處理數據，減少對雲端服務的依賴，從而提高用戶的數據隱私性。效能方面，雖然目前尚未優化，但未來可以通過改進 Rust 核心來提升性能。選擇 Rust 的原因在於其高效能和安全性，這對於處理健康數據至關重要。技術風險方面，隨著用戶數據量的增加，可能會出現性能瓶頸，這需要在未來的版本中進行優化。整合方面，Goose 可以與其他健康數據應用進行互動，但目前仍需進一步開發以提高相容性和使用便利性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝和使用說明，對於有 Xcode 和 Rust 基礎的開發者來說，安裝過程相對順暢。文件中有清晰的構建指令和要求，但對於新手來說可能會有一定的學習曲線。整體而言，花 30 分鐘應該能夠成功構建並運行基本功能。

## 優缺點分析

> [!success] 優點
> - 本地數據處理，增強用戶隱私。
> - 針對 WHOOP 5.0 專門設計，提供即時健康指標。
> - 開源專案，社群活躍，易於貢獻和擴展。

> [!danger] 缺點
> - 性能尚未優化，使用體驗可能不佳。
> - 僅支援 WHOOP 5.0，其他版本不兼容。
> - 仍在開發階段，功能可能不完整。

> [!warning] 注意事項
> - 目前僅支援 WHOOP 5.0，其他版本不兼容。
> - 性能尚未優化，使用時可能會出現延遲。
> - 仍在開發階段，部分功能可能不完整或存在 bug。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於健康數據的即時處理，而 Goose 針對特定的 WHOOP 5.0 數據進行優化。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的健康數據追蹤功能，但不專注於特定設備的數據整合。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於健康數據的即時處理，使用 Python 和 JavaScript，適合快速開發和原型設計。 | 如果你的團隊需要快速開發原型且不特定於 WHOOP 5.0，這是更好的選擇。 | medium，因為需要重新設計數據處理流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的健康數據追蹤功能，使用 Java 和 Kotlin，適合 Android 平台。 | 如果你的應用需要支持多種設備而不僅限於 WHOOP 5.0，這是更合適的選擇。 | high，因為需要重構整個應用架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **goose** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於健康數據的即時處理，使用 Python 和 JavaScript，適合快速開發和原型設計。 | 提供更廣泛的健康數據追蹤功能，使用 Java 和 Kotlin，適合 Android 平台。 |
> | 遷移成本 | - | medium，因為需要重新設計數據處理流程。 | high，因為需要重構整個應用架構。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要快速開發原型且不特定於 WHOOP 5.0， | 如果你的應用需要支持多種設備而不僅限於 WHOOP 5.0， |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合開發者進行探索和測試，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 使用時可能會遇到數據延遲，特別是在數據源不穩定時。
  - 解法：耐心等待數據更新，或檢查藍牙連接狀態。
- [MEDIUM] 部分健康指標可能顯示為空或不可用。
  - 解法：檢查應用的數據來源設置，確保連接到正確的設備。
- **[HIGH]** 構建過程中可能遇到 Rust 環境配置問題。
  - 解法：確保 Rust 和 Cargo 已正確安裝，並遵循 README 中的指示。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 健身教練需要追蹤多位客戶的健康數據 | 適合 | 能夠提供即時的健康指標，幫助教練制定訓練計劃。 |
| 個人開發者想要開發健康數據應用 | 非常適合 | 開源且針對 WHOOP 5.0 設計，易於擴展。 |
| 大型企業需要一個穩定的健康數據追蹤系統 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到即時健康指標，值得探索。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本專案不需要高權限，數據主要存儲在本地，未來的後端功能將需要額外的隱私授權。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Goose 最常與 WHOOP 5.0 手環搭配使用，作為健康數據的本地處理工具。在一個使用 SwiftUI 的健康應用中，Goose 可以用來即時顯示健康指標，具體做法是透過藍牙連接手環並使用 Rust 核心進行數據處理。與主流 CI/CD 工具如 GitHub Actions 相容，便於自動化構建和測試。整合時可能會遇到藍牙連接問題，需確保設備已正確配對。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Goose 出現之前，許多健康數據應用依賴於雲端服務來處理數據，這導致了數據隱私的顧慮。隨著對個人數據隱私的重視增加，Goose 提供了一個本地處理的解決方案。技術上，Rust 的進步使得高效能的本地數據處理變得可行，這使得 Goose 能夠在市場上脫穎而出。

未來，隨著健康數據追蹤需求的增長，這類工具的需求將會持續上升。

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
| Forks | 647 |
| Open Issues | 35 |
| Issue 解決率 | 34% (18 closed) |
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

**社群活躍度**：社群活躍，開發者歡迎貢獻性能改進的 PR。
**連結**：[文件](https://github.com/b-nnett/goose)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-01 ~ 2026-06-02）
> **活躍天數** 2 天 · **最新 commit** Use typed capture frame write rows

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#51](https://github.com/b-nnett/goose/issues/51) | Is this project still maintained? | 10 | 6 |
> | [#25](https://github.com/b-nnett/goose/issues/25) | These PR's are great | 4 | 0 |
> | [#14](https://github.com/b-nnett/goose/issues/14) | Support for additional wearables (Amazfit Helio Strap, Fitbi | 1 | 1 |

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

相關概念：[[健康數據處理]] · [[藍牙連接]] · [[本地數據存儲]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[432539--gpt2api|432539/gpt2api]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]]

[GitHub](https://github.com/b-nnett/goose)

## 相關收錄

> [!note]- 直接競品（同子分類：健康數據處理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "健康數據處理" AND file.name != "b-nnett--goose"
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
> const concepts = ["健康數據處理","藍牙連接","本地數據存儲"];
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

- [[2026-06-09|2026-06-09]] — 再次上榜，2.3k stars
- [[2026-06-08|2026-06-08]] — 再次上榜，2.3k stars
- [[2026-06-07|2026-06-07]] — 再次上榜，2.2k stars
- [[2026-06-06|2026-06-06]] — 再次上榜，2.1k stars
- [[2026-06-05|2026-06-05]] — 再次上榜，1.9k stars
- [[2026-06-04|2026-06-04]] — 再次上榜，1.5k stars
- [[2026-06-03|2026-06-03]] — 首次收錄，752 stars
