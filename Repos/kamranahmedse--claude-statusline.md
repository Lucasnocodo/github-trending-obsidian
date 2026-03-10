---
repo: kamranahmedse/claude-statusline
url: https://github.com/kamranahmedse/claude-statusline
owner: kamranahmedse
owner_type: User
language: Shell
license: MIT
description: "Minimal Claude Code statusline setup I personally use"
homepage: ""
stars: 386
stars_per_day: 193
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
  - 開發工具
  - shell
aliases:
  - "claude-statusline"
  - "kamranahmedse/claude-statusline"
  - "讓 Claude Code 的狀態列顯示限制、目錄和 Git 資訊。"
---

# claude-statusline

**386** stars · **193** stars/天 · 建立 2 天前 · Shell · MIT

`easy-install`

> [!summary] 一句話摘要
> 讓 Claude Code 的狀態列顯示限制、目錄和 Git 資訊。

> [!abstract] 核心創新
> 提供自動備份舊的狀態列配置的功能。

## 專案簡介

這個專案透過簡單的指令安裝，為 Claude Code 配置一個狀態列，顯示當前的使用限制、目錄和 Git 分支資訊。它使用了 Shell 和 JavaScript，並依賴於 jq 來解析 JSON 數據，還有 curl 來獲取速率限制資料。與其他狀態列工具相比，這個專案專注於簡化設置過程，並提供自動備份舊的狀態列。使用者可以快速安裝和卸載，並且不需要手動修改配置文件。這個工具的效果是讓開發者在編碼時能夠即時獲取重要的環境資訊，但它的功能相對簡單，僅限於狀態顯示。總體來看，這是一個值得嘗試的輕量級工具，特別適合需要簡化開發環境的使用者。

**技術棧**：`Shell` · `JavaScript`

## 重點功能

- 顯示當前的 API 使用限制。
- 顯示當前工作目錄資訊。
- 顯示當前 Git 分支資訊。
- 自動備份舊的狀態列配置。
- 簡單的安裝和卸載過程。

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
> 作者 Kamran Ahmed 是知名的開發者，這個專案切中開發者對於簡化開發環境的需求。隨著 Claude Code 的使用增加，開發者需要更好的工具來管理其開發環境，這使得這個專案在短時間內受到關注。

## 適合誰使用

**目標受眾**：需要簡化開發環境配置的 Claude Code 使用者。

> [!example] 使用場景
> - 開發者 用它來 獲取即時的 Git 分支資訊，因為這樣可以更有效率地管理版本控制。
> - 團隊成員 用它來 檢視當前的 API 使用限制，因為這有助於避免超出配額。
> - 新手 開發者 用它來 簡化狀態列配置，因為這樣可以專注於編碼而不是環境設置。

## 優缺點分析

> [!success] 優點
> - 安裝過程簡單，適合快速上手。
> - 提供即時的環境資訊，提升開發效率。

> [!danger] 缺點
> - 功能較為單一，無法滿足複雜需求。
> - 僅限於 Claude Code 環境使用。

> [!warning] 注意事項
> - 僅支援 Claude Code 環境。
> - 功能相對簡單，僅限於狀態顯示。

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

相關概念：[[開發環境配置]] · [[狀態列工具]] · [[API 使用限制管理]]

[GitHub](https://github.com/kamranahmedse/claude-statusline)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，383 stars
