---
repo: op7418/Claude-to-IM-skill
url: https://github.com/op7418/Claude-to-IM-skill
owner: op7418
owner_type: User
language: TypeScript
license: MIT
description: "Bridge Claude Code / Codex to IM platforms — chat with AI coding agents from Telegram, Discord, or Feishu/Lark."
homepage: ""
stars: 824
stars_per_day: 165
forks: 105
open_issues: 35
created: 2026-03-05
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
category: "其他"
release_tag: ""
install_complexity: "medium"
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
---

# Claude-to-IM-skill

**824** stars · **165** stars/天 · 建立 5 天前 · TypeScript · MIT

> [!summary] 一句話摘要
> 將 Claude Code / Codex 連接到即時通訊平台，實現與 AI 編程代理的對話。

> [!abstract] 核心創新
> 這個專案專注於將 AI 編程代理與即時通訊平台無縫連接。

## 專案簡介

Claude-to-IM Skill 允許開發者將 Claude Code 或 Codex 與即時通訊平台（如 Telegram 和 Discord）連接，實現與 AI 編程代理的互動。它使用 TypeScript 和 Node.js 實現，並且提供了簡單的設置向導。與其他即時通訊集成工具不同，這個專案專注於輕量級的 CLI 解決方案，適合喜歡命令列的用戶。這是一個實用的工具，特別適合需要與 AI 進行交互的開發者。

**技術棧**：`TypeScript` · `Shell` · `PowerShell` · `JavaScript`

## 重點功能

- 支持多個即時通訊平台。
- 提供互動式設置向導。
- 控制工具調用的權限。

## 為什麼值得關注

> [!tip] 爆紅原因
> 開發者對於與 AI 進行實時互動的需求日益增加，這個專案恰好滿足了這一需求。其簡化的設置過程也吸引了許多開發者的注意。

## 適合誰使用

**目標受眾**：需要與 AI 編程代理互動的開發者和學生。

> [!example] 使用場景
> - [開發者] 用它來 在即時通訊中與 AI 進行互動，因為這樣可以快速獲得編程建議。
> - [團隊] 用它來 在協作中利用 AI 的幫助，因為這樣可以提高工作效率。
> - [學生] 用它來 在學習過程中隨時詢問 AI，因為這樣可以加深理解。

> [!warning] 注意事項
> 需要配置即時通訊平台的 API 金鑰。

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
> - **Secret protection** — tokens stored with `chmod 600`, a

## 延伸閱讀

相關概念：[[即時通訊集成]] · [[AI 互動]] · [[命令列工具]]

[GitHub](https://github.com/op7418/Claude-to-IM-skill)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，823 stars
