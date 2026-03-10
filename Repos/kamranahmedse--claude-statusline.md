---
repo: kamranahmedse/claude-statusline
url: https://github.com/kamranahmedse/claude-statusline
owner: kamranahmedse
owner_type: User
language: Shell
license: MIT
description: "Minimal Claude Code statusline setup I personally use"
homepage: ""
stars: 389
stars_per_day: 195
forks: 15
open_issues: 3
created: 2026-03-08
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/開發工具"
  - "lang/shell"
  - easy_install
aliases:
  - "claude-statusline"
  - "kamranahmedse/claude-statusline"
  - "讓 Claude Code 的狀態列顯示限制、目錄和 Git 資訊。"
---

# claude-statusline

**389** stars · **195** stars/天 · 建立 2 天前 · Shell · MIT

`easy-install`

> [!summary] 一句話摘要
> 讓 Claude Code 的狀態列顯示限制、目錄和 Git 資訊。

## 專案簡介

這個專案提供了一個簡單的腳本來配置 Claude Code 的狀態列，顯示如 API 限制、當前目錄和 Git 分支資訊。它使用了 Shell 和 JavaScript，並依賴於 jq 來解析 JSON 數據，還有 curl 來獲取 API 限制數據。與其他狀態列工具相比，它專注於 Claude Code 的特定需求，提供了更精細的狀態顯示。使用者只需執行一個命令即可安裝，並且可以輕鬆卸載。這個工具的效用在於它能夠幫助開發者快速了解當前的開發環境，但需要注意的是，它依賴於外部工具的安裝。整體來說，這是一個簡單易用的工具，適合任何使用 Claude Code 的開發者。

**技術棧**：`Shell` · `JavaScript`

## 重點功能

- 顯示 API 限制資訊
- 顯示當前工作目錄
- 顯示 Git 分支資訊
- 自動備份舊的狀態列
- 簡單的一行安裝命令

## 快速開始

1. 安裝狀態列
```bash
npx @kamranahmedse/claude-statusline
```
2. 卸載狀態列
```bash
npx @kamranahmedse/claude-statusline --uninstall
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Kamran Ahmed 是一位知名的開發者，專注於提升開發者的工作效率。隨著 Claude Code 的使用增長，對於狀態列的需求也隨之增加。這個專案的簡單性和實用性使其在開發者中迅速受到青睞。

## 適合誰使用

**目標受眾**：任何使用 Claude Code 的開發者。

> [!example] 使用場景
> - 開發者 用它來 配置 Claude Code 的狀態列，因為這樣可以快速查看 API 限制和當前目錄資訊。
> - 團隊領導 用它來 確保團隊成員能夠隨時了解 Git 分支狀態，因為這樣可以避免合併衝突。
> - 新手開發者 用它來 簡化 Claude Code 的使用過程，因為這樣可以讓他們更專注於編碼而非環境配置。

## 優缺點分析

> [!success] 優點
> - 安裝簡單，僅需一行命令
> - 提供即時的開發環境資訊
> - 自動備份舊的狀態列

> [!danger] 缺點
> - 需要依賴外部工具
> - 僅適用於 Claude Code
> - 功能較為單一

> [!warning] 注意事項
> - 需要安裝 jq 和 curl
> - 僅支援 Claude Code 環境
> - 需手動配置其他依賴

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 15 |
| Open Issues | 3 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 54 KB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Shell" : 72
>     "JavaScript" : 28
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@kamranahmedse](https://github.com/kamranahmedse) | 14 |
> | [@detunized](https://github.com/detunized) | 1 |
> | [@thxForu](https://github.com/thxForu) | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # claude-statusline
> 
> Configure your Claude Code statusline to show limits, directory and git info
> 
> ## Install
> 
> Run the command below to set it up
> 
> ```bash
> npx @kamranahmedse/claude-statusline
> ```
> 
> It backups your old status line if any and copies the status line script to `~/.claude/statusline.sh` and configures your Claude Code settings.
> 
> ## Requirements
> 
> - [jq](https://jqlang.github.io/jq/) — for parsing JSON
> - curl — for fetching rate limit data
> - git — for branch info
> 
> On macOS:
> 
> ```bash
> brew install jq
> ```
> 
> ## Uninstall
> 
> ```bash
> npx @kamranahmedse/claude-statusline --uninstall
> ```
> 
> If you had a previous statusline, it restores it from the backup. Otherwise it removes the script and cleans up your settings.
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[命令列工具]] · [[狀態列配置]] · [[開發環境管理]]

[GitHub](https://github.com/kamranahmedse/claude-statusline)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "kamranahmedse--claude-statusline"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，383 stars
