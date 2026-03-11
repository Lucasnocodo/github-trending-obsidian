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
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "將 Claude Code 轉變為持久的自我改進開發夥伴，解決上下文管理與任務路由問題。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-17"
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
aliases:
  - "claude-code-workflow"
  - "runesleo/claude-code-workflow"
  - "將 Claude Code 轉變為持久的自我改進開發夥伴，解決上下文管理與任務路由問題。"
---

# claude-code-workflow

**277** stars · **40** stars/天 · 建立 7 天前 · N/A · 未標註授權

`個人專案`

> [!summary] 一句話摘要
> 將 Claude Code 轉變為持久的自我改進開發夥伴，解決上下文管理與任務路由問題。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (40 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 6 天前) · **貢獻者** Solo (bus factor 風險)
> **適合** 需要在長期專案中管理上下文和任務的開發團隊。
> **一句話重點** 這個專案展示了如何將 Claude Code 轉變為一個持久的開發夥伴，解決了上下文管理的痛點。

> [!abstract] 核心創新
> 這個專案提供了一個生產環境可用的工作流程模板，專注於上下文管理和任務路由。

## 專案簡介

這個專案提供了一個針對 Claude Code 的工作流程模板，能夠持久記憶過去的錯誤並自動應用學習。使用者可以將任務路由到適當的模型層級（如 Opus、Sonnet 等），並在聲明完成之前強制驗證，避免錯誤的完成聲明。該架構分為三層：Layer 0 是自動加載的規則，Layer 1 是按需加載的文檔，Layer 2 是當前工作狀態的熱數據。這樣的設計能夠節省 token，並提高上下文的質量。與其他工具相比，這個模板不僅提供了記憶功能，還能夠在多個專案中進行上下文管理，這是許多類似工具所缺乏的。使用者可以在每次會話結束時自動保存進度，並在下次會話中恢復上下文，這對於需要長時間開發的團隊特別有用。該專案目前處於穩定階段，適合中小型團隊使用，尤其是那些需要長期記錄和管理任務的開發者。建議在需要持久上下文和自動化任務管理的情境中使用，但不適合簡單的短期專案或不需要複雜管理的開發者。

## 重點功能

- 自動保存進度 — 每次任務完成、提交或退出時自動保存進度，避免遺失工作。
- 上下文管理 — 根據當前任務自動加載相關文檔，節省 token 並提高效率。
- 任務路由 — 根據任務類型自動路由到適當的模型層級，提升處理效率。
- 驗證完成 — 在聲明任務完成前強制進行驗證，確保結果的正確性。
- 記憶管理 — 自動記錄過去的錯誤並應用學習，持續改進工作流程。

## 快速開始

1. 克隆模板
```bash
git clone https://github.com/runesleo/claude-code-workflow.git
```
2. 複製到 Claude Code 配置目錄
```bash
cp -r claude-code-workflow/* ~/.claude/
```
3. 啟動會話
```bash
claude
```

## 程式碼範例

```bash
claude
```
這會啟動 Claude，並自動加載規則，開始遵循工作流程。

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 runesleo 在開源社群中活躍，這個專案是基於他過去三個月的實際使用經驗而開發。這個工具解決了 Claude Code 在無結構下容易遺忘上下文的問題，提供了一個實用的工作流程來管理記憶和任務。最近的討論和需求使得這個工具在開發者中逐漸受到重視，尤其是在需要長期開發的專案中。

## 適合誰使用

**目標受眾**：需要在長期專案中管理上下文和任務的開發團隊。

> [!example] 使用場景
> - 後端工程師用它來管理長期專案的上下文和任務，因為它能自動保存進度並避免遺失工作。
> - 產品經理用它來追蹤多個專案的進度，因為它提供了跨專案的狀態概覽，讓管理更高效。
> - QA 測試人員用它來系統性地進行調試，因為它的驗證機制能確保每次測試都經過確認，減少錯誤發生。

## 架構分析

這是一個前後端分離的架構，使用者輸入 → Claude 處理 → 輸出結果。核心資料流包括自動加載的規則、按需加載的文檔和熱數據。專案目錄結構清晰，包含規則、文檔、記憶和技能定義等關鍵檔案，便於使用者自定義和擴展。

## 技術深入分析

這個專案的核心技術機制在於三層架構的設計，能夠有效管理上下文和記憶。Layer 0 提供自動加載的行為規則，Layer 1 則根據需要加載文檔，Layer 2 則保持當前工作狀態。這樣的設計不僅節省了 token，還提高了上下文的質量。該系統能夠處理多個專案的上下文，並在每次會話結束時自動保存進度，這對於需要長期開發的團隊特別有用。選擇這種架構的好處在於能夠靈活應對不同的開發需求，但也可能在擴展時面臨性能瓶頸。設計上需要注意的風險包括隨著專案規模擴大，如何保持高效的上下文管理和記憶更新。這些設計決策在實際使用中需要不斷調整和優化，以確保系統的穩定性和安全性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且結構良好，提供了詳細的安裝步驟和使用範例。安裝過程相對順暢，但需要用戶進行一定的配置。文件中沒有多語言支持，主要以英文為主。整體而言，花 30 分鐘應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 持久的上下文管理，避免遺失工作進度。
> - 自動化任務路由，提升開發效率。
> - 系統性調試機制，減少錯誤發生。

> [!danger] 缺點
> - 需要一定的配置和自定義時間。
> - 對於簡單專案可能過於複雜。
> - 依賴於 Claude Code 環境，限制了使用範圍。

> [!warning] 注意事項
> - 需要 Claude Code 環境才能運行。
> - 對於不需要長期上下文管理的簡單專案不太適合。
> - 可能需要一定的時間來配置和自定義以符合特定需求。

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

相關概念：[[自動化]] · [[記憶管理]] · [[上下文管理]]

相關專案：[[kamranahmedse--claude-statusline|kamranahmedse/claude-statusline]] · [[op7418--Claude-to-IM-skill|op7418/Claude-to-IM-skill]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]]

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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，277 stars
