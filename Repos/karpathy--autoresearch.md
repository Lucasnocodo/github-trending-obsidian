---
repo: karpathy/autoresearch
url: https://github.com/karpathy/autoresearch
owner: karpathy
owner_type: User
language: Python
license: N/A
description: "AI agents running research on single-GPU nanochat training automatically"
homepage: ""
stars: 22395
stars_per_day: 5599
forks: 2843
open_issues: 73
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
  - "讓 AI 自動進行單 GPU 的 nanochat 訓練實驗，早上起來查看結果。"
---

# autoresearch

**22.4k** stars · **5.6k** stars/天 · 建立 4 天前 · Python · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 讓 AI 自動進行單 GPU 的 nanochat 訓練實驗，早上起來查看結果。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (5.6k stars/day)
> **適合** 希望在單 GPU 環境下進行自動化 AI 研究的開發者或研究人員。
> **一句話重點** 這個專案展示了如何利用 AI agent 自動化研究過程，讓研究者能專注於結果而非繁瑣的實驗設置。

> [!abstract] 核心創新
> 這個專案的核心創新在於讓 AI agent 自動進行 LLM 訓練實驗，並通過簡化的代碼結構提升研究效率。

## 專案簡介

這個專案讓 AI agent 在單一 GPU 環境下自動進行 LLM 訓練實驗。它的運作流程是：AI agent 每 5 分鐘修改一次訓練代碼，進行訓練，檢查結果，若有改善則保留，否則回退，直到你早上醒來時看到一份實驗日誌和可能更好的模型。技術上，它使用 Python 和 Jupyter Notebook，並依賴於 PyTorch 進行訓練，使用 Muon 和 AdamW 作為優化器，評估指標為 val_bpb，數值越低越好。與其他類似工具相比，這個專案的獨特之處在於它的自動化程度和固定的訓練時間限制，這使得不同實驗之間的結果可以直接比較。使用者可以在一個簡化的環境中進行大量實驗，約 12 次實驗每小時，整晚可以進行約 100 次實驗。這個專案目前處於 beta 階段，適合對 AI 研究有興趣的中小型團隊。若你希望快速迭代模型並獲得實驗結果，這是一個值得考慮的選擇，但若你需要更複雜的訓練配置或多 GPU 支援，則可能不太適合。

**技術棧**：`Python 3.10` · `PyTorch`

## 重點功能

- 自動化訓練 — AI agent 每 5 分鐘修改訓練代碼並進行訓練，直到達到最佳結果。
- 簡化的代碼結構 — 只需修改 train.py，讓使用者專注於實驗而非繁瑣的配置。
- 固定的時間預算 — 每次訓練固定 5 分鐘，便於比較不同實驗結果。
- 使用 val_bpb 指標 — 評估模型性能的標準化指標，便於比較不同架構。
- 無需複雜配置 — 僅需一個 NVIDIA GPU 和基本的 Python 環境即可運行。

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

## 程式碼範例

```bash
uv run train.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> Karpathy 是 AI 領域的知名人物，他的專案切中自動化研究的需求，尤其是在單 GPU 環境下的實驗管理。隨著 AI 研究的快速發展，這種自動化的方式讓研究者能夠更有效率地進行實驗，這使得專案在短時間內受到關注。

## 適合誰使用

**目標受眾**：希望在單 GPU 環境下進行自動化 AI 研究的開發者或研究人員。

> [!example] 使用場景
> - AI 研究員用它來自動化 LLM 訓練實驗，因為這樣可以在不干預的情況下進行大量實驗，提升研究效率。
> - 學生用它來學習如何調整模型參數，因為 AI agent 的自動調整能讓他們更快掌握模型訓練的要領。
> - 獨立開發者用它來探索不同的模型架構，因為固定的訓練時間讓他們能夠快速比較不同設置的效果。

## 架構分析

這是一個單體架構的專案，核心資料流為：用戶輸入 → AI agent 修改訓練代碼 → 輸出實驗結果。關鍵技術決策是使用固定的訓練時間和簡化的代碼結構，專案目錄結構包含 prepare.py、train.py 和 program.md 三個主要檔案。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，能夠快速進行大量實驗。
> - 簡化的代碼結構，易於使用和維護。
> - 固定的訓練時間使得實驗結果可比較性強。

> [!danger] 缺點
> - 僅支援單一 GPU，對於需要多 GPU 的用戶不友好。
> - 訓練時間固定，可能不適合某些模型的需求。
> - 需要一定的 AI 和機器學習背景才能有效使用。

> [!warning] 注意事項
> - 僅支援單一 NVIDIA GPU，未來可能支援多 GPU。
> - 訓練時間固定為 5 分鐘，可能不適合需要長時間訓練的模型。
> - 需要 Python 3.10 以上版本，對於舊版用戶需升級。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 2.8k |
| Open Issues | 73 |
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

## 社群與生態

**社群活躍度**：社群活躍度高，持續有更新和討論。
**連結**：[文件](https://github.com/karpathy/autoresearch)

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

相關概念：[[機器學習]] · [[自動化測試]]

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
