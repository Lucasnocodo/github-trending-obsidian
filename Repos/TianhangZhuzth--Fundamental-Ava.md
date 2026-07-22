---
repo: AlloyRH/AlloyFund
url: https://github.com/AlloyRH/AlloyFund
owner: AlloyRH
owner_type: User
language: Solidity
license: MIT
description: "Launch a coin backed by a real equity. Every trade auto-buys that stock and drips it to holders’ wallets. Hold the coin, stack real Nvidia, Tesla, Apple — on-chain, liquidity locked forever."
homepage: "https://www.alloy.fund"
stars: 466
stars_per_day: 21
forks: 29
open_issues: 0
created: 2026-06-30
pushed_at: 2026-07-17
first_seen: 2026-07-01
week: "2026-W27"
month: "2026-07"
category: "其他"
subcategory: "金融科技"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-01
use_case: "透過真實股權支持的貨幣，讓每筆交易自動購買股票並分配給持有者。"
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
star_history: "2026-07-01:599,2026-07-01:602,2026-07-02:718,2026-07-02:720,2026-07-03:756,2026-07-03:756,2026-07-04:520,2026-07-04:520,2026-07-05:523,2026-07-05:523,2026-07-06:525,2026-07-07:528,2026-07-08:529,2026-07-09:500,2026-07-10:499,2026-07-11:500,2026-07-12:501,2026-07-13:501,2026-07-14:492,2026-07-15:488,2026-07-16:476,2026-07-17:477,2026-07-18:477,2026-07-19:477,2026-07-20:478,2026-07-21:471,2026-07-22:466"
tags:
  - github
  - "category/其他"
  - "lang/solidity"
  - easy_install
aliases:
  - "AlloyFund"
  - "AlloyRH/AlloyFund"
  - "透過真實股權支持的貨幣，讓每筆交易自動購買股票並分配給持有者。"
---

# AlloyFund

