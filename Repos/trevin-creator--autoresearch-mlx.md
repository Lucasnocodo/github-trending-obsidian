---
repo: trevin-creator/autoresearch-mlx
url: https://github.com/trevin-creator/autoresearch-mlx
owner: trevin-creator
owner_type: User
language: Python
license: MIT
description: "Apple Silicon (MLX) port of Karpathy's autoresearch — autonomous AI research loops on Mac, no PyTorch required."
homepage: ""
stars: 466
stars_per_day: 233
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
  - ai_ml
  - python
aliases:
  - "autoresearch-mlx"
  - "trevin-creator/autoresearch-mlx"
  - "在 Apple Silicon 上運行的自動化 AI 研究循環，無需 PyTorch。"
---

# autoresearch-mlx

**466** stars · **233** stars/天 · 建立 2 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 在 Apple Silicon 上運行的自動化 AI 研究循環，無需 PyTorch。

> [!abstract] 核心創新
> 這個專案的核心創新在於無需 PyTorch 的自動化 AI 研究循環，專為 Apple Silicon 設計。

## 專案簡介

這個專案是 Karpathy 的 autoresearch 的 Apple Silicon 移植版本，提供了一個無需 PyTorch 的自動化 AI 研究循環。使用者可以通過一個簡單的 `program.md` 文件來控制整個研究過程，並且專案保留了原始設計的所有規則。與原版相比，這個移植版本能夠在 Apple Silicon 上運行，充分利用其性能優勢。實際使用中，這個工具能夠快速進行多次實驗，並自動調整參數，對於需要在 Apple 硬體上進行 AI 研究的開發者來說，這是一個非常實用的選擇。

**技術棧**：`Python`

## 重點功能

- 無需 PyTorch，支持 Apple Silicon 硬體。
- 自動化的研究循環，簡化實驗流程。
- 使用 program.md 控制整個研究過程。
- 快速的實驗迭代，提升研究效率。
- 支持多次實驗和自動參數調整。

## 快速開始

1. 安裝 uv
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 安裝依賴
```bash
uv sync
```
3. 運行準備腳本
```bash
uv run prepare.py
```
4. 開始自動化研究
```bash
uv run train.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 Apple Silicon 的普及，對於能夠充分利用其性能的工具需求增加，這個專案正好滿足了這一需求。作者的背景和對於 AI 研究的深入理解使得這個工具在社群中受到重視。

## 適合誰使用

**目標受眾**：需要在 Apple Silicon 上進行 AI 研究的開發者和研究人員。

> [!example] 使用場景
> - AI 研究人員 用它來 自動化實驗流程，因為它能夠快速進行多次實驗並自動調整參數。
> - 開發者 用它來 在 Apple Silicon 上進行 AI 訓練，因為它無需 PyTorch，簡化了環境設置。
> - 學生 用它來 學習 AI 研究的流程，因為它提供了簡單的控制文件和自動化功能。

## 優缺點分析

> [!success] 優點
> - 無需 PyTorch，簡化環境設置。
> - 支持 Apple Silicon 硬體，充分利用性能。
> - 自動化的研究循環提升研究效率。

> [!danger] 缺點
> - 僅支持 Apple Silicon 硬體。
> - 對於其他平台可能無法運行。
> - 需要適當的環境設置。

> [!warning] 注意事項
> - 僅支持 Apple Silicon 硬體。
> - 對於其他平台可能無法運行。
> - 需要適當的環境設置。

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

相關概念：[[自動化研究]] · [[AI 訓練]] · [[Apple Silicon]]

[GitHub](https://github.com/trevin-creator/autoresearch-mlx)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，459 stars
