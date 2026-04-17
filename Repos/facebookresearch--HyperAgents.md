---
repo: facebookresearch/HyperAgents
url: https://github.com/facebookresearch/HyperAgents
owner: facebookresearch
owner_type: Organization
language: Python
license: NOASSERTION
description: "Self-referential self-improving agents that can optimize for any computable task"
homepage: ""
stars: 2312
stars_per_day: 83
forks: 292
open_issues: 22
created: 2026-03-19
pushed_at: 2026-04-14
first_seen: 2026-03-26
week: "2026-W13"
month: "2026-03"
category: "AI/ML"
subcategory: "Agent 框架"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-26
use_case: "自我參照的自我改進代理，能優化任何可計算的任務。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-02"
contributor_count: 3
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 16259
readme_length: 2381
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-26"
star_history: "2026-03-26:912,2026-03-26:919,2026-03-27:1339,2026-03-29:1771,2026-03-30:1856,2026-03-31:1952,2026-04-01:2001,2026-04-02:2029,2026-04-03:2072,2026-04-04:2099,2026-04-05:2116,2026-04-06:2133,2026-04-07:2156,2026-04-08:2172,2026-04-09:2184,2026-04-10:2195,2026-04-11:2206,2026-04-12:2214,2026-04-13:2233,2026-04-14:2255,2026-04-15:2274,2026-04-16:2289,2026-04-17:2312"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "HyperAgents"
  - "facebookresearch/HyperAgents"
  - "自我參照的自我改進代理，能優化任何可計算的任務。"
---

# HyperAgents

