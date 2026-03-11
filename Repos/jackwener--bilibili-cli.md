---
repo: jackwener/bilibili-cli
url: https://github.com/jackwener/bilibili-cli
owner: jackwener
owner_type: User
language: Python
license: Apache-2.0
description: "A CLI for Bilibili — browse videos, users, search, and feeds from the terminal"
homepage: ""
stars: 333
stars_per_day: 56
forks: 26
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
use_case: "讓你在終端機上輕鬆瀏覽 Bilibili 的影片、用戶和動態。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
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

**333** stars · **56** stars/天 · 建立 6 天前 · Python · Apache-2.0

`v0.5.0` `easy-install`

> [!summary] 一句話摘要
> 讓你在終端機上輕鬆瀏覽 Bilibili 的影片、用戶和動態。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (56 stars/day)
> **授權** Apache-2.0 (商業友好)
> **適合** 需要在終端機上高效操作 Bilibili 的開發者和內容創作者。
> **一句話重點** 這個 CLI 工具讓 Bilibili 的操作變得前所未有的簡單，特別適合開發者和內容創作者。

> [!abstract] 核心創新
> 提供了完整的 Bilibili 互動功能，並支持多種輸出格式，適合開發者和自動化使用。

## 專案簡介

這個 CLI 工具讓用戶可以在終端機中直接訪問 Bilibili 的各種功能，包括影片詳細資訊、用戶資料和動態時間線。用戶可以透過簡單的指令，如 `bili video BV1ABcsztEcY` 來獲取影片的詳細資訊，並選擇附加選項如字幕或 AI 摘要。技術上，它使用 Python 實作，並支持多種輸出格式（YAML、JSON），適合自動化腳本和開發者使用。相比其他 Bilibili 客戶端，這個工具提供了更豐富的交互功能，如一鍵三連（like、coin、follow），並且能夠提取音訊並分割成 WAV 檔案。使用者可以透過 QR 碼或自動提取瀏覽器 cookies 進行登錄，這在其他工具中並不常見。整體而言，這個專案的穩定性良好，適合個人開發者或小型團隊使用，並且在功能上相當完整。對於需要在終端機上操作 Bilibili 的用戶來說，這是一個值得考慮的選擇。

**技術棧**：`Python 3.7+`

## 重點功能

- 影片詳情 — 使用 `bili video BV1ABcsztEcY` 獲取影片的詳細資訊，包括字幕和 AI 摘要。
- 音訊提取 — 使用 `bili audio BV1ABcsztEcY` 下載影片音訊並分割成 25 秒的 WAV 檔案。
- 用戶資料 — 使用 `bili user 946974` 獲取用戶的詳細資料和影片列表。
- 搜尋功能 — 使用 `bili search '關鍵字'` 來搜尋用戶或影片，支持多種參數選擇。
- 動態時間線 — 使用 `bili feed` 獲取你關注的用戶的最新動態。

## 快速開始

1. 安裝 bilibili-cli
```bash
uv tool install bilibili-cli
```
2. 使用 QR 碼登錄
```bash
bili login
```
3. 獲取影片詳情
```bash
bili video BV1ABcsztEcY
```

## 程式碼範例

bili video BV1ABcsztEcY --subtitle --ai --comments --json

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 jackwener 過去開發了多個 CLI 工具，涵蓋了不同的平台，顯示出其在 CLI 工具開發上的專業能力。這個工具解決了在終端機中無法方便訪問 Bilibili 的問題，提供了一個簡單的命令行介面來進行各種操作。近期的推廣和使用者的需求增加可能促進了這個專案的流行，特別是在開發者社群中。技術生態的變化使得 CLI 工具越來越受到重視，尤其是在自動化和遠端工作的趨勢下。

## 適合誰使用

**目標受眾**：需要在終端機上高效操作 Bilibili 的開發者和內容創作者。

> [!example] 使用場景
> - 後端工程師用它來在 CI 流程中自動檢索 Bilibili 影片資訊，因為這樣可以快速獲得影片的詳細數據，並進行分析。
> - 內容創作者用它來提取 Bilibili 影片的音訊，並將其分割成 WAV 檔案，因為這樣可以方便後續的音訊處理和編輯。
> - 數據分析師用它來獲取 Bilibili 的熱門影片數據，因為這樣可以幫助他們分析趨勢並制定內容策略。

## 優缺點分析

> [!success] 優點
> - 提供多種功能，涵蓋影片、用戶和動態操作。
> - 支持音訊提取和分割，適合音訊處理需求。
> - 使用簡單的命令行介面，方便開發者集成到自動化流程中。

> [!danger] 缺點
> - 功能依賴於 Python 環境，可能對某些用戶不友好。
> - 音訊提取功能需要額外的依賴，增加了安裝複雜度。
> - 目前尚未有廣泛的社群支持或文檔資源。

> [!warning] 注意事項
> - 僅支援 Python 3.7+
> - 需要安裝 uv tool 以便於管理依賴
> - 音訊提取功能可能需要額外的音訊處理庫

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

相關概念：[[CLI/TUI]] · [[自動化]] · [[媒體處理]]

相關專案：[[jackwener--twitter-cli|jackwener/twitter-cli]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[knowsuchagency--mcp2cli|knowsuchagency/mcp2cli]] · [[op7418--Claude-to-IM-skill|op7418/Claude-to-IM-skill]] · [[sanbuphy--nanoAgent|sanbuphy/nanoAgent]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[steipete--discrawl|steipete/discrawl]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，321 stars
