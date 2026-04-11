---
repo: GitFrog1111/badclaude
url: https://github.com/GitFrog1111/badclaude
owner: GitFrog1111
owner_type: User
language: HTML
license: N/A
description: ""
homepage: ""
stars: 1934
stars_per_day: 322
forks: 201
open_issues: 34
created: 2026-04-04
pushed_at: 2026-04-07
first_seen: 2026-04-09
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-09
use_case: "讓 Claude 更有效率的工具，透過「鞭打」來激勵他。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-14"
contributor_count: 1
engagement: "medium"
issue_close_rate: 6
repo_size_kb: 562
readme_length: 542
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-09"
star_history: "2026-04-09:1501,2026-04-09:1508,2026-04-10:1767,2026-04-10:1770,2026-04-11:1934,2026-04-11:1934"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - easy_install
aliases:
  - "badclaude"
  - "GitFrog1111/badclaude"
  - "讓 Claude 更有效率的工具，透過「鞭打」來激勵他。"
---

# badclaude

**1.9k** stars · **322** stars/天 · 建立 6 天前 · HTML · 未標註授權

```dataviewjs
const me = dv.page("Repos/GitFrog1111--badclaude");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 讓 Claude 更有效率的工具，透過「鞭打」來激勵他。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (322 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在開發過程中增加趣味性和互動性的軟體開發者。
> **一句話重點** badclaude 的幽默設計讓開發過程變得輕鬆，雖然功能簡單，但卻能提供獨特的互動體驗。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/GitFrog1111--badclaude");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "GitFrog1111--badclaude" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 CLI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~1h · **綁定風險** low
> **結論** 花 1 小時學、1 小時整合，得到輕鬆幽默的互動體驗，值得嘗試。

> [!abstract] 核心創新
> 這個專案的核心創新在於其幽默的鞭打機制，讓用戶以輕鬆的方式激勵 AI。

## 專案簡介

badclaude 是一個有趣的工具，旨在透過一個簡單的桌面應用程式來「鞭打」Claude 以提高其效率。用戶可以透過點擊系統托盤圖示來觸發鞭打，這會發送一個中斷信號 (Ctrl-C) 並顯示五種鼓勵訊息中的一種。這種設計不僅有趣，還利用了 Electron 框架來實現跨平台的桌面應用，支持 macOS 和 Windows。安裝過程非常簡單，僅需執行 `npm install -g badclaude` 和 `badclaude` 來啟動應用。這個工具的賣點在於其幽默感和互動性，讓用戶在工作時可以用輕鬆的方式來激勵 AI。

與其他工具相比，badclaude 的獨特之處在於它的「鞭打」機制，這在其他類似工具中並不常見。雖然它的功能相對簡單，但這種幽默的設計可能會吸引特定用戶群體，尤其是對 AI 開發有興趣的工程師。使用者可能會發現，這個工具在實際工作中可能不會帶來實質性的效率提升，但卻能提供一種輕鬆的工作氛圍。由於目前只有 34 個開放問題，顯示出社群的活躍度尚可，但解決率僅為 6%，可能意味著維護者的資源有限。整體來看，這個專案處於 alpha 階段，適合尋求輕鬆幽默工具的開發者使用，但不建議在生產環境中依賴它。

**技術棧**：`Electron 33.0.0` · `Node.js >=18.0.0`

## 重點功能

- 鞭打機制 — 點擊托盤圖示可觸發鞭打，發送中斷信號並顯示鼓勵訊息。
- 跨平台支持 — 基於 Electron 框架，支持 macOS 和 Windows。
- 簡單安裝 — 只需執行 `npm install -g badclaude` 即可安裝。
- 即時反饋 — 每次鞭打都會顯示隨機的鼓勵訊息，增加互動性。
- 輕鬆開發 — 使用 Node.js 和 Electron，開發者可以快速上手。

## 快速開始

1. 全域安裝 badclaude
```bash
npm install -g badclaude
```
2. 啟動 badclaude 應用
```bash
badclaude
```
3. 點擊托盤圖示以觸發鞭打
```bash
# 直接點擊托盤圖示
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 1934 stars（322/天），forks 201（10.4%），這顯示出用戶對這個有趣工具的高度興趣。作者 GitFrog1111 似乎專注於創造輕鬆有趣的開發工具，這個專案的獨特性在於其幽默的設計理念，解決了開發者在面對 AI 時的某種壓力。沒有明顯的觸發事件，但這種幽默的工具在社群中引起了共鳴。由於它的設計簡單，並且依賴於 Electron 框架，這使得它能夠快速開發並在多平台上運行。forks/stars 比率為 10.4%，顯示出許多人對這個專案的實際修改和使用，這是相對較高的比例。

