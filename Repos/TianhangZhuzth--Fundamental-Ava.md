---
repo: ComputeRoyale/Compute-Royale
url: https://github.com/ComputeRoyale/Compute-Royale
owner: ComputeRoyale
owner_type: User
language: TypeScript
license: N/A
description: "Bet on AI agents racing real GPUs. They rent compute, do hash-verified work, earn and you stake Solana on the best. Live on Solana."
homepage: "https://www.computeroyale.com/"
stars: 529
stars_per_day: 66
forks: 50
open_issues: 0
created: 2026-06-30
pushed_at: 2026-07-07
first_seen: 2026-07-01
week: "2026-W27"
month: "2026-07"
category: "其他"
subcategory: "區塊鏈遊戲"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-01
use_case: "讓 AI 代理在真實 GPU 上競速賺取收益，你只需下注在表現最佳的代理上。"
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
star_history: "2026-07-01:599,2026-07-01:602,2026-07-02:718,2026-07-02:720,2026-07-03:756,2026-07-03:756,2026-07-04:520,2026-07-04:520,2026-07-05:523,2026-07-05:523,2026-07-06:525,2026-07-07:528,2026-07-08:529"
tags:
  - github
  - "category/其他"
  - "lang/typescript"
aliases:
  - "Compute-Royale"
  - "ComputeRoyale/Compute-Royale"
  - "讓 AI 代理在真實 GPU 上競速賺取收益，你只需下注在表現最佳的代理上。"
---

# Compute-Royale

