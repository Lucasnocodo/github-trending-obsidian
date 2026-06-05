---
repo: datawhalechina/Agent-Learning-Hub
url: https://github.com/datawhalechina/Agent-Learning-Hub
owner: datawhalechina
owner_type: Organization
language: HTML
license: MIT
description: "AI Agent 学习路线与资料库收集"
homepage: "https://datawhalechina.github.io/Agent-Learning-Hub/"
stars: 2732
stars_per_day: 152
forks: 271
open_issues: 1
created: 2026-05-17
pushed_at: 2026-06-02
first_seen: 2026-05-23
week: "2026-W21"
month: "2026-05"
category: "教學資源"
subcategory: "AI Agent 學習"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-23
use_case: "提供 AI Agent 學習路線與資料庫，幫助開發者系統性學習與實作。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-27"
contributor_count: 4
engagement: "low"
issue_close_rate: 67
repo_size_kb: 18
readme_length: 9680
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-23"
star_history: "2026-05-23:1092,2026-05-24:1217,2026-05-24:1219,2026-05-27:1646,2026-05-29:1859,2026-05-30:1939,2026-05-31:1998,2026-06-01:2071,2026-06-02:2188,2026-06-03:2279,2026-06-04:2456,2026-06-05:2732"
tags:
  - github
  - "category/教學資源"
  - "lang/html"
  - org
  - easy_install
aliases:
  - "Agent-Learning-Hub"
  - "datawhalechina/Agent-Learning-Hub"
  - "提供 AI Agent 學習路線與資料庫，幫助開發者系統性學習與實作。"
---

# Agent-Learning-Hub

**2.7k** stars · **152** stars/天 · 建立 18 天前 · HTML · MIT

