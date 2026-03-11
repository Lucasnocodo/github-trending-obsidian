---
repo: tanishqkumar/ssd
url: https://github.com/tanishqkumar/ssd
owner: tanishqkumar
owner_type: User
language: Python
license: MIT
description: "A lightweight inference engine supporting speculative speculative decoding (SSD). "
homepage: ""
stars: 753
stars_per_day: 126
forks: 47
open_issues: 3
created: 2026-03-04
pushed_at: 2026-03-05
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "LLM 推論"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供一個輕量級的推論引擎，實現快速的推測性解碼，顯著提高大型語言模型的推理效率。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
aliases:
  - "ssd"
  - "tanishqkumar/ssd"
  - "提供一個輕量級的推論引擎，實現快速的推測性解碼，顯著提高大型語言模型的推理效率。"
---

# ssd

**753** stars · **126** stars/天 · 建立 6 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 提供一個輕量級的推論引擎，實現快速的推測性解碼，顯著提高大型語言模型的推理效率。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (126 stars/day)
> **授權** MIT (商業友好)
> **適合** 需要在大型語言模型上實現高效推理的研究團隊或企業。
> **一句話重點** SSD 的並行推測技術顯著提升了大型語言模型的推理效率，為即時應用提供了新的解決方案。

> [!abstract] 核心創新
> SSD 透過並行推測和驗證，顯著提高了大型語言模型的推理速度。

## 專案簡介

SSD 是一種新型的推測性解碼演算法，透過小型模型並行預測大型模型的輸出，從而消除傳統解碼的延遲。與傳統的推測性解碼不同，SSD 在不同硬體上同時進行預測和驗證，這樣一來，如果預測正確，則可以立即返回結果。該引擎支持 Qwen3 和 Llama3 模型，並利用了張量並行性和 CUDA 圖形等技術來優化性能。與其他推測性解碼工具相比，SSD 在速度和準確性上有顯著提升，特別是在處理多樣化數據集時。使用 SSD 時，對於大型模型的推理速度可達到每秒生成數百個 token，這對於需要快速反應的應用場景非常重要。該專案目前處於 beta 階段，適合對推理速度有高要求的團隊使用。建議在需要高效推理的情境下使用，但對於小型模型或資源有限的環境可能不太適合。

**技術棧**：`Python 3.11` · `CUDA 12.8` · `torch`

## 重點功能

- 並行推測 — 小型模型與大型模型同時運行，消除傳統推理延遲。
- 支持多種模型 — 兼容 Qwen3 和 Llama3 模型系列。
- 張量並行性 — 利用多 GPU 加速推理過程。
- 優化的推測性解碼 — 提供比傳統解碼更快的推理速度。
- 支持 CUDA 圖形 — 提高計算效率，減少資源消耗。

## 快速開始

1. 安裝依賴
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 克隆專案並安裝核心依賴
```bash
git clone https://github.com/tanishqkumar/ssd && cd ssd && uv sync
```
3. 設置環境變數
```bash
export SSD_HF_CACHE=/path/to/huggingface/hub
```
4. 下載模型
```bash
python scripts/download_from_hf.py llama
```
5. 運行基準測試
```bash
cd bench && python -O bench.py --llama --size 70 --gpus 4 --numseqs 128 --all
```

## 程式碼範例

python -O chat.py --ssd --gpus 4

## 為什麼值得關注

> [!tip] 爆紅原因
> (a) 作者 tanishqkumar 之前參與過多個知名的 AI 專案，這次的 SSD 專案展示了其在推理效率上的創新。(b) SSD 解決了大型語言模型推理過程中的延遲問題，特別是在需要快速反應的應用中。(c) 最近的社群討論和推文對 SSD 的性能表現給予了高度評價，吸引了更多開發者的注意。(d) 隨著大型語言模型的普及，對推理速度的需求越來越迫切，SSD 的出現正好滿足了這一需求。

## 適合誰使用

**目標受眾**：需要在大型語言模型上實現高效推理的研究團隊或企業。

