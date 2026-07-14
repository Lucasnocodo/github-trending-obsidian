---
repo: William-Lu-stack/LuxyAI
url: https://github.com/William-Lu-stack/LuxyAI
owner: William-Lu-stack
owner_type: User
language: Python
license: NOASSERTION
description: "AgenticOps for Kubernetes and cloud infrastructure."
homepage: ""
stars: 564
stars_per_day: 188
forks: 78
open_issues: 1
created: 2026-07-10
pushed_at: 2026-07-14
first_seen: 2026-07-14
week: "2026-W29"
month: "2026-07"
category: "基礎設施"
subcategory: "雲運維"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-14
use_case: "為 Kubernetes 和雲基礎設施提供自動化運維解決方案。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-21"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 3863
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-14"
star_history: "2026-07-14:564"
tags:
  - github
  - "category/基礎設施"
  - "lang/python"
aliases:
  - "LuxyAI"
  - "William-Lu-stack/LuxyAI"
  - "為 Kubernetes 和雲基礎設施提供自動化運維解決方案。"
---

# LuxyAI

**564** stars · **188** stars/天 · 建立 3 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/William-Lu-stack--LuxyAI");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 為 Kubernetes 和雲基礎設施提供自動化運維解決方案。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (188 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望自動化 Kubernetes 運維流程並提高故障恢復效率的 SRE 團隊。
> **一句話重點** Flawless 的設計理念在於將運維過程的每一步都連接起來，形成一個可審計的閉環，這在當前雲基礎設施管理中非常重要。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/William-Lu-stack--LuxyAI");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "雲運維" && p.file.name !== "William-Lu-stack--LuxyAI" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 雲運維 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~20h · **綁定風險** medium
> **結論** 花 20 小時學習，10 小時整合，得到高效的運維自動化，值得投資。

> [!abstract] 核心創新
> Flawless 將運維過程中的每一步都連接成一個可審計的閉環，強調證據驅動的操作。

## 專案簡介

Flawless 是一個針對 Kubernetes 和雲基礎設施的 AI 原生 SRE 控制平面，旨在自動化故障檢測、修復和恢復驗證。其核心機制是將警報、證據、拓撲、人工批准、控制修復和恢復驗證整合成一個可審計的 AgenticOps 循環。使用者可以透過 SRE 聊天界面進行操作，並使用 Inspection Queue 進行手動或排程掃描，根據嚴重性進行排序。關鍵指令包括 `GET /api/resources`，可獲取 Kubernetes 資源的健康狀態和摘要。Flawless 的賣點在於其強調證據驅動的操作，並在執行前進行乾運行和人為批准，這樣可以降低錯誤風險，確保操作的安全性和可追溯性。

**技術棧**：`FastAPI` · `Uvicorn` · `Docker`

## 重點功能

