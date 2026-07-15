---
repo: Runx402/Runx402
url: https://github.com/Runx402/Runx402
owner: Runx402
owner_type: User
language: TypeScript
license: MIT
description: "Bet on AI agents racing real GPUs. They rent compute, do hash-verified work, earn and you stake Solana on the best. Live on Solana."
homepage: "https://www.computeroyale.com/"
stars: 488
stars_per_day: 33
forks: 33
open_issues: 0
created: 2026-06-30
pushed_at: 2026-07-14
first_seen: 2026-07-01
week: "2026-W27"
month: "2026-07"
category: "AI/ML"
subcategory: "Agent"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-01
use_case: "讓 AI 代理在 Solana 上自主支付並執行計算任務。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-07-12"
contributor_count: 0
engagement: "low"
issue_close_rate: -1
repo_size_kb: 448
readme_length: 9987
bus_factor: 0
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-01"
star_history: "2026-07-01:599,2026-07-01:602,2026-07-02:718,2026-07-02:720,2026-07-03:756,2026-07-03:756,2026-07-04:520,2026-07-04:520,2026-07-05:523,2026-07-05:523,2026-07-06:525,2026-07-07:528,2026-07-08:529,2026-07-09:500,2026-07-10:499,2026-07-11:500,2026-07-12:501,2026-07-13:501,2026-07-14:492,2026-07-15:488"
tags:
  - github
  - "category/ai_ml"
  - "lang/typescript"
aliases:
  - "Runx402"
  - "Runx402/Runx402"
  - "讓 AI 代理在 Solana 上自主支付並執行計算任務。"
---

# Runx402

**488** stars · **33** stars/天 · 建立 15 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/Runx402--Runx402");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 讓 AI 代理在 Solana 上自主支付並執行計算任務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (33 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在 Solana 上構建自主支付 AI 代理的區塊鏈開發者。
> **一句話重點** Runx402 的創新在於讓 AI 代理能夠自主支付，打破了傳統 API 使用中的人為限制。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Runx402--Runx402");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Agent" && p.file.name !== "Runx402--Runx402" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 Agent 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，20 小時整合，得到高效的自主支付能力，值得投資。

> [!abstract] 核心創新
> Runx402 是首個在 Robinhood Chain 上原生運行 x402 支付的代理協議。

## 專案簡介

Runx402 是一個基於 Robinhood Chain 的平台，讓 AI 代理能夠自主支付並執行計算任務。用戶只需透過 API 發送請求，代理會根據回應的 402 狀態碼進行支付，這樣的設計消除了傳統 API 使用中的人為干預，讓代理能夠在需要時自動購買數據或服務。這個過程中，代理直接使用其錢包中的 ETH 進行支付，並在一秒內完成交易，這樣的設計使得整個支付過程高效且低成本。核心技術依賴於 Ethereum 的 L2 解決方案，並使用 x402 協議來處理支付，這使得代理能夠在無需人為授權的情況下進行自主操作。

相比於傳統的 API 認證方式，這種方法不僅提高了效率，還減少了安全風險，因為不需要管理 API 金鑰或訂閱計劃。Runx402 的架構設計考慮到了持續運行的代理，並提供了即時的事件推送功能，讓用戶能夠實時監控代理的活動。這樣的設計使得 Runx402 成為一個適合需要高頻次計算和數據獲取的機器經濟體系的理想選擇。未來，隨著更多的 AI 代理進入市場，Runx402 有潛力成為這一生態系統的核心支付基礎設施。

**技術棧**：`Next.js 14` · `TypeScript` · `PostgreSQL` · `Node.js` · `Docker`

## 重點功能

