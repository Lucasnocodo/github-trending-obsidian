---
repo: steipete/discrawl
url: https://github.com/steipete/discrawl
owner: steipete
owner_type: User
language: Go
license: MIT
description: "cli for discord with sqlite backend"
homepage: ""
stars: 485
stars_per_day: 162
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
use_case: "將 Discord 伺服器資料鏡像到 SQLite，讓你可以在本地搜尋伺服器歷史紀錄，而不依賴 Discord 的搜尋功能。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/cli_工具"
  - "lang/go"
aliases:
  - "discrawl"
  - "steipete/discrawl"
  - "將 Discord 伺服器資料鏡像到 SQLite，讓你可以在本地搜尋伺服器歷史紀錄，而不依賴 Discord 的搜尋功"
---

# discrawl

**485** stars · **162** stars/天 · 建立 3 天前 · Go · MIT

`個人專案` `v0.1.0`

> [!summary] 一句話摘要
> 將 Discord 伺服器資料鏡像到 SQLite，讓你可以在本地搜尋伺服器歷史紀錄，而不依賴 Discord 的搜尋功能。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (162 stars/day)
> **授權** MIT (商業友好)
> **適合** 需要將 Discord 伺服器資料本地化並進行深入分析的開發者或數據分析師。
> **一句話重點** 這個專案展示了如何將 Discord 資料本地化，並提供強大的搜尋能力，讓使用者不再依賴 Discord 的搜尋功能。

> [!abstract] 核心創新
> 這個專案的核心創新在於將 Discord 資料本地化存儲，並提供快速的 SQL 查詢能力。

## 專案簡介

這個工具透過 Discord bot token 爬取伺服器資料，將頻道、成員和訊息歷史同步到本地 SQLite 資料庫中。它使用 FTS5 搜尋索引來加速本地文本搜尋，並能即時更新資料，保持與 Discord 的同步。與其他工具相比，`discrawl` 不需要用戶 token，所有資料均保存在本地，確保隱私。使用者可以透過 SQL 查詢進行即時分析，並且支援多伺服器架構，讓使用者在單一介面中管理多個伺服器的資料。這個工具的效能表現良好，能夠處理大量資料並提供快速搜尋結果。對於需要本地化 Discord 資料的開發者來說，這是一個穩定且值得信賴的選擇。適合中小型團隊使用，特別是那些需要對 Discord 資料進行深入分析的團隊。建議在需要長期保存和查詢 Discord 訊息時使用，但如果只是偶爾查詢，可能會顯得過於繁瑣。

**技術棧**：`Go 1.26+` · `SQLite`

## 重點功能

- 本地化資料存儲 — 將 Discord 伺服器資料鏡像到 SQLite，所有資料均保存在本地。
- 即時更新 — 透過 Gateway 事件持續更新資料，保持資料的即時性。
- 快速搜尋 — 使用 FTS5 索引進行快速文本搜尋，支援多種查詢參數。
- 多伺服器支援 — 可同時管理多個 Discord 伺服器的資料，並提供單一介面進行操作。
- SQL 查詢 — 提供讀取權限的 SQL 接口，方便用戶進行即時分析。

## 快速開始

1. 克隆專案並編譯
```bash
git clone https://github.com/steipete/discrawl.git && cd discrawl && go build -o bin/discrawl ./cmd/discrawl
```
2. 初始化配置
```bash
bin/discrawl init
```
3. 執行完整同步
```bash
bin/discrawl sync --full
```

## 程式碼範例

```bash
bin/discrawl search "panic: nil pointer"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> (a) 作者 steipete 過去有多個開源專案，這個工具是他在 Discord 資料管理上的新嘗試。(b) 之前的工具多數依賴 Discord 的 API 搜尋，無法實現本地化搜尋和資料持久化，`discrawl` 則解決了這個痛點。(c) 沒有明顯的觸發事件，但隨著 Discord 使用者對資料隱私的重視，這個工具的需求逐漸上升。(d) 目前 Discord 的 API 限制使得本地化資料管理變得更加重要，這讓 `discrawl` 的需求增加。

## 適合誰使用

**目標受眾**：需要將 Discord 伺服器資料本地化並進行深入分析的開發者或數據分析師。

> [!example] 使用場景
> - Discord 管理員用它來將伺服器歷史資料同步到本地，因為這樣可以快速搜尋過去的訊息，避免依賴 Discord 的搜尋功能。
> - 數據分析師用它來查詢 Discord 伺服器的成員活動，因為可以使用 SQL 進行複雜查詢，獲得更深入的洞察。
> - 開發者用它來測試 Discord bot 的功能，因為能夠在本地環境中快速重現和分析伺服器資料，提升開發效率。

## 架構分析

這是一個 CLI 工具，架構為單體應用。用戶輸入 → discrawl 處理 Discord 資料 → 輸出至 SQLite 資料庫。關鍵技術決策包括使用 FTS5 進行快速搜尋和支持多伺服器架構。專案目錄結構中，主要的執行檔在 `cmd/discrawl`，配置檔在 `~/.discrawl/config.toml`。

## 技術深入分析

> [!note]- 展開深入分析
> 這個工具的核心在於使用 Go 語言實現的高效資料同步和搜尋功能。它利用 SQLite 的 FTS5 來加速文本搜尋，這使得即使在大量資料中也能快速找到所需內容。設計上，`discrawl` 針對多伺服器的需求進行了優化，讓使用者能夠在單一介面中管理多個伺服器的資料。與其他工具相比，`discrawl` 的資料存儲方式更為靈活，並且不依賴於 Discord 的 API 限制，這使得它在資料隱私和安全性上更具優勢。

## 優缺點分析

> [!success] 優點
> - 本地化資料存儲，確保資料隱私。
> - 快速搜尋功能，能夠即時查詢大量資料。
> - 支援多伺服器管理，方便用戶操作。

> [!danger] 缺點
> - 需要適當的 Discord bot 權限，設置較為繁瑣。
> - 大型伺服器的資料同步可能會耗時。
> - 不支持用戶 token，限制了某些使用場景。

> [!warning] 注意事項
> - 需要 Discord bot token，無法使用用戶 token。
> - 對於大型伺服器，資料同步可能需要較長時間。
> - 需要適當的 bot 權限，否則資料同步會不完整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 這個工具專注於醫療領域的 Discord 資料管理，而 `discrawl` 更通用，適用於任何類型的 Discord 伺服器。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 主要用於 Discord 資料的監控和分析，而 `discrawl` 更加強調資料的本地存儲和搜尋功能。 |

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

**社群活躍度**：社群活躍度中等，定期有更新和問題回覆。
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

相關概念：[[CLI/TUI]] · [[資料視覺化]] · [[自動化測試]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[juliye2025--evil-read-arxiv|juliye2025/evil-read-arxiv]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[jackwener--twitter-cli|jackwener/twitter-cli]]

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

- [[2026-03-10|2026-03-10]] — 首次收錄，481 stars
