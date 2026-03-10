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
month: "2026-03"
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
  - "讓 Claude Code 的狀態列顯示使用限制、目錄和 Git 資訊，提升開發效率。"
---

# claude-statusline

**389** stars · **195** stars/天 · 建立 2 天前 · Shell · MIT

`easy-install`

> [!summary] 一句話摘要
> 讓 Claude Code 的狀態列顯示使用限制、目錄和 Git 資訊，提升開發效率。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (195 stars/day)
> **適合** 需要在 Claude Code 環境中快速查看使用狀態的開發者。
> **一句話重點** 這個專案的設計理念在於簡化 Claude Code 的使用體驗，讓開發者能夠更專注於編碼而非環境配置。

## 專案簡介

這個專案提供了一個簡單的工具來配置 Claude Code 的狀態列，顯示使用限制、當前目錄和 Git 分支資訊。使用者只需執行 `npx @kamranahmedse/claude-statusline`，它會自動備份舊的狀態列並將新腳本複製到 `~/.claude/statusline.sh`。專案依賴於 `jq` 來解析 JSON 數據，使用 `curl` 獲取使用限制數據，並且需要 Git 來顯示當前分支資訊。與其他狀態列工具相比，這個專案專注於 Claude Code 的整合，提供了簡單的安裝和卸載流程。使用者可以輕鬆地透過 `--uninstall` 參數來恢復舊的狀態列。這個工具適合需要在 Claude Code 環境中快速查看使用狀態的開發者，特別是在多任務處理時。由於專案仍在開發中，建議在小型專案中使用，避免在大型專案中引入不穩定因素。

**技術棧**：`Shell` · `JavaScript`

## 重點功能

- 狀態列配置 — 自動備份舊狀態列並配置新狀態列腳本到 `~/.claude/statusline.sh`。
- 顯示使用限制 — 使用 `curl` 獲取 API 使用限制數據，方便開發者監控使用情況。
- 顯示當前目錄 — 提供當前工作目錄的即時資訊，提升開發者的上下文感知。
- Git 分支資訊 — 自動顯示當前 Git 分支，幫助開發者快速了解版本狀態。
- 簡單的安裝和卸載 — 透過 `npx` 命令安裝，並可輕鬆卸載恢復舊狀態列。

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
> 專案的作者 Kamran Ahmed 是一位知名的開發者，專注於提高開發者的工作效率。這個工具切中了需要簡化開發環境配置的需求，特別是對於使用 Claude Code 的開發者。隨著對開發者生產力工具的需求增加，這個專案在社群中逐漸受到重視。

## 適合誰使用

**目標受眾**：需要在 Claude Code 環境中快速查看使用狀態的開發者。

> [!example] 使用場景
> - 前端工程師用它來快速查看當前 Git 分支和使用限制，因為這樣可以更有效率地管理多個開發任務。
> - 全端工程師用它來在 Claude Code 中顯示當前目錄資訊，因為這樣能夠減少在多個檔案間切換的時間。
> - DevOps 工程師用它來監控 API 使用限制，因為這樣可以避免超過配額導致的服務中斷。

## 優缺點分析

> [!success] 優點
> - 簡單易用，安裝過程只需一行命令。
> - 自動備份舊狀態列，避免資料遺失。
> - 提供即時的使用限制和 Git 分支資訊，提升開發效率。

> [!danger] 缺點
> - 需要額外安裝 `jq` 和 `curl`，對新手不友好。
> - 僅限於 Claude Code，無法擴展到其他編輯器。
> - 功能相對簡單，可能無法滿足高級用戶的需求。

> [!warning] 注意事項
> - 需要安裝 `jq` 和 `curl`，對於不熟悉命令行的使用者可能有門檻。
> - 僅支援 Claude Code 環境，無法在其他編輯器中使用。
> - 目前版本仍在開發中，可能存在不穩定的情況。

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

[GitHub](https://github.com/kamranahmedse/claude-statusline)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "kamranahmedse--claude-statusline"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "kamranahmedse--claude-statusline"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，383 stars
