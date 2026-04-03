---
repo: emdash-cms/emdash
url: https://github.com/emdash-cms/emdash
owner: emdash-cms
owner_type: Organization
language: TypeScript
license: MIT
description: "EmDash is a full-stack TypeScript CMS based on Astro; the spiritual successor to WordPress"
homepage: "https://emdashcms.com"
stars: 4366
stars_per_day: 4366
forks: 277
open_issues: 92
created: 2026-04-01
pushed_at: 2026-04-03
first_seen: 2026-04-03
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "CMS"
release_tag: "emdash@0.1.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-03
use_case: "提供一個全新的 TypeScript CMS，重構 WordPress 的擴展性和安全性。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-06"
contributor_count: 5
engagement: "low"
issue_close_rate: 9
repo_size_kb: 10075
readme_length: 7888
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-03"
star_history: "2026-04-03:4343,2026-04-03:4366"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - "topic/astro"
  - "topic/cms"
  - "topic/emdash"
  - "topic/typescript"
aliases:
  - "emdash"
  - "emdash-cms/emdash"
  - "提供一個全新的 TypeScript CMS，重構 WordPress 的擴展性和安全性。"
---

# emdash

**4.4k** stars · **4.4k** stars/天 · 建立 1 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/emdash-cms--emdash");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `emdash@0.1.0`

`astro` `cms` `emdash` `typescript`

