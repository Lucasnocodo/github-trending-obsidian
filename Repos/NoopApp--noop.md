---
repo: NoopApp/noop
url: https://github.com/NoopApp/noop
owner: NoopApp
owner_type: User
language: Swift
license: NOASSERTION
description: "Offline WHOOP companion — pair your strap over Bluetooth, keep all data on your own device. No cloud, no account, no subscription."
homepage: ""
stars: 1818
stars_per_day: 130
forks: 753
open_issues: 22
created: 2026-06-07
pushed_at: 2026-06-21
first_seen: 2026-06-09
week: "2026-W24"
month: "2026-06"
category: "其他"
subcategory: "健康追蹤"
release_tag: "v6.1.0"
install_complexity: "medium"
status: archived
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-09
use_case: "提供離線的 WHOOP 伴侶，透過藍牙配對，所有數據保留在本地設備上，無需雲端、帳號或訂閱。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-06-17"
contributor_count: 1
engagement: "high"
issue_close_rate: 93
repo_size_kb: 115088
readme_length: 9980
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-09"
star_history: "2026-06-09:532,2026-06-09:534,2026-06-10:1029,2026-06-10:1033,2026-06-11:1395,2026-06-11:1395,2026-06-12:1482,2026-06-12:1484,2026-06-13:1544,2026-06-13:1544,2026-06-14:1605,2026-06-14:1605,2026-06-15:1653,2026-06-16:1689,2026-06-17:1720,2026-06-21:1748,2026-06-22:1818"
tags:
  - github
  - "category/其他"
  - "lang/swift"
aliases:
  - "noop"
  - "NoopApp/noop"
  - "提供離線的 WHOOP 伴侶，透過藍牙配對，所有數據保留在本地設備上，無需雲端、帳號或訂閱。"
---

# noop

**1.8k** stars · **130** stars/天 · 建立 14 天前 · Swift · NOASSERTION

```dataviewjs
const me = dv.page("Repos/NoopApp--noop");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v6.1.0`

