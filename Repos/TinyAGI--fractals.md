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
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "自動將高階任務分解為可執行的子任務，並使用代理群組進行執行。"
priority: medium
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
aliases:
  - "fractals"
  - "TinyAGI/fractals"
  - "自動將高階任務分解為可執行的子任務，並使用代理群組進行執行。"
---

# fractals

**515** stars · **103** stars/天 · 建立 5 天前 · TypeScript · MIT

`ORG`

> [!summary] 一句話摘要
> 自動將高階任務分解為可執行的子任務，並使用代理群組進行執行。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (103 stars/day)
> **適合** 需要自動化任務分解並在獨立環境中執行的開發團隊。
> **一句話重點** Fractals 的遞歸任務分解能力讓它在自動化任務管理上具有獨特優勢。

> [!abstract] 核心創新
> Fractals 透過遞歸的方式自動生成可執行的任務樹，並在隔離的環境中執行每個任務。

## 專案簡介

Fractals 是一個遞歸任務協調器，能夠將用戶輸入的高階任務分解為自相似的可執行子任務樹，並在隔離的 git 工作樹中運行每個葉子任務。它的工作流程分為兩個階段：首先通過 LLM 進行任務分類和分解，然後在用戶確認計劃後，初始化工作空間並批量執行任務。技術上，Fractals 使用了 Next.js 作為前端框架，並透過 Hono 伺服器處理 API 請求，調用 OpenAI 的 API 進行任務處理。與其他任務調度工具相比，Fractals 的獨特之處在於它的遞歸處理能力和在 git 工作樹中的執行方式，這使得每個任務的執行環境都是獨立的。使用者可以選擇不同的批次策略來執行任務，這樣可以有效地管理 API 的速率限制。這個專案目前處於 beta 階段，適合需要處理複雜任務的中小型團隊。建議在需要自動化高階任務分解時使用，但對於簡單的任務則可能過於複雜。

**技術棧**：`TypeScript` · `Next.js` · `Hono` · `OpenAI API`

## 重點功能

- 遞歸任務分解 — 將高階任務分解為自相似的子任務樹，支持最大深度設定（預設為 4）。
- 批次執行策略 — 提供深度優先、廣度優先等多種執行策略以應對 API 限制。
- 獨立工作樹 — 每個葉子任務在隔離的 git 工作樹中執行，避免環境干擾。
- 即時狀態更新 — 透過 API 請求實時獲取任務執行狀態。
- 可視化任務樹 — 提供前端界面以視覺化任務結構和執行狀態。

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
echo "OPENAI_API_KEY=sk-..." > .env
```
4. 啟動伺服器
```bash
npm run server
```
5. 啟動前端
```bash
cd web && npm run dev
```

## 程式碼範例

```bash
# 啟動伺服器
npm run server

# 啟動前端
cd web && npm run dev
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 jlia0 背景深厚，專注於 AI 代理和自動化領域，Fractals 切中了團隊在任務管理上的需求，特別是在需要高效分解和執行複雜任務的場景。隨著 AI 技術的進步，對於自動化任務的需求日益增加，這使得這個專案在近期受到關注。

## 適合誰使用

**目標受眾**：需要自動化任務分解並在獨立環境中執行的開發團隊。

> [!example] 使用場景
> - 產品經理用它來自動分解產品開發任務，因為這樣可以節省時間並確保每個子任務都能獨立執行。
> - 後端工程師用它來在 CI/CD 流程中自動執行多個測試任務，因為這樣可以提高測試的效率並減少手動干預。
> - 數據科學家用它來批量處理數據清理任務，因為這樣可以在不同的工作環境中同時運行多個數據處理流程。

## 架構分析

Fractals 採用前後端分離的架構，前端使用 Next.js 提供用戶界面，後端則使用 Hono 伺服器處理 API 請求。用戶輸入任務後，系統會通過 LLM 進行分類和分解，生成任務樹，然後在用戶確認後初始化 git 工作空間並批量執行任務。專案目錄結構清晰，src/ 目錄下包含伺服器、任務管理和執行的核心邏輯。

## 技術深入分析

> [!note]- 展開深入分析
> Fractals 的核心演算法基於 LLM 的任務分類和分解，能夠有效地將複雜任務拆解為可管理的子任務。效能上，使用者可以設定最大深度來控制任務樹的大小，這對於避免過度複雜的任務結構至關重要。設計上，Fractals 選擇了在 git 工作樹中執行任務，以保證每個任務的環境獨立性，這是與其他工具的一大區別。

## 優缺點分析

> [!success] 優點
> - 能夠自動化高階任務的分解，減少手動操作。
> - 支持多種批次執行策略，靈活應對不同場景。
> - 每個任務在獨立的環境中執行，避免相互干擾。

> [!danger] 缺點
> - 安裝和配置過程相對複雜，對新手不友好。
> - 需要依賴外部 API，可能會受到速率限制影響。
> - 當前功能仍在開發中，穩定性可能不足。

> [!warning] 注意事項
> - 僅支援 Node.js 環境，需安裝 npm。
> - 需要有效的 OpenAI API 金鑰才能運行。
> - 當前版本不支持 Windows 環境。
> - beta 階段，API 可能會變動。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[google--TaskOrchestrator\|google/TaskOrchestrator]] | TaskOrchestrator 提供了更簡單的任務管理功能，但不具備 Fractals 的遞歸分解能力。 |
| [[airflow--airflow\|airflow/airflow]] | Airflow 更適合大規模的工作流管理，而 Fractals 更專注於高階任務的自動分解和執行。 |

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

**社群活躍度**：社群活躍度中等，定期更新和回應問題。
**連結**：[文件](https://tinyagicompany.com/docs)

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

相關概念：[[自動化測試]] · [[微服務]] · [[CI/CD]]

相關專案：[[google--TaskOrchestrator|google/TaskOrchestrator]] · [[airflow--airflow|airflow/airflow]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

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

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，511 stars
