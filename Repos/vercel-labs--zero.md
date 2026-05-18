---
repo: vercel-labs/zero
url: https://github.com/vercel-labs/zero
owner: vercel-labs
owner_type: Organization
language: C
license: Apache-2.0
description: "The programming language for agents"
homepage: "https://zerolang.ai"
stars: 1697
stars_per_day: 849
forks: 106
open_issues: 31
created: 2026-05-15
pushed_at: 2026-05-17
first_seen: 2026-05-17
week: "2026-W21"
month: "2026-05"
category: "開發工具"
subcategory: "程式碼工具"
release_tag: "v0.1.1"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-17
use_case: "為代理程式設計的編程語言，專注於小型原生工具的開發。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-21"
contributor_count: 1
engagement: "low"
issue_close_rate: 11
repo_size_kb: 1157
readme_length: 1914
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-17"
star_history: "2026-05-17:1030,2026-05-18:1697"
tags:
  - github
  - "category/開發工具"
  - "lang/c"
  - org
  - easy_install
aliases:
  - "zero"
  - "vercel-labs/zero"
  - "為代理程式設計的編程語言，專注於小型原生工具的開發。"
---

# zero

**1.0k** stars · **1.0k** stars/天 · 建立 1 天前 · C · Apache-2.0

```dataviewjs
const me = dv.page("Repos/vercel-labs--zero");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.1.1` `easy-install`

> [!summary] 一句話摘要
> 為代理程式設計的編程語言，專注於小型原生工具的開發。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.0k stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速開發小型原生工具的開發者，尤其是對系統編程有需求的團隊。
> **一句話重點** Zero 的設計不僅針對小型工具開發，還強調了系統級編程的靈活性和效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/vercel-labs--zero");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "程式碼工具" && p.file.name !== "vercel-labs--zero" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 程式碼工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到快速開發小型工具的能力，值得考慮。

> [!abstract] 核心創新
> Zero 提供了一種針對小型原生工具的專門編程語言，強調可預測的記憶體管理和明確的效果。

## 專案簡介

**核心機制**

Zero 是一種針對代理程式的系統語言，旨在提供小型原生工具的開發。它的核心機制包括編譯器生成可執行檔，並能夠透過 `zero run` 指令執行程式，這讓開發者能夠快速迭代和測試程式碼。使用者只需透過 `curl` 安裝，並可用 `zero check` 檢查程式碼，這樣的設計使得開發流程更加簡化和高效。Zero 的設計重點在於可預測的記憶體使用和明確的效果，這在處理系統級應用時尤其重要。其標準庫和文檔雖然仍在發展中，但已經提供了基本的功能和範例，讓使用者能夠快速上手。

**技術實作**

這種設計使得 Zero 在小型工具開發上具備了良好的靈活性和可擴展性。

在技術實作上，Zero 使用 C 和 TypeScript 實現其編譯器，並依賴於現代的開發工具鏈。這樣的選擇使得它能夠在性能和易用性之間取得平衡，並且能夠與現有的 JavaScript 生態系統良好整合。與其他語言相比，如 Rust 或 Go，Zero 更加專注於小型工具的快速開發，而不是大型應用的完整性。

在替代方案方面，Zero 與 Rust 和 Go 的主要差異在於其對小型原生工具的專注。

**競品比較**

Rust 提供了更強的記憶體安全性，但學習曲線較陡；Go 則在並發處理上表現優異，但在系統級控制上不如 Zero 靈活。Zero 的設計使其在小型專案或原型開發中更具吸引力。

使用 Zero 時，開發者可能會遇到一些限制，例如目前的功能仍在不斷變化，且社群支持和文檔尚未完全成熟。這意味著對於需要穩定性的生產環境，可能需要謹慎考慮其應用。從社群活躍度來看，開發者的回應速度和問題解決率仍有提升空間。

**效果與限制**



目前，Zero 處於 alpha 階段，適合用於探索性專案或小型團隊的原型開發。預計未來會持續增強功能和穩定性，特別是在標準庫和文檔方面。對於需要快速開發小型工具的開發者，Zero 是一個值得考慮的選擇。

**技術棧**：`C` · `TypeScript` · `Shell`

## 重點功能

