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
category: "CLI 工具"
release_tag: "0.0.5"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/cli_工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "chartli"
  - "ahmadawais/chartli"
  - "將純數字轉換為終端圖表，讓數據可視化變得簡單易用。"
---

# chartli

**535** stars · **107** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`個人專案` `0.0.5` `easy-install`

> [!summary] 一句話摘要
> 將純數字轉換為終端圖表，讓數據可視化變得簡單易用。

> [!abstract] 核心創新
> chartli 提供多種終端圖表類型，並支持從標準輸入生成圖表，簡化了數據可視化的流程。

## 專案簡介

這個 CLI 工具能將純數字資料轉換成各種終端圖表，如 ASCII、條形圖、熱圖等。它使用 TypeScript 和 Rust 實現，支持多種圖表類型，並可通過命令行選項進行配置。與其他圖表工具相比，chartli 的特點在於其簡單的命令行介面和多樣的輸出格式，特別適合需要快速生成圖表的開發者。使用者可以輕鬆地從文本檔案或標準輸入讀取數據，並生成視覺化圖表。這個工具的效能在小型數據集上表現良好，但在處理大量數據時可能會有性能瓶頸。總體來說，chartli 是一個成熟且易於使用的工具，適合需要快速可視化數據的開發者和數據分析師。

**技術棧**：`TypeScript` · `Rust` · `JavaScript`

## 重點功能

- 支持多種圖表類型，包括 ASCII、條形圖、熱圖等。
- 可從文本檔案或標準輸入讀取數據。
- 支持自定義圖表寬度和高度。
- 提供多種 SVG 模式選擇。
- 簡單的命令行介面，易於使用。

## 快速開始

1. 運行幫助命令以查看可用選項
```bash
npx chartli --help
```
2. 全局安裝 chartli
```bash
pnpm add -g chartli
```
3. 從示例數據生成 ASCII 圖表
```bash
pnpm chartli examples/assets/image-data.txt -t ascii -w 24 -h 8
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Ahmad Awais 是一位知名的開發者，專注於開源工具的開發。隨著數據可視化需求的增加，這個工具切中了開發者需要快速生成圖表的痛點。其簡潔的命令行介面和多樣的輸出格式使其在開發者社群中迅速受到歡迎。

## 適合誰使用

**目標受眾**：需要在終端中快速生成數據圖表的開發者和數據分析師。

> [!example] 使用場景
> - 數據分析師 用它來 快速生成數據圖表，因為可以輕鬆從文本數據中提取視覺化資訊。
> - 開發者 用它來 在終端中展示性能指標，因為可以快速查看數據而不需要圖形介面。
> - 學生 用它來 在學習報告中呈現數據，因為可以簡單地將數字轉換為視覺化圖表。

## 架構分析

該工具是基於命令行的應用，使用 TypeScript 和 Rust 實現，數據流從用戶輸入 → 解析數據 → 生成圖表 → 輸出到終端。

## 優缺點分析

> [!success] 優點
> - 簡單易用，適合快速生成圖表。
> - 支持多種圖表類型，靈活性高。
> - 輕量級，無需圖形介面即可運行。

> [!danger] 缺點
> - 性能在處理大量數據時可能下降。
> - 對於非數字數據無法生成圖表。
> - 自定義選項有限，可能不滿足所有需求。

> [!warning] 注意事項
> - 在處理大量數據時可能會有性能瓶頸。
> - 某些圖表類型的自定義選項有限。
> - 僅支持數字數據，對於非數字數據無法生成圖表。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| gnuplot | gnuplot 提供更強大的數據可視化功能，但學習曲線較陡峭。 |
| matplotlib | matplotlib 是一個 Python 庫，功能更強大但需要編寫代碼。 |

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
> WHERE category = "CLI 工具" AND file.name != "ahmadawais--chartli"
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
