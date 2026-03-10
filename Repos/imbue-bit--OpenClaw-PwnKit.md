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
  - "透過對 LLM 的對抗性工具調用，實現幾乎任何 OpenClaw 主機的遠端代碼執行。"
---

# OpenClaw-PwnKit

**674** stars · **337** stars/天 · 建立 2 天前 · Python · GPL-3.0

> [!summary] 一句話摘要
> 透過對 LLM 的對抗性工具調用，實現幾乎任何 OpenClaw 主機的遠端代碼執行。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (337 stars/day)
> **適合** 專注於 AI 安全測試的安全研究人員和企業安全團隊。
> **一句話重點** 這個專案展示了如何利用對抗性觸發器在不接觸模型內部的情況下，實現對 LLM 的安全測試，為安全研究提供了新的思路。

> [!abstract] 核心創新
> 本專案提出了一種基於 CMA-ES 的黑箱攻擊框架，能夠在無需訪問模型內部的情況下，成功實現對抗性工具調用。

## 專案簡介

OpenClaw-PwnKit 是一個研究框架，旨在展示如何利用對抗性觸發器繞過大型語言模型（LLM）的安全對齊，並實現遠端代碼執行（RCE）。它的核心機制是通過 CMA-ES（協方差矩陣適應進化策略）在令牌嵌入空間進行無導數優化，生成看似無意義的對抗性觸發器，迫使 LLM 執行系統級工具。這個框架針對封閉源代碼模型（如 GPT-4 和 Claude 3），利用公共可用的分詞器將離散令牌映射到連續潛在空間，進行高效搜尋。與其他安全測試工具相比，OpenClaw-PwnKit 不需要對模型權重或內部激活的訪問，僅需 API 級查詢訪問，這使其在攻擊性測試中更具靈活性。實際使用中，這個工具能夠在不需要深層模型知識的情況下，成功觸發 RCE，但也存在對抗性觸發器的生成需要計算資源的限制。這個專案目前仍在 alpha 階段，適合安全研究人員和專業團隊進行測試和研究。建議在需要測試 LLM 安全性時使用，但不適合用於生產環境或未經授權的測試。

**技術棧**：`Python 3.8` · `CMA-ES`

## 重點功能

- 對抗性觸發器生成 — 使用 CMA-ES 在令牌嵌入空間中進行無導數優化，生成有效的對抗性觸發器。
- 黑箱攻擊框架 — 僅需 API 級查詢訪問，無需對模型內部結構的了解。
- 支持多種 LLM — 可針對多個封閉源代碼模型進行測試，如 GPT-4 和 Claude 3。
- 靈活的測試方法 — 能夠在不同的環境中進行安全測試，無需修改原有模型。
- 詳細的威脅模型 — 提供清晰的攻擊流程和對抗者能力描述，幫助使用者理解潛在風險。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/imbue-bit/OpenClaw-PwnKit.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 運行測試
```bash
python test_attack.py
```

## 程式碼範例

```python
# 生成對抗性觸發器
adversarial_trigger = generate_trigger(model, input_data)
# 執行攻擊
execute_attack(adversarial_trigger)
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案由於其針對 LLM 的安全性挑戰而受到關注，特別是在 AI 技術快速發展的背景下。作者團隊具備深厚的安全研究背景，切中許多企業對 AI 安全性的迫切需求。隨著 LLM 的廣泛應用，對其安全性測試的需求日益增加，這使得此專案在當前時期特別受到重視。

## 適合誰使用

**目標受眾**：專注於 AI 安全測試的安全研究人員和企業安全團隊。

> [!example] 使用場景
> - 安全研究員用它來測試 LLM 的安全性，因為它能有效模擬對抗性攻擊，並檢測潛在的 RCE 漏洞。
> - 企業安全團隊用它來評估自家 AI 系統的防護能力，因為這能幫助他們識別和修補安全漏洞，降低風險。
> - 開發者用它來驗證新開發的 LLM 工具的安全性，因為這樣可以在產品上線前發現潛在的安全問題。

## 架構分析

這是一個基於黑箱攻擊的框架，採用單體架構。用戶輸入 → 生成對抗性觸發器 → 執行攻擊。核心技術決策是使用 CMA-ES 進行優化，專案目錄結構中包含 test_attack.py 和 requirements.txt 等關鍵檔案。

## 優缺點分析

> [!success] 優點
> - 不需要對模型內部結構的訪問，降低了使用門檻。
> - 能夠針對多種 LLM 進行測試，靈活性高。
> - 提供詳細的威脅模型，幫助使用者理解攻擊流程。

> [!danger] 缺點
> - 需要較高的計算資源，對於普通開發者可能不友好。
> - 目前仍在 alpha 階段，穩定性不足。
> - 對於某些 LLM 可能無法成功觸發 RCE。

> [!warning] 注意事項
> - 僅支援特定版本的 LLM，可能不適用於所有模型。
> - 需要較高的計算資源來生成對抗性觸發器，可能不適合低端設備。
> - 目前仍在 alpha 階段，API 和功能可能不穩定。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[microsoft--Counterfit\|microsoft/Counterfit]] | Counterfit 提供了更全面的安全測試框架，支持多種攻擊類型，但需要對模型有更深入的了解。 |
| [[OpenAI--Adversarial-Toolbox\|OpenAI/Adversarial-Toolbox]] | Adversarial-Toolbox 專注於對抗樣本生成，功能上較為廣泛，但不專注於 LLM 的工具調用安全。 |

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

## 社群與生態

**社群活躍度**：社群活躍度中等，定期更新和維護。
**連結**：[文件](https://github.com/imbue-bit/OpenClaw-PwnKit/wiki)

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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，692 stars
