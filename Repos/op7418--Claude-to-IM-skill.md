---
repo: op7418/Claude-to-IM-skill
url: https://github.com/op7418/Claude-to-IM-skill
owner: op7418
owner_type: User
language: TypeScript
license: MIT
description: "Bridge Claude Code / Codex to IM platforms — chat with AI coding agents from Telegram, Discord, or Feishu/Lark."
homepage: ""
stars: 834
stars_per_day: 167
forks: 106
open_issues: 35
created: 2026-03-05
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "即時通訊工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓你在 Telegram、Discord、Feishu/Lark 等即時通訊平台上與 AI 編程代理對話。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
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

**834** stars · **167** stars/天 · 建立 5 天前 · TypeScript · MIT

`easy-install`

> [!summary] 一句話摘要
> 讓你在 Telegram、Discord、Feishu/Lark 等即時通訊平台上與 AI 編程代理對話。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (167 stars/day)
> **授權** MIT (商業友好)
> **適合** 希望在即時通訊平台上與 AI 編程助手互動的開發者和技術人員。
> **一句話重點** 這個專案讓即時通訊平台與 AI 編程助手的整合變得前所未有的簡單和高效。

> [!abstract] 核心創新
> 這個專案提供了一個無需編碼的即時通訊平台與 AI 編程助手的橋接解決方案。

## 專案簡介

這個專案透過一個背景守護進程，將即時通訊機器人與 Claude Code 或 Codex 會話連接起來，實現即時編程對話。用戶的訊息會被轉發給 AI 編程代理，並將回應（包括工具使用、權限請求、即時預覽）發回聊天界面。它使用 Node.js 作為後端，並支持 Telegram、Discord、Feishu/Lark 和 QQ 四個平台，提供互動式設置和權限控制功能。與其他類似工具相比，這個專案的特點在於其零代碼安裝和即時回應的流暢性，特別適合需要快速反饋的開發者。使用者可以在守護進程重啟後持續進行對話，並且所有的密鑰都會安全存儲。這個專案目前處於穩定階段，適合中小型團隊使用，特別是對於需要快速集成 AI 編程助手的開發環境。建議在需要即時互動的編程場景中使用，但不建議在大型專案中使用，因為可能會面臨性能瓶頸。

**技術棧**：`Node.js 20` · `TypeScript` · `Shell` · `PowerShell` · `JavaScript`

## 重點功能

- 四個即時通訊平台支持 — 同時支持 Telegram、Discord、Feishu/Lark 和 QQ。
- 互動式設置 — 提供引導式向導收集 API 令牌，簡化安裝過程。
- 權限控制 — 透過內聯按鈕或文本命令要求明確的工具調用批准。
- 即時預覽 — 在 Telegram 和 Discord 中，看到 Claude 的回應隨著輸入逐字顯示。
- 會話持久性 — 守護進程重啟後，對話不會丟失。
- 密鑰保護 — 令牌以 `chmod 600` 存儲，並在所有日誌中自動隱藏。
- 零代碼要求 — 安裝後只需運行 `/claude-to-im setup` 即可。

## 快速開始

1. 使用 npx 安裝技能
```bash
npx skills add op7418/Claude-to-IM-skill
```
2. 克隆到個人技能目錄
```bash
git clone https://github.com/op7418/Claude-to-IM-skill.git ~/.claude/skills/claude-to-im
```
3. 運行設置命令
```bash
/claude-to-im setup
```

## 程式碼範例

```bash
# 在 Telegram 中與 AI 編程助手互動
/claude-to-im setup
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的作者 op7418 之前開發了 CodePilot，一個功能豐富的桌面應用，這次的專案是從中提取出來的輕量級 CLI 版本。它解決了即時通訊平台與 AI 編程助手之間的橋接問題，讓開發者可以在熟悉的環境中進行編程。最近的社群討論和需求增加，促使這個工具的推出，特別是在遠端工作和即時協作的背景下。

## 適合誰使用

**目標受眾**：希望在即時通訊平台上與 AI 編程助手互動的開發者和技術人員。

> [!example] 使用場景
> - 後端工程師用它來在 Discord 上與 AI 編程助手互動，因為這樣可以即時獲得代碼建議，提升開發效率。
> - 產品經理用它來在 Telegram 中詢問技術問題，因為可以快速獲得準確的技術解答，無需等待開發人員回覆。
> - 自由開發者用它來在 Feishu 中進行代碼審查，因為可以即時獲得 AI 的反饋，節省了手動檢查的時間。

## 架構分析

這是一個單體架構的 CLI 工具，核心資料流為用戶輸入 → 背景守護進程處理 → AI 編程代理回應。使用 Node.js 作為核心技術，並透過 IM 平台的 API 與用戶進行交互。專案目錄結構中，主要的執行檔案為守護進程和設置腳本，確保用戶能夠輕鬆安裝和配置。

## 優缺點分析

> [!success] 優點
> - 支持多個即時通訊平台，靈活性高。
> - 安裝過程簡單，無需編碼知識。
> - 即時回應功能提升了開發效率。
> - 會話持久性確保了用戶體驗的連貫性。

> [!danger] 缺點
> - 目前僅支持特定版本的 Node.js，限制了使用者範圍。
> - 需要額外安裝 Claude Code 或 Codex CLI，增加了配置複雜度。
> - 在高流量情況下可能導致性能問題。
> - 不支持 Windows 環境，限制了使用者群體。

> [!warning] 注意事項
> - 僅支持 Node.js 20 以上版本。
> - 需要安裝 Claude Code CLI 或 Codex CLI 進行身份驗證。
> - 不支持 Windows 平台的原生安裝。
> - 可能在高流量情況下面臨性能瓶頸。

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

相關概念：[[即時通訊]] · [[CLI/TUI]] · [[自動化]]

相關專案：[[kamranahmedse--claude-statusline|kamranahmedse/claude-statusline]] · [[runesleo--claude-code-workflow|runesleo/claude-code-workflow]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，833 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，823 stars
