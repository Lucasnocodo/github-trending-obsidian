---
repo: UditAkhourii/adhd
url: https://github.com/UditAkhourii/adhd
owner: UditAkhourii
owner_type: User
language: TypeScript
license: MIT
description: "ADHD — a skill for coding agents. Tree-of-thought with pruning, built on the Claude Agent SDK. Fans out parallel divergent thoughts under different cognitive frames, scores, prunes traps, deepens the survivors. The no-brainer skill for creative and interdisciplinary work."
homepage: "https://uditakhourii.github.io/adhd/"
stars: 516
stars_per_day: 129
forks: 25
open_issues: 15
created: 2026-05-25
pushed_at: 2026-05-28
first_seen: 2026-05-28
week: "2026-W22"
month: "2026-05"
category: "AI/ML"
subcategory: "創意工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-28
use_case: "提供一種創新的思考框架，幫助編碼代理進行多元思考與創意發想。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-06"
contributor_count: 2
engagement: "low"
issue_close_rate: 0
repo_size_kb: 1856
readme_length: 8052
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-28"
star_history: "2026-05-28:354,2026-05-28:357,2026-05-29:468,2026-05-29:471,2026-05-30:516,2026-05-30:516"
tags:
  - github
  - "category/ai_ml"
  - "lang/typescript"
  - "topic/adhd"
  - "topic/agents"
  - "topic/ai"
  - "topic/ai_agents"
  - "topic/brainstorm"
aliases:
  - "adhd"
  - "UditAkhourii/adhd"
  - "提供一種創新的思考框架，幫助編碼代理進行多元思考與創意發想。"
---

# adhd

**516** stars · **129** stars/天 · 建立 4 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/UditAkhourii--adhd");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`adhd` `agents` `ai` `ai-agents` `brainstorm` `chain-of-thought` `claude` `claude-agent-sdk` `creativity` `divergent-thinking` `ideation` `interdisciplinary` `llm` `llm-tools` `nodejs` `prompt-engineering` `tree-of-thought` `typescript`

