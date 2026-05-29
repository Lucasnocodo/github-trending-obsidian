---
repo: datawhalechina/Agent-Learning-Hub
url: https://github.com/datawhalechina/Agent-Learning-Hub
owner: datawhalechina
owner_type: Organization
language: HTML
license: MIT
description: "AI Agent 学习路线与资料库收集"
homepage: "https://datawhalechina.github.io/Agent-Learning-Hub/"
stars: 1859
stars_per_day: 169
forks: 195
open_issues: 0
created: 2026-05-17
pushed_at: 2026-05-25
first_seen: 2026-05-23
week: "2026-W21"
month: "2026-05"
category: "教學資源"
subcategory: "AI Agent 開發"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-23
use_case: "提供一個系統化的 AI Agent 學習路線圖，幫助開發者建立可靠的代理系統。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-27"
contributor_count: 3
engagement: "medium"
issue_close_rate: 100
repo_size_kb: 95
readme_length: 9682
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-23"
star_history: "2026-05-23:1092,2026-05-24:1217,2026-05-24:1219,2026-05-27:1646,2026-05-29:1859"
tags:
  - github
  - "category/教學資源"
  - "lang/html"
  - org
  - easy_install
aliases:
  - "Agent-Learning-Hub"
  - "datawhalechina/Agent-Learning-Hub"
  - "提供一個系統化的 AI Agent 學習路線圖，幫助開發者建立可靠的代理系統。"
---

# Agent-Learning-Hub

