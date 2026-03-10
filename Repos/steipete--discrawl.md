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
month: "2026-03"
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
  - "將 Discord 伺服器資料鏡像到 SQLite，讓你可以離線搜尋和查詢歷史紀錄。"
---

# discrawl

**484** stars · **161** stars/天 · 建立 3 天前 · Go · MIT

`個人專案` `v0.1.0`

> [!summary] 一句話摘要
> 將 Discord 伺服器資料鏡像到 SQLite，讓你可以離線搜尋和查詢歷史紀錄。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (161 stars/day)
> **適合** 需要將 Discord 伺服器歷史訊息本地化存儲並進行查詢的社群管理員或開發者。
> **一句話重點** 這個專案展示了如何安全地將 Discord 數據本地化，並提供強大的搜尋功能，對於需要長期保存訊息的用戶來說非常有價值。

> [!abstract] 核心創新
> 這個專案提供了一個安全的方式來將 Discord 數據本地化存儲，並且不依賴用戶令牌。

## 專案簡介

這個工具 `discrawl` 透過 Discord 機器人令牌將伺服器的資料同步到本地 SQLite 資料庫，讓用戶可以快速搜尋和檢查伺服器的歷史紀錄。它會發現可訪問的公會，並同步頻道、成員及消息歷史，並使用 FTS5 索引來加速搜尋。技術上，它是用 Go 語言實作，並支援並行處理來提高同步效率，最大並行數可設定為 32。與其他 Discord 數據抓取工具相比，`discrawl` 不需要用戶令牌，確保數據安全性，並且提供即時更新功能。使用者可以透過 SQL 查詢進行即時分析，並且支援多公會架構，對於單公會的使用者也有簡單的預設體驗。實際使用中，對於需要長期保存 Discord 訊息的團隊來說，這是一個非常實用的工具，但需要注意的是，必須有適當的機器人權限才能完整抓取數據。這個專案目前在 alpha 階段，適合小型團隊或開發者進行測試和使用。建議在需要長期保存和查詢 Discord 訊息時使用，但如果只需短期查詢，則可能不需要這麼複雜的工具。

**技術棧**：`Go 1.26+` · `SQLite`

## 重點功能

- 多公會資料同步 — 支援將多個 Discord 公會的資料同步到本地 SQLite，方便管理和查詢。
- 即時更新 — 透過 Gateway 事件實現即時資料更新，確保資料庫內容即時反映 Discord 上的變化。
- 全文檢索 — 使用 FTS5 索引技術，提供快速的文字搜尋功能，支援多種搜尋條件。
- 簡單的 SQL 查詢 — 提供讀取權限的 SQL 接口，方便用戶進行即時分析。
- 靈活的同步選項 — 支援按頻道、成員或時間範圍進行同步，滿足不同需求。

## 快速開始

1. 初始化配置並發現可訪問的公會
```bash
bin/discrawl init
```
2. 執行完整同步
```bash
bin/discrawl sync --full
```
3. 執行搜尋
```bash
bin/discrawl search "panic: nil pointer"
```

## 程式碼範例

