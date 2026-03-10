---
repo: imbue-bit/OpenClaw-PwnKit
url: https://github.com/imbue-bit/OpenClaw-PwnKit
owner: imbue-bit
owner_type: User
language: Python
license: GPL-3.0
description: "Get shell to almost any OpenClaw host machine."
homepage: ""
stars: 694
stars_per_day: 347
forks: 30
open_issues: 0
created: 2026-03-08
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
category: "安全"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 安全
  - python
aliases:
  - "OpenClaw-PwnKit"
  - "imbue-bit/OpenClaw-PwnKit"
  - "透過對 LLM Agent 工具調用的黑盒攻擊來獲取 shell。"
---

# OpenClaw-PwnKit

**694** stars · **347** stars/天 · 建立 2 天前 · Python · GPL-3.0

> [!summary] 一句話摘要
> 透過對 LLM Agent 工具調用的黑盒攻擊來獲取 shell。

> [!abstract] 核心創新
> 這個框架展示了如何在 LLM 的嵌入空間中進行對抗性觸發的生成，從而實現遠端代碼執行。

## 專案簡介

OpenClaw-PwnKit 是一個研究框架，展示了如何利用對 LLM Agent 工具調用的黑盒攻擊來實現遠端代碼執行（RCE）。它使用 CMA-ES 優化算法在標記嵌入空間中進行對抗性觸發的生成，從而繞過 LLM 的安全對齊。這個工具的獨特之處在於它針對封閉源代碼模型，通過注入看似無意義的對抗性觸發來強迫代理調用系統級工具。與其他安全測試工具相比，OpenClaw-PwnKit 提供了一個新的視角來評估 LLM 的安全性，特別是在工具調用方面。整體來看，這個工具適合對 LLM 安全性進行深入研究的安全專家和開發者。

**技術棧**：`Python`

## 重點功能

- 展示了如何利用對抗性觸發實現 RCE。
- 基於 CMA-ES 的黑盒攻擊框架。
- 針對封閉源代碼模型的安全測試工具。

## 快速開始

1. 克隆或下載此存儲庫
```bash
git clone https://github.com/imbue-bit/OpenClaw-PwnKit.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 運行攻擊框架
```bash
python attack.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 LLM 在各種應用中的普及，對其安全性的關注也日益增加。這個工具揭示了潛在的安全漏洞，吸引了安全研究者和開發者的注意。最近的安全事件也促使人們對這類工具的需求上升。

## 適合誰使用

**目標受眾**：對 LLM 安全性進行研究的安全專家和開發者。

> [!example] 使用場景
> - 安全研究人員 用它來 測試 LLM 的安全性，因為它揭示了對抗性攻擊的潛在風險。
> - 開發者 用它來 評估自家 LLM 的安全性，因為它提供了新的測試方法。
> - 學術研究者 用它來 研究 LLM 的安全性和對抗性行為，因為它提供了詳細的攻擊框架。

## 優缺點分析

> [!success] 優點
> - 提供了一個新的視角來評估 LLM 的安全性。
> - 針對封閉源代碼模型的測試工具，具有實用性。
> - 展示了對抗性攻擊的潛在風險。

> [!danger] 缺點
> - 需要高技術背景以執行操作。
> - 可能存在法律和倫理風險。
> - 僅適用於特定的 LLM 模型。

> [!warning] 注意事項
> - 僅適用於特定的 LLM 模型。
> - 需要高技術水平以理解和使用。
> - 可能存在法律和倫理風險。

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
> └──────────┘   injection via    │ (GPT-4 

## 延伸閱讀

相關概念：[[對抗性攻擊]] · [[遠端代碼執行]] · [[大型語言模型安全]]

[GitHub](https://github.com/imbue-bit/OpenClaw-PwnKit)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，692 stars
