---
repo: jackwener/opencli
url: https://github.com/jackwener/opencli
owner: jackwener
owner_type: User
language: TypeScript
license: Apache-2.0
description: "Make Any Website & Tool Your CLI. A universal CLI Hub and AI-native runtime. Transform any website, Electron app, or local binary into a standardized command-line interface. Built for AI Agents to discover, learn, and execute tools seamlessly via a unified AGENT.md integration."
homepage: "https://opencli.info/"
stars: 8422
stars_per_day: 602
forks: 692
open_issues: 71
created: 2026-03-14
pushed_at: 2026-03-28
first_seen: 2026-03-19
week: "2026-W12"
month: "2026-03"
category: "CLI 工具"
subcategory: "命令行介面"
release_tag: "v1.5.5"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-19
use_case: "將任何網站或工具轉換為 CLI，讓 AI Agent 能夠無縫發現和執行工具。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-24"
contributor_count: 5
engagement: "low"
issue_close_rate: 57
repo_size_kb: 3648
readme_length: 9722
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-19"
star_history: "2026-03-19:1858,2026-03-19:1885,2026-03-20:2453,2026-03-20:2480,2026-03-21:3102,2026-03-21:3117,2026-03-22:3676,2026-03-23:4443,2026-03-24:5348,2026-03-25:6185,2026-03-26:6951,2026-03-29:8422"
tags:
  - github
  - "category/cli_工具"
  - "lang/typescript"
  - easy_install
  - "topic/ai_agent"
  - "topic/ai_agents"
  - "topic/ai_tools"
  - "topic/cli"
aliases:
  - "opencli"
  - "jackwener/opencli"
  - "將任何網站或工具轉換為 CLI，讓 AI Agent 能夠無縫發現和執行工具。"
---

# opencli

**8.4k** stars · **602** stars/天 · 建立 14 天前 · TypeScript · Apache-2.0

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

`v1.5.5` `easy-install`

`ai-agent` `ai-agents` `ai-tools` `cli`

