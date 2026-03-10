---
repo: tanishqkumar/ssd
url: https://github.com/tanishqkumar/ssd
owner: tanishqkumar
owner_type: User
language: Python
license: MIT
description: "A lightweight inference engine supporting speculative speculative decoding (SSD). "
homepage: ""
stars: 751
stars_per_day: 125
forks: 46
open_issues: 3
created: 2026-03-04
pushed_at: 2026-03-05
first_seen: 2026-03-10
week: "2026-W11"
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
  - "提供一個輕量級推理引擎，支持並行的推測解碼，顯著提升大型語言模型的推理速度。"
---

# ssd

**751** stars · **125** stars/天 · 建立 6 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 提供一個輕量級推理引擎，支持並行的推測解碼，顯著提升大型語言模型的推理速度。

> [!abstract] 核心創新
> SSD 演算法通過並行推測解碼消除了推理過程中的延遲，顯著提升了推理速度。

## 專案簡介

這個專案的核心在於 SSD 演算法，它讓小型模型與大型模型同時運行，預測並驗證生成的 token，從而消除推理過程中的延遲。技術上，它利用了 CUDA、Tensor Parallelism 和 PagedAttention 等技術來優化性能，並支持 Qwen3 和 Llama3 模型系列。與傳統的推測解碼工具相比，SSD 在推理過程中能夠並行處理多個結果，這樣可以大幅度降低計算時間。實際使用中，SSD 在 H100 硬體上表現出色，但需要注意的是，它對於 CUDA 版本有一定要求。整體來看，這個專案在大型語言模型推理上具有很高的潛力，值得在需要高效推理的專案中試用。

**技術棧**：`Python` · `CUDA` · `TensorFlow`

## 重點功能

- 支持並行推測解碼，顯著提升推理速度。
- 兼容 Qwen3 和 Llama3 模型系列。
- 實現了 Tensor Parallelism 和 PagedAttention。
- 提供了 SSD 演算法的參考實現。
- 支持 CUDAgraphs 和 torch 編譯。

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
4. 啟動虛擬環境
```bash
source .venv/bin/activate
```
5. 測試 SSD 模組
```bash
python -c "from ssd import LLM; print('ok')"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 tanishqkumar 在 AI 領域有豐富的經驗，這個專案切中了對於大型語言模型推理速度的迫切需求。隨著大型模型的普及，對於推理效率的需求日益增加，SSD 的出現正好滿足了這一需求，並且在性能上有顯著提升。

## 適合誰使用

**目標受眾**：對大型語言模型推理效率有需求的 AI 開發者和研究人員。

> [!example] 使用場景
> - AI 研究人員 用它來 測試大型語言模型的推理速度，因為 SSD 可以顯著減少推理時間。
> - 開發者 用它來 部署高效的推理服務，因為 SSD 支持並行處理多個推理請求。
> - 數據科學家 用它來 加速模型的實驗迭代，因為 SSD 的設計使得多次實驗能夠在短時間內完成。

## 架構分析

專案採用前後端分離架構，推理引擎使用 SSD 演算法，並通過 CUDA 進行加速。資料流是小型模型預測 → 大型模型驗證 → 結果返回。

## 優缺點分析

> [!success] 優點
> - 顯著提升推理速度，適合高效能需求的場景。
> - 支持多種大型模型，具有良好的擴展性。
> - 並行處理能力強，能夠同時處理多個請求。

> [!danger] 缺點
> - 需要特定的硬體環境，限制了使用範圍。
> - 對於小型模型的效果可能不如大型模型明顯。
> - 安裝和配置過程相對複雜。

> [!warning] 注意事項
> - 需要 CUDA 12.8 或以上版本。
> - 僅在 H100 硬體上進行過測試。
> - 對於小型模型的支持可能不如大型模型明顯。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Hugging Face Transformers | 主要集中於模型的訓練和推理，而 SSD 專注於推理速度的優化。 |
| Fairseq | 提供多種模型架構，但不具備 SSD 的並行推測解碼能力。 |

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

**社群活躍度**：社群活躍度中等，最近有更新，但仍在建立中。

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

相關概念：[[推測解碼]] · [[大型語言模型]] · [[CUDA]] · [[Tensor Parallelism]] · [[推理優化]]

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

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，748 stars
