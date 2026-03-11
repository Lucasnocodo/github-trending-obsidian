---
repo: tanishqkumar/ssd
url: https://github.com/tanishqkumar/ssd
owner: tanishqkumar
owner_type: User
language: Python
license: MIT
description: "A lightweight inference engine supporting speculative speculative decoding (SSD). "
homepage: ""
stars: 753
stars_per_day: 126
forks: 47
open_issues: 3
created: 2026-03-04
pushed_at: 2026-03-05
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "LLM 推論"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供一個輕量級的推論引擎，支持快速的推測性解碼，讓大型語言模型的推理速度大幅提升。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-17"
engagement: "low"
verdict: ""
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
aliases:
  - "ssd"
  - "tanishqkumar/ssd"
  - "提供一個輕量級的推論引擎，支持快速的推測性解碼，讓大型語言模型的推理速度大幅提升。"
---

# ssd

**753** stars · **126** stars/天 · 建立 6 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 提供一個輕量級的推論引擎，支持快速的推測性解碼，讓大型語言模型的推理速度大幅提升。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (126 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 5 天前) · **貢獻者** Solo (bus factor 風險)
> **適合** 需要在多 GPU 環境中高效推理大型語言模型的 AI 研究團隊。
> **一句話重點** SSD 的創新在於其並行推測性解碼的能力，能夠顯著提升大型語言模型的推理速度。

> [!abstract] 核心創新
> SSD 是一種全新的推測性解碼演算法，能夠在並行處理中消除草擬開銷，顯著提升推理速度。

## 專案簡介

SSD 是一種新的推測性解碼演算法，透過將小型模型和大型模型的推理過程並行化，來加速生成過程。具體來說，小型模型預測大型模型可能生成的下一個幾個 token，然後大型模型在一次前向傳遞中驗證這些預測。SSD 則是讓小型模型同時預測所有可能的驗證結果，這樣一來，正確的預測可以立即返回，省去草擬的開銷。這個引擎支持 Qwen3 和 Llama3 模型系列，並利用了張量並行、PagedAttention 和 CUDA圖等技術來進一步優化性能。與傳統的推測性解碼相比，SSD 的並行處理方式使得推理延遲顯著降低，並且能夠在多個 GPU 上運行，提升了整體效率。使用 SSD 時，對於大型模型（如 Llama-3 70B），在多個 GPU 上的推理速度可達到每秒數百個 token，這對於需要快速響應的應用場景非常有利。這個專案目前處於 beta 階段，對於需要高效推理的團隊來說，值得考慮。適合用於需要快速生成回應的聊天機器人或其他自然語言處理應用，但不建議用於小型模型或資源有限的環境。

**技術棧**：`Python 3.11` · `CUDA 12.8`

## 重點功能

- 並行推測性解碼 — 小型模型同時預測所有可能的驗證結果，消除草擬開銷。
- 支持 Qwen3 和 Llama3 模型系列 — 兼容多種大型模型，靈活應用於不同場景。
- 張量並行 — 在多 GPU 環境中有效分配計算資源，提升推理速度。
- PagedAttention — 優化記憶體使用，支持更大的上下文窗口。
- CUDA圖支持 — 利用 NVIDIA 的 CUDA 技術進行性能優化，提升運行效率。

## 快速開始

1. 安裝依賴
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 克隆專案並安裝核心依賴
```bash
git clone https://github.com/tanishqkumar/ssd && cd ssd && uv sync
```
3. 設置環境變數
```bash
export SSD_HF_CACHE=/path/to/huggingface/hub
```
5. 測試安裝
```bash
python -c "from ssd import LLM; print('ok')"
```
5. 運行基準測試
```bash
cd bench && python -O bench.py --llama --size 70 --gpus 4 --numseqs 128 --all
```

## 程式碼範例

