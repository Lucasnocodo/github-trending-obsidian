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
  - "從終端瀏覽 Bilibili 的視頻、用戶和動態。"
---

# bilibili-cli

**321** stars · **54** stars/天 · 建立 6 天前 · Python · Apache-2.0

`v0.5.0` `easy-install`

> [!summary] 一句話摘要
> 從終端瀏覽 Bilibili 的視頻、用戶和動態。

> [!abstract] 核心創新
> bilibili-cli 提供了從終端高效訪問 Bilibili 的能力，支持多種互動功能。

## 專案簡介

bilibili-cli 是一個命令行工具，讓用戶可以在終端中瀏覽 Bilibili 的視頻、用戶資料和動態。它使用 Python 開發，並支持從終端直接進行視頻搜索和播放，還能提取音頻和管理用戶的收藏。與其他類似的工具相比，bilibili-cli 提供了更豐富的功能，如自動提取瀏覽器 cookies 進行登錄，並且支持結構化輸出，方便進行數據處理。實際使用中，這個工具能提升用戶的操作效率，尤其適合喜歡在終端環境中工作的開發者和技術愛好者。整體來說，這是一個值得一試的工具，特別是對於 Bilibili 的重度使用者。

**技術棧**：`Python`

## 重點功能

- 支持視頻詳細信息、字幕和 AI 摘要。
- 可提取音頻並分割成 ASR 準備的 WAV 片段。
- 用戶資料查詢，包括視頻列表和關注名單。
- 支持關鍵字搜索視頻或用戶。
- 提供動態時間線和熱門視頻排名。

## 快速開始

1. 安裝 bilibili-cli
```bash
uv tool install bilibili-cli
```
2. 檢查登錄狀態
```bash
bili status
```
3. 搜索視頻
```bash
bili search <關鍵字>
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 jackwener 在開發 CLI 工具方面有豐富經驗，這個專案滿足了許多用戶希望在終端環境中高效使用 Bilibili 的需求。隨著命令行工具的流行，這個專案的實用性和便利性使其在近期受到關注。

## 適合誰使用

**目標受眾**：對於喜歡在終端環境中操作 Bilibili 的用戶和開發者。

> [!example] 使用場景
> - 視頻愛好者 用它來 瀏覽和搜索 Bilibili 上的熱門視頻，因為可以快速找到感興趣的內容。
> - 開發者 用它來 提取音頻並進行後續處理，因為可以直接從終端操作，提升效率。
> - 用戶 用它來 管理自己的收藏和觀看歷史，因為可以方便地進行喜好管理。

## 優缺點分析

> [!success] 優點
> - 操作簡單，適合終端用戶。
> - 功能豐富，支持多種用戶交互。
> - 自動提取登錄信息，使用方便。

> [!danger] 缺點
> - 依賴於 Bilibili 的 API，可能會受到限制。
> - 某些功能需要額外安裝依賴。
> - 對於不熟悉命令行的用戶來說，學習曲線較陡。

> [!warning] 注意事項
> - 需要有效的 Bilibili 帳號進行登錄。
> - 某些功能可能受限於 Bilibili 的 API 政策。
> - 需要安裝額外的依賴以支持音頻提取功能。

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

**社群活躍度**：專案活躍，定期更新，社群反饋良好。
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
> bili login                

## 延伸閱讀

相關概念：[[命令行界面]] · [[視頻平台]] · [[數據提取]] · [[用戶交互]] · [[Python 開發]]

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

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，321 stars
