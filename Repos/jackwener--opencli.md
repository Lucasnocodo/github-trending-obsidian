---
repo: jackwener/opencli
url: https://github.com/jackwener/opencli
owner: jackwener
owner_type: User
language: TypeScript
license: Apache-2.0
description: "Make Any Website & Tool Your CLI. A universal CLI Hub and AI-native runtime. Transform any website, Electron app, or local binary into a standardized command-line interface. Built for AI Agents to discover, learn, and execute tools seamlessly via a unified AGENT.md integration."
homepage: "https://opencli.info/"
stars: 9235
stars_per_day: 577
forks: 773
open_issues: 86
created: 2026-03-14
pushed_at: 2026-03-30
first_seen: 2026-03-19
week: "2026-W12"
month: "2026-03"
category: "CLI 工具"
subcategory: "命令行介面"
release_tag: "v1.5.6"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-19
use_case: "將任何網站或工具轉換為命令行介面，讓 AI 代理無縫發現和執行工具。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-24"
contributor_count: 5
engagement: "low"
issue_close_rate: 55
repo_size_kb: 3857
readme_length: 9955
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-19"
star_history: "2026-03-19:1858,2026-03-19:1885,2026-03-20:2453,2026-03-20:2480,2026-03-21:3102,2026-03-21:3117,2026-03-22:3676,2026-03-23:4443,2026-03-24:5348,2026-03-25:6185,2026-03-26:6951,2026-03-29:8422,2026-03-31:9235"
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
  - "將任何網站或工具轉換為命令行介面，讓 AI 代理無縫發現和執行工具。"
---

# opencli

**9.2k** stars · **577** stars/天 · 建立 16 天前 · TypeScript · Apache-2.0

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

`v1.5.6` `easy-install`

`ai-agent` `ai-agents` `ai-tools` `cli`