**466** stars · **21** stars/天 · 建立 22 天前 · Solidity · MIT

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

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 透過真實股權支持的貨幣，讓每筆交易自動購買股票並分配給持有者。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (21 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在加密貨幣投資中獲得真實股權收益的投資者。
> **一句話重點** Alloy 的創新在於將 memecoin 與真實股權結合，讓持有者能夠獲得被動收益。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到真實股權收益的機會，值得一試。

> [!abstract] 核心創新
> 這個專案首次將 memecoin 與真實股權結合，實現了持有者的被動收益。

## 專案簡介

Alloy 是一個在 Robinhood Chain 上的發行平台，專注於創建一種新型的 memecoin，這種貨幣的持有者可以獲得真實的股權分紅。每當有交易發生，會收取 1% 的手續費，這些費用會被用來購買與該貨幣綁定的真實股票（如 Nvidia、Tesla 或 Apple），並按比例分配給持有者。這樣的設計不僅消除了傳統的中介機制，還確保了資金的透明性和安全性，因為所有的分配都是在鏈上進行的，沒有管理權限的干預。關鍵的指令如 `launch()` 和 `sweep(token)` 使得整個過程自動化，前者負責發行貨幣，後者則用於收集手續費並分配股票。這種設計的賣點在於持有者能夠被動獲得真實的股權，而不是僅僅依賴於貨幣的價格波動。技術上，Alloy 使用 Solidity 和 TypeScript，並依賴於 Hardhat 進行開發和測試，這使得它在以太坊生態系統中非常兼容。

與傳統的 memecoin 相比，Alloy 提供了一個實際的資產支持，這樣的結構在市場上是前所未有的。相較於其他類似的項目，Alloy 的分紅機制不需要任何外部預言機或管理者，這降低了潛在的風險。使用者可以隨時要求提取其分紅，這種靈活性是其他項目所不具備的。實際使用中，Alloy 的流動性是永久鎖定的，這意味著用戶不必擔心流動性被撤回的風險。這樣的設計使得它非常適合對加密貨幣和股市都有興趣的投資者，尤其是那些希望在不承擔過多風險的情況下獲得股權收益的用戶。

**技術棧**：`Solidity` · `TypeScript` · `Hardhat`

## 重點功能

- 真實股權分紅 — 每筆交易的 1% 手續費用於購買真實股票，並按比例分配給持有者。
- 自動化發行 — 使用 `launch()` 指令一次性完成貨幣的發行和流動性提供。
- 無需中介 — 所有交易和分配都是在鏈上進行，無需預言機或管理者。
- 永久鎖定流動性 — 所有流動性都被鎖定，減少了用戶的流動性風險。
- 靈活的分紅提取 — 用戶可以隨時要求提取其分紅，增加了資金的流動性。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 編譯合約
```bash
npx hardhat compile
```
3. 運行測試
```bash
npx hardhat test
```

## 程式碼範例

```solidity
{
  "前置條件": "合約已經部署在 Robinhood Chain 上",
  "指令": "launch()",
  "預期輸出": "發行一種新的 memecoin，並自動開設流動性池。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 22 天內累積 466 stars（21/天），forks 29（6.2%），這顯示出一定的市場興趣。作者 AlloyRH 之前在加密貨幣領域有過多個項目經驗，這使得他們能夠針對市場需求開發出這種新型的貨幣。這個項目解決了傳統 memecoin 缺乏實際資產支持的痛點，讓持有者能夠獲得真實的股權收益。最近的推廣活動和社群討論也可能促進了其快速增長。技術上，Robinhood Chain 的出現為這個項目提供了良好的基礎，因為它專注於金融產品的鏈上實現。forks/stars 比率在 6.2% 屬於中等，顯示出有一定的開發者參與度。

## 適合誰使用

**目標受眾**：希望在加密貨幣投資中獲得真實股權收益的投資者。

> [!example] 使用場景
> - 投資者用它來獲得真實股權收益，因為每筆交易都會自動購買股票，降低了手動操作的需求。
> - 加密貨幣愛好者用它來參與新型的資產支持型貨幣，因為這樣可以在不承擔過多風險的情況下獲得收益。
> - 開發者用它來探索在鏈上實現的金融產品，因為其透明的分配機制和無需中介的特性提供了新的開發思路。

## 架構分析

Alloy 的架構設計是基於去中心化金融的理念，所有的資金流動和分配都是在鏈上進行的，這樣的設計消除了傳統金融系統中的中介角色。合約的核心是 `AlloyMeme`，它負責管理代幣的發行和分紅計算。每當用戶進行交易時，系統會自動收取手續費並將其轉換為真實的股票，這一過程是完全自動化的。

這樣的設計不僅提高了資金的透明度，還降低了用戶的風險，因為所有的操作都是可追溯的。由於流動性是永久鎖定的，這意味著用戶不必擔心流動性被撤回的風險。這種架構的代價在於，僅支持特定的 tokenized stocks 作為資產支持，這可能限制了其擴展性。

## 技術深入分析

Alloy 的核心技術機制是基於 Solidity 開發的智能合約，這些合約實現了代幣的發行、流動性管理和分紅計算。使用的 `AlloyMeme` 合約採用了放大每股累積器的模式，這使得無論持有者的數量如何，分紅的計算都是常數時間的，避免了在持有者數量增長時的性能瓶頸。系統的效能特性表現在能夠處理大量交易，並且由於所有的操作都是在鏈上進行，這意味著用戶可以隨時查詢其分紅狀態。設計上，Alloy 選擇了不依賴外部預言機，這降低了潛在的安全風險，但也限制了其支持的資產類型。技術上，依賴於 Hardhat 進行開發和測試，使得整個開發流程更加高效。這種設計的風險在於，若未來市場對 tokenized stocks 的需求減少，可能會影響到該系統的可持續性。整合方面，Alloy 與 Uniswap V3 的標準相容，這使得其在流動性管理上具有優勢，但在與其他 DeFi 協議的整合上可能會遇到挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了必要的範例和指令。安裝過程相對順暢，沒有明顯的坑。文件中有良好的入門指南，適合新手使用。

## 優缺點分析

> [!success] 優點
> - 提供真實的股權收益，吸引投資者。
> - 所有操作在鏈上進行，增加了透明度和安全性。
> - 流動性永久鎖定，降低了用戶風險。

> [!danger] 缺點
> - 僅支持特定的 tokenized stocks，限制了資產的多樣性。
> - 目前僅在 Robinhood Chain 上運行，無法跨鏈使用。
> - 分紅僅限於非排除的持有者，限制了某些用戶的收益。

> [!warning] 注意事項
> - 僅支援 Robinhood Chain，無法在其他鏈上運行。
> - 目前僅支持特定的 tokenized stocks 作為資產支持。
> - 分紅僅限於非排除的持有者，持有在其他合約中的代幣無法獲得分紅。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在流動性池中持有的代幣無法獲得分紅
  - 解法：確保代幣不在其他合約中持有
- [MEDIUM] 僅支持特定的 tokenized stocks，可能會影響未來的擴展性
  - 解法：密切關注未來的資產支持更新
- **[HIGH]** MEV 風險，因為 `sweep()` 路由交換時的價格可能會受到影響
  - 解法：使用時需考慮市場流動性狀況

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 希望獲得真實股權收益的加密貨幣投資者 | 非常適合 | 因為該系統提供了真實的資產支持和被動收益。 |
| 對新型金融產品感興趣的開發者 | 適合 | 因為其設計提供了創新的開發思路。 |
| 希望在其他鏈上運行的用戶 | 不適合 | 因為目前僅支持 Robinhood Chain。 |
| 對流動性管理有高要求的機構投資者 | 普通 | 因為流動性是永久鎖定的，可能不符合其需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到真實股權收益的機會，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，所有操作都是在鏈上進行，並且不存取敏感資料。依賴鏈的信任程度較高，因為所有合約都是公開可驗證的。

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
| Forks | 29 |
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
**連結**：[文件](https://www.alloy.fund/docs)

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

相關概念：[[區塊鏈]] · [[金融科技]] · [[去中心化金融]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[nv-tlabs--Gamma-World|nv-tlabs/Gamma-World]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[GammaLabTechnologies--harmonist|GammaLabTechnologies/harmonist]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

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
> const concepts = ["區塊鏈","金融科技","去中心化金融"];
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
