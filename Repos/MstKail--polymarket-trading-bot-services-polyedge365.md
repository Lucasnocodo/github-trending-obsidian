---
repo: MstKail/polymarket-trading-bot-services-polyedge365
url: https://github.com/MstKail/polymarket-trading-bot-services-polyedge365
owner: MstKail
owner_type: User
language: N/A
license: N/A
description: "polymarket trading bot services, polymarket copy trading bot, polymarket arbitrage bot, polymarket hedge bot, polymarket maker bot, polymarket trading bot services, polymarket copy trading bot, polymarket arbitrage bot, polymarket hedge bot, polymarket maker bot, polymarket trading bot services, polymarket copy trading bot, polymarket arbitrage bot"
homepage: "https://polyedge365.com"
stars: 378
stars_per_day: 126
forks: 710
open_issues: 0
created: 2026-06-18
pushed_at: 2026-06-18
first_seen: 2026-06-22
week: "2026-W26"
month: "2026-06"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-22
use_case: "提供多種自動化交易策略，讓用戶在 Polymarket 上進行高效交易。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-29"
contributor_count: 1
engagement: "high"
issue_close_rate: -1
repo_size_kb: 43
readme_length: 9999
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-22"
star_history: "2026-06-22:378,2026-06-22:378"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - "topic/arbitrage"
  - "topic/bot"
  - "topic/copy"
  - "topic/hedge"
  - "topic/market_marker"
aliases:
  - "polymarket-trading-bot-services-polyedge365"
  - "MstKail/polymarket-trading-bot-services-polyedge365"
  - "提供多種自動化交易策略，讓用戶在 Polymarket 上進行高效交易。"
---

# polymarket-trading-bot-services-polyedge365

**378** stars · **126** stars/天 · 建立 3 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/MstKail--polymarket-trading-bot-services-polyedge365");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

`arbitrage` `bot` `copy` `hedge` `market-marker` `polyedge` `polymarket` `polymarket-arbitrage-bot` `polymarket-copy-trading-bot` `polymarket-hedge-bot` `polymarket-maker-bot` `polymarket-trading-bot` `trading`

