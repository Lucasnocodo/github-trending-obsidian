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
  - "將 Discord 伺服器資料鏡像到本地 SQLite，方便快速搜尋歷史紀錄。"
---

# discrawl

**484** stars · **161** stars/天 · 建立 3 天前 · Go · MIT

`個人專案` `v0.1.0`

> [!summary] 一句話摘要
> 將 Discord 伺服器資料鏡像到本地 SQLite，方便快速搜尋歷史紀錄。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (161 stars/day)
> **適合** 需要在 Discord 上進行本地資料分析的社群管理員和開發者。
> **一句話重點** 這個專案展示了如何安全地將 Discord 資料本地化，並提供強大的搜尋功能，讓使用者不再依賴 Discord 的搜尋系統。

> [!abstract] 核心創新
> 這個專案的創新在於它提供了一個安全且高效的方式來本地化 Discord 伺服器的資料，並且不依賴使用者 token。

## 專案簡介

這個工具 `discrawl` 透過 Discord bot token 將伺服器的頻道、成員及訊息歷史同步到本地 SQLite 資料庫，讓使用者可以不依賴 Discord 的搜尋功能進行快速查詢。它會發現可訪問的所有公會，並維護 FTS5 搜尋索引以加速本地文本搜尋，並且支持即時更新。技術上，`discrawl` 是用 Go 語言實作，並且支援並行處理以提升同步效能，預設的並行數量可根據 `GOMAXPROCS` 自動調整，範圍在 8 到 32 之間。與其他 Discord 資料抓取工具相比，`discrawl` 的獨特之處在於它不需要使用者 token，所有資料都保持在本地，這降低了安全風險。使用者可以透過 SQL 查詢進行即時分析，並且支援多公會的架構設計。對於需要長期保存 Discord 訊息的團隊來說，這是一個非常實用的工具，但需要注意的是，使用者必須確保 bot 擁有足夠的權限來讀取訊息歷史。這個專案目前處於 beta 階段，適合中小型團隊使用，尤其是需要本地化資料分析的情境。

**技術棧**：`Go 1.26+` · `SQLite`

## 重點功能

- 全自動同步 — 使用 `sync` 指令將 Discord 伺服器的頻道、成員及訊息歷史同步到 SQLite。
- 快速搜尋 — 支援 FTS5 索引，使用 `search` 指令可快速查詢歷史訊息。
- 即時更新 — 使用 `tail` 指令可實時監控 Discord Gateway 事件，並進行定期修復同步。
- 多公會支援 — 自動發現可訪問的所有公會，並可針對特定公會進行操作。
- 簡單的配置 — 透過 `init` 指令快速建立本地配置，並自動發現可訪問的公會。

## 快速開始

1. 建立本地配置並發現公會
```bash
bin/discrawl init
```
2. 檢查配置是否正確
```bash
bin/discrawl doctor
```
3. 全量同步 Discord 資料
```bash
bin/discrawl sync --full
```

## 程式碼範例

```bash
bin/discrawl search "panic: nil pointer"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 steipete 在 Discord 開發社群中活躍，這個工具切中許多使用者對於資料本地化的需求，特別是在 Discord 的搜尋功能不夠強大的情況下。隨著 Discord 使用者數量的增加，對於資料存取和分析的需求也隨之上升，因此這個專案在近期獲得了更多關注。

## 適合誰使用

**目標受眾**：需要在 Discord 上進行本地資料分析的社群管理員和開發者。

> [!example] 使用場景
> - 社群管理員用它來備份 Discord 伺服器的歷史訊息，因為這樣可以避免依賴 Discord 的搜尋功能，並且能夠快速查詢過去的對話紀錄。
> - 開發者用它來分析 Discord 伺服器的使用情況，因為它提供了 SQL 查詢的能力，能夠針對特定的訊息進行深入分析。
> - 數據分析師用它來生成 Discord 伺服器的互動報告，因為它能夠將訊息和成員互動數據整合到 SQLite 中，方便後續的資料視覺化。

## 架構分析

這是一個 CLI 工具，使用單體架構。用戶輸入 → `discrawl` 進行資料同步 → 輸出到 SQLite 資料庫。關鍵技術決策包括使用 FTS5 進行快速搜尋和支持多公會的設計。專案的目錄結構包含 `cmd/discrawl` 作為主要執行檔。

## 優缺點分析

> [!success] 優點
> - 資料完全本地化，安全性高。
> - 支援快速搜尋和即時更新，提升使用效率。
> - 簡單的配置流程，易於上手。

> [!danger] 缺點
> - 需要 Discord bot 的權限設定，初期配置較繁瑣。
> - 不支援使用者 token，限制了某些使用情境。
> - 目前仍在 beta 階段，可能存在不穩定性。

> [!warning] 注意事項
> - 需要 Discord bot token，無法使用使用者 token。
> - 需要 bot 擁有足夠的權限來讀取訊息歷史。
> - 僅支援 Go 1.26 以上版本。

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

## 社群與生態

**社群活躍度**：社群活躍度中等，持續有更新。

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

相關概念：[[CLI/TUI]] · [[資料視覺化]] · [[API 設計]]

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
