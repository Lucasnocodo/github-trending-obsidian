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
> **適合** 需要在長期專案中使用 AI 助手並希望提高生產力的軟體開發團隊。
> **一句話重點** 這個專案的強大之處在於其能夠將 AI 助手轉變為一個持久且自我改進的開發夥伴。

> [!abstract] 核心創新
> 這個專案的創新在於其三層架構設計，能夠有效管理上下文和記憶，提升 AI 助手的實用性。

## 專案簡介

這個專案提供了一個針對 Claude Code 的工作流程模板，專注於記憶管理、上下文工程和任務路由。它的核心機制是透過三層架構來管理上下文，層 0 會自動加載規則，層 1 則在需要時加載文檔，層 2 則保持當前工作狀態。技術上，它使用了高效的上下文管理策略，確保在長時間會話中不會出現上下文漂移，並且能夠自動保存進度，避免資料遺失。與其他類似工具相比，這個模板強調了自動化驗證和任務路由，確保在聲稱完成之前進行驗證，這在開發過程中非常重要。使用者可以期待更高的生產力，因為它能夠自動記錄和應用過去的經驗教訓。這個專案目前處於穩定階段，適合中小型團隊使用，特別是那些需要長時間開發的專案。建議在需要持久記憶和高效任務管理的情境下使用，但對於小型或短期專案可能過於複雜。

## 重點功能

- 三層架構 — 層 0 自動加載規則，層 1 根據需求加載文檔，層 2 保持當前工作狀態。
- 自動保存進度 — 關閉窗口不會丟失工作，確保資料安全。
- 任務路由 — 自動將任務分配到合適的模型層級，提高效率。
- 驗證完成 — 在聲稱任務完成之前進行驗證，減少錯誤。
- 記憶管理 — 能夠記住過去的錯誤並自動應用教訓，提升開發質量。

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
打開 ~/.claude/CLAUDE.md 並填寫用戶信息。
```

## 程式碼範例

```bash
python agent.py "list all python files in current directory"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在多個專案中使用這個模板，經過三個月的實戰驗證，顯示出其穩定性和有效性。隨著開發者對 AI 助手需求的增加，這個專案正好滿足了這一需求。近期的開源趨勢也使得這類工具受到更多關注。

## 適合誰使用

**目標受眾**：需要在長期專案中使用 AI 助手並希望提高生產力的軟體開發團隊。

> [!example] 使用場景
> - 軟體工程師用它來管理多個專案的上下文和記憶，因為這樣可以避免重複錯誤並提升開發效率。
> - 團隊領導用它來確保每位成員在開發過程中不會遺漏關鍵資訊，因為自動保存和驗證功能能夠減少溝通成本。
> - 測試工程師用它來自動化測試流程，因為它能夠在每次運行後自動記錄測試結果並進行回顧。

## 架構分析

這是一個前後端分離的架構，核心資料流為：用戶輸入 → Claude Code 處理 → 輸出結果。關鍵技術決策包括自動加載和按需加載的混合策略，專案目錄結構清晰，包含規則、文檔和記憶層。

## 優缺點分析

> [!success] 優點
> - 自動化的記憶管理，減少重複錯誤。
> - 高效的任務路由，提升開發效率。
> - 穩定的架構設計，適合長期使用。

> [!danger] 缺點
> - 對新手來說學習曲線較陡。
> - 需要定期維護以保持最佳性能。
> - 可能對小型專案過於繁瑣。

> [!warning] 注意事項
> - 需要對 Claude Code 有一定的了解才能有效使用。
> - 對於小型專案可能過於複雜，導致不必要的配置工作。
> - 需要定期維護和更新以保持最佳性能。

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

相關概念：[[Agent 框架]] · [[自動化測試]] · [[記憶管理]]

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
