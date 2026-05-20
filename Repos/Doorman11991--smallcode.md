---
repo: Doorman11991/smallcode
url: https://github.com/Doorman11991/smallcode
owner: Doorman11991
owner_type: User
language: JavaScript
license: MIT
description: "AI coding agent optimized for small LLMs. 87% benchmark with 4B-active model."
homepage: ""
stars: 727
stars_per_day: 727
forks: 42
open_issues: 1
created: 2026-05-18
pushed_at: 2026-05-19
first_seen: 2026-05-20
week: "2026-W21"
month: "2026-05"
category: "開發工具"
subcategory: "編碼代理"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-20
use_case: "針對小型 LLM 優化的 AI 編碼代理，能有效利用本地模型進行編程。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-23"
contributor_count: 3
engagement: "low"
issue_close_rate: 91
repo_size_kb: 711
readme_length: 3874
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-20"
star_history: "2026-05-20:728,2026-05-20:727"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
aliases:
  - "smallcode"
  - "Doorman11991/smallcode"
  - "針對小型 LLM 優化的 AI 編碼代理，能有效利用本地模型進行編程。"
---

# smallcode

**727** stars · **727** stars/天 · 建立 1 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/Doorman11991--smallcode");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 針對小型 LLM 優化的 AI 編碼代理，能有效利用本地模型進行編程。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (727 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要在本地環境中使用小型 LLM 進行編碼的獨立開發者或小型團隊。
> **一句話重點** SmallCode 透過針對小型 LLM 的優化設計，提供了一個高效的本地編碼解決方案。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Doorman11991--smallcode");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "編碼代理" && p.file.name !== "Doorman11991--smallcode" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 編碼代理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、3 小時整合，得到高效的本地編碼解決方案，值得嘗試。

> [!abstract] 核心創新
> SmallCode 是一個專為小型 LLM 設計的編碼代理，能在本地環境中高效運行。

## 專案簡介

SmallCode 是一個專為小型 LLM（≤20B 參數）設計的 AI 編碼代理，旨在從本地模型中提取有用的工作。它的核心機制是通過智能架構來彌補小型模型的限制，提供更高效的編碼體驗。用戶可以使用 `smallcode` 命令啟動代理，並通過簡單的指令來執行任務，例如 `smallcode --eval classify_accuracy` 來評估分類器的準確性。這個工具的賣點在於它能在不需要網絡的情況下運行，並且能夠處理多種格式的輸入，這在隱私和安全性上提供了額外的保障。技術上，SmallCode 使用了 Node.js 作為運行環境，並依賴於 Express 框架來處理請求，這使得它在性能上相對輕量。

與其他工具如 OpenCode 相比，SmallCode 更加專注於小型模型，並且在工具調用和編輯方面提供了更靈活的解決方案，這使得它在小型開發環境中表現更佳。實際使用中，SmallCode 能夠處理的資料量相對較小，但在本地環境下的運行效率卻相對較高，適合需要快速迭代的開發者。這個專案目前處於 alpha 階段，雖然功能尚不完善，但其設計理念和實現方式值得關注。對於小型團隊或個人開發者來說，這是一個值得嘗試的工具，特別是在需要本地運行的情境下。

**技術棧**：`Node.js >=18.0.0` · `Express 5.2.1`

## 重點功能

- 本地運行 — 完全不需要網絡，保護用戶隱私。
- 多格式解析 — 支持多種輸入格式的解析，提升靈活性。
- 智能架構 — 針對小型模型進行優化，提供高效的編碼體驗。
- CLI 界面 — 簡單的命令行操作，易於上手。
- 事件訂閱 — 支持事件監聽，方便用戶獲取運行狀態。

## 快速開始

1. 全域安裝 SmallCode
```bash
npm install -g smallcode
```
2. 進入專案目錄
```bash
cd my-project
```
3. 啟動 SmallCode
```bash
smallcode
```

## 程式碼範例

