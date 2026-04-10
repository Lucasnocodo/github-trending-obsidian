---
repo: facebookresearch/HyperAgents
url: https://github.com/facebookresearch/HyperAgents
owner: facebookresearch
owner_type: Organization
language: Python
license: NOASSERTION
description: "Self-referential self-improving agents that can optimize for any computable task"
homepage: ""
stars: 2195
stars_per_day: 105
forks: 278
open_issues: 17
created: 2026-03-19
pushed_at: 2026-04-03
first_seen: 2026-03-26
week: "2026-W13"
month: "2026-03"
category: "AI/ML"
subcategory: "自我改進系統"
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
contributor_count: 2
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 16242
readme_length: 2509
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-26"
star_history: "2026-03-26:912,2026-03-26:919,2026-03-27:1339,2026-03-29:1771,2026-03-30:1856,2026-03-31:1952,2026-04-01:2001,2026-04-02:2029,2026-04-03:2072,2026-04-04:2099,2026-04-05:2116,2026-04-06:2133,2026-04-07:2156,2026-04-08:2172,2026-04-09:2184,2026-04-10:2195"
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

**2.2k** stars · **105** stars/天 · 建立 21 天前 · Python · NOASSERTION

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
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (105 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 6 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 對自我改進 AI 系統有興趣的研究者和開發者，特別是在高性能計算領域。
> **一句話重點** HyperAgents 的自我改進能力使其在 AI 系統中具備獨特的優勢，能夠根據需求不斷調整和優化。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/facebookresearch--HyperAgents");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自我改進系統" && p.file.name !== "facebookresearch--HyperAgents" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自我改進系統 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，15 小時整合，得到強大的自我改進能力，值得嘗試。

> [!abstract] 核心創新
> 這個專案的核心創新在於其自我改進的能力，透過 meta-agent 機制持續優化性能。

## 專案簡介

HyperAgents 是一個自我參照的自我改進代理系統，設計用來優化各種可計算的任務。用戶需先設置 API 金鑰並安裝必要的依賴，然後透過 `python generate_loop.py --domains` 指令啟動代理，並將結果存儲在 `outputs/` 目錄中。這個系統的核心在於其能夠自我改進，透過不斷的迭代來提升性能，這是透過一個名為 meta-agent 的結構來實現的，該結構能夠調整自身的行為以適應不同的任務需求。技術上，HyperAgents 使用 Python 作為主要語言，並依賴 Docker 來管理環境，這使得部署變得簡單且一致。這個專案的設計考量了安全性，因為它涉及執行不受信任的模型生成代碼，這可能帶來潛在的風險。

與其他類似工具相比，HyperAgents 的獨特之處在於其自我改進的能力，這使得它能夠在多次迭代中優化性能，而不是僅僅依賴靜態的算法。這種設計使得它在面對複雜任務時，能夠持續學習和適應。使用者在實際操作中可能會遇到一些常見問題，例如實驗日誌的提取問題，這些都在熱門 Issues 中有反映。整體來看，這是一個具有前瞻性的專案，適合對自我改進 AI 系統有興趣的開發者和研究者。

**技術棧**：`Python 3.12` · `Docker` · `requests 2.32.4` · `matplotlib 3.10.3`

## 重點功能

- 自我改進能力 — 透過 meta-agent 機制，系統能夠在多次迭代中優化性能。
- 多任務支持 — 能夠針對不同的計算任務進行調整和優化。
- 安全性考量 — 提供警告，使用者需了解執行不受信任代碼的風險。
- 實驗日誌管理 — 支持將實驗結果存儲並提取，方便後續分析。
- Docker 支持 — 透過 Docker 簡化環境設置，確保一致性。

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
  "前置條件": "必須安裝必要的依賴和設置環境變數。",
  "指令": "python generate_loop.py --domains",
  "預期輸出": "結果將保存到 outputs/ 目錄中。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 21 天就累積 2195 stars（105/天），forks 278（12.7%），顯示出強勁的興趣增長。這個專案的主要貢獻者包括 Rybolos 和 dependabot，前者在 AI 領域有豐富的經驗。HyperAgents 解決了以往自我改進系統在性能優化上的不足，通過引入 meta-agent 機制，讓系統能夠在多次迭代中持續改進。這種自我優化的能力在傳統的機器學習模型中並不常見，並且在社群中引發了討論，特別是在安全性和性能回歸檢測的議題上。這些因素共同促進了該專案的快速增長。

## 適合誰使用

**目標受眾**：對自我改進 AI 系統有興趣的研究者和開發者，特別是在高性能計算領域。

> [!example] 使用場景
> - AI 研究者用它來開發和測試自我改進的 AI 系統，因為它能夠自動優化性能，減少手動調整的需求。
> - 數據科學家用它來分析和優化複雜的計算任務，因為其自我改進的特性能夠在多次迭代中提升結果的準確性。
> - 開發者用它來構建自適應的應用程式，因為它能根據用戶的需求不斷調整自身行為，提供更好的用戶體驗。

## 架構分析

HyperAgents 採用模組化架構，將功能劃分為多個子模組，如 agent、analysis、domains 和 utils。這樣的設計使得不同的功能可以獨立開發和測試，降低了整體系統的複雜度。資料流方面，主要是透過 `generate_loop.py` 來啟動整個流程，並在各個模組之間傳遞數據。選擇 Python 作為開發語言的原因在於其豐富的生態系統和易於使用的特性，但這也可能導致性能瓶頸，特別是在處理大量數據時。擴展性方面，這個架構能夠支持多任務的執行，但在面對極大規模的計算時，可能需要進一步的優化來提高效率。

## 技術深入分析

HyperAgents 的核心技術機制在於其 meta-agent 的設計，這使得系統能夠在多次迭代中自我改進。使用 Python 作為主要語言，這使得開發過程相對簡單，但在性能上可能不如 C++ 等語言。這個系統能夠處理大量的計算任務，具體的性能數據尚未提供，但在設計上考慮到了擴展性和靈活性。選擇 Docker 來管理環境，這樣的設計使得部署變得簡單且一致，但也可能增加了學習曲線。技術風險方面，執行不受信任的代碼可能導致安全問題，這在實際使用中需要特別注意。整合方面，與主流框架的相容性尚未詳細說明，但基於 Python 的生態系統，應該能夠與多數工具鏈兼容。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和使用範例，整體上易於理解。安裝過程中需要注意系統依賴的安裝，可能對新手造成困難。雖然有提供初步的使用指導，但缺乏詳細的 getting started guide。文件目前僅提供英文版本，對於非英語使用者可能造成障礙。

## 優缺點分析

> [!success] 優點
> - 具備自我改進能力，能夠在多次迭代中提升性能。
> - 模組化設計，易於擴展和維護。
> - 支持 Docker 部署，簡化環境設置。
> - 提供安全性警告，讓使用者了解風險。

> [!danger] 缺點
> - 仍在 alpha 階段，可能存在不穩定性。
> - 執行不受信任的代碼可能導致安全風險。
> - 對於新手來說，安裝和設置過程可能較為複雜。
> - 實驗日誌提取過程可能會遇到問題，需注意檔案完整性。

> [!warning] 注意事項
> - 需要 Python 3.12 環境，對於舊版本不兼容。
> - 執行不受信任的代碼可能導致安全風險。
> - 實驗日誌提取過程可能會遇到問題，需注意檔案完整性。
> - 目前的開發狀態仍在 alpha 階段，可能存在不穩定性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的自我改進功能，但不如 HyperAgents 在多任務支持上靈活。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步，缺乏自我優化的能力，適用場景不同。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 雖然也涉及代理系統，但不具備自我改進的特性，主要用於數據處理。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的自我改進功能，但不如 HyperAgents 在多任務支持上靈活。 | 如果需要一個更簡單的自我改進系統，且不需要處理多種任務。 | medium，因為需要重新適應不同的 API 和設計理念。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步，缺乏自我優化的能力，適用場景不同。 | 如果你的主要需求是數據同步而非自我改進。 | low，因為功能範圍較小，切換成本低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **HyperAgents** | **boneyard** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供類似的自我改進功能，但不如 HyperAgents 在多任務支持上靈活。 | 專注於數據同步，缺乏自我優化的能力，適用場景不同。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的 API 和設計理念。 | low，因為功能範圍較小，切換成本低。 |
> | 適用場景 | 主要場景 | 如果需要一個更簡單的自我改進系統，且不需要處理多種任務。 | 如果你的主要需求是數據同步而非自我改進。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人研究和實驗，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 實驗日誌的提取過程可能會遇到問題，特別是缺少 LFS 對象。
  - 解法：確保所有相關檔案在同一目錄中，並使用正確的解壓指令。
- **[HIGH]** 執行不受信任的代碼可能導致意外行為。
  - 解法：在受控環境中運行，並仔細檢查生成的代碼。
- [MEDIUM] 安裝過程中可能會遇到依賴問題，特別是在不同的操作系統上。
  - 解法：仔細檢查 README 中的系統依賴，並根據需要進行調整。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| AI 研究者進行自我改進系統的研究 | 非常適合 | 具備強大的自我改進能力，能夠支持多種計算任務。 |
| 小型團隊開發自適應應用程式 | 適合 | 模組化設計使得擴展和維護變得簡單。 |
| 大型企業需要穩定的生產環境 | 不適合 | 目前仍在 alpha 階段，存在不穩定性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~15 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，15 小時整合，得到強大的自我改進能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：執行不受信任的代碼可能導致安全問題，建議在受控環境中使用，並仔細檢查生成的代碼。

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
| Forks | 278 |
| Open Issues | 17 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-03 |
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

**社群活躍度**：社群活躍度中等，最近有 17 個開放問題待解決。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-20 ~ 2026-03-23）
> **活躍天數** 2 天 · **最新 commit** adding paper citation

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/facebookresearch/HyperAgents/issues/13) | Experiment logs archive in README cannot be downloaded/extra | 3 | 2 |
> | [#20](https://github.com/facebookresearch/HyperAgents/issues/20) | feat(analysis): RunTrendAnalyzer — detect performance regres | 1 | 0 |
> | [#17](https://github.com/facebookresearch/HyperAgents/issues/17) | Safety policy for constraining meta-agent modifications | 1 | 24 |

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

相關概念：[[自動化測試]] · [[機器學習]] · [[深度學習]] · [[強化學習]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[facebookresearch--tribev2|facebookresearch/tribev2]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[aiming-lab--MetaClaw|aiming-lab/MetaClaw]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]]

[GitHub](https://github.com/facebookresearch/HyperAgents)

## 相關收錄

> [!note]- 直接競品（同子分類：自我改進系統）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自我改進系統" AND file.name != "facebookresearch--HyperAgents"
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
> const concepts = ["自動化測試","機器學習","深度學習","強化學習"];
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
