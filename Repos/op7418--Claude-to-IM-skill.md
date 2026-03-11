---
repo: op7418/Claude-to-IM-skill
url: https://github.com/op7418/Claude-to-IM-skill
owner: op7418
owner_type: User
language: TypeScript
license: MIT
description: "Bridge Claude Code / Codex to IM platforms — chat with AI coding agents from Telegram, Discord, or Feishu/Lark."
homepage: ""
stars: 839
stars_per_day: 168
forks: 107
open_issues: 35
created: 2026-03-05
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "即時通訊"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓你在 Telegram、Discord、Feishu/Lark 等即時通訊平台上與 AI 編碼代理互動。"
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
  - "讓你在 Telegram、Discord、Feishu/Lark 等即時通訊平台上與 AI 編碼代理互動。"
---

# Claude-to-IM-skill

**839** stars · **168** stars/天 · 建立 5 天前 · TypeScript · MIT

`easy-install`

> [!summary] 一句話摘要
> 讓你在 Telegram、Discord、Feishu/Lark 等即時通訊平台上與 AI 編碼代理互動。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (168 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 2 人
> **適合** 希望在即時通訊平台上與 AI 進行編碼互動的開發者和技術人員。
> **一句話重點** 這個專案展示了即時通訊與 AI 編碼的結合，讓開發者能夠在熟悉的環境中獲得技術支持。

> [!abstract] 核心創新
> 這個專案的創新在於將 Claude Code 和 Codex 無縫集成到多個即時通訊平台，實現即時互動。

## 專案簡介

這個專案提供了一個後台守護進程，能將即時通訊平台的訊息轉發給 Claude Code 或 Codex，並將 AI 的回應發回給用戶。用戶在 Telegram、Discord、Feishu 或 QQ 上發送的訊息會經過 Bot API，然後由 Node.js 實現的守護進程處理，最終將 Claude Code 或 Codex 的回應傳回。此專案支持四種即時通訊平台，並提供互動式設置向導來收集 API 令牌，確保用戶能夠輕鬆配置。與其他類似工具相比，這個專案的特點在於它的即時回應功能，能夠在 Telegram 和 Discord 上實現流式預覽，讓用戶看到 AI 的輸出過程。它還具備會話持久性，能在守護進程重啟後保持對話，並提供明確的權限控制，防止未經授權的工具使用。這個工具的設計使得安裝和使用非常簡單，無需編寫代碼，只需運行 `/claude-to-im setup` 即可。雖然它的功能強大，但仍需 Node.js 和相應的 CLI 工具作為前提條件。整體來看，這是一個穩定的工具，適合需要在多個即時通訊平台上與 AI 進行交互的開發者使用。

**技術棧**：`Node.js 20+` · `TypeScript`

## 重點功能

- 四個即時通訊平台支持 — 同時支持 Telegram、Discord、Feishu/Lark 和 QQ。
- 互動式設置 — 提供逐步指導的向導收集 API 令牌。
- 權限控制 — 工具調用需要明確批准，通過內聯按鈕或文本命令進行。
- 流式預覽 — 在 Telegram 和 Discord 中實時顯示 Claude 的回應。
- 會話持久性 — 守護進程重啟後對話仍然存在。
- 安全保護 — 令牌以 `chmod 600` 存儲，並在所有日誌中自動隱藏。
- 零代碼需求 — 安裝技能後運行 `/claude-to-im setup` 即可。

## 快速開始

1. 運行設置向導
```bash
/claude-to-im setup
```
2. 啟動守護進程
```bash
/claude-to-im start
```
3. 在 IM 應用中發送消息
```bash
發送消息到你的 Bot
```

## 程式碼範例

```bash
# 在 Telegram 中與 AI 編程助手互動
/claude-to-im setup
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的作者 op7418 之前開發過 CodePilot，一個功能豐富的桌面應用，這讓他在開發即時通訊橋接方面有豐富的經驗。這個工具解決了在即時通訊平台上與 AI 進行編碼互動的需求，特別是在多平台支持方面。最近的推廣和社群討論可能促進了它的曝光率，尤其是在開發者社群中。技術生態的變化使得即時通訊與 AI 的結合變得更加實用和可行。

## 適合誰使用

**目標受眾**：希望在即時通訊平台上與 AI 進行編碼互動的開發者和技術人員。

> [!example] 使用場景
> - 後端工程師用它來在 Discord 上與 AI 編碼代理互動，因為可以即時獲得代碼建議，提升開發效率。
> - 產品經理用它來在 Telegram 中詢問 AI 關於產品功能的實現，因為能快速獲得技術回應，縮短決策時間。
> - 初學者用它來在 Feishu 中請教 AI 編程問題，因為不需要編寫代碼即可輕鬆設置，快速上手。

## 架構分析

這是一個基於單體架構的 CLI 工具，核心資料流為：用戶輸入 → 後台守護進程處理 → AI 回應。關鍵技術決策是使用 Node.js 實現守護進程，並通過 IM 平台的 Bot API 進行通訊。專案目錄結構中，主要的執行檔案包括 `index.js` 和 `setup.js`，用於處理用戶的請求和設置。

## 技術深入分析

這個專案使用 Node.js 作為後台守護進程，通過 IM 平台的 Bot API 與用戶進行交互。它的設計使得即時通訊與 AI 的結合變得無縫，並且支持流式回應，這在其他類似工具中並不常見。該工具能夠處理多達數百條訊息，並且在守護進程重啟後保持會話持久性。選擇 Node.js 是因為其非同步處理能力和廣泛的生態系統，這使得開發和維護變得更加高效。設計上，這個專案需要注意 API 限制和權限管理，特別是在大型團隊使用時可能會遇到挑戰。

## 優缺點分析

> [!success] 優點
> - 支持多個即時通訊平台，靈活性高。
> - 設置過程簡單，無需編碼經驗。
> - 實時回應功能提升了用戶體驗。

> [!danger] 缺點
> - 需要額外的 CLI 工具作為前提條件。
> - 對於大型團隊可能需要更多的權限管理。
> - 在某些平台上可能會遇到 API 限制。

> [!warning] 注意事項
> - 需要 Node.js 版本 >= 20。
> - 需要安裝並認證 Claude Code CLI 或 Codex CLI。
> - 不支持 Windows 平台的原生運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 這個工具專注於安全性和隱私保護，而 Claude-to-IM-skill 更加注重即時通訊的便捷性和多平台支持。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | tg-ws-proxy 主要用於 Telegram 的 WebSocket 代理，而 Claude-to-IM-skill 提供多平台的 AI 互動功能。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 107 |
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

**社群活躍度**：社群活躍度中等，定期更新和回覆問題。
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

相關概念：[[即時通訊]] · [[API 設計]] · [[自動化]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[kamranahmedse--claude-statusline|kamranahmedse/claude-statusline]] · [[runesleo--claude-code-workflow|runesleo/claude-code-workflow]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]]

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

- [[2026-03-11|2026-03-11]] — 再次上榜，836 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，823 stars
