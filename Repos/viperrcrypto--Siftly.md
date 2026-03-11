---
repo: viperrcrypto/Siftly
url: https://github.com/viperrcrypto/Siftly
owner: viperrcrypto
owner_type: User
language: TypeScript
license: MIT
description: "Local Twitter/X bookmark organizer with AI categorization and mindmap visualization"
homepage: ""
stars: 1400
stars_per_day: 233
forks: 116
open_issues: 9
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
subcategory: "生產力工具"
release_tag: "v1.0.1"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "將 Twitter/X 書籤轉換為可搜尋的分類知識庫，並以思維導圖可視化。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/其他"
  - "lang/typescript"
  - easy_install
  - "topic/ai"
  - "topic/bookmarks"
  - "topic/categorization"
  - "topic/local_first"
  - "topic/mindmap"
aliases:
  - "Siftly"
  - "viperrcrypto/Siftly"
  - "將 Twitter/X 書籤轉換為可搜尋的分類知識庫，並以思維導圖可視化。"
---

# Siftly

**1.4k** stars · **233** stars/天 · 建立 6 天前 · TypeScript · MIT

`v1.0.1` `easy-install`

> [!summary] 一句話摘要
> 將 Twitter/X 書籤轉換為可搜尋的分類知識庫，並以思維導圖可視化。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (233 stars/day)
> **授權** MIT (商業友好)
> **適合** 需要在本地管理 Twitter/X 書籤並希望使用 AI 功能的獨立開發者或內容創作者。
> **一句話重點** Siftly 的創新在於它提供了一個完全本地的解決方案，讓用戶能夠安全地管理和探索 Twitter/X 書籤。

> [!abstract] 核心創新
> Siftly 是一個完全本地的 Twitter/X 書籤管理工具，無需雲端或訂閱服務。

## 專案簡介

Siftly 透過一個四階段的 AI 流程，將 Twitter/X 的書籤轉換為可搜尋的知識庫。首先，它使用內建的書籤工具或控制台腳本匯入書籤，然後進行實體提取，分析圖像內容，生成語義標籤，最後將書籤分類。這個過程中，AI 能夠從每個書籤中提取 25-35 個可搜尋的標籤，並將其分配到 1-3 個類別。與其他工具相比，Siftly 不需要雲端服務或訂閱，所有數據都保留在本地，並且支持無需瀏覽器擴展的書籤匯入。使用者可以透過互動式思維導圖視覺化整個書籤圖，並根據類別、媒體類型和日期進行過濾瀏覽。這個工具適合需要本地管理書籤的用戶，並且在效能上能夠處理大量書籤，無需依賴外部 API。Siftly 現在處於穩定版本，值得小型團隊或個人使用，特別是對於重度使用 Twitter/X 的用戶。對於不需要 AI 功能的使用者，則可能不需要這樣的工具。

**技術棧**：`TypeScript` · `Next.js` · `Prisma`

## 重點功能

- 書籤匯入 — 使用內建工具或控制台腳本匯入 Twitter/X 書籤，無需瀏覽器擴展。
- 實體提取 — 從書籤中提取 hashtags、URLs 和提及，無需 API 調用。
- 視覺分析 — 對每個圖像進行分析，生成 30-40 個視覺標籤。
- 語義標籤生成 — 為每個書籤生成 25-35 個可搜尋的標籤，提升搜尋精確度。
- 互動式思維導圖 — 以可視化方式探索書籤圖，便於理解和使用。

## 快速開始

1. 克隆專案並啟動
```bash
git clone https://github.com/viperrcrypto/Siftly.git && cd Siftly && ./start.sh
```
2. 使用 Claude Code CLI
```bash
git clone https://github.com/viperrcrypto/Siftly.git && claude Siftly/
```
3. 手動設置
```bash
git clone https://github.com/viperrcrypto/Siftly.git && cd Siftly && npm install && npx prisma generate && npx prisma migrate dev --name init && npx next dev
```

## 程式碼範例

