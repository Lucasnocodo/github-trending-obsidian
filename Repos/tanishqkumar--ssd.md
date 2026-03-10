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
  - "提供一個輕量級的推論引擎，支持並行的推測解碼，顯著提升大型模型的推理速度。"
---

# ssd

**754** stars · **126** stars/天 · 建立 6 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 提供一個輕量級的推論引擎，支持並行的推測解碼，顯著提升大型模型的推理速度。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (126 stars/day)
> **適合** 需要在多GPU環境中進行大型模型推理的機器學習工程師。
> **一句話重點** SSD的並行推測解碼技術為大型模型推理帶來了革命性的改變，顯著提升了速度和效率。

> [!abstract] 核心創新
> SSD算法通過並行推測和驗證，顯著提升了推理速度，改變了大型模型的推理方式。

## 專案簡介

SSD（Speculative Speculative Decoding）是一種新的推測解碼算法，通過在不同硬體上並行運行小型模型和大型模型，來加速推理過程。小型模型預測大型模型可能生成的下一個標記，並同時進行多個推測，從而消除草擬過程的延遲。這個引擎支持Qwen3和Llama3模型，並利用Tensor Parallelism和PagedAttention等技術來優化性能。與傳統的推測解碼相比，SSD能夠在多個硬體上同時運行，這使得推理速度大幅提升，特別是在大型模型上。根據基準測試，SSD在多種數據集上表現出色，能夠在4個GPU上實現高效的推理。該專案目前處於beta階段，適合需要高效推理的中大型團隊使用。建議在需要快速推理和高效資源利用的情況下使用，但對於小型模型或不需要高性能的應用則不太適合。

**技術棧**：`Python 3.11` · `CUDA 12.8`

## 重點功能

- 並行推測解碼 — 支持小型模型和大型模型同時運行，顯著提高推理速度。
- 支持Qwen3和Llama3模型 — 兼容主流大型模型，方便使用。
- Tensor Parallelism — 利用張量並行技術來優化性能。
- PagedAttention — 提升模型在處理長序列時的效率。
- 基準測試支持 — 提供多種基準測試命令，方便用戶評估性能。

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
4. 運行測試
```bash
python -c "from ssd import LLM; print('ok')"
```

## 程式碼範例

python -O bench.py --llama --size 70 --gpus 4 --spec --async --k 7 --f 3 --b 1 --temp 0 --numseqs 128 --output_len 512 --all

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者tanishqkumar在推理算法方面有深厚的背景，這個專案切中了對大型模型推理速度的迫切需求。SSD的創新方法使得推理過程更為高效，特別是在多GPU環境下的表現，這使得它在開源社群中迅速受到關注。

## 適合誰使用

**目標受眾**：需要在多GPU環境中進行大型模型推理的機器學習工程師。

> [!example] 使用場景
> - AI研究員用它來加速大型語言模型的推理過程，因為傳統的推測解碼速度太慢，SSD能夠顯著提升效率。
> - 機器學習工程師用它來測試不同模型的推理性能，因為它支持多種模型並行運行，能夠快速獲得結果。
> - 雲服務提供商用它來優化推理服務，因為SSD的並行處理能力能夠減少資源消耗並提升服務響應速度。

## 架構分析

這是一個微服務架構，核心資料流為：用戶輸入 → 小型模型預測 → 大型模型驗證 → 輸出結果。關鍵技術決策包括使用Tensor Parallelism和PagedAttention來提升性能，專案目錄結構中包含核心的bench.py和scripts資料夾。

## 優缺點分析

> [!success] 優點
> - 顯著提升大型模型的推理速度，特別是在多GPU環境下。
> - 支持多種主流模型，方便用戶選擇。
> - 提供基準測試，幫助用戶評估性能。

> [!danger] 缺點
> - 對硬體要求高，需使用高效能GPU。
> - 目前僅支持特定版本的Python和CUDA。
> - 在小型模型上可能不如傳統方法有效。

> [!warning] 注意事項
> - 僅支援 Python 3.11+ 和 CUDA >= 12.8
> - 需要高效能的硬體支持，建議使用 H100 GPU
> - 目前僅在特定模型上進行測試，其他模型的兼容性尚未確認

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

**社群活躍度**：社群活躍度中等，持續更新中。
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

相關概念：[[深度學習]] · [[推理優化]] · [[並行計算]]

[GitHub](https://github.com/tanishqkumar/ssd)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "tanishqkumar--ssd"
> SORT stars DESC
> LIMIT 8
> ```

---

## 個人筆記

> [!question]+ 快速評估（第一次看時填寫）
> _填寫後更新 frontmatter 的 `my_rating` 和 `status` 欄位_
> 
> **跟我的工作相關嗎？** 是 / 否 / 間接相關
> **值得花時間試用嗎？** 是 / 以後再說 / 不需要
> **第一印象**：_一句話_

> [!success]- 深度評估（試用後填寫）
> 
> | 項目 | 分數 (1-5) | 備註 |
> | --- | :---: | --- |
> | 實用性 | /5 | |
> | 技術新穎性 | /5 | |
> | 文件品質 | /5 | |
> | 社群活躍度 | /5 | |
> | 上手難度 | /5 | 1=很難 5=很簡單 |
> 
> **成熟度**：早期 / 可用 / 穩定
> **總評**：_整體評價、跟其他工具的比較、推薦給誰..._

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
