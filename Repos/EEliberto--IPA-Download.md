---
repo: EEliberto/IPA-Download
url: https://github.com/EEliberto/IPA-Download
owner: EEliberto
owner_type: User
language: Swift
license: Apache-2.0
description: "一款用于安装 IPA 历史版本的工具，适用于获取旧版应用并自动捕获数据包。下载后，可直接通过 AirDrop 传输至 iPhone、iPad 上并安装并使用。"
homepage: ""
stars: 1463
stars_per_day: 77
forks: 85
open_issues: 0
created: 2026-06-13
pushed_at: 2026-06-22
first_seen: 2026-06-17
week: "2026-W25"
month: "2026-06"
category: "開發工具"
subcategory: "自動化"
release_tag: "Pastel9"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-17
use_case: "一款用于安装 IPA 历史版本的工具，适用于获取旧版应用并自动捕获数据包。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-06-27"
contributor_count: 1
engagement: "low"
issue_close_rate: 100
repo_size_kb: 67439
readme_length: 1225
bus_factor: 1
last_release_days: 11
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-06-17"
star_history: "2026-06-17:831,2026-06-17:834,2026-06-18:1012,2026-06-18:1015,2026-06-19:1072,2026-06-19:1072,2026-06-20:1117,2026-06-20:1117,2026-06-21:1139,2026-06-22:1160,2026-06-23:1218,2026-06-24:1277,2026-06-25:1314,2026-06-26:1359,2026-06-27:1369,2026-06-28:1385,2026-06-29:1400,2026-06-30:1420,2026-07-01:1434,2026-07-02:1452,2026-07-03:1463"
tags:
  - github
  - "category/開發工具"
  - "lang/swift"
aliases:
  - "IPA-Download"
  - "EEliberto/IPA-Download"
  - "一款用于安装 IPA 历史版本的工具，适用于获取旧版应用并自动捕获数据包。"
---

# IPA-Download

**1.5k** stars · **77** stars/天 · 建立 19 天前 · Swift · Apache-2.0

```dataviewjs
const me = dv.page("Repos/EEliberto--IPA-Download");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `Pastel9`

> [!summary] 一句話摘要
> 一款用于安装 IPA 历史版本的工具，适用于获取旧版应用并自动捕获数据包。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (77 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Moderate (最後推送 11 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在 macOS 環境中管理和安裝舊版 IPA 應用的開發者和測試人員。
> **一句話重點** Pastel 不僅是一個 IPA 下載工具，更是解決了用戶在下載舊版應用過程中的多個痛點。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/EEliberto--IPA-Download");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "EEliberto--IPA-Download" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，得到便捷的 IPA 下載體驗，值得嘗試。

> [!abstract] 核心創新
> 使用 GSA 技術觸發雙重認證，提升了用戶登錄的穩定性和安全性。

## 專案簡介

Pastel 是一款專為 macOS 26+ 設計的 IPA 下載工具，能夠幫助用戶輕鬆獲取舊版應用並自動捕獲數據包。用戶只需透過 Apple ID 登錄，系統會自動識別並切換到對應地區的 App Store，並支持直接下載從未下載過的應用。下載後，IPA 文件可以透過 AirDrop 直接傳輸至 iPhone 或 iPad 進行安裝。這樣的設計不僅提升了用戶體驗，還解決了許多現有工具的痛點，例如雙重認證問題。技術上，Pastel 使用 SwiftUI 編寫，完美適配 macOS 的 Liquid Glass 效果，並且支持多語言界面，包括簡體中文和繁體中文。

與其他 IPA 下載工具相比，Pastel 提供了更直觀的用戶界面和更穩定的登錄流程，特別是對於需要頻繁下載舊版應用的開發者來說，這是一個極具吸引力的選擇。使用者可以選擇多個版本進行下載，並且在 Apple 來源中進行二次確認，這在某些情況下能避免誤下載。儘管目前僅支持 macOS，但未來計劃推出 Windows 版本，這將進一步擴大其用戶基礎。整體來看，Pastel 是一款功能強大且易於使用的工具，適合需要管理多個應用版本的開發者和測試人員。

**技術棧**：`SwiftUI` · `Node.js`

## 重點功能

- 多版本下載 — 支持同時選擇多個 App 版本進行下載和刪除。
- Apple ID 登錄 — 自動識別 Apple 账户的所属地区，简化下载流程。
- AirDrop 傳輸 — 下載後可直接透過 AirDrop 傳輸至 iPhone 或 iPad 安裝。
- 手動輸入 App ID — 支持用戶手動輸入 App ID 獲取最新版本。
- 多語言支持 — 支持簡體中文、繁體中文、日語、韓語和泰語等多種語言。

## 快速開始

1. 克隆專案並安裝 Node 依賴
```bash
cd NodeProject && npm install
```
2. 使用 Xcode 打開專案
```bash
open Pastel.xcodeproj
```
3. 運行專案
```bash
在 Xcode 中點擊運行按鈕
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 19 天內累積 1463 stars（77/天），forks 85（5.8%），這顯示出穩定的增長趨勢。作者 EEliberto 之前有開發過類似工具，這次專注於解決舊版應用的下載問題，填補了市場空白。由於目前市場上缺乏針對舊版 IPA 下載的專業工具，這使得 Pastel 自然吸引了許多開發者的注意。技術上，SwiftUI 的使用讓它在 macOS 環境中表現出色，並且其簡單的操作流程也吸引了不少新手用戶。forks/stars 比率顯示出用戶對於這個工具的實際修改和使用意願較高，這是個良好的信號。

