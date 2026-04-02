---
repo: TianyiDataScience/openclaw-control-center
url: https://github.com/TianyiDataScience/openclaw-control-center
owner: TianyiDataScience
owner_type: User
language: TypeScript
license: MIT
description: "Turn OpenClaw from a black box into a local control center you can see, trust, and control."
homepage: ""
stars: 3296
stars_per_day: 157
forks: 497
open_issues: 25
created: 2026-03-11
pushed_at: 2026-04-01
first_seen: 2026-03-14
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-14
use_case: "將 OpenClaw 從黑箱變成可視化的本地控制中心，讓你能夠信任和控制。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-21"
contributor_count: 5
engagement: "medium"
issue_close_rate: 55
repo_size_kb: 39897
readme_length: 9877
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-14"
star_history: "2026-03-14:994,2026-03-14:1005,2026-03-15:1420,2026-03-15:1427,2026-03-16:1721,2026-03-16:1726,2026-03-17:1892,2026-03-17:1894,2026-03-18:2025,2026-03-18:2027,2026-03-19:2118,2026-03-20:2231,2026-03-21:2331,2026-03-22:2405,2026-03-23:2472,2026-03-24:2552,2026-03-25:2624,2026-03-26:2707,2026-03-27:2764,2026-03-28:2804,2026-03-29:2873,2026-03-30:2943,2026-03-31:3088,2026-04-01:3218,2026-04-02:3296"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "openclaw-control-center"
  - "TianyiDataScience/openclaw-control-center"
  - "將 OpenClaw 從黑箱變成可視化的本地控制中心，讓你能夠信任和控制。"
---

# openclaw-control-center

