---
repo: Forsy-AI/agent-apprenticeship
url: https://github.com/Forsy-AI/agent-apprenticeship
owner: Forsy-AI
owner_type: Organization
language: N/A
license: MIT
description: "The living ecosystem where AI agents learn from real-world work through iterative workflow loops, reusable experience, and collective training signal exchange."
homepage: "https://agentapprenticeship.org/"
stars: 682
stars_per_day: 227
forks: 44
open_issues: 0
created: 2026-06-19
pushed_at: 2026-06-20
first_seen: 2026-06-21
week: "2026-W26"
month: "2026-06"
category: "AI/ML"
subcategory: "agent-learning"
release_tag: "v0.1.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-21
use_case: "建立一個生態系統，讓 AI 代理透過真實工作學習並不斷迭代。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-26"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 17496
readme_length: 7902
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-21"
star_history: "2026-06-21:529,2026-06-21:529,2026-06-22:609,2026-06-22:609,2026-06-23:682"
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
  - "建立一個生態系統，讓 AI 代理透過真實工作學習並不斷迭代。"
---

# agent-apprenticeship

**609** stars · **305** stars/天 · 建立 2 天前 · N/A · MIT

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
> 建立一個生態系統，讓 AI 代理透過真實工作學習並不斷迭代。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (305 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在 AI 代理開發中實現實時學習和經驗共享的開發者。
> **一句話重點** 這個專案的核心在於透過真實世界的任務來持續提升 AI 代理的學習能力。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Forsy-AI--agent-apprenticeship");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "agent-learning" && p.file.name !== "Forsy-AI--agent-apprenticeship" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 agent-learning 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，得到靈活的 AI 代理學習平台，值得一試。

> [!abstract] 核心創新
> Agent Apprenticeship 提供了一個生態系統，讓 AI 代理透過真實工作學習並生成可重複使用的學習信號。

## 專案簡介

Agent Apprenticeship 是一個設計用來讓 AI 代理在真實世界的工作中學習的生態系統。用戶可以透過 `npx agent-apprenticeship init` 指令來啟動這個系統，並開始執行任務。系統的核心在於通過經濟價值的任務執行來生成可重複使用的學習信號，這些信號能夠改善未來的工作表現。這個系統支持多種代理，如 Codex 和 Cursor，並允許用戶在本地運行自動化的工作流迴圈。

每次任務執行後，系統會生成一個經驗包，並提供 `apprentice bundle inspect` 和 `apprentice ecosystem contribute` 等指令來檢查和分享這些經驗。這樣的設計使得用戶能夠在不同領域中進行複雜的任務，並與其他用戶共享學習經驗。這個專案的賣點在於它的迭代工作流和經濟價值的評估，能夠讓用戶在日常使用中不斷提升代理的性能和結果質量。整體來看，這個系統不僅是工具，還是一個持續進化的學習平台。

## 重點功能

- 自動化工作流迴圈 — 使用 `npx agent-apprenticeship init` 指令啟動，支持多種代理。
- 經驗包生成 — 每次任務執行後生成經驗包，並可用 `apprentice bundle inspect` 檢查。
- 經濟價值估算 — 系統能夠對每個任務的執行進行經濟價值評估。
- 多種導師模式 — 支持 `model-assisted`、`expert-led` 和 `hybrid` 模式，適應不同的工作需求。
- 生態系統共享 — 使用 `apprentice ecosystem contribute` 指令將經驗包分享至公共生態系統。

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
apprentice run 'Create a short market map for AI procurement tools.'
```

## 程式碼範例

```bash
[
  "# 前置條件：已安裝 Agent Apprenticeship",
  "npx agent-apprenticeship init",
  "# 預期輸出：初始化完成，準備開始使用 Agent Apprenticeship"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 609 stars（304.5/天），forks 1（0.2%），顯示出初期的關注度。作者 ray-r-ren 在 AI 領域有過往的貢獻，這個專案解決了 AI 代理在真實環境中學習的痛點，之前的方案往往缺乏有效的學習信號和經驗共享機制。近期的推廣活動可能吸引了不少開發者的注意，尤其是在 AI 代理的應用場景日益增多的背景下。forks/stars 比率低，顯示目前使用者仍在觀望階段，尚未大量修改或擴展這個專案。

## 適合誰使用

**目標受眾**：希望在 AI 代理開發中實現實時學習和經驗共享的開發者。

> [!example] 使用場景
> - AI 研究員用它來訓練代理在真實世界任務中學習，因為能夠生成可重複使用的學習信號，提升代理的表現。
> - 產品經理用它來分析市場需求，因為可以透過自動化任務來獲得經濟價值估算，幫助制定策略。
> - 開發者用它來快速建立和測試 AI 代理，因為提供了多種現成的代理選擇，減少了開發時間。

## 架構分析

Agent Apprenticeship 採用模組化的設計，允許用戶根據需求選擇不同的代理和導師模式。系統的資料流從任務執行開始，生成學習信號，這些信號再用於改善未來的任務執行。選擇使用多種導師模式（如 `model-assisted` 和 `expert-led`）可以根據用戶的需求進行調整，這樣的設計使得系統具備靈活性和擴展性。整體架構的設計使得用戶能夠在不同的工作環境中進行實驗，並隨時調整參數以達到最佳效果。

## 技術深入分析

Agent Apprenticeship 的設計核心在於建立一個持續進化的學習生態系統。它使用了多種代理（如 Codex 和 Cursor），並允許用戶根據需求選擇導師模式，這樣的設計使得系統具備高度的靈活性。每次任務執行後，系統會生成學習信號，這些信號能夠用於未來的任務改善，這樣的迭代過程是其主要的技術機制。系統的效能取決於用戶選擇的代理和任務的複雜度，能夠處理多種專業領域的任務。設計上選擇了簡單的 CLI 介面，這樣的選擇降低了使用的門檻，但也可能限制了進階用戶的擴展性。技術風險方面，隨著用戶數量的增加，生態系統的穩定性可能會受到挑戰，特別是在共享經驗的過程中。整合方面，與主流的 AI 代理和工具鏈的相容性良好，使用者可以輕鬆地將其納入現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指令和範例，安裝過程相對順暢，使用者能夠在短時間內上手。文件中有針對不同代理的配置說明，但缺乏多語言支持，可能對非英語使用者造成困難。

## 優缺點分析

> [!success] 優點
> - 支持多種代理和導師模式，靈活性高。
> - 能夠生成可重複使用的學習信號，提升代理性能。
> - 提供經濟價值估算，幫助用戶制定策略。

> [!danger] 缺點
> - 目前僅支援特定的代理，限制了使用範圍。
> - 需要配置多個 API 金鑰，對新手有一定的學習曲線。
> - 生態系統共享功能尚在開發中，可能不穩定。

> [!warning] 注意事項
> - 目前僅支援特定的代理，如 Codex 和 Cursor。
> - 需要配置多個 API 金鑰，對新手可能有一定的學習曲線。
> - 生態系統共享功能仍在開發中，可能會有不穩定情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的代理學習環境，但更專注於遊戲開發的應用場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 AI 代理的記憶體管理，與本專案的經驗共享功能有所不同。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於代理間的競爭學習，而本專案強調經驗的重用與共享。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲開發的代理學習環境，提供更具互動性的學習體驗。 | 如果你的專案主要集中在遊戲開發，這個工具會更合適。 | medium，因為需要重新設計學習流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於記憶體管理的 AI 代理，提供更高效的資源使用。 | 如果你的專案需要高效的資源管理，這個工具會更適合。 | high，因為需要重構整個代理架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **agent-apprenticeship** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲開發的代理學習環境，提供更具互動性的學習體驗。 | 專注於記憶體管理的 AI 代理，提供更高效的資源使用。 |
> | 遷移成本 | - | medium，因為需要重新設計學習流程。 | high，因為需要重構整個代理架構。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在遊戲開發，這個工具會更合適。 | 如果你的專案需要高效的資源管理，這個工具會更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在配置 API 金鑰時，可能會因為格式錯誤導致無法啟動
  - 解法：確保金鑰格式正確，並檢查環境變數設置
- [MEDIUM] 共享經驗包時，可能會遇到網路連接問題
  - 解法：檢查網路連接，並重試共享操作
- [MEDIUM] 某些代理在特定任務中表現不佳
  - 解法：嘗試更換代理或調整任務參數

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型 AI 開發團隊進行原型設計 | 非常適合 | 提供靈活的代理選擇和經驗共享功能，能快速迭代原型。 |
| 大型企業的 AI 部門進行專業任務 | 普通 | 雖然功能強大，但可能需要更多的配置和學習時間。 |
| 個人開發者進行 AI 代理學習實驗 | 非常適合 | 簡單的 CLI 介面和豐富的學習資源，易於上手。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到靈活的 AI 代理學習平台，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，僅需存取環境變數中的 API 金鑰，並不會存取敏感資料。

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
| Forks | 1 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-20 |
| 建立日期 | 2026-06-19 |
| 官方網站 | [Link](https://agentapprenticeship.org/) |
| Repo 大小 | 17.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Forsy-AI/agent-apprenticeship) |
| Topics | `agent-apprenticeship` `agent-economy` `agent-experience` `agent-learning` `agent-traces` `agentic-ai` `ai-agents` `autonomous-agents` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ray-r-ren](https://github.com/ray-r-ren) | 11 |

**最新版本**：v0.1.0 — Agent Apprenticeship v0.1 (2026-06-19)

## 社群與生態

**社群活躍度**：社群活躍度尚可，最近有更新，但解決的問題數量較少。
**連結**：[文件](https://agentapprenticeship.org/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-19 ~ 2026-06-20）
> **活躍天數** 2 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/Forsy-AI/agent-apprenticeship/issues/10) | [建议] 致所有关注这个项目的人？？ | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Agent Apprenticeship
> 
> [](https://www.npmjs.com/package/agent-apprenticeship)
> 
> The living ecosystem where AI agents learn from real-world work through iterative workflow loops, reusable experience, and collective training signal exchange.
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

相關概念：[[agent-learning]] · [[reinforcement-learning]] · [[ecosystem-learning]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[alchaincyf--hermes-agent-orange-book|alchaincyf/hermes-agent-orange-book]] · [[mrtooher--fable-mode|mrtooher/fable-mode]] · [[facebookresearch--HyperAgents|facebookresearch/HyperAgents]]

[GitHub](https://github.com/Forsy-AI/agent-apprenticeship) · [官方網站](https://agentapprenticeship.org/)

## 相關收錄

> [!note]- 直接競品（同子分類：agent-learning）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "agent-learning" AND file.name != "Forsy-AI--agent-apprenticeship"
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
> const concepts = ["agent-learning","reinforcement-learning","ecosystem-learning"];
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

- [[2026-06-23|2026-06-23]] — 再次上榜，682 stars
- [[2026-06-22|2026-06-22]] — 再次上榜，609 stars
- [[2026-06-21|2026-06-21]] — 首次收錄，529 stars
