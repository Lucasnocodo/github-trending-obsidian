---
repo: cosmicstack-labs/mercury-agent
url: https://github.com/cosmicstack-labs/mercury-agent
owner: cosmicstack-labs
owner_type: Organization
language: TypeScript
license: MIT
description: "Soul-driven AI agent with permission-hardened tools, token budgets, and multi-channel access. Runs 24/7 from CLI or Telegram."
homepage: "https://mercury.cosmicstack.org/"
stars: 1416
stars_per_day: 236
forks: 154
open_issues: 9
created: 2026-04-20
pushed_at: 2026-04-26
first_seen: 2026-04-26
week: "2026-W18"
month: "2026-04"
category: "AI/ML"
subcategory: "AI Agent"
release_tag: "v1.0.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-26
use_case: "提供一個具備持久記憶的 AI 助手，能夠在 CLI 或 Telegram 上持續運行並進行多通道訪問。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-30"
contributor_count: 4
engagement: "medium"
issue_close_rate: 11
repo_size_kb: 1328
readme_length: 9927
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-26"
star_history: "2026-04-26:1117,2026-04-26:1124,2026-04-27:1416"
tags:
  - github
  - "category/ai_ml"
  - "lang/typescript"
  - org
  - easy_install
  - "topic/ai_agent"
  - "topic/ai_assistant"
  - "topic/llm"
aliases:
  - "mercury-agent"
  - "cosmicstack-labs/mercury-agent"
  - "提供一個具備持久記憶的 AI 助手，能夠在 CLI 或 Telegram 上持續運行並進行多通道訪問。"
---

# mercury-agent

**1.1k** stars · **225** stars/天 · 建立 5 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v1.0.0` `easy-install`

`ai-agent` `ai-assistant` `llm`

> [!summary] 一句話摘要
> 提供一個具備持久記憶的 AI 助手，能夠在 CLI 或 Telegram 上持續運行並進行多通道訪問。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (225 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要一個能夠持續運行並記住上下文的 AI 助手的開發者和團隊。
> **一句話重點** Mercury Agent 的創新在於將持久記憶和權限管理結合，讓 AI 助手更智能且安全。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI Agent" && p.file.name !== "cosmicstack-labs--mercury-agent" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI Agent 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到一個持久記憶的 AI 助手，值得嘗試。

> [!abstract] 核心創新
> Mercury 是第一個將持久記憶和權限管理結合的 AI 助手，能夠在多通道環境中運行。

## 專案簡介

Mercury Agent 是一個靈魂驅動的 AI 助手，具備持久記憶系統，能夠在 CLI 或 Telegram 上運行。用戶可以透過簡單的 CLI 指令 `npx @cosmicstack/mercury-agent` 開始使用，並在首次運行時進行設置，包括輸入名稱和 API 金鑰。這個工具的核心賣點在於它的「第二大腦」功能，能夠記住用戶的偏好和目標，並自動提取和整合資訊，這使得 Mercury 在多次對話中能夠保持上下文。技術上，Mercury 使用 SQLite 作為記憶儲存，並支援全文字搜索，這讓它能夠高效地管理和檢索用戶資料。

與其他 AI 助手相比，如 OpenAI 的 ChatGPT，Mercury 提供了更強的權限管理和記憶功能，能夠在執行命令前詢問用戶，並且有明確的權限設定。使用者可以透過 `mercury up` 命令將其設置為背景服務，並在系統啟動時自動運行，這對於需要持續運行的任務非常有用。儘管如此，Mercury 仍然有一些限制，例如在 Windows 上的安裝問題，這可能會影響某些用戶的體驗。整體而言，Mercury 是一個穩定的選擇，適合需要持續運行和記憶功能的用戶，尤其是那些在多通道環境中工作的團隊。

**技術棧**：`TypeScript` · `SQLite` · `Node.js`

## 重點功能

- 第二大腦 — 具備 10 種記憶類型（如身份、目標、習慣），並使用 SQLite 進行資料管理。
- 權限管理 — 執行命令前會詢問用戶，並提供 shell 阻擋清單以避免危險操作。
- 多通道支持 — 同時在 CLI 和 Telegram 上運行，支持多用戶訪問和即時消息。
- 實時流式傳輸 — CLI 和 Telegram 上的實時文本流，支持 Markdown 格式。
- 自動化任務調度 — 使用 cron 表達式進行定期任務調度，並能夠持久化任務設定。

## 快速開始

1. 安裝 Mercury Agent
```bash
npx @cosmicstack/mercury-agent
```
2. 全域安裝
```bash
npm i -g @cosmicstack/mercury-agent
```
3. 啟動設置嚮導
```bash
mercury
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Mercury Agent",
  "指令": "mercury up",
  "預期輸出": "安裝系統服務並啟動背景進程，確保 Mercury 正在運行。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 在建立的 5 天內，Mercury Agent 累積了 1124 stars（每天 225），forks 數量為 129（11.5%），顯示出強勁的增長潛力。主要貢獻者來自 Cosmic Stack 團隊，他們過去在 AI 和開源工具方面有豐富經驗。這個專案解決了許多現有 AI 助手在記憶和權限管理上的不足，特別是能夠在多通道環境中提供持續的支持。社群的反饋也促進了功能的快速迭代，像是對於 Telegram 支援的需求。這些因素共同推動了 Mercury 的快速成長。

