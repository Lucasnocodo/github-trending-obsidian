---
repo: TianyiDataScience/openclaw-control-center
url: https://github.com/TianyiDataScience/openclaw-control-center
owner: TianyiDataScience
owner_type: User
language: TypeScript
license: MIT
description: "Turn OpenClaw from a black box into a local control center you can see, trust, and control."
homepage: ""
stars: 2764
stars_per_day: 184
forks: 399
open_issues: 23
created: 2026-03-11
pushed_at: 2026-03-18
first_seen: 2026-03-14
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "監控"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-14
use_case: "將 OpenClaw 轉變為可見、可信和可控制的本地控制中心。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-21"
contributor_count: 5
engagement: "medium"
issue_close_rate: 44
repo_size_kb: 39555
readme_length: 9967
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-14"
star_history: "2026-03-14:994,2026-03-14:1005,2026-03-15:1420,2026-03-15:1427,2026-03-16:1721,2026-03-16:1726,2026-03-17:1892,2026-03-17:1894,2026-03-18:2025,2026-03-18:2027,2026-03-19:2118,2026-03-20:2231,2026-03-21:2331,2026-03-22:2405,2026-03-23:2472,2026-03-24:2552,2026-03-25:2624,2026-03-26:2707,2026-03-27:2764"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "openclaw-control-center"
  - "TianyiDataScience/openclaw-control-center"
  - "將 OpenClaw 轉變為可見、可信和可控制的本地控制中心。"
---

# openclaw-control-center

**2.8k** stars · **184** stars/天 · 建立 15 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/TianyiDataScience--openclaw-control-center");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 將 OpenClaw 轉變為可見、可信和可控制的本地控制中心。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (184 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 8 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在本地環境中運行 OpenClaw 並希望獲得可視化控制的運營團隊。
> **一句話重點** 這個專案讓 OpenClaw 用戶能夠在本地環境中獲得更好的可視化和控制，特別適合非技術用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/TianyiDataScience--openclaw-control-center");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "監控" && p.file.name !== "TianyiDataScience--openclaw-control-center" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 監控 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，8 小時整合，得到即時監控和管理的效果，值得投資。

> [!abstract] 核心創新
> 提供了一個安全的本地控制中心，專為 OpenClaw 用戶設計，強調可觀察性和操作簡便性。

## 專案簡介

OpenClaw Control Center 是一個針對 OpenClaw 的本地控制中心，旨在提供可觀察性、任務操作和操作員審查功能。使用者只需透過簡單的 `npm install` 和 `npm run dev:ui` 指令，即可啟動控制中心，並在 UI 中查看當前狀態、使用趨勢和任務進度。設計上，這個工具強調安全性，預設為只讀模式，並要求本地令牌認證，這樣可以減少潛在的安全風險。其核心功能包括健康狀態概覽、使用趨勢、任務管理和協作功能，特別適合需要即時監控和操作的非技術用戶。技術上，這個專案使用 TypeScript 和 Node.js，並依賴於多個腳本來執行不同的操作，如 `npm run build` 和 `npm test`。

與其他類似工具相比，OpenClaw Control Center 提供了更強的安全性和可觀察性，特別是針對 OpenClaw 的特定需求。使用者可以在一個界面中獲取所有必要的信息，這在多用戶環境中尤其重要。這個專案的活躍度不錯，最近有多次提交，顯示出持續的維護和更新。對於希望在本地環境中運行 OpenClaw 的團隊來說，這是一個非常合適的選擇。

**技術棧**：`TypeScript 5.8.2` · `Node.js` · `cross-env 7.0.3`

## 重點功能

- 健康狀態概覽 — 提供當前 OpenClaw 的健康狀態和關鍵操作項目。
- 使用趨勢分析 — 顯示當天、7 天和30 天的使用和花費趨勢。
- 任務管理 — 跟蹤當前任務、批准和執行鏈。
- 協作功能 — 支持父子代理之間的通信和任務交接。
- 安全風險摘要 — 提供當前安全風險和影響的簡明摘要。

## 快速開始

1. 克隆專案並安裝依賴
```bash
git clone https://github.com/TianyiDataScience/openclaw-control-center.git && cd openclaw-control-center && npm install
```
2. 複製環境變數範本
```bash
cp .env.example .env
```
3. 建構專案並啟動 UI
```bash
npm run build && npm run dev:ui
```

## 程式碼範例

