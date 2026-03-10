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
forks: 41
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
  - "將 Discord 伺服器歷史數據鏡像到 SQLite，便於本地搜索和查詢。"
---

# discrawl

**484** stars · **161** stars/天 · 建立 3 天前 · Go · MIT

`個人專案` `v0.1.0`

> [!summary] 一句話摘要
> 將 Discord 伺服器歷史數據鏡像到 SQLite，便於本地搜索和查詢。

> [!abstract] 核心創新
> 這個工具能夠將 Discord 數據鏡像到本地 SQLite，實現快速查詢和分析。

## 專案簡介

這個 CLI 工具能夠將 Discord 伺服器的數據鏡像到本地的 SQLite 數據庫，讓用戶可以不依賴 Discord 的搜索功能來查詢伺服器歷史。它能夠發現所有可訪問的公會，並同步頻道、成員和消息歷史，並維護全文搜索索引以便快速查詢。與其他 Discord 數據存儲工具相比，這個專案不需要用戶令牌，數據完全保存在本地，並且支持多公會的架構設計。使用者可以透過 SQL 查詢進行即時分析，這對於需要深入了解伺服器活動的開發者和管理員來說非常有用。這個工具的限制在於需要正確配置 Discord 機器人權限，否則可能無法完整同步數據。整體來看，這是一個功能強大且實用的工具，特別適合需要本地數據分析的 Discord 管理員。

**技術棧**：`Go`

## 重點功能

- 將 Discord 伺服器數據鏡像到本地 SQLite。
- 支持多公會的數據同步。
- 維護全文搜索索引以便快速查詢。
- 提供即時 SQL 查詢功能。
- 不需要用戶令牌，數據完全保存在本地。

## 快速開始

1. 設置 Discord 機器人權限
```bash
確保機器人可以讀取消息歷史。
```
2. 初始化 discrawl
```bash
bin/discrawl init
```
3. 開始同步數據
```bash
bin/discrawl sync
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 Discord 使用者的增加，對於數據存取和分析的需求也隨之上升，這個專案正好滿足了這一需求。作者的背景和經驗使得這個工具在功能上更加完善，吸引了許多用戶的關注。

## 適合誰使用

**目標受眾**：需要本地分析 Discord 伺服器數據的管理員和開發者。

> [!example] 使用場景
> - Discord 管理員 用它來 本地查詢伺服器歷史，因為這樣可以更方便地分析伺服器活動。
> - 開發者 用它來 進行伺服器數據分析，因為這樣可以獲得更深入的洞察。
> - 數據科學家 用它來 對 Discord 數據進行即時查詢，因為這樣可以快速獲取所需信息。

## 架構分析

該工具的架構基於 Go 語言，能夠發現 Discord 公會並同步數據到本地 SQLite，並維護搜索索引以便快速查詢。

## 優缺點分析

> [!success] 優點
> - 數據完全保存在本地，無需依賴 Discord。
> - 支持多公會的數據同步，靈活性高。
> - 提供即時 SQL 查詢功能，便於分析。

> [!danger] 缺點
> - 需要正確配置機器人權限，否則無法完整同步數據。
> - 對於大型伺服器，數據同步可能需要較長時間。

> [!warning] 注意事項
> - 需要正確配置 Discord 機器人權限。
> - 僅支持 Discord 公會的數據同步。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 41 |
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

相關概念：[[資料視覺化]] · [[資料庫]] · [[即時通訊]]

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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，481 stars
