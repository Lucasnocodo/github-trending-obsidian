---
repo: sapientinc/HRM-Text
url: https://github.com/sapientinc/HRM-Text
owner: sapientinc
owner_type: Organization
language: Python
license: Apache-2.0
description: "HRM-Text is a 1B text generation model based on the HRM architecture, strengthened by task completion and latent space reasoning."
homepage: ""
stars: 677
stars_per_day: 135
forks: 62
open_issues: 6
created: 2026-05-18
pushed_at: 2026-05-22
first_seen: 2026-05-22
week: "2026-W21"
month: "2026-05"
category: "AI/ML"
subcategory: "大型語言模型"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-22
use_case: "提供一個高效的文本生成模型，讓使用者以更少的計算資源和數據進行預訓練。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-05-31"
contributor_count: 3
engagement: "low"
issue_close_rate: 0
repo_size_kb: 3274
readme_length: 8969
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-22"
star_history: "2026-05-22:631,2026-05-23:650,2026-05-24:677"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - org
  - "topic/hierarchical_reasoning_model"
  - "topic/hrm"
  - "topic/large_language_models"
  - "topic/pretraining"
aliases:
  - "HRM-Text"
  - "sapientinc/HRM-Text"
  - "提供一個高效的文本生成模型，讓使用者以更少的計算資源和數據進行預訓練。"
---

# HRM-Text

**631** stars · **210** stars/天 · 建立 3 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/sapientinc--HRM-Text");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG`

`hierarchical-reasoning-model` `hrm` `large-language-models` `pretraining`

