---
repo: jackwener/OpenCLI
url: https://github.com/jackwener/OpenCLI
owner: jackwener
owner_type: User
language: JavaScript
license: Apache-2.0
description: "Make Any Website & Tool Your CLI. A universal CLI Hub and AI-native runtime. Transform any website, Electron app, or local binary into a standardized command-line interface. Built for AI Agents to discover, learn, and execute tools seamlessly via a unified AGENT.md integration."
homepage: "https://opencli.info/"
stars: 14962
stars_per_day: 554
forks: 1414
open_issues: 82
created: 2026-03-14
pushed_at: 2026-04-10
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
use_case: "將任何網站或工具轉換為 CLI，讓 AI 代理無縫執行任務。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-24"
contributor_count: 5
engagement: "low"
issue_close_rate: 69
repo_size_kb: 6801
readme_length: 9976
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-19"
star_history: "2026-03-19:1858,2026-03-19:1885,2026-03-20:2453,2026-03-20:2480,2026-03-21:3102,2026-03-21:3117,2026-03-22:3676,2026-03-23:4443,2026-03-24:5348,2026-03-25:6185,2026-03-26:6951,2026-03-29:8422,2026-03-31:9235,2026-04-07:13687,2026-04-08:14071,2026-04-09:14431,2026-04-10:14715,2026-04-11:14962"
tags:
  - github
  - "category/cli_工具"
  - "lang/javascript"
  - easy_install
  - "topic/ai_agent"
  - "topic/ai_agents"
  - "topic/ai_tools"
  - "topic/cli"
aliases:
  - "OpenCLI"
  - "jackwener/OpenCLI"
  - "將任何網站或工具轉換為 CLI，讓 AI 代理無縫執行任務。"
---

# OpenCLI

