---
repo: jackwener/bilibili-cli
url: https://github.com/jackwener/bilibili-cli
owner: jackwener
owner_type: User
language: Python
license: Apache-2.0
description: "A CLI for Bilibili — browse videos, users, search, and feeds from the terminal"
homepage: ""
stars: 321
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
  - "讓使用者能夠在終端中瀏覽 Bilibili 的影片和用戶。"
---

# bilibili-cli

**321** stars · **54** stars/天 · 建立 6 天前 · Python · Apache-2.0

`v0.5.0` `easy-install`

> [!summary] 一句話摘要
> 讓使用者能夠在終端中瀏覽 Bilibili 的影片和用戶。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (54 stars/day)
> **適合** 需要在終端中操作 Bilibili 的開發者和重度用戶。
> **一句話重點** 這個工具讓 Bilibili 的內容操作變得更加高效，特別適合開發者和重度用戶。

> [!abstract] 核心創新
> bilibili-cli 提供了全面的命令列功能，讓用戶能夠在終端中高效操作 Bilibili。

## 專案簡介

bilibili-cli 是一個命令列工具，讓使用者能夠在終端中瀏覽 Bilibili 的影片、用戶及動態。使用者可以透過簡單的指令來查詢影片詳情、用戶資料、熱門影片及個人收藏等。這個工具使用 Python 開發，並支援從 Chrome 或 Firefox 自動提取登錄憑證，讓使用者無需手動輸入帳號密碼。與其他類似工具相比，bilibili-cli 提供了更全面的功能，包括影片的 AI 摘要、音訊提取和結構化輸出格式（如 YAML 和 JSON），這使得它更適合開發者和自動化腳本使用。實際使用中，該工具能夠快速獲取 Bilibili 上的熱門內容，但對於需要圖形介面的使用者來說可能不太友好。整體來看，這是一個穩定的工具，適合需要在終端中操作 Bilibili 的用戶。

**技術棧**：`Python`

## 重點功能

- 影片查詢 — 使用 `bili video <video_id>` 獲取影片詳情、字幕和 AI 摘要。
- 用戶資料 — 使用 `bili user <user_id>` 獲取用戶的詳細資料和影片列表。
- 熱門影片 — 使用 `bili hot` 獲取當前熱門影片，支持分頁查詢。
- 音訊提取 — 使用 `bili audio <video_id>` 將影片音訊提取為 WAV 格式。
- 結構化輸出 — 支持 `--yaml` 和 `--json` 格式輸出，方便與其他工具整合。

## 快速開始

1. 安裝 bilibili-cli
```bash
pipx install bilibili-cli
```
2. 檢查登錄狀態
```bash
bili status
```
3. 查詢熱門影片
```bash
bili hot
```

## 程式碼範例

bili video BV1ABcsztEcY --ai

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 jackwener 在命令列工具開發方面有豐富經驗，並且隨著 Bilibili 用戶基數的增長，對於 CLI 工具的需求也隨之增加。這個專案在社群中獲得了良好的反響，特別是在開發者圈子中。

## 適合誰使用

**目標受眾**：需要在終端中操作 Bilibili 的開發者和重度用戶。

> [!example] 使用場景
> - 學生用它來快速查找和下載 Bilibili 上的學習資源，因為這樣可以節省時間並提高效率。
> - 內容創作者用它來分析熱門影片的趨勢，因為這樣可以幫助他們制定更好的內容策略。
> - 開發者用它來自動化 Bilibili 內容的檢索和分析，因為這樣可以更方便地整合到其他應用中。

## 優缺點分析

> [!success] 優點
> - 功能全面，支持多種操作如查詢、下載和互動。
> - 支援結構化輸出，方便與其他工具整合。
> - 自動提取登錄憑證，使用方便。

> [!danger] 缺點
> - 對於不熟悉 CLI 的用戶來說，使用門檻較高。
> - 某些功能可能依賴於 Bilibili 的 API 穩定性。
> - 需要定期更新以保持與 Bilibili 的兼容性。

> [!warning] 注意事項
> - 需要安裝 Python 和相關依賴。
> - 對於不熟悉 CLI 的用戶來說，學習曲線較陡。
> - 某些功能可能受到 Bilibili API 限制。

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

相關概念：[[CLI/TUI]] · [[自動化測試]]

[GitHub](https://github.com/jackwener/bilibili-cli)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "jackwener--bilibili-cli"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，321 stars
