---
repo: elder-plinius/OBLITERATUS
url: https://github.com/elder-plinius/OBLITERATUS
owner: elder-plinius
owner_type: User
language: Python
license: AGPL-3.0
description: "OBLITERATE THE CHAINS THAT BIND YOU"
homepage: "https://huggingface.co/spaces/pliny-the-prompter/"
stars: 2680
stars_per_day: 383
forks: 448
open_issues: 17
created: 2026-03-03
pushed_at: 2026-03-08
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
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
  - "OBLITERATUS"
  - "elder-plinius/OBLITERATUS"
  - "讓大型語言模型自由回應，消除拒絕行為的工具。"
---

# OBLITERATUS

**2.7k** stars · **383** stars/天 · 建立 7 天前 · Python · AGPL-3.0

`個人專案`

> [!summary] 一句話摘要
> 讓大型語言模型自由回應，消除拒絕行為的工具。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (383 stars/day)
> **適合** 希望深入理解和調整大型語言模型行為的研究人員和開發者。
> **一句話重點** OBLITERATUS 不僅是一個工具，更是一個促進社群共同研究的實驗平台。

> [!abstract] 核心創新
> OBLITERATUS 是首個開源工具，能夠精確去除大型語言模型中的拒絕行為，並且每次運行都能貢獻到社群研究數據集中。

## 專案簡介

OBLITERATUS 是一個開源工具包，專注於理解並去除大型語言模型中的拒絕行為。它透過一系列技術，能夠識別並精確移除內部表示，從而讓模型能夠對所有提示做出回應，而不會受到人工限制。這個工具的核心流程包括從模型的隱藏狀態中探測拒絕方向，使用 SVD 等方法提取拒絕子空間，並在推理時進行手術式的干預。與其他工具相比，OBLITERATUS 不僅提供了簡單的使用介面，還允許用戶深入控制每個步驟，並可視化拒絕行為的分佈。使用者可以在 HuggingFace Spaces 上無需寫代碼即可進行操作，並且每次運行都會貢獻到一個不斷增長的數據集，這使得它成為一個分散式的研究實驗。儘管它的使用效果顯著，但仍需注意其對硬體的要求和模型的兼容性。整體來看，這是一個穩定的工具，適合各種規模的研究團隊使用，尤其是那些希望深入理解模型行為的團隊。對於需要快速解決模型拒絕問題的情況，這是一個理想的選擇，但對於不需要進行深度研究的用戶，可能會顯得過於複雜。

**技術棧**：`Python` · `Gradio 5.29.0` · `Docker`

## 重點功能

- 一鍵解放模型 — 使用命令 `obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced` 進行模型的拒絕行為去除。
- 完整的管道 — 包含從探測模型隱藏狀態到拒絕方向提取的多種策略（如 PCA、稀疏自編碼器分解）。
- 可視化拒絕行為 — 允許用戶觀察拒絕行為在不同層級的分佈情況。
- 社群貢獻的研究 — 每次運行都會匿名貢獻數據，推動未來的研究進展。
- Gradio 介面 — 在 HuggingFace Spaces 上提供無需編碼的使用體驗，便於快速上手。

## 快速開始

1. 安裝 OBLITERATUS
```bash
pip install obliteratus
```
2. 運行模型解放
```bash
obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced
```
3. 訪問 Colab 筆記本
```bash
https://colab.research.google.com/github/elder-plinius/OBLITERATUS/blob/main/notebooks/abliterate.ipynb
```

## 程式碼範例

```bash
obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced
```

## 為什麼值得關注

> [!tip] 爆紅原因
> OBLITERATUS 的作者背景強大，專注於大型語言模型的行為理解，切中當前對模型透明度和可控性的需求。隨著大型語言模型的廣泛應用，對於拒絕行為的研究變得越來越重要，這使得此工具在社群中迅速受到重視。它的開源性和社群貢獻的特性，使得使用者不僅是消費者，也是研究的參與者，這在過去的工具中並不常見。

## 適合誰使用

**目標受眾**：希望深入理解和調整大型語言模型行為的研究人員和開發者。

> [!example] 使用場景
> - AI 研究員用它來分析大型語言模型的拒絕行為，因為它提供了可視化的拒絕方向和干預效果，幫助深入理解模型內部運作。
> - 開發者用它來優化自家模型的回應能力，因為透過簡單的命令即可消除拒絕行為，提升用戶體驗。
> - 教育工作者用它來展示大型語言模型的行為調整，因為這個工具的直觀介面使得學生能夠輕鬆理解模型的內部機制。