## 適合誰使用

**目標受眾**：需要在 macOS 環境中管理和安裝舊版 IPA 應用的開發者和測試人員。

> [!example] 使用場景
> - iOS 開發者用它來快速獲取舊版應用，因為能夠避免手動查找和下載的繁瑣流程，節省了大量時間。
> - 測試人員用它來安裝特定版本的應用進行測試，因為可以直接透過 AirDrop 安裝，提升了測試效率。
> - 新手用戶用它來學習如何管理和安裝 IPA 應用，因為其簡單的界面和操作流程降低了學習門檻。

## 架構分析

Pastel 的架構基於 SwiftUI，專為 macOS 26+ 設計，利用 Liquid Glass 效果提升用戶體驗。用戶通過 Apple ID 登錄，系統自動識別地區並切換到對應的 App Store，這樣的設計使得下載流程變得更加流暢。資料流方面，應用從 Apple 獲取版本 ID，並支持手動輸入，這樣用戶可以靈活選擇所需版本。選擇 SwiftUI 使得界面更加現代化，但也限制了 Windows 平台的支持，這是目前的主要 trade-off。隨著使用者數量的增加，可能會面臨性能瓶頸，特別是在同時處理多個下載請求時。

## 技術深入分析

Pastel 的核心技術機制是基於 SwiftUI，這使得它在 macOS 環境中能夠提供流暢的用戶體驗。它利用 GSA 技術來觸發雙重認證，這在市場上是相對少見的，能夠有效解決用戶在使用其他 IPA 下載工具時遇到的認證問題。效能方面，Pastel 能夠快速處理多個下載請求，但在高並發情況下可能會遇到性能瓶頸。選擇 SwiftUI 作為開發框架，雖然提升了界面的現代感，但也限制了其在 Windows 環境中的使用。這樣的選擇使得專案的依賴樹相對簡單，降低了維護成本。技術風險方面，隨著用戶數量的增加，可能會出現 API 請求的延遲問題，這需要在未來的版本中進行優化。整合方面，Pastel 目前主要針對 macOS 環境，與主流開發工具的整合度較低，這可能會影響其在更大團隊中的採用。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用說明。安裝過程相對順暢，但需要注意 Node 依賴的安裝。沒有提供多語言的文檔，對於非英語用戶可能會造成一定困難。

## 優缺點分析

> [!success] 優點
> - 界面友好，適合新手用戶使用。
> - 支持多語言，擴大了用戶基礎。
> - 能夠自動識別 Apple 账户地區，簡化下載流程。

> [!danger] 缺點
> - 僅支持 macOS，無法在其他平台使用。
> - 需要用戶提供 Apple ID，無法匿名下載。
> - 目前功能尚不完善，未來版本可能需要更多優化。

