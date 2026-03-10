---
repo: trevin-creator/autoresearch-mlx
url: https://github.com/trevin-creator/autoresearch-mlx
owner: trevin-creator
owner_type: User
language: Python
license: MIT
description: "Apple Silicon (MLX) port of Karpathy's autoresearch — autonomous AI research loops on Mac, no PyTorch required."
homepage: ""
stars: 479
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
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
aliases:
  - "autoresearch-mlx"
  - "trevin-creator/autoresearch-mlx"
  - "讓 Apple Silicon 用戶能在不依賴 PyTorch 的情況下，進行自動化的 AI 研究實驗。"
---

# autoresearch-mlx

**479** stars · **240** stars/天 · 建立 2 天前 · Python · MIT

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 讓 Apple Silicon 用戶能在不依賴 PyTorch 的情況下，進行自動化的 AI 研究實驗。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (240 stars/day)
> **適合** 希望在 Apple Silicon 上進行 AI 研究但不想依賴 PyTorch 的獨立開發者。
> **一句話重點** 這個專案讓 Apple Silicon 用戶能夠輕鬆進行自動化 AI 研究，無需繁瑣的依賴設置。

> [!abstract] 核心創新
> 這個專案的核心創新在於無需 PyTorch 即可在 Apple Silicon 上進行高效的自動化 AI 研究。

## 專案簡介

這個專案是 Karpathy 的 autoresearch 的 Apple Silicon 移植版本，透過 `program.md` 控制固定時間的自動研究迴圈。使用者只需編輯 `train.py`，每 5 分鐘進行一次訓練實驗，並根據 `val_bpb` 指標決定是否保留變更，這樣的迴圈可以持續進行。專案依賴於 MLX，實現了無需 PyTorch 或 CUDA 的原生訓練，並且支援 Python 3.10 以上版本。與傳統的 autoresearch 相比，它簡化了訓練過程，並且專注於 Apple Silicon 的性能優化。這個工具在小型硬體上表現出色，能夠在固定的時間內進行更多的優化步驟，從而提高訓練效率。根據公開的基準結果，最好的模型在 5 分鐘內達到了 `1.294526` 的 `val_bpb`，顯示出小型模型在時間限制下的優勢。這個專案目前處於穩定階段，適合需要在 Apple Silicon 環境中進行快速實驗的開發者。建議在需要快速迭代和不依賴重型框架的情況下使用，若需更複雜的模型或依賴於 CUDA 的功能則不適合。

**技術棧**：`Python 3.10+` · `MLX`

## 重點功能

- 無需 PyTorch 或 CUDA — 透過 MLX 實現原生 Apple Silicon 訓練。
- 固定時間的自動化實驗 — 每次實驗限制在 5 分鐘內，快速迭代。
- 簡化的訓練流程 — 使用 `train.py` 和 `program.md` 控制實驗。
- 公開基準結果 — 提供 `results.tsv` 以追蹤實驗歷史和性能。
- 小型模型優化 — 在固定時間內能進行更多優化步驟，提升訓練效率。

## 快速開始

1. 安裝 uv 工具
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 安裝依賴
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

```python
# 編輯 train.py 以進行模型訓練
# 然後運行訓練實驗
uv run train.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 trevin-creator 是一位專注於 Apple Silicon 的開發者，這個專案切中 Apple 硬體用戶對於無需 PyTorch 的需求。隨著 Apple Silicon 的普及，越來越多的開發者尋求能在其平台上高效運行的工具，這使得 autoresearch-mlx 在社群中受到關注。

## 適合誰使用

**目標受眾**：希望在 Apple Silicon 上進行 AI 研究但不想依賴 PyTorch 的獨立開發者。

> [!example] 使用場景
> - AI 研究員用它來在 Apple Silicon 上自動化訓練模型，因為這樣可以在不安裝重型依賴的情況下快速迭代。
> - 機器學習工程師用它來探索不同的模型架構和超參數，因為它的固定時間實驗設計能有效提升訓練效率。
> - 獨立開發者用它來在 Mac 上進行 AI 研究，因為它簡化了環境設置，讓他們專注於實驗而非配置。

## 架構分析

這是一個 CLI 工具，架構為單體應用。用戶輸入 → 編輯 `train.py` → 運行實驗 → 輸出結果到 `results.tsv`。關鍵技術決策是使用 MLX 進行原生訓練，專案目錄結構包含 `train.py`、`prepare.py` 和 `program.md` 等核心檔案。

## 優缺點分析

> [!success] 優點
> - 無需重型依賴，簡化環境設置。
> - 固定時間的自動化實驗設計，提升效率。
> - 專注於 Apple Silicon 硬體的性能優化，適合小型模型。
> - 公開基準結果，便於用戶追蹤實驗歷史。

> [!danger] 缺點
> - 僅支援 Apple Silicon 硬體，無法在其他平台上運行。
> - 不支援 CUDA，限制了某些高效能需求。
> - MFU 報告不完整，無法提供全面的性能指標。
> - 需要 Python 3.10 以上版本，對於舊版用戶不友好。

> [!warning] 注意事項
> - 僅支援 Apple Silicon 硬體。
> - 需要 Python 3.10 以上版本。
> - MFU 報告目前為佔位符，未提供完整的性能指標。
> - 不支援 CUDA 或其他 GPU 加速方案。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 68 |
| Open Issues | 3 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 58 KB |

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
