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
  - "讓 Claude Code 的狀態列顯示限制、目錄和 Git 資訊，提升開發效率。"
---

# claude-statusline

**389** stars · **195** stars/天 · 建立 2 天前 · Shell · MIT

`easy-install`

> [!summary] 一句話摘要
> 讓 Claude Code 的狀態列顯示限制、目錄和 Git 資訊，提升開發效率。

## 專案簡介

這個專案提供了一個簡單的工具，讓使用者能夠快速配置 Claude Code 的狀態列，顯示當前的使用限制、目錄和 Git 分支資訊。它透過一個簡單的命令安裝，並會自動備份舊的狀態列，確保使用者不會失去原有的配置。與其他類似工具相比，這個專案的獨特之處在於它專注於整合 Claude Code 的特定需求，並且使用 jq 和 curl 來獲取即時的使用限制數據。使用者可以輕鬆地安裝和卸載，並且不需要深入的技術背景。這個工具非常適合需要即時查看開發環境狀態的開發者，尤其是在使用 Claude Code 進行開發時。整體來說，這是一個成熟且值得嘗試的工具，特別適合日常開發工作。

**技術棧**：`Shell` · `JavaScript`

## 重點功能

- 顯示當前的使用限制和目錄資訊。
- 自動備份舊的狀態列配置。
- 簡單的命令行安裝和卸載。
- 整合 Git 分支資訊，方便查看當前開發狀態。
- 使用 jq 和 curl 獲取即時數據。

## 快速開始

1. 安裝狀態列工具
```bash
npx @kamranahmedse/claude-statusline
```
2. 查看狀態列配置
```bash
cat ~/.claude/statusline.sh
```
3. 卸載狀態列工具
```bash
npx @kamranahmedse/claude-statusline --uninstall
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 專案作者 Kamran Ahmed 是知名的開發者，對開發工具有深入的理解，這使得他的工具能夠切中使用者的需求。隨著 Claude Code 的使用者逐漸增加，對於狀態列的需求也隨之上升，這使得這個工具在短時間內受到關注。這個專案的推出時機正好符合開發者對於提升工作效率的迫切需求。

## 適合誰使用

**目標受眾**：使用 Claude Code 進行開發的工程師和開發團隊。

> [!example] 使用場景
> - 開發者 用它來 配置 Claude Code 的狀態列，因為這樣可以即時查看使用限制和 Git 資訊。
> - 團隊領導 用它來 監控開發進度，因為能夠快速獲取當前的 Git 分支狀態和目錄資訊。
> - 新手開發者 用它來 簡化環境設置，因為安裝過程簡單且不需要複雜的配置。

## 優缺點分析

> [!success] 優點
> - 安裝和使用過程簡單，適合各種技術水平的開發者。
> - 能夠即時顯示重要的開發資訊，提高工作效率。
> - 自動備份功能，避免配置丟失。

> [!danger] 缺點
> - 僅限於 Claude Code 環境，無法跨平台使用。
> - 需要額外安裝依賴工具 jq 和 curl。
> - 功能相對簡單，對於高級用戶可能不夠靈活。

> [!warning] 注意事項
> - 需要安裝 jq 和 curl。
> - 僅適用於 Claude Code 環境。
> - 不支援其他編輯器或 IDE。

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

相關概念：[[CLI/TUI]] · [[開發工具]] · [[Git]]

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
