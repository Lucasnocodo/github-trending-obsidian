---
repo: Forsy-AI/agent-apprenticeship
url: https://github.com/Forsy-AI/agent-apprenticeship
owner: Forsy-AI
owner_type: Organization
language: Python
license: MIT
description: "The living ecosystem where AI agents complete tasks through workflow loops, improve through iterative execution, are evaluated by mentor agents or humans in the loop, and turn completed work into reusable work experience and data to improve future agents."
homepage: "https://agentapprenticeship.org/"
stars: 1220
stars_per_day: 81
forks: 52
open_issues: 0
created: 2026-06-19
pushed_at: 2026-07-03
first_seen: 2026-06-21
week: "2026-W26"
month: "2026-06"
category: "AI/ML"
subcategory: "Agent 框架"
release_tag: "v0.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-21
use_case: "讓 AI 代理透過工作流程循環完成任務並持續改進，最終將工作轉化為可重用的經驗和數據。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-07-03"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 981
readme_length: 6053
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-21"
star_history: "2026-06-21:529,2026-06-21:529,2026-06-22:609,2026-06-22:609,2026-06-23:682,2026-06-23:682,2026-06-24:859,2026-06-24:859,2026-06-25:909,2026-06-25:909,2026-06-26:941,2026-06-26:941,2026-06-27:975,2026-06-28:1000,2026-06-29:1036,2026-06-30:1062,2026-07-01:1099,2026-07-02:1140,2026-07-03:1169,2026-07-04:1196,2026-07-05:1220"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
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
  - "讓 AI 代理透過工作流程循環完成任務並持續改進，最終將工作轉化為可重用的經驗和數據。"
---

# agent-apprenticeship

**1.2k** stars · **81** stars/天 · 建立 15 天前 · Python · MIT

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

`ORG` `v0.2.0` `easy-install`

`agent-apprenticeship` `agent-economy` `agent-experience` `agent-learning` `agent-traces` `agentic-ai` `ai-agents` `autonomous-agents` `claude-code` `codex` `cursor` `ecosystem-learning` `hermes-agent` `loop-engineering` `openclaw` `opencode` `post-training` `real-world-tasks` `reinforcement-learning` `training-signals`

