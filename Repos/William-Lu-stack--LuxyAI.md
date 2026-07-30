---
repo: William-Lu-stack/Flawless
url: https://github.com/William-Lu-stack/Flawless
owner: William-Lu-stack
owner_type: User
language: Python
license: NOASSERTION
description: "AI SRE AgenticOps for Kubernetes and cloud infrastructure."
homepage: ""
stars: 856
stars_per_day: 45
forks: 213
open_issues: 1
created: 2026-07-10
pushed_at: 2026-07-29
first_seen: 2026-07-14
week: "2026-W29"
month: "2026-07"
category: "基礎設施"
subcategory: "自動化運維"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-14
use_case: "讓基礎設施自我解釋、修復並證明恢復的 AI 原生 SRE 控制平臺。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-21"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 1588
readme_length: 9771
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-14"
star_history: "2026-07-14:564,2026-07-14:569,2026-07-15:618,2026-07-16:646,2026-07-17:691,2026-07-18:710,2026-07-19:745,2026-07-20:785,2026-07-21:822,2026-07-22:847,2026-07-23:849,2026-07-24:850,2026-07-25:850,2026-07-26:850,2026-07-27:850,2026-07-28:855,2026-07-29:856,2026-07-30:856"
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
  - "讓基礎設施自我解釋、修復並證明恢復的 AI 原生 SRE 控制平臺。"
---

# Flawless

