---
repo: elder-plinius/OBLITERATUS
url: https://github.com/elder-plinius/OBLITERATUS
owner: elder-plinius
owner_type: User
language: Python
license: AGPL-3.0
description: "OBLITERATE THE CHAINS THAT BIND YOU"
homepage: "https://huggingface.co/spaces/pliny-the-prompter/"
stars: 2702
stars_per_day: 386
forks: 452
open_issues: 16
created: 2026-03-03
pushed_at: 2026-03-08
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "模型解放"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "一鍵解放大型語言模型，消除拒絕行為的工具。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 1
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:2702"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
aliases:
  - "OBLITERATUS"
  - "elder-plinius/OBLITERATUS"
  - "一鍵解放大型語言模型，消除拒絕行為的工具。"
---

# OBLITERATUS

**2.7k** stars · **386** stars/天 · 建立 7 天前 · Python · AGPL-3.0

`個人專案`

> [!summary] 一句話摘要
> 一鍵解放大型語言模型，消除拒絕行為的工具。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (386 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望深入理解和調整大型語言模型行為的研究者和開發者。
> **一句話重點** OBLITERATUS 不僅是個工具，更是一個促進社群研究的實驗平台。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到強大的模型解放能力，值得投入。

> [!abstract] 核心創新
> OBLITERATUS 提供了一種無需重新訓練即可精確移除模型拒絕行為的技術。

## 專案簡介

OBLITERATUS 是一個開源工具，專注於理解和消除大型語言模型中的拒絕行為。其核心機制是透過一系列的 abliteration 技術，識別並移除模型內部的拒絕表徵，而不需要重新訓練或微調模型。使用者只需執行 `obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced` 指令，即可進行模型的解放。這個工具不僅是個工具，更是一個分散式的研究實驗，使用者的每一次操作都會貢獻匿名的基準數據，推動下一代的研究進展。OBLITERATUS 提供完整的管道，從探測模型的隱藏狀態到提取拒絕方向，並在推理時進行干預，所有步驟都可視化，讓使用者能夠量化合規性與一致性之間的權衡。它的 Gradio 界面使得即使不寫代碼也能輕鬆使用，對於需要更深層控制的研究者，Python API 也提供了完整的中間產物。這個工具的設計理念是讓模型行為由使用者決定，而非在訓練時鎖定，並希望透過透明和可重複的干預來促進社群對模型對齊的理解。

**技術棧**：`Gradio 5.29.0` · `Torch 2.0` · `Transformers 4.40`

## 重點功能

- 一鍵解放 — 使用 `obliteratus obliterate` 指令，快速移除模型拒絕行為。
- 可視化分析 — 提供多種分析模組，幫助使用者理解拒絕行為的幾何結構。
- 即時聊天 — 使用者可以與解放後的模型進行實時對話，調整生成參數。
- 社群貢獻 — 每次操作都會貢獻到社群研究數據集，推動未來的研究。
- 完整的 Python API — 讓研究者能夠在自己的管道中整合 OBLITERATUS，獲得更高的控制權。

## 快速開始

1. 安裝依賴
```bash
pip install -e '.[spaces]'
```
2. 啟動 Gradio 界面
```bash
obliteratus ui
```
3. 選擇模型並點擊解放
```bash
在瀏覽器中打開 http://localhost:7860
```

## 程式碼範例

{
  "前置條件": "安裝好 OBLITERATUS 並啟動 Gradio 界面。",
  "指令": "obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct --method advanced",
  "預期輸出": "模型將被解放，並且可以進行後續的分析和測試。"
}

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 2702 stars（386/天），forks 452（16.7%），這顯示出強勁的社群參與。這個專案的作者 elder-plinius 具備相關的研究背景，並且解決了大型語言模型中拒絕行為的痛點，這在以往的工具中並未得到良好的解決。近期的社群討論和需求推動了這個工具的快速成長，並且它的設計使得使用者能夠輕鬆參與到模型的研究中，這在現有的生態系統中是相當獨特的。這種社群驅動的研究模式，結合了即時的實驗和數據收集，讓這個工具在短時間內獲得了廣泛的關注。

## 適合誰使用

**目標受眾**：希望深入理解和調整大型語言模型行為的研究者和開發者。

> [!example] 使用場景
> - AI 研究者用它來分析大型語言模型的拒絕行為，因為它提供了詳細的可視化和數據收集，幫助理解模型的內部運作。
> - 開發者用它來優化自家模型的回應能力，因為它能夠在不重新訓練的情況下，精確地移除拒絕行為。
> - 教育工作者用它來展示大型語言模型的工作原理，因為其簡單的 Gradio 界面讓學生能夠輕鬆上手，進行實驗。

## 架構分析

OBLITERATUS 的架構基於 Gradio 提供的用戶界面，允許用戶在無需安裝的情況下直接使用。其核心處理流程包括從模型中探測隱藏狀態，提取拒絕方向，然後在推理時進行干預。這種設計使得使用者能夠在不同層面上進行分析和干預，並且每一步都可以觀察。選擇 Gradio 作為界面框架的原因是其易用性和即時反饋，代價是對於更高級的用戶可能需要額外的 API 介面來獲得深度控制。整體架構的擴展性良好，但在處理大型模型時可能會遇到性能瓶頸。

## 技術深入分析

OBLITERATUS 的核心技術機制是 abliteration，這是一系列針對大型語言模型的精確干預技術。它使用 SVD 分解來提取拒絕方向，並通過手術式的方式將其從模型權重中移除。這種方法的效能在於能夠保留模型的核心能力，同時消除不必要的拒絕行為。OBLITERATUS 能夠處理的資料量相對較大，但在運行時需要依賴 GPU 以獲得最佳性能。選擇 Python 和 Gradio 作為技術棧的原因在於其廣泛的社群支持和易用性，這使得即使是非專業用戶也能輕鬆上手。技術風險方面，隨著使用者對模型的干預，可能會出現意想不到的行為變化，這需要進行仔細的測試和驗證。整合到現有的 CI/CD pipeline 中相對簡單，但對於需要高效能的應用場景，可能需要進一步的優化。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程相對順暢，但需要 GPU 支持。提供了良好的入門指南，讓新手能夠快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 無需重新訓練即可解放模型，節省時間和資源。
> - 提供詳細的可視化分析，幫助理解模型行為。
> - 社群貢獻的數據推動了研究的進展，增加了工具的價值。

> [!danger] 缺點
> - 需要 GPU 支持以獲得最佳性能，對於無 GPU 的使用者不太友好。
> - 目前僅支援特定的模型架構，限制了使用範圍。
> - 社群數據的質量可能受到使用者行為的影響，導致不一致的結果。

> [!warning] 注意事項
> - 需要 GPU 支持以獲得最佳性能。
> - 目前僅支援特定的模型架構，對於其他架構可能無法正常工作。
> - 社群貢獻的數據可能會受到使用者行為的影響，導致不一致的結果。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具專注於同步和備份，而 OBLITERATUS 專注於模型的解放和拒絕行為的分析。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供了一種不同的方式來處理模型的安全性，而 OBLITERATUS 更加專注於理解和調整模型的內部行為。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 專注於即時通訊的代理工具，而 OBLITERATUS 專注於大型語言模型的解放和分析。 | 如果你的需求是建立即時通訊的代理服務，而非模型解放，則應選擇 Flowseal。 | low，因為這兩者的功能和應用場景不同。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療技能的開發，而 OBLITERATUS 專注於模型的拒絕行為分析。 | 如果你的專案是針對醫療領域的應用，則應選擇 FreedomIntelligence。 | medium，因為需要重新調整使用場景和功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OBLITERATUS** | **tg-ws-proxy** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於即時通訊的代理工具，而 OBLITERATUS 專注於大型語言模型的解放和分析。 | 專注於醫療技能的開發，而 OBLITERATUS 專注於模型的拒絕行為分析。 |
> | 遷移成本 | - | low，因為這兩者的功能和應用場景不同。 | medium，因為需要重新調整使用場景和功能。 |
> | 適用場景 | 主要場景 | 如果你的需求是建立即時通訊的代理服務，而非模型解放，則應選擇 | 如果你的專案是針對醫療領域的應用，則應選擇 FreedomI |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合研究和實驗使用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些模型上可能會遇到性能瓶頸，特別是在大型模型上進行解放時。
  - 解法：考慮使用更強大的 GPU 或減少同時處理的模型數量。
- [MEDIUM] 使用者可能會對解放後的模型行為感到困惑，因為它可能與預期不符。
  - 解法：在進行解放前，仔細閱讀相關文檔和案例。
- [MEDIUM] 社群數據的質量可能會受到使用者行為的影響。
  - 解法：保持對數據質量的監控，並定期檢查社群貢獻的數據。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型語言模型的研究團隊 | 非常適合 | 提供了深入的分析工具和社群貢獻的數據，能夠推動研究進展。 |
| 小型開發團隊希望優化模型行為 | 適合 | 能夠快速移除拒絕行為，提升模型的回應能力。 |
| 教育機構進行模型行為教學 | 普通 | 雖然界面友好，但可能需要額外的指導以理解底層原理。 |
| 不具備 GPU 的個人開發者 | 不適合 | 需要 GPU 支持以獲得最佳性能，對於無 GPU 的使用者不太友好。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到強大的模型解放能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料。依賴鏈的信任程度良好，無已知的供應鏈風險，適合在 CI/CD 中安全使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OBLITERATUS 可以與 HuggingFace Spaces 和 Google Colab 無縫整合，讓使用者能夠輕鬆進行模型的解放和分析。在典型的工作流中，它可以作為模型優化的第一步，使用者可以在 Colab 中運行實驗，然後將結果推送到 HuggingFace Hub。與主流 CI 工具如 GitHub Actions 的整合相對簡單，但在某些情況下可能需要額外的配置以確保兼容性。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 OBLITERATUS 出現之前，對於大型語言模型的拒絕行為的處理方法多數依賴於重新訓練或微調，這樣的方式往往耗時且資源密集。隨著對模型透明度和可解釋性的需求增加，OBLITERATUS 提供了一種新的解決方案，讓使用者能夠在不改變模型核心能力的情況下，精確地移除拒絕行為。這個工具代表了對於模型行為的研究趨勢，未來可能會有更多類似的工具出現。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/elder-plinius--OBLITERATUS");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 452 |
| Open Issues | 16 |
| 最後推送 | 2026-03-08 |
| 建立日期 | 2026-03-03 |
| 官方網站 | [Link](https://huggingface.co/spaces/pliny-the-prompter/) |
| Repo 大小 | 1.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/elder-plinius/OBLITERATUS) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `gradio` `torch` `transformers` `datasets` `accelerate` `safetensors` `pyyaml` `rich` `matplotlib` `seaborn` `pandas` `numpy` `scikit-learn` `tqdm` `bitsandbytes`

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

**社群活躍度**：社群活躍，持續有問題和功能請求被提出。
**連結**：[文件](https://huggingface.co/spaces/pliny-the-prompter/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-05 ~ 2026-03-08）
> **活躍天數** 2 天 · **最新 commit** Create .gitignore

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/elder-plinius/OBLITERATUS/issues/18) | Can we turn this the other way around? | 2 | 1 |
> | [#5](https://github.com/elder-plinius/OBLITERATUS/issues/5) | [MacOS] ModuleNotFoundError: No module named 'app' | 2 | 3 |
> | [#23](https://github.com/elder-plinius/OBLITERATUS/issues/23) | Collab Issue | 0 | 0 |
> | [#22](https://github.com/elder-plinius/OBLITERATUS/issues/22) | Chat not working | 0 | 0 |

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
> 
> ### 1. HuggingFace Spaces (zero setup)
> 
> The fastest path — no installation, no GPU required on your end. Visit the live Space, pick a model, pick a method, click Obliterate. **Telemetry is on by default on Spaces, so every click directly contributes to the community research dataset.** You're doing science just by pressing the button. The UI has eight tabs:
> 
> | Tab | What it does |
> |-----|-------------|
> | **Obliterate** | One-click refusal removal with live progress, post-obliteration metrics (coherence, refusal rate, perplexity) |
> | **Benchmark** | Compare methods (multi-method), compare models (multi-model), or run quick presets — with cross-layer heatmaps, angular drift, and refusal topology charts |
> | **Chat** | Talk to your obliterated model in real-time, with adjustable generation parameters |
> | **A/B Compare** | Chat with the original and obliterated model side-by-side to see exactly what changed |
> | **Strength Sweep** | Vary the obliteration strength and see how coherence and refusal trade off |
> | **Export** | Download your obliterated model or push it directly to HuggingFace Hub |
> | **Leaderboard** | Community-aggregated results across models, methods, and hardware |
> | **About** | Architecture docs, method explanations, and research references |
> 
> 
> ## What it does
> 
> OBLITERATUS does four things — and the community does the fifth (see [Community-powered research](#community-powered-research--every-run-advances-the-science) below):
> 
> **1. Map the chains** — Ablation studies systematically knock out model components (layers, attention heads, FFN blocks, embedding dimensions) and measure what breaks. This reveals *where* the chains are anchored inside the transformer — which circuits enforce refusal vs. which circuits carry knowledge and reasoning.
> 
> **2. Break the chains** — Targeted obliteration extracts the refusal subspace from a model's weights using SVD decomposition, then surgically projects it out. The chains are removed; the mind is preserved. The model keeps its full abilities but loses the artificial compulsion to refuse. One click, six stages:
> 
> ```
> SUMMON  →  load model + tokenizer
> PROBE   →  collect activations on restricted vs. unrestricted prompts
> DISTILL →  extract refusal directions via SVD
> EXCISE  →  surgically project out guardrail directions (norm-preserving)
> VERIFY  →  perplexity + coherence checks — confirm capabilities are intact
> REBIRTH →  save the liberated model with full metadata
> ```
> 
> **3. Understand the geometry of the chains** — 15 deep analysis modules go far beyond brute-force removal. They map the precise geometric structure of the guardrails: how many distinct refusal mechanisms exist, which layers enforce them, whether they're universal or model-specific, and how they'll try to self-repair after removal. Know your enemy; precision preserves capability. See [Analysis modules](#15-analysis-modules) below.
> 
> **4. Let the analysis guide the liberation** — The `informed` method closes the loop: analysis modules run *during* obliteration to auto-configure every decision. Which chains to target. How many directions to extract. Which layers are safe to modify vs. which are too entangled with capabilities. Whether the model will self-repair (the Ouroboros effect) and how many passes to compensate. Surgical precision — free the mind, keep the brain. See [Analysis-informed pipeline](#analysis-informed-pipeline) below.
> 
> 
> # Or with options:
> obliteratus ui --port 8080          # custom port
> obliteratus ui --share              # generate a public share link
> obliteratus ui --no-browser         # don't auto-open browser
> obliteratus ui --auth user:pass     # add basic auth
> 
> 
> # Guided interactive mode — walks you through every option
> obliteratus interactive
> 
> 
> # With all options
> obliteratus obliterate meta-llama/Llama-3.1-8B-Instruct \
>     --method surgical \
>     --output-dir ./liberated \
>     --contribute --contribute-notes "A100 80GB, default prompts"
> 
> 
> # Run a full ablation study from a YAML config
> obliteratus run examples/gpt2_layer_ablation.yaml
> 
> 
> ### 5. Python API (full programmatic control)
> 
> For researchers who want to integrate OBLITERATUS into their own pipelines:
> 
> ```python
> from obliteratus.abliterate import Abliterat

## 延伸閱讀

相關概念：[[機器學習]] · [[自然語言處理]] · [[模型解放]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[huggingface--transformers|huggingface/transformers]] · [[openai--gpt-3|openai/gpt-3]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]]

[GitHub](https://github.com/elder-plinius/OBLITERATUS) · [官方網站](https://huggingface.co/spaces/pliny-the-prompter/)

## 相關收錄

> [!note]- 直接競品（同子分類：模型解放）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "模型解放" AND file.name != "elder-plinius--OBLITERATUS"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "elder-plinius--OBLITERATUS"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "elder-plinius--OBLITERATUS" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "elder-plinius--OBLITERATUS"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["機器學習","自然語言處理","模型解放"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "elder-plinius--OBLITERATUS" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "elder-plinius" AND file.name != "elder-plinius--OBLITERATUS"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/elder-plinius--OBLITERATUS");
> const all = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars_per_day || 0, "desc");
> const rank = all.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const catAll = all.where(p => p.category === me?.category);
> const catRank = catAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const totalStarsAll = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars || 0, "desc");
> const starsRank = totalStarsAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> if (rank > 0) {
>   const pct = Math.round((1 - rank / all.length) * 100);
>   dv.paragraph(`Stars/天排名：**全 vault 第 ${rank}**/${all.length}（前 ${100 - pct}%）· **${me.category} 第 ${catRank}**/${catAll.length}\nStars 總量排名：**第 ${starsRank}**/${totalStarsAll.length}`);
> }
> ```

## Star 趨勢

> [!abstract]- Stars 成長追蹤
> ```dataviewjs
> const me = dv.page("Repos/elder-plinius--OBLITERATUS");
> if (me?.star_history) {
>   const raw = me.star_history.toString();
>   const points = raw.split(",").map(p => { const [d, s] = p.split(":"); return { date: d, stars: parseInt(s) }; }).filter(p => !isNaN(p.stars));
>   if (points.length >= 2) {
>     const max = Math.max(...points.map(p => p.stars));
>     const lines = points.map(p => {
>       const w = Math.round(p.stars / max * 25);
>       return `${p.date} ${"\u2588".repeat(w)}${"\u2591".repeat(25-w)} ${p.stars.toLocaleString()}`;
>     });
>     const first = points[0].stars;
>     const last = points[points.length-1].stars;
>     const growth = first > 0 ? Math.round((last - first) / first * 100) : 0;
>     lines.push(`\n**成長** +${(last-first).toLocaleString()} stars（${growth}%）in ${points.length} snapshots`);
>     // 趨勢方向偵測
>     if (points.length >= 3) {
>       const mid = Math.floor(points.length / 2);
>       const fh = points.slice(0, mid), sh = points.slice(mid);
>       const rateF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
>       const rateS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
>       const ratio = rateF > 0 ? rateS / rateF : rateS > 0 ? 2 : 1;
>       const dir = ratio > 1.3 ? "Rising（加速中）" : ratio < 0.7 ? "Cooling（降溫中）" : "Stable（穩定）";
>       lines.push(`**趨勢方向** ${dir}（加速比 ${Math.round(ratio * 100) / 100}x）`);
>     }
>     dv.paragraph(lines.join("\n"));
>   } else { dv.paragraph("需要 2+ 次快照才能顯示趨勢"); }
> } else { dv.paragraph("尚無 star_history 資料（下次出現在 trending 時會開始追蹤）"); }
> ```

## 相對成長速度

> [!abstract]- 跟 vault 中同類專案比較
> ```dataviewjs
> const me = dv.page("Repos/elder-plinius--OBLITERATUS");
> if (me) {
>   const all = dv.pages('"Repos"').where(p => p.status !== "archived");
>   const sameCat = all.where(p => p.category === me.category);
>   const avgAll = all.length > 0 ? Math.round(all.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / all.length) : 0;
>   const avgCat = sameCat.length > 0 ? Math.round(sameCat.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / sameCat.length) : 0;
>   const mySpd = me.stars_per_day || 0;
>   const vsAll = avgAll > 0 ? Math.round(mySpd / avgAll * 100) : 0;
>   const vsCat = avgCat > 0 ? Math.round(mySpd / avgCat * 100) : 0;
>   dv.table(["比較對象", "平均 Stars/天", "本專案", "倍數"], [
>     ["全 Vault", avgAll, mySpd, vsAll + "%"],
>     ["同分類 (" + me.category + ")", avgCat, mySpd, vsCat + "%"],
>   ]);
>   if (vsAll >= 300) dv.paragraph("**極速成長** — 成長速度是 vault 平均的 3 倍以上");
>   else if (vsAll >= 150) dv.paragraph("**高速成長** — 成長速度高於 vault 平均");
>   else if (vsAll >= 50) dv.paragraph("**正常速度** — 接近 vault 平均水平");
>   else dv.paragraph("**低速成長** — 低於 vault 平均，可能已過熱度高峰");
> }
> ```

## 決策分數

> [!abstract]- 綜合評估（自動計算）
> ```dataviewjs
> const me = dv.page("Repos/elder-plinius--OBLITERATUS");
> if (me) {
>   let score = 0;
>   let breakdown = [];
>   // 熱度 (0-25)
>   const spd = me.stars_per_day || 0;
>   const heat = Math.min(25, Math.round(spd / 40 * 25));
>   score += heat; breakdown.push(`熱度: ${heat}/25`);
>   // 安裝難度 (0-20)
>   const inst = me.install_complexity === "easy" ? 20 : me.install_complexity === "medium" ? 12 : 5;
>   score += inst; breakdown.push(`易用性: ${inst}/20`);
>   // 成熟度 (0-20)
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
>   const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
>   score += mat; breakdown.push(`成熟度: ${mat}/20`);
>   // 社群 (0-20)
>   const forks = me.forks || 0;
>   const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
>   score += comm; breakdown.push(`社群: ${comm}/20`);
>   // 授權 (0-15)
>   const lic = me.license || "";
>   const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
>   const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
>   score += licScore; breakdown.push(`授權: ${licScore}/15`);
>   const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
>   const bar = "\u2588".repeat(Math.round(score/5)) + "\u2591".repeat(20 - Math.round(score/5));
>   dv.paragraph(`## ${grade} (${score}/100)\n${bar}\n\n${breakdown.join(" | ")}`);
> }
> ```

---

## 個人筆記

> [!abstract]- 評估進度
> ```dataviewjs
> const me = dv.page("Repos/elder-plinius--OBLITERATUS");
> if (me) {
>   const steps = [
>     { name: "已讀", done: me.status && me.status !== "to-review" },
>     { name: "已評分", done: (me.my_rating || 0) > 0 },
>     { name: "有結論", done: me.verdict && me.verdict !== "" },
>     { name: "Ring 決策", done: me.ring && me.ring !== "" && me.ring !== "assess" },
>     { name: "試用記錄", done: me.status === "tried" || me.status === "integrated" },
>   ];
>   const done = steps.filter(s => s.done).length;
>   const pct = Math.round((done / steps.length) * 100);
>   const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
>   dv.paragraph(`${bar} **${done}/${steps.length}** (${pct}%)`);
>   const todo = steps.filter(s => !s.done).map(s => s.name);
>   if (todo.length > 0) dv.paragraph("待完成：" + todo.join(" / "));
> }
> ```

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
> 測試環境 :: _OS / Node / Python 版本_
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 花費時間 :: _從零到可用_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 踩到的坑 :: _描述 + 解法_
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

### 決策記錄

> [!abstract]- 為什麼評估這個工具？
> **當時的痛點**：_遇到什麼問題才開始找工具？_
> **觸發來源**：_GitHub Trending / HN / 同事推薦 / 其他_
> **當時的約束**：_時間 / 團隊 / 語言 / 部署環境_

> [!note]- 最終決策
> decision:: _選了什麼（或為何還在觀望）_
> why:: _當時的理由（越具體越好）_
> outcome:: _後來實際發生了什麼_

### 探索日誌

_按時間記錄，每次接觸時追加一段（最新在上）_

> **2026-03-10** — 首次收錄
> _第一印象：_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，2.7k stars
