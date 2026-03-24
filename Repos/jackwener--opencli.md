---
repo: jackwener/opencli
url: https://github.com/jackwener/opencli
owner: jackwener
owner_type: User
language: TypeScript
license: Apache-2.0
description: "Make Any Website & Tool Your CLI. A universal CLI Hub and AI-native runtime. Transform any website, Electron app, or local binary into a standardized command-line interface. Built for AI Agents to discover, learn, and execute tools seamlessly via a unified AGENT.md integration."
homepage: "https://opencli.info/"
stars: 5348
stars_per_day: 594
forks: 440
open_issues: 48
created: 2026-03-14
pushed_at: 2026-03-23
first_seen: 2026-03-19
week: "2026-W12"
month: "2026-03"
category: "CLI 工具"
subcategory: "自動化"
release_tag: "v1.3.3"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-19
use_case: "將任何網站或工具轉換為 CLI，讓 AI 代理無縫執行。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-24"
contributor_count: 5
engagement: "low"
issue_close_rate: 54
repo_size_kb: 2645
readme_length: 9947
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-19"
star_history: "2026-03-19:1858,2026-03-19:1885,2026-03-20:2453,2026-03-20:2480,2026-03-21:3102,2026-03-21:3117,2026-03-22:3676,2026-03-23:4443,2026-03-24:5348"
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
  - "將任何網站或工具轉換為 CLI，讓 AI 代理無縫執行。"
---

# opencli

**5.3k** stars · **594** stars/天 · 建立 9 天前 · TypeScript · Apache-2.0

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

`v1.3.3` `easy-install`

`ai-agent` `ai-agents` `ai-tools` `cli`