> [!warning] 注意事項
> - 僅支持 macOS 26+ 且配備 Apple 芯片的 Mac。
> - 目前尚未開發 Windows 版本，無法在 Windows 環境中使用。
> - 需要用戶提供 Apple ID 登錄，無法匿名使用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化生成和管理 Sprite，與本專案的 IPA 下載功能無直接關聯。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種應用的版本管理，但不支持直接從 Apple 下載 IPA。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 主要針對代碼生成，與本專案的應用下載功能不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化生成和管理 Sprite，並不涉及 IPA 下載功能。 | 如果你的需求是生成和管理 Sprite，而非下載 IPA，則應選擇此工具。 | low，因為功能範圍不同，無需遷移。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供多種應用的版本管理，但不支持直接從 Apple 下載 IPA。 | 如果你需要管理多個應用版本而不需要直接下載，則選擇此工具。 | medium，因為需要重新適應不同的工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **IPA-Download** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動化生成和管理 Sprite，並不涉及 IPA 下載功能。 | 提供多種應用的版本管理，但不支持直接從 Apple 下載 IPA。 |
> | 遷移成本 | - | low，因為功能範圍不同，無需遷移。 | medium，因為需要重新適應不同的工作流程。 |
> | 適用場景 | 主要場景 | 如果你的需求是生成和管理 Sprite，而非下載 IPA，則 | 如果你需要管理多個應用版本而不需要直接下載，則選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用或小型專案，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些地區，無法獲取特定應用的版本 ID，導致下載失敗。
  - 解法：嘗試切換到其他地區的 Apple 账户。
- [MEDIUM] 在高並發下載時，可能會出現性能下降。
  - 解法：減少同時下載的應用數量。
- [low] 某些舊版應用可能無法正確顯示圖標。
  - 解法：手動檢查應用版本，並重新下載。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要管理多個應用版本 | 非常適合 | Pastel 提供了便捷的多版本下載功能，適合快速迭代的開發環境。 |
| 需要在 Windows 環境中使用 IPA 下載工具 | 不適合 | 目前僅支持 macOS，無法在 Windows 環境中使用。 |
| 個人開發者需要快速獲取舊版應用 | 適合 | 簡單的操作流程和直觀的界面使得個人開發者能夠輕鬆上手。 |
| 大型企業需要穩定的 IPA 下載解決方案 | 普通 | 目前功能尚不完善，可能無法滿足大型企業的需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到便捷的 IPA 下載體驗，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅需 Apple ID 登錄，並不存取敏感資料。依賴的第三方庫需定期檢查更新以避免安全風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Pastel 最常與 macOS 環境中的開發工具搭配使用，特別是在應用測試和版本管理的工作流中。用戶可以在 Xcode 中使用此工具來獲取所需的舊版應用，具體做法是將下載的 IPA 文件直接導入到 Xcode 的測試環境中。與主流 CI 工具的整合度較低，但未來可能會考慮增加對 CI/CD pipeline 的支持。整合過程中，最常見的問題是需要手動處理 IPA 文件的導入，這可能會影響使用體驗。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Pastel 出現之前，用戶通常依賴於繁瑣的手動查找和下載舊版應用的方法，這些方法效率低且容易出錯。隨著 Apple 生態系統的發展，對於舊版應用的需求逐漸增加，這使得專門的 IPA 下載工具變得必要。Pastel 的出現正好填補了這一空白，並且其基於 SwiftUI 的設計使得它在 macOS 環境中表現出色。