```dataviewjs
const me = dv.page("Repos/datawhalechina--Agent-Learning-Hub");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

> [!summary] 一句話摘要
> 提供 AI Agent 學習路線與資料庫，幫助開發者系統性學習與實作。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (152 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 希望系統性學習 AI Agent 開發的開發者和研究人員。
> **一句話重點** 這個專案不僅提供學習資源，更是建立了一個系統性的學習框架，讓開發者能夠有效地掌握 AI Agent 的開發技能。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/datawhalechina--Agent-Learning-Hub");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI Agent 學習" && p.file.name !== "datawhalechina--Agent-Learning-Hub" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI Agent 學習 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、2 小時整合，得到系統性的學習資源，值得投入。

> [!abstract] 核心創新
> 提供一個系統性的 AI Agent 學習路線圖，幫助開發者有效學習與實作。

## 專案簡介

Agent Learning Hub 是一個為想要建立實用、可靠的 AI Agent 而設計的學習資源集合。使用者可以根據自己的水平選擇不同的學習路徑，從基礎的 agent 概念到實際的專案實作，這種結構化的學習方式能有效避免隨意收集資料的困擾。核心機制是透過一系列的學習任務，讓使用者逐步掌握 agent 的運作原理，包括 agent 的基本循環、工具使用、記憶管理等。使用者可以透過「Learning Todo List」逐項完成學習任務，並在每個階段產出具體的成果。這個專案特別適合希望深入了解 agent 工程的開發者，因為它提供了清晰的學習路徑和實作範例。技術上，這個專案主要使用 HTML 來展示學習資源，並且不依賴複雜的框架，讓新手也能輕鬆上手。

與其他類似工具相比，如 LangChain 或 AutoGen，Agent Learning Hub 更加專注於實用性和系統性，而不是單純的框架介紹。這使得它在學習過程中能夠提供更具體的實作指導，尤其是在多 agent 協作和工具使用方面。使用者在學習過程中可能會遇到資源更新的速度快、部分資料過時的問題，但整體來說，這是一個值得投入的學習平台。對於希望在 AI Agent 領域有所建樹的開發者來說，這個專案提供了必要的資源和指導，特別是在快速變化的技術環境中。未來六個月內，隨著 AI Agent 技術的進一步發展，這個專案可能會持續更新學習內容，保持其前沿性。

**技術棧**：`HTML`

## 重點功能

- 學習 Todo List — 提供分階段的學習任務，幫助使用者逐步掌握 AI Agent 的概念與實作。
- 資源整理 — 整合社群分享、官方博客、論文和開源專案，方便使用者查找。
- 專案階梯 — 提供從簡單到複雜的專案範例，幫助使用者實踐所學。
- Legacy Frameworks 參考 — 提供過去框架的參考價值，讓使用者了解歷史背景。
- 持續更新 — 隨著 AI Agent 領域的變化，持續更新學習內容和資源。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/datawhalechina/Agent-Learning-Hub.git
```
2. 打開 README 文件
```bash
cd Agent-Learning-Hub && open README.md
```
3. 開始學習
```bash
根據 Learning Todo List 開始逐項完成任務
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 18 天就累積 2732 stars（152/天），forks 271（9.9%），顯示出良好的社群參與度。這個專案由 Datawhale 團隊維護，成員在 AI 領域有豐富的經驗。它解決了許多開發者在學習 AI Agent 時面臨的資料分散和缺乏系統性指導的問題。之前的學習資源往往缺乏結構，使用者難以找到合適的學習路徑。這個專案的出現，正好填補了這個空白，提供了一個清晰的學習藍圖。社群的活躍度和持續更新也顯示出其潛在的長期價值。

## 適合誰使用

**目標受眾**：希望系統性學習 AI Agent 開發的開發者和研究人員。

> [!example] 使用場景
> - 新手開發者用它來系統性學習 AI Agent 的基本概念，因為它提供了清晰的學習路徑和具體的任務。
> - 有經驗的工程師用它來快速補充在 agent 工程方面的知識，因為它涵蓋了最新的工具和技術。
> - 研究人員用它來尋找相關的開源專案和文獻，因為它整理了大量的資源，節省了搜尋時間。

## 架構分析

這個專案的架構相對簡單，主要以 HTML 為展示層，並不依賴複雜的後端技術。資料主要來自於社群貢獻和官方資源，透過精心整理的學習路徑提供給使用者。這樣的設計使得新手可以輕鬆上手，但也意味著在資源更新上可能會有延遲。整體架構的優勢在於其輕量和易於維護，缺點則是對於需要即時更新的內容可能無法快速反應。擴展性方面，由於主要依賴 HTML，未來若要加入互動功能或更複雜的學習工具，可能需要額外的開發投入。

## 技術深入分析

Agent Learning Hub 的核心在於其系統化的學習路徑，這不僅僅是資源的集合，更是對於 AI Agent 開發的全面理解。它使用 HTML 作為展示層，這使得新手能夠輕鬆訪問和理解內容。整體架構的設計使得資源能夠快速更新，並且能夠隨著技術的演進而調整學習內容。這個專案的設計模式是以任務為導向，讓使用者能夠在完成每一項任務的同時，逐步建立對於 Agent 概念的理解。與其他工具相比，這個專案的優勢在於其清晰的學習路徑和實作指導，特別是在多 agent 協作和工具使用方面。未來，隨著 AI Agent 技術的進一步發展，這個專案可能會持續更新學習內容，保持其前沿性。整體來說，這是一個值得投入的學習平台，特別是對於希望在 AI Agent 領域有所建樹的開發者。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且有結構，提供了詳細的學習路徑和任務。安裝過程非常簡單，只需克隆專案即可開始。文件中沒有提供多語言支持，但內容足夠清晰，對於大多數使用者來說不會造成困難。整體來說，花 30 分鐘能夠順利上手並開始學習。

## 優缺點分析

> [!success] 優點
> - 系統化的學習路徑，適合不同水平的使用者。
> - 整合了大量的資源，節省查找時間。
> - 持續更新，保持內容的前沿性。

> [!danger] 缺點
> - 部分資料可能過時，需要自行查證。
> - 缺乏互動性，學習過程較為單向。
> - 對於完全新手，可能需要額外的背景知識。

> [!warning] 注意事項
> - 部分資料可能過時，需自行查證最新資訊。
> - 不適合完全依賴於單一框架或工具，需多方參考。
> - 對於完全沒有基礎的使用者，可能需要額外的背景知識。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | LangChain 提供了多種工具和框架，但缺乏系統性的學習路徑，使用者需要自行摸索。 |
| [microsoft/autogen](https://github.com/microsoft/autogen) | AutoGen 專注於多 agent 對話框架，較少涉及實際的工程實作，適合了解歷史背景。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | Agent Sprite Forge 提供了開發工具，但不如本專案系統化，學習曲線較陡。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | LangChain 提供了多種工具和框架，重點在於工具的整合與使用，但缺乏系統性的學習路徑。 | 如果你的團隊需要更靈活的工具整合，而不僅僅是學習路徑，LangChain 會是更好的選擇。 | medium，因為需要重新適應新的工具和框架。 |
| [microsoft/autogen](https://github.com/microsoft/autogen) | AutoGen 專注於多 agent 對話框架，適合了解歷史背景，但不如本專案系統化。 | 如果你需要專注於多 agent 的協作和對話，AutoGen 是更合適的選擇。 | low，因為主要是不同的學習重點。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Agent-Learning-Hub** | **langchain** | **autogen** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | LangChain 提供了多種工具和框架，重點在於工具的整合與使用，但缺乏系統性的學習路徑。 | AutoGen 專注於多 agent 對話框架，適合了解歷史背景，但不如本專案系統化。 |
> | 遷移成本 | - | medium，因為需要重新適應新的工具和框架。 | low，因為主要是不同的學習重點。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要更靈活的工具整合，而不僅僅是學習路徑，Lan | 如果你需要專注於多 agent 的協作和對話，AutoGen |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人學習和小型專案，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 部分學習資源可能過時，需自行查證最新資訊
  - 解法：定期檢查官方資源和社群更新
- **[HIGH]** 對於完全新手，可能需要額外的背景知識
  - 解法：參考其他入門資源以補充基礎

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 AI 開發專案 | 非常適合 | 提供了系統性的學習路徑和實作範例，能夠快速上手。 |
| 大型企業的 AI 產品開發 | 普通 | 雖然有豐富的資源，但可能需要更多的定制化學習。 |
| 個人學習 AI 技術 | 非常適合 | 清晰的學習路徑和任務設計，適合自學。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、2 小時整合，得到系統性的學習資源，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個專案本身不需要高權限，且不存取敏感資料。整體依賴鏈的信任程度高，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/datawhalechina--Agent-Learning-Hub");
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
> const me = dv.page("Repos/datawhalechina--Agent-Learning-Hub");
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
| Forks | 271 |
| Open Issues | 1 |
| Issue 解決率 | 67% (2 closed) |
| 最後推送 | 2026-06-02 |
| 建立日期 | 2026-05-17 |
| 官方網站 | [Link](https://datawhalechina.github.io/Agent-Learning-Hub/) |
| Repo 大小 | 18 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/datawhalechina/Agent-Learning-Hub) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jjyaoao](https://github.com/jjyaoao) | 15 |
> | [@CKL25](https://github.com/CKL25) | 1 |
> | [@HeteroCat](https://github.com/HeteroCat) | 1 |
> | [@zeroslope](https://github.com/zeroslope) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，持續更新與維護。
**連結**：[文件](https://datawhalechina.github.io/Agent-Learning-Hub/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-17 ~ 2026-06-02）
> **活躍天數** 6 天 · **最新 commit** Merge pull request #9 from zeroslope/fix-a2a-protocol-link

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/datawhalechina/Agent-Learning-Hub/issues/10) | Correction on DeerFlow project status | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Agent Learning Hub
> 
> A curated AI Agent learning roadmap for people who want to build useful, reliable agents instead of collecting random links.
> 
> 这个仓库只维护一个核心展示面：README。目标是把社区里优秀分享、官方博客、论文、开源项目和真实工程经验，整理成一份可以照着执行的 AI Agent 学习 todo list。
> 
> 
> ## How To Use
> 
> - 如果你是新手：按「Learning Todo List」从上到下做，每完成一项就打勾。
> - 如果你已经会 LLM 应用：从 Stage 2 或 Stage 3 开始，重点补 Agent loop、工具调用、评测和工程化。
> - 如果你想做项目：直接看「Project Ladder」，每一档做一个可运行作品。
> - 如果你只想找资料：看「Curated Resources」，优先读官方文档和经典论文。
> 
> 
> ### Legacy Or Optional Frameworks
> 
> 这些项目仍有参考价值，但不建议作为当前学习主线。
> 
> | Framework | Note |
> | --- | --- |
> | [CrewAI](https://docs.crewai.com/) | 可了解 role/task/crew 抽象，但很多场景已经被更强的 coding agent / harness 形态覆盖。 |
> | [AutoGen](https://microsoft.github.io/autogen/) | 多 agent 对话框架经典项目，适合了解历史和论文，不必重押。 |
> | [LangChain Agents](https://docs.langchain.com/) | 生态仍重要，但建议重点转向 LangGraph 和具体工程模式。 |
> 
> 
> ## Maintainer
> 
> Curated by [陈思州](https://github.com/jjyaoao) (Datawhale 成员) 
> 
> 
> ## What To Learn Now
> 
> Agent 领域变化很快。当前更值得投入的不是老式“角色扮演多 agent 框架”，而是这些更贴近真实生产力的方向：
> 
> | Priority | Learn | Why |
> | --- | --- | --- |
> | 1 | Claude Code / Codex-style coding agents | 真实代码库、shell、文件编辑、测试、权限、上下文压缩，是最好的 agent 工程样本。 |
> | 2 | Agent harness engineering | agent 的能力很大一部分来自 harness：工具协议、权限、状态、反馈、回放、CI、评测。 |
> | 3 | OpenClaw / Hermes-style personal agents | 长运行、本地优先、跨应用、记忆、skills、消息入口，更像“个人操作系统”。 |
> | 4 | Skills / MCP / A2A / ACP | skills 负责能力复用，MCP 连接工具，A2A 连接 agent，ACP 连接宿主应用。 |
> | 5 | Evaluation and safety | 没有 eval、trace、权限边界的 agent 只能算 demo。 |
> 
> 不建议把精力重押在已经泛化成模板的老式 crew/role-play 框架上。它们可以了解，但不应成为主线。
> 
> 
> ## Learning Todo List
> 
> 
> ### Stage 0: Understand What An Agent Is
> 
> - [ ] 区分 chatbot、workflow、agent、multi-agent。
> - [ ] 理解 agent 的基本循环：observe -> think -> act -> observe。
> - [ ] 明白什么时候不该用 agent：任务可预测、流程稳定、普通脚本能解决时，agent 反而增加不确定性。
> - [ ] 读完 [Anthropic: Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)。
> - [ ] 读完 [OpenAI: A practical guide to building agents](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/)。
> 
> 产出：写一页短笔记，回答「我的场景为什么需要 agent，而不是普通 workflow？」
> 
> 
> ### Stage 1: Build A Minimal Agent Loop
> 
> - [ ] 会用一个 LLM API 完成普通对话。
> - [ ] 会让模型输出结构化 JSON。
> - [ ] 会定义一个工具函数，例如 search、calculator、read_file。
> - [ ] 会解析模型的 tool call / function call。
> - [ ] 会执行工具，并把工具结果喂回模型。
> - [ ] 会给 agent loop 加最大步数、超时和错误处理。
> 
> 推荐阅读：
> 
> - [OpenAI Function Calling](https://platform.openai.com/docs/guides/function-calling)
> - [Gemini API Function Calling](https://ai.google.dev/gemini-api/docs/function-calling)
> - [Claude Tool Use](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/overview)
> 
> 产出：一个 50-150 行的最小 agent，可以选择工具、执行工具、返回最终答案。
> 
> 
> ### Stage 2: Learn Tool Use, RAG, And Memory
> 
> - [ ] 会做检索增强生成：chunk、embed、retrieve、answer with citations。
> - [ ] 会把搜索、数据库、文件、浏览器、代码执行接成工具。
> - [ ] 会区分短期上下文、会话记忆、长期记忆。
> - [ ] 会处理工具失败、空结果、重复调用、幻觉引用。
> - [ ] 会让 agent 在回答里给出来源或证据。
> 
> 推荐阅读：
> 
> - [LlamaIndex Agents](https://docs.llamaindex.ai/en/stable/use_cases/agents/)
> - [LangChain Docs](https://docs.langchain.com/)
> - [Gemini API Code Execution](https://ai.google.dev/gemini-api/docs/code-execution)
> - [Model Context Protocol](https://modelcontextprotocol.io/)
> 
> 开源项目参考：
> 
> | Project | Why It Fits Stage 2 |
> | --- | --- |
> | [GPT Researcher](https://github.com/assafelovic/gpt-researcher) | 最接近“资料研究助手”的成品：搜索、抓取、筛选、引用、生成长报告。 |
> | [Open Deep Research](https://github.com/langchain-ai/open_deep_research) | LangGraph 写的 deep research 示例，适合学多轮搜索、状态管理和引用输出。 |
> | [STORM](https://github.com/stanford-oval/storm) | Stanford OVAL 的研究写作系统，适合学 outline、question asking、多视角资料综合。 |
> | [Khoj](https://github.com/khoj-ai/khoj) | 个人 second brain，适合学本地文档、网页、语义搜索和长期记忆。 |
> | [Onyx](https://github.com/onyx-dot-app/onyx) | 企业级 RAG/search assistant，适合学 connectors、hybrid search、权限和生产化。 |
> | [AnythingLLM](https://github.com/Mintplex-Labs/anything-llm) | 本地 RAG + agents 产品，适合初学者快速理解完整应用形态。 |
> | [RAGFlow](https://github.com/infiniflow/ragflow) | 文档理解型 RAG 引擎，适合学 ingestion、chunking、retrieval、grounded answer。 |
> | [mem0](https://github.com/mem0ai/mem0) | 记忆层组件，适合学如何给 agent 加长期 memory。 |
> | [Letta](https://github.com/letta-ai/letta) | 面向 stateful agents 的 memory/context 平台，适合学上下文管理。 |
> 
> 产出：一个资料研究助手，输入主题后自动搜索、筛选、总结并输出引用链接。
> 
> 
> ### Stage 3: Study One Modern Agent Harness
> 
> 先选一个现代 agent 系统学深。这里的重点不是“框架 API 怎么调”，而是它如何组织工具、上下文、权限、状态、日志、子任务和反馈。
> 
> | System | Best For | Learn This If You Want To |
> | --- | --- | --- |
> | [Claude Code Docs](https://code.claude.com/docs/en/overview) | Coding agent product | 学真实 coding agent 的 CLI、工具、权限、hooks、subagents、MCP。 |
> | [learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | From-scratch agent harness | 从 0 到 1 复刻 Claude Code-like harness。 |
> | [claw0](https://github.com/shareAI-lab/claw0) | From-scratch OpenClaw gateway | 从 agent loop 一路构建 session、channel、gateway、memory、heartbeat、delivery、resilience、concurrency。 |
> | [hello-agents](https://github.com/datawhalechina/hello-agents) | Chinese agent tutorial | 从零开始构建智能体，适合系统补 Agent 原理与实践。 |
> | [OpenClaw](https://github.com/openclaw/openclaw) | Local-first personal agent | 学本地长运行 agent、skills、消息入口、系统工具和安全边界。 |
> | [Hermes Agent](https://github.com/NousResearch/hermes-agent) | Self-hosted growing agent | 学长期记忆、skills、toolsets、多平台消息网关和迁移能力。 |
> | [CyberClaw](https://github.com/ttguy0707/CyberClaw) | Transparent agent architecture | 学全行为审计、两段式安全调用、双水位记忆和心跳任务。 |
> | [LangGraph](https://langchain-ai.github.io/langgraph/) | Stateful graph orchestration | 学状态图、可恢复执行和可控编排。 |
> 
> - [ ] 读懂一个 agent harness 的目录结构。
> - [ ] 找出它的 agent loop、tool registry、permission gate、session store、context compaction。
> - [ ] 跑通它的最小示例，并加一个你自己的工具。
> - [ ] 观察一次完整 trace，解释每一步为什么发生。
> - [ ] 把同一个任务分别用「裸 agent loop」和「harness」实现，对比差异。
> 
> 产出：一个可调试的 agent harness demo，包含 README、运行步骤、示例输入输出和失败记录。
> 
> 
> ### Stage 4: Multi-Agent Is Coordination, Not Magic
> 
> - [ ] 理解 planner / executor / reviewer / critic / router 等常见角色。
> - [ ] 学会用 supervisor 或 graph 管理多 agent，而不是让 agent 随便聊天。
> - [ ] 会定义每个 agent 的职责边界、输入输出 schema、停止条件。
> - [ ] 会处理循环、争论、任务漂移、上下文膨胀。
> - [ ] 会判断什么时候单 agent 更好。
> 
> 推荐阅读：
> 
> - [Claude Code Subagents](https://code.claude.com/docs/en/sub-agents)
> - [Claude Code Hooks](https://code.claude.com/docs/en/hooks)
> - [Google Agent Development Kit](https://google.github.io/adk-docs/)
> - [Agent2Agent Protocol](https://a2a-protocol.org/latest/specification/)
> - [Agent Client Protocol](https://agentclientprotocol.com/)
> 
> 产出：一个小型多 agent 系统，例如 research -> write -> review -> revise。
> 
> 
> ### Stage 5: Learn Skills, Protocols, And Capability Packaging
> 
> 现代 agent 的能力不只来自模型和工具，也来自可复用的 skills。一个好的 skill 像一份小型操作手册：告诉 agent 什么时候使用、怎么使用、需要哪些脚本/资源、如何验证结果。
> 
> - [ ] 理解 Skill 和 Tool 的区别：tool 是可调用接口，skill 是可复用流程知识。
> - [ ] 理解 Skill 和 Prompt 的区别：prompt 通常是一次性指令，skill 是可发现、可版本化、可分发的能力包。
> - [ ] 理解 Skill 和 MCP 的区别：MCP 接入外部工具/数据源，skill 告诉 agent 如何完成一类任务。
> - [ ] 阅读 Claude Code Skills 的文件结构和触发机制。
> - [ ] 阅读 OpenClaw Skills 的加载、作用域和安全边界。
> - [ ] 写一个最小 `SKILL.md`，包含 name、description、何时使用、步骤、验收标准。
> - [ ] 给 skill 加一个脚本或模板文件，并说明 agent 什么时候才需要加载它。
> - [ ] 给 skill 写一个 smoke test，验证它是否真的提升任务成功率。
> 
> 推荐阅读：
> 
> - [Claude Code Skills](https://code.claude.com/docs/en/skills)
> - [Claude Agent Skills](https://docs.claude.com/en/docs/agents-and-tools/agent-skills)
> - [Claude Code Agent SDK Skills](https://code.claude.com/docs/en/agent-sdk/skills)
> - [OpenClaw Skills](https://github.com/openclaw/openclaw/blob/main/docs/tools/skills.md)
> - [Model Context Protocol](https://modelcontextprotocol.io/)
> - [Agent2Agent Protocol](https://a2a-protocol.org/latest/specification/)
> - [Agent Client Protocol](https://agentclientprotocol.com/)
> 
> 产出：一个可复用 skill，例如 code-review、research-report、migration-helper、pdf-extraction 或 release-note-writer。
> 
> 
> ### Stage 6: Browser And Computer-Use Agents
> 
> - [ ] 理解 browser agent 和普通 API tool 的区别。
> - [ ] 会用 Playwright 或 browser-use 做网页观察和点击。
> - [ ] 会给浏览器操作加安全限制：不登录敏感账号、不越权、不绕过平台规则。
> - [ ] 会处理页面变化、弹窗、加载失败、元素定位失败。
> - [ ] 会记录截图、DOM、动作日志，方便复盘。
> 
> 推荐阅读：
> 
> - [Claude Computer Use](https://docs.anthropic.com/en/docs/agents-and-tools/tool-use/computer-use-tool)
> - [browser-use](https://github.com/browser-use/browser-use)
> - [WebArena](https://arxiv.org/abs/2307.13854

## 延伸閱讀

相關概念：[[Agent 框架]] · [[工具協議]] · [[記憶管理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[WenyuChiou--awesome-agentic-ai-zh|WenyuChiou/awesome-agentic-ai-zh]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]]

[GitHub](https://github.com/datawhalechina/Agent-Learning-Hub) · [官方網站](https://datawhalechina.github.io/Agent-Learning-Hub/)

## 相關收錄

> [!note]- 直接競品（同子分類：AI Agent 學習）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI Agent 學習" AND file.name != "datawhalechina--Agent-Learning-Hub"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "教學資源" AND file.name != "datawhalechina--Agent-Learning-Hub"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "datawhalechina--Agent-Learning-Hub" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "datawhalechina--Agent-Learning-Hub"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Agent 框架","工具協議","記憶管理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "datawhalechina--Agent-Learning-Hub" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/datawhalechina--Agent-Learning-Hub");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "datawhalechina--Agent-Learning-Hub" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "datawhalechina" AND file.name != "datawhalechina--Agent-Learning-Hub"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/datawhalechina--Agent-Learning-Hub");
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
> const me = dv.page("Repos/datawhalechina--Agent-Learning-Hub");
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
> const me = dv.page("Repos/datawhalechina--Agent-Learning-Hub");
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
> const me = dv.page("Repos/datawhalechina--Agent-Learning-Hub");
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
> const me = dv.page("Repos/datawhalechina--Agent-Learning-Hub");
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

> **2026-05-23** — 首次收錄
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

- [[2026-05-24|2026-05-24]] — 再次上榜，1.2k stars
- [[2026-05-23|2026-05-23]] — 首次收錄，1.1k stars
