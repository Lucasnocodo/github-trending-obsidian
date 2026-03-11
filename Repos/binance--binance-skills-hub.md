---
repo: binance/binance-skills-hub
url: https://github.com/binance/binance-skills-hub
owner: binance
owner_type: Organization
language: N/A
license: N/A
description: "Binance Skills Hub is an open skills marketplace that gives AI agents native access to crypto"
homepage: ""
stars: 388
stars_per_day: 55
forks: 69
open_issues: 107
created: 2026-03-03
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供 AI agent 原生接入加密貨幣的技能市場，讓用戶能夠透過自然語言進行交易和監控。"
priority: medium
tags:
  - github
  - "category/ai_ml"
  - "lang/other"
  - org
  - "topic/agents"
  - "topic/ai"
  - "topic/crypto"
  - "topic/skills"
aliases:
  - "binance-skills-hub"
  - "binance/binance-skills-hub"
  - "提供 AI agent 原生接入加密貨幣的技能市場，讓用戶能夠透過自然語言進行交易和監控。"
---

# binance-skills-hub

**388** stars · **55** stars/天 · 建立 7 天前 · N/A · 未標註授權

`ORG`

> [!summary] 一句話摘要
> 提供 AI agent 原生接入加密貨幣的技能市場，讓用戶能夠透過自然語言進行交易和監控。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (55 stars/day)
> **適合** 希望利用 AI 自動化加密貨幣交易的開發者和投資者。
> **一句話重點** 這個專案展示了如何利用 AI 技術簡化加密貨幣交易的操作流程。

> [!abstract] 核心創新
> 這個專案提供了一個開放的技能市場，讓 AI agent 能夠原生接入加密貨幣。

## 專案簡介

Binance Skills Hub 是一個開放的技能市場，讓 AI agent 能夠以自然語言執行加密貨幣相關操作，包括搜索代幣、執行交易、追蹤錢包和監控信號。這個平台不僅限於 Binance 的產品，而是針對整個加密生態系統設計，任何 agent 和框架都可以輕鬆接入。技術上，它支持 LangChain、CrewAI 等框架，並且每個技能都以獨立的資料夾形式存在，包含結構化的指令和 YAML 前置資料。與其他工具相比，它的獨特之處在於其開放性和靈活性，允許開發者根據需求添加新技能。實際使用中，這個平台的效能取決於用戶的配置和所選的技能，並且適合各種規模的團隊使用。對於希望快速接入加密貨幣的開發者來說，這是一個值得考慮的選擇，但需要注意的是，它並不提供投資建議，使用者需自行評估風險。

## 重點功能

- 自然語言交易 — 用戶可以用自然語言執行交易指令，提升操作便利性。
- 開放技能市場 — 任何開發者都可以創建和分享技能，促進社群貢獻。
- 多框架支持 — 兼容 LangChain、CrewAI 等多種開發框架，靈活性高。
- 結構化技能管理 — 每個技能都有獨立的資料夾和結構化指令，便於管理和擴展。
- 即時市場監控 — 用戶可以即時查詢市場信號和價格變動，快速做出決策。

## 快速開始

1. Fork 這個倉庫並創建新分支
```bash
git checkout -b feature/
```
2. 創建新資料夾並添加 SKILL.md 檔案
```bash
mkdir new_skill && touch new_skill/SKILL.md
```
3. 按照格式填寫 SKILL.md
```bash
echo '---
title: 
description: 
metadata:
  version: 
author: 
license: MIT
---' > new_skill/SKILL.md
```
4. 開啟 Pull Request 進行審核
```bash
git push origin feature/ && git request-pull origin/main
```

## 為什麼值得關注

> [!tip] 爆紅原因
> Binance 作為加密貨幣領域的領導者，推出這個開放平台正好滿足了市場對於 AI 和加密整合的需求。隨著 AI 技術的進步，許多開發者希望能夠利用自然語言進行加密操作，這使得 Skills Hub 的推出時機恰到好處。

## 適合誰使用

**目標受眾**：希望利用 AI 自動化加密貨幣交易的開發者和投資者。

> [!example] 使用場景
> - 量化交易員用它來自動化交易策略，因為可以透過自然語言快速執行複雜的交易指令，提升交易效率。
> - DeFi 開發者用它來整合各種 DeFi 協議，因為它支持多種框架，讓開發者能夠輕鬆接入不同的區塊鏈。
> - 新手投資者用它來監控市場動態，因為可以用簡單的語言查詢價格和市場信號，降低學習門檻。

