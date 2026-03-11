---
repo: op7418/Claude-to-IM-skill
url: https://github.com/op7418/Claude-to-IM-skill
owner: op7418
owner_type: User
language: TypeScript
license: MIT
description: "Bridge Claude Code / Codex to IM platforms — chat with AI coding agents from Telegram, Discord, or Feishu/Lark."
homepage: ""
stars: 830
stars_per_day: 166
forks: 106
open_issues: 35
created: 2026-03-05
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓你可以從 Telegram、Discord 或 Feishu/Lark 與 AI 編程代理進行對話。"
priority: medium
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
  - "topic/chatbot"
  - "topic/claude"
  - "topic/claude_code"
  - "topic/discord"
  - "topic/feishu"
aliases:
  - "Claude-to-IM-skill"
  - "op7418/Claude-to-IM-skill"
  - "讓你可以從 Telegram、Discord 或 Feishu/Lark 與 AI 編程代理進行對話。"
---

# Claude-to-IM-skill

**830** stars · **166** stars/天 · 建立 5 天前 · TypeScript · MIT

`easy-install`

> [!summary] 一句話摘要
> 讓你可以從 Telegram、Discord 或 Feishu/Lark 與 AI 編程代理進行對話。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (166 stars/day)
> **適合** 希望在即時通訊平台上與 AI 編程助手互動的開發者。
> **一句話重點** 這個專案讓開發者能夠在即時通訊平台上輕鬆使用 AI 編程助手，提升工作效率。

> [!abstract] 核心創新
> 這個專案提供了一個簡單的方式，讓開發者可以在即時通訊平台上與 AI 編程助手進行互動，無需編寫任何代碼。

## 專案簡介

這個專案透過一個背景守護進程，將 IM 平台的訊息轉發給 Claude Code 或 Codex，並將回應發送回聊天中。用戶只需安裝並執行 `/claude-to-im setup`，即可輕鬆設置與 AI 的互動。它支援 Telegram、Discord、Feishu/Lark 和 QQ 四種 IM 平台，並提供即時預覽功能，讓用戶能看到 Claude 的回應過程。與其他工具相比，這個專案的獨特之處在於它的互動設置向導和權限控制，確保用戶能夠安全地使用 AI 工具。使用者可以在對話中直接授權 Claude 使用工具，這在其他類似工具中並不常見。這個專案的使用效果良好，但需要 Node.js 20 以上的環境，並且需要安裝 Claude Code 或 Codex CLI。整體來說，這是一個穩定的專案，適合中小型團隊使用，特別是那些希望在 IM 平台上進行編程的開發者。建議在需要快速集成 AI 編程助手時使用，但如果團隊需要更複雜的 GUI 介面，則可能需要考慮其他解決方案。

**技術棧**：`Node.js 20` · `TypeScript` · `Shell` · `PowerShell` · `JavaScript`

## 重點功能

- 四個 IM 平台支援 — 同時支援 Telegram、Discord、Feishu/Lark 和 QQ。
- 互動式設置 — 提供逐步指導的向導收集 API 令牌。
- 權限控制 — 工具調用需要用戶明確批准，增強安全性。
- 即時預覽 — 在 Telegram 和 Discord 中可以看到 Claude 的回應過程。
- 會話持久性 — 即使守護進程重啟，對話仍然可以保留。

## 快速開始

1. 設置技能
```bash
/claude-to-im setup
```
2. 啟動守護進程
```bash
/claude-to-im start
```
3. 開始聊天
```bash
在 IM 應用中發送消息給機器人
```

## 程式碼範例

