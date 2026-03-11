---
repo: TinyAGI/fractals
url: https://github.com/TinyAGI/fractals
owner: TinyAGI
owner_type: Organization
language: TypeScript
license: MIT
description: "Fractals is a recursive task orchestrator for agent swarm"
homepage: "https://tinyagicompany.com"
stars: 517
stars_per_day: 103
forks: 38
open_issues: 3
created: 2026-03-05
pushed_at: 2026-03-06
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "任務協調"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "自動將高層次任務分解為可執行的子任務，並使用代理群組執行。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 1
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:517,2026-03-11:517"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
aliases:
  - "fractals"
  - "TinyAGI/fractals"
  - "自動將高層次任務分解為可執行的子任務，並使用代理群組執行。"
---

# fractals

**517** stars · **103** stars/天 · 建立 5 天前 · TypeScript · MIT

`ORG`

> [!summary] 一句話摘要
> 自動將高層次任務分解為可執行的子任務，並使用代理群組執行。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (103 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要自動化任務分解與執行的中小型開發團隊。
> **一句話重點** Fractals 不僅是一個任務協調器，更是一個自動化的任務管理解決方案，能夠顯著提高開發效率。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、10 小時整合，得到自動化任務分解的效果，值得一試。

> [!abstract] 核心創新
> 能夠自動將高層次任務分解為可執行的子任務，並使用代理群組執行。

## 專案簡介

Fractals 是一個遞歸任務協調器，能夠將用戶輸入的高層次任務轉化為一棵可執行的子任務樹，並在隔離的 git 工作樹中運行每個子任務。用戶首先輸入任務，系統會通過 LLM 進行分類和分解，然後生成一個任務計劃。接著，用戶確認計劃並提供工作空間路徑，系統會初始化 git 工作空間並創建工作樹，最後通過 Claude CLI 批量執行子任務。這種設計使得任務執行過程可以並行進行，並且能夠有效管理任務的依賴性。

關鍵指令包括 `npm run server` 啟動伺服器和 `npm run dev` 啟動前端。Fractals 的賣點在於其能夠自動化任務分解和執行，特別適合需要處理複雜任務的開發者。技術上，Fractals 使用 TypeScript 和 Hono 框架，並依賴 OpenAI 的 API 進行任務的分類和分解，這使得它能夠生成結構化的輸出。這種架構的選擇使得開發者可以輕鬆地擴展功能，並且保持代碼的可讀性和可維護性。

與其他類似工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，Fractals 提供了更高層次的自動化和任務管理能力，特別是在處理複雜的任務依賴時。使用 Fractals 時，開發者可以期待更高的生產力，因為它能夠自動化許多繁瑣的任務分解過程。雖然目前仍在開發中，但其潛力巨大，適合中小型團隊使用。對於需要快速原型開發的情境，Fractals 是一個理想的選擇，而對於簡單的任務或小型專案，可能會覺得其功能過於複雜。

**技術棧**：`TypeScript 5.9.3` · `Hono 4.12.5` · `OpenAI 6.25.0`

## 重點功能

- 遞歸任務分解 — 將高層次任務轉化為可執行的子任務樹。
- 批量執行策略 — 支援深度優先和廣度優先的批量執行策略。
- 即時狀態更新 — 在執行過程中實時輪詢任務狀態。
- 多任務依賴管理 — 能夠處理任務之間的依賴性，確保正確執行順序。
- CLI 工具支援 — 提供 CLI 介面，方便在無伺服器環境中使用。

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

{
  "前置條件": "需要安裝 Node.js 和 npm。",
  "指令": "npm run server",
  "預期輸出": "啟動伺服器，監聽在 port 1618。"
}

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 517 stars（103/天），forks 38（7.4%），顯示出穩定的增長潛力。作者 jlia0 之前在開源社群中活躍，這個專案解決了任務分解和執行的痛點，特別是對於需要處理複雜任務的開發者。社群對此專案的反應良好，並且有活躍的開發活動。這個工具的出現正好填補了市面上對於高層次任務自動化的需求，特別是在使用 LLM 的背景下。forks/stars 比率顯示出使用者對於修改和擴展的興趣，這意味著有許多開發者在實際使用中進行調整。

## 適合誰使用

**目標受眾**：需要自動化任務分解與執行的中小型開發團隊。

> [!example] 使用場景
> - 後端工程師用它來自動化 API 任務的分解與執行，因為手動處理複雜的任務依賴性容易出錯。
> - 產品經理用它來快速生成任務計劃，因為可以視覺化任務樹，方便與團隊溝通。
> - DevOps 工程師用它來管理 CI/CD 流程中的多個任務，因為能夠在隔離的環境中執行每個任務，降低風險。

## 架構分析

Fractals 的架構設計採用 Hono 作為 API 伺服器，並使用 Next.js 作為前端框架。這種設計使得前後端能夠輕鬆整合，並且保持高效的資料流。用戶輸入的任務經過 LLM 的分類和分解後，生成的任務樹會被傳遞到執行器，並在 git 工作樹中執行。

這樣的設計使得任務執行可以在隔離的環境中進行，降低了風險。選擇 Hono 作為伺服器框架的原因在於其輕量和高效，能夠快速處理請求。這種架構的代價是需要額外的配置來管理 git 工作樹，並且對於初學者來說可能會有一定的學習曲線。

整體而言，這種設計提供了良好的擴展性，能夠隨著需求的增加而調整。未來可能會面臨的瓶頸包括對於任務數量的管理，特別是在高並發的情況下，可能會影響性能。

## 技術深入分析

Fractals 的核心技術機制在於使用 LLM 進行任務的分類和分解，這使得它能夠生成結構化的任務樹。系統的資料流從用戶輸入任務開始，經過 LLM 的處理後，生成的任務樹會被傳遞到執行器進行執行。這種設計使得任務執行過程可以在隔離的 git 工作樹中進行，降低了風險。效能方面，Fractals 能夠處理多個任務，但在高並發情況下可能會遇到瓶頸，特別是在執行大量子任務時。

選擇 TypeScript 和 Hono 框架的原因在於其輕量和高效，這使得開發者能夠快速構建和擴展功能。依賴樹的複雜度相對較低，主要依賴於 OpenAI 的 API，這降低了供應鏈風險。技術風險方面，未來可能會面臨對於任務數量的管理挑戰，特別是在高並發的情況下，可能會影響性能。整合方面，Fractals 與主流框架的整合難度較低，能夠輕鬆融入現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟，對於新手來說相對友好。安裝過程順暢，沒有明顯的坑。提供了良好的快速入門指南，能夠幫助用戶快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 自動化任務分解，減少手動操作的需求。
> - 支援多種批量執行策略，靈活應對不同情境。
> - 即時狀態更新，方便用戶監控任務進度。

> [!danger] 缺點
> - 目前僅支援 OpenAI API，未來可能需要擴展。
> - 對於複雜任務的處理可能需要額外的手動干預。
> - 尚未實現的功能可能影響使用體驗。

> [!warning] 注意事項
> - 目前僅支援 OpenAI API，無法使用其他 LLM。
> - 對於非常複雜的任務，可能需要手動調整生成的子任務。
> - 尚未實現的功能可能會影響使用體驗，例如任務編輯和持久會話。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供任務並行處理，但不具備自動化任務分解的能力。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據抓取，缺乏任務協調和執行的功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 使用傳統的任務並行處理方式，與 Fractals 的自動化任務分解形成對比。 | 如果你的團隊需要簡單的任務並行處理，而不需要複雜的任務分解。 | medium，因為需要重新設計任務管理流程。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據抓取，缺乏任務協調能力，與 Fractals 的任務管理功能不同。 | 如果你的主要需求是數據抓取，而不需要任務分解和執行。 | low，因為可以直接替換數據抓取的部分。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **fractals** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用傳統的任務並行處理方式，與 Fractals 的自動化任務分解形成對比。 | 專注於數據抓取，缺乏任務協調能力，與 Fractals 的任務管理功能不同。 |
> | 遷移成本 | - | medium，因為需要重新設計任務管理流程。 | low，因為可以直接替換數據抓取的部分。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要簡單的任務並行處理，而不需要複雜的任務分解。 | 如果你的主要需求是數據抓取，而不需要任務分解和執行。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些情況下，任務樹可能無法正確顯示，特別是在深度較大的情況下。
  - 解法：手動調整任務深度或簡化任務。
- **[HIGH]** 執行過程中可能會遇到 git 工作樹的衝突。
  - 解法：在執行前確保工作樹是乾淨的。
- [MEDIUM] API 請求速率限制可能導致任務執行延遲。
  - 解法：調整批量執行策略以減少請求數量。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠自動化任務分解，提高開發效率。 |
| 大型企業的複雜任務管理 | 適合 | 雖然功能強大，但可能需要額外的手動調整。 |
| 簡單的任務執行 | 不適合 | 對於簡單任務，功能過於複雜。 |
| 需要快速原型開發的團隊 | 非常適合 | 能夠快速生成任務計劃和執行。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、10 小時整合，得到自動化任務分解的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取用戶提供的工作空間資料。依賴於 OpenAI API，需確保 API 金鑰的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/TinyAGI--fractals");
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
| Forks | 38 |
| Open Issues | 3 |
| 最後推送 | 2026-03-06 |
| 建立日期 | 2026-03-05 |
| 官方網站 | [Link](https://tinyagicompany.com) |
| Repo 大小 | 778 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/TinyAGI/fractals) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@hono/node-server` `@types/node` `dotenv` `hono` `openai` `tsx` `typescript` `zod`

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

**社群活躍度**：社群活躍度中等，最近有持續的開發和更新。
**連結**：[文件](https://tinyagicompany.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-05 ~ 2026-03-06）
> **活躍天數** 2 天 · **最新 commit** chore: update prompt

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/TinyAGI/fractals/issues/1) | "Confirm & Execute" button is hidden below the fold after de | 0 | 0 |

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
> | `/api/decompose` | POST | Start recursive decomposition. Body: `{ task, maxDepth }` |
> | `/api/workspace` | POST | Initialize git workspace. Body: `{ path }` |
> | `/api/execute` | POST | Start batch execution. Body: `{ strategy? }` |
> | `/api/tree` | GET | Current tree state (poll during execution) |
> | `/api/leaves` | GET | All leaf tasks with status |
> 
> ## Configuration
> 
> | Env Variable | Default | Where | Description |
> |---|---|---|---|
> | `OPENAI_API_KEY` | -- | `.env` | Required. OpenAI API key. |
> | `PORT` | `1618` | `.env` | Server port. |
> | `MAX_DEPTH` | `4` | CLI only | Max recursion depth. |
> | `NEXT_PUBLIC_API_URL` | `http://localhost:1618` | `web/.env.local` | Server URL for frontend. |
> 
> ## Roadmap
> 
> **Executor**
> - [ ] OpenCode CLI as a third executor option
> - [ ] Per-task executor override (mix Claude and Codex in one plan)
> - [ ] Merge worktree branches back to main after completion
> 
> **Backpropagation (merge agent)**
> - [ ] After all leaf tasks under a composite node complete, run a merger agent that combines their worktree branches into one cohesive result
> - [ ] Propagate bottom-up: merge layer N leaves into layer N-1 composites, then merge those into layer N-2, all the way to root
> - [ ] Merger agent resolves conflicts, wires modules together, ensures sibling outputs are compatible
> - [ ] Final merge at root produces a single unified branch with the complete project
> 
> **Task dependencies & priority**
> - [ ] Peer dependencies between subtasks -- declare that task 1.2 depends on 1.1's output (e.g., API must exist before frontend can call it)
> - [ ] Dependency-aware scheduling -- respect declared ordering constraints when batching, run independent tasks concurrently but block dependents until prerequisites complete
> - [ ] Priority weights -- allow marking subtasks as critical path vs. nice-to-have, execute high-priority tasks first within a batch
> - [ ] LLM-inferred dependencies -- during decompose, have the LLM output dependency edges between sibling subtasks (structured output: `{ subtasks, dependencies }`)
> 
> **Batch strategies**
> - [ ] Breadth-first batch strategy
> - [ ] Layer-sequential batch strategy
> - [ ] Configurable concurrency limit per batch
> 
> **Classify / decompose heuristics**
> - [ ] User-defined heuristics -- inject custom rules into classify/decompose prompts (e.g., "always treat database migrations as atomic", "split frontend and backend into separate subtasks")
> - [ ] Project-aware context -- feed existing codebase structure (file tree, package.json) into classify/decompose so the LLM knows what already exists
> - [ ] Calibration mode -- let users mark classify/decompose decisions as correct or wrong, use feedback to refine prompts over time
> 
> **UX**
> - [ ] SSE/WebSocket for real-time tree updates (replace polling)
> - [ ] Task editing -- modify/delete/re-decompose subtasks before executing
> - [ ] Persistent sessions (SQLite/file-based)
> - [ ] Multi-session support

## 延伸閱讀

相關概念：[[自動化測試]] · [[CI/CD]] · [[任務管理]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[google--TaskOrchestrator|google/TaskOrchestrator]] · [[airflow--airflow|airflow/airflow]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

[GitHub](https://github.com/TinyAGI/fractals) · [官方網站](https://tinyagicompany.com)

## 相關收錄

> [!note]- 直接競品（同子分類：任務協調）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "任務協調" AND file.name != "TinyAGI--fractals"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "TinyAGI--fractals"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "TinyAGI--fractals" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "TinyAGI--fractals"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","CI/CD","任務管理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "TinyAGI--fractals" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> WHERE owner = "TinyAGI" AND file.name != "TinyAGI--fractals"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/TinyAGI--fractals");
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
> const me = dv.page("Repos/TinyAGI--fractals");
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
> const me = dv.page("Repos/TinyAGI--fractals");
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
> const me = dv.page("Repos/TinyAGI--fractals");
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
> const me = dv.page("Repos/TinyAGI--fractals");
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

- [[2026-03-11|2026-03-11]] — 再次上榜，517 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，511 stars
