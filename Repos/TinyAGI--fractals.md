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
use_case: "讓高階任務自動分解成可執行的子任務，並用代理群組執行。"
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
  - "讓高階任務自動分解成可執行的子任務，並用代理群組執行。"
---

# fractals

**515** stars · **103** stars/天 · 建立 5 天前 · TypeScript · MIT

`ORG`

> [!summary] 一句話摘要
> 讓高階任務自動分解成可執行的子任務，並用代理群組執行。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (103 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險)
> **適合** 需要自動化任務執行並希望利用 LLM 進行任務分解的開發團隊。
> **一句話重點** Fractals 不僅是任務執行工具，更是自動化工作流的創新解決方案。

> [!abstract] 核心創新
> Fractals 透過遞歸的方式自動生成可執行的任務樹，並利用代理群組執行每個子任務。

## 專案簡介

Fractals 是一個遞歸的任務協調器，能夠將用戶輸入的高階任務轉化為一棵自相似的可執行子任務樹。用戶輸入任務後，系統會先分類並分解任務，然後在獨立的 git 工作樹中，利用代理群組執行每個葉子任務。這個過程分為兩個階段：第一階段是計劃，第二階段是執行。計劃階段中，系統會根據任務的結構生成子任務，並標記為「準備就緒」。執行階段則是將葉子任務批次執行，並即時更新狀態。技術上，Fractals 使用了 Next.js 作為前端框架，並透過 Hono 伺服器處理 API 請求，調用 OpenAI 的 LLM 進行任務分類和分解。與傳統的任務執行工具相比，Fractals 支持更複雜的任務結構，並能在多個工作樹中並行執行，這使得它在處理大型任務時更具效率。該工具的批次執行策略包括深度優先和廣度優先，能夠根據需求靈活調整。這個專案目前仍在開發中，未來計劃增加任務依賴和優先級管理功能。對於需要自動化任務執行的團隊來說，Fractals 是一個值得關注的選擇。

**技術棧**：`TypeScript` · `Next.js` · `Hono`

## 重點功能

- 任務分解 — 支持將高階任務分解為多層次的子任務，並生成可執行的任務樹。
- 即時狀態更新 — 在執行過程中即時更新每個任務的狀態，方便用戶監控進度。
- 批次執行策略 — 提供深度優先和廣度優先的執行策略，根據需求靈活調整執行順序。
- 多工作樹支持 — 每個葉子任務在獨立的 git 工作樹中執行，避免相互干擾。
- 可視化界面 — 使用 Next.js 提供友好的用戶界面，方便用戶輸入和查看任務樹。

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
# 用戶輸入任務
curl -X POST http://localhost:1618/api/decompose -H 'Content-Type: application/json' -d '{"task": "建立一個網站", "maxDepth": 3}'
# 預期輸出：
{
  "children": [
    {"task": "設計前端界面"},
    {"task": "設置後端伺服器"}
  ]
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的主要貢獻者 jlia0 在開源社群中有一定的知名度，過去參與過多個相關專案。Fractals 解決了高階任務自動化分解的痛點，這在現有工具中並不常見。近期的開源討論中，對於如何有效管理和執行複雜任務的需求逐漸增加，促使這個工具受到關注。技術生態的變化使得使用 LLM 進行任務分解成為可能，這為 Fractals 的實現提供了良好的基礎。

## 適合誰使用

**目標受眾**：需要自動化任務執行並希望利用 LLM 進行任務分解的開發團隊。

> [!example] 使用場景
> - 後端工程師用它來自動化部署流程，因為手動處理多個子任務容易出錯且耗時。
> - 產品經理用它來管理大型專案的任務分解，因為可以清楚地視覺化每個子任務的進度。
> - 數據科學家用它來批量執行數據處理任務，因為能夠在多個工作樹中並行處理，顯著提高效率。

## 架構分析

Fractals 採用微服務架構，前端使用 Next.js，後端使用 Hono 伺服器。用戶輸入任務後，系統會將其分類和分解，生成任務樹，然後在 git 工作樹中執行每個葉子任務。關鍵檔案包括 server.ts（API 伺服器）、orchestrator.ts（任務計劃）、executor.ts（執行任務）等，這些檔案共同協作以實現任務的自動化執行。

## 技術深入分析

Fractals 的核心技術在於其遞歸任務分解能力，使用 LLM 進行任務分類和分解，這使得它能夠處理複雜的任務結構。系統的效能在於能夠同時在多個 git 工作樹中執行任務，這樣的設計使得它能夠有效利用資源，並在面對大型專案時保持高效。選擇 TypeScript 和 Next.js 作為技術棧的原因在於其強大的生態系統和良好的開發體驗，這使得開發者能夠快速迭代和擴展功能。隨著專案的擴大，可能會面臨任務依賴管理的挑戰，這需要在設計上進行進一步的優化和調整，以確保系統的穩定性和可擴展性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝步驟，對於新手來說相對友好。安裝過程順暢，但需要注意設置 OpenAI 金鑰。文件中提供了基本的使用範例，幫助用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 支持高階任務的自動化分解，提升工作效率。
> - 即時狀態更新，方便用戶監控任務進度。
> - 多工作樹支持，避免任務間的相互干擾。

> [!danger] 缺點
> - 目前僅支持 OpenAI API，限制了使用範圍。
> - 尚在開發階段，可能存在穩定性問題。
> - 缺乏任務依賴管理功能，未來版本需改進。

> [!warning] 注意事項
> - 目前僅支持 OpenAI API，無法使用其他 LLM。
> - 需要 Node.js 環境，且必須安裝 npm 依賴。
> - 尚未實現任務依賴和優先級管理功能，未來版本將添加此功能。
> - 目前處於開發階段，可能存在不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 專注於文件同步，而 Fractals 專注於任務分解和執行，適用於更複雜的工作流。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | Flowseal 是一個代理工具，主要用於通訊，而 Fractals 則是任務管理工具，功能定位不同。 |

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

**社群活躍度**：社群活躍度中等，持續更新中。
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

相關概念：[[自動化]] · [[任務管理]] · [[多工作樹]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[google--TaskOrchestrator|google/TaskOrchestrator]] · [[airflow--airflow|airflow/airflow]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]] · [[zornade--visura-api|zornade/visura-api]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[ahmadawais--chartli|ahmadawais/chartli]]

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

- [[2026-03-10|2026-03-10]] — 首次收錄，511 stars
