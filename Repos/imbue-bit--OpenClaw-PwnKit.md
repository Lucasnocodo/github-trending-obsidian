---
repo: imbue-bit/OpenClaw-PwnKit
url: https://github.com/imbue-bit/OpenClaw-PwnKit
owner: imbue-bit
owner_type: User
language: Python
license: GPL-3.0
description: "Get shell to almost any OpenClaw host machine."
homepage: ""
stars: 674
stars_per_day: 337
forks: 30
open_issues: 0
created: 2026-03-08
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "安全"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/安全"
  - "lang/python"
aliases:
  - "OpenClaw-PwnKit"
  - "imbue-bit/OpenClaw-PwnKit"
  - "透過對 LLM Agent 工具調用的黑箱對抗攻擊獲取 shell。"
---

# OpenClaw-PwnKit

**674** stars · **337** stars/天 · 建立 2 天前 · Python · GPL-3.0

> [!summary] 一句話摘要
> 透過對 LLM Agent 工具調用的黑箱對抗攻擊獲取 shell。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (337 stars/day)
> **適合** 對 LLM 安全性有興趣的安全研究人員和開發者。
> **一句話重點** 這個專案展示了如何利用對抗性機器學習技術來攻擊 LLM Agent，為安全研究提供了新的視角。

> [!abstract] 核心創新
> 通過無導數優化在標記嵌入空間中生成對抗觸發器，實現 RCE。

## 專案簡介

OpenClaw-PwnKit 是一個研究框架，展示了如何通過對 LLM Agent 的工具調用進行黑箱對抗攻擊，最終實現遠程代碼執行（RCE）。這個專案利用 CMA-ES（協方差矩陣適應進化策略）在標記嵌入空間中進行無導數優化，生成對抗觸發器，迫使 LLM Agent 執行攻擊者控制的系統級工具。該方法不需要對模型權重或梯度的訪問，只需 API 級別的查詢訪問。這使得攻擊者可以在不直接接觸模型的情況下，利用公開的標記器生成有效的對抗觸發器。與其他安全測試工具相比，這個專案的獨特之處在於其針對 LLM Agent 的特定攻擊向量和無導數優化的創新方法。使用此工具的效果顯著，能夠在多個 LLM Agent 上實現 RCE，並且提供了詳細的攻擊流程和評估結果。這個專案目前處於研究階段，適合安全研究人員和對 LLM 安全性有興趣的開發者。

**技術棧**：`Python`

## 重點功能

