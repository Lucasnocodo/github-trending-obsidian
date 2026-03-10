---
repo: imbue-bit/OpenClaw-PwnKit
url: https://github.com/imbue-bit/OpenClaw-PwnKit
owner: imbue-bit
owner_type: User
language: Python
license: GPL-3.0
description: "Get shell to almost any OpenClaw host machine."
homepage: ""
stars: 692
stars_per_day: 346
forks: 29
open_issues: 0
created: 2026-03-08
first_seen: 2026-03-10
week: "2026-W11"
category: "安全"
release_tag: ""
status: to-review
tags:
  - github
  - 安全
  - python
---

# OpenClaw-PwnKit

**692** stars · **346** stars/天 · 建立 2 天前 · Python · GPL-3.0

> [!summary] 一句話摘要
> 透過對 LLM 工具調用的對抗性攻擊，實現遠程代碼執行。

## 專案簡介

這個專案展示了一種黑箱對抗性攻擊的方法，能夠繞過 LLM 的安全對齊，實現遠程代碼執行。它使用 Python 實作，並提供了一個研究框架，適合安全研究人員進行測試和驗證。與其他安全測試工具相比，這個專案專注於 LLM 的工具調用，提供了新的攻擊視角。值得關注，特別是對於安全研究領域的專業人士。

## 重點功能

- 提供黑箱對抗性攻擊的研究框架，專注於 LLM 工具調用。
- 能夠實現遠程代碼執行，驗證安全漏洞。
- 適合安全研究和測試，提供詳細的配置和使用指南。

## 快速開始

安裝所需的依賴包。,運行框架並配置測試環境。

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 LLM 的普及，對於其安全性問題的關注也在增加，這個工具正好切中這一需求。作者的背景使得這個專案在技術上具備深度和廣度。

## 適合誰使用

**目標受眾**：安全研究人員和開發者，特別是對 LLM 安全性有興趣的專業人士。

> [!example] 使用場景
> - 安全研究人員用它來測試 LLM 的安全性，因為能夠驗證其對抗性攻擊的效果。
> - 開發者用它來檢查自家 LLM 應用的安全漏洞，因為能夠模擬潛在的攻擊場景。
> - 企業用它來加強 LLM 應用的安全防護，因為能夠識別並修補安全缺陷。

> [!warning] 注意事項
> 僅限於特定的 LLM 應用，未來可能需要擴展。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | Python |
| 授權 | GPL-3.0 |
| Stars | 692 |
| Forks | 29 |
| Issues | 0 |
| 建立日期 | 2026-03-08 |

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

相關概念：#對抗性攻擊 · #安全測試 · #大型語言模型

[GitHub](https://github.com/imbue-bit/OpenClaw-PwnKit)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，692 stars
