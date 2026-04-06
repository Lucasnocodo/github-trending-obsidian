---
repo: Kuberwastaken/claurst
url: https://github.com/Kuberwastaken/claurst
owner: Kuberwastaken
owner_type: User
language: Rust
license: GPL-3.0
description: "Your favorite Terminal Coding Agent, now in Rust & a Breakdown of the Claude Code leak & discoveries"
homepage: "https://kuber.studio/blog/AI/Claude-Code's-Entire-Source-Code-Got-Leaked-via-a-Sourcemap-in-npm,-Let's-Talk-About-it"
stars: 8297
stars_per_day: 1659
forks: 7561
open_issues: 10
created: 2026-03-31
pushed_at: 2026-04-05
first_seen: 2026-04-01
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-01
use_case: "提供一個用 Rust 實作的終端編碼代理，並深入分析 Claude 代碼洩漏事件。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-04"
contributor_count: 2
engagement: "high"
issue_close_rate: 66
repo_size_kb: 4037
readme_length: 9984
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-01"
star_history: "2026-04-01:3470,2026-04-01:3557,2026-04-02:6609,2026-04-03:7387,2026-04-04:7803,2026-04-05:8063,2026-04-06:8297"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
aliases:
  - "claurst"
  - "Kuberwastaken/claurst"
  - "提供一個用 Rust 實作的終端編碼代理，並深入分析 Claude 代碼洩漏事件。"
---

# claurst

**8.3k** stars · **1.7k** stars/天 · 建立 5 天前 · Rust · GPL-3.0

```dataviewjs
const me = dv.page("Repos/Kuberwastaken--claurst");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 提供一個用 Rust 實作的終端編碼代理，並深入分析 Claude 代碼洩漏事件。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.7k stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** High
> **適合** 需要在終端中使用高效能 AI 編碼助手的開發者，特別是對隱私和記憶體效率有高要求的人。
> **一句話重點** CLAURST 不僅是對 Claude 代碼的重建，更是對於高效能編碼代理的一次全新探索。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Kuberwastaken--claurst");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "CLI 工具" && p.file.name !== "Kuberwastaken--claurst" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，10 小時整合，得到高效能的編碼代理，值得投入。

> [!abstract] 核心創新
> 這個專案是對 Claude 代碼的清房工程重建，避免了版權問題。

## 專案簡介

CLAURST 是一個用 Rust 實作的終端編碼代理，旨在提供高效能的 AI 編碼體驗。使用者可以透過 `/connect` 指令連接到不同的 AI 提供者，並享受無追蹤的實驗性功能。這個專案的核心在於其從 Claude 代碼的洩漏中重建的功能，並且聲稱在記憶體使用上比原始版本更有效率。專案的設計遵循了清房工程的原則，確保不直接使用原始的 TypeScript 代碼，而是從行為規範出發進行 Rust 實作。這意味著它能夠在不侵犯版權的情況下重現 Claude 的功能。CLAURST 的架構中包含多種編譯時功能標誌，這些標誌控制著不同的功能開關，並允許用戶根據需求選擇啟用或禁用特定功能。

與其他類似工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，CLAURST 提供了更高的記憶體效率和無追蹤的使用體驗。實際使用中，CLAURST 能夠處理多達 1M 的上下文窗口，並支援多種內部和外部功能。這些功能的實現使得 CLAURST 在處理複雜任務時，能夠保持高效能和靈活性。儘管專案仍在開發中，但其活躍的社群和快速的問題解決能力顯示出良好的未來潛力。對於需要在終端中進行高效編碼的開發者來說，CLAURST 是一個值得考慮的選擇。

**技術棧**：`Rust`

## 重點功能

- 多提供者支持 — 使用 /connect 指令連接到不同的 AI 提供者。
- 記憶體效率 — 相較於原始版本，CLAURST 在記憶體使用上更為高效。
- 無追蹤功能 — 提供無追蹤的使用體驗，保護用戶隱私。
- 編譯時功能標誌 — 支援多種功能開關，讓用戶根據需求選擇啟用或禁用特定功能。
- 清房工程實作 — 從行為規範重建功能，避免版權問題。

## 快速開始

1. 安裝 CLAURST
```bash
cargo install claurst
```
2. 啟動 CLAURST
```bash
claurst
```
3. 連接到 AI 提供者
```bash
/connect
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 8297 stars（1659/天），forks 7561（91.1%），顯示出極高的社群參與度。這個專案的創建者 Kuberwastaken 之前在開源社群有一定的影響力，並且這個工具解決了開發者對於高效能編碼代理的需求，特別是在記憶體使用和無追蹤功能上的優勢。最近的代碼洩漏事件引起了廣泛的關注，並促使開發者對於這個工具的興趣大增。這樣的背景使得 CLAURST 在短時間內獲得了大量的關注和使用。