**15.0k** stars · **554** stars/天 · 建立 27 天前 · JavaScript · Apache-2.0

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
> 將任何網站或工具轉換為 CLI，讓 AI 代理無縫執行任務。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (554 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要將網站和應用自動化的開發者，特別是對 AI 代理有需求的團隊。
> **一句話重點** OpenCLI 讓網站自動化變得簡單，並且支持即時操作，這在其他工具中並不常見。

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
> **結論** 花 5 小時學習，3 小時整合，得到高效的網站自動化，值得投入。

> [!abstract] 核心創新
> OpenCLI 是一個將網站和應用轉換為 CLI 的工具，支持即時操作和自動化。

## 專案簡介

OpenCLI 的核心機制是將網站、Electron 應用和本地工具轉換為標準化的命令行介面，讓使用者和 AI 代理能夠自動化操作。使用者可以透過 `opencli` 命令直接調用各種內建適配器，例如 `opencli hackernews top --limit 5` 來獲取 HackerNews 的熱門文章。這樣的設計使得重複的操作可以簡化為可重用的 CLI 命令，並且支持動態加載新的適配器。技術上，OpenCLI 使用 Node.js 作為基礎，並依賴 Chrome DevTools Protocol (CDP) 來實現對瀏覽器的直接控制，這使得它能夠在實時環境中執行點擊、輸入和數據提取等操作。與其他 CLI 工具相比，如 `gh` 或 `docker`，OpenCLI 提供了更高的靈活性，因為它不僅支持本地工具，還能夠直接控制瀏覽器，這在需要即時互動的情境下特別有用。

使用者在設置過程中需要安裝一個輕量級的瀏覽器擴展和本地守護進程，這樣可以確保命令的執行不會受到權限問題的影響。實際使用中，OpenCLI 的效能表現良好，能夠處理多個網站的自動化任務，但在 Windows 環境下可能會遇到一些特定的兼容性問題。這個專案目前處於穩定階段，適合中小型團隊進行自動化任務的開發。未來，OpenCLI 可能會進一步擴展其適配器庫，並增強對更多網站和應用的支持。對於需要將網站自動化並希望簡化 CLI 操作的開發者來說，OpenCLI 是一個非常合適的選擇。

**技術棧**：`Node.js >= 21.0.0` · `TypeScript` · `Chrome DevTools Protocol`

## 重點功能

- 多種內建適配器 — 支持 70+ 個網站的自動化命令，如 `opencli hackernews top`。
- 即時瀏覽器控制 — 使用 `opencli browser` 命令直接操作瀏覽器，支持點擊、輸入等操作。
- 動態加載適配器 — 將 `.js` 文件放入 `clis/` 目錄即可自動註冊新命令。
- CLI Hub 功能 — 統一管理本地 CLI 工具，如 `gh` 和 `docker`，無需額外配置。
- 抗檢測功能 — 內建多種防指紋識別的措施，保護用戶隱私。

## 快速開始

1. 安裝 OpenCLI
```bash
npm install -g @jackwener/opencli
```
2. 安裝瀏覽器擴展
```bash
下載並加載 `opencli-extension.zip`
```
3. 驗證安裝
```bash
opencli doctor
```

## 程式碼範例

```js
{
  "前置條件": "已安裝 OpenCLI 並配置好瀏覽器擴展。",
  "指令": "opencli hackernews top --limit 5",
  "預期輸出": "返回 HackerNews 上的前 5 條熱門文章。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 27 天內累積 14962 stars（554/天），forks 1414（9.5%），顯示出強烈的社群興趣。這位作者 jackwener 之前的作品也在自動化和 CLI 工具領域有一定影響力。OpenCLI 解決了將網站和應用轉換為 CLI 的需求，這在現有工具中並不常見，特別是對於需要即時互動的場景。最近的推廣活動和社群討論也促進了它的曝光度。這個工具的出現是因為現代開發中對於自動化和簡化工作流程的需求不斷上升，尤其是在 AI 代理的應用場景中。高達 9.5% 的 forks/stars 比率顯示出許多人在積極修改和使用這個工具，而不是單純觀望。

## 適合誰使用

**目標受眾**：需要將網站和應用自動化的開發者，特別是對 AI 代理有需求的團隊。

> [!example] 使用場景
> - 前端工程師用它來將 Bilibili 的熱門視頻轉換為 CLI 命令，因為這樣可以快速獲取數據，避免手動操作的繁瑣。
> - 數據分析師用它來自動化從 Reddit 獲取熱門討論的過程，因為這樣可以節省時間並提高效率。
> - DevOps 工程師用它來管理 Docker 容器，因為它能夠統一管理多個 CLI 工具，減少切換成本。

## 架構分析

OpenCLI 採用模組化架構，核心功能由 Node.js 提供，並使用 Chrome DevTools Protocol 進行瀏覽器控制。這種設計使得 OpenCLI 能夠在多個平台上運行，並且能夠輕鬆擴展新的適配器。資料流方面，使用者的命令首先由 CLI 解析，然後透過本地守護進程與瀏覽器進行通信。選擇 Node.js 作為基礎語言的好處是其強大的生態系統和社群支持，但代價是需要用戶安裝 Node.js 環境。擴展性方面，OpenCLI 可以輕鬆地添加新的適配器，但過多的適配器可能會導致性能下降，特別是在處理大量請求時。

## 技術深入分析

OpenCLI 的核心技術在於其使用 Node.js 和 Chrome DevTools Protocol 來實現對瀏覽器的控制。這使得它能夠在實時環境中進行操作，並且支持多種網站的自動化。效能方面，OpenCLI 能夠處理多個網站的請求，但在高負載時可能會出現延遲。選擇 Node.js 作為開發語言的好處在於其非同步處理能力，但這也意味著需要用戶具備一定的 Node.js 知識。設計上，OpenCLI 允許用戶動態加載適配器，這提高了靈活性，但也可能導致管理上的複雜性。技術風險方面，過多的適配器可能會影響性能，特別是在高並發的情況下。與主流框架的整合相對簡單，但需要用戶自行配置環境，這對於新手來說可能是一個挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含安裝步驟和範例。安裝過程相對順暢，但需要配置瀏覽器擴展，對新手可能有一定挑戰。文件目前僅提供英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 靈活性高，支持多種網站和應用的自動化。
> - 內建抗檢測功能，保護用戶隱私。
> - 動態加載適配器，方便擴展和使用。

> [!danger] 缺點
> - 安裝過程需要配置瀏覽器擴展，對新手不太友好。
> - 在 Windows 環境下的兼容性問題。
> - 對 Node.js 版本有要求，限制了使用範圍。

> [!warning] 注意事項
> - 僅支援 Node.js 版本 >= 21.0.0。
> - 需要 Chrome 或 Chromium 瀏覽器運行並已登錄目標網站。
> - 在 Windows 環境下可能會遇到兼容性問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供 CLI 工具的集合，但不支持即時瀏覽器控制，適合靜態命令的管理。 |
| [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | 專注於自動化測試，但不具備 OpenCLI 的廣泛網站適配器支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和備份，而非網站自動化，適合需要文件管理的場景。 | 如果你的需求主要是文件同步和備份，而不是網站自動化，則可以選擇它。 | low，因為功能範圍不同，遷移成本低。 |
| [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | 專注於自動化測試，與 OpenCLI 的網站自動化功能不同。 | 如果你的主要需求是進行自動化測試，則 OpenHarness 更合適。 | medium，因為需要重新設計測試流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **OpenCLI** | **parsync** | **OpenHarness** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步和備份，而非網站自動化，適合需要文件管理的場景。 | 專注於自動化測試，與 OpenCLI 的網站自動化功能不同。 |
> | 遷移成本 | - | low，因為功能範圍不同，遷移成本低。 | medium，因為需要重新設計測試流程。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是文件同步和備份，而不是網站自動化，則可以選 | 如果你的主要需求是進行自動化測試，則 OpenHarness |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊進行自動化任務的試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境下，某些適配器可能無法正常工作。
  - 解法：使用 WSL 或在 Linux 環境中運行。
- [MEDIUM] 安裝過程中可能會遇到瀏覽器擴展加載失敗的情況。
  - 解法：確保開啟了開發者模式並正確選擇了文件夾。
- [MEDIUM] 某些網站的自動化命令可能因變更而失效。
  - 解法：定期檢查更新並重新生成適配器。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司需要自動化網站數據提取 | 非常適合 | 提供多種網站的自動化適配器，能快速上手。 |
| 大型企業需要穩定的自動化測試環境 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |
| 需要將多個 CLI 工具統一管理的團隊 | 適合 | 提供 CLI Hub 功能，能夠統一管理多個工具。 |
| 對於不熟悉 Node.js 的開發者 | 普通 | 安裝過程需要一定的技術背景。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的網站自動化，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> OpenCLI 本身不需要高權限運行，但需訪問用戶的瀏覽器數據。依賴的庫和模組需定期檢查安全性，避免使用過時的依賴。

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
| Open Issues | 82 |
| Issue 解決率 | 69% (186 closed) |
| 最後推送 | 2026-04-10 |
| 建立日期 | 2026-03-14 |
| 官方網站 | [Link](https://opencli.info/) |
| Repo 大小 | 6.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jackwener/OpenCLI) |
| Topics | `ai-agent` `ai-agents` `ai-tools` `cli` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 71
>     "TypeScript" : 29
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jackwener](https://github.com/jackwener) | 526 |
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

> [!abstract] 最近 10 次 commit（2026-04-10 ~ 2026-04-10）
> **活躍天數** 1 天 · **最新 commit** fix: batch quality improvements — dedupe completion, unify logging, fix docs (#945)

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
> - **Node.js**: >= 21.0.0 (or **Bun** >= 1.0)
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
> - **Dynamic Loader** — Simply drop `.js` adapters into the `clis/` folder for auto-registration.
> - **Zero LLM cost** — No tokens consumed at runtime. Run 10,000 times and pay nothing.
> - **Deterministic** — Same command, same output schema, every time. Pipeable, scriptable, CI-friendly.
> - **Broad coverage** — 87+ sites across global and Chinese platforms (Bilibili, Zhihu, Xiaohongshu, Reddit, HackerNews, and more), plus desktop Electron apps via CDP.
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

相關概念：[[自動化]] · [[CLI/TUI]] · [[AI 代理]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[jackwener--twitter-cli|jackwener/twitter-cli]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]]

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
> WHERE language = "JavaScript" AND file.name != "jackwener--OpenCLI" AND status != "archived"
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
> const concepts = ["自動化","CLI/TUI","AI 代理"];
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
