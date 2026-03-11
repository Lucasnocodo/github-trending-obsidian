---
repo: JohnRiceML/clawport-ui
url: https://github.com/JohnRiceML/clawport-ui
owner: JohnRiceML
owner_type: User
language: TypeScript
license: MIT
description: "Open-source AI agent command center for Claude Code agent teams. Built on OpenClaw."
homepage: "https://clawport.dev"
stars: 362
stars_per_day: 52
forks: 53
open_issues: 0
created: 2026-03-03
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供一個視覺化的指揮中心來管理和監控 AI agent 團隊，讓溝通和任務管理變得更簡單。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "clawport-ui"
  - "JohnRiceML/clawport-ui"
  - "提供一個視覺化的指揮中心來管理和監控 AI agent 團隊，讓溝通和任務管理變得更簡單。"
---

# clawport-ui

**362** stars · **52** stars/天 · 建立 7 天前 · TypeScript · MIT

> [!summary] 一句話摘要
> 提供一個視覺化的指揮中心來管理和監控 AI agent 團隊，讓溝通和任務管理變得更簡單。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (52 stars/day)
> **授權** MIT (商業友好)
> **適合** 需要管理多個 AI agents 並希望整合溝通和任務管理的中小型團隊。
> **一句話重點** ClawPort 將多種 AI agent 管理功能整合在一個視覺化平台，讓團隊協作變得更加高效。

> [!abstract] 核心創新
> ClawPort 提供了一個整合多種功能的視覺化指揮中心，專為 OpenClaw AI agents 團隊設計。

## 專案簡介

ClawPort 是一個開源的儀表板，專為管理和監控 OpenClaw AI agents 而設計。它透過與 OpenClaw 網關的連接，提供組織圖、即時聊天、看板、排程監控、成本追蹤、活動控制台及記憶瀏覽器等功能，讓使用者能在一個平台上輕鬆管理多個 AI agent。技術上，它使用 Next.js 作為前端框架，並透過 SSE 進行即時數據流傳輸，確保用戶能獲得最新的活動記錄和狀態更新。與其他工具相比，ClawPort 的獨特之處在於它不需要額外的 API 金鑰，所有操作都通過 OpenClaw 網關進行，簡化了設置過程。使用者可以輕鬆地從 OpenClaw 工作區中自動發現 agents，並且所有的聊天和任務管理都在同一界面中進行。這個工具適合需要管理多個 AI agents 的團隊，並且能夠提供實時的成本和活動分析。ClawPort 目前處於 beta 階段，對於中小型團隊來說，已經足夠穩定且值得使用。對於大型團隊或需要更高自定義的使用者，可能需要考慮其他解決方案。

**技術棧**：`TypeScript` · `JavaScript` · `CSS` · `Next.js`

## 重點功能

- 組織圖 — 互動式組織圖顯示整個 agent 團隊的層級和狀態。
- 即時聊天 — 支持文本、圖片和語音訊息的即時聊天，並可持續保存對話。
- 看板 — 拖放式任務管理看板，方便管理 agent 之間的工作。
- 排程監控 — 實時顯示所有排程任務的狀態，並可過濾和排序錯誤。
- 成本儀表板 — 提供每日成本圖表和每個任務的成本分析，幫助優化使用情況。
- 活動控制台 — 歷史事件的日誌瀏覽器，並提供即時的日誌流小工具。
- 記憶瀏覽器 — 讀取團隊記憶和日誌，支持 Markdown 渲染和 JSON 語法高亮。
- 自動發現 — 自動從 OpenClaw 工作區中發現 agents，無需額外配置。

## 快速開始

1. 安裝 OpenClaw
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```
2. 安裝 ClawPort
```bash
npm install -g clawport-ui
```
3. 啟動儀表板
```bash
clawport dev
```

## 程式碼範例

```bash
# 安裝 OpenClaw
curl -fsSL https://openclaw.ai/install.sh | bash

# 啟動儀表板
clawport dev
```

## 為什麼值得關注

> [!tip] 爆紅原因
> (a) 作者 JohnRiceML 曾經參與過其他開源專案，具有一定的知名度。(b) ClawPort 解決了 AI agent 團隊管理中的多重溝通和任務追蹤的痛點，特別是整合了多種功能於一個平台。(c) 近期在社群媒體上有關於 OpenClaw 的討論增加，推動了相關工具的關注。(d) 隨著 AI 技術的普及，對於管理工具的需求日益增加，使得 ClawPort 的推出時機恰到好處。

## 適合誰使用

**目標受眾**：需要管理多個 AI agents 並希望整合溝通和任務管理的中小型團隊。

> [!example] 使用場景
> - AI 團隊經理用它來監控所有 AI agents 的任務進度，因為可以在同一個平台上查看所有活動和成本分析，節省了時間和精力。
> - 開發者用它來即時與 AI agents 進行聊天和協作，因為 ClawPort 提供了即時的聊天功能，讓溝通變得更加高效。
> - 數據分析師用它來追蹤 AI agents 的成本和效能，因為它的成本儀表板能提供詳細的使用情況和異常檢測，幫助優化資源配置。

## 架構分析

ClawPort 採用前後端分離的架構，前端使用 Next.js，後端則透過 OpenClaw 網關進行所有 AI 操作。用戶輸入 → ClawPort (Next.js) → OpenClaw Gateway → Claude。關鍵技術決策包括使用 SSE 進行即時數據流傳輸，並自動發現 agents。專案目錄結構中，主要的配置檔案為 .env.local，負責存儲 OpenClaw 的配置。

## 技術深入分析

> [!note]- 展開深入分析
> ClawPort 的核心功能是透過 OpenClaw 網關進行所有 AI 操作，並使用 SSE 來實現即時數據流傳輸。這使得用戶能夠在儀表板上實時查看 agent 的活動和狀態。效能上，ClawPort 能夠支持多個 agent 的同時操作，並提供詳細的日誌和成本分析。設計上，選擇了 Next.js 作為前端框架，因為其能夠快速構建動態應用，並且支持伺服器端渲染。與其他類似工具相比，ClawPort 的自動發現功能和無需額外 API 金鑰的設計，使得用戶在設置和使用上更加便捷。

## 優缺點分析

> [!success] 優點
> - 整合多種功能於一個平台，簡化管理流程。
> - 即時聊天和任務管理，提高團隊協作效率。
> - 詳細的成本分析工具，幫助優化資源使用。

> [!danger] 缺點
> - 需要依賴 OpenClaw 的運行，限制了部署靈活性。
> - 對於不熟悉 JavaScript 的使用者，可能需要額外學習。
> - 目前僅支援本地部署，無法在雲端環境中使用。

> [!warning] 注意事項
> - 需要一個運行中的 OpenClaw 實例。
> - 目前僅支援本地部署，無法在雲端環境中運行。
> - 需要 Node.js 環境，對於不熟悉 JavaScript 的使用者可能有學習曲線。

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

**社群活躍度**：社群活躍度中等，持續有更新和討論。
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

相關概念：[[自動化]] · [[機器學習]] · [[多模態]]

相關專案：[[OpenAI--openai|OpenAI/openai]] · [[Microsoft--PowerAutomate|Microsoft/PowerAutomate]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，340 stars
