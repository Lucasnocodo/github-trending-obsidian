---
repo: ParthJadhav/app-store-screenshots
url: https://github.com/ParthJadhav/app-store-screenshots
owner: ParthJadhav
owner_type: User
language: N/A
license: N/A
description: "end to end app store screenshot creation using AI"
homepage: "https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots"
stars: 723
stars_per_day: 241
forks: 50
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
  - 開發工具
  - agentic_ai
  - apple
  - appstore
  - automate
  - claude
aliases:
  - "app-store-screenshots"
  - "ParthJadhav/app-store-screenshots"
  - "使用 AI 自動生成 iOS 應用的 App Store 截圖，簡化開發流程。"
---

# app-store-screenshots

**723** stars · **241** stars/天 · 建立 3 天前 · N/A · 未標註授權

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 使用 AI 自動生成 iOS 應用的 App Store 截圖，簡化開發流程。

> [!abstract] 核心創新
> 這個專案能夠自動生成符合 Apple 要求的高品質 App Store 截圖。

## 專案簡介

這個專案提供了一個 AI 驅動的工具，能夠自動生成 iOS 應用的 App Store 截圖。它通過詢問用戶的品牌和風格偏好，然後生成符合 Apple 要求的多種尺寸的截圖。與傳統的截圖生成工具相比，這個專案特別強調設計的廣告風格，而非僅僅是 UI 展示。實際使用中，這個工具能夠節省開發者大量的時間和精力，但需要用戶提供必要的品牌信息和風格指導。對於需要快速生成高品質截圖的開發者來說，這是一個非常實用的工具。

**技術棧**：`Next.js`

## 重點功能

- 自動生成符合 Apple 要求的多種尺寸截圖。
- 設計截圖為廣告風格，提升市場吸引力。
- 支持用戶自定義品牌和風格偏好。
- 集成 Next.js 項目，便於使用。
- 提供完整的截圖生成流程，簡化設計工作。

## 快速開始

1. 使用 npx 安裝工具
```bash
npx skills add ParthJadhav/app-store-screenshots
```
2. 啟動截圖生成
```bash
告訴 Claude Code 生成 App Store 截圖。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著移動應用開發的增長，開發者對於高品質截圖的需求也在增加。這個工具正好滿足了這一需求，並且其 AI 驅動的特性讓生成過程更加高效和簡單。

## 適合誰使用

**目標受眾**：需要快速生成高品質 App Store 截圖的 iOS 應用開發者和市場行銷人員。

> [!example] 使用場景
> - 開發者用它來快速生成 App Store 截圖，因為可以節省大量的設計時間。
> - 市場行銷人員用它來創建高品質的廣告風格截圖，因為能夠吸引更多用戶。
> - 初創公司用它來為新應用生成必要的市場材料，因為簡化了整個過程。

## 優缺點分析

> [!success] 優點
> - 能夠快速生成高品質截圖，節省設計時間。
> - 設計風格吸引人，提升市場競爭力。
> - 簡化整個截圖生成流程，易於使用。

> [!danger] 缺點
> - 需要用戶提供品牌信息，否則生成效果可能不佳。
> - 僅限於 iOS 應用，無法擴展到其他平台。
> - 生成的質量可能受限於用戶的指導。

> [!warning] 注意事項
> - 需要用戶提供品牌和風格信息。
> - 僅支持 iOS 應用，無法用於其他平台。
> - 生成的截圖質量依賴於用戶提供的信息。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| AppLaunchpad | AppLaunchpad 更專注於截圖的設計，而本專案強調自動化生成。 |
| Mockup Builder | Mockup Builder 提供更多自定義選項，而本專案則依賴於 AI 的自動生成。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 50 |
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

相關概念：[[移動應用開發]] · [[市場行銷]] · [[AI 設計工具]]

[GitHub](https://github.com/ParthJadhav/app-store-screenshots) · [官方網站](https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，653 stars
