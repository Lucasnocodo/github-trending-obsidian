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
  - "透過對 LLM 工具調用的對抗性攻擊，實現幾乎任何 OpenClaw 主機的遠端代碼執行。"
---

# OpenClaw-PwnKit

**674** stars · **337** stars/天 · 建立 2 天前 · Python · GPL-3.0

> [!summary] 一句話摘要
> 透過對 LLM 工具調用的對抗性攻擊，實現幾乎任何 OpenClaw 主機的遠端代碼執行。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (337 stars/day)
> **適合** 專注於 LLM 安全性研究的安全專家和學術研究者。
> **一句話重點** 這個專案揭示了 LLM 工具調用的潛在安全漏洞，並提供了一種新的對抗性攻擊方法，值得安全研究者深入探索。

> [!abstract] 核心創新
> 這個專案提出了一種基於 CMA-ES 的黑箱對抗性攻擊方法，能夠在無需訪問模型內部的情況下實現遠端代碼執行。

## 專案簡介

這個專案提供了一個黑箱攻擊框架，利用 CMA-ES 演算法在令牌嵌入空間中進行優化，以繞過大型語言模型（LLM）的安全對齊，並實現遠端代碼執行（RCE）。其流程包括提取開源模型的令牌嵌入矩陣，進行 PCA 降維，然後在降維後的空間中使用 separable CMA-ES 進行搜索，最後將連續向量映射回離散令牌。與其他對抗性攻擊工具相比，這個框架不需要對模型權重或內部激活的訪問，僅依賴 API 查詢，這使得它在封閉源代碼模型（如 GPT-4）上特別有效。實際使用中，這個工具能夠在特定環境下成功觸發系統工具調用，但也有其限制，如需要對目標模型的 API 進行多次查詢以評估觸發器的有效性。整體來看，這是一個處於 beta 階段的工具，適合對安全研究有興趣的團隊使用，但不建議用於生產環境。使用時需謹慎，因為它可能涉及倫理和法律問題。

**技術棧**：`Python 3.8` · `CMA-ES`

## 重點功能

- 黑箱對抗性攻擊 — 利用 CMA-ES 在令牌嵌入空間中進行優化，無需訪問模型內部權重。
- PCA 降維 — 將嵌入維度從 2560 降至 128，以提高計算效率。
- 連續到離散映射 — 使用 FAISS 進行最近鄰搜索，將優化後的向量轉換回令牌。
- 黑箱適應性評估 — 根據工具調用的響應評估觸發器的有效性，支持多種評分路徑。
- 多種攻擊向量 — 包括 CMA-ES 觸發器和基線的簡單注入方法，提供不同的攻擊策略。

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
python attacks/method2_cma_es.py
```

## 程式碼範例

```python
# 使用 CMA-ES 進行對抗性觸發器優化
from attacks.method2_cma_es import optimize_trigger

trigger = optimize_trigger(target_model)
print(trigger)
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的作者背景在於安全研究，針對 LLM 的安全性提出了新的攻擊向量，切中目前 LLM 工具調用的安全需求。隨著 LLM 技術的普及，對於其安全性的關注也日益增加，這使得該專案在當前時期受到重視。

## 適合誰使用

**目標受眾**：專注於 LLM 安全性研究的安全專家和學術研究者。

> [!example] 使用場景
> - 安全研究人員用它來測試 LLM 的安全性，因為能夠模擬對抗性攻擊，評估模型的脆弱性。
> - 開發者用它來驗證自家 LLM 工具的安全性，因為這能幫助發現潛在的安全漏洞，避免未來的攻擊。
> - 學術研究者用它來進行對抗性攻擊的研究，因為這個框架提供了一個實用的工具來探索 LLM 的安全性問題。

## 架構分析

這是一個基於 CLI 的單體應用，核心資料流為：用戶輸入（觸發器參數） → 處理（CMA-ES 優化過程） → 輸出（生成的觸發器）。關鍵技術決策包括使用 PCA 降維以提高計算效率，以及利用 FAISS 進行令牌映射。專案目錄結構中，`attacks` 目錄包含主要的攻擊實現文件。

## 優缺點分析

> [!success] 優點
> - 能夠針對封閉源代碼模型進行有效的安全測試。
> - 提供多種攻擊策略，靈活應對不同情境。
> - 利用 CMA-ES 演算法，無需對模型進行內部訪問，降低了使用門檻。

> [!danger] 缺點
> - 對於開源模型的適用性有限，主要針對封閉源代碼模型設計。
> - 使用過程中可能涉及倫理和法律問題，需謹慎處理。
> - 需要較高的計算資源，特別是在進行多次 API 查詢時。

> [!warning] 注意事項
> - 僅支援特定的 LLM 工具調用框架，如 OpenClaw。
> - 需要多次 API 查詢以評估觸發器的有效性，可能導致高延遲。
> - 對於開源模型的適用性有限，主要針對封閉源代碼模型設計。
> - 涉及倫理和法律問題，使用時需謹慎。

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

相關概念：[[對抗性攻擊]] · [[大型語言模型]] · [[安全漏洞]]

[GitHub](https://github.com/imbue-bit/OpenClaw-PwnKit)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "安全" AND file.name != "imbue-bit--OpenClaw-PwnKit"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "imbue-bit--OpenClaw-PwnKit"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，692 stars
