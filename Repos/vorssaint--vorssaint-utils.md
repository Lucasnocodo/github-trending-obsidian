---
repo: vorssaint/vorssaint-utils
url: https://github.com/vorssaint/vorssaint-utils
owner: vorssaint
owner_type: User
language: Swift
license: GPL-3.0
description: "Free open-source macOS menu bar toolkit. Per-app volume mixer, system monitor, keep awake, window switcher (Alt Tab), shelf, app uninstaller, and much more."
homepage: "https://vorssaint.com"
stars: 668
stars_per_day: 111
forks: 38
open_issues: 11
created: 2026-06-12
pushed_at: 2026-06-18
first_seen: 2026-06-19
week: "2026-W25"
month: "2026-06"
category: "開發工具"
subcategory: "系統工具"
release_tag: "v3.0.3"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-19
use_case: "提供多種功能的 macOS 菜單列工具，整合音量混音、系統監控、窗口切換等功能。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-26"
contributor_count: 3
engagement: "low"
issue_close_rate: 79
repo_size_kb: 41153
readme_length: 8441
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-19"
star_history: "2026-06-19:668"
tags:
  - github
  - "category/開發工具"
  - "lang/swift"
  - easy_install
  - "topic/alt_tab"
  - "topic/app_uninstaller"
  - "topic/appkit"
  - "topic/finder"
  - "topic/free"
aliases:
  - "vorssaint-utils"
  - "vorssaint/vorssaint-utils"
  - "提供多種功能的 macOS 菜單列工具，整合音量混音、系統監控、窗口切換等功能。"
---

# vorssaint-utils

**668** stars · **111** stars/天 · 建立 6 天前 · Swift · GPL-3.0

```dataviewjs
const me = dv.page("Repos/vorssaint--vorssaint-utils");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v3.0.3` `easy-install`

`alt-tab` `app-uninstaller` `appkit` `finder` `free` `keep-awake` `mac-os` `menu-bar` `menubar` `open-source` `swift` `swift-ui` `system-monitor` `uninstaller` `volume-mixer` `window-switcher`

