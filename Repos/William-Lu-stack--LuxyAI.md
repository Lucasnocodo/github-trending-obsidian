---
repo: William-Lu-stack/Flawless
url: https://github.com/William-Lu-stack/Flawless
owner: William-Lu-stack
owner_type: User
language: Python
license: NOASSERTION
description: "AI SRE AgenticOps for Kubernetes and cloud infrastructure."
homepage: ""
stars: 785
stars_per_day: 87
forks: 178
open_issues: 2
created: 2026-07-10
pushed_at: 2026-07-19
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
use_case: "讓基礎設施自動解釋故障並安全修復，提供可驗證的恢復能力。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-21"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 4375
readme_length: 9800
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-14"
star_history: "2026-07-14:564,2026-07-14:569,2026-07-15:618,2026-07-16:646,2026-07-17:691,2026-07-18:710,2026-07-19:745,2026-07-20:785"
tags:
  - github
  - "category/基礎設施"
  - "lang/python"
  - "topic/agenticops"
  - "topic/ai"
  - "topic/aiops"
  - "topic/aisre"
  - "topic/cloud"
aliases:
  - "Flawless"
  - "William-Lu-stack/Flawless"
  - "讓基礎設施自動解釋故障並安全修復，提供可驗證的恢復能力。"
---

# Flawless

**785** stars · **87** stars/天 · 建立 9 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/William-Lu-stack--Flawless");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

`agenticops` `ai` `aiops` `aisre` `cloud` `cloud-native` `devops` `kubernetes` `llm` `mcp` `observability` `sre`

