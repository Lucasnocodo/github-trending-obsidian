---
repo: jackwener/opencli
url: https://github.com/jackwener/opencli
owner: jackwener
owner_type: User
language: TypeScript
license: Apache-2.0
description: "Make any website your CLI. A powerful, AI-native runtime for seamless browser automation and dynamic web data extraction."
homepage: ""
stars: 1858
stars_per_day: 465
forks: 172
open_issues: 20
created: 2026-03-14
pushed_at: 2026-03-18
first_seen: 2026-03-19
week: "2026-W12"
month: "2026-03"
category: "CLI 工具"
subcategory: "自動化"
release_tag: "v0.9.8"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-19
use_case: "將任何網站轉換為命令行介面，實現無縫的瀏覽器自動化和動態網頁數據提取。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-22"
contributor_count: 5
engagement: "low"
issue_close_rate: 44
repo_size_kb: 1684
readme_length: 9995
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-19"
star_history: "2026-03-19:1858"
tags:
  - github
  - "category/cli_工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "opencli"
  - "jackwener/opencli"
  - "將任何網站轉換為命令行介面，實現無縫的瀏覽器自動化和動態網頁數據提取。"
---

# opencli

**1.9k** stars · **465** stars/天 · 建立 4 天前 · TypeScript · Apache-2.0

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

`v0.9.8` `easy-install`