## 優缺點分析

> [!success] 優點
> - 開放性高，任何開發者都可以貢獻技能。
> - 支持多種框架，靈活性強。
> - 自然語言操作降低了使用門檻。

> [!danger] 缺點
> - 不提供直接的投資建議，使用者需自行判斷。
> - 功能可能因地區而異，限制使用範圍。
> - 需要一定的技術背景來創建和管理技能。

> [!warning] 注意事項
> - 不提供投資建議，使用者需自行評估風險。
> - 功能可能因地區或用戶配置而異。
> - 需要一定的技術背景來創建和管理技能。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 69 |
| Open Issues | 107 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-03 |
| Repo 大小 | 64 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alplabin](https://github.com/alplabin) | 5 |
> | [@theo-s68](https://github.com/theo-s68) | 5 |
> | [@tantialex-b](https://github.com/tantialex-b) | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Binance Skills Hub
> 
> Binance Skills Hub is an open skills marketplace that gives AI agents native access to crypto: both centralized and decentralized. Search tokens, execute trades, track wallets, monitor signals, and interact with DeFi protocols, all through natural language.
> 
> Built by Binance. Built for everyone.
> 
> We're not building this just for Binance products. Skills Hub is designed for the entire crypto ecosystem: any agent, any framework, any chain. Whether you're building on LangChain, CrewAI, or your own stack, your agents can plug into crypto with a few lines of config.
> 
> ---
> 
> ## About This Repository
> 
> Each skill lives in its own folder and contains a `SKILL.md` file with YAML frontmatter and structured instructions.
> 
> Browse the existing skills to understand patterns and naming conventions before contributing.
> 
> ---
> 
> ## Contribution
> 
> We welcome contributions.
> 
> To add a new skill:
> 
> 1. **Fork the repository** and create a new branch:
> 
>    ```bash
>    git checkout -b feature/
>    ```
> 
> 2. **Create a new folder** containing a `SKILL.md` file.
> 
> 3. **Follow the required format:**
> 
>    ```markdown
>    ---
>    title: 
>    description: A clear description of what the skill does and when to use it.
>    metadata:
>      version: 
>      author: 
>    license: MIT
>    ---
> 
>    # 
> 
>    [Add instructions, examples, and guidelines here]
>    ```
> 
> 4. **Open a Pull Request** to `main` for review.
>    Once approved, the skill will be merged.
> 
> ---
> 
> ## Disclaimer
> 
> Binance Skills Hub is an informational tool only. Binance Skills Hub and its outputs are provided to you on an “as is” and “as available” basis, without representation or warranty of any kind. It does not constitute investment, financial, trading or any other form of advice; represent a recommendation to buy, sell or hold any assets; guarantee the accuracy, timeliness or completeness of the data or analysis presented. Your use of Binance Skills Hub and any information provided in connection with this feature is at your own risk, and you are solely responsible for evaluating the information provided and for all trading decisions made by you. Binance does not endorse or guarantee any AI-generated information. Any AI-generated information or summary should not be solely relied on for decision making. AI-generated content may include or reflect information, views and opinions of third parties, and may also include errors, biases or outdated information. Binance is not responsible for any losses or damages incurred as a result of your use of or reliance on the Binance Skills Hub feature. Binance may modify or discontinue the Binance Skills Hub feature at its discretion, and functionality may vary by region or user profile. Digital asset prices are subject to high market risk and price volatility. The value of your investment may go down or up, and you may not get back the amount invested. You are solely responsible for your investment decisions and Binance is not liable for any losses you may incur. Past performance is not a reliable predictor of future performance. You should only invest in products you are familiar with and where you understand the risks. You should carefully consider your investment experience, financial situation, investment objectives and risk tolerance and consult an independent financial adviser prior to making any investment. This material should not be construed as advice. For more information, please see our [Risk Warning](https://www.binance.com/en/risk-warning) and [Terms of Use](https://www.binance.com/en/terms).

## 延伸閱讀

相關概念：[[Agent 框架]] · [[自然語言處理]] · [[DeFi]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]]

[GitHub](https://github.com/binance/binance-skills-hub)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "binance--binance-skills-hub"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "binance--binance-skills-hub"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，383 stars
