---
repo: GammaLabTechnologies/harmonist
url: https://github.com/GammaLabTechnologies/harmonist
owner: GammaLabTechnologies
owner_type: User
language: Python
license: MIT
description: "Portable AI agent orchestration with mechanical protocol enforcement. 186 agents, zero runtime dependencies."
homepage: "https://gammalab.ae"
stars: 1750
stars_per_day: 73
forks: 352
open_issues: 1
created: 2026-04-23
pushed_at: 2026-04-23
first_seen: 2026-04-30
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "代理系統"
release_tag: "v1.0.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-30
use_case: "提供可攜式 AI 代理協調，並強制執行機械協議。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-07"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 1406
readme_length: 9967
bus_factor: 1
last_release_days: 25
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-04-30"
star_history: "2026-04-30:897,2026-04-30:898,2026-05-01:949,2026-05-02:1043,2026-05-03:1146,2026-05-04:1220,2026-05-05:1267,2026-05-06:1298,2026-05-07:1342,2026-05-08:1399,2026-05-09:1428,2026-05-10:1467,2026-05-11:1516,2026-05-12:1548,2026-05-13:1578,2026-05-14:1626,2026-05-15:1656,2026-05-16:1696,2026-05-17:1723,2026-05-18:1750"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
  - "topic/agent_framework"
  - "topic/agent_system"
  - "topic/ai_agents"
  - "topic/claude_code"
  - "topic/cursor_ide"
aliases:
  - "harmonist"
  - "GammaLabTechnologies/harmonist"
  - "提供可攜式 AI 代理協調，並強制執行機械協議。"
---

# harmonist

**1.8k** stars · **73** stars/天 · 建立 24 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/GammaLabTechnologies--harmonist");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v1.0.0` `easy-install`

`agent-framework` `agent-system` `ai-agents` `claude-code` `cursor-ide` `llm` `multi-agent-framework` `orchestration` `prompt-engineering` `python`

