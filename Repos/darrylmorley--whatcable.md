---
repo: darrylmorley/whatcable
url: https://github.com/darrylmorley/whatcable
owner: darrylmorley
owner_type: User
language: Swift
license: MIT
description: "macOS menu bar app that tells you, in plain English, what each USB-C cable plugged into your Mac can actually do"
homepage: "https://github.com/darrylmorley/whatcable/releases/latest"
stars: 1949
stars_per_day: 487
forks: 39
open_issues: 10
created: 2026-05-01
pushed_at: 2026-05-05
first_seen: 2026-05-02
week: "2026-W18"
month: "2026-05"
category: "開發工具"
subcategory: "硬體資訊"
release_tag: "v0.5.7"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-02
use_case: "讓你清楚了解每條 USB-C 線纜的功能，避免充電慢的困擾。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-05-09"
contributor_count: 2
engagement: "low"
issue_close_rate: 54
repo_size_kb: 544
readme_length: 8769
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-02"
star_history: "2026-05-02:694,2026-05-03:1261,2026-05-04:1448,2026-05-05:1726,2026-05-06:1949"
tags:
  - github
  - "category/開發工具"
  - "lang/swift"
  - easy_install
  - "topic/apple_silicon"
  - "topic/hardware_info"
  - "topic/iokit"
  - "topic/mac_app"
  - "topic/macos"
aliases:
  - "whatcable"
  - "darrylmorley/whatcable"
  - "讓你清楚了解每條 USB-C 線纜的功能，避免充電慢的困擾。"
---

# whatcable

**694** stars · **694** stars/天 · 建立 1 天前 · Swift · MIT

```dataviewjs
const me = dv.page("Repos/darrylmorley--whatcable");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.5.7` `easy-install`

`apple-silicon` `hardware-info` `iokit` `mac-app` `macos` `menubar` `menubar-app` `swift` `swiftui` `thunderbolt` `usb-c` `usb-power-delivery` `utility`

