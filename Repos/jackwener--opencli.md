---
repo: jackwener/opencli
url: https://github.com/jackwener/opencli
owner: jackwener
owner_type: User
language: TypeScript
license: Apache-2.0
description: "Make Any Website & Tool Your CLI. A universal CLI Hub and AI-native runtime. Transform any website, Electron app, or local binary into a standardized command-line interface. Built for AI Agents to discover, learn, and execute tools seamlessly via a unified AGENT.md integration."
homepage: "https://opencli.info/"
stars: 13687
stars_per_day: 595
forks: 1253
open_issues: 93
created: 2026-03-14
pushed_at: 2026-04-06
first_seen: 2026-03-19
week: "2026-W12"
month: "2026-03"
category: "CLI 工具"
subcategory: "自動化"
release_tag: "v1.6.8"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-19
use_case: "將任何網站或工具轉換為 CLI，讓 AI 代理無縫操作。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-24"
contributor_count: 5
engagement: "low"
issue_close_rate: 64
repo_size_kb: 4481
readme_length: 10000
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-19"
star_history: "2026-03-19:1858,2026-03-19:1885,2026-03-20:2453,2026-03-20:2480,2026-03-21:3102,2026-03-21:3117,2026-03-22:3676,2026-03-23:4443,2026-03-24:5348,2026-03-25:6185,2026-03-26:6951,2026-03-29:8422,2026-03-31:9235,2026-04-07:13687"
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
  - "將任何網站或工具轉換為 CLI，讓 AI 代理無縫操作。"
---

# opencli

**13.7k** stars · **595** stars/天 · 建立 23 天前 · TypeScript · Apache-2.0

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

`v1.6.8` `easy-install`

`ai-agent` `ai-agents` `ai-tools` `cli`

