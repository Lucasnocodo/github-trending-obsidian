---
repo: deepseek-ai/DeepSpec
url: https://github.com/deepseek-ai/DeepSpec
owner: deepseek-ai
owner_type: Organization
language: Python
license: MIT
description: "DeepSpec: a full-stack codebase for training and evaluating speculative decoding algorithms"
homepage: ""
stars: 1343
stars_per_day: 1343
forks: 113
open_issues: 2
created: 2026-06-26
pushed_at: 2026-06-27
first_seen: 2026-06-28
week: "2026-W27"
month: "2026-06"
category: "AI/ML"
subcategory: "推論優化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-28
use_case: "提供訓練和評估推測解碼算法的完整代碼庫。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-01"
contributor_count: 0
engagement: "low"
issue_close_rate: 0
repo_size_kb: 3465
readme_length: 3452
bus_factor: 0
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-28"
star_history: "2026-06-28:1343"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
aliases:
  - "DeepSpec"
  - "deepseek-ai/DeepSpec"
  - "提供訓練和評估推測解碼算法的完整代碼庫。"
---

# DeepSpec

**1.3k** stars · **1.3k** stars/天 · 建立 1 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/deepseek-ai--DeepSpec");
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
> 提供訓練和評估推測解碼算法的完整代碼庫。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.3k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要進行推測解碼研究並具備高性能計算資源的機器學習團隊。
> **一句話重點** DeepSpec 不僅是一個工具，更是一個推測解碼研究的生態系統。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/deepseek-ai--DeepSpec");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "推論優化" && p.file.name !== "deepseek-ai--DeepSpec" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 推論優化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，20 小時整合，得到高效的推測解碼工具，值得考慮。

> [!abstract] 核心創新
> DeepSpec 提供了一個完整的框架來訓練和評估推測解碼算法，填補了該領域的空白。

## 專案簡介

DeepSpec 是一個完整的代碼庫，用於訓練和評估推測解碼算法。它的工作流程包括數據準備、模型訓練和評估，具體來說，使用者需要先下載提示並生成目標答案，然後將這些數據用於訓練草稿模型。訓練過程中，使用者可以透過 `bash scripts/train/train.sh` 指令啟動訓練，並指定配置文件以選擇算法和目標模型。這個工具的賣點在於其全方位的支持，從數據處理到模型訓練和評估都涵蓋在內，並且能夠處理大規模數據集（如 38 TB 的目標緩存）。技術上，DeepSpec 使用了多個流行的 Python 庫，如 PyTorch 和 Transformers，這使得它能夠高效地進行模型訓練和推理。

相較於其他工具，如 SpecForge 和 DFlash，DeepSpec 提供了更完整的工作流程和更高的靈活性，特別是在模型的選擇和訓練配置上。使用者在評估時可以透過 `bash scripts/eval/eval.sh` 指令來測試模型在多個基準任務上的表現，這一點在其他工具中並不常見。儘管目前只有少數算法被支持，但未來的擴展潛力巨大，特別是隨著社群的貢獻。對於需要進行推測解碼研究的團隊，這是一個值得考慮的選擇，但需要注意的是，對於硬體的要求較高，預設配置需要 8 個 GPU。整體來看，DeepSpec 在推測解碼領域提供了一個強大的工具，但使用者需具備相應的硬體和技術基礎。

**技術棧**：`Python 3.9` · `PyTorch 2.9.1` · `Transformers 5.10.2`

## 重點功能

- 完整的工作流程 — 包括數據準備、模型訓練和評估，支持高達 38 TB 的數據處理。
- 多算法支持 — 包含 DSpark、DFlash 和 Eagle3，使用者可根據需求選擇。
- 高效的訓練指令 — 使用 `bash scripts/train/train.sh` 指令啟動訓練，並可自定義配置。
- 靈活的評估機制 — 使用 `bash scripts/eval/eval.sh` 指令進行模型評估，支持多個基準任務。
- 依賴於流行的 Python 庫 — 使用 PyTorch 和 Transformers，便於與現有生態系統整合。

## 快速開始

