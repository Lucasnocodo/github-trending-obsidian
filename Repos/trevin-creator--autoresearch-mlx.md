---
repo: trevin-creator/autoresearch-mlx
url: https://github.com/trevin-creator/autoresearch-mlx
owner: trevin-creator
owner_type: User
language: Python
license: MIT
description: "Apple Silicon (MLX) port of Karpathy's autoresearch — autonomous AI research loops on Mac, no PyTorch required."
homepage: ""
stars: 462
stars_per_day: 231
forks: 65
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
---

# autoresearch-mlx

**462** stars · **231** stars/天 · 建立 2 天前 · Python · MIT

`個人專案`

> [!summary] 一句話摘要
> 在 Apple Silicon 上運行 Karpathy 的自動研究，無需 PyTorch。

> [!abstract] 核心創新
> 這個專案的創新在於將自動化研究流程移植到 Apple Silicon，無需依賴 PyTorch。

## 專案簡介

這個專案是 Karpathy 自動研究的 Apple Silicon 移植版本，實現了完全自動化的研究迴圈。使用 Python 實作，並且不依賴 PyTorch 或 CUDA，專為 Apple Silicon 優化。與原版相比，這個版本能夠在 Apple 硬體上無縫運行，方便開發者進行實驗。這是一個值得 Apple Silicon 使用者試用的專案。

**技術棧**：`Python`

## 重點功能

- 完全自動化的研究迴圈，無需手動干預。
- 專為 Apple Silicon 優化，無需 PyTorch 或 CUDA。
- 保留原版的設計規則，易於使用。

## 快速開始

1. 安裝 uv
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 安裝依賴
```bash
uv sync
```
3. 運行單次訓練實驗
```bash
uv run train.py
```
4. 開始自動化研究
```bash
uv run program.md
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在 AI 研究領域有深厚背景，這個專案解決了 Apple 硬體上運行深度學習模型的需求。

## 適合誰使用

**目標受眾**：Apple Silicon 使用者，特別是對 AI 研究有興趣的開發者。

> [!example] 使用場景
> - [AI 研究員] 用它來 在 Apple Silicon 上進行自動化研究，因為這樣可以充分利用硬體性能。
> - [開發者] 用它來 測試新的 AI 模型，因為這樣可以快速迭代和實驗。
> - [學生] 用它來 學習自動化研究流程，因為這樣可以簡化實驗設置。

> [!warning] 注意事項
> 僅支援 Apple Silicon 硬體。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 65 |
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
> Starting from the upstream default configuration an

## 延伸閱讀

相關概念：[[自動化研究]] · [[深度學習]] · [[Apple Silicon]]

[GitHub](https://github.com/trevin-creator/autoresearch-mlx)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，459 stars
