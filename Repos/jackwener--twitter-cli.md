---
repo: jackwener/twitter-cli
url: https://github.com/jackwener/twitter-cli
owner: jackwener
owner_type: User
language: Python
license: Apache-2.0
description: "A CLI for Twitter/X — feed, bookmarks, and user timeline in terminal"
homepage: ""
stars: 1410
stars_per_day: 282
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
  - "讓你在終端機中無需 API 金鑰即可瀏覽 Twitter/X 的動態、書籤和用戶資料。"
---

# twitter-cli

**1.4k** stars · **282** stars/天 · 建立 5 天前 · Python · Apache-2.0

`easy-install`

> [!summary] 一句話摘要
> 讓你在終端機中無需 API 金鑰即可瀏覽 Twitter/X 的動態、書籤和用戶資料。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (282 stars/day)
> **適合** 需要在終端機中高效操作 Twitter 並希望避免 API 限制的開發者和社群媒體管理者。
> **一句話重點** 這個專案讓使用者能夠在終端機中靈活操作 Twitter，突破了傳統 API 的限制。

> [!abstract] 核心創新
> 這個專案的創新在於無需 API 金鑰即可在終端機中操作 Twitter，提供了更靈活的使用方式。

## 專案簡介

這個 CLI 工具讓用戶能夠在終端機中直接讀取 Twitter 的動態、書籤和用戶資料，無需 API 金鑰。使用者可以透過簡單的指令如 `twitter feed` 來獲取個人化的動態，並且支持多種輸出格式（如 YAML 和 JSON），方便進行後續的資料處理或整合。技術上，它利用了瀏覽器的 cookie 認證來避免 API 限制，並且提供了隨機延遲來降低被檢測的風險。與其他 Twitter CLI 工具相比，它的優勢在於無需 API 金鑰，並且支持更全面的用戶操作，如發文、刪除和管理喜歡的推文。使用效果上，這個工具能夠快速獲取和管理推文，但仍然依賴於用戶的瀏覽器環境來進行認證。這個專案目前處於穩定階段，適合需要在終端機中高效操作 Twitter 的開發者和重度用戶。建議在需要快速獲取 Twitter 資訊時使用，但如果需要更高的自動化程度或更複雜的功能，可能需要考慮其他 API 方案。

**技術棧**：`Python`

## 重點功能

- 無需 API 金鑰 — 使用瀏覽器 cookies 進行身份驗證，簡化認證流程。
- 多種輸出格式 — 支持 YAML 和 JSON，便於資料整合和自動化。
- 推文管理 — 可發佈、刪除、喜歡和轉推推文，全面管理 Twitter 帳號。
- 書籤功能 — 快速列出保存的推文，方便查找和管理。
- 用戶資料查詢 — 獲取用戶的推文、喜歡的推文和關注者列表，支持多種查詢參數。

## 快速開始

1. 安裝 twitter-cli
```bash
uv tool install twitter-cli
```
2. 獲取首頁動態
```bash
twitter feed
```
3. 搜尋特定推文
```bash
twitter search "AI agent" -t Latest --max 50
```

## 程式碼範例

```bash
twitter feed --max 50
twitter search "Claude Code"
twitter post "Hello from twitter-cli!"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 jackwener 是一位活躍的開發者，專注於 CLI 工具的開發，這個專案切中了用戶對於無需 API 金鑰的需求，讓更多人能夠便捷地使用 Twitter。隨著使用者對於隱私和安全的重視，這樣的工具在當前環境中顯得尤為重要。

## 適合誰使用

**目標受眾**：需要在終端機中高效操作 Twitter 並希望避免 API 限制的開發者和社群媒體管理者。

> [!example] 使用場景
> - 社群媒體經理用它來快速檢視和管理多個 Twitter 帳號的動態，因為這樣可以節省大量時間，避免在瀏覽器中切換。
> - 開發者用它來自動化推文的發佈和管理，因為它支持 YAML 和 JSON 輸出，便於與其他工具整合。
> - 數據分析師用它來抓取特定主題的推文數據，因為它可以快速過濾和導出大量資料，提升工作效率。

## 優缺點分析

> [!success] 優點
> - 簡化的認證流程，無需 API 金鑰即可使用。
> - 支持多種資料輸出格式，方便與其他工具整合。
> - 全面的推文管理功能，適合社群媒體管理者使用。

> [!danger] 缺點
> - 依賴瀏覽器環境，無法在無瀏覽器的環境中運行。
> - 可能受到 Twitter 的速率限制影響，影響使用體驗。
> - 某些功能在 Windows 系統上可能不完全支持。

> [!warning] 注意事項
> - 需要瀏覽器環境來提取 cookies，無法在無瀏覽器的環境中運行。
> - 對於大量請求仍可能受到 Twitter 的速率限制影響。
> - 不支持 Windows 系統的某些功能，可能需要額外配置。

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

相關概念：[[CLI/TUI]] · [[自動化測試]] · [[API 設計]]

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

- [[2026-03-10|2026-03-10]] — 首次收錄，1.4k stars
