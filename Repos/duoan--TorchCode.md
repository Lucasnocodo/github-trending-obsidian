---
repo: duoan/TorchCode
url: https://github.com/duoan/TorchCode
owner: duoan
owner_type: User
language: Jupyter Notebook
license: N/A
description: "🔥 LeetCode for PyTorch — practice implementing softmax, attention, GPT-2 and more from scratch with instant auto-grading. Jupyter-based, self-hosted or try online."
homepage: "https://huggingface.co/spaces/duoan/TorchCode"
stars: 1516
stars_per_day: 253
forks: 110
open_issues: 3
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供一個 Jupyter 環境，讓你練習從零開始實作 PyTorch 的核心運算，並即時自動評分。"
priority: medium
tags:
  - github
  - "category/ai_ml"
  - "lang/jupyter notebook"
  - easy_install
  - "topic/interview"
  - "topic/leetcode"
  - "topic/pytorch"
aliases:
  - "TorchCode"
  - "duoan/TorchCode"
  - "提供一個 Jupyter 環境，讓你練習從零開始實作 PyTorch 的核心運算，並即時自動評分。"
---

# TorchCode

**1.5k** stars · **253** stars/天 · 建立 6 天前 · Jupyter Notebook · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 提供一個 Jupyter 環境，讓你練習從零開始實作 PyTorch 的核心運算，並即時自動評分。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (253 stars/day)
> **適合** 希望提升 PyTorch 實作能力的機器學習工程師或學生。
> **一句話重點** TorchCode 是一個針對 PyTorch 實作的練習平台，讓用戶能在無需註冊的情況下即時練習並獲得反饋。

> [!abstract] 核心創新
> 提供一個專注於 PyTorch 的自動評分練習平台，讓用戶能夠在無需註冊的情況下即時練習。

## 專案簡介

TorchCode 讓用戶在 Jupyter 環境中練習實作 PyTorch 的各種運算，像是 softmax 和 attention，並提供即時的自動評分功能。用戶可以選擇在本地或雲端執行，並透過 Docker 快速啟動環境。這個專案包含 40 道精選題目，涵蓋 ML 面試中最常見的主題，並提供自動判斷、進度追蹤和提示功能。與 LeetCode 不同的是，TorchCode 專注於深度學習的實作，並且不需要 GPU。使用者可以在 Hugging Face Spaces 上即時試用，或在 Google Colab 中運行。這個專案目前處於穩定階段，適合希望強化 PyTorch 實作能力的工程師。對於小型團隊或個人開發者來說，這是一個很好的練習平台，但不適合需要高效能計算的場景。

**技術棧**：`Jupyter Notebook` · `Python` · `TypeScript` · `Docker`

## 重點功能

- 40 道精選題目 — 涵蓋 PyTorch 面試中最常見的主題。
- 自動評分系統 — 檢查正確性、梯度驗證和計時。
- 即時反饋 — 每個測試案例都有顏色標示的通過/失敗結果。
- 提示功能 — 當遇到困難時提供提示，而不是完整解答。
- 進度追蹤 — 追蹤已解決的問題、最佳時間和嘗試次數。
- 一鍵重置 — 任何題目都可以快速重置回空白模板，便於重複練習。
- 支援 Google Colab — 每個筆記本都有「在 Colab 中打開」的按鈕，無需安裝。

## 快速開始

1. 在 Hugging Face Spaces 上試用
```bash
訪問 https://huggingface.co/spaces/duoan/TorchCode
```
2. 在 Google Colab 中安裝 judge
```bash
!pip install torch-judge
```
3. 運行 Docker 映像
```bash
docker run -p 8888:8888 -e PORT=8888 ghcr.io/duoan/torchcode:latest
```

## 程式碼範例

```python
from torch_judge import check, status, hint
status()           # 列出所有問題和進度
check("relu")      # 運行 "relu" 任務的測試
hint("relu")       # 顯示提示
```

## 為什麼值得關注

> [!tip] 爆紅原因
> TorchCode 的作者有豐富的機器學習背景，專注於幫助開發者準備面試。隨著深度學習技術的普及，對於實作能力的需求日益增加，這個專案正好切中這個需求。近年來，許多公司在面試中強調實作能力，這使得類似工具變得更加重要。

## 適合誰使用

**目標受眾**：希望提升 PyTorch 實作能力的機器學習工程師或學生。

> [!example] 使用場景
> - 機器學習工程師用它來練習實作 softmax 和 dropout，因為這些是面試中常見的題目，能幫助他們在面試中表現更好。
> - 學生用它來熟悉 PyTorch 的基本運算，因為它提供即時反饋，能快速了解自己的錯誤。
> - 自學者用它來提升自己的編程能力，因為這個平台不需要註冊，能隨時隨地進行練習。

## 架構分析

TorchCode 採用 Jupyter Notebook 作為前端界面，使用 Docker 容器化部署。用戶輸入 → 系統處理 → 即時反饋。關鍵技術決策是選擇自動評分系統來提供即時反饋，並且支持在 Google Colab 中運行。目錄結構包含 templates 目錄，存放各種題目的 Jupyter Notebook。

## 優缺點分析

> [!success] 優點
> - 提供即時反饋，幫助用戶快速了解錯誤。
> - 無需註冊，使用方便，適合隨時隨地練習。
> - 涵蓋面試中常見的 PyTorch 題目，針對性強。

> [!danger] 缺點
> - 不支援 GPU，加速能力有限。
> - 題目數量相對較少，可能無法滿足所有需求。
> - 目前僅有英文內容，對非英語使用者不友好。

> [!warning] 注意事項
> - 不支援 GPU 加速，僅適合 CPU 環境。
> - 目前僅提供英文題目，對於非英語使用者可能有障礙。
> - 題目數量有限，可能無法滿足所有學習需求。

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

相關概念：[[機器學習]] · [[深度學習]] · [[自動化測試]]

[GitHub](https://github.com/duoan/TorchCode) · [官方網站](https://huggingface.co/spaces/duoan/TorchCode)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "duoan--TorchCode"
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
