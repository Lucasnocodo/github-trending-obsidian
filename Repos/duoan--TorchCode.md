---
repo: duoan/TorchCode
url: https://github.com/duoan/TorchCode
owner: duoan
owner_type: User
language: Jupyter Notebook
license: N/A
description: "🔥 LeetCode for PyTorch — practice implementing softmax, attention, GPT-2 and more from scratch with instant auto-grading. Jupyter-based, self-hosted or try online."
homepage: "https://huggingface.co/spaces/duoan/TorchCode"
stars: 1517
stars_per_day: 253
forks: 110
open_issues: 3
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "教學資源"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/教學資源"
  - "lang/jupyter notebook"
  - "topic/interview"
  - "topic/leetcode"
  - "topic/pytorch"
aliases:
  - "TorchCode"
  - "duoan/TorchCode"
  - "提供一個結構化的練習環境，讓你從零開始實作 PyTorch 的核心運算，並即時獲得自動評分。"
---

# TorchCode

**1.5k** stars · **253** stars/天 · 建立 6 天前 · Jupyter Notebook · 未標註授權

> [!summary] 一句話摘要
> 提供一個結構化的練習環境，讓你從零開始實作 PyTorch 的核心運算，並即時獲得自動評分。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (253 stars/day)
> **適合** 希望在面試中展示 PyTorch 實作能力的機器學習工程師。
> **一句話重點** TorchCode 是一個針對 PyTorch 面試的專業練習平台，讓使用者能夠在無需雲端的情況下，快速提升實作能力。

> [!abstract] 核心創新
> 提供即時反饋和自動評分的 PyTorch 實作練習平台。

## 專案簡介

TorchCode 是一個針對 PyTorch 面試問題的練習平台，使用者可以在 Jupyter 環境中實作如 softmax、LayerNorm 和 MultiHeadAttention 等核心運算。這個工具提供 40 道精心挑選的問題，並具備自動評分系統，能檢查正確性、驗證梯度及計時。與其他類似工具相比，TorchCode 不需要雲端或註冊，並且可以在本地或 Hugging Face 上即時使用。使用者能夠追蹤進度，並在遇到困難時獲得提示，這些功能使得學習過程更具互動性和效率。雖然不需要 GPU，但對於想要深入理解 PyTorch 的開發者來說，這是一個非常有價值的資源。這個專案目前處於穩定階段，適合任何規模的團隊使用，特別是準備面試的 ML 工程師。建議在需要強化 PyTorch 基礎時使用，但如果你已經熟悉這些概念，可能會覺得重複性較高。

**技術棧**：`Jupyter Notebook` · `Python` · `TypeScript` · `Docker`

## 重點功能

- 40 道精選問題 — 涵蓋 PyTorch 面試中最常見的主題。
- 自動評分系統 — 檢查正確性、驗證梯度及計時，提供即時反饋。
- 提示功能 — 當遇到困難時提供提示，幫助使用者不至於卡住。
- 進度追蹤 — 記錄解題進度、最佳時間及嘗試次數。
- 一鍵重置 — 方便使用者多次練習同一題目，提升熟練度。

## 快速開始

1. 在 Hugging Face 上即時啟動
```bash
訪問 https://huggingface.co/spaces/duoan/TorchCode
```
2. 在 Google Colab 中安裝 judge
```bash
!pip install torch-judge
```
3. 在本地使用 Docker 啟動
```bash
docker run -p 8888:8888 -e PORT=8888 ghcr.io/duoan/torchcode:latest
```

## 程式碼範例

```python
from torch_judge import check, status, hint
status()           # 列出所有問題及進度
check("relu")      # 測試 "relu" 任務
hint("relu")       # 顯示提示
```

## 為什麼值得關注

> [!tip] 爆紅原因
> TorchCode 的作者對於 ML 面試有深刻的理解，並且切中許多工程師在準備面試時的需求。隨著機器學習領域的快速發展，對於基礎運算的掌握變得越來越重要，這使得這個工具在當前時期特別受到青睞。

