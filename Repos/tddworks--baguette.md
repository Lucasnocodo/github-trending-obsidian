---
repo: tddworks/baguette
url: https://github.com/tddworks/baguette
owner: tddworks
owner_type: Organization
language: Swift
license: Apache-2.0
description: "Headless iOS Simulator manager/farm + host-side input injection for iOS 26 — taps, swipes, multi-finger gestures, and 60 fps streaming"
homepage: "https://tddworks.github.io/baguette/"
stars: 739
stars_per_day: 123
forks: 27
open_issues: 3
created: 2026-05-01
pushed_at: 2026-05-07
first_seen: 2026-05-07
week: "2026-W19"
month: "2026-05"
category: "開發工具"
subcategory: "模擬器管理"
release_tag: "v0.1.66"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-07
use_case: "提供無頭 iOS 模擬器管理和主機端輸入注入功能，支持 iOS 26 的多點觸控和 60fps 流媒體。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-15"
contributor_count: 2
engagement: "low"
issue_close_rate: 50
repo_size_kb: 24494
readme_length: 9957
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-07"
star_history: "2026-05-07:691,2026-05-08:739"
tags:
  - github
  - "category/開發工具"
  - "lang/swift"
  - org
  - easy_install
  - "topic/agent"
  - "topic/cli"
  - "topic/devicefarm"
  - "topic/ios"
  - "topic/simulator"
aliases:
  - "baguette"
  - "tddworks/baguette"
  - "提供無頭 iOS 模擬器管理和主機端輸入注入功能，支持 iOS 26 的多點觸控和 60fps 流媒體。"
---

# baguette

**691** stars · **138** stars/天 · 建立 5 天前 · Swift · Apache-2.0

```dataviewjs
const me = dv.page("Repos/tddworks--baguette");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.1.66` `easy-install`

`agent` `cli` `devicefarm` `ios` `simulator` `simulatorkit` `streaming`

