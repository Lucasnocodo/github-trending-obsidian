---
repo: ahmadawais/chartli
url: https://github.com/ahmadawais/chartli
owner: ahmadawais
owner_type: User
language: TypeScript
license: N/A
description: "CLI that turns plain numbers into terminal charts. ascii, spark, bars, columns, heatmap, unicode, braille, svg. "
homepage: "https://x.com/MrAhmadAwais"
stars: 537
stars_per_day: 107
forks: 28
open_issues: 0
created: 2026-03-05
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "資料科學"
release_tag: "1.0.0"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/資料科學"
  - "lang/typescript"
  - easy_install
aliases:
  - "chartli"
  - "ahmadawais/chartli"
  - "將純數字轉換為終端圖表，讓數據可視化變得簡單直觀。"
---

# chartli

**537** stars · **107** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`個人專案` `1.0.0` `easy-install`

> [!summary] 一句話摘要
> 將純數字轉換為終端圖表，讓數據可視化變得簡單直觀。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (107 stars/day)
> **適合** 需要在終端環境中快速生成數據圖表的開發者和數據分析師。
> **一句話重點** 這個專案讓數據可視化變得簡單，特別是在終端環境中，開發者可以輕鬆生成各種圖表。

> [!abstract] 核心創新
> 提供多種終端圖表格式的 CLI 工具，讓數據可視化變得簡單直觀。

## 專案簡介

這個 CLI 工具 `chartli` 讓用戶能夠將純數字數據轉換為各種終端圖表，支持 ASCII、SVG、熱圖等格式。用戶可以透過簡單的命令行參數來指定圖表類型、寬度、高度及標籤，並且可以從檔案或標準輸入讀取數據。它使用 TypeScript 和 Rust 實現，提供了高效的數據處理能力。與其他圖表工具相比，`chartli` 的獨特之處在於其多樣的輸出格式和簡單的 CLI 使用方式，適合快速生成圖表而不需繁瑣的設置。使用者可以輕鬆生成如 ASCII 繪圖或 SVG 圖形，並且支持自定義標籤和數據顯示。這個工具的性能在處理小型數據集時表現良好，但對於大型數據集可能會遇到性能瓶頸。整體來說，這是一個穩定的工具，適合需要快速可視化數據的小型團隊或個人使用。建議在需要快速生成終端圖表時使用，但對於複雜的數據視覺化需求，可能需要考慮其他更強大的工具。

**技術棧**：`TypeScript` · `Rust` · `JavaScript`

## 重點功能

- 多種圖表格式 — 支持 ascii、svg、unicode、braille、spark、bars、columns、heatmap。
- 自定義標籤 — 使用 --x-axis-label 和 --y-axis-label 參數添加坐標軸標題。
- 數據顯示 — 使用 --data-labels 參數在圖表上顯示原始數值。
- 靈活的輸入 — 支持從檔案或標準輸入讀取數據。
- 尺寸調整 — 使用 -w 和 -h 參數自定義圖表的寬度和高度。

## 快速開始

1. 快速運行幫助信息
```bash
npx chartli --help
```
2. 全局安裝
```bash
npm i -g chartli
```
3. 生成圖表
```bash
npx chartli examples/assets/weekly-signups.txt -t ascii -w 28 -h 8 --first-column-x --data-labels
```

## 程式碼範例

