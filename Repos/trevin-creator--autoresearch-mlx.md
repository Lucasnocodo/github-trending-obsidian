---
repo: trevin-creator/autoresearch-mlx
url: https://github.com/trevin-creator/autoresearch-mlx
owner: trevin-creator
owner_type: User
language: Python
license: MIT
description: "Apple Silicon (MLX) port of Karpathy's autoresearch — autonomous AI research loops on Mac, no PyTorch required."
homepage: ""
stars: 480
stars_per_day: 240
forks: 68
open_issues: 3
created: 2026-03-08
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓 Apple Silicon 用戶無需 PyTorch 就能自動化 AI 研究流程。"
priority: medium
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
aliases:
  - "autoresearch-mlx"
  - "trevin-creator/autoresearch-mlx"
  - "讓 Apple Silicon 用戶無需 PyTorch 就能自動化 AI 研究流程。"
---

# autoresearch-mlx

**480** stars · **240** stars/天 · 建立 2 天前 · Python · MIT

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 讓 Apple Silicon 用戶無需 PyTorch 就能自動化 AI 研究流程。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (240 stars/day)
> **適合** 需要在 Apple Silicon 上進行 AI 研究但不想依賴 PyTorch 的開發者。
> **一句話重點** 這個專案證明了 Apple Silicon 在 AI 研究中的潛力，並簡化了開發者的工作流程。

> [!abstract] 核心創新
> 這個專案的核心創新在於無需 PyTorch 的 Apple Silicon 原生訓練。

## 專案簡介

這個專案是 Karpathy 的 autoresearch 在 Apple Silicon 上的移植，透過 `program.md` 控制固定時間的自動研究迴圈。用戶只需編輯 `train.py`，在 5 分鐘的訓練預算內進行模型訓練，並根據 `val_bpb` 指標決定是否保留或回退更改。它使用 MLX 框架，無需 PyTorch 或 CUDA，並支援 Python 3.10+。與原版相比，這個移植專注於 Apple Silicon 的特性，提供更快的訓練速度和更高的效率。實際測試顯示，較小的模型在固定時間內能夠比大型模型獲得更好的結果，這是因為它們能在預算內進行更多的優化步驟。這個專案目前處於穩定階段，適合需要在 Apple Silicon 上進行 AI 研究的開發者。建議在需要快速迭代和實驗的情況下使用，但對於需要 PyTorch 生態系統的用戶則不太適合。

**技術棧**：`Python 3.10+` · `MLX`

## 重點功能

- 固定時間訓練迴圈 — 每次訓練預算為 5 分鐘，透過 git 進行版本控制。
- 無需 PyTorch 或 CUDA — 完全在 Apple Silicon 上運行，使用 MLX 框架。
- 自動化實驗協議 — 使用 `program.md` 定義實驗流程，簡化操作。
- 數據準備和評估 — `prepare.py` 負責數據處理和評估，保持固定。
- 簡化的訓練路徑 — `train.py` 只使用 AdamW 優化器，降低配置複雜度。

## 快速開始

1. 安裝 uv 工具
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 安裝依賴項
```bash
uv sync
```
3. 準備數據和分詞器
```bash
uv run prepare.py
```
4. 運行一次 5 分鐘的訓練實驗
```bash
uv run train.py
```

## 程式碼範例

