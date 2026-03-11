---
repo: ParthJadhav/app-store-screenshots
url: https://github.com/ParthJadhav/app-store-screenshots
owner: ParthJadhav
owner_type: User
language: N/A
license: N/A
description: "end to end app store screenshot creation using AI"
homepage: "https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots"
stars: 978
stars_per_day: 326
forks: 63
open_issues: 2
created: 2026-03-07
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "自動生成符合 Apple 規範的 iOS 應用程式商店截圖，省去手動設計的麻煩。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
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
  - "自動生成符合 Apple 規範的 iOS 應用程式商店截圖，省去手動設計的麻煩。"
---

# app-store-screenshots

**978** stars · **326** stars/天 · 建立 3 天前 · N/A · 未標註授權

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 自動生成符合 Apple 規範的 iOS 應用程式商店截圖，省去手動設計的麻煩。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (326 stars/day)
> **授權** 未標註授權 (風險較高)
> **適合** 需要快速生成 iOS 應用商店截圖但不擅長設計的獨立開發者或小型團隊。
> **一句話重點** 這個專案展示了如何利用 AI 自動化截圖生成，讓開發者專注於應用本身而非行銷素材的設計。

> [!abstract] 核心創新
> 這個專案的創新在於將 AI 與截圖生成流程結合，實現自動化設計。

## 專案簡介

這個專案利用 AI 生成 iOS 應用程式的商店截圖，過程中會詢問用戶關於應用的品牌、功能和風格偏好。它會搭建一個 Next.js 專案，設計出廣告風格的截圖，並以全解析度輸出到 Apple 所需的各種尺寸。技術上，專案使用了 Next.js 作為開發伺服器，並結合 TypeScript 和 Tailwind CSS 進行樣式設計。與其他截圖生成工具相比，它專注於廣告風格的設計，而非單純的 UI 展示，這使得截圖更具吸引力。使用者只需提供應用的基本資訊，系統就會自動生成截圖，並以 PNG 格式導出，支持所有 Apple 所需的尺寸。這個工具目前處於穩定階段，適合中小型開發團隊使用，尤其是需要快速產出市場行銷素材的團隊。建議在需要快速生成商店截圖時使用，但如果需要更高的自訂化，可能需要考慮其他工具。

**技術棧**：`Next.js` · `TypeScript` · `Tailwind CSS`

## 重點功能

- 自動化截圖生成 — 根據用戶提供的品牌和功能資訊自動生成截圖。
- 多尺寸輸出 — 支持 Apple 所需的四種截圖尺寸（6.9", 6.5", 6.3", 6.1"）。
- 廣告風格設計 — 截圖設計為廣告風格，而非單純的 UI 展示，提升吸引力。
- 簡易安裝 — 使用 npx skills 命令輕鬆安裝，無需複雜的配置。
- 內建 iPhone 模擬框架 — 提供 mockup.png 以便於截圖的展示。

## 快速開始

1. 使用 npx 安裝
```bash
npx skills add ParthJadhav/app-store-screenshots
```
2. 啟動截圖生成
```bash
告訴 Claude Code 生成商店截圖
```
3. 導出截圖
```bash
在瀏覽器中點擊截圖以導出為 PNG
```

## 程式碼範例

```bash
> Build App Store screenshots for my app
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 ParthJadhav 之前有開發過多個受歡迎的開源專案，這次的工具解決了開發者在截圖設計上的繁瑣流程，特別是對於不擅長設計的開發者來說。這個專案的推出正好符合了市場對於簡化開發流程的需求，並且在社群中引起了廣泛的討論。最近的推廣活動和社群的反饋也讓這個工具獲得了更多的曝光。

## 適合誰使用

**目標受眾**：需要快速生成 iOS 應用商店截圖但不擅長設計的獨立開發者或小型團隊。

> [!example] 使用場景
> - 行銷專員用它來快速生成 iOS 應用的商店截圖，因為手動設計截圖耗時且不具吸引力。
> - 獨立開發者用它來自動化截圖生成流程，因為這樣可以節省大量的設計時間，讓他們專注於開發功能。
> - 產品經理用它來測試不同的截圖設計，因為可以快速生成多種版本以便於 A/B 測試。

## 架構分析

這是一個單體應用，使用 Next.js 作為開發框架。用戶輸入 → 系統詢問品牌和功能資訊 → 生成截圖並導出。關鍵技術決策包括使用 TypeScript 確保代碼的類型安全，以及使用 Tailwind CSS 進行樣式設計。專案目錄結構簡單，主要由一個 layout.tsx 和一個 page.tsx 文件組成。

## 技術深入分析

> [!note]- 展開深入分析
> 這個工具的核心在於 AI 驅動的截圖生成，通過詢問用戶的品牌和功能需求來自動設計截圖。效能上，生成的截圖在各種 Apple 所需的解析度下都能保持高品質。選擇 Next.js 作為框架使得開發和靜態圖像服務變得高效，而使用 TypeScript 則提高了代碼的可維護性。與其他截圖工具相比，這個專案專注於廣告風格的設計，這是其主要的技術差異。

## 優缺點分析

> [!success] 優點
> - 自動化生成截圖，節省時間和精力。
> - 支持多種 Apple 所需的截圖尺寸，符合上架要求。
> - 設計風格為廣告導向，提升市場吸引力。

> [!danger] 缺點
> - 對於高度自訂化需求的用戶可能不夠靈活。
> - 需要特定的模擬器來捕捉截圖，增加了使用門檻。
> - 目前僅支持 iOS 應用，無法應用於 Android。

> [!warning] 注意事項
> - 僅支持 iOS 應用的截圖生成。
> - 需要使用 6.1 吋模擬器來捕捉起始截圖，否則可能需要後續調整。
> - 對於高度自訂化的截圖設計支持有限。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 63 |
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

**社群活躍度**：社群活躍度中等，持續有更新和討論。
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

相關概念：[[自動化]] · [[行銷]] · [[UI/UX設計]]

相關專案：[[app-screenshot-generator--app-screenshot-generator|app-screenshot-generator/app-screenshot-generator]] · [[screenshot-generator--screenshot-generator|screenshot-generator/screenshot-generator]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[binance--binance-skills-hub|binance/binance-skills-hub]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，922 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，653 stars