- SRE Chat — 提供 ChatGPT 風格的操作控制台，具備集群、命名空間和風險上下文。
- Inspection Queue — 支持手動或排程掃描，並根據嚴重性進行排序。
- Controlled Remediation — 包括證據收集、變更預覽和人為批准等功能，確保操作安全。
- Topology Impact — 提供 2D/3D 拓撲視圖和依賴關係分析。
- Release Governance — 包含 SLO、錯誤預算和緊急修復路徑的管理功能。
- Skills Library — 可重用的操作技能庫，編碼專家知識。
- Knowledge Base — 支持多種格式的文檔上傳，便於運維參考。
- Observability — 整合 Prometheus、Loki 和 Grafana 等監控工具。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/William-Lu-stack/Flawless.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 啟動應用
```bash
uvicorn backend.app.main:app --host 0.0.0.0 --port 8080
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝依賴和配置環境變數",
  "GET /api/resources?resource_type=pod&cluster=prod&namespace=orders&limit=200",
  "# 預期輸出：返回 Kubernetes 資源的健康狀態和摘要"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 564 stars（188/天），forks 78（13.8%），顯示出良好的社群關注度。作者 William-Lu-stack 是一位專注於雲基礎設施的開發者，這個專案解決了傳統運維工具無法有效整合多種資源和操作的痛點。Flawless 提供的 AgenticOps 循環使得運維過程更為自動化和可控，這在當前雲端運維需求日益增長的背景下尤為重要。社群的反饋和活躍度也顯示出這個專案的潛力。

## 適合誰使用

**目標受眾**：希望自動化 Kubernetes 運維流程並提高故障恢復效率的 SRE 團隊。

> [!example] 使用場景
> - SRE 團隊用它來自動化 Kubernetes 故障檢測和修復，因為手動處理故障耗時且容易出錯。
> - DevOps 工程師用它來整合多個雲資源的監控和管理，因為它提供了統一的 API 和可視化界面。
> - 企業 IT 部門用它來確保雲基礎設施的合規性和安全性，因為其可審計的操作流程能夠提供必要的合規證據。

## 架構分析

Flawless 的架構由前端控制台和控制平面 API 組成，前端提供 SRE 聊天、檢查、拓撲等功能，控制平面 API 處理證據管道和修復任務狀態機。這樣的設計使得操作流程透明且可追溯，減少了人為錯誤的可能性。資料流從前端控制台發送到控制平面，經過多個模組處理後返回結果，確保了操作的安全性和有效性。選擇 FastAPI 作為後端框架，因為其性能優越且易於擴展，但這也意味著需要一定的學習成本來掌握其使用。整體架構的擴展性良好，但在高負載情況下可能需要進一步的性能優化。

## 技術深入分析

Flawless 使用 FastAPI 作為後端框架，並整合了多種資料來源以支持證據驅動的操作。其核心技術機制包括一個證據管道，能夠從多個來源收集運維相關的數據，並在執行操作前進行乾運行和人為批准。這樣的設計使得操作的安全性得到保障，並且能夠在出現問題時快速回滾。效能上，Flawless 能夠處理多個 Kubernetes 集群的資源，但在高流量情況下可能需要進行性能優化。選擇 FastAPI 的原因在於其高效能和易於擴展的特性，但這也意味著需要一定的學習成本來掌握其使用。整體架構的擴展性良好，能夠支持未來的功能擴展，但在高負載情況下可能需要進一步的性能優化。整合到現有的 CI/CD 流程中相對簡單，但仍需注意與其他工具的兼容性問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，並包含基本的範例。安裝過程相對順暢，但需要注意環境變數的配置。文件目前僅提供英文版本，對於非英語使用者可能有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 提供全面的運維自動化解決方案，減少人為錯誤。
> - 可審計的操作流程，便於合規檢查。
> - 強大的拓撲分析功能，幫助理解資源間的依賴關係。

> [!danger] 缺點
> - 對於非 Kubernetes 環境的支援有限。
> - 學習曲線較陡，需要時間熟悉操作。
> - 在高流量環境下可能出現性能瓶頸。

> [!warning] 注意事項
> - 目前僅支援 Kubernetes 環境，對其他雲平台的支援尚未完善。
> - 需要一定的學習曲線來熟悉其操作流程和 API。
> - 在高流量環境下，可能會遇到性能瓶頸，需進行優化。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化代理的創建，而 Flawless 更加注重整合和運維流程的自動化。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供資源管理功能，但不具備 Flawless 的證據驅動和審計能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化代理的創建，而 Flawless 更加注重整合和運維流程的自動化。 | 如果你的團隊需要快速創建和管理多個代理，則 agent-sprite-forge 可能更合適。 | medium，因為需要重新設計操作流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供資源管理功能，但不具備 Flawless 的證據驅動和審計能力。 | 如果你的需求主要是資源管理而非運維自動化，則 boneyard 可能更適合。 | low，因為功能相似且易於轉換。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **LuxyAI** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動化代理的創建，而 Flawless 更加注重整合和運維流程的自動化。 | 提供資源管理功能，但不具備 Flawless 的證據驅動和審計能力。 |
> | 遷移成本 | - | medium，因為需要重新設計操作流程。 | low，因為功能相似且易於轉換。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要快速創建和管理多個代理，則 agent-sp | 如果你的需求主要是資源管理而非運維自動化，則 boneyar |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型團隊進行實驗，不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高流量情況下，可能會遇到性能瓶頸，導致操作延遲。
  - 解法：考慮進行性能優化或擴展資源。
- [MEDIUM] 對於非 Kubernetes 環境的支援有限，可能無法滿足所有用戶需求。
  - 解法：在 Kubernetes 環境中運行，或考慮其他工具。
- [MEDIUM] 學習曲線較陡，新手可能需要較長時間熟悉操作。
  - 解法：參考官方文檔和範例，逐步學習。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型企業的 SRE 團隊 | 非常適合 | 提供全面的運維自動化解決方案，能夠有效管理多個 Kubernetes 集群。 |
| 中小型企業的 DevOps 團隊 | 適合 | 雖然學習曲線較陡，但能夠提高運維效率。 |
| 對雲基礎設施管理有基本需求的初創公司 | 普通 | 功能強大但可能過於複雜，需評估實際需求。 |
| 個人開發者進行小型專案 | 不適合 | 功能過於龐大，可能不符合需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~20 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 20 小時學習，10 小時整合，得到高效的運維自動化，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> Flawless 本身不需要高權限，但在運行時需確保環境變數的安全性。依賴鏈中有多個外部庫，需定期檢查安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/William-Lu-stack--LuxyAI");
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
> const me = dv.page("Repos/William-Lu-stack--LuxyAI");
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
| Forks | 78 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-14 |
| 建立日期 | 2026-07-10 |
| Repo 大小 | 3.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/William-Lu-stack/LuxyAI) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `python-dotenv` `fastapi` `uvicorn` `pydantic` `httpx` `anyio` `starlette` `typing_extensions` `kubernetes` `urllib3` `certifi` `python-dateutil` `pyyaml` `websocket-client` `requests`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 69
>     "TypeScript" : 20
>     "CSS" : 10
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@William-Lu-stack](https://github.com/William-Lu-stack) | 8 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題解決率低，需關注後續發展。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-13 ~ 2026-07-14）
> **活躍天數** 2 天 · **最新 commit** Rebrand public project as Flawless

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/William-Lu-stack/LuxyAI/issues/1) | Skill registry looks up skills by raw id but stores them und | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Flawless
> 
> [](#quick-start)
> [](#development)
> [](#kubernetes-deployment)
> [](#docker)
> [](#langfuse)
> [](#license)
> 
> **Your infrastructure can explain itself, heal safely, and prove it recovered.**
> **让基础设施自己解释故障、安全完成修复，并证明它真的恢复了。**
> 
> **Flawless** is the open engineering foundation of the **COSCOAI SRE** platform: an AI-native SRE control plane for Kubernetes and cloud infrastructure. It connects alerts, evidence, topology, human approval, controlled remediation, and recovery verification in one auditable AgenticOps loop.
> 
> 它不是另一个只会给建议的运维聊天框。Flawless 将“发现问题、收集证据、生成预演、人工授权、执行变更、恢复验证、经验沉淀”连接成一个可审计闭环。
> 
> Created in Shanghai by **陆宣宇 (Xuanyu Lu)**.
> 
> 
> ## Quick Start
> 
> 
> ## Core Features
> 
> - **SRE Chat**: ChatGPT-style operations console with cluster, namespace, workload, and risk context.
> - **Inspection Queue**: scheduled or manual scans across Rancher/Kubernetes scopes with severity ranking.
> - **Controlled Remediation**: evidence collection, change preview, human approval, execution, post-change verification, and evidence-driven replanning that remembers failed strategies across follow-up jobs.
> - **Topology Impact**: 2D/3D topology, CMDB-style dependencies, eBPF/data-flow adapters, blast-radius analysis.
> - **Release Governance**: SLO, error budget, canary/risk gate, emergency fix path, and release audit chain.
> - **Skills Library**: portable operation skills that encode expert knowledge and can be reused by other agents.
> - **Knowledge Base**: upload text, Markdown, PDF, Word, Excel, logs, YAML, and runbooks for operations RAG.
> - **Model Lab**: configure multiple OpenAI-compatible or OAuth-protected model gateways and compare outcomes.
> - **Measurable Outcomes**: persistent remediation lineage, changed-resource history, recovery evidence, and model effectiveness comparisons.
> - **Observability**: Prometheus metrics, Loki logs, Tempo traces, Grafana links, and optional Langfuse traces.
> - **Extensible Infrastructure**: adapters for Kubernetes, Rancher, databases, virtual machines, storage, and middleware.
> 
> 
> ### 2. Configure
> 
> ```bash
> cp .env.example .env
> ```
> 
> For a simple local OpenAI-compatible endpoint:
> 
> ```env
> LLM_API_BASE=http://localhost:11434/v1
> LLM_API_KEY=ollama
> LLM_MODEL=qwen2.5:7b
> LLM_AUTH_TYPE=api_key
> ```
> 
> For an OAuth client-credentials gateway:
> 
> ```env
> LLM_AUTH_TYPE=oauth_client_credentials
> OAUTH_TOKEN_URL=https://your-iam/realms/main/protocol/openid-connect/token
> OAUTH_CLIENT_ID=your-client
> OAUTH_CLIENT_SECRET=your-secret
> LLM_API_BASE=https://your-llm-gateway/engines/default
> LLM_MODEL=your-model
> LLM_VERIFY_SSL=true
> ```
> 
> 
> ## Model Configuration
> 
> Flawless supports two common model access patterns.
> 
> 
> ### Base URL + API Key
> 
> Use this for OpenAI-compatible providers:
> 
> ```json
> [
>   {
>     "id": "openai-compatible",
>     "provider": "openai-compatible",
>     "model": "your-model",
>     "base_url": "https://api.example.com/v1",
>     "auth_type": "api_key",
>     "api_key": "from-secret",
>     "role": "candidate",
>     "max_tokens": 4096
>   }
> ]
> ```
> 
> Set the JSON in `MODEL_PROFILES_JSON` or add models from the **Model Lab** page. Secrets should come from Kubernetes Secret or your enterprise secret platform.
> 
> 
> ## Unified Resource API
> 
> `GET /api/resources` exposes Kubernetes, databases, virtual machines,
> middleware, storage, and cloud resources through one stable contract:
> 
> ```text
> GET /api/resources?resource_type=pod&cluster=prod&namespace=orders&limit=200
> ```
> 
> The response uses contract `luxyai.resource.v1`, includes source and health
> summaries, and supports cursor pagination. New infrastructure teams should add
> an adapter and normalize into this contract instead of introducing a parallel
> resource API.
> 
> 
> ## Why This Exists
> 
> Modern cloud systems fail in ways that are hard to reason about from a single log line:
> 
> - a Pod restart can hide a PVC, image, scheduling, network, quota, or rollout issue;
> - a small workload change can affect services, data pipelines, middleware, and downstream users;
> - repeated human firefighting leaves valuable operational knowledge outside the platform;
> - model output is useful only when it is constrained by evidence, policy, permissions, and rollback.
> 
> Flawless is built as an SRE control plane. It uses a model as a planner and explainer, but the platform keeps the execution boundary: RBAC, action catalog, dry-run, approval, audit, and recovery verification.
> 
> 
> ## Product Preview / 产品实景
> 
> These are real console captures from the running platform, not conceptual mockups.
> 
> | AI inspection and executable preview | SRE conversation and live evidence |
> |---|---|
> |  |  |
> 
> Current release: **3.2.0**.
> 
> Release 3.2 adds persistent remediation lineage: every failed strategy, action,
> verification result, and replacement plan stays linked across operator-approved
> follow-up jobs. The effectiveness ledger is persisted on the runtime volume so
> model comparisons and recovery records survive Pod restarts.
> 
> > **Compatibility note:** the public product name is **Flawless**. Existing
> > `LUXYAI_*` environment variables, the `charts/luxyai` directory, storage
> > paths, and Kubernetes resource identifiers remain supported so current
> > installations can upgrade without a destructive migration.
> 
> 
> ## The AgenticOps Loop
> 
> `discover → diagnose → preview → approve → execute → verify → learn`
> 
> - **Evidence first**: connect alerts, events, logs, metrics, topology, runbooks, and recent changes.
> - **Guarded action**: keep RBAC, policy, dry-run, human approval, and audit outside the model boundary.
> - **Verified recovery**: test the original symptom after execution instead of treating a successful command as success.
> 
> 
> ## Field Notes / 实战手记
> 
> Only published notes are listed below; links point to versioned files in this repository:
> 
> - [From Alert to Verified Recovery / 从告警到可验证恢复](blog/posts/2026-07-13-from-alert-to-verified-recovery.md)
> - [Should AI Be Allowed to Fix Kubernetes? / AI 可以修 Kubernetes 吗？](blog/posts/2026-07-13-ai-should-earn-the-right-to-act.md)
> - [The Next SRE Control Plane Is More Than a Chat Box / 下一代 SRE 控制平面](blog/posts/2026-07-13-not-another-chatbox.md)
> - [Building AgenticOps from Shanghai / 在上海构建 AgenticOps](blog/posts/2026-07-13-building-agenticops-in-shanghai.md)
> 
> 
> ## Architecture
> 
> ```text
> Frontend Console
>   ├─ SRE Chat / Inspection / Topology / Release / Skills / Models
>   │
>   ▼
> Control Plane API
>   ├─ Evidence pipeline
>   ├─ Remediation job state machine
>   ├─ Release gate and SLO budget
>   ├─ Knowledge and model registries
>   ├─ Observability store
>   └─ Integration health checks
>   │
>   ├─ MCP Kubernetes tools
>   ├─ A2A healing / incident / postmortem agents
>   ├─ Rancher / Prometheus / CMDB / eBPF flow adapters
>   ├─ Langfuse / Loki / Tempo / Grafana adapters
>   └─ Optional custom algorithm extension
> ```
> 
> 
> ### 1. Clone
> 
> ```bash
> git clone https://github.com/William-Lu-stack/Flawless.git
> cd Flawless
> ```
> 
> 
> ### 3. Build the Console
> 
> ```bash
> cd frontend/modern
> npm install
> npm run build
> cd ../..
> ```
> 
> The build outputs to `frontend/dist`, which is served by the Python control plane.
> 
> 
> ### 4. Run Locally
> 
> ```bash
> python -m venv .venv
> source .venv/bin/activate
> pip install -r requirements.txt
> 
> uvicorn backend.app.main:app --host 0.0.0.0 --port 8080
> ```
> 
> Open `http://localhost:8080`.
> 
> For local agent compatibility ports:
> 
> ```bash
> uvicorn agents.observability_agent:app --host 0.0.0.0 --port 8100 &
> uvicorn agents.healing_agent:app --host 0.0.0.0 --port 8101 &
> uvicorn agents.incident_agent:app --host 0.0.0.0 --port 8102 &
> uvicorn agents.postmortem_agent:app --host 0.0.0.0 --port 8103 &
> uvicorn mcp_servers.mcp_http_server:app --host 0.0.0.0 --port 8105 &
> uvicorn openwebui.openwebui_adapter:app --host 0.0.0.0 --port 8200 &
> ```
> 
> 
> ## Docker
> 
> Build the all-in-one backend image:
> 
> ```bash
> docker build --target backend-runtime -t flawless:latest .
> ```
> 
> Run it locally:
> 
> ```bash
> docker run --rm \
>   --env-file .env \
>   -p 8080:8080 \
>   flawless:latest \
>   python -m uvicorn backend.app.main:app --host 0.0.0.0 --port 8080
> ```
> 
> Push to GHCR or an internal registry:
> 
> ```bash
> IMAGE=ghcr.io/william-lu-stack/

## 延伸閱讀

相關概念：[[微服務]] · [[容器化]] · [[CI/CD]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[LaurieWired--tailslayer|LaurieWired/tailslayer]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[HKUDS--AgentSpace|HKUDS/AgentSpace]] · [[anomalyco--rift|anomalyco/rift]] · [[emdash-cms--emdash|emdash-cms/emdash]]

[GitHub](https://github.com/William-Lu-stack/LuxyAI)

## 相關收錄

> [!note]- 直接競品（同子分類：雲運維）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "雲運維" AND file.name != "William-Lu-stack--LuxyAI"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "William-Lu-stack--LuxyAI"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "William-Lu-stack--LuxyAI" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "William-Lu-stack--LuxyAI"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["微服務","容器化","CI/CD"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "William-Lu-stack--LuxyAI" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/William-Lu-stack--LuxyAI");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "William-Lu-stack--LuxyAI" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "William-Lu-stack" AND file.name != "William-Lu-stack--LuxyAI"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/William-Lu-stack--LuxyAI");
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
> const me = dv.page("Repos/William-Lu-stack--LuxyAI");
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
> const me = dv.page("Repos/William-Lu-stack--LuxyAI");
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
> const me = dv.page("Repos/William-Lu-stack--LuxyAI");
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
> const me = dv.page("Repos/William-Lu-stack--LuxyAI");
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

> **2026-07-14** — 首次收錄
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

- [[2026-07-14|2026-07-14]] — 首次收錄，564 stars
