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
forks: 67
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
  - "在 Apple Silicon 上實現無需 PyTorch 的自動化 AI 研究循環。"
---

# autoresearch-mlx

**479** stars · **240** stars/天 · 建立 2 天前 · Python · MIT

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 在 Apple Silicon 上實現無需 PyTorch 的自動化 AI 研究循環。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (240 stars/day)
> **適合** 希望在 Apple Silicon 上進行 AI 研究但不想依賴 PyTorch 的開發者。
> **一句話重點** 這個專案展示了如何在 Apple Silicon 上無需 PyTorch 進行高效的 AI 研究，為開發者提供了一個新的選擇。

> [!abstract] 核心創新
> 這個專案的核心創新在於無需 PyTorch 的自動化 AI 研究循環，專為 Apple Silicon 優化。

## 專案簡介

這個專案讓使用者能在 Apple Silicon 上進行自動化的 AI 研究循環，透過 `program.md` 控制固定時間的實驗。使用者只需編輯 `train.py`，每次運行 5 分鐘的訓練，根據 `val_bpb` 指標決定是否保留變更，並透過 git 進行版本控制。專案基於 MLX 框架，避免了 PyTorch 和 CUDA 的依賴，確保了在 Apple 硬體上的原生運行。與 Karpathy 的原始版本相比，它簡化了訓練流程，並專注於 AdamW 優化器，並且調整了評估的 token 預算以適應 Apple Silicon 的特性。這使得小型模型能在固定的時間內進行更多的優化步驟，從而獲得更好的結果。實驗數據顯示，使用者可以在不同的 Apple 硬體上獲得不同的最佳結果，這對於硬體特定的行為探索非常有幫助。這個專案目前處於穩定階段，適合需要快速迭代的研究團隊。對於小型團隊或獨立開發者，這是一個值得一試的工具，特別是在 Apple 硬體上進行 AI 研究時。

**技術棧**：`Python 3.10+` · `MLX`

## 重點功能

- 無需 PyTorch — 使用 MLX 框架，實現原生 Apple Silicon 訓練。
- 固定時間實驗 — 每次運行 5 分鐘，快速迭代模型。
- 自動化版本控制 — 透過 git 保留或還原變更。
- 簡化的訓練流程 — 只需編輯 `train.py`，其他部分固定。
- 支持 AdamW 優化器 — 專注於簡化的優化流程。

## 快速開始

1. 安裝 uv 工具
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 安裝依賴
```bash
uv sync
```
3. 準備數據和 tokenizer
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
> 專案由資深開發者 trevin-creator 提供，針對 Apple Silicon 的需求進行了優化，填補了無需 PyTorch 的空白。隨著 Apple Silicon 的普及，越來越多的開發者尋求高效的 AI 訓練解決方案，這使得該專案獲得了關注。

## 適合誰使用

**目標受眾**：希望在 Apple Silicon 上進行 AI 研究但不想依賴 PyTorch 的開發者。

> [!example] 使用場景
> - AI 研究員用它來快速迭代模型訓練，因為它能在 Apple Silicon 上無需 PyTorch 進行自動化實驗，節省了配置時間。
> - 數據科學家用它來探索不同的模型架構，因為它可以在固定的時間內進行多次實驗，幫助找到最佳參數。
> - 獨立開發者用它來在 Mac 上進行 AI 開發，因為它不需要複雜的環境設置，直接運行即可。

## 架構分析

這是一個基於 CLI 的單體架構，使用者透過命令行輸入來控制實驗流程。用戶輸入 → 編輯 `train.py` → 運行實驗 → 根據 `val_bpb` 決定保留或還原變更。關鍵技術決策是使用 MLX 進行原生訓練，專案目錄結構中 `prepare.py` 負責數據準備，`train.py` 負責模型訓練，`program.md` 定義實驗協議。

## 優缺點分析

> [!success] 優點
> - 快速迭代模型訓練，適合需要頻繁調整的研究。
> - 無需複雜的環境設置，降低了使用門檻。
> - 專為 Apple Silicon 優化，充分利用硬體性能。

> [!danger] 缺點
> - 僅限於 Apple Silicon，無法在其他平台使用。
> - 缺乏對 PyTorch 的支持，可能限制某些使用者的選擇。
> - 目前的功能相對簡單，可能不適合需要複雜模型的研究。

> [!warning] 注意事項
> - 僅支援 Apple Silicon 硬體。
> - 需要 Python 3.10+。
> - 評估 token 預算較小，可能影響某些模型的表現。
> - MFU 報告為佔位符，缺乏具體的性能參考。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 67 |
| Open Issues | 3 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 58 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@trevin-creator](https://github.com/trevin-creator) | 4 |

## 社群與生態

**社群活躍度**：社群活躍度中等，主要依賴 GitHub 的問題和討論。

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

相關概念：[[機器學習]] · [[深度學習]] · [[自動化測試]]

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
