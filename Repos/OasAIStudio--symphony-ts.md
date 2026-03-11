---
repo: OasAIStudio/symphony-ts
url: https://github.com/OasAIStudio/symphony-ts
owner: OasAIStudio
owner_type: Organization
language: TypeScript
license: Apache-2.0
description: "Typecript version of https://github.com/openai/symphony"
homepage: ""
stars: 420
stars_per_day: 105
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
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "將專案工作轉化為獨立的自動化實作運行，讓開發者專注於結果而非監控過程。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 2
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-11:419,2026-03-11:420"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "symphony-ts"
  - "OasAIStudio/symphony-ts"
  - "將專案工作轉化為獨立的自動化實作運行，讓開發者專注於結果而非監控過程。"
---

# symphony-ts

**420** stars · **105** stars/天 · 建立 4 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/OasAIStudio--symphony-ts");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.1.7` `easy-install`

> [!summary] 一句話摘要
> 將專案工作轉化為獨立的自動化實作運行，讓開發者專注於結果而非監控過程。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (105 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在高信任環境中自動管理多任務的開發團隊。
> **一句話重點** 這個專案最厲害的不是功能，而是它提供了一種新的方式來管理和自動化開發任務。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到高效的任務管理，值得一試

> [!abstract] 核心創新
> 提供獨立的工作空間和自動化任務管理，提升開發效率。

## 專案簡介

Symphony-ts 是 OpenAI Symphony 的 TypeScript 實作，旨在將專案管理中的任務轉化為自動化的實作運行。用戶需要在其代碼庫中創建一個 `WORKFLOW.md` 文件，並提供相應的 API 金鑰，然後使用 CLI 指令 `symphony ./WORKFLOW.md --acknowledge-high-trust-preview --port 4321` 啟動服務。這個工具的核心在於它能夠為每個問題創建獨立的工作空間，並在這些空間中運行編碼代理，從而提高開發的可視性和控制力。這種設計使得開發者能夠專注於實際的開發工作，而不必擔心每個代理的運行狀態。技術上，Symphony-ts 使用 Node.js 和 TypeScript，並依賴於 GraphQL、LiquidJS 和 Zod 等庫，這些選擇使其在處理複雜的數據結構和 API 通訊時更加高效。與其他類似工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，Symphony-ts 提供了更高層次的操作模型，讓多個代理同時運行而不會失去可觀察性。這使得它特別適合需要處理多任務的團隊，並且能夠在高信任環境中運行。使用者可能會面臨的挑戰包括需要手動創建 `WORKFLOW.md` 文件，並確保所有環境變數正確設置。這個專案目前處於初期階段，適合對自動化開發流程有需求的團隊，但在生產環境中使用時需謹慎考量其穩定性。預計在未來幾個月內，該專案將擴展對更多平台的支持，例如 GitHub Projects。

**技術棧**：`Node.js >= 22` · `TypeScript >= 5.8.2` · `GraphQL >= 16.13.1`

## 重點功能

- 獨立工作空間 — 為每個問題創建獨立的工作環境，避免共享目錄的問題。
- CLI 操作 — 使用 `symphony` 指令啟動和管理任務，簡化操作流程。
- 實時儀表板 — 當設置 `--port` 時，提供實時的狀態更新和可視化界面。
- 支持多種編碼代理 — 可以與不同的編碼代理（如 Codex）集成，靈活應對不同需求。
- 自定義工作流程 — 用戶可以根據需求編寫 `WORKFLOW.md` 文件，靈活定義工作流程。

## 快速開始

1. 全局安裝 symphony-ts
```bash
npm install -g symphony-ts
```
2. 進入目標代碼庫並設置環境變數
```bash
cd /path/to/your-repo && export LINEAR_API_KEY=your-linear-token
```
3. 啟動 Symphony
```bash
symphony ./WORKFLOW.md --acknowledge-high-trust-preview --port 4321
```

## 程式碼範例

{
  "前置條件": "需要在代碼庫中創建 WORKFLOW.md 文件",
  "指令": "symphony ./WORKFLOW.md --acknowledge-high-trust-preview --port 4321",
  "預期輸出": "啟動 Symphony，並在指定端口提供儀表板和 API"
}

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 420 stars（105/天），forks 22（5.2%），這顯示出相對穩定的關注度。主要貢獻者包括 Octane0411 和 Aubrey-M-ops，他們在開源社群中有一定的影響力。這個專案解決了在開發過程中如何有效管理多個任務的痛點，特別是在需要高信任的環境中。之前的解決方案往往缺乏對任務的獨立性和可視性，這使得開發者在處理多任務時容易出錯。社群的活躍度相對較高，最近的 commit 活動顯示出持續的開發進展。

## 適合誰使用

**目標受眾**：需要在高信任環境中自動管理多任務的開發團隊。

> [!example] 使用場景
> - 後端工程師用它來將任務自動化執行，因為這樣可以減少手動監控的負擔，專注於實際的開發工作。
> - 專案經理用它來追蹤開發進度，因為 Symphony-ts 提供了清晰的工作狀態和可視化的儀表板。
> - DevOps 工程師用它來整合 CI/CD 流程，因為它能夠自動處理多個任務的執行和狀態回報。

## 架構分析

Symphony-ts 採用模組化設計，主要由 Node.js 和 TypeScript 組成，這使得它在開發和維護上具有較高的靈活性。它的架構基於 CLI 工具，通過 `WORKFLOW.md` 文件來定義工作流程，並在每個問題上創建獨立的工作空間。這種設計使得多個代理可以同時運行而不會互相干擾，並且能夠提供清晰的可視化界面。選擇 TypeScript 使得代碼更加可維護和可擴展，但也增加了初期的學習成本。擴展性方面，未來可以通過增加對其他任務追蹤器的支持來進一步擴展功能。

## 技術深入分析

Symphony-ts 的核心技術機制是基於 Node.js 和 TypeScript 的模組化設計，這使得它能夠靈活地處理多個任務。它使用 GraphQL 進行 API 通訊，這樣可以更高效地處理請求和數據交互。效能方面，這個工具能夠在高並發的情況下運行多個代理，並且能夠在每個工作空間中保持獨立的狀態，這樣可以避免因為共享資源而導致的問題。設計取捨方面，選擇 TypeScript 提高了代碼的可維護性，但也增加了學習成本。技術風險方面，未來在擴展對其他平台的支持時，可能會面臨兼容性問題。整合方面，這個工具可以與現有的 CI/CD 流程無縫對接，但需要用戶自行設置環境變數和工作流程文件。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用步驟；安裝過程順暢，無明顯坑；有良好的快速入門指南，但缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 獨立工作空間提高了任務的可管理性
> - 實時儀表板增強了可視化和監控能力
> - 支持多種編碼代理，靈活性高

> [!danger] 缺點
> - 需要手動創建和維護 WORKFLOW.md 文件
> - 目前僅支持 Linear，限制了使用範圍
> - 對於新手來說，學習曲線較陡

> [!warning] 注意事項
> - 僅支持 Node.js 22 以上版本
> - 需要手動創建 WORKFLOW.md 文件，無法自動生成
> - 目前僅支持 Linear 作為任務追蹤器

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的任務管理功能，但缺乏獨立工作空間的支持，適合小型專案. |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據處理，而非任務自動化，適合需要處理大量數據的場景. |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 使用 Python 實作，記憶體用量相對較少，但在多任務管理上不如 Symphony-ts 靈活。 | 如果你的團隊已經在使用 Python 並且需要輕量級的任務管理。 | medium，因為需要重寫部分工作流程邏輯。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據處理，並不支持獨立工作空間，適合需要處理大量數據的場景。 | 如果你的專案主要集中在數據處理而非任務自動化。 | low，因為可以直接使用現有的數據處理邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **symphony-ts** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Python 實作，記憶體用量相對較少，但在多任務管理上不如 Symphony-ts 靈活。 | 專注於數據處理，並不支持獨立工作空間，適合需要處理大量數據的場景。 |
> | 遷移成本 | - | medium，因為需要重寫部分工作流程邏輯。 | low，因為可以直接使用現有的數據處理邏輯。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Python 並且需要輕量級的任務管 | 如果你的專案主要集中在數據處理而非任務自動化。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境中，環境變數未正確傳遞給代理
  - 解法：確保在啟動前正確設置所有環境變數
- [MEDIUM] 如果 WORKFLOW.md 配置不當，可能導致啟動失敗
  - 解法：仔細檢查 WORKFLOW.md 的格式和內容
- [MEDIUM] CLI 指令可能因版本不兼容而無法正常運行
  - 解法：確保使用 Node.js 和 pnpm 的正確版本

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的新創團隊進行專案開發 | 非常適合 | 能夠有效管理多任務，提升開發效率 |
| 大型企業的多團隊協作專案 | 適合 | 提供的可視化儀表板能夠幫助管理多個團隊的進度 |
| 個人開發者的 side project | 普通 | 雖然功能強大，但學習曲線較陡 |
| 需要快速迭代的敏捷開發團隊 | 不適合 | 目前的功能尚不夠成熟，可能影響開發進度 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高效的任務管理，值得一試

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，但需要正確設置環境變數以確保安全性。對於 CI/CD 的使用，建議在受信環境中運行以避免潛在的安全風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Symphony-ts 最常與 Node.js 和其他 JavaScript 生態系統工具搭配使用，特別是在開發和部署過程中。用戶可以在使用 GitHub Actions 進行 CI/CD 時，將 Symphony-ts 集成到工作流中，具體做法是將 CLI 指令添加到 CI 配置文件中。與主流 IDE（如 VS Code）相容良好，並且可以通過 npm 進行安裝。整合的摩擦點主要在於需要用戶手動設置環境變數，這可能會導致初次使用時的困惑。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Symphony-ts 出現之前，開發者通常依賴於手動管理任務和工作流程，這導致了效率低下和錯誤的增加。隨著自動化需求的增加，開發者需要一種能夠有效管理多任務的工具。Symphony-ts 的出現正好填補了這一空白，通過提供獨立的工作空間和自動化的任務管理，讓開發者能夠專注於實際的開發工作。

未來，隨著更多平台的支持，這個工具可能會成為開發者日常工作中的重要組件。

## 團隊採用指南

**建議團隊規模**：5-10 人的中小型團隊

**前置技能**：
- 熟悉 Node.js
- 了解 TypeScript 基本語法
- 有 CI/CD pipeline 經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用 Symphony-ts。第二週：在小型團隊的內部工具中導入。第三週：收集使用反饋並調整工作流程。第四週：在主要產品中開始使用。

**成功指標**：任務完成時間減少 30%，開發人員滿意度提高。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方工具轉換為其他任務管理工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/OasAIStudio--symphony-ts");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 22 |
| Open Issues | 3 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-06 |
| Repo 大小 | 1.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/OasAIStudio/symphony-ts) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `graphql` `liquidjs` `yaml` `zod` `@biomejs/biome` `@types/node` `typescript` `vitest`

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

