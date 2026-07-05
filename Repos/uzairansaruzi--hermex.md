---
repo: uzairansaruzi/hermex
url: https://github.com/uzairansaruzi/hermex
owner: uzairansaruzi
owner_type: User
language: Swift
license: MIT
description: "Native iPhone app for your Hermes agent"
homepage: "https://hermexapp.com/"
stars: 562
stars_per_day: 281
forks: 56
open_issues: 33
created: 2026-07-02
pushed_at: 2026-07-05
first_seen: 2026-07-04
week: "2026-W27"
month: "2026-07"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-04
use_case: "讓你從 iPhone 控制自己的 Hermes AI 代理，無需中介。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-08"
contributor_count: 2
engagement: "low"
issue_close_rate: 11
repo_size_kb: 10300
readme_length: 7642
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-04"
star_history: "2026-07-04:455,2026-07-05:562"
tags:
  - github
  - "category/開發工具"
  - "lang/swift"
  - "topic/hermes"
  - "topic/hermes_agent"
  - "topic/hermex"
  - "topic/ios"
  - "topic/llm"
aliases:
  - "hermex"
  - "uzairansaruzi/hermex"
  - "讓你從 iPhone 控制自己的 Hermes AI 代理，無需中介。"
---

# hermex

**455** stars · **455** stars/天 · 建立 1 天前 · Swift · MIT

```dataviewjs
const me = dv.page("Repos/uzairansaruzi--hermex");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`hermes` `hermes-agent` `hermex` `ios` `llm` `self-hosted` `swift` `swiftui`

> [!summary] 一句話摘要
> 讓你從 iPhone 控制自己的 Hermes AI 代理，無需中介。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (455 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要在 iPhone 上控制自我托管 Hermes 代理的獨立開發者和 AI 愛好者。
> **一句話重點** Hermex 讓用戶能夠在完全控制的環境中使用 AI 代理，這在當前數據隱私日益重要的時代尤為關鍵。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/uzairansaruzi--hermex");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "uzairansaruzi--hermex" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到高私密性的 AI 代理控制，值得投入。

> [!abstract] 核心創新
> Hermex 提供了一個完全私密的 iPhone 應用來控制自我托管的 AI 代理，無需中介。

## 專案簡介

Hermex 是一款原生 SwiftUI iPhone 應用程式，專為控制自我托管的 Hermes 代理而設計。用戶可以透過這款應用程式與自己的 AI 代理進行即時對話，並在過程中調整模型參數、工作區和配置文件。這樣的設計確保了用戶的數據和計算資源完全掌握在自己手中，而不是依賴第三方服務。關鍵指令包括連接到伺服器的 URL 和密碼，這樣用戶便能快速進入應用。Hermex 的架構選擇了 SwiftUI，這不僅提供了流暢的用戶體驗，還能充分利用 iOS 18+ 的新特性。

這個應用程式的優勢在於其完全的私密性，沒有任何追蹤或分析，所有通訊僅限於用戶的伺服器。與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Hermex 的優勢在於其原生應用的性能和安全性，並且不需要依賴雲端服務。實際使用中，Hermex 能夠處理多個會話，並支持即時響應流，這使得用戶能夠隨時掌控 AI 的運行狀態。雖然它的功能強大，但仍需用戶自行管理伺服器的安全性和可達性，這可能對某些用戶來說是一個挑戰。整體而言，Hermex 是一個穩定的選擇，適合需要高私密性和控制權的用戶，尤其是那些已經在使用 Hermes 的開發者和愛好者。

**技術棧**：`Swift 5` · `Python 3.11` · `Ruby` · `Shell`

## 重點功能

- 即時對話 — 與 AI 代理進行即時對話，支持模型選擇和參數調整。
- 會話管理 — 瀏覽和恢復所有會話，支持離線閱讀。
- 任務管理 — 從手機查看和編輯代理的排程任務。
- 技能瀏覽 — 瀏覽和搜索代理的安裝技能。
- 工作區瀏覽器 — 從應用中探索伺服器的檔案系統。
- 記憶和分析 — 查看代理的記憶和使用情況面板。

## 快速開始

1. 運行伺服器
```bash
安裝並啟動 hermes-webui，設置 HERMES_WEBUI_PASSWORD
```
2. 確保伺服器可達
```bash
使用 Cloudflare Tunnel 或反向代理進行 HTTPS 設置
```
3. 下載 Hermex 並連接
```bash
輸入伺服器 URL 和密碼進入應用
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 455 stars（455/天），forks 52（11.4%），這顯示出強烈的初期興趣。作者 uzairansaruzi 過去有開發其他開源項目的經驗，這次專注於提供一個無中介的控制界面，解決了許多用戶對數據隱私的擔憂。此專案的出現正好滿足了對於自我托管 AI 代理的需求，並且在社群中引起了討論。技術上，隨著 SwiftUI 的普及，這個工具的可行性大大提高。高達 11.4% 的 forks/stars 比率顯示出許多人在實際修改和使用這個專案，這是相對健康的社群參與指標。

