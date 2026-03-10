---
repo: TinyAGI/fractals
url: https://github.com/TinyAGI/fractals
owner: TinyAGI
owner_type: Organization
language: TypeScript
license: MIT
description: "Fractals is a recursive task orchestrator for agent swarm"
homepage: "https://tinyagicompany.com"
stars: 512
stars_per_day: 128
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
  - 開發工具
  - typescript
aliases:
  - "fractals"
  - "TinyAGI/fractals"
  - "一個遞歸任務協調器，能夠自動生成和執行子任務。"
---

# fractals

**512** stars · **128** stars/天 · 建立 4 天前 · TypeScript · MIT

`ORG`

> [!summary] 一句話摘要
> 一個遞歸任務協調器，能夠自動生成和執行子任務。

> [!abstract] 核心創新
> 這個專案能夠自動生成和執行子任務，提供遞歸任務協調的能力。

## 專案簡介

這個專案是一個遞歸任務協調器，能夠將高層次的任務分解為可執行的子任務，並使用代理群體來執行每個子任務。它的架構包括 Next.js 前端和 Hono 伺服器，通過 HTTP 通信來管理任務和執行。與其他任務管理工具相比，Fractals 特別強調任務的遞歸性和自動化執行，能夠有效處理複雜的任務流。實際使用中，這個工具能夠幫助用戶更好地組織和執行任務，但需要用戶具備一定的技術背景來設置和使用。對於需要處理複雜任務的開發團隊來說，這是一個非常有價值的工具。

**技術棧**：`TypeScript` · `JavaScript` · `CSS`

## 重點功能

- 將高層次任務自動分解為可執行的子任務。
- 使用代理群體來執行每個子任務，提升效率。
- 提供任務的視覺化和狀態更新。
- 支持遞歸性任務管理，適合複雜任務流。
- 集成 Next.js 前端，便於使用。

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著對於自動化和智能化任務管理的需求增加，這類工具變得越來越重要。這個專案提供了一種創新的方式來處理複雜任務，吸引了對效率有需求的開發者。

## 適合誰使用

**目標受眾**：需要高效管理和執行複雜任務的開發團隊。

> [!example] 使用場景
> - 開發者用它來自動化複雜的任務流，因為能夠有效管理多個子任務。
> - 項目經理用它來監控任務進度，因為提供了清晰的任務視覺化。
> - 團隊成員用它來協作執行任務，因為可以在同一環境中運行和測試代碼。

## 架構分析

前端使用 Next.js，後端是 Hono 伺服器，通過 HTTP 通信來管理任務和執行代理。

## 優缺點分析

> [!success] 優點
> - 能夠有效管理和執行複雜任務流。
> - 提供清晰的任務視覺化和狀態更新。
> - 支持遞歸性任務管理，靈活性高。

> [!danger] 缺點
> - 需要用戶具備一定的技術背景來設置。
> - 對於簡單任務可能過於複雜。
> - 依賴於外部代理的性能和穩定性。

> [!warning] 注意事項
> - 需要用戶具備一定的技術背景來設置。
> - 對於簡單任務可能過於複雜。
> - 依賴於外部代理的性能和穩定性。

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

相關概念：[[任務管理]] · [[自動化工具]] · [[代理系統]]

[GitHub](https://github.com/TinyAGI/fractals) · [官方網站](https://tinyagicompany.com)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，511 stars