## 適合誰使用

**目標受眾**：需要一個能夠持續運行並記住上下文的 AI 助手的開發者和團隊。

> [!example] 使用場景
> - 產品經理用它來管理多個項目的進度，因為它能夠記住每個項目的關鍵資訊和進展，避免重複查詢。
> - 開發者用它來自動化日常任務，如代碼提交和文件管理，因為它的 CLI 工具能夠快速執行命令並記錄歷史。
> - 團隊領導用它來協調團隊成員的任務分配，因為它的 Telegram 整合讓多用戶管理變得簡單高效。

## 架構分析

Mercury Agent 採用模組化設計，核心是基於 Node.js 的服務，並使用 SQLite 作為資料存儲。這種設計使得 Mercury 能夠在不同平台上運行，並保持輕量級。資料流方面，使用者的輸入通過 CLI 或 Telegram 接收，然後經過一系列的處理，最終將結果返回給用戶。

選擇 SQLite 作為資料庫的原因是其輕量和高效，適合用於持久化存儲。這樣的架構設計使得 Mercury 能夠快速啟動並在高負載下保持穩定，但在資料擴展性上可能會遇到瓶頸。整體而言，這種設計使得 Mercury 在多通道支持和即時反應方面表現出色。

## 技術深入分析

Mercury Agent 的核心技術在於其靈魂驅動的設計，這使得它能夠根據用戶的需求進行個性化的回應。使用 SQLite 作為資料庫，讓 Mercury 能夠高效地存儲和檢索用戶的記憶資料。這種設計不僅提高了性能，還支持全文字搜索，方便用戶快速找到所需資訊。在記憶管理上，Mercury 提供了 10 種不同的記憶類型，這讓它能夠靈活地適應不同的使用場景。選擇 Node.js 作為開發語言，則使得 Mercury 能夠在各種平台上運行，並且能夠輕鬆整合各種外部 API。技術上，Mercury 的設計考量了安全性，通過權限管理來防止潛在的安全風險。這些設計選擇使得 Mercury 在多通道環境中表現出色，並能夠持續運行，滿足用戶的需求。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝步驟和範例，讓新手能夠快速上手。安裝過程相對順暢，僅需簡單的命令即可完成設置。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 具備持久記憶功能，能夠在多次對話中保持上下文。
> - 權限管理設計，能夠在執行命令前詢問用戶，增加安全性。
> - 支持多通道運行，能夠在 CLI 和 Telegram 上同時使用，方便團隊協作。

> [!danger] 缺點
> - 不支援 Windows，限制了部分用戶的使用。
> - 需要用戶手動配置，對新手來說可能有一定的學習曲線。
> - 在高負載下可能會出現延遲，影響使用體驗。

