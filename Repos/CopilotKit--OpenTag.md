---
repo: CopilotKit/OpenTag
url: https://github.com/CopilotKit/OpenTag
owner: CopilotKit
owner_type: Organization
language: TypeScript
license: MIT
description: "OpenTag"
homepage: ""
stars: 674
stars_per_day: 32
forks: 80
open_issues: 5
created: 2026-06-26
pushed_at: 2026-07-17
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
use_case: "讓你在 Slack 中自架設 AI 代理，完全開源且可自訂。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-10"
contributor_count: 3
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 2661
readme_length: 9620
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-03"
star_history: "2026-07-03:521,2026-07-03:521,2026-07-04:552,2026-07-05:571,2026-07-06:606,2026-07-07:634,2026-07-08:648,2026-07-09:659,2026-07-10:662,2026-07-11:666,2026-07-12:669,2026-07-13:671,2026-07-14:673,2026-07-15:672,2026-07-16:672,2026-07-17:673,2026-07-18:674"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
aliases:
  - "OpenTag"
  - "CopilotKit/OpenTag"
  - "讓你在 Slack 中自架設 AI 代理，完全開源且可自訂。"
---

# OpenTag

**674** stars · **32** stars/天 · 建立 21 天前 · TypeScript · MIT

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
> 讓你在 Slack 中自架設 AI 代理，完全開源且可自訂。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (32 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 希望在 Slack 中自架設 AI 代理並具備一定技術背景的開發者。
> **一句話重點** OpenTag 提供了一個靈活且可自訂的 AI 代理解決方案，適合希望在 Slack 中運行自架設 AI 的開發者。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** low
> **結論** 花 10 小時學、5 小時整合，得到靈活的 AI 代理解決方案，值得嘗試。

> [!abstract] 核心創新
> 提供了一個開源的自架設 AI 代理解決方案，專為 Slack 設計。

## 專案簡介

OpenTag 是一個開源的自架設 AI 代理解決方案，專為 Slack 設計。用戶可以透過簡單的指令來運行 AI 代理，這個代理能夠閱讀對話串、回答問題、調用工具並在對話中呈現豐富的結果。其核心賣點在於用戶擁有完整的運行環境，並且可以自由選擇模型和工具，避免了傳統商業解決方案的鎖定效應。安裝過程中，使用 `pnpm install` 來拉取所有必要的依賴，並運行兩個主要過程：代理後端 (`pnpm runtime`) 和機器人 (`pnpm channel` 或 `pnpm dev`)。這樣的設計使得用戶可以選擇在 CopilotKit Intelligence Gateway 上運行機器人，或是直接在本地運行，這提供了靈活性和安全性。

技術上，OpenTag 使用了 CopilotKit 的多個包來實現其功能，包括平台無關的機器人引擎和豐富的消息呈現。相較於其他類似工具如 0x0funky/agent-sprite-forge 和 2aronS/Duel-Agents，OpenTag 提供了更高的自訂性，並且支持多平台運行（Slack、Discord、Telegram 和 WhatsApp）。不過，使用者需要具備一定的技術背景來設置和維護這個系統，特別是在自架設的情況下。社群活躍度目前仍在發展中，開放的問題數量顯示出使用者可能會遇到一些挑戰。整體而言，這是一個適合希望在團隊內部使用 AI 代理的開發者和技術人員的解決方案。

**技術棧**：`TypeScript` · `Python` · `@copilotkit/channels`

## 重點功能

- 自架設 AI 代理 — 用戶可以在自己的基礎設施上運行 AI 代理，完全控制運行環境。
- 多平台支持 — 除了 Slack，還支持 Discord、Telegram 和 WhatsApp，方便用戶在不同平台上使用。
- 靈活的運行模式 — 提供 Intelligence Gateway 模式和自託管模式，滿足不同需求。
- 豐富的消息呈現 — 使用 CopilotKit 的 UI 組件來生成豐富的消息格式。
- 簡單的安裝流程 — 只需一條 `pnpm install` 指令即可安裝所有依賴。

## 快速開始

1. 安裝依賴
```bash
pnpm install
```
2. 啟動代理後端
```bash
pnpm runtime
```
3. 啟動機器人
```bash
pnpm channel
```

## 程式碼範例

```ts
{
  "前置條件": "安裝完成後，啟動代理和機器人",
  "指令": "pnpm channel",
  "預期輸出": "機器人在 Slack 中運行，能夠回應提及並執行指令。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 21 天內累積 674 stars（32/天），forks 80（11.9%），顯示出一定的社群興趣。主要貢獻者包括 jerelvelarde 和 NathanTarbert，他們在開源社群中有良好的聲譽。這個專案解決了自架設 AI 代理的需求，尤其是在 Slack 這樣的商業環境中，傳統的商業解決方案往往有高昂的費用和鎖定問題。這個工具的出現讓開發者能夠更靈活地運用 AI 技術，並且有可能吸引了對開源解決方案感興趣的使用者。社群的活躍度和問題解決率也顯示出這個專案仍在持續發展中。

## 適合誰使用

**目標受眾**：希望在 Slack 中自架設 AI 代理並具備一定技術背景的開發者。

> [!example] 使用場景
> - 後端工程師用它來在 Slack 中運行自訂的 AI 代理，因為這樣可以完全控制運行環境，避免商業解決方案的鎖定效應。
> - 產品經理用它來自動化團隊的問題回報流程，因為它能夠在對話中生成報告並提交到任務管理工具，提升效率。
> - 開發者用它來測試不同的 AI 模型在 Slack 中的表現，因為它支持多平台運行並且易於集成各種工具。

## 架構分析

OpenTag 的架構設計為一個輕量級的代理系統，基於 CopilotKit 的多個包來實現。其核心是 `@copilotkit/channels`，提供了平台無關的機器人引擎，能夠處理多種消息格式和工具調用。資料流方面，機器人通過 AG-UI 與代理後端進行通訊，這樣的設計使得用戶可以靈活選擇運行環境。

選擇使用 TypeScript 和 Python 的組合，讓開發者能夠在前端和後端之間無縫切換，並且能夠利用現有的 JavaScript 生態系統。這樣的選擇雖然增加了學習成本，但也帶來了更高的靈活性和擴展性。整體而言，這個架構適合需要快速迭代和自訂的開發者，但在大規模部署時可能會面臨資源管理的挑戰。

## 技術深入分析

OpenTag 的核心技術機制基於 CopilotKit 的多個包，特別是 `@copilotkit/channels`，這是一個平台無關的機器人引擎，能夠處理多種消息格式和工具調用。其設計模式採用模組化架構，讓用戶可以根據需求選擇安裝不同的包。效能方面，這個系統能夠支持多平台運行，並且在小型團隊中能夠快速部署和迭代。選擇 TypeScript 和 Python 的組合，讓開發者能夠在前端和後端之間無縫切換，但也增加了學習成本。設計上，這個系統的靈活性和可擴展性是其主要優勢，但在大規模部署時可能會面臨資源管理的挑戰。整合方面，與 Slack 和其他聊天平台的整合相對簡單，但需要用戶自行管理 API 金鑰和安全性，這可能會成為新手的障礙。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和範例，安裝過程相對順暢，但對於新手來說，設置過程可能會有一定的挑戰。缺乏多語言支持，主要以英文為主。

## 優缺點分析

> [!success] 優點
> - 開源且可自訂，讓用戶完全控制運行環境。
> - 支持多平台，方便用戶在不同聊天工具中使用。
> - 靈活的運行模式，滿足不同的需求和安全考量。

> [!danger] 缺點
> - 需要一定的技術背景來設置和維護系統。
> - 社群活躍度尚在發展中，可能會遇到未解決的問題。
> - 自架設模式需要用戶自行管理安全性和運行環境。

> [!warning] 注意事項
> - 需要一定的技術背景來設置和維護系統。
> - 目前社群活躍度尚在發展中，可能會遇到未解決的問題。
> - 自架設模式需要用戶自行管理安全性和運行環境。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具提供了類似的 AI 代理功能，但主要集中在遊戲開發上，適合需要遊戲相關功能的開發者。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 此工具專注於多代理系統的協作，而 OpenTag 更加靈活，支持多平台和自訂化。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲開發的 AI 代理，提供了遊戲特定的功能。 | 如果你的專案是遊戲相關，並需要專門的遊戲 AI 功能。 | medium，因為需要重新設計整個代理架構以符合遊戲需求。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於多代理系統的協作，提供了多代理間的協作功能。 | 如果你的專案需要多個代理之間的協作，而不僅僅是一個單一的代理。 | high，因為需要重新設計系統以支持多代理的協作。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenTag** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲開發的 AI 代理，提供了遊戲特定的功能。 | 專注於多代理系統的協作，提供了多代理間的協作功能。 |
> | 遷移成本 | - | medium，因為需要重新設計整個代理架構以符合遊戲需求。 | high，因為需要重新設計系統以支持多代理的協作。 |
> | 適用場景 | 主要場景 | 如果你的專案是遊戲相關，並需要專門的遊戲 AI 功能。 | 如果你的專案需要多個代理之間的協作，而不僅僅是一個單一的代理 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 初次設置時可能會遇到 API 金鑰配置問題
  - 解法：仔細檢查 `.env` 文件中的配置
- [MEDIUM] 在 Slack 中的消息格式可能不一致
  - 解法：根據不同平台調整消息格式設置
- [MEDIUM] 社群問題解決率低，可能需要自行尋找解決方案
  - 解法：參考官方文檔和 GitHub issue

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 靈活的自架設選項和多平台支持，適合小型團隊使用。 |
| 大型企業的多平台 AI 代理 | 普通 | 雖然支持多平台，但設置和維護成本較高，可能不適合大型企業。 |
| 開發者想要快速原型設計 AI 代理 | 非常適合 | 安裝簡單且可快速迭代，適合開發者進行原型設計。 |
| 需要穩定商業解決方案的團隊 | 不適合 | 目前仍在 alpha 階段，不建議用於生產環境。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 10 小時學、5 小時整合，得到靈活的 AI 代理解決方案，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要管理 API 金鑰和用戶數據，使用時需注意安全性。

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
| Forks | 80 |
| Open Issues | 5 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-17 |
| 建立日期 | 2026-06-26 |
| Repo 大小 | 2.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/CopilotKit/OpenTag) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@copilotkit/channels` `@copilotkit/channels-discord` `@copilotkit/channels-intelligence` `@copilotkit/channels-slack` `@copilotkit/channels-telegram` `@copilotkit/channels-ui` `@copilotkit/channels-whatsapp` `@copilotkit/runtime` `@notionhq/notion-mcp-server` `@slack/bolt` `@slack/types` `@tanstack/ai` `@tanstack/ai-mcp` `@tanstack/ai-openai` `dotenv`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 92
>     "Python" : 8
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jerelvelarde](https://github.com/jerelvelarde) | 54 |
> | [@NathanTarbert](https://github.com/NathanTarbert) | 4 |
> | [@samjulien](https://github.com/samjulien) | 3 |

## 社群與生態

**社群活躍度**：社群活躍度尚在發展中，開放的問題數量顯示出使用者可能會遇到一些挑戰。
**連結**：[文件](https://docs.copilotkit.ai/slack)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-16 ~ 2026-07-17）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #7 from CopilotKit/jerel/kitebot-railway-oneclick

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenTag: an open-source alternative to Claude in Slack
> 
> Run your own AI agent inside Slack: it reads a thread, answers, calls your tools, and
> renders rich results right in the conversation. Think of it as having Claude in your
> workspace, except **open-source and self-hosted**: you own the runtime, bring your own
> model, and wire it to your own tools. No per-seat pricing, no lock-in.
> 
> It's built on **[`@copilotkit/channels`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/channels)** —
> CopilotKit's open SDK for chat-platform agents (Slack first; the same code also runs on
> Discord, Telegram, and WhatsApp). Clone it, point it at your model and tools, and you own
> the whole stack.
> 
> 
> ## Quick start
> 
> OpenTag's packages are published on npm — a standalone `pnpm install` in this repo pulls in
> everything you need, no monorepo required.
> 
> You'll run two processes: the **agent backend** (`pnpm runtime`) and **the bot**. For the bot,
> pick one of two modes:
> 
> - **Intelligence Gateway — recommended.** `pnpm channel` runs the bot over the CopilotKit
>   Intelligence Realtime Gateway. This process never holds a Slack token — Intelligence owns
>   the Slack edge — so there's less for you to run and secure. You still run this process
>   yourself and bring your own CopilotKit Intelligence project — it's not the fully-hosted
>   managed service described below.
> - **Self-hosted.** `pnpm dev` (or `pnpm start`) runs the bot locally and talks to Slack (and
>   Discord/Telegram/WhatsApp) directly with your own platform tokens.
> 
> Both modes talk to the same agent backend over AG-UI.
> 
> 
> # Optional integrations (see setup.md):
> LINEAR_API_KEY=lin_api_... # optional — lets the agent file Linear tickets
> 
> 
> # Intelligence Gateway mode — full list in .env.example:
> INTELLIGENCE_GATEWAY_WS_URL=wss://...
> INTELLIGENCE_API_KEY=cpk-...
> INTELLIGENCE_ORG_ID=org_...
> INTELLIGENCE_PROJECT_ID=...
> INTELLIGENCE_CHANNEL_ID=channel_...
> ```
> 
> **3. Run it:**
> 
> ```bash
> pnpm install
> pnpm runtime    # the agent backend, on :8200
> 
> pnpm channel    # recommended — the bot over the Intelligence Gateway
> 
> ## See it in action
> 
> https://github.com/user-attachments/assets/a74fa1cb-add0-463e-a23c-aa09b95d5135
> 
> ▶️ **[Watch the demo](https://github.com/user-attachments/assets/a74fa1cb-add0-463e-a23c-aa09b95d5135)** (~50s) — a KiteBot agent working a Slack thread: it renders a breakdown, a table, and a bar chart inline (**generative UI**) and files a ticket only after an **Approve** gate (**human-in-the-loop**).
> 
> > **Two ways to run it:** **host it on your own** with the open-source SDK below — or skip the ops and **[sign up for the managed service →](https://go.copilotkit.ai/opentag-managed-gh)** coming soon from CopilotKit. The managed service will be part of our Enterprise Intelligence platform. You'll be able to use our cloud-hosting or enterprises can host it on their own infra.
> >
> > Note: the **Intelligence Gateway** mode below is part of "host it on your own" — you run that
> > process yourself and bring your own CopilotKit Intelligence project. It's distinct from the
> > fully-hosted **managed service** above, which is still on the waitlist.
> 
> 
> ### The packages
> 
> OpenTag is a thin layer on top of a handful of CopilotKit packages. The `pnpm install` in step 3 installs all of them for you — this is what each one does, so you know what you're running and which ones are optional.
> 
> **Required** — every OpenTag install needs these four:
> 
> | Package | Role |
> | --- | --- |
> | [`@copilotkit/channels`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/channels) | The platform-agnostic bot engine — threading, tool calls, the human-in-the-loop gate. |
> | [`@copilotkit/runtime`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/runtime) | The AG-UI agent backend that runs your LLM and tools. |
> | [`@copilotkit/channels-ui`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/channels-ui) | Cross-platform JSX for rich messages (Block Kit on Slack, Components V2 on Discord, HTML on Telegram). |
> | [`@copilotkit/channels-slack`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/channels-slack) | The Slack adapter — or swap it for the platform you're targeting (below). |
> 
> **Optional** — add only what you use:
> 
> | Package | When you need it |
> | --- | --- |
> | [`@copilotkit/channels-discord`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/channels-discord) · [`-telegram`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/channels-telegram) · [`-whatsapp`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/channels-whatsapp) | Running on a platform other than Slack — one adapter per platform. |
> | [`@copilotkit/channels-intelligence`](https://github.com/CopilotKit/CopilotKit/tree/main/packages/channels-intelligence) | Runs the bot over the CopilotKit Intelligence Realtime Gateway instead of holding platform tokens — see `app/managed.ts`. **Required for the recommended `pnpm channel` (Intelligence Gateway) mode**; omit it only if you run self-hosted mode exclusively. |
> 
> **1. Create a Slack app.** At [api.slack.com/apps](https://api.slack.com/apps?new_app=1) →
> *From a manifest* → paste [`slack-app-manifest.yaml`](./slack-app-manifest.yaml). Install it,
> then grab the **Bot User OAuth Token** (`xoxb-…`) and an **App-Level Token** (`xapp-…`, with the
> `connections:write` scope) — needed for self-hosted mode, or to register the app with your
> CopilotKit Intelligence project for Intelligence mode. Step-by-step in
> [setup.md](./setup.md#1-create-a-slack-app).
> 
> **2. Set your secrets** in `.env` (`cp .env.example .env`):
> 
> ```bash
> OPENAI_API_KEY=sk-...      # the TS runtime (runtime.ts) uses OpenAI's Responses API for web search;
>                            # the Python agent/ uses Tavily instead (see "Deep research" below)
> 
> 
> # Self-hosted mode:
> SLACK_BOT_TOKEN=xoxb-...
> SLACK_APP_TOKEN=xapp-...
> 
> 
> # or
> pnpm dev        # alternative — the bot, self-hosted
> ```
> 
> **4. Talk to it.** @mention the bot in any channel thread:
> 
> > @KiteBot summarize this thread and file it as a bug
> 
> That's the whole loop. To wire up Linear, Notion, inline charts, or to run
> on Discord / Telegram / WhatsApp, see **[setup.md](./setup.md)**.  
> 
> We won't lie to you, though. Setting up hosting for chat agents is not easy. To skip all of that heartache, go [join the waitlist](https://go.copilotkit.ai/opentag-managed-gh) for the CopilotKit managed service as part of our Intelligence platform, both cloud-hosted or self-hosted.
> 
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
> 
> ## Deep research (LangGraph deep agent)
> 
> `agent/` is an alternative agent backend to `runtime.ts` — a Python
> [`deepagents`](https://github.com/langchain-ai/deepagents) (LangGraph) planner with a virtual
> filesystem and OPTIONAL Tavily web research, served over AG-UI on `:8123`. Instead of a single
> system-prompted LLM call, it plans with `write_todos`, reads/writes its own virtual files, and
> (when configured) researches the web before synthesizing an answer — while still calling
> KiteBot's forwarded generative-UI tools like the TS runtime does.
> 
> Only `OPENAI_API_KEY` is required. `TAVILY_API_KEY` is **optional** — without it, chat and UI
> generation still work (the agent answers from its own knowledge); with it, live web research
> turns on.
> 
> To run it:
> 

## 延伸閱讀

相關概念：[[自動化]] · [[多模態]] · [[API 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlexandrosGounis--pdfx|AlexandrosGounis/pdfx]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]]

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
> const concepts = ["自動化","多模態","API 設計"];
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
