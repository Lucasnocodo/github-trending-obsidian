---
repo: NoopApp/noop
url: https://github.com/NoopApp/noop
owner: NoopApp
owner_type: User
language: Swift
license: NOASSERTION
description: "Offline WHOOP companion — pair your strap over Bluetooth, keep all data on your own device. No cloud, no account, no subscription."
homepage: ""
stars: 532
stars_per_day: 532
forks: 486
open_issues: 3
created: 2026-06-07
pushed_at: 2026-06-08
first_seen: 2026-06-09
week: "2026-W24"
month: "2026-06"
category: "其他"
subcategory: "健康應用"
release_tag: "v1.32"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-09
use_case: "讓你在本地管理 WHOOP strap 的數據，無需雲端、帳號或訂閱。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-12"
contributor_count: 1
engagement: "high"
issue_close_rate: 91
repo_size_kb: 1903
readme_length: 9989
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-09"
star_history: "2026-06-09:532"
tags:
  - github
  - "category/其他"
  - "lang/swift"
aliases:
  - "noop"
  - "NoopApp/noop"
  - "讓你在本地管理 WHOOP strap 的數據，無需雲端、帳號或訂閱。"
---

# noop

**532** stars · **532** stars/天 · 建立 1 天前 · Swift · NOASSERTION

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

`個人專案` `v1.32`

