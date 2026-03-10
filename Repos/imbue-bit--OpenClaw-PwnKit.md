---
repo: imbue-bit/OpenClaw-PwnKit
url: https://github.com/imbue-bit/OpenClaw-PwnKit
owner: imbue-bit
owner_type: User
language: Python
license: GPL-3.0
description: "Get shell to almost any OpenClaw host machine."
homepage: ""
stars: 695
stars_per_day: 348
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
  - "category/安全"
  - "lang/python"
aliases:
  - "OpenClaw-PwnKit"
  - "imbue-bit/OpenClaw-PwnKit"
  - "透過對 LLM 工具調用的黑盒對抗攻擊獲得幾乎所有 OpenClaw 主機的 shell。"
---

# OpenClaw-PwnKit

**695** stars · **348** stars/天 · 建立 2 天前 · Python · GPL-3.0

> [!summary] 一句話摘要
> 透過對 LLM 工具調用的黑盒對抗攻擊獲得幾乎所有 OpenClaw 主機的 shell。

> [!abstract] 核心創新
> 這個專案提供了一種新的黑盒攻擊方法，能夠繞過 LLM 的安全對齊，實現遠端代碼執行。

## 專案簡介

OpenClaw-PwnKit 是一個研究框架，展示如何通過對 LLM 工具調用的對抗性觸發器來實現遠端代碼執行。它利用 CMA-ES 算法在令牌嵌入空間中進行無導數優化，從而繞過 LLM 的安全對齊。這個專案的特點在於它能夠生成對抗性觸發器，迫使 LLM 代理調用系統級工具，從而達成 RCE。與其他安全測試工具相比，這個框架專注於 LLM 的安全性，並提供了一種新的攻擊方式。實際使用中，這個工具需要一定的計算資源，並且對於 LLM 的版本和配置有特定要求。總體來說，這是一個針對安全研究人員的高級工具，適合用於測試 LLM 的安全性。

**技術棧**：`Python`

## 重點功能

- 展示對 LLM 工具調用的黑盒對抗攻擊。
- 使用 CMA-ES 進行無導數優化。
- 能夠生成對抗性觸發器以實現 RCE。
- 針對關閉源代碼模型的特定攻擊方法。
- 提供詳細的威脅模型和方法概述。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 運行攻擊腳本
```bash
python attack.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 LLM 技術的快速發展，對其安全性的關注也日益增加。這個專案的作者在安全研究領域有豐富的經驗，並且這種黑盒攻擊方法對於關閉源代碼的模型特別有效。隨著對 LLM 安全性測試需求的上升，這個工具自然成為了熱門話題。

## 適合誰使用

**目標受眾**：對於專注於 LLM 安全性測試的安全研究員和開發者。

> [!example] 使用場景
> - 安全研究員 用它來 測試 LLM 的安全性，因為它能夠發現潛在的漏洞。
> - 開發者 用它來 評估自家 LLM 的防護能力，因為可以模擬攻擊場景。
> - 學術研究者 用它來 研究對抗性攻擊的效果，因為提供了一個實驗框架。

## 優缺點分析

> [!success] 優點
> - 提供了一種新穎的攻擊方法，對於安全研究具有重要價值。
> - 能夠針對 LLM 的安全性進行深入測試。
> - 框架靈活，適合多種研究場景。

> [!danger] 缺點
> - 需要高計算資源，限制了使用範圍。
> - 僅針對特定 LLM 有效，適用性有限。
> - 使用者需具備一定的安全知識，入門門檻較高。

> [!warning] 注意事項
> - 需要高計算資源，可能不適合所有環境。
> - 僅針對特定版本的 LLM 有效。
> - 使用者需具備一定的安全知識。

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

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，692 stars
