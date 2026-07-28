---
repo: William-Lu-stack/Flawless
url: https://github.com/William-Lu-stack/Flawless
owner: William-Lu-stack
owner_type: User
language: Python
license: NOASSERTION
description: "AI SRE AgenticOps for Kubernetes and cloud infrastructure."
homepage: ""
stars: 855
stars_per_day: 50
forks: 213
open_issues: 1
created: 2026-07-10
pushed_at: 2026-07-27
first_seen: 2026-07-14
week: "2026-W29"
month: "2026-07"
category: "基礎設施"
subcategory: "雲端運維"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-14
use_case: "提供 AI 驅動的 SRE 控制平面，讓 Kubernetes 和雲端基礎設施能自我解釋、修復並驗證恢復。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-21"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 1031
readme_length: 9961
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-14"
star_history: "2026-07-14:564,2026-07-14:569,2026-07-15:618,2026-07-16:646,2026-07-17:691,2026-07-18:710,2026-07-19:745,2026-07-20:785,2026-07-21:822,2026-07-22:847,2026-07-23:849,2026-07-24:850,2026-07-25:850,2026-07-26:850,2026-07-27:850,2026-07-28:855"
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
  - "提供 AI 驅動的 SRE 控制平面，讓 Kubernetes 和雲端基礎設施能自我解釋、修復並驗證恢復。"
---

# Flawless

