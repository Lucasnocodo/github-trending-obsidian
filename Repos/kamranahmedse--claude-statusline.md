---
repo: kamranahmedse/claude-statusline
url: https://github.com/kamranahmedse/claude-statusline
owner: kamranahmedse
owner_type: User
language: Shell
license: MIT
description: "Minimal Claude Code statusline setup I personally use"
homepage: ""
stars: 384
stars_per_day: 192
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
---

# claude-statusline

**384** stars · **192** stars/天 · 建立 2 天前 · Shell · MIT

`easy-install`

> [!summary] 一句話摘要
> 讓你的 Claude Code 狀態列顯示限額、目錄和 Git 資訊。

## 專案簡介

這個工具幫助你配置 Claude Code 的狀態列，顯示當前的使用限額和 Git 分支資訊。它使用 Shell 腳本來自動化設置過程，並依賴於 jq 和 curl 來解析 JSON 和獲取限額數據。與其他狀態列工具相比，它專注於簡化設置過程，並提供即時的 Git 信息。整體來說，這是一個輕量級且實用的工具，值得嘗試。

**技術棧**：`Shell` · `JavaScript`

## 重點功能

- 自動備份舊的狀態列設置。
- 顯示當前限額和 Git 分支資訊。
- 支持一鍵安裝和卸載。

## 快速開始

1. 安裝 claude-statusline
```bash
npx @kamranahmedse/claude-statusline
```
2. 卸載 claude-statusline
```bash
npx @kamranahmedse/claude-statusline --uninstall
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 開發者 Kamran Ahmed 對於簡化開發環境的需求有深刻理解，這個專案直接解決了使用 Claude Code 時的狀態顯示問題。其簡單易用的特性也符合當前開發者對於效率的追求。

## 適合誰使用

**目標受眾**：使用 Claude Code 的開發者和團隊。

> [!example] 使用場景
> - [開發者] 用它來 快速配置 Claude Code 的狀態列，因為這樣可以即時查看使用限額和 Git 狀態。
> - [團隊領導] 用它來 確保團隊成員在開發時能夠隨時掌握狀態，因為這樣能提高協作效率。
> - [新手] 用它來 簡化 Claude Code 的設置過程，因為這樣可以更快上手開發。

> [!warning] 注意事項
> 需要安裝 jq 和 curl。

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

相關概念：[[狀態列配置]] · [[Git 整合]] · [[開發環境自動化]]

[GitHub](https://github.com/kamranahmedse/claude-statusline)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，383 stars
