---
repo: uditgoenka/autoresearch
url: https://github.com/uditgoenka/autoresearch
owner: uditgoenka
owner_type: User
language: Shell
license: MIT
description: "Claude Autoresearch Skill — Autonomous goal-directed iteration for Claude Code. Inspired by Karpathy's autoresearch. Modify → Verify → Keep/Discard → Repeat forever."
homepage: "https://udit.co/projects/autoresearch"
stars: 1386
stars_per_day: 277
forks: 108
open_issues: 1
created: 2026-03-13
pushed_at: 2026-03-18
first_seen: 2026-03-19
week: "2026-W12"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: "v1.7.3"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-19
use_case: "讓 Claude 自動化目標導向的迭代過程，實現持續改進。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-22"
contributor_count: 4
engagement: "low"
issue_close_rate: 90
repo_size_kb: 397
readme_length: 9987
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-19"
star_history: "2026-03-19:1386"
tags:
  - github
  - "category/開發工具"
  - "lang/shell"
  - easy_install
  - "topic/ai"
  - "topic/autonomous_agent"
  - "topic/autoresearch"
  - "topic/claude"
  - "topic/claude_code"
aliases:
  - "autoresearch"
  - "uditgoenka/autoresearch"
  - "讓 Claude 自動化目標導向的迭代過程，實現持續改進。"
---

# autoresearch

**1.4k** stars · **277** stars/天 · 建立 5 天前 · Shell · MIT

```dataviewjs
const me = dv.page("Repos/uditgoenka--autoresearch");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.7.3` `easy-install`

`ai` `autonomous-agent` `autoresearch` `claude` `claude-code` `iteration` `karpathy` `productivity` `skill`

