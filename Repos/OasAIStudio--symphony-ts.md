---
repo: OasAIStudio/symphony-ts
url: https://github.com/OasAIStudio/symphony-ts
owner: OasAIStudio
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "Typecript version of https://github.com/openai/symphony"
homepage: ""
stars: 408
stars_per_day: 102
forks: 22
open_issues: 3
created: 2026-03-06
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
release_tag: "v0.1.7"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "將專案工作轉化為獨立的自動化執行，讓開發者專注於代碼而非管理。"
priority: medium
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "symphony-ts"
  - "OasAIStudio/symphony-ts"
  - "將專案工作轉化為獨立的自動化執行，讓開發者專注於代碼而非管理。"
---

# symphony-ts

**408** stars · **102** stars/天 · 建立 4 天前 · TypeScript · Apache-2.0

`ORG` `v0.1.7` `easy-install`

> [!summary] 一句話摘要
> 將專案工作轉化為獨立的自動化執行，讓開發者專注於代碼而非管理。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (102 stars/day)
> **適合** 需要在 TypeScript 環境中自動化任務執行的開發者。
> **一句話重點** Symphony-ts 的設計讓開發者能夠在安全的環境中自動化任務執行，這對於提高開發效率至關重要。

> [!abstract] 核心創新
> 這個專案提供了一種新的方式來將任務管理和代碼執行自動化，減少了開發者的手動干預。

## 專案簡介

Symphony-ts 是 OpenAI Symphony 的 TypeScript 實作，旨在將專案工作轉化為獨立的自動化執行。它會從任務追蹤器讀取工作，為每個問題創建專屬的工作區，並在該邊界內運行編碼代理，提供清晰的運行時可見性和控制。技術上，它依賴 Node.js 和 Codex app-server，並使用 WORKFLOW.md 文件來定義任務流程。與其他工具相比，Symphony-ts 的獨特之處在於它的工作區隔離和自動重試機制，這使得開發者可以在安全的環境中進行多任務處理。使用上，Symphony-ts 需要 Node.js 22 以上和有效的 LINEAR_API_KEY，並且在本地運行時會提供一個即時更新的儀表板。這個專案目前在 alpha 階段，適合小型團隊或個人開發者進行實驗和開發。建議在需要自動化任務執行的情況下使用，但如果需要穩定的生產環境，則應謹慎考慮。

**技術棧**：`Node.js >= 22` · `TypeScript`

## 重點功能

- 獨立工作區 — 為每個任務創建專屬的工作區，避免環境干擾。
- 即時儀表板 — 當設置 --port 時，提供實時更新的儀表板以監控任務狀態。
- 重試機制 — 自動重試失敗的任務，確保任務執行的穩定性。
- 支持多種編碼代理 — 可以使用 codex app-server 進行任務執行，靈活性高。
- 自定義工作流程 — 透過 WORKFLOW.md 文件自定義任務執行流程，適應不同專案需求。

## 快速開始

1. 安裝 symphony-ts
```bash
npm install -g symphony-ts
```
2. 設置工作流程文件
```bash
在你的專案根目錄創建 WORKFLOW.md
```
3. 啟動 Symphony
```bash
export LINEAR_API_KEY=your-linear-token && symphony ./WORKFLOW.md --acknowledge-high-trust-preview --port 4321
```

## 程式碼範例

```bash
symphony ./WORKFLOW.md --acknowledge-high-trust-preview --port 4321
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者背景顯示其對開源和自動化有深入的理解，這個專案切中開發者對於自動化任務管理的需求。隨著遠端工作模式的普及，開發者對於提高工作效率的工具需求上升，這讓 Symphony-ts 獲得了關注。

## 適合誰使用

**目標受眾**：需要在 TypeScript 環境中自動化任務執行的開發者。

> [!example] 使用場景
> - 後端工程師用它來自動化處理 Linear 任務，因為這樣可以節省手動管理任務的時間，並提高工作效率。
> - 專案經理用它來監控任務進度，因為它提供了即時的儀表板和可視化的任務狀態。
> - 獨立開發者用它來快速測試和部署新功能，因為它能夠在隔離的環境中運行代碼，減少了環境衝突的風險。

## 架構分析

Symphony-ts 採用 CLI 工具架構，使用者輸入任務追蹤器的 API 金鑰和工作流程文件，系統會自動創建工作區並運行編碼代理。資料流為：用戶輸入 → 任務追蹤器查詢 → 創建工作區 → 執行編碼代理 → 輸出結果至儀表板。關鍵技術決策包括使用 Node.js 作為執行環境，並依賴 WORKFLOW.md 文件來定義任務流程。

## 優缺點分析

> [!success] 優點
> - 提供獨立的工作區，減少環境干擾。
> - 即時儀表板可視化任務狀態，方便監控。
> - 自動重試機制提高任務執行的穩定性。

> [!danger] 缺點
> - 目前仍在 alpha 階段，可能存在不穩定的情況。
> - 需要額外配置 WORKFLOW.md 文件，對新手不友好。
> - 不支持 Windows 環境，限制了使用範圍。

> [!warning] 注意事項
> - 僅支援 Node.js 22 以上版本。
> - 需要有效的 LINEAR_API_KEY，否則無法運行。
> - 不支持 Windows 環境，需在類 Unix 系統上運行。
> - 目前仍在 alpha 階段，可能存在不穩定的情況。

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

相關概念：[[自動化測試]] · [[微服務]] · [[CI/CD]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

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

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，397 stars
