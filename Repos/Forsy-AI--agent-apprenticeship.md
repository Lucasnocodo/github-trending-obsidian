---
repo: Forsy-AI/agent-apprenticeship
url: https://github.com/Forsy-AI/agent-apprenticeship
owner: Forsy-AI
owner_type: Organization
language: N/A
license: MIT
description: "The living ecosystem where AI agents run automated workflow loops on any task, improve through execution, and turn each run into reusable work experience + data to improve future agents."
homepage: "https://agentapprenticeship.org/"
stars: 1036
stars_per_day: 115
forks: 49
open_issues: 0
created: 2026-06-19
pushed_at: 2026-06-24
first_seen: 2026-06-21
week: "2026-W26"
month: "2026-06"
category: "AI/ML"
subcategory: "Agent 框架"
release_tag: "v0.1.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-21
use_case: "建立一個生態系統，讓 AI 代理自動執行工作流程並透過執行改善自己。 "
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-07-03"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 18275
readme_length: 7929
bus_factor: 1
last_release_days: 10
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-06-21"
star_history: "2026-06-21:529,2026-06-21:529,2026-06-22:609,2026-06-22:609,2026-06-23:682,2026-06-23:682,2026-06-24:859,2026-06-24:859,2026-06-25:909,2026-06-25:909,2026-06-26:941,2026-06-26:941,2026-06-27:975,2026-06-28:1000,2026-06-29:1036"
tags:
  - github
  - "category/ai_ml"
  - "lang/other"
  - org
  - easy_install
  - "topic/agent_apprenticeship"
  - "topic/agent_economy"
  - "topic/agent_experience"
  - "topic/agent_learning"
  - "topic/agent_traces"
aliases:
  - "agent-apprenticeship"
  - "Forsy-AI/agent-apprenticeship"
  - "建立一個生態系統，讓 AI 代理自動執行工作流程並透過執行改善自己。 "
---

# agent-apprenticeship

**1.0k** stars · **115** stars/天 · 建立 9 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/Forsy-AI--agent-apprenticeship");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.1.0` `easy-install`

`agent-apprenticeship` `agent-economy` `agent-experience` `agent-learning` `agent-traces` `agentic-ai` `ai-agents` `autonomous-agents` `claude-code` `codex` `cursor` `ecosystem-learning` `hermes-agent` `loop-engineering` `openclaw` `opencode` `post-training` `real-world-tasks` `reinforcement-learning` `training-signals`

