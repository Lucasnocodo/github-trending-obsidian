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
  - "讓 Claude Code 成為持久的開發夥伴，記住過去的錯誤並自動應用教訓。"
---

# claude-code-workflow

**277** stars · **40** stars/天 · 建立 7 天前 · N/A · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 讓 Claude Code 成為持久的開發夥伴，記住過去的錯誤並自動應用教訓。

> [!abstract] 核心創新
> 這個專案提供了一個經過實戰考驗的工作流程模板，專注於持久性和上下文管理。

## 專案簡介

這個專案提供了一個針對 Claude Code 的工作流程模板，能夠進行記憶管理、上下文工程和任務路由。其架構分為三層，第一層是自動加載的規則，第二層是按需加載的文檔，第三層是熱數據，確保上下文的有效管理。與其他工具相比，它不僅僅是簡單的配置，而是針對生產環境的實用解決方案，能夠自動保存進度並強制驗證任務完成情況。使用這個模板的開發者可以在長時間的會話中保持上下文不偏離，並能夠有效地路由任務至適當的模型層級。這個專案適合需要高效能和穩定性的開發環境，值得嘗試。

## 重點功能

- 自動記憶管理，記住過去的錯誤並應用教訓。
- 上下文工程，確保在長會話中不偏離主題。
- 任務路由至適當的模型層級，提升處理效率。
- 強制驗證任務完成情況，避免錯誤的提交。
- 自動保存進度，防止資料丟失。

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在多個專案中累積了三個月的實際使用經驗，這使得這個工作流程模板經過實戰考驗。隨著開發者對於持久性和上下文管理的需求增加，這個專案正好切中痛點。近來的開發趨勢也讓這類工具受到更多重視。

## 適合誰使用

**目標受眾**：需要高效能開發流程的軟體工程師和團隊。

> [!example] 使用場景
> - 開發者 用它來 管理長期專案的上下文，因為這樣可以避免重複性錯誤並提高工作效率。
> - 團隊領導 用它來 路由任務至合適的模型層級，因為這樣可以確保每個任務都能得到最佳處理。
> - 測試工程師 用它來 自動保存測試進度，因為這樣可以避免因意外關閉而丟失重要數據。

## 架構分析

該專案採用三層架構，第一層為自動加載的規則，第二層為按需加載的文檔，第三層為熱數據，確保上下文的有效管理。

## 優缺點分析

> [!success] 優點
> - 提供持久的上下文管理，適合長期專案。
> - 能夠自動路由任務，提高工作效率。
> - 強制驗證任務完成，減少錯誤。

> [!danger] 缺點
> - 需要一定的學習曲線來熟悉使用。
> - 可能需要根據具體需求進行調整。

> [!warning] 注意事項
> - 需要對 Claude Code 有基本的了解。
> - 可能需要根據專案需求進行自定義調整。

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

相關概念：[[自動化測試]] · [[機器學習]] · [[多模態]]

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

> [!question]+ 快速評估（第一次看時填寫）
> _填寫後更新 frontmatter 的 `my_rating` 和 `status` 欄位_
> 
> **跟我的工作相關嗎？** 是 / 否 / 間接相關
> **值得花時間試用嗎？** 是 / 以後再說 / 不需要
> **第一印象**：_一句話_

> [!success]- 深度評估（試用後填寫）
> 
> | 項目 | 分數 (1-5) | 備註 |
> | --- | :---: | --- |
> | 實用性 | /5 | |
> | 技術新穎性 | /5 | |
> | 文件品質 | /5 | |
> | 社群活躍度 | /5 | |
> | 上手難度 | /5 | 1=很難 5=很簡單 |
> 
> **成熟度**：早期 / 可用 / 穩定
> **總評**：_整體評價、跟其他工具的比較、推薦給誰..._

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 決定 :: _繼續使用 / 暫時擱置 / 放棄（原因）_

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，277 stars