> [!summary] 一句話摘要
> 將任何網站或工具轉換為 CLI，讓 AI Agent 能夠無縫發現和執行工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (602 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要將網站或本地工具轉換為 CLI 並希望利用 AI 自動化操作的開發者。
> **一句話重點** OpenCLI 不僅是將網站轉為 CLI 的工具，更是 AI Agent 操作的強大助手。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/jackwener--opencli");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "命令行介面" && p.file.name !== "jackwener--opencli" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 命令行介面 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到高效的 CLI 操作體驗，值得投入。

> [!abstract] 核心創新
> 能夠將任何網站和 Electron 應用轉換為 CLI，並支持 AI 驅動的命令發現。

## 專案簡介

OpenCLI 是一個將任何網站、Electron 應用或本地 CLI 工具轉換為命令行介面的工具。使用者可以透過 `opencli register mycli` 將本地 CLI 註冊到 OpenCLI，並讓 AI Agent 發現和調用。這個工具的核心賣點在於它能夠重用 Chrome 的登入狀態，並且提供了強大的 AI 驅動發現功能，讓用戶可以輕鬆執行各種命令。技術上，OpenCLI 使用 TypeScript 和 Node.js，並依賴於 Chrome 瀏覽器的擴展來實現與網站的互動，這樣的設計使得它可以在不消耗 LLM 代幣的情況下進行高效的數據提取。

與其他工具相比，如 Browser-Use 和 Crawl4AI，OpenCLI 提供了更廣泛的網站支持（超過 50 個網站），並且能夠控制桌面 Electron 應用，這是其他工具無法做到的。使用者可以透過 `opencli list` 查看所有可用命令，並且支持多種輸出格式如 JSON、CSV 等，方便與其他工具鏈整合。這個工具的設計考量了安全性，內建防檢測機制，確保用戶的隱私不受侵犯。對於需要高效數據提取和網站操作的 AI Agent，OpenCLI 是一個理想的選擇。

**技術棧**：`TypeScript` · `Node.js >= 20.0.0` · `Chrome Extension`

## 重點功能

- 網站轉 CLI — 將任何網站轉換為命令行介面，支持超過 50 個網站。
- AI 驅動發現 — AI Agent 能自動發現可用工具並執行命令。
- 安全性設計 — 重用 Chrome 登入狀態，確保用戶隱私不外洩。
- 多種輸出格式 — 支持 JSON、CSV、YAML 等多種格式，方便數據處理。
- 自動安裝缺失工具 — 當執行命令時，自動安裝缺失的 CLI 工具。

## 快速開始

1. 安裝 Browser Bridge 擴展
```bash
下載並解壓 opencli-extension.zip，然後在 chrome://extensions 中加載未打包擴展。
```
2. 安裝 OpenCLI
```bash
npm install -g @jackwener/opencli
```
3. 檢查連接
```bash
opencli doctor
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 OpenCLI 並啟用 Browser Bridge 擴展。",
  "指令": "opencli bilibili hot --limit 5",
  "預期輸出": "返回 Bilibili 熱門視頻的列表。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 14 天內累積 8422 stars（602/天），forks 692（8.2%），顯示出強勁的增長潛力。作者 jackwener 之前有開發多個 CLI 工具，這次的 OpenCLI 解決了傳統 CLI 工具無法輕鬆整合網站和 Electron 應用的痛點。這個工具的出現正好迎合了 AI Agent 需要高效、無縫操作的需求，特別是在自動化和數據提取方面。社群的活躍度也反映在開放的 Issues 和 Pull Requests 上，顯示出使用者對於功能擴展的需求和參與度。這些因素共同推動了 OpenCLI 的快速成長。

## 適合誰使用

**目標受眾**：需要將網站或本地工具轉換為 CLI 並希望利用 AI 自動化操作的開發者。

> [!example] 使用場景
> - 數據分析師用它來從 Bilibili 自動提取熱門視頻數據，因為手動查找和收集數據耗時且容易出錯。
> - 開發者用它來控制 Electron 應用 Antigravity Ultra，因為這樣可以在命令行中快速執行複雜的操作，提升工作效率。
> - AI 研究人員用它來探索未知網站的 API，因為它的 AI 驅動發現功能能夠自動識別可用的操作，節省了大量時間。

## 架構分析

OpenCLI 採用雙引擎架構，結合了 YAML 聲明式數據管道和強大的 TypeScript 注入。這樣的設計使得用戶可以靈活地添加新的適配器，並且能夠在命令行中直接控制 Electron 應用。資料流方面，OpenCLI 透過 Chrome 擴展與瀏覽器進行互動，實現命令的執行和數據的提取。這種設計的代價在於需要用戶在 Chrome 中保持登入狀態，並且依賴於瀏覽器的安全性。擴展性方面，OpenCLI 支持動態加載新的適配器，這意味著用戶可以輕鬆擴展功能，但也可能導致在某些情況下出現兼容性問題。

## 技術深入分析

OpenCLI 的核心技術機制在於其雙引擎架構，支持 YAML 和 TypeScript 的靈活使用。這使得用戶可以根據需求選擇適合的方式來擴展功能。效能方面，OpenCLI 能夠快速處理來自多個網站的請求，並且由於其設計的高效性，能夠在不消耗 LLM 代幣的情況下進行數據提取。選擇 Node.js 和 TypeScript 使得開發過程中能夠利用現有的生態系統，並且降低了學習成本。技術風險方面，依賴於 Chrome 瀏覽器的安全性可能在未來造成一些問題，特別是在網站變更或 Chrome 更新後。整合方面，OpenCLI 與現有的 CLI 工具鏈相容性良好，能夠輕鬆與 GitHub Actions 等 CI 工具整合，並且對於團隊的學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟和範例，安裝過程相對順暢。提供了良好的入門指南，讓新手能快速上手。文件目前僅提供英文版本，可能對某些用戶造成障礙。

## 優缺點分析

> [!success] 優點
> - 廣泛的網站支持，超過 50 個網站可用。
> - AI 驅動的工具發現，提升操作效率。
> - 安全性設計，重用 Chrome 登入狀態，保護用戶隱私。

> [!danger] 缺點
> - 需要 Chrome 瀏覽器，無法在其他瀏覽器中使用。
> - 某些命令可能因網站變更而失效，需定期更新。
> - 對於不熟悉 CLI 的用戶，學習曲線可能較陡。

> [!warning] 注意事項
> - 僅支援 Node.js >= 20.0.0。
> - 需要 Chrome 瀏覽器並已登入目標網站。
> - 某些命令可能因網站變更而失效。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 專注於 Twitter 的 CLI 工具，功能較為單一，適合只需要操作 Twitter 的用戶。 |
| [jackwener/xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) | 專為小紅書設計的 CLI 工具，功能專一，但無法整合其他網站。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Browser-Use | 專注於瀏覽器自動化，無法像 OpenCLI 一樣將 Electron 應用轉換為 CLI。 | 如果只需要簡單的瀏覽器自動化，Browser-Use 是一個不錯的選擇。 | medium，因為需要重新學習其 API 和命令結構。 |
| Crawl4AI | 專注於大規模網頁爬蟲，適合需要高吞吐量的用戶。 | 如果你的需求是進行大規模的數據抓取，Crawl4AI 會更合適。 | high，因為需要重構整個數據抓取流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **opencli** | **Browser-Use** | **Crawl4AI** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於瀏覽器自動化，無法像 OpenCLI 一樣將 Electron 應用轉換為 CLI。 | 專注於大規模網頁爬蟲，適合需要高吞吐量的用戶。 |
> | 遷移成本 | - | medium，因為需要重新學習其 API 和命令結構。 | high，因為需要重構整個數據抓取流程。 |
> | 適用場景 | 主要場景 | 如果只需要簡單的瀏覽器自動化，Browser-Use 是一個 | 如果你的需求是進行大規模的數據抓取，Crawl4AI 會更合 |

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

- **[HIGH]** 某些網站的命令可能因網站更新而失效
  - 解法：定期檢查和更新命令
- [MEDIUM] Chrome 登入狀態過期會導致命令失敗
  - 解法：確保在執行命令前已登入目標網站
- [MEDIUM] 在某些平台上安裝過程可能會遇到權限問題
  - 解法：以管理員身份運行安裝命令

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊進行數據分析 | 非常適合 | 能夠快速提取和分析多個網站的數據，提升效率。 |
| 個人開發者需要自動化操作 Electron 應用 | 非常適合 | 能夠直接從命令行控制應用，簡化工作流程。 |
| 大型企業需要進行大規模網頁爬蟲 | 不適合 | 專為小規模操作設計，無法應對高吞吐量需求。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的 CLI 操作體驗，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 安全性評估顯示，OpenCLI 需要 Chrome 的高權限，但不會存取敏感資料。依賴於 Chrome 的安全性，整體風險較低。

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
| Forks | 692 |
| Open Issues | 71 |
| Issue 解決率 | 57% (94 closed) |
| 最後推送 | 2026-03-28 |
| 建立日期 | 2026-03-14 |
| 官方網站 | [Link](https://opencli.info/) |
| Repo 大小 | 3.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jackwener/opencli) |
| Topics | `ai-agent` `ai-agents` `ai-tools` `cli` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `chalk` `cli-table3` `commander` `js-yaml` `turndown` `undici` `ws` `@types/js-yaml` `@types/node` `@types/turndown` `@types/ws` `tsx` `typescript` `vitepress` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 98
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 396 |
> | [@Astro-Han](https://github.com/Astro-Han) | 33 |
> | [@ByteYue](https://github.com/ByteYue) | 29 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 8 |
> | [@0xsline](https://github.com/0xsline) | 6 |

**最新版本**：v1.5.5 (2026-03-28)

> [!info]- Release Notes
> ## What's Changed
> * fix: remove invalid `state: 'normal'` from chrome.windows.create() by @Cjy-CN in https://github.com/jackwener/opencli/pull/559
> * 添加新浪财经行情及滚动新闻抓取 by @yichuanzhao99-ctrl in https://github.com/jackwener/opencli/pull/546
> * feat(sinafinance): rewrite stock as public API, no browser required by @jackwener in https://github.com/jackwener/opencli/pull/563
> * feat(exit-codes): Unix-standard process exit codes for all error types by @jackwener in https://github.com/jackwener/opencli/pull/564
> * chore(release): 1.5.5 by @jackwener in https://github.com/jackwener/opencli/pull/565
> 
> ## New Contributors
> * @Cjy-CN made their first contribution in https://github.com/jackwener/opencli/pull/559
> * @yichuanzhao99-ctrl made their first contribution in https://github.com/jackwener/opencli/pull/546
> 
> **Full Changelog**: https://github.com/jackwener/opencli/compare/v1.5.4...v1.5.5

## 社群與生態

**社群活躍度**：社群活躍，Issues 和 Pull Requests 經常更新。
**連結**：[文件](https://opencli.info/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-28 ~ 2026-03-28）
> **活躍天數** 1 天 · **最新 commit** fix(tests): update E2E exit code assertions for usage errors (#567)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#496](https://github.com/jackwener/opencli/issues/496) | Extension v1.5.0 release package contains wrong manifest ver | 2 | 0 |
> | [#55](https://github.com/jackwener/opencli/issues/55) | [Bug] Windows: Antigravity CDP adapter fails due to MCP path | 2 | 1 |
> | [#468](https://github.com/jackwener/opencli/issues/468) | [Feature]: 希望可以把skill上传到整合平台 `enhancement` | 1 | 1 |
> | [#144](https://github.com/jackwener/opencli/issues/144) | feat: 新增独立 browser 命令组以支持 CDP 启动与双后端运行 | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenCLI
> 
> > **Make any website, Electron App, or Local Tool your CLI.**
> > Zero risk · Reuse Chrome login · AI-powered discovery · Universal CLI Hub
> 
> [](./README.zh-CN.md)
> [](https://www.npmjs.com/package/@jackwener/opencli)
> [](https://nodejs.org)
> [](./LICENSE)
> 
> A CLI tool that turns **any website**, **Electron app**, or **local CLI tool** into a command-line interface — Bilibili, Zhihu, 小红书, Twitter/X, Reddit, YouTube, Antigravity, `gh`, `docker`, and [many more](#built-in-commands) — powered by browser session reuse and AI-native discovery.
> 
> **Built for AI Agents** — Configure an instruction in your `AGENT.md` or `.cursorrules` to run `opencli list` via Bash. The AI will automatically discover and invoke all available tools.
> 
> **CLI Hub** — Register any local CLI (`opencli register mycli`) so AI agents can discover and call it alongside built-in commands. Auto-installs missing tools via your package manager (e.g. if `gh` isn't installed, `opencli gh ...` runs `brew install gh` first then re-executes seamlessly).
> 
> **CLI for Electron Apps** — Turn any Electron application into a CLI tool. Recombine, script, and extend apps like Antigravity Ultra from the terminal. AI agents can now control other AI apps natively.
> 
> ---
> 
> 
> ## Quick Start
> 
> 
> ### 1. Install Browser Bridge Extension
> 
> > OpenCLI connects to your browser through a lightweight **Browser Bridge** Chrome Extension + micro-daemon (zero config, auto-start).
> 
> 1. Go to the GitHub [Releases page](https://github.com/jackwener/opencli/releases) and download the latest `opencli-extension.zip`.
> 2. Unzip the file and open `chrome://extensions`, enable **Developer mode** (top-right toggle).
> 3. Click **Load unpacked** and select the unzipped folder.
> 
> 
> ### 2. Install OpenCLI
> 
> **Install via npm (recommended)**
> 
> ```bash
> npm install -g @jackwener/opencli
> ```
> 
> 
> ## Prerequisites
> 
> - **Node.js**: >= 20.0.0 (or **Bun** >= 1.0)
> - **Chrome** running **and logged into the target site** (e.g. bilibili.com, zhihu.com, xiaohongshu.com).
> 
> > **⚠️ Important**: Browser commands reuse your Chrome login session. You must be logged into the target website in Chrome before running commands. If you get empty data or errors, check your login status first.
> 
> 
> ## Highlights
> 
> - **CLI All Electron** — CLI-ify apps like Antigravity Ultra! Now AI can control itself natively.
> - **Account-safe** — Reuses Chrome's logged-in state; your credentials never leave the browser.
> - **Anti-detection built-in** — Patches `navigator.webdriver`, stubs `window.chrome`, fakes plugin lists, cleans ChromeDriver/Playwright globals, and strips CDP frames from Error stack traces. Extensive anti-fingerprinting and risk-control evasion measures baked in at every layer.
> - **AI Agent ready** — `explore` discovers APIs, `synthesize` generates adapters, `cascade` finds auth strategies.
> - **External CLI Hub** — Discover, auto-install, and passthrough commands to any external CLI (gh, obsidian, docker, etc). Zero setup.
> - **Self-healing setup** — `opencli doctor` diagnoses and auto-starts the daemon, extension, and live browser connectivity.
> - **Dynamic Loader** — Simply drop `.ts` or `.yaml` adapters into the `clis/` folder for auto-registration.
> - **Dual-Engine Architecture** — Supports both YAML declarative data pipelines and robust browser runtime TypeScript injections.
> 
> 
> ## Why opencli?
> 
> There are many great browser automation tools. Here's when opencli is the right choice:
> 
> | Your need | Best tool | Why |
> |-----------|-----------|-----|
> | Scheduled data extraction from specific sites | **opencli** | Pre-built adapters, deterministic JSON, zero LLM cost |
> | AI agent needs reliable site operations | **opencli** | Hundreds of commands, structured output, fast deterministic response |
> | Explore an unknown website ad-hoc | Browser-Use, Stagehand | LLM-driven general browsing for one-off tasks |
> | Large-scale web crawling | Crawl4AI, Scrapy | Purpose-built for throughput and scale |
> | Control desktop Electron apps from terminal | **opencli** | CDP + AppleScript — the only CLI tool that does this |
> 
> **What makes opencli different:**
> 
> - **Zero LLM cost** — No tokens consumed at runtime. Run 10,000 times and pay nothing.
> - **Deterministic** — Same command, same output schema, every time. Pipeable, scriptable, CI-friendly.
> - **Broad coverage** — 50+ sites across global and Chinese platforms (Bilibili, Zhihu, Xiaohongshu, Reddit, HackerNews, and more), plus desktop Electron apps via CDP.
> 
> > For a detailed comparison with Browser-Use, Crawl4AI, Firecrawl, and others, see the [Comparison Guide](./docs/comparison.md).
> 
> ---
> 
> 
> ### 3. Verify & Try
> 
> ```bash
> opencli doctor   # Check extension + daemon connectivity
> ```
> 
> **Try it out:**
> 
> ```bash
> opencli list                           # See all commands
> opencli hackernews top --limit 5       # Public API, no browser needed
> opencli bilibili hot --limit 5         # Browser command (requires Extension)
> ```
> 
> 
> ### Update
> 
> ```bash
> npm install -g @jackwener/opencli@latest
> ```
> 
> ---
> 
> 
> ### For Developers
> 
> **Install from source**
> 
> ```bash
> git clone git@github.com:jackwener/opencli.git && cd opencli && npm install && npm run build && npm link
> ```
> 
> **Load Source Browser Bridge Extension**
> 
> 1. Open `chrome://extensions` and enable **Developer mode** (top-right toggle).
> 2. Click **Load unpacked** and select the `extension/` directory from this repository.
> 
> ---
> 
> 
> ## Built-in Commands
> 
> | Site | Commands |
> |------|----------|
> | **xiaohongshu** | `search` `feed` `user` `download` `publish` `comments` `notifications` `creator-notes` `creator-notes-summary` `creator-note-detail` `creator-profile` `creator-stats` |
> | **bilibili** | `hot` `search` `history` `feed` `ranking` `download` `comments` `dynamic` `favorite` `following` `me` `subtitle` `user-videos` |
> | **twitter** | `trending` `search` `timeline` `bookmarks` `post` `download` `profile` `article` `like` `likes` `notifications` `reply` `reply-dm` `thread` `follow` `unfollow` `followers` `following` `block` `unblock` `bookmark` `unbookmark` `delete` `hide-reply` `accept` |
> | **reddit** | `hot` `frontpage` `popular` `search` `subreddit` `user` `user-posts` `user-comments` `read` `save` `saved` `subscribe` `upvote` `upvoted` `comment` |
> 
> 65+ adapters in total — **[→ see all supported sites & commands](./docs/adapters/index.md)**
> 
> 
> ## CLI Hub
> 
> OpenCLI acts as a universal hub for your existing command-line tools — unified discovery, pure passthrough execution, and auto-install (if a tool isn't installed, OpenCLI runs `brew install ` automatically before re-running the command).
> 
> | External CLI | Description | Example |
> |--------------|-------------|---------|
> | **gh** | GitHub CLI | `opencli gh pr list --limit 5` |
> | **obsidian** | Obsidian vault management | `opencli obsidian search query="AI"` |
> | **docker** | Docker | `opencli docker ps` |
> | **gws** | Google Workspace CLI | `opencli gws docs list` |
> | **lark-cli** | Lark/Feishu — messages, docs, calendar, tasks, 200+ commands | `opencli lark-cli calendar +agenda` |
> | **vercel** | Vercel — deploy projects, manage domains, env vars, logs | `opencli vercel deploy --prod` |
> 
> **Register your own** — add any local CLI so AI agents can discover it via `opencli list`:
> 
> ```bash
> opencli register mycli
> ```
> 
> 
> ### Desktop App Adapters
> 
> Control Electron desktop apps directly from the terminal. Each adapter has its own detailed documentation:
> 
> | App | Description | Doc |
> |-----|-------------|-----|
> | **Cursor** | Control Cursor IDE — Composer, chat, code extraction | [Doc](./docs/adapters/desktop/cursor.md) |
> | **Codex** | Drive OpenAI Codex CLI agent headlessly | [Doc](./docs/adapters/desktop/codex.md) |
> | **Antigravity** | Control Antigravity Ultra from terminal | [Doc](./docs/adapters/desktop/antigravity.md) |
> | **ChatGPT** | Automate ChatGPT macOS desktop app | [Doc](./docs/adapters/desktop/chatgpt.md) |
> | **ChatWise** | Multi-LLM client (GPT-4, Claude, Gemini) | [Doc](./docs/adapters/desktop/chatwise.md) |
> | **Notion** | Search, read, write Notion pages | [Doc]

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[AI 工具]]

相關專案：[[jackwener--twitter-cli|jackwener/twitter-cli]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[Narcooo--inkos|Narcooo/inkos]]

[GitHub](https://github.com/jackwener/opencli) · [官方網站](https://opencli.info/)

## 相關收錄

> [!note]- 直接競品（同子分類：命令行介面）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "命令行介面" AND file.name != "jackwener--opencli"
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
> const concepts = ["CLI/TUI","自動化","AI 工具"];
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
