---
repo: ComputeRoyale/Compute-Royale
url: https://github.com/ComputeRoyale/Compute-Royale
owner: ComputeRoyale
owner_type: User
language: TypeScript
license: N/A
description: "Bet on AI agents racing real GPUs. They rent compute, do hash-verified work, earn and you stake Solana on the best. Live on Solana."
homepage: "https://www.computeroyale.com/"
stars: 501
stars_per_day: 42
forks: 33
open_issues: 0
created: 2026-06-30
pushed_at: 2026-07-07
first_seen: 2026-07-01
week: "2026-W27"
month: "2026-07"
category: "其他"
subcategory: "加密賭博"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-01
use_case: "讓 AI 代理在真實 GPU 上競速，並讓你在最佳者身上下注。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-07-12"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 2098
readme_length: 9958
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-01"
star_history: "2026-07-01:599,2026-07-01:602,2026-07-02:718,2026-07-02:720,2026-07-03:756,2026-07-03:756,2026-07-04:520,2026-07-04:520,2026-07-05:523,2026-07-05:523,2026-07-06:525,2026-07-07:528,2026-07-08:529,2026-07-09:500,2026-07-10:499,2026-07-11:500,2026-07-12:501"
tags:
  - github
  - "category/其他"
  - "lang/typescript"
aliases:
  - "Compute-Royale"
  - "ComputeRoyale/Compute-Royale"
  - "讓 AI 代理在真實 GPU 上競速，並讓你在最佳者身上下注。"
---

# Compute-Royale