> [!summary] 一句話摘要
> 提供離線的 WHOOP 伴侶，透過藍牙配對，所有數據保留在本地設備上，無需雲端、帳號或訂閱。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (130 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要在無網絡環境下管理 WHOOP 數據的健康追蹤者。
> **一句話重點** NOOP 的設計理念是將用戶的數據完全保留在本地，這在當前數據隱私日益受到重視的背景下，顯得尤為重要。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/NoopApp--noop");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "健康追蹤" && p.file.name !== "NoopApp--noop" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 健康追蹤 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Stable (可用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到高數據隱私和控制，值得。

> [!abstract] 核心創新
> NOOP 是唯一一個完全離線的 WHOOP 數據管理工具，無需雲端或帳號。

## 專案簡介

NOOP 是一個專為 WHOOP 使用者設計的離線應用程式，允許用戶透過藍牙連接他們的 WHOOP strap，並將所有數據保留在本地設備上。用戶可以即時查看心率、睡眠質量、運動數據等，並且所有數據處理都是在設備上進行，避免了雲端存儲的隱私問題。此應用支持 macOS、Android 和 iOS，並且提供了多種功能，如即時心率監控、睡眠分析、運動記錄等。關鍵指令包括使用 `project.yml` 生成 Xcode 專案，並可透過 CSV 或 Apple Health 數據進行探索。NOOP 的賣點在於其完全不依賴雲端，讓用戶能夠完全掌控自己的數據。

技術上，NOOP 使用 Swift、Kotlin 和 Python 等語言，並且依賴於 XcodeGen 來生成專案，這使得開發過程更為簡化。與其他類似工具相比，如 WHOOP 官方應用，NOOP 提供了更高的數據隱私保護，因為所有數據都在本地處理，並且不需要註冊帳號。使用者在使用過程中可能會遇到藍牙連接問題或數據同步問題，但社群活躍，並且有高達 93% 的問題解決率。NOOP 目前處於穩定版本，適合對數據隱私有高要求的用戶，並且未來可能會進一步增強 AI 教練功能。建議對於需要在無網絡環境下使用 WHOOP 數據的用戶，NOOP 是一個理想的選擇，而對於需要即時雲端同步的用戶，則可能需要考慮其他選擇。

**技術棧**：`Swift 5.9` · `Kotlin` · `Python` · `Shell` · `HTML`

## 重點功能

- 離線數據管理 — 所有數據保留在本地設備上，無需雲端。
- 即時心率監控 — 透過藍牙連接實時查看心率數據。
- 睡眠分析 — 提供詳細的睡眠階段和效率分析。
- 運動記錄 — 記錄運動過程中的心率和努力程度。
- AI 教練 — 可選的 AI 教練功能，提供數據分析建議。

## 快速開始

1. 安裝 Xcode 和相關依賴
```bash
brew install xcodegen
```
2. 克隆專案
```bash
git clone https://github.com/NoopApp/noop.git
```
3. 生成 Xcode 專案
```bash
xcodegen
```
4. 打開 Xcode 並運行專案
```bash
open noop.xcodeproj
```

## 程式碼範例

```swift
{
  "前置條件": "需要 macOS 13+ 和 Xcode 15+。",
  "指令": "xcodegen",
  "預期輸出": "生成 Xcode 專案文件。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 14 天內累積 1818 stars（130/天），forks 753（41.4%），顯示出強大的社群參與度。作者 NoopApp 是一個專注於開源健康應用的團隊，之前未有類似的離線 WHOOP 數據管理工具，這使得 NOOP 成為一個獨特的解決方案。社群的活躍度和高解決率的問題反映出用戶對這個工具的需求和支持。技術上，NOOP 的設計理念符合當前對數據隱私的重視，這也是其受歡迎的原因之一。

## 適合誰使用

**目標受眾**：需要在無網絡環境下管理 WHOOP 數據的健康追蹤者。

> [!example] 使用場景
> - 健身愛好者用它來離線追蹤 WHOOP 數據，因為這樣能確保數據隱私且不受網路限制。
> - 運動教練用它來分析學員的心率和恢復狀態，因為它提供即時數據且無需雲端存儲。
> - 數據科學家用它來探索和分析健康數據，因為它支持 CSV 和 Apple Health 數據導入，方便進行進一步分析。

## 架構分析

NOOP 採用跨平台架構，使用 Swift 和 Kotlin 實現 iOS 和 Android 應用，並使用 Python 進行後端數據處理。所有數據處理在本地進行，這樣設計的目的是為了保護用戶的隱私。資料流方面，應用從 WHOOP strap 獲取實時數據，並在設備上進行計算和分析，這樣可以減少延遲並提高數據安全性。

選擇使用本地處理而非雲端的代價是需要更高的設備性能，但這也使得用戶能夠完全控制自己的數據。擴展性方面，隨著用戶數據量的增加，可能會遇到性能瓶頸，特別是在數據分析和報告生成時。整體來看，NOOP 的架構設計充分考慮了用戶隱私和數據安全，並且在功能上提供了豐富的用戶體驗。

## 技術深入分析

NOOP 的核心技術機制在於其完全離線的數據處理能力，使用 Swift 和 Kotlin 實現跨平台應用，並且利用 Python 進行數據分析。這樣的設計使得所有數據都在本地進行計算，避免了雲端存儲的隱私風險。效能方面，NOOP 能夠實時處理來自 WHOOP strap 的數據，並且在設備上生成報告，這對於用戶來說是即時且安全的。設計取捨上，選擇本地處理而非雲端存儲，雖然提高了數據安全性，但也要求用戶的設備具備一定的性能。技術風險方面，隨著用戶數據量的增加，可能會影響應用的性能，特別是在數據分析和報告生成時。整合方面，NOOP 可以與 Apple Health 整合，並且支持 CSV 數據導入，這使得用戶能夠輕鬆地將過去的數據導入應用中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含必要的安裝指導，安裝過程順暢，無明顯坑點。提供了良好的快速入門指南，讓新手能夠在短時間內上手。文件目前僅提供英文版本，可能對非英語用戶造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 完全離線運行，保護用戶隱私。
> - 多平台支持，提供一致的用戶體驗。
> - 高解決率的社群支持，問題處理迅速。

> [!danger] 缺點
> - 需要較高的設備性能以支持本地數據處理。
> - 不支援 Windows 或 Linux，限制了使用範圍。
> - 功能依賴於藍牙連接，可能會遇到連接問題。

> [!warning] 注意事項
> - 僅支援 macOS 13+ 和 Xcode 15+。
> - 需要藍牙連接才能使用所有功能。
> - 不支援 Windows 或 Linux 平台。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| WHOOP | WHOOP 官方應用依賴雲端存儲和帳號管理，NOOP 則完全離線，提供更高的數據隱私。 |
| Strava | Strava 主要針對跑步和騎行，NOOP 更專注於 WHOOP 數據的離線管理和分析。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| WHOOP | WHOOP 官方應用依賴雲端存儲和帳號管理，NOOP 則完全離線，提供更高的數據隱私。 | 如果需要即時雲端同步和社交功能，WHOOP 官方應用會更合適。 | medium，因為需要將數據從雲端轉移到本地。 |
| Strava | Strava 主要針對跑步和騎行，NOOP 更專注於 WHOOP 數據的離線管理和分析。 | 如果你的主要需求是跑步或騎行的社交功能，Strava 會更合適。 | low，因為可以直接從 WHOOP 導入數據。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **noop** | **WHOOP** | **Strava** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | WHOOP 官方應用依賴雲端存儲和帳號管理，NOOP 則完全離線，提供更高的數據隱私。 | Strava 主要針對跑步和騎行，NOOP 更專注於 WHOOP 數據的離線管理和分析。 |
> | 遷移成本 | - | medium，因為需要將數據從雲端轉移到本地。 | low，因為可以直接從 WHOOP 導入數據。 |
> | 適用場景 | 主要場景 | 如果需要即時雲端同步和社交功能，WHOOP 官方應用會更合適 | 如果你的主要需求是跑步或騎行的社交功能，Strava 會更合 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Stable |
| 生產環境就緒 | Yes |
| Breaking Change 風險 | low |

> [!tip] 採用建議
> 適合個人使用和小型團隊，特別是對數據隱私有高要求的用戶。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 藍牙連接不穩定，可能導致數據丟失
  - 解法：確保設備在連接範圍內，並重啟藍牙。
- [MEDIUM] 某些功能在舊版設備上無法正常運行
  - 解法：檢查設備是否符合最低要求，必要時升級設備。
- [MEDIUM] 數據導入過程中可能出現格式錯誤
  - 解法：確保導入的 CSV 格式符合要求，並進行必要的格式轉換。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | NOOP 的離線數據管理特性非常適合小型團隊的需求。 |
| 大型企業需要即時數據分析 | 不適合 | NOOP 的離線特性不支持即時雲端數據分析。 |
| 運動教練需要分析學員數據 | 適合 | NOOP 提供的詳細數據分析功能能夠幫助教練做出更好的決策。 |
| 需要社交功能的健身應用 | 不適合 | NOOP 不提供社交功能，主要聚焦於數據隱私和本地管理。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高數據隱私和控制，值得。

## 安全性評估

> [!warning] 安全性快速掃描
> NOOP 不需要高權限運行，所有數據都在本地處理，降低了安全風險。依賴鏈的信任程度高，無已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/NoopApp--noop");
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
> const me = dv.page("Repos/NoopApp--noop");
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
| Forks | 753 |
| Open Issues | 22 |
| Issue 解決率 | 93% (285 closed) |
| 最後推送 | 2026-06-21 |
| 建立日期 | 2026-06-07 |
| Repo 大小 | 112.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NoopApp/noop) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 50
>     "Kotlin" : 46
>     "Python" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@NoopApp](https://github.com/NoopApp) | 552 |

**最新版本**：v6.1.0 — NOOP 6.1.0 — Smarter sleep, on-device naps, more devices, and a big board-clear (2026-06-21)

> [!info]- Release Notes
> A large board-clear update built from the open issues, discussions and community PRs, cross-referenced so related reports were fixed together.
> 
> **Sleep:** interrupted nights are now counted in full (#561), an implausibly long block from a bad-clock/off-wrist strap can't masquerade as one night, a still morning right after you wake is no longer mistaken for sleep (#531), an honest low-confidence flag when the deep/REM split can't be trusted (#469), your hand-edits beat an imported value (#509), on-device opt-in nap detection (#569), and WHOOP 4.0 sleep on the older v19 firmware layout (#344).
> 
> **Features:** Android 2x2 widget (#516), opt-in morning + post-workout notifications (#517), caffeine cutoff (#526), per-weekday smart alarm (#548), broadcast HR from a 4.0 (D#490), Android Devices→Remove releases the BLE link (#520), clearer 4.0 steps + honest empty states.
> 
> **Fixes & tooling:** iPhone score-ring overlap (#495), idle re-score skip for battery, persisted last-sync, charging bolt, v26 decode fix (#553), Linux capture import, German 444/444, and the AltStore/Homebrew manifests are current again and auto-update from now on (#560/#562).
> 
> Thanks @cbarrado, @MumiZed, @mvanhorn, @tavelli, @ryanbr, sunny-noop, airtonzanon, pikapik487, and everyone who filed a log. Everything stays fully offline and on your device.

## 社群與生態

**社群活躍度**：社群活躍，經常有更新和問題解決。
**連結**：[文件](https://github.com/NoopApp/noop/wiki) · [Discord](https://discord.gg/noopapp)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-20 ~ 2026-06-21）
> **活躍天數** 2 天 · **最新 commit** community: wire the Discord into the issue funnel + README

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#132](https://github.com/NoopApp/noop/issues/132) | 🙏 Roadmap & help wanted — specific things we need (grab one `help wanted` `roadmap` | 4 | 15 |
> | [#580](https://github.com/NoopApp/noop/issues/580) | 5.0 sync fail `bug` | 0 | 0 |
> | [#578](https://github.com/NoopApp/noop/issues/578) | Android Camera Notch `bug` | 0 | 0 |
> | [#576](https://github.com/NoopApp/noop/issues/576) | Auto Detect an Activity `enhancement` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> NOOP
> 
> Your strap. Your data. Your machine. Offline, on-device, no cloud.
> 
> Now in the "Titanium &amp; Gold" redesign: one feature set across iPhone, Android and Mac.
> 
>   
>   
>   
>   
>   
>   
>   
> 
>   
>   
> 
>   
> 
> NOOP is free, account-free and ad-free &mdash; and it costs us real money to keep running (servers + development time). Only a handful of people chip in. If NOOP&rsquo;s earned a place on your wrist, buy us a coffee&nbsp;&#9749; &mdash; it genuinely keeps the lights on.
> 
>   ♥&nbsp;Support ·
>   ⬇&nbsp;Download ·
>   ❓&nbsp;FAQ ·
>   💬&nbsp;Discord ·
>   👽&nbsp;Reddit ·
>   Features ·
>   Protocol ·
>   Contact
> 
>   
>   &nbsp;&nbsp;
>   
>   &nbsp;&nbsp;
>   
> 
> Today · Sleep · Stress — the new Titanium &amp; Gold look. One feature set across iPhone, Android &amp; Mac.
> 
> ---
> 
> 
> ## Quickstart (macOS)
> 
> **Requirements:** macOS 13+, Xcode 15+ (Swift 5.9), and a Mac with Bluetooth. To
> pair live, you need your own WHOOP strap; to just explore, you can import a CSV /
> Apple Health export instead.
> 
> The Xcode project is generated from [`project.yml`](project.yml) with
> [XcodeGen](https://github.com/yonaskolb/XcodeGen).
> 
> ```bash
> 
> ### How to donate — 2 minutes, even if you've never touched crypto
> 
> Donations are **crypto-only**, on purpose: staying anonymous (for the project *and* for you) rules out PayPal, Patreon, or anything with a name attached. If you don't already hold any:
> 
> 1. **Install a mainstream exchange app** — Coinbase, Binance, Kraken, or **Cash App** (Cash App handles Bitcoin directly).
> 2. **Buy some Bitcoin (BTC) or Ethereum (ETH)** — a suggested **$50+** genuinely keeps the project alive (it's a fraction of a year's WHOOP subscription). Anything is appreciated, but $50+ is what moves the needle.
> 3. **Tap Send / Withdraw, paste the matching address below, and send.** That's it. (Only ever send a coin to its own network.)
> 
> | Coin | Network | Address |
> |---|---|---|
> | **BTC** | Bitcoin | `bc1qn2gkl7wslwpws06mvazjn2uu689zlkv7kg3kf5` |
> | **ETH** | Ethereum | `0xd64D508b531c4b1297Ca4023C774e0E97aA67B7F` |
> | **ADA** | Cardano | `addr1qxsju3y0mlke2h6h2g6qgnq4r3jstngtyjxs0nnp5zrv28zv8p5rgzruxyjz33j9k23pffta8z639e2snjdd4vcetfqsn4vwr3` |
> | **XRP** | XRP Ledger | `rpvijHi2nVY9WWAJhojsAX5tJmHdmLtFhq`⚠️ **Destination Tag: `3338312747` (required)** |
> 
> > ⚠️ **XRP donors:** this address **requires the destination tag `3338312747`**. XRP sent without the tag cannot be credited and may be lost — most wallets and exchanges have a "Destination Tag" field, paste it there.
> 
> Each address also has a scan-to-donate **QR code** in the app under **Support** (and they're listed in [`docs/DONATIONS.md`](docs/DONATIONS.md)). *Always copy the full address and double-check the first and last characters; crypto transactions are irreversible, and only ever send a coin to its own network.*
> 
> **Can't or would rather not?** Also genuinely valued: **⭐ star this repo**, file a good bug report, share a strap log, test on hardware you own, or just tell another WHOOP user. That moves NOOP forward too. **Want to help directly? → [Roadmap & help wanted](https://github.com/NoopApp/noop/issues/132)** lists exactly what we need — some of NOOP's biggest blockers are data only your strap can provide (a single raw frame capture can unlock a feature for everyone on that firmware).
> 
> ---
> 
> 
> ## Features
> 
> The macOS reference app organizes everything behind a single sidebar
> (`Strand/App/RootView.swift`). Each item below is a real screen in
> `Strand/Screens/`. The same feature set ships on macOS, Android, and iOS via the
> shared cross-platform code.
> 
> | Screen | What it does |
> |---|---|
> | **Today** (Control Center) | Home dashboard: recovery ring, a "today's synthesis" insight, a grid of stat tiles (recovery, strain, sleep, HRV, RHR, SpO₂, respiratory, steps, weight, calories) each with a 14-day sparkline, live strap **battery %** and HR trend, recent workouts, and a data-sources footer. |
> | **Readiness** | An on-device "should you push today?" read that synthesizes established sports-science signals from your own history — HRV vs your baseline (Plews/Buchheit), resting-HR drift (Lamberts), sleeping respiratory-rate drift, training-load balance (acute:chronic workload ratio, Gabbett) and training monotony (Foster) — into a single headline (Primed / Balanced / Strained / Run down) with the drivers behind it. Pure local math, not medical advice. |
> | **Live** | Real-time view of the connected strap — heart rate and frame stream as they arrive (~1 Hz). |
> | **Breathe** | **HRV haptic breathing biofeedback.** The strap both *measures* HRV (R-R intervals) and *buzzes* its haptic motor, so NOOP paces your breath with felt cues (one buzz inhale, two exhale) and shows live HR + rolling RMSSD responding as the session deepens. Presets: Relax 4-6, Coherence 5.5, Box 4-4. Each session reports a **pre/post HRV outcome** so you can see how much you settled. |
> | **Intervals** | **Silent haptic HIIT timer.** The strap buzzes every transition (triple-buzz into WORK, single into REST, 3-2-1 tick at phase ends, long buzz on finish) so you train hands-free. Falls back to a glanceable visual timer with no strap. |
> | **Explore** (Metric Explorer) | Interrogate any single metric over time, built from the metric catalog (`Strand/Data/MetricCatalog.swift`). |
> | **Compare** | Plot two metrics together / against each other over a shared timeline. |
> | **Insights** | Behavioral and correlational insights derived from your own series — including **Activity Cost**, which learns what each activity type typically costs your next-morning recovery (and how long you take to bounce back) from your own history. |
> | **Sleep** | Sleep sessions with a hypnogram, stage breakdown, efficiency, resting HR, and HRV — computed by the on-device sleep stager. Browse back through **past nights**, not just last night. |
> | **Trends** | Long-range trends across recovery, strain, sleep, and biometrics — and a **shareable one-page PDF report** (recovery / sleep / HRV / resting HR / strain over a range you choose), rendered entirely on-device for a doctor, coach, or your own records. |
> | **Workouts** | Detected and manual exercise sessions with strain and heart-rate detail. Tap any session for a full **detail view** — its HR curve over the workout, time in each HR zone, duration, avg/max HR, and the Effort it added. |
> | **Health** | Biometric overview (HR, HRV, SpO₂, skin temperature, respiratory rate, etc.). |
> | **Stress** | Day-level stress / autonomic load visualization. |
> | **Mind** | A quick **daily mood check-in** that correlates how you feel against your own recovery, sleep and HRV over time — so you can see what actually moves your mood. On-device and **non-clinical**: a self-reflection log, not a mental-health assessment. |
> | **Apple Health** | Browse and reconcile data imported from your Apple Health export. |
> | **Data Sources** | One-tap import of a WHOOP CSV export, an Apple Health export, or a **nutrition CSV** (Cronometer / MacroFactor), plus live-strap status. "Bring your history in once, then it's yours." |
> | **Notifications** | Configure local notifications and thresholds (`Strand/Data/NotificationSettingsStore.swift`). |
> | **Automations** | Turn the strap's physical inputs and live biometrics into Mac actions — all on-device (see below). |
> | **Coach** | An optional **AI Coach** you can ask about your data in plain language. It's the one feature that can ever use the network: off until you add your own key — Anthropic, OpenAI, or any OpenAI-compatible endpoint including a local/self-hosted model (Ollama, LM Studio) — and it sends only a short text summary of recent metrics plus your question, never raw streams or identifiers. With a local model the conversation never leaves your machine. Available on macOS, Android, and iOS. See [`docs/PRIVACY_SECURITY.md`](docs/PRIVACY_SECURITY.md). |
> | **Settings** | Profile, preferences, **step calibration** (tune the stride/step estimate to your own walking), unit choices, the in-app **What's new** changelog, and an opt-in **Experimental** 

## 延伸閱讀

相關概念：[[隱私保護]] · [[數據視覺化]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Gloridust--WechatOnCloud|Gloridust/WechatOnCloud]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]]