> [!summary] 一句話摘要
> 提供一個高效的文本生成模型，讓使用者以更少的計算資源和數據進行預訓練。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (210 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在有限資源下進行文本生成模型預訓練的研究者和開發者。
> **一句話重點** HRM-Text 的設計讓文本生成模型的預訓練變得更加高效和可負擔，特別適合中小型團隊。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/sapientinc--HRM-Text");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "大型語言模型" && p.file.name !== "sapientinc--HRM-Text" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 大型語言模型 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的文本生成模型，值得投資。

> [!abstract] 核心創新
> HRM-Text 提供了一個高效的預訓練框架，顯著降低了計算和數據需求。

## 專案簡介

HRM-Text 是一個基於 HRM 架構的 1B 文本生成模型，專注於任務完成和潛在空間推理。它的設計讓用戶能夠以約 1000 美元的預算從頭開始預訓練基礎模型，並且計算需求比傳統方法低 130-600 倍，數據需求低 150-900 倍。使用者首先需要準備數據，透過 `data_io` 管道進行清理和分層抽樣，然後將數據指向 HRM-Text 的輸入。預訓練過程中，使用者可以選擇不同的模型配置，例如 `L` 和 `XL`，並且可以在 Docker 環境中運行，確保所有節點共享相同的工作空間。這個模型的優勢在於它的高效性和可擴展性，特別適合需要處理大量文本數據的應用場景。

HRM-Text 的訓練過程包括多個步驟，從數據準備到環境設置，再到啟動預訓練，並且支持使用 Weights & Biases 進行訓練追蹤。與其他大型模型相比，HRM-Text 在計算資源和數據需求上具有顯著的優勢，特別是在資源受限的環境中。使用者可以根據自己的需求選擇不同的模型大小，並且可以進行微調以適應特定任務。這使得 HRM-Text 成為一個靈活且高效的選擇，尤其適合中小型團隊或資源有限的開發者。

**技術棧**：`Python` · `Docker` · `PyTorch` · `FlashAttention 3`

## 重點功能

- 高效預訓練 — 以約 $1000 的預算從頭開始訓練模型，計算需求低 130-600 倍。
- 多種模型配置 — 提供不同大小的模型選擇（如 L 和 XL），以適應不同需求。
- Docker 支援 — 提供 Docker 映像，簡化環境設置，確保多節點運行的一致性。
- 數據處理管道 — 使用 `data_io` 進行數據清理和分層抽樣，確保數據質量。
- Weights & Biases 整合 — 自動記錄訓練過程中的指標，方便後續分析。

## 快速開始

1. 克隆倉庫
```bash
git clone https://github.com/sapientinc/HRM-Text.git
```
2. 準備數據
```bash
python sample_tokenized.py epochs=4 output_path=/dev/shm/sampled > show_analytics.md
```
3. 啟動 Docker 環境
```bash
docker run --gpus all --ipc=host --network=host -it -v "$PWD":/workspace sapientai/hrm-text:latest
```
4. 開始預訓練
```bash
OMP_NUM_THREADS=1 MKL_NUM_THREADS=1 torchrun --nproc_per_node=8 pretrain.py arch/size@arch=L lr=2.5e-4 global_batch_size=172032
```

## 程式碼範例

```python
{
  "前置條件": "確保已經準備好數據並啟動 Docker 環境。",
  "指令": "OMP_NUM_THREADS=1 MKL_NUM_THREADS=1 torchrun --nproc_per_node=8 pretrain.py arch/size@arch=L lr=2.5e-4 global_batch_size=172032",
  "預期輸出": "模型將開始預訓練並在 checkpoints/ 目錄中保存每個 epoch 的檢查點。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 631 stars（210/天），forks 58（9.2%），顯示出穩定的增長潛力。作者 imoneoi 和其他貢獻者在 AI 和機器學習領域有豐富的經驗，這使得他們能夠針對現有模型的計算和數據需求進行優化，解決了許多開發者面臨的高成本問題。這個專案的出現正好滿足了對高效文本生成模型的需求，特別是在資源有限的情況下。社群的活躍度和開放的問題討論也顯示出使用者對這個工具的興趣和需求。這種需求的增長可能與最近的 AI 技術進展有關，特別是在文本生成和推理方面。

## 適合誰使用

**目標受眾**：需要在有限資源下進行文本生成模型預訓練的研究者和開發者。

> [!example] 使用場景
> - AI 研究員用它來快速預訓練文本生成模型，因為它的計算需求低，能在有限的資源下達成高效能。
> - 中小型企業的開發者用它來開發客製化的聊天機器人，因為它能以較低的成本進行微調，適合特定業務需求。
> - 學術界的研究者用它來進行語言模型的比較實驗，因為它提供了多種模型配置，能夠靈活調整以符合實驗設計。

## 架構分析

HRM-Text 採用層次遞歸架構，這使得模型能夠在處理長文本時保持上下文的連貫性。資料流從數據準備開始，經過清理和分層抽樣，然後進入預訓練階段，最終生成模型檢查點。選擇 FlashAttention 3 來優化注意力計算，這在處理大規模數據時顯著提高了效率。這種設計的代價是需要較高效能的 GPU 支持，且在多節點運行時需要精心配置以確保通信的穩定性。整體架構的擴展性良好，但在資源有限的情況下可能會遇到瓶頸。

## 技術深入分析

HRM-Text 的核心技術機制是基於層次遞歸架構，這種設計使得模型在處理長文本時能夠保持上下文的一致性。使用 FlashAttention 3 來優化注意力計算，這在處理大規模數據時顯著提高了效率。模型的預訓練過程中，使用者可以選擇不同的模型大小，這使得它能夠根據實際需求進行調整。整體架構的設計考慮到了資源的有效利用，並且在多節點運行時需要精心配置以確保通信的穩定性。這種設計的代價是需要較高效能的 GPU 支持，且在資源有限的情況下可能會遇到瓶頸。與主流框架的整合難度相對較低，特別是與 PyTorch 的兼容性良好，能夠輕鬆地融入現有的工作流中。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝和使用說明，並且包含了實際的指令範例。安裝過程相對順暢，但需要確保硬體環境符合要求。文件中沒有多語言支持，但內容清晰易懂，能夠幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 計算和數據需求顯著降低，適合資源有限的開發者。
> - 靈活的模型配置選項，能夠適應不同的應用場景。
> - 強大的數據處理管道，確保數據質量和一致性。

> [!danger] 缺點
> - 對硬體要求較高，需要高效能 GPU 進行運行。
> - 目前僅支援 Python，對於其他語言的整合可能需要額外的開發工作。
> - 在多節點運行時需要確保 NCCL 配置正確，否則可能會導致通信問題。

> [!warning] 注意事項
> - 需要高效能 GPU（如 H100）進行預訓練，對硬體要求較高。
> - 目前僅支援 Python 環境，對於其他語言的整合可能需要額外的開發工作。
> - 在多節點運行時，需要確保 NCCL 正確配置，否則可能會導致通信問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供了一個針對特定任務的文本生成框架，但不如 HRM-Text 在計算效率上優化。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於多模態模型的訓練，適合需要處理不同類型數據的場景，但計算需求較高。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於特定任務的文本生成，計算需求較高，且不如 HRM-Text 在資源利用上優化。 | 如果你的團隊需要針對特定任務進行深度調整，且有足夠的計算資源。 | medium，因為需要重新調整數據處理和模型配置。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 提供 GPT-2 的 API 接口，適合快速集成，但在計算效率上不如 HRM-Text。 | 如果你的團隊需要快速集成現有的 GPT-2 模型，而不需要進行預訓練。 | low，因為可以直接使用 API 進行調用。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **HRM-Text** | **boneyard** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定任務的文本生成，計算需求較高，且不如 HRM-Text 在資源利用上優化。 | 提供 GPT-2 的 API 接口，適合快速集成，但在計算效率上不如 HRM-Text。 |
> | 遷移成本 | - | medium，因為需要重新調整數據處理和模型配置。 | low，因為可以直接使用 API 進行調用。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要針對特定任務進行深度調整，且有足夠的計算資源 | 如果你的團隊需要快速集成現有的 GPT-2 模型，而不需要進 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在多節點運行時，NCCL 配置不當可能導致通信失敗。
  - 解法：在長期作業前確認 NCCL 配置正確。
- [MEDIUM] Docker 環境未正確設置可能導致 GPU 無法識別。
  - 解法：確保安裝 NVIDIA Container Toolkit 並正確配置。
- **[HIGH]** 預訓練過程中可能出現內存不足的問題。
  - 解法：降低批次大小以減少內存需求。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行文本生成模型的開發 | 非常適合 | 計算需求低，能夠在有限資源下達成高效能。 |
| 大型企業的文本生成任務 | 普通 | 雖然計算效率高，但可能需要更強的硬體支持。 |
| 學術研究中的模型比較實驗 | 非常適合 | 提供多種模型配置，能夠靈活調整以符合實驗設計。 |
| 需要快速集成的商業應用 | 不適合 | 對於快速集成的需求，可能需要更簡單的 API 解決方案。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的文本生成模型，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不會存取敏感資料。依賴的庫和框架均為開源，信任程度高。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/sapientinc--HRM-Text");
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
> const me = dv.page("Repos/sapientinc--HRM-Text");
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
| Forks | 58 |
| Open Issues | 5 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-21 |
| 建立日期 | 2026-05-18 |
| Repo 大小 | 3.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/sapientinc/HRM-Text) |
| Topics | `hierarchical-reasoning-model` `hrm` `large-language-models` `pretraining` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `coolname` `datasets` `einops` `flash_attn_3` `hydra-core` `lm-eval` `math-verify` `numba` `numpy` `omegaconf` `pydantic` `PyYAML` `safetensors` `sympy` `torch`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 98
>     "Dockerfile" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@imoneoi](https://github.com/imoneoi) | 9 |
> | [@abcd1927](https://github.com/abcd1927) | 6 |
> | [@cl-agi](https://github.com/cl-agi) | 4 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放的問題討論顯示出使用者的興趣。
**連結**：[文件](https://github.com/sapientinc/HRM-Text)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-20 ~ 2026-05-21）
> **活躍天數** 2 天 · **最新 commit** Merge branch 'feat/sft' — SFT fine-tuning support

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/sapientinc/HRM-Text/issues/1) | pre-training dataset | 3 | 5 |
> | [#4](https://github.com/sapientinc/HRM-Text/issues/4) | [suggestions] RWKV based HRM-TEXT? | 0 | 0 |
> | [#3](https://github.com/sapientinc/HRM-Text/issues/3) | `.GGUF` model weights | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # HRM-Text: Efficient Pretraining Beyond Scaling
> 
>   
>   
> 
> 🌟 Pretrain a foundation model from scratch with ~$1000. 🌠
> 
> HRM-Text is a 1B text generation model based on the HRM architecture, strengthened by task completion and latent space reasoning. It offers a full pretraining framework, making foundation model pretraining accessible with 130-600x less compute and 150-900x less data. It is built upon a hierarchical recurrent architecture, PrefixLM sequence packing, FlashAttention 3 kernels, PyTorch FSDP2 training, evaluation, and checkpoint conversion tooling.
> 
> 
> ## Model Configurations
> 
> Architectures live under [`config/arch/net`](config/arch/net):
> 
> | Config | Model |
> | --- | --- |
> | `hrm` | HRM-Text |
> | `transformer` | Standard Transformer wrapper |
> | `trm` | Tiny Recursive Model baseline |
> | `trm_match_recurrence` | TRM configured to match HRM recurrence with half parameters |
> | `rins` | Recursive Inference Scaling (RINS) baseline |
> | `ut` | Universal Transformer baseline |
> 
> Sizes live under [`config/arch/size`](config/arch/size):
> 
> | Config | Layers | Hidden | Heads |
> | --- | ---: | ---: | ---: |
> | `B` | 12 | 1024 | 8 |
> | `L` | 24 | 1280 | 10 |
> | `XL` | 32 | 1536 | 12 |
> | `XXL` | 72 | 1792 | 14 |
> | `XXL_wide` | 32 | 2560 | 20 |
> 
> For HRM and RINS, `half_layers: true` splits the configured layer count evenly between the H and L modules.
> 
> 
> ## Launch the Pretraining 🚀
> 
> 
> ### Required Resources
> 
> Choose a target size and prepare the corresponding GPU nodes.
> 
> - **L, 0.6B parameters:** 8 H100s, single node, about 50 hours (~$800).
> - **XL, 1B parameters:** 16 H100s, two nodes, about 46 hours (~$1472).
> 
> *Price estimation based on $2/H100 hour.*
> 
> The following are benchmark results from the reference runs.
> 
> | Size | GPUs | Time | GSM8k | MATH | DROP | MMLU | ARC-C | HellaSwag | Winogrande | BoolQ |
> | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: | ---: |
> | **L (0.6B)** | 8 | 50 hrs | 77.6% | 51.2% | 78.6% | 56.6% | 75.9% | 52.7% | 67.6% | 85.0% |
> | **XL (1B)** | 16 | 46 hrs | 84.7% | 56.5% | 82.3% | 60.7% | 81.9% | 63.4% | 72.4% | 86.2% |
> 
> > Hopper-class GPUs are the expected training target because the attention path depends on FlashAttention 3.
> 
> 
> ### 1. Prepare Data
> 
> HRM-Text trains from sampled, tokenized data produced by the companion `data_io` pipeline. Use `data_io` to clean, tokenize, and stratified-sample the pretraining corpus, then point HRM-Text at the sampled output.
> 
>   
> 
> Recommended setups:
> 
> 1. **Single node:** run the data pipeline and pretraining on the same node. After tokenization, stratified-sample into that node's shared memory at `/dev/shm/sampled`.
> 2. **Multi-node:** keep `data_io` and the tokenized data on shared storage. Mount or expose that directory on every pretraining node, then run stratified sampling independently on each node. Sampling is fast and deterministic, so every node produces the same in-memory training data.
> 
> Please first setup `data_io`, then run the pipeline. After tokenization, run stratified sampling on each training node.
> 
> ```bash
> cd 
> python sample_tokenized.py epochs=4 output_path=/dev/shm/sampled > show_analytics.md
> ```
> 
> HRM-Text uses 4 training epochs by default. If you change `epochs` in the training config, change the sampling command to match.
> 
> 
> ### 2. Start the Environment
> 
> Set up the same environment on every pretraining node.
> 
> #### Recommended: Docker
> 
> We recommend running through the published Docker image that contains the full environment. Make sure Docker can see your GPUs, for example through NVIDIA Container Toolkit.
> 
> From the repo's directory:
> 
> ```bash
> docker run --gpus all --ipc=host --network=host -it \
>   -v "$PWD":/workspace \
>   sapientai/hrm-text:latest
> ```
> 
> For multi-node runs, mount the same shared workspace on every node. Keeping the code, tokenized data, and checkpoint directory at identical paths avoids version drift between ranks and makes FSDP2 checkpointing straightforward. A common layout is:
> 
> ```text
> /shared/
> |-- HRM-Text/
>    |--- checkpoints/
> |-- data_io/
> ```
> 
> #### Alternative: Install from Source
> 
> If you are not using Docker, first install PyTorch, CUDA, and FlashAttention 3. The tested versions are documented in [`docker/Dockerfile`](docker/Dockerfile).
> 
> Then install the Python dependencies:
> 
> ```bash
> pip install -r requirements.txt
> ```
> 
> #### Check Distributed Communication
> 
> For multi-node runs, verify NCCL before starting a long job. At minimum, confirm that `torchrun` can initialize across the intended nodes. If your cluster provides `nccl-tests`, run both intra-node and inter-node bandwidth checks.
> 
> #### Set Up W&B Tracking
> 
> HRM-Text logs training metrics to [Weights & Biases](https://wandb.ai/). Log in before launching training:
> 
> ```bash
> wandb login
> ```
> 
> For headless runs, get an API key from  and run:
> 
> ```bash
> wandb login 
> ```
> 
> 
> ### 3. Launch Pretraining
> 
> For the **L**-size reference run on one 8xH100 node:
> 
> ```bash
> OMP_NUM_THREADS=1 MKL_NUM_THREADS=1 \
> torchrun --nproc_per_node=8 pretrain.py arch/size@arch=L lr=2.5e-4 global_batch_size=172032
> ```
> 
> For the **XL**-size reference run on two 8xH100 nodes, run this on each node:
> 
> ```bash
> OMP_NUM_THREADS=1 MKL_NUM_THREADS=1 \
> torchrun \
>   --nproc_per_node=8 \
>   --nnodes=2 \
>   --node_rank= \
>   --master_addr= \
>   --master_port= \
>   pretrain.py
> ```
> 
> Checkpoints are saved every epoch under `checkpoints/`. Remember for multi-node runs, each node only saves its own shard, so we recommend mounting a shared storage.
> 
> 
> ### 4. Evaluate
> 
> Evaluation loads the latest checkpoint epoch automatically when `ckpt_epoch` is not provided:
> 
> ```bash
> python -m evaluation.main ckpt_path="checkpoints/..."
> ```
> 
> To run a specified set of benchmarks, append `run_only=[MATH,DROP,ARC,MMLU]` to the command
> 
> Evaluation typically needs one 80 GB GPU. If evaluation runs out of memory, lower the batch size by adding `generation_config.batch_size=16`
> 
> The evaluation scripts use Hugging Face `datasets`, so benchmark data is downloaded on demand.
> 
> 
> ### 5. Export to Transformers Format
> 
> ```bash
> python -m conversion.convert_to_hf \
>   --ckpt_path "checkpoints/..." \
>   --out_dir ""
> ```
> 
> For evaluation and export, EMA weights are used by default when EMA is present in the checkpoint.
> 
> 
> ## Fine-Tuning (SFT)
> 
> Continue-train a pretrain checkpoint on instruction data. Full-parameter only.
> 
> Input is a JSONL with one object per line; `condition` defaults to `direct`:
> 
> ```json
> {"instruction": "", "response": "", "condition": "direct"}
> ```
> 
> 
> ### 1. Prepare Data
> 
> ```bash
> python scripts/prepare_sft_data.py \
>   --train your.jsonl \
>   --tokenizer /path/to/tokenizer.json \
>   --output /dev/shm/sft_data \
>   --epochs 
> ```
> 
> `--epochs` must equal the training epochs (one pre-shuffle per epoch).
> 
> 
> ### 2. Launch Training
> 
> ```bash
> OMP_NUM_THREADS=1 MKL_NUM_THREADS=1 \
> torchrun --nproc_per_node=8 pretrain.py \
>   --config-name cfg_sft \
>   arch/size@arch=XL \
>   data.path=/dev/shm/sft_data \
>   resume_from=/path/to/pretrain_ckpt \
>   +checkpoint_path=/path/to/sft_out
> ```
> 
> `resume_from` loads both model weights and optimizer state (including EMA) by default. Add `weights_only_resume_from_ema=true` to swap the pretrain EMA buffer into the model and start with a fresh optimizer — typical when fine-tuning off a pretrain run. The `arch/*` flags must match the pretrain checkpoint's `all_config.yaml` (override `arch.n_layers` etc. if it differs from the size preset).
> 
> 
> ## Status
> 
> - Training, checkpointing, and evaluation are implemented in this repository.
> - Transformers-format export is implemented in [`conversion/convert_to_hf.py`](conversion/convert_to_hf.py).
> - Native Transformers model support is merged and scheduled for the next release.
> - Native vLLM support for HRM-Text checkpoints is in progress.
> 
> 
> ## Training Overrides
> 
> The default pretraining config is [`config/cfg_pretrain.yaml`](config/cfg_pretrain.yaml):
> 
> If `project_name`, `run_name`, or `checkpoint_path` are omitted, rank 0 derives them from the dataset path, architecture name, and a generated slug.
> 
> Hydra overrides can b

## 延伸閱讀

相關概念：[[大型語言模型]] · [[預訓練]] · [[深度學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[EvoLinkAI--awesome-gpt-image-2-prompts|EvoLinkAI/awesome-gpt-image-2-prompts]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[GAIR-NLP--daVinci-MagiHuman|GAIR-NLP/daVinci-MagiHuman]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]]

[GitHub](https://github.com/sapientinc/HRM-Text)

## 相關收錄

> [!note]- 直接競品（同子分類：大型語言模型）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "大型語言模型" AND file.name != "sapientinc--HRM-Text"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "sapientinc--HRM-Text"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "sapientinc--HRM-Text" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "sapientinc--HRM-Text"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["大型語言模型","預訓練","深度學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "sapientinc--HRM-Text" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/sapientinc--HRM-Text");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "sapientinc--HRM-Text" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "sapientinc" AND file.name != "sapientinc--HRM-Text"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/sapientinc--HRM-Text");
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
> const me = dv.page("Repos/sapientinc--HRM-Text");
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
> const me = dv.page("Repos/sapientinc--HRM-Text");
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
> const me = dv.page("Repos/sapientinc--HRM-Text");
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
> const me = dv.page("Repos/sapientinc--HRM-Text");
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

> **2026-05-22** — 首次收錄
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

- [[2026-05-24|2026-05-24]] — 再次上榜，677 stars
- [[2026-05-23|2026-05-23]] — 再次上榜，650 stars
- [[2026-05-22|2026-05-22]] — 首次收錄，631 stars
