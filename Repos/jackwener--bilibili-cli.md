---
repo: jackwener/bilibili-cli
url: https://github.com/jackwener/bilibili-cli
owner: jackwener
owner_type: User
language: Python
license: Apache-2.0
description: "A CLI for Bilibili — browse videos, users, search, and feeds from the terminal"
homepage: ""
stars: 323
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
tags:
  - github
  - "category/cli_工具"
  - "lang/python"
  - easy_install
aliases:
  - "bilibili-cli"
  - "jackwener/bilibili-cli"
  - "讓你在終端機上輕鬆瀏覽 Bilibili 的影片、用戶和動態。"
---

# bilibili-cli

**323** stars · **54** stars/天 · 建立 6 天前 · Python · Apache-2.0

`v0.5.0` `easy-install`

> [!summary] 一句話摘要
> 讓你在終端機上輕鬆瀏覽 Bilibili 的影片、用戶和動態。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (54 stars/day)
> **適合** 希望在終端機上高效管理 Bilibili 內容的開發者和內容創作者。
> **一句話重點** 這個專案展示了如何將社交媒體的互動轉化為命令行操作，讓開發者能夠更高效地管理內容。

> [!abstract] 核心創新
> 提供了從終端機直接與 Bilibili 互動的完整功能，包括音訊提取和用戶動態管理。

## 專案簡介

這個 CLI 工具讓使用者能夠在終端機中直接瀏覽 Bilibili 的內容，包括影片詳情、用戶資料和動態更新。使用者可以透過簡單的指令來查詢影片、用戶或熱門影片，並且支持從 Chrome 或 Firefox 自動提取登入所需的 cookies。技術上，這個專案使用 Python 實作，並提供了多種輸出格式（如 YAML 和 JSON），使其適合與其他工具進行整合。與其他 Bilibili 相關工具相比，bilibili-cli 提供了更完整的功能，包括音訊提取和影片互動（如點讚和送幣）。使用者可以下載影片音訊並分割成 WAV 檔案，這在其他工具中較少見。這個工具的效能良好，對於需要快速查詢和互動的使用者來說非常實用，特別是在命令行環境中。這個專案目前處於穩定版本，適合個人或小型團隊使用。對於需要大量自動化操作的使用者，這個工具非常合適，但如果只是偶爾使用 Bilibili，可能會覺得 CLI 操作不夠直觀。

**技術棧**：`Python 3.7+` · `uv tool`

## 重點功能

- 影片查詢 — 使用 `bili video <video_id>` 獲取影片詳情，支持附加參數如 `--subtitle` 來獲取字幕。
- 音訊提取 — 使用 `bili audio <video_id>` 下載影片音訊並分割成 WAV 檔案，支持 `--segment <seconds>` 來設定分割長度。
- 用戶資料查詢 — 使用 `bili user <user_id>` 獲取用戶資料，支持查詢用戶的影片列表。
- 動態更新 — 使用 `bili feed` 獲取自己關注的用戶的動態，支持分頁查詢。
- 互動功能 — 使用 `bili like <video_id>` 來點讚影片，或使用 `bili triple <video_id>` 來進行一鍵三連互動。

## 快速開始

1. 安裝 bilibili-cli
```bash
uv tool install bilibili-cli
```
2. 登入 Bilibili 帳號
```bash
bili login
```
3. 查詢影片詳情
```bash
bili video BV1ABcsztEcY
```

## 程式碼範例

bili video BV1ABcsztEcY --ai --comments --json

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Jack Wener 是一位活躍的開源貢獻者，專注於 CLI 工具的開發，這個專案切中了許多使用者希望在終端機中高效使用 Bilibili 的需求。隨著越來越多的開發者和內容創作者尋求更靈活的工具來管理他們的社交媒體，這個專案的需求逐漸上升。

## 適合誰使用

**目標受眾**：希望在終端機上高效管理 Bilibili 內容的開發者和內容創作者。

> [!example] 使用場景
> - 影片編輯者用它來快速查詢熱門影片和用戶資料，因為可以直接在終端機中獲取所需資訊，節省了在網頁上搜尋的時間。
> - 音訊處理工程師用它來提取 Bilibili 影片的音訊並分割成 WAV 檔案，因為這樣可以方便地進行後續的音訊處理，而不需要額外的工具。
> - 社群經營者用它來監控自己關注的用戶動態，因為可以即時獲取更新，並且能夠快速互動（如點讚或發佈動態）。

## 架構分析

這是一個 CLI 工具，採用單體架構。用戶輸入 → CLI 指令處理 → 輸出結果。關鍵技術決策包括使用 Python 和 uv tool 來管理安裝和依賴。專案目錄結構中，主要的執行檔位於 `bili_cli` 資料夾內，並且有清晰的功能模組劃分。

## 優缺點分析

> [!success] 優點
> - 提供多種輸出格式，方便與其他工具整合。
> - 支持音訊提取功能，適合音訊處理需求。
> - 簡單的安裝和使用流程，降低了上手門檻。

> [!danger] 缺點
> - 目前僅支援部分 Bilibili 功能，未來可能需要擴展。
> - 對於不熟悉 CLI 的使用者來說，學習曲線可能較陡。
> - 在某些環境下可能會遇到依賴問題，需手動解決。

> [!warning] 注意事項
> - 僅支援 Python 3.7+
> - 需要安裝額外的音訊處理庫以支持音訊提取功能
> - 不支援 Windows 環境的完整功能
> - 目前僅支持 Bilibili 的部分功能，未來可能會擴展

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[jackwener--twitter-cli\|jackwener/twitter-cli]] | 這是一個針對 Twitter 的 CLI 工具，專注於社交媒體互動，而 bilibili-cli 更加專注於視頻內容的查詢和管理。 |
| [[jackwener--xiaohongshu-cli\|jackwener/xiaohongshu-cli]] | 這個工具針對小紅書的內容管理，與 bilibili-cli 的視頻查詢功能不同，主要針對筆記和帳戶工作流。 |

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

## 社群與生態

**社群活躍度**：社群活躍度中等，定期更新和維護。
**連結**：[文件](https://pypi.org/project/bilibili-cli/)

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

相關概念：[[CLI/TUI]] · [[API 設計]] · [[自動化測試]]

相關專案：[[jackwener--twitter-cli|jackwener/twitter-cli]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]]

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