## 適合誰使用

**目標受眾**：需要在 iPhone 上控制自我托管 Hermes 代理的獨立開發者和 AI 愛好者。

> [!example] 使用場景
> - 獨立開發者用它來從 iPhone 控制自我托管的 Hermes 代理，因為這樣可以確保數據隱私和完全控制。
> - AI 研究者用它來即時調整和監控 AI 代理的運行狀態，因為能夠隨時查看和管理會話提高了工作效率。
> - 系統管理員用它來管理伺服器上的排程任務，因為透過手機即可輕鬆編輯和查看 cron 工作，提升了管理便利性。

## 架構分析

Hermex 的架構基於 SwiftUI，這使得它能夠提供流暢的用戶體驗。應用程式與自我托管的 hermes-webui 伺服器進行通訊，所有數據處理和計算都在用戶的伺服器上進行，這樣的設計確保了數據的私密性和安全性。資料流從應用發送請求到伺服器，伺服器回傳結果，並且支持即時響應流。這種設計的代價是用戶需要自行管理伺服器的安全性，並確保其可達性。擴展性方面，伺服器的性能和可用性會直接影響應用的使用體驗，特別是在高負載情況下。

## 技術深入分析

Hermex 使用 SwiftUI 作為前端框架，這使得應用能夠充分利用 iOS 的新特性，提供流暢的用戶體驗。它與 hermes-webui 伺服器之間的通訊採用 RESTful API，這樣的設計簡化了與伺服器的交互，並支持即時響應流。效能方面，Hermex 能夠處理多個同時會話，並且在伺服器端的計算負擔不會影響到用戶的體驗。設計上，選擇 Swift 使得應用能夠在 iOS 環境中運行得更為高效，但這也限制了其跨平台的能力。技術風險方面，伺服器的可用性和安全性是主要考量，因為用戶需要自行管理這些因素。整合方面，Hermex 可以與現有的 CI/CD 流程結合，特別是在開發和測試階段，這使得開發者能夠快速迭代和部署。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用指引，安裝過程相對順暢，但對於不熟悉自我托管的用戶可能會有一定的挑戰。文件中有詳細的故障排除指南，幫助用戶解決連接問題。整體而言，花 30 分鐘應該能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 完全私密，無第三方追蹤
> - 原生應用性能，流暢的用戶體驗
> - 支持即時對話和多會話管理

> [!danger] 缺點
> - 需要用戶自行管理伺服器
> - 初始設置可能對新手有挑戰
> - 僅支援 iOS 18 以上版本

