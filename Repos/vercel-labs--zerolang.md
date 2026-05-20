---
repo: vercel-labs/zerolang
url: https://github.com/vercel-labs/zerolang
owner: vercel-labs
owner_type: Organization
language: C
license: Apache-2.0
description: "The programming language for agents"
homepage: "https://zerolang.ai"
stars: 3242
stars_per_day: 811
forks: 193
open_issues: 72
created: 2026-05-15
pushed_at: 2026-05-20
first_seen: 2026-05-20
week: "2026-W21"
month: "2026-05"
category: "開發工具"
subcategory: "程式碼工具"
release_tag: "v0.1.3"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-20
use_case: "為代理人設計的編程語言，專注於快速學習和結構化調試。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-23"
contributor_count: 1
engagement: "low"
issue_close_rate: 8
repo_size_kb: 1523
readme_length: 2514
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-20"
star_history: "2026-05-20:3242"
tags:
  - github
  - "category/開發工具"
  - "lang/c"
  - org
  - easy_install
aliases:
  - "zerolang"
  - "vercel-labs/zerolang"
  - "為代理人設計的編程語言，專注於快速學習和結構化調試。"
---

# zerolang

**3.2k** stars · **811** stars/天 · 建立 4 天前 · C · Apache-2.0

```dataviewjs
const me = dv.page("Repos/vercel-labs--zerolang");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.1.3` `easy-install`

