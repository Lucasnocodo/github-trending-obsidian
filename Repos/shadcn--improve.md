---
repo: shadcn/improve
url: https://github.com/shadcn/improve
owner: shadcn
owner_type: User
language: N/A
license: MIT
description: "Use your most capable model to audit your codebase and write plans for cheaper models to execute."
homepage: ""
stars: 2445
stars_per_day: 1223
forks: 87
open_issues: 6
created: 2026-06-10
pushed_at: 2026-06-12
first_seen: 2026-06-11
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "代碼審核"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-11
use_case: "利用最強大的模型審核代碼庫，並為較便宜的模型撰寫執行計劃。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-16"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 32
readme_length: 6506
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-11"
star_history: "2026-06-11:876,2026-06-12:1851,2026-06-13:2445"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
aliases:
  - "improve"
  - "shadcn/improve"
  - "利用最強大的模型審核代碼庫，並為較便宜的模型撰寫執行計劃。"
---

# improve

**876** stars · **876** stars/天 · 建立 1 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/shadcn--improve");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 利用最強大的模型審核代碼庫，並為較便宜的模型撰寫執行計劃。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (876 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要高效能代碼審核和實施計劃的開發團隊或個人開發者。
> **一句話重點** 這個專案讓代碼審核和執行計劃的生成變得高效且低成本，特別適合大型代碼庫的開發團隊。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/shadcn--improve");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "代碼審核" && p.file.name !== "shadcn--improve" && p.status !== "archived")
>     .sort(p => p.stars || 0, "desc").limit(5);
>   if (rivals.length > 0) {
>     dv.table(["專案", "Stars", "Stars/天", "安裝", "授權", "Ring"], rivals.map(p => [
>       p.file.link,
>       (p.stars || 0).toLocaleString(),
>       p.stars_per_day || 0,
>       p.install_complexity || "?",
>       p.license || "?",
>       p.ring || "assess"
>     ]));
>   } else { dv.paragraph("_目前 vault 中沒有其他 代碼審核 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學、3 小時整合，得到快速的代碼審核和計劃生成效果，值得嘗試。

> [!abstract] 核心創新
> 計劃是自包含的，包含所有必要的上下文和驗證步驟，讓執行者無需進行額外的判斷。

## 專案簡介

這個專案的核心機制是利用高效能的模型來審核代碼庫，並生成可供較低效能模型執行的計劃。用戶透過指令 `/improve` 來進行全面的代碼審核，系統會生成一個發現表，並根據用戶的選擇生成具體的實施計劃，這些計劃會以 Markdown 格式存儲在 `plans/` 目錄中。這樣的設計使得高效能模型能專注於理解代碼和評估優先事項，而將具體的執行交給較便宜的模型，從而降低成本。使用者可以透過 `/improve quick` 獲得快速的審核結果，或使用 `/improve deep` 進行全面的分析，並可針對特定需求使用如 `/improve security` 的指令進行安全性審核。這個工具的賣點在於它的計劃是自包含的，包含了所有必要的上下文和驗證步驟，讓執行者無需進行額外的判斷。

技術上，這個專案使用了 Agent Skills 格式，並且能夠在任何支持該格式的代理中運行，這使得它的兼容性非常高。與其他工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，這個專案的獨特之處在於它強調了計劃的可執行性和自包含性，並且不直接修改源代碼，這樣的設計降低了出錯的風險。實際使用中，這個工具能夠處理大型代碼庫，並且能夠在不同的環境中運行，適合需要高效能代碼審核的團隊。這個專案目前處於 alpha 階段，值得關注，但不建議在生產環境中使用。對於小型團隊或個人開發者來說，這是一個非常有潛力的工具，特別是在需要快速審核和實施計劃的情況下。

## 重點功能

- 全面審核 — 使用 `/improve` 指令進行全面代碼審核，生成發現表。
- 快速審核 — 使用 `/improve quick` 獲得快速的審核結果，專注於熱點問題。
- 安全性審核 — 使用 `/improve security` 指令針對安全性進行專門的審核。
- 自包含計劃 — 生成的計劃包含所有必要的上下文和驗證步驟，便於執行。
- 計劃執行 — 使用 `/improve execute` 指令派遣較便宜的執行者，並檢查結果。

## 快速開始

1. 安裝 improve 工具
```bash
npx skills add shadcn/improve
```
2. 在代碼庫中運行全面審核
```bash
/improve
```
3. 查看生成的發現表，選擇計劃
```bash
plan 1, 3 and 5
```

## 程式碼範例

```bash
{
  "前置條件": "需要在支持 Agent Skills 的代理中運行。",
  "指令": "/improve",
  "預期輸出": "生成一個發現表，列出代碼庫中的問題和建議的改進計劃。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 876 stars（876/天），forks 26（3.0%），這顯示出一定的關注度。作者 shadcn 是一位活躍的開發者，過去參與過多個開源專案，這使得他在社群中有一定的影響力。這個專案解決了代碼審核過程中高效能模型與低效能模型之間的協作問題，之前的方案通常無法有效地將這兩者結合。技術上，Agent Skills 的格式使得這個工具能夠在不同的代理中靈活運用，這是之前沒有的功能。forks/stars 比率為 3.0%，顯示出使用者對這個工具的實際修改和使用的興趣。

## 適合誰使用

**目標受眾**：需要高效能代碼審核和實施計劃的開發團隊或個人開發者。

> [!example] 使用場景
> - 後端工程師用它來審核大型代碼庫，因為它能快速生成可執行的計劃，減少手動審核的時間。
> - DevOps 團隊用它來針對特定功能進行安全性審核，因為它提供了針對安全的專門指令，能夠快速識別潛在風險。
> - 項目經理用它來制定開發計劃，因為它能夠根據代碼庫的現狀生成具體的實施步驟，提升團隊的工作效率。

## 架構分析

這個專案採用模組化的架構，利用高效能模型進行代碼審核，並生成計劃。每個計劃都是自包含的，包含了具體的文件路徑和驗證步驟，這樣的設計使得執行者能夠在無需額外上下文的情況下進行工作。資料流方面，首先進行代碼庫的映射和審核，然後生成發現表，最後根據用戶的選擇生成具體的計劃。

這樣的設計使得計劃的可執行性大大提高，並且降低了出錯的風險。選擇不直接修改源代碼的設計，雖然增加了手動合併的工作，但卻能有效避免不必要的錯誤和風險。擴展性方面，由於計劃是自包含的，未來可以輕鬆添加新的執行者或擴展功能而不影響現有流程。

## 技術深入分析

這個專案的核心技術機制是利用高效能模型進行代碼審核，並生成可執行的計劃。它使用了 Agent Skills 格式來實現與其他代理的兼容性，這使得它能夠在多種環境中運行。效能方面，這個工具能夠處理大型代碼庫，並且能夠在短時間內生成審核結果。設計取捨方面，選擇不直接修改源代碼的方式雖然增加了手動合併的工作，但卻能有效降低出錯的風險。技術風險方面，這個專案在擴展性上有一定的潛力，但目前的 alpha 階段可能會導致不穩定性。整合分析方面，這個工具能夠與現有的 CI/CD 流程無縫整合，並且能夠與主流的 IDE 兼容，降低了學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的使用指令和範例。安裝過程簡單，無需複雜的配置。文件目前僅提供英文，缺乏多語言支持，對於非英語使用者可能會有一定的學習障礙。

## 優缺點分析

> [!success] 優點
> - 高效能模型進行代碼審核，能夠快速識別問題。
> - 生成的計劃是自包含的，便於執行和驗證。
> - 支持多種審核模式，靈活應對不同需求。

> [!danger] 缺點
> - 目前處於 alpha 階段，可能存在不穩定性。
> - 不直接修改源代碼，需手動合併變更。
> - 僅支持在特定環境中運行，限制了使用範圍。

> [!warning] 注意事項
> - 僅支援在支持 Agent Skills 的環境中運行。
> - 不直接修改源代碼，所有變更需手動合併。
> - 目前處於 alpha 階段，可能存在不穩定性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於生成代碼的執行計劃，但不具備審核功能，因此在代碼質量控制上不如本專案全面。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具提供代碼分析功能，但缺乏自動生成可執行計劃的能力，使用者需要手動處理分析結果。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成代碼的執行計劃，但不具備審核功能，因此在代碼質量控制上不如本專案全面。 | 如果你的團隊需要一個專注於執行計劃生成的工具，而不需要代碼審核功能。 | medium，因為需要重新設計工作流程以適應新的工具。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供代碼分析功能，但缺乏自動生成可執行計劃的能力，使用者需要手動處理分析結果。 | 如果你的團隊已經在用手動代碼分析，並且不需要自動生成計劃的功能。 | low，因為可以直接將現有的分析流程與新工具整合。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **improve** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成代碼的執行計劃，但不具備審核功能，因此在代碼質量控制上不如本專案全面。 | 提供代碼分析功能，但缺乏自動生成可執行計劃的能力，使用者需要手動處理分析結果。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流程以適應新的工具。 | low，因為可以直接將現有的分析流程與新工具整合。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個專注於執行計劃生成的工具，而不需要代碼審 | 如果你的團隊已經在用手動代碼分析，並且不需要自動生成計劃的功 |

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

- [MEDIUM] 在某些大型代碼庫中，審核過程可能會耗時過長
  - 解法：考慮使用 `/improve quick` 進行快速審核
- **[HIGH]** 生成的計劃可能需要手動調整才能符合實際情況
  - 解法：在執行前仔細檢查每個計劃的內容
- **[HIGH]** 目前的版本可能存在不穩定性，導致意外錯誤
  - 解法：在非生產環境中進行測試，避免影響核心系統

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速生成可執行的審核計劃，適合小型團隊的需求。 |
| 大型企業的代碼庫審核 | 適合 | 能夠處理大型代碼庫，但需注意審核時間可能較長。 |
| 需要快速迭代的開發團隊 | 普通 | 雖然能快速生成計劃，但執行過程中可能需要手動調整。 |
| 對代碼質量要求極高的金融行業 | 不適合 | 目前處於 alpha 階段，穩定性不足，風險較高。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學、3 小時整合，得到快速的代碼審核和計劃生成效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅進行代碼審核和計劃生成，不存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/shadcn--improve");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   // v29: README 品質和 Issue 解決率
>   const readmeLen = me.readme_length || 0;
>   const readmeQ = readmeLen > 5000 ? "Excellent" : readmeLen > 2000 ? "Good" : readmeLen > 500 ? "Basic" : readmeLen > 0 ? "Minimal" : "None";
>   const icr = me.issue_close_rate;
>   const icrLabel = icr === undefined || icr < 0 ? "N/A" : icr + "%";
>   const icrEval = icr === undefined || icr < 0 ? "?" : icr >= 80 ? "Excellent" : icr >= 50 ? "Good" : icr >= 20 ? "Fair" : "Poor";
>   const repoKB = me.repo_size_kb || 0;
>   const sizeLabel = repoKB > 102400 ? (repoKB/1024).toFixed(0) + " MB" : repoKB + " KB";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Issue 解決率", icrLabel, icrEval],
>     ["Bus Factor", (me.bus_factor || 0) + " 人", (me.bus_factor || 0) >= 3 ? "Good" : (me.bus_factor || 0) >= 2 ? "OK" : "Risk"],
>     ["README 品質", readmeLen.toLocaleString() + " 字元", readmeQ],
>     ["Repo 大小", sizeLabel, repoKB > 102400 ? "Large" : repoKB > 10240 ? "Medium" : "Small"],
>     ["發版節奏", me.release_cadence || "unknown", me.release_cadence === "weekly" || me.release_cadence === "monthly" ? "Active" : me.release_cadence === "never" ? "No releases" : "Check"],
>     ["距上次發版", (me.last_release_days || 0) >= 0 ? (me.last_release_days + " 天") : "N/A", (me.last_release_days || -1) < 0 ? "?" : (me.last_release_days || 0) <= 30 ? "Fresh" : (me.last_release_days || 0) <= 90 ? "OK" : "Stale"],
>   ]);
> }
> ```

> [!abstract]- CHAOSS 社群健康度雷達
> ```dataviewjs
> const me = dv.page("Repos/shadcn--improve");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : 999;
>   const dims = [
>     ["維護活躍度", Math.max(0, 5 - Math.floor(daysSincePush / 14))],
>     ["貢獻者多樣性", Math.min(5, Math.floor((me.bus_factor || 0) * 1.5 + (me.contributor_count || 0) / 3))],
>     ["Issue 回應力", (me.issue_close_rate || 0) >= 80 ? 5 : (me.issue_close_rate || 0) >= 50 ? 4 : (me.issue_close_rate || 0) >= 20 ? 2 : 1],
>     ["發版節奏", me.release_cadence === "weekly" ? 5 : me.release_cadence === "monthly" ? 4 : me.release_cadence === "quarterly" ? 3 : me.release_cadence === "irregular" ? 2 : 1],
>     ["社群規模", Math.min(5, Math.floor(Math.log10(Math.max(me.stars || 1, 1)) * 1.2))],
>     ["Fork 活躍度", (me.forks || 0) > 100 ? 5 : (me.forks || 0) > 30 ? 4 : (me.forks || 0) > 10 ? 3 : (me.forks || 0) > 3 ? 2 : 1],
>   ];
>   dv.table(["維度", "分數", "視覺化"], dims.map(([name, score]) => [
>     name, score + "/5", "\u2588".repeat(score) + "\u2591".repeat(5 - score)
>   ]));
>   const avg = (dims.reduce((a, b) => a + b[1], 0) / dims.length).toFixed(1);
>   dv.paragraph("**綜合健康度：" + avg + "/5**");
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 26 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-10 |
| 建立日期 | 2026-06-10 |
| Repo 大小 | 32 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/shadcn/improve) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@shadcn](https://github.com/shadcn) | 6 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，但目前只有 1 個開放的 Issue，顯示出使用者反饋不多。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-10 ~ 2026-06-10）
> **活躍天數** 1 天 · **最新 commit** Merge branch 'main' of github.com:shadcn/improve

## README 摘錄

> [!info]- 展開查看原文 README
> # improve
> 
> An agent skill that audits any codebase and writes implementation plans for other agents to execute.
> 
> The idea: use your most capable model for the part where intelligence compounds — understanding the codebase, judging what's worth doing, writing the spec — and hand execution to cheaper models. The skill never implements anything itself. The plan is the product.
> 
> ```
> you          →  /improve                    (expensive model, advises)
> plans/       →  001-fix-n-plus-one.md       (self-contained specs)
> other agent  →  implements, tests, ships    (cheap model, executes)
> ```
> 
> ## Install
> 
> ```bash
> npx skills add shadcn/improve
> ```
> 
> Works in any agent that supports [Agent Skills](https://agentskills.io) format. The plans it writes are plain markdown, so any agent (or human) can pick them up.
> 
> ## Usage
> 
> ```
> /improve                        full audit → prioritized findings → plans
> /improve quick                  cheap pass: hotspots, top findings only
> /improve deep                   exhaustive: every package, every category
> /improve security               focused audit (also: perf, tests, bugs, ...)
> /improve branch                 audit only what the current branch changes
> /improve next                   feature suggestions — where to take the project
> /improve plan      skip the audit, spec one thing
> /improve review-plan      critique and tighten an existing plan
> /improve execute          dispatch a cheaper executor, review its work
> /improve reconcile              refresh the backlog: verify, unblock, retire
> /improve ... --issues           also publish plans as GitHub issues
> ```
> 
> ## How to use
> 
> A typical first run, start to finish:
> 
> 1. Open your agent in the repo and run `/improve` (or `/improve quick` to keep it cheap).
> 2. It maps the repo, audits it, and comes back with a findings table. Reply with the ones you want planned — "plan 1, 3 and 5".
> 3. Plans land in `plans/` — one file each, plus an index with the recommended order. Read them; they're meant to be reviewed.
> 4. Hand a plan to any agent ("implement plans/001-*.md"), or let the skill run it: `/improve execute 001`. It dispatches a cheaper model in an isolated worktree, reviews the diff against the plan, and reports back with a verdict. Merging stays up to you.
> 5. Next session, run `/improve reconcile` to clean up the backlog: verify what landed, refresh what drifted, unblock what got stuck.
> 
> Before a PR, `/improve branch` does the same thing scoped to just what your branch changes.
> 
> ## Example
> 
> A run against [shadcn/ui](https://github.com/shadcn-ui/ui) came back with findings like:
> 
> ```
> | # | Finding                                        | Category  | Effort | Confidence |
> |---|------------------------------------------------|-----------|--------|------------|
> | 1 | shadow-config duplicated in search.ts/view.ts, | tech-debt | M      | HIGH       |
> |   | copies already drifted (TODO at search.ts:31)  |           |        |            |
> | 2 | O(n²) icon migration (migrate-icons.ts:168)    | perf      | S      | HIGH       |
> ```
> 
> …and rejected a few, with reasons recorded so they don't come back next run:
> 
> ```
> - [SEC-01] https_proxy env var "SSRF": by-design — standard proxy convention,
>   every CLI honors it. Not a finding.
> ```
> 
> Picking #1 produced [this plan](./examples/001-extract-shadow-config-resolution.md) — current code excerpted, exact steps, the repo's own test/lint commands as verification gates, and STOP conditions for when reality doesn't match.
> 
> ## How it works
> 
> **Recon.** Maps the repo: stack, conventions, and the exact build/test/lint commands — these become verification gates in every plan.
> 
> **Audit.** Fans out parallel subagents across nine categories: correctness, security, performance, test coverage, tech debt, dependencies & migrations, DX, docs, and direction (feature suggestions — every one must cite evidence from the repo itself, no generic idea-slop). Every finding carries `file:line` evidence, impact, effort, and confidence.
> 
> **Vet.** Subagents over-report, so the advisor re-reads every cited location itself before showing you anything — false positives get dropped, wrong attributions get corrected, rejections get recorded.
> 
> **Prioritize.** Findings land in a table ordered by leverage (impact ÷ effort, weighted by confidence). You pick what becomes plans.
> 
> **Plan.** One file per selected finding, written into `plans/` with an index, priority order, and dependency graph.
> 
> ## What makes the plans executable
> 
> Plans are written for the weakest plausible executor — a model that has never seen the advisor session and may be much smaller. Three properties carry that:
> 
> - **Self-contained.** All context is inlined: exact file paths, current-state code excerpts, repo conventions with an exemplar file, verified commands. No "as discussed above."
> - **Verification gates.** Every step ends with a command and its expected output. Done criteria are machine-checkable. The executor never has to judge whether it succeeded.
> - **Hard boundaries.** Explicit out-of-scope lists, and STOP conditions — "if X, stop and report" — instead of letting a small model improvise when reality doesn't match the plan.
> 
> Each plan also stamps the git commit it was written against, so executors run a mechanical drift check before touching anything.
> 
> ## Closing the loop
> 
> Plans aren't fire-and-forget:
> 
> - **`execute `** spawns a cheaper executor subagent in an isolated git worktree, hands it the plan, then reviews the result like a tech lead — re-runs every done criterion, checks scope compliance, reads the diff against intent. Verdict: approve (merging stays your call), send back for revision (max 2 rounds), or block and refine the plan.
> - **`reconcile`** processes what happened since: verifies DONE plans still hold, investigates BLOCKED ones and rewrites around the obstacle, refreshes drifted plans, retires findings that got fixed independently.
> - **`--issues`** publishes plans as GitHub issues — same self-contained body, so any agent or human can pick them up where work already lives.
> 
> ## Hard rules
> 
> - Never modifies source code itself. The only writes go to `plans/`; executors edit only in disposable worktrees, and merging is always yours.
> - Never runs commands that mutate your working tree — read, search, and read-only analysis only.
> - Never reproduces secret values. Locations and credential types only, rotation always recommended.
> - Asked to implement? It declines and points at the plan (or offers `execute`).
> 
> ## License
> 
> MIT © shadcn

## 延伸閱讀

相關概念：[[自動化測試]] · [[CI/CD]] · [[代碼生成]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[alfiyahkamilah1239298--WallpaperDownloader-26|alfiyahkamilah1239298/WallpaperDownloader-26]] · [[amElnagdy--guard-skills|amElnagdy/guard-skills]] · [[openai--codex-plugin-cc|openai/codex-plugin-cc]]

[GitHub](https://github.com/shadcn/improve)

## 相關收錄

> [!note]- 直接競品（同子分類：代碼審核）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "代碼審核" AND file.name != "shadcn--improve"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "shadcn--improve"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "shadcn--improve" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "shadcn--improve"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","CI/CD","代碼生成"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "shadcn--improve" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/shadcn--improve");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "shadcn--improve" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
>     .sort(p => p.stars_per_day || 0, "desc").limit(5);
>   if (better.length > 0) {
>     dv.table(["專案", "Ring", "Stars/天", "安裝", "用途"], better.map(p => [
>       p.file.link, p.ring, p.stars_per_day || 0, p.install_complexity || "?", (p.use_case || "").toString().slice(0, 40)
>     ]));
>   } else { dv.paragraph("_此分類中沒有 Ring 更高的專案（你可能已經在用最好的了）_"); }
> }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "shadcn" AND file.name != "shadcn--improve"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/shadcn--improve");
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
> const me = dv.page("Repos/shadcn--improve");
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
> const me = dv.page("Repos/shadcn--improve");
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
> const me = dv.page("Repos/shadcn--improve");
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
> const me = dv.page("Repos/shadcn--improve");
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
> | 維度 | 分數 (1-5) | 說明 |
> | --- | :---: | --- |
> | 信心 | /5 | _我對這工具的了解程度_ |
> | 興趣 | /5 | _想投入時間研究的程度_ |
> | 風險 | /5 | _導入風險，5=極低風險_ |
> 
> _填完後更新 frontmatter：`score_confidence` / `score_interest` / `score_risk`_
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

> **2026-06-11** — 首次收錄
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

- [[2026-06-13|2026-06-13]] — 再次上榜，2.4k stars
- [[2026-06-12|2026-06-12]] — 再次上榜，1.9k stars
- [[2026-06-11|2026-06-11]] — 首次收錄，876 stars
