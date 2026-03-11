---
repo: kamranahmedse/claude-statusline
url: https://github.com/kamranahmedse/claude-statusline
owner: kamranahmedse
owner_type: User
language: Shell
license: MIT
description: "Minimal Claude Code statusline setup I personally use"
homepage: ""
stars: 392
stars_per_day: 196
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
use_case: "讓你的 Claude Code 狀態列顯示限制、目錄和 Git 資訊，簡化開發流程。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/開發工具"
  - "lang/shell"
  - easy_install
aliases:
  - "claude-statusline"
  - "kamranahmedse/claude-statusline"
  - "讓你的 Claude Code 狀態列顯示限制、目錄和 Git 資訊，簡化開發流程。"
---

# claude-statusline

**392** stars · **196** stars/天 · 建立 2 天前 · Shell · MIT

`easy-install`

> [!summary] 一句話摘要
> 讓你的 Claude Code 狀態列顯示限制、目錄和 Git 資訊，簡化開發流程。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (196 stars/day)
> **授權** MIT (商業友好)
> **適合** 需要在 Claude Code 環境中快速獲取開發狀態的獨立開發者。
> **一句話重點** 這個專案讓開發者能夠快速獲取 Claude Code 的重要資訊，提升開發效率。

> [!abstract] 核心創新
> 這個專案提供了一個專門針對 Claude Code 的狀態列配置工具，簡化了開發者的工作流程。

## 專案簡介

這個專案提供了一個簡單的工具來配置 Claude Code 的狀態列，顯示當前的 API 限制、工作目錄和 Git 分支資訊。使用者只需執行 `npx @kamranahmedse/claude-statusline`，系統會自動備份舊的狀態列，並將新的狀態列腳本複製到 `~/.claude/statusline.sh`。此工具依賴於 `jq` 來解析 JSON 數據，並使用 `curl` 獲取 API 限制數據，還需要 `git` 來顯示當前分支。與其他狀態列工具相比，這個專案專注於 Claude Code 的特定需求，提供了針對性更強的功能。使用效果上，這個工具能夠快速顯示重要的開發資訊，提升開發者的工作效率，但需要安裝額外的依賴工具。這個專案目前在 alpha 階段，適合對 Claude Code 有需求的開發者使用。建議在需要快速獲取開發狀態時使用，但對於不使用 Claude Code 的開發者則不適合。

## 重點功能

- 狀態列配置 — 使用 `npx @kamranahmedse/claude-statusline` 指令快速設置狀態列。
- 自動備份 — 自動備份舊的狀態列，確保不會丟失原有配置。
- 顯示 API 限制 — 透過 `curl` 獲取並顯示當前的 API 限制資訊。
- 顯示 Git 分支 — 自動獲取當前 Git 分支資訊，方便開發者了解版本狀態。
- 簡單卸載 — 使用 `npx @kamranahmedse/claude-statusline --uninstall` 指令可輕鬆卸載並恢復舊狀態列。

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

```bash
# 安裝狀態列
npx @kamranahmedse/claude-statusline
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Kamran Ahmed 以其在開發者工具領域的貢獻而知名，過去有多個受歡迎的專案。這個工具解決了開發者在使用 Claude Code 時，無法快速獲取關鍵資訊的痛點。近期在社群中引起討論，可能是因為使用 Claude Code 的開發者對於狀態列的需求增加。隨著更多開發者轉向使用 Claude Code，這個工具的實用性也隨之提升。

## 適合誰使用

**目標受眾**：需要在 Claude Code 環境中快速獲取開發狀態的獨立開發者。

> [!example] 使用場景
> - 前端工程師用它來快速查看 API 限制和當前 Git 分支，因為這樣可以即時調整開發策略，避免超出限制。
> - 後端開發者用它來監控當前工作目錄和 Git 狀態，因為這樣能夠減少在命令行中切換的時間，提高開發效率。
> - DevOps 工程師用它來整合 Claude Code 的使用狀態到 CI/CD 流程中，因為這樣能夠在自動化部署中即時獲得關鍵資訊。

## 優缺點分析

> [!success] 優點
> - 快速安裝和配置，無需複雜的設置步驟。
> - 自動備份功能，確保不會丟失原有的狀態列配置。
> - 針對 Claude Code 的特定需求，提供了實用的資訊顯示。

> [!danger] 缺點
> - 需要額外安裝依賴工具，增加了使用的複雜性。
> - 僅限於 Claude Code 環境，對於其他開發者工具無法使用。
> - 目前仍在 alpha 階段，可能存在不穩定性。

> [!warning] 注意事項
> - 需要安裝 `jq`、`curl` 和 `git`，增加了使用門檻。
> - 僅支援 Claude Code 環境，對其他開發環境不適用。
> - 目前處於 alpha 階段，可能存在不穩定的情況。

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
