---
repo: jackwener/opencli
url: https://github.com/jackwener/opencli
owner: jackwener
owner_type: User
language: TypeScript
license: Apache-2.0
description: "Make Any Website & Tool Your CLI. A universal CLI Hub and AI-native runtime. Transform any website, Electron app, or local binary into a standardized command-line interface. Built for AI Agents to discover, learn, and execute tools seamlessly via a unified AGENT.md integration."
homepage: "https://opencli.info/"
stars: 3676
stars_per_day: 525
forks: 313
open_issues: 41
created: 2026-03-14
pushed_at: 2026-03-21
first_seen: 2026-03-19
week: "2026-W12"
month: "2026-03"
category: "CLI 工具"
subcategory: "命令行整合"
release_tag: "v1.1.1"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-19
use_case: "將任何網站或工具轉換為命令行介面，為 AI 代理提供無縫的工具發現與執行。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-24"
contributor_count: 5
engagement: "low"
issue_close_rate: 48
repo_size_kb: 2102
readme_length: 9958
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-19"
star_history: "2026-03-19:1858,2026-03-19:1885,2026-03-20:2453,2026-03-20:2480,2026-03-21:3102,2026-03-21:3117,2026-03-22:3676"
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
  - "將任何網站或工具轉換為命令行介面，為 AI 代理提供無縫的工具發現與執行。"
---

# opencli

**3.7k** stars · **525** stars/天 · 建立 7 天前 · TypeScript · Apache-2.0

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

`v1.1.1` `easy-install`

`ai-agent` `ai-agents` `ai-tools` `cli`

