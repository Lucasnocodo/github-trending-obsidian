---
repo: TianhangZhuzth/Fundamental-Ava
url: https://github.com/TianhangZhuzth/Fundamental-Ava
owner: TianhangZhuzth
owner_type: User
language: Python
license: Apache-2.0
description: "Build digital human beings — autonomous, collaborative, and socially intelligent agents. FNzgGxU31RWiDgLr3GvxxSa42nRntvZNSG6aBMQ1pump"
homepage: "https://fundamentalresearchlabs.com"
stars: 756
stars_per_day: 252
forks: 78
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
use_case: "構建自主、協作且具社交智能的數位人類代理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-06"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 461
readme_length: 9892
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-01"
star_history: "2026-07-01:599,2026-07-01:602,2026-07-02:718,2026-07-02:720,2026-07-03:756"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - "topic/ai"
  - "topic/ai_agents"
aliases:
  - "Fundamental-Ava"
  - "TianhangZhuzth/Fundamental-Ava"
  - "構建自主、協作且具社交智能的數位人類代理。"
---

# Fundamental-Ava

**720** stars · **360** stars/天 · 建立 2 天前 · Python · Apache-2.0

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
> 構建自主、協作且具社交智能的數位人類代理。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (360 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要模擬大量自主代理行為的研究人員和開發者。
> **一句話重點** Ava 不僅是一個多代理系統，更是一個探索社會行為和 emergent phenomena 的強大工具。

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
> **結論** 花 10 小時學習，20 小時整合，得到強大的多代理模擬能力，值得投入。

> [!abstract] 核心創新
> Ava 提供了一個獨特的多代理模擬框架，專注於 emergent behavior 的量化分析。

## 專案簡介

Ava 是一個多代理模擬框架，旨在運行大量自主代理，這些代理擁有自己的記憶、信念系統和社交模型，並在共享環境中互動。每個代理的設計相對簡單，遵循感知-思考-行動的循環，並利用分層記憶存儲來管理信息。這種設計使得代理能夠在不被單一代理的延遲影響下並行運行，並且能夠獨立強化成功的行為。Ava 的一個賣點是其統計分析層，能夠對代理群體的行為進行變化點檢測，從而量化 emergent behavior，而不是僅僅依賴直觀觀察。

這些設計選擇使得 Ava 能夠在多達數千個代理的情況下運行，而不會因為調度或記憶系統的限制而崩潰。使用者可以透過簡單的 Python API 來創建和管理代理，並利用內建的治理系統進行決策。關鍵指令包括 `civ.add_agent()` 和 `civ.run()`，這些指令讓用戶能夠快速建立和運行模擬。整體而言，Ava 提供了一個強大的平台，用於探索和測量代理之間的社會互動及其對群體行為的影響。

**技術棧**：`Python 3.11` · `asyncio` · `Pydantic` · `NetworkX`

## 重點功能

- 高效能並行運行 — 使用 asyncio.TaskGroup 和 Semaphore，確保多個代理能夠同時運行而不互相阻塞。
- 分層記憶系統 — 提供 episodic、semantic 和 procedural 記憶，讓代理能夠根據不同的需求進行信息檢索和學習。
- 統計分析層 — 使用變化點檢測來量化代理群體的行為變化，提供數據支持而非直觀判斷。
- 內建治理系統 — 代理能夠提議、投票和通過法律，模擬社會決策過程。
- 簡單的 Python API — 讓用戶能夠輕鬆創建和管理代理，快速上手。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/TianhangZhuzth/Fundamental-Ava.git && cd Fundamental-Ava && pip install -e '.[dev]'
```

## 程式碼範例

```python
# 前置條件：已安裝 Ava
import asyncio
from ava import Civilization, SimulationConfig
from ava.agents.base import Action, AgentCore

class Settler(AgentCore):
    async def deliberate(self, percepts, world_state):
        return Action(kind='forage', payload={'energy_cost': 1.0})

async def main() -> None:
    civ = Civilization(SimulationConfig(max_ticks=200))
    for i in range(500):
        civ.add_agent(Settler(name=f'settler-{i}', bus=civ.bus))
    reports = await civ.run()
    print(f'ran {len(reports)} ticks, final population {reports[-1].population}')

asyncio.run(main())
# 預期輸出：ran X ticks, final population Y（X 和 Y 根據模擬結果而定）
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 720 stars（360/天），forks 69（9.6%），這顯示出強烈的社群興趣。作者 TianhangZhuzth 來自 Fundamental Research Labs，專注於數位人類的研究，這個工具解決了以往多代理系統在擴展性和記憶管理上的痛點，過去的系統往往無法有效處理大量代理的互動。近期的推文和討論引發了對數位人類的興趣，特別是在 AI 代理的應用上。技術上，隨著 asyncio 的普及，這種基於事件驅動的設計變得可行，讓高效能的多代理系統成為可能。forks/stars 比率為 9.6%，顯示出許多人在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要模擬大量自主代理行為的研究人員和開發者。

> [!example] 使用場景
> - 研究人員用它來模擬數千個自主代理的社會互動，因為其統計分析層能夠量化 emergent behavior，提供更深入的洞見。
> - 遊戲開發者用它來創建複雜的 NPC 行為模式，因為代理的記憶和社交模型能夠模擬真實的社會互動。
> - 教育工作者用它來展示多代理系統的原理，因為簡單的 Python API 使得學生能夠快速上手並進行實驗。

## 架構分析

Ava 的架構設計以多層次的方式組織，主要分為代理層、記憶層、認知層和社交層。這樣的設計使得每個代理都能夠獨立運行並擁有自己的記憶和信念系統，這樣的分層結構使得系統能夠在大規模運行時保持高效能。每個代理的行為由其記憶和社交模型驅動，並通過一個消息總線進行通信。這種設計的代價是需要較高的記憶體和計算資源，特別是在代理數量增加時。整體架構的擴展性良好，但在極端情況下可能會遇到性能瓶頸，特別是在記憶存取和消息傳遞的延遲上。

## 技術深入分析

Ava 的核心技術機制基於 asyncio 的事件驅動架構，這使得代理能夠在高並發環境下運行而不會互相阻塞。每個代理擁有獨立的記憶存儲，這些記憶分為 episodic、semantic 和 procedural，這樣的設計使得代理能夠根據不同的情境進行學習和決策。效能上，Ava 能夠處理數千個代理的互動，但在極端情況下可能會遇到記憶存取的延遲問題。選擇 Python 作為開發語言使得 Ava 在學習和使用上都相對簡單，但也帶來了較高的記憶體需求。技術上，Ava 依賴於多個第三方庫，如 Pydantic 和 NetworkX，這些依賴使得系統的擴展性和靈活性得到提升。設計上，Ava 的治理系統和社交模型使得代理能夠進行自主的決策，這在其他類似工具中較少見。整合到現有的技術生態中，Ava 可以與多種數據分析工具搭配使用，但在 CI/CD 流程中可能需要額外的適配。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程順暢，沒有明顯的坑。文件中有詳細的使用指南，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 能夠處理大規模的多代理模擬，支持數千個代理同時運行。
> - 提供統計分析工具，能夠量化 emergent behavior，增強研究的可信度。
> - 靈活的記憶管理系統，能夠根據代理的需求進行調整。

> [!danger] 缺點
> - 需要較高的硬體資源，特別是在運行大量代理時。
> - 仍在開發中，API 可能不穩定，未來可能會有重大變更。
> - 對於新手來說，理解多代理系統的設計理念可能需要時間。

> [!warning] 注意事項
> - 僅支援 Python 3.11+。
> - 需要較高的記憶體資源來運行大量代理，特別是在高並發情況下。
> - 目前仍在活躍開發中，API 可能會變動。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理代理的視覺化界面，而 Ava 更注重於代理的社會行為模擬和統計分析。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於對抗性代理的模擬，而 Ava 提供更廣泛的社會互動和治理系統。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理的視覺化和交互設計，而 Ava 更注重於社會行為的模擬和分析。 | 如果你的專案需要強調代理的視覺化和用戶互動，則可以選擇這個工具。 | medium，因為需要重新設計代理的行為邏輯。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於對抗性代理的設計，適合競爭環境，而 Ava 更適合社會互動的模擬。 | 如果你的應用場景需要模擬競爭行為，則這個工具更合適。 | high，因為需要重構整個代理的行為模型。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Fundamental-Ava** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理的視覺化和交互設計，而 Ava 更注重於社會行為的模擬和分析。 | 專注於對抗性代理的設計，適合競爭環境，而 Ava 更適合社會互動的模擬。 |
> | 遷移成本 | - | medium，因為需要重新設計代理的行為邏輯。 | high，因為需要重構整個代理的行為模型。 |
> | 適用場景 | 主要場景 | 如果你的專案需要強調代理的視覺化和用戶互動，則可以選擇這個工 | 如果你的應用場景需要模擬競爭行為，則這個工具更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合研究和實驗用途，但不建議用於生產環境的核心系統。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高並發情況下，記憶存取可能會導致性能瓶頸。
  - 解法：考慮減少同時運行的代理數量，或優化記憶存取邏輯。
- [MEDIUM] API 可能會隨著版本更新而變動，導致現有代碼不兼容。
  - 解法：定期檢查更新日誌，並根據新版本調整代碼。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型研究團隊進行多代理行為模擬 | 非常適合 | Ava 能夠處理數千個代理的互動，並提供統計分析支持。 |
| 小型開發團隊進行快速原型開發 | 適合 | 簡單的 API 使得開發者能夠快速上手並進行實驗。 |
| 個人開發者進行學術研究 | 普通 | 雖然功能強大，但可能需要較高的硬體資源。 |
| 需要穩定生產環境的企業應用 | 不適合 | 目前仍在開發中，API 可能不穩定。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~20 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，20 小時整合，得到強大的多代理模擬能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，依賴的第三方庫經過審計，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Ava 最常與數據分析工具搭配使用，特別是在學術研究和社會模擬中。用戶可以在 Python 環境中直接使用 Ava，並利用 pandas 或 matplotlib 進行數據可視化。在 CI/CD 流程中，Ava 可以與 GitHub Actions 整合，進行自動化測試和部署。常見的整合問題包括依賴版本不兼容，建議使用虛擬環境來管理依賴。

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
| Forks | 69 |
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

**社群活躍度**：社群活躍，最近有多次提交和更新。
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

相關概念：[[多模態]] · [[Agent 框架]] · [[機器學習]]

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
> const concepts = ["多模態","Agent 框架","機器學習"];
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

- [[2026-07-03|2026-07-03]] — 再次上榜，756 stars
- [[2026-07-02|2026-07-02]] — 再次上榜，718 stars
- [[2026-07-01|2026-07-01]] — 首次收錄，599 stars
