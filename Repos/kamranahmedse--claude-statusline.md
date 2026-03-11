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
use_case: "自動配置 Claude Code 的狀態列，顯示使用限制、當前目錄和 Git 資訊。"
priority: medium
tags:
  - github
  - "category/開發工具"
  - "lang/shell"
  - easy_install
aliases:
  - "claude-statusline"
  - "kamranahmedse/claude-statusline"
  - "自動配置 Claude Code 的狀態列，顯示使用限制、當前目錄和 Git 資訊。"
---

# claude-statusline

**389** stars · **195** stars/天 · 建立 2 天前 · Shell · MIT

`easy-install`

> [!summary] 一句話摘要
> 自動配置 Claude Code 的狀態列，顯示使用限制、當前目錄和 Git 資訊。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (195 stars/day)
> **適合** 需要在 Claude Code 中自定義狀態列以顯示使用限制和 Git 資訊的開發者。
> **一句話重點** 這個專案提供了一個簡單的解決方案，讓開發者能夠快速自定義 Claude Code 的狀態列，顯示重要的工作資訊。

## 專案簡介

這個專案提供了一個簡單的工具，幫助用戶配置 Claude Code 的狀態列，顯示當前的使用限制、工作目錄和 Git 分支資訊。用戶只需執行一個命令 `npx @kamranahmedse/claude-statusline`，該工具會自動備份舊的狀態列並將新狀態列腳本複製到 `~/.claude/statusline.sh`。它依賴於 `jq` 來解析 JSON 數據，使用 `curl` 獲取使用限制數據，並利用 `git` 來顯示當前分支資訊。與其他狀態列工具相比，這個專案專注於與 Claude Code 的集成，提供簡單明瞭的資訊顯示。使用效果上，這個工具能有效地幫助開發者快速了解當前的工作狀態，但需要確保安裝了必要的依賴。這個專案目前處於穩定階段，適合任何需要在 Claude Code 中自定義狀態列的開發者。建議在需要快速查看使用限制和 Git 狀態時使用，但如果你需要更複雜的狀態列功能，可能需要尋找其他工具。

**技術棧**：`Shell` · `JavaScript`

## 重點功能

- 狀態列配置 — 自動將狀態列腳本複製到 `~/.claude/statusline.sh`。
- 使用限制顯示 — 透過 `curl` 獲取 API 使用限制資訊。
- Git 分支資訊 — 顯示當前 Git 分支名稱，幫助開發者快速了解版本控制狀態。
- 備份舊狀態列 — 安裝時自動備份舊的狀態列，便於恢復。
- 簡單卸載 — 使用 `npx @kamranahmedse/claude-statusline --uninstall` 來恢復舊狀態列或清理設定。

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
> 專案作者 Kamran Ahmed 是知名的開發者，長期活躍於開源社群，這個工具切合了開發者對於簡化工作環境的需求。隨著 Claude Code 的使用者增加，對於狀態列自定義的需求也隨之上升，這使得這個專案在短時間內受到關注。

## 適合誰使用

**目標受眾**：需要在 Claude Code 中自定義狀態列以顯示使用限制和 Git 資訊的開發者。

> [!example] 使用場景
> - 前端工程師用它來快速查看當前 Git 分支和使用限制，因為這樣可以在開發過程中即時掌握狀態，避免不必要的錯誤。
> - 全端開發者用它來在 Claude Code 中顯示當前工作目錄，因為這樣能夠更清楚地知道自己在處理哪個專案，提升工作效率。
> - DevOps 工程師用它來監控 API 使用限制，因為這樣可以及時調整資源使用，避免超出配額造成的服務中斷。

## 優缺點分析

> [!success] 優點
> - 簡單易用，只需一行命令即可安裝和配置。
> - 自動備份舊狀態列，避免使用者資料丟失。
> - 即時顯示使用限制和 Git 資訊，提升開發效率。

> [!danger] 缺點
> - 需要安裝多個依賴，對於新手可能造成困擾。
> - 功能相對簡單，無法滿足更複雜的狀態列需求。
> - 僅適用於 Claude Code，無法與其他編輯器兼容。

> [!warning] 注意事項
> - 需要安裝 `jq` 來解析 JSON。
> - 需要安裝 `curl` 來獲取使用限制數據。
> - 需要安裝 `git` 來顯示當前分支資訊。

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