**3.3k** stars · **157** stars/天 · 建立 21 天前 · TypeScript · MIT

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
> 將 OpenClaw 從黑箱變成可視化的本地控制中心，讓你能夠信任和控制。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (157 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在本地環境中安全控制和監控 OpenClaw 的開發者和團隊。
> **一句話重點** 這個專案的設計重點在於安全性和可觀察性，適合需要高控制和透明度的應用場景。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/TianyiDataScience--openclaw-control-center");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "TianyiDataScience--openclaw-control-center" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，8 小時整合，得到高安全性的控制中心，值得投入。

> [!abstract] 核心創新
> 提供了一個安全的本地控制中心，專為 OpenClaw 的可觀察性和操作設計。

## 專案簡介

OpenClaw Control Center 提供了一個安全的本地控制中心，用於監控 OpenClaw 的可觀察性、任務操作和操作員審查。用戶可以透過簡單的 CLI 指令（如 `npm run dev:ui`）啟動 UI，並利用環境變數配置來適應不同的 OpenClaw 環境。這個工具的設計理念是將 OpenClaw 的複雜性隱藏起來，讓使用者能夠專注於操作而非配置，特別適合需要高安全性和可控性的應用場景。它使用 TypeScript 和 Node.js 架構，並依賴於多個腳本來處理不同的任務，如 `command:backup-export` 和 `command:task-heartbeat`，這些腳本確保了操作的穩定性和安全性。與其他控制中心相比，OpenClaw 的獨特之處在於其針對安全的設計，避免了高風險的寫入操作，並提供了完整的環境檢查和依賴安裝流程。

這使得它在需要高可用性和安全性的生產環境中特別有用。用戶在使用過程中可能會遇到一些常見問題，如環境變數配置錯誤或依賴缺失，但這些問題通常可以通過遵循文檔中的指導來解決。該專案目前處於活躍開發中，社群回應速度尚可，適合中小型團隊進行實驗或內部工具開發。未來六個月內，預計將增加更多的功能和改進文檔，進一步提升使用者體驗。

**技術棧**：`TypeScript` · `Node.js` · `Docker`

## 重點功能

- 安全的環境配置 — 使用 `.env` 文件來管理環境變數，確保安全性和靈活性。
- 多種命令操作 — 提供如 `command:backup-export` 和 `command:task-heartbeat` 的多種命令，支持任務的自動化管理。
- 可視化 UI — 使用 `npm run dev:ui` 啟動可視化界面，方便用戶進行操作和監控。
- 完整的安裝指導 — 提供詳細的安裝步驟和環境檢查，減少配置錯誤的可能性。
- 高安全性設計 — 避免高風險的寫入操作，確保系統的穩定性和安全性。

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
5. 啟動 UI 界面
```bash
npm run dev:ui
```

## 程式碼範例

```ts
{
  "前置條件": "確保已安裝 Node.js 和 npm。",
  "指令": "npm run dev:ui",
  "預期輸出": "啟動可視化控制中心的 UI 界面。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 21 天就累積 3296 stars（157/天），forks 497（15.1%），顯示出強烈的社群關注。主要貢獻者包括 ha7rock 和 elliotllliu，他們在開源社群中有良好的聲譽。這個專案解決了 OpenClaw 使用者在操作過程中缺乏可視化控制的痛點，之前的方案往往需要手動配置和操作，效率低下且容易出錯。最近的推文和社群討論也促進了這個專案的曝光率，讓更多開發者關注到其潛力。技術上，這個工具的設計使得它能夠在多種環境中靈活運行，這是許多開發者在尋找的特性。forks/stars 比率為 15.1%，顯示出不少人對這個專案進行了實際的修改和使用。

## 適合誰使用

**目標受眾**：需要在本地環境中安全控制和監控 OpenClaw 的開發者和團隊。

> [!example] 使用場景
> - 後端工程師用它來監控 OpenClaw 的任務狀態，因為它提供了可視化的界面和安全的操作流程，減少了手動錯誤的風險。
> - DevOps 團隊用它來自動化 OpenClaw 的部署和維護，因為它的環境檢查和依賴安裝功能能夠簡化整個過程。
> - 產品經理用它來審查操作員的任務執行歷史，因為它支持查看歷史會話記錄，提升了團隊的透明度和信任度。

## 架構分析

這個專案採用 TypeScript 和 Node.js 作為主要開發語言，並使用 Docker 來管理環境。其架構設計上，將功能模組化，便於維護和擴展。資料流方面，使用 CLI 命令來觸發不同的操作，並通過環境變數來配置運行時參數。

選擇 TypeScript 使得代碼更具可讀性和可維護性，但也增加了學習成本。依賴樹相對簡單，主要依賴於 Node.js 生態系統的庫，降低了外部依賴的風險。整體而言，這種設計使得專案在安全性和可擴展性方面有良好的表現。

## 技術深入分析

OpenClaw Control Center 的核心技術機制在於其安全的環境配置和模組化的設計。使用 TypeScript 和 Node.js，這使得代碼在可讀性和維護性上有優勢。效能方面，該工具能夠處理中小型的任務監控，並且在本地環境中運行時的資源需求相對較低。設計上，選擇 TypeScript 使得開發者能夠利用靜態類型檢查，減少運行時錯誤，但這也要求開發者具備一定的 TypeScript 知識。技術風險方面，若未來需要擴展功能，可能會面臨依賴管理的挑戰，尤其是在多個外部 API 的整合上。整合方面，與主流的 CI/CD 工具（如 GitHub Actions）相容性良好，但在與某些舊版工具的整合上可能會遇到問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和範例，對於新手來說相對友好。安裝過程中，若遵循指導，通常不會遇到太大問題。文件中有多語言版本，方便不同語言的使用者理解。整體而言，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 提供安全的環境配置，減少錯誤風險。
> - 可視化界面使得操作更直觀，提升使用者體驗。
> - 模組化設計便於未來擴展和維護。

> [!danger] 缺點
> - 對於新手來說，學習曲線較陡峭，需要熟悉 Node.js 和 TypeScript。
> - 目前功能相對有限，尚未涵蓋所有 OpenClaw 的操作需求。
> - 需要正確配置環境變數，否則可能導致啟動失敗。

> [!warning] 注意事項
> - 僅支援 Node.js 環境，無法在其他環境中運行。
> - 需要正確配置環境變數，否則可能導致啟動失敗。
> - 對於大型團隊，可能需要額外的安全審查和配置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的自動化和監控功能，但主要針對檔案同步，而非 OpenClaw 的任務管理。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據隱私和安全性，適合需要高安全性的應用場景，但功能範圍較窄。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於檔案同步，使用 Rust 實作，提供高效能的數據傳輸。 | 如果你的需求主要是檔案同步而非任務監控，這個工具會更合適。 | low，因為兩者的基本概念相似，且都有 CLI 操作。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於數據隱私，使用 Python 實作，功能範圍較窄。 | 如果你的專案重點在數據隱私和安全性，這個工具可能更符合需求。 | medium，因為需要調整操作流程以符合其特定功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **openclaw-control-center** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於檔案同步，使用 Rust 實作，提供高效能的數據傳輸。 | 專注於數據隱私，使用 Python 實作，功能範圍較窄。 |
> | 遷移成本 | - | low，因為兩者的基本概念相似，且都有 CLI 操作。 | medium，因為需要調整操作流程以符合其特定功能。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是檔案同步而非任務監控，這個工具會更合適。 | 如果你的專案重點在數據隱私和安全性，這個工具可能更符合需求。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合用於內部工具開發，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，可能會遇到依賴缺失的問題，導致啟動失敗。
  - 解法：確保所有依賴都已正確安裝，並檢查環境變數配置。
- [MEDIUM] 如果環境變數配置錯誤，可能導致應用無法正常運行。
  - 解法：仔細檢查 `.env` 文件的配置，確保所有必要的變數都已設定。
- [MEDIUM] 在某些情況下，UI 界面可能無法正確加載。
  - 解法：檢查網路連接和依賴是否完整，必要時重新啟動應用。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 提供了安全的操作和可視化界面，適合小型團隊使用。 |
| 需要高安全性的企業環境 | 適合 | 設計上強調安全性，能夠滿足企業需求。 |
| 大型團隊的任務監控 | 普通 | 功能尚未完全覆蓋所有需求，可能需要額外的擴展。 |
| 個人開發者的實驗專案 | 非常適合 | 安裝簡單，適合用於快速原型開發。 |
| 對安全性要求不高的開發環境 | 不適合 | 過於複雜的配置可能會增加不必要的負擔。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~8 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，8 小時整合，得到高安全性的控制中心，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要正確配置環境變數，否則可能導致安全漏洞。對於 CI/CD 使用相對安全，但需注意依賴的安全性和穩定性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OpenClaw Control Center 最常與 OpenClaw 及其相關的 API 服務搭配使用，通常在開發和監控階段進行整合。在一個使用 Node.js 的專案中，可以通過 `npm install` 安裝依賴，然後使用 `npm run dev:ui` 啟動控制中心。該工具與主流的 CI/CD 工具（如 GitHub Actions）相容性良好，能夠輕鬆集成到現有的開發流程中。整合時，最常見的問題是環境變數配置不當，這需要開發者在使用前仔細檢查。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 OpenClaw Control Center 出現之前，使用者主要依賴於手動配置和操作，這導致了許多錯誤和不便。隨著對自動化和可觀察性的需求增加，這個工具的出現填補了市場的空白。技術上，Node.js 和 TypeScript 的普及使得這種工具的開發變得可行，並且能夠提供更好的性能和安全性。

這個專案代表了開發者對於自動化和安全性的重視，未來可能會有更多類似的工具出現。

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
| Forks | 497 |
| Open Issues | 25 |
| Issue 解決率 | 55% (30 closed) |
| 最後推送 | 2026-04-01 |
| 建立日期 | 2026-03-11 |
| Repo 大小 | 39.0 MB |
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

**社群活躍度**：社群活躍度中等，定期有更新和回應。
**連結**：[文件](https://github.com/TianyiDataScience/openclaw-control-center/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-18 ~ 2026-04-01）
> **活躍天數** 5 天 · **最新 commit** feat: improve docs, staff visibility, and docker support

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#76](https://github.com/TianyiDataScience/openclaw-control-center/issues/76) | 可否增强员工总览页面 - 支持查看历史会话记录与员工自定义信息 | 0 | 1 |
> | [#69](https://github.com/TianyiDataScience/openclaw-control-center/issues/69) | 文档和记忆都没有发现可编辑的问题 实际上本地是有的 | 0 | 0 |
> | [#68](https://github.com/TianyiDataScience/openclaw-control-center/issues/68) | 可否增加以下功能： | 0 | 0 |
> | [#67](https://github.com/TianyiDataScience/openclaw-control-center/issues/67) | 报错。 | 0 | 1 |

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

相關概念：[[自動化]] · [[CLI/TUI]] · [[安全漏洞]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[HKUDS--OpenSpace|HKUDS/OpenSpace]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[photon-hq--qclaw-wechat-client|photon-hq/qclaw-wechat-client]]

[GitHub](https://github.com/TianyiDataScience/openclaw-control-center)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "TianyiDataScience--openclaw-control-center"
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
> const concepts = ["自動化","CLI/TUI","安全漏洞"];
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
