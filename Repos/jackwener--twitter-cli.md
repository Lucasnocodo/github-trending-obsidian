---
repo: jackwener/twitter-cli
url: https://github.com/jackwener/twitter-cli
owner: jackwener
owner_type: User
language: Python
license: Apache-2.0
description: "A CLI for Twitter/X — feed, bookmarks, and user timeline in terminal"
homepage: ""
stars: 1401
stars_per_day: 280
forks: 125
open_issues: 5
created: 2026-03-05
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
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
  - "透過終端機閱讀 Twitter 的動態、書籤和用戶時間線。"
---

# twitter-cli

**1.4k** stars · **280** stars/天 · 建立 5 天前 · Python · Apache-2.0

`easy-install`

> [!summary] 一句話摘要
> 透過終端機閱讀 Twitter 的動態、書籤和用戶時間線。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (280 stars/day)
> **適合** 需要從終端機高效管理 Twitter 賬戶的內容創作者和開發者。
> **一句話重點** 這個 CLI 工具讓 Twitter 的操作變得更加高效，特別適合喜歡命令行的用戶。

> [!abstract] 核心創新
> twitter-cli 提供了一個完整的命令行介面，讓用戶無需 API 金鑰即可使用 Twitter 的功能。

## 專案簡介

twitter-cli 是一個命令行工具，使用者可以透過終端機直接閱讀 Twitter 的動態、書籤和用戶資料。它支援多種操作，包括發送推文、刪除推文和管理喜歡的推文。使用者可以透過瀏覽器提取認證資訊，並以結構化格式（如 YAML 和 JSON）輸出資料，方便用於自動化和腳本。與其他 Twitter 客戶端相比，twitter-cli 提供了更高的靈活性，特別是在用戶互動和資料管理方面。這個工具適合需要高效管理 Twitter 賬戶的用戶，特別是對於開發者和自動化愛好者。使用者可以透過簡單的命令行操作來完成複雜的任務，提升工作效率。

**技術棧**：`Python`

## 重點功能

- 動態查詢 — 使用 twitter feed 獲取首頁動態。
- 書籤管理 — 使用 twitter bookmarks 獲取保存的推文。
- 推文詳情查詢 — 使用 twitter tweet [tweet_id] 獲取推文詳情及回覆。
- 用戶資料查詢 — 使用 twitter user [username] 獲取用戶的詳細資料和推文列表。
- 結構化輸出 — 支援 --yaml 和 --json 參數，方便用於自動化腳本。

## 快速開始

1. 安裝 CLI 工具
```bash
uv tool install twitter-cli
```
2. 查詢首頁動態
```bash
twitter feed
```
3. 查詢書籤
```bash
twitter bookmarks
```

## 程式碼範例

twitter feed --max 50

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 jackwener 是一位活躍的開發者，專注於 CLI 工具的開發，這個工具正好滿足了許多 Twitter 用戶對於命令行操作的需求。隨著越來越多的用戶希望在終端機中進行操作，這個工具的推出正好切合了這一趨勢。

## 適合誰使用

**目標受眾**：需要從終端機高效管理 Twitter 賬戶的內容創作者和開發者。

> [!example] 使用場景
> - 內容創作者用它來快速查看熱門推文和動態，因為這樣可以即時掌握趨勢，提升內容創作的靈感。
> - 開發者用它來自動化管理 Twitter 賬戶，因為這樣可以節省大量手動操作的時間。
> - 學生用它來查找和保存有用的推文，因為這樣可以方便地進行重複學習。

## 架構分析

這是一個單體架構的 CLI 工具，使用者透過命令行介面輸入指令，系統則透過 Twitter API 獲取資料並輸出。關鍵技術決策包括使用 Python 開發並整合了多個功能模組。專案目錄結構中，主要的執行檔案是 twitter_cli.py。

## 優缺點分析

> [!success] 優點
> - 操作簡單，使用者可快速上手。
> - 功能全面，涵蓋了 Twitter 的多種操作。
> - 支援結構化輸出，方便與其他工具整合。

> [!danger] 缺點
> - 某些功能可能受到 Twitter API 的限制。
> - 對於不熟悉命令行的用戶來說，學習曲線可能較陡。
> - 需要持續更新以適應 Twitter 的變動。

> [!warning] 注意事項
> - 需要有效的 Twitter 賬戶進行操作。
> - 某些功能可能受到 Twitter API 限制。
> - 不支援 Windows 系統的完整功能。
> - 可能需要額外配置以支持某些功能。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 125 |
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

**社群活躍度**：社群活躍度中等，持續有更新和貢獻。

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
> git clone git@github.com:jackwener/twitter-cli.git
> cd twitter-cli
> uv sync
> ```
> 
> ### Quick Start
> 
> ```bash
> # Fetch home timeline (For You)
> twitter feed
> 
> # Fetch Following timeline
> twitter feed -t following
> 
> # Enable ranking filter explicitly
> twitter feed --filter
> ```
> 
> ### Usage
> 
> ```bash
> # Feed
> twitter feed --max 50
> twitter feed --json > tweets.json
> twitter feed --input tweets.json
> 
> # Bookmarks
> twitter bookmarks
> twitter bookmarks --max 30 --yaml
> 
> # Search
> twitter search "Claude Code"
> twitter search "AI agent" -t Latest --max 50
> twitter search "机器学习" --yaml
> twitter search "topic" -o results.json         # Save to file
> twitter search "trending" --filter              # Apply ranking filter
> 
> # Tweet detail (view tweet + replies)
> twitter tweet 1234567890
> twitter tweet https://x.com/user/status/1234567890
> 
> # List timeline
> twitter list 1539453138322673664
> 
> # User
> twitter user elonmusk
> twitter user-posts elonmusk --max 20
> twitter user-posts elonmusk -o tweets.json
> twitter likes elonmusk --max 30
> twitter likes elonmusk -o likes.json
> twitter followers elonmusk --max 50
> twitter following elonmusk --max 50
> 
> # Write operations
> twitter post "Hello from twitter-cli!"
> twitter post "reply text" --reply-to 1234567890
> twitter post "Hello from twitter-cli!" --json
> twitter delete 1234567890
> twitter like 1234567890
> twitter like 1234567890 --yaml
> twitter unlike 1234567890
> twitter retweet 1234567890
> twitter unretweet 1234567890
> twitter bookmark 1234567890
> twitter unbookmark 1234567890
> twitter follow elonmusk --jso

## 延伸閱讀

相關概念：[[即時通訊]] · [[自動化測試]] · [[CLI/TUI]]

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

- [[2026-03-10|2026-03-10]] — 首次收錄，1.4k stars
