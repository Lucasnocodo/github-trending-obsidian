---
repo: steipete/discrawl
url: https://github.com/steipete/discrawl
owner: steipete
owner_type: User
language: Go
license: MIT
description: "cli for discord with sqlite backend"
homepage: ""
stars: 483
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
---

# discrawl

**483** stars · **161** stars/天 · 建立 3 天前 · Go · MIT

`個人專案` `v0.1.0`

> [!summary] 一句話摘要
> 讓 Discord 伺服器的歷史記錄在本地 SQLite 中可搜尋，無需依賴 Discord 的搜尋功能。

> [!abstract] 核心創新
> 這個專案的創新在於將 Discord 數據本地化，並提供快速的搜索功能。

## 專案簡介

它將 Discord 伺服器的數據鏡像到本地 SQLite，讓你可以快速搜尋和查詢伺服器歷史。使用 Go 語言實作，並且支援 FTS5 搜索索引以加速本地文本搜索。與其他 Discord 數據管理工具相比，這個專案專注於本地存儲和查詢，避免了對 Discord API 的依賴。這個專案的功能相當成熟，值得對 Discord 數據有需求的開發者試用。

**技術棧**：`Go`

## 重點功能

- 將 Discord 伺服器數據鏡像到本地 SQLite。
- 支援快速的本地文本搜尋，使用 FTS5 索引。
- 實時更新和定期同步功能，確保數據的即時性。

## 快速開始

1. 安裝 Go 語言環境
```bash
brew install go
```
2. 克隆專案並進入目錄
```bash
git clone https://github.com/steipete/discrawl.git && cd discrawl
```
3. 運行專案
```bash
go run main.go
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在 Discord 開發社群中活躍，切中開發者對於數據存取的需求，特別是在 Discord API 限制下的使用情境。

## 適合誰使用

**目標受眾**：Discord 伺服器的管理者和開發者，特別是需要本地數據存取的使用者。

> [!example] 使用場景
> - [社群管理員] 用它來 本地儲存和搜尋 Discord 伺服器的歷史記錄，因為這樣可以更快地找到重要訊息。
> - [開發者] 用它來 分析 Discord 伺服器的互動數據，因為這樣可以獲得更深入的見解而不受 API 限制。
> - [數據分析師] 用它來 進行本地 SQL 查詢，因為這樣可以靈活地處理和分析數據。

> [!warning] 注意事項
> 需要有效的 Discord 機器人令牌。

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
> 5. Ensure the bot can at leas

## 延伸閱讀

相關概念：[[Discord API]] · [[SQLite]] · [[本地數據存儲]]

[GitHub](https://github.com/steipete/discrawl)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，481 stars
