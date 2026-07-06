---
repo: TianhangZhuzth/Fundamental-Ava
url: https://github.com/TianhangZhuzth/Fundamental-Ava
owner: TianhangZhuzth
owner_type: User
language: Python
license: Apache-2.0
description: "Build digital human beings — autonomous, collaborative, and socially intelligent agents. FNzgGxU31RWiDgLr3GvxxSa42nRntvZNSG6aBMQ1pump"
homepage: "https://fundamentalresearchlabs.com"
stars: 525
stars_per_day: 88
forks: 53
open_issues: 0
created: 2026-06-30
pushed_at: 2026-07-01
first_seen: 2026-07-01
week: "2026-W27"
month: "2026-07"
category: "AI/ML"
subcategory: "多代理系統"
release_tag: "v0.4.1"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-01
use_case: "建立自主、協作和社交智能的數位人類代理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-07-12"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 461
readme_length: 9892
bus_factor: 1
last_release_days: 6
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-01"
star_history: "2026-07-01:599,2026-07-01:602,2026-07-02:718,2026-07-02:720,2026-07-03:756,2026-07-03:756,2026-07-04:520,2026-07-04:520,2026-07-05:523,2026-07-05:523,2026-07-06:525"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
  - "topic/ai"
  - "topic/ai_agents"
aliases:
  - "Fundamental-Ava"
  - "TianhangZhuzth/Fundamental-Ava"
  - "建立自主、協作和社交智能的數位人類代理。"
---

# Fundamental-Ava

**525** stars · **88** stars/天 · 建立 6 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/TianhangZhuzth--Fundamental-Ava");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.4.1` `easy-install`

`ai` `ai-agents`

