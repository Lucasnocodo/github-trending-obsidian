---
repo: NoopApp/noop
url: https://github.com/NoopApp/noop
owner: NoopApp
owner_type: User
language: Swift
license: NOASSERTION
description: "Offline WHOOP companion — pair your strap over Bluetooth, keep all data on your own device. No cloud, no account, no subscription."
homepage: ""
stars: 1605
stars_per_day: 268
forks: 700
open_issues: 5
created: 2026-06-07
pushed_at: 2026-06-14
first_seen: 2026-06-09
week: "2026-W24"
month: "2026-06"
category: "其他"
subcategory: "健康追蹤"
release_tag: "v2.12.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-09
use_case: "離線的 WHOOP 伴侶，透過藍牙配對，所有數據保留在本地，無需雲端、帳號或訂閱。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-06-17"
contributor_count: 1
engagement: "high"
issue_close_rate: 97
repo_size_kb: 3338
readme_length: 10000
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-09"
star_history: "2026-06-09:532,2026-06-09:534,2026-06-10:1029,2026-06-10:1033,2026-06-11:1395,2026-06-11:1395,2026-06-12:1482,2026-06-12:1484,2026-06-13:1544,2026-06-13:1544,2026-06-14:1605,2026-06-14:1605"
tags:
  - github
  - "category/其他"
  - "lang/swift"
aliases:
  - "noop"
  - "NoopApp/noop"
  - "離線的 WHOOP 伴侶，透過藍牙配對，所有數據保留在本地，無需雲端、帳號或訂閱。"
---

# noop

**1.6k** stars · **268** stars/天 · 建立 6 天前 · Swift · NOASSERTION

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

`個人專案` `v2.12.0`