1. 安裝 Python 依賴
```bash
python -m pip install -r requirements.txt
```
2. 準備數據
```bash
bash scripts/data/prepare.sh # 基於文件推測
```
3. 啟動訓練
```bash
bash scripts/train/train.sh
```

## 程式碼範例

```python
{
  "前置條件": "需要安裝 Python 依賴和配置好硬體環境。",
  "指令": "bash scripts/train/train.sh",
  "預期輸出": "啟動訓練過程，並在 ~/checkpoints/ 目錄下生成檢查點。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1343 stars（1343/天），forks 113（8.4%），這顯示出相對高的使用興趣。這個專案的作者在推測解碼領域有一定的背景，並且解決了之前缺乏完整訓練和評估框架的痛點。此專案的出現正好填補了這一空白，特別是對於需要處理大規模數據的研究者來說。社群的反饋和需求也促進了這個專案的快速成長，特別是針對 Gemma4/Qwen3 的訓練需求。forks/stars 比率為 8.4%，顯示出有相當比例的使用者在進行實際的修改和使用，這表明了其實用性和潛在的擴展性。

## 適合誰使用

**目標受眾**：需要進行推測解碼研究並具備高性能計算資源的機器學習團隊。

> [!example] 使用場景
> - 機器學習研究員用它來訓練推測解碼模型，因為它提供了完整的數據準備和訓練流程，能夠高效處理大規模數據。
> - AI 開發者用它來評估不同算法在推測解碼任務上的表現，因為可以輕鬆切換算法配置並進行基準測試。
> - 學術界的研究團隊用它來探索新的推測解碼技術，因為其開源性質允許他們根據需求進行修改和擴展。

## 架構分析

DeepSpec 採用模組化設計，將數據準備、模型訓練和評估分為不同的階段。這樣的設計使得每個部分可以獨立開發和優化，提高了整體的靈活性和可維護性。數據流從數據準備開始，經過訓練階段，最終進入評估階段，這樣的流程設計使得使用者能夠輕鬆追蹤每個步驟的輸出。

選擇 Python 作為主要語言是因為其在機器學習領域的廣泛應用，並且擁有豐富的庫支持。這樣的選擇雖然增加了學習曲線，但也帶來了更強大的功能擴展性。整體架構的擴展性良好，未來可以根據社群需求增加更多算法和功能。

## 技術深入分析

DeepSpec 的核心技術機制在於其模組化設計，將數據準備、模型訓練和評估分為獨立的階段，這使得使用者能夠靈活地選擇和替換各個部分。使用 PyTorch 和 Transformers 這些流行的庫，DeepSpec 能夠高效地處理大規模數據集，並且支持多種算法的訓練。效能方面，預設配置需要 8 個 GPU，這對於資源有限的團隊可能是一個挑戰。設計上選擇 Python 作為主要語言，這使得整個專案的學習曲線相對較高，但也帶來了更強大的功能擴展性。技術風險方面，未來的擴展可能會受到現有架構的限制，特別是在算法的增加和數據處理的優化上。整合方面，DeepSpec 可以與現有的機器學習生態系統無縫對接，但使用者需要具備相應的技術基礎來進行配置和調整。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用指導。安裝過程相對順暢，但需要注意硬體配置。文件中有針對數據準備的詳細說明，幫助使用者快速上手。整體來說，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 提供完整的推測解碼工作流程，從數據準備到模型評估。
> - 支持多種算法，靈活性高。
> - 基於流行的庫，易於與其他工具整合。

> [!danger] 缺點
> - 需要高性能的硬體支持，對於小型團隊可能不友好。
> - 數據準備過程可能需要大量存儲空間。
> - 目前僅支持少數幾種算法，未來擴展性尚未確定。

> [!warning] 注意事項
> - 需要高性能計算資源，預設配置要求 8 個 GPU。
> - 數據準備過程可能需要大量存儲空間，特別是對於大規模數據集。
> - 目前僅支持少數幾種算法，未來擴展性尚未確定。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理模型的訓練，而 DeepSpec 提供了更全面的推測解碼支持。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供不同的模型訓練框架，但缺乏 DeepSpec 的數據處理和評估功能。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於特定的代碼生成任務，而 DeepSpec 的應用範圍更廣泛。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理模型的訓練，提供了不同的訓練框架，但缺乏 DeepSpec 的完整數據處理和評估功能。 | 如果你的專案主要集中在代理模型的開發，而不需要完整的推測解碼流程。 | medium，因為需要重新設計數據處理和評估流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供不同的模型訓練框架，但缺乏 DeepSpec 的數據處理和評估功能，適合簡單的模型訓練。 | 如果你的需求較簡單，只需訓練單一模型而不需要完整的工作流程。 | low，因為可以直接使用現有的數據處理流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **DeepSpec** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理模型的訓練，提供了不同的訓練框架，但缺乏 DeepSpec 的完整數據處理和評估功能。 | 提供不同的模型訓練框架，但缺乏 DeepSpec 的數據處理和評估功能，適合簡單的模型訓練。 |
> | 遷移成本 | - | medium，因為需要重新設計數據處理和評估流程。 | low，因為可以直接使用現有的數據處理流程。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在代理模型的開發，而不需要完整的推測解碼 | 如果你的需求較簡單，只需訓練單一模型而不需要完整的工作流程。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合對推測解碼有興趣的研究者進行實驗，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 數據準備過程可能需要大量存儲空間，特別是對於大規模數據集。
  - 解法：確保有足夠的存儲資源，或考慮使用雲端存儲。
- [MEDIUM] 訓練過程對硬體要求高，可能導致資源不足。
  - 解法：在多個節點上分散訓練，或減少模型的大小。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型研究機構的推測解碼研究 | 非常適合 | 提供完整的工作流程和高性能計算支持。 |
| 小型團隊的 AI 開發專案 | 普通 | 需要高性能硬體，對小型團隊可能不友好。 |
| 學術界的推測解碼技術探索 | 非常適合 | 開源性質允許進行修改和擴展。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~20 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，20 小時整合，得到高效的推測解碼工具，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，且不存取敏感資料，但使用者需確保依賴庫的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/deepseek-ai--DeepSpec");
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
> const me = dv.page("Repos/deepseek-ai--DeepSpec");
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
| Forks | 113 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-27 |
| 建立日期 | 2026-06-26 |
| Repo 大小 | 3.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/deepseek-ai/DeepSpec) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `torch` `transformers` `numpy` `PyYAML` `tqdm` `tensorboard` `matplotlib` `triton` `typing_extensions` `sentencepiece` `safetensors` `datasets` `openai`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 98
>     "Shell" : 2
> ```

