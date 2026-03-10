---
repo: karpathy/autoresearch
url: https://github.com/karpathy/autoresearch
owner: karpathy
owner_type: User
language: Python
license: N/A
description: "AI agents running research on single-GPU nanochat training automatically"
homepage: ""
stars: 22213
stars_per_day: 7404
forks: 2821
open_issues: 82
created: 2026-03-06
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
aliases:
  - "autoresearch"
  - "karpathy/autoresearch"
  - "讓 AI 自動進行單 GPU nanochat 訓練實驗，早上起來就能看到結果。"
---

# autoresearch

**22.2k** stars · **7.4k** stars/天 · 建立 3 天前 · Python · 未標註授權

> [!summary] 一句話摘要
> 讓 AI 自動進行單 GPU nanochat 訓練實驗，早上起來就能看到結果。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (7.4k stars/day)
> **適合** 希望自動化 LLM 訓練流程的研究者，並擁有單 GPU 環境的開發者。
> **一句話重點** 這個專案展示了 AI 如何能夠自動化研究過程，讓研究者能專注於更高層次的思考。

> [!abstract] 核心創新
> 這個專案提供了一種全新的方式，讓 AI agent 自動進行 LLM 訓練實驗，並根據結果自我調整。

## 專案簡介

這個專案的核心在於讓 AI agent 自動進行 LLM 訓練實驗，使用者只需設定一個 Markdown 文件，AI 會根據這些指示進行實驗。它的運作流程是：AI agent 每 5 分鐘修改一次訓練代碼，進行訓練，然後根據結果決定是否保留變更。技術上，專案使用了 Python 和 Jupyter Notebook，並依賴於 NVIDIA GPU 和 PyTorch。與其他自動化訓練工具相比，這個專案的特點在於它的單一檔案修改設計，讓 AI agent 只需關注 `train.py`，而不必處理其他複雜的配置。這樣的設計使得實驗的可比性更高，並且能夠在固定的時間預算內找到最佳模型。使用者可以在一個晚上進行約 100 次實驗，這對於希望快速迭代的研究者來說非常有幫助。專案目前處於 alpha 階段，但其創新性和潛在的研究效率提升使其值得一試。建議在需要快速迭代模型的情況下使用，但如果不具備單 GPU 環境，則不適合。

**技術棧**：`Python 3.10` · `Jupyter Notebook` · `PyTorch`

## 重點功能

- 自動化訓練 — 讓 AI agent 每 5 分鐘修改訓練代碼並進行訓練。
- 簡化設計 — 只需修改 `train.py`，其他檔案不需變動。
- 固定時間預算 — 每次訓練固定 5 分鐘，便於比較實驗結果。
- 使用 Markdown 指令 — 使用者可通過 `program.md` 設定 AI agent 的行為。
- 單 GPU 支援 — 專為單 NVIDIA GPU 環境設計，簡化了配置。

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
4. 手動運行單次訓練實驗
```bash
uv run train.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Andrej Karpathy 是知名的 AI 研究者，這個專案切中對於自動化研究的需求。隨著 AI 研究的快速發展，對於高效實驗的需求日益增加，這使得這個專案在社群中受到關注。

## 適合誰使用

**目標受眾**：希望自動化 LLM 訓練流程的研究者，並擁有單 GPU 環境的開發者。

> [!example] 使用場景
> - AI 研究者用它來自動化 LLM 訓練實驗，因為這樣可以在一夜之間進行約 100 次實驗，顯著提高研究效率。
> - 數據科學家用它來探索不同模型架構，因為 AI agent 可以自動調整超參數，節省大量手動調整的時間。
> - 學生用它來學習 LLM 訓練流程，因為簡化的設計使得他們能專注於核心概念，而不必處理複雜的配置。

## 優缺點分析

> [!success] 優點
> - 自動化實驗流程，顯著提高研究效率。
> - 簡化的設計讓使用者能專注於核心研究問題。
> - 固定時間預算使得實驗結果可比性高。

> [!danger] 缺點
> - 僅限於單 GPU 環境，對於資源有限的使用者不友好。
> - 需要一定的技術背景來設置和運行。
> - 目前處於 alpha 階段，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援單 NVIDIA GPU，無法在 CPU 或其他平台運行。
> - 需要 Python 3.10+ 和特定的依賴，安裝過程可能較為繁瑣。
> - 目前處於 alpha 階段，API 可能不穩定。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 2.8k |
| Open Issues | 82 |
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
> LIST
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "karpathy--autoresearch"
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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，21.3k stars
