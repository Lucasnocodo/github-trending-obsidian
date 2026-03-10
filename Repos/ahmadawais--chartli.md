---
repo: ahmadawais/chartli
url: https://github.com/ahmadawais/chartli
owner: ahmadawais
owner_type: User
language: TypeScript
license: N/A
description: "CLI that turns plain numbers into terminal charts. ascii, spark, bars, columns, heatmap, unicode, braille, svg. "
homepage: "https://x.com/MrAhmadAwais"
stars: 533
stars_per_day: 107
forks: 29
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
---

# chartli

**533** stars · **107** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`個人專案` `0.0.5` `easy-install`

> [!summary] 一句話摘要
> 將數字數據轉換為終端圖表，讓數據可視化更簡單。

> [!abstract] 核心創新
> 提供了一個專注於終端的數據可視化解決方案。

## 專案簡介

它通過將純數字數據轉換為各種終端圖表，幫助用戶快速可視化數據。技術上使用 TypeScript 和 Rust，並支持多種圖表類型。與其他數據可視化工具相比，它專注於終端環境，適合喜歡命令行操作的開發者。這個專案簡單易用，特別適合需要快速生成圖表的用戶。

**技術棧**：`TypeScript` · `Rust`

## 重點功能

- 支持多種圖表類型，包括 ASCII 和 SVG。
- 可從數字文本數據生成圖表。
- 命令行操作簡單直觀。

## 快速開始

1. 使用 npx 安裝 Chartli
```bash
npx chartli --help
```
2. 運行 Chartli 生成圖表
```bash
npx chartli [file] [options]
```
3. 查看可用的圖表類型和選項
```bash
npx chartli --help
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在開發工具領域有豐富經驗，這個工具能夠滿足開發者對於快速數據可視化的需求。

## 適合誰使用

**目標受眾**：需要在終端中可視化數據的開發者和數據分析師。

> [!example] 使用場景
> - [數據分析師] 用它來 快速生成數據圖表，因為可以在終端中直接查看結果。
> - [開發者] 用它來 可視化性能數據，因為能夠快速理解數據趨勢。
> - [系統管理員] 用它來 監控系統指標，因為可以即時生成可視化報告。

> [!warning] 注意事項
> 不支持圖形界面，僅限於終端使用。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 29 |
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
>   0.50 │                

## 延伸閱讀

相關概念：[[數據可視化]] · [[命令行工具]] · [[數據分析]]

[GitHub](https://github.com/ahmadawais/chartli) · [官方網站](https://x.com/MrAhmadAwais)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，532 stars
