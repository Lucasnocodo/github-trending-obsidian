---
repo: ahmadawais/chartli
url: https://github.com/ahmadawais/chartli
owner: ahmadawais
owner_type: User
language: TypeScript
license: N/A
description: "CLI that turns plain numbers into terminal charts. ascii, spark, bars, columns, heatmap, unicode, braille, svg. "
homepage: "https://x.com/MrAhmadAwais"
stars: 532
stars_per_day: 133
forks: 28
open_issues: 0
created: 2026-03-05
first_seen: 2026-03-10
week: "2026-W11"
category: "CLI 工具"
release_tag: "0.0.5"
status: to-review
tags:
  - github
  - cli_工具
  - typescript
---

# chartli

**532** stars · **133** stars/天 · 建立 4 天前 · TypeScript · 未標註授權

> [!summary] 一句話摘要
> 讓數字資料在終端機中以圖表形式呈現，讓數據視覺化變得簡單。

## 專案簡介

這個 CLI 工具可以將純數字轉換為各種終端圖表格式，例如 ASCII、條形圖和熱圖。它使用 TypeScript 和 Rust 實作，支持多種圖表類型和自定義選項。與其他圖表工具相比，chartli 專注於終端環境，提供輕量級且即時的視覺化選擇，非常適合需要快速檢視數據的開發者。值得一試，特別是對於喜歡在命令行工作的人。

## 重點功能

- 支持多種圖表類型，包括 ASCII、條形圖和熱圖。
- 可以從文件或標準輸入讀取數據，靈活性高。
- 提供自定義選項，如圖表寬度和高度，滿足不同需求。
- 輕量級，無需安裝即可使用 npx 命令運行。

## 快速開始

使用 npx 直接運行：`npx chartli`,查看幫助文檔：`npx chartli --help`

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者是知名的開發者，對開發者社群有一定影響力，這個工具切中許多需要快速數據視覺化的需求，尤其是在命令行環境中。

## 適合誰使用

**目標受眾**：對命令行工具有需求的開發者和數據分析師。

> [!example] 使用場景
> - [數據分析師] 用它來快速生成數據圖表，因為可以即時在終端中視覺化數據，提升工作效率。
> - [開發者] 用它來檢視應用程式的性能數據，因為能夠快速轉換數字為圖表，便於分析。
> - [系統管理員] 用它來監控伺服器性能，因為可以直接在終端中顯示重要指標的視覺化結果。

> [!warning] 注意事項
> 目前僅支持終端環境，無法在 GUI 環境中使用。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | TypeScript |
| 授權 | N/A |
| Stars | 532 |
| Forks | 28 |
| Issues | 0 |
| 建立日期 | 2026-03-05 |
| 官方網站 | [Link](https://x.com/MrAhmadAwais) |

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
>   0.50 │                

## 延伸閱讀

相關概念：#數據視覺化 · #命令行工具 · #性能監控

[GitHub](https://github.com/ahmadawais/chartli)
 · [官方網站](https://x.com/MrAhmadAwais)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，532 stars
