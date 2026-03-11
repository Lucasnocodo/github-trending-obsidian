---
repo: elder-plinius/OBLITERATUS
url: https://github.com/elder-plinius/OBLITERATUS
owner: elder-plinius
owner_type: User
language: Python
license: AGPL-3.0
description: "OBLITERATE THE CHAINS THAT BIND YOU"
homepage: "https://huggingface.co/spaces/pliny-the-prompter/"
stars: 2691
stars_per_day: 384
forks: 449
open_issues: 17
created: 2026-03-03
pushed_at: 2026-03-08
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "模型調整"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓大型語言模型擺脫拒絕行為的束縛，實現自由對話。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-13"
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
aliases:
  - "OBLITERATUS"
  - "elder-plinius/OBLITERATUS"
  - "讓大型語言模型擺脫拒絕行為的束縛，實現自由對話。"
---

# OBLITERATUS

**2.7k** stars · **384** stars/天 · 建立 7 天前 · Python · AGPL-3.0

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 讓大型語言模型擺脫拒絕行為的束縛，實現自由對話。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (384 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險)
> **適合** 需要對大型語言模型進行深入分析和調整的 AI 研究者和開發者。
> **一句話重點** OBLITERATUS 不僅是一個工具，更是一個促進 AI 研究的社群實驗平台。

> [!abstract] 核心創新
> OBLITERATUS 提供了一個透明且可重複的過程來移除大型語言模型中的拒絕行為，並且每次使用都能貢獻於社群的研究。

## 專案簡介

OBLITERATUS 是一個開源工具，旨在理解和移除大型語言模型中的拒絕行為。它的核心流程是：用戶輸入模型名稱 → 工具探測模型的隱藏狀態，定位拒絕方向 → 使用 SVD 等技術移除這些拒絕方向，最終輸出一個能夠自由回應的模型。這個工具不僅提供了完整的工作流程，還允許用戶可視化拒絕行為在模型中的分佈，並量化合規性與一致性之間的權衡。OBLITERATUS 的技術實作基於多篇研究，並使用 Gradio 提供的界面，讓用戶無需編寫代碼即可進行模型的解放和基準測試。與其他工具相比，OBLITERATUS 不僅僅是移除拒絕行為，而是提供了一個可觀察的過程，讓用戶能夠深入理解模型的內部運作。這使得它在精確度和透明度上優於傳統的模型調整方法。它能處理的模型規模可達數十億參數，並且不需要高端硬體，普通用戶也能輕鬆使用。這個專案目前處於 beta 階段，適合對模型行為有深入需求的研究者和開發者。建議在需要進行模型行為調整或研究時使用，對於一般應用場景則可能過於複雜。

**技術棧**：`Python` · `Gradio 5.29.0` · `TeX`

## 重點功能

- 一鍵解放模型 — 使用指令 `obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced` 進行模型解放。
- 可視化拒絕行為 — 透過 Gradio 界面觀察模型的拒絕行為分佈。
- 多種提取策略 — 支持 PCA、稀疏自編碼器分解和白化 SVD 等技術。
- 分析模組 — 提供 15 種深度分析模組，幫助用戶理解拒絕行為的幾何結構。
- 社群驅動的研究 — 每次使用都能貢獻匿名基準數據，推動未來的研究。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 啟動 Gradio 應用
```bash
python app.py
```
3. 在 Hugging Face Spaces 上直接使用

## 程式碼範例

```bash
obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 elder-plinius 在開源社群中活躍，曾參與多個知名專案。OBLITERATUS 解決了大型語言模型中拒絕行為的問題，這在以往的工具中並未得到有效解決。最近在 Hugging Face Spaces 上的展示引起了廣泛關注，許多研究者對其潛在的應用前景表示興趣。隨著對模型透明度和可控性的需求增加，這個工具的出現正好符合了當前的技術趨勢。

## 適合誰使用

**目標受眾**：需要對大型語言模型進行深入分析和調整的 AI 研究者和開發者。

> [!example] 使用場景
> - AI 研究者用它來分析大型語言模型的拒絕行為，因為這可以幫助他們理解模型的內部運作並進行改進。
> - 開發者用它來調整商業模型的回應行為，因為這樣可以提升用戶體驗，讓模型更符合實際需求。
> - 教育工作者用它來展示模型的運作原理，因為這有助於學生理解 AI 的限制和潛力。

## 架構分析

OBLITERATUS 採用前後端分離的架構，核心資料流為：用戶輸入模型名稱 → 工具探測模型隱藏狀態 → 移除拒絕行為 → 輸出解放後的模型。關鍵技術決策包括使用 Gradio 提供用戶界面，並透過 SVD 等技術進行拒絕行為的提取和移除。專案目錄結構中，`app.py` 是主要的應用入口，`notebooks` 目錄下包含了示範用的 Jupyter Notebook。

## 技術深入分析

OBLITERATUS 的核心技術機制在於其 abliteration 方法，通過 SVD 等技術精確地定位和移除模型中的拒絕行為。這使得模型在保持語言能力的同時，能夠自由回應各種提示。它的設計考慮了模型的幾何結構，能夠分析拒絕機制的多樣性及其與模型能力的關聯。這樣的設計選擇使得 OBLITERATUS 能夠在不損失模型性能的情況下，進行精確的行為調整。隨著使用者的增多，社群貢獻的數據將進一步提升工具的效能和準確性。未來可能面臨的挑戰包括如何擴展至更多模型，以及在大規模使用時的性能瓶頸。安全性方面，需確保移除拒絕行為不會引入新的風險或不當內容。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的使用說明和範例。安裝過程相對順暢，但對於新手可能需要一些時間來理解。文件目前僅提供英文版本，缺乏多語言支持，可能對非英語使用者造成障礙。

## 優缺點分析

> [!success] 優點
> - 提供透明的模型解放過程，讓用戶能夠理解每一步的影響。
> - 社群驅動的研究模式，促進了模型行為的深入分析。
> - 無需高端硬體即可運行，降低了使用門檻。

> [!danger] 缺點
> - 對於新手來說，理解和使用過程可能較為複雜。
> - 目前僅支援特定模型，限制了應用範圍。
> - 需要穩定的網路連接以使用 Hugging Face Spaces。

> [!warning] 注意事項
> - 目前僅支援特定大型語言模型。
> - 需要穩定的網路連接以使用 Hugging Face Spaces。
> - 對於模型的解放過程，使用者需具備一定的 AI 知識。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 449 |
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

**社群活躍度**：社群活躍，持續有新用戶加入並分享使用經驗。
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

相關概念：[[機器學習]] · [[自然語言處理]] · [[模型調整]]

相關專案：[[huggingface--transformers|huggingface/transformers]] · [[openai--gpt-3|openai/gpt-3]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]] · [[helenigtxu--TradingView-Claw|helenigtxu/TradingView-Claw]]

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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，2.7k stars
