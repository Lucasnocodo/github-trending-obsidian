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
  - "將 Claude Code 轉變為持久且自我改善的開發夥伴，解決記憶管理和任務路由問題。"
---

# claude-code-workflow

**277** stars · **40** stars/天 · 建立 7 天前 · N/A · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 將 Claude Code 轉變為持久且自我改善的開發夥伴，解決記憶管理和任務路由問題。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (40 stars/day)
> **適合** 需要在複雜專案中管理記憶和上下文的開發團隊。
> **一句話重點** 這個專案的強大之處在於它不僅提供了功能，還解決了開發者在使用 AI 助手時的記憶和上下文管理問題。

> [!abstract] 核心創新
> 這個專案的創新在於其三層架構有效管理上下文，減少 token 使用並提升效率。

## 專案簡介

這個專案提供了一個經過實戰驗證的 Claude Code 工作流程模板，專注於記憶管理、上下文工程和任務路由。它的核心機制是透過三層架構來管理上下文，確保 Claude 在長時間會話中不會遺忘過去的錯誤，並自動應用學到的教訓。技術上，它使用了多個 Markdown 文件來定義行為規則、技能觸發和記憶清除策略，並根據需要加載文檔以節省 token。與其他工具相比，這個模板特別強調自動保存進度和任務驗證，避免了「應該能工作」的情況。使用者可以在多個項目中持續使用，並且支持跨會話的任務管理。這個專案的成熟度為 beta，適合中小型團隊使用，尤其是需要長期記憶和任務管理的開發環境。建議在需要持久記憶和自我改進的情況下使用，但若是簡單的臨時項目則不必使用。

**技術棧**：`Markdown`

## 重點功能

- 記憶管理 — 自動保存進度，避免關閉窗口時資料遺失。
- 上下文工程 — 三層架構確保關鍵規則始終在上下文中。
- 任務路由 — 根據模型層級自動路由任務，優化資源使用。
- 驗證機制 — 在聲稱完成任務前強制進行驗證，減少錯誤。
- 多模型協作 — 支持不同模型的協作，提升開發效率。

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
打開 ~/.claude/CLAUDE.md 並填寫用戶信息和項目路徑
```

## 程式碼範例

```bash
# 開始系統性除錯
/debug
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 runesleo 具有實際開發經驗，這個模板是基於三個月的日常使用而設計，切中開發者對於持久記憶和上下文管理的需求。隨著 Claude Code 的普及，這個模板提供了一個實用的解決方案，讓開發者能夠更有效率地使用 AI 助手。

## 適合誰使用

**目標受眾**：需要在複雜專案中管理記憶和上下文的開發團隊。

> [!example] 使用場景
> - 軟體工程師用它來管理多個專案的進度和任務，因為它能自動保存進度，避免資料遺失。
> - 產品經理用它來追蹤專案目標和任務狀態，因為它提供跨會話的任務管理，讓專案進度一目瞭然。
> - 測試工程師用它來進行系統性除錯，因為它的驗證機制確保了每次完成任務前都會進行測試。

## 架構分析

這是一個基於 CLI 的工作流程模板，分為三層架構：Layer 0 包含自動加載的規則，Layer 1 包含按需加載的文檔，Layer 2 包含當前工作狀態的熱數據。用戶輸入 → Claude 讀取規則 → 輸出結果。關鍵技術決策是使用 Markdown 文件來定義行為和記憶管理，目錄結構清晰，便於用戶自定義。

## 優缺點分析

> [!success] 優點
> - 提供持久記憶，避免資料遺失。
> - 強大的任務路由功能，提升開發效率。
> - 系統性除錯機制，減少錯誤發生。

> [!danger] 缺點
> - 需要一定的學習曲線來熟悉工作流程。
> - 依賴於 Claude Code 環境，限制了使用範圍。
> - 配置過程可能較為繁瑣，對新手不友好。

> [!warning] 注意事項
> - 需要 Claude Code 環境才能運行。
> - 不支持 Windows 環境，僅限 Linux/Mac。
> - 需要一定的配置時間來設置和自定義工作流程。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[runesleo--claude-advanced-workflow\|runesleo/claude-advanced-workflow]] | 這個工具提供了更高級的上下文管理功能，但可能不如本專案簡單易用。 |
| [[openai--gpt-code-workflow\|openai/gpt-code-workflow]] | 這個工具專注於代碼生成，但缺乏持久記憶和任務管理的功能。 |

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

**社群活躍度**：社群活躍度中等，持續更新和維護。
**連結**：[文件](https://github.com/runesleo/claude-code-workflow/blob/main/README.md)

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

相關概念：[[記憶管理]] · [[上下文工程]] · [[系統性除錯]]

相關專案：[[runesleo--claude-advanced-workflow|runesleo/claude-advanced-workflow]] · [[openai--gpt-code-workflow|openai/gpt-code-workflow]]

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
