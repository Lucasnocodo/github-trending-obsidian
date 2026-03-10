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
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: ""
status: to-review
tags:
  - github
  - 開發工具
---

# claude-code-workflow

**277** stars · **40** stars/天 · 建立 7 天前 · N/A · 未標註授權

> [!summary] 一句話摘要
> 提供一個經過實戰驗證的 Claude Code 工作流模板，幫助開發者更有效地管理上下文和任務。

## 專案簡介

這個工作流模板專為 Claude Code 設計，能夠有效管理記憶和上下文，讓開發者在多個項目中保持一致性。它通過自動化任務路由和驗證過程，減少了開發過程中的錯誤。與其他簡單的配置相比，這個模板提供了更高的穩定性和可擴展性，適合需要長期使用的開發者。這是一個成熟的工具，值得開發者試用。

## 重點功能

- 管理上下文，防止信息丟失。
- 自動化任務路由，提升工作效率。
- 驗證任務完成情況，確保質量。
- 支持長期使用的穩定工作流設計。

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 Claude Code 的流行，開發者對於如何更好地利用其功能的需求增加，這個模板正好滿足了這一需求。作者的實戰經驗使得這個模板具備了實用性和可靠性。

## 適合誰使用

**目標受眾**：需要在 Claude Code 中進行高效開發的軟體工程師。

> [!example] 使用場景
> - 軟體工程師 用它來 管理開發過程中的上下文，因為這樣可以減少錯誤並提高效率。
> - 產品經理 用它來 跟蹤項目進度，因為這樣可以更好地掌握團隊的工作狀態。
> - 測試人員 用它來 確保任務完成的準確性，因為這樣可以提高產品質量。

> [!warning] 注意事項
> 需要對 Claude Code 有一定的了解，才能充分發揮其功能。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | N/A |
| 授權 | N/A |
| Stars | 277 |
| Forks | 39 |
| Issues | 0 |
| 建立日期 | 2026-03-03 |

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

相關概念：#工作流管理 · #上下文管理 · #任務自動化

[GitHub](https://github.com/runesleo/claude-code-workflow)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，277 stars
