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
  - cli_工具
  - python
aliases:
  - "bilibili-cli"
  - "jackwener/bilibili-cli"
  - "讓你在終端上輕鬆瀏覽 Bilibili 的影片、用戶和動態。"
---

# bilibili-cli

**321** stars · **54** stars/天 · 建立 6 天前 · Python · Apache-2.0

`v0.5.0` `easy-install`

> [!summary] 一句話摘要
> 讓你在終端上輕鬆瀏覽 Bilibili 的影片、用戶和動態。

> [!abstract] 核心創新
> 自動提取瀏覽器 Cookie 進行登錄，簡化了身份驗證過程。

## 專案簡介

這個 CLI 工具讓用戶能夠在終端中直接瀏覽 Bilibili 的影片、用戶資料和動態更新。它使用 Python 開發，並整合了多種功能，如影片詳情、字幕提取、用戶資料查詢等，並支援通過關鍵字進行搜索。與其他類似工具相比，bilibili-cli 提供了更豐富的互動功能，如喜歡、投幣等操作，並且支援通過瀏覽器自動提取登錄 Cookie，簡化了身份驗證過程。實際使用中，這個工具能夠快速獲取熱門影片和用戶動態，但對於某些高頻操作可能會受到 Bilibili API 的限制。整體來看，這是一個適合喜愛 Bilibili 的開發者和終端使用者的工具，尤其是對於喜歡命令行操作的用戶來說，值得一試。

**技術棧**：`Python`

## 重點功能

- 支持影片詳情、字幕和 AI 摘要查詢。
- 用戶資料查詢，包括關注列表和影片列表。
- 關鍵字搜索功能，快速找到相關影片或用戶。
- 動態時間線，顯示用戶的最新動態。
- 支持喜歡、投幣等互動操作。
- 自動提取瀏覽器 Cookie 進行登錄。
- 支持 YAML 和 JSON 結構化輸出，方便腳本化操作。
- 提供穩定的 API 輸出格式，便於開發者使用。

## 快速開始

1. 使用 uv tool 安裝 bilibili-cli
```bash
uv tool install bilibili-cli
```
2. 使用 pipx 安裝 bilibili-cli
```bash
pipx install bilibili-cli
```
3. 從源碼安裝
```bash
git clone git@github.com:jackwener/bilibili-cli.git && cd bilibili-cli && uv sync
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 開發者 jackwener 擁有多個成功的 CLI 工具專案，這次推出的 bilibili-cli 切中了許多用戶希望在終端中高效使用 Bilibili 的需求。隨著遠端工作和命令行工具的普及，這個專案正好滿足了這一趨勢，並且在短時間內獲得了不少關注。

## 適合誰使用

**目標受眾**：對於喜歡使用命令行工具的 Bilibili 用戶和開發者。

> [!example] 使用場景
> - 開發者 用它來 瀏覽 Bilibili 影片，因為 可以快速查找和播放影片而不需要打開瀏覽器。
> - 學生 用它來 查詢用戶資料，因為 可以在終端中快速獲取所需的資訊。
> - 內容創作者 用它來 獲取熱門影片，因為 可以輕鬆追蹤流行趨勢和靈感來源。

## 架構分析

這是一個基於命令行的工具，使用 Python 開發，通過 API 與 Bilibili 進行交互，並提供用戶友好的命令行介面。用戶輸入命令後，工具會調用相應的 API 獲取數據並顯示結果。

## 優缺點分析

> [!success] 優點
> - 簡化了 Bilibili 的使用流程，適合命令行愛好者。
> - 提供了豐富的功能，滿足多樣化需求。
> - 自動化登錄流程，提升使用體驗。

> [!danger] 缺點
> - 對於不熟悉命令行的用戶來說，學習曲線較陡。
> - 某些功能可能會受到 Bilibili API 的限制。
> - 缺乏圖形界面，無法提供直觀的使用體驗。

> [!warning] 注意事項
> - 某些高頻操作可能會受到 Bilibili API 的限制。
> - 需要安裝 Python 環境和相應的依賴庫。
> - 不支持圖形界面，完全依賴命令行操作。

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
> bili login                

## 延伸閱讀

相關概念：[[命令行介面]] · [[API 整合]] · [[自動化工具]]

[GitHub](https://github.com/jackwener/bilibili-cli)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，321 stars
