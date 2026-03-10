---
repo: op7418/Claude-to-IM-skill
url: https://github.com/op7418/Claude-to-IM-skill
owner: op7418
owner_type: User
language: TypeScript
license: MIT
description: "Bridge Claude Code / Codex to IM platforms — chat with AI coding agents from Telegram, Discord, or Feishu/Lark."
homepage: ""
stars: 827
stars_per_day: 165
forks: 105
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
  - "讓你在 Telegram、Discord、Feishu/Lark 等即時通訊平台上與 AI 編碼代理對話。"
---

# Claude-to-IM-skill

**827** stars · **165** stars/天 · 建立 5 天前 · TypeScript · MIT

`easy-install`

> [!summary] 一句話摘要
> 讓你在 Telegram、Discord、Feishu/Lark 等即時通訊平台上與 AI 編碼代理對話。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (165 stars/day)
> **適合** 需要在多個即時通訊平台上與 AI 編碼助手互動的開發團隊。
> **一句話重點** 這個專案展示了如何將 AI 編碼助手的強大功能直接整合到開發者日常使用的即時通訊工具中，極大地提升了工作效率。

> [!abstract] 核心創新
> 這個專案的創新在於將 AI 編碼助手無縫集成到多個即時通訊平台中，實現即時互動。

## 專案簡介

這個專案透過一個背景守護進程，將 IM 平台的訊息轉發到 Claude Code 或 Codex，並將 AI 的回應發送回聊天中。用戶只需執行 `/claude-to-im setup`，即可透過互動式向導完成設置，無需撰寫任何程式碼。它支持 Telegram、Discord、Feishu/Lark 和 QQ 四個平台，並提供即時回應流式顯示功能，讓用戶能夠即時看到 AI 的輸出。與其他類似工具相比，它的權限控制更為嚴格，要求用戶對工具調用進行明確批准，這在 Telegram 和 Discord 中以按鈕形式呈現，而在 Feishu 和 QQ 中則使用文本命令。這個工具的會話持久性意味著即使守護進程重啟，對話也不會丟失。它需要 Node.js 20 以上版本和已認證的 Claude Code 或 Codex CLI。整體來看，這是一個相對成熟的專案，適合中小型團隊使用，特別是那些需要在多個 IM 平台上進行 AI 編程互動的團隊。建議在需要快速集成 AI 編碼助手時使用，但如果團隊需要更複雜的 GUI 介面，則可以考慮 CodePilot。

**技術棧**：`Node.js 20` · `TypeScript` · `Shell` · `PowerShell` · `JavaScript`

## 重點功能

- 四個即時通訊平台支持 — 同時支持 Telegram、Discord、Feishu/Lark 和 QQ。
- 互動式設置 — 使用向導收集 API 令牌，提供逐步指導。
- 權限控制 — 工具調用需要用戶通過按鈕或文本命令明確批准。
- 流式預覽 — 在 Telegram 和 Discord 中即時顯示 Claude 的回應。
- 會話持久性 — 即使守護進程重啟，對話也不會丟失。
- 秘密保護 — 令牌以 `chmod 600` 存儲，並在所有日誌中自動隱藏。

## 快速開始

1. 安裝技能
```bash
npx skills add op7418/Claude-to-IM-skill
```
2. 設置技能
```bash
/claude-to-im setup
```
3. 啟動守護進程
```bash
/claude-to-im start
```

## 程式碼範例

```bash
/claude-to-im setup
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 專案的作者擁有開發多個相關工具的背景，並且這個專案切中了開發者在即時通訊平台上進行 AI 編碼互動的需求。隨著 AI 技術的普及，許多開發者希望能在熟悉的環境中進行編碼，而不必切換到其他工具。這個專案的推出恰好滿足了這一需求。

## 適合誰使用

**目標受眾**：需要在多個即時通訊平台上與 AI 編碼助手互動的開發團隊。

> [!example] 使用場景
> - 後端工程師用它來在 Discord 上與 AI 進行即時編碼對話，因為這樣可以快速獲得代碼建議，節省了查找資料的時間。
> - 全端開發者用它來在 Telegram 中請求代碼片段，因為即時回應能提高開發效率，特別是在進行快速原型開發時。
> - 產品經理用它來在 Feishu 中詢問技術問題，因為能夠直接與 AI 互動，讓他們更快理解技術限制和可能性。

## 架構分析

這是一個基於 CLI 的單體應用，架構模式為單體。用戶輸入 → 背景守護進程處理 → AI 編碼代理回應。關鍵技術決策包括使用 Node.js 作為後端技術，並通過 IM 平台的 API 進行通訊。專案目錄結構中，重要檔案包括 `README.md` 和安裝腳本。

## 優缺點分析

> [!success] 優點
> - 支持多個即時通訊平台，靈活性高。
> - 設置過程簡單，無需編碼知識。
> - 即時回應流式顯示，提升互動體驗。
> - 強大的權限控制，保障安全性。

> [!danger] 缺點
> - 缺乏 GUI 支持，對於不熟悉 CLI 的用戶不友好。
> - 僅支持特定版本的 Node.js，限制使用範圍。
> - 對於大型團隊可能需要更多的管理工具。
> - 功能相對簡單，無法滿足高級用戶的需求。

> [!warning] 注意事項
> - 僅支援 Node.js 20 以上版本。
> - 需要已認證的 Claude Code CLI 或 Codex CLI。
> - 不支援自定義 IM 平台，僅限於列舉的四個平台。
> - 目前僅提供 CLI 介面，缺乏 GUI 支持。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[op7418--CodePilot\|op7418/CodePilot]] | CodePilot 提供完整的桌面應用程式和可視化聊天介面，適合需要圖形化操作的用戶，而 Claude-to-IM-skill 則專注於輕量級的 CLI 解決方案。 |

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

## 社群與生態

**社群活躍度**：社群活躍度中等，有定期更新和回應。
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

相關概念：[[CLI/TUI]] · [[自動化測試]] · [[機器學習]]

[GitHub](https://github.com/op7418/Claude-to-IM-skill)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "op7418--Claude-to-IM-skill"
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
