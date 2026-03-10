---
repo: TinyAGI/fractals
url: https://github.com/TinyAGI/fractals
owner: TinyAGI
owner_type: Organization
language: TypeScript
license: MIT
description: "Fractals is a recursive task orchestrator for agent swarm"
homepage: "https://tinyagicompany.com"
stars: 513
stars_per_day: 103
forks: 35
open_issues: 3
created: 2026-03-05
pushed_at: 2026-03-06
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
  - org
aliases:
  - "fractals"
  - "TinyAGI/fractals"
  - "為代理群體提供遞歸任務協調器。"
---

# fractals

**513** stars · **103** stars/天 · 建立 5 天前 · TypeScript · MIT

`ORG`

> [!summary] 一句話摘要
> 為代理群體提供遞歸任務協調器。

> [!abstract] 核心創新
> 能夠自動將高層次任務遞歸分解為子任務，並在獨立環境中執行。

## 專案簡介

Fractals 是一個遞歸任務協調器，能夠將高層次任務分解為可執行的子任務，並在獨立的 git 工作樹中運行這些任務。它利用 LLM 進行任務分類和分解，並通過 Hono 伺服器進行任務的計劃和執行。與其他任務管理工具不同，Fractals 專注於代理群體的協作，能夠有效管理複雜的任務結構。這個工具的使用效果取決於任務的複雜性和 LLM 的性能，對於需要協調多個任務的開發者來說非常實用。整體而言，Fractals 是一個創新的任務協調解決方案，適合需要高效協作的開發環境。

**技術棧**：`TypeScript` · `JavaScript` · `CSS`

## 重點功能

- 將高層次任務遞歸分解為可執行的子任務。
- 支持在獨立的 git 工作樹中運行任務。
- 利用 LLM 進行任務分類和計劃。
- 實時狀態更新，方便監控任務進度。
- 支持多代理協作，提升任務執行效率。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 啟動伺服器
```bash
npm start
```
3. 輸入任務
```bash
輸入高層次任務以開始分解。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 AI 和自動化技術的發展，越來越多的開發者尋求高效的任務管理工具。Fractals 提供了一種新穎的方式來協調和執行任務，特別是在多代理環境中，這使得它在開發者社群中受到關注。

## 適合誰使用

**目標受眾**：需要高效任務協調的開發者和團隊。

> [!example] 使用場景
> - 開發者 用它來 協調多個任務，因為能夠自動化任務分解和執行。
> - 團隊領導 用它來 管理複雜的專案，因為可以清晰地視覺化任務結構。
> - 研究人員 用它來 測試不同的任務策略，因為可以快速調整和執行子任務。

## 架構分析

Fractals 採用前後端分離架構，前端使用 Next.js 進行任務輸入和視覺化，後端則利用 Hono 伺服器進行任務計劃和執行。

## 優缺點分析

> [!success] 優點
> - 能夠有效管理複雜任務，提升工作效率。
> - 支持多代理協作，適合團隊使用。
> - 實時更新任務狀態，方便監控進度。

> [!danger] 缺點
> - 需要一定的技術背景來配置和使用。
> - 對於簡單任務可能過於複雜。
> - 依賴於 LLM 的性能，可能受限於 API 限制。

> [!warning] 注意事項
> - 需要一定的技術背景來配置和使用。
> - 對於簡單任務可能過於複雜。
> - 依賴於 LLM 的性能，可能受限於 API 限制。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 35 |
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

**社群活躍度**：社群活躍度高，定期更新和增強功能。

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
> | **depth-first** | Complete all leaves under branch 1.x, then 2.x, etc. Tasks within each branch run 

## 延伸閱讀

相關概念：[[任務管理]] · [[代理協作]] · [[自動化]]

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

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，511 stars
