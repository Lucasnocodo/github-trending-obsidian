---
repo: sterlingcrispin/nothing-ever-happens
url: https://github.com/sterlingcrispin/nothing-ever-happens
owner: sterlingcrispin
owner_type: User
language: Python
license: CC0-1.0
description: "Polymarket bot that buys \"No\" on all non-sports markets"
homepage: ""
stars: 771
stars_per_day: 257
forks: 75
open_issues: 0
created: 2026-04-12
pushed_at: 2026-04-13
first_seen: 2026-04-16
week: "2026-W16"
month: "2026-04"
category: "其他"
subcategory: "自動化交易"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-16
use_case: "自動在 Polymarket 上購買所有非體育市場的「否」選項。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-19"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 254
readme_length: 3015
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-16"
star_history: "2026-04-16:771"
tags:
  - github
  - "category/其他"
  - "lang/python"
  - easy_install
  - "topic/meme"
  - "topic/not_financial_advice"
  - "topic/nothing_ever_happens"
  - "topic/polymarket"
aliases:
  - "nothing-ever-happens"
  - "sterlingcrispin/nothing-ever-happens"
  - "自動在 Polymarket 上購買所有非體育市場的「否」選項。"
---

# nothing-ever-happens

**771** stars · **257** stars/天 · 建立 3 天前 · Python · CC0-1.0

