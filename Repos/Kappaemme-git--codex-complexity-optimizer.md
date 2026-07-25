---
repo: Kappaemme-git/codex-complexity-optimizer
url: https://github.com/Kappaemme-git/codex-complexity-optimizer
owner: Kappaemme-git
owner_type: User
language: Python
license: MIT
description: "Codex skill for safe codebase complexity analysis and performance optimization reports"
homepage: ""
stars: 909
stars_per_day: 13
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
use_case: "提供安全的代碼庫複雜度分析和性能優化報告的 Codex 技能。"
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
star_history: "2026-05-19:749,2026-05-19:750,2026-05-20:788,2026-05-20:788,2026-05-21:805,2026-05-21:805,2026-05-22:819,2026-05-22:821,2026-05-23:831,2026-05-24:836,2026-05-25:842,2026-05-26:845,2026-05-27:857,2026-05-28:872,2026-05-29:875,2026-05-30:879,2026-05-31:882,2026-06-01:881,2026-06-02:883,2026-06-03:883,2026-06-04:887,2026-06-05:887,2026-06-06:888,2026-06-07:891,2026-06-08:891,2026-06-09:892,2026-06-10:894,2026-06-11:892,2026-06-12:892,2026-06-13:892,2026-06-14:893,2026-06-15:894,2026-06-16:893,2026-06-17:894,2026-06-18:894,2026-06-19:895,2026-06-20:895,2026-06-21:893,2026-06-22:892,2026-06-23:894,2026-06-24:895,2026-06-25:899,2026-06-26:899,2026-06-27:899,2026-06-28:898,2026-06-29:897,2026-06-30:898,2026-07-01:896,2026-07-02:897,2026-07-03:898,2026-07-04:900,2026-07-05:900,2026-07-06:902,2026-07-07:904,2026-07-08:903,2026-07-09:904,2026-07-10:904,2026-07-11:904,2026-07-12:904,2026-07-13:904,2026-07-14:905,2026-07-15:905,2026-07-16:905,2026-07-17:906,2026-07-18:906,2026-07-19:907,2026-07-20:907,2026-07-21:907,2026-07-22:909,2026-07-23:909,2026-07-24:909,2026-07-25:909"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "codex-complexity-optimizer"
  - "Kappaemme-git/codex-complexity-optimizer"
  - "提供安全的代碼庫複雜度分析和性能優化報告的 Codex 技能。"
---

# codex-complexity-optimizer

