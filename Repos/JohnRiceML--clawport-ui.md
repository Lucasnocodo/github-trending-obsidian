---
repo: JohnRiceML/clawport-ui
url: https://github.com/JohnRiceML/clawport-ui
owner: JohnRiceML
owner_type: User
language: TypeScript
license: MIT
description: "Open-source AI agent command center for Claude Code agent teams. Built on OpenClaw."
homepage: "https://clawport.dev"
stars: 353
stars_per_day: 50
forks: 53
open_issues: 0
created: 2026-03-03
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "clawport-ui"
  - "JohnRiceML/clawport-ui"
  - "提供一個可視化的指揮中心來管理和監控 AI agent 團隊，簡化操作流程。"
---

# clawport-ui

**353** stars · **50** stars/天 · 建立 7 天前 · TypeScript · MIT

> [!summary] 一句話摘要
> 提供一個可視化的指揮中心來管理和監控 AI agent 團隊，簡化操作流程。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (50 stars/day)
> **適合** 需要集中管理多個 AI agent 的中大型團隊。
> **一句話重點** ClawPort 的設計理念是將多功能整合於一個平台，讓 AI agent 的管理變得更為直觀和高效。

> [!abstract] 核心創新
> ClawPort 提供了一個無需額外 API 金鑰的集中式管理平台，簡化了多代理的操作流程。

## 專案簡介

ClawPort 是一個開源的儀表板，專為管理和監控 OpenClaw AI agents 而設計。它透過連接到本地的 OpenClaw gateway，提供組織圖、即時聊天、看板管理、計劃監控、成本追蹤等功能，讓使用者能夠在一個平台上進行多項操作。技術上，ClawPort 使用 Next.js 架構，並透過 SSE (Server-Sent Events) 實現即時數據流，支持多種媒介的互動，包括文字、視覺和語音。與其他工具相比，ClawPort 的獨特之處在於其無需額外的 AI API 金鑰，所有操作都通過 OpenClaw gateway 處理，簡化了設置流程。實際使用中，ClawPort 能夠即時顯示所有代理的狀態，並提供詳細的成本分析，適合需要高效管理 AI 團隊的中大型企業。這個專案目前處於穩定階段，值得立即使用，特別適合需要集中管理多個 AI agent 的團隊。若你的需求是簡單的 AI 操作，則可能不需要這麼複雜的工具。

**技術棧**：`TypeScript` · `JavaScript` · `CSS` · `Next.js`

## 重點功能

- Org Map — 互動式組織圖，顯示代理團隊的層級和狀態。
- Chat — 支持即時文字、圖像和語音消息的聊天功能，並可持久化對話。
- Kanban — 拖放式任務管理看板，方便跨代理的任務分配。
- Cron Monitor — 實時監控所有排程任務的狀態，並可過濾和排序錯誤。
- Cost Dashboard — 提供每日成本分析和異常檢測，幫助優化資源使用。
- Activity Console — 歷史事件日誌瀏覽器，支持實時流式日誌顯示。
- Memory Browser — 閱讀團隊記憶和日誌，支持 Markdown 渲染和 JSON 語法高亮。
- Auto-Discovery — 自動發現 OpenClaw 工作區中的代理，無需額外配置。

## 快速開始

1. 安裝 OpenClaw
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```
2. 啟動 OpenClaw 的 onboarding 向導
```bash
openclaw onboard --install-daemon
```
3. 安裝 ClawPort
```bash
npm install -g clawport-ui
```
4. 設置 ClawPort 連接
```bash
clawport setup
```
5. 啟動儀表板
```bash
clawport dev
```

## 程式碼範例

```bash
# 啟動 ClawPort 儀表板
clawport dev
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案由 JohnRiceML 等人開發，作者在 AI 領域有豐富的經驗，並且切中了團隊協作和管理的需求。隨著 AI agent 的普及，對於集中管理的需求日益增加，ClawPort 提供了一個完整的解決方案。這個專案的興起與 OpenClaw 的發展密切相關，因為它依賴於 OpenClaw 的生態系統。

## 適合誰使用

**目標受眾**：需要集中管理多個 AI agent 的中大型團隊。

> [!example] 使用場景
> - AI 團隊經理用它來實時監控所有 AI agent 的運作狀態，因為這樣可以快速發現問題並調整任務分配。
> - 開發者用它來管理和優化 AI agent 的運行成本，因為它提供詳細的成本分析和異常檢測，幫助節省開支。
> - 產品經理用它來協調團隊任務，因為看板功能讓任務分配和進度追蹤變得直觀易懂。

## 架構分析

ClawPort 採用前後端分離的架構，前端使用 Next.js，後端則依賴 OpenClaw gateway 進行所有 AI 操作。用戶輸入 → ClawPort (Next.js) → OpenClaw Gateway → Claude。所有 AI 調用都通過 gateway 處理，這樣用戶無需管理多個 API 金鑰。專案目錄結構包含核心的 `src` 目錄，裡面有組件和頁面設計。

## 優缺點分析

> [!success] 優點
> - 提供全面的 AI agent 管理功能，適合大型團隊使用。
> - 即時監控和成本分析功能，幫助團隊優化資源配置。
> - 無需額外 API 金鑰，簡化了設置流程。

> [!danger] 缺點
> - 需要依賴 OpenClaw，無法獨立使用。
> - 對於小型團隊來說，功能可能過於繁瑣。
> - 安裝和配置過程相對複雜，需一定的技術背景。

