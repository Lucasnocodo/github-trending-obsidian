---
repo: viperrcrypto/Siftly
url: https://github.com/viperrcrypto/Siftly
owner: viperrcrypto
owner_type: User
language: TypeScript
license: MIT
description: "Local Twitter/X bookmark organizer with AI categorization and mindmap visualization"
homepage: ""
stars: 1391
stars_per_day: 232
forks: 116
open_issues: 9
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "生產力"
release_tag: "v1.0.1"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "將 Twitter/X 書籤轉換為可搜尋的分類視覺知識庫，完全在本地運行。"
priority: medium
tags:
  - github
  - "category/生產力"
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
  - "將 Twitter/X 書籤轉換為可搜尋的分類視覺知識庫，完全在本地運行。"
---

# Siftly

**1.4k** stars · **231** stars/天 · 建立 6 天前 · TypeScript · MIT

`v1.0.1` `easy-install`

> [!summary] 一句話摘要
> 將 Twitter/X 書籤轉換為可搜尋的分類視覺知識庫，完全在本地運行。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (231 stars/day)
> **適合** 需要在本地管理和組織 Twitter/X 書籤的獨立開發者或小型團隊。
> **一句話重點** Siftly 的設計理念在於將 Twitter/X 書籤的管理完全本地化，讓用戶擁有更高的數據控制權。

> [!abstract] 核心創新
> Siftly 是一個完全本地運行的 Twitter/X 書籤管理器，無需雲端或訂閱服務。

## 專案簡介

Siftly 透過一個四階段的 AI 管道，將 Twitter/X 書籤轉換為可搜尋的知識庫。首先，使用內建的書籤工具或控制台腳本匯入書籤，然後進行實體提取，從原始推文數據中挖掘出 hashtags、URLs、提及和 100 多個已知工具。接著，進行視覺分析，從每個圖像、GIF 和視頻縮圖中讀取文本、物件和上下文，並生成 30-40 個視覺標籤。最後，透過語義標記為每個書籤生成 25-35 個可搜尋標籤，並將書籤分配到 1-3 個類別。與其他工具相比，Siftly 不依賴雲端或訂閱服務，所有數據都保留在本地，並且支持無需瀏覽器擴展的操作。使用者可以透過 AI 搜尋、互動式思維導圖和過濾瀏覽功能來探索書籤，並能夠導出媒體或數據。這個專案目前處於穩定版本，適合需要本地管理 Twitter/X 書籤的個人或小型團隊。對於需要雲端解決方案或大型數據集的使用者，則不太適合。

**技術棧**：`TypeScript` · `Next.js` · `Prisma`

## 重點功能

- 四階段 AI 管道 — 包括實體提取、視覺分析、語義標記和分類，提供全面的書籤管理。
- AI 搜尋 — 透過意義而非關鍵字來搜尋書籤，提升搜尋效率。
- 互動式思維導圖 — 以視覺化方式探索書籤，增強使用者體驗。
- 過濾瀏覽 — 支援按類別、媒體類型和日期過濾書籤，方便查找。
- 導出工具 — 支援將媒體導出為 CSV / JSON / ZIP 格式，方便資料分享。

## 快速開始

1. 克隆專案並啟動
```bash
git clone https://github.com/viperrcrypto/Siftly.git && cd Siftly && ./start.sh
```
2. 使用 Claude Code 進行設置
```bash
git clone https://github.com/viperrcrypto/Siftly.git && claude Siftly/
```
3. 手動安裝與啟動
```bash
git clone https://github.com/viperrcrypto/Siftly.git && cd Siftly && npm install && npx prisma generate && npx prisma migrate dev --name init && npx next dev
```

## 程式碼範例

```bash
./start.sh
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者背景涉及 AI 和生產力工具的開發，切中許多用戶對於數據隱私和本地管理的需求。隨著 Twitter/X 書籤數量的增加，許多用戶需要更好的管理工具。Siftly 的推出恰好滿足了這一需求，並且其自我托管的特性讓它在當前的市場環境中更具吸引力。

## 適合誰使用

**目標受眾**：需要在本地管理和組織 Twitter/X 書籤的獨立開發者或小型團隊。

> [!example] 使用場景
> - 社交媒體經理用它來整理和搜尋 Twitter/X 書籤，因為可以透過語義搜尋快速找到相關內容，節省大量時間。
> - 內容創作者用它來視覺化書籤，因為互動式思維導圖能幫助他們更好地理解和規劃內容策略。
> - 研究人員用它來分析 Twitter/X 上的趨勢，因為 AI 標記和分類功能能夠快速篩選出有價值的資料。

## 架構分析

Siftly 採用單體架構，所有功能均在本地運行。用戶輸入書籤 → 系統處理（AI 管道） → 輸出可視化結果。關鍵技術決策包括使用 Node.js 和 Next.js 來構建前端和後端，並利用 Prisma 進行數據庫管理。目錄結構中，主要的啟動腳本為 start.sh，負責安裝依賴和啟動服務。

## 技術深入分析

> [!note]- 展開深入分析
> Siftly 的核心演算法包括實體提取和語義標記，這些功能使得書籤能夠被更智能地分類和搜尋。效能方面，該工具能夠在本地快速處理書籤數據，具體的性能數據尚未提供。關鍵設計取捨在於選擇了本地運行而非雲端解決方案，這雖然提升了隱私性，但也限制了多設備的同步能力。與其他雲端書籤管理工具相比，Siftly 的本地化特性使其在數據安全性上更具優勢，但在功能上可能不如大型商業工具全面。

## 優缺點分析

> [!success] 優點
> - 完全本地運行，保障用戶隱私。
> - 無需訂閱費用，降低使用成本。
> - AI 驅動的標記和分類功能，提升書籤管理效率。

> [!danger] 缺點
> - 不支援雲端同步，對於需要多設備訪問的用戶不便。
> - 依賴於 Claude Code CLI，對於不熟悉的用戶有學習曲線。
> - 功能相對於大型商業工具較為簡單，可能無法滿足高級需求。

> [!warning] 注意事項
> - 需要 Node.js 18+ 環境。
> - 不支援雲端同步，所有數據必須本地管理。
> - AI 功能依賴於 Claude Code CLI，需先安裝並登入。

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

相關概念：[[自動化測試]] · [[資料視覺化]] · [[API 設計]]

[GitHub](https://github.com/viperrcrypto/Siftly)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "生產力" AND file.name != "viperrcrypto--Siftly"
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

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，1.4k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，1.4k stars
