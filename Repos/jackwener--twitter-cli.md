---
repo: jackwener/twitter-cli
url: https://github.com/jackwener/twitter-cli
owner: jackwener
owner_type: User
language: Python
license: Apache-2.0
description: "A CLI for Twitter/X — feed, bookmarks, and user timeline in terminal"
homepage: ""
stars: 1389
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
  - cli_工具
  - python
aliases:
  - "twitter-cli"
  - "jackwener/twitter-cli"
  - "在終端機中使用 Twitter/X，無需 API 金鑰即可讀取時間線和書籤。"
---

# twitter-cli

**1.4k** stars · **278** stars/天 · 建立 5 天前 · Python · Apache-2.0

`easy-install`

> [!summary] 一句話摘要
> 在終端機中使用 Twitter/X，無需 API 金鑰即可讀取時間線和書籤。

> [!abstract] 核心創新
> twitter-cli 提供無需 API 金鑰的 Twitter 使用方式，讓使用者能在終端機中高效操作。

## 專案簡介

twitter-cli 是一個針對 Twitter/X 的命令列介面工具，讓使用者能在終端機中查看時間線、書籤和用戶資料。它使用 Python 開發，並支援 cookie 認證，無需 API 金鑰即可使用。與其他 Twitter 客戶端相比，twitter-cli 提供了更靈活的數據輸出格式，支持 YAML 和 JSON，適合用於腳本和自動化工作。使用者可以輕鬆地管理推文，包括發佈、刪除和標記喜歡，並且具備抗偵測的功能來避免被 Twitter 限制。這個工具的設計適合需要快速訪問 Twitter 資訊的開發者和重度使用者。

**技術棧**：`Python`

## 重點功能

- 無需 API 金鑰即可使用，簡化認證流程。
- 支持時間線、書籤和用戶資料的查看。
- 可選擇 YAML 或 JSON 格式輸出數據，便於自動化。
- 支持推文的發佈、刪除和標記喜歡等操作。
- 具備抗偵測功能，減少被限制的風險。

## 快速開始

1. 安裝 twitter-cli
```bash
uv tool install twitter-cli
```
2. 使用命令查看時間線
```bash
twitter-cli timeline
```
3. 發佈新推文
```bash
twitter-cli post '你的推文內容'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 jackwener 具備多個成功的 CLI 工具背景，這個專案滿足了對於無需 API 金鑰的 Twitter 使用需求，並且提供了靈活的數據處理方式。隨著許多使用者尋求更簡便的方式來訪問 Twitter，這個工具的推出正好切合了這個需求。

## 適合誰使用

**目標受眾**：對於需要在終端機中高效使用 Twitter 的開發者和社交媒體專業人士。

> [!example] 使用場景
> - 開發者 用它來 自動化推文管理，因為可以輕鬆地發佈和刪除推文。
> - 社交媒體經理 用它來 快速查看時間線，因為能在終端機中高效工作。
> - 數據分析師 用它來 提取推文數據，因為支持 YAML 和 JSON 格式方便後續分析。

## 優缺點分析

> [!success] 優點
> - 簡化了 Twitter 使用流程，無需 API 金鑰。
> - 支持多種數據輸出格式，方便自動化。
> - 具備抗偵測功能，降低被限制的風險。

> [!danger] 缺點
> - 仍需依賴 Twitter 的 API 限制。
> - 某些功能可能不如官方應用完整。
> - 需要定期更新以適應 Twitter 的變更。

> [!warning] 注意事項
> - 需要安裝 Python 環境。
> - 對於高頻使用可能仍會受到 Twitter 限制。
> - 某些功能可能在未來版本中改變。

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

**社群活躍度**：專案活躍，持續更新中。
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

相關概念：[[命令列介面]] · [[社交媒體自動化]] · [[數據分析]]

[GitHub](https://github.com/jackwener/twitter-cli)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，1.4k stars
