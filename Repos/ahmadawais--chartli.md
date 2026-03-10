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
  - "將純數字轉換為終端圖表，讓數據視覺化變得簡單。"
---

# chartli

**535** stars · **107** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`個人專案` `0.0.5` `easy-install`

> [!summary] 一句話摘要
> 將純數字轉換為終端圖表，讓數據視覺化變得簡單。

> [!abstract] 核心創新
> 提供多種終端圖表格式的即時渲染功能。

## 專案簡介

這個 CLI 工具能夠將數字文本數據轉換為各種終端圖表，如 ASCII、條形圖和熱圖等。它使用 TypeScript 和 Rust 實現，並支持多種圖表格式，讓用戶可以根據需求選擇合適的視覺化方式。與其他圖表工具相比，`chartli` 的特點在於其簡單的命令行介面和即時渲染功能，無需複雜的設置。使用者可以輕鬆地從文件或標準輸入讀取數據，並生成所需的圖表。雖然它的功能相對簡單，但對於需要快速視覺化數據的開發者來說，這是一個非常方便的工具。整體來看，`chartli` 是一個值得嘗試的輕量級工具，特別適合需要快速生成圖表的場景。

**技術棧**：`TypeScript` · `Rust` · `JavaScript`

## 重點功能

- 支持多種圖表類型，如 ASCII、條形圖和熱圖。
- 簡單的命令行介面，易於使用。
- 可以從文件或標準輸入讀取數據。
- 支持自定義圖表寬度和高度。
- 即時渲染圖表，無需複雜設置。

## 快速開始

1. 使用 npx 直接運行
```bash
npx chartli
```
2. 查看幫助文檔
```bash
npx chartli --help
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Ahmad Awais 是一位知名的開發者，專注於開源工具的開發。隨著數據視覺化需求的增加，這個工具切中開發者對於簡單、快速解決方案的需求。近期對於 CLI 工具的興趣上升，讓這個專案在社群中受到更多關注。

## 適合誰使用

**目標受眾**：需要快速生成終端圖表的開發者和數據分析師。

> [!example] 使用場景
> - 數據分析師 用它來 生成終端圖表，因為 可以快速視覺化數據而不需使用繁瑣的 GUI 工具。
> - 開發者 用它來 測試數據輸出，因為 可以即時查看數據的視覺化效果，方便調整程式碼。
> - 系統管理員 用它來 監控系統性能，因為 能夠將性能數據轉換為圖表，便於快速理解狀況。

## 優缺點分析

> [!success] 優點
> - 使用簡單，適合快速生成圖表。
> - 支持多種圖表格式，靈活性高。
> - 輕量級，無需安裝複雜的依賴。

> [!danger] 缺點
> - 功能較為簡單，無法滿足高級需求。
> - 僅限於終端使用，無法進行圖形化操作。
> - 對於大型數據集可能不夠高效。

> [!warning] 注意事項
> - 僅支持數字文本數據。
> - 功能相對簡單，無法處理複雜的數據視覺化需求。
> - 不支持圖形界面，僅限於終端使用。

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

相關概念：[[數據視覺化]] · [[命令行工具]] · [[終端應用]]

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
