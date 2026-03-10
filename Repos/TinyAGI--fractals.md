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
forks: 36
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
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
aliases:
  - "fractals"
  - "TinyAGI/fractals"
  - "自動將高階任務分解為可執行的子任務，並以代理群體執行。"
---

# fractals

**515** stars · **103** stars/天 · 建立 5 天前 · TypeScript · MIT

`ORG`

> [!summary] 一句話摘要
> 自動將高階任務分解為可執行的子任務，並以代理群體執行。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (103 stars/day)
> **適合** 需要自動化任務協調並希望利用 AI 代理的中小型團隊。
> **一句話重點** Fractals 讓任務協調變得自動化和高效，特別適合需要 AI 驅動的工作流程。

> [!abstract] 核心創新
> Fractals 提供了一個自動化的遞歸任務分解和執行的解決方案，能夠在獨立的 git 工作樹中運行每個子任務。

## 專案簡介

Fractals 是一個遞歸任務協調器，能夠將任何高階任務轉換為自相似的可執行子任務樹，並在獨立的 git 工作樹中運行每個葉子任務。使用者輸入任務後，系統會先進行任務分類，然後根據任務的結構進行分解，並在確認計劃後執行這些子任務。技術上，Fractals 結合了 Hono 作為後端伺服器，並使用 OpenAI 的 API 進行任務的分類和分解，最終通過 Claude 或 Codex CLI 執行任務。與其他任務協調工具相比，Fractals 的獨特之處在於其自動化的遞歸分解能力和對 git 工作樹的管理，這使得每個任務都能在隔離的環境中運行，避免了相互影響。實際使用中，Fractals 支持的最大遞歸深度為 4，並且可以根據用戶的需求選擇不同的執行策略，如深度優先或廣度優先。這個專案目前處於 beta 階段，適合中小型團隊進行自動化任務管理。若你的工作流程需要高效的任務分解和執行，Fractals 是一個值得考慮的選擇。

**技術棧**：`TypeScript` · `Next.js` · `Hono` · `OpenAI API`

## 重點功能

- 遞歸任務分解 — 將高階任務自動分解為可執行子任務，支持最大深度為 4。
- 獨立工作樹執行 — 每個子任務在獨立的 git 工作樹中運行，避免相互影響。
- 多種執行策略 — 支持深度優先和廣度優先等多種執行策略，根據需求選擇。
- 即時狀態更新 — 實時輪詢任務執行狀態，確保用戶隨時掌握進度。
- API 支持 — 提供 RESTful API 端點，方便與其他系統集成。

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
# 開始執行任務
curl -X POST http://localhost:1618/api/decompose -d '{"task": "分析數據", "maxDepth": 4}'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> Fractals 的創作者 jlia0 在開源社群中有一定的影響力，這個專案切中了對於高效任務管理的需求，尤其是在 AI 代理技術日益普及的背景下。隨著遠端工作的增加，團隊需要更靈活的工具來協調任務，Fractals 提供了一個新穎的解決方案。這個專案的推出時間點也恰好與許多團隊尋求自動化解決方案的需求重合。

## 適合誰使用

**目標受眾**：需要自動化任務協調並希望利用 AI 代理的中小型團隊。

> [!example] 使用場景
> - 項目經理用它來自動分解複雜的專案任務，因為這樣可以節省手動規劃的時間，並提高任務執行的效率。
> - 後端工程師用它來在 CI 流程中自動化執行測試任務，因為這樣可以確保每個測試在獨立環境中運行，避免環境衝突。
> - 數據科學家用它來批量處理數據分析任務，因為這樣可以利用多個代理同時運行，顯著縮短分析時間。

## 架構分析

Fractals 採用前後端分離的架構，前端使用 Next.js 提供用戶介面，後端則使用 Hono 作為 API 伺服器。用戶輸入任務後，系統會通過 LLM 進行任務分類和分解，然後在 git 工作樹中執行子任務。專案目錄結構清晰，src/ 目錄包含主要的伺服器邏輯和任務處理，而 web/ 目錄則包含前端介面和相關組件。

## 優缺點分析

> [!success] 優點
> - 自動化任務分解，節省手動規劃時間。
> - 支持多任務並行執行，提高整體效率。
> - 獨立工作樹執行，避免環境衝突。

> [!danger] 缺點
> - 目前僅支援特定操作系統，限制了使用範圍。
> - 需要有效的 OpenAI API 金鑰，增加了使用門檻。
> - 在高負載下可能會受到 API 限制影響。

> [!warning] 注意事項
> - 僅支援 Node.js 環境，需安裝 npm。
> - 需要有效的 OpenAI API 金鑰，否則無法進行任務分類和分解。
> - 目前僅支持 Linux 和 macOS，Windows 支援尚未實現。
> - 在高負載情況下，可能會受到 OpenAI API 的速率限制影響。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[TinyAGI--agents\|TinyAGI/agents]] | 與 Fractals 相比，Agents 更專注於單一任務的執行，而 Fractals 則提供了任務的遞歸分解和多任務並行執行的能力。 |
| [[Airflow--airflow\|Airflow/airflow]] | Airflow 是一個更為通用的工作流管理工具，Fractals 則專注於 AI 代理的任務分解和執行，適合需要 AI 驅動的自動化任務。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 36 |
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

**社群活躍度**：社群活躍度中等，定期更新和回應使用者問題。
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

相關概念：[[自動化測試]] · [[微服務]] · [[API 設計]]

相關專案：[[TinyAGI--agents|TinyAGI/agents]] · [[Airflow--airflow|Airflow/airflow]]

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
