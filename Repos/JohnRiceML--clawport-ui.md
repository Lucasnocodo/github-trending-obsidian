---
repo: JohnRiceML/clawport-ui
url: https://github.com/JohnRiceML/clawport-ui
owner: JohnRiceML
owner_type: User
language: TypeScript
license: MIT
description: "Open-source AI agent command center for Claude Code agent teams. Built on OpenClaw."
homepage: "https://clawport.dev"
stars: 365
stars_per_day: 52
forks: 53
open_issues: 1
created: 2026-03-03
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供一個視覺化的指揮中心來管理和監控 AI agent 團隊，讓團隊協作更順暢。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "clawport-ui"
  - "JohnRiceML/clawport-ui"
  - "提供一個視覺化的指揮中心來管理和監控 AI agent 團隊，讓團隊協作更順暢。"
---

# clawport-ui

**365** stars · **52** stars/天 · 建立 7 天前 · TypeScript · MIT

> [!summary] 一句話摘要
> 提供一個視覺化的指揮中心來管理和監控 AI agent 團隊，讓團隊協作更順暢。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (52 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人
> **適合** 需要集中管理多個 AI agents 的中小型團隊成員。
> **一句話重點** ClawPort 的設計讓多個 AI agents 的管理變得簡單而高效，特別適合需要即時協作的團隊。

> [!abstract] 核心創新
> ClawPort 提供了一個集中化的儀表板，讓用戶能夠在一個平台上管理和監控多個 AI agents。

## 專案簡介

ClawPort 是一個開源的儀表板，專為管理、監控和與 OpenClaw AI agents 進行直接對話而設計。用戶透過這個儀表板，可以輕鬆地查看組織結構圖、進行即時聊天、管理任務、監控排程和成本，並且可以實時查看活動日誌。它的核心架構是基於 Next.js，並透過 OpenClaw Gateway 進行所有 AI 操作，確保了安全性和高效性。這個工具的獨特之處在於它不需要額外的 API 金鑰，所有操作都經過 OpenClaw Gateway，簡化了用戶的配置過程。與其他類似工具相比，ClawPort 提供了更為豐富的功能，如即時聊天、任務管理和成本分析，這些功能集成在同一個平台上，避免了使用多個工具的繁瑣。它可以處理大量的 AI agents，並且支持實時數據流，確保用戶能夠隨時獲取最新資訊。這個專案目前處於 beta 階段，對於需要集中管理多個 AI agents 的團隊來說，ClawPort 是一個值得考慮的選擇。適合中小型團隊使用，但對於大型企業可能需要進一步的擴展和調整。使用者可以在需要快速協作和即時反饋的情境下選擇 ClawPort，而在對於單一 agent 的簡單管理情境下，可能會覺得功能過於繁瑣。

**技術棧**：`TypeScript` · `JavaScript` · `CSS` · `Next.js`

## 重點功能

- Org Map — 互動式組織結構圖，顯示所有 agent 的層級和狀態。
- Chat — 支持即時文字聊天、語音消息和檔案附件，對話可持久保存。
- Kanban — 拖放式任務管理板，方便管理多個 agent 的任務。
- Cron Monitor — 實時監控所有排程任務的狀態，並可過濾和排序錯誤。
- Cost Dashboard — 提供每日成本圖表和異常檢測，幫助優化資源使用。
- Activity Console — 歷史日誌瀏覽器，支持實時日誌流和 JSON 擴展。
- Memory Browser — 瀏覽團隊記憶和日誌，支持 Markdown 渲染和搜索。
- Auto-Discovery — 自動發現 OpenClaw 工作區中的 agents，無需額外配置。

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

## 程式碼範例

```bash
# 啟動 ClawPort 儀表板
clawport dev
# 預期輸出：啟動後可在 http://localhost:3000 訪問儀表板
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案由 JohnRiceML 發起，他在開源社群中有一定的知名度，並且之前參與過多個 AI 相關的專案。ClawPort 解決了 AI agent 管理上的痛點，特別是在需要多方協作的情況下，提供了一個集中化的解決方案。最近在社群中有關於 AI agent 管理的討論增多，可能促進了這個工具的關注度。技術生態的變化使得這樣的工具變得更加可行，特別是 OpenClaw 的普及。

## 適合誰使用

**目標受眾**：需要集中管理多個 AI agents 的中小型團隊成員。

> [!example] 使用場景
> - AI 團隊經理用它來監控所有 AI agents 的運作狀態，因為可以即時查看任務進度和排程，避免了手動檢查的繁瑣。
> - 開發者用它來與 AI agents 進行實時對話，因為支持多種媒介（文字、語音、視覺），提升了溝通效率。
> - 數據分析師用它來追蹤 AI agents 的成本和效能，因為提供了詳細的成本分析和歷史日誌，幫助優化資源配置。

## 架構分析

ClawPort 採用前後端分離的架構模式，前端使用 Next.js，後端則透過 OpenClaw Gateway 處理所有 AI 操作。用戶輸入 → ClawPort → OpenClaw Gateway → Claude。關鍵技術決策是使用 OpenClaw 作為中介，確保安全性和簡化配置。專案目錄結構包括主要的源碼文件和配置文件，方便用戶進行自定義設置。

## 技術深入分析

ClawPort 的核心技術機制是基於 Next.js 的前端框架，並透過 OpenClaw Gateway 進行所有 AI 操作，這樣的設計確保了安全性和高效性。它能夠處理大量的 AI agents，並且支持實時數據流，這對於需要快速反應的團隊來說是個優勢。選擇 TypeScript 和 JavaScript 作為開發語言，讓開發者能夠利用現有的生態系統，並提高了代碼的可維護性。設計上，ClawPort 需要依賴 OpenClaw 的運行，這可能在某些情況下成為瓶頸，特別是在資源有限的環境中。未來擴展時，可能需要考慮性能優化和資源管理的問題，以確保在規模擴大時仍能保持良好的效能。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和功能說明。安裝過程相對順暢，但需要確保 OpenClaw 正確運行。缺乏中文或多語言支持，可能對非英語使用者造成障礙。

## 優缺點分析

> [!success] 優點
> - 集成多種功能於一個平台，減少使用多個工具的需求。
> - 即時監控和歷史日誌功能，提升管理效率。
> - 無需額外 API 金鑰，簡化配置過程。

> [!danger] 缺點
> - 需要運行 OpenClaw，增加了安裝複雜度。
> - 目前處於 beta 階段，可能存在不穩定性。
> - 對於大型團隊的擴展性可能不足。

> [!warning] 注意事項
> - 需要運行 OpenClaw 實例。
> - 目前僅支援 Node.js 環境。
> - 對於大型團隊可能需要進一步的擴展。
> - beta 階段，功能可能不穩定。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [JohnRiceML/OpenClaw-Medical-Skills](https://github.com/JohnRiceML/OpenClaw-Medical-Skills) | 專注於醫療領域的 AI agent 管理，功能較為專一，適合特定行業使用。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供更為簡單的 agent 管理功能，適合不需要複雜監控的使用者。 |

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

相關概念：[[Agent 框架]] · [[自動化]] · [[即時通訊]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[OpenAI--openai|OpenAI/openai]] · [[Microsoft--PowerAutomate|Microsoft/PowerAutomate]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[duoan--TorchCode|duoan/TorchCode]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[op7418--Claude-to-IM-skill|op7418/Claude-to-IM-skill]]

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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，340 stars
