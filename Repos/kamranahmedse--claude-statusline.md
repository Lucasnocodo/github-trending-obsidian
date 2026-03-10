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
  - "簡單配置 Claude Code 狀態列，顯示限額和 Git 信息。"
---

# claude-statusline

**389** stars · **195** stars/天 · 建立 2 天前 · Shell · MIT

`easy-install`

> [!summary] 一句話摘要
> 簡單配置 Claude Code 狀態列，顯示限額和 Git 信息。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (195 stars/day)
> **適合** 需要快速配置 Claude Code 狀態列的開發者，特別是對 Git 信息有需求的使用者。
> **一句話重點** 這個專案展示了如何通過簡單的命令快速配置開發環境，讓開發者能夠更專注於編碼而非設置。

> [!abstract] 核心創新
> 這個專案提供了一個簡單的命令來快速配置 Claude Code 的狀態列，提升開發者的工作效率。

## 專案簡介

這個專案提供了一個簡單的方式來配置 Claude Code 的狀態列，顯示當前的使用限額、目錄和 Git 信息。用戶只需運行一個命令即可安裝，系統會自動備份舊的狀態列並將新的狀態列腳本複製到指定位置。這個工具依賴於 jq 和 curl 來解析 JSON 和獲取限額數據，確保用戶能夠隨時掌握使用情況。與其他狀態列工具相比，這個專案專注於簡化設置過程，並提供基本的 Git 信息顯示，適合需要快速配置的開發者。這個專案目前處於穩定階段，適合所有使用 Claude Code 的開發者。建議在需要快速查看狀態時使用，但如果需要更複雜的狀態顯示，可能需要考慮其他工具。

**技術棧**：`Shell` · `JavaScript`

## 重點功能

- 簡單安裝 — 只需運行一個命令即可完成配置。
- 狀態列顯示限額 — 實時顯示 Claude Code 的使用限額。
- Git 信息顯示 — 提供當前 Git 分支和狀態信息。
- 備份舊狀態列 — 安裝過程中自動備份舊的狀態列。
- 支持多種操作系統 — 可在 macOS 上運行。

## 快速開始

1. 運行安裝命令
```bash
npx @kamranahmedse/claude-statusline
```
2. 查看狀態列
```bash
打開 Claude Code 查看狀態列信息
```
3. 卸載狀態列
```bash
npx @kamranahmedse/claude-statusline --uninstall
```

## 程式碼範例

```bash
npx @kamranahmedse/claude-statusline
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Kamran Ahmed 專注於提升開發者的工作效率，這個專案滿足了對簡單狀態顯示的需求。隨著開發者對工具的需求不斷增加，這個簡單易用的狀態列配置工具因此受到關注。

## 適合誰使用

**目標受眾**：需要快速配置 Claude Code 狀態列的開發者，特別是對 Git 信息有需求的使用者。

> [!example] 使用場景
> - 開發者用它來快速查看 Claude Code 的使用限額，因為這樣能夠及時調整使用策略，避免超出限額。
> - 團隊領導用它來監控 Git 分支狀態，因為能夠在狀態列中直接顯示當前分支信息，提升工作效率。
> - 新手開發者用它來簡化 Claude Code 的配置過程，因為只需一個命令即可完成設置，降低了入門門檻。

## 優缺點分析

> [!success] 優點
> - 安裝過程簡單，快速配置狀態列。
> - 實時顯示使用限額，方便用戶監控。
> - 備份舊狀態列，避免數據丟失。

> [!danger] 缺點
> - 僅限於 Claude Code，無法擴展到其他編輯器。
> - 功能較為基礎，無法滿足高級用戶需求。
> - 需要額外依賴 jq 和 curl。

> [!warning] 注意事項
> - 僅支持 Claude Code，無法用於其他編輯器。
> - 需要安裝 jq 和 curl 等工具。
> - 功能相對簡單，無法提供複雜的狀態顯示。

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
