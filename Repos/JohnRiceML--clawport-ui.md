---
repo: JohnRiceML/clawport-ui
url: https://github.com/JohnRiceML/clawport-ui
owner: JohnRiceML
owner_type: User
language: TypeScript
license: MIT
description: "Open-source AI agent command center for Claude Code agent teams. Built on OpenClaw."
homepage: "https://clawport.dev"
stars: 340
stars_per_day: 57
forks: 51
open_issues: 0
created: 2026-03-03
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: ""
status: to-review
tags:
  - github
  - 開發工具
  - typescript
---

# clawport-ui

**340** stars · **57** stars/天 · 建立 6 天前 · TypeScript · MIT

> [!summary] 一句話摘要
> 提供一個視覺化的指揮中心來管理和監控 AI 代理團隊。

## 專案簡介

ClawPort 是一個開源的儀表板，讓使用者能夠管理和監控其 AI 代理。它整合了組織圖、即時聊天、任務看板等功能，讓使用者能夠在一個平台上進行操作。與其他 AI 管理工具相比，ClawPort 不需要額外的 API 金鑰，簡化了設置過程。這是一個非常實用的工具，特別適合需要管理多個 AI 代理的開發者。

## 重點功能

- 整合組織圖和即時聊天功能，方便團隊協作。
- 提供任務看板和活動控制台，便於管理工作流。
- 無需額外的 API 金鑰，簡化設置過程。
- 支持即時日誌流和記憶體瀏覽功能。
- 與 OpenClaw 無縫整合，提升使用體驗。

## 快速開始

安裝 OpenClaw：curl -fsSL https://openclaw.ai/install.sh | bash。,運行 onboarding wizard 來設置工作區和網關。

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在 AI 領域有豐富的經驗，並且針對開發者的需求設計了這個工具。隨著 AI 代理的普及，對於管理工具的需求也隨之增加。

## 適合誰使用

**目標受眾**：需要管理和監控 AI 代理的開發者和團隊領導。

> [!example] 使用場景
> - 開發者用它來監控 AI 代理的運行狀態，因為可以即時查看日誌和活動紀錄。
> - 團隊領導用它來分配任務和追蹤進度，因為可以使用看板功能來管理工作流。
> - 研究人員用它來測試不同的 AI 代理，因為可以方便地與代理進行即時對話。

> [!warning] 注意事項
> 需要先安裝 OpenClaw，對於新手可能有一定的學習曲線。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | TypeScript |
| 授權 | MIT |
| Stars | 340 |
| Forks | 51 |
| Issues | 0 |
| 建立日期 | 2026-03-03 |
| 官方網站 | [Link](https://clawport.dev) |

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
> | [@JohnRiceML](https://github.com/JohnRiceML) | 92 |
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
> > Do n

## 延伸閱讀

相關概念：#AI_代理管理 · #即時通訊 · #工作流管理

[GitHub](https://github.com/JohnRiceML/clawport-ui)
 · [官方網站](https://clawport.dev)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，340 stars
