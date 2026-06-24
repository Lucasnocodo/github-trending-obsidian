---
repo: NoopApp/noop
url: https://github.com/NoopApp/noop
owner: NoopApp
owner_type: User
language: Swift
license: NOASSERTION
description: "Offline WHOOP companion — pair your strap over Bluetooth, keep all data on your own device. No cloud, no account, no subscription."
homepage: ""
stars: 1949
stars_per_day: 122
forks: 776
open_issues: 35
created: 2026-06-07
pushed_at: 2026-06-23
first_seen: 2026-06-09
week: "2026-W24"
month: "2026-06"
category: "其他"
subcategory: "健康管理"
release_tag: "v7.0.2"
install_complexity: "medium"
status: archived
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-09
use_case: "離線的 WHOOP 伴侶，透過藍牙配對，所有數據保留在自己的設備上，無需雲端、帳號或訂閱。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-06-17"
contributor_count: 1
engagement: "high"
issue_close_rate: 90
repo_size_kb: 117051
readme_length: 9980
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-09"
star_history: "2026-06-09:532,2026-06-09:534,2026-06-10:1029,2026-06-10:1033,2026-06-11:1395,2026-06-11:1395,2026-06-12:1482,2026-06-12:1484,2026-06-13:1544,2026-06-13:1544,2026-06-14:1605,2026-06-14:1605,2026-06-15:1653,2026-06-16:1689,2026-06-17:1720,2026-06-21:1748,2026-06-22:1818,2026-06-23:1876,2026-06-24:1949"
tags:
  - github
  - "category/其他"
  - "lang/swift"
aliases:
  - "noop"
  - "NoopApp/noop"
  - "離線的 WHOOP 伴侶，透過藍牙配對，所有數據保留在自己的設備上，無需雲端、帳號或訂閱。"
---

# noop

**1.9k** stars · **122** stars/天 · 建立 16 天前 · Swift · NOASSERTION

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

`個人專案` `v7.0.2`

