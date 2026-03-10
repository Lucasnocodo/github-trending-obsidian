---
repo: karpathy/autoresearch
url: https://github.com/karpathy/autoresearch
owner: karpathy
owner_type: User
language: Python
license: N/A
description: "AI agents running research on single-GPU nanochat training automatically"
homepage: ""
stars: 21740
stars_per_day: 7247
forks: 2745
open_issues: 81
created: 2026-03-06
pushed_at: 2026-03-09
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
aliases:
  - "autoresearch"
  - "karpathy/autoresearch"
  - "讓 AI agents 自動進行 LLM 訓練實驗。"
---

# autoresearch

**21.7k** stars · **7.2k** stars/天 · 建立 3 天前 · Python · 未標註授權

> [!summary] 一句話摘要
> 讓 AI agents 自動進行 LLM 訓練實驗。

> [!abstract] 核心創新
> 讓 AI agents 自動進行實驗，無需人類干預。

## 專案簡介

Autoresearch 專案讓 AI agents 在一個簡化的 LLM 訓練環境中自動進行實驗，透過修改代碼、訓練模型並檢查結果來優化模型。這個專案的核心機制是讓 AI agents 在固定的時間內（5 分鐘）進行訓練，並根據結果決定是否保留或丟棄修改。它使用 Python 和 Jupyter Notebook，並依賴於簡化的 nanochat 訓練代碼。與傳統的研究方式相比，這個專案讓研究者不需要手動干預，而是透過 Markdown 文件來指導 AI agents 的行為。這樣的設計使得研究過程更加自動化，但也可能面臨模型訓練的時間限制和資源需求。總體而言，這是一個創新的自動化研究工具，適合對 AI 訓練有興趣的開發者和研究者。

**技術棧**：`Python` · `Jupyter Notebook`

## 重點功能

- 自動化的 LLM 訓練實驗流程。
- 固定的訓練時間限制（5 分鐘）。
- 使用 Markdown 文件來指導 AI agents 的行為。
- 簡化的 nanochat 訓練代碼，易於修改。
- 實驗結果的自動記錄和分析。

## 快速開始

1. 準備訓練環境
```bash
python prepare.py
```
2. 開始訓練
```bash
python train.py
```
3. 查看實驗結果
```bash
cat results.log
```

## 為什麼值得關注

> [!tip] 爆紅原因
> Karpathy 是 AI 領域的知名人物，這個專案響應了對自動化研究的需求，特別是在 LLM 訓練方面。隨著 AI 技術的發展，對於自動化實驗的需求日益增加，這使得此專案在短時間內受到關注。

## 適合誰使用

**目標受眾**：對 AI 訓練和自動化研究有興趣的開發者和研究者。

> [!example] 使用場景
> - AI 研究者 用它來 自動化 LLM 訓練實驗，因為這樣可以節省時間和資源。
> - 開發者 用它來 測試不同的模型架構，因為可以快速迭代和獲取結果。
> - 學生 用它來 學習如何設置和運行 AI 訓練，因為這樣可以獲得實踐經驗。

## 架構分析

專案由三個主要文件組成，分別負責數據準備、訓練和指導 AI agents 的 Markdown 文件，形成一個簡化的自動化訓練流程。

## 優缺點分析

> [!success] 優點
> - 自動化流程大幅減少了人力需求。
> - 能夠快速迭代和測試不同的模型架構。

> [!danger] 缺點
> - 僅限於單 GPU 環境，資源需求較高。
> - 訓練時間限制可能影響結果的穩定性。

> [!warning] 注意事項
> - 僅支援單 GPU 環境。
> - 訓練時間限制可能影響模型性能。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 2.7k |
| Open Issues | 81 |
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
> By design, training runs for a **fixed 5-minute time budget** (wall clock, excluding startup/compilation)

## 延伸閱讀

相關概念：[[自動化研究]] · [[AI 訓練]] · [[LLM]]

[GitHub](https://github.com/karpathy/autoresearch)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，21.3k stars