> [!summary] 一句話摘要
> 建立自主、協作和社交智能的數位人類代理。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (88 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要開發自主智能代理並進行行為模擬的研究人員和開發者。
> **一句話重點** Ava 不僅是一個多代理系統，更是對數位人類行為的深入探索工具。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/TianhangZhuzth--Fundamental-Ava");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "多代理系統" && p.file.name !== "TianhangZhuzth--Fundamental-Ava" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 多代理系統 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> Ava 的設計使得多代理系統能夠在不明確指示的情況下，自發形成社會結構和行為模式。

## 專案簡介

Ava 是一個多代理模擬框架，旨在開發數位智能，能夠運行大量自主代理，每個代理擁有自己的記憶、信念系統和社交模型。其核心機制是透過 `asyncio.TaskGroup` 和有界的 `asyncio.Semaphore` 來實現並行運行，避免單個代理的延遲影響整體運行，這樣的設計使得大量代理能夠同時運行而不互相干擾。記憶系統則分為情節性、語義性和程序性記憶，這樣的層次化設計使得近期事件會淡化，而重要事件則會持久化，這樣的記憶管理方式有助於代理在不同情境下做出更有效的決策。Ava 的分析層則使用統計方法來測量代理群體的行為變化，這樣的設計確保了對於 emergent behavior 的分析是基於數據而非直覺。使用者可以透過簡單的 API 定義代理的行為和社會互動，並在模擬環境中觀察其行為的演變。這個框架的賣點在於其能夠在不明確指示的情況下，通過代理間的互動自發產生社會結構和行為模式。

**技術棧**：`Python 3.11` · `asyncio` · `numpy` · `networkx`

## 重點功能

- 高效的並行處理 — 使用 `asyncio.TaskGroup` 和 `asyncio.Semaphore` 來確保代理的並行運行。
- 層次化記憶系統 — 包含情節性、語義性和程序性記憶，支持不同的檢索和衰減語義。
- 統計性行為分析 — 使用變化點檢測來量化代理的行為變化，提供數據支持的分析結果。
- 簡單的代理行為定義 — 透過簡單的 API 來定義代理的行為和社會互動。
- 即時可視化工具 — 提供實時監控代理狀態的儀表板，便於用戶觀察模擬過程。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/TianhangZhuzth/Fundamental-Ava.git && cd Fundamental-Ava && pip install -e '.[dev]'
```

## 程式碼範例

```python
[
  "# 前置條件：需要 Python 3.11+；",
  "import asyncio",
  "from ava import Civilization, SimulationConfig",
  "from ava.agents.base import Action, AgentCore",
  "",
  "class Settler(AgentCore):",
  "    async def deliberate(self, percepts, world_state):",
  "        return Action(kind='forage', payload={'energy_cost': 1.0})",
  "",
  "async def main() -> None:",
  "    civ = Civilization(SimulationConfig(max_ticks=200))",
  "    for i in range(500):",
  "        civ.add_agent(Settler(name=f'settler-{i}', bus=civ.bus))",
  "",
  "    reports = await civ.run()",
  "    print(f'ran {len(reports)} ticks, final population {reports[-1].population}')",
  "",
  "asyncio.run(main())",
  "# 預期輸出：ran X ticks, final population Y"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 525 stars（87.5/天），forks 53（10.1%），這顯示出相對較高的實際使用和修改需求。作者 TianhangZhuzth 來自 Fundamental Research Labs，專注於數位人類的研究，這個專案解決了多代理系統在擴展性和行為分析上的痛點，以往的系統往往因為調度和記憶管理不當而無法處理大量代理的互動。這個專案的推出可能受到社群對於數位人類和自主代理的興趣驅動，並且在技術上利用了 Python 的 asyncio 特性來實現高效的並行處理。forks/stars 比率為 10.1%，顯示出有相當一部分使用者在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要開發自主智能代理並進行行為模擬的研究人員和開發者。

> [!example] 使用場景
> - 研究人員用它來模擬數位社會的演變，因為能夠觀察到代理間自發形成的社會結構和行為模式。
> - 遊戲開發者用它來創建智能 NPC，因為其能夠讓 NPC 在不明確指示下自發行動，增加遊戲的真實感。
> - 教育工作者用它來展示多代理系統的運作原理，因為其簡單的 API 和可視化工具能夠幫助學生理解複雜的社會互動。

## 架構分析

Ava 的架構設計是基於多層次的代理系統，核心是 `Civilization` 模組，負責調度和管理代理的行為。每個代理都有自己的記憶、信念和社交模型，這些模型分別由不同的模組管理。這樣的設計使得代理的行為能夠獨立運行，並且不會因為單個代理的錯誤而影響整體系統的運行。使用 `asyncio` 來實現並行處理，這樣的選擇使得系統能夠在高負載下保持穩定，但也要求開發者對異步編程有一定的理解。整體架構的擴展性良好，能夠支持大量代理的運行，但在資源使用上需要謹慎管理，以避免性能瓶頸。

## 技術深入分析

Ava 的核心技術機制是基於 Python 的 asyncio 庫，這使得它能夠在高並行度下運行大量代理。每個代理的行為由 `ava.agents.base` 模組管理，這個模組負責代理的感知、決策和行動過程。記憶系統則由 `ava.agents.memory` 模組負責，這個模組將記憶分為情節性、語義性和程序性，這樣的設計使得代理能夠根據不同的情境選擇合適的記憶進行回憶和學習。整體架構的設計考慮到了擴展性和穩定性，使用了 pub/sub 模式來管理代理間的通信，這樣的設計使得系統能夠在面對大量代理時保持穩定。技術風險方面，隨著代理數量的增加，可能會出現性能瓶頸，特別是在記憶和行為分析的過程中。整合方面，Ava 能夠與主流的 Python 生態系統無縫整合，特別是在數據分析和可視化方面，這使得開發者能夠輕鬆地將其應用於現有的工作流中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的詳細步驟。安裝過程相對順暢，但需要注意 Python 版本要求。文件中有簡單的範例，幫助新手快速上手。多語言支持尚未明確。

## 優缺點分析

> [!success] 優點
> - 高效的並行處理，能夠支持大量代理的同時運行。
> - 層次化的記憶系統，能夠更好地模擬人類的記憶和學習過程。
> - 統計性行為分析，提供數據支持的行為觀察，避免主觀偏見。

> [!danger] 缺點
> - 目前仍在開發中，API 可能不穩定。
> - 需要一定的計算資源，對於小型專案可能過於複雜。
> - 對於不熟悉異步編程的開發者來說，學習曲線較陡。

> [!warning] 注意事項
> - 目前僅支援 Python 3.11 以上版本。
> - 需要一定的計算資源來運行大量代理，特別是在高並行度的情況下。
> - 尚在開發中，API 可能會有變動，特別是在 `ava.analysis` 模組中。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理代理的可視化工具，而 Ava 更加專注於代理間的行為模擬和 emergent behavior 的分析。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於對抗性代理的模擬，而 Ava 則是針對多代理系統的協作和社會行為進行分析。 |

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/TianhangZhuzth--Fundamental-Ava");
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
> const me = dv.page("Repos/TianhangZhuzth--Fundamental-Ava");
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
| Forks | 53 |
| Open Issues | 0 |
| 最後推送 | 2026-07-01 |
| 建立日期 | 2026-06-30 |
| 官方網站 | [Link](https://fundamentalresearchlabs.com) |
| Repo 大小 | 461 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/TianhangZhuzth/Fundamental-Ava) |
| Topics | `ai` `ai-agents` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@TianhangZhuzth](https://github.com/TianhangZhuzth) | 493 |

**最新版本**：v0.4.1 — v0.4.1 - Packaging & CI (2026-06-30)

> [!info]- Release Notes
> Dockerized packaging and GHCR publish workflow.

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有持續的更新和改進。
**連結**：[文件](https://fundamentalresearchlabs.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-29 ~ 2026-07-01）
> **活躍天數** 3 天 · **最新 commit** agent core refactor — memory trace + belief propagation layer

## README 摘錄

> [!info]- 展開查看原文 README
> # Ava
> 
> 
> ## Installation
> 
> ```bash
> git clone https://github.com/TianhangZhuzth/Fundamental-Ava.git
> cd Fundamental-Ava
> pip install -e ".[dev]"
> ```
> 
> Requires Python 3.11+ (the execution engine uses `asyncio.TaskGroup`,
> added in 3.11).
> 
> 
> ## Why it's built this way
> 
> Most multi-agent demos top out at a handful of agents because the
> scheduler, memory system, or message bus wasn't designed for scale.
> `Ava` makes three architectural bets up front:
> 
> 1. **Concurrency is structural, not bolted on.** Every tick runs through
>    `asyncio.TaskGroup` with a bounded `asyncio.Semaphore`, so a population
>    of agents steps in parallel without one slow agent blocking the tick,
>    and one agent's unhandled exception can't silently corrupt the rest of
>    the run.
> 2. **Memory is tiered, not a flat log.** Episodic, semantic, and
>    procedural memory are separate stores with different retrieval and
>    decay semantics — recent events fade, important events persist,
>    reusable skills get reinforced independently of any single episode.
> 3. **Emergence is measured statistically, not eyeballed.** The analysis
>    layer runs change-point detection (Mann-Whitney U over a rolling
>    window) against population metrics like specialization and wealth
>    distribution, so a claim like "agents formed distinct roles" is backed
>    by a p-value, not a hunch.
> 
> 
> ### The cat is out the bag.
> 
> **[Fundamental Research Labs](https://fundamentalresearchlabs.com/) is building the next frontier of digital beings.**
> 
> Build digital human beings — autonomous, collaborative, and socially intelligent agents that think, remember, form relationships, and act in the world. Not chatbots. Not assistants. Beings.
> 
> Completely autonomous. Powered by **$AVA**.
> 
> [](https://github.com/TianhangZhuzth/Fundamental-Ava/actions/workflows/ci.yml)
> [](https://www.python.org/)
> [](LICENSE)
> [](https://github.com/astral-sh/ruff)
> 
> [@Fundamental](https://x.com/Fundamental) · [fundamentalresearchlabs.com](https://fundamentalresearchlabs.com/)
> 
> **CA:** [`FNzgGxU31RWiDgLr3GvxxSa42nRntvZNSG6aBMQ1pump`](https://pump.fun/coin/FNzgGxU31RWiDgLr3GvxxSa42nRntvZNSG6aBMQ1pump)
> 
> ---
> 
> 
> ## What this is
> 
> `Ava` runs large populations of autonomous agents — each with its
> own memory, belief system, and social model — inside a shared environment
> and asks a simple question: **what happens at the population level that
> nobody programmed in directly?**
> 
> Individual agents are deliberately simple: a perceive-deliberate-act loop,
> a tiered memory store, and a goal-weighted decision procedure. None of
> them are told to specialize into roles, form alliances, write laws, or
> develop shared norms. Those are civilization-level properties this
> framework is built to detect and measure as they emerge from thousands of
> local interactions — the same phenomenon documented in Stanford's
> generative agents work and AI Digital Human Group's Project SID research
> into thousand-agent societies.
> 
> ```python
> import asyncio
> 
> from ava import Civilization, SimulationConfig
> from ava.agents.base import Action, AgentCore
> 
> class Settler(AgentCore):
>     async def deliberate(self, percepts, world_state):
>         return Action(kind="forage", payload={"energy_cost": 1.0})
> 
> async def main() -> None:
>     civ = Civilization(SimulationConfig(max_ticks=200))
>     for i in range(500):
>         civ.add_agent(Settler(name=f"settler-{i}", bus=civ.bus))
> 
>     reports = await civ.run()
>     print(f"ran {len(reports)} ticks, final population {reports[-1].population}")
> 
> asyncio.run(main())
> ```
> 
> 
> ## Interface preview
> 
> A reference dashboard for inspecting a running civilization in real time —
> shown here with **Ava**, one of the cognitive agents, surfaced alongside
> her current state, memory, and relationships:
> 
> The simulation engine itself is headless; this view is built on top of
> `SimulationTracer` and `Civilization.population_snapshot()` to render live
> agent state without coupling the core library to any particular frontend.
> 
> 
> ## Architecture
> 
> ```
> ┌─────────────────────────────────────────────────────────────────┐
> │                          Civilization                             │
> │  ┌───────────┐   ┌───────────────┐   ┌─────────────────────┐    │
> │  │  Culture  │   │  Governance   │   │  EmergenceDetector   │    │
> │  │ (norms)   │   │ (laws/votes)  │   │  (analysis layer)    │    │
> │  └─────┬─────┘   └───────┬───────┘   └──────────┬───────────┘    │
> │        └─────────────────┼──────────────────────┘                │
> │                  ┌────────┴─────────┐                             │
> │                  │  ExecutionEngine │  TaskGroup + Semaphore       │
> │                  └────────┬─────────┘                             │
> │        ┌──────────────────┼──────────────────┐                   │
> │   ┌────┴────┐        ┌────┴────┐        ┌────┴────┐              │
> │   │ Agent 1 │  ...   │ Agent N │  ...   │ Agent M │              │
> │   │ ┌─────┐ │        │ ┌─────┐ │        │ ┌─────┐ │              │
> │   │ │Memory│ │        │ │Memory│ │        │ │Memory│ │              │
> │   │ │Belief│ │        │ │Belief│ │        │ │Belief│ │              │
> │   │ │Social│ │        │ │Social│ │        │ │Social│ │              │
> │   │ └─────┘ │        │ └─────┘ │        │ └─────┘ │              │
> │   └────┬────┘        └────┬────┘        └────┬────┘              │
> │        └───────────────────┴──────────────────┘                   │
> │                       MessageBus (pub/sub)                        │
> └─────────────────────────────────────────────────────────────────┘
> ```
> 
> | Layer | Module | Responsibility |
> |---|---|---|
> | Agent | `ava.agents.base` | Perceive → deliberate → act lifecycle, state machine |
> | Memory | `ava.agents.memory` | Episodic stream, semantic facts, procedural skills |
> | Cognition | `ava.agents.cognitive` | Belief system, goal-weighted action selection |
> | Social | `ava.agents.social` | Relationship tracking, depth-1 theory of mind |
> | Communication | `ava.communication` | Async pub/sub bus, BFT-style consensus |
> | Civilization | `ava.civilization` | Tick orchestration, culture, governance |
> | Execution | `ava.execution` | Bounded-concurrency scheduler, tracing |
> | Analysis | `ava.analysis` | Change-point detection over population metrics |
> 
> 
> ## Memory architecture
> 
> Each agent's `MemoryStore` separates *what happened* from *what it means*:
> 
> ```python
> from ava.agents.memory import MemoryStore
> 
> memory = MemoryStore(owner_id="settler-12")
> 
> memory.episodic.record(
>     event_type="alliance",
>     content={"alliance": True, "actor": "settler-12", "target": "settler-47"},
>     tick=88,
> )
> 
> 
> # Reflection distills high-importance episodes into durable semantic facts,
> 
> # the way a generative agent periodically summarizes its memory stream.
> facts = memory.reflect(now_tick=89)
> 
> 
> # Retrieval blends recency, importance, and embedding relevance.
> recent = memory.episodic.retrieve(query_embedding=None, now_tick=89, top_k=10)
> ```
> 
> Procedural memory reinforces successful action sequences independently,
> so an agent that keeps succeeding at foraging in forest biomes converges
> on that skill without anyone hand-tuning a policy:
> 
> ```python
> from ava.agents.memory import ProceduralMemory, Skill
> 
> procedural = ProceduralMemory(learning_rate=0.2)
> procedural.learn(Skill(name="forage", trigger_conditions={"biome": "forest"}, action_sequence=[]))
> procedural.reinforce("forage", success=True)
> ```
> 
> 
> ## Governance and consensus
> 
> Laws are not declared — they are proposed, voted on, and ratified by
> agents through the same `GovernanceSystem` substrate, with quorum and
> majority thresholds that scale with population size:
> 
> ```python
> from ava.civilization.governance import GovernanceSystem
> 
> gov = GovernanceSystem(ratification_margin=0.5, min_quorum=3)
> proposal = gov.propose(text="share water equally", proposer_id="settler-3", tick=120)
> 
> for voter in ("settler-3", "settler-7", "settler-19"):
>     gov.cast_vote(proposal.id, voter, support=True)
> 
> ratified = gov.evaluate_proposals(tick=121)  # -> 1
> ```
> 
> For decisions that must tolerate adversarial or faulty 

## 延伸閱讀

相關概念：[[多模態]] · [[自動化測試]] · [[機器學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[nv-tlabs--Gamma-World|nv-tlabs/Gamma-World]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[GammaLabTechnologies--harmonist|GammaLabTechnologies/harmonist]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]]

[GitHub](https://github.com/TianhangZhuzth/Fundamental-Ava) · [官方網站](https://fundamentalresearchlabs.com)

## 相關收錄

> [!note]- 直接競品（同子分類：多代理系統）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "多代理系統" AND file.name != "TianhangZhuzth--Fundamental-Ava"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "TianhangZhuzth--Fundamental-Ava"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "TianhangZhuzth--Fundamental-Ava" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "TianhangZhuzth--Fundamental-Ava"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","自動化測試","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "TianhangZhuzth--Fundamental-Ava" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/TianhangZhuzth--Fundamental-Ava");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "TianhangZhuzth--Fundamental-Ava" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "TianhangZhuzth" AND file.name != "TianhangZhuzth--Fundamental-Ava"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/TianhangZhuzth--Fundamental-Ava");
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
> const me = dv.page("Repos/TianhangZhuzth--Fundamental-Ava");
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
> const me = dv.page("Repos/TianhangZhuzth--Fundamental-Ava");
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
> const me = dv.page("Repos/TianhangZhuzth--Fundamental-Ava");
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
> const me = dv.page("Repos/TianhangZhuzth--Fundamental-Ava");
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

> **2026-07-01** — 首次收錄
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

- [[2026-07-05|2026-07-05]] — 再次上榜，523 stars
- [[2026-07-04|2026-07-04]] — 再次上榜，520 stars
- [[2026-07-03|2026-07-03]] — 再次上榜，756 stars
- [[2026-07-02|2026-07-02]] — 再次上榜，718 stars
- [[2026-07-01|2026-07-01]] — 首次收錄，599 stars