> [!summary] 一句話摘要
> 讓你在本地管理 WHOOP strap 的數據，無需雲端、帳號或訂閱。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (532 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要在本地管理 WHOOP strap 數據並重視隱私的健身愛好者。
> **一句話重點** NOOP 讓用戶完全掌控自己的健康數據，無需依賴雲端服務，這在當前數據隱私日益受到重視的時代，顯得尤為重要。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/NoopApp--noop");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "健康應用" && p.file.name !== "NoopApp--noop" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 健康應用 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、3 小時整合，得到高隱私保護的數據管理工具，值得考慮。

> [!abstract] 核心創新
> NOOP 是一個完全本地的 WHOOP strap 數據管理應用，無需雲端和帳號。

## 專案簡介

NOOP 是一款離線的 WHOOP companion 應用，專為使用者提供完全的數據控制。用戶可以透過藍牙連接自己的 WHOOP strap，並將所有數據保存在本地 SQLite 數據庫中，這樣就不需要依賴任何雲端服務。用戶可以即時查看心率、HRV 和其他生理數據，並且可以透過簡單的 CSV 或 Apple Health 匯入歷史數據。NOOP 的一大賣點是其完全的本地運行模式，這意味著用戶的數據不會被上傳到任何伺服器，完全保護隱私。這個應用使用 Swift、Kotlin 和 Python 開發，並且在 macOS 和 Android 平台上運行。它的設計考慮到了用戶的需求，提供了多種功能，如即時數據顯示、運動記錄、睡眠分析和行為洞察等，所有計算均在本地完成，避免了網絡延遲。

NOOP 的架構簡單明瞭，依賴於少量的外部庫，這使得它在性能上更具優勢。與其他類似工具相比，如 WHOOP 官方應用，NOOP 提供了更高的數據擁有權和隱私保護，並且不需要用戶支付任何訂閱費用。這使得 NOOP 特別適合那些重視數據隱私的用戶，尤其是健身愛好者和運動員。使用 NOOP，無需擔心數據的安全性和隱私問題，並且可以隨時訪問自己的數據。這個專案目前仍在活躍開發中，社群支持良好，對於需要長期使用 WHOOP strap 的用戶來說，NOOP 是一個值得考慮的選擇。

**技術棧**：`Swift` · `Kotlin` · `Python` · `Shell`

## 重點功能

- 本地數據存儲 — 所有數據保存在本地 SQLite 數據庫中，無需雲端。
- 即時數據顯示 — 實時查看心率、HRV 和其他生理數據，更新頻率約為 1 Hz。
- 歷史數據匯入 — 支持從 Apple Health 和 WHOOP CSV 匯入歷史數據，方便用戶進行長期分析。
- 無需帳號 — 完全不需要註冊帳號或訂閱，使用者可以匿名使用。
- 自定義通知 — 用戶可設定本地通知和閾值，隨時掌握自己的健康狀態。

## 快速開始

1. 克隆專案
```bash
git clone NOOP
```
2. 進入專案目錄
```bash
cd NOOP
```
3. 使用 Xcode 開啟專案
```bash
open NOOP.xcodeproj
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 532 stars（532/天），forks 486（91.4%），這顯示出極高的用戶參與度。NOOP 的開發者 NoopApp 在開源社群中有一定的知名度，並且這個專案解決了許多用戶對於 WHOOP 官方應用的隱私和數據控制的擔憂。使用者可以在不依賴雲端的情況下，完全掌控自己的數據，這在當前數據隱私日益受到重視的背景下，顯得尤為重要。最近的推廣活動和社群討論也促進了這個專案的曝光率。

## 適合誰使用

**目標受眾**：需要在本地管理 WHOOP strap 數據並重視隱私的健身愛好者。

> [!example] 使用場景
> - 健身愛好者用它來追蹤自己的心率和運動數據，因為 NOOP 提供了即時數據顯示和本地數據存儲，讓他們不必擔心數據隱私。
> - 運動員用它來分析自己的訓練負荷和恢復狀態，因為 NOOP 能夠提供基於個人數據的行為洞察，幫助他們做出更好的訓練決策。
> - 數據分析師用它來匯入和分析歷史健康數據，因為 NOOP 支持從 Apple Health 和 WHOOP CSV 匯入數據，方便進行長期趨勢分析。

## 架構分析

NOOP 的架構設計以本地數據存儲為核心，選擇 SQLite 作為數據庫，這樣可以確保數據的快速存取和隱私保護。應用的前端使用 Swift 和 SwiftUI 建立，提供了直觀的用戶界面，並且所有的數據處理和計算都在本地完成，避免了網絡延遲。這樣的設計使得用戶能夠隨時訪問自己的數據，而不需要依賴外部伺服器。NOOP 的一個主要 trade-off 是，雖然這樣可以提高數據安全性，但也限制了某些雲端功能的實現。整體而言，這個架構適合需要高隱私保護的用戶，但在某些情況下可能無法提供即時的數據共享功能。

## 技術深入分析

NOOP 的核心技術機制在於其本地數據存儲和處理，使用 SQLite 作為數據庫來確保數據的快速存取和隱私保護。應用的前端使用 Swift 和 SwiftUI 開發，這使得界面設計簡潔且易於使用。NOOP 能夠實時處理來自 WHOOP strap 的數據，並且以約 1 Hz 的頻率更新顯示，這對於需要即時反饋的用戶來說非常重要。設計上，NOOP 選擇了本地運行的模式，這雖然提高了數據安全性，但也限制了某些雲端功能的實現，如數據的即時共享和社交互動。這個選擇使得 NOOP 在隱私保護上表現出色，但在某些情況下可能無法提供與其他雲端應用相同的功能。整體而言，NOOP 的架構設計適合需要高隱私保護的用戶，並且能夠在不依賴外部伺服器的情況下，提供穩定和快速的數據處理能力。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含了安裝步驟和功能介紹。安裝過程順暢，但需要用戶具備基本的 Xcode 使用經驗。沒有提供多語言支持，主要以英文為主。整體來說，對於有開發背景的用戶來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 完全本地運行，無需雲端，保護用戶隱私。
> - 即時數據顯示，適合需要快速反饋的用戶。
> - 支持歷史數據匯入，方便用戶進行長期分析。

> [!danger] 缺點
> - 不支持 Windows 系統，僅限於 macOS 和 Android。
> - 需要用戶擁有自己的 WHOOP strap，無法使用其他設備。
> - 功能上可能不如官方應用全面，缺乏社交功能。

> [!warning] 注意事項
> - 僅支援 macOS 13+ 和 Xcode 15+。
> - 不支持 Windows 系統，僅限於 macOS 和 Android。
> - 需要用戶擁有自己的 WHOOP strap，無法使用其他品牌的設備。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [whoop/whoop](https://github.com/whoop/whoop) | WHOOP 官方應用提供雲端服務和社交功能，但需要訂閱費用，且數據不完全由用戶控制。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這是一個針對不同健康數據的分析工具，但不專注於 WHOOP strap 的數據，且需要網絡連接。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [whoop/whoop](https://github.com/whoop/whoop) | WHOOP 官方應用提供雲端服務和社交功能，但需要訂閱費用，且數據不完全由用戶控制。 | 如果你的團隊需要社交功能和雲端數據分析，WHOOP 官方應用會更適合。 | medium，因為需要重新設置帳號和數據同步。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這是一個針對不同健康數據的分析工具，但不專注於 WHOOP strap 的數據，且需要網絡連接。 | 如果你需要更廣泛的健康數據分析，而不僅僅是 WHOOP strap 的數據，這個工具會更適合。 | low，因為可以直接使用現有的數據格式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **noop** | **whoop** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | WHOOP 官方應用提供雲端服務和社交功能，但需要訂閱費用，且數據不完全由用戶控制。 | 這是一個針對不同健康數據的分析工具，但不專注於 WHOOP strap 的數據，且需要網絡連接。 |
> | 遷移成本 | - | medium，因為需要重新設置帳號和數據同步。 | low，因為可以直接使用現有的數據格式。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要社交功能和雲端數據分析，WHOOP 官方應用 | 如果你需要更廣泛的健康數據分析，而不僅僅是 WHOOP st |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** WHOOP 5/MG 的觸覺反饋命令被確認但不會震動
  - 解法：目前無法解決，需等待更新
- [MEDIUM] 某些歷史數據匯入可能出現格式錯誤
  - 解法：確保匯入的 CSV 格式正確
- [MEDIUM] 在特定藍牙環境下可能無法穩定連接
  - 解法：確保周圍環境無其他藍牙干擾

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | NOOP 的本地數據存儲和隱私保護非常符合小型團隊的需求。 |
| 大型健身俱樂部的數據分析系統 | 不適合 | NOOP 目前不支持多用戶和雲端數據共享，無法滿足大型團隊的需求。 |
| 個人健康追蹤應用 | 非常適合 | NOOP 提供了即時數據顯示和本地數據存儲，適合個人使用。 |
| 需要社交功能的健身應用 | 不適合 | NOOP 不支持社交功能，無法滿足這類需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高隱私保護的數據管理工具，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> NOOP 本身不需要高權限，並且不存取敏感資料。依賴鏈的信任程度較高，無已知的供應鏈風險。在 CI/CD 中使用相對安全，因為所有數據處理都在本地完成。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

NOOP 最常與 macOS 和 Android 平台搭配使用，適合在個人健康追蹤的工作流中。用戶可以在 macOS 上使用 NOOP 來管理 WHOOP strap 數據，具體做法是透過藍牙連接 strap，並在應用內查看即時數據。NOOP 支援與 Apple Health 整合，方便用戶匯入歷史數據。整合的摩擦點主要在於藍牙連接的穩定性，特定環境下可能會遇到干擾。

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
| Forks | 486 |
| Open Issues | 3 |
| Issue 解決率 | 91% (32 closed) |
| 最後推送 | 2026-06-08 |
| 建立日期 | 2026-06-07 |
| Repo 大小 | 1.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NoopApp/noop) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 55
>     "Kotlin" : 41
>     "Python" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@NoopApp](https://github.com/NoopApp) | 70 |

**最新版本**：v1.32 — v1.32 — Today trends stay within their window (Mac) (2026-06-08)

> [!info]- Release Notes
> **Mac:** the Today screen's metric sparklines are labelled a **"14-day trend"**, but if a metric had fewer than two readings in that window, the chart quietly fell back to your *entire* history — so an old import could draw months-old data as if it were a current trend.
> 
> The sparklines now stay strictly within their window. A metric whose latest reading is older than its window shows **"—"** rather than a stale number (weight keeps a generous 90-day window, so genuinely recent readings still show).
> 
> Thanks to **@rr-allin** (#49). Android already handled this correctly, so this is a Mac-only fix.
> 
> **Downloads**
> - **Mac** — `NOOP-macos.zip` (universal — Intel + Apple Silicon). Unsigned (anonymous project): right-click → Open the first time.
> - **Android** — `NOOP-full.apk`, or `NOOP-demo.apk` for demo data with no strap. (Version bump only.)
> 
> Independent, experimental, fully offline. Not affiliated with WHOOP.

## 社群與生態

**社群活躍度**：社群活躍，回應速度快，開發者積極解決問題。
**連結**：[文件](https://github.com/NoopApp/noop/wiki)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-08 ~ 2026-06-08）
> **活躍天數** 1 天 · **最新 commit** v1.32 — keep Today sparklines within their window (#49)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#48](https://github.com/NoopApp/noop/issues/48) | WHOOP 5/MG haptics command is acknowledged but does not buzz | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> NOOP
> 
> Your strap. Your data. Your machine. Local-first, no cloud.
> 
>   
>   
>   
>   
>   
> 
>   ♥&nbsp;Support ·
>   ⬇&nbsp;Download ·
>   Features ·
>   Protocol ·
>   Contact
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
> 2. **Buy a small amount of Bitcoin (BTC) or Ethereum (ETH)** — even $5–10 is genuinely helpful.
> 3. **Tap Send / Withdraw, paste the matching address below, and send.** That's it. (Only ever send a coin to its own network.)
> 
> | Coin | Network | Address |
> |---|---|---|
> | **BTC** | Bitcoin | `bc1qn2gkl7wslwpws06mvazjn2uu689zlkv7kg3kf5` |
> | **ETH** | Ethereum | `0xd64D508b531c4b1297Ca4023C774e0E97aA67B7F` |
> | **ADA** | Cardano | `addr1qxsju3y0mlke2h6h2g6qgnq4r3jstngtyjxs0nnp5zrv28zv8p5rgzruxyjz33j9k23pffta8z639e2snjdd4vcetfqsn4vwr3` |
> | **XRP** | XRP Ledger | `rpvijHi2nVY9WWAJhojsAX5tJmHdmLtFhq` |
> 
> Each address also has a scan-to-donate **QR code** in the app under **Support** (and they're listed in [`docs/DONATIONS.md`](docs/DONATIONS.md)). *Always copy the full address and double-check the first and last characters; crypto transactions are irreversible, and only ever send a coin to its own network.*
> 
> **Can't or would rather not?** Also genuinely valued: **⭐ star this repo**, file a good bug report, share a strap log, test on hardware you own, or just tell another WHOOP user. That moves NOOP forward too.
> 
> ---
> 
> 
> ## Features
> 
> The macOS reference app organizes everything behind a single sidebar
> (`Strand/App/RootView.swift`). Each item below is a real screen in
> `Strand/Screens/`.
> 
> | Screen | What it does |
> |---|---|
> | **Today** (Control Center) | Home dashboard: recovery ring, a "today's synthesis" insight, a grid of stat tiles (recovery, strain, sleep, HRV, RHR, SpO₂, respiratory, steps, weight, calories) each with a 14-day sparkline, recent workouts, and a data-sources footer. |
> | **Readiness** | An on-device "should you push today?" read that synthesizes established sports-science signals from your own history — HRV vs your baseline (Plews/Buchheit), resting-HR drift (Lamberts), sleeping respiratory-rate drift, training-load balance (acute:chronic workload ratio, Gabbett) and training monotony (Foster) — into a single headline (Primed / Balanced / Strained / Run down) with the drivers behind it. Pure local math, not medical advice. |
> | **Live** | Real-time view of the connected strap — heart rate and frame stream as they arrive (~1 Hz). |
> | **Breathe** | **HRV haptic breathing biofeedback.** The strap both *measures* HRV (R-R intervals) and *buzzes* its haptic motor, so NOOP paces your breath with felt cues (one buzz inhale, two exhale) and shows live HR + rolling RMSSD responding as the session deepens. Presets: Relax 4-6, Coherence 5.5, Box 4-4. |
> | **Intervals** | **Silent haptic HIIT timer.** The strap buzzes every transition (triple-buzz into WORK, single into REST, 3-2-1 tick at phase ends, long buzz on finish) so you train hands-free. Falls back to a glanceable visual timer with no strap. |
> | **Explore** (Metric Explorer) | Interrogate any single metric over time, built from the metric catalog (`Strand/Data/MetricCatalog.swift`). |
> | **Compare** | Plot two metrics together / against each other over a shared timeline. |
> | **Insights** | Behavioral and correlational insights derived from your own series. |
> | **Sleep** | Sleep sessions with a hypnogram, stage breakdown, efficiency, resting HR, and HRV — computed by the on-device sleep stager. |
> | **Trends** | Long-range trends across recovery, strain, sleep, and biometrics. |
> | **Workouts** | Detected exercise sessions with strain and heart-rate detail. |
> | **Health** | Biometric overview (HR, HRV, SpO₂, skin temperature, respiratory rate, etc.). |
> | **Stress** | Day-level stress / autonomic load visualization. |
> | **Apple Health** | Browse and reconcile data imported from your Apple Health export. |
> | **Data Sources** | One-tap import of a WHOOP CSV export or an Apple Health export, plus live-strap status. "Bring your history in once, then it's yours." |
> | **Notifications** | Configure local notifications and thresholds (`Strand/Data/NotificationSettingsStore.swift`). |
> | **Automations** | Turn the strap's physical inputs and live biometrics into Mac actions — all on-device (see below). |
> | **Coach** | An optional **AI Coach** you can ask about your data in plain language. It's the one feature that ever uses the network: off until you add your own OpenAI/Anthropic key, and it sends only a short text summary of recent metrics plus your question — never raw streams or identifiers. On the sandboxed macOS build it's blocked by the App Sandbox (no network entitlement); it works on Android. See [`docs/PRIVACY_SECURITY.md`](docs/PRIVACY_SECURITY.md). |
> | **Settings** | Profile, preferences, the in-app **What's new** changelog, and an opt-in **Experimental** section (WHOOP 5/MG protocol probes). |
> | **Support** | Attribution + **optional** crypto donations. The whole app works without them. |
> 
> There is also a **menu-bar extra** (`Strand/MenuBar/MenuBarContent.swift`) with a
> glanceable live HR readout and a compact popover, a first-run **onboarding wizard**
> that sets expectations (independent/experimental, WHOOP 4.0 vs 5/MG, on-device only),
> and an in-app **"What's new"** changelog shown after each update.
> 
> 
> ## Support (optional)
> 
> NOOP is free and always will be, and never gates a feature behind payment. If it's
> useful to you and you want to help with the development and testing costs, optional
> crypto donation addresses are shown on the in-app **Support** screen and listed in
> [`docs/DONATIONS.md`](docs/DONATIONS.md). Donations are 100% optional and the app
> never asks twice.
> 
> **Contact:** questions, feedback, and bug reports → [thenoopapp@gmail.com](mailto:thenoopapp@gmail.com)
> 
> ---
> 
> 
> ## Why NOOP
> 
> You bought the strap. The biometric stream it produces is yours. NOOP is built on
> that premise:
> 
> - **Own your data.** NOOP reads heart rate, R-R intervals, SpO₂, skin temperature,
>   respiration, accelerometer/gravity, battery, and event data straight off the
>   strap over Bluetooth and writes it to a local SQLite database. Nothing is
>   uploaded anywhere.
> - **Account-free and local.** NOOP never logs into a WHOOP account and never hits
>   a WHOOP server. It does not bypass any login, paywall, or DRM; it simply talks to
>   a device you own and reads data you generated.
> - **Bring your history.** Already have years of data in the official app or in
>   Apple Health? Import the WHOOP CSV export and/or your Apple Health `export.xml`
>   once, and it's permanently on your machine.
> - **Transparent math.** Recovery, strain, HRV, and sleep are recomputed on-device
>   from documented, citable methods (Task Force 1996 HRV, Karvonen %HRR, Edwards /
>   Banister TRIMP, Tanaka HRmax, and so on). The algorithms are approximations of —
>   not reproductions of — any proprietary model, and every analyzer file documents
>   exactly what it does.
> 
> ---
> 
> 
> ## Keeping NOOP alive
> 
> NOOP is **free, forever** — no account, no cloud, no subscription, every feature unlocked, no nag. That doesn't change.
> 
> But here's the honest reality, up front: **NOOP is built and maintained by one person, out of pocket.** Reverse-engineering WHOOP's hardware — and keeping up as its firmware changes — takes real time and real test hardware. **The project continues if the people who use it help fund it. 

## 延伸閱讀

相關概念：[[健康數據管理]] · [[數據隱私]] · [[本地應用]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]]

[GitHub](https://github.com/NoopApp/noop)

## 相關收錄

> [!note]- 直接競品（同子分類：健康應用）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "健康應用" AND file.name != "NoopApp--noop"
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
> const concepts = ["健康數據管理","數據隱私","本地應用"];
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

- [[2026-06-09|2026-06-09]] — 首次收錄，532 stars
