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
category: "CLI 工具"
subcategory: "數據可視化"
release_tag: "1.0.0"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "將純數字轉換為終端圖表，讓數據可視化變得簡單明瞭。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/cli_工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "chartli"
  - "ahmadawais/chartli"
  - "將純數字轉換為終端圖表，讓數據可視化變得簡單明瞭。"
---

# chartli

**540** stars · **108** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`個人專案` `1.0.0` `easy-install`

> [!summary] 一句話摘要
> 將純數字轉換為終端圖表，讓數據可視化變得簡單明瞭。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (108 stars/day)
> **授權** 未標註授權 (風險較高)
> **適合** 需要在終端中快速生成數據圖表的開發者或數據分析師。
> **一句話重點** 這個工具讓數據可視化變得輕鬆，不再需要繁瑣的圖形界面。

> [!abstract] 核心創新
> 提供多種終端圖表格式的 CLI 工具，讓數據可視化變得簡單而快速。

## 專案簡介

這個 CLI 工具 `chartli` 讓用戶能夠從數字文本數據生成各種終端圖表，如 ASCII、SVG、條形圖等。用戶只需將數據輸入，並透過簡單的命令選項來指定圖表類型和尺寸，工具會自動渲染出可視化結果。它支援多種圖表格式，包括 ascii、spark、bars、columns、heatmap、unicode、braille 和 svg，並且可以透過 `-t` 參數選擇圖表類型。與其他可視化工具相比，`chartli` 的優勢在於其輕量級和即時性，無需繁瑣的設置或 GUI 界面。使用者可以快速生成圖表，並將其輸出到終端或文件中，這對於需要快速查看數據趨勢的開發者特別有用。該工具的效能表現良好，能夠處理中小型數據集，但對於超大數據集可能會有性能瓶頸。這是一個穩定的工具，適合個人或小型團隊使用，特別是在需要快速數據可視化的情境下。對於大型數據集或需要高級可視化功能的用戶，可能需要考慮其他專業工具。

**技術棧**：`TypeScript` · `Rust` · `JavaScript`

## 重點功能

- 多種圖表類型 — 支援 ascii、svg、bars、columns 等 8 種圖表格式，使用 -t 參數選擇。
- 自動推斷標籤 — 使用 --first-column-x 讓第一列數據作為 x 軸標籤，簡化數據處理。
- 自定義圖表尺寸 — 使用 -w 和 -h 參數設定圖表的寬度和高度。
- 數據標籤顯示 — 使用 --data-labels 參數在圖表上顯示原始數值，增強可讀性。
- 即時安裝和使用 — 透過 npx 直接運行，無需全局安裝，方便快速測試。

## 快速開始

1. 直接運行 chartli
```bash
npx chartli
```
2. 查看幫助文檔
```bash
npx chartli --help
```
3. 全局安裝 chartli
```bash
npm i -g chartli
```

## 程式碼範例

```bash
pnpm chartli examples/assets/weekly-signups.txt -t ascii -w 28 -h 8 --first-column-x --data-labels
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Ahmad Awais 以其在開源社群中的活躍而聞名，曾經開發過多個受歡迎的工具。`chartli` 解決了終端用戶在查看數據時缺乏簡單可視化工具的痛點，特別是在 CLI 環境中。最近在社交媒體上有多次提及，吸引了開發者的注意。隨著開發者對輕量級 CLI 工具需求的增加，這個工具的受歡迎程度自然上升。

## 適合誰使用

**目標受眾**：需要在終端中快速生成數據圖表的開發者或數據分析師。

> [!example] 使用場景
> - 數據分析師用它來快速生成數據趨勢圖，因為可以即時在終端查看結果，節省了使用 GUI 工具的時間。
> - 後端工程師用它來在 CI/CD 流程中自動生成測試結果的圖表，因為這樣可以快速識別問題而不需要手動檢查數據。
> - 產品經理用它來展示用戶增長數據，因為可以簡單地從 CSV 文件生成視覺化圖表，便於團隊討論。

## 優缺點分析

> [!success] 優點
> - 快速生成圖表，適合 CLI 環境使用。
> - 支援多種圖表類型，滿足不同需求。
> - 無需安裝，直接使用 npx 減少了配置時間。

> [!danger] 缺點
> - 對於大型數據集性能表現不佳。
> - 僅限於文本數據，無法處理其他格式。
> - 某些圖表類型可能在終端中顯示不佳。

> [!warning] 注意事項
> - 不支援超大數據集，可能會影響性能。
> - 僅支援文本格式的數據輸入，無法直接處理 Excel 或其他格式。
> - 某些圖表類型在終端顯示效果有限，可能不適合所有用例。

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

相關專案：[[vitaly--cli-chart|vitaly/cli-chart]] · [[gchq--CyberChef|gchq/CyberChef]] · [[juliye2025--evil-read-arxiv|juliye2025/evil-read-arxiv]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--twitter-cli|jackwener/twitter-cli]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[knowsuchagency--mcp2cli|knowsuchagency/mcp2cli]] · [[steipete--discrawl|steipete/discrawl]]

[GitHub](https://github.com/ahmadawais/chartli) · [官方網站](https://x.com/MrAhmadAwais)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "ahmadawais--chartli"
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