> [!summary] 一句話摘要
> 離線的 WHOOP 伴侶，透過藍牙配對，所有數據保留在自己的設備上，無需雲端、帳號或訂閱。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (122 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 希望在不依賴雲端的情況下管理健康數據的 WHOOP 使用者。
> **一句話重點** NOOP 提供了一個無需雲端的健康數據管理解決方案，滿足了用戶對隱私的需求。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/NoopApp--noop");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "健康管理" && p.file.name !== "NoopApp--noop" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 健康管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Stable (可用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到良好的健康數據管理效果，值得考慮。

> [!abstract] 核心創新
> NOOP 是一款完全離線的健康數據管理應用，無需雲端服務，保護用戶隱私。

## 專案簡介

NOOP 是一款專為 WHOOP 使用者設計的應用程式，允許用戶透過藍牙連接自己的 WHOOP 帶，並將所有數據保存在本地設備上。用戶可以透過應用程式查看心率、睡眠、壓力等多種健康指標，並進行實時監控。這種設計的好處在於用戶不需要依賴雲端服務，從而保護了個人隱私。應用程式的核心功能包括即時心率監控、睡眠分析、以及多種健康指標的趨勢分析，所有數據均在設備上處理，避免了網路延遲和隱私風險。NOOP 支援 macOS、Android 和 iOS，並且提供了一個統一的使用者介面，讓用戶在不同平台上都能獲得一致的體驗。使用者可以透過指令行工具進行 CSV 數據導入，並且可以設定本地通知來提醒自己。

這款應用的賣點在於其完全的離線運作和對用戶數據的控制，這在當前市場上是相對少見的。技術上，NOOP 使用 Swift 和 Kotlin 開發，並且依賴於本地數據處理，這使得它在性能上表現出色，尤其是在處理大量數據時。與其他健康追蹤應用相比，如 Fitbit 或 Apple Health，NOOP 的最大優勢在於用戶數據的私密性和無需訂閱的商業模式。該應用目前處於穩定版本，並且有活躍的社群支持，解決率高達 90%。不過，對於不熟悉藍牙或數據導入的用戶來說，初次使用可能會有一定的學習曲線。

**技術棧**：`Swift` · `Kotlin` · `Python` · `Shell` · `HTML`

## 重點功能

- 離線數據管理 — 所有數據保存在本地，無需雲端。
- 即時心率監控 — 實時顯示連接的 WHOOP 帶的心率數據。
- 睡眠分析 — 提供詳細的睡眠階段和效率數據，並可回顧過去的睡眠記錄。
- 健康指標趨勢 — 長期趨勢分析，並生成可分享的 PDF 報告。
- 自定義通知 — 設定本地通知以提醒自己重要的健康指標。

## 快速開始

1. 安裝 macOS 版本
```bash
從 GitHub 下載 NOOP 應用程式
```
2. 連接 WHOOP 帶
```bash
在應用程式中選擇藍牙配對
```
3. 導入數據
```bash
使用 CSV 文件導入過去的健康數據
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 16 天內累積 1949 stars（122/天），forks 776（39.8%），顯示出強烈的社群參與度。作者 NoopApp 專注於提供一個無需雲端的健康數據管理方案，解決了許多使用者對隱私的擔憂。這個專案的興起可能受到 WHOOP 用戶對數據控制需求增加的影響。高達 39.8% 的 forks/stars 比率顯示出許多人在實際修改和使用這個工具，這意味著它在開發者社群中有著良好的接受度。

## 適合誰使用

**目標受眾**：希望在不依賴雲端的情況下管理健康數據的 WHOOP 使用者。

> [!example] 使用場景
> - 健身愛好者用它來追蹤自己的心率和睡眠質量，因為這樣可以在不依賴雲端的情況下獲得即時數據分析。
> - 數據科學家用它來分析自己的運動數據，因為它允許導入 CSV 文件，便於進行進一步的數據處理。
> - 健康教練用它來監控客戶的生理數據，因為它提供了詳細的趨勢分析和報告功能，方便制定個性化的訓練計劃。

## 架構分析

NOOP 採用跨平台架構，使用 Swift 和 Kotlin 開發，並且依賴於本地數據處理。這種設計使得應用在性能上表現良好，特別是在處理大量數據時。資料流方面，所有數據在設備上進行處理，避免了網路延遲和隱私風險。選擇本地處理而非雲端的代價是需要用戶擁有自己的硬體設備，這可能會限制某些用戶的使用。擴展性方面，由於所有數據都在本地處理，因此在未來的功能擴展上，可能需要考慮如何平衡性能和用戶體驗。

## 技術深入分析

NOOP 的核心技術機制在於其完全離線的數據處理能力，使用 Swift 和 Kotlin 開發，並且依賴於本地數據處理。這使得應用在性能上表現出色，特別是在處理大量數據時。根據 README，NOOP 可以處理多種健康指標，並提供即時的數據分析，這對於需要快速反應的健身愛好者來說是非常重要的。設計上，NOOP 選擇了本地處理而非雲端，這樣可以避免網路延遲和隱私風險，但也意味著用戶需要擁有自己的硬體設備。這種設計的代價是需要用戶對設備的依賴，可能會限制某些用戶的使用。技術風險方面，NOOP 需要考慮在未來擴展功能時，如何平衡性能和用戶體驗，特別是在數據量增長的情況下。整合方面，NOOP 可以與 Apple Health 等應用進行數據互通，但對於其他主流健康應用的整合可能需要額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和功能介紹，但缺乏具體的範例。安裝過程相對順暢，但對於不熟悉藍牙的用戶可能會有一定的挑戰。整體來說，對於新手來說，花 30 分鐘能夠順利運行應用是可行的。

## 優缺點分析

> [!success] 優點
> - 完全離線運作，保護用戶隱私。
> - 無需訂閱費用，降低使用成本。
> - 提供詳細的健康數據分析和報告功能。

> [!danger] 缺點
> - 僅支援特定平台，限制了用戶群。
> - 對於不熟悉藍牙的用戶，使用門檻較高。
> - 缺乏雲端備份功能，數據安全性依賴於用戶設備。

> [!warning] 注意事項
> - 僅支援 macOS 13+ 和 Xcode 15+。
> - 需要用戶擁有自己的 WHOOP 帶才能進行實時數據監控。
> - 對於不熟悉藍牙技術的用戶來說，初次使用可能會有一定的學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於 AI 代理的創建，而 NOOP 專注於健康數據的本地管理，兩者的應用場景和目標用戶截然不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了一個雲端解決方案來管理健康數據，而 NOOP 則完全離線，這使得 NOOP 在隱私保護上更具優勢。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Fitbit | Fitbit 提供雲端解決方案來管理健康數據，而 NOOP 則完全離線，這使得 NOOP 在隱私保護上更具優勢。 | 如果你的團隊已經在用 Fitbit 且需要雲端數據分析，則應選擇 Fitbit。 | medium，因為需要將數據從 Fitbit 轉移到 NOOP。 |
| Apple Health | Apple Health 提供了整合多種健康數據的功能，但依賴於 iCloud 進行數據備份，而 NOOP 則不需要雲端。 | 如果你已經在使用 Apple 生態系統並需要雲端備份，則應選擇 Apple Health。 | low，因為可以直接從 Apple Health 導入數據。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **noop** | **Fitbit** | **Apple Health** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Fitbit 提供雲端解決方案來管理健康數據，而 NOOP 則完全離線，這使得 NOOP 在隱私保護上更具優勢。 | Apple Health 提供了整合多種健康數據的功能，但依賴於 iCloud 進行數據備份，而 NOOP 則不需要雲端。 |
> | 遷移成本 | - | medium，因為需要將數據從 Fitbit 轉移到 NOOP。 | low，因為可以直接從 Apple Health 導入數據。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在用 Fitbit 且需要雲端數據分析，則應 | 如果你已經在使用 Apple 生態系統並需要雲端備份，則應選 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Stable |
| 生產環境就緒 | Yes |
| Breaking Change 風險 | low |

> [!tip] 採用建議
> 適合個人使用和小型團隊的健康數據管理，不建議用於大型企業環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些 macOS 版本上，藍牙連接不穩定，可能導致數據丟失
  - 解法：確保 macOS 更新到最新版本，並重啟藍牙設備
- [MEDIUM] 導入 CSV 數據時格式不正確會導致應用崩潰
  - 解法：確保 CSV 格式符合應用要求，參考 README 的格式範例
- [MEDIUM] 某些健康指標計算不準確，特別是在數據量較小的情況下
  - 解法：多次使用應用以累積數據，提升準確性

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | NOOP 的離線數據管理非常適合小型團隊的需求。 |
| 大型企業的健康數據分析 | 不適合 | 缺乏雲端支持，無法滿足大型企業的數據需求。 |
| 個人健身愛好者 | 非常適合 | 提供即時數據分析和報告功能，符合個人需求。 |
| 需要高頻率數據更新的運動團隊 | 普通 | 雖然能提供即時數據，但對於高頻率更新的需求可能不夠靈活。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到良好的健康數據管理效果，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> NOOP 不需要高權限運行，所有數據保存在本地，降低了數據洩露的風險。依賴鏈的信任程度較高，因為主要使用開源技術，適合在 CI/CD 中使用。

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
| Forks | 776 |
| Open Issues | 35 |
| Issue 解決率 | 90% (327 closed) |
| 最後推送 | 2026-06-23 |
| 建立日期 | 2026-06-07 |
| Repo 大小 | 114.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NoopApp/noop) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 50
>     "Kotlin" : 47
>     "Python" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@NoopApp](https://github.com/NoopApp) | 588 |

**最新版本**：v7.0.2 — NOOP v7.0.2 (2026-06-23)

> [!info]- Release Notes
> # NOOP v7.0.2 ⚡
> 
> The smoothness release. You told us the home screen and sleep cards felt laggy, so this is a top-to-bottom performance pass across every screen on every platform, plus a real fix for a Sleep V2 crash a couple of you hit.
> 
> ## Smoother, everywhere
> 
> - 🩻 **Scrolling is much smoother on every screen.** We went screen by screen: charts and rings now cache their drawing instead of redrawing on every frame, long screens build only what is actually on screen, and the home screen no longer redraws itself on every heartbeat. iPhone, iPad, Mac and Android all get it.
> - 🧠 **The analytics stopped thrashing your phone's memory.** The sleep and scoring engines were re-crunching the same nights over and over. Now each night is worked out once and reused, so the app stays quieter and faster while it scores.
> 
> ## Fixed: the Sleep V2 crash (#707)
> 
> With the experimental sleep staging (V2) turned on, the app could get choppy and then crash on Android, especially while scrolling back through previous nights. Two of you sent logs that pinned it exactly: the V2 staging never trimmed each night's data down to that night, and it redid the same heavy windowed maths a million times over, so it ran the phone out of memory before you even scrolled.
> 
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍度高，經常有更新和問題解決。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-22 ~ 2026-06-23）
> **活躍天數** 2 天 · **最新 commit** release v7.0.2: refresh AltStore source + sync macOS build number to 180

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#698](https://github.com/NoopApp/noop/issues/698) | Option to disable backgrounds `enhancement` | 7 | 2 |
> | [#132](https://github.com/NoopApp/noop/issues/132) | 🙏 Roadmap & help wanted — specific things we need (grab one `help wanted` `roadmap` | 4 | 15 |
> | [#713](https://github.com/NoopApp/noop/issues/713) | Battery Life Prediction for Whoop 4.0 & 5.0 `enhancement` | 1 | 0 |

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

相關概念：[[健康管理]] · [[數據隱私]] · [[離線應用]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Gloridust--WechatOnCloud|Gloridust/WechatOnCloud]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]]

[GitHub](https://github.com/NoopApp/noop)

## 相關收錄

> [!note]- 直接競品（同子分類：健康管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "健康管理" AND file.name != "NoopApp--noop"
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
> const concepts = ["健康管理","數據隱私","離線應用"];
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
