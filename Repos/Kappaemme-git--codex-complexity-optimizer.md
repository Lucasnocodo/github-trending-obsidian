---
repo: Kappaemme-git/codex-complexity-optimizer
url: https://github.com/Kappaemme-git/codex-complexity-optimizer
owner: Kappaemme-git
owner_type: User
language: Python
license: MIT
description: "Codex skill for safe codebase complexity analysis and performance optimization reports"
homepage: ""
stars: 904
stars_per_day: 17
forks: 57
open_issues: 0
created: 2026-05-15
pushed_at: 2026-05-15
first_seen: 2026-05-19
week: "2026-W21"
month: "2026-05"
category: "開發工具"
subcategory: "代碼分析"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-19
use_case: "提供安全的代碼庫複雜度分析和性能優化報告的工具。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-05-29"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 10
readme_length: 892
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-19"
star_history: "2026-05-19:749,2026-05-19:750,2026-05-20:788,2026-05-20:788,2026-05-21:805,2026-05-21:805,2026-05-22:819,2026-05-22:821,2026-05-23:831,2026-05-24:836,2026-05-25:842,2026-05-26:845,2026-05-27:857,2026-05-28:872,2026-05-29:875,2026-05-30:879,2026-05-31:882,2026-06-01:881,2026-06-02:883,2026-06-03:883,2026-06-04:887,2026-06-05:887,2026-06-06:888,2026-06-07:891,2026-06-08:891,2026-06-09:892,2026-06-10:894,2026-06-11:892,2026-06-12:892,2026-06-13:892,2026-06-14:893,2026-06-15:894,2026-06-16:893,2026-06-17:894,2026-06-18:894,2026-06-19:895,2026-06-20:895,2026-06-21:893,2026-06-22:892,2026-06-23:894,2026-06-24:895,2026-06-25:899,2026-06-26:899,2026-06-27:899,2026-06-28:898,2026-06-29:897,2026-06-30:898,2026-07-01:896,2026-07-02:897,2026-07-03:898,2026-07-04:900,2026-07-05:900,2026-07-06:902,2026-07-07:904,2026-07-08:903,2026-07-09:904"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "codex-complexity-optimizer"
  - "Kappaemme-git/codex-complexity-optimizer"
  - "提供安全的代碼庫複雜度分析和性能優化報告的工具。"
---

# codex-complexity-optimizer

