---
repo: OasAIStudio/symphony-ts
url: https://github.com/OasAIStudio/symphony-ts
owner: OasAIStudio
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "Typecript version of https://github.com/openai/symphony"
homepage: ""
stars: 402
stars_per_day: 101
forks: 21
open_issues: 3
created: 2026-03-06
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
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
  - "將專案工作轉化為自主運行的實作，提升開發效率。"
---

# symphony-ts

**402** stars · **101** stars/天 · 建立 4 天前 · TypeScript · Apache-2.0

`ORG` `v0.1.7` `easy-install`

> [!summary] 一句話摘要
> 將專案工作轉化為自主運行的實作，提升開發效率。

> [!abstract] 核心創新
> 將專案任務轉化為自主運行的實作，提升開發效率。

## 專案簡介

這個專案是 OpenAI Symphony 的 TypeScript 實作，旨在將專案任務轉化為獨立的運行環境。它透過 Node.js 和 TypeScript 實現，並依賴於 LINEAR API 來管理任務。與其他類似工具相比，Symphony-ts 的獨特之處在於它能夠自動創建工作空間，並在每個任務中運行代碼代理，提供即時的可視化和控制。實際使用中，這個工具能顯著提高開發者的工作效率，但需要在受信環境中運行。對於需要高效管理多個任務的開發團隊來說，這是一個值得嘗試的工具。

**技術棧**：`TypeScript` · `JavaScript` · `Node.js`

## 重點功能

- 自動創建專案工作空間，提升任務管理效率。
- 支持 LINEAR API，便於任務追蹤。
- 提供即時可視化和控制的運行環境。
- 可在受信環境中運行，確保安全性。
- 簡單的 CLI 使用方式，易於上手。

## 快速開始

1. 安裝 symphony-ts
```bash
npm install -g symphony-ts
```
2. 創建 WORKFLOW.md 文件
```bash
在專案根目錄創建 WORKFLOW.md
```
3. 設置 LINEAR_API_KEY 環境變數
```bash
export LINEAR_API_KEY=your-linear-token
```
4. 啟動 Symphony
```bash
symphony ./WORKFLOW.md --acknowledge-high-trust-preview --port 4321
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 專案由開發者社群推動，切合了開發者對於提高工作效率的需求。隨著遠端工作和自動化的興起，這類工具的需求也在增加。開源社群的支持使得這個專案能夠快速發展。

## 適合誰使用

**目標受眾**：需要高效任務管理和自動化的開發團隊和個人開發者。

> [!example] 使用場景
> - 開發者 用它來 自動化任務管理，因為 可以提升工作效率和專注度。
> - 團隊領導 用它來 監控專案進度，因為 提供即時的可視化和控制。
> - 產品經理 用它來 整合任務追蹤，因為 能夠自動創建工作空間並管理任務。

## 架構分析

專案基於 Node.js，前端使用 TypeScript，後端則通過 LINEAR API 進行任務管理。資料流是 用戶輸入 → CLI 指令 → LINEAR API 請求 → 生成工作空間。

## 優缺點分析

> [!success] 優點
> - 自動化任務管理，顯著提高開發效率。
> - 即時可視化和控制，便於監控進度。
> - 簡單易用的 CLI，降低使用門檻。

> [!danger] 缺點
> - 需要在受信環境中運行，限制了使用場景。
> - 依賴外部 API，需確保 API 金鑰的安全性。
> - 不會自動生成工作流文件，需手動創建。

> [!warning] 注意事項
> - 需要在受信環境中運行，限制了使用場景。
> - 依賴 LINEAR API，需確保 API 金鑰的安全性。
> - 不會自動生成 WORKFLOW.md，需手動創建。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| OpenAI Symphony | 原始版本，功能相似但不支援 TypeScript。 |
| GitHub Actions | 更側重於 CI/CD，而非任務管理和運行環境。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 21 |
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
> as `WORKFLOW.md`, then change these fields b

## 延伸閱讀

相關概念：[[自動化工作流]] · [[任務管理]] · [[開發效率工具]]

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

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，397 stars
