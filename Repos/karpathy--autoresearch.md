---
repo: karpathy/autoresearch
url: https://github.com/karpathy/autoresearch
owner: karpathy
owner_type: User
language: Python
license: N/A
description: "AI agents running research on single-GPU nanochat training automatically"
homepage: ""
stars: 21959
stars_per_day: 7320
forks: 2782
open_issues: 82
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
  - "讓 AI agent 自動進行單 GPU 的 LLM 訓練研究。"
---

# autoresearch

**22.0k** stars · **7.3k** stars/天 · 建立 3 天前 · Python · 未標註授權

> [!summary] 一句話摘要
> 讓 AI agent 自動進行單 GPU 的 LLM 訓練研究。

> [!abstract] 核心創新
> 這個專案的創新在於讓 AI agent 自動修改訓練代碼並進行實驗。

## 專案簡介

Autoresearch 是一個讓 AI agent 自動進行 LLM 訓練的專案，設計上讓 agent 在固定的時間內進行實驗，修改代碼並評估結果。它的核心是透過一個簡化的單 GPU 訓練流程，讓 agent 在不需要人為干預的情況下進行迭代。與其他自動化研究工具不同，這個專案專注於使用 Markdown 文件來指導 agent 的行為，並且允許 agent 自由修改訓練代碼。這種設計使得研究者可以在早上查看 agent 的實驗結果，並且能夠快速迭代模型。雖然目前的實作相對簡單，但對於希望探索自動化研究的開發者來說，這是一個值得嘗試的工具。

**技術棧**：`Python` · `Jupyter Notebook`

## 重點功能

- 自動進行 LLM 訓練實驗，無需人為干預。
- 使用 Markdown 文件指導 agent 的行為。
- 固定的訓練時間限制，促進快速迭代。
- 簡化的單 GPU 訓練流程，降低使用門檻。
- 提供實驗結果的日誌，方便檢視進展。

## 快速開始

1. 準備訓練數據和模型
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
> Karpathy 是 AI 領域的知名人物，這個專案響應了對於自動化研究的需求。隨著 AI 技術的快速發展，對於這樣的工具需求也在上升，尤其是在研究效率的背景下。

## 適合誰使用

**目標受眾**：對於自動化研究和 AI 訓練有興趣的開發者和研究人員。

> [!example] 使用場景
> - 研究人員 用它來 自動化 LLM 訓練，因為這樣可以節省時間並提高效率。
> - 開發者 用它來 測試不同的模型配置，因為 agent 可以自動進行實驗。
> - 學生 用它來 理解 AI 訓練的過程，因為這個工具提供了實際的操作經驗。

## 架構分析

專案包含三個主要文件，分別負責數據準備、訓練和指導 agent 的行為，整體設計簡潔明瞭，易於理解。

## 優缺點分析

> [!success] 優點
> - 自動化訓練過程，節省時間。
> - 使用 Markdown 文件簡化 agent 指導。
> - 固定的訓練時間促進快速迭代。

> [!danger] 缺點
> - 僅支援單 GPU，無法擴展。
> - 功能相對簡單，無法滿足複雜需求。
> - 需要一定的技術背景來設置和使用。

> [!warning] 注意事項
> - 僅支援單 GPU 環境，無法擴展到多 GPU。
> - 需要一定的技術背景來設置和使用。
> - 目前的實作較為簡單，功能有限。

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
> By design, training runs for a **fixed 5-minute time budget** (wall clock, excluding startup/compilation)

## 延伸閱讀

相關概念：[[自動化研究]] · [[AI 訓練]] · [[強化學習]]

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
