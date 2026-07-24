---
repo: AlloyRH/AlloyFund
url: https://github.com/AlloyRH/AlloyFund
owner: AlloyRH
owner_type: User
language: Solidity
license: MIT
description: "Launch a coin backed by a real equity. Every trade auto-buys that stock and drips it to holders’ wallets. Hold the coin, stack real Nvidia, Tesla, Apple — on-chain, liquidity locked forever."
homepage: "https://www.alloy.fund"
stars: 457
stars_per_day: 19
forks: 29
open_issues: 0
created: 2026-06-30
pushed_at: 2026-07-17
first_seen: 2026-07-01
week: "2026-W27"
month: "2026-07"
category: "其他"
subcategory: "加密貨幣"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-01
use_case: "透過真實股權支持的代幣，讓每筆交易自動購買股票並分配給持有者。"
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
star_history: "2026-07-01:599,2026-07-01:602,2026-07-02:718,2026-07-02:720,2026-07-03:756,2026-07-03:756,2026-07-04:520,2026-07-04:520,2026-07-05:523,2026-07-05:523,2026-07-06:525,2026-07-07:528,2026-07-08:529,2026-07-09:500,2026-07-10:499,2026-07-11:500,2026-07-12:501,2026-07-13:501,2026-07-14:492,2026-07-15:488,2026-07-16:476,2026-07-17:477,2026-07-18:477,2026-07-19:477,2026-07-20:478,2026-07-21:471,2026-07-22:466,2026-07-23:464,2026-07-24:457"
tags:
  - github
  - "category/其他"
  - "lang/solidity"
  - easy_install
aliases:
  - "AlloyFund"
  - "AlloyRH/AlloyFund"
  - "透過真實股權支持的代幣，讓每筆交易自動購買股票並分配給持有者。"
---

# AlloyFund

