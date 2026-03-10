---
repo: ahmadawais/chartli
url: https://github.com/ahmadawais/chartli
owner: ahmadawais
owner_type: User
language: TypeScript
license: N/A
description: "CLI that turns plain numbers into terminal charts. ascii, spark, bars, columns, heatmap, unicode, braille, svg. "
homepage: "https://x.com/MrAhmadAwais"
stars: 538
stars_per_day: 108
forks: 29
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
  - "將純數字轉換為終端圖表，方便快速視覺化數據。"
---

# chartli

**538** stars · **108** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`個人專案` `1.0.0` `easy-install`

> [!summary] 一句話摘要
> 將純數字轉換為終端圖表，方便快速視覺化數據。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (108 stars/day)
> **適合** 需要在終端中快速視覺化數據的開發者和數據分析師。
> **一句話重點** 這個專案讓終端用戶能夠輕鬆地將數字數據轉換為可視化圖表，極大地提高了數據分析的效率。

## 專案簡介

這個 CLI 工具 `chartli` 可以將純數字數據轉換為多種終端圖表格式，包括 ASCII、SVG 和熱圖等，讓用戶能夠快速視覺化數據。用戶只需提供數據文件或通過標準輸入，並使用各種選項來定義圖表類型、寬度和高度等參數。它使用 TypeScript 和 Rust 開發，並支持多種圖表格式，具體包括 ascii、spark、bars、columns、heatmap、unicode、braille 和 svg。與其他圖表工具相比，`chartli` 的優勢在於其簡單的命令行介面和即時渲染功能，特別適合需要快速生成圖表的開發者。實際使用中，`chartli` 能夠在終端中快速生成圖表，並且支持自定義標籤和數據顯示，這對於數據分析和報告生成非常有幫助。這個專案目前處於穩定版本，適合各種規模的團隊使用，特別是需要快速視覺化數據的開發者。建議在需要快速生成終端圖表時使用，但對於需要高級視覺化功能的用戶，可能需要考慮其他工具。

**技術棧**：`TypeScript` · `Rust` · `JavaScript`

## 重點功能

- 多種圖表格式 — 支持 ascii、spark、bars、columns、heatmap、unicode、braille 和 svg，使用 -t 參數切換。
- 自定義圖表尺寸 — 使用 -w 和 -h 參數設置圖表的寬度和高度。
- 數據標籤顯示 — 使用 --data-labels 參數在圖表中顯示原始數值。
- 自定義軸標題 — 使用 --x-axis-label 和 --y-axis-label 參數添加自定義的軸標題。
- 支持從文件或標準輸入讀取數據 — 使用 [file] 參數指定數據文件，未提供時從 stdin 讀取。

## 快速開始

1. 快速運行幫助信息
```bash
npx chartli --help
```
2. 全局安裝 chartli
```bash
npm i -g chartli
```
3. 生成 ASCII 圖表
```bash
pnpm chartli examples/assets/weekly-signups.txt -t ascii -w 28 -h 8 --first-column-x --data-labels
```

## 程式碼範例

```bash
pnpm chartli examples/assets/weekly-signups.txt -t ascii -w 28 -h 8 --first-column-x --data-labels
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Ahmad Awais 是一位知名的開源貢獻者，他的專案通常針對開發者的實際需求。`chartli` 針對終端用戶的需求，提供了簡單易用的圖表生成工具，這在開發者社群中引起了廣泛關注。隨著 CLI 工具的流行，這個專案的推出正好切合了開發者對於快速數據視覺化的需求。

## 適合誰使用

**目標受眾**：需要在終端中快速視覺化數據的開發者和數據分析師。

> [!example] 使用場景
> - 數據科學家用它來快速生成數據分析報告中的圖表，因為它能在終端中即時渲染，節省了使用 GUI 工具的時間。
> - 後端工程師用它來在 CI/CD 流程中自動生成數據圖表，因為可以直接將數據輸出到終端，方便監控和調試。
> - 系統管理員用它來監控伺服器性能數據，因為它支持多種圖表格式，能夠快速視覺化關鍵指標。

## 優缺點分析

> [!success] 優點
> - 簡單易用的命令行介面，快速生成圖表。
> - 支持多種圖表格式，靈活性高。
> - 即時渲染，適合快速數據視覺化需求。

> [!danger] 缺點
> - 功能相對簡單，缺乏高級視覺化功能。
> - 不支持交互式圖表，僅能生成靜態圖表。
> - 對於大型數據集，性能可能會受到影響。

> [!warning] 注意事項
> - 僅支持數字數據，對於非數字格式的數據無法處理。
> - 在某些終端中，圖表渲染效果可能會受到字體和顯示設置的影響。
> - 不支持交互式圖表，僅能生成靜態圖表。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 29 |
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

> [!question]- 待研究的問題
> _記下看完後還沒有答案的問題，未來回來補充_
> 
> - [ ] 

### 採用判斷

> [!tip]- 什麼時候該用 / 不該用
> **該用的情況**：
> - 
> 
> **不該用的情況**：
> - 

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，532 stars