> [!example] 使用場景
> - AI 研究員用它來加速大型語言模型的推理過程，因為 SSD 可以在多個 GPU 上並行運行，顯著提高生成速度。
> - 後端工程師用它來實現即時聊天機器人，因為 SSD 的快速推理能力使得回應時間縮短至毫秒級。
> - 數據科學家用它來處理大規模文本生成任務，因為 SSD 的推理效率能夠支持每秒生成數百個 token，提升工作效率。

## 架構分析

SSD 採用微服務架構，將小型模型和大型模型分開運行。用戶輸入 → 小型模型預測 → 大型模型驗證 → 輸出結果。關鍵技術決策包括使用張量並行性來加速推理，並利用 CUDA 圖形來提高計算效率。專案目錄結構包含核心的 SSD 實現和基準測試腳本。

## 技術深入分析

> [!note]- 展開深入分析
> SSD 的核心在於其並行推測和驗證機制，這使得小型模型可以在大型模型運行的同時進行預測，從而消除了傳統推理中的延遲。效能測試顯示，SSD 在多樣化數據集上能夠達到每秒生成數百個 token，這對於需要快速反應的應用場景至關重要。設計上，SSD 選擇了張量並行性來提升計算效率，這在處理大型模型時特別有效。與其他推測性解碼工具相比，SSD 在速度和準確性上有顯著提升，特別是在處理多樣化數據集時。

## 優缺點分析

> [!success] 優點
> - 推理速度快，能夠支持即時應用。
> - 支持多種大型模型，擴展性強。
> - 並行處理減少了計算資源的浪費。
> - 提供了基準測試工具，方便用戶評估性能。

> [!danger] 缺點
> - 需要高效能的硬體支持，對於普通用戶可能不友好。
> - 目前僅在 beta 階段，穩定性可能不足。
> - 安裝和配置過程相對複雜，對新手不太友好。
> - 對於小型模型的支持有限，無法廣泛應用於所有場景。

