---
repo: Michaelliv/pi-dynamic-workflows
url: https://github.com/Michaelliv/pi-dynamic-workflows
owner: Michaelliv
owner_type: User
language: TypeScript
license: N/A
description: ""
homepage: ""
stars: 437
stars_per_day: 437
forks: 19
open_issues: 12
created: 2026-05-28
pushed_at: 2026-05-28
first_seen: 2026-05-30
week: "2026-W22"
month: "2026-05"
category: "開發工具"
subcategory: "工作流程工具"
release_tag: "v1.0.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-30
use_case: "為 Pi 提供 Claude-Code 風格的動態工作流程編排，讓多個子代理協同工作。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-02"
contributor_count: 0
engagement: "low"
issue_close_rate: 0
repo_size_kb: 101
readme_length: 5164
bus_factor: 0
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-30"
star_history: "2026-05-30:436,2026-05-30:437"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "pi-dynamic-workflows"
  - "Michaelliv/pi-dynamic-workflows"
  - "為 Pi 提供 Claude-Code 風格的動態工作流程編排，讓多個子代理協同工作。"
---

# pi-dynamic-workflows

**437** stars · **437** stars/天 · 建立 1 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/Michaelliv--pi-dynamic-workflows");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.0.0` `easy-install`

> [!summary] 一句話摘要
> 為 Pi 提供 Claude-Code 風格的動態工作流程編排，讓多個子代理協同工作。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (437 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在 Pi 環境中進行動態工作流程編排的開發者。
> **一句話重點** 這個專案展示了如何通過動態工作流程來提升代碼審計和多任務處理的效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Michaelliv--pi-dynamic-workflows");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "工作流程工具" && p.file.name !== "Michaelliv--pi-dynamic-workflows" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 工作流程工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，得到高效的動態工作流程編排，值得一試。

> [!abstract] 核心創新
> 提供了一種新的動態工作流程編排方式，支持多個子代理的並行處理。

## 專案簡介

這個專案是為 Pi 平台設計的動態工作流程編排工具，允許用戶通過簡單的自然語言請求來生成 JavaScript 工作流程腳本。用戶只需輸入一個請求，例如「運行工作流程以檢查此存儲庫並總結主要模塊」，系統便會自動生成相應的腳本，並在後台運行多個子代理來並行處理任務。這樣的設計使得大型代碼審計和多角度檢查變得更高效，因為它能夠同時處理多個任務並即時顯示進度。該工具的核心是使用 Node.js 的 vm 沙箱來執行工作流程，這樣可以確保腳本的安全性和可重現性，並且支持結構化的子代理輸出，讓結果更易於管理和分析。

使用者可以利用內建的全局函數如 `agent()` 來生成子代理，或使用 `parallel()` 和 `pipeline()` 來控制任務的執行方式。與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，這個專案專注於提供更靈活的工作流程設計和即時反饋，適合需要快速迭代和多任務處理的開發環境。雖然目前仍處於原型階段，尚未實現持久化或可恢復的運行，但已經具備了核心功能，未來有潛力成為一個強大的工作流程管理工具。對於需要進行代碼審計或大型重構的團隊，這個工具能顯著提高效率。

**技術棧**：`TypeScript` · `Node.js`

## 重點功能

- 動態工作流程生成 — 用戶只需輸入自然語言請求，系統自動生成相應的 JavaScript 工作流程腳本。
- 多子代理協作 — 使用 `agent()` 函數生成獨立的子代理，支持並行處理任務。
- 即時進度顯示 — 在工作流程運行過程中，實時顯示每個階段的進度和結果。
- 結構化輸出支持 — 支持 JSON Schema 驗證的結構化輸出，便於結果的管理和分析。
- 沙箱執行環境 — 使用 Node.js 的 vm 沙箱來執行工作流程，確保安全性和可重現性。

## 快速開始

1. 安裝 pi-dynamic-workflows
```bash
pi install npm:pi-dynamic-workflows
```
2. 在 Pi 中重新加載擴展
```bash
/reload
```
3. 運行工作流程
```bash
Run a workflow to inspect this repository and summarize the main modules.
```

## 程式碼範例

```ts
{
  "前置條件": "用戶已經安裝 pi-dynamic-workflows 擴展。",
  "程式碼": "export const meta = {\n  name: 'inspect_project',\n  description: 'Inspect a repository and summarize the main modules',\n  phases: [\n    { title: 'Scan' },\n    { title: 'Analyze' },\n  ],\n}\n\nphase('Scan')\nconst inventory = await agent('Inspect the repository structure.', {\n  label: 'repo inventory',\n})\n\nphase('Analyze')\nconst summary = await agent(\n  'Summarize the main modules from this inventory:\\n' + inventory,\n  { label: 'module summary' },\n)\n\nreturn { inventory, summary }",
  "預期輸出": "返回一個包含庫存和總結的對象。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 437 stars（437/天），forks 19（4.3%），顯示出一定的社群興趣。作者 Michaelliv 之前的專案可能與 Pi 平台的發展有關，這個工具解決了在代碼審計和多任務處理中缺乏靈活性和效率的問題。由於其獨特的工作流程設計，吸引了對於高效開發和代碼管理有需求的開發者。這個專案的快速增長可能與社群對於動態工作流程的需求有關，尤其是在多代理協作的場景下。forks/stars 比率顯示出用戶對於這個工具的實際修改和使用有興趣。

## 適合誰使用

**目標受眾**：需要在 Pi 環境中進行動態工作流程編排的開發者。

> [!example] 使用場景
> - 後端工程師用它來自動化代碼庫審計，因為可以同時運行多個子代理來提高效率，減少手動檢查的時間。
> - 前端開發者用它來進行多角度的代碼重構，因為可以快速生成工作流程來分析代碼結構，並即時獲得反饋。
> - DevOps 工程師用它來監控和分析大型專案的模塊，因為其支持並行處理和即時進度顯示，能夠快速識別問題。

## 架構分析

這個專案採用模組化的架構設計，使用 TypeScript 實現，並依賴 Node.js 的 vm 沙箱來執行工作流程腳本。這樣的設計使得工作流程的執行環境安全且可重現，並且支持多任務並行處理。資料流從用戶的請求開始，經過 Pi 模型生成工作流程腳本，然後在沙箱中執行，最終返回結構化的結果。選擇 Node.js 作為執行環境的好處在於其非同步處理能力，但這也限制了某些 API 的使用，增加了開發的複雜性。整體架構的擴展性良好，但在實現持久化和可恢復的運行時，可能會面臨挑戰。

## 技術深入分析

這個專案的核心技術機制是使用 Node.js 的 vm 沙箱來執行動態生成的 JavaScript 工作流程腳本。這樣的設計允許用戶通過自然語言請求生成工作流程，並在沙箱中安全地執行，確保了腳本的可重現性和安全性。該工具支持多個子代理的並行處理，通過 `agent()` 函數生成獨立的子代理，並使用 `parallel()` 和 `pipeline()` 控制任務的執行方式。這使得在大型代碼審計和多角度檢查中能夠顯著提高效率。

從性能上看，該工具能夠快速處理多個任務，但在處理複雜工作流程時，可能需要手動調整生成的腳本。選擇 TypeScript 作為開發語言的好處在於其靜態類型檢查能夠提高代碼的可維護性，但也增加了學習曲線。這個專案的依賴關係相對簡單，主要依賴於 Node.js 和 TypeScript，沒有過多的外部依賴，降低了維護成本。技術風險方面，隨著使用者數量的增加，可能會面臨性能瓶頸，特別是在高並發的情況下。

整合到現有的技術生態中相對容易，因為它可以與其他 Node.js 應用程序無縫協作，並且支持標準的開發工具和流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和使用範例，安裝過程相對順暢。雖然目前沒有專門的入門指南，但使用者可以通過範例快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 簡單易用的自然語言接口，降低了使用門檻。
> - 支持多任務並行處理，提高了工作效率。
> - 安全的沙箱執行環境，確保了腳本的安全性。

> [!danger] 缺點
> - 目前功能仍然有限，尚未實現持久化或可恢復的運行。
> - 對於複雜的工作流程，可能需要手動調整生成的腳本。
> - 依賴於 Node.js 的 vm 沙箱，限制了某些 API 的使用。

> [!warning] 注意事項
> - 目前仍處於原型階段，尚未實現持久化或可恢復的運行。
> - 不支持在工作流程中使用某些 Node.js API，如 `require` 和 `fs`。
> - 對於複雜的工作流程，可能需要手動調整生成的腳本以滿足特定需求。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成和管理多個代理的工作流程，但不支持即時進度顯示。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的工作流程功能，但缺乏結構化輸出支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成和管理多個代理的工作流程，但不支持即時進度顯示。 | 如果需要更強的代理管理功能，而不太關心即時進度顯示的話，可以選擇此工具。 | medium，因為需要重新設計工作流程的生成方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的工作流程功能，但缺乏結構化輸出支持。 | 如果需要更簡單的工作流程設計，且不需要結構化輸出的話，可以考慮此工具。 | low，因為功能相似，遷移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **pi-dynamic-workflows** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成和管理多個代理的工作流程，但不支持即時進度顯示。 | 提供類似的工作流程功能，但缺乏結構化輸出支持。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流程的生成方式。 | low，因為功能相似，遷移成本較低。 |
> | 適用場景 | 主要場景 | 如果需要更強的代理管理功能，而不太關心即時進度顯示的話，可以 | 如果需要更簡單的工作流程設計，且不需要結構化輸出的話，可以考 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 目前不支持持久化或可恢復的運行，所有工作流程在會話結束後將丟失。
  - 解法：在會話中手動記錄重要的工作流程結果。
- [MEDIUM] 某些 Node.js API 在沙箱中不可用，可能導致功能限制。
  - 解法：避免在工作流程中使用這些 API。
- [MEDIUM] 生成的工作流程腳本可能需要手動調整以滿足特定需求。
  - 解法：在生成後仔細檢查和修改腳本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行代碼審計 | 非常適合 | 能夠快速生成工作流程，並提高審計效率。 |
| 大型企業的多角度代碼重構 | 適合 | 支持多任務並行處理，能夠有效管理複雜的重構任務。 |
| 個人開發者進行小型專案的代碼檢查 | 普通 | 雖然功能強大，但對於小型專案可能過於複雜。 |
| 需要持久化工作流程的團隊 | 不適合 | 目前不支持持久化或可恢復的運行。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到高效的動態工作流程編排，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具在沙箱中執行，不需要高權限，且不會存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Michaelliv--pi-dynamic-workflows");
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
> const me = dv.page("Repos/Michaelliv--pi-dynamic-workflows");
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
| Forks | 19 |
| Open Issues | 12 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-28 |
| 建立日期 | 2026-05-28 |
| Repo 大小 | 101 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Michaelliv/pi-dynamic-workflows) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `acorn` `@biomejs/biome` `@mariozechner/pi-coding-agent` `@mariozechner/pi-tui` `tsx` `typebox` `typescript`

**最新版本**：v1.0.0 (2026-05-28)

> [!info]- Release Notes
> **Full Changelog**: https://github.com/Michaelliv/pi-dynamic-workflows/commits/v1.0.0
> 
> **Full Changelog**: https://github.com/Michaelliv/pi-dynamic-workflows/commits/v1.0.0

## 社群與生態

**社群活躍度**：社群活躍度尚可，近期有更新，但問題解決率為 0%。
**連結**：[文件](https://github.com/Michaelliv/pi-dynamic-workflows)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-28 ~ 2026-05-28）
> **活躍天數** 1 天 · **最新 commit** Rewrite README

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/Michaelliv/pi-dynamic-workflows/issues/9) | Support per-agent model selection in workflow scripts | 1 | 0 |
> | [#12](https://github.com/Michaelliv/pi-dynamic-workflows/issues/12) | [bug] Error: #<Promise> could not be cloned. | 0 | 0 |
> | [#11](https://github.com/Michaelliv/pi-dynamic-workflows/issues/11) | Audit: faithfulness gaps vs Claude Code's integrated Workflo | 0 | 0 |
> | [#10](https://github.com/Michaelliv/pi-dynamic-workflows/issues/10) | Support forked agents (fan-out from a shared parent context) | 0 | 0 |
> | [#8](https://github.com/Michaelliv/pi-dynamic-workflows/issues/8) | Step-level replay: memoized agent results `workflow` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # pi-dynamic-workflows
> 
> > Claude-Code-style dynamic workflows for [Pi](https://github.com/earendil-works/pi).
> 
> A Pi extension that adds a `workflow` tool. Instead of one assistant doing everything sequentially, the model writes a small JavaScript script that fans out the work across many isolated subagents, then synthesizes the results.
> 
> Great for codebase audits, multi-perspective review, large refactors, and fan-out research.
> 
> Inspired by Anthropic's [dynamic workflows in Claude Code](https://claude.com/blog/introducing-dynamic-workflows-in-claude-code).
> 
> ## Install
> 
> ```bash
> pi install npm:pi-dynamic-workflows
> # or from a local checkout
> pi install /path/to/pi-dynamic-workflows
> ```
> 
> Then in Pi:
> 
> ```text
> /reload
> ```
> 
> That's it. The extension registers a `workflow` tool and activates it on session start.
> 
> ## Usage
> 
> Just ask Pi for a workflow in plain language:
> 
> ```text
> Run a workflow to inspect this repository and summarize the main modules.
> ```
> 
> The model will write a workflow script and call the `workflow` tool. Live progress shows up inline:
> 
> ```text
> ◆ Workflow: inspect_project (3/3 done)
>   ✓ Scan 1/1
>     #1 ✓ repo inventory
>   ✓ Analyze 2/2
>     #2 ✓ source modules
>     #3 ✓ final summary
> ```
> 
> Press `Esc` to cancel a running workflow. Active subagents are aborted and surfaced as skipped.
> 
> ## Workflow script shape
> 
> A workflow is plain JavaScript. The first statement must export literal metadata:
> 
> ```js
> export const meta = {
>   name: 'inspect_project',
>   description: 'Inspect a repository and summarize the main modules',
>   phases: [
>     { title: 'Scan' },
>     { title: 'Analyze' },
>   ],
> }
> 
> phase('Scan')
> const inventory = await agent('Inspect the repository structure.', {
>   label: 'repo inventory',
> })
> 
> phase('Analyze')
> const summary = await agent(
>   'Summarize the main modules from this inventory:\n' + inventory,
>   { label: 'module summary' },
> )
> 
> return { inventory, summary }
> ```
> 
> ### Available globals
> 
> | Global | Description |
> | --- | --- |
> | `agent(prompt, opts)` | Spawn an isolated subagent. Returns its final text or, with `opts.schema`, a validated object. |
> | `parallel(thunks)` | Run an array of `() => agent(...)` thunks concurrently. Results are returned in input order. |
> | `pipeline(items, ...stages)` | Run each item through sequential stages while items fan out. Each stage receives `(prev, original, index)`. |
> | `phase(title)` | Mark the current phase. Used for grouping in the live progress view. |
> | `log(message)` | Append a workflow-level log line. |
> | `args` | Optional JSON value passed in via the tool's `args` parameter. |
> | `cwd`, `process.cwd()` | Current working directory for subagents. |
> | `budget` | `{ total, spent(), remaining() }` token budget tracker. |
> 
> ### Determinism rules
> 
> Workflow scripts are evaluated inside a Node `vm` sandbox. The following are intentionally unavailable:
> 
> - `Date.now()`, `new Date()`
> - `Math.random()`
> - `require`, `import`, `fs`, network APIs
> - spreads, computed keys, template interpolation, function calls inside `meta`
> 
> This keeps `meta` parseable, runs reproducible, and the surface area small.
> 
> ### Structured subagent output
> 
> Pass a JSON Schema via `opts.schema` and the subagent will return a validated object:
> 
> ```js
> const finding = await agent('Find security-sensitive files.', {
>   label: 'security scan',
>   schema: {
>     type: 'object',
>     properties: {
>       paths: { type: 'array', items: { type: 'string' } },
>       reason: { type: 'string' },
>     },
>     required: ['paths', 'reason'],
>   },
> })
> ```
> 
> Under the hood this is a Pi `structured_output` tool with `terminate: true`, so the subagent ends on that call without an extra assistant turn.
> 
> ## How it works
> 
> ```text
> user prompt
>   → Pi model writes a workflow script
>   → workflow tool parses + runs script in a vm sandbox
>   → script calls agent(), parallel(), pipeline()
>   → each agent() spawns an in-memory Pi subagent session
>   → snapshots stream back as compact progress
>   → final structured result returned to the parent assistant
> ```
> 
> Subagents run in fresh in-memory Pi sessions with the standard coding tools, so they can read files, run shell commands, and call structured output exactly like a normal Pi turn.
> 
> ## Library modules
> 
> | File | Purpose |
> | --- | --- |
> | `src/workflow.ts` | AST-validated parser and sandboxed workflow runtime. |
> | `src/workflow-tool.ts` | The Pi `workflow` tool, prompt guidelines, rendering, abort handling. |
> | `src/agent.ts` | `WorkflowAgent`, an in-memory Pi subagent runner. |
> | `src/structured-output.ts` | Terminating structured-output tool backed by TypeBox/JSON Schema. |
> | `src/display.ts` | Workflow snapshots and compact text renderers. |
> | `extensions/workflow.ts` | The Pi extension entrypoint. |
> 
> ## Development
> 
> ```bash
> npm install
> npm test     # biome check + tsc + unit tests
> npm run dev
> ```
> 
> Parser unit tests live in `tests/workflow-parser.test.ts` and cover both accepted and rejected script shapes.
> 
> ## Status
> 
> This is a prototype. It implements the core workflow primitive (script, subagents, parallel/pipeline, phases, abort, structured output) but does not yet implement persisted or resumable runs, or a `/workflows` manager.
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[多模態]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[FoundZiGu--GuJumpgate|FoundZiGu/GuJumpgate]]

[GitHub](https://github.com/Michaelliv/pi-dynamic-workflows)

## 相關收錄

> [!note]- 直接競品（同子分類：工作流程工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "工作流程工具" AND file.name != "Michaelliv--pi-dynamic-workflows"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Michaelliv--pi-dynamic-workflows"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Michaelliv--pi-dynamic-workflows" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "Michaelliv--pi-dynamic-workflows"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Michaelliv--pi-dynamic-workflows" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Michaelliv--pi-dynamic-workflows");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Michaelliv--pi-dynamic-workflows" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Michaelliv" AND file.name != "Michaelliv--pi-dynamic-workflows"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Michaelliv--pi-dynamic-workflows");
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
> const me = dv.page("Repos/Michaelliv--pi-dynamic-workflows");
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
> const me = dv.page("Repos/Michaelliv--pi-dynamic-workflows");
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
> const me = dv.page("Repos/Michaelliv--pi-dynamic-workflows");
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
> const me = dv.page("Repos/Michaelliv--pi-dynamic-workflows");
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

> **2026-05-30** — 首次收錄
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

- [[2026-05-30|2026-05-30]] — 首次收錄，436 stars
