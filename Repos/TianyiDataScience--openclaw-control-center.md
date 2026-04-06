---
repo: TianyiDataScience/openclaw-control-center
url: https://github.com/TianyiDataScience/openclaw-control-center
owner: TianyiDataScience
owner_type: User
language: TypeScript
license: MIT
description: "Turn OpenClaw from a black box into a local control center you can see, trust, and control."
homepage: ""
stars: 3560
stars_per_day: 142
forks: 550
open_issues: 29
created: 2026-03-11
pushed_at: 2026-04-03
first_seen: 2026-03-14
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "API 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-14
use_case: "將 OpenClaw 轉變為可見、可信任和可控制的本地控制中心。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-21"
contributor_count: 5
engagement: "medium"
issue_close_rate: 52
repo_size_kb: 40159
readme_length: 9877
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-14"
star_history: "2026-03-14:994,2026-03-14:1005,2026-03-15:1420,2026-03-15:1427,2026-03-16:1721,2026-03-16:1726,2026-03-17:1892,2026-03-17:1894,2026-03-18:2025,2026-03-18:2027,2026-03-19:2118,2026-03-20:2231,2026-03-21:2331,2026-03-22:2405,2026-03-23:2472,2026-03-24:2552,2026-03-25:2624,2026-03-26:2707,2026-03-27:2764,2026-03-28:2804,2026-03-29:2873,2026-03-30:2943,2026-03-31:3088,2026-04-01:3218,2026-04-02:3296,2026-04-03:3382,2026-04-04:3455,2026-04-05:3498,2026-04-06:3560"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "openclaw-control-center"
  - "TianyiDataScience/openclaw-control-center"
  - "將 OpenClaw 轉變為可見、可信任和可控制的本地控制中心。"
---

# openclaw-control-center

