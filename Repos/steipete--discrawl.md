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
category: "CLI 工具"
release_tag: "v0.1.0"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/cli_工具"
  - "lang/go"
aliases:
  - "discrawl"
  - "steipete/discrawl"
  - "將 Discord 伺服器歷史鏡像到 SQLite，方便本地搜尋和查詢。"
---

# discrawl

**484** stars · **161** stars/天 · 建立 3 天前 · Go · MIT

`個人專案` `v0.1.0`

> [!summary] 一句話摘要
> 將 Discord 伺服器歷史鏡像到 SQLite，方便本地搜尋和查詢。

> [!abstract] 核心創新
> 這個專案提供了一個本地化的 Discord 數據查詢解決方案，無需依賴 Discord 的搜尋功能。

## 專案簡介

這個專案提供了一個 CLI 工具，能夠將 Discord 伺服器的數據鏡像到本地 SQLite 數據庫，讓用戶可以在不依賴 Discord 搜尋的情況下進行查詢和檢查。它能夠發現所有可訪問的伺服器，並同步頻道、成員和消息歷史。與其他類似工具相比，這個專案強調了數據的本地存儲和快速搜尋功能，並且不需要使用者令牌，提升了安全性。實際使用中，這個工具能夠快速查詢伺服器歷史，但需要正確的 bot 設置和權限。整體來看，這是一個功能強大的工具，適合需要深入分析 Discord 伺服器數據的用戶。

**技術棧**：`Go`

## 重點功能

- 將 Discord 伺服器數據鏡像到本地 SQLite 數據庫。
- 支持快速全文搜索，提升查詢效率。
- 能夠同步頻道、成員和消息歷史。
- 支持多伺服器數據管理，方便使用。
- 不需要用戶令牌，提升安全性。

## 快速開始

1. 設置 Discord bot token 環境變數
```bash
export DISCORD_BOT_TOKEN='your-bot-token'
```
2. 初始化 discrawl
```bash
bin/discrawl init
```
3. 執行 discrawl 同步
```bash
bin/discrawl sync
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在 Discord 生態系統中的經驗使得這個專案能夠針對用戶需求進行優化，並且其本地數據存儲的特性吸引了許多對隱私和數據安全有關注的用戶。隨著 Discord 使用者的增加，對於數據分析工具的需求也隨之上升，這使得該專案在近期受到關注。

## 適合誰使用

**目標受眾**：需要本地查詢和分析 Discord 伺服器數據的用戶。

> [!example] 使用場景
> - 社群管理員 用它來 分析伺服器歷史數據，因為它能夠快速查詢和檢索信息。
> - 開發者 用它來 進行 Discord 機器人數據的本地分析，因為它提供了 SQL 查詢功能。
> - 研究人員 用它來 研究 Discord 使用模式，因為它能夠保存大量的伺服器數據。

## 架構分析

專案的架構基於 CLI 工具，通過 Discord bot 獲取數據並將其存儲到 SQLite 數據庫中，支持快速查詢和同步功能。

## 優缺點分析

> [!success] 優點
> - 能夠快速查詢和檢索 Discord 伺服器數據。
> - 支持多伺服器數據管理，方便使用。
> - 不需要用戶令牌，提升安全性。

> [!danger] 缺點
> - 需要正確的 bot 設置和權限，否則無法使用。
> - 對於大型伺服器，數據同步可能需要較長時間。

> [!warning] 注意事項
> - 需要正確的 bot 設置和權限，否則無法同步數據。
> - 對於大型伺服器，數據同步可能需要較長時間。

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

相關概念：[[Discord API]] · [[SQLite]] · [[數據分析]]

[GitHub](https://github.com/steipete/discrawl)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "steipete--discrawl"
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
