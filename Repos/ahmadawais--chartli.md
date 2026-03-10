---
repo: ahmadawais/chartli
url: https://github.com/ahmadawais/chartli
owner: ahmadawais
owner_type: User
language: TypeScript
license: N/A
description: "CLI that turns plain numbers into terminal charts. ascii, spark, bars, columns, heatmap, unicode, braille, svg. "
homepage: "https://x.com/MrAhmadAwais"
stars: 534
stars_per_day: 107
forks: 28
open_issues: 0
created: 2026-03-05
pushed_at: 2026-03-06
first_seen: 2026-03-10
week: "2026-W11"
category: "CLI 工具"
release_tag: "0.0.5"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - cli_工具
  - typescript
aliases:
  - "chartli"
  - "ahmadawais/chartli"
  - "將純數字轉換為終端圖表，讓數據可視化變得簡單。"
---

# chartli

**534** stars · **107** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`個人專案` `0.0.5` `easy-install`

> [!summary] 一句話摘要
> 將純數字轉換為終端圖表，讓數據可視化變得簡單。

> [!abstract] 核心創新
> chartli 提供了一個簡單的 CLI 工具，能快速將數字數據轉換為多種終端圖表。

## 專案簡介

這個 CLI 工具能將純數字數據轉換為各種終端圖表，如 ASCII、條形圖和熱圖。它使用 TypeScript 和 Rust 開發，並提供多種圖表類型的選擇，讓用戶可以根據需求自定義輸出格式。與其他圖表工具相比，chartli 的特點在於其簡單的命令行介面和即時渲染能力，讓用戶能快速生成圖表而無需複雜的設置。實際使用中，chartli 可以輕鬆處理不同格式的數據，並且支持從標準輸入讀取數據。這個工具非常適合需要快速視覺化數據的開發者和數據分析師，尤其是在終端環境中。整體來說，chartli 的簡單性和靈活性使其值得一試，特別是對於需要快速生成圖表的場景。

**技術棧**：`TypeScript` · `Rust` · `JavaScript`

## 重點功能

- 支持多種圖表類型，如 ASCII、條形圖和熱圖。
- 可從標準輸入讀取數據，方便集成到其他工具中。
- 提供即時渲染功能，快速生成圖表。
- 支持自定義圖表寬度和高度。
- 簡單的命令行介面，易於使用。

## 快速開始

1. 直接使用 npx 運行
```bash
npx chartli
```
2. 查看幫助文檔
```bash
npx chartli --help
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Ahmad Awais 在開源社群中有良好的聲譽，並且這個工具切中開發者對於快速數據可視化的需求。隨著數據驅動決策的普及，越來越多的開發者尋求簡單的工具來幫助他們視覺化數據。這個專案的推出正好滿足了這一需求，並且提供了多樣的圖表選擇。

## 適合誰使用

**目標受眾**：需要在終端環境中快速生成圖表的開發者和數據分析師。

> [!example] 使用場景
> - 數據分析師 用它來 生成數據圖表，因為 可以快速將數字數據視覺化。
> - 開發者 用它來 在終端中展示數據，因為 這樣可以方便地查看數據趨勢。
> - 教育工作者 用它來 教學數據可視化，因為 它的簡單性讓學生能快速上手。

## 優缺點分析

> [!success] 優點
> - 簡單易用的命令行介面。
> - 支持多種圖表類型，靈活性高。
> - 即時渲染，快速生成圖表。

> [!danger] 缺點
> - 功能相對簡單，無法處理複雜的數據可視化需求。
> - 僅支持數字數據，對其他數據類型支持有限。

> [!warning] 注意事項
> - 僅支持數字數據輸入。
> - 在複雜的數據可視化需求上功能有限。

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


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，532 stars