## 適合誰使用

**目標受眾**：需要在終端中使用高效能 AI 編碼助手的開發者，特別是對隱私和記憶體效率有高要求的人。

> [!example] 使用場景
> - 後端工程師用它來連接不同的 AI 提供者，因為這樣可以在終端中靈活選擇最佳的編碼助手。
> - 獨立開發者用它來在本地環境中進行高效的編碼，因為 CLAURST 提供了無追蹤的使用體驗，保護了用戶的隱私。
> - AI 研究者用它來測試和驗證不同的 AI 模型，因為其支持多種功能標誌，便於快速調整和實驗。

## 架構分析

CLAURST 採用 Rust 語言實作，設計上遵循清房工程的原則，避免直接使用原始的 TypeScript 代碼。其架構中包含多種編譯時功能標誌，這些標誌控制著不同的功能開關，讓用戶能夠根據需求選擇啟用或禁用特定功能。資料流方面，CLAURST 使用 Rust 的高效能特性，確保在處理複雜任務時保持高效能和靈活性。選擇 Rust 作為實作語言的原因在於其高效能和安全性，這對於需要高效能編碼的用戶來說是至關重要的。擴展性方面，CLAURST 能夠輕鬆整合新的功能和工具，這使得它在未來的開發中具有良好的潛力。

## 技術深入分析

CLAURST 的核心技術機制是基於 Rust 語言的高效能特性，並採用了清房工程的原則進行開發。這意味著它能夠在不侵犯版權的情況下重現 Claude 的功能。效能方面，CLAURST 能夠處理多達 1M 的上下文窗口，並且在記憶體使用上比原始版本更為高效。選擇 Rust 作為實作語言的原因在於其高效能和安全性，這對於需要高效能編碼的用戶來說是至關重要的。設計上，CLAURST 使用了編譯時功能標誌來控制不同的功能開關，這使得用戶能夠根據需求靈活調整使用體驗。技術風險方面，CLAURST 仍在開發中，某些功能可能會存在不穩定的情況。整合方面，CLAURST 能夠輕鬆與現有的開發工具鏈整合，並且對於 CI/CD pipeline 友好，這使得它在團隊協作中具有良好的潛力。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的詳細步驟。安裝過程相對順暢，但對於新手可能需要一些 Rust 環境的基本知識。文件中有提供一些範例，幫助用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 高效能的記憶體管理，適合處理大型任務。
> - 多樣化的功能開關，讓用戶能夠根據需求調整使用體驗。
> - 無追蹤的使用模式，保護用戶隱私。

> [!danger] 缺點
> - 仍在開發中，可能存在不穩定的功能。
> - 對於非 Rust 環境的支持尚未實現。
> - 某些功能仍處於實驗階段，可能會有 bug。

> [!warning] 注意事項
> - 仍在開發中，功能可能不穩定。
> - 某些功能仍處於實驗階段，可能會有 bug。
> - 目前僅支援 Rust 環境，對於其他語言的支持尚未實現。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的編碼代理功能，但主要使用 Python 實作，記憶體效率較低。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於安全性和隱私保護，但功能上不如 CLAURST 多樣化。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Claude Code | Claude Code 是原始的 TypeScript 實作，功能上較為完整，但在記憶體效率上不如 CLAURST。 | 如果需要完整的功能和更穩定的版本，可以選擇 Claude Code。 | medium，因為需要從 TypeScript 遷移到 Rust。 |
| OpenAI Codex | OpenAI Codex 提供了強大的 API 支援，但在終端使用上不如 CLAURST 方便。 | 如果需要強大的 API 支援和更廣泛的功能，可以選擇 OpenAI Codex。 | low，因為可以直接使用 API。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claurst** | **Claude Code** | **OpenAI Codex** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Claude Code 是原始的 TypeScript 實作，功能上較為完整，但在記憶體效率上不如 CLAURST。 | OpenAI Codex 提供了強大的 API 支援，但在終端使用上不如 CLAURST 方便。 |
> | 遷移成本 | - | medium，因為需要從 TypeScript 遷移到 Rust。 | low，因為可以直接使用 API。 |
> | 適用場景 | 主要場景 | 如果需要完整的功能和更穩定的版本，可以選擇 Claude C | 如果需要強大的 API 支援和更廣泛的功能，可以選擇 Ope |

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

