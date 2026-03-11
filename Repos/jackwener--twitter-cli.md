---
repo: jackwener/twitter-cli
url: https://github.com/jackwener/twitter-cli
owner: jackwener
owner_type: User
language: Python
license: Apache-2.0
description: "A CLI for Twitter/X — feed, bookmarks, and user timeline in terminal"
homepage: ""
stars: 1445
stars_per_day: 289
forks: 125
open_issues: 5
created: 2026-03-05
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "CLI 工具"
subcategory: "社交媒體工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓你在終端機上無需 API 金鑰就能讀取 Twitter/X 的時間線、書籤和用戶資料。"
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
  - "twitter-cli"
  - "jackwener/twitter-cli"
  - "讓你在終端機上無需 API 金鑰就能讀取 Twitter/X 的時間線、書籤和用戶資料。"
---

# twitter-cli

**1.4k** stars · **289** stars/天 · 建立 5 天前 · Python · Apache-2.0

`easy-install`

> [!summary] 一句話摘要
> 讓你在終端機上無需 API 金鑰就能讀取 Twitter/X 的時間線、書籤和用戶資料。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (289 stars/day)
> **授權** Apache-2.0 (商業友好)
> **適合** 需要在終端機上操作 Twitter 並希望避免 API 限制的開發者和重度使用者。
> **一句話重點** 這個工具讓終端機操作 Twitter 成為可能，並且提供了強大的數據處理能力。

> [!abstract] 核心創新
> 這個專案的創新在於無需 API 金鑰即可在終端機中操作 Twitter，並提供完整的 cookie 轉發功能。

## 專案簡介

這個 CLI 工具讓使用者可以在終端機中直接讀取 Twitter 的時間線、書籤和用戶資料，無需使用 API 金鑰。它透過瀏覽器的 cookies 進行身份驗證，並支持多種輸出格式（如 YAML 和 JSON），方便用戶進行腳本化操作。使用者可以透過指令如 `twitter feed` 來獲取時間線，或使用 `twitter search` 來查找特定的推文，並可選擇性地應用排名過濾器。與其他 Twitter CLI 工具相比，它的特點在於支持完整的 cookie 轉發和抗檢測技術，這使得使用者在使用過程中能夠更好地隱藏其行為。實際使用中，這個工具能夠有效地減少 IP 限制的風險，並且支持代理設置。這個專案目前處於 beta 階段，功能上已經相當成熟，適合需要在終端機上進行 Twitter 操作的開發者和重度使用者。建議在需要快速查詢或操作 Twitter 賬戶時使用，但對於不熟悉 CLI 的用戶可能會有一定的學習曲線。

**技術棧**：`Python 3.8` · `uv tool`

## 重點功能

- 時間線讀取 — 使用 `twitter feed` 指令獲取 `for-you` 和 `following` 時間線。
- 書籤管理 — 使用 `twitter bookmarks` 指令列出已儲存的推文。
- 推文搜尋 — 使用 `twitter search '關鍵字'` 來查找推文，並可選擇性地使用 `-t` 參數來篩選結果。
- 用戶資料查詢 — 使用 `twitter user <username>` 獲取用戶的推文、喜歡的推文和關注者數量。
- 身份驗證 — 支持使用瀏覽器 cookies 進行身份驗證，並可設置代理以減少 IP 限制風險。

## 快速開始

1. 安裝 twitter-cli
```bash
uv tool install twitter-cli
```
2. 獲取主頁時間線
```bash
twitter feed
```
3. 搜尋推文
```bash
twitter search 'AI agent' -t Latest --max 50
```

## 程式碼範例

twitter feed --max 50
# Fetches the latest 50 tweets from your home timeline.

## 為什麼值得關注

> [!tip] 爆紅原因
> (a) 作者 jackwener 之前開發過多個 CLI 工具，具有豐富的經驗。(b) 這個工具解決了無法在終端機上方便地操作 Twitter 的痛點，特別是對於開發者和自動化工作流的需求。(c) 近期在社交媒體上有多次討論和分享，增加了其曝光率。(d) 隨著 CLI 工具在開發者社群中的普及，這個工具的需求也隨之上升。

## 適合誰使用

**目標受眾**：需要在終端機上操作 Twitter 並希望避免 API 限制的開發者和重度使用者。

> [!example] 使用場景
> - 開發者用它來在終端機中快速查詢 Twitter 時間線，因為這樣比使用瀏覽器更方便且能夠自動化操作。
> - 數據分析師用它來提取特定推文的數據並轉換為 JSON 格式，因為這樣可以輕鬆進行後續的數據處理和分析。
> - 社群經理用它來管理推文和書籤，因為它的命令行界面能夠提高工作效率，尤其是在需要批量操作時。

## 架構分析

這是一個 CLI 工具，使用單體架構設計。用戶輸入 → twitter-cli → 請求 Twitter API → 輸出結果。核心技術決策包括使用瀏覽器 cookies 進行身份驗證和支持 YAML/JSON 輸出格式。專案目錄結構中，主要檔案包括 `twitter.py` 和 `config.yaml`。

## 技術深入分析

> [!note]- 展開深入分析
> 這個 CLI 工具的核心在於使用瀏覽器 cookies 進行身份驗證，這樣用戶可以無需 API 金鑰就能獲取 Twitter 數據。它的效能特性包括能夠快速獲取用戶的時間線和書籤，並支持高達 50 條推文的批量操作。設計上，選擇使用 cookies 而非傳統的 API 認證，這樣能夠更好地模擬正常的瀏覽器行為，降低被檢測的風險。與其他類似工具相比，這種設計使得用戶能夠在不受 API 限制的情況下進行操作，特別適合需要大量數據的開發者和數據分析師。

## 優缺點分析

> [!success] 優點
> - 無需 API 金鑰，降低使用門檻。
> - 支持多種輸出格式，方便用戶進行數據處理。
> - 提供抗檢測技術，減少被封鎖的風險。

> [!danger] 缺點
> - 對於不熟悉 CLI 的用戶來說，學習曲線較陡。
> - 在高流量使用時可能會受到 Twitter 的速率限制。
> - 不支持 Windows 原生運行，需額外配置。

> [!warning] 注意事項
> - 需要安裝 Python 環境和相關依賴。
> - 在某些情況下，可能會受到 Twitter 的速率限制影響。
> - 不支持 Windows 系統的原生安裝，需透過 WSL 或其他方式運行。

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

**社群活躍度**：社群活躍，經常更新和維護。
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

相關概念：[[CLI/TUI]] · [[自動化]] · [[API 設計]]

相關專案：[[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[knowsuchagency--mcp2cli|knowsuchagency/mcp2cli]] · [[steipete--discrawl|steipete/discrawl]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[jshachm--pi-rs|jshachm/pi-rs]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，1.4k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，1.4k stars