> [!summary] 一句話摘要
> 提供一種創新的思考框架，幫助編碼代理進行多元思考與創意發想。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (129 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要提升創意發想能力的開發者和研究人員，尤其是在 AI 和編碼代理領域。
> **一句話重點** ADHD 的創新在於將思考過程視為架構問題，並透過多元化的推理過程來提升創意發想的效果。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/UditAkhourii--adhd");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "創意工具" && p.file.name !== "UditAkhourii--adhd" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 創意工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到更靈活的思考方式，值得嘗試。

> [!abstract] 核心創新
> ADHD 將思考過程視為架構問題，而非單純的提示問題，透過多元化的推理過程來提升創意發想的效果。

## 專案簡介

ADHD 是一個針對編碼代理的技能，旨在解決自回歸推理中的過早收斂問題。它通過在不同的認知框架下並行生成多個獨立的推理過程，並在這些過程中不共享上下文，來擴展思考的範圍。用戶可以透過 `adhd` CLI 指令來啟動這個技能，並使用 `evals` 指令來進行性能評估。這種設計的核心賣點在於它的樹狀思考結構，能夠在創意和跨學科工作中提供更深層的思考。技術上，ADHD 基於 Claude Agent SDK，並利用 TypeScript 開發，依賴於 `p-limit` 和 `zod` 來處理並行計算和數據驗證。

與傳統的線性思考鏈相比，ADHD 的樹狀思考能夠避免過早鎖定於某一思路，這使得它在創意發想和問題解決上更具靈活性。相較於其他工具，如 MoA 和 GPT-5 Pro，ADHD 提供了更為多樣化的思考路徑，特別適合需要創新思維的場景。使用者在實際應用中可能會遇到的問題包括需要調整思考框架以適應不同的任務需求，並且社群的活躍度尚需提升，因為目前仍有 15 個未解決的問題。這個專案目前處於 alpha 階段，適合對創意發想有需求的開發者，未來可能會進一步整合更多的評估工具和框架。

**技術棧**：`TypeScript 5.6.0` · `Node.js >=18` · `@anthropic-ai/claude-agent-sdk ^0.1.0`

## 重點功能

- 樹狀思考結構 — 在不同認知框架下並行生成多個獨立推理過程，避免過早收斂。
- CLI 指令支持 — 使用 `adhd` 啟動技能，並透過 `evals` 指令進行性能評估。
- 多樣化思考路徑 — 針對創意和跨學科工作提供更深層的思考。
- 基於 Claude Agent SDK — 利用現有的 AI 生態系統，快速整合。
- 性能評估 — 提供 `evals:quick` 指令以快速測試思考框架的有效性。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 編譯 TypeScript
```bash
npm run build
```
3. 啟動 ADHD CLI
```bash
node dist/cli.js
```
4. 運行性能評估
```bash
npm run evals
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Node.js 和相關依賴",
  "指令": "npm run evals",
  "預期輸出": "執行性能評估並顯示結果"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 516 stars（129/天），forks 25（4.8%），顯示出一定的社群關注度。作者 Udit Akhouri 在 AI 代理領域有一定的背景，這個專案解決了在創意發想過程中缺乏有效工具的痛點，特別是針對編碼代理的應用。近期的媒體報導和社群測試也為其帶來了曝光。技術上，Claude Agent SDK 的使用使得這個工具能夠在現有的 AI 生態系統中快速整合，並且 forks/stars 比率顯示出使用者對此工具的實際修改需求不高，可能是因為其功能設計已經相對完整。

## 適合誰使用

**目標受眾**：需要提升創意發想能力的開發者和研究人員，尤其是在 AI 和編碼代理領域。

> [!example] 使用場景
> - AI 研究員用它來生成多種創意解決方案，因為它能夠在不同的認知框架下並行處理想法，避免思維的局限性。
> - 軟體開發者用它來進行代碼設計的頭腦風暴，因為它的樹狀思考結構能夠有效地整理和深化潛在的解決方案。
> - 產品經理用它來探索新功能的可能性，因為它能夠快速評估多個想法的可行性，提升創意發想的效率。

## 架構分析

ADHD 採用樹狀思考架構，這種設計的目的是為了擴展思考範圍，避免過早收斂。每個推理過程在不同的認知框架下獨立運行，這樣可以促進多樣化的思考。數據流經過多個獨立的推理過程，最終由一個評估器進行打分和修剪。

這種設計的代價在於需要更多的計算資源來支持並行處理，並且對於使用者來說，可能需要時間來適應這種新的思考方式。擴展性方面，隨著使用者數量的增加，可能會面臨性能瓶頸，特別是在高負載的情況下。整體而言，這種架構能夠提供更靈活的思考方式，但也要求使用者具備一定的技術背景來充分利用其潛力。

## 技術深入分析

ADHD 的核心技術機制在於其樹狀思考架構，這種架構允許多個推理過程在不同的認知框架下獨立運行，這樣可以避免過早收斂到某一思路。效能方面，這種設計需要較高的計算資源來支持並行處理，特別是在處理大量資料時。設計上選擇 TypeScript 和 Node.js 使得開發過程更加靈活，但也帶來了對於 Node.js 環境的依賴。這種選擇的代價在於可能需要額外的學習成本來掌握這些技術。技術風險方面，隨著使用者數量的增加，可能會面臨性能瓶頸，特別是在高負載的情況下。整合方面，ADHD 可以輕鬆地與現有的 AI 工具鏈進行整合，但使用者需要具備一定的技術背景來充分利用其潛力。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和使用範例，安裝過程相對順暢，但可能需要一些時間來適應新的思考框架。文件目前僅提供英文版本，對於非英語使用者可能會有一定的學習門檻。

## 優缺點分析

> [!success] 優點
> - 提供多樣化的思考過程，避免思維局限。
> - 基於 Claude Agent SDK，易於整合進現有的 AI 生態系統。
> - CLI 工具易於使用，適合快速測試和評估。

> [!danger] 缺點
> - 仍處於 alpha 階段，功能不穩定。
> - 社群活躍度不足，問題解決速度慢。
> - 需要一定的技術背景才能充分利用其潛力。

> [!warning] 注意事項
> - 目前仍處於 alpha 階段，功能可能不穩定。
> - 社群活躍度不足，解決問題的速度較慢。
> - 需要 Node.js 18 以上版本才能運行。
> - 僅支持 TypeScript 和 JavaScript，對其他語言的支持有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供了一個不同的代理框架，專注於創建和管理多個代理，而 ADHD 更專注於思考過程的多樣性。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於資料處理和分析，與 ADHD 的創意發想功能不同。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 提供了對 Codex 的封裝，著重於代碼生成，而 ADHD 則專注於思考過程的多元化。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理多個代理，提供不同的功能模組，而 ADHD 更專注於思考過程的多樣性。 | 如果你的專案需要管理多個代理並進行協作，則可以考慮選擇這個工具。 | medium，因為需要重新設計代理的協作邏輯。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於資料處理和分析，與 ADHD 的創意發想功能不同。 | 如果你的專案主要集中在資料分析而非創意發想，則這個工具會更合適。 | low，因為資料處理的邏輯相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **adhd** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建和管理多個代理，提供不同的功能模組，而 ADHD 更專注於思考過程的多樣性。 | 專注於資料處理和分析，與 ADHD 的創意發想功能不同。 |
> | 遷移成本 | - | medium，因為需要重新設計代理的協作邏輯。 | low，因為資料處理的邏輯相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的專案需要管理多個代理並進行協作，則可以考慮選擇這個工 | 如果你的專案主要集中在資料分析而非創意發想，則這個工具會更合 |

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

- **[HIGH]** 在高負載情況下性能可能會下降，導致思考過程延遲。
  - 解法：減少同時運行的推理過程數量。
- [MEDIUM] 需要 Node.js 18 以上版本，否則無法運行。
  - 解法：確保環境符合版本要求。
- [MEDIUM] 社群活躍度不足，問題解決速度慢。
  - 解法：主動參與社群討論以加速問題解決。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| AI 研究團隊進行創意發想 | 非常適合 | ADHD 提供了多樣化的思考過程，能夠促進創意的生成。 |
| 小型開發團隊進行代碼設計 | 適合 | 雖然功能尚不穩定，但可以提供新的思考方式。 |
| 大型企業的核心產品開發 | 不適合 | 目前處於 alpha 階段，功能不穩定，不建議用於生產環境。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到更靈活的思考方式，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不存取敏感資料，但使用時需注意依賴的第三方庫的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/UditAkhourii--adhd");
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
> const me = dv.page("Repos/UditAkhourii--adhd");
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
| Forks | 25 |
| Open Issues | 15 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-28 |
| 建立日期 | 2026-05-25 |
| 官方網站 | [Link](https://uditakhourii.github.io/adhd/) |
| Repo 大小 | 1.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/UditAkhourii/adhd) |
| Topics | `adhd` `agents` `ai` `ai-agents` `brainstorm` `chain-of-thought` `claude` `claude-agent-sdk` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@anthropic-ai/claude-agent-sdk` `p-limit` `zod` `@types/node` `tsx` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 70
>     "JavaScript" : 30
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@UditAkhourii](https://github.com/UditAkhourii) | 8 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，但解決問題的速度較慢。
**連結**：[文件](https://uditakhourii.github.io/adhd/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-27 ~ 2026-05-28）
> **活躍天數** 2 天 · **最新 commit** Add Early adopters section; repowire is the first entry

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/UditAkhourii/adhd/issues/18) | Run evals at K=10 and K=20 to bridge K=5 (ours) vs K=100 (li `evals` `paper` `methodology` | 1 | 0 |
> | [#17](https://github.com/UditAkhourii/adhd/issues/17) | Distinguish ADHD frames from personas (A5) and from domain s `documentation` `paper` `methodology` | 1 | 0 |
> | [#16](https://github.com/UditAkhourii/adhd/issues/16) | Address A7 (CHI 2025) human-in-loop counter-evidence in pape `documentation` `paper` `methodology` | 1 | 0 |
> | [#14](https://github.com/UditAkhourii/adhd/issues/14) | Run head-to-head evals vs MoA, Self-Consistency, GPT-5 Pro,  `evals` `paper` `methodology` | 1 | 0 |
> | [#15](https://github.com/UditAkhourii/adhd/issues/15) | Cluster-level narrowing instead of idea-level deepening `enhancement` `architecture` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # ADHD — a skill for agents
> 
> [](https://github.com/UditAkhourii/adhd/actions/workflows/ci.yml)
> [](https://www.npmjs.com/package/adhd-agent)
> [](./LICENSE)
> [](./documentation/install.md)
> [](https://adhdstack.github.io/)
> [](https://thenewstack.io/claude-code-adhd/)
> 
> > **An architectural fix for premature convergence in autoregressive reasoning.**
> 
> Linear Chain-of-Thought anchors on whatever it says first. Tree-of-Thought widens the search but still walks a single shared context, so the anchoring persists across branches. **ADHD treats this as an architectural problem, not a prompting one** — it spawns N isolated reasoning processes under deliberately distorted cognitive frames, with zero shared context during divergence, then runs a separate critic pass to score, cluster, prune traps, and deepen the survivors.
> 
> Reach for it on **design decisions, fuzzy debugging, naming, API surface design, strategy, and any prompt of the shape *"give me a few ways to…"***.
> 
> 📄 **Preprint:** [ADHD: Parallel Divergent Ideation for Coding Agents](https://adhdstack.github.io/) · 👤 **Author:** Udit Akhouri — [@akhouriudit](https://x.com/akhouriudit) · [LinkedIn](https://www.linkedin.com/in/udit-akhouri-10160a168/)
> 
> ---
> 
> ## Featured
> 
> - 🔌 **Adopted by [repowire](https://github.com/prassanna-ravishankar/repowire)** — the first OSS project to officially ship ADHD. Its maintainer ported the framework onto repowire's mesh-orchestrator primitives in [PR #313](https://github.com/prassanna-ravishankar/repowire/pull/313) (merged): frames become frame-shifted temp peers, the generator/critic split maps onto separate peers vs. the orchestrator's own turn, attribution via `metadata.based-on` (MIT).
> - 📰 **[The New Stack](https://thenewstack.io/claude-code-adhd/)** ran a feature story on ADHD for Claude Code.
> - 💬 **OpenClaw / multi-agent community** is independently testing it across agents. One tester: *"I read it, installed it on two different agents… I actually love it. This is great. I thought this was gonna be another useless post. But no, it wasn't."*
> - 🔬 An independent **[evidence-based research review](https://github.com/testdouble/han/blob/adhd-swarm-research/docs/research/adhd-application-to-han.md)** (11 sources, 8 validation rounds) was published against the method — findings tracked openly as [issues #16–#18](https://github.com/UditAkhourii/adhd/issues).
> 
> ---
> 
> ## Early adopters
> 
> Projects that officially ship or integrate ADHD:
> 
> | Project | What they did | Status |
> |---|---|---|
> | [**repowire**](https://github.com/prassanna-ravishankar/repowire) | Ported ADHD onto repowire's mesh-orchestrator primitives — frames become frame-shifted temp peers, generator/critic split maps to separate peers vs. the orchestrator's turn. Ships in the default orchestrator template. ([PR #313](https://github.com/prassanna-ravishankar/repowire/pull/313)) | ✅ Merged · MIT attribution |
> 
> Shipping ADHD in your project? Open a PR adding it here, or [open an issue](https://github.com/UditAkhourii/adhd/issues/new) and we'll add you.
> 
> ---
> 
> ## Install
> 
> One command, auto-detects your agent (Claude Code, Cursor, Antigravity, Codex, Cline, Gemini CLI, Windsurf, and ~50 more):
> 
> ```bash
> npx skills add UditAkhourii/adhd
> ```
> 
> Then invoke explicitly with `/adhd "your problem"`, or let it auto-trigger on ideation intents. CLI and library installs, manual curl, and per-platform paths are in **[documentation/install.md](./documentation/install.md)**.
> 
> ```bash
> npm install -g adhd-agent     # CLI
> npm install adhd-agent        # library
> ```
> 
> ---
> 
> ## Quickstart
> 
> ```bash
> adhd "design a rate limiter that survives a leader election"
> adhd "name this function" --frames 3 --ideas 8 --top 2
> ```
> 
> ```ts
> import { run, renderText } from "adhd-agent";
> 
> const result = await run({ problem: "How should we shard this queue under bursty load?", framesPerRun: 5, topK: 3 });
> console.log(renderText(result));
> // result.shortlist · result.nonObviousPick · result.traps · result.deepened · result.clusters
> ```
> 
> Full reference: **[documentation/api.md](./documentation/api.md)**.
> 
> ---
> 
> ## How it works
> 
> A two-phase loop with a hard wall between the phases.
> 
> 1. **Diverge.** Pick N cognitive frames. Spawn N parallel, **isolated** Agent calls — each sees the problem plus one frame's vantage prompt, and a system prompt that forbids evaluation. Branches never see each other, so no anchoring.
> 2. **Focus.** A separate critic call scores every idea (`novelty / viability / fit`), flags traps with reasons, clusters by underlying angle, and deepens the top-K survivors into sketches with risks and first steps.
> 
> The generator-critic split is **mechanical** — separate LLM calls with opposite system prompts — not promised in one prompt. Deep dive: **[documentation/how-it-works.md](./documentation/how-it-works.md)**. How it differs from CoT and ToT: **[documentation/vs-cot-and-tot.md](./documentation/vs-cot-and-tot.md)**.
> 
> ---
> 
> ## Results
> 
> Mean scores across 6 open-ended engineering problems (0–10), ADHD vs a single-shot baseline at the same model, judged by an independent LLM with a skeptical-staff-engineer prompt, A/B order randomized.
> 
> | Dimension          | ADHD     | Baseline | Δ         | Ratio |
> | ------------------ | -------: | -------: | --------: | ----: |
> | breadth            | **9.00** | 4.83     | **+4.17** | 1.9×  |
> | novelty            | **7.83** | 2.67     | **+5.17** | 2.9×  |
> | trap detection     | **9.50** | 1.83     | **+7.67** | 5.2×  |
> | actionability      | **9.50** | 6.50     | **+3.00** | 1.5×  |
> | builder usefulness | **7.67** | 6.83     | **+0.83** | 1.1×  |
> 
> **ADHD wins 5 of 6 problems.** Biggest gap is trap detection — baselines rarely name the seductive-but-broken ideas. Methodology, limitations, and how to reproduce: **[documentation/evals.md](./documentation/evals.md)**.
> 
> ---
> 
> ## Documentation
> 
> | Page | What's in it |
> |---|---|
> | [Install](./documentation/install.md) | Every install path — skill, CLI, library, Agent SDK, per-platform |
> | [How it works](./documentation/how-it-works.md) | The two-phase loop + architecture (context, pruning, orchestration) |
> | [vs CoT & ToT](./documentation/vs-cot-and-tot.md) | Structural comparison, the three load-bearing differences, frames vs personas |
> | [Frames](./documentation/frames.md) | The 15 cognitive frames, how selection works, how to author your own |
> | [When to use](./documentation/when-to-use.md) | Use / don't use, why it shines on creative work, cost & speed |
> | [CLI & API](./documentation/api.md) | CLI flags, library types, using ADHD inside your own agent |
> | [Evals](./documentation/evals.md) | Methodology, headline numbers, limitations, roadmap |
> 
> Also: [SKILL.md](./skills/adhd/SKILL.md) (the runnable skill) · [SOURCE-SPEC.md](./SOURCE-SPEC.md) (original spec) · [CONTRIBUTING.md](./CONTRIBUTING.md) · [the preprint](https://adhdstack.github.io/).
> 
> ---
> 
> ## Star History
> 
>   
> 
> ---
> 
> ## External reviews
> 
> - [**Han plugin compatibility analysis**](https://github.com/testdouble/han/blob/adhd-swarm-research/docs/research/adhd-application-to-han.md) by [@mxriverlynn](https://www.reddit.com/user/mxriverlynn) — evidence-based review using Han's own `/research` skill, 11 sources, 8 validation rounds. Findings tracked as issues [#16](https://github.com/UditAkhourii/adhd/issues/16), [#17](https://github.com/UditAkhourii/adhd/issues/17), [#18](https://github.com/UditAkhourii/adhd/issues/18).
> 
> ---
> 
> ## License
> 
> MIT License.
> 
> ADHD operationalizes the *Divergent Ideation* source spec ([SOURCE-SPEC.md](./SOURCE-SPEC.md)). The runnable skill is at [`skills/adhd/SKILL.md`](./skills/adhd/SKILL.md).
> 
> ---
> 
> ## Contact
> 
> **Udit Akhouri** — author of the preprint and maintainer.
> 
> [adhdstack.github.io](https://adhdstack.github.io/) · [@akhouriudit](https://x.com/akhouriudit) · [LinkedIn](https://www.linkedin.com/in/udit-akhouri-10160a168/) · [researchudit@gmail.com](mailto:researchudit@gmail.com) · [@UditAkhourii](https://github.com/UditAkhourii)
> 
> Open to collaboration with research labs and applied-AI teams 

## 延伸閱讀

相關概念：[[創意發想]] · [[多模態]] · [[AI 代理]] · [[樹狀思考]] · [[自動化推理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]]

[GitHub](https://github.com/UditAkhourii/adhd) · [官方網站](https://uditakhourii.github.io/adhd/)

## 相關收錄

> [!note]- 直接競品（同子分類：創意工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "創意工具" AND file.name != "UditAkhourii--adhd"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "UditAkhourii--adhd"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "UditAkhourii--adhd" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "UditAkhourii--adhd"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["創意發想","多模態","AI 代理","樹狀思考","自動化推理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "UditAkhourii--adhd" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/UditAkhourii--adhd");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "UditAkhourii--adhd" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "UditAkhourii" AND file.name != "UditAkhourii--adhd"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/UditAkhourii--adhd");
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
> const me = dv.page("Repos/UditAkhourii--adhd");
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
> const me = dv.page("Repos/UditAkhourii--adhd");
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
> const me = dv.page("Repos/UditAkhourii--adhd");
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
> const me = dv.page("Repos/UditAkhourii--adhd");
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

> **2026-05-28** — 首次收錄
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

- [[2026-05-30|2026-05-30]] — 再次上榜，516 stars
- [[2026-05-29|2026-05-29]] — 再次上榜，468 stars
- [[2026-05-28|2026-05-28]] — 首次收錄，354 stars
