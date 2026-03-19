---
repo: davebcn87/pi-autoresearch
url: https://github.com/davebcn87/pi-autoresearch
owner: davebcn87
owner_type: User
language: TypeScript
license: MIT
description: "Autonomous experiment loop extension for pi"
homepage: ""
stars: 2216
stars_per_day: 317
forks: 109
open_issues: 7
created: 2026-03-11
pushed_at: 2026-03-18
first_seen: 2026-03-14
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-14
use_case: "自動化實驗循環，讓你能夠持續測試、評估並優化你的代碼或模型。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-03-21"
contributor_count: 5
engagement: "low"
issue_close_rate: 42
repo_size_kb: 1050
readme_length: 7433
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-14"
star_history: "2026-03-14:1167,2026-03-14:1172,2026-03-15:1599,2026-03-15:1605,2026-03-16:1851,2026-03-16:1853,2026-03-17:1986,2026-03-17:1987,2026-03-18:2084,2026-03-18:2084,2026-03-19:2216"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
aliases:
  - "pi-autoresearch"
  - "davebcn87/pi-autoresearch"
  - "自動化實驗循環，讓你能夠持續測試、評估並優化你的代碼或模型。"
---

# pi-autoresearch

**2.2k** stars · **317** stars/天 · 建立 7 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/davebcn87--pi-autoresearch");
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
> 自動化實驗循環，讓你能夠持續測試、評估並優化你的代碼或模型。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (317 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要自動化測試和優化過程的開發團隊，特別是在大型專案中。
> **一句話重點** 這個專案讓開發者能夠以自動化的方式持續優化代碼，提升開發效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/davebcn87--pi-autoresearch");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "davebcn87--pi-autoresearch" && p.status !== "archived")
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
> **結論** 花 5 小時學習、3 小時整合，得到自動化實驗的高效益，值得投入。

> [!abstract] 核心創新
> 這個專案的創新在於提供了一個可持續的自動化實驗循環，並且能夠在不同的優化目標之間靈活切換。

## 專案簡介

這個專案提供了一個自動化的實驗循環，讓開發者能夠快速測試不同的優化方案，並根據結果決定保留或丟棄。用戶可以透過 `/autoresearch` 命令進入自動研究模式，並設定實驗的目標、命令和指標。每次實驗的結果會被記錄到 `autoresearch.jsonl` 檔案中，這樣即使重啟也能夠繼續進行。這種設計使得實驗過程不斷迭代，並且能夠在不同分支之間保持獨立的實驗狀態。其核心賣點在於能夠自動化測試過程，減少手動操作的需求，並且提供即時的結果反饋。

技術上，這個專案使用 TypeScript 開發，並依賴於多個 peer dependencies，如 `@mariozechner/pi-ai` 和 `@sinclair/typebox`，這些都強化了其功能性和擴展性。與其他類似工具相比，如 `karpathy/autoresearch`，這個專案的優勢在於其可擴展的架構，能夠支持多種優化目標，並且提供了完整的 UI 介面來監控實驗進度。使用者在使用過程中可能會遇到一些限制，例如對於特定命令的支持程度，或是需要手動設定某些參數。總體而言，這個專案非常適合需要進行持續優化的開發團隊，尤其是在大型專案中，能夠顯著提升開發效率。

**技術棧**：`TypeScript`

## 重點功能

- 自動化實驗循環 — 透過 `/autoresearch` 命令進入自動研究模式，持續測試和優化。
- 實驗結果記錄 — 每次實驗結果會被記錄到 `autoresearch.jsonl`，支持恢復和持久化。
- 多種指標支持 — 能夠測試速度、包大小、模型訓練等多種優化目標。
- 即時監控面板 — 提供可視化的狀態小工具和擴展的儀表板，便於監控實驗進度。
- 可擴展的架構 — 分離的擴展和技能設計，支持多種領域的優化需求。

## 快速開始

1. 安裝 pi-autoresearch
```bash
pi install https://github.com/davebcn87/pi-autoresearch
```
2. 啟動自動研究
```bash
/skill:autoresearch-create
```
3. 進入自動研究模式
```bash
/autoresearch
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 pi-autoresearch",
  "指令": "/autoresearch optimize unit test runtime, monitor correctness",
  "預期輸出": "開始自動化測試並監控正確性。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 2216 stars（317/天），forks 109（4.9%），顯示出穩定的增長潛力。作者 davebcn87 之前參與過多個開源專案，這次專案解決了自動化實驗過程中的繁瑣手動操作問題，讓開發者能夠專注於優化而非管理實驗。近期的推廣和社群的討論也可能促進了其曝光率。這個工具的設計理念符合當前開發者對於自動化和效率提升的需求，尤其是在快速迭代的開發環境中。forks/stars 比率為 4.9%，顯示出有相當比例的用戶在積極修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要自動化測試和優化過程的開發團隊，特別是在大型專案中。

> [!example] 使用場景
> - 前端工程師用它來自動測試和優化網站的加載速度，因為它能夠持續監控並記錄每次測試的結果，讓優化過程變得高效且可追溯。
> - 資料科學家用它來優化機器學習模型的訓練過程，因為它可以自動執行多次訓練並記錄性能指標，幫助快速找到最佳模型參數。
> - DevOps 工程師用它來監控和優化 CI/CD 流程，因為它能夠自動記錄每次構建的時間和結果，從而持續改進構建效率。

## 架構分析

這個專案的架構分為兩個主要部分：擴展和技能。擴展部分提供了全域的實驗運行和記錄功能，而技能則專注於特定領域的優化知識。這種設計使得一個擴展可以服務於無限的領域，並且能夠根據不同的需求進行調整。

資料流方面，實驗的每次運行都會記錄到 `autoresearch.jsonl` 中，這樣即使重啟也能夠恢復上下文。選擇這種架構的代價在於需要用戶手動配置某些參數，並且對於大型專案的支持可能需要額外的管理。整體而言，這種設計提供了靈活性和擴展性，但在使用上可能會增加一些複雜度。

## 技術深入分析

這個專案的核心技術機制在於其自動化的實驗循環，使用 TypeScript 實現，並依賴於多個 peer dependencies 來擴展功能。每次實驗的結果會被記錄到 `autoresearch.jsonl` 檔案中，這樣即使在重啟後也能夠恢復上下文。效能方面，這個工具能夠處理多個實驗的運行，並且在記憶體和 CPU 使用上相對輕量，適合在開發環境中使用。設計上選擇了分離的擴展和技能架構，這使得其能夠支持多種優化領域，但也要求用戶在設定上花費更多時間。技術風險方面，對於大型專案的支持可能會遇到上下文管理的挑戰，特別是在多分支開發的情況下。整合方面，這個工具可以與現有的 CI/CD pipeline 友好整合，但在具體實施時可能需要額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件質量良好，提供了清晰的安裝和使用指導。安裝過程相對順暢，但需要注意環境變數的配置。文件中沒有多語言支持，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 提供自動化的實驗循環，顯著減少手動操作。
> - 支持多種優化目標，靈活性高。
> - 即時監控和結果記錄，便於追蹤進度。

> [!danger] 缺點
> - 對於特定命令的支持可能有限。
> - 需要手動配置環境變數，增加使用複雜度。
> - 大型專案的上下文管理可能需要額外的手動介入。

> [!warning] 注意事項
> - 目前只支持特定的命令格式，對於不在支持範圍內的命令可能無法正常運行。
> - 需要正確配置環境變數以確保實驗能夠順利執行。
> - 對於大型專案，可能需要手動管理實驗的上下文和狀態。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | 這個專案是 karpathy 的原始版本，提供基本的自動化實驗功能，但缺乏更進階的 UI 和多領域支持。 |
| [aiming-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) | 這個工具專注於特定的優化領域，可能在功能上更為專一，但不如本專案通用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | 這個工具提供了基本的自動化實驗功能，但缺乏更進階的 UI 和多領域支持。 | 如果你只需要基本的自動化實驗功能，而不需要複雜的 UI 和多領域支持時，可以選擇它。 | medium，因為需要重新配置實驗環境和上下文管理。 |
| [aiming-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) | 這個工具專注於特定的優化領域，可能在功能上更為專一，但不如本專案通用。 | 如果你的專案有特定的優化需求，且不需要通用性，可以考慮這個工具。 | low，因為功能相似且配置較為簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **pi-autoresearch** | **autoresearch** | **AutoResearchClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具提供了基本的自動化實驗功能，但缺乏更進階的 UI 和多領域支持。 | 這個工具專注於特定的優化領域，可能在功能上更為專一，但不如本專案通用。 |
> | 遷移成本 | - | medium，因為需要重新配置實驗環境和上下文管理。 | low，因為功能相似且配置較為簡單。 |
> | 適用場景 | 主要場景 | 如果你只需要基本的自動化實驗功能，而不需要複雜的 UI 和多 | 如果你的專案有特定的優化需求，且不需要通用性，可以考慮這個工 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合在小型專案中試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 對於某些命令可能無法正常執行，特別是未經測試的命令。
  - 解法：在執行之前先確認命令的兼容性。
- [MEDIUM] 在大型專案中，可能需要手動管理實驗的上下文和狀態。
  - 解法：定期檢查 `autoresearch.jsonl` 的內容以確保狀態正確。
- **[HIGH]** 環境變數配置不當可能導致實驗失敗。
  - 解法：仔細檢查配置文件，確保所有必要的變數都已正確設置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠快速測試和優化 API 性能，提升開發效率。 |
| 大型企業的多分支開發專案 | 普通 | 需要額外的上下文管理，可能會增加複雜度。 |
| 資料科學團隊進行模型訓練 | 非常適合 | 能夠自動化訓練過程並持續優化模型性能。 |
| 個人開發者的 side project | 非常適合 | 簡單易用，能夠快速進行實驗和優化。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到自動化實驗的高效益，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不存取敏感資料。依賴鏈的信任程度較高，沒有已知的供應鏈風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 pi 生態系統中的其他工具搭配使用，特別是在開發和測試階段。典型的工作流中，它可以與 CI/CD 工具整合，提供自動化的測試和部署。實際整合範例是，在使用 Next.js 的專案中，可以透過 `/autoresearch` 命令自動測試和優化應用性能。與主流 CI 工具如 GitHub Actions 和 GitLab CI 的相容性良好，並且可以與 VS Code 等 IDE 整合，提供即時的反饋和監控。整合的摩擦點主要在於需要手動配置某些參數，並且對於大型專案的支持可能需要額外的適配工作。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，開發者通常依賴手動測試和優化，這導致了效率低下和錯誤率高。使用的工具往往缺乏自動化能力，無法持續追蹤和記錄實驗結果。隨著自動化技術的進步，這個專案的出現使得開發者能夠更有效地進行實驗和優化。

這個工具代表了開發流程中自動化和智能化的趨勢，未來可能會進一步整合 AI 技術來提升優化效果。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 TypeScript
- 了解基本的 CI/CD 流程
- 有使用 pi 生態系統的經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用，熟悉基本功能。第二週：在小型團隊的內部工具中導入，測試效果。第三週：根據使用反饋調整配置，並撰寫最佳實踐文件。第四週：在主產品中選擇一個非核心模組開始使用。

**成功指標**：實驗的成功率提高 30%，或測試時間減少 50%。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以輕鬆轉換為其他工具的格式，減少遷移成本。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/davebcn87--pi-autoresearch");
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
> const me = dv.page("Repos/davebcn87--pi-autoresearch");
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
| Forks | 109 |
| Open Issues | 7 |
| Issue 解決率 | 42% (5 closed) |
| 最後推送 | 2026-03-18 |
| 建立日期 | 2026-03-11 |
| Repo 大小 | 1.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/davebcn87/pi-autoresearch) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tobi](https://github.com/tobi) | 51 |
> | [@davebcn87](https://github.com/davebcn87) | 37 |
> | [@kshetrajna12](https://github.com/kshetrajna12) | 4 |
> | [@matteodepalo](https://github.com/matteodepalo) | 3 |
> | [@ayagmar](https://github.com/ayagmar) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度中等，有一定的開發者參與和問題回應。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-18 ~ 2026-03-18）
> **活躍天數** 1 天 · **最新 commit** fix: reset secondaryMetrics on segment change during jsonl reconstruction

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#23](https://github.com/davebcn87/pi-autoresearch/issues/23) | support openai codex ? | 0 | 0 |
> | [#15](https://github.com/davebcn87/pi-autoresearch/issues/15) | RFC: Statistical confidence layer for METRIC improvements | 0 | 4 |

## README 摘錄

> [!info]- 展開查看原文 README
> # pi-autoresearch
> ### Autonomous experiment loop for pi
> **[Install](#install)** · **[Usage](#usage)** · **[How it works](#how-it-works)**
> 
> *Try an idea, measure it, keep what works, discard what doesn't, repeat forever.*
> 
> Inspired by [karpathy/autoresearch](https://github.com/karpathy/autoresearch). Works for any optimization target: test speed, bundle size, LLM training, build times, Lighthouse scores.
> 
> ---
> 
> ---
> 
> ## Quick start
> 
> ```bash
> pi install https://github.com/davebcn87/pi-autoresearch
> ```
> 
> ## What's included
> 
> | | |
> |---|---|
> | **Extension** | Tools + live widget + `/autoresearch` dashboard |
> | **Skill** | Gathers what to optimize, writes session files, starts the loop |
> 
> ### Extension tools
> 
> | Tool | Description |
> |------|-------------|
> | `init_experiment` | One-time session config — name, metric, unit, direction |
> | `run_experiment` | Runs any command, times wall-clock duration, captures output |
> | `log_experiment` | Records result, auto-commits, updates widget and dashboard |
> 
> ### `/autoresearch` command
> 
> | Subcommand | Description |
> |------------|-------------|
> | `/autoresearch ` | Enter autoresearch mode. If `autoresearch.md` exists, resumes the loop with `` as context. Otherwise, sets up a new session. |
> | `/autoresearch off` | Leave autoresearch mode. Stops auto-resume and clears runtime state but keeps `autoresearch.jsonl` intact. |
> | `/autoresearch clear` | Delete `autoresearch.jsonl`, reset all state, and turn autoresearch mode off. Use this for a clean start. |
> 
> **Examples:**
> 
> ```
> /autoresearch optimize unit test runtime, monitor correctness
> /autoresearch model training, run 5 minutes of train.py and note the loss ratio as optimization target
> /autoresearch off
> /autoresearch clear
> ```
> 
> ### Keyboard shortcuts
> 
> | Shortcut | Description |
> |----------|-------------|
> | `Ctrl+X` | Toggle dashboard expand/collapse (inline widget ↔ full results table above the editor) |
> | `Ctrl+Shift+X` | Open fullscreen scrollable dashboard overlay. Navigate with `↑`/`↓`/`j`/`k`, `PageUp`/`PageDown`/`u`/`d`, `g`/`G` for top/bottom, `Escape` or `q` to close. |
> 
> ### UI
> 
> - **Status widget** — always visible above the editor: `🔬 autoresearch 12 runs 8 kept │ best: 42.3s`
> - **Expanded dashboard** — `Ctrl+X` expands the widget into a full results table with columns for commit, metric, status, and description.
> - **Fullscreen overlay** — `Ctrl+Shift+X` opens a scrollable full-terminal dashboard. Shows a live spinner with elapsed time for running experiments.
> ### Skill
> 
> `autoresearch-create` asks a few questions (or infers from context) about your goal, command, metric, and files in scope — then writes two files and starts the loop immediately:
> 
> | File | Purpose |
> |------|---------|
> | `autoresearch.md` | Session document — objective, metrics, files in scope, what's been tried. A fresh agent can resume from this alone. |
> | `autoresearch.sh` | Benchmark script — pre-checks, runs the workload, outputs `METRIC name=number` lines. |
> | `autoresearch.checks.sh` | *(optional)* Backpressure checks — tests, types, lint. Runs after each passing benchmark. Failures block `keep`. |
> 
> ---
> 
> ## Install
> 
> ```bash
> pi install https://github.com/davebcn87/pi-autoresearch
> ```
> 
> Manual install
> 
> ```bash
> cp -r extensions/pi-autoresearch ~/.pi/agent/extensions/
> cp -r skills/autoresearch-create ~/.pi/agent/skills/
> ```
> 
> Then `/reload` in pi.
> 
> ---
> 
> ## Usage
> 
> ### 1. Start autoresearch
> 
> ```
> /skill:autoresearch-create
> ```
> 
> The agent asks about your goal, command, metric, and files in scope — or infers them from context. It then creates a branch, writes `autoresearch.md` and `autoresearch.sh`, runs the baseline, and starts looping immediately.
> 
> ### 2. The loop
> 
> The agent runs autonomously: edit → commit → `run_experiment` → `log_experiment` → keep or revert → repeat. It never stops unless interrupted.
> 
> Every result is appended to `autoresearch.jsonl` in your project — one line per run. This means:
> 
> - **Survives restarts** — the agent can resume a session by reading the file
> - **Survives context resets** — `autoresearch.md` captures what's been tried so a fresh agent has full context
> - **Human readable** — open it anytime to see the full history
> - **Branch-aware** — each branch has its own session
> 
> ### 3. Monitor progress
> 
> - **Widget** — always visible above the editor
> - **`/autoresearch`** — full dashboard with results table and best run
> - **`Escape`** — interrupt anytime and ask for a summary
> 
> ---
> 
> ## Example domains
> 
> | Domain | Metric | Command |
> |--------|--------|---------|
> | Test speed | seconds ↓ | `pnpm test` |
> | Bundle size | KB ↓ | `pnpm build && du -sb dist` |
> | LLM training | val_bpb ↓ | `uv run train.py` |
> | Build speed | seconds ↓ | `pnpm build` |
> | Lighthouse | perf score ↑ | `lighthouse http://localhost:3000 --output=json` |
> 
> ---
> 
> ## How it works
> 
> The **extension** is domain-agnostic infrastructure. The **skill** encodes domain knowledge. This separation means one extension serves unlimited domains.
> 
> ```
> ┌──────────────────────┐     ┌──────────────────────────┐
> │  Extension (global)  │     │  Skill (per-domain)       │
> │                      │     │                           │
> │  run_experiment      │◄────│  command: pnpm test       │
> │  log_experiment      │     │  metric: seconds (lower)  │
> │  widget + dashboard  │     │  scope: vitest configs    │
> │                      │     │  ideas: pool, parallel…   │
> └──────────────────────┘     └──────────────────────────┘
> ```
> 
> Two files keep the session alive across restarts and context resets:
> 
> ```
> autoresearch.jsonl   — append-only log of every run (metric, status, commit, description)
> autoresearch.md      — living document: objective, what's been tried, dead ends, key wins
> ```
> 
> A fresh agent with no memory can read these two files and continue exactly where the previous session left off.
> 
> ---
> 
> ## Configuration (optional)
> 
> Create `autoresearch.config.json` in your pi session directory to customize behavior:
> 
> ```json
> {
>   "workingDir": "/path/to/project",
>   "maxIterations": 50
> }
> ```
> 
> | Field | Type | Description |
> |-------|------|-------------|
> | `workingDir` | string | Override the directory for all autoresearch operations — file I/O, command execution, and git. Supports absolute or relative paths (resolved against the pi session cwd). The config file itself always stays in the session cwd. Fails if the directory doesn't exist. |
> | `maxIterations` | number | Maximum experiments before auto-stopping. The agent is told to stop and won't run more experiments until a new segment is initialized. |
> 
> ---
> 
> ## Backpressure checks (optional)
> 
> Create `autoresearch.checks.sh` to run correctness checks (tests, types, lint) after every passing benchmark. This ensures optimizations don't break things.
> 
> ```bash
> #!/bin/bash
> set -euo pipefail
> pnpm test --run
> pnpm typecheck
> ```
> 
> **How it works:**
> 
> - If the file doesn't exist, everything behaves exactly as before — no changes to the loop.
> - If it exists, it runs automatically after every benchmark that exits 0.
> - Checks execution time does **not** affect the primary metric.
> - If checks fail, the experiment is logged as `checks_failed` (same behavior as a crash — no commit, revert changes).
> - The `checks_failed` status is shown separately in the dashboard so you can distinguish correctness failures from benchmark crashes.
> - Checks have a separate timeout (default 300s, configurable via `checks_timeout_seconds` in `run_experiment`).
> 
> ---
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[自動化]] · [[CI/CD]] · [[機器學習]]

