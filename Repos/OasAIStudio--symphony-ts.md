---
repo: OasAIStudio/symphony-ts
url: https://github.com/OasAIStudio/symphony-ts
owner: OasAIStudio
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "Typecript version of https://github.com/openai/symphony"
homepage: ""
stars: 410
stars_per_day: 103
forks: 22
open_issues: 3
created: 2026-03-06
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: "v0.1.7"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "將專案工作轉化為獨立的自動化實作運行，讓開發者專注於問題解決而非環境配置。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "symphony-ts"
  - "OasAIStudio/symphony-ts"
  - "將專案工作轉化為獨立的自動化實作運行，讓開發者專注於問題解決而非環境配置。"
---

# symphony-ts

**410** stars · **103** stars/天 · 建立 4 天前 · TypeScript · Apache-2.0

`ORG` `v0.1.7` `easy-install`

> [!summary] 一句話摘要
> 將專案工作轉化為獨立的自動化實作運行，讓開發者專注於問題解決而非環境配置。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (103 stars/day)
> **授權** Apache-2.0 (商業友好)
> **適合** 需要在 Node.js 環境下自動化專案管理的開發團隊。
> **一句話重點** Symphony-ts 讓開發者能夠在受信環境中自動化專案工作，顯著提高了工作效率。

> [!abstract] 核心創新
> 這個專案提供了一個獨立的工作空間來運行編碼代理，並且能夠即時監控和管理工作進度。

## 專案簡介

Symphony-ts 是一個 TypeScript 實作，旨在將專案工作轉化為獨立的自動化實作運行。它透過讀取工作追蹤器的內容，為每個問題創建專屬的工作空間，並在該邊界內運行編碼代理，讓操作員能夠清楚地看到運行狀態、重試和控制。此專案依賴 Node.js 22 以上版本，並需要有效的 WORKFLOW.md 和 LINEAR_API_KEY。與其他類似工具相比，Symphony-ts 提供了即時的網頁儀表板和 JSON API，讓開發者能夠更方便地監控和管理工作進度。使用者需要手動創建 WORKFLOW.md，這在某些情況下可能會增加設置的複雜性。儘管如此，Symphony-ts 的設計使得它在處理多個問題時能夠保持高效，並且能夠清晰地顯示重試和清理狀態。這個專案目前處於 beta 階段，適合中小型團隊使用，尤其是那些需要在受信環境中進行開發的團隊。對於需要快速迭代和實驗的開發者，Symphony-ts 是一個值得考慮的選擇，但對於不熟悉 Node.js 環境的使用者可能會有一定的學習曲線。

**技術棧**：`TypeScript` · `Node.js >= 22`

## 重點功能

- 獨立工作空間 — 每個問題創建專屬的工作空間，避免環境衝突。
- 即時儀表板 — 當使用 --port 參數時，提供實時更新的網頁儀表板。
- JSON API — 提供 API 介面，方便與其他工具集成。
- 自動重試機制 — 針對失敗的任務自動重試，保持工作流的連續性。
- 支持多種編碼代理 — 可配置不同的編碼代理來處理任務。

## 快速開始

1. 安裝 symphony-ts
```bash
npm install -g symphony-ts
```
2. 設定環境變數
```bash
export LINEAR_API_KEY=your-linear-token
```
3. 啟動 Symphony
```bash
symphony ./WORKFLOW.md --acknowledge-high-trust-preview --port 4321
```

## 程式碼範例

