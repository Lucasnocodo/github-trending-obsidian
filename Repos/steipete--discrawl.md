---
repo: steipete/discrawl
url: https://github.com/steipete/discrawl
owner: steipete
owner_type: User
language: Go
license: MIT
description: "cli for discord with sqlite backend"
homepage: ""
stars: 490
stars_per_day: 163
forks: 41
open_issues: 10
created: 2026-03-07
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "CLI 工具"
subcategory: "資料管理"
release_tag: "v0.1.0"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "將 Discord 伺服器資料鏡像到 SQLite，讓你可以在本地搜尋和查詢伺服器歷史紀錄。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:490"
tags:
  - github
  - "category/cli_工具"
  - "lang/go"
aliases:
  - "discrawl"
  - "steipete/discrawl"
  - "將 Discord 伺服器資料鏡像到 SQLite，讓你可以在本地搜尋和查詢伺服器歷史紀錄。"
---

# discrawl

**486** stars · **162** stars/天 · 建立 3 天前 · Go · MIT

`個人專案` `v0.1.0`

> [!summary] 一句話摘要
> 將 Discord 伺服器資料鏡像到 SQLite，讓你可以在本地搜尋和查詢伺服器歷史紀錄。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (162 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險)
> **適合** 需要將 Discord 伺服器資料本地化以便進行深入分析的開發者或社群管理者。
> **一句話重點** 這個工具讓 Discord 資料的本地化管理變得簡單且安全，適合需要深入分析的用戶。

> [!abstract] 核心創新
> 提供了一個安全的本地化 Discord 資料管理方案，無需用戶令牌。

## 專案簡介

這個工具將 Discord 的伺服器資料鏡像到本地的 SQLite 資料庫，讓使用者可以在不依賴 Discord 搜尋的情況下，搜尋、檢查和查詢伺服器歷史紀錄。使用者需要提供一個 Discord 機器人令牌，然後 `discrawl` 會發現所有可存取的公會，並同步頻道、成員及消息歷史到 SQLite 中。它還會維護 FTS5 搜尋索引，以便快速進行本地文字搜尋，並能即時更新資料。與其他類似工具相比，`discrawl` 不需要用戶令牌，所有資料都保留在本地，增加了安全性。這個工具的設計考量了多公會的需求，並提供簡單的單公會使用體驗。使用者可以透過 SQL 查詢進行即時分析，並使用 `sync` 和 `tail` 指令來獲取最新的伺服器資料。整體來說，這是一個適合需要本地化 Discord 資料管理的開發者或社群管理者的工具。

**技術棧**：`Go 1.26+` · `SQLite`

## 重點功能

- 資料鏡像 — 將 Discord 公會的頻道、成員和消息歷史同步到本地 SQLite。
- 快速搜尋 — 使用 FTS5 索引進行快速的本地文本搜尋。
- 即時更新 — 透過 Gateway 事件即時更新資料，保持資料的最新狀態。
- 多公會支援 — 設計上支援多個公會的資料管理，並提供簡單的單公會使用體驗。
- SQL 查詢 — 提供讀取權限的 SQL 接口，方便用戶進行即時分析。

## 快速開始

1. 克隆專案並編譯
```bash
git clone https://github.com/steipete/discrawl.git && cd discrawl && go build -o bin/discrawl ./cmd/discrawl
```
2. 初始化配置
```bash
bin/discrawl init --from-openclaw ~/.openclaw/openclaw.json
```
2. 檢查設定
```bash
bin/discrawl doctor
```
3. 全量同步資料
```bash
bin/discrawl sync --full
```
4. 搜尋特定消息
```bash
bin/discrawl search "panic: nil pointer"
```
5. 即時更新資料
```bash
bin/discrawl tail
```

## 程式碼範例

```bash
# 將 Discord 公會資料同步到本地
bin/discrawl sync --full

# 搜尋特定的消息
bin/discrawl search "panic: nil pointer"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 steipete 之前有開發過其他 Discord 相關的工具，這次的 `discrawl` 專注於將 Discord 資料本地化，解決了用戶無法有效搜尋伺服器歷史的痛點。最近有關於 Discord 資料隱私的討論也讓這個工具受到關注。這個工具的推出正好符合了開發者對於資料安全和本地化管理的需求。

## 適合誰使用

**目標受眾**：需要將 Discord 伺服器資料本地化以便進行深入分析的開發者或社群管理者。

> [!example] 使用場景
> - 社群管理者用它來將 Discord 伺服器的歷史消息同步到本地資料庫，因為這樣可以快速搜尋過去的對話，而不必依賴 Discord 的搜尋功能。
> - 開發者用它來分析 Discord 伺服器的成員互動，因為可以使用 SQL 查詢來獲取具體的數據，這比手動查詢更高效。
> - 數據分析師用它來檢視 Discord 伺服器的活動趨勢，因為資料都保存在本地，能夠進行更深入的數據分析而不需要擔心資料隱私問題。

## 架構分析

這是一個 CLI 工具，主要架構為單體應用。用戶輸入 → `discrawl` 處理 Discord 資料 → 輸出到 SQLite 資料庫。關鍵技術決策包括使用 Go 語言來實現高效的資料處理和即時更新。專案目錄結構中包含主要的執行檔和配置檔案，方便用戶設定和使用。

## 技術深入分析

這個專案使用 Go 語言來實現高效的資料處理，並利用 SQLite 作為後端資料庫，這樣的選擇使得資料的存取速度相對較快。它能夠處理多達數十萬條消息的資料，並且透過 FTS5 索引來加速搜尋過程。設計上考量了多公會的需求，讓使用者能夠輕鬆管理多個伺服器的資料。選擇 Go 語言的好處在於其高效能和簡單的佈署流程，但可能會在某些複雜查詢上遇到性能瓶頸。隨著資料量的增加，如何維持搜尋效能將是未來需要解決的問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導和範例，安裝過程相對順暢，但需要用戶具備一定的 Discord 機器人設定知識。整體上，花 30 分鐘內能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 本地化資料管理，提升資料安全性。
> - 快速的本地搜尋功能，無需依賴 Discord 的搜尋。
> - 支援即時更新，保持資料的最新狀態。

> [!danger] 缺點
> - 需要正確的機器人權限，設定較為繁瑣。
> - 僅支援 SQLite，對於大型資料可能不夠靈活。
> - 對於不熟悉 SQL 的用戶，查詢可能有一定的學習曲線。

> [!warning] 注意事項
> - 需要有效的 Discord 機器人令牌，無法使用用戶令牌。
> - 需要適當的機器人權限，否則資料同步可能不完整。
> - 目前僅支援 SQLite 作為後端資料庫，無法直接使用其他資料庫。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具專注於 Discord 資料的同步，但不具備本地搜尋功能，適合需要簡單同步的用戶。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 這個工具主要用於特定領域的 Discord 資料管理，功能較為專一，不如 `discrawl` 通用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 |
| --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於 Discord 資料同步，不具備本地搜尋功能。 | 如果只需要簡單的資料同步而不需要本地化搜尋功能。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 針對特定領域的 Discord 資料管理，功能較為專一。 | 如果需要針對醫療領域的 Discord 資料進行管理和分析。 |

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

**社群活躍度**：社群活躍度中等，有定期更新和維護。
**連結**：[文件](https://github.com/steipete/discrawl#readme)

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

相關概念：[[CLI/TUI]] · [[資料視覺化]] · [[自動化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]]

[GitHub](https://github.com/steipete/discrawl)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "steipete--discrawl"
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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，490 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，481 stars
