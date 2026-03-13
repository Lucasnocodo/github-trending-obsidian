---
repo: karpathy/autoresearch
url: https://github.com/karpathy/autoresearch
owner: karpathy
owner_type: User
language: Python
license: N/A
description: "AI agents running research on single-GPU nanochat training automatically"
homepage: ""
stars: 28887
stars_per_day: 4815
forks: 3816
open_issues: 100
created: 2026-03-06
pushed_at: 2026-03-11
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
use_case: "讓 AI 自動進行單 GPU 的 LLM 訓練實驗，早上醒來就能看到結果。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-16"
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-13:28887"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
aliases:
  - "autoresearch"
  - "karpathy/autoresearch"
  - "讓 AI 自動進行單 GPU 的 LLM 訓練實驗，早上醒來就能看到結果。"
---

# autoresearch

**23.0k** stars · **5.7k** stars/天 · 建立 4 天前 · Python · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 讓 AI 自動進行單 GPU 的 LLM 訓練實驗，早上醒來就能看到結果。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (5.7k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** 4+ 人
> **適合** 希望在單一 NVIDIA GPU 上進行自動化 LLM 訓練的研究者和開發者。
> **一句話重點** 這個專案展示了 AI agent 在自動化研究中的潛力，讓人類可以專注於結果而非過程。

> [!abstract] 核心創新
> 專案的創新在於讓 AI agent 自動化進行 LLM 訓練實驗，無需人為干預。

## 專案簡介

這個專案的核心在於讓 AI agent 自動化進行 LLM 訓練實驗，具體流程是：AI agent 讀取 `program.md` 設定，修改 `train.py` 進行訓練，並在 5 分鐘內完成一次實驗，最後將結果記錄下來。技術上，專案使用 Python 和 Jupyter Notebook，並依賴於 PyTorch 進行模型訓練，訓練的效果以 val_bpb（驗證每位元組位數）來衡量，數值越低越好。與其他工具相比，這個專案的獨特之處在於它只針對單一檔案 `train.py` 進行修改，這樣可以保持實驗的可比較性，並且每次訓練都在固定的 5 分鐘內進行，這樣的設計使得不同的模型架構和超參數變更能夠公平比較。雖然這樣的設計限制了與其他平台的比較，但卻能在特定硬體上找到最佳模型。該專案目前僅支援 NVIDIA GPU，且不支援分布式訓練，這使得它的安裝和使用相對簡單。這個專案的成熟度為 beta，適合希望在單 GPU 環境下進行 LLM 訓練的研究者和開發者。對於小型團隊或個人開發者來說，這是一個值得嘗試的工具，但在大型研究項目中可能會受到硬體限制的影響。

**技術棧**：`Python 3.10+` · `PyTorch`

## 重點功能

- 自動化訓練 — AI agent 自動修改 `train.py`，進行訓練和實驗。
- 固定時間預算 — 每次訓練都在 5 分鐘內完成，便於比較不同實驗結果。
- 簡化的專案結構 — 只需關注 `train.py` 和 `program.md`，降低使用門檻。
- 使用 val_bpb 衡量模型效果 — 提供一個標準化的評估指標，便於比較。
- 支援單一 NVIDIA GPU — 專為單 GPU 環境設計，簡化安裝和使用。

## 快速開始

1. 安裝 uv 專案管理器
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```
2. 安裝依賴
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
# 啟動訓練
uv run train.py
# 預期輸出：模型訓練結果和 val_bpb 數據
```

## 為什麼值得關注

> [!tip] 爆紅原因
> Karpathy 是知名的 AI 研究者，曾參與多個重要的開源專案，這次的 autoresearch 專案解決了傳統 LLM 訓練過程中人力介入的繁瑣，讓 AI 自動進行實驗。最近在社群媒體上引發的討論，尤其是 Karpathy 的推文，讓這個專案受到更多關注。隨著單 GPU 訓練的需求上升，這個工具的實用性也變得更加明顯。

## 適合誰使用

**目標受眾**：希望在單一 NVIDIA GPU 上進行自動化 LLM 訓練的研究者和開發者。

> [!example] 使用場景
> - AI 研究員用它來自動化 LLM 訓練實驗，因為可以在一夜之間進行多達 100 次實驗，節省了大量手動調整的時間。
> - 獨立開發者用它來快速迭代模型設計，因為只需修改 `program.md`，就能讓 AI agent 自動調整訓練參數。
> - 教育工作者用它來教導學生如何進行機器學習實驗，因為簡化的設計讓學生能專注於實驗結果而非繁瑣的程式碼細節。

## 架構分析

這是一個單體架構的專案，核心資料流為：用戶輸入 `program.md` → AI agent 修改 `train.py` → 輸出訓練結果。關鍵技術決策是設計一個簡單的專案結構，讓使用者專注於實驗而非繁瑣的配置。專案目錄結構包含 `prepare.py`、`train.py` 和 `program.md`，這三個檔案是運行的核心。

## 技術深入分析

這個專案的核心技術機制在於使用 AI agent 自動修改 `train.py` 進行 LLM 訓練，並以 val_bpb 作為評估指標。專案設計上，每次訓練都在固定的 5 分鐘內進行，這樣的設計使得不同的模型和超參數變更能夠公平比較。由於專案只依賴於 PyTorch 和少量小型包，這使得安裝和使用變得相對簡單。選擇 Python 作為主要語言的好處在於其廣泛的生態系統和社群支持，但也可能導致性能瓶頸，特別是在大型模型訓練時。隨著使用者數量的增加，如何擴展到多 GPU 或其他平台將是未來的挑戰，這可能會導致技術債的累積。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含必要的安裝指令和使用範例，讓新手能夠快速上手。安裝過程相對順暢，沒有明顯的坑。缺乏多語言支持，但對於英語使用者來說，理解上沒有太大困難。

## 優缺點分析

> [!success] 優點
> - 簡化的使用流程，降低了 AI 訓練的入門門檻。
> - 固定的訓練時間預算使得實驗結果可比較性高。
> - 自動化的實驗設計節省了大量手動調整的時間。
> - 專注於單一檔案的修改，讓版本控制和回溯變得簡單。

> [!danger] 缺點
> - 僅支援 NVIDIA GPU，限制了使用場景。
> - 不支援分布式訓練，無法擴展到大型模型。
> - 訓練結果無法與其他平台的結果直接比較，影響實驗的普遍性。
> - 目前處於 beta 階段，可能存在不穩定的情況。

> [!warning] 注意事項
> - 僅支援 NVIDIA GPU，無法在 CPU 或其他平台上運行。
> - 訓練結果無法與其他平台的結果直接比較。
> - 不支援分布式訓練，僅限單一 GPU 環境。
> - 目前處於 beta 階段，可能存在不穩定的情況。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 2.9k |
| Open Issues | 68 |
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

**社群活躍度**：社群活躍度中等，主要在 GitHub 上有討論和更新。

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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

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

- [[2026-03-13|2026-03-13]] — 再次上榜，28.9k stars
- [[2026-03-11|2026-03-11]] — 再次上榜，22.7k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，21.3k stars
