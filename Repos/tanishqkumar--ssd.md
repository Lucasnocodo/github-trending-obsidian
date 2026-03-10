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
  - "提供一個輕量級的推理引擎，支援並行的推測解碼以加速大型語言模型的推理過程。"
---

# ssd

**751** stars · **125** stars/天 · 建立 6 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 提供一個輕量級的推理引擎，支援並行的推測解碼以加速大型語言模型的推理過程。

> [!abstract] 核心創新
> SSD 透過並行推測解碼技術，顯著提升大型語言模型的推理速度。

## 專案簡介

SSD 透過並行處理推測解碼，讓小型模型預測大型模型可能生成的下一個標記，並同時進行驗證。這個引擎使用 Python 實作，並支援 Qwen3 和 Llama3 模型系列，結合了張量並行和頁面注意力等技術。與傳統的推測解碼不同，SSD 消除了草擬過程中的延遲，提升了推理效率。實際測試顯示，這種方法能顯著減少推理時間，尤其在高效能的 GPU 環境下表現更佳。這個專案對於需要快速推理的應用場景非常合適，特別是對於大型語言模型的開發者來說，值得一試。

**技術棧**：`Python` · `CUDA` · `Torch`

## 重點功能

- 支援並行的推測解碼，提升推理速度。
- 提供 SSD 演算法的參考實作。
- 支援 Qwen3 和 Llama3 模型系列。
- 結合張量並行技術，優化性能。
- 支援 CUDAgraphs 和前綴快取功能。

## 快速開始

1. 安裝依賴
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 克隆專案並進入資料夾
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
5. 測試 SSD 是否正常運作
```bash
python -c "from ssd import LLM; print('ok')"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 tanishqkumar 在推理優化方面有豐富的經驗，這個專案正好切中對於大型語言模型推理速度的需求。隨著 AI 應用的普及，開發者對於推理效率的要求越來越高，這使得 SSD 在市場上受到關注。

## 適合誰使用

**目標受眾**：對於需要加速大型語言模型推理的開發者和研究人員。

> [!example] 使用場景
> - AI 研究人員 用它來 加速大型語言模型的推理，因為 SSD 的並行推測解碼能顯著提升效率。
> - 開發者 用它來 測試不同模型的推理性能，因為它支援多種模型並能快速驗證結果。
> - 數據科學家 用它來 優化模型的推理流程，因為 SSD 減少了推理過程中的延遲。

## 架構分析

專案採用前後端分離架構，推理引擎使用 SSD 演算法，並結合多個硬體進行並行處理。資料流是小型模型預測 → 大型模型驗證 → 結果回傳。

## 優缺點分析

> [!success] 優點
> - 顯著提升推理速度，特別是在高效能硬體上。
> - 支援多種大型語言模型，靈活性高。
> - 並行處理技術能有效減少推理延遲。

> [!danger] 缺點
> - 僅限於 CUDA 環境，對於其他硬體支援有限。
> - 需要較高的技術門檻來進行配置和調整。
> - 目前尚在開發中，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 CUDA 環境，需具備相應的硬體。
> - 需要 Python 3.11 以上版本。
> - 目前僅在 H100 硬體上進行測試，其他硬體效能未必相同。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Hugging Face Transformers | 主要針對預訓練模型，並不專注於推理速度的優化。 |
| DeepSpeed | 雖然也支援大規模模型，但不具備 SSD 的並行推測解碼特性。 |

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

**社群活躍度**：社群活躍度中等，持續有更新。
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
> If you already have the models downloaded via `huggingface-cli` or similar, you can skip straight to datasets — just make sure `SSD_HF_CACHE` points to the right place. The download scripts require the `scripts` 

## 延伸閱讀

相關概念：[[推測解碼]] · [[大型語言模型]] · [[張量並行]] · [[CUDA]] · [[深度學習推理]]

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
