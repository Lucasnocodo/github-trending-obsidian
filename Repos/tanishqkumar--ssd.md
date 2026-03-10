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
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
aliases:
  - "ssd"
  - "tanishqkumar/ssd"
  - "提供一個輕量級的推論引擎，支援並行的推測解碼，顯著提高大型語言模型的推論速度。"
---

# ssd

**754** stars · **126** stars/天 · 建立 6 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 提供一個輕量級的推論引擎，支援並行的推測解碼，顯著提高大型語言模型的推論速度。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (126 stars/day)
> **適合** 需要在大型模型上進行高效推論的研究團隊或企業。
> **一句話重點** SSD 的創新在於它能夠通過並行化推測和驗證過程，顯著提升大型語言模型的推論效率。

> [!abstract] 核心創新
> SSD 透過並行化推測和驗證過程，顯著提高了大型語言模型的推論速度。

## 專案簡介

SSD 是一種新的推測解碼算法，通過將小型模型的推測和大型模型的驗證並行化來加速推論過程。這意味著小模型可以同時預測多個可能的結果，並在正確的情況下立即返回結果，消除傳統推測解碼中的延遲。技術上，SSD 支持 Qwen3 和 Llama3 模型，並使用了張量並行、PagedAttention 和 CUDA圖等技術來優化性能。與傳統的推測解碼相比，SSD 在硬體資源的利用上更高效，因為它能在不同的硬體上同時運行小型和大型模型。使用 SSD 進行推論時，根據不同數據集的特性，速度提升顯著，尤其是在處理大量提示時。這個專案目前處於 beta 階段，適合需要高效推論的中大型團隊使用。對於小型專案或初學者，可能需要考慮其複雜的環境需求和硬體配置。

**技術棧**：`Python 3.11` · `CUDA 12.8` · `PyTorch`

## 重點功能

- 並行推測解碼 — 小型模型同時預測多個結果，消除傳統解碼的延遲。
- 支持 Qwen3 和 Llama3 模型 — 可直接應用於現有的主流大型模型。
- 張量並行 — 提高多 GPU 環境下的計算效率。
- PagedAttention 和 CUDA圖 — 進一步優化推論性能，提升速度。
- 簡易安裝 — 提供簡單的安裝指令，方便用戶快速上手。

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
5. 運行測試
```bash
python -c "from ssd import LLM; print('ok')"
```

## 程式碼範例

```python
# 在 bench 目錄下運行 SSD 推論
python -O bench.py --llama --size 70 --gpus 5 --spec --async --k 7 --f 3 --b 1 --temp 0 --numseqs 128 --output_len 512 --all
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 tanishqkumar 在 LLM 領域有豐富的經驗，這個專案切中了對於推論速度的迫切需求。隨著大型模型的普及，對於高效推論的需求越來越強烈，SSD 的出現正好滿足了這一點。近期的研究和實驗結果也顯示了 SSD 的優越性能，進一步推動了其受歡迎程度。

## 適合誰使用

**目標受眾**：需要在大型模型上進行高效推論的研究團隊或企業。

> [!example] 使用場景
> - AI 研究員用它來加速大型語言模型的推論，因為 SSD 能夠在多個 GPU 上並行運行，顯著降低推論時間。
> - 後端工程師用它來優化聊天機器人的響應速度，因為 SSD 可以在多個硬體上同時處理請求，提升用戶體驗。
> - 數據科學家用它來進行大規模文本生成，因為 SSD 的推論效率使得處理大量數據變得可行，減少了計算資源的需求。

## 架構分析

SSD 採用微服務架構，將小型模型和大型模型的推測與驗證過程分開。用戶輸入 → 小型模型並行推測 → 大型模型驗證 → 返回結果。關鍵技術決策包括使用張量並行和 CUDA圖來優化性能。專案目錄結構中，bench/ 目錄包含所有基準測試和使用示例。

## 優缺點分析

> [!success] 優點
> - 推論速度顯著提升，尤其在多 GPU 環境下。
> - 支持主流大型模型，易於整合進現有工作流。
> - 簡單的安裝步驟，降低了上手難度。

> [!danger] 缺點
> - 對硬體要求高，需使用高效能 GPU。
> - 目前僅支援特定模型，限制了應用範圍。
> - 環境設置複雜，對新手不友好。

> [!warning] 注意事項
> - 僅支援 Python 3.11+ 和 CUDA >= 12.8。
> - 需要高性能的 GPU（如 H100）來達到最佳效能。
> - 環境設置較為複雜，需要正確配置多個環境變數。
> - 目前僅支持特定的模型（Qwen3 和 Llama3），其他模型可能不兼容。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[huggingface--transformers\|huggingface/transformers]] | 提供更廣泛的模型支持和功能，但在推論速度上不如 SSD 高效。 |
| [[EleutherAI--gpt-neox\|EleutherAI/gpt-neox]] | 專注於大型模型的訓練和推論，但缺乏 SSD 的並行推測能力。 |

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

**社群活躍度**：社群活躍度中等，定期更新和維護。
**連結**：[文件](https://github.com/tanishqkumar/ssd#readme)

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

相關概念：[[推測解碼]] · [[張量並行]] · [[CUDA圖]] · [[大型語言模型]] · [[高效能計算]]

相關專案：[[huggingface--transformers|huggingface/transformers]] · [[EleutherAI--gpt-neox|EleutherAI/gpt-neox]]

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
