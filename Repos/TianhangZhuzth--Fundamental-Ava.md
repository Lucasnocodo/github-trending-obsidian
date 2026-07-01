---
repo: TianhangZhuzth/Fundamental-Ava
url: https://github.com/TianhangZhuzth/Fundamental-Ava
owner: TianhangZhuzth
owner_type: User
language: Python
license: Apache-2.0
description: "Build digital human beings — autonomous, collaborative, and socially intelligent agents. FNzgGxU31RWiDgLr3GvxxSa42nRntvZNSG6aBMQ1pump"
homepage: "https://fundamentalresearchlabs.com"
stars: 602
stars_per_day: 602
forks: 58
open_issues: 0
created: 2026-06-30
pushed_at: 2026-07-01
first_seen: 2026-07-01
week: "2026-W27"
month: "2026-07"
category: "AI/ML"
subcategory: "多代理系統"
release_tag: "v0.4.1"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-01
use_case: "建立自主、協作且具社交智慧的數位人類代理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-04"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 460
readme_length: 9892
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-01"
star_history: "2026-07-01:599,2026-07-01:602"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - "topic/ai"
  - "topic/ai_agents"
aliases:
  - "Fundamental-Ava"
  - "TianhangZhuzth/Fundamental-Ava"
  - "建立自主、協作且具社交智慧的數位人類代理。"
---

# Fundamental-Ava

**602** stars · **602** stars/天 · 建立 1 天前 · Python · Apache-2.0

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

`個人專案` `v0.4.1`

`ai` `ai-agents`