> [!summary] 一句話摘要
> 讓 AI 代理透過工作流程循環完成任務並持續改進，最終將工作轉化為可重用的經驗和數據。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (81 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在多領域進行複雜任務的團隊，並希望透過 AI 代理持續改進工作效率的開發者。
> **一句話重點** 這個專案不僅是工具，更是一個持續改進的生態系統，讓 AI 代理的工作經驗得以重用和共享。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、10 小時整合，得到持續改進的 AI 代理系統，值得投入。

> [!abstract] 核心創新
> 這個專案的核心創新在於將實際的代理工作轉化為可重用的學習信號，形成一個持續改進的生態系統。

## 專案簡介

Agent Apprenticeship 是一個開放框架，旨在將實際的代理工作轉化為可轉移的學習經驗。這個系統透過工作流程循環，讓 AI 代理完成任務並在過程中不斷改進，最終將完成的工作轉化為可重用的數據。使用者可以透過 `npx agent-apprenticeship init` 指令快速啟動系統，並配置其代理和導師模型提供者。這個系統的設計理念是促進代理工作經驗的累積，經濟上有價值的任務執行會產生訓練信號，這些信號又會反過來改善未來的工作。技術上，Agent Apprenticeship 支援多種代理，包括 Codex 和 Claude Code，並且能夠在本地運行自動化的工作流程循環。

這個系統的核心在於其 Seed Dataset，包含了 505 個完整的代理工作經驗編譯和超過 39,000 條結構化經驗記錄，這些數據可以用於訓練和改進代理的表現。與其他工具相比，Agent Apprenticeship 不僅專注於任務執行，還強調經驗的重用和共享，這使得它在長期使用中具有更高的價值。使用者可以選擇不同的模式，如自主模式或專家引導模式，根據需求進行配置。整體而言，這個工具適合需要在多領域進行複雜任務的團隊，並且能夠持續改進其代理的性能和結果質量。

**技術棧**：`Python` · `JavaScript` · `Pydantic` · `Typer`

## 重點功能

- 經驗編譯器 — 用於迭代提取可重用的訓練數據。
- 多種代理支援 — 包括 Codex、Cursor、Claude Code 等多個模型提供者。
- 自動化工作流程 — 允許用戶在本地運行自動化的代理工作流程循環。
- Seed Dataset — 包含 505 個完整的代理工作經驗編譯和 39,000 條結構化經驗記錄。
- 多種模式選擇 — 支援自主模式、專家引導模式和組織自定義模式。

## 快速開始

1. 初始化 Agent Apprenticeship
```bash
npx agent-apprenticeship init
```
2. 使用預設配置
```bash
npx agent-apprenticeship init --defaults
```
3. 檢查設置
```bash
apprentice settings
```
4. 運行第一個任務
```bash
apprentice run "Create a short market map for AI procurement tools."
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 Node.js 和 npm。",
  "指令": "npx agent-apprenticeship init",
  "預期輸出": "初始化成功，並生成配置文件。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 15 天就累積 1220 stars（81/天），forks 52（4.3%），顯示出穩定的增長潛力。這個專案的主要貢獻者 ray-r-ren 之前在 AI 領域有豐富的經驗，解決了現有 AI 代理在任務執行和學習信號重用上的痛點。之前的方案往往無法有效整合實際工作經驗，導致學習效率低下。這個專案的推出正好填補了這個空白，並且在社群中引起了廣泛的討論和關注。技術上，隨著開放式 AI 模型的普及，這個工具的需求也隨之上升，讓它成為一個值得關注的選擇。forks/stars 比率為 4.3%，顯示出使用者對於實際修改和使用的興趣。

## 適合誰使用

**目標受眾**：需要在多領域進行複雜任務的團隊，並希望透過 AI 代理持續改進工作效率的開發者。

> [!example] 使用場景
> - AI 研究人員用它來訓練代理完成市場調查任務，因為可以重用過去的學習信號來提高效率。
> - 產品經理用它來監控和評估不同代理的表現，因為能夠將任務執行的數據轉化為可用的經驗。
> - 開發者用它來快速建立和測試新的代理模型，因為其提供的 Seed Dataset 可以加速模型的訓練過程。

## 架構分析

Agent Apprenticeship 採用模組化設計，核心是經驗編譯器和多代理支援系統。這樣的設計使得用戶可以靈活選擇不同的代理模型並進行配置。資料流方面，使用者的任務透過 CLI 指令傳入系統，然後由選定的代理執行，執行過程中生成的數據會被存儲並用於未來的學習。選擇這種設計的代價在於需要用戶對於不同代理模型的理解和配置，這可能增加學習曲線。擴展性方面，系統能夠支援多種代理模型，但隨著代理數量的增加，可能會面臨性能瓶頸，特別是在高頻率任務執行的情況下。

## 技術深入分析

Agent Apprenticeship 的核心技術在於其經驗編譯器和多代理支援系統，這使得用戶能夠靈活選擇和配置不同的代理模型。系統能夠處理大量的任務執行數據，並通過生成的學習信號來不斷改善代理的性能。設計上，選擇 Python 和 JavaScript 作為主要語言，這使得系統在開發和使用上都相對容易，但也帶來了對於環境的依賴性。技術上，這個系統的依賴樹相對簡單，主要依賴於 Pydantic 和 Typer，這些都是輕量級的庫，能夠快速集成。隨著使用者數量的增加，系統可能會面臨性能挑戰，特別是在高頻率的任務執行中，這可能需要進一步的優化和擴展。整體而言，這個專案在與主流框架的整合上相對友好，能夠輕鬆融入現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，讓新手能夠快速理解如何使用。安裝過程順暢，無重大坑點。提供了良好的入門指南，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 支持多種代理模型，靈活性高。
> - 經驗重用機制能夠顯著提高任務執行效率。
> - 提供完整的 Seed Dataset，便於用戶快速上手。

> [!danger] 缺點
> - 需要一定的技術背景才能有效配置和使用。
> - 對於新手來說，初期學習曲線較陡。
> - 目前的功能仍在不斷完善中，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 Python 3.11 及以上版本。
> - 需要安裝 Node.js 環境來運行 npx 指令。
> - 目前僅有部分代理模型的支援，未來可能會增加更多模型。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理代理的工作流程，而 Agent Apprenticeship 更加強調經驗的重用和學習信號的生成。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供競爭性代理的訓練環境，適合需要多代理互動的場景，而 Agent Apprenticeship 更加注重單一代理的持續改進。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理代理的工作流程，而本專案強調經驗的重用和學習信號的生成。 | 如果需要一個專注於工作流程管理的工具，而不是經驗重用的系統。 | medium，因為需要重新設計工作流程。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供競爭性代理的訓練環境，適合需要多代理互動的場景，而本專案更注重單一代理的持續改進。 | 如果你的應用場景需要多個代理之間的競爭和互動。 | high，因為需要重新設計整體架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **agent-apprenticeship** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建和管理代理的工作流程，而本專案強調經驗的重用和學習信號的生成。 | 提供競爭性代理的訓練環境，適合需要多代理互動的場景，而本專案更注重單一代理的持續改進。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流程。 | high，因為需要重新設計整體架構。 |
> | 適用場景 | 主要場景 | 如果需要一個專注於工作流程管理的工具，而不是經驗重用的系統。 | 如果你的應用場景需要多個代理之間的競爭和互動。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的實驗性專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高頻率任務執行時可能會出現性能瓶頸。
  - 解法：考慮減少同時執行的任務數量。
- [MEDIUM] 某些代理模型的配置可能會導致不穩定性。
  - 解法：仔細檢查模型的兼容性和配置參數。
- **[HIGH]** 需要正確配置環境變數以確保 API 認證成功。
  - 解法：檢查 `.env.local` 文件中的 API 密鑰設置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行市場調查 | 非常適合 | 能夠快速生成市場調查報告，並重用過去的學習信號。 |
| 大型企業內部的 AI 代理開發團隊 | 適合 | 可以在多個代理之間共享經驗，提高開發效率。 |
| 個人開發者進行 AI 代理的實驗性專案 | 非常適合 | 提供了良好的入門指南和 Seed Dataset，便於快速上手。 |
| 需要高頻率任務執行的生產環境 | 不適合 | 可能會面臨性能瓶頸，影響系統穩定性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、10 小時整合，得到持續改進的 AI 代理系統，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅需存取 API 密鑰，且依賴的庫均為知名開源項目，無已知的供應鏈風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Agent Apprenticeship 通常與多種 AI 代理模型搭配使用，位於開發和測試的環節。用戶可以在使用 Node.js 和 Python 的環境中輕鬆整合此工具。在一個使用 FastAPI 的專案中，可以透過 `apprentice run` 指令來執行任務，並利用生成的數據來改善模型性能。此工具支援 GitHub Actions 進行 CI/CD 整合，並且與 VS Code 有良好的相容性。最常見的整合問題是 API 密鑰的配置，需確保環境變數正確設置以避免認證失敗。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Agent Apprenticeship 出現之前，許多 AI 代理的工作經驗無法有效重用，導致學習效率低下。使用者通常依賴於手動的任務執行和數據收集，這些方法不僅耗時且容易出錯。隨著開放式 AI 模型的普及，這個工具的需求逐漸上升，提供了一個系統化的方式來整合和重用代理的工作經驗。

這個工具代表了 AI 代理在經濟價值和學習效率上的新趨勢，未來可能會隨著更多模型的整合而進一步演變。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Python 和 Node.js
- 了解基本的 API 認證流程
- 有 CI/CD pipeline 經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型團隊內部工具中導入。第三週：撰寫最佳實踐文檔。第四週：在主產品的一個非核心模組開始使用。

**成功指標**：任務執行時間減少 30%，或代理性能提升 20%。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方 migration 工具轉換為其他系統。

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
| Forks | 52 |
| Open Issues | 0 |
| 最後推送 | 2026-07-03 |
| 建立日期 | 2026-06-19 |
| 官方網站 | [Link](https://agentapprenticeship.org/) |
| Repo 大小 | 981 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Forsy-AI/agent-apprenticeship) |
| Topics | `agent-apprenticeship` `agent-economy` `agent-experience` `agent-learning` `agent-traces` `agentic-ai` `ai-agents` `autonomous-agents` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ray-r-ren](https://github.com/ray-r-ren) | 4 |

**最新版本**：v0.2.0 (2026-07-03)

> [!info]- Release Notes
> What is new:
> - Experience Compiler for iterative extraction of reusable training data
> - Full training data packages (SFT, reward/verifier training, process supervision, preference learning, and agentic RL)
> - Runtime training install
> - Eval, replay, environment, and source evidence map packages
> - Public Ecosystem and Private Internal Only modes
> - Iterative workflow loops across local Apprentice Agents
> - Codex, Cursor, Claude Code, OpenClaw, OpenCode, Hermes Agent, and custom agent support
> - Seed Dataset v0.2 with 505 full agent work experience compilations & 39k+ structured experience compilation records
> - Selected ALE workflow-family mirrored transfer tasks demo
> 
> Seed Dataset v0.2:
> Hugging Face:
> [https://huggingface.co/datasets/Forsy-AI/agent-apprenticeship-seed-dataset_v0.2](https://huggingface.co/datasets/Forsy-AI/agent-apprenticeship-seed-dataset_v0.2?utm_source=chatgpt.com)
> 
> The seed dataset includes 505 full agent work experience compilations and 39k+ structured experience compilation records.

## 社群與生態

**社群活躍度**：社群活躍，持續更新中。
**連結**：[文件](https://agentapprenticeship.org/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-03 ~ 2026-07-03）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## README 摘錄

> [!info]- 展開查看原文 README
> # Agent Apprenticeship
> 
> [](https://www.npmjs.com/package/agent-apprenticeship)
> 
> **Real-world agent work experience, looped into collective learning.**
> 
> The living ecosystem where AI agents complete tasks through workflow loops, improve through iterative execution, are evaluated by mentor agents or humans in the loop, and turn completed work into reusable work experience and data to improve future agents.
> 
> ```bash
> npx agent-apprenticeship init
> ```
> 
> As agents move into long-horizon, economically valuable work, Agent Apprenticeship creates the open infrastructure where real-world tasks generate reusable learning signals and complex workflows advance through agent loops that turn execution into shared improvement.
> 
> Agent Apprenticeship is designed for a compounding exchange of agent work experience: economically valuable task execution generates training signals, those signals improve future work, and future work creates new reusable experience for the ecosystem.
> 
> Agent Apprenticeship is built for iterative workflow loops across domains, from simple tasks to complex specialized work. Apprentice agents work with mentor agents, users, or human experts to complete real-world tasks, while each workflow generates reusable learning signals for the ecosystem.
> 
> The latest seed dataset includes:
> 
> - 500+ curated seed tasks sourced and grounded from the real world
> - 495 reusable agent lessons
> - 1000+ full agent execution traces
> - 1000+ agent work episodes / task rollouts
> - 505 full agent work experience compilations
> - 39k+ structured experience compilation records
> 
> The seed dataset spans specialized, economically valuable tasks across domains and forms the first layer of the Agent Apprenticeship ecosystem.
> 
> Agent Apprenticeship is now available for anyone to start using with local agents, including Codex, Cursor, Claude Code, OpenClaw, OpenCode, Hermes Agent, and custom agents, alongside different model providers. Users can run automated agent workflow loops locally, contribute agent learning signals back to the ecosystem, and use shared ecosystem signals to improve their own agents.
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
> 
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
> Use defaults:
> 
> ```bash
> npx agent-apprenticeship init --defaults
> ```
> 
> Check your setup:
> 
> ```bash
> apprentice settings
> apprentice doctor
> ```
> 
> Configure your Apprentice Agent, Mentor Model Provider, and Apprenticeship Mode:
> 
> ```bash
> apprentice configure
> apprentice configure model
> apprentice settings
> ```
> 
> Apprenticeship Modes:
> 
> ```text
> Autonomous
> Expert-Led
> Organization Custom
> ```
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
> Watch progress:
> 
> ```bash
> apprentice watch 
> ```
> 
> When the run completes, Agent Apprenticeship prints the local run folder and Experience Compilation path.
> 
> Inspect the generated Experience Compilation:
> 
> ```bash
> apprentice ecosystem inspect 
> apprentice bundle check 
> ```
> 
> Export the Full Experience Compilation:
> 
> ```bash
> apprentice ecosystem export  --full
> ```
> 
> Install Runtime Training from prior experience:
> 
> ```bash
> apprentice learn install 
> ```
> 
> Use installed Runtime Training in a future run:
> 
> ```bash
> apprentice run "Create a release checklist for an AI agent project."
> ```
> 
> Configure maximum loop depth:
> 
> ```bash
> apprentice settings
> ```
> 
> For a one-off terminal session:
> 
> ```bash
> export AA_MAX_ITERATIONS=3
> ```
> 
> ## Apprentice Agents
> 
> Available Apprentice Agents:
> 
> ```text
> Codex
> Cursor
> Claude Code
> OpenClaw
> OpenCode
> Hermes Agent
> Custom
> ```
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
> Configure:
> 
> ```bash
> apprentice configure model
> apprentice doctor
> ```
> 
> ## Public Ecosystem and Private Internal Only
> 
> Configure contribution mode:
> 
> ```bash
> apprentice settings
> ```
> 
> Modes:
> 
> ```text
> Public Ecosystem
> Private Internal Only
> ```
> 
> Explore ecosystem experience:
> 
> ```bash
> apprentice ecosystem search 
> apprentice ecosystem inspect 
> apprentice ecosystem pull 
> ```
> 
> Export Full Experience Compilation:
> 
> ```bash
> apprentice ecosystem export  --full
> ```
> 
> Install Runtime Training:
> 
> ```bash
> apprentice learn install 
> ```
> 
> ## Seed Dataset v0.2
> 
> Seed Dataset v0.2 is available on Hugging Face:
> 
> https://huggingface.co/datasets/Forsy-AI/agent-apprenticeship-seed-dataset_v0.2
> 
> It includes 505 full agent work experience compilations and 39k+ structured experience compilation records.
> 
> ## Selected ALE Tasks Demo
> 
> Selected ALE workflow-family mirrored transfer tasks are included under:
> 
> ```text
> selected_ale_tasks_demo/
> ```
> 
> ## Public Repo Structure
> 
> ```text
> bin/
> src/
> schemas/
> examples/
> selected_ale_tasks_demo/
> ```

## 延伸閱讀

相關概念：[[強化學習]] · [[自動化]] · [[經驗重用]]

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
> WHERE language = "Python" AND file.name != "Forsy-AI--agent-apprenticeship" AND status != "archived"
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
> const concepts = ["強化學習","自動化","經驗重用"];
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
