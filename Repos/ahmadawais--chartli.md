---
repo: ahmadawais/chartli
url: https://github.com/ahmadawais/chartli
owner: ahmadawais
owner_type: User
language: TypeScript
license: N/A
description: "CLI that turns plain numbers into terminal charts. ascii, spark, bars, columns, heatmap, unicode, braille, svg. "
homepage: "https://x.com/MrAhmadAwais"
stars: 535
stars_per_day: 107
forks: 28
open_issues: 0
created: 2026-03-05
pushed_at: 2026-03-06
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: "0.0.5"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "chartli"
  - "ahmadawais/chartli"
  - "將純數字轉換為終端圖表，讓數據可視化變得簡單。"
---

# chartli

**535** stars · **107** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`個人專案` `0.0.5` `easy-install`

> [!summary] 一句話摘要
> 將純數字轉換為終端圖表，讓數據可視化變得簡單。

> [!abstract] 核心創新
> 提供多種圖表格式的 CLI 工具，讓數據可視化變得簡單而靈活。

## 專案簡介

這個 CLI 工具能將數字文本數據轉換為多種終端圖表格式，如 ASCII、SVG 和熱圖。它使用 TypeScript 和 Rust 實現，並支持多種圖表類型，讓用戶可以根據需求選擇最適合的視覺化方式。與其他類似工具相比，chartli 提供了更豐富的圖表選擇，並且能夠直接從文件或標準輸入讀取數據。實際使用中，chartli 能快速生成圖表，適合需要快速數據可視化的開發者，但對於複雜數據集的支持可能有限。整體來看，這是一個輕量級且功能強大的工具，值得嘗試，特別適合需要在終端中快速展示數據的場景。

**技術棧**：`TypeScript` · `Rust` · `JavaScript`

## 重點功能

- 支持多種圖表類型，包括 ASCII、SVG、熱圖等。
- 可以從文件或標準輸入讀取數據。
- 提供靈活的圖表寬度和高度設置。
- 支持多種顯示模式，如圓形或線條的 SVG 模式。
- 簡單的命令行介面，易於使用。

## 快速開始