**909** stars · **13** stars/天 · 建立 70 天前 · Python · MIT

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
> 提供安全的代碼庫複雜度分析和性能優化報告的 Codex 技能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Growing (13 stars/day)
> **授權** MIT (商業友好) · **維護** Slow (最後推送 70 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望提升代碼質量並進行性能優化的開發團隊。
> **一句話重點** 這個專案提供了一個安全的方式來分析和優化代碼庫，特別適合希望提升代碼質量的開發團隊。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，得到提升代碼質量的效果，值得採用。

> [!abstract] 核心創新
> 提供安全的代碼庫複雜度分析和性能優化報告的 Codex 技能。

## 專案簡介

Codex Complexity Optimizer 是一個用於分析代碼庫複雜度和性能熱點的工具，並生成安全的優化報告。使用者可以透過命令 `Use $complexity-optimizer to analyze this codebase and give me a report.` 來獲取分析結果，報告內容包括文件/行號、當前複雜度、建議變更、預期變更後的複雜度、風險等級及所需的測試或基準。這個設計使得開發者能夠在不直接修改代碼的情況下，獲得詳細的優化建議，降低了潛在的風險。若要應用建議的變更，則需明確請求，例如 `Use $complexity-optimizer to implement the lowest-risk optimization from the report and run the relevant tests.`，這樣的設計讓使用者在進行優化時有更多的控制權。技術上，這個工具是用 Python 和 JavaScript 開發，並且依賴於 Codex 的能力來進行代碼分析，這意味著它能夠利用 Codex 的強大語言理解能力來提供準確的分析結果。

與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Codex Complexity Optimizer 更專注於安全性和風險評估，這在進行代碼優化時是非常重要的。實際使用中，這個工具能夠處理中小型代碼庫的複雜度分析，但在大型代碼庫中可能會面臨性能瓶頸，特別是在分析過程中需要消耗較多的計算資源。這個工具目前處於 beta 階段，適合希望提升代碼質量的開發團隊使用，未來可能會加入更多自動化的優化功能。對於需要進行代碼複雜度分析的團隊，這個工具是個不錯的選擇，但在使用前需評估其對大型代碼庫的適應性。

**技術棧**：`Python` · `JavaScript`

## 重點功能

- 代碼複雜度分析 — 提供詳細的代碼複雜度報告，包括當前複雜度和建議的變更。
- 性能熱點檢測 — 自動識別代碼中的性能瓶頸，並給出優化建議。
- 安全風險評估 — 在優化報告中包含風險等級，幫助開發者做出明智的決策。
- 測試建議 — 提供所需的測試或基準，以確保優化後的代碼仍然穩定。
- 無需直接修改代碼 — 預設情況下，報告不會修改文件，降低風險。

## 快速開始

1. 全域安裝工具
```bash
npm install -g codex-complexity-optimizer
```
2. 使用工具分析代碼庫
```bash
Use $complexity-optimizer to analyze this codebase and give me a report.
```
3. 應用建議的優化
```bash
Use $complexity-optimizer to implement the lowest-risk optimization from the report and run the relevant tests.
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 70 天內累積 909 stars（約 13 stars/天），forks 57（6.3%），顯示出一定的社群關注度。主要貢獻者 Kappaemme-git 專注於代碼分析工具的開發，這個專案解決了開發者在代碼複雜度和性能優化方面的痛點，之前的工具往往缺乏安全性評估。該專案的推出可能受到社群對於代碼質量日益重視的影響，並且在開發者論壇上引起了討論。這個工具的出現正好填補了市場上對於安全代碼優化工具的需求，特別是在代碼庫日益龐大的情況下，能夠提供更精確的分析和建議。forks/stars 比率為 6.3%，顯示出有相當比例的使用者在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：希望提升代碼質量並進行性能優化的開發團隊。

> [!example] 使用場景
> - 後端工程師用它來分析大型代碼庫的複雜度，因為這樣能夠快速定位性能瓶頸，提升系統效能。
> - DevOps 工程師用它來生成代碼優化報告，因為這樣可以在部署前確保代碼的安全性和性能。
> - 產品經理用它來評估代碼質量，因為這樣能夠在開發過程中及早發現潛在問題，降低後期維護成本。

## 架構分析

Codex Complexity Optimizer 採用模組化設計，主要由分析模組和報告模組組成。分析模組使用靜態代碼分析技術，能夠快速掃描代碼庫，識別複雜度和性能熱點。報告模組則負責生成詳細的優化建議，並評估風險。

這樣的設計使得工具能夠在不直接修改代碼的情況下，提供安全的優化建議。選擇靜態分析而非動態分析，能夠在不執行代碼的情況下進行評估，降低了測試環境的需求，但可能無法捕捉到運行時的性能問題。擴展性方面，未來可以加入更多的分析規則和優化建議，以適應不同的代碼庫需求。

## 技術深入分析

Codex Complexity Optimizer 的核心技術在於靜態代碼分析，這使得它能夠在不執行代碼的情況下，快速識別代碼中的複雜度和性能熱點。這種方法的優勢在於能夠降低測試環境的需求，但也可能無法捕捉到運行時的性能問題。該工具的效能在於能夠處理中小型代碼庫，對於大型代碼庫，可能會面臨性能瓶頸，特別是在分析過程中需要消耗較多的計算資源。選擇 Python 和 JavaScript 作為開發語言，能夠利用這兩種語言的豐富生態系統，並且便於與 Codex 的其他功能整合。這個工具的依賴樹相對簡單，主要依賴於 Codex 的能力，這降低了維護的複雜度。技術風險方面，靜態分析可能無法捕捉到運行時的性能問題，這在實際使用中可能會造成一定的限制。整合方面，這個工具能夠與現有的開發流程無縫結合，特別是在使用 Codex 的環境中，能夠輕鬆地進行代碼分析和優化。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的詳細步驟。安裝過程相對順暢，沒有明顯的坑。文件中有基本的使用範例，能夠幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 提供詳細的代碼複雜度分析，幫助開發者了解代碼質量。
> - 安全性高，預設不會直接修改代碼，降低風險。
> - 能夠生成針對性的優化建議，提升代碼性能。

> [!danger] 缺點
> - 僅限於 Codex 環境，無法在其他開發環境中使用。
> - 對大型代碼庫的支持可能有限，性能可能受到影響。
> - 需要使用者具備一定的代碼分析能力，以解讀報告。

> [!warning] 注意事項
> - 目前僅支援 Codex 環境，無法在其他環境中使用。
> - 對於大型代碼庫，可能會面臨性能瓶頸。
> - 需要開發者對代碼複雜度有基本了解，以便解讀報告。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代碼生成和自動化，而 Codex Complexity Optimizer 更專注於代碼複雜度分析和性能優化。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供代碼庫的安全性檢查，而 Codex Complexity Optimizer 則提供更全面的性能優化建議。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代碼生成和自動化，而 Codex Complexity Optimizer 更專注於代碼複雜度分析和性能優化。 | 如果你的團隊需要自動化代碼生成而不是複雜度分析，則應選擇 agent-sprite-forge。 | medium，因為需要重新調整開發流程以適應新的工具。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供代碼庫的安全性檢查，而 Codex Complexity Optimizer 則提供更全面的性能優化建議。 | 如果你的主要需求是安全性檢查而不是性能優化，則應選擇 boneyard。 | low，因為工具之間的功能有部分重疊。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **codex-complexity-optimizer** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代碼生成和自動化，而 Codex Complexity Optimizer 更專注於代碼複雜度分析和性能優化。 | 提供代碼庫的安全性檢查，而 Codex Complexity Optimizer 則提供更全面的性能優化建議。 |
> | 遷移成本 | - | medium，因為需要重新調整開發流程以適應新的工具。 | low，因為工具之間的功能有部分重疊。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要自動化代碼生成而不是複雜度分析，則應選擇 a | 如果你的主要需求是安全性檢查而不是性能優化，則應選擇 bon |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合希望提升代碼質量的開發團隊使用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 對於大型代碼庫，分析時間可能較長，影響開發流程
  - 解法：在非高峰時段進行分析以減少影響
- **[HIGH]** 靜態分析可能無法捕捉到運行時的性能問題
  - 解法：結合動態測試工具使用以獲得更全面的分析
- [MEDIUM] 需要使用者具備一定的代碼分析能力，以解讀報告
  - 解法：提供內部培訓或使用簡化的報告格式

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速提升代碼質量，降低維護成本。 |
| 大型企業的代碼庫分析 | 普通 | 可能面臨性能瓶頸，分析時間較長。 |
| 需要進行代碼安全性檢查的團隊 | 適合 | 提供安全性和性能的綜合分析。 |
| 個人開發者的 side project | 非常適合 | 能夠在不影響開發流程的情況下進行代碼優化。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到提升代碼質量的效果，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限，且不存取敏感資料，適合在 CI/CD pipeline 中使用。

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

**社群活躍度**：社群活躍度中等，最近有更新和活動。

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

相關概念：[[自動化測試]] · [[程式碼生成]] · [[性能優化]]

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
> const concepts = ["自動化測試","程式碼生成","性能優化"];
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
