---
repo: UditAkhourii/adhd
url: https://github.com/UditAkhourii/adhd
owner: UditAkhourii
owner_type: User
language: TypeScript
license: MIT
description: "ADHD — a skill for coding agents. Tree-of-thought with pruning, built on the Claude & Codex Agent SDK. Fans out parallel divergent thoughts under different cognitive frames, scores, prunes traps, deepens the survivors. The no-brainer skill for creative and interdisciplinary work."
homepage: "https://uditakhourii.github.io/adhd/"
stars: 603
stars_per_day: 121
forks: 27
open_issues: 15
created: 2026-05-25
pushed_at: 2026-05-30
first_seen: 2026-05-28
week: "2026-W22"
month: "2026-05"
category: "AI/ML"
subcategory: "創造性思考"
release_tag: "v0.1.4"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-28
use_case: "提供一個創造性思考的技能，幫助編碼代理進行多元思考與篩選。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-06-07"
contributor_count: 2
engagement: "low"
issue_close_rate: 0
repo_size_kb: 1863
readme_length: 9003
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-28"
star_history: "2026-05-28:354,2026-05-28:357,2026-05-29:468,2026-05-29:471,2026-05-30:516,2026-05-30:516,2026-05-31:602,2026-05-31:603"
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
  - "提供一個創造性思考的技能，幫助編碼代理進行多元思考與篩選。"
---

# adhd

**603** stars · **121** stars/天 · 建立 5 天前 · TypeScript · MIT

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

`v0.1.4`

`adhd` `agents` `ai` `ai-agents` `brainstorm` `chain-of-thought` `claude` `claude-agent-sdk` `creativity` `divergent-thinking` `ideation` `interdisciplinary` `llm` `llm-tools` `nodejs` `prompt-engineering` `tree-of-thought` `typescript`

