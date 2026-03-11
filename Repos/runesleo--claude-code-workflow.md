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
use_case: "將 Claude Code 轉變為持久的自我改進開發夥伴，解決記憶管理和任務路由問題。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/開發工具"
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

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (40 stars/day)
> **授權** 未標註授權 (風險較高)
> **適合** 需要長期使用 Claude Code 並希望提升工作效率的開發團隊。
> **一句話重點** 這個專案讓 Claude Code 成為一個真正的開發夥伴，而不僅僅是個智能助手。

> [!abstract] 核心創新
> 這個專案的創新在於其三層架構有效管理上下文，提升 Claude Code 的持久性和自我改進能力。

## 專案簡介

這個專案提供了一個經過實戰驗證的 Claude Code 工作流程模板，能夠持續記錄過去的錯誤並自動應用學到的教訓。它透過三層架構來管理上下文，第一層始終加載行為規則，第二層按需加載文檔，第三層則保持當前工作狀態。這樣的設計不僅節省了 token，還能提高質量。與其他工具相比，它強調任務路由至正確的模型層級，並在聲稱完成之前強制驗證，避免了常見的錯誤聲明。實際使用中，這個模板能夠自動保存進度，確保不會因為關閉窗口而丟失工作。這個專案目前處於穩定階段，適合需要長期使用 Claude Code 的開發團隊。對於小型項目或偶爾使用者來說，可能會感覺過於複雜。

## 重點功能

- 記憶管理 — 自動記錄過去的錯誤並應用學到的教訓。
- 上下文管理 — 三層架構，始終加載行為規則，按需加載文檔，保持當前工作狀態。
- 任務路由 — 根據任務自動路由至正確的模型層級，如 Opus/Sonnet/Haiku/Codex。
- 驗證完成 — 在聲稱完成之前強制執行驗證，確保結果的可靠性。
- 自動保存 — 關閉窗口不會丟失進度，確保工作不會中斷。

## 快速開始

1. 克隆模板
```bash
git clone https://github.com/runesleo/claude-code-workflow.git
```
2. 複製到 Claude Code 配置目錄
```bash
cp -r claude-code-workflow/* ~/.claude/
```
3. 自訂 CLAUDE.md
```bash
打開 ~/.claude/CLAUDE.md 並填寫用戶信息
```

## 程式碼範例

```bash
# 啟動系統性調試
/debug
```

## 為什麼值得關注

> [!tip] 爆紅原因
> (a) 作者 runesleo 之前有其他知名專案，這次專注於提升 Claude Code 的實用性。(b) 這個工具解決了 Claude Code 在長時間會話中記憶管理不足的痛點，讓開發者能夠更有效率地工作。(c) 近期在開發者社群中有關 Claude Code 的討論增加，讓這個工具受到更多注意。(d) 隨著開發者對 AI 助手需求的增加，這種持久性和自我改進的工作流程變得更加可行和必要。

## 適合誰使用

**目標受眾**：需要長期使用 Claude Code 並希望提升工作效率的開發團隊。

> [!example] 使用場景
> - 全端工程師用它來管理多個專案的開發進度，因為它能自動保存進度並記錄錯誤，避免重複工作。
> - 測試工程師用它來進行系統性調試，因為它提供了驗證完成的功能，確保每次測試都有依據。
> - 產品經理用它來追蹤團隊目標和任務，因為它能夠跨會話記錄任務狀態，讓管理更有效率。

## 架構分析

這個專案採用單體架構，核心資料流為用戶輸入 → Claude Code 處理 → 輸出結果。關鍵技術決策是使用三層架構來有效管理上下文，減少 token 使用。專案目錄結構中，rules 目錄包含始終加載的行為規則，docs 目錄包含按需加載的文檔，memory 目錄則保存當前工作狀態。

## 優缺點分析

> [!success] 優點
> - 能夠持續記錄和應用過去的錯誤，提升開發效率。
> - 強制驗證功能確保結果的可靠性，減少錯誤。
> - 自動保存進度，避免因意外關閉而丟失工作。

> [!danger] 缺點
> - 需要用戶手動配置，對新手不友好。
> - 對於小型項目來說，可能過於複雜。
> - 僅適用於 Claude Code 環境，限制了使用範圍。

> [!warning] 注意事項
> - 僅支援 Claude Code 環境。
> - 需要用戶手動配置記憶路徑。
> - 對於小型項目來說，可能過於複雜。

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

相關概念：[[自動化]] · [[記憶管理]] · [[任務路由]]

相關專案：[[kamranahmedse--claude-statusline|kamranahmedse/claude-statusline]] · [[op7418--Claude-to-IM-skill|op7418/Claude-to-IM-skill]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，277 stars