1. 直接使用 npx 運行工具
```bash
npx chartli
```
2. 查看幫助文檔
```bash
npx chartli --help
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Ahmad Awais 在開源社群中有一定的知名度，這個工具切中了需要快速數據可視化的需求，特別是在開發和數據分析領域。隨著 CLI 工具的流行，這個專案在短時間內獲得了不少關注。

## 適合誰使用

**目標受眾**：需要在終端中快速生成數據圖表的開發者和數據分析師。

> [!example] 使用場景
> - 數據分析師 用它來 生成數據圖表，因為 可以快速視覺化數據趨勢。
> - 開發者 用它來 在終端中展示性能指標，因為 可以直接從數據文件生成圖表。
> - 教學工作者 用它來 在課堂上展示統計數據，因為 可以輕鬆生成各種圖表格式。

## 優缺點分析

> [!success] 優點
> - 支持多種圖表類型，靈活性高。
> - 命令行介面簡單易用，快速上手。
> - 能直接從文件或標準輸入讀取數據，方便實用。

> [!danger] 缺點
> - 對於複雜數據集的支持可能有限。
> - 需要 Node.js 環境，對某些用戶來說可能不便。

> [!warning] 注意事項
> - 對於複雜數據集的支持可能有限。
> - 需要安裝 Node.js 環境。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 28 |
| Open Issues | 0 |
| 最後推送 | 2026-03-06 |
| 建立日期 | 2026-03-05 |
| 官方網站 | [Link](https://x.com/MrAhmadAwais) |
| Repo 大小 | 60.7 MB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 53
>     "Rust" : 46
>     "JavaScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ahmadawais](https://github.com/ahmadawais) | 23 |

**最新版本**：0.0.5 — v0.0.5 (2026-03-06)

## README 摘錄

> [!info]- 展開查看原文 README
> # chartli
> 
> CLI for rendering charts in terminals from numeric text data. `chartli` turns plain numbers into terminal charts. ascii, spark, bars, columns, heatmap, unicode, braille, svg. 
> 
> ## Install
> 
> Run instantly:
> 
> ```sh
> npx chartli --help
> ```
> 
> Or install globally:
> 
> ```sh
> pnpm add -g chartli
> ```
> 
> Quick start:
> 
> ```sh
> npx chartli
> npx chartli --help
> ```
> 
> ## Usage
> 
> ```sh
> npx chartli [file] [options]
> ```
> 
> ```text
> Usage: chartli [options] [file]
> 
> Render terminal charts from numeric data
> 
> Arguments:
>   file                   Input file (reads from stdin if not provided)
> 
> Options:
>   -v, --version          Output the version number
>   -t, --type       Chart type: svg, ascii, unicode, braille, spark, bars,
>                          columns, heatmap (default: "ascii")
>   -w, --width    Chart width
>   -h, --height   Chart height
>   -m, --mode       SVG mode: circles or lines (default: "circles")
>   --help                 Display help for command
> ```
> 
> ## Types
> 
> - `ascii`
> - `spark`
> - `bars`
> - `columns`
> - `heatmap`
> - `unicode`
> - `braille`
> - `svg`
> 
> ## Example data files
> 
> - `examples/assets/core-single-series.txt`
> - `examples/assets/core-multi-series.txt`
> - `examples/assets/image-data.txt`
> - `examples/assets/image-columns-variant.txt`
> 
> ## Image chart set (text diagrams)
> 
> ### ASCII Line
> 
> ```sh
> pnpm chartli examples/assets/image-data.txt -t ascii -w 24 -h 8
> ```
> 
> ```text
>   1.00 │                       ○
>        │
>        │             ◇         ◇
>        │                  ◆    ●
>   0.50 │                  ●    ◆
>        │    ◇    ◆   ●
>        │         ○   ◆
>   0.00 │◇   ◆    ◇        ◇
>        └────────────────────────
> ```
> 
> ### Sparklines
> 
> ```sh
> pnpm chartli examples/assets/image-data.txt -t spark
> ```
> 
> ```text
> S1 ▁▂▃▄▅▆
> S2 ▁▄▂▇▅█
> S3 ▁▂▄▃▆▅
> S4 ▁▄▂▇▂▇
> ```
> 
> ### Horizontal Bars
> 
> ```sh
> pnpm chartli examples/assets/image-data.txt -t bars -w 28
> ```
> 
> ```text
> S1 |███████████████████         | 0.67
> S2 |▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓| 1.00
> S3 |▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒             | 0.53
> S4 |░░░░░░░░░░░░░░░░░░░░░░░     | 0.83
> ```
> 
> ### Columns
> 
> ```sh
> pnpm chartli examples/assets/image-data.txt -t columns -h 8
> ```
> 
> ```text
>   ▓
>   ▓   ░
>   ▓   ░
> █ ▓   ░
> █ ▓ ▒ ░
> █ ▓ ▒ ░
> █ ▓ ▒ ░
> █ ▓ ▒ ░
> ───────
> 1 2 3 4
> ```
> 
> ### Columns (Variant)
> 
> ```sh
> pnpm chartli examples/assets/image-columns-variant.txt -t columns -h 8
> ```
> 
> ```text
>   ▓   ░
> █ ▓   ░
> █ ▓   ░
> █ ▓ ▒ ░
> █ ▓ ▒ ░
> █ ▓ ▒ ░
> ───────
> 1 2 3 4
> ```
> 
> ### Heatmap
> 
> ```sh
> pnpm chartli examples/assets/image-data.txt -t heatmap
> ```
> 
> ```text
>     C1 C2 C3 C4
> R01
> R02 ░ ▒ ░ ▒
> R03 ░ ░ ▒ ░
> R

## 延伸閱讀

相關概念：[[數據可視化]] · [[命令行工具]] · [[終端應用]]

[GitHub](https://github.com/ahmadawais/chartli) · [官方網站](https://x.com/MrAhmadAwais)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "ahmadawais--chartli"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，532 stars
