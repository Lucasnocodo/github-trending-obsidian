---
repo: ParthJadhav/app-store-screenshots
url: https://github.com/ParthJadhav/app-store-screenshots
owner: ParthJadhav
owner_type: User
language: N/A
license: N/A
description: "end to end app store screenshot creation using AI"
homepage: "https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots"
stars: 922
stars_per_day: 307
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
use_case: "自動生成符合 Apple 規範的 App Store 截圖，省去手動調整的麻煩。"
priority: medium
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
  - "自動生成符合 Apple 規範的 App Store 截圖，省去手動調整的麻煩。"
---

# app-store-screenshots

**893** stars · **298** stars/天 · 建立 3 天前 · N/A · 未標註授權

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 自動生成符合 Apple 規範的 App Store 截圖，省去手動調整的麻煩。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (298 stars/day)
> **適合** 希望自動化生成 App Store 截圖的 iOS 開發者和行銷人員。
> **一句話重點** 這個專案讓截圖生成變得簡單且高效，特別適合需要快速上架的開發者。

> [!abstract] 核心創新
> 這個專案的創新在於將 App Store 截圖生成過程自動化，並強調截圖的廣告性質。

## 專案簡介

這個專案提供了一個 AI 驅動的工具，能夠自動生成 iOS 應用的 App Store 截圖。使用者只需提供應用的品牌、功能和風格偏好，系統會自動搭建一個 Next.js 專案，設計出廣告風格的截圖，並以 Apple 所需的四種解析度導出 PNG 圖片。技術上，它使用了 Next.js 作為開發伺服器，並利用 TypeScript 和 Tailwind CSS 進行樣式設計，最終通過 html-to-image 將設計轉換為 PNG 格式。與傳統的截圖工具相比，這個工具強調的是截圖的廣告性質，而非僅僅是 UI 展示，這使得它在市場推廣上更具優勢。實際使用中，這個工具能夠快速生成高品質的截圖，但需要 Node.js 18+ 的環境來運行。這個專案目前處於穩定階段，適合中小型團隊使用，特別是那些希望快速上架應用的開發者。建議在需要快速生成 App Store 截圖時使用，但如果需要高度自訂的設計，則可能需要考慮其他工具。

**技術棧**：`Next.js` · `TypeScript` · `Tailwind CSS` · `html-to-image` · `React`

## 重點功能

- 自動生成截圖 — 根據用戶提供的品牌和功能自動設計截圖。
- 多種解析度導出 — 支援 6.9"、6.5"、6.3" 和 6.1" 四種 Apple 所需的解析度。
- 廣告風格設計 — 每個截圖都以廣告為導向，而非僅僅展示 UI。
- 簡單的安裝方式 — 可通過 npx skills 直接安裝，方便快捷。
- 即時預覽和導出 — 使用者可以在開發伺服器中即時預覽截圖並導出 PNG。

## 快速開始

1. 使用 npx 安裝
```bash
npx skills add ParthJadhav/app-store-screenshots
```
2. 啟動開發伺服器
```bash
npm run dev
```
3. 生成截圖
```bash
> Build App Store screenshots for my app
```

## 程式碼範例

```bash
> Build App Store screenshots for my app
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 ParthJadhav 在開源社群中活躍，這個專案正好切中許多開發者對於快速生成 App Store 截圖的需求。隨著更多開發者尋求自動化工具來提升工作效率，這個專案的推出恰逢其時，尤其是在 iOS 應用開發逐漸增多的背景下。

## 適合誰使用

**目標受眾**：希望自動化生成 App Store 截圖的 iOS 開發者和行銷人員。

> [!example] 使用場景
> - 行銷專員用它來快速生成 iOS 應用的市場推廣截圖，因為手動設計截圖耗時且容易出錯。
> - iOS 開發者用它來自動化 App Store 截圖的生成流程，因為這樣可以節省大量的設計時間，專注於開發功能。
> - 產品經理用它來測試不同的截圖設計，因為可以快速生成多個版本進行 A/B 測試，提升應用的下載率。

## 架構分析

這是一個基於 Next.js 的單體應用，使用者輸入 → 系統處理生成截圖 → 輸出 PNG 圖片。關鍵技術決策是使用 AI 來自動生成截圖內容，並利用 Next.js 提供的靜態圖像服務。專案的目錄結構簡單，主要由一個 `page.tsx` 文件組成，負責截圖生成邏輯。

## 技術深入分析

> [!note]- 展開深入分析
> 這個專案的核心在於使用 AI 來自動生成 App Store 截圖，並且強調廣告性質的設計。透過 Next.js 提供的靜態圖像服務，能夠快速渲染並導出高解析度的 PNG 圖片。效能上，這個工具能夠在短時間內生成多個截圖，並且支援不同解析度的導出，滿足 Apple 的要求。設計上，選擇了廣告風格的布局，這與傳統的 UI 展示截圖工具形成鮮明對比，能夠更好地吸引潛在用戶。

## 優缺點分析

> [!success] 優點
> - 快速生成符合 Apple 規範的截圖，節省時間。
> - 自動化設計過程，減少人為錯誤。
> - 廣告風格設計提升市場吸引力。
> - 支援多種解析度，滿足不同需求。

> [!danger] 缺點
> - 對於高度自訂的設計需求可能不夠靈活。
> - 需要特定的 Node.js 環境，增加安裝複雜度。
> - 目前僅支援 iOS 應用，無法用於其他平台。
> - 截圖的設計風格可能不符合所有品牌需求。

> [!warning] 注意事項
> - 僅支援 Node.js 18+ 環境。
> - 需要安裝其他依賴如 bun、pnpm、yarn 或 npm。
> - 截圖設計的靈活性有限，對於高度自訂的需求可能不夠滿足。
> - 目前僅支援 iOS 應用的截圖生成。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[app-screenshot-generator--app-screenshot-generator\|app-screenshot-generator/app-screenshot-generator]] | 這個工具同樣提供截圖生成，但更注重於 UI 展示，而非廣告風格設計。 |
| [[screenshot-generator--screenshot-generator\|screenshot-generator/screenshot-generator]] | 這個工具提供多平台截圖生成，但缺乏自動化的 AI 驅動功能。 |

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

**社群活躍度**：社群活躍度中等，持續有更新和維護。
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

相關概念：[[自動化測試]] · [[API 設計]] · [[資料視覺化]]

相關專案：[[app-screenshot-generator--app-screenshot-generator|app-screenshot-generator/app-screenshot-generator]] · [[screenshot-generator--screenshot-generator|screenshot-generator/screenshot-generator]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

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

- [[2026-03-11|2026-03-11]] — 再次上榜，922 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，653 stars