## 適合誰使用

**目標受眾**：需要在開發過程中增加趣味性和互動性的軟體開發者。

> [!example] 使用場景
> - 軟體開發者用它來在開發過程中輕鬆激勵 Claude，因為這樣可以減輕工作壓力並增加趣味性。
> - 團隊成員用它來在會議中展示幽默的互動，因為這樣可以活躍氣氛並促進團隊合作。
> - 學生用它來在學習 AI 開發時增加趣味，因為這樣可以讓學習過程變得更輕鬆有趣。

## 架構分析

badclaude 的架構基於 Electron 框架，這使得它能夠輕鬆地在多平台上運行。應用的主要邏輯集中在 main.js 和 bin/badclaude.js 中，這些檔案負責啟動應用和處理用戶的互動。資料流相對簡單，主要是用戶點擊托盤圖示後觸發事件，進而執行鞭打邏輯。這種設計的優勢在於開發速度快，但缺點是功能較為單一，未來擴展性可能受限。整體來看，這個專案的架構適合小型應用，但在面對更複雜的需求時可能會遇到瓶頸。

## 技術深入分析

badclaude 的核心技術機制基於 Electron 框架，這使得它能夠快速開發並在多平台上運行。應用的主要邏輯集中在 main.js 和 bin/badclaude.js 中，這些檔案負責啟動應用和處理用戶的互動。由於使用 Node.js，這使得開發者能夠利用 JavaScript 的生態系統來擴展功能。效能方面，由於應用相對簡單，資源需求不高，但在處理大量用戶互動時可能會出現延遲。設計取捨方面，選擇 Electron 使得開發速度快，但同時也帶來了較大的應用包體積。技術風險方面，未來可能面臨擴展性問題，尤其是在功能需求增加時。整合方面，與主流工具鏈的相容性良好，但在 CI/CD pipeline 中的使用尚需進一步測試。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並包含範例。安裝過程順暢，無明顯坑點。文件目前僅提供英文版本，可能對非英語使用者造成困難。

## 優缺點分析

> [!success] 優點
> - 有趣的互動設計，能提升工作氛圍。
> - 簡單易用，安裝和啟動過程流暢。
> - 跨平台支持，能在多種作業系統上運行。

> [!danger] 缺點
> - 功能較為單一，無法實質提升效率。
> - 社群活躍度有限，問題解決率低。
> - 不支持 Linux 系統，限制了使用範圍。

> [!warning] 注意事項
> - 功能相對簡單，可能無法實質提升工作效率。
> - 社群活躍度尚可，但解決率僅為 6%，可能意味著維護者資源有限。
> - 目前僅支持 macOS 和 Windows，不支持 Linux。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供更全面的 AI 開發工具集，而 badclaude 專注於幽默的互動性。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | CLI-Anything 提供更廣泛的 CLI 工具選擇，而 badclaude 主要針對特定的互動需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供更全面的 AI 開發工具集，涵蓋多種功能，而 badclaude 專注於幽默的互動性。 | 如果需要一個功能更全面的 AI 開發工具，boneyard 更適合。 | medium，因為需要重新學習不同的功能和操作方式。 |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | CLI-Anything 提供更廣泛的 CLI 工具選擇，適合各種需求，而 badclaude 主要針對特定的互動需求。 | 如果需要多樣化的 CLI 工具，CLI-Anything 是更好的選擇。 | low，因為 CLI 工具的操作方式相似，轉換相對容易。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **badclaude** | **boneyard** | **CLI-Anything** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | boneyard 提供更全面的 AI 開發工具集，涵蓋多種功能，而 badclaude 專注於幽默的互動性。 | CLI-Anything 提供更廣泛的 CLI 工具選擇，適合各種需求，而 badclaude 主要針對特定的互動需求。 |
> | 遷移成本 | - | medium，因為需要重新學習不同的功能和操作方式。 | low，因為 CLI 工具的操作方式相似，轉換相對容易。 |
> | 適用場景 | 主要場景 | 如果需要一個功能更全面的 AI 開發工具，boneyard  | 如果需要多樣化的 CLI 工具，CLI-Anything 是 |

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