> [!warning] 注意事項
> - 不支援 Windows 安裝，可能會影響部分用戶的使用體驗。
> - 在高負載情況下，可能會出現延遲，特別是在多用戶同時訪問時。
> - 需要用戶手動配置 API 金鑰和權限設定，對新手來說可能有一定的學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的多通道支持，但缺乏 Mercury 的持久記憶和權限管理功能。 |
| [Einsia/OpenChronicle](https://github.com/Einsia/OpenChronicle) | 專注於時間管理和日程安排，但不具備 Mercury 的靈魂驅動特性和多種記憶類型。 |
| [VoltAgent/awesome-claude-design](https://github.com/VoltAgent/awesome-claude-design) | 提供 AI 助手功能，但在記憶和用戶交互方面不如 Mercury 靈活。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的多通道支持，但缺乏 Mercury 的持久記憶和權限管理功能。 | 如果需要一個簡單的多通道 AI 助手，且不需要記憶功能，可以考慮這個工具。 | medium - 需要重新配置和適應新的命令結構。 |
| [Einsia/OpenChronicle](https://github.com/Einsia/OpenChronicle) | 專注於時間管理和日程安排，但不具備 Mercury 的靈魂驅動特性和多種記憶類型。 | 如果主要需求是日程管理而非全面的 AI 助手功能，這個工具會更合適。 | low - 主要是功能適應，不需重新配置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **mercury-agent** | **boneyard** | **OpenChronicle** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的多通道支持，但缺乏 Mercury 的持久記憶和權限管理功能。 | 專注於時間管理和日程安排，但不具備 Mercury 的靈魂驅動特性和多種記憶類型。 |
> | 遷移成本 | - | medium - 需要重新配置和適應新的命令結構。 | low - 主要是功能適應，不需重新配置。 |
> | 適用場景 | 主要場景 | 如果需要一個簡單的多通道 AI 助手，且不需要記憶功能，可以 | 如果主要需求是日程管理而非全面的 AI 助手功能，這個工具會 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 上安裝時會遇到問題，無法正常運行。
  - 解法：使用 Linux 或 macOS 環境進行安裝。
- [MEDIUM] 高負載情況下，可能會出現延遲。
  - 解法：減少同時使用者數量或調整任務調度。
- [MEDIUM] 需要手動配置 API 金鑰，對新手來說可能有困難。
  - 解法：參考官方文檔進行設置，或尋求社群幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 具備持久記憶和多通道支持，能夠有效協調團隊工作。 |
| 大型企業的多部門協作 | 普通 | 雖然功能強大，但在高負載下可能會遇到延遲。 |
| 個人項目或開發者工具 | 非常適合 | 簡單易用，能夠快速上手並提供持久記憶功能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到一個持久記憶的 AI 助手，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，並且有明確的權限管理設計，能夠有效防止未經授權的操作。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
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
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
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
| Forks | 129 |
| Open Issues | 8 |
| Issue 解決率 | 11% (1 closed) |
| 最後推送 | 2026-04-25 |
| 建立日期 | 2026-04-20 |
| 官方網站 | [Link](https://mercury.cosmicstack.org/) |
| Repo 大小 | 1.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/cosmicstack-labs/mercury-agent) |
| Topics | `ai-agent` `ai-assistant` `llm` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@ai-sdk/anthropic` `@ai-sdk/openai` `@grammyjs/auto-retry` `ai` `chalk` `commander` `dotenv` `grammy` `js-tiktoken` `marked` `node-cron` `ollama-ai-provider` `pino` `yaml` `zod`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 98
>     "JavaScript" : 1
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@hotheadhacker](https://github.com/hotheadhacker) | 107 |
> | [@zaidbinmushtaq](https://github.com/zaidbinmushtaq) | 16 |
> | [@shehzensidiq](https://github.com/shehzensidiq) | 15 |
> | [@mercuryagent](https://github.com/mercuryagent) | 4 |

**最新版本**：v1.0.0 — v1.0.0 — Second Brain (2026-04-23)

> [!info]- Release Notes
> ## Mercury v1.0.0 — Second Brain
> 
> This is a **major release** introducing the Second Brain — a persistent, structured memory system backed by SQLite with full-text search — alongside fundamental changes to how Mercury stores data and renders output.
> 
> ### Why 1.0.0?
> 
> Mercury has been in rapid development through 0.x releases. The Second Brain represents a fundamental capability shift: Mercury now **remembers** across conversations, automatically extracting, consolidating, and recalling facts about you. Combined with the all-in-`~/.mercury/` data architecture and live CLI streaming, this marks a stable, production-ready foundation.
> 
> ---
> 
> ### 🧠 Second Brain
> 
> - **10 memory types** — identity, preference, goal, project, habit, decision, constraint, relationship, episode, reflection
> - **Automatic extraction** — after each conversation, Mercury extracts 0–3 facts with confidence, importance, and durability scores
> - **Relevant recall** — before each message, injects top 5 matching memories within a 900-character budget
> - **Auto-consolidation** — every 60 minutes, synthesizes a profile summary, active-state summary, and generates reflection memories
> - **Conflict resolution** — opposing memories resolved by higher confidence or recency; negation detection
> - **Active → Durable promotion** — memories reinforced 3+ times automatically promote to durable scope
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://mercury.cosmicstack.org/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-24 ~ 2026-04-25）
> **活躍天數** 2 天 · **最新 commit** docs: update Discord invite link in README

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/cosmicstack-labs/mercury-agent/issues/2) | README opener could lead with the operator outcome before “s | 2 | 0 |
> | [#10](https://github.com/cosmicstack-labs/mercury-agent/issues/10) | feat: add Lark Suite channel support `enhancement` | 1 | 0 |
> | [#13](https://github.com/cosmicstack-labs/mercury-agent/issues/13) | Service cannot be installed in Windows | 0 | 0 |
> | [#12](https://github.com/cosmicstack-labs/mercury-agent/issues/12) | feat: add support for kimi, glm, custom openai/anthropic com | 0 | 1 |
> | [#11](https://github.com/cosmicstack-labs/mercury-agent/issues/11) | Feature Request: Add Custom Local provider | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> Soul-driven AI agent with permission-hardened tools, token budgets, and multi-channel access.
> 
>   Remembers what matters. Asks before it acts. Runs 24/7 from CLI or Telegram. 31 built-in tools, extensible skills, SQLite-backed Second Brain memory.
> 
>   
>   
>   
> 
> ---
> 
> 
> ## Quick Start
> 
> ```bash
> npx @cosmicstack/mercury-agent
> ```
> 
> Or install globally:
> 
> ```bash
> npm i -g @cosmicstack/mercury-agent
> mercury
> ```
> 
> First run triggers the setup wizard — enter your name, an API key, and optionally a Telegram bot token. Takes 30 seconds.
> 
> To reconfigure later (change keys, name, settings):
> 
> ```bash
> mercury doctor
> ```
> 
> 
> ### Getting Started
> 
> 1. Fork the repo
> 2. Run `npm install`
> 3. Make your changes
> 4. Run `npm run build` to verify it compiles
> 5. Test with `mercury` locally
> 6. Open a PR with a clear description of what you changed and why
> 
> 
> ## Configuration
> 
> All runtime data lives in `~/.mercury/` — not in your project directory.
> 
> | Path | Purpose |
> |------|---------|
> | `~/.mercury/mercury.yaml` | Main config (providers, channels, budget) |
> | `~/.mercury/.env` | API keys and tokens (loaded alongside project .env) |
> | `~/.mercury/soul/*.md` | Agent personality (soul, persona, taste, heartbeat) |
> | `~/.mercury/permissions.yaml` | Capabilities and approval rules |
> | `~/.mercury/skills/` | Installed skills |
> | `~/.mercury/schedules.yaml` | Scheduled tasks |
> | `~/.mercury/token-usage.json` | Daily token usage tracking |
> | `~/.mercury/memory/short-term/` | Per-conversation JSON files |
> | `~/.mercury/memory/long-term/` | Auto-extracted facts (JSONL) |
> | `~/.mercury/memory/episodic/` | Timestamped event log (JSONL) |
> | `~/.mercury/memory/second-brain/` | Structured memory database (SQLite + FTS5) |
> | `~/.mercury/daemon.pid` | Background process PID |
> | `~/.mercury/daemon.log` | Daemon mode logs |
> 
> 
> ## Why Mercury?
> 
> Every AI agent can read files, run commands, and fetch URLs. Most do it silently. **Mercury asks first — and remembers what matters.**
> 
> - **Permission-hardened** — Shell blocklist (`sudo`, `rm -rf /`, etc. never execute). Folder-level read/write scoping. Pending approval flow. Ask Me or Allow All per session. No surprises.
> - **Second Brain** — Persistent, structured memory with SQLite + FTS5 full-text search. 10 memory types, auto-extraction, conflict resolution, auto-consolidation. Mercury learns your preferences, goals, and habits without manual entry.
> - **Soul-driven** — Personality defined by markdown files you own (`soul.md`, `persona.md`, `taste.md`, `heartbeat.md`). No corporate wrapper.
> - **Token-aware** — Daily budget enforcement. Auto-concise when over 70%. `/budget` command to check, reset, or override.
> - **Live streaming** — Real-time token streaming on CLI with cursor-save/restore and markdown re-rendering. Telegram streaming with editable status messages.
> - **Always on** — Run as a background daemon on any OS. Auto-restarts on crash. Starts on boot. Cron scheduling, heartbeat monitoring, and proactive notifications.
> - **Extensible** — Install community skills with a single command. Schedule skills as recurring tasks. Based on the [Agent Skills](https://agentskills.io) specification.
> 
> 
> ## Daemon Mode
> 
> **One command to make Mercury persistent:**
> 
> ```bash
> mercury up
> ```
> 
> This installs the system service (if not installed), starts the background daemon, and ensures Mercury is running. Use this as your go-to command.
> 
> If Mercury is already running, `mercury up` just confirms it and shows the PID.
> 
> 
> ### Other daemon commands
> 
> ```bash
> mercury restart      # Restart the background process
> mercury stop         # Stop the background process
> mercury start -d     # Start in background (without service install)
> mercury logs         # View recent daemon logs
> mercury status       # Show if daemon is running
> ```
> 
> Daemon mode includes built-in crash recovery — if the process crashes, it restarts automatically with exponential backoff (up to 10 restarts per minute).
> 
> 
> ### System Service (auto-start on boot)
> 
> `mercury up` installs this automatically. You can also manage it directly:
> 
> ```bash
> mercury service install
> ```
> 
> | Platform | Method | Requires Admin |
> |----------|--------|---------------|
> | **macOS** | LaunchAgent (`~/Library/LaunchAgents/`) | No |
> | **Linux** | systemd user unit (`~/.config/systemd/user/`) | No (linger for boot) |
> | **Windows** | Task Scheduler (`schtasks`) | No |
> 
> ```bash
> mercury service status     # Check if service is running
> mercury service uninstall  # Remove the system service
> ```
> 
> In daemon mode, Telegram becomes your primary channel — CLI is log-only since there's no terminal for input.
> 
> 
> ## CLI Commands
> 
> | Command | Description |
> |---------|-------------|
> | `mercury up` | **Recommended.** Install service + start daemon + ensure running |
> | `mercury` | Start the agent (same as `mercury start`) |
> | `mercury start` | Start in foreground |
> | `mercury start -d` | Start in background (daemon mode) |
> | `mercury restart` | Restart the background process |
> | `mercury stop` | Stop a background process |
> | `mercury logs` | View recent daemon logs |
> | `mercury doctor` | Reconfigure (Enter to keep current values) |
> | `mercury setup` | Re-run the setup wizard |
> | `mercury status` | Show config and daemon status |
> | `mercury help` | Show full manual |
> | `mercury upgrade` | Upgrade to latest version |
> | `mercury telegram list` | List approved and pending Telegram users |
> | `mercury telegram approve ` | Approve a pairing code or pending request |
> | `mercury telegram reject ` | Reject a pending Telegram access request |
> | `mercury telegram remove ` | Remove an approved Telegram user |
> | `mercury telegram promote ` | Promote a Telegram member to admin |
> | `mercury telegram demote ` | Demote a Telegram admin to member |
> | `mercury telegram reset` | Clear all Telegram access and start fresh |
> | `mercury service install` | Install as system service (auto-start on boot) |
> | `mercury service uninstall` | Uninstall system service |
> | `mercury service status` | Show system service status |
> | `mercury --verbose` | Start with debug logging |
> 
> 
> ## In-Chat Commands
> 
> Type these during a conversation — they don't consume API tokens. Work on both CLI and Telegram.
> 
> | Command | Description |
> |---------|-------------|
> | `/help` | Show the full manual |
> | `/status` | Show agent config, budget, and usage |
> | `/tools` | List all loaded tools |
> | `/skills` | List installed skills |
> | `/stream` | Toggle Telegram text streaming |
> | `/stream off` | Disable streaming (single message) |
> | `/budget` | Show token budget status |
> | `/budget override` | Override budget for one request |
> | `/budget reset` | Reset usage to zero |
> | `/budget set ` | Change daily token budget |
> | `/permissions` | Change permission mode (Ask Me / Allow All) |
> | `/tasks` | List scheduled tasks |
> | `/memory` | View and manage second brain memory |
> | `/unpair` | Telegram: reset all access |
> 
> 
> ## Built-in Tools
> 
> | Category | Tools |
> |----------|-------|
> | **Filesystem** | `read_file`, `write_file`, `create_file`, `edit_file`, `list_dir`, `delete_file`, `send_file`, `approve_scope` |
> | **Shell** | `run_command`, `cd`, `approve_command` |
> | **Messaging** | `send_message` |
> | **Git** | `git_status`, `git_diff`, `git_log`, `git_add`, `git_commit`, `git_push` |
> | **Web** | `fetch_url` |
> | **Skills** | `install_skill`, `list_skills`, `use_skill` |
> | **Scheduler** | `schedule_task`, `list_scheduled_tasks`, `cancel_scheduled_task` |
> | **System** | `budget_status` |
> 
> 
> ## Channels
> 
> | Channel | Features |
> |---------|----------|
> | **CLI** | Readline prompt, arrow-key command menus, real-time text streaming with markdown re-rendering, permission mode picker |
> | **Telegram** | HTML formatting, editable streaming messages, file uploads, typing indicators, multi-user access with admin/member roles |
> 
> 
> ### Telegram Access
> 
> Mercury uses an **organization access model** with admins and members.
> 
> - **First-time setup:** Send `/start` to your bot, receive a pairing code, enter it in the CLI with `mercury telegram approve `. You be

## 延伸閱讀

相關概念：[[Agent 框架]] · [[多模態]] · [[自動化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[VoltAgent--awesome-claude-design|VoltAgent/awesome-claude-design]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[farzaa--clicky|farzaa/clicky]] · [[xixu-me--awesome-persona-distill-skills|xixu-me/awesome-persona-distill-skills]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[ConardLi--garden-skills|ConardLi/garden-skills]]

[GitHub](https://github.com/cosmicstack-labs/mercury-agent) · [官方網站](https://mercury.cosmicstack.org/)

## 相關收錄

> [!note]- 直接競品（同子分類：AI Agent）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI Agent" AND file.name != "cosmicstack-labs--mercury-agent"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "cosmicstack-labs--mercury-agent"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "cosmicstack-labs--mercury-agent" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "cosmicstack-labs--mercury-agent"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Agent 框架","多模態","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "cosmicstack-labs--mercury-agent" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "cosmicstack-labs--mercury-agent" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "cosmicstack-labs" AND file.name != "cosmicstack-labs--mercury-agent"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
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
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
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
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
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
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
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
> const me = dv.page("Repos/cosmicstack-labs--mercury-agent");
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

> **2026-04-26** — 首次收錄
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

- [[2026-04-27|2026-04-27]] — 再次上榜，1.4k stars
- [[2026-04-26|2026-04-26]] — 首次收錄，1.1k stars