> [!summary] 一句話摘要
> 將任何網站或工具轉換為 CLI，讓 AI 代理無縫操作。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (595 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要將網站和應用程式轉換為 CLI 的開發者，特別是那些在 AI 領域工作的工程師。
> **一句話重點** OpenCLI 的強大之處在於它能將網站和應用轉換為 CLI，並支持 AI 代理的自動化操作，這在開發者中具有很高的實用價值。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，得到強大的自動化工具，值得採用。

> [!abstract] 核心創新
> 將任何網站或應用程式轉換為 CLI，並支持 AI 代理的直接控制。

## 專案簡介

OpenCLI 是一個 CLI 工具，能將任何網站、Electron 應用程式或本地 CLI 工具轉換為命令行介面。用戶可以透過 `opencli register mycli` 將本地 CLI 註冊到 OpenCLI，並讓 AI 代理自動發現和調用這些工具。這個工具的核心在於重用 Chrome/Chromium 的登入狀態，並利用 AI 進行命令的發現和執行，這樣用戶不需要再次輸入憑證。OpenCLI 支持 70 多個預建適配器，並允許用戶自定義命令，透過 `opencli record` 將網站操作轉化為 CLI 命令。它還提供了強大的瀏覽器自動化功能，AI 代理可以直接控制瀏覽器進行點擊、輸入、截圖等操作。使用者可以透過 `opencli list` 查看所有可用命令，並使用 `opencli hackernews top --limit 5` 等命令來快速獲取數據。這個工具的賣點在於它的通用性和易於擴展的特性，特別適合需要自動化操作的開發者和 AI 代理使用者。

**技術棧**：`TypeScript 6.0.2` · `Node.js >= 20.0.0` · `Vitest`

## 重點功能

- 網站轉 CLI — 將任何網站轉換為命令行介面，支持 70+ 預建適配器。
- AI 代理支持 — 直接控制瀏覽器，執行點擊、輸入等操作，並生成可重用的 CLI 命令。
- 自動註冊本地 CLI — 使用 `opencli register mycli` 將本地工具註冊到 OpenCLI。
- 動態加載適配器 — 將 `.ts` 或 `.yaml` 適配器放入 `clis/` 資料夾即可自動註冊。
- 自我修復設置 — 使用 `opencli doctor` 檢查擴展和守護進程的連接狀態。

## 快速開始

1. 安裝瀏覽器橋接擴展
```bash
下載並解壓 opencli-extension.zip，然後在 chrome://extensions 中加載未打包擴展。
```
2. 安裝 OpenCLI
```bash
npm install -g @jackwener/opencli
```
3. 安裝 AI 技能
```bash
npx skills add jackwener/opencli
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 OpenCLI 和瀏覽器擴展。",
  "指令": "opencli bilibili hot --limit 5",
  "預期輸出": "返回 Bilibili 上的熱門視頻列表。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 23 天就累積 13687 stars（595/天），forks 1253（9.2%），這顯示出強勁的增長潛力。作者 jackwener 在開源社群中活躍，過去有多個成功專案，這次專案解決了將網站和應用程式轉換為 CLI 的需求，讓開發者能夠更方便地進行自動化操作。社群對於其功能的需求和對於 AI 代理的興趣也推動了這個專案的流行。特別是對於需要自動化和整合多個工具的開發者來說，這是一個非常實用的解決方案。

## 適合誰使用

**目標受眾**：需要將網站和應用程式轉換為 CLI 的開發者，特別是那些在 AI 領域工作的工程師。

> [!example] 使用場景
> - 後端工程師用它來將 Bilibili 的熱門視頻下載到本地，因為可以直接使用 `opencli bilibili hot --limit 5` 命令，節省了手動操作的時間。
> - 數據分析師用它來自動化從 Reddit 獲取數據的流程，因為可以透過 `opencli reddit hot --limit 10` 命令快速獲取熱門帖子。
> - AI 開發者用它來訓練 AI 代理進行網站操作，因為它支持直接控制瀏覽器並執行複雜的操作，如點擊和輸入。

## 架構分析

OpenCLI 採用模組化設計，將不同功能拆分為獨立的模組，這樣可以方便擴展和維護。使用 Node.js 作為後端，並通過 Chrome 擴展與瀏覽器進行通信，這樣可以重用用戶的登入狀態。資料流方面，命令首先由 CLI 接收，然後通過擴展發送到瀏覽器，最後執行操作並返回結果。選擇這種架構的好處是能夠快速集成多個網站和應用，代價是需要用戶手動安裝擴展。擴展性方面，通過動態加載適配器，使用者可以輕鬆擴展功能，但在某些情況下可能會遇到性能瓶頸，特別是在處理大量請求時。

## 技術深入分析

OpenCLI 的核心技術在於其模組化設計和與瀏覽器的深度集成。使用 TypeScript 和 Node.js 開發，確保了代碼的可維護性和擴展性。資料流方面，命令通過 CLI 接收後，通過 Chrome 擴展與瀏覽器進行通信，這樣可以重用用戶的登入狀態，並執行各種操作。這種設計使得 OpenCLI 能夠支持多種網站和應用，但也帶來了安裝擴展的複雜性。在效能方面，OpenCLI 可以處理大量的命令，但在高並發情況下可能會遇到瓶頸。選擇 Node.js 作為後端的好處是能夠快速開發和部署，但也可能面臨依賴管理的挑戰。整體而言，OpenCLI 提供了一個強大的解決方案，特別適合需要自動化操作的開發者和 AI 代理使用者。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和範例；安裝過程相對順暢，但需要手動安裝瀏覽器擴展；有良好的入門指南，文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 支持多種網站和應用的 CLI 轉換，擴展性強。
> - AI 代理可以直接控制瀏覽器，實現自動化操作。
> - 自我修復功能，減少用戶手動維護的需求。

> [!danger] 缺點
> - 需要用戶手動安裝瀏覽器擴展，增加了初始設置的複雜性。
> - 對於某些網站，可能需要額外的適配器或配置，增加了使用門檻。
> - 在處理大量請求時，可能會遇到性能瓶頸。

> [!warning] 注意事項
> - 僅支援 Node.js 20.0.0 以上版本。
> - 需要 Chrome 或 Chromium 瀏覽器並登入目標網站。
> - 對於某些網站，可能需要額外的適配器或配置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 提供類似的 CLI 轉換功能，但不支持 AI 代理的直接控制。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的自動化，但功能範圍較窄，無法廣泛應用於其他網站。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和備份，而非將網站轉換為 CLI。 | 如果你的需求主要是文件同步而非網站自動化，則可以選擇它。 | low，因為兩者的功能範圍不同，遷移不會很複雜。 |
| [CoderLuii/HolyClaude](https://github.com/CoderLuii/HolyClaude) | 專注於與 Claude 進行交互，而不是將網站轉換為 CLI。 | 如果你的主要需求是與 Claude 進行交互，則可以選擇它。 | medium，因為需要重新考慮命令的使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **opencli** | **parsync** | **HolyClaude** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步和備份，而非將網站轉換為 CLI。 | 專注於與 Claude 進行交互，而不是將網站轉換為 CLI。 |
> | 遷移成本 | - | low，因為兩者的功能範圍不同，遷移不會很複雜。 | medium，因為需要重新考慮命令的使用方式。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是文件同步而非網站自動化，則可以選擇它。 | 如果你的主要需求是與 Claude 進行交互，則可以選擇它。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目和小型團隊試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 上安裝時可能會遇到路徑問題，導致無法正確加載模組。
  - 解法：確保使用正確的路徑格式，或在 WSL 中運行。
- [MEDIUM] 某些網站的適配器可能不穩定，導致命令執行失敗。
  - 解法：檢查適配器的最新版本，必要時手動更新。
- [MEDIUM] 需要手動安裝瀏覽器擴展，可能會讓新手感到困惑。
  - 解法：參考官方文檔中的安裝步驟，確保按照指示操作。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的網站自動化項目 | 非常適合 | 提供了強大的自動化功能和多種適配器。 |
| 大型企業的核心系統 | 不適合 | 目前處於 beta 階段，穩定性不足。 |
| 開發者需要快速測試網站功能 | 適合 | 能快速將網站轉換為 CLI，節省開發時間。 |
| 需要高性能的自動化工具 | 普通 | 在高並發情況下可能會遇到性能瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到強大的自動化工具，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅需訪問瀏覽器的登入狀態，且不存取敏感資料。依賴鏈的信任程度良好，無已知的供應鏈風險。

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
| Forks | 1.3k |
| Open Issues | 93 |
| Issue 解決率 | 64% (163 closed) |
| 最後推送 | 2026-04-06 |
| 建立日期 | 2026-03-14 |
| 官方網站 | [Link](https://opencli.info/) |
| Repo 大小 | 4.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jackwener/opencli) |
| Topics | `ai-agent` `ai-agents` `ai-tools` `cli` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `chalk` `cli-table3` `commander` `js-yaml` `turndown` `undici` `ws` `@types/js-yaml` `@types/node` `@types/turndown` `@types/ws` `tsx` `typescript` `vitepress` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 99
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 474 |
> | [@Astro-Han](https://github.com/Astro-Han) | 47 |
> | [@ByteYue](https://github.com/ByteYue) | 29 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 9 |
> | [@0xsline](https://github.com/0xsline) | 7 |

**最新版本**：v1.6.8 (2026-04-05)

> [!info]- Release Notes
> ## What's Changed
> * refactor: centralize build path resolution by @jackwener in https://github.com/jackwener/opencli/pull/807
> * fix: add safety boundaries to diagnostic output by @jackwener in https://github.com/jackwener/opencli/pull/806
> * test: remove flaky bloomberg e2e tests by @jackwener in https://github.com/jackwener/opencli/pull/818
> * fix(scaffold): replace non-existent extract step with select by @jackwener in https://github.com/jackwener/opencli/pull/814
> * feat(cdp): implement session-level network capture for CDPPage by @jackwener in https://github.com/jackwener/opencli/pull/815
> * feat(operate): unify network capture + implement CDP consoleMessages by @jackwener in https://github.com/jackwener/opencli/pull/816
> * feat:add 1688 assets downloadable by @BruceLoveDecimal in https://github.com/jackwener/opencli/pull/820
> * feat(xueqiu): add kline and groups adapters by @williamxie1989 in https://github.com/jackwener/opencli/pull/809
> * feat(extension): v1.6.8 — fix scripting permission + refresh icons by @jackwener in https://github.com/jackwener/opencli/pull/822
> * refactor: extract shared scoring + consolidate time utils by @jackwener in https://github.com/jackwener/opencli/pull/823
> * feat(linux-do): split topic content into a dedicated command by @tiaot33 in https://github.com/jackwener/opencli/pull/821
> * refactor: remove scoring heuristic, use noise filter + structured metadata by @jackwener in https://github.com/jackwener/opencli/pull/824
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，定期更新和修復問題。
**連結**：[文件](https://opencli.info/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-05 ~ 2026-04-06）
> **活躍天數** 2 天 · **最新 commit** fix: include intercepted payloads in diagnostic (#829)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#746](https://github.com/jackwener/opencli/issues/746) | [Feature]: 允许安装在docker里的agents或者AI CLI控制远程的Chrome extension `enhancement` | 3 | 3 |
> | [#55](https://github.com/jackwener/opencli/issues/55) | [Bug] Windows: Antigravity CDP adapter fails due to MCP path | 2 | 1 |
> | [#792](https://github.com/jackwener/opencli/issues/792) | [Bug]: [Windows]Failed to load module C:\Users\windows\.open `bug` | 1 | 5 |
> | [#547](https://github.com/jackwener/opencli/issues/547) | 支持百度贴吧 (Tieba) 适配器 | 1 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # OpenCLI
> 
> > **Make any website, Electron App, or Local Tool your CLI.**
> > Zero risk · Reuse Chrome/Chromium login · AI-powered discovery · Universal CLI Hub
> 
> [](./README.zh-CN.md)
> [](https://www.npmjs.com/package/@jackwener/opencli)
> [](https://nodejs.org)
> [](./LICENSE)
> 
> A CLI tool that turns **any website**, **Electron app**, or **local CLI tool** into a command-line interface — Bilibili, Zhihu, 小红书, Twitter/X, Reddit, YouTube, Antigravity, `gh`, `docker`, and [many more](#built-in-commands) — powered by browser session reuse and AI-native discovery.
> 
> **Built for AI Agents** — Load the [`opencli-operate` skill](./skills/opencli-operate/SKILL.md) to give any AI agent (Claude Code, Cursor) direct browser control. Operate any website, then crystallize those interactions into reusable CLI commands. Configure `opencli list` in your `AGENT.md` or `.cursorrules` so the AI auto-discovers all available tools.
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
> > OpenCLI connects to your browser through a lightweight **Browser Bridge** Chrome/Chromium extension + micro-daemon (zero config, auto-start).
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
> 
> 
> # Install AI skills for Claude Code / Cursor
> npx skills add jackwener/opencli
> ```
> 
> 
> ### Install AI Skills
> 
> OpenCLI provides [skills](./skills/) for AI agents (Claude Code, etc.):
> 
> ```bash
> 
> # Install all OpenCLI skills
> npx skills add jackwener/opencli
> 
> 
> # Or install specific skills
> npx skills add jackwener/opencli --skill opencli-usage      # Command reference
> npx skills add jackwener/opencli --skill opencli-operate     # Browser automation for AI agents
> npx skills add jackwener/opencli --skill opencli-explorer    # Adapter development guide
> npx skills add jackwener/opencli --skill opencli-oneshot     # Quick command reference
> ```
> 
> ---
> 
> 
> ## Prerequisites
> 
> - **Node.js**: >= 20.0.0 (or **Bun** >= 1.0)
> - **Chrome or Chromium** running **and logged into the target site** (e.g. bilibili.com, zhihu.com, xiaohongshu.com, goofish.com).
> 
> > **⚠️ Important**: Browser commands reuse your Chrome/Chromium login session. You must be logged into the target website in Chrome or Chromium before running commands. If you get empty data or errors, check your login status first.
> 
> 
> ## Highlights
> 
> - **CLI All Electron** — CLI-ify apps like Antigravity Ultra! Now AI can control itself natively.
> - **Browser Automation** — `operate` gives AI agents direct browser control: click, type, extract, screenshot — any interaction, fully scriptable.
> - **Website → CLI** — Turn any website into a deterministic CLI: 70+ pre-built adapters, or crystallize your own with `opencli record`.
> - **Account-safe** — Reuses Chrome/Chromium logged-in state; your credentials never leave the browser.
> - **Anti-detection built-in** — Patches `navigator.webdriver`, stubs `window.chrome`, fakes plugin lists, cleans ChromeDriver/Playwright globals, and strips CDP frames from Error stack traces. Extensive anti-fingerprinting and risk-control evasion measures baked in at every layer.
> - **AI Agent ready** — `explore` discovers APIs, `synthesize` generates adapters, `cascade` finds auth strategies, `operate` controls the browser directly.
> - **External CLI Hub** — Discover, auto-install, and passthrough commands to any external CLI (gh, obsidian, docker, etc). Zero setup.
> - **Self-healing setup** — `opencli doctor` diagnoses and auto-starts the daemon, extension, and live browser connectivity.
> - **Dynamic Loader** — Simply drop `.ts` or `.yaml` adapters into the `clis/` folder for auto-registration.
> - **Zero LLM cost** — No tokens consumed at runtime. Run 10,000 times and pay nothing.
> - **Deterministic** — Same command, same output schema, every time. Pipeable, scriptable, CI-friendly.
> - **Broad coverage** — 79+ sites across global and Chinese platforms (Bilibili, Zhihu, Xiaohongshu, Reddit, HackerNews, and more), plus desktop Electron apps via CDP.
> 
> ---
> 
> 
> ### 3. Verify & Try
> 
> ```bash
> opencli doctor          # Check extension + daemon connectivity
> opencli daemon status   # Check daemon state (PID, uptime, memory)
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
> ### 4. Browser Automation — Make Websites Accessible for AI Agents
> 
> Point your AI agent (Claude Code, Cursor) to [`skills/opencli-operate/SKILL.md`](./skills/opencli-operate/SKILL.md). It has everything needed — full command reference, examples, and workflow.
> 
> Available commands: `open`, `state`, `click`, `type`, `select`, `keys`, `wait`, `get`, `screenshot`, `scroll`, `back`, `eval`, `network`, `init`, `verify`, `close`.
> 
> 
> ### Update
> 
> ```bash
> npm install -g @jackwener/opencli@latest
> ```
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
> | **hupu** | `hot` `search` `detail` `mentions` `reply` `like` `unlike` |
> | **twitter** | `trending` `search` `timeline` `bookmarks` `post` `download` `profile` `article` `like` `likes` `notifications` `reply` `reply-dm` `thread` `follow` `unfollow` `followers` `following` `block` `unblock` `bookmark` `unbookmark` `delete` `hide-reply` `accept` |
> | **reddit** | `hot` `frontpage` `popular` `search` `subreddit` `read` `user` `user-posts` `user-comments` `upvote` `upvoted` `save` `saved` `comment` `subscribe` |
> | **amazon** | `bestsellers` `search` `product` `offer` `discussion` `movers-shakers` `new-releases` |
> | **1688** | `search` `item` `assets` `download` `store` |
> | **gemini** | `new` `ask` `image` `deep-research` `deep-research-result` |
> | **yuanbao** | `new` `ask` |
> | **notebooklm** | `status` `list` `open` `current` `get` `history` `summary` `note-list` `notes-get` `source-list` `source-get` `source-fulltext` `source-guide` |
> | **spotify** | `auth` `status` `play` `pause` `next` `prev` `volume` `search` `queue` `shuffle` `repeat` |
> | **xianyu** | `search` `item` `chat` |
> | **xiaoe** | `courses` `detail` `catalog` `play-url` `content` |
> 
> 79+ adapters in total — **[→ see all supported sites & commands](./docs/adapters/index.md)**
> 
> 
> ## CLI Hub
> 
> OpenCLI acts as a universal hub for your existing command-line tools — unified discovery, pure passthrough execution, and auto-install (if a tool isn't installed, OpenCLI runs `brew install ` automatically before re-running the command).
> 
> | External 

## 延伸閱讀

相關概念：[[自動化]] · [[CLI/TUI]] · [[AI 代理]]

相關專案：[[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[jackwener--twitter-cli|jackwener/twitter-cli]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]]

[GitHub](https://github.com/jackwener/opencli) · [官方網站](https://opencli.info/)

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
> const concepts = ["自動化","CLI/TUI","AI 代理"];
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
