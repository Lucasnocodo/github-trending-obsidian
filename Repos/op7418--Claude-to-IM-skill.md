---
repo: op7418/Claude-to-IM-skill
url: https://github.com/op7418/Claude-to-IM-skill
owner: op7418
owner_type: User
language: TypeScript
license: MIT
stars: 822
stars_per_day: 164
forks: 105
created: 2026-03-05
first_seen: 2026-03-10
category: "Other"
status: to-review
tags:
  - github
  - other
  - typescript
  - chatbot
  - claude
  - claude_code
  - discord
  - feishu
---

# Claude-to-IM-skill

**822** stars · **164** stars/天 · 建立 5 天前 · TypeScript · MIT

> [!summary] 一句話摘要
> Bridge Claude Code / Codex to IM platforms — chat with AI coding agents from Telegram, Discord, or Feishu/Lark.

## 專案簡介

Bridge Claude Code / Codex to IM platforms — chat with AI coding agents from Telegram, Discord, or Feishu/Lark.

## 為什麼值得關注

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | TypeScript |
| 授權 | MIT |
| Stars | 822 |
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

[GitHub](https://github.com/op7418/Claude-to-IM-skill)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，822 stars
