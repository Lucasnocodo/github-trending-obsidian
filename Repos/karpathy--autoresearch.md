---
repo: karpathy/autoresearch
url: https://github.com/karpathy/autoresearch
owner: karpathy
owner_type: User
language: Python
license: N/A
description: "AI agents running research on single-GPU nanochat training automatically"
homepage: ""
stars: 22857
stars_per_day: 5714
forks: 2910
open_issues: 69
created: 2026-03-06
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "LLM 訓練"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "讓 AI 自動進行單 GPU 的 nanochat 訓練實驗，早上醒來就能看到結果。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
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

**22.9k** stars · **5.7k** stars/天 · 建立 4 天前 · Python · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 讓 AI 自動進行單 GPU 的 nanochat 訓練實驗，早上醒來就能看到結果。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (5.7k stars/day)
> **授權** 未標註授權 (風險較高)
> **適合** 希望在單 GPU 環境下自動化 AI 訓練實驗的研究者和開發者。
> **一句話重點** 這個專案展示了如何利用 AI agent 自動化研究過程，顯著提高實驗效率。

> [!abstract] 核心創新
> 這個專案的創新在於讓 AI agent 自動化調整訓練參數，實現無人值守的研究過程。

## 專案簡介

這個專案的核心在於讓 AI agent 自動化地進行 LLM 訓練，具體流程是：AI agent 在固定的 5 分鐘內修改訓練代碼，進行訓練，然後評估結果並決定是否保留改動。技術上，它使用了 PyTorch 框架，並且訓練過程中依賴於 val_bpb 作為評估指標，這是一個越低越好的指標。與其他工具相比，這個專案的獨特之處在於它的單一文件修改設計，讓 AI agent 只需專注於 train.py，避免了複雜的配置和多文件管理。使用者可以在一個 NVIDIA GPU 上運行，並且設計上支持快速迭代，理論上可以在一夜之間完成約 100 次實驗。這個專案目前處於 beta 階段，適合對 AI 研究感興趣的開發者和研究團隊。建議對於需要快速實驗和迭代的情境使用，但如果需要更高的可擴展性或多 GPU 支持，則不太適合。 

**技術棧**：`Python 3.10+` · `PyTorch`

## 重點功能

- 自動化實驗 — AI agent 在固定 5 分鐘內修改訓練代碼並進行訓練。
- 單一文件修改 — agent 只需編輯 train.py，減少了複雜性。
- 固定時間預算 — 每次訓練都在相同的時間內進行，便於比較結果。
- 簡化的設置 — 只需一個 NVIDIA GPU 和基本的 Python 環境即可運行。
- 基於 val_bpb 評估 — 使用低值作為模型性能的指標，便於比較不同模型。

## 快速開始

1. 安裝 uv 專案管理器
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 安裝依賴項
```bash
uv sync
```
3. 下載數據並訓練 tokenizer
```bash
uv run prepare.py
```
4. 手動運行一次訓練實驗
```bash
uv run train.py
```

## 程式碼範例

```bash
uv run train.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> (a) 作者 Karpathy 是知名的 AI 研究者，曾參與多個重要專案，這使得他的專案受到高度關注。 (b) 這個工具解決了傳統 AI 研究中人力干預過多的問題，通過自動化實驗過程提高效率。 (c) 最近的推文引發了對這個專案的討論，讓更多人關注其潛力。 (d) 目前的技術生態使得單 GPU 訓練變得更加可行，並且對於小型實驗室來說，這是一個理想的選擇。

## 適合誰使用

**目標受眾**：希望在單 GPU 環境下自動化 AI 訓練實驗的研究者和開發者。

> [!example] 使用場景
> - AI 研究者用它來自動化 LLM 訓練實驗，因為這樣可以在一夜之間完成約 100 次實驗，顯著提高研究效率。
> - 開發者用它來快速迭代模型架構，因為只需修改一個文件 train.py，簡化了實驗流程。
> - 學生用它來學習 AI 訓練過程，因為提供了簡單的環境設置和清晰的指令，降低了入門門檻。

## 架構分析

這是一個單體架構專案，核心資料流為：用戶輸入 → AI agent 修改 train.py → 訓練模型 → 輸出結果。專案中關鍵的技術決策是將訓練過程簡化為單一文件的修改，這樣可以讓 AI agent 更專注於模型的優化。專案目錄結構簡單，主要包含 prepare.py、train.py 和 program.md 三個檔案。

## 優缺點分析

> [!success] 優點
> - 簡化的實驗流程，讓研究者能專注於模型優化。
> - 高效的自動化實驗，可以在短時間內進行大量測試。
> - 易於設置，適合小型團隊或個人研究者使用。

> [!danger] 缺點
> - 僅支援單一 GPU，限制了擴展性。
> - 固定的訓練時間可能不適合所有的研究需求。
> - 目前處於 beta 階段，穩定性和功能可能不夠成熟。

> [!warning] 注意事項
> - 僅支援單一 NVIDIA GPU，無法進行分布式訓練。
> - 訓練時間固定為 5 分鐘，可能不適合所有模型和設置。
> - 不支援 CPU 或其他平台，限制了使用範圍。
> - 目前處於 beta 階段，API 和功能可能會變動。

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

相關概念：[[自動化]] · [[機器學習]] · [[深度學習]]

相關專案：[[trevin-creator--autoresearch-mlx|trevin-creator/autoresearch-mlx]] · [[karpathy--agenthub|karpathy/agenthub]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，22.7k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，21.3k stars