- **[HIGH]** 某些功能在特定情況下可能不穩定，導致崩潰
  - 解法：定期更新到最新版本以獲得修復
- [MEDIUM] 在某些終端中顯示不正常
  - 解法：嘗試更換終端或調整顯示設置
- [MEDIUM] 功能開關可能無法正常工作
  - 解法：檢查編譯時功能標誌設置

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | CLAURST 提供了高效能的編碼代理，適合小型團隊快速開發。 |
| 大型企業的核心系統開發 | 不適合 | 目前仍在開發中，功能不穩定。 |
| AI 研究團隊進行模型測試 | 適合 | 支持多種功能開關，便於快速調整和實驗。 |
| 需要高效能編碼的獨立開發者 | 非常適合 | 無追蹤的使用模式和高效能的記憶體管理。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效能的編碼代理，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> CLAURST 本身不需要高權限，並且不存取敏感資料。依賴鏈的信任程度較高，無已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Kuberwastaken--claurst");
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
> const me = dv.page("Repos/Kuberwastaken--claurst");
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
| Forks | 7.6k |
| Open Issues | 10 |
| Issue 解決率 | 66% (19 closed) |
| 最後推送 | 2026-04-05 |
| 建立日期 | 2026-03-31 |
| 官方網站 | [Link](https://kuber.studio/blog/AI/Claude-Code's-Entire-Source-Code-Got-Leaked-via-a-Sourcemap-in-npm,-Let's-Talk-About-it) |
| Repo 大小 | 3.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Kuberwastaken/claurst) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Kuberwastaken](https://github.com/Kuberwastaken) | 35 |
> | [@Sporkley](https://github.com/Sporkley) | 3 |

## 社群與生態

**社群活躍度**：社群活躍，問題解決率達 66%。
**連結**：[文件](https://kuber.studio/blog/AI/Claude-Code's-Entire-Source-Code-Got-Leaked-via-a-Sourcemap-in-npm,-Let's-Talk-About-it)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-04 ~ 2026-04-05）
> **活躍天數** 2 天 · **最新 commit** feat: multiple TUI enhancements, made Rustle sprite cooler, added working shortcut keys and other mi

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#40](https://github.com/Kuberwastaken/claurst/issues/40) | context limit for models | 0 | 1 |
> | [#39](https://github.com/Kuberwastaken/claurst/issues/39) | any way to contribute  | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> CLAURST
> Your Favorite Terminal Coding Agent, now in Rust
> 
> 
> 
>   
>     
>     
>     
>   
> 
>   
> 
>   
> 
> 
> ---
> 
> > [!NOTE]
> > UPDATE: Multi Provider Support is OUT ! (Codex Auth in works) Run /connect to connect to your AI Provider of Choice! [EXPERIMENTAL]
> >
> > **100% Coverage complete from original source** on the [`src-rust`](https://github.com/kuberwastaken/claurst/tree/main/src-rust) and it's already much more memory effecient than the original port, along with no tracking, experimental features unlocked and more. We're at a stage where I'm using Claurst to further build Claurst in 
> > I would love to hear thoughts, help you set up or squash any bugs you encounter in the process, please don't refrain from [reaching out](https://x.com/kuberwastaken) or [repoting any issues.](https://github.com/Kuberwastaken/claurst/issues/new) Thank you for your support !
> 
> ---
> 
> 
> # Claude Code's Entire Source Code Got Leaked via a Sourcemap in npm, Let's Talk About It
> 
> 
> ## Hidden Beta Headers and Unreleased API Features
> 
> The [`constants/betas.ts`](https://github.com/kuberwastaken/claude-code/blob/main/src-rust/crates/api/src/lib.rs) file reveals every beta feature Claude Code negotiates with the API:
> 
> ```typescript
> 'interleaved-thinking-2025-05-14'      // Extended thinking
> 'context-1m-2025-08-07'                // 1M token context window
> 'structured-outputs-2025-12-15'        // Structured output format
> 'web-search-2025-03-05'                // Web search
> 'advanced-tool-use-2025-11-20'         // Advanced tool use
> 'effort-2025-11-24'                    // Effort level control
> 'task-budgets-2026-03-13'              // Task budget management
> 'prompt-caching-scope-2026-01-05'      // Prompt cache scoping
> 'fast-mode-2026-02-01'                 // Fast mode (Penguin)
> 'redact-thinking-2026-02-12'           // Redacted thinking
> 'token-efficient-tools-2026-03-28'     // Token-efficient tool schemas
> 'afk-mode-2026-01-31'                  // AFK mode
> 'cli-internal-2026-02-09'             // Internal-only (ant)
> 'advisor-tool-2026-03-01'              // Advisor tool
> 'summarize-connector-text-2026-03-13'  // Connector text summarization
> ```
> 
> `redact-thinking`, `afk-mode`, and `advisor-tool` are also not released.
> 
> ---
> 
> 
> ## Feature Gating - Internal vs. External Builds
> 
> This is one of the most architecturally interesting parts of the codebase.
> 
> Claude Code uses **compile-time feature flags** via Bun's `feature()` function from `bun:bundle`. The bundler **constant-folds** these and **dead-code-eliminates** the gated branches from external builds. The complete list of known flags:
> 
> | Flag | What It Gates |
> |------|--------------|
> | `PROACTIVE` / `KAIROS` | Always-on assistant mode |
> | `KAIROS_BRIEF` | Brief command |
> | `BRIDGE_MODE` | Remote control via claude.ai |
> | `DAEMON` | Background daemon mode |
> | `VOICE_MODE` | Voice input |
> | `WORKFLOW_SCRIPTS` | Workflow automation |
> | `COORDINATOR_MODE` | Multi-agent orchestration |
> | `TRANSCRIPT_CLASSIFIER` | AFK mode (ML auto-approval) |
> | `BUDDY` | Companion pet system |
> | `NATIVE_CLIENT_ATTESTATION` | Client attestation |
> | `HISTORY_SNIP` | History snipping |
> | `EXPERIMENTAL_SKILL_SEARCH` | Skill discovery |
> 
> Additionally, `USER_TYPE === 'ant'` gates Anthropic-internal features: staging API access (`claude-ai.staging.ant.dev`), internal beta headers, Undercover mode, the `/security-review` command, `ConfigTool`, `TungstenTool`, and debug prompt dumping to `~/.config/claude/dump-prompts/`.
> 
> **GrowthBook** handles runtime feature gating with aggressively cached values. Feature flags prefixed with `tengu_` control everything from fast mode to memory consolidation. Many checks use `getFeatureValue_CACHED_MAY_BE_STALE()` to avoid blocking the main loop - stale data is considered acceptable for feature gates.
> 
> ---
> 
> 
> # IMPORTANT NOTICE
> 
> This repository does not hold a copy of the proprietary Claude Code typescript source code.
> This is a clean-room Rust reimplementation of Claude Code's behavior.
> 
> The process was explicitly two-phase:
> 
> Specification [`spec/`](https://github.com/kuberwastaken/claude-code/tree/main/spec) - An AI agent analyzed the source and produced exhaustive behavioral specifications and improvements, deviated from the original: architecture, data flows, tool contracts, system designs. No source code was carried forward.
> 
> Implementation [`src-rust/`](https://github.com/kuberwastaken/claude-code/tree/main/src-rust)- A separate AI agent implemented from the spec alone, never referencing the original TypeScript. The output is idiomatic Rust that reproduces the behavior, not the expression.
> 
> This mirrors the legal precedent established by Phoenix Technologies v. IBM (1984) — clean-room engineering of the BIOS — and the principle from Baker v. Selden (1879) that copyright protects expression, not ideas or behavior.
> 
> The analysis below is commentary on publicly available software, protected under fair use (17 U.S.C. § 107). Code excerpts are quoted to illustrate technical points from a public source - no unauthorized access was involved in this process or research.
> 
> 
> ## Technical Breakdown
> 
> >**PS:** I've also published this [breakdown on my blog](https://kuber.studio/blog/AI/Claude-Code's-Entire-Source-Code-Got-Leaked-via-a-Sourcemap-in-npm,-Let's-Talk-About-it) with a better reading experience and UX :)
> 
> Earlier today (March 31st, 2026) - Chaofan Shou on X discovered something that Anthropic probably didn't want the world to see: the **entire source code** of Claude Code, Anthropic's official AI coding CLI, was sitting in plain sight on the npm registry via a sourcemap file bundled into the published package.
> 
> [](https://raw.githubusercontent.com/kuberwastaken/claude-code/main/public/leak-tweet.png)
> 
> This repository is a backup of that leaked source, and this README is a full breakdown of what's in it, how the leak happened and most importantly, the things we now know that were never meant to be public.
> 
> Let's get into it.
> 
> 
> ## How Did This Even Happen?
> 
> This is the part that honestly made me go "...really?"
> 
> When you publish a JavaScript/TypeScript package to npm, the build toolchain often generates **source map files** (`.map` files). These files are a bridge between the minified/bundled production code and the original source, they exist so that when something crashes in production the stack trace can point you to the *actual* line of code in the *original* file, not some unintelligible line 1, column 48293 of a minified blob.
> 
> But the fun part is **source maps contain the original source code**. The actual, literal, raw source code, embedded as strings inside a JSON file.
> 
> The structure of a `.map` file looks something like this:
> 
> ```json
> {
>   "version": 3,
>   "sources": ["../src/main.tsx", "../src/tools/BashTool.ts", "..."],
>   "sourcesContent": ["// The ENTIRE original source code of each file", "..."],
>   "mappings": "AAAA,SAAS,OAAO..."
> }
> ```
> 
> That `sourcesContent` array? That's everything.
> Every file. Every comment. Every internal constant. Every system prompt. All of it, sitting right there in a JSON file that npm happily serves to anyone who runs `npm pack` or even just browses the package contents.
> 
> This is not a novel attack vector. It's happened before and honestly it'll happen again.
> 
> The mistake is almost always the same: someone forgets to add `*.map` to their `.npmignore` or doesn't configure their bundler to skip source map generation for production builds. With Bun's bundler (which Claude Code uses), source maps are generated by default unless you explicitly turn them off.
> 
> [](https://raw.githubusercontent.com/kuberwastaken/claude-code/main/public/claude-files.png)
> 
> The funniest part is, there's an entire system called ["Undercover Mode"](#undercover-mode--do-not-blow-your-cover) specifically designed to prevent Anthropic's internal information from leaking.
> 
> They built a whole subsystem to st

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[隱私保護]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[duoan--TorchCode|duoan/TorchCode]] · [[sanbuphy--claude-code-source-code|sanbuphy/claude-code-source-code]] · [[twostraws--SwiftUI-Agent-Skill|twostraws/SwiftUI-Agent-Skill]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

[GitHub](https://github.com/Kuberwastaken/claurst) · [官方網站](https://kuber.studio/blog/AI/Claude-Code's-Entire-Source-Code-Got-Leaked-via-a-Sourcemap-in-npm,-Let's-Talk-About-it)

## 相關收錄

> [!note]- 直接競品（同子分類：CLI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "CLI 工具" AND file.name != "Kuberwastaken--claurst"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Kuberwastaken--claurst"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "Kuberwastaken--claurst" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "Kuberwastaken--claurst"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","隱私保護"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Kuberwastaken--claurst" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Kuberwastaken--claurst");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Kuberwastaken--claurst" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Kuberwastaken" AND file.name != "Kuberwastaken--claurst"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Kuberwastaken--claurst");
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
> const me = dv.page("Repos/Kuberwastaken--claurst");
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
> const me = dv.page("Repos/Kuberwastaken--claurst");
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
> const me = dv.page("Repos/Kuberwastaken--claurst");
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
> const me = dv.page("Repos/Kuberwastaken--claurst");
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

> **2026-04-01** — 首次收錄
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

- [[2026-04-01|2026-04-01]] — 首次收錄，3.5k stars