> [!warning] 注意事項
> - 僅支援 iOS 18 以上版本
> - 需要用戶自行管理伺服器的安全性和可達性
> - 對於不熟悉自我托管的用戶來說，初始設置可能有一定難度

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 代理控制功能，但缺乏 Hermex 的原生應用性能和數據隱私保障。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也支持自我托管，但使用的技術棧和用戶體驗不如 Hermex 直觀和流暢。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Python 實作，提供類似的功能，但缺乏 Hermex 的原生應用性能。 | 如果你的團隊已經在使用 Python 並希望快速集成，這可能是更好的選擇。 | medium，因為需要適應不同的 API 和功能設計。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 基於 Web 的解決方案，與 Hermex 的原生應用相比，性能較差。 | 如果你的用戶群體主要使用桌面環境，這可能更合適。 | high，因為需要重新設計用戶界面和交互方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **hermex** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Python 實作，提供類似的功能，但缺乏 Hermex 的原生應用性能。 | 基於 Web 的解決方案，與 Hermex 的原生應用相比，性能較差。 |
> | 遷移成本 | - | medium，因為需要適應不同的 API 和功能設計。 | high，因為需要重新設計用戶界面和交互方式。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Python 並希望快速集成，這可能 | 如果你的用戶群體主要使用桌面環境，這可能更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和開發，但不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 伺服器未運行時應用無法啟動
  - 解法：確保伺服器已啟動並運行
- [MEDIUM] 連接失敗時未提供明確的錯誤信息
  - 解法：檢查伺服器 URL 和密碼是否正確
