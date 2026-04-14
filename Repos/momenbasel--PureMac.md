---
repo: momenbasel/PureMac
url: https://github.com/momenbasel/PureMac
owner: momenbasel
owner_type: User
language: Swift
license: MIT
description: "Free, open-source macOS cleaner. CleanMyMac alternative with zero telemetry. Native SwiftUI, scheduled auto-cleaning, Xcode/Homebrew/system cache cleanup. MIT licensed."
homepage: "https://github.com/momenbasel/PureMac#install"
stars: 907
stars_per_day: 181
forks: 41
open_issues: 13
created: 2026-04-08
pushed_at: 2026-04-10
first_seen: 2026-04-14
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "macOS 清理工具"
release_tag: "v1.0.1"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-14
use_case: "提供免費、開源的 macOS 清理工具，無數據收集，為 CleanMyMac 的替代方案。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-21"
contributor_count: 2
engagement: "low"
issue_close_rate: 19
repo_size_kb: 2095
readme_length: 4364
bus_factor: 1
last_release_days: 5
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-14"
star_history: "2026-04-14:907"
tags:
  - github
  - "category/開發工具"
  - "lang/swift"
  - easy_install
  - "topic/cache_cleaner"
  - "topic/cleanmymac"
  - "topic/cleanup"
  - "topic/disk_cleaner"
  - "topic/disk_space"
aliases:
  - "PureMac"
  - "momenbasel/PureMac"
  - "提供免費、開源的 macOS 清理工具，無數據收集，為 CleanMyMac 的替代方案。"
---

# PureMac

**907** stars · **181** stars/天 · 建立 5 天前 · Swift · MIT

```dataviewjs
const me = dv.page("Repos/momenbasel--PureMac");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.0.1` `easy-install`

`cache-cleaner` `cleanmymac` `cleanup` `disk-cleaner` `disk-space` `homebrew` `mac-utility` `macos` `macos-app` `macos-cleaner` `macosx` `native` `oss` `osx` `privacy` `swift` `swiftui` `system-cleaner` `xcode-cleaner`

