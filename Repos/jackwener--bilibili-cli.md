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
forks: 25
open_issues: 1
created: 2026-03-04
first_seen: 2026-03-10
week: "2026-W11"
category: "CLI 工具"
release_tag: "v0.5.0"
status: to-review
tags:
  - github
  - cli_工具
  - python
---

# bilibili-cli

**321** stars · **54** stars/天 · 建立 6 天前 · Python · Apache-2.0

> [!summary] 一句話摘要
> 讓使用者可以在終端中瀏覽 Bilibili 的視頻和用戶，無需打開瀏覽器。

## 專案簡介

這個 CLI 工具讓使用者能夠在終端中直接查詢 Bilibili 的視頻、用戶和動態信息。它是用 Python 開發的，並提供了豐富的功能，包括視頻詳情、用戶資料和熱門視頻排行。相比於其他視頻網站的 CLI 工具，bilibili-cli 專注於 Bilibili 的生態系統，並提供了針對該平台的特定功能，如提取音頻和評論。這是一個有趣且實用的工具，特別適合喜愛 Bilibili 的用戶。

## 重點功能

- 支持查詢視頻詳情、字幕和相關視頻。
- 能夠提取音頻並分割成適合 ASR 的 WAV 檔案。
- 提供用戶資料查詢和視頻列表功能。
- 支持關鍵字搜索用戶或視頻，方便快捷。
- 動態時間線功能，顯示用戶關注的內容。

## 快速開始

安裝: `pip install bilibili-cli`,使用: `bilibili-cli search <關鍵字>`

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在開源社群中活躍，並且這個工具滿足了許多用戶希望在終端中快速訪問 Bilibili 的需求。隨著 CLI 工具的流行，這個專案吸引了不少關注。

## 適合誰使用

**目標受眾**：喜愛 Bilibili 的用戶和需要在終端中操作視頻內容的開發者。

> [!example] 使用場景
> - 視頻愛好者 用它來 在終端中快速查找和播放 Bilibili 上的熱門視頻，因為這樣可以節省時間。
> - 開發者 用它來 提取 Bilibili 視頻的音頻，因為它支持將視頻轉換為可用於語音識別的 WAV 格式。
> - 內容創作者 用它來 瀏覽自己的視頻和收藏，因為可以快速查看觀看歷史和喜歡的視頻。

> [!warning] 注意事項
> 目前僅支持 Bilibili 的部分功能，未來可能會增加更多特性。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | Python |
| 授權 | Apache-2.0 |
| Stars | 321 |
| Forks | 25 |
| Issues | 1 |
| 建立日期 | 2026-03-04 |

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
> -

## 延伸閱讀

相關概念：#命令行介面 · #視頻流媒體 · #Python

[GitHub](https://github.com/jackwener/bilibili-cli)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，321 stars
