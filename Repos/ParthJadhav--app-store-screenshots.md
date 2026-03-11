---
repo: ParthJadhav/app-store-screenshots
url: https://github.com/ParthJadhav/app-store-screenshots
owner: ParthJadhav
owner_type: User
language: N/A
license: N/A
description: "end to end app store screenshot creation using AI"
homepage: "https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots"
stars: 1006
stars_per_day: 335
forks: 64
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
use_case: "自動生成 iOS 應用的 App Store 截圖，讓行銷更有效率。"
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
  - "自動生成 iOS 應用的 App Store 截圖，讓行銷更有效率。"
---

# app-store-screenshots

**1.0k** stars · **335** stars/天 · 建立 3 天前 · N/A · 未標註授權

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 自動生成 iOS 應用的 App Store 截圖，讓行銷更有效率。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (335 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險)
> **適合** 需要快速生成高品質 iOS 應用截圖的獨立開發者或小型團隊。
> **一句話重點** 這個專案證明了自動化工具能有效提升行銷素材的生成效率。

> [!abstract] 核心創新
> 這個專案將截圖設計轉化為廣告創作，提升了行銷效果。

## 專案簡介

這個專案透過 AI 助手生成 iOS 應用的 App Store 截圖，使用者只需提供應用的品牌、功能和風格偏好，然後它會自動設計並導出符合 Apple 要求的截圖。核心流程是：使用者輸入應用資訊 → 系統生成 Next.js 專案 → 自動設計並導出 PNG 格式的截圖。技術上，它依賴 Next.js 作為開發伺服器，使用 TypeScript 確保型別安全，並透過 Tailwind CSS 進行樣式設計，最終利用 html-to-image 導出精確解析度的圖片。與其他截圖工具相比，這個專案專注於將截圖設計為廣告而非單純的 UI 展示，這使得每個截圖都能更有效地吸引潛在用戶。它能生成的截圖尺寸包括 6.1 吋、6.3 吋、6.5 吋和 6.9 吋，並且所有截圖都在 1320x2868 的解析度下設計。這個工具適合需要快速生成高品質行銷素材的開發者，尤其是針對小型團隊或個人開發者。整體來說，這是一個穩定的專案，值得現在就使用，特別是在需要快速迭代行銷策略的情況下。若你正在開發 iOS 應用並需要專業的截圖，這個工具會是個不錯的選擇；但如果你需要更複雜的設計功能，可能需要考慮其他設計工具。

**技術棧**：`Next.js` · `TypeScript` · `Tailwind CSS`

## 重點功能

- 自動生成截圖 — 根據用戶提供的品牌和功能信息，自動設計並導出截圖。
- 多種解析度支持 — 支持 6.1 吋、6.3 吋、6.5 吋和 6.9 吋的截圖導出。
- 廣告風格設計 — 每個截圖都設計為廣告，強調行銷效果。
- 即時預覽 — 在開發伺服器中運行後，可以即時查看截圖效果。
- 簡單的安裝方式 — 透過 npx 一行指令即可安裝，方便快捷。

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
> ParthJadhav 是一位活躍的開源貢獻者，過去也有其他知名專案。這個工具解決了開發者在截圖設計上的繁瑣流程，讓他們能專注於開發而非設計。近期在社群中引起討論，因為許多開發者尋求簡化行銷素材的生成流程。技術生態的變化使得 AI 助手的使用變得更為普遍，這也促進了這個工具的接受度。

## 適合誰使用

**目標受眾**：需要快速生成高品質 iOS 應用截圖的獨立開發者或小型團隊。

> [!example] 使用場景
> - iOS 開發者用它來快速生成 App Store 截圖，因為這樣能節省 50% 的設計時間，並且提高截圖的行銷效果。
> - 行銷專員用它來創建吸引人的應用截圖，因為這些截圖設計為廣告風格，能更有效地吸引潛在用戶。
> - 產品經理用它來自動化截圖生成流程，因為這樣可以減少手動調整的需求，並確保每次生成的截圖都符合 Apple 的要求。

## 架構分析

這是一個單體應用，核心資料流為：用戶輸入 → 系統生成截圖設計 → 輸出 PNG 格式的截圖。使用 Next.js 作為開發伺服器，並且所有截圖生成邏輯集中在單一的 `page.tsx` 檔案中。專案目錄結構簡單，主要包括 public 和 src/app 兩個資料夾，分別存放靜態資源和應用邏輯。

## 技術深入分析

這個專案的核心技術機制是利用 Next.js 和 React 來構建一個簡單的截圖生成器，並通過 TypeScript 確保代碼的型別安全。它的效能特性在於能夠快速生成多個解析度的截圖，並且在開發伺服器中即時預覽，這對於開發者來說非常方便。選擇 Next.js 作為框架的好處在於其靜態資源的處理能力和開發效率，而使用 Tailwind CSS 則使得樣式設計變得靈活且易於維護。技術風險方面，若未來需要擴展功能或支持更多平台，可能需要重構部分代碼，這會帶來一定的技術債。整體來看，這是一個針對特定需求的專案，未來若能加入更多自定義設計選項，將會更具吸引力。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝和使用的詳細說明，並提供了範例指令。安裝過程順暢，使用 npx 指令安裝非常方便。文件中沒有多語言支持，但內容簡潔易懂，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 快速生成高品質截圖，節省時間。
> - 設計風格符合行銷需求，提升應用曝光率。
> - 安裝和使用過程簡單，適合各種開發者。

> [!danger] 缺點
> - 功能相對簡單，無法滿足複雜設計需求。
> - 需要用戶提供足夠的品牌和設計信息。
> - 僅支持 iOS 應用，對於其他平台不適用。

> [!warning] 注意事項
> - 僅支持 Node.js 18+。
> - 需要安裝 Next.js 和其他依賴。
> - 生成的截圖風格受限於用戶提供的設計偏好。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 64 |
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

**社群活躍度**：社群活躍，定期更新和回應問題。
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

相關概念：[[自動化]] · [[行銷]] · [[UI/UX 設計]]

相關專案：[[app-screenshot-generator--app-screenshot-generator|app-screenshot-generator/app-screenshot-generator]] · [[screenshot-generator--screenshot-generator|screenshot-generator/screenshot-generator]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]]

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

- [[2026-03-11|2026-03-11]] — 再次上榜，922 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，653 stars