> [!summary] 一句話摘要
> 為代理人設計的編程語言，專注於快速學習和結構化調試。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (811 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 對於需要快速學習編程語言並構建智能代理的開發者。
> **一句話重點** Zero 的設計理念是讓代理人能夠快速學習和使用，這在當前的編程語言中是相對少見的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/vercel-labs--zerolang");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "程式碼工具" && p.file.name !== "vercel-labs--zerolang" && p.status !== "archived")
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
> **結論** 花 5 小時學習，3 小時整合，得到快速開發的能力，值得一試。

> [!abstract] 核心創新
> Zero 是一種專為代理人設計的編程語言，強調學習性和結構化調試。

## 專案簡介

Zero 是一種專為代理人設計的編程語言，旨在讓代理人能夠快速學習和使用。用戶可以透過簡單的語法和結構化的工具來檢查和執行程式碼，並獲得即時的錯誤診斷和修復建議。核心命令如 `zero check` 和 `zero run` 使得檢查和執行程式碼變得直觀且快速。這種設計理念使得語言的學習曲線大幅降低，特別適合需要快速適應的開發環境。Zero 的技術架構使用 C 和 TypeScript，並且依賴於一個穩定的標準庫，這樣可以減少外部依賴的複雜性，讓開發者專注於核心邏輯。

與傳統語言相比，Zero 強調結構化的診斷工具，這使得錯誤排查和修復過程更為高效。與 Python 和 JavaScript 等語言相比，Zero 的語法更為簡潔，並且提供了更強的即時反饋機制，這對於需要快速迭代的項目特別有利。使用 Zero 可能會遇到安全性問題，因為它仍在開發階段，並不適合生產環境。該專案目前處於 alpha 階段，未來可能會有重大變更，因此不建議在關鍵系統中使用。對於小型團隊或個人開發者而言，Zero 提供了一個有趣的實驗平台，適合用於原型開發和學習新概念。

**技術棧**：`C` · `JavaScript` · `TypeScript` · `C++`

## 重點功能

- 代理人優先學習性 — 提供簡單的語法和即時反饋，讓代理人能快速上手。
- 結構化工具 — 提供診斷、圖形事實和修復計劃，幫助用戶有效排查錯誤。
- 標準庫深度 — 包含廣泛的功能，減少外部依賴的需求。
- 快速執行 — 使用 `zero run` 命令快速執行程式碼，支持即時測試。
- 靈活的命令行工具 — 支持多種命令如 `zero check`、`zero build` 和 `zero graph`，方便用戶操作。

## 快速開始

1. 安裝最新版本
```bash
curl -fsSL https://zerolang.ai/install.sh | bash
```
2. 將 Zero 加入 PATH
```bash
export PATH="$HOME/.zero/bin:$PATH"
```
3. 檢查 Zero 版本
```bash
zero --version
```

## 程式碼範例

```c
[
  "# 前置條件（安裝 Zero）",
  "zero run examples/add.0",
  "# 預期輸出",
  "math works"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 3242 stars（811/天），forks 193（6.0%），顯示出強勁的增長潛力。作者 ctate 之前在開源社群中活躍，這個專案解決了傳統編程語言在代理人使用上的不足，提供了一種更適合自動化和智能代理的語言。這個專案的推出引起了開發者的興趣，特別是在 AI 和自動化領域。技術生態的演進，尤其是對於智能代理的需求增加，使得這個工具的可行性大幅提升。forks/stars 比率顯示出開發者對此專案的實際修改和使用意願相對較高，這表明社群對這個專案的參與度較高。

## 適合誰使用

**目標受眾**：對於需要快速學習編程語言並構建智能代理的開發者。

> [!example] 使用場景
> - AI 開發者用它來快速構建和測試智能代理，因為其簡單的語法和即時反饋機制能夠加速開發流程。
> - 教育工作者用它來教授編程概念，因為 Zero 的結構化診斷工具能幫助學生快速理解錯誤和修正方法。
> - 獨立開發者用它來原型設計新應用，因為其標準庫的深度和簡單的學習曲線使得開發過程更加高效。

## 架構分析

Zero 採用模組化設計，核心語言使用 C 實現，並透過 TypeScript 提供工具和庫的支持。這種設計使得語言本身可以快速迭代，並且能夠根據用戶反饋進行調整。資料流方面，語言解析器將程式碼轉換為結構化的診斷信息，這樣代理人可以輕鬆檢查和修復錯誤。選擇 C 作為核心語言使得性能優越，但也增加了開發的複雜性。未來的擴展性可能會受到語法穩定性的挑戰，因為目前仍在探索最佳的語言模式。

## 技術深入分析

Zero 的核心技術機制在於其語法的簡潔性和結構化的工具設計。使用 C 語言作為核心實現，這使得 Zero 在性能上有優勢，但也帶來了開發的複雜性。語言的設計強調代理人優先，這意味著在語法和工具的設計上都考慮到了代理人的需求。效能方面，Zero 可以快速執行小型程式，但在處理大型項目時可能會遇到瓶頸。設計上選擇 C 而非其他語言是因為其性能和底層控制能力，但這也意味著開發者需要具備相應的技術背景。技術風險方面，Zero 的不穩定性可能在未來的擴展中造成問題，特別是在 API 的變更上。整合方面，Zero 可以與現有的開發工具鏈相容，但可能需要額外的適配器來解決某些問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了安裝和使用範例，讓新手能夠快速上手。安裝過程相對順暢，沒有明顯的坑。文件目前僅提供英文版本，未來若能增加多語言支持將更有利於擴展社群。

## 優缺點分析

> [!success] 優點
> - 語法簡單，易於學習，特別適合代理人使用。
> - 提供結構化的診斷工具，能快速定位和修復錯誤。
> - 標準庫功能豐富，減少外部依賴。

> [!danger] 缺點
> - 不適合生產環境，存在安全性風險。
> - 目前處於 alpha 階段，語法和 API 可能不穩定。
> - 社群支持尚在發展中，可能缺乏即時的幫助。

> [!warning] 注意事項
> - 不適合生產環境，存在安全漏洞風險。
> - 目前處於 alpha 階段，語法和 API 可能會有重大變更。
> - 對於大型項目可能缺乏穩定性和支持。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理人圖形化界面，而 Zero 更加注重語言本身的學習性和結構化工具。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供一個類似的代理人開發環境，但 Zero 的語法更簡單，且提供即時反饋。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理人的圖形化界面，Zero 則專注於語言的學習性和結構化工具。 | 如果需要一個可視化的開發環境來構建代理人，則應選擇 agent-sprite-forge。 | medium，因為需要重新學習不同的語言和工具。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的代理人開發環境，但 Zero 的語法更簡單且提供即時反饋。 | 如果需要一個更簡單的語法和快速的開發流程，則應選擇 Zero。 | low，因為語法相似且工具鏈兼容。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **zerolang** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理人的圖形化界面，Zero 則專注於語言的學習性和結構化工具。 | 提供類似的代理人開發環境，但 Zero 的語法更簡單且提供即時反饋。 |
> | 遷移成本 | - | medium，因為需要重新學習不同的語言和工具。 | low，因為語法相似且工具鏈兼容。 |
> | 適用場景 | 主要場景 | 如果需要一個可視化的開發環境來構建代理人，則應選擇 agen | 如果需要一個更簡單的語法和快速的開發流程，則應選擇 Zero |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和學習，不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下安裝可能失敗，特別是缺少依賴的情況下。
  - 解法：確保所有依賴都已安裝，或在乾淨的環境中重試。
- [MEDIUM] 語法變更頻繁，可能導致舊程式碼無法運行。
  - 解法：定期檢查更新，並根據最新文檔調整程式碼。
- [MEDIUM] 社群支持有限，可能難以找到解決方案。
  - 解法：參加相關論壇或社群以尋求幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的原型開發 | 非常適合 | 語法簡單且支持快速迭代。 |
| 大型企業的生產系統 | 不適合 | 不穩定性和安全性風險。 |
| 教育機構的編程課程 | 適合 | 結構化的診斷工具能幫助學生快速學習。 |
| 個人開發者的實驗項目 | 非常適合 | 提供了一個有趣的實驗平台。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到快速開發的能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：Zero 目前不適合用於生產環境，存在安全漏洞的可能性，建議在隔離的環境中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Zero 可以與現有的開發工具鏈相容，特別是與 CI/CD 工具的整合。它可以在開發過程中用於快速測試和原型設計。在一個使用 GitHub Actions 的專案中，可以用 Zero 來執行快速測試，具體做法是將 Zero 的命令整合到 CI 流程中。與主流 IDE 的整合尚在開發中，但未來可能會有官方的插件支持。整合的摩擦點主要在於需要適配器來解決某些命令的兼容性問題。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Zero 出現之前，開發者主要依賴傳統編程語言如 Python 和 JavaScript，這些語言在代理人開發上存在學習曲線陡峭和即時反饋不足的問題。Zero 的出現旨在解決這些痛點，提供一種更簡單且結構化的開發方式。隨著自動化和智能代理的需求增加，Zero 的設計理念變得尤為重要，未來可能會引領新的編程語言趨勢。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/vercel-labs--zerolang");
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
> const me = dv.page("Repos/vercel-labs--zerolang");
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
| Forks | 193 |
| Open Issues | 72 |
| Issue 解決率 | 8% (6 closed) |
| 最後推送 | 2026-05-20 |
| 建立日期 | 2026-05-15 |
| 官方網站 | [Link](https://zerolang.ai) |
| Repo 大小 | 1.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/vercel-labs/zerolang) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C" : 74
>     "JavaScript" : 17
>     "Shell" : 4
>     "TypeScript" : 3
>     "C++" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ctate](https://github.com/ctate) | 174 |

**最新版本**：v0.1.3 (2026-05-19)

> [!info]- Release Notes
> - Adds hosted HTTP client runtime support, including runtime packaging fixes, JSON byte helpers for wasm, HTTP final-header parsing fixes, and direct array span lowering repairs.
> - Parses `use` declarations into syntax graph facts and reports import diagnostics, fix plans, and graph edges against the specific import source ranges.
> - Adds structured backend blocker and target-readiness facts to command JSON so checks, build previews, and direct backend failures explain unsupported targets more deterministically.
> - Expands agent-facing diagnostics with BOR001 borrow trace facts, target-neutral CGEN004 wording, and NAM004 generic type-name shadowing rejection.
> - Hardens native compiler allocation paths across shared buffers, parser, checker, IR lowering, emitters, source handling, targets, and driver state for deterministic allocation failures.
> - Updates the public site and docs with current guidance, docs chat rate limiting, and pnpm-based repository workflows.
> - Restores native versioned skill guidance, keeps the repo wrapper on the native compiler, and removes the legacy `zero skills path` command.
> 
> ### Contributors
> 
> - @ctate
> - @PeterXMR
> - @h4ckf0r0day

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者對於問題的回應速度尚可。
**連結**：[文件](https://zerolang.ai/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-19 ~ 2026-05-19）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #142 from vercel-labs/ctate/check-target-context

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#68](https://github.com/vercel-labs/zerolang/issues/68) | [Bug Report & Refactor Proposal] An awe-struck junior CS stu | 26 | 1 |
> | [#89](https://github.com/vercel-labs/zerolang/issues/89) | TOON instead of JSON | 3 | 2 |
> | [#20](https://github.com/vercel-labs/zerolang/issues/20) | Structured concurrency | 2 | 0 |
> | [#19](https://github.com/vercel-labs/zerolang/issues/19) | Consider Lambda syntax | 2 | 3 |
> | [#104](https://github.com/vercel-labs/zerolang/issues/104) | 60-run frontier-model benchmark: 100% of Zero failures clust | 1 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Zero
> 
> Zero is an experiment in building an agent-first programming language.
> 
> The project is exploring what changes when agents are primary users from day one: a language that can be learned on the fly, tooling that exposes structured facts for debugging and repair, and a standard library broad enough that most programs do not start with a dependency search.
> 
> Zero is pre-1 and intentionally unstable. The project will make breaking changes while it searches for the language, library, and tooling patterns that work best for agents. Treat today's syntax and APIs as something to explore, not something to memorize. If that sounds useful, try it with us: run examples, inspect the structured output, and send feedback about what helps agents work better.
> 
> Security vulnerabilities should be expected. Zero is not ready for production systems, sensitive data, or trusted infrastructure. If you plan to run or develop Zero, do so in an isolated, disposable environment.
> 
> ## What Zero Is Aiming For
> 
> - Agent-first learnability: a small, regular language surface that agents can pick up quickly from examples, docs, and compiler feedback.
> - Standard-library depth: common capabilities should live in documented, coherent library APIs instead of scattered dependency stacks.
> - Deterministic tooling: diagnostics, graph facts, size reports, explanations, and fix plans should be structured enough for agents to inspect and act on.
> - Direct developer experience: checking, running, formatting, inspecting, and repairing code should be fast, copyable, and scriptable.
> - Regularity over syntax: prefer one obvious way to express most things, even when that makes code more explicit than a human might choose in another language.
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
> ## Common Commands
> 
> ```bash
> zero check examples/hello.0
> zero run examples/add.0
> zero build --emit exe --target linux-musl-x64 examples/add.0 --out .zero/out/add
> zero graph --json examples/systems-package
> zero size --json examples/point.0
> zero skills get zero --full
> zero doctor --json
> ```
> 
> ## Validation
> 
> ```bash
> pnpm run docs:test
> pnpm run conformance
> pnpm run native:test
> pnpm run command-contracts
> ```
> 
> Benchmarks run locally by default:
> 
> ```bash
> pnpm run bench
> ```

## 延伸閱讀

相關概念：[[自動化]] · [[程式碼生成]] · [[代理框架]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[duoan--TorchCode|duoan/TorchCode]] · [[sanbuphy--claude-code-source-code|sanbuphy/claude-code-source-code]] · [[twostraws--SwiftUI-Agent-Skill|twostraws/SwiftUI-Agent-Skill]] · [[gi-dellav--zerostack|gi-dellav/zerostack]] · [[vercel-labs--zero|vercel-labs/zero]]

[GitHub](https://github.com/vercel-labs/zerolang) · [官方網站](https://zerolang.ai)

## 相關收錄

> [!note]- 直接競品（同子分類：程式碼工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "程式碼工具" AND file.name != "vercel-labs--zerolang"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "vercel-labs--zerolang"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C" AND file.name != "vercel-labs--zerolang" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "vercel-labs--zerolang"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","程式碼生成","代理框架"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "vercel-labs--zerolang" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/vercel-labs--zerolang");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "vercel-labs--zerolang" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "vercel-labs" AND file.name != "vercel-labs--zerolang"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/vercel-labs--zerolang");
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
> const me = dv.page("Repos/vercel-labs--zerolang");
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
> const me = dv.page("Repos/vercel-labs--zerolang");
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
> const me = dv.page("Repos/vercel-labs--zerolang");
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
> const me = dv.page("Repos/vercel-labs--zerolang");
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

- [[2026-05-20|2026-05-20]] — 首次收錄，3.2k stars
