---
repo: kamranahmedse/claude-statusline
url: https://github.com/kamranahmedse/claude-statusline
owner: kamranahmedse
owner_type: User
language: Shell
license: MIT
description: "Minimal Claude Code statusline setup I personally use"
homepage: ""
stars: 393
stars_per_day: 197
forks: 15
open_issues: 3
created: 2026-03-08
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓你的 Claude Code 狀態列顯示限制、目錄和 Git 資訊，簡化開發環境。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-17"
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
tags:
  - github
  - "category/開發工具"
  - "lang/shell"
  - easy_install
aliases:
  - "claude-statusline"
  - "kamranahmedse/claude-statusline"
  - "讓你的 Claude Code 狀態列顯示限制、目錄和 Git 資訊，簡化開發環境。"
---

# claude-statusline

**393** stars · **197** stars/天 · 建立 2 天前 · Shell · MIT

`easy-install`

> [!summary] 一句話摘要
> 讓你的 Claude Code 狀態列顯示限制、目錄和 Git 資訊，簡化開發環境。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (197 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 3 人
> **適合** 希望快速配置 Claude Code 狀態列以顯示重要資訊的開發者。
> **一句話重點** 這個專案讓開發者能夠輕鬆獲取關鍵的開發狀態資訊，提升工作效率。

> [!abstract] 核心創新
> 提供簡單的 CLI 工具來配置 Claude Code 狀態列，顯示關鍵開發資訊。

## 專案簡介

這個專案提供了一個簡單的工具，讓使用者能夠配置 Claude Code 的狀態列，顯示當前的 API 使用限制、當前工作目錄和 Git 分支資訊。使用者只需執行 `npx @kamranahmedse/claude-statusline`，系統會自動備份舊的狀態列並將新的狀態列腳本複製到 `~/.claude/statusline.sh`。此工具依賴於 `jq` 來解析 JSON 數據，並使用 `curl` 獲取 API 限制數據，還需要 `git` 來獲取當前分支資訊。與其他狀態列工具相比，這個專案專注於提供簡潔的狀態資訊，而不是複雜的功能，這使得它的設置過程非常簡單，適合希望快速配置的開發者。它的性能依賴於系統的命令行工具，對於小型專案來說非常合適，但在大型專案中可能會面臨性能瓶頸。這個專案目前處於穩定階段，適合任何需要簡化開發環境的開發者使用。對於需要更多自定義功能的使用者，可能需要考慮其他更複雜的狀態列工具。

**技術棧**：`Shell` · `JavaScript`

## 重點功能

- 簡單安裝 — 只需執行 `npx @kamranahmedse/claude-statusline` 即可完成安裝。
- 自動備份 — 安裝過程中會自動備份舊的狀態列設定。
- 顯示 API 限制 — 使用 `curl` 獲取當前的 API 使用限制。
- 顯示當前目錄 — 自動顯示當前工作目錄，方便開發者了解當前上下文。
- 顯示 Git 分支 — 透過 `git` 獲取當前分支資訊，幫助開發者掌握版本狀態。

## 快速開始

1. 安裝狀態列
```bash
npx @kamranahmedse/claude-statusline
```
2. 檢查依賴工具
```bash
brew install jq
```
3. 卸載狀態列
```bash
npx @kamranahmedse/claude-statusline --uninstall
```

## 程式碼範例

bash
# 安裝狀態列
npx @kamranahmedse/claude-statusline
# 預期輸出：狀態列顯示當前目錄、Git 分支及 API 限制資訊。

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的作者 Kamran Ahmed 以其簡潔的開發工具而聞名，過去也有多個受歡迎的開源專案。這個工具解決了開發者在使用 Claude Code 時，無法快速獲取重要狀態資訊的痛點。近期在社群中引發討論，可能是因為開發者對於簡化開發環境的需求日益增加，讓這個工具的實用性被廣泛認可。

## 適合誰使用

**目標受眾**：希望快速配置 Claude Code 狀態列以顯示重要資訊的開發者。

> [!example] 使用場景
> - 前端工程師用它來快速查看 API 使用限制和當前 Git 分支，因為這樣能夠即時掌握開發進度，避免超出限制。
> - 後端開發者用它來在開發過程中隨時檢查當前工作目錄，因為這樣能夠減少因目錄錯誤導致的錯誤。
> - 全端工程師用它來整合多個狀態資訊於一個簡潔的狀態列，因為這樣能夠提高開發效率，減少切換上下文的時間。

## 架構分析

這是一個 CLI 工具，使用者透過命令行介面進行安裝和配置。用戶輸入命令 → 系統備份舊狀態列並安裝新狀態列腳本 → 輸出新的狀態列顯示。核心技術決策是使用 `npx` 來簡化安裝過程，並依賴於 `jq` 和 `curl` 來獲取和解析必要的資訊。專案的目錄結構中，關鍵檔案為 `~/.claude/statusline.sh`，這是用來顯示狀態的腳本。

## 技術深入分析

這個工具的核心技術機制是使用 Shell 腳本來配置和顯示狀態列，透過 `jq` 解析 JSON 數據，並使用 `curl` 獲取 API 限制資訊。它能夠處理的資料量相對較小，因為主要是顯示當前的狀態資訊，對於大多數開發者來說，這樣的性能是足夠的。選擇使用 Shell 腳本的好處在於其跨平台的可用性，但這也意味著對於 Windows 使用者來說，無法直接使用。設計上，這個工具的簡單性使得它非常易於上手，但在功能上可能無法滿足所有開發者的需求，特別是那些需要高度自定義的使用者。隨著專案的擴展，可能會面臨需要增加更多功能的挑戰，但目前的設計已經能夠滿足基本需求。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和卸載的詳細指令。安裝過程相對順暢，只需一行命令即可完成。雖然沒有提供多語言支持，但對於英語使用者來說，理解上沒有障礙。整體來說，花 30 分鐘內能夠順利運行。

## 優缺點分析

> [!success] 優點
> - 安裝簡單，使用 `npx` 一行命令即可完成。
> - 能快速顯示多種關鍵開發資訊，提升開發效率。
> - 自動備份舊的狀態列設定，避免資料遺失。

> [!danger] 缺點
> - 僅限於 Unix-like 系統，Windows 使用者無法使用。
> - 功能相對簡單，無法滿足需要高度自定義的開發者需求。
> - 依賴於外部工具，若環境不完整可能無法正常運作。

> [!warning] 注意事項
> - 需要安裝 `jq`、`curl` 和 `git`。
> - 不支援 Windows 環境，主要針對 Unix-like 系統設計。
> - 僅適用於 Claude Code，無法與其他編輯器整合。

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

相關專案：[[op7418--Claude-to-IM-skill|op7418/Claude-to-IM-skill]] · [[runesleo--claude-code-workflow|runesleo/claude-code-workflow]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]]

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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

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

- [[2026-03-10|2026-03-10]] — 首次收錄，383 stars
