---
repo: ParthJadhav/app-store-screenshots
url: https://github.com/ParthJadhav/app-store-screenshots
owner: ParthJadhav
owner_type: User
language: N/A
license: N/A
description: "end to end app store screenshot creation using AI"
homepage: "https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots"
stars: 764
stars_per_day: 255
forks: 55
open_issues: 1
created: 2026-03-07
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
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
  - "利用 AI 自動生成 iOS 應用的 App Store 截圖，簡化開發流程。"
---

# app-store-screenshots

**764** stars · **255** stars/天 · 建立 3 天前 · N/A · 未標註授權

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 利用 AI 自動生成 iOS 應用的 App Store 截圖，簡化開發流程。

> [!abstract] 核心創新
> 自動生成廣告風格的 App Store 截圖，提升市場吸引力。

## 專案簡介

這個專案提供了一個 AI 驅動的工具，用於自動生成 iOS 應用的 App Store 截圖。它使用 Next.js 框架，並根據用戶提供的品牌和風格偏好設計截圖。與其他截圖生成工具相比，這個專案的獨特之處在於它專注於生成廣告風格的截圖，而非單純的 UI 展示。使用者只需提供基本信息，工具便會自動生成符合 Apple 規範的多種尺寸截圖。雖然這個工具能夠大幅減少手動設計的時間，但仍需注意生成的內容可能需要進一步的人工調整以達到最佳效果。

**技術棧**：`Next.js`

## 重點功能

- 自動生成符合 Apple 規範的多種尺寸截圖。
- 根據用戶提供的品牌和風格偏好設計截圖。
- 使用 Next.js 框架，便於整合到現有專案中。
- 生成廣告風格的截圖，提升市場吸引力。
- 支持多種 AI 驅動的編碼代理進行截圖生成。

## 快速開始

1. 使用 npx 安裝技能
```bash
npx skills add ParthJadhav/app-store-screenshots
```
2. 啟動截圖生成
```bash
告訴 AI 生成 App Store 截圖。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著移動應用市場的競爭加劇，開發者對於自動化工具的需求不斷增加。這個專案切合了開發者希望快速生成高品質截圖的需求，並且利用 AI 技術提升了效率。社群的支持和不斷改進也使得這個工具受到了廣泛關注。

## 適合誰使用

**目標受眾**：需要快速生成 iOS 應用截圖的開發者和市場行銷人員。

> [!example] 使用場景
> - 開發者 用它來 自動生成 App Store 截圖，因為 可以節省設計時間並提高效率。
> - 市場行銷人員 用它來 創建吸引人的截圖，因為 能夠快速生成符合品牌風格的內容。
> - 產品經理 用它來 確保截圖符合 Apple 規範，因為 自動生成的截圖已經考慮到尺寸要求。

## 架構分析

專案基於 Next.js，通過用戶提供的品牌和風格偏好生成截圖，並支持多種 AI 編碼代理進行生成。資料流是 用戶輸入 → AI 生成請求 → 生成截圖 → 輸出到指定格式。

## 優缺點分析

> [!success] 優點
> - 自動生成截圖，節省設計時間。
> - 生成的截圖符合 Apple 規範，減少手動調整。
> - 支持多種 AI 編碼代理，靈活性高。

> [!danger] 缺點
> - 生成內容可能需要進一步的人工調整。
> - 僅支援 iOS 應用，對其他平台不適用。
> - 需要特定模擬器來捕捉截圖，增加使用門檻。

> [!warning] 注意事項
> - 生成的內容可能需要進一步的人工調整。
> - 僅支援 iOS 應用截圖，對於其他平台不適用。
> - 需要使用 6.1 吋模擬器來捕捉截圖。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Screenshot Generator | 功能較為單一，無法自動生成廣告風格截圖。 |
| Mockup Generator | 專注於生成 UI 展示，而非市場推廣截圖。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 55 |
| Open Issues | 1 |
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
> The entire generator is a **single `page.tsx` file**. Run the dev s

## 延伸閱讀

相關概念：[[移動應用開發]] · [[市場行銷]] · [[自動化設計工具]]

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

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，653 stars