```bash
symphony ./WORKFLOW.md --acknowledge-high-trust-preview --port 4321
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 該專案由 Octane0411 和 Aubrey-M-ops 貢獻，兩位開發者在開源社群中有一定的影響力。Symphony-ts 解決了在多任務環境中自動化實作的痛點，特別是對於需要在受信環境中工作的開發者。最近的討論和需求增加，促使這個專案在開源社群中獲得關注。隨著對自動化和高效開發流程的需求上升，這個工具的推出正好符合市場需求。

## 適合誰使用

**目標受眾**：需要在 Node.js 環境下自動化專案管理的開發團隊。

> [!example] 使用場景
> - 後端工程師用它來自動化處理 Linear 問題，因為這樣可以節省手動配置環境的時間，並提高工作效率。
> - 專案經理用它來監控專案進度，因為即時儀表板能夠清晰顯示每個問題的狀態，幫助做出快速決策。
> - 全端開發者用它來測試不同的編碼代理，因為能夠在獨立的工作空間中進行實驗，降低了對主環境的影響。

## 架構分析

Symphony-ts 採用 CLI 工具架構，使用者透過命令行介面輸入指令來啟動工作流。用戶輸入 → Symphony 讀取 WORKFLOW.md → 創建工作空間並運行編碼代理。關鍵技術決策包括使用 Node.js 作為執行環境，並依賴於 LINEAR_API_KEY 進行工作追蹤。專案目錄結構中，WORKFLOW.md 是核心配置文件，定義了追蹤器和工作空間的設置。

## 優缺點分析

> [!success] 優點
> - 能夠自動化處理多個問題，提升開發效率。
> - 即時儀表板提供清晰的工作狀態視圖。
> - 支持多種編碼代理，靈活性高。

> [!danger] 缺點
> - 需要手動配置 WORKFLOW.md，對新手不友好。
> - 僅支持特定的工作追蹤器，限制了使用範圍。
> - 目前處於 beta 階段，穩定性可能不足。

> [!warning] 注意事項
> - 僅支援 Node.js 22 以上版本
> - 需要手動創建 WORKFLOW.md，增加設置複雜性
> - 目前僅支持 Linear 作為工作追蹤器

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 22 |
| Open Issues | 3 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-06 |
| Repo 大小 | 1.8 MB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 98
>     "JavaScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Octane0411](https://github.com/Octane0411) | 107 |
> | [@Aubrey-M-ops](https://github.com/Aubrey-M-ops) | 8 |

**最新版本**：v0.1.7 (2026-03-10)

## README 摘錄

> [!info]- 展開查看原文 README
> # Symphony-ts
> 
> **This project is an unofficial TypeScript implementation of [OpenAI Symphony](https://github.com/openai/symphony).**
> 
> Symphony-ts turns project work into isolated, autonomous implementation runs: it reads work from
> your tracker, creates a dedicated workspace for each issue, runs a coding agent inside that
> boundary, and gives operators a clean surface for runtime visibility, retries, and control.
> 
> > [!WARNING]
> > Symphony is intended for trusted environments.
> 
> ## Running Symphony
> 
> ### Requirements
> 
> - Node.js `>= 22`
> - a repository with a valid `WORKFLOW.md`
> - tracker credentials such as `LINEAR_API_KEY`
> - a coding agent runtime that supports app-server mode, such as `codex app-server`
> 
> ### Install
> 
> ```bash
> npm install -g symphony-ts
> ```
> 
> Verify the CLI is available:
> 
> ```bash
> symphony --help
> ```
> 
> ### Quickstart
> 
> 1. Go to the repository you want Symphony to operate on.
> 2. Create `WORKFLOW.md` in that repository.
> 3. Export `LINEAR_API_KEY`.
> 4. Start Symphony from that repository root.
> 
> ```bash
> cd /path/to/your-repo
> export LINEAR_API_KEY=your-linear-token
> symphony ./WORKFLOW.md --acknowledge-high-trust-preview --port 4321
> ```
> 
> If you do not pass a path, Symphony defaults to `./WORKFLOW.md`:
> 
> ```bash
> symphony --acknowledge-high-trust-preview --port 4321
> ```
> 
> You can also run without global install:
> 
> ```bash
> npx symphony-ts ./WORKFLOW.md --acknowledge-high-trust-preview --port 4321
> ```
> 
> Symphony does not generate `WORKFLOW.md` for you. It expects a repository-owned workflow file and,
> by default, reads `./WORKFLOW.md` from the current working directory.
> 
> Agent setup prompt
> 
> ```text
> Set up and start Symphony in this repository.
> 
> Requirements:
> - create or update WORKFLOW.md for Linear
> - use LINEAR_API_KEY from the environment or tell me exactly which variable is missing
> - install symphony-ts and start Symphony with the required --acknowledge-high-trust-preview flag
> - if startup fails, stop and report the exact failing step and command
> ```
> 
> ### `WORKFLOW.md` template
> 
> ```md
> ---
> tracker:
>   kind: linear
>   api_key: $LINEAR_API_KEY
>   project_slug: your-linear-project-slug
> workspace:
>   root: ~/code/symphony-workspaces
> codex:
>   command: codex app-server
> server:
>   port: 4321
> ---
> 
> You are working on Linear issue {{ issue.identifier }}.
> Implement the task, validate the result, and stop at the required handoff state.
> ```
> 
> This is the only example `WORKFLOW.md` you need to get started. Copy it into your repository root
> as `WORKFLOW.md`, then change these fields before starting Symphony:
> 
> - `tracker.project_slug`
> - `workspace.root`
> - `codex.command`
> 
> If you want the dashboard, keep `server.port` in the workflow or pass `--port` on the CLI.
> The web dashboard now opens with a server-rendered snapshot and continues updating live in the
> browser over server-sent events.
> 
> If your agent workflow needs access to environment variables from the launching shell, configure
> Codex to inherit them in `codex.command`, for example:
> 
> ```yaml
> codex:
>   command: codex --config shell_environment_policy.inherit=all app-server
> ```
> 
> If your agent must push branches, open PRs, or call external APIs during a turn, also configure a
> turn sandbox policy that explicitly allows network access instead of relying on a minimal
> `workspaceWrite` sandbox object.
> 
> If a specific external CLI still does not see the credentials it needs in your environment, provide
> that tool's credential via environment variables before launching Symphony.
> 
> For a complete reference covering every supported field with defaults and inline documentation, see
> [docs/WORKFLOW.template.md](docs/WORKFLOW.template.md).
> 
> ### What You Get
> 
> Once Symphony is running, it will:
> 
> - poll your tracker for eligible work
> - create a dedicated workspace per issue
> - run your coding agent inside that workspace
> - expose a local dashboard and JSON API when `--port` or `server.port` is set
> - keep retry, reconciliation, and cleanup state visible to operators
> 
> ### Develop
> 
> To develop Symphony itself you will need:
> 
> - Nod

## 延伸閱讀

相關概念：[[自動化]] · [[CI/CD]] · [[API 設計]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]]

[GitHub](https://github.com/OasAIStudio/symphony-ts)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "OasAIStudio--symphony-ts"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "OasAIStudio--symphony-ts"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，397 stars
