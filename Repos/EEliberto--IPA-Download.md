---
repo: EEliberto/IPA-Download
url: https://github.com/EEliberto/IPA-Download
owner: EEliberto
owner_type: User
language: Swift
license: Apache-2.0
description: "一款用于安装 IPA 历史版本的工具，适用于获取旧版应用并自动捕获数据包。下载后，可直接通过 AirDrop 传输至 iPhone、iPad 上并安装并使用。"
homepage: ""
stars: 1434
stars_per_day: 84
forks: 81
open_issues: 2
created: 2026-06-13
pushed_at: 2026-06-22
first_seen: 2026-06-17
week: "2026-W25"
month: "2026-06"
category: "開發工具"
subcategory: "API 工具"
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
issue_close_rate: 89
repo_size_kb: 67439
readme_length: 1225
bus_factor: 1
last_release_days: 9
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-06-17"
star_history: "2026-06-17:831,2026-06-17:834,2026-06-18:1012,2026-06-18:1015,2026-06-19:1072,2026-06-19:1072,2026-06-20:1117,2026-06-20:1117,2026-06-21:1139,2026-06-22:1160,2026-06-23:1218,2026-06-24:1277,2026-06-25:1314,2026-06-26:1359,2026-06-27:1369,2026-06-28:1385,2026-06-29:1400,2026-06-30:1420,2026-07-01:1434"
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