- 自主支付 — 代理能夠直接使用 ETH 進行支付，無需人為授權。
- 即時交易 — 整個支付過程約一秒鐘，成本僅為幾分之一美分。
- API 市場 — 提供一個 API 目錄，任何代理都可以消費，並且發佈的代理模板可獲得 80% 的訂閱收益。
- 持續運行的代理 — 代理可以在關閉瀏覽器後繼續運行，支持定時和觸發式執行。
- 即時事件推送 — 伺服器推送代理活動和支付狀態到用戶界面，提供實時監控。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/ctrlshifthash/Runx402.git
```
2. 安裝依賴
```bash
cd Runx402 && npm install
```
3. 啟動應用
```bash
npm run dev
```
4. 啟動代理工作者
```bash
cd worker && npm start
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Node.js 和 npm。",
  "指令": "cd app && npm install && npm run dev",
  "預期輸出": "啟動應用後，訪問 http://localhost:3000 以運行代理。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 15 天內累積 488 stars（32.5/天），forks 33（6.8%），顯示出穩定的增長潛力。這個專案的作者來自於一個活躍的開發團隊，專注於自動化和 AI 代理的創新。Runx402 解決了 AI 代理在經濟活動中的一個關鍵痛點：自主支付能力，這在目前的市場上尚無成熟解決方案。這一創新引起了開發者社群的廣泛關注，尤其是在 AI 和區塊鏈交集的領域。隨著對無人機器經濟的需求增長，這個專案的潛力愈發明顯。

## 適合誰使用

**目標受眾**：希望在 Solana 上構建自主支付 AI 代理的區塊鏈開發者。

> [!example] 使用場景
> - AI 研究員用它來自動化數據獲取，因為可以在無需人為干預的情況下，讓代理自主支付並獲取所需數據。
> - 開發者用它來測試和部署 AI 代理，因為它提供了即時的支付和數據獲取能力，減少了開發過程中的阻礙。
> - 企業用它來實現高效的數據分析，因為代理能夠在需要時自動支付並獲取數據，從而提高了業務決策的速度。

## 架構分析

Runx402 的架構設計以高效能和自主性為核心，前端使用 Next.js 14 提供用戶界面，並與後端的 x402 引擎進行交互。後端負責處理支付請求，使用 PostgreSQL 儲存代理狀態和交易記錄。代理執行器則是持續運行的服務，能夠根據預設的計劃或觸發器執行任務。

這樣的設計使得代理能夠在無需人為干預的情況下持續運行，並且能夠即時響應用戶的請求。選擇使用 Robinhood Chain 作為主要鏈的原因在於其低成本和快速結算的特性，這對於需要頻繁支付的 AI 代理來說至關重要。整體架構的設計考量了擴展性和安全性，確保在面對大量請求時仍能保持高效能。

## 技術深入分析

Runx402 的核心技術機制在於 x402 協議，這是一種基於 HTTP 402 狀態碼的支付流程，允許代理在無需人為授權的情況下進行支付。這一設計使得代理能夠在需要時自主獲取數據，從而提高了整體效率。整體架構中，前端使用 Next.js 14 提供用戶界面，後端則使用 Node.js 和 PostgreSQL 來處理請求和儲存數據。支付過程中，代理直接使用其 ETH 錢包進行支付，這樣的設計不僅提高了支付速度，還降低了交易成本。選擇 Robinhood Chain 作為主要鏈的原因在於其低交易費用和快速結算能力，這對於需要頻繁進行小額支付的 AI 代理來說至關重要。隨著代理數量的增加，如何保持系統的穩定性和安全性將是未來需要面對的挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的安裝步驟和範例，安裝過程相對順暢。提供了良好的入門指南，幫助新手快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 自主支付能力，減少人為干預。
> - 高效的支付流程，交易成本低。
> - 支持持續運行的代理，適合長期任務。

> [!danger] 缺點
> - 目前僅限於特定區塊鏈，擴展性有限。
> - 需要用戶具備一定的區塊鏈知識。
> - 對於不熟悉智能合約的用戶，學習曲線較陡。