> [!summary] 一句話摘要
> 提供無頭 iOS 模擬器管理和主機端輸入注入功能，支持 iOS 26 的多點觸控和 60fps 流媒體。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (138 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在 Apple Silicon 上進行 iOS 測試但不想依賴 GUI 的開發者。
> **一句話重點** Baguette 的設計讓無頭 iOS 測試變得更簡單和高效，特別適合自動化需求。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/tddworks--baguette");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "模擬器管理" && p.file.name !== "tddworks--baguette" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 模擬器管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到高效的無頭 iOS 測試工具，值得投資。

> [!abstract] 核心創新
> 使用 iOS 26 的新 HID 訊息格式，解決了舊工具的兼容性問題。

## 專案簡介

Baguette 是一個用 Swift 實作的 CLI 工具，專為無頭 iOS 模擬器管理而設計。它能夠創建、啟動和關閉模擬器，並以 60 fps 的速度流式傳輸屏幕，還能注入觸控手勢如點擊、滑動和多指觸控，無需啟動 Simulator.app GUI。用戶可以通過 `baguette serve` 命令啟動一個自包含的網頁 UI，從瀏覽器控制已啟動的模擬器。這個工具的賣點在於其高效的輸入注入能力，利用 iOS 26 的新 HID 訊息格式，避免了舊工具的兼容性問題。它的 CLI 提供了多種命令，如 `baguette boot --udid` 來啟動模擬器，並且支持流式傳輸和日誌輸出等功能。

Baguette 使用了 Hummingbird 框架來處理 HTTP 和 WebSocket 通信，並且依賴 Swift 的 Package Manager 管理依賴。這使得它在性能上有良好的表現，且能夠在不同的 Xcode 安裝位置下正常運行。與其他工具相比，如 `idb` 和 `AXe`，Baguette 的新設計使其能夠在 iOS 26 上運行，而不會遭遇崩潰或無法識別的問題。使用 Baguette，開發者能夠更靈活地進行自動化測試和 UI 測試，特別是在需要多設備控制的情境下，這個工具展現了其優勢。

**技術棧**：`Swift` · `Hummingbird` · `Xcode 26`

## 重點功能

- 無頭模擬器管理 — 使用 `baguette boot --udid` 命令啟動模擬器，無需 GUI。
- 60 fps 流媒體 — 支持 MJPEG 或 H.264 格式的流式傳輸，並可調整比特率和幀率。
- 多點觸控輸入 — 支持 taps、swipes 和多指手勢，通過 `IndigoHIDMessageForMouseNSEvent` 進行輸入注入。
- 即時日誌流 — 使用 `baguette logs --udid` 命令實時流式傳輸模擬器的日誌輸出。
- 自包含的網頁 UI — 使用 `baguette serve` 命令啟動本地服務，提供模擬器控制界面。

## 快速開始

1. 安裝 Baguette
```bash
brew install tddworks/tap/baguette
```
2. 啟動模擬器
```bash
baguette boot --udid <模擬器UDID>
```
3. 開始流式傳輸
```bash
baguette stream --udid <模擬器UDID> --fps 60 --format mjpeg
```

## 程式碼範例

```swift
[
  "# 前置條件：已安裝 Baguette 並啟動模擬器",
  "baguette describe-ui --udid <模擬器UDID>",
  "# 預期輸出：返回模擬器上顯示的可訪問性樹的 JSON 結構。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 691 stars（138/天），forks 26（3.8%），這顯示出一定的關注度。這個專案由 hanrw 和 GitHub Actions bot 貢獻，解決了無法在 iOS 26 上使用舊有模擬器工具的痛點，因為舊工具無法適應新的 HID 訊息格式。這個工具的推出可能與開發者對無頭測試需求的增加有關，特別是在自動化測試和 CI/CD 流程中。forks/stars 比率在 3.8% 的範圍內，表明有一定的使用者在進行修改和實驗。

## 適合誰使用

**目標受眾**：需要在 Apple Silicon 上進行 iOS 測試但不想依賴 GUI 的開發者。

> [!example] 使用場景
> - iOS 測試工程師用它來自動化多個模擬器的 UI 測試，因為它支持同時控制多個設備，提升測試效率。
> - DevOps 工程師用它來集成 iOS 模擬器到 CI/CD 流程中，因為它能夠無頭運行，減少資源消耗。
> - 產品經理用它來快速預覽應用在不同設備上的表現，因為它提供即時的屏幕流和多點觸控支持。

## 架構分析

Baguette 採用單一 CLI 架構，設計上旨在簡化無頭模擬器的管理。它通過 Swift 的 Package Manager 管理依賴，並使用 Hummingbird 處理 HTTP 和 WebSocket 通信。資料流方面，模擬器的輸入和輸出通過 IndigoHIDMessageForMouseNSEvent 進行處理，這樣的設計使得無需依賴 GUI，能夠在命令行中直接控制模擬器。這種設計的好處是減少了對 GUI 的依賴，提升了自動化測試的效率，但也意味著使用者需要熟悉 CLI 操作。擴展性方面，Baguette 可以輕鬆地集成到 CI/CD 流程中，但可能在多設備同時控制時面臨性能瓶頸。

## 技術深入分析

Baguette 的核心技術機制在於其對 iOS 26 新 HID 訊息格式的利用，這使得它能夠有效地進行輸入注入。它使用 Hummingbird 框架來處理 HTTP 和 WebSocket 通信，這為用戶提供了即時的數據流和控制。效能方面，Baguette 能夠在 Apple Silicon 上流暢運行，並且支持高達 60 fps 的流媒體輸出。設計上，選擇 Swift 作為主要語言使得開發過程中能夠利用其強大的類型系統和現代語法，但這也意味著對於不熟悉 Swift 的開發者來說，學習成本會增加。技術風險方面，Baguette 依賴於 Xcode 的私有框架，這可能在未來的版本中導致兼容性問題。整合方面，Baguette 與現有的 CI/CD 工具鏈相容性良好，能夠輕鬆集成進入現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程順暢，使用者能夠快速上手。提供的 CLI 指令詳細，且有良好的 getting started guide。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 無頭運行，適合自動化測試和 CI/CD 流程。
> - 支持多點觸控和即時日誌流，提升測試的靈活性。
> - 自包含的網頁 UI 方便用戶操作和監控模擬器狀態。

> [!danger] 缺點
> - 僅支援 Apple Silicon，對於其他硬體無法使用。
> - 需要 Xcode 26，對於舊版本不兼容。
> - CLI 操作對於不熟悉命令行的用戶來說有一定學習曲線。

> [!warning] 注意事項
> - 僅支援 Apple Silicon 硬體。
> - 需要 Xcode 26，且必須正確安裝在預期路徑下。
> - 目前僅支持 iOS 26 的模擬器，對於舊版 iOS 不兼容。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的模擬器控制功能，但不支持無頭模式，適合需要 GUI 的開發者。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 iOS 測試的自動化，但不支持多設備同時控制。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供模擬器控制功能，但依賴 GUI，適合需要視覺化操作的開發者。 | 如果你的團隊偏好使用 GUI 進行模擬器管理，則應選擇此工具。 | medium，因為需要重新學習 GUI 操作。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 iOS 測試的自動化，但不支持多設備同時控制，適合單一設備測試。 | 如果你的需求僅限於單一設備的測試，則此工具更為合適。 | low，因為功能相似，轉換成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **baguette** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供模擬器控制功能，但依賴 GUI，適合需要視覺化操作的開發者。 | 專注於 iOS 測試的自動化，但不支持多設備同時控制，適合單一設備測試。 |
> | 遷移成本 | - | medium，因為需要重新學習 GUI 操作。 | low，因為功能相似，轉換成本較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊偏好使用 GUI 進行模擬器管理，則應選擇此工具 | 如果你的需求僅限於單一設備的測試，則此工具更為合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，模擬器可能無法啟動，特別是 Xcode 路徑不正確時。
  - 解法：確保 Xcode 安裝在預期路徑下，並使用 `xcode-select` 設定正確的路徑。
- [MEDIUM] 使用 CLI 指令時，可能會遇到參數不正確導致的錯誤。
  - 解法：仔細檢查指令格式，並參考官方文檔。
- [MEDIUM] 在多設備控制時，可能會出現性能瓶頸，導致延遲。
  - 解法：減少同時控制的設備數量以提高性能。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行 iOS 應用測試 | 非常適合 | Baguette 的無頭設計和多設備支持能夠提高測試效率。 |
| 大型企業的 iOS 測試團隊 | 適合 | 雖然支持多設備，但可能需要更多的性能優化。 |
| 個人開發者進行 iOS 應用測試 | 非常適合 | 簡單的 CLI 操作和即時流媒體功能非常符合個人開發者的需求。 |
| 需要在 Windows 環境下進行 iOS 測試 | 不適合 | 僅支援 Apple Silicon 硬體，無法在 Windows 上運行。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的無頭 iOS 測試工具，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限操作，且不存取敏感資料，適合在 CI/CD pipeline 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Baguette 最常與 CI/CD 工具搭配使用，特別是在自動化測試流程中。用戶可以在 GitHub Actions 中集成 Baguette，通過 CLI 指令自動啟動模擬器並執行測試。整合時，使用者需確保 Xcode 安裝路徑正確，並可能需要針對不同環境進行配置。與主流 IDE 如 Xcode 的整合良好，但需要注意 CLI 操作的學習曲線。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Baguette 出現之前，開發者主要依賴 GUI 工具進行 iOS 模擬器管理，這些工具在自動化測試方面存在性能瓶頸。隨著 iOS 26 的推出，新的 HID 訊息格式使得無頭測試成為可能。Baguette 的出現代表了自動化測試工具向無頭模式的轉變，未來可能會有更多類似工具出現以滿足開發者的需求。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 CLI 操作
- 了解 iOS 測試流程

> [!tip] 導入策略
> 第一週：在個人項目中試用 Baguette。第二週：在內部工具中進行測試。第三週：撰寫最佳實踐文檔。第四週：在主要產品中開始使用。

**成功指標**：測試時間減少 30%，自動化測試覆蓋率提升。

> [!warning] 退出計畫
> 所有配置文件均為標準 JSON 格式，可以輕鬆轉換為其他測試工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/tddworks--baguette");
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
> const me = dv.page("Repos/tddworks--baguette");
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
| Forks | 26 |
| Open Issues | 1 |
| Issue 解決率 | 50% (1 closed) |
| 最後推送 | 2026-05-06 |
| 建立日期 | 2026-05-01 |
| 官方網站 | [Link](https://tddworks.github.io/baguette/) |
| Repo 大小 | 23.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/tddworks/baguette) |
| Topics | `agent` `cli` `devicefarm` `ios` `simulator` `simulatorkit` `streaming` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 63
>     "JavaScript" : 27
>     "HTML" : 6
>     "CSS" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@hanrw](https://github.com/hanrw) | 134 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 9 |

**最新版本**：v0.1.66 — baguette v0.1.66 (2026-05-06)

> [!info]- Release Notes
> ### Added
> - **Hardware side buttons (action / volume-up / volume-down / power) on the wire and CLI.** Extended `DeviceButton` with the four arbitrary-HID side buttons and added `press(duration:on:)` so the rich domain owns its own dispatch. New CLI: `baguette press --button <name> [--duration <s>]` accepts the full set; the wire JSON gains an optional `duration` for long-press semantics ("Hold for Ring" on the action button, Siri / SOS on power, etc.). Routes through `IndigoHIDMessageForHIDArbitrary(target, page, usage, operation)` — the iOS-26-correct 4-arg shape, NOT the (page, usage, op, timestamp) signature some open-source loaders use. The browser bezel overlay measures real `mousedown` → `mouseup` and forwards the elapsed time, so click-and-hold on a side button just works. `siri` is still rejected (crashes `backboardd` through every known Indigo path). See [`docs/features/buttons.md`](docs/features/buttons.md).
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，最近有多次更新和修復。
**連結**：[文件](https://tddworks.github.io/baguette/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-06 ~ 2026-05-06）
> **活躍天數** 1 天 · **最新 commit** docs(domain-models): clarify rules for naming aggregate repositories

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/tddworks/baguette/issues/2) | [bug]: clone iPhone can not boot `bug` | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> Baguette
> 
> Bon appétit.
> 
>   Headless iOS Simulator manager + host-side input injection for iOS 26.
> 
>   
>   
>   
>   
>   
>   
>   
> 
> A single Swift CLI — **`baguette`** — that creates / boots / shuts down
> simulator devices, streams their screens at 60 fps, and injects taps
> / swipes / multi-finger touches without booting the Simulator.app GUI.
> Optionally serves a self-contained web UI on `localhost` so you can
> control any booted simulator from a browser.
> 
> 
> ## Install
> 
> ```bash
> brew install tddworks/tap/baguette
> ```
> 
> Apple Silicon only. Requires Xcode 26 — `baguette` links against private
> SimulatorKit / CoreSimulator frameworks shipped with Xcode.
> 
> 
> ## Quickstart
> 
> ```bash
> 
> ## Demo
> 
> https://github.com/user-attachments/assets/e904413f-16bb-4b3d-86d5-162333403cee
> 
> https://github.com/user-attachments/assets/c49c9f4b-0e4b-47ea-9272-3223b1ac7739
> 
> https://github.com/user-attachments/assets/65dc62ee-f0c7-48fb-9c57-5bd267c8c02f
> 
> > The raw clip lives at [`assets/demo.mp4`](assets/demo.mp4) — drag
> > it into a GitHub web edit of this README to upload as a CDN-hosted
> > video and replace the line above with the auto-generated URL.
> 
> - **Frame streaming** — MJPEG or H.264 / AVCC over stdout or WebSocket.
>   Runtime-tunable bitrate / fps / scale.
> - **Host-HID input** — taps / swipes / streaming 1- and 2-finger gestures /
>   home, lock, power, action, volume buttons / Mac keyboard / scroll wheel,
>   all through SimulatorKit's 9-argument
>   `IndigoHIDMessageForMouseNSEvent` from Xcode 26's preview-kit. No dylib
>   injection, no `DYLD_INSERT_LIBRARIES`, no per-app priming.
> - **Accessibility tree** — `baguette describe-ui` returns the on-screen
>   AX tree as JSON: per-node `role`, `label`, `value`, `identifier`, and
>   `frame` in the same device-point coordinates as `tap` / `swipe`. Hit-test
>   mode (`--x --y`) returns the topmost node under a coordinate. Powered by
>   the private `AccessibilityPlatformTranslation` framework with a
>   `bridgeTokenDelegate` we install ourselves to make the dispatcher work
>   out of Simulator.app.
> - **Live unified-log stream** — `baguette logs --udid ` streams the
>   booted simulator's `os_log` output line-by-line to stdout; `WS
>   /simulators/:udid/logs` does the same to a browser. Predicate /
>   bundle-id filters supported.
> - **Standalone web UI** — `baguette serve` opens `http://localhost:8421/simulators`
>   with a list page, live stream, gesture input, and DeviceKit-sourced
>   bezels for every simulator family.
> - **Device farm** — `http://localhost:8421/farm` is an interactive
>   multi-device dashboard. Every booted simulator streams in a wall / grid
>   / list, with filtering and sorting; click a tile to focus it for
>   full-quality streaming + gesture and hardware-button input through the
>   same `GestureDispatcher` → `IndigoHIDInput` pipeline as the CLI.
> - **TDD non-negotiable, layered, mock-injected** — bounded-context
>   Domain / Infrastructure / App split; ~290 Swift Testing cases backed
>   by auto-generated `MockXxx` fakes for every external port (`Input`,
>   `Screen`, `Accessibility`, `LogStream`, `Chromes`, `DeviceHost`).
>   Adapters take `any DeviceHost` rather than the concrete
>   `CoreSimulators` so error-path branches are unit-tested without a
>   booted sim. `swift test` requires no simulator at all.
> 
> 
> ### Routes (single resource tree, no `/api/` prefix)
> 
> | Method | Path                                       | Backed by                    |
> |--------|--------------------------------------------|------------------------------|
> | `GET`  | `/`                                        | 302 → `/simulators`          |
> | `GET`  | `/simulators`                              | list HTML                    |
> | `GET`  | `/simulators.json`                         | list JSON `{running, available}` |
> | `GET`  | `/simulators/:udid`                        | stream HTML                  |
> | `POST` | `/simulators/:udid/boot`                   | `simulator.boot()`           |
> | `POST` | `/simulators/:udid/shutdown`               | `simulator.shutdown()`       |
> | `GET`  | `/simulators/:udid/chrome.json`            | DeviceKit bezel layout       |
> | `GET`  | `/simulators/:udid/bezel.png`              | rasterized bezel PNG         |
> | `GET`  | `/simulators/:udid/screenshot.jpg`         | one-shot JPEG of the framebuffer (`?quality=&scale=`) |
> | `WS`   | `/simulators/:udid/stream?format=mjpeg|avcc` | live frames + control + input + `describe_ui` |
> | `WS`   | `/simulators/:udid/logs?level=&style=&predicate=&bundleId=` | live unified-log stream (one `{"type":"log","line":…}` text frame per entry) |
> | `GET`  | `/farm`                                    | device-farm HTML             |
> | `GET`  | `/farm/:file`                              | farm UI asset (`farm.css`, `farm-*.js`, …) |
> | `GET`  | `/.{html,js,css}`                    | static UI asset              |
> 
> 
> ## Why this works on iOS 26.4 when older tools don't
> 
> iOS 26 changed `SimulatorHID`'s wire format. Public tools like `idb` and
> `AXe` call `IndigoHIDMessageForMouseNSEvent` with the old 5-argument
> signature; those messages now route to a pointer-service target that
> silently drops or crashes `backboardd`. Baguette uses the **9-argument
> signature from Xcode 26's preview-kit**, which routes through digitizer
> target `0x32` — the target iOS 26 still honours.
> 
> That single calling-convention change is the entire difference. The
> recipe is heavily commented in `Sources/Baguette/Infrastructure/Input/IndigoHIDInput.swift`,
> and the layered design is documented in
> [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md).
> 
> 
> # Start the web UI
> baguette serve
> 
> 
> # Single-device dashboard — list, boot/shutdown, per-device stream pages
> open http://localhost:8421/simulators
> 
> 
> # Device farm — every booted simulator side-by-side, click to focus
> open http://localhost:8421/farm
> ```
> 
> `/simulators` lists every simulator on the machine with Boot / Shutdown
> buttons; click any booted device to open its Stream page — live frames,
> mouse/touch input, and the DeviceKit-sourced bezel.
> 
> `/farm` is the multi-device control surface. See
> [Device farm](#device-farm) below.
> 
> Headless from the terminal works too:
> 
> ```bash
> baguette list
> baguette boot --udid 
> baguette tap --udid  --x 219 --y 478 --width 438 --height 954
> ```
> 
> 
> ## Build from source
> 
> ```bash
> make           # release build via ./build.sh
> swift test     # run the test suite
> ```
> 
> Hybrid build: SPM fetches dependencies (`ArgumentParser`, `Mockable`,
> `Hummingbird`, `HummingbirdWebSocket`); `swiftc` compiles everything
> with an Objective-C bridging header targeting `arm64e-apple-macos26.0`,
> linking `CoreSimulator`, `SimulatorKit`, `IOSurface`, `VideoToolbox`,
> `CoreGraphics`, `ImageIO` from Xcode's private frameworks.
> 
> 
> ## CLI
> 
> ```
> baguette  [options]
> 
>   list [--json]                              List devices (default + custom sets;
>                                              --json emits {"running":[…],"available":[…]})
>   boot     --udid                      Boot headlessly
>   shutdown --udid                      Shutdown
>   stream   --udid  [--fps 60] [--format mjpeg|avcc]
>                                              Stream frames on stdout
>   screenshot --udid  [--output ] [--quality 0.85] [--scale 1]
>                                              Capture one JPEG frame
>                                              (defaults to stdout)
>   describe-ui --udid  [--x  --y ] [--output ]
>                                              Dump on-screen accessibility tree
>                                              as JSON (full tree or hit-test);
>                                              frames are in DEVICE POINTS so
>                                              they pipe straight back into a tap.
>   logs --udid  [--level info|debug|default]
>                      [--style default|compact|json|ndjson|syslog]
>                      [--predicate ] [--bundle-id ]
>                                              Stream the booted simulator's
>                                              unified log to stdout, line by line
>                           

## 延伸閱讀

相關概念：[[CI/CD]] · [[自動化測試]] · [[模擬器管理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[openai--codex-plugin-cc|openai/codex-plugin-cc]] · [[vibeforge1111--keep-codex-fast|vibeforge1111/keep-codex-fast]] · [[AlpinDale--parsync|AlpinDale/parsync]]

[GitHub](https://github.com/tddworks/baguette) · [官方網站](https://tddworks.github.io/baguette/)

## 相關收錄

> [!note]- 直接競品（同子分類：模擬器管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "模擬器管理" AND file.name != "tddworks--baguette"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "tddworks--baguette"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "tddworks--baguette" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "tddworks--baguette"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CI/CD","自動化測試","模擬器管理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "tddworks--baguette" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/tddworks--baguette");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "tddworks--baguette" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "tddworks" AND file.name != "tddworks--baguette"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/tddworks--baguette");
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
> const me = dv.page("Repos/tddworks--baguette");
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
> const me = dv.page("Repos/tddworks--baguette");
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
> const me = dv.page("Repos/tddworks--baguette");
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
> const me = dv.page("Repos/tddworks--baguette");
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

> **2026-05-07** — 首次收錄
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

- [[2026-05-08|2026-05-08]] — 再次上榜，739 stars
- [[2026-05-07|2026-05-07]] — 首次收錄，691 stars