- 簡單安裝 — 使用 `curl` 命令安裝，並自動配置環境變數。
- 即時執行 — 使用 `zero run` 指令快速執行程式，並能夠傳遞參數。
- 記憶體管理 — 提供可預測的記憶體使用，適合系統級應用。
- 標準庫 — 包含 `std.crypto` 和 `std.http` 等模組，支持常見功能。
- 文檔豐富 — 提供詳細的文檔和範例，幫助使用者快速上手。

## 快速開始

1. 安裝最新版本
```bash
curl -fsSL https://zerolang.ai/install.sh | bash
```
2. 檢查安裝版本
```bash
zero --version
```
3. 執行範例程式
```bash
zero run examples/add.0
```

## 程式碼範例

```c
[
  "# 前置條件：已安裝 Zero 語言",
  "zero run examples/add.0",
  "# 預期輸出：math works"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1030 stars（1030/天），forks 56（5.4%），這顯示出強烈的興趣。作者 ctate 之前在開源社群中有一定的影響力，這個專案解決了小型原生工具開發中的靈活性和效率問題，之前的方案如 Rust 和 Go 雖然強大，但在小型工具開發上不夠專注。社群的反應和問題討論也顯示出使用者對於功能和穩定性的期待。技術生態的變化，如對於小型工具需求的增加，也讓這個工具變得更加可行。forks/stars 比率在中等範圍，顯示出一些開發者開始實際修改和使用此工具。

## 適合誰使用

**目標受眾**：需要快速開發小型原生工具的開發者，尤其是對系統編程有需求的團隊。

> [!example] 使用場景
> - 後端工程師用它來快速開發小型原生工具，因為 Zero 提供了簡單的安裝和執行流程，讓開發者能夠專注於功能實現。
> - 系統開發者用它來測試和驗證系統級應用，因為 Zero 的可預測記憶體管理和明確效果使得調試過程更為簡單。
> - 開發者用它來進行原型設計，因為 Zero 的快速迭代能力能夠在短時間內實現想法並進行測試。

## 架構分析

Zero 的架構設計以簡單的編譯器為核心，使用 C 實現編譯過程，並用 TypeScript 實現 CLI 工具。這樣的選擇使得編譯器能夠快速生成可執行檔，並且能夠在多平台上運行。資料流方面，使用者編寫的程式碼經過編譯器轉換為原生可執行檔，並透過 `zero run` 指令執行。

這種設計使得開發者能夠快速迭代，並且在小型工具開發中獲得良好的性能。選擇 C 而非其他語言如 Rust，雖然可能犧牲一些安全性，但卻能獲得更高的執行效率和更小的編譯時間。擴展性方面，Zero 目前仍在發展中，未來可能會增加更多功能和模組，但目前的設計已經能夠支持基本的系統級應用開發。

## 技術深入分析

Zero 的核心技術機制在於其編譯器的設計，使用 C 語言實現，這使得編譯過程高效且能夠生成原生可執行檔。其標準庫提供了基本的功能模組，如 `std.crypto` 和 `std.http`，這些模組的存在使得開發者能夠快速實現常見的功能需求。效能方面，Zero 的編譯器設計使得生成的可執行檔在執行時具有良好的性能，並且能夠在多平台上運行。設計取捨方面，選擇 C 語言雖然可能在安全性上有所妥協，但卻能獲得更高的執行效率。技術風險方面，Zero 目前仍在 alpha 階段，未來可能會面臨功能不穩定的問題，這對於需要穩定性的生產環境來說是一個潛在的風險。整合分析方面，Zero 的 CLI 工具與現有的開發工具鏈相容性良好，能夠輕鬆整合到現有的開發流程中，並且支持常見的 CI/CD 工具，這使得它在實際應用中具備了良好的靈活性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了安裝和使用範例，安裝過程順暢。雖然文檔尚在完善中，但已有基本的 getting started guide。文件目前僅提供英文版本，對於非英語使用者可能會有一定的學習曲線。

## 優缺點分析

> [!success] 優點
> - 快速安裝和簡單的使用流程，適合新手。
> - 可預測的記憶體管理，適合系統級應用。
> - 提供詳細的文檔和範例，幫助使用者快速上手。

> [!danger] 缺點
> - 仍在 alpha 階段，功能不穩定。
> - 社群支持和文檔尚未完全成熟，可能需要額外的探索。
> - 某些功能可能會隨著版本更新而變動。

> [!warning] 注意事項
> - 目前仍在 alpha 階段，功能不穩定。
> - 社群支持和文檔尚未完全成熟，可能需要額外的探索。
> - 某些功能可能會隨著版本更新而變動。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理工具的開發，但更側重於圖形化界面和用戶互動，而 Zero 更加專注於系統級編程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的功能，但在語言設計上更為複雜，Zero 的簡潔性使其更易於上手。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 API 開發，Zero 則是針對小型工具的編程語言，適合不同的開發需求。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Rust | Rust 提供了強大的記憶體安全性和並發處理能力，而 Zero 更加專注於小型工具的快速開發。 | 如果你的專案需要強大的記憶體安全性和並發處理，Rust 是更好的選擇。 | medium，因為語言特性和生態系統的差異需要一定的學習時間。 |
| Go | Go 在並發處理上表現優異，但在系統級控制上不如 Zero 靈活。 | 如果你的專案需要高效的並發處理，且不需要細粒度的系統控制，Go 是更合適的選擇。 | medium，因為語言特性和生態系統的差異需要一定的學習時間。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **zero** | **Rust** | **Go** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Rust 提供了強大的記憶體安全性和並發處理能力，而 Zero 更加專注於小型工具的快速開發。 | Go 在並發處理上表現優異，但在系統級控制上不如 Zero 靈活。 |
> | 遷移成本 | - | medium，因為語言特性和生態系統的差異需要一定的學習時間。 | medium，因為語言特性和生態系統的差異需要一定的學習時間。 |
> | 適用場景 | 主要場景 | 如果你的專案需要強大的記憶體安全性和並發處理，Rust 是更 | 如果你的專案需要高效的並發處理，且不需要細粒度的系統控制，G |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合探索性專案或小型團隊的原型開發，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 Darwin 平台上執行 `zero run` 時可能會遇到 LC_UUID 缺失的錯誤
  - 解法：檢查環境變數設置，或在其他平台上運行。
- [MEDIUM] 某些模組的文檔尚未完善，可能導致使用上的困惑
  - 解法：參考範例程式碼以了解模組用法。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的原型開發 | 非常適合 | Zero 的快速開發能力能夠幫助團隊迅速實現想法。 |
| 大型系統的核心開發 | 不適合 | 目前仍在 alpha 階段，功能不穩定。 |
| 需要快速迭代的小型工具開發 | 非常適合 | Zero 的設計專注於小型工具的開發，能夠快速滿足需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到快速開發小型工具的能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Zero 本身不需要高權限，且不會存取敏感資料，但仍需注意依賴的庫和模組的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/vercel-labs--zero");
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
> const me = dv.page("Repos/vercel-labs--zero");
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
| Forks | 56 |
| Open Issues | 25 |
| Issue 解決率 | 11% (3 closed) |
| 最後推送 | 2026-05-17 |
| 建立日期 | 2026-05-15 |
| 官方網站 | [Link](https://zerolang.ai) |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/vercel-labs/zero) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C" : 65
>     "JavaScript" : 28
>     "Shell" : 6
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ctate](https://github.com/ctate) | 43 |

**最新版本**：v0.1.1 (2026-05-16)

> [!info]- Release Notes
> - Adds the public installer at `https://zerolang.ai/install.sh`, with platform selection, GitHub release downloads, checksum verification, and `$HOME/.zero/bin/zero` installation.
> - Adds `zero run` for the everyday edit loop: build a host executable, run it, pass program arguments after `--`, forward stdout/stderr, and return the program exit status.
> - Updates README, homepage, getting started, install, and CLI docs around the curl install path, copyable commands, and `zero run`.
> - Reworks public docs to be more scannable and current, including stronger language, diagnostics, testing, target, package, optimization, and standard library references.
> - Removes placeholder module docs that described surfaces not ready for users and adds current module docs for `std.crypto`, `std.http`, and `std.net`.
> - Adds version-matched agent guidance through `zero skills`, including focused workflows for Zero syntax, diagnostics, builds, packages, standard library use, testing, and agent edit loops.
> - Keeps the installable Zero skill as a thin bootstrap so external skill managers discover one Zero skill while the compiler serves the richer guidance for the installed version.
> - Updates the `zero skills` CLI contract to serve bundled flat skill data while preserving list, get, path, and JSON workflows.
> 
> ### Contributors
> 
> - @ctate
> - @mvanhorn

