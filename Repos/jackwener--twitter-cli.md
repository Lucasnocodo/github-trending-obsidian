---
repo: jackwener/twitter-cli
url: https://github.com/jackwener/twitter-cli
owner: jackwener
owner_type: User
language: Python
license: Apache-2.0
description: "A CLI for Twitter/X — feed, bookmarks, and user timeline in terminal"
homepage: ""
stars: 1463
stars_per_day: 293
forks: 127
open_issues: 5
created: 2026-03-05
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "CLI 工具"
subcategory: "社群媒體工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓你在終端機上無需 API 金鑰就能讀取 Twitter/X 的時間線、書籤和用戶資料。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-13"
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
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

**1.5k** stars · **293** stars/天 · 建立 5 天前 · Python · Apache-2.0

`easy-install`

> [!summary] 一句話摘要
> 讓你在終端機上無需 API 金鑰就能讀取 Twitter/X 的時間線、書籤和用戶資料。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (293 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人
> **適合** 需要在終端機中高效使用 Twitter 的開發者和社群媒體管理者。
> **一句話重點** 這個專案展示了如何在終端機中高效使用 Twitter，並且無需繁瑣的 API 認證過程。

> [!abstract] 核心創新
> 這個專案的創新在於無需 API 金鑰即可使用 Twitter 的完整功能，並提供靈活的身份驗證方式。

## 專案簡介

這個 CLI 工具讓用戶可以在終端機中直接讀取 Twitter 的時間線、書籤和用戶資料，無需 API 金鑰。用戶只需輸入命令，如 `twitter feed` 來獲取主頁時間線，或使用 `twitter bookmarks` 來列出保存的推文。它支援 YAML 和 JSON 格式的結構化輸出，方便用於腳本或 AI agent 整合。使用者可以透過瀏覽器的 Cookie 進行身份驗證，並且具備防檢測的功能，如請求延遲和代理支持。與其他 CLI 工具相比，這個專案不需要 API 金鑰，降低了使用門檻，並且提供了更靈活的身份驗證方式。它的效能表現良好，能夠快速獲取大量資料，並且支援多種過濾和排序功能。這個專案目前仍在開發中，但已經具備穩定的功能，適合小型團隊或個人開發者使用。對於需要快速獲取 Twitter 資料的開發者來說，這是一個極佳的選擇，而對於需要高頻率發文或自動化操作的用戶，則需謹慎使用以避免觸發限制。

**技術棧**：`Python 3.8` · `uvtool`

## 重點功能

- 時間線讀取 — 透過 `twitter feed` 命令獲取主頁和關注者的推文。
- 書籤管理 — 使用 `twitter bookmarks` 命令列出保存的推文，支援 `--max` 參數限制數量。
- 用戶資料查詢 — 使用 `twitter user` 命令獲取用戶的推文、喜歡的推文和關注者列表。
- 結構化輸出 — 使用 `--json` 或 `--yaml` 參數導出資料，方便與其他工具整合。
- 身份驗證 — 支援瀏覽器 Cookie 和環境變數進行身份驗證，簡化使用流程。
- 防檢測功能 — 包含請求延遲和代理支持，幫助用戶減少被封鎖的風險。
- 推文操作 — 支援發佈、刪除、喜歡和轉推等操作，方便用戶管理自己的推文。

## 快速開始

1. 安裝 twitter-cli
```bash
uv tool install twitter-cli
```
2. 獲取主頁時間線
```bash
twitter feed
```
3. 獲取書籤
```bash
twitter bookmarks
```

## 程式碼範例

twitter feed --max 50
# 預期輸出：顯示最新的 50 條推文

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 jackwener 之前開發過多個受歡迎的 CLI 工具，這使得他在開發社群中有一定的知名度。這個工具解決了許多用戶在使用 Twitter API 時的繁瑣步驟，特別是身份驗證的複雜性。最近的社群討論和推文也引起了對這個工具的關注，讓更多人開始嘗試在終端機中使用 Twitter。技術生態的變化使得用戶對於 CLI 工具的需求增加，特別是在開發者社群中。

## 適合誰使用

**目標受眾**：需要在終端機中高效使用 Twitter 的開發者和社群媒體管理者。

> [!example] 使用場景
> - 社群媒體經理用它來快速檢查 Twitter 上的熱門趨勢，因為它能夠在終端機中快速獲取時間線，避免了使用瀏覽器的繁瑣。
> - 開發者用它來自動化推文發佈，因為它支援簡單的命令行操作，並且能夠在不需要 API 金鑰的情況下使用。
> - 數據分析師用它來提取 Twitter 數據進行分析，因為它可以將資料以 JSON 或 YAML 格式輸出，方便後續處理。

## 架構分析

這是一個 CLI 工具，使用者透過命令行與 Twitter 互動。用戶輸入命令 → 工具處理請求 → 返回 Twitter 數據。核心技術使用 Python 實現，並且支援 Cookie 認證和代理設置。專案目錄結構包含主要的命令處理邏輯和配置文件。

## 技術深入分析

這個 CLI 工具使用 Python 作為核心開發語言，並且利用 Cookie 進行身份驗證，這樣的設計使得用戶能夠更方便地訪問 Twitter 的資料。它的效能設計良好，能夠快速處理大量請求，但在高頻率使用時可能會受到 Twitter 的速率限制影響。選擇 Python 使得開發和維護相對簡單，但在處理大量資料時可能會遇到性能瓶頸。設計上考慮了用戶的隱私和安全性，提供了代理支持和請求延遲的功能，這些都是為了減少被封鎖的風險。隨著 Twitter 政策的變動，這個工具的某些功能可能會受到影響，開發者需持續關注相關變化。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含了詳細的安裝和使用說明，並提供了範例命令。安裝過程相對順暢，使用者只需簡單的命令即可完成安裝。文件目前僅提供英文版本，可能對某些用戶造成障礙，但整體上新手體驗良好。

## 優缺點分析

> [!success] 優點
> - 無需 API 金鑰，降低使用門檻。
> - 支援多種輸出格式，方便與其他工具整合。
> - 提供防檢測功能，減少被封鎖的風險。
> - 命令簡單易用，適合快速操作。

> [!danger] 缺點
> - 仍在開發中，可能存在不穩定性。
> - 高頻請求可能會受到 Twitter 的限制。
> - 功能可能隨著 Twitter 政策變動而變化。
> - 對於新手使用者，可能需要時間熟悉命令行操作。

> [!warning] 注意事項
> - 僅支援 Python 3.8+。
> - 需要有效的 Twitter 帳戶進行身份驗證。
> - 高頻率請求可能會觸發 Twitter 的速率限制。
> - 某些功能可能在未來版本中變動，因為專案仍在開發中。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 127 |
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

**社群活躍度**：社群活躍度中等，持續有更新和維護。
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

相關專案：[[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[steipete--discrawl|steipete/discrawl]] · [[knowsuchagency--mcp2cli|knowsuchagency/mcp2cli]] · [[op7418--Claude-to-IM-skill|op7418/Claude-to-IM-skill]] · [[sanbuphy--nanoAgent|sanbuphy/nanoAgent]] · [[zornade--visura-api|zornade/visura-api]]

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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

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