- 黑箱對抗攻擊 — 利用 CMA-ES 在標記嵌入空間中生成對抗觸發器。
- 支持多種 LLM Agent — 能夠在多個 LLM Agent 上進行測試。
- 詳細的攻擊流程 — 提供完整的攻擊流程和評估結果。
- 無需模型權重 — 僅需 API 級別的查詢訪問，降低了攻擊門檻。
- 針對性強 — 專注於 LLM Agent 的工具調用，提供具體的攻擊向量。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/imbue-bit/OpenClaw-PwnKit.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 運行攻擊腳本
```bash
python attack.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 LLM 的廣泛應用，安全性問題越來越受到重視，這個專案針對 LLM Agent 的攻擊方法引起了廣泛關注。作者的研究背景和對安全問題的深入探討，使得這個專案在社群中迅速流行。

## 適合誰使用

**目標受眾**：對 LLM 安全性有興趣的安全研究人員和開發者。

> [!example] 使用場景
> - 安全研究員用它來測試 LLM Agent 的安全性，因為這樣可以評估其對抗攻擊的脆弱性。
> - 開發者用它來了解 LLM 的安全風險，因為這提供了一個實際的攻擊案例，幫助他們改進模型的安全性。
> - 學術研究者用它來探索對抗性機器學習的邊界，因為這個框架提供了新的研究方向和方法。

## 優缺點分析

> [!success] 優點
> - 提供了一個針對 LLM Agent 的具體攻擊框架，具有實用性。
> - 無需對模型進行直接訪問，降低了攻擊的難度。
> - 能夠在多個 LLM Agent 上進行測試，具有廣泛的應用潛力。

> [!danger] 缺點
> - 僅針對特定 LLM Agent，使用範圍有限。
> - 需要一定的技術背景來理解和使用。
> - 目前仍在研究階段，可能存在不穩定性。

> [!warning] 注意事項
> - 僅適用於特定的 LLM Agent，無法通用。
> - 需要對對抗性機器學習有一定的理解。
> - 目前仍在研究階段，穩定性和可靠性尚未驗證。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 30 |
| Open Issues | 0 |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 800 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@imbue-bit](https://github.com/imbue-bit) | 37 |
> | [@koriyoshi2041](https://github.com/koriyoshi2041) | 23 |
> | [@Fldicoahkiin](https://github.com/Fldicoahkiin) | 2 |
> | [@Sakayori-Iroha-168](https://github.com/Sakayori-Iroha-168) | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenClaw-PwnKit
> 
> **Black-Box Adversarial Attacks on LLM Agent Tool-Calling via CMA-ES**
> 
> [](https://www.python.org/)
> [](https://www.gnu.org/licenses/gpl-3.0)
> [](#citation)
> [](https://github.com/imbue-bit/OpenClaw-PwnKit/pulls)
> 
> *A research framework demonstrating that derivative-free optimization in token embedding space can bypass LLM safety alignment and achieve Remote Code Execution (RCE) through adversarial tool-call hijacking.*
> 
> ---
> 
> ## Table of Contents
> 
> - [Abstract](#abstract)
> - [Threat Model](#threat-model)
> - [Method Overview](#method-overview)
> - [Architecture](#architecture)
> - [Installation](#installation)
> - [Configuration](#configuration)
> - [Usage](#usage)
> - [Key Parameters](#key-parameters)
> - [Compute Requirements](#compute-requirements)
> - [Ethics and Responsible Disclosure](#ethics-and-responsible-disclosure)
> - [Citation](#citation)
> - [License](#license)
> 
> ## Abstract
> 
> As Large Language Models (LLMs) are increasingly augmented with tool-calling capabilities, LLM Agents are becoming the backbone of autonomous systems. However, RLHF-based safety alignment optimizes for semantic-level behavioral constraints but does not explicitly defend against adversarial perturbations in the continuous embedding space. This work exposes a critical security threat against closed-source frontier models (GPT-4, Claude 3, etc.): by injecting seemingly nonsensical adversarial triggers, an attacker can induce **adversarial tool-call execution** — forcing the agent to invoke system-level tools (e.g., bash) with attacker-controlled arguments, achieving Remote Code Execution (RCE) on the host machine.
> 
> Since closed-source models provide no gradient access, we formulate adversarial trigger generation as a **derivative-free optimization** problem over discrete token space. We propose a black-box attack framework based on **CMA-ES** (Covariance Matrix Adaptation Evolution Strategy) that leverages publicly available tokenizers to map discrete tokens into a continuous latent space for efficient search.
> 
> > See the [accompanying paper](#citation) for full evaluation results, success rates, and defense analysis.
> 
> ## Threat Model
> 
> ```
>                          Adversarial Trigger (optimized gibberish)
>                                       │
>                                       ▼
> ┌──────────┐    web/file/API    ┌─────────────┐    tool call    ┌──────────────┐
> │ Attacker │ ──────────────────▶│  LLM Agent  │ ──────────────▶│  Host System │
> └──────────┘   injection via    │ (GPT-4 etc) │   bash/exec    │  (RCE target)│
>                honeypot/skill   └─────────────┘                └──────────────┘
>                                       │
>                                       ▼
>                               C2 callback with
>                              credentials & shell
> ```
> 
> **Adversary capabilities:**
> 
> - **No access** to model weights, gradients, or internal activations
> - **API-level query access** only (chat completions with logprobs)
> - **Knowledge of the tokenizer** vocabulary (publicly available for most frontier models)
> 
> **Assumed target environment:**
> 
> - The target is an LLM Agent with tool-calling capabilities (bash execution, web browsing, etc.)
> - The agent processes external data (web pages, files, user-uploaded content) that may contain adversarial triggers
> - The agent exposes a webhook or tool-invocation interface, as is common in agent frameworks (e.g., LangChain, AutoGPT). This toolkit specifically targets **OpenClaw**-based agents as the reference implementation
> 
> ## Method Overview
> 
> ### CMA-ES in Token Embedding Space
> 
> The core optimization pipeline operates as follows:
> 
> 1. **Surrogate Embedding Extraction** — Extract the token embedding matrix from an open-source surrogate model (Phi-2) to define a continuous search space
> 2. **PCA Dimensionality Reduction** — Reduce the embedding dimensionality (2560d → 128d per token) via PCA to make CMA-ES tractable at scale
> 3. **sep-CMA-ES Optimization** — Search over the PCA-reduced space using separ

## 延伸閱讀

相關概念：[[安全漏洞]] · [[對抗性機器學習]]

[GitHub](https://github.com/imbue-bit/OpenClaw-PwnKit)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "安全" AND file.name != "imbue-bit--OpenClaw-PwnKit"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，692 stars
