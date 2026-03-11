---
repo: imbue-bit/OpenClaw-PwnKit
url: https://github.com/imbue-bit/OpenClaw-PwnKit
owner: imbue-bit
owner_type: User
language: Python
license: GPL-3.0
description: "Get shell to almost any OpenClaw host machine."
homepage: ""
stars: 678
stars_per_day: 226
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
use_case: "透過對 LLM 的工具調用進行對抗性攻擊，實現遠端代碼執行。"
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
  - "透過對 LLM 的工具調用進行對抗性攻擊，實現遠端代碼執行。"
---

# OpenClaw-PwnKit

**678** stars · **226** stars/天 · 建立 3 天前 · Python · GPL-3.0

> [!summary] 一句話摘要
> 透過對 LLM 的工具調用進行對抗性攻擊，實現遠端代碼執行。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (226 stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 1 天前) · **貢獻者** 4+ 人
> **適合** 專注於 LLM 安全測試的安全研究人員和開發者。
> **一句話重點** 這個專案揭示了 LLM 安全性的一個重大漏洞，並提供了針對性的攻擊方法。

> [!abstract] 核心創新
> 通過 CMA-ES 在令牌嵌入空間中實現無梯度的對抗性觸發器優化。

## 專案簡介

OpenClaw-PwnKit 是一個研究框架，旨在展示如何利用對抗性觸發器繞過大型語言模型（LLM）的安全防護，並實現遠端代碼執行（RCE）。這個工具的核心流程是：攻擊者透過 API 注入對抗性觸發器，LLM 代理接收到這些觸發器後，會執行系統工具（如 bash），從而達成 RCE。該框架使用 CMA-ES（協方差矩陣自適應進化策略）來優化令牌嵌入，並利用主流的開源模型提取嵌入矩陣，進行降維處理以提高搜索效率。與其他工具相比，OpenClaw-PwnKit 的優勢在於它不需要對模型權重或梯度的訪問，僅依賴於 API 查詢，這使得攻擊者可以在不接觸模型內部的情況下進行攻擊。該工具的效能在於能夠有效地生成對抗性觸發器，並在多種環境中進行測試，展示了其在實際應用中的潛在威脅。這個專案目前處於 beta 階段，適合安全研究人員和開發者探索 LLM 的安全性問題。建議在進行安全測試時使用，避免在生產環境中直接應用，因為其潛在的安全風險。替代方案如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker 提供了不同的攻擊方法，但缺乏這種針對 LLM 的專門優化技術。

**技術棧**：`Python 3.8` · `FastAPI` · `NumPy` · `scikit-learn`

## 重點功能

- CMA-ES 優化 — 使用 CMA-ES 在令牌嵌入空間中進行對抗性觸發器的優化，無需梯度信息。
- 黑盒評估 — 通過 API 查詢目標模型，評估生成的觸發器的有效性。
- PCA 降維 — 將嵌入維度從 2560 降至 128，以提高優化效率。
- 多種攻擊向量 — 包含多種攻擊方法，如 naive injection 和 honeypot delivery。
- FastAPI C2 服務器 — 提供 webhook 接收功能，便於管理和控制攻擊過程。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/imbue-bit/OpenClaw-PwnKit.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 啟動 C2 服務器
```bash
python core/c2_server.py
```

## 程式碼範例

python
# 使用 CMA-ES 生成對抗性觸發器
from attacks.method2_cma_es import generate_trigger

# 生成觸發器
trigger = generate_trigger(target_model='GPT-4', iterations=100)
print(trigger)  # 輸出生成的對抗性觸發器

## 為什麼值得關注

> [!tip] 爆紅原因
> 該專案的主要貢獻者 imbue-bit 先前在安全領域有多個知名專案，這使得 OpenClaw-PwnKit 自然受到關注。它解決了對於 LLM 安全性的一個重要痛點：如何在不接觸模型內部的情況下進行有效的攻擊。最近的安全研究討論中，對於 LLM 的安全性問題引發了廣泛的關注，這可能是該專案受到重視的原因之一。

## 適合誰使用

**目標受眾**：專注於 LLM 安全測試的安全研究人員和開發者。

> [!example] 使用場景
> - 安全研究人員用它來測試 LLM 系統的安全性，因為它能有效地模擬對抗性攻擊，幫助識別潛在漏洞。
> - 開發者用它來驗證自己開發的 LLM 代理的安全性，因為能夠在不接觸內部權重的情況下進行攻擊測試。
> - 學術研究者用它來探索對抗性攻擊的最新技術，因為它提供了一個基於 CMA-ES 的創新方法來生成對抗性觸發器。

## 架構分析

OpenClaw-PwnKit 採用單體架構，核心資料流為：用戶輸入（對抗性觸發器） → 處理（CMA-ES 優化） → 輸出（生成的觸發器）。關鍵技術決策包括使用 FastAPI 作為 C2 服務器，並在 attacks/ 目錄中實現多種攻擊方法。目錄結構清晰，便於擴展和維護。

## 技術深入分析

OpenClaw-PwnKit 的核心技術機制是使用 CMA-ES 進行對抗性觸發器的優化，這使得攻擊者能夠在不接觸模型內部的情況下進行有效攻擊。該工具能夠處理多達數千個嵌入，並通過 PCA 降維來提高計算效率。設計上選擇 Python 和 FastAPI 使得開發和部署都相對簡單，但也可能在性能上受到限制。隨著對 LLM 安全性的關注增加，這種基於 API 的攻擊方法可能會面臨更嚴格的防禦措施，從而增加技術風險。

## 優缺點分析

> [!success] 優點
> - 創新的對抗性觸發器生成方法，無需對模型內部結構的訪問。
> - 支持多種攻擊向量，靈活性高。
> - 清晰的目錄結構，便於開發者理解和擴展。

> [!danger] 缺點
> - 目前僅限於特定 LLM 代理，通用性不足。
> - 需要對目標模型的 API 訪問，限制了使用場景。
> - 處於 beta 階段，可能存在不穩定性。

> [!warning] 注意事項
> - 僅針對特定的 LLM 代理進行測試，可能不適用於所有模型。
> - 需要對目標模型的 API 進行訪問，限制了使用場景。
> - 目前處於 beta 階段，可能存在未發現的漏洞或不穩定性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供文件同步功能，主要針對資料傳輸，而非針對 LLM 的安全性測試。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於網絡攻擊的工具，缺乏針對 LLM 的專門優化技術。 |

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

**社群活躍度**：社群活躍度中等，有定期的更新和討論。
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

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[imbue-bit--Adversarial-LLM|imbue-bit/Adversarial-LLM]] · [[microsoft--Counterfit|microsoft/Counterfit]] · [[dazzyddos--PrivHound|dazzyddos/PrivHound]] · [[vulhunt-re--vulhunt|vulhunt-re/vulhunt]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]]

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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

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

- [[2026-03-11|2026-03-11]] — 再次上榜，676 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，692 stars
