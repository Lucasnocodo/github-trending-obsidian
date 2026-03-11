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
month: "2026-03"
category: "開發工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓 Claude Code 成為持久且自我改善的開發夥伴，解決記憶管理和上下文工程問題。"
priority: medium
tags:
  - github
  - "category/開發工具"
  - "lang/other"
aliases:
  - "claude-code-workflow"
  - "runesleo/claude-code-workflow"
  - "讓 Claude Code 成為持久且自我改善的開發夥伴，解決記憶管理和上下文工程問題。"
---

# claude-code-workflow

**277** stars · **40** stars/天 · 建立 7 天前 · N/A · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 讓 Claude Code 成為持久且自我改善的開發夥伴，解決記憶管理和上下文工程問題。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (40 stars/day)
> **適合** 需要在多個專案中長期維持上下文的開發者和團隊。
> **一句話重點** 這個專案展示了如何將 Claude Code 打造成一個持久的開發夥伴，解決了記憶和上下文管理的痛點。

> [!abstract] 核心創新
> 這個專案提供了一個結構化的工作流程，使 Claude Code 能夠持續記住上下文和過去的學習。

## 專案簡介

這個專案提供了一個經過實戰驗證的 Claude Code 工作流程模板，專注於記憶管理、上下文工程和任務路由。它的核心機制是透過三層架構來管理上下文，確保 Claude Code 在多次會話中能夠持續記住過去的錯誤並自動應用學習。技術上，它使用了分層的資料結構，層0始終加載規則，層1按需加載文檔，層2保持當前工作狀態。與其他工具相比，這個模板強調自動保存進度和任務驗證，避免了「應該可以工作」的情況。使用者可以在日常開發中自動記錄進度，並且能夠在關閉窗口後不會丟失工作。這個專案目前處於穩定階段，適合中小型團隊使用。對於需要長時間維持上下文的開發者，這是一個值得考慮的選擇，但對於小型項目或短期任務則可能顯得過於複雜。

## 重點功能

- 三層架構 — 層0自動加載規則，層1按需加載文檔，層2保持當前工作狀態。
- 自動保存進度 — 關閉窗口不會丟失工作，確保開發者的努力不會白費。
- 任務路由 — 根據任務類型自動選擇合適的模型層級，提升效率。
- 驗證機制 — 在聲明任務完成前強制進行驗證，避免錯誤提交。
- 可重用技能定義 — 提供多種技能模板以適應不同的開發需求。

## 快速開始

1. 克隆模板
```bash
git clone https://github.com/runesleo/claude-code-workflow.git
```
2. 複製到 Claude Code 配置目錄
```bash
cp -r claude-code-workflow/* ~/.claude/
```
3. 自定義 CLAUDE.md
```bash
打開 ~/.claude/CLAUDE.md 並填寫用戶信息及項目路徑
```

## 程式碼範例

```bash
# 開始系統調試
/debug
# 部署前檢查
/deploy
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 runesleo 具備實戰經驗，這個專案是基於三個月的日常使用而開發的，切中開發者在使用 Claude Code 時遇到的記憶和上下文管理需求。隨著 Claude Code 的普及，越來越多的開發者需要一個結構化的工作流程來提升生產力，因此這個專案在社群中迅速受到關注。

## 適合誰使用

**目標受眾**：需要在多個專案中長期維持上下文的開發者和團隊。

> [!example] 使用場景
> - 後端工程師用它來管理長期專案的上下文，因為它能自動記錄進度，避免重複工作。
> - 前端開發者用它來進行代碼審查，因為它的驗證機制確保了每次提交的代碼都經過測試。
> - DevOps 工程師用它來進行部署前檢查，因為它提供了清晰的任務路由和自動化的檢查清單。

## 架構分析

這個專案採用單體架構，核心資料流是用戶輸入 → Claude Code 處理 → 輸出結果。關鍵技術決策包括三層架構設計，層0始終加載規則以保持上下文，層1根據需求加載文檔，層2保持當前工作狀態。專案目錄結構清晰，包含規則、文檔、記憶和技能等子目錄。

## 優缺點分析

> [!success] 優點
> - 能夠有效管理長期專案的上下文，提升開發效率。
> - 自動保存進度，減少工作丟失的風險。
> - 驗證機制確保代碼質量，降低錯誤提交的可能性。

> [!danger] 缺點
> - 設置過程較為複雜，對新手不友好。
> - 不適合短期專案，可能顯得過於繁瑣。
> - 需要對 Claude Code 的運作有深入理解才能充分利用。

> [!warning] 注意事項
> - 需要對 Claude Code 有基本了解才能有效使用。
> - 不適合短期或小型專案，因為其設置過程較為複雜。
> - 可能需要額外的配置以適應特定的開發環境。

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
> │   ├── agents.md                 # Multi-model collaboration framework
> │   ├── behaviors-extended.md     # Extended rules (knowledge base, associations)
> │   ├── behaviors-reference.md    # Detailed operation guides
> │   ├── content-safety.md         # AI hallucination prevention system
> │   ├── scaffolding-checkpoint.md # "Do you really need to self-host?" checklist
> │   └── task-routing.md           # Model tier routing + cost comparison
> │
> ├── memory/                       # Layer 2: Your working state (templates)
> │   ├── today.md                  # Daily session log
> │   ├── projects.md               # Cross-project status overview
> │   ├── goals.md                  # Week/month/quarter goals
> │   └── active-tasks.json         # Cross-session task registry
> │
> ├── skills/                       # Reusable skill definitions
> │   ├── session-end/SKILL.md              # Auto wrap-up: save progress + commit + record
> │   ├── verification-before-completion/SKILL.md  # "Run the test. Read the output. THEN claim."
> │   ├── systematic-debugging/SKILL.md     # 5-phase debugging (recall → root cause → fix)
> │   ├── planning-with-files/SKILL.md      # File-based planning for complex tasks
> │   └── experience-evolution/SKILL.md     # Auto-accumulate project knowledge
> │
> ├── agents/                       # Custom agent definitions
> │   ├── pr-reviewer.md            # Code review agent
> │   ├── security-reviewer.md      # OWASP security scanning agent
> │   └── performance-analyzer.md   # Performance bottleneck analysis age

## 延伸閱讀

相關概念：[[記憶管理]] · [[上下文工程]] · [[任務路由]]

相關專案：[[kamranahmedse--claude-statusline|kamranahmedse/claude-statusline]] · [[op7418--Claude-to-IM-skill|op7418/Claude-to-IM-skill]]

[GitHub](https://github.com/runesleo/claude-code-workflow)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "runesleo--claude-code-workflow"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "runesleo--claude-code-workflow"
> SORT stars DESC
> ```

---

## 個人筆記

> [!question]+ 快速評估（30 秒填完）
> 
> 相關性:: 未評估
> 印象:: _一句話_
> 行動:: 不需要
> 
> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_
> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 決定 :: _繼續使用 / 暫時擱置 / 放棄（原因）_

> [!question]- 待研究的問題
> _記下看完後還沒有答案的問題，未來回來補充_
> 
> - [ ] 

### 採用判斷

> [!tip]- 什麼時候該用 / 不該用
> **該用的情況**：
> - 
> 
> **不該用的情況**：
> - 

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，277 stars
