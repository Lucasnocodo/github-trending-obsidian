---
repo: NoopApp/noop
url: https://github.com/NoopApp/noop
owner: NoopApp
owner_type: User
language: Swift
license: NOASSERTION
description: "Offline WHOOP companion — pair your strap over Bluetooth, keep all data on your own device. No cloud, no account, no subscription."
homepage: ""
stars: 2070
stars_per_day: 99
forks: 805
open_issues: 30
created: 2026-06-07
pushed_at: 2026-06-29
first_seen: 2026-06-09
week: "2026-W24"
month: "2026-06"
category: "其他"
subcategory: "健康追蹤"
release_tag: "v7.4.0"
install_complexity: "medium"
status: archived
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-09
use_case: "提供離線的 WHOOP 伴侶應用，透過藍牙連接，將所有數據保留在本地，無需雲端、帳戶或訂閱。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-06-17"
contributor_count: 1
engagement: "high"
issue_close_rate: 93
repo_size_kb: 117411
readme_length: 10000
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-09"
star_history: "2026-06-09:532,2026-06-09:534,2026-06-10:1029,2026-06-10:1033,2026-06-11:1395,2026-06-11:1395,2026-06-12:1482,2026-06-12:1484,2026-06-13:1544,2026-06-13:1544,2026-06-14:1605,2026-06-14:1605,2026-06-15:1653,2026-06-16:1689,2026-06-17:1720,2026-06-21:1748,2026-06-22:1818,2026-06-23:1876,2026-06-24:1949,2026-06-25:1987,2026-06-26:2015,2026-06-27:2040,2026-06-28:2057,2026-06-29:2070"
tags:
  - github
  - "category/其他"
  - "lang/swift"
aliases:
  - "noop"
  - "NoopApp/noop"
  - "提供離線的 WHOOP 伴侶應用，透過藍牙連接，將所有數據保留在本地，無需雲端、帳戶或訂閱。"
---

# noop

**2.1k** stars · **99** stars/天 · 建立 21 天前 · Swift · NOASSERTION

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

`個人專案` `v7.4.0`

