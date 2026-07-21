---
repo: CopilotKit/OpenTag
url: https://github.com/CopilotKit/OpenTag
owner: CopilotKit
owner_type: Organization
language: TypeScript
license: MIT
description: "OpenTag"
homepage: ""
stars: 682
stars_per_day: 28
forks: 82
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
use_case: "提供一個開源、自我託管的 AI 代理，讓用戶在 Slack 等平台上運行自己的模型和工具。"
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
star_history: "2026-07-03:521,2026-07-03:521,2026-07-04:552,2026-07-05:571,2026-07-06:606,2026-07-07:634,2026-07-08:648,2026-07-09:659,2026-07-10:662,2026-07-11:666,2026-07-12:669,2026-07-13:671,2026-07-14:673,2026-07-15:672,2026-07-16:672,2026-07-17:673,2026-07-18:674,2026-07-19:676,2026-07-20:681,2026-07-21:682"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
aliases:
  - "OpenTag"
  - "CopilotKit/OpenTag"
  - "提供一個開源、自我託管的 AI 代理，讓用戶在 Slack 等平台上運行自己的模型和工具。"
---

# OpenTag

**682** stars · **28** stars/天 · 建立 24 天前 · TypeScript · MIT

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
> 提供一個開源、自我託管的 AI 代理，讓用戶在 Slack 等平台上運行自己的模型和工具。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (28 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要在 Slack 上運行自我託管 AI 代理的開發者和團隊。
> **一句話重點** OpenTag 的開源特性和自我託管能力讓用戶能夠完全掌控自己的 AI 代理，這在當前市場中是相對罕見的。

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
> **結論** 花 8 小時學習，12 小時整合，得到一個靈活的自我託管 AI 代理，值得考慮。

> [!abstract] 核心創新
> OpenTag 提供了一個開源、自我託管的替代方案，讓用戶能在自己的基礎設施上運行 AI 代理。

## 專案簡介

OpenTag 是一個開源的自我託管 AI 代理，專為 Slack 設計，能夠讀取對話主題、回答問題、調用工具並在對話中呈現豐富的結果。用戶可以完全控制運行環境，無需擔心座位計費或鎖定問題。其核心是基於 CopilotKit 的開放 SDK，支援多個平台（Slack、Discord、Telegram 和 WhatsApp）。用戶只需運行兩個進程：代理後端（`pnpm runtime`）和機器人，並選擇智能網關模式或自我託管模式。智能網關模式推薦使用，因為它不需要持有 Slack 令牌，降低了安全風險。

技術上，OpenTag 使用 TypeScript 和 Python，並依賴多個 CopilotKit 包來實現功能。與其他類似工具相比，OpenTag 提供了更大的靈活性和可擴展性，特別是在自我託管的情境下。使用者可以根據需要選擇不同的適配器，並可選擇性地集成其他服務，如 Linear 和 Notion。雖然設置過程可能較為複雜，但其開源特性使得用戶可以完全掌控自己的 AI 代理。這個專案目前仍在 alpha 階段，建議對自我託管有需求的團隊使用，但需考慮到設置和維護的成本。

**技術棧**：`TypeScript 5.6.3` · `Python 3.x` · `@copilotkit/channels 0.1.1` · `@slack/bolt 4.2.0`

## 重點功能

- 自我託管 — 用戶完全控制運行環境，無需擔心鎖定或額外費用。
- 多平台支援 — 同時運行於 Slack、Discord、Telegram 和 WhatsApp，使用相同代碼基礎。
- 智能網關模式 — 通過 `pnpm channel` 運行機器人，無需持有平台令牌，減少安全風險。
- 豐富的消息呈現 — 使用 `@copilotkit/channels-ui` 提供跨平台的豐富消息格式。
- 靈活的擴展性 — 用戶可以根據需要添加不同的適配器和工具集成。

## 快速開始

1. 安裝依賴
```bash
pnpm install
```
2. 啟動代理後端
```bash
pnpm runtime
```
3. 啟動智能網關模式的機器人
```bash
pnpm channel
```

## 程式碼範例

```ts
{
  "前置條件": "確保已安裝 pnpm 和所有依賴",
  "指令": "pnpm install\npnpm runtime\npnpm channel",
  "預期輸出": "啟動代理後端和機器人，並在 Slack 中運行。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 24 天內累積 682 stars（28/天），forks 82（12%），顯示出相對活躍的社群參與。主要貢獻者包括 jerelvelarde 和 NathanTarbert，他們在開源社群中有一定的影響力。OpenTag 解決了自我託管 AI 代理的需求，特別是在 Slack 環境中，這在過去的解決方案中並不常見，因為許多工具都依賴於雲端服務。這個專案的推出正好滿足了對開源和自主控制的需求，並且其設計允許用戶根據自己的需求進行擴展。社群的活躍度和開發者的背景都為這個專案的未來發展提供了良好的基礎。

## 適合誰使用

**目標受眾**：需要在 Slack 上運行自我託管 AI 代理的開發者和團隊。

> [!example] 使用場景
> - 後端工程師用它來在 Slack 中自動回覆用戶問題，因為這樣可以減少人工干預，提高工作效率。
> - 產品經理用它來整合 Linear 和 Notion，實現任務管理和文檔編輯的自動化，因為這樣可以減少切換工具的時間。
> - 客服團隊用它來在 Discord 上提供即時支持，因為這樣可以提高客戶滿意度並減少回覆時間。

## 架構分析

OpenTag 的架構基於 CopilotKit 的 SDK，主要由兩個部分組成：代理後端和機器人。代理後端使用 TypeScript 實現，負責處理用戶請求和調用工具，而機器人則根據用戶的需求在不同平台上運行。這種設計使得用戶可以靈活選擇運行模式（智能網關或自我託管），並可根據需求擴展功能。選擇使用 TypeScript 而非 Python 主要是為了提高性能和可維護性，但這也意味著需要一定的前端開發經驗。整體架構的擴展性良好，但在高負載情況下可能會出現性能瓶頸，特別是在多平台同時運行時。

## 技術深入分析

OpenTag 的核心技術機制是基於 CopilotKit 的 SDK，使用 TypeScript 和 Python 進行開發。代理後端使用 TypeScript 實現，負責處理用戶請求並調用相應的工具，這樣的設計使得整體性能更佳。根據 README，OpenTag 的設計考慮到多平台支援，這意味著用戶可以在 Slack、Discord、Telegram 和 WhatsApp 上運行相同的代碼。這種靈活性使得 OpenTag 在市場上具有競爭優勢。

設計上選擇了開源的方式，這不僅降低了使用成本，也使得用戶能夠根據自己的需求進行擴展。技術上，OpenTag 依賴於多個外部包，這可能會在未來的版本中引入一些不穩定性。對於需要高效能和穩定性的商業應用，這可能是一個考量因素。整合方面，OpenTag 與 Slack 的 API 相容良好，但在其他平台的整合可能需要額外的調整和測試。

整體而言，OpenTag 提供了一個靈活且可擴展的解決方案，適合需要自我託管的用戶。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，對於新手來說相對友好。安裝過程中可能會遇到一些配置上的挑戰，但整體流程是順暢的。文件中有詳細的設置指南，幫助用戶快速上手。多語言支持方面，README 主要以英文為主，中文資源較少。

## 優缺點分析

> [!success] 優點
> - 完全自我託管，無需擔心鎖定問題。
> - 支援多個聊天平台，靈活性高。
> - 開源特性，易於定制和擴展。

> [!danger] 缺點
> - 設置過程較為複雜，需要技術背景。
> - 目前仍在 alpha 階段，穩定性需觀察。
> - 依賴多個外部包，可能影響性能。

> [!warning] 注意事項
> - 設置過程較為複雜，需要一定的技術背景。
> - 目前仍在 alpha 階段，可能存在不穩定的情況。
> - 依賴於多個外部包，可能會影響整體性能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自我託管 AI 代理，但主要針對遊戲開發場景。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於多代理系統的協作，與 OpenTag 的單一代理設計有所不同。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 針對 Obsidian 的集成，功能上更專注於筆記管理，而非通用的聊天平台。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲開發的自我託管 AI 代理，與 OpenTag 的通用聊天平台代理有所不同。 | 如果你的專案主要集中在遊戲開發，這個工具會更合適。 | medium，因為需要調整到不同的開發環境。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於多代理系統的協作，與 OpenTag 的單一代理設計有所不同。 | 如果需要多代理協作的場景，這個工具會更合適。 | high，因為需要重新設計代理的交互方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenTag** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲開發的自我託管 AI 代理，與 OpenTag 的通用聊天平台代理有所不同。 | 專注於多代理系統的協作，與 OpenTag 的單一代理設計有所不同。 |
> | 遷移成本 | - | medium，因為需要調整到不同的開發環境。 | high，因為需要重新設計代理的交互方式。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在遊戲開發，這個工具會更合適。 | 如果需要多代理協作的場景，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 設置過程中可能會遇到依賴包版本不兼容的問題
  - 解法：檢查 package.json 中的版本，確保所有依賴都能正常運行
- [MEDIUM] 在高負載情況下，可能會出現性能瓶頸
  - 解法：考慮分散負載或優化代理的設計
- [MEDIUM] 對於非技術用戶，設置和運行過程可能過於複雜
  - 解法：參考官方文檔，或尋求社群的幫助

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的初創團隊需要在 Slack 中自動化客服 | 非常適合 | 自我託管的特性能夠降低成本並提高效率。 |
| 大型企業需要在多個平台上提供支持 | 適合 | 多平台支援使其能夠滿足不同需求。 |
| 個人開發者希望快速實現 AI 代理 | 普通 | 設置過程可能對新手來說較為複雜。 |
| 需要高穩定性和性能的商業應用 | 不適合 | 目前仍在 alpha 階段，穩定性需觀察。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~12 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 8 小時學習，12 小時整合，得到一個靈活的自我託管 AI 代理，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：作為自我託管的工具，使用者完全控制自己的數據和環境，但需確保環境安全和依賴包的更新。

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
| Forks | 82 |
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

**社群活躍度**：社群活躍度中等，定期有更新和貢獻。
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

相關概念：[[CLI/TUI]] · [[自動化]] · [[機器學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlexandrosGounis--pdfx|AlexandrosGounis/pdfx]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]]

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
> const concepts = ["CLI/TUI","自動化","機器學習"];
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
