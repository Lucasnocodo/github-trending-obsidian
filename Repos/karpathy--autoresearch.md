---
repo: karpathy/autoresearch
url: https://github.com/karpathy/autoresearch
owner: karpathy
owner_type: User
language: Python
license: N/A
description: "AI agents running research on single-GPU nanochat training automatically"
homepage: ""
stars: 22033
stars_per_day: 7344
forks: 2796
open_issues: 83
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
  - "category/ai_ml"
  - "lang/python"
aliases:
  - "autoresearch"
  - "karpathy/autoresearch"
  - "讓 AI agents 自動進行單 GPU nanochat 訓練的研究。"
---

# autoresearch

**22.0k** stars · **7.3k** stars/天 · 建立 3 天前 · Python · 未標註授權

> [!summary] 一句話摘要
> 讓 AI agents 自動進行單 GPU nanochat 訓練的研究。

> [!abstract] 核心創新
> 這個專案讓 AI agents 自動進行 LLM 訓練，並能夠自我修改代碼以優化結果。

## 專案簡介

Autoresearch 專案讓 AI agents 在單 GPU 環境下自動進行 LLM 訓練，透過自我修改代碼來優化模型。這個專案的核心在於一個簡化的訓練流程，AI agents 會在固定的 5 分鐘內進行訓練，並根據結果決定是否保留或丟棄修改。與傳統的研究流程相比，這個方法減少了人類干預，讓 AI agents 自主探索最佳的訓練策略。這個專案的設計非常簡潔，僅包含幾個關鍵文件，並且使用 Markdown 文件來指導 AI agents 的行為。這樣的設計使得使用者能夠輕鬆地設定和調整實驗，但也需要注意其對計算資源的需求。總體來說，這是一個前瞻性的專案，適合對自動化研究有興趣的開發者和研究者。

**技術棧**：`Python` · `Jupyter Notebook`

## 重點功能

- 自動化的 LLM 訓練流程
- AI agents 自我修改代碼
- 固定的訓練時間限制
- 簡化的代碼結構
- 使用 Markdown 文件指導 AI agents

## 快速開始

1. 準備數據和環境
```bash
執行 prepare.py 以準備訓練數據
```
2. 開始訓練
```bash
執行 train.py 以開始訓練
```

## 為什麼值得關注

> [!tip] 爆紅原因
> Karpathy 的名氣和對 AI 研究的貢獻使得這個專案受到廣泛關注。隨著 AI 技術的進步，自動化研究的需求日益增加，這個專案正好切中這一點。其獨特的設計理念和實驗方法吸引了許多開發者的興趣。

## 適合誰使用

**目標受眾**：對自動化 AI 研究有興趣的開發者和研究者。

> [!example] 使用場景
> - 研究者 用它來 自動化 LLM 訓練過程，因為這樣可以節省時間並提高效率。
> - 學生 用它來 學習如何設計 AI agents，因為這樣可以獲得實際操作經驗。
> - 開發者 用它來 測試不同的模型參數，因為這樣可以快速迭代和優化。

## 架構分析

專案架構簡單，主要由 prepare.py 和 train.py 組成，數據流是 準備數據 → AI agent 執行訓練 → 訓練結果回報。

## 優缺點分析

> [!success] 優點
> - 自動化訓練過程，節省人力
> - AI agents 能夠自主探索最佳參數
> - 簡單的代碼結構，易於理解

> [!danger] 缺點
> - 僅適用於單 GPU 環境
> - 需要大量計算資源
> - 對新手可能有一定的學習曲線

> [!warning] 注意事項
> - 僅支援單 GPU 環境
> - 需要對 Python 有一定了解
> - 訓練過程可能需要大量計算資源

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 2.8k |
| Open Issues | 83 |
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

相關概念：[[自動化研究]] · [[AI agents]] · [[深度學習]]

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

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，21.3k stars
