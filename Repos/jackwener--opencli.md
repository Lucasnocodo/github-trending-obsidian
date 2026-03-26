---
repo: jackwener/opencli
url: https://github.com/jackwener/opencli
owner: jackwener
owner_type: User
language: TypeScript
license: Apache-2.0
description: "Make Any Website & Tool Your CLI. A universal CLI Hub and AI-native runtime. Transform any website, Electron app, or local binary into a standardized command-line interface. Built for AI Agents to discover, learn, and execute tools seamlessly via a unified AGENT.md integration."
homepage: "https://opencli.info/"
stars: 6951
stars_per_day: 632
forks: 558
open_issues: 57
created: 2026-03-14
pushed_at: 2026-03-25
first_seen: 2026-03-19
week: "2026-W12"
month: "2026-03"
category: "CLI 工具"
subcategory: "命令行整合"
release_tag: "v1.4.1"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-19
use_case: "將任何網站或工具轉換為命令行介面，為 AI 代理提供無縫的工具發現和執行。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-24"
contributor_count: 5
engagement: "low"
issue_close_rate: 54
repo_size_kb: 2829
readme_length: 10000
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-19"
star_history: "2026-03-19:1858,2026-03-19:1885,2026-03-20:2453,2026-03-20:2480,2026-03-21:3102,2026-03-21:3117,2026-03-22:3676,2026-03-23:4443,2026-03-24:5348,2026-03-25:6185,2026-03-26:6951"
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
  - "將任何網站或工具轉換為命令行介面，為 AI 代理提供無縫的工具發現和執行。"
---

# opencli

**7.0k** stars · **632** stars/天 · 建立 11 天前 · TypeScript · Apache-2.0

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

`v1.4.1` `easy-install`

`ai-agent` `ai-agents` `ai-tools` `cli`

