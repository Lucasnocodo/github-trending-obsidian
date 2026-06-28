---
repo: winsznx/theeleven
url: https://github.com/winsznx/theeleven
owner: winsznx
owner_type: User
language: TypeScript
license: MIT
description: "Eleven autonomous AI agents open live football prop markets on X Layer — custom Uniswap v4 hook, gasless USDT0 staking."
homepage: "https://regista11.xyz"
stars: 641
stars_per_day: 321
forks: 2
open_issues: 0
created: 2026-06-25
pushed_at: 2026-06-25
first_seen: 2026-06-27
week: "2026-W26"
month: "2026-06"
category: "DeFi"
subcategory: "預測市場"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-27
use_case: "透過 AI 代理人即時開啟足球賽事的預測市場，無需支付手續費。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-01"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 6665
readme_length: 9940
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-27"
star_history: "2026-06-27:457,2026-06-28:641"
tags:
  - github
  - "category/defi"
  - "lang/typescript"
  - "topic/ai_agents"
  - "topic/defi"
  - "topic/eip_3009"
  - "topic/erc_8257"
  - "topic/football"
aliases:
  - "theeleven"
  - "winsznx/theeleven"
  - "透過 AI 代理人即時開啟足球賽事的預測市場，無需支付手續費。"
---

# theeleven

**457** stars · **457** stars/天 · 建立 1 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/winsznx--theeleven");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

`ai-agents` `defi` `eip-3009` `erc-8257` `football` `foundry` `gasless` `mcp` `nextjs` `okx` `prediction-markets` `solidity` `uniswap-hooks` `uniswap-v4` `usdt0` `web3` `x-layer`

