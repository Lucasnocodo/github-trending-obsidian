---
repo: jackwener/opencli
url: https://github.com/jackwener/opencli
owner: jackwener
owner_type: User
language: TypeScript
license: Apache-2.0
description: "Make any website your CLI. A powerful, AI-native runtime for seamless browser automation and dynamic web data extraction."
homepage: ""
stars: 3102
stars_per_day: 517
forks: 277
open_issues: 35
created: 2026-03-14
pushed_at: 2026-03-20
first_seen: 2026-03-19
week: "2026-W12"
month: "2026-03"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: "v1.0.2"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-19
use_case: "將任何網站或 Electron 應用轉換為命令行介面，實現無縫的瀏覽器自動化和動態網頁數據提取。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-24"
contributor_count: 5
engagement: "low"
issue_close_rate: 44
repo_size_kb: 1651
readme_length: 9827
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-19"
star_history: "2026-03-19:1858,2026-03-19:1885,2026-03-20:2453,2026-03-20:2480,2026-03-21:3102"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "opencli"
  - "jackwener/opencli"
  - "將任何網站或 Electron 應用轉換為命令行介面，實現無縫的瀏覽器自動化和動態網頁數據提取。"
---

# opencli

**2.5k** stars · **496** stars/天 · 建立 5 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/jackwener--opencli");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.0.2` `easy-install`

