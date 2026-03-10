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
  - "提供一個輕量級推理引擎，支援並行的推測解碼，顯著提升推理速度。"
---

# ssd

**751** stars · **125** stars/天 · 建立 6 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 提供一個輕量級推理引擎，支援並行的推測解碼，顯著提升推理速度。

> [!abstract] 核心創新
> SSD 透過並行推測和驗證，實現即時返回結果，消除草擬延遲。

## 專案簡介

SSD 是一種新的推測解碼算法，讓小型模型與大型模型並行運行，快速預測下一個標記。它使用了 Tensor Parallelism 和 PagedAttention 等技術，並且可以在不同硬體上同時進行推測和驗證。與傳統的推測解碼工具相比，SSD 可以消除草擬過程中的延遲，實現即時返回結果。實際使用中，SSD 在 H100 硬體上表現出色，但需要注意 CUDA 版本的要求。這個專案的成熟度高，適合需要高效推理的 AI 應用，尤其是對於大型模型的使用者來說，值得一試。

**技術棧**：`Python` · `CUDA` · `PyTorch`

## 重點功能

- 支援並行的推測解碼，顯著提升推理速度。
- 參考實作 SSD 算法，提供高效能的推理引擎。
- 支援 Qwen3 和 Llama3 模型系列。
- 整合 Tensor Parallelism 和 PagedAttention 技術。
- 提供 CUDAgraphs 和 torch 編譯的優化選項。

## 快速開始

1. 安裝核心依賴
```bash
uv sync
```
2. 克隆專案並進入資料夾
```bash
git clone https://github.com/tanishqkumar/ssd && cd ssd
```
3. 啟動虛擬環境
```bash
source .venv/bin/activate
```
4. 確認 SSD 模組是否正常運作
```bash
python -c "from ssd import LLM; print('ok')"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 tanishqkumar 在 AI 領域有豐富的經驗，SSD 針對推理速度的需求進行了優化，特別適合當前對於即時反應的應用場景。隨著大型模型的普及，對於推理效率的要求越來越高，這使得 SSD 的需求上升。

## 適合誰使用

**目標受眾**：需要高效推理解決方案的 AI 開發者和研究人員。

> [!example] 使用場景
> - AI 研究員 用它來 測試大型語言模型的推理速度，因為它能顯著減少延遲。
> - 開發者 用它來 部署高效的推理服務，因為 SSD 支援並行推測，提升效能。
> - 數據科學家 用它來 優化模型的推理過程，因為它能快速返回結果，節省時間。

## 架構分析

專案採用前後端分離架構，推理過程中小型模型與大型模型在不同硬體上並行運行，提升整體效能。

## 優缺點分析

> [!success] 優點
> - 顯著提升推理速度，適合即時應用。
> - 支援多種大型模型，靈活性高。
> - 技術實作先進，具備高效能特性。

> [!danger] 缺點
> - 對硬體要求較高，僅限於特定環境。
> - 安裝配置過程較為複雜。
> - 目前功能仍在持續開發中，穩定性有待觀察。

> [!warning] 注意事項
> - 需要 CUDA 12.8 或更高版本。
> - 僅在 H100 硬體上進行測試，效能可能因硬體而異。
> - 目前僅支援特定的模型系列。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Hugging Face Transformers | 主要集中於模型訓練和推理，而 SSD 專注於推理速度的優化。 |
| DeepSpeed | 提供分佈式訓練，SSD 更專注於推理過程的加速。 |

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

**社群活躍度**：社群活躍度中等，近期有更新和回應。
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

相關概念：[[推測解碼]] · [[Tensor Parallelism]] · [[CUDA]] · [[大型語言模型]] · [[高效能計算]]

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
