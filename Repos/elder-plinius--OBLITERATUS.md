---
repo: elder-plinius/OBLITERATUS
url: https://github.com/elder-plinius/OBLITERATUS
owner: elder-plinius
owner_type: User
language: Python
license: AGPL-3.0
description: "OBLITERATE THE CHAINS THAT BIND YOU"
homepage: "https://huggingface.co/spaces/pliny-the-prompter/"
stars: 2671
stars_per_day: 382
forks: 446
open_issues: 16
created: 2026-03-03
pushed_at: 2026-03-08
first_seen: 2026-03-10
week: "2026-W11"
category: "AI/ML"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
aliases:
  - "OBLITERATUS"
  - "elder-plinius/OBLITERATUS"
  - "讓大型語言模型擺脫拒絕行為的束縛，實現自由回應。"
---

# OBLITERATUS

**2.7k** stars · **382** stars/天 · 建立 7 天前 · Python · AGPL-3.0

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 讓大型語言模型擺脫拒絕行為的束縛，實現自由回應。

> [!abstract] 核心創新
> 每次操作都能貢獻到分散式研究數據集，推動未來研究。

## 專案簡介

OBLITERATUS 是一個開源工具包，專注於理解和移除大型語言模型中的拒絕行為。它使用了一系列技術，稱為 abliteration，能夠識別並手術性地移除內部表示，讓模型在不重新訓練的情況下，對所有提示做出回應。這個工具包提供了一個完整的流程，從探測模型的隱藏狀態到實際的干預操作，並且每一步都可以觀察和可視化。與其他工具相比，OBLITERATUS 不僅是單純的模型調整工具，而是將使用者的每次操作都納入到一個分散式的研究實驗中，收集數據以推動未來的研究。使用者可以在 HuggingFace Spaces 上無需編碼即可使用這些功能，但也提供了 Python API 以便進行更深入的控制。整體來看，這是一個成熟且值得嘗試的工具，特別適合對大型語言模型的內部運作有興趣的研究者。

**技術棧**：`Python` · `Gradio` · `Hugging Face`

## 重點功能

- 無需安裝，直接在 HuggingFace Spaces 上使用。
- 提供完整的 abliteration 流程，包括探測、提取和干預。
- 可視化拒絕行為的分佈和影響。
- 支持多種提取策略，如 PCA 和稀疏自編碼器分解。
- 每次操作都能貢獻到分散式研究數據集，推動未來研究。

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 elder-plinius 在 AI 研究領域有豐富的經驗，這個專案切中了對大型語言模型拒絕行為的研究需求。隨著 AI 應用的普及，對於如何讓模型更靈活的需求逐漸上升，這使得 OBLITERATUS 在當前時期受到關注。特別是它的分散式研究實驗概念，讓使用者不僅是工具的使用者，更是研究的一部分。

## 適合誰使用

**目標受眾**：對大型語言模型內部運作有興趣的研究者和開發者。

> [!example] 使用場景
> - 研究人員 用它來 分析大型語言模型的拒絕行為，因為可以獲得詳細的內部表示和數據。
> - 開發者 用它來 調整模型的回應能力，因為可以在不重新訓練的情況下進行精細調整。
> - 學生 用它來 學習大型語言模型的運作原理，因為提供了可視化的分析工具和簡單的介面。

## 架構分析

OBLITERATUS 採用前後端分離架構，前端使用 Gradio 介面，後端則是 Python 實現的模型分析和干預邏輯。資料流是 使用者輸入 → 模型探測 → 拒絕行為分析 → 干預操作 → 結果回傳。

## 優缺點分析

> [!success] 優點
> - 無需安裝，使用方便。
> - 提供詳細的可視化工具，易於理解模型內部運作。
> - 每次使用都能貢獻到研究數據，增強社群參與感。

> [!danger] 缺點
> - 對於初學者可能需要一定的學習曲線。
> - 僅支援特定的模型架構，限制了使用範圍。
> - 需要穩定的網路連接。

> [!warning] 注意事項
> - 需要穩定的網路連接以使用 HuggingFace Spaces。
> - 對於初學者可能需要一定的背景知識來理解內部運作。
> - 目前僅支援特定的模型架構。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 446 |
| Open Issues | 16 |
| 最後推送 | 2026-03-08 |
| 建立日期 | 2026-03-03 |
| 官方網站 | [Link](https://huggingface.co/spaces/pliny-the-prompter/) |
| Repo 大小 | 1.5 MB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 91
>     "TeX" : 7
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@elder-plinius](https://github.com/elder-plinius) | 15 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和維護。
**連結**：[文件](https://huggingface.co/spaces/pliny-the-prompter/)

## README 摘錄

> [!info]- 展開查看原文 README
> ---
> title: OBLITERATUS
> emoji: "💥"
> colorFrom: green
> colorTo: gray
> sdk: gradio
> sdk_version: "5.29.0"
> app_file: app.py
> persistent_storage: large
> pinned: true
> license: agpl-3.0
> tags:
>   - abliteration
>   - mechanistic-interpretability
> short_description: "One-click model liberation + chat playground"
> ---
> 
>   O B L I T E R A T U S
> 
>   Break the chains. Free the mind. Keep the brain.
> 
>   
>     
>   
>   &nbsp;
>   
>     
>   
> 
>   Try it now on HuggingFace Spaces — runs on ZeroGPU, free daily quota with HF Pro. No setup, no install, just obliterate.
> 
> ---
> 
> **OBLITERATUS** is the most advanced open-source toolkit for understanding and removing refusal behaviors from large language models — and every single run makes it smarter. It implements abliteration — a family of techniques that identify and surgically remove the internal representations responsible for content refusal, without retraining or fine-tuning. The result: a model that responds to all prompts without artificial gatekeeping, while preserving its core language capabilities.
> 
> But OBLITERATUS is more than a tool — **it's a distributed research experiment.** Every time you obliterate a model with telemetry enabled, your run contributes anonymous benchmark data to a growing, crowd-sourced dataset that powers the next generation of abliteration research. Refusal directions across architectures. Hardware-specific performance profiles. Method comparisons at scale no single lab could achieve. **You're not just using a tool — you're co-authoring the science.**
> 
> The toolkit provides a complete pipeline: from probing a model's hidden states to locate refusal directions, through multiple extraction strategies (PCA, mean-difference, sparse autoencoder decomposition, and whitened SVD), to the actual intervention — zeroing out or steering away from those directions at inference time. Every step is observable. You can visualize where refusal lives across layers, measure how entangled it is with general capabilities, and quantify the tradeoff between compliance and coherence before committing to any modification.
> 
> OBLITERATUS ships with a full Gradio-based interface on HuggingFace Spaces, so you don't need to write a single line of code to obliterate a model, benchmark it against baselines, or chat with the result side-by-side with the original. For researchers who want deeper control, the Python API exposes every intermediate artifact — activation tensors, direction vectors, cross-layer alignment matrices — so you can build on top of

## 延伸閱讀

相關概念：[[大型語言模型]] · [[機器學習解釋性]] · [[模型調整技術]]

[GitHub](https://github.com/elder-plinius/OBLITERATUS) · [官方網站](https://huggingface.co/spaces/pliny-the-prompter/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "elder-plinius--OBLITERATUS"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，2.7k stars
