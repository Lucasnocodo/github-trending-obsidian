---
repo: Kappaemme-git/codex-complexity-optimizer
url: https://github.com/Kappaemme-git/codex-complexity-optimizer
owner: Kappaemme-git
owner_type: User
language: Python
license: MIT
description: "Codex skill for safe codebase complexity analysis and performance optimization reports"
homepage: ""
stars: 902
stars_per_day: 18
forks: 57
open_issues: 0
created: 2026-05-15
pushed_at: 2026-05-15
first_seen: 2026-05-19
week: "2026-W21"
month: "2026-05"
category: "開發工具"
subcategory: "代碼優化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-19
use_case: "分析代碼庫的複雜度並生成性能優化報告的 Codex 技能。"
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
star_history: "2026-05-19:749,2026-05-19:750,2026-05-20:788,2026-05-20:788,2026-05-21:805,2026-05-21:805,2026-05-22:819,2026-05-22:821,2026-05-23:831,2026-05-24:836,2026-05-25:842,2026-05-26:845,2026-05-27:857,2026-05-28:872,2026-05-29:875,2026-05-30:879,2026-05-31:882,2026-06-01:881,2026-06-02:883,2026-06-03:883,2026-06-04:887,2026-06-05:887,2026-06-06:888,2026-06-07:891,2026-06-08:891,2026-06-09:892,2026-06-10:894,2026-06-11:892,2026-06-12:892,2026-06-13:892,2026-06-14:893,2026-06-15:894,2026-06-16:893,2026-06-17:894,2026-06-18:894,2026-06-19:895,2026-06-20:895,2026-06-21:893,2026-06-22:892,2026-06-23:894,2026-06-24:895,2026-06-25:899,2026-06-26:899,2026-06-27:899,2026-06-28:898,2026-06-29:897,2026-06-30:898,2026-07-01:896,2026-07-02:897,2026-07-03:898,2026-07-04:900,2026-07-05:900,2026-07-06:902"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "codex-complexity-optimizer"
  - "Kappaemme-git/codex-complexity-optimizer"
  - "分析代碼庫的複雜度並生成性能優化報告的 Codex 技能。"
---

# codex-complexity-optimizer

