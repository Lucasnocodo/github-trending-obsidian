---
repo: ParthJadhav/app-store-screenshots
url: https://github.com/ParthJadhav/app-store-screenshots
owner: ParthJadhav
owner_type: User
language: N/A
license: N/A
description: "end to end app store screenshot creation using AI"
homepage: "https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots"
stars: 864
stars_per_day: 288
forks: 59
open_issues: 2
created: 2026-03-07
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
  - "topic/agentic_ai"
  - "topic/apple"
  - "topic/appstore"
  - "topic/automate"
  - "topic/claude"
aliases:
  - "app-store-screenshots"
  - "ParthJadhav/app-store-screenshots"
  - "自動生成符合 Apple 要求的 iOS 應用商店截圖，省去手動設計的麻煩。"
---

# app-store-screenshots

**864** stars · **288** stars/天 · 建立 3 天前 · N/A · 未標註授權

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 自動生成符合 Apple 要求的 iOS 應用商店截圖，省去手動設計的麻煩。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (288 stars/day)
> **適合** 需要快速生成高質量 iOS 應用商店截圖的獨立開發者或小型團隊。
> **一句話重點** 這個專案最厲害的在於它將截圖生成自動化，並將設計理念轉向廣告導向，讓開發者能更有效地推廣他們的應用。

> [!abstract] 核心創新
> 這個專案的創新在於將截圖設計視為廣告，而非單純的 UI 展示，提升了截圖的市場吸引力。

## 專案簡介

這個專案利用 AI 助手生成 iOS 應用的商店截圖，過程中會詢問應用的品牌、功能和風格偏好，然後自動搭建一個 Next.js 專案來設計截圖。它會將截圖設計為廣告風格，而非單純的 UI 展示，並使用經驗法則撰寫吸引人的文案。生成的截圖會以 PNG 格式導出，並符合 Apple 所需的四種解析度（6.9", 6.5", 6.3", 6.1"）。與其他截圖生成工具相比，它專注於廣告效果而非單純的界面展示，這使得生成的截圖更具吸引力。使用者只需簡單的指令即可生成截圖，並且整個過程無需手動調整圖片大小。這個工具適合需要快速生成高質量截圖的開發者，特別是小型團隊或獨立開發者。建議在有 Node.js 環境的情況下使用，並且對於需要多個解析度截圖的應用特別合適。

**技術棧**：`Next.js` · `TypeScript` · `Tailwind CSS` · `html-to-image` · `React`

## 重點功能

- 自動生成截圖 — 根據用戶提供的品牌和功能信息，自動設計並生成符合 Apple 要求的截圖。
- 廣告風格設計 — 每個截圖都設計成廣告，而非單純的 UI 展示，增加吸引力。
- 多解析度導出 — 支持導出 6.9", 6.5", 6.3", 6.1" 四種解析度的截圖，滿足 Apple 的要求。
- 簡單的指令觸發 — 使用者只需簡單的指令即可生成截圖，無需複雜的設置。
- 基於 Next.js 的架構 — 利用 Next.js 提供的靜態圖像服務和開發伺服器，提升開發效率。

## 快速開始

1. 使用 npx 安裝
```bash
npx skills add ParthJadhav/app-store-screenshots
```
2. 觸發截圖生成
```bash
> Build App Store screenshots for my app
```
3. 運行開發伺服器
```bash
npm run dev
```

## 程式碼範例