> [!summary] 一句話摘要
> 提供多種功能的 macOS 菜單列工具，整合音量混音、系統監控、窗口切換等功能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (111 stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在 macOS 上整合多種工具但不想支付高額費用的獨立開發者或創意工作者。
> **一句話重點** Vorssaint 是一個集成多種功能的免費 macOS 工具，適合需要簡化工作流程的用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/vorssaint--vorssaint-utils");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "系統工具" && p.file.name !== "vorssaint--vorssaint-utils" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 系統工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到一個多功能的系統工具，值得嘗試。

> [!abstract] 核心創新
> Vorssaint 將多個付費 macOS 工具整合到一個免費的菜單列應用中。

## 專案簡介

Vorssaint 是一款集成多種功能的 macOS 菜單列應用，旨在取代多個付費工具。用戶可以透過這個應用來調整每個應用的音量、監控系統性能、快速切換窗口、管理文件等，所有功能都集中在一個圖標下。安裝後，用戶可以通過簡單的滑動來調整音量，無需額外的音頻驅動，這使得使用過程中不會影響其他應用的音量。系統監控功能提供 CPU、GPU、內存和電池狀態的實時數據，並且可以顯示網絡上傳和下載速度。窗口切換器提供了更豐富的功能，支持多窗口預覽，並且用戶可以將文件臨時存放在 Shelf 中，方便隨時拖放。這款應用還具備保持 Mac 醒著的功能，並且不會在背景中收集用戶數據，這在當今隱私日益受到重視的環境中顯得尤為重要。Vorssaint 的一句話賣點是：一個應用取代多個付費工具，簡化 macOS 使用體驗。

**技術棧**：`Swift` · `Shell`

## 重點功能

- 每應用音量控制 — 用戶可以獨立調整每個應用的音量，無需額外音頻驅動。
- 系統監控面板 — 實時顯示 CPU、GPU、內存和電池狀態，並提供小型歷史圖表。
- 窗口切換器 — 提供多窗口預覽，支持多個同一應用的窗口顯示。
- 文件 Shelf — 用戶可以將文件臨時存放，方便隨時拖放。
- 應用卸載器 — 方便用戶清理應用的緩存和偏好設置，保持系統整潔。

## 快速開始

1. 使用 Homebrew 安裝 Vorssaint
```bash
brew install --cask vorssaint/tap/vorssaint
```
2. 將現有的 Vorssaint 版本轉換為 Homebrew 管理
```bash
brew install --cask --adopt vorssaint/tap/vorssaint
```
3. 從 releases 頁面下載最新的磁碟映像
```bash
打開磁碟映像並將 Vorssaint 拖入應用程式
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 668 stars（111/天），forks 38（5.7%），顯示出穩定的增長趨勢。這個專案由 vorssaint 和其他幾位貢獻者共同開發，目的是解決 macOS 用戶在使用多個單一功能應用時的繁瑣問題。之前，類似功能的應用通常需要用戶支付高額費用，Vorssaint 提供了一個免費且開源的替代方案，這吸引了許多用戶的關注。社群的反饋也促進了功能的持續改進，像是對 Intel 芯片的支持和菜單欄的改進等需求。

## 適合誰使用

**目標受眾**：需要在 macOS 上整合多種工具但不想支付高額費用的獨立開發者或創意工作者。

> [!example] 使用場景
> - 音樂製作人用它來調整不同應用的音量，因為可以獨立控制每個應用的音量，避免音樂和其他聲音互相干擾。
> - 系統管理員用它來監控伺服器的 CPU 和內存使用情況，因為它提供了實時的系統性能數據，方便快速反應。
> - 設計師用它來快速切換不同的窗口，因為它的窗口切換器支持多窗口預覽，提升了工作效率。

## 架構分析

Vorssaint 採用單一應用架構，將多種功能整合在 macOS 的菜單列中。這樣的設計使得用戶可以在一個界面中訪問所有功能，降低了使用的複雜性。資料流方面，系統監控和音量控制等功能直接從 macOS 的 API 獲取數據，並在菜單列中實時更新。選擇這種設計的代價是需要用戶授予多個權限，但這些權限都是可選的，並不會影響應用的基本功能。擴展性方面，由於功能模組化，用戶可以根據需求開啟或關閉特定功能，這使得應用在不同使用情境下都能保持輕量。

## 技術深入分析

Vorssaint 的核心技術機制是基於 Swift 和 Shell 的開發，利用 macOS 的 API 來實現音量控制、系統監控等功能。這些功能的實現依賴於 macOS 的原生能力，確保了高效能和穩定性。系統監控功能能夠實時處理大量數據，並以圖形化的方式展示，這對於需要監控系統性能的用戶來說非常重要。設計上，Vorssaint 針對用戶的隱私進行了優化，所有數據都在本地處理，並且不會上傳到雲端，這在當前隱私保護日益重要的環境中顯得尤為關鍵。選擇 Swift 作為開發語言，帶來了良好的性能和安全性，但也意味著對於非 macOS 用戶的支持有限。Vorssaint 的依賴樹相對簡單，主要依賴於 macOS 的內建功能，這使得安裝和維護都相對容易。整合方面，Vorssaint 可以與其他 macOS 應用無縫協作，特別是在需要使用系統監控和音量控制的場景中，能夠大幅提升工作效率。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳盡，提供了安裝和使用的具體步驟。安裝過程相對順暢，使用 Homebrew 可以輕鬆安裝。文件中包含多語言支持，對於非英語用戶也友好。

## 優缺點分析

> [!success] 優點
> - 免費且開源，無需訂閱或帳號。
> - 整合多種功能，減少桌面上的應用數量。
> - 用戶友好的界面，易於使用和配置。

> [!danger] 缺點
> - 僅支援最新的 macOS 版本，限制了使用者群。
> - 某些功能可能需要額外的權限，對新手用戶不友好。
> - 目前功能仍在不斷開發中，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 macOS 14 Sonoma 或更新版本。
> - 需要 Apple Silicon 的 Mac。
> - 某些功能需要額外的 macOS 權限，如無法使用則會靜默處理。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個專案專注於創建和管理代理，而 Vorssaint 提供的是系統工具和功能的整合，適用場景不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 是一個針對應用管理的工具，而 Vorssaint 更加注重系統監控和多功能整合。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理管理，Vorssaint 提供的是系統工具的整合。 | 如果你的需求是針對代理的管理和創建，則應選擇這個工具。 | medium，因為功能和設計理念有明顯差異。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 專注於應用管理，而 Vorssaint 提供的是系統監控和多功能整合。 | 如果你需要專注於應用的安裝和卸載，Boneyard 會是更好的選擇。 | low，因為兩者都提供應用管理功能，但功能範圍不同。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **vorssaint-utils** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理管理，Vorssaint 提供的是系統工具的整合。 | Boneyard 專注於應用管理，而 Vorssaint 提供的是系統監控和多功能整合。 |
> | 遷移成本 | - | medium，因為功能和設計理念有明顯差異。 | low，因為兩者都提供應用管理功能，但功能範圍不同。 |
> | 適用場景 | 主要場景 | 如果你的需求是針對代理的管理和創建，則應選擇這個工具。 | 如果你需要專注於應用的安裝和卸載，Boneyard 會是更好 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人使用和測試，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在首次啟動時可能會被阻止，因為需要授予權限。
  - 解法：按照提示授予必要的權限，或參考故障排除指南。
- [MEDIUM] 某些功能在沒有授權的情況下會靜默失效。
  - 解法：檢查應用的權限設置，確保所有需要的權限都已授予。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的系統監控需求 | 非常適合 | Vorssaint 提供了全面的系統監控功能，適合小型團隊使用。 |
| 需要多應用音量控制的音樂製作人 | 適合 | 獨立的音量控制功能能夠滿足音樂製作人的需求。 |
| 大型企業的 IT 管理 | 不適合 | 目前僅支援最新的 macOS 版本，限制了使用者群。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到一個多功能的系統工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Vorssaint 在本地運行，並不需要高權限，所有權限都是可選的，並且不會存取敏感資料。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Vorssaint 最常與其他 macOS 應用搭配使用，例如音樂製作軟體和系統監控工具。在一個使用 Xcode 和 Homebrew 的開發環境中，Vorssaint 可以用來監控系統性能，並調整應用音量。它與主流 CI 工具的整合相對簡單，因為它主要依賴於 macOS 的內建功能。整合的摩擦點主要在於需要授權的功能，這可能會影響用戶的初始體驗。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Vorssaint 出現之前，macOS 用戶通常需要安裝多個單一功能的應用來滿足需求，這導致了桌面上應用過多且管理困難。隨著 macOS 的功能不斷增強，Vorssaint 利用這些原生能力，將多個功能整合到一個應用中，滿足了用戶對簡化工作流程的需求。這個工具代表了當前應用整合的趨勢，未來可能會有更多類似的工具出現，進一步提升用戶體驗。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 macOS 環境
- 基本的系統管理知識

> [!tip] 導入策略
> 第一週：在個人設備上試用。第二週：在小型團隊內部工具中導入。第三週：收集反饋並調整使用方式。

**成功指標**：用戶滿意度提升，系統性能監控準確性提高。

> [!warning] 退出計畫
> 所有設置都可以輕鬆重置，並且應用可以直接刪除，無需複雜的遷移過程。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/vorssaint--vorssaint-utils");
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
> const me = dv.page("Repos/vorssaint--vorssaint-utils");
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
| Forks | 38 |
| Open Issues | 11 |
| Issue 解決率 | 79% (41 closed) |
| 最後推送 | 2026-06-18 |
| 建立日期 | 2026-06-12 |
| 官方網站 | [Link](https://vorssaint.com) |
| Repo 大小 | 40.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/vorssaint/vorssaint-utils) |
| Topics | `alt-tab` `app-uninstaller` `appkit` `finder` `free` `keep-awake` `mac-os` `menu-bar` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 98
>     "Shell" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@vorssaint](https://github.com/vorssaint) | 88 |
> | [@wenujacodes](https://github.com/wenujacodes) | 3 |
> | [@mr-steveryan](https://github.com/mr-steveryan) | 1 |

**最新版本**：v3.0.3 (2026-06-18)

> [!info]- Release Notes
> ### Changed
> - The Shelf is easier to grab and move from the header and empty space, while
>   still accepting dropped items in the empty area.
> - Shelf close and clear controls now have larger hit areas, clearer spacing and
>   a danger hover state for clearing items.
> - The menu panel footer now uses full button hit areas and handles longer
>   translations without overlapping.
> - Settings now uses a shorter What's New sidebar label, and update controls live
>   in About with the other app details.
> 
> ### Fixed
> - The custom green-button maximize option now animates window resizing instead
>   of jumping instantly.
> - Window-control click monitoring now avoids slow accessibility checks unless a
>   click is actually on a window control, reducing stalls in other apps.
> 
> Signed with an Apple Developer ID and notarized by Apple, so it downloads and opens normally. Requires macOS 14 or later. Open the .dmg below and drag Vorssaint to Applications.

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://vorssaint.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-17 ~ 2026-06-18）
> **活躍天數** 2 天 · **最新 commit** Rework README and expand documentation [skip ci]

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#43](https://github.com/vorssaint/vorssaint-utils/issues/43) | [Feature]: Support Mac on Intel chip `enhancement` | 1 | 1 |
> | [#25](https://github.com/vorssaint/vorssaint-utils/issues/25) | [Feature]: Dock previews and Battery % in Menu Bar `enhancement` | 1 | 1 |
> | [#24](https://github.com/vorssaint/vorssaint-utils/issues/24) | [Feature]: change output speakers in each app `enhancement` | 1 | 0 |
> | [#58](https://github.com/vorssaint/vorssaint-utils/issues/58) | [Feature]: Hide Panel Tabs `enhancement` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Vorssaint
> 
> > One small menu bar app that replaces a whole stack of paid Mac utilities.
> 
>   vorssaint.com
> 
>   
>   
>   
>   
> 
> Também disponível em Português (Brasil).
> 
> Vorssaint is the one menu bar app that does the work of a whole shelf of paid Mac tools. Per app volume, a full system monitor, a window switcher, a file shelf, an app uninstaller, link cleaning, keep awake and a handful more, all living behind a single icon up in your menu bar. Install it once and stop paying for and juggling a pile of single purpose apps. It runs entirely on your Mac and stays out of your way. Free, open source, no account, no subscription and no telemetry.
> 
> ## Everything in one menu bar app
> 
> Here is the whole toolkit. Every part can be turned on or off, so you keep what you use and hide the rest.
> 
> ### 🎚️ Per app volume, the one people reach for first
> 
> Vorssaint puts a real mixer in your menu bar, so you can slide any single app up or down while the rest of your Mac stays exactly where it was. Mute a loud video and let your music keep playing. Lift a quiet call without turning everything else up. There is no extra audio driver to install and nothing to set up first.
> 
> On macOS 26 and newer the slider takes on the Liquid Glass look, and earlier versions of macOS keep the familiar one.
> 
> ### 📊 See what your Mac is doing
> 
> - **System monitor.** Follow CPU, GPU, memory, temperatures, battery details and uptime in one compact panel, with small history graphs and optional menu bar readouts.
> - **Network.** Watch live upload and download rates, the totals for your session, and a speed test you can run whenever you are curious.
> - **Power and battery.** Keep an eye on the system draw, the adapter input, the flow in and out of the battery, plus health, cycle count and which apps are burning real energy right now.
> 
> ### 🪟 Move windows and files around
> 
> - **Window switcher.** A richer spin on ⌘Tab with live thumbnails, including more than one window from the same app.
> - **Shelf.** Park files, images, text and links near your cursor for a moment, then drag them wherever they belong later on.
> - **Finder cut and paste.** Use ⌘X and ⌘V to move selected files, while text fields keep their usual shortcuts.
> - **Quit on close.** Let an app quit when its last window closes, with exceptions for the apps you want to leave running.
> - **Green button maximizer.** An optional take on the green button that keeps the window in the current Space and puts it back to its old size on the next click.
> 
> ### ⚡ Keep your Mac awake
> 
> Run a timer or stay up until you say stop. Closed lid mode is there for when you want the Mac to keep going with the screen down, and it stays opt in and tightly scoped so it never catches you off guard.
> 
> ### 🧹 Tidy up and fine tune
> 
> - **Uninstaller.** Drop an app onto Settings, look over the caches, preferences and logs it left around, then move them all to the Trash together.
> - **Clean URL.** Strip the tracking junk out of copied links, with an option to do it automatically.
> - **Cleaning Mode.** Lock the keyboard for a quick wipe down and unlock from the overlay or a repeated key tap.
> - **Scroll direction.** Flip the mouse wheel on its own without touching the trackpad and its natural scrolling.
> - **Fan Control beta.** A safe testing entry is in place, with the manual controls held back until each Mac model is checked out properly.
> 
> ### 🌍 Made to feel at home
> 
> Vorssaint speaks eight languages and you can switch between them anytime in Settings. The compact panel lets you choose between a plain list and grouped sections, and you can tuck away the parts you rarely use, then bring them back from the same spot.
> 
> ## Install
> 
> The easiest way is with [Homebrew](https://brew.sh).
> 
> ```sh
> brew install --cask vorssaint/tap/vorssaint
> ```
> 
> Already running Vorssaint and you would rather not reinstall it? Adopt your current copy into Homebrew with no download.
> 
> ```sh
> brew install --cask --adopt vorssaint/tap/vorssaint
> ```
> 
> From then on, updates arrive with `brew upgrade --cask vorssaint`. You can also grab the latest disk image from the [releases page](https://github.com/vorssaint/vorssaint-utils/releases), open it and drag Vorssaint into Applications.
> 
> Vorssaint is signed with an Apple Developer ID and notarized by Apple, so it opens with no security warning, and that stable signing identity holds on to the permissions you grant across updates.
> 
> ## Private by default
> 
> Vorssaint runs on your machine and asks for nothing it does not need. No account, no telemetry, no analytics and no tracking. The one request it makes on its own is a quiet check for a newer version, which you can switch off, and the speed test only reaches out when you press start. The whole story is written up in the [privacy notes](docs/PRIVACY.md).
> 
> Every macOS permission is optional, and the first run walks you through each one. A feature that is missing a permission simply stays quiet instead of breaking. Here is the short version, with the full picture in the [permissions guide](docs/PERMISSIONS.md).
> 
> | Permission | Used by | Without it |
> |---|---|---|
> | Accessibility | Scroll direction, the switcher, Finder cut and paste, quit on close | Those features stay off |
> | Screen Recording | Window titles and thumbnails in the switcher | The switcher shows app icons only |
> | Notifications | Keep awake, battery and update alerts | The app stays silent |
> | Full Disk Access (optional) | A deeper uninstaller scan | It scans the reachable places only |
> | Administrator (once, optional) | Password free closed lid toggling | A password prompt on each toggle |
> 
> Finder cut and paste and the uninstaller also ask macOS for Automation access the first time they talk to Finder. The shelf needs no permission at all.
> 
> ## What you need
> 
> - A Mac with Apple Silicon
> - macOS 14 Sonoma or newer
> - Xcode Command Line Tools, only if you build it yourself
> 
> ### Build it yourself
> 
> ```sh
> git clone https://github.com/vorssaint/vorssaint-utils.git
> cd vorssaint-utils
> ./build.sh            # compile, generate the icon and assemble the signed bundle
> ./build.sh --install  # the same, then install into Applications and launch
> ```
> 
> The [contributing guide](CONTRIBUTING.md) covers the layout and the conventions. Official Vorssaint builds come only from the maintainer. A fork has to use a different name, icon, bundle identity and signing identity, because the GPL covers the source code and not the Vorssaint name, logo or look. See [TRADEMARKS.md](TRADEMARKS.md).
> 
> ## Troubleshooting
> 
> App blocked on first launch, a permission that will not take hold, or the switcher showing icons instead of thumbnails? The [troubleshooting guide](docs/TROUBLESHOOTING.md) walks through the common fixes, including how to reset permissions and remove the app cleanly.
> 
> ## Uninstall
> 
> ```sh
> ./Tools/uninstall.sh
> ```
> 
> The script quits the app, drops the login item, resets its Accessibility and Screen Recording access, deletes the app along with its preferences and saved state, and removes the optional closed lid rule, so nothing is left behind. You can also drag the app to the Trash and run `tccutil reset All com.vorssaint.utils` to clear its permissions.
> 
> ## Documentation
> 
> - [Privacy](docs/PRIVACY.md), what does and does not leave your Mac
> - [Permissions](docs/PERMISSIONS.md), every macOS permission in plain words
> - [Troubleshooting](docs/TROUBLESHOOTING.md), the common fixes
> - [Contributing](CONTRIBUTING.md), build, layout and conventions
> - [Support](SUPPORT.md), where to get help
> - [Security](SECURITY.md), how to report a vulnerability
> 
> ## Contributing
> 
> Issues and pull requests are very welcome. The [contributing guide](CONTRIBUTING.md) has the build setup, the project conventions and how to add a translation or map the sensors on a new chip. For help, bug reports and feature ideas head to [support](SUPPORT.md), and to report something sensitive in private see the [security policy](SECURITY.md).
> 
> ## Support the project
> 
> Vorssaint is free and it will stay that way. If it earns a place in you

## 延伸閱讀

相關概念：[[自動化]] · [[系統監控]] · [[CLI/TUI]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[ps5-linux--ps5-linux-loader|ps5-linux/ps5-linux-loader]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[Doorman11991--smallcode|Doorman11991/smallcode]]

[GitHub](https://github.com/vorssaint/vorssaint-utils) · [官方網站](https://vorssaint.com)

## 相關收錄

> [!note]- 直接競品（同子分類：系統工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "系統工具" AND file.name != "vorssaint--vorssaint-utils"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "vorssaint--vorssaint-utils"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "vorssaint--vorssaint-utils" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W25" AND file.name != "vorssaint--vorssaint-utils"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","系統監控","CLI/TUI"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "vorssaint--vorssaint-utils" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/vorssaint--vorssaint-utils");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "vorssaint--vorssaint-utils" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "vorssaint" AND file.name != "vorssaint--vorssaint-utils"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/vorssaint--vorssaint-utils");
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
> const me = dv.page("Repos/vorssaint--vorssaint-utils");
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
> const me = dv.page("Repos/vorssaint--vorssaint-utils");
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
> const me = dv.page("Repos/vorssaint--vorssaint-utils");
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
> const me = dv.page("Repos/vorssaint--vorssaint-utils");
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

> **2026-06-19** — 首次收錄
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

- [[2026-06-19|2026-06-19]] — 首次收錄，668 stars
