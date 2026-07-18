---
repo: AlloyRH/AlloyFund
url: https://github.com/AlloyRH/AlloyFund
owner: AlloyRH
owner_type: User
language: Solidity
license: MIT
description: "Launch a coin backed by a real equity. Every trade auto-buys that stock and drips it to holders’ wallets. Hold the coin, stack real Nvidia, Tesla, Apple — on-chain, liquidity locked forever."
homepage: "https://www.alloy.fund"
stars: 477
stars_per_day: 27
forks: 31
open_issues: 0
created: 2026-06-30
pushed_at: 2026-07-17
first_seen: 2026-07-01
week: "2026-W27"
month: "2026-07"
category: "其他"
subcategory: "金融科技"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-01
use_case: "讓每個交易自動購買真實股票，並分配給持幣者的加密貨幣。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-07-12"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 85
readme_length: 8518
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-01"
star_history: "2026-07-01:599,2026-07-01:602,2026-07-02:718,2026-07-02:720,2026-07-03:756,2026-07-03:756,2026-07-04:520,2026-07-04:520,2026-07-05:523,2026-07-05:523,2026-07-06:525,2026-07-07:528,2026-07-08:529,2026-07-09:500,2026-07-10:499,2026-07-11:500,2026-07-12:501,2026-07-13:501,2026-07-14:492,2026-07-15:488,2026-07-16:476,2026-07-17:477,2026-07-18:477"
tags:
  - github
  - "category/其他"
  - "lang/solidity"
aliases:
  - "AlloyFund"
  - "AlloyRH/AlloyFund"
  - "讓每個交易自動購買真實股票，並分配給持幣者的加密貨幣。"
---

# AlloyFund

**477** stars · **27** stars/天 · 建立 18 天前 · Solidity · MIT

