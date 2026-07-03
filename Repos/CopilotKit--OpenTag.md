---
repo: CopilotKit/OpenTag
url: https://github.com/CopilotKit/OpenTag
owner: CopilotKit
owner_type: Organization
language: TypeScript
license: MIT
description: "OpenTag"
homepage: ""
stars: 521
stars_per_day: 74
forks: 63
open_issues: 2
created: 2026-06-26
pushed_at: 2026-07-01
first_seen: 2026-07-03
week: "2026-W27"
month: "2026-07"
category: "其他"
subcategory: "AI 代理"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-03
use_case: "在 Slack 中運行自我託管的 AI 代理，無需每位用戶付費，完全掌控運行環境。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-10"
contributor_count: 3
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 2255
readme_length: 6623
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-03"
star_history: "2026-07-03:521,2026-07-03:521"
tags:
  - github
  - "category/其他"
  - "lang/typescript"
  - org
aliases:
  - "OpenTag"
  - "CopilotKit/OpenTag"
  - "在 Slack 中運行自我託管的 AI 代理，無需每位用戶付費，完全掌控運行環境。"
---

# OpenTag

**521** stars · **74** stars/天 · 建立 7 天前 · TypeScript · MIT

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
> 在 Slack 中運行自我託管的 AI 代理，無需每位用戶付費，完全掌控運行環境。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (74 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 希望在 Slack 中運行自我託管 AI 代理的技術團隊或企業。
> **一句話重點** OpenTag 提供了一個靈活且可自定義的開源 AI 代理解決方案，特別適合需要在 Slack 中實現 AI 交互的技術團隊。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/CopilotKit--OpenTag");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 代理" && p.file.name !== "CopilotKit--OpenTag" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 代理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，10 小時整合，得到一個靈活的 AI 代理解決方案，值得嘗試。

> [!abstract] 核心創新
> 提供一個開源的自我託管 AI 代理解決方案，讓用戶可以完全控制運行環境。

## 專案簡介

OpenTag 是一個開源的自我託管 AI 代理，專為 Slack 設計，能夠讀取對話串、回答問題、調用工具並在對話中渲染豐富的結果。用戶可以完全控制運行環境，無需擔心每位用戶的費用或鎖定效應。核心機制是將 AI 代理與 Slack 整合，通過 `@copilotkit/bot` 提供的 SDK，實現跨平台運行（也支援 Discord、Telegram 和 WhatsApp）。用戶只需設置三個秘密金鑰並運行兩個進程（代理和機器人），即可開始使用。這個工具的賣點在於其開源性和靈活性，使用者可以根據需求自定義代理的行為和功能。

技術上，OpenTag 使用 TypeScript 實現，依賴於多個 CopilotKit 包，這些包提供了平台無關的機器人引擎、AG-UI 代理後端和豐富的消息組件。與其他類似工具相比，如 Claude 或 ChatGPT，OpenTag 的優勢在於用戶擁有完整的控制權和自定義能力，而不必依賴第三方服務。使用者需要注意，設置過程可能較為繁瑣，尤其是在自我託管的情況下，對於不熟悉基礎設施的團隊來說，可能會面臨挑戰。整體而言，這是一個適合有技術背景的團隊使用的工具，特別是那些希望在 Slack 中實現 AI 交互的團隊。

**技術棧**：`TypeScript 5.6.3` · `@copilotkit/bot 0.1.0` · `@slack/bolt 4.2.0`

## 重點功能

- 自我託管 — 用戶完全控制 AI 代理的運行環境，無需每位用戶付費。
- 跨平台支持 — 除了 Slack，還支持 Discord、Telegram 和 WhatsApp。
- 靈活的自定義 — 用戶可以修改代理行為，通過編輯 `runtime.ts` 文件來改變代理的響應。
- 持久性存儲 — 可選的 Redis 支持，實現對話的持久性存儲。
- 豐富的消息渲染 — 使用 `@copilotkit/bot-ui` 提供的組件，支持生成豐富的 UI 結果。

## 快速開始

1. 創建 Slack 應用
```bash
在 api.slack.com/apps 創建應用並獲取 OAuth Token
```
2. 設置環境變數
```bash
cp .env.example .env && 填寫 SLACK_BOT_TOKEN 和 OPENAI_API_KEY
```
3. 運行應用
```bash
pnpm install && pnpm --filter slack-example runtime && pnpm --filter slack-example dev
```

## 程式碼範例

```ts
[
  "# 前置條件：已設置環境變數並安裝依賴",
  "pnpm install",
  "# 預期輸出：應用啟動並能在 Slack 中接收消息"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 521 stars（74/天），forks 63（12.1%），顯示出強勁的增長潛力。主要貢獻者包括 jerelvelarde 和 NathanTarbert，他們在開源社群中有豐富的經驗。這個專案解決了用戶對於自我託管 AI 代理的需求，特別是在 Slack 環境中，提供了一個靈活且可自定義的解決方案。這個工具的出現正好滿足了對於開源和自我託管解決方案的需求，尤其是在企業環境中，避免了傳統 SaaS 模型的鎖定效應。社群對於這個專案的反應積極，顯示出對於開源 AI 解決方案的興趣。

## 適合誰使用

**目標受眾**：希望在 Slack 中運行自我託管 AI 代理的技術團隊或企業。

> [!example] 使用場景
> - 產品經理用它來在 Slack 中自動總結會議記錄，因為這樣可以節省時間並提高團隊的工作效率。
> - 開發者用它來在 Slack 中調用內部工具，因為這樣可以快速獲取數據並進行即時反饋。
> - 運營團隊用它來監控 Slack 對話中的問題並自動生成報告，因為這樣可以提高問題解決的速度。

## 架構分析

OpenTag 的架構基於 CopilotKit 提供的多個包，這些包共同構成了一個靈活的 AI 代理系統。核心組件包括平台無關的機器人引擎、AG-UI 代理後端和豐富的消息組件。資料流從 Slack 接收消息，經過代理處理後，調用相應的工具並返回結果。

選擇自我託管的設計使得用戶能夠完全控制數據和運行環境，但也增加了設置的複雜性。這種設計的代價在於需要用戶具備一定的技術背景來管理和維護系統，特別是在擴展性方面，可能會面臨性能瓶頸。整體而言，這個架構適合希望在 Slack 中實現 AI 交互的團隊，但對於不熟悉基礎設施的用戶來說，可能會有一定的挑戰。

## 技術深入分析

OpenTag 的核心技術機制是基於 CopilotKit 的 SDK，這使得它能夠在多個聊天平台上運行。使用 TypeScript 開發，這樣的選擇使得代碼可讀性和可維護性較高。效能方面，因為使用了多個依賴包，這可能會導致一定的資源消耗，特別是在高並發的情況下。設計上，選擇自我託管的方式讓用戶能夠完全控制數據和運行環境，但也增加了設置的複雜性。技術風險方面，對於不熟悉基礎設施的團隊來說，可能會面臨運維挑戰。整合方面，與 Slack 的整合相對簡單，但對於其他平台的支持需要額外的配置和調整。整體而言，這個工具的設計和實作都體現了開源社群對於靈活性和可控性的追求。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例。安裝過程中需要設置環境變數，對於新手來說可能會有一定的挑戰。文件中有指向更詳細的設置指南，整體上能夠幫助用戶在 30 分鐘內完成基本設置。

## 優缺點分析

> [!success] 優點
> - 完全自我託管，無需擔心第三方服務的鎖定效應。
> - 支持多平台運行，靈活性高。
> - 開源設計，便於自定義和擴展。

> [!danger] 缺點
> - 設置過程較為繁瑣，對於新手不友好。
> - 需要用戶自己管理運行環境，增加運維負擔。
> - 目前僅支持指定的聊天平台，對於其他平台的支持需要額外配置。

> [!warning] 注意事項
> - 設置過程較為繁瑣，對於不熟悉基礎設施的團隊來說可能會有挑戰。
> - 需要用戶自己管理運行環境，可能增加運維負擔。
> - 目前僅支持指定的聊天平台，對於其他平台的支持需要額外配置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 代理功能，但主要針對遊戲開發，適合需要遊戲內 AI 的開發者。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於自動化測試的 AI 代理，適合需要測試自動化的團隊。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理協作的功能，適合需要多個 AI 代理協同工作的場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲內 AI 代理，使用 Unity 引擎實現，適合遊戲開發者。 | 如果你的團隊專注於遊戲開發並需要在遊戲中集成 AI 代理。 | medium，因為需要重新設計遊戲內的交互邏輯。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於自動化測試的 AI 代理，使用 Python 實現，適合需要測試自動化的團隊。 | 如果你的團隊需要專注於測試自動化而不是聊天平台的集成。 | low，因為可以直接替換現有的測試工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenTag** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲內 AI 代理，使用 Unity 引擎實現，適合遊戲開發者。 | 專注於自動化測試的 AI 代理，使用 Python 實現，適合需要測試自動化的團隊。 |
> | 遷移成本 | - | medium，因為需要重新設計遊戲內的交互邏輯。 | low，因為可以直接替換現有的測試工具。 |
> | 適用場景 | 主要場景 | 如果你的團隊專注於遊戲開發並需要在遊戲中集成 AI 代理。 | 如果你的團隊需要專注於測試自動化而不是聊天平台的集成。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合技術團隊進行實驗和開發，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 設置過程中可能會遇到環境變數配置錯誤的問題
  - 解法：仔細檢查 .env 文件中的配置
- [MEDIUM] 高並發情況下可能會出現性能瓶頸
  - 解法：考慮使用 Redis 進行持久性存儲

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司希望在 Slack 中運行 AI 代理 | 非常適合 | 小型團隊能夠靈活配置和管理自我託管的解決方案。 |
| 大型企業需要穩定的 AI 代理解決方案 | 不適合 | 目前處於 alpha 階段，尚未準備好進入生產環境。 |
| 開發者希望在 Slack 中集成 AI 工具 | 適合 | 提供靈活的自定義和多平台支持。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到一個靈活的 AI 代理解決方案，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取 Slack 的 API，依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

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
| Forks | 63 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-01 |
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

**社群活躍度**：社群活躍，近期有合併請求和問題回應，但解決率尚未提高。
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

相關概念：[[自動化]] · [[AI 代理]] · [[持久性存儲]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[EEliberto--IPA-Download|EEliberto/IPA-Download]]

[GitHub](https://github.com/CopilotKit/OpenTag)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 代理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 代理" AND file.name != "CopilotKit--OpenTag"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "CopilotKit--OpenTag"
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
> const concepts = ["自動化","AI 代理","持久性存儲"];
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
