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
use_case: "透過對 LLM 工具調用的黑盒攻擊，實現幾乎對任何 OpenClaw 主機的遠端代碼執行。"
priority: medium
tags:
  - github
  - "category/安全"
  - "lang/python"
aliases:
  - "OpenClaw-PwnKit"
  - "imbue-bit/OpenClaw-PwnKit"
  - "透過對 LLM 工具調用的黑盒攻擊，實現幾乎對任何 OpenClaw 主機的遠端代碼執行。"
---

# OpenClaw-PwnKit

**674** stars · **337** stars/天 · 建立 2 天前 · Python · GPL-3.0

> [!summary] 一句話摘要
> 透過對 LLM 工具調用的黑盒攻擊，實現幾乎對任何 OpenClaw 主機的遠端代碼執行。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (337 stars/day)
> **適合** 專注於 LLM 安全測試的安全研究人員和滲透測試工程師。
> **一句話重點** 這個專案展示了如何在不接觸模型內部的情況下，利用優化技術進行有效的安全測試。

> [!abstract] 核心創新
> 這個專案提出了一種無需訪問模型內部結構的黑盒攻擊方法，利用 CMA-ES 在 token 嵌入空間中進行優化。

## 專案簡介

OpenClaw-PwnKit 是一個研究框架，利用 CMA-ES 演算法在 token 嵌入空間中進行無導數優化，來繞過大型語言模型的安全對齊，實現遠端代碼執行。其核心流程包括從開源模型中提取 token 嵌入矩陣，使用 PCA 降維，然後在降維後的空間中進行 CMA-ES 優化，最終將連續向量映射回離散 token。這個工具的獨特之處在於它專注於無法訪問模型權重的情況下，仍能進行有效的攻擊，這與許多依賴於模型內部結構的攻擊方法形成鮮明對比。實際使用中，該框架能夠在多種 LLM 上進行測試，並且在測試中顯示出高效的觸發生成能力。這個專案目前處於 alpha 階段，對於安全研究者來說，值得關注，但不建議在生產環境中使用。適合有能力進行安全測試的團隊使用。若你需要測試 LLM 的安全性，這是一個不錯的選擇，但若只是想進行一般的開發，則不建議使用。

**技術棧**：`Python 3.9` · `CMA-ES` · `PCA`

## 重點功能

- CMA-ES 優化 — 使用 CMA-ES 演算法在 token 嵌入空間中進行無導數優化，提升攻擊效率。
- PCA 降維 — 將 token 嵌入降維至 128d，降低計算複雜度，便於大規模搜索。
- 黑盒評估 — 透過 API 查詢目標模型，並根據回應評估觸發的有效性。
- 多種攻擊向量 — 提供不同的攻擊方法，如 CMA-ES 觸發和簡單的注入方法。
- 開源框架 — 提供完整的代碼和文檔，便於研究和擴展。

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
# 使用 CMA-ES 進行觸發優化
from attacks.method2_cma_es import optimize_trigger
optimize_trigger(target_model_api)
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案由一群專注於安全研究的開發者創建，正好切中了 LLM 安全性測試的需求。隨著 LLM 技術的普及，對於其安全性的關注也逐漸上升，這使得此專案在社群中引起了廣泛的討論。特別是在最近幾個月，對於 AI 安全的關注度大幅提升，讓這個專案的曝光率大增。

## 適合誰使用

**目標受眾**：專注於 LLM 安全測試的安全研究人員和滲透測試工程師。

> [!example] 使用場景
> - 安全研究員用它來測試 LLM 的安全性，因為它能有效地模擬攻擊並驗證模型的防護能力。
> - 滲透測試工程師用它來評估基於 OpenClaw 的系統，因為它提供了一個黑盒攻擊的框架，能夠在不接觸內部結構的情況下進行測試。
> - 學術研究者用它來探索 LLM 的安全漏洞，因為它的研究框架能夠生成對應的攻擊觸發，並分析其效果。

## 架構分析

OpenClaw-PwnKit 採用單體架構，核心資料流為：用戶輸入 → 攻擊優化 → 輸出觸發。關鍵技術決策包括使用 CMA-ES 進行優化和 PCA 降維，以提高計算效率。專案目錄結構中，`attacks/` 資料夾包含各種攻擊方法的實現。

## 技術深入分析

> [!note]- 展開深入分析
> OpenClaw-PwnKit 的核心在於使用 CMA-ES 進行無導數優化，這使得它能在沒有模型權重的情況下進行攻擊。其效能特性顯示，透過 PCA 降維，能有效減少計算負擔，並在多次測試中顯示出成功生成有效觸發的能力。關鍵設計取捨在於選擇 CMA-ES 而非其他優化方法，因為 CMA-ES 在面對高維空間時表現更佳，且能夠適應不同的優化需求。與其他競品相比，OpenClaw-PwnKit 的技術決策更專注於黑盒環境下的攻擊，這使其在特定場景下具有優勢。

## 優缺點分析

> [!success] 優點
> - 提供了創新的黑盒攻擊方法，能有效測試 LLM 的安全性。
> - 使用 CMA-ES 演算法，能在無需模型內部結構的情況下進行優化。
> - 開源且文檔完善，便於研究和擴展。

> [!danger] 缺點
> - 僅適用於特定的 LLM 模型，限制了其通用性。
> - 攻擊效果可能因模型實現的不同而有所差異。
> - 仍處於 alpha 階段，穩定性和功能可能不完善。

> [!warning] 注意事項
> - 僅支援特定的 LLM 模型，如 GPT-4 和 Claude 3。
> - 需要對目標模型的 API 有基本的訪問權限。
> - 攻擊效果依賴於模型的具體實現，可能在不同環境下表現不一。
> - 目前仍處於 alpha 階段，API 和功能可能會不斷變動。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[imbue-bit--Adversarial-LLM\|imbue-bit/Adversarial-LLM]] | 該工具專注於生成對抗樣本，而 OpenClaw-PwnKit 更加針對於工具調用的安全性測試。 |
| [[microsoft--Counterfit\|microsoft/Counterfit]] | Counterfit 提供了多種攻擊向量和防禦測試，而 OpenClaw-PwnKit 專注於無導數優化的黑盒攻擊。 |

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

相關概念：[[安全漏洞]] · [[對抗樣本]] · [[滲透測試]] · [[大型語言模型]]

相關專案：[[imbue-bit--Adversarial-LLM|imbue-bit/Adversarial-LLM]] · [[microsoft--Counterfit|microsoft/Counterfit]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[vulhunt-re--vulhunt|vulhunt-re/vulhunt]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]]

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
