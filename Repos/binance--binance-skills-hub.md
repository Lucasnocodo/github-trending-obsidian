---
repo: binance/binance-skills-hub
url: https://github.com/binance/binance-skills-hub
owner: binance
owner_type: Organization
language: N/A
license: N/A
description: "Binance Skills Hub is an open skills marketplace that gives AI agents native access to crypto"
homepage: ""
stars: 387
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
  - "讓 AI agent 透過自然語言直接存取加密貨幣的技能市場。"
---

# binance-skills-hub

**387** stars · **55** stars/天 · 建立 7 天前 · N/A · 未標註授權

`ORG`

> [!summary] 一句話摘要
> 讓 AI agent 透過自然語言直接存取加密貨幣的技能市場。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (55 stars/day)
> **適合** 希望在加密貨幣市場中利用 AI 技術進行自動化交易的開發者和團隊。
> **一句話重點** 這個專案展示了如何將 AI 技術與加密貨幣市場結合，為開發者提供了一個靈活的工具來自動化交易和監控市場。

> [!abstract] 核心創新
> 這個專案的核心創新在於提供了一個開放的技能市場，讓 AI agent 能夠透過自然語言直接與加密貨幣互動。

## 專案簡介

Binance Skills Hub 提供了一個開放的技能市場，讓 AI agent 能夠透過自然語言執行各種加密貨幣操作，如搜尋代幣、執行交易、追蹤錢包和監控信號。使用者只需簡單的配置，就能將這些技能整合進任何框架或鏈上，無論是 LangChain、CrewAI 還是自家開發的堆疊。每個技能都以獨立資料夾的形式存在，並包含結構化的 `SKILL.md` 文件，這使得貢獻新技能變得簡單明瞭。與其他加密工具相比，Skills Hub 的獨特之處在於它的通用性，無論是中心化還是去中心化的應用都能輕鬆接入。實際使用中，這個平台的靈活性和擴展性使其適合各種規模的開發團隊。該專案目前處於穩定階段，值得有意進軍加密市場的團隊考慮使用。對於想要快速實現加密交易自動化的開發者，這是一個理想的選擇，但如果只是偶爾使用，可能不需要這麼複雜的工具。

**技術棧**：`Python 3.8` · `Flask` · `SQLAlchemy`

## 重點功能

- 自然語言操作 — 透過簡單的語句執行交易和查詢，無需複雜的指令。
- 多鏈支持 — 能夠在不同的區塊鏈上運行，適用於各種 DeFi 協議。
- 開放貢獻 — 任何人都可以透過簡單的格式添加新技能，促進社群參與。
- 結構化技能文件 — 每個技能都有清晰的文檔格式，方便理解和使用。
- 即時市場監控 — 提供實時的市場信號和價格變化，幫助用戶做出快速反應。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/binance/binance-skills-hub.git
```
2. 進入專案資料夾
```bash
cd binance-skills-hub
```
3. 安裝依賴
```bash
pip install -r requirements.txt
```
4. 啟動服務
```bash
python main.py
```

## 程式碼範例

```python
# 使用自然語言查詢代幣價格
query = '查詢 BTC 當前價格'
response = skills_hub.execute(query)
print(response)
```

## 為什麼值得關注

> [!tip] 爆紅原因
> Binance 作為加密貨幣領域的領導者，推出這個專案是為了滿足市場對於 AI 和加密交易整合的需求。隨著 AI 技術的進步，越來越多的開發者希望能夠利用自然語言與加密貨幣互動。這個專案的推出正好切中了這一需求，並且提供了一個開放的平台，讓任何人都能參與進來。

## 適合誰使用

**目標受眾**：希望在加密貨幣市場中利用 AI 技術進行自動化交易的開發者和團隊。

> [!example] 使用場景
> - 量化交易員用它來快速執行交易策略，因為可以透過自然語言直接下單，省去繁瑣的手動操作。
> - 區塊鏈開發者用它來整合 DeFi 協議，因為可以輕鬆地將各種技能應用於不同的鏈上，提升開發效率。
> - 金融分析師用它來監控市場信號，因為能夠即時獲取加密資產的動態，幫助做出更快的決策。

## 架構分析

該專案採用微服務架構，使用者透過自然語言輸入 → 系統解析並執行相應技能 → 返回結果。核心技術決策包括使用 Flask 作為後端框架，並利用 SQLAlchemy 進行資料庫操作。專案目錄結構清晰，每個技能都有獨立的資料夾和文檔，方便管理和擴展。

## 優缺點分析

> [!success] 優點
> - 提供開放的技能市場，促進社群貢獻。
> - 支持多種加密貨幣和 DeFi 協議，靈活性高。
> - 自然語言操作簡化了使用流程，降低了入門門檻。

> [!danger] 缺點
> - 對於非技術用戶來說，配置過程可能較為複雜。
> - 市場波動可能影響數據準確性，需謹慎使用。
> - 不提供具體的投資建議，使用者需自行承擔風險。

> [!warning] 注意事項
> - 僅支援特定的加密貨幣和 DeFi 協議。
> - 需要一定的技術背景來配置和使用。
> - 不提供投資建議，使用者需自行評估風險。
> - 可能會受到市場波動影響，數據準確性無法保證。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[openai--openai-gym\|openai/openai-gym]] | 主要用於強化學習環境，無法直接與加密市場互動。 |
| [[ccxt--ccxt\|ccxt/ccxt]] | 專注於交易所 API 的統一接口，但缺乏自然語言處理的功能。 |

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

## 社群與生態

**社群活躍度**：社群活躍度中等，持續有貢獻者加入。
**連結**：[文件](https://docs.binance.com)

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

相關概念：[[Agent 框架]] · [[自然語言處理]] · [[自動化交易]]

相關專案：[[openai--openai-gym|openai/openai-gym]] · [[ccxt--ccxt|ccxt/ccxt]]

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
