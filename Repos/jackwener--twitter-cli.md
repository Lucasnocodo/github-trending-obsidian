---
repo: jackwener/twitter-cli
url: https://github.com/jackwener/twitter-cli
owner: jackwener
owner_type: User
language: Python
license: Apache-2.0
description: "A CLI for Twitter/X — feed, bookmarks, and user timeline in terminal"
homepage: ""
stars: 1422
stars_per_day: 284
forks: 124
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
use_case: "讓你在終端機中無需 API 金鑰即可瀏覽 Twitter/X 的時間線和書籤。"
priority: medium
tags:
  - github
  - "category/cli_工具"
  - "lang/python"
  - easy_install
aliases:
  - "twitter-cli"
  - "jackwener/twitter-cli"
  - "讓你在終端機中無需 API 金鑰即可瀏覽 Twitter/X 的時間線和書籤。"
---

# twitter-cli

**1.4k** stars · **284** stars/天 · 建立 5 天前 · Python · Apache-2.0

`easy-install`

> [!summary] 一句話摘要
> 讓你在終端機中無需 API 金鑰即可瀏覽 Twitter/X 的時間線和書籤。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (284 stars/day)
> **適合** 需要在終端機中高效管理 Twitter 資訊的開發者或社群經理。
> **一句話重點** 這個工具讓終端機用戶能夠輕鬆訪問 Twitter，解決了無法使用 API 的問題。

> [!abstract] 核心創新
> 這個專案的創新點在於無需 API 金鑰即可使用 Twitter 的功能，並且支持 Cookie 認證。

## 專案簡介

這個 CLI 工具讓使用者能夠在終端機中直接讀取 Twitter 的時間線、書籤和用戶資料，過程中不需要 API 金鑰。使用者可以透過簡單的指令如 `twitter feed` 來獲取個人化的時間線，或使用 `twitter bookmarks` 來查看已保存的推文。技術上，它利用了 Cookie 認證來模擬瀏覽器行為，並且支持 YAML 和 JSON 格式的結構化輸出，方便進行腳本化或 AI 整合。與其他 Twitter CLI 工具相比，它的獨特之處在於無需 API 金鑰的設計，並且提供了更豐富的用戶資料查詢功能。實際使用中，這個工具能夠有效地避開 Twitter 的速率限制，並且支持代理設置以減少 IP 限制風險。這個專案目前處於 beta 階段，對於需要快速查詢 Twitter 資訊的開發者來說非常值得使用。若你只是偶爾使用 Twitter，可能不需要這麼複雜的工具。

**技術棧**：`Python`

## 重點功能

- 時間線獲取 — 使用 `twitter feed` 指令獲取個人化的時間線，支持 `-t` 參數選擇 `for-you` 或 `following`。
- 書籤管理 — 使用 `twitter bookmarks` 指令查看已保存的推文，支持 `--max` 參數限制結果數量。
- 用戶資料查詢 — 使用 `twitter user` 指令獲取用戶資料和推文，支持 `--max` 參數限制返回的推文數量。
- 結構化輸出 — 使用 `--json` 或 `--yaml` 參數導出資料，方便進行後續處理。
- Cookie 認證 — 支持從瀏覽器自動提取 Cookie，無需手動設置 API 金鑰。

## 快速開始

1. 安裝 twitter-cli
```bash
uv tool install twitter-cli
```
2. 獲取主頁時間線
```bash
twitter feed
```
3. 搜尋特定推文
```bash
twitter search 'AI agent' --max 50
```

## 程式碼範例

```bash
twitter feed --max 50
twitter search 'Claude Code'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 jackwener 具備多個成功的 CLI 工具背景，這個專案切中許多開發者對於無需 API 金鑰即可使用 Twitter 的需求。隨著 Twitter 政策變化，許多開發者尋找替代方案來訪問 Twitter 資訊，這使得該工具在當前時期受到關注。

## 適合誰使用

**目標受眾**：需要在終端機中高效管理 Twitter 資訊的開發者或社群經理。

> [!example] 使用場景
> - 後端工程師用它來在終端機中快速獲取 Twitter 時間線，因為這樣可以避免使用瀏覽器的繁瑣，並且能夠輕鬆地將結果導出為 JSON 格式進行後續處理。
> - 數據分析師用它來搜尋特定主題的推文，因為它支持多種過濾條件和排序方式，能夠快速找到相關資料。
> - 社群經理用它來管理自己的 Twitter 帳號，因為可以直接在終端機中發佈推文、刪除推文和管理喜歡的內容，提升工作效率。

## 優缺點分析

> [!success] 優點
> - 無需 API 金鑰，降低使用門檻。
> - 支持多種輸出格式，便於資料處理。
> - 提供用戶資料和推文的詳細查詢功能。

> [!danger] 缺點
> - 依賴於瀏覽器 Cookie，對於不熟悉的用戶可能有學習曲線。
> - 在高頻率使用時可能會遇到速率限制。
> - 目前僅支持 Unix-like 系統，對於 Windows 用戶不友好。

> [!warning] 注意事項
> - 需要有效的瀏覽器 Cookie 進行認證，否則無法使用。
> - 在某些情況下可能會受到 Twitter 的速率限制。
> - 不支持 Windows 環境，需在 Unix-like 系統上運行。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 124 |
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

相關概念：[[CLI/TUI]] · [[API 設計]] · [[自動化測試]]

相關專案：[[jackwener--bilibili-cli|jackwener/bilibili-cli]]

[GitHub](https://github.com/jackwener/twitter-cli)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "jackwener--twitter-cli"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "jackwener--twitter-cli"
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

- [[2026-03-11|2026-03-11]] — 再次上榜，1.4k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，1.4k stars
