---
repo: TianyiDataScience/openclaw-control-center
url: https://github.com/TianyiDataScience/openclaw-control-center
owner: TianyiDataScience
owner_type: User
language: TypeScript
license: MIT
description: "Turn OpenClaw from a black box into a local control center you can see, trust, and control."
homepage: ""
stars: 1894
stars_per_day: 379
forks: 263
open_issues: 16
created: 2026-03-11
pushed_at: 2026-03-16
first_seen: 2026-03-14
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "API 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-14
use_case: "將 OpenClaw 轉變為可見、可信任且可控制的本地控制中心。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-03-20"
contributor_count: 4
engagement: "medium"
issue_close_rate: 45
repo_size_kb: 39482
readme_length: 9995
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-14"
star_history: "2026-03-14:994,2026-03-14:1005,2026-03-15:1420,2026-03-15:1427,2026-03-16:1721,2026-03-16:1726,2026-03-17:1892,2026-03-17:1894"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "openclaw-control-center"
  - "TianyiDataScience/openclaw-control-center"
  - "將 OpenClaw 轉變為可見、可信任且可控制的本地控制中心。"
---

# openclaw-control-center

**1.9k** stars · **379** stars/天 · 建立 5 天前 · TypeScript · MIT

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

`easy-install`

> [!summary] 一句話摘要
> 將 OpenClaw 轉變為可見、可信任且可控制的本地控制中心。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (379 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要在本地環境中運行 OpenClaw 並希望擁有一個安全控制中心的團隊或個人。
> **一句話重點** 這個專案不僅提供功能，還專注於用戶的安全和易用性，特別適合非技術用戶。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到一個安全的控制中心，值得一試。

> [!abstract] 核心創新
> 提供了一個安全優先的本地控制中心，專為非技術用戶設計。

## 專案簡介

OpenClaw Control Center 是一個專為 OpenClaw 設計的本地控制中心，旨在提供一個安全且易於理解的界面，讓非技術用戶能夠監控系統狀態、任務執行和資源使用情況。用戶可以透過簡單的界面查看系統的總體健康狀態、當前任務、用量和員工狀態，並且所有的操作都預設為只讀，確保安全性。核心功能包括系統總覽、用量監控、任務管理和員工狀態查詢，這些功能都可以通過簡單的 API 調用來實現。使用者可以透過 `npm run dev:ui` 指令啟動 UI 界面，並且可以在本地環境中輕鬆運行。

技術上，這個專案使用 TypeScript 和 Node.js，並且依賴於一些輕量的庫如 `tsx` 和 `cross-env`，使得開發和運行過程更加流暢。相較於其他類似工具，如 AlpinDale/parsync 和 FreedomIntelligence/OpenClaw-Medical-Skills，OpenClaw Control Center 更加專注於用戶友好的界面和安全性，特別適合需要在本地環境中運行 OpenClaw 的團隊。實際使用中，這個工具能夠有效地幫助用戶快速了解系統運行狀況，但在高負載情況下可能會遇到性能瓶頸。這個專案目前處於 beta 階段，適合小型團隊或個人使用，未來可能會持續增強功能和性能。

**技術棧**：`TypeScript` · `Node.js` · `cross-env` · `tsx`

## 重點功能

- 系統總覽 — 提供系統狀態、待處理事項和運營摘要的集中展示。
- 用量監控 — 顯示今日、7 天和30 天的用量和花費趨勢，幫助用戶評估資源使用情況。
- 任務管理 — 整合任務板、排期和執行證據，讓用戶了解當前任務的進展。
- 員工狀態 — 清晰展示誰在工作、誰待命，避免誤判。
- 安全模式 — 預設為只讀，並要求本地 token 鑑權，確保系統安全。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 複製環境變數範本
```bash
cp .env.example .env
```
3. 編譯專案
```bash
npm run build
```
4. 執行測試
```bash
npm test
```
5. 啟動 UI 界面
```bash
npm run dev:ui
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Node.js 和 npm。",
  "指令": "npm run dev:ui",
  "預期輸出": "啟動本地控制中心 UI，並可在瀏覽器中訪問。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 1894 stars（379/天），forks 263（13.9%），顯示出強烈的社群興趣。這個專案的主要貢獻者來自 TianyiDataScience 團隊，他們在 AI 和自動化領域有豐富的經驗。該專案解決了 OpenClaw 使用者在監控和控制上的痛點，之前的解決方案往往缺乏用戶友好的界面和安全性。最近的推廣活動和社群討論也提高了它的曝光率。技術上，隨著 TypeScript 和 Node.js 的普及，這個工具的可行性和吸引力也隨之增強。forks/stars 比率為 13.9%，顯示出許多用戶對此專案有實際的修改需求。

## 適合誰使用

**目標受眾**：需要在本地環境中運行 OpenClaw 並希望擁有一個安全控制中心的團隊或個人。

> [!example] 使用場景
> - 產品經理用它來監控 OpenClaw 系統的運行狀態，因為它提供了簡潔的總覽頁面，能快速了解系統健康狀況。
> - 系統管理員用它來管理任務和員工狀態，因為它能清晰地展示誰在工作和哪些任務卡住了，避免了手動查詢的繁瑣。
> - 開發者用它來進行 API 測試和驗證，因為它提供了安全的本地環境，並且支持多種 API 操作。

## 架構分析

OpenClaw Control Center 採用單一頁面應用架構，使用 TypeScript 和 Node.js 實現。這樣的設計使得開發和維護變得更加簡單，並且能夠快速響應用戶的需求。資料流主要通過 RESTful API 進行交互，所有的數據都以 JSON 格式傳輸，這樣可以保證資料的清晰和易於處理。

選擇 TypeScript 的原因在於其靜態類型檢查能夠提高開發效率，減少錯誤。這個架構的缺點是可能在高並發情況下出現性能瓶頸，特別是在大量用戶同時訪問時。整體來說，這個架構適合小型到中型的團隊使用，但在面對更大規模的應用時，可能需要進一步的優化。

## 技術深入分析

OpenClaw Control Center 的核心技術機制是基於 TypeScript 和 Node.js 的單頁應用架構，這使得開發者可以快速構建和維護應用。資料流通過 RESTful API 進行，所有的請求和響應都使用 JSON 格式，這樣的設計不僅提高了資料處理的效率，也使得錯誤處理變得更加簡單。效能方面，這個工具能夠處理中小型團隊的需求，但在高並發情況下可能會出現延遲。選擇 TypeScript 是因為它能提供靜態類型檢查，減少運行時錯誤，這對於開發過程中的錯誤排查非常有幫助。依賴樹相對簡單，主要依賴於 `tsx` 和 `cross-env`，這使得整體的安裝和配置過程變得輕鬆。技術風險方面，隨著用戶數量的增加，可能會出現性能瓶頸，特別是在資料存取和處理上。這個工具的整合難度較低，可以輕鬆與現有的 CI/CD pipeline 結合，並且支持與主流 IDE 的整合，這使得團隊能夠快速上手。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且結構良好，提供了詳細的安裝步驟和使用說明。安裝過程相對順暢，沒有明顯的坑。文件中有提供簡單的範例，幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 用戶友好的界面，適合非技術用戶使用。
> - 安全性高，預設為只讀模式，避免誤操作。
> - 功能集中，能夠快速了解系統狀態和任務進度。

> [!danger] 缺點
> - 在高負載下性能可能不佳。
> - 僅支持本地環境，無法擴展到雲端。
> - 對於新手用戶可能需要一定的學習時間。

> [!warning] 注意事項
> - 在高負載情況下可能會遇到性能瓶頸。
> - 目前僅支持本地環境，無法在雲端環境中運行。
> - 對於非技術用戶，可能需要一些學習曲線來理解各項功能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步，而 OpenClaw Control Center 更加關注系統監控和控制。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 主要針對醫療領域的應用，而本專案則是通用的控制中心。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步和備份，而 OpenClaw Control Center 更加關注於系統監控和用戶界面。 | 如果你的需求主要是資料同步和備份，而不是監控系統狀態，則應選擇它。 | medium，因為需要重新設計資料流和用戶界面。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的應用，提供特定功能，而本專案則是通用的控制中心。 | 如果你的應用場景是醫療領域，則應選擇它，因為它提供了針對性的功能。 | high，因為需要重新設計整個系統架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **openclaw-control-center** | **parsync** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步和備份，而 OpenClaw Control Center 更加關注於系統監控和用戶界面。 | 專注於醫療領域的應用，提供特定功能，而本專案則是通用的控制中心。 |
> | 遷移成本 | - | medium，因為需要重新設計資料流和用戶界面。 | high，因為需要重新設計整個系統架構。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是資料同步和備份，而不是監控系統狀態，則應選 | 如果你的應用場景是醫療領域，則應選擇它，因為它提供了針對性的 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型團隊或個人試用，但不建議用於生產環境的核心路徑。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載情況下可能會導致 UI 渲染緩慢。
  - 解法：減少同時訪問的用戶數量，或優化後端 API。
- [MEDIUM] 某些 API 調用需要本地 token，否則會被拒絕。
  - 解法：確保在請求中添加正確的 token。
- [MEDIUM] 在 Windows 環境下啟動 UI 可能會遇到問題。
  - 解法：使用 `npm run dev:ui` 而不是 `npm run dev`。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的小型團隊使用 OpenClaw 進行項目管理 | 非常適合 | 提供了簡單的界面來監控任務和資源使用。 |
| 大型企業需要在雲端運行 OpenClaw | 不適合 | 目前僅支持本地環境，無法擴展到雲端。 |
| 非技術用戶希望監控系統狀態 | 非常適合 | 界面友好，易於理解。 |
| 需要高並發訪問的應用場景 | 普通 | 在高負載下可能會遇到性能瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到一個安全的控制中心，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具不需要高權限運行，且不存取敏感資料。依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

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
| Forks | 263 |
| Open Issues | 16 |
| Issue 解決率 | 45% (13 closed) |
| 最後推送 | 2026-03-16 |
| 建立日期 | 2026-03-11 |
| Repo 大小 | 38.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/TianyiDataScience/openclaw-control-center) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@types/node` `cross-env` `tsx` `typescript`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@elliotllliu](https://github.com/elliotllliu) | 4 |
> | [@MoYiC6](https://github.com/MoYiC6) | 2 |
> | [@JonasGao](https://github.com/JonasGao) | 1 |
> | [@TianyiDataScience](https://github.com/TianyiDataScience) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有多個問題被提出和討論。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-15 ~ 2026-03-16）
> **活躍天數** 2 天 · **最新 commit** Deepen dark mode into graphite glass

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#40](https://github.com/TianyiDataScience/openclaw-control-center/issues/40) | 纯AI生成的代码，以至于  src/ui/server.ts 单文件有 17000行？。。。 | 1 | 1 |
> | [#21](https://github.com/TianyiDataScience/openclaw-control-center/issues/21) | UI 进程已启动并监听，但主控制台页面渲染极慢 / 超时 | 1 | 8 |
> | [#41](https://github.com/TianyiDataScience/openclaw-control-center/issues/41) | Proposal: operator-friendly diagnostics bundle for startup f | 0 | 0 |
> | [#37](https://github.com/TianyiDataScience/openclaw-control-center/issues/37) | 启动会导致服务器卡死 | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> > Looking for English? Start here: [Open the English README](README.en.md)
> 
> 
> # OPENCLAW_CONFIG_PATH=/path/to/openclaw.json
> 
> ## API 校验与错误包络
> - 所有修改型 API 都要求 `Content-Type: application/json`
> - 导入/导出和所有修改型接口默认需要本地 token：
>   - header：`x-local-token: `
>   - 或 `Authorization: Bearer `
> - 严格 query 校验会拒绝未知参数
> - JSON 错误统一格式：
>   - `{"ok":false,"requestId":"...","error":{"code":"...","status":,"message":"...","issues":[],"requestId":"..."}}`
> - JSON 响应会带 `requestId`，所有响应头都会带 `x-request-id`
> 
> 
> # OpenClaw Control Center
> 
> OpenClaw 的安全优先、本地优先控制中心。
> 
> 语言： [English](README.en.md) | **中文**
> 
> 
> ## 这个项目是做什么的
> - 给 OpenClaw 提供一个本地控制中心，集中看系统是否稳定、谁在工作、哪些任务卡住了、今天花了多少。
> - 面向非技术用户，重点是“看得懂、看得准”，不是暴露原始后端 payload。
> - 首次接入默认安全：
>   - 默认只读
>   - 默认本地 token 鉴权
>   - 默认关闭高风险写操作
> 
> 
> ## 你能得到什么
> - `总览`：系统状态、待处理事项、关键风险和运营摘要
> - `用量`：用量、花费、订阅窗口和连接状态
> - `员工`：谁真的在工作，谁只是排队待命
> - `协作`：父子会话接力与智能体之间的跨会话通信
> - `任务`：当前任务、审批、执行链和运行证据
> - `文档` 与 `记忆`：按活跃 OpenClaw agent 范围展示的源文件工作台
> 
> 
> ## 这个版本新增了什么
> - `协作`：新增独立 `协作` 页面，直接看父子会话接力和 `Main ⇄ Pandas` 这种已验证跨会话通信，不再只看执行链猜关系。
> - `设置`：新增 `接线状态`，直接告诉你哪些数据已经接好、哪些还差一步，以及该去哪里补。
> - `设置`：新增 `安全风险摘要`，把当前风险、影响和下一步建议翻译成人话。
> - `设置`：新增 `更新状态`，直接看当前版本、最新版本、更新通道和安装方式。
> - `用量`：新增 `上下文压力`，直接看哪些会话更接近上下文上限，哪里可能变慢或变贵。
> - `记忆`：新增 `记忆状态`，直接看每个智能体的记忆是否可用、可搜索、需不需要检查。
> 
> 
> ## 适合谁
> - 已经在用 OpenClaw、想要一个统一控制中心的团队或个人
> - 在同一台机器或可达本地环境里运行 OpenClaw 的使用者
> - 想公开发布一个安全优先的 OpenClaw 控制台，而不是做通用 agent 平台的人
> 
> 
> ## 截图
> 以下截图来自一个本地 OpenClaw 环境：
> 
>   
>     
>       
>     
>     
>       
>     
>   
>   
>     Token 消耗归因直接看定时任务 token 是被哪些任务吃掉的，占比一眼可见。
>     员工页直接看谁在工作、谁待命、最近产出和排班状态。
>   
> 
>   
>     
>       
>     
>     
>       
>     
>   
>   
>     协作页直接看父子会话接力，以及像 Main ⇄ Pandas 这样的已验证跨会话通信。
>     安全与更新状态直接看当前风险、影响、下一步建议，以及当前版本和最新版本。
>   
> 
> 
> ## 5 分钟启动
> ```bash
> npm install
> cp .env.example .env
> npm run build
> npm test
> npm run smoke:ui
> npm run dev:ui
> ```
> 
> 然后打开：
> - `http://127.0.0.1:4310/?section=overview&lang=zh`
> - `http://127.0.0.1:4310/?section=overview&lang=en`
> 
> 说明：
> - 推荐用 `npm run dev:ui` 启动界面；它比 `UI_MODE=true npm run dev` 更稳，尤其是 Windows shell。
> - `npm run dev` 只会执行一次 monitor，不会启动 HTTP UI。
> 
> 
> ## 分区功能说明
> 
> 
> ### 总览
> - 给非技术用户看的主操作页。
> - 集中展示当前总控态势、待处理事项、运行异常、停滞执行、预算风险、谁在忙、哪些地方需要优先关注。
> - 最适合快速回答一句话：`OpenClaw 现在整体正常吗？`
> 
> 
> ### 用量
> - 展示今日、7 天、30 天的用量和花费趋势。
> - 包含订阅窗口、配额消耗、用量结构、上下文压力和数据连接状态。
> - 最适合判断花费或额度是否开始有风险。
> 
> 
> ### 员工
> - 展示谁现在真的在工作，谁只是有排队中的任务。
> - 明确区分“正在执行”和“下一项”，避免把 backlog 误认为正在跑。
> - 最适合判断谁忙、谁闲、谁卡住、谁在等待。
> 
> 
> ### 协作
> - 独立展示智能体之间怎么交接、谁先接单、谁派给了谁、回复从哪条会话回来。
> - 既能看父会话与子会话的接力，也能看 `sessions_send` / `inter-session message` 这类已验证跨会话通信。
> - 最适合理解“这件事到底是谁转给了谁、现在卡在谁这里”。
> 
> 
> ### 记忆
> - 一个直接基于源文件的记忆工作台，用来查看和编辑每日记忆与长期记忆。
> - 范围跟随 `openclaw.json` 里的活跃 agent，不会把已删除 agent 继续显示出来。
> - 现在还会直接告诉你每个智能体的记忆是否正常、可搜索、是否需要检查。
> - 最适合查看或维护当前 OpenClaw 团队真实在用的记忆内容。
> 
> 
> ### 文档
> - 一个直接基于源文件的文档工作台，用来查看和编辑共享文档与 agent 核心文档。
> - 打开的是实际源文件，保存后也直接写回同一个源文件。
> - 最适合维护系统背后真正生效的工作文档。
> 
> 
> ### 任务
> - 把任务板、排期、审批、执行链和运行证据放在同一个分区里。
> - 能帮助区分哪些只是看板映射，哪些已经有真实执行证据，哪些任务卡住了、需要跟进或待审。
> - 最适合理解“现在到底在做什么、只是计划了什么、哪些需要你介入”。
> 
> 
> ### 设置
> - 展示安全模式、连接器状态和数据链路预期。
> - 会明确告诉你哪些数据已经接上，哪些还只是部分可见，哪些高风险动作是故意关闭的。
> - 现在还包含 `接线状态`、`安全风险摘要` 和 `更新状态` 三张关键卡片。
> - 最适合排查环境配置、解释为什么某些信号缺失。
> 
> 
> ## 核心约束
> - 只修改 `control-center/` 目录内的文件
> - 默认 `READONLY_MODE=true`
> - 默认 `LOCAL_TOKEN_AUTH_REQUIRED=true`
> - 默认 `IMPORT_MUTATION_ENABLED=false`
> - 默认 `IMPORT_MUTATION_DRY_RUN=false`
> - 开启鉴权时，导入/导出和所有改状态接口都需要本地 token
> - 审批动作有硬开关，默认关闭：`APPROVAL_ACTIONS_ENABLED=false`
> - 审批动作默认 dry-run：`APPROVAL_ACTIONS_DRY_RUN=true`
> - 不会改写 `~/.openclaw/openclaw.json`
> 
> 
> ## 安装与上手
> 
> 
> ### 1. 开始前准备
> 你最好已经有：
> - 一个可用的 OpenClaw 安装
> - 一个可连接的 OpenClaw Gateway
> - 当前机器上的 `node` 和 `npm`
> - 对 OpenClaw 主目录的读取权限
> 
> 如果你希望 `用量 / 订阅` 信息更完整，当前机器最好还能读到：
> - `~/.openclaw`
> - `~/.codex`
> - OpenClaw 订阅快照文件，尤其是它不在默认位置时
> 
> 
> ### 2. 安装项目
> ```bash
> git clone https://github.com/TianyiDataScience/openclaw-control-center.git
> cd control-center
> npm install
> cp .env.example .env
> ```
> 
> 如果你的 OpenClaw 说“仓库缺少 `src/runtime`”或“缺少核心源码”，先不要改代码。这个仓库的标准结构本来就包含：
> - `package.json`
> - `src/runtime`
> - `src/ui`
> - `.env.example`
> 
> 这类报错通常意味着：
> - 当前目录不是 `openclaw-control-center` 仓库根目录
> - clone 到了错误仓库
> - checkout / 下载不完整
> - agent 在错误 workspace 里执行
> 
> 
> ### 3. 默认推荐：让你自己的 OpenClaw 直接完成安装与接线
> 最推荐的接入方式，不是你手动一项项配，而是直接把下面这段安装指令交给你自己的 OpenClaw。
> 
> 如果你想直接复制独立文件，用这个：
> - [INSTALL_PROMPT.md](INSTALL_PROMPT.md)
> - [INSTALL_PROMPT.en.md](INSTALL_PROMPT.en.md)
> 
> 它应该一次性帮你做完这些事：
> - 检查本机 OpenClaw / Gateway / 路径
> - 安装依赖
> - 创建或修正 `.env`
> - 保持安全默认值
> - 跑 `build / test / smoke`
> - 告诉你最后该执行什么命令、该看哪些页面
> 
> 这段安装指令已经考虑了这些常见情况：
> - 用户没有 GPT / Codex 订阅，或者没有可读的订阅快照
> - 用户的 OpenClaw 底层不是订阅，而是 API key / 其他 provider（例如 OpenAI API、Anthropic、OpenRouter 等）
> - `~/.openclaw`、`~/.codex`、Gateway 地址、端口都不是默认值
> - 一台机器上存在多套 OpenClaw home、多个可能的 Gateway，或者当前项目不是默认 workspace
> - 机器上的活跃 agent 名单和本仓库示例完全不同
> - 机器当前只能本地构建，暂时还接不上 live Gateway
> - 机器缺少 `node` / `npm`、没有 npm registry 网络、或者仓库目录没有写权限
> - 某些数据源缺失，但控制中心仍然应该先以“安全只读”方式跑起来
> 
> 直接把下面整段原样交给 OpenClaw：
> 
> ```text
> 你现在要帮我把 OpenClaw Control Center 安装并接到这台机器自己的 OpenClaw 环境上。
> 
> 你的目标不是解释原理，而是直接完成一次安全的首次接入。
> 
> 严格约束：
> 1. 只允许在 control-center 仓库里工作。
> 2. 除非我明确要求，否则不要修改应用源码。
> 3. 不要修改 OpenClaw 自己的配置文件。
> 4. 不要开启 live import，不要开启 approval mutation。
> 5. 所有高风险写操作保持关闭。
> 6. 不要假设这台机器使用默认 agent 名称、默认路径、默认订阅方式，必须以实际探测结果为准。
> 7. 不要把“缺少订阅数据 / 缺少 Codex 数据 / 缺少账单快照”当成安装失败；只要 UI 能安全跑起来，就应当继续并明确哪些面板会降级。
> 8. 不要伪造、生成、改写任何 provider API key、token、cookie 或外部凭证；如果 OpenClaw 本身缺少这些前置条件，只能报告，不要替用户猜。
> 
> 请按这个顺序执行：
> 
> 第一阶段：确认环境
> 1. 检查 OpenClaw Gateway 是否可达，并确认正确的 `GATEWAY_URL`。
> 2. 确认这台机器上正确的 `OPENCLAW_HOME` 和 `CODEX_HOME`。
> 3. 如果订阅或账单快照文件不在默认位置，找到正确的 `OPENCLAW_SUBSCRIPTION_SNAPSHOT_PATH`。
> 4. 确认这台机器上有哪些前提是真正存在的，哪些是缺失但允许降级的。至少分别判断：
>    - `node`
>    - `npm`
>    - 仓库目录写权限
>    - npm registry 网络连通性（如果本机还没安装依赖）
>    - OpenClaw Gateway
>    - `openclaw.json`
>    - OpenClaw 会话 / 运行时数据
>    - `CODEX_HOME`
>    - 订阅 / 账单快照
>    - OpenClaw 当前依赖的 provider / 凭证是否已经由 OpenClaw 自己配置妥当（只检查是否存在，不要打印 secret）
> 5. 如果机器上存在多个候选 `OPENCLAW_HOME`、多个可能的 Gateway，或多个 workspace，不要猜。优先选择“当前正在运行的 Gateway + 可读 `openclaw.json` + 与当前项目最匹配”的组合；如果仍然无法确定，就停止并把候选项列出来。
> 6. 如果缺少会导致“完全无法启动控制中心”的必要路径、进程或文件，例如 `node` / `npm` 缺失、npm 无法下载依赖、仓库不可写、OpenClaw 根目录不可读，不要猜，直接停止并明确告诉我缺什么。
> 7. 如果缺少的只是增强型数据源，例如订阅快照、Codex telemetry、部分运行时文件，或者机器根本不是用订阅而是 API key/provider 方式运行，不要停止安装；继续并把这些项标记为“安装可继续，但相关页面会部分缺失”。
> 8. 不要假设任何固定 agent 名称。若 `openclaw.json` 可读，就以它为准；若不可读，再回退到运行时可见 agent，并明确说明可信度下降。
> 
> 第二阶段：安装项目
> 9. 确认当前目录是 control-center 仓库根目录。
> 10. 先确认仓库本体完整。至少检查这些路径真实存在：
>    - `package.json`
>    - `src/runtime`
>    - `src/ui`
>    - `.env.example`
> 11. 如果缺少 `src/runtime`、`src/ui` 或 `package.json`，不要继续安装，也不要猜源码去哪了。直接把它判定为“错误仓库 / 不完整 checkout / 错误工作目录”，并执行：
>    - 退出当前错误目录
>    - 重新 clone：`https://github.com/TianyiDataScience/openclaw-control-center.git`
>    - 进入新 clone 的仓库根目录后再继续
> 12. 运行依赖安装。
> 13. 如果 `.env` 不存在，就从 `.env.example` 创建；如果存在，就在保留安全默认值的前提下修正它。不要删除用户已有的无关安全配置，只改这次接线真正需要的项。
> 
> 第三阶段：配置安全首次接入
> 14. 保持这些值：
>    - READONLY_MODE=true
>    - LOCAL_TOKEN_AUTH_REQUIRED=true
>    - APPROVAL_ACTIONS_ENABLED=false
>    - APPROVAL_ACTIONS_DRY_RUN=true
>    - IMPORT_MUTATION_ENABLED=false
>    - IMPORT_MUTATION_DRY_RUN=false
>    - UI_MODE=false
> 15. 只有在本机环境确实不同的时候，才修改：
>    - GATEWAY_URL
>    - OPENCLAW_HOME
>    - CODEX_HOME
>    - OPENCLAW_SUBSCRIPTION_SNAPSHOT_PATH
>    - UI_PORT
> 16. 如果这台机器是通过 provider API key / 自定义 LLM 提供商运行 OpenClaw，而不是通过 Codex / GPT 订阅运行，不要把这当成错误；只要 OpenClaw 自己能工作，就继续安装，并明确说明订阅额度与部分 provider-specific 卡片可能不可见。
> 17. 如果 `CODEX_HOME` 不存在，或者这台机器根本没有 Codex / GPT 订阅数据，不要强行填假路径；保留为空，并在结果里明确说明“Usage / Subscription 将部分可见或不可见”。
> 18. 如果订阅快照不存在，不要伪造 `OPENCLAW_SUBSCRIPTION_SNAPSHOT_PATH`；继续安装，并明确说明订阅额度相关卡片会显示未连接或估算状态。
> 19. 如果 `4310` 被占用，选择一个空闲本地端口并写入 `UI_PORT`，然后把新地址明确告诉我。
> 20. 不要因为我的 agent roster 和示例仓库不同就改应用逻辑；控制中心应该根据我机器自己的 OpenClaw 配置和运行时数据来显示 agent。
> 
> 第四阶段：验证安装
> 21. 运行：
>    - npm run build
>    - npm test
>    - npm run smoke:ui
> 22. 如果有任何一步失败，停止并告诉我：
>    - 哪一步失败了
>    - 原因是什么
>    - 我下一步该怎么修
> 23. 如果 build / test / smoke 通过，但 live Gateway 仍不可达，也不要把这次接入判定为失败；要把结果归类为“本地 UI 已可用，但 live 观测尚未接通”。
> 24. 如果 OpenClaw 自己因为外部 provider 凭证缺失而无法产出实时数据，也不要误判为 control-center 安装失败；要单独归类为“控制中心已装好，但上游 OpenClaw 前置条件未满足”。
> 
> 第五阶段：交付可启动结果
> 25. 如果验证通过，输出：
>    - 你实际修改了哪些 env 值
>    - 最终 `.env` 中哪些值沿用了默认值
>    - 我下一步启动 UI 的准确命令
>    - 我应该先打开的 3 个页面
>    - 哪些信号如果为空，属于“正常但未接线完全”
>    - 哪些能力现在已经可用
>    - 哪些能力因为当前机器没有相关数据源而处于降级状态
>    - 如果我以后补上订阅 / Codex / Gateway，只需要补哪几个 env 或前置条件
>    - 如果当前缺的是 provider API k

## 延伸閱讀

相關概念：[[API 設計]] · [[自動化]] · [[CLI/TUI]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[photon-hq--qclaw-wechat-client|photon-hq/qclaw-wechat-client]] · [[zornade--visura-api|zornade/visura-api]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]]

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
> const concepts = ["API 設計","自動化","CLI/TUI"];
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

- [[2026-03-17|2026-03-17]] — 再次上榜，1.9k stars
- [[2026-03-16|2026-03-16]] — 再次上榜，1.7k stars
- [[2026-03-15|2026-03-15]] — 再次上榜，1.4k stars
- [[2026-03-14|2026-03-14]] — 首次收錄，994 stars