```bash
> Build App Store screenshots for my app
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 ParthJadhav 具備 AI 和前端開發背景，這個專案正好切中了開發者對於快速生成應用商店截圖的需求。隨著應用市場競爭加劇，開發者越來越需要高效的工具來提升應用的市場吸引力，這促使了該專案的流行。

## 適合誰使用

**目標受眾**：需要快速生成高質量 iOS 應用商店截圖的獨立開發者或小型團隊。

> [!example] 使用場景
> - iOS 開發者用它來自動生成應用商店截圖，因為這樣可以節省手動設計的時間，並確保截圖符合 Apple 的要求。
> - 行銷人員用它來快速創建吸引人的應用截圖，因為它提供了廣告風格的設計，能有效提升轉換率。
> - 小型團隊用它來簡化截圖生成流程，因為它能自動化整個過程，減少了設計和開發的負擔。

## 架構分析

這是一個基於 Next.js 的單體應用，使用者輸入 → AI 助手處理 → 生成截圖。關鍵技術決策是使用 Next.js 來搭建開發伺服器並提供靜態圖像服務。專案目錄結構簡單，主要由一個 `page.tsx` 文件組成，負責截圖生成邏輯。

## 優缺點分析

> [!success] 優點
> - 快速生成符合 Apple 要求的截圖，節省時間。
> - 廣告風格設計提升了截圖的吸引力，有助於提高下載率。
> - 簡單的使用流程，適合各種技術水平的開發者。

> [!danger] 缺點
> - 對於特定品牌風格的支持可能不足，需用戶自行調整。
> - 僅支援特定的 Node.js 環境，限制了使用範圍。
> - 生成的截圖可能需要進一步的微調以符合品牌需求。

> [!warning] 注意事項
> - 僅支援 Node.js 18+ 環境。
> - 需要安裝 bun、pnpm、yarn 或 npm 作為包管理工具。
> - 截圖設計風格依賴用戶的輸入，可能不符合所有品牌需求。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[app-screenshot-generator--app-screenshot-generator\|app-screenshot-generator/app-screenshot-generator]] | 這個工具也能生成應用截圖，但不具備廣告風格設計的功能，主要集中在 UI 展示上。 |
| [[app-store-screenshot-generator--app-store-screenshot-generator\|app-store-screenshot-generator/app-store-screenshot-generator]] | 雖然同樣可以生成截圖，但缺乏自動化的 AI 助手支持，使用過程較為繁瑣。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 59 |
| Open Issues | 2 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-07 |
| 官方網站 | [Link](https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots) |
| Repo 大小 | 4.5 MB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ParthJadhav](https://github.com/ParthJadhav) | 5 |

## 社群與生態

**社群活躍度**：社群活躍度中等，提供了詳細的文檔和使用說明。
**連結**：[文件](https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots)

## README 摘錄

> [!info]- 展開查看原文 README
> ### NOTE: MAKE SURE TO USE 6.1 INCH simulator to capture starting screenshots
> this will save u from adjusting the images later
> 
> # App Store Screenshots Generator
> 
> A skill for AI-powered coding agents (Claude Code, Cursor, Windsurf, etc.) that generates production-ready App Store screenshots for iOS apps. It scaffolds a Next.js project, designs advertisement-style screenshots, and exports them at all required Apple resolutions.
> 
> ## What it does
> 
> - Asks you about your app's brand, features, and style preferences
> - Scaffolds a minimal Next.js project (or works within an existing one)
> - Designs each screenshot as an **advertisement** — not a UI showcase
> - Writes compelling copy using proven App Store copywriting patterns
> - Renders screenshots at full resolution with a built-in iPhone mockup
> - Exports PNGs at all 4 Apple-required sizes (6.9", 6.5", 6.3", 6.1")
> 
> ## Included assets
> 
> - `mockup.png` — Pre-measured iPhone frame with transparent screen area
> 
> ## Install
> 
> ### Using npx skills (recommended)
> 
> ```bash
> npx skills add ParthJadhav/app-store-screenshots
> ```
> 
> This works with Claude Code, Cursor, Windsurf, OpenCode, Codex, and [40+ other agents](https://github.com/vercel-labs/skills#available-agents).
> 
> Install globally (available across all projects):
> 
> ```bash
> npx skills add ParthJadhav/app-store-screenshots -g
> ```
> 
> Install for a specific agent:
> 
> ```bash
> npx skills add ParthJadhav/app-store-screenshots -a claude-code
> ```
> 
> ### Manual (git clone)
> 
> ```bash
> git clone https://github.com/ParthJadhav/app-store-screenshots ~/.claude/skills/app-store-screenshots
> ```
> 
> ## Usage
> 
> Once installed, the skill triggers automatically when you ask Claude Code to:
> 
> - Build App Store screenshots
> - Generate marketing screenshots for an iOS app
> - Create exportable screenshot assets
> 
> Or just tell Claude Code what you need:
> 
> ```
> > Build App Store screenshots for my app
> ```
> 
> Claude will ask you about your app's screenshots, brand colors, font, features, style direction, and number of slides before building anything.
> 
> ## What gets scaffolded
> 
> If starting from an empty folder, the skill creates:
> 
> ```
> project/
> ├── public/
> │   ├── mockup.png          # iPhone frame (copied from skill)
> │   ├── app-icon.png        # Your app icon
> │   └── screenshots/        # Your app screenshots
> ├── src/app/
> │   ├── layout.tsx          # Font setup
> │   └── page.tsx            # Screenshot generator (single file)
> ├── package.json
> └── ...
> ```
> 
> The entire generator is a **single `page.tsx` file**. Run the dev server, open the browser, click any screenshot to export it as a PNG.
> 
> ## Export sizes
> 
> | Display | Resolution |
> |---------|-----------|
> | 6.9" | 1320 x 2868 |
> | 6.5" | 1284 x 2778 |
> | 6.3" | 1206 x 2622 |
> | 6.1" | 1125 x 2436 |
> 
> Screenshots are designed at 1320x2868 (largest) and scaled down for smaller sizes.
> 
> ## Tech stack
> 
> | Dependency | Purpose |
> |-----------|---------|
> | Next.js | Dev server + static image serving |
> | TypeScript | Type safety |
> | Tailwind CSS | Styling |
> | html-to-image | PNG export at exact resolutions |
> | React | Component composition |
> 
> ## Key design principles
> 
> - **Screenshots are ads, not docs** — each slide sells one idea
> - **Copy follows the "one second" rule** — readable at thumbnail size in the App Store
> - **Layouts vary** — no two adjacent slides share the same phone placement
> - **Style is user-driven** — no hardcoded colors, gradients, or fonts
> 
> ## Requirements
> 
> - Node.js 18+
> - One of: bun, pnpm, yarn, or npm (detected automatically, bun preferred)
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[自動化測試]] · [[資料視覺化]] · [[API 設計]]

相關專案：[[app-screenshot-generator--app-screenshot-generator|app-screenshot-generator/app-screenshot-generator]] · [[app-store-screenshot-generator--app-store-screenshot-generator|app-store-screenshot-generator/app-store-screenshot-generator]]

[GitHub](https://github.com/ParthJadhav/app-store-screenshots) · [官方網站](https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "ParthJadhav--app-store-screenshots"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "ParthJadhav--app-store-screenshots"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，653 stars
