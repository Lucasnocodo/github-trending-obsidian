---
repo: duoan/TorchCode
url: https://github.com/duoan/TorchCode
owner: duoan
owner_type: User
language: Jupyter Notebook
license: N/A
description: "🔥 LeetCode for PyTorch — practice implementing softmax, attention, GPT-2 and more from scratch with instant auto-grading. Jupyter-based, self-hosted or try online."
homepage: "https://huggingface.co/spaces/duoan/TorchCode"
stars: 1531
stars_per_day: 219
forks: 114
open_issues: 3
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "程式碼工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供一個結構化的 PyTorch 實作練習環境，幫助用戶準備機器學習面試。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 4
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:1531"
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
  - "提供一個結構化的 PyTorch 實作練習環境，幫助用戶準備機器學習面試。"
---

# TorchCode

**1.5k** stars · **219** stars/天 · 建立 7 天前 · Jupyter Notebook · 未標註授權

> [!summary] 一句話摘要
> 提供一個結構化的 PyTorch 實作練習環境，幫助用戶準備機器學習面試。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (219 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 希望加強 PyTorch 實作能力的機器學習工程師和學生。
> **一句話重點** TorchCode 提供了一個針對 PyTorch 的實作練習平台，讓用戶能夠針對性地準備機器學習面試。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，2 小時整合，得到針對 PyTorch 的實作練習，值得一試。

> [!abstract] 核心創新
> 提供一個針對 PyTorch 的結構化實作練習環境，並具備自動評分和即時反饋功能。

## 專案簡介

TorchCode 是一個針對 PyTorch 的實作練習平台，讓用戶可以從零開始實作常見的機器學習運算，例如 softmax 和注意力機制。用戶可以在 Jupyter Notebook 環境中進行練習，並透過自動評分系統獲得即時反饋。這個工具的賣點在於它提供了 40 個精心策劃的問題，涵蓋了面試中最常見的 PyTorch 主題，並且不需要任何雲端服務或註冊。用戶只需運行 `make run` 或直接在 Hugging Face Spaces 上試用。技術上，TorchCode 使用 Docker 來簡化環境設置，並提供了多種 API 來檢查實作的正確性和進度追蹤。與 LeetCode 相比，TorchCode 專注於機器學習領域的具體實作，並且提供了針對 PyTorch 的專屬問題集。這使得它在準備機器學習面試時，能夠提供更具針對性的練習。使用者可以在本地或雲端環境中進行練習，並且在 Google Colab 上也能輕鬆運行。這個專案的社群活躍度高，開發者持續更新，並且開放了多個問題的討論。對於想要加強 PyTorch 實作能力的開發者，TorchCode 是一個值得考慮的工具。

**技術棧**：`Jupyter Notebook` · `Python` · `Docker`

## 重點功能

- 40 個精心策劃的問題 — 涵蓋 PyTorch 面試中的關鍵主題。
- 自動評分系統 — 透過 `check(...)` 函數檢查實作正確性。
- 即時反饋 — 每個測試案例的通過/失敗以顏色顯示，方便用戶快速了解進度。
- 提示功能 — 當用戶卡住時，可以使用 `hint(...)` 獲得提示而不會完全暴露答案。
- 進度追蹤 — 用戶可以查看已解決的問題和最佳時間，幫助他們管理學習進度。
- 一鍵重置 — 用戶可以輕鬆重置任何筆記本，反覆練習相同的問題。

## 快速開始

1. 在 Hugging Face Spaces 上啟動
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

{
  "前置條件": "在 Jupyter Notebook 中運行",
  "指令": "from torch_judge import check, hint, status\ncheck(\"relu\")  # Judge your implementation\nhint(\"causal_attention\")  # Get a hint without full spoiler\nstatus()  # Progress dashboard — solved / attempted / todo",
  "預期輸出": "✅ pass / ❌ fail per test case"
}

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 1531 stars（219/天），forks 114（7.4%），這顯示出相對穩定的增長。作者 duoan 及其團隊專注於機器學習領域，並且提供了一個針對面試的實作平台，解決了許多開發者在準備面試時缺乏實作練習的痛點。這個工具的推出正好滿足了市場對於機器學習面試準備的需求，特別是在 PyTorch 逐漸成為主流框架的背景下。社群的活躍度和開放的問題討論也促進了使用者的參與和貢獻。

## 適合誰使用

**目標受眾**：希望加強 PyTorch 實作能力的機器學習工程師和學生。

> [!example] 使用場景
> - 機器學習工程師用它來練習實作 softmax 和注意力機制，因為這些是面試中常見的問題，並且能夠獲得即時反饋。
> - 學生用它來準備 PyTorch 的課程作業，因為它提供了結構化的練習問題和參考解答，幫助他們更好地理解概念。
> - 自學者用它來加強對 PyTorch 的理解，因為它不需要任何雲端設置，能夠在本地環境中輕鬆運行。

## 架構分析

TorchCode 的架構基於 Jupyter Notebook，允許用戶在本地或雲端環境中進行實作練習。每個問題都有兩個筆記本：一個是空白模板，另一個是參考解答。這種設計使得用戶可以自由地進行實作和調試，並在需要時參考解答。

使用 Docker 來簡化環境設置，這意味著用戶可以快速啟動一個完整的開發環境，而不需要手動配置依賴。這種架構的代價是需要用戶了解 Docker 的基本操作，但這也使得環境的可攜性和一致性得以保障。整體來說，這種設計使得用戶能夠專注於實作，而不是環境配置。

## 技術深入分析

TorchCode 的核心技術機制是基於 Jupyter Notebook 的實作練習，這使得用戶可以在互動式環境中編寫和測試代碼。每個問題都設計為一個獨立的筆記本，並提供了自動評分的功能，這是通過 `torch_judge` 模組實現的。這種設計允許用戶在實作過程中隨時檢查自己的進度和正確性。性能上，這個工具不需要高效能的硬體，因為它主要是針對代碼實作而非大規模數據處理。選擇 Jupyter 作為主要平台的好處在於其廣泛的使用和社群支持，但也意味著用戶需要熟悉 Jupyter 的操作。技術上，這個專案的依賴樹相對簡單，主要依賴於 PyTorch 和 Docker，這降低了使用的複雜度。未來可能的擴展方向包括增加更多的問題類型和支持其他機器學習框架的實作練習。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了多種使用方式和範例。安裝過程相對順暢，但對於不熟悉 Docker 的用戶可能會有些挑戰。文件中有良好的入門指引，並且支持多種環境的運行。整體而言，花 30 分鐘應該可以順利運行起來。

## 優缺點分析

> [!success] 優點
> - 提供針對 PyTorch 的專屬練習問題，幫助用戶針對性準備面試。
> - 即時反饋系統讓用戶能夠快速了解自己的實作進度。
> - 無需雲端服務或註冊，使用方便，適合快速上手。

> [!danger] 缺點
> - 僅限於 PyTorch，對於其他框架的開發者不太適用。
> - 需要一定的 Python 和機器學習基礎，對於新手可能有些挑戰。
> - 不支援 Windows 環境的 Docker 運行，可能需要額外的設置。

> [!warning] 注意事項
> - 僅支援 PyTorch 相關的問題，不涵蓋其他框架。
> - 需要一定的 Python 和機器學習基礎，對於新手可能有些挑戰。
> - 不支援 Windows 環境的 Docker 運行，可能需要 WSL 或其他解決方案。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [duoan/TorchCode](https://github.com/duoan/TorchCode) | TorchCode 專注於 PyTorch 的實作練習，與 LeetCode 的廣泛題庫相比，更具針對性。 |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | Autoresearch 專注於自動化機器學習研究，而 TorchCode 更加專注於手動實作和練習。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | 專注於自動化機器學習研究，而 TorchCode 更加專注於手動實作和練習。 | 如果你的團隊需要自動化的研究流程，且希望減少手動實作的負擔。 | medium，因為需要轉換到不同的練習模式。 |
| [huggingface/transformers](https://github.com/huggingface/transformers) | 專注於提供預訓練模型和 API，而 TorchCode 專注於實作練習。 | 如果你的目的是使用現成的模型進行推論，而不是學習如何從零開始實作。 | low，因為可以直接使用 Hugging Face 的 API。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **TorchCode** | **autoresearch** | **transformers** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動化機器學習研究，而 TorchCode 更加專注於手動實作和練習。 | 專注於提供預訓練模型和 API，而 TorchCode 專注於實作練習。 |
> | 遷移成本 | - | medium，因為需要轉換到不同的練習模式。 | low，因為可以直接使用 Hugging Face 的 API。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要自動化的研究流程，且希望減少手動實作的負擔。 | 如果你的目的是使用現成的模型進行推論，而不是學習如何從零開始 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境中，Docker 可能無法正常啟動，導致無法運行。
  - 解法：確保 Docker 已正確安裝並運行，或考慮使用 WSL。
- [MEDIUM] 某些問題的測試用例可能不夠全面，導致用戶無法獲得正確的反饋。
  - 解法：參考官方解答，並進行多次測試以確認實作的正確性。
- [MEDIUM] 在使用 Colab 時，可能需要重新安裝 judge 模組。
  - 解法：在每次啟動 Colab 環境時運行安裝指令。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 準備機器學習面試的工程師 | 非常適合 | 提供針對性問題，幫助用戶加強實作能力。 |
| 學習 PyTorch 的學生 | 適合 | 提供結構化的練習環境，幫助學生理解核心概念。 |
| 需要快速實作測試的開發者 | 普通 | 雖然提供了即時反饋，但不適合大規模測試。 |
| 對機器學習不熟悉的初學者 | 不適合 | 需要一定的基礎知識，對於新手來說可能有挑戰。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，2 小時整合，得到針對 PyTorch 的實作練習，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，使用 Docker 隔離環境可進一步降低風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

TorchCode 可以與 Docker 和 Jupyter Notebook 環境無縫整合，適合用於本地開發和測試。在典型的工作流中，用戶可以在 Jupyter Notebook 中編寫代碼，並通過 Docker 環境運行。這使得用戶能夠快速啟動和運行實作，而不需要繁瑣的環境配置。與主流 CI/CD 工具的整合相對簡單，但需要用戶自行設置 Docker 環境，這可能會成為整合的摩擦點。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/duoan--TorchCode");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 114 |
| Open Issues | 3 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-04 |
| 官方網站 | [Link](https://huggingface.co/spaces/duoan/TorchCode) |
| Repo 大小 | 268 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/duoan/TorchCode) |
| Topics | `interview` `leetcode` `pytorch` |

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

**社群活躍度**：社群活躍，開發者持續更新，並開放問題討論。
**連結**：[文件](https://huggingface.co/spaces/duoan/TorchCode)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-08 ~ 2026-03-10）
> **活躍天數** 3 天 · **最新 commit** docs(contributors): update README [skip ci]

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/duoan/TorchCode/issues/3) | A web-based plugin | 2 | 1 |
> | [#9](https://github.com/duoan/TorchCode/issues/9) | ReLU Issue | 0 | 0 |
> | [#2](https://github.com/duoan/TorchCode/issues/2) | FSDP training loop | 0 | 0 |

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
> 
> ## 🚀 Quick Start
> 
> 
> ### Option 0 — Try it online (zero install)
> 
> **[Launch on Hugging Face Spaces](https://huggingface.co/spaces/duoan/TorchCode)** — opens a full JupyterLab environment in your browser. Nothing to install.
> 
> Or open any problem directly in Google Colab — every notebook has an [](https://colab.research.google.com/github/duoan/TorchCode/blob/master/templates/01_relu.ipynb) badge.
> 
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
> 
> ### Option 1 — Pull the pre-built image (fastest)
> 
> ```bash
> docker run -p 8888:8888 -e PORT=8888 ghcr.io/duoan/torchcode:latest
> ```
> 
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
> 
> ### In-Notebook API
> 
> ```python
> from torch_judge import check, hint, status
> 
> check("relu")               # Judge your implementation
> hint("causal_attention")    # Get a hint without full spoiler
> status()                    # Progress dashboard — solved / attempted / todo
> ```
> 
> ---
> 
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
> 
> ## 📋 Problem Set
> 
> > **Frequency**: 🔥 = very likely in interviews, ⭐ = commonly asked, 💡 = emerging / differentiator
> 
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
> | 20 | Kaiming Init  | `kaiming_init(weight)` |  | ⭐ | `std = sqrt(2/fan_in)`, variance scaling |
> | 21 | Gradient Clipping  | `clip_grad_norm(params, max_norm)` |  | ⭐ | Norm-based clipping, direction preservation |
> | 31 | Gradient Accumulation  | `accumulated_step(model, opt, ...)` |  | 💡 | Micro-batching, loss scaling |
> | 40 | Linear Regression  | `LinearRegression` (3 methods) |  | 🔥 | Normal equation, GD from scratch, nn.Linear |
> | 3 | Linear Layer  | `SimpleLinear` (nn.Module) |  | 🔥 | `y = xW^T + b`, Kaiming init, `nn.Parameter` |
> | 4 | LayerNorm  | `my_layer_norm(x, γ, β)` |  | 🔥 | Normalization, running stats, affine transform |
> | 7 | BatchNorm  | `my_batch_norm(x, γ, β)` |  | ⭐ | Batch vs layer statistics, train/eval behavior |
> | 8 | RMSNorm  | `rms_norm(x, weight)` |  | ⭐ | LLaMA-style norm, simpler than LayerNorm |
> | 15 | SwiGLU MLP  | `SwiGLUMLP` (nn.Module) |  | ⭐ | Gated FFN, `SiLU(gate) * up`, LLaMA/Mistral-style |
> | 22 | Conv2d  | `my_conv2d(x, weight, ...)` |  | 🔥 | Convolution, unfold, stride/padding |
> 
> 
> ### 🧠 Attention Mechanisms — The heart of modern ML interviews
> 
> If you're interviewing for any role touching LLMs or Transformers, expect at least one of these.
> 
> | # | Problem | What You'll Implement | Difficulty | Freq | Key Concepts |
> |:---:|---------|----------------------|:----------:|:----:|--------------|
> | 23 | Cross-Attention  | `MultiHeadCrossAttention` (nn.Module) |  | ⭐ | Encoder-decoder, Q from decoder, K/V from encoder |
> | 5 | Scaled Dot-Product Attention  | `scaled_dot_product_attention(Q, K, V)` |  | 🔥 | `softmax(QK^T/√d_k)V`, the foundation of everything |
> | 6 | Multi-Head Attention  | `MultiHeadAttention` (nn.Module) |  | 🔥 | Parallel heads, split/concat, projection matrices |
> | 9 | Causal Self-Attention  | `causal_attention(Q, K, V)` |  | 🔥 | Autoregressive masking with `-inf`, GPT-style |
> | 10 | Grouped Query Attention  | `GroupQueryAttention` (nn.Module) |  | ⭐ | GQA (LLaMA 2), KV sharing across heads |
> | 11 | Sliding Window Attention  | `sliding_window_attention(Q, K, V, w)` |  | ⭐ | Mistral-style local attention, O(n·w) complexity |
> | 12 | Linear Attention  | `linear_attention(Q, K, V)` |  | 💡 | Kernel trick, `φ(Q)(φ(K)^TV)`, O(n·d²) |
> | 14 | KV Cache Attention  | `KVCacheAttention` (nn.Module) |  | 🔥 | Incremental decoding, cache K/V, prefill vs decode |
> | 24 | RoPE  | `apply_rope(q, k)` |  | 🔥 | Rotary position embedding, relative position via rotation |
> | 25 | Flash Attention  | `flash_attention(Q, K, V, block_size)` |  | 💡 | Tiled attention, online softmax, memory-efficient |
> 
> 
> ### 🏗️ Architecture & Adaptation — Put it all together
> 
> | # | Problem | What You'll Implement | Difficulty | Freq | Key Concepts |
> |:---:|---------|----------------------|:----------:|:----:|--------------|
> | 26 | LoRA  | `LoRALinear` (nn.Module) |  | ⭐ | Low-rank adaptation, frozen base + `BA` update |
> | 27 | ViT Patch Embedding  | `PatchEmbedding` (nn.Module) |  | 💡 | Image → patches → linear projection |
> | 13 | GPT-2 Block  | `GPT2Block` (nn.Module) |  | ⭐ | Pre-norm, causal MHA + MLP (4x, GELU), residual connections |
> | 28 | Mixture of Experts  | `MixtureOfExperts` (nn.Module) |  | ⭐ | Mixtral-style, top-k routing, expert MLPs |
> 
> 
> ### ⚙️ Training & Optimization
> 
> | # | Problem | What You'll Implement | Difficulty | Freq | Key Concepts |
> |:---:|---------|----------------------|:----------:|:----:|--------------|
> | 29 | Adam Optimizer  | `MyAdam` |  | ⭐ | Momentum + RMSProp, bias correction |
> | 30 | Cosine LR Scheduler  | `cosine_lr_schedule(step, ...)` |  | ⭐ | Linear warmup + cosine annealing |
> 
> 
> ### 🎯 Inference & Decoding
> 
> | # | Problem | What You'll Implement | Difficulty | Freq | Key Concepts |
> |:---:|---------|----------------------|:----------:|:----:|-----------

## 延伸閱讀

相關概念：[[機器學習]] · [[深度學習]] · [[自動化測試]]

相關專案：[[duoan--TorchCode|duoan/TorchCode]] · [[karpathy--autoresearch|karpathy/autoresearch]] · [[trevin-creator--autoresearch-mlx|trevin-creator/autoresearch-mlx]] · [[tanishqkumar--ssd|tanishqkumar/ssd]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]]

[GitHub](https://github.com/duoan/TorchCode) · [官方網站](https://huggingface.co/spaces/duoan/TorchCode)

## 相關收錄

> [!note]- 直接競品（同子分類：程式碼工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "程式碼工具" AND file.name != "duoan--TorchCode"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "duoan--TorchCode"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Jupyter Notebook" AND file.name != "duoan--TorchCode" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "duoan--TorchCode"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["機器學習","深度學習","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "duoan--TorchCode" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "duoan" AND file.name != "duoan--TorchCode"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/duoan--TorchCode");
> const all = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars_per_day || 0, "desc");
> const rank = all.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const catAll = all.where(p => p.category === me?.category);
> const catRank = catAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const totalStarsAll = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars || 0, "desc");
> const starsRank = totalStarsAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> if (rank > 0) {
>   const pct = Math.round((1 - rank / all.length) * 100);
>   dv.paragraph(`Stars/天排名：**全 vault 第 ${rank}**/${all.length}（前 ${100 - pct}%）· **${me.category} 第 ${catRank}**/${catAll.length}\nStars 總量排名：**第 ${starsRank}**/${totalStarsAll.length}`);
> }
> ```

## Star 趨勢

> [!abstract]- Stars 成長追蹤
> ```dataviewjs
> const me = dv.page("Repos/duoan--TorchCode");
> if (me?.star_history) {
>   const raw = me.star_history.toString();
>   const points = raw.split(",").map(p => { const [d, s] = p.split(":"); return { date: d, stars: parseInt(s) }; }).filter(p => !isNaN(p.stars));
>   if (points.length >= 2) {
>     const max = Math.max(...points.map(p => p.stars));
>     const lines = points.map(p => {
>       const w = Math.round(p.stars / max * 25);
>       return `${p.date} ${"\u2588".repeat(w)}${"\u2591".repeat(25-w)} ${p.stars.toLocaleString()}`;
>     });
>     const first = points[0].stars;
>     const last = points[points.length-1].stars;
>     const growth = first > 0 ? Math.round((last - first) / first * 100) : 0;
>     lines.push(`\n**成長** +${(last-first).toLocaleString()} stars（${growth}%）in ${points.length} snapshots`);
>     // 趨勢方向偵測
>     if (points.length >= 3) {
>       const mid = Math.floor(points.length / 2);
>       const fh = points.slice(0, mid), sh = points.slice(mid);
>       const rateF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
>       const rateS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
>       const ratio = rateF > 0 ? rateS / rateF : rateS > 0 ? 2 : 1;
>       const dir = ratio > 1.3 ? "Rising（加速中）" : ratio < 0.7 ? "Cooling（降溫中）" : "Stable（穩定）";
>       lines.push(`**趨勢方向** ${dir}（加速比 ${Math.round(ratio * 100) / 100}x）`);
>     }
>     dv.paragraph(lines.join("\n"));
>   } else { dv.paragraph("需要 2+ 次快照才能顯示趨勢"); }
> } else { dv.paragraph("尚無 star_history 資料（下次出現在 trending 時會開始追蹤）"); }
> ```

## 相對成長速度

> [!abstract]- 跟 vault 中同類專案比較
> ```dataviewjs
> const me = dv.page("Repos/duoan--TorchCode");
> if (me) {
>   const all = dv.pages('"Repos"').where(p => p.status !== "archived");
>   const sameCat = all.where(p => p.category === me.category);
>   const avgAll = all.length > 0 ? Math.round(all.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / all.length) : 0;
>   const avgCat = sameCat.length > 0 ? Math.round(sameCat.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / sameCat.length) : 0;
>   const mySpd = me.stars_per_day || 0;
>   const vsAll = avgAll > 0 ? Math.round(mySpd / avgAll * 100) : 0;
>   const vsCat = avgCat > 0 ? Math.round(mySpd / avgCat * 100) : 0;
>   dv.table(["比較對象", "平均 Stars/天", "本專案", "倍數"], [
>     ["全 Vault", avgAll, mySpd, vsAll + "%"],
>     ["同分類 (" + me.category + ")", avgCat, mySpd, vsCat + "%"],
>   ]);
>   if (vsAll >= 300) dv.paragraph("**極速成長** — 成長速度是 vault 平均的 3 倍以上");
>   else if (vsAll >= 150) dv.paragraph("**高速成長** — 成長速度高於 vault 平均");
>   else if (vsAll >= 50) dv.paragraph("**正常速度** — 接近 vault 平均水平");
>   else dv.paragraph("**低速成長** — 低於 vault 平均，可能已過熱度高峰");
> }
> ```

## 決策分數

> [!abstract]- 綜合評估（自動計算）
> ```dataviewjs
> const me = dv.page("Repos/duoan--TorchCode");
> if (me) {
>   let score = 0;
>   let breakdown = [];
>   // 熱度 (0-25)
>   const spd = me.stars_per_day || 0;
>   const heat = Math.min(25, Math.round(spd / 40 * 25));
>   score += heat; breakdown.push(`熱度: ${heat}/25`);
>   // 安裝難度 (0-20)
>   const inst = me.install_complexity === "easy" ? 20 : me.install_complexity === "medium" ? 12 : 5;
>   score += inst; breakdown.push(`易用性: ${inst}/20`);
>   // 成熟度 (0-20)
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
>   const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
>   score += mat; breakdown.push(`成熟度: ${mat}/20`);
>   // 社群 (0-20)
>   const forks = me.forks || 0;
>   const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
>   score += comm; breakdown.push(`社群: ${comm}/20`);
>   // 授權 (0-15)
>   const lic = me.license || "";
>   const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
>   const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
>   score += licScore; breakdown.push(`授權: ${licScore}/15`);
>   const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
>   const bar = "\u2588".repeat(Math.round(score/5)) + "\u2591".repeat(20 - Math.round(score/5));
>   dv.paragraph(`## ${grade} (${score}/100)\n${bar}\n\n${breakdown.join(" | ")}`);
> }
> ```

---

## 個人筆記

> [!abstract]- 評估進度
> ```dataviewjs
> const me = dv.page("Repos/duoan--TorchCode");
> if (me) {
>   const steps = [
>     { name: "已讀", done: me.status && me.status !== "to-review" },
>     { name: "已評分", done: (me.my_rating || 0) > 0 },
>     { name: "有結論", done: me.verdict && me.verdict !== "" },
>     { name: "Ring 決策", done: me.ring && me.ring !== "" && me.ring !== "assess" },
>     { name: "試用記錄", done: me.status === "tried" || me.status === "integrated" },
>   ];
>   const done = steps.filter(s => s.done).length;
>   const pct = Math.round((done / steps.length) * 100);
>   const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
>   dv.paragraph(`${bar} **${done}/${steps.length}** (${pct}%)`);
>   const todo = steps.filter(s => !s.done).map(s => s.name);
>   if (todo.length > 0) dv.paragraph("待完成：" + todo.join(" / "));
> }
> ```

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
> 測試環境 :: _OS / Node / Python 版本_
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 花費時間 :: _從零到可用_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 踩到的坑 :: _描述 + 解法_
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

### 決策記錄

> [!abstract]- 為什麼評估這個工具？
> **當時的痛點**：_遇到什麼問題才開始找工具？_
> **觸發來源**：_GitHub Trending / HN / 同事推薦 / 其他_
> **當時的約束**：_時間 / 團隊 / 語言 / 部署環境_

> [!note]- 最終決策
> decision:: _選了什麼（或為何還在觀望）_
> why:: _當時的理由（越具體越好）_
> outcome:: _後來實際發生了什麼_

### 探索日誌

_按時間記錄，每次接觸時追加一段（最新在上）_

> **2026-03-10** — 首次收錄
> _第一印象：_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，1.5k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，1.5k stars
