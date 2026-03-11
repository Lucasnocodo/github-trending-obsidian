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
use_case: "將數字文本數據轉換為終端圖表的 CLI 工具。"
priority: medium
tags:
  - github
  - "category/資料科學"
  - "lang/typescript"
  - easy_install
aliases:
  - "chartli"
  - "ahmadawais/chartli"
  - "將數字文本數據轉換為終端圖表的 CLI 工具。"
---

# chartli

**538** stars · **108** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`個人專案` `1.0.0` `easy-install`

> [!summary] 一句話摘要
> 將數字文本數據轉換為終端圖表的 CLI 工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (108 stars/day)
> **適合** 需要在終端中快速生成數據圖表的開發者和數據分析師。
> **一句話重點** 這個專案讓終端數據可視化變得簡單，適合快速查看和分析數據。

> [!abstract] 核心創新
> chartli 提供多種終端圖表格式，專為 CLI 環境設計，讓數據可視化變得簡單而高效。

## 專案簡介

chartli 是一個命令行工具，能將純數字轉換為各種終端圖表，支持 ASCII、SVG、熱圖等格式。用戶可以通過簡單的命令行參數來指定圖表類型、寬度、高度以及標籤等，讓數據可視化變得簡單。它使用 TypeScript 和 Rust 實現，確保了性能和跨平台兼容性。與其他可視化工具相比，chartli 專注於終端環境，並提供多種圖表格式，適合快速查看數據趨勢。使用者可以輕鬆地將數據從文件或標準輸入中讀取，並通過選項自定義輸出。這個工具對於需要快速數據可視化的開發者和數據分析師特別有用，因為它不需要圖形介面，直接在終端中呈現結果。它的成熟度為 1.0.0，適合小型團隊或個人開發者使用。對於需要更複雜可視化的場景，可能需要考慮其他圖形化工具。

**技術棧**：`TypeScript` · `Rust` · `JavaScript`

## 重點功能

- 多種圖表格式 — 支持 ASCII、SVG、熱圖、Unicode、Braille 等格式，使用 -t 參數切換。
- 自定義圖表尺寸 — 使用 -w 和 -h 參數設置圖表的寬度和高度。
- 標籤支持 — 使用 --x-axis-label 和 --y-axis-label 添加坐標軸標題，使用 --data-labels 顯示數據值。
- 從文件或標準輸入讀取數據 — 可以指定文件作為輸入，若不提供則從 stdin 讀取。
- 簡單的安裝與使用 — 只需一行命令即可安裝和運行，支持 npx 直接運行。

## 快速開始

1. 安裝 chartli
```bash
npm i -g chartli
```
2. 運行幫助指令
```bash
npx chartli --help
```
3. 生成圖表
```bash
npx chartli [file] -t ascii -w 24 -h 8
```

## 程式碼範例

```sh
pnpm chartli examples/assets/weekly-signups.txt -t ascii -w 28 -h 8 --first-column-x --data-labels
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Ahmad Awais 是一位知名的開源貢獻者，這個專案切中了開發者在終端環境中快速可視化數據的需求。隨著 CLI 工具的流行，這個專案在開發者社群中受到重視，特別是在數據分析和 DevOps 領域。

## 適合誰使用

**目標受眾**：需要在終端中快速生成數據圖表的開發者和數據分析師。

> [!example] 使用場景
> - 數據分析師用它來快速生成數據圖表，因為可以直接在終端中查看趨勢，節省了使用 GUI 工具的時間。
> - 後端工程師用它來監控 API 數據，因為能夠即時生成圖表，便於快速定位問題。
> - DevOps 工程師用它來展示系統性能數據，因為可以在 CI/CD 流程中自動生成報告，提升工作效率。

## 架構分析

chartli 採用 CLI 架構，使用者輸入數據 → 工具處理數據 → 輸出圖表。核心技術決策包括使用 TypeScript 和 Rust 以提高性能和兼容性。專案目錄結構簡單，主要檔案包括 README、主要程式碼和示例數據。

## 優缺點分析

> [!success] 優點
> - 快速安裝與使用，適合需要即時可視化的場景。
> - 支持多種圖表格式，滿足不同需求。
> - 可從標準輸入讀取數據，靈活性高。

> [!danger] 缺點
> - 僅支持數字數據，無法處理其他類型的數據。
> - 在某些終端中顯示效果可能不理想。
> - 不支持 Windows 系統，限制了使用範圍。

> [!warning] 注意事項
> - 僅支持數字文本數據，對非數字數據無法生成圖表。
> - 在某些終端環境中，圖表顯示可能會受到字體或顯示設置的影響。
> - 不支持 Windows 環境，主要針對 Unix-like 系統設計。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[vitaly--cli-chart\|vitaly/cli-chart]] | cli-chart 提供類似的終端圖表功能，但支持的圖表類型較少，且不支持 SVG 格式。 |
| [[gchq--CyberChef\|gchq/CyberChef]] | CyberChef 是一個更全面的數據處理工具，雖然也有可視化功能，但主要聚焦於數據轉換和分析，而非專注於終端圖表。 |

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

相關概念：[[資料視覺化]] · [[CLI/TUI]] · [[自動化測試]]

相關專案：[[vitaly--cli-chart|vitaly/cli-chart]] · [[gchq--CyberChef|gchq/CyberChef]]

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