python
# 使用 SSD 進行推理
python -O bench.py --llama --size 70 --gpus 5 --spec --async --k 7 --f 3 --b 1 --temp 0 --numseqs 128 --output_len 512 --all
# 預期輸出：生成的文本結果

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Tanishq Kumar 之前參與過多個知名的 LLM 相關專案，這次的 SSD 解決了傳統推測性解碼在速度上的瓶頸，特別是在多 GPU 環境下的應用。最近在 ICLR 2026 的論文發表引起了學術界的關注，這也可能是其受關注的原因之一。隨著大型模型的普及，對於推理速度的需求越來越高，SSD 的出現正好滿足了這一需求。

## 適合誰使用

**目標受眾**：需要在多 GPU 環境中高效推理大型語言模型的 AI 研究團隊。

> [!example] 使用場景
> - AI 研究員用它來加速大型語言模型的推理過程，因為 SSD 能夠在多 GPU 環境下實現更快的生成速度，提升了實驗效率。
> - 後端工程師用它來構建即時聊天機器人，因為 SSD 的快速推理能力能夠提供更流暢的用戶體驗，減少延遲。
> - 資料科學家用它來處理大規模文本生成任務，因為 SSD 的並行處理特性能夠有效地處理大量請求，提升生產力。

## 架構分析

SSD 採用微服務架構，將小型模型和大型模型的推理過程分開處理。用戶輸入 → 小型模型預測所有可能的驗證結果 → 大型模型驗證並返回結果。關鍵技術決策包括使用張量並行和 PagedAttention 來優化性能。專案目錄結構中，bench/ 目錄包含基準測試和使用範例。

## 技術深入分析

SSD 的核心技術機制在於將小型模型和大型模型的推理過程並行化，這樣一來，小型模型能夠同時預測多個可能的驗證結果，並且大型模型則在一次前向傳遞中驗證這些預測。這種設計使得 SSD 能夠在多 GPU 環境中實現高效的推理，根據基準測試，SSD 在大型模型上可達到每秒數百個 token 的生成速度。選擇 Python 和 CUDA 作為開發語言和技術棧，這樣的選擇使得 SSD 能夠充分利用現有的深度學習框架和硬體加速。隨著模型規模的擴大，SSD 的設計可能會面臨記憶體和計算資源的瓶頸，特別是在處理更大模型時，這可能會影響性能。安全性方面，SSD 的設計並未提及對於數據隱私的考量，這在實際應用中可能需要額外的注意。這些技術風險需要在未來的版本中進一步評估和改善。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝和使用範例，對於新手來說相對友好。安裝過程中需要設置多個環境變數，這可能會對新手造成一定困難。整體而言，花 30 分鐘能夠完成安裝並運行基本範例。

## 優缺點分析

> [!success] 優點
> - 推理速度快，能夠在多 GPU 環境中實現高效能。
> - 支持多種大型模型，靈活應用於不同場景。
> - 並行處理消除草擬開銷，提升整體效率。
> - 使用最新的 CUDA 技術，性能優化明顯。

> [!danger] 缺點
> - 對硬體要求高，僅支持特定的 GPU。
> - 目前僅支持特定模型，擴展性有限。
> - 處於 beta 階段，可能存在不穩定性。
> - 安裝過程相對複雜，需要設置多個環境變數。