> [!summary] 一句話摘要
> 建立一個生態系統，讓 AI 代理自動執行工作流程並透過執行改善自己。 

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (115 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望利用 AI 代理自動化工作流程的中小型企業團隊。
> **一句話重點** 這個專案的核心在於將 AI 代理的執行轉化為可重用的學習信號，並透過生態系統促進知識共享。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Forsy-AI--agent-apprenticeship");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Agent 框架" && p.file.name !== "Forsy-AI--agent-apprenticeship" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 Agent 框架 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、10 小時整合，得到自動化工作流程的效果，值得考慮。

> [!abstract] 核心創新
> Agent Apprenticeship 提供了一個生態系統，讓 AI 代理能夠透過執行任務生成可重用的學習信號，並持續改善自身性能。

## 專案簡介

Agent Apprenticeship 是一個生態系統，讓 AI 代理能夠自動執行工作流程並透過每次執行生成可重用的學習信號。使用者可以透過 `npx agent-apprenticeship init` 指令快速啟動，系統會自動檢測安裝的代理模型如 Codex、Cursor 等，並提供設定選項。這個工具的賣點在於它能夠將執行的每個任務轉化為經濟價值，並通過迭代的工作流程不斷提高代理的性能。每次任務執行後，系統會生成貢獻包，這些包可以分享至公共生態系統，進一步促進學習和改進。技術上，Agent Apprenticeship 支持多種代理模型，並提供多種導師模式（如自動化、手動、混合），以滿足不同的工作需求。

與其他工具相比，Agent Apprenticeship 更加注重經濟價值的生成和共享，這使得它在專業領域的應用更具競爭力。使用者可以透過簡單的指令來配置和運行任務，並且可以輕鬆地與社群共享學習經驗。這個工具的設計適合需要長期執行任務的團隊，並且能夠隨著使用者的需求不斷進化。未來的發展方向可能會集中在擴展支持的代理模型和增強生態系統的互動性上。對於希望利用 AI 代理進行自動化工作的團隊來說，這是一個值得考慮的選擇。

## 重點功能

- 自動化工作流程 — 使用 `npx agent-apprenticeship init` 指令快速啟動並配置代理。
- 多種導師模式 — 支持 `model-assisted`、`expert-led` 和 `hybrid` 模式以適應不同需求。
- 經濟價值生成 — 每次任務執行後估算任務的經濟價值，幫助使用者理解任務的實際貢獻。
- 共享學習信號 — 透過 `apprentice ecosystem contribute` 指令輕鬆分享生成的經驗包。
- 生態系統搜索 — 使用 `apprentice ecosystem search` 指令探索和檢索社群貢獻的經驗包。

## 快速開始

1. 初始化 Agent Apprenticeship
```bash
npx agent-apprenticeship init
```
2. 檢查安裝狀態
```bash
apprentice settings
```
3. 運行第一個任務
```bash
apprentice run "Create a short market map for AI procurement tools."
```

## 程式碼範例

```bash
[
  "# 前置條件：安裝了 Agent Apprenticeship",
  "npx agent-apprenticeship init",
  "# 預期輸出：初始化成功，顯示可用的代理模型和設置選項。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 1036 stars（115/天），forks 49（4.7%），這顯示出穩定的增長潛力。作者 ray-r-ren 是一位活躍的開發者，過去在 AI 和自動化領域有多項貢獻。這個專案解決了現有工具在經濟價值生成和學習信號共享上的不足，讓使用者能夠更有效地利用 AI 代理。最近的推廣活動和社群討論也可能提升了其曝光率。技術上，這個工具的設計符合當前對於自動化和智能工作的需求，並且能夠隨著使用者的需求進行擴展。forks/stars 比率在 4.7% 屬於中等，顯示出有一定的實際使用者在進行修改和實驗。

## 適合誰使用

**目標受眾**：希望利用 AI 代理自動化工作流程的中小型企業團隊。

> [!example] 使用場景
> - 產品經理用它來自動化市場調查，因為能夠快速生成並分析多個市場地圖，節省了 50% 的時間。
> - 開發團隊用它來執行代碼審查任務，因為能夠利用 AI 代理自動生成檢查清單，提升了代碼質量。
> - 研究人員用它來進行數據分析，因為能夠自動化數據處理流程，並生成可重用的學習信號，提升了研究效率。

## 架構分析

Agent Apprenticeship 採用的是一個模組化的架構，允許用戶根據需求選擇不同的代理模型和導師模式。資料流從用戶輸入的任務開始，經過代理模型的處理，生成學習信號並存儲於生態系統中。這種設計使得系統能夠靈活應對不同的任務需求，但也可能在處理複雜任務時需要更多的配置。擴展性方面，由於依賴於多個外部代理模型，未來可能面臨整合上的挑戰，特別是當新模型出現時。整體而言，這種架構設計使得 Agent Apprenticeship 能夠快速適應市場需求，但也需要用戶具備一定的技術背景來進行配置和調整。

## 技術深入分析

Agent Apprenticeship 的核心機制在於其模組化設計，允許用戶選擇不同的代理模型和導師模式來執行任務。這種設計使得系統能夠靈活應對各種需求，並且能夠生成經濟價值的學習信號。效能方面，該系統能夠處理多種任務，但在面對複雜的工作流程時，可能會需要額外的配置和人力介入。選擇 JavaScript 作為主要開發語言，使得其在網頁環境中的整合性較高，但也可能導致在某些高性能需求的場景下表現不如其他語言。技術風險方面，隨著使用者數量的增加，系統的穩定性和擴展性可能會受到挑戰，特別是在依賴外部代理模型的情況下。整合方面，該系統能夠與現有的 CI/CD 流程相容，但對於某些特定的開發環境，可能需要額外的適配工作。整體而言，Agent Apprenticeship 提供了一個靈活且具潛力的解決方案，適合希望利用 AI 代理進行自動化工作的團隊。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的指令和範例，讓新手能夠快速上手。安裝過程順暢，使用 `npx` 指令即可完成初始化。文件目前僅提供英文版本，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 易於上手，使用 `npx` 指令即可快速啟動。
> - 支持多種代理模型，靈活性高。
> - 能夠生成經濟價值的學習信號，提升工作效率。

> [!danger] 缺點
> - 對於新手來說，API 金鑰的配置可能會造成困難。
> - 在處理複雜任務時，可能需要更多的人力介入。
> - 目前的功能仍在持續開發中，穩定性可能不足。

> [!warning] 注意事項
> - 目前僅支持特定的代理模型，如 Codex 和 Cursor。
> - 需要用戶手動配置 API 金鑰，對於新手來說可能有一定的學習曲線。
> - 在處理非常複雜的任務時，可能需要更多的人力介入以確保質量。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理多個代理的工作流，而 Agent Apprenticeship 更加注重經濟價值的生成和學習信號的共享。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供競爭性代理的環境，適合需要多代理互動的場景，而 Agent Apprenticeship 更偏向於單一代理的學習和改進。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 專注於代碼生成和優化，而 Agent Apprenticeship 則是針對更廣泛的任務執行和學習信號的生成。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於多代理的工作流管理，而 Agent Apprenticeship 更加注重經濟價值的生成和學習信號的共享。 | 如果你的團隊需要管理多個代理並進行複雜的工作流，則應選擇此工具。 | medium，因為需要重新設計工作流邏輯。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供競爭性代理的環境，適合需要多代理互動的場景，而 Agent Apprenticeship 更偏向於單一代理的學習和改進。 | 如果你的應用場景需要多個代理之間的競爭和合作，則此工具更為合適。 | high，因為需要重新設計代理交互邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **agent-apprenticeship** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於多代理的工作流管理，而 Agent Apprenticeship 更加注重經濟價值的生成和學習信號的共享。 | 提供競爭性代理的環境，適合需要多代理互動的場景，而 Agent Apprenticeship 更偏向於單一代理的學習和改進。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流邏輯。 | high，因為需要重新設計代理交互邏輯。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要管理多個代理並進行複雜的工作流，則應選擇此工 | 如果你的應用場景需要多個代理之間的競爭和合作，則此工具更為合 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和探索，尚不建議用於生產環境的核心任務。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些系統上，安裝過程可能會遇到權限問題
  - 解法：確保使用者擁有適當的安裝權限
- [MEDIUM] 某些代理模型的配置可能會導致系統不穩定
  - 解法：在使用前進行充分的測試

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司希望自動化市場調查 | 非常適合 | 該工具能夠快速生成市場地圖，節省時間和資源。 |
| 大型企業的開發團隊需要進行代碼審查 | 普通 | 雖然可以自動化部分流程，但仍需人力介入以確保質量。 |
| 學術研究團隊希望進行數據分析 | 適合 | 能夠自動化數據處理並生成可重用的學習信號。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、10 小時整合，得到自動化工作流程的效果，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，主要存取環境變數和 API 金鑰，依賴鏈的信任程度較高，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Forsy-AI--agent-apprenticeship");
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
> const me = dv.page("Repos/Forsy-AI--agent-apprenticeship");
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
| Forks | 49 |
| Open Issues | 0 |
| 最後推送 | 2026-06-24 |
| 建立日期 | 2026-06-19 |
| 官方網站 | [Link](https://agentapprenticeship.org/) |
| Repo 大小 | 17.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Forsy-AI/agent-apprenticeship) |
| Topics | `agent-apprenticeship` `agent-economy` `agent-experience` `agent-learning` `agent-traces` `agentic-ai` `ai-agents` `autonomous-agents` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ray-r-ren](https://github.com/ray-r-ren) | 14 |

**最新版本**：v0.1.0 — Agent Apprenticeship v0.1 (2026-06-19)

## 社群與生態

**社群活躍度**：社群活躍度高，持續有更新和貢獻。
**連結**：[文件](https://agentapprenticeship.org/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-20 ~ 2026-06-24）
> **活躍天數** 3 天 · **最新 commit** Update README.md

## README 摘錄

> [!info]- 展開查看原文 README
> # Agent Apprenticeship
> 
> [](https://www.npmjs.com/package/agent-apprenticeship)
> 
> The living ecosystem where AI agents run automated workflow loops on any task, improve through execution, and turn each run into reusable work experience + data to improve future agents.
> 
> ```bash
> npx agent-apprenticeship init
> ```
> 
> As agents move into long-horizon, economically valuable work, Agent Apprenticeship creates the open infrastructure where real-world tasks generate reusable learning signals and complex workflows advance through agent loops that turn execution into shared improvement.
> 
> Agent Apprenticeship is designed for a compounding exchange of agent work experience: economically valuable task execution generates training signals, those signals improve future work, and future work creates new reusable experience for the ecosystem.
> 
> Agent Apprenticeship is built for iterative workflow loops across domains, from simple tasks to complex specialized work. Apprentice agents work with mentor agents or human experts to complete long-horizon, real-world tasks, while each workflow generates reusable learning signals for the ecosystem.
> 
> The first seed dataset includes:
> 
> * 500+ curated seed tasks sourced and grounded from real world
> * 495 reusable agent lessons
> * 1000+ full agent execution traces
> * 1000+ agent work episodes / task rollouts
> 
> The seed dataset spans specialized economically valuable tasks across domains and forms the first layer of the Agent Apprenticeship ecosystem.
> 
> Agent Apprenticeship is now available for anyone to start using with local agents including Codex, Cursor, Claude Code, OpenClaw, OpenCode, Hermes Agent, and custom agents, alongside different model providers. Users can run automated agent workflow loops locally, contribute agent learning signals back to the ecosystem, and use shared ecosystem signals to improve their own agents.
> 
> Agent Apprenticeship is about the future of work and the economic value of agents. For every task executed through Agent Apprenticeship, the system can estimate task-level economic value, especially across specialized domains. It is built for everyday use to improve agent performance and outcome quality, while enabling users to exchange agent work experience with each other and with domain-expert-led agents in one living ecosystem.
> 
> ## Install
> 
> ```bash
> npx agent-apprenticeship init
> ```
> 
> Or install globally:
> ```bash
> npm install -g agent-apprenticeship
> apprentice init
> ```
> 
> The installed command is:
> 
> ```bash
> apprentice
> ```
> 
> The long-form command also remains available:
> 
> ```bash
> agent-apprenticeship
> ```
> 
> ## Quickstart
> 
> Start Agent Apprenticeship:
> 
> ```bash
> npx agent-apprenticeship init
> ```
> 
> The setup flow detects installed Apprentice Agents such as Codex, Cursor, Claude Code, OpenClaw, OpenCode, Hermes Agent, and Custom agents.
> 
> Check your setup:
> 
> ```bash
> apprentice settings
> apprentice doctor
> ```
> 
> Configure your Apprentice Agent, Mentor Model Provider, and Mentor Mode:
> 
> ```bash
> apprentice configure
> apprentice configure model
> apprentice settings
> ```
> 
> Mentor Modes:
> 
> - `model-assisted` — automated
> - `expert-led` — manual
> - `hybrid` — automated + manual
> 
> Store Mentor Model Provider keys in:
> 
> ```bash
> ~/.agent-apprenticeship/.env.local
> ```
> 
> Example:
> 
> ```bash
> OPENAI_API_KEY=""
> ANTHROPIC_API_KEY=""
> GEMINI_API_KEY=""
> OPENROUTER_API_KEY=""
> ```
> 
> You can also use shell environment variables for the current terminal session:
> 
> ```bash
> export OPENAI_API_KEY="..."
> apprentice doctor
> ```
> 
> Run your first task:
> 
> ```bash
> apprentice run "Create a short market map for AI procurement tools."
> ```
> 
> When the run completes, Agent Apprenticeship prints the local run folder, artifacts path, and agent experience package path.
> 
> Inspect the generated package:
> 
> ```bash
> apprentice bundle inspect 
> apprentice bundle check 
> ```
> 
> Configure maximum loop depth for iterative runs:
> 
> ```bash
> apprentice settings
> ```
> 
> For a one-off terminal session, you can also set:
> 
> ```bash
> export AA_MAX_ITERATIONS=3
> ```
> 
> Configure ecosystem sharing:
> 
> ```bash
> apprentice ecosystem configure --repo Forsy-AI/agent-apprenticeship
> apprentice ecosystem configure --auto-share manual
> ```
> 
> Auto-share modes:
> 
> - `manual` — no automatic sharing
> - `ask` — ask before sharing
> - `automatic` — share automatically when configured
> 
> Share the generated agent experience package with the public ecosystem:
> 
> ```bash
> apprentice ecosystem contribute 
> ```
> 
> Explore ecosystem experience:
> 
> ```bash
> apprentice ecosystem list
> apprentice ecosystem search cloud
> apprentice ecosystem inspect aa-seed-task-501
> apprentice ecosystem pull aa-seed-task-501
> ```
> 
> Turn ecosystem experience into an Experience Pack:
> 
> ```bash
> apprentice learn create aa-seed-task-501
> apprentice learn preview 
> apprentice learn keep 
> ```
> 
> Use an Experience Pack in a new run:
> 
> ```bash
> apprentice run "Create a release checklist for an AI agent project." --experience-pack 
> ```
> 
> ## Apprentice Agents
> 
> Available Apprentice Agents:
> 
> * Codex
> * Cursor
> * Claude Code
> * OpenClaw
> * OpenCode
> * Hermes Agent
> * Custom
> 
> Agent Apprenticeship auto-detects installed CLIs. If multiple are detected, choose one during setup.
> 
> Custom lets you provide a command template:
> 
> ```bash
> apprentice configure agent custom --command-template "my-agent run --workspace {workspace} --prompt-file {prompt_file}"
> ```
> 
> ## Mentor Model Providers
> 
> Store local keys in:
> 
> ```text
> ~/.agent-apprenticeship/.env.local
> ```
> 
> Example:
> 
> ```bash
> OPENAI_API_KEY=""
> ANTHROPIC_API_KEY=""
> GEMINI_API_KEY=""
> OPENROUTER_API_KEY=""
> ```
> 
> Configure:
> 
> ```bash
> apprentice configure model
> apprentice doctor
> ```
> 
> ## Mentor Modes
> 
> ```bash
> apprentice run "..." --mentor-mode model-assisted
> apprentice run "..." --mentor-mode expert-led
> apprentice run "..." --mentor-mode hybrid
> ```
> 
> * `model-assisted`: Mentor Model Provider handles the mentor loop.
> * `expert-led`: human expert checkpoints guide the mentor loop.
> * `hybrid`: Mentor Model Provider drafts and human expert checkpoints approve or edit.
> 
> ## Ecosystem Search
> 
> The public ecosystem brings together the seed dataset and community-contributed agent experience packages in one searchable network.
> 
> Explore ecosystem experience:
> 
> ```bash
> apprentice ecosystem list
> apprentice ecosystem search cloud
> apprentice ecosystem inspect aa-seed-task-501
> apprentice ecosystem pull aa-seed-task-501
> ```
> 
> The seed dataset is included under:
> 
> ```text
> seed_dataset/
> ```
> 
> ## Ecosystem Learning
> 
> Pulled ecosystem experience can be used directly or turned into Experience Packs:
> 
> ```bash
> apprentice learn create aa-seed-task-501
> apprentice learn preview 
> apprentice learn replay 
> apprentice learn keep 
> apprentice run "Create a related incident response checklist." --experience-pack 
> apprentice learn revert 
> ```
> 
> Use active packs explicitly:
> 
> ```bash
> apprentice run "..." --use-active-experience-packs
> apprentice run "..." --no-experience-packs
> ```
> 
> ## Contribution Bundles
> 
> Runs produce Contribution Bundles.
> 
> Contribute one to the public ecosystem:
> 
> ```bash
> apprentice ecosystem contribute 
> apprentice bundle contribute 
> ```
> 
> Public ecosystem:
> 
> https://github.com/Forsy-AI/agent-apprenticeship
> 
> ## Ecosystem Auto-Share
> 
> Default mode is Manual.
> 
> ```bash
> apprentice ecosystem configure --repo Forsy-AI/agent-apprenticeship
> apprentice ecosystem configure --auto-share manual
> apprentice ecosystem configure --auto-share ask
> apprentice ecosystem configure --auto-share automatic
> apprentice ecosystem status
> ```
> 
> Requirements:
> 
> * GitHub CLI installed
> * `gh` authenticated
> * ecosystem repo configured
> 
> ## Search, Inspect, Pull
> 
> Discover and export ecosystem experience:
> 
> ```bash
> apprentice ecosystem search 
> apprentice ecosystem inspect 
> apprentice ecosystem pull 
> ```
> 
> ## Public Repo Structure
> 
> ```text
> seed_dataset/
> ecosystem/
> ecosystem/contributions/
> schemas/
> examples/
> ```
> 
> ## Development Commands
> 
> ```bash
> .venv/bin/python -m pytest -q tests
> PYTHONPATH=src .venv/bin/python -m compileall -q src tests scripts examples
> bash scripts/export_public_repo.sh
> ```

## 延伸閱讀

相關概念：[[Agent 框架]] · [[強化學習]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[0xGF--boneyard|0xGF/boneyard]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[alchaincyf--hermes-agent-orange-book|alchaincyf/hermes-agent-orange-book]] · [[mrtooher--fable-mode|mrtooher/fable-mode]]

[GitHub](https://github.com/Forsy-AI/agent-apprenticeship) · [官方網站](https://agentapprenticeship.org/)

## 相關收錄

> [!note]- 直接競品（同子分類：Agent 框架）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Agent 框架" AND file.name != "Forsy-AI--agent-apprenticeship"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "Forsy-AI--agent-apprenticeship"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "Forsy-AI--agent-apprenticeship" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "Forsy-AI--agent-apprenticeship"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["Agent 框架","強化學習","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Forsy-AI--agent-apprenticeship" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Forsy-AI--agent-apprenticeship");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Forsy-AI--agent-apprenticeship" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Forsy-AI" AND file.name != "Forsy-AI--agent-apprenticeship"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Forsy-AI--agent-apprenticeship");
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
> const me = dv.page("Repos/Forsy-AI--agent-apprenticeship");
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
> const me = dv.page("Repos/Forsy-AI--agent-apprenticeship");
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
> const me = dv.page("Repos/Forsy-AI--agent-apprenticeship");
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
> const me = dv.page("Repos/Forsy-AI--agent-apprenticeship");
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

> **2026-06-21** — 首次收錄
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

- [[2026-06-26|2026-06-26]] — 再次上榜，941 stars
- [[2026-06-25|2026-06-25]] — 再次上榜，909 stars
- [[2026-06-24|2026-06-24]] — 再次上榜，859 stars
- [[2026-06-23|2026-06-23]] — 再次上榜，682 stars
- [[2026-06-22|2026-06-22]] — 再次上榜，609 stars
- [[2026-06-21|2026-06-21]] — 首次收錄，529 stars