```ts
{
  "前置條件": "確保已安裝 Node.js 和 npm",
  "指令": "npm run dev:ui",
  "預期輸出": "啟動本地 UI，顯示 OpenClaw 的健康狀態和使用趨勢"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 15 天內累積 2764 stars（184/天），forks 399（14.4%），顯示出強烈的社群關注。這個專案由 TianyiDataScience 團隊開發，專注於將 OpenClaw 轉變為可觀察的控制中心，解決了用戶在使用 OpenClaw 時缺乏可視化和控制的痛點。隨著 OpenClaw 的使用者需求增加，這個工具的出現正好填補了這一空白。社群中的討論和需求推動了這個專案的快速成長，顯示出其潛在的實用性和必要性。

## 適合誰使用

**目標受眾**：需要在本地環境中運行 OpenClaw 並希望獲得可視化控制的運營團隊。

> [!example] 使用場景
> - 運營經理用它來監控 OpenClaw 的健康狀態和任務進度，因為這樣可以快速識別問題並做出相應的調整。
> - 開發者用它來進行任務管理和協作，因為它提供了清晰的任務視圖和即時的使用趨勢分析。
> - 系統管理員用它來確保 OpenClaw 的安全性和穩定性，因為預設的安全配置能減少潛在的風險。

## 架構分析

這個專案的架構基於 Node.js 和 TypeScript，設計上強調安全性和可觀察性。使用者透過簡單的 CLI 指令來啟動和管理控制中心，並透過多個腳本來執行不同的操作。資料流方面，主要依賴環境變數來配置 OpenClaw 的連接和安全設置，這使得使用者能夠在不同的環境中靈活配置。選擇 Node.js 作為後端語言的原因在於其良好的非同步處理能力和豐富的生態系統，這使得專案能夠輕鬆整合各種功能。這個架構的代價在於對 Node.js 環境的依賴，若使用者不熟悉 Node.js，可能會增加學習成本。

## 技術深入分析

OpenClaw Control Center 使用 TypeScript 和 Node.js 作為核心技術棧，這使得它能夠充分利用 JavaScript 生態系的優勢。其核心功能包括健康狀態監控、使用趨勢分析和任務管理，這些功能都是透過後端腳本和前端 UI 組合實現的。效能方面，這個工具能夠處理多個同時請求，並在本地環境中提供即時反饋。由於依賴於 Node.js，這個專案在資源使用上相對輕量，但對於不熟悉 JavaScript 的開發者來說，可能需要一些時間來適應。設計上選擇了安全性優先的策略，這意味著在初始配置中會禁用高風險的寫入操作，這樣能夠有效降低潛在的安全風險。這個專案的整合難度相對較低，因為它主要依賴於 Node.js 的生態系統，與現有的 CI/CD 流程相容性良好。整體來說，這是一個針對特定需求設計的工具，能夠有效提升 OpenClaw 的使用體驗。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，讓新手能夠順利上手。安裝過程相對順暢，但需要注意環境變數的配置。文件中有中英文版本，對於不同語言的使用者都很友好。

## 優缺點分析

> [!success] 優點
> - 提供安全的預設配置，減少使用風險。
> - 強調可觀察性，適合非技術用戶使用。
> - 功能全面，涵蓋健康狀態、使用趨勢和任務管理等多個方面。

> [!danger] 缺點
> - 對於不熟悉 Node.js 的用戶，學習曲線較陡。
> - 在非標準環境中安裝可能會遇到問題。
> - 需要正確配置環境變數，否則可能無法正常啟動。

> [!warning] 注意事項
> - 僅支援特定版本的 OpenClaw，需確認兼容性。
> - 在非標準環境中安裝可能會遇到問題。
> - 需要正確配置環境變數，否則可能無法正常啟動。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [HKUDS/OpenSpace](https://github.com/HKUDS/OpenSpace) | 提供類似的監控功能，但不專注於 OpenClaw 的特定需求，適合更廣泛的應用場景。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 針對醫療領域的 OpenClaw 應用，功能上有針對性，但不如本專案通用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步和備份，而非 OpenClaw 的特定控制需求，適合需要資料管理的場景。 | 如果你的需求主要是資料同步而非控制和監控，則應選擇它。 | low，因為兩者的基本概念相似，易於上手。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供了一個通用的監控平台，但不具備 OpenClaw 的專屬功能，適合更廣泛的應用。 | 如果你的團隊需要一個通用的監控工具，而不特定於 OpenClaw，則應選擇它。 | medium，因為需要重新配置和適應不同的操作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **openclaw-control-center** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步和備份，而非 OpenClaw 的特定控制需求，適合需要資料管理的場景。 | 提供了一個通用的監控平台，但不具備 OpenClaw 的專屬功能，適合更廣泛的應用。 |
> | 遷移成本 | - | low，因為兩者的基本概念相似，易於上手。 | medium，因為需要重新配置和適應不同的操作流程。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是資料同步而非控制和監控，則應選擇它。 | 如果你的團隊需要一個通用的監控工具，而不特定於 OpenCl |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型團隊試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 VPS 上運行時可能會遇到環境變數配置問題
  - 解法：確保正確設置 .env 文件
- [MEDIUM] 首次啟動時可能無法連接到 OpenClaw Gateway
  - 解法：檢查 GATEWAY_URL 是否正確
- **[HIGH]** 某些功能在缺少 API 金鑰時無法正常運作
  - 解法：確保所有必要的 API 金鑰已配置

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司運行 OpenClaw | 非常適合 | 提供了簡單的監控和管理界面，適合小型團隊使用。 |
| 大型企業需要多用戶協作的 OpenClaw 環境 | 適合 | 能夠支持多用戶的任務管理和協作功能。 |
| 對安全性要求極高的金融機構 | 普通 | 雖然提供安全配置，但仍需進一步驗證其在高風險環境中的表現。 |
| 個人開發者進行 OpenClaw 的實驗性項目 | 非常適合 | 簡單易用，適合個人開發者進行測試和實驗。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，8 小時整合，得到即時監控和管理的效果，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要本地令牌認證，但不會存取敏感資料。依賴於 Node.js 的安全性，需定期更新以防範潛在的安全風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OpenClaw Control Center 最常與 OpenClaw 及其相關的 API 服務搭配使用，通常在開發和監控階段進行整合。實際整合範例為：在一個用 Node.js 開發的 OpenClaw 環境中，你可以使用 `npm run dev:ui` 啟動控制中心，並在 UI 中查看當前狀態。支援 GitHub Actions 和其他 CI 工具的整合，但對於非 Node.js 環境的相容性可能會有挑戰。最常見的整合問題是環境變數配置不當，這需要使用者仔細檢查設定。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/TianyiDataScience--openclaw-control-center");
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
> const me = dv.page("Repos/TianyiDataScience--openclaw-control-center");
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
| Forks | 399 |
| Open Issues | 23 |
| Issue 解決率 | 44% (18 closed) |
| 最後推送 | 2026-03-18 |
| 建立日期 | 2026-03-11 |
| Repo 大小 | 38.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/TianyiDataScience/openclaw-control-center) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@types/node` `cross-env` `tsx` `typescript`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ha7rock](https://github.com/ha7rock) | 4 |
> | [@elliotllliu](https://github.com/elliotllliu) | 4 |
> | [@MoYiC6](https://github.com/MoYiC6) | 2 |
> | [@JonasGao](https://github.com/JonasGao) | 1 |
> | [@TianyiDataScience](https://github.com/TianyiDataScience) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多次提交和問題回覆。
**連結**：[文件](https://github.com/TianyiDataScience/openclaw-control-center/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-16 ~ 2026-03-18）
> **活躍天數** 3 天 · **最新 commit** perf: limit session-preview concurrency and increase render cache TTL

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#58](https://github.com/TianyiDataScience/openclaw-control-center/issues/58) | 设计很好, 但vps上使用有小问题 | 0 | 0 |
> | [#55](https://github.com/TianyiDataScience/openclaw-control-center/issues/55) | 工作区未写明职责 | 0 | 0 |
> | [#53](https://github.com/TianyiDataScience/openclaw-control-center/issues/53) | Curious how OpenClaw helped build this project? 想了解下openclaw | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> > Chinese reader? Start here: [打开中文 README](README.zh-CN.md)
> 
> 
> ## Quick start
> 1. `npm install`
> 2. `cp .env.example .env`
> 3. Keep safe defaults for the first run; only change `GATEWAY_URL` or path overrides if your OpenClaw setup is non-standard.
> 4. `npm run build`
> 5. `npm test`
> 6. `npm run smoke:ui`
> 7. `npm run dev:ui`
> 
> 
> ## Installation and onboarding
> 
> 
> ### 2. Install the project
> ```bash
> git clone https://github.com/TianyiDataScience/openclaw-control-center.git
> cd openclaw-control-center
> npm install
> cp .env.example .env
> ```
> 
> If OpenClaw claims the repo is missing `src/runtime` or other core source files, do not start patching code. The canonical repo layout already includes:
> - `package.json`
> - `src/runtime`
> - `src/ui`
> - `.env.example`
> 
> That error usually means:
> - the current directory is not the `openclaw-control-center` repo root
> - the wrong repo was cloned
> - the checkout/download is incomplete
> - the agent is running in the wrong workspace
> 
> 
> ### 3. Recommended default: let your own OpenClaw do the install and setup
> The best first-run path is not manual setup. The best path is to give your own OpenClaw one install instruction block and let it do the safe wiring for you.
> 
> If you want a copy-ready standalone file, use:
> - [INSTALL_PROMPT.en.md](INSTALL_PROMPT.en.md)
> - [INSTALL_PROMPT.md](INSTALL_PROMPT.md)
> 
> It should handle:
> - environment checks
> - dependency install
> - `.env` creation or correction
> - safe first-run defaults
> - `build / test / smoke`
> - a final summary of what to run and what to open
> 
> This install instruction already accounts for common real-world differences such as:
> - no GPT / Codex subscription, or no readable subscription snapshot
> - OpenClaw running on API keys or non-Codex providers (for example OpenAI API, Anthropic, OpenRouter, or another provider backend)
> - non-default `~/.openclaw`, `~/.codex`, Gateway URL, or UI port
> - more than one plausible OpenClaw home, more than one Gateway candidate, or a non-default workspace on the same machine
> - a completely different active agent roster from the examples in this repo
> - a machine that can build locally but is not yet connected to a live Gateway
> - missing `node` / `npm`, no npm-registry connectivity, or insufficient write permissions in the repo
> - missing optional data sources where the control center should still come up safely in read-only mode
> 
> Copy the full block below into OpenClaw:
> 
> ```text
> You are installing and connecting OpenClaw Control Center to this machine's OpenClaw environment.
> 
> Your goal is not to explain theory. Your goal is to complete a safe first-run setup end to end.
> 
> Hard rules:
> 1. Work only inside the control-center repository.
> 2. Do not modify application source code unless I explicitly ask.
> 3. Do not modify OpenClaw's own config files.
> 4. Do not enable live import or approval mutations.
> 5. Keep all high-risk write paths disabled.
> 6. Do not assume default agent names, default paths, or a default subscription model. Use real inspection results from this machine.
> 7. Do not treat missing subscription data, missing Codex data, or a missing billing snapshot as an install failure. If the UI can run safely, continue and clearly mark which panels will be degraded.
> 8. Do not fabricate, generate, or overwrite any provider API key, token, cookie, or external credential. If OpenClaw itself is missing those prerequisites, report the gap instead of guessing.
> 
> Follow this order:
> 
> Phase 1: inspect the environment
> 1. Check whether the OpenClaw Gateway is reachable and confirm the correct `GATEWAY_URL`.
> 2. Confirm the correct `OPENCLAW_HOME` and `CODEX_HOME` on this machine.
> 3. If the subscription or billing snapshot is stored outside the default path, find the correct `OPENCLAW_SUBSCRIPTION_SNAPSHOT_PATH`.
> 4. Confirm which prerequisites are truly present and which are missing-but-degradable.
> 5. If more than one plausible `OPENCLAW_HOME`, Gateway, or workspace exists, do not guess.
> 6. If a path, process, or file is missing in a way that makes the control center impossible to start at all, stop and explain the missing prerequisite clearly.
> 7. If the missing item only affects richer dashboards, continue and mark those surfaces as partial.
> 8. Do not assume any fixed agent names. If `openclaw.json` is readable, treat it as the source of truth.
> 
> Phase 2: install the project
> 9. Confirm that the current directory is the control-center repo root.
> 10. Verify the repo is complete before editing anything.
> 11. If core paths are missing, stop and re-clone the official repo.
> 12. Run dependency install.
> 13. If `.env` does not exist, create it from `.env.example`; otherwise correct it while preserving safe defaults.
> 
> Phase 3: safe first-run configuration
> 14. Keep these values:
>    - READONLY_MODE=true
>    - LOCAL_TOKEN_AUTH_REQUIRED=true
>    - APPROVAL_ACTIONS_ENABLED=false
>    - APPROVAL_ACTIONS_DRY_RUN=true
>    - IMPORT_MUTATION_ENABLED=false
>    - IMPORT_MUTATION_DRY_RUN=false
>    - UI_MODE=false
> 15. Only change `GATEWAY_URL`, `OPENCLAW_HOME`, `CODEX_HOME`, `OPENCLAW_SUBSCRIPTION_SNAPSHOT_PATH`, or `UI_PORT` when this machine really requires it.
> 16. If `CODEX_HOME` or subscription data is missing, do not invent paths; continue and explain that Usage / Subscription will be partial.
> 
> Phase 4: validation
> 17. Run:
>    - npm run build
>    - npm test
>    - npm run smoke:ui
> 18. If any step fails, stop and tell me exactly which step failed, why, and what I should fix next.
> 19. If build / test / smoke succeed but the live Gateway is still unreachable, classify the result as: local UI works, but live observability is not fully connected yet.
> 
> Phase 5: handoff
> 20. Output:
>    - which env values you changed
>    - which values stayed at defaults
>    - the exact command I should run next
>    - the first 3 pages I should open
>    - which empty signals are normal because this environment is only partially wired
>    - which capabilities are fully available right now
>    - which capabilities are degraded because of missing data sources
>    - what to add later if I want richer subscription / Codex / Gateway visibility
> ```
> 
> 
> ## Best-practice install notes
> - If the dashboard is mostly for operators, keep the first rollout read-only.
> - If you are contacting the OpenClaw community or maintainers, keep the root README in English and keep the Chinese README one click away.
> - Treat richer usage, subscription, and collaboration signals as optional enhancements, not first-run blockers.
> 
> 
> ### Usage
> - Shows today, 7-day, and 30-day usage and spend trends.
> - Includes subscription windows, quota consumption, usage mix, context pressure, and connector status.
> - Best when you want to know whether spend or quota is becoming risky.
> 
> 
> ### Overview
> - The main operating screen for non-technical users.
> - Shows the current control posture, key action items, runtime issues, stalled runs, budget risk, who is active, and what needs attention first.
> - Best when you want one fast answer to: “Is OpenClaw okay right now?”
> 
> 
> ## Why this exists
> - One local place to see whether OpenClaw is healthy, busy, blocked, or drifting.
> - Built for non-technical operators who need observability and certainty, not raw backend payloads.
> - Safe first-run defaults:
>   - read-only by default
>   - local token auth by default
>   - mutation routes disabled by default
> 
> 
> # OpenClaw Control Center
> 
> Turn OpenClaw from a black box into a local control center you can see, trust, and control.
> 
> Language: **English** | [中文](README.zh-CN.md)
> 
> 
> ## What you get
> - `Overview`: health, current state, decisions waiting, and operator-facing summaries
> - `Usage`: usage, spend, subscription windows, and connector status
> - `Staff`: who is really working now versus only queued
> - `Collaboration`: parent-child relays and cross-session messages between existing agent sessions
> - `Tasks`: current work, approvals, execution chains, and runtime evidence
> - `Documents` and `Memory`: source-backed workbenches scoped to active OpenClaw agents
> 
> 
> ## What this release adds
> - `Collaboration`: a new standalone collaborat

## 延伸閱讀

相關概念：[[監控]] · [[自動化]] · [[API 設計]]

相關專案：[[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[photon-hq--qclaw-wechat-client|photon-hq/qclaw-wechat-client]] · [[zornade--visura-api|zornade/visura-api]]

[GitHub](https://github.com/TianyiDataScience/openclaw-control-center)

## 相關收錄

> [!note]- 直接競品（同子分類：監控）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "監控" AND file.name != "TianyiDataScience--openclaw-control-center"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "TianyiDataScience--openclaw-control-center"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "TianyiDataScience--openclaw-control-center" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "TianyiDataScience--openclaw-control-center"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["監控","自動化","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "TianyiDataScience--openclaw-control-center" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/TianyiDataScience--openclaw-control-center");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "TianyiDataScience--openclaw-control-center" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "TianyiDataScience" AND file.name != "TianyiDataScience--openclaw-control-center"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/TianyiDataScience--openclaw-control-center");
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
> const me = dv.page("Repos/TianyiDataScience--openclaw-control-center");
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
> const me = dv.page("Repos/TianyiDataScience--openclaw-control-center");
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
> const me = dv.page("Repos/TianyiDataScience--openclaw-control-center");
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
> const me = dv.page("Repos/TianyiDataScience--openclaw-control-center");
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

> **2026-03-14** — 首次收錄
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

- [[2026-03-18|2026-03-18]] — 再次上榜，2.0k stars
- [[2026-03-17|2026-03-17]] — 再次上榜，1.9k stars
- [[2026-03-16|2026-03-16]] — 再次上榜，1.7k stars
- [[2026-03-15|2026-03-15]] — 再次上榜，1.4k stars
- [[2026-03-14|2026-03-14]] — 首次收錄，994 stars