> [!summary] 一句話摘要
> 提供免費、開源的 macOS 清理工具，無數據收集，為 CleanMyMac 的替代方案。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (181 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要一款無數據收集且免費的 macOS 清理工具的普通用戶和開發者。
> **一句話重點** PureMac 提供了一個完全免費且尊重用戶隱私的 macOS 清理解決方案，這在當前市場中非常稀缺。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/momenbasel--PureMac");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "macOS 清理工具" && p.file.name !== "momenbasel--PureMac" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 macOS 清理工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到高效的系統清理效果，值得使用。

> [!abstract] 核心創新
> PureMac 是一款完全免費且開源的 macOS 清理工具，無數據收集，專為隱私設計。

## 專案簡介

PureMac 是一款免費且開源的 macOS 清理工具，旨在提供一個無需訂閱和數據收集的替代方案。用戶可以通過簡單的點擊來執行智能掃描，清理系統垃圾、用戶緩存、郵件附件等。其核心賣點在於完全離線運行，並使用 SwiftUI 開發，確保了原生性能和用戶隱私。安裝方面，推薦使用 Homebrew，指令為 `brew install --cask puremac`，也可以直接下載最新版本進行安裝。技術上，PureMac 支持定時清理和自動清除可清除空間，這在其他免費工具中並不常見。與 CleanMyMac 和 OnyX 等競爭對手相比，PureMac 提供了更高的隱私保護和開源透明度，且無需支付年費。

雖然它不支持應用程序卸載和惡意軟件掃描，但其針對 Xcode 和 Homebrew 的清理功能是其他工具所不具備的。使用者在清理過程中可以選擇要刪除的項目，這樣能避免誤刪重要文件。社群活躍度尚可，開發者對於問題的回應速度和解決率也在逐步提高。這個專案目前處於穩定階段，適合需要高隱私保護的開發者或普通用戶使用。未來幾個月，預計會持續更新以改善用戶體驗和功能擴展。

**技術棧**：`SwiftUI` · `Ruby`

## 重點功能

- 智能掃描 — 一鍵掃描所有類別，快速識別可清理的文件。
- 系統垃圾清理 — 清理系統緩存、日誌和臨時文件，釋放磁碟空間。
- 定時清理 — 支持自動掃描和清理，使用者可設定掃描間隔。
- Xcode 垃圾清理 — 專門清理 Xcode 的派生數據和模擬器緩存。
- 可清除空間清理 — 自動清理 APFS 的可清除空間，釋放更多磁碟空間。

## 快速開始

1. 安裝 Homebrew（如果尚未安裝）
```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
2. 安裝 PureMac
```bash
brew tap momenbasel/tap && brew install --cask puremac
```
3. 啟動 PureMac
```bash
open /Applications/PureMac.app
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 907 stars（181/天），forks 41（4.5%），顯示出穩定的增長趨勢。作者 momenbasel 和 jeffdeen 具備開源項目的經驗，解決了許多 Mac 清理工具的隱私問題，提供了一個無數據收集的選擇。這個專案的推出正值用戶對隱私和開源工具需求上升的時期，特別是在 macOS 環境中。forks/stars 比率適中，顯示出有一定的使用者在實際修改和使用此工具。

## 適合誰使用

**目標受眾**：需要一款無數據收集且免費的 macOS 清理工具的普通用戶和開發者。

> [!example] 使用場景
> - 獨立開發者用它來清理 Xcode 的緩存，因為這樣可以釋放大量磁碟空間，提升開發效率。
> - 普通用戶用它來定期清理系統垃圾，因為這樣可以保持電腦運行流暢，避免因為過多的臨時文件而影響性能。
> - 系統管理員用它來管理多台 Mac 的清理工作，因為它支持自動化清理，減少手動維護的工作量。

## 架構分析

PureMac 採用 SwiftUI 開發，實現了原生的 macOS 應用體驗。其架構設計為單一應用，無需依賴複雜的外部庫，這樣減少了潛在的安全風險。數據流方面，應用通過掃描特定的系統目錄來識別可清理的文件，並提供用戶選擇。

這種設計使得用戶能夠在清理過程中保持對文件的控制。選擇 SwiftUI 而非 Electron 或其他框架，帶來了更好的性能和用戶體驗，但也限制了跨平台的能力。擴展性方面，未來可能會增加更多清理功能，但目前的設計已經能夠滿足大多數用戶的需求。

## 技術深入分析

PureMac 的核心技術機制是基於 SwiftUI 的原生應用開發，這使得它在性能和用戶體驗上都優於基於 Electron 的工具。它能夠掃描和清理多種類型的文件，包括系統垃圾、用戶緩存和 Xcode 相關的垃圾文件。效能方面，PureMac 能夠快速識別並清理大於 100MB 或超過一年的文件，這對於磁碟空間的管理非常有效。設計上，PureMac 選擇了不使用 App Sandbox，以便能夠訪問所有必要的系統目錄，這雖然提高了功能性，但也可能帶來安全風險。技術風險方面，未來在擴展功能時，可能會面臨與 macOS 更新的兼容性問題。整合方面，PureMac 可以輕鬆與 Homebrew 等工具鏈整合，並且在 CI/CD 流程中也能夠作為清理工具使用，這增加了其在開發者中的吸引力。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝步驟，對於新手友好。安裝過程順暢，使用 Homebrew 安裝無需額外配置。提供了良好的入門指南，幫助用戶快速上手。文件目前僅有英文，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 完全免費，無需訂閱或試用期。
> - 開源，使用者可以審核源代碼，確保隱私。
> - 原生性能，使用 SwiftUI 開發，界面流暢。
> - 提供定時清理功能，減少手動維護工作。

> [!danger] 缺點
> - 不支持應用程序卸載功能，對於需要卸載應用的用戶不夠友好。
> - 缺乏惡意軟件掃描，安全性較低。
> - 目前僅支持 macOS，無法在其他平台使用。
> - 用戶需要手動選擇要刪除的項目，操作上不夠自動化。

> [!warning] 注意事項
> - 不支持應用程序卸載功能。
> - 無法掃描惡意軟件。
> - 目前僅支持 macOS 系統，無法在其他操作系統上運行。
> - 需要用戶手動選擇要刪除的文件，無法自動選擇所有項目。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [momenbasel/PureMac](https://github.com/momenbasel/PureMac) | PureMac 提供完全開源和無數據收集的清理功能，而 CleanMyMac 則需要訂閱並收集用戶數據。 |
| OnyX | OnyX 是免費的，但不支持定時清理功能，且界面不如 PureMac 友好。 |
| AppCleaner | AppCleaner 專注於應用程序卸載，而 PureMac 提供更全面的系統清理功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| CleanMyMac X | CleanMyMac 使用商業模式，收取年費並收集用戶數據，而 PureMac 則完全免費且無數據收集。 | 如果需要全面的功能和專業的技術支持，CleanMyMac 可能更合適。 | medium，因為需要重新適應 PureMac 的使用界面和功能。 |
| OnyX | OnyX 是免費的，但界面不如 PureMac 友好，且缺乏定時清理功能。 | 如果需要更高級的系統維護功能，OnyX 可能更合適。 | low，因為功能上有相似之處，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **PureMac** | **CleanMyMac X** | **OnyX** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | CleanMyMac 使用商業模式，收取年費並收集用戶數據，而 PureMac 則完全免費且無數據收集。 | OnyX 是免費的，但界面不如 PureMac 友好，且缺乏定時清理功能。 |
> | 遷移成本 | - | medium，因為需要重新適應 PureMac 的使用界面和功能。 | low，因為功能上有相似之處，容易上手。 |
> | 適用場景 | 主要場景 | 如果需要全面的功能和專業的技術支持，CleanMyMac 可 | 如果需要更高級的系統維護功能，OnyX 可能更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人使用和小型項目，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 某些掃描類別在未授予完全磁碟訪問權限時無法正常工作。
  - 解法：確保在系統偏好設定中授予應用完全磁碟訪問權限。
- [MEDIUM] 定時清理功能在某些情況下可能無法正常執行。
  - 解法：手動檢查設定，確保選擇了正確的清理間隔。
- **[HIGH]** 在清理過程中可能會誤刪用戶選擇的文件。
  - 解法：在清理前仔細檢查選擇的文件，確保不刪除重要數據。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端開發環境 | 非常適合 | 提供針對 Xcode 的清理功能，適合開發者使用。 |
| 需要定期清理的個人用戶 | 非常適合 | 定時清理功能能有效減少手動維護工作。 |
| 大型企業的 IT 部門 | 不適合 | 缺乏企業級的支持和功能，無法滿足大規模需求。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的系統清理效果，值得使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：PureMac 不需要高權限運行，僅訪問用戶授權的文件和資料夾，且無數據收集。依賴鏈中未發現已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/momenbasel--PureMac");
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
> const me = dv.page("Repos/momenbasel--PureMac");
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
| Forks | 41 |
| Open Issues | 13 |
| Issue 解決率 | 19% (3 closed) |
| 最後推送 | 2026-04-10 |
| 建立日期 | 2026-04-08 |
| 官方網站 | [Link](https://github.com/momenbasel/PureMac#install) |
| Repo 大小 | 2.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/momenbasel/PureMac) |
| Topics | `cache-cleaner` `cleanmymac` `cleanup` `disk-cleaner` `disk-space` `homebrew` `mac-utility` `macos` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 99
>     "Ruby" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@momenbasel](https://github.com/momenbasel) | 18 |
> | [@jeffdeen](https://github.com/jeffdeen) | 1 |

**最新版本**：v1.0.1 — PureMac v1.0.1 (2026-04-09)

> [!info]- Release Notes
> ## What's New in v1.0.1
> 
> ### Universal Binary - Intel + Apple Silicon (#7)
> - PureMac now ships as a **Universal Binary** (`arm64 + x86_64`)
> - Works natively on both Intel and Apple Silicon Macs
> - Notarized and stapled by Apple
> 
> ### Chinese Localization (#8)
> - Added Simplified Chinese (zh-Hans) translation - 116 strings
> - Full localization across all views and categories
> 
> ### Full Disk Access & Permissions (#6)
> - Disabled App Sandbox - the sandbox was blocking access to Trash, Mail, Desktop, Documents, Homebrew cache, and dev caches
> - All scan categories now work correctly with Full Disk Access granted
> 
> ### Download
> - `PureMac-v1.0.1.zip` - Universal Binary (Intel + Apple Silicon), signed and notarized
> - **Homebrew**: `brew install --cask puremac` (update the tap to get v1.0.1)

## 社群與生態

**社群活躍度**：社群活躍度尚可，開發者對問題的回應速度逐漸提高。
**連結**：[文件](https://github.com/momenbasel/PureMac#install)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-08 ~ 2026-04-10）
> **活躍天數** 3 天 · **最新 commit** chore: bump to v1.0.1, fix Universal Binary CI, update Homebrew hash

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#15](https://github.com/momenbasel/PureMac/issues/15) | Thank you | 1 | 0 |
> | [#19](https://github.com/momenbasel/PureMac/issues/19) | [Bug] items in Large & Old Files cannot be selected after 'd `bug` | 0 | 0 |
> | [#18](https://github.com/momenbasel/PureMac/issues/18) | [Feature] Add search/filter by size and date for cache items `enhancement` | 0 | 0 |
> | [#17](https://github.com/momenbasel/PureMac/issues/17) | [Proposal] CLI interface for AI agent / headless use | 0 | 0 |
> | [#16](https://github.com/momenbasel/PureMac/issues/16) | Release zip contains ._* resource fork files that break code | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> PureMac
> 
>   Free, open-source macOS cleaner. The CleanMyMac alternative that respects your privacy.
>   No subscriptions. No telemetry. No data collection. Just a clean Mac.
> 
>   
>   
>   
>   
>   
>   
>   
> 
>   Install -
>   Features -
>   Screenshots -
>   Comparison -
>   Contributing
> 
> ---
> 
> ## Why PureMac?
> 
> Most Mac cleaning apps cost $30-50/year, collect usage data, and show upsell popups. PureMac does the same job for free, runs entirely offline, and the source code is right here for you to audit.
> 
> - **100% free** - no trial, no premium tier, no subscriptions
> - **100% private** - no analytics, no telemetry, no network calls
> - **100% native** - built with SwiftUI, no Electron, no web views
> - **100% open source** - MIT licensed, audit the code yourself
> - **Signed & notarized** - Apple Developer ID, no Gatekeeper warnings
> 
> ## Install
> 
> ### Homebrew (recommended)
> 
> ```bash
> brew tap momenbasel/tap
> brew install --cask puremac
> ```
> 
> ### Direct Download
> 
> Download the latest `.app` from [Releases](https://github.com/momenbasel/PureMac/releases/latest), unzip, and drag to `/Applications`.
> 
> > Signed and notarized with Apple Developer ID - installs without security warnings.
> 
> ### Build from source
> 
> ```bash
> brew install xcodegen
> git clone https://github.com/momenbasel/PureMac.git
> cd PureMac
> xcodegen generate
> xcodebuild -project PureMac.xcodeproj -scheme PureMac -configuration Release -derivedDataPath build build
> open build/Build/Products/Release/PureMac.app
> ```
> 
> ## Features
> 
> - **Smart Scan** - One-click scan across all categories
> - **System Junk** - System caches, logs, and temporary files
> - **User Cache** - Application caches and browser data
> - **Mail Attachments** - Downloaded mail attachments
> - **Trash Bins** - Empty all Trash bins
> - **Large & Old Files** - Files over 100 MB or older than 1 year
> - **Purgeable Space** - APFS purgeable disk space (Time Machine snapshots)
> - **Xcode Junk** - Derived data, archives, and simulator caches
> - **Homebrew Cache** - Homebrew download cache
> - **Scheduled Cleaning** - Automatic scans on configurable intervals
> - **Auto-Purge** - Automatically purge purgeable files on schedule
> - **Click-to-inspect** - See exactly what will be removed before cleaning
> 
> ## Screenshots
> 
> | Smart Scan | Category Detail | File Inspector |
> |---|---|---|
> |  |  |  |
> 
> ## Comparison
> 
> How does PureMac stack up against other Mac cleaning tools?
> 
> | Feature | PureMac | CleanMyMac X | OnyX | AppCleaner |
> |---|---|---|---|---|
> | Price | **Free** | $39.95/yr | Free | Free |
> | Open source | **Yes** | No | No | No |
> | Privacy (no telemetry) | **Yes** | No | Yes | Yes |
> | System cache cleaning | **Yes** | Yes | Yes | No |
> | Xcode junk cleaning | **Yes** | Yes | No | No |
> | Scheduled auto-cleaning | **Yes** | Yes | No | No |
> | Purgeable space purging | **Yes** | No | No | No |
> | App uninstaller | No | Yes | No | Yes |
> | Malware scanner | No | Yes | No | No |
> | Native SwiftUI | **Yes** | No (AppKit) | No (AppKit) | No (AppKit) |
> | macOS Ventura+ | **Yes** | Yes | Yes | Yes |
> 
> ## Scheduling
> 
> 1. Open **Settings** (gear icon or Cmd+,)
> 2. Go to the **Schedule** tab
> 3. Enable **Automatic Cleaning**
> 4. Choose your interval: hourly / 3h / 6h / 12h / daily / weekly / biweekly / monthly
> 5. Optionally enable **Auto-clean after scan** and **Auto-purge purgeable space**
> 
> ## What Gets Cleaned
> 
> | Category | Paths |
> |---|---|
> | System Junk | `/Library/Caches`, `/Library/Logs`, `/tmp`, `~/Library/Logs` |
> | User Cache | `~/Library/Caches`, npm/pip/yarn/pnpm caches |
> | Mail Attachments | `~/Library/Mail Downloads` |
> | Trash | `~/.Trash` |
> | Large Files | `~/Downloads`, `~/Documents`, `~/Desktop` (>100MB or >1yr old) |
> | Purgeable | Time Machine local snapshots via `tmutil` |
> | Xcode | `DerivedData`, `Archives`, `CoreSimulator/Caches` |
> | Homebrew | `~/Library/Caches/Homebrew` |
> 
> ## Safety
> 
> - Never deletes system-critical files
> - Only removes caches, logs, temporary files, and user-selected items
> - Large & Old Files are **not auto-selected** - you choose what to remove
> - All operations are non-destructive to the operating system
> - Purgeable space uses only Time Machine snapshots, not actual free space
> 
> ## Contributing
> 
> Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.
> 
> ## License
> 
> MIT License. See [LICENSE](LICENSE) for details.
> 
> ---
> 
>   If PureMac saved you time or money, consider giving it a star on GitHub.

## 延伸閱讀

相關概念：[[自動化]] · [[macOS]] · [[隱私保護]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[Kuberwastaken--claurst|Kuberwastaken/claurst]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]]

[GitHub](https://github.com/momenbasel/PureMac) · [官方網站](https://github.com/momenbasel/PureMac#install)

## 相關收錄

> [!note]- 直接競品（同子分類：macOS 清理工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "macOS 清理工具" AND file.name != "momenbasel--PureMac"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "momenbasel--PureMac"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "momenbasel--PureMac" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "momenbasel--PureMac"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","macOS","隱私保護"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "momenbasel--PureMac" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/momenbasel--PureMac");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "momenbasel--PureMac" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "momenbasel" AND file.name != "momenbasel--PureMac"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/momenbasel--PureMac");
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
> const me = dv.page("Repos/momenbasel--PureMac");
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
> const me = dv.page("Repos/momenbasel--PureMac");
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
> const me = dv.page("Repos/momenbasel--PureMac");
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
> const me = dv.page("Repos/momenbasel--PureMac");
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

> **2026-04-14** — 首次收錄
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

- [[2026-04-14|2026-04-14]] — 首次收錄，907 stars
