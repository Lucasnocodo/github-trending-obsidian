---
repo: jackwener/OpenCLI
url: https://github.com/jackwener/OpenCLI
owner: jackwener
owner_type: User
language: TypeScript
license: Apache-2.0
description: "Make Any Website & Tool Your CLI. A universal CLI Hub and AI-native runtime. Transform any website, Electron app, or local binary into a standardized command-line interface. Built for AI Agents to discover, learn, and execute tools seamlessly via a unified AGENT.md integration."
homepage: "https://opencli.info/"
stars: 14715
stars_per_day: 566
forks: 1383
open_issues: 79
created: 2026-03-14
pushed_at: 2026-04-09
first_seen: 2026-03-19
week: "2026-W12"
month: "2026-03"
category: "CLI 工具"
subcategory: "自動化"
release_tag: "v1.7.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-19
use_case: "將任何網站或工具轉換為 CLI，讓 AI 代理無縫發現、學習和執行工具。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-24"
contributor_count: 5
engagement: "low"
issue_close_rate: 70
repo_size_kb: 5794
readme_length: 9976
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-19"
star_history: "2026-03-19:1858,2026-03-19:1885,2026-03-20:2453,2026-03-20:2480,2026-03-21:3102,2026-03-21:3117,2026-03-22:3676,2026-03-23:4443,2026-03-24:5348,2026-03-25:6185,2026-03-26:6951,2026-03-29:8422,2026-03-31:9235,2026-04-07:13687,2026-04-08:14071,2026-04-09:14431,2026-04-10:14715"
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
  - "OpenCLI"
  - "jackwener/OpenCLI"
  - "將任何網站或工具轉換為 CLI，讓 AI 代理無縫發現、學習和執行工具。"
---

# OpenCLI

**14.7k** stars · **566** stars/天 · 建立 26 天前 · TypeScript · Apache-2.0

```dataviewjs
const me = dv.page("Repos/jackwener--OpenCLI");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.7.0` `easy-install`

`ai-agent` `ai-agents` `ai-tools` `cli`

