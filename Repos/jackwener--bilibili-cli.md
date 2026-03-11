---
repo: jackwener/bilibili-cli
url: https://github.com/jackwener/bilibili-cli
owner: jackwener
owner_type: User
language: Python
license: Apache-2.0
description: "A CLI for Bilibili — browse videos, users, search, and feeds from the terminal"
homepage: ""
stars: 325
stars_per_day: 54
forks: 26
open_issues: 1
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "CLI 工具"
release_tag: "v0.5.0"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓你在終端機上瀏覽 Bilibili 的影片、用戶、搜尋和動態。"
priority: medium
tags:
  - github
  - "category/cli_工具"
  - "lang/python"
  - easy_install
aliases:
  - "bilibili-cli"
  - "jackwener/bilibili-cli"
  - "讓你在終端機上瀏覽 Bilibili 的影片、用戶、搜尋和動態。"
---

# bilibili-cli

**325** stars · **54** stars/天 · 建立 6 天前 · Python · Apache-2.0

`v0.5.0` `easy-install`

> [!summary] 一句話摘要
> 讓你在終端機上瀏覽 Bilibili 的影片、用戶、搜尋和動態。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (54 stars/day)
> **適合** 希望在命令行中高效管理 Bilibili 內容的開發者和內容創作者。
> **一句話重點** 這個 CLI 工具讓 Bilibili 的內容管理變得更加高效，特別是對於喜歡使用命令行的開發者。

> [!abstract] 核心創新
> 提供了豐富的終端機互動功能，讓用戶能夠在命令行中高效管理 Bilibili 內容。

## 專案簡介

這個 CLI 工具讓使用者可以在終端機上輕鬆瀏覽 Bilibili 的內容，包括影片詳情、用戶資料和熱門影片。用戶可以透過簡單的指令如 `bili video <video_id>` 獲取影片的詳細資訊，甚至可以提取字幕和 AI 摘要。它使用 Python 開發，並支持多種輸出格式（如 YAML 和 JSON），方便與其他工具整合。與其他 Bilibili 客戶端相比，它的互動功能更為豐富，支持一鍵三連等操作，並且提供了動態時間線功能。使用者可以透過 `bili feed` 獲取自己關注的動態，這在其他工具中較少見。對於音訊提取，使用者可以使用 `bili audio <video_id>` 指令來下載音訊並分段，這對於需要音訊資料的開發者來說非常實用。這個專案目前處於穩定版本，適合中小型團隊使用。對於需要快速獲取 Bilibili 內容的開發者來說，這個工具非常值得一試，但如果你需要更複雜的 UI，可能需要考慮其他解決方案。

**技術棧**：`Python`

## 重點功能

- 影片詳情 — 使用 `bili video <video_id>` 獲取影片詳細資訊，包括字幕和 AI 摘要。
- 音訊提取 — 使用 `bili audio <video_id>` 下載音訊並分段，支持自定義輸出目錄。
- 用戶資料 — 使用 `bili user <user_id>` 獲取用戶的詳細資料和視頻列表。
- 熱門影片 — 使用 `bili hot` 獲取當前熱門影片，支持分頁查詢。
- 動態時間線 — 使用 `bili feed` 獲取自己關注的動態，並支持發佈和刪除動態。

## 快速開始

1. 安裝 bilibili-cli
```bash
uv tool install bilibili-cli
```
2. 登入 Bilibili 帳號
```bash
bili login
```
3. 獲取影片詳情
```bash
bili video BV1ABcsztEcY
```

## 程式碼範例

```bash
bili video BV1ABcsztEcY --subtitle --ai
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 jackwener 是一位活躍的開源貢獻者，專注於 CLI 工具的開發，這個專案切中了對於 Bilibili 用戶在終端機上操作的需求。隨著 CLI 工具的流行，越來越多的開發者希望能在命令行中高效地管理和瀏覽內容，這使得這個專案在近期受到關注。

## 適合誰使用

**目標受眾**：希望在命令行中高效管理 Bilibili 內容的開發者和內容創作者。

> [!example] 使用場景
> - 後端工程師用它來自動化下載 Bilibili 影片的音訊，因為可以快速提取並分段音訊，節省了手動處理的時間。
> - 數據分析師用它來收集 Bilibili 上的熱門影片數據，因為可以透過 `bili hot` 指令快速獲取當前熱門影片，並進行分析。
> - 內容創作者用它來管理自己的 Bilibili 動態，因為可以直接在終端機上發佈和刪除動態，提升了工作效率。

## 優缺點分析

> [!success] 優點
> - 提供多種功能，包括影片詳情、用戶資料和音訊提取，功能全面。
> - 支持多種輸出格式，方便與其他工具整合。
> - 簡單易用的命令行介面，適合快速操作。

> [!danger] 缺點
> - 對於不熟悉命令行的用戶可能有一定的學習曲線。
> - 部分功能依賴於 Bilibili 的 API，可能會受到限制。
> - 音訊提取功能可能無法對所有影片正常運作。

> [!warning] 注意事項
> - 僅支援 Bilibili 的部分功能，可能無法涵蓋所有用戶需求。
> - 需要安裝 Python 環境，對於不熟悉命令行的用戶可能有一定的學習曲線。
> - 音訊提取功能可能對於某些影片無法正常運作，依賴於 Bilibili 的 API 支持。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 26 |
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

相關概念：[[CLI/TUI]] · [[API 設計]]

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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，321 stars