**856** stars · **45** stars/天 · 建立 19 天前 · Python · NOASSERTION

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
> 讓基礎設施自我解釋、修復並證明恢復的 AI 原生 SRE 控制平臺。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (45 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在 Kubernetes 環境中實現自動化運維的中小型團隊。
> **一句話重點** Flawless 的最大優勢在於其將運維過程自動化，並提供可審計的操作循環，這在當前快速變化的雲環境中至關重要。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/William-Lu-stack--Flawless");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化運維" && p.file.name !== "William-Lu-stack--Flawless" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化運維 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學、20 小時整合，得到自動化運維的效果，值得考慮。

> [!abstract] 核心創新
> Flawless 將故障檢測、修復和恢復驗證整合成一個可審計的 AgenticOps 循環。

## 專案簡介

Flawless 是一個針對 Kubernetes 和雲基礎設施的 AI 原生 SRE 控制平臺，旨在將警報、證據、拓撲、人為批准、受控修復和恢復驗證整合成一個可審計的 AgenticOps 循環。用戶可以透過簡單的 CLI 指令啟動整個系統，例如使用 `./quick-start` 指令來進行必要的檢查並啟動 API 及所有本地代理服務。這個設計使得基礎設施能夠自動化故障檢測和修復過程，從而減少人為干預的需求。Flawless 使用 FastAPI 和 Uvicorn 作為後端框架，並依賴於 Kubernetes 的 API 進行資源管理，這樣的選擇使得系統能夠高效處理大量的請求和數據流。與其他工具相比，如 0x0funky/agent-sprite-forge，Flawless 不僅提供建議，還能執行變更並進行後續驗證，這使得其在實際運維中更具實用性。

Flawless 的設計還考慮了持續的可觀察性，整合了 Prometheus 和 Grafana 來監控系統狀態，並提供了可視化的數據流分析。儘管目前仍在開發中，Flawless 已經展示了其在故障恢復和修復過程中的潛力，特別是在需要快速響應的生產環境中。這個專案的成熟度尚處於 beta 階段，適合中小型團隊進行實驗和測試。未來幾個月內，預計會增加更多的功能和穩定性改進。對於需要在 Kubernetes 環境中實現自動化運維的團隊，Flawless 是一個值得考慮的選擇。

**技術棧**：`FastAPI` · `Uvicorn` · `Kubernetes` · `Prometheus` · `Grafana`

## 重點功能

- SRE Chat — 類似 ChatGPT 的操作控制台，提供集群、命名空間、工作負載和風險上下文。
- Inspection Queue — 在 Rancher/Kubernetes 範圍內進行計劃或手動掃描，並根據嚴重性進行排名。
- Controlled Remediation — 收集證據、變更預覽、人為批准、執行、變更後驗證，並記錄失敗策略。
- Topology Impact — 提供 2D/3D 拓撲、CMDB 風格的依賴關係和 blast-radius 分析。
- Release Governance — 包含 SLO、錯誤預算、canary/risk gate 和發佈審計鏈。
- Skills Library — 可攜帶的操作技能，編碼專家知識並可被其他代理重用。
- Knowledge Base — 支援上傳文本、Markdown、PDF、Word、Excel、日誌、YAML 和操作手冊。
- Observability — 整合 Prometheus 指標、Loki 日誌、Tempo 跟踪和 Grafana 連結。

## 快速開始

1. 檢查必要條件並啟動系統
```bash
./quick-start
```
2. 配置 LLM API 端點
```bash
LLM_API_BASE=http://localhost:11434/v1
```
3. 啟動 Docker 環境
```bash
docker-compose up
```

## 程式碼範例

```python
{
  "前置條件": "需要配置 LLM API 端點",
  "指令": "LLM_API_BASE=http://localhost:11434/v1",
  "預期輸出": "將 LLM API 端點設置為本地服務。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 19 天就累積 856 stars（45/天），forks 213（24.9%），顯示出強烈的社群興趣。這個專案由 William-Lu-stack 主導，他在 DevOps 和 AI 領域有豐富的經驗。Flawless 解決了現有運維工具無法有效整合故障檢測和修復過程的痛點，之前的解決方案往往只能提供建議而無法自動執行。最近的推廣活動和社群討論也促進了其曝光率。隨著 Kubernetes 和雲原生技術的普及，Flawless 的需求也隨之增加，特別是在需要高可用性和快速恢復的環境中。forks/stars 比率接近 25%，顯示出許多開發者對此專案進行實際修改和使用的興趣。

## 適合誰使用

**目標受眾**：需要在 Kubernetes 環境中實現自動化運維的中小型團隊。

> [!example] 使用場景
> - SRE 團隊用它來自動化故障檢測和修復流程，因為這樣可以減少人為干預，提升系統的穩定性和可用性。
> - DevOps 工程師用它來整合 Kubernetes 環境中的監控和修復，因為它提供了實時的數據流分析和可視化工具。
> - 安全團隊用它來確保基礎設施的合規性和安全性，因為其可審計的操作循環能夠提供詳細的變更記錄和恢復證據。

## 架構分析

Flawless 採用微服務架構，將不同的功能模組分離以提高可維護性。系統核心是基於 FastAPI 的 RESTful API，負責處理所有請求並與 Kubernetes 進行交互。數據流經由 Prometheus 和 Grafana 進行監控和可視化，這樣的設計使得系統能夠即時反應並進行故障修復。

選擇 FastAPI 是因為其高效的性能和簡單的開發體驗，而 Kubernetes 則提供了強大的容器管理能力。這種架構的代價在於需要額外的學習時間來熟悉各個模組的運作，並且在擴展性上可能會受到 Kubernetes 環境的限制。整體而言，Flawless 的架構設計適合需要高可用性和快速故障恢復的場景。

## 技術深入分析

Flawless 的核心技術機制是基於 FastAPI 和 Kubernetes 的微服務架構，這使得系統能夠高效地處理請求並進行資源管理。系統能夠處理大量的請求，並且在故障發生時能夠迅速響應。Flawless 的設計考慮了持續的可觀察性，整合了 Prometheus 和 Grafana 來監控系統狀態，並提供可視化的數據流分析。選擇 FastAPI 是因為其高效的性能和簡單的開發體驗，而 Kubernetes 則提供了強大的容器管理能力。這種架構的代價在於需要額外的學習時間來熟悉各個模組的運作，並且在擴展性上可能會受到 Kubernetes 環境的限制。Flawless 的設計還考慮了安全性，所有操作都需要人為批准，並且提供了詳細的變更記錄和恢復證據。這樣的設計能夠有效降低操作風險，並提高系統的穩定性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導和範例，安裝過程相對順暢，但需要注意 Kubernetes 環境的配置。文件中有多語言支持，對於新手來說，花 30 分鐘能夠基本上運行起來。

## 優缺點分析

> [!success] 優點
> - 集成了 AI 功能以自動化運維流程，減少人為干預。
> - 提供可視化的數據流分析，幫助用戶快速定位問題。
> - 可擴展性強，支持多種雲和容器化環境。

> [!danger] 缺點
> - 目前仍在 beta 階段，可能存在不穩定性。
> - 需要 Kubernetes 環境，對於不熟悉的用戶有學習曲線。
> - 依賴多個外部服務，增加整合的複雜性。

> [!warning] 注意事項
> - 目前仍在 beta 階段，可能存在不穩定性。
> - 需要 Kubernetes 環境進行部署，對於不熟悉 Kubernetes 的用戶有學習曲線。
> - 依賴於多個外部服務，如 Prometheus 和 Grafana，可能增加整合的複雜性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | Flawless 提供了更全面的故障檢測和修復功能，而 agent-sprite-forge 更專注於簡單的代理管理。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Flawless 整合了 AI 功能來自動化運維，而 boneyard 主要是用於資源清理和管理。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Python 實作，專注於簡單的代理管理，而 Flawless 則提供了更全面的故障檢測和修復功能。 | 如果你的團隊需要一個簡單的代理管理工具，而不是全面的運維解決方案。 | low，因為兩者的功能範圍相對簡單，轉移成本低。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於資源清理和管理，而 Flawless 則整合了 AI 功能來自動化運維。 | 如果你的需求主要是資源管理，而不需要 AI 驅動的運維功能。 | medium，因為需要重新設計運維流程以適應不同的工具特性。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Flawless** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Python 實作，專注於簡單的代理管理，而 Flawless 則提供了更全面的故障檢測和修復功能。 | 專注於資源清理和管理，而 Flawless 則整合了 AI 功能來自動化運維。 |
> | 遷移成本 | - | low，因為兩者的功能範圍相對簡單，轉移成本低。 | medium，因為需要重新設計運維流程以適應不同的工具特性。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個簡單的代理管理工具，而不是全面的運維解決 | 如果你的需求主要是資源管理，而不需要 AI 驅動的運維功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Kubernetes 環境中，可能會遇到資源限制導致的性能問題。
  - 解法：確保 Kubernetes 集群有足夠的資源配置。
- [MEDIUM] 在使用外部服務時，可能會遇到網路延遲問題。
  - 解法：考慮將服務部署在同一區域以減少延遲。
- [MEDIUM] 安裝過程中可能需要特定版本的依賴，導致安裝失敗。
  - 解法：仔細檢查 requirements.txt 中的版本要求。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 適合 | Flawless 提供的自動化運維功能能夠有效減少人力成本。 |
| 大型企業的生產環境 | 普通 | 雖然功能強大，但目前仍在 beta 階段，可能不夠穩定。 |
| 需要快速故障恢復的 DevOps 團隊 | 非常適合 | Flawless 的自動化修復功能能夠快速響應故障。 |
| 不熟悉 Kubernetes 的小型團隊 | 不適合 | 需要一定的 Kubernetes 知識來有效使用此工具。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~20 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學、20 小時整合，得到自動化運維的效果，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> Flawless 本身不需要高權限，但在運行時可能需要存取 Kubernetes 的 API。依賴的外部服務需確保安全性，並且在 CI/CD 中使用時需注意 API 金鑰的管理。

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
| Forks | 213 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-29 |
| 建立日期 | 2026-07-10 |
| Repo 大小 | 1.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/William-Lu-stack/Flawless) |
| Topics | `agenticops` `ai` `aiops` `aisre` `cloud` `cloud-native` `devops` `kubernetes` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `python-dotenv` `fastapi` `uvicorn` `pydantic` `httpx` `anyio` `starlette` `typing_extensions` `kubernetes` `urllib3` `certifi` `python-dateutil` `pyyaml` `cryptography` `websocket-client`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 78
>     "TypeScript" : 13
>     "CSS" : 5
>     "Shell" : 2
>     "PowerShell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@William-Lu-stack](https://github.com/William-Lu-stack) | 24 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多次提交和更新。
**連結**：[文件](https://github.com/William-Lu-stack/Flawless/blob/main/docs/PROJECT_TECHNICAL_MATERIALS_ZH.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-27 ~ 2026-07-29）
> **活躍天數** 3 天 · **最新 commit** fix: route rollout analysis to API service

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/William-Lu-stack/Flawless/issues/4) | Requesting a private security contact (please enable private | 0 | 1 |

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
> Maintained by the **Flawless Contributors** community.
> 
> Current release: **3.3.1**.
> 
> 中文技术架构、工程实现、测试证据和项目工具材料见
> [`docs/PROJECT_TECHNICAL_MATERIALS_ZH.md`](docs/PROJECT_TECHNICAL_MATERIALS_ZH.md)。
> 灰度发布的生产安装、配置和状态语义见
> [`docs/ARGO_ROLLOUTS_SRE_ZH.md`](docs/ARGO_ROLLOUTS_SRE_ZH.md)。
> 
> Release 3.3.1 replaces the display-only Deployment canary with real Argo
> Rollouts progressive delivery.  The existing blast-radius algorithm now
> produces an enforceable replica-weight envelope; each batch runs a live
> Prometheus/SLO AnalysisRun, the approved ceiling pauses for a second human
> promotion, and hard SLI failures automatically return capacity to stableRS.
> Rollback also restores the source Deployment template, so both runtime and
> desired state are recovered.  Argo Rollouts v1.9.1 is pinned by digest to a
> verified mainland-accessible mirror.  The application executor was tested
> against a real K3s controller for canary pause, status-subresource promotion,
> automatic abort, capacity recovery, and desired-state restoration.
> 
> Release 3.2.17 closes the post-LLM diagnosis stall. The LLM response, action
> normalization, and Skill Router are now independently observable stages; the
> Router runs outside the asyncio event loop with its own hard timeout, and the
> deterministic no-LLM fallback is bounded as well. Missing timing fields no
> longer render as a false `0 秒 / 0 秒` deadline, and an orphaned persisted job is
> resumed from fresh evidence with all old approvals invalidated. This release is
> covered by a real DeepSeek response-path test and a real K3s workflow that
> patches a broken Deployment through two human approvals and verifies the new
> Pod recovered.
> 
> Release 3.2.16 made the built-in Skill migration idempotent. Once a stale
> legacy definition has been materialized as a current standard Skill package,
> later restarts keep enforcing the shipped policy without emitting duplicate
> migration receipts or rewriting the package.
> 
> Release 3.2.15 made built-in Skill policy upgrade-safe. On the first process
> start after an image upgrade, application-owned Skills now replace stale
> legacy JSON and directory-package policy with the shipped version while
> retaining the operator's enabled state. This prevents an older executable
> CrashLoop router from shadowing the current handoff-only definition and
> stalling after evidence refresh. Executable plans also emit explicit
> root-cause and diagnosis-complete events before approval. The release is
> covered by a real K3s workflow that creates a file/database permission failure,
> tries the non-root policy first, escalates through a second human approval to
> the complete root securityContext, patches the Deployment, and verifies the
> replacement Pod.
> 
> Release 3.2.14 fixes the non-terminal CrashLoop diagnosis path. A generic
> CrashLoop Skill now performs resource discovery and scenario routing only; it
> cannot own a mutation or end an incident. Missing Skill evidence becomes an
> active Kubernetes refresh followed by immediate rerouting, and recently
> collected live evidence survives a transient retry failure instead of being
> replaced by an empty result. Direct write-path proof now deterministically
> promotes the volume-permission Skill, which can produce the complete
> `runAsUser/runAsGroup/fsGroup=0`, `runAsNonRoot=false` fallback behind a fresh
> human approval, then redeploy and verify the new Pod.
> 
> Release 3.2.13 adapted the strongest reusable patterns from the STAROps official
> Skill catalog into vendor-neutral built-in Skills for progressive Kubernetes,
> node and database inspection, observability-pipeline diagnosis, verified
> PromQL/LogQL/TraceQL generation, and topology/eBPF data modeling. The runtime
> now loads one primary Skill body by default, admits secondary Skills only
> through an explicit cross-domain dependency and evidence gate, exposes a
> cheapest-first evidence plan, and keeps every mutation behind the existing
> human approval, rollback, and recovery-verification boundary.
> 
> Release 3.2.12 added a priority Pod-log evidence channel that persists
> current/previous logs before optional CMDB, topology, storage, or node probes.
> Remote SRE-chat and inspection plans now choose Rancher from the target cluster
> identity rather than the UI source label, and the console shows the actual
> ERROR/WARNING excerpts or the exact log API/RBAC failure. The volume-permission
> Skill rejects a no-op non-root Patch when the live Workload already has the same
> UID/GID/fsGroup contract and can advance, behind a fresh human approval, to the
> complete root fallback (`runAsUser/runAsGroup/fsGroup=0`,
> `runAsNonRoot=false`) followed by rollout and new-Pod log verification.
> 
> Release 3.2 adds persistent remediation lineage: every failed strategy, action,
> verification result, and replacement plan stays linked across operator-approved
> follow-up jobs. The effectiveness ledger is persisted on the runtime volume so
> model comparisons and recovery records survive Pod restarts.
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
> LLM_API_KEY=
> LLM_MODEL=qwen2.5:7b
> LLM_AUTH_TYPE=none
> ```
> 
> In Docker mode, the quick-start script automatically maps `localhost` model
> URLs to `host.docker.internal`. For an OAuth client-credentials gateway:
> 
> ```env
> LLM_AUTH_TYPE=oauth_client_credentials
> OAUTH_TOKEN_URL=https://your-iam/realms/main/protocol/openid-connect/token
> OAUTH_CLIENT_ID=your-client
> OAUTH_CLIENT_SECRET=${INJECT_FROM_SECRET_MANAGER}
> LLM_API_BASE=https://your-llm-gateway/engines/default
> LLM_MODEL=your-model
> LLM_VERIFY_SSL=true
> ```
> 
> 
> ## Model Configuration
> 
> Flawless supports two common 

## 延伸閱讀

相關概念：[[自動化]] · [[Kubernetes]] · [[AI Ops]] · [[故障檢測]] · [[可觀察性]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[LaurieWired--tailslayer|LaurieWired/tailslayer]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[HKUDS--AgentSpace|HKUDS/AgentSpace]] · [[anomalyco--rift|anomalyco/rift]]

[GitHub](https://github.com/William-Lu-stack/Flawless)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化運維）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化運維" AND file.name != "William-Lu-stack--Flawless"
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
> const concepts = ["自動化","Kubernetes","AI Ops","故障檢測","可觀察性"];
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