> [!summary] 一句話摘要
> 讓你清楚了解每條 USB-C 線纜的功能，避免充電慢的困擾。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (694 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在 macOS 上管理 USB-C 線纜並確保充電效率的使用者。
> **一句話重點** WhatCable 讓使用者能夠清楚了解 USB-C 線纜的能力，避免因為選擇錯誤的線纜而造成的充電問題。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/darrylmorley--whatcable");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "硬體資訊" && p.file.name !== "darrylmorley--whatcable" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 硬體資訊 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~1h · **綁定風險** low
> **結論** 花 1 小時學習和 1 小時整合，能夠獲得即時的 USB-C 線纜診斷，值得投入。

> [!abstract] 核心創新
> WhatCable 透過簡單的菜單欄界面，讓使用者能夠輕鬆了解 USB-C 線纜的實際功能和充電狀態。

## 專案簡介

WhatCable 是一款 macOS 的菜單欄應用程式，能夠以簡單易懂的方式告訴你每條 USB-C 線纜的功能，並診斷為何你的 Mac 可能充電緩慢。使用者只需將 USB-C 線纜插入 Mac，WhatCable 會顯示每個端口的狀態，包括是否為 Thunderbolt、USB 2.0 或充電專用等，並提供充電速度的診斷信息，如「電纜限制充電速度」或「充電良好」。這款應用程式的賣點在於它能將複雜的 IOKit 數據轉化為友好的界面，讓普通用戶也能理解。用戶還可以透過 CLI 指令 `whatcable` 獲取每個端口的摘要信息，或使用 `--json` 參數獲取結構化的 JSON 數據，方便進一步分析。這樣的設計讓使用者能夠快速識別問題，並針對不同的 USB-C 線纜做出明智的選擇。

**技術棧**：`Swift 5.9` · `Shell`

## 重點功能

- 即時充電診斷 — 顯示充電速度的瓶頸，例如「電纜限制充電速度」。
- USB-C 線纜功能概覽 — 以簡單的語言顯示每條線纜的實際速度和電流等級。
- CLI 支援 — 使用 `whatcable` 指令獲取每個端口的摘要或 JSON 格式數據。
- 自定義設置 — 允許用戶隱藏空端口、啟動登錄時啟動等選項。
- 即時更新 — 當有線纜連接或斷開時，提供通知。

## 快速開始

1. 下載應用程式
```bash
從 [Releases page](https://github.com/darrylmorley/whatcable/releases/latest) 下載最新的 WhatCable.zip
```
2. 安裝應用程式
```bash
解壓縮並將 WhatCable.app 拖入 /Applications
```
3. 使用 CLI
```bash
ln -s /Applications/WhatCable.app/Contents/Helpers/whatcable /usr/local/bin/whatcable # 將 CLI 加入 PATH
```

## 程式碼範例

```swift
{
  "前置條件": "已安裝 WhatCable 應用程式",
  "指令": "whatcable --json",
  "預期輸出": "每個端口的結構化 JSON 數據，包括連接狀態和設備信息。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 694 stars（694/天），forks 11（1.6%），這顯示出使用者對於 USB-C 線纜功能的關注。作者 Darryl Morley 之前有開發其他 macOS 應用，這次的 WhatCable 解決了使用者在選擇 USB-C 線纜時的困惑，因為市面上有太多相似的線纜，且功能差異不明。這個工具的出現正好填補了這個市場空白，讓使用者能夠清楚知道每條線纜的實際能力。社群的反應也很熱烈，尤其是對於未來可能增加的功能如桌面小工具的需求。

## 適合誰使用

**目標受眾**：需要在 macOS 上管理 USB-C 線纜並確保充電效率的使用者。

> [!example] 使用場景
> - 設計師用它來檢查每條 USB-C 線纜的速度和功率，因為這樣可以確保他們的外接顯示器能夠以最佳性能運行。
> - 開發者用它來快速診斷充電問題，因為手動檢查每條線纜的規格既繁瑣又容易出錯。
> - 普通使用者用它來了解為何充電速度慢，因為這樣可以避免未來購買不合格的線纜。

## 架構分析

WhatCable 採用單一應用架構，將菜單欄應用與 CLI 工具整合在一起。其核心是基於 IOKit 的診斷引擎，能夠直接從 macOS 的硬體層面獲取 USB-C 線纜的詳細資訊。資料流從 USB-C 端口的狀態開始，通過 IOKit 服務獲取連接狀態、傳輸類型和充電能力，最終在用戶界面上顯示。

這樣的設計使得應用程式能夠即時更新，並提供準確的資訊。選擇使用 Swift 進行開發，因為它能夠與 macOS 的生態系統無縫整合，並且對於硬體交互的支援良好。這樣的架構使得應用程式在性能上具有良好的反應速度，但也意味著只能在 macOS 環境下運行，限制了跨平台的擴展性。

## 技術深入分析

WhatCable 的核心技術機制是基於 IOKit 的四個服務來獲取 USB-C 線纜的詳細資訊，這包括連接狀態、充電能力和設備識別等。這些數據被轉化為用戶友好的界面，讓使用者能夠快速理解每條線纜的功能。效能方面，WhatCable 能夠即時更新連接狀態，並在用戶插入或拔出線纜時提供反饋。這樣的設計使得應用程式在使用上非常流暢，但也意味著需要依賴 macOS 的 IOKit 服務，限制了跨平台的應用。選擇 Swift 作為開發語言，因為它與 macOS 的生態系統兼容性最佳，並且能夠充分利用系統資源。技術風險方面，WhatCable 依賴於 USB-C 線纜的 e-marker 信息，若線纜品質不佳，可能會導致錯誤的診斷結果。整合方面，這個工具可以輕鬆地與其他 macOS 應用程式搭配使用，但由於其專注於 USB-C 功能，可能無法與其他硬體監控工具直接整合。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用範例。安裝過程順暢，沒有明顯的坑。文件目前僅提供英文版本，對於非英語使用者可能需要額外的翻譯支持。

## 優缺點分析

> [!success] 優點
> - 簡單易用的界面，適合所有使用者。
> - 即時診斷功能，能快速識別充電問題。
> - CLI 支援，方便開發者進行自動化檢查。

> [!danger] 缺點
> - 僅限於 macOS 環境，無法在其他作業系統使用。
> - 不支援 Intel Mac，限制了使用者群體。
> - 對於某些低品質的線纜，可能無法提供準確的診斷。

> [!warning] 注意事項
> - 僅支援 macOS 14 (Sonoma) 及以上版本。
> - 不支援 Intel Mac，因為其 USB-C 控制器不提供必要的數據。
> - 不支援 PD 3.2 EPR 變體，可能需要調整以支持未來的規範。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人使用和小型項目，但不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些 M3 硬體上，設備可能會顯示在錯誤的端口上。
  - 解法：確保使用最新版本的 WhatCable，並檢查連接的端口。
- [MEDIUM] 某些低品質的 USB-C 線纜可能會提供錯誤的 e-marker 信息。
  - 解法：使用知名品牌的線纜以確保準確性。
- **[HIGH]** 不支援 Intel Mac，使用者需注意其硬體限制。
  - 解法：考慮升級到 Apple Silicon 的設備。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 設計師需要檢查多條 USB-C 線纜的速度 | 非常適合 | 提供即時的線纜功能診斷，確保外接設備性能最佳。 |
| 開發者需要快速診斷充電問題 | 非常適合 | 能快速識別充電瓶頸，節省排查時間。 |
| 普通使用者對 USB-C 線纜的功能不清楚 | 適合 | 簡單易用的界面讓普通使用者能夠理解。 |
| 需要在 Windows 環境下使用 USB-C 診斷工具 | 不適合 | 僅支援 macOS，無法在 Windows 環境下運行。 |
| 使用 Intel Mac 的使用者 | 不適合 | 不支援 Intel 硬體，無法獲取必要的數據。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~1 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 1 小時學習和 1 小時整合，能夠獲得即時的 USB-C 線纜診斷，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：WhatCable 本身不需要高權限，僅讀取 USB-C 線纜的公開資訊，不存取敏感資料。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

WhatCable 最常與 macOS 環境中的其他硬體監控工具搭配使用，特別是在開發和設計工作流中。用戶可以在使用 Xcode 或其他開發工具時，隨時檢查 USB-C 線纜的狀態。在一個使用 Homebrew 的開發環境中，WhatCable 可以輕鬆安裝並與 CLI 工具整合，提供即時的線纜診斷。與主流工具鏈的相容性良好，但由於其專注於 USB-C 功能，可能無法與其他硬體監控工具直接整合。整合的摩擦點主要在於需要手動設置 CLI 的 PATH，對於不熟悉命令行的使用者來說可能會有一定的學習曲線。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 WhatCable 出現之前，使用者通常依賴於線纜的標籤或包裝來判斷其功能，這種方法不僅不準確，還容易造成誤解。隨著 USB-C 線纜的普及，市場上出現了各種質量參差不齊的產品，讓使用者難以選擇。WhatCable 的出現正好解決了這個問題，透過 IOKit 提供的數據，讓使用者能夠清楚了解每條線纜的實際能力。

隨著 Apple Silicon 的推廣，這種工具的需求也隨之上升，未來可能會有更多針對 USB-C 診斷的工具出現。

## 團隊採用指南

**建議團隊規模**：1-3 人的小型團隊

**前置技能**：
- 熟悉 macOS 環境
- 了解 USB-C 技術基本知識

> [!tip] 導入策略
> 第一週：在個人電腦上試用 WhatCable。第二週：在團隊內部分享使用經驗。第三週：根據使用反饋調整使用方式。第四週：在團隊的開發環境中正式使用。

**成功指標**：能夠快速識別 USB-C 線纜的充電問題，提升工作效率。

> [!warning] 退出計畫
> 若要退出使用，所有設定都可以手動刪除，並不會影響其他應用程式。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/darrylmorley--whatcable");
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
> const me = dv.page("Repos/darrylmorley--whatcable");
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
| Forks | 11 |
| Open Issues | 12 |
| Issue 解決率 | 54% (14 closed) |
| 最後推送 | 2026-05-01 |
| 建立日期 | 2026-05-01 |
| 官方網站 | [Link](https://github.com/darrylmorley/whatcable/releases/latest) |
| Repo 大小 | 544 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/darrylmorley/whatcable) |
| Topics | `apple-silicon` `hardware-info` `iokit` `mac-app` `macos` `menubar` `menubar-app` `swift` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 90
>     "Shell" : 10
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@darrylmorley](https://github.com/darrylmorley) | 55 |
> | [@claude](https://github.com/claude) | 1 |

**最新版本**：v0.5.7 — v0.5.7:  What's fixed (2026-05-01)

> [!info]- Release Notes
> ## What's fixed
> 
> - **USB devices on the wrong port (M3-era follow-up to #21).** v0.5.6 narrowed the device list using a "bus index" derived from the XHCI controller's `locationID` and the port's parent `hpm` SPMI node. That assumption holds on M4 / M5, where the two numbering schemes line up, but breaks on M3 hardware where they don't, so a device on Port 3 could still surface under Port 1 (or under whichever port had no derivable index, which fell back to showing every device). Devices are now matched to their physical port directly via the `UsbIOPort` registry path on the XHCI port nodes, with the bus-index match kept as a fallback for older topologies. When neither matches, the port is now empty instead of dumping every device onto it. Thanks again to @AndrewVos and @nervous-inhuman for the persistence and the very clean test data.
> 
> ## Install
> 
> `brew upgrade --cask whatcable`, or download `WhatCable.zip` from this release page and drag the new `.app` into `/Applications`.

## 社群與生態

**社群活躍度**：社群活躍度中等，回應速度良好。
**連結**：[文件](https://github.com/darrylmorley/whatcable)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-01 ~ 2026-05-01）
> **活躍天數** 1 天 · **最新 commit** Update README for v0.5.5–v0.5.7

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/darrylmorley/whatcable/issues/10) | Four-layer connection diagnostic: host / cable / device / ne | 4 | 0 |
> | [#17](https://github.com/darrylmorley/whatcable/issues/17) | Consider a desktop / Notification Center widget for always-v | 1 | 0 |
> | [#11](https://github.com/darrylmorley/whatcable/issues/11) | Linux Port | 1 | 0 |
> | [#28](https://github.com/darrylmorley/whatcable/issues/28) | WhatCable on Github only showing in Menu bar mode | 0 | 0 |
> | [#27](https://github.com/darrylmorley/whatcable/issues/27) | About WhatCable returns different results depending upon the | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # WhatCable
> 
> > **What can this USB-C cable actually do?**
> 
> A small macOS menu bar app that tells you, in plain English, what each USB-C cable plugged into your Mac can actually do, and **why your Mac might be charging slowly**.
> 
> USB-C hides a lot under one connector. Anything from a USB 2.0 charge-only cable to a 240W / 40 Gbps Thunderbolt 4 cable, all looking identical in your drawer. macOS already exposes the relevant info via IOKit; WhatCable surfaces it as a friendly menu bar popover.
> 
> [](https://github.com/darrylmorley/whatcable/releases/latest)
> [](https://github.com/darrylmorley/whatcable)
> [](LICENSE)
> 
> ## What it shows
> 
> Per port, in plain English:
> 
> - **At-a-glance headline:** Thunderbolt / USB4, USB device, Charging only, Slow USB / charge-only cable, Nothing connected
> - **Charging diagnostic:** when something's plugged in, a banner identifies the bottleneck:
>   - *"Cable is limiting charging speed"* (cable rated below the charger)
>   - *"Charging at 30W (charger can do up to 96W)"* (Mac is asking for less, e.g. battery near full)
>   - *"Charging well at 96W"* (everything matches)
> - **Cable e-marker info:** the cable's actual speed (USB 2.0, 5 / 10 / 20 / 40 / 80 Gbps), current rating (3 A / 5 A up to 60W / 100W / 240W), and the chip's vendor
> - **Charger PDO list:** every voltage profile the charger advertises (5V / 9V / 12V / 15V / 20V…) with the currently negotiated profile highlighted in real time
> - **Connected device identity:** vendor name and product type, decoded from the PD Discover Identity response
> - **Attached USB devices:** storage, hubs, and peripherals listed under the physical port they're plugged into, with their negotiated speed
> - **Active transports:** USB 2 / USB 3 / Thunderbolt / DisplayPort
> - **⌥-click** the menu bar icon (or flip the toggle in Settings) to reveal the underlying IOKit properties for engineers
> 
> Click the **gear icon** in the popover header to open Settings, where you can:
> 
> - Hide empty ports
> - Launch at login
> - Run as a regular Dock app instead of a menu bar icon
> - Get notifications when cables are connected or disconnected
> 
> Right-click the menu bar icon for **Refresh**, a **Keep window open** toggle (handy for screenshots and demos), **Check for Updates…**, **About**, **WhatCable on GitHub**, and **Quit**.
> 
> ## Install
> 
> Download the latest `WhatCable.zip` from the [Releases page](https://github.com/darrylmorley/whatcable/releases/latest), unzip, and drag `WhatCable.app` to `/Applications`.
> 
> The app is universal (Apple silicon + Intel), signed with a Developer ID, and notarised by Apple, so there are no Gatekeeper warnings.
> 
> Requires macOS 14 (Sonoma) or later. Apple Silicon only. On Intel Macs, the USB-C ports are driven by Intel Titan Ridge / JHL9580 Thunderbolt 3 controllers, and the USB-PD state and cable e-marker data WhatCable depends on are not exposed through any public IOKit accessor.
> 
> > **Note:** The manual install gives you the menu bar app only. The `whatcable` CLI is bundled inside the `.app` and is not on your PATH by default. If you want to use it from the shell, see the [Command-line interface](#command-line-interface) section below for the one-line symlink. Or install via Homebrew, which sets up the CLI automatically.
> 
> ### Homebrew
> 
> ```bash
> brew tap darrylmorley/whatcable
> brew install --cask whatcable
> ```
> 
> This installs the menu bar app and symlinks the `whatcable` CLI into your PATH.
> 
> ## Command-line interface
> 
> A `whatcable` binary ships alongside the menu bar app, driven by the same diagnostic engine:
> 
> ```bash
> whatcable                # human-readable summary of every port
> whatcable --json         # structured JSON, pipe into jq
> whatcable --watch        # stream updates as cables come and go (Ctrl+C to exit)
> whatcable --raw          # include underlying IOKit properties
> whatcable --version
> whatcable --help
> ```
> 
> If you installed the `.app` manually rather than via Homebrew, the CLI lives at `WhatCable.app/Contents/Helpers/whatcable`. Symlink it into your PATH if you want it on the shell:
> 
> ```bash
> ln -s /Applications/WhatCable.app/Contents/Helpers/whatcable /usr/local/bin/whatcable
> ```
> 
> The Homebrew install does this for you automatically.
> 
> ## How it works
> 
> WhatCable reads four families of IOKit services. No entitlements, no private APIs, no helper daemons:
> 
> | Service | What it gives us |
> | --- | --- |
> | `AppleHPMInterfaceType10/11/12` (M3-era) and `AppleTCControllerType10/11` (M1 / M2) | Per-port state: connection, transports, plug orientation, e-marker presence. `Type11` is what M2 MacBook Air uses for its MagSafe 3 port. |
> | `IOPortFeaturePowerSource` | Full PDO list from the connected source, with the live "winning" PDO |
> | `IOPortTransportComponentCCUSBPDSOP` | PD Discover Identity VDOs for SOP (port partner) and SOP' (cable e-marker) |
> | XHCI controller subtree | Each connected USB device is paired to its physical port via the XHCI port node's `UsbIOPort` registry path, falling back to a bus-index derived from the controller's `locationID` upper byte and the port's `hpm` SPMI ancestor on machines that don't expose `UsbIOPort`. |
> 
> Cable speed and power decoding follow the USB Power Delivery 3.x spec.
> 
> ## Build from source
> 
> ```bash
> swift run WhatCable          # menu bar app
> swift run whatcable-cli      # CLI
> ```
> 
> Requires Swift 5.9 (Xcode 15+).
> 
> ## Build a distributable .app
> 
> ```bash
> ./scripts/build-app.sh
> ```
> 
> Produces a universal `dist/WhatCable.app` (arm64 + x86_64) and `dist/WhatCable.zip`.
> 
> **Modes:**
> 
> | Configuration | Result |
> | --- | --- |
> | No `.env` | Ad-hoc signed. Works locally; Gatekeeper warns on other Macs. |
> | `.env` with `DEVELOPER_ID` | Developer ID signed + hardened runtime. |
> | `.env` with `DEVELOPER_ID` + `NOTARY_PROFILE` | Full notarisation + stapled ticket. Gatekeeper-clean for everyone. |
> 
> **Cutting a release:**
> 
> ```bash
> # write release-notes/v0.5.3.md first, then:
> ./scripts/release.sh 0.5.3
> ```
> 
> The wrapper does the whole pipeline: bumps the version, runs build-app.sh
> (which builds, signs, notarises, smoke-tests, and bumps the local cask),
> tags and pushes the commit, creates the GitHub release with the notes
> file, verifies the uploaded asset's sha matches the local zip, copies the
> notes into the tap, and pushes the tap. Use `--dry-run` first to validate
> state. Requires `gh` (auth'd) and the env vars from `.env.example`.
> 
> **One-time setup for full notarisation:**
> 
> ```bash
> # 1. Find your signing identity
> security find-identity -v -p codesigning
> 
> # 2. Store notarytool credentials in the keychain
> xcrun notarytool store-credentials "WhatCable-notary" \
>     --apple-id "you@example.com" \
>     --team-id "ABCDE12345" \
>     --password ""   # generate at appleid.apple.com
> 
> # 3. Create your .env from the template
> cp .env.example .env
> # ...and fill in DEVELOPER_ID
> ```
> 
> ## Caveats
> 
> - **Cable e-marker info only appears for cables that carry one.** Most USB-C cables under 60 W are unmarked. Any Thunderbolt / USB4 cable, any 5 A / 100 W+ cable, and most quality data cables will be e-marked.
> - **WhatCable trusts the e-marker.** The cable speed, current rating, and vendor are read straight from the chip in the cable's plug. Counterfeit or mis-flashed cables can advertise capabilities they don't actually deliver, and there's no way for software to verify what's inside the jacket. If a cable claims 240W / 40 Gbps but performs poorly, the chip is lying, not WhatCable.
> - **PD spec coverage:** the decoder targets PD 3.0 / 3.1. PD 3.2 EPR variants may need tweaks once we see real data.
> - **Vendor name lookup is bundled but not exhaustive:** common cable, charger, hub, dock, and storage vendors are recognised; others fall back to the hex VID.
> - **macOS only.** iOS sandboxing makes USB-C e-marker access much harder.
> - **Apple Silicon only.** Intel Macs route USB-C through Intel Thunderbolt 3 controllers (Titan Ridge / JHL9580). Apple's IOKit driver for those chips does not expose the USB-PD negotiation state or the cable e-marker VDOs, so there's no path to surface the same information on I

## 延伸閱讀

相關概念：[[USB Power Delivery]] · [[IOKit]] · [[macOS 應用開發]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]]

[GitHub](https://github.com/darrylmorley/whatcable) · [官方網站](https://github.com/darrylmorley/whatcable/releases/latest)

## 相關收錄

> [!note]- 直接競品（同子分類：硬體資訊）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "硬體資訊" AND file.name != "darrylmorley--whatcable"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "darrylmorley--whatcable"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "darrylmorley--whatcable" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "darrylmorley--whatcable"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["USB Power Delivery","IOKit","macOS 應用開發"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "darrylmorley--whatcable" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/darrylmorley--whatcable");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "darrylmorley--whatcable" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "darrylmorley" AND file.name != "darrylmorley--whatcable"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/darrylmorley--whatcable");
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
> const me = dv.page("Repos/darrylmorley--whatcable");
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
> const me = dv.page("Repos/darrylmorley--whatcable");
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
> const me = dv.page("Repos/darrylmorley--whatcable");
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
> const me = dv.page("Repos/darrylmorley--whatcable");
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

> **2026-05-02** — 首次收錄
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

- [[2026-05-06|2026-05-06]] — 再次上榜，1.9k stars
- [[2026-05-05|2026-05-05]] — 再次上榜，1.7k stars
- [[2026-05-04|2026-05-04]] — 再次上榜，1.4k stars
- [[2026-05-03|2026-05-03]] — 再次上榜，1.3k stars
- [[2026-05-02|2026-05-02]] — 首次收錄，694 stars
