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
  - "將數字轉換為終端圖表，讓數據可視化變得簡單。"
---

# chartli

**538** stars · **108** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`個人專案` `1.0.0` `easy-install`

> [!summary] 一句話摘要
> 將數字轉換為終端圖表，讓數據可視化變得簡單。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (108 stars/day)
> **適合** 需要在終端中快速生成數據圖表的開發者和數據分析師。
> **一句話重點** chartli 讓數據可視化變得簡單，無需複雜的設置和學習曲線。

> [!abstract] 核心創新
> chartli 提供了多種終端圖表格式，讓數據可視化變得簡單且快速。

## 專案簡介

chartli 是一個命令列工具，能將純數字數據轉換為多種格式的終端圖表，包括 ASCII、SVG、和 Unicode。用戶只需提供數據檔案或標準輸入，並透過簡單的選項來指定圖表類型和尺寸，chartli 會自動生成可視化結果。這個工具使用 TypeScript 和 Rust 開發，確保了高效能和跨平台的兼容性。與其他可視化工具相比，chartli 的優勢在於其輕量級和即時生成圖表的能力，且不需要額外的 GUI 環境。使用者可以輕鬆地自定義圖表的標題、標籤和數據顯示方式，這使得它在快速數據分析和報告中非常實用。雖然功能強大，但對於複雜的數據集或需要高級視覺效果的情況，可能會有些限制。整體來說，這是一個穩定的工具，適合小型團隊或個人使用。對於需要快速生成簡單圖表的情境，chartli 是一個不錯的選擇，但對於需要高級視覺化的專業用戶，可能需要尋找其他解決方案。

**技術棧**：`TypeScript` · `Rust` · `JavaScript`

## 重點功能

- 多種圖表格式 — 支持 ASCII、SVG、Unicode、Braille、Spark、Bars、Columns 和 Heatmap。
- 自定義圖表尺寸 — 使用 -w 和 -h 參數來設定圖表的寬度和高度。
- 標籤功能 — 使用 --x-axis-label 和 --y-axis-label 來添加坐標軸標題。
- 數據顯示 — 使用 --data-labels 來在圖表上顯示原始數值。
- 簡單的命令行操作 — 只需輸入 npx chartli [file] [options] 即可生成圖表。

## 快速開始

1. 安裝 chartli
```bash
npm i -g chartli
```
2. 生成圖表
```bash
npx chartli examples/assets/weekly-signups.txt -t ascii -w 28 -h 8 --first-column-x --data-labels
```
3. 查看幫助信息
```bash
npx chartli --help
```

## 程式碼範例

```bash
npx chartli examples/assets/weekly-signups.txt -t ascii -w 28 -h 8 --first-column-x --data-labels
```

## 為什麼值得關注

> [!tip] 爆紅原因
> ahmadawais 是一位活躍的開源貢獻者，這個專案正好滿足了開發者對於快速數據可視化的需求。隨著數據驅動決策的趨勢，這樣的工具在開發者社群中越來越受到重視。這個專案在最近的更新中引入了多種圖表格式，進一步提升了其吸引力。

## 適合誰使用

**目標受眾**：需要在終端中快速生成數據圖表的開發者和數據分析師。

> [!example] 使用場景
> - 數據分析師用它來快速生成數據報告中的圖表，因為它能在終端中即時顯示視覺化結果，節省了使用 GUI 工具的時間。
> - DevOps 工程師用它來監控系統性能數據，因為可以輕鬆將數據輸出到終端，並快速識別趨勢和異常。
> - 教育工作者用它來展示學生的成績變化，因為簡單的命令就能生成清晰的圖表，便於在課堂上進行討論。

## 優缺點分析

> [!success] 優點
> - 輕量級，無需 GUI 環境即可運行。
> - 支持多種圖表格式，靈活性高。
> - 命令行操作簡單，適合快速生成圖表。

> [!danger] 缺點
> - 不支持複雜數據格式，限制了使用場景。
> - 對於大數據集性能可能不佳。
> - 缺乏高級視覺化功能，無法滿足所有需求。

> [!warning] 注意事項
> - 不支持複雜的數據格式，如 JSON 或 XML。
> - 對於大數據集，生成圖表的速度可能會受到影響。
> - 缺乏高級視覺化選項，如交互式圖表或動態更新。
> - 僅支持終端環境，無法生成圖形界面的圖表。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| chart.js | chart.js 是一個功能強大的前端圖表庫，適合需要交互式和高級視覺效果的應用，但需要在瀏覽器中運行。相較之下，chartli 更適合在終端中快速生成簡單圖表。 |
| gnuplot | gnuplot 是一個成熟的數據可視化工具，支持更複雜的數據分析和圖表類型，但學習曲線較陡，使用上不如 chartli 直觀。 |

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

相關概念：[[資料視覺化]] · [[CLI/TUI]] · [[數據分析]]

[GitHub](https://github.com/ahmadawais/chartli) · [官方網站](https://x.com/MrAhmadAwais)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "資料科學" AND file.name != "ahmadawais--chartli"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "ahmadawais--chartli"
> SORT stars DESC
> ```

---

## 個人筆記

> [!question]+ 快速評估（30 秒填完）
> 
> 相關性:: 未評估
> 印象:: _一句話_
> 行動:: 不需要
> 
> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_
> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_

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
