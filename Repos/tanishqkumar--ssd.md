---
repo: tanishqkumar/ssd
url: https://github.com/tanishqkumar/ssd
owner: tanishqkumar
owner_type: User
language: Python
license: MIT
description: "A lightweight inference engine supporting speculative speculative decoding (SSD). "
homepage: ""
stars: 752
stars_per_day: 125
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
  - "提供一個輕量級的推理引擎，支援並行的推測解碼，顯著提高大型語言模型的推理速度。"
---

# ssd

**752** stars · **125** stars/天 · 建立 6 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 提供一個輕量級的推理引擎，支援並行的推測解碼，顯著提高大型語言模型的推理速度。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (125 stars/day)
> **適合** 需要在大型語言模型上實現高效推理的 AI 開發團隊。
> **一句話重點** SSD 的並行推測機制讓大型語言模型的推理速度有了質的飛躍，這對於實時應用場景至關重要。

> [!abstract] 核心創新
> SSD 通過並行推測的方式，顯著提高了大型語言模型的推理速度。

## 專案簡介

SSD 是一種新的推測解碼算法，透過將小型模型與大型模型的推測與驗證過程並行化來提升推理效率。小型模型預測大型模型可能生成的標記，並同時進行多個推測，若預測正確，則直接返回結果，省去傳統的逐步驗證過程。這個引擎支援 Qwen3 和 Llama3 模型家族，並利用 CUDA圖形、張量並行等技術來優化性能。與傳統的推測解碼工具相比，SSD 在硬體資源的使用上更為高效，能夠在多個 GPU 上同時運行，顯著降低推理延遲。實際測試顯示，SSD 在多種數據集上的推理速度有顯著提升，特別是在大型模型上。這個專案目前處於 beta 階段，對於需要高效推理的團隊來說，值得考慮使用。對於小型項目或對性能要求不高的情境，可能不需要這麼複雜的解決方案。

**技術棧**：`Python 3.11+` · `CUDA 12.8`

## 重點功能

- 並行推測解碼 — 小型模型同時預測多個標記，消除逐步驗證的延遲。
- 支援 Qwen3 和 Llama3 模型家族 — 兼容多種流行的 LLM。
- 張量並行 — 在多個 GPU 上有效分配計算資源。
- PagedAttention 和 CUDAgraphs — 利用先進的技術優化內存和計算性能。
- 簡單的安裝和配置 — 提供清晰的安裝指令和環境設置。

## 快速開始

1. 安裝 uv 工具
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 克隆專案並安裝依賴
```bash
git clone https://github.com/tanishqkumar/ssd && cd ssd && uv sync
```
3. 設置環境變數
```bash
export SSD_HF_CACHE=/path/to/huggingface/hub
```
4. 下載模型和數據集
```bash
python scripts/download_from_hf.py llama
```
5. 運行基準測試
```bash
cd bench && python -O bench.py --llama --size 70 --gpus 4 --all
```

## 程式碼範例

python -O bench.py --llama --size 70 --gpus 4 --spec --async --k 7 --f 3 --b 1 --temp 0 --numseqs 128 --output_len 512 --all

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 tanishqkumar 在推理優化領域有豐富經驗，這個專案切中了對大型語言模型推理速度的迫切需求。隨著 AI 應用的普及，對於高效推理的需求日益增加，這使得 SSD 的實用性和吸引力上升。

## 適合誰使用

**目標受眾**：需要在大型語言模型上實現高效推理的 AI 開發團隊。

> [!example] 使用場景
> - AI 研究員用它來加速 LLM 模型的推理過程，因為 SSD 可以在多 GPU 上並行運行，顯著降低推理時間。
> - 後端工程師用它來優化 API 的回應速度，因為 SSD 的推理效率使得大型模型能在更短時間內提供結果。
> - 數據科學家用它來快速迭代模型，因為 SSD 的並行推測特性讓他們能在更短的時間內測試多個模型配置。

## 架構分析

這是一個微服務架構的推理引擎，核心資料流為：用戶請求 → 小型模型預測 → 大型模型驗證 → 返回結果。關鍵技術決策包括使用 CUDAgraphs 和張量並行來優化性能，專案目錄結構中包含核心的推理邏輯和基準測試腳本。

## 優缺點分析

> [!success] 優點
> - 顯著提高推理速度，特別是在大型模型上。
> - 支持多種流行的 LLM 模型，擴展性強。
> - 提供清晰的安裝和使用指導，易於上手。

> [!danger] 缺點
> - 需要較高的硬體要求，對於小型項目不一定合適。
> - 目前處於 beta 階段，穩定性和兼容性可能存在問題。
> - 僅支援特定版本的 Python 和 CUDA，限制了使用範圍。

> [!warning] 注意事項
> - 僅支援 Python 3.11+ 和 CUDA >= 12.8。
> - 需要多個 GPU 來充分利用並行推測的優勢。
> - 目前僅在 H100 硬體上進行測試，其他硬體的效能尚未驗證。
> - beta 階段，API 可能會有變動。

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

**社群活躍度**：社群活躍，持續更新和維護中。
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

相關概念：[[深度學習]] · [[推理優化]] · [[張量並行]]

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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，748 stars