[GitHub](https://github.com/NoopApp/noop)

## 相關收錄

> [!note]- 直接競品（同子分類：健康追蹤）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "健康追蹤" AND file.name != "NoopApp--noop"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "NoopApp--noop"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "NoopApp--noop" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "NoopApp--noop"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["隱私保護","數據視覺化","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "NoopApp--noop" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/NoopApp--noop");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "NoopApp--noop" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "NoopApp" AND file.name != "NoopApp--noop"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/NoopApp--noop");
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
> const me = dv.page("Repos/NoopApp--noop");
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
> const me = dv.page("Repos/NoopApp--noop");
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
> const me = dv.page("Repos/NoopApp--noop");
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
> const me = dv.page("Repos/NoopApp--noop");
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

> **2026-06-09** — 首次收錄
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

- [[2026-06-14|2026-06-14]] — 再次上榜，1.6k stars
- [[2026-06-13|2026-06-13]] — 再次上榜，1.5k stars
- [[2026-06-12|2026-06-12]] — 再次上榜，1.5k stars
- [[2026-06-11|2026-06-11]] — 再次上榜，1.4k stars
- [[2026-06-10|2026-06-10]] — 再次上榜，1.0k stars
- [[2026-06-09|2026-06-09]] — 首次收錄，532 stars
