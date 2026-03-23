---
repo: jackwener/opencli
url: https://github.com/jackwener/opencli
owner: jackwener
owner_type: User
language: TypeScript
license: Apache-2.0
description: "Make Any Website & Tool Your CLI. A universal CLI Hub and AI-native runtime. Transform any website, Electron app, or local binary into a standardized command-line interface. Built for AI Agents to discover, learn, and execute tools seamlessly via a unified AGENT.md integration."
homepage: "https://opencli.info/"
stars: 4443
stars_per_day: 555
forks: 373
open_issues: 43
created: 2026-03-14
pushed_at: 2026-03-22
first_seen: 2026-03-19
week: "2026-W12"
month: "2026-03"
category: "CLI 工具"
subcategory: "命令行整合"
release_tag: "v1.3.1"
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
issue_close_rate: 52
repo_size_kb: 2382
readme_length: 9958
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-19"
star_history: "2026-03-19:1858,2026-03-19:1885,2026-03-20:2453,2026-03-20:2480,2026-03-21:3102,2026-03-21:3117,2026-03-22:3676,2026-03-23:4443"
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

**4.4k** stars · **555** stars/天 · 建立 8 天前 · TypeScript · Apache-2.0

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

`v1.3.1` `easy-install`

`ai-agent` `ai-agents` `ai-tools` `cli`

