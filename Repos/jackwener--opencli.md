---
repo: jackwener/opencli
url: https://github.com/jackwener/opencli
owner: jackwener
owner_type: User
language: TypeScript
license: Apache-2.0
description: "Make Any Website & Tool Your CLI. A universal CLI Hub and AI-native runtime. Transform any website, Electron app, or local binary into a standardized command-line interface. Built for AI Agents to discover, learn, and execute tools seamlessly via a unified AGENT.md integration."
homepage: "https://opencli.info/"
stars: 14071
stars_per_day: 586
forks: 1293
open_issues: 98
created: 2026-03-14
pushed_at: 2026-04-07
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
use_case: "將任何網站或工具轉換為命令行介面，讓 AI 代理無縫發現和執行工具。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-24"
contributor_count: 5
engagement: "low"
issue_close_rate: 63
repo_size_kb: 5342
readme_length: 9534
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-19"
star_history: "2026-03-19:1858,2026-03-19:1885,2026-03-20:2453,2026-03-20:2480,2026-03-21:3102,2026-03-21:3117,2026-03-22:3676,2026-03-23:4443,2026-03-24:5348,2026-03-25:6185,2026-03-26:6951,2026-03-29:8422,2026-03-31:9235,2026-04-07:13687,2026-04-08:14071"
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

