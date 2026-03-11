---
repo: elder-plinius/OBLITERATUS
url: https://github.com/elder-plinius/OBLITERATUS
owner: elder-plinius
owner_type: User
language: Python
license: AGPL-3.0
description: "OBLITERATE THE CHAINS THAT BIND YOU"
homepage: "https://huggingface.co/spaces/pliny-the-prompter/"
stars: 2690
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
use_case: "讓大型語言模型自由回應，消除拒絕行為的工具。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
aliases:
  - "OBLITERATUS"
  - "elder-plinius/OBLITERATUS"
  - "讓大型語言模型自由回應，消除拒絕行為的工具。"
---

# OBLITERATUS

**2.7k** stars · **384** stars/天 · 建立 7 天前 · Python · AGPL-3.0

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 讓大型語言模型自由回應，消除拒絕行為的工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (384 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意)
> **適合** 需要深入理解和調整大型語言模型行為的研究團隊和開發者。
> **一句話重點** OBLITERATUS 不僅是一個工具，更是一個推動模型行為研究的實驗平台。

> [!abstract] 核心創新
> OBLITERATUS 提供了一種無需重新訓練即可精確移除模型拒絕行為的技術。

## 專案簡介

OBLITERATUS 是一個開源工具，旨在理解並移除大型語言模型的拒絕行為。它使用 abliteration 技術，透過探測模型的隱藏狀態，識別並移除造成拒絕的內部表示，而無需重新訓練或微調。這個工具提供了完整的管道，從探測到提取，再到實際的介入，每一步都可以觀察和可視化。與其他工具相比，OBLITERATUS 不僅提供了簡單的界面，還允許研究人員深入控制，並能夠生成中間結果以進行進一步分析。使用者可以在 HuggingFace Spaces 上無需編寫代碼即可進行模型的解放和基準測試。這個工具的效果在於能夠保留模型的核心語言能力，同時消除不必要的拒絕，對於研究和創作都十分有用。成熟度方面，OBLITERATUS 仍在持續發展中，適合對模型行為有深入需求的研究團隊。建議在需要消除模型拒絕行為時使用，但對於一般使用者可能過於複雜。

**技術棧**：`Python` · `Gradio 5.29.0` · `Docker`

## 重點功能

- 一鍵解放模型 — 使用 `obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced` 指令進行模型解放。
- 可視化拒絕行為 — 透過 Gradio 界面觀察模型的拒絕行為和能力。
- 多種提取策略 — 支持 PCA、稀疏自編碼器分解等方法提取拒絕方向。
- 社群驅動的研究 — 每次使用都會貢獻到匿名基準數據集，推動研究進展。
- 完整的 Python API — 允許用戶在更高層次上控制和分析模型的內部狀態。

## 快速開始

1. 安裝 OBLITERATUS
```bash
pip install obliteratus
```
2. 解放模型
```bash
obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced
```
3. 訪問 HuggingFace Spaces
```bash
打開 https://huggingface.co/spaces/pliny-the-prompter/ 進行實驗
```

## 程式碼範例

```bash
obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 elder-plinius 以開源項目聞名，這個工具解決了大型語言模型在實際應用中常見的拒絕行為問題，這在過去缺乏有效的解決方案。最近的研究成果和社群的關注使得這個工具的需求上升，並且其簡單的使用方式吸引了許多開發者。技術生態的變化，如 HuggingFace 的普及，也讓這類工具的使用變得更加可行。

## 適合誰使用

**目標受眾**：需要深入理解和調整大型語言模型行為的研究團隊和開發者。

> [!example] 使用場景
> - AI 研究員用它來分析大型語言模型的拒絕行為，因為這樣可以更好地理解模型的內部運作和改進其性能。
> - 開發者用它來優化自己部署的語言模型，因為消除拒絕行為能夠提升用戶體驗和滿意度。
> - 教育工作者用它來創建更靈活的教學工具，因為能夠控制模型的回應行為有助於適應不同的教學需求。

## 架構分析

OBLITERATUS 採用單體架構，核心資料流為：用戶輸入 → 模型探測 → 拒絕行為提取 → 介入 → 輸出結果。關鍵技術決策包括使用 SVD 進行拒絕方向提取，並透過 Gradio 提供用戶友好的界面。專案目錄結構中，`app.py` 是主要的應用文件，負責處理用戶請求和模型操作。

## 技術深入分析

> [!note]- 展開深入分析
> OBLITERATUS 的核心演算法基於 SVD 分解，能夠精確識別並移除模型的拒絕方向。效能特性方面，使用者可以在無需 GPU 的環境下進行操作，這對於資源有限的研究者來說非常友好。設計上，OBLITERATUS 旨在提供透明和可重複的介入過程，這在當前的 AI 研究中是相對少見的。與其他工具相比，OBLITERATUS 更加注重社群參與和數據共享，這使得其在研究和實踐中具有更大的價值。

## 優缺點分析

> [!success] 優點
> - 無需重新訓練即可移除拒絕行為，節省時間和資源。
> - 社群驅動的研究增強了工具的實用性和可靠性。
> - 提供完整的可視化和分析工具，方便用戶理解模型行為。

> [!danger] 缺點
> - 對於新手來說，使用和理解過程可能較為複雜。
> - 目前僅支持特定的模型架構，限制了應用範圍。
> - 需要穩定的網路連接以使用 HuggingFace Spaces。

> [!warning] 注意事項
> - 需要穩定的網路連接以使用 HuggingFace Spaces。
> - 目前僅支持特定的模型架構，對於其他架構的支持可能有限。
> - 對於初學者來說，理解其內部運作可能需要額外的學習曲線。

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

**社群活躍度**：社群活躍，持續有新用戶和研究者參與。
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