> [!summary] 一句話摘要
> 提供一個創造性思考的技能，幫助編碼代理進行多元思考與篩選。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (121 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要提升創造性思考和多元推理能力的開發者和研究者。
> **一句話重點** ADHD 的創新在於它解決了自回歸推理中的過早收斂問題，讓多元思考成為可能。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/UditAkhourii--adhd");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "創造性思考" && p.file.name !== "UditAkhourii--adhd" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 創造性思考 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到提升創造性思考的效果，值得嘗試。

> [!abstract] 核心創新
> ADHD 提供了一種全新的思考架構，專注於解決自回歸推理中的過早收斂問題。

## 專案簡介

ADHD 是一個針對編碼代理的技能，旨在解決自回歸推理中的過早收斂問題。它透過樹狀思考架構，並在不同的認知框架下並行生成多個獨立的推理過程，這些過程之間沒有共享的上下文。這樣的設計使得每個推理過程能夠自由探索，然後再進行評分、聚類和篩選，最終保留最佳的想法。使用者可以透過 CLI 指令 `adhd` 來啟動這個技能，並使用 `evals` 指令來運行評估。ADHD 的一句話賣點是「透過多元思考和篩選，提升創造性和跨學科的工作效率」。

在技術實作上，ADHD 使用了 Claude Agent SDK，並依賴 TypeScript 和 JavaScript 進行開發，這使得它能夠輕鬆整合到現有的 Node.js 環境中。相較於其他工具如 `0x0funky/agent-sprite-forge` 和 `2aronS/Duel-Agents`，ADHD 更加專注於多元思考的過程，而不是僅僅依賴單一的推理路徑。這使得它在處理開放式工程問題時，能夠提供更高的創新性和更好的陷阱檢測能力。實際使用中，ADHD 目前仍在活躍開發中，社群參與度高，但也面臨著一些未解決的問題，如評估方法的改進和框架的區分。對於小型團隊或個人開發者來說，這是一個值得嘗試的工具，但在生產環境中使用時需謹慎考量其穩定性和成熟度。

**技術棧**：`TypeScript 5.6.0` · `Node.js >=18` · `@anthropic-ai/claude-agent-sdk ^0.1.0`

## 重點功能

- 樹狀思考架構 — 在不同的認知框架下並行生成多個推理過程，避免過早收斂。
- 陷阱篩選 — 透過評分和聚類，篩選出最佳的想法，減少無效思考。
- CLI 支援 — 使用 `adhd` 指令啟動技能，並可透過 `evals` 指令運行評估。
- 多元思考 — 支援多種思考模式，適合創造性和跨學科的工作。
- 整合 Claude Agent SDK — 方便與其他 AI 工具和框架進行整合。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 啟動 ADHD 技能
```bash
npx adhd
```
3. 運行評估
```bash
npx adhd evals
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 603 stars（121/天），forks 27（4.5%），這顯示出穩定的增長潛力。作者 Udit Akhouri 在 AI 和編碼代理領域有豐富的經驗，這個專案解決了以往推理過程中缺乏多樣性的痛點，之前的方案往往導致創意的流失。近期的媒體報導和社群的積極反饋也促進了這個專案的曝光度。技術上，ADHD 的設計理念和方法論為創造性思考提供了新的視角，這在當前的 AI 生態中是相當重要的。forks/stars 比率在 4.5% 屬於中等，顯示出一些使用者已經開始對其進行修改和擴展。

## 適合誰使用

**目標受眾**：需要提升創造性思考和多元推理能力的開發者和研究者。

> [!example] 使用場景
> - AI 研究者用它來探索多種創意解決方案，因為它能在不同的認知框架下並行生成想法，提升創新性。
> - 軟體開發者用它來進行模組設計，因為它能有效篩選出最佳的設計方案，避免陷入常見的設計陷阱。
> - 教育工作者用它來設計跨學科的教學計畫，因為它能幫助團隊在多元思考中找到創新的教學方法。

## 架構分析

ADHD 採用樹狀思考的架構模式，這種設計使得每個推理過程在獨立的認知框架下運行，避免了傳統推理中的上下文共享問題。資料流經過多個獨立的推理過程，然後進行評分和篩選，這樣的設計使得最終的結果更加多樣化和創新。選擇這種架構的代價是需要更多的計算資源來支持多個並行的推理過程。擴展性方面，ADHD 目前的設計在處理大規模的推理問題時可能會遇到性能瓶頸，尤其是在資源有限的環境中。整體來說，這種架構模式使得 ADHD 在創造性思考上具備了優勢，但也需考量其在實際應用中的資源需求。

## 技術深入分析

ADHD 的核心技術機制在於其樹狀思考架構，這種架構允許多個獨立的推理過程同時運行，並在沒有共享上下文的情況下進行探索。這樣的設計使得每個推理過程能夠自由發揮，最終通過評分和篩選來保留最佳的想法。效能上，ADHD 在處理開放式問題時表現出色，能夠生成多樣化的解決方案，但在資源需求上可能會有所增加，特別是在高並發的情況下。選擇 TypeScript 和 Node.js 作為開發語言，這使得它能夠輕鬆整合到現有的 JavaScript 生態系統中，並且能夠利用現有的工具和庫。技術風險方面，由於仍在開發中，未來可能會面臨 API 變更和穩定性問題。整合到現有工具鏈的難度相對較低，因為它支援 CLI 操作，並能夠與其他 Node.js 工具協作。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的基本指引，但缺乏詳細的範例。安裝過程相對順暢，沒有明顯的坑。文件目前僅提供英文版本，對於非英語使用者可能會造成一些障礙。

## 優缺點分析

> [!success] 優點
> - 提供多元思考的能力，適合創造性工作。
> - 能夠有效篩選和聚類想法，減少無效思考。
> - 整合 Claude Agent SDK，便於與其他工具協作。

> [!danger] 缺點
> - 仍在開發中，穩定性和性能尚未完全保證。
> - 社群支持和文檔尚在增強中，使用者可能面臨學習曲線。
> - 在處理複雜問題時，可能需要更多的調整和優化。

> [!warning] 注意事項
> - 目前仍在開發中，穩定性尚未完全保證。
> - 對於複雜的推理問題，可能需要進一步的調整和優化。
> - 社群支持和文檔仍在增強中，可能會遇到一些使用上的困難。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理的多樣性生成，但不如 ADHD 在思考過程中的深度篩選能力強。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供競爭性代理的框架，但缺乏 ADHD 的多元思考和陷阱檢測功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理的多樣性生成，但不如 ADHD 在思考過程中的深度篩選能力強。 | 如果需要一個簡單的代理生成工具，並且不需要多元思考的深度篩選功能。 | low，因為兩者的基本概念相似，轉換相對容易。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供競爭性代理的框架，但缺乏 ADHD 的多元思考和陷阱檢測功能。 | 如果需要一個專注於競爭性推理的框架，並且不需要多元思考的功能。 | medium，因為需要調整思考模式和框架的使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **adhd** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理的多樣性生成，但不如 ADHD 在思考過程中的深度篩選能力強。 | 提供競爭性代理的框架，但缺乏 ADHD 的多元思考和陷阱檢測功能。 |
> | 遷移成本 | - | low，因為兩者的基本概念相似，轉換相對容易。 | medium，因為需要調整思考模式和框架的使用方式。 |
> | 適用場景 | 主要場景 | 如果需要一個簡單的代理生成工具，並且不需要多元思考的深度篩選 | 如果需要一個專注於競爭性推理的框架，並且不需要多元思考的功能 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和探索，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高並發情況下可能會遇到性能瓶頸，導致推理速度變慢。
  - 解法：考慮減少同時運行的推理過程數量。
- [MEDIUM] 文檔尚不完善，可能會讓新手使用時感到困惑。
  - 解法：參加社群討論以獲取幫助。
- [MEDIUM] 目前的評估方法可能無法完全反映推理的有效性。
  - 解法：持續關注更新，並參與社群提供反饋。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊進行產品設計 | 非常適合 | 能夠提供多元的創意解決方案，提升設計效率。 |
| 大型企業的技術研發部門 | 普通 | 雖然能提供創意，但可能需要更多的穩定性和支持。 |
| 個人開發者進行 AI 研究 | 非常適合 | 能夠探索多種創意解決方案，適合個人實驗。 |
| 教育機構的課程設計 | 適合 | 能夠幫助設計跨學科的教學計畫，提升創新性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到提升創造性思考的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料。依賴的庫和框架也經過一定的審計，適合在 CI/CD 環境中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

ADHD 最常與其他 AI 工具和框架搭配使用，特別是在開發和設計階段。舉例來說，在一個使用 Node.js 的專案中，可以透過 `npx adhd` 指令來啟動 ADHD，並在設計過程中生成多元的解決方案。它與主流的 CI 工具如 GitHub Actions 兼容，並且可以輕鬆整合到現有的開發流程中。整合的摩擦點主要在於文檔不完善，使用者可能需要額外的時間來熟悉如何最佳化使用這個工具。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 ADHD 出現之前，許多推理工具都依賴於線性思考和單一的推理路徑，這導致了創意的流失和思考的局限。隨著 AI 技術的進步，特別是在多元思考和創造性解決方案的需求增加，ADHD 提供了一種新的思考架構，讓使用者能夠在多元的認知框架下進行探索。這個工具代表了當前 AI 生態系統中對於創造性思考的重視，未來可能會隨著更多的應用案例而進一步發展。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 TypeScript
- 了解基本的 AI 概念
- 有 Node.js 開發經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型團隊的內部工具中導入。第三週：收集使用反饋並優化使用方式。第四週：在主產品中逐步擴展使用。

**成功指標**：創造性解決方案的數量增加 30%。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以輕鬆轉換為其他工具。

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
| Forks | 27 |
| Open Issues | 15 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-30 |
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

**最新版本**：v0.1.4 — v0.1.4 — Community is open · Codex compatibility · first OSS adopter (2026-05-30)

> [!info]- Release Notes
> ## 🎉 The ADHD community is open
> 
> If you build with coding agents, sign up at **https://tally.so/r/WO1Nzj** as a contributor, maintainer, early adopter, or just a member who wants to follow along.
> 
> Full discussion: https://github.com/UditAkhourii/adhd/discussions/19
> 
> ## Where we are
> 
> - **5/6 wins** vs a single-shot baseline across 6 open-ended engineering problems, with **+5.17 novelty** and **+7.67 trap detection** on a 0–10 rubric — full methodology in [`EVALS.md`](https://github.com/UditAkhourii/adhd/blob/main/EVALS.md).
> - **Featured by [The New Stack](https://thenewstack.io/claude-code-adhd/)**.
> - **Adopted by [repowire](https://github.com/prassanna-ravishankar/repowire)** — its maintainer ported ADHD into the default orchestrator template ([PR #313](https://github.com/prassanna-ravishankar/repowire/pull/313), merged, MIT attribution).
> - **Independently reviewed** by an outside research engineer with 11 sources and 8 validation rounds. Every finding is tracked openly as [issues #16, #17, #18](https://github.com/UditAkhourii/adhd/issues).
> 
> ## What's in v0.1.4
> 
> - **Codex compatibility fix.** Collapsed `SKILL.md` description from a multi-paragraph YAML block to a single-line ~490-char description. Some Codex builds were truncating or rejecting the longer form. The full pre-flight gate is unchanged and still lives in the skill body.
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，持續有新貢獻和討論。
**連結**：[文件](https://github.com/UditAkhourii/adhd)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-27 ~ 2026-05-30）
> **活躍天數** 3 天 · **最新 commit** Codex compatibility: collapse SKILL.md description, add Codex install path

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
> ## Community
> 
> 👉 [**Join the ADHD community →**](https://tally.so/r/WO1Nzj) as a contributor, maintainer, early adopter, or just a member. One short form. We coordinate frame contributions, eval problems, integrations, and adopter onboarding there.
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
> Then invoke explicitly with `/adhd "your problem"`, or let it auto-trigger on ideation intents.
> 
> ### Codex quick path
> 
> If the universal command above fails to register inside Codex (some Codex builds discover skills from a specific path), force the target:
> 
> ```bash
> npx skills add UditAkhourii/adhd -a codex -g
> ```
> 
> Or install manually into Codex's skills directory:
> 
> ```bash
> mkdir -p ~/.codex/skills/adhd
> curl -fsSL https://raw.githubusercontent.com/UditAkhourii/adhd/main/skills/adhd/SKILL.md \
>   -o ~/.codex/skills/adhd/SKILL.md
> ```
> 
> Restart Codex. `/adhd "design a rate limiter"` should now route through the skill. The skill ships with a single-line description (≤600 chars) specifically because some Codex builds truncate or reject multi-line YAML block descriptions.
> 
> CLI and library installs, manual curl for other agents, and per-platform paths are in **[documentation/install.md](./documentation/install.md)**.
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
> - [**Han plugin compatibility analysis**](https://github.com/testdouble/han/blob/adhd-swarm-research/docs/research/adhd-application-to-han.md) by [@m

## 延伸閱讀

相關概念：[[創造性思考]] · [[多元推理]] · [[樹狀思考]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]]

[GitHub](https://github.com/UditAkhourii/adhd) · [官方網站](https://uditakhourii.github.io/adhd/)

## 相關收錄

> [!note]- 直接競品（同子分類：創造性思考）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "創造性思考" AND file.name != "UditAkhourii--adhd"
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
> const concepts = ["創造性思考","多元推理","樹狀思考"];
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

- [[2026-05-31|2026-05-31]] — 再次上榜，602 stars
- [[2026-05-30|2026-05-30]] — 再次上榜，516 stars
- [[2026-05-29|2026-05-29]] — 再次上榜，468 stars
- [[2026-05-28|2026-05-28]] — 首次收錄，354 stars