```bash
/claude-to-im setup
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案由經驗豐富的開發者 op7418 和 yoka1234 提供，切中開發者在即時通訊平台上與 AI 互動的需求。隨著 AI 編程助手的普及，開發者對於如何在日常工作中更方便地使用這些工具的需求日益增加。這個專案的推出正好滿足了這一需求，並且提供了簡單的安裝和設置流程。

## 適合誰使用

**目標受眾**：希望在即時通訊平台上與 AI 編程助手互動的開發者。

> [!example] 使用場景
> - 後端工程師用它來在 Discord 上與 AI 編程助手互動，因為這樣可以快速獲得代碼建議，提升開發效率。
> - 前端開發者用它來在 Telegram 中請求即時的代碼片段，因為這樣可以在不打開 IDE 的情況下快速獲得幫助。
> - DevOps 工程師用它來在 Feishu 中監控 AI 編程助手的狀態，因為這樣可以隨時掌握工具的運行情況，避免中斷工作流。

## 架構分析

這是一個基於 CLI 的應用，使用 Node.js 作為核心架構。用戶輸入通過 IM 平台的 API 進入背景守護進程，然後轉發給 Claude Agent SDK 或 Codex SDK，最後將回應發送回用戶。專案目錄結構中，關鍵檔案包括 `setup.js` 和 `daemon.js`，這些檔案負責設置和管理守護進程的運行。

## 優缺點分析

> [!success] 優點
> - 簡單的安裝和設置流程，適合新手使用。
> - 支援多種即時通訊平台，靈活性高。
> - 提供即時回應預覽，增強用戶體驗。

> [!danger] 缺點
> - 需要額外的 CLI 工具安裝，對於不熟悉的用戶可能有學習曲線。
> - 不支援 Windows，限制了部分用戶的使用。
> - 對於大型團隊，可能需要額外的管理和監控工具。

> [!warning] 注意事項
> - 需要 Node.js 20 以上的環境。
> - 需要安裝 Claude Code CLI 或 Codex CLI。
> - 不支援 Windows 平台的直接安裝。
> - 對於大型團隊，可能需要額外的管理和監控工具。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 106 |
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
> ln -s ~/code/Claude-to-IM-skill ~/.claude/skills/claude-to-im
> ```
> 
> ### Codex
> 
> If you use [Codex](https://github.com/openai/codex), clone directly into the Codex skills directory:
> 
> ```bash
> git clone https://github.com/op7418/Claude-to-IM-skill.git ~/.codex/skills/claude-to-im
> ```
> 
> Or use the provided install script for automatic dependency installation and build:
> 
> ```bash
> # Clone and install (copy mode)
> git clone https://github.com/op7418/Claude-to-IM-skill.git ~/code/Claude-to-IM-skill
> bash ~/code/Claude-to-IM-skill/scripts/install-codex.sh
> 
> # Or use symlink mode for development
> bash ~/code/Claude-to-IM-skill/scripts/install-codex.sh --link
> ```
> 
> ### Verify installation
> 
> **Claude Code:** Start a new session and type `/` — you should see `claude-to-im` in the skill list. Or ask Claude: "What skills are available?"
> 
> **Codex:** Start a new session and say "claude-to-im setup" or "start bridge" — Codex will recognize the skill and run the setup wizard.
> 
> ## Quick Start
> 
> ### 1. Setup
> 
> ```
> /claude-to-im setup
> ```
> 
> The wizard will guide you through:
> 
> 1. **Choose channels** — pick Telegram, Discord, Feishu, QQ, or any combination
> 2. **Enter credentials** — the wizard explains exactly where to get each token, which settings to enable, and what permissions to grant
> 3. **Set defaults** — working directory, model, and mode
> 4. **Validate** — tokens are verified against platform APIs immediately
> 
> ### 2. Start
> 
> ```
> /claude-to-im start
> ```
> 
> The daemon starts in the background. You can close the terminal — it keeps running.
> 
> ### 3. Chat
> 
> O

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[API 設計]] · [[自動化測試]]

相關專案：[[kamranahmedse--claude-statusline|kamranahmedse/claude-statusline]] · [[runesleo--claude-code-workflow|runesleo/claude-code-workflow]]

[GitHub](https://github.com/op7418/Claude-to-IM-skill)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "op7418--Claude-to-IM-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "op7418--Claude-to-IM-skill"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，823 stars