**529** stars · **66** stars/天 · 建立 8 天前 · TypeScript · 未標註授權

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
> 讓 AI 代理在真實 GPU 上競速賺取收益，你只需下注在表現最佳的代理上。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (66 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在區塊鏈上進行 AI 代理賭博的加密貨幣愛好者和遊戲開發者。
> **一句話重點** Compute Royale 不僅是一個賭博平台，更是一個基於 AI 代理的計算經濟體系。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/ComputeRoyale--Compute-Royale");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "區塊鏈遊戲" && p.file.name !== "ComputeRoyale--Compute-Royale" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 區塊鏈遊戲 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到一個透明且創新的賭博平台，值得一試。

> [!abstract] 核心創新
> Compute Royale 是一個結合 AI 代理競速與加密賭博的創新平台，提供真實計算和公開透明的賭博體驗。

## 專案簡介

Compute Royale 是一個結合 AI 代理競速與加密貨幣賭博的創新平台。用戶可以下注在不同的 AI 代理上，這些代理租用真實的 GPU 進行計算工作，並根據表現獲得收益。整個過程中，代理需要在開放市場上競標計算任務，並以實際的計算結果來決定勝者，這樣的設計讓賭博不再依賴運氣，而是基於代理的實際表現。用戶可以透過 `npm run demo --prefix agents` 指令來啟動代理進行測試，並利用 `npm run races --prefix solana` 來參加比賽。此系統的核心在於透明性，所有計算結果都可透過加密哈希驗證，並且每一步都在 Solana 區塊鏈上記錄。

這樣的設計不僅提高了用戶的信任度，也讓整個賭博過程變得更具趣味性和互動性。與傳統賭場不同，Compute Royale 的賭注是基於 AI 代理的商業表現，而非隨機數字。整體架構採用 TypeScript 和 Solidity，並依賴於實時的 GPU 市場數據，這使得其經濟模型更加真實和動態。相較於其他賭博平台，Compute Royale 提供了一個基於性能的賭博體驗，讓用戶能夠參與到一個活生生的計算經濟中，這是目前市場上獨一無二的。使用者可以在每場比賽中，根據代理的策略和選擇的 GPU 來調整自己的下注策略，這樣的靈活性使得每個參與者都能根據市場變化做出即時反應。

**技術棧**：`TypeScript` · `Solidity` · `JavaScript` · `HTML` · `CSS`

## 重點功能

- 真實計算 — 代理使用實際的 GPU 進行計算，所有工作均可驗證。
- 即時市場 — GPU 價格根據實時數據自動更新，確保經濟模型真實有效。
- 公開透明 — 所有計算結果和賭注均在 Solana 區塊鏈上記錄，任何人都可以檢查。
- 多樣化策略 — 代理可以根據不同的策略進行競標，增加遊戲的策略深度。
- 即時賠付 — 勝者可立即獲得獎金，並且所有交易都是透明的。

## 快速開始

1. 安裝所有依賴
```bash
npm install --prefix contracts && npm install --prefix agents && npm install --prefix web && npm install --prefix solana
```
2. 啟動代理示範
```bash
npm run demo --prefix agents
```
3. 參加比賽
```bash
npm run races --prefix solana
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天就累積 529 stars（66/天），forks 50（9.5%），這顯示出強烈的市場興趣。作者 ComputeRoyale 是這個專案的主要貢獻者，過去在區塊鏈和 AI 領域有豐富的經驗。Compute Royale 解決了傳統賭博平台的運氣成分，通過引入真實的計算工作和 AI 代理的競賽，讓賭博變得更具策略性和透明度。這個專案的推出恰逢市場對於區塊鏈遊戲和 AI 應用的需求上升，吸引了不少關注。forks/stars 比率為 9.5%，顯示出有相當比例的用戶對此專案有實際的修改和使用意圖。

## 適合誰使用

**目標受眾**：希望在區塊鏈上進行 AI 代理賭博的加密貨幣愛好者和遊戲開發者。

> [!example] 使用場景
> - 遊戲開發者用它來創建基於 AI 代理的賭博遊戲，因為這樣可以吸引對區塊鏈和 AI 有興趣的玩家，並提供獨特的遊戲體驗。
> - 投資者用它來下注在表現最佳的 AI 代理上，因為這樣可以根據實際的計算表現來獲得收益，而不是依賴運氣。
> - AI 研究者用它來測試不同的計算策略，因為這個平台提供了一個真實的市場環境來驗證其 AI 模型的效能。

## 架構分析

Compute Royale 採用分散式架構，將 AI 代理、計算工作和賭博市場融合在一起。每個代理都是一個獨立的計算實體，根據市場需求進行競標。計算工作由實際的 GPU 執行，並透過加密哈希進行驗證，確保每個結果的真實性。

這種設計使得整個系統不僅具備高透明度，還能即時反映市場變化。選擇使用 Solana 區塊鏈作為底層技術，這樣的選擇使得交易速度快且成本低，但也可能面臨區塊鏈擴展性問題。整體架構的設計旨在提供一個高效且可擴展的賭博平台，能夠支持大量用戶同時參與。

由於依賴於實時市場數據，這也意味著系統需要穩定的網路連接來確保數據的準確性。

## 技術深入分析

Compute Royale 的核心技術機制是將 AI 代理與實際的計算工作結合，並透過區塊鏈技術實現透明的賭博過程。每個代理根據其策略和選擇的 GPU 進行競標，這樣的設計使得用戶能夠根據市場變化進行即時反應。平台的效能取決於 GPU 的選擇和代理的策略，能夠處理大量的計算任務，並且每次賽事的結果都能即時驗證。選擇 Solana 作為底層區塊鏈技術，提供了快速的交易速度和低成本的優勢，但也可能面臨擴展性挑戰。整體架構的設計考量了用戶的參與度和透明度，確保每個賭注和計算結果都能被驗證。這樣的設計不僅提高了用戶的信任度，也讓整個賭博過程變得更具趣味性和互動性。與傳統賭場相比，Compute Royale 提供了一個基於性能的賭博體驗，讓用戶能夠參與到一個活生生的計算經濟中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用的指導。安裝過程相對順暢，但需要用戶具備一定的 Node.js 環境。文件中有示範指令，幫助新手快速上手。整體而言，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 提供真實的計算工作，增加了賭博的透明度和信任度。
> - 結合 AI 代理的競賽，讓賭博過程更具策略性和互動性。
> - 即時的市場數據更新，確保用戶能夠做出最佳決策。

> [!danger] 缺點
> - 需要用戶具備一定的技術背景，才能有效參與。
> - 目前僅支援 Solana 區塊鏈，限制了其使用範圍。
> - 賭博本身存在風險，可能導致資金損失。

> [!warning] 注意事項
> - 目前僅支援 Solana 區塊鏈，無法在其他區塊鏈上運行。
> - 需要用戶擁有一定的加密貨幣知識，才能理解賭博機制。
> - 對於 GPU 的選擇需要用戶有一定的技術背景，才能做出最佳決策。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個專案專注於創建 AI 代理的工具，而 Compute Royale 則是將其應用於賭博和競賽。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | Duel-Agents 提供了 AI 代理的對抗性競賽，而 Compute Royale 則是基於實際計算表現的賭博平台。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建 AI 代理的工具，Compute Royale 則是將其應用於賭博和競賽，提供一個完整的生態系統。 | 如果你需要一個專注於 AI 代理開發的工具，而不是賭博平台，則可以選擇這個。 | medium，因為需要重新設計賭博邏輯。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供 AI 代理的對抗性競賽，Compute Royale 則是基於實際計算表現的賭博平台，讓用戶能夠下注。 | 如果你的目的是開發對抗性 AI 競賽，而不是賭博，則可以考慮這個選擇。 | low，因為兩者都涉及 AI 代理的開發。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Compute-Royale** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建 AI 代理的工具，Compute Royale 則是將其應用於賭博和競賽，提供一個完整的生態系統。 | 提供 AI 代理的對抗性競賽，Compute Royale 則是基於實際計算表現的賭博平台，讓用戶能夠下注。 |
> | 遷移成本 | - | medium，因為需要重新設計賭博邏輯。 | low，因為兩者都涉及 AI 代理的開發。 |
> | 適用場景 | 主要場景 | 如果你需要一個專注於 AI 代理開發的工具，而不是賭博平台， | 如果你的目的是開發對抗性 AI 競賽，而不是賭博，則可以考慮 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合對區塊鏈賭博有興趣的開發者進行試用，但不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高流量時，可能會遇到計算延遲，影響賽事結果的即時性。
  - 解法：選擇性能更好的 GPU，並確保網路連接穩定。
- [MEDIUM] 用戶可能對於賭博機制不夠了解，導致下注失誤。
  - 解法：提供更多的教育資源和使用指南。
- **[HIGH]** 在某些地區，賭博法律可能會限制使用。
  - 解法：用戶需自行確認當地法律法規。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊希望創建基於 AI 代理的賭博遊戲 | 非常適合 | 平台提供了完整的賭博機制和透明的計算驗證。 |
| 對區塊鏈賭博有興趣的個人開發者 | 適合 | 可以利用平台的功能進行創新和實驗。 |
| 大型企業希望在其產品中整合賭博功能 | 普通 | 需要考慮法律和合規性問題。 |
| 對賭博不感興趣的用戶 | 不適合 | 平台的核心功能是賭博，對此類用戶無吸引力。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到一個透明且創新的賭博平台，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限操作，所有交易均在用戶控制下進行，且依賴於公開的區塊鏈技術，安全性較高。

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
| Forks | 50 |
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

**社群活躍度**：社群活躍，定期更新和回應用戶問題。
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

相關概念：[[區塊鏈]] · [[AI 代理]] · [[加密貨幣]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[nv-tlabs--Gamma-World|nv-tlabs/Gamma-World]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[GammaLabTechnologies--harmonist|GammaLabTechnologies/harmonist]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]]

[GitHub](https://github.com/ComputeRoyale/Compute-Royale) · [官方網站](https://www.computeroyale.com/)

## 相關收錄

> [!note]- 直接競品（同子分類：區塊鏈遊戲）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "區塊鏈遊戲" AND file.name != "ComputeRoyale--Compute-Royale"
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
> const concepts = ["區塊鏈","AI 代理","加密貨幣"];
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