> [!summary] 一句話摘要
> 提供可攜式 AI 代理協調，並強制執行機械協議。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (73 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 24 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在開發環境中強化 AI 代碼審查和合規性的工程師和團隊。
> **一句話重點** Harmonist 的核心價值在於其機械協議強制執行，這在 AI 編碼助手的生態中是前所未有的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/GammaLabTechnologies--harmonist");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "代理系統" && p.file.name !== "GammaLabTechnologies--harmonist" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 代理系統 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到強大的代碼安全性和合規性，值得。

> [!abstract] 核心創新
> Harmonist 是第一個將協議強制執行作為機械門檻的開源代理框架。

## 專案簡介

Harmonist 是一個專注於 AI 代理的協調框架，旨在解決 AI 編碼助手在工程工作流程中的安全性與合規性問題。它通過在 IDE 中實現機械協議強制執行，確保每次代碼變更都經過必要的檢查，避免了 LLM 可能的跳過步驟。用戶可以透過簡單的 CLI 指令，如 `python3 harmonist/agents/scripts/integrate.py --pack harmonist --project .` 來整合 Harmonist，並利用 186 個經過策劃的專家代理，這些代理可根據項目需求靈活調用。技術上，Harmonist 使用純 Python 標準庫和 bash 腳本，無需額外的運行時或數據庫，這使得它在各種平台上都能運行。

與其他代理框架相比，如 LangChain 和 CrewAI，Harmonist 提供了更強的協議強制執行，避免了模型自行決定是否遵循規則的問題。這種設計使得 Harmonist 在安全性和合規性上具備了優勢，特別適合需要高標準代碼審查的開發環境。使用者在實施過程中可能會遇到需要手動整合的情況，這需要一定的學習曲線，但整體來說，Harmonist 的設計理念和功能使其在 AI 編碼助手的生態系中佔有一席之地。未來，隨著 AI 技術的進步，Harmonist 可能會進一步擴展其代理類別和功能，以滿足更複雜的開發需求。

**技術棧**：`Python 3` · `Bash`

## 重點功能

- 186 個專家代理 — 涵蓋 16 種類別，提供多樣化的專業支持。
- 機械協議強制執行 — 透過 IDE 鉤子確保每次代碼變更都符合項目規範。
- 數據驅動路由 — 使用 `agents/index.json` 作為單一路由表，簡化代理管理。
- 供應鏈完整性驗證 — 每個發送的文件都經過 SHA256 哈希驗證，確保安全性。
- 結構化的驗證記憶 — 使用 YAML schema 驗證記憶條目，避免重複和安全漏洞。

## 快速開始

1. 克隆專案到你的項目根目錄
```bash
cd your-project/ && git clone https://github.com/GammaLabTechnologies/harmonist.git
```
2. 在 Cursor 中打開專案並切換到代理模式
```bash
# README 未提供程式碼範例
```
3. 粘貼 harmonist/integration-prompt.md 的內容
```bash
# README 未提供程式碼範例
```

## 程式碼範例

```python
{
  "前置條件": "在你的項目根目錄中",
  "指令": "python3 harmonist/agents/scripts/integrate.py --pack harmonist --project .",
  "預期輸出": "將 Harmonist 整合到你的項目中，並配置所需的代理。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 24 天就累積 1750 stars（73/天），forks 352（20.1%），這顯示出強勁的社群興趣。GammaLabTechnologies 是一個專注於機器人和 AI 的技術公司，這個專案的出現解決了 AI 編碼助手在工程流程中的合規性問題，提供了一個可行的替代方案。該專案的推出可能受到開發者社群對於安全性和合規性的需求增加的驅動，並且在 GitHub 上的活躍討論也進一步推動了其曝光率。這個工具的設計理念基於對現有解決方案的批判，提供了更為嚴格的協議執行機制，這在當前的開發環境中是非常重要的。forks/stars 比率為 20.1%，顯示出許多使用者對其進行了實際修改和使用。

## 適合誰使用

**目標受眾**：需要在開發環境中強化 AI 代碼審查和合規性的工程師和團隊。

> [!example] 使用場景
> - 後端工程師用它來確保每次代碼變更都經過必要的 QA 檢查，因為這樣可以避免因為跳過檢查而導致的生產環境錯誤。
> - 獨立開發者用它來整合多個 AI 代理，快速適應不同的開發需求，因為它提供了 186 個專家代理可供選擇，能夠靈活應對各種場景。
> - DevOps 團隊用它來強化 CI/CD 流程中的安全性，因為其機械協議強制執行能確保每個步驟都符合項目規範，降低了安全風險。

## 架構分析

Harmonist 的架構設計以零運行時依賴為核心，使用純 Python 標準庫和 bash 腳本，這使得它能夠在多平台上運行。資料流方面，代理的調用和檢查都是通過 IDE 鉤子進行的，這樣的設計確保了每次代碼變更都經過必要的檢查。選擇這種設計的原因在於避免了傳統代理框架中模型自行決定是否遵循規則的問題，這樣的取捨使得 Harmonist 在安全性上具備了優勢。擴展性方面，由於其設計不依賴於外部服務，未來可以輕鬆增加更多的代理或功能，而不會受到運行時環境的限制。

## 技術深入分析

Harmonist 的核心技術機制在於其機械協議強制執行，這是通過在 IDE 中實現的鉤子來完成的。每當代理被調用時，系統會檢查是否滿足所有必要的條件，這樣的設計使得 AI 模型無法隨意跳過步驟。效能方面，由於使用純 Python 和 bash，Harmonist 在資源使用上相對輕量，並且能夠在多種平台上運行。選擇這種技術棧的原因在於希望減少對外部依賴的需求，這樣可以降低維護成本和潛在的安全風險。設計上，Harmonist 的依賴樹相對簡單，這使得它在升級和維護上具有優勢。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在高並發的情況下。整合方面，Harmonist 與主流的開發工具鏈相容性良好，但在某些情況下可能需要額外的適配層來處理特定的 IDE 整合問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的概述和使用指引，但缺乏詳細的範例。安裝過程相對順暢，使用者只需克隆專案並執行簡單的 CLI 指令。文件主要以英文撰寫，對於非英語使用者可能需要額外的翻譯支持。

## 優缺點分析

> [!success] 優點
> - 強制執行協議，確保代碼變更符合項目規範。
> - 186 個專家代理，能夠靈活應對多種開發需求。
> - 零運行時依賴，簡化了環境配置和部署。

> [!danger] 缺點
> - 對於大型項目，初次整合可能需要較長的時間。
> - 目前僅支援特定的 IDE 整合，可能不適用於所有開發環境。
> - 使用者需要熟悉 CLI 操作，對新手來說有一定的學習曲線。

> [!warning] 注意事項
> - 需要 Python 3 環境。
> - 對於大型項目，初次整合可能需要較長的時間。
> - 目前僅支援特定的 IDE 整合，可能不適用於所有開發環境。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的代理系統，但不具備 Harmonist 的機械協議強制執行功能。 |
| [LangChain/langchain](https://github.com/LangChain/langchain) | 提供代理協調功能，但依賴於提示工程，缺乏 Harmonist 的強制執行機制。 |
| [CrewAI/crewai](https://github.com/CrewAI/crewai) | 雖然提供多代理協調，但在安全性和合規性方面不如 Harmonist 的設計。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [LangChain/langchain](https://github.com/LangChain/langchain) | 提供代理協調功能，但依賴於提示工程，缺乏 Harmonist 的強制執行機制。 | 如果你的團隊已經在使用提示工程並希望保持靈活性，LangChain 可能更合適。 | medium，因為需要重新設計提示和代理的整合方式。 |
| [CrewAI/crewai](https://github.com/CrewAI/crewai) | 雖然提供多代理協調，但在安全性和合規性方面不如 Harmonist 的設計。 | 如果你的專案不需要嚴格的合規性要求，CrewAI 可能會更簡單易用。 | low，因為它們的 API 和概念相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **harmonist** | **langchain** | **crewai** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供代理協調功能，但依賴於提示工程，缺乏 Harmonist 的強制執行機制。 | 雖然提供多代理協調，但在安全性和合規性方面不如 Harmonist 的設計。 |
> | 遷移成本 | - | medium，因為需要重新設計提示和代理的整合方式。 | low，因為它們的 API 和概念相似。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用提示工程並希望保持靈活性，LangCh | 如果你的專案不需要嚴格的合規性要求，CrewAI 可能會更簡 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型專案和實驗性質的開發，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些 IDE 中，可能需要手動配置鉤子以確保正確運作。
  - 解法：參考官方文檔中的整合指南。
- **[HIGH]** 對於大型項目，初次整合可能需要較長的時間。
  - 解法：考慮分階段整合，逐步引入代理。
- [MEDIUM] CLI 操作對新手來說可能有一定的學習曲線。
  - 解法：提供內部培訓或指導文件。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 因為其機械協議強制執行能確保代碼質量和安全性。 |
| 大型企業的 AI 開發團隊 | 普通 | 雖然功能強大，但可能需要額外的整合和配置。 |
| 獨立開發者的個人專案 | 非常適合 | 因為其零運行時依賴和簡單的整合流程。 |
| 需要高安全性和合規性的金融科技公司 | 適合 | 因為其強制執行的設計能夠滿足合規性要求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到強大的代碼安全性和合規性，值得。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Harmonist 本身不需要高權限運行，且不存取敏感資料，依賴鏈簡單，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/GammaLabTechnologies--harmonist");
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
> const me = dv.page("Repos/GammaLabTechnologies--harmonist");
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
| Forks | 352 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-23 |
| 建立日期 | 2026-04-23 |
| 官方網站 | [Link](https://gammalab.ae) |
| Repo 大小 | 1.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/GammaLabTechnologies/harmonist) |
| Topics | `agent-framework` `agent-system` `ai-agents` `claude-code` `cursor-ide` `llm` `multi-agent-framework` `orchestration` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 64
>     "Shell" : 36
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@GammaLabTechnologies](https://github.com/GammaLabTechnologies) | 2 |

**最新版本**：v1.0.0 — Harmonist v1.0.0 (2026-04-23)

> [!info]- Release Notes
> Initial public release. Harmonist ships 186 curated agents, a
> Schema-v2 frontmatter contract, structured validated memory, and a
> hook-driven enforcement layer that cannot be skipped by the LLM.
> 
> ### Catalogue
> 
> - **186 agents across 16 categories.** Unified pool under
>   `agents/<category>/<slug>.md`, every file conforming to Schema v2.
>   Strict agents (`orchestration`, `review`) drive the mandatory
>   gates; persona agents are free-form specialists with domain depth.
> - **Data-driven routing.** `agents/index.json` is the single routing
>   table the orchestrator consults. Adding or renaming an agent
>   requires zero edits to `AGENTS.md`.
> - **Disambiguation metadata.** Every agent with near-peers carries
>   `distinguishes_from` + a one-line `disambiguation` note so the
>   orchestrator can tie-break between look-alike specialists.
> - **Domain filter + role filter.** The integration prompt asks for
>   both the project's `domains` (blockchain / gamedev / china-market /
>   healthcare / etc.) and its working `roles` (engineering, design,
>   product, marketing, sales, support, finance, testing, academic) to
>   select a sensible starter set of specialists, not a
>   one-size-fits-all dump.
> 
> ### Enforcement
> 
> - **Cursor hooks drive the stop gate.** The `stop` hook parses
>   `AGENT: <slug>` markers from subagent prompts and refuses to allow
>   turn completion if `qa-verifier` has not run, if any required
>   reviewer is missing, or if `session-handoff.md` was not updated.
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍度高，持續收到使用者反饋和貢獻。
**連結**：[文件](https://gammalab.ae)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-23 ~ 2026-04-23）
> **活躍天數** 1 天 · **最新 commit** docs(readme): add GitHub stars badge

## README 摘錄

> [!info]- 展開查看原文 README
> # Harmonist
> 
> 
> ## Quick start
> 
> 
> # 4. Follow the AI's walkthrough — it will ask about your
> 
> ## About GammaLab
> 
> [**GammaLab**](https://gammalab.ae) is a technology company working on
> robotics, artificial intelligence, and machine cognition. Harmonist
> is our first open-source release — a tool we built to enforce
> engineering discipline in AI-assisted development, and one we use
> daily across our own internal projects.
> 
> If you ship production code with AI assistance and you care about
> making that code safe, auditable, and aligned with your project's
> actual rules — Harmonist is for you.
> 
> - **Website:** [gammalab.ae](https://gammalab.ae)
> - **GitHub:** [@GammaLabTechnologies](https://github.com/GammaLabTechnologies)
> - **Contact:** Open an issue for public discussion; use the
>   repository's Security tab for private reports.
> 
> ---
> 
> **If Harmonist helps you ship safer AI-assisted code,
> star the repository — it's the cheapest signal you can send
> the maintainers that this work matters.** ⭐
> 
> Made with engineering discipline by [GammaLab](https://gammalab.ae).
> ### Option 1 — Integrate via Cursor (recommended)
> 
> ```bash
> 
> ### Option 2 — Integrate via CLI (no Cursor needed)
> 
> ```bash
> cd your-project/
> git clone https://github.com/GammaLabTechnologies/harmonist.git
> python3 harmonist/agents/scripts/integrate.py --pack harmonist --project .
> ```
> 
> 
> ### Option 3 — Manual integration
> 
> See [`GUIDE_EN.md`](GUIDE_EN.md) for the step-by-step manual path.
> 
> ---
> 
> 
> ## Why Harmonist exists
> 
> AI coding assistants have a structural problem that prompt engineering
> alone cannot fix.
> 
> **The problem:** every serious engineering workflow has non-negotiable
> rules — "no floating-point for money", "run QA before merging", "every
> external call retries with idempotency keys", "security review before
> touching auth code". An LLM can be *told* to follow them, but there is
> no mechanism forcing it to. It can agree, move on, and silently skip
> the step. On a good day you notice. On a bad day the bug ships.
> 
> **The current landscape** is split between two imperfect answers:
> 
> - **Thin agent frameworks** (LangChain, CrewAI, AutoGen, MetaGPT and
>   many others) give you orchestration primitives but leave enforcement
>   to the prompt. The model can always override its own protocol.
> - **Heavy enterprise platforms** promise governance through separate
>   runtimes, databases, and vendor lock-in — but need infrastructure to
>   install, don't work on a solo developer's laptop, and can't be
>   audited file-by-file.
> 
> **Harmonist takes a different stance.** Protocol enforcement is
> implemented as IDE-level hooks — concrete shell and Python scripts that
> observe every subagent dispatch, every file edit, every session stop.
> When the rules the project declared aren't met, the `stop` hook
> returns a `followup_message` to the AI and refuses to allow the turn
> to complete. The model can't argue with that; it's a state machine on
> disk.
> 
> No runtime. No database. No vendor lock-in. Just markdown, stdlib
> Python, and bash — sitting next to your code, doing one job
> correctly.
> 
> ---
> 
> 
> ### Why mechanical enforcement instead of prompt guidance?
> 
> Because prompt guidance is advisory and AI models treat it that way.
> "Always run QA before marking done" in a prompt is aspirational. A
> stop hook that refuses to let the turn finish until QA ran is a
> contract. We chose contracts.
> 
> 
> ### Why 186 agents? Isn't that too many?
> 
> Most projects activate 10–20 specialists for their actual working
> roles. The other ~170 are available but invisible — filtered out by
> the `domains × roles × tags` intersection during routing. A TON
> blockchain project never sees WeChat or Xiaohongshu marketing
> agents. A Web SaaS never sees Solidity or ZK specialists.
> 
> The size of the catalogue is an **asset**, not a cost — it means when
> your project grows into a new role (adds marketing, adds support,
> pivots to a new platform), the specialists are already curated and
> vetted. Install them on demand with:
> ```bash
> python3 agents/scripts/install_extras.py --role marketing
> ```
> 
> 
> ### Portable AI agent orchestration with mechanical protocol enforcement
> 
> *A drop-in multi-agent framework for Cursor, Claude Code, Copilot, Windsurf, Aider, and other AI coding assistants.*
> 
> [](https://github.com/GammaLabTechnologies/harmonist/stargazers)
> [](https://github.com/GammaLabTechnologies/harmonist/actions/workflows/ci.yml)
> [](LICENSE)
> [](https://www.python.org/downloads/)
> [](CHANGELOG.md)
> [](agents/index.json)
> [](#testing)
> [](#requirements)
> 
> **Built and maintained by [GammaLab](https://gammalab.ae) · [@GammaLabTechnologies](https://github.com/GammaLabTechnologies)**
> 
> ---
> 
> Most AI coding frameworks trust the language model to follow the
> rules. Harmonist **refuses to let it skip them**. Every code-changing
> turn is gated by hooks that check whether the required reviewers ran,
> whether memory was updated, and whether the supply chain of every
> shipped file is intact. If the checks fail, the turn doesn't complete —
> no matter how confidently the model claims it's done.
> 
> This is the first open-source agent framework where **protocol
> enforcement is a mechanical gate, not a polite request in a prompt**.
> 
> ---
> 
> 
> ## Table of contents
> 
> - [Why Harmonist exists](#why-harmonist-exists)
> - [What makes it different](#what-makes-it-different)
> - [Requirements](#requirements)
> - [Quick start](#quick-start)
> - [Architecture](#architecture)
> - [The 186-agent catalogue](#the-186-agent-catalogue)
> - [Mechanical enforcement](#mechanical-enforcement)
> - [Structured validated memory](#structured-validated-memory)
> - [Supply-chain integrity](#supply-chain-integrity)
> - [Supported IDE integrations](#supported-ide-integrations)
> - [Key scripts](#key-scripts)
> - [Documentation](#documentation)
> - [Testing](#testing)
> - [FAQ](#faq)
> - [Contributing](#contributing)
> - [Security](#security)
> - [License](#license)
> - [About GammaLab](#about-gammalab)
> 
> ---
> 
> 
> ## What makes it different
> 
> Seven concrete, checkable properties — each one addresses a gap that
> other open-source agent frameworks leave open.
> 
> 
> ### 1. Mechanical protocol enforcement via IDE hooks
> 
> The `stop` hook in `.cursor/hooks/` parses subagent dispatch markers
> from the session, checks whether `qa-verifier` ran, whether any
> required reviewer was missing, whether `session-handoff.md` was
> updated, and returns a structured `followup_message` if the turn
> is incomplete. `loop_limit: 3` caps retries. On exhaustion, an
> incident is recorded and surfaced in the next session. **The AI
> literally cannot ship a code change that skipped review.**
> 
> 
> ### 2. Supply-chain verification of agent definitions
> 
> Every shipped file is hashed in `MANIFEST.sha256`. `upgrade.py`
> sha-verifies each source *before* copying into a project. A tampered
> `security-reviewer.md` (say, one that returns `approve` for
> everything) is REFUSED — it never enters the project. `install_extras.py`
> inherits the same guard for on-demand specialist installs. This is
> the first OSS agent catalogue with paranoid-level supply-chain
> posture.
> 
> 
> ### 3. Memory correlation IDs that the LLM cannot forge
> 
> Every memory entry has a `correlation_id` of the form
> `-` generated by the hooks at session start
> (`` — collision-safe across parallel sessions).
> The LLM reads the active ID via CLI; it never writes the ID itself.
> This means the linkage between a `state` entry, a `decision`, and a
> `pattern` from the same task is **cryptographically ordered** from
> the hook's perspective — not trusted to the model.
> 
> 
> ### 4. Schema-validated memory with secret-pattern scanning
> 
> `memory.py append` is the only supported write path. It validates
> every entry against a YAML schema (`memory/SCHEMA.md`), rejects
> duplicates, and scans the body for ~30 classes of secrets: AWS
> access keys, GitHub PATs, Stripe tokens, Slack webhooks, GCP service
> accounts, Azure connection strings, Telegram bot tokens, Discord
> tokens, Heroku/Postmark UUIDs (context-scoped), generic high-entropy
> tokens with `secret:` prefixes, and DB connection strings with
> embedded credentials. Placeholder fences (`${VAR}`,

## 延伸閱讀

相關概念：[[機器學習]] · [[自動化測試]] · [[API 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]] · [[Lum1104--Understand-Anything|Lum1104/Understand-Anything]] · [[MiniMax-AI--skills|MiniMax-AI/skills]] · [[THU-MAIC--OpenMAIC|THU-MAIC/OpenMAIC]] · [[elder-plinius--G0DM0D3|elder-plinius/G0DM0D3]]

[GitHub](https://github.com/GammaLabTechnologies/harmonist) · [官方網站](https://gammalab.ae)

## 相關收錄

> [!note]- 直接競品（同子分類：代理系統）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "代理系統" AND file.name != "GammaLabTechnologies--harmonist"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "GammaLabTechnologies--harmonist"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "GammaLabTechnologies--harmonist" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "GammaLabTechnologies--harmonist"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["機器學習","自動化測試","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "GammaLabTechnologies--harmonist" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/GammaLabTechnologies--harmonist");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "GammaLabTechnologies--harmonist" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "GammaLabTechnologies" AND file.name != "GammaLabTechnologies--harmonist"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/GammaLabTechnologies--harmonist");
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
> const me = dv.page("Repos/GammaLabTechnologies--harmonist");
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
> const me = dv.page("Repos/GammaLabTechnologies--harmonist");
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
> const me = dv.page("Repos/GammaLabTechnologies--harmonist");
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
> const me = dv.page("Repos/GammaLabTechnologies--harmonist");
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

- [[2026-04-30|2026-04-30]] — 首次收錄，897 stars
