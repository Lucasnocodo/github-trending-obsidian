---
repo: tanishqkumar/ssd
url: https://github.com/tanishqkumar/ssd
owner: tanishqkumar
owner_type: User
language: Python
license: MIT
description: "A lightweight inference engine supporting speculative speculative decoding (SSD). "
homepage: ""
stars: 754
stars_per_day: 126
forks: 46
open_issues: 3
created: 2026-03-04
pushed_at: 2026-03-05
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供一個輕量級的推論引擎，支持並行的推測解碼，顯著提升大模型的推理速度。"
priority: medium
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
aliases:
  - "ssd"
  - "tanishqkumar/ssd"
  - "提供一個輕量級的推論引擎，支持並行的推測解碼，顯著提升大模型的推理速度。"
---

# ssd

**754** stars · **126** stars/天 · 建立 6 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 提供一個輕量級的推論引擎，支持並行的推測解碼，顯著提升大模型的推理速度。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (126 stars/day)
> **適合** 需要在多個 GPU 上進行高效 LLM 推理的機器學習團隊。
> **一句話重點** SSD 的並行推測解碼技術能夠大幅提升大模型的推理效率，這在實際應用中具有重要意義。

> [!abstract] 核心創新
> SSD 是一種新的推測解碼算法，通過並行化推理過程來顯著提升推理速度。

## 專案簡介

SSD 是一種新的推測解碼算法，透過將小型模型和大型模型的推理過程並行化，來提升推理效率。具體來說，小模型預測可能的驗證結果，並同時進行多個推測，從而消除傳統推測解碼中的延遲。技術上，SSD 支持 Qwen3 和 Llama3 模型，並利用了 CUDA 的圖形計算能力和張量並行性來優化性能。與傳統的推測解碼相比，SSD 在硬體需求上更為靈活，能夠在不同的設備上運行。實際使用中，SSD 在多個數據集上表現出色，但對於硬體的要求較高，建議使用 NVIDIA H100 或 A100 GPU。這個專案目前處於穩定階段，適合需要高效推理的中大型團隊使用。若你的應用場景需要快速的推理速度且能夠承擔較高的硬體成本，SSD 是個不錯的選擇；但如果你的硬體資源有限，可能需要考慮其他輕量級的解決方案。

**技術棧**：`Python 3.11` · `CUDA 12.8` · `PyTorch`

## 重點功能

- 並行推測解碼 — 小型模型同時推測多個可能的驗證結果，消除傳統推測的延遲。
- 支持 Qwen3 和 Llama3 模型 — 兼容多種流行的 LLM 模型。
- 張量並行性 — 利用 CUDA 的圖形計算能力來優化性能。
- 自定義推論引擎 — 提供 SSD 算法的參考實現，易於擴展和修改。
- 支持多種數據集 — 能夠在多個數據集上進行基準測試，提供靈活的應用場景。

## 快速開始

1. 安裝依賴
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 克隆專案並進入目錄
```bash
git clone https://github.com/tanishqkumar/ssd && cd ssd
```
3. 同步核心依賴
```bash
uv sync
```
4. 設置環境變數
```bash
export SSD_HF_CACHE=/path/to/huggingface/hub
```
5. 下載模型
```bash
python scripts/download_from_hf.py llama
```

## 程式碼範例

python -O bench.py --llama --size 70 --gpus 4 --spec --async --k 7 --f 3 --b 1 --temp 0 --numseqs 128 --output_len 512 --all

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 tanishqkumar 具備深厚的機器學習背景，SSD 切中快速推理的需求，尤其在大模型推理上表現突出。近期對於推理效率的關注使得這個專案受到矚目，尤其是在多種硬體環境下的靈活性。

## 適合誰使用

**目標受眾**：需要在多個 GPU 上進行高效 LLM 推理的機器學習團隊。

> [!example] 使用場景
> - 機器學習工程師用它來加速 LLM 的推理過程，因為 SSD 能夠在多個 GPU 上並行推理，顯著降低延遲。
> - 數據科學家用它來處理大型數據集的即時推理，因為 SSD 的推理速度比傳統方法快 2-3 倍。
> - AI 研究者用它來測試新模型的推理性能，因為支持多種模型架構，能夠快速進行比較和評估。

## 架構分析

SSD 是一個基於推測解碼的推論引擎，採用前後端分離的架構。用戶輸入 → 小模型推測多個結果 → 大模型驗證結果。關鍵技術決策包括使用 CUDA 進行性能優化和支持多種模型架構。專案目錄結構中，bench/ 目錄包含基準測試的核心腳本。

## 技術深入分析

> [!note]- 展開深入分析
> SSD 的核心在於其並行推測解碼的設計，通過小模型同時推測多個結果，並在大模型驗證時消除延遲。這種設計使得 SSD 在多個數據集上表現出色，特別是在需要快速反應的應用場景中。效能測試顯示，SSD 在多種數據集上能夠達到 2-3 倍的速度提升。選擇 CUDA 進行性能優化是因為其在 GPU 計算中的優越性，這使得 SSD 能夠充分利用現代 GPU 的計算能力。與其他推測解碼工具相比，SSD 的技術決策在於其並行化的架構，這使得它在處理大型模型時具備了更高的效率。

## 優缺點分析

> [!success] 優點
> - 推理速度快，能夠在多個 GPU 上並行處理，顯著降低延遲。
> - 支持多種流行的 LLM 模型，具有良好的擴展性。
> - 提供基準測試腳本，方便用戶評估性能。

> [!danger] 缺點
> - 對硬體要求高，僅適合有高效能 GPU 的環境。
> - 安裝過程相對複雜，需要設置多個環境變數。
> - 目前僅支持特定的模型，未來的擴展性尚不明朗。

> [!warning] 注意事項
> - 僅支援 Python 3.11+ 和 CUDA >= 12.8。
> - 需要 NVIDIA H100 或 A100 GPU 以達到最佳性能。
> - 不支援 Windows 環境。
> - 目前僅提供對 Qwen3 和 Llama3 模型的支持。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[tanishqkumar--sd\|tanishqkumar/sd]] | SSD 專注於並行推測解碼，能夠顯著提升推理速度，而傳統的推測解碼則是串行處理，速度較慢。 |
| [[huggingface--transformers\|huggingface/transformers]] | Transformers 提供了多種模型的推理支持，但缺乏 SSD 的並行推測能力，性能上不如 SSD。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 46 |
| Open Issues | 3 |
| 最後推送 | 2026-03-05 |
| 建立日期 | 2026-03-04 |
| Repo 大小 | 348 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tanishqkumar](https://github.com/tanishqkumar) | 16 |

## 社群與生態

**社群活躍度**：社群活躍度中等，持續有更新和維護。

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

相關概念：[[推測解碼]] · [[張量並行性]] · [[CUDA]] · [[大規模語言模型]]

相關專案：[[tanishqkumar--sd|tanishqkumar/sd]] · [[huggingface--transformers|huggingface/transformers]] · [[karpathy--autoresearch|karpathy/autoresearch]] · [[duoan--TorchCode|duoan/TorchCode]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]]

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

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，748 stars
