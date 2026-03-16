---
repo: davebcn87/pi-autoresearch
url: https://github.com/davebcn87/pi-autoresearch
owner: davebcn87
owner_type: User
language: TypeScript
license: MIT
description: "Autonomous experiment loop extension for pi"
homepage: ""
stars: 1853
stars_per_day: 463
forks: 93
open_issues: 6
created: 2026-03-11
pushed_at: 2026-03-13
first_seen: 2026-03-14
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-14
use_case: "自動化實驗循環，讓你測試、記錄、優化程式碼表現。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-19"
contributor_count: 2
engagement: "low"
issue_close_rate: 14
repo_size_kb: 1096
readme_length: 5341
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-14"
star_history: "2026-03-14:1167,2026-03-14:1172,2026-03-15:1599,2026-03-15:1605,2026-03-16:1851,2026-03-16:1853"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "pi-autoresearch"
  - "davebcn87/pi-autoresearch"
  - "自動化實驗循環，讓你測試、記錄、優化程式碼表現。"
---

# pi-autoresearch

**1.9k** stars · **463** stars/天 · 建立 4 天前 · TypeScript · MIT

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

> [!summary] 一句話摘要
> 自動化實驗循環，讓你測試、記錄、優化程式碼表現。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (463 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在 Pi 環境中自動化實驗流程的開發者，特別是對性能優化有需求的團隊。
> **一句話重點** 這個專案的自動化實驗循環設計，讓開發者能夠高效地測試和優化程式碼表現。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學習，2 小時整合，得到自動化實驗的高效益，值得一試。

> [!abstract] 核心創新
> 這個專案的創新在於其自動化實驗循環的設計，能夠持續記錄和優化開發過程。

## 專案簡介

這個專案提供了一個自動化的實驗循環，讓開發者能夠持續測試和優化程式碼。用戶可以透過 `/skill:autoresearch-create` 指令來啟動一個新的實驗循環，系統會詢問目標、命令、指標等資訊，並自動生成 `autoresearch.md` 和 `autoresearch.sh` 兩個檔案來記錄實驗過程。每次實驗的結果會被記錄到 `autoresearch.jsonl` 中，確保即使重啟後也能繼續進行。這樣的設計讓開發者能夠在不斷的迭代中，保留有效的實驗結果並丟棄無效的嘗試，從而提高開發效率。此工具的賣點在於其無縫的自動化流程，能夠持續運行直至用戶手動中斷。

技術上，這個專案使用 TypeScript 實作，並依賴於多個 peerDependencies，如 `@mariozechner/pi-ai` 和 `@sinclair/typebox`，這使得它能夠在 Pi 環境中靈活運作。與其他類似工具相比，如 `karpathy/autoresearch`，這個專案專注於提供一個可擴展的架構，讓用戶可以針對不同的優化目標進行實驗，而不僅僅局限於特定的應用場景。實際使用中，開發者可以監控進度，並透過 UI 小工具和 `/autoresearch` 儀表板來查看實驗結果。這個工具適合需要持續優化和測試的開發團隊，尤其是在面對多變的需求時。未來幾個月，預期會有更多功能和優化被加入，進一步提升其可用性和穩定性。

**技術棧**：`TypeScript`

## 重點功能

- 自動化實驗循環 — 使用 `/skill:autoresearch-create` 指令啟動，系統會自動生成所需檔案並開始實驗。
- 結果記錄 — 每次實驗結果都會記錄到 `autoresearch.jsonl`，便於後續查閱和分析。
- 狀態小工具 — 實時顯示當前實驗狀態，讓開發者隨時掌握進度。
- 可擴展性 — 支援多種優化目標，無論是測試速度、打包大小或是模型訓練。
- 回壓檢查 — 可選的 `autoresearch.checks.sh` 檔案可以在每次基準測試後自動執行檢查，確保不破壞現有功能。

## 快速開始

1. 安裝 pi-autoresearch
```bash
pi install https://github.com/davebcn87/pi-autoresearch
```
2. 啟動 autoresearch
```bash
/skill:autoresearch-create
```
3. 監控實驗進度
```bash
/autoresearch
```

## 程式碼範例

```ts
[
  "# 前置條件（需要在 pi 環境中）",
  "/skill:autoresearch-create",
  "# 預期輸出（系統會詢問目標等資訊並開始實驗）"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 1853 stars（463/天），forks 93（5.0%），顯示出穩定的增長潛力。這個專案由 davebcn87 和 tobi 共同開發，他們在開源社群中有一定的影響力。此工具解決了開發者在實驗過程中常遇到的重複性工作問題，讓實驗過程更為自動化和高效。最近的推廣活動和社群討論可能也促進了其曝光率。技術上，這個工具的設計理念和功能架構使其能夠靈活應對多種優化需求，這在當前快速變化的開發環境中尤為重要。forks/stars 比率為 5.0%，顯示出有相當比例的用戶在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要在 Pi 環境中自動化實驗流程的開發者，特別是對性能優化有需求的團隊。

> [!example] 使用場景
> - 後端工程師用它來自動測試 API 性能，因為能夠持續記錄和優化測試結果，減少手動操作的時間。
> - 前端開發者用它來優化打包大小，因為可以快速迭代並記錄每次打包的結果，從而找到最佳配置。
> - 資料科學家用它來訓練模型，因為能夠自動化訓練過程並持續記錄性能指標，讓模型優化變得更高效。

## 架構分析

這個專案採用模組化架構，將擴展和技能分開設計。擴展提供了全域的基礎設施，而技能則專注於特定領域的知識。這樣的設計使得一個擴展可以服務於無限的領域，並且能夠在不同的實驗中重用。

資料流方面，實驗的結果會被記錄在 `autoresearch.jsonl` 中，這樣即使重啟後也能夠持續進行。選擇這種設計的代價在於需要管理多個檔案，但這樣的靈活性在多變的開發環境中是非常有價值的。擴展性方面，這個架構能夠輕鬆地加入新的技能或擴展，對於未來的功能擴展非常友好。

## 技術深入分析

這個專案的核心技術機制在於其自動化實驗循環，使用 TypeScript 實作，並依賴於多個 peerDependencies 來擴展功能。每次實驗的結果都會被記錄在 `autoresearch.jsonl` 中，這樣的設計確保了即使在重啟後也能夠繼續進行。效能方面，這個工具的設計能夠處理多次實驗的結果，並且在每次實驗後自動更新狀態小工具。選擇 TypeScript 作為開發語言的好處在於其靜態類型檢查能夠提高代碼的穩定性，代價則是對於不熟悉 TypeScript 的開發者來說，學習曲線可能較陡峭。技術風險方面，這個專案依賴於多個外部庫，這可能會帶來供應鏈風險，特別是在依賴的庫未經過充分審計的情況下。整合方面，這個工具能夠與現有的 CI/CD 流程友好地結合，但在初次整合時可能需要一些調整。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並包含了範例指令。安裝過程相對順暢，但需要注意依賴的處理。文件中沒有多語言支持，主要以英文為主。整體來說，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 自動化實驗流程，減少手動操作。
> - 能夠持續記錄實驗結果，便於後續分析。
> - 靈活的架構設計，支援多種優化目標。

> [!danger] 缺點
> - 僅限於 Pi 環境，無法在其他平台使用。
> - 安裝過程需要處理多個依賴，增加了複雜度。
> - 功能仍在開發中，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 Pi 環境，無法在其他環境運行。
> - 需要安裝多個 peerDependencies，可能增加安裝複雜度。
> - 目前功能仍在開發中，可能存在不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | 這個工具專注於自動化實驗循環，但功能較為單一，無法支援多種優化目標。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具主要用於資料同步，而 pi-autoresearch 專注於實驗和性能優化，功能範圍不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | 專注於自動化實驗，但功能較為單一，無法支援多種優化目標。 | 如果你的需求僅限於單一優化目標，這個工具可能更簡單易用。 | low，因為功能相似，遷移成本較低。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 主要用於資料同步，而 pi-autoresearch 專注於實驗和性能優化，功能範圍不同。 | 如果你的主要需求是資料同步而非實驗優化，則應選擇此工具。 | medium，因為功能和使用場景不同，可能需要重新設計部分流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **pi-autoresearch** | **autoresearch** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動化實驗，但功能較為單一，無法支援多種優化目標。 | 主要用於資料同步，而 pi-autoresearch 專注於實驗和性能優化，功能範圍不同。 |
> | 遷移成本 | - | low，因為功能相似，遷移成本較低。 | medium，因為功能和使用場景不同，可能需要重新設計部分流程。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於單一優化目標，這個工具可能更簡單易用。 | 如果你的主要需求是資料同步而非實驗優化，則應選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人或小型團隊的實驗性專案，不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在多個實驗同時運行時，可能會導致狀態混亂。
  - 解法：建議在不同分支上運行不同的實驗。
- [MEDIUM] 如果 `autoresearch.checks.sh` 檔案不存在，則不會執行任何檢查。
  - 解法：確保在需要的情況下創建該檔案。
- [MEDIUM] 在重啟後，可能需要手動重新加載擴展。
  - 解法：使用 `/reload` 指令來重新加載擴展。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠自動化測試流程，提升開發效率。 |
| 大型團隊的多個專案 | 普通 | 可能需要額外的管理來處理多個實驗。 |
| 個人開發者的 side project | 非常適合 | 能夠快速迭代和優化，降低開發成本。 |
| 需要高穩定性的生產環境 | 不適合 | 目前仍在 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學習，2 小時整合，得到自動化實驗的高效益，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不會存取敏感資料。依賴的庫需定期檢查以確保安全性。

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
| Forks | 93 |
| Open Issues | 6 |
| Issue 解決率 | 14% (1 closed) |
| 最後推送 | 2026-03-13 |
| 建立日期 | 2026-03-11 |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/davebcn87/pi-autoresearch) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tobi](https://github.com/tobi) | 50 |
> | [@davebcn87](https://github.com/davebcn87) | 15 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有幾個 commit 和開放的 issue。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-11 ~ 2026-03-13）
> **活躍天數** 3 天 · **最新 commit** Improve autoresearch command and auto-resume guards

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#7](https://github.com/davebcn87/pi-autoresearch/issues/7) | Autoresearch state leaks across pi sessions/projects (widget | 2 | 0 |
> | [#6](https://github.com/davebcn87/pi-autoresearch/issues/6) | Dedicated 'stop' button or command? | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # pi-autoresearch — autonomous experiment loop for pi
> 
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
> ### UI
> 
> - **Status widget** — always visible above the editor: `🔬 autoresearch 12 runs 8 kept │ best: 42.3s`
> - **`/autoresearch`** — full results dashboard (`Ctrl+X` to toggle, `Escape` to close)
> 
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

相關概念：[[自動化]] · [[CI/CD]] · [[性能優化]]

相關專案：[[karpathy--autoresearch|karpathy/autoresearch]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[trevin-creator--autoresearch-mlx|trevin-creator/autoresearch-mlx]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[livehl--aimirror|livehl/aimirror]]

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
> const concepts = ["自動化","CI/CD","性能優化"];
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

- [[2026-03-16|2026-03-16]] — 再次上榜，1.9k stars
- [[2026-03-15|2026-03-15]] — 再次上榜，1.6k stars
- [[2026-03-14|2026-03-14]] — 首次收錄，1.2k stars
