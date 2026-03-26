---
repo: facebookresearch/HyperAgents
url: https://github.com/facebookresearch/HyperAgents
owner: facebookresearch
owner_type: Organization
language: Python
license: NOASSERTION
description: "Self-referential self-improving agents that can optimize for any computable task"
homepage: ""
stars: 912
stars_per_day: 152
forks: 135
open_issues: 9
created: 2026-03-19
pushed_at: 2026-03-23
first_seen: 2026-03-26
week: "2026-W13"
month: "2026-03"
category: "AI/ML"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-26
use_case: "自我參照的自我改進代理，可以優化任何可計算的任務。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-02"
contributor_count: 2
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 16273
readme_length: 2509
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-26"
star_history: "2026-03-26:912"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "HyperAgents"
  - "facebookresearch/HyperAgents"
  - "自我參照的自我改進代理，可以優化任何可計算的任務。"
---

# HyperAgents

**912** stars · **152** stars/天 · 建立 6 天前 · Python · NOASSERTION

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
> 自我參照的自我改進代理，可以優化任何可計算的任務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (152 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 2 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要開發自我優化算法的 AI 研究人員和開發者。
> **一句話重點** HyperAgents 的自我改進能力使其在計算任務中具有獨特的優勢。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/facebookresearch--HyperAgents");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "facebookresearch--HyperAgents" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，15 小時整合，得到自我優化的能力，值得嘗試。

> [!abstract] 核心創新
> 這個專案的核心創新在於其自我參照的自我改進能力，能夠優化任何可計算的任務。

## 專案簡介

HyperAgents 是一個自我參照的自我改進代理系統，旨在優化各種可計算任務。用戶需透過設置 API 金鑰來啟動系統，然後可以使用 `python generate_loop.py --domains` 指令來運行算法，預設輸出會保存在 `outputs/` 目錄中。這個系統的核心在於其能夠不斷自我優化，通過執行和評估生成的代碼來提升性能。技術上，HyperAgents 使用了 Python 和 Docker，並依賴多個庫如 `requests` 和 `gym`，這使得它能夠在多種環境中靈活運行。這個專案的賣點在於其自我改進的能力，能夠在執行過程中學習並調整策略。

與傳統的靜態算法相比，HyperAgents 的動態學習能力能夠更好地適應變化的需求。與其他類似工具如 `AlpinDale/parsync` 和 `BigBodyCobain/Shadowbroker` 相比，HyperAgents 提供了更高的靈活性和自我調整的能力，特別是在需要持續優化的任務中。實際使用中，這個系統能夠處理複雜的計算任務，但也需要注意其潛在的安全風險，因為它涉及執行未經信任的代碼。這個專案目前處於早期階段，社群活躍度尚可，但仍需時間來解決現有的問題。對於需要自我優化算法的開發者來說，HyperAgents 是一個值得關注的選擇。

**技術棧**：`Python 3.12` · `Docker` · `requests 2.32.4` · `gym 0.23.0`

## 重點功能

- 自我改進能力 — 能夠在執行過程中學習並調整策略。
- 多任務支持 — 可以優化各種可計算的任務，靈活應對不同需求。
- Docker 支持 — 提供 Dockerfile 以便於在不同環境中運行。
- 實驗日誌管理 — 實驗日誌以多部分 ZIP 檔案存儲，便於管理和分析。
- 安全考量 — 提醒用戶執行未經信任的代碼的潛在風險。

## 快速開始

1. 安裝必要的系統依賴
```bash
sudo dnf install -y python3.12-devel graphviz graphviz-devel cmake ninja-build bzip2-devel zlib-devel ncurses-devel libffi-devel
```
2. 創建虛擬環境並安裝依賴
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
  "前置條件": "已安裝必要的依賴和設置環境變數。",
  "指令": "python generate_loop.py --domains",
  "預期輸出": "預設輸出會保存在 outputs/ 目錄中。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 912 stars（152/天），forks 135（14.8%），顯示出強勁的增長潛力。這個專案由 Facebook Research 團隊開發，該團隊在 AI 和機器學習領域有著豐富的經驗。HyperAgents 解決了傳統算法在面對動態環境時的不足，提供了一種新的自我改進方法。近期的社群討論和學術引用也提升了其曝光率。技術上，隨著計算能力的提升，這種自我優化的代理系統變得越來越可行，這使得 HyperAgents 成為一個具潛力的工具。forks/stars 比率為 14.8%，顯示出有相當比例的用戶在積極修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要開發自我優化算法的 AI 研究人員和開發者。

> [!example] 使用場景
> - AI 研究人員用它來開發自我改進的算法，因為它能夠在多種計算任務中自動優化性能。
> - 數據科學家用它來自動調整模型參數，因為這樣可以節省大量手動調整的時間。
> - 開發者用它來測試和評估不同的計算策略，因為其自我學習能力能夠快速適應變化的需求。

## 架構分析

HyperAgents 的架構設計以模組化為核心，便於擴展和維護。系統主要由多個代理組成，每個代理專注於不同的計算任務，透過 `meta_agent.py` 進行協調。資料流從用戶輸入開始，經過各個代理的處理，最終生成結果並輸出到指定目錄。

選擇 Python 作為開發語言，因為其在 AI 和數據科學領域的廣泛應用和豐富的庫支持。這種設計使得系統能夠靈活應對不同的任務需求，但也帶來了對外部庫的依賴，可能增加了維護成本。擴展性方面，隨著代理數量的增加，系統的性能可能會受到影響，特別是在資源有限的環境中。

## 技術深入分析

HyperAgents 的核心技術機制在於其自我參照的設計，這使得系統能夠在執行過程中不斷學習和優化。使用了多個 Python 庫來支持其功能，如 `gym` 用於模擬環境，`requests` 用於 API 通信。這個系統能夠處理多種計算任務，具體性能依賴於所選的代理和任務複雜度。由於使用了 Docker，這使得部署和環境配置變得更加簡單，但也增加了對 Docker 環境的依賴。設計上選擇 Python 是因為其在 AI 領域的廣泛應用，但這也意味著在性能上可能不如某些編譯語言。技術風險方面，執行未經信任的代碼可能導致安全問題，這在設計時需要特別考量。整合方面，HyperAgents 可以與多種主流框架和工具鏈相容，但在某些情況下可能需要額外的適配層。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和使用範例，整體質量良好。安裝過程需要安裝多個系統依賴，可能對新手造成一定困難。沒有提供專門的入門指南，但基本的使用流程已在文件中說明。文件目前僅提供英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 自我改進能力強，能夠適應變化的需求。
> - 模組化設計，便於擴展和維護。
> - 支持多種計算任務，靈活性高。

> [!danger] 缺點
> - 安全風險高，執行未經信任的代碼。
> - 依賴多個外部庫，可能導致兼容性問題。
> - 目前功能尚不完全成熟，可能存在穩定性問題。

> [!warning] 注意事項
> - 需要高權限執行某些操作。
> - 執行未經信任的代碼可能存在安全風險。
> - 依賴多個外部庫，可能導致兼容性問題。
> - 目前處於早期階段，功能和穩定性尚未完全成熟。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | AlpinDale/parsync 專注於資料同步，而 HyperAgents 提供自我優化的能力，適用於更廣泛的計算任務。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 主要用於數據隱私，而 HyperAgents 則專注於自我改進和優化計算性能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | Flowseal/tg-ws-proxy 專注於 Telegram 的 WebSocket 代理，而 HyperAgents 提供更廣泛的自我優化能力。 | 如果你的專案專注於即時通訊和 WebSocket 代理，Flowseal/tg-ws-proxy 會是更合適的選擇。 | low，因為兩者的基本架構和使用方式相似。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | NVIDIA/NemoClaw 專注於深度學習模型的訓練和推理，而 HyperAgents 則針對自我優化的計算任務。 | 如果你的需求主要是深度學習模型的訓練，NVIDIA/NemoClaw 會更合適。 | medium，因為需要重構部分代碼以適應不同的框架。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **HyperAgents** | **tg-ws-proxy** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Flowseal/tg-ws-proxy 專注於 Telegram 的 WebSocket 代理，而 HyperAgents 提供更廣泛的自我優化能力。 | NVIDIA/NemoClaw 專注於深度學習模型的訓練和推理，而 HyperAgents 則針對自我優化的計算任務。 |
> | 遷移成本 | - | low，因為兩者的基本架構和使用方式相似。 | medium，因為需要重構部分代碼以適應不同的框架。 |
> | 適用場景 | 主要場景 | 如果你的專案專注於即時通訊和 WebSocket 代理，Fl | 如果你的需求主要是深度學習模型的訓練，NVIDIA/Nemo |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和研究，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 執行未經信任的代碼可能導致安全問題，特別是在不受控的環境中。
  - 解法：在受控環境中運行，並仔細審查生成的代碼。
- [MEDIUM] Docker 環境配置不當可能導致運行失敗。
  - 解法：確保 Docker 環境正確配置，並參考官方文檔。
- [MEDIUM] 依賴庫版本不兼容可能導致錯誤。
  - 解法：定期檢查依賴庫版本，並根據需求進行更新。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要自我優化算法的 AI 研究團隊 | 非常適合 | 其自我改進能力能夠滿足不斷變化的研究需求。 |
| 小型專案的開發者 | 適合 | 可以快速實現自我優化的功能，但需注意安全風險。 |
| 大型企業的生產環境 | 不適合 | 目前處於 alpha 階段，穩定性不足，不建議用於關鍵任務。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~15 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，15 小時整合，得到自我優化的能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要高權限執行，並可能存取敏感資料，使用時需謹慎。

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
| Forks | 135 |
| Open Issues | 9 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-23 |
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

## 社群與生態

**社群活躍度**：社群活躍度尚可，但仍需時間來解決現有的問題。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-20 ~ 2026-03-23）
> **活躍天數** 2 天 · **最新 commit** adding paper citation

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
> The experiment logs are stored as a multi-part ZIP archive. To extract them, ensure all .z01, .z02, etc., files are in the same directory as the .zip file, then run:
> ```bash
> zip -s 0 outputs_os_parts.zip --out unsplit_logs.zip
> unzip unsplit_outputs.zip
> ```
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

相關概念：[[自動化]] · [[強化學習]] · [[AI 代理]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[VoltAgent--awesome-codex-subagents|VoltAgent/awesome-codex-subagents]]

[GitHub](https://github.com/facebookresearch/HyperAgents)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "facebookresearch--HyperAgents"
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
> const concepts = ["自動化","強化學習","AI 代理"];
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