> [!summary] 一句話摘要
> 將任何網站轉換為命令行介面，實現無縫的瀏覽器自動化和動態網頁數據提取。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (465 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要從多個網站提取數據並希望簡化工作流程的開發者。
> **一句話重點** OpenCLI 不僅能將網站轉換為 CLI，還能利用 AI 驅動的功能自動化數據提取，這在開發者中具有很大的吸引力。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/jackwener--opencli");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "jackwener--opencli" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，能夠快速實現多網站數據提取，值得考慮。

> [!abstract] 核心創新
> OpenCLI 是首個將任何網站或 Electron 應用轉換為命令行介面的工具，並且支持 AI 驅動的自動化功能。

## 專案簡介

OpenCLI 是一個強大的命令行工具，能將任何網站或 Electron 應用程式轉換為 CLI，透過重用 Chrome 登入狀態來實現無縫的自動化和數據提取。使用者在安裝並設置 Playwright MCP Bridge 擴展後，可以透過簡單的命令如 `opencli list` 獲取所有可用命令，或使用 `opencli bilibili hot --limit 5` 直接從瀏覽器獲取 Bilibili 熱門內容。這種設計使得用戶無需擔心登錄信息的安全性，因為所有操作都在 Chrome 瀏覽器內部進行。技術上，OpenCLI 利用 TypeScript 和 Playwright 框架，支持 YAML 和 TypeScript 的雙引擎架構，讓用戶能夠靈活地擴展和自定義命令。

與其他 CLI 工具相比，如 jackwener/twitter-cli 和 jackwener/xiaohongshu-cli，OpenCLI 提供了更廣泛的網站支持和更強大的自動化功能，特別是在處理 Electron 應用時。使用者可以輕鬆下載媒體內容，並且支持多種輸出格式（如 JSON 和 YAML），這使得它在數據提取和自動化任務中非常靈活。對於需要從多個網站提取數據的開發者，OpenCLI 提供了一個統一的解決方案，減少了使用多個工具的複雜性。這個專案目前處於穩定階段，並且社群活躍，對於希望簡化網頁數據提取過程的開發者來說，這是一個值得考慮的選擇。

**技術棧**：`TypeScript` · `JavaScript` · `Playwright`

## 重點功能

- 網站 CLI 轉換 — 將任何網站或 Electron 應用轉換為 CLI，支持多種網站如 Bilibili、Twitter、Zhihu 等。
- 重用 Chrome 登入 — 透過重用 Chrome 登入狀態，確保用戶的帳戶安全，無需再次輸入憑證。
- 動態加載 — 只需將 `.ts` 或 `.yaml` 適配器放入 `clis/` 文件夾，即可自動註冊。
- AI 驅動的發現 — 使用 `explore` 命令自動發現 API，並生成適配器。
- 多種輸出格式 — 支持 JSON 和 YAML 格式輸出，方便用戶根據需求選擇。

## 快速開始

1. 安裝 OpenCLI
```bash
npm install -g @jackwener/opencli
```
2. 設置 Playwright MCP Token
```bash
opencli setup
```
3. 列出所有命令
```bash
opencli list
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 OpenCLI 並設置 Playwright MCP Token",
  "opencli bilibili hot --limit 5",
  "# 預期輸出：返回 Bilibili 熱門內容的列表"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 1858 stars（465/天），forks 172（9.3%），顯示出強勁的增長潛力。作者 jackwener 之前開發過多個 CLI 工具，這次的 OpenCLI 解決了用戶在多個網站上使用不同 CLI 工具的痛點，提供了一個統一的解決方案。近期的推文和社群討論也引發了關注，特別是對於自動化和數據提取的需求日益增加。這個工具的高 forks/stars 比率顯示出許多開發者正在積極修改和使用它，反映出其實用性和潛力。

## 適合誰使用

**目標受眾**：需要從多個網站提取數據並希望簡化工作流程的開發者。

> [!example] 使用場景
> - 數據科學家用它來從 Bilibili 自動提取熱門視頻數據，因為這樣可以節省手動查找和下載的時間，並且能夠快速獲得最新的數據。
> - 前端工程師用它來自動化測試 Twitter API，因為可以直接在 CLI 中執行命令，並獲得即時反饋，提升開發效率。
> - 內容創作者用它來批量下載小紅書的圖片和視頻，因為這樣能夠快速收集素材，並且支持多種格式輸出，方便後續使用。

## 架構分析

OpenCLI 採用雙引擎架構，支持 YAML 和 TypeScript 的命令定義，這使得用戶可以根據需求靈活選擇使用方式。它通過 Playwright MCP Bridge 擴展與 Chrome 瀏覽器進行連接，利用現有的 Chrome 登入狀態來執行命令，這樣的設計降低了用戶的安全風險。資料流方面，命令的執行過程中，OpenCLI 會自動發現可用的 API 並生成適配器，這樣用戶無需手動配置。選擇 Playwright 而非其他自動化工具的原因在於其強大的瀏覽器控制能力和對現代網站的良好支持。這種設計雖然增加了初始設置的複雜度，但卻為用戶提供了更高的靈活性和功能擴展性。

## 技術深入分析

OpenCLI 的核心技術機制在於其雙引擎架構，支持 YAML 和 TypeScript 的命令定義，這使得用戶可以靈活選擇使用方式。它利用 Playwright MCP Bridge 擴展與 Chrome 瀏覽器進行連接，這樣的設計不僅提高了安全性，還能夠充分利用 Chrome 的登入狀態來執行命令。效能方面，OpenCLI 可以快速處理多個網站的數據提取，特別是在使用 AI 驅動的發現功能時，能夠自動生成適配器，減少了手動配置的需求。選擇 TypeScript 作為開發語言的原因在於其靜態類型檢查能夠提高代碼的穩定性和可維護性。這種設計雖然增加了初始設置的複雜度，但卻為用戶提供了更高的靈活性和功能擴展性。技術風險方面，對於某些網站的支持可能會隨著網站的更新而變得不穩定，這需要持續的維護和更新。整合方面，OpenCLI 能夠與現有的開發工具鏈（如 CI/CD）良好整合，並且支持多種輸出格式，這使得它在開發過程中非常靈活。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含多個範例，安裝過程相對順暢，但需要注意 Playwright MCP Bridge 的設置。文件目前僅提供英文版本，對於非英語用戶可能會有一定的學習曲線。整體來說，花 30 分鐘應該能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 支持多種網站和 Electron 應用的 CLI 轉換，功能強大。
> - 重用 Chrome 登入狀態，確保安全性。
> - AI 驅動的發現和自動化功能，提升使用效率。

> [!danger] 缺點
> - 需要安裝 Chrome 瀏覽器和 Playwright MCP Bridge 擴展，初始設置較為繁瑣。
> - 僅支持 Node.js 20.0.0 以上版本，對於舊版用戶不友好。
> - 對於某些網站，可能需要額外的下載工具，增加了依賴性。

> [!warning] 注意事項
> - 需要 Chrome 瀏覽器並已登錄目標網站。
> - 僅支持 Node.js 20.0.0 以上版本。
> - 對於某些網站，可能需要額外的下載工具（如 yt-dlp）來支持媒體下載。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 專注於 Twitter 的 CLI 工具，功能較為單一，無法支持其他網站的自動化。 |
| [jackwener/xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) | 專注於小紅書的 CLI 工具，功能範圍較窄，無法實現多網站的整合。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 專注於 Twitter 的 CLI 工具，功能較為單一，無法支持其他網站的自動化。 | 如果你的需求僅限於 Twitter 的數據提取，這個工具會更簡單易用。 | low，因為功能較為單一，轉移成本低。 |
| [jackwener/xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) | 專注於小紅書的 CLI 工具，功能範圍較窄，無法實現多網站的整合。 | 如果你的主要需求是針對小紅書的數據提取，這個工具會更專注且簡單。 | low，因為功能較為專一，轉移成本低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **opencli** | **twitter-cli** | **xiaohongshu-cli** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 Twitter 的 CLI 工具，功能較為單一，無法支持其他網站的自動化。 | 專注於小紅書的 CLI 工具，功能範圍較窄，無法實現多網站的整合。 |
> | 遷移成本 | - | low，因為功能較為單一，轉移成本低。 | low，因為功能較為專一，轉移成本低。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於 Twitter 的數據提取，這個工具會更 | 如果你的主要需求是針對小紅書的數據提取，這個工具會更專注且簡 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目和小型團隊試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 某些網站的命令可能會因網站更新而失效
  - 解法：定期檢查官方文檔或社群更新以獲取最新支持的命令
- [MEDIUM] 初次設置 Playwright MCP Bridge 可能會遇到連接問題
  - 解法：確保 Chrome 瀏覽器已正確安裝並登錄目標網站
- [MEDIUM] 在某些環境下，可能需要額外的依賴工具（如 yt-dlp）
  - 解法：提前檢查所需的依賴並進行安裝

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要從多個網站提取數據的小型開發團隊 | 非常適合 | 提供了統一的 CLI 解決方案，減少了多工具的複雜性。 |
| 單一網站數據提取的個人開發者 | 普通 | 雖然功能強大，但對於單一網站的需求可能過於複雜。 |
| 需要自動化測試的前端工程師 | 適合 | 能夠快速執行命令並獲得即時反饋，提升開發效率。 |
| 大型企業的數據分析團隊 | 不適合 | 目前處於 beta 階段，可能不穩定，不建議用於核心業務。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，能夠快速實現多網站數據提取，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：工具本身不需要高權限，所有操作都在 Chrome 瀏覽器內部進行，敏感資料不會外洩。對於依賴的 Playwright MCP Bridge，需確保其安全性和更新。

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
| Forks | 172 |
| Open Issues | 20 |
| Issue 解決率 | 44% (16 closed) |
| 最後推送 | 2026-03-18 |
| 建立日期 | 2026-03-14 |
| Repo 大小 | 1.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jackwener/opencli) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `chalk` `cli-table3` `commander` `js-yaml` `@playwright/mcp` `@types/js-yaml` `@types/node` `tsx` `typescript` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 96
>     "JavaScript" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 189 |
> | [@ByteYue](https://github.com/ByteYue) | 4 |
> | [@himself65](https://github.com/himself65) | 3 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 3 |
> | [@Astro-Han](https://github.com/Astro-Han) | 2 |

**最新版本**：v0.9.8 (2026-03-18)

> [!info]- Release Notes
> ## What's Changed
> * feat: add grok.com site support by @foreverxdord in https://github.com/jackwener/opencli/pull/60
> * feat: Add download support for xhs, twi, bilibili, zhihu by @ByteYue in https://github.com/jackwener/opencli/pull/22
> * feat(xiaohongshu): add 4 creator analytics commands (creator-profile, creator-stats, creator-notes, creator-note-detail) by @stone16 in https://github.com/jackwener/opencli/pull/49
> * docs: add issue/PR templates and contributing guide by @ByteYue in https://github.com/jackwener/opencli/pull/63
> * ci: add Dependabot, security audit, release-please, and CI optimization by @ByteYue in https://github.com/jackwener/opencli/pull/64
> * chore(ci): bump actions/checkout from 4 to 6 by @dependabot[bot] in https://github.com/jackwener/opencli/pull/66
> * chore(ci): bump actions/setup-node from 4 to 6 by @dependabot[bot] in https://github.com/jackwener/opencli/pull/65
> * chore(deps): bump commander from 13.1.0 to 14.0.3 by @dependabot[bot] in https://github.com/jackwener/opencli/pull/67
> * fix(xiaohongshu): restore user profile note fetching by @washanhanzi in https://github.com/jackwener/opencli/pull/69
> * fix(browser): avoid selecting non-server playwright cli paths by @Waioot in https://github.com/jackwener/opencli/pull/74
> * fix(main): navigate to domain before cookie/header strategy commands in CDP mode by @backtime1993 in https://github.com/jackwener/opencli/pull/71
> 
> ## New Contributors
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，最近有多次提交和更新。
**連結**：[文件](https://github.com/jackwener/opencli#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-18 ~ 2026-03-18）
> **活躍天數** 1 天 · **最新 commit** 0.9.8

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#37](https://github.com/jackwener/opencli/issues/37) | Proposal: 将引入新网站的流程插件化 | 4 | 1 |
> | [#2](https://github.com/jackwener/opencli/issues/2) | OpenCLI 是否定位为统一替代各独立 CLI 项目？(twitter-cli, xiaohongshu-cli, b | 3 | 2 |
> | [#59](https://github.com/jackwener/opencli/issues/59) | Feature Request: 轨迹模拟（Human-like Interaction Patterns）防止封号 `enhancement` | 2 | 0 |
> | [#76](https://github.com/jackwener/opencli/issues/76) | [Bug]: unavoidable light-to-dark UI flickers `bug` | 0 | 0 |

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
> OpenCLI connects to your browser through the Playwright MCP Bridge extension.
> It prefers an existing local/global `@playwright/mcp` install and falls back to `npx -y @playwright/mcp@latest` automatically when no local MCP server is found.
> 
> 
> ### Playwright MCP Bridge Extension Setup
> 
> 1. Install **[Playwright MCP Bridge](https://chromewebstore.google.com/detail/playwright-mcp-bridge/mmlmfjhmonkocbjadbfplnigmagldckm)** extension in Chrome.
> 2. Run `opencli setup` — discovers the token, distributes it to your tools, and verifies connectivity:
> 
> ```bash
> opencli setup
> ```
> 
> The interactive TUI will:
> - 🔍 Auto-discover `PLAYWRIGHT_MCP_EXTENSION_TOKEN` from Chrome (no manual copy needed)
> - ☑️ Show all detected tools (Codex, Cursor, Claude Code, Gemini CLI, etc.)
> - ✏️ Update only the files you select (Space to toggle, Enter to confirm)
> - 🔌 Auto-verify browser connectivity after writing configs
> 
> > **Tip**: Use `opencli doctor` for ongoing diagnosis and maintenance:
> > ```bash
> > opencli doctor            # Read-only token & config diagnosis
> > opencli doctor --live     # Also test live browser connectivity
> > opencli doctor --fix      # Fix mismatched configs (interactive)
> > opencli doctor --fix -y   # Fix all configs non-interactively
> > ```
> 
> **Alternative: CDP Mode (For Servers/Headless)**
> If you cannot install the browser extension (e.g. running OpenCLI on a remote headless server), you can connect OpenCLI to your local Chrome via CDP using SSH tunnels or reverse proxies. See the [CDP Connection Guide](./CDP.md) for detailed instructions.
> 
> Manual setup (alternative)
> 
> Add token to your MCP client config (e.g. Claude/Cursor):
> 
> ```json
> {
>   "mcpServers": {
>     "playwright": {
>       "command": "npx",
>       "args": ["-y", "@playwright/mcp@latest", "--extension"],
>       "env": {
>         "PLAYWRIGHT_MCP_EXTENSION_TOKEN": ""
>       }
>     }
>   }
> }
> ```
> 
> Export in shell (e.g. `~/.zshrc`):
> 
> ```bash
> export PLAYWRIGHT_MCP_EXTENSION_TOKEN=""
> ```
> 
> 
> ## Quick Start
> 
> 
> ### Install via npm (recommended)
> 
> ```bash
> npm install -g @jackwener/opencli
> opencli setup   # One-time: configure Playwright MCP token
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
> - **Self-healing setup** — `opencli setup` auto-discovers tokens; `opencli doctor` diagnoses config across 10+ tools; `--fix` repairs them all.
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
> | **twitter** | `trending` `bookmarks` `profile` `search` `timeline` `thread` `following` `followers` `notifications` `post` `reply` `delete` `like` `article` `follow` `unfollow` `bookmark` `unbookmark` `download` | 🔐 Browser |
> | **reddit** | `hot` `frontpage` `popular` `search` `subreddit` `read` `user` `user-posts` `user-comments` `upvote` `save` `comment` `subscribe` `saved` `upvoted` | 🔐 Browser |
> | **cursor** | `status` `send` `read` `new` `dump` `composer` `model` `extract-code` `ask` `screenshot` `history` `export` | 🖥️ Desktop |
> | **bilibili** | `hot` `search` `me` `favorite` `history` `feed` `subtitle` `dynamic` `ranking` `following` `user-videos` `download` | 🔐 Browser |
> | **codex** | `status` `send` `read` `new` `extract-diff` `model` `ask` `screenshot` `history` `export` | 🖥️ Desktop |
> | **chatwise** | `status` `new` `send` `read` `ask` `model` `history` `export` `screenshot` | 🖥️ Desktop |
> | **notion** | `status` `search` `read` `new` `write` `sidebar` `favorites` `export` | 🖥️ Desktop |
> | **discord-app** | `status` `send` `read` `channels` `servers` `search` `members` | 🖥️ Desktop |
> | **v2ex** | `hot` `latest` `topic` `daily` `me` `notifications` | 🌐 / 🔐 |
> | **xueqiu** | `feed` `hot-stock` `hot` `search` `stock` `watchlist` | 🔐 Browser |
> | **antigravity** | `status` `send` `read` `new` `evaluate` | 🖥️ Desktop |
> | **chatgpt** | `status` `new` `send` `read` `ask` | 🖥️ Desktop |
> | **xiaohongshu** | `search` `notifications` `feed` `me` `user` `download` | 🔐 Browser |
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
> ## Download Support
> 
> OpenCLI s

## 延伸閱讀

相關概念：[[自動化]] · [[CLI/TUI]] · [[資料提取]]

相關專案：[[jackwener--twitter-cli|jackwener/twitter-cli]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[Narcooo--inkos|Narcooo/inkos]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]]

[GitHub](https://github.com/jackwener/opencli)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "jackwener--opencli"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "jackwener--opencli"
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
> const concepts = ["自動化","CLI/TUI","資料提取"];
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

- [[2026-03-19|2026-03-19]] — 首次收錄，1.9k stars