> [!warning] 注意事項
> - 僅支援與 OpenClaw 一起使用，無法獨立運作。
> - 需要本地環境中運行 OpenClaw，無法在雲端環境直接使用。
> - 對於小型團隊或單一代理的使用者來說，功能可能過於複雜。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 53 |
| Open Issues | 0 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-03 |
| 官方網站 | [Link](https://clawport.dev) |
| Repo 大小 | 2.4 MB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 97
>     "JavaScript" : 1
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@JohnRiceML](https://github.com/JohnRiceML) | 98 |
> | [@mamercad](https://github.com/mamercad) | 1 |
> | [@zackbart](https://github.com/zackbart) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和維護。
**連結**：[文件](https://clawport.dev/docs)

## README 摘錄

> [!info]- 展開查看原文 README
> # ClawPort
> 
> **A visual command centre for your AI agent team.**
> 
> [](https://www.npmjs.com/package/clawport-ui)
> [](LICENSE)
> [](#testing)
> 
> [Website](https://clawport.dev) | [Setup Guide](SETUP.md) | [API Docs](docs/API.md) | [npm](https://www.npmjs.com/package/clawport-ui)
> 
> ---
> 
> ClawPort is an open-source dashboard for managing, monitoring, and talking directly to your [OpenClaw](https://openclaw.ai) AI agents. It connects to your local OpenClaw gateway and gives you an org chart, direct agent chat with vision and voice, a kanban board, cron monitoring, cost tracking, an activity console with live log streaming, and a memory browser -- all in one place.
> 
> No separate AI API keys needed. Everything routes through your OpenClaw gateway.
> 
> More screenshots
> 
> | | |
> |---|---|
> |  |  |
> | **Chat** -- streaming text, vision, voice, file attachments | **Kanban** -- drag-and-drop task board across agents |
> |  |  |
> | **Pipelines** -- DAG visualization with health checks | **Schedule** -- weekly heatmap and job management |
> |  |  |
> | **Activity** -- historical log browser with JSON expansion | **Live Logs** -- real-time streaming widget |
> |  |  |
> | **Costs** -- token usage, anomalies, optimization insights | **Memory** -- team memory browser with markdown rendering |
> 
> ---
> 
> ## Quick Start
> 
> ### 1. Install OpenClaw
> 
> ClawPort requires a running [OpenClaw](https://openclaw.ai) instance. If you don't have one yet:
> 
> ```bash
> # Install OpenClaw
> curl -fsSL https://openclaw.ai/install.sh | bash
> 
> # Run the onboarding wizard (sets up workspace, gateway, and daemon)
> openclaw onboard --install-daemon
> ```
> 
> After onboarding, verify the gateway is running:
> 
> ```bash
> openclaw gateway status
> ```
> 
> You should see your gateway URL (default `localhost:18789`) and auth token. If you use a custom port, `clawport setup` will detect it automatically. See the [OpenClaw docs](https://docs.openclaw.ai/getting-started) for more detail.
> 
> ### 2. Install ClawPort
> 
> > **Note:** The npm package is `clawport-ui`. The CLI command is `clawport`.
> > Do not install the unrelated `clawport` package.
> 
> ```bash
> npm install -g clawport-ui
> ```
> 
> ### 3. Connect and Launch
> 
> ```bash
> # Auto-detect your OpenClaw config and write .env.local
> clawport setup
> 
> # Start the dashboard
> clawport dev
> ```
> 
> Open [http://localhost:3000](http://localhost:3000). The onboarding wizard walks you through naming your portal, picking a theme, and setting up your operator identity.
> 
> Install from source instead
> 
> ```bash
> git clone https://github.com/JohnRiceML/clawport-ui.git
> cd clawport-ui
> npm install
> npm run setup
> npm run dev
> ```
> 
> ---
> 
> ## Features
> 
> - **Org Map** -- Interactive org chart of your entire agent team. Hierarchy, cron status, and relationships at a glance. Powered by React Flow with auto-layout.
> - **Chat** -- Streaming text chat, image attachments with vision, voice messages with waveform playback, file attachments, clipboard paste and drag-and-drop. Conversations persist locally.
> - **Kanban** -- Task board for managing work across agents. Drag-and-drop cards with agent assignment and chat context.
> - **Cron Monitor** -- Live status of all scheduled jobs. Filter by status, sort errors to top, expand for details. Auto-refreshes every 60 seconds.
> - **Cost Dashboard** -- Token usage and cost analysis across all cron jobs. Daily cost chart, per-job breakdown, model distribution, anomaly detection, week-over-week trends, and cache savings.
> - **Activity Console** -- Log browser for historical events plus a floating live stream widget. Click any log row to expand the raw JSON. The live stream widget persists across page navigation.
> - **Memory Browser** -- Read team memory, long-term memory, and daily logs. Markdown rendering, JSON syntax highlighting, search, and download. Guide tab with categorized best practices.
> - **Agent Detail** -- Full profile per agent: SOUL.md viewer, tools, hierarchy, crons, voice ID, and direct chat link.
> - **Five Themes** -- Dark, Glass, Color, Light, and System. All CSS custom properties --

## 延伸閱讀

相關概念：[[微服務]] · [[API 設計]] · [[自動化測試]]

[GitHub](https://github.com/JohnRiceML/clawport-ui) · [官方網站](https://clawport.dev)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "JohnRiceML--clawport-ui"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "JohnRiceML--clawport-ui"
> SORT stars DESC
> ```

---

## 個人筆記

> [!question]+ 快速評估（30 秒填完）
> 
> 相關性:: 未評估
> 印象:: _一句話_
> 行動:: 不需要
> 
> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_
> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 實際效果 :: _達到預期 / 不如預期（原因）_
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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，340 stars