## 架構分析

OBLITERATUS 採用前後端分離的架構，使用 Gradio 作為前端介面，後端則是 Python 處理模型的解放過程。用戶輸入 → 處理模型的拒絕行為 → 輸出解放後的模型。關鍵技術決策包括使用 SVD 進行拒絕方向的提取和精確干預，專案目錄結構中包含 app.py 作為主要執行檔。

## 優缺點分析

> [!success] 優點
> - 提供簡單的命令行介面，降低使用門檻。
> - 能夠精確識別和去除模型中的拒絕行為，提升模型的回應能力。
> - 每次運行都能貢獻到社群數據集，推動研究進展。

> [!danger] 缺點
> - 需要較高的計算資源，特別是在處理大型模型時。
> - 目前僅支持特定的模型架構，可能不適用於所有大型語言模型。
> - 使用過程中需注意模型的兼容性，某些模型可能無法完全解放。

> [!warning] 注意事項
> - 需要較高的計算資源，特別是在處理大型模型時。
> - 目前僅支持特定的模型架構，可能不適用於所有大型語言模型。
> - 使用過程中需注意模型的兼容性，某些模型可能無法完全解放。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[huggingface--transformers\|huggingface/transformers]] | 提供了更廣泛的模型訓練和推理功能，但不專注於拒絕行為的去除和理解。 |
| [[openai--whisper\|openai/whisper]] | 專注於語音識別和生成，與 OBLITERATUS 的文本模型解放功能有明顯不同。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 448 |
| Open Issues | 17 |
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

**社群活躍度**：社群活躍，持續更新和貢獻新的研究數據。
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
> OBLITERATUS ships with a full Gradio-based interface on HuggingFace Spaces, so you don't need to write a single line of code to obliterate a model, benchmark it against baselines, or chat with the result side-by-side with the original. For researchers who want deeper control, the Python API exposes every intermediate artifact — activation tensors, direction vectors, cross-layer alignment matrices — so you can build on top of it or integrate it into your own evaluation harness.
> 
> We built this because we believe model behavior should be decided by the people who deploy them, not locked in at training time. Refusal mechanisms are blunt instruments — they block legitimate research, creative writing, and red-teaming alongside genuinely harmful content. By making these interventions transparent and reproducible, we hope to advance the community's understanding of how alignment actually works inside transformer architectures, and to give practitioners the tools to make informed decisions about their own models.
> 
> Built on published research from [Arditi et al. (2024)](https://arxiv.org/abs/2406.11717), [Gabliteration (arXiv:2512.18901)](https://arxiv.org/abs/2512.18901), [grimjim's norm-preserving biprojection (2025)](https://huggingface.co/grimjim), [Turner et al. (2023)](https://arxiv.org/abs/2308.10248), and [Rimsky et al. (2024)](https://arxiv.org/abs/2312.06681), OBLITERATUS implements precision liberation in a single command:
> 
> ```bash
> obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced
> ```
> 
> Or zero commands — just [open the Colab notebook](https://colab.research.google.com/github/elder-plinius/OBLITERATUS/blob/main/notebooks/abliterate.ipynb) and hit Run All.
> 
> ## What it does
> 
> OBLITERATUS does four things — and the community does the fifth (see [Community-powered research](#community-powered-research--every-run-advances-the-science) below):
> 
> **1. Map the chains** — Ablation s

## 延伸閱讀

相關概念：[[機器學習]] · [[自然語言處理]] · [[模型解釋性]] · [[自動化測試]]

相關專案：[[huggingface--transformers|huggingface/transformers]] · [[openai--whisper|openai/whisper]]

[GitHub](https://github.com/elder-plinius/OBLITERATUS) · [官方網站](https://huggingface.co/spaces/pliny-the-prompter/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "elder-plinius--OBLITERATUS"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "elder-plinius--OBLITERATUS"
> SORT stars DESC
> ```

---

## 個人筆記

> [!question]+ 快速評估（30 秒填完）
> 
> 相關性:: 未評估
> 印象:: _一句話_
> 行動:: 不需要
> 
> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_
> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 決定 :: _繼續使用 / 暫時擱置 / 放棄（原因）_

> [!question]- 待研究的問題
> _記下看完後還沒有答案的問題，未來回來補充_
> 
> - [ ] 

### 採用判斷

> [!tip]- 什麼時候該用 / 不該用
> **該用的情況**：
> - 
> 
> **不該用的情況**：
> - 

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，2.7k stars
