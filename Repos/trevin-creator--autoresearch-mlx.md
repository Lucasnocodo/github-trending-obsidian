---
repo: trevin-creator/autoresearch-mlx
url: https://github.com/trevin-creator/autoresearch-mlx
owner: trevin-creator
owner_type: User
language: Python
license: MIT
description: "Apple Silicon (MLX) port of Karpathy's autoresearch — autonomous AI research loops on Mac, no PyTorch required."
homepage: ""
stars: 483
stars_per_day: 242
forks: 69
open_issues: 3
created: 2026-03-08
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "在 Apple Silicon 上實現無需 PyTorch 的自動化 AI 研究循環。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-13"
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
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

**483** stars · **242** stars/天 · 建立 2 天前 · Python · MIT

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 在 Apple Silicon 上實現無需 PyTorch 的自動化 AI 研究循環。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (242 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險)
> **適合** 需要在 Apple Silicon 上進行 AI 研究但不想依賴 PyTorch 的開發者。
> **一句話重點** 這個專案證明了在 Apple Silicon 上進行 AI 研究的可行性，並且不依賴於 PyTorch。

> [!abstract] 核心創新
> 這個專案的創新在於實現了無需 PyTorch 的 Apple Silicon 原生訓練。

## 專案簡介

這個專案是 Karpathy 的 autoresearch 的 Apple Silicon 版本，專為無需 PyTorch 的環境設計。使用者只需編輯 `train.py`，設置一個固定的 5 分鐘訓練預算，然後透過 git 進行版本控制，根據驗證指標 `val_bpb` 決定是否保留變更。整個流程是：用戶編輯 `train.py` → 執行訓練 → 根據 `val_bpb` 決定保留或還原變更。技術上，這個專案使用了 MLX 來實現原生的 Apple Silicon 訓練，避免了 PyTorch 和 CUDA 的依賴，並且在訓練過程中能夠利用統一記憶體。與原版相比，這個版本的訓練速度更快，因為它針對 Apple Silicon 硬體進行了優化，能在 5 分鐘內完成多次訓練迭代。這個工具的設計使得小型模型在固定時間內能夠進行更多的優化步驟，從而超越大型模型的表現。使用者需要一台 Apple Silicon 的 Mac 和 Python 3.10 以上的環境，並安裝 `uv` 來管理依賴。這個專案目前處於 beta 階段，適合對 Apple Silicon 硬體進行 AI 研究的開發者使用。建議在需要快速迭代和測試不同模型配置的情境下使用，但不適合需要大規模分佈式訓練的場景。

**技術棧**：`Python 3.10+` · `MLX`

## 重點功能

- 無需 PyTorch — 使用 MLX 進行原生 Apple Silicon 訓練。
- 固定時間訓練 — 每次訓練預算為 5 分鐘，快速迭代。
- 自動化實驗循環 — 根據 `val_bpb` 決定是否保留變更。
- 簡單的依賴管理 — 使用 `uv` 來安裝和管理依賴。
- 實驗歷史記錄 — 所有實驗結果記錄在 `results.tsv` 中，便於追蹤。

## 快速開始

1. 安裝 uv
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
4. 運行一次訓練實驗
```bash
uv run train.py
```

## 程式碼範例

```bash
# 使用 uv 運行訓練
uv run train.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 trevin-creator 是一位專注於 Apple Silicon 的開發者，這個專案解決了在該平台上進行 AI 研究時的 PyTorch 依賴問題。近期的討論中，許多開發者對於如何在 Apple 硬體上進行高效訓練表達了興趣，這使得這個專案受到關注。由於 Apple Silicon 的性能優勢，這個工具在當前環境下變得更加可行。

## 適合誰使用

**目標受眾**：希望在 Apple Silicon 上進行自主 AI 研究的機器學習工程師。

> [!example] 使用場景
> - AI 研究者用它來快速迭代不同的模型配置，因為它能在 5 分鐘內完成多次訓練，讓研究者能夠迅速找到最佳參數。
> - 獨立開發者用它來在 Apple Silicon 上進行無需 PyTorch 的模型訓練，因為這樣可以減少環境配置的複雜性，專注於模型開發。
> - 學生用它來學習自動化訓練流程，因為它提供了一個簡單的框架來理解 AI 模型的訓練和評估過程。

## 架構分析

這是一個 CLI 工具，專為 Apple Silicon 設計。用戶輸入 → 編輯 `train.py` → 執行訓練 → 根據結果決定保留或還原變更。核心技術選擇了 MLX 來替代 PyTorch，這樣可以充分利用 Apple Silicon 的性能。專案目錄結構中，`prepare.py` 負責數據準備，`train.py` 負責模型訓練，`program.md` 定義了實驗協議。

## 技術深入分析

這個專案的核心技術機制是利用 MLX 進行原生訓練，這樣可以避免 PyTorch 的依賴，並充分利用 Apple Silicon 的統一記憶體特性。它能在固定的 5 分鐘內進行多次訓練迭代，這使得小型模型能夠在短時間內進行更多的優化步驟。效能上，這個工具在小型 Apple Silicon 硬體上表現出色，但在大規模資料上可能會面臨瓶頸。選擇 Python 作為開發語言是因為其在數據科學和機器學習領域的廣泛應用，這樣的選擇使得開發者能夠快速上手，但同時也可能帶來性能上的折衷。技術風險方面，隨著使用者數量的增加，可能會出現 API 不穩定的問題，這需要持續的維護和更新。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且有步驟指引，包含安裝和使用範例。安裝過程相對順暢，但需要確保 Python 版本符合要求。整體上，對於熟悉 Python 的開發者來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 無需 PyTorch，簡化了環境配置。
> - 快速迭代，能在短時間內測試多個模型配置。
> - 原生支持 Apple Silicon，充分利用硬體性能。
> - 自動化實驗流程，降低了手動操作的需求。

> [!danger] 缺點
> - 僅限於 Apple Silicon 硬體，無法在其他平台上運行。
> - 目前處於 beta 階段，可能存在不穩定性。
> - 不支援大規模分佈式訓練，適用於小型實驗。
> - 需要一定的 Python 知識來編輯和運行訓練腳本。

> [!warning] 注意事項
> - 僅支援 Apple Silicon 硬體。
> - 需要 Python 3.10 以上版本。
> - 訓練過程中不支援 PyTorch 或 CUDA。
> - 目前處於 beta 階段，API 可能會變動。

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

相關專案：[[karpathy--autoresearch|karpathy/autoresearch]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[inspatio--worldfm|inspatio/worldfm]] · [[tanishqkumar--ssd|tanishqkumar/ssd]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]] · [[xstongxue--best-skills|xstongxue/best-skills]]

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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

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