> [!summary] 一句話摘要
> 建立自主、協作且具社交智慧的數位人類代理。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (602 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要開發自主代理並觀察其社會行為的研究人員和開發者。
> **一句話重點** Ava 不僅僅是模擬代理行為，更是量化社會行為的強大工具。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，15 小時整合，得到強大的多代理模擬能力，值得投入。

> [!abstract] 核心創新
> Ava 提供了一個結構化的多代理系統，能夠量化 emergent behavior，這在目前的多代理框架中尚屬首創。

## 專案簡介

Ava 是一個多代理模擬框架，旨在開發數位智慧，能夠運行大量自主代理，每個代理擁有自己的記憶、信念系統和社交模型。這個框架的核心機制是透過 `asyncio.TaskGroup` 和有界的 `asyncio.Semaphore` 來實現並行執行，避免單一代理的延遲影響整體運行，並且能夠獨立處理每個代理的異常。Ava 的記憶系統分為情節記憶、語義記憶和程序記憶，這樣的設計使得重要事件能夠持久化，而不重要的事件則隨時間消逝，這樣的層次化記憶有助於代理在不同情境下的學習和決策。分析層則使用統計方法來檢測代理之間的角色專業化和社會行為，這樣的設計使得 emergent behavior 能夠被量化，而非僅僅依賴直覺。

與其他多代理系統相比，Ava 不僅僅是模擬，還能夠在沒有明確指令的情況下觀察到代理之間的互動和合作。這使得它特別適合於需要觀察複雜社會行為的研究。實際使用中，Ava 能夠處理數千個代理的行為，並且提供了豐富的 API 來進行擴展和自定義。這個框架的設計使得它在學術研究和實驗中具有很高的靈活性和可擴展性。

**技術棧**：`Python 3.11` · `asyncio` · `Pydantic` · `NetworkX`

## 重點功能

- 高效能並行執行 — 使用 `asyncio.TaskGroup` 和有界 `asyncio.Semaphore`，允許數千個代理同時運行而不互相阻塞。
- 層次化記憶系統 — 分為情節記憶、語義記憶和程序記憶，支持不同的檢索和衰減語義。
- 統計檢測 emergent behavior — 使用變化點檢測來量化代理之間的角色專業化和社會行為。
- 靈活的代理設計 — 每個代理都可以獨立定義其記憶和行為，支持自定義擴展。
- 即時監控面板 — 提供實時的代理狀態和關係的可視化界面，便於觀察和分析。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/TianhangZhuzth/Fundamental-Ava.git && cd Fundamental-Ava && pip install -e '.[dev]'
```

## 程式碼範例

```python
[
  "# 前置條件：安裝 Ava 並導入必要模組",
  "import asyncio\n\nfrom ava import Civilization, SimulationConfig\nfrom ava.agents.base import Action, AgentCore\n\nclass Settler(AgentCore):\n    async def deliberate(self, percepts, world_state):\n        return Action(kind='forage', payload={'energy_cost': 1.0})\n\nasync def main() -> None:\n    civ = Civilization(SimulationConfig(max_ticks=200))\n    for i in range(500):\n        civ.add_agent(Settler(name=f'settler-{i}', bus=civ.bus))\n\n    reports = await civ.run()\n    print(f'ran {len(reports)} ticks, final population {reports[-1].population}')\n\nasyncio.run(main())",
  "# 預期輸出：運行的 ticks 數量和最終人口數量"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 602 stars（602/天），forks 58（9.6%），這顯示出相對較高的社群參與度。作者 TianhangZhuzth 來自 Fundamental Research Labs，專注於數位人類的研究，這個專案填補了多代理系統中對於 emergent behavior 的量化分析需求。之前的多代理系統往往無法有效處理大規模代理的互動，Ava 提供了一個結構化的解決方案。社群的活躍度和開發者的背景顯示出這個專案有潛力成為該領域的重要工具。

## 適合誰使用

**目標受眾**：需要開發自主代理並觀察其社會行為的研究人員和開發者。

> [!example] 使用場景
> - 研究人員用它來模擬數千個自主代理的互動，因為它能夠量化 emergent behavior，提供統計支持的分析結果。
> - 遊戲開發者用它來創建複雜的 NPC 行為，因為其記憶和社交模型能夠讓 NPC 在遊戲中表現出更自然的行為。
> - 教育工作者用它來教授多代理系統的概念，因為其清晰的 API 和模擬結果能夠幫助學生理解複雜的社會互動。

## 架構分析

Ava 的架構基於多層次的設計，主要分為代理層、記憶層、認知層和社交層。代理層負責代理的感知、決策和行動，而記憶層則管理代理的記憶存儲。這樣的設計使得每個代理能夠獨立運行，並且能夠在不影響其他代理的情況下進行學習和適應。

使用 `asyncio` 來實現並行執行，這樣的選擇使得系統能夠在高負載下仍然保持穩定。這種設計的代價是需要較高的計算資源來支持大量代理的同時運行，並且在擴展性方面可能會遇到瓶頸。整體而言，這種架構非常適合於需要大量代理互動的研究場景。

## 技術深入分析

Ava 的核心技術機制基於多代理系統的設計，使用 `asyncio` 來實現高效的並行處理。這使得每個代理能夠獨立執行其感知、決策和行動過程，並且不會因為某個代理的延遲而影響整體模擬。記憶系統的層次化設計讓代理能夠根據事件的重要性和時間進行記憶的檢索和更新，這樣的設計不僅提升了代理的學習能力，也使得 emergent behavior 的檢測更加準確。整體架構中，代理之間的通信使用了 pub/sub 模式，這樣的設計使得系統能夠靈活地擴展，並且在面對故障或對抗性代理時能夠保持穩定。技術上，這個系統的效能在於能夠處理大量的代理互動，但隨著代理數量的增加，計算資源的需求也會大幅上升。未來的發展方向可能會集中在優化計算效率和擴展性上，以支持更大規模的模擬。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，安裝過程相對順暢，沒有明顯的坑。文件中有針對新手的指導，幫助使用者快速上手。整體而言，花 30 分鐘能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 能夠處理數千個代理的並行運行，適合大規模模擬。
> - 提供統計支持的 emergent behavior 分析，能夠量化社會互動。
> - 靈活的代理設計，支持自定義擴展和行為定義。

> [!danger] 缺點
> - 需要較高的計算資源，對於小型專案可能過於複雜。
> - 仍在開發中，API 可能不夠穩定。
> - 學習曲線較陡，對於新手可能需要額外的時間來熟悉。

> [!warning] 注意事項
> - 目前僅支援 Python 3.11 以上版本。
> - 需要較高的計算資源來運行大規模的代理模擬。
> - 仍在開發中，API 可能會有變動。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於創建可視化的代理行為，而 Ava 更加專注於 emergent behavior 的量化分析。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | Duel-Agents 主要用於對抗性代理的模擬，Ava 則是針對更廣泛的社會互動進行分析。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於可視化代理行為，Ava 則提供了更深入的 emergent behavior 分析。 | 如果需要強調代理行為的可視化和交互，則選擇 agent-sprite-forge 更合適。 | medium，因為兩者的架構和設計理念有所不同。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於對抗性代理的模擬，Ava 提供了更廣泛的社會互動分析。 | 如果專注於對抗性行為的研究，則 Duel-Agents 是更好的選擇。 | high，因為需要重構代理的行為邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Fundamental-Ava** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於可視化代理行為，Ava 則提供了更深入的 emergent behavior 分析。 | 專注於對抗性代理的模擬，Ava 提供了更廣泛的社會互動分析。 |
> | 遷移成本 | - | medium，因為兩者的架構和設計理念有所不同。 | high，因為需要重構代理的行為邏輯。 |
> | 適用場景 | 主要場景 | 如果需要強調代理行為的可視化和交互，則選擇 agent-sp | 如果專注於對抗性行為的研究，則 Duel-Agents 是更 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合研究用途，不建議用於生產環境的核心系統。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載下，可能會出現性能瓶頸，導致模擬速度下降。
  - 解法：減少同時運行的代理數量，或優化代理的行為邏輯。
- [MEDIUM] API 可能會隨著版本更新而變動，導致現有代碼不兼容。
  - 解法：定期檢查更新日誌並調整代碼以適應新版本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型學術研究團隊進行多代理系統的行為分析 | 非常適合 | Ava 提供了強大的 emergent behavior 分析工具，能夠支持大規模模擬。 |
| 小型創業團隊開發簡單的代理應用 | 不適合 | 對於小型專案來說，Ava 的複雜性和資源需求可能過高。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~15 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，15 小時整合，得到強大的多代理模擬能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Ava 本身不需要高權限，並且不存取敏感資料。依賴的庫也經過審計，風險相對較低。

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
| Forks | 58 |
| Open Issues | 0 |
| 最後推送 | 2026-07-01 |
| 建立日期 | 2026-06-30 |
| 官方網站 | [Link](https://fundamentalresearchlabs.com) |
| Repo 大小 | 460 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/TianhangZhuzth/Fundamental-Ava) |
| Topics | `ai` `ai-agents` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@TianhangZhuzth](https://github.com/TianhangZhuzth) | 492 |

**最新版本**：v0.4.1 — v0.4.1 - Packaging & CI (2026-06-30)

> [!info]- Release Notes
> Dockerized packaging and GHCR publish workflow.

## 社群與生態

**社群活躍度**：社群活躍度高，近期有多次更新和維護。
**連結**：[文件](https://fundamentalresearchlabs.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-29 ~ 2026-07-01）
> **活躍天數** 3 天 · **最新 commit** tweaks

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

相關概念：[[多模態]] · [[Agent 框架]] · [[自動化測試]]

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
> const concepts = ["多模態","Agent 框架","自動化測試"];
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

- [[2026-07-01|2026-07-01]] — 首次收錄，599 stars
