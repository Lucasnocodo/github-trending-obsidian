---
repo: ParthJadhav/app-store-screenshots
url: https://github.com/ParthJadhav/app-store-screenshots
owner: ParthJadhav
owner_type: User
language: N/A
license: N/A
description: "end to end app store screenshot creation using AI"
homepage: "https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots"
stars: 756
stars_per_day: 252
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
  - "利用 AI 自動生成 iOS 應用的 App Store 截圖，簡化設計流程。"
---

# app-store-screenshots

**756** stars · **252** stars/天 · 建立 3 天前 · N/A · 未標註授權

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 利用 AI 自動生成 iOS 應用的 App Store 截圖，簡化設計流程。

> [!abstract] 核心創新
> 自動生成廣告風格的 App Store 截圖，簡化設計流程。

## 專案簡介

這個專案是一個 AI 驅動的工具，專門用於生成 iOS 應用的 App Store 截圖。它會根據用戶提供的品牌和功能信息，自動生成符合 Apple 要求的截圖，並且設計風格更像廣告而非單純的 UI 展示。與其他截圖生成工具相比，這個專案的獨特之處在於它強調廣告風格的設計，並且自動化了整個過程，從項目搭建到最終輸出。實際使用中，用戶只需提供基本信息，工具會自動生成所需的截圖，這大大減少了設計時間。整體來看，這是一個非常適合需要快速生成 App Store 截圖的開發者和設計師的工具。

**技術棧**：`Next.js`

## 重點功能

- 自動生成符合 Apple 要求的 App Store 截圖。
- 根據用戶提供的品牌和功能信息設計截圖。
- 生成廣告風格的截圖，提升市場吸引力。
- 支持多種解析度的截圖輸出。
- 簡化設計流程，節省時間和精力。

## 快速開始

1. 安裝 app-store-screenshots
```bash
npx skills add ParthJadhav/app-store-screenshots
```
2. 啟動截圖生成
```bash
告訴 AI 生成 App Store 截圖
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 iOS 應用開發的普及，開發者對於快速生成高品質截圖的需求增加。這個專案利用 AI 技術簡化了設計流程，吸引了許多開發者的注意。最近的更新和活躍的社群貢獻也讓這個專案受到關注。

## 適合誰使用

**目標受眾**：需要快速生成 iOS 應用 App Store 截圖的開發者和設計師。

> [!example] 使用場景
> - 開發者 用它來 自動生成 App Store 截圖，因為這樣可以節省設計時間。
> - 設計師 用它來 創建廣告風格的截圖，因為這樣能提升應用的市場吸引力。
> - 產品經理 用它來 管理截圖生成流程，因為這樣能確保符合 Apple 的要求。

## 架構分析

專案基於 Next.js 架構，通過用戶輸入生成截圖。資料流是 用戶輸入 → AI 設計 → 截圖生成 → 輸出 PNG 檔案。

## 優缺點分析

> [!success] 優點
> - 自動化截圖生成，節省時間。
> - 廣告風格設計，提升市場吸引力。
> - 支持多種解析度，符合 Apple 要求。

> [!danger] 缺點
> - 需要使用特定模擬器來捕捉截圖。
> - 可能需要手動調整設計元素。
> - 依賴於 AI 的設計能力，可能不符合所有需求。

> [!warning] 注意事項
> - 需要使用 6.1 吋模擬器來捕捉截圖。
> - 可能需要手動調整某些設計元素。
> - 依賴於 AI 的設計能力，可能不符合所有需求。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Screenshot Generator | 功能較為單一，無法生成廣告風格的截圖。 |
| Mockup Generator | 專注於 UI 展示，無法自動生成 App Store 截圖。 |

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

相關概念：[[AI 設計工具]] · [[App Store 優化]] · [[截圖生成]]

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
