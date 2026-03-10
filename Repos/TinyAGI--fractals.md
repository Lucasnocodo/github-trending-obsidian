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
  - "自動化任務管理，讓多個代理協同工作。"
---

# fractals

**513** stars · **103** stars/天 · 建立 5 天前 · TypeScript · MIT

`ORG`

> [!summary] 一句話摘要
> 自動化任務管理，讓多個代理協同工作。

> [!abstract] 核心創新
> Fractals 提供了一個自動化的遞歸任務協調方案，能夠有效管理和執行複雜任務。

## 專案簡介

Fractals 是一個遞歸任務協調器，能夠將高層次任務分解為可執行的子任務，並在多個代理之間協同執行。它使用 Hono 伺服器進行任務管理，並結合 OpenAI 和 Claude CLI 進行任務執行。與其他任務管理工具相比，Fractals 的特點在於其自動化的任務分解和執行流程，能夠有效提高工作效率。實際使用中，該工具能夠處理複雜的任務結構，但需要注意的是對於任務的設計和規劃要求較高。整體而言，Fractals 是一個適合需要自動化任務管理的開發者和團隊的工具。

**技術棧**：`TypeScript` · `JavaScript` · `Next.js`

## 重點功能

- 遞歸任務分解，將高層次任務轉化為子任務。
- 支持多個代理協同執行任務。
- 實時狀態更新，方便監控任務進度。
- 與 OpenAI 和 Claude CLI 集成，支持多種執行策略。
- 可視化任務樹，便於管理和規劃。

## 快速開始

1. 安裝 Fractals
```bash
npm install fractals
```
2. 啟動伺服器
```bash
npm start
```
3. 輸入任務
```bash
curl -X POST http://localhost:1618/task -d '{"task": "your high-level task"}'
```
4. 確認計劃
```bash
curl -X POST http://localhost:1618/confirm
```
5. 查看執行狀態
```bash
curl http://localhost:1618/status
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著自動化和高效能工作流程的需求增加，Fractals 提供了一個創新的解決方案來管理和執行任務。作者的背景和對任務管理的深入理解使得這個工具在開發者社群中受到關注。近期的更新和功能增強也提升了其吸引力。

## 適合誰使用

**目標受眾**：需要自動化任務管理的開發者和團隊。

> [!example] 使用場景
> - 開發者 用它來 自動化重複性任務，因為能夠節省時間和精力。
> - 團隊 用它來 協調多個代理的工作，因為可以提高任務執行的效率。
> - 研究者 用它來 管理複雜的實驗流程，因為能夠清晰地分解和執行每個步驟。

## 架構分析

Fractals 採用前後端分離架構，前端使用 Next.js 進行任務輸入和可視化，後端使用 Hono 伺服器進行任務協調和執行。

## 優缺點分析

> [!success] 優點
> - 自動化任務分解，提高工作效率。
> - 支持多代理協同，適合團隊合作。
> - 可視化界面便於管理和監控任務進度。

> [!danger] 缺點
> - 對於任務設計要求較高，使用門檻較高。
> - 需要一定的技術背景來配置和使用。
> - 對於大型任務，可能會面臨性能挑戰。

> [!warning] 注意事項
> - 對於任務設計要求較高，需要清晰的任務結構。
> - 可能需要調整執行策略以適應不同的任務。
> - 對於大型任務，可能會面臨性能瓶頸。

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

**社群活躍度**：社群活躍，定期更新和修復問題。

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

相關概念：[[任務管理]] · [[自動化工作流程]] · [[多代理系統]]

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