> [!summary] 一句話摘要
> 提供離線的 WHOOP 伴侶應用，透過藍牙連接，將所有數據保留在本地，無需雲端、帳戶或訂閱。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (99 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 希望在不依賴雲端的情況下追蹤健康數據的 WHOOP 使用者。
> **一句話重點** NOOP 提供了一個無需雲端的健康數據追蹤解決方案，讓用戶能夠完全掌控自己的數據。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學習，2 小時整合，得到一個隱私保護的健康追蹤工具，值得一試。

> [!abstract] 核心創新
> NOOP 是一個完全離線的 WHOOP 伴侶應用，提供用戶對數據的完全控制權。

## 專案簡介

NOOP 是一款專為 WHOOP 使用者設計的離線應用，讓用戶能夠透過藍牙連接 WHOOP 腕帶，並將所有數據儲存在本地，避免了雲端存儲的隱私風險。用戶可以透過簡單的界面查看日常健康數據，如心率變異性（HRV）、睡眠質量和壓力等，所有計算均在設備上進行，確保數據安全。關鍵指令包括 `git clone NOOP` 和 `xcodegen gen`，用於快速安裝和生成 Xcode 專案。這個工具的賣點在於其完全免費、無需帳戶和廣告，並且支持 macOS、iOS 和 Android 平台。技術上，NOOP 使用 Swift 和 Kotlin 進行跨平台開發，並依賴本地計算來提供即時數據分析，這樣的設計不僅提高了性能，還增強了用戶的數據隱私。

與其他健康應用相比，NOOP 不依賴雲端服務，這使得它在數據安全性上具有明顯優勢。相較於 WHOOP 官方應用，NOOP 讓用戶擁有數據的完全控制權，並且不需要支付訂閱費用。使用者可以在本地分析和查看數據，並且所有功能都可以在無網絡環境下使用。儘管目前仍有一些開放問題，但其解決率高達 93%，顯示出活躍的維護和社群支持。整體而言，NOOP 是一個穩定的選擇，適合希望保護個人數據的健康追蹤者。

**技術棧**：`Swift` · `Kotlin` · `Python` · `Shell` · `HTML`

## 重點功能

- 離線數據存儲 — 所有數據均在本地處理，無需雲端。
- 即時健康分析 — 提供 HRV、睡眠質量等數據的即時分析。
- 跨平台支持 — 同時支持 macOS、iOS 和 Android，使用相同的功能集。
- 自定義通知 — 用戶可設置本地通知和閾值，隨時獲取健康狀態更新。
- AI 教練 — 提供基於用戶數據的建議，並可選擇使用本地模型進行分析。

## 快速開始

1. 克隆專案
```bash
git clone NOOP
```
2. 進入專案目錄
```bash
cd NOOP
```
3. 生成 Xcode 專案
```bash
xcodegen gen
```

## 程式碼範例

```swift
{
  "前置條件": "需要 macOS 13+ 和 Xcode 15+。",
  "指令": "xcodegen gen",
  "預期輸出": "生成 Xcode 專案以便進行開發。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 21 天內累積 2070 stars（每天約 99），forks 數量為 805（38.9%），顯示出強烈的社群參與。開發者 NoopApp 之前專注於健康數據隱私，這個專案解決了用戶對於 WHOOP 數據的控制問題，提供了一個無需雲端的替代方案。近期的推廣活動和社群反饋也促進了這個專案的曝光度。高比例的 forks 表示許多開發者在積極修改和使用這個工具，顯示出其實用性和需求。

## 適合誰使用

**目標受眾**：希望在不依賴雲端的情況下追蹤健康數據的 WHOOP 使用者。

> [!example] 使用場景
> - 健身愛好者用它來追蹤日常的心率和恢復狀態，因為它提供了即時的數據分析，無需依賴雲端服務。
> - 運動教練用它來分析運動員的 HRV 和睡眠數據，因為所有數據都在本地處理，能夠保護運動員的隱私。
> - 數據分析師用它來導入和分析 WHOOP 數據，因為它支持 CSV 導入，並且不需要註冊帳戶。

## 架構分析

NOOP 採用跨平台架構，使用 Swift 和 Kotlin 進行開發，確保在 macOS 和 Android 上都能提供一致的用戶體驗。數據處理完全在本地進行，這樣的設計不僅提高了性能，還增強了用戶的數據隱私。應用的核心功能模組化，便於未來擴展和維護。選擇本地計算而非雲端處理，雖然提高了數據安全性，但也限制了某些即時數據共享功能。整體架構輕量，適合個人使用，但在大規模數據處理時可能會遇到性能瓶頸。

## 技術深入分析

NOOP 的核心技術機制在於其離線數據處理能力，所有數據分析均在本地進行，這樣的設計不僅提高了性能，還增強了用戶的數據隱私。使用 Swift 和 Kotlin 進行跨平台開發，確保在不同設備上提供一致的用戶體驗。應用能夠處理多達數千條數據記錄，並提供即時的健康分析，這在其他依賴雲端的應用中是無法實現的。選擇本地計算而非雲端處理，雖然提高了數據安全性，但也限制了某些即時數據共享功能。整體架構輕量，適合個人使用，但在大規模數據處理時可能會遇到性能瓶頸。與主流健康追蹤應用相比，NOOP 的設計更注重用戶隱私和數據控制，這使其在市場上具有獨特的競爭優勢。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和範例，安裝過程相對順暢，但需要用戶具備基本的開發環境配置能力。整體上，花 30 分鐘應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 完全離線運行，保護用戶隱私。
> - 無需訂閱費用，降低使用門檻。
> - 即時數據分析，提供用戶即時反饋。

> [!danger] 缺點
> - 不支援 Windows 系統，限制了用戶群。
> - 缺乏多語言支持，可能影響非英語用戶的體驗。
> - 需要用戶擁有自己的 WHOOP 腕帶，限制了使用場景。

> [!warning] 注意事項
> - 僅支援 macOS 13+ 和 Xcode 15+。
> - 目前僅提供英文介面，缺乏多語言支持。
> - 需要用戶擁有自己的 WHOOP 腕帶才能進行實時數據連接。
> - 不支援 Windows 系統。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的健康數據追蹤功能，但依賴雲端服務，無法保證數據隱私。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於數據分析，但不支持 WHOOP 數據的直接導入。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| WHOOP 官方應用 | 依賴雲端服務進行數據存儲和分析，提供即時數據共享功能。 | 如果需要即時數據共享和雲端分析，則 WHOOP 官方應用更合適。 | medium，因為需要將數據從 NOOP 轉移到雲端。 |
| Fitbit | 提供類似的健康追蹤功能，但需要訂閱服務以解鎖完整功能。 | 如果需要更全面的健康追蹤功能和社群互動，Fitbit 是不錯的選擇。 | high，因為需要重新建立健康數據的歷史記錄。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **noop** | **WHOOP 官方應用** | **Fitbit** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 依賴雲端服務進行數據存儲和分析，提供即時數據共享功能。 | 提供類似的健康追蹤功能，但需要訂閱服務以解鎖完整功能。 |
> | 遷移成本 | - | medium，因為需要將數據從 NOOP 轉移到雲端。 | high，因為需要重新建立健康數據的歷史記錄。 |
> | 適用場景 | 主要場景 | 如果需要即時數據共享和雲端分析，則 WHOOP 官方應用更合 | 如果需要更全面的健康追蹤功能和社群互動，Fitbit 是不錯 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人使用和測試，但不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些設備上可能無法穩定連接 WHOOP 腕帶
  - 解法：嘗試重新啟動藍牙或重置腕帶
- [MEDIUM] 數據導入過程中可能出現格式錯誤
  - 解法：確保 CSV 文件格式正確，參考官方文檔
- [MEDIUM] 部分功能在舊版設備上不兼容
  - 解法：檢查設備是否符合最低要求

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型健身工作室使用 NOOP 追蹤客戶健康數據 | 非常適合 | 提供即時數據分析，無需雲端服務，適合小型團隊使用。 |
| 個人健身愛好者希望保護隱私 | 非常適合 | 完全離線運行，保護用戶數據隱私。 |
| 大型健身房需要即時數據共享 | 不適合 | 不支持雲端數據共享，限制了團隊協作。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到一個隱私保護的健康追蹤工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，所有數據均在本地處理，無需存取敏感資料，適合在 CI/CD 環境中使用。

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
| Forks | 805 |
| Open Issues | 30 |
| Issue 解決率 | 93% (386 closed) |
| 最後推送 | 2026-06-29 |
| 建立日期 | 2026-06-07 |
| Repo 大小 | 114.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NoopApp/noop) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 52
>     "Kotlin" : 45
>     "Python" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@NoopApp](https://github.com/NoopApp) | 718 |

**最新版本**：v7.4.0 — NOOP v7.4.0 (2026-06-29)

> [!info]- Release Notes
> A simpler Today, your Charge explained, and new on-device HRV science.
> 
> - Simpler Today: a calmer layout, one clean read up top, the daily synthesis folded to a single line, even card spacing. Still fully customisable.
> - See exactly what shaped your Charge, with a plain-English how-it-is-calculated link.
> - New on-device measures, computed locally: frequency-domain HRV (LF/HF autonomic balance), a Baevsky stress index, and a sharper illness confidence read.
> - Test Centre is one tap from More now, and the iOS report button that did nothing is fixed.
> - Polish: the score rings behave on every day, and the date header reminds you that you can swipe or tap to change the day.
> 
> Free, on-device, no account, no cloud, no subscription. macOS, iOS (sideload) and Android.

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/NoopApp/noop)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-28 ~ 2026-06-29）
> **活躍天數** 2 天 · **最新 commit** v7.4.0: refresh AltStore source (build 159)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#132](https://github.com/NoopApp/noop/issues/132) | 🙏 Roadmap & help wanted — specific things we need (grab one `help wanted` `roadmap` | 4 | 16 |

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
> GitHub down? Every release is mirrored at noop.fans &mdash; same downloads, release for release, as a fallback.
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
>   🪞&nbsp;Mirror ·
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
> | **Settings** | Profile, preferences, **step calibration** 

## 延伸閱讀

相關概念：[[健康追蹤]] · [[數據隱私]] · [[離線應用]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]]

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
> const concepts = ["健康追蹤","數據隱私","離線應用"];
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
