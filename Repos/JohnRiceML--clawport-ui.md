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
  - "提供一個可視化的指揮中心來管理和監控你的 AI agent 團隊。"
---

# clawport-ui

**345** stars · **49** stars/天 · 建立 7 天前 · TypeScript · MIT

`easy-install`

> [!summary] 一句話摘要
> 提供一個可視化的指揮中心來管理和監控你的 AI agent 團隊。

> [!abstract] 核心創新
> ClawPort 提供了一個集成的可視化儀表板，專為管理 OpenClaw AI agent 團隊而設計。

## 專案簡介

ClawPort 是一個用於管理和監控 OpenClaw AI agent 的可視化儀表板。它透過連接本地的 OpenClaw 閘道，提供組織圖、即時聊天、看板、排程監控、成本追蹤以及活動控制台等功能。這個專案使用 TypeScript 和 JavaScript 開發，並且不需要額外的 AI API 金鑰，所有流量都經過 OpenClaw 閘道。與其他 AI 管理工具相比，ClawPort 提供了更全面的即時監控和團隊協作功能，像是實時日誌串流和記憶體瀏覽器。實際使用中，ClawPort 可以有效提升團隊的協作效率，但需要確保 OpenClaw 正常運行。這個專案適合需要集中管理多個 AI agent 的團隊使用，並且對於開發者來說，安裝和設定相對簡單。

**技術棧**：`TypeScript` · `JavaScript` · `CSS`

## 重點功能

- 提供組織圖以視覺化團隊結構
- 即時聊天功能支援文字、語音及檔案傳輸
- 看板功能支援任務的拖放管理
- 排程監控提供每週熱圖和作業管理
- 活動控制台支援歷史日誌瀏覽和 JSON 擴展
- 實時日誌串流小工具提供即時反饋
- 成本追蹤功能提供使用量和異常分析
- 記憶體瀏覽器支援 Markdown 渲染

## 快速開始

1. 安裝 OpenClaw
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```
2. 運行 OpenClaw 的 onboarding 向導
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
> JohnRiceML 是一位活躍的開源開發者，ClawPort 直接回應了對於 AI agent 管理的需求，尤其是在團隊合作上。隨著 AI 技術的普及，對於集中管理工具的需求也隨之增加，這使得 ClawPort 的推出時機恰到好處。

## 適合誰使用

**目標受眾**：需要集中管理 AI agent 的開發團隊和企業。

> [!example] 使用場景
> - [AI 團隊經理] 用它來 監控多個 AI agent 的表現，因為 可以即時查看活動和成本。
> - [開發者] 用它來 管理 AI agent 的任務，因為 看板功能讓任務分配變得簡單。
> - [數據分析師] 用它來 追蹤 AI agent 的日誌，因為 實時串流功能提供了即時的反饋。

## 架構分析

ClawPort 採用前後端分離架構，前端使用 TypeScript 和 JavaScript，後端透過 OpenClaw 閘道進行數據交互。用戶操作通過儀表板發送至 OpenClaw，並即時反饋結果。

## 優缺點分析

> [!success] 優點
> - 提供全面的即時監控功能
> - 無需額外的 API 金鑰，簡化設置
> - 強大的團隊協作工具

> [!danger] 缺點
> - 依賴於 OpenClaw 的運行
> - 目前僅支援本地部署
> - 功能可能隨著版本更新而變動

> [!warning] 注意事項
> - 需要運行中的 OpenClaw 實例
> - 目前僅支援本地部署
> - 某些功能可能需要額外的配置

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

**社群活躍度**：社群活躍度中等，持續有更新和回應
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

相關概念：[[AI agent 管理]] · [[即時監控系統]] · [[團隊協作工具]]

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

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，340 stars
