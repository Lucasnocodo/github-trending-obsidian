---
repo: JohnRiceML/clawport-ui
url: https://github.com/JohnRiceML/clawport-ui
owner: JohnRiceML
owner_type: User
language: TypeScript
license: MIT
description: "Open-source AI agent command center for Claude Code agent teams. Built on OpenClaw."
homepage: "https://clawport.dev"
stars: 350
stars_per_day: 50
forks: 53
open_issues: 1
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
  - "提供一個視覺化的指揮中心來管理和監控 AI agent 團隊。"
---

# clawport-ui

**350** stars · **50** stars/天 · 建立 7 天前 · TypeScript · MIT

> [!summary] 一句話摘要
> 提供一個視覺化的指揮中心來管理和監控 AI agent 團隊。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (50 stars/day)
> **適合** 需要集中管理多個 AI agents 的中大型團隊。
> **一句話重點** ClawPort 的強大之處在於它將多種管理功能整合到一個平台，讓 AI agent 的管理變得更加高效和直觀。

> [!abstract] 核心創新
> ClawPort 透過整合多種管理功能，提供了一個集中式的 AI agent 管理平台。

## 專案簡介

ClawPort 是一個開源的儀表板，專為管理和監控 OpenClaw AI agents 而設計。用戶可以透過這個平台與 AI agents 進行即時對話，並使用可視化的組織圖、看板、排程監控和成本追蹤等功能。它的核心架構基於 Next.js，並透過 OpenClaw gateway 進行所有 AI 操作，無需額外的 API 金鑰。與其他工具相比，ClawPort 提供了更完整的功能整合，如實時日誌流和記憶瀏覽器，這些功能在同類產品中並不常見。使用者可以輕鬆地追蹤 token 使用情況和成本分析，並且所有的操作都可以在一個界面中完成。這個專案目前處於 beta 階段，適合希望集中管理多個 AI agents 的團隊使用。建議在需要快速部署和管理 AI agents 的情況下使用，但對於小型專案或不需要複雜管理的情況則不太適合。

**技術棧**：`Next.js` · `OpenClaw`

## 重點功能

- Org Map — 互動式組織圖，顯示整個 agent 團隊的層級和狀態。
- Chat — 支持即時文本、圖片和語音消息的聊天功能，並可持久化對話。
- Kanban — 拖放式任務管理看板，方便在多個 agents 之間分配任務。
- Cron Monitor — 實時監控所有排程任務的狀態，並每 60 秒自動刷新。
- Cost Dashboard — 提供 token 使用和成本分析，並顯示異常和優化建議。

## 快速開始

1. 安裝 OpenClaw
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```
2. 啟動 OpenClaw 的 onboarding wizard
```bash
openclaw onboard --install-daemon
```
3. 安裝 ClawPort
```bash
npm install -g clawport-ui
```
4. 設置 ClawPort 並啟動
```bash
clawport setup && clawport dev
```

## 程式碼範例

```bash
# 啟動 ClawPort
clawport dev
```

## 為什麼值得關注

> [!tip] 爆紅原因
> JohnRiceML 是一位活躍的開源貢獻者，ClawPort 直接滿足了對於 AI agent 管理的需求，尤其是在多任務環境中。隨著 AI 技術的普及，越來越多的團隊需要有效的工具來協調和管理其 AI agents，這使得 ClawPort 的需求上升。

## 適合誰使用

**目標受眾**：需要集中管理多個 AI agents 的中大型團隊。

> [!example] 使用場景
> - AI 團隊經理用它來集中管理多個 AI agents 的任務和對話，因為這樣可以提高團隊的協作效率，減少信息孤島的情況。
> - 開發者用它來即時監控 AI agents 的運行狀態和性能，因為可以透過實時日誌流快速發現問題並進行調整。
> - 產品經理用它來分析 AI agents 的成本和效能，因為可以清楚地看到每個任務的 token 使用情況，從而進行預算控制。

## 架構分析

ClawPort 採用前後端分離的架構，前端使用 Next.js，後端透過 OpenClaw gateway 進行 AI 操作。用戶輸入 → ClawPort (Next.js) → OpenClaw Gateway → Claude。關鍵技術決策包括使用 React Flow 來實現組織圖，並且所有 AI 調用都通過 gateway 進行。專案目錄結構中，重要的檔案包括 setup 和 API 文檔。

## 優缺點分析

> [!success] 優點
> - 提供全面的 AI agent 管理功能，無需額外 API 金鑰。
> - 實時監控和日誌流功能，便於快速排查問題。
> - 可視化的組織圖和任務看板，提升團隊協作效率。

> [!danger] 缺點
> - 需要依賴 OpenClaw 的運行，增加了設置的複雜性。
> - 目前處於 beta 階段，可能會有不穩定的情況。
> - 對於小型專案來說，功能可能過於複雜。

> [!warning] 注意事項
> - 需要運行中的 OpenClaw 實例。
> - 目前處於 beta 階段，可能會有不穩定的情況。
> - 不支持自定義的 API 金鑰，所有操作都必須通過 OpenClaw gateway。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 53 |
| Open Issues | 1 |
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

相關概念：[[多模態]] · [[Agent 框架]] · [[CI/CD]]

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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，340 stars