## 適合誰使用

**目標受眾**：希望在面試中展示 PyTorch 實作能力的機器學習工程師。

> [!example] 使用場景
> - 機器學習工程師用它來練習實作 softmax，因為這是面試中常見的問題，能幫助他們在面試中表現更好。
> - 學生用它來學習 PyTorch 的基本運算，因為即時反饋能讓他們快速了解自己的錯誤並改進。
> - 自學者用它來挑戰自己，實作多種神經網路層，因為這樣的實踐能加深他們對於深度學習的理解。

## 架構分析

TorchCode 採用前後端分離的架構，使用者透過 Jupyter Notebook 進行操作。用戶輸入 → 實作運算 → 自動評分。核心技術決策包括使用 Docker 來簡化安裝過程。專案目錄結構包含 templates 資料夾，存放各種練習題目的 Jupyter Notebook。

## 優缺點分析

> [!success] 優點
> - 提供結構化的練習環境，適合面試準備。
> - 即時反饋機制，能快速了解錯誤。
> - 無需註冊或雲端服務，方便使用。

> [!danger] 缺點
> - 不支援 Windows 環境，限制使用者範圍。
> - 需要 Docker 環境，對新手可能有門檻。
> - 某些問題對初學者來說挑戰性過高。

> [!warning] 注意事項
> - 不支援 Windows 環境。
> - 需要安裝 Docker 或 Podman 來本地運行。
> - 某些問題可能對初學者來說過於挑戰。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[yangshun--tech-interview-handbook\|yangshun/tech-interview-handbook]] | 這是一個更廣泛的技術面試準備資源，涵蓋多種技術，而 TorchCode 專注於 PyTorch 的實作練習。 |
| [[exercism--python\|exercism/python]] | Exercism 提供多種語言的編程練習，但不專注於深度學習和 PyTorch 的核心運算。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 110 |
| Open Issues | 3 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-04 |
| 官方網站 | [Link](https://huggingface.co/spaces/duoan/TorchCode) |
| Repo 大小 | 268 KB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Jupyter Notebook" : 69
>     "Python" : 24
>     "TypeScript" : 3
>     "CSS" : 2
>     "Dockerfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@duoan](https://github.com/duoan) | 28 |
> | [@Ando233](https://github.com/Ando233) | 2 |
> | [@ThierryHJ](https://github.com/ThierryHJ) | 1 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，持續更新問題集和功能。
**連結**：[文件](https://huggingface.co/spaces/duoan/TorchCode)

## README 摘錄

> [!info]- 展開查看原文 README
> ---
> title: TorchCode
> emoji: 🔥
> colorFrom: red
> colorTo: yellow
> sdk: docker
> app_port: 7860
> pinned: false
> ---
> 
> # 🔥 TorchCode
> 
> **Crack the PyTorch interview.**
> 
> Practice implementing operators and architectures from scratch — the exact skills top ML teams test for.
> 
> *Like LeetCode, but for tensors. Self-hosted. Jupyter-based. Instant feedback.*
> 
> [](https://pytorch.org)
> [](https://jupyter.org)
> [](https://www.docker.com)
> [](https://python.org)
> [](LICENSE)
> 
> [](https://github.com/duoan/TorchCode)
> [](https://ghcr.io/duoan/torchcode)
> [](https://huggingface.co/spaces/duoan/TorchCode)
> 
> [](https://star-history.com/#duoan/TorchCode&Date)
> 
> ---
> 
> ## 🎯 Why TorchCode?
> 
> Top companies (Meta, Google DeepMind, OpenAI, etc.) expect ML engineers to implement core operations **from memory on a whiteboard**. Reading papers isn't enough — you need to write `softmax`, `LayerNorm`, `MultiHeadAttention`, and full Transformer blocks code.
> 
> TorchCode gives you a **structured practice environment** with:
> 
> | | Feature | |
> |---|---|---|
> | 🧩 | **40 curated problems** | The most frequently asked PyTorch interview topics |
> | ⚖️ | **Automated judge** | Correctness checks, gradient verification, and timing |
> | 🎨 | **Instant feedback** | Colored pass/fail per test case, just like competitive programming |
> | 💡 | **Hints when stuck** | Nudges without full spoilers |
> | 📖 | **Reference solutions** | Study optimal implementations after your attempt |
> | 📊 | **Progress tracking** | What you've solved, best times, and attempt counts |
> | 🔄 | **One-click reset** | Toolbar button to reset any notebook back to its blank template — practice the same problem as many times as you want |
> | [](#) | **Open in Colab** | Every notebook has an "Open in Colab" badge + toolbar button — run problems in Google Colab with zero setup |
> 
> No cloud. No signup. No GPU needed. Just `make run` — or try it instantly on Hugging Face.
> 
> ---
> 
> ## 🚀 Quick Start
> 
> ### Option 0 — Try it online (zero install)
> 
> **[Launch on Hugging Face Spaces](https://huggingface.co/spaces/duoan/TorchCode)** — opens a full JupyterLab environment in your browser. Nothing to install.
> 
> Or open any problem directly in Google Colab — every notebook has an [](https://colab.research.google.com/github/duoan/TorchCode/blob/master/templates/01_relu.ipynb) badge.
> 
> ### Option 0b — Use the judge in Colab (pip)
> 
> In Google Colab, install the judge from PyPI so you can run `check(...)` without cloning the repo:
> 
> ```bash
> !pip install torch-judge
> ```
> 
> Then in a notebook cell:
> 
> ```python
> from torch_judge import check, status, hint, reset_progress
> status()           # list all problems and your progress
> check("relu")      # run tests for the "relu" task
> hint("relu")       # show a hint
> ```
> 
> ### Option 1 — Pull the pre-built image (fastest)
> 
> ```bash
> docker run -p 8888:8888 -e PORT=8888 ghcr.io/duoan/torchcode:latest
> ```
> 
> ### Option 2 — Build locally
> 
> ```bash
> make run
> ```
> 
> Open **** — that's it. Works with both Docker and Podman (auto-detected).
> 
> ---
> 
> ## 📋 Problem Set
> 
> > **Frequency**: 🔥 = very likely in interviews, ⭐ = commonly asked, 💡 = emerging / differentiator
> 
> ### 🧱 Fundamentals — "Implement X from scratch"
> 
> The bread and butter of ML coding interviews. You'll be asked to write these without `torch.nn`.
> 
> | # | Problem | What You'll Implement | Difficulty | Freq | Key Concepts |
> |:---:|---------|----------------------|:----------:|:----:|--------------|
> | 1 | ReLU  | `relu(x)` |  | 🔥 | Activation functions, element-wise ops |
> | 2 | Softmax  | `my_softmax(x, dim)` |  | 🔥 | Numerical stability, exp/log tricks |
> | 16 | Cross-Entropy Loss  | `cross_entropy_loss(logits, targets)` |  | 🔥 | Log-softmax, logsumexp trick |
> | 17 | Dropout  | `MyDropout` (nn.Module) |  | 🔥 | Train/eval mode, inverted scaling |
> | 18 | Embedding  | `MyEmbedding` (nn.Module) |  | 🔥 | Lookup table, `weight[indices]` |
> | 19 | GELU  | `my_gelu(x)` |  | ⭐ | Gaussian error linear unit, `torch.erf` |
> | 20 | Kaiming Init  | `kaiming_init(weight)` | ![Easy](https:/

## 延伸閱讀

相關概念：[[機器學習]] · [[深度學習]] · [[自然語言處理]]

相關專案：[[yangshun--tech-interview-handbook|yangshun/tech-interview-handbook]] · [[exercism--python|exercism/python]]

[GitHub](https://github.com/duoan/TorchCode) · [官方網站](https://huggingface.co/spaces/duoan/TorchCode)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "教學資源" AND file.name != "duoan--TorchCode"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "duoan--TorchCode"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，1.5k stars