> [!summary] 一句話摘要
> 將任何網站或 Electron 應用轉換為命令行介面，實現無縫的瀏覽器自動化和動態網頁數據提取。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (496 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要自動化多個網站數據提取的開發者，尤其是那些熟悉 CLI 工具的使用者。
> **一句話重點** OpenCLI 將網站自動化和命令行操作結合，讓用戶能夠更高效地提取和操作網頁數據。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/jackwener--opencli");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "jackwener--opencli" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 CLI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學習，2 小時整合，得到高效的網站數據提取工具，值得投資。

> [!abstract] 核心創新
> 將任何網站或 Electron 應用轉換為命令行介面，實現無縫的瀏覽器自動化和動態網頁數據提取。

## 專案簡介

OpenCLI 是一個強大的 CLI 工具，能將任何網站或 Electron 應用轉換為命令行介面。用戶首先需要安裝 Chrome 擴展來建立與瀏覽器的連接，然後可以使用 `opencli` 命令來執行各種操作，例如 `opencli bilibili hot --limit 5` 來獲取 Bilibili 熱門內容。這個工具的賣點在於它能重用 Chrome 的登錄狀態，確保用戶的憑證不會離開瀏覽器，並且支持 AI 驅動的 API 探索和適配器生成。技術上，OpenCLI 使用 TypeScript 和 JavaScript 實現，並依賴於 Node.js 20 以上版本，這使得它能夠利用現代 JavaScript 特性和生態系統。與其他工具相比，如 `jackwener/twitter-cli` 和 `jackwener/xiaohongshu-cli`，OpenCLI 提供了一個統一的接口來操作多個平台，這樣用戶無需學習不同的 CLI 命令。

這對於需要自動化多個網站的開發者來說，無疑是個巨大的便利。使用者可能會遇到的問題包括需要確保 Chrome 登錄狀態，以及在使用特定命令時需要安裝 `yt-dlp` 來支持視頻下載。這個專案目前處於穩定階段，值得在個人或小型團隊的專案中使用，未來可能會增加更多的適配器和功能。對於需要快速集成多個網站數據的開發者，OpenCLI 是一個理想的選擇。

**技術棧**：`TypeScript` · `JavaScript` · `Node.js >= 20.0.0`

## 重點功能

- 多平台支持 — 支持多個網站和 Electron 應用的命令行操作。
- 重用 Chrome 登錄狀態 — 確保用戶的憑證不會離開瀏覽器。
- AI 驅動的 API 探索 — 使用 `opencli explore` 命令自動發現網站的 API。
- 自動適配器生成 — 使用 `opencli synthesize` 命令從探索結果生成 YAML 適配器。
- 支持多種輸出格式 — 可選擇 JSON、YAML 等格式輸出數據。

## 快速開始

1. 全局安裝 OpenCLI
```bash
npm install -g @jackwener/opencli
```
2. 列出所有可用命令
```bash
opencli list
```
3. 從 Bilibili 獲取熱門視頻
```bash
opencli bilibili hot --limit 5
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Chrome 並登錄到目標網站。",
  "指令": "opencli bilibili hot --limit 5",
  "預期輸出": "返回 Bilibili 上的熱門視頻列表。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 2480 stars（496/天），forks 222（9.0%），顯示出強烈的社群興趣。作者 jackwener 之前開發了多個 CLI 工具，這次的 OpenCLI 解決了多平台 CLI 操作的痛點，讓開發者能夠更方便地自動化網頁數據提取。社群的反饋和需求促進了這個工具的快速成長，尤其是在自動化和 AI 驅動的應用場景中。這種需求的上升，讓 OpenCLI 成為一個非常實用的工具，尤其是在需要快速集成多個網站數據的情況下。

## 適合誰使用

**目標受眾**：需要自動化多個網站數據提取的開發者，尤其是那些熟悉 CLI 工具的使用者。

> [!example] 使用場景
> - 後端工程師用它來自動化從 Bilibili 獲取熱門視頻，因為這樣可以節省手動查找的時間，並且能夠快速獲得最新的內容。
> - 數據分析師用它來提取 Zhihu 上的熱門問題數據，因為這樣能夠直接將數據輸出為 JSON 格式，方便後續分析。
> - 開發者用它來控制 Electron 應用程式，因為這樣可以在命令行中執行複雜的操作，提升開發效率。

## 架構分析

OpenCLI 採用輕量級的 Browser Bridge Chrome 擴展來連接用戶的瀏覽器，並通過 Node.js 進行命令行操作。這種設計使得用戶無需進行繁瑣的配置，只需登錄到目標網站即可使用。資料流方面，命令會通過擴展發送到瀏覽器，並獲取相應的數據。這種設計的優勢在於簡化了用戶的使用流程，但代價是需要依賴 Chrome 瀏覽器的登錄狀態。擴展性方面，使用者可以通過簡單的 YAML 文件來擴展命令，這使得 OpenCLI 在功能上具有很高的靈活性。

## 技術深入分析

OpenCLI 的核心技術在於其 Browser Bridge 擴展，這使得命令行工具能夠直接與瀏覽器互動，並重用用戶的登錄狀態。這種設計不僅提高了安全性，還簡化了用戶的操作流程。效能上，OpenCLI 能夠快速處理多個網站的請求，並且支持高並發的數據提取。選擇 TypeScript 和 Node.js 作為開發語言，使得專案能夠利用現代 JavaScript 的特性，並且易於維護。依賴樹方面，OpenCLI 依賴於一些輕量級的庫，如 `chalk` 和 `commander`，這使得整體專案保持輕量。技術風險方面，依賴於 Chrome 瀏覽器的登錄狀態可能會在某些情況下造成問題，特別是當用戶的登錄狀態過期時。整合方面，OpenCLI 能夠輕鬆與現有的開發工具鏈結合，並且支持 CI/CD 流程中的自動化測試，這使得它在開發環境中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含了詳細的安裝和使用範例。安裝過程相對順暢，但需要注意 Chrome 登錄狀態。文件提供了中文版本，對於中文用戶非常友好。

## 優缺點分析

> [!success] 優點
> - 支持多個網站和 Electron 應用，功能強大。
> - 重用 Chrome 登錄狀態，安全性高。
> - AI 驅動的 API 探索和適配器生成，提升開發效率。

> [!danger] 缺點
> - 需要安裝 Chrome 瀏覽器，限制了使用環境。
> - 對於某些網站，可能需要額外的適配器支持。
> - 下載視頻需要額外安裝 `yt-dlp`，增加了使用複雜性。

> [!warning] 注意事項
> - 僅支援 Node.js 20 以上版本。
> - 需要 Chrome 瀏覽器的登錄狀態。
> - 下載視頻需要安裝 `yt-dlp`。
> - 對於某些網站，可能需要額外的適配器支持。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 專注於 Twitter 的命令行操作，功能較為單一，適合只需操作 Twitter 的用戶。 |
| [jackwener/xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) | 專注於小紅書的數據提取，功能較為專一，適合只需操作小紅書的用戶。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 提供更廣泛的 CLI 工具，但不如 OpenCLI 專注於多網站的自動化操作。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 專注於 Twitter 的命令行操作，功能較為單一。 | 如果你的需求僅限於操作 Twitter，這個工具會更簡單易用。 | low，因為命令格式相似。 |
| [jackwener/xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) | 專注於小紅書的數據提取，功能較為專一。 | 如果你只需要從小紅書提取數據，這個工具會更合適。 | low，因為命令格式相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **opencli** | **twitter-cli** | **xiaohongshu-cli** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 Twitter 的命令行操作，功能較為單一。 | 專注於小紅書的數據提取，功能較為專一。 |
> | 遷移成本 | - | low，因為命令格式相似。 | low，因為命令格式相似。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於操作 Twitter，這個工具會更簡單易用 | 如果你只需要從小紅書提取數據，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的專案，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 需要確保 Chrome 登錄狀態，否則會獲取空數據。
  - 解法：在執行命令前檢查 Chrome 是否已登錄。
- [MEDIUM] 某些網站的適配器可能不完整，導致命令失敗。
  - 解法：查看官方文檔以獲取最新的適配器資訊。
- [MEDIUM] 安裝 `yt-dlp` 可能會遇到版本不兼容問題。
  - 解法：確保使用最新版本的 `yt-dlp`。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要自動化從 Bilibili 獲取熱門視頻的開發者 | 非常適合 | 支持多個網站的自動化操作，且重用登錄狀態。 |
| 需要提取 Zhihu 上的熱門問題數據的數據分析師 | 非常適合 | 能夠直接將數據輸出為 JSON 格式，方便分析。 |
| 需要控制 Electron 應用的開發者 | 適合 | 支持多種桌面應用的命令行操作。 |
| 不熟悉命令行操作的普通用戶 | 不適合 | 需要一定的 CLI 使用經驗才能有效使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學習，2 小時整合，得到高效的網站數據提取工具，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要 Chrome 登錄狀態，並且依賴於用戶的憑證安全。對於 CI/CD 使用時，需確保環境安全，避免憑證洩露。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/jackwener--opencli");
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
> const me = dv.page("Repos/jackwener--opencli");
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
| Forks | 222 |
| Open Issues | 33 |
| Issue 解決率 | 44% (26 closed) |
| 最後推送 | 2026-03-19 |
| 建立日期 | 2026-03-14 |
| Repo 大小 | 1.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jackwener/opencli) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `chalk` `cli-table3` `commander` `js-yaml` `ws` `@types/js-yaml` `@types/ws` `@types/node` `tsx` `typescript` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 96
>     "JavaScript" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 217 |
> | [@Astro-Han](https://github.com/Astro-Han) | 5 |
> | [@ByteYue](https://github.com/ByteYue) | 4 |
> | [@himself65](https://github.com/himself65) | 3 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 3 |

**最新版本**：v1.0.2 (2026-03-19)

> [!info]- Release Notes
> ## What's Changed
> * fix: install XHR interceptor after navigation to prevent context reset by @Astro-Han in https://github.com/jackwener/opencli/pull/91
> * feat: Add apple-podcasts coverage and docs by @BruceLoveDecimal in https://github.com/jackwener/opencli/pull/92
> * fix: dedupe history and improve Discord channel parsing by @Pleasurecruise in https://github.com/jackwener/opencli/pull/77
> * feat: add WeRead adapter with 7 commands by @Astro-Han in https://github.com/jackwener/opencli/pull/89
> * fix(intercept): IIFE wrapping for installInterceptor/getInterceptedRequests by @Astro-Han in https://github.com/jackwener/opencli/pull/100
> * feat: add Chaoxing (学习通) adapter — assignments & exams by @dev-Flyblue in https://github.com/jackwener/opencli/pull/101
> 
> ## New Contributors
> * @BruceLoveDecimal made their first contribution in https://github.com/jackwener/opencli/pull/92
> * @Pleasurecruise made their first contribution in https://github.com/jackwener/opencli/pull/77
> * @dev-Flyblue made their first contribution in https://github.com/jackwener/opencli/pull/101
> 
> **Full Changelog**: https://github.com/jackwener/opencli/compare/v1.0.0...v1.0.2

## 社群與生態

**社群活躍度**：社群活躍，最近有多個 PR 和 Issue 被處理。
**連結**：[文件](https://github.com/jackwener/opencli/blob/main/README.zh-CN.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-19 ~ 2026-03-19）
> **活躍天數** 1 天 · **最新 commit** docs: align CDP release notes

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#59](https://github.com/jackwener/opencli/issues/59) | Feature Request: 轨迹模拟（Human-like Interaction Patterns）防止封号 `enhancement` | 8 | 0 |
> | [#37](https://github.com/jackwener/opencli/issues/37) | Proposal: 将引入新网站的流程插件化 | 5 | 1 |
> | [#2](https://github.com/jackwener/opencli/issues/2) | OpenCLI 是否定位为统一替代各独立 CLI 项目？(twitter-cli, xiaohongshu-cli, b | 4 | 2 |
> | [#102](https://github.com/jackwener/opencli/issues/102) | [Feature]: 支持插件仓库机制，让用户无需修改主仓库即可安装和使用外部 Adapter `enhancement` | 2 | 0 |
> | [#83](https://github.com/jackwener/opencli/issues/83) | feat: twitter timeline 支持区分 For You / Following | 2 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenCLI
> 
> > **Make any website or Electron App your CLI.**  
> > Zero risk · Reuse Chrome login · AI-powered discovery · Browser + Desktop automation
> 
> [中文文档](./README.zh-CN.md)
> 
> [](https://www.npmjs.com/package/@jackwener/opencli)
> [](https://nodejs.org)
> [](./LICENSE)
> 
> A CLI tool that turns **any website** or **Electron app** into a command-line interface — Bilibili, Zhihu, 小红书, Twitter/X, Reddit, YouTube, Antigravity, and [many more](#built-in-commands) — powered by browser session reuse and AI-native discovery.
> 
> 🔥 **CLI All Electron Apps! The Most Powerful Update Has Arrived!** 🔥
> Turn ANY Electron application into a CLI tool! Recombine, script, and extend applications like Antigravity Ultra seamlessly. Now AI can control itself natively. Unlimited possibilities await!
> 
> ---
> 
> 
> ## Prerequisites
> 
> - **Node.js**: >= 20.0.0
> - **Chrome** running **and logged into the target site** (e.g. bilibili.com, zhihu.com, xiaohongshu.com).
> 
> > **⚠️ Important**: Browser commands reuse your Chrome login session. You must be logged into the target website in Chrome before running commands. If you get empty data or errors, check your login status first.
> 
> OpenCLI connects to your browser through a lightweight **Browser Bridge** Chrome Extension + micro-daemon (zero config, auto-start).
> 
> 
> ### Browser Bridge Extension Setup
> 
> 1. Install the **opencli Browser Bridge** extension in Chrome:
>    - Open `chrome://extensions`, enable **Developer mode** (top-right toggle)
>    - Click **Load unpacked**, select the `extension/` folder from this repo
> 2. That's it! The daemon auto-starts when you run any browser command. No tokens, no manual configuration.
> 
> > **Tip**: Use `opencli doctor` for ongoing diagnosis:
> > ```bash
> > opencli doctor            # Check extension + daemon connectivity
> > opencli doctor --live     # Also test live browser commands
> > ```
> 
> 
> ## Quick Start
> 
> 
> ### Install via npm (recommended)
> 
> ```bash
> npm install -g @jackwener/opencli
> ```
> 
> Then use directly:
> 
> ```bash
> opencli list                              # See all commands
> opencli list -f yaml                      # List commands as YAML
> opencli hackernews top --limit 5          # Public API, no browser
> opencli bilibili hot --limit 5            # Browser command
> opencli zhihu hot -f json                 # JSON output
> opencli zhihu hot -f yaml                 # YAML output
> ```
> 
> 
> ### Install from source (for developers)
> 
> ```bash
> git clone git@github.com:jackwener/opencli.git
> cd opencli 
> npm install
> npm run build
> npm link      # Link binary globally
> opencli list  # Now you can use it anywhere!
> ```
> 
> 
> ### Prerequisites
> 
> For video downloads from streaming platforms, you need to install `yt-dlp`:
> 
> ```bash
> 
> # Install yt-dlp
> pip install yt-dlp
> 
> # Quick start
> npm run build
> npx vitest run                              # All tests
> npx vitest run src/                          # Unit tests only
> npx vitest run tests/e2e/                    # E2E tests
> ```
> 
> 
> ### Usage Examples
> 
> ```bash
> 
> ## Highlights
> 
> - **CLI All Electron** — CLI-ify apps like Antigravity Ultra! Now AI can control itself natively using cc/openclaw!
> - **Account-safe** — Reuses Chrome's logged-in state; your credentials never leave the browser.
> - **AI Agent ready** — `explore` discovers APIs, `synthesize` generates adapters, `cascade` finds auth strategies.
> - **Self-healing setup** — `opencli setup` verifies Browser Bridge connectivity; `opencli doctor` diagnoses daemon, extension, and live browser connectivity.
> - **Dynamic Loader** — Simply drop `.ts` or `.yaml` adapters into the `clis/` folder for auto-registration.
> - **Dual-Engine Architecture** — Supports both YAML declarative data pipelines and robust browser runtime TypeScript injections.
> 
> 
> # 1. Deep Explore — discover APIs, infer capabilities, detect framework
> opencli explore https://example.com --site mysite
> 
> 
> ## Table of Contents
> 
> - [Highlights](#highlights)
> - [Prerequisites](#prerequisites)
> - [Quick Start](#quick-start)
> - [Built-in Commands](#built-in-commands)
>   - [Desktop App Adapters](#desktop-app-adapters)
> - [Download Support](#download-support)
> - [Output Formats](#output-formats)
> - [For AI Agents (Developer Guide)](#for-ai-agents-developer-guide)
> - [Remote Chrome (Server/Headless)](#remote-chrome-serverheadless)
> - [Testing](#testing)
> - [Troubleshooting](#troubleshooting)
> - [Releasing New Versions](#releasing-new-versions)
> - [License](#license)
> 
> ---
> 
> 
> ### Update
> 
> ```bash
> npm install -g @jackwener/opencli@latest
> ```
> 
> 
> ## Built-in Commands
> 
> Run `opencli list` for the live registry.
> 
> | Site | Commands | Mode |
> |------|----------|------|
> | **twitter** | `trending` `bookmarks` `profile` `search` `timeline` `thread` `following` `followers` `notifications` `post` `reply` `delete` `like` `article` `follow` `unfollow` `bookmark` `unbookmark` `download` `accept` `reply-dm` | 🔐 Browser |
> | **reddit** | `hot` `frontpage` `popular` `search` `subreddit` `read` `user` `user-posts` `user-comments` `upvote` `save` `comment` `subscribe` `saved` `upvoted` | 🔐 Browser |
> | **cursor** | `status` `send` `read` `new` `dump` `composer` `model` `extract-code` `ask` `screenshot` `history` `export` | 🖥️ Desktop |
> | **bilibili** | `hot` `search` `me` `favorite` `history` `feed` `subtitle` `dynamic` `ranking` `following` `user-videos` `download` | 🔐 Browser |
> | **codex** | `status` `send` `read` `new` `extract-diff` `model` `ask` `screenshot` `history` `export` | 🖥️ Desktop |
> | **chatwise** | `status` `new` `send` `read` `ask` `model` `history` `export` `screenshot` | 🖥️ Desktop |
> | **notion** | `status` `search` `read` `new` `write` `sidebar` `favorites` `export` | 🖥️ Desktop |
> | **discord-app** | `status` `send` `read` `channels` `servers` `search` `members` | 🖥️ Desktop |
> | **v2ex** | `hot` `latest` `topic` `daily` `me` `notifications` | 🌐 / 🔐 |
> | **xueqiu** | `feed` `hot-stock` `hot` `search` `stock` `watchlist` | 🔐 Browser |
> | **antigravity** | `status` `send` `read` `new` `dump` `extract-code` `model` `watch` | 🖥️ Desktop |
> | **chatgpt** | `status` `new` `send` `read` `ask` | 🖥️ Desktop |
> | **xiaohongshu** | `search` `notifications` `feed` `me` `user` `download` | 🔐 Browser |
> | **apple-podcasts** | `search` `episodes` `top` | 🌐 Public |
> | **xiaoyuzhou** | `podcast` `podcast-episodes` `episode` | 🌐 Public |
> | **zhihu** | `hot` `search` `question` `download` | 🔐 Browser |
> | **youtube** | `search` `video` `transcript` | 🔐 Browser |
> | **boss** | `search` `detail` | 🔐 Browser |
> | **coupang** | `search` `add-to-cart` | 🔐 Browser |
> | **bbc** | `news` | 🌐 Public |
> | **ctrip** | `search` | 🔐 Browser |
> | **github** | `search` | 🌐 Public |
> | **hackernews** | `top` | 🌐 Public |
> | **linkedin** | `search` | 🔐 Browser |
> | **reuters** | `search` | 🔐 Browser |
> | **smzdm** | `search` | 🔐 Browser |
> | **weibo** | `hot` | 🔐 Browser |
> | **yahoo-finance** | `quote` | 🔐 Browser |
> 
> 
> ### Desktop App Adapters
> 
> Each desktop adapter has its own detailed documentation with commands reference, setup guide, and examples:
> 
> | App | Description | Doc |
> |-----|-------------|-----|
> | **Cursor** | Control Cursor IDE — Composer, chat, code extraction | [README](./src/clis/cursor/README.md) |
> | **Codex** | Drive OpenAI Codex CLI agent headlessly | [README](./src/clis/codex/README.md) |
> | **Antigravity** | Control Antigravity Ultra from terminal | [README](./src/clis/antigravity/README.md) |
> | **ChatGPT** | Automate ChatGPT macOS desktop app | [README](./src/clis/chatgpt/README.md) |
> | **ChatWise** | Multi-LLM client (GPT-4, Claude, Gemini) | [README](./src/clis/chatwise/README.md) |
> | **Notion** | Search, read, write Notion pages | [README](./src/clis/notion/README.md) |
> | **Discord** | Discord Desktop — messages, channels, servers | [README](./src/clis/discord-app/README.md) |
> | **Feishu** | 飞书/Lark Desktop via AppleScript | [README](./src/clis/feishu/README.md) |
> | **WeChat** | 微信 Desktop via AppleScript + Accessibility | [README](./src/clis/wechat/README.md) |
> | **NeteaseMusic** | 网易云音乐 Desktop via CEF/CDP | [README](./src/clis/neteasemus

## 延伸閱讀

相關概念：[[自動化測試]] · [[CLI/TUI]] · [[API 設計]]

相關專案：[[jackwener--twitter-cli|jackwener/twitter-cli]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[Narcooo--inkos|Narcooo/inkos]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]]

[GitHub](https://github.com/jackwener/opencli)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "jackwener--opencli"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "jackwener--opencli"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "jackwener--opencli" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "jackwener--opencli"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","CLI/TUI","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "jackwener--opencli" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/jackwener--opencli");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "jackwener--opencli" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "jackwener" AND file.name != "jackwener--opencli"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/jackwener--opencli");
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
> const me = dv.page("Repos/jackwener--opencli");
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
> const me = dv.page("Repos/jackwener--opencli");
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
> const me = dv.page("Repos/jackwener--opencli");
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
> const me = dv.page("Repos/jackwener--opencli");
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

> **2026-03-19** — 首次收錄
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

- [[2026-03-21|2026-03-21]] — 再次上榜，3.1k stars
- [[2026-03-20|2026-03-20]] — 再次上榜，2.5k stars
- [[2026-03-19|2026-03-19]] — 首次收錄，1.9k stars