```bash
uv run train.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 trevin-creator 專注於 Apple Silicon 的優化，滿足了對無需 PyTorch 的輕量化 AI 研究需求。隨著 Apple Silicon 的普及，這個專案能夠讓更多開發者利用其硬體優勢進行 AI 開發。這個移植的推出正好契合了使用者對於高效能和簡化環境的需求。

## 適合誰使用

**目標受眾**：需要在 Apple Silicon 上進行 AI 研究但不想依賴 PyTorch 的開發者。

> [!example] 使用場景
> - 資料科學家用它來在 Apple Silicon 上快速測試不同的模型配置，因為它能在固定時間內自動化實驗流程，節省了手動調整的時間。
> - 機器學習工程師用它來進行模型優化，因為它提供了簡單的版本控制和自動回退機制，避免了不必要的錯誤。
> - 獨立開發者用它來在 Mac 上進行 AI 研究，因為無需安裝複雜的 PyTorch 環境，降低了入門門檻。

## 架構分析

專案採用單體架構，使用者透過編輯 `train.py` 來調整模型，然後執行 `uv run train.py` 進行訓練。數據流從用戶輸入（修改 `train.py`）→ 處理（訓練模型）→ 輸出（評估結果）。關鍵技術決策是使用 MLX 取代 PyTorch/CUDA，專案目錄中包含 `prepare.py`、`train.py` 和 `program.md` 等重要檔案。

## 優缺點分析

> [!success] 優點
> - 無需安裝複雜的 PyTorch 環境，簡化了開發流程。
> - 能夠充分利用 Apple Silicon 的硬體優勢，提供高效能訓練。
> - 自動化的實驗迴圈減少了手動調整的時間，提升了工作效率。

> [!danger] 缺點
> - 目前僅支援 Apple Silicon，對其他平台無法使用。
> - 缺乏對 PyTorch 生態系統的支持，限制了某些功能。
> - MFU 報告不完整，無法提供詳細的性能指標。

> [!warning] 注意事項
> - 僅支援 Apple Silicon 硬體。
> - 需要 Python 3.10+ 環境。
> - 目前不支援 Windows 系統。
> - MFU 報告為佔位符，缺乏詳細的性能指標。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 68 |
| Open Issues | 3 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 51 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@trevin-creator](https://github.com/trevin-creator) | 4 |

## README 摘錄

> [!info]- 展開查看原文 README
> # autoresearch-mlx
> 
> Apple Silicon (MLX) port of [Karpathy's autoresearch](https://github.com/karpathy/autoresearch).
> 
> Full credit to [@karpathy](https://github.com/karpathy) for the core idea: fixed-time autonomous research loops controlled through `program.md`. This port keeps the same basic rules: one mutable `train.py`, one metric (`val_bpb`), a fixed 5-minute training budget, and keep-or-revert via git. It runs natively on Apple Silicon through [MLX](https://github.com/ml-explore/mlx), so there is no PyTorch or CUDA dependency.
> 
> ## Quick start
> 
> Requirements: Apple Silicon Mac, Python 3.10+, [uv](https://docs.astral.sh/uv/).
> 
> ```bash
> # install uv if needed
> curl -LsSf https://astral.sh/uv/install.sh | sh
> 
> # install dependencies
> uv sync
> 
> # one-time data + tokenizer prep
> uv run prepare.py
> 
> # run one 5-minute training experiment
> uv run train.py
> ```
> 
> Then point Claude Code or another coding agent at `program.md` and let it run the loop.
> 
> ## What matters
> 
> - `prepare.py` - data prep, tokenizer, dataloader, and evaluation. Treat as fixed.
> - `train.py` - model, optimizer, and training loop. This is the file the agent edits.
> - `program.md` - the autonomous experiment protocol.
> - `results.tsv` - logged experiment history.
> 
> The loop is the same as upstream: edit `train.py`, run a fixed-budget experiment, read `val_bpb`, keep the change if it wins, revert if it loses, and repeat.
> 
> ## Public baseline results
> 
> The public `results.tsv` captures the initial hardware-local walk from the default baseline down to `1.807902`:
> 
> | Commit | val_bpb | Status | Description |
> |---|---:|---|---|
> | `383abb4` | 2.667000 | keep | baseline (AdamW, default config) |
> | `909dd59` | 2.588904 | keep | halve total batch size to `2^16` |
> | `4161af3` | 2.533728 | keep | increase matrix LR to `0.04` |
> | `5efc7aa` | 1.807902 | keep | reduce depth from `8` to `4` |
> 
> That result already shows the core Apple Silicon pattern: with a fixed 5-minute wall clock, smaller faster-training models can beat larger ones simply by fitting more optimizer steps into the budget.
> 
> ## Longer Apple Silicon runs
> 
> Longer overnight runs on the working MLX port pushed much further. The long Mac Mini test is included here because it found a meaningfully different winner stack from the Max-class machines.
> 
> | Machine | Current best | Starting point | Repeated wins |
> |---|---:|---:|---|
> | M4 Max #1 | 1.294526 | 1.596971 | AdamW-only, low matrix LR, 3x MLP, no logit cap, moderate weight decay |
> | M4 Max #2 | 1.330509 | 1.807902 | leaner batch, long anneal, SiLU, lower regularization, no logit cap |
> | Mac Mini (long run) | 1.353329 | 1.922472 | Muon, sharper attention, smaller MLP, lower scalar LR |
> 
> The Mac Mini result matters because it did not just rediscover the same exact recipe. On smaller Apple Silicon hardware, the strongest changes leaned toward more aggressive step-efficiency wins. Later transfer tests showed some of those Mac Mini findings did not carry cleanly onto the Max baseline, which is exactly the kind of hardware-specific behavior this loop is useful for uncovering.
> 
> ## Differences from upstream
> 
> - **MLX instead of PyTorch/CUDA.** Native Apple Silicon training with unified memory.
> - **AdamW-only public path.** This public `train.py` keeps the default path simple. The long Mac Mini run above explored a Muon variant in the working port, but that branch is not exposed as a public default here.
> - **Smaller eval token budget.** Reduced for faster iteration on Apple Silicon while keeping the same `evaluate_bpb` interface in `prepare.py`.
> - **Roughly 6-7 minutes per experiment.** Expect 5 minutes of training plus compile and eval overhead.
> - **MFU reporting is placeholder.** There is no Apple Silicon equivalent to the H100 FLOPs reference used upstream.
> 
> ## Acknowledgments
> 
> - [Andrej Karpathy](https://github.com/karpathy) - autoresearch and nanochat
> - [scasella/nanochat-mlx](https://github.com/scasella/nanochat-mlx) - MLX GPT and optimizer reference
> - [awni/picochat](https://github.c

## 延伸閱讀

相關概念：[[自動化測試]] · [[機器學習]] · [[深度學習]]

[GitHub](https://github.com/trevin-creator/autoresearch-mlx)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "trevin-creator--autoresearch-mlx"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "trevin-creator--autoresearch-mlx"
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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，459 stars
