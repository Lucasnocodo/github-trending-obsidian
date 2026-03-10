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
  - "在 Apple Silicon 上運行的 Karpathy 的自動研究，無需 PyTorch。"
---

# autoresearch-mlx

**468** stars · **234** stars/天 · 建立 2 天前 · Python · MIT

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 在 Apple Silicon 上運行的 Karpathy 的自動研究，無需 PyTorch。

> [!abstract] 核心創新
> 這個專案保留了 Karpathy 的設計規則，並在 Apple Silicon 上實現無需 PyTorch 的自動研究。

## 專案簡介

autoresearch-mlx 是 Karpathy 的自動研究算法的 Apple Silicon 移植版，專為 M1/M2/M3/M4 設計。它通過固定時間的自動研究循環，讓 AI 自動調整模型參數，並在每次實驗後進行評估。這個專案不需要 PyTorch 或 CUDA，使用 MLX 進行原生運行，並保留了原始設計規則，如 5 分鐘的實驗時間和單一可變的訓練腳本。與原版相比，這個移植版在 Apple Silicon 上的運行效率更高，特別是對於小型模型的訓練。這個專案適合希望在 Apple 硬體上進行自動化研究的開發者，值得一試。

**技術棧**：`Python` · `MLX`

## 重點功能

- 無需 PyTorch 或 CUDA，原生支持 Apple Silicon。
- 固定時間的自動研究循環，提升實驗效率。
- 支持單一可變的訓練腳本，簡化實驗流程。
- 自動評估模型性能，快速迭代。
- 適合小型模型的訓練，充分利用 Apple 硬體的優勢。

## 快速開始

1. 安裝 uv 依賴
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 安裝核心依賴
```bash
uv sync
```
3. 下載資料並訓練分詞器
```bash
uv run prepare.py
```
4. 運行單次訓練實驗
```bash
uv run train.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 Apple Silicon 的普及，對於在這些設備上運行高效能 AI 應用的需求上升，autoresearch-mlx 正好滿足了這一需求。Karpathy 的名氣也吸引了許多開發者的注意，促使這個專案受到關注。

## 適合誰使用

**目標受眾**：希望在 Apple Silicon 上進行自動化 AI 研究的開發者和研究者。

> [!example] 使用場景
> - AI 研究員 用它來 自動化模型調整，因為它能在固定時間內進行多次實驗。
> - 開發者 用它來 測試不同的模型參數，因為它不需要 PyTorch，運行更輕便。
> - 學生 用它來 學習自動化研究的過程，因為它提供了簡單的實驗框架。

## 架構分析

專案採用簡單的三個核心檔案架構，分別負責資料準備、模型訓練和指令設定，讓 AI 自動進行實驗和評估。

## 優缺點分析

> [!success] 優點
> - 無需 PyTorch，簡化安裝過程。
> - 原生支持 Apple Silicon，運行效率高。
> - 固定時間的實驗設計，提升研究效率。

> [!danger] 缺點
> - 僅限於 Apple Silicon 硬體，無法跨平台使用。
> - 目前僅實現 AdamW 優化器，功能有限。
> - 實驗週期較短，可能無法滿足大型模型的需求。

> [!warning] 注意事項
> - 僅支援 Apple Silicon 硬體。
> - 目前僅實現 AdamW 優化器，未來可能擴展。
> - 實驗週期較短，可能不適合大型模型。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Karpathy's autoresearch | 原版需要 PyTorch，而這個版本無需 PyTorch，專為 Apple Silicon 優化。 |
| Ray Tune | Ray Tune 提供更全面的超參數調整，而 autoresearch-mlx 專注於固定時間的自動研究。 |

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

**社群活躍度**：社群活躍度中等，近期有更新和回應。
**連結**：[文件](https://github.com/trevin-creator/autoresearch-mlx#readme)

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

相關概念：[[自動化研究]] · [[模型調整]] · [[Apple Silicon]] · [[無監督學習]] · [[實驗設計]]

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
