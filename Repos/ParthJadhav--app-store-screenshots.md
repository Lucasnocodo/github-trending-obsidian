---
repo: ParthJadhav/app-store-screenshots
url: https://github.com/ParthJadhav/app-store-screenshots
owner: ParthJadhav
owner_type: User
language: N/A
license: N/A
description: "end to end app store screenshot creation using AI"
homepage: "https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots"
stars: 797
stars_per_day: 266
forks: 56
open_issues: 2
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
  - "利用 AI 自動生成 iOS 應用的 App Store 截圖，節省時間和精力。"
---

# app-store-screenshots

**797** stars · **266** stars/天 · 建立 3 天前 · N/A · 未標註授權

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 利用 AI 自動生成 iOS 應用的 App Store 截圖，節省時間和精力。

> [!abstract] 核心創新
> 提供一個 AI 驅動的截圖生成工具，結合設計和文案建議。

## 專案簡介

這個專案是一個 AI 驅動的工具，能夠自動生成 iOS 應用的 App Store 截圖。它會詢問用戶關於應用的品牌、功能和風格偏好，然後自動搭建一個 Next.js 專案，設計出廣告風格的截圖並導出到所有 Apple 要求的解析度。與其他截圖生成工具相比，這個專案的獨特之處在於它不僅生成截圖，還能提供完整的設計和文案建議。實際使用中，這個工具能夠節省大量時間，但需要用戶提供品牌和功能的詳細資訊。對於開發者來說，這是一個非常實用的工具，特別是在準備上架應用時。

**技術棧**：`Next.js`

## 重點功能

- 自動生成 iOS 應用的 App Store 截圖。
- 提供廣告風格的設計，而非單純的 UI 展示。
- 能夠導出所有 Apple 要求的解析度。
- 詢問用戶品牌、功能和風格偏好以生成截圖。
- 整合 Next.js 專案，便於使用和擴展。

## 快速開始

1. 使用 npx 安裝技能
```bash
npx skills add ParthJadhav/app-store-screenshots
```
2. 啟動生成截圖的指令
```bash
> Build App Store screenshots for my app
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著應用開發的需求增加，開發者對於快速生成高品質截圖的需求也隨之上升。這個專案的作者利用 AI 技術來解決這個痛點，吸引了許多開發者的注意。

## 適合誰使用

**目標受眾**：需要快速生成 App Store 截圖的 iOS 應用開發者和市場行銷人員。

> [!example] 使用場景
> - 開發者 用它來 自動生成 App Store 截圖，因為這樣可以節省大量時間和精力。
> - 市場行銷人員 用它來 設計應用的廣告截圖，因為它提供了專業的文案建議。
> - 產品經理 用它來 確保截圖符合 Apple 的要求，因為它自動導出所有必要的解析度。

## 架構分析

專案基於 Next.js 架構，前端用於生成截圖，後端處理用戶輸入和截圖設計。資料流是 用戶輸入 → AI 設計 → 截圖生成 → 導出到指定格式。

## 優缺點分析

> [!success] 優點
> - 能夠自動生成高品質的 App Store 截圖。
> - 提供專業的文案建議，提升應用的市場競爭力。
> - 整合 Next.js，便於使用和擴展。

> [!danger] 缺點
> - 需要用戶提供詳細的品牌和功能資訊。
> - 僅適用於 iOS 應用，無法生成 Android 截圖。
> - 生成的截圖可能需要用戶進一步的調整和確認。

> [!warning] 注意事項
> - 需要用戶提供詳細的品牌和功能資訊。
> - 僅適用於 iOS 應用，無法生成 Android 截圖。
> - 生成的截圖需要用戶進一步的調整和確認。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Screenshot Generator | 其他工具可能不提供品牌和文案建議，僅專注於截圖生成。 |
| AppLaunchpad | AppLaunchpad 提供更全面的應用上架服務，而本專案專注於截圖生成。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 56 |
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
> The entire generator is a **single `page.tsx` file**. Run the dev s

## 延伸閱讀

相關概念：[[資料視覺化]] · [[自動化測試]] · [[API 設計]]

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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，653 stars
