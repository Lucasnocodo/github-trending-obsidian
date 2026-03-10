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
  - "透過終端機瀏覽 Bilibili 的影片、用戶和動態。"
---

# bilibili-cli

**321** stars · **54** stars/天 · 建立 6 天前 · Python · Apache-2.0

`v0.5.0` `easy-install`

> [!summary] 一句話摘要
> 透過終端機瀏覽 Bilibili 的影片、用戶和動態。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (54 stars/day)
> **適合** 需要從終端機高效管理 Bilibili 賬戶的內容創作者和開發者。
> **一句話重點** 這個 CLI 工具讓 Bilibili 的操作變得更加高效，特別適合喜歡命令行的用戶。

> [!abstract] 核心創新
> bilibili-cli 提供了一個完整的命令行介面，讓用戶無需 API 金鑰即可使用 Bilibili 的功能。

## 專案簡介

bilibili-cli 是一個命令行工具，讓使用者能夠從終端機直接瀏覽 Bilibili 的影片、用戶資料和動態。使用者可以透過簡單的命令獲取影片詳情、下載音訊、查看熱門影片等。它支援從瀏覽器自動提取認證資訊，並提供結構化的輸出格式（如 YAML 和 JSON），方便用於腳本和自動化。與其他 Bilibili 相關工具相比，bilibili-cli 提供了更全面的功能，包括用戶互動（如點贊、收藏）和動態發布。這個工具適合需要高效管理 Bilibili 賬戶和內容的用戶，特別是對於開發者和自動化愛好者。使用者可以透過簡單的命令行操作來完成複雜的任務，提升工作效率。

**技術棧**：`Python`

## 重點功能

- 影片詳情查詢 — 使用 bili video [video_id] 獲取影片詳細資訊，包括字幕和評論。
- 用戶資料查詢 — 使用 bili user [user_id] 獲取用戶的詳細資料和影片列表。
- 音訊提取 — 使用 bili audio [video_id] 下載影片音訊並分割成 WAV 檔案。
- 動態發布 — 使用 bili dynamic-post [text] 發布文字動態，方便與粉絲互動。
- 結構化輸出 — 支援 --yaml 和 --json 參數，方便用於自動化腳本。

## 快速開始

1. 安裝 CLI 工具
```bash
uv tool install bilibili-cli
```
2. 檢查登入狀態
```bash
bili status
```
3. 查詢熱門影片
```bash
bili hot
```

## 程式碼範例

bili video BV1ABcsztEcY --subtitle

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 jackwener 是一位活躍的開發者，專注於 CLI 工具的開發，這個工具正好滿足了許多 Bilibili 用戶對於命令行操作的需求。隨著越來越多的用戶希望在終端機中進行操作，這個工具的推出正好切合了這一趨勢。

## 適合誰使用

**目標受眾**：需要從終端機高效管理 Bilibili 賬戶的內容創作者和開發者。

> [!example] 使用場景
> - 內容創作者用它來快速查看熱門影片和動態，因為這樣可以即時掌握趨勢，提升內容創作的靈感。
> - 開發者用它來自動化管理 Bilibili 賬戶，因為這樣可以節省大量手動操作的時間。
> - 學生用它來下載教學影片的音訊，因為這樣可以方便地進行重複學習。

## 架構分析

這是一個單體架構的 CLI 工具，使用者透過命令行介面輸入指令，系統則透過 Bilibili API 獲取資料並輸出。關鍵技術決策包括使用 Python 開發並整合了多個功能模組。專案目錄結構中，主要的執行檔案是 bili_cli.py。

## 優缺點分析

> [!success] 優點
> - 操作簡單，使用者可快速上手。
> - 功能全面，涵蓋了 Bilibili 的多種操作。
> - 支援結構化輸出，方便與其他工具整合。

> [!danger] 缺點
> - 某些功能可能受到 Bilibili API 的限制。
> - 對於不熟悉命令行的用戶來說，學習曲線可能較陡。
> - 需要持續更新以適應 Bilibili 的變動。

> [!warning] 注意事項
> - 需要有效的 Bilibili 賬戶進行操作。
> - 某些功能可能受到 Bilibili API 限制。
> - 不支援 Windows 系統的完整功能。
> - 可能需要額外配置以支持音訊提取功能。

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

**社群活躍度**：社群活躍度中等，持續有更新和貢獻。

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

相關概念：[[即時通訊]] · [[自動化測試]] · [[CLI/TUI]]

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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，321 stars