**855** stars · **50** stars/天 · 建立 17 天前 · Python · NOASSERTION

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
> 提供 AI 驅動的 SRE 控制平面，讓 Kubernetes 和雲端基礎設施能自我解釋、修復並驗證恢復。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (50 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要高可用性和可審計性的中大型雲端基礎設施團隊。
> **一句話重點** Flawless 不僅僅是個運維工具，它通過 AI 驅動的方式將故障診斷和修復過程整合成一個可審計的循環。這種設計讓運維人員能夠更有效地管理複雜的雲端基礎設施。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/William-Lu-stack--Flawless");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "雲端運維" && p.file.name !== "William-Lu-stack--Flawless" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 雲端運維 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學、4 小時整合，得到高效的故障修復能力，值得考慮。

> [!abstract] 核心創新
> Flawless 將故障診斷和修復過程整合為一個可審計的 AgenticOps 循環。

## 專案簡介

Flawless 是一個 AI 驅動的 SRE 控制平面，專為 Kubernetes 和雲端基礎設施設計。它的核心機制是將警報、證據、拓撲、人工批准、控制修復和恢復驗證整合成一個可審計的 AgenticOps 循環。使用者可以透過 CLI 指令啟動快速檢查、建立環境變數並啟動 API 和本地代理服務，確保系統健康。這個工具的賣點在於它不僅提供建議，而是透過證據驅動的方式進行故障診斷和修復，並在每一步都需要人工批准，這樣能有效降低錯誤風險。技術上，Flawless 使用 FastAPI 和 Uvicorn 作為後端框架，並依賴多個 Python 和 Node.js 的庫來實現功能，這使得它在性能上具備良好的擴展性。

與其他類似工具相比，Flawless 的獨特之處在於它的「證據優先」策略，這意味著在執行任何操作之前，系統會先收集和分析相關證據，這樣能更準確地定位問題根源。這種設計使得 Flawless 在處理複雜的雲端系統故障時，能夠提供更高的可靠性和透明度。使用者在實際操作中可能會遇到需要配置 Kubernetes 憑證的問題，這在本地模式下自動處理，但在 Docker 模式下則需要手動設置。整體來看，Flawless 適合中大型團隊使用，尤其是那些需要高可用性和可審計性的雲端基礎設施。預計未來 6 個月內，這個專案將會持續增強其 AI 驅動的功能，並可能引入更多的自動化修復策略。

**技術棧**：`FastAPI` · `Uvicorn` · `Docker`

## 重點功能

- SRE Chat — ChatGPT 風格的操作控制台，提供集群、命名空間、工作負載和風險上下文。
- Controlled Remediation — 證據收集、變更預覽、人工批准、執行和後續驗證，並記錄失敗策略。
- Topology Impact — 提供 2D/3D 拓撲視圖，分析依賴關係和影響範圍。
- Skills Library — 可重用的操作技能庫，編碼專家知識供其他代理使用。
- Unified Resource API — 一個穩定的 API 合約，統一管理 Kubernetes、數據庫和雲資源。

## 快速開始

1. 執行快速啟動命令以檢查先決條件
```bash
curl -fsSL --retry 3 https://raw.githubusercontent.com/your-org/Flawless/main/scripts/install-macos.sh | bash -s -- --china
```
2. 配置環境變數以使用 AI 聊天功能
```bash
echo 'LLM_API_BASE=http://localhost:11434/v1' >> .env
```
3. 啟動 API 和本地代理服務
```bash
./scripts/quickstart.sh
```

## 程式碼範例

```python
{
  "前置條件": "需要配置 .env 文件以使用 AI 模型",
  "指令": "LLM_API_BASE=http://localhost:11434/v1 LLM_API_KEY= LLM_MODEL=qwen2.5:7b LLM_AUTH_TYPE=none",
  "預期輸出": "啟動 AI 聊天功能並連接到指定的模型端點。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 17 天就累積 855 stars（50/天），forks 213（24.9%），顯示出強烈的社群參與。這個專案由 William-Lu-stack 主導，他在雲端和 DevOps 領域有著豐富的經驗。Flawless 解決了傳統 SRE 工具在故障診斷和修復過程中的不足，特別是在需要人工批准和證據驅動的情境下。近期的推廣活動和社群討論也為這個專案帶來了關注。隨著雲端基礎設施的複雜性增加，這種 AI 驅動的解決方案變得越來越重要。高達 24.9% 的 forks/stars 比率顯示出許多開發者對此工具的實際修改和使用，這是非常積極的信號。

## 適合誰使用

**目標受眾**：需要高可用性和可審計性的中大型雲端基礎設施團隊。

> [!example] 使用場景
> - 雲端架構師用它來自動化 Kubernetes 故障修復，因為它能夠在收集證據後進行人工批准，降低了誤操作的風險。
> - SRE 團隊使用 Flawless 來監控和管理多個雲端資源，因為它提供了可視化的拓撲分析和持續的修復歷史，提升了運維效率。
> - DevOps 工程師用它來整合不同的 AI 模型進行故障預測，因為它支持多種模型配置，並能夠比較不同模型的效果。

## 架構分析

Flawless 的架構由前端控制台和控制平面 API 組成，前端提供 SRE 聊天、檢查、拓撲、發布和技能管理等功能。控制平面 API 負責證據管道、修復作業狀態機、發布門和 SLO 預算等。這種設計使得 Flawless 能夠在執行過程中保持高效能和可擴展性。

選擇 FastAPI 作為後端框架的原因在於其高效能和易於擴展的特性，而 Docker 的使用則確保了跨平台的兼容性。這樣的架構設計使得 Flawless 能夠快速響應雲端基礎設施的變化，並在故障發生時提供即時的修復方案。整體架構的擴展性瓶頸主要在於對於複雜系統的依賴關係分析，這需要持續的優化和改進。

## 技術深入分析

Flawless 的核心技術機制在於其證據驅動的故障修復流程，這是通過 FastAPI 和 Uvicorn 實現的高效能後端架構。它能夠處理多種雲端資源，並通過統一的 API 合約來管理這些資源。這種設計使得 Flawless 在處理複雜的雲端系統故障時，能夠提供更高的可靠性和透明度。效能方面，Flawless 能夠在短時間內完成故障診斷和修復，具體的資源需求取決於運行的工作負載和配置的 AI 模型。選擇 Docker 作為部署方式的好處在於其跨平台的兼容性，但也可能帶來一些配置上的挑戰。技術風險方面，Flawless 依賴於 Kubernetes 的穩定性和可用性，這意味著在 Kubernetes 出現問題時，Flawless 的功能也會受到影響。整合方面，Flawless 能夠與主流的 CI/CD 工具鏈相容，但在實際操作中，使用者需要注意配置的正確性，以避免出現不必要的錯誤。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和配置指引，並包含了快速啟動的範例。安裝過程相對順暢，但對於新手來說可能需要一些時間來理解配置的細節。整體來說，花 30 分鐘應該能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 提供證據驅動的故障修復流程，降低誤操作風險。
> - 支持多種 AI 模型配置，靈活性高。
> - 可視化拓撲分析，便於理解系統依賴關係。

> [!danger] 缺點
> - 安裝和配置過程相對複雜，需要一定的技術基礎。
> - 目前社群參與度尚低，開放的 Issue 數量少。
> - 對於新手來說，學習曲線可能較陡。

> [!warning] 注意事項
> - 僅支援 Python 3.11+ 和 Node.js 20+。
> - 在 Docker 模式下需要手動配置 Kubernetes 憑證。
> - 目前僅有 1 個開放的 Issue，顯示出社群參與度仍需提升。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於自動化代理生成，而 Flawless 專注於 SRE 和故障修復。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | Duel-Agents 提供多代理協作，而 Flawless 提供單一代理的證據驅動修復流程。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於自動化代理生成，而 Flawless 專注於 SRE 和故障修復。 | 如果需要快速生成多個代理來處理不同的任務，則可以選擇 agent-sprite-forge。 | medium，因為需要重新設計工作流。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理協作，而 Flawless 提供單一代理的證據驅動修復流程。 | 如果需要多個代理協同工作來解決複雜問題，則可以考慮 Duel-Agents。 | high，因為需要重構整個系統架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Flawless** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動化代理生成，而 Flawless 專注於 SRE 和故障修復。 | 提供多代理協作，而 Flawless 提供單一代理的證據驅動修復流程。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流。 | high，因為需要重構整個系統架構。 |
> | 適用場景 | 主要場景 | 如果需要快速生成多個代理來處理不同的任務，則可以選擇 age | 如果需要多個代理協同工作來解決複雜問題，則可以考慮 Duel |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Docker 模式下，Kubernetes 憑證需要手動配置，否則無法訪問集群資源。
  - 解法：確保在 Docker 中正確掛載 kubeconfig 憑證。
- [MEDIUM] 快速啟動過程中可能會出現依賴未滿足的錯誤。
  - 解法：檢查 requirements.txt 確保所有依賴已安裝。
- [MEDIUM] 在配置 .env 文件時，格式錯誤可能導致啟動失敗。
  - 解法：仔細檢查 .env 文件的格式和內容。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 適合 | 能夠提供高效的故障修復和監控功能，適合小型團隊使用。 |
| 大型企業的多雲環境管理 | 非常適合 | 具備強大的證據驅動修復能力，適合複雜的雲端基礎設施。 |
| 個人開發者的實驗性專案 | 普通 | 雖然功能強大，但安裝和配置過程可能對新手造成挑戰。 |
| 需要快速迭代的 DevOps 團隊 | 不適合 | 目前仍在 alpha 階段，可能不穩定。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~4 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學、4 小時整合，得到高效的故障修復能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> Flawless 本身不需要高權限，但在使用過程中可能需要存取 Kubernetes 憑證和其他敏感資料。依賴鏈中有多個第三方庫，需定期檢查安全性。整體來說，將其整合到 CI/CD pipeline 中是安全的，但仍需謹慎管理憑證。

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
| 最後推送 | 2026-07-27 |
| 建立日期 | 2026-07-10 |
| Repo 大小 | 1.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/William-Lu-stack/Flawless) |
| Topics | `agenticops` `ai` `aiops` `aisre` `cloud` `cloud-native` `devops` `kubernetes` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `python-dotenv` `fastapi` `uvicorn` `pydantic` `httpx` `anyio` `starlette` `typing_extensions` `kubernetes` `urllib3` `certifi` `python-dateutil` `pyyaml` `cryptography` `websocket-client`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 76
>     "TypeScript" : 14
>     "CSS" : 6
>     "Shell" : 3
>     "PowerShell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@William-Lu-stack](https://github.com/William-Lu-stack) | 16 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新但開放的 Issue 數量少。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-26 ~ 2026-07-27）
> **活躍天數** 2 天 · **最新 commit** fix: prioritize incident evidence in skill routing

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/William-Lu-stack/Flawless/issues/4) | Requesting a private security contact (please enable private | 0 | 0 |

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
> Current release: **3.2.11**.
> 
> Release 3.2.11 replaces fixed Skill weighting with a contextual Bayesian
> utility router. DeepSeek proposes competing root-cause hypotheses; live evidence
> coverage, semantic alignment, per-Skill incident outcomes, lineage failures,
> uncertainty, and risk determine which single Skill runs next. Mutation remains
> behind evidence contracts and per-step human approval. The progressive volume
> permission Skill now materializes and verifies the complete approved root
> contract (`runAsUser/runAsGroup/fsGroup=0`, `runAsNonRoot=false`) in the live
> Workload YAML before it can report recovery.
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
>     "api_key": "${INJECT_FROM_SECRET_MANAGER}",
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
> The response uses contract `flawless.resource.v1`, includes source and health
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
> ## The AgenticOps Loop
> 
> `discover → diagnose → preview → approve → execute → verify → learn`
> 
> - **Evidence first**: connect alerts, events, logs, metrics, topology, runbooks, and recent changes.
> - **Guarded action**: keep RBAC, policy, dry-run, human approval, and audit outside the model boundary.
> - **Verified recovery**: test the original symptom after execution instead of treating a successful command as success.
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
>   https://raw.githubusercontent.com/your-org/Flawless/main/scripts/install-macos.sh \
>   | bash -s -- --china
> ```
> 
> #### Linux or WSL (Docker Engine)
> 
> ```bash
> curl -fsSL --retry 3 \
>   https://raw.githubusercontent.com/your-org/Flawless/main/scripts/install-linux.sh \
>   | bash -s -- --china
> ```
> 
> #### Windows (PowerShell + Docker Desktop)
> 
> Run in PowerShell, not Command Prompt:
> 
> ```powershell
> & ([scriptblock]::Create((irm `
>   "https://raw.githubusercontent.com/your-org/Flawless/main/scripts/install-windows.ps1"))) -China
> ```
> 
> Remove `--china` or `-China` when mainland China mirrors are not needed. The
> default install directory is `~/Flawless` on macOS/Linux and
> `$HOME\Flawless` on Windows.
> 
> The portable macOS/Linux installer remains available when automatic Docker
> fallback is preferred:
> 
> ```bash
> curl -fsSL --retry 3 \
>   https://raw.githubusercontent.com/your-org/Flawless/main/scripts/install.sh | bash
> ```
> 
> The inst

## 延伸閱讀

相關概念：[[自動化]] · [[雲端運維]] · [[故障診斷]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xGF--boneyard|0xGF/boneyard]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[LaurieWired--tailslayer|LaurieWired/tailslayer]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[HKUDS--AgentSpace|HKUDS/AgentSpace]] · [[anomalyco--rift|anomalyco/rift]]

[GitHub](https://github.com/William-Lu-stack/Flawless)

## 相關收錄

> [!note]- 直接競品（同子分類：雲端運維）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "雲端運維" AND file.name != "William-Lu-stack--Flawless"
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
> const concepts = ["自動化","雲端運維","故障診斷"];
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