> [!summary] 一句話摘要
> 將任何網站或工具轉換為 CLI，讓 AI 代理無縫發現、學習和執行工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (566 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要將多個網站和工具整合為 CLI 的開發者，特別是在自動化測試和數據抓取領域。
> **一句話重點** OpenCLI 的真正價值在於將網站和應用轉換為 CLI，讓開發者可以更高效地進行自動化操作。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/jackwener--OpenCLI");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "jackwener--OpenCLI" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到強大的網站自動化能力，值得投入。

> [!abstract] 核心創新
> OpenCLI 允許將任何網站或工具轉換為 CLI，並提供即時瀏覽器控制的能力。

## 專案簡介

OpenCLI 的核心機制是將網站、Electron 應用和本地工具轉換為標準化的命令行介面，讓使用者和 AI 代理都能輕鬆使用。使用者可以透過 `opencli` 命令來執行各種操作，例如 `opencli hackernews top --limit 5` 來獲取 HackerNews 的熱門文章。這樣的設計使得重複的操作可以被自動化，並且能夠在不同的環境中保持一致性。技術上，OpenCLI 使用 TypeScript 和 JavaScript 開發，並依賴 Node.js 20.0.0 以上的環境，這使得它能夠利用現代 JavaScript 特性來提高開發效率。相較於其他 CLI 工具，如 `gh` 或 `docker`，OpenCLI 不僅支持這些工具，還能直接控制瀏覽器進行自動化操作，這是許多 CLI 工具所無法做到的。

使用者可以透過 `opencli register mycli` 將本地 CLI 工具註冊到 OpenCLI 中，實現統一的命令發現和執行。這種設計特別適合需要頻繁操作多個網站或工具的開發者，因為它能夠大幅減少重複性工作。使用 OpenCLI 時，使用者需要確保 Chrome 或 Chromium 瀏覽器已經登錄目標網站，這樣才能正確執行基於瀏覽器的命令。值得注意的是，OpenCLI 提供了強大的反檢測功能，能夠在自動化過程中隱藏其行為，這對於需要進行網頁爬蟲的使用者來說非常重要。整體而言，OpenCLI 是一個功能強大且靈活的工具，適合需要進行網站自動化和 CLI 整合的開發者和 AI 代理。

**技術棧**：`TypeScript` · `JavaScript` · `Node.js >= 20.0.0`

## 重點功能

- 網站轉換為 CLI — 支持 70+ 預建適配器，或使用 `opencli record` 創建自定義命令。
- 即時瀏覽器控制 — 使用 `opencli browser` 直接操作網頁，支持點擊、輸入和截圖等操作。
- CLI Hub 整合 — 支持註冊本地 CLI 工具，實現統一的命令發現和執行。
- 強大的反檢測功能 — 內建多種反指紋和風險控制措施，保護使用者隱私。
- 自動診斷功能 — 使用 `opencli doctor` 檢查和修復設置問題，確保正常運行。

## 快速開始

1. 安裝 OpenCLI
```bash
npm install -g @jackwener/opencli
```
2. 安裝瀏覽器橋接擴展
```bash
下載並解壓 opencli-extension.zip，然後在 chrome://extensions 中加載未打包擴展
```
3. 驗證設置
```bash
opencli doctor
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 OpenCLI 並設置好瀏覽器擴展",
  "指令": "opencli hackernews top --limit 5",
  "預期輸出": "返回 HackerNews 的熱門文章列表"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 26 天內累積 14715 stars（566/天），forks 1383（9.4%），顯示出強勁的增長潛力。開發者 jackwener 之前在開源社群中有過多個成功的專案，這使得 OpenCLI 自然吸引了關注。這個專案解決了以往網站自動化工具的局限性，通過將網站轉換為 CLI，讓開發者能夠更高效地進行操作。近期的推文和社群討論也進一步推動了其曝光率。技術上，OpenCLI 的出現是因為現代瀏覽器的 API 和 JavaScript 的進步，使得這種自動化變得可行。高達 9.4% 的 forks/stars 比率顯示出許多開發者對這個工具進行了實際修改和使用，這是一個健康的社群信號。

## 適合誰使用

**目標受眾**：需要將多個網站和工具整合為 CLI 的開發者，特別是在自動化測試和數據抓取領域。

> [!example] 使用場景
> - 前端工程師用它來自動化測試網站功能，因為可以直接在 CLI 中控制瀏覽器，減少手動測試的時間。
> - 數據分析師用它來快速抓取社交媒體數據，因為可以將網站轉換為 CLI 命令，實現批量數據提取。
> - DevOps 工程師用它來整合多個 CLI 工具，因為可以透過 OpenCLI 統一管理和執行各種命令，提升工作效率。

## 架構分析

OpenCLI 採用模組化架構，主要由 CLI 命令和瀏覽器擴展組成。CLI 命令使用 Node.js 實現，並通過 npm 安裝。瀏覽器擴展則作為輕量級的橋接，與本地守護進程通訊。

這種設計使得 OpenCLI 能夠靈活地擴展功能，並支持多種網站和應用的自動化。資料流方面，使用者的命令會通過 CLI 發送到守護進程，然後由守護進程與瀏覽器擴展進行交互，實現即時控制。選擇這種架構的代價在於需要用戶手動安裝瀏覽器擴展，但這樣能夠提供更強大的控制能力。

擴展性方面，OpenCLI 可以輕鬆添加新的適配器和命令，並支持多種外部 CLI 工具的整合。

## 技術深入分析

OpenCLI 的核心技術機制是將網站和應用轉換為 CLI 命令，這是通過使用 TypeScript 和 JavaScript 實現的。它利用 Node.js 的非同步特性來處理多個命令的執行，並通過守護進程與瀏覽器擴展進行通訊。效能方面，OpenCLI 能夠處理多個網站的自動化操作，並且由於使用了現代的 JavaScript 特性，能夠保持較低的延遲。設計上，選擇使用 Node.js 是因為它的生態系統豐富，能夠輕鬆整合各種工具和庫。

依賴樹相對簡單，主要依賴於一些常用的庫，如 `chalk` 和 `commander`。在技術風險方面，OpenCLI 可能面臨網站反爬蟲機制的挑戰，這可能會影響其自動化能力。此外，對於某些網站的支持可能需要持續更新和維護，以應對網站的變化。整合方面，OpenCLI 可以輕鬆與現有的 CLI 工具鏈結合，並且提供了良好的 CI/CD 整合友好度，適合用於自動化測試和部署流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了安裝和使用的步驟。安裝過程順暢，但需要用戶手動安裝瀏覽器擴展，這可能會造成一些困惑。提供了良好的入門指南，並且文件有多語言版本，方便不同語言的使用者理解。

## 優缺點分析

> [!success] 優點
> - 支持多種網站和應用的自動化，功能強大。
> - 提供即時瀏覽器控制，適合需要互動操作的場景。
> - 強大的反檢測功能，保護使用者隱私。

> [!danger] 缺點
> - 需要安裝瀏覽器擴展，增加了安裝複雜度。
> - 在某些網站上可能會遇到反爬蟲機制，影響數據抓取。
> - 目前仍在活躍開發中，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 Node.js 20.0.0 以上版本
> - 需要 Chrome 或 Chromium 瀏覽器運行，並已登錄目標網站
> - 在某些網站上可能會遇到反爬蟲機制，影響數據抓取

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於 CLI 工具的集合，而 OpenCLI 提供了網站自動化和瀏覽器控制的功能，適合需要更廣泛操作的使用者。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | CLI-Anything 主要針對 CLI 的通用性，而 OpenCLI 更加專注於網站和應用的自動化，提供即時控制的能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 CLI 工具的集合，提供了多種工具的整合，但不支持網站自動化。 | 如果你的需求主要是管理 CLI 工具，而不需要網站自動化功能。 | low，因為兩者的使用方式相似。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 提供 CLI 的通用性，但缺乏即時瀏覽器控制的能力。 | 如果你需要一個更簡單的 CLI 管理工具，而不需要複雜的網站自動化。 | medium，因為需要重新學習命令和功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenCLI** | **boneyard** | **CLI-Anything** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 CLI 工具的集合，提供了多種工具的整合，但不支持網站自動化。 | 提供 CLI 的通用性，但缺乏即時瀏覽器控制的能力。 |
> | 遷移成本 | - | low，因為兩者的使用方式相似。 | medium，因為需要重新學習命令和功能。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是管理 CLI 工具，而不需要網站自動化功能 | 如果你需要一個更簡單的 CLI 管理工具，而不需要複雜的網站 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合用於開發和測試環境，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些網站上可能會遇到反爬蟲機制，導致數據抓取失敗
  - 解法：嘗試使用不同的適配器或手動操作
- [MEDIUM] 安裝瀏覽器擴展時可能會遇到權限問題
  - 解法：確保擴展已正確加載並授予必要的權限
- [MEDIUM] 某些命令在特定網站上可能無法正常工作
  - 解法：檢查網站的變更，並更新適配器

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速整合多個工具，提升開發效率。 |
| 大型企業的數據抓取任務 | 適合 | 支持多種網站的自動化，但需注意反爬蟲機制。 |
| 個人開發者的網站測試 | 非常適合 | 提供即時控制和自動化功能，適合快速迭代。 |
| 需要穩定生產環境的應用 | 不適合 | 目前仍在 beta 階段，可能存在不穩定性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到強大的網站自動化能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：OpenCLI 本身不需要高權限運行，但需要訪問瀏覽器和網絡。對於使用者的隱私保護措施良好，並且不會將憑證暴露給外部。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/jackwener--OpenCLI");
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
> const me = dv.page("Repos/jackwener--OpenCLI");
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
| Forks | 1.4k |
| Open Issues | 79 |
| Issue 解決率 | 70% (185 closed) |
| 最後推送 | 2026-04-09 |
| 建立日期 | 2026-03-14 |
| 官方網站 | [Link](https://opencli.info/) |
| Repo 大小 | 5.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jackwener/OpenCLI) |
| Topics | `ai-agent` `ai-agents` `ai-tools` `cli` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 99
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 511 |
> | [@Astro-Han](https://github.com/Astro-Han) | 50 |
> | [@ByteYue](https://github.com/ByteYue) | 29 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 12 |
> | [@0xsline](https://github.com/0xsline) | 8 |

**最新版本**：v1.7.0 (2026-04-09)

> [!info]- Release Notes
> ## What's Changed
> * refactor: make daemon persistent, remove idle timeout by @jackwener in https://github.com/jackwener/OpenCLI/pull/913
> * docs: remove daemon status/restart references by @jackwener in https://github.com/jackwener/OpenCLI/pull/914
> * fix(xiaoe): resolve missing episodes for long courses via auto-scroll by @Clearner1 in https://github.com/jackwener/OpenCLI/pull/904
> * feat: auto-close adapter windows, add OPENCLI_WINDOW_FOCUSED, document config by @jackwener in https://github.com/jackwener/OpenCLI/pull/915
> * fix(jianyu): stabilize search and add detail extraction contract by @leozejia in https://github.com/jackwener/OpenCLI/pull/912
> * fix(jianyu): avoid early API bucket cutoff by @jackwener in https://github.com/jackwener/OpenCLI/pull/916
> * chore: release v1.7.0 by @jackwener in https://github.com/jackwener/OpenCLI/pull/917
> * fix: restore cross-platform entries in package-lock.json by @jackwener in https://github.com/jackwener/OpenCLI/pull/919
> 
> ## New Contributors
> * @Clearner1 made their first contribution in https://github.com/jackwener/OpenCLI/pull/904
> 
> **Full Changelog**: https://github.com/jackwener/OpenCLI/compare/v1.6.10...v1.7.0

## 社群與生態

**社群活躍度**：社群活躍，定期更新和修復問題。
**連結**：[文件](https://opencli.info/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-09 ~ 2026-04-09）
> **活躍天數** 1 天 · **最新 commit** refactor(errors): unify error output as YAML envelope to stderr (#923)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#746](https://github.com/jackwener/OpenCLI/issues/746) | [Feature]: 允许安装在docker里的agents或者AI CLI控制远程的Chrome extension `enhancement` | 4 | 3 |
> | [#847](https://github.com/jackwener/OpenCLI/issues/847) | 代码安全审核的代码结果 | 3 | 1 |
> | [#283](https://github.com/jackwener/OpenCLI/issues/283) | [Feature]: 新增 ChatGPT Web 适配器，将现有桌面适配器重命名为 chatgpt-app | 2 | 1 |
> | [#55](https://github.com/jackwener/OpenCLI/issues/55) | [Bug] Windows: Antigravity CDP adapter fails due to MCP path | 2 | 1 |
> | [#792](https://github.com/jackwener/OpenCLI/issues/792) | [Bug]: [Windows]Failed to load module C:\Users\windows\.open `bug` | 1 | 5 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenCLI
> 
> > **Turn websites, browser sessions, Electron apps, and local tools into deterministic interfaces for humans and AI agents.**
> > Reuse your logged-in browser, automate live workflows, and crystallize repeated actions into reusable CLI commands.
> 
> [](./README.zh-CN.md)
> [](https://www.npmjs.com/package/@jackwener/opencli)
> [](https://nodejs.org)
> [](./LICENSE)
> 
> OpenCLI gives you one surface for three different kinds of automation:
> 
> - **Use built-in adapters** for sites like Bilibili, Zhihu, Xiaohongshu, Reddit, HackerNews, Twitter/X, and [many more](#built-in-commands).
> - **Drive a live browser directly** with `opencli browser` when an AI agent needs to click, type, extract, or inspect a page in real time.
> - **Generate new adapters** from real browser behavior with `explore`, `synthesize`, `generate`, and `cascade`.
> 
> It also works as a **CLI hub** for local tools such as `gh`, `docker`, and other binaries you register yourself, plus **desktop app adapters** for Electron apps like Cursor, Codex, Antigravity, ChatGPT, and Notion.
> 
> 
> ## Quick Start
> 
> 
> ### 1. Install OpenCLI
> 
> ```bash
> npm install -g @jackwener/opencli
> ```
> 
> 
> ### 2. Install the Browser Bridge Extension
> 
> OpenCLI connects to Chrome/Chromium through a lightweight Browser Bridge extension plus a small local daemon. The daemon auto-starts when needed.
> 
> 1. Download the latest `opencli-extension.zip` from the GitHub [Releases page](https://github.com/jackwener/opencli/releases).
> 2. Unzip it, open `chrome://extensions`, and enable **Developer mode**.
> 3. Click **Load unpacked** and select the unzipped folder.
> 
> 
> ### 3. Verify the setup
> 
> ```bash
> opencli doctor
> ```
> 
> 
> ## Prerequisites
> 
> - **Node.js**: >= 20.0.0 (or **Bun** >= 1.0)
> - **Chrome or Chromium** running and logged into the target site for browser-backed commands
> 
> > **Important**: Browser-backed commands reuse your Chrome/Chromium login session. If you get empty data or permission-like failures, first confirm the site is already open and authenticated in Chrome/Chromium.
> 
> 
> ## Highlights
> 
> - **CLI All Electron** — CLI-ify apps like Antigravity Ultra! Now AI can control itself natively.
> - **Browser Automation** — `browser` gives AI agents direct browser control: click, type, extract, screenshot — any interaction, fully scriptable.
> - **Website → CLI** — Turn any website into a deterministic CLI: 70+ pre-built adapters, or crystallize your own with `opencli record`.
> - **Account-safe** — Reuses Chrome/Chromium logged-in state; your credentials never leave the browser.
> - **Anti-detection built-in** — Patches `navigator.webdriver`, stubs `window.chrome`, fakes plugin lists, cleans ChromeDriver/Playwright globals, and strips CDP frames from Error stack traces. Extensive anti-fingerprinting and risk-control evasion measures baked in at every layer.
> - **AI Agent ready** — `explore` discovers APIs, `synthesize` generates adapters, `cascade` finds auth strategies, `browser` controls the browser directly.
> - **External CLI Hub** — Discover, auto-install, and passthrough commands to any external CLI (gh, obsidian, docker, etc). Zero setup.
> - **Self-healing setup** — `opencli doctor` diagnoses and auto-starts the daemon, extension, and live browser connectivity.
> - **Dynamic Loader** — Simply drop `.ts` adapters into the `clis/` folder for auto-registration.
> - **Zero LLM cost** — No tokens consumed at runtime. Run 10,000 times and pay nothing.
> - **Deterministic** — Same command, same output schema, every time. Pipeable, scriptable, CI-friendly.
> - **Broad coverage** — 79+ sites across global and Chinese platforms (Bilibili, Zhihu, Xiaohongshu, Reddit, HackerNews, and more), plus desktop Electron apps via CDP.
> 
> ---
> 
> 
> ## Configuration
> 
> | Variable | Default | Description |
> |----------|---------|-------------|
> | `OPENCLI_DAEMON_PORT` | `19825` | HTTP port for the daemon-extension bridge |
> | `OPENCLI_WINDOW_FOCUSED` | `false` | Set to `1` to open automation windows in the foreground (useful for debugging) |
> | `OPENCLI_BROWSER_CONNECT_TIMEOUT` | `30` | Seconds to wait for browser connection |
> | `OPENCLI_BROWSER_COMMAND_TIMEOUT` | `60` | Seconds to wait for a single browser command |
> | `OPENCLI_BROWSER_EXPLORE_TIMEOUT` | `120` | Seconds to wait for explore/record operations |
> | `OPENCLI_CDP_ENDPOINT` | — | Chrome DevTools Protocol endpoint for remote browser or Electron apps |
> | `OPENCLI_CDP_TARGET` | — | Filter CDP targets by URL substring (e.g. `detail.1688.com`) |
> | `OPENCLI_VERBOSE` | `false` | Enable verbose logging (`-v` flag also works) |
> | `OPENCLI_DIAGNOSTIC` | `false` | Set to `1` to capture structured diagnostic context on failures |
> 
> 
> ## Why OpenCLI
> 
> ---
> 
> 
> ### 4. Run your first commands
> 
> ```bash
> opencli list
> opencli hackernews top --limit 5
> opencli bilibili hot --limit 5
> ```
> 
> 
> ## For Humans
> 
> Use OpenCLI directly when you want a reliable command instead of a live browser session:
> 
> - `opencli list` shows every registered command.
> - `opencli  ` runs a built-in or generated adapter.
> - `opencli register mycli` exposes a local CLI through the same discovery surface.
> - `opencli doctor` helps diagnose browser connectivity.
> 
> 
> ## For AI Agents
> 
> Use two different entry points depending on the task:
> 
> - [`skills/opencli-explorer/SKILL.md`](./skills/opencli-explorer/SKILL.md): the entry point for creating new adapters — supports both fully automated generation (`opencli generate `) and manual exploration workflows.
> - [`skills/opencli-browser/SKILL.md`](./skills/opencli-browser/SKILL.md): the low-level control surface for live browsing, debugging, and manual intervention.
> 
> Install the packaged skills with:
> 
> ```bash
> npx skills add jackwener/opencli
> ```
> 
> Or install only what you need:
> 
> ```bash
> npx skills add jackwener/opencli --skill opencli-usage
> npx skills add jackwener/opencli --skill opencli-browser
> npx skills add jackwener/opencli --skill opencli-explorer
> npx skills add jackwener/opencli --skill opencli-oneshot
> ```
> 
> In practice:
> 
> - start with `opencli-explorer` when the agent needs a reusable command for a site (it covers both automated and manual flows)
> - use `opencli-browser` when the agent needs to inspect or steer the page directly
> 
> Available browser commands include `open`, `state`, `click`, `type`, `select`, `keys`, `wait`, `get`, `screenshot`, `scroll`, `back`, `eval`, `network`, `init`, `verify`, and `close`.
> 
> 
> ## Core Concepts
> 
> 
> ### `browser`: live control
> 
> Use `opencli browser` when the task is inherently interactive and the agent needs to operate the page directly.
> 
> 
> ### Built-in adapters: stable commands
> 
> Use site-specific commands such as `opencli hackernews top` or `opencli reddit hot` when the capability already exists and you want deterministic output.
> 
> 
> ### `explore` / `synthesize` / `generate`: create new CLIs
> 
> Use these commands when the site you need is not covered yet:
> 
> - `explore` inspects the page, network activity, and capability surface.
> - `synthesize` turns exploration artifacts into evaluate-based YAML adapters.
> - `generate` runs the verified generation path and returns either a usable command or a structured explanation of why completion was blocked or needs human review.
> 
> 
> ### `cascade`: auth strategy discovery
> 
> Use `cascade` to probe fallback auth paths such as public endpoints, cookies, and custom headers before you commit to an adapter design.
> 
> 
> ### CLI Hub and desktop adapters
> 
> OpenCLI is not only for websites. It can also:
> 
> - expose local binaries like `gh`, `docker`, `obsidian`, or custom tools through `opencli  ...`
> - control Electron desktop apps through dedicated adapters and CDP-backed integrations
> 
> 
> ## Update
> 
> ```bash
> npm install -g @jackwener/opencli@latest
> 
> 
> # If you use the packaged OpenCLI skills, refresh them too
> npx skills add jackwener/opencli
> ```
> 
> Or refresh only the skills you actually use:
> 
> ```bash
> npx skills add jackwener/opencli --skill opencli-usage
> npx skills add jackwener/opencli --skill opencli-browser
> npx skills add jackwener/opencli --skill opencli-explorer
> npx skills add jackwener/opencli --skill opencli-one

## 延伸閱讀

相關概念：[[自動化]] · [[CLI/TUI]] · [[瀏覽器自動化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[jackwener--twitter-cli|jackwener/twitter-cli]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]]

[GitHub](https://github.com/jackwener/OpenCLI) · [官方網站](https://opencli.info/)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "jackwener--OpenCLI"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "jackwener--OpenCLI"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "jackwener--OpenCLI" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "jackwener--OpenCLI"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CLI/TUI","瀏覽器自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "jackwener--OpenCLI" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/jackwener--OpenCLI");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "jackwener--OpenCLI" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "jackwener" AND file.name != "jackwener--OpenCLI"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/jackwener--OpenCLI");
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
> const me = dv.page("Repos/jackwener--OpenCLI");
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
> const me = dv.page("Repos/jackwener--OpenCLI");
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
> const me = dv.page("Repos/jackwener--OpenCLI");
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
> const me = dv.page("Repos/jackwener--OpenCLI");
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
