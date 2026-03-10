---
repo: viperrcrypto/Siftly
url: https://github.com/viperrcrypto/Siftly
owner: viperrcrypto
owner_type: User
language: TypeScript
license: MIT
description: "Local Twitter/X bookmark organizer with AI categorization and mindmap visualization"
homepage: ""
stars: 1382
stars_per_day: 230
forks: 116
open_issues: 9
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
release_tag: "v1.0.1"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - "topic/ai"
  - "topic/bookmarks"
  - "topic/categorization"
  - "topic/local_first"
  - "topic/mindmap"
aliases:
  - "Siftly"
  - "viperrcrypto/Siftly"
  - "將 Twitter/X 書籤轉換為可搜尋的知識庫，並以 AI 分類和心智圖視覺化。"
---

# Siftly

**1.4k** stars · **230** stars/天 · 建立 6 天前 · TypeScript · MIT

`v1.0.1`

> [!summary] 一句話摘要
> 將 Twitter/X 書籤轉換為可搜尋的知識庫，並以 AI 分類和心智圖視覺化。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (230 stars/day)
> **適合** 需要在本地管理大量 Twitter 書籤並希望利用 AI 分類的獨立開發者或小型團隊。
> **一句話重點** Siftly 的設計不僅是為了管理書籤，更是為了讓使用者能夠以全新的方式探索和理解他們的資料。

> [!abstract] 核心創新
> Siftly 提供了一個完全本地的書籤管理解決方案，結合 AI 驅動的分類和視覺化功能。

## 專案簡介

Siftly 是一個自我託管的 Twitter/X 書籤管理工具，能將你的書籤轉換為可搜尋的視覺知識庫，完全在本地運行，無需雲端或訂閱服務。它的工作流程包括四個階段：首先通過內建的書籤工具匯入書籤，接著進行實體提取，分析圖像內容，然後生成語義標籤，最後進行分類。這個過程中，Siftly 會為每個書籤生成 25-35 個可搜尋的標籤，並將其分配到 1-3 個類別。與其他書籤管理工具相比，Siftly 的獨特之處在於其 AI 驅動的分類和視覺化功能，讓使用者能夠通過意義而非關鍵字來搜尋書籤。使用者可以透過互動式心智圖探索書籤，並以 CSV、JSON 或 ZIP 格式導出資料。這個工具的效能依賴於本地運行，對於需要保護隱私的使用者來說非常合適。Siftly 目前處於穩定版本，適合中小型團隊使用。對於需要管理大量 Twitter 書籤的個人或團隊，這是一個值得考慮的選擇，但如果你需要雲端同步或跨設備訪問，則可能不太適合。

**技術棧**：`TypeScript` · `Next.js` · `Docker`

## 重點功能

- 四階段 AI 流程 — 包括實體提取、視覺分析、語義標籤生成和分類。
- AI 搜尋功能 — 根據意義搜尋書籤，而不僅僅是關鍵字。
- 互動式心智圖 — 視覺化書籤資料，探索書籤之間的關聯。
- 多格式導出 — 支援 CSV、JSON 和 ZIP 格式的資料導出。
- 無需雲端 — 完全在本地運行，保護使用者隱私。

## 快速開始

1. 克隆專案並啟動
```bash
git clone https://github.com/viperrcrypto/Siftly.git && cd Siftly && ./start.sh
```
2. 使用 Claude Code CLI 設定
```bash
git clone https://github.com/viperrcrypto/Siftly.git && claude Siftly/
```
3. 手動安裝
```bash
git clone https://github.com/viperrcrypto/Siftly.git && cd Siftly && npm install && npx prisma generate && npx prisma migrate dev --name init && npx next dev
```

## 程式碼範例

```bash
./start.sh
```

## 為什麼值得關注

> [!tip] 爆紅原因
> Siftly 的作者有著強大的開發背景，專注於解決 Twitter 書籤管理的痛點。隨著社交媒體使用量的增加，許多使用者需要一個本地的解決方案來管理他們的書籤，這正好符合當前的需求。這個專案的推出時間也恰逢許多使用者對隱私和數據安全的重視，讓它在社群中迅速受到關注。

## 適合誰使用

**目標受眾**：需要在本地管理大量 Twitter 書籤並希望利用 AI 分類的獨立開發者或小型團隊。

> [!example] 使用場景
> - 社群經理用它來整理和分類 Twitter 書籤，因為這樣可以快速找到相關內容，提升工作效率。
> - 內容創作者用它來搜尋靈感來源，因為 AI 搜尋功能能根據意義找到相關書籤，而不僅僅是關鍵字。
> - 研究人員用它來視覺化和組織書籤資料，因為心智圖功能可以幫助他們更好地理解資料之間的關聯。

## 架構分析

Siftly 採用前後端分離的架構，使用 Next.js 作為前端框架，Node.js 作為後端服務。用戶輸入書籤 → 系統處理（AI 流程） → 輸出可視化結果。關鍵技術決策包括使用 Prisma 進行資料庫管理和 Claude Code CLI 進行無縫的 AI 認證。專案目錄結構包括 src、public 和 prisma 目錄，分別用於源碼、靜態資源和資料庫配置。

## 優缺點分析

> [!success] 優點
> - 完全本地運行，保護使用者隱私。
> - AI 驅動的分類和搜尋功能，提升書籤管理效率。
> - 互動式心智圖視覺化，幫助使用者理解資料結構。

> [!danger] 缺點
> - 不支援雲端同步，無法在多設備間共享資料。
> - 僅支援特定版本的 Node.js，限制了使用者的選擇。
> - 需要一定的技術背景來進行手動安裝和設定。

> [!warning] 注意事項
> - 僅支援 Node.js 18+。
> - 目前僅在 macOS 上自動偵測 Claude Code CLI，Linux/Windows 需手動設定 API 金鑰。
> - 不支援雲端同步，所有資料均在本地保存。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[notion--notion\|notion/notion]] | Notion 提供更全面的筆記和資料管理功能，但缺乏 Siftly 的 AI 驅動分類和書籤專用功能。 |
| [[raindropio--raindrop\|raindropio/raindrop]] | Raindrop 是雲端書籤管理工具，適合需要跨設備同步的使用者，但不提供本地運行和 AI 分類的選項。 |

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

**社群活躍度**：社群活躍度中等，定期有更新和問題回應。
**連結**：[文件](https://github.com/viperrcrypto/Siftly/wiki)

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

相關概念：[[資料視覺化]] · [[AI]] · [[自動化測試]]

相關專案：[[notion--notion|notion/notion]] · [[raindropio--raindrop|raindropio/raindrop]]

[GitHub](https://github.com/viperrcrypto/Siftly)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "viperrcrypto--Siftly"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，1.4k stars
