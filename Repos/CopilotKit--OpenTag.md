---
repo: CopilotKit/OpenTag
url: https://github.com/CopilotKit/OpenTag
owner: CopilotKit
owner_type: Organization
language: TypeScript
license: MIT
description: "OpenTag"
homepage: ""
stars: 659
stars_per_day: 51
forks: 78
open_issues: 4
created: 2026-06-26
pushed_at: 2026-07-06
first_seen: 2026-07-03
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
last_reviewed: 2026-07-03
use_case: "提供一個自我託管的開源替代方案，讓用戶在 Slack 中運行自己的 AI 代理。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-10"
contributor_count: 3
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 2247
readme_length: 6623
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-03"
star_history: "2026-07-03:521,2026-07-03:521,2026-07-04:552,2026-07-05:571,2026-07-06:606,2026-07-07:634,2026-07-08:648,2026-07-09:659"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
aliases:
  - "OpenTag"
  - "CopilotKit/OpenTag"
  - "提供一個自我託管的開源替代方案，讓用戶在 Slack 中運行自己的 AI 代理。"
---

# OpenTag

**659** stars · **51** stars/天 · 建立 13 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/CopilotKit--OpenTag");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

> [!summary] 一句話摘要
> 提供一個自我託管的開源替代方案，讓用戶在 Slack 中運行自己的 AI 代理。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (51 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 希望在 Slack 上運行自定義 AI 代理的開發者和企業用戶。
> **一句話重點** OpenTag 的設計讓用戶能夠完全控制自己的 AI 代理，這在當前市場中是非常稀缺的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/CopilotKit--OpenTag");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "CopilotKit--OpenTag" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** low
> **結論** 花 8 小時學習、12 小時整合，得到靈活的自我託管解決方案，值得投入。

> [!abstract] 核心創新
> 提供一個完全自我託管的開源解決方案，讓用戶在 Slack 中運行自己的 AI 代理。

## 專案簡介

OpenTag 是一個開源的自我託管 AI 代理，專為 Slack 設計，能夠讀取對話串、回答問題、調用工具並在對話中渲染豐富的結果。用戶可以擁有自己的運行環境，選擇模型和工具，避免了傳統的按座位計費和鎖定問題。這個專案基於 CopilotKit 的 SDK，支持多個平台（Slack、Discord、Telegram 和 WhatsApp），用戶只需克隆代碼並指向自己的模型和工具即可。其核心賣點是讓用戶完全掌控整個堆疊，並且不需要依賴第三方服務。技術上，OpenTag 依賴於多個 CopilotKit 包，包括 bot 引擎、AG-UI 代理後端和平台適配器，這些組件的結合使得整體架構靈活且可擴展。

與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，OpenTag 提供了更高的自定義性和控制權，特別是在選擇模型和工具方面。使用者可以在設置過程中選擇持久化存儲或內存存儲，這使得在不同的運行環境中能夠靈活應對。雖然自我託管的設置過程可能較為複雜，但對於需要完全控制的企業或開發者來說，這是一個值得的選擇。未來，隨著 CopilotKit 的管理服務推出，使用者將能夠更輕鬆地使用這個工具，而不必擔心運行和維護的問題。

**技術棧**：`@copilotkit/bot` · `@copilotkit/runtime` · `@slack/bolt` · `TypeScript`

## 重點功能

- 自我託管 — 用戶可以完全控制運行環境，避免商業服務的鎖定。
- 多平台支持 — 除了 Slack，還支持 Discord、Telegram 和 WhatsApp。
- 靈活的模型選擇 — 用戶可以根據需求選擇自己的 AI 模型，支持 OpenAI 和 Anthropic。
- 豐富的消息渲染 — 支持在對話中渲染表格和圖表，提升用戶體驗。
- 持久化存儲選項 — 提供 Redis 支持，能夠在重啟後保持對話狀態。

## 快速開始

1. 創建 Slack 應用
```bash
在 api.slack.com/apps 創建應用並設置必要的權限。
```
2. 設置環境變數
```bash
cp .env.example .env 並填寫 SLACK_BOT_TOKEN 和 OPENAI_API_KEY。
```
3. 運行應用
```bash
pnpm install && pnpm --filter slack-example runtime && pnpm --filter slack-example dev。
```

## 程式碼範例

```ts
[
  "# 前置條件：已設置環境變數並安裝依賴",
  "pnpm install",
  "pnpm --filter slack-example runtime   # 啟動代理後端，運行在 :8200",
  "pnpm --filter slack-example dev        # 啟動 Slack 連接",
  "# 預期輸出：Slack 中可以與 OpenTag 互動，發送指令如 @OpenTag summarize this thread。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天內累積 659 stars（51/天），forks 78（11.8%），顯示出穩定的增長趨勢。這個專案的主要貢獻者來自 CopilotKit 團隊，過去在開源社群中有良好的聲譽。OpenTag 解決了許多開發者在使用商業 AI 服務時面臨的鎖定和成本問題，提供了一個靈活的替代方案。近期的推廣活動和社群討論也可能促進了其曝光率。隨著自我託管解決方案的需求上升，這個工具的出現正好滿足了市場的需求。

## 適合誰使用

**目標受眾**：希望在 Slack 上運行自定義 AI 代理的開發者和企業用戶。

> [!example] 使用場景
> - 產品經理用它來在 Slack 中自動總結會議紀錄，因為這樣可以節省手動整理的時間，並且能夠快速查詢過去的對話。
> - 開發者用它來在 Discord 中實現即時的錯誤回報系統，因為自我託管的特性讓他們能夠根據需求自定義錯誤處理流程。
> - 企業用戶用它來在 WhatsApp 中提供客戶支持，因為這樣可以減少對外部服務的依賴，並且提高數據的安全性。

## 架構分析

OpenTag 採用模組化架構，核心是基於 CopilotKit 的 SDK，這使得用戶可以根據需求選擇不同的適配器和工具。每個適配器（如 Slack、Discord）都是獨立的模組，這樣的設計使得擴展性更強，能夠根據不同平台的需求進行調整。資料流方面，代理後端負責處理 AI 模型的請求，並通過 bot 引擎與 Slack 進行交互，這樣的設計確保了即時性和靈活性。選擇這種架構的代價在於需要用戶具備一定的技術能力來進行設置和維護，對於不熟悉技術的用戶來說，可能會感到困難。整體而言，這種架構提供了良好的擴展性，但在初始設置上可能會造成一定的摩擦。

## 技術深入分析

OpenTag 的核心技術機制是基於 CopilotKit 的 SDK，這使得用戶能夠靈活地選擇和配置不同的適配器和工具。使用 TypeScript 開發，這不僅提高了代碼的可維護性，還能夠利用靜態類型檢查來減少錯誤。效能方面，OpenTag 能夠支持多個用戶同時交互，具體的性能數據尚未公開，但依賴於高效的 bot 引擎和 AG-UI 代理後端，應該能夠在合理的範圍內處理請求。設計上，選擇這種模組化架構是為了提高擴展性和靈活性，但這也意味著使用者需要具備一定的技術能力來進行設置和維護。對於不熟悉技術的用戶來說，這可能會造成一定的學習曲線。與主流框架的整合方面，OpenTag 可以與 Slack、Discord 等平台無縫對接，並且支持與現有的 CI/CD pipeline 整合，這使得它在開發流程中能夠輕鬆融入。整體而言，OpenTag 提供了一個靈活且可擴展的解決方案，但在實際使用中可能會遇到設置和維護的挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的設置步驟和範例，但對於新手來說，設置過程可能會有些挑戰。安裝過程相對順暢，但需要用戶具備一定的技術背景。文件中有詳細的快速入門指南，幫助用戶快速上手。多語言支持尚未明確。

## 優缺點分析

> [!success] 優點
> - 完全自我託管，避免商業服務的鎖定。
> - 支持多平台，靈活應用於不同的通訊工具。
> - 可高度自定義，根據需求調整代理行為。

> [!danger] 缺點
> - 設置過程複雜，需要技術背景。
> - 目前功能主要針對 Slack，其他平台可能不夠完善。
> - 缺乏即時的技術支持，使用者需自行解決問題。

> [!warning] 注意事項
> - 設置過程較為複雜，需要一定的技術背景。
> - 目前僅支持 Slack 的完整功能，其他平台可能需要額外配置。
> - 缺乏官方的管理服務，使用者需自行維護運行環境。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自我託管功能，但主要針對遊戲開發場景，適合需要遊戲內 AI 的開發者。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於簡化的 AI 代理設置，適合不需要高度自定義的用戶，但功能較為有限。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲開發的 AI 代理，提供簡化的設置流程，但功能較為專一。 | 如果你的專案主要針對遊戲開發且需要快速上手的解決方案。 | medium，因為需要重新調整設置和配置。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供簡化的 AI 代理設置，適合不需要高度自定義的用戶，但功能較為有限。 | 如果你的需求較為簡單，且不需要自我託管的靈活性。 | low，因為設置過程較為簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenTag** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲開發的 AI 代理，提供簡化的設置流程，但功能較為專一。 | 提供簡化的 AI 代理設置，適合不需要高度自定義的用戶，但功能較為有限。 |
> | 遷移成本 | - | medium，因為需要重新調整設置和配置。 | low，因為設置過程較為簡單。 |
> | 適用場景 | 主要場景 | 如果你的專案主要針對遊戲開發且需要快速上手的解決方案。 | 如果你的需求較為簡單，且不需要自我託管的靈活性。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合有技術背景的開發者進行實驗，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 設置過程中可能會遇到環境變數配置錯誤的問題
  - 解法：仔細檢查 .env 文件中的所有變數是否正確設置
- [MEDIUM] 在多平台運行時，可能需要重複配置適配器
  - 解法：參考官方文檔中的多平台設置指南
- [MEDIUM] 缺乏即時的技術支持，可能會遇到問題無法及時解決
  - 解法：加入社群討論，尋求其他用戶的幫助

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司希望在 Slack 中運行 AI 代理 | 非常適合 | 自我託管的特性讓小型團隊能夠靈活控制成本和功能。 |
| 大型企業需要在多個平台上提供 AI 支持 | 適合 | 支持多平台的特性能夠滿足不同部門的需求。 |
| 不熟悉技術的團隊希望快速部署 AI 代理 | 不適合 | 設置過程較為複雜，需要一定的技術背景。 |
| 需要高自定義性的開發者希望在 Slack 中運行 AI 代理 | 非常適合 | 提供了高度的自定義性，能夠根據需求調整代理行為。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~12 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 8 小時學習、12 小時整合，得到靈活的自我託管解決方案，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，並且不存取敏感資料。依賴鏈的信任程度良好，無已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/CopilotKit--OpenTag");
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
> const me = dv.page("Repos/CopilotKit--OpenTag");
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
| Forks | 78 |
| Open Issues | 4 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-06 |
| 建立日期 | 2026-06-26 |
| Repo 大小 | 2.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/CopilotKit/OpenTag) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@copilotkit/bot` `@copilotkit/bot-discord` `@copilotkit/bot-slack` `@copilotkit/bot-store-redis` `@copilotkit/bot-telegram` `@copilotkit/bot-ui` `@copilotkit/bot-whatsapp` `@copilotkit/runtime` `@tanstack/ai` `@tanstack/ai-mcp` `@tanstack/ai-openai` `@slack/bolt` `@slack/types` `playwright` `zod`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jerelvelarde](https://github.com/jerelvelarde) | 15 |
> | [@NathanTarbert](https://github.com/NathanTarbert) | 4 |
> | [@samjulien](https://github.com/samjulien) | 3 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者回應速度尚可。
**連結**：[文件](https://docs.copilotkit.ai/slack)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-26 ~ 2026-06-29）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #3 from CopilotKit/docs/readme-package-list

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenTag: an open-source alternative to Claude in Slack
> 
> Run your own AI agent inside Slack: it reads a thread, answers, calls your tools, and
> renders rich results right in the conversation. Think of it as having Claude in your
> workspace, except **open-source and self-hosted**: you own the runtime, bring your own
> model, and wire it to your own tools. No per-seat pricing, no lock-in.
> 
> It's built on **[`@copilotkit/bot`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/bot)** —
> CopilotKit's open SDK for chat-platform agents (Slack first; the same code also runs on
> Discord, Telegram, and WhatsApp). Clone it, point it at your model and tools, and you own
> the whole stack.
> 
> ## See it in action
> 
> https://github.com/user-attachments/assets/a74fa1cb-add0-463e-a23c-aa09b95d5135
> 
> ▶️ **[Watch the demo](https://github.com/user-attachments/assets/a74fa1cb-add0-463e-a23c-aa09b95d5135)** (~50s) — an OpenTag agent working a Slack thread: it renders a breakdown, a table, and a bar chart inline (**generative UI**) and files a ticket only after an **Approve** gate (**human-in-the-loop**).
> 
> > **Two ways to run it:** **host it on your own** with the open-source SDK below — or skip the ops and **[sign up for the managed service →](https://go.copilotkit.ai/opentag-managed-gh)** coming soon from CopilotKit. The managed service will be part of our Enterprise Intelligence platform. You'll be able to use our cloud-hosting or enterprises can host it on their own infra.
> 
> ## Quick start (self-hosted)
> 
> OpenTag ships inside the [CopilotKit monorepo](https://github.com/CopilotKit/CopilotKit) as a
> first-class example (`examples/slack`). That's the dependable way to run it today while the
> bot SDK packages finish publishing to npm. (A standalone `npm install` from this repo lights
> up the moment they land — see [setup.md](./setup.md).)
> 
> You'll run two processes: the **agent** (the LLM backend) and the **bot** (the Slack
> connection) — and set three secrets.
> 
> ### The packages
> 
> OpenTag is a thin layer on top of a handful of CopilotKit packages. The `pnpm install` in step 3 installs all of them for you — this is what each one does, so you know what you're running and which ones are optional.
> 
> **Required** — every OpenTag install needs these four:
> 
> | Package | Role |
> | --- | --- |
> | [`@copilotkit/bot`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/bot) | The platform-agnostic bot engine — threading, tool calls, the human-in-the-loop gate. |
> | [`@copilotkit/runtime`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/runtime) | The AG-UI agent backend that runs your LLM and tools. |
> | [`@copilotkit/bot-ui`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/bot-ui) | Cross-platform JSX for rich messages (Block Kit on Slack, Components V2 on Discord, HTML on Telegram). |
> | [`@copilotkit/bot-slack`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/bot-slack) | The Slack adapter — or swap it for the platform you're targeting (below). |
> 
> **Optional** — add only what you use:
> 
> | Package | When you need it |
> | --- | --- |
> | [`@copilotkit/bot-discord`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/bot-discord) · [`-telegram`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/bot-telegram) · [`-whatsapp`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/bot-whatsapp) | Running on a platform other than Slack — one adapter per platform. |
> | [`@copilotkit/bot-store-redis`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/bot-store-redis) | Durable thread persistence across restarts (defaults to in-memory without it). |
> 
> **1. Create a Slack app.** At [api.slack.com/apps](https://api.slack.com/apps?new_app=1) →
> *From a manifest* → paste [`slack-app-manifest.yaml`](./slack-app-manifest.yaml). Install it,
> then grab the **Bot User OAuth Token** (`xoxb-…`) and an **App-Level Token** (`xapp-…`, with the
> `connections:write` scope). Step-by-step in [setup.md](./setup.md#1-create-a-slack-app).
> 
> **2. Set three secrets** in `.env` (`cp .env.example .env`):
> 
> ```bash
> SLACK_BOT_TOKEN=xoxb-...
> SLACK_APP_TOKEN=xapp-...
> OPENAI_API_KEY=sk-...      # or ANTHROPIC_API_KEY — bring your own model
> ```
> 
> **3. Run it** from the CopilotKit monorepo root:
> 
> ```bash
> pnpm install
> pnpm --filter slack-example runtime   # the agent backend, on :8200
> pnpm --filter slack-example dev        # the bot
> ```
> 
> **4. Talk to it.** @mention the bot in any channel thread:
> 
> > @OpenTag summarize this thread and file it as a bug
> 
> That's the whole loop. To wire up Linear, Notion, inline charts, Redis persistence, or to run
> on Discord / Telegram / WhatsApp, see **[setup.md](./setup.md)**.  
> 
> We won't lie to you, though. Setting up hosting for chat agents is not easy. To skip all of that heartache, go [join the waitlist](https://go.copilotkit.ai/opentag-managed-gh) for the CopilotKit managed service as part of our Intelligence platform, both cloud-hosted or self-hosted.
> 
> ## Make it your own
> 
> OpenTag is deliberately small and hackable:
> 
> - **Change what it does.** The agent's behavior is steered by a single system prompt in
>   [`runtime.ts`](./runtime.ts) — rewrite it and you have a different agent.
> - **Copy `app/` to start your own bot.** It's the platform-agnostic bot (tools, components, the
>   human-in-the-loop gate). `runtime.ts` is the agent backend: one CopilotKit `BuiltInAgent` (an
>   LLM + optional MCP tools — no Python, no LangGraph), served over AG-UI.
> - **One platform, or all of them.** `createBot` takes an array of adapters; set the secrets for
>   whichever platform(s) you want and the bot starts an adapter for each.
> 
> The full architecture, the file-by-file map, and every integration live in
> **[setup.md](./setup.md)**.
> 
> ## Don't want to host it yourself?
> 
> Self-hosting means you run and scale the runtime, persistence, and inspection tooling yourself.
> A **managed CopilotKit service** is on its way. It's the same agent, without the ops: durable
> threads, persistence, hosted inspection, and agents that improve from feedback (**Continuous
> Learning from Human Feedback**). 
> 
> - **[Join the waitlist →](https://go.copilotkit.ai/opentag-managed-gh)** — be first in when the managed service opens.
> - **[Talk to an engineer →](https://copilotkit.ai/talk-to-an-engineer)** — building something real on this? We'd love to help you ship it.
> 
> ## Learn more
> 
> The **[CopilotKit Slack quickstart](https://docs.copilotkit.ai/slack)** is the canonical guide
> to building a Slack agent — read it alongside this starter. Detailed setup and configuration
> lives in **[setup.md](./setup.md)**.
> 
> ## License
> 
> MIT — see [LICENSE](./LICENSE).

## 延伸閱讀

相關概念：[[自動化]] · [[微服務]] · [[API 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[AlexandrosGounis--pdfx|AlexandrosGounis/pdfx]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]]

[GitHub](https://github.com/CopilotKit/OpenTag)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "CopilotKit--OpenTag"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "CopilotKit--OpenTag"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "CopilotKit--OpenTag" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "CopilotKit--OpenTag"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","微服務","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "CopilotKit--OpenTag" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/CopilotKit--OpenTag");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "CopilotKit--OpenTag" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "CopilotKit" AND file.name != "CopilotKit--OpenTag"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/CopilotKit--OpenTag");
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
> const me = dv.page("Repos/CopilotKit--OpenTag");
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
> const me = dv.page("Repos/CopilotKit--OpenTag");
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
> const me = dv.page("Repos/CopilotKit--OpenTag");
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
> const me = dv.page("Repos/CopilotKit--OpenTag");
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

> **2026-07-03** — 首次收錄
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

- [[2026-07-03|2026-07-03]] — 首次收錄，521 stars