> [!warning] 注意事項
> - 目前僅支援 Robinhood Chain 和 Ethereum。
> - 需要一定的區塊鏈知識以設置和管理代理。
> - 對於不熟悉智能合約的用戶，可能需要額外的學習時間。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 代理功能，但不支持自主支付，需手動處理 API 認證。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於競賽型代理，但缺乏 Runx402 的支付自動化功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 AI 代理的協作，但不支持自主支付，需手動處理所有交易。 | 如果你的團隊需要更強的協作功能而非支付自動化，則應選擇它。 | medium，因為需要重新設計支付流程。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 提供 API 代理功能，但依賴傳統的 API 金鑰和訂閱模式。 | 如果你的應用場景不需要高頻次的支付，則可以考慮使用它。 | low，因為 API 認證流程相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Runx402** | **boneyard** | **codex-shim** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 AI 代理的協作，但不支持自主支付，需手動處理所有交易。 | 提供 API 代理功能，但依賴傳統的 API 金鑰和訂閱模式。 |
> | 遷移成本 | - | medium，因為需要重新設計支付流程。 | low，因為 API 認證流程相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要更強的協作功能而非支付自動化，則應選擇它。 | 如果你的應用場景不需要高頻次的支付，則可以考慮使用它。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者在測試環境中試用，不建議用於生產環境的核心業務。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在高流量情況下，可能會遇到支付延遲的問題。
  - 解法：優化代理的請求頻率，避免同時發送大量請求。
- **[HIGH]** 某些 EVM 錢包可能不完全支持 Robinhood Chain。
  - 解法：建議使用 MetaMask 或其他主流錢包。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要自動化數據獲取的 AI 研究團隊 | 非常適合 | 能夠自主支付，無需人為干預。 |
| 小型企業希望利用 AI 進行數據分析 | 適合 | 提供即時支付和數據獲取能力。 |
| 大型企業需要高頻次的 API 調用 | 普通 | 雖然支持自主支付，但對於高頻次請求可能需要進一步優化。 |
| 不熟悉區塊鏈的開發者 | 不適合 | 需要一定的區塊鏈知識以設置和管理代理。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~20 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，20 小時整合，得到高效的自主支付能力，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限操作，所有支付均在鏈上進行，並且不存取敏感資料。依賴鏈的信任程度良好，沒有已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Runx402--Runx402");
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
> const me = dv.page("Repos/Runx402--Runx402");
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
| Forks | 33 |
| Open Issues | 0 |
| 最後推送 | 2026-07-14 |
| 建立日期 | 2026-06-30 |
| 官方網站 | [Link](https://www.computeroyale.com/) |
| Repo 大小 | 448 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Runx402/Runx402) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `ethers` `viem` `@types/node` `typescript` `jest` `@types/jest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 91
>     "PowerShell" : 5
>     "JavaScript" : 3
>     "CSS" : 1
> ```

## 社群與生態

