---
repo: TinyAGI/fractals
url: https://github.com/TinyAGI/fractals
owner: TinyAGI
owner_type: Organization
language: TypeScript
license: MIT
description: "Fractals is a recursive task orchestrator for agent swarm"
homepage: "https://tinyagicompany.com"
stars: 515
stars_per_day: 103
forks: 37
open_issues: 3
created: 2026-03-05
pushed_at: 2026-03-06
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
use_case: "自動將高層任務分解為可執行的子任務，並使用代理群進行執行。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
aliases:
  - "fractals"
  - "TinyAGI/fractals"
  - "自動將高層任務分解為可執行的子任務，並使用代理群進行執行。"
---

# fractals

**515** stars · **103** stars/天 · 建立 5 天前 · TypeScript · MIT

`ORG`

> [!summary] 一句話摘要
> 自動將高層任務分解為可執行的子任務，並使用代理群進行執行。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (103 stars/day)
> **授權** MIT (商業友好)
> **適合** 需要自動化任務分解並執行的中小型團隊，尤其是涉及多個子任務的專案。
> **一句話重點** Fractals 不僅是任務管理工具，更是一個智能化的任務執行平台，能夠自動化處理複雜的工作流。

> [!abstract] 核心創新
> Fractals 提供了一種自動化的遞歸任務分解和執行方式，能夠動態生成任務樹。

## 專案簡介

Fractals 是一個遞歸任務協調器，能夠將用戶輸入的高層任務分解為自相似的可執行子任務樹。它的工作流程包括兩個階段：首先，通過 LLM 對任務進行分類和分解，然後在獨立的 git 工作樹中執行每個葉子任務。技術上，它使用了 TypeScript 和 Hono 作為後端框架，並依賴 OpenAI 的 API 進行任務處理。與其他工具相比，Fractals 的獨特之處在於其遞歸結構和任務批次執行策略，可以根據用戶需求選擇深度優先或廣度優先的執行方式。實際使用中，這個工具可以有效地管理複雜任務，但需要注意其對於 OpenAI API 的依賴和速率限制。這個專案目前處於 beta 階段，對於中小型團隊來說，能夠快速上手並提高工作效率。建議在需要處理複雜任務分解時使用，但對於簡單任務則顯得過於繁瑣。

**技術棧**：`TypeScript` · `Next.js` · `Hono`

## 重點功能

- 遞歸任務分解 — 將高層任務自動分解為子任務樹，支持最大深度可配置。
- 批次執行策略 — 提供深度優先和廣度優先的執行選項，根據用戶需求選擇。
- 即時狀態更新 — 在執行過程中實時輪詢任務狀態，方便用戶監控進度。
- 獨立工作樹管理 — 每個子任務在獨立的 git 工作樹中執行，避免相互干擾。
- API 接口 — 提供多個 API 端點以便於集成和擴展，支持任務分解和執行。

## 快速開始

1. 安裝伺服器依賴
```bash
npm install
```
2. 安裝前端依賴
```bash
cd web && npm install && cd ..
```
3. 設置 OpenAI 金鑰
```bash
echo 'OPENAI_API_KEY=sk-...' > .env
```
4. 啟動伺服器 (port 1618)
```bash
npm run server
```
5. 啟動前端 (port 3000)
```bash
cd web && npm run dev
```

## 程式碼範例

