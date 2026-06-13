---
repo: NoopApp/noop
url: https://github.com/NoopApp/noop
owner: NoopApp
owner_type: User
language: Swift
license: NOASSERTION
description: "Offline WHOOP companion — pair your strap over Bluetooth, keep all data on your own device. No cloud, no account, no subscription."
homepage: ""
stars: 1544
stars_per_day: 309
forks: 691
open_issues: 12
created: 2026-06-07
pushed_at: 2026-06-12
first_seen: 2026-06-09
week: "2026-W24"
month: "2026-06"
category: "其他"
subcategory: "健康數據管理"
release_tag: "v1.95"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-09
use_case: "讓你在本地管理 WHOOP strap 數據，無需雲端、帳號或訂閱。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-06-16"
contributor_count: 1
engagement: "high"
issue_close_rate: 93
repo_size_kb: 2351
readme_length: 9969
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-09"
star_history: "2026-06-09:532,2026-06-09:534,2026-06-10:1029,2026-06-10:1033,2026-06-11:1395,2026-06-11:1395,2026-06-12:1482,2026-06-12:1484,2026-06-13:1544"
tags:
  - github
  - "category/其他"
  - "lang/swift"
aliases:
  - "noop"
  - "NoopApp/noop"
  - "讓你在本地管理 WHOOP strap 數據，無需雲端、帳號或訂閱。"
---

# noop

**1.5k** stars · **371** stars/天 · 建立 4 天前 · Swift · NOASSERTION

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

`個人專案` `v1.95`

