---
repo: jackwener/opencli
url: https://github.com/jackwener/opencli
owner: jackwener
owner_type: User
language: TypeScript
license: Apache-2.0
description: "Make any website your CLI. A powerful, AI-native runtime for seamless browser automation and dynamic web data extraction."
homepage: ""
stars: 1885
stars_per_day: 471
forks: 174
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
use_case: "將任何網站或 Electron 應用程式轉換為命令行介面，實現無縫的瀏覽器自動化和動態網頁數據提取。"
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
star_history: "2026-03-19:1858,2026-03-19:1885"
tags:
  - github
  - "category/cli_工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "opencli"
  - "jackwener/opencli"
  - "將任何網站或 Electron 應用程式轉換為命令行介面，實現無縫的瀏覽器自動化和動態網頁數據提取。"
---

# opencli

**1.9k** stars · **471** stars/天 · 建立 4 天前 · TypeScript · Apache-2.0

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
> 將任何網站或 Electron 應用程式轉換為命令行介面，實現無縫的瀏覽器自動化和動態網頁數據提取。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (471 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要從多個網站自動提取數據的開發者，特別是那些熟悉命令行操作的。
> **一句話重點** OpenCLI 的強大之處在於它將多個網站的數據提取整合到一個統一的命令行介面，極大地簡化了開發者的工作流程。

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
> **結論** 花 3 小時學習，2 小時整合，得到快速的數據提取能力，值得投資。

> [!abstract] 核心創新
> 將任何網站或 Electron 應用程式轉換為命令行介面，實現無縫的瀏覽器自動化。

## 專案簡介

OpenCLI 是一個命令行工具，能將任何網站或 Electron 應用程式轉換為 CLI，通過重用 Chrome 登入狀態和 AI 驅動的發現來實現。用戶首先需要安裝 Playwright MCP Bridge 擴展，然後通過 `opencli setup` 指令來配置連接。這樣就能使用各種命令，如 `opencli bilibili hot --limit 5` 來提取特定網站的熱門內容，並支持多種輸出格式（如 JSON、YAML）。這個工具的賣點在於其強大的自動化能力，能夠無縫地與多個網站進行互動，並且支持下載媒體內容。技術上，OpenCLI 使用 TypeScript 和 Playwright，這使得它能夠高效地處理瀏覽器自動化任務。

與其他 CLI 工具相比，如 jackwener/twitter-cli 和 jackwener/xiaohongshu-cli，OpenCLI 的優勢在於它的通用性，能夠將多個網站整合到一個統一的介面中，並且無需額外的認證步驟。使用者可能會遇到的問題包括需要確保 Chrome 已登錄目標網站，否則會導致數據提取失敗。這個專案目前處於 beta 階段，適合需要快速開發和測試自動化腳本的開發者。未來六個月內，預計會增加更多網站支持和功能擴展。建議對於需要從多個網站提取數據的開發者使用，但如果只需針對單一網站的簡單操作，則可能會覺得這個工具過於複雜。

**技術棧**：`TypeScript` · `JavaScript` · `Playwright`

## 重點功能

- 多網站支持 — 支持從 Bilibili、Zhihu、Twitter 等多個網站提取數據。
- 重用 Chrome 登入狀態 — 自動使用已登入的 Chrome 瀏覽器，無需再次認證。
- 多種輸出格式 — 支持 JSON、YAML 等多種格式的數據輸出。
- AI 驅動的命令發現 — 使用 `opencli explore` 命令自動發現網站 API。
- 自動化下載 — 支持從各大平台下載媒體內容，如視頻和圖片。

## 快速開始

1. 全局安裝 OpenCLI
```bash
npm install -g @jackwener/opencli
```
2. 配置 Playwright MCP 令牌
```bash
opencli setup
```
3. 列出所有可用命令
```bash
opencli list
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 OpenCLI 並配置好 MCP 令牌",
  "opencli bilibili hot --limit 5",
  "# 預期輸出：返回 Bilibili 熱門視頻的數據"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 1885 stars（471/天），forks 174（9.2%），這顯示出強烈的社群興趣。作者 jackwener 之前開發過多個 CLI 工具，這次的 OpenCLI 解決了傳統 CLI 工具無法整合多個網站的痛點。這個工具的出現，正好滿足了開發者對於簡化網頁數據提取的需求，並且提供了一個統一的操作介面。社群的反饋和需求驅動了這個專案的快速增長。

## 適合誰使用

**目標受眾**：需要從多個網站自動提取數據的開發者，特別是那些熟悉命令行操作的。

> [!example] 使用場景
> - 後端工程師用它來從 Bilibili 提取熱門視頻數據，因為傳統 API 需要繁瑣的認證流程，而 OpenCLI 直接重用 Chrome 登入狀態。
> - 數據分析師用它來自動下載 Zhihu 文章並轉換為 Markdown 格式，因為這樣可以節省手動複製和格式化的時間。
> - 開發者用它來測試各種網站的 API，因為它支持動態發現和生成適配器，能快速適應不同的網站結構。

## 架構分析

OpenCLI 的架構基於 TypeScript 和 Playwright，這使得它能夠高效地與瀏覽器進行互動。它通過 MCP Bridge 擴展與 Chrome 進行連接，並重用用戶的登入狀態，這樣可以避免重複認證的麻煩。資料流方面，OpenCLI 先通過 `setup` 指令配置 MCP 令牌，然後用戶可以使用各種命令來提取數據或執行操作。

這種設計使得用戶能夠在 CLI 中快速執行操作，並且能夠動態加載新的命令和適配器。選擇 Playwright 而非 Selenium 是因為其更輕量且支持現代瀏覽器的特性，這樣可以提高執行效率。整體來看，這個架構的擴展性良好，但在處理高頻請求時可能會受到瀏覽器的反爬蟲機制影響。

## 技術深入分析

OpenCLI 的核心技術機制是基於 TypeScript 和 Playwright，這使得它能夠高效地與瀏覽器進行互動。它的資料流設計允許用戶通過簡單的 CLI 命令來執行複雜的網頁操作，並且支持動態加載新的命令和適配器。效能方面，OpenCLI 能夠在用戶的本地環境中快速執行命令，但在高頻請求時可能會受到瀏覽器的反爬蟲機制影響。選擇 Playwright 而非 Selenium 是因為其更輕量且支持現代瀏覽器的特性，這樣可以提高執行效率。依賴樹方面，OpenCLI 的依賴相對簡單，主要依賴於 Playwright 和一些基本的 CLI 工具，這降低了使用的複雜度。技術風險方面，未來可能會面臨網站反爬蟲策略的變化，這可能會影響到數據提取的穩定性。整合方面，OpenCLI 可以輕鬆與現有的 CI/CD 流程結合，並且支持多種 IDE 的開發環境，這使得它的學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟和使用範例，安裝過程順暢。配置 Playwright MCP 令牌的步驟簡單明瞭，並且有良好的診斷工具。文件目前僅提供英文版，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 支持多個網站的數據提取，功能強大。
> - 重用 Chrome 登入狀態，簡化用戶操作。
> - AI 驅動的命令發現，提升使用便利性。

> [!danger] 缺點
> - 需要用戶手動安裝和配置 Chrome 擴展。
> - 對於某些網站的反爬蟲措施可能無法穩定運作。
> - 依賴於用戶的 Chrome 環境，移植性較差。

> [!warning] 注意事項
> - 僅支持 Node.js 20.0.0 以上版本
> - 需要 Chrome 瀏覽器並已登入目標網站
> - 某些網站可能會因為反爬蟲措施而無法正常提取數據

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 專注於 Twitter 的 CLI 工具，功能較為單一，無法整合多個網站。 |
| [jackwener/xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) | 專注於小紅書的數據提取，無法支持其他網站的操作。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 專注於 Twitter 的數據提取，無法支持多個網站的操作。 | 如果只需要針對 Twitter 的數據提取，這個工具會更簡單易用。 | low，因為功能較為單一，遷移成本低。 |
| [jackwener/xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) | 專注於小紅書的數據提取，無法支持其他網站的操作。 | 如果只需針對小紅書進行操作，這個工具會更專注且簡單。 | low，因為功能較為單一，遷移成本低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **opencli** | **twitter-cli** | **xiaohongshu-cli** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 Twitter 的數據提取，無法支持多個網站的操作。 | 專注於小紅書的數據提取，無法支持其他網站的操作。 |
> | 遷移成本 | - | low，因為功能較為單一，遷移成本低。 | low，因為功能較為單一，遷移成本低。 |
> | 適用場景 | 主要場景 | 如果只需要針對 Twitter 的數據提取，這個工具會更簡單 | 如果只需針對小紅書進行操作，這個工具會更專注且簡單。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者在測試環境中使用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 需要確保 Chrome 已登錄目標網站，否則會導致數據提取失敗。
  - 解法：在運行命令前，手動確認 Chrome 已登錄。
- [MEDIUM] 某些網站的反爬蟲措施可能會導致請求失敗。
  - 解法：使用 `opencli doctor` 進行診斷，並檢查配置。
- [low] 使用過程中可能會出現 UI 閃爍現象。
  - 解法：暫時使用其他 CLI 工具或等待更新修復。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要從多個網站提取數據的開發者 | 非常適合 | 這個工具能夠整合多個網站的數據提取，提升效率。 |
| 僅需針對單一網站進行操作的開發者 | 不適合 | 這個工具的功能過於複雜，對於單一網站的操作來說不夠簡單。 |
| 需要快速開發和測試自動化腳本的開發者 | 適合 | 這個工具的自動化能力能夠加速開發流程。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到快速的數據提取能力，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具需要訪問 Chrome 瀏覽器，但不會存取敏感資料。依賴於用戶的 Chrome 環境，安全性相對較高。

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
| Forks | 174 |
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

**社群活躍度**：社群活躍，有定期的更新和問題回應。
**連結**：[文件](https://github.com/jackwener/opencli)

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

相關概念：[[自動化]] · [[CLI/TUI]] · [[瀏覽器自動化]]

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
> const concepts = ["自動化","CLI/TUI","瀏覽器自動化"];
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