相關專案：[[karpathy--autoresearch|karpathy/autoresearch]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[trevin-creator--autoresearch-mlx|trevin-creator/autoresearch-mlx]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]]

[GitHub](https://github.com/davebcn87/pi-autoresearch)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "davebcn87--pi-autoresearch"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "davebcn87--pi-autoresearch"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "davebcn87--pi-autoresearch" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "davebcn87--pi-autoresearch"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CI/CD","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "davebcn87--pi-autoresearch" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/davebcn87--pi-autoresearch");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "davebcn87--pi-autoresearch" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "davebcn87" AND file.name != "davebcn87--pi-autoresearch"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/davebcn87--pi-autoresearch");
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
> const me = dv.page("Repos/davebcn87--pi-autoresearch");
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
> const me = dv.page("Repos/davebcn87--pi-autoresearch");
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
> const me = dv.page("Repos/davebcn87--pi-autoresearch");
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
> const me = dv.page("Repos/davebcn87--pi-autoresearch");
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

> **2026-03-14** — 首次收錄
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

- [[2026-03-18|2026-03-18]] — 再次上榜，2.1k stars
- [[2026-03-17|2026-03-17]] — 再次上榜，2.0k stars
- [[2026-03-16|2026-03-16]] — 再次上榜，1.9k stars
- [[2026-03-15|2026-03-15]] — 再次上榜，1.6k stars
- [[2026-03-14|2026-03-14]] — 首次收錄，1.2k stars