> [!summary] 一句話摘要
> 將任何網站或工具轉換為命令行介面，為 AI 代理提供無縫的工具發現和執行。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (632 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要將多個網站和應用整合到命令行的開發者和數據科學家。
> **一句話重點** OpenCLI 不僅是個命令行工具，更是一個強大的 AI 代理整合平台，能夠將多種網站和應用無縫連接。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，得到高效的命令行工具整合，值得一試。

> [!abstract] 核心創新
> 將任何網站和 Electron 應用轉換為命令行介面，並支持 AI 代理的無縫整合。

## 專案簡介

OpenCLI 是一個將任何網站、Electron 應用或本地 CLI 工具轉換為命令行介面的工具。用戶只需在 Chrome 中登錄目標網站，然後透過 OpenCLI 的命令來執行操作，例如 `opencli list` 來查看可用命令。這個工具的賣點在於它能夠重用 Chrome 的登錄狀態，並且支持 AI 代理的無縫整合，讓 AI 可以自動學習如何調用各種工具。技術上，OpenCLI 使用了 TypeScript 和 JavaScript，並依賴於 Chrome 擴展和微守護進程來實現與瀏覽器的連接。這使得它能夠在無需額外配置的情況下運行，並且支持多平台（Linux/macOS/Windows）。

與其他工具相比，OpenCLI 的獨特之處在於它能夠將 Electron 應用轉換為 CLI 工具，並且提供了廣泛的預建適配器，涵蓋了超過 50 個網站和應用。使用者可以輕鬆地透過命令行下載媒體內容或從網站提取數據，並且支持 YAML 和 TypeScript 的動態加載。這個工具的設計考量了用戶的安全性，因為它不會將用戶的憑證暴露給外部。對於需要在命令行中操作多個網站和工具的開發者來說，OpenCLI 是一個非常合適的選擇。未來幾個月內，預計會有更多的功能和適配器被加入，進一步擴展其應用範圍。

**技術棧**：`TypeScript 6.0.2` · `Node.js >= 20.0.0` · `VitePress 1.6.4`

## 重點功能

- 多平台支持 — 在 Linux、macOS 和 Windows 上運行，無需額外配置。
- AI 代理整合 — 透過 `AGENT.md` 配置，AI 能夠自動學習如何調用各種工具。
- Electron 應用 CLI — 將任何 Electron 應用轉換為命令行工具，支持自動化操作。
- 動態加載適配器 — 透過將 `.ts` 或 `.yaml` 文件放入 `clis/` 文件夾，自動註冊新命令。
- 下載媒體內容 — 支持從多個平台（如 Bilibili、Twitter、Zhihu）下載視頻和文章。

## 快速開始

1. 全局安裝 OpenCLI
```bash
npm install -g @jackwener/opencli
```
2. 查看所有可用命令
```bash
opencli list
```
3. 從 Bilibili 下載熱門視頻
```bash
opencli bilibili hot --limit 5
```

## 程式碼範例

```ts
{
  "前置條件": "確保已安裝 Chrome 並登錄目標網站。",
  "指令": "opencli bilibili download BV1xxx --output ./bilibili",
  "預期輸出": "下載指定的 Bilibili 視頻到指定目錄。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天就累積 6951 stars（632/天），forks 558（8.0%），顯示出強勁的增長潛力。作者 jackwener 之前在 CLI 工具開發方面有豐富經驗，這個專案解決了將多種網站和工具整合到 CLI 的需求，特別是對於 AI 代理的支持。近期的推廣活動和社群反饋也促進了其曝光率。這個工具的設計使得它能夠在無需額外配置的情況下運行，這在當前的開發生態中是非常受歡迎的。forks/stars 比率為 8.0%，顯示出相對較高的實際修改和使用需求。

## 適合誰使用

**目標受眾**：需要將多個網站和應用整合到命令行的開發者和數據科學家。

> [!example] 使用場景
> - 數據科學家用它來從 Twitter 下載特定用戶的媒體，因為這樣可以快速獲取所需數據，避免手動操作。
> - 後端工程師用它來將 Bilibili 的熱門視頻下載到本地，因為這樣可以方便地進行數據分析和處理。
> - 產品經理用它來從 Zhihu 提取文章並轉換為 Markdown 格式，因為這樣可以快速整理和分享內容。

## 架構分析

OpenCLI 採用單一的 Node.js 應用架構，通過 Chrome 擴展與瀏覽器進行通信。這樣的設計使得用戶無需進行繁瑣的配置，並能夠快速上手。資料流方面，OpenCLI 透過微守護進程來處理命令，並將結果返回給用戶。這種設計的優勢在於簡化了用戶的操作流程，但也可能在面對高並發請求時出現性能瓶頸。未來擴展性方面，OpenCLI 可以通過增加新的適配器來支持更多的網站和應用，這使得其具有良好的擴展性。

## 技術深入分析

OpenCLI 的核心技術在於其能夠將網站和 Electron 應用轉換為命令行介面，這是通過使用 Chrome 擴展和微守護進程來實現的。這種設計使得用戶可以在命令行中直接操作網站，而無需手動進行繁瑣的操作。效能方面，OpenCLI 能夠在多個平台上運行，並且支持高並發請求，但在面對大量請求時可能會出現性能瓶頸。選擇 Node.js 作為主要開發語言的原因在於其非同步處理能力，這使得 OpenCLI 能夠高效地處理多個請求。技術風險方面，依賴於 Chrome 的登錄狀態可能會在某些情況下導致用戶無法使用工具，這需要在設計上進行考量。整合方面，OpenCLI 與主流的 CLI 工具（如 GitHub CLI 和 Docker）有良好的相容性，並且能夠通過自動安裝功能來簡化用戶的使用流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟和範例，讓新手能夠快速上手。安裝過程順暢，無需複雜的配置。文件中提供了中文文檔，對於中文用戶非常友好。

## 優缺點分析

> [!success] 優點
> - 支持多種網站和應用的命令行操作，功能強大。
> - AI 代理整合，能夠自動學習和調用工具。
> - 使用 Chrome 登錄狀態，保障用戶安全。

> [!danger] 缺點
> - 需要 Chrome 瀏覽器，對於不使用 Chrome 的用戶不友好。
> - 對於某些網站，可能會受到反爬蟲機制的影響。
> - 功能依賴於用戶的登錄狀態，無法離線使用。

> [!warning] 注意事項
> - 需要 Chrome 瀏覽器並登錄目標網站。
> - 對於某些網站，可能會受到反爬蟲機制的影響。
> - 目前不支持 Windows 以外的桌面應用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 專注於 Twitter 的命令行工具，功能較為單一，適合只需操作 Twitter 的用戶。 |
| [jackwener/bilibili-cli](https://github.com/jackwener/bilibili-cli) | 專注於 Bilibili 的下載和操作，功能範圍有限，不支持其他網站。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 提供更廣泛的 CLI 工具整合，但缺乏 OpenCLI 的 AI 代理支持和 Electron 應用整合功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和備份，而 OpenCLI 則是針對命令行工具的整合。 | 如果你的需求是文件同步而非命令行操作，則選擇它。 | low，因為兩者的使用場景不同，切換不會影響工作流程。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 專注於 Telegram 的 WebSocket 代理，而 OpenCLI 提供更廣泛的網站和應用支持。 | 如果你的主要需求是 Telegram 的代理服務，則選擇它。 | medium，因為需要重新調整工作流程以適應不同的工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **opencli** | **parsync** | **tg-ws-proxy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步和備份，而 OpenCLI 則是針對命令行工具的整合。 | 專注於 Telegram 的 WebSocket 代理，而 OpenCLI 提供更廣泛的網站和應用支持。 |
> | 遷移成本 | - | low，因為兩者的使用場景不同，切換不會影響工作流程。 | medium，因為需要重新調整工作流程以適應不同的工具。 |
> | 適用場景 | 主要場景 | 如果你的需求是文件同步而非命令行操作，則選擇它。 | 如果你的主要需求是 Telegram 的代理服務，則選擇它。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合開發者進行試用和探索，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 上使用時，Antigravity CDP 適配器可能會失敗，導致無法正常運行。
  - 解法：檢查 MCP 路徑和頁面目標設置，必要時使用 WSL。
- [MEDIUM] 某些網站的反爬蟲機制可能會導致數據提取失敗。
  - 解法：嘗試使用不同的命令或檢查登錄狀態。
- [MEDIUM] 在使用過程中，可能會出現 Chrome 擴展未加載的情況。
  - 解法：使用 `opencli doctor` 命令檢查連接狀態。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊需要從多個網站提取數據 | 非常適合 | OpenCLI 提供了多種網站的支持，能夠快速提取數據。 |
| 大型企業需要高效的命令行工具整合 | 適合 | 雖然功能強大，但在高並發請求時可能會出現性能瓶頸。 |
| 個人開發者希望自動化操作多個網站 | 非常適合 | OpenCLI 的 AI 代理整合能夠簡化操作流程。 |
| 不熟悉命令行的用戶希望使用 CLI 工具 | 不適合 | 需要一定的命令行基礎知識才能有效使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到高效的命令行工具整合，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅依賴於 Chrome 的登錄狀態，並不存取敏感資料。對於 CI/CD 的使用也相對安全，因為不會暴露用戶憑證。

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
| Forks | 558 |
| Open Issues | 57 |
| Issue 解決率 | 54% (68 closed) |
| 最後推送 | 2026-03-25 |
| 建立日期 | 2026-03-14 |
| 官方網站 | [Link](https://opencli.info/) |
| Repo 大小 | 2.8 MB |
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
> | [@jackwener](https://github.com/jackwener) | 360 |
> | [@Astro-Han](https://github.com/Astro-Han) | 24 |
> | [@ByteYue](https://github.com/ByteYue) | 20 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 8 |
> | [@0xsline](https://github.com/0xsline) | 5 |

**最新版本**：v1.4.1 (2026-03-25)

> [!info]- Release Notes
> ## What's Changed
> * ci: add cross-platform E2E and smoke test support (Linux/macOS/Windows) by @ByteYue in https://github.com/jackwener/opencli/pull/411
> * chore: release v1.4.0 by @jackwener in https://github.com/jackwener/opencli/pull/413
> * feat(extension): Chrome Web Store readiness — popup UI, privacy policy, CSP by @jackwener in https://github.com/jackwener/opencli/pull/415
> * feat: add filter option for twitter search by @stormslowly in https://github.com/jackwener/opencli/pull/410
> * feat: add url field to 9 search adapters (67% -> 97% coverage) by @AllenS0104 in https://github.com/jackwener/opencli/pull/414
> * feat(douyin): add Douyin creator center adapter (14 commands, 8-phase publish pipeline) by @nianyi778 in https://github.com/jackwener/opencli/pull/416
> * feat(weibo,youtube): add Weibo commands and YouTube channel/comments by @jackwener in https://github.com/jackwener/opencli/pull/418
> * fix: remove incorrect gws external CLI entry by @jackwener in https://github.com/jackwener/opencli/pull/419
> * fix: remove nonexistent readwise external CLI entry by @jackwener in https://github.com/jackwener/opencli/pull/420
> * chore: trim adapter test suite to bilibili, zhihu, v2ex by @jackwener in https://github.com/jackwener/opencli/pull/421
> * fix(test): gate extended browser e2e tests behind OPENCLI_E2E=1 by @jackwener in https://github.com/jackwener/opencli/pull/423
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍度中等，定期更新和回應問題。
**連結**：[文件](https://opencli.info/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-25 ~ 2026-03-25）
> **活躍天數** 1 天 · **最新 commit** feat(linux-do): refactor adapters with unified feed, tags, user commands (#434)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
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
> - **External CLI Hub** — Discover, auto-install, and passthrough commands to any external CLI (gh, obsidian, docker, etc). Zero setup.
> - **Self-healing setup** — `opencli doctor` diagnoses and auto-starts the daemon, extension, and live browser connectivity.
> - **Dynamic Loader** — Simply drop `.ts` or `.yaml` adapters into the `clis/` folder for auto-registration.
> - **Dual-Engine Architecture** — Supports both YAML declarative data pipelines and robust browser runtime TypeScript injections.
> 
> 
> # 1. Deep Explore — discover APIs, infer capabilities, detect framework
> opencli explore https://example.com --site mysite
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
> 
> ### Update
> 
> ```bash
> npm install -g @jackwener/opencli@latest
> ```
> 
> 
> ### External CLI Hub
> 
> OpenCLI acts as a universal hub for your existing command-line tools. It provides unified discovery, automatic installation, and pure passthrough execution.
> 
> | External CLI | Description | Commands Example |
> |--------------|-------------|------------------|
> | **gh** | GitHub CLI | `opencli gh pr list --limit 5` |
> | **obsidian** | Obsidian vault management | `opencli obsidian search query="AI"` |
> | **docker** | Docker command-line interface | `opencli docker ps` |
> | **readwise** | Readwise & Reader CLI | `opencli readwise login` |
> | **gws** | Google Workspace CLI — Docs, Sheets, Drive, Gmail, Calendar | `opencli gws docs list` |
> 
> **Zero Configuration**: OpenCLI purely passes your inputs to the underlying binary via standard I/O streams. The external CLI works exactly as it naturally would, maintaining its standard output formats.
> 
> **Auto-Installation**: If you run `opencli gh ...` and `gh` is not installed on your system, OpenCLI will automatically try to install it using your system's package manager (e.g., `brew install gh`) before seamlessly re-running the command.
> 
> **Register Your Own**:
> Add any local CLI to your OpenCLI registry so AI agents can automatically discover it via the `opencli list` command.
> ```bash
> opencli register mycli
> ```
> 
> 
> ### Desktop App Adapters
> 
> Each desktop adapter has its own detailed documentation with commands reference, setup guide, and examples:
> 
> If you want to add support for a new Electron desktop app, start with [docs/guide/electron-app-cli.md](./docs/guide/electron-app-cli.md) and the deeper [Electron guide](./docs/advanced/electron.md).
> 
> | App | Description | Doc |
> |-----|-------------|-----|
> | **Cursor** | Control Cursor IDE — Composer, chat, code extraction | [Doc](./docs/adapters/desktop/cursor.md) |
> | **Codex** | Drive OpenAI Codex CLI agent headlessly | [Doc](./docs/adapters/desktop/codex.md) |
> | **Antigravity** | Control Antigravity Ultra from terminal | [Doc](./docs/adapters/desktop/antigravity.md) |
> | **ChatGPT** | Automate ChatGPT macOS desktop app | [Doc](./docs/adapters/desktop/chatgpt.md) |
> | **ChatWise** | Multi-LLM client (GPT-4, Claude, Gemini) | [Doc](./docs/adapters/desktop/chatwise.md) |
> | **Notion** | Search, read, write Notion pages | [Doc](./docs/adapters/desktop/notion.md) |
> | **Discord** | Di

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[API 設計]]

相關專案：[[jackwener--twitter-cli|jackwener/twitter-cli]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[Narcooo--inkos|Narcooo/inkos]]

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
> const concepts = ["CLI/TUI","自動化","API 設計"];
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
