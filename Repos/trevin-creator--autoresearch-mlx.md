---
repo: trevin-creator/autoresearch-mlx
url: https://github.com/trevin-creator/autoresearch-mlx
owner: trevin-creator
owner_type: User
language: Python
license: MIT
description: "Apple Silicon (MLX) port of Karpathy's autoresearch — autonomous AI research loops on Mac, no PyTorch required."
homepage: ""
stars: 475
stars_per_day: 238
forks: 64
open_issues: 3
created: 2026-03-08
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
  - "autoresearch-mlx"
  - "trevin-creator/autoresearch-mlx"
  - "在 Apple Silicon 上運行的自動化 AI 研究循環，無需 PyTorch。"
---

# autoresearch-mlx

**475** stars · **238** stars/天 · 建立 2 天前 · Python · MIT

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 在 Apple Silicon 上運行的自動化 AI 研究循環，無需 PyTorch。

> [!abstract] 核心創新
> 這個移植版本利用 Apple Silicon 的特性，實現了無需 PyTorch 的自動化 AI 研究循環。

## 專案簡介

這個專案是 Karpathy 的 autoresearch 的 Apple Silicon 移植版本，旨在實現自動化的 AI 研究循環。它通過固定的時間預算和單一可變的訓練腳本來控制實驗，並且不需要 PyTorch 或 CUDA。這個版本利用了 Apple Silicon 的統一記憶體特性，能夠在 M1/M2/M3/M4 上高效運行。與原始版本相比，這個移植版本在實驗周期上大幅縮短，能夠在約 7 分鐘內完成一次實驗，這使得用戶可以在短時間內獲得更多的實驗結果。儘管目前僅支持 AdamW 優化器，但其設計理念和運行效率在特定環境下相當出色。這個專案特別適合需要在 Apple 硬體上進行 AI 研究的開發者。

**技術棧**：`Python`

## 重點功能

- 無需 PyTorch 或 CUDA，支持 Apple Silicon 硬體。
- 固定時間預算的自動化研究循環。
- 支持單一可變的訓練腳本，簡化實驗設置。
- 能在約 7 分鐘內完成一次實驗。
- 自動化的實驗結果生成，提升研究效率。

## 快速開始

1. 安裝 uv（如果需要）
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 安裝依賴
```bash
uv sync
```
3. 下載數據並訓練分詞器
```bash
uv run prepare.py
```
4. 運行單次訓練實驗
```bash
uv run train.py
```
5. 開始自動化研究
```bash
指向 program.md 並讓其運行
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的作者 trevin-creator 針對 Apple Silicon 的需求進行了專門的移植，這在目前的 AI 研究中是相對少見的。隨著 Apple 硬體的普及，對於能夠充分利用其性能的工具需求逐漸增加，autoresearch-mlx 正好滿足了這一需求。它的設計簡單易用，並且能夠快速產生實驗結果，因此在開發者社群中引起了關注。

## 適合誰使用

**目標受眾**：希望在 Apple Silicon 上進行 AI 研究的開發者和學生。

> [!example] 使用場景
> - AI 研究人員 用它來 自動化實驗，因為它能在短時間內提供多個實驗結果。
> - 開發者 用它來 測試不同的模型配置，因為它支持快速迭代和實驗。
> - 學生 用它來 學習 AI 研究的流程，因為它簡化了實驗的設置和執行。

## 優缺點分析

> [!success] 優點
> - 能夠在 Apple Silicon 上高效運行，充分利用硬體性能。
> - 簡化了實驗設置，適合快速迭代。
> - 自動化的實驗流程，提升研究效率。

> [!danger] 缺點
> - 僅支持 AdamW 優化器，限制了模型選擇。
> - 實驗周期受限於 Apple 硬體性能。
> - 不支持其他深度學習框架，靈活性不足。

> [!warning] 注意事項
> - 目前僅支持 AdamW 優化器，未來可能擴展。
> - 實驗周期受限於 Apple Silicon 的性能。
> - 不支持其他深度學習框架，限制了靈活性。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 64 |
| Open Issues | 3 |
| 最後推送 | 2026-03-08 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 58 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@trevin-creator](https://github.com/trevin-creator) | 3 |

## 社群與生態

**社群活躍度**：專案剛建立，社群尚在建立中。

## README 摘錄

> [!info]- 展開查看原文 README
> # autoresearch-mlx
> 
> Apple Silicon (MLX) port of [Karpathy's autoresearch](https://github.com/karpathy/autoresearch).
> 
> Full credit to [@karpathy](https://github.com/karpathy) for the core idea: fixed-time autonomous research loops controlled entirely through `program.md`. This fork preserves every design rule — 5-minute wall-clock budget, single mutable `train.py`, one metric (`val_bpb`), keep/revert via git — and runs natively on Apple Silicon via [MLX](https://github.com/ml-explore/mlx). No PyTorch or CUDA required.
> 
> ## Quick start
> 
> Requirements: Apple Silicon Mac (M1/M2/M3/M4), Python 3.10+, uv.
> 
> ```bash
> # Install uv (if needed)
> curl -LsSf https://astral.sh/uv/install.sh | sh
> 
> # Install dependencies
> uv sync
> 
> # Download data and train tokenizer (one-time)
> uv run prepare.py
> 
> # Run a single training experiment (~7 min including compile + eval)
> uv run train.py
> 
> # Start autonomous research
> # Point Claude Code (or any agent) at program.md and let it go
> ```
> 
> ## How it works
> 
> Same as the original. Three files that matter:
> 
> - **`prepare.py`** — data prep, tokenizer, dataloader, evaluation. Not modified.
> - **`train.py`** — model, optimizer, training loop. The agent edits this.
> - **`program.md`** — agent instructions. Point your agent here.
> 
> The agent reads `program.md`, modifies `train.py`, runs a 5-minute experiment, checks `val_bpb`, and commits or reverts. Repeat overnight. Wake up to results.
> 
> ## Results on M1 Mac Studio (48GB)
> 
> Starting from the upstream default configuration and running the autoresearch loop:
> 
> | Experiment | Change | val_bpb | Action |
> |---|---|---|---|
> | baseline | default config | 2.667 | keep |
> | 1 | halve batch size | 2.589 | keep |
> | 2 | 10x matrix LR | 2.534 | keep |
> | 3 | depth 8 → 4 | 1.808 | keep |
> 
> Key finding: Apple Silicon throughput in a 5-minute window favors smaller, faster-training models. The autoresearch loop discovered this automatically — more optimizer steps beat more parameters when compute time is fixed.
> 
> ## Differences from upstream
> 
> - **MLX instead of PyTorch/CUDA.** Native Apple Silicon, unified memory.
> - **AdamW only.** Muon optimizer port is future work.
> - **Smaller eval token budget.** Reduced for faster iteration (~52s eval vs ~11min on full budget). Same `evaluate_bpb` function from `prepare.py`.
> - **~7 min experiment cycle.** 5 min training + ~11s compile + ~52s eval. Expect ~8-9 experiments/hour, ~70 overnight.
> - **MFU reporting is placeholder.** No Apple Silicon FLOPs benchmark exists equivalent to H100_BF16

## 延伸閱讀

相關概念：[[機器學習]] · [[自動化測試]] · [[AI 研究]]

[GitHub](https://github.com/trevin-creator/autoresearch-mlx)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "trevin-creator--autoresearch-mlx"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，459 stars