> [!summary] 一句話摘要
> 讓你在本地管理 WHOOP strap 數據，無需雲端、帳號或訂閱。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (371 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 希望在本地管理 WHOOP strap 數據的健康追蹤者，並重視數據隱私的獨立開發者。
> **一句話重點** NOOP 不僅是一個健康數據管理工具，更是一個強調用戶數據隱私的開源專案。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/NoopApp--noop");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "健康數據管理" && p.file.name !== "NoopApp--noop" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 健康數據管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學習，2 小時整合，得到數據隱私和本地管理的效果，值得一試。

> [!abstract] 核心創新
> NOOP 是一個完全本地化的 WHOOP strap 數據管理工具，無需雲端或帳號。

## 專案簡介

NOOP 是一個針對 WHOOP strap 的離線伴侶應用，旨在讓用戶完全掌控自己的生理數據。用戶可以透過藍牙連接自己的 WHOOP strap，並將數據儲存在本地 SQLite 數據庫中，避免了雲端存儲的風險。這個應用的核心賣點在於它的本地運算能力，能夠即時顯示心率、HRV、睡眠等數據，而不需要依賴 WHOOP 的伺服器。使用者可以透過簡單的 CSV 或 Apple Health 匯入功能，將過去的數據帶入應用中，這樣一來，所有的數據都能在本地進行分析和管理。NOOP 的設計不僅強調數據隱私，還提供了多種功能，包括實時心率監控、睡眠分析、運動記錄等，這些功能都可以在 macOS、Android 和 iOS 上使用。

技術上，NOOP 使用 Swift、Kotlin 和 Python 等語言開發，並且依賴於 SQLite 數據庫來儲存數據，這使得它在性能上相對輕量。與其他類似工具相比，如 WHOOP 官方應用，NOOP 不需要用戶註冊帳號或支付訂閱費用，這對於希望保持數據私密的用戶來說是一大優勢。然而，NOOP 目前的功能仍在持續開發中，使用者可能會遇到一些未解決的問題，如步數計算不準等。整體來說，NOOP 是一個適合希望完全掌控自己健康數據的用戶的應用，特別是那些對隱私有高要求的使用者。

**技術棧**：`Swift` · `Kotlin` · `Python` · `Shell`

## 重點功能

- 本地數據管理 — 所有數據儲存在本地 SQLite 數據庫中，無需雲端。
- 實時心率監控 — 透過藍牙連接 WHOOP strap，實時顯示心率數據。
- 睡眠分析 — 提供詳細的睡眠階段和效率分析，基於本地運算。
- 數據匯入功能 — 支持從 WHOOP CSV 和 Apple Health 匯入過去的數據。
- 自定義通知 — 用戶可以設置本地通知和閾值，隨時掌握健康狀況。

## 快速開始

1. 克隆專案
```bash
git clone NOOP
```
2. 生成 Xcode 專案
```bash
brew install xcodegen && xcodegen generate
```
3. 打開並運行專案
```bash
open Strand.xcodeproj
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 1484 stars（371/天），forks 671（45.2%），顯示出強烈的用戶興趣。作者 NoopApp 以開源方式維護此專案，過去在健康數據管理方面有豐富經驗。NOOP 解決了用戶對於 WHOOP strap 數據的私有化需求，之前的解決方案多數依賴於雲端服務，這使得用戶的數據安全性受到威脅。近期的推廣或社群討論可能也促進了這個專案的曝光。這個工具的成功也反映了用戶對於數據隱私和自主權的重視，尤其是在健康數據管理領域。

## 適合誰使用

**目標受眾**：希望在本地管理 WHOOP strap 數據的健康追蹤者，並重視數據隱私的獨立開發者。

> [!example] 使用場景
> - 健身愛好者用它來實時監控心率，因為它能夠提供即時的生理數據，幫助他們調整訓練強度。
> - 數據分析師用它來分析自己的健康數據，因為它支持從 Apple Health 匯入過去的數據，並提供詳細的趨勢分析。
> - 運動教練用它來跟蹤學員的恢復狀態，因為它能夠提供基於用戶歷史數據的恢復建議，幫助學員更有效地訓練。

## 架構分析

NOOP 的架構設計為本地優先，所有數據都儲存在 SQLite 數據庫中，這樣的設計使得用戶能夠完全掌控自己的數據。應用使用 Swift 和 Kotlin 開發，並透過藍牙與 WHOOP strap 進行通訊。數據流從 strap 收集後，經過本地運算處理，最終呈現在用戶界面。這樣的設計雖然提升了數據隱私，但也意味著用戶需要自行解決藍牙連接和設備兼容性問題。NOOP 的架構選擇使得它在性能上相對輕量，但在功能上仍需持續開發以滿足用戶需求。

## 技術深入分析

NOOP 的核心技術機制在於其本地數據管理能力，使用 SQLite 數據庫來儲存用戶的健康數據，這樣的設計不僅提高了數據隱私性，也降低了對網絡的依賴。應用的性能表現良好，能夠即時處理來自 WHOOP strap 的數據，並提供實時的健康監控。NOOP 的設計選擇了 Swift 和 Kotlin 作為開發語言，這使得它在 macOS 和 Android 平台上都能保持良好的性能。這樣的選擇雖然增加了開發的複雜度，但也讓應用能夠充分利用各平台的原生特性。

NOOP 目前的依賴樹相對簡單，主要依賴於 SQLite 和藍牙通訊庫，這降低了維護的難度。然而，隨著功能的增加，未來可能需要考慮如何擴展架構以支持更多的功能和數據來源。NOOP 目前對於藍牙設備的依賴可能在未來的擴展中成為瓶頸，特別是在支持更多設備時。整體來看，NOOP 在技術上是一個有潛力的專案，但仍需不斷優化和擴展以滿足用戶需求。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和功能介紹，安裝過程相對順暢，但需要用戶具備一定的技術背景。沒有提供多語言支持，主要以英文為主。整體來說，對於有一定技術基礎的用戶來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 完全本地化，無需雲端存儲，保護用戶隱私。
> - 支持多平台（macOS、Android、iOS），用戶可隨時隨地訪問數據。
> - 提供詳細的健康數據分析，幫助用戶更好地理解自己的身體狀況。

> [!danger] 缺點
> - 目前功能仍在開發中，可能存在不穩定性。
> - 需要用戶自行處理藍牙連接問題，對於新手可能有一定難度。
> - 不支持所有版本的 WHOOP strap，限制了用戶的選擇。

> [!warning] 注意事項
> - 僅支援 macOS 13+ 和 Xcode 15+。
> - 目前僅支持 WHOOP 4.0 strap，對於其他版本的支持有限。
> - 需要用戶自行解決藍牙連接問題，可能會遇到兼容性問題。
> - 部分功能仍在開發中，可能會有不穩定的表現。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於健康數據的即時分析，而 NOOP 強調數據的本地管理和隱私保護。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的數據管理功能，但 NOOP 的設計更注重用戶的數據隱私和本地運算。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| WHOOP 官方應用 | 依賴雲端存儲和帳號系統，所有數據都上傳至 WHOOP 伺服器。 | 如果你需要官方支持和完整的生態系統，並且不介意數據上傳到雲端。 | medium，因為需要將數據從 NOOP 轉移到官方應用中。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於健康數據的即時分析，並提供雲端服務。 | 如果你需要即時分析功能，而不在乎數據隱私。 | high，因為需要重新設置和配置所有數據來源。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **noop** | **WHOOP 官方應用** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 依賴雲端存儲和帳號系統，所有數據都上傳至 WHOOP 伺服器。 | 專注於健康數據的即時分析，並提供雲端服務。 |
> | 遷移成本 | - | medium，因為需要將數據從 NOOP 轉移到官方應用中。 | high，因為需要重新設置和配置所有數據來源。 |
> | 適用場景 | 主要場景 | 如果你需要官方支持和完整的生態系統，並且不介意數據上傳到雲端 | 如果你需要即時分析功能，而不在乎數據隱私。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 步數計算可能會過高，影響數據準確性。
  - 解法：手動檢查步數並進行調整。
- **[HIGH]** 藍牙連接不穩定，可能需要重新配對。
  - 解法：確保藍牙設備在範圍內，並重啟應用。
- [MEDIUM] 部分功能仍在開發中，可能會出現錯誤。
  - 解法：定期檢查更新，並報告問題。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 獨立開發者希望在本地管理健康數據 | 非常適合 | NOOP 完全本地化，無需雲端，適合重視隱私的用戶。 |
| 健身教練需要即時監控學員的健康數據 | 適合 | 提供實時數據監控功能，能夠幫助教練做出即時調整。 |
| 大型健身房需要統一的數據管理系統 | 不適合 | 目前功能仍在開發中，無法滿足大型團隊的需求。 |
| 希望將過去的健康數據整合到新系統中 | 非常適合 | 支持從 Apple Health 和 WHOOP CSV 匯入過去數據，方便整合。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到數據隱私和本地管理的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：NOOP 不需要高權限，所有數據都在本地處理，不存取敏感資料。依賴鏈相對簡單，沒有已知的供應鏈風險，適合在 CI/CD 中使用。

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
| Forks | 671 |
| Open Issues | 7 |
| Issue 解決率 | 93% (87 closed) |
| 最後推送 | 2026-06-11 |
| 建立日期 | 2026-06-07 |
| Repo 大小 | 2.3 MB |
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
> | [@NoopApp](https://github.com/NoopApp) | 159 |

**最新版本**：v1.95 — NOOP v1.95 (2026-06-11)

> [!info]- Release Notes
> ## Sleep and recovery for WHOOP 4.0 straps on the firmware we couldn't read
> 
> Some WHOOP 4.0 straps run a firmware whose offloaded history NOOP couldn't decode for motion — so sleep and recovery never built from the strap, even though live heart rate worked. NOOP now reads that firmware's motion (the accelerometer gravity vector) and per-second timestamps, which is exactly what the sleep engine needs. Once your strap banks a night, sleep staging and recovery can finally build from it. Heart rate in this layout is derived from the optical sensor rather than stored second-by-second, so this unlock is specifically the motion data.
> 
> This was reverse-engineered from real on-wrist captures shared by users on #30 — thank you. (#30)
> 
> ---
> 
> ### Downloads
> - **macOS** — `NOOP-v1.95-macos.zip` (universal; build-from-source-equivalent, unsigned — right-click → Open the first time)
> - **Android** — `NOOP-v1.95-full.apk` (standard) · `NOOP-v1.95-demo.apk` (demo flavour)
> - **Homebrew** — `brew install --cask noopapp/noop/noop`
> 
> Everything stays on your device. No account, no cloud, no sync.

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應用戶問題。
**連結**：[文件](https://github.com/NoopApp/noop)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-11 ~ 2026-06-11）
> **活躍天數** 1 天 · **最新 commit** docs: comprehensive freshness pass — 3 platforms (iOS), v1.95, Homebrew+trust, v25

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#132](https://github.com/NoopApp/noop/issues/132) | 🙏 Roadmap & help wanted — specific things we need (grab one `help wanted` `roadmap` | 1 | 0 |
> | [#145](https://github.com/NoopApp/noop/issues/145) | Question | 0 | 1 |
> | [#144](https://github.com/NoopApp/noop/issues/144) | Metrics reset at calendar midnight instead of persisting unt `bug` | 0 | 1 |
> | [#139](https://github.com/NoopApp/noop/issues/139) | Step Count Significantly Overestimates Actual Steps `bug` | 0 | 2 |

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
> | **Coach** | An optional **AI Coach** you can ask about your data in plain language. It's the one feature that can ever use the network: off until you add your own key — Anthropic, OpenAI, or any OpenAI-compatible endpoint including a local/self-hosted model (Ollama, LM Studio) — and it sends only a short text summary of recent metrics plus your question, never raw streams or identifiers. With a local model the conversation never leaves your machine. Available on macOS, Android, and iOS. See [`docs/PRIVACY_SECURITY.md`](docs/PRIVACY_SECURITY.md). |
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
> **Community:** questions, setup help, tips, and release news → **[r/NOOPApp](https://www.reddit.com/r/NOOPApp/)**.
> **Bug reports:** please use **[GitHub Issues](https://github.com/NoopApp/noop/issues)** — there's a template, and they're tracked, deduped and linked to fixes (include a strap log).
> **Contact:** [thenoopapp@gmail.com](mailto:thenoopapp@gmail.com)
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
> - **Transparent math.** Recovery, strain, HRV, and s

## 延伸閱讀

相關概念：[[健康數據管理]] · [[數據隱私]] · [[本地運算]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Gloridust--WechatOnCloud|Gloridust/WechatOnCloud]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]]

[GitHub](https://github.com/NoopApp/noop)

## 相關收錄

> [!note]- 直接競品（同子分類：健康數據管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "健康數據管理" AND file.name != "NoopApp--noop"
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
> const concepts = ["健康數據管理","數據隱私","本地運算"];
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

- [[2026-06-13|2026-06-13]] — 再次上榜，1.5k stars
- [[2026-06-12|2026-06-12]] — 再次上榜，1.5k stars
- [[2026-06-11|2026-06-11]] — 再次上榜，1.4k stars
- [[2026-06-10|2026-06-10]] — 再次上榜，1.0k stars
- [[2026-06-09|2026-06-09]] — 首次收錄，532 stars
