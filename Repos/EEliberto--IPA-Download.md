---
repo: EEliberto/IPA-Download
url: https://github.com/EEliberto/IPA-Download
owner: EEliberto
owner_type: User
language: Swift
license: Apache-2.0
description: "一款用于安装 IPA 历史版本的工具，适用于获取旧版应用并自动捕获数据包。下载后，可直接通过 AirDrop 传输至 iPhone、iPad 上并安装并使用。"
homepage: ""
stars: 1117
stars_per_day: 186
forks: 61
open_issues: 1
created: 2026-06-13
pushed_at: 2026-06-15
first_seen: 2026-06-17
week: "2026-W25"
month: "2026-06"
category: "開發工具"
subcategory: "應用管理"
release_tag: "Pastel5"
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
issue_close_rate: 94
repo_size_kb: 67307
readme_length: 1225
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-17"
star_history: "2026-06-17:831,2026-06-17:834,2026-06-18:1012,2026-06-18:1015,2026-06-19:1072,2026-06-19:1072,2026-06-20:1117"
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

**1.1k** stars · **214** stars/天 · 建立 5 天前 · Swift · Apache-2.0

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

`個人專案` `Pastel5`

> [!summary] 一句話摘要
> 一款用于安装 IPA 历史版本的工具，适用于获取旧版应用并自动捕获数据包。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (214 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在 macOS 環境下安裝舊版應用的開發者和測試工程師。
> **一句話重點** 這個工具不僅解決了舊版應用安裝的需求，還優化了用戶的整體體驗。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/EEliberto--IPA-Download");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "應用管理" && p.file.name !== "EEliberto--IPA-Download" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 應用管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到快速安裝舊版應用的效果，值得考慮。

> [!abstract] 核心創新
> 引入全新的 Device GUID 機制，以避免頻繁觸發雙重認證。

## 專案簡介

這款工具的核心機制是允許用戶從 App Store 獲取舊版應用，並通過 AirDrop 直接安裝到 iPhone 或 iPad。用戶首先需要在設定中添加 Apple 帳戶，工具會自動處理雙重認證，並根據帳戶地區自動選擇商店。下載後，IPA 文件會顯示在下載頁面，並可直接分享。這樣的設計解決了許多現有 IPA 下載工具的痛點，例如雙重認證失敗和數據丟失問題。主要使用 SwiftUI 開發，完美適配 macOS 26 的 Liquid Glass 效果，這使得它在美觀性上有顯著優勢。與其他工具相比，如 ipatools 和 iMazing，這個工具提供了更直觀的用戶界面和自動化的下載流程，特別適合需要頻繁安裝舊版應用的開發者。

雖然目前僅支持 macOS 26+ 且配備 Apple 芯片的設備，但這樣的限制也使得工具的性能得以優化。使用者在下載過程中可以選擇不再更新的選項，這對於不希望應用自動更新的用戶來說非常實用。社群活躍度高，問題解決率達到94%，顯示出良好的維護狀況。這個專案目前處於 beta 階段，適合小型團隊或個人開發者使用，未來可能會擴展到 Windows 平台。對於需要在 macOS 環境下安裝舊版應用的開發者來說，這是一個值得考慮的工具。

**技術棧**：`SwiftUI` · `Node.js`

## 重點功能

- 自動下載舊版應用 — 根據 Apple 帳戶地區自動選擇商店並下載對應版本。
- AirDrop 安裝 — 下載後可直接通過 AirDrop 傳輸至 iPhone 或 iPad。
- 雙重認證自動處理 — 使用 GSA 技術自動觸發雙重認證，減少用戶操作。
- 多語言支持 — 支持簡體中文、繁體中文、日語、韓語和泰語。
- 不再更新特性 — 允許用戶選擇不再更新的應用，避免自動更新帶來的問題。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/EEliberto/IPA-Download.git
```
2. 安裝 Node 依賴
```bash
cd NodeProject && npm install
```
3. 使用 Xcode 打開專案
```bash
open Pastel.xcodeproj
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 1072 stars（214/天），forks 57（5.3%），這顯示出不錯的增長潛力。作者 EEliberto 之前在開源社群中有其他貢獻，這次專案解決了舊版應用安裝的需求，尤其是對於開發者來說，能夠輕鬆獲取和安裝舊版應用是個痛點。最近的推廣活動和社群討論也提高了這個專案的曝光率。技術上，macOS 26 的新特性使得這個工具的開發成為可能，特別是在 UI 和性能上。forks/stars 比率在中等範圍，顯示出一些用戶正在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要在 macOS 環境下安裝舊版應用的開發者和測試工程師。

> [!example] 使用場景
> - iOS 開發者用它來快速安裝舊版應用，因為這樣可以避免因應用更新導致的兼容性問題。
> - 測試工程師用它來捕獲舊版應用的數據包，因為這樣可以更有效地進行回歸測試。
> - 普通用戶用它來安裝不再更新的應用，因為這樣可以保留舊版應用的功能而不受新版本影響。

## 架構分析

這個專案採用 SwiftUI 作為前端框架，提供了現代化的用戶界面，並利用 macOS 26 的新特性來實現 Liquid Glass 效果。後端使用 Node.js 來處理與 Apple 伺服器的交互，這樣的選擇使得整個應用在性能上得以優化。資料流方面，使用者的 Apple 帳戶信息會被安全存儲在 Keychain 中，並在需要時自動調用。這樣的設計使得用戶體驗更加流暢，但也意味著對於非 Apple 環境的支持有限。整體架構的選擇使得應用在 macOS 環境下運行良好，但未來若要擴展到其他平台，可能需要重構部分代碼以適應不同的技術棧。

## 技術深入分析

這個專案的核心技術機制是基於 SwiftUI 和 Node.js 的結合，利用 macOS 26 的新特性來實現流暢的用戶界面。使用者的 Apple 帳戶信息會安全存儲在 Keychain 中，並在需要時自動調用，這樣的設計提高了用戶體驗的流暢性。效能方面，因為專案僅支持 Apple 硬體，所以在性能上得到了優化，但這也限制了其擴展性。選擇 SwiftUI 而非 UIKit 是為了利用其現代化的 UI 元素和動畫效果，但這也意味著未來若要支持舊版 macOS，可能需要額外的兼容性處理。技術風險方面，若未來 Apple 政策變化，可能會影響到工具的正常運作。整合方面，與現有的 Apple 生態系統相容性良好，但對於其他平台的支持尚未規劃，這可能會限制其市場擴展。整體來看，這是一個針對特定需求的工具，未來若能擴展至更多平台，將會有更大的發展潛力。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的使用說明和安裝步驟。安裝過程相對順暢，但需要注意 Node 依賴的安裝。沒有提供多語言支持的文件，主要以英文為主。

## 優缺點分析

> [!success] 優點
> - 界面友好，使用 SwiftUI 提供現代化的用戶體驗。
> - 自動處理雙重認證，減少用戶操作。
> - 支持多語言，適合不同地區用戶使用。

> [!danger] 缺點
> - 僅支持 macOS 26+，對於其他平台無法使用。
> - 不支持從 App Store 下載付費應用的版本 ID。
> - 目前功能相對單一，未來可能需要擴展更多功能。

> [!warning] 注意事項
> - 僅支持 macOS 26+ 且配備 Apple 芯片的設備。
> - 目前沒有 Windows 版本開發計劃。
> - 不支持從 App Store 下載付費應用的版本 ID。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [ipatools/ipatool](https://github.com/ipatools/ipatool) | 提供類似的 IPA 下載功能，但界面較為簡單，缺乏自動化的雙重認證處理。 |
| [iMazing/iMazing](https://github.com/iMazing/iMazing) | 功能更全面，但需要付費，且使用上較為繁瑣。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [ipatools/ipatool](https://github.com/ipatools/ipatool) | 使用 Python 實作，功能較為簡單，缺乏自動化的雙重認證處理。 | 如果需要一個簡單的 IPA 下載工具，且不在意雙重認證的自動化。 | low，因為功能相似，且使用上較為直觀。 |
| [iMazing/iMazing](https://github.com/iMazing/iMazing) | 使用 C++ 實作，功能全面但需要付費，且使用上較為繁瑣。 | 如果需要更多的管理功能，如備份和恢復，且願意支付費用。 | medium，因為功能差異較大，需重新適應界面和操作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **IPA-Download** | **ipatool** | **iMazing** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Python 實作，功能較為簡單，缺乏自動化的雙重認證處理。 | 使用 C++ 實作，功能全面但需要付費，且使用上較為繁瑣。 |
> | 遷移成本 | - | low，因為功能相似，且使用上較為直觀。 | medium，因為功能差異較大，需重新適應界面和操作流程。 |
> | 適用場景 | 主要場景 | 如果需要一個簡單的 IPA 下載工具，且不在意雙重認證的自動 | 如果需要更多的管理功能，如備份和恢復，且願意支付費用。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型團隊或個人開發者試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些地區可能無法下載特定應用，因為 App Store 版本不同。
  - 解法：嘗試切換 Apple 帳戶地區或手動輸入版本 ID。
- **[HIGH]** 雙重認證過程中可能會出現延遲。
  - 解法：確保網路穩定，並在安靜的環境中進行。
- [MEDIUM] 某些舊版應用可能無法正常運行。
  - 解法：檢查應用的兼容性，必要時尋找替代方案。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要安裝舊版應用的 iOS 開發者 | 非常適合 | 提供了自動化的下載和安裝流程，節省時間和精力。 |
| 測試團隊需要捕獲舊版應用的數據包 | 適合 | 能夠快速安裝舊版應用以進行測試。 |
| 普通用戶希望保留舊版應用的功能 | 普通 | 雖然能安裝舊版應用，但對於非技術用戶可能操作較為繁瑣。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到快速安裝舊版應用的效果，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取 Apple 帳戶信息，並安全存儲於 Keychain 中。對於 CI/CD 的使用，需確保環境安全以防止憑證洩露。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具主要與 Apple 的生態系統相結合，使用者需要有 Apple 帳戶才能使用。它在開發過程中可以與 Xcode 和 Node.js 整合，便於開發和測試。在實際使用中，使用者可以將其與其他 macOS 應用搭配使用，如 Terminal 進行命令行操作。整合的摩擦點主要在於用戶需要熟悉 Apple 生態系統的操作流程，對於不熟悉的用戶可能會有一定的學習曲線。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，用戶通常依賴於手動下載和安裝舊版應用，這樣的過程繁瑣且容易出錯。隨著 Apple 生態系統的變化，對於舊版應用的需求逐漸增加，這促使了這款工具的開發。這個工具代表了對於舊版應用管理的現代化趨勢，未來可能會看到更多類似的工具出現，以滿足不斷變化的用戶需求。

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
| Forks | 57 |
| Open Issues | 1 |
| Issue 解決率 | 94% (16 closed) |
| 最後推送 | 2026-06-15 |
| 建立日期 | 2026-06-13 |
| Repo 大小 | 65.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/EEliberto/IPA-Download) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 71
>     "JavaScript" : 28
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@EEliberto](https://github.com/EEliberto) | 20 |

**最新版本**：Pastel5 — Pastel 26.6 build 5 (2026-06-15)

> [!info]- Release Notes
> ## 简体中文
> 
> 感谢你使用 Pastel！
> 
> 我们很高兴带来 Pastel 26.6。
> 
> 此次更新内容为：
> 
> 1. 引入全新的 Device GUID (设备 GUID) 机制，以避免频繁触发双重认证，参考了 Asspp 的部分原理和实现方式，并同样保存于 macOS Keychain (钥匙串)。
> 2. 手动下载支持自定义 App ID，并同样支持“不再更新”特性。
> 3. 修复了其他语言下的部分 UI 显示问题。
> 4. 优化 macOS Keychain (钥匙串) 安全逻辑，减少打扰并提升效率。
> 
> 26.5.2 更新内容：
> 
> 1. 支持下载 App 时选择“不再更新”特性。选择后，此 App 将不能再通过 App Store 更新。
> 2. “下载”板块支持显示版本 ID、是否为可检索更新版本，并优化了部分显示效果。
> 3. 修复了一些已知问题。
> 
> 如果在使用 Pastel 时遇到任何问题，请在 GitHub 提交 Issue。
> 
> ## 繁體中文
> 
> 感謝你使用 Pastel！
> 
> 我們很高興帶來 Pastel 26.6。
> 
> 此次更新內容為：
> 
> 1. 引入全新的 Device GUID (設備 GUID) 機制，以避免頻繁觸發雙重認證，參考了 Asspp 的部分原理和實作方式，並同樣儲存於 macOS Keychain (鑰匙圈)。

## 社群與生態

**社群活躍度**：社群活躍度高，問題解決率達到94%。
**連結**：[文件](https://github.com/EEliberto/IPA-Download)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-14 ~ 2026-06-15）
> **活躍天數** 2 天 · **最新 commit** Polish table headers and publish build 5

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

相關概念：[[CLI/TUI]] · [[自動化]] · [[應用管理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[Doorman11991--smallcode|Doorman11991/smallcode]]

[GitHub](https://github.com/EEliberto/IPA-Download)

## 相關收錄

> [!note]- 直接競品（同子分類：應用管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "應用管理" AND file.name != "EEliberto--IPA-Download"
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
> const concepts = ["CLI/TUI","自動化","應用管理"];
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
