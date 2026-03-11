---
repo: JohnRiceML/clawport-ui
url: https://github.com/JohnRiceML/clawport-ui
owner: JohnRiceML
owner_type: User
language: TypeScript
license: MIT
description: "Open-source AI agent command center for Claude Code agent teams. Built on OpenClaw."
homepage: "https://clawport.dev"
stars: 355
stars_per_day: 51
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
use_case: "提供一個可視化的指揮中心來管理和監控你的 AI agent 團隊。"
priority: medium
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "clawport-ui"
  - "JohnRiceML/clawport-ui"
  - "提供一個可視化的指揮中心來管理和監控你的 AI agent 團隊。"
---

# clawport-ui

**355** stars · **51** stars/天 · 建立 7 天前 · TypeScript · MIT

> [!summary] 一句話摘要
> 提供一個可視化的指揮中心來管理和監控你的 AI agent 團隊。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (51 stars/day)
> **適合** 需要集中管理多個 AI agent 的中小型團隊。
> **一句話重點** ClawPort 的強大之處在於它的可視化管理，讓 AI agent 的操作變得直觀且高效。

> [!abstract] 核心創新
> ClawPort 提供了一個無需額外 API 金鑰的集中管理平台，專為 OpenClaw AI agents 設計。

## 專案簡介

ClawPort 是一個開源的儀表板，專為管理和監控 OpenClaw AI agents 而設計。它透過 OpenClaw 網關連接，提供組織圖、即時聊天、看板管理、排程監控、成本追蹤和活動控制台等功能。用戶可以直接與 AI agent 進行對話，並透過視覺和語音進行互動，所有操作不需要額外的 API 金鑰。技術上，ClawPort 使用 Next.js 作為前端框架，並透過 SSE 進行即時數據流傳輸。與其他工具相比，ClawPort 的獨特之處在於它的無縫整合與 OpenClaw，並提供了豐富的可視化工具來管理多個 agent。實際使用中，ClawPort 能夠有效地追蹤 token 使用情況，並提供優化建議，但需要一個運行中的 OpenClaw 實例。這個專案目前處於 beta 階段，適合中小型團隊使用。對於需要集中管理多個 AI agent 的場景，ClawPort 是一個不錯的選擇，但如果你的需求較簡單，可能不需要這麼複雜的工具。

**技術棧**：`TypeScript` · `JavaScript` · `CSS` · `Next.js`

## 重點功能

- 組織圖 — 互動式組織圖顯示 agent 團隊的層級和狀態，使用 React Flow 自動佈局。
- 即時聊天 — 支持文本、圖像和語音消息的即時聊天，並可進行文件附件和拖放操作。
- 看板管理 — 提供可拖放的任務板，方便管理 agent 之間的工作流。
- 排程監控 — 實時顯示所有排定任務的狀態，並每 60 秒自動刷新。
- 成本儀表板 — 提供 token 使用情況和成本分析，並顯示每個任務的成本細分。

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
> JohnRiceML 是開源社群的活躍成員，這個專案切中了對於 AI agent 管理的需求。隨著 OpenClaw 的普及，ClawPort 提供了一個直觀的界面來簡化管理流程，這使得它在開源社群中迅速受到關注。

## 適合誰使用

**目標受眾**：需要集中管理多個 AI agent 的中小型團隊。

> [!example] 使用場景
> - AI 團隊經理用它來監控所有 agent 的運行狀態，因為可以即時查看 cron 任務的狀態和錯誤，節省了手動檢查的時間。
> - 開發者用它來與 AI agent 進行即時對話，因為它支持語音和視覺互動，提升了溝通的效率。
> - 產品經理用它來追蹤 AI agent 的成本使用情況，因為可以透過成本儀表板快速分析 token 使用和異常，幫助預算控制。

## 架構分析

ClawPort 採用前後端分離的架構，前端使用 Next.js，後端則依賴 OpenClaw 網關進行 AI 操作。用戶輸入通過 ClawPort 進行處理，然後轉發至 OpenClaw 網關，最終與 AI agent 進行互動。專案目錄結構包括主要的 src 目錄，包含所有前端邏輯和組件。

## 技術深入分析

> [!note]- 展開深入分析
> ClawPort 的核心在於其與 OpenClaw 的深度整合，所有 AI 操作都透過 OpenClaw 網關進行，這意味著用戶無需管理多個 API 金鑰。效能上，ClawPort 能夠實時更新 agent 狀態和活動日誌，確保用戶獲得最新資訊。設計上，ClawPort 使用 React Flow 進行組織圖的可視化，這使得管理複雜的 agent 團隊變得更加簡單。與其他競品相比，ClawPort 的即時聊天和任務管理功能更為強大，特別適合需要協作的 AI 團隊。

## 優缺點分析

> [!success] 優點
> - 提供全面的 AI agent 管理工具，整合多種功能於一體。
> - 即時監控和聊天功能提升了團隊協作效率。
> - 無需額外的 API 金鑰，簡化了設置過程。

> [!danger] 缺點
> - 需要依賴 OpenClaw，對於不使用該平台的用戶無法使用。
> - 目前處於 beta 階段，可能存在不穩定性。
> - 安裝和配置過程相對複雜，需要一定的技術背景。

> [!warning] 注意事項
> - 需要運行中的 OpenClaw 實例。
> - 目前僅支援 Node.js 環境。
> - 需要額外的配置來連接自定義的 OpenClaw 網關。
> - beta 階段，可能存在不穩定的功能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[OpenAI--openai\|OpenAI/openai]] | OpenAI 的 API 提供了強大的 AI 功能，但缺乏 ClawPort 的可視化管理和即時監控功能。 |
| [[Microsoft--PowerAutomate\|Microsoft/PowerAutomate]] | Power Automate 提供了自動化工作流，但不專注於 AI agent 的管理和監控。 |

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

相關概念：[[多模態]] · [[自動化測試]] · [[機器學習]]

相關專案：[[OpenAI--openai|OpenAI/openai]] · [[Microsoft--PowerAutomate|Microsoft/PowerAutomate]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

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