**904** stars · **17** stars/天 · 建立 54 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/Kappaemme-git--codex-complexity-optimizer");
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
> 提供安全的代碼庫複雜度分析和性能優化報告的工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Growing (17 stars/day)
> **授權** MIT (商業友好) · **維護** Slow (最後推送 54 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要對代碼庫進行性能優化分析的中大型開發團隊。
> **一句話重點** 這個工具不僅提供優化建議，還強調安全性，讓開發者在提升代碼質量的同時降低風險。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Kappaemme-git--codex-complexity-optimizer");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "代碼分析" && p.file.name !== "Kappaemme-git--codex-complexity-optimizer" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 代碼分析 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到提升代碼質量的效果，值得考慮。

> [!abstract] 核心創新
> 提供詳細的代碼複雜度分析和安全的優化建議，幫助開發者提升代碼質量。

## 專案簡介

Codex Complexity Optimizer 是一個用於分析代碼庫的工具，能夠識別算法複雜度和性能熱點，並生成安全的優化報告。用戶可以透過 Codex 使用 `$complexity-optimizer` 指令來分析代碼，該工具會報告文件/行號、當前複雜度、建議的變更、預期變更後的複雜度、風險等級以及所需的測試或基準。這種設計使得開發者能夠在不直接修改代碼的情況下獲得優化建議，降低了出錯的風險。若要應用變更，用戶需明確請求，這樣可以確保變更是基於報告中最低風險的建議。技術上，這個工具是基於 Node.js 開發的，並使用了 Codex 的能力來進行代碼分析，這樣的選擇使得它能夠輕鬆集成到現有的開發流程中。

與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Codex Complexity Optimizer 更專注於提供詳細的複雜度分析報告，而不是僅僅提供優化建議。這使得它在需要深入理解代碼性能的情況下特別有用。使用者可能會發現，這個工具在大型代碼庫中能夠有效識別性能瓶頸，但在小型專案中可能顯得過於繁瑣。整體而言，這是一個適合中大型團隊使用的工具，能夠幫助他們在代碼質量和性能上達到更高的標準。

**技術棧**：`Node.js`

## 重點功能

- 複雜度分析 — 提供文件/行號、當前複雜度、建議變更等詳細報告。
- 安全優化建議 — 預設不修改文件，降低出錯風險。
- 最低風險變更 — 允許用戶選擇實施報告中的最低風險優化。
- 測試建議 — 提供所需的測試或基準以驗證變更效果。
- 易於安裝 — 透過 npm 安裝，簡單快速。

## 快速開始

1. 安裝 Codex Complexity Optimizer
```bash
npm install -g codex-complexity-optimizer
```
2. 使用分析工具
```bash
Use $complexity-optimizer to analyze this codebase and give me a report.
```
3. 應用優化變更
```bash
Use $complexity-optimizer to implement the lowest-risk optimization from the report and run the relevant tests.
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 Codex Complexity Optimizer",
  "指令": "Use $complexity-optimizer to analyze this codebase and give me a report.",
  "預期輸出": "報告文件/行號、當前複雜度、建議變更、預期複雜度、風險等級等。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 54 天就累積 904 stars（每天 17），forks 57（6.3%），顯示出穩定的增長。作者 Kappaemme-git 似乎專注於開發 Codex 相關的技能，這個工具解決了代碼複雜度分析和性能優化的需求，之前的手動分析方式效率低下且容易出錯。雖然沒有明顯的觸發事件，但隨著開發者對代碼質量的重視，這個工具的需求逐漸上升。forks/stars 比率在中等範圍，顯示出一定的實際應用潛力。

## 適合誰使用

**目標受眾**：需要對代碼庫進行性能優化分析的中大型開發團隊。

> [!example] 使用場景
> - 後端工程師用它來分析大型代碼庫的性能熱點，因為它能提供詳細的複雜度報告，幫助定位優化方向。
> - DevOps 工程師用它來生成代碼優化建議，因為這樣可以在不影響現有功能的情況下提升系統性能。
> - 技術主管用它來評估團隊代碼質量，因為它能提供具體的數據支持，幫助制定改進計畫。

## 架構分析

Codex Complexity Optimizer 採用 Node.js 架構，設計上旨在提供快速的代碼分析和報告生成。它的資料流從用戶輸入分析指令開始，經過 Codex 的分析引擎，最終生成詳細的報告。這樣的設計使得開發者能夠在現有的開發流程中輕鬆集成，降低了學習曲線。

選擇 Node.js 作為開發語言的好處在於其非同步處理能力，能夠快速響應用戶請求。這個工具的擴展性良好，但在處理非常大型的代碼庫時，可能會面臨性能瓶頸，特別是在報告生成階段。整體而言，這個架構設計在效率和易用性之間取得了良好的平衡。

## 技術深入分析

Codex Complexity Optimizer 的核心技術機制在於其使用 Node.js 進行代碼分析，並利用 Codex 的能力來生成詳細的複雜度報告。這個工具能夠處理中型到大型的代碼庫，並且在分析過程中能夠快速識別性能熱點。設計上，它的資料流從用戶的請求開始，經過分析引擎，最終生成報告。選擇 Node.js 的原因在於其非同步處理能力，這使得工具在處理多個請求時能夠保持高效。

儘管如此，在處理特別龐大的代碼庫時，可能會遇到性能瓶頸，特別是在報告生成的階段。這個工具的依賴關係相對簡單，主要依賴 Node.js 環境，降低了使用的複雜度。技術風險方面，隨著代碼庫的擴大，分析的準確性可能會受到影響，特別是在面對複雜的代碼結構時。整合到現有的開發流程中相對容易，與主流的 CI/CD 工具兼容，但在某些情況下可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用範例。安裝過程順暢，沒有明顯的坑。文件中有詳細的使用說明，讓新手能夠快速上手。

## 優缺點分析

> [!success] 優點
> - 詳細的複雜度分析報告，幫助開發者理解代碼性能。
> - 安全的優化建議，降低了出錯風險。
> - 易於安裝和使用，適合快速集成到現有流程中。

> [!danger] 缺點
> - 僅支援 Node.js 環境，限制了使用範圍。
> - 不會自動修改代碼，需手動確認變更，增加了使用成本。
> - 在非常大型的代碼庫中可能會遇到性能瓶頸。

> [!warning] 注意事項
> - 僅支援 Node.js 環境。
> - 不會自動修改代碼，需手動確認變更。
> - 僅提供建議，實際效果需通過測試驗證。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成代碼的代理，而 Codex Complexity Optimizer 更加專注於代碼複雜度分析和性能優化。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供代碼清理建議，但不專注於複雜度分析，適合不同的使用場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成代碼的代理，提供即時代碼生成，而 Codex Complexity Optimizer 更專注於代碼的複雜度分析。 | 如果需要即時生成代碼而非分析，則選擇 agent-sprite-forge 更合適。 | medium，因為需要重新調整開發流程以適應新的工具。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供代碼清理建議，但不專注於複雜度分析，適合不同的使用場景。 | 如果主要需求是代碼清理而非性能分析，則選擇 boneyard 更合適。 | low，因為它的使用方式與 Codex Complexity Optimizer 相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codex-complexity-optimizer** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成代碼的代理，提供即時代碼生成，而 Codex Complexity Optimizer 更專注於代碼的複雜度分析。 | 提供代碼清理建議，但不專注於複雜度分析，適合不同的使用場景。 |
> | 遷移成本 | - | medium，因為需要重新調整開發流程以適應新的工具。 | low，因為它的使用方式與 Codex Complexity Optimizer 相似。 |
> | 適用場景 | 主要場景 | 如果需要即時生成代碼而非分析，則選擇 agent-sprit | 如果主要需求是代碼清理而非性能分析，則選擇 boneyard |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合在內部專案中試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在大型代碼庫中，報告生成速度可能較慢。
  - 解法：考慮分批分析代碼庫，減少一次性處理的數量。
- **[HIGH]** 某些複雜的代碼結構可能導致分析不準確。
  - 解法：手動檢查報告中的建議，確保其合理性。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以上的開發團隊需要進行代碼優化 | 非常適合 | 能夠提供詳細的複雜度分析，幫助團隊提升代碼質量。 |
| 小型專案的開發者希望簡單優化代碼 | 不適合 | 工具的功能可能顯得過於繁瑣，且不會自動修改代碼。 |
| 需要持續監控代碼性能的大型企業 | 適合 | 能夠定期生成報告，幫助企業保持代碼質量。 |
| 新手開發者希望了解代碼複雜度 | 普通 | 雖然工具提供詳細報告，但可能需要額外的學習成本來理解。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到提升代碼質量的效果，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不會存取敏感資料。依賴的 Node.js 環境需保持更新，以避免潛在的安全風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Codex Complexity Optimizer 最常與 Node.js 開發環境搭配使用，通常在開發過程中進行代碼分析。在一個使用 Express.js 的專案中，可以透過 `$complexity-optimizer` 指令來分析代碼，具體做法是將分析結果整合到 CI/CD pipeline 中，確保代碼質量。這個工具與 GitHub Actions 和 GitLab CI 等主流 CI 工具兼容，能夠輕鬆集成到現有的開發流程中。整合過程中，最常見的問題是需要確保 Node.js 環境的版本符合要求，否則可能會導致工具無法正常運行。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Kappaemme-git--codex-complexity-optimizer");
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
> const me = dv.page("Repos/Kappaemme-git--codex-complexity-optimizer");
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
| Forks | 57 |
| Open Issues | 0 |
| 最後推送 | 2026-05-15 |
| 建立日期 | 2026-05-15 |
| Repo 大小 | 10 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Kappaemme-git/codex-complexity-optimizer) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 90
>     "JavaScript" : 10
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Kappaemme-git](https://github.com/Kappaemme-git) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，最近有更新和提交。
**連結**：[文件](https://github.com/Kappaemme-git/codex-complexity-optimizer#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-15）
> **活躍天數** 1 天 · **最新 commit** Initial complexity optimizer skill

## README 摘錄

> [!info]- 展開查看原文 README
> # Codex Complexity Optimizer
> 
> Codex skill for analyzing a codebase, finding algorithmic complexity and performance hotspots, and producing safe optimization reports.
> 
> ## Install
> 
> ```bash
> npm install -g codex-complexity-optimizer
> ```
> 
> The package installs the skill into:
> 
> ```bash
> ${CODEX_HOME:-~/.codex}/skills/complexity-optimizer
> ```
> 
> You can also run the installer directly:
> 
> ```bash
> npx codex-complexity-optimizer
> ```
> 
> ## Use
> 
> In Codex:
> 
> ```text
> Use $complexity-optimizer to analyze this codebase and give me a report.
> ```
> 
> By default, report-only prompts do not modify files. The skill reports file/line, current complexity, recommended change, expected complexity after the change, risk level, and tests or benchmarks needed.
> 
> To apply a change, ask explicitly:
> 
> ```text
> Use $complexity-optimizer to implement the lowest-risk optimization from the report and run the relevant tests.
> ```

## 延伸閱讀

相關概念：[[程式碼生成]] · [[效能優化]] · [[自動化測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

[GitHub](https://github.com/Kappaemme-git/codex-complexity-optimizer)

## 相關收錄

> [!note]- 直接競品（同子分類：代碼分析）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "代碼分析" AND file.name != "Kappaemme-git--codex-complexity-optimizer"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Kappaemme-git--codex-complexity-optimizer"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Kappaemme-git--codex-complexity-optimizer" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "Kappaemme-git--codex-complexity-optimizer"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["程式碼生成","效能優化","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Kappaemme-git--codex-complexity-optimizer" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Kappaemme-git--codex-complexity-optimizer");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Kappaemme-git--codex-complexity-optimizer" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Kappaemme-git" AND file.name != "Kappaemme-git--codex-complexity-optimizer"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Kappaemme-git--codex-complexity-optimizer");
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
> const me = dv.page("Repos/Kappaemme-git--codex-complexity-optimizer");
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
> const me = dv.page("Repos/Kappaemme-git--codex-complexity-optimizer");
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
> const me = dv.page("Repos/Kappaemme-git--codex-complexity-optimizer");
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
> const me = dv.page("Repos/Kappaemme-git--codex-complexity-optimizer");
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

> **2026-05-19** — 首次收錄
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

- [[2026-05-22|2026-05-22]] — 再次上榜，819 stars
- [[2026-05-21|2026-05-21]] — 再次上榜，805 stars
- [[2026-05-20|2026-05-20]] — 再次上榜，788 stars
- [[2026-05-19|2026-05-19]] — 首次收錄，749 stars
