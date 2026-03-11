---
repo: ahmadawais/chartli
url: https://github.com/ahmadawais/chartli
owner: ahmadawais
owner_type: User
language: TypeScript
license: N/A
description: "CLI that turns plain numbers into terminal charts. ascii, spark, bars, columns, heatmap, unicode, braille, svg. "
homepage: "https://x.com/MrAhmadAwais"
stars: 540
stars_per_day: 108
forks: 29
open_issues: 0
created: 2026-03-05
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "數據視覺化"
release_tag: "1.0.0"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "將數字轉換為終端圖表，讓數據可視化變得簡單。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "chartli"
  - "ahmadawais/chartli"
  - "將數字轉換為終端圖表，讓數據可視化變得簡單。"
---

# chartli

**540** stars · **108** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`個人專案` `1.0.0` `easy-install`

> [!summary] 一句話摘要
> 將數字轉換為終端圖表，讓數據可視化變得簡單。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (108 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險)
> **適合** 需要在終端中快速生成數據圖表的開發者和數據分析師。
> **一句話重點** 這個工具讓終端數據可視化變得簡單，適合快速生成圖表的需求。

> [!abstract] 核心創新
> 提供多種終端圖表格式的 CLI 工具，讓數據可視化變得簡單而靈活。

## 專案簡介

這個 CLI 工具能將純數字資料轉換成各種終端圖表，使用者只需提供數據檔案，工具會自動生成 ASCII、SVG 等格式的圖表。用戶可以透過命令 `npx chartli [file] [options]` 來執行，並可選擇圖表類型、寬度、高度等參數，讓數據視覺化更具彈性。它支持多種圖表類型，包括 ascii、spark、bars、columns、heatmap、unicode、braille 和 svg，並且可以透過選項如 `--x-axis-label` 和 `--y-axis-label` 自訂坐標軸標題。與其他工具相比，chartli 提供了更豐富的圖表類型選擇，並且能夠在終端中直接渲染，無需額外的圖形界面。這使得它在快速查看數據趨勢時非常方便，特別適合需要快速視覺化數據的開發者和數據分析師。該工具的效能相當良好，能夠處理中小型數據集，並且安裝簡單，僅需一行命令。這是一個穩定的專案，適合各種規模的團隊使用，特別是那些需要快速生成圖表的開發環境。使用場景包括快速數據分析、報告生成和終端數據可視化等。對於需要高級圖形功能的情況，可能需要考慮其他圖形庫或工具。

**技術棧**：`TypeScript` · `Rust` · `JavaScript`

## 重點功能

- 多種圖表類型 — 支持 ascii、spark、bars、columns、heatmap、unicode、braille 和 svg 格式。
- 自訂坐標軸標題 — 使用 `--x-axis-label` 和 `--y-axis-label` 參數來設置坐標軸標題。
- 數據標籤顯示 — 使用 `--data-labels` 參數在圖表中顯示原始數值。
- 靈活的輸入選項 — 可以從檔案或標準輸入讀取數據，方便集成到其他工具中。
- 簡單的安裝 — 只需執行 `npm i -g chartli` 或使用 `npx` 即可快速上手。

## 快速開始

1. 安裝 Chartli
```bash
npm i -g chartli
```
2. 生成圖表
```bash
npx chartli examples/assets/weekly-signups.txt -t ascii
```
3. 查看幫助文檔
```bash
npx chartli --help
```

## 程式碼範例

npx chartli examples/assets/weekly-signups.txt -t ascii -w 28 -h 8 --first-column-x --data-labels

        signups
    91 │                      ●   87
       │                     91    ●
       │            73
       │             ●   68
  66.5 │   58             ●
       │    ●   49
       │42       ●
    42 │●
       └────────────────────────────
        1   2    3   4    5   6    7
                    day

## 為什麼值得關注

> [!tip] 爆紅原因
> ahmadawais 是一位知名的開發者，過去曾開發過多個受歡迎的開源專案。這個工具解決了在終端中快速生成圖表的需求，之前的工具往往需要複雜的設置或不支持多種圖表格式。近期在社交媒體上有不少開發者分享使用這個工具的經驗，進一步提升了其曝光率。現在的開發環境越來越依賴 CLI 工具，這使得 chartli 的需求隨之上升。

## 適合誰使用

**目標受眾**：需要在終端中快速生成數據圖表的開發者和數據分析師。

> [!example] 使用場景
> - 數據分析師用它來快速生成終端圖表，因為能夠即時查看數據趨勢，提升工作效率。
> - 後端工程師用它來在 CI/CD 流程中自動生成數據報告，因為這樣可以節省手動繪圖的時間。
> - 產品經理用它來在會議中快速展示數據，因為可以直接在終端中生成清晰的視覺化圖表，避免了使用外部工具的麻煩。

## 架構分析

這是一個 CLI 工具，採用單體架構。用戶輸入數據 → 工具處理數據生成圖表 → 輸出到終端。核心技術決策是使用 TypeScript 和 Rust 來實現高效能和可擴展性。專案目錄結構中，`examples` 資料夾提供了多個示例數據檔案，方便用戶快速上手。

## 技術深入分析

chartli 使用 TypeScript 和 Rust 作為主要開發語言，這使得它在效能和可維護性上有不錯的表現。它能夠處理中小型數據集，但對於大型數據集，可能會出現效能瓶頸。選擇 CLI 工具的設計使得它在開發環境中非常靈活，但這也意味著對於不熟悉命令行的用戶來說，學習曲線會稍微陡峭。未來在擴展功能時，可能需要考慮如何優化數據處理流程，以應對更大規模的數據集。安全性方面，因為是 CLI 工具，使用者需注意數據來源的安全性，避免執行來路不明的數據檔案。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含多個使用範例，讓新手能夠快速理解如何使用。安裝過程簡單，使用 `npx` 或 `npm` 都能輕鬆上手。文件中提供了詳細的參數說明，對於新手來說非常友好。整體而言，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 安裝簡單，使用 `npx` 即可快速上手。
> - 支持多種圖表格式，靈活滿足不同需求。
> - 能夠直接在終端中渲染，方便快速查看數據。

> [!danger] 缺點
> - 對於大型數據集的處理效能有限。
> - 某些圖表類型的顯示效果不如圖形界面工具。
> - 需要一定的 CLI 使用經驗，對新手可能有挑戰。

> [!warning] 注意事項
> - 不支持大型數據集，處理大量數據時可能會影響效能。
> - 某些圖表類型在終端中顯示效果有限，可能不如圖形界面工具直觀。
> - 需要 Node.js 環境才能運行，對於不熟悉 CLI 的用戶可能有學習曲線。

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

相關概念：[[資料視覺化]] · [[CLI/TUI]]

相關專案：[[vitaly--cli-chart|vitaly/cli-chart]] · [[gchq--CyberChef|gchq/CyberChef]] · [[juliye2025--evil-read-arxiv|juliye2025/evil-read-arxiv]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--twitter-cli|jackwener/twitter-cli]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[steipete--discrawl|steipete/discrawl]]

[GitHub](https://github.com/ahmadawais/chartli) · [官方網站](https://x.com/MrAhmadAwais)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "ahmadawais--chartli"
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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，540 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，532 stars
