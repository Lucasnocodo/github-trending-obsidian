---
repo: jackwener/twitter-cli
url: https://github.com/jackwener/twitter-cli
owner: jackwener
owner_type: User
language: Python
license: Apache-2.0
description: "A CLI for Twitter/X — feed, bookmarks, and user timeline in terminal"
homepage: ""
stars: 1392
stars_per_day: 278
forks: 123
open_issues: 5
created: 2026-03-05
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "CLI 工具"
release_tag: ""
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
  - "twitter-cli"
  - "jackwener/twitter-cli"
  - "從終端訪問 Twitter/X 的動態、書籤和用戶資料。"
---

# twitter-cli

**1.4k** stars · **278** stars/天 · 建立 5 天前 · Python · Apache-2.0

`easy-install`

> [!summary] 一句話摘要
> 從終端訪問 Twitter/X 的動態、書籤和用戶資料。

> [!abstract] 核心創新
> twitter-cli 提供了從終端高效訪問 Twitter 的能力，支持多種互動功能。

## 專案簡介

twitter-cli 是一個命令行工具，讓用戶可以在終端中訪問 Twitter/X 的動態、書籤和用戶資料。它支持用戶查詢時間線、書籤和推文詳細信息，並且能夠進行推文的發佈和管理。這個工具與其他 Twitter 客戶端相比，最大的優勢在於不需要 API 金鑰，使用者可以直接使用瀏覽器的 cookies 登錄，這大大降低了使用門檻。實際使用中，這個工具能夠幫助用戶高效地管理 Twitter 賬號，特別適合喜歡在終端操作的開發者。整體來說，這是一個值得一試的工具，尤其是對於 Twitter 的重度使用者。

**技術棧**：`Python`

## 重點功能

- 支持查詢時間線和書籤。
- 可以發佈、刪除推文，管理推文互動。
- 用戶資料查詢，包括推文、喜好和關注者。
- 支持結構化輸出，方便數據處理。
- 無需 API 金鑰，使用瀏覽器 cookies 登錄。

## 快速開始

1. 安裝 twitter-cli
```bash
uv tool install twitter-cli
```
2. 檢查登錄狀態
```bash
twitter status
```
3. 查詢推文
```bash
twitter search <關鍵字>
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 jackwener 在開發 CLI 工具方面有豐富經驗，這個專案滿足了許多用戶希望在終端環境中高效使用 Twitter 的需求。隨著命令行工具的流行，這個專案的實用性和便利性使其在近期受到關注。

## 適合誰使用

**目標受眾**：對於喜歡在終端環境中操作 Twitter 的用戶和開發者。

> [!example] 使用場景
> - 社交媒體經營者 用它來 管理 Twitter 賬號，因為可以快速發佈和管理推文。
> - 開發者 用它來 查詢推文和用戶資料，因為可以直接在終端中操作，提升效率。
> - 用戶 用它來 瀏覽時間線和書籤，因為可以方便地查看感興趣的內容。

## 優缺點分析

> [!success] 優點
> - 操作簡單，適合終端用戶。
> - 功能豐富，支持多種用戶交互。
> - 無需 API 金鑰，使用方便。

> [!danger] 缺點
> - 依賴於 Twitter 的 API，可能會受到限制。
> - 某些功能需要額外安裝依賴。
> - 對於不熟悉命令行的用戶來說，學習曲線較陡。

> [!warning] 注意事項
> - 需要有效的 Twitter 帳號進行登錄。
> - 某些功能可能受限於 Twitter 的 API 政策。
> - 對於不熟悉命令行的用戶來說，學習曲線較陡。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 123 |
| Open Issues | 5 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 278 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 68 |
> | [@y0u-0](https://github.com/y0u-0) | 1 |

## 社群與生態

**社群活躍度**：專案活躍，定期更新，社群反饋良好。
**連結**：[文件](https://pypi.org/project/twitter-cli/)

## README 摘錄

> [!info]- 展開查看原文 README
> # twitter-cli
> 
> [](https://github.com/jackwener/twitter-cli/actions/workflows/ci.yml)
> [](https://pypi.org/project/twitter-cli/)
> [](https://pypi.org/project/twitter-cli/)
> 
> A terminal-first CLI for Twitter/X: read timelines, bookmarks, and user profiles without API keys.
> 
> ## More Tools
> 
> - [xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) — Xiaohongshu (小红书) CLI for notes and account workflows
> - [bilibili-cli](https://github.com/jackwener/bilibili-cli) — Bilibili CLI for videos, users, search, and feeds
> - [discord-cli](https://github.com/jackwener/discord-cli) — Discord CLI for local-first sync, search, and export
> - [tg-cli](https://github.com/jackwener/tg-cli) — Telegram CLI for local-first sync, search, and export
> 
> [English](#english) | [中文](#中文)
> 
> ## English
> 
> ### Features
> 
> **Read:**
> - Timeline: fetch `for-you` and `following` feeds
> - Bookmarks: list saved tweets from your account
> - Search: find tweets by keyword with Top/Latest/Photos/Videos tabs
> - Tweet detail: view a tweet and its replies
> - List timeline: fetch tweets from a Twitter List
> - User lookup: fetch user profile, tweets, likes, followers, and following
> - Structured output: export any data as YAML or JSON for scripting and AI agent integration
> - Optional scoring filter: rank tweets by engagement weights
> - Structured output contract: [SCHEMA.md](./SCHEMA.md)
> 
> > **AI Agent Tip:** Prefer `--yaml` for structured output unless a strict JSON parser is required. Non-TTY stdout defaults to YAML automatically. Use `--max` to limit results.
> 
> **Write:**
> - Post: create new tweets and replies
> - Delete: remove your own tweets
> - Like / Unlike: manage tweet likes
> - Retweet / Unretweet: manage retweets
> - Bookmark: bookmark/unbookmark (`favorite/unfavorite` kept as compatibility aliases)
> - Write commands also support explicit `--json` / `--yaml` output now
> 
> **Auth & Anti-Detection:**
> - Cookie auth: use browser cookies or environment variables
> - Full cookie forwarding: extracts ALL browser cookies for richer browser context
> - TLS fingerprint impersonation: `curl_cffi` with dynamic Chrome version matching
> - `x-client-transaction-id` header generation
> - Request timing jitter to avoid pattern detection
> - Write operation delays (1.5–4s random) to mitigate rate limits
> - Proxy support via `TWITTER_PROXY` environment variable
> 
> ### Installation
> 
> ```bash
> # Recommended: uv tool (fast, isolated)
> uv tool install twitter-cli
> 
> # Alternative: pipx
> pipx install twitter-cli
> ```
> 
> Install from source:
> 
> ```bash
> git clone g

## 延伸閱讀

相關概念：[[命令行界面]] · [[社交媒體]] · [[數據提取]] · [[用戶交互]] · [[Python 開發]]

[GitHub](https://github.com/jackwener/twitter-cli)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "jackwener--twitter-cli"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，1.4k stars
