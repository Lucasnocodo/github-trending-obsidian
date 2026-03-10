---
repo: ParthJadhav/app-store-screenshots
url: https://github.com/ParthJadhav/app-store-screenshots
owner: ParthJadhav
owner_type: User
language: N/A
license: N/A
description: "end to end app store screenshot creation using AI"
homepage: "https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots"
stars: 840
stars_per_day: 280
forks: 58
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
  - "自動生成 iOS 應用的 App Store 截圖，省去手動設計的麻煩。"
---

# app-store-screenshots

**840** stars · **280** stars/天 · 建立 3 天前 · N/A · 未標註授權

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 自動生成 iOS 應用的 App Store 截圖，省去手動設計的麻煩。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (280 stars/day)
> **適合** 需要快速生成高品質 App Store 截圖的 iOS 應用開發者或市場行銷專員。
> **一句話重點** 這個專案展示了如何利用 AI 自動化生成高品質的 App Store 截圖，讓開發者能夠專注於應用本身的開發。

> [!abstract] 核心創新
> 這個專案能夠自動生成符合 Apple 要求的廣告風格 App Store 截圖，省去手動設計的繁瑣過程。

## 專案簡介

這個專案利用 AI 生成 iOS 應用的 App Store 截圖，過程中會詢問應用的品牌、功能和風格偏好，然後自動搭建一個 Next.js 專案來設計和輸出符合 Apple 要求的截圖。它使用 TypeScript 和 Tailwind CSS 進行開發，並且能夠生成 6.1、6.3、6.5 和 6.9 吋的截圖，確保每個截圖都是以廣告風格設計，而非單純的 UI 展示。與其他工具相比，這個專案專注於生成廣告風格的截圖，並且提供了自動化的設計流程，讓使用者能夠快速獲得高品質的截圖。實際使用中，生成的截圖分辨率達到 1320x2868，並能夠快速導出 PNG 格式的圖片。這個專案目前處於穩定階段，適合需要快速生成 App Store 截圖的小型團隊或獨立開發者。建議在需要大量截圖時使用，但如果只需少量截圖，手動設計可能更為靈活。

**技術棧**：`Next.js` · `TypeScript` · `Tailwind CSS`

## 重點功能

- 自動化截圖生成 — 根據應用品牌和功能自動設計截圖。
- 多種尺寸支持 — 生成 6.1、6.3、6.5 和 6.9 吋的截圖，滿足 Apple 要求。
- 廣告風格設計 — 每個截圖都以廣告為導向，提升應用吸引力。
- 簡單的安裝流程 — 使用 npx 命令輕鬆安裝和使用。
- 完整的 Next.js 專案架構 — 自動生成的專案結構便於進一步開發和擴展。

## 快速開始

1. 使用 npx 安裝
```bash
npx skills add ParthJadhav/app-store-screenshots
```
2. 啟動生成流程
```bash
Claude Code 問我生成 App Store 截圖
```
3. 選擇設計參數
```bash
回答關於品牌顏色、字體和功能的問題
```

## 程式碼範例

```bash
> Build App Store screenshots for my app
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 ParthJadhav 專注於 AI 驅動的開發工具，這個專案切中開發者對於快速生成 App Store 截圖的需求。隨著應用市場競爭加劇，開發者越來越需要高效的工具來提升應用的可見度，這使得此專案在近期獲得了關注。

## 適合誰使用

**目標受眾**：需要快速生成高品質 App Store 截圖的 iOS 應用開發者或市場行銷專員。

> [!example] 使用場景
> - iOS 開發者用它來快速生成 App Store 截圖，因為手動設計耗時且不易達到高品質標準。
> - 市場行銷專員用它來設計廣告風格的截圖，因為這樣可以提升應用在 App Store 的吸引力，增加下載率。
> - 產品經理用它來快速迭代截圖設計，因為能夠根據品牌風格和功能需求自動生成，節省了大量時間。

## 架構分析

這是一個前後端分離的專案，使用 Next.js 作為框架。用戶輸入 → AI 生成截圖設計 → 輸出 PNG 格式的截圖。關鍵技術決策包括使用 TypeScript 進行類型安全和 Tailwind CSS 進行樣式設計。專案目錄結構簡單，主要文件為 page.tsx。

## 優缺點分析

> [!success] 優點
> - 自動化生成截圖，節省時間和精力。
> - 支持多種尺寸，符合 Apple 的要求。
> - 廣告風格設計，提升應用吸引力。

> [!danger] 缺點
> - 僅限於 iOS 應用，無法生成其他平台的截圖。
> - 需要一定的 Node.js 環境配置。
> - 生成的截圖可能需要後續調整以符合具體需求。

> [!warning] 注意事項
> - 僅支持 iOS 應用的截圖生成。
> - 需要 Node.js 18+ 環境。
> - 生成的截圖可能需要根據具體需求進行微調。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 58 |
| Open Issues | 2 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-07 |
| 官方網站 | [Link](https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots) |
| Repo 大小 | 4.5 MB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ParthJadhav](https://github.com/ParthJadhav) | 5 |

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

[GitHub](https://github.com/ParthJadhav/app-store-screenshots) · [官方網站](https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "ParthJadhav--app-store-screenshots"
> SORT stars DESC
> LIMIT 8
> ```

---

## 個人筆記

> [!question]+ 快速評估（第一次看時填寫）
> _填寫後更新 frontmatter 的 `my_rating` 和 `status` 欄位_
> 
> **跟我的工作相關嗎？** 是 / 否 / 間接相關
> **值得花時間試用嗎？** 是 / 以後再說 / 不需要
> **第一印象**：_一句話_

> [!success]- 深度評估（試用後填寫）
> 
> | 項目 | 分數 (1-5) | 備註 |
> | --- | :---: | --- |
> | 實用性 | /5 | |
> | 技術新穎性 | /5 | |
> | 文件品質 | /5 | |
> | 社群活躍度 | /5 | |
> | 上手難度 | /5 | 1=很難 5=很簡單 |
> 
> **成熟度**：早期 / 可用 / 穩定
> **總評**：_整體評價、跟其他工具的比較、推薦給誰..._

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