> [!summary] 一句話摘要
> 將任何網站或工具轉換為 CLI，讓 AI 代理無縫執行。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (594 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要將多個網站和工具整合為 CLI 的開發者，特別是對自動化和 AI 代理有需求的團隊。
> **一句話重點** OpenCLI 不僅是一個 CLI 工具，更是一個將 AI 代理與多網站整合的創新平台。

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
> **結論** 花 3 小時學習，2 小時整合，得到自動化多網站操作的能力，值得一試。

> [!abstract] 核心創新
> 能將任何網站和 Electron 應用轉換為 CLI，並支持 AI 代理的無縫執行。

## 專案簡介

OpenCLI 是一個將任何網站、Electron 應用或本地 CLI 工具轉換為命令行介面的工具，透過重用 Chrome 登入狀態和 AI 原生發現來實現。使用者只需在 `AGENT.md` 中配置指令，AI 便能透過 `opencli list` 發現可用工具，並學會如何完美調用所有工具。這個工具的賣點在於它能將 Electron 應用 CLI 化，讓 AI 能夠原生控制自己，開啟無限可能。技術上，OpenCLI 使用了 Node.js 和 TypeScript，並依賴 Chrome 擴展和微守護進程進行輕量級的瀏覽器連接，無需手動配置。與其他 CLI 工具相比，OpenCLI 的獨特之處在於它能夠直接與多個網站進行互動，並且能夠自動註冊本地 CLI 工具，這在現有的 CLI 生態中是相對少見的。

使用者可以通過 `opencli list` 查看所有命令，並使用如 `opencli bilibili hot --limit 5` 這樣的指令來獲取特定網站的熱點資訊。這個工具的設計考量了安全性，因為它重用 Chrome 的登入狀態，確保用戶的憑證不會離開瀏覽器。使用者在使用過程中可能會遇到 Windows 平台的特定問題，例如 CDP 適配器失敗，但社群已經在積極回應這些問題。整體而言，OpenCLI 是一個具有潛力的工具，特別適合需要自動化多個網站操作的開發者和 AI 代理。未來六個月內，預期會有更多的網站和工具被支持，進一步擴展其功能和應用場景。

**技術棧**：`Node.js >= 20.0.0` · `TypeScript` · `Chrome Extension`

## 重點功能

- CLI All Electron — 將任何 Electron 應用轉換為 CLI 工具，讓 AI 能原生控制。
- 帳戶安全 — 重用 Chrome 的登入狀態，憑證不會離開瀏覽器。
- AI 代理準備 — `explore` 發現 API，`synthesize` 生成適配器，`cascade` 找到認證策略。
- 外部 CLI 中樞 — 自動發現、安裝並轉發命令到任何外部 CLI（如 gh、docker 等）。
- 自我修復設置 — `opencli doctor` 診斷並自動啟動守護進程和擴展。
- 動態加載 — 將 `.ts` 或 `.yaml` 適配器放入 `clis/` 文件夾以自動註冊。
- 雙引擎架構 — 同時支持 YAML 聲明數據管道和強大的瀏覽器運行時 TypeScript 注入。

## 快速開始

1. 全域安裝 OpenCLI
```bash
npm install -g @jackwener/opencli
```
2. 查看所有可用命令
```bash
opencli list
```
3. 從 Bilibili 獲取熱門影片
```bash
opencli bilibili hot --limit 5
```

## 程式碼範例

```ts
[
  "# 前置條件：需要安裝 yt-dlp",
  "opencli xiaohongshu download abc123 --output ./xhs",
  "# 預期輸出：下載指定 Xiaohongshu 筆記的圖片和影片"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天內累積 5348 stars（594/天），forks 440（8.2%），顯示出強勁的增長潛力。作者 jackwener 之前有其他 CLI 工具的開發經驗，這個專案解決了將多個網站和工具整合為統一 CLI 的痛點，之前的解決方案往往需要繁瑣的配置或無法直接互動。最近的推文和社群討論也促進了這個專案的曝光，特別是對於 AI 代理的支持。這個工具的成功也反映了對於自動化和 CLI 工具需求的上升，尤其是在開發者社群中。forks/stars 比率為 8.2%，顯示出許多人正在實際修改和使用這個工具，而不僅僅是觀望。

## 適合誰使用

**目標受眾**：需要將多個網站和工具整合為 CLI 的開發者，特別是對自動化和 AI 代理有需求的團隊。

> [!example] 使用場景
> - 後端工程師用它來自動化從 Twitter 獲取最新趨勢，因為手動查詢 API 需要時間，使用 opencli 可以快速獲取資料。
> - 數據分析師用它來從 Zhihu 獲取熱門問題的回答，因為這樣可以節省手動查詢的時間，並且能夠自動化數據收集。
> - AI 研究人員用它來測試和調用不同的 API，因為它支持多個網站的 CLI 操作，能夠快速驗證模型的效果。

## 架構分析

OpenCLI 採用雙引擎架構，結合了 YAML 聲明數據管道和 TypeScript 注入，這使得它在功能上既靈活又強大。資料流方面，使用者的命令透過 Chrome 擴展與微守護進程進行連接，這樣的設計使得使用者無需手動配置，降低了使用門檻。選擇 Node.js 和 TypeScript 的原因在於其生態系統的豐富性和開發效率，但這也意味著對 Node.js 環境的依賴。這種架構的優勢在於能快速擴展支持多個網站，但在某些情況下可能會面臨性能瓶頸，特別是在處理大量請求時。整體而言，這種設計使得 OpenCLI 能夠在自動化和 CLI 工具的整合上達到一個新的高度。

## 技術深入分析

OpenCLI 的核心技術機制在於它能夠將多個網站和 Electron 應用轉換為命令行介面，這是透過 Chrome 擴展和微守護進程實現的。這種設計使得用戶可以直接在命令行中執行網站操作，並且能夠重用 Chrome 的登入狀態，這在安全性上提供了保障。效能方面，OpenCLI 能夠快速處理多個請求，但在高流量的情況下可能會面臨性能瓶頸。選擇 Node.js 和 TypeScript 的原因在於它們的生態系統支持和開發效率，但這也意味著對於 Node.js 環境的依賴。技術風險方面，依賴 Chrome 瀏覽器的設計可能在未來的版本中面臨兼容性問題。整合方面，OpenCLI 可以輕鬆與現有的 CLI 工具鏈進行整合，但在某些情況下可能需要額外的適配器或包裝。整體而言，OpenCLI 在自動化和 CLI 工具的整合上展現了強大的潛力，特別是在 AI 代理的應用上。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程相對順暢，但需要注意 Chrome 登入狀態。提供了良好的入門指南，文件目前僅有英文版本。

## 優缺點分析

> [!success] 優點
> - 能夠將多個網站和工具整合為統一的 CLI。
> - 重用 Chrome 登入狀態，確保安全性。
> - AI 代理支持，能夠自動學習和調用工具。

> [!danger] 缺點
> - 僅支援特定版本的 Node.js。
> - 需要 Chrome 瀏覽器並已登入目標網站。
> - 在 Windows 平台上可能會遇到特定問題。

> [!warning] 注意事項
> - 僅支援 Node.js >= 20.0.0
> - 需要 Chrome 瀏覽器並已登入目標網站
> - 在 Windows 平台上可能會遇到 CDP 適配器失敗的問題
> - 某些網站的命令可能會受到限制或不完全支持

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 專注於 Twitter 的 CLI 工具，功能較為單一，適合只需操作 Twitter 的用戶。 |
| [jackwener/xiaohongshu-cli](https://github.com/jackwener/xiaohongshu-cli) | 專注於小紅書的 CLI 工具，功能有限，無法支持多網站操作。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 提供更廣泛的 CLI 工具支持，但不具備 OpenCLI 的 AI 集成功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步的 CLI 工具，功能較為單一，無法支持多網站操作。 | 如果你的需求僅限於文件同步，且不需要多網站整合。 | low，因為功能範圍較小，轉移成本低。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供更專注的網頁抓取功能，但不具備 OpenCLI 的多網站支持。 | 如果你的主要需求是抓取特定網站的數據。 | medium，因為需要重新學習新的命令和配置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **opencli** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步的 CLI 工具，功能較為單一，無法支持多網站操作。 | 提供更專注的網頁抓取功能，但不具備 OpenCLI 的多網站支持。 |
> | 遷移成本 | - | low，因為功能範圍較小，轉移成本低。 | medium，因為需要重新學習新的命令和配置。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於文件同步，且不需要多網站整合。 | 如果你的主要需求是抓取特定網站的數據。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 上使用時，CDP 適配器可能會失敗
  - 解法：檢查 MCP 路徑和頁面目標設置
- [MEDIUM] 某些網站的命令可能無法正常工作
  - 解法：確認已登入並檢查命令格式
- [MEDIUM] 使用過程中可能會遇到性能瓶頸
  - 解法：減少同時請求數量以提高穩定性

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊需要自動化多個網站的數據收集 | 非常適合 | OpenCLI 能夠快速整合多個網站的操作，節省時間。 |
| 大型企業需要穩定的 CLI 工具進行數據分析 | 普通 | 雖然功能強大，但仍在 beta 階段，穩定性需觀察。 |
| 個人開發者希望快速測試多個網站的 API | 非常適合 | OpenCLI 提供了簡單的命令行介面，方便進行測試。 |
| 需要一個穩定的生產環境工具 | 不適合 | 目前尚未達到生產就緒的狀態，存在風險。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到自動化多網站操作的能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取 Chrome 瀏覽器的登入狀態，依賴鏈中無已知的供應鏈風險。

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
| Forks | 440 |
| Open Issues | 48 |
| Issue 解決率 | 54% (56 closed) |
| 最後推送 | 2026-03-23 |
| 建立日期 | 2026-03-14 |
| 官方網站 | [Link](https://opencli.info/) |
| Repo 大小 | 2.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jackwener/opencli) |
| Topics | `ai-agent` `ai-agents` `ai-tools` `cli` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `chalk` `cli-table3` `commander` `js-yaml` `turndown` `ws` `@types/js-yaml` `@types/node` `@types/turndown` `@types/ws` `tsx` `typescript` `vitepress` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 98
>     "JavaScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 324 |
> | [@Astro-Han](https://github.com/Astro-Han) | 16 |
> | [@ByteYue](https://github.com/ByteYue) | 12 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 5 |
> | [@himself65](https://github.com/himself65) | 4 |

**最新版本**：v1.3.3 (2026-03-23)

> [!info]- Release Notes
> ## What's New
> 
> ### 🛡️ Browser Stealth Anti-Detection
> 
> Automatic injection of 7 anti-detection patches when controlling browsers via CDP or daemon mode, preventing websites from detecting opencli's automation:
> 
> - `navigator.webdriver` masking
> - `window.chrome` stub (headless only)
> - `navigator.plugins` / `languages` fallback (headless only)
> - `Permissions.query` normalization
> - Dynamic `cdc_*` / `__playwright` / `__puppeteer` artifact cleanup
> - CDP stack trace sanitization via `Error.prototype.stack` getter override
> 
> ### Other Changes
> - Docs sync with current command registry (#318)
> - Extracted shared modules: `getErrorMessage` and `DEFAULT_DAEMON_PORT` (#313)
> 
> ## What's Changed
> * docs: clarify release follow-up steps by @jackwener in https://github.com/jackwener/opencli/pull/279
> * feat: add weixin article download adapter & abstract download helpers by @jackwener in https://github.com/jackwener/opencli/pull/280
> * feat(xiaohongshu): add publish command for 图文 note automation by @stone16 in https://github.com/jackwener/opencli/pull/276
> * feat: add Doubao browser adapter by @helloimcx in https://github.com/jackwener/opencli/pull/277
> * fix: add turndown dependency to package.json by @jackwener in https://github.com/jackwener/opencli/pull/288
> * feat(doubao-app): add Doubao AI desktop app CLI adapter by @jackwener in https://github.com/jackwener/opencli/pull/289
> * docs: sync adapter lists with codebase by @jackwener in https://github.com/jackwener/opencli/pull/291
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，經常有更新和回應。
**連結**：[文件](https://opencli.info/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-23 ~ 2026-03-23）
> **活躍天數** 1 天 · **最新 commit** refactor(extension): reuse async detach() in registerListeners (#328)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#59](https://github.com/jackwener/opencli/issues/59) | Feature Request: 轨迹模拟（Human-like Interaction Patterns）防止封号 `enhancement` | 13 | 0 |
> | [#55](https://github.com/jackwener/opencli/issues/55) | [Bug] Windows: Antigravity CDP adapter fails due to MCP path | 2 | 1 |
> | [#144](https://github.com/jackwener/opencli/issues/144) | feat: 新增独立 browser 命令组以支持 CDP 启动与双后端运行 | 1 | 0 |

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
> 1. Go to the GitHub [Releases page](https://github.com/jackwener/opencli/releases) and download the latest `opencli-extension.zip`.
> 2. Unzip the file and open `chrome://extensions`, enable **Developer mode** (top-right toggle).
> 3. Click **Load unpacked** and select the unzipped folder.
> 
> **Method 2: Load Source (For Developers)**
> 1. Open `chrome://extensions` and enable **Developer mode**.
> 2. Click **Load unpacked** and select the `extension/` directory from this repository.
> 
> That's it! The daemon auto-starts when you run any browser command. No tokens, no manual configuration.
> 
> > **Tip**: Use `opencli doctor` for ongoing diagnosis:
> > ```bash
> > opencli doctor            # Check extension + daemon connectivity
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
> - **Self-healing setup** — `opencli doctor` diagnoses and auto-starts the daemon, extension, and live browser connectivity.
> - **Dynamic Loader** — Simply drop `.ts` or `.yaml` adapters into the `clis/` folder for auto-registration.
> - **Dual-Engine Architecture** — Supports both YAML declarative data pipelines and robust browser runtime TypeScript injections.
> 
> 
> # 1. Deep Explore — discover APIs, infer capabilities, detect framework
> opencli explore https://example.com --site mysite
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
> | **twitter** | `trending` `bookmarks` `profile` `search` `timeline` `thread` `following` `followers` `notifications` `post` `reply` `delete` `like` `article` `follow` `unfollow` `bookmark` `unbookmark` `download` `accept` `reply-dm` `block` `unblock` `hide-reply` | Browser |
> | **reddit** | `hot` `frontpage` `popular` `search` `subreddit` `read` `user` `user-posts` `user-comments` `upvote` `save` `comment` `subscribe` `saved` `upvoted` | Browser |
> | **cursor** | `status` `send` `read` `new` `dump` `composer` `model` `extract-code` `ask` `screenshot` `history` `export` | Desktop |
> | **bilibili** | `hot` `search` `me` `favorite` `history` `feed` `subtitle` `dynamic` `ranking` `following` `user-videos` `download` | Browser |
> | **codex** | `status` `send` `read` `new` `dump` `extract-diff` `model` `ask` `screenshot` `history` `export` | Desktop |
> | **chatwise** | `status` `new` `send` `read` `ask` `model` `history` `export` `screenshot` | Desktop |
> | **doubao** | `status` `new` `send` `read` `ask` | Browser |
> | **doubao-app** | `status` `new` `send` `read` `ask` `screenshot` `dump` | Desktop |
> | **notion** | `status` `search` `read` `new` `write` `sidebar` `favorites` `export` | Desktop |
> | **discord-app** | `status` `send` `read` `channels` `servers` `search` `members` | Desktop |
> | **v2ex** | `hot` `latest` `topic` `node` `user` `member` `replies` `nodes` `daily` `me` `notifications` | Public / Browser |
> | **xueqiu** | `feed` `hot-stock` `hot` `search` `stock` `watchlist` `earnings-date` | Browser |
> | **antigravity** | `status` `send` `read` `new` `dump` `extract-code` `model` `watch` | Desktop |
> | **chatgpt** | `status` `new` `send` `read` `ask` | Desktop |
> | **xiaohongshu** | `search` `notifications` `feed` `user` `download` `publish` `creator-notes` `creator-note-detail` `creator-notes-summary` `creator-profile` `creator-stats` | Browser |
> | **apple-podcasts** | `search` `episodes` `top` | Public |
> | **xiaoyuzhou** | `podcast` `podcast-episodes` `episode` | Public |
> | **zhihu** | `hot` `search` `question` `download` | Browser |
> | **weixin** | `download` | Browser |
> | **youtube** | `search` `video` `transcript` | Browser |
> | **boss** | `search` `detail` `recommend` `joblist` `greet` `batchgreet` `send` `chatlist` `chatmsg` `invite` `mark` `exchange` `resume` `stats` | Browser |
> | **coupang** | `search` `add-to-cart` | Browser |
> | **bbc** | `news` | Public |
> | **bloomberg** | `main` `markets` `economics` `industries` `tech` `politics` `businessweek` `opinions` `feeds` `news` | Public / Browser |
> | **ctrip** | `search` | Browser |
> | **devto** | `top` `tag` `user` | Public |
> | **arxiv** | `search` `paper` | Public |
> | **wikipedia** | `search` `summary` `random` `trending` | Public |
> | **hackernews** | `top` `new` `best` `ask` `show` `jobs` `search` `user` | Public |
> | **linkedin** | `search` | Browser |
> | **reuters** | `search` | Browser |
> | **smzdm** | `search` | Browser |
> | **weibo** | `hot` `search` | Browser |
> | **yahoo-finance** | `quote` | Browser |
> | **sinafinance** | `news` | 🌐 Public |
> | **barchart** | `quote` `options` `greeks` `flow` | Browser |
> | **chaoxing** | `assignments` `exams` | Browser |
> | **grok** | `ask` | Browser |
> | **hf** | `top` | Public |
> | **jike** | `feed` `search` `create` `like` `comment` `repost` `notifications` `post` `topic` `user` | Browser |
> | **jimeng** | `generate` `history` | Browser |
> | **yollomi** | `generate` `video` `edit` `upload` `models` 

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[AI 代理]]

相關專案：[[jackwener--twitter-cli|jackwener/twitter-cli]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[Narcooo--inkos|Narcooo/inkos]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[AlpinDale--parsync|AlpinDale/parsync]]

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
> const concepts = ["CLI/TUI","自動化","AI 代理"];
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
