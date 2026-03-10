---
repo: elder-plinius/OBLITERATUS
url: https://github.com/elder-plinius/OBLITERATUS
owner: elder-plinius
owner_type: User
language: Python
license: AGPL-3.0
description: "OBLITERATE THE CHAINS THAT BIND YOU"
homepage: "https://huggingface.co/spaces/pliny-the-prompter/"
stars: 2670
stars_per_day: 445
forks: 444
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
  - ai_ml
  - python
aliases:
  - "OBLITERATUS"
  - "elder-plinius/OBLITERATUS"
  - "讓大型語言模型自由回應所有提示，無需重新訓練。"
---

# OBLITERATUS

**2.7k** stars · **445** stars/天 · 建立 6 天前 · Python · AGPL-3.0

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 讓大型語言模型自由回應所有提示，無需重新訓練。

> [!abstract] 核心創新
> OBLITERATUS 是一個開源工具，能夠在不重訓練的情況下識別並移除大型語言模型中的拒絕行為。

## 專案簡介

OBLITERATUS 透過一系列技術來識別並移除大型語言模型中的拒絕行為，讓模型能夠自由回應所有提示。它使用了多種提取策略，如主成分分析（PCA）和稀疏自動編碼器，來定位拒絕方向並在推理時進行干預。與其他工具相比，OBLITERATUS 不僅提供了可視化的操作介面，還能收集用戶的匿名基準數據，促進未來的研究。使用者可以觀察模型的內部狀態，量化合規性與一致性之間的權衡。這個工具的效果在於能夠在不影響模型核心能力的情況下，消除不必要的內容拒絕。整體來看，OBLITERATUS 是一個成熟且值得嘗試的研究工具，特別適合對大型語言模型進行深入分析的研究者。

**技術棧**：`Gradio` · `Python`

## 重點功能

- 提供一鍵式模型解放和聊天遊樂場。
- 實現拒絕行為的識別和移除。
- 支援多種提取策略，如 PCA 和稀疏自動編碼器。
- 可視化模型的內部狀態和拒絕方向。
- 收集用戶的匿名基準數據以促進研究。

## 快速開始

1. 在 HuggingFace Spaces 上運行 OBLITERATUS
```bash
無需指令
```
2. 選擇要解放的模型
```bash
無需指令
```
3. 開始互動並觀察結果
```bash
無需指令
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者背景強大，專注於大型語言模型的可解釋性和拒絕行為的研究，切中當前對模型透明度的需求。隨著 AI 應用的普及，對於如何讓模型更自由回應的需求日益增加，這使得 OBLITERATUS 成為熱門選擇。最近的技術進步也使得這類工具的開發變得更加可行。

## 適合誰使用

**目標受眾**：對大型語言模型進行研究和開發的學術界和業界專業人士。

> [!example] 使用場景
> - 研究者 用它來 分析大型語言模型的拒絕行為，因為它提供了強大的可視化和數據收集功能。
> - 開發者 用它來 改進自家模型的回應能力，因為它能在不重訓練的情況下進行調整。
> - 學生 用它來 學習大型語言模型的內部運作，因為它的介面友好且易於上手。

## 架構分析

OBLITERATUS 使用 Gradio 提供的介面，讓用戶可以輕鬆互動並觀察模型的行為。數據流是 用戶輸入 → 模型解放 → 結果可視化。

## 優缺點分析

> [!success] 優點
> - 無需重訓練即可調整模型行為。
> - 提供可視化工具，易於理解模型內部運作。
> - 支持用戶貢獻數據以促進研究。

> [!danger] 缺點
> - 可能無法完全消除所有拒絕行為。
> - 需要穩定的網路連接。
> - 對於新手使用者，理解結果可能有一定難度。

> [!warning] 注意事項
> - 需要穩定的網路連接以使用 HuggingFace Spaces。
> - 對於某些模型，可能無法完全消除所有拒絕行為。
> - 使用過程中可能需要一定的技術背景以理解結果。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 444 |
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

**社群活躍度**：社群活躍，持續更新和改進。
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

相關概念：[[大型語言模型]] · [[可解釋性]] · [[拒絕行為]]

[GitHub](https://github.com/elder-plinius/OBLITERATUS) · [官方網站](https://huggingface.co/spaces/pliny-the-prompter/)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，2.7k stars
