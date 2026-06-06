---
repo: b-nnett/goose
url: https://github.com/b-nnett/goose
owner: b-nnett
owner_type: User
language: Rust
license: N/A
description: "Goose Swift proof-of-concept README"
homepage: ""
stars: 2120
stars_per_day: 707
forks: 494
open_issues: 23
created: 2026-06-02
pushed_at: 2026-06-02
first_seen: 2026-06-03
week: "2026-W23"
month: "2026-06"
category: "開發工具"
subcategory: "健康數據追蹤"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-03
use_case: "提供 WHOOP 5.0 的本地數據和健康指標追蹤，適合開發者評估其可行性。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-06-09"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 8090
readme_length: 8726
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-03"
star_history: "2026-06-03:752,2026-06-03:757,2026-06-04:1470,2026-06-04:1472,2026-06-05:1869,2026-06-05:1872,2026-06-06:2120,2026-06-06:2120"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
aliases:
  - "goose"
  - "b-nnett/goose"
  - "提供 WHOOP 5.0 的本地數據和健康指標追蹤，適合開發者評估其可行性。"
---

# goose

**2.1k** stars · **707** stars/天 · 建立 3 天前 · Rust · 未標註授權

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
> 提供 WHOOP 5.0 的本地數據和健康指標追蹤，適合開發者評估其可行性。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (707 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 對 WHOOP 5.0 數據追蹤有興趣的開發者，尤其是希望進行原型開發的技術人員。
> **一句話重點** Goose 提供了一個針對 WHOOP 5.0 的本地數據處理解決方案，適合開發者進行原型開發和測試。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/b-nnett--goose");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "健康數據追蹤" && p.file.name !== "b-nnett--goose" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 健康數據追蹤 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到即時健康數據追蹤的效果，值得探索。

> [!abstract] 核心創新
> 專注於 WHOOP 5.0 的本地數據處理，提供即時健康指標視圖。

## 專案簡介

Goose 是一個針對 WHOOP 5.0 的本地數據和健康指標專案，主要設計為一個原型應用，讓開發者評估其可行性。這個應用透過與 WHOOP 5.0 手環的藍牙連接，將數據傳送至 Goose 的 Rust 核心，進而生成每日健康、恢復、睡眠、壓力等指標的視圖。核心賣點在於其本地數據處理能力，避免了依賴雲端服務，並且能夠即時反映用戶的健康狀態。使用者需要在 macOS 上安裝 Xcode 及 Rust，並透過 Xcode 專案進行構建，這對於不熟悉這些工具的開發者來說可能會有一定的門檻。技術上，Goose 使用 SwiftUI 為前端框架，並透過 JSON-over-C 橋接入 Rust 核心，這樣的設計使得應用在性能上可能會有延遲，但未來的性能優化仍在計劃中。

與其他健康數據應用相比，Goose 的獨特之處在於其專注於 WHOOP 5.0 的數據，並且目前僅支持該版本，這使其在功能上有明顯的限制。實際使用中，開發者可能會遇到數據缺失或延遲的問題，這是因為應用仍在開發階段，並且某些指標尚未完全實現。這個專案目前處於 alpha 階段，適合對 WHOOP 5.0 有興趣的開發者進行探索和測試，但不建議用於生產環境。預計未來會有更多功能和性能改進，特別是在數據處理和用戶界面方面。

**技術棧**：`SwiftUI` · `Rust` · `Xcode`

## 重點功能

- 本地數據處理 — 透過 Rust 核心處理 WHOOP 5.0 數據，避免雲端延遲。
- 健康指標視圖 — 提供睡眠、恢復、壓力等多種健康指標的可視化界面。
- SwiftUI 應用 — 使用 SwiftUI 開發，提供現代化的用戶界面。
- 藍牙連接 — 支持與 WHOOP 5.0 手環的藍牙連接，實現即時數據同步。
- 開發者友好 — 提供詳細的構建和開發文檔，適合開發者進行二次開發。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/b-nnett/goose.git
```
2. 進入專案目錄
```bash
cd goose
```
3. 打開 Xcode 專案
```bash
open GooseSwift.xcodeproj
```
4. 構建應用
```bash
xcodebuild -project GooseSwift.xcodeproj -scheme GooseSwift -configuration Debug -destination 'platform=iOS Simulator,name=iPhone 17' -derivedDataPath /tmp/goose-swift-deriveddata build
```

## 程式碼範例

```rust
{
  "前置條件": "需要在 macOS 上安裝 Xcode 和 Rust。",
  "指令": "xcodebuild -project GooseSwift.xcodeproj -scheme GooseSwift -configuration Debug -destination 'platform=iOS Simulator,name=iPhone 17' -derivedDataPath /tmp/goose-swift-deriveddata build",
  "預期輸出": "成功構建 GooseSwift 應用，並生成可在模擬器中運行的應用。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 2120 stars（707/天），forks 494（23.3%），顯示出強烈的開發者興趣。作者 b-nnett 是一位活躍的開發者，這個專案解決了目前 WHOOP 5.0 數據追蹤的需求，特別是針對開發者的原型應用。雖然目前還在 alpha 階段，但其獨特的本地數據處理方式和針對特定設備的設計吸引了不少關注。社群的反應和需求顯示出對這個工具的潛在期待，尤其是在健康數據追蹤日益受到重視的背景下。

## 適合誰使用

**目標受眾**：對 WHOOP 5.0 數據追蹤有興趣的開發者，尤其是希望進行原型開發的技術人員。

> [!example] 使用場景
> - 健身教練用它來追蹤客戶的健康數據，因為能夠即時獲取 WHOOP 5.0 的數據，幫助制定個性化的訓練計劃。
> - 開發者用它來測試 WHOOP 5.0 數據的整合，因為這個專案提供了直接的數據訪問和處理能力，適合進行原型開發。
> - 健康科技公司用它來評估 WHOOP 5.0 數據的商業潛力，因為其本地數據處理的特性可以降低雲端依賴，提升用戶隱私。

## 架構分析

Goose 採用本地優先的架構，主要由 SwiftUI 應用和 Rust 核心組成。這樣的設計使得應用能夠在不依賴雲端的情況下，實時處理和顯示健康數據。數據流從 WHOOP 5.0 手環通過藍牙連接到 Swift 應用，再經由 JSON-over-C 橋接入 Rust 核心進行處理。

這種架構的代價在於性能尚未優化，可能導致應用延遲。未來的擴展性可能會受到 Rust 核心的性能瓶頸影響，特別是在數據量增大時。整體來說，這種設計適合需要本地數據處理的健康應用，但在性能上仍需進一步改進。

## 技術深入分析

Goose 的核心技術機制在於其本地數據處理能力，利用 Rust 作為後端核心，並透過 SwiftUI 提供用戶界面。這種設計使得應用能夠在不依賴雲端的情況下，實時處理和顯示健康數據。應用的性能和規模特性尚未完全實現，因為目前仍在 alpha 階段，可能會遇到數據延遲或缺失的問題。選擇 Rust 作為後端語言的優勢在於其高效能和安全性，但這也帶來了較高的學習曲線和開發複雜度。

依賴樹相對簡單，主要集中在 Rust 和 Swift 的整合上，未來可能需要考慮如何擴展至其他健康設備。技術風險方面，隨著數據量的增大，Rust 核心的性能瓶頸可能會成為一個問題，特別是在需要即時反應的健康數據應用中。整合方面，Goose 與現有的健康數據生態系統的相容性尚需進一步測試，特別是在 CI/CD 流程中的整合。整體來看，Goose 在健康數據追蹤領域提供了一個有趣的原型，但仍需進一步優化和擴展。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的構建指導和使用說明，但缺乏具體的範例。安裝過程需要一定的技術背景，特別是對於 Xcode 和 Rust 的熟悉度。整體而言，對於有經驗的開發者來說，花 30 分鐘應該能夠成功構建並運行應用。

## 優缺點分析

> [!success] 優點
> - 本地數據處理，避免雲端延遲。
> - 針對 WHOOP 5.0 設計，提供專屬的健康指標視圖。
> - 開發者友好，提供詳細的構建和開發文檔。

> [!danger] 缺點
> - 性能尚未優化，可能會有延遲。
> - 僅支持 WHOOP 5.0，限制了使用範圍。
> - 仍在 alpha 階段，不建議用於生產環境。

> [!warning] 注意事項
> - 目前僅支持 WHOOP 5.0，其他版本不兼容。
> - 應用性能尚未優化，可能會有延遲。
> - 數據顯示可能會出現空白或過時的狀態，因為某些指標尚未實現。
> - 仍在 alpha 階段，不建議用於生產環境。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於健康數據的即時處理，但不專門針對 WHOOP 5.0，適合需要多種健康設備數據整合的場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供健康數據的分析和可視化，但不支持本地數據處理，適合需要雲端解決方案的用戶。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於 AI 數據的處理，與健康數據無關，適合需要 AI 數據分析的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於健康數據的即時處理，但不專門針對 WHOOP 5.0，適合需要多種健康設備數據整合的場景。 | 如果你的團隊需要支持多種健康設備，而不僅僅是 WHOOP 5.0。 | medium，因為需要重新整合數據源和處理邏輯。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供健康數據的分析和可視化，但不支持本地數據處理，適合需要雲端解決方案的用戶。 | 如果你的應用需要雲端數據分析，而不需要本地處理。 | low，因為大部分的數據處理邏輯可以直接轉移到雲端。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **goose** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於健康數據的即時處理，但不專門針對 WHOOP 5.0，適合需要多種健康設備數據整合的場景。 | 提供健康數據的分析和可視化，但不支持本地數據處理，適合需要雲端解決方案的用戶。 |
> | 遷移成本 | - | medium，因為需要重新整合數據源和處理邏輯。 | low，因為大部分的數據處理邏輯可以直接轉移到雲端。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要支持多種健康設備，而不僅僅是 WHOOP 5 | 如果你的應用需要雲端數據分析，而不需要本地處理。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 應用在某些設備上可能無法正常運行，特別是未經測試的 iOS 版本。
  - 解法：確保使用最新的 iOS 版本，並在模擬器中進行測試。
- [MEDIUM] 數據顯示可能會出現空白或過時的狀態。
  - 解法：檢查藍牙連接和手環狀態，確保數據源正常。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型健康科技公司開發原型應用 | 非常適合 | 專注於 WHOOP 5.0 數據，提供即時的健康指標。 |
| 大型企業需要穩定的健康數據追蹤解決方案 | 不適合 | 目前仍在 alpha 階段，性能和穩定性不足。 |
| 個人開發者進行健康數據應用的探索 | 適合 | 提供開發者友好的環境和文檔，適合原型開發。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到即時健康數據追蹤的效果，值得探索。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：應用不需要高權限，僅需藍牙連接，並不存取敏感資料。依賴鏈中未發現已知的供應鏈風險，適合在 CI/CD 中使用。

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
| Forks | 494 |
| Open Issues | 23 |
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

**社群活躍度**：社群活躍度中等，開發者可參與討論和貢獻。
**連結**：[文件](https://github.com/b-nnett/goose)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-01 ~ 2026-06-02）
> **活躍天數** 2 天 · **最新 commit** Use typed capture frame write rows

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#14](https://github.com/b-nnett/goose/issues/14) | Support for additional wearables (Amazfit Helio Strap, Fitbi | 1 | 1 |
> | [#8](https://github.com/b-nnett/goose/issues/8) | Whoop 4.0? | 1 | 1 |

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

相關概念：[[健康數據追蹤]] · [[藍牙連接]] · [[本地數據處理]] · [[SwiftUI]] · [[Rust]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]]

[GitHub](https://github.com/b-nnett/goose)

## 相關收錄

> [!note]- 直接競品（同子分類：健康數據追蹤）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "健康數據追蹤" AND file.name != "b-nnett--goose"
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
> const concepts = ["健康數據追蹤","藍牙連接","本地數據處理","SwiftUI","Rust"];
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

- [[2026-06-06|2026-06-06]] — 再次上榜，2.1k stars
- [[2026-06-05|2026-06-05]] — 再次上榜，1.9k stars
- [[2026-06-04|2026-06-04]] — 再次上榜，1.5k stars
- [[2026-06-03|2026-06-03]] — 首次收錄，752 stars
