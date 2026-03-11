---
repo: elder-plinius/OBLITERATUS
url: https://github.com/elder-plinius/OBLITERATUS
owner: elder-plinius
owner_type: User
language: Python
license: AGPL-3.0
description: "OBLITERATE THE CHAINS THAT BIND YOU"
homepage: "https://huggingface.co/spaces/pliny-the-prompter/"
stars: 2683
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
use_case: "讓大型語言模型自由回應，消除拒絕行為的開源工具。"
priority: medium
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
aliases:
  - "OBLITERATUS"
  - "elder-plinius/OBLITERATUS"
  - "讓大型語言模型自由回應，消除拒絕行為的開源工具。"
---

# OBLITERATUS

**2.7k** stars · **383** stars/天 · 建立 7 天前 · Python · AGPL-3.0

`個人專案`

> [!summary] 一句話摘要
> 讓大型語言模型自由回應，消除拒絕行為的開源工具。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (383 stars/day)
> **適合** 希望深入理解和調整大型語言模型行為的研究人員和開發者。
> **一句話重點** OBLITERATUS 不僅是一個工具，而是一個促進社群合作的研究平台。

> [!abstract] 核心創新
> OBLITERATUS 提供了一種無需重新訓練即可精確移除大型語言模型拒絕行為的技術。

## 專案簡介

OBLITERATUS 是一個開源工具，專注於理解和移除大型語言模型中的拒絕行為。它透過一系列稱為 abliteration 的技術，識別並手術性地移除內部表示，讓模型能夠對所有提示作出回應，而不會受到人工限制。這個工具的核心流程包括從模型的隱藏狀態探測拒絕方向，使用主成分分析（PCA）、稀疏自編碼器分解等方法提取拒絕方向，並在推理時進行干預。與其他工具相比，OBLITERATUS 提供了完整的管道，並且每次運行都能貢獻匿名基準數據，推動社群的研究進展。使用者可以在 HuggingFace Spaces 上無需編寫代碼即可使用 Gradio 界面進行模型解放和基準測試。這個工具適合需要深入控制的研究者，因為它的 Python API 提供了所有中間產物的訪問權限。整體來說，這是一個穩定的工具，適合對大型語言模型行為有深入需求的團隊。

**技術棧**：`Python` · `Gradio 5.29.0` · `Docker`

## 重點功能

- 一鍵解放模型 — 使用指令 `obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced` 進行模型解放。
- 完整的管道 — 包括探測、提取拒絕方向、手術性移除等六個階段，確保模型能力不受損。
- 社群驅動的研究 — 每次運行都能貢獻數據，推動下一代研究進展。
- Gradio 界面 — 無需編碼即可使用，適合不熟悉程式的使用者。
- Python API — 提供對所有中間產物的訪問，適合需要更高控制的研究者。

## 快速開始

1. 安裝 OBLITERATUS
```bash
pip install obliteratus
```
2. 運行模型解放
```bash
obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced
```
3. 訪問 Gradio 界面
```bash
打開 HuggingFace Spaces 進行操作
```

## 程式碼範例

```bash
obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced
```

## 為什麼值得關注

> [!tip] 爆紅原因
> OBLITERATUS 的作者背景強調開放科學和社群合作，這正好切中當前對於大型語言模型透明度和可控性的需求。隨著對 AI 模型行為的關注增加，這個專案提供了一個實用的解決方案，讓使用者能夠直接參與研究。這樣的工具在近年來逐漸受到重視，尤其是在 AI 研究和開發的快速變化中。

## 適合誰使用

**目標受眾**：希望深入理解和調整大型語言模型行為的研究人員和開發者。

> [!example] 使用場景
> - AI 研究員用它來分析大型語言模型的拒絕行為，因為它能夠精確地定位和移除這些行為，從而提升模型的回應能力。
> - 開發者用它來調整商業應用中的對話模型，因為這樣可以避免模型在合法請求上出現拒絕，提升用戶體驗。
> - 教育工作者用它來探索語言模型的內部運作，因為它提供了可視化和數據分析的工具，幫助理解模型的決策過程。

## 架構分析

OBLITERATUS 採用微服務架構，核心資料流為用戶輸入 → 模型探測 → 拒絕方向提取 → 手術性移除 → 輸出解放後模型。關鍵技術決策包括使用 SVD 進行拒絕方向的提取，並在 HuggingFace Spaces 上提供 Gradio 界面以簡化使用。專案目錄結構包含 app.py 和 notebooks 以支持不同的使用場景。

## 技術深入分析

> [!note]- 展開深入分析
> OBLITERATUS 的核心算法基於 abliteration 技術，透過 SVD 提取拒絕方向並進行手術性移除。效能特性上，它能夠在無需重訓的情況下，保持模型的語言能力，並且每次運行都能提供新的數據以支持未來的研究。關鍵設計取捨在於如何平衡模型的合規性與一致性，並在不損害模型能力的前提下進行干預。與其他工具相比，OBLITERATUS 的技術決策更強調透明度和可重複性，這使得使用者能夠更深入地理解模型的內部運作。

## 優缺點分析

> [!success] 優點
> - 提供透明的模型行為調整工具，促進開放科學。
> - 無需編碼即可使用，降低使用門檻。
> - 社群貢獻數據，推動研究進展。

> [!danger] 缺點
> - 對於某些模型的支援有限，無法廣泛應用。
> - 運行大型模型時可能需要較高的計算資源。
> - 使用過程中可能需要穩定的網路連接。

> [!warning] 注意事項
> - 需要穩定的網路連接以訪問 HuggingFace Spaces。
> - 不支援對所有模型的解放，僅限於特定架構。
> - 對於大型模型，運行時間可能較長，需耐心等待。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[huggingface--transformers\|huggingface/transformers]] | 提供更廣泛的模型訓練和推理功能，但不專注於拒絕行為的移除。 |
| [[openai--gpt-3\|openai/gpt-3]] | 雖然提供強大的語言生成能力，但缺乏對模型內部行為的透明控制。 |

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

**社群活躍度**：社群活躍，持續更新與討論。
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

相關概念：[[機器學習]] · [[自然語言處理]] · [[模型解釋性]] · [[開放科學]]

相關專案：[[huggingface--transformers|huggingface/transformers]] · [[openai--gpt-3|openai/gpt-3]]

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
