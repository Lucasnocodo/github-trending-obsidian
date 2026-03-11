---
repo: karpathy/autoresearch
url: https://github.com/karpathy/autoresearch
owner: karpathy
owner_type: User
language: Python
license: N/A
description: "AI agents running research on single-GPU nanochat training automatically"
homepage: ""
stars: 22679
stars_per_day: 5670
forks: 2870
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
use_case: "讓 AI 自動進行 LLM 訓練實驗，你只需早上查看結果。"
priority: medium
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
aliases:
  - "autoresearch"
  - "karpathy/autoresearch"
  - "讓 AI 自動進行 LLM 訓練實驗，你只需早上查看結果。"
---

# autoresearch

**22.6k** stars · **5.7k** stars/天 · 建立 4 天前 · Python · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 讓 AI 自動進行 LLM 訓練實驗，你只需早上查看結果。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (5.7k stars/day)
> **適合** 希望在單一 NVIDIA GPU 上自動化 LLM 訓練的研究者和開發者。
> **一句話重點** 這個專案展示了如何利用 AI agent 自動化 LLM 訓練，讓研究者能夠專注於結果而非過程。

> [!abstract] 核心創新
> 這個專案的創新在於讓 AI agent 自動修改訓練代碼並進行實驗，實現完全自動化的研究流程。

## 專案簡介

這個專案讓 AI agent 在單一 GPU 上自動進行 LLM 訓練實驗，過程中會不斷修改訓練代碼，並在每次訓練後檢查結果。具體來說，AI agent 每 5 分鐘進行一次訓練，並根據驗證指標（val_bpb）來決定是否保留或丟棄當前模型。技術上，它使用了 PyTorch 和 Muon + AdamW 優化器，並且只需一個 Python 檔案（train.py）來進行所有修改，這使得範圍可控且容易追蹤變更。與其他自動化訓練工具相比，這個專案的獨特之處在於它的固定時間預算設計，讓不同的實驗結果可以直接比較。實際使用中，這種方法可以在一夜之間進行約 100 次實驗，但目前僅支援 NVIDIA GPU，對於其他硬體的支援尚未完善。這個專案仍在發展中，適合對 LLM 訓練有興趣的研究團隊，尤其是小型團隊或獨立開發者。建議在需要快速迭代和實驗的情況下使用，但如果需要更複雜的配置或多 GPU 支援則不適合。

**技術棧**：`Python 3.10` · `PyTorch`

## 重點功能

- 自動化訓練 — AI agent 每 5 分鐘自動修改訓練代碼並進行訓練。
- 固定時間預算 — 每次訓練固定 5 分鐘，方便比較不同實驗結果。
- 簡化設計 — 只需一個 Python 檔案（train.py）進行所有修改，降低複雜度。
- 單一 GPU 支援 — 專為單一 NVIDIA GPU 設計，無需複雜的分散式訓練。
- 驗證指標 — 使用 val_bpb 作為評估標準，確保不同架構的公平比較。

## 快速開始

1. 安裝 uv 專案管理工具
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 安裝依賴項
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

```python
# 開始自動化實驗
Hi have a look at program.md and let's kick off a new experiment! let's do the setup first.
```

## 為什麼值得關注

> [!tip] 爆紅原因
> Karpathy 是知名的 AI 研究者，這個專案切中自動化研究的需求，尤其是在 LLM 領域。隨著 AI 研究的迅速發展，對於能夠自動化實驗的工具需求日益增加。這個專案的推出正好在這個時候，讓許多研究者和開發者感受到它的潛力。

## 適合誰使用

**目標受眾**：希望在單一 NVIDIA GPU 上自動化 LLM 訓練的研究者和開發者。

> [!example] 使用場景
> - AI 研究者用它來自動化 LLM 訓練實驗，因為這樣可以在一夜之間進行約 100 次實驗，節省大量時間。
> - 獨立開發者用它來快速迭代模型架構，因為只需修改一個檔案，且訓練時間固定，易於比較。
> - 小型團隊用它來探索最佳訓練參數，因為不需要複雜的配置和多 GPU 支援，降低了入門門檻。

## 架構分析

這是一個簡單的單體架構，主要由三個檔案組成：prepare.py（數據準備和工具）、train.py（模型和訓練邏輯，供 agent 修改）、program.md（agent 指令）。用戶輸入 → agent 修改 train.py → 執行訓練 → 輸出實驗結果。

## 優缺點分析

> [!success] 優點
> - 簡化的單一檔案修改設計，降低了使用門檻。
> - 固定的訓練時間預算使得實驗結果可比較。
> - 自動化的實驗流程節省了大量時間，特別適合夜間運行。

> [!danger] 缺點
> - 僅限於 NVIDIA GPU，對於其他硬體不友好。
> - 缺乏對多 GPU 或分散式訓練的支援，限制了擴展性。
> - 固定的訓練時間可能不適合所有使用場景，影響結果的可比性。

> [!warning] 注意事項
> - 僅支援 NVIDIA GPU，尚未支援其他硬體平台。
> - 訓練時間固定為 5 分鐘，無法調整以適應不同需求。
> - 不支援分散式訓練，僅適合單一 GPU 環境。
> - 目前仍在開發中，可能存在不穩定性和未來 API 變更。

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

相關專案：[[trevin-creator--autoresearch-mlx|trevin-creator/autoresearch-mlx]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]]

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

- [[2026-03-11|2026-03-11]] — 再次上榜，22.7k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，21.3k stars
