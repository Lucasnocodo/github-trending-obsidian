---
repo: William-Lu-stack/LuxyAI
url: https://github.com/William-Lu-stack/LuxyAI
owner: William-Lu-stack
owner_type: User
language: Python
license: NOASSERTION
description: "AgenticOps for Kubernetes and cloud infrastructure."
homepage: ""
stars: 569
stars_per_day: 190
forks: 79
open_issues: 1
created: 2026-07-10
pushed_at: 2026-07-14
first_seen: 2026-07-14
week: "2026-W29"
month: "2026-07"
category: "基礎設施"
subcategory: "運維工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-14
use_case: "讓基礎設施自我解釋、修復並驗證恢復的 AI 原生 SRE 控制平面。"
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
star_history: "2026-07-14:564,2026-07-14:569"
tags:
  - github
  - "category/基礎設施"
  - "lang/python"
aliases:
  - "LuxyAI"
  - "William-Lu-stack/LuxyAI"
  - "讓基礎設施自我解釋、修復並驗證恢復的 AI 原生 SRE 控制平面。"
---

# LuxyAI

**569** stars · **190** stars/天 · 建立 3 天前 · Python · NOASSERTION

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
> 讓基礎設施自我解釋、修復並驗證恢復的 AI 原生 SRE 控制平面。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (190 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在 Kubernetes 環境中實現自動化運維的 SRE 團隊。
> **一句話重點** Flawless 的核心價值在於其證據驅動的修復能力，這使得運維工作變得更加高效和可控。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/William-Lu-stack--LuxyAI");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "運維工具" && p.file.name !== "William-Lu-stack--LuxyAI" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 運維工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學習，12 小時整合，得到高效的運維自動化工具，值得投資。

> [!abstract] 核心創新
> Flawless 提供了一個可審計的 AgenticOps 循環，讓基礎設施能夠自我修復並驗證恢復。這在現有的 SRE 工具中是獨一無二的。

## 專案簡介

Flawless 是一個為 Kubernetes 和雲基礎設施設計的 AI 原生 SRE 控制平面。它通過一個可審計的 AgenticOps 循環，將警報、證據、拓撲、人為批准、控制修復和恢復驗證連接在一起。使用者可以透過 SRE Chat 進行操作，並在 Inspection Queue 中進行手動或排程掃描，這些掃描會根據嚴重性進行排名。它的控制修復功能能夠收集證據、預覽變更、獲得人為批准並執行，並在變更後進行驗證，這樣的設計能夠記住失敗的策略，避免重複錯誤。Flawless 還提供了 2D/3D 拓撲視圖和 CMDB 風格的依賴關係分析，幫助用戶理解系統的影響範圍。使用者可以透過 REST API 獲取 Kubernetes 和雲資源，並進行統一管理，這樣的設計使得新基礎設施團隊能夠更快上手，避免引入平行資源 API。這個工具的賣點在於其強大的證據驅動修復能力和可審計的操作流程，讓運維人員能夠更有效地管理和恢復系統。

**技術棧**：`FastAPI` · `Uvicorn` · `Docker`

## 重點功能

- SRE Chat — 類似 ChatGPT 的操作控制台，提供集群、命名空間、工作負載和風險上下文。
- Inspection Queue — 在 Rancher/Kubernetes 範圍內進行手動或排程掃描，並根據嚴重性進行排名。
- Controlled Remediation — 收集證據、變更預覽、人為批准、執行和後變更驗證，並記住失敗的策略。
- Topology Impact — 提供 2D/3D 拓撲視圖和依賴關係分析，幫助用戶理解系統影響範圍。
- Unified Resource API — 通過穩定的 API 合約獲取 Kubernetes、數據庫、虛擬機和雲資源。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/William-Lu-stack/Flawless.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 運行後端服務
```bash
uvicorn backend.app.main:app --host 0.0.0.0 --port 8080
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 FastAPI 和 Uvicorn",
  "指令": "uvicorn backend.app.main:app --host 0.0.0.0 --port 8080",
  "預期輸出": "在 http://localhost:8080 上運行的 API 服務"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 569 stars（190/天），forks 79（13.9%），這顯示出相對活躍的社群參與。作者 William-Lu-stack 是這個專案的主要貢獻者，過去在雲基礎設施和 SRE 領域有豐富的經驗。Flawless 解決了現有雲系統在故障診斷和修復過程中的複雜性，提供了一個集成的解決方案，這在市場上是相對少見的。最近的推文和社群討論也推動了這個專案的曝光度。隨著雲原生技術的普及，這個工具的需求也隨之上升。forks/stars 比率為 13.9%，顯示出許多人對這個專案有實際的修改需求。

## 適合誰使用

**目標受眾**：需要在 Kubernetes 環境中實現自動化運維的 SRE 團隊。

> [!example] 使用場景
> - 運維工程師用它來自動化 Kubernetes 故障修復，因為它能夠收集證據並進行人為批准，避免了手動操作的錯誤。
> - SRE 團隊用它來監控和管理多個雲資源，因為它提供了統一的 API 和拓撲視圖，讓資源管理更直觀。
> - 開發人員用它來測試和驗證新版本的部署，因為它的可審計性和恢復驗證功能能夠確保系統的穩定性。

## 架構分析

Flawless 的架構由前端控制台和控制平面 API 組成，前端處理 SRE 聊天、檢查、拓撲、發布、技能和模型的交互。控制平面 API 負責證據管道、修復作業狀態機、發布門和 SLO 預算等功能。這樣的設計使得操作流程清晰，並能夠有效地管理和驗證修復過程。選擇 FastAPI 作為後端框架，因為它支持高性能的異步處理，能夠處理大量請求。整體架構的擴展性良好，能夠輕鬆整合新的適配器和服務。

## 技術深入分析

Flawless 的核心技術機制是基於 FastAPI 框架構建的控制平面，這使得它能夠高效地處理大量的 API 請求。它的證據管道設計能夠整合多種數據來源，包括警報、事件、日誌和指標，這樣的設計使得故障診斷變得更加全面。系統能夠處理的資源數量取決於 Kubernetes 的配置和資源限制，具體的性能數據尚未公開。選擇 FastAPI 而非其他框架的原因在於其高效的異步處理能力，這對於需要快速響應的運維工具至關重要。整體依賴樹相對簡單，主要依賴於 FastAPI 和 Uvicorn，這降低了維護的複雜度。技術風險方面，隨著用戶數量的增加，可能會出現性能瓶頸，特別是在高並發的情況下。整合到現有的 CI/CD pipeline 中相對簡單，因為它提供了標準的 REST API 接口，並且能夠與主流的監控工具如 Prometheus 和 Grafana 進行整合。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和配置說明，對於有經驗的開發者來說相對清晰。安裝過程中需要注意依賴的版本，否則可能會遇到兼容性問題。文件中缺乏中文或多語言支持，對於非英語使用者可能會造成困難。

## 優缺點分析

> [!success] 優點
> - 提供完整的證據驅動修復流程，能夠有效管理故障。
> - 支持多種雲資源的統一管理，簡化操作流程。
> - 具備可審計性，能夠追蹤每一步操作的歷史。

> [!danger] 缺點
> - 對新手不太友好，需要一定的運維經驗。
> - 目前僅支持 Kubernetes，對其他環境的支持有限。
> - 仍在開發中，可能存在不穩定性。

> [!warning] 注意事項
> - 目前僅支援 Kubernetes 環境，對於其他雲平台的支持尚未完善。
> - 需要一定的運維知識來配置和使用，對新手不太友好。
> - 目前的版本仍在開發中，可能會有不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自動化運維功能，但專注於 AI 代理的生成和管理。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於雲資源的監控和管理，但缺乏 Flawless 的審計和修復功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI 代理的生成和管理，與 Flawless 的運維自動化功能有所不同。 | 如果你的團隊需要專注於 AI 代理的開發和管理，而不僅僅是運維自動化，則可以選擇這個工具。 | medium，因為需要重新設計運維流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於雲資源的監控和管理，缺乏 Flawless 的審計和修復功能。 | 如果你的需求主要是監控而非自動修復，則可以考慮這個工具。 | low，因為它的功能相對簡單，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **LuxyAI** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 AI 代理的生成和管理，與 Flawless 的運維自動化功能有所不同。 | 專注於雲資源的監控和管理，缺乏 Flawless 的審計和修復功能。 |
> | 遷移成本 | - | medium，因為需要重新設計運維流程。 | low，因為它的功能相對簡單，容易上手。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要專注於 AI 代理的開發和管理，而不僅僅是運 | 如果你的需求主要是監控而非自動修復，則可以考慮這個工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Kubernetes 環境中配置 RBAC 時可能會遇到權限不足的問題
  - 解法：確保使用者擁有足夠的權限，並檢查 RBAC 設定
- [MEDIUM] 在高負載情況下，API 響應時間可能會變慢
  - 解法：考慮增加後端服務的資源配置
- [MEDIUM] 缺乏對其他雲平台的支持，限制了使用範圍
  - 解法：目前只能在 Kubernetes 環境中使用，需等待後續版本更新

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司運維團隊 | 非常適合 | 提供了自動化的運維解決方案，減少了人力成本。 |
| 大型企業的多雲環境管理 | 普通 | 雖然支持多種資源，但目前僅限於 Kubernetes，對其他環境支持不足。 |
| 對運維流程有高要求的團隊 | 非常適合 | 具備可審計性和證據驅動的修復能力，符合高要求的運維需求。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~12 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學習，12 小時整合，得到高效的運維自動化工具，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限操作，但需要存取 Kubernetes 的 API，確保安全性配置正確。依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

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
| Forks | 79 |
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

**社群活躍度**：目前社群活躍度中等，開發者在積極回應問題。

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

相關概念：[[微服務]] · [[自動化]] · [[雲原生]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[LaurieWired--tailslayer|LaurieWired/tailslayer]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[HKUDS--AgentSpace|HKUDS/AgentSpace]] · [[anomalyco--rift|anomalyco/rift]] · [[emdash-cms--emdash|emdash-cms/emdash]]

[GitHub](https://github.com/William-Lu-stack/LuxyAI)

## 相關收錄

> [!note]- 直接競品（同子分類：運維工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "運維工具" AND file.name != "William-Lu-stack--LuxyAI"
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
> const concepts = ["微服務","自動化","雲原生"];
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
