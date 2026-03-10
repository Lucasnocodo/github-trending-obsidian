---
repo: karpathy/autoresearch
url: https://github.com/karpathy/autoresearch
owner: karpathy
owner_type: User
language: Python
license: N/A
description: "AI agents running research on single-GPU nanochat training automatically"
homepage: ""
stars: 22525
stars_per_day: 5631
forks: 2859
open_issues: 69
created: 2026-03-06
pushed_at: 2026-03-09
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
  - "autoresearch"
  - "karpathy/autoresearch"
  - "讓 AI 自動進行單 GPU 的 nanochat 訓練實驗，早上醒來就能看到結果。"
---

# autoresearch

**22.5k** stars · **5.6k** stars/天 · 建立 4 天前 · Python · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 讓 AI 自動進行單 GPU 的 nanochat 訓練實驗，早上醒來就能看到結果。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (5.6k stars/day)
> **適合** 希望在單 GPU 環境下進行自動化 LLM 訓練的 AI 研究者和開發者。
> **一句話重點** 這個專案展示了如何利用 AI agent 自動化 LLM 訓練，為研究者提供了一個全新的實驗方式。

> [!abstract] 核心創新
> 這個專案的核心創新在於讓 AI agent 自動進行 LLM 訓練實驗，並在固定時間內找到最佳模型配置。

## 專案簡介

這個專案讓 AI agent 在單一 GPU 上自動進行 LLM 訓練實驗，過程中它會修改訓練代碼、訓練 5 分鐘、檢查結果並決定是否保留變更，最終生成實驗日誌。核心技術使用 Python 和 Jupyter Notebook，並依賴於 PyTorch 進行模型訓練，訓練時間固定為 5 分鐘，使用 val_bpb 作為評估指標。與傳統的手動調參方式相比，這種自動化方法能夠在短時間內進行大量實驗，並且每次實驗的結果可直接比較。雖然目前僅支援 NVIDIA GPU，但設計上簡化了依賴，適合快速迭代和實驗。這個專案目前仍在 alpha 階段，適合對 AI 研究有興趣的開發者和研究者使用。建議在需要快速實驗和迭代的情況下使用，但不適合需要高效能計算的場景。

**技術棧**：`Python 3.10+` · `PyTorch`

## 重點功能

- 自動化實驗 — AI agent 自動修改 train.py 進行訓練，無需手動介入。
- 固定訓練時間 — 每次訓練固定 5 分鐘，便於實驗結果比較。
- 簡化設置 — 只需一個 NVIDIA GPU 和簡單的 Python 環境即可運行。
- 基於 Markdown 的指令 — 使用 program.md 文件來設定 AI agent 的行為。
- 單一文件修改 — agent 僅修改 train.py，保持代碼範圍可控。

## 快速開始

1. 安裝 uv 專案管理器
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 安裝依賴
```bash
uv sync
```
3. 下載數據並訓練分詞器
```bash
uv run prepare.py
```
4. 手動運行一次訓練實驗
```bash
uv run train.py
```

## 程式碼範例

```python
# 在 program.md 中設定 AI agent 的行為
Hi have a look at program.md and let's kick off a new experiment! let's do the setup first.
```

## 為什麼值得關注

> [!tip] 爆紅原因
> Karpathy 是知名的 AI 研究者，他的專案切中自動化研究的需求，特別是在 LLM 訓練領域。這個專案的獨特性在於它的自動化實驗流程，並且在 AI 研究界引起了廣泛的討論和關注。

## 適合誰使用

**目標受眾**：希望在單 GPU 環境下進行自動化 LLM 訓練的 AI 研究者和開發者。

> [!example] 使用場景
> - AI 研究者用它來自動化 LLM 訓練實驗，因為這樣可以在一夜之間進行多達 100 次實驗，節省大量手動調參的時間。
> - 資料科學家用它來快速迭代模型架構，因為 AI agent 可以在固定時間內自動調整超參數，找到最佳模型配置。
> - 開發者用它來測試不同的訓練策略，因為只需修改 program.md，就能讓 AI agent 自動進行實驗，無需深入代碼。

## 架構分析

這是一個單體架構的專案，主要由三個文件組成：prepare.py 負責數據準備，train.py 是 AI agent 修改的核心訓練代碼，而 program.md 則是提供給 agent 的指令。用戶輸入 → agent 修改 train.py → 執行訓練 → 輸出實驗結果。

## 優缺點分析

> [!success] 優點
> - 自動化實驗流程，節省時間和精力。
> - 固定訓練時間使得實驗結果易於比較。
> - 簡化的設置過程，適合快速上手。

> [!danger] 缺點
> - 僅支援單一 GPU，限制了使用範圍。
> - 固定的訓練時間可能不符合所有用戶需求。
> - 仍在 alpha 階段，穩定性和功能可能不完善。

