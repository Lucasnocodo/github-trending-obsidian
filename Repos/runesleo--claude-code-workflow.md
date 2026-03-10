---
repo: runesleo/claude-code-workflow
url: https://github.com/runesleo/claude-code-workflow
owner: runesleo
owner_type: User
language: N/A
license: N/A
description: "Battle-tested Claude Code workflow template — memory management, context engineering, and task routing from 3 months of daily usage"
homepage: ""
stars: 277
stars_per_day: 40
forks: 39
open_issues: 0
created: 2026-03-03
pushed_at: 2026-03-04
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
  - "lang/other"
aliases:
  - "claude-code-workflow"
  - "runesleo/claude-code-workflow"
  - "將 Claude Code 轉變為一個持久且自我改進的開發夥伴，解決記憶管理和任務路由問題。"
---

# claude-code-workflow

**277** stars · **40** stars/天 · 建立 7 天前 · N/A · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 將 Claude Code 轉變為一個持久且自我改進的開發夥伴，解決記憶管理和任務路由問題。

> [!abstract] 核心創新
> 這個專案提供了一個三層架構來高效管理上下文，避免了傳統 AI 助手的記憶問題。

## 專案簡介

這個專案提供了一個經過實戰測試的 Claude Code 工作流程模板，專注於記憶管理、上下文工程和任務路由。它透過三層架構來管理上下文，確保在長時間會話中不會偏離主題，並自動保存進度，避免資料遺失。與其他工具相比，它強調持續的自我改進和自動化驗證，確保每個任務在完成前都經過驗證。使用者可以期待更高的效率和更少的錯誤，但仍需注意其對上下文的管理需求。這個專案適合需要長時間運行的開發環境，並且對於需要高效任務管理的團隊特別有用。

## 重點功能

- 自動保存進度，避免資料遺失。
- 記憶過去的錯誤並自動應用教訓。
- 管理長時間會話中的上下文，防止偏離主題。
- 根據任務自動路由到合適的模型層級。
- 在聲明任務完成前強制驗證，減少錯誤。

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在多個專案中使用這個模板，累積了三個月的實戰經驗，切中開發者對於持久性和自我改進的需求。隨著 AI 助手的普及，這種結構化的工作流程變得越來越重要，特別是在需要長時間運行的開發環境中。這個專案的推出正好滿足了這一需求，並且在社群中引起了廣泛的討論。

## 適合誰使用

**目標受眾**：需要高效任務管理和上下文記憶的開發團隊。

> [!example] 使用場景
> - 開發者 用它來 管理長時間的開發會話，因為它能自動保存進度並記住過去的錯誤。
> - 團隊領導 用它來 路由任務到合適的模型層級，因為這樣可以提高工作效率並減少錯誤。
> - 產品經理 用它來 確保每個任務在完成前都經過驗證，因為這樣能提升產品的質量。

## 架構分析

這個專案採用三層架構，分別是自動加載的規則、按需加載的文檔和熱數據。這樣的設計使得上下文管理更加高效，避免不必要的資源浪費。

## 優缺點分析

> [!success] 優點
> - 能夠有效管理長時間的開發會話。
> - 自動保存進度，減少資料遺失風險。
> - 強化任務驗證，提升產品質量。

> [!danger] 缺點
> - 對於小型專案可能顯得過於複雜。
> - 需要一定的學習曲線來掌握使用方法。
> - 可能需要根據具體需求進行調整。

> [!warning] 注意事項
> - 需要對上下文管理有一定的理解。
> - 可能需要調整以適應特定的開發環境。
> - 對於小型專案可能過於複雜。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 39 |
| Open Issues | 0 |
| 最後推送 | 2026-03-04 |
| 建立日期 | 2026-03-03 |
| Repo 大小 | 54 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@runesleo](https://github.com/runesleo) | 8 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Claude Code Workflow
> 
> A battle-tested workflow template for Claude Code — memory management, context engineering, and task routing from 3 months of daily usage across multiple projects.
> 
> **Not a tutorial. Not a toy config. A production workflow that actually ships.**
> 
> ## Why This Exists
> 
> Claude Code is powerful out of the box, but without structure it becomes a smart assistant that forgets everything between sessions. This template turns it into a **persistent, self-improving development partner** that:
> 
> - Remembers past mistakes and applies lessons automatically
> - Manages context across long sessions without drifting
> - Routes tasks to the right model tier (Opus/Sonnet/Haiku/Codex/Local)
> - Forces verification before claiming completion (no more "should work now")
> - Auto-saves progress so closing the window doesn't lose work
> 
> ## Architecture: Three Layers
> 
> ```
> ┌─────────────────────────────────────────────────────────┐
> │  Layer 0: Auto-loaded Rules (always in context)         │
> │  ┌─────────────┐ ┌────────────┐ ┌───────────────┐     │
> │  │ behaviors.md │ │skill-      │ │memory-flush.md│     │
> │  │              │ │triggers.md │ │               │     │
> │  └─────────────┘ └────────────┘ └───────────────┘     │
> ├─────────────────────────────────────────────────────────┤
> │  Layer 1: On-demand Docs (loaded when needed)           │
> │  agents.md · content-safety.md · task-routing.md        │
> │  behaviors-extended.md · scaffolding-checkpoint.md ...   │
> ├─────────────────────────────────────────────────────────┤
> │  Layer 2: Hot Data (your working memory)                │
> │  today.md · projects.md · goals.md · active-tasks.json  │
> └─────────────────────────────────────────────────────────┘
> ```
> 
> **Why three layers?** Context window is expensive. Loading everything wastes tokens and degrades quality. This system loads rules always (~2K tokens), docs only when relevant (~1-3K each), and keeps your daily state hot for instant recall.
> 
> ## What's Inside
> 
> ```
> claude-code-workflow/
> ├── CLAUDE.md                     # Entry point — Claude reads this first
> ├── README.md                     # You are here
> │
> ├── rules/                        # Layer 0: Always loaded
> │   ├── behaviors.md              # Core behavior rules (debugging, commits, routing)
> │   ├── skill-triggers.md         # When to auto-invoke which skill
> │   └── memory-flush.md           # Auto-save triggers (never lose progress)
> │
> ├── docs/                         # Layer 1: On-demand reference
> │   ├── agents.md  

## 延伸閱讀

相關概念：[[上下文管理]] · [[任務路由]] · [[記憶體管理]]

[GitHub](https://github.com/runesleo/claude-code-workflow)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "runesleo--claude-code-workflow"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，277 stars