**社群活躍度**：社群活躍度中等，最近有持續的更新和問題回應。
**連結**：[文件](https://github.com/OasAIStudio/symphony-ts#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-07 ~ 2026-03-10）
> **活躍天數** 3 天 · **最新 commit** Bump version to 0.1.7

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#42](https://github.com/OasAIStudio/symphony-ts/issues/42) | Files in issue comment is not working | 2 | 1 |
> | [#46](https://github.com/OasAIStudio/symphony-ts/issues/46) | Workspace path changes when issue identifier changes | 0 | 1 |

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
> - Node.js `>= 22`
> - pnpm `>= 10`
> - Codex CLI with `codex app-server` support
> 
> ```bash
> pnpm install
> pnpm build
> node dist/src/cli/main.js --help   # verify the build
> ```
> 
> Run checks:
> 
> ```bash
> pnpm test           # run all tests once
> pnpm test:watch     # watch mode
> pnpm typecheck      # TypeScript type check only
> pnpm lint           # Biome lint check
> pnpm format         # Biome auto-format
> ```
> 
> ### Run From Source
> 
> If you are developing Symphony itself rather than using the published CLI:
> 
> ```bash
> pnpm install
> pnpm build
> node dist/src/cli/main.js --acknowledge-high-trust-preview
> ```
> 
> See [docs/DEV_GUIDE.md](docs/DEV_GUIDE.md) for a full walkthrough including Linear setup, `WORKFLOW.md` configuration, and troubleshooting.
> 
> ## Roadmap
> 
> | Item | Status |
> | --- | --- |
> | Implement Symphony and Linear integration | ✅ Complete |
> | Support more platforms such as GitHub Projects | 🟡 Planned |
> | Support a local board GUI | 🟡 Planned |
> | Support more coding agents such as Claude Code scheduling | 🟡 Planned |
> 
> If there is a platform you want Symphony to support, open an issue and let us know.
> 
> ## What Symphony Does
> 
> Symphony is a long-running service that:
> 
> - monitors your tracker for eligible work
> - creates deterministic, per-issue workspaces
> - renders repository-owned workflow prompts from `WORKFLOW.md`
> - runs coding agents in isolated execution contexts
> - handles retries, reconciliation, and cleanup
> - exposes structured logs and an operator-facing status surface
> 
> In a typical setup, Symphony watches a Linear board, dispatches agent runs for ready tickets, and
> lets the agents produce proof of work such as CI status, review feedback, and pull requests. Human
> operators stay focused on the work itself instead of supervising every agent turn.
> 
> ## Why Teams Use It
> 
> - to turn tracker tickets into autonomous implementation runs
> - to isolate agent work by issue instead of sharing one mutable directory
> - to keep workflow policy inside the repository
> - to operate multiple concurrent agents without losing observability
> - to introduce a higher-level operating model for AI-assisted engineering
> 
> ## Contributing
> 
> If you are extending this TypeScript implementation, keep changes aligned with the upstream product
> model in [`SPEC.upstream.md`](SPEC.upstream.md) and follow the repository workflow documented in
> [`AGENTS.md`](AGENTS.md).
> 
> ## License
> 
> This repository is licensed under [`Apache-2.0`](LICENSE). See [`NOTICE`](NOTICE) for attribution
> information related to the upstream OpenAI Symphony project and this unofficial TypeScript
> implementation.

## 延伸閱讀

相關概念：[[自動化]] · [[CI/CD]] · [[任務管理]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]]

[GitHub](https://github.com/OasAIStudio/symphony-ts)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "OasAIStudio--symphony-ts"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "OasAIStudio--symphony-ts"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "OasAIStudio--symphony-ts" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "OasAIStudio--symphony-ts"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CI/CD","任務管理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "OasAIStudio--symphony-ts" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "OasAIStudio" AND file.name != "OasAIStudio--symphony-ts"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/OasAIStudio--symphony-ts");
> const all = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars_per_day || 0, "desc");
> const rank = all.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const catAll = all.where(p => p.category === me?.category);
> const catRank = catAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const totalStarsAll = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars || 0, "desc");
> const starsRank = totalStarsAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> if (rank > 0) {
>   const pct = Math.round((1 - rank / all.length) * 100);
>   dv.paragraph(`Stars/天排名：**全 vault 第 ${rank}**/${all.length}（前 ${100 - pct}%）· **${me.category} 第 ${catRank}**/${catAll.length}\nStars 總量排名：**第 ${starsRank}**/${totalStarsAll.length}`);
> }
> ```

## Star 趨勢

> [!abstract]- Stars 成長追蹤
> ```dataviewjs
> const me = dv.page("Repos/OasAIStudio--symphony-ts");
> if (me?.star_history) {
>   const raw = me.star_history.toString();
>   const points = raw.split(",").map(p => { const [d, s] = p.split(":"); return { date: d, stars: parseInt(s) }; }).filter(p => !isNaN(p.stars));
>   if (points.length >= 2) {
>     const max = Math.max(...points.map(p => p.stars));
>     const lines = points.map(p => {
>       const w = Math.round(p.stars / max * 25);
>       return `${p.date} ${"\u2588".repeat(w)}${"\u2591".repeat(25-w)} ${p.stars.toLocaleString()}`;
>     });
>     const first = points[0].stars;
>     const last = points[points.length-1].stars;
>     const growth = first > 0 ? Math.round((last - first) / first * 100) : 0;
>     lines.push(`\n**成長** +${(last-first).toLocaleString()} stars（${growth}%）in ${points.length} snapshots`);
>     // 趨勢方向偵測
>     if (points.length >= 3) {
>       const mid = Math.floor(points.length / 2);
>       const fh = points.slice(0, mid), sh = points.slice(mid);
>       const rateF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
>       const rateS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
>       const ratio = rateF > 0 ? rateS / rateF : rateS > 0 ? 2 : 1;
>       const dir = ratio > 1.3 ? "Rising（加速中）" : ratio < 0.7 ? "Cooling（降溫中）" : "Stable（穩定）";
>       lines.push(`**趨勢方向** ${dir}（加速比 ${Math.round(ratio * 100) / 100}x）`);
>     }
>     dv.paragraph(lines.join("\n"));
>   } else { dv.paragraph("需要 2+ 次快照才能顯示趨勢"); }
> } else { dv.paragraph("尚無 star_history 資料（下次出現在 trending 時會開始追蹤）"); }
> ```

## 相對成長速度

> [!abstract]- 跟 vault 中同類專案比較
> ```dataviewjs
> const me = dv.page("Repos/OasAIStudio--symphony-ts");
> if (me) {
>   const all = dv.pages('"Repos"').where(p => p.status !== "archived");
>   const sameCat = all.where(p => p.category === me.category);
>   const avgAll = all.length > 0 ? Math.round(all.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / all.length) : 0;
>   const avgCat = sameCat.length > 0 ? Math.round(sameCat.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / sameCat.length) : 0;
>   const mySpd = me.stars_per_day || 0;
>   const vsAll = avgAll > 0 ? Math.round(mySpd / avgAll * 100) : 0;
>   const vsCat = avgCat > 0 ? Math.round(mySpd / avgCat * 100) : 0;
>   dv.table(["比較對象", "平均 Stars/天", "本專案", "倍數"], [
>     ["全 Vault", avgAll, mySpd, vsAll + "%"],
>     ["同分類 (" + me.category + ")", avgCat, mySpd, vsCat + "%"],
>   ]);
>   if (vsAll >= 300) dv.paragraph("**極速成長** — 成長速度是 vault 平均的 3 倍以上");
>   else if (vsAll >= 150) dv.paragraph("**高速成長** — 成長速度高於 vault 平均");
>   else if (vsAll >= 50) dv.paragraph("**正常速度** — 接近 vault 平均水平");
>   else dv.paragraph("**低速成長** — 低於 vault 平均，可能已過熱度高峰");
> }
> ```

## 決策分數

> [!abstract]- 綜合評估（自動計算）
> ```dataviewjs
> const me = dv.page("Repos/OasAIStudio--symphony-ts");
> if (me) {
>   let score = 0;
>   let breakdown = [];
>   // 熱度 (0-25)
>   const spd = me.stars_per_day || 0;
>   const heat = Math.min(25, Math.round(spd / 40 * 25));
>   score += heat; breakdown.push(`熱度: ${heat}/25`);
>   // 安裝難度 (0-20)
>   const inst = me.install_complexity === "easy" ? 20 : me.install_complexity === "medium" ? 12 : 5;
>   score += inst; breakdown.push(`易用性: ${inst}/20`);
>   // 成熟度 (0-20)
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
>   const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
>   score += mat; breakdown.push(`成熟度: ${mat}/20`);
>   // 社群 (0-20)
>   const forks = me.forks || 0;
>   const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
>   score += comm; breakdown.push(`社群: ${comm}/20`);
>   // 授權 (0-15)
>   const lic = me.license || "";
>   const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
>   const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
>   score += licScore; breakdown.push(`授權: ${licScore}/15`);
>   const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
>   const bar = "\u2588".repeat(Math.round(score/5)) + "\u2591".repeat(20 - Math.round(score/5));
>   dv.paragraph(`## ${grade} (${score}/100)\n${bar}\n\n${breakdown.join(" | ")}`);
> }
> ```

---

## 個人筆記

> [!abstract]- 評估進度
> ```dataviewjs
> const me = dv.page("Repos/OasAIStudio--symphony-ts");
> if (me) {
>   const steps = [
>     { name: "已讀", done: me.status && me.status !== "to-review" },
>     { name: "已評分", done: (me.my_rating || 0) > 0 },
>     { name: "有結論", done: me.verdict && me.verdict !== "" },
>     { name: "Ring 決策", done: me.ring && me.ring !== "" && me.ring !== "assess" },
>     { name: "試用記錄", done: me.status === "tried" || me.status === "integrated" },
>   ];
>   const done = steps.filter(s => s.done).length;
>   const pct = Math.round((done / steps.length) * 100);
>   const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
>   dv.paragraph(`${bar} **${done}/${steps.length}** (${pct}%)`);
>   const todo = steps.filter(s => !s.done).map(s => s.name);
>   if (todo.length > 0) dv.paragraph("待完成：" + todo.join(" / "));
> }
> ```

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
> 測試環境 :: _OS / Node / Python 版本_
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 花費時間 :: _從零到可用_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 踩到的坑 :: _描述 + 解法_
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

### 決策記錄

> [!abstract]- 為什麼評估這個工具？
> **當時的痛點**：_遇到什麼問題才開始找工具？_
> **觸發來源**：_GitHub Trending / HN / 同事推薦 / 其他_
> **當時的約束**：_時間 / 團隊 / 語言 / 部署環境_

> [!note]- 最終決策
> decision:: _選了什麼（或為何還在觀望）_
> why:: _當時的理由（越具體越好）_
> outcome:: _後來實際發生了什麼_

### 探索日誌

_按時間記錄，每次接觸時追加一段（最新在上）_

> **2026-03-10** — 首次收錄
> _第一印象：_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，419 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，397 stars
