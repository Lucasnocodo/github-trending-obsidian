---
repo: JohnRiceML/clawport-ui
url: https://github.com/JohnRiceML/clawport-ui
owner: JohnRiceML
owner_type: User
language: TypeScript
license: MIT
description: "Open-source AI agent command center for Claude Code agent teams. Built on OpenClaw."
homepage: "https://clawport.dev"
stars: 349
stars_per_day: 50
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
  - "提供一個視覺化的指揮中心來管理和監控 AI 代理團隊。"
---

# clawport-ui

**349** stars · **50** stars/天 · 建立 7 天前 · TypeScript · MIT

`easy-install`

> [!summary] 一句話摘要
> 提供一個視覺化的指揮中心來管理和監控 AI 代理團隊。

> [!abstract] 核心創新
> ClawPort 是一個無需額外 API 金鑰的集中管理工具，專為 OpenClaw 設計。

## 專案簡介

ClawPort 是一個開源的儀表板，專為管理和監控 OpenClaw AI 代理而設計。它透過本地的 OpenClaw 閘道連接，提供組織圖、即時聊天、看板、排程監控、成本追蹤等多種功能。技術上，它使用 TypeScript 和 JavaScript，並整合了多種即時通訊和數據視覺化技術。與其他類似工具相比，ClawPort 不需要額外的 AI API 金鑰，所有操作都通過 OpenClaw 閘道進行，這簡化了使用流程。使用者可以實時查看代理的活動日誌和成本數據，但需要確保 OpenClaw 正常運行。整體來看，ClawPort 是一個成熟的工具，適合需要集中管理多個 AI 代理的團隊使用。

**技術棧**：`TypeScript` · `JavaScript` · `CSS`

## 重點功能

- 組織圖顯示代理之間的關係
- 即時聊天功能支持文字、視覺和語音交流
- 看板功能支持任務的拖放管理
- 排程監控提供每週熱圖和任務管理
- 活動控制台顯示實時日誌流

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
> JohnRiceML 是一位活躍的開源開發者，ClawPort 切合了對於 AI 代理管理的需求，尤其是在多代理協作的場景中。隨著 AI 應用的普及，對於集中管理的需求越來越高，這使得 ClawPort 在市場上受到關注。

## 適合誰使用

**目標受眾**：需要管理和監控多個 AI 代理的開發團隊和企業。

> [!example] 使用場景
> - AI 團隊經理用它來監控多個 AI 代理的活動，因為這樣可以快速了解每個代理的狀態和表現。
> - 開發者用它來管理任務和排程，因為看板功能讓任務分配變得更加直觀。
> - 數據分析師用它來追蹤成本和資源使用，因為即時的數據視覺化可以幫助他們做出更好的決策。

## 架構分析

ClawPort 採用前後端分離架構，前端使用 TypeScript 和 JavaScript，後端通過 OpenClaw 閘道進行數據交互。用戶操作透過即時通訊和數據視覺化技術實現。

> [!warning] 注意事項
> - 需要運行中的 OpenClaw 實例
> - 不支援其他 AI API，僅限於 OpenClaw

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

相關概念：[[API 設計]] · [[機器學習]] · [[自動化測試]]

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