```bash
./start.sh
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 viperrcrypto 之前有開發過其他開源工具，這次專案針對 Twitter/X 書籤管理的需求提供了本地解決方案，特別是對於不想依賴雲端的用戶。這個工具的推出正好滿足了許多用戶對於資料隱私的需求，並且在社群中引起了討論。隨著人們對於個人數據保護的重視，這個工具的需求也隨之上升。

## 適合誰使用

**目標受眾**：需要在本地管理 Twitter/X 書籤並希望使用 AI 功能的獨立開發者或內容創作者。

> [!example] 使用場景
> - 社群媒體經理用它來整理和分類 Twitter/X 書籤，因為可以快速找到相關內容，提升工作效率。
> - 內容創作者用它來視覺化自己的靈感來源，因為可以透過思維導圖快速瀏覽和連結不同的書籤。
> - 研究人員用它來建立可搜尋的知識庫，因為能夠根據語義標籤進行深入的資料搜尋，節省查找時間。

## 架構分析

Siftly 是一個單體應用，使用 Next.js 作為前端框架，並透過 Prisma 管理數據庫。用戶輸入書籤 → 系統處理（實體提取、視覺分析、語義標籤生成、分類） → 輸出可視化的書籤圖。專案目錄結構包含 src 目錄，主要代碼位於 src/pages 和 src/components 中。

## 技術深入分析

> [!note]- 展開深入分析
> Siftly 的核心在於其四階段 AI 流程，這使得書籤的分類和搜尋變得更為高效。實體提取階段不需要 API 調用，這降低了使用成本。視覺分析則利用圖像處理技術，能夠從每個圖像中提取多達 40 個標籤，這在其他類似工具中較為罕見。Siftly 的設計選擇讓它在本地運行，這對於重視隱私的用戶來說是一大優勢，但也意味著使用者需要自行管理所有數據和依賴。

## 優缺點分析

> [!success] 優點
> - 完全本地運行，保障用戶資料隱私。
> - 無需訂閱費用，使用 AI 功能也不需要額外的 API 金鑰。
> - 提供互動式思維導圖，便於視覺化書籤關聯。

> [!danger] 缺點
> - 目前僅支援 macOS 的自動認證，其他平台需手動設置。
> - 需要安裝 Node.js 和其他依賴，對新手可能有一定門檻。
> - AI 功能依賴於 Claude Code，對於不使用該服務的用戶功能受限。

> [!warning] 注意事項
> - 僅支援 Node.js 18+。
> - 目前僅在 macOS 上支持 Claude Code CLI 的自動認證。
> - 不支援 Windows/Linux 用戶自動認證，需手動輸入 API 金鑰。
> - 需要安裝 Claude Code CLI 以使用 AI 功能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 這個工具專注於命令行操作 Twitter，而 Siftly 提供了更強大的書籤管理和可視化功能。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | parsync 是一個同步工具，與 Siftly 的書籤管理無關，後者專注於資料的分類和搜尋。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 116 |
| Open Issues | 9 |
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

**社群活躍度**：社群活躍，持續更新和維護。
**連結**：[文件](https://github.com/viperrcrypto/Siftly/blob/main/README.md)

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
> npx prisma migrate dev --name init
> npx next dev
> ```
> 
> Open [http://localhost:3000](http://localhost:3000)
> 
> ---
> 
> ## AI Authentication
> 
> Siftly automatically detects the best available auth method — no configuration needed in the most common case.
> 
> ### Priority order
> 
> | # | Method | How |
> |---|--------|-----|
> | 1 | **Claude Code CLI** *(zero config)* | Already signed in? Siftly reads your session from the macOS keychain automatically |
> | 2 | **API key in Settings** | Open Settings in the app and paste your key |
> | 3 | **`ANTHROPIC_API_KEY` env var** | Set in `.env.local` or your shell environment |
> | 4 | **Local proxy** | Set `ANTHROPIC_BASE_URL` to any Anthropic-compatible endpoint |
> 
> ### Claude Code CLI (no API key needed)
> 
> If you use [Claude Code](https://claude.ai/code), you're already signed in. Siftly detects your session from the macOS keychain and uses your Claude subscription (Free/Pro/Max) automatically.
> 
> The Settings page shows a green **"Claude CLI detected — no API key needed"** badge with your subscription tier when this is active.
> 
> > **Note:** This works on macOS. On Linux/Windows, add an API key in Settings instead.
> 
> ### Getting an API key (if needed)
> 
> 1. Go to [console.anthropic.com](https://console.anthropic.com)
> 2. Create a new API key
> 3. Open Siftly → Settings → paste it in
> 
> New accounts include $5 free credit — enough for thousands of bookmarks at Haiku pricing (~$0.00025/bookmark).
> 
> ---
> 
> ## Importing Your Bookmarks
> 
> Siftly has **built-in import tools** — no browser extensions required.

## 延伸閱讀

相關概念：[[自動化]] · [[資料視覺化]] · [[API 設計]]

相關專案：[[jackwener--twitter-cli|jackwener/twitter-cli]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[TinyAGI--fractals|TinyAGI/fractals]]

[GitHub](https://github.com/viperrcrypto/Siftly)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "viperrcrypto--Siftly"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "viperrcrypto--Siftly"
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
