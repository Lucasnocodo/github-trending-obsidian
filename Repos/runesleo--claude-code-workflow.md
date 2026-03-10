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
category: "AI/ML"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/ai_ml"
  - "lang/other"
aliases:
  - "claude-code-workflow"
  - "runesleo/claude-code-workflow"
  - "將 Claude Code 轉變為持久的自我改進開發夥伴，解決記憶管理和任務路由問題。"
---

# claude-code-workflow

**277** stars · **40** stars/天 · 建立 7 天前 · N/A · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 將 Claude Code 轉變為持久的自我改進開發夥伴，解決記憶管理和任務路由問題。

> [!abstract] 核心創新
> 這個專案提供了一個經過實戰驗證的工作流程模板，專注於記憶管理和任務路由。

## 專案簡介

這個專案提供了一個結構化的工作流程模板，讓 Claude Code 能夠持續記憶過去的錯誤並自動應用學到的教訓。它使用了三層架構來管理上下文，確保在長時間會話中不會偏離主題，並能夠將任務路由到適當的模型層級。與其他工具相比，這個模板強調了自動保存進度和驗證任務完成的功能，避免了常見的錯誤。實際使用中，這個系統能夠有效降低上下文丟失的風險，但仍需注意其對記憶和上下文的管理能力。整體來看，這是一個成熟的解決方案，適合需要長期開發的專案使用。

## 重點功能

- 持久的記憶管理，能夠自動記錄和應用過去的錯誤。
- 三層架構設計，優化上下文管理，減少資源浪費。
- 任務路由功能，根據任務類型自動選擇合適的模型層級。
- 自動保存進度，避免關閉窗口時丟失工作。
- 強制驗證任務完成，確保輸出結果的可靠性。

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者有實際的使用經驗，這個模板是基於三個月的日常使用而開發的，切中開發者對於持久性和上下文管理的需求。隨著 AI 工具的廣泛應用，開發者對於如何有效利用這些工具的需求日益增加，這使得該專案在當前時期受到重視。

## 適合誰使用

**目標受眾**：需要長期記憶和上下文管理的開發團隊。

> [!example] 使用場景
> - 開發者 用它來 管理長期專案的上下文，因為它能夠自動記錄和應用過去的學習。
> - 團隊領導 用它來 確保任務的正確路由，因為它能夠根據任務類型自動選擇合適的模型。
> - AI 研究人員 用它來 測試和驗證模型的輸出，因為它強調了完成驗證的必要性。

## 架構分析

專案採用三層架構，第一層為自動加載的規則，第二層為按需加載的文檔，第三層為熱數據以保持當前工作狀態。

## 優缺點分析

> [!success] 優點
> - 能夠有效管理長期專案的上下文。
> - 自動記錄和應用過去的學習，提升開發效率。
> - 強調任務完成的驗證，減少錯誤。

> [!danger] 缺點
> - 對使用者的技術要求較高。
> - 在大型專案中可能需要進一步的配置調整。

> [!warning] 注意事項
> - 需要對 Claude Code 有一定的了解才能有效使用。
> - 對於非常大型的專案，可能需要進一步調整配置以優化性能。

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

相關概念：[[上下文管理]] · [[持久性記憶]] · [[任務路由]]

[GitHub](https://github.com/runesleo/claude-code-workflow)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "runesleo--claude-code-workflow"
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
