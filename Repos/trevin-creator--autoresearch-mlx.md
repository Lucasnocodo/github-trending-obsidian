---
repo: trevin-creator/autoresearch-mlx
url: https://github.com/trevin-creator/autoresearch-mlx
owner: trevin-creator
owner_type: User
language: Python
license: MIT
description: "Apple Silicon (MLX) port of Karpathy's autoresearch — autonomous AI research loops on Mac, no PyTorch required."
homepage: ""
stars: 472
stars_per_day: 236
forks: 64
open_issues: 3
created: 2026-03-08
pushed_at: 2026-03-08
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
  - "autoresearch-mlx"
  - "trevin-creator/autoresearch-mlx"
  - "在 Apple Silicon 上執行 Karpathy 的自動研究，無需 PyTorch。"
---

# autoresearch-mlx

**472** stars · **236** stars/天 · 建立 2 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 在 Apple Silicon 上執行 Karpathy 的自動研究，無需 PyTorch。

> [!abstract] 核心創新
> 這個移植版讓 Karpathy 的自動研究工具能在 Apple Silicon 上無縫運行。

## 專案簡介

autoresearch-mlx 是 Karpathy 的自動研究工具的 Apple Silicon 移植版，專注於自動化的 AI 研究迴圈。這個專案使用 Python 開發，並完全依賴 MLX 而非 PyTorch，讓 Apple Silicon 的使用者能夠輕鬆運行。它保留了原始設計規則，並且在每次迭代中自動修改訓練程式，進行 5 分鐘的實驗，並根據結果進行版本控制。與原版相比，這個移植版在 Apple 硬體上運行更為流暢，並能夠在固定的時間內進行更多的實驗。對於 Apple Silicon 使用者來說，這是一個理想的選擇，特別是對於自動化研究的開發者。

**技術棧**：`Python` · `MLX`

## 重點功能

- 無需 PyTorch，完全依賴 MLX。
- 支持固定時間的自動研究迴圈。
- 能夠自動修改訓練程式並進行版本控制。
- 在 Apple Silicon 上運行流暢，無需額外配置。
- 提供簡單的實驗設置和執行流程。

## 快速開始

1. 安裝 uv
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 同步依賴
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
指向 program.md 讓 AI 開始運行
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 Apple Silicon 的普及，開發者對於能夠在這些硬體上運行的工具需求增加。作者 trevin-creator 將 Karpathy 的創新理念帶入 Apple 硬體，這使得專案在開發者社群中受到關注。自動化研究的需求也隨著 AI 的發展而上升，這使得這個工具更具吸引力。

## 適合誰使用

**目標受眾**：對於使用 Apple Silicon 並需要自動化研究工具的開發者和研究人員。

> [!example] 使用場景
> - AI 研究人員 用它來 自動化模型訓練過程，因為它能在 Apple Silicon 上高效運行。
> - 開發者 用它來 測試不同的模型配置，因為它支持快速迭代和版本控制。
> - 學生 用它來 學習自動化研究的流程，因為它簡化了實驗設置和執行。

## 架構分析

專案架構簡單，使用 MLX 進行模型訓練，資料流是數據準備 → 訓練模型 → 自動化研究迴圈。使用者只需編輯 program.md 來控制整個流程。

## 優缺點分析

> [!success] 優點
> - 無需 PyTorch，簡化了安裝過程。
> - 在 Apple Silicon 上運行流暢，性能優越。
> - 自動化研究流程簡單，易於使用。

> [!danger] 缺點
> - 僅限於 Apple Silicon 硬體，無法跨平台使用。
> - 目前功能較為基礎，未來可能需要擴展。
> - 實驗週期較短，對於深度學習模型的訓練可能不夠充分。

> [!warning] 注意事項
> - 僅支援 Apple Silicon 硬體，對於其他平台無法運行。
> - 目前僅實現了 AdamW 優化器，未來可能擴展。
> - 實驗週期較短，可能無法進行深度的模型訓練。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Karpathy's autoresearch | 原版依賴 PyTorch，無法在 Apple Silicon 上原生運行。 |
| Ray Tune | 雖然也支援自動化調整，但不專注於固定時間的迴圈。 |

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

**社群活躍度**：社群活躍度中等，持續有更新。

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

相關概念：[[自動化研究]] · [[機器學習]] · [[模型訓練]] · [[版本控制]] · [[Apple Silicon]]

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

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，459 stars
