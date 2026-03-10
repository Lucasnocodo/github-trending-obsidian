---
repo: op7418/Claude-to-IM-skill
url: https://github.com/op7418/Claude-to-IM-skill
owner: op7418
owner_type: User
language: TypeScript
license: MIT
description: "Bridge Claude Code / Codex to IM platforms — chat with AI coding agents from Telegram, Discord, or Feishu/Lark."
homepage: ""
stars: 823
stars_per_day: 165
forks: 105
open_issues: 35
created: 2026-03-05
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: ""
status: to-review
tags:
  - github
  - 開發工具
  - typescript
  - chatbot
  - claude
  - claude_code
  - discord
  - feishu
---

# Claude-to-IM-skill

**823** stars · **165** stars/天 · 建立 5 天前 · TypeScript · MIT

> [!summary] 一句話摘要
> 讓你在即時通訊平台上與 AI 編程代理互動，提升編程效率。

## 專案簡介

這個專案提供了一個後台守護進程，能將即時通訊平台的訊息轉發給 Claude 編程代理，並接收回應。它使用 Node.js 實作，並支援 Telegram、Discord、Feishu/Lark 和 QQ 等多個平台。與其他類似工具相比，它的輕量級設計和 CLI 介面使得使用者能夠快速上手，適合喜歡簡潔操作的開發者。值得一試，特別是對於需要在多平台上進行編程的使用者。

## 重點功能

- 支援多個即時通訊平台，包括 Telegram、Discord、Feishu/Lark 和 QQ。
- 提供互動式設置向導，簡化配置過程。
- 具備權限控制功能，確保安全性。

## 快速開始

安裝 Node.js。,運行守護進程並配置 IM 機器人。

## 為什麼值得關注

> [!tip] 爆紅原因
> 開發者對於即時通訊工具的需求日益增加，這個專案正好滿足了這一需求。作者的背景和對於即時通訊的深入理解使得這個工具更具吸引力。

## 適合誰使用

**目標受眾**：開發者和學生，特別是需要即時編程幫助的使用者。

> [!example] 使用場景
> - 開發者用它在 Discord 上詢問編程問題，因為能即時獲得 AI 的解答。
> - 學生用它在 Telegram 上進行編程練習，因為可以隨時得到即時的反饋。
> - 團隊成員用它在 Feishu 上協作編程，因為能夠快速分享和解決代碼問題。

> [!warning] 注意事項
> 目前僅支援特定的即時通訊平台，未來可能需要擴展。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | TypeScript |
| 授權 | MIT |
| Stars | 823 |
| Forks | 105 |
| Issues | 35 |
| 建立日期 | 2026-03-05 |

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
> - **Secret protection** — tokens stored with `chmod 600`, a

## 延伸閱讀

相關概念：#即時通訊 · #人工智慧 · #編程助手

[GitHub](https://github.com/op7418/Claude-to-IM-skill)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，823 stars