```js
{
  "前置條件": "已安裝 SmallCode",
  "指令": "const { SmallCode } = require('smallcode');\nconst agent = new SmallCode({ model: 'gemma-4-e4b', baseUrl: 'http://localhost:1234/v1' });\nconst result = await agent.run('create hello.py that prints hello world');\nconsole.log(result.filesCreated);  // ['hello.py']\nconsole.log(result.toolCalls.length);  // 1\nconsole.log(result.success);  // true",
  "預期輸出": "['hello.py']"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 727 stars（727/天），forks 42（5.8%），顯示出一定的關注度。作者 Doorman11991 及其團隊針對小型 LLM 的需求開發了這個工具，解決了在本地環境中使用小型模型的痛點，特別是在隱私和安全性方面。這個工具的推出正好滿足了開發者對於高效編碼的需求，並且在社群中引起了討論。由於目前只有一個開放的 Issue，顯示出這個專案的穩定性和活躍度。

## 適合誰使用

**目標受眾**：需要在本地環境中使用小型 LLM 進行編碼的獨立開發者或小型團隊。

> [!example] 使用場景
> - 獨立開發者用它來在本地環境中快速生成 Python 腳本，因為它能夠在不依賴雲端的情況下運行，提升了開發效率。
> - 小型團隊用它來進行快速原型開發，因為它支持多種編程語言並且能夠快速評估代碼的準確性。
> - 教育工作者用它來教學編程，因為它的 CLI 界面簡單易用，適合初學者快速上手。

## 架構分析

SmallCode 採用 Node.js 作為主要運行環境，這使得其在性能上相對輕量且易於部署。架構上，SmallCode 使用了 Express 框架來處理請求，並且通過 CLI 提供用戶友好的操作介面。資料流方面，使用者的請求會被解析並交由小型 LLM 處理，最終返回結構化的結果。

這樣的設計使得 SmallCode 能夠在本地環境中運行，並且不依賴於外部 API，這在隱私和安全性上提供了保障。選擇 Node.js 的原因在於其非同步處理能力和豐富的生態系統，這使得開發者能夠快速迭代功能。整體而言，SmallCode 的架構設計是為了提供高效的編碼體驗，但在處理大型資料集時可能會面臨性能瓶頸。

## 技術深入分析

SmallCode 的核心技術機制是基於小型 LLM 的運行，並且通過 Node.js 提供的非同步處理能力來提升性能。它使用 Express 框架來處理用戶請求，這使得其能夠快速響應用戶操作。效能上，SmallCode 能夠在本地環境中運行，這對於需要快速迭代的開發者來說是非常有利的。設計取捨上，選擇 Node.js 而非其他語言是因為其生態系統豐富，能夠快速實現各種功能，但這也可能導致在處理大型資料集時性能下降。技術風險方面，隨著用戶數量的增加，可能會面臨性能瓶頸，尤其是在高並發的情況下。整合方面，SmallCode 能夠輕鬆與現有的 Node.js 生態系統整合，但對於其他語言的支持可能需要額外的適配。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程順暢，沒有明顯的坑。文件有簡體中文和英文版本，對於不同語言的用戶友好。

## 優缺點分析

> [!success] 優點
> - 本地運行，無需依賴雲端，提升隱私性。
> - 支持多種編程語言，靈活性高。
> - CLI 界面簡單易用，適合初學者。

> [!danger] 缺點
> - 僅支援小型 LLM，對於大型模型的需求無法滿足。
> - 目前功能尚不完善，可能存在 bug。
> - 需要 Node.js 環境，對於不熟悉的用戶可能有學習曲線。

> [!warning] 注意事項
> - 僅支援小型 LLM（≤20B 參數）
> - 需要 Node.js 環境，對於不熟悉的用戶可能有學習曲線
> - 目前處於 alpha 階段，功能尚不完善

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於大型 LLM，適合需要高性能的應用場景，而 SmallCode 更適合小型模型的使用。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 提供 GPT-2 的 API 接口，適合需要雲端解決方案的用戶，而 SmallCode 則是本地運行的選擇。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於大型 LLM，適合需要高性能的應用場景，而 SmallCode 更適合小型模型的使用。 | 如果需要處理大型模型並且有雲端資源的情況下，選擇這個工具會更合適。 | medium，因為需要重新調整架構以適應大型模型的需求。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 提供 GPT-2 的 API 接口，適合需要雲端解決方案的用戶，而 SmallCode 則是本地運行的選擇。 | 如果需要雲端運行且希望使用 GPT-2 的功能，這個工具會是更好的選擇。 | low，因為 API 接口的使用相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **smallcode** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於大型 LLM，適合需要高性能的應用場景，而 SmallCode 更適合小型模型的使用。 | 提供 GPT-2 的 API 接口，適合需要雲端解決方案的用戶，而 SmallCode 則是本地運行的選擇。 |
> | 遷移成本 | - | medium，因為需要重新調整架構以適應大型模型的需求。 | low，因為 API 接口的使用相對簡單。 |
> | 適用場景 | 主要場景 | 如果需要處理大型模型並且有雲端資源的情況下，選擇這個工具會更 | 如果需要雲端運行且希望使用 GPT-2 的功能，這個工具會是 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下安裝可能會遇到 Node.js 版本不兼容的問題
  - 解法：確保使用 Node.js >= 18.0.0
- [MEDIUM] CLI 命令在不同平台上可能有差異
  - 解法：參考 README 中的安裝指引進行調整
- [MEDIUM] 部分功能尚未實現，可能會導致預期行為不符
  - 解法：定期檢查更新以獲取最新功能

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 1-3 人的小型開發團隊 | 非常適合 | 能夠快速生成代碼並進行本地測試，提升開發效率。 |
| 需要在本地環境中進行編碼的獨立開發者 | 非常適合 | 提供了高效的本地運行環境，無需依賴雲端。 |
| 大型企業的核心系統開發 | 不適合 | 目前功能尚不完善，無法滿足高穩定性的需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高效的本地編碼解決方案，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本工具在本地運行，不需要高權限，且不存取敏感資料，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Doorman11991--smallcode");
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
> const me = dv.page("Repos/Doorman11991--smallcode");
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
| Forks | 42 |
| Open Issues | 1 |
| Issue 解決率 | 91% (10 closed) |
| 最後推送 | 2026-05-19 |
| 建立日期 | 2026-05-18 |
| Repo 大小 | 711 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Doorman11991/smallcode) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `bonescript-compiler` `chalk` `cli-highlight` `express` `marked` `marked-terminal` `@types/node` `jest` `ts-node` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 56
>     "MAXScript" : 30
>     "TypeScript" : 14
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Doorman11991](https://github.com/Doorman11991) | 98 |
> | [@Zireael](https://github.com/Zireael) | 8 |
> | [@giveen](https://github.com/giveen) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放的 Issue 數量少，顯示出穩定性。
**連結**：[文件](https://www.npmjs.com/package/smallcode)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-19 ~ 2026-05-19）
> **活躍天數** 1 天 · **最新 commit** v0.6.14: RTK (Rust Token Killer) integration — auto-rewrite bash commands for 60-90%% token savings

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/Doorman11991/smallcode/issues/10) | Unable to scroll up | 0 | 6 |

## README 摘錄

> [!info]- 展開查看原文 README
> # SmallCode
> 
> [简体中文](README_zh-CN.md) | [English](README.md)
> 
> ---
> 
> [](https://www.npmjs.com/package/smallcode)
> 
> **AI coding agent optimized for small LLMs (≤20B parameters)**
> 
> SmallCode is a terminal-native coding agent designed from the ground up to extract useful work from local models (7B-20B) running on consumer hardware. While tools like OpenCode assume frontier models with 128k+ context and perfect tool calling, SmallCode compensates for the limitations of small models through intelligent architecture.
> 
> ## Why SmallCode?
> 
> | | OpenCode | SmallCode |
> |---|----------|-----------|
> | **Target** | Frontier models (Claude, GPT-5) | 7B-20B local models |
> | **Context** | Dumps everything | Budget-managed, summarized |
> | **Tool calling** | Assumes reliable JSON | Forgiving multi-format parser |
> | **Planning** | Single-shot | TODO-file decomposed steps |
> | **Editing** | Full file write | Search-and-replace patch |
> | **Privacy** | API calls to cloud | Fully local, no network needed |
> 
> ## Quick Start
> 
> ```bash
> # Install globally via npm
> npm install -g smallcode
> 
> # Or run directly with npx
> npx smallcode
> 
> # Start in your project directory
> cd my-project
> smallcode
> ```
> 
> ### Prebuilt Binaries (no Node.js needed)
> 
> Pre-compiled tarballs for Windows, macOS, and Linux are built on every release — they bundle Node.js plus all native addons so you never need `node-gyp` or C++ build tools.
> 
> | Platform | One‑line install |
> |---|---|
> | Linux / macOS | `bash `.
> - **Prompt Evaluations** — Measure classifier accuracy and tool selection: `/eval classify_accuracy`.
> 
> ```bash
> # Run evaluations from CLI
> smallcode --eval classify_accuracy
> smallcode --eval tool_selection
> ```
> 
> ## Programmatic API
> 
> Use SmallCode as a library in your own tools, CI pipelines, or TypeScript frameworks:
> 
> ```javascript
> const { SmallCode } = require('smallcode');
> 
> const agent = new SmallCode({
>   model: 'gemma-4-e4b',
>   baseUrl: 'http://localhost:1234/v1',
> });
> 
> // Run a task
> const result = await agent.run("create hello.py that prints hello world");
> console.log(result.filesCreated);  // ['hello.py']
> console.log(result.toolCalls.length);  // 1
> console.log(result.success);  // true
> 
> // Subscribe to events
> agent.on('tool_start', ({ name, args }) => console.log(`Using: ${name}`));
> agent.on('tool_end', ({ name, ms }) => console.log(`Done: ${name} (${ms}ms)`));
> agent.on('error', (err) => console.error(err));
> ```
> 
> Returns a structured `RunResult` with: response text, tool call records, files created/edited, token usage, duration, and success status.
> 
> ## Tools
> 
> | Tool | Description |
> |------|-------------|
> | `bone_compile` | Compile .bone to full backend project |
> | `bone_check` | Validate .bone file (type errors, constraints) |
> | `list_projects` | List all indexed projects with stats |
> | `graph_search` | Code graph symbol search |
> | `explain_symbol` | Full symbol explanation (callers, callees) |
> | `read_file` | Read file contents |
> | `write_file` | Create/overwrite files |
> | `patch` | Search-and-replace edit |
> | `bash` | Run shell commands |
> | `search` | Regex search (ripgrep) |
> | `find_files` | Glob file search |
> | `memory_load` | Load relevant project memory |
> | `memory_remember` | Save knowledge to memory |
> | `web_search` | Search the web via DuckDuckGo (requires `SMALLCODE_WEB_BROWSE=true`) |
> | `web_fetch` | Fetch and extract text from a URL (requires `SMALLCODE_WEB_BROWSE=true`) |
> 
> ### Web Browsing
> 
> SmallCode includes Playwright with stealth mode for undetected web browsing. Disabled by default — enable for medium/large models (20B+) that can synthesize web context effectively:
> 
> ```bash
> # In your .env
> SMALLCODE_WEB_BROWSE=true
> ```
> 
> When enabled, the model can search the web and fetch documentation during tasks. Uses headless Chromium with anti-detection to avoid CAPTCHAs and bot blocks. Falls back to simple HTTP fetch if Playwright isn't available.
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[LLM 推論]] · [[CLI/TUI]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[kyegomez--OpenMythos|kyegomez/OpenMythos]] · [[lightseekorg--tokenspeed|lightseekorg/tokenspeed]] · [[tanishqkumar--ssd|tanishqkumar/ssd]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]] · [[JuliusBrussee--caveman|JuliusBrussee/caveman]] · [[future-agi--future-agi|future-agi/future-agi]]

[GitHub](https://github.com/Doorman11991/smallcode)

## 相關收錄

> [!note]- 直接競品（同子分類：編碼代理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "編碼代理" AND file.name != "Doorman11991--smallcode"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Doorman11991--smallcode"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "Doorman11991--smallcode" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "Doorman11991--smallcode"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["LLM 推論","CLI/TUI","自動化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Doorman11991--smallcode" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Doorman11991--smallcode");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Doorman11991--smallcode" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Doorman11991" AND file.name != "Doorman11991--smallcode"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Doorman11991--smallcode");
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
> const me = dv.page("Repos/Doorman11991--smallcode");
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
> const me = dv.page("Repos/Doorman11991--smallcode");
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
> const me = dv.page("Repos/Doorman11991--smallcode");
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
> const me = dv.page("Repos/Doorman11991--smallcode");
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

> **2026-05-20** — 首次收錄
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

- [[2026-05-20|2026-05-20]] — 首次收錄，728 stars
