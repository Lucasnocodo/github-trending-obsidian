---
repo: Kuberwastaken/claurst
url: https://github.com/Kuberwastaken/claurst
owner: Kuberwastaken
owner_type: User
language: Rust
license: GPL-3.0
description: "Your favorite Terminal Coding Agent, now in Rust & a Breakdown of the Claude Code leak & discoveries"
homepage: "https://kuber.studio/blog/AI/Claude-Code's-Entire-Source-Code-Got-Leaked-via-a-Sourcemap-in-npm,-Let's-Talk-About-it"
stars: 8294
stars_per_day: 1659
forks: 7561
open_issues: 10
created: 2026-03-31
pushed_at: 2026-04-05
first_seen: 2026-04-02
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
last_reviewed: 2026-04-02
use_case: "提供一個用 Rust 實作的 CLI 編碼代理，並分析 Claude 代碼洩漏事件。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-04-09"
contributor_count: 1
engagement: "high"
issue_close_rate: 63
repo_size_kb: 3582
readme_length: 9935
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:6592,2026-04-02:6612,2026-04-03:7380,2026-04-03:7389,2026-04-04:7802,2026-04-04:7803,2026-04-05:8063,2026-04-05:8063,2026-04-06:8294"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
aliases:
  - "claurst"
  - "Kuberwastaken/claurst"
  - "提供一個用 Rust 實作的 CLI 編碼代理，並分析 Claude 代碼洩漏事件。"
---

# claurst

**8.1k** stars · **2.0k** stars/天 · 建立 4 天前 · Rust · GPL-3.0

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

`個人專案`

