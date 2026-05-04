---
repo: future-agi/future-agi
url: https://github.com/future-agi/future-agi
owner: future-agi
owner_type: Organization
language: Python
license: Apache-2.0
description: "Open-source, end-to-end platform for evaluating, observing, and improving LLM and AI agent applications. Tracing · Evals · Simulations · Datasets · Gateway · Guardrails. Self-hostable. Apache 2.0."
homepage: "https://futureagi.com"
stars: 816
stars_per_day: 82
forks: 140
open_issues: 67
created: 2026-04-23
pushed_at: 2026-05-03
first_seen: 2026-04-30
week: "2026-W18"
month: "2026-04"
category: "AI/ML"
subcategory: "LLM 評估"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-30
use_case: "提供一個開源平台來評估、觀察和改善 LLM 和 AI 代理應用程式。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-07"
contributor_count: 5
engagement: "medium"
issue_close_rate: 4
repo_size_kb: 71755
readme_length: 10000
bus_factor: 3
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-30"
star_history: "2026-04-30:748,2026-05-04:816"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
  - "topic/ai"
  - "topic/ai_gateway"
  - "topic/evals"
  - "topic/llm"
  - "topic/observability"
aliases:
  - "future-agi"
  - "future-agi/future-agi"
  - "提供一個開源平台來評估、觀察和改善 LLM 和 AI 代理應用程式。"
---

# future-agi

**816** stars · **82** stars/天 · 建立 10 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/future-agi--future-agi");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

`ai` `ai-gateway` `evals` `llm` `observability` `simulation`