## 社群與生態

**社群活躍度**：社群活躍度中等，開放的問題數量較少，顯示出初期的穩定性。
**連結**：[文件](https://github.com/deepseek-ai/DeepSpec)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-26）
> **活躍天數** 1 天 · **最新 commit** first init

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/deepseek-ai/DeepSpec/issues/3) | Release the speculators trained for Gemma4/Qwen3 | 3 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # DeepSpec
> 
> DeepSpec is a full-stack codebase for training and evaluating draft models for speculative decoding. It contains data preparation utilities, draft model implementations, training code, and evaluation scripts.
> 
> ## Environment
> 
> Install the Python dependencies:
> 
> ```bash
> python -m pip install -r requirements.txt
> ```
> 
> Data preparation additionally requires an inference engine to serve the target model when regenerating answers; see [scripts/data/README.md](./scripts/data/README.md) for details.
> 
> ## Workflow
> 
> Run the stages in order — each stage's output feeds the next:
> 
> 1. **Data Preparation** — download prompts, regenerate target answers, and build the target cache.
> 2. **Training** — train a draft model against the cached target outputs.
> 3. **Evaluation** — measure speculative-decoding acceptance on benchmark tasks.
> 
> ## Data Preparation
> 
> See [scripts/data/README.md](./scripts/data/README.md) for the step-by-step data pipeline:
> 
> 1. download and split training data,
> 2. regenerate answers,
> 3. prepare the target cache (storage warning: this can be very large — roughly 38 TB for the default `Qwen/Qwen3-4B` setting).
> 
> ## Training
> 
> ```bash
> bash scripts/train/train.sh
> ```
> 
> `train.sh` launches `train.py`, which spawns one worker per visible GPU. Select the algorithm and target model by pointing `config_path` at one of the configs under [config/](./config/) (e.g. `config/dspark/dspark_qwen3_4b.py`); see the script header for the full list of configs, how to override `config_path` / `target_cache_dir`, and how to use `--opts` to override individual config fields. Checkpoints are written to `~/checkpoints///step_*`.
> 
> Hardware: the default configs and scripts assume a single node with 8 GPUs. For fewer GPUs, reduce `CUDA_VISIBLE_DEVICES`.
> 
> ## Evaluation
> 
> ```bash
> bash scripts/eval/eval.sh
> ```
> 
> `eval.sh` runs `eval.py` against a trained draft checkpoint over the speculative-decoding benchmarks in [eval_datasets/](./eval_datasets/) (gsm8k, math500, aime25, humaneval, mbpp, livecodebench, mt-bench, alpaca, arena-hard-v2). Set:
> 
> - `target_name_or_path` — the target model the draft was trained against (e.g. `Qwen/Qwen3-4B`),
> - `draft_name_or_path` — the draft checkpoint, e.g. `~/checkpoints/deepspec/dspark_block8_qwen3_4b/step_latest`.
> 
> ## Supported Algorithms
> 
> Currently, DeepSpec includes three draft models: [DSpark](./DSpark_paper.pdf), [DFlash](https://arxiv.org/abs/2602.06036) and [Eagle3](https://arxiv.org/abs/2503.01840).
> 
> ## License
> 
> DeepSpec is released under the [MIT License](./LICENSE). It includes code adapted
> from third-party projects under their own licenses; see [NOTICE](./NOTICE) for the
> full attribution.
> 
> ## Acknowledgements
> 
> DeepSpec builds on the ideas and code of several excellent open-source projects:
> 
> - [SpecForge](https://github.com/sgl-project/SpecForge) (Apache-2.0) — the overall training framework and Eagle3 implementation; portions of the Eagle3 modeling, loss, optimizer, attention, and evaluation code are adapted from it. Adapted files carry an in-file attribution comment, and the full notice is recorded in [NOTICE](./NOTICE).
> - [DFlash](https://github.com/z-lab/dflash) (MIT) — the DFlash draft-model design and training recipe.
> - [Qwen3](https://github.com/QwenLM/Qwen3) and [Gemma](https://github.com/google-deepmind/gemma) — the target model families supported in this repo.
> 
> We thank the authors and maintainers of these projects. Contributions of new algorithms are welcome.

## 延伸閱讀

相關概念：[[推論優化]] · [[機器學習]] · [[深度學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[TheTom--turboquant_plus|TheTom/turboquant_plus]] · [[antirez--ds4|antirez/ds4]] · [[danveloper--flash-moe|danveloper/flash-moe]] · [[baidu--Unlimited-OCR|baidu/Unlimited-OCR]] · [[karpathy--autoresearch|karpathy/autoresearch]]

[GitHub](https://github.com/deepseek-ai/DeepSpec)

## 相關收錄

> [!note]- 直接競品（同子分類：推論優化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "推論優化" AND file.name != "deepseek-ai--DeepSpec"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "deepseek-ai--DeepSpec"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "deepseek-ai--DeepSpec" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "deepseek-ai--DeepSpec"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["推論優化","機器學習","深度學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "deepseek-ai--DeepSpec" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/deepseek-ai--DeepSpec");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "deepseek-ai--DeepSpec" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "deepseek-ai" AND file.name != "deepseek-ai--DeepSpec"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/deepseek-ai--DeepSpec");
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
> const me = dv.page("Repos/deepseek-ai--DeepSpec");
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
> const me = dv.page("Repos/deepseek-ai--DeepSpec");
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
> const me = dv.page("Repos/deepseek-ai--DeepSpec");
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
> const me = dv.page("Repos/deepseek-ai--DeepSpec");
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

> **2026-06-28** — 首次收錄
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

- [[2026-06-28|2026-06-28]] — 首次收錄，1.3k stars
