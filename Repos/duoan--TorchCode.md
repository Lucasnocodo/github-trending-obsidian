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
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供一個結構化的環境，讓你練習從零開始實作 PyTorch 的核心運算，並即時獲得自動評分。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/開發工具"
  - "lang/jupyter notebook"
  - "topic/interview"
  - "topic/leetcode"
  - "topic/pytorch"
aliases:
  - "TorchCode"
  - "duoan/TorchCode"
  - "提供一個結構化的環境，讓你練習從零開始實作 PyTorch 的核心運算，並即時獲得自動評分。"
---

# TorchCode

**1.5k** stars · **253** stars/天 · 建立 6 天前 · Jupyter Notebook · 未標註授權

> [!summary] 一句話摘要
> 提供一個結構化的環境，讓你練習從零開始實作 PyTorch 的核心運算，並即時獲得自動評分。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (253 stars/day)
> **授權** 未標註授權 (風險較高)
> **適合** 需要準備 PyTorch 面試的機器學習工程師或學生。
> **一句話重點** TorchCode 將 PyTorch 面試準備的實作練習變得簡單而高效，讓學習者能在無需雲端的情況下獲得即時反饋。

> [!abstract] 核心創新
> 提供即時反饋和自動評分的 PyTorch 實作練習平台，讓使用者能夠在無雲端的情況下進行練習。

## 專案簡介

TorchCode 是一個針對 PyTorch 面試準備的練習平台，使用者可以在 Jupyter 環境中實作各種運算，如 softmax 和 MultiHeadAttention，並獲得即時反饋。這個專案提供了 40 道精心挑選的問題，涵蓋了常見的面試主題，並且有自動評分系統來檢查正確性和計算梯度。與 LeetCode 類似，TorchCode 也提供了提示和參考解答，讓使用者在遇到困難時不至於完全卡住。相較於其他工具，TorchCode 的特點在於它不需要雲端服務或註冊，使用者只需執行 `make run` 或直接在 Hugging Face 上試用。這個專案不需要 GPU，適合任何開發環境。對於需要準備 PyTorch 面試的工程師來說，這是一個非常實用的工具，特別是對於小型團隊或個人開發者。使用者可以在無需安裝的情況下，直接在瀏覽器中運行，這大大降低了入門門檻。

**技術棧**：`Jupyter Notebook` · `Python` · `TypeScript` · `Docker`

## 重點功能

- 40 道精選問題 — 涵蓋 PyTorch 面試中最常見的主題。
- 自動評分系統 — 檢查正確性、梯度驗證和計時。
- 即時反饋 — 每個測試案例都有顏色標示的通過/失敗結果。
- 提供提示 — 當使用者卡住時給予適度的提示。
- 參考解答 — 使用者可以在嘗試後學習最佳實作。
- 進度追蹤 — 追蹤解題進度、最佳時間和嘗試次數。
- 一鍵重置 — 隨時重置任何筆記本，重複練習同一問題。
- 支持 Google Colab — 每個筆記本都有「在 Colab 開啟」的按鈕，無需安裝。

## 快速開始

1. 在 Hugging Face 上試用
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
> (a) 作者 duoan 過去參與過多個開源專案，這次的 TorchCode 針對 PyTorch 面試的需求提供了具體的解決方案。 (b) 這個工具填補了市場上缺乏針對 PyTorch 的實作練習平台的空白，讓使用者可以在沒有雲端依賴的情況下進行練習。 (c) 近期在開發者社群中對於 ML 面試準備的討論增加，讓這個工具獲得了更多的關注。 (d) 目前對於 PyTorch 的需求持續上升，尤其是在 ML 領域，讓這個工具的實用性更為凸顯。

## 適合誰使用

**目標受眾**：需要準備 PyTorch 面試的機器學習工程師或學生。

> [!example] 使用場景
> - 機器學習工程師用它來練習實作 softmax，因為這是面試中常見的題目，能有效提升面試表現。
> - 學生用它來學習 PyTorch 的基本運算，因為提供即時反饋的功能能幫助他們快速理解錯誤所在。
> - 獨立開發者用它來準備技術面試，因為不需要註冊和雲端服務，能快速上手進行練習。

## 架構分析

TorchCode 採用前後端分離的架構，使用者透過 Jupyter Notebook 進行輸入 → 系統處理運算 → 輸出結果。核心技術決策是使用 Docker 來簡化環境配置，並提供即時反饋功能。專案目錄結構中，主要的問題模板位於 templates 目錄，使用者可以直接在這裡找到可實作的問題。

## 優缺點分析

> [!success] 優點
> - 無需註冊和雲端服務，使用者可以快速上手。
> - 提供即時反饋和自動評分，能有效提升學習效率。
> - 涵蓋多種 PyTorch 面試主題，適合準備技術面試的使用者。

> [!danger] 缺點
> - 目前僅支援 Python 3.x，對於其他語言的使用者不友好。
> - 需要 Docker 環境，對於不熟悉的使用者可能有一定的學習曲線。
> - 不支援 Windows 環境的直接運行，限制了使用者的範圍。

> [!warning] 注意事項
> - 僅支援 Python 3.x 環境。
> - 需要 Docker 或 Podman 來運行本地版本。
> - 不支援 Windows 環境的直接運行，需使用 WSL 或 Docker。

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

相關專案：[[karpathy--autoresearch|karpathy/autoresearch]] · [[trevin-creator--autoresearch-mlx|trevin-creator/autoresearch-mlx]] · [[tanishqkumar--ssd|tanishqkumar/ssd]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]]

[GitHub](https://github.com/duoan/TorchCode) · [官方網站](https://huggingface.co/spaces/duoan/TorchCode)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "duoan--TorchCode"
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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，1.5k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，1.5k stars