```bash
bin/discrawl sync --guild 123456789012345678
bin/discrawl search --channel billing --author steipete --limit 50 "invoice"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 steipete 在 Discord 開發社群中活躍，這個專案解決了許多用戶對於 Discord 訊息搜尋的需求，特別是在 Discord 自身搜尋功能不夠強大的情況下。隨著 Discord 使用者數量的增加，對於本地化數據存取的需求也隨之上升，因此這個工具在近期受到關注。

## 適合誰使用

**目標受眾**：需要將 Discord 伺服器歷史訊息本地化存儲並進行查詢的社群管理員或開發者。

> [!example] 使用場景
> - 社群管理員用它來將 Discord 伺服器的歷史訊息同步到本地資料庫，因為這樣可以更快速地查詢過去的討論，而不必依賴 Discord 的搜尋功能。
> - 開發者用它來分析 Discord 伺服器的訊息流，因為可以使用 SQL 查詢進行深入分析，這樣比手動搜尋要高效得多。
> - 數據科學家用它來提取 Discord 伺服器的互動數據，因為可以將資料存入 SQLite 進行後續的數據分析和可視化。

## 架構分析

這是一個 CLI 工具，主要架構為單體應用。用戶輸入 → discrawl 進行資料同步 → SQLite 資料庫存儲資料。關鍵技術決策包括使用 Go 語言和 SQLite 作為後端資料庫，並透過 FTS5 提供快速搜尋功能。專案目錄結構包含主要的執行檔 `cmd/discrawl` 和配置檔 `config.toml`。

## 優缺點分析

> [!success] 優點
> - 提供即時更新功能，確保資料庫內容與 Discord 伺服器同步。
> - 支援多公會資料管理，方便大型社群使用。
> - 使用 FTS5 索引技術，提供快速的搜尋體驗。

> [!danger] 缺點
> - 需要較高的權限設定，對於新手可能有一定的學習曲線。
> - 目前在 alpha 階段，穩定性和功能可能不夠完善。
> - 需要手動設定 Discord 機器人，對於不熟悉的用戶來說可能較為繁瑣。

> [!warning] 注意事項
> - 需要有效的 Discord 機器人令牌，無法使用用戶令牌。
> - 必須擁有適當的機器人權限才能完整抓取數據。
> - 目前僅支援 Go 1.26 以上版本，舊版本無法使用。
> - 在 alpha 階段，API 可能會有變動，需注意更新。

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
> Build from source:
> 
> ```bash
> git clone https://github.com/steipete/discrawl.git
> cd discrawl
> go build -o bin/discrawl ./cmd/discrawl
> ./bin/discrawl --version
> ```
> 
> Homebrew tap:
> 
> ```bash
> brew tap steipete/tap
> brew install steipete/tap/discrawl
> ```
> 
> ## Quick Start
> 
> Reuse an existing OpenClaw Discord bot config:
> 
> ```bash
> bin/discrawl init --from-openclaw ~/.openclaw/openclaw.json
> bin/discrawl doctor
> bin/discrawl sync --full
> bin/discrawl search "panic: nil pointer"
> bin/discrawl tail
> ```
> 
> Env-only setup:
> 
> ```bash
> export DISCORD_BOT_TOKEN="..."
> bin/discrawl doctor
> bin/discrawl init
> bin/discrawl sync --full
> ```
> 
> `init` discovers accessible guilds and writes `~/.discrawl/config.toml`. If exactly one guild is available, that guild becomes the default automatically.
> 
> `doctor` is the fastest sanity check:
> 
> - confirms config can be loaded
> - shows where the token was resolved from
> - verifies bot auth
> - shows how many guilds the bot can access
> - verifies DB + FTS wiring
> 
> ## Commands
> 
> ### `init`
> 
> Creates the local config and discovers accessible guilds.
> 
> ```bash
> bin/discrawl init
> bin/discrawl init --from-openclaw ~/.openclaw/openclaw.json
> bin/discrawl init --guild 123456789012345678
> bin/discrawl init --db ~/data/discrawl.db
> ```
> 
> ### `sync`
> 
> Backfills guild state into SQLite.
> 
> ```bash
> bin/discrawl sync --full
> bin/discrawl sync --guild 123456789012345678
> bin/discrawl sync --guilds 123,456 --concurrency 8
> bin/discrawl sync --channels 111,222 --since 2026-03-01T00:00:00Z
> ```
> 
> `sync` already uses 

## 延伸閱讀

相關概念：[[API 設計]] · [[資料視覺化]] · [[機器學習]]

[GitHub](https://github.com/steipete/discrawl)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "steipete--discrawl"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "steipete--discrawl"
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

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，481 stars