- [MEDIUM] 在某些網絡環境下可能無法連接
  - 解法：使用 Tailscale 或其他 VPN 服務來確保連接

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要控制自我托管的 AI 代理 | 非常適合 | Hermex 提供了強大的控制和私密性，適合小型團隊使用。 |
| 大型企業需要穩定的 AI 代理管理工具 | 不適合 | 目前仍處於 alpha 階段，穩定性不足。 |
| 個人開發者希望在移動設備上管理 AI 代理 | 適合 | Hermex 提供了良好的移動端體驗，適合個人使用。 |
| 需要快速部署的商業應用 | 普通 | 雖然功能強大，但仍需自行管理伺服器，可能影響部署速度。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高私密性的 AI 代理控制，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Hermex 本身不需要高權限，並且不存取敏感資料。用戶需自行確保伺服器的安全性，並注意依賴鏈的信任程度。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/uzairansaruzi--hermex");
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
> const me = dv.page("Repos/uzairansaruzi--hermex");
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
| Forks | 52 |
| Open Issues | 32 |
| Issue 解決率 | 11% (4 closed) |
| 最後推送 | 2026-07-04 |
| 建立日期 | 2026-07-02 |
| 官方網站 | [Link](https://hermexapp.com/) |
| Repo 大小 | 10.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/uzairansaruzi/hermex) |
| Topics | `hermes` `hermes-agent` `hermex` `ios` `llm` `self-hosted` `swift` `swiftui` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 98
>     "Python" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@uzairansaruzi](https://github.com/uzairansaruzi) | 9 |
> | [@moosnelly](https://github.com/moosnelly) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，開發者積極回應問題
**連結**：[文件](https://hermexapp.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-02 ~ 2026-07-03）
> **活躍天數** 2 天 · **最新 commit** feat(skills): toggle skill enabled state (#31)

## README 摘錄

> [!info]- 展開查看原文 README
> # Hermex
> 
> **Control your self-hosted [Hermes](https://github.com/nesquena/hermes-webui) agent from your iPhone.**
> 
> Your server. Your iPhone. No middleman.
> 
> [](https://apps.apple.com/app/hermex/id6767006319)
> [](https://swift.org)
> [](LICENSE)
> [](https://x.com/uzairansar)
> [](https://buymeacoffee.com/callmeuzi)
> 
>   
> 
> [Website](https://hermexapp.com) · [App Store](https://apps.apple.com/app/hermex/id6767006319) · [Report a bug](https://github.com/uzairansaruzi/hermex/issues) · [Contributing](CONTRIBUTING.md)
> 
> Hermex is a native SwiftUI iPhone app for driving a self-hosted [hermes-webui](https://github.com/nesquena/hermes-webui) server — a mobile cockpit for an AI agent that lives on a machine **you** control. The phone is the control plane, not the compute plane: the agent, its tools, and your data stay on your own hardware.
> 
> - **Free.** No subscriptions, no in-app purchases.
> - **Private.** No analytics, no tracking, no third-party relay — the app talks only to your server.
> - **Native.** Real SwiftUI, built for iOS 18+, not a web wrapper.
> 
> ## Features
> 
> - **Chat with your agent** — send messages with model, reasoning-effort, workspace, and profile options; attach files and images; watch responses stream in real time with thinking and tool-call detail.
> - **Steer or stop a run** mid-flight.
> - **Sessions** — browse, search, and resume every conversation on your server; cached sessions stay readable offline.
> - **Pick your models** — switch between any model or provider your server is configured for, with recents and favorites.
> - **Profiles & projects** — switch agent profiles and organize sessions into projects.
> - **Tasks** — view and edit your agent's scheduled cron jobs from your phone.
> - **Skills** — browse and search the agent's installed skills.
> - **Workspace browser** — explore your server's file system from the app.
> - **Memory & Insights** — read-only panels for agent memory and usage analytics.
> 
>   
>     Stream responses in real time
>     Manage scheduled tasks
>     Browse agent skills
>   
> 
> More screenshots at [hermexapp.com](https://hermexapp.com).
> 
> ## Getting started
> 
> Hermex is a client only — it does not ship with, host, or provision a backend. You bring your own [hermes-webui](https://github.com/nesquena/hermes-webui) server (a third-party, MIT-licensed open-source project) running on a machine you control. Setup takes about 15 minutes:
> 
> 1. **Run the server.** Install and start `hermes-webui` on macOS, Linux, or Windows/WSL2 (Python 3.11+). Set `HERMES_WEBUI_PASSWORD`.
> 2. **Make it reachable from your phone** (see options below).
> 3. **Connect.** [Download Hermex](https://apps.apple.com/app/hermex/id6767006319), enter your server URL (e.g. `https://hermes.yourdomain.com`) and password, and you're in.
> 
> Self-hosting the server, securing it, and keeping it reachable are your responsibility.
> 
> ### Making the server reachable
> 
> - **HTTPS via a tunnel or reverse proxy (recommended).** Expose the server through Cloudflare Tunnel or any reverse proxy that terminates real TLS at a hostname you own. Real HTTPS keeps iOS App Transport Security happy with no exceptions. On a publicly reachable hostname the password is your only app-level defense — set a strong one.
> - **Tailscale.** Run the server bound to all interfaces with a password, install Tailscale on both the server and the iPhone, and connect to `http://:8787`. The app allows plain HTTP only for Tailscale's `100.64.0.0/10` device range.
> - **Simulator-only local testing** can use `http://localhost:8787` when the server runs on the same Mac.
> 
> ### Troubleshooting the connection
> 
> If connection testing fails, check these first:
> 
> 1. The machine hosting `hermes-webui` is awake.
> 2. `hermes-webui` is running and serving `/health` (`curl https:///health`).
> 3. The tunnel, reverse proxy, or Tailscale route is connected.
> 4. The server URL and password are correct.
> 
> ## Building from source
> 
> Prefer the [App Store build](https://apps.apple.com/app/hermex/id6767006319) unless you're developing. To build yourself you need Xcode 26 or newer (iOS 18 SDK) and an iPhone or simulator on iOS 18+.
> 
> Clone the repo, open `HermesMobile.xcodeproj`, and run the `HermesMobile` scheme on an iPhone simulator (the Xcode target is `HermesMobile`; the app's display name is `Hermex`). Dependencies are resolved automatically via Swift Package Manager.
> 
> From the command line:
> 
> ```zsh
> xcodebuild -project HermesMobile.xcodeproj -scheme HermesMobile -destination 'platform=iOS Simulator,name=iPhone 17' build
> ```
> 
> ```zsh
> xcodebuild test -project HermesMobile.xcodeproj -scheme HermesMobile -destination 'platform=iOS Simulator,name=iPhone 17'
> ```
> 
> If that simulator is not installed, list available devices and choose a nearby iPhone simulator:
> 
> ```zsh
> xcrun simctl list devices available
> ```
> 
> Local validation defaults for XcodeBuildMCP users live in `.xcodebuildmcp/config.yaml`; the standard post-change flow is in [`DEVELOPMENT.md`](DEVELOPMENT.md).
> 
> ## Server compatibility
> 
> The app is developed and tested against the `hermes-webui` commit pinned in [`UPSTREAM_TESTED_SHA`](UPSTREAM_TESTED_SHA). Upstream does not yet guarantee API stability (its README declares version skew unsupported pending their stable-API work), so newer or older server versions may break individual features — please include your server version in bug reports. The app decodes tolerantly (unknown fields never crash it) and endpoint shapes are verified against upstream source, never invented; see [`CONTRACT_TESTS.md`](CONTRACT_TESTS.md) for the contract-testing approach.
> 
> ## Documentation map
> 
> - [`PROJECT_SPEC.md`](PROJECT_SPEC.md): source of truth for product scope, API behavior, dependencies, and architecture decisions.
> - [`PROJECT_INTENT.md`](PROJECT_INTENT.md): short orientation; useful for product tradeoffs, not implementation details.
> - [`DEVELOPMENT.md`](DEVELOPMENT.md): local development workflow, server setup notes, and the maintainer release runbook.
> - [`TESTFLIGHT.md`](TESTFLIGHT.md): maintainer-only TestFlight/App Store Connect operations.
> - [`CONTRACT_TESTS.md`](CONTRACT_TESTS.md): upstream contract-test readiness and the pin-advance policy.
> - [`SECURITY.md`](SECURITY.md): how to report a vulnerability.
> - [`docs/agents/`](docs/agents): repo-local agent workflow conventions (issues, triage labels, domain notes).
> - [GitHub Issues](https://github.com/uzairansaruzi/hermex/issues): source of truth for active bugs, polish notes, and feature requests.
> 
> ## Contributing
> 
> Contributions are welcome — see [`CONTRIBUTING.md`](CONTRIBUTING.md) for how to pick up work and open a PR, [`AGENTS.md`](AGENTS.md) for the working agreement coding agents follow in this repo, and the [Code of Conduct](CODE_OF_CONDUCT.md). The short version:
> 
> - Do not invent API endpoints or JSON shapes; verify against the upstream server source or a running server.
> - Every `Codable` model decodes tolerantly — never crash on unknown fields.
> - Add no third-party dependencies beyond the locked list in `PROJECT_SPEC.md` without explicit approval.
> - Do not modify the upstream `hermes-webui` server from this repo.
> 
> ## Support the project
> 
> Hermex is free and built in the open. If it's useful to you:
> 
> - ⭐ **Star this repo** — it helps others find the project.
> - 🐦 **Follow [@uzairansar on X](https://x.com/uzairansar)** for updates and dev logs.
> - ☕ **[Buy me a coffee](https://buymeacoffee.com/callmeuzi)** to support development.
> 
> ## License
> 
> MIT — see [LICENSE](LICENSE).
> 
> Hermex is an independent client and is not affiliated with the upstream [hermes-webui](https://github.com/nesquena/hermes-webui) project. Apple, the Apple logo, and App Store are trademarks of Apple Inc.

## 延伸閱讀

相關概念：[[自動化]] · [[CLI/TUI]] · [[微服務]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]] · [[EEliberto--IPA-Download|EEliberto/IPA-Download]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlexandrosGounis--pdfx|AlexandrosGounis/pdfx]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]]

[GitHub](https://github.com/uzairansaruzi/hermex) · [官方網站](https://hermexapp.com/)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "uzairansaruzi--hermex"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "uzairansaruzi--hermex"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "uzairansaruzi--hermex" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "uzairansaruzi--hermex"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CLI/TUI","微服務"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "uzairansaruzi--hermex" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/uzairansaruzi--hermex");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "uzairansaruzi--hermex" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "uzairansaruzi" AND file.name != "uzairansaruzi--hermex"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/uzairansaruzi--hermex");
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
> const me = dv.page("Repos/uzairansaruzi--hermex");
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
> const me = dv.page("Repos/uzairansaruzi--hermex");
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
> const me = dv.page("Repos/uzairansaruzi--hermex");
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
> const me = dv.page("Repos/uzairansaruzi--hermex");
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

> **2026-07-04** — 首次收錄
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

- [[2026-07-05|2026-07-05]] — 再次上榜，562 stars
- [[2026-07-04|2026-07-04]] — 首次收錄，455 stars
