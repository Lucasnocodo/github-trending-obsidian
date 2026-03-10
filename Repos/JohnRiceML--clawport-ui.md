---
repo: JohnRiceML/clawport-ui
url: https://github.com/JohnRiceML/clawport-ui
owner: JohnRiceML
owner_type: User
language: TypeScript
license: MIT
description: "Open-source AI agent command center for Claude Code agent teams. Built on OpenClaw."
homepage: "https://clawport.dev"
stars: 344
stars_per_day: 49
forks: 53
open_issues: 1
created: 2026-03-03
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "AI/ML"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/ai_ml"
  - "lang/typescript"
aliases:
  - "clawport-ui"
  - "JohnRiceML/clawport-ui"
  - "提供一個視覺化的指揮中心來管理和監控 AI agent 團隊。"
---

# clawport-ui

**344** stars · **49** stars/天 · 建立 7 天前 · TypeScript · MIT

> [!summary] 一句話摘要
> 提供一個視覺化的指揮中心來管理和監控 AI agent 團隊。

> [!abstract] 核心創新
> ClawPort 提供了一個無需額外 API 金鑰的集中管理平台，專為 OpenClaw AI agents 設計。

## 專案簡介

ClawPort 是一個用於管理和監控 OpenClaw AI agents 的視覺化儀表板。它透過連接本地的 OpenClaw 閘道，提供組織圖、即時聊天、看板、排程監控、成本追蹤等多種功能。這個專案使用 TypeScript 和 JavaScript 開發，並整合了多種即時數據流和視覺化工具，讓用戶能夠輕鬆管理 AI agents 的運行狀態。與其他工具相比，ClawPort 不需要額外的 API 金鑰，所有操作都通過 OpenClaw 閘道進行，這降低了使用門檻。使用者可以即時查看活動日誌和成本分析，這對於需要精確控制和監控的 AI 團隊特別有用。整體來說，ClawPort 是一個成熟且功能強大的工具，適合需要集中管理多個 AI agents 的專案使用。

**技術棧**：`TypeScript` · `JavaScript` · `CSS`

## 重點功能

- 組織圖顯示 AI agents 的結構和狀態。
- 即時聊天功能支援文字、視覺和語音交流。
- 看板功能提供任務管理和進度追蹤。
- 排程監控功能顯示任務的週期和健康狀態。
- 成本追蹤功能分析 token 使用情況和異常。

## 快速開始

1. 安裝 OpenClaw
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```
2. 運行 onboarding 向導
```bash
openclaw onboard --install-daemon
```
3. 安裝 ClawPort
```bash
npm install -g clawport-ui
```
4. 設置 ClawPort
```bash
clawport setup
```
5. 啟動儀表板
```bash
clawport dev
```

## 為什麼值得關注

> [!tip] 爆紅原因
> JohnRiceML 是一位活躍的開源貢獻者，ClawPort 的開發正好切合了對於 AI agent 管理工具的需求。隨著 AI 技術的普及，許多團隊需要一個集中的平台來管理其 AI agents，這促使 ClawPort 的興起。這個專案的推出時間正好在許多團隊尋求更高效的管理工具之際，因此受到廣泛關注。

## 適合誰使用

**目標受眾**：需要集中管理多個 AI agents 的開發團隊和企業。

> [!example] 使用場景
> - AI 團隊經理用它來監控團隊的 AI agents，因為可以即時查看運行狀態和成本分析。
> - 開發者用它來管理任務和排程，因為看板功能讓任務分配變得更直觀。
> - 數據分析師用它來檢視活動日誌，因為可以快速找到問題並進行調整。

## 架構分析

ClawPort 採用前後端分離架構，前端使用 TypeScript 和 JavaScript，後端透過 OpenClaw 閘道進行數據交互。用戶操作透過儀表板發送請求至 OpenClaw，並即時更新顯示。

## 優缺點分析

> [!success] 優點
> - 無需額外 API 金鑰，降低使用門檻。
> - 提供多種即時監控和管理功能，提升效率。
> - 開源專案，社群支持活躍。

> [!danger] 缺點
> - 需要依賴 OpenClaw 的運行環境。
> - 功能仍在開發中，穩定性可能不如成熟工具。
> - 對於新手來說，初始設置可能有些複雜。

> [!warning] 注意事項
> - 僅支援與 OpenClaw 兼容的環境。
> - 需要本地運行 OpenClaw 才能使用。
> - 目前功能仍在持續開發中，可能會有變動。

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

**社群活躍度**：每週有穩定的更新和社群互動。
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
> git clone https://github.com/Joh

## 延伸閱讀

相關概念：[[AI agent 管理]] · [[實時數據流]] · [[任務管理系統]]

[GitHub](https://github.com/JohnRiceML/clawport-ui) · [官方網站](https://clawport.dev)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "JohnRiceML--clawport-ui"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，340 stars
