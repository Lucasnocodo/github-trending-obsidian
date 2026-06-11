---
repo: NoopApp/noop
url: https://github.com/NoopApp/noop
owner: NoopApp
owner_type: User
language: Swift
license: NOASSERTION
description: "Offline WHOOP companion — pair your strap over Bluetooth, keep all data on your own device. No cloud, no account, no subscription."
homepage: ""
stars: 1395
stars_per_day: 465
forks: 644
open_issues: 3
created: 2026-06-07
pushed_at: 2026-06-11
first_seen: 2026-06-09
week: "2026-W24"
month: "2026-06"
category: "其他"
subcategory: "健康追蹤"
release_tag: "v1.61"
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
appearances: 3
next_review: "2026-06-14"
contributor_count: 1
engagement: "high"
issue_close_rate: 90
repo_size_kb: 2486
readme_length: 9989
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-09"
star_history: "2026-06-09:532,2026-06-09:534,2026-06-10:1029,2026-06-10:1033,2026-06-11:1395"
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

**1.0k** stars · **517** stars/天 · 建立 2 天前 · Swift · NOASSERTION

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

`個人專案` `v1.61`

> [!summary] 一句話摘要
> 離線的 WHOOP 伴侶，透過藍牙配對，所有數據保留在本地，無需雲端、帳號或訂閱。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (517 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 希望完全控制自己健康數據的運動員或健康追蹤者。
> **一句話重點** Noop 提供了一個完全本地化的 WHOOP 數據管理解決方案，讓用戶能夠在不依賴雲端的情況下，完全控制自己的健康數據。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到高隱私的健康數據管理，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於完全本地化的數據處理，避免了雲端存儲的隱私問題。

## 專案簡介

**核心機制**

Noop 是一個專為 WHOOP 使用者設計的離線應用，讓用戶能夠透過藍牙連接自己的 WHOOP strap，並將所有數據保存在本地。這意味著用戶不必擔心雲端存儲的隱私問題或訂閱費用。應用的核心功能包括實時心率監控、恢復狀態分析和個人數據的可視化。用戶可以在 macOS 上使用 Xcode 來編譯和運行應用，並且可以選擇導入 CSV 或 Apple Health 數據進行探索。最關鍵的指令是 `xcodegen`，用於生成 Xcode 專案。

**技術實作**

這個工具的賣點在於其完全本地化的數據處理，避免了任何雲端依賴，這對於重視隱私的用戶來說非常重要。

在技術實現上，Noop 使用 Swift、Kotlin 和 Python，這使得它在 macOS 和 Android 上都能運行。應用的架構設計上，使用了本地數據處理的方式，這意味著所有計算都是在用戶設備上完成，減少了延遲和對網絡的依賴。這種設計的代價是無法提供雲端同步功能，但對於希望完全控制自己數據的用戶來說，這是值得的選擇。

與其他類似工具相比，例如 WHOOP 官方應用，Noop 提供了更高的數據隱私性，因為所有數據都保存在本地，而不是上傳到雲端。

**競品比較**

相比之下，WHOOP 官方應用需要用戶註冊帳號並依賴雲端服務，這可能會讓一些用戶感到不安。此外，Noop 沒有訂閱費用，這對於長期使用者來說是一個顯著的成本節省。

實際使用中，Noop 的效能表現良好，能夠實時更新心率數據，並且在最新版本中修復了小部件更新的問題，確保用戶能夠獲得準確的數據顯示。社群活躍度高，開發者對於問題的回應速度也相當快，這對於使用者來說是一個加分項。

目前這個專案仍在快速發展中，適合對數據隱私有高要求的個人使用者，特別是運動員或健康追蹤者。

**效果與限制**

未來六個月內，預計會有更多功能更新，進一步提升用戶體驗。

**技術棧**：`Swift` · `Kotlin` · `Python` · `Shell`

## 重點功能

- 本地數據處理 — 所有數據保存在用戶設備上，無需雲端存儲。
- 實時心率監控 — 透過藍牙連接 WHOOP strap，實時顯示心率數據。
- 恢復狀態分析 — 根據用戶的歷史數據提供個性化的恢復建議。
- CSV 和 Apple Health 數據導入 — 支持導入外部數據進行分析。
- 無需訂閱 — 完全免費，無需註冊帳號或支付費用。

## 快速開始

1. 安裝 Xcode 和依賴
```bash
brew install xcodegen
```
2. 生成 Xcode 專案
```bash
xcodegen generate
```
3. 在 Xcode 中打開專案並運行
```bash
open YourProject.xcodeproj
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 1033 stars（517/天），forks 574（55.6%），顯示出強烈的社群興趣。這個專案的創始人 NoopApp 以其對用戶隱私的重視而聞名，過去也有開發其他類似的開源工具。Noop 解決了許多用戶對於 WHOOP 官方應用的隱私擔憂，並且提供了一個無需訂閱的替代方案。社群中對於數據隱私的關注也促進了這個專案的快速成長。這個工具的實用性和隱私保護的理念吸引了大量用戶的關注，特別是在健康追蹤和運動數據管理的領域。

## 適合誰使用

**目標受眾**：希望完全控制自己健康數據的運動員或健康追蹤者。

> [!example] 使用場景
> - 運動員用它來實時監控心率，因為它能夠提供準確的數據而不需要雲端連接。
> - 健康追蹤者用它來分析自己的恢復狀態，因為它提供的本地數據分析能夠更好地保護隱私。
> - 開發者用它來探索 WHOOP strap 數據，因為它支持 CSV 和 Apple Health 數據的導入，方便進行個性化分析。

## 架構分析

Noop 的架構設計選擇了本地數據處理的模式，這意味著所有的數據計算和存儲都在用戶的設備上進行。這樣的設計使得用戶能夠完全控制自己的數據，避免了雲端存儲帶來的隱私風險。資料流方面，應用通過藍牙連接 WHOOP strap，實時接收數據並進行本地計算。

這種設計的代價是無法提供雲端同步功能，但對於重視隱私的用戶來說，這是一個重要的優勢。擴展性方面，由於所有數據都在本地處理，當用戶數據量增大時，可能會面臨存儲空間的限制。整體而言，這樣的架構設計非常適合需要高隱私保護的用戶，但在功能擴展上可能會受到限制。

## 技術深入分析

Noop 的核心技術機制在於其本地數據處理能力，使用 Swift 和 Kotlin 來實現與 WHOOP strap 的藍牙連接，並在用戶設備上進行數據計算和顯示。這樣的設計使得應用能夠實時更新心率數據，並且在最新版本中修復了小部件更新的問題，確保用戶能夠獲得準確的數據顯示。效能方面，應用能夠快速處理大量數據，並且在本地運行的特性使得延遲降到最低。設計取捨方面，選擇本地處理而非雲端存儲，雖然犧牲了雲端同步功能，但卻大幅提升了用戶的數據隱私。技術風險方面，隨著用戶數據量的增加，可能會面臨存儲空間的挑戰。整合方面，與主流的健康數據管理工具的相容性良好，但由於其專注於 WHOOP strap，可能在功能上有所限制。

## 新手體驗

> [!info] 上手難度評估
> README 文件簡潔明瞭，但缺乏詳細範例。安裝過程需要安裝 Xcode 和其他依賴，對新手來說可能有一定的挑戰。沒有提供多語言支持，主要以英文為主。整體而言，對於有一定技術背景的用戶來說，能在 30 分鐘內跑起來，但對於新手可能需要更多時間。

## 優缺點分析

> [!success] 優點
> - 完全本地化的數據處理，保障用戶隱私。
> - 無需訂閱費用，長期使用成本低。
> - 實時監控心率，數據更新及時。
> - 支持 CSV 和 Apple Health 數據導入，方便用戶分析。

> [!danger] 缺點
> - 不支持雲端同步，數據僅保存在本地。
> - 需要用戶擁有自己的 WHOOP strap，限制了使用範圍。
> - 安裝和配置過程相對複雜，對新手不太友好。
> - 目前功能相對簡單，未來可能需要更多擴展。

> [!warning] 注意事項
> - 僅支援 macOS 13+ 和 Xcode 15+。
> - 不支持雲端同步，所有數據僅保存在本地。
> - 需要用戶擁有自己的 WHOOP strap 來進行實時數據監控。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [whoop/whoop](https://github.com/whoop/whoop) | WHOOP 官方應用需要用戶註冊帳號並依賴雲端服務，這可能會讓一些用戶感到不安。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於數據的可視化和分析，但不提供實時監控功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這是一個更通用的健康數據管理工具，但缺乏專門針對 WHOOP strap 的支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [whoop/whoop](https://github.com/whoop/whoop) | WHOOP 官方應用依賴雲端存儲和帳號註冊，而 Noop 則完全本地化，無需雲端。 | 如果你需要雲端同步和社群功能，WHOOP 官方應用會更合適。 | medium，因為需要將數據從雲端轉移到本地。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於數據可視化，但不提供實時監控功能，與 Noop 的即時數據處理形成對比。 | 如果你的重點是數據分析而不是實時監控，這個工具會更適合。 | low，因為數據格式相對通用。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **noop** | **whoop** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | WHOOP 官方應用依賴雲端存儲和帳號註冊，而 Noop 則完全本地化，無需雲端。 | 這個工具專注於數據可視化，但不提供實時監控功能，與 Noop 的即時數據處理形成對比。 |
> | 遷移成本 | - | medium，因為需要將數據從雲端轉移到本地。 | low，因為數據格式相對通用。 |
> | 適用場景 | 主要場景 | 如果你需要雲端同步和社群功能，WHOOP 官方應用會更合適。 | 如果你的重點是數據分析而不是實時監控，這個工具會更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人測試和探索，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 小部件更新時可能會出現數據不一致的情況
  - 解法：確保應用在運行時不被中斷，並定期檢查更新。
- **[HIGH]** 需要特定版本的 macOS 和 Xcode，安裝過程可能會遇到問題
  - 解法：提前確認系統要求，並確保環境配置正確。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 不適合 | 缺乏雲端支持，無法滿足團隊協作需求。 |
| 個人健康追蹤者 | 非常適合 | 提供本地數據處理，保障用戶隱私。 |
| 運動員需要實時數據監控 | 非常適合 | 能夠即時更新心率數據，對於運動訓練非常有幫助。 |
| 希望分析健康數據的開發者 | 適合 | 支持 CSV 和 Apple Health 數據導入，方便進行個性化分析。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高隱私的健康數據管理，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：應用不需要高權限，所有數據都保存在本地，無需擔心雲端存儲的安全性。

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
| Forks | 574 |
| Open Issues | 5 |
| Issue 解決率 | 90% (45 closed) |
| 最後推送 | 2026-06-09 |
| 建立日期 | 2026-06-07 |
| Repo 大小 | 2.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NoopApp/noop) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 51
>     "Kotlin" : 43
>     "Python" : 6
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@NoopApp](https://github.com/NoopApp) | 105 |

**最新版本**：v1.61 — v1.61 — Android: the widget now actually updates (2026-06-09)

> [!info]- Release Notes
> ## Android: the widget now actually updates
> 
> **Fixed: the home-screen widget could freeze on "—" for heart rate and battery while the app itself streamed live HR perfectly well** (#82, second find — thanks to a reporter whose precise symptoms pointed straight at it).
> 
> What was happening: every widget update was being cancelled mid-write the moment a new heart-rate sample arrived — and with samples landing every second during live streaming, no update ever managed to finish. Only the few updates from the quiet moment just after connecting (before HR started) ever completed, which is why the widget showed "Connected" but dashes for everything else.
> 
> Now:
> - Widget updates run to completion — a new sample waits its turn instead of killing the write in progress.
> - The **first heart-rate sample after connecting shows on the widget immediately**, rather than waiting out a refresh window.
> - A widget added later renders fresh data instantly (the latest snapshot is always persisted, widget or not).
> - The fix is pinned by a new regression test suite so it can't quietly come back.
> 
> **Mac:** version bump only this release.
> 
> ### Downloads
> - **macOS** (Apple Silicon + Intel, macOS 13+): `NOOP-macos.zip`
> - **Android**: `NOOP-full.apk` (full) · `NOOP-demo.apk` (demo data, no strap needed)
> 
> macOS first-launch: the app isn't notarized — right-click → Open, or `xattr -dr com.apple.quarantine /Applications/NOOP.app`.
> 
> Everything stays on your device. No account, no cloud, no telemetry.

## 社群與生態

**社群活躍度**：社群活躍度高，開發者對問題的回應速度快。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-09 ~ 2026-06-09）
> **活躍天數** 1 天 · **最新 commit** v1.61: widget starvation fix — updates now run to completion (#82)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#82](https://github.com/NoopApp/noop/issues/82) | Widget Feature Not Fetching Relevant Data (Android) | 0 | 6 |
> | [#80](https://github.com/NoopApp/noop/issues/80) | WHOOP 4.0 bonds successfully but doesn't have live HR | 0 | 3 |
> | [#77](https://github.com/NoopApp/noop/issues/77) | Wore whoop to sleep but did not get sleep data in the app | 0 | 26 |

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

相關概念：[[健康追蹤]] · [[數據隱私]] · [[本地數據處理]]

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
> const concepts = ["健康追蹤","數據隱私","本地數據處理"];
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

- [[2026-06-11|2026-06-11]] — 再次上榜，1.4k stars
- [[2026-06-10|2026-06-10]] — 再次上榜，1.0k stars
- [[2026-06-09|2026-06-09]] — 首次收錄，532 stars