**14.1k** stars · **586** stars/天 · 建立 24 天前 · TypeScript · Apache-2.0

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
> 將任何網站或工具轉換為命令行介面，讓 AI 代理無縫發現和執行工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (586 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要將網站和應用轉換為 CLI 工具以便於自動化的開發者和數據分析師。
> **一句話重點** OpenCLI 讓網站自動化變得前所未有的簡單，特別是對於 AI 代理的支持，開啟了新的自動化可能性。

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
> **結論** 花 2 小時學習，3 小時整合，能夠實現網站自動化，值得投資。

> [!abstract] 核心創新
> OpenCLI 是首個能將任何網站和 Electron 應用轉換為命令行介面的工具，並支持 AI 代理的直接控制。

## 專案簡介

OpenCLI 是一個強大的 CLI 工具，能將任何網站、Electron 應用或本地 CLI 工具轉換為命令行介面。使用者只需安裝一個輕量級的 Chrome 擴展，然後透過 `npm install -g @jackwener/opencli` 安裝 OpenCLI，便可開始使用。這個工具的賣點在於它能夠重用 Chrome 登入狀態，並提供 AI 代理直接控制瀏覽器的能力，讓使用者能夠自動化網站操作，並將這些操作轉化為可重用的 CLI 命令。技術上，OpenCLI 利用 Node.js 和 TypeScript 開發，並依賴於多個庫如 `commander` 和 `undici`，以實現高效的命令行解析和 HTTP 請求處理。

與其他 CLI 工具相比，如 `gh` 和 `docker`，OpenCLI 提供了更廣泛的網站支持（79+ 個網站），並且能夠自動安裝缺失的工具，這使得它在使用上更加便利。使用者可以透過 `opencli list` 查看所有可用命令，並使用 `opencli bilibili hot --limit 5` 來執行特定的網站命令，這些命令的輸出格式也可以選擇為 JSON、CSV 等。儘管如此，使用者需注意，這個工具依賴於 Chrome 的登入狀態，若未登入則可能導致錯誤。OpenCLI 的社群活躍度良好，開發者持續更新和修復問題，這對於想要在 CLI 中整合多種工具的開發者來說，無疑是一個值得考慮的選擇。

**技術棧**：`Node.js >= 20.0.0` · `TypeScript` · `npm`

## 重點功能

- 網站轉 CLI — 將 79+ 個網站（如 Bilibili、Twitter、Reddit）轉換為命令行介面，使用 `opencli bilibili hot --limit 5` 來獲取熱門視頻。
- AI 代理支持 — 透過 `opencli-operate` 技能，讓 AI 代理直接控制瀏覽器，執行點擊、輸入等操作。
- 自動安裝缺失工具 — 使用 `opencli register mycli` 註冊本地 CLI，若未安裝，會自動執行安裝命令。
- 多種輸出格式 — 所有內建命令支持 `--format` 參數，輸出格式可選擇為 JSON、CSV 等。
- 動態加載適配器 — 將 `.ts` 或 `.yaml` 適配器放入 `clis/` 文件夾中，自動註冊。

## 快速開始

1. 安裝 Chrome 擴展
```bash
下載並解壓 `opencli-extension.zip`，在 `chrome://extensions` 中加載未打包的擴展。
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
[
  "# 前置條件：已安裝 OpenCLI 並啟動擴展",
  "opencli bilibili hot --limit 5",
  "# 預期輸出：獲取 Bilibili 熱門視頻的數據"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 24 天就累積 14071 stars（586/天），forks 1293（9.2%），顯示出強勁的增長潛力。作者 jackwener 之前有多個開源項目，這次的 OpenCLI 解決了將網站和應用轉換為 CLI 的需求，這在過去是相對困難的。特別是對於 AI 代理的支持，使得這個工具在自動化和腳本化操作上具有獨特的優勢。社群的反饋和需求也促進了這個工具的快速發展，並且有不少人對於其功能表示期待。

## 適合誰使用

**目標受眾**：需要將網站和應用轉換為 CLI 工具以便於自動化的開發者和數據分析師。

> [!example] 使用場景
> - 後端工程師用它來將 Bilibili 的熱門視頻數據提取到本地，因為這樣可以快速獲取數據而不需要手動操作。
> - AI 開發者用它來讓 AI 代理自動化操作 Twitter，因為這樣可以節省大量的手動操作時間，並且提高效率。
> - 數據分析師用它來將 Reddit 的熱門帖子轉換為 CSV 格式，因為這樣可以方便地進行數據分析和可視化。

## 架構分析

OpenCLI 的架構設計為一個輕量級的 CLI 工具，主要由 Node.js 和 TypeScript 實現。它通過 Chrome 擴展與瀏覽器進行通信，並使用微守護進程來管理命令執行。這種設計使得用戶能夠無縫地將網站轉換為 CLI，並且能夠重用 Chrome 的登入狀態。

資料流方面，命令從 CLI 接收後，通過擴展轉發至瀏覽器，然後執行相應操作。這樣的設計使得 OpenCLI 能夠在保持高效能的同時，提供廣泛的網站支持。選擇 Node.js 作為後端語言的好處是其強大的生態系統和非阻塞 I/O 模型，這對於處理大量的網絡請求非常有利。

擴展性方面，OpenCLI 允許用戶自定義適配器，這意味著未來可以輕鬆添加更多網站支持。

## 技術深入分析

OpenCLI 的核心技術機制是將網站和 Electron 應用轉換為命令行介面，這是通過 Chrome 擴展和 Node.js 的結合實現的。它使用了多種現代 JavaScript 庫來處理命令解析和 HTTP 請求，並且支持多種輸出格式，這使得它在數據處理上非常靈活。效能方面，OpenCLI 能夠快速響應用戶的命令，並且在處理大量請求時保持穩定。設計上，選擇 Node.js 作為後端語言使得它能夠充分利用非阻塞 I/O 的優勢，這對於需要高效能的 CLI 工具來說是至關重要的。技術風險方面，OpenCLI 依賴於 Chrome 的正常運行，若未來 Chrome 的更新影響了擴展的功能，可能會導致兼容性問題。整合方面，OpenCLI 與現有的 CLI 工具（如 Docker 和 GitHub CLI）相容性良好，能夠輕鬆地融入現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝步驟和範例，安裝過程順暢，沒有明顯的坑。文件中有良好的入門指南，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 支持多達 79+ 個網站的自動化，極大提高了工作效率。
> - AI 代理集成使得自動化操作變得更簡單，無需手動干預。
> - 自動安裝缺失工具的功能，減少了配置的麻煩。

> [!danger] 缺點
> - 依賴於 Chrome 瀏覽器，無法在其他瀏覽器上使用。
> - 在 Windows 環境下可能會遇到兼容性問題。
> - 需要用戶保持登入狀態，否則會導致命令失敗。

> [!warning] 注意事項
> - 需要 Chrome 或 Chromium 瀏覽器並已登入目標網站。
> - 某些命令在 Windows 環境下可能會遇到兼容性問題。
> - 依賴於 Chrome 擴展的正常運行，若擴展未正確安裝將無法使用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了一個 CLI 界面來管理多個工具，但不支持網站自動化，適合需要集中管理工具的情境。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | CLI-Anything 允許用戶將任何應用轉換為 CLI，但缺乏 OpenCLI 的多網站支持和 AI 代理集成。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | Parsync 專注於文件同步和傳輸，而 OpenCLI 則是針對網站和應用的自動化，功能範圍不同。 | 如果你的需求主要是文件同步而非網站自動化，Parsync 會是更好的選擇。 | low，因為兩者的使用方式有明顯不同，但功能上可以互補。 |
| [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | OpenHarness 提供了一個框架來構建自定義 CLI 工具，而 OpenCLI 則是針對現有網站進行自動化。 | 如果你需要構建特定的 CLI 工具而不是網站自動化，OpenHarness 會更合適。 | medium，因為需要重新設計 CLI 工具的邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **opencli** | **parsync** | **OpenHarness** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Parsync 專注於文件同步和傳輸，而 OpenCLI 則是針對網站和應用的自動化，功能範圍不同。 | OpenHarness 提供了一個框架來構建自定義 CLI 工具，而 OpenCLI 則是針對現有網站進行自動化。 |
> | 遷移成本 | - | low，因為兩者的使用方式有明顯不同，但功能上可以互補。 | medium，因為需要重新設計 CLI 工具的邏輯。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是文件同步而非網站自動化，Parsync 會 | 如果你需要構建特定的 CLI 工具而不是網站自動化，Open |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目和測試用途，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Windows 環境下可能會遇到與 Chrome 擴展的兼容性問題
  - 解法：確保擴展正確安裝並更新到最新版本
- [MEDIUM] 若未登入目標網站，執行命令會返回空數據
  - 解法：在執行命令前確認已登入目標網站
- [MEDIUM] 某些命令在特定網站上可能無法正常工作
  - 解法：檢查網站的支持列表，並使用內建的 `opencli list` 確認可用命令

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊需要自動化社交媒體管理 | 非常適合 | 支持多個社交媒體平台的自動化操作，能夠提高效率。 |
| 大型企業需要穩定的 CLI 工具來管理內部應用 | 普通 | 雖然功能強大，但可能需要額外的穩定性和支持。 |
| 個人開發者希望快速實現網站數據抓取 | 非常適合 | 簡單易用，能快速上手並實現自動化。 |
| 需要在生產環境中使用的關鍵應用 | 不適合 | 目前仍處於 beta 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，能夠實現網站自動化，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：OpenCLI 不需要高權限運行，並且不會存取敏感資料。依賴於 Chrome 的安全性，若 Chrome 安全性有問題，可能會影響 OpenCLI 的安全性。

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
| Open Issues | 98 |
| Issue 解決率 | 63% (170 closed) |
| 最後推送 | 2026-04-07 |
| 建立日期 | 2026-03-14 |
| 官方網站 | [Link](https://opencli.info/) |
| Repo 大小 | 5.2 MB |
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
> | [@jackwener](https://github.com/jackwener) | 477 |
> | [@Astro-Han](https://github.com/Astro-Han) | 48 |
> | [@ByteYue](https://github.com/ByteYue) | 29 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 12 |
> | [@0xsline](https://github.com/0xsline) | 8 |

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

> [!abstract] 最近 10 次 commit（2026-04-07 ~ 2026-04-07）
> **活躍天數** 1 天 · **最新 commit** feat: add GitHub Trending, Binance, and Weather adapters (24 commands) (#214)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#847](https://github.com/jackwener/opencli/issues/847) | 代码安全审核的代码结果 | 3 | 1 |
> | [#746](https://github.com/jackwener/opencli/issues/746) | [Feature]: 允许安装在docker里的agents或者AI CLI控制远程的Chrome extension `enhancement` | 3 | 3 |
> | [#283](https://github.com/jackwener/opencli/issues/283) | [Feature]: 新增 ChatGPT Web 适配器，将现有桌面适配器重命名为 chatgpt-app | 2 | 1 |
> | [#55](https://github.com/jackwener/opencli/issues/55) | [Bug] Windows: Antigravity CDP adapter fails due to MCP path | 2 | 1 |
> | [#792](https://github.com/jackwener/opencli/issues/792) | [Bug]: [Windows]Failed to load module C:\Users\windows\.open `bug` | 1 | 5 |

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
> | **zhihu** | `hot` `search` `question` `download` `follow` `like` `favorite` `comment` `answer` |
> | **amazon** | `bestsellers` `search` `product` `offer` `discussion` `movers-shakers` `new-releases` |
> | **1688** | `search` `item` `assets` `download` `store` |
> | **gemini** | `new` `ask` `image` `deep-research` `deep-research-result` |
> | **yuanbao** | `new` `ask` |
> | **notebooklm** | `status` `list` `open` `current` `get` `history` `summary` `note-list` `notes-get` `source-list` `source-get` `source-fulltext` `source-guide` |
> | **spotify** | `auth` `status` `play` `pause` `next` `prev` `volume` `search` `queue` `shuffle` `repeat` |
> | **xianyu** | `search` `item` `chat` |
> | **xiaoe** | `courses` `detail` `catalog` `play-url` `content` |
> | **quark** | `ls` `mkdir` `mv` `rename` `rm` `save` `share-tree` |
> 
> 79+ adapters in total — **[→ see all supported sites & commands](./docs/adapters/index.md)**
> 
> 
> ## CLI Hub
> 
> OpenCLI acts as a universal hub for your existing command-line tools — unified disc

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[AI 代理]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[jackwener--twitter-cli|jackwener/twitter-cli]] · [[jackwener--xiaohongshu-cli|jackwener/xiaohongshu-cli]] · [[AlpinDale--parsync|AlpinDale/parsync]]

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
