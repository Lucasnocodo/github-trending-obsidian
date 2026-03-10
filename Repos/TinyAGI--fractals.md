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
  - "遞歸任務協調器，為代理群體生成可執行子任務。"
---

# fractals

**515** stars · **103** stars/天 · 建立 5 天前 · TypeScript · MIT

`ORG`

> [!summary] 一句話摘要
> 遞歸任務協調器，為代理群體生成可執行子任務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (103 stars/day)
> **適合** 需要高效能任務協調的開發者，特別是在處理複雜任務時。
> **一句話重點** Fractals 的設計理念在於自動化任務分解，讓開發者能夠高效管理複雜任務。

> [!abstract] 核心創新
> Fractals 提供了一種遞歸的任務協調方式，能夠自動生成可執行的子任務。

## 專案簡介

Fractals 是一個遞歸任務協調器，能夠將高層次任務分解為可執行的子任務，並在獨立的 git 工作樹中運行每個子任務。這個工具使用了 Hono 作為後端伺服器，並結合 OpenAI 的 LLM 進行任務分類和分解，最終通過 Claude CLI 執行。該專案的架構設計使得任務可以在多個代理之間並行處理，並且支持多種執行策略以應對 API 限制。與其他任務管理工具相比，Fractals 的遞歸性和自適應性使其在處理複雜任務時更具靈活性。這個專案適合需要高效能任務協調的開發者，尤其是在需要處理大量子任務的情境下。若你需要一個能夠自動化任務分解的工具，Fractals 是個不錯的選擇，但對於簡單任務可能過於複雜。

**技術棧**：`TypeScript` · `Next.js`

## 重點功能

- 遞歸任務分解 — 將高層次任務拆分為可執行的子任務，支持多層次結構。
- 多代理執行 — 在獨立的 git 工作樹中運行每個子任務，提升並行處理能力。
- 自適應執行策略 — 根據 API 限制選擇合適的執行策略，優化任務執行。
- 實時狀態更新 — 提供任務執行的即時狀態更新，方便監控進度。
- 用戶友好的前端 — 使用 Next.js 提供直觀的任務管理界面。

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

## 程式碼範例

```bash
curl -X POST http://localhost:1618/api/decompose -d '{"task": "your high-level task", "maxDepth": 4}'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著自動化和任務協調需求的增加，Fractals 提供了一個創新的解決方案。作者的背景在於對於任務管理的深入理解，並且這個工具的設計理念符合當前對於高效能的需求。

## 適合誰使用

**目標受眾**：需要高效能任務協調的開發者，特別是在處理複雜任務時。

> [!example] 使用場景
> - 開發者用它來自動化複雜的部署流程，因為可以將任務拆分為多個子任務並行執行。
> - 數據科學家用它來處理大規模數據分析，因為可以有效管理多個分析任務。
> - 系統管理員用它來優化伺服器維護任務，因為可以在不同工作樹中獨立執行任務。

## 架構分析

Fractals 採用前後端分離架構，核心資料流為：用戶輸入任務 → 後端伺服器處理 → 執行子任務。使用 Hono 作為 API 伺服器，並結合 OpenAI 進行任務分類。專案目錄結構中，主要檔案包括伺服器和前端代碼。

## 優缺點分析

> [!success] 優點
> - 支持複雜任務的遞歸分解，提升任務管理效率。
> - 多代理並行執行，縮短任務完成時間。
> - 用戶界面友好，便於使用者操作。

> [!danger] 缺點
> - 需要 OpenAI API 金鑰，對於無法獲取金鑰的用戶不友好。
> - 對於簡單任務可能過於複雜，增加了使用難度。
> - 目前僅支持特定的執行環境，限制了靈活性。

> [!warning] 注意事項
> - 需要 OpenAI API 金鑰，對於沒有金鑰的用戶不友好。
> - 對於簡單任務可能過於複雜，增加了使用門檻。
> - 目前僅支持特定的執行環境，限制了靈活性。

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

相關概念：[[微服務]] · [[自動化測試]] · [[任務管理]]

[GitHub](https://github.com/TinyAGI/fractals) · [官方網站](https://tinyagicompany.com)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "TinyAGI--fractals"
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
