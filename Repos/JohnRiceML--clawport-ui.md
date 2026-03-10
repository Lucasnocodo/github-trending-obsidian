---
repo: JohnRiceML/clawport-ui
url: https://github.com/JohnRiceML/clawport-ui
owner: JohnRiceML
owner_type: User
language: TypeScript
license: MIT
description: "Open-source AI agent command center for Claude Code agent teams. Built on OpenClaw."
homepage: "https://clawport.dev"
stars: 341
stars_per_day: 57
forks: 51
open_issues: 0
created: 2026-03-03
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 開發工具
  - typescript
---

# clawport-ui

**341** stars · **57** stars/天 · 建立 6 天前 · TypeScript · MIT

> [!summary] 一句話摘要
> 提供一個可視化的指揮中心來管理你的 AI agent 團隊。

## 專案簡介

它讓使用者能夠在一個界面上管理和監控多個 AI agent，並與其進行即時對話。這個專案基於 OpenClaw，使用 TypeScript 和 JavaScript 開發，並提供了豐富的功能如組織圖、看板和活動控制台。相比其他 AI 管理工具，ClawPort 提供了更直觀的用戶界面和即時的交互功能，非常適合需要多任務管理的團隊使用。

**技術棧**：`TypeScript` · `JavaScript` · `CSS`

## 重點功能

- 提供可視化的組織圖，方便管理 AI agent。
- 即時聊天功能，支持語音和視覺交互。
- 看板功能，便於任務管理和追蹤。
- 活動控制台，實時流式日誌監控。

## 快速開始

1. 安裝 OpenClaw
```bash
curl -fsSL https://openclaw.ai/install.sh | bash
```
2. 運行入門向導
```bash
openclaw onboard --install-daemon
```
3. 確認 Gateway 狀態
```bash
openclaw gateway status
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 開發者背景強大，專案針對 AI 團隊的需求，提供了實用的管理工具。

## 適合誰使用

**目標受眾**：需要管理和監控多個 AI agent 的開發團隊。

> [!example] 使用場景
> - [AI 團隊經理] 用它來 [監控團隊的 AI agent 表現]，因為它提供了即時的活動控制台。
> - [開發者] 用它來 [與 AI agent 進行即時對話]，因為它支持多種通訊方式。
> - [產品經理] 用它來 [管理多個 AI agent 的任務]，因為它提供了清晰的組織圖和看板功能。

> [!warning] 注意事項
> 需要運行 OpenClaw 實例。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 51 |
| Open Issues | 0 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-03 |
| 官方網站 | [Link](https://clawport.dev) |
| Repo 大小 | 731 KB |

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
> | [@JohnRiceML](https://github.com/JohnRiceML) | 95 |
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

相關概念：[[AI 管理工具]] · [[即時通訊]] · [[可視化界面設計]]

[GitHub](https://github.com/JohnRiceML/clawport-ui) · [官方網站](https://clawport.dev)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，340 stars
