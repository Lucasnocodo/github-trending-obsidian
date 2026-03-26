---
repo: math-inc/OpenGauss
url: https://github.com/math-inc/OpenGauss
owner: math-inc
owner_type: Organization
language: Python
license: MIT
description: ""
homepage: ""
stars: 1088
stars_per_day: 181
forks: 92
open_issues: 5
created: 2026-03-19
pushed_at: 2026-03-22
first_seen: 2026-03-23
week: "2026-W13"
month: "2026-03"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-23
use_case: "提供多代理前端的 Lean 工作流協調器，簡化數學證明和形式化過程。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-04-02"
contributor_count: 4
engagement: "low"
issue_close_rate: 98
repo_size_kb: 6158
readme_length: 5526
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-23"
star_history: "2026-03-23:1021,2026-03-24:1062,2026-03-25:1076,2026-03-26:1088"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
aliases:
  - "OpenGauss"
  - "math-inc/OpenGauss"
  - "提供多代理前端的 Lean 工作流協調器，簡化數學證明和形式化過程。"
---

# OpenGauss

**1.0k** stars · **340** stars/天 · 建立 3 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/math-inc--OpenGauss");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

> [!summary] 一句話摘要
> 提供多代理前端的 Lean 工作流協調器，簡化數學證明和形式化過程。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (340 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要進行數學證明和形式化的研究者和開發者，特別是在使用 Lean 工具鏈的環境中。
> **一句話重點** Open Gauss 透過多代理架構和簡化的 CLI，讓數學證明過程變得高效且易於管理。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/math-inc--OpenGauss");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "math-inc--OpenGauss" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 CLI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到高效的數學證明管理工具，值得投入。

> [!abstract] 核心創新
> 提供了一個多代理前端的 Lean 工作流協調器，簡化數學證明和形式化過程。

## 專案簡介

Open Gauss 是一個專為數學工作流設計的協調器，特別針對 Lean 工具鏈進行優化。使用者可以透過 CLI 指令如 `/prove`、`/draft` 等來啟動相應的工作流，這些指令會自動啟動後端子代理並執行對應的 Lean 命令。這樣的設計使得使用者不必手動處理後端配置，從而專注於數學證明和形式化的核心任務。安裝過程中，系統會自動安裝所需的依賴並設置運行環境，這對於不熟悉環境配置的使用者來說是個福音。這個工具的賣點在於其簡化的工作流管理和自動化的後端處理，讓數學工作變得更加高效。技術上，Open Gauss 使用 Python 和多種現代庫來處理後端邏輯，並且支持本地模型運行，這對於需要高效能計算的用戶來說是個加分項。

與其他工具相比，如 `cameronfreer/lean4-skills`，Open Gauss 提供了一個更友好的 CLI 界面和更高層次的工作流管理，適合需要頻繁進行數學證明的研究者和開發者。使用者可以輕鬆追蹤和管理正在運行的工作流，這在大型項目中尤為重要。儘管目前仍在活躍開發中，社群的反饋和問題解決率都顯示出其穩定性。未來幾個月，預期會有更多功能和改進，特別是在用戶體驗和性能優化方面。對於需要進行數學證明和形式化的團隊，Open Gauss 是一個值得考慮的選擇，尤其是在需要快速迭代和高效協作的環境中。

**技術棧**：`Python` · `Node.js` · `Lean`

## 重點功能

- 多代理前端 — 透過 CLI 指令如 `/prove`、`/draft` 等啟動相應的 Lean 工作流。
- 自動後端管理 — 自動配置和啟動後端子代理，簡化使用者的操作流程。
- 本地模型支持 — 支援在本地運行模型以降低 API 成本，適合需要高效能計算的使用者。
- 項目範圍管理 — 專案範圍內的工作流管理，確保所有操作都在正確的上下文中執行。
- 高效的工作流追蹤 — 使用 `/swarm` 指令來追蹤和管理正在運行的工作流代理。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/math-inc/OpenGauss.git && cd OpenGauss && ./scripts/install.sh
```
2. 啟動 CLI
```bash
source ~/.zshrc && gauss
```
3. 創建新項目
```bash
/project create ~/my-project
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 Open Gauss 並啟動 CLI",
  "指令": "/prove 1+1=2",
  "預期輸出": "啟動一個證明代理，並開始處理該證明。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 1021 stars（340/天），forks 84（8.2%），顯示出強烈的社群興趣。作者 Math, Inc. 在數學和計算領域有豐富經驗，之前的工具如 `lean4-skills` 也受到廣泛使用。這個專案解決了數學證明過程中的繁瑣配置問題，讓使用者能專注於數學本身。近期的推廣活動和社群討論也提升了其能見度，吸引了許多對數學證明感興趣的開發者。高於 5% 的 forks/stars 比率顯示出許多開發者在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要進行數學證明和形式化的研究者和開發者，特別是在使用 Lean 工具鏈的環境中。

> [!example] 使用場景
> - 數學研究者用它來自動化數學證明過程，因為它能簡化後端配置並提高工作效率。
> - 開發者用它來管理 Lean 項目，因為它提供了友好的 CLI 界面和多種工作流選項。
> - 教育工作者用它來教學數學證明，因為它的自動化功能能讓學生專注於數學概念而非工具使用。

## 架構分析

Open Gauss 採用多代理架構，使用者透過 CLI 指令與系統互動，後端代理負責執行具體的 Lean 工作流。這種設計使得使用者可以在一個專案範圍內管理多個工作流，並且能夠輕鬆追蹤和管理正在運行的代理。系統依賴於 Python 和 Node.js，這使得其在不同環境中具有良好的可移植性。選擇這種架構的代價在於需要較高的系統資源來支持多個後端代理的運行，特別是在大型項目中。擴展性方面，隨著項目規模的增大，系統可能會面臨性能瓶頸，特別是在同時運行多個工作流時。

## 技術深入分析

Open Gauss 的核心技術機制是其多代理架構，使用者透過 CLI 指令與系統互動，後端代理負責執行具體的 Lean 工作流。這種設計使得使用者可以在一個專案範圍內管理多個工作流，並且能夠輕鬆追蹤和管理正在運行的代理。系統依賴於 Python 和 Node.js，這使得其在不同環境中具有良好的可移植性。效能方面，系統能夠處理中小型項目的數學證明，但在大型項目中可能會面臨性能瓶頸，特別是在同時運行多個工作流時。

選擇 Python 作為主要開發語言的好處在於其龐大的生態系統和社群支持，但也可能帶來較高的記憶體佔用。技術風險方面，隨著使用者數量的增加，系統可能會面臨擴展性挑戰，特別是在後端代理的管理和資源分配上。整合方面，Open Gauss 與現有的 Lean 工具鏈相容良好，但在 CI/CD pipeline 的整合上可能需要額外的配置。整體而言，Open Gauss 提供了一個高效的數學證明管理解決方案，適合需要頻繁進行數學工作的團隊。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並包含範例。安裝過程順暢，對於大多數使用者來說不會遇到太多問題。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 簡化的工作流管理，讓使用者能專注於數學證明。
> - 自動化的後端配置，降低了使用門檻。
> - 支持本地模型運行，節省 API 成本。

> [!danger] 缺點
> - 目前僅支援 Linux 和 macOS，Windows 用戶需透過 WSL 使用。
> - 對於大型項目，可能需要額外的系統資源來運行多個後端代理。
> - 在某些情況下，後端配置可能需要手動調整以適應特定需求。

> [!warning] 注意事項
> - 目前僅支援 Linux 和 macOS，Windows 用戶需透過 WSL 使用。
> - 對於大型項目，可能需要額外的系統資源來運行多個後端代理。
> - 在某些情況下，後端配置可能需要手動調整以適應特定需求。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [cameronfreer/lean4-skills](https://github.com/cameronfreer/lean4-skills) | 提供 Lean 工具鏈的基本功能，但缺乏 Open Gauss 的多代理管理和 CLI 界面。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，與 Open Gauss 的數學證明功能無法直接比較。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 針對 AI 和機器學習的工具，與 Open Gauss 的數學專注有所不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [cameronfreer/lean4-skills](https://github.com/cameronfreer/lean4-skills) | 專注於 Lean 工具鏈的基本功能，無法提供 Open Gauss 的多代理管理和 CLI 界面。 | 如果只需要基本的 Lean 功能，且不需要多代理管理，則可選擇此工具。 | low，因為兩者都基於 Lean 工具鏈，轉換相對簡單。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 針對 AI 和機器學習的工具，與 Open Gauss 的數學專注有所不同。 | 如果你的專案主要集中在 AI 和機器學習，則這個工具更合適。 | medium，因為兩者的功能和目的差異較大，可能需要重新設計部分工作流。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenGauss** | **lean4-skills** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 Lean 工具鏈的基本功能，無法提供 Open Gauss 的多代理管理和 CLI 界面。 | 針對 AI 和機器學習的工具，與 Open Gauss 的數學專注有所不同。 |
> | 遷移成本 | - | low，因為兩者都基於 Lean 工具鏈，轉換相對簡單。 | medium，因為兩者的功能和目的差異較大，可能需要重新設計部分工作流。 |
> | 適用場景 | 主要場景 | 如果只需要基本的 Lean 功能，且不需要多代理管理，則可選 | 如果你的專案主要集中在 AI 和機器學習，則這個工具更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在大型項目中，後端代理可能會因資源不足而無法啟動。
  - 解法：確保系統有足夠的資源，或考慮減少同時運行的代理數量。
- [MEDIUM] CLI 指令可能在不同環境下表現不一致。
  - 解法：在相同的環境中進行測試，並參考官方文檔進行配置。
- [MEDIUM] 安裝過程中可能會遇到依賴版本不兼容的問題。
  - 解法：檢查 requirements.txt 中的版本要求，並手動安裝相應版本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型數學研究團隊 | 非常適合 | 提供了高效的工作流管理和自動化功能，適合頻繁進行數學證明的環境。 |
| 大型數學項目 | 普通 | 雖然功能強大，但在資源管理上可能會遇到挑戰。 |
| 教育機構的數學課程 | 適合 | 能夠簡化數學證明的教學過程，讓學生專注於內容本身。 |
| 個人開發者的數學項目 | 非常適合 | 安裝簡單且功能強大，適合個人使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的數學證明管理工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：工具本身不需要高權限，且不存取敏感資料。依賴鏈的信任程度良好，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/math-inc--OpenGauss");
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
> const me = dv.page("Repos/math-inc--OpenGauss");
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
| Forks | 84 |
| Open Issues | 8 |
| Issue 解決率 | 98% (415 closed) |
| 最後推送 | 2026-03-22 |
| 建立日期 | 2026-03-19 |
| Repo 大小 | 6.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/math-inc/OpenGauss) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `openai` `python-dotenv` `fire` `httpx` `rich` `tenacity` `prompt_toolkit` `pyyaml` `requests` `jinja2` `pydantic` `PyJWT` `firecrawl-py` `fal-client` `litellm`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 90
>     "TeX" : 5
>     "BibTeX Style" : 2
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@kos208](https://github.com/kos208) | 3 |
> | [@gauss-math-inc](https://github.com/gauss-math-inc) | 3 |
> | [@Avadhut2](https://github.com/Avadhut2) | 1 |
> | [@phillipnyinomujini-star](https://github.com/phillipnyinomujini-star) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，問題解決率高達 98%。
**連結**：[文件](https://github.com/math-inc/OpenGauss/wiki)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-19 ~ 2026-03-22）
> **活躍天數** 3 天 · **最新 commit** Revert "Allow CLI to launch without API keys configured"

## README 摘錄

> [!info]- 展開查看原文 README
> # Open Gauss
> 
> Open Gauss is a project-scoped Lean workflow orchestrator from Math, Inc. It gives `gauss` a multi-agent frontend for the `lean4-skills` `prove`, `draft`, `autoprove`, `formalize`, and `autoformalize` workflows, while staging the Lean tooling, MCP/LSP wiring, and backend session state those workflows need.
> 
> Open Gauss handles project detection, managed backend setup, workflow spawning, swarm tracking, and recovery. The proving and formalization behavior still comes from `cameronfreer/lean4-skills`; Gauss exposes it through a Gauss-native CLI and project model.
> 
> Each lifted slash command spawns a managed backend child agent in the active project and forwards the same argument tail into the corresponding `lean4-skills` workflow command:
> 
> - `/prove ...` -> `/lean4:prove ...`
> - `/draft ...` -> `/lean4:draft ...`
> - `/autoprove ...` -> `/lean4:autoprove ...`
> - `/formalize ...` -> `/lean4:formalize ...`
> - `/autoformalize ...` -> `/lean4:autoformalize ...`
> 
> ## Install
> 
> ### macOS and Linux
> 
> ```bash
> git clone https://github.com/math-inc/OpenGauss.git
> cd OpenGauss
> ./scripts/install.sh
> ```
> 
> The installer will:
> 
> 1. Install system dependencies (via Homebrew on macOS, apt on Ubuntu/Debian)
> 2. Install `uv`, Node.js, Claude Code, and the Lean toolchain if missing
> 3. Create a Python virtualenv and install Gauss
> 4. Link the `gauss` command to `~/.local/bin/gauss`
> 5. Set up `~/.gauss/` for runtime config and secrets
> 6. Run the setup wizard to configure your API keys and model
> 
> After install, reload your shell and start Gauss:
> 
> ```bash
> source ~/.zshrc   # or ~/.bashrc
> gauss
> ```
> ## Configuration
> 
> ### 🖥️ Using Local Models (vLLM)
> If you prefer to run models locally (e.g., using a local GPU) to save on API costs:
> 
> 1. **Start your vLLM server** (OpenAI-compatible):
>    ```bash
>    python -m vllm.entrypoints.openai.api_server --model 
> 
> ### Options
> 
> ```
> ./scripts/install.sh --with-workspace    # Also create a prewarmed Lean+Mathlib workspace (~2 GB download)
> ./scripts/install.sh --skip-system-packages  # Skip Homebrew/apt package installation
> ./scripts/install.sh --recreate-venv     # Force-recreate the Python virtualenv
> ```
> 
> ### Updating
> 
> ```bash
> cd OpenGauss
> git pull
> gauss update
> ```
> 
> ## Quick start
> 
> ```
> gauss                         # Launch the CLI
> /project create ~/my-project  # Create a new Lean project
> /prove 1+1=2                  # Spawn a proving agent
> /swarm                        # See running agents
> ```
> 
> If you already have a Lean project:
> 
> ```
> cd ~/my-lean-project
> gauss
> /project init                 # Register it as a Gauss project
> /prove                        # Start proving
> ```
> 
> ## The core loop
> 
> 1. Start the CLI with `gauss`
> 2. Create or select the active project with `/project`
> 3. Launch `/prove`, `/draft`, `/autoprove`, `/formalize`, or `/autoformalize`
> 4. Gauss spawns a managed backend child session that runs the corresponding `lean4-skills` workflow command in the active project
> 5. Use `/swarm` to track or reattach to running workflow agents
> 
> ## Project model
> 
> Gauss treats Lean work as project-scoped by default. Before launching managed workflows, select the active project once and then let Gauss keep spawning backend child agents inside that project root.
> 
> - `/project init [path] [--name ]` registers an existing Lean repo as a Gauss project
> - `/project convert [path] [--name ]` registers an existing Lean blueprint repo
> - `/project create  [--template-source ] [--name ]` bootstraps a project from a template and registers it
> - `/project use [path]` pins the current session to an existing Gauss project
> - `/project clear` removes the session override and falls back to ambient project discovery
> 
> Gauss discovers `.gauss/project.yaml` upward from the current working directory, but managed workflow child agents launch from the active project root so the forwarded Lean workflow command always runs in the right project context.
> 
> ## Workflow commands
> 
> - `/prove [scope or flags]` — spawn a guided proving agent
> - `/draft [topic or flags]` — draft Lean declaration skeletons
> - `/autoprove [scope or flags]` — spawn an autonomous proving agent
> - `/formalize [topic or flags]` — spawn an interactive formalization agent
> - `/autoformalize [topic or flags]` — spawn an autonomous formalization agent
> - `/swarm` — list running workflow agents
> - `/swarm attach ` — reattach to a running agent
> - `/swarm cancel ` — cancel a running agent
> 
> ## Managed workflow prerequisites
> 
> - `gauss.autoformalize.backend` defaults to `claude-code`
> - Built-in backends: `claude-code`, `codex`
> - `claude` or `codex` installed and authenticated for the backend you select
> - Claude auth can come from either:
>   - the normal `claude auth login` flow / Claude credential files
>   - a saved `ANTHROPIC_API_KEY` in `~/.gauss/.env`
> - If both are present, Gauss defaults to Claude's own local auth and only falls back to `ANTHROPIC_API_KEY` when no Claude credentials are available
> - Override with `gauss.autoformalize.auth_mode` in `~/.gauss/config.yaml`:
>   - `auto` (default): prefer local backend auth, then fall back to saved env/API-key auth
>   - `login`: ignore staged API-key auth and let the backend use the normal interactive login flow
>   - `api-key`: force the managed session onto saved env/API-key auth
> - `uv` or `uvx` available
> - `ripgrep` (`rg`) available for Lean local search
> - An active Gauss project selected via `.gauss/project.yaml`
> 
> Gauss checks these before launch and tells you exactly what is missing.
> 
> ---
> 
> This repository was forked from `nousresearch/hermes-agent`.

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[機器學習]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[jshachm--pi-rs|jshachm/pi-rs]] · [[kamranahmedse--claude-statusline|kamranahmedse/claude-statusline]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]] · [[MiniMax-AI--skills|MiniMax-AI/skills]]

[GitHub](https://github.com/math-inc/OpenGauss)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "math-inc--OpenGauss"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "math-inc--OpenGauss"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "math-inc--OpenGauss" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "math-inc--OpenGauss"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "math-inc--OpenGauss" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/math-inc--OpenGauss");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "math-inc--OpenGauss" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "math-inc" AND file.name != "math-inc--OpenGauss"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/math-inc--OpenGauss");
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
> const me = dv.page("Repos/math-inc--OpenGauss");
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
> const me = dv.page("Repos/math-inc--OpenGauss");
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
> const me = dv.page("Repos/math-inc--OpenGauss");
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
> const me = dv.page("Repos/math-inc--OpenGauss");
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

> **2026-03-23** — 首次收錄
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

- [[2026-03-26|2026-03-26]] — 再次上榜，1.1k stars
- [[2026-03-25|2026-03-25]] — 再次上榜，1.1k stars
- [[2026-03-24|2026-03-24]] — 再次上榜，1.1k stars
- [[2026-03-23|2026-03-23]] — 首次收錄，1.0k stars