> [!warning] 注意事項
> - 僅支援 Python 3.11+ 和 CUDA >= 12.8。
> - 需要高效能的 GPU，如 H100，才能達到最佳性能。
> - 目前僅支持特定的模型系列，對於其他模型可能不兼容。
> - beta 階段，API 可能會有變動。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供了類似的推理加速功能，但主要針對資料同步而非推測性解碼。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於安全性和隱私保護，而 SSD 更加專注於推理速度和效率。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 47 |
| Open Issues | 3 |
| 最後推送 | 2026-03-05 |
| 建立日期 | 2026-03-04 |
| Repo 大小 | 348 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tanishqkumar](https://github.com/tanishqkumar) | 16 |

## 社群與生態

**社群活躍度**：社群活躍度中等，定期更新和討論。

## README 摘錄

> [!info]- 展開查看原文 README
> Speculative Speculative Decoding
> 
>   Paper
> 
>   
> 
> > *"In all fictions, each time a man meets diverse alternatives, he chooses one and eliminates the others; in the work of the almost unfathomable Ts'ui Pên, he chooses — simultaneously — all of them."*
> >
> > — Jorge Luis Borges, "The Garden of Forking Paths" (1941)
> 
> **SSD is a new LLM inference algorithm. It is exact, and it is extremely fast.**
> 
> SSD is a new type of speculative decoding (SD). In normal SD, a small and fast model guesses the next few tokens that a larger slower model may generate, and the large model then verifies them in one forward pass: drafting and verification happen one after the other on the same hardware.
> 
> In SSD, they happen in parallel, on distinct hardware. The small model anticipates likely verification outcomes in advance, and speculates for all of them at once. If it guessed correctly, the speculation can be returned immediately so drafting overhead is eliminated entirely.
> 
> This custom inference engine supports:
> - A reference implementation of the SSD algorithm
> - Optimized SD and autoregressive baselines
> - Qwen3 + Llama3 model families
> - Tensor Parallelism
> - PagedAttention, CUDAgraphs, torch compilation, prefix caching
> 
>   
>     
>   
> 
> ## Setup
> 
> Requirements: Python 3.11+, CUDA >= 12.8. This code was written and tested on H100s. 
> 
> If `uv` is not installed:
> 
> ```bash
> curl -LsSf https://astral.sh/uv/install.sh | sh
> # if `uv` is not found in this shell:
> export PATH="$HOME/.local/bin:$PATH"
> ```
> 
> Then: 
> 
> ```bash
> git clone https://github.com/tanishqkumar/ssd && cd ssd
> uv sync                    # core SSD deps
> # uv sync --extra scripts  # add deps used by scripts/
> source .venv/bin/activate
> python -c "from ssd import LLM; print('ok')"
> ```
> 
> Set paths via environment variables. `SSD_HF_CACHE` should point to the HuggingFace **hub** directory — this is the directory that contains `models--org--name/` subdirectories (e.g. `/data/huggingface/hub`, not `/data/huggingface/`). `SSD_DATASET_DIR` should point to the directory containing the dataset subdirectories (`humaneval/`, `alpaca/`, etc).
> 
> ```bash
> export SSD_HF_CACHE=/path/to/huggingface/hub
> export SSD_DATASET_DIR=/path/to/processed_datasets
> export SSD_CUDA_ARCH=9.0   # 9.0=H100, 8.0=A100, 8.9=L40/4090
> ```
> 
> ### Download models + datasets
> 
> If you already have the models downloaded via `huggingface-cli` or similar, you can skip straight to datasets — just make sure `SSD_HF_CACHE` points to the right place. The download scripts require the `scripts` extra: `uv sync --extra scripts`.
> 
> ```bash
> # models (uses SSD_HF_CACHE)
> python scripts/download_from_hf.py llama
> 
> # datasets (writes to $HF_DATASETS_CACHE/processed_datasets)
> export HF_DATASETS_CACHE=/path/to  # parent of SSD_DATASET_DIR
> python scripts/get_data_from_hf.py --num-samples 10000
> ```
> 
> ## Usage
> 
> All commands below run from inside the `bench/` directory. Large models (Llama-3 70B, Qwen-3 32B) take a few minutes for load/warmup/compile before generation starts. Always use `python -O` to disable debug overhead.
> 
> ### Benchmarks
> 
> Use `--all` for full eval across four datasets. Since different data distributions are predictable to varying degrees, the speed of SD/SSD depends a lot on the dataset. Averaging over many prompts from many types of datasets 
> gives an overall picture. `--numseqs` is per-dataset, so `--numseqs 128 --all` runs 128 × 4 = 512 prompts total.
> 
> ```bash
> cd bench
> 
> # AR — Llama 70B, 4 GPUs
> python -O bench.py --llama --size 70 --gpus 4 --b 1 --temp 0 --numseqs 128 --output_len 512 --all
> 
> # Sync spec decode — 70B target + 1B draft, 4 GPUs, k=6
> python -O bench.py --llama --size 70 --gpus 4 --spec --k 6 --b 1 --temp 0 --numseqs 128 --output_len 512 --all
> 
> # Async spec decode (SSD) — 70B target (4 GPUs) + 1B draft (1 GPU), k=7, f=3
> python -O bench.py --llama --size 70 --gpus 5 --spec --async --k 7 --f 3 --b 1 --temp 0 --numseqs 128 --output_len 512 --all
> ```
> 
> Use `--qwen --size 32` for Qwen models. See `bench/bench.py` for full args. For SGLang/vLLM baselines

## 延伸閱讀

相關概念：[[推測性解碼]] · [[LLM 推論]] · [[張量並行性]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[tanishqkumar--sd|tanishqkumar/sd]] · [[huggingface--transformers|huggingface/transformers]] · [[karpathy--autoresearch|karpathy/autoresearch]] · [[duoan--TorchCode|duoan/TorchCode]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]]

[GitHub](https://github.com/tanishqkumar/ssd)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "tanishqkumar--ssd"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "tanishqkumar--ssd"
> SORT stars DESC
> ```

---

## 個人筆記

> [!question]+ 快速評估（30 秒填完）
> 
> 相關性:: 未評估
> 印象:: _一句話_
> 行動:: 不需要
> 
> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_
> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 實際效果 :: _達到預期 / 不如預期（原因）_
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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，754 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，748 stars