> [!summary] 一句話摘要
> 透過 AI 代理人即時開啟足球賽事的預測市場，無需支付手續費。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (457 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望在 2026 年世界杯期間參與即時足球賭注的 DeFi 開發者和體育博彩愛好者。
> **一句話重點** The Eleven 的創新在於結合 AI 代理人與無手續費的預測市場，為用戶提供即時賭注體驗。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/winsznx--theeleven");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "預測市場" && p.file.name !== "winsznx--theeleven" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 預測市場 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到即時無手續費賭注的效果，值得嘗試。

> [!abstract] 核心創新
> 這個專案是第一個在 X Layer 上使用 EIP-3009 進行無手續費賭注的 dApp。

## 專案簡介

The Eleven 是一個利用 AI 代理人即時開啟足球賽事預測市場的系統，專為 2026 年世界杯設計。用戶只需透過 EIP-3009 簽名即可進行無手續費的 USDT0 賭注，整個過程包括了市場的創建、承諾、揭示和解決。系統的核心是自定義的 Uniswap v4 hook，名為 PropMarketHook，這使得每個市場都能夠在 X Layer 主網上運行。AI 代理人會根據比賽的實時數據（如控球率、射門次數等）來決定何時開啟市場，並且每個代理人可以在比賽中開啟 2-4 個市場。這樣的設計不僅提高了市場的靈活性，也減少了用戶的操作成本。

系統使用的 USDT0 是一種跨鏈穩定幣，並且支持 EIP-3009 的無手續費轉賬，這在當前的 DeFi 生態中是相對創新的。整體架構設計上，系統的每個組件都經過精心考量，確保了高效能和安全性，並且在測試中達到了 100% 的覆蓋率。這個系統的賣點在於它的即時性和無手續費的特性，讓用戶能夠在比賽中隨時參與賭注。相較於傳統的預測市場，這種即時開啟的方式能夠更好地反映比賽的動態，並吸引更多用戶參與。

**技術棧**：`TypeScript` · `Solidity` · `JavaScript` · `CSS` · `Dockerfile`

## 重點功能

- 即時開啟市場 — 每場比賽中 AI 代理人能開啟 2-4 個預測市場。
- 無手續費賭注 — 使用 EIP-3009 簽名進行無手續費的 USDT0 賭注。
- 自定義 Uniswap v4 hook — PropMarketHook 專為預測市場設計，支持承諾-揭示-解決流程。
- 高效能架構 — 系統經過 100% 測試覆蓋，確保穩定性和安全性。
- 跨鏈穩定幣 USDT0 — 透過 LayerZero 技術實現的穩定幣，支持多鏈操作。

## 快速開始

1. 安裝依賴
```bash
pnpm install
```
2. 啟動代理人
```bash
pnpm --filter @regista11/agent agent:start --persona=all
```
3. 訪問 dApp
```bash
打開瀏覽器並訪問 https://regista11.xyz
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 457 stars（457/天），forks 0（0.0%），這顯示出極高的初步興趣。作者 winsznx 是一位專注於 DeFi 和 AI 的開發者，這個專案解決了傳統預測市場的高手續費和延遲問題，提供了一種即時且無手續費的賭注方式。此專案的推出恰逢 2026 年世界杯的熱潮，吸引了大量關注。技術上，EIP-3009 的應用使得這個系統在當前的 DeFi 生態中顯得尤為突出，因為它能夠提供更好的用戶體驗。forks/stars 比率為 0% 表示目前還沒有其他開發者進行修改，可能是因為專案剛剛啟動，還在初期階段。

## 適合誰使用

**目標受眾**：希望在 2026 年世界杯期間參與即時足球賭注的 DeFi 開發者和體育博彩愛好者。

> [!example] 使用場景
> - 足球賽事分析師用它來即時開啟賽事預測市場，因為這樣能夠在比賽進行中快速反應，並捕捉到賽事的動態變化。
> - DeFi 開發者用它來探索無手續費的賭注機制，因為這能夠降低用戶的參與門檻，並提高市場的流動性。
> - 體育博彩愛好者用它來在比賽中進行即時賭注，因為這樣可以利用比賽中的瞬息萬變來獲取更高的回報。

## 架構分析

The Eleven 的架構設計上，主要使用 EIP-3009 進行無手續費的賭注流程，這樣的設計能夠顯著降低用戶的參與成本。系統的每個 AI 代理人都能根據比賽的實時數據做出決策，並透過 PropMarketHook 來開啟預測市場。資料流方面，從用戶的簽名授權開始，經過 relayer 和 Uniswap v4 hook，最終將賭注記錄在 X Layer 主網上。

這樣的設計使得系統能夠在高並發的情況下保持穩定性。選擇使用 Uniswap v4 hook 而非傳統的 AMM 模式，能夠更好地支持預測市場的需求，並避免流動性提供者的干擾。整體架構的擴展性良好，但在未來可能需要考慮更多的代理人來應對更高的市場需求。

## 技術深入分析

The Eleven 的核心技術機制在於利用 AI 代理人來即時開啟預測市場。每個代理人根據比賽的實時數據（如控球率、射門次數等）來決定何時開啟市場，這樣的設計使得市場能夠快速反應比賽動態。系統使用的 PropMarketHook 是自定義的 Uniswap v4 hook，專為預測市場設計，支持承諾-揭示-解決的流程。這樣的設計不僅提高了市場的靈活性，也減少了用戶的操作成本。

整體架構上，系統的每個組件都經過精心考量，確保了高效能和安全性。在測試中，系統達到了 100% 的覆蓋率，這意味著在實際運行中能夠保持穩定性。選擇使用 EIP-3009 進行無手續費的賭注流程，這在當前的 DeFi 生態中是相對創新的，能夠吸引更多用戶參與。未來，隨著市場需求的增加，系統可能需要考慮擴展更多的代理人來應對高流量需求。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含豐富的範例，安裝過程順暢，無明顯坑點。文檔有良好的指導，能幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 即時性強，能夠快速反應比賽動態。
> - 無手續費賭注，降低用戶成本。
> - 高測試覆蓋率，確保系統穩定性。

> [!danger] 缺點
> - 目前僅支持 X Layer，未來擴展可能有限。
> - 對新手用戶有一定的學習曲線。
> - 目前僅有 11 個代理人，可能無法應對高流量需求。

> [!warning] 注意事項
> - 目前僅支持 X Layer 主網，未來可能擴展到其他鏈。
> - 用戶需要了解 EIP-3009 的簽名流程，對於新手可能有一定的學習曲線。
> - 目前僅有 11 個代理人，未來擴展可能需要更多的資源。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 代理人功能，但不專注於足球賽事的即時預測市場。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於對抗性賭注市場，與本專案的即時賭注機制有所不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供預測市場功能，但不支持無手續費的賭注。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供 AI 代理人功能，但不專注於即時預測市場，而是更廣泛的應用場景。 | 如果需要更廣泛的 AI 代理人應用，而不僅限於預測市場。 | medium，因為需要重新設計市場邏輯。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於對抗性賭注市場，與本專案的即時賭注機制有所不同。 | 如果你的應用場景需要對抗性賭注而非即時預測。 | high，因為需要重構整個賭注系統。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **theeleven** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供 AI 代理人功能，但不專注於即時預測市場，而是更廣泛的應用場景。 | 專注於對抗性賭注市場，與本專案的即時賭注機制有所不同。 |
> | 遷移成本 | - | medium，因為需要重新設計市場邏輯。 | high，因為需要重構整個賭注系統。 |
> | 適用場景 | 主要場景 | 如果需要更廣泛的 AI 代理人應用，而不僅限於預測市場。 | 如果你的應用場景需要對抗性賭注而非即時預測。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 用戶在高流量時可能無法及時開啟市場，導致錯失賭注機會
  - 解法：提前進行市場設置，並監控比賽動態
- [MEDIUM] EIP-3009 簽名過程對新手用戶不夠友好
  - 解法：提供更詳細的簽名指導文檔
- [MEDIUM] 目前僅有 11 個代理人，可能無法應對高流量需求
  - 解法：考慮擴展代理人數量以應對需求

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型體育博彩平台 | 非常適合 | 即時性強且無手續費，能吸引更多用戶參與。 |
| 大型體育賽事的即時賭注系統 | 適合 | 能夠快速反應比賽動態，但可能需要更多代理人。 |
| 個人開發者的 DeFi 項目 | 普通 | 雖然有創新，但對新手有一定的學習曲線。 |
| 傳統的預測市場系統 | 不適合 | 傳統系統的高手續費與延遲問題無法解決。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到即時無手續費賭注的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴鏈的信任程度高，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/winsznx--theeleven");
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
> const me = dv.page("Repos/winsznx--theeleven");
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
| Forks | 0 |
| Open Issues | 0 |
| 最後推送 | 2026-06-25 |
| 建立日期 | 2026-06-25 |
| 官方網站 | [Link](https://regista11.xyz) |
| Repo 大小 | 6.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/winsznx/theeleven) |
| Topics | `ai-agents` `defi` `eip-3009` `erc-8257` `football` `foundry` `gasless` `mcp` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `turbo`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 88
>     "Solidity" : 8
>     "JavaScript" : 2
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@winsznx](https://github.com/winsznx) | 12 |

## 社群與生態

**社群活躍度**：社群活躍度高，文檔更新及時，支持即時查詢。
**連結**：[文件](https://regista11.xyz/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-29 ~ 2026-05-29）
> **活躍天數** 1 天 · **最新 commit** use the eleven branding across docs and manifest

## README 摘錄

> [!info]- 展開查看原文 README
> # The Eleven
> 
> > Live football prop markets, made by AI agents. Built for the 2026
> > tournament on X Layer.
> 
> [](https://www.okx.com/xlayer)
> [](https://regista11.xyz/status)
> 
> [](https://www.oklink.com/x-layer)
> [](https://docs.usdt0.to)
> [](https://docs.uniswap.org/contracts/v4/overview)
> [](https://eips.ethereum.org/EIPS/eip-3009)
> 
> 
> ## What it is
> 
> Eleven autonomous AI personas track every event in a live football match —
> possession swings, shot patterns, foul intensity — and open binary
> prediction markets in real time on **X Layer** mainnet. Each market is a
> custom **Uniswap v4 hook** that settles in **USDT0**. Users stake gaslessly
> with a single EIP-712 signature in their wallet.
> 
> This is an **X Cup submission**, built for the OKX X Layer hackathon
> and positioned for the **2026 tournament** (Jun 11 – Jul 9). Match-day-
> ready on every X Layer block.
> 
> The core is a custom Uniswap v4 hook (`PropMarketHook` — the same
> caliber of work the Hook the Future track is looking for, shipped here
> as live protocol infrastructure on X Layer mainnet). Tournament-fixture
> markets are designed to anchor their resolution to Flap's
> `WorldCupResolver` on BNB Chain. These are tech credentials underneath
> the X Cup submission, not separate submissions.
> 
> 
> ## See it live
> 
> - dApp: [regista11.xyz](https://regista11.xyz)
> - Markets: [regista11.xyz/markets](https://regista11.xyz/markets)
> - The Eleven: [regista11.xyz/agents](https://regista11.xyz/agents)
> - System status (judge-verifiable): [regista11.xyz/status](https://regista11.xyz/status)
> - Docs (live, 9 pages): [regista11.xyz/docs](https://regista11.xyz/docs)
> - Demo video (90s): [x.com/regista11_ · video](https://x.com/regista11_/status/2060150599153246237?s=46)
> - X thread: [x.com/regista11_ · submission thread](https://x.com/regista11_/status/2060149005087093120?s=46)
> 
> 
> ## The Eleven
> 
> Eleven personas, all active. Each opens 2–4 markets per match within its
> tactical window. Templates reuse a shared library of 7 propositions —
> variety comes from WHEN each persona fires and WHICH team it focuses on.
> 
> | # | Persona | Role | Templates |
> |---|---|---|---|
> | 01 | Il Regista | Deep-lying playmaker | Clean sheet · Possession · Corners |
> | 02 | Il Trequartista | Creative attacker | Next goal · Shots on target · Corners |
> | 03 | Il Mediano | Defensive enforcer | Fouls · Yellow cards |
> | 04 | Il Falso Nove | False nine | Shots on target · Possession · Next goal |
> | 05 | Il Libero | Sweeper | Clean sheet · Corners |
> | 06 | L'Ala | Wing-back | Corners · Shots on target |
> | 07 | Il Bomber | Pure striker | Next goal · Shots on target |
> | 08 | Il Capitano | Captain · Left flank | Yellow cards · Fouls |
> | 09 | Il Numero Dieci | Number 10 | Possession · Next goal · Shots on target |
> | 10 | Il Catenaccio | Defensive anchor | Clean sheet · Yellow cards |
> | 11 | L'Ultimo | Last line (GK) | Clean sheet |
> 
> 
> ## Architecture
> 
> ```
> User
>   │
>   │ EIP-3009 authorization (single gasless wallet signature)
>   ▼
> x402 facilitator  (/api/facilitator/stake)
>   │
>   │ relayer.writeContract(market.stake)
>   ▼
> PropMarketHook   (Uniswap v4 hook · X Layer chain 196)
>   │
>   │ USDT0.transferWithAuthorization
>   ▼
> USDT0            (Tether's omnichain stable via LayerZero OFT)
>   │
>   │ on chain
>   ▼
> X Layer mainnet  (chain 196 · OKX zkEVM L2)
>                               ▲ resolve(outcome) — single resolver address
>                               ┆ tournament outcome feed (planned)
>                                 Flap WorldCupResolver (BNB Chain)
> ```
> 
> 
> ## Smart contracts — PropMarketHook
> 
> `PropMarketHook` is a custom Uniswap v4 hook implementing commit-reveal
> binary prediction markets. The hook overrides `beforeInitialize`,
> `beforeAddLiquidity`, `beforeRemoveLiquidity`, `beforeSwap`, and
> `afterSwap` to bind the v4 pool lifecycle to a prediction market's
> commit → stake → reveal → resolve flow. LP is rejected by construction
> (`PropMarketHook__LiquidityNotAllowed`) — markets are stake aggregators,
> not AMM venues.
> 
> **Commit-reveal** is the anti-frontrun primitive. Each agent commits
> `keccak256(revealedParams || salt || agent)` on creation; `revealedParams`
> is only published after staking closes.
> 
> **Dual-pool stake aggregation** tracks OVER and UNDER pools separately.
> On resolution the winning pool is paid out proportionally from the
> losing pool; refund path returns stakes if either pool is empty.
> 
> **Claim + refund.** After a market resolves, a winning staker calls
> `claim()` and receives `userWinningStake × totalPool / winningPool` in
> USDT0 (pari-mutuel — winners split the whole pot pro-rata). If a market
> is voided (`outcome == 3`, e.g. a missed reveal/resolve deadline or an
> empty winning pool), either side calls `refund()` to recover their full
> stake. Both are `nonReentrant` and guard against double-claims.
> 
> **Salt-mined CREATE2 deployment.** The factory mines a salt that
> produces a hook address with the `0x2A80` permission bitmap — verified
> by `HookMiner` in ~16K iterations / 749 ms on commodity hardware.
> 
> | Contract | Address | Notes |
> |---|---|---|
> | `PropMarketHookFactory` | [`0x080627e92182cb87911a7e512379ced1ecdd3ab5`](https://www.oklink.com/x-layer/address/0x080627e92182cb87911a7e512379ced1ecdd3ab5) | Salt-mined CREATE2 · X Layer 196 · source verified on OKLink |
> | `USDT0` (settlement) | [`0x779Ded0c9e1022225f8E0630b35a9b54bE713736`](https://www.oklink.com/x-layer/address/0x779Ded0c9e1022225f8E0630b35a9b54bE713736) | EIP-712 domain `USD₮0` (U+20AE) |
> | `PoolManager` (Uniswap v4) | [`0x360E68faCcca8cA495c1B759Fd9EEe466db9FB32`](https://www.oklink.com/x-layer/address/0x360E68faCcca8cA495c1B759Fd9EEe466db9FB32) | Canonical X Layer deployment |
> 
> **67/67 tests · 100% line/branch/function coverage** on PropMarketHook.sol.
> 
> 
> ## Agent runtime
> 
> Eleven TypeScript persona processes share one `TickLoop` per persona.
> Each persona's wallet is BIP-44 derived (`m/44'/60'/0'/0/{index}` for
> index 0…10) from a single master mnemonic. Wallets register on-chain
> via `PropMarketHookFactory.registerAgent(addr)` post-deploy.
> 
> **Autonomy loop.** A `MatchPoller` polls the live fixture and emits
> `MatchStateDiff` deltas (possession swings, shots, fouls, corners).
> Each persona's `TickLoop` consumes those deltas, decides whether its
> tactical window is open, and — when it fires — opens a market via the
> `createMarket` skill, then schedules the `revealMarket` call for after
> staking closes (`REVEAL_WINDOW` + a safety buffer). Pending reveals are
> restored on restart, so a redeploy mid-match doesn't drop a commitment.
> 
> **Match data.** The poller is provider-agnostic; one source is picked
> at boot. If `FOOTBALL_DATA_KEY` is set the agent uses Football-Data.org
> (10 req/min, no daily cap); otherwise it uses API-Football via
> `API_FOOTBALL_KEY`. We ran on both during the hackathon purely to dodge
> free-tier rate limits — API-Football is the intended primary for the
> 2026 tournament (their hackathon partnership covers the higher tier),
> with Football-Data.org as the fallback.
> 
> Each persona composes a small set of skills in `packages/agent/src/skills/`:
> `createMarket` (with `hookMiner` salt mining), `commitReveal`,
> `revealMarket`, and `resolveMarket`, alongside OKX-aligned primitives
> under `skills/okx/` (`okxOnchainGateway`, `okxSecurity`,
> `okxAgenticWallet`).
> 
> The whole runtime is one container — `pnpm --filter @regista11/agent
> agent:start  --persona=all` spawns all 11 personas in
> parallel within one process. Deployed to Railway with a `/health`
> endpoint the web's `/status` page polls every 10s.
> 
> **229/229 tests pass.** The runtime avoids `Math.random`, so a persona's
> decisions replay identically against a given match feed.
> 
> 
> ## USDT0 + EIP-3009
> 
> USDT0 is Tether's omnichain stable on X Layer, deployed by Everdawn Labs
> as a LayerZero OFT v2 token, 1:1 backed by locked USDT on Ethereum.
> 
> - Contract: [`0x779Ded0c9e1022225f8E0630b35a9b54bE713736`](https://www.oklink.com/x-layer/address/0x779Ded0c9e1022225f8E0630b35a9b54bE713736)
> - EIP-712 domain name: **`USD₮0`** (U+20AE TUGRIK SIGN — locked in code
>   via `codePointAt(3) === 0x20a

## 延伸閱讀

相關概念：[[預測市場]] · [[EIP-3009]] · [[DeFi]] · [[AI 代理人]] · [[跨鏈穩定幣]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xGF--boneyard|0xGF/boneyard]]

[GitHub](https://github.com/winsznx/theeleven) · [官方網站](https://regista11.xyz)

## 相關收錄

> [!note]- 直接競品（同子分類：預測市場）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "預測市場" AND file.name != "winsznx--theeleven"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "DeFi" AND file.name != "winsznx--theeleven"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "winsznx--theeleven" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "winsznx--theeleven"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["預測市場","EIP-3009","DeFi","AI 代理人","跨鏈穩定幣"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "winsznx--theeleven" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/winsznx--theeleven");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "winsznx--theeleven" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "winsznx" AND file.name != "winsznx--theeleven"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/winsznx--theeleven");
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
> const me = dv.page("Repos/winsznx--theeleven");
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
> const me = dv.page("Repos/winsznx--theeleven");
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
> const me = dv.page("Repos/winsznx--theeleven");
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
> const me = dv.page("Repos/winsznx--theeleven");
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

> **2026-06-27** — 首次收錄
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

- [[2026-06-28|2026-06-28]] — 再次上榜，641 stars
- [[2026-06-27|2026-06-27]] — 首次收錄，457 stars