> [!summary] 一句話摘要
> 將任何網站或工具轉換為命令行介面，為 AI 代理提供無縫的工具發現與執行。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (525 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要將多個網站和應用整合到命令行工作流程中的開發者和數據分析師。
> **一句話重點** OpenCLI 不僅是工具整合的解決方案，更是 AI 驅動的命令行未來的探索。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/jackwener--opencli");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "命令行整合" && p.file.name !== "jackwener--opencli" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 命令行整合 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到快速整合多個工具的能力，值得一試。

> [!abstract] 核心創新
> OpenCLI 是一個 AI 驅動的通用 CLI 中樞，能將任何網站和應用轉換為命令行介面。

## 專案簡介

OpenCLI 是一個強大的命令行工具，能將任何網站、Electron 應用或本地 CLI 工具轉換為統一的命令行介面。使用者只需在 Chrome 中登錄目標網站，然後透過 `opencli list` 查看可用命令，這樣 AI 代理便能自動學習如何調用這些工具。核心機制是通過重用 Chrome 的登錄會話來進行命令執行，這樣用戶的憑證不會離開瀏覽器。這個工具的賣點在於其 AI 驅動的發現能力，能夠自動識別 API 和生成適配器，並支持各種格式的輸出（如 JSON 和 YAML）。技術上，OpenCLI 使用 TypeScript 和 Node.js，並依賴於 Chrome 擴展和微守護進程來實現與瀏覽器的連接。

與傳統 CLI 工具相比，OpenCLI 提供了更高的靈活性和擴展性，因為用戶可以輕鬆地將 Electron 應用轉換為 CLI 工具，並且支持動態加載適配器。這使得 OpenCLI 在需要快速集成多個工具的場景中表現出色，特別適合需要自動化和 AI 驅動的工作流程。使用者可能會遇到的限制包括需要安裝 Chrome 擴展和確保登錄狀態。這個專案目前處於 beta 階段，適合小型團隊和個人開發者使用，未來可能會進一步增強 AI 功能和擴展性。

**技術棧**：`TypeScript` · `Node.js >= 20.0.0`

## 重點功能

- 多平台支持 — 能夠將任何網站、Electron 應用或本地 CLI 工具轉換為命令行介面。
- AI 驅動的工具發現 — 使用 `opencli explore` 自動識別 API 和生成適配器。
- 動態加載適配器 — 只需將 `.ts` 或 `.yaml` 文件放入 `clis/` 文件夾即可自動註冊。
- 多種輸出格式 — 支持 JSON 和 YAML 格式的輸出，方便用戶根據需求選擇。
- 自我診斷功能 — 使用 `opencli doctor` 檢查擴展和守護進程的連接狀態。

## 快速開始

1. 全局安裝 OpenCLI
```bash
npm install -g @jackwener/opencli
```
2. 查看可用命令
```bash
opencli list
```
3. 下載 Bilibili 視頻
```bash
opencli bilibili download --bvid BV1xxx --output ./bilibili
```

## 程式碼範例

```ts
{
  "前置條件": "確保已安裝 Chrome 並登錄目標網站",
  "指令": "opencli bilibili hot --limit 5",
  "預期輸出": "返回 Bilibili 熱門視頻的列表"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 3676 stars（525/天），forks 313（8.5%），顯示出強烈的增長潛力。作者 jackwener 之前有多個相關專案，這次針對 CLI 工具的需求進行了創新，解決了用戶在多個網站和應用之間切換的痛點。這個工具的推出引發了社群的廣泛關注，並且在 GitHub 上的討論也顯示出對其功能的期待。技術上，這個工具的設計使得它能夠在現有的 AI 生態系統中無縫整合，特別是在需要快速適應不同工具的情境下。forks/stars 比率為 8.5%，顯示出許多開發者對其進行實際修改和使用。

## 適合誰使用

**目標受眾**：需要將多個網站和應用整合到命令行工作流程中的開發者和數據分析師。

> [!example] 使用場景
> - 後端工程師用它來將 Bilibili 下載功能整合到 CI 流程中，因為手動下載視頻效率低下，使用 OpenCLI 可以自動化這一過程。
> - 數據科學家用它來快速從 Twitter 獲取熱門話題，因為傳統 API 調用過程繁瑣，而 OpenCLI 提供了簡化的命令行介面。
> - 產品經理用它來監控競爭對手的社交媒體活動，因為可以通過簡單的命令行指令獲取多個平台的數據，節省了大量時間。

## 架構分析

OpenCLI 採用單一的 Node.js 應用架構，通過 Chrome 擴展與用戶的瀏覽器進行交互。這種設計使得用戶無需進行複雜的配置，只需安裝擴展並登錄即可使用。資料流方面，命令從命令行發出，經由 Chrome 擴展轉發到瀏覽器，然後通過 API 獲取數據並返回給用戶。

選擇 Node.js 作為後端語言的好處在於其非同步處理能力，能夠高效地處理多個並發請求。這樣的設計雖然簡化了用戶的操作，但在擴展性上可能會受到限制，特別是在需要處理大量請求的情況下。整體而言，這種架構適合小型到中型的應用場景，但在高負載情況下可能需要進一步的優化。

未來可能需要考慮如何提升系統的穩定性和擴展性。

## 技術深入分析

OpenCLI 的核心技術機制在於其能將多種網站和應用轉換為命令行介面，這是通過重用 Chrome 的登錄會話來實現的。這種設計使得用戶的憑證不會離開瀏覽器，增加了安全性。效能方面，OpenCLI 能夠高效地處理多個並發請求，因為它基於 Node.js 的非同步特性。設計上，選擇 TypeScript 使得開發過程中能夠獲得更好的類型檢查和錯誤提示，這對於大型項目的維護非常重要。技術風險方面，依賴於 Chrome 瀏覽器可能會在未來的版本中帶來兼容性問題，特別是當 Chrome 更新其 API 時。整合方面，OpenCLI 能夠與現有的 CI/CD 流程無縫對接，使用者只需通過簡單的命令行指令即可完成操作，這使得它在開發和運維中都非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並包含了多個範例。安裝過程相對順暢，唯一的挑戰是需要用戶手動安裝 Chrome 擴展。文件中有中文版本，對於中文用戶來說非常友好。整體來說，花 30 分鐘內能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 支持多平台，能夠將各種網站和應用整合到 CLI 中。
> - AI 驅動的工具發現功能，能夠自動學習和適應新的命令。
> - 簡單的安裝和使用流程，降低了使用門檻。

> [!danger] 缺點
> - 依賴於 Chrome 瀏覽器，限制了使用場景。
> - 目前仍在 beta 階段，可能存在不穩定性。
> - 對於某些功能需要額外的依賴安裝，增加了使用複雜度。

> [!warning] 注意事項
> - 需要 Chrome 瀏覽器並登錄目標網站才能運行命令。
> - 對於某些網站，可能需要額外的依賴（如 yt-dlp）來支持下載功能。
> - 目前仍在 beta 階段，可能存在不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 專注於 Twitter 的命令行工具，功能較為單一，適合專門需要 Twitter 數據的用戶。 |
| [jackwener/xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) | 針對小紅書的命令行工具，功能專一，無法像 OpenCLI 一樣支持多平台整合。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 提供類似的 CLI 整合功能，但不支持 AI 驅動的工具發現和自動化學習。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 專注於 Twitter 的命令行工具，功能較為單一，適合專門需要 Twitter 數據的用戶。 | 如果你的主要需求是從 Twitter 獲取數據，這個工具會更簡單直接。 | low，因為功能較為專一，容易上手。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 提供類似的 CLI 整合功能，但不支持 AI 驅動的工具發現和自動化學習。 | 如果你的需求不涉及 AI 功能，這個工具可能會更輕量。 | medium，因為需要重新學習命令和功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **opencli** | **twitter-cli** | **CLI-Anything** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 Twitter 的命令行工具，功能較為單一，適合專門需要 Twitter 數據的用戶。 | 提供類似的 CLI 整合功能，但不支持 AI 驅動的工具發現和自動化學習。 |
> | 遷移成本 | - | low，因為功能較為專一，容易上手。 | medium，因為需要重新學習命令和功能。 |
> | 適用場景 | 主要場景 | 如果你的主要需求是從 Twitter 獲取數據，這個工具會更 | 如果你的需求不涉及 AI 功能，這個工具可能會更輕量。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型團隊和個人開發者試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 需要確保 Chrome 登錄狀態，否則命令可能返回空數據。
  - 解法：在執行命令前檢查 Chrome 是否已登錄目標網站。
- [MEDIUM] 某些網站的命令可能因 API 限制而無法正常工作。
  - 解法：查看官方文檔以確認支持的功能。
- [MEDIUM] 安裝 Chrome 擴展時可能會遇到版本不兼容問題。
  - 解法：確保使用最新版本的 Chrome 和擴展。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要快速整合多個工具 | 非常適合 | 能夠快速將多個網站和應用整合到 CLI 中，提升工作效率。 |
| 大型企業需要穩定的 CLI 工具 | 不適合 | 目前仍在 beta 階段，可能存在不穩定性。 |
| 個人開發者希望自動化社交媒體數據抓取 | 非常適合 | 提供了簡單的命令行介面，能夠快速獲取數據。 |
| 需要高安全性的金融應用 | 普通 | 雖然重用 Chrome 登錄會話，但仍需注意安全性問題。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到快速整合多個工具的能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 安全性評估中等，因為需要訪問用戶的 Chrome 登錄會話，但不會將憑證外洩。對於 CI/CD 使用相對安全，但仍需注意外部 API 的安全性。

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
| Forks | 313 |
| Open Issues | 41 |
| Issue 解決率 | 48% (38 closed) |
| 最後推送 | 2026-03-21 |
| 建立日期 | 2026-03-14 |
| 官方網站 | [Link](https://opencli.info/) |
| Repo 大小 | 2.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jackwener/opencli) |
| Topics | `ai-agent` `ai-agents` `ai-tools` `cli` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `chalk` `cli-table3` `commander` `js-yaml` `ws` `@types/js-yaml` `@types/node` `@types/ws` `tsx` `typescript` `vitepress` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 98
>     "JavaScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 277 |
> | [@ByteYue](https://github.com/ByteYue) | 11 |
> | [@Astro-Han](https://github.com/Astro-Han) | 10 |
> | [@himself65](https://github.com/himself65) | 4 |
> | [@huangsen365](https://github.com/huangsen365) | 4 |

**最新版本**：v1.1.1 (2026-03-21)

> [!info]- Release Notes
> ## What's Changed
> * chore(main): release 1.1.0 by @jackwener in https://github.com/jackwener/opencli/pull/134
> * ci: migrate docs deployment to cross-repo build via opencli-website by @ByteYue in https://github.com/jackwener/opencli/pull/138
> * docs: add missing adapter docs, fix sidebar 404s, add doc-check CI by @ByteYue in https://github.com/jackwener/opencli/pull/140
> * feat: add Bloomberg adapter by @KasumiChen in https://github.com/jackwener/opencli/pull/145
> * fix: correct xiaohongshu creator metric parsing by @ajia1206 in https://github.com/jackwener/opencli/pull/146
> * feat: enhance --help with registry metadata and enrich list --json with full arg schema by @Astro-Han in https://github.com/jackwener/opencli/pull/142
> * refactor: extract serialization helpers to registry.ts and stabilize arg schema by @jackwener in https://github.com/jackwener/opencli/pull/148
> * fix: harden external CLI hub by @jackwener in https://github.com/jackwener/opencli/pull/149
> * refactor!: standardize all CLI arg names to kebab-case by @jackwener in https://github.com/jackwener/opencli/pull/150
> * refactor: split engine.ts into discovery/execution, extract Commander adapter by @jackwener in https://github.com/jackwener/opencli/pull/152
> * refactor: deep CLI layer architecture improvements by @jackwener in https://github.com/jackwener/opencli/pull/164
> * docs: sync documentation with PR #150 arg renames by @jackwener in https://github.com/jackwener/opencli/pull/179
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，經常有新功能和修復更新。
**連結**：[文件](https://opencli.info/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-21 ~ 2026-03-21）
> **活躍天數** 1 天 · **最新 commit** remove broken desktop adapters (#221)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#59](https://github.com/jackwener/opencli/issues/59) | Feature Request: 轨迹模拟（Human-like Interaction Patterns）防止封号 `enhancement` | 12 | 0 |
> | [#37](https://github.com/jackwener/opencli/issues/37) | Proposal: 将引入新网站的流程插件化 | 5 | 1 |
> | [#2](https://github.com/jackwener/opencli/issues/2) | OpenCLI 是否定位为统一替代各独立 CLI 项目？(twitter-cli, xiaohongshu-cli, b | 5 | 2 |
> | [#102](https://github.com/jackwener/opencli/issues/102) | [Feature]: 支持插件仓库机制，让用户无需修改主仓库即可安装和使用外部 Adapter `enhancement` | 4 | 1 |
> | [#83](https://github.com/jackwener/opencli/issues/83) | feat: twitter timeline 支持区分 For You / Following | 2 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenCLI
> 
> > **Make any website, Electron App, or Local Tool your CLI.**  
> > Zero risk · Reuse Chrome login · AI-powered discovery · Universal CLI Hub
> 
> [中文文档](./README.zh-CN.md)
> 
> [](https://www.npmjs.com/package/@jackwener/opencli)
> [](https://nodejs.org)
> [](./LICENSE)
> 
> A CLI tool that turns **any website**, **Electron app**, or **local CLI tool** into a command-line interface — Bilibili, Zhihu, 小红书, Twitter/X, Reddit, YouTube, Antigravity, `gh`, `docker`, and [many more](#built-in-commands) — powered by browser session reuse and AI-native discovery.
> 
> **Built for AI Agents**: Simply configure an instruction in your global `AGENT.md` or `.cursorrules` guiding the AI to execute `opencli list` via Bash to discover available tools. Register your favorite local CLIs (`opencli register mycli`), and the AI will automatically learn how to invoke all your tools perfectly!
> 
> **CLI All Electron Apps! The Most Powerful Update Has Arrived!**
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
> You can install the extension via either method:
> 
> **Method 1: Download Pre-built Release (Recommended)**
> 1. Go to the GitHub [Releases page](https://github.com/jackwener/opencli/releases) and download the latest `opencli-extension.zip` or `opencli-extension.crx`.
> 2. Open `chrome://extensions` and enable **Developer mode** (top-right toggle).
> 3. Drag and drop the `.crx` file or the unzipped folder into the extensions page.
> 
> **Method 2: Load Unpacked Source (For Developers)**
> 1. Open `chrome://extensions` and enable **Developer mode**.
> 2. Click **Load unpacked** and select the `extension/` directory from this repository.
> 
> That's it! The daemon auto-starts when you run any browser command. No tokens, no manual configuration.
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
> - **External CLI Hub** — Discover, auto-install, and passthrough commands to any external CLI (gh, obsidian, docker, kubectl, etc). Zero setup.
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
> - [External CLI Hub](#external-cli-hub)
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
> | **twitter** | `trending` `bookmarks` `profile` `search` `timeline` `thread` `following` `followers` `notifications` `post` `reply` `delete` `like` `article` `follow` `unfollow` `bookmark` `unbookmark` `download` `accept` `reply-dm` | Browser |
> | **reddit** | `hot` `frontpage` `popular` `search` `subreddit` `read` `user` `user-posts` `user-comments` `upvote` `save` `comment` `subscribe` `saved` `upvoted` | Browser |
> | **cursor** | `status` `send` `read` `new` `dump` `composer` `model` `extract-code` `ask` `screenshot` `history` `export` | Desktop |
> | **bilibili** | `hot` `search` `me` `favorite` `history` `feed` `subtitle` `dynamic` `ranking` `following` `user-videos` `download` | Browser |
> | **codex** | `status` `send` `read` `new` `dump` `extract-diff` `model` `ask` `screenshot` `history` `export` | Desktop |
> | **chatwise** | `status` `new` `send` `read` `ask` `model` `history` `export` `screenshot` | Desktop |
> | **notion** | `status` `search` `read` `new` `write` `sidebar` `favorites` `export` | Desktop |
> | **discord-app** | `status` `send` `read` `channels` `servers` `search` `members` | Desktop |
> | **v2ex** | `hot` `latest` `topic` `daily` `me` `notifications` | Public / Browser |
> | **xueqiu** | `feed` `hot-stock` `hot` `search` `stock` `watchlist` | Browser |
> | **antigravity** | `status` `send` `read` `new` `dump` `extract-code` `model` `watch` `serve` | Desktop |
> | **chatgpt** | `status` `new` `send` `read` `ask` | Desktop |
> | **xiaohongshu** | `search` `notifications` `feed` `user` `download` `creator-notes` `creator-note-detail` `creator-notes-summary` `creator-profile` `creator-stats` | Browser |
> | **apple-podcasts** | `search` `episodes` `top` | Public |
> | **xiaoyuzhou** | `podcast` `podcast-episodes` `episode` | Public |
> | **zhihu** | `hot` `search` `question` `download` | Browser |
> | **youtube** | `search` `video` `transcript` | Browser |
> | **boss** | `search` `detail` `recommend` `joblist` `greet` `batchgreet` `send` `chatlist` `chatmsg` `invite` `mark` `exchange` `resume` `stats` | Browser |
> | **coupang** | `search` `add-to-cart` | Browser |
> | **bbc** | `news` | Public |
> | **bloomberg** | `main` `markets` `economics` `industries` `tech` `politics` `businessweek` `opinions` `feeds` `news` | Public / Browser |
> | **ctrip** | `search` | Browser |
> | **arxiv** | `search` `paper` | Public |
> | **wikipedia** | `search` `summary` | Public |
> | **hackernews** | `top` | Public |
> | **linkedin** | `search` | Browser |
> | **reuters** | `search` | Browse

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[AI 工具]]

相關專案：[[jackwener--twitter-cli|jackwener/twitter-cli]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[Narcooo--inkos|Narcooo/inkos]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]]

[GitHub](https://github.com/jackwener/opencli) · [官方網站](https://opencli.info/)

## 相關收錄

> [!note]- 直接競品（同子分類：命令行整合）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "命令行整合" AND file.name != "jackwener--opencli"
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
