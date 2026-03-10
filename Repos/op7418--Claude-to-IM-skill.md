---
repo: op7418/Claude-to-IM-skill
url: https://github.com/op7418/Claude-to-IM-skill
owner: op7418
owner_type: User
language: TypeScript
license: MIT
description: "Bridge Claude Code / Codex to IM platforms — chat with AI coding agents from Telegram, Discord, or Feishu/Lark."
homepage: ""
stars: 825
stars_per_day: 165
forks: 105
open_issues: 35
created: 2026-03-05
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
category: "其他"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 其他
  - typescript
  - chatbot
  - claude
  - claude_code
  - discord
  - feishu
aliases:
  - "Claude-to-IM-skill"
  - "op7418/Claude-to-IM-skill"
  - "將 Claude Code / Codex 連接到即時通訊平台，實現與 AI 編碼代理的對話。"
---

# Claude-to-IM-skill

**825** stars · **165** stars/天 · 建立 5 天前 · TypeScript · MIT

`easy-install`

> [!summary] 一句話摘要
> 將 Claude Code / Codex 連接到即時通訊平台，實現與 AI 編碼代理的對話。

> [!abstract] 核心創新
> 即時將 AI 編碼代理連接到多個即時通訊平台。

## 專案簡介

Claude-to-IM Skill 讓使用者可以在即時通訊平台（如 Telegram 和 Discord）上與 AI 編碼代理進行對話。這個專案的核心機制是運行一個後台守護進程，將 IM 機器人與 Claude Code 或 Codex 會話連接起來。使用者的消息會被轉發給 AI 編碼代理，並且 AI 的回應會通過 IM 平台返回。這個專案使用 TypeScript 和 Node.js 實現，並提供了互動式設置向導，簡化了配置過程。與其他 IM 機器人相比，這個專案的獨特之處在於它的即時性和多平台支持，使用者可以在多個即時通訊平台上進行交互。這個工具的效果是讓開發者能夠在熟悉的環境中與 AI 進行互動，但需要注意的是，對於不同平台的支持可能會有差異。總體來說，這是一個非常實用的工具，特別適合希望在即時通訊中集成 AI 功能的開發者。

**技術棧**：`TypeScript` · `Node.js`

## 重點功能

- 支持多個即時通訊平台（Telegram、Discord 等）。
- 互動式設置向導，簡化配置過程。
- 支持權限控制，確保安全性。
- 即時回應，提升使用體驗。
- 會話持久性，保留對話歷史。

## 快速開始

1. 安裝技能
```bash
npx skills add op7418/Claude-to-IM-skill
```
2. 運行設置命令
```bash
/claude-to-im setup
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著即時通訊工具的普及，開發者希望能在這些平台上與 AI 進行互動，這使得 Claude-to-IM Skill 這樣的工具變得越來越重要。作者的背景也使得這個專案在技術社群中引起了關注。

## 適合誰使用

**目標受眾**：希望在即時通訊平台上集成 AI 功能的開發者和使用者。

> [!example] 使用場景
> - 開發者 用它來 在即時通訊中獲取 AI 的編碼建議，因為這樣可以提高工作效率。
> - 團隊成員 用它來 與 AI 進行協作，因為可以隨時隨地獲取幫助。
> - 學生 用它來 在學習過程中獲取即時的編碼指導，因為這樣可以加速學習。

## 架構分析

這個專案運行一個後台守護進程，將 IM 機器人與 Claude Code 或 Codex 會話連接，實現即時的交互。

## 優缺點分析

> [!success] 優點
> - 多平台支持，方便使用者在不同環境中使用。
> - 即時性強，提升交互體驗。

> [!danger] 缺點
> - 不同平台的支持可能會有差異。
> - 需要 Node.js 環境支持。

> [!warning] 注意事項
> - 不同平台的支持可能會有差異。
> - 需要 Node.js 環境支持。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 105 |
| Open Issues | 35 |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 151 KB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 74
>     "Shell" : 17
>     "PowerShell" : 9
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@op7418](https://github.com/op7418) | 3 |
> | [@yoka1234](https://github.com/yoka1234) | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Claude-to-IM Skill
> 
> Bridge Claude Code / Codex to IM platforms — chat with AI coding agents from Telegram, Discord, Feishu/Lark, or QQ.
> 
> [中文文档](README_CN.md)
> 
> > **Want a desktop GUI instead?** Check out [CodePilot](https://github.com/op7418/CodePilot) — a full-featured desktop app with visual chat interface, session management, file tree preview, permission controls, and more. This skill was extracted from CodePilot's IM bridge module for users who prefer a lightweight, CLI-only setup.
> 
> ---
> 
> ## How It Works
> 
> This skill runs a background daemon that connects your IM bots to Claude Code or Codex sessions. Messages from IM are forwarded to the AI coding agent, and responses (including tool use, permission requests, streaming previews) are sent back to your chat.
> 
> ```
> You (Telegram/Discord/Feishu/QQ)
>   ↕ Bot API
> Background Daemon (Node.js)
>   ↕ Claude Agent SDK or Codex SDK (configurable via CTI_RUNTIME)
> Claude Code / Codex → reads/writes your codebase
> ```
> 
> ## Features
> 
> - **Four IM platforms** — Telegram, Discord, Feishu/Lark, QQ — enable any combination
> - **Interactive setup** — guided wizard collects tokens with step-by-step instructions
> - **Permission control** — tool calls require explicit approval via inline buttons (Telegram/Discord) or text `/perm` commands (Feishu/QQ)
> - **Streaming preview** — see Claude's response as it types (Telegram & Discord)
> - **Session persistence** — conversations survive daemon restarts
> - **Secret protection** — tokens stored with `chmod 600`, auto-redacted in all logs
> - **Zero code required** — install the skill and run `/claude-to-im setup`, that's it
> 
> ## Prerequisites
> 
> - **Node.js >= 20**
> - **Claude Code CLI** (for `CTI_RUNTIME=claude` or `auto`) — installed and authenticated (`claude` command available)
> - **Codex CLI** (for `CTI_RUNTIME=codex` or `auto`) — `npm install -g @openai/codex`. Auth: run `codex auth login`, or set `OPENAI_API_KEY` (optional, for API mode)
> 
> ## Installation
> 
> ### npx skills (recommended)
> 
> ```bash
> npx skills add op7418/Claude-to-IM-skill
> ```
> 
> ### Git clone
> 
> ```bash
> git clone https://github.com/op7418/Claude-to-IM-skill.git ~/.claude/skills/claude-to-im
> ```
> 
> Clones the repo directly into your personal skills directory. Claude Code discovers it automatically.
> 
> ### Symlink
> 
> If you prefer to keep the repo elsewhere (e.g., for development):
> 
> ```bash
> git clone https://github.com/op7418/Claude-to-IM-skill.git ~/code/Claude-to-IM-skill
> mkdir -p ~/.claude/skills
> ln -s ~/code/Claude-to-IM-skill ~/.claude/skil

## 延伸閱讀

相關概念：[[即時通訊]] · [[AI 編碼代理]] · [[多平台支持]]

[GitHub](https://github.com/op7418/Claude-to-IM-skill)



## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "其他" AND file.name != "op7418--Claude-to-IM-skill"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，823 stars
