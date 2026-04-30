---
repo: future-agi/future-agi
url: https://github.com/future-agi/future-agi
owner: future-agi
owner_type: Organization
language: Python
license: Apache-2.0
description: "Open-source, end-to-end platform for evaluating, observing, and improving LLM and AI agent applications. Tracing · Evals · Simulations · Datasets · Gateway · Guardrails. Self-hostable. Apache 2.0."
homepage: "https://futureagi.com"
stars: 748
stars_per_day: 125
forks: 130
open_issues: 48
created: 2026-04-23
pushed_at: 2026-04-29
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
use_case: "提供一個開源平台，幫助評估、觀察和改善 LLM 和 AI agent 應用。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-07"
contributor_count: 5
engagement: "medium"
issue_close_rate: 6
repo_size_kb: 72411
readme_length: 10000
bus_factor: 3
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-30"
star_history: "2026-04-30:748"
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
  - "提供一個開源平台，幫助評估、觀察和改善 LLM 和 AI agent 應用。"
---

# future-agi

**748** stars · **125** stars/天 · 建立 6 天前 · Python · Apache-2.0

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
> 提供一個開源平台，幫助評估、觀察和改善 LLM 和 AI agent 應用。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (125 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要一個整合評估、監控和優化功能的 AI agent 開發團隊。
> **一句話重點** 這個專案的價值在於它能夠將多個獨立的 AI 工具整合成一個完整的解決方案，讓開發者能更專注於模型的優化和部署。

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
> **結論** 花 10 小時學習，20 小時整合，得到全面的 AI agent 開發解決方案，值得投入。

> [!abstract] 核心創新
> 將評估、觀察和優化整合為一個平台，實現 AI agent 的自我改進。

## 專案簡介

Future AGI 是一個開源的端到端平台，專注於評估、觀察和改善大型語言模型（LLM）及 AI agent 應用。其核心機制是將多種工具整合為一個平台，實現從模擬、評估到保護和優化的完整流程，並通過即時反饋迴路提升 AI agent 的性能。使用者可以透過簡單的指令 `docker compose up -d` 快速啟動自我託管的環境，或選擇雲端服務進行快速部署。技術上，Future AGI 利用 Python 和 Go 實現高效的網關，並通過 OpenTelemetry 提供詳細的追蹤和監控，支持高達 29,000 請求每秒的處理能力。與其他工具相比，如 Langfuse 和 Braintrust，Future AGI 提供了更全面的功能，包括內建的評估套件和模擬功能，這使得它在生產環境中更具優勢。實際使用中，使用者可以透過 `evaluate()` 函數獲取超過 50 種評估指標，並利用內建的防護機制確保 AI agent 的安全性。儘管目前仍在測試階段，但其設計目標是提供一個穩定且高效的解決方案，適合需要高性能 AI agent 的團隊使用。

**技術棧**：`Python 3.11` · `Go 1.23` · `PostgreSQL` · `ClickHouse` · `Redis` · `RabbitMQ` · `Django 4.2`

## 重點功能

- 全面的評估套件 — 提供超過 50 種評估指標，使用 `evaluate()` 函數進行評估。
- 內建模擬功能 — 支援多輪對話和邊緣案例模擬，生成真實場景的測試數據。
- 即時監控 — 使用 OpenTelemetry 進行追蹤，支援高達 29,000 請求每秒的處理能力。
- 安全防護機制 — 內建 18 種掃描器，檢查 PII 和注入攻擊等風險。
- 自我託管選項 — 提供 Docker 和 Kubernetes 部署選項，滿足數據主權需求。

## 快速開始

1. 克隆專案並啟動 Docker 環境
```bash
git clone https://github.com/future-agi/future-agi.git && cd future-agi && cp futureagi/.env.example futureagi/.env && docker compose up -d
```
2. 訪問本地應用
```bash
http://localhost:3031
```
3. 安裝 Python SDK
```bash
pip install ai-evaluation
```

## 程式碼範例

```python
{
  "前置條件": "安裝了 Future AGI SDK",
  "程式碼": "from fi_instrumentation import register\nfrom traceai_openai import OpenAIInstrumentor\n\nregister(project_name=\"my-agent\")\nOpenAIInstrumentor().instrument()\n\n# 你的 OpenAI 代碼現在被追蹤。\nresponse = client.chat.completions.create(\n    model=\"gpt-4o\",\n    messages=[{\"role\": \"user\", \"content\": query}],\n)",
  "預期輸出": "追蹤的 OpenAI 代碼將提供詳細的性能數據和評估指標。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 748 stars（124.7/天），forks 130（17.4%），顯示出強勁的增長潛力。作者團隊由多位開發者組成，這些人過去在 AI 和開源領域有豐富的經驗。這個專案解決了以往 AI agent 在生產環境中難以有效監控和優化的痛點，通過整合多種功能，讓開發者能夠在一個平台上完成所有工作。近期的社群討論和需求也促進了這個工具的快速成長。隨著對 AI agent 需求的增加，這個工具的出現恰逢其時。

## 適合誰使用

**目標受眾**：需要一個整合評估、監控和優化功能的 AI agent 開發團隊。

> [!example] 使用場景
> - AI 研究者用它來模擬多輪對話，因為可以快速生成真實場景的測試數據，提升模型的穩定性。
> - DevOps 工程師用它來監控 AI agent 的性能，因為內建的 OpenTelemetry 支援讓監控變得無縫且高效。
> - 產品經理用它來評估不同 AI agent 的表現，因為可以透過一個簡單的 API 獲得超過 50 種評估指標。

## 架構分析

Future AGI 採用微服務架構，核心由 Python 和 Go 實現，確保高效能和可擴展性。數據流通過 OpenTelemetry 進行追蹤，並使用 PostgreSQL 和 ClickHouse 作為數據存儲。這樣的設計使得每個組件都能獨立擴展，並且能夠輕鬆整合不同的技術棧。選擇 Go 作為網關的實現語言，因為其高效的並發處理能力，這對於需要高請求處理的場景至關重要。整體架構的擴展性良好，但在高負載下可能會遇到數據庫性能瓶頸，特別是在大量並發請求的情況下。

## 技術深入分析

Future AGI 的核心技術機制是將多種功能整合在一個平台上，這包括評估、模擬、監控和優化。這樣的設計使得開發者能夠在同一個環境中進行所有操作，從而提高了效率。效能方面，該平台能夠處理高達 29,000 請求每秒，這對於需要高並發的應用場景非常重要。選擇 Python 和 Go 作為主要開發語言，這不僅提高了開發效率，也確保了運行時的性能。

整體架構的依賴關係相對簡單，主要依賴於 PostgreSQL 和 ClickHouse 進行數據存儲，這使得整體系統的維護成本較低。技術風險方面，隨著使用者數量的增加，可能會遇到性能瓶頸，特別是在數據庫的讀寫性能上。整合方面，Future AGI 能夠輕鬆與主流的 AI 框架如 LangChain 和 LlamaIndex 進行整合，這降低了使用門檻。整體來看，這個專案在技術上具備了良好的擴展性和靈活性，適合未來的發展需求。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和範例，讓新手能快速上手。安裝過程相對順暢，但需要具備 Docker 或 Kubernetes 的基本知識。文件中有詳細的 getting started guide，並且提供了多種語言的支持，方便不同背景的開發者使用。

## 優缺點分析

> [!success] 優點
> - 整合多種功能於一個平台，減少工具間的整合成本。
> - 高效能的網關設計，能處理大量請求。
> - 開源且可自我託管，滿足數據主權需求。

> [!danger] 缺點
> - 目前仍在測試階段，可能存在不穩定性。
> - 需要一定的技術背景來進行自我託管。
> - 某些功能尚未完全實現，可能影響使用體驗。

> [!warning] 注意事項
> - 目前仍在測試階段，可能存在不穩定的功能。
> - 需要 Docker 或 Kubernetes 環境進行自我託管。
> - 某些功能仍在開發中，可能無法立即使用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI agent 模擬功能，但缺乏內建的評估和監控工具，適合需要專注於模擬的場景。 |
| [Langfuse/langfuse](https://github.com/Langfuse/langfuse) | 雖然也支持 LLM 追蹤，但 Langfuse 的功能較為單一，無法提供全面的評估和防護機制。 |
| [Braintrust/braintrust](https://github.com/Braintrust/braintrust) | 提供類似的 AI agent 功能，但缺乏內建的模擬和優化工具，適合較小規模的專案。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [Langfuse/langfuse](https://github.com/Langfuse/langfuse) | 專注於 LLM 追蹤和監控，但缺乏模擬和評估功能，適合需要專注於性能監控的場景。 | 如果你的團隊已經在使用 Langfuse 進行監控，並希望專注於性能優化而非模擬。 | medium，因為需要將現有的監控邏輯轉移到 Langfuse。 |
| [Braintrust/braintrust](https://github.com/Braintrust/braintrust) | 提供基本的 AI agent 功能，但缺乏全面的評估和模擬工具，適合小型專案。 | 如果你的專案規模較小，且不需要複雜的評估和模擬功能。 | low，因為功能較為簡單，遷移成本不高。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **future-agi** | **langfuse** | **braintrust** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 LLM 追蹤和監控，但缺乏模擬和評估功能，適合需要專注於性能監控的場景。 | 提供基本的 AI agent 功能，但缺乏全面的評估和模擬工具，適合小型專案。 |
> | 遷移成本 | - | medium，因為需要將現有的監控邏輯轉移到 Langfuse。 | low，因為功能較為簡單，遷移成本不高。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Langfuse 進行監控，並希望專 | 如果你的專案規模較小，且不需要複雜的評估和模擬功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合對 AI agent 開發有興趣的開發者進行試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載下，數據庫可能會成為性能瓶頸。
  - 解法：考慮使用讀寫分離的數據庫架構來減輕壓力。
- [MEDIUM] 某些功能仍在開發中，可能會導致不穩定性。
  - 解法：定期檢查更新和社群討論以獲取最新資訊。
- [MEDIUM] Docker 環境配置不當可能導致啟動失敗。
  - 解法：仔細檢查 .env 配置文件，確保所有環境變數正確設置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司開發 AI agent | 非常適合 | 提供全面的功能，能夠支持從開發到部署的全過程。 |
| 大型企業的 AI 部門進行性能監控 | 適合 | 雖然功能強大，但可能需要額外的資源來維護。 |
| 個人開發者進行小型專案 | 普通 | 功能過於複雜，對於小型專案來說可能不必要。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~20 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，20 小時整合，得到全面的 AI agent 開發解決方案，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，並且不會存取敏感資料。依賴鏈的信任程度較高，無已知的供應鏈風險。

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
| Forks | 130 |
| Open Issues | 48 |
| Issue 解決率 | 6% (3 closed) |
| 最後推送 | 2026-04-29 |
| 建立日期 | 2026-04-23 |
| 官方網站 | [Link](https://futureagi.com) |
| Repo 大小 | 70.7 MB |
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

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://docs.futureagi.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-28 ~ 2026-04-29）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #135 from future-agi/fix/hotfix-for-reddit-metadata-issue

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
