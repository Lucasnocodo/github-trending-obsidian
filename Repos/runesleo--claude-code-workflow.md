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
---

# claude-code-workflow

**277** stars · **40** stars/天 · 建立 7 天前 · N/A · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 提供一個經過實戰驗證的 Claude Code 工作流程模板，提升開發效率。

> [!abstract] 核心創新
> 這個專案提供了一個經過實戰驗證的 Claude Code 工作流程模板，提升開發效率。

## 專案簡介

這個專案提供了一個結構化的工作流程，使 Claude Code 成為一個持久且自我改善的開發夥伴。它通過記憶過去的錯誤和自動應用教訓來增強開發過程，並能夠管理長時間會話的上下文。相比於其他 Claude Code 配置，這個模板更注重實際應用，並且經過多個項目的測試。這是一個值得開發者使用的成熟解決方案，特別是對於需要長期維護的項目。

## 重點功能

- 自動記憶過去的錯誤並應用教訓。
- 管理長會話的上下文，避免上下文漂移。
- 任務路由到正確的模型層級。

## 為什麼值得關注

> [!tip] 爆紅原因
> 開發者對於提升 AI 助手的實用性需求增加，這個模板正好滿足了這個需求；作者在多個項目中實踐，提供了可靠的解決方案。

## 適合誰使用

**目標受眾**：需要提升 Claude Code 效率的開發者和團隊。

> [!example] 使用場景
> - [軟體工程師] 用它來 [提升開發效率]，因為 [能夠自動管理上下文和記憶]。
> - [項目經理] 用它來 [確保任務的準確完成]，因為 [強制驗證功能能減少錯誤]。
> - [AI 開發者] 用它來 [構建更智能的助手]，因為 [提供了持久的記憶管理]。

> [!warning] 注意事項
> 需要對 Claude Code 有一定的了解才能有效使用。

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
> ├──────────────────────────────

## 延伸閱讀

相關概念：[[AI 助手]] · [[上下文管理]] · [[任務路由]]

[GitHub](https://github.com/runesleo/claude-code-workflow)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，277 stars
