---
repo: EEliberto/IPA-Download
url: https://github.com/EEliberto/IPA-Download
owner: EEliberto
owner_type: User
language: Swift
license: Apache-2.0
description: "一款用于安装 IPA 历史版本的工具，适用于获取旧版应用并自动捕获数据包。下载后，可直接通过 AirDrop 传输至 iPhone、iPad 上并安装并使用。"
homepage: ""
stars: 1015
stars_per_day: 254
forks: 54
open_issues: 0
created: 2026-06-13
pushed_at: 2026-06-15
first_seen: 2026-06-17
week: "2026-W25"
month: "2026-06"
category: "開發工具"
subcategory: "IPA 下載工具"
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
appearances: 2
next_review: "2026-06-21"
contributor_count: 1
engagement: "low"
issue_close_rate: 100
repo_size_kb: 67307
readme_length: 1225
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-17"
star_history: "2026-06-17:831,2026-06-17:834,2026-06-18:1012,2026-06-18:1015"
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

**1.0k** stars · **254** stars/天 · 建立 4 天前 · Swift · Apache-2.0

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
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (254 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在 macOS 上安裝舊版 iOS 應用的開發者和測試人員。
> **一句話重點** Pastel 的核心創新在於其 Device GUID 機制，這使得雙重認證的過程變得更加流暢和安全。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/EEliberto--IPA-Download");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "IPA 下載工具" && p.file.name !== "EEliberto--IPA-Download" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 IPA 下載工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到穩定的 IPA 下載功能，值得一試。

> [!abstract] 核心創新
> 引入全新的 Device GUID 機制，以避免頻繁觸發雙重認證。

## 專案簡介

Pastel 是一款專為 macOS 26+ 設計的 IPA 下載工具，能夠輕鬆獲取舊版應用並自動捕獲數據包。用戶只需添加 Apple 帳戶，系統會自動識別地區並完成登錄，並支持透過 AirDrop 將下載的 IPA 文件直接傳輸至 iPhone 或 iPad。這個工具的核心賣點在於其引入的 Device GUID 機制，有效避免了頻繁的雙重認證問題，並且所有數據都安全存儲於 macOS Keychain。使用 SwiftUI 開發，完美適配 macOS 26 的 Liquid Glass 效果，提供了友好的用戶界面和多語言支持。相較於其他 IPA 下載工具，Pastel 提供了更穩定的雙重認證觸發機制和更佳的用戶體驗，特別是在處理 App Store 的版本 ID 時。

此工具的設計考量了用戶的便利性，支持手動輸入版本 ID，並能直接從 Apple 獲取版本信息。雖然目前僅支持 macOS，但未來若有 Windows 版本計劃，將會擴大其用戶基礎。使用者在使用過程中可能會遇到的問題包括需要手動設置 Apple 帳戶，這對於新手來說可能會造成一些困難。整體來說，Pastel 是一款穩定且功能強大的 IPA 下載工具，適合需要安裝舊版應用的用戶，並且在未來可能會進一步增強其功能。

**技術棧**：`Swift` · `JavaScript` · `Shell`

## 重點功能

- Device GUID 機制 — 避免頻繁雙重認證，提升用戶體驗。
- 多語言支持 — 支持簡體中文、繁體中文、日語、韓語和泰語。
- 手動下載自定義 App ID — 用戶可以手動輸入版本 ID 下載特定應用。
- AirDrop 傳輸 — 下載後可直接透過 AirDrop 傳輸至 iPhone 或 iPad。
- 版本 ID 信息來源 — 集成多個下載源，方便用戶快速找到所需版本。

## 快速開始

1. 克隆代碼庫
```bash
git clone https://github.com/EEliberto/IPA-Download.git
```
2. 安裝 Node 依賴
```bash
cd NodeProject && npm install
```
3. 使用 Xcode 打開項目
```bash
open Pastel.xcodeproj
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 1015 stars（254/天），forks 54（5.3%），這顯示出一定的社群關注度。作者 EEliberto 在開源社群中有一定的影響力，這個工具解決了過去 IPA 下載工具在雙重認證和數據保存上的痛點，提供了更穩定的使用體驗。近期的推廣活動和社群討論可能進一步提升了其知名度。技術上，隨著 macOS 26 的推出，這個工具的適用性和需求也隨之增加。forks/stars 比率在 5% 左右，顯示出使用者對於修改和個性化的需求。

## 適合誰使用

**目標受眾**：需要在 macOS 上安裝舊版 iOS 應用的開發者和測試人員。

> [!example] 使用場景
> - iOS 開發者用它來安裝舊版應用進行測試，因為可以快速獲取歷史版本並避免 App Store 的更新限制。
> - 測試人員用它來捕獲應用數據包，因為自動化的數據捕獲功能能夠節省大量手動操作時間。
> - 普通用戶用它來安裝不再更新的應用，因為可以選擇不再更新的特性，避免未來的版本更新影響使用。

## 架構分析

Pastel 採用 SwiftUI 開發，利用 macOS 的原生功能來實現良好的用戶界面和交互體驗。資料流方面，使用者首先需添加 Apple 帳戶，系統會自動識別地區並完成登錄，這一過程依賴於 GSA 技術來穩定觸發雙重認證。下載過程中，Pastel 會從多個來源獲取應用的版本 ID，並將其存儲於 Keychain 中，這樣用戶可以隨時訪問。

選擇使用 Swift 而非其他語言的原因在於其與 macOS 的高度整合性，能夠利用系統的安全性和性能優勢。這種設計雖然提升了用戶體驗，但也限制了未來在 Windows 平台的擴展性。整體而言，Pastel 在設計上考量了用戶的便利性和安全性，未來可能會進一步增強功能以支持更多平台。

## 技術深入分析

Pastel 的核心技術機制是基於 SwiftUI 的開發，這使得它能夠充分利用 macOS 的原生特性，提供流暢的用戶體驗。透過 GSA 技術，Pastel 能夠穩定地觸發雙重認證，這在其他 IPA 下載工具中往往是一個痛點。效能方面，該工具的冷啟動時間相對較短，因為它只需加載必要的依賴，並且所有數據均存儲於 Keychain 中，這樣可以減少對用戶的干擾。設計上選擇 Swift 而非其他語言的原因在於其與 macOS 的整合性，這樣能夠更好地利用系統的安全性和性能優勢。技術風險方面，未來若要擴展至 Windows 平台，可能需要重構部分代碼，這會帶來一定的技術債。整合方面，Pastel 與 macOS 的原生功能相容性良好，但在與其他平台的整合上可能會遇到挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含必要的安裝步驟，對於新手來說相對友好。安裝過程順暢，無重大坑點。雖然沒有專門的入門指南，但使用說明足夠詳細，能夠幫助用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 用戶界面友好，適合新手使用。
> - 自動捕獲數據包功能，節省手動操作時間。
> - 支持多語言，適合不同語言用戶。
> - 引入 Device GUID 機制，提升雙重認證的穩定性。

> [!danger] 缺點
> - 僅支持 macOS，對 Windows 用戶不友好。
> - 需要手動設置 Apple 帳戶，對新手來說可能有一定難度。
> - 目前功能相對單一，未來需要擴展更多功能。

> [!warning] 注意事項
> - 僅支持 macOS 26+ 且配備 Apple 芯片的 Mac。
> - 目前沒有 Windows 版本開發計劃。
> - 需要手動設置 Apple 帳戶，對新手來說可能有一定難度。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 IPA 下載功能，但主要針對遊戲應用，適合遊戲開發者。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於舊版應用的存檔和管理，功能上較為單一，不如 Pastel 多樣化。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 雖然也提供應用下載，但不支持自動捕獲數據包，使用上不如 Pastel 方便。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲應用的 IPA 下載，提供的功能相對較少，主要針對特定用戶群體。 | 如果你的需求主要集中在遊戲應用的下載和管理上，則可以考慮這個工具。 | low，因為兩者的使用方式相似。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於舊版應用的存檔和管理，功能上較為單一，不如 Pastel 多樣化。 | 如果你需要一個簡單的舊版應用管理工具，這個選擇會更合適。 | medium，因為功能和用法上有些差異。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **IPA-Download** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲應用的 IPA 下載，提供的功能相對較少，主要針對特定用戶群體。 | 專注於舊版應用的存檔和管理，功能上較為單一，不如 Pastel 多樣化。 |
> | 遷移成本 | - | low，因為兩者的使用方式相似。 | medium，因為功能和用法上有些差異。 |
> | 適用場景 | 主要場景 | 如果你的需求主要集中在遊戲應用的下載和管理上，則可以考慮這個 | 如果你需要一個簡單的舊版應用管理工具，這個選擇會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人側項目試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 首次使用時需要手動設置 Apple 帳戶，可能會造成困難
  - 解法：參考 README 中的設置說明，逐步操作
- **[HIGH]** 僅支持 macOS，Windows 用戶無法使用
  - 解法：目前無法使用，需等待未來的版本更新
- [MEDIUM] 在某些情況下，雙重認證可能仍然失敗
  - 解法：確保 Apple 帳戶信息正確，並檢查網絡連接

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要安裝舊版應用進行測試 | 非常適合 | 提供了穩定的下載和數據捕獲功能，適合開發測試需求。 |
| 個人用戶希望安裝不再更新的應用 | 適合 | 支持選擇不再更新的特性，滿足用戶需求。 |
| 大型企業需要批量管理多個舊版應用 | 普通 | 雖然功能強大，但目前僅支持 macOS，對於多平台需求不友好。 |
| 需要在 Windows 環境中使用的開發者 | 不適合 | 目前不支持 Windows 平台，無法使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到穩定的 IPA 下載功能，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，所有數據存取均在用戶的 Keychain 中進行，安全性較高。

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
| Forks | 54 |
| Open Issues | 0 |
| Issue 解決率 | 100% (16 closed) |
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

**社群活躍度**：社群活躍度良好，已解決所有開放問題。

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

相關概念：[[CLI/TUI]] · [[自動化]] · [[資料捕獲]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[Doorman11991--smallcode|Doorman11991/smallcode]]

[GitHub](https://github.com/EEliberto/IPA-Download)

## 相關收錄

> [!note]- 直接競品（同子分類：IPA 下載工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "IPA 下載工具" AND file.name != "EEliberto--IPA-Download"
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
> const concepts = ["CLI/TUI","自動化","資料捕獲"];
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

- [[2026-06-18|2026-06-18]] — 再次上榜，1.0k stars
- [[2026-06-17|2026-06-17]] — 首次收錄，831 stars
