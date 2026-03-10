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
  - 開發工具
aliases:
  - "claude-code-workflow"
  - "runesleo/claude-code-workflow"
  - "讓 Claude Code 成為持久且自我改進的開發夥伴，解決記憶管理和任務路由問題。"
---

# claude-code-workflow

**277** stars · **40** stars/天 · 建立 7 天前 · N/A · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 讓 Claude Code 成為持久且自我改進的開發夥伴，解決記憶管理和任務路由問題。

> [!abstract] 核心創新
> 這個專案提供了一個結構化的工作流程，使 Claude Code 能夠持久記憶並自我改進。

## 專案簡介

這個專案提供了一個針對 Claude Code 的工作流程模板，能夠管理記憶和上下文，並有效地路由任務。它的架構分為三層：自動加載的規則、按需文檔和熱數據，這樣可以在保持上下文的同時，減少資源浪費。與其他工具相比，它強調任務的驗證和自動保存進度，避免了常見的錯誤和數據丟失。實際使用中，這種設計能夠顯著提高開發效率，尤其是在長時間的會話中。對於需要穩定和持久記憶的專案來說，這個模板非常值得一試，尤其是對於大型團隊或長期專案的開發者。它的成熟度和實用性使其成為一個可靠的選擇。

## 重點功能

- 自動保存進度，避免數據丟失。
- 記憶管理，能夠記住過去的錯誤。
- 上下文工程，確保長時間會話不會偏離主題。
- 任務路由，根據需求將任務分配給不同的模型層級。
- 驗證完成狀態，避免錯誤的完成聲明。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/runesleo/claude-code-workflow.git
```
2. 進入專案目錄
```bash
cd claude-code-workflow
```
3. 根據需求進行配置
```bash
編輯配置文件
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在多個專案中積累了三個月的實際使用經驗，這使得這個模板經過充分的測試和調整。隨著開發者對於 AI 助手的需求增加，這種能夠持久記憶的工作流程變得越來越重要。這個專案的推出恰好滿足了這一需求，並且在社群中引起了廣泛的討論。

## 適合誰使用

**目標受眾**：需要在長期專案中管理上下文和記憶的開發團隊。

> [!example] 使用場景
> - 開發者 用它來 管理長期專案的上下文，因為它能夠記住過去的錯誤並自動應用教訓。
> - 團隊領導 用它來 路由任務給不同的模型層級，因為這樣可以更有效地利用資源。
> - 產品經理 用它來 確保開發進度不會因為意外關閉而丟失，因為它自動保存進度。

## 架構分析

專案架構分為三層，分別是自動加載的規則、按需文檔和熱數據，這樣能夠有效管理上下文和資源使用。

## 優缺點分析

> [!success] 優點
> - 能夠持久記憶，避免重複錯誤。
> - 有效的任務路由提高了資源利用率。
> - 自動保存功能減少了數據丟失的風險。

> [!danger] 缺點
> - 需要一定的配置和調整。
> - 對於小型專案可能過於複雜。
> - 依賴於 Claude Code 的功能和穩定性。

> [!warning] 注意事項
> - 需要對 Claude Code 有基本了解。
> - 可能需要根據具體專案進行調整。
> - 不適合小型或短期專案。

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


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，277 stars
