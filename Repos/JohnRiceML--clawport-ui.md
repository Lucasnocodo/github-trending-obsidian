---
repo: JohnRiceML/clawport-ui
url: https://github.com/JohnRiceML/clawport-ui
owner: JohnRiceML
owner_type: User
language: TypeScript
license: MIT
description: "Open-source AI agent command center for Claude Code agent teams. Built on OpenClaw."
homepage: "https://clawport.dev"
stars: 343
stars_per_day: 57
forks: 52
open_issues: 1
created: 2026-03-03
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "其他"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 其他
  - typescript
aliases:
  - "clawport-ui"
  - "JohnRiceML/clawport-ui"
  - "開源的 AI 代理指揮中心，為 Claude Code 團隊提供管理與監控功能。"
---

# clawport-ui

**343** stars · **57** stars/天 · 建立 6 天前 · TypeScript · MIT

> [!summary] 一句話摘要
> 開源的 AI 代理指揮中心，為 Claude Code 團隊提供管理與監控功能。

> [!abstract] 核心創新
> 提供了一個全面的管理平台，專為 OpenClaw AI 代理團隊設計。

## 專案簡介

ClawPort 是一個開源的儀表板，專為管理和監控 OpenClaw AI 代理而設計，提供了直觀的界面來進行任務管理、實時日誌流和成本追蹤等功能。它不需要額外的 AI API 金鑰，所有操作都通過 OpenClaw 網關進行，這使得使用者能夠輕鬆地與 AI 代理進行交互。與其他管理工具相比，ClawPort 提供了更全面的功能集，包括任務看板、活動控制台和記憶體瀏覽器，這些都能幫助團隊更有效地協作。使用者反映，這個工具能夠顯著提升團隊的工作效率，特別是在需要同時管理多個 AI 代理的情況下。整體來說，這是一個非常有潛力的工具，適合各種規模的 AI 團隊使用。

**技術棧**：`TypeScript` · `JavaScript` · `CSS`

## 重點功能

- 提供直觀的任務管理看板，方便團隊協作。
- 實時日誌流功能，快速檢測問題。
- 成本追蹤工具，幫助優化資源使用。
- 記憶體瀏覽器，方便查看代理的記憶體狀態。
- 無需額外 API 金鑰，簡化使用流程。

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

## 為什麼值得關注

> [!tip] 爆紅原因
> JohnRiceML 是一位專注於 AI 和開源工具的開發者，這個專案正好滿足了團隊對於 AI 代理管理的需求。隨著 AI 技術的普及，對於高效管理工具的需求也在上升，這使得 ClawPort 在短時間內獲得了關注。

## 適合誰使用

**目標受眾**：需要管理和監控 AI 代理的開發團隊和項目經理。

> [!example] 使用場景
> - AI 團隊用它來管理多個代理，因為這樣可以提高協作效率。
> - 開發者用它來監控代理的活動，因為實時日誌流能快速發現問題。
> - 項目經理用它來追蹤成本，因為可以輕鬆查看資源使用情況。

## 架構分析

ClawPort 的架構是基於 OpenClaw 網關，通過直觀的界面提供任務管理、日誌流和成本追蹤等功能，幫助團隊更有效地協作。

## 優缺點分析

> [!success] 優點
> - 功能全面，適合多種使用場景。
> - 無需額外 API 金鑰，簡化使用流程。
> - 直觀的界面設計，易於上手。

> [!danger] 缺點
> - 需要先安裝 OpenClaw，增加了初始設置的複雜性。
> - 目前仍在開發中，可能存在不穩定的情況。
> - 對於大型團隊的支持可能不足。

> [!warning] 注意事項
> - 需要先安裝 OpenClaw，增加了初始設置的複雜性。
> - 目前仍在開發中，可能存在不穩定的情況。
> - 對於大型團隊可能需要進一步的擴展功能。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 52 |
| Open Issues | 1 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-03 |
| 官方網站 | [Link](https://clawport.dev) |
| Repo 大小 | 970 KB |

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

相關概念：[[AI 代理管理]] · [[實時監控]] · [[任務管理工具]]

[GitHub](https://github.com/JohnRiceML/clawport-ui) · [官方網站](https://clawport.dev)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，340 stars