> [!summary] 一句話摘要
> 讓 Claude 自動化目標導向的迭代過程，實現持續改進。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (277 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 希望在開發過程中實現自動化迭代的工程師和產品經理。
> **一句話重點** 這個專案的核心在於將自動化迭代的概念普及到各個領域，讓使用者能夠專注於策略而非細節。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/uditgoenka--autoresearch");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "uditgoenka--autoresearch" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，得到自動化迭代的效果，值得嘗試。

> [!abstract] 核心創新
> Claude Autoresearch 將自動化迭代的概念擴展至任何可量化的領域，打破了傳統的機器學習限制。

## 專案簡介

Claude Autoresearch 是一個基於 Karpathy 的 autoresearch 概念，旨在將 Claude Code 轉變為一個不斷改進的引擎。使用者只需設置目標，Claude 便會自動執行迭代過程，透過一系列的變更、驗證和回滾來達成最佳化。具體流程包括：首先，Claude 會讀取所有相關檔案，然後提取目標和指標，接著開始迭代，進行單一變更並執行機械驗證。若變更成功，則保留，否則自動回滾。這種設計使得每次迭代都能夠快速且有效地進行，並且能夠處理多種領域的任務，不僅限於機器學習。核心指令如 `/autoresearch` 便能啟動這個無限迴圈的迭代過程，並可透過 `/autoresearch:plan` 指令來設定具體的目標和驗證方式。這樣的設計使得使用者能夠專注於策略，而讓 Claude 自動優化細節。

**技術棧**：`Shell`

## 重點功能

- /autoresearch — 啟動自動迭代過程，無限次數或指定次數。
- /autoresearch:plan — 互動式向導，將目標轉化為可執行的配置。
- /autoresearch:security — 自動化安全審核，使用 STRIDE 和 OWASP 方法。
- /autoresearch:ship — 通用發佈工作流程，支持多種內容類型的發佈。
- /autoresearch:debug — 自動化錯誤排查循環，科學方法與迭代調查結合。

## 快速開始

1. 安裝插件
```bash
/plugin marketplace add uditgoenka/autoresearch
```
2. 安裝插件
```bash
/plugin install autoresearch@autoresearch
```
3. 啟動迭代
```bash
/autoresearch
Goal: Increase test coverage from 72% to 90%
Scope: src/**/*.test.ts, src/**/*.ts
Metric: coverage % (higher is better)
Verify: npm test -- --coverage | grep "All files"
```

## 程式碼範例

```bash
# 前置條件
# 在 Claude Code 中運行以下指令以啟動自動迭代過程。
/autoresearch
Goal: Increase test coverage from 72% to 90%
Scope: src/**/*.test.ts, src/**/*.ts
Metric: coverage % (higher is better)
Verify: npm test -- --coverage | grep "All files"
# 預期輸出
Claude 讀取所有檔案，建立基準，並開始迭代 — 一次一個變更，保持改進，自動回滾失敗，記錄所有內容。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 1386 stars（277/天），forks 108（7.8%），顯示出強烈的社群關注。作者 Udit Goenka 過去在 AI 領域的經驗和創新能力使得這個專案具備了良好的基礎。這個工具解決了傳統迭代過程中人力資源浪費的問題，通過自動化的方式讓使用者能夠專注於更高層次的策略思考。社群中對於自動化和效率提升的需求也為這個專案的流行提供了動力。

## 適合誰使用

**目標受眾**：希望在開發過程中實現自動化迭代的工程師和產品經理。

> [!example] 使用場景
> - 後端工程師用它來自動優化 API 性能，因為手動調整和測試過程繁瑣且容易出錯。
> - 產品經理用它來持續改進產品功能，因為可以快速獲得數據支持的改進建議，減少了決策時間。
> - DevOps 工程師用它來自動化部署流程，因為能夠在不斷迭代中確保系統穩定性，降低了人為失誤的風險。

## 架構分析

Claude Autoresearch 的架構基於一個持續迭代的循環，設計上強調簡單性和可驗證性。系統首先會讀取所有相關檔案，然後提取目標和指標，這樣的設計使得使用者能夠快速進入迭代過程。每次迭代僅進行單一變更，這樣若發生錯誤，能夠迅速定位問題。選擇 Git 作為版本控制系統，能夠保留所有實驗的歷史記錄，這樣的設計使得使用者能夠隨時回滾到先前的狀態，降低了風險。整體架構輕量，易於整合進現有的開發流程，但在處理大型專案時，可能會面臨性能瓶頸。

## 技術深入分析

Claude Autoresearch 的核心技術機制是基於一個自動化的迭代循環，這個循環包括讀取當前狀態、選擇變更、執行變更以及驗證結果。這種設計模式使得每次迭代都能夠快速且有效地進行，並且能夠處理多種領域的任務。效能方面，這個工具能夠在不斷迭代中快速獲得改進，並且能夠自動回滾失敗的變更，這樣的設計降低了錯誤發生的風險。選擇 Shell 作為主要語言，使得這個工具的安裝和使用都相對簡單，但在大型專案中，可能會面臨性能瓶頸。設計取捨方面，選擇 Git 作為版本控制系統，能夠保留所有實驗的歷史記錄，這樣的設計使得使用者能夠隨時回滾到先前的狀態，降低了風險。技術風險方面，若在大型專案中使用，可能會出現性能問題，特別是在迭代次數較多時。整合方面，這個工具能夠輕鬆整合進現有的開發流程，但在使用時需要注意性能的影響。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝和使用說明，安裝過程順暢，沒有明顯的坑。提供了良好的快速入門指南，適合新手使用。

## 優缺點分析

> [!success] 優點
> - 自動化迭代過程，減少人力成本。
> - 支持多種領域的應用，不僅限於機器學習。
> - 使用 Git 作為版本控制，保留所有實驗歷史，便於回滾。

> [!danger] 缺點
> - 僅支援 Claude Code 環境，限制了使用範圍。
> - 需要使用者具備一定的技術背景，否則難以有效運用。
> - 在大型專案中，可能會影響性能，導致迭代速度變慢。

> [!warning] 注意事項
> - 僅支援 Claude Code 環境，無法在其他平台運行。
> - 需要使用者具備一定的指標設定和驗證知識，否則可能無法有效運行。
> - 在大規模專案中，迭代過程可能會導致性能瓶頸。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | 本專案將 Karpathy 的 autoresearch 概念擴展至更廣泛的應用領域，並專注於 Claude Code 的自動化。 |
| [aiming-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) | 此工具專注於自動化研究過程，但不具備 Claude 的迭代能力，適合特定的研究場景。 |
| [davebcn87/pi-autoresearch](https://github.com/davebcn87/pi-autoresearch) | 此工具主要針對 Pi 系列設備的自動化，但功能範圍較窄，無法廣泛應用於其他領域。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | 使用 Python 實作，專注於機器學習模型的自動化改進，功能範圍較窄。 | 如果你的專案主要集中在機器學習模型的改進，這個工具會更適合。 | medium，因為需要將現有的 Python 環境轉換為 Claude Code。 |
| [aiming-lab/AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) | 專注於自動化研究過程，功能上不如本專案全面。 | 如果你的需求僅限於特定的研究場景，這個工具可能更合適。 | low，因為功能上相似，轉移成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **autoresearch** | **autoresearch** | **AutoResearchClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Python 實作，專注於機器學習模型的自動化改進，功能範圍較窄。 | 專注於自動化研究過程，功能上不如本專案全面。 |
> | 遷移成本 | - | medium，因為需要將現有的 Python 環境轉換為 Claude Code。 | low，因為功能上相似，轉移成本較低。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在機器學習模型的改進，這個工具會更適合。 | 如果你的需求僅限於特定的研究場景，這個工具可能更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型專案或個人使用，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在大型專案中，迭代速度可能變慢，影響整體效能。
  - 解法：考慮限制迭代次數或優化目標設定。
- [MEDIUM] 需要確保所有檔案都在 Claude Code 的範圍內，否則可能無法正確執行。
  - 解法：在設定目標時，仔細檢查檔案範圍。
- [MEDIUM] 若未正確設定驗證指令，可能導致迭代失敗。
  - 解法：使用 `/autoresearch:plan` 指令來確認設定。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠自動化優化過程，減少人力成本。 |
| 大型企業的 DevOps 團隊 | 普通 | 在大型專案中可能會面臨性能瓶頸。 |
| 個人開發者的 side project | 非常適合 | 簡單易用，能快速獲得改進。 |
| 需要高效能的生產環境 | 不適合 | 在高負載情況下可能影響效能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到自動化迭代的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取專案檔案，依賴鏈相對簡單，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/uditgoenka--autoresearch");
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
> const me = dv.page("Repos/uditgoenka--autoresearch");
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
| Forks | 108 |
| Open Issues | 1 |
| Issue 解決率 | 90% (9 closed) |
| 最後推送 | 2026-03-18 |
| 建立日期 | 2026-03-13 |
| 官方網站 | [Link](https://udit.co/projects/autoresearch) |
| Repo 大小 | 397 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/uditgoenka/autoresearch) |
| Topics | `ai` `autonomous-agent` `autoresearch` `claude` `claude-code` `iteration` `karpathy` `productivity` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@uditgoenka](https://github.com/uditgoenka) | 29 |
> | [@tomashm](https://github.com/tomashm) | 2 |
> | [@daviseford](https://github.com/daviseford) | 1 |
> | [@pronskiy](https://github.com/pronskiy) | 1 |

**最新版本**：v1.7.3 — v1.7.3 — Further Stability Fixes & Improvements (2026-03-18)

> [!info]- Release Notes
> ## What's Changed
> * Release v1.7.3 — Further Stability Fixes & Improvements by @uditgoenka in https://github.com/uditgoenka/autoresearch/pull/42
> 
> 
> **Full Changelog**: https://github.com/uditgoenka/autoresearch/compare/v1.7.2...v1.7.3

## 社群與生態

**社群活躍度**：社群活躍，問題解決率高達 90%。
**連結**：[文件](https://udit.co/projects/autoresearch)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-18 ~ 2026-03-18）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #42 from uditgoenka/release/1.7.3

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#25](https://github.com/uditgoenka/autoresearch/issues/25) | support openai codex ? `Future Consideration` | 1 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Claude Autoresearch
> 
> **Turn [Claude Code](https://docs.anthropic.com/en/docs/claude-code) into a relentless improvement engine.**
> 
> Based on [Karpathy's autoresearch](https://github.com/karpathy/autoresearch) — constraint + mechanical metric + autonomous iteration = compounding gains.
> 
> [](https://docs.anthropic.com/en/docs/claude-code)
> [](https://github.com/uditgoenka/autoresearch/releases)
> [](LICENSE)
> [](https://github.com/karpathy/autoresearch)
> [](https://x.com/intent/follow?screen_name=iuditg)
> 
> *"Set the GOAL → Claude runs the LOOP → You wake up to results"*
> 
> *You don't need AGI. You need a goal, a metric, and a loop that never quits.*
> 
> [How It Works](#how-it-works) · [Commands](#commands) · [Quick Start](#quick-start) · [Guides](guide/) · [FAQ](#faq)
> 
> ---
> 
> 
> ### The Setup Phase
> 
> Before looping, Claude performs a one-time setup:
> 
> 1. **Read context** — reads all in-scope files
> 2. **Define goal** — extracts or asks for a mechanical metric
> 3. **Define scope** — which files can be modified vs read-only
> 4. **Establish baseline** — runs verification on current state (iteration #0)
> 5. **Confirm and go** — shows setup, then begins the loop
> 
> 
> ## Quick Start
> 
> 
> ### 1. Install
> 
> **Option A — Plugin install (recommended):**
> 
> In Claude Code, run:
> ```
> /plugin marketplace add uditgoenka/autoresearch
> /plugin install autoresearch@autoresearch
> ```
> 
> That's it. All 8 commands are available after running `/reload-plugins` or restarting Claude Code.
> 
> **Updating (no reinstall needed):**
> ```
> /plugin update autoresearch
> ```
> 
> That pulls the latest version. Run `/reload-plugins` to activate. No need to uninstall or re-clone.
> 
> **Option B — Manual copy:**
> ```bash
> git clone https://github.com/uditgoenka/autoresearch.git
> 
> 
> ## About the Author
> 
>   
> 
> **[Udit Goenka](https://udit.co)** — AI Product Expert, Founder & Angel Investor
> 
> Self-taught builder who went from a slow internet connection in India to founding multiple companies and helping 700+ startups generate over ~$25m in revenue.
> 
> **Building:** [TinyCheque](https://tinycheque.com) (India's first agentic AI venture studio) · [Firstsales.io](https://firstsales.io) (sales automation)
> 
> **Investing:** 38 startups backed, 6 exits. Focused on early-stage AI and SaaS.
> 
> **Connect:** [udit.co](https://udit.co) · [@iuditg](https://x.com/iuditg) · [@uditgoenka](https://github.com/uditgoenka) · [Newsletter](https://udit.co/blog)
> 
> > *"Autonomy scales when you constrain scope, clarify success, mechanize verification, and let agents optimize tactics while humans optimize strategy."*
> ## /autoresearch:plan — Goal → Config Wizard
> 
> The hardest part isn't the loop — it's defining Scope, Metric, and Verify correctly. `/autoresearch:plan` converts your plain-language goal into a validated, ready-to-execute configuration.
> 
> ```
> /autoresearch:plan
> Goal: Make the API respond faster
> ```
> 
> The wizard walks you through 5 steps: capture goal → define scope → define metric → define direction → validate verify command (dry-run). Every gate is mechanical — scope must resolve to files, metric must output a number, verify must pass a dry-run.
> 
> ---
> 
> 
> ## Why This Exists
> 
> [Karpathy's autoresearch](https://github.com/karpathy/autoresearch) demonstrated that a 630-line Python script could autonomously improve ML models overnight — **100 experiments per night** — by following simple principles: one metric, constrained scope, fast verification, automatic rollback, git as memory.
> 
> **Claude Autoresearch generalizes these principles to ANY domain.** Not just ML — code, content, marketing, sales, HR, DevOps, or anything with a number you can measure.
> 
> ---
> 
> 
> ## How It Works
> 
> ```
> LOOP (FOREVER or N times):
>   1. Review current state + git history + results log
>   2. Pick the next change (based on what worked, what failed, what's untried)
>   3. Make ONE focused change
>   4. Git commit (before verification)
>   5. Run mechanical verification (tests, benchmarks, scores)
>   6. If improved → keep. If worse → git revert. If crashed → fix or skip.
>   7. Log the result
>   8. Repeat. Never stop until you interrupt (or N iterations complete).
> ```
> 
> Every improvement stacks. Every failure auto-reverts. Progress is logged in TSV format.
> 
> 
> ### 8 Critical Rules
> 
> | # | Rule |
> |---|------|
> | 1 | **Loop until done** — unbounded: forever. Bounded: N times then summarize |
> | 2 | **Read before write** — understand full context before modifying |
> | 3 | **One change per iteration** — atomic changes. If it breaks, you know why |
> | 4 | **Mechanical verification only** — no subjective "looks good." Use metrics |
> | 5 | **Automatic rollback** — failed changes revert instantly |
> | 6 | **Simplicity wins** — equal results + less code = KEEP |
> | 7 | **Git is memory** — experiments committed with `experiment:` prefix, `git revert` preserves failed experiments in history, agent MUST read `git log` + `git diff` before each iteration |
> | 8 | **When stuck, think harder** — re-read, combine near-misses, try radical changes |
> 
> ---
> 
> 
> ## Commands
> 
> | Command | What it does |
> |---------|--------------|
> | `/autoresearch` | Run the autonomous iteration loop (unlimited) |
> | `Iterations: N` | Add to inline config to run exactly N iterations then stop |
> | `/autoresearch:plan` | Interactive wizard: Goal → Scope, Metric, Verify config |
> | `/autoresearch:security` | Autonomous STRIDE + OWASP + red-team security audit |
> | `/autoresearch:ship` | Universal shipping workflow (code, content, marketing, sales, research, design) |
> | `/autoresearch:debug` | Autonomous bug-hunting loop — scientific method + iterative investigation |
> | `/autoresearch:fix` | Autonomous fix loop — iteratively repair errors until zero remain |
> | `/autoresearch:scenario` | Scenario-driven use case generator — explore situations, edge cases, derivative scenarios |
> | `/autoresearch:predict` | Multi-persona prediction | Pre-analyze code from 5 expert perspectives before acting |
> | `Guard: ` | Optional safety net — must pass for changes to be kept |
> 
> **All commands use `AskUserQuestion` for interactive setup when invoked without arguments.** Just type the command — Claude will ask you what you need step by step with smart defaults based on your codebase. Power users can skip the wizard by providing flags inline.
> 
> 
> ### Quick Decision Guide
> 
> | I want to... | Use |
> |--------------|-----|
> | Improve test coverage / reduce bundle size / any metric | `/autoresearch` (add `Iterations: N` for bounded runs) |
> | Don't know what metric to use | `/autoresearch:plan` |
> | Run a security audit | `/autoresearch:security` |
> | Ship a PR / deployment / release | `/autoresearch:ship` |
> | Optimize without breaking existing tests | Add `Guard: npm test` |
> | Hunt all bugs in a codebase | `/autoresearch:debug` (add `Iterations: 20` for bounded runs) |
> | Fix all errors (tests, types, lint) | `/autoresearch:fix` |
> | Debug then auto-fix | `/autoresearch:debug --fix` |
> | Check if something is ready to ship | `/autoresearch:ship --checklist-only` |
> | Explore edge cases for a feature | `/autoresearch:scenario` |
> | Generate test scenarios | `/autoresearch:scenario --domain software --format test-scenarios` |
> | Stress test a user journey | `/autoresearch:scenario --depth deep` |
> | I want expert opinions before I start | `/autoresearch:predict` |
> | Analyze this from multiple angles | `/autoresearch:predict --chain debug` |
> 
> ---
> 
> 
> # Copy skill + subcommands to your project
> cp -r autoresearch/skills/autoresearch .claude/skills/autoresearch
> cp -r autoresearch/commands/autoresearch .claude/commands/autoresearch
> ```
> 
> Or install globally:
> ```bash
> cp -r autoresearch/skills/autoresearch ~/.claude/skills/autoresearch
> cp -r autoresearch/commands/autoresearch ~/.claude/commands/autoresearch
> ```
> 
> > **Note:** The `commands/` directory is required for subcommands (`/autoresearch:ship`, `/autoresearch:plan`, `/autoresearch:security`) to work.
> 
> 
> ### 2. Run It
> 
> ```
> /autoresearch
> Goal: Increase test coverage from 72% to 90%
> Scope: src/**/*.test.ts, src/**/*.ts
> Metric: coverage % (higher is better)
> Verify: npm test --

## 延伸閱讀

相關概念：[[自動化]] · [[CI/CD]] · [[機器學習]]

相關專案：[[karpathy--autoresearch|karpathy/autoresearch]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]] · [[davebcn87--pi-autoresearch|davebcn87/pi-autoresearch]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[Narcooo--inkos|Narcooo/inkos]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[THU-MAIC--OpenMAIC|THU-MAIC/OpenMAIC]]

[GitHub](https://github.com/uditgoenka/autoresearch) · [官方網站](https://udit.co/projects/autoresearch)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "uditgoenka--autoresearch"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "uditgoenka--autoresearch"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Shell" AND file.name != "uditgoenka--autoresearch" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "uditgoenka--autoresearch"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CI/CD","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "uditgoenka--autoresearch" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/uditgoenka--autoresearch");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "uditgoenka--autoresearch" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "uditgoenka" AND file.name != "uditgoenka--autoresearch"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/uditgoenka--autoresearch");
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
> const me = dv.page("Repos/uditgoenka--autoresearch");
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
> const me = dv.page("Repos/uditgoenka--autoresearch");
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
> const me = dv.page("Repos/uditgoenka--autoresearch");
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
> const me = dv.page("Repos/uditgoenka--autoresearch");
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

- [[2026-03-19|2026-03-19]] — 首次收錄，1.4k stars