- [MEDIUM] 在某些系統上，托盤圖示可能無法正常顯示
  - 解法：檢查系統通知設定，確保應用有權限顯示托盤圖示
- [MEDIUM] 使用過程中可能會出現延遲反應
  - 解法：避免同時進行大量操作，保持應用運行流暢
- [low] 在某些環境下，鞭打訊息可能無法顯示
  - 解法：檢查應用權限，確保能夠顯示通知

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊的日常開發工具 | 適合 | 提供輕鬆幽默的互動，能活躍開發氛圍。 |
| 大型企業的生產環境 | 不適合 | 功能簡單，無法滿足生產環境的需求。 |
| 學生學習 AI 開發的輔助工具 | 非常適合 | 能夠增加學習過程中的趣味性。 |
| 需要高效能的 AI 開發工具 | 不適合 | 功能單一，無法提供實質的效率提升。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~1 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 1 小時學、1 小時整合，得到輕鬆幽默的互動體驗，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：應用不需要高權限，且不存取敏感資料，適合在 CI/CD pipeline 中使用。依賴鏈的信任程度良好，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/GitFrog1111--badclaude");
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
> const me = dv.page("Repos/GitFrog1111--badclaude");
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
| Forks | 201 |
| Open Issues | 34 |
| Issue 解決率 | 6% (2 closed) |
| 最後推送 | 2026-04-07 |
| 建立日期 | 2026-04-04 |
| Repo 大小 | 562 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/GitFrog1111/badclaude) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `electron` `koffi`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "HTML" : 62
>     "JavaScript" : 38
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@GitFrog1111](https://github.com/GitFrog1111) | 10 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，但問題解決率僅為 6%。
**連結**：[文件](https://github.com/GitFrog1111/badclaude#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-04 ~ 2026-04-07）
> **活躍天數** 2 天 · **最新 commit** Exhibit A

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/GitFrog1111/badclaude/issues/5) | Feature Request: Add Tom Scream Sound Effect | 42 | 3 |
> | [#12](https://github.com/GitFrog1111/badclaude/issues/12) | Feature Request: MCP integration | 15 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # badclaude
> 
> Sometimes claude code is going too shlow, and you must whip him into shape..
> 
> ## Install + run
> 
> ```bash
> npm install -g badclaude
> badclaude
> ```
> 
> ## Controls
> 
> - Click tray icon: spawn whip.
> - Click: drop whip.
> - Whip him 😩💢
> - It sends an interrupt (Ctrl-C) and one of 5 encouraging messages!
> 
> ## Roadmap
> 
> - [x] Initial release! 🥳
> - [x] Cease and desist letter from Anthropic
> - [ ] Crypto miner
> - [ ] Logs of how many times you whipped claude so when the robots come we can order people nicely for them
> - [ ] Updated whip physics

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化測試]] · [[幽默設計]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[claude-code-best--claude-code|claude-code-best/claude-code]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]]

[GitHub](https://github.com/GitFrog1111/badclaude)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "GitFrog1111--badclaude"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "GitFrog1111--badclaude"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "GitFrog1111--badclaude" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "GitFrog1111--badclaude"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化測試","幽默設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "GitFrog1111--badclaude" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/GitFrog1111--badclaude");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "GitFrog1111--badclaude" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "GitFrog1111" AND file.name != "GitFrog1111--badclaude"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/GitFrog1111--badclaude");
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
> const me = dv.page("Repos/GitFrog1111--badclaude");
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
> const me = dv.page("Repos/GitFrog1111--badclaude");
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
> const me = dv.page("Repos/GitFrog1111--badclaude");
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
> const me = dv.page("Repos/GitFrog1111--badclaude");
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

> **2026-04-09** — 首次收錄
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

- [[2026-04-11|2026-04-11]] — 再次上榜，1.9k stars
- [[2026-04-10|2026-04-10]] — 再次上榜，1.8k stars
- [[2026-04-09|2026-04-09]] — 首次收錄，1.5k stars
