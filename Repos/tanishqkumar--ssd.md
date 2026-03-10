---
repo: tanishqkumar/ssd
url: https://github.com/tanishqkumar/ssd
owner: tanishqkumar
owner_type: User
language: Python
license: MIT
stars: 748
forks: 46
created: 2026-03-04
first_seen: 2026-03-10
category: "AI/ML"
status: to-review
tags:
  - github
  - ai_ml
  - python
---

# ssd

> [!summary] 一句話摘要
> 支持推測性解碼的輕量推理引擎。

## 專案簡介

這是一個輕量級的推理引擎，專注於推測性解碼技術，旨在提高模型的推理效率和準確性。它解決了傳統推理引擎在處理複雜決策時的性能瓶頸問題。獨特之處在於其創新的推測性解碼方法，能夠同時考慮多種可能性。

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著AI模型的複雜性增加，對於高效推理引擎的需求也隨之上升，這個專案因此受到關注。

**748** stars · **125** stars/天 · 建立 6 天前

## 適合誰使用

**目標受眾**：適合AI研究人員和開發者。

> [!example] 使用場景
> - 在AI應用中提高推理速度。
> - 支持複雜決策的實時系統。
> - 用於學術研究中的模型性能測試。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | Python |
| 授權 | MIT |
| Stars | 748 |
| Forks | 46 |
| Issues | 3 |
| 建立日期 | 2026-03-04 |

### 主要貢獻者

| 貢獻者 | Commits |
| --- | --- |
| [@tanishqkumar](https://github.com/tanishqkumar) | 16 |

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
> - PagedAttention, CUDAgraphs, torch compilation, pr

## 相關概念

[[推理引擎]] · [[推測性解碼]] · [[機器學習]]

---

> [!question] 個人筆記
> _在此寫下你的想法、使用心得..._

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，748 stars