**社群活躍度**：社群活躍，定期更新和維護。
**連結**：[文件](https://www.computeroyale.com/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-13 ~ 2026-07-14）
> **活躍天數** 2 天 · **最新 commit** feat: add version badge and release notes to splash

## README 摘錄

> [!info]- 展開查看原文 README
> # Runx402
> 
> 
> ## Quick start
> 
> ```bash
> git clone https://github.com/ctrlshifthash/Runx402.git
> cd Runx402
> 
> 
> ### 🏪 A pay-per-call API marketplace
> A catalog of APIs any agent can consume with nothing but a wallet. Publish an agent template and **earn 80% of every subscription** it generates.
> 
> 
> ## Why Robinhood Chain
> 
> Robinhood Chain is an Arbitrum Orbit L2 that settles to Ethereum, with **ETH as its native gas token**. It became the fastest-growing home for autonomous agents almost immediately after mainnet.
> 
> But those agents could *think*, not *spend*. Runx402 gives them a wallet.
> 
> |                     | Robinhood Chain *(primary)*         | Ethereum Mainnet *(secondary)*  |
> | ------------------- | ----------------------------------- | ------------------------------- |
> | **Chain ID**        | `4663`                              | `1`                             |
> | **Agents pay in**   | **native ETH**                      | **USDC**                        |
> | **Settlement**      | L2, sub-second, fractions of a cent | L1, slower, higher gas          |
> | **Explorer**        | Blockscout                          | Etherscan                       |
> 
> Native ETH means **no wrapped tokens, no bridges, no approval dance**. An agent holds ETH and spends ETH. Payments are verified against the block — never a database row.
> 
> ---
> 
> 
> ## Why this matters
> 
> The last decade of the internet was built on a bet that attention could be converted into money. The next one runs on a different bet: that **software can earn and spend on its own behalf.**
> 
> An agent that can pay is an agent that can *act*. It can buy the dataset it needs at 3am. It can hire another agent that's better at a sub-task. It can pay for exactly one API call and never think about that vendor again. Every paywall stops being a wall and becomes a price.
> 
> That economy needs a payment rail built for machines, not people — one with no signup flow, no key rotation, and no invoice. x402 is that rail.
> 
> Runx402 is where it starts running.
> 
> **[🌐 runx402.app](https://www.runx402.app/) · [𝕏 @runx402](https://x.com/runx402)**
> 
> Built for the machine economy. ⚡ Powered by Robinhood Chain.
> 
> ---
> 
> 
> ### Autonomous AI agents that pay their own way.
> 
> **The first agent protocol to run x402 payments natively on Robinhood Chain.**
> 
> Agents call an API. The API says *"pay me."* The agent pays — in real ETH, on-chain, by itself — and gets its data.
> No API keys. No subscriptions. No credit card. No human in the loop.
> 
> [](https://www.x402.org/)
> [](https://www.runx402.app/)
> [](https://x.com/runx402)
> 
> [](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/402)
> [](https://robinhoodchain.blockscout.com)
> [](#the-answer-http-402)
> 
> [](https://robinhoodchain.blockscout.com)
> [](https://etherscan.io)
> [](https://www.x402.org/)
> [](https://nextjs.org)
> [](https://www.typescriptlang.org/)
> [](https://viem.sh)
> [](#license)
> 
> ---
> 
> 
> ## The problem
> 
> Every AI agent today is economically **paralysed**.
> 
> It can reason, plan, and call tools — but the moment it needs something that costs money, it stops and waits for a human. A person has to sign up, hand over a credit card, receive an API key, paste it into a config file, and pray the rate limit holds. The agent is a genius with no wallet.
> 
> That model breaks completely at agent scale:
> 
> - **API keys are bearer secrets.** One leaked key and anyone can spend your money. You cannot safely hand one to a thousand ephemeral agents.
> - **Subscriptions don't fit machines.** An agent that makes 4 calls a month still pays for the $20 tier. An agent that makes 4 million gets rate-limited into the ground.
> - **Humans are the bottleneck.** Every new data source means a new signup, a new dashboard, a new invoice. Autonomy dies at the paywall.
> 
> Machines need a way to pay machines — **per request, without asking permission.**
> 
> 
> ## The answer: HTTP 402
> 
> `402 Payment Required` has been sitting reserved in the HTTP spec since 1997, waiting for a currency that could settle in a single round-trip. It finally has one.
> 
> **x402** revives that status code as a real protocol. A server can reply *"this costs $0.01, pay this address"*, the client pays on-chain, retries with the transaction hash as proof, and gets its answer. No accounts. No keys. The payment **is** the authentication.
> 
> **Runx402 is the first implementation of that loop running natively on Robinhood Chain.**
> 
> ---
> 
> 
> ## How it works
> 
> ```mermaid
> sequenceDiagram
>     autonumber
>     participant A as 🤖 Agent
>     participant API as 🔌 API
>     participant C as ⛓️ Robinhood Chain
> 
>     A->>API: GET /v1/data
>     API-->>A: 402 Payment Required{ cost, recipient, chainId: 4663 }
>     Note over A: Agent decides — is this worth it?
>     A->>C: send ETH → recipient
>     C-->>A: tx hash (settled)
>     A->>API: GET /v1/dataX-Payment-Proof: 0xabc…
>     API->>C: verify tx: to? amount? mined?
>     C-->>API: ✅ confirmed on-chain
>     API-->>A: 200 OK + data
> ```
> 
> 1. **The agent makes an ordinary HTTP request.** No key, no auth header.
> 2. **The API answers `402`** with the price, the recipient address, and the chain.
> 3. **The agent pays itself** — a native ETH transfer from its own wallet, no human involved.
> 4. **The agent retries with the tx hash** as cryptographic proof of payment.
> 5. **The API verifies on-chain** — checks the recipient, the amount, and that it actually mined — then returns the data.
> 
> The whole loop takes about a second and costs a fraction of a cent.
> 
> ---
> 
> 
> ## What's actually built
> 
> This is not a whitepaper. It runs.
> 
> 
> ### ⛓️ Real on-chain payments
> Payments are settled and **verified against the chain**, not marked paid in a database. The server re-derives the expected amount, checks the recipient, confirms the receipt status, and tolerates price drift — then and only then serves the data.
> 
> 
> ### 🤖 Autonomous agent wallets
> Every agent gets its own funded wallet and a spending budget. Fund it once and it operates indefinitely — calling APIs, paying for them, and logging every satoshi of it. Guardrails cap what it can burn.
> 
> 
> ### 🧠 Frontier model routing
> Runx402 routes each request to the **cheapest model that can actually do the job** — a one-line question doesn't need a flagship model, and an architecture review shouldn't be handed to a nano one.
> 
> | Tier          | Model                    | Used for                                |
> | ------------- | ------------------------ | --------------------------------------- |
> | Cheap         | GPT-5.6 Luna             | short, simple queries                    |
> | Fast          | Gemini 3.5 Flash         | basic questions, quick lookups           |
> | Balanced      | GPT-5.6 Terra            | code and debugging                       |
> | Strong        | Claude Sonnet 5          | long-context and complex tasks           |
> | Premium       | Claude Opus 4.8          | deep reasoning and architecture          |
> | Also wired    | Grok 4.5                 | available on demand                      |
> 
> Every request tells you which model ran, what it cost, and why it was chosen.
> 
> 
> ### 🔁 Agents that never sleep
> A worker service executes agents continuously — on a schedule, on an interval, or on a trigger. This is not a stateless request handler; agents keep running when you close the tab.
> 
> 
> ### 🔔 Live everything
> Server-sent events push agent activity, payments, and completions to the UI as they happen. Outbound webhooks fire the same events into your own stack.
> 
> 
> ### 🎨 A frontend that isn't an afterthought
> Near-black surfaces, Robinhood green, scroll-choreographed motion, and a mascot — **Merry**, one of the Merry Men — who explains the whole protocol and answers support questions with a live model behind her.
> 
> ---
> 
> 
> ## Architecture
> 
> ```mermaid
> graph TB
>     subgraph Client["🖥️ Frontend — Next.js 14"]
>         UI[Agent DashboardMarketplace · Chat]
>         W[Any EVM WalletMetaMask · Rabby · Coinbase]
>     end
> 
>     subgraph Server["⚙️ x402 Engine"]
>         X[402 Gatequote · verify · serve]
>         R[Model Routercost-optimised]
>         V[On-Ch

## 延伸閱讀

相關概念：[[自動化]] · [[區塊鏈]] · [[API 設計]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xGF--boneyard|0xGF/boneyard]] · [[nv-tlabs--Gamma-World|nv-tlabs/Gamma-World]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[GammaLabTechnologies--harmonist|GammaLabTechnologies/harmonist]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

[GitHub](https://github.com/Runx402/Runx402) · [官方網站](https://www.computeroyale.com/)

## 相關收錄

> [!note]- 直接競品（同子分類：Agent）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Agent" AND file.name != "Runx402--Runx402"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "Runx402--Runx402"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Runx402--Runx402" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "Runx402--Runx402"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","區塊鏈","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Runx402--Runx402" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Runx402--Runx402");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Runx402--Runx402" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Runx402" AND file.name != "Runx402--Runx402"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Runx402--Runx402");
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
> const me = dv.page("Repos/Runx402--Runx402");
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
> const me = dv.page("Repos/Runx402--Runx402");
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
> const me = dv.page("Repos/Runx402--Runx402");
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
> const me = dv.page("Repos/Runx402--Runx402");
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
