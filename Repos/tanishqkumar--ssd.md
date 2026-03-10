---
repo: tanishqkumar/ssd
url: https://github.com/tanishqkumar/ssd
owner: tanishqkumar
owner_type: User
language: Python
license: MIT
description: "A lightweight inference engine supporting speculative speculative decoding (SSD). "
homepage: ""
stars: 750
stars_per_day: 125
forks: 46
open_issues: 3
created: 2026-03-04
pushed_at: 2026-03-05
first_seen: 2026-03-10
week: "2026-W11"
category: "AI/ML"
release_tag: ""
install_complexity: "hard"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - ai_ml
  - python
aliases:
  - "ssd"
  - "tanishqkumar/ssd"
  - "提供一個輕量級的推理引擎，支持並行的推測解碼。"
---

# ssd

**750** stars · **125** stars/天 · 建立 6 天前 · Python · MIT

`個人專案` `need-GPU/Docker`

> [!summary] 一句話摘要
> 提供一個輕量級的推理引擎，支持並行的推測解碼。

> [!abstract] 核心創新
> 這個專案的核心創新在於並行處理推測和驗證過程，顯著提高了推理速度。

## 專案簡介

這個專案實現了一種新的推測解碼算法，稱為 SSD，能夠在不同硬體上並行處理推測和驗證過程。它的核心在於小型模型能夠同時預測多個可能的結果，從而消除傳統推測解碼中的延遲。這個推理引擎支持多種模型和優化技術，並強調了高效能和準確性。與其他推理工具相比，SSD 的並行處理能力顯著提高了推理速度，特別是在大型模型上。實際使用中，這個工具能夠在高效能硬體上達到優異的推理效果，但對於資源有限的環境可能不太適用。對於需要高效推理的研究者和開發者來說，這是一個值得探索的選擇。

**技術棧**：`Python`

## 重點功能

- 支持並行推測解碼，顯著提高推理速度。
- 兼容多種模型，包括 Qwen3 和 Llama3。
- 提供優化的推測解碼和自回歸基準。
- 支持 CUDA 平行計算，提升效能。
- 簡單的參考實現，易於使用和擴展。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/tanishqkumar/ssd.git
```
2. 安裝依賴
```bash
uv sync
```
3. 設置環境變數
```bash
export SSD_HF_CACHE=/path/to/huggingface/hub
```
4. 運行測試
```bash
python -c 'from ssd import LLM; print("ok")'
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著對於高效能推理的需求增加，這種並行處理的算法吸引了廣泛的關注。作者的背景和對於推理技術的深入研究使得這個專案在社群中受到重視。

## 適合誰使用

**目標受眾**：需要高效能推理解決方案的研究者和開發者。

> [!example] 使用場景
> - 研究人員 用它來 測試新的推理算法，因為它支持高效的並行處理。
> - 開發者 用它來 優化大型模型的推理速度，因為它能夠顯著提高效能。
> - 數據科學家 用它來 在高效能硬體上進行大規模推理，因為它支持多種模型和優化技術。

## 優缺點分析

> [!success] 優點
> - 顯著提高推理速度，適合大型模型。
> - 支持多種模型和優化技術。
> - 提供簡單的參考實現，易於擴展。

> [!danger] 缺點
> - 需要高效能的硬體支持。
> - 對於小型模型可能不適用。
> - 依賴於 CUDA 和其他外部庫。

> [!warning] 注意事項
> - 需要高效能的硬體支持。
> - 對於小型模型可能不適用。
> - 依賴於 CUDA 和其他外部庫。

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
> If you already have the models downloaded via `huggingface-cli` or similar, you can skip straight to datasets — just make sure `SSD_HF_CACHE` points to the right place. The download scripts require the `scripts` 

## 延伸閱讀

相關概念：[[推測解碼]] · [[並行計算]] · [[深度學習推理]]

[GitHub](https://github.com/tanishqkumar/ssd)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，748 stars
