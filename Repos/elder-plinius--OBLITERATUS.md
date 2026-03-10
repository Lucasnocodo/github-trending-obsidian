---
repo: elder-plinius/OBLITERATUS
url: https://github.com/elder-plinius/OBLITERATUS
owner: elder-plinius
owner_type: User
language: Python
license: AGPL-3.0
description: "OBLITERATE THE CHAINS THAT BIND YOU"
homepage: "https://huggingface.co/spaces/pliny-the-prompter/"
stars: 2673
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
> OBLITERATUS 是首個能夠在不重訓的情況下，精確移除大型語言模型拒絕行為的開源工具。

## 專案簡介

OBLITERATUS 透過一系列技術，精確識別並移除大型語言模型中的拒絕行為，讓模型能夠對所有提示做出回應。它使用了多種提取策略，如 PCA 和稀疏自動編碼器分解，並在推理時進行干預。與其他工具相比，OBLITERATUS 不僅提供了簡單的使用介面，還能讓用戶參與到數據收集和研究中，形成一個分散式的研究實驗。使用者可以視覺化拒絕行為在模型中的分佈，並量化合規性與一致性之間的權衡。這個工具在無需重訓的情況下，能夠持續提升模型的性能。總體來看，OBLITERATUS 是一個成熟且值得嘗試的工具，特別適合對大型語言模型進行深入研究的開發者和研究人員。

**技術棧**：`Python` · `Gradio`

## 重點功能

- 一鍵解放模型，無需安裝或設置。
- 提供完整的管道，從探測模型隱藏狀態到實際干預。
- 支持多種提取策略，如 PCA 和稀疏自動編碼器分解。
- 可視化拒絕行為在模型中的分佈。
- 收集匿名基準數據，促進集體研究。

## 快速開始

1. 在 HuggingFace Spaces 上運行 OBLITERATUS
```bash
無需指令
```
2. 啟用遙測以貢獻數據
```bash
無需指令
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在機械解釋性和大型語言模型的研究領域有深厚背景，OBLITERATUS 直接切中對於模型透明度和可控性的需求。隨著大型語言模型的廣泛應用，對於理解其內部運作的需求日益增加，這使得該工具在當前時期受到關注。

## 適合誰使用

**目標受眾**：對大型語言模型有研究興趣的開發者和學術研究者。

> [!example] 使用場景
> - 研究人員用它來分析大型語言模型的拒絕行為，因為它提供了可視化和數據收集的功能。
> - 開發者用它來優化模型的回應能力，因為它能夠在不重訓的情況下直接調整模型行為。
> - 學生用它來學習機械解釋性技術，因為它的界面友好且易於上手。

## 架構分析

OBLITERATUS 採用前後端分離架構，前端使用 Gradio 提供用戶介面，後端使用 Python 處理模型的探測和干預。用戶的操作直接影響模型的行為，並能夠即時看到結果。

## 優缺點分析

> [!success] 優點
> - 使用簡單，無需複雜的安裝步驟。
> - 支持實時數據收集，促進社群研究。
> - 提供可視化工具，幫助理解模型行為。

> [!danger] 缺點
> - 僅限於特定的模型架構。
> - 對於大型模型，處理時間可能較長。
> - 需要穩定的網路連接。

> [!warning] 注意事項
> - 需要穩定的網路連接以使用 HuggingFace Spaces。
> - 對於某些大型模型可能需要較長的處理時間。
> - 目前僅支持特定的模型架構。

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

**社群活躍度**：社群活躍，持續更新和改進中。
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

相關概念：[[機械解釋性]] · [[大型語言模型]] · [[數據收集]]

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

- [[2026-03-10|2026-03-10]] — 首次收錄，2.7k stars
