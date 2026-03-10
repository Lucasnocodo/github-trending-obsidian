---
repo: OasAIStudio/symphony-ts
url: https://github.com/OasAIStudio/symphony-ts
owner: OasAIStudio
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "Typecript version of https://github.com/openai/symphony"
homepage: ""
stars: 405
stars_per_day: 101
forks: 22
open_issues: 3
created: 2026-03-06
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
release_tag: "v0.1.7"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
aliases:
  - "symphony-ts"
  - "OasAIStudio/symphony-ts"
  - "將專案工作轉化為獨立的自動化實作運行，提升開發效率。"
---

# symphony-ts

**405** stars · **101** stars/天 · 建立 4 天前 · TypeScript · Apache-2.0

`ORG` `v0.1.7`

> [!summary] 一句話摘要
> 將專案工作轉化為獨立的自動化實作運行，提升開發效率。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (101 stars/day)
> **適合** 需要高效管理任務和自動化開發流程的中大型開發團隊。
> **一句話重點** 這個專案的強大之處在於它能夠將任務管理和自動化開發流程無縫結合，提升團隊效率。

> [!abstract] 核心創新
> Symphony 是一個將專案工作轉化為獨立、自動化實作運行的工具。

## 專案簡介

Symphony-ts 是 OpenAI Symphony 的 TypeScript 實作，旨在將專案管理與自動化開發結合。它的核心機制是從任務追蹤器讀取工作，為每個問題創建獨立的工作區，並在該範圍內運行編碼代理，提供清晰的運行時可見性和控制。專案依賴 Node.js 和 Codex app-server，並要求用戶提供有效的 WORKFLOW.md 文件和 LINEAR_API_KEY。與其他 CI/CD 工具相比，Symphony-ts 的獨特之處在於它的高信任度和自動化能力，能夠在獨立的工作區中進行多次重試和狀態清理。使用者可以在本地啟動一個儀表板，實時監控進度。對於需要高效管理任務的開發團隊，這是一個值得考慮的工具。建議在有一定開發經驗的團隊中使用，對於小型專案或初學者則可能過於複雜。

**技術棧**：`Node.js >= 22` · `TypeScript` · `Codex app-server`

## 重點功能

- 自動化工作區創建 — 根據任務自動生成獨立工作區。
- 實時監控儀表板 — 提供運行狀態和進度的即時更新。
- 支持多種編碼代理 — 能夠與 Codex 等多種代理集成。
- 高信任度運行 — 需要用戶確認高信任預覽，確保安全性。
- 自定義工作流程 — 用戶可根據需求編寫 WORKFLOW.md 文件，靈活配置。

## 快速開始

1. 安裝 Symphony-ts
```bash
npm install -g symphony-ts
```
2. 設置 WORKFLOW.md 文件
```bash
在你的專案根目錄創建 WORKFLOW.md
```
3. 啟動 Symphony
```bash
symphony ./WORKFLOW.md --acknowledge-high-trust-preview --port 4321
```

## 程式碼範例

```bash
export LINEAR_API_KEY=your-linear-token
symphony ./WORKFLOW.md --acknowledge-high-trust-preview --port 4321
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 專案的作者來自於開源社群，專注於提升開發效率的需求。隨著遠端工作和自動化的普及，這樣的工具在開發者中引起了廣泛的關注。特別是在開發流程中需要高效管理的團隊，這個工具的需求日益增加。

## 適合誰使用

**目標受眾**：需要高效管理任務和自動化開發流程的中大型開發團隊。

> [!example] 使用場景
> - 軟體開發團隊用它來自動化任務管理，因為能夠減少手動操作，提高效率。
> - 項目經理用它來監控開發進度，因為提供了即時的儀表板和狀態更新。
> - 開發者用它來快速創建工作區，因為能夠自動化配置和環境設置，節省時間。

## 優缺點分析

> [!success] 優點
> - 能夠自動化工作流程，減少手動操作。
> - 提供實時監控儀表板，方便進度跟蹤。
> - 支持多種編碼代理，靈活性高。

> [!danger] 缺點
> - 需要較高的配置和設置，對初學者不友好。
> - 依賴於外部 API，增加了使用的複雜度。
> - 不適合小型專案，可能過於繁瑣。

> [!warning] 注意事項
> - 需要有效的 LINEAR_API_KEY 進行操作。
> - 僅支持 Node.js 22 以上版本。
> - 需要 Codex app-server 的支持，增加了配置複雜度。
> - 不適合小型專案，因為需要較多的設置和配置。

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

[GitHub](https://github.com/OasAIStudio/symphony-ts)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "OasAIStudio--symphony-ts"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，397 stars