**1.9k** stars · **169** stars/天 · 建立 11 天前 · HTML · MIT

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
> 提供一個系統化的 AI Agent 學習路線圖，幫助開發者建立可靠的代理系統。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (169 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 希望系統性學習 AI Agent 開發的開發者，尤其是對於實際應用有需求的人。
> **一句話重點** 這個專案提供的學習路線圖讓開發者能夠更有效率地掌握 AI Agent 的開發技能。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/datawhalechina--Agent-Learning-Hub");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI Agent 開發" && p.file.name !== "datawhalechina--Agent-Learning-Hub" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI Agent 開發 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~10h · **綁定風險** low
> **結論** 花 10 小時學習，2 小時整合，得到系統化的學習路徑，值得一試。

> [!abstract] 核心創新
> 提供系統化的 AI Agent 學習路線圖，幫助開發者有效掌握代理技術。

## 專案簡介

這個專案的核心是提供一個清晰的 AI Agent 學習路線圖，讓使用者能夠從基礎到進階逐步掌握建立代理的技巧。使用者可以從「Learning Todo List」開始，依照階段性任務進行學習，涵蓋從理解代理的基本概念到實作完整的代理系統。具體來說，使用者需要完成一系列的任務，例如理解 agent 的基本循環（observe → think → act），並實作最小的 agent loop，這樣的設計讓學習過程更具體化和可操作性。這個專案的賣點在於其結構化的學習路徑，避免了隨意收集資料的低效。

技術上，這個專案並不依賴於特定的框架，而是提供了多種學習資源和參考項目，讓使用者能夠根據自己的需求選擇合適的工具。與其他學習資源相比，這個專案更注重實踐和應用，強調在真實場景中如何有效運用代理技術。使用者在學習過程中，能夠接觸到多個開源項目，這些項目提供了不同的實作範例和最佳實踐，從而提升學習效率。整體而言，這是一個適合希望深入了解 AI Agent 開發的開發者的資源，尤其是對於那些希望在實際項目中應用代理技術的人來說，這個專案提供了清晰的指導和豐富的資料。

**技術棧**：`HTML`

## 重點功能

- 學習 Todo List — 包含分階段的任務，從基礎到進階，幫助使用者逐步掌握代理技術。
- 實作範例 — 提供多個開源項目作為參考，讓使用者能夠學習最佳實踐。
- 清晰的學習路徑 — 避免隨意收集資料，提供系統化的學習框架。
- 社群支持 — 由活躍的開發者社群維護，問題解決率高，使用者可獲得及時的幫助。
- 資源整理 — 整合官方文檔、經典論文和實際工程經驗，提供全面的學習資源。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/datawhalechina/Agent-Learning-Hub.git
```
2. 進入專案資料夾
```bash
cd Agent-Learning-Hub
```
3. 查看學習路線
```bash
cat README.md
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天就累積 1859 stars（169/天），forks 195（10.5%），這顯示出穩定的增長趨勢。這個專案的主要貢獻者來自 Datawhale，這是一個專注於 AI 和數據科學的社群，過去有多個成功的開源專案。該專案解決了學習 AI Agent 時資料分散、缺乏系統性指導的痛點，提供了一個結構化的學習路線圖，讓開發者能夠更有效率地學習。社群的活躍度和高效的問題解決率（100%）也顯示出其良好的維護狀態，這對於使用者來說是一個重要的信號。

## 適合誰使用

**目標受眾**：希望系統性學習 AI Agent 開發的開發者，尤其是對於實際應用有需求的人。

> [!example] 使用場景
> - 新手開發者用它來系統性學習 AI Agent 開發，因為它提供了清晰的學習路線和具體的任務指導。
> - 有經驗的工程師用它來補充在 Agent loop 和工具調用方面的知識，因為它涵蓋了多個進階主題和實作範例。
> - 項目經理用它來規劃團隊的 AI Agent 開發進度，因為它提供了分階段的學習目標和可執行的項目建議。

## 架構分析

這個專案的架構主要是基於一個清晰的 README 文件，作為學習的核心展示面。所有的學習資源和任務都集中在這個文件中，讓使用者可以方便地找到所需的資訊。這種設計的好處是簡化了使用者的學習過程，避免了資料的分散。

資料流主要是從使用者的學習需求出發，通過逐步的任務引導他們進入更深層的代理技術。這種方式的代價在於，使用者需要主動探索和實作，才能真正掌握知識。整體而言，這種結構化的學習方式有助於提升學習效率，但也要求使用者具備一定的自我驅動能力。

## 技術深入分析

這個專案的核心技術機制在於其結構化的學習路徑，讓使用者能夠從基礎知識開始，逐步深入到實際的代理系統開發。使用者需要透過完成特定的任務來掌握代理的基本概念和技術，這樣的設計使得學習過程更具體化。效能和規模特性方面，這個專案並不涉及具體的技術實作，因此在資源需求上相對輕量。設計取捨方面，選擇以 README 作為核心展示面，雖然簡化了使用者的學習過程，但也要求使用者具備一定的自我驅動能力。技術風險方面，由於缺乏具體的實作範例，使用者在學習過程中可能會遇到困難，特別是對於新手來說。整合分析方面，這個專案的學習資源可以與多種開源項目結合，讓使用者能夠在實際應用中進行探索和實作，這對於提升學習效果是有幫助的。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的學習路線和任務；安裝過程簡單，使用者只需克隆專案即可開始；缺乏具體的 getting started guide，但整體結構已經足夠引導新手；文件目前僅提供英文版本，對於非英語使用者可能有一定挑戰。

## 優缺點分析

> [!success] 優點
> - 提供系統化的學習路徑，適合新手和有經驗的開發者。
> - 整合多種學習資源，讓使用者能夠接觸到最新的技術和最佳實踐。
> - 社群活躍，問題解決率高，使用者可以獲得及時的支持。

> [!danger] 缺點
> - 缺乏具體的程式碼實作範例，對於需要即時解決方案的開發者不太友好。
> - 需要使用者具備一定的 AI 和程式開發基礎，否則學習效果有限。
> - 學習過程較為自主，對於習慣於指導的使用者來說可能有挑戰。

> [!warning] 注意事項
> - 僅提供學習資源，沒有具體的程式碼實作範例。
> - 不適合尋找即時解決方案的開發者，因為主要是學習指導。
> - 需要使用者具備一定的 AI 和程式開發基礎，才能有效利用這些資源。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI Agent 開發資源，但更專注於具體的框架實作，而非整體學習路線。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個專案提供了多個過去的 AI Agent 案例，但缺乏系統化的學習指導。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於特定的代理技術，但不如本專案全面，缺少學習路徑的結構。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI Agent 開發資源，但更專注於具體的框架實作，而非整體學習路線。 | 如果你的團隊需要針對特定框架進行深入學習，這個專案會更合適。 | medium，因為需要轉換學習重點和方法。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個專案提供了多個過去的 AI Agent 案例，但缺乏系統化的學習指導。 | 如果你需要參考過去的案例來啟發新的想法，這個專案會有幫助。 | low，因為可以直接參考其案例。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於特定的代理技術，但不如本專案全面，缺少學習路徑的結構。 | 如果你已經熟悉代理技術，並希望深入某一特定領域，這個專案會更適合。 | medium，因為需要重新調整學習策略。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Agent-Learning-Hub** | **agent-sprite-forge** | **boneyard** | **codex-shim** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的 AI Agent 開發資源，但更專注於具體的框架實作，而非整體學習路線。 | 這個專案提供了多個過去的 AI Agent 案例，但缺乏系統化的學習指導。 | 專注於特定的代理技術，但不如本專案全面，缺少學習路徑的結構。 |
> | 遷移成本 | - | medium，因為需要轉換學習重點和方法。 | low，因為可以直接參考其案例。 | medium，因為需要重新調整學習策略。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要針對特定框架進行深入學習，這個專案會更合適。 | 如果你需要參考過去的案例來啟發新的想法，這個專案會有幫助。 | 如果你已經熟悉代理技術，並希望深入某一特定領域，這個專案會更 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人學習和小型專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 學習路徑中某些任務可能對新手來說過於抽象，難以理解
  - 解法：建議尋找相關的實作範例作為補充學習
- **[HIGH]** 缺乏具體的程式碼範例，可能會讓新手感到困惑
  - 解法：可參考其他開源專案的實作來填補空白
- [MEDIUM] 部分資源鏈接可能會過時，需要使用者自行查找更新
  - 解法：定期檢查官方文檔和社群更新

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 AI Agent 開發專案 | 非常適合 | 提供了系統化的學習路徑，能夠幫助團隊快速上手。 |
| 大型企業的 AI 代理系統開發 | 普通 | 雖然有豐富的資源，但可能需要更多的定制化支持。 |
| 個人學習 AI 技術 | 非常適合 | 結構化的學習路徑能夠幫助個人有效掌握知識。 |
| 尋找即時解決方案的開發者 | 不適合 | 缺乏具體的實作範例，對於需要快速解決問題的開發者不友好。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 10 小時學習，2 小時整合，得到系統化的學習路徑，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，主要是學習資源，不存取敏感資料。依賴鏈的信任程度良好，無已知的供應鏈風險。

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
| Forks | 195 |
| Open Issues | 0 |
| Issue 解決率 | 100% (1 closed) |
| 最後推送 | 2026-05-25 |
| 建立日期 | 2026-05-17 |
| 官方網站 | [Link](https://datawhalechina.github.io/Agent-Learning-Hub/) |
| Repo 大小 | 95 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/datawhalechina/Agent-Learning-Hub) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jjyaoao](https://github.com/jjyaoao) | 14 |
> | [@CKL25](https://github.com/CKL25) | 1 |
> | [@HeteroCat](https://github.com/HeteroCat) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，問題解決率高，能夠提供及時的支持。
**連結**：[文件](https://datawhalechina.github.io/Agent-Learning-Hub/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-17 ~ 2026-05-25）
> **活躍天數** 4 天 · **最新 commit** Merge pull request #5 from HeteroCat/main

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
> - [Agent2Agent Protocol](https://google-a2a.github.io/A2A/specification/)
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
> - [Agent2Agent Protocol](https://google-a2a.github.io/A2A/specification/)
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
> - [WebArena](https://arxiv.org/abs/2307.138

## 延伸閱讀

相關概念：[[Agent 框架]] · [[技能包]] · [[工具調用]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[WenyuChiou--awesome-agentic-ai-zh|WenyuChiou/awesome-agentic-ai-zh]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]]

[GitHub](https://github.com/datawhalechina/Agent-Learning-Hub) · [官方網站](https://datawhalechina.github.io/Agent-Learning-Hub/)

## 相關收錄

> [!note]- 直接競品（同子分類：AI Agent 開發）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI Agent 開發" AND file.name != "datawhalechina--Agent-Learning-Hub"
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
> const concepts = ["Agent 框架","技能包","工具調用"];
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