## 社群與生態

**社群活躍度**：社群活躍度一般，問題解決率較低。
**連結**：[文件](https://zerolang.ai/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-16 ~ 2026-05-16）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #32 from vercel-labs/ctate/fix-31

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#28](https://github.com/vercel-labs/zero/issues/28) | Darwin zero run executable fails with dyld missing LC_UUID | 2 | 0 |
> | [#20](https://github.com/vercel-labs/zero/issues/20) | Structured concurrency | 1 | 0 |
> | [#6](https://github.com/vercel-labs/zero/issues/6) | Add structured edit previews to fix-plan JSON | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Zero
> 
> Zero is the programming language for agents: a systems language for small native tools, explicit effects, predictable memory, and structured compiler output.
> 
> Zero is experimental and still changing. The compiler, standard library, docs, and examples are useful for trying the language and giving feedback, but the language is not stable yet.
> 
> ## Quick Start
> 
> Install the latest release:
> 
> ```bash
> curl -fsSL https://zerolang.ai/install.sh | bash
> export PATH="$HOME/.zero/bin:$PATH"
> zero --version
> ```
> 
> Check a program:
> 
> ```bash
> zero check examples/hello.0
> ```
> 
> Run a small executable:
> 
> ```bash
> zero run examples/add.0
> ```
> 
> Expected output:
> 
> ```text
> math works
> ```
> 
> ## Learn Zero
> 
> - `docs-site/articles/getting-started.md`: build the compiler and run a first program.
> - `docs-site/articles/learn-zero.md`: a practical tour of the language.
> - `docs-site/articles/language-reference.md`: syntax and behavior reference.
> - `examples/README.md`: examples grouped by concept.
> 
> Run the docs site locally:
> 
> ```bash
> npm run docs:dev
> ```
> 
> ## Common Commands
> 
> ```bash
> zero check examples/hello.0
> zero run examples/add.0
> zero build --emit exe --target linux-musl-x64 examples/add.0 --out .zero/out/add
> zero graph --json examples/systems-package
> zero size --json examples/point.0
> zero routes --json examples/web/hello
> zero skills get zero --full
> zero doctor --json
> ```
> 
> ## Validation
> 
> ```bash
> npm run docs:test
> npm run conformance
> npm run native:test
> npm run command-contracts
> ```
> 
> Benchmarks run locally by default:
> 
> ```bash
> npm run bench
> ```
> 
> ## Repository Layout
> 
> - `native/zero-c/`: native compiler implementation.
> - `compiler-zero/`: Zero-authored compiler sources.
> - `examples/`: runnable Zero source examples.
> - `conformance/`: language and CLI behavior fixtures.
> - `docs-site/`: documentation site.
> - `tests/`: TypeScript tests for CLI behavior.
> - `extensions/vscode/`: editor syntax highlighting for `.0` files.

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[程式碼生成]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[duoan--TorchCode|duoan/TorchCode]] · [[sanbuphy--claude-code-source-code|sanbuphy/claude-code-source-code]] · [[twostraws--SwiftUI-Agent-Skill|twostraws/SwiftUI-Agent-Skill]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]]

[GitHub](https://github.com/vercel-labs/zero) · [官方網站](https://zerolang.ai)

## 相關收錄

> [!note]- 直接競品（同子分類：程式碼工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "程式碼工具" AND file.name != "vercel-labs--zero"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "vercel-labs--zero"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C" AND file.name != "vercel-labs--zero" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "vercel-labs--zero"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","程式碼生成"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "vercel-labs--zero" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/vercel-labs--zero");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "vercel-labs--zero" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "vercel-labs" AND file.name != "vercel-labs--zero"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/vercel-labs--zero");
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
> const me = dv.page("Repos/vercel-labs--zero");
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
> const me = dv.page("Repos/vercel-labs--zero");
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
> const me = dv.page("Repos/vercel-labs--zero");
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
> const me = dv.page("Repos/vercel-labs--zero");
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

> **2026-05-17** — 首次收錄
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

- [[2026-05-18|2026-05-18]] — 再次上榜，1.7k stars
- [[2026-05-17|2026-05-17]] — 首次收錄，1.0k stars
