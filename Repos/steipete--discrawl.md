---
repo: steipete/discrawl
url: https://github.com/steipete/discrawl
owner: steipete
owner_type: User
language: Go
license: MIT
description: "cli for discord with sqlite backend"
homepage: ""
stars: 484
stars_per_day: 161
forks: 40
open_issues: 10
created: 2026-03-07
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: "v0.1.0"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 開發工具
  - go
aliases:
  - "discrawl"
  - "steipete/discrawl"
  - "將 Discord 數據鏡像到 SQLite，方便本地搜索和查詢。"
---

# discrawl

**484** stars · **161** stars/天 · 建立 3 天前 · Go · MIT

`個人專案` `v0.1.0`

> [!summary] 一句話摘要
> 將 Discord 數據鏡像到 SQLite，方便本地搜索和查詢。

> [!abstract] 核心創新
> 這個專案提供了一個安全的方式將 Discord 數據鏡像到本地，並支持快速查詢。

## 專案簡介

這個專案提供了一個 CLI 工具，可以將 Discord 的伺服器數據鏡像到本地的 SQLite 數據庫中，使用者可以在不依賴 Discord 搜索的情況下進行查詢和檢索。它能夠發現所有可訪問的伺服器，並同步頻道、成員和消息歷史，並且支持快速的本地文本搜索。與其他類似工具相比，這個專案強調了數據的本地存儲和查詢能力，避免了用戶令牌的使用，確保數據的安全性。實際使用中，這個工具能夠快速同步和查詢數據，但需要適當的權限設置。對於需要本地數據分析的 Discord 用戶來說，這是一個非常實用的工具。

**技術棧**：`Go`

## 重點功能

- 將 Discord 數據鏡像到本地 SQLite 數據庫。
- 支持快速的全文搜索，提升查詢效率。
- 能夠同步頻道、成員和消息歷史。
- 無需用戶令牌，確保數據安全。
- 支持多伺服器的數據管理。

## 快速開始

1. 設置 Discord bot 令牌
```bash
export DISCORD_BOT_TOKEN='your-bot-token'
```
2. 初始化 discrawl
```bash
bin/discrawl init
```
3. 開始數據同步
```bash
bin/discrawl sync
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 Discord 使用者對數據隱私和本地存儲的關注增加，這個專案提供了一個解決方案，滿足了用戶的需求。作者的背景和對於數據管理的專業知識使得這個工具在社群中受到廣泛關注。

## 適合誰使用

**目標受眾**：需要本地存儲和查詢 Discord 數據的開發者和社群管理員。

> [!example] 使用場景
> - 社群管理員 用它來 本地存儲 Discord 數據，因為這樣可以方便地進行數據分析。
> - 開發者 用它來 查詢伺服器歷史，因為本地搜索比 Discord 的搜索更快速。
> - 數據分析師 用它來 分析 Discord 伺服器的互動數據，因為它提供了結構化的數據存儲。

## 優缺點分析

> [!success] 優點
> - 數據存儲在本地，確保隱私。
> - 快速的全文搜索功能。
> - 支持多伺服器的數據管理。

> [!danger] 缺點
> - 需要適當的 bot 權限設置。
> - 數據同步可能會受到 API 限制。
> - 僅支持 Discord 的官方 bot 令牌。

> [!warning] 注意事項
> - 需要 Discord bot 的適當權限。
> - 數據同步可能會受到 API 限制。
> - 僅支持 Discord 的官方 bot 令牌。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 40 |
| Open Issues | 10 |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-07 |
| Repo 大小 | 256 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@steipete](https://github.com/steipete) | 37 |

**最新版本**：v0.1.0 (2026-03-08)

## README 摘錄

> [!info]- 展開查看原文 README
> # discrawl 🛰️ — Mirror Discord into SQLite; search server history locally
> 
> `discrawl` mirrors Discord guild data into local SQLite so you can search, inspect, and query server history without depending on Discord search.
> 
> It is a bot-token crawler. No user-token hacks. Data stays local.
> 
> ## What It Does
> 
> - discovers every guild the configured bot can access
> - syncs channels, threads, members, and message history into SQLite
> - maintains FTS5 search indexes for fast local text search
> - extracts small text-like attachments into the local search index
> - records structured user and role mentions for direct querying
> - tails Gateway events for live updates, with periodic repair syncs
> - exposes read-only SQL for ad hoc analysis
> - keeps schema multi-guild ready while preserving a simple single-guild default UX
> 
> Search defaults to all guilds. `sync` and `tail` default to the configured default guild when one exists, otherwise they fan out to all discovered guilds.
> 
> ## Requirements
> 
> - Go `1.26+`
> - a Discord bot token the bot can use to read the target guilds
> - bot permissions for the channels you want archived
> 
> ### Discord Bot Setup
> 
> `discrawl` needs a real bot token. Not a user token.
> 
> Minimum practical setup:
> 
> 1. Create or reuse a Discord application in the Discord developer portal.
> 2. Add a bot user to that application.
> 3. Invite the bot to the target guilds.
> 4. Enable these intents for the bot:
>    - `Server Members Intent`
>    - `Message Content Intent`
> 5. Ensure the bot can at least:
>    - view channels
>    - read message history
> 
> Without those intents/permissions, `sync`, `tail`, member snapshots, or message content archiving will be partial or fail.
> 
> ### Bot Token Sources
> 
> Token resolution:
> 
> 1. OpenClaw config, if `discord.token_source` is not `env`
> 2. `DISCORD_BOT_TOKEN` or the configured `discord.token_env`
> 
> `discrawl` accepts either raw token text or a value prefixed with `Bot `. It normalizes that automatically.
> 
> Fastest env-only path:
> 
> ```bash
> export DISCORD_BOT_TOKEN="your-bot-token"
> bin/discrawl doctor
> bin/discrawl init
> ```
> 
> If you keep shell secrets in `~/.profile`, add:
> 
> ```bash
> export DISCORD_BOT_TOKEN="your-bot-token"
> ```
> 
> Then reload your shell before running `discrawl`.
> 
> If you already use OpenClaw, `discrawl` can reuse the Discord token from `~/.openclaw/openclaw.json` by default.
> 
> Default runtime paths:
> 
> - config: `~/.discrawl/config.toml`
> - database: `~/.discrawl/discrawl.db`
> - cache: `~/.discrawl/cache/`
> - logs: `~/.discrawl/logs/`
> 
> ## Install
> 
> 

## 延伸閱讀

相關概念：[[數據鏡像]] · [[SQLite]] · [[Discord bot]]

[GitHub](https://github.com/steipete/discrawl)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，481 stars
