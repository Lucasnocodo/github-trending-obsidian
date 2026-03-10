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
  - "將純數字轉換為終端圖表，讓數據可視化變得簡單。"
---

# chartli

**537** stars · **107** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`個人專案` `0.0.5` `easy-install`

> [!summary] 一句話摘要
> 將純數字轉換為終端圖表，讓數據可視化變得簡單。

## 專案簡介

這個 CLI 工具可以將數字文本數據轉換為各種終端圖表，如 ASCII、條形圖和熱圖。它使用 TypeScript 和 Rust 開發，並提供多種圖表類型選擇，讓用戶可以根據需求自定義輸出格式。與其他數據可視化工具相比，chartli 的特點在於其簡單易用的命令行介面，無需複雜的配置即可快速生成圖表。實際使用中，這個工具能夠快速渲染數據，適合需要快速視覺化數據的開發者和數據分析師。雖然功能強大，但對於需要高級視覺化效果的用戶來說，可能還是需要尋找其他專業工具。整體來說，chartli 是一個值得嘗試的輕量級工具，特別適合快速原型開發或日常數據檢查。

**技術棧**：`TypeScript` · `Rust` · `JavaScript`

## 重點功能

- 支持多種圖表類型：ASCII、條形圖、熱圖等。
- 可通過命令行選項自定義圖表寬度和高度。
- 支持從文件或標準輸入讀取數據。
- 提供即時使用的 npx 命令，無需安裝。
- 支持 SVG 格式的圖表輸出。

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
> 開發者 Ahmad Awais 背後有豐富的開源經驗，這個專案正好滿足了開發者對於快速數據可視化的需求。隨著命令行工具的流行，這個工具的簡單性和靈活性使其在開發者社群中迅速受到青睞。特別是在數據分析和報告的需求日益增加的情況下，chartli 提供了一個便捷的解決方案。

## 適合誰使用

**目標受眾**：需要快速數據可視化的開發者和數據分析師。

> [!example] 使用場景
> - 數據分析師 用它來 生成數據圖表，因為 可以快速視覺化數據而不需要圖形介面。
> - 後端工程師 用它來 測試 API 數據，因為 可以直接在終端查看數據的可視化效果。
> - 開發者 用它來 創建報告，因為 可以輕鬆將數字數據轉換為易於理解的圖表格式。

## 優缺點分析

> [!success] 優點
> - 簡單易用，適合快速生成圖表。
> - 支持多種輸出格式，靈活性高。
> - 無需安裝即可使用，方便快捷。

> [!danger] 缺點
> - 功能相對簡單，無法滿足高級需求。
> - 對於大型數據集的處理能力有限。
> - 僅支持終端環境，無法進行圖形化操作。

> [!warning] 注意事項
> - 不支持高級圖表自定義功能。
> - 對於大型數據集可能會有性能瓶頸。
> - 目前僅限於終端使用，無法生成圖形介面。

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

相關概念：[[資料視覺化]] · [[CLI/TUI]]

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