> [!summary] 一句話摘要
> 提供一個用 Rust 實作的 CLI 編碼代理，並分析 Claude 代碼洩漏事件。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (2.0k stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 對 Rust 和 AI 編碼代理有興趣的開發者，尤其是希望提高終端編碼效率的人。
> **一句話重點** CLAURST 不僅是對 Claude 代碼的重建，更是對終端編碼代理的一次創新實踐。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到高效能的編碼代理，值得投入。

> [!abstract] 核心創新
> 這個專案的核心創新在於使用清室工程原則重建 Claude 代碼的行為，並提供無追蹤的高效能實作。

## 專案簡介

CLAURST 是一個用 Rust 實作的終端編碼代理，旨在提供更高效的記憶體使用和無追蹤的功能。用戶可以透過 `/connect` 指令連接到他們選擇的 AI 提供者，並利用多種實驗性功能。這個工具的設計基於對 Claude 代碼的徹底分析，並在不參考原始 TypeScript 的情況下重建其行為，這樣的做法遵循了清室工程的法律原則。CLAURST 的核心架構使用了編譯時的功能標誌來控制不同的功能，這使得用戶能夠根據需要啟用或禁用特定功能。與其他類似工具相比，CLAURST 的記憶體效率更高，並且不會追蹤用戶行為，這對於隱私保護至關重要。

這個專案的依賴性相對較輕，主要依賴於 Rust 的標準庫和一些輔助庫，這使得整體性能優於基於 JavaScript 的解決方案。與 Codex 和其他 AI 編碼工具相比，CLAURST 提供了更高的可擴展性和靈活性，特別是在多代理協作方面。使用者在使用過程中可能會遇到一些功能尚在測試階段的問題，特別是在連接不同 AI 提供者時。這個專案目前處於 beta 階段，適合對 Rust 和 AI 編碼代理有興趣的開發者，未來可能會進一步擴展功能和穩定性。

**技術棧**：`Rust`

## 重點功能

- 多提供者支持 — 用戶可透過 /connect 指令連接到不同的 AI 提供者。
- 記憶體效率高 — 相較於原始實作，CLAURST 在記憶體使用上更為優化。
- 無追蹤功能 — 完全不追蹤用戶行為，保護用戶隱私。
- 編譯時功能標誌 — 透過編譯時的功能標誌控制不同的功能，靈活性高。
- 清室工程實作 — 完全基於行為規範重建，無需參考原始代碼。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/Kuberwastaken/claurst.git
```
2. 進入專案目錄
```bash
cd claurst
```
3. 編譯專案
```bash
cargo build
```
4. 運行專案
```bash
cargo run
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 8063 stars（2016/天），forks 7505（93.1%），這顯示出極高的社群參與度。作者 Kuberwastaken 之前在 AI 和 CLI 工具方面有豐富的經驗，這次專案解決了現有 AI 編碼工具在記憶體使用和隱私方面的痛點。這個專案的推出恰逢 Claude 代碼洩漏事件，引起了廣泛的關注和討論，進一步推動了其流行。高比例的 forks 表明許多開發者正在積極修改和擴展這個工具，顯示出強大的社群支持。

## 適合誰使用

**目標受眾**：對 Rust 和 AI 編碼代理有興趣的開發者，尤其是希望提高終端編碼效率的人。

> [!example] 使用場景
> - 後端工程師用它來連接不同的 AI 提供者，因為它支持多種實驗性功能，能夠根據需求靈活調整。
> - 獨立開發者用它來快速構建 CLI 工具，因為 Rust 的性能優勢能夠顯著提升開發效率。
> - AI 研究者用它來分析和重建 AI 行為，因為它提供了完整的行為規範，並且不受原始代碼的限制。

## 架構分析

CLAURST 的架構基於 Rust，使用編譯時的功能標誌來控制不同的功能，這樣的設計使得用戶可以根據需求靈活調整。資料流方面，使用者透過終端指令與系統互動，系統則根據用戶的請求調用相應的功能模組。這種設計的代價在於需要用戶對 Rust 有一定的了解，才能充分利用其優勢。擴展性方面，由於使用 Rust 的標準庫和輕量級依賴，整體性能優於基於 JavaScript 的解決方案，適合需要高效能的場景。

## 技術深入分析

CLAURST 的核心技術機制使用 Rust 語言，這使得其在性能和記憶體管理上優於許多基於 JavaScript 的解決方案。它採用了編譯時功能標誌來控制不同的功能，這樣的設計使得用戶可以根據需求靈活調整，並且能夠在不影響主流程的情況下進行功能的開關。效能方面，CLAURST 的記憶體佔用相對較低，能夠在有限的資源環境中運行良好。設計取捨上，選擇 Rust 使得整體性能優越，但對開發者的學習曲線有一定要求。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在多代理協作的情況下。整合方面，CLAURST 與現有的 CLI 工具鏈相容性良好，能夠輕鬆整合到現有的開發環境中，並且支持常見的 CI/CD 流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用步驟。安裝過程相對順暢，但需要用戶具備 Rust 環境。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 高效的記憶體使用，適合資源有限的環境。
> - 無追蹤功能，保護用戶隱私。
> - 靈活的功能控制，滿足不同需求。

> [!danger] 缺點
> - 仍在 beta 階段，部分功能可能不穩定。
> - 需要 Rust 環境進行編譯，對於不熟悉 Rust 的開發者可能有學習曲線。
> - 多提供者支持仍在實驗階段，可能會遇到連接問題。

> [!warning] 注意事項
> - 目前仍在 beta 階段，部分功能可能不穩定。
> - 需要 Rust 環境進行編譯，對於不熟悉 Rust 的開發者可能有學習曲線。
> - 多提供者支持仍在實驗階段，可能會遇到連接問題。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [Kuberwastaken/claude-code](https://github.com/Kuberwastaken/claude-code) | CLAURST 是基於 Rust 的重建版本，提供更好的記憶體效率和無追蹤功能，而 Claude Code 是原始的 TypeScript 實作。 |
| [OpenAI/Codex](https://github.com/OpenAI/Codex) | Codex 主要依賴於大型模型進行推理，而 CLAURST 提供了更高的靈活性和可擴展性，特別是在多代理協作方面。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [OpenAI/Codex](https://github.com/OpenAI/Codex) | Codex 使用大型模型進行推理，而 CLAURST 提供了更高的靈活性和可擴展性，特別是在多代理協作方面。 | 如果你的團隊已經在使用 OpenAI 的生態系統，並且需要強大的模型支援。 | medium，因為需要重新適應不同的操作流程。 |
| [Kuberwastaken/claude-code](https://github.com/Kuberwastaken/claude-code) | CLAURST 是基於 Rust 的重建版本，提供更好的記憶體效率和無追蹤功能，而 Claude Code 是原始的 TypeScript 實作。 | 如果你需要一個穩定的 TypeScript 解決方案，並且不需要 CLAURST 的特定優勢。 | low，因為功能和操作流程相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claurst** | **Codex** | **claude-code** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Codex 使用大型模型進行推理，而 CLAURST 提供了更高的靈活性和可擴展性，特別是在多代理協作方面。 | CLAURST 是基於 Rust 的重建版本，提供更好的記憶體效率和無追蹤功能，而 Claude Code 是原始的 TypeScript 實作。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的操作流程。 | low，因為功能和操作流程相似。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 OpenAI 的生態系統，並且需要強 | 如果你需要一個穩定的 TypeScript 解決方案，並且不 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些環境下，連接不同 AI 提供者時可能會遇到問題。
  - 解法：檢查網路連接和提供者的可用性。
- **[HIGH]** 部分功能尚在測試階段，可能會導致不穩定。
  - 解法：避免在關鍵任務中使用這些功能。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的內部工具開發 | 非常適合 | CLAURST 的高效能和靈活性非常適合小型團隊的需求。 |
| 大型企業的生產環境 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |
| AI 研究和開發 | 適合 | 提供了完整的行為規範，適合進行深入分析。 |
| 個人開發者的 side project | 非常適合 | 無追蹤功能和高效能使其成為個人項目的理想選擇。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效能的編碼代理，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> CLAURST 本身不需要高權限運行，並且不存取敏感資料，安全性較高。依賴的庫和框架也經過審計，風險較低。

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
| Forks | 7.5k |
| Open Issues | 10 |
| Issue 解決率 | 63% (17 closed) |
| 最後推送 | 2026-04-04 |
| 建立日期 | 2026-03-31 |
| 官方網站 | [Link](https://kuber.studio/blog/AI/Claude-Code's-Entire-Source-Code-Got-Leaked-via-a-Sourcemap-in-npm,-Let's-Talk-About-it) |
| Repo 大小 | 3.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Kuberwastaken/claurst) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Kuberwastaken](https://github.com/Kuberwastaken) | 32 |

## 社群與生態

**社群活躍度**：社群活躍度高，持續有新功能和修復更新。
**連結**：[文件](https://kuber.studio/blog/AI/Claude-Code's-Entire-Source-Code-Got-Leaked-via-a-Sourcemap-in-npm,-Let's-Talk-About-it)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-03 ~ 2026-04-04）
> **活躍天數** 2 天 · **最新 commit** 0.07 Release + Multi Provider Support (Beta)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#24](https://github.com/Kuberwastaken/claurst/issues/24) | Extend to other provider | 4 | 8 |
> | [#34](https://github.com/Kuberwastaken/claurst/issues/34) | to test | 0 | 0 |

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
> The funniest p

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[機器學習]]

相關專案：[[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]]

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
> const concepts = ["CLI/TUI","自動化","機器學習"];
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

> **2026-04-02** — 首次收錄
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

- [[2026-04-06|2026-04-06]] — 再次上榜，8.3k stars
- [[2026-04-05|2026-04-05]] — 再次上榜，8.1k stars
- [[2026-04-04|2026-04-04]] — 再次上榜，7.8k stars
- [[2026-04-03|2026-04-03]] — 再次上榜，7.4k stars
- [[2026-04-02|2026-04-02]] — 首次收錄，6.6k stars
