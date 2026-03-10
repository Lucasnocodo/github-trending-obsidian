---
repo: OasAIStudio/symphony-ts
url: https://github.com/OasAIStudio/symphony-ts
owner: OasAIStudio
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "Typecript version of https://github.com/openai/symphony"
homepage: ""
stars: 407
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
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "symphony-ts"
  - "OasAIStudio/symphony-ts"
  - "將專案工作轉換為獨立的自動化執行環境，讓開發者能夠更有效率地管理任務。"
---

# symphony-ts

**407** stars · **102** stars/天 · 建立 4 天前 · TypeScript · Apache-2.0

`ORG` `v0.1.7` `easy-install`

> [!summary] 一句話摘要
> 將專案工作轉換為獨立的自動化執行環境，讓開發者能夠更有效率地管理任務。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (102 stars/day)
> **適合** 需要在專案中自動化任務管理並希望提高開發效率的中小型團隊。
> **一句話重點** 這個專案最厲害的不是功能，而是它提供了一個清晰的工作流管理方式，讓開發者能夠專注於編碼而非任務追蹤。

> [!abstract] 核心創新
> Symphony-ts 提供了一個獨立的工作區和即時儀表板，讓開發者能夠更好地管理和監控任務進度。

## 專案簡介

Symphony-ts 是一個 TypeScript 實作的工具，旨在將專案中的任務轉化為獨立的執行環境。它從任務追蹤器讀取工作，為每個問題創建專屬的工作區，並在該邊界內運行編碼代理，提供運行時的可見性和控制。這個工具依賴於 Node.js 和有效的 WORKFLOW.md 文件，並需要 LINEAR_API_KEY 來進行身份驗證。與其他類似工具相比，Symphony-ts 的獨特之處在於它的工作區隔離和專用的本地儀表板，這使得開發者能夠更好地管理和監控任務進度。使用者可以透過簡單的 CLI 指令來啟動 Symphony，並且可以自定義 WORKFLOW.md 以符合專案需求。儘管目前版本仍在開發中，這個工具已經展示出良好的潛力，適合中小型團隊使用。對於需要自動化任務管理的開發者來說，這是一個值得考慮的選擇，但在生產環境中使用時需謹慎考量其穩定性。

**技術棧**：`TypeScript` · `Node.js >= 22`

## 重點功能

- 獨立工作區 — 為每個任務創建專屬的工作環境，避免相互干擾。
- 本地儀表板 — 提供即時的任務進度和狀態更新，便於監控。
- 支持多種編碼代理 — 能夠運行不同的編碼代理，提升靈活性。
- CLI 操作簡單 — 透過簡單的指令啟動和管理 Symphony，降低使用門檻。
- 自定義 WORKFLOW.md — 允許用戶根據專案需求自定義工作流配置。

## 快速開始

1. 安裝 symphony-ts
```bash
npm install -g symphony-ts
```
2. 創建 WORKFLOW.md 文件
```bash
在專案根目錄創建 WORKFLOW.md
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
> 這個專案的作者背景來自於開源社群，對於自動化和任務管理有深入的理解。它切中開發者對於提高工作效率的需求，尤其是在多任務環境中。隨著遠端工作的普及，這種工具的需求越來越明顯，特別是在需要快速迭代的開發流程中。

## 適合誰使用

**目標受眾**：需要在專案中自動化任務管理並希望提高開發效率的中小型團隊。

> [!example] 使用場景
> - 後端工程師用它來自動化任務追蹤和執行，因為這樣能夠減少手動管理的時間，提升工作效率。
> - 專案經理用它來監控任務進度和狀態，因為它提供了即時的儀表板和可視化的工作流。
> - 全端開發者用它來整合不同的編碼代理，因為它支持多種代理的運行，讓開發過程更為靈活。

## 架構分析

Symphony-ts 採用 CLI 工具架構，核心資料流為：用戶輸入 → 解析 WORKFLOW.md → 創建工作區 → 運行編碼代理。關鍵技術決策包括使用 Node.js 作為執行環境和支持多種編碼代理。專案目錄結構中，WORKFLOW.md 是必需的配置文件，並且 CLI 入口在 dist/src/cli/main.js。

## 優缺點分析

> [!success] 優點
> - 提供獨立的工作區，避免任務之間的干擾。
> - 即時儀表板讓開發者能夠快速了解任務狀態。
> - 支持多種編碼代理，靈活性高。

> [!danger] 缺點
> - 目前僅支持 Linear，限制了使用範圍。
> - 需要用戶手動創建 WORKFLOW.md，增加了初始設置的複雜度。
> - 仍在開發中，可能存在穩定性問題。

> [!warning] 注意事項
> - 僅支援 Node.js 22 以上版本。
> - 需要有效的 WORKFLOW.md 文件，否則無法運行。
> - 目前僅支持 Linear 作為任務追蹤器，未來計畫擴展至其他平台。

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

相關概念：[[自動化測試]] · [[CI/CD]] · [[微服務]]

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
