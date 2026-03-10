---
repo: viperrcrypto/Siftly
url: https://github.com/viperrcrypto/Siftly
owner: viperrcrypto
owner_type: User
language: TypeScript
license: MIT
description: "Local Twitter/X bookmark organizer with AI categorization and mindmap visualization"
homepage: ""
stars: 1364
stars_per_day: 227
forks: 112
open_issues: 7
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "其他"
release_tag: "v1.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/其他"
  - "lang/typescript"
  - "topic/ai"
  - "topic/bookmarks"
  - "topic/categorization"
  - "topic/local_first"
  - "topic/mindmap"
aliases:
  - "Siftly"
  - "viperrcrypto/Siftly"
  - "本地化的 Twitter/X 書籤管理器，具備 AI 分類和思維導圖視覺化功能。"
---

# Siftly

**1.4k** stars · **227** stars/天 · 建立 6 天前 · TypeScript · MIT

`v1.0.1`

> [!summary] 一句話摘要
> 本地化的 Twitter/X 書籤管理器，具備 AI 分類和思維導圖視覺化功能。

> [!abstract] 核心創新
> Siftly 提供了一個本地化的書籤管理解決方案，具備 AI 分類和思維導圖功能。

## 專案簡介

Siftly 是一個本地的 Twitter/X 書籤管理工具，能夠將書籤轉化為可搜尋的知識庫。它運行一個四階段的 AI 管道，從導入書籤到生成可視化的思維導圖，並提供 AI 驅動的搜索功能。與其他書籤管理工具相比，Siftly 的獨特之處在於其本地運行和 AI 分類能力，使用者不需要依賴雲端服務。實際使用中，這能幫助使用者更有效地管理和查找書籤，但需要一定的技術背景來設置。這是一個適合希望提升書籤管理效率的使用者的工具。

**技術棧**：`Node.js` · `TypeScript`

## 重點功能

- 本地運行，無需雲端服務。
- AI 驅動的書籤分類和搜尋功能。
- 可視化的思維導圖，方便探索內容。
- 支持多種過濾和排序選項。
- 導入書籤的方式靈活多樣。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/viperrcrypto/Siftly.git
```
2. 進入專案目錄
```bash
cd Siftly
```
3. 運行啟動腳本
```bash
./start.sh
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著社交媒體使用的增加，對於能夠有效管理書籤的工具需求上升。專案的創作者在開發工具方面有豐富的經驗，這使得這個專案具備實用性。近期的社交媒體變化也促使使用者尋找更好的管理方式。

## 適合誰使用

**目標受眾**：希望提升社交媒體書籤管理效率的使用者。

> [!example] 使用場景
> - 社交媒體使用者 用它來 管理 Twitter/X 書籤，因為這樣可以更快速地找到重要內容。
> - 內容創作者 用它來 組織靈感，因為這樣可以視覺化思維導圖。
> - 研究人員 用它來 分析社交媒體趨勢，因為這樣可以更有效地整理資料。

## 架構分析

專案基於 Node.js，運行一個四階段的 AI 管道來處理書籤。資料流是 書籤導入 → AI 分類 → 可視化呈現。

## 優缺點分析

> [!success] 優點
> - 本地運行，保護使用者隱私。
> - AI 驅動的功能提高管理效率。
> - 可視化思維導圖幫助探索內容。

> [!danger] 缺點
> - 需要 Node.js 環境。
> - 初次設置可能需要一些技術背景。
> - 對於大型書籤庫的處理可能會有性能問題。

> [!warning] 注意事項
> - 需要 Node.js 環境。
> - 可能需要對 AI API 有基本了解。
> - 初次設置可能需要一些技術背景。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 112 |
| Open Issues | 7 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-04 |
| Repo 大小 | 236 KB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 97
>     "Shell" : 2
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@viperrcrypto](https://github.com/viperrcrypto) | 57 |
> | [@promptinprod](https://github.com/promptinprod) | 2 |
> | [@baymac](https://github.com/baymac) | 2 |
> | [@schizoidcock](https://github.com/schizoidcock) | 2 |
> | [@robinlyu](https://github.com/robinlyu) | 1 |

**最新版本**：v1.0.1 — Siftly v1.0.1 (2026-03-10)

## 社群與生態

**社群活躍度**：每週 10+ commits，社群活躍度高。

## README 摘錄

> [!info]- 展開查看原文 README
> Siftly
> 
>   Self-hosted Twitter/X bookmark manager with AI-powered organization
> 
>   Import · Analyze · Categorize · Search · Explore
> 
>   
>     
>     
>     
>     
>     
>   
> 
> ---
> 
> ## What is Siftly?
> 
> Siftly turns your Twitter/X bookmarks into a **searchable, categorized, visual knowledge base** — running entirely on your machine. No cloud, no subscriptions, no browser extensions required. Everything stays local except the AI API calls you configure.
> 
> It runs a **4-stage AI pipeline** on your bookmarks:
> 
> ```
> 📥 Import (built-in bookmarklet or console script — no extensions needed)
>     ↓
> 🏷️  Entity Extraction   — mines hashtags, URLs, mentions, and 100+ known tools from raw tweet data (free, zero API calls)
>     ↓
> 👁️  Vision Analysis      — reads text, objects, and context from every image/GIF/video thumbnail (30–40 visual tags per image)
>     ↓
> 🧠 Semantic Tagging     — generates 25–35 searchable tags per bookmark for AI-powered search
>     ↓
> 📂 Categorization       — assigns each bookmark to 1–3 categories with confidence scores
> ```
> 
> After the pipeline runs, you get:
> - **AI search** — find bookmarks by meaning, not just keywords (*"funny meme about crypto crashing"*)
> - **Interactive mindmap** — explore your entire bookmark graph visually
> - **Filtered browsing** — grid or list view, filter by category, media type, and date
> - **Export tools** — download media, export as CSV / JSON / ZIP
> 
> ---
> 
> ## Quick Start
> 
> ### Prerequisites
> 
> - [Node.js 18+](https://nodejs.org)
> - npm (comes with Node.js)
> 
> **That's it.** If you have [Claude Code CLI](https://claude.ai/code) installed and signed in, AI features work automatically — no API key needed.
> 
> ### Option A — One command (recommended)
> 
> ```bash
> git clone https://github.com/viperrcrypto/Siftly.git
> cd Siftly
> ./start.sh
> ```
> 
> `start.sh` installs dependencies, sets up the database, checks for Claude CLI auth, and opens [http://localhost:3000](http://localhost:3000) automatically.
> 
> ### Option B — Using Claude Code
> 
> If you're using [Claude Code](https://claude.ai/code) to set up the project, it will read `CLAUDE.md` and know exactly how to get started. Just open the project folder:
> 
> ```bash
> git clone https://github.com/viperrcrypto/Siftly.git
> claude Siftly/
> ```
> 
> Claude Code will handle setup and start the app using your existing Claude subscription — no extra configuration needed.
> 
> ### Option C — Manual setup
> 
> ```bash
> git clone https://github.com/viperrcrypto/Siftly.git
> cd Siftly
> npm install
> npx prisma generate
> npx prisma migrate dev --nam

## 延伸閱讀

相關概念：[[社交媒體管理]] · [[知識管理]] · [[AI 分類技術]]

[GitHub](https://github.com/viperrcrypto/Siftly)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，1.4k stars
