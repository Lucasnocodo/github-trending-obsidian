---
repo: viperrcrypto/Siftly
url: https://github.com/viperrcrypto/Siftly
owner: viperrcrypto
owner_type: User
language: TypeScript
license: MIT
description: "Local Twitter/X bookmark organizer with AI categorization and mindmap visualization"
homepage: ""
stars: 1401
stars_per_day: 234
forks: 116
open_issues: 8
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "生產力工具"
release_tag: "v1.0.1"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "將 Twitter/X 書籤轉換為可搜尋、分類的視覺知識庫，完全在本地運行。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-13"
engagement: "low"
verdict: ""
tags:
  - github
  - "category/開發工具"
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
  - "將 Twitter/X 書籤轉換為可搜尋、分類的視覺知識庫，完全在本地運行。"
---

# Siftly

**1.4k** stars · **234** stars/天 · 建立 6 天前 · TypeScript · MIT

`v1.0.1` `easy-install`

> [!summary] 一句話摘要
> 將 Twitter/X 書籤轉換為可搜尋、分類的視覺知識庫，完全在本地運行。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (234 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人
> **適合** 希望在本地管理 Twitter 書籤並利用 AI 進行分類的獨立開發者或小型團隊。
> **一句話重點** Siftly 的設計理念是將 Twitter 書籤管理完全本地化，並利用 AI 提升使用體驗。

> [!abstract] 核心創新
> Siftly 提供了一個完全本地運行的 AI 書籤管理解決方案，無需雲端服務。

## 專案簡介

Siftly 是一個自我託管的 Twitter/X 書籤管理工具，將你的書籤轉換為可搜尋和可視化的知識庫。使用者可以透過內建的書籤工具或控制台腳本導入書籤，然後經過四個階段的 AI 處理：首先提取實體（如 hashtags 和 URL），接著進行視覺分析以識別圖像中的內容，然後生成語義標籤，最後將每個書籤分配到 1 到 3 個類別。這樣一來，用戶可以透過意義而非關鍵字來搜尋書籤，並且以互動式思維導圖的方式視覺化整個書籤圖譜。相較於其他工具，Siftly 的特點在於完全本地運行，無需雲端服務或訂閱，並且支持多種導入方式，無需瀏覽器擴展。它的 AI 分類功能能夠自動運行，並且支持 CSV、JSON 和 ZIP 格式的導出。這個專案目前處於穩定版本，適合需要管理大量 Twitter 書籤的用戶，特別是那些重視隱私和本地存儲的使用者。對於小型團隊或個人使用者來說，這是一個非常有價值的工具，但如果需要更高效的雲端協作，則可能需要考慮其他選擇。

**技術棧**：`TypeScript` · `Next.js` · `Prisma`

## 重點功能

- 四階段 AI 處理 — 包括實體提取、視覺分析、語義標籤生成和分類。
- 本地運行 — 無需雲端服務，所有數據保存在本地。
- 互動式思維導圖 — 以視覺方式探索書籤，提升使用體驗。
- 多種導入方式 — 支持書籤工具和控制台腳本導入，無需瀏覽器擴展。
- 導出功能 — 支持 CSV、JSON 和 ZIP 格式的導出。

## 快速開始

1. 克隆專案並啟動
```bash
git clone https://github.com/viperrcrypto/Siftly.git && cd Siftly && ./start.sh
```
2. 使用 Claude Code CLI 啟動
```bash
git clone https://github.com/viperrcrypto/Siftly.git && claude Siftly/
```
3. 手動設置
```bash
git clone https://github.com/viperrcrypto/Siftly.git && cd Siftly && npm install && npx prisma generate && npx prisma migrate dev --name init && npx next dev
```

## 程式碼範例

```bash
# 導入書籤
# 使用控制台腳本導入 Twitter 書籤
# 在 DevTools 中執行以下腳本

// 複製並粘貼到控制台
const script = `...`;
console.log('執行腳本...');
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 viperrcrypto 是一位活躍的開源貢獻者，這個專案解決了 Twitter 書籤管理的痛點，特別是對於想要本地化管理的用戶。近期在社群媒體上有不少討論，尤其是在隱私和數據安全日益受到重視的背景下，這個工具的需求顯著上升。隨著 AI 技術的普及，這樣的工具在功能上也變得更加可行和實用。

## 適合誰使用

**目標受眾**：希望在本地管理 Twitter 書籤並利用 AI 進行分類的獨立開發者或小型團隊。

> [!example] 使用場景
> - 社群媒體經理用它來整理和分類 Twitter 書籤，因為這樣可以快速找到相關內容，提升工作效率。
> - 內容創作者用它來視覺化自己的靈感來源，因為互動式思維導圖能幫助他們更好地組織和發展創意。
> - 數據分析師用它來分析 Twitter 上的趨勢和話題，因為 AI 標籤化功能可以快速篩選出重要信息。

## 架構分析

Siftly 採用單體架構，所有功能都在一個應用中運行。用戶輸入書籤 → 經過 AI 處理 → 輸出可視化的知識庫。關鍵技術決策包括使用 Next.js 作為前端框架和 Prisma 進行資料庫管理。專案目錄結構中，主要檔案包括 start.sh 和 CLAUDE.md，提供了啟動和配置的詳細說明。

## 技術深入分析

Siftly 的核心技術機制包括一個四階段的 AI 處理管道，能夠從 Twitter 書籤中提取有用信息。它使用實體提取技術來識別 hashtags 和 URL，並且進行視覺分析來提取圖像中的內容。這樣的設計使得 Siftly 能夠處理大量書籤，並生成精確的語義標籤。對於資源需求，Siftly 在本地運行，依賴於用戶的硬體配置，通常需要 Node.js 環境。選擇 TypeScript 和 Next.js 的好處在於能夠快速構建高效的前端應用，但也可能增加學習曲線。隨著使用者數量的增加，如何保持性能和穩定性將是未來的挑戰，特別是在處理大量書籤時可能會遇到性能瓶頸。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了多種安裝和啟動方式。安裝過程相對順暢，但對於新手來說，配置 AI 功能可能會有些困難。文件中沒有多語言支持，主要以英文為主。

## 優缺點分析

> [!success] 優點
> - 完全本地運行，保護用戶隱私。
> - 無需訂閱或雲端服務，降低成本。
> - 提供強大的 AI 驅動分類和搜尋功能。

> [!danger] 缺點
> - 目前僅支援 Node.js 18+，限制了使用者範圍。
> - 需要額外配置才能使用 AI 功能，對新手不友好。
> - 在 Linux/Windows 上的功能不如 macOS 完整。

> [!warning] 注意事項
> - 僅支援 Node.js 18+。
> - 需要 Claude Code CLI 以啟用 AI 功能，否則需手動配置 API 金鑰。
> - 目前僅在 macOS 上自動檢測 Claude CLI，Linux/Windows 需手動配置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具專注於文件同步，而 Siftly 專注於 Twitter 書籤的管理和分類。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 主要用於數據抓取，Siftly 則提供 AI 驅動的書籤組織和視覺化功能。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 116 |
| Open Issues | 8 |
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

**社群活躍度**：社群活躍，持續更新和改進。
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

相關概念：[[自動化]] · [[資料視覺化]] · [[AI 標籤化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[steipete--discrawl|steipete/discrawl]]

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
