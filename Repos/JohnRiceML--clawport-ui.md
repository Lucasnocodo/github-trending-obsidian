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
  - "提供一個可視化的指揮中心來管理和監控 AI agent 團隊。"
---

# clawport-ui

**345** stars · **49** stars/天 · 建立 7 天前 · TypeScript · MIT

> [!summary] 一句話摘要
> 提供一個可視化的指揮中心來管理和監控 AI agent 團隊。

> [!abstract] 核心創新
> ClawPort 提供了一個無需額外 API 金鑰的集中式管理平台，專為 OpenClaw AI agents 設計。

## 專案簡介

ClawPort 是一個開源的儀表板，專為管理和監控 OpenClaw AI agents 而設計。它透過連接本地的 OpenClaw 閘道，提供組織圖、即時聊天、看板、排程監控、成本追蹤等功能，讓使用者能夠在一個平台上輕鬆管理多個 AI agent。技術上，它使用 TypeScript 和 JavaScript，並整合了多種即時數據流和視覺化工具，讓用戶能夠直觀地操作和監控 AI agents。與其他工具相比，ClawPort 不需要額外的 API 金鑰，所有操作都通過 OpenClaw 閘道進行，這降低了使用門檻。實際使用中，ClawPort 提供了即時的日誌流和活動監控，但需要依賴 OpenClaw 的穩定性。整體來看，這是一個適合中小型 AI 團隊使用的成熟工具，值得嘗試。

**技術棧**：`TypeScript` · `JavaScript` · `CSS`

## 重點功能

- 即時聊天功能，支持文字、視覺和語音互動。
- 看板功能，支持拖放任務管理。
- 活動控制台，提供實時日誌流。
- 成本追蹤，分析 token 使用情況。
- 記憶瀏覽器，支持 Markdown 渲染。

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
4. 設置並啟動 ClawPort
```bash
clawport setup && clawport dev
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 JohnRiceML 在 AI 和開源領域有豐富的經驗，ClawPort 切中了對於 AI agent 管理的需求，特別是在多任務協作的場景中。隨著 AI 應用的普及，這種集中管理的工具越來越受到重視，尤其是在團隊合作方面。這個專案的推出時間正好符合了市場對於高效能 AI 管理工具的需求。

## 適合誰使用

**目標受眾**：專為需要管理多個 AI agent 的團隊和開發者設計。

> [!example] 使用場景
> - [AI 團隊經理] 用它來 監控多個 AI agent 的表現，因為這樣可以即時調整策略和任務分配。
> - [開發者] 用它來 直接與 AI agent 進行互動，因為這樣可以快速測試和迭代。
> - [數據分析師] 用它來 追蹤 AI agent 的成本和效能，因為這樣能夠優化資源使用。

## 架構分析

ClawPort 採用前後端分離架構，前端使用 TypeScript 和 JavaScript，後端通過 OpenClaw 閘道進行數據交互。資料流是用戶操作 → ClawPort 前端 → OpenClaw API → AI agent 互動。

## 優缺點分析

> [!success] 優點
> - 集中管理多個 AI agent，提升效率。
> - 即時監控和互動功能，方便開發和調整。
> - 無需額外 API 金鑰，降低使用門檻。

> [!danger] 缺點
> - 依賴 OpenClaw 的穩定性，若出現問題會影響使用。
> - 功能可能受到 OpenClaw 更新影響。
> - 目前僅支持本地運行，無法雲端部署。

> [!warning] 注意事項
> - 需要一個運行中的 OpenClaw 實例。
> - 功能依賴於 OpenClaw 的穩定性和性能。
> - 目前僅支持本地部署，不支持雲端服務。

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

**社群活躍度**：每週有穩定的更新和社群互動，問題回應迅速。
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

相關概念：[[AI agent 管理]] · [[即時數據流]] · [[多任務協作]]

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