```bash
npx chartli examples/assets/weekly-signups.txt -t ascii -w 28 -h 8 --first-column-x --data-labels
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Ahmad Awais 是一位知名的開源貢獻者，這個專案切中了開發者對於簡單、快速數據可視化的需求。隨著 CLI 工具的流行，這個專案的推出恰逢其時，尤其是在開發者社群中對於終端工具的需求日益增加。

## 適合誰使用

**目標受眾**：需要在終端環境中快速生成數據圖表的開發者和數據分析師。

> [!example] 使用場景
> - 數據分析師用它來快速生成終端圖表，因為這樣可以在沒有 GUI 的環境下輕鬆查看數據趨勢。
> - DevOps 工程師用它來在 CI/CD 流程中自動生成數據報告，因為其 CLI 特性使得集成變得簡單。
> - 教育工作者用它來展示學生的成績分佈，因為可以快速生成可視化圖表，幫助學生理解數據。

## 優缺點分析

> [!success] 優點
> - 支持多種圖表格式，滿足不同需求。
> - 簡單易用的 CLI 接口，快速上手。
> - 靈活的數據輸入方式，適合各種使用場景。

> [!danger] 缺點
> - 不支持交互式圖表，僅限靜態輸出。
> - 對於大型數據集，性能可能會下降。
> - 需要 Node.js 環境來運行。

> [!warning] 注意事項
> - 對於大型數據集，性能可能會下降。
> - 不支持交互式圖表，僅限靜態輸出。
> - 需要 Node.js 環境來運行。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 28 |
| Open Issues | 0 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-05 |
| 官方網站 | [Link](https://x.com/MrAhmadAwais) |
| Repo 大小 | 60.7 MB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 66
>     "Rust" : 33
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ahmadawais](https://github.com/ahmadawais) | 25 |

**最新版本**：1.0.0 — v1.0.0 (2026-03-10)

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
> npm i -g chartli
> ```
> 
> ## Agent skill install
> 
> Install the repository skill for agents:
> 
> ```sh
> npx skills add ahmadawais/chartli
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
>   --x-axis-label  Title to render for the x-axis
>   --y-axis-label  Title to render for the y-axis
>   --x-labels     Comma-separated labels for x-axis ticks or row labels
>   --series-labels 
>                          Comma-separated labels for plotted series or categories
>   --data-labels          Show raw values near plotted data when supported
>   --first-column-x       Treat the first numeric column as x labels instead of a
>                          plotted series
>   --help                 Display help for command
> ```
> 
> ## Labels and metadata
> 
> - Use `--x-axis-label` and `--y-axis-label` to add axis titles.
> - Use `--x-labels` for explicit tick labels.
> - Use `--series-labels` to replace generic labels like `S1` and `C1`.
> - Use `--data-labels` to print raw values on or near the plotted data where the renderer supports it.
> - Use `--first-column-x` when the first numeric column is a domain like `day`, `month`, or `year`.
> 
> With `--first-column-x`, chartli will:
> 
> - use the first numeric column as x-axis labels
> - use the first header cell as the x-axis title when a header row exists
> - use the remaining header cells as series labels
> - use the second header cell as the y-axis title for common two-column data
> 
> Example:
> 
> ```sh
> pnpm chartli examples/assets/core-single-series.txt -t ascii -w 24 -h 8 --first-column-x --data-labels
> ```
> 
> ```sh
> pnpm chartli examples/assets/core-multi-series.txt -t columns -h 8 --first-column-x --series-labels sales,costs,profit --x-axis-label Metrics --y-axis-label Value --data-labels
> ```
> 
> ## Labeled chart examples
> 
> ### ASCII line with inferred axis labels and data labels
> 
> ```sh
> pnpm chartli examples/assets/weekly-signups.txt -t ascii -w 28 -h 8 --first-column-x --data-labels
> ```
> 
> ```text
>         signups
>     91 │                      ●   87
>        │                     91    ●
>        │            73
>        │             ●   68
>   66.5 │   58             ●
>        │    ●   49
>        │42       ●
>     42 │●
>        └────────────────────────────
>         1   2    3   4    5   6    7
>                     day
> ```
> 
> ### Columns with explicit axis titles and inferred series names
> 
> ```sh
> pnpm chartli examples/assets/weekly-metrics.txt -t columns -h 8 --first-column-x --x-axis-label Metrics --y-axis-label Count --data-labels
> ```
> 
> ```text
> Count
>  176     29     10
> 
>   █
>   █
>   █
>   █
>   █      ▓      ▒
>   █      ▓      ▒
> ────────────────────
> visits trials  paid
>       Metrics
> ```
> 
> ### SVG with axes, x labels, and point labels
> 
> ```sh
> pnpm chartli examples/assets/weekly-signups.txt -t svg -m lines -w 320 -h 120 --first-column-x --data-labels | sed -n '/^ examples/assets/output/weekly-signups-chart.svg
> ```
> 
> This writes `examples/assets/output/weekly-signups-chart.svg`.
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
> - `examples/assets/image-single-series.txt`
> - `examples/assets

## 延伸閱讀

相關概念：[[資料視覺化]] · [[CLI/TUI]]

[GitHub](https://github.com/ahmadawais/chartli) · [官方網站](https://x.com/MrAhmadAwais)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "資料科學" AND file.name != "ahmadawais--chartli"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，532 stars
