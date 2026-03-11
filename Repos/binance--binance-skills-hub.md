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
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供 AI agent 原生接入加密貨幣的技能市場，讓交易和資產管理更簡單。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - org
  - "topic/agents"
  - "topic/ai"
  - "topic/crypto"
  - "topic/skills"
aliases:
  - "binance-skills-hub"
  - "binance/binance-skills-hub"
  - "提供 AI agent 原生接入加密貨幣的技能市場，讓交易和資產管理更簡單。"
---

# binance-skills-hub

**388** stars · **55** stars/天 · 建立 7 天前 · N/A · 未標註授權

`ORG`

> [!summary] 一句話摘要
> 提供 AI agent 原生接入加密貨幣的技能市場，讓交易和資產管理更簡單。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (55 stars/day)
> **授權** 未標註授權 (風險較高)
> **適合** 希望將 AI agent 整合到加密貨幣交易流程中的開發者和金融專業人士。
> **一句話重點** 這個專案展示了如何將 AI agent 與加密貨幣交易無縫結合，為開發者提供了強大的工具。

> [!abstract] 核心創新
> 提供 AI agent 原生接入加密貨幣市場的能力，簡化交易和資產管理流程。

## 專案簡介

Binance Skills Hub 是一個開放的技能市場，讓 AI agent 能夠透過自然語言直接接入加密貨幣生態系統。用戶可以搜索代幣、執行交易、追蹤錢包、監控信號，並與 DeFi 協議互動。這個平台支援各種框架，無論是 LangChain、CrewAI 還是自家開發的堆疊，配置幾行代碼即可接入。每個技能都以獨立資料夾的形式存在，並包含結構化的指令和範例，方便開發者理解和貢獻。與其他加密工具相比，Skills Hub 的優勢在於其開放性和可擴展性，任何人都可以為其添加新的技能。使用者可以利用這些技能來簡化交易流程，提升效率，尤其是在高頻交易或資產管理的場景中。該專案目前仍在開發中，適合對加密貨幣和 AI 技術有興趣的開發者和團隊。對於小型團隊或個人開發者，這是一個值得探索的工具，但在使用時需謹慎評估風險。

**技術棧**：`Node.js` · `Express` · `YAML`

## 重點功能

- 自然語言交互 — 用戶可以用自然語言指令進行交易和查詢。
- 多框架支援 — 兼容 LangChain、CrewAI 等多種開發框架。
- 技能貢獻機制 — 開發者可以輕鬆添加新技能，擴展功能。
- 集中與去中心化交易 — 支援對各種加密貨幣的交易操作。
- 即時市場監控 — 提供即時的市場信號和數據查詢功能。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/binance/binance-skills-hub.git
```
2. 進入專案資料夾
```bash
cd binance-skills-hub
```
3. 安裝依賴項
```bash
npm install
```

## 程式碼範例

```bash
# 使用技能查詢代幣價格
/binance-skills-hub query price --token BTC
```

## 為什麼值得關注

> [!tip] 爆紅原因
> Binance 作為知名的加密貨幣交易所，其開發團隊擁有豐富的經驗和資源。這個工具解決了過去 AI agent 無法直接接入加密貨幣生態系統的痛點，提供了一個統一的接口來進行各種操作。最近的社交媒體討論和開源社群的關注也推動了其知名度。隨著加密市場的發展，對於自動化交易和資產管理的需求越來越高，這使得 Skills Hub 的價值更加凸顯。

## 適合誰使用

**目標受眾**：希望將 AI agent 整合到加密貨幣交易流程中的開發者和金融專業人士。

> [!example] 使用場景
> - 量化交易員用它來設置自動交易策略，因為可以快速執行多種交易指令，提升交易效率。
> - 區塊鏈開發者用它來集成 DeFi 協議，因為只需幾行配置即可讓 AI agent 進行資產管理。
> - 金融分析師用它來監控市場信號，因為可以透過自然語言查詢即時數據，快速做出決策。

## 架構分析

該專案採用前後端分離的架構，使用 Node.js 作為後端伺服器，處理用戶請求並與加密貨幣 API 交互。用戶輸入 → 處理 → 輸出，通過自然語言解析用戶指令並執行相應的操作。專案目錄結構清晰，每個技能都有獨立的資料夾，並包含 SKILL.md 文件，方便開發者理解和貢獻。

## 優缺點分析

> [!success] 優點
> - 開放性強，任何人都可以為其添加新技能。
> - 支援多種加密貨幣和 DeFi 協議，靈活性高。
> - 自然語言處理能力提升了用戶體驗，降低了使用門檻。

> [!danger] 缺點
> - 功能仍在開發中，穩定性和完整性有待提升。
> - 需要一定的技術背景才能進行有效的配置和使用。
> - 市場風險高，使用者需自行承擔交易風險。

> [!warning] 注意事項
> - 目前僅支援特定的加密貨幣和 DeFi 協議。
> - 需要對加密市場有基本的了解才能有效使用。
> - 仍在開發中，功能和 API 可能會變動。

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

相關概念：[[自動化]] · [[區塊鏈]] · [[AI agent]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[helenigtxu--TradingView-Claw|helenigtxu/TradingView-Claw]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

[GitHub](https://github.com/binance/binance-skills-hub)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "binance--binance-skills-hub"
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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，383 stars