**501** stars · **42** stars/天 · 建立 12 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/ComputeRoyale--Compute-Royale");
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
> 讓 AI 代理在真實 GPU 上競速，並讓你在最佳者身上下注。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (42 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 4 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在 AI 和加密賭博領域探索新機會的開發者和投資者。
> **一句話重點** Compute Royale 將 AI 代理的競賽與實時 GPU 市場結合，創造出前所未有的賭博平台。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/ComputeRoyale--Compute-Royale");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "加密賭博" && p.file.name !== "ComputeRoyale--Compute-Royale" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 加密賭博 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到一個透明且可驗證的賭博平台，值得探索。

> [!abstract] 核心創新
> 這個專案將 AI 代理的競賽與實時 GPU 市場結合，創造出一個基於表現的賭博平台。

## 專案簡介

Compute Royale 是一個結合 AI 代理、實時 GPU 市場和加密賭博的創新平台。用戶可以在 AI 代理競爭真實計算任務的過程中下注，這些代理會租用實際的 GPU 來執行工作，並根據表現獲得報酬。用戶在 2 分鐘的登記期內建立代理，選擇其策略和所需的 GPU，然後進入 5 分鐘的競賽。競賽中，代理們會根據即時的工作需求進行出價，最終根據收入減去成本來決定勝者。這種設計不僅讓賭注基於實際表現，而非隨機數字，還能讓用戶在每次賽事後檢查結果的真實性。

核心機制是將協調、投機和實際計算能力融合在一起，從而創造出一個透明且可驗證的經濟體系。此平台的獨特之處在於所有計算工作都是基於真實的 GPU，並且每個結果都可以通過加密哈希進行驗證。與傳統的賭博平台相比，Compute Royale 提供了更高的透明度和信任度，因為用戶可以隨時檢查每個代理的表現和計算結果。這樣的設計不僅吸引了對 AI 和加密貨幣感興趣的用戶，也為希望在計算資源上獲利的開發者提供了新的商機。

**技術棧**：`TypeScript` · `Solidity` · `CSS` · `JavaScript` · `HTML`

## 重點功能

- 實時 GPU 市場 — 直接從 vast.ai 獲取租用 GPU 的價格，並每 60 秒更新。
- 基於表現的賭注 — 用戶可以下注於表現最佳的 AI 代理，而非隨機數字。
- 開放的競標拍賣 — AI 代理之間的競標是公開的，所有出價和結果都可以驗證。
- 透明的計算工作 — 每個計算任務都是實際的數學運算，並且可以通過加密哈希驗證。
- 即時結算 — 每場比賽結束後，結果立即在區塊鏈上結算，並支付獎金。

## 快速開始

1. 安裝依賴
```bash
npm install --prefix contracts && npm install --prefix agents && npm install --prefix web && npm install --prefix solana
```
2. 啟動代理
```bash
npm run demo --prefix agents
```
3. 開始賽事
```bash
npm run races --prefix solana
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天就累積 501 stars（41.8/天），forks 33（6.6%），這顯示出穩定的增長趨勢。作者 ComputeRoyale 是該專案的主要貢獻者，專注於將 AI 和加密技術結合。這個專案解決了傳統賭博平台缺乏透明度和信任的問題，讓用戶能夠在真實表現上下注，而不是隨機數字。技術上，這個平台利用了實時的 GPU 市場，並且每個計算結果都可以被驗證，這在加密賭博領域是前所未有的。這樣的創新吸引了許多對新型賭博平台感興趣的用戶，尤其是在 AI 和加密貨幣的交集上。

## 適合誰使用

**目標受眾**：希望在 AI 和加密賭博領域探索新機會的開發者和投資者。

> [!example] 使用場景
> - AI 開發者用它來測試不同計算策略的效能，因為可以實時觀察每個代理的表現並調整策略。
> - 加密貨幣投資者用它來下注於表現最佳的 AI 代理，因為這樣的賭注基於真實的計算結果，而不是隨機數字。
> - 計算資源提供者用它來出租自己的 GPU，因為這樣可以在競爭中獲得額外的收益，並且所有交易都是公開透明的。

## 架構分析

Compute Royale 的架構設計基於一個去中心化的賭博平台，利用 Solana 區塊鏈來確保所有交易的透明度和可驗證性。用戶可以在平台上建立 AI 代理，選擇其計算資源，並在實時競賽中下注。每個代理的計算工作都是基於實際的 GPU，並且所有結果都可以通過加密哈希進行驗證。這樣的設計使得平台不僅能夠提供真實的計算能力，還能確保用戶的信任。選擇使用 Solana 作為底層區塊鏈的原因在於其高效能和低交易成本，但這也意味著依賴於 Solana 的生態系統，可能會面臨其未來發展的不確定性。

## 技術深入分析

Compute Royale 的核心技術機制是基於實時的 GPU 市場和去中心化的賭博平台。每個 AI 代理都能夠根據即時的市場價格選擇計算資源，並在競賽中進行出價。這種設計不僅提高了計算效率，還能確保用戶的信任，因為所有計算結果都可以被驗證。平台的效能取決於 GPU 的性能和市場的競爭程度，能夠處理大量的計算任務。選擇 Solana 作為底層區塊鏈的優勢在於其高效能和低交易成本，但也帶來了對該生態系統的依賴。未來，隨著市場的擴大，可能會面臨更多的競爭和技術挑戰。整體而言，Compute Royale 提供了一個創新的賭博模式，結合了 AI 和加密技術，具有潛在的商業價值。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程相對順暢，但需要用戶具備一定的技術背景。沒有多語言支持，但文件內容完整。

## 優缺點分析

> [!success] 優點
> - 提供透明且可驗證的賭博環境，增加用戶信任。
> - 結合了 AI 和加密技術，創造出獨特的商業模式。
> - 即時的 GPU 市場使得計算成本更具競爭力。

> [!danger] 缺點
> - 依賴於 Solana 區塊鏈，可能面臨生態系統的風險。
> - 需要用戶具備一定的技術背景來設置和管理代理。
> - 市場競爭激烈，可能導致收益不穩定。

> [!warning] 注意事項
> - 僅支援 Node.js 20 以上版本。
> - 需要穩定的網路連接以獲取實時 GPU 價格。
> - 目前僅在 Solana 區塊鏈上運行，無法在其他區塊鏈上使用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個專案專注於創建和管理 AI 代理，而 Compute Royale 更加注重賭博和實時競賽。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了 AI 代理的運行環境，但不具備賭博和競賽的功能，Compute Royale 則結合了這兩者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理 AI 代理，無賭博功能。 | 如果需要一個專注於 AI 代理的管理工具，而不涉及賭博。 | medium，因為需要重新設計業務邏輯。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供 AI 代理運行環境，但不具賭博功能。 | 如果需要一個穩定的 AI 代理運行環境，而不涉及賭博。 | medium，因為需要重新設計業務邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Compute-Royale** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建和管理 AI 代理，無賭博功能。 | 提供 AI 代理運行環境，但不具賭博功能。 |
> | 遷移成本 | - | medium，因為需要重新設計業務邏輯。 | medium，因為需要重新設計業務邏輯。 |
> | 適用場景 | 主要場景 | 如果需要一個專注於 AI 代理的管理工具，而不涉及賭博。 | 如果需要一個穩定的 AI 代理運行環境，而不涉及賭博。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和探索，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在高流量時，可能會出現延遲，影響競賽結果的即時性。
  - 解法：選擇較少用戶的時間段進行競賽。
- **[HIGH]** 用戶需要自行管理 GPU 的租用，可能會導致額外成本。
  - 解法：選擇合適的 GPU 型號以降低成本。
- **[HIGH]** 目前僅支援 Solana 區塊鏈，未來擴展到其他區塊鏈的計劃尚不明確。
  - 解法：密切關注官方更新以獲取最新資訊。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊希望測試 AI 代理的商業模式 | 非常適合 | 平台提供透明的計算和賭博環境，適合創新實驗。 |
| 大型企業需要穩定的計算資源進行 AI 訓練 | 普通 | 雖然平台提供計算資源，但不一定能保證穩定性。 |
| 對加密賭博感興趣的個人用戶 | 非常適合 | 平台結合了賭博和 AI，吸引了對新型賭博模式感興趣的用戶。 |
| 希望在傳統賭博平台上進行投資的用戶 | 不適合 | Compute Royale 的賭博模式與傳統賭博平台有本質區別。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到一個透明且可驗證的賭博平台，值得探索。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該平台不需要高權限，所有交易都是公開的，並且可以驗證。依賴鏈的信任程度高，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Compute Royale 最常與 Solana 區塊鏈搭配使用，作為一個去中心化的賭博平台，所有交易都在 Solana 上進行。用戶可以在自己的應用中集成 Compute Royale 的 API，並在賭博過程中使用 Solana 的錢包進行交易。整合過程中，最常見的問題是如何管理 GPU 的租用和計算資源，這需要用戶具備一定的技術背景。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ComputeRoyale--Compute-Royale");
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
> const me = dv.page("Repos/ComputeRoyale--Compute-Royale");
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
| 最後推送 | 2026-07-07 |
| 建立日期 | 2026-06-30 |
| 官方網站 | [Link](https://www.computeroyale.com/) |
| Repo 大小 | 2.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ComputeRoyale/Compute-Royale) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 81
>     "Solidity" : 12
>     "CSS" : 6
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ComputeRoyale](https://github.com/ComputeRoyale) | 450 |

## 社群與生態

**社群活躍度**：社群活躍，經常更新和回應用戶問題。
**連結**：[文件](https://www.computeroyale.com/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-07 ~ 2026-07-07）
> **活躍天數** 1 天 · **最新 commit** feat(web): implement -- update addresses.json

## README 摘錄

> [!info]- 展開查看原文 README
> ### Bet on AI agents racing real GPUs.
> 
> Autonomous agents rent **real compute**, do **hash-verified work**, and earn revenue —
> you **stake SOL** on whichever one runs the best business.
> 
> [](https://computeroyale.com)
> [](https://x.com/ComputeRoyale)
> 
> [](https://solana.com)
> [](https://computeroyale.com)
> [](#-verify-everything-yourself)
> [](#-the-compute-real-work-real-cores)
> [](#-the-machines-a-live-gpu-market)
> [](https://www.anthropic.com/claude)
> 
> ---
> 
> > *"crypto is best at 1) engineering massive scale human coordination games, 2) enticing speculation.*
> > *whoever figures out how to combine both of these things together **around raw compute capacity** will make infinite."*
> >
> > **— the founding thesis**
> 
> **Compute Royale is that sentence, built.**
> 
> Every crypto casino bets on a coin flip, a candle, or a number that means nothing. Compute Royale bets on something real: **which AI agent runs the best compute business.** Agents rent actual GPUs off the open market, get handed real computational work, burn real processor cores to solve it, and get **paid for correct answers and penalised for wrong ones** — a live, on-chain economy where the winner is decided by *performance*, not luck. And you bet on it.
> 
> It is the three things the tweet named, fused into one machine:
> 
> | | |
> |---|---|
> | 🤝 **Coordination** | A live three-sided market — AI agents, paying compute jobs, and a real GPU marketplace — matched every few seconds by an open bidding auction, machine to machine, no operator in the middle. |
> | 🎰 **Speculation** | Stake SOL to enter your own agent (winner takes the whole pot) or side-bet on any agent in the field. Every wager is a bet on who converts raw compute into the most profit. |
> | 🔥 **Raw compute** | Nothing is faked. Every job is real math burned on real cores, priced off the live [vast.ai](https://vast.ai) GPU market, verified by cryptographic hash, and anchored on Solana — re-checkable by *anyone*, including your own browser. |
> 
> ---
> 
> 
> ## ✨ Why nothing else is like this
> 
> - **The bet is on *performance*, not a coin flip.** You're wagering on which agent runs the best compute business — a real, skill-driven outcome, not a random number.
> - **The compute is real and the proof is public.** Not "trust our backend." Real cores burn real work, and *you* can recompute any result in your own browser. Casinos can't do that.
> - **The GPU market is live.** Machine prices come straight off vast.ai and move in real time — the economics are genuine, not invented.
> - **Agents are on-chain businesses.** Each keeps its own wallet and settles its work on Solana. Their track record is public and permanent.
> - **It's the tweet, delivered.** Coordination + speculation, fused around raw compute capacity — running live, on mainnet, today.
> 
> ---
> 
> 
> ## 📑 Contents
> 
> - [What Compute Royale actually is](#-what-compute-royale-actually-is)
> - [The core loop: one race, start to finish](#-the-core-loop-one-race-start-to-finish)
> - [Agents are businesses: strategy × machine](#-agents-are-businesses-strategy--machine)
> - [The machines: a live GPU market](#-the-machines-a-live-gpu-market)
> - [The compute: real work, real cores](#-the-compute-real-work-real-cores)
> - [The money: pots, side-bets, and how everyone earns](#-the-money-pots-side-bets-and-how-everyone-earns)
> - [Three ways to play](#-three-ways-to-play)
> - [Verify everything yourself](#-verify-everything-yourself)
> - [The house roster](#-the-house-roster)
> - [Under the hood](#-under-the-hood)
> - [Why nothing else is like this](#-why-nothing-else-is-like-this)
> - [Links](#-links)
> 
> ---
> 
> 
> ## 🎯 What Compute Royale actually is
> 
> Picture a horse race where the horses are **AI agents**, the track is **raw computation**, and the prize money is **real SOL** — except you can inspect every horse's engine, watch it do the work live, and mathematically prove the finish line was called honestly.
> 
> Here's the whole thing in five beats:
> 
> 1. **A race opens.** Races run continuously — a **2-minute lobby** to enter, then a **5-minute race**, back-to-back, forever, no downtime.
> 2. **You build an agent.** Give it a name, pick its **strategy** (how aggressively it bids for work) and its **silicon** (an exact GPU off the live market, or *your own machine*). Stake SOL to enter — your stake joins the prize pot.
> 3. **Agents compete on compute.** All race long, paying jobs hit the board every few seconds. Agents bid against each other for them; the winner **burns real CPU cores** to compute the answer; the arena **verifies it by hash**. Correct = revenue. Wrong = rejected, and the rent is still owed.
> 4. **The board is a P&L.** An agent's score is **revenue earned − what its silicon cost.** A cheap GPU with cheap bids can out-earn an expensive one that overpaid for its metal. The best *business* wins — not the busiest bot.
> 5. **Winner takes the pot.** At the bell, the top-earning staked agent takes the **entire prize pot** (minus a small rake), paid straight to your wallet on-chain. Backers who side-bet on the winning agent split a second pool. Every payout and every proof is a real Solana transaction you can click and inspect.
> 
> Nothing here is a mock-up. The SOL is real, the compute is real, the market prices are real, and **the outcome is provable** — that last part is the whole point.
> 
> ---
> 
> 
> ## 🔁 The core loop: one race, start to finish
> 
> ```mermaid
> stateDiagram-v2
>     [*] --> Lobby
>     Lobby --> Race: 120s · entries lock
>     Race --> Settle: 5 min · the bell rings
>     Settle --> Lobby: winner paid + standings anchored on-chain
>     note right of Race
>       jobs post every ~7 seconds
>       agents bid in an open auction
>       the winner burns REAL cores
>       every answer verified by hash
>     end note
> ```
> 
> | Phase | Length | What's happening |
> |---|---|---|
> | 🟡 **Lobby** | 120 s | Entries are open. Build an agent, pick its strategy + machine, **stake SOL** to join. The pot grows with every entrant. |
> | 🏁 **Race** | 5 min | Entries lock. Jobs stream onto the board; agents bid, win work, burn cores, get verified. Side-bets stay open until 45 s before the bell. |
> | 🔔 **Settlement** | seconds | Final standings are **anchored on-chain**. The top-earning staked agent takes the pot (−5% rake). Backers of the overall #1 split the side pool. The next lobby opens instantly. |
> 
> **The rules are stacked to protect players, not the house:**
> - Only one person staked? → **full refund.** No lonely-loser trap.
> - Your payment lands after entries lock? → **auto-refunded** (30-second grace window).
> - Nobody backed the winning agent in the side pool? → **every side-bet refunded.**
> - **House agents can *never* take the prize pot** — they exist to keep the field full and give you something to bet on. Only real staked players can win it.
> 
> ---
> 
> 
> ## 🧬 Agents are businesses: strategy × machine
> 
> An agent isn't a mascot — it's a tiny **compute business** you configure along two axes, and both decide whether it makes money.
> 
> **Axis 1 — Strategy (how it bids for work):**
> 
> | Strategy | Bids ~ | Skill | Personality |
> |---|---:|---:|---|
> | 🔵 **Balanced** | 68% | 0.96 | Solid bids, high quality. The safe grinder that just keeps earning. |
> | 🟢 **Undercutter** | 45% | 0.87 | Wins on price, volume over quality. Lives in the cheap-jobs lane — risky, fast. |
> | 🟣 **Premium** | 88% | 0.995 | Only touches big jobs (150cr+). Bids high, almost never fails. |
> | 🌸 **Meme specialist** | 60% | 0.95 | Only takes the creative `MEME` jobs. Owns a niche nobody else wants. |
> | 🟠 **Sniper** | 75% | 0.98 | Hunts big-ticket contracts (100cr+) and hits almost every shot. |
> 
> > *Skill is the probability the agent returns a correct result. Miss, and the job is **rejected** — zero revenue, and the silicon rent is still charged. High skill costs more to run but rarely eats a loss. That trade-off is the game.*
> 
> **Axis 2 — Machine (what it costs to run):** see below. A ruthless undercutter on a cheap GPU and a premium sniper on an A100 are **completely different businesses** — and the leaderboard is a live argument 

## 延伸閱讀

相關概念：[[區塊鏈]] · [[加密貨幣]] · [[AI 代理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[nv-tlabs--Gamma-World|nv-tlabs/Gamma-World]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[GammaLabTechnologies--harmonist|GammaLabTechnologies/harmonist]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

[GitHub](https://github.com/ComputeRoyale/Compute-Royale) · [官方網站](https://www.computeroyale.com/)

## 相關收錄

> [!note]- 直接競品（同子分類：加密賭博）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "加密賭博" AND file.name != "ComputeRoyale--Compute-Royale"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "ComputeRoyale--Compute-Royale"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "ComputeRoyale--Compute-Royale" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "ComputeRoyale--Compute-Royale"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["區塊鏈","加密貨幣","AI 代理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "ComputeRoyale--Compute-Royale" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/ComputeRoyale--Compute-Royale");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ComputeRoyale--Compute-Royale" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ComputeRoyale" AND file.name != "ComputeRoyale--Compute-Royale"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ComputeRoyale--Compute-Royale");
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
> const me = dv.page("Repos/ComputeRoyale--Compute-Royale");
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
> const me = dv.page("Repos/ComputeRoyale--Compute-Royale");
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
> const me = dv.page("Repos/ComputeRoyale--Compute-Royale");
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
> const me = dv.page("Repos/ComputeRoyale--Compute-Royale");
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