```dataviewjs
const me = dv.page("Repos/sterlingcrispin--nothing-ever-happens");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

`meme` `not-financial-advice` `nothing-ever-happens` `polymarket`

> [!summary] 一句話摘要
> 自動在 Polymarket 上購買所有非體育市場的「否」選項。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (257 stars/day)
> **授權** CC0-1.0 · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 對自動化交易和 Polymarket 感興趣的開發者或交易者。
> **一句話重點** 這個專案的最大價值在於它提供了一個針對非體育市場的自動化交易解決方案，讓用戶能夠更輕鬆地參與市場。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/sterlingcrispin--nothing-ever-happens");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化交易" && p.file.name !== "sterlingcrispin--nothing-ever-happens" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化交易 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到自動化交易的效果，值得嘗試。

> [!abstract] 核心創新
> 這個專案提供了一個專注於非體育市場的自動化交易機器人，填補了市場空白。

## 專案簡介

這個 Polymarket 機器人專注於自動化買入所有非體育市場的「否」選項，旨在利用市場的波動性獲利。用戶只需設定環境變數，機器人便會掃描市場，尋找低於設定價格上限的「否」選項，並持續追蹤開放的頭寸。其核心賣點是簡化了交易過程，並提供了一個實時儀表板來監控狀態。運行時需要配置 `BOT_MODE=live`、`LIVE_TRADING_ENABLED=true` 和 `DRY_RUN=false`，以便進行實際交易，否則將使用模擬交易模式。這個機器人使用 Python 實現，並依賴於多個庫，如 `sqlalchemy` 和 `aiohttp`，以支持異步操作和數據庫交互。

相較於其他類似工具，如 `0xGF/boneyard`，這個專案專注於非體育市場，並提供了更簡單的配置和運行流程。它的設計考量了安全性，要求用戶提供私鑰和數據庫連接信息，確保交易的安全性。使用者可能會遇到的問題包括環境變數配置不當，這會導致機器人無法正常運行。這個專案目前處於初始階段，適合對 Polymarket 有興趣的開發者或交易者。未來可能會增加更多功能，如自動化報告生成和更豐富的市場分析工具。

**技術棧**：`Python` · `SQLAlchemy` · `aiohttp`

## 重點功能

- 自動買入「否」選項 — 機器人會自動在低於設定價格的情況下買入所有非體育市場的「否」選項。
- 實時儀表板 — 提供用戶一個可視化的界面來監控交易狀態和市場動態。
- 異步操作 — 使用 `aiohttp` 實現高效的網絡請求，減少延遲。
- 模擬交易模式 — 在實際交易前可使用模擬模式進行測試，降低風險。
- 環境變數配置 — 透過 `.env` 文件輕鬆設定私密信息和運行參數。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 複製配置文件
```bash
cp config.example.json config.json
```
3. 啟動機器人
```bash
python -m bot.main
```

## 程式碼範例

```python
{
  "前置條件": "確保已安裝所有依賴並配置環境變數。",
  "指令": "python -m bot.main",
  "預期輸出": "啟動機器人並顯示實時儀表板。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 771 stars（257/天），forks 75（9.7%），這顯示出相對穩定的關注度。作者 sterlingcrispin 似乎專注於創建與 Polymarket 相關的工具，這個專案解決了自動化交易的需求，特別是在非體育市場上，這在現有工具中並不常見。社群對於這類工具的需求正在增長，尤其是隨著市場的多樣化。這個專案的高 forks/stars 比率顯示出許多人正在積極修改和使用這個工具。

## 適合誰使用

**目標受眾**：對自動化交易和 Polymarket 感興趣的開發者或交易者。

> [!example] 使用場景
> - 交易者用它來自動化在 Polymarket 上的非體育市場交易，因為手動操作耗時且容易出錯。
> - 數據分析師用它來收集市場數據並分析趨勢，因為這樣可以快速獲得大量資料以進行深入分析。
> - 開發者用它來測試 Polymarket 的 API，因為這個機器人提供了現成的實現範例，能快速上手。

## 架構分析

這個專案採用異步架構，利用 Python 的 `asyncio` 來處理並發請求，這使得機器人在面對多個市場時能夠高效運行。資料流方面，機器人從 Polymarket API 獲取市場數據，根據設定的價格上限進行交易決策，並將結果存儲到數據庫中。選擇異步架構的好處是能夠同時處理多個請求，但代價是需要用戶熟悉異步編程的概念。擴展性方面，這個設計能夠支持未來添加更多的交易策略，但在實現複雜策略時可能會面臨挑戰。

## 技術深入分析

這個專案使用 Python 作為主要開發語言，並依賴於多個庫來支持其功能。核心技術機制是使用 `aiohttp` 進行異步網絡請求，這使得機器人能夠在高頻交易中保持高效。效能方面，這個機器人能夠在短時間內處理大量市場數據，但在高流量時可能會面臨 API 限制。設計上，選擇 Python 是因為其生態系統豐富且易於開發，但這也可能導致性能瓶頸，特別是在處理大量數據時。技術風險方面，依賴於外部 API 的穩定性，若 Polymarket 的 API 發生變更，可能會影響機器人的運行。整合方面，這個專案能夠輕鬆與其他 Python 工具鏈整合，但對於非 Python 開發者來說，可能需要額外的學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和運行指引，並包含必要的範例。安裝過程相對順暢，但需要用戶自行配置環境變數，這對新手來說可能有些挑戰。整體來說，花 30 分鐘應該能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 簡單易用，快速上手。
> - 提供實時儀表板，方便監控交易狀態。
> - 支持模擬交易，降低風險。

> [!danger] 缺點
> - 僅限於非體育市場，功能較為單一。
> - 需要用戶自行配置環境變數，對新手不友好。
> - 缺乏詳細的文檔和多語言支持。

> [!warning] 注意事項
> - 僅支持非體育市場的交易。
> - 需要正確配置環境變數，否則無法正常運行。
> - 目前缺乏多語言支持，僅提供英文文檔。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於多種市場的交易，而本專案專注於非體育市場的自動化買入。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供更複雜的交易策略，而本專案則專注於簡單的「否」選項交易。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 使用 Rust 實作，提供更高的性能和安全性。 | 如果需要更高效能和安全性的交易系統，則應選擇此工具。 | medium，因為需要轉換到不同的語言和架構。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供更複雜的交易策略，支持多種市場。 | 如果需要多樣化的交易策略和市場選擇，則應選擇此工具。 | high，因為需要重新設計交易邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **nothing-ever-happens** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，提供更高的性能和安全性。 | 提供更複雜的交易策略，支持多種市場。 |
> | 遷移成本 | - | medium，因為需要轉換到不同的語言和架構。 | high，因為需要重新設計交易邏輯。 |
> | 適用場景 | 主要場景 | 如果需要更高效能和安全性的交易系統，則應選擇此工具。 | 如果需要多樣化的交易策略和市場選擇，則應選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和學習，不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 環境變數配置不當可能導致機器人無法運行
  - 解法：仔細檢查 `.env` 和 `config.json` 配置
- [MEDIUM] 在高流量時可能會遇到 API 限制
  - 解法：考慮使用模擬模式進行測試
- [MEDIUM] 缺乏詳細的文檔，可能導致使用困難
  - 解法：參考 GitHub Issues 了解常見問題

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊進行非體育市場的自動化交易 | 非常適合 | 簡單易用，能快速上手並實現自動化。 |
| 大型機構需要高頻交易解決方案 | 不適合 | 性能和功能較為單一，無法滿足複雜需求。 |
| 個人開發者想要學習自動化交易 | 非常適合 | 提供清晰的文檔和簡單的配置流程。 |
| 對 Polymarket 有興趣的研究者 | 適合 | 能夠快速獲得市場數據並進行分析。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到自動化交易的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要配置私鑰和數據庫連接，確保安全性。依賴於外部 API，需注意其穩定性和變更風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Polymarket 交易平台搭配使用，處於自動化交易的核心環節。在使用時，可以將其與 Heroku 部署，具體做法是設置環境變數並推送到 Heroku。它能與主流 CI/CD 工具如 GitHub Actions 整合，支援自動化測試和部署。整合的摩擦點主要在於環境變數的配置，對於新手來說可能需要一些時間來熟悉。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/sterlingcrispin--nothing-ever-happens");
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
> const me = dv.page("Repos/sterlingcrispin--nothing-ever-happens");
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
| Forks | 75 |
| Open Issues | 0 |
| 最後推送 | 2026-04-13 |
| 建立日期 | 2026-04-12 |
| Repo 大小 | 254 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/sterlingcrispin/nothing-ever-happens) |
| Topics | `meme` `not-financial-advice` `nothing-ever-happens` `polymarket` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `py-clob-client` `python-dotenv` `sqlalchemy` `psycopg2-binary` `python-json-logger` `web3` `aiohttp`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 94
>     "HTML" : 5
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@sterlingcrispin](https://github.com/sterlingcrispin) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，無開放的討論平台。
**連結**：[文件](https://github.com/sterlingcrispin/nothing-ever-happens)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-12）
> **活躍天數** 1 天 · **最新 commit** Initial public release

## README 摘錄

> [!info]- 展開查看原文 README
> # Nothing Ever Happens Polymarket Bot
> 
> Focused async Python bot for Polymarket that buys No on standalone non-sports yes/no markets.
> 
> *FOR ENTERTAINMENT ONLY. PROVIDED AS IS, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED. USE AT YOUR OWN RISK. THE AUTHORS ARE NOT LIABLE FOR ANY CLAIMS, LOSSES, OR DAMAGES.*
> 
> - `bot/`: runtime, exchange clients, dashboard, recovery, and the `nothing_happens` strategy
> - `scripts/`: operational helpers for deployed instances and local inspection
> - `tests/`: focused unit and regression coverage
> 
> ## Runtime
> 
> The bot scans standalone markets, looks for NO entries below a configured price cap, tracks open positions, exposes a dashboard, and persists live recovery state when order transmission is enabled.
> 
> The runtime is `nothing_happens`.
> 
> ## Safety Model
> 
> Real order transmission requires all three environment variables:
> 
> - `BOT_MODE=live`
> - `LIVE_TRADING_ENABLED=true`
> - `DRY_RUN=false`
> 
> If any of those are missing, the bot uses `PaperExchangeClient`.
> 
> Additional live-mode requirements:
> 
> - `PRIVATE_KEY`
> - `FUNDER_ADDRESS` for signature types `1` and `2`
> - `DATABASE_URL`
> - `POLYGON_RPC_URL` for proxy-wallet approvals and redemption
> 
> ## Setup
> 
> ```bash
> pip install -r requirements.txt
> cp config.example.json config.json
> cp .env.example .env
> ```
> 
> `config.json` is intentionally local and ignored by git.
> 
> ## Configuration
> 
> The runtime reads:
> 
> - `config.json` for non-secret runtime settings
> - `.env` for secrets and runtime flags
> 
> The runtime config lives under `strategies.nothing_happens`. See [config.example.json](config.example.json) and [.env.example](.env.example).
> 
> You can point the runtime at a different config file with `CONFIG_PATH=/path/to/config.json`.
> 
> ## Running Locally
> 
> ```bash
> python -m bot.main
> ```
> 
> The dashboard binds `$PORT` or `DASHBOARD_PORT` when one is set.
> 
> ## Heroku Workflow
> 
> The shell helpers use either an explicit app name argument or `HEROKU_APP_NAME`.
> 
> ```bash
> export HEROKU_APP_NAME=
> ./alive.sh
> ./logs.sh
> ./live_enabled.sh
> ./live_disabled.sh
> ./kill.sh
> ```
> 
> Generic deployment flow:
> 
> ```bash
> heroku config:set BOT_MODE=live DRY_RUN=false LIVE_TRADING_ENABLED=true -a "$HEROKU_APP_NAME"
> heroku config:set PRIVATE_KEY= FUNDER_ADDRESS= POLYGON_RPC_URL= DATABASE_URL= -a "$HEROKU_APP_NAME"
> git push heroku :main
> heroku ps:scale web=1 worker=0 -a "$HEROKU_APP_NAME"
> ```
> 
> Only run the `web` dyno. The `worker` entry exists only to fail fast if it is started accidentally.
> 
> ## Tests
> 
> ```bash
> python -m pytest -q
> ```
> 
> ## Included Scripts
> 
> | Script | Purpose |
> | --- | --- |
> | `scripts/db_stats.py` | Inspect live database table counts and recent activity |
> | `scripts/export_db.py` | Export live tables from `DATABASE_URL` or a Heroku app |
> | `scripts/wallet_history.py` | Pull positions, trades, and balances for the configured wallet |
> | `scripts/parse_logs.py` | Convert Heroku JSON logs into readable terminal or HTML output |
> 
> ## Repository Hygiene
> 
> Local config, ledgers, exports, reports, and deployment artifacts are ignored by default.

## 延伸閱讀

相關概念：[[自動化交易]] · [[API 設計]] · [[異步編程]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]]

[GitHub](https://github.com/sterlingcrispin/nothing-ever-happens)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化交易）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化交易" AND file.name != "sterlingcrispin--nothing-ever-happens"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "sterlingcrispin--nothing-ever-happens"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "sterlingcrispin--nothing-ever-happens" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "sterlingcrispin--nothing-ever-happens"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化交易","API 設計","異步編程"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "sterlingcrispin--nothing-ever-happens" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/sterlingcrispin--nothing-ever-happens");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "sterlingcrispin--nothing-ever-happens" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "sterlingcrispin" AND file.name != "sterlingcrispin--nothing-ever-happens"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/sterlingcrispin--nothing-ever-happens");
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
> const me = dv.page("Repos/sterlingcrispin--nothing-ever-happens");
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
> const me = dv.page("Repos/sterlingcrispin--nothing-ever-happens");
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
> const me = dv.page("Repos/sterlingcrispin--nothing-ever-happens");
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
> const me = dv.page("Repos/sterlingcrispin--nothing-ever-happens");
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

> **2026-04-16** — 首次收錄
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

- [[2026-04-16|2026-04-16]] — 首次收錄，771 stars