**2.3k** stars · **83** stars/天 · 建立 28 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/facebookresearch--HyperAgents");
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
> 自我參照的自我改進代理，能優化任何可計算的任務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (83 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 2 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 對自我改進代理有興趣的研究者和開發者，尤其是在 AI 和強化學習領域。
> **一句話重點** HyperAgents 的自我改進能力讓它在 AI 代理領域中脫穎而出，尤其在需要持續學習的應用場景中。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/facebookresearch--HyperAgents");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Agent 框架" && p.file.name !== "facebookresearch--HyperAgents" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 Agent 框架 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學習，12 小時整合，得到持續優化的代理，值得嘗試。

> [!abstract] 核心創新
> 這個專案的核心創新在於其自我參照的自我改進代理，能夠優化任何可計算的任務。

## 專案簡介

HyperAgents 是一個設計用於自我改進的代理系統，能夠優化各種可計算的任務。使用者首先需要設定 API 金鑰並安裝必要的依賴，然後透過 `generate_loop.py` 腳本啟動代理，這個腳本會根據指定的領域運行演算法並將輸出儲存至 `outputs/` 目錄。這個系統的賣點在於其自我改進能力，能夠在多次迭代中學習並優化性能。技術上，它使用 Python 及 Docker 來管理環境，並依賴多個庫如 `requests`、`pandas` 和 `gym` 來支持其功能。這些選擇使得 HyperAgents 能夠在多種環境中運行，並且能夠輕鬆擴展。

與其他類似工具相比，如 `0xGF/boneyard` 和 `AgentSeal/codeburn`，HyperAgents 的獨特之處在於其強調自我改進的能力，而不是僅僅執行預定任務。這使得它在需要持續學習和適應的場景中更具優勢。使用者在實際操作中可能會遇到的問題包括缺失的實驗日誌和安全性考量，這些都在熱門問題中有所反映。整體而言，這個專案目前處於 alpha 階段，適合對自我改進代理有興趣的研究者和開發者，但在生產環境中使用時需謹慎考量其安全性和穩定性。

**技術棧**：`Python 3.12` · `Docker` · `requests 2.32.4` · `pandas 2.3.2` · `gym 0.23.0`

## 重點功能

- 自我改進能力 — 代理能在多次迭代中學習並優化性能。
- 多領域支持 — 可以針對不同的計算任務進行優化。
- Docker 支持 — 透過 Docker 容器簡化環境設置。
- 可視化分析 — 提供分析腳本以便於性能評估。
- 安全考量 — 提供使用不受信代碼的警告，強調安全性。

## 快速開始

1. 安裝必要的系統依賴
```bash
sudo dnf install -y python3.12-devel graphviz graphviz-devel cmake ninja-build bzip2-devel zlib-devel ncurses-devel libffi-devel
```
2. 建立虛擬環境並安裝依賴
```bash
python3.12 -m venv venv_nat && source venv_nat/bin/activate && pip install -r requirements.txt
```
3. 構建 Docker 容器
```bash
docker build --network=host -t hyperagents .
```
4. 設置初始代理
```bash
bash ./setup_initial.sh
```
5. 運行 HyperAgents
```bash
python generate_loop.py --domains
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝必要的依賴和設置 API 金鑰。",
  "指令": "python generate_loop.py --domains",
  "預期輸出": "輸出將會儲存在 outputs/ 目錄中。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 28 天就累積 2312 stars（83/天），forks 292（12.6%），這顯示出相對活躍的社群參與。這個專案的主要貢獻者包括 Rybolos 和 dependabot，顯示出有活躍的維護者。HyperAgents 解決了自我改進代理的需求，這在過去的工具中並不常見，許多工具僅限於執行固定任務，無法自我優化。最近的討論和問題反映出用戶對於實驗日誌和安全性的關注，這可能是促進其關注度的原因之一。技術上，隨著深度學習和強化學習的進步，這種自我改進的能力變得可行，並且在當前的 AI 生態中具有重要意義。forks/stars 比率為 12.6%，顯示出有相當一部分用戶在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：對自我改進代理有興趣的研究者和開發者，尤其是在 AI 和強化學習領域。

> [!example] 使用場景
> - AI 研究者用它來開發自我改進的智能代理，因為它能夠在多次迭代中學習並優化性能。
> - 機器學習工程師用它來測試不同的演算法在特定任務上的表現，因為它提供了靈活的環境來進行實驗。
> - 開發者用它來構建自動化工具，因為其自我改進的特性能夠持續提升工具的效率和準確性。

## 架構分析

HyperAgents 的架構設計為模組化，主要由多個代理組成，這些代理能夠在不同的計算領域中運行。使用 Docker 來管理環境，這降低了依賴衝突的風險，但也增加了初始設置的複雜度。資料流中，`generate_loop.py` 作為入口點，負責啟動代理並收集輸出。

選擇 Python 作為主要語言使得開發和維護相對容易，但在性能上可能不如 C++ 等編譯語言。這個設計使得系統在擴展性上有一定的瓶頸，特別是在處理大量並行任務時，可能會受到 Python GIL 的限制。整體來說，這種架構適合快速開發和原型設計，但在生產環境中可能需要進一步優化。

## 技術深入分析

HyperAgents 的核心技術機制在於其自我參照的設計，這使得代理能夠在運行過程中持續學習和優化。使用 Python 作為主要開發語言，並結合 Docker 進行環境管理，這樣的選擇使得開發過程更為靈活，但在性能上可能會受到影響。系統能夠處理多種計算任務，但在高負載情況下，Python 的 GIL 可能會成為瓶頸。設計上，這個系統的模組化架構使得各個代理能夠獨立運行，這樣的設計有助於快速迭代和測試，但在整合時可能會遇到挑戰。對於外部 API 的依賴程度較高，這可能會在未來的擴展中造成技術債。整體而言，這個專案在快速開發和原型設計上表現優異，但在生產環境中需要謹慎考量其穩定性和安全性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和基本使用說明，但缺乏詳細的範例。安裝過程中需要注意系統依賴的配置，這可能會對新手造成困難。整體而言，對於有一定技術背景的使用者來說，能在 30 分鐘內完成設置並運行起來，但對於新手則可能需要更多的時間來理解各個步驟。

## 優缺點分析

> [!success] 優點
> - 自我改進能力強，能持續優化性能。
> - 模組化設計，便於擴展和維護。
> - Docker 支持，簡化環境配置。

> [!danger] 缺點
> - 安全性風險，執行不受信代碼可能導致問題。
> - 目前處於 alpha 階段，穩定性不足。
> - 安裝過程複雜，需要多個依賴。

> [!warning] 注意事項
> - 需要安裝多個系統依賴，對環境配置有一定要求。
> - 目前處於 alpha 階段，可能存在不穩定性。
> - 安全性考量，執行不受信代碼可能導致潛在風險。
> - 實驗日誌下載存在問題，可能影響使用體驗。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於執行固定任務，無法自我改進，適合需要穩定執行的場景。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 這個工具提供安全的執行環境，但不具備自我改進的能力，適合對安全性有高要求的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於執行固定任務，無法自我改進，適合需要穩定執行的場景。 | 如果你的專案需要穩定的執行環境，而不需要自我學習的能力。 | low，因為其設計理念和功能範圍相對簡單。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 這個工具提供安全的執行環境，但不具備自我改進的能力，適合對安全性有高要求的用戶。 | 如果你的專案對安全性有高要求，並且不需要自我優化的功能。 | medium，因為需要重新設計部分工作流程以適應其安全性特性。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **HyperAgents** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具專注於執行固定任務，無法自我改進，適合需要穩定執行的場景。 | 這個工具提供安全的執行環境，但不具備自我改進的能力，適合對安全性有高要求的用戶。 |
> | 遷移成本 | - | low，因為其設計理念和功能範圍相對簡單。 | medium，因為需要重新設計部分工作流程以適應其安全性特性。 |
> | 適用場景 | 主要場景 | 如果你的專案需要穩定的執行環境，而不需要自我學習的能力。 | 如果你的專案對安全性有高要求，並且不需要自我優化的功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人研究和實驗，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 實驗日誌無法下載，可能因為缺失的 LFS 物件
  - 解法：檢查 LFS 設定，或手動下載日誌
- [MEDIUM] 安全性警告未明確說明潛在風險
  - 解法：在使用前仔細閱讀安全考量部分
- [MEDIUM] 安裝過程中可能遇到依賴衝突
  - 解法：確保系統環境與需求相符，必要時使用虛擬環境

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| AI 研究實驗室的自我學習代理 | 非常適合 | 其自我改進能力能持續優化實驗結果。 |
| 小型團隊的自動化工具開發 | 適合 | 能夠快速迭代和測試不同的自動化策略。 |
| 大型企業的生產環境 | 不適合 | 目前不穩定，存在高風險的安全性問題。 |
| 個人開發者的 AI 代理實驗 | 非常適合 | 能夠在小範圍內進行快速實驗和改進。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~12 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學習，12 小時整合，得到持續優化的代理，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：執行不受信代碼可能導致潛在問題，使用時需謹慎。依賴的第三方庫需定期檢查安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/facebookresearch--HyperAgents");
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
> const me = dv.page("Repos/facebookresearch--HyperAgents");
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
| Forks | 292 |
| Open Issues | 22 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-14 |
| 建立日期 | 2026-03-19 |
| Repo 大小 | 15.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/facebookresearch/HyperAgents) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `requests` `dotenv` `tqdm` `backoff` `matplotlib` `docker` `datasets` `GitPython` `litellm` `pandas` `sympy` `hydra-core` `gym` `gymnasium` `setuptools`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "Dockerfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Rybolos](https://github.com/Rybolos) | 5 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 2 |
> | [@jennyzzt](https://github.com/jennyzzt) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度中等，存在多個開放問題尚未解決。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-20 ~ 2026-04-14）
> **活躍天數** 3 天 · **最新 commit** update outputs_os

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/facebookresearch/HyperAgents/issues/13) | Experiment logs archive in README cannot be downloaded/extra | 3 | 2 |
> | [#20](https://github.com/facebookresearch/HyperAgents/issues/20) | feat(analysis): RunTrendAnalyzer — detect performance regres | 2 | 1 |
> | [#17](https://github.com/facebookresearch/HyperAgents/issues/17) | Safety policy for constraining meta-agent modifications | 1 | 27 |
> | [#25](https://github.com/facebookresearch/HyperAgents/issues/25) | run | 0 | 0 |
> | [#24](https://github.com/facebookresearch/HyperAgents/issues/24) | secret  | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> HyperAgents
> 
> Self-referential self-improving agents that can optimize for any computable task
> 
> ---
> 
> ## Setup
> ```bash
> # API keys, put these into .env file
> OPENAI_API_KEY=...
> ANTHROPIC_API_KEY=...
> GEMINI_API_KEY=...
> ```
> 
> ```bash
> # Install things
> sudo dnf install -y python3.12-devel
> sudo dnf install -y graphviz graphviz-devel cmake ninja-build bzip2-devel zlib-devel ncurses-devel libffi-devel
> ```
> 
> ```bash
> # Create virtual environment
> python3.12 -m venv venv_nat
> source venv_nat/bin/activate
> pip install -r requirements.txt
> pip install -r requirements_dev.txt
> # To build the docker container
> docker build --network=host -t hyperagents .
> ```
> 
> ```bash
> # Setup initial agents
> bash ./setup_initial.sh
> ```
> 
> ## Running HyperAgents
> 
> ```bash
> # See the script for args, and baseline selections
> python generate_loop.py --domains 
> ```
> 
> By default, outputs will be saved in `outputs/` directory.
> 
> ## File Structure
> - `agent/` code for using foundation models
> - `analysis/` scripts used for plotting and analysis
> - `domains/` code for each domain
> - `utils/` common code used in the repo
> - `run_meta_agent.py` script to help run the meta agent and get the diffs
> - `meta_agent.py` main implementation of the meta agent
> - `task_agent.py` main implementation of the task agent
> - `generate_loop.py` entry point for running the algorithm
> 
> ## Logs from Experiments
> 
> The experiment logs can be downloaded here: https://drive.google.com/drive/folders/164fKQWgLM18foOzSnpv0F_I3TNpX8u8-?usp=sharing
> 
> ## Safety Consideration
> > [!WARNING]  
> > This repository involves executing untrusted, model-generated code. We strongly advise users to be aware of the associated safety risks. While it is highly unlikely that such code will perform overtly malicious actions under our current settings and with the models we use, it may still behave destructively due to limitations in model capability or alignment. By using this repository, you acknowledge and accept these risks.
> 
> ## Citing
> If you find this project useful, please consider citing:
> ```bibtex
> @misc{zhang2026hyperagents,
>       title={Hyperagents}, 
>       author={Jenny Zhang and Bingchen Zhao and Wannan Yang and Jakob Foerster and Jeff Clune and Minqi Jiang and Sam Devlin and Tatiana Shavrina},
>       year={2026},
>       eprint={2603.19461},
>       archivePrefix={arXiv},
>       primaryClass={cs.AI},
>       url={https://arxiv.org/abs/2603.19461}, 
> }
> ```

## 延伸閱讀

相關概念：[[強化學習]] · [[自動化]] · [[多模態]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[facebookresearch--tribev2|facebookresearch/tribev2]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]]

[GitHub](https://github.com/facebookresearch/HyperAgents)

## 相關收錄

> [!note]- 直接競品（同子分類：Agent 框架）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Agent 框架" AND file.name != "facebookresearch--HyperAgents"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "facebookresearch--HyperAgents"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "facebookresearch--HyperAgents" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W13" AND file.name != "facebookresearch--HyperAgents"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["強化學習","自動化","多模態"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "facebookresearch--HyperAgents" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/facebookresearch--HyperAgents");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "facebookresearch--HyperAgents" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "facebookresearch" AND file.name != "facebookresearch--HyperAgents"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/facebookresearch--HyperAgents");
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
> const me = dv.page("Repos/facebookresearch--HyperAgents");
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
> const me = dv.page("Repos/facebookresearch--HyperAgents");
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
> const me = dv.page("Repos/facebookresearch--HyperAgents");
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
> const me = dv.page("Repos/facebookresearch--HyperAgents");
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

> **2026-03-26** — 首次收錄
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

- [[2026-03-26|2026-03-26]] — 首次收錄，912 stars