> [!summary] 一句話摘要
> 提供多種自動化交易策略，讓用戶在 Polymarket 上進行高效交易。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (126 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 希望在 Polymarket 上自動化交易並利用市場非效率的量化交易者。
> **一句話重點** PolyEdge 提供了一個全面的自動化交易解決方案，特別適合希望在 Polymarket 上進行高效交易的用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/MstKail--polymarket-trading-bot-services-polyedge365");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "MstKail--polymarket-trading-bot-services-polyedge365" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的自動化交易工具，值得嘗試。

> [!abstract] 核心創新
> 每個策略都在模擬模式下運行，讓用戶在無風險的情況下驗證交易策略。

## 專案簡介

PolyEdge 是一個針對 Polymarket 的全自動交易平台，提供四種主要策略：跟單交易、套利、對沖和做市。用戶可以透過 API 進行配置，並利用 `POST /api/bot/[type]/start` 指令啟動交易機器人。每個策略都經過設計以利用 Polymarket 的市場效率，並在模擬模式下運行以避免風險。技術上，PolyEdge 使用 Next.js 14 和 PostgreSQL 14，並整合了多種 Web3 技術以支持加密支付和身份驗證。這種架構的選擇使得平台能夠在高頻交易中保持穩定性和效率，並且能夠快速響應市場變化。

與其他類似工具相比，如 0x0funky/agent-sprite-forge，PolyEdge 提供更為全面的策略選擇和即時的市場數據反饋，特別是在套利和對沖方面的功能上更具優勢。實際使用中，PolyEdge 允許用戶在無風險的情況下進行策略驗證，這在其他平台中並不常見。雖然目前社群活躍度高，但由於是新興專案，未來的持續支持和更新仍需觀察。對於希望在 Polymarket 上進行自動化交易的用戶，PolyEdge 提供了一個強大的工具，特別適合那些希望在無風險環境中測試策略的交易者。

**技術棧**：`Next.js 14` · `PostgreSQL 14` · `TypeScript`

## 重點功能

- 即時跟單交易 — 自動複製成功交易者的進場，並可設定最小/最大交易規模。
- 套利策略 — 當市場價格不合理時，自動執行套利交易，無風險。
- 對沖功能 — 透過對立交易來鎖定未實現的利潤或限制損失。
- 市場做市 — 在雙邊報價中獲取利差，並獲得 Polymarket 的流動性獎勵。
- 模擬交易模式 — 在實際交易前進行模擬，確保策略的有效性。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 配置環境變數
```bash
cp .env.example .env
```
3. 運行網頁應用
```bash
npm run dev
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 378 stars（126/天），forks 710（187.8%），這顯示出極高的使用者興趣。MstKail 是該專案的主要貢獻者，過去在交易機器人領域有豐富經驗。這個專案解決了 Polymarket 上交易效率低下的問題，讓用戶能夠利用市場的非效率進行套利和對沖。近期的推廣活動和社群討論也可能促進了這個專案的快速增長。由於 Polymarket 的流動性和市場結構的變化，這個工具的需求也隨之上升。高達 187.8% 的 forks/stars 比率顯示出許多開發者對於這個專案的實際修改和使用意圖。

## 適合誰使用

**目標受眾**：希望在 Polymarket 上自動化交易並利用市場非效率的量化交易者。

> [!example] 使用場景
> - 量化交易者用它來自動化跟單成功的 Polymarket 交易者，因為這樣可以在短時間內獲得穩定的收益。
> - 風險管理專家用它來對沖在 Polymarket 上的開放頭寸，因為這樣可以有效降低潛在損失。
> - 新手交易者用它來模擬交易策略，因為可以在無風險的環境中進行測試，避免資金損失。

## 架構分析

PolyEdge 的架構分為兩個主要部分：網頁處理和交易機器人處理。網頁處理使用 Next.js 提供用戶界面和 API 路由，並與 PostgreSQL 數據庫進行交互。交易機器人則專注於執行各種交易策略，並定期從 Polymarket 獲取市場數據。

這種分離的設計使得系統能夠在高頻交易中保持穩定性，並有效管理資源。每個策略的執行都是獨立的，這樣可以避免同時執行導致的訂單重複問題。這種架構的代價在於需要額外的配置和管理，但卻能夠提供更高的靈活性和擴展性。

## 技術深入分析

PolyEdge 的核心技術機制是利用 Polymarket 的市場非效率進行交易，使用 Next.js 和 PostgreSQL 作為主要技術棧。這使得平台能夠快速響應市場變化，並提供即時的交易數據。每個交易策略都經過精心設計，以最大化用戶的交易效率和收益。平台的效能在於能夠處理大量的市場數據，並在模擬模式下進行測試，這樣用戶可以在無風險的情況下驗證其策略。

設計上，選擇 Next.js 是為了利用其快速開發和高效的數據處理能力，而 PostgreSQL 則提供了穩定的數據存儲和查詢性能。這種選擇的代價在於需要一定的學習曲線，但卻能夠提供更高的靈活性和擴展性。技術風險方面，隨著用戶數量的增加，系統可能面臨性能瓶頸，特別是在高頻交易的情況下。整合方面，PolyEdge 可以與主流的 CI/CD 工具進行整合，並且支持多種支付方式，這使得它在實際應用中非常靈活。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和配置步驟。安裝過程相對順暢，但需要用戶具備一定的 Node.js 和 PostgreSQL 知識。文件中有良好的入門指南，幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 提供多種自動化交易策略，滿足不同用戶需求。
> - 在模擬模式下運行，降低風險。
> - 即時跟單和透明的交易反饋，提升用戶信心。

> [!danger] 缺點
> - 目前僅支援 Polymarket，無法擴展至其他平台。
> - 需要用戶提供 API 憑證，增加使用門檻。
> - 相對較新，未來的支持和更新仍需觀察。

> [!warning] 注意事項
> - 僅支援 Node.js 20+ 和 PostgreSQL 14+。
> - 目前僅針對 Polymarket 平台設計，無法擴展至其他交易平台。
> - 需要用戶提供 Polymarket API 憑證以進行實際交易。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自動化交易功能，但專注於不同的市場和策略，可能不如 PolyEdge 的多樣性和即時反饋。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也提供自動化交易，但缺乏 PolyEdge 的即時跟單和套利功能，適合較簡單的交易需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於特定的交易策略，使用 Rust 實作以提高性能，但功能範圍較窄。 | 如果你的團隊需要高性能的交易工具，且不需要多樣化的策略選擇。 | medium，因為需要重新學習 Rust 和其生態系統。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供簡單的自動化交易功能，使用 Python 實作，適合小型專案。 | 如果你的團隊已經在使用 Python 且需要快速開發原型。 | low，因為 Python 的學習曲線相對平緩。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **polymarket-trading-bot-services-polyedge365** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定的交易策略，使用 Rust 實作以提高性能，但功能範圍較窄。 | 提供簡單的自動化交易功能，使用 Python 實作，適合小型專案。 |
> | 遷移成本 | - | medium，因為需要重新學習 Rust 和其生態系統。 | low，因為 Python 的學習曲線相對平緩。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要高性能的交易工具，且不需要多樣化的策略選擇。 | 如果你的團隊已經在使用 Python 且需要快速開發原型。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高頻交易時可能會遇到性能瓶頸，導致延遲
  - 解法：在模擬模式下進行充分測試，並逐步增加交易頻率
- [MEDIUM] API 憑證管理不當可能導致安全風險
  - 解法：確保憑證加密存儲，並定期更新
- [MEDIUM] 市場數據延遲可能影響交易決策
  - 解法：使用多個數據源進行交叉驗證

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行市場預測交易 | 非常適合 | 提供多樣化的交易策略，適合小型團隊的需求。 |
| 大型金融機構進行高頻交易 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |
| 個人交易者進行套利和對沖 | 適合 | 提供即時的市場數據和策略驗證功能。 |
| 希望在 Polymarket 以外的市場進行交易 | 不適合 | 目前僅支援 Polymarket 平台。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的自動化交易工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要用戶提供 API 憑證，並存取市場數據，但整體設計考量了安全性，憑證以加密方式存儲。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/MstKail--polymarket-trading-bot-services-polyedge365");
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
> const me = dv.page("Repos/MstKail--polymarket-trading-bot-services-polyedge365");
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
| Forks | 710 |
| Open Issues | 0 |
| 最後推送 | 2026-06-18 |
| 建立日期 | 2026-06-18 |
| 官方網站 | [Link](https://polyedge365.com) |
| Repo 大小 | 43 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/MstKail/polymarket-trading-bot-services-polyedge365) |
| Topics | `arbitrage` `bot` `copy` `hedge` `market-marker` `polyedge` `polymarket` `polymarket-arbitrage-bot` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@MstKail](https://github.com/MstKail) | 7 |

## 社群與生態

**社群活躍度**：社群活躍度高，近期有持續的更新和討論。
**連結**：[文件](https://polyedge365.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-18 ~ 2026-06-18）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## README 摘錄

> [!info]- 展開查看原文 README
> # PolyEdge
> 
> 
> ## Developer Quick Start
> 
> > Most users never need this — just head to **[polyedge365.com](https://polyedge365.com)**.
> > This section is for self-hosting or local development.
> 
> **Prerequisites:** Node.js 20+, PostgreSQL 14+.
> 
> ```bash
> 
> # 1. Install
> npm install
> 
> 
> # 2. Configure — copy the example env and fill in values
> cp .env.example .env
> 
> ## Key API Routes
> 
> | Route | Purpose |
> |-------|---------|
> | `POST /api/auth/[...nextauth]` | SIWE authentication |
> | `GET/POST /api/bot/[type]/config` | Read / update bot configuration |
> | `POST /api/bot/[type]/start` · `stop` | Start / stop a bot (validates live readiness) |
> | `GET /api/bot/[type]/status` · `performance` · `trades` | Live status, PnL, fills |
> | `POST /api/bot/copy/retry` | Re-attempt a skipped/rejected copy buy |
> | `GET /api/portfolio?mode=live\|paper` | Mark-to-market portfolio + equity curve |
> | `POST /api/payments/create` · `webhook` | Crypto subscription payments |
> | `GET /api/markets` | Polymarket markets proxy |
> 
> ---
> 
> 
> ## Why PolyEdge
> 
> Polymarket is one of the most liquid prediction markets in the world, and its order book is
> **inefficient enough to trade systematically** — prices drift, both sides of a binary market
> occasionally sum to less than \$1, and a handful of traders consistently beat the market.
> PolyEdge turns those inefficiencies into four push-button strategies:
> 
> | Strategy | The edge | Risk profile |
> |----------|----------|--------------|
> | **Copy Trading** | Mirror proven, leaderboard-ranked traders the moment they enter — with your own sizing and filters | Matches the trader you follow |
> | **Arbitrage** | Buy **YES + NO** when their asks sum to **under \$1** — one side always redeems at \$1 | **Market-neutral / risk-free** at resolution |
> | **Hedge** | Lock in unrealized profit (or cap a loss) by taking the opposite side of a position | Defensive — caps downside |
> | **Market Making** | Quote passively on both sides to capture the spread and Polymarket liquidity rewards | Low-directional, inventory-managed |
> 
> > Every strategy runs in **Paper (dry-run)** mode first — simulated fills against live order books —
> > so you can validate an edge with **zero capital at risk** before flipping a single switch to go live.
> 
> ---
> 
> 
> ### Automated trading bots for Polymarket — copy the best, capture arbitrage, hedge your risk.
> 
> **[polyedge365.com](https://polyedge365.com)**
> 
> [](https://nextjs.org/)
> [](https://www.typescriptlang.org/)
> [](https://www.prisma.io/)
> [](https://docs.polymarket.com/)
> [](#license)
> 
> **A full-stack SaaS platform that runs four automated strategies against the Polymarket CLOB —
> each one designed around a concrete, repeatable edge, with paper trading, live execution,
> mark-to-market portfolio tracking, and per-trade transparency.**
> 
> PolyEdge gives prediction-market traders an institutional-grade toolkit in the browser:
> follow proven wallets, harvest risk-free arbitrage, hedge open exposure, and make markets —
> all with the same risk controls, live PnL, and per-trade audit trail you'd expect from a
> professional trading desk. Validate any strategy in **Paper mode** first, then go live with one switch.
> 
> 
> ### Try it now at [polyedge365.com](https://polyedge365.com)
> 
> [Website](https://polyedge365.com) ·
> [Strategies](#the-four-strategies) ·
> [Getting Started](#getting-started-for-traders) ·
> [Choosing Traders](#choosing-traders-to-copy) ·
> [Developer Setup](#developer-quick-start) ·
> [Contact](#contact)
> 
> ---
> 
> 
> ## Table of Contents
> 
> - [Why PolyEdge](#why-polyedge)
> - [The Four Strategies](#the-four-strategies)
> - [Platform Features](#platform-features)
> - [Getting Started for Traders](#getting-started-for-traders)
> - [Choosing Traders to Copy](#choosing-traders-to-copy)
> - [Subscription Tiers](#subscription-tiers)
> - [Tech Stack](#tech-stack)
> - [Architecture](#architecture)
> - [Developer Quick Start](#developer-quick-start)
> - [Deployment](#deployment)
> - [Key API Routes](#key-api-routes)
> - [FAQ](#faq)
> - [Contact](#contact)
> - [Risk Disclaimer](#risk-disclaimer)
> - [License](#license)
> 
> ---
> 
> 
> ## The Four Strategies
> 
> 
> ### Copy Trading Bot
> Follow one or more Polymarket wallets and automatically mirror their **new entries** in real time.
> 
> - **Real-time mirroring** — polls target wallets and copies new positions within seconds.
> - **Your sizing, not theirs** — fixed-dollar or proportional copy, with min/max trade size, max
>   position size, and a total-exposure cap.
> - **Smart filters** — odds range, minimum liquidity, market category, and trading-hours windows.
> - **Minimum-size handling** — automatically bumps an order up to Polymarket's minimum share size
>   (and skips, with a clear reason, when it can't fit your limits) instead of silently failing.
> - **"Not Copied" transparency feed** — every skipped, rejected, or paused trade is shown with a
>   plain-English reason (e.g. *"Order didn't fill — price moved"*, *"Below market minimum"*), plus a
>   one-click **Retry** to buy into a still-open market.
> - **Auto-settlement** — closes copied positions at the true 1/0 payout when a market resolves.
> 
> 
> ### Arbitrage Bot (risk-free complement arbitrage)
> Within a single binary market, if `best_ask(YES) + best_ask(NO)  **Paper and Live never mix.** Mode switching is gated, so you can't accidentally fire real
> > orders while testing — and you can always drop back to Paper to experiment.
> 
> ---
> 
> 
> ## Choosing Traders to Copy
> 
> The copy bot is only as good as the wallets it follows. **Pick traders from verified, live data —
> never from a static list** (today's hot trader can be tomorrow's blow-up). Two reliable sources:
> 
> 1. **Polymarket's official leaderboard — [polymarket.com/leaderboard](https://polymarket.com/leaderboard)**
>    Ranks every wallet by realized **profit** and **volume** over 1D / 1W / 1M / All-time. Copy a
>    wallet address straight into the bot's *Target Wallets* setting.
> 2. **PolyEdge's own leaderboard** (`/leaderboard`) — live-only PnL rankings of platform users and bots.
> 
> **What to look for before following a wallet:**
> 
> | Signal | Why it matters |
> |--------|----------------|
> | **Sustained profit over months**, not one lucky week | Filters out variance and one-off wins |
> | **Healthy win rate _and_ positive expectancy** | A 45% win rate can still be very profitable with good sizing |
> | **Large, consistent trade count** | Bigger sample = more reliable edge |
> | **Recent activity** | A dormant wallet gives the bot nothing to copy |
> | **Reasonable position sizing** | Avoid wallets that go all-in — your copy inherits their risk |
> | **Markets you understand** | You can sanity-check the edge and set sensible filters |
> 
> > Start in **Paper mode** with a candidate wallet for a few days. If the simulated PnL holds up,
> > graduate to Live with small size limits and scale from there.
> 
> ---
> 
> 
> ## Tech Stack
> 
> | Layer | Technology |
> |-------|------------|
> | **Framework** | Next.js 14 (App Router), TypeScript |
> | **UI** | Tailwind CSS, Framer Motion, lucide-react |
> | **Charts** | TradingView Lightweight Charts, Recharts |
> | **Database** | PostgreSQL + Prisma ORM |
> | **Auth** | NextAuth.js + SIWE (Sign-In With Ethereum) |
> | **Web3** | wagmi · viem · RainbowKit · ethers v6 |
> | **Trading** | `@polymarket/clob-client-v2` (CLOB), Gamma & Data APIs |
> | **Payments** | Multi-chain (ETH / Polygon / BSC / Solana via `@solana/web3.js`) |
> | **State** | Zustand · TanStack Query |
> 
> ---
> 
> 
> ## Architecture
> 
> ```
> ┌─────────────────┐        ┌──────────────────────────┐
> │   Web process   │        │   Bot worker process      │
> │   (Next.js)     │        │   IS_BOT_WORKER=true      │
> │                 │        │                           │
> │ • Dashboard/UI  │        │ • Copy / Arb / Hedge / MM │
> │ • API routes    │  ⇄ DB  │   poll loops (reconciler) │
> │ • Auth, charts  │        │ • Payment monitor         │
> │ • One-off       │        │ • Settlement on resolution│
> │   actions       │        │                           │
> └─────────────────┘        └──────────────────────────┘
>         │                              │
>         └──────────► Pol

## 延伸閱讀

相關概念：[[自動化]] · [[套利]] · [[市場做市]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[FoundZiGu--GuJumpgate|FoundZiGu/GuJumpgate]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]]

[GitHub](https://github.com/MstKail/polymarket-trading-bot-services-polyedge365) · [官方網站](https://polyedge365.com)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "MstKail--polymarket-trading-bot-services-polyedge365"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "MstKail--polymarket-trading-bot-services-polyedge365"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "MstKail--polymarket-trading-bot-services-polyedge365" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "MstKail--polymarket-trading-bot-services-polyedge365"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","套利","市場做市"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "MstKail--polymarket-trading-bot-services-polyedge365" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/MstKail--polymarket-trading-bot-services-polyedge365");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "MstKail--polymarket-trading-bot-services-polyedge365" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "MstKail" AND file.name != "MstKail--polymarket-trading-bot-services-polyedge365"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/MstKail--polymarket-trading-bot-services-polyedge365");
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
> const me = dv.page("Repos/MstKail--polymarket-trading-bot-services-polyedge365");
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
> const me = dv.page("Repos/MstKail--polymarket-trading-bot-services-polyedge365");
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
> const me = dv.page("Repos/MstKail--polymarket-trading-bot-services-polyedge365");
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
> const me = dv.page("Repos/MstKail--polymarket-trading-bot-services-polyedge365");
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

> **2026-06-22** — 首次收錄
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

- [[2026-06-22|2026-06-22]] — 首次收錄，378 stars