```bash
# 啟動任務分解
curl -X POST http://localhost:1618/api/decompose -H 'Content-Type: application/json' -d '{"task":"你的任務","maxDepth":4}'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案由 TinyAGI 團隊開發，該團隊在 AI 代理領域有著豐富的經驗。Fractals 解決了傳統任務管理工具在處理複雜任務時的不足，提供了一種自動化的分解和執行方式。近期的討論和推廣使得這個工具逐漸受到關注，尤其是在 AI 任務自動化的需求日益增長的背景下。

## 適合誰使用

**目標受眾**：需要自動化任務分解並執行的中小型團隊，尤其是涉及多個子任務的專案。

> [!example] 使用場景
> - 產品經理用它來將一個大型專案分解為可執行的子任務，因為這樣可以更清晰地管理進度和資源分配。
> - 開發者用它來自動化測試流程，因為可以在多個 git 工作樹中同時執行測試，節省了手動配置的時間。
> - 研究人員用它來執行複雜的數據分析任務，因為可以利用 LLM 自動生成分析步驟，提升研究效率。

## 架構分析

Fractals 採用前後端分離的架構，前端使用 Next.js 提供用戶界面，後端則使用 Hono 作為 API 伺服器。用戶輸入任務後，系統通過 LLM 進行分類和分解，生成任務樹，然後在獨立的 git 工作樹中執行每個葉子任務。專案目錄結構清晰，src/ 目錄包含了主要的伺服器邏輯和任務處理邏輯。

## 技術深入分析

> [!note]- 展開深入分析
> Fractals 的核心在於其遞歸任務分解演算法，通過 LLM 對任務進行分類和分解，生成一棵任務樹。這種結構使得任務可以被有效地管理和執行。效能方面，根據使用情況，系統能夠支持多達 4 層的任務深度，並且在執行過程中能夠實時更新狀態。設計上，選擇使用 Hono 作為伺服器框架，因為其輕量且易於擴展，這使得整個系統在高負載下仍能保持良好的性能。與其他工具相比，Fractals 在任務的遞歸分解和批次執行策略上具有明顯的優勢，能夠更靈活地應對複雜的任務需求。

## 優缺點分析

> [!success] 優點
> - 自動化任務分解，減少手動配置的時間。
> - 支持多種執行策略，靈活應對不同需求。
> - 即時狀態更新，方便用戶監控進度。

> [!danger] 缺點
> - 依賴 OpenAI API，可能會面臨額外的成本。
> - 對於簡單任務來說，使用過程可能顯得繁瑣。
> - 目前功能仍在開發中，穩定性可能不足。

> [!warning] 注意事項
> - 需要有效的 OpenAI API 金鑰才能運行。
> - 對於高頻率任務執行，可能會受到 API 速率限制的影響。
> - 目前僅支持在 Node.js 環境中運行，對於其他環境的支持尚未實現。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供任務並行執行的能力，但不具備自動分解功能，適合簡單的任務調度。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據抓取和處理，無法進行任務的遞歸分解，適合特定的數據任務。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 37 |
| Open Issues | 3 |
| 最後推送 | 2026-03-06 |
| 建立日期 | 2026-03-05 |
| 官方網站 | [Link](https://tinyagicompany.com) |
| Repo 大小 | 778 KB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 91
>     "CSS" : 8
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jlia0](https://github.com/jlia0) | 6 |

## 社群與生態

**社群活躍度**：社群活躍度中等，定期更新和討論。
**連結**：[文件](https://tinyagicompany.com)

## README 摘錄

> [!info]- 展開查看原文 README
> Fractals 🌀
>   Recursive agentic task orchestrator
>   Give it any high-level task and it grows a self-similar tree of executable subtasks, then runs each leaf in isolated git worktrees with an agent swarm.
>   
>     
>     
>       
>     
>     
>       
>     
>   
> 
>   
> 
> ## Architecture
> 
> ```
> ┌─────────────────────────────────────────────────────────┐
> │  web/  (Next.js frontend)                               │
> │  - Task input                                           │
> │  - Tree visualization                                   │
> │  - Workspace setup                                      │
> │  - Execution status polling                             │
> └────────────────────┬────────────────────────────────────┘
>                      │ HTTP (:1618)
> ┌────────────────────▼────────────────────────────────────┐
> │  src/  (Hono server)                                    │
> │                                                         │
> │  ┌─────────┐   ┌──────────┐   ┌──────────────────────┐  │
> │  │  LLM    │   │Orchestr- │   │  Executor            │  │
> │  │classify │──>│  ator    │   │  Claude / Codex CLI  │  │
> │  │decompose│   │ plan()   │   │  git worktrees       │  │
> │  └─────────┘   └──────────┘   └──────────────────────┘  │
> │                                                         │
> │  OpenAI (gpt-5.2)            Claude / Codex CLI (spawn) │
> └─────────────────────────────────────────────────────────┘
> ```
> 
> ## Two-Phase Flow
> 
> ```
> Phase 1: PLAN                          Phase 2: EXECUTE
> ─────────────────                      ──────────────────
> User enters task                       User confirms plan
>         │                              User provides workspace path
>         v                                      │
>   classify(task)                               v
>   ┌──atomic──> mark "ready"            git init workspace
>   │                                    create worktrees
>   └──composite──> decompose(task)      batch leaf tasks
>                       │                        │
>                  [children]                    v
>                       │                 claude --dangerously-skip-permissions
>                  plan(child) `)
> 5. **Execute** -- leaf tasks run via Claude CLI in batches, status updates poll in real-time
> 
> ## Batch Strategies
> 
> Due to rate limits, leaf tasks execute in batches rather than all at once.
> 
> | Strategy | Description | Status |
> |----------|-------------|--------|
> | **depth-first** | Complete all leaves under branch 1.x, then 2.x, etc. Tasks within each branch run concurrently. | Implemented |
> | **breadth-first** | One leaf from each branch per batch. Spreads progress evenly. | Roadmap |
> | **layer-sequential** | All shallowest leaves first, then deeper. | Roadmap |
> 
> ## Project Structure
> 
> ```
> src/
>   server.ts        Hono API server (:1618)
>   types.ts         Shared types (Task, Session, BatchStrategy)
>   llm.ts           OpenAI calls: classify + decompose (structured output)
>   orchestrator.ts  Recursive plan() -- builds the tree, no execution
>   executor.ts      Claude CLI invocation per task in git worktree
>   workspace.ts     git init + worktree management
>   batch.ts         Batch execution strategies
>   index.ts         CLI entry point (standalone, no server)
>   print.ts         Tree pretty-printer (CLI)
> 
> web/
>   src/app/page.tsx              Main UI (input -> review -> execute)
>   src/components/task-tree.tsx  Recursive tree renderer
>   src/lib/api.ts                API client for Hono server
> ```
> 
> ## Quick Start
> 
> ```bash
> # 1. Install server deps
> npm install
> 
> # 2. Install frontend deps
> cd web && npm install && cd ..
> 
> # 3. Set your OpenAI key
> echo "OPENAI_API_KEY=sk-..." > .env
> 
> # 4. Start the server (port 1618)
> npm run server
> 
> # 5. Start the frontend (port 3000)
> cd web && npm run dev
> ```
> 
> Port `1618` — the golden ratio, the constant behind fractal geometry.
> 
> ## API
> 
> | Endpoint | Method | Description |
> |----------|--------|-------------|
> | `/api/session` | GET | Current session state |
> | `/api/decompose` | POST | Start recursive decomposition

## 延伸閱讀

相關概念：[[自動化]] · [[微服務]] · [[API 設計]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[google--TaskOrchestrator|google/TaskOrchestrator]] · [[airflow--airflow|airflow/airflow]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]] · [[zornade--visura-api|zornade/visura-api]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--twitter-cli|jackwener/twitter-cli]]

[GitHub](https://github.com/TinyAGI/fractals) · [官方網站](https://tinyagicompany.com)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "TinyAGI--fractals"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "TinyAGI--fractals"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，511 stars
