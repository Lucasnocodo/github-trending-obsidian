---
repo: imbue-bit/OpenClaw-PwnKit
url: https://github.com/imbue-bit/OpenClaw-PwnKit
owner: imbue-bit
owner_type: User
language: Python
license: GPL-3.0
description: "Get shell to almost any OpenClaw host machine."
homepage: ""
stars: 693
stars_per_day: 347
forks: 29
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
---

# OpenClaw-PwnKit

**693** stars · **347** stars/天 · 建立 2 天前 · Python · GPL-3.0

> [!summary] 一句話摘要
> 透過對 LLM 工具調用的對抗性攻擊，實現遠程代碼執行。

> [!abstract] 核心創新
> 這個專案展示了如何利用無導數優化技術繞過 LLM 的安全對齊。

## 專案簡介

這個框架利用無導數優化技術在 token 嵌入空間中繞過 LLM 的安全對齊，達成遠程代碼執行。它使用 CMA-ES 算法進行對抗性工具調用劫持。與其他安全測試工具相比，這個專案專注於 LLM 的特定攻擊面，提供了新的研究視角。這是一個前沿的研究工具，適合對 LLM 安全性有深入需求的研究者使用。

**技術棧**：`Python`

## 重點功能

- 無導數優化技術在 token 嵌入空間中運作。
- 支持對抗性工具調用劫持以實現 RCE。
- 提供完整的研究框架和方法論。

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在安全研究領域有豐富經驗，這個專案切中對 LLM 安全性測試的需求，尤其是在實際應用中可能出現的漏洞。

## 適合誰使用

**目標受眾**：對 LLM 安全性有興趣的研究者和開發者。

> [!example] 使用場景
> - 安全研究員 用它來 測試 LLM 的安全性，因為它提供了新的攻擊方法。
> - 開發者 用它來 評估自家 LLM 的防護能力，因為可以模擬真實攻擊情境。
> - 學術研究者 用它來 進行 LLM 安全性相關的研究，因為它提供了實驗框架和工具。

> [!warning] 注意事項
> 需要深入的安全研究知識。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 29 |
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
> As Large Language Models (LLMs) are increasingly augmented with tool-calling capabilities, LLM Agents are becoming the backbone of autonomous systems. However, RLHF-based safety alignment optimizes for semantic-level behavioral constraints but does not explicitly defend against adversarial perturbations in the continuous embedding space. This work exposes a critical security threat against closed-source frontier models (GPT-4, Claude 3, etc.): by injecting seemingly nonsensical adversarial triggers, an attacker can induce **adversarial tool-call execution** — forcing the agent to invoke system-leve

## 延伸閱讀

相關概念：[[對抗性攻擊]] · [[大型語言模型]] · [[遠程代碼執行]]

[GitHub](https://github.com/imbue-bit/OpenClaw-PwnKit)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，692 stars
