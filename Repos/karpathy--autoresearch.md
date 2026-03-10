---
repo: karpathy/autoresearch
url: https://github.com/karpathy/autoresearch
owner: karpathy
owner_type: User
language: Python
license: N/A
description: "AI agents running research on single-GPU nanochat training automatically"
homepage: ""
stars: 22162
stars_per_day: 7387
forks: 2816
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
  - "讓 AI 自動進行單 GPU nanochat 訓練，實現自主研究。"
---

# autoresearch

**22.2k** stars · **7.4k** stars/天 · 建立 3 天前 · Python · 未標註授權

> [!summary] 一句話摘要
> 讓 AI 自動進行單 GPU nanochat 訓練，實現自主研究。

> [!abstract] 核心創新
> 這個專案讓 AI agent 自主進行訓練和實驗，開創了自動化研究的新方式。

## 專案簡介

這個專案讓 AI agent 能夠在單 GPU 環境下自動進行 nanochat 訓練，透過不斷修改程式碼和訓練模型來優化結果。核心機制是 AI agent 在固定的 5 分鐘內進行訓練，並根據結果決定是否保留或丟棄修改。專案使用 Python 和 Jupyter Notebook，並包含簡化的訓練流程，讓使用者能夠專注於編寫 Markdown 文件來指導 AI agent 的行為。與傳統的手動研究方法相比，這種自動化的方式能夠顯著提高研究效率，並且不需要使用者干預。雖然目前僅支援單 GPU 訓練，但這樣的設計使得使用者能夠在短時間內獲得實驗結果。這個專案非常適合對 AI 研究感興趣的開發者，尤其是希望探索自動化研究的潛力。

**技術棧**：`Python` · `Jupyter Notebook`

## 重點功能

- AI agent 自動修改訓練程式碼。
- 固定的 5 分鐘訓練時間限制。
- 使用 Markdown 文件提供指導和上下文。
- 簡化的單 GPU nanochat 訓練流程。
- 實驗結果以日誌形式記錄，便於查看。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/karpathy/autoresearch.git
```
2. 進入專案目錄
```bash
cd autoresearch
```
3. 運行訓練程式
```bash
python train.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Andrei Karpathy 是 AI 領域的知名人物，對於自動化研究有深入的見解，這使得這個專案能夠吸引大量關注。隨著 AI 技術的迅速發展，對於自動化研究的需求也在上升，這使得這個專案在當前時期特別受到青睞。其獨特的自動化訓練方式也讓許多研究者感到興趣，促使其在社群中快速傳播。

## 適合誰使用

**目標受眾**：對 AI 自動化研究有興趣的開發者和研究者。

> [!example] 使用場景
> - AI 研究者 用它來 自動化模型訓練，因為這樣可以節省時間並獲得更好的結果。
> - 學生 用它來 學習 AI 訓練流程，因為可以觀察 AI agent 如何進行實驗和優化。
> - 開發者 用它來 測試不同的模型參數，因為能夠快速迭代並獲得實驗結果。

## 架構分析

專案採用簡單的結構，主要由 prepare.py 和 train.py 兩個檔案組成，AI agent 會編輯 train.py 來進行訓練。使用者透過 program.md 提供指導，讓 AI agent 知道如何進行實驗。

## 優缺點分析

> [!success] 優點
> - 自動化訓練流程，節省時間和人力。
> - 能夠快速迭代和優化模型參數。
> - 提供清晰的實驗日誌，便於分析結果。

> [!danger] 缺點
> - 僅限於單 GPU 環境，無法利用多 GPU 的計算能力。
> - 需要使用者具備一定的 Python 知識。
> - 對於複雜的模型可能不夠靈活。

> [!warning] 注意事項
> - 僅支援單 GPU 環境，無法擴展到多 GPU。
> - 需要一定的 Python 環境配置。
> - 對於大型模型可能不夠高效。

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
