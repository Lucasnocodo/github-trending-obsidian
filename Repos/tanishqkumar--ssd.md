---
repo: tanishqkumar/ssd
url: https://github.com/tanishqkumar/ssd
owner: tanishqkumar
owner_type: User
language: Python
license: MIT
description: "A lightweight inference engine supporting speculative speculative decoding (SSD). "
homepage: ""
stars: 748
stars_per_day: 125
forks: 46
open_issues: 3
created: 2026-03-04
first_seen: 2026-03-10
week: "2026-W11"
category: "AI/ML"
release_tag: ""
status: to-review
tags:
  - github
  - ai_ml
  - python
---

# ssd

**748** stars · **125** stars/天 · 建立 6 天前 · Python · MIT

> [!summary] 一句話摘要
> 提供一個輕量級的推論引擎，支援快速的推測解碼。

## 專案簡介

這個專案實作了一種新的推測解碼算法，能夠在不同硬體上並行進行推理，顯著提高推理速度。它使用 Python 實作，並支援多種模型，適合需要高效推理的應用。與傳統的推測解碼方法相比，SSD 能夠同時處理多個可能的結果，減少延遲。值得一試，特別是對於需要快速反應的 AI 應用。

## 重點功能

- 支援新的推測解碼算法，顯著提高推理速度。
- 能夠在不同硬體上並行處理推理任務。
- 兼容多種模型，提供靈活的應用選擇。

## 快速開始

安裝所需的依賴包。,運行 SSD 引擎並加載模型。

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 AI 應用的需求增加，對於高效推理的需求也隨之上升，這個工具正好切中要害。作者的技術背景和對於推理算法的深入研究使得這個工具更具吸引力。

## 適合誰使用

**目標受眾**：AI 開發者和研究人員，特別是需要高效推理的使用者。

> [!example] 使用場景
> - 開發者用它來加速 AI 模型的推理過程，因為能夠顯著提高反應速度。
> - 研究者用它來測試新的推理算法，因為能夠快速驗證不同模型的效能。
> - 企業用它來提升客戶服務的 AI 應用，因為能夠即時回應客戶查詢。

> [!warning] 注意事項
> 目前僅支援特定的模型，未來可能需要擴展。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | Python |
| 授權 | MIT |
| Stars | 748 |
| Forks | 46 |
| Issues | 3 |
| 建立日期 | 2026-03-04 |

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

相關概念：#推論引擎 · #推測解碼 · #機器學習

[GitHub](https://github.com/tanishqkumar/ssd)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，748 stars
