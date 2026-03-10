---
repo: trevin-creator/autoresearch-mlx
url: https://github.com/trevin-creator/autoresearch-mlx
owner: trevin-creator
owner_type: User
language: Python
license: MIT
description: "Apple Silicon (MLX) port of Karpathy's autoresearch — autonomous AI research loops on Mac, no PyTorch required."
homepage: ""
stars: 468
stars_per_day: 234
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
  - "在 Apple Silicon 上運行 Karpathy 的自動研究，無需 PyTorch。"
---

# autoresearch-mlx

**468** stars · **234** stars/天 · 建立 2 天前 · Python · MIT

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 在 Apple Silicon 上運行 Karpathy 的自動研究，無需 PyTorch。

> [!abstract] 核心創新
> 這個移植版通過無需 PyTorch 的設計，讓 Apple Silicon 用戶能夠輕鬆進行自動化 AI 研究。

## 專案簡介

這個專案是 Karpathy 的 autoresearch 的 Apple Silicon 移植版，專注於自動化的 AI 研究迴圈。它通過固定的時間限制和簡單的指令檔來控制實驗，讓 AI 自動修改訓練程式，並在每次實驗後進行評估。技術上，這個版本使用了 MLX，完全不依賴 PyTorch 或 CUDA，這使其能夠在 Apple Silicon 上原生運行。與原版相比，這個移植版在實驗周期上更短，能夠在約 7 分鐘內完成一次實驗，並且能夠自動發現最佳的訓練配置。實際使用中，這個工具在 M1 Mac 上表現良好，但仍需注意其對於 Apple Silicon 的依賴。整體而言，這個專案對於想要在 Apple 硬體上進行 AI 研究的開發者來說是一個不錯的選擇。

**技術棧**：`Python` · `MLX`

## 重點功能

- 無需 PyTorch 或 CUDA，原生支持 Apple Silicon。
- 固定時間的自動研究迴圈，簡化實驗流程。
- 支持簡單的指令檔控制實驗。
- 每次實驗約 7 分鐘，快速迭代。
- 自動發現最佳訓練配置，提升效率。

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
5. 開始自動研究
```bash
指向 program.md 讓 AI 開始實驗。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 Apple Silicon 的普及，對於能在這些硬體上高效運行的 AI 工具需求增加，這個專案正好滿足了這一需求。Karpathy 的原始理念受到廣泛關注，這個移植版的出現使得更多開發者能夠在 Apple 硬體上進行實驗。

## 適合誰使用

**目標受眾**：希望在 Apple Silicon 上進行 AI 研究的開發者和學生。

> [!example] 使用場景
> - AI 研究人員 用它來 自動化實驗，因為它能夠在短時間內完成多次實驗。
> - 開發者 用它來 測試不同的模型配置，因為它能夠自動發現最佳配置。
> - 學生 用它來 學習 AI 研究流程，因為它提供了簡單的指令檔控制。

## 架構分析

專案基於簡單的指令檔控制，使用 MLX 進行實驗管理，資料流是 指令檔 → 訓練程式 → 評估結果。

## 優缺點分析

> [!success] 優點
> - 無需 PyTorch，簡化了安裝過程。
> - 快速的實驗迴圈，適合快速迭代。
> - 自動發現最佳配置，提升研究效率。

> [!danger] 缺點
> - 僅支持 Apple Silicon，限制了使用範圍。
> - 對於複雜模型的支持可能不足。
> - 需要用戶手動設置指令檔，增加了配置複雜度。

> [!warning] 注意事項
> - 僅支持 Apple Silicon 硬體。
> - 對於更複雜的模型可能不如 PyTorch 效果好。
> - 需要用戶手動設置指令檔。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Karpathy's autoresearch | 這是 Karpathy 的原版，依賴 PyTorch，而此專案無需 PyTorch。 |
| AutoML | AutoML 更加專注於自動化模型選擇，而此專案專注於自動化實驗流程。 |

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

**社群活躍度**：社群活躍度較低，尚在建立中。

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

相關概念：[[自動化研究]] · [[Apple Silicon]] · [[實驗迴圈]] · [[AI 研究]] · [[模型配置]]

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