> [!summary] 一句話摘要
> 讓基礎設施自動解釋故障並安全修復，提供可驗證的恢復能力。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (87 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要自動化 Kubernetes 運維並提升故障恢復能力的中小型團隊。
> **一句話重點** Flawless 不僅是運維工具，更是將 AI 整合進 SRE 流程中的創新嘗試。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/William-Lu-stack--Flawless");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "運維工具" && p.file.name !== "William-Lu-stack--Flawless" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，20 小時整合，得到高效的運維自動化，值得考慮。

> [!abstract] 核心創新
> Flawless 將運維過程中的每一步連結成一個可審計的循環，並強調證據驅動的恢復驗證。

## 專案簡介

Flawless 是一個 AI 驅動的 SRE 控制平面，專為 Kubernetes 和雲基礎設施設計。它的核心機制是將警報、證據、拓撲、人工批准、控制修復和恢復驗證整合成一個可審計的 AgenticOps 循環。用戶可以透過簡單的 CLI 指令啟動整個系統，執行 `./scripts/quickstart.sh` 來進行環境檢查和啟動服務。這個工具的賣點在於它不僅提供建議，而是實現了從問題發現到恢復驗證的全過程。技術上，Flawless 使用 FastAPI 作為後端框架，並整合了多種依賴如 Kubernetes、Prometheus 和 Langfuse，這使得它在處理複雜的雲環境時具備高效能和可擴展性。

與其他 SRE 工具相比，如 0x0funky/agent-sprite-forge 和 2aronS/Duel-Agents，Flawless 提供了更全面的證據收集和恢復驗證機制，這對於需要高可用性的生產環境至關重要。使用者可以在多種環境中運行，並且支持 Docker 和原生 Python 環境，這使得它在不同的部署場景中都能靈活應用。儘管目前只有 2 個開放的問題，社群活躍度尚可，但未來的發展仍需關注。Flawless 的成熟度目前為 beta，適合中小型團隊進行試用和實驗，未來可能會進一步增強其功能和穩定性。對於需要自動化運維和故障恢復的團隊，Flawless 是一個值得考慮的選擇。

**技術棧**：`FastAPI` · `Docker` · `Kubernetes` · `Langchain` · `Prometheus`

## 重點功能

- SRE Chat — 提供 ChatGPT 風格的操作控制台，支持集群、命名空間和風險上下文。
- Controlled Remediation — 包括證據收集、變更預覽、人工批准和執行，並進行後續驗證。
- Topology Impact — 提供 2D/3D 拓撲視圖和依賴關係分析，幫助理解系統影響範圍。
- Skills Library — 可重用的操作技能庫，編碼專家知識，便於其他代理使用。
- Measurable Outcomes — 提供持久的修復歷史、變更資源歷史和恢復證據，便於後續分析。

## 快速開始

1. 安裝並啟動 Flawless
```bash
curl -fsSL --retry 3 https://raw.githubusercontent.com/William-Lu-stack/Flawless/main/scripts/install-macos.sh | bash -s -- --china
```
2. 運行快速啟動腳本
```bash
./scripts/quickstart.sh
```
3. 訪問控制台
```bash
http://127.0.0.1:8080
```

## 程式碼範例

```python
{
  "前置條件": "配置 .env 檔案以使用 OpenAI 兼容的模型",
  "指令": "LLM_API_BASE=http://localhost:11434/v1\nLLM_API_KEY=ollama\nLLM_MODEL=qwen2.5:7b\nLLM_AUTH_TYPE=api_key",
  "預期輸出": "模型將能夠根據配置進行操作。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 785 stars（87/天），forks 178（22.7%），顯示出強勁的增長潛力。作者 William-Lu-stack 是一位活躍的開發者，專注於 AI 和雲基礎設施領域。Flawless 解決了傳統 SRE 工具在自動化和證據驗證上的不足，從而提高了運維效率。近期的推廣活動和社群討論可能促進了這一增長。技術上，隨著 AI 和自動化技術的進步，這類工具的需求日益增加，Flawless 恰好迎合了這一趨勢。forks/stars 比率高達 22.7%，顯示出許多開發者對其進行實際修改和使用的興趣。

## 適合誰使用

**目標受眾**：需要自動化 Kubernetes 運維並提升故障恢復能力的中小型團隊。

> [!example] 使用場景
> - SRE 工程師用它來自動化 Kubernetes 的故障修復流程，因為手動處理故障不僅耗時，而且容易出錯。
> - DevOps 團隊用它來整合多種雲服務的監控和修復，因為它提供了統一的證據收集和恢復驗證機制。
> - IT 管理員用它來提升基礎設施的可觀察性，因為它支持多種數據源的整合，讓問題診斷更為高效。

## 架構分析

Flawless 的架構基於前端控制台和控制平面 API，前端提供 SRE 聊天、檢查、拓撲、釋放、技能和模型等功能。控制平面 API 負責證據管道、修復作業狀態機、釋放門檻和 SLO 預算等。這種設計使得系統能夠在多種環境中靈活運行，並且能夠快速響應不同的運維需求。

選擇 FastAPI 作為後端框架，能夠提供高效的性能和靈活的擴展性。整體架構的設計考量了可擴展性和可維護性，並通過多種適配器整合不同的數據源和服務。這樣的設計使得 Flawless 能夠在面對複雜的雲環境時，保持高效的運行和管理。

## 技術深入分析

Flawless 的核心技術機制是將 AI 模型用作計劃和解釋工具，並通過一系列的證據收集和驗證步驟來確保操作的安全性。它使用 FastAPI 作為後端框架，支持高併發的 API 請求，並能夠與 Kubernetes 和其他雲服務進行無縫整合。這種設計使得 Flawless 能夠在處理大量數據和請求時保持高效能，並且能夠快速響應運維需求。選擇使用 Docker 和 Kubernetes 作為部署環境，能夠簡化安裝過程並提高可擴展性。隨著使用者數量的增加，Flawless 可能會面臨性能瓶頸，特別是在高負載的情況下，這需要進一步的優化和擴展。整合方面，Flawless 能夠與主流的 CI/CD 工具鏈（如 GitHub Actions 和 Jenkins）進行良好的整合，並且支持多種 IDE 的擴展，這使得它在開發和運維流程中都能發揮作用。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，安裝過程相對順暢，但需要注意依賴的配置。文件中有基本的快速入門指導，對於新手來說，花 30 分鐘能夠順利啟動。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 整合多種運維功能於一體，提升效率。
> - 提供可審計的修復歷程，增強透明度。
> - 支持多種數據源的整合，提升可觀察性。

> [!danger] 缺點
> - 需要較高的安裝和配置成本。
> - 社群活躍度尚可，問題解決率低。
> - 目前功能仍在持續開發中，穩定性有待觀察。

> [!warning] 注意事項
> - 僅支援 Python 3.11+ 和 Node.js 20+。
> - 目前僅有 2 個開放的問題，社群回應速度尚未明確。
> - 需要 Docker 環境或手動配置多個依賴。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自動化運維功能，但在證據收集和恢復驗證上不如 Flawless 完整。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於多代理協作，但缺乏 Flawless 的可觀察性和修復歷程管理。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Python 實作，專注於自動化運維，但缺乏 Flawless 的證據驗證機制。 | 如果你的團隊需要一個輕量級的自動化工具，且不需要複雜的證據管理。 | medium，因為需要重新配置運維流程和工具整合。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於多代理協作，使用 Go 語言實作，性能較高，但功能不如 Flawless 完整。 | 如果你的團隊已經在使用多代理系統，並希望進一步提升協作效率。 | high，因為需要重構現有的運維架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Flawless** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Python 實作，專注於自動化運維，但缺乏 Flawless 的證據驗證機制。 | 專注於多代理協作，使用 Go 語言實作，性能較高，但功能不如 Flawless 完整。 |
> | 遷移成本 | - | medium，因為需要重新配置運維流程和工具整合。 | high，因為需要重構現有的運維架構。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個輕量級的自動化工具，且不需要複雜的證據管 | 如果你的團隊已經在使用多代理系統，並希望進一步提升協作效率。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合中小型團隊進行試用和實驗，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境中，Docker 容器可能無法正確啟動，導致無法訪問控制台。
  - 解法：確保 Docker 正在運行，並檢查 Docker 設定。
- [MEDIUM] 配置 .env 檔案時，若未正確設置 API 鍵，將無法使用 AI 功能。
  - 解法：仔細檢查 .env 檔案中的配置，確保 API 鍵正確。
- [MEDIUM] 在高負載情況下，可能會出現性能瓶頸，導致響應延遲。
  - 解法：考慮擴展資源或優化配置以提高性能。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | Flawless 提供的自動化運維功能能夠顯著減少人力成本。 |
| 大型企業的雲基礎設施管理 | 適合 | 雖然功能強大，但可能需要額外的配置和資源。 |
| 小型開發團隊的 CI/CD 流程 | 普通 | 在 CI/CD 環境中，可能需要額外的整合工作。 |
| 對運維自動化需求不高的團隊 | 不適合 | Flawless 的複雜性可能超出需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~20 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，20 小時整合，得到高效的運維自動化，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> Flawless 本身不需要高權限運行，但在使用過程中可能需要存取敏感資料如 API 鍵。依賴的第三方庫需定期檢查安全性，特別是在 CI/CD 環境中使用時需謹慎。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/William-Lu-stack--Flawless");
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
> const me = dv.page("Repos/William-Lu-stack--Flawless");
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
| Forks | 178 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-19 |
| 建立日期 | 2026-07-10 |
| Repo 大小 | 4.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/William-Lu-stack/Flawless) |
| Topics | `agenticops` `ai` `aiops` `aisre` `cloud` `cloud-native` `devops` `kubernetes` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `python-dotenv` `fastapi` `uvicorn` `pydantic` `httpx` `anyio` `starlette` `typing_extensions` `kubernetes` `urllib3` `certifi` `python-dateutil` `pyyaml` `cryptography` `websocket-client`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 72
>     "TypeScript" : 17
>     "CSS" : 7
>     "Shell" : 3
>     "PowerShell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@William-Lu-stack](https://github.com/William-Lu-stack) | 24 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，開放問題數量較少。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-17 ~ 2026-07-19）
> **活躍天數** 2 天 · **最新 commit** fix: enforce verified SRE recovery loop

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/William-Lu-stack/Flawless/issues/2) | `/ready` reports `ALLOWED_NAMESPACES`, but CMDB filtering ac | 0 | 0 |
> | [#1](https://github.com/William-Lu-stack/Flawless/issues/1) | Skill registry looks up skills by raw id but stores them und | 0 | 0 |

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
> **Flawless** is an AI-native SRE control plane for Kubernetes and cloud infrastructure. It connects alerts, evidence, topology, human approval, controlled remediation, and recovery verification in one auditable AgenticOps loop.
> 
> 它不是另一个只会给建议的运维聊天框。Flawless 将“发现问题、收集证据、生成预演、人工授权、执行变更、恢复验证、经验沉淀”连接成一个可审计闭环。
> 
> Created in Shanghai by **陆宣宇 (Xuanyu Lu)**.
> 
> 
> ## Quick Start
> 
> The quick-start command performs prerequisite checks, creates `.env` when
> needed, builds the console, starts the API plus all local agents/MCP services,
> and waits for the complete core health check to pass.
> 
> You need Git, plus either:
> 
> - Docker Engine or Docker Desktop with Compose v2; or
> - Python 3.11+ and Node.js 20+ for the automatic native fallback.
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
> ### Model Configuration
> 
> The console and baseline workflows start without a live model endpoint. To use
> AI chat, configure `.env` for an OpenAI-compatible local endpoint such as
> Ollama, then restart the stack:
> 
> ```env
> LLM_API_BASE=http://localhost:11434/v1
> LLM_API_KEY=ollama
> LLM_MODEL=qwen2.5:7b
> LLM_AUTH_TYPE=api_key
> ```
> 
> In Docker mode, the quick-start script automatically maps `localhost` model
> URLs to `host.docker.internal`. For an OAuth client-credentials gateway:
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
> ### Always-Latest One-Click Deployment
> 
> Each operating-system installer pulls only the canonical `main` branch, safely
> fast-forwards an existing clean checkout, verifies that `HEAD` exactly matches
> `origin/main`, and starts Flawless with Docker.
> 
> #### macOS (Docker Desktop)
> 
> ```bash
> curl -fsSL --retry 3 \
>   https://raw.githubusercontent.com/William-Lu-stack/Flawless/main/scripts/install-macos.sh \
>   | bash -s -- --china
> ```
> 
> #### Linux or WSL (Docker Engine)
> 
> ```bash
> curl -fsSL --retry 3 \
>   https://raw.githubusercontent.com/William-Lu-stack/Flawless/main/scripts/install-linux.sh \
>   | bash -s -- --china
> ```
> 
> #### Windows (PowerShell + Docker Desktop)
> 
> Run in PowerShell, not Command Prompt:
> 
> ```powershell
> & ([scriptblock]::Create((irm `
>   "https://raw.githubusercontent.com/W

## 延伸閱讀

相關概念：[[自動化測試]] · [[CI/CD]] · [[容器化]] · [[雲原生]] · [[機器學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xGF--boneyard|0xGF/boneyard]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[LaurieWired--tailslayer|LaurieWired/tailslayer]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[HKUDS--AgentSpace|HKUDS/AgentSpace]] · [[anomalyco--rift|anomalyco/rift]]

[GitHub](https://github.com/William-Lu-stack/Flawless)

## 相關收錄

> [!note]- 直接競品（同子分類：運維工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "運維工具" AND file.name != "William-Lu-stack--Flawless"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "William-Lu-stack--Flawless"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "William-Lu-stack--Flawless" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "William-Lu-stack--Flawless"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","CI/CD","容器化","雲原生","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "William-Lu-stack--Flawless" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/William-Lu-stack--Flawless");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "William-Lu-stack--Flawless" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "William-Lu-stack" AND file.name != "William-Lu-stack--Flawless"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/William-Lu-stack--Flawless");
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
> const me = dv.page("Repos/William-Lu-stack--Flawless");
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
> const me = dv.page("Repos/William-Lu-stack--Flawless");
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
> const me = dv.page("Repos/William-Lu-stack--Flawless");
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
> const me = dv.page("Repos/William-Lu-stack--Flawless");
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
