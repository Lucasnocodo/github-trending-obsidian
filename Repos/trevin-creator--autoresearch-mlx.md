---
repo: trevin-creator/autoresearch-mlx
url: https://github.com/trevin-creator/autoresearch-mlx
owner: trevin-creator
owner_type: User
language: Python
license: MIT
description: "Apple Silicon (MLX) port of Karpathy's autoresearch — autonomous AI research loops on Mac, no PyTorch required."
homepage: ""
stars: 481
stars_per_day: 241
forks: 69
open_issues: 3
created: 2026-03-08
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "自主研究"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓 Apple Silicon 用戶能在無需 PyTorch 的情況下進行自主 AI 研究迴圈。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
aliases:
  - "autoresearch-mlx"
  - "trevin-creator/autoresearch-mlx"
  - "讓 Apple Silicon 用戶能在無需 PyTorch 的情況下進行自主 AI 研究迴圈。"
---

# autoresearch-mlx

**481** stars · **241** stars/天 · 建立 2 天前 · Python · MIT

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 讓 Apple Silicon 用戶能在無需 PyTorch 的情況下進行自主 AI 研究迴圈。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (241 stars/day)
> **授權** MIT (商業友好)
> **適合** 希望在 Apple Silicon 上進行自主 AI 研究的機器學習工程師。
> **一句話重點** 這個專案讓 Apple Silicon 用戶能夠輕鬆進行自主 AI 研究，無需繁瑣的環境設置。

> [!abstract] 核心創新
> 這個專案的核心創新在於提供無需 PyTorch 的自主 AI 研究迴圈，專為 Apple Silicon 優化。

## 專案簡介

這個專案是 Karpathy 的 autoresearch 的 Apple Silicon 版本，透過 `program.md` 控制固定時間的自主研究迴圈。使用者只需編輯 `train.py`，在 5 分鐘的訓練預算內進行實驗，並根據 `val_bpb` 指標決定是否保留變更。此專案利用 MLX 實現原生 Apple Silicon 訓練，避免了 PyTorch 和 CUDA 的依賴，並且提供了簡化的 AdamW 公共路徑。與其他工具相比，這個專案專注於小型模型的快速訓練，並且在 Apple Silicon 硬體上表現出色，能夠在固定的時間內進行更多的優化步驟。實際測試顯示，使用 Mac Mini 的長期運行能夠找到不同的最佳模型配置，這顯示了硬體特定的行為。這個專案目前處於 beta 階段，適合需要在 Apple Silicon 上進行快速原型開發的團隊。建議對於需要高效訓練和快速迭代的使用者來說，這是一個不錯的選擇，但對於需要更複雜模型的使用者則可能不夠靈活。

**技術棧**：`Python 3.10+` · `MLX`

## 重點功能

- 原生 Apple Silicon 支援 — 無需 PyTorch 或 CUDA，使用 MLX 進行訓練。
- 固定時間的自主研究迴圈 — 每次實驗最多 5 分鐘，透過 `program.md` 控制。
- 簡化的 AdamW 訓練路徑 — 只需編輯 `train.py` 來調整模型和優化器。
- 實驗歷史記錄 — 使用 `results.tsv` 記錄每次實驗的結果，便於追蹤進展。
- 快速數據準備 — 使用 `prepare.py` 進行數據預處理和評估。

## 快速開始

1. 安裝 uv
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
4. 運行一次訓練實驗
```bash
uv run train.py
```

## 程式碼範例

```bash
# 運行一次訓練實驗
uv run train.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> (a) 作者 trevin-creator 是 Karpathy 的追隨者，專注於機器學習領域，這個專案是他對 Karpathy 原始構想的延伸。(b) 這個工具解決了 Apple Silicon 用戶在進行自主 AI 研究時的依賴問題，無需安裝繁瑣的 PyTorch 環境。(c) 最近的討論和推特上對於 Apple Silicon 的支持引起了開發者的注意。(d) 隨著 Apple Silicon 的普及，越來越多的開發者尋求在這個平台上進行高效的機器學習實驗。 

## 適合誰使用

**目標受眾**：希望在 Apple Silicon 上進行自主 AI 研究的機器學習工程師。

> [!example] 使用場景
> - 機器學習工程師用它來在 Apple Silicon 上進行自主模型訓練，因為它不需要安裝 PyTorch，節省了環境配置時間。
> - 研究人員用它來快速迭代模型配置，因為每次實驗只需 5 分鐘，能夠快速找到最佳參數。
> - 獨立開發者用它來測試不同的訓練策略，因為它簡化了訓練流程，讓他們能專注於實驗而不是環境問題。

## 架構分析

這是一個 CLI 工具，核心資料流為：用戶輸入 `train.py` → 處理 → 輸出 `results.tsv`。專案使用 MLX 進行原生訓練，並且結構簡單，主要檔案包括 `prepare.py`、`train.py` 和 `program.md`，這些檔案共同構成了自主研究的基礎。

## 優缺點分析

> [!success] 優點
> - 無需 PyTorch，簡化環境配置。
> - 快速迭代的實驗流程，能在短時間內找到最佳模型。
> - 原生支援 Apple Silicon，充分利用硬體性能。

> [!danger] 缺點
> - 僅限於 Apple Silicon，無法在其他平台使用。
> - 不支援複雜的模型配置，限制了靈活性。
> - 目前處於 beta 階段，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 Apple Silicon 硬體。
> - 需要 Python 3.10 以上版本。
> - 不支援 PyTorch 或 CUDA，無法在其他平台運行。
> - 實驗時間約 6-7 分鐘，包括編譯和評估開銷。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 69 |
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

相關概念：[[自動化]] · [[機器學習]] · [[深度學習]]

相關專案：[[karpathy--autoresearch|karpathy/autoresearch]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，459 stars