> [!summary] 一句話摘要
> 提供一個開源平台來評估、觀察和改善 LLM 和 AI 代理應用程式。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (82 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要一個全面的解決方案來開發和評估 AI 代理的中小型開發團隊。
> **一句話重點** Future AGI 的整合性和開源特性使其成為開發和評估 AI 代理的理想選擇。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/future-agi--future-agi");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "LLM 評估" && p.file.name !== "future-agi--future-agi" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 LLM 評估 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，20 小時整合，得到一個全面的 AI 代理開發平台，值得投資。

> [!abstract] 核心創新
> 提供一個全方位的 AI 代理開發和評估平台，整合模擬、評估、保護和監控功能。

## 專案簡介

Future AGI 是一個開源、端到端的平台，旨在解決 AI 代理在生產環境中常見的問題，通過一個統一的反饋循環來提升性能。用戶可以選擇雲端快速部署或自我託管，並透過 `docker compose up -d` 命令輕鬆啟動。平台的核心功能包括模擬、評估、保護和監控，這些功能整合在一個生態系統中，避免了傳統上需要多個工具的繁瑣。技術上，Future AGI 使用 Python 和 Go，並依賴 PostgreSQL 和 ClickHouse 作為數據存儲，支持高達 29,000 請求每秒的性能，並且 P99 延遲低於 21 毫秒。

與其他工具相比，Future AGI 提供了內建的評估套件和模擬功能，這在同類產品中是獨特的，能夠在部署前進行全面的測試。使用者可以利用 50 多種評估指標來評估 AI 代理的表現，並且支持多種 LLM 提供者的集成。這使得 Future AGI 特別適合需要快速迭代和高可靠性的 AI 應用開發團隊。隨著開源社群的支持和活躍的開發，這個平台的未來發展值得期待。

**技術棧**：`Python 3.11+ (Django 4.2 + Channels)` · `Go 1.23+ (gateway)` · `PostgreSQL` · `ClickHouse` · `Redis` · `RabbitMQ` · `Temporal`

## 重點功能

- 一體化平台 — 整合模擬、評估、保護和監控功能，避免使用多個工具。
- 高性能 — 支持每秒 29,000 請求，P99 延遲低於 21 毫秒，適合生產環境。
- 多種評估指標 — 提供 50+ 指標來評估 AI 代理的表現，包括基於 LLM 的評估。
- 開源和自我託管 — 允許用戶完全控制數據和部署環境，符合數據主權要求。
- 即時監控 — 利用 OpenTelemetry 進行即時性能監控，無需額外配置。

## 快速開始

1. 克隆專案並啟動 Docker
```bash
git clone https://github.com/future-agi/future-agi.git && cd future-agi && cp futureagi/.env.example futureagi/.env && docker compose up -d
```
2. 訪問本地應用
```bash
Open http://localhost:3031
```
3. 使用 Helm 部署（進階）
```bash
helm repo add futureagi && helm install fagi futureagi/future-agi
```

## 程式碼範例

```python
{
  "前置條件": "已安裝必要的 Python 套件",
  "程式碼": "from fi_instrumentation import register\nfrom traceai_openai import OpenAIInstrumentor\n\nregister(project_name=\"my-agent\")\nOpenAIInstrumentor().instrument()\n\nresponse = client.chat.completions.create(\n    model=\"gpt-4o\",\n    messages=[{\"role\": \"user\", \"content\": query}],\n)",
  "預期輸出": "將會追蹤 OpenAI 代理的請求和響應。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天內累積 816 stars（每日 82），forks 140（17.2%），顯示出強勁的增長潛力。這個專案由一群經驗豐富的開發者推動，他們在 AI 和開源領域有著豐富的背景。Future AGI 解決了 AI 代理在生產環境中常見的失敗問題，提供了一個集成的解決方案，這在市場上是相對稀缺的。最近的推廣活動和社群的積極參與也促進了這個專案的曝光率。隨著對 AI 代理需求的增加，這個平台的可行性和必要性愈發明顯。

## 適合誰使用

**目標受眾**：需要一個全面的解決方案來開發和評估 AI 代理的中小型開發團隊。

> [!example] 使用場景
> - AI 研究員用它來模擬多輪對話，因為可以在真實環境中測試代理的表現，從而提高模型的準確性。
> - DevOps 工程師用它來監控 AI 代理的性能，因為內建的 OpenTelemetry 支持能夠提供即時的性能數據。
> - 產品經理用它來評估不同 LLM 的表現，因為可以使用 50+ 指標進行全面的性能評估，從而做出更明智的決策。

## 架構分析

Future AGI 採用微服務架構，核心組件包括使用 Python 和 Go 的服務，並通過 OpenTelemetry 進行追蹤。數據存儲使用 PostgreSQL 和 ClickHouse，支持高效的查詢和分析。每個組件之間的通信使用標準化的 API 接口，這使得整個系統具備良好的擴展性。選擇微服務架構的原因在於能夠獨立部署和擴展各個功能模塊，但這也帶來了管理和部署的複雜性。整體架構設計考慮到性能和可維護性，能夠在高負載下運行，但在某些情況下可能需要額外的資源來支持高並發請求。

## 技術深入分析

Future AGI 的核心技術機制包括使用 OpenTelemetry 進行追蹤，這使得開發者能夠獲得詳細的性能數據和行為分析。該平台支持高並發請求，能夠在生產環境中處理大量的 AI 代理請求，並且在性能測試中顯示出優異的結果。選擇 Python 和 Go 作為主要開發語言，能夠充分利用兩者在數據處理和網絡性能上的優勢。整體架構設計上，微服務的選擇使得各個功能模塊能夠獨立擴展，但也增加了系統的複雜性。未來的技術風險主要集中在對外部 API 的依賴程度上，尤其是在高負載情況下可能會出現瓶頸。與主流框架的整合相對友好，能夠輕鬆接入現有的 CI/CD 流程，降低了團隊的學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，讓新手能夠快速上手。安裝過程相對順暢，但仍需注意 Docker 和 Kubernetes 的配置。文件中有詳細的指南和多語言支持，方便不同背景的開發者使用。

## 優缺點分析

> [!success] 優點
> - 提供全面的功能集，無需依賴多個工具。
> - 開源且可自我託管，適合數據主權需求。
> - 高性能，適合生產環境的要求。

> [!danger] 缺點
> - 仍在開發中，可能存在不穩定性。
> - 需要一定的技術背景來進行配置和維護。
> - 對於特定企業需求的支持可能不足。

> [!warning] 注意事項
> - 目前仍在測試階段，可能存在不穩定的功能。
> - 對於大型企業的特定需求可能需要進一步的自定義。
> - 需要一定的技術背景來進行自我託管和配置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 代理模擬功能，但缺乏內建的評估指標和監控工具。 |
| [Langfuse/langfuse](https://github.com/Langfuse/langfuse) | 專注於 LLM 的追蹤和分析，但不具備模擬和保護功能。 |
| [Braintrust/braintrust](https://github.com/Braintrust/braintrust) | 提供 AI 代理的監控和評估，但不支持自我託管和開源。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [Langfuse/langfuse](https://github.com/Langfuse/langfuse) | 專注於 LLM 的追蹤和分析，提供基本的評估功能，但缺乏模擬和保護功能。 | 如果你的團隊主要關注 LLM 的性能追蹤，而不需要全面的模擬和保護功能。 | medium，因為需要重新配置評估和模擬的流程。 |
| [Braintrust/braintrust](https://github.com/Braintrust/braintrust) | 提供 AI 代理的監控和評估，但不支持自我託管，主要依賴雲端服務。 | 如果你的團隊不需要自我託管的選項，並且更傾向於使用雲端解決方案。 | low，因為大多數功能類似，可以直接轉移。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **future-agi** | **langfuse** | **braintrust** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 LLM 的追蹤和分析，提供基本的評估功能，但缺乏模擬和保護功能。 | 提供 AI 代理的監控和評估，但不支持自我託管，主要依賴雲端服務。 |
> | 遷移成本 | - | medium，因為需要重新配置評估和模擬的流程。 | low，因為大多數功能類似，可以直接轉移。 |
> | 適用場景 | 主要場景 | 如果你的團隊主要關注 LLM 的性能追蹤，而不需要全面的模擬 | 如果你的團隊不需要自我託管的選項，並且更傾向於使用雲端解決方 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型團隊的試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載下可能會出現性能瓶頸，特別是對外部 API 的依賴。
  - 解法：考慮使用緩存機制來減少對外部請求的依賴。
- [MEDIUM] Docker 部署時可能需要特定的環境變數配置。
  - 解法：確保在 `.env` 文件中正確設置所有必要的變數。
- [MEDIUM] 某些功能在 Kubernetes 部署中可能不完全支持。
  - 解法：在部署前檢查官方文檔以獲取最新的支持狀態。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司開發 AI 代理 | 非常適合 | 提供全面的功能集，無需依賴多個工具，適合小型團隊快速迭代。 |
| 大型企業的 AI 部門 | 普通 | 雖然功能強大，但可能需要額外的自定義和支持。 |
| 學術研究團隊進行 AI 代理的性能評估 | 適合 | 提供多種評估指標，能夠滿足研究需求。 |
| 需要快速部署的商業應用 | 不適合 | 目前仍在開發中，可能存在不穩定性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~20 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，20 小時整合，得到一個全面的 AI 代理開發平台，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不存取敏感資料，依賴鏈的信任程度高，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/future-agi--future-agi");
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
> const me = dv.page("Repos/future-agi--future-agi");
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
| Forks | 140 |
| Open Issues | 67 |
| Issue 解決率 | 4% (3 closed) |
| 最後推送 | 2026-05-03 |
| 建立日期 | 2026-04-23 |
| 官方網站 | [Link](https://futureagi.com) |
| Repo 大小 | 70.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/future-agi/future-agi) |
| Topics | `ai` `ai-gateway` `evals` `llm` `observability` `simulation` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 49
>     "JavaScript" : 43
>     "Go" : 7
>     "Bru" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@commitPirate](https://github.com/commitPirate) | 22 |
> | [@azain-commits](https://github.com/azain-commits) | 20 |
> | [@khushalsonawat](https://github.com/khushalsonawat) | 17 |
> | [@NVJKKartik](https://github.com/NVJKKartik) | 17 |
> | [@cdileep23](https://github.com/cdileep23) | 17 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和討論。
**連結**：[文件](https://docs.futureagi.com) · [Discord](https://discord.gg/futureagi)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-28 ~ 2026-04-30）
> **活躍天數** 3 天 · **最新 commit** Merge pull request #177 from future-agi/fix/disable-eval-clustering-trigger

## README 摘錄

> [!info]- 展開查看原文 README
> for any image that contains a UI screenshot    ║
> ║  (GitHub dark-mode users will see the dark file).                           ║
> ╚═════════════════════════════════════════════════════════════════════════════╝
> -->
> 
> > ⚠️ **Nightly release for early testing.** Expect rough edges. Stable version coming out soon — please open an issue if you hit anything.
> 
> .
> -->
> 
>   
> 
> 
> ## 🚀 Quickstart (60 seconds)
> 
> Three ways, picked by how much you want to install:
> 
> Cloud (fastest)
> Self-host (Docker)
> Self-host (Kubernetes)
> 
> **No install. Free tier.**
> 
> ```bash
> 
> ## Core features
> 
> Six pillars. Each one replaces a tool you probably have.
> 
> 
> ##  Deployment options
> 
>  badges below.
> -->
> 
>   
>   
>   
> 
> -->
> | Target | Status | Notes |
> |---|:---:|---|
> |  Docker Compose | ✅ | `docker compose up -d` from a fresh clone |
> |  Kubernetes | ✅ | Plain manifests today; Helm chart v1 in progress |
> |  AWS / GCP / Azure | ✅ | Runs on any container runtime — ECS · Cloud Run · AKS · EKS · GKE |
> |  AWS Marketplace | ⏳ | Coming soon |
> |  Air-gapped / on-prem | ✅ | No phone-home — [contact sales](mailto:sales@futureagi.com) |
> 
> ---
> 
> 
> ## Why Future AGI?
> 
> Most AI agents fail in production, and teams end up stitching together evals, observability, and guardrails that never close the loop.
> FutureAGI collapses all of it into one platform and one feedback loop. Simulate edge cases before launch, evaluate what happens in production, protect users in real time, and turn every trace into signal for the next version.
> The result: agents that don't just get monitored, they self-improve.
> 
> 
> # AI Agents hallucinate. Fix it faster.
> 
> **The open-source platform for shipping self-improving AI agents.** Evaluations, tracing, simulations, guardrails, gateway, optimization. Everything runs on one platform and one feedback loop, from first prototype to live deployment.
> 
>   
>   
>   
>   
> 
>   Try Cloud (Free) ·
>   Self-Host ·
>   Docs ·
>   Blog ·
>   Discord ·
>   Discussions
> 
> ---
> 
>   
> 
> ---
> 
> 
> ###  All-in-one
> No more stitching Langfuse + Braintrust + Helicone + Guardrails AI + a custom simulator. One platform covers the lifecycle: **simulate → evaluate → protect → monitor → optimize**, with data flowing back as a loop.
> 
> 
> ###  Open & self-hostable
> Apache 2.0 core. Every evaluator, every prompt, every trace is inspectable — **no black-box scoring**. Self-host for data sovereignty or use our managed Cloud. Drop in your own stack at any layer via OTel / OpenAI-compatible HTTP.
> 
> 
> ###  Built for production
> Go-based gateway with **~9.9 ns weighted routing**, **~29 k req/s on t3.xlarge**, **P99 ≤ 21 ms with guardrails on**. OpenTelemetry-native traces. 50+ framework instrumentors. Every claim reproducible via the committed benchmark harness.
> 
> ---
> 
> 
> # Sign up free:
> 
> #   app.futureagi.com
> 
> pip install ai-evaluation
> ```
> 
> SOC 2 Type II · HIPAA · data stays in your region.
> 
> **One command, full stack.**
> 
> ```bash
> git clone https://github.com/future-agi/future-agi.git
> cd future-agi
> cp futureagi/.env.example futureagi/.env
> docker compose up -d
> ```
> 
> Open [http://localhost:3031](http://localhost:3031).
> 
> **Production-grade, HA.**
> 
> ```bash
> helm repo add futureagi \
> helm install fagi futureagi/future-agi
> ```
> 
> Helm chart — v1 in progress. Until then, kubectl manifests in `deploy/`.
> 
> 
> ### Instrument your first agent
> 
> **Python**
> ```python
> from fi_instrumentation import register
> from traceai_openai import OpenAIInstrumentor
> 
> register(project_name="my-agent")
> OpenAIInstrumentor().instrument()
> 
> 
> # Your existing OpenAI code is now traced.
> response = client.chat.completions.create(
>     model="gpt-4o",
>     messages=[{"role": "user", "content": query}],
> )
> ```
> 
> **TypeScript**
> ```typescript
> import { register } from "@traceai/fi-core";
> import { OpenAIInstrumentation } from "@traceai/openai";
> 
> register({ projectName: "my-agent" });
> new OpenAIInstrumentation().instrument();
> 
> // Your existing OpenAI code is now traced.
> const response = await openai.chat.completions.create({
>   model: "gpt-4o",
>   messages: [{ role: "user", content: query }],
> });
> ```
> 
>  [Full docs →](https://docs.futureagi.com)  ·  [Cookbooks →](https://docs.futureagi.com/docs/cookbook)  ·  [API reference →](https://docs.futureagi.com/docs/api)
> 
> ---
> 
> 
> ### 🧪 Simulate
> Thousands of multi-turn conversations against realistic personas, adversarial inputs, and edge cases. Text **and voice** (LiveKit, VAPI, Retell, Pipecat).
> 
> [Docs →](https://docs.futureagi.com/docs/simulation)
> 
> 
> ### 📊 Evaluate
> 50+ metrics under one `evaluate()` call: groundedness, hallucination, tool-use correctness, PII, tone, custom rubrics. **LLM-as-judge + heuristic + ML.**
> 
> [Docs →](https://docs.futureagi.com/docs/evaluation)
> 
> 
> ### 🛡️ Protect
> 18 built-in scanners (PII, jailbreak, injection, …) + 15 vendor adapters (Lakera, Presidio, Llama Guard, …). Inline in gateway or standalone SDK.
> 
> [Docs →](https://docs.futureagi.com/docs/protect)
> 
> 
> ### 👁️ Monitor
> OpenTelemetry-native tracing across 50+ frameworks (LangChain, LlamaIndex, CrewAI, DSPy…). Span graphs, latency, token cost, live dashboards. Zero-config.
> 
> [Docs →](https://docs.futureagi.com/docs/observe)
> 
> 
> ### 🎛️ Agent Command Center
> OpenAI-compatible gateway. 100+ providers, 15 routing strategies, semantic caching, virtual keys, MCP, A2A. **~29k req/s, P99 ≤ 21ms with guardrails on.**
> 
> [Docs →](https://docs.futureagi.com/docs/command-center) · [Benchmarks →](./futureagi/agentcc-gateway/README.md#-benchmarks)
> 
> 
> ### 🔁 Optimize
> Six prompt-optimization algorithms (GEPA, PromptWizard, ProTeGi, Bayesian, Meta-Prompt, Random). Production traces feed back as training data.
> 
> [Docs →](https://docs.futureagi.com/docs/optimization)
> 
> ---
> 
> 
> ##  Architecture
> 
> Every arrow is an open, documented interface: **OpenTelemetry OTLP** for traces, **OpenAI-compatible HTTP** for the gateway, **Postgres / ClickHouse SQL** for storage. Drop in your own stack at any layer.
> 
>   
>   
>  -->
> 
> **Runtime:** Python 3.11+ (Django 4.2 + Channels) · Go 1.23+ (gateway) · React 18 + Vite · Node 20+.
> **Data:** PostgreSQL (metadata) · ClickHouse (spans + time-series) · Redis (state) · RabbitMQ + Temporal (jobs).
> 
> Component breakdown (per-package)
> 
> | Layer | Component | Code |
> |---|---|---|
> |  Edge | **traceAI** — OpenTelemetry instrumentation | [`future-agi/traceAI`](https://github.com/future-agi/traceAI) |
> |  Edge | **Agent Command Center** — OpenAI-compatible proxy | [`futureagi/agentcc-gateway/`](./futureagi/agentcc-gateway) |
> |  Platform | **tracer** — OTLP ingest, span graph | [`futureagi/tracer/`](./futureagi/tracer) |
> |  Platform | **agentic_eval** — 50+ metrics, LLM-as-judge | [`futureagi/agentic_eval/`](./futureagi/agentic_eval) |
> |  Platform | **simulate** — persona-driven scenario generation | [`futureagi/simulate/`](./futureagi/simulate) |
> |  Platform | **model_hub** — LLM routing, embeddings, datasets | [`futureagi/model_hub/`](./futureagi/model_hub) |
> |  Platform | **accounts · usage · integrations** — auth, orgs, metering, connectors | [`futureagi/accounts/`](./futureagi/accounts) |
> |  Data | **PostgreSQL** · **ClickHouse** · **Redis** · **RabbitMQ + Temporal** | — |
> 
> ---
> 
> 
> ##  SDKs & integrations
> 
> Future AGI is an **open-source ecosystem** — each SDK is independently usable, independently packaged, Apache/MIT-licensed.
> 
> 
> ### Client libraries
> 
> | Repo | Install | Languages | Purpose |
> |---|---|---|---|
> | [**traceAI**](https://github.com/future-agi/traceAI) | `pip install fi-instrumentation-otel``npm i @traceai/fi-core` | Python · TS · Java · C# | **Zero-config OTel tracing** for 50+ AI frameworks |
> | [**ai-evaluation**](https://github.com/future-agi/ai-evaluation) | `pip install ai-evaluation``npm i @future-agi/ai-evaluation` | Python · TS | **50+ evaluation metrics** + guardrail scanners |
> | [**futureagi**](https://github.com/future-agi/futureagi-sdk) | `pip install futureagi` | Python | Platform SDK — datasets, prompts, KB, experiments |
> | [**agent-opt**](https://github.com/future-agi/agent-opt) | `pip install agent-opt` | Python | **6 prompt-optimization algorithms** (GEPA, PromptWizard, …) |
> | [**simulate-sdk**](https://

## 延伸閱讀

相關概念：[[OpenTelemetry]] · [[LLM 推論]] · [[自動化測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]]

[GitHub](https://github.com/future-agi/future-agi) · [官方網站](https://futureagi.com)

## 相關收錄

> [!note]- 直接競品（同子分類：LLM 評估）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "LLM 評估" AND file.name != "future-agi--future-agi"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "future-agi--future-agi"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "future-agi--future-agi" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "future-agi--future-agi"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["OpenTelemetry","LLM 推論","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "future-agi--future-agi" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/future-agi--future-agi");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "future-agi--future-agi" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "future-agi" AND file.name != "future-agi--future-agi"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/future-agi--future-agi");
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
> const me = dv.page("Repos/future-agi--future-agi");
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
> const me = dv.page("Repos/future-agi--future-agi");
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
> const me = dv.page("Repos/future-agi--future-agi");
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
> const me = dv.page("Repos/future-agi--future-agi");
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

> **2026-04-30** — 首次收錄
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

- [[2026-04-30|2026-04-30]] — 首次收錄，748 stars
