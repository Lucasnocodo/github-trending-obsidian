---
repo: tanishqkumar/ssd
url: https://github.com/tanishqkumar/ssd
owner: tanishqkumar
owner_type: User
language: Python
license: MIT
description: "A lightweight inference engine supporting speculative speculative decoding (SSD). "
homepage: ""
stars: 749
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
  - ai_ml
  - python
---

# ssd

**749** stars · **125** stars/天 · 建立 6 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 提供一個輕量級的推理引擎，支援快速的推測解碼。

> [!abstract] 核心創新
> SSD 允許推測和驗證在不同硬體上並行進行，從而消除推理過程中的延遲。

## 專案簡介

這個專案實現了一種新的推測解碼算法，能夠在不同硬體上並行進行推測和驗證，從而加速推理過程。使用 Python 實作，並支援多種模型家族，如 Qwen3 和 Llama3。與傳統的推測解碼工具相比，SSD 能夠同時處理多個推測，顯著提高效率。這個專案在推理速度上表現出色，值得對 AI 模型推理有需求的開發者試用。

**技術棧**：`Python`

## 重點功能

- 支援並行的推測和驗證過程，顯著提高推理速度。
- 提供 SSD 算法的參考實現，便於開發者使用。
- 支援多種模型家族，靈活性高。

## 快速開始

1. 安裝必要的 Python 套件
```bash
pip install -r requirements.txt
```
2. 運行 SSD 推理
```bash
python run_inference.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在 AI 研究領域有豐富的經驗，這個專案解決了推理速度慢的問題，符合當前對高效能 AI 模型的需求。

## 適合誰使用

**目標受眾**：需要高效推理引擎的 AI 開發者和研究人員。

> [!example] 使用場景
> - [AI 研究員] 用它來 加速大型模型的推理過程，因為這樣可以更快地獲得結果。
> - [開發者] 用它來 測試和優化模型的推理性能，因為這樣可以提高整體效率。
> - [數據科學家] 用它來 在多個硬體上進行模型推理，因為這樣可以充分利用資源。

> [!warning] 注意事項
> 需要高效的硬體支持以發揮最佳性能。

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
> ```bas

## 延伸閱讀

相關概念：[[推測解碼]] · [[深度學習]] · [[模型推理]]

[GitHub](https://github.com/tanishqkumar/ssd)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，748 stars