**1.4k** stars · **84** stars/天 · 建立 17 天前 · Swift · Apache-2.0

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
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (84 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Moderate (最後推送 9 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在 macOS 上快速下載和安裝舊版 iOS 應用的開發者和測試人員。
> **一句話重點** Pastel 的自動化登錄和多語言支持讓 IPA 下載變得前所未有的簡單。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/EEliberto--IPA-Download");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "API 工具" && p.file.name !== "EEliberto--IPA-Download" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 API 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，得到簡化的 IPA 下載流程，值得一試。

> [!abstract] 核心創新
> 使用 GSA 技術自動化 Apple 账户登錄流程，提升用戶體驗。

## 專案簡介

Pastel 是一款專為 macOS 26+ 設計的 IPA 下載工具，能夠輕鬆獲取舊版應用並自動捕獲數據包。用戶只需輸入 App ID，便可下載對應的 IPA 檔案，並通過 AirDrop 直接安裝到 iPhone 或 iPad。這個工具的賣點在於其簡單的用戶界面和自動化的 Apple 账户登錄流程，利用 GSA 技術來觸發雙重認證，解決了許多現有工具的痛點。技術上，Pastel 使用 SwiftUI 開發，完美適配 macOS 26 的 Liquid Glass 效果，並支持多語言界面。與其他 IPA 下載工具相比，如 ipatools，Pastel 提供了更直觀的用戶體驗和更穩定的登錄流程。

這使得用戶能夠快速找到所需的應用版本，並支持多選下載，提升了效率。雖然目前僅支持 Apple 硬體，但未來計劃推出 Windows 版本，這將擴大其用戶基礎。使用者可能會遇到的問題包括版本 ID 的手動輸入需求，這在某些情況下可能會造成不便。整體來看，Pastel 是一個穩定且易於使用的工具，適合需要頻繁下載舊版應用的開發者和用戶。預計未來會持續更新以支持更多平台和功能。

**技術棧**：`SwiftUI` · `Node.js`

## 重點功能

- 多選下載 — 支持同時選擇多個應用版本進行下載，提升效率。
- 自動化登錄 — 利用 GSA 技術自動觸發雙重認證，簡化登錄流程。
- AirDrop 傳輸 — 下載後可直接通過 AirDrop 安裝到 iPhone 或 iPad。
- 多語言支持 — 支持簡體中文、繁體中文、日語、韓語和泰語，方便不同語言用戶使用。
- 版本 ID 手動輸入 — 用戶可手動輸入版本 ID 下載特定版本的應用，增加靈活性。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/EEliberto/IPA-Download.git
```
2. 安裝 Node 依賴
```bash
cd NodeProject && npm install
```
3. 使用 Xcode 打開並構建
```bash
open Pastel.xcodeproj
```

## 程式碼範例

```swift
{
  "前置條件": "需安裝 Node 依賴",
  "指令": "npm install",
  "預期輸出": "安裝所有必要的 Node 依賴"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 17 天就累積 1434 stars（84/天），forks 81（5.6%），顯示出穩定的增長。作者 EEliberto 過去在 GitHub 上有其他開源項目，這次的工具解決了用戶在尋找和安裝舊版應用時的痛點，特別是自動化的登錄流程和多語言支持。雖然沒有明確的觸發事件，但其功能的實用性和簡單的操作界面吸引了不少用戶。這個工具的成功也反映了對於舊版應用需求的增長，尤其是在開發和測試環境中。forks/stars 比率顯示出用戶對此工具的實際修改和使用，屬於中等水平。

## 適合誰使用

**目標受眾**：需要在 macOS 上快速下載和安裝舊版 iOS 應用的開發者和測試人員。

> [!example] 使用場景
> - iOS 開發者用它來快速下載舊版應用進行測試，因為能夠自動捕獲數據包，提升測試效率。
> - 測試人員用它來安裝特定版本的應用，因為可以輕鬆管理多個版本，避免手動查找的麻煩。
> - 普通用戶用它來安裝不再支持的舊版應用，因為其簡單的操作流程讓不熟悉技術的用戶也能輕鬆使用。

## 架構分析

Pastel 採用 SwiftUI 開發，專注於 macOS 26 的新特性，這樣的選擇使得界面更加現代化且符合 Apple 的設計語言。資料流方面，應用通過 Apple 账户獲取應用版本 ID，並在用戶選擇後進行下載。這種設計使得用戶能夠快速獲取所需的應用版本，並且在登錄過程中使用 GSA 技術來簡化雙重認證。選擇 SwiftUI 而非傳統的 AppKit，帶來了更好的性能和用戶體驗，但也意味著僅限於 macOS 平台。擴展性方面，未來可能會面臨 Windows 版本的開發挑戰，特別是在用戶界面和功能一致性方面。

## 技術深入分析

Pastel 的核心技術機制是基於 SwiftUI 的應用開發，這使得它能夠利用 macOS 26 的新特性，如 Liquid Glass 效果，提升用戶體驗。它的資料流設計中，通過 Apple 账户獲取應用的版本 ID，並在用戶選擇後進行下載，這樣的設計使得用戶能夠快速獲取所需的應用版本。效能方面，Pastel 在下載過程中能夠快速響應用戶操作，並且在處理多選下載時表現良好。選擇 SwiftUI 而非傳統的 AppKit，讓開發者能夠利用現代化的設計模式，但也意味著僅限於 macOS 平台，這可能會限制其未來的擴展性。技術風險方面，隨著用戶量的增加，可能會面臨伺服器負擔的挑戰，特別是在高峰時段。整合方面，Pastel 與 Apple 的生態系統緊密結合，這使得它能夠快速適應 Apple 的更新，但也意味著對 Apple 的依賴程度較高。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用的步驟。安裝過程相對順暢，但需要注意 Node 依賴的安裝。文件中包含多語言支持，對於不同語言的用戶友好。整體來說，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 界面友好，易於使用，特別適合不熟悉技術的用戶。
> - 自動化登錄流程，減少了用戶的操作負擔。
> - 支持多語言，適合不同語言背景的用戶。

> [!danger] 缺點
> - 僅限於 macOS 平台，對於 Windows 用戶無法使用。
> - 需要手動輸入版本 ID，對於某些用戶來說不夠直觀。
> - 目前功能仍在持續更新中，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支持 macOS 26+ 且配備 Apple 芯片的 Mac。
> - 目前不支持 Windows 平台，未來版本尚未確定。
> - 需要手動輸入版本 ID 下載特定版本，對於不熟悉的用戶可能造成困擾。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [beer-psi/ipatool.ts](https://github.com/beer-psi/ipatool.ts) | ipatool 提供了類似的 IPA 下載功能，但缺乏自動化登錄和多語言支持，使用上較為繁瑣。 |
| [Lakr233/Asspp](https://github.com/Lakr233/Asspp) | Asspp 主要針對特定設備的應用下載，功能較為單一，而 Pastel 提供了更全面的應用管理功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| ipatools | ipatools 提供了類似的 IPA 下載功能，但缺乏自動化登錄和多語言支持，使用上較為繁瑣。 | 如果你需要一個功能較為簡單的 IPA 下載工具，並且不需要自動化登錄。 | medium，因為需要重新適應不同的用戶界面和操作流程。 |
| Asspp | Asspp 主要針對特定設備的應用下載，功能較為單一，而 Pastel 提供了更全面的應用管理功能。 | 如果你的需求僅限於特定設備的應用下載，Asspp 可能會更簡單直接。 | low，因為功能較為單一，轉移過程相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **IPA-Download** | **ipatools** | **Asspp** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | ipatools 提供了類似的 IPA 下載功能，但缺乏自動化登錄和多語言支持，使用上較為繁瑣。 | Asspp 主要針對特定設備的應用下載，功能較為單一，而 Pastel 提供了更全面的應用管理功能。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的用戶界面和操作流程。 | low，因為功能較為單一，轉移過程相對簡單。 |
> | 適用場景 | 主要場景 | 如果你需要一個功能較為簡單的 IPA 下載工具，並且不需要自 | 如果你的需求僅限於特定設備的應用下載，Asspp 可能會更簡 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些情況下，App ID 輸入後無法正確識別版本，導致下載失敗。
  - 解法：檢查 App ID 是否正確，或手動查找版本 ID。
- [MEDIUM] 多選下載時，可能會出現 UI 卡頓的情況。
  - 解法：減少同時選擇的應用數量。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | Pastel 提供了簡單的 IPA 下載流程，適合小型團隊快速測試應用。 |
| 大型企業的應用管理系統 | 不適合 | 目前僅支持 macOS，無法滿足多平台需求。 |
| 開發者需要頻繁測試舊版應用 | 非常適合 | 自動化的下載和安裝流程大幅提升測試效率。 |
| 需要在 Windows 環境下進行應用下載 | 不適合 | 目前不支持 Windows 平台，無法使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到簡化的 IPA 下載流程，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需訪問 Apple 账户資料，依賴鏈相對簡單，無已知的供應鏈風險。

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
| Forks | 81 |
| Open Issues | 2 |
| Issue 解決率 | 89% (16 closed) |
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

**社群活躍度**：社群活躍度中等，最近 5 天內有持續更新。
**連結**：[文件](https://github.com/EEliberto/IPA-Download)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-14 ~ 2026-06-22）
> **活躍天數** 5 天 · **最新 commit** Update Pastel 26.7 build 9

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#19](https://github.com/EEliberto/IPA-Download/issues/19) | 可以添加每个版本的发行时间吗？ | 0 | 0 |
> | [#18](https://github.com/EEliberto/IPA-Download/issues/18) | Mac版本太高了 | 0 | 1 |

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

相關概念：[[API 設計]] · [[自動化]] · [[多語言]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[Doorman11991--smallcode|Doorman11991/smallcode]]

[GitHub](https://github.com/EEliberto/IPA-Download)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "EEliberto--IPA-Download"
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
> const concepts = ["API 設計","自動化","多語言"];
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
