---
repo: JohnRiceML/clawport-ui
url: https://github.com/JohnRiceML/clawport-ui
owner: JohnRiceML
owner_type: User
language: TypeScript
license: MIT
description: "Open-source AI agent command center for Claude Code agent teams. Built on OpenClaw."
homepage: "https://clawport.dev"
stars: 345
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
  - "提供一個可視化的指揮中心來管理和監控你的 AI agent 團隊。"
---

# clawport-ui

**345** stars · **49** stars/天 · 建立 7 天前 · TypeScript · MIT

> [!summary] 一句話摘要
> 提供一個可視化的指揮中心來管理和監控你的 AI agent 團隊。

> [!abstract] 核心創新
> ClawPort 提供了一個集成的可視化平台，讓用戶能夠直接與 AI agent 進行互動和管理。

## 專案簡介

ClawPort 是一個集中式的儀表板，讓用戶可以管理、監控並與 OpenClaw 的 AI agent 進行互動。它整合了組織圖、即時聊天、任務看板、排程監控、成本追蹤等功能，所有操作都透過 OpenClaw 網關進行，無需額外的 API 金鑰。這個專案的獨特之處在於其即時日誌流和團隊記憶瀏覽功能，讓用戶能夠快速獲取和分析 AI agent 的行為和狀態。使用 ClawPort 可以有效提升團隊的協作效率，特別是在多個 agent 同時運作的情況下。雖然它依賴於 OpenClaw 的運行，但設置過程相對簡單，適合中小型團隊使用。整體而言，這是一個值得嘗試的工具，尤其是對於希望優化 AI agent 管理的開發者。

**技術棧**：`TypeScript` · `JavaScript` · `CSS`

## 重點功能

- 組織圖顯示 AI agent 的結構和關係。
- 即時聊天功能支持文本、視覺和語音互動。
- 任務看板支持拖放式任務管理。
- 排程功能提供每週熱圖和作業管理。
- 活動控制台顯示歷史日誌並支持 JSON 擴展。
- 實時日誌流功能讓用戶能夠即時查看 agent 的運作狀態。
- 成本追蹤功能提供 token 使用情況和優化建議。
- 團隊記憶瀏覽器支持 Markdown 渲染，方便記錄和查詢。

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
4. 設置 ClawPort 連接 OpenClaw
```bash
clawport setup
```
5. 啟動 ClawPort 儀表板
```bash
clawport dev
```

## 為什麼值得關注

> [!tip] 爆紅原因
> JohnRiceML 是一位活躍的開源貢獻者，專注於 AI 和自動化領域。ClawPort 切合了對於 AI agent 管理的需求，特別是在團隊合作日益增加的情況下。隨著 OpenClaw 的推出，這個工具的需求也隨之上升，讓使用者能夠更有效地管理其 AI agent。這樣的功能在當前的開發環境中顯得尤為重要，尤其是在多任務處理的情境下。

## 適合誰使用

**目標受眾**：對於需要管理多個 AI agent 的開發者和團隊。

> [!example] 使用場景
> - [AI 開發者] 用它來 管理多個 AI agent，因為它提供了即時的監控和溝通功能。
> - [團隊領導] 用它來 追蹤項目進度，因為看板和排程功能能夠清晰顯示任務狀態。
> - [數據分析師] 用它來 分析 agent 的行為，因為實時日誌和成本追蹤能夠提供深入的見解。

## 架構分析

ClawPort 採用前後端分離架構，前端使用 TypeScript 和 CSS，後端依賴於 OpenClaw 的 API。資料流是用戶輸入 → ClawPort 儀表板 → OpenClaw 網關 → AI agent 互動。

## 優缺點分析

> [!success] 優點
> - 集成多種功能於一個平台，提升管理效率。
> - 即時監控和溝通功能，適合團隊合作。
> - 無需額外的 API 金鑰，簡化使用流程。

> [!danger] 缺點
> - 依賴於 OpenClaw 的運行，限制了使用範圍。
> - 需要一定的設置時間，對新手來說可能有點挑戰。
> - 功能仍在持續開發中，可能會有不穩定的情況。

> [!warning] 注意事項
> - 需要運行 OpenClaw 實例。
> - 功能依賴於 OpenClaw 的穩定性和性能。
> - 目前僅支持本地運行，未提供雲端解決方案。

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
> git clone https://github.com/Joh

## 延伸閱讀

相關概念：[[AI agent 管理]] · [[即時通訊系統]] · [[任務管理工具]] · [[數據可視化]] · [[成本追蹤]]

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
