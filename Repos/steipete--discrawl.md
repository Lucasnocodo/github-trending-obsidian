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
  - "category/開發工具"
  - "lang/go"
aliases:
  - "discrawl"
  - "steipete/discrawl"
  - "將 Discord 伺服器數據鏡像到本地 SQLite，解決 Discord 搜尋限制問題。"
---

# discrawl

**484** stars · **161** stars/天 · 建立 3 天前 · Go · MIT

`個人專案` `v0.1.0`

> [!summary] 一句話摘要
> 將 Discord 伺服器數據鏡像到本地 SQLite，解決 Discord 搜尋限制問題。

> [!abstract] 核心創新
> 這個專案提供了一個本地化的解決方案，讓用戶能夠在不依賴 Discord 搜尋的情況下，快速查詢伺服器歷史。

## 專案簡介

這個專案提供了一個 CLI 工具，將 Discord 伺服器的數據鏡像到本地 SQLite 數據庫，讓用戶可以在不依賴 Discord 搜尋的情況下，快速查詢和分析伺服器歷史。它能夠同步頻道、成員和消息歷史，並維護全文搜索索引以支持快速查詢。與其他 Discord 數據管理工具相比，這個專案強調數據的本地存儲和即時更新，避免了使用者的數據依賴於外部服務。這使得用戶能夠在本地進行更靈活的數據分析，並且保持數據的隱私性。這個專案適合需要長期保存和查詢 Discord 數據的開發者和社群管理者。

**技術棧**：`Go`

## 重點功能

- 將 Discord 伺服器數據同步到本地 SQLite。
- 支持快速的全文搜索查詢。
- 能夠即時更新數據，保持最新狀態。
- 支持多伺服器數據管理，保持簡單的單伺服器用戶體驗。
- 不依賴用戶令牌，確保數據安全。

## 快速開始

1. 設置環境變數
```bash
export DISCORD_BOT_TOKEN='your-bot-token'
```
2. 初始化 discrawl
```bash
bin/discrawl init
```
3. 檢查狀態
```bash
bin/discrawl doctor
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 Discord 使用者數量的增加，對於數據管理和查詢的需求也隨之上升。這個專案提供了一個簡單有效的解決方案，讓用戶能夠在本地管理數據，這在隱私和數據安全方面具有吸引力。作者的背景和對 Discord API 的深入理解，使得這個專案能夠迅速獲得關注。

## 適合誰使用

**目標受眾**：需要本地管理和查詢 Discord 數據的開發者和社群管理者。

> [!example] 使用場景
> - 社群管理者 用它來 本地存儲 Discord 數據，因為這樣可以隨時查詢歷史消息。
> - 開發者 用它來 分析伺服器活動，因為它能快速檢索和查詢數據。
> - 數據分析師 用它來 進行自定義查詢，因為它支持 SQL 查詢語言。

## 架構分析

這個專案的架構基於一個 CLI 工具，通過 Discord API 獲取數據並同步到本地 SQLite 數據庫，支持即時更新和查詢。

## 優缺點分析

> [!success] 優點
> - 本地存儲數據，保護用戶隱私。
> - 支持快速的全文搜索，提升查詢效率。
> - 即時更新數據，保持最新狀態。

> [!danger] 缺點
> - 需要 Discord 機器人令牌，增加了使用門檻。
> - 對於大型伺服器，數據同步可能較慢。
> - 需要適當的權限才能獲取完整的數據。

> [!warning] 注意事項
> - 需要 Discord 機器人令牌才能運行。
> - 對於大型伺服器，數據同步可能需要時間。
> - 需要適當的權限才能讀取消息歷史。

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

相關概念：[[數據鏡像]] · [[SQLite]] · [[Discord API]]

[GitHub](https://github.com/steipete/discrawl)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "steipete--discrawl"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，481 stars
