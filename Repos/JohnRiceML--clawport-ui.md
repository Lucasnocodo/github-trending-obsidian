---
repo: JohnRiceML/clawport-ui
url: https://github.com/JohnRiceML/clawport-ui
owner: JohnRiceML
owner_type: User
language: TypeScript
license: MIT
description: "Open-source AI agent command center for Claude Code agent teams. Built on OpenClaw."
homepage: "https://clawport.dev"
stars: 351
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
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "clawport-ui"
  - "JohnRiceML/clawport-ui"
  - "提供一個可視化的指揮中心來管理和監控 AI agent 團隊。"
---

# clawport-ui

**351** stars · **50** stars/天 · 建立 7 天前 · TypeScript · MIT

`easy-install`

> [!summary] 一句話摘要
> 提供一個可視化的指揮中心來管理和監控 AI agent 團隊。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (50 stars/day)
> **適合** 需要集中管理多個 AI agents 的中小型團隊。
> **一句話重點** ClawPort 的強大在於它能夠無縫整合多個 AI agents 的管理，讓團隊協作變得更加高效。

> [!abstract] 核心創新
> ClawPort 提供了一個無需額外 API 金鑰的集中管理平台，簡化了多 agent 環境的操作。

## 專案簡介

ClawPort 是一個開源的儀表板，專為管理和監控 OpenClaw AI agents 而設計。用戶可以透過這個平台與 AI agents 進行即時對話，並使用多種功能如任務看板、日程監控和成本追蹤。它透過與 OpenClaw gateway 的連接，實現所有 AI 操作的統一管理，無需額外的 API 金鑰。技術上，它使用了 Next.js 來構建前端，並支持實時的流數據流和視覺化。相比於其他類似工具，ClawPort 的獨特之處在於其無縫整合的功能和自動發現 agent 的能力。使用者可以輕鬆查看 agent 的歷史活動和即時日誌，並進行成本分析。該工具適合中小型團隊，並且目前處於穩定階段，值得立即使用。建議在需要集中管理多個 AI agents 時使用，但如果只需要單一 agent 的簡單管理，則可能過於複雜。

**技術棧**：`Next.js` · `OpenClaw`

## 重點功能

- Org Map — 互動式的組織圖，顯示 agent 團隊的層級和狀態。
- Chat — 支持即時文本、圖像和音訊消息的聊天功能，對話可持久化。
- Kanban — 任務看板，支持拖放操作，方便管理工作進度。
- Cron Monitor — 實時監控所有排程任務的狀態，自動刷新。
- Cost Dashboard — 提供代幣使用和成本分析，幫助識別異常和優化開支。
- Activity Console — 歷史事件的日誌瀏覽器，支持實時流式日誌顯示。
- Memory Browser — 團隊記憶的瀏覽器，支持 Markdown 渲染和 JSON 語法高亮。

## 快速開始

1. 安裝 OpenClaw
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```
2. 運行 OpenClaw 的 onboarding wizard
```bash
openclaw onboard --install-daemon
```
3. 安裝 ClawPort
```bash
npm install -g clawport-ui
```
4. 啟動 ClawPort 儀表板
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
> JohnRiceML 是一位在 AI 領域有豐富經驗的開發者，ClawPort 直接滿足了團隊管理 AI agents 的需求。隨著 AI 技術的普及，對於集中管理的需求也隨之增加，特別是在多 agent 環境中。這個專案的推出時機正好切中了市場的痛點。

## 適合誰使用

**目標受眾**：需要集中管理多個 AI agents 的中小型團隊。

> [!example] 使用場景
> - AI 團隊經理用它來監控多個 AI agents 的任務進度，因為可以透過可視化的看板快速了解每個 agent 的狀態，提升管理效率。
> - 開發者用它來即時查看 AI agents 的日誌和活動，因為這樣可以快速定位問題，減少排錯時間。
> - 財務分析師用它來追蹤 AI agents 的運行成本，因為它提供了詳細的成本分析和異常檢測，幫助優化預算。

## 架構分析

ClawPort 採用前後端分離的架構，前端使用 Next.js，後端透過 OpenClaw gateway 進行 AI 操作。用戶輸入 → ClawPort → OpenClaw Gateway → Claude。關鍵技術決策包括使用實時數據流和自動發現 agent 的功能。目錄結構中，主要檔案包括 `src` 和 `public` 目錄，分別用於源碼和靜態資源。

## 優缺點分析

> [!success] 優點
> - 提供全面的 AI agent 管理功能，無需額外 API 金鑰。
> - 即時監控和日誌功能，便於排錯和管理。
> - 可視化的任務看板和組織圖，提升團隊協作效率。

> [!danger] 缺點
> - 需要依賴 OpenClaw，增加了安裝和配置的複雜性。
> - 對於小型項目來說，功能可能過於龐大。
> - 目前僅支持本地環境，無法在雲端使用。

> [!warning] 注意事項
> - 需要一個運行中的 OpenClaw 實例。
> - 目前僅支持本地部署，無法在雲端環境運行。
> - 對於大型團隊，可能需要額外的性能優化。

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
**連結**：[文件](https://clawport.dev)

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

相關概念：[[Agent 框架]] · [[CI/CD]]

[GitHub](https://github.com/JohnRiceML/clawport-ui) · [官方網站](https://clawport.dev)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "JohnRiceML--clawport-ui"
> SORT stars DESC
> LIMIT 8
> ```

---

## 個人筆記

> [!question]+ 快速評估（第一次看時填寫）
> _填寫後更新 frontmatter 的 `my_rating` 和 `status` 欄位_
> 
> **跟我的工作相關嗎？** 是 / 否 / 間接相關
> **值得花時間試用嗎？** 是 / 以後再說 / 不需要
> **第一印象**：_一句話_

> [!success]- 深度評估（試用後填寫）
> 
> | 項目 | 分數 (1-5) | 備註 |
> | --- | :---: | --- |
> | 實用性 | /5 | |
> | 技術新穎性 | /5 | |
> | 文件品質 | /5 | |
> | 社群活躍度 | /5 | |
> | 上手難度 | /5 | 1=很難 5=很簡單 |
> 
> **成熟度**：早期 / 可用 / 穩定
> **總評**：_整體評價、跟其他工具的比較、推薦給誰..._

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
