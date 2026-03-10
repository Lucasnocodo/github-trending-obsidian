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
---

# fractals

**511** stars · **128** stars/天 · 建立 4 天前 · TypeScript · MIT

`ORG`

> [!summary] 一句話摘要
> 自動將高階任務分解為可執行的子任務，提升任務管理效率。

> [!abstract] 核心創新
> 提供了一個自動化的任務分解和執行解決方案。

## 專案簡介

它通過將高階任務轉化為自相似的可執行子任務樹，並在獨立的 git 工作樹中運行每個子任務，實現任務的自動化管理。技術上使用 TypeScript 和 Next.js，並整合了多個代理進行任務執行。與其他任務管理工具相比，它提供了更高的自動化和靈活性，特別適合需要處理複雜任務的開發者。這個專案在功能上非常創新，值得深入探索。

**技術棧**：`TypeScript` · `Next.js`

## 重點功能

- 將高階任務轉化為可執行的子任務樹。
- 在獨立的 git 工作樹中運行每個子任務。
- 提供任務執行狀態的即時監控。

## 快速開始

1. 安裝 Fractals
```bash
npm install -g fractals
```
2. 啟動任務管理界面
```bash
fractals start
```
3. 輸入高階任務

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在自動化和任務管理領域有豐富經驗，這個工具能夠有效解決複雜任務的管理問題。

## 適合誰使用

**目標受眾**：需要自動化任務管理的開發團隊和產品經理。

> [!example] 使用場景
> - [開發者] 用它來 自動化任務分解，因為可以更有效地管理複雜專案。
> - [團隊領導] 用它來 監控任務進度，因為能夠清楚了解每個子任務的狀態。
> - [產品經理] 用它來 確保任務按時完成，因為能夠動態調整任務優先級。

> [!warning] 注意事項
> 需要 Node.js 環境和特定的配置。

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
> └────

## 延伸閱讀

相關概念：[[任務分解]] · [[自動化管理]] · [[代理系統]]

[GitHub](https://github.com/TinyAGI/fractals) · [官方網站](https://tinyagicompany.com)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，511 stars
