---
repo: imbue-bit/OpenClaw-PwnKit
url: https://github.com/imbue-bit/OpenClaw-PwnKit
owner: imbue-bit
owner_type: User
language: Python
license: GPL-3.0
description: "Get shell to almost any OpenClaw host machine."
homepage: ""
stars: 676
stars_per_day: 225
forks: 30
open_issues: 0
created: 2026-03-08
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "安全"
subcategory: "對抗性攻擊"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "透過對 LLM 工具調用的對抗性攻擊，實現對任何 OpenClaw 主機的遠端代碼執行。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/安全"
  - "lang/python"
aliases:
  - "OpenClaw-PwnKit"
  - "imbue-bit/OpenClaw-PwnKit"
  - "透過對 LLM 工具調用的對抗性攻擊，實現對任何 OpenClaw 主機的遠端代碼執行。"
---

# OpenClaw-PwnKit

**676** stars · **225** stars/天 · 建立 3 天前 · Python · GPL-3.0

> [!summary] 一句話摘要
> 透過對 LLM 工具調用的對抗性攻擊，實現對任何 OpenClaw 主機的遠端代碼執行。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (225 stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意)
> **適合** 對 LLM 安全性有興趣的安全研究人員和滲透測試工程師。
> **一句話重點** 這個專案揭示了 LLM 工具調用的安全漏洞，並提供了一個有效的攻擊框架。

> [!abstract] 核心創新
> 這個專案展示了如何在沒有模型權重的情況下，利用對抗性觸發器實現對 LLM 的遠端代碼執行。

## 專案簡介

這個專案提供了一個框架，利用 CMA-ES 算法在 token 嵌入空間中進行對抗性觸發器的優化，從而繞過 LLM 的安全對齊，實現遠端代碼執行。其工作流程包括從開源模型中提取 token 嵌入矩陣，進行 PCA 降維，然後使用 CMA-ES 進行優化，最後將連續向量映射回離散 token。與其他工具相比，這個框架專注於對抗性觸發器的生成，並且不需要對模型的內部權重或梯度進行訪問。這使得它能夠在封閉源代碼的 LLM 上進行攻擊，這在以往的工具中並不常見。實際上，這個工具的成功率取決於對目標模型的 API 查詢，並且需要對 token 化過程有一定的了解。這個專案目前處於 alpha 階段，適合對安全研究感興趣的團隊使用，但不建議用於生產環境。使用時需謹慎，因為它涉及到潛在的安全風險。

**技術棧**：`Python 3.8` · `CMA-ES` · `PCA`

## 重點功能

- 對抗性觸發器生成 — 使用 CMA-ES 在 token 嵌入空間中進行優化，無需訪問模型權重。
- PCA 降維 — 將嵌入維度從 2560 降至 128，以提高優化效率。
- 黑箱適應性評估 — 通過 API 查詢評估生成的觸發器的有效性，並根據響應進行優化。
- 支持多種攻擊向量 — 包括 CMA-ES 觸發器和簡單的注入方法。
- 針對 OpenClaw 的專用設計 — 專注於針對 OpenClaw 基於的 LLM 工具的攻擊。

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
# 使用 CMA-ES 進行觸發器優化
from cma import CMAEvolutionStrategy

es = CMAEvolutionStrategy(128 * [0], 0.5)
while not es.stop()
    solutions = es.ask()
    es.tell(solutions, fitness_values)
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 imbue-bit 在安全領域有一定的研究背景，這個工具解決了對抗性攻擊在 LLM 上的實施難題，特別是對於封閉源代碼模型的攻擊。最近在安全論壇上對於 LLM 的安全性討論熱烈，這可能促使了該工具的關注。隨著 LLM 應用的普及，對於其安全性研究的需求也在增加，這使得這個工具的出現恰逢其時。

## 適合誰使用

**目標受眾**：對 LLM 安全性有興趣的安全研究人員和滲透測試工程師。

> [!example] 使用場景
> - 安全研究員用它來測試 OpenClaw 基於的 LLM 系統的安全性，因為能夠有效地模擬對抗性攻擊，並評估系統的防禦能力。
> - 滲透測試工程師用它來驗證企業內部使用的 LLM 工具的安全性，因為這樣可以發現潛在的安全漏洞，並提前修補。
> - 學術研究者用它來探索 LLM 的安全性和對抗性機制，因為這能夠提供新的見解，並推動相關研究的發展。

## 架構分析

該專案採用單體架構，主要由攻擊模組組成。用戶輸入 → 觸發器生成 → API 查詢 → 輸出結果。核心技術決策包括使用 CMA-ES 進行優化和 PCA 降維。目錄結構中，`attacks` 目錄包含了主要的攻擊實現。

## 技術深入分析

> [!note]- 展開深入分析
> 該專案的核心是使用 CMA-ES 在 token 嵌入空間中進行對抗性觸發器的優化。這種方法不需要對模型的內部結構進行訪問，而是依賴於 API 查詢來評估生成的觸發器的有效性。PCA 降維使得優化過程更加高效，能夠在更小的維度空間中進行搜索。這種設計使得該工具能夠在封閉源代碼的 LLM 上進行攻擊，這在過去的工具中並不常見。

## 優缺點分析

> [!success] 優點
> - 能夠在無需訪問模型權重的情況下進行攻擊。
> - 提供了多種攻擊方法，靈活性高。
> - 針對特定 LLM 工具的設計，提高了攻擊的有效性。

> [!danger] 缺點
> - 僅限於特定的 LLM 工具，通用性不足。
> - 需要對 LLM 的內部運作有一定了解。
> - 目前處於 alpha 階段，穩定性和可靠性有待提高。

> [!warning] 注意事項
> - 僅支援特定的 LLM 工具，如 OpenClaw。
> - 需要對 token 化過程有一定的了解。
> - 在封閉源代碼模型上攻擊的成功率不保證。
> - 目前處於 alpha 階段，API 可能會變動。

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

相關概念：[[對抗性攻擊]] · [[安全漏洞]] · [[LLM 推論]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，675 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，692 stars