> [!warning] 注意事項
> - 僅支援單一 NVIDIA GPU，未來可能支援其他平台。
> - 固定的訓練時間限制可能不適合所有情況，無法與其他平台的結果直接比較。
> - 目前仍在 alpha 階段，API 可能會變動。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 2.9k |
| Open Issues | 69 |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-06 |
| Repo 大小 | 255 KB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 83
>     "Jupyter Notebook" : 17
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@karpathy](https://github.com/karpathy) | 23 |
> | [@dipeshbabu](https://github.com/dipeshbabu) | 1 |
> | [@marcinbogdanski](https://github.com/marcinbogdanski) | 1 |
> | [@dumko2001](https://github.com/dumko2001) | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # autoresearch
> 
> *One day, frontier AI research used to be done by meat computers in between eating, sleeping, having other fun, and synchronizing once in a while using sound wave interconnect in the ritual of "group meeting". That era is long gone. Research is now entirely the domain of autonomous swarms of AI agents running across compute cluster megastructures in the skies. The agents claim that we are now in the 10,205th generation of the code base, in any case no one could tell if that's right or wrong as the "code" is now a self-modifying binary that has grown beyond human comprehension. This repo is the story of how it all began. -@karpathy, March 2026*.
> 
> The idea: give an AI agent a small but real LLM training setup and let it experiment autonomously overnight. It modifies the code, trains for 5 minutes, checks if the result improved, keeps or discards, and repeats. You wake up in the morning to a log of experiments and (hopefully) a better model. The training code here is a simplified single-GPU implementation of [nanochat](https://github.com/karpathy/nanochat). The core idea is that you're not touching any of the Python files like you normally would as a researcher. Instead, you are programming the `program.md` Markdown files that provide context to the AI agents and set up your autonomous research org. The default `program.md` in this repo is intentionally kept as a bare bones baseline, though it's obvious how one would iterate on it over time to find the "research org code" that achieves the fastest research progress, how you'd add more agents to the mix, etc. A bit more context on this project is here in this [tweet](https://x.com/karpathy/status/2029701092347630069).
> 
> ## How it works
> 
> The repo is deliberately kept small and only really has a three files that matter:
> 
> - **`prepare.py`** — fixed constants, one-time data prep (downloads training data, trains a BPE tokenizer), and runtime utilities (dataloader, evaluation). Not modified.
> - **`train.py`** — the single file the agent edits. Contains the full GPT model, optimizer (Muon + AdamW), and training loop. Everything is fair game: architecture, hyperparameters, optimizer, batch size, etc. **This file is edited and iterated on by the agent**.
> - **`program.md`** — baseline instructions for one agent. Point your agent here and let it go. **This file is edited and iterated on by the human**.
> 
> By design, training runs for a **fixed 5-minute time budget** (wall clock, excluding startup/compilation), regardless of the details of your compute. The metric is **val_bpb** (validation bits per byte) — lower is better, and vocab-size-independent so architectural changes are fairly compared.
> 
> If you are new to neural networks, this ["Dummy's Guide"](https://x.com/hooeem/status/2030720614752039185) looks pretty good for a lot more context.
> 
> ## Quick start
> 
> **Requirements:** A single NVIDIA GPU (tested on H100), Python 3.10+, [uv](https://docs.astral.sh/uv/).
> 
> ```bash
> 
> # 1. Install uv project manager (if you don't already have it)
> curl -LsSf https://astral.sh/uv/install.sh | sh
> 
> # 2. Install dependencies
> uv sync
> 
> # 3. Download data and train tokenizer (one-time, ~2 min)
> uv run prepare.py
> 
> # 4. Manually run a single training experiment (~5 min)
> uv run train.py
> ```
> 
> If the above commands all work ok, your setup is working and you can go into autonomous research mode.
> 
> ## Running the agent
> 
> Simply spin up your Claude/Codex or whatever you want in this repo (and disable all permissions), then you can prompt something like:
> 
> ```
> Hi have a look at program.md and let's kick off a new experiment! let's do the setup first.
> ```
> 
> The `program.md` file is essentially a super lightweight "skill".
> 
> ## Project structure
> 
> ```
> prepare.py      — constants, data prep + runtime utilities (do not modify)
> train.py        — model, optimizer, training loop (agent modifies this)
> program.md      — agent instructions
> pyproject.toml  — dependencies
> ```
> 
> ## Design choices
> 
> - **Single file to modify.** The a

## 延伸閱讀

相關概念：[[自動化測試]] · [[機器學習]] · [[深度學習]]

[GitHub](https://github.com/karpathy/autoresearch)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "karpathy--autoresearch"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "karpathy--autoresearch"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，21.3k stars
