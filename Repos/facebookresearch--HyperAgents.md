---
repo: facebookresearch/HyperAgents
url: https://github.com/facebookresearch/HyperAgents
owner: facebookresearch
owner_type: Organization
language: Python
license: NOASSERTION
description: "Self-referential self-improving agents that can optimize for any computable task"
homepage: ""
stars: 1952
stars_per_day: 177
forks: 239
open_issues: 15
created: 2026-03-19
pushed_at: 2026-03-26
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
use_case: "自我參照的自我改進代理，能優化任何可計算任務。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-02"
contributor_count: 2
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 16263
readme_length: 2509
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-26"
star_history: "2026-03-26:912,2026-03-26:919,2026-03-27:1339,2026-03-29:1771,2026-03-30:1856,2026-03-31:1952"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "HyperAgents"
  - "facebookresearch/HyperAgents"
  - "自我參照的自我改進代理，能優化任何可計算任務。"
---

# HyperAgents

**2.0k** stars · **177** stars/天 · 建立 11 天前 · Python · NOASSERTION

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
> 自我參照的自我改進代理，能優化任何可計算任務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (177 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 4 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要自動化計算任務並希望系統能自我優化的 AI 研究者和開發者。
> **一句話重點** HyperAgents 的自我改進能力讓它在自動化和優化計算任務方面具有獨特優勢。

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
> **結論** 花 10 小時學、15 小時整合，得到自我優化的計算代理，值得探索但需謹慎使用。

> [!abstract] 核心創新
> 這個專案的核心創新在於其自我參照的自我改進能力，使得代理能夠在運行過程中不斷優化。

## 專案簡介

HyperAgents 是一個自我參照的自我改進代理系統，旨在優化各種可計算任務。用戶需要先設置 API 金鑰，然後透過 Docker 環境安裝所需的依賴，最後執行 `python generate_loop.py --domains` 來啟動代理。這個設計的核心在於利用多個基礎模型進行任務優化，並透過 `meta_agent.py` 和 `task_agent.py` 來實現不同層級的代理行為。這樣的架構使得 HyperAgents 能夠在多個任務之間進行自我學習和改進，從而達到更高的效率。該專案使用 Python 作為主要語言，並依賴多個庫如 `requests` 和 `gym`，這些選擇使得其在處理複雜計算時具備靈活性和擴展性。與其他類似工具相比，HyperAgents 的獨特之處在於其自我改進的能力，這使得它能在多變的環境中持續優化，而不是僅僅依賴靜態的規則或模型。

這在需要快速適應的場景中尤其有用，例如自動化測試或動態資源分配。使用者在實際操作中可能會遇到安全風險，因為該系統涉及執行未經信任的模型生成代碼，因此需要謹慎使用。這個專案目前處於早期階段，社群活躍度尚可，但仍有許多開放的問題需要解決。未來幾個月，隨著更多用戶的參與和反饋，預計會有更多的功能和改進。對於需要自動化和優化計算任務的開發者來說，HyperAgents 是一個值得關注的選擇，但在使用前需評估其安全性和穩定性。

**技術棧**：`Python 3.12` · `Docker` · `requests 2.32.4` · `gym 0.23.0`

## 重點功能

- 自我改進代理 — 能夠根據過去的任務表現自我調整以優化未來的任務執行。
- 多任務支持 — 同時處理多個計算任務，並在任務之間共享學習。
- Docker 支援 — 提供 Dockerfile 以便於快速部署和環境配置。
- 實驗日誌管理 — 支持將實驗日誌存儲為多部分 ZIP 檔案，便於後續分析。
- 安全考量 — 提供安全警告，提醒用戶執行未經信任的代碼時的潛在風險。

## 快速開始

1. 設置 API 金鑰
```bash
echo 'OPENAI_API_KEY=...' >> .env
```
2. 安裝依賴
```bash
sudo dnf install -y python3.12-devel graphviz graphviz-devel cmake ninja-build bzip2-devel zlib-devel ncurses-devel libffi-devel
```
3. 建立虛擬環境並安裝 Python 依賴
```bash
python3.12 -m venv venv_nat && source venv_nat/bin/activate && pip install -r requirements.txt
```
4. 建立 Docker 容器
```bash
docker build --network=host -t hyperagents .
```
5. 執行代理
```bash
python generate_loop.py --domains
```

## 程式碼範例

```python
{
  "前置條件": "需要設置 API 金鑰於 .env 文件中。",
  "指令": "python generate_loop.py --domains",
  "預期輸出": "輸出將保存在 outputs/ 目錄中。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天內累積 1952 stars（177/天），forks 239（12.2%），顯示出強烈的社群興趣。這個專案由 Facebook Research 團隊開發，該團隊在 AI 和自動化領域有著豐富的經驗。HyperAgents 解決了以往自動化系統無法自我改進的痛點，讓代理能夠在運行過程中不斷優化。近期的推廣活動和社群討論也促進了其曝光率，吸引了許多開發者的注意。技術生態的進步，如強化學習和自動化技術的成熟，使得這種自我改進的代理系統變得可行。forks/stars 比率為 12.2%，顯示出有相當一部分用戶在積極修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要自動化計算任務並希望系統能自我優化的 AI 研究者和開發者。

> [!example] 使用場景
> - AI 研究員用它來優化模型訓練過程，因為它能自我調整參數以達到更高的準確率。
> - 後端工程師用它來自動化資源分配，因為它能根據實時需求調整計算資源的使用。
> - 數據科學家用它來進行多任務學習，因為它能在不同任務之間共享知識，提升整體效能。

## 架構分析

HyperAgents 採用模組化架構，將代理的功能分為多個模組，如 `meta_agent.py` 和 `task_agent.py`，這樣的設計使得不同的代理可以根據任務需求進行調整。資料流方面，代理會根據過去的任務表現進行自我學習，並透過 API 與外部模型進行交互。選擇 Python 作為主要語言是因為其豐富的庫和社群支持，然而這也帶來了性能上的挑戰，特別是在處理大量數據時可能會出現瓶頸。擴展性方面，該架構能夠支持多種計算任務，但在極大規模的應用中，可能需要進一步的性能優化。

## 技術深入分析

HyperAgents 的核心技術機制在於其自我參照的自我改進能力，這使得代理能夠根據過去的任務表現進行調整。使用了強化學習的概念，代理能在多任務環境中學習並優化行為。效能方面，該系統能處理多個計算任務，但在高負載下可能會出現性能瓶頸，特別是當同時運行多個代理時。選擇 Python 作為開發語言使得開發過程靈活，但在性能上可能不如 C++ 等編譯語言。依賴樹的複雜度中等，主要依賴於數據處理和機器學習的庫。技術風險方面，執行未經信任的代碼可能導致安全問題，特別是在開放環境中。整合方面，與主流的 CI/CD 工具鏈相容性尚可，但在實際應用中可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用說明，整體清晰易懂。安裝過程中需要安裝 Docker，對新手來說可能會有一定的挑戰。缺乏明確的入門指南，可能需要用戶自行摸索。文件目前僅提供英文版本，對於非英語使用者可能會造成困難。

## 優缺點分析

> [!success] 優點
> - 具備自我改進能力，能夠根據過去的表現優化未來的任務。
> - 支持多任務學習，能在不同任務之間共享知識。
> - 模組化設計，便於擴展和維護。

> [!danger] 缺點
> - 安全風險高，執行未經信任的代碼可能導致問題。
> - 安裝和配置過程較為複雜，需要 Docker 環境。
> - 目前仍在開發階段，功能和穩定性可能不夠完善。

> [!warning] 注意事項
> - 需要安裝 Docker 環境以運行。
> - 執行未經信任的代碼可能導致安全風險。
> - 目前僅支持 Python 3.12 及以上版本。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步和傳輸，而 HyperAgents 專注於自我改進的計算任務優化。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供安全的數據傳輸，但缺乏 HyperAgents 的自我學習能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於自然語言處理任務，而 HyperAgents 更加通用，能處理各類計算任務。 | 如果你的主要需求是自然語言處理，HolyClaude 可能更適合。 | medium，因為需要重新設計任務處理邏輯。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於深度學習模型的訓練和推論，而 HyperAgents 提供更廣泛的自我改進能力。 | 如果你的工作重點是深度學習模型的優化，NemoClaw 會更合適。 | high，因為需要調整整體架構以適應不同的模型訓練流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **HyperAgents** | **HolyClaude** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自然語言處理任務，而 HyperAgents 更加通用，能處理各類計算任務。 | 專注於深度學習模型的訓練和推論，而 HyperAgents 提供更廣泛的自我改進能力。 |
> | 遷移成本 | - | medium，因為需要重新設計任務處理邏輯。 | high，因為需要調整整體架構以適應不同的模型訓練流程。 |
> | 適用場景 | 主要場景 | 如果你的主要需求是自然語言處理，HolyClaude 可能更 | 如果你的工作重點是深度學習模型的優化，NemoClaw 會更 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和實驗，但不建議用於生產環境的核心任務。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 實驗日誌無法下載，因為缺少 LFS 物件
  - 解法：確保所有相關檔案在同一目錄中，並使用正確的解壓命令。
- [MEDIUM] 安全政策未明確，可能導致模型生成的代碼執行風險
  - 解法：在受控環境中測試，並仔細檢查生成的代碼。
- [MEDIUM] 安裝過程中可能會遇到依賴衝突
  - 解法：使用虛擬環境來隔離依賴。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型 AI 研究團隊進行多任務學習 | 非常適合 | 具備自我改進能力，能在多任務之間共享學習。 |
| 小型開發團隊進行自動化測試 | 適合 | 能夠優化測試流程，但需注意安全風險。 |
| 個人開發者進行 AI 實驗 | 普通 | 適合用於學習和實驗，但不建議用於生產。 |
| 企業級應用的核心系統 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~15 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學、15 小時整合，得到自我優化的計算代理，值得探索但需謹慎使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：該工具執行未經信任的代碼，可能導致安全問題，使用時需謹慎。

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
| Forks | 239 |
| Open Issues | 15 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-26 |
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

**社群活躍度**：社群活躍度尚可，但開放問題數量較多，解決率為 0%。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-20 ~ 2026-03-23）
> **活躍天數** 2 天 · **最新 commit** adding paper citation

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/facebookresearch/HyperAgents/issues/13) | Experiment logs archive in README cannot be downloaded/extra | 3 | 1 |
> | [#17](https://github.com/facebookresearch/HyperAgents/issues/17) | Safety policy for constraining meta-agent modifications | 1 | 0 |

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

相關概念：[[自動化]] · [[強化學習]] · [[多任務學習]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[aiming-lab--MetaClaw|aiming-lab/MetaClaw]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]]

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
> const concepts = ["自動化","強化學習","多任務學習"];
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