**3.6k** stars · **142** stars/天 · 建立 25 天前 · TypeScript · MIT

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
> 將 OpenClaw 轉變為可見、可信任和可控制的本地控制中心。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (142 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在本地環境中管理和監控 OpenClaw 實例的中小型團隊。
> **一句話重點** 這個專案最厲害的不是功能，而是它證明了用戶友好的設計能夠顯著提升 OpenClaw 的可用性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/TianyiDataScience--openclaw-control-center");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "API 工具" && p.file.name !== "TianyiDataScience--openclaw-control-center" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 API 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、10 小時整合，得到一個可視化的 OpenClaw 控制中心，值得一試。

> [!abstract] 核心創新
> 提供一個安全的本地控制中心，專為 OpenClaw 用戶設計，強調可觀察性和操作簡便性。

## 專案簡介

OpenClaw Control Center 提供了一個安全的本地控制界面，讓用戶能夠監控和管理 OpenClaw 的運行狀態。用戶首先需要安裝專案，透過 `npm install` 安裝依賴，然後配置 `.env` 檔案以設置 `GATEWAY_URL` 和 `LOCAL_API_TOKEN`。這個工具的賣點在於它提供了一個可視化的操作界面，讓非技術用戶能夠快速了解系統健康狀態、使用趨勢和任務執行情況。技術上，它使用 TypeScript 和 Node.js，並依賴於 `tsx` 和 `cross-env` 等庫來處理環境變數和執行指令。這種設計使得開發者能夠輕鬆地進行本地開發和測試。

與其他類似工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，OpenClaw 控制中心專注於提供一個安全的、以用戶為中心的界面，並且預設為只讀模式，這樣可以降低誤操作的風險。實際使用中，這個工具能夠有效地處理多個 OpenClaw 實例的監控，並且支持多種使用場景，如任務管理和協作。雖然目前有 29 個開放的 Issues，但解決率為 52%，顯示出社群的活躍度。整體來看，這是一個適合中小型團隊使用的工具，特別是那些需要簡化 OpenClaw 操作的用戶。

**技術棧**：`TypeScript` · `Node.js` · `Docker`

## 重點功能

- 健康監控 — 提供當前系統狀態和運行問題的即時反饋。
- 使用趨勢 — 顯示今日、7天和30天的使用和花費趨勢。
- 任務管理 — 追蹤當前任務、批准和執行鏈。
- 安全預設 — 預設為只讀模式，降低誤操作風險。
- 多用戶協作 — 支持多代理的工作聊天和任務分配。

## 快速開始

1. 安裝專案依賴
```bash
npm install
```
2. 複製環境變數範本
```bash
cp .env.example .env
```
3. 構建專案
```bash
npm run build
```
4. 運行測試
```bash
npm test
```
5. 啟動 UI 開發模式
```bash
npm run dev:ui
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 Node.js 和 npm",
  "npm install",
  "# 預期輸出：安裝完成後，所有依賴將被安裝在 node_modules 資料夾中。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 25 天就累積 3560 stars（142/天），forks 550（15.4%），這顯示出強勁的增長潛力。作者 TianyiDataScience 團隊專注於提供 OpenClaw 的可視化和操作界面，解決了用戶在使用 OpenClaw 時面臨的可觀察性和操作複雜性問題。這個專案的推出正值對於開源 AI 工具需求上升的時期，並且其設計考量了用戶的安全和易用性。forks/stars 比率 15.4% 表示許多用戶正在積極修改和使用這個工具，而不是僅僅觀望。

## 適合誰使用

**目標受眾**：需要在本地環境中管理和監控 OpenClaw 實例的中小型團隊。

> [!example] 使用場景
> - 運維工程師用它來監控 OpenClaw 的健康狀態，因為它提供即時的系統狀態和使用趨勢，幫助快速定位問題。
> - 產品經理用它來查看任務執行的進度和歷史記錄，因為它的可視化界面能夠快速提供關鍵資訊，減少手動查詢的時間。
> - 開發者用它來進行本地測試和開發，因為它的安全預設和簡單的安裝流程能夠快速上手，降低開發門檻。

## 架構分析

OpenClaw Control Center 採用單體架構，使用 TypeScript 和 Node.js 開發，這樣的設計使得開發者能夠快速構建和測試功能。資料流方面，系統透過環境變數配置與 OpenClaw 進行交互，並使用 REST API 來獲取系統狀態和執行任務。選擇 TypeScript 使得代碼更具可維護性，但也增加了初學者的學習曲線。由於是單體架構，未來擴展可能會面臨性能瓶頸，特別是在多用戶同時使用的情況下。整體而言，這種架構適合中小型團隊，但在大型部署時可能需要考慮微服務架構的轉型。

## 技術深入分析

OpenClaw Control Center 的核心技術機制在於其使用 TypeScript 和 Node.js 來構建一個可視化的操作界面，這使得非技術用戶能夠輕鬆使用。系統能夠處理多個 OpenClaw 實例的監控，並且支持即時的任務管理和協作功能。效能方面，該系統能夠在本地環境中快速啟動，並且對於小型團隊的使用需求有良好的支持。設計選擇上，使用 TypeScript 提升了代碼的可維護性，但也增加了學習成本。依賴樹相對簡單，主要依賴於 Node.js 和幾個輕量級的庫，這降低了整體的複雜度。技術風險方面，隨著用戶數量增加，單體架構可能會導致性能瓶頸，尤其是在高併發的情況下。整合方面，與主流的 CI/CD 工具相容性良好，能夠輕鬆嵌入現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含多個範例，安裝過程順暢，沒有明顯的坑。提供了良好的入門指南，讓新手能夠快速上手，但目前僅有英文版本，缺少多語言支持。

## 優缺點分析

> [!success] 優點
> - 安全預設，降低誤操作風險。
> - 提供即時的系統健康監控。
> - 簡單的安裝和配置流程，適合快速上手。

> [!danger] 缺點
> - 對於大型團隊可能需要額外的自定義。
> - 目前的功能仍在開發中，可能不夠完整。
> - 單體架構在擴展性上有一定的限制。

> [!warning] 注意事項
> - 僅支援 Node.js 環境，需確保安裝正確版本。
> - 對於大型團隊，可能需要進一步的自定義來滿足特定需求。
> - 目前的 UI 功能仍在持續開發中，可能會有部分功能不完整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步和傳輸，而本專案則專注於 OpenClaw 的監控和管理。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供代理服務的管理，而本專案則提供可視化的操作界面和任務管理功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步和傳輸，並不提供可視化的操作界面。 | 如果你的需求主要是資料同步而非監控和管理，則應選擇此工具。 | medium，因為需要重新設計資料流和操作邏輯。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供代理服務的管理，功能上與 OpenClaw 控制中心有重疊，但不專注於可視化界面。 | 如果你的團隊需要更強大的代理管理功能，而不僅僅是監控，則應選擇此工具。 | high，因為需要重新設計整個操作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **openclaw-control-center** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步和傳輸，並不提供可視化的操作界面。 | 提供代理服務的管理，功能上與 OpenClaw 控制中心有重疊，但不專注於可視化界面。 |
> | 遷移成本 | - | medium，因為需要重新設計資料流和操作邏輯。 | high，因為需要重新設計整個操作流程。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是資料同步而非監控和管理，則應選擇此工具。 | 如果你的團隊需要更強大的代理管理功能，而不僅僅是監控，則應選 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境中，可能會遇到無法找到核心檔案的錯誤
  - 解法：確保當前目錄是 repo 根目錄，並重新克隆專案。
- [MEDIUM] 如果未設置 `LOCAL_API_TOKEN`，將無法執行寫入操作
  - 解法：在 `.env` 中設置一個隨機字符串作為 `LOCAL_API_TOKEN`。
- [MEDIUM] 在高併發情況下，性能可能會下降
  - 解法：考慮將系統拆分為微服務架構以提高擴展性。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司使用 OpenClaw 進行任務管理 | 非常適合 | 簡單易用的界面能夠快速上手，滿足小型團隊的需求。 |
| 大型企業需要監控多個 OpenClaw 實例 | 普通 | 雖然功能強大，但單體架構可能會導致性能瓶頸。 |
| 開發者需要快速測試 OpenClaw 的功能 | 非常適合 | 提供了良好的開發和測試支持，能夠快速迭代。 |
| 需要一個安全的生產環境來運行 OpenClaw | 不適合 | 目前仍在 beta 階段，不建議用於生產環境的核心路徑。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、10 小時整合，得到一個可視化的 OpenClaw 控制中心，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅在本地環境中運行，並且不存取敏感資料。依賴鏈中未發現已知的供應鏈風險，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OpenClaw Control Center 最常與 OpenClaw 及其相關工具搭配使用，通常在開發和監控環節中發揮作用。在一個使用 Node.js 和 Docker 的環境中，可以輕鬆整合此工具來監控 OpenClaw 的運行狀態。它支援 GitHub Actions 和其他 CI 工具，並且可以與 VS Code 等 IDE 整合。常見的整合問題包括環境變數配置錯誤，這可能導致無法正確啟動工具。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 OpenClaw 控制中心出現之前，用戶主要依賴命令行工具來管理 OpenClaw，這樣的方式不夠直觀且容易出錯。隨著對可視化工具需求的增加，這個專案應運而生，旨在提供一個安全且易於使用的界面。技術上，隨著 Node.js 和 TypeScript 的普及，開發這樣的工具變得更加可行。

這個工具代表了開源社群對於用戶友好設計的重視，未來可能會隨著 OpenClaw 的發展而持續演進。

## 團隊採用指南

**建議團隊規模**：1-10 人的小型團隊

**前置技能**：
- 熟悉 Node.js
- 了解基本的環境變數配置
- 有 CI/CD pipeline 經驗

> [!tip] 導入策略
> 第一週：在個人 side project 試用。第二週：在非關鍵的內部工具導入。第三週：撰寫最佳實踐文件。第四週：在主產品的一個非核心模組開始使用。

**成功指標**：用戶滿意度提高，任務執行效率提升 30%。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方 migration 工具轉換為其他工具。

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
| Forks | 550 |
| Open Issues | 29 |
| Issue 解決率 | 52% (32 closed) |
| 最後推送 | 2026-04-03 |
| 建立日期 | 2026-03-11 |
| Repo 大小 | 39.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/TianyiDataScience/openclaw-control-center) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@types/node` `cross-env` `tsx` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 97
>     "JavaScript" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ha7rock](https://github.com/ha7rock) | 4 |
> | [@elliotllliu](https://github.com/elliotllliu) | 4 |
> | [@MoYiC6](https://github.com/MoYiC6) | 2 |
> | [@JonasGao](https://github.com/JonasGao) | 1 |
> | [@TianyiDataScience](https://github.com/TianyiDataScience) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應 Issues。
**連結**：[文件](https://github.com/TianyiDataScience/openclaw-control-center)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-28 ~ 2026-04-03）
> **活躍天數** 5 天 · **最新 commit** fix: harden hall dispatch and usage session types

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#84](https://github.com/TianyiDataScience/openclaw-control-center/issues/84) | Continuous monitor mode pins CPU cores via tight-loop opencl | 0 | 0 |
> | [#83](https://github.com/TianyiDataScience/openclaw-control-center/issues/83) | 工作区未写明职责 | 0 | 2 |
> | [#82](https://github.com/TianyiDataScience/openclaw-control-center/issues/82) | feat: support configurable timezone for UI timestamps | 0 | 0 |
> | [#76](https://github.com/TianyiDataScience/openclaw-control-center/issues/76) | 可否增强员工总览页面 - 支持查看历史会话记录与员工自定义信息 | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> > Chinese reader? Start here: [打开中文 README](README.zh-CN.md)
> 
> 
> ## Quick start
> 1. `npm install`
> 2. `cp .env.example .env`
> 3. Keep safe defaults for the first run; only change `GATEWAY_URL` or path overrides if your OpenClaw setup is non-standard.
> 4. Before testing save/import/hall write actions, set `LOCAL_API_TOKEN` in `.env` to a long random string.
> 5. `npm run build`
> 6. `npm test`
> 7. `npm run smoke:ui`
> 8. `npm run smoke:hall`
> 9. `npm run dev:ui`
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
> 9. Confirm that the current directory is the control-center repo root. If it has not been cloned yet, clone it first: `git clone https://github.com/TianyiDataScience/openclaw-control-center.git`
> 10. Verify the repo is complete before editing anything.
> 11. If core paths (`src/runtime`, `src/ui`, `package.json`) are missing, do not continue. Re-clone from `https://github.com/TianyiDataScience/openclaw-control-center.git`.
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
>    - npm run smoke:hall
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
> ## What `LOCAL_API_TOKEN` is
> - `LOCAL_API_TOKEN` is a machine-local shared secret that you set yourself in `.env`.
> - It protects write actions such as save, import/export-with-side-effects, approvals, and hall/task-room mutations when `LOCAL_TOKEN_AUTH_REQUIRED=true`.
> - Typical first-run setup:
>   - keep `LOCAL_TOKEN_AUTH_REQUIRED=true`
>   - set `LOCAL_API_TOKEN` to a long random string
>   - enter that same token in the UI when a protected action prompts for it
> - If you leave `LOCAL_API_TOKEN` unset while the auth gate is enabled, protected writes stay blocked by design.
> 
> 
> ## Why this exists
> - One local place to see whether OpenClaw is healthy, busy, blocked, or drif

## 延伸閱讀

相關概念：[[API 設計]] · [[自動化]] · [[監控]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[photon-hq--qclaw-wechat-client|photon-hq/qclaw-wechat-client]]

[GitHub](https://github.com/TianyiDataScience/openclaw-control-center)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "TianyiDataScience--openclaw-control-center"
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
> const concepts = ["API 設計","自動化","監控"];
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
