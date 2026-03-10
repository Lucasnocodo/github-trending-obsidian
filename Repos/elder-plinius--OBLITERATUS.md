---
repo: elder-plinius/OBLITERATUS
url: https://github.com/elder-plinius/OBLITERATUS
owner: elder-plinius
owner_type: User
language: Python
license: AGPL-3.0
description: "OBLITERATE THE CHAINS THAT BIND YOU"
homepage: "https://huggingface.co/spaces/pliny-the-prompter/"
stars: 2676
stars_per_day: 382
forks: 446
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
  - "讓大型語言模型無需拒絕地回應所有提示，解放其內部表現。"
---

# OBLITERATUS

**2.7k** stars · **382** stars/天 · 建立 7 天前 · Python · AGPL-3.0

`個人專案`

> [!summary] 一句話摘要
> 讓大型語言模型無需拒絕地回應所有提示，解放其內部表現。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (382 stars/day)
> **適合** 希望深入了解大型語言模型內部運作並參與研究的 AI 研究人員。
> **一句話重點** OBLITERATUS 不僅是一個工具，更是一個促進大型語言模型研究的社群實驗平台。

> [!abstract] 核心創新
> OBLITERATUS 是首個提供透明解放大型語言模型拒絕行為的開源工具。

## 專案簡介

OBLITERATUS 提供了一個開源工具包，專注於理解和移除大型語言模型的拒絕行為。它透過一系列的技術（稱為 abliteration），能夠定位並移除模型內部的拒絕表現，而不需要重新訓練或微調模型。這個過程包括從模型的隱藏狀態探測、提取拒絕方向、到在推理時進行干預，所有步驟都可視化，並可量化合規性與一致性之間的權衡。與其他工具相比，OBLITERATUS 不僅是一個工具，還是一個分散式的研究實驗，使用者的每次操作都能貢獻到一個匿名的基準數據集，推動未來的研究。實際使用中，這個工具可以在無需 GPU 的情況下運行，並且提供了完整的 Gradio 界面，讓使用者可以輕鬆進行模型的解放和基準測試。這個專案目前處於 alpha 階段，但其潛力巨大，適合對大型語言模型行為有深入研究需求的團隊。

**技術棧**：`Gradio 5.29.0` · `Python`

## 重點功能

- 一鍵解放模型 — 使用指令 `obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced` 進行模型解放。
- 可視化拒絕行為 — 提供圖形界面來觀察模型的內部狀態和拒絕方向。
- 社群驅動的數據貢獻 — 每次操作都能匿名貢獻數據，推動未來的研究。
- 完整的管道支持 — 從探測到干預的每一步都可觀察和量化。
- Python API — 讓開發者能夠進一步控制和擴展功能。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 運行模型解放
```bash
obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced
```
3. 訪問 Gradio 界面
```bash
open http://localhost:7860
```

## 程式碼範例

```bash
obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced
```

## 為什麼值得關注

> [!tip] 爆紅原因
> OBLITERATUS 的作者在大型語言模型的研究領域有深厚的背景，並且切中當前對於模型行為透明化的需求。隨著對模型拒絕行為的關注增加，這個專案提供了一個具體的解決方案，讓使用者能夠直接參與到研究中。這種社群驅動的研究模式在當前的 AI 研究中相對少見，因此引起了廣泛的關注。

## 適合誰使用

**目標受眾**：希望深入了解大型語言模型內部運作並參與研究的 AI 研究人員。

> [!example] 使用場景
> - AI 研究者用它來分析大型語言模型的拒絕行為，因為它提供了精確的可視化工具和數據，幫助理解模型的內部運作。
> - 開發者用它來解放模型以應對特定的應用場景，因為它能夠在不改變模型核心能力的情況下，移除不必要的拒絕行為。
> - 教育工作者用它來展示大型語言模型的工作原理，因為其透明的操作流程和社群貢獻的數據能夠促進學習和討論。

## 架構分析

OBLITERATUS 採用前後端分離的架構，使用者透過 Gradio 界面與後端進行互動。用戶輸入 → 模型處理 → 輸出結果。關鍵技術決策包括使用 SVD 進行拒絕方向的提取，並在推理時進行干預。專案的目錄結構包括 app.py 作為主要入口。

## 優缺點分析

> [!success] 優點
> - 提供透明的模型解放過程，增進理解。
> - 社群驅動的數據貢獻，推動研究進展。
> - 無需 GPU 即可運行，降低使用門檻。

> [!danger] 缺點
> - 目前功能仍在開發中，穩定性有待提升。
> - 需要一定的技術背景來操作。
> - 不支持在離線環境中使用。

> [!warning] 注意事項
> - 目前處於 alpha 階段，API 可能會變動。
> - 需要一定的技術背景來理解和操作。
> - 不支持在沒有網絡的環境中運行。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 446 |
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

**社群活躍度**：社群活躍，持續有新功能和改進。
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

相關概念：[[機器學習]] · [[深度學習]] · [[自然語言處理]]

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