> [!summary] 一句話摘要
> 提供一個全新的 TypeScript CMS，重構 WordPress 的擴展性和安全性。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (4.4k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要一個安全、可擴展的 CMS 解決方案的全端開發者和團隊。
> **一句話重點** EmDash 透過現代化的架構和安全性設計，為需要高擴展性和安全性的 CMS 提供了一個全新的選擇。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/emdash-cms--emdash");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CMS" && p.file.name !== "emdash-cms--emdash" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 CMS 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到一個安全且現代化的 CMS，值得考慮。

> [!abstract] 核心創新
> EmDash 以現代化的方式重構了 WordPress 的核心概念，提供安全的沙盒插件系統和結構化內容存儲。

## 專案簡介

EmDash 是一個基於 Astro 的全棧 TypeScript CMS，旨在重構 WordPress 的核心概念，如擴展性和管理用戶體驗。它通過使用 Cloudflare 的 Dynamic Workers 來運行沙盒插件，解決了 WordPress 插件架構的安全問題。用戶可以透過簡單的 CLI 指令 `npm create emdash@latest` 快速啟動專案，並選擇不同的模板，如博客、行銷頁面和作品集。EmDash 使用 Portable Text 格式來存儲內容，這樣可以將內容與呈現分離，並支持多種輸出格式，無需解析 HTML。

這個系統的設計使得非開發者也能通過管理界面輕鬆創建和修改內容類型，並且開發者可以透過 `npx emdash types` 生成 TypeScript 類型。相較於傳統的 WordPress，EmDash 不再依賴 PHP 和獨立的主機層，並且支持多種資料庫和存儲解決方案，如 SQLite 和 AWS S3。它的插件系統允許開發者定義插件的能力，並且這些插件在沙盒環境中運行，降低了安全風險。整體而言，EmDash 是針對現代需求設計的 CMS，適合需要高安全性和擴展性的開發者和團隊。

**技術棧**：`Astro` · `TypeScript` · `Cloudflare Workers` · `SQLite`

## 重點功能

- 沙盒插件系統 — 使用 Cloudflare 的 Dynamic Workers 來運行插件，確保安全性。
- Portable Text 格式 — 使用結構化 JSON 存儲內容，支持多種輸出格式。
- 多種模板 — 提供博客、行銷和作品集等多種啟動模板，快速搭建網站。
- CLI 工具 — 使用 `npm create emdash@latest` 快速啟動專案，並支持內容管理。
- 完整的管理面板 — 提供可視化的內容和結構管理，無需編碼。

## 快速開始

1. 安裝 EmDash
```bash
npm create emdash@latest
```
2. 啟動本地開發伺服器
```bash
pnpm --filter emdash-demo dev
```
3. 訪問管理界面
```bash
http://localhost:4321/_emdash/admin
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Node.js 和 pnpm。",
  "指令": "import emdash from 'emdash/astro';\n\nexport default defineConfig({\n  integrations: [emdash({ database: d1() })],\n});",
  "預期輸出": "這段程式碼將 EmDash 整合到 Astro 配置中，並設置資料庫連接。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 4366 stars（4366/天），forks 277（6.3%），這顯示出強烈的興趣和潛在的使用者基礎。作者 Matt Kane 之前在開源社區活躍，這次推出的 EmDash 解決了 WordPress 在安全性和擴展性上的痛點，特別是針對插件的安全性問題。近期的推廣和社群討論可能也促進了這個專案的曝光和使用。由於 Cloudflare 的技術支持，這個工具的可行性和性能得到了保證，吸引了許多開發者的注意。forks/stars 比率顯示出社群對這個專案的實際修改和使用意圖，這是相對健康的指標。

## 適合誰使用

**目標受眾**：需要一個安全、可擴展的 CMS 解決方案的全端開發者和團隊。

> [!example] 使用場景
> - 前端開發者用它來快速搭建一個博客網站，因為它提供了多種模板和簡單的 CLI 指令，能夠在幾分鐘內完成部署。
> - 內容管理員用它來管理網站內容，因為它的管理界面友好且支持多種內容類型，無需編碼知識。
> - 全端工程師用它來開發一個行銷網站，因為它的插件系統可以輕鬆擴展功能，並且支持多種資料庫選擇。

## 架構分析

EmDash 採用單體架構，整合了 Astro 作為前端框架，並使用 Cloudflare 的 Dynamic Workers 來處理插件的執行。這種設計使得系統能夠在不同的環境中運行，無論是 Cloudflare 還是本地 Node.js 伺服器。資料流方面，內容通過 Portable Text 格式進行存儲，並在管理界面中以可視化方式呈現。這種設計的代價在於需要依賴 Cloudflare 的服務，對於不願意使用雲端服務的開發者來說，可能會造成不便。擴展性方面，使用 SQLite 或其他資料庫的選擇使得系統能夠靈活應對不同規模的應用需求。

## 技術深入分析

EmDash 的核心技術機制基於 Astro 和 Cloudflare 的 Dynamic Workers，這使得插件能夠在沙盒環境中運行，降低了安全風險。它使用 Portable Text 格式來存儲內容，這樣可以讓內容與呈現解耦，並支持多種輸出格式。效能方面，EmDash 能夠在 Cloudflare 環境中高效運行，但在本地 Node.js 環境中可能會受到資料庫性能的影響。選擇 TypeScript 作為主要語言，提供了靜態類型檢查的優勢，減少了潛在的錯誤。依賴樹的複雜度相對較低，主要依賴於 Astro 和 Cloudflare 的生態系統。技術風險方面，對於大型應用來說，資料庫的選擇可能會成為性能瓶頸，特別是在高流量的情況下。整合方面，與主流框架如 React 和 Vue 的整合相對簡單，並且支持 CI/CD 流程的友好度較高。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例。安裝過程順暢，但需要注意 Cloudflare 的付費要求。文件中有良好的入門指南，並且有多語言支持的需求。

## 優缺點分析

> [!success] 優點
> - 安全性高 — 沙盒插件系統降低了安全風險。
> - 易於使用 — 提供友好的管理界面和多種模板。
> - 現代化架構 — 使用 TypeScript 和 Astro，適合當前開發趨勢。

> [!danger] 缺點
> - 依賴 Cloudflare — 需要付費帳戶才能使用完整功能。
> - 仍在 beta 階段 — 可能存在不穩定性和潛在的 bug。
> - 對於大型網站的性能可能受限於資料庫選擇。

> [!warning] 注意事項
> - 需要付費 Cloudflare 帳戶以使用 Dynamic Workers。
> - 目前仍在 beta 階段，可能存在不穩定性。
> - 對於大型網站，性能可能會受到資料庫和存儲選擇的影響。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的內容管理功能，但不支持沙盒插件，安全性較低。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於安全性和擴展性，但不如 EmDash 提供多樣的模板和管理界面。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| WordPress | 使用 PHP 和 MySQL，傳統的 CMS 架構，較為成熟但安全性較低。 | 如果你的團隊已經熟悉 PHP 並且需要一個成熟的生態系統。 | medium — 需要將內容從 WordPress 轉移到 EmDash，可能需要進行格式轉換。 |
| Ghost | 基於 Node.js 的現代化 CMS，專注於內容創作和簡單性。 | 如果你需要一個簡單易用的內容管理系統，並且不需要複雜的擴展功能。 | low — 內容轉移相對容易，因為都是基於 JSON 格式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **emdash** | **WordPress** | **Ghost** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 PHP 和 MySQL，傳統的 CMS 架構，較為成熟但安全性較低。 | 基於 Node.js 的現代化 CMS，專注於內容創作和簡單性。 |
> | 遷移成本 | - | medium — 需要將內容從 WordPress 轉移到 EmDash，可能需要進行格式轉換。 | low — 內容轉移相對容易，因為都是基於 JSON 格式。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經熟悉 PHP 並且需要一個成熟的生態系統。 | 如果你需要一個簡單易用的內容管理系統，並且不需要複雜的擴展功 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合開發者進行試用和評估，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 需要付費 Cloudflare 帳戶才能使用完整功能，免費帳戶無法運行沙盒插件。
  - 解法：可以考慮使用本地 Node.js 環境進行開發。
- [MEDIUM] 在高流量情況下，資料庫性能可能成為瓶頸。
  - 解法：選擇適合的資料庫方案，如 D1 或 PostgreSQL。
- [MEDIUM] 目前仍在 beta 階段，可能會遇到不穩定性和 bug。
  - 解法：定期檢查更新和社群討論以獲取最新資訊。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的網站 | 非常適合 | 提供了簡單的部署和管理界面，適合快速上手。 |
| 大型企業的內容管理系統 | 普通 | 雖然功能強大，但目前仍在 beta 階段，可能不夠穩定。 |
| 需要高安全性的應用 | 非常適合 | 沙盒插件系統提供了更高的安全性，適合處理敏感資料。 |
| 對 PHP 有依賴的舊系統 | 不適合 | EmDash 不支持 PHP，遷移成本較高。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到一個安全且現代化的 CMS，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要 Cloudflare 的帳戶，並且沙盒插件的安全性設計降低了潛在的攻擊面。整體來說，適合在 CI/CD 流程中使用，但仍需注意外部依賴的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/emdash-cms--emdash");
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
> const me = dv.page("Repos/emdash-cms--emdash");
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
| Forks | 277 |
| Open Issues | 92 |
| Issue 解決率 | 9% (9 closed) |
| 最後推送 | 2026-04-03 |
| 建立日期 | 2026-04-01 |
| 官方網站 | [Link](https://emdashcms.com) |
| Repo 大小 | 9.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/emdash-cms/emdash) |
| Topics | `astro` `cms` `emdash` `typescript` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@axe-core/playwright` `@changesets/changelog-github` `@changesets/cli` `@e18e/eslint-plugin` `@playwright/test` `@types/node` `@typescript/native-preview` `emdash` `knip` `oxfmt` `oxlint` `oxlint-tsgolint` `prettier` `prettier-plugin-astro` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 93
>     "Astro" : 7
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ascorbic](https://github.com/ascorbic) | 59 |
> | [@MattieTK](https://github.com/MattieTK) | 6 |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 4 |
> | [@yanthomasdev](https://github.com/yanthomasdev) | 2 |
> | [@z3cka](https://github.com/z3cka) | 1 |

**最新版本**：emdash@0.1.0 (2026-04-01)

> [!info]- Release Notes
> ### Minor Changes
> 
> -   [#14](https://github.com/emdash-cms/emdash/pull/14) [`755b501`](https://github.com/emdash-cms/emdash/commit/755b5017906811f97f78f4c0b5a0b62e67b52ec4) Thanks [@ascorbic](https://github.com/ascorbic)! - First beta release
> 
> ### Patch Changes
> 
> -   Updated dependencies \[[`755b501`](https://github.com/emdash-cms/emdash/commit/755b5017906811f97f78f4c0b5a0b62e67b52ec4)]:
>     -   @emdash-cms/admin@0.1.0
>     -   @emdash-cms/auth@0.1.0
>     -   @emdash-cms/gutenberg-to-portable-text@0.1.0

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者對於功能和插件的貢獻持續增加。
**連結**：[文件](https://github.com/emdash-cms/emdash/tree/main/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-02 ~ 2026-04-02）
> **活躍天數** 1 天 · **最新 commit** renames the Why EmDash content page to match the slug used in the astro config (#123)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#21](https://github.com/emdash-cms/emdash/issues/21) | Remove passkey requirement | 17 | 8 |
> | [#95](https://github.com/emdash-cms/emdash/issues/95) | Add docs: how to deploy via Docker | 6 | 1 |
> | [#131](https://github.com/emdash-cms/emdash/issues/131) | 🔥 D1 Row Reads Exploding: Full Table Scans on Admin Panel C | 5 | 0 |
> | [#85](https://github.com/emdash-cms/emdash/issues/85) | Make it easy to have sandboxed plugins for self-hosting | 5 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # EmDash
> 
> A full-stack TypeScript CMS built on [Astro](https://astro.build/) and [Cloudflare](https://www.cloudflare.com/). EmDash takes the ideas that made WordPress dominant -- extensibility, admin UX, a plugin ecosystem -- and rebuilds them on serverless, type-safe foundations. Plugins run in sandboxed Worker isolates, solving the fundamental security problem with WordPress's plugin architecture.
> 
> ## Get Started
> 
> > [!IMPORTANT]
> > EmDash depends on Dynamic Workers to run secure sandboxed plugins. Dynamic Workers are currently only available on paid accounts. [Upgrade your account](https://www.cloudflare.com/plans/developer-platform/) (starting at $5/mo) or comment out the `worker_loaders` block of your `wrangler.jsonc` configuration file to disable plugins.
> 
> ```bash
> npm create emdash@latest
> ```
> 
> Or deploy directly to your Cloudflare account:
> 
> [](https://deploy.workers.cloudflare.com/?url=https://github.com/emdash-cms/templates/tree/main/blog-cloudflare)
> 
> EmDash runs on Cloudflare (D1 + R2 + Workers) or any Node.js server with SQLite. No PHP, no separate hosting tier -- just deploy your Astro site.
> 
> ## Templates
> 
> EmDash ships with three starter templates:
> 
> ### Blog
> 
> A classic blog with sidebar widgets, search, and RSS.
> 
> - Categories & tags
> - Full-text search
> - RSS feed
> - Comment-ready
> - Dark/light mode
> 
> ### Marketing
> 
> A conversion-focused landing page with pricing and contact form.
> 
> - Hero with CTAs
> - Feature grid
> - Pricing cards
> - FAQ accordion
> - Contact form
> 
> ### Portfolio
> 
> A visual portfolio for showcasing creative work.
> 
> - Project grid
> - Tag filtering
> - Case study pages
> - RSS feed
> - Dark/light mode
> 
> ## Why EmDash?
> 
> **WordPress was built for a different era.** Running WordPress today means managing PHP alongside JavaScript, layering caches to get acceptable performance, and knowing that [96% of WordPress security vulnerabilities come from plugins](https://patchstack.com/whitepaper/state-of-wordpress-security-in-2024/). EmDash is what WordPress would look like if you started from scratch with today's tools.
> 
> **Sandboxed plugins.** WordPress plugins have full access to the database, filesystem, and user data. A single vulnerable plugin can compromise the entire site. EmDash plugins run in isolated [Worker sandboxes](https://developers.cloudflare.com/workers/runtime-apis/bindings/worker-loader/) via Dynamic Worker Loaders, each with a declared capability manifest. A plugin that requests `read:content` and `email:send` can do exactly that and nothing else.
> 
> ```typescript
> export default () =>
> 	definePlugin({
> 		id: "notify-on-publish",
> 		capabilities: ["read:content", "email:send"],
> 		hooks: {
> 			"content:afterSave": async (event, ctx) => {
> 				if (event.content.status !== "published") return;
> 				await ctx.email.send({
> 					to: "editors@example.com",
> 					subject: `New post: ${event.content.title}`,
> 				});
> 			},
> 		},
> 	});
> ```
> 
> **Structured content, not serialized HTML.** WordPress stores rich text as HTML with metadata embedded in comments -- tying your content to its DOM representation. EmDash uses [Portable Text](https://www.portabletext.org/), a structured JSON format that decouples content from presentation. Your content can render as a web page, a mobile app, an email, or an API response without parsing HTML.
> 
> **Built for agents.** EmDash ships with agent skills for building plugins and themes, a CLI that lets agents manage content and schema programmatically, and a built-in [MCP server](https://modelcontextprotocol.io/) so AI tools like Claude and ChatGPT can interact with your site directly.
> 
> **Runs anywhere.** EmDash uses portable abstractions at every layer -- Kysely for SQL, S3 API for storage -- that work with SQLite, D1, Turso, PostgreSQL, R2, AWS S3, or local files. It runs best on Cloudflare, but it's not locked to it.
> 
> ## How It Works
> 
> EmDash is an Astro integration. Add it to your config and you get a complete CMS: admin panel, REST API, authentication, media library, and plugin system.
> 
> ```typescript
> // astro.config.mjs
> import emdash from "emdash/astro";
> import { d1 } from "emdash/db";
> 
> export default defineConfig({
> 	integrations: [emdash({ database: d1() })],
> });
> ```
> 
> Content types are defined in the database, not in code. Non-developers create and modify collections through the admin UI. Each collection gets a real SQL table with typed columns. Developers generate TypeScript types from the live schema:
> 
> ```bash
> npx emdash types
> ```
> 
> Query content using Astro's Live Collections -- no rebuilds, no separate API:
> 
> ```astro
> ---
> import { getEmDashCollection } from "emdash";
> const { entries: posts } = await getEmDashCollection("posts");
> ---
> 
> {posts.map((post) => {post.data.title})}
> ```
> 
> ## Features
> 
> **Content** -- Blog posts, pages, custom content types. Rich text editing via TipTap with Portable Text storage. Revisions, drafts, scheduled publishing, full-text search (FTS5), inline visual editing.
> 
> **Admin** -- Full admin panel with visual schema builder, media library (drag-drop uploads via signed URLs), navigation menus, taxonomies, widgets, and a WordPress import wizard.
> 
> **Auth** -- Passkey-first (WebAuthn) with OAuth and magic link fallbacks. Role-based access control: Administrator, Editor, Author, Contributor.
> 
> **Plugins** -- `definePlugin()` API with lifecycle hooks, KV storage, settings, admin pages, dashboard widgets, custom block types, and API routes. Sandboxed execution on Cloudflare via Dynamic Worker Loaders.
> 
> **Agents** -- Skill files for AI-assisted plugin and theme development. CLI for programmatic site management. Built-in MCP server for direct AI tool integration.
> 
> **WordPress migration** -- Import posts, pages, media, and taxonomies from WXR exports, the WordPress REST API, or WordPress.com. Agent skills help port plugins and themes.
> 
> ## Portable Platforms
> 
> | Layer    | Cloudflare                  | Also works with                                     |
> | -------- | --------------------------- | --------------------------------------------------- |
> | Database | D1                          | SQLite, Turso/libSQL, PostgreSQL                    |
> | Storage  | R2                          | AWS S3, any S3-compatible service, local filesystem |
> | Sessions | KV                          | Redis, file-based                                   |
> | Plugins  | Worker isolates (sandboxed) | In-process (safe mode)                              |
> 
> ## Status
> 
> EmDash is in **beta preview**. We welcome contributions, feedback, plugins, themes, and ideas.
> 
> ```bash
> npm create emdash@latest
> ```
> 
> See the [documentation](https://github.com/emdash-cms/emdash/tree/main/docs) for guides, API reference, and plugin development.
> 
> ## Development
> 
> This is a pnpm monorepo. To contribute:
> 
> ```bash
> git clone https://github.com/emdash-cms/emdash.git && cd emdash
> pnpm install
> pnpm build
> ```
> 
> Run the demo (Node.js + SQLite, no Cloudflare account needed):
> 
> ```bash
> pnpm --filter emdash-demo seed
> pnpm --filter emdash-demo dev
> ```
> 
> Open the admin at [http://localhost:4321/\_emdash/admin](http://localhost:4321/_emdash/admin).
> 
> ```bash
> pnpm test          # run all tests
> pnpm typecheck     # type check
> pnpm lint:quick    # fast lint (< 1s)
> pnpm format        # format with oxfmt
> ```
> 
> See [CONTRIBUTING.md](CONTRIBUTING.md) for the full contributor guide.
> 
> ## Repository Structure
> 
> ```
> packages/
>   core/           Astro integration, APIs, admin UI, CLI
>   auth/           Authentication library
>   blocks/         Portable Text block definitions
>   cloudflare/     Cloudflare adapter (D1, R2, Worker Loader)
>   plugins/        First-party plugins (forms, embeds, SEO, audit-log, etc.)
>   create-emdash/  npm create emdash scaffolding
>   gutenberg-to-portable-text/  WordPress block converter
> 
> templates/        Starter templates (blog, marketing, portfolio, starter, blank)
> demos/            Development and example sites
> docs/             Documentation site (Starlight)
> ```

## 延伸閱讀

相關概念：[[MCP Protocol]] · [[CLI/TUI]] · [[自動化測試]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

[GitHub](https://github.com/emdash-cms/emdash) · [官方網站](https://emdashcms.com)

## 相關收錄

> [!note]- 直接競品（同子分類：CMS）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CMS" AND file.name != "emdash-cms--emdash"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "emdash-cms--emdash"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "emdash-cms--emdash" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "emdash-cms--emdash"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["MCP Protocol","CLI/TUI","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "emdash-cms--emdash" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/emdash-cms--emdash");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "emdash-cms--emdash" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "emdash-cms" AND file.name != "emdash-cms--emdash"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/emdash-cms--emdash");
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
> const me = dv.page("Repos/emdash-cms--emdash");
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
> const me = dv.page("Repos/emdash-cms--emdash");
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
> const me = dv.page("Repos/emdash-cms--emdash");
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
> const me = dv.page("Repos/emdash-cms--emdash");
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

> **2026-04-03** — 首次收錄
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

- [[2026-04-03|2026-04-03]] — 首次收錄，4.3k stars
