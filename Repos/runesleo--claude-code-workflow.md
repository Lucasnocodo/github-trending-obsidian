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

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (40 stars/day)
> **適合** 需要在多個專案中使用 Claude Code 並希望提高記憶管理和上下文控制的開發團隊。
> **一句話重點** 這個專案的價值在於提供了一個結構化的工作流程，使得 Claude Code 能夠成為真正的開發夥伴，而不僅僅是一個智能助手。

> [!abstract] 核心創新
> 這個專案的創新在於其三層架構設計，有效管理上下文並保持記憶持久性。

## 專案簡介

這個專案提供了一個經過實戰驗證的 Claude Code 工作流程模板，專注於記憶管理、上下文工程和任務路由。它的核心機制是透過三層架構來管理上下文，確保 Claude 在長時間的會話中不會失去焦點，並能夠自動保存進度。技術上，它使用了 Markdown 文件來定義行為、觸發器和記憶清除規則，並透過自動加載和按需加載的方式來優化上下文窗口的使用。與其他 AI 助手相比，這個模板不僅能夠記住過去的錯誤，還能夠在任務完成前進行驗證，避免錯誤的完成聲明。使用者可以在多個專案中輕鬆管理任務和目標，並且支持自定義代理和命令。這個專案非常適合需要長期開發支持的團隊，並且在多個專案中都能保持一致性。對於小型團隊或個人開發者來說，這個工作流程的成熟度和穩定性使其成為值得信賴的選擇。建議在需要長期記憶和上下文管理的情況下使用，但如果只需要簡單的任務執行，則可能顯得過於複雜。

## 重點功能

- 三層架構 — 包含自動加載規則、按需文檔和熱數據，優化上下文管理。
- 自動保存進度 — 在關閉窗口時不會丟失工作，確保持續性。
- 任務路由 — 根據模型層級自動分配任務，提升效率。
- 驗證完成 — 在聲明任務完成前進行驗證，避免錯誤。
- 可自定義代理 — 支持定義多種代理以滿足不同需求。

## 快速開始

1. 克隆模板到本地
```bash
git clone https://github.com/runesleo/claude-code-workflow.git
```
2. 將模板複製到 Claude Code 配置目錄
```bash
cp -r claude-code-workflow/* ~/.claude/
```
3. 自定義 CLAUDE.md
```bash
打開 ~/.claude/CLAUDE.md 並填寫用戶信息和項目路徑。
```

## 程式碼範例

```bash
python agent.py "list all python files in current directory"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案由經驗豐富的開發者 runesleo 提供，切中開發者在使用 Claude Code 時面臨的記憶和上下文管理問題。隨著 AI 助手在開發中的普及，這種結構化的工作流程變得越來越重要。它的實用性和生產力提升的潛力使得這個專案在開發者社群中引起了廣泛的關注。

## 適合誰使用

**目標受眾**：需要在多個專案中使用 Claude Code 並希望提高記憶管理和上下文控制的開發團隊。

> [!example] 使用場景
> - 軟體工程師用它來管理多個專案的開發進度，因為它能自動記錄錯誤並應用學習，避免重複犯錯。
> - 產品經理用它來追蹤團隊的目標和任務進度，因為它提供了清晰的任務路由和驗證機制，確保每個任務都能正確完成。
> - DevOps 工程師用它來優化 CI/CD 流程，因為它能夠自動保存進度並在需要時快速恢復，減少了人為錯誤的風險。

## 架構分析

這是一個前後端分離的架構，核心資料流為：用戶輸入 → Claude Code 處理 → 輸出結果。關鍵技術決策包括使用 Markdown 文件來定義行為和記憶管理，並透過三層架構來優化上下文使用。專案目錄結構清晰，包含 rules、docs 和 memory 等資料夾，分別對應不同的功能層級。

## 優缺點分析

> [!success] 優點
> - 提供持久的記憶管理，避免重複錯誤。
> - 支持多專案的上下文管理，提升開發效率。
> - 自動保存進度，減少人為錯誤的風險。

> [!danger] 缺點
> - 配置過程較為複雜，對新手不友好。
> - 不適合簡單任務的快速執行。
> - 需要對 Claude Code 有深入了解才能發揮最大效益。

> [!warning] 注意事項
> - 需要對 Claude Code 有一定的了解才能有效使用。
> - 配置過程可能對新手來說較為繁瑣。
> - 不支持簡單任務的快速執行，適合長期開發支持。

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

## 社群與生態

**社群活躍度**：社群活躍度中等，主要依賴使用者的實際反饋。

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

相關概念：[[Agent 框架]] · [[CI/CD]] · [[自動化測試]]

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
