---
repo: op7418/Claude-to-IM-skill
url: https://github.com/op7418/Claude-to-IM-skill
owner: op7418
owner_type: User
language: TypeScript
license: MIT
description: "Bridge Claude Code / Codex to IM platforms — chat with AI coding agents from Telegram, Discord, or Feishu/Lark."
homepage: ""
stars: 829
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
  - "讓你在 Telegram、Discord、Feishu/Lark 等即時通訊平台上與 AI 編程代理對話。"
---

# Claude-to-IM-skill

**829** stars · **166** stars/天 · 建立 5 天前 · TypeScript · MIT

`easy-install`

> [!summary] 一句話摘要
> 讓你在 Telegram、Discord、Feishu/Lark 等即時通訊平台上與 AI 編程代理對話。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (166 stars/day)
> **適合** 需要在多個即時通訊平台上與 AI 進行互動的開發團隊。
> **一句話重點** 這個專案的強大之處在於它能將 AI 編程助手無縫整合到即時通訊平台，讓開發者能在熟悉的環境中獲得幫助。

> [!abstract] 核心創新
> 這個專案提供了一個簡單的方式，將 AI 編程代理整合到多個即時通訊平台中，無需編寫代碼。

## 專案簡介

這個專案透過一個背景守護進程，將即時通訊平台的訊息轉發給 Claude Code 或 Codex，並將回應發回聊天中。使用者只需執行 `/claude-to-im setup` 來進行互動式設置，並選擇所需的即時通訊平台。它支援 Telegram、Discord、Feishu/Lark 和 QQ 四種平台，並提供即時回應的串流預覽功能。與其他類似工具相比，這個專案的獨特之處在於它的權限控制，使用者可以透過聊天中的按鈕來批准工具的使用，這在 Telegram 和 Discord 中尤為方便。這個工具的會話持久性意味著即使守護進程重啟，對話也不會丟失。使用者需要 Node.js 20 以上版本，並需安裝 Claude Code 或 Codex CLI。這個專案目前處於穩定階段，適合中小型團隊使用，特別是那些需要在多個即時通訊平台上進行編程的團隊。建議在需要即時回應和權限控制的情況下使用，若不需要即時通訊功能則可考慮其他工具。

**技術棧**：`Node.js 20` · `TypeScript` · `Shell` · `PowerShell` · `JavaScript`

## 重點功能

- 四個即時通訊平台支援 — 同時支援 Telegram、Discord、Feishu/Lark 和 QQ。
- 互動式設置 — 向導式收集令牌，提供逐步指導。
- 權限控制 — 工具調用需要明確批准，增強安全性。
- 串流預覽 — 在 Telegram 和 Discord 中即時查看 Claude 的回應。
- 會話持久性 — 即使守護進程重啟，對話仍然保存。
- 秘密保護 — 令牌以 `chmod 600` 存儲，並在所有日誌中自動隱藏。
- 零代碼要求 — 安裝技能後只需運行 `/claude-to-im setup`。

## 快速開始

1. 設置技能
```bash
/claude-to-im setup
```
2. 啟動守護進程
```bash
/claude-to-im start
```
3. 在即時通訊應用中發送消息
```bash
發送消息給你的 bot
```

## 程式碼範例

```bash
/claude-to-im setup
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的作者有著豐富的開發經驗，並且針對即時通訊平台的需求進行了精準的切入。隨著遠端工作的普及，開發者對於在即時通訊工具中集成 AI 助手的需求日益增加，這使得該專案在市場上獲得了更多的關注。

## 適合誰使用

**目標受眾**：需要在多個即時通訊平台上與 AI 進行互動的開發團隊。

> [!example] 使用場景
> - 後端工程師用它來在 Discord 中與 AI 代理進行即時編程，因為這樣可以快速獲得代碼建議，提升工作效率。
> - 產品經理用它來在 Telegram 中詢問 AI 代理關於功能實現的建議，因為這樣可以在會議中即時獲得技術支持。
> - DevOps 工程師用它來在 Feishu 中管理 CI/CD 流程，因為可以即時獲得系統狀態和日誌，快速反應問題。

## 架構分析

這是一個基於 CLI 的工具，通過 Node.js 背景守護進程來實現即時通訊平台與 AI 編程代理的連接。用戶輸入 → 背景守護進程處理 → AI 編程代理回應。關鍵技術決策包括使用 SDK 來與 Claude Code 或 Codex 進行交互。專案目錄結構中，`README.md` 提供了詳細的安裝和使用說明。

## 優缺點分析

> [!success] 優點
> - 支援多個即時通訊平台，靈活性高。
> - 提供即時回應的串流預覽，提升使用體驗。
> - 權限控制機制增強了安全性，適合團隊使用。
> - 設置過程簡單，無需編寫代碼。

> [!danger] 缺點
> - 僅支援 Node.js 20 以上版本，限制了使用者範圍。
> - 需要額外安裝 Claude Code 或 Codex CLI，增加了安裝複雜度。
> - 不支援 Windows 環境，限制了使用者選擇。
> - 對於大型團隊，可能需要更多的權限管理功能。

> [!warning] 注意事項
> - 僅支援 Node.js 20 以上版本。
> - 需要安裝 Claude Code CLI 或 Codex CLI。
> - 不支援 Windows 環境。
> - 可能需要額外的 API 權限設置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[op7418--CodePilot\|op7418/CodePilot]] | CodePilot 提供完整的桌面 GUI，適合需要可視化界面的使用者，而 Claude-to-IM Skill 則專注於 CLI 環境，適合喜歡輕量化的開發者。 |
| [[openai--codex\|openai/codex]] | Codex 是一個強大的編程助手，但缺乏即時通訊集成，Claude-to-IM Skill 則專注於將 Codex 整合到即時通訊平台中。 |

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

## 社群與生態

**社群活躍度**：社群活躍度中等，有持續的更新和維護。
**連結**：[文件](https://github.com/op7418/Claude-to-IM-skill/blob/main/README_CN.md)

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

相關專案：[[op7418--CodePilot|op7418/CodePilot]] · [[openai--codex|openai/codex]]

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
