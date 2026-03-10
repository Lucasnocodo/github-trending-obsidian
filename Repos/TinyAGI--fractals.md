---
repo: TinyAGI/fractals
url: https://github.com/TinyAGI/fractals
owner: TinyAGI
owner_type: Organization
language: TypeScript
license: MIT
description: "Fractals is a recursive task orchestrator for agent swarm"
homepage: "https://tinyagicompany.com"
stars: 511
stars_per_day: 128
forks: 35
open_issues: 3
created: 2026-03-05
first_seen: 2026-03-10
week: "2026-W11"
category: "基礎設施"
release_tag: ""
status: to-review
tags:
  - github
  - 基礎設施
  - typescript
---

# fractals

**511** stars · **128** stars/天 · 建立 4 天前 · TypeScript · MIT

> [!summary] 一句話摘要
> 自動將高階任務分解為可執行的子任務，並進行協同執行。

## 專案簡介

這個工具能夠將高階任務轉化為自相似的可執行子任務樹，並在獨立的 git 工作區中運行每個子任務。它使用 TypeScript 和 JavaScript 實作，並透過一個前端界面進行任務管理。與其他任務調度工具相比，Fractals 提供了更高的自動化程度和靈活性，適合需要協作的複雜任務。值得一試，特別是對於需要多任務協作的開發團隊。

## 重點功能

- 自動將高階任務分解為可執行的子任務。
- 支持在獨立的 git 工作區中運行子任務，避免相互影響。
- 提供任務樹的視覺化界面，便於管理和監控。
- 支持多個代理協同工作，提升執行效率。

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的創新在於其自動化任務分解的能力，滿足了開發者對於高效協作的需求，特別是在複雜項目中。

## 適合誰使用

**目標受眾**：需要高效任務管理和協作的開發團隊和研究人員。

> [!example] 使用場景
> - [開發團隊] 用它來協作開發大型專案，因為可以自動分解任務並分配給不同成員。
> - [產品經理] 用它來管理多個子任務，因為可以清晰地視覺化任務進度和狀態。
> - [研究人員] 用它來執行複雜的實驗，因為可以將實驗步驟自動化，減少手動操作。

> [!warning] 注意事項
> 可能需要配置和調整以適應特定的工作流程。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | TypeScript |
| 授權 | MIT |
| Stars | 511 |
| Forks | 35 |
| Issues | 3 |
| 建立日期 | 2026-03-05 |
| 官方網站 | [Link](https://tinyagicompany.com) |

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
> └────

## 延伸閱讀

相關概念：#任務調度 · #自動化 · #協同工作

[GitHub](https://github.com/TinyAGI/fractals)
 · [官方網站](https://tinyagicompany.com)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，511 stars
