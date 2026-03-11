---
repo: jackwener/bilibili-cli
url: https://github.com/jackwener/bilibili-cli
owner: jackwener
owner_type: User
language: Python
license: Apache-2.0
description: "A CLI for Bilibili — browse videos, users, search, and feeds from the terminal"
homepage: ""
stars: 335
stars_per_day: 56
forks: 29
open_issues: 1
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "CLI 工具"
subcategory: "媒體工具"
release_tag: "v0.5.0"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓你在終端機中輕鬆瀏覽 Bilibili 的影片、用戶和動態。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-17"
engagement: "low"
verdict: ""
tags:
  - github
  - "category/cli_工具"
  - "lang/python"
  - easy_install
aliases:
  - "bilibili-cli"
  - "jackwener/bilibili-cli"
  - "讓你在終端機中輕鬆瀏覽 Bilibili 的影片、用戶和動態。"
---

# bilibili-cli

**335** stars · **56** stars/天 · 建立 6 天前 · Python · Apache-2.0

`v0.5.0` `easy-install`

> [!summary] 一句話摘要
> 讓你在終端機中輕鬆瀏覽 Bilibili 的影片、用戶和動態。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (56 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人
> **適合** 需要在終端機中快速訪問 Bilibili 內容的開發者和技術愛好者。
> **一句話重點** 這個專案讓終端機使用者能夠輕鬆訪問 Bilibili 的各種功能，提升了使用效率。

> [!abstract] 核心創新
> 提供了完整的 Bilibili 互動功能，並支持多種輸出格式。

## 專案簡介

這個 CLI 工具讓使用者能夠在終端機中直接訪問 Bilibili 的各種功能，包括影片瀏覽、用戶資料查詢和動態更新。使用者只需輸入相關指令，如 `bili video BV1ABcsztEcY` 來獲取影片詳細資訊，並可選擇附加參數如 `--subtitle` 來獲取字幕。它利用 Python 開發，並支持多種輸出格式，包括 YAML 和 JSON，方便用於腳本或其他應用程式中。與其他類似工具相比，bilibili-cli 提供了更為完整的用戶互動功能，如一鍵三連（like、coin、triple），這在其他工具中較少見。該工具的音頻提取功能也相當強大，能將影片音頻分割成指定長度的 WAV 檔案，這對於需要音頻資料的開發者來說非常實用。使用者需要進行身份驗證才能執行某些操作，這可以通過自動提取瀏覽器的 cookies 或使用 QR 碼登入來完成。這個專案目前處於穩定階段，值得小型團隊或個人開發者使用。對於需要快速查詢 Bilibili 資訊的場景，這個工具非常合適，但如果需要更複雜的數據分析，可能需要考慮其他選擇。

**技術棧**：`Python 3.7+`

## 重點功能

- 影片查詢 — 使用 `bili video <video_id>` 獲取影片詳細資訊，包括字幕和評論。
- 音頻提取 — 使用 `bili audio <video_id>` 下載音頻並分割成 WAV 檔案。
- 用戶資料查詢 — 使用 `bili user <user_id>` 獲取用戶資料和影片列表。
- 動態更新 — 使用 `bili feed` 獲取關注用戶的最新動態。
- 多格式輸出 — 使用 `--yaml` 或 `--json` 參數獲取結構化的輸出。

## 快速開始

1. 安裝工具
```bash
uv tool install bilibili-cli
```
2. 登入帳號
```bash
bili login
```
3. 查詢影片
```bash
bili video BV1ABcsztEcY
```

## 程式碼範例

bili video BV1ABcsztEcY --subtitle --json  # 獲取影片詳細資訊和字幕，以 JSON 格式輸出

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 jackwener 之前開發過多個 CLI 工具，如 twitter-cli 和 xiaohongshu-cli，這些專案在社群中已有一定的知名度。這個工具解決了使用者在終端機中無法方便訪問 Bilibili 的痛點，特別是對於開發者和技術愛好者來說。近期在 GitHub 上的討論和推廣使得這個工具獲得了更多的關注。隨著 CLI 工具的需求增加，這樣的專案在當前環境中變得越來越受歡迎。

## 適合誰使用

**目標受眾**：需要在終端機中快速訪問 Bilibili 內容的開發者和技術愛好者。

> [!example] 使用場景
> - 後端工程師用它來快速查詢 Bilibili 上的熱門影片，因為終端機操作比瀏覽器更高效且可自動化。
> - 內容創作者用它來提取影片音頻並分割成片段，因為這樣可以節省時間並提高工作效率。
> - 數據分析師用它來獲取用戶互動數據，因為 CLI 輸出的結構化數據更易於進行後續分析。

## 架構分析

這是一個 CLI 工具，使用單體架構。用戶輸入 → CLI 命令處理 → 輸出結果。核心技術決策是使用 Python 開發，並利用現有的 Bilibili API 進行數據獲取。專案目錄結構包括主要的 CLI 程式碼和相關的測試文件。

## 技術深入分析

這個 CLI 工具使用 Python 開發，並依賴於 Bilibili 的 API 來獲取數據。它的核心功能包括影片查詢、用戶資料檢索和動態更新，這些功能都可以通過簡單的命令來實現。該工具的音頻提取功能特別適合需要音頻資料的使用者，並且支持將音頻分割成指定長度的 WAV 檔案。由於使用了 Python，這使得開發和維護變得相對簡單，但在性能上可能不如某些編譯語言。隨著使用者數量的增加，可能會遇到 API 限制或穩定性問題，這需要持續關注和優化。整體而言，這個工具在功能上相當全面，但在使用過程中仍需注意身份驗證和 API 的穩定性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並包含了多個範例。安裝過程相對順暢，使用者只需簡單的命令即可完成安裝。文件中有中文和英文版本，對於不同語言的使用者都很友好。整體來說，新手可以在 30 分鐘內順利運行起來。

## 優缺點分析

> [!success] 優點
> - 簡單易用，適合快速查詢 Bilibili 資訊。
> - 支持音頻提取和分割，對於內容創作者非常友好。
> - 提供多種輸出格式，方便與其他工具集成。

> [!danger] 缺點
> - 需要登入才能使用某些功能，增加了使用門檻。
> - 目前僅支援中文和英文，對於其他語言使用者不友好。
> - 部分功能可能依賴於 Bilibili API 的穩定性。

> [!warning] 注意事項
> - 需要有效的 Bilibili 帳號進行身份驗證。
> - 某些功能（如互動）僅限於已登入用戶使用。
> - 目前僅支援中文和英文，其他語言的支持尚未實現。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 29 |
| Open Issues | 1 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-04 |
| Repo 大小 | 805 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 70 |
> | [@fkysly](https://github.com/fkysly) | 1 |

**最新版本**：v0.5.0 (2026-03-10)

## README 摘錄

> [!info]- 展開查看原文 README
> # bilibili-cli
> 
> [](https://github.com/jackwener/bilibili-cli/actions/workflows/ci.yml)
> [](https://pypi.org/project/bilibili-cli/)
> [](https://pypi.org/project/bilibili-cli/)
> [](./LICENSE)
> 
> A CLI for Bilibili — browse videos, users, favorites from the terminal 📺
> 
> [English](#features) | [中文](#功能特性)
> 
> ## More Projects
> 
> - [xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) — Xiaohongshu (小红书) CLI for notes and account workflows
> - [twitter-cli](https://github.com/jackwener/twitter-cli) — Twitter/X CLI tooling
> - [discord-cli](https://github.com/jackwener/discord-cli) — Discord CLI for local-first chat sync and search
> - [tg-cli](https://github.com/jackwener/tg-cli) — Telegram CLI for local-first sync, search, and export
> 
> ## Features
> 
> - 🎬 **Video** — details, subtitles, AI summary, comments, related videos
> - 🎵 **Audio** — extract audio and split into ASR-ready WAV segments
> - 👤 **User** — profile, video list, following list
> - 🔍 **Search** — search users or videos by keyword
> - 🔥 **Trending** — hot videos and site-wide ranking
> - 📰 **Feed** — dynamic timeline from your follows
> - 📂 **Favorites** — browse favorite folders, watch-later, and watch history
> - 👍 **Interactions** — like, coin, triple (一键三连)
> - 🔐 **Smart auth** — auto-extracts cookies from Chrome/Firefox, or QR code login
> - 📊 **Structured output** — major query commands support `--yaml` and `--json`
> - 🤖 **Agent-friendly defaults** — non-TTY stdout defaults to YAML; override with `OUTPUT=yaml|json|rich|auto`
> - 📦 **Stable envelope** — see [SCHEMA.md](./SCHEMA.md) for `ok/schema_version/data/error`
> - 🧱 **Normalized payloads** — command-layer output is normalized instead of leaking raw upstream SDK responses
> 
> ## Installation
> 
> ```bash
> # Recommended: uv tool (fast, isolated)
> uv tool install bilibili-cli
> 
> # Or: pipx
> pipx install bilibili-cli
> 
> # If you need audio extraction support
> uv tool install "bilibili-cli[audio]"
> # or
> pipx install "bilibili-cli[audio]"
> ```
> 
> Or from source:
> 
> ```bash
> git clone git@github.com:jackwener/bilibili-cli.git
> cd bilibili-cli
> uv sync
> ```
> 
> Run tests in the project environment:
> 
> ```bash
> uv sync --extra dev
> uv run pytest -q
> uv run ruff check .
> uv run python -m mypy bili_cli
> ```
> 
> If the project directory was moved and stale virtualenv wrappers remain, rerun:
> 
> ```bash
> uv sync --extra dev --reinstall
> ```
> 
> ## Usage
> 
> ```bash
> # Login & account
> bili status                    # Check login status
> bili status --yaml             # Structured auth status
> bili login                     # QR code login
> bili whoami                    # Detailed profile (level, coins, followers)
> bili whoami --yaml             # Structured profile
> 
> # Videos
> bili video BV1ABcsztEcY                 # Video details
> bili video BV1ABcsztEcY --subtitle      # With subtitles (plain text)
> bili video BV1ABcsztEcY --subtitle-timeline        # With timeline
> bili video BV1ABcsztEcY -st --subtitle-format srt  # Export as SRT
> bili video BV1ABcsztEcY --ai            # AI summary
> bili video BV1ABcsztEcY --comments      # Top comments
> bili video BV1ABcsztEcY --related       # Related videos
> bili video BV1ABcsztEcY --yaml          # Agent-friendly YAML
> bili video BV1ABcsztEcY --json          # Normalized JSON envelope
> bili video BV1ABcsztEcY --subtitle-timeline --comments --json  # Extras in one payload
> 
> # Users
> bili user 946974                        # UP profile
> bili user "影视飓风"                     # Search by name
> bili user-videos 946974 --max 20        # Video list
> 
> # Discovery
> bili hot                                # Trending videos (page 1)
> bili hot --page 2 --max 10              # Page 2, top 10
> bili rank                               # Site-wide ranking (3-day)
> bili rank --day 7 --max 30              # 7-day ranking, top 30
> bili search "关键词"                     # Search users
> bili search "关键词" --type video --max 5 # Search videos (top 5)
> bili search "关键词" --page 2            # Next page
> bili feed                               # Dynamic timeline
> bili feed --offset 1234567890        

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[API 設計]]

相關專案：[[jackwener--twitter-cli|jackwener/twitter-cli]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[knowsuchagency--mcp2cli|knowsuchagency/mcp2cli]] · [[op7418--Claude-to-IM-skill|op7418/Claude-to-IM-skill]] · [[sanbuphy--nanoAgent|sanbuphy/nanoAgent]] · [[steipete--discrawl|steipete/discrawl]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[zornade--visura-api|zornade/visura-api]]

[GitHub](https://github.com/jackwener/bilibili-cli)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "jackwener--bilibili-cli"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "jackwener--bilibili-cli"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，321 stars
