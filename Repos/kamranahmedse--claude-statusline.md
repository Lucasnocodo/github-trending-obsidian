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
  - "讓你的 Claude Code 狀態列顯示限制、目錄和 Git 資訊，提升開發效率。"
---

# claude-statusline

**389** stars · **195** stars/天 · 建立 2 天前 · Shell · MIT

`easy-install`

> [!summary] 一句話摘要
> 讓你的 Claude Code 狀態列顯示限制、目錄和 Git 資訊，提升開發效率。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (195 stars/day)
> **適合** 需要在 Claude Code 環境中快速獲取狀態資訊的開發者。
> **一句話重點** 這個專案讓開發者能夠在 Claude Code 環境中快速獲取狀態資訊，提升開發效率。

## 專案簡介

這個專案提供了一個簡單的工具來配置 Claude Code 的狀態列，顯示使用者的 API 限制、當前目錄和 Git 分支資訊。安裝後，它會備份舊的狀態列並將新狀態列腳本複製到 `~/.claude/statusline.sh`，並自動配置相關設置。技術上，它依賴於 `jq` 來解析 JSON、`curl` 獲取速率限制數據，以及 `git` 來顯示當前分支資訊。與其他狀態列工具相比，這個專案的特點在於其專注於 Claude Code 的特定需求，並且安裝過程非常簡單。使用者可以通過簡單的命令來卸載，並恢復之前的狀態列。對於需要在 Claude Code 環境中獲取即時狀態的開發者來說，這是一個非常實用的工具。這個專案目前處於穩定階段，值得立即使用，特別是對於需要快速獲取開發環境狀態的團隊。建議在需要即時狀態更新的情況下使用，但如果不使用 Claude Code，則不適合。

## 重點功能

- 狀態列顯示 — 顯示 API 限制、當前目錄和 Git 分支資訊。
- 簡單安裝 — 使用 `npx @kamranahmedse/claude-statusline` 一行命令安裝。
- 自動備份 — 安裝過程中自動備份舊的狀態列。
- 輕鬆卸載 — 使用 `npx @kamranahmedse/claude-statusline --uninstall` 恢復舊狀態列。
- 依賴管理 — 需要 `jq`、`curl` 和 `git` 作為依賴。

## 快速開始

1. 安裝狀態列
```bash
npx @kamranahmedse/claude-statusline
```
2. 檢查狀態列配置
```bash
cat ~/.claude/statusline.sh
```
3. 卸載狀態列
```bash
npx @kamranahmedse/claude-statusline --uninstall
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 專案作者 Kamran Ahmed 是知名的開發者，專注於提升開發者工具的效率。隨著 Claude Code 的使用增加，對於狀態列的需求也隨之上升。這個專案提供了一個簡單而有效的解決方案，正好切中開發者的需求。

## 適合誰使用

**目標受眾**：需要在 Claude Code 環境中快速獲取狀態資訊的開發者。

> [!example] 使用場景
> - 前端工程師用它來即時查看 API 限制和當前 Git 分支，因為這樣可以快速調整開發策略，避免超出限制。
> - 後端工程師用它來監控當前工作目錄的狀態，因為這樣可以減少切換上下文的時間，提高工作效率。
> - DevOps 工程師用它來檢查 Git 分支資訊，因為這樣可以在部署前確認當前狀態，降低錯誤風險。

## 優缺點分析

> [!success] 優點
> - 簡單易用的安裝流程，適合快速上手。
> - 提供即時的開發環境狀態，提升工作效率。
> - 自動備份功能，避免資料遺失。

> [!danger] 缺點
> - 僅限於 Claude Code 環境，對其他 IDE 不適用。
> - 依賴於外部工具，如 `jq` 和 `git`，需要額外安裝。
> - 功能較為簡單，無法滿足複雜需求。

> [!warning] 注意事項

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
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "kamranahmedse--claude-statusline"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，383 stars