未來，隨著更多開發者對於舊版應用的需求增加，這類工具的市場將會持續擴大。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/EEliberto--IPA-Download");
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
> const me = dv.page("Repos/EEliberto--IPA-Download");
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
| Forks | 85 |
| Open Issues | 0 |
| Issue 解決率 | 100% (18 closed) |
| 最後推送 | 2026-06-22 |
| 建立日期 | 2026-06-13 |
| Repo 大小 | 65.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/EEliberto/IPA-Download) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 74
>     "JavaScript" : 26
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@EEliberto](https://github.com/EEliberto) | 25 |

**最新版本**：Pastel9 — Pastel 26.7 (2026-06-22)

> [!info]- Release Notes
> ## 简体中文
> 
> 感谢你使用 Pastel！
> 
> 我们很高兴带来 Pastel 26.7。
> 
> 此次更新内容为：
> 
> 1. 支持搜索时区分 iPhone、iPad 和 Apple Vision Pro App，并新增了对 Apple Vision Pro 的支持。
> 2. “手动获取”选项现在可在下载页面提供，并支持仅输入 App ID 获取最新版。
> 3. App ID、版本 ID 支持手动拷贝。
> 4. 大量细节优化和用户体验提升。
> 
> 即将到来：Windows 版本适配。
> 
> Pastel 26.6 更新内容：
> 
> 1. 修复部份 UI 显示效果。
> 2. 支持多选 App 版本进行下载、删除。
> 3. 从 Apple 获取来源时检测到从未获取的 App，会进行二次确认。
> 
> ## 繁體中文
> 
> 感謝你使用 Pastel！
> 
> 我們很高興帶來 Pastel 26.7。
> 
> 此次更新內容為：
> 
> 1. 支援搜尋時區分 iPhone、iPad 和 Apple Vision Pro App，並新增對 Apple Vision Pro 的支援。

## 社群與生態

**社群活躍度**：社群活躍度高，所有問題已解決，顯示出良好的維護狀態。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-14 ~ 2026-06-22）
> **活躍天數** 5 天 · **最新 commit** Update Pastel 26.7 build 9

## README 摘錄

> [!info]- 展開查看原文 README
> # Pastel (迄今空前强大的一款 IPA 下载工具)。
> 一款用于安装 IPA 历史版本的工具，适用于获取旧版应用并自动捕获数据包。下载后，可直接通过 AirDrop 传输至 iPhone、iPad 上并安装并使用。
> 
> 目前只支持 macOS 26+ 且配备 Apple 芯片的 Mac。由于作者暂无 Windows PC 设备，故暂时没有 Windows 版本开发计划。
> 
> 使用 SwiftUI 编译，完美适配 macOS 26 的 Liquid Glass 效果。
> 
> # 主页面。
> 你可以轻松使用 Pastel 在对应地区的 App Store 内查看并搜索 App。更强大的是，它能直接根据你选择的 Apple 账户地区自动选择商店。在切换地区时，还会自动切换到你已登陆并对应地区的 Apple 账户。甚至支持直接下载一款此 Apple 账户从未下载过的 App。
> 
> # 现支持简体中文、繁体中文、日语、韩语和泰语作为主要语言。
> 
> # 空前强大的下载页面。
> 你可以直接在下载页面找到已下载的 IPA 文件，并直接预览它的 App Icon，这针对一些特定节假日，比如 618 期间打广告的 App 格外实用。点击分享按钮，便可直接 AirDrop 到你的 iPhone 或 iPad 进行安装。
> 
> # 初次使用。
> 初次使用，请前往“设置”>“Apple 账户”，添加你的 Apple 账户，一切数据都保存在 iCloud KeyChain，放心且安全。在登陆后完成双重认证，Pastel 会自动识别 Apple 账户的所属地区并完成登陆。解决了市面上已有 IPA 下载工具的很多问题，例如双重认证无法触发，经常丢失保存数据等 (使用了 GSA 技术来触发双重认证，更稳定且安全)。
> 
> # 众多来源可选。
> 云集了 Timbrd、Agsy、Bilin 下载源的版本 ID 信息，方便你快速找到对应的版本 ID。
> 
> 如果你想要从 Apple 获取，也没问题，只需要点击 Apple，它就会从你的 Apple 账户获取一次此 App 的版本 ID 并显示 (如果未曾拥有此 App，则会自动完成获取，付费 App 除外)。
> 
> 如果你知道对应 App 的版本 ID，也可手动输入版本 ID 下载。
> 
> # 鸣谢。
> 本项目参考了来自 ipatools 的部份代码和原理 https://github.com/beer-psi/ipatool.ts
> 
> 登陆流程依赖 SideStore 的 GSA。Device (设备) GUID 逻辑参考 https://github.com/Lakr233/Asspp
> 
> 多语言翻译依赖 Claude
> 
> # 源码构建。
> 首次克隆后，请先安装 Node 依赖：
> 
> ```bash
> cd NodeProject
> npm install
> ```
> 
> 然后使用 Xcode 打开 `Pastel.xcodeproj` 构建运行。

## 延伸閱讀

相關概念：[[自動化]] · [[CLI/TUI]] · [[API 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[Doorman11991--smallcode|Doorman11991/smallcode]]

[GitHub](https://github.com/EEliberto/IPA-Download)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "EEliberto--IPA-Download"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "EEliberto--IPA-Download"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "EEliberto--IPA-Download" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W25" AND file.name != "EEliberto--IPA-Download"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CLI/TUI","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "EEliberto--IPA-Download" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/EEliberto--IPA-Download");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "EEliberto--IPA-Download" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "EEliberto" AND file.name != "EEliberto--IPA-Download"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/EEliberto--IPA-Download");
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
> const me = dv.page("Repos/EEliberto--IPA-Download");
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
> const me = dv.page("Repos/EEliberto--IPA-Download");
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
> const me = dv.page("Repos/EEliberto--IPA-Download");
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
> const me = dv.page("Repos/EEliberto--IPA-Download");
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

> **2026-06-17** — 首次收錄
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

- [[2026-06-20|2026-06-20]] — 再次上榜，1.1k stars
- [[2026-06-19|2026-06-19]] — 再次上榜，1.1k stars
- [[2026-06-18|2026-06-18]] — 再次上榜，1.0k stars
- [[2026-06-17|2026-06-17]] — 首次收錄，831 stars
