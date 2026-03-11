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
use_case: "將 Discord 伺服器資料鏡像到 SQLite，讓你能在本地搜尋伺服器歷史記錄。"
priority: medium
tags:
  - github
  - "category/開發工具"
  - "lang/go"
aliases:
  - "discrawl"
  - "steipete/discrawl"
  - "將 Discord 伺服器資料鏡像到 SQLite，讓你能在本地搜尋伺服器歷史記錄。"
---

# discrawl

**484** stars · **161** stars/天 · 建立 3 天前 · Go · MIT

`個人專案` `v0.1.0`

> [!summary] 一句話摘要
> 將 Discord 伺服器資料鏡像到 SQLite，讓你能在本地搜尋伺服器歷史記錄。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (161 stars/day)
> **適合** 需要在 Discord 上進行資料分析但不想依賴雲端服務的獨立開發者或小型團隊。
> **一句話重點** 這個專案讓 Discord 資料的本地化存取變得簡單，適合需要快速搜尋和分析的開發者。

> [!abstract] 核心創新
> 這個專案的創新在於提供一個本地化的 Discord 資料搜尋解決方案，避免了依賴 Discord 的搜尋功能。

## 專案簡介

這個工具 `discrawl` 透過 Discord 機器人令牌，將伺服器的頻道、成員和訊息歷史同步到本地 SQLite 資料庫，讓用戶能快速搜尋和查詢伺服器歷史。它使用 FTS5 建立全文搜尋索引，確保搜尋速度快且高效。與其他工具相比，`discrawl` 不需要用戶令牌，並且所有資料都保留在本地，增強了隱私性。使用者可以透過簡單的指令如 `sync` 和 `search` 來進行資料同步和查詢，並支援多伺服器的架構設計。實際使用中，該工具能夠在多達 32 個並行工作者下進行資料同步，並且能夠即時更新資料庫。這個專案目前處於 beta 階段，適合需要在 Discord 上進行資料分析的小型團隊或個人開發者。建議在需要本地化資料存取和搜尋的情況下使用，但如果你需要更複雜的分析或報告功能，可能需要尋找其他工具。

**技術棧**：`Go 1.26+`

## 重點功能

- 多伺服器支援 — 能夠同步多個 Discord 伺服器的資料，並保持簡單的單伺服器使用體驗。
- 全文搜尋 — 使用 FTS5 建立索引，快速搜尋訊息內容，支援多種搜尋條件。
- 即時更新 — 透過 Gateway 事件即時更新資料庫，保持資料的最新狀態。
- 簡單的指令操作 — 透過 `sync`、`search` 和 `tail` 等指令輕鬆管理和查詢資料。
- 本地資料存儲 — 所有資料都保存在本地 SQLite，增強隱私性和安全性。

## 快速開始

1. 初始化配置
```bash
bin/discrawl init
```
2. 執行健康檢查
```bash
bin/discrawl doctor
```
3. 全量同步資料
```bash
bin/discrawl sync --full
```

## 程式碼範例

```bash
bin/discrawl search "panic: nil pointer"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 steipete 在 Discord 開發社群中活躍，這個工具切中許多用戶對於資料隱私和本地搜尋的需求。隨著 Discord 使用者數量的增加，對於伺服器歷史資料的需求也隨之上升，這使得 `discrawl` 在這個時機點受到關注。

## 適合誰使用

**目標受眾**：需要在 Discord 上進行資料分析但不想依賴雲端服務的獨立開發者或小型團隊。

> [!example] 使用場景
> - Discord 伺服器管理員用它來將伺服器歷史資料同步到本地 SQLite，因為這樣可以快速查詢過去的訊息，避免依賴 Discord 的搜尋功能。
> - 資料分析師用它來分析伺服器的成員互動，因為可以透過 SQL 查詢輕鬆獲得所需的數據，提升工作效率。
> - 開發者用它來在本地環境中測試 Discord 機器人，因為可以快速重現歷史訊息，便於調試和開發。

## 架構分析

這是一個 CLI 工具，架構模式為單體應用。用戶輸入 → Discord API → SQLite 資料庫。核心技術決策包括使用 FTS5 進行快速搜尋和使用 Go 語言進行高效的資料處理。專案目錄結構中，關鍵檔案包括 `cmd/discrawl` 目錄下的主執行檔。

## 優缺點分析

> [!success] 優點
> - 提供本地化資料存取，增強隱私性。
> - 支援多伺服器資料同步，方便管理。
> - 使用簡單的 CLI 指令，適合快速上手。

> [!danger] 缺點
> - 僅支援 SQLite，對於大型資料集可能不夠靈活。
> - 需要正確的機器人權限設置，否則功能受限。
> - 目前功能相對簡單，缺乏進階的分析工具。

> [!warning] 注意事項
> - 需要 Discord 機器人令牌，無法使用用戶令牌。
> - 需要適當的機器人權限，否則同步和查詢可能會失敗。
> - 目前僅支援 SQLite 作為後端資料庫，無法直接使用其他資料庫。

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

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

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