> [!summary] 一句話摘要
> 離線的 WHOOP 伴侶，透過藍牙配對，所有數據保留在本地，無需雲端、帳號或訂閱。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (268 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 希望在不依賴雲端的情況下管理 WHOOP 數據的健康追蹤者。
> **一句話重點** NOOP 不僅是一個健康追蹤工具，更是一個強調用戶數據隱私的本地應用。

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
> **結論** 花 3 小時學習，2 小時整合，得到高隱私性的健康數據管理，值得一試。

> [!abstract] 核心創新
> 提供持續的心率變異性捕捉，並在背景中保持數據流通。

## 專案簡介

NOOP 是一款專為 WHOOP 使用者設計的本地應用，允許用戶透過藍牙連接其 WHOOP 腕帶，並在無需雲端的情況下收集和存儲數據。用戶可以選擇開啟持續的心率變異性（HRV）捕捉功能，這樣應用在背景中持續接收數據，提供更準確的夜間 HRV、恢復和睡眠數據。這一功能在默認情況下是關閉的，因為它會消耗更多電池。NOOP 的設計理念是「你的裝置，你的數據」，強調用戶對數據的完全控制。技術上，NOOP 使用 Swift、Kotlin 和 Python，並且依賴於藍牙技術進行數據傳輸。

這使得 NOOP 在數據隱私和用戶體驗上有明顯優勢，因為用戶不需要依賴雲端服務。與其他類似應用相比，如 WHOOP 官方應用，NOOP 提供了更高的數據隱私性和靈活性，因為所有數據都存儲在本地，無需註冊帳號或訂閱服務。使用者在使用過程中可能會遇到數據同步問題，特別是與 WHOOP 5/MG 型號的兼容性問題，這些問題在社群中已有討論。NOOP 目前處於活躍開發階段，社群回應迅速，並且有明確的發展路線圖。對於需要長期監控健康數據的用戶來說，NOOP 是一個值得考慮的選擇。

**技術棧**：`Swift` · `Kotlin` · `Python` · `Shell`

## 重點功能

- 持續 HRV 捕捉 — 在背景中持續接收心率變異性數據，提供更準確的夜間數據。
- 本地數據存儲 — 所有數據保留在用戶設備上，無需雲端服務。
- 跨平台支持 — 同時支持 macOS、Android 和 iOS，使用共享的跨平台代碼。
- 即時數據顯示 — 提供實時的心率、恢復和睡眠數據，並可視化顯示。
- 開源社群 — 鼓勵用戶參與開發和貢獻，提供明確的路線圖和需求列表。

## 快速開始

1. 安裝要求
```bash
macOS 13+, Xcode 15+, 並確保 Mac 支援藍牙。
```
2. 下載並安裝 NOOP
```bash
從 GitHub 下載最新版本的 NOOP 應用。
```
3. 配對你的 WHOOP 腕帶
```bash
在應用中選擇藍牙配對，連接你的 WHOOP 腕帶。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 1605 stars（268/天），forks 700（43.6%），顯示出強烈的社群參與度。這個專案由 NoopApp 團隊開發，專注於提供一個無需雲端的 WHOOP 數據管理方案，解決了用戶對數據隱私的擔憂。之前的解決方案大多依賴雲端，無法提供用戶完全的數據控制。近期的推廣和社群互動也促進了其快速增長，特別是在健康和健身領域的需求上升。forks/stars 比率高達 43.6%，顯示出許多開發者對此專案的實際修改和使用意圖。

## 適合誰使用

**目標受眾**：希望在不依賴雲端的情況下管理 WHOOP 數據的健康追蹤者。

> [!example] 使用場景
> - 健身愛好者用它來持續追蹤心率變異性，因為這樣能更準確地評估恢復狀態，並根據數據調整訓練計劃。
> - 數據隱私重視者用它來存儲健康數據，因為它不依賴雲端，所有數據都保留在本地，確保隱私安全。
> - 開發者用它來探索 WHOOP 的數據接口，因為它提供了開源的代碼和清晰的文檔，方便進行二次開發。

## 架構分析

NOOP 的架構設計為本地優先，所有數據都存儲在用戶設備上，這樣可以避免雲端依賴帶來的隱私風險。應用使用藍牙協議與 WHOOP 腕帶進行連接，並透過 Swift 和 Kotlin 實現跨平台支持。資料流從腕帶到應用的過程中，使用了高效的數據緩存技術以減少延遲。選擇本地存儲的代價是需要用戶自行管理數據，這對於不熟悉技術的用戶可能造成困難。擴展性方面，NOOP 可以隨著用戶需求增加而增加功能，但需考慮到本地存儲的資源限制。

## 技術深入分析

NOOP 的核心技術機制在於其本地數據存儲和藍牙連接技術，這使得用戶能夠在不依賴雲端的情況下獲取和分析健康數據。應用使用 Swift 和 Kotlin 實現跨平台支持，並且通過 Python 和 Shell 進行後端數據處理。這樣的設計使得 NOOP 能夠在多個平台上提供一致的用戶體驗。效能方面，NOOP 能夠持續捕捉心率變異性數據，這對於健康監控至關重要，但也會增加電池消耗，這是使用者需要考慮的因素。選擇本地存儲的架構使得 NOOP 在數據隱私上有明顯優勢，但也意味著用戶需要承擔數據管理的責任。技術風險方面，NOOP 需要持續解決與不同 WHOOP 型號的兼容性問題，這可能會影響用戶體驗。整合方面，NOOP 可以與現有的健康追蹤工具鏈相容，但可能需要額外的配置來確保數據的正確同步。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用指南。安裝過程相對順暢，但需要用戶具備一定的技術背景。沒有提供多語言支持，主要以英文為主。

## 優缺點分析

> [!success] 優點
> - 數據隱私性高，所有數據保留在本地。
> - 無需雲端服務，減少了對網絡的依賴。
> - 持續的 HRV 捕捉提供更準確的健康數據。

> [!danger] 缺點
> - 需要用戶自行管理數據，對於不熟悉技術的用戶可能有困難。
> - 持續 HRV 捕捉會增加電池消耗。
> - 與某些 WHOOP 型號的兼容性問題仍在解決中。

> [!warning] 注意事項
> - 僅支援 macOS 13+ 和 Xcode 15+ 環境。
> - 持續 HRV 捕捉功能會增加電池消耗，默認為關閉狀態。
> - 與某些 WHOOP 型號的兼容性問題仍在解決中。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [WHOOP/whoop](https://github.com/WHOOP/whoop) | WHOOP 官方應用依賴雲端服務，無法提供本地數據存儲，且需要帳號和訂閱。 |
| [Fitbit/fitbit](https://github.com/Fitbit/fitbit) | Fitbit 主要依賴其生態系統，NOOP 提供更高的數據隱私性和靈活性。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [WHOOP/whoop](https://github.com/WHOOP/whoop) | WHOOP 官方應用依賴雲端服務，無法提供本地數據存儲，且需要帳號和訂閱。 | 如果你的團隊已經在使用 WHOOP 並需要雲端數據分析功能。 | medium，因為需要重新設置帳號和數據同步。 |
| [Fitbit/fitbit](https://github.com/Fitbit/fitbit) | Fitbit 主要依賴其生態系統，NOOP 提供更高的數據隱私性和靈活性。 | 如果你需要一個整合了多種健康追蹤功能的生態系統。 | high，因為需要轉移大量的健康數據和設定。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **noop** | **whoop** | **fitbit** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | WHOOP 官方應用依賴雲端服務，無法提供本地數據存儲，且需要帳號和訂閱。 | Fitbit 主要依賴其生態系統，NOOP 提供更高的數據隱私性和靈活性。 |
> | 遷移成本 | - | medium，因為需要重新設置帳號和數據同步。 | high，因為需要轉移大量的健康數據和設定。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 WHOOP 並需要雲端數據分析功能。 | 如果你需要一個整合了多種健康追蹤功能的生態系統。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合健康追蹤愛好者試用，但不建議用於生產環境的核心健康數據管理。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 與某些 WHOOP 型號的兼容性問題，可能導致數據無法同步
  - 解法：檢查應用更新，並參考社群討論解決方案
- [MEDIUM] 持續 HRV 捕捉功能會增加電池消耗
  - 解法：根據需求選擇是否開啟此功能
- [MEDIUM] 數據顯示延遲，特別是在高負載情況下
  - 解法：確保藍牙連接穩定，並重啟應用

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | NOOP 提供靈活的數據管理和高隱私性，適合小型團隊使用。 |
| 大型企業健康數據分析 | 不適合 | 缺乏雲端支持，無法滿足大型企業的數據需求。 |
| 個人健康追蹤者 | 非常適合 | 提供本地數據存儲，能夠滿足個人對隱私的需求。 |
| 健身教練需要團隊數據分析 | 適合 | 雖然數據管理靈活，但需要考慮數據同步問題。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到高隱私性的健康數據管理，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：NOOP 不需要高權限，所有數據都存儲在本地，減少了對敏感資料的存取需求。

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
| Forks | 700 |
| Open Issues | 5 |
| Issue 解決率 | 97% (169 closed) |
| 最後推送 | 2026-06-14 |
| 建立日期 | 2026-06-07 |
| Repo 大小 | 3.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NoopApp/noop) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 50
>     "Kotlin" : 45
>     "Python" : 5
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@NoopApp](https://github.com/NoopApp) | 236 |

**最新版本**：v2.12.0 — v2.12.0 — Continuous HRV capture: sharper overnight HRV, recovery & sleep (2026-06-14)

> [!info]- Release Notes
> **Continuous HRV capture (opt-in) — far sharper overnight HRV, recovery and sleep.**
> 
> Your WHOOP strap streams dense beat-to-beat heart-rate variability **in the clear** on the standard HR characteristic — but apps (NOOP included, until now) only listen while a live screen is open. So overnight, exactly when HRV, recovery and sleep depend on it, the data went quiet and NOOP fell back to the strap's sparse history.
> 
> - ✨ **New (opt-in):** turn on **Continuous HRV capture** (Settings → Strap) and NOOP keeps the stream open in the background, banking roughly an interval a second all night — RMSSD-grade overnight HRV, for much sharper recovery and sleep, especially on **WHOOP 5.0/MG**.
> - 🔋 It uses more battery (continuous HR streaming), so it's **off by default** and entirely your call. On Android it needs background connection enabled.
> - 🔒 Honest and account-safe: standard HR characteristic — **no DTLS, no encryption circumvention, nothing that goes near your WHOOP account.**
> 
> Huge thanks to **@Extazian**, whose reverse-engineering — and the btsnoop isolation proving the R-R isn't WHOOP-exclusive — made this actionable.
> 
> ### Downloads
> - **macOS** (Apple Silicon + Intel): `NOOP-v2.12.0-macos.zip`
> - **iPhone** (sideload via AltStore/SideStore): `NOOP-v2.12.0-ios.ipa`
> - **Android**: `NOOP-v2.12.0-full.apk` · demo build `NOOP-v2.12.0-demo.apk`
> 
> Everything stays on your device — no account, no cloud, fully offline.

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/NoopApp/noop)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-13 ~ 2026-06-14）
> **活躍天數** 2 天 · **最新 commit** AltStore source: v2.12.0

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#132](https://github.com/NoopApp/noop/issues/132) | 🙏 Roadmap & help wanted — specific things we need (grab one `help wanted` `roadmap` | 2 | 2 |
> | [#281](https://github.com/NoopApp/noop/issues/281) | Sleep session Smart Merge, Manual addition & Deletion `enhancement` | 0 | 0 |
> | [#278](https://github.com/NoopApp/noop/issues/278) | WHOOP 5/MG (R22): flags accepted, but no deep data — R10/R11 `bug` | 0 | 7 |
> | [#276](https://github.com/NoopApp/noop/issues/276) | Steps and other data not syncing `bug` | 0 | 4 |
> | [#194](https://github.com/NoopApp/noop/issues/194) | Derive HR from the WHOOP 4.0 v25 PPG waveform (parity with t | 0 | 5 |

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
> 
>   
>   
>   
>   
>   
> 
>   ♥&nbsp;Support ·
>   ⬇&nbsp;Download ·
>   💬&nbsp;Community ·
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
> 2. **Buy some Bitcoin (BTC) or Ethereum (ETH)** — a suggested **$50+** genuinely keeps the project alive (it's a fraction of a year's WHOOP subscription). Anything is appreciated, but $50+ is what moves the needle.
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
> | **Insights** | Behavioral and correlational insights derived from your own series. |
> | **Sleep** | Sleep sessions with a hypnogram, stage breakdown, efficiency, resting HR, and HRV — computed by the on-device sleep stager. Browse back through **past nights**, not just last night. |
> | **Trends** | Long-range trends across recovery, strain, sleep, and biometrics. |
> | **Workouts** | Detected exercise sessions with strain and heart-rate detail. |
> | **Health** | Biometric overview (HR, HRV, SpO₂, skin temperature, respiratory rate, etc.). |
> | **Stress** | Day-level stress / autonomic load visualization. |
> | **Mind** | A quick **daily mood check-in** that correlates how you feel against your own recovery, sleep and HRV over time — so you can see what actually moves your mood. On-device and **non-clinical**: a self-reflection log, not a mental-health assessment. |
> | **Apple Health** | Browse and reconcile data imported from your Apple Health export. |
> | **Data Sources** | One-tap import of a WHOOP CSV export, an Apple Health export, or a **nutrition CSV** (Cronometer / MacroFactor), plus live-strap status. "Bring your history in once, then it's yours." |
> | **Notifications** | Configure local notifications and thresholds (`Strand/Data/NotificationSettingsStore.swift`). |
> | **Automations** | Turn the strap's physical inputs and live biometrics into Mac actions — all on-device (see below). |
> | **Coach** | An optional **AI Coach** you can ask about your data in plain language. It's the one feature that can ever use the network: off until you add your own key — Anthropic, OpenAI, or any OpenAI-compatible endpoint including a local/self-hosted model (Ollama, LM Studio) — and it sends only a short text summary of recent metrics plus your question, never raw streams or identifiers. With a local model the conversation never leaves your machine. Available on macOS, Android, and iOS. See [`docs/PRIVACY_SECURITY.md`](docs/PRIVACY_SECURITY.md). |
> | **Settings** | Profile, preferences, **step calibration** (tune the stride/step estimate to your own walking), unit choices, the in-app **What's new** changelog, and an opt-in **Experimental** section (WHOOP 5/MG protocol probes). On **iOS**, also **Export for Shortcuts** — a HealthKit-free path that hands your metrics to Apple Health via the Shortcuts app. |
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
> **Community:** questions, setup help, tips, and release news → **[r/NOOPApp](https://www.reddit.com/r/NOOPApp/)**.
> **Bug reports:** please use **[GitHub Issues](https://github.com/NoopApp/noop/issues)** — there's a template, and they're tracked, deduped and linked to fixes (include a strap log).
> **Contact:** [thenoopapp@gmail.com](mailto:thenoopapp@gmail.com)
> 
> ---
> 

## 延伸閱讀

相關概念：[[健康追蹤]] · [[數據隱私]] · [[藍牙技術]]

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
> const concepts = ["健康追蹤","數據隱私","藍牙技術"];
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
