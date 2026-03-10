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
category: "資料科學"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/資料科學"
  - "lang/jupyter notebook"
  - "topic/interview"
  - "topic/leetcode"
  - "topic/pytorch"
aliases:
  - "TorchCode"
  - "duoan/TorchCode"
  - "提供 PyTorch 面試練習的平台，讓用戶從零開始實作各種 ML 操作。"
---

# TorchCode

**1.5k** stars · **253** stars/天 · 建立 6 天前 · Jupyter Notebook · 未標註授權

> [!summary] 一句話摘要
> 提供 PyTorch 面試練習的平台，讓用戶從零開始實作各種 ML 操作。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (253 stars/day)
> **適合** 希望提升 PyTorch 技能並準備面試的機器學習工程師。
> **一句話重點** TorchCode 的核心在於提供一個結構化的練習環境，讓用戶能夠針對性地提升 PyTorch 技能。

> [!abstract] 核心創新
> 這個專案提供了一個針對 PyTorch 面試的結構化練習環境，讓用戶能夠從零開始實作核心操作。

## 專案簡介

TorchCode 是一個專為 PyTorch 面試準備而設計的練習平台，讓用戶能夠從零開始實作各種機器學習操作，如 softmax、注意力機制和 GPT-2 等。這個平台提供 40 道精心挑選的題目，並具備自動評分功能，能夠檢查正確性、梯度驗證和執行時間。用戶在解題過程中會獲得即時反饋，並能查看參考解答，這樣的設計不僅能提高學習效率，還能幫助用戶針對面試常見問題進行針對性練習。與傳統的 LeetCode 不同，TorchCode 專注於深度學習領域的核心操作，並且無需雲端或註冊，使用者只需執行簡單的命令即可啟動。這個專案目前處於穩定階段，適合所有希望提升 PyTorch 技能的開發者。在需要針對性練習 PyTorch 面試題時，這是一個非常有用的工具，但對於初學者可能會有一定的挑戰。

## 重點功能

- 40 道精心挑選的題目 — 涵蓋 PyTorch 面試常見主題，針對性強。
- 自動評分系統 — 檢查正確性、梯度驗證和執行時間，提供全面反饋。
- 即時反饋 — 每道題目都有顏色標示的通過/失敗，便於快速了解狀態。
- 參考解答 — 解題後可查看最佳實作，幫助學習。
- 無需雲端 — 可在本地運行，無需註冊或雲端支持。

## 快速開始

1. 在線試用
```bash
訪問 Hugging Face Spaces 進行練習
```
2. 在 Colab 中使用評分工具
```bash
!pip install torch-judge
```
3. 拉取預建映像
```bash
docker run -p 8888:8888 -e PORT=8888 ghcr.io/duoan/torchcode:latest
```
4. 本地構建
```bash
make run
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著機器學習面試的競爭加劇，對於能夠針對性練習的工具需求上升。TorchCode 提供了一個結構化的練習環境，滿足了這一需求，並且作者在開發過程中考慮到了用戶的實際需求。

## 適合誰使用

**目標受眾**：希望提升 PyTorch 技能並準備面試的機器學習工程師。

> [!example] 使用場景
> - 求職者用它來練習 PyTorch 面試題，因為能夠針對性地提升實作能力，增加面試通過率。
> - 學生用它來鞏固機器學習知識，因為提供即時反饋和參考解答，方便自我檢測。
> - 教學者用它來設計課程，因為能夠提供實作練習，幫助學生理解深度學習的核心概念。

## 優缺點分析

> [!success] 優點
> - 針對性強，能有效提升 PyTorch 實作能力。
> - 即時反饋和參考解答，方便學習和自我檢測。
> - 無需雲端支持，易於使用。

> [!danger] 缺點
> - 對於初學者可能會有挑戰，需要一定的基礎知識。
> - 題目數量有限，可能無法滿足所有練習需求。
> - 不支持 GPU 加速，性能可能受到限制。

> [!warning] 注意事項
> - 對於初學者可能會有一定的挑戰，需具備基本的 PyTorch 知識。
> - 題目數量有限，可能無法滿足所有需求。
> - 不支持 GPU 加速，對於大型模型的實作可能會有性能限制。

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

[GitHub](https://github.com/duoan/TorchCode) · [官方網站](https://huggingface.co/spaces/duoan/TorchCode)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "資料科學" AND file.name != "duoan--TorchCode"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，1.5k stars