> [!summary] 一句話摘要
> 將任何網站或工具轉換為命令行介面，讓 AI 代理無縫發現和執行工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (577 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要將網站和應用轉換為命令行工具的開發者，特別是那些希望利用 AI 進行自動化操作的團隊。
> **一句話重點** OpenCLI 不僅是一個命令行工具，更是一個將網站和應用轉換為 CLI 的平台，為開發者帶來極大的便利。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學習，2 小時整合，能夠快速實現網站操作，自動化流程，值得一試。

> [!abstract] 核心創新
> 提供一個通用的 CLI Hub，將各種網站和應用轉換為命令行介面，並支持 AI 驅動的自動化操作。

## 專案簡介

OpenCLI 是一個將任何網站、Electron 應用或本地 CLI 工具轉換為命令行介面的工具，透過瀏覽器會話重用和 AI 驅動的發現，讓使用者能夠輕鬆執行各種命令。使用者只需安裝一個輕量級的 Chrome 擴展和 OpenCLI，便可透過命令如 `opencli list` 來查看可用的命令。這個工具的賣點在於其能夠自動安裝缺失的工具，並且支持多達 50 多個網站的命令，包括 Bilibili、Zhihu 和 Twitter 等。技術上，OpenCLI 使用 TypeScript 和 JavaScript 開發，並依賴 Node.js 20.0.0 以上版本，具有良好的擴展性和靈活性。與其他工具相比，OpenCLI 不需要消耗 LLM 令牌，並且提供穩定的輸出格式，適合用於 CI/CD 流程。

與 Browser-Use 和 Crawl4AI 等工具相比，OpenCLI 提供更廣泛的網站支持和更簡單的命令行操作，特別適合需要從多個網站提取數據的情況。使用者可以使用 `opencli doctor` 命令檢查連接狀態，並透過 `opencli` 進行各種操作，如下載視頻或提取文章。這個工具的設計考量了安全性，重用 Chrome 登入狀態，並內建防檢測功能，確保使用者的數據安全。整體而言，OpenCLI 是一個功能強大且易於使用的命令行工具，適合需要自動化網頁操作的開發者和數據科學家。

**技術棧**：`TypeScript 6.0.2` · `Node.js >= 20.0.0` · `VitePress`

## 重點功能

- 支持多種網站 — 內建 50 多個網站的命令，如 `opencli bilibili hot --limit 5`。
- 自動安裝缺失工具 — 使用 `opencli register mycli` 註冊本地 CLI，並自動安裝缺失的工具。
- 安全性設計 — 重用 Chrome 登入狀態，確保用戶的憑證不會外洩。
- 防檢測功能 — 內建防檢測措施，保護用戶的操作不被網站識別。
- 多格式輸出 — 支持 `--format` 參數，輸出 JSON、YAML、CSV 等格式。

## 快速開始

1. 安裝 Chrome 擴展
```bash
下載並加載 `opencli-extension.zip` 到 Chrome 擴展中。
```
2. 安裝 OpenCLI
```bash
npm install -g @jackwener/opencli
```
3. 檢查連接狀態
```bash
opencli doctor
```

## 程式碼範例

```ts
{
  "前置條件": "需安裝 Chrome 擴展並登入目標網站。",
  "指令": "opencli bilibili hot --limit 5",
  "預期輸出": "返回 Bilibili 熱門視頻的 JSON 格式數據。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 16 天內累積 9235 stars（577/天），forks 773（8.4%），顯示出強勁的增長潛力。作者 jackwener 在開源界有一定的知名度，之前也有其他成功的專案。OpenCLI 解決了將網站和應用轉換為 CLI 的需求，這在現有工具中並不多見，特別是對於需要 AI 代理自動化操作的場景。此外，社群中對於其功能的需求和反饋也促進了其快速成長。這個工具的推出正好符合了開發者對於自動化和簡化工作流程的需求。

## 適合誰使用

**目標受眾**：需要將網站和應用轉換為命令行工具的開發者，特別是那些希望利用 AI 進行自動化操作的團隊。

> [!example] 使用場景
> - 數據科學家用它來從 Bilibili 自動提取熱門視頻數據，因為手動操作繁瑣且耗時。
> - 後端工程師用它來將 Electron 應用轉換為 CLI 工具，因為這樣可以更方便地進行自動化測試和操作。
> - 內容創作者用它來批量下載小紅書的圖片和視頻，因為這樣可以節省大量的時間和精力。

## 架構分析

OpenCLI 採用雙引擎架構，支持 YAML 聲明式數據管道和 TypeScript 注入的穩健瀏覽器運行時。這樣的設計使得用戶可以靈活地擴展和自定義命令。資料流方面，使用者可以透過 `opencli register` 將本地 CLI 註冊到系統中，並透過 `opencli list` 來查看可用的命令。

選擇這種架構的原因在於其能夠提供更高的靈活性和擴展性，然而這也意味著需要用戶具備一定的技術背景來進行自定義。擴展性方面，OpenCLI 能夠支持多達 50 多個網站的命令，這在其他同類工具中是相對少見的。整體而言，這種架構設計使得 OpenCLI 在功能上具有很大的優勢，但也要求用戶在使用時具備一定的技術能力。

## 技術深入分析

OpenCLI 的核心技術機制是將各種網站和應用轉換為命令行介面，這通過使用 Chrome 的 CDP（Chrome DevTools Protocol）來實現。這使得 OpenCLI 能夠在不需要額外的 API 認證的情況下，直接與網站進行交互。效能方面，OpenCLI 能夠快速響應用戶的命令，並提供穩定的輸出格式，這對於需要在 CI/CD 流程中使用的用戶來說是非常重要的。選擇 TypeScript 作為開發語言的原因在於其靜態類型檢查能夠提高代碼的可維護性和可讀性。

依賴樹方面，OpenCLI 的依賴相對輕量，主要依賴於一些常用的庫，如 `chalk` 和 `commander`，這使得整體安裝和運行都相對簡單。在技術風險方面，OpenCLI 可能會面臨來自網站的防爬蟲措施，這可能會導致某些命令無法正常工作。此外，對於依賴於 Chrome 瀏覽器的設計，未來可能會面臨兼容性問題。整合方面，OpenCLI 能夠輕鬆與現有的 CI/CD pipeline 整合，並且支持多種 IDE 的開發環境，這使得其在開發過程中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟，包含必要的範例和注意事項。安裝過程相對順暢，只需安裝 Chrome 擴展和使用 npm 安裝 OpenCLI。文件中有良好的 getting started guide，幫助新手快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一些障礙。

## 優缺點分析

> [!success] 優點
> - 支持多種網站的命令，方便用戶進行數據提取和操作。
> - 安全性設計良好，重用 Chrome 登入狀態，保護用戶數據。
> - 自動安裝缺失工具，減少用戶的配置工作量。

> [!danger] 缺點
> - 需要用戶在 Chrome 中登入目標網站，增加了使用門檻。
> - 對於某些網站的防爬蟲機制可能會導致命令失效。
> - 目前仍在快速迭代中，可能存在不穩定的情況。

> [!warning] 注意事項
> - 僅支援 Node.js >= 20.0.0。
> - 需要 Chrome 瀏覽器並登入目標網站，否則無法執行命令。
> - 對於某些網站，可能會因為防爬蟲機制而無法正常工作。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [jackwener/bilibili-cli](https://github.com/jackwener/bilibili-cli) | 專注於 Bilibili 的命令行工具，但功能範圍較窄，無法支持其他網站。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 提供類似的 CLI 功能，但不支持自動安裝缺失工具，使用上較為繁瑣。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於網頁抓取，但缺乏 OpenCLI 的多網站支持和安全性設計。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和備份，而非廣泛的網站命令行操作。 | 如果你的需求主要是文件同步和備份，parsync 會是更合適的選擇。 | low，因為功能範圍較窄，轉移成本低。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 提供 AI 代理的功能，但不支持將網站轉換為 CLI。 | 如果你需要專注於 AI 代理的功能，而不需要網站操作，HolyClaude 是不錯的選擇。 | medium，因為需要重新設計工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **opencli** | **parsync** | **HolyClaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步和備份，而非廣泛的網站命令行操作。 | 提供 AI 代理的功能，但不支持將網站轉換為 CLI。 |
> | 遷移成本 | - | low，因為功能範圍較窄，轉移成本低。 | medium，因為需要重新設計工作流程。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是文件同步和備份，parsync 會是更合適 | 如果你需要專注於 AI 代理的功能，而不需要網站操作，Hol |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目和測試，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 上使用時，某些適配器可能因為路徑問題而無法正常工作。
  - 解法：使用 WSL 或確保路徑格式正確。
- [MEDIUM] 某些網站的防爬蟲機制可能會導致命令失效。
  - 解法：嘗試使用不同的命令或檢查網站的使用條款。
- [MEDIUM] 安裝過程中可能會遇到依賴問題。
  - 解法：確保所有依賴都已正確安裝，並使用 `npm install` 重新安裝。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要從多個網站提取數據的數據科學家 | 非常適合 | 支持多種網站的命令，方便進行數據提取。 |
| 希望將 Electron 應用轉換為 CLI 的開發者 | 適合 | 能夠輕鬆將應用轉換為命令行工具。 |
| 需要高效的網頁抓取的開發者 | 普通 | 雖然支持多個網站，但對於大規模抓取可能不如專門工具。 |
| 不需要 CLI 功能的普通用戶 | 不適合 | 該工具主要針對開發者和技術用戶。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，能夠快速實現網站操作，自動化流程，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：OpenCLI 主要依賴於 Chrome 瀏覽器的安全性，並不需要高權限操作。它不會存取敏感資料，但需要用戶在 Chrome 中登入目標網站。

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
| Forks | 773 |
| Open Issues | 86 |
| Issue 解決率 | 55% (104 closed) |
| 最後推送 | 2026-03-30 |
| 建立日期 | 2026-03-14 |
| 官方網站 | [Link](https://opencli.info/) |
| Repo 大小 | 3.8 MB |
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
> | [@jackwener](https://github.com/jackwener) | 403 |
> | [@Astro-Han](https://github.com/Astro-Han) | 37 |
> | [@ByteYue](https://github.com/ByteYue) | 29 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 8 |
> | [@0xsline](https://github.com/0xsline) | 6 |

**最新版本**：v1.5.6 (2026-03-30)

> [!info]- Release Notes
> ## What's Changed
> * fix(tests): update E2E exit code assertions for usage errors by @jackwener in https://github.com/jackwener/opencli/pull/567
> * docs: sync docs with codebase (v1.5.5, exit codes, hub table, new adapters) by @jackwener in https://github.com/jackwener/opencli/pull/575
> * fix(weread): harden reader fallback and search mapping by @Astro-Han in https://github.com/jackwener/opencli/pull/562
> * feat: add 知识星球(zsxq) site adapter by @xtftbwvfp in https://github.com/jackwener/opencli/pull/571
> * feat(xiaohongshu): use CDP DOM.setFileInputFiles for image upload by @james0x-sudo in https://github.com/jackwener/opencli/pull/574
> * feat(band): add Band.us adapter — bands, posts, mentions, post commands by @kanghouchao in https://github.com/jackwener/opencli/pull/532
> * feat(spotify): add Spotify playback adapter by @bhutano in https://github.com/jackwener/opencli/pull/560
> * fix(zsxq): require active group context by @jackwener in https://github.com/jackwener/opencli/pull/579
> * feat(xiaohongshu): add cover image URL to user notes output by @jeffdeen in https://github.com/jackwener/opencli/pull/572
> * feat(douyin): add user-videos command with top comments by @sunbird89629 in https://github.com/jackwener/opencli/pull/554
> * refactor(douyin): share user video public api by @jackwener in https://github.com/jackwener/opencli/pull/580
> * feat(doubao): add history, detail, meeting-summary by @svcvit in https://github.com/jackwener/opencli/pull/566
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，定期更新和修復問題。
**連結**：[文件](https://opencli.info/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-29 ~ 2026-03-30）
> **活躍天數** 2 天 · **最新 commit** fix(xiaohongshu): support full URL/short link and fix video extraction (#615)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#496](https://github.com/jackwener/opencli/issues/496) | Extension v1.5.0 release package contains wrong manifest ver | 2 | 0 |
> | [#55](https://github.com/jackwener/opencli/issues/55) | [Bug] Windows: Antigravity CDP adapter fails due to MCP path | 2 | 1 |
> | [#605](https://github.com/jackwener/opencli/issues/605) | [Feature]: 希望迁移 skill.md 放到统一的项目根目录 skills `enhancement` | 1 | 1 |
> | [#547](https://github.com/jackwener/opencli/issues/547) | 支持百度贴吧 (Tieba) 适配器 | 1 | 2 |
> | [#468](https://github.com/jackwener/opencli/issues/468) | [Feature]: 希望可以把skill上传到整合平台 `enhancement` | 1 | 1 |

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
> | **xiaohongshu** | `search` `note` `comments` `feed` `user` `download` `publish` `notifications` `creator-notes` `creator-notes-summary` `creator-note-detail` `creator-profile` `creator-stats` |
> | **bilibili** | `hot` `search` `history` `feed` `ranking` `download` `comments` `dynamic` `favorite` `following` `me` `subtitle` `user-videos` |
> | **tieba** | `hot` `posts` `search` `read` |
> | **twitter** | `trending` `search` `timeline` `bookmarks` `post` `download` `profile` `article` `like` `likes` `notifications` `reply` `reply-dm` `thread` `follow` `unfollow` `followers` `following` `block` `unblock` `bookmark` `unbookmark` `delete` `hide-reply` `accept` |
> | **reddit** | `hot` `frontpage` `popular` `search` `subreddit` `user` `user-posts` `user-comments` `read` `save` `saved` `subscribe` `upvote` `upvoted` `comment` |
> | **spotify** | `auth` `status` `play` `pause` `next` `prev` `volume` `search` `queue` `shuffle` `repeat` |
> 
> 66+ adapters in total — **[→ see all supported sites & commands](./docs/adapters/index.md)**
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
> | **lark-cli** | Lark/Feishu — messages, docs, calendar, tasks, 200+ commands | `opencli lark-cli calendar +agenda` |
> | **dingtalk** | DingTalk — cross-platform CLI for DingTalk's full suite, designed for humans and AI agents | `opencli dingtalk msg send --to user "hello"` |
> | **wecom** | WeCom/企业微信 — CLI for WeCom open platform, for humans and AI agents | `opencli wecom msg send --to user "hello"` |
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
> | **Codex** | Drive OpenAI Codex CLI agent headlessly | [Doc](./docs/adapters/d

## 延伸閱讀

相關概念：[[自動化測試]] · [[CLI/TUI]] · [[資料提取]]

相關專案：[[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[jackwener--twitter-cli|jackwener/twitter-cli]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[Narcooo--inkos|Narcooo/inkos]]

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
> const concepts = ["自動化測試","CLI/TUI","資料提取"];
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
