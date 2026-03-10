---
repo: karpathy/autoresearch
url: https://github.com/karpathy/autoresearch
owner: karpathy
owner_type: User
language: Python
license: N/A
description: "AI agents running research on single-GPU nanochat training automatically"
homepage: ""
stars: 21603
stars_per_day: 7201
forks: 2728
open_issues: 80
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
---

# autoresearch

**21.6k** stars · **7.2k** stars/天 · 建立 3 天前 · Python · 未標註授權

> [!summary] 一句話摘要
> 讓 AI agent 自動進行單 GPU nanochat 訓練研究。

> [!abstract] 核心創新
> 這個專案讓 AI agent 自動進行研究，挑戰傳統的研究方式。

## 專案簡介

這個專案讓 AI agent 在單 GPU 環境下自動進行 LLM 訓練，通過不斷修改代碼和訓練來優化模型。使用 Python 和 Jupyter Notebook 實現，並且依賴於簡化的 nanochat 訓練框架。與傳統的研究方法相比，這個專案完全自動化，讓研究者可以專注於結果而非過程。這是一個非常有前景的專案，值得深入探索。

**技術棧**：`Python` · `Jupyter Notebook`

## 重點功能

- 自動化的 LLM 訓練流程。
- 支持多次實驗和結果評估。
- 簡化的單 GPU 實現。

## 為什麼值得關注

> [!tip] 爆紅原因
> Karpathy 在 AI 領域的影響力使得這個專案受到廣泛關注，尤其是它的自動化特性滿足了當前研究的需求。這個專案的獨特性在於它完全依賴 AI agent 進行研究，挑戰了傳統的研究模式。

## 適合誰使用

**目標受眾**：對 AI 訓練和自動化研究感興趣的開發者和研究者。

> [!example] 使用場景
> - [研究者] 用它來 自動化 LLM 訓練過程，因為這樣可以節省時間並提高效率。
> - [開發者] 用它來 測試不同的模型配置，因為這樣可以快速獲得實驗結果。
> - [學生] 用它來 學習 AI 訓練的過程，因為這樣可以在實踐中獲得經驗。

> [!warning] 注意事項
> 僅支援單 GPU 環境。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 2.7k |
| Open Issues | 80 |
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
> The idea: give an AI agent a small but real LLM training setup and let it experiment autonomously overnight. It modifies the code, trains for 5 minutes, checks if the result improved, keeps or discards, and repeats. You wake up in the morning to a log of experiments and (hopefully) a better model. The training code here is a simplified single-GPU implementation of [nanochat](https://github.com/karpathy/nanochat). The core idea is that you're not touching any of the Python files like you normally would as a researcher. Instead, you are programming the `program.md` Markdown files that provide context to the AI agents and set up your autonomous research org. The default `program.md` in this repo is intentionally kept as a bare bones baseline, though it's obvious how one would iterate on it over time to find the "research 

## 延伸閱讀

相關概念：[[自動化研究]] · [[AI 訓練]] · [[LLM 模型]]

[GitHub](https://github.com/karpathy/autoresearch)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，21.3k stars