> [!summary] 一句話摘要
> 將任何網站或工具轉換為 CLI，讓 AI 代理無縫執行。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (555 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望將多個網站和工具整合到 CLI 環境中的開發者，特別是對 AI 代理有需求的團隊。
> **一句話重點** OpenCLI 的最大優勢在於其 AI 驅動的命令發現能力，讓使用者能夠無縫整合多個網站和工具。

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
> **結論** 花 2 小時學習，1 小時整合，能夠快速整合多個網站和工具，值得嘗試。

> [!abstract] 核心創新
> OpenCLI 透過 AI 驅動的發現機制，將任何網站和工具轉換為統一的命令行介面。

## 專案簡介

OpenCLI 是一個將任何網站、Electron 應用或本地 CLI 工具轉換為命令行介面的工具，支援多種平台如 Bilibili、Twitter 和 YouTube。使用者只需在 Chrome 中登錄目標網站，然後透過 OpenCLI 的命令，例如 `opencli list`，即可查看可用的命令。這個工具的賣點在於它能夠重用 Chrome 的登錄狀態，並且透過 AI 驅動的發現機制，讓使用者可以輕鬆地註冊和使用本地 CLI 工具。技術上，OpenCLI 使用 TypeScript 和 JavaScript，並依賴於 Node.js 20.0.0 以上的環境。它的架構包括一個輕量級的 Browser Bridge Chrome 擴展和微型守護進程，實現零配置的自動啟動。

與其他 CLI 工具相比，OpenCLI 的優勢在於其無縫整合多個平台的能力，並且能夠自動安裝缺失的 CLI 工具。使用者可以透過 `opencli register mycli` 將本地 CLI 註冊到 OpenCLI 中，讓 AI 代理能夠自動發現並使用這些工具。實際使用中，OpenCLI 也支援從多個平台下載媒體內容，並且提供了診斷命令 `opencli doctor` 來檢查擴展和守護進程的連接性。這個工具適合需要在 CLI 環境中整合多個網站和工具的開發者，尤其是那些希望利用 AI 代理自動化操作的團隊。未來幾個月內，隨著更多功能的加入，OpenCLI 有潛力成為更強大的 CLI 中樞。

**技術棧**：`TypeScript` · `JavaScript` · `Node.js >= 20.0.0`

## 重點功能

- 多平台支持 — 支援 Bilibili、Twitter、YouTube 等多個網站的命令行操作。
- AI 驅動的發現 — 使用 `opencli explore` 命令自動發現 API 和功能。
- 無需配置 — 自動安裝缺失的 CLI 工具，並通過標準 I/O 流執行命令。
- 動態加載 — 只需將 `.ts` 或 `.yaml` 適配器放入 `clis/` 文件夾即可自動註冊。
- 自我診斷 — 使用 `opencli doctor` 命令檢查擴展和守護進程的連接性。

## 快速開始

1. 全局安裝 OpenCLI
```bash
npm install -g @jackwener/opencli
```
2. 查看所有可用命令
```bash
opencli list
```
3. 從 Bilibili 獲取熱門視頻
```bash
opencli bilibili hot --limit 5
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 4443 stars（555/天），forks 373（8.4%），這顯示出強勁的增長潛力。作者 jackwener 過去在 CLI 工具領域有多項貢獻，這個專案解決了多個獨立 CLI 工具整合的痛點，讓使用者能夠無縫地在 CLI 中操作多個網站和應用。近期的推文和討論也引發了對這個工具的關注，尤其是在 AI 代理的應用場景中。技術上，這個工具的出現是因為對於 CLI 工具的需求日益增加，特別是在自動化和 AI 驅動的操作上。高達 8.4% 的 forks/stars 比率表示許多使用者在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：希望將多個網站和工具整合到 CLI 環境中的開發者，特別是對 AI 代理有需求的團隊。

> [!example] 使用場景
> - 前端工程師用它來將 Bilibili 的熱門視頻下載到本地，因為這樣可以快速獲取資料而不需要手動操作。
> - 數據科學家用它來從 Twitter 獲取最新的趨勢數據，因為可以直接在 CLI 中執行命令，節省了時間。
> - DevOps 工程師用它來管理 Docker 容器，因為可以通過 `opencli docker ps` 直接在 CLI 中查看容器狀態，提升了工作效率。

## 架構分析

OpenCLI 採用雙引擎架構，支持 YAML 聲明式數據管道和 TypeScript 注入的強大瀏覽器運行時。這種設計使得使用者可以靈活地擴展和自定義命令。資料流方面，OpenCLI 通過輕量級的 Browser Bridge Chrome 擴展連接到瀏覽器，並使用微型守護進程實現自動啟動。

這樣的設計降低了配置的複雜性，但也意味著對 Chrome 瀏覽器的依賴。選擇這種架構的代價是需要使用者在 Chrome 中登錄目標網站，這可能對某些使用者造成不便。擴展性方面，OpenCLI 允許使用者通過簡單的文件結構來添加新的命令和適配器，這使得工具的擴展變得更加靈活。

## 技術深入分析

OpenCLI 的核心技術機制在於其雙引擎架構，這使得它能夠同時支持 YAML 和 TypeScript 的命令定義。這種設計不僅提高了靈活性，還能夠快速適應不同的使用場景。效能上，OpenCLI 依賴於 Node.js 的高效性能，能夠快速處理用戶請求。由於它使用輕量級的 Browser Bridge 進行連接，這使得它的啟動時間非常短，且對系統資源的佔用也相對較低。

選擇這種架構的代價是對 Chrome 瀏覽器的依賴，這可能會限制某些使用者的使用場景。在技術風險方面，未來如果 Chrome 瀏覽器的更新影響了擴展的運作，可能會導致 OpenCLI 的功能受限。整合方面，OpenCLI 能夠輕鬆與現有的 CLI 工具鏈結合，並且支持主流的 CI/CD 工具，這使得它在開發流程中非常友好。整體而言，OpenCLI 提供了一個靈活且強大的 CLI 解決方案，特別適合需要整合多個工具的開發者。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含多個範例，安裝過程順暢，使用者只需簡單的命令即可開始使用。文件中提供了詳細的設置指南，並且有中文文檔可供參考，對於新手來說非常友好。

## 優缺點分析

> [!success] 優點
> - 能夠將多個網站和工具整合到單一 CLI 環境中。
> - AI 驅動的發現功能，提升了使用者的操作效率。
> - 無需繁瑣的配置，快速上手。

> [!danger] 缺點
> - 依賴於 Chrome 瀏覽器，對於不使用 Chrome 的使用者不友好。
> - 某些命令可能在特定平台上無法使用。
> - 需要額外安裝工具（如 yt-dlp）來支持某些功能。

> [!warning] 注意事項
> - 需要 Chrome 瀏覽器並已登錄目標網站。
> - 對於某些網站，可能需要額外的下載工具（如 yt-dlp）。
> - 在某些平台上，命令的可用性可能有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 專注於 Twitter 的 CLI 工具，功能較為專一，適合只需操作 Twitter 的使用者。 |
| [jackwener/bilibili-cli](https://github.com/jackwener/bilibili-cli) | 專注於 Bilibili 的 CLI 工具，功能較為專一，適合只需操作 Bilibili 的使用者。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 提供更廣泛的 CLI 整合，但缺乏 OpenCLI 的 AI 驅動發現功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [jackwener/twitter-cli](https://github.com/jackwener/twitter-cli) | 專注於 Twitter 的 CLI 工具，提供更專一的功能，適合只需操作 Twitter 的使用者。 | 如果你的團隊主要需要操作 Twitter，且不需要其他網站的支持。 | low，因為功能範圍較小，直接替代即可。 |
| [jackwener/bilibili-cli](https://github.com/jackwener/bilibili-cli) | 專注於 Bilibili 的 CLI 工具，提供針對該平台的專門功能。 | 如果你的需求僅限於 Bilibili 的操作，這會是更輕量的選擇。 | low，因為功能範圍較小，直接替代即可。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | 提供更廣泛的 CLI 整合，但缺乏 OpenCLI 的 AI 驅動發現功能。 | 如果你需要一個更通用的 CLI 工具，但不需要 AI 的支持。 | medium，因為需要重新學習新的命令和用法。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **opencli** | **twitter-cli** | **bilibili-cli** | **CLI-Anything** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 Twitter 的 CLI 工具，提供更專一的功能，適合只需操作 Twitter 的使用者。 | 專注於 Bilibili 的 CLI 工具，提供針對該平台的專門功能。 | 提供更廣泛的 CLI 整合，但缺乏 OpenCLI 的 AI 驅動發現功能。 |
> | 遷移成本 | - | low，因為功能範圍較小，直接替代即可。 | low，因為功能範圍較小，直接替代即可。 | medium，因為需要重新學習新的命令和用法。 |
> | 適用場景 | 主要場景 | 如果你的團隊主要需要操作 Twitter，且不需要其他網站的 | 如果你的需求僅限於 Bilibili 的操作，這會是更輕量的 | 如果你需要一個更通用的 CLI 工具，但不需要 AI 的支持 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目和小型團隊試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些網站上，命令可能因為登錄狀態不正確而失敗。
  - 解法：確保在 Chrome 中已登錄目標網站。
- [MEDIUM] Windows 環境下可能會遇到路徑問題，導致命令無法執行。
  - 解法：使用 WSL 或確保路徑格式正確。
- [MEDIUM] 某些命令在特定平台上可能無法使用。
  - 解法：檢查支持的命令列表，確保使用正確的命令。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要整合多個網站和工具的開發團隊 | 非常適合 | OpenCLI 提供了無縫整合多個平台的能力，適合需要自動化的場景。 |
| 只需操作單一網站的個人使用者 | 普通 | 雖然可以使用，但可能不需要 OpenCLI 的全部功能。 |
| 不使用 Chrome 的使用者 | 不適合 | OpenCLI 依賴於 Chrome 瀏覽器，對於不使用的使用者不友好。 |
| 需要快速獲取社交媒體數據的數據科學家 | 非常適合 | 可以直接在 CLI 中執行命令，快速獲取數據。 |
| 需要下載媒體內容的使用者 | 適合 | 支援多個平台的媒體下載功能，便於使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，能夠快速整合多個網站和工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：OpenCLI 本身不需要高權限，但依賴於 Chrome 瀏覽器的安全性。使用時需確保登錄狀態正確，避免敏感資料洩漏的風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

OpenCLI 最常與 CLI 工具和 AI 代理搭配使用，處於開發和自動化的環節。在一個使用 Node.js 和 Docker 的專案中，可以通過 OpenCLI 來管理 Docker 容器，具體做法是使用 `opencli docker ps` 查看容器狀態。它支援 GitHub Actions 和其他 CI 工具的整合，並且能夠與 VS Code 等 IDE 進行協作。整合的摩擦點主要在於對 Chrome 瀏覽器的依賴，這可能會影響某些使用者的使用體驗。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 OpenCLI 出現之前，許多開發者使用獨立的 CLI 工具來操作各種網站，這導致了工具之間的碎片化和操作不便。隨著 AI 技術的進步，對於自動化操作的需求越來越高，OpenCLI 的出現正好填補了這一空白。它代表了 CLI 工具的未來趨勢，尤其是在 AI 驅動的操作上，未來可能會有更多類似的工具出現。

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
| Forks | 373 |
| Open Issues | 43 |
| Issue 解決率 | 52% (46 closed) |
| 最後推送 | 2026-03-22 |
| 建立日期 | 2026-03-14 |
| 官方網站 | [Link](https://opencli.info/) |
| Repo 大小 | 2.3 MB |
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
> | [@jackwener](https://github.com/jackwener) | 303 |
> | [@Astro-Han](https://github.com/Astro-Han) | 13 |
> | [@ByteYue](https://github.com/ByteYue) | 12 |
> | [@himself65](https://github.com/himself65) | 4 |
> | [@yanCode](https://github.com/yanCode) | 4 |

**最新版本**：v1.3.1 (2026-03-22)

> [!info]- Release Notes
> ## What's Changed
> * docs: clean up READMEs - remove redundant sections by @jackwener in https://github.com/jackwener/opencli/pull/261
> * refactor: deprecate opencli setup, enhance doctor with daemon auto-start by @jackwener in https://github.com/jackwener/opencli/pull/262
> * refactor: doctor defaults to live mode, remove setup entirely by @jackwener in https://github.com/jackwener/opencli/pull/263
> * chore: update package-lock.json by @jackwener in https://github.com/jackwener/opencli/pull/264
> * fix: update doctor tests for auto-start daemon and --no-live default by @jackwener in https://github.com/jackwener/opencli/pull/265
> * fix: remove duplicate horizontal rules in READMEs by @jackwener in https://github.com/jackwener/opencli/pull/266
> * docs: remove all --live references from markdown docs by @jackwener in https://github.com/jackwener/opencli/pull/267
> * ci: trigger website rebuild on release by @ByteYue in https://github.com/jackwener/opencli/pull/269
> * fix(daemon): harden security against browser CSRF attacks by @jackwener in https://github.com/jackwener/opencli/pull/270
> * docs: refresh testing guide by @yanCode in https://github.com/jackwener/opencli/pull/223
> * perf: smart page settle via DOM stability detection by @jackwener in https://github.com/jackwener/opencli/pull/271
> * chore: bump version to 1.3.0 by @jackwener in https://github.com/jackwener/opencli/pull/272
> * chore: release v1.3.1 by @jackwener in https://github.com/jackwener/opencli/pull/273
> 
> 
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，近期有多次提交和更新。
**連結**：[文件](https://opencli.info/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-22 ~ 2026-03-22）
> **活躍天數** 1 天 · **最新 commit** chore: release v1.3.1 (#273)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#59](https://github.com/jackwener/opencli/issues/59) | Feature Request: 轨迹模拟（Human-like Interaction Patterns）防止封号 `enhancement` | 13 | 0 |
> | [#2](https://github.com/jackwener/opencli/issues/2) | OpenCLI 是否定位为统一替代各独立 CLI 项目？(twitter-cli, xiaohongshu-cli, b | 5 | 2 |
> | [#102](https://github.com/jackwener/opencli/issues/102) | [Feature]: 支持插件仓库机制，让用户无需修改主仓库即可安装和使用外部 Adapter `enhancement` | 4 | 1 |
> | [#55](https://github.com/jackwener/opencli/issues/55) | [Bug] Windows: Antigravity CDP adapter fails due to MCP path | 2 | 1 |

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
> | **twitter** | `trending` `bookmarks` `profile` `search` `timeline` `thread` `following` `followers` `notifications` `post` `reply` `delete` `like` `article` `follow` `unfollow` `bookmark` `unbookmark` `download` `accept` `reply-dm` | Browser |
> | **reddit** | `hot` `frontpage` `popular` `search` `subreddit` `read` `user` `user-posts` `user-comments` `upvote` `save` `comment` `subscribe` `saved` `upvoted` | Browser |
> | **cursor** | `status` `send` `read` `new` `dump` `composer` `model` `extract-code` `ask` `screenshot` `history` `export` | Desktop |
> | **bilibili** | `hot` `search` `me` `favorite` `history` `feed` `subtitle` `dynamic` `ranking` `following` `user-videos` `download` | Browser |
> | **codex** | `status` `send` `read` `new` `dump` `extract-diff` `model` `ask` `screenshot` `history` `export` | Desktop |
> | **chatwise** | `status` `new` `send` `read` `ask` `model` `history` `export` `screenshot` | Desktop |
> | **notion** | `status` `search` `read` `new` `write` `sidebar` `favorites` `export` | Desktop |
> | **discord-app** | `status` `send` `read` `channels` `servers` `search` `members` | Desktop |
> | **v2ex** | `hot` `latest` `topic` `daily` `me` `notifications` | Public / Browser |
> | **xueqiu** | `feed` `hot-stock` `hot` `search` `stock` `watchlist` `earnings-date` | Browser |
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
> | **devto** | `top` `tag` `user` | Public |
> | **arxiv** | `search` `paper` | Public |
> | **wikipedia** | `search` `summary` | Public |
> | **hackernews** | `top` | Public |
> | **linkedin** | `search` | Browser |
> | **reuters** | `search` | Browser |
> | **smzdm** | `search` | Browser |
> | **weibo** | `hot` | Browser |
> | **yahoo-finance** | `quote` | Browser |
> | **sinafinance** | `news` | 🌐 Public |
> | **barchart** | `quote` `options` `greeks` `flow` | Browser |
> | **chaoxing** | `assignments` `exams` | Browser |
> | **grok** | `ask` | Desktop |
> | **hf** | `top` | Public |
> | **jike** | `feed` `search` `create` `like` `comment` `repost` `notifications` `post` `topic` `user` | Browser |
> | **jimeng** | `generate` `history` | Browser |
> | **linux-do** | `hot` `latest` `search` `categories` `category` `topic` | Public |
> | **stackoverflow** | `hot` `search` `bounties` `unanswered` | Public |
> | **steam** | `top-sellers` | Public |
> | **weread** | `shelf` `search` `book` `highlights` `notes` `notebooks` `ranking` | Browser |
> | **douban** | `search` `top250` `subject` `marks` `reviews` | Browser |
> 
> 
> ### External CLI Hub
> 
> OpenCLI acts

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[AI 代理]]

相關專案：[[jackwener--twitter-cli|jackwener/twitter-cli]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[Narcooo--inkos|Narcooo/inkos]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[AlpinDale--parsync|AlpinDale/parsync]]

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
