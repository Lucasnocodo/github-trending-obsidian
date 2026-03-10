---
repo: tanishqkumar/ssd
url: https://github.com/tanishqkumar/ssd
owner: tanishqkumar
owner_type: User
language: Python
license: MIT
description: "A lightweight inference engine supporting speculative speculative decoding (SSD). "
homepage: ""
stars: 751
stars_per_day: 125
forks: 46
open_issues: 3
created: 2026-03-04
pushed_at: 2026-03-05
first_seen: 2026-03-10
week: "2026-W11"
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
  - "ssd"
  - "tanishqkumar/ssd"
  - "提供一個輕量級的推理引擎，支持並行的推測解碼，顯著提高推理速度。"
---

# ssd

**751** stars · **125** stars/天 · 建立 6 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 提供一個輕量級的推理引擎，支持並行的推測解碼，顯著提高推理速度。

> [!abstract] 核心創新
> SSD 允許小型模型和大型模型在不同硬體上並行運行，從而消除推理過程中的等待時間。

## 專案簡介

這個專案實現了一種新的推測解碼算法，讓小型模型和大型模型能夠同時運行，從而加速推理過程。它使用了 Tensor Parallelism 和 PagedAttention 等技術，並支援 Qwen3 和 Llama3 模型系列。與傳統的推測解碼相比，SSD 允許所有推測在不同硬體上並行進行，避免了等待驗證的延遲。這樣的設計使得推理速度大幅提升，特別適合需要高效能的應用場景。儘管目前只針對特定硬體進行了優化，但在支持範圍內的效能表現相當出色。這個專案的成熟度高，值得在需要快速推理的專案中進行嘗試。

**技術棧**：`Python` · `CUDA`

## 重點功能

- 支持並行推測解碼，顯著提高推理速度。
- 提供 SSD 算法的參考實現。
- 支援 Qwen3 和 Llama3 模型系列。
- 實現了 Tensor Parallelism 和 PagedAttention。
- 優化的自回歸基準測試。

## 快速開始

1. 安裝依賴
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 克隆專案
```bash
git clone https://github.com/tanishqkumar/ssd && cd ssd
```
3. 同步核心依賴
```bash
uv sync
```
4. 啟動虛擬環境
```bash
source .venv/bin/activate
```
5. 測試安裝
```bash
python -c "from ssd import LLM; print('ok')"
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 tanishqkumar 在推理算法領域有深厚的背景，這個專案切中了對於推理速度的迫切需求。隨著大型模型的普及，對於高效能推理引擎的需求日益增加，SSD 的出現正好滿足了這一點。它的設計理念和實作方式相對於以往的推測解碼方法有了顯著的進步，因此在技術社群中引起了廣泛的關注。

## 適合誰使用

**目標受眾**：對推理效能有高要求的 AI 研究人員和開發者。

> [!example] 使用場景
> - AI 研究人員 用它來 加速推理過程，因為 SSD 的並行推測能顯著減少等待時間。
> - 開發者 用它來 測試大型模型的效能，因為它支持多種模型並能快速驗證結果。
> - 數據科學家 用它來 實現高效的推理服務，因為 SSD 提供了優化的推理引擎，適合實時應用。

## 架構分析

專案採用前後端分離架構，推理引擎使用 SSD 算法，並通過 CUDA 進行優化。資料流是小型模型推測 → 大型模型驗證 → 結果返回。

## 優缺點分析

> [!success] 優點
> - 推理速度顯著提升，適合實時應用。
> - 支持多種模型，靈活性高。
> - 設計理念創新，具備未來擴展性。

> [!danger] 缺點
> - 目前僅針對特定硬體進行了優化，限制了使用範圍。
> - 需要較高的硬體要求，對於一般開發者可能不友好。
> - 安裝和配置過程較為繁瑣。

> [!warning] 注意事項
> - 僅支援特定硬體，如 H100。
> - 需要安裝 CUDA 12.8 以上版本。
> - 目前僅針對特定模型進行了優化，其他模型可能效果不佳。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 46 |
| Open Issues | 3 |
| 最後推送 | 2026-03-05 |
| 建立日期 | 2026-03-04 |
| Repo 大小 | 348 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tanishqkumar](https://github.com/tanishqkumar) | 16 |

## 社群與生態

**社群活躍度**：專案活躍，近期有多次提交和更新。

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
> If you already have the models downloaded via `huggingface-cli` or similar, you can skip straight to datasets — just make sure `SSD_HF_CACHE` points to the right place. The download scripts require the `scripts` 

## 延伸閱讀

相關概念：[[機器學習]] · [[深度學習]] · [[推理引擎]]

[GitHub](https://github.com/tanishqkumar/ssd)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "tanishqkumar--ssd"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，748 stars
