---
repo: duoan/TorchCode
url: https://github.com/duoan/TorchCode
owner: duoan
owner_type: User
language: Jupyter Notebook
license: N/A
description: "🔥 LeetCode for PyTorch — practice implementing softmax, attention, GPT-2 and more from scratch with instant auto-grading. Jupyter-based, self-hosted or try online."
homepage: "https://huggingface.co/spaces/duoan/TorchCode"
stars: 1616
stars_per_day: 202
forks: 120
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
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供一個結構化的練習環境，讓使用者能夠從零開始實作 PyTorch 的核心運算，並即時獲得自動評分。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 4
engagement: "low"
issue_close_rate: 50
repo_size_kb: 268
readme_length: 9991
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:1531,2026-03-13:1616"
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
  - "提供一個結構化的練習環境，讓使用者能夠從零開始實作 PyTorch 的核心運算，並即時獲得自動評分。"
---

# TorchCode

**1.6k** stars · **202** stars/天 · 建立 8 天前 · Jupyter Notebook · 未標註授權

```dataviewjs
const me = dv.page("Repos/duoan--TorchCode");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`interview` `leetcode` `pytorch`

> [!summary] 一句話摘要
> 提供一個結構化的練習環境，讓使用者能夠從零開始實作 PyTorch 的核心運算，並即時獲得自動評分。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (202 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 2 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 希望提升 PyTorch 實作能力的機器學習工程師，特別是準備面試的人。
> **一句話重點** TorchCode 提供了一個針對 PyTorch 的專業練習平台，讓使用者能夠在無需安裝的情況下進行即時反饋的實作練習。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/duoan--TorchCode");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "程式碼工具" && p.file.name !== "duoan--TorchCode" && p.status !== "archived")
>     .sort(p => p.stars || 0, "desc").limit(5);
>   if (rivals.length > 0) {
>     dv.table(["專案", "Stars", "Stars/天", "安裝", "授權", "Ring"], rivals.map(p => [
>       p.file.link,
>       (p.stars || 0).toLocaleString(),
>       p.stars_per_day || 0,
>       p.install_complexity || "?",
>       p.license || "?",
>       p.ring || "assess"
>     ]));
>   } else { dv.paragraph("_目前 vault 中沒有其他 程式碼工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Medium (需設定)

> [!abstract] 核心創新
> 提供一個即時反饋的練習環境，專注於 PyTorch 的核心運算實作。

## 專案簡介

TorchCode 是一個針對 PyTorch 的練習平台，讓使用者可以在 Jupyter Notebook 環境中實作各種機器學習核心運算。使用者可以選擇在本地或雲端環境中運行，並透過 `check(...)` 函數進行自動評分，這樣的設計讓學習者能夠即時獲得反饋，避免了傳統學習中的等待時間。這個平台提供了 40 道精心挑選的題目，涵蓋了從基本的 ReLU 到複雜的 GPT-2 模型的實作，並且每道題目都附有參考解答，讓使用者在遇到困難時可以快速查閱。技術上，TorchCode 使用了 Docker 來簡化環境配置，並且支援 Google Colab，讓使用者可以無需安裝任何軟體即可開始練習。這個工具的賣點在於其自動評分系統，能夠檢查正確性、梯度驗證及執行時間，這在傳統的學習環境中是難以實現的。

與 LeetCode 相比，TorchCode 更專注於機器學習領域的核心運算，並提供即時的反饋機制。使用者可以在不需要 GPU 的情況下進行練習，這對於資源有限的學習者來說是一大優勢。社群活躍度也相對較高，開發者持續更新問題集並修復問題，這顯示出其良好的維護狀況。整體而言，TorchCode 是一個適合希望提升 PyTorch 技能的學習者的工具，特別是那些準備面試的工程師。

**技術棧**：`Jupyter Notebook` · `Python` · `TypeScript` · `Docker`

## 重點功能

- 40 道精選題目 — 涵蓋 PyTorch 面試中最常見的主題。
- 自動評分系統 — 檢查正確性、梯度驗證及執行時間。
- 即時反饋 — 每個測試案例都有顏色標記，讓使用者清楚知道通過與否。
- 提供提示 — 當使用者卡住時，可以獲得不完全的提示。
- 進度追蹤 — 顯示已解決的問題、最佳時間及嘗試次數。
- 一鍵重置 — 允許使用者隨時重置練習問題，方便多次練習。

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

```jupyter notebook
{
  "前置條件": "在 Jupyter Notebook 中",
  "程式碼": "from torch_judge import check, hint, status\ncheck(\"relu\")  # Judge your implementation\nhint(\"causal_attention\")  # Get a hint without full spoiler\nstatus()  # Progress dashboard — solved / attempted / todo",
  "預期輸出": "✅ pass / ❌ fail per test case"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 1616 stars（202/天），forks 120（7.4%），這顯示出相對穩定的增長。作者 duoan 是一位活躍的開發者，過去有多個相關專案，這次專案解決了許多 ML 工程師在面試中需要即興實作的痛點。之前的學習方式多依賴於閱讀文獻或參加線上課程，但缺乏實作的機會。這個專案的推出正好填補了這個空白，並且因為其簡單的使用方式和即時反饋機制，吸引了許多學習者的注意。社群的活躍度也促進了其快速成長，特別是在 Hugging Face Spaces 上的即時使用體驗。

## 適合誰使用

**目標受眾**：希望提升 PyTorch 實作能力的機器學習工程師，特別是準備面試的人。

> [!example] 使用場景
> - 機器學習工程師用它來練習實作 PyTorch 核心運算，因為即時評分能幫助他們快速找到錯誤並改進。
> - 學生用它來準備機器學習面試，因為提供的題目涵蓋了常見的面試問題，並且有參考解答可供學習。
> - 獨立開發者用它來提升自己的 PyTorch 技能，因為不需要安裝任何軟體就能開始練習，降低了入門門檻。

## 架構分析

TorchCode 的架構基於 Jupyter Notebook，使用者可以在其中撰寫和測試 PyTorch 的核心運算。每個問題都有兩個 notebook：一個是空白模板，讓使用者實作，另一個是參考解答。這樣的設計讓使用者可以自由地進行調試和測試，並且在完成後使用內建的評分系統進行自我檢查。

使用 Docker 來簡化環境配置，這樣使用者只需運行一個命令即可啟動整個環境。這種設計的代價是需要使用者具備基本的 Docker 知識，但這樣的選擇使得部署變得更加靈活和一致。擴展性方面，由於使用了 Jupyter Notebook，使用者可以輕鬆地添加新的問題或功能，這對於未來的擴展是有利的。

## 技術深入分析

TorchCode 的核心技術機制是基於 Jupyter Notebook，這讓使用者能夠在互動式環境中進行編程。每個問題的設計都考慮到了面試中常見的主題，並且提供了自動評分系統，這是通過 `torch_judge` 模組實現的。這個模組能夠檢查使用者的實作是否正確，並提供即時的反饋。效能方面，由於使用者的代碼是在本地執行，這意味著其效能主要依賴於使用者的硬體配置。設計上選擇使用 Docker 來簡化環境配置，這樣的選擇使得部署變得更加靈活，但也要求使用者具備一定的 Docker 知識。技術風險方面，依賴於 Docker 可能會導致在某些環境下的兼容性問題，特別是對於不熟悉 Docker 的使用者。整合分析方面，TorchCode 可以輕鬆地與其他 Jupyter Notebook 工具鏈整合，並且可以在 CI/CD pipeline 中用於自動化測試，但需要額外的配置來實現這一點。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的使用說明和範例。安裝過程順暢，但需要使用者具備 Docker 知識。文件沒有多語言支持，僅有英文版本。

## 優缺點分析

> [!success] 優點
> - 即時反饋機制，能快速找到錯誤並改進。
> - 涵蓋了許多 PyTorch 面試中常見的問題，適合準備面試的工程師。
> - 無需安裝任何軟體，降低了入門門檻。

> [!danger] 缺點
> - 需要 Docker 環境，對於不熟悉的使用者來說可能有學習曲線。
> - 不支援 Windows 的原生安裝，需使用 WSL，這對某些使用者來說不方便。
> - 目前題目數量有限，可能無法滿足所有學習者的需求。

> [!warning] 注意事項
> - 僅支援 Python 3.8+。
> - 需要 Docker 環境來運行本地版本。
> - 不支援 Windows 的原生安裝，需使用 WSL。

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
>   // v29: README 品質和 Issue 解決率
>   const readmeLen = me.readme_length || 0;
>   const readmeQ = readmeLen > 5000 ? "Excellent" : readmeLen > 2000 ? "Good" : readmeLen > 500 ? "Basic" : readmeLen > 0 ? "Minimal" : "None";
>   const icr = me.issue_close_rate;
>   const icrLabel = icr === undefined || icr < 0 ? "N/A" : icr + "%";
>   const icrEval = icr === undefined || icr < 0 ? "?" : icr >= 80 ? "Excellent" : icr >= 50 ? "Good" : icr >= 20 ? "Fair" : "Poor";
>   const repoKB = me.repo_size_kb || 0;
>   const sizeLabel = repoKB > 102400 ? (repoKB/1024).toFixed(0) + " MB" : repoKB + " KB";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Issue 解決率", icrLabel, icrEval],
>     ["Bus Factor", (me.bus_factor || 0) + " 人", (me.bus_factor || 0) >= 3 ? "Good" : (me.bus_factor || 0) >= 2 ? "OK" : "Risk"],
>     ["README 品質", readmeLen.toLocaleString() + " 字元", readmeQ],
>     ["Repo 大小", sizeLabel, repoKB > 102400 ? "Large" : repoKB > 10240 ? "Medium" : "Small"],
>     ["發版節奏", me.release_cadence || "unknown", me.release_cadence === "weekly" || me.release_cadence === "monthly" ? "Active" : me.release_cadence === "never" ? "No releases" : "Check"],
>     ["距上次發版", (me.last_release_days || 0) >= 0 ? (me.last_release_days + " 天") : "N/A", (me.last_release_days || -1) < 0 ? "?" : (me.last_release_days || 0) <= 30 ? "Fresh" : (me.last_release_days || 0) <= 90 ? "OK" : "Stale"],
>   ]);
> }
> ```

> [!abstract]- CHAOSS 社群健康度雷達
> ```dataviewjs
> const me = dv.page("Repos/duoan--TorchCode");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : 999;
>   const dims = [
>     ["維護活躍度", Math.max(0, 5 - Math.floor(daysSincePush / 14))],
>     ["貢獻者多樣性", Math.min(5, Math.floor((me.bus_factor || 0) * 1.5 + (me.contributor_count || 0) / 3))],
>     ["Issue 回應力", (me.issue_close_rate || 0) >= 80 ? 5 : (me.issue_close_rate || 0) >= 50 ? 4 : (me.issue_close_rate || 0) >= 20 ? 2 : 1],
>     ["發版節奏", me.release_cadence === "weekly" ? 5 : me.release_cadence === "monthly" ? 4 : me.release_cadence === "quarterly" ? 3 : me.release_cadence === "irregular" ? 2 : 1],
>     ["社群規模", Math.min(5, Math.floor(Math.log10(Math.max(me.stars || 1, 1)) * 1.2))],
>     ["Fork 活躍度", (me.forks || 0) > 100 ? 5 : (me.forks || 0) > 30 ? 4 : (me.forks || 0) > 10 ? 3 : (me.forks || 0) > 3 ? 2 : 1],
>   ];
>   dv.table(["維度", "分數", "視覺化"], dims.map(([name, score]) => [
>     name, score + "/5", "\u2588".repeat(score) + "\u2591".repeat(5 - score)
>   ]));
>   const avg = (dims.reduce((a, b) => a + b[1], 0) / dims.length).toFixed(1);
>   dv.paragraph("**綜合健康度：" + avg + "/5**");
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 120 |
| Open Issues | 3 |
| Issue 解決率 | 50% (3 closed) |
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

**社群活躍度**：社群活躍，開發者持續更新問題集並修復問題。
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

相關概念：[[自動化測試]] · [[機器學習]] · [[深度學習]]

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
> const concepts = ["自動化測試","機器學習","深度學習"];
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

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/duoan--TorchCode");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "duoan--TorchCode" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
>     .sort(p => p.stars_per_day || 0, "desc").limit(5);
>   if (better.length > 0) {
>     dv.table(["專案", "Ring", "Stars/天", "安裝", "用途"], better.map(p => [
>       p.file.link, p.ring, p.stars_per_day || 0, p.install_complexity || "?", (p.use_case || "").toString().slice(0, 40)
>     ]));
>   } else { dv.paragraph("_此分類中沒有 Ring 更高的專案（你可能已經在用最好的了）_"); }
> }
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
> | 維度 | 分數 (1-5) | 說明 |
> | --- | :---: | --- |
> | 信心 | /5 | _我對這工具的了解程度_ |
> | 興趣 | /5 | _想投入時間研究的程度_ |
> | 風險 | /5 | _導入風險，5=極低風險_ |
> 
> _填完後更新 frontmatter：`score_confidence` / `score_interest` / `score_risk`_
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
