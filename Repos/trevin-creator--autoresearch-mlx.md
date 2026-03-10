---
repo: trevin-creator/autoresearch-mlx
url: https://github.com/trevin-creator/autoresearch-mlx
owner: trevin-creator
owner_type: User
language: Python
license: MIT
description: "Apple Silicon (MLX) port of Karpathy's autoresearch — autonomous AI research loops on Mac, no PyTorch required."
homepage: ""
stars: 459
stars_per_day: 230
forks: 65
open_issues: 3
created: 2026-03-08
first_seen: 2026-03-10
week: "2026-W11"
category: "Other"
release_tag: ""
status: to-review
tags:
  - github
  - other
  - python
---

# autoresearch-mlx

**459** stars · **230** stars/天 · 建立 2 天前 · Python · MIT

> [!summary] 一句話摘要
> Apple Silicon (MLX) port of Karpathy's autoresearch — autonomous AI research loops on Mac, no PyTorch required.

## 專案簡介

Apple Silicon (MLX) port of Karpathy's autoresearch — autonomous AI research loops on Mac, no PyTorch required.

## 為什麼值得關注

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | Python |
| 授權 | MIT |
| Stars | 459 |
| Forks | 65 |
| Issues | 3 |
| 建立日期 | 2026-03-08 |

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

[GitHub](https://github.com/trevin-creator/autoresearch-mlx)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，459 stars