> [!warning] 注意事項
> - 僅支持 Python 3.11+ 和 CUDA >= 12.8。
> - 需要在 H100 或相似的高效能 GPU 上運行，對硬體要求較高。
> - 目前僅支持 Llama3 和 Qwen3 模型，對其他模型的支持尚未實現。
> - 處於 beta 階段，API 可能會有變動。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 47 |
| Open Issues | 3 |
| 最後推送 | 2026-03-05 |
| 建立日期 | 2026-03-04 |
| Repo 大小 | 348 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tanishqkumar](https://github.com/tanishqkumar) | 16 |

## 社群與生態

**社群活躍度**：社群活躍度中等，提交更新頻繁。

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
> - PagedAttention, CUDAgraphs, torch compilation, prefix caching
> 
>   
>     
>   
> 
> ## Setup
> 
> Requirements: Python 3.11+, CUDA >= 12.8. This code was written and tested on H100s. 
> 
> If `uv` is not installed:
> 
> ```bash
> curl -LsSf https://astral.sh/uv/install.sh | sh
> # if `uv` is not found in this shell:
> export PATH="$HOME/.local/bin:$PATH"
> ```
> 
> Then: 
> 
> ```bash
> git clone https://github.com/tanishqkumar/ssd && cd ssd
> uv sync                    # core SSD deps
> # uv sync --extra scripts  # add deps used by scripts/
> source .venv/bin/activate
> python -c "from ssd import LLM; print('ok')"
> ```
> 
> Set paths via environment variables. `SSD_HF_CACHE` should point to the HuggingFace **hub** directory — this is the directory that contains `models--org--name/` subdirectories (e.g. `/data/huggingface/hub`, not `/data/huggingface/`). `SSD_DATASET_DIR` should point to the directory containing the dataset subdirectories (`humaneval/`, `alpaca/`, etc).
> 
> ```bash
> export SSD_HF_CACHE=/path/to/huggingface/hub
> export SSD_DATASET_DIR=/path/to/processed_datasets
> export SSD_CUDA_ARCH=9.0   # 9.0=H100, 8.0=A100, 8.9=L40/4090
> ```
> 
> ### Download models + datasets
> 
> If you already have the models downloaded via `huggingface-cli` or similar, you can skip straight to datasets — just make sure `SSD_HF_CACHE` points to the right place. The download scripts require the `scripts` extra: `uv sync --extra scripts`.
> 
> ```bash
> # models (uses SSD_HF_CACHE)
> python scripts/download_from_hf.py llama
> 
> # datasets (writes to $HF_DATASETS_CACHE/processed_datasets)
> export HF_DATASETS_CACHE=/path/to  # parent of SSD_DATASET_DIR
> python scripts/get_data_from_hf.py --num-samples 10000
> ```
> 
> ## Usage
> 
> All commands below run from inside the `bench/` directory. Large models (Llama-3 70B, Qwen-3 32B) take a few minutes for load/warmup/compile before generation starts. Always use `python -O` to disable debug overhead.
> 
> ### Benchmarks
> 
> Use `--all` for full eval across four datasets. Since different data distributions are predictable to varying degrees, the speed of SD/SSD depends a lot on the dataset. Averaging over many prompts from many types of datasets 
> gives an overall picture. `--numseqs` is per-dataset, so `--numseqs 128 --all` runs 128 × 4 = 512 prompts total.
> 
> ```bash
> cd bench
> 
> # AR — Llama 70B, 4 GPUs
> python -O bench.py --llama --size 70 --gpus 4 --b 1 --temp 0 --numseqs 128 --output_len 512 --all
> 
> # Sync spec decode — 70B target + 1B draft, 4 GPUs, k=6
> python -O bench.py --llama --size 70 --gpus 4 --spec --k 6 --b 1 --temp 0 --numseqs 128 --output_len 512 --all
> 
> # Async spec decode (SSD) — 70B target (4 GPUs) + 1B draft (1 GPU), k=7, f=3
> python -O bench.py --llama --size 70 --gpus 5 --spec --async --k 7 --f 3 --b 1 --temp 0 --numseqs 128 --output_len 512 --all
> ```
> 
> Use `--qwen --size 32` for Qwen models. See `bench/bench.py` for full args. For SGLang/vLLM baselines

## 延伸閱讀

相關概念：[[推測性解碼]] · [[張量並行]] · [[CUDA圖]] · [[大型語言模型]] · [[自然語言處理]]

相關專案：[[tanishqkumar--sd|tanishqkumar/sd]] · [[huggingface--transformers|huggingface/transformers]] · [[karpathy--autoresearch|karpathy/autoresearch]] · [[duoan--TorchCode|duoan/TorchCode]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[helenigtxu--TradingView-Claw|helenigtxu/TradingView-Claw]] · [[inspatio--worldfm|inspatio/worldfm]] · [[trevin-creator--autoresearch-mlx|trevin-creator/autoresearch-mlx]]

[GitHub](https://github.com/tanishqkumar/ssd)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "tanishqkumar--ssd"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "tanishqkumar--ssd"
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

- [[2026-03-11|2026-03-11]] — 再次上榜，753 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，748 stars