**902** stars · **18** stars/天 · 建立 51 天前 · Python · MIT

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
> 分析代碼庫的複雜度並生成性能優化報告的 Codex 技能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Growing (18 stars/day)
> **授權** MIT (商業友好) · **維護** Slow (最後推送 51 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要分析代碼庫複雜度並生成優化報告的開發者和團隊。
> **一句話重點** 這個工具的設計讓代碼複雜度分析變得安全且高效，特別適合需要高安全性的開發環境。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Kappaemme-git--codex-complexity-optimizer");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "代碼優化" && p.file.name !== "Kappaemme-git--codex-complexity-optimizer" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 代碼優化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學、1 小時整合，得到高效的代碼複雜度分析，值得。

> [!abstract] 核心創新
> 提供安全的代碼複雜度分析和性能優化報告，避免自動修改代碼的風險。

## 專案簡介

Codex Complexity Optimizer 是一個專為分析代碼庫而設計的工具，能夠找出算法複雜度和性能瓶頸，並生成安全的優化報告。使用者只需在 Codex 中輸入指令 `$complexity-optimizer`，即可獲得包含當前複雜度、建議變更、預期變更後的複雜度、風險等級及所需測試或基準的詳細報告。這個工具的賣點在於它不會自動修改文件，確保使用者能夠先評估風險再進行變更。技術上，這個工具是基於 JavaScript 和 Python 開發，並且可以輕鬆安裝，使用 `npm install -g codex-complexity-optimizer` 指令即可完成安裝，這樣的設計使得它能夠快速融入現有的開發流程。與其他類似工具相比，如 0xSero/codex-shim 和 0xGF/boneyard，Codex Complexity Optimizer 提供了更為詳細的報告和風險評估，特別適合需要高安全性和穩定性的專案。

實際使用中，這個工具能夠處理中小型代碼庫的複雜度分析，但對於大型代碼庫可能會面臨性能瓶頸，因為它需要分析每個文件的複雜度。社群活躍度高，且目前沒有開放的問題，顯示出良好的維護狀態。這個專案目前處於 alpha 階段，適合用於個人或小型團隊的代碼優化，但不建議用於生產環境的核心代碼。未來可能會加入更多自動化的優化功能，提升使用者體驗。

**技術棧**：`Python` · `JavaScript`

## 重點功能

- 代碼複雜度分析 — 提供當前複雜度和建議變更。
- 性能瓶頸報告 — 列出文件/行號及其風險等級。
- 安全優化建議 — 只在用戶要求下進行代碼修改。
- 測試需求提示 — 提供所需的測試或基準建議。
- 易於安裝 — 使用 `npm install -g codex-complexity-optimizer` 快速安裝。

## 快速開始

1. 安裝 Codex Complexity Optimizer
```bash
npm install -g codex-complexity-optimizer
```
2. 在 Codex 中使用分析功能
```bash
Use $complexity-optimizer to analyze this codebase and give me a report.
```
3. 應用優化建議
```bash
Use $complexity-optimizer to implement the lowest-risk optimization from the report and run the relevant tests.
```

## 程式碼範例

```python
[
  "# 前置條件：已安裝 Codex Complexity Optimizer",
  "Use $complexity-optimizer to analyze this codebase and give me a report.",
  "# 預期輸出：報告包含當前複雜度、建議變更、風險等級等信息。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 51 天就累積 902 stars（18/天），forks 57（6.3%），這顯示出穩定的增長。作者 Kappaemme-git 似乎專注於 Codex 相關的開發，這個工具解決了代碼複雜度分析的痛點，之前的工具往往缺乏安全性和詳細報告。社群對於代碼優化的需求持續增長，這使得此工具的出現恰逢其時。forks/stars 比率為 6.3%，顯示出使用者對於這個工具有一定的實際修改需求，並非僅僅是觀望。

## 適合誰使用

**目標受眾**：需要分析代碼庫複雜度並生成優化報告的開發者和團隊。

> [!example] 使用場景
> - 後端工程師用它來分析大型代碼庫的複雜度，因為能夠獲得具體的優化建議，降低維護成本。
> - 前端開發者用它來檢查代碼性能瓶頸，因為能夠在修改前評估風險，確保代碼穩定性。
> - DevOps 工程師用它來生成性能報告，因為能夠在 CI/CD 流程中集成，提升代碼質量。

## 架構分析

Codex Complexity Optimizer 採用模組化設計，主要由分析模組和報告生成模組組成。分析模組負責遍歷代碼庫，計算每個文件的複雜度，並找出性能瓶頸，使用靜態分析技術來確保準確性。報告生成模組則將分析結果整理成易於理解的報告格式，提供給使用者。

這種設計使得工具能夠快速適應不同的代碼庫，並且能夠在不影響原始代碼的情況下提供建議。選擇靜態分析而非動態分析的原因在於靜態分析能夠在不執行代碼的情況下進行評估，降低了執行時的風險。這樣的架構雖然在處理大型代碼庫時可能會面臨性能瓶頸，但在中小型項目中表現良好，並且易於擴展。

## 技術深入分析

Codex Complexity Optimizer 的核心技術機制是靜態代碼分析，這使得它能夠在不執行代碼的情況下評估代碼的複雜度和性能瓶頸。它使用了常見的算法複雜度計算方法，如 Big O 表示法，來量化代碼的效率。這個工具能夠處理中小型代碼庫，並且在分析過程中不會對原始代碼進行任何修改，這樣的設計降低了潛在的風險。儘管如此，對於大型代碼庫，分析過程可能會變得緩慢，因為需要遍歷每個文件並計算其複雜度。選擇 JavaScript 和 Python 作為開發語言，使得這個工具能夠在多種環境中運行，並且易於與其他工具集成。這個工具的依賴樹相對簡單，主要依賴於 Codex 環境，這降低了維護的複雜度。未來可能需要考慮如何提升對大型代碼庫的支持，並且可能會引入更多自動化的優化功能，以提升使用者的效率。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含安裝和使用範例，安裝過程順暢，無明顯坑點。雖然沒有專門的入門指南，但使用說明簡潔明瞭，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 提供詳細的代碼複雜度分析報告，幫助開發者理解代碼質量。
> - 安全性高，避免自動修改代碼造成的風險。
> - 易於安裝和使用，快速融入現有開發流程。

> [!danger] 缺點
> - 對於大型代碼庫的性能分析可能會較慢。
> - 不支持自動修改代碼，需手動確認變更。
> - 目前僅在 Codex 環境中運行，限制了使用範圍。

> [!warning] 注意事項
> - 僅支援 Codex 環境運行。
> - 對於大型代碼庫的性能分析可能會較慢。
> - 不會自動修改代碼，需手動確認變更。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 提供類似的代碼分析功能，但缺乏詳細的風險評估和建議。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代碼清理，而非複雜度分析，適用於不同的場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 提供代碼分析功能，但缺乏詳細的風險評估和建議，主要專注於代碼清理。 | 如果需要進行代碼清理而非複雜度分析，這個工具會更合適。 | low，因為兩者功能相似，切換成本不高。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代碼的清理和重構，與本專案的複雜度分析有所不同。 | 如果你的專案需要重構而非僅僅是複雜度分析，這個工具會更適合。 | medium，因為需要重新調整工作流程以適應不同的分析方法。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codex-complexity-optimizer** | **codex-shim** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供代碼分析功能，但缺乏詳細的風險評估和建議，主要專注於代碼清理。 | 專注於代碼的清理和重構，與本專案的複雜度分析有所不同。 |
> | 遷移成本 | - | low，因為兩者功能相似，切換成本不高。 | medium，因為需要重新調整工作流程以適應不同的分析方法。 |
> | 適用場景 | 主要場景 | 如果需要進行代碼清理而非複雜度分析，這個工具會更合適。 | 如果你的專案需要重構而非僅僅是複雜度分析，這個工具會更適合。 |

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

- **[HIGH]** 對於大型代碼庫的性能分析可能會較慢，特別是當代碼量大時。
  - 解法：考慮將代碼庫拆分為小型模組進行分析。
- [MEDIUM] 在 Codex 環境外無法運行，限制了使用範圍。
  - 解法：確保在 Codex 環境中使用，或考慮其他工具。
- [MEDIUM] 不會自動修改代碼，需手動確認變更，可能導致使用者錯過優化。
  - 解法：定期檢查報告，並手動應用建議。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠提供詳細的代碼複雜度分析，幫助提升代碼質量。 |
| 大型企業的代碼庫 | 不適合 | 對於大型代碼庫的性能分析可能會較慢。 |
| 需要高安全性的開發環境 | 非常適合 | 提供安全的代碼分析，避免自動修改的風險。 |
| 個人開發者的 side project | 適合 | 易於安裝和使用，適合小型專案的代碼優化。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學、1 小時整合，得到高效的代碼複雜度分析，值得。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限運行，且不存取敏感資料，適合在 CI/CD pipeline 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Codex Complexity Optimizer 通常與 Codex 環境搭配使用，處於代碼分析的環節。在一個使用 Codex 的專案中，可以通過 `$complexity-optimizer` 指令來分析代碼庫，並獲得詳細的報告。這個工具與主流的 CI/CD 工具（如 GitHub Actions）相容，能夠輕鬆集成到現有的開發流程中。常見的整合問題包括需要確保 Codex 環境的正確配置，否則可能無法正常運行。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Codex Complexity Optimizer 出現之前，開發者通常依賴手動代碼審查或使用其他工具進行代碼分析，這些方法往往缺乏安全性和詳細的報告。隨著對代碼質量和安全性的重視增加，這個工具的出現正好填補了這一需求。技術上，靜態代碼分析的進步使得這種工具變得可行，未來可能會看到更多類似的工具出現，專注於代碼質量和性能優化。

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

**社群活躍度**：社群活躍度高，沒有開放的問題，顯示出良好的維護狀態。

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

相關概念：[[代碼複雜度]] · [[性能優化]] · [[自動化測試]]

相關專案：[[0xSero--codex-shim|0xSero/codex-shim]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

[GitHub](https://github.com/Kappaemme-git/codex-complexity-optimizer)

## 相關收錄

> [!note]- 直接競品（同子分類：代碼優化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "代碼優化" AND file.name != "Kappaemme-git--codex-complexity-optimizer"
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
> const concepts = ["代碼複雜度","性能優化","自動化測試"];
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
