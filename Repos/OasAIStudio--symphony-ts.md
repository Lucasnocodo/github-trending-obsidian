---
repo: OasAIStudio/symphony-ts
url: https://github.com/OasAIStudio/symphony-ts
owner: OasAIStudio
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "Typecript version of https://github.com/openai/symphony"
homepage: ""
stars: 411
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
use_case: "將專案工作轉化為獨立的自動化執行，讓開發者專注於實際工作而非監控過程。"
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
  - "將專案工作轉化為獨立的自動化執行，讓開發者專注於實際工作而非監控過程。"
---

# symphony-ts

**411** stars · **103** stars/天 · 建立 4 天前 · TypeScript · Apache-2.0

`ORG` `v0.1.7` `easy-install`

> [!summary] 一句話摘要
> 將專案工作轉化為獨立的自動化執行，讓開發者專注於實際工作而非監控過程。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (103 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人
> **適合** 需要在高信任環境中自動化任務處理的開發團隊或專案經理。
> **一句話重點** 這個專案展示了如何將任務管理與自動化執行結合，讓開發者能專注於實際工作。

> [!abstract] 核心創新
> 提供了一個獨立的工作空間來執行任務，避免了共享環境的問題。

## 專案簡介

Symphony-ts 是一個 TypeScript 實現的工具，能夠將專案管理系統中的任務轉化為獨立的工作執行環境。它從任務追蹤器讀取任務，為每個問題創建專屬的工作空間，並在該空間內運行編碼代理，最終提供給操作員一個清晰的運行狀態和控制界面。這個工具依賴於 Node.js 和一個有效的 WORKFLOW.md 文件，並需要 LINEAR_API_KEY 來進行身份驗證。當 Symphony 運行時，它會持續監控任務追蹤器，創建每個問題的工作空間，並在該空間內執行編碼代理，還能在啟用端口時提供本地儀表板和 JSON API。與其他類似工具相比，Symphony-ts 專注於將每個任務隔離到獨立的執行環境中，這樣可以避免共享可變目錄的問題。這使得開發者能夠專注於實際的開發工作，而不必擔心任務之間的干擾。該工具的設計適合需要高信任環境的團隊，並且在多任務處理方面表現良好。對於小型團隊或個人開發者來說，這是一個值得考慮的解決方案，特別是在需要自動化處理多個任務的情境下。使用者需要注意的是，該工具目前仍在開發中，未來可能會增加對更多平台的支持。

**技術棧**：`TypeScript` · `Node.js >= 22`

## 重點功能

- 獨立工作空間 — 每個問題創建專屬的工作空間，避免任務之間的干擾。
- 本地儀表板 — 當啟用端口時，提供實時更新的儀表板和 JSON API。
- 自動任務監控 — 持續監控任務追蹤器，並自動創建工作空間。
- 環境變數支持 — 允許代理訪問啟動時的環境變數。
- 支持多個編碼代理 — 可以配置不同的編碼代理來處理任務。

## 快速開始

1. 全域安裝 symphony-ts
```bash
npm install -g symphony-ts
```
2. 設置 LINEAR_API_KEY 環境變數
```bash
export LINEAR_API_KEY=your-linear-token
```
3. 啟動 Symphony
```bash
symphony ./WORKFLOW.md --acknowledge-high-trust-preview --port 4321
```

## 程式碼範例

```bash
# 假設已經設置好 WORKFLOW.md
export LINEAR_API_KEY=your-linear-token
symphony ./WORKFLOW.md --acknowledge-high-trust-preview --port 4321
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案由 Octane0411 和 Aubrey-M-ops 共同開發，兩位開發者在開源社區中有一定的知名度。Symphony-ts 解決了在多任務環境中管理工作流的痛點，特別是在需要高信任的環境中運行自動化任務時。雖然沒有明確的觸發事件，但隨著開發者對於自動化和任務管理需求的增加，這個工具的需求也在上升。

## 適合誰使用

**目標受眾**：需要在高信任環境中自動化任務處理的開發團隊或專案經理。

> [!example] 使用場景
> - 後端工程師用它來自動化處理任務追蹤器中的問題，因為這樣可以減少手動操作的時間，並提高工作效率。
> - 專案經理用它來監控多個任務的進度，因為它提供了清晰的儀表板和狀態更新，讓管理變得更簡單。
> - 獨立開發者用它來快速設置和運行編碼代理，因為它能夠在隔離的環境中執行任務，避免了環境衝突的問題。

## 架構分析

Symphony-ts 採用 CLI 工具架構，核心資料流為：用戶輸入 → 監控任務追蹤器 → 創建工作空間 → 執行編碼代理。關鍵技術決策包括使用 Node.js 作為執行環境，並依賴 WORKFLOW.md 文件來定義工作流。專案目錄結構中，WORKFLOW.md 是必須的配置文件，並且需要用戶自行創建。

## 技術深入分析

Symphony-ts 的核心技術機制是將任務追蹤器中的問題轉化為獨立的工作空間，這樣每個任務都能在隔離的環境中執行。它使用 Node.js 作為執行環境，並依賴 WORKFLOW.md 文件來定義工作流，這使得用戶能夠靈活地配置任務執行的細節。該工具能夠處理多個任務，並且在高信任環境中運行，這對於需要安全性和穩定性的團隊來說是個優勢。然而，這也意味著在設置和配置上需要一定的技術門檻，特別是對於不熟悉 CLI 的用戶來說。未來，隨著更多平台的支持和功能的擴展，這個工具的應用範圍有望進一步擴大。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝和使用說明，並包含範例。安裝過程相對順暢，但需要用戶自行設置 WORKFLOW.md，這可能會對新手造成困難。整體來說，花 30 分鐘能夠順利啟動 Symphony 是可行的。

## 優缺點分析

> [!success] 優點
> - 能夠自動化處理多個任務，減少手動操作。
> - 提供清晰的儀表板，方便監控任務進度。
> - 每個問題都有獨立的工作空間，避免環境衝突。

> [!danger] 缺點
> - 需要用戶自行設置 WORKFLOW.md，增加了初始配置的複雜度。
> - 目前僅支持 Linear 作為任務追蹤器，限制了使用範圍。
> - 對於不熟悉 CLI 的用戶來說，使用門檻較高。

> [!warning] 注意事項
> - 僅支援 Node.js 22 以上版本。
> - 需要有效的 WORKFLOW.md 文件，無法自動生成。
> - 目前僅支持 Linear 作為任務追蹤器，未來可能會增加對其他平台的支持。
> - 需要在高信任環境中運行，對安全性有一定要求。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和備份，而 Symphony-ts 專注於任務自動化和工作流管理。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供 API 監控和管理功能，但不具備 Symphony-ts 的自動化任務執行能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 |
| --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和備份，並不具備任務自動化功能。 | 如果你的需求主要是文件同步而非任務管理，選擇它會更合適。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供 API 監控和管理功能，但不具備 Symphony-ts 的自動化任務執行能力。 | 如果你需要 API 監控而非任務自動化，這會是更好的選擇。 |

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

## 社群與生態

**社群活躍度**：社群活躍度中等，持續有更新和開發。
**連結**：[文件](https://github.com/OasAIStudio/symphony-ts/blob/main/docs/WORKFLOW.template.md)

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

相關概念：[[自動化]] · [[任務管理]] · [[CI/CD]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[binance--binance-skills-hub|binance/binance-skills-hub]]

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

- [[2026-03-10|2026-03-10]] — 首次收錄，397 stars
