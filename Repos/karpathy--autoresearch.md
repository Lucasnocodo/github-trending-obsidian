---
repo: karpathy/autoresearch
url: https://github.com/karpathy/autoresearch
owner: karpathy
owner_type: User
language: Python
license: N/A
stars: 21345
stars_per_day: 7115
forks: 2695
created: 2026-03-06
first_seen: 2026-03-10
category: "開發工具"
status: to-review
tags:
  - github
  - 開發工具
  - python
---

# autoresearch

**21.3k** stars · **7.1k** stars/天 · 建立 3 天前 · Python · 未標註授權

> [!summary] 一句話摘要
> 自動化的 AI 代理進行單 GPU nanochat 訓練研究。

## 專案簡介

autoresearch 是一個自動化的研究平台，專為單 GPU nanochat 訓練而設計。它利用 AI 代理來執行研究任務，並且能夠在計算集群中自動協作。與傳統的人工研究方式相比，這個工具能夠更高效地進行實驗和數據分析。這個專案非常適合對 AI 研究有興趣的開發者，尤其是在實驗階段的使用者，值得一試。

## 重點功能

- 自動化的 AI 代理進行研究，減少人工干預。
- 支持單 GPU 的 nanochat 訓練，適合資源有限的環境。
- 能夠在計算集群中協作，提升研究效率。

## 快速開始

克隆專案：`git clone https://github.com/karpathy/autoresearch.git`,安裝依賴：`pip install -r requirements.txt`,運行訓練：`python train.py`

## 為什麼值得關注

> [!tip] 爆紅原因
> Karpathy 是知名的 AI 研究者，他的背景讓這個專案受到廣泛關注。它切中當前對自動化研究的需求，尤其是在 AI 領域的快速發展中。

## 適合誰使用

**目標受眾**：對 AI 研究和自動化實驗有興趣的開發者和研究人員。

> [!example] 使用場景
> - 研究人員用它來自動化 nanochat 的訓練，因為這樣可以節省大量的時間和人力。
> - 開發者用它來測試不同的模型配置，因為它能快速提供實驗結果。
> - 學生用它來學習 AI 研究的流程，因為它簡化了實驗的設置和執行。

> [!warning] 注意事項
> 目前僅支援單 GPU 環境，對於大規模訓練可能不夠理想。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | Python |
| 授權 | N/A |
| Stars | 21.3k |
| Forks | 2.7k |
| Issues | 83 |
| 建立日期 | 2026-03-06 |

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

相關概念：[[自動化研究]] · [[AI 代理]] · [[計算集群]]

[GitHub](https://github.com/karpathy/autoresearch)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，21.3k stars