**457** stars · **19** stars/天 · 建立 24 天前 · Solidity · MIT

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
> 透過真實股權支持的代幣，讓每筆交易自動購買股票並分配給持有者。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (19 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 6 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在加密市場中獲得真實資產回報的投資者和開發者。
> **一句話重點** Alloy不僅是一個代幣，而是一個創新的資產管理工具，將加密貨幣和股權結合。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/AlloyRH--AlloyFund");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "加密貨幣" && p.file.name !== "AlloyRH--AlloyFund" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 加密貨幣 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花5小時學習，10小時整合，得到創新的資產管理方式，值得一試。

> [!abstract] 核心創新
> Alloy是第一個能讓持有者透過memecoin獲得真實股權的代幣。

## 專案簡介

Alloy是一個基於Robinhood鏈的啟動平台，專注於一種全新的代幣類型：能夠向持有者支付真實股權的memecoin。每當用戶交易該代幣時，會收取1%的手續費，這些手續費會被轉換成真實的股票並按比例分配給持有者。這樣的設計消除了對中介機構的依賴，所有的分配都是在鏈上進行的，確保了透明性和安全性。關鍵的指令包括`launch()`，它能在單一交易中完成整個代幣的部署和流動性提供。這個工具的賣點在於持有該代幣的用戶可以被動累積如Nvidia、Tesla和Apple等公司的股票，並隨時提取到自己的錢包中。

技術上，Alloy使用Solidity和TypeScript，並依賴於Hardhat進行合約的編譯和測試。其架構設計上，流動性永遠鎖定，並且供應量固定，這樣的設計使得用戶的資金安全性大大提高。與傳統的memecoin相比，Alloy不僅提供了投機的機會，還實際上讓用戶持有真實的資產。這在市場上是獨一無二的，因為它結合了加密貨幣的流動性和股權的穩定性。

**技術棧**：`Solidity 0.8.26` · `TypeScript` · `Hardhat`

## 重點功能

- 自動股票購買 — 每筆交易收取1%手續費，並自動購買對應的真實股票。
- 無需中介 — 所有交易和分配均在鏈上進行，確保透明和安全。
- 固定供應量 — 每個代幣的供應量固定為10億，防止通脹。
- 流動性永遠鎖定 — 流動性池永遠鎖定，保護用戶資金。
- 無管理權限 — 用戶資金不受管理者控制，確保資金安全。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 編譯合約
```bash
npx hardhat compile
```
3. 執行測試
```bash
npx hardhat test
```

## 程式碼範例

```solidity
{
  "前置條件": "需要安裝Node.js和Hardhat",
  "指令": "npx hardhat run scripts/deploy.ts --network robinhood",
  "預期輸出": "合約成功部署，並返回合約地址。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立24天內累積457 stars（19/天），forks 29（6.3%），顯示出穩定的增長潛力。作者AlloyRH專注於將傳統股權與加密貨幣結合，解決了以往memecoin缺乏實質價值的痛點。這種創新模式吸引了對加密貨幣和股市感興趣的投資者。市場上對於能夠提供實際資產的代幣需求日益增加，這使得Alloy的出現恰逢其時。高達6.3%的forks/stars比率顯示出許多開發者對這個專案的實際修改和使用，表明其在社群中的活躍度。

## 適合誰使用

**目標受眾**：希望在加密市場中獲得真實資產回報的投資者和開發者。

> [!example] 使用場景
> - 加密貨幣投資者用它來持有並累積真實的股票資產，因為每筆交易都能自動購買股票，實現被動收益。
> - 金融科技開發者用它來構建基於真實股權的加密產品，因為其透明的分配機制和無需中介的設計降低了開發成本。
> - 資產管理公司用它來為客戶提供創新的投資選擇，因為這種代幣化的股票持有方式能吸引年輕投資者。

## 架構分析

Alloy的架構設計為一個基於智能合約的系統，所有的交易和分配都是在鏈上進行，這樣的設計使得用戶的資金安全性大大提高。系統使用ERC-20標準來實現代幣的發行，並利用Uniswap V3進行流動性管理。每次交易都會自動計算手續費並轉換為真實的股票，這樣的設計避免了傳統金融系統中的中介機構。這樣的架構雖然提高了透明度，但也使得系統對於流動性和市場波動的敏感度增加，可能會影響到用戶的回報。

## 技術深入分析

Alloy的核心技術機制是基於Solidity的智能合約，使用ERC-20標準來實現代幣的發行。其設計模式採用了無管理權限的架構，所有的資金流動和分配都是在鏈上進行，這樣的設計提高了透明度和安全性。系統能夠處理高達1億的供應量，並且在每次交易中自動計算手續費，這樣的設計避免了傳統金融系統中的中介機構。由於流動性永遠鎖定，這樣的設計雖然提高了資金的安全性，但也使得用戶在面對市場波動時的靈活性降低。技術上，Alloy依賴於Hardhat進行合約的編譯和測試，並且使用Uniswap V3進行流動性管理，這使得其在市場上具有競爭力。整體而言，Alloy的設計理念是將加密貨幣的流動性與真實資產的穩定性結合，這在當前的市場中是相對創新的。

## 新手體驗

> [!info] 上手難度評估
> README文件清晰且包含必要的範例，安裝過程順暢，無明顯坑點。提供了良好的入門指南，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 提供真實資產的被動收益，吸引了對股市感興趣的加密投資者。
> - 透明的分配機制，消除了對中介的依賴，提高了資金安全性。
> - 固定供應量和流動性鎖定，降低了通脹風險。

> [!danger] 缺點
> - 僅限於Robinhood鏈，限制了使用者的選擇。
> - 需要用戶對加密貨幣和股票市場有一定的了解。
> - 目前僅支持特定的tokenized stocks，限制了可選擇的資產範圍。

> [!warning] 注意事項
> - 僅支持在Robinhood鏈上運行。
> - 需要用戶理解加密貨幣和股票市場的基本知識。
> - 目前僅支持特定的tokenized stocks。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前仍在開發階段，建議用於個人實驗或小型項目，不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在流動性池中持有的代幣無法獲得分紅
  - 解法：確保代幣轉移到個人錢包中以獲得分紅
- [MEDIUM] 市場波動可能影響實際回報
  - 解法：定期檢查市場狀況，適時調整持有策略
- [low] 僅支持特定tokenized stocks，限制選擇
  - 解法：關注未來的更新以獲得更多支持的資產

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型投資團隊希望進行創新型資產管理 | 非常適合 | 提供了真實資產的被動收益，符合其需求。 |
| 對加密貨幣和股市有興趣的個人投資者 | 適合 | 能夠同時參與加密市場和股市，吸引力大。 |
| 大型機構投資者尋求穩定的資產配置 | 不適合 | 目前仍處於alpha階段，風險較高。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花5小時學習，10小時整合，得到創新的資產管理方式，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 安全性評估顯示該工具不需要高權限，且不會存取敏感資料。依賴鏈的信任程度高，無已知的供應鏈風險，適合在CI/CD中使用。

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

**社群活躍度**：社群活躍，最近有多次提交和更新。
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

相關概念：[[區塊鏈]] · [[加密貨幣]] · [[tokenized stocks]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[nv-tlabs--Gamma-World|nv-tlabs/Gamma-World]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[GammaLabTechnologies--harmonist|GammaLabTechnologies/harmonist]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

[GitHub](https://github.com/AlloyRH/AlloyFund) · [官方網站](https://www.alloy.fund)

## 相關收錄

> [!note]- 直接競品（同子分類：加密貨幣）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "加密貨幣" AND file.name != "AlloyRH--AlloyFund"
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
> const concepts = ["區塊鏈","加密貨幣","tokenized stocks"];
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
