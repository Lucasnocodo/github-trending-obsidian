---
repo: jackwener/twitter-cli
url: https://github.com/jackwener/twitter-cli
owner: jackwener
owner_type: User
language: Python
license: Apache-2.0
description: "A CLI for Twitter/X — feed, bookmarks, and user timeline in terminal"
homepage: ""
stars: 1402
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
  - "讓使用者在終端中瀏覽 Twitter 的動態和用戶資料。"
---

# twitter-cli

**1.4k** stars · **280** stars/天 · 建立 5 天前 · Python · Apache-2.0

`easy-install`

> [!summary] 一句話摘要
> 讓使用者在終端中瀏覽 Twitter 的動態和用戶資料。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (280 stars/day)
> **適合** 需要在終端中操作 Twitter 的開發者和重度用戶。
> **一句話重點** 這個工具讓 Twitter 的內容操作變得更加高效，特別適合開發者和重度用戶。

> [!abstract] 核心創新
> twitter-cli 提供了全面的命令列功能，讓用戶能夠在終端中高效操作 Twitter。

## 專案簡介

twitter-cli 是一個命令列工具，讓使用者能夠在終端中無需 API 金鑰即可瀏覽 Twitter 的動態、書籤和用戶資料。使用者可以透過簡單的指令來查詢動態、書籤和用戶資料，並且支援結構化輸出（如 YAML 和 JSON），方便開發者進行自動化操作。這個工具使用 Python 開發，並支援從瀏覽器自動提取登錄憑證，讓使用者無需手動輸入帳號密碼。與其他類似工具相比，twitter-cli 提供了更全面的功能，包括動態過濾、推文詳細資訊查詢和用戶資料檢索，這使得它更適合開發者和自動化腳本使用。實際使用中，該工具能夠快速獲取 Twitter 上的熱門內容，但對於需要圖形介面的使用者來說可能不太友好。整體來看，這是一個穩定的工具，適合需要在終端中操作 Twitter 的用戶。

**技術棧**：`Python`

## 重點功能

- 動態查詢 — 使用 `twitter feed` 獲取動態，支持過濾和排序。
- 書籤管理 — 使用 `twitter bookmarks` 查詢保存的推文。
- 推文詳情 — 使用 `twitter tweet <tweet_id>` 獲取推文及其回覆。
- 用戶資料 — 使用 `twitter user <username>` 獲取用戶的詳細資料和推文列表。
- 結構化輸出 — 支持 `--yaml` 和 `--json` 格式輸出，方便與其他工具整合。

## 快速開始

1. 安裝 twitter-cli
```bash
pipx install twitter-cli
```
2. 查詢動態
```bash
twitter feed
```
3. 查詢用戶資料
```bash
twitter user elonmusk
```

## 程式碼範例

twitter search "AI agent" --max 50

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 jackwener 在命令列工具開發方面有豐富經驗，並且隨著 Twitter 用戶基數的增長，對於 CLI 工具的需求也隨之增加。這個專案在社群中獲得了良好的反響，特別是在開發者圈子中。

## 適合誰使用

**目標受眾**：需要在終端中操作 Twitter 的開發者和重度用戶。

> [!example] 使用場景
> - 社交媒體經理用它來快速查找和分析熱門推文，因為這樣可以節省時間並提高效率。
> - 內容創作者用它來分析熱門推文的趨勢，因為這樣可以幫助他們制定更好的內容策略。
> - 開發者用它來自動化 Twitter 內容的檢索和分析，因為這樣可以更方便地整合到其他應用中。

## 優缺點分析

> [!success] 優點
> - 功能全面，支持多種操作如查詢、發文和互動。
> - 支援結構化輸出，方便與其他工具整合。
> - 自動提取登錄憑證，使用方便。

> [!danger] 缺點
> - 對於不熟悉 CLI 的用戶來說，使用門檻較高。
> - 某些功能可能依賴於 Twitter 的 API 穩定性。
> - 需要定期更新以保持與 Twitter 的兼容性。

> [!warning] 注意事項
> - 需要安裝 Python 和相關依賴。
> - 對於不熟悉 CLI 的用戶來說，學習曲線較陡。
> - 某些功能可能受到 Twitter API 限制。

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

相關概念：[[CLI/TUI]] · [[自動化測試]]

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

- [[2026-03-10|2026-03-10]] — 首次收錄，1.4k stars
