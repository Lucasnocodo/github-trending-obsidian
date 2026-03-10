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
  - "透過對 LLM 工具調用的黑箱攻擊獲取幾乎任何 OpenClaw 主機的 shell。"
---

# OpenClaw-PwnKit

**674** stars · **337** stars/天 · 建立 2 天前 · Python · GPL-3.0

> [!summary] 一句話摘要
> 透過對 LLM 工具調用的黑箱攻擊獲取幾乎任何 OpenClaw 主機的 shell。

> [!abstract] 核心創新
> 提供了一個黑箱攻擊框架，能夠繞過 LLM 的安全對齊，實現遠程代碼執行。

## 專案簡介

OpenClaw-PwnKit 是一個研究框架，展示如何利用對 LLM 工具調用的黑箱攻擊來實現遠程代碼執行。它的核心機制是通過優化嵌入空間中的對抗觸發器，來繞過 LLM 的安全對齊，迫使代理調用系統級工具。這個專案使用 CMA-ES 算法進行優化，並且不需要對閉源模型的梯度訪問。與其他安全測試工具相比，這個框架專注於對 LLM 的具體攻擊，並提供了詳細的威脅模型和方法概述。這個工具適合安全研究員和開發者，特別是那些對 LLM 安全性有興趣的人，因為它揭示了當前模型的潛在弱點。

**技術棧**：`Python`

## 重點功能

- 展示對 LLM 工具調用的黑箱攻擊。
- 利用 CMA-ES 進行對抗觸發器的優化。
- 支持遠程代碼執行的攻擊模型。
- 提供詳細的威脅模型和方法概述。
- 不需要對閉源模型的梯度訪問。

## 快速開始

1. 克隆專案到本地
```bash
git clone https://github.com/imbue-bit/OpenClaw-PwnKit.git
```
2. 安裝所需的 Python 套件
```bash
pip install -r requirements.txt
```
3. 執行攻擊框架
```bash
python main.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的作者在 LLM 安全研究方面有深厚的背景，並且隨著 LLM 技術的普及，對其安全性的關注也在增加。這個工具的出現正好響應了市場對於 LLM 安全測試工具的需求，並且提供了一個具體的攻擊框架，讓研究者能夠深入探索這個領域。

## 適合誰使用

**目標受眾**：對 LLM 安全性有興趣的安全研究員和開發者。

> [!example] 使用場景
> - 安全研究員 用它來 測試 LLM 工具的安全性，因為可以模擬對抗攻擊來評估風險。
> - 開發者 用它來 分析 LLM 的弱點，因為能夠深入了解模型的行為。
> - 學術界 用它來 進行 LLM 安全性研究，因為提供了一個實用的框架來探索新攻擊技術。

## 優缺點分析

> [!success] 優點
> - 提供了一個具體的攻擊框架，易於使用。
> - 揭示了 LLM 的潛在弱點，對研究有幫助。
> - 不需要對閉源模型的梯度訪問，降低了使用門檻。

> [!danger] 缺點
> - 需要一定的技術背景來理解和使用。
> - 存在道德和法律風險，需謹慎使用。
> - 可能不適用於所有 LLM 模型。

> [!warning] 注意事項
> - 需要對 LLM 和安全研究有一定的了解。
> - 可能不適用於所有 LLM 模型。
> - 存在道德和法律風險，需謹慎使用。

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

相關概念：[[安全漏洞]] · [[對抗攻擊]] · [[機器學習]]

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
