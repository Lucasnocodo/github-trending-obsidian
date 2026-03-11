---
repo: JohnRiceML/clawport-ui
url: https://github.com/JohnRiceML/clawport-ui
owner: JohnRiceML
owner_type: User
language: TypeScript
license: MIT
description: "Open-source AI agent command center for Claude Code agent teams. Built on OpenClaw."
homepage: "https://clawport.dev"
stars: 386
stars_per_day: 55
forks: 55
open_issues: 2
created: 2026-03-03
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "代理管理"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供一個可視化的指揮中心來管理和監控你的 AI 代理團隊。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 3
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:386"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "clawport-ui"
  - "JohnRiceML/clawport-ui"
  - "提供一個可視化的指揮中心來管理和監控你的 AI 代理團隊。"
---

# clawport-ui

**386** stars · **55** stars/天 · 建立 7 天前 · TypeScript · MIT

> [!summary] 一句話摘要
> 提供一個可視化的指揮中心來管理和監控你的 AI 代理團隊。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (55 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要集中管理多個 AI 代理並希望簡化操作流程的開發團隊。
> **一句話重點** ClawPort 的設計讓多代理管理變得簡單而直觀，特別適合需要即時反饋的團隊。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到更高效的代理管理，值得投入。

> [!abstract] 核心創新
> ClawPort 提供無需額外 API 金鑰的即時監控和管理功能，簡化了多代理操作的複雜性。

## 專案簡介

ClawPort 是一個開源的儀表板，專為管理、監控和與 OpenClaw AI 代理進行交流而設計。用戶可以透過這個儀表板連接到本地的 OpenClaw 網關，並獲得組織圖、即時聊天、看板、計劃監控、成本追蹤、活動控制台和記憶瀏覽器等功能。這些功能的設計旨在讓用戶無需額外的 API 金鑰，所有操作都通過 OpenClaw 網關進行，簡化了設置和使用流程。核心指令如 `clawport setup` 可自動檢測配置，並生成 `.env.local` 文件，方便用戶快速上手。技術上，ClawPort 使用 Next.js 和 React，並集成了 Tailwind CSS 來提供靈活的樣式選擇。這種架構使得儀表板能夠快速響應用戶操作，並支持即時數據流。與其他工具相比，ClawPort 的自動發現功能和無需配置的設計使其在多代理管理上更具優勢。該工具的使用範圍適合需要管理多個 AI 代理的團隊，特別是那些已經在使用 OpenClaw 的用戶。儘管目前仍在開發中，但其活躍的社區和持續的更新顯示出良好的發展潛力。使用者可能會遇到的限制包括對 OpenClaw 的依賴，這意味著沒有 OpenClaw 的環境下無法運行 ClawPort。總體來說，ClawPort 是一個值得關注的工具，特別適合那些需要集中管理 AI 代理的團隊。

**技術棧**：`Next.js 16` · `React 19` · `TypeScript 5` · `Tailwind CSS 4`

## 重點功能

- 組織圖 — 互動式的代理團隊組織圖，顯示層級和狀態。
- 即時聊天 — 支持文本、圖像和語音消息的即時聊天功能。
- 看板 — 拖放式任務管理板，方便跨代理分配任務。
- 計劃監控 — 實時監控所有計劃任務的狀態，並可過濾和排序錯誤。
- 成本儀表板 — 提供代幣使用情況和成本分析，幫助優化開支。
- 活動控制台 — 歷史事件的日誌瀏覽器，支持實時流式日誌。
- 記憶瀏覽器 — 瀏覽團隊記憶和日誌，支持 Markdown 渲染。
- 主題選擇 — 提供五種主題選擇，支持即時切換。

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

[
  "# 前置條件：需要安裝 OpenClaw",
  "clawport setup  # 自動檢測 OpenClaw 配置並生成 .env.local",
  "# 預期輸出：配置文件已生成，準備啟動儀表板"
]

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 386 stars（55/天），forks 55（14.2%），顯示出良好的社群反應。作者 JohnRiceML 在開源社群中活躍，過去參與了多個與 AI 相關的專案，這使得 ClawPort 在技術上具備一定的信任度。這個工具解決了多代理管理的痛點，特別是在需要即時監控和管理的場景中，之前的解決方案往往需要額外的配置和 API 金鑰。近期的推廣活動和社群討論也可能促進了其快速增長。整體來看，這個工具的受歡迎程度反映了對於簡化 AI 代理管理需求的迫切性。

## 適合誰使用

**目標受眾**：需要集中管理多個 AI 代理並希望簡化操作流程的開發團隊。

> [!example] 使用場景
> - AI 產品經理用它來監控多個 AI 代理的運行狀態，因為可以在一個儀表板上查看所有代理的活動和成本分析。
> - 開發者用它來快速設置和管理 OpenClaw 代理，因為自動化的配置流程大幅減少了手動設定的時間。
> - 運營團隊用它來進行任務分配和進度追蹤，因為看板功能讓任務管理變得直觀且易於操作。

## 架構分析

ClawPort 的架構基於 Next.js 和 React，這使得其能夠快速響應用戶操作並實現即時數據流。用戶端通過 ClawPort 與 OpenClaw 網關進行交互，所有的 AI 操作都通過這個網關進行，這樣的設計簡化了 API 管理。資料流方面，ClawPort 會從 OpenClaw 的工作區讀取代理和記憶資料，並將所有的請求透過網關轉發到 Claude。這種設計的代價在於對 OpenClaw 的依賴，若 OpenClaw 無法運行，ClawPort 將無法提供服務。擴展性方面，ClawPort 的自動發現功能使其能夠輕鬆擴展到多個代理，但在處理大量代理時可能會面臨性能瓶頸。

## 技術深入分析

ClawPort 的核心技術機制是基於 Next.js 和 React 的前端框架，這使得其能夠實現高效的用戶界面和即時數據流。它使用了 React Flow 來構建組織圖，並且利用 Tailwind CSS 來提供靈活的樣式選擇。效能方面，ClawPort 能夠處理多個代理的即時請求，但在高負載情況下可能會遇到性能瓶頸。設計上選擇 Next.js 是因為其支持伺服器端渲染和靜態生成，這對於提升用戶體驗至關重要。依賴樹方面，ClawPort 的依賴相對輕量，主要依賴於 React 和 Next.js，這降低了技術債務的風險。技術風險方面，若 OpenClaw 的 API 發生變更，可能會影響 ClawPort 的穩定性。整合方面，ClawPort 可以輕鬆與現有的 CI/CD 流程結合，但對於不熟悉 Node.js 環境的團隊來說，學習曲線可能較陡峭。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟和範例。安裝過程相對順暢，沒有明顯的坑。提供了良好的入門指南，但目前僅有英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 無需額外 API 金鑰，簡化了配置流程。
> - 即時監控和聊天功能提升了管理效率。
> - 自動發現功能減少了手動配置的需求。

> [!danger] 缺點
> - 對 OpenClaw 的依賴使得使用環境受限。
> - 功能仍在開發中，可能存在不穩定性。
> - 需要一定的技術背景才能進行配置和故障排除。

> [!warning] 注意事項
> - 需要運行 OpenClaw 實例才能使用。
> - 依賴於正確配置的環境變數，否則無法啟動。
> - 目前功能仍在開發中，可能會遇到不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的 OpenClaw 應用，適合醫療專業團隊使用。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供更為廣泛的代理管理功能，但缺乏 ClawPort 的即時監控和聊天功能。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步的工具，與 ClawPort 的多代理管理功能不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的 OpenClaw 應用，提供針對醫療專業的功能。 | 如果你的團隊專注於醫療應用，這個工具會更適合。 | low，因為兩者都基於 OpenClaw，配置相似。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供更為廣泛的代理管理功能，但缺乏 ClawPort 的即時監控和聊天功能。 | 如果需要更高的自定義和靈活性，這個工具可能更適合。 | medium，因為需要重新學習其配置和使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **clawport-ui** | **OpenClaw-Medical-Skills** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於醫療領域的 OpenClaw 應用，提供針對醫療專業的功能。 | 提供更為廣泛的代理管理功能，但缺乏 ClawPort 的即時監控和聊天功能。 |
> | 遷移成本 | - | low，因為兩者都基於 OpenClaw，配置相似。 | medium，因為需要重新學習其配置和使用方式。 |
> | 適用場景 | 主要場景 | 如果你的團隊專注於醫療應用，這個工具會更適合。 | 如果需要更高的自定義和靈活性，這個工具可能更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者進行試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，OpenClaw 的啟動可能會失敗
  - 解法：確保所有環境變數正確設置
- [MEDIUM] 在高負載情況下，儀表板可能會變得不穩定
  - 解法：減少同時運行的代理數量

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 簡化了多代理管理，適合小型團隊使用。 |
| 大型企業的 AI 代理管理 | 普通 | 功能可能不足以滿足複雜需求，但仍可用作輔助工具。 |
| 需要即時監控的開發團隊 | 非常適合 | 即時監控和聊天功能能有效提升管理效率。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到更高效的代理管理，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：ClawPort 本身不需要高權限，且不存取敏感資料，但依賴的 OpenClaw 需確保安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/JohnRiceML--clawport-ui");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 55 |
| Open Issues | 2 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-03 |
| 官方網站 | [Link](https://clawport.dev) |
| Repo 大小 | 2.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/JohnRiceML/clawport-ui) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@dagrejs/dagre` `@tailwindcss/postcss` `@types/node` `@types/react` `@types/react-dom` `@xyflow/react` `class-variance-authority` `clsx` `lucide-react` `next` `openai` `radix-ui` `react` `react-dom` `tailwind-merge`

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

**社群活躍度**：社群活躍，最近有多次更新和功能增強。
**連結**：[文件](https://clawport.dev)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-09 ~ 2026-03-10）
> **活躍天數** 2 天 · **最新 commit** feat: draggable LiveStreamWidget + README screenshots

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#12](https://github.com/JohnRiceML/clawport-ui/issues/12) | Support for multi-project, multi-task, and multi-memory agen | 0 | 0 |

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
> - **Five Themes** -- Dark, Glass, Color, Light, and System. All CSS custom properties -- switch instantly.
> - **Auto-Discovery** -- Automatically finds agents from your OpenClaw workspace. No config file needed.
> 
> ---
> 
> ## How It Works
> 
> ClawPort reads your OpenClaw workspace to discover agents, then connects to the gateway for all AI operations:
> 
> ```
> Browser  -->  ClawPort (Next.js)  -->  OpenClaw Gateway (localhost:18789 default)  -->  Claude
>                   |                          |
>                   |                     Text: /v1/chat/completions (streaming SSE)
>                   |                     Vision: openclaw gateway call chat.send (CLI)
>                   |                     Audio: /v1/audio/transcriptions (Whisper)
>                   |
>              Reads from:
>                $WORKSPACE_PATH/agents/    (agent SOUL.md files)
>                $WORKSPACE_PATH/memory/    (team memory)
>                openclaw cron list         (scheduled jobs)
> ```
> 
> All AI calls -- chat, vision, TTS, transcription -- route through the gateway. One token, no separate API keys.
> 
> ---
> 
> ## Configuration
> 
> ### Required Environment Variables
> 
> | Variable | Description | How to find it |
> |----------|-------------|----------------|
> | `WORKSPACE_PATH` | Path to your OpenClaw workspace | Default: `~/.openclaw/agents/main/workspace` (or legacy `~/.openclaw/workspace`) |
> | `OPENCLAW_BIN` | Path to the `openclaw` binary | Run `which openclaw` |
> | `OPENCLAW_GATEWAY_TOKEN` | Gateway auth token | Run `openclaw gateway status` |
> 
> ### Optional
> 
> | Variable | Description |
> |----------|-------------|
> | `ELEVENLABS_API_KEY` | ElevenLabs API key for voice indicators on agent profiles |
> 
> Running `clawport setup` auto-detects all required values and writes `.env.local`. When installed globally, if the package directory isn't writable, setup writes to `~/.config/clawport-ui/.env.local` instead. See [SETUP.md](SETUP.md) for manual configuration, agent customization, and troubleshooting.
> 
> ---
> 
> ## Agent Discovery
> 
> ClawPort automatically discovers agents from your OpenClaw workspace. No configuration file needed.
> 
> **What it scans:**
> - `$WORKSPACE_PATH/SOUL.md` -- root orchestrator
> - `$WORKSPACE_PATH/IDENTITY.md` -- root agent name and emoji
> - `agents//SOUL.md` -- top-level agents
> - `agents//sub-agents/*.md` -- flat sub-agent files
> - `agents//members/*.md` -- team member files
> - `agents///SOUL.md` -- nested subdirectory agents
> 
> **What it ignores:**
> - Directories without `SOUL.md` (e.g., `briefs/`, data files)
> - Non-`.md` files in `sub-agents/` and `members/`
> 
> For full control over names, colors, hierarchy, and tools, create `$WORKSPACE_PATH/clawport/agents.json`. See [SETUP.md](SETUP.md) for the schema and examples.
> 
> ---
> 
> ## CLI
> 
> ```bash
> clawport dev      # Start the development server
> clawport start    # Build and start production server
> clawport setup    # Auto-detect OpenClaw config, write .env.local
> clawport status   # Check gateway reachability and config
> clawport help     # Show usage
> ```
> 
> ---
> 
> ## Testing
> 
> ```bash
> npm test             # 771 tests across 31 suites (Vitest)
> npx tsc --noEmit     # Type-check (zero errors)
> npx next build       # Production build
> ```
> 
> ---
> 
> ## Stack
> 
> - [Next.js 16](https://nextjs.org) (App Router, Turbopack)
> - [React 19](https://react.dev) / [TypeScript 5](https://typescriptlang.org)
> - [Tailwind CSS 4](https://tailwindcss.com)
> - [React Flow](https://reactflow.dev) -- org chart
> - [Vitest 4](https://vitest.dev) -- testing
> - [OpenClaw](https://openclaw.ai) -- AI gateway and agent runtime
> 
> ---
> 
> ## Documentation
> 
> | Document | Description |
> |----------|-------------|
> | [SETUP.md](SETUP.md) | Full setup guide, agent customization, troubleshooting |
> | [docs/API.md](docs/API.md) | REST API reference for all endpoints |
> | [docs/COMPONENTS.md](docs/COMPONENTS.md) | UI component catalog (50+ components) |
> | [docs/THEMING.md](docs/THEMING.md) | Theme system, CSS tokens, settings API |
> | [CONTRIBUTING.md](CONTRIBUTING.md) | How to contribute |
> | [CHANGELOG.md](CHANGELOG.md) | Version history |
> | [CLAUDE.md](CLAUDE.md) | Developer archi

## 延伸閱讀

相關概念：[[微服務]] · [[自動化]] · [[API 設計]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[OpenAI--openai|OpenAI/openai]] · [[Microsoft--PowerAutomate|Microsoft/PowerAutomate]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]]

[GitHub](https://github.com/JohnRiceML/clawport-ui) · [官方網站](https://clawport.dev)

## 相關收錄

> [!note]- 直接競品（同子分類：代理管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "代理管理" AND file.name != "JohnRiceML--clawport-ui"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "JohnRiceML--clawport-ui"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "JohnRiceML--clawport-ui" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "JohnRiceML--clawport-ui"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["微服務","自動化","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "JohnRiceML--clawport-ui" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "JohnRiceML" AND file.name != "JohnRiceML--clawport-ui"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/JohnRiceML--clawport-ui");
> const all = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars_per_day || 0, "desc");
> const rank = all.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const catAll = all.where(p => p.category === me?.category);
> const catRank = catAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const totalStarsAll = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars || 0, "desc");
> const starsRank = totalStarsAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> if (rank > 0) {
>   const pct = Math.round((1 - rank / all.length) * 100);
>   dv.paragraph(`Stars/天排名：**全 vault 第 ${rank}**/${all.length}（前 ${100 - pct}%）· **${me.category} 第 ${catRank}**/${catAll.length}\nStars 總量排名：**第 ${starsRank}**/${totalStarsAll.length}`);
> }
> ```

## Star 趨勢

> [!abstract]- Stars 成長追蹤
> ```dataviewjs
> const me = dv.page("Repos/JohnRiceML--clawport-ui");
> if (me?.star_history) {
>   const raw = me.star_history.toString();
>   const points = raw.split(",").map(p => { const [d, s] = p.split(":"); return { date: d, stars: parseInt(s) }; }).filter(p => !isNaN(p.stars));
>   if (points.length >= 2) {
>     const max = Math.max(...points.map(p => p.stars));
>     const lines = points.map(p => {
>       const w = Math.round(p.stars / max * 25);
>       return `${p.date} ${"\u2588".repeat(w)}${"\u2591".repeat(25-w)} ${p.stars.toLocaleString()}`;
>     });
>     const first = points[0].stars;
>     const last = points[points.length-1].stars;
>     const growth = first > 0 ? Math.round((last - first) / first * 100) : 0;
>     lines.push(`\n**成長** +${(last-first).toLocaleString()} stars（${growth}%）in ${points.length} snapshots`);
>     // 趨勢方向偵測
>     if (points.length >= 3) {
>       const mid = Math.floor(points.length / 2);
>       const fh = points.slice(0, mid), sh = points.slice(mid);
>       const rateF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
>       const rateS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
>       const ratio = rateF > 0 ? rateS / rateF : rateS > 0 ? 2 : 1;
>       const dir = ratio > 1.3 ? "Rising（加速中）" : ratio < 0.7 ? "Cooling（降溫中）" : "Stable（穩定）";
>       lines.push(`**趨勢方向** ${dir}（加速比 ${Math.round(ratio * 100) / 100}x）`);
>     }
>     dv.paragraph(lines.join("\n"));
>   } else { dv.paragraph("需要 2+ 次快照才能顯示趨勢"); }
> } else { dv.paragraph("尚無 star_history 資料（下次出現在 trending 時會開始追蹤）"); }
> ```

## 相對成長速度

> [!abstract]- 跟 vault 中同類專案比較
> ```dataviewjs
> const me = dv.page("Repos/JohnRiceML--clawport-ui");
> if (me) {
>   const all = dv.pages('"Repos"').where(p => p.status !== "archived");
>   const sameCat = all.where(p => p.category === me.category);
>   const avgAll = all.length > 0 ? Math.round(all.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / all.length) : 0;
>   const avgCat = sameCat.length > 0 ? Math.round(sameCat.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / sameCat.length) : 0;
>   const mySpd = me.stars_per_day || 0;
>   const vsAll = avgAll > 0 ? Math.round(mySpd / avgAll * 100) : 0;
>   const vsCat = avgCat > 0 ? Math.round(mySpd / avgCat * 100) : 0;
>   dv.table(["比較對象", "平均 Stars/天", "本專案", "倍數"], [
>     ["全 Vault", avgAll, mySpd, vsAll + "%"],
>     ["同分類 (" + me.category + ")", avgCat, mySpd, vsCat + "%"],
>   ]);
>   if (vsAll >= 300) dv.paragraph("**極速成長** — 成長速度是 vault 平均的 3 倍以上");
>   else if (vsAll >= 150) dv.paragraph("**高速成長** — 成長速度高於 vault 平均");
>   else if (vsAll >= 50) dv.paragraph("**正常速度** — 接近 vault 平均水平");
>   else dv.paragraph("**低速成長** — 低於 vault 平均，可能已過熱度高峰");
> }
> ```

## 決策分數

> [!abstract]- 綜合評估（自動計算）
> ```dataviewjs
> const me = dv.page("Repos/JohnRiceML--clawport-ui");
> if (me) {
>   let score = 0;
>   let breakdown = [];
>   // 熱度 (0-25)
>   const spd = me.stars_per_day || 0;
>   const heat = Math.min(25, Math.round(spd / 40 * 25));
>   score += heat; breakdown.push(`熱度: ${heat}/25`);
>   // 安裝難度 (0-20)
>   const inst = me.install_complexity === "easy" ? 20 : me.install_complexity === "medium" ? 12 : 5;
>   score += inst; breakdown.push(`易用性: ${inst}/20`);
>   // 成熟度 (0-20)
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
>   const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
>   score += mat; breakdown.push(`成熟度: ${mat}/20`);
>   // 社群 (0-20)
>   const forks = me.forks || 0;
>   const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
>   score += comm; breakdown.push(`社群: ${comm}/20`);
>   // 授權 (0-15)
>   const lic = me.license || "";
>   const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
>   const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
>   score += licScore; breakdown.push(`授權: ${licScore}/15`);
>   const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
>   const bar = "\u2588".repeat(Math.round(score/5)) + "\u2591".repeat(20 - Math.round(score/5));
>   dv.paragraph(`## ${grade} (${score}/100)\n${bar}\n\n${breakdown.join(" | ")}`);
> }
> ```

---

## 個人筆記

> [!abstract]- 評估進度
> ```dataviewjs
> const me = dv.page("Repos/JohnRiceML--clawport-ui");
> if (me) {
>   const steps = [
>     { name: "已讀", done: me.status && me.status !== "to-review" },
>     { name: "已評分", done: (me.my_rating || 0) > 0 },
>     { name: "有結論", done: me.verdict && me.verdict !== "" },
>     { name: "Ring 決策", done: me.ring && me.ring !== "" && me.ring !== "assess" },
>     { name: "試用記錄", done: me.status === "tried" || me.status === "integrated" },
>   ];
>   const done = steps.filter(s => s.done).length;
>   const pct = Math.round((done / steps.length) * 100);
>   const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
>   dv.paragraph(`${bar} **${done}/${steps.length}** (${pct}%)`);
>   const todo = steps.filter(s => !s.done).map(s => s.name);
>   if (todo.length > 0) dv.paragraph("待完成：" + todo.join(" / "));
> }
> ```

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
> 測試環境 :: _OS / Node / Python 版本_
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 花費時間 :: _從零到可用_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 踩到的坑 :: _描述 + 解法_
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

### 決策記錄

> [!abstract]- 為什麼評估這個工具？
> **當時的痛點**：_遇到什麼問題才開始找工具？_
> **觸發來源**：_GitHub Trending / HN / 同事推薦 / 其他_
> **當時的約束**：_時間 / 團隊 / 語言 / 部署環境_

> [!note]- 最終決策
> decision:: _選了什麼（或為何還在觀望）_
> why:: _當時的理由（越具體越好）_
> outcome:: _後來實際發生了什麼_

### 探索日誌

_按時間記錄，每次接觸時追加一段（最新在上）_

> **2026-03-10** — 首次收錄
> _第一印象：_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，340 stars