```dataviewjs
const me = dv.page("Repos/AlloyRH--AlloyFund");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 讓每個交易自動購買真實股票，並分配給持幣者的加密貨幣。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (27 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在加密市場中獲得實際股票收益的投資者和金融科技創業者。
> **一句話重點** Alloy 不僅是一個加密貨幣，還是一個能夠讓持幣者獲得實際股票收益的創新平台。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/AlloyRH--AlloyFund");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "金融科技" && p.file.name !== "AlloyRH--AlloyFund" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 金融科技 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，5 小時整合，得到一個創新的股票分紅機制，值得嘗試。

> [!abstract] 核心創新
> Alloy 是一個首創的 memecoin，能夠以實際股票作為支持，並自動分配給持幣者。

## 專案簡介

Alloy 是一個基於 Robinhood Chain 的發行平台，專注於創建一種新型的 memecoin，這種幣種的持有者能夠獲得實際的股票分紅。每當交易發生時，會收取 1% 的手續費，這些費用會被用來購買對應的股票，並按比例分配給持幣者。這種設計的賣點在於，持幣者不僅能持有加密貨幣，還能被動獲得如 Nvidia、Tesla 和 Apple 的股票，所有過程都是透明且無需中介的。使用者只需持有代幣，便能在任何時候提取相應的股票。核心技術上，Alloy 使用 Solidity 和 TypeScript，並依賴 Hardhat 進行合約的編譯和測試，這使得開發過程高效且可擴展。

與傳統的股票投資相比，這種方式消除了中介的需求，並且所有的資金流動都是在鏈上進行的，這樣可以降低風險並提高透明度。與其他類似的 memecoin 不同，Alloy 的獨特之處在於它的分紅機制，這使得它在市場上具有競爭優勢。這個專案目前處於早期階段，擁有 477 顆星和 31 次 fork，顯示出一定的社群關注度。對於希望在加密市場中獲得實際股票收益的投資者來說，Alloy 提供了一個新的選擇，但仍需注意其潛在的市場風險和流動性問題。

**技術棧**：`Solidity` · `TypeScript` · `Hardhat`

## 重點功能

- 實時股票分紅 — 每次交易收取 1% 手續費，並用於購買實際股票，按比例分配給持幣者。
- 無需中介 — 所有交易和分紅過程都在鏈上進行，消除了傳統金融的中介風險。
- 固定供應量 — 每個代幣的供應量固定為 1,000,000,000，並且無法增發。
- 永久鎖定流動性 — 流動性池位置永久保留，無法轉移，確保資金安全。
- 透明的費用結構 — 所有費用分配清晰，持幣者能夠清楚了解自己的收益來源。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 編譯合約
```bash
npx hardhat compile
```
3. 部署合約
```bash
npx hardhat run scripts/deploy.ts --network robinhood
```

## 程式碼範例

```solidity
{
  "前置條件": "已安裝 Hardhat 和相關依賴",
  "指令": "npx hardhat run scripts/deploy.ts --network robinhood",
  "預期輸出": "合約成功部署，並在鏈上創建流動性池。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 18 天內累積 477 stars（約 26.5/天），forks 31（6.5%），顯示出穩定的增長潛力。作者 AlloyRH 背後的團隊專注於將傳統金融資產與加密貨幣結合，解決了過去缺乏此類產品的痛點。這個專案的推出正值加密貨幣市場對於創新金融產品的需求上升，並且 Robinhood Chain 的支持使得這一切變得可行。高達 6.5% 的 forks/stars 比率顯示出社群對於這個專案的實際修改和使用意願，表明它不僅僅是觀望者的熱情。

## 適合誰使用

**目標受眾**：希望在加密市場中獲得實際股票收益的投資者和金融科技創業者。

> [!example] 使用場景
> - 加密貨幣投資者用它來獲取實際股票收益，因為持有 Alloy 代幣能夠自動獲得如 Nvidia 和 Tesla 的股票分紅。
> - 金融科技創業者用它來開發新的投資產品，因為 Alloy 提供了一個創新的平台來發行與股票掛鉤的加密貨幣。
> - 傳統股市投資者用它來探索加密市場，因為 Alloy 讓他們能夠以熟悉的股票形式參與加密貨幣的增長潛力。

## 架構分析

Alloy 的架構基於 Ethereum 的 ERC-20 標準，並使用 Hardhat 進行合約的開發和測試。它的核心流程是通過一個 permissionless 的 keeper 來收集手續費，並將其轉換為實際的股票。這種設計使得整個過程無需中介，並且所有的資金流動都是透明的。

使用 Uniswap V3 來提供流動性，並且流動性池位置是永久鎖定的，這樣可以確保資金的安全性。這種設計的代價是流動性無法轉移，可能會影響用戶的資金靈活性。整體來看，這個架構在安全性和透明度上做出了很好的平衡，但在流動性管理上可能會有一定的挑戰。

## 技術深入分析

Alloy 的核心技術機制是基於 ERC-20 標準的 memecoin，並且使用了 Hardhat 進行合約的開發。這使得合約的編譯和測試過程變得高效且可擴展。每當交易發生時，會收取 1% 的手續費，這些費用會被用來購買對應的股票，並按比例分配給持幣者。這種設計的效能特性在於，所有的資金流動都是在鏈上進行的，這樣可以降低風險並提高透明度。

選擇 Solidity 作為開發語言是因為它在區塊鏈開發中的廣泛應用，並且有著良好的社群支持。這種選擇的代價是需要用戶對 Solidity 有一定的了解。技術風險方面，流動性池的流動性無法轉移，可能會在市場波動時影響用戶的資金靈活性。整合方面，Alloy 可以與主流的 DeFi 工具鏈相容，但在某些情況下可能需要額外的適配器來確保無縫整合。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含必要的範例，安裝過程相對順暢，但需要用戶對加密貨幣有基本了解。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 創新的股票分紅機制，讓持幣者能夠獲得實際收益。
> - 透明的資金流動，消除了中介風險。
> - 永久鎖定流動性，確保資金安全。

> [!danger] 缺點
> - 目前僅限於 Robinhood Chain，無法擴展到其他鏈。
> - 流動性池的流動性無法轉移，影響資金靈活性。
> - 需要用戶對加密市場有一定的理解和經驗。

> [!warning] 注意事項
> - 目前僅支援 Robinhood Chain，無法在其他鏈上運行。
> - 需要用戶對加密貨幣和股票市場有基本了解。
> - 流動性池的流動性無法轉移，可能影響資金的靈活性。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合對加密市場有興趣的開發者進行試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 流動性池的流動性無法轉移，可能影響資金的靈活性
  - 解法：用戶需在投資前考慮流動性需求
- [MEDIUM] 需要用戶對加密市場有一定的理解和經驗
  - 解法：建議新手先學習相關知識再進行投資
- [low] 目前僅支援 Robinhood Chain，未來可能會有擴展需求
  - 解法：關注官方更新以獲取最新資訊

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 希望在加密市場中獲得實際股票收益的投資者 | 非常適合 | 因為 Alloy 提供了獨特的股票分紅機制。 |
| 金融科技創業者希望開發新的投資產品 | 適合 | 因為 Alloy 提供了一個創新的平台來發行與股票掛鉤的加密貨幣。 |
| 傳統股市投資者希望探索加密市場 | 普通 | 因為需要對加密市場有一定的理解和經驗。 |
| 對加密貨幣不熟悉的普通用戶 | 不適合 | 因為需要用戶對加密市場有基本了解。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，5 小時整合，得到一個創新的股票分紅機制，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且所有交易都是在鏈上進行，透明度高。對於敏感資料的存取也有良好的控制，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/AlloyRH--AlloyFund");
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
> const me = dv.page("Repos/AlloyRH--AlloyFund");
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
| Forks | 31 |
| Open Issues | 0 |
| 最後推送 | 2026-07-17 |
| 建立日期 | 2026-06-30 |
| 官方網站 | [Link](https://www.alloy.fund) |
| Repo 大小 | 85 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/AlloyRH/AlloyFund) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@nomicfoundation/hardhat-toolbox` `@openzeppelin/contracts` `hardhat` `solhint` `dotenv` `ethers`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Solidity" : 76
>     "TypeScript" : 24
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@AlloyRH](https://github.com/AlloyRH) | 200 |

## 社群與生態

**社群活躍度**：社群活躍度中等，定期更新和維護。
**連結**：[文件](https://www.alloy.fund)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-17 ~ 2026-07-18）
> **活躍天數** 2 天 · **最新 commit** mythril

## README 摘錄

> [!info]- 展開查看原文 README
> Alloy
> 
> Dividend memecoins backed by real tokenized stocks.
> 
>   alloy.fund ·
>   @AlloyRH ·
>   Launchpad
> 
>   
>   
>   
>   
> 
> ---
> 
> ## Overview
> 
> Alloy is a launchpad on [Robinhood Chain](https://robinhood.com/us/en/chain/) for a token type that did not previously exist: a **memecoin that pays its holders in real equity**.
> 
> Every coin launched on Alloy is bound at deploy time to one real, Robinhood-issued **tokenized stock**. Every trade against that coin pays a 1% pool fee. A permissionless keeper converts those fees into the backing stock and distributes it to holders pro-rata. Holding the coin passively accrues real NVDA, TSLA, or AAPL, claimable to your wallet at any time.
> 
> There is no oracle, no custodian, no off-chain accounting, and no admin key over user funds. The distribution is an on-chain invariant.
> 
> ```
> hold coin -> coin trades -> 1% fee -> buys real stock -> drips to holders -> claim to wallet
> ```
> 
> ## How it works
> 
> ```mermaid
> flowchart LR
>     A[Creator] -->|launch| B[AlloyLaunchpad]
>     B -->|deploy fixed 1B supply| C[AlloyMeme ERC-20]
>     B -->|seed single-sided| D[Uniswap V3 PoolCOIN / USDG · 1%]
>     B -->|LP NFT locked forever| B
>     E[Traders] |buy / sell| D
>     D -->|accrued fees| F[sweep · permissionless]
>     F -->|70%| G[buy backing stock]
>     F -->|20%| H[creator]
>     F -->|10%| I[buy back $ALLOY]
>     G -->|distribute| C
>     C -->|claim| J[Holder walletreal stock]
> ```
> 
> ### 1. Launch
> 
> `launch()` performs the entire lifecycle in a single transaction:
> 
> 1. Deploys an `AlloyMeme` ERC-20 via `CREATE2` with a fixed 1,000,000,000 supply and no mint function.
> 2. Opens a Uniswap V3 pool against **USDG** at the 1% fee tier.
> 3. Seeds the **entire supply** as single-sided liquidity above spot, so the pool opens holding only the coin.
> 4. Retains the LP position permanently. The position is never transferable out — liquidity cannot be pulled.
> 5. Excludes the pool, the launchpad, and the burn address from dividend accounting, so drips only ever reach real holders.
> 
> The launch price is deterministic. The pool is initialised at a precomputed `sqrtPriceX96` derived from `startTick = 398400`, which on an 18-decimal coin against 6-decimal USDG yields an opening fully-diluted valuation of approximately **$5,000**.
> 
> $$P_{\text{launch}} = 1.0001^{-398400} \times 10^{18-6} \approx 5.0 \times 10^{-6}\ \text{USDG}$$
> 
> ### 2. Sweep
> 
> `sweep(token)` is permissionless and can be called by anyone:
> 
> 1. Collects accrued fees from the locked LP position (both sides).
> 2. Sells the coin-denominated side into USDG so all routing happens in dollars.
> 3. Splits the USDG per the fee schedule below.
> 4. Buys the backing stock with the drip share and credits it to holders.
> 
> ### 3. Fee schedule
> 
> | Share | Basis points | Destination |
> | --- | ---: | --- |
> | Drip | 7000 | Buys the backing stock, distributed to holders |
> | Creator | 2000 | Paid to the launcher in USDG |
> | Protocol | 1000 | Buys back `$ALLOY` |
> 
> Configurable by the owner via `setFeeSplit`, constrained to sum to exactly `10_000`.
> 
> ## The drip: dividend accounting
> 
> `AlloyMeme` implements a magnified per-share accumulator, a well-understood pattern for constant-time pro-rata distribution regardless of holder count. Distribution is **O(1)**; there is no iteration over holders and therefore no gas ceiling on the holder set.
> 
> Let $S$ be the eligible supply (total supply minus excluded balances) and $A$ the reward amount being distributed:
> 
> $$\text{magPerShare} \mathrel{+}= \left\lfloor \frac{A \cdot 2^{128}}{S} \right\rfloor$$
> 
> Each account's lifetime entitlement is its balance scaled by the accumulator, corrected for balance changes that occurred at different accumulator values:
> 
> $$\text{accrued}(a) = \left\lfloor \frac{\text{magPerShare} \cdot \text{balance}(a) + \text{corrections}(a)}{2^{128}} \right\rfloor$$
> 
> $$\text{claimable}(a) = \text{accrued}(a) - \text{withdrawn}(a)$$
> 
> On every transfer of value $v$, corrections are adjusted so that historical entitlement is preserved:
> 
> ```
> from:  corrections[from] += magPerShare * v      (balance fell)
> to:    corrections[to]   -= magPerShare * v      (balance rose)
> ```
> 
> The $2^{128}$ magnitude preserves precision for dust-sized distributions against a 1e27-wei eligible supply, and the accumulator cannot realistically overflow a `uint256`.
> 
> ### Exclusions
> 
> Addresses excluded from dividends (the AMM pool, the launchpad, the burn address) are removed from `eligibleSupply`. Without this, the pool — which holds most of the supply at launch — would absorb the majority of every drip and strand it permanently. Exclusions are only settable by the factory and only while `magPerShare == 0`, so no accrued balance can ever be confiscated.
> 
> ## The $ALLOY flywheel
> 
> `$ALLOY` captures fees from every coin on the launchpad.
> 
> ```mermaid
> flowchart LR
>     A[coins launch] --> B[trades pay 1% fee]
>     B --> C[10% buys back $ALLOY]
>     C --> D[$ALLOY holders:boosted drips · free launches]
>     D --> A
> ```
> 
> | Utility | Mechanism |
> | --- | --- |
> | Fee capture | 10% of every coin's trading fees buys `$ALLOY` on-chain |
> | Free launches | Holding `freeLaunchThreshold` waives the creation fee |
> | Boosted drips | Elevated share of distributed stock |
> 
> ## Deployments
> 
> Robinhood Chain — chain ID **4663**.
> 
> | Contract | Address |
> | --- | --- |
> | AlloyLaunchpad | [`0x927750E6EebAD299EFDb88f37F830BAD27b0657e`](https://robinhoodchain.blockscout.com/address/0x927750E6EebAD299EFDb88f37F830BAD27b0657e) |
> | $ALLOY | [`0x3d85d3e14cE83924CcD1eFcd3416DD6b3d8c2C25`](https://robinhoodchain.blockscout.com/address/0x3d85d3e14cE83924CcD1eFcd3416DD6b3d8c2C25) |
> | USDG (quote asset) | [`0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168`](https://robinhoodchain.blockscout.com/address/0x5fc5360D0400a0Fd4f2af552ADD042D716F1d168) |
> | Uniswap V3 Factory | `0x1f7d7550B1b028f7571E69A784071F0205FD2EfA` |
> | NonfungiblePositionManager | `0x73991a25c818bf1f1128deaab1492d45638de0d3` |
> | SwapRouter02 | `0xcaf681a66d020601342297493863e78c959e5cb2` |
> 
> All protocol contracts are verified on Blockscout.
> 
> ## Security properties
> 
> | Property | Guarantee |
> | --- | --- |
> | Liquidity | The LP position is minted to the launchpad and never transferred out. Liquidity is permanently locked. |
> | Supply | Fixed at 1,000,000,000 at construction. `AlloyMeme` exposes no mint path and no owner. |
> | Custody | Non-custodial. Coins and drips settle directly between the pool, the token, and holder wallets. |
> | Distribution solvency | `distribute()` only credits reward already delivered to the contract, so the sum of claims can never exceed the balance held. |
> | Confiscation | Exclusions are factory-only and rejected once distribution has begun (`magPerShare != 0`). |
> | Admin scope | The owner can set the fee split, creation fee, treasury, and `$ALLOY` config. The owner cannot mint, pause, seize balances, or touch the LP. |
> | Backing integrity | The backing stock is immutable per coin, bound at construction. |
> 
> ### Known trade-offs
> 
> - `sweep()` routes swaps with `amountOutMinimum = 0`. Amounts are fee-sized, but this is MEV-exposed by construction; the alternative is a stale on-chain price oracle for an asset with intentionally thin liquidity.
> - Only tokenized stocks with a live USDG pool can back a coin. The interface enforces this at launch time.
> - Drips accrue only to non-excluded holders. Coins held inside another contract that does not forward claims will accrue to that contract.
> 
> ## Repository layout
> 
> ```
> contracts/
>   AlloyMeme.sol            dividend-paying ERC-20; magnified per-share accounting
>   AlloyLaunchpad.sol       launch, single-sided seeding, LP lock, fee sweep
>   interfaces/IUniswap.sol  minimal Uniswap V3 surface consumed by the protocol
> docs/
>   architecture.md          system design and control flow
>   mechanism.md             distribution math and launch pricing derivation
>   security.md              invariants, threat model, trade-offs
> abis/                      ABIs for integrators
> ```
> 
> ## Integration
> 
> A Uniswap-standard token list of every launched coin is serv

## 延伸閱讀

相關概念：[[區塊鏈]] · [[加密貨幣]] · [[金融科技]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xGF--boneyard|0xGF/boneyard]] · [[nv-tlabs--Gamma-World|nv-tlabs/Gamma-World]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[GammaLabTechnologies--harmonist|GammaLabTechnologies/harmonist]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

[GitHub](https://github.com/AlloyRH/AlloyFund) · [官方網站](https://www.alloy.fund)

## 相關收錄

> [!note]- 直接競品（同子分類：金融科技）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "金融科技" AND file.name != "AlloyRH--AlloyFund"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "AlloyRH--AlloyFund"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Solidity" AND file.name != "AlloyRH--AlloyFund" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "AlloyRH--AlloyFund"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["區塊鏈","加密貨幣","金融科技"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "AlloyRH--AlloyFund" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/AlloyRH--AlloyFund");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "AlloyRH--AlloyFund" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "AlloyRH" AND file.name != "AlloyRH--AlloyFund"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/AlloyRH--AlloyFund");
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
> const me = dv.page("Repos/AlloyRH--AlloyFund");
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
> const me = dv.page("Repos/AlloyRH--AlloyFund");
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
> const me = dv.page("Repos/AlloyRH--AlloyFund");
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
> const me = dv.page("Repos/AlloyRH--AlloyFund");
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

> **2026-07-01** — 首次收錄
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

- [[2026-07-05|2026-07-05]] — 再次上榜，523 stars
- [[2026-07-04|2026-07-04]] — 再次上榜，520 stars
- [[2026-07-03|2026-07-03]] — 再次上榜，756 stars
- [[2026-07-02|2026-07-02]] — 再次上榜，718 stars
- [[2026-07-01|2026-07-01]] — 首次收錄，599 stars
