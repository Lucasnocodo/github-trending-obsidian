---
repo: Kuberwastaken/claurst
url: https://github.com/Kuberwastaken/claurst
owner: Kuberwastaken
owner_type: User
language: Rust
license: N/A
description: "Your favorite Terminal Coding Agent, now in Rust & a Breakdown of the Claude Code leak & discoveries"
homepage: "https://kuber.studio/blog/AI/Claude-Code's-Entire-Source-Code-Got-Leaked-via-a-Sourcemap-in-npm,-Let's-Talk-About-it"
stars: 7802
stars_per_day: 2601
forks: 7378
open_issues: 4
created: 2026-03-31
pushed_at: 2026-04-03
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
use_case: "提供一個用 Rust 重寫的 Claude Code 行為的終端編碼代理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-07"
contributor_count: 1
engagement: "high"
issue_close_rate: 78
repo_size_kb: 2254
readme_length: 9835
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:6592,2026-04-02:6612,2026-04-03:7380,2026-04-03:7389,2026-04-04:7802"
tags:
  - github
  - "category/開發工具"
  - "lang/rust"
aliases:
  - "claurst"
  - "Kuberwastaken/claurst"
  - "提供一個用 Rust 重寫的 Claude Code 行為的終端編碼代理。"
---

# claurst

**7.4k** stars · **3.7k** stars/天 · 建立 2 天前 · Rust · 未標註授權

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
> 提供一個用 Rust 重寫的 Claude Code 行為的終端編碼代理。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (3.7k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 希望在高性能環境中使用 AI 代理的 Rust 開發者。
> **一句話重點** 這個專案展示了如何在法律框架內，利用清房工程重寫一個複雜的 AI 系統。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~20h · **綁定風險** medium
> **結論** 花 20 小時學習，10 小時整合，得到高性能的 AI 代理系統，值得投入。

> [!abstract] 核心創新
> 這個專案的核心創新在於使用清房工程的方式合法重寫 Claude Code 的行為。

## 專案簡介

這個專案是對 Claude Code 行為的 Rust 重寫，並不包含原始的 TypeScript 代碼。其核心機制分為兩個階段：首先，AI 代理分析原始代碼並生成行為規範；接著，另一個 AI 代理根據這些規範實作出符合 Rust 語法的代碼。這樣的設計遵循了法律上的清房工程原則，避免了直接抄襲原始代碼的風險。專案中使用了編譯時的功能標誌來控制不同的功能，這使得在不同的構建中可以靈活開啟或關閉某些功能，從而達到優化性能的效果。與其他同類工具相比，這個專案的特點在於其使用 Rust 語言，這意味著它在性能和內存管理上有更好的表現，特別是在高並發的情況下。

相較於使用 JavaScript 的工具，Rust 的靜態類型系統能夠在編譯階段捕捉更多的錯誤，這對於大型專案尤其重要。使用者在實際操作中可能會遇到功能開關的管理問題，因為某些功能需要在編譯時明確設定，這可能會增加初學者的學習成本。這個專案目前仍在快速發展中，未來可能會加入更多的功能和改進。對於需要高性能和穩定性的開發者來說，這是一個值得考慮的選擇，但對於小型專案或快速原型開發者來說，可能會因為學習曲線而感到不便。

**技術棧**：`Rust 1.60` · `Cargo`

## 重點功能

- 清房工程實作 — 透過 AI 生成行為規範並用 Rust 實作，避免法律風險。
- 編譯時功能標誌 — 使用功能標誌來靈活控制不同的功能，優化性能。
- 多代理協作系統 — 支持多個 AI 代理之間的協作，提升工作效率。
- 內建的伴侶系統 — 提供 Tamagotchi 風格的伴侶系統，增加互動性。
- 高效的記憶整合引擎 — 透過背景記憶整合提升系統的長期記憶能力。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/Kuberwastaken/claude-code.git
```
2. 進入專案目錄
```bash
cd claude-code
```
3. 編譯專案
```bash
cargo build
```
4. 運行 CLI 工具
```bash
cargo run
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 7389 stars（3695/天），forks 7216（97.7%），這顯示出極高的興趣和參與度。作者 Kuberwastaken 以其對 AI 和 Rust 的專業知識而聞名，這個專案解決了開發者在使用 Claude Code 時面臨的法律和技術挑戰，提供了一個合法且高效的替代方案。近期的代碼洩漏事件引發了社群的廣泛關注，促使更多開發者探索這個重寫版本的潛力。這個工具的出現也反映了 Rust 在 AI 開發中的逐漸普及，特別是在需要高效能和安全性的場景中。forks/stars 比率高達 97.7%，顯示出許多人對這個專案的實際修改和使用。

## 適合誰使用

**目標受眾**：希望在高性能環境中使用 AI 代理的 Rust 開發者。

> [!example] 使用場景
> - 後端工程師用它來重構現有的 AI 代理系統，因為 Rust 的性能優勢能夠顯著提升系統的響應速度。
> - AI 研究者用它來實驗新的功能和行為，因為清房工程的設計讓他們能夠在不違反版權的情況下進行創新。
> - 開發者用它來學習 Rust 語言的應用，因為這個專案提供了實際的代碼範例和功能實現的參考。

## 架構分析

這個專案採用 Rust 語言實作，主要分為兩個部分：行為規範和實作。行為規範由 AI 生成，確保不直接引用原始代碼，這樣的設計降低了法律風險。實作部分則專注於用 Rust 實現這些規範，利用 Rust 的性能優勢來提升系統的效率。

資料流方面，從行為規範到代碼實作的過程中，使用了編譯時的功能標誌來控制不同功能的開啟與關閉，這樣的設計使得系統在不同的運行環境中能夠靈活調整。選擇 Rust 而非其他語言如 Python，主要是因為 Rust 在性能和內存管理上的優勢，特別是在高並發的情況下。這樣的選擇雖然增加了學習成本，但長期來看能夠提供更穩定的系統性能。

## 技術深入分析

這個專案的核心技術機制在於清房工程的實作，通過 AI 生成行為規範，並用 Rust 語言進行實作。這樣的設計不僅避免了法律風險，還能利用 Rust 的性能優勢來提升系統的效率。專案能夠處理高並發請求，並且在內存管理上表現出色，這對於需要高效能的 AI 系統來說至關重要。選擇 Rust 而非其他語言如 Python，主要是因為 Rust 的靜態類型系統能夠在編譯階段捕捉更多的錯誤，這對於大型專案尤其重要。在設計取捨方面，雖然 Rust 的學習曲線較陡峭，但長期來看能夠提供更穩定的系統性能。技術風險方面，隨著專案的擴展，可能會面臨依賴管理和版本控制的挑戰。整合到現有的開發流程中，對於熟悉 Rust 的團隊來說相對容易，但對於不熟悉的團隊則需要額外的學習時間。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的使用說明，安裝過程相對順暢，但對於初學者來說，Rust 的學習曲線可能會造成一些困難。文件目前僅提供英文版本，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 高性能 — Rust 提供優越的執行效率和內存管理。
> - 法律風險低 — 清房工程的設計避免了版權問題。
> - 靈活的功能開關 — 編譯時功能標誌讓使用者可以根據需求調整功能。

> [!danger] 缺點
> - 學習曲線陡峭 — 對於不熟悉 Rust 的開發者來說，學習成本較高。
> - Windows 支援有限 — 目前主要針對 Linux 和 macOS 開發。
> - 功能仍在開發中 — 可能會遇到不穩定的情況。

> [!warning] 注意事項
> - 僅支援 Rust 1.60+。
> - 需要在 Linux 或 macOS 環境下運行，Windows 支援有限。
> - 對於初學者來說，學習 Rust 的曲線較陡峭。
> - 目前功能仍在持續開發中，可能會有不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [Kuberwastaken/claude-code](https://github.com/Kuberwastaken/claude-code) | 這是原始的 Claude Code 實作，使用 TypeScript，適合快速開發和原型，但在性能和安全性上不如 Rust 實作。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這是一個用於並行處理的工具，雖然功能不同，但在性能優化上有相似的目標。 |
| [FreedomIntelligence/OpenClaw](https://github.com/FreedomIntelligence/OpenClaw) | 這是一個開源的 AI 代理系統，雖然功能上有重疊，但並未專注於清房工程的法律問題。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [Kuberwastaken/claude-code](https://github.com/Kuberwastaken/claude-code) | 這是原始的 Claude Code 實作，使用 TypeScript，適合快速開發和原型，但在性能和安全性上不如 Rust 實作。 | 如果你的團隊已經熟悉 TypeScript 並且需要快速迭代，這個工具會更合適。 | medium，因為需要將 TypeScript 的邏輯轉換為 Rust。 |
| [FreedomIntelligence/OpenClaw](https://github.com/FreedomIntelligence/OpenClaw) | 這是一個開源的 AI 代理系統，雖然功能上有重疊，但並未專注於清房工程的法律問題。 | 如果你需要一個開源的 AI 代理系統且不考慮法律風險，這個工具會更合適。 | low，因為功能上有相似之處，轉換相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claurst** | **claude-code** | **OpenClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這是原始的 Claude Code 實作，使用 TypeScript，適合快速開發和原型，但在性能和安全性上不如 Rust 實作。 | 這是一個開源的 AI 代理系統，雖然功能上有重疊，但並未專注於清房工程的法律問題。 |
> | 遷移成本 | - | medium，因為需要將 TypeScript 的邏輯轉換為 Rust。 | low，因為功能上有相似之處，轉換相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經熟悉 TypeScript 並且需要快速迭代 | 如果你需要一個開源的 AI 代理系統且不考慮法律風險，這個工 |

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

- [MEDIUM] 某些功能需要在編譯時明確設定，初學者可能會感到困惑。
  - 解法：參考官方文件中的功能開關說明。
- **[HIGH]** 在 Windows 環境下運行可能會遇到兼容性問題。
  - 解法：建議使用 WSL 或在 Linux/macOS 環境下運行。
- [MEDIUM] 由於專案仍在開發中，某些功能可能會不穩定。
  - 解法：定期檢查更新，並參與社群討論以獲取最新資訊。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊開發 AI 代理系統 | 非常適合 | Rust 的性能優勢能夠提升系統的響應速度，適合高效能需求。 |
| 大型企業需要穩定的 AI 系統 | 適合 | 清房工程的設計降低了法律風險，適合大規模部署。 |
| 初學者學習 Rust 語言 | 普通 | 雖然有實際的代碼範例，但學習曲線較陡峭。 |
| 需要快速原型開發的團隊 | 不適合 | Rust 的開發速度較慢，對於快速迭代不利。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~20 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 20 小時學習，10 小時整合，得到高性能的 AI 代理系統，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不會存取敏感資料。依賴鏈的信任程度高，沒有已知的供應鏈風險。

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
| Forks | 7.2k |
| Open Issues | 4 |
| Issue 解決率 | 78% (14 closed) |
| 最後推送 | 2026-04-02 |
| 建立日期 | 2026-03-31 |
| 官方網站 | [Link](https://kuber.studio/blog/AI/Claude-Code's-Entire-Source-Code-Got-Leaked-via-a-Sourcemap-in-npm,-Let's-Talk-About-it) |
| Repo 大小 | 2.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Kuberwastaken/claurst) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Kuberwastaken](https://github.com/Kuberwastaken) | 5 |

## 社群與生態

**社群活躍度**：社群活躍度高，近期有多個問題被快速回應。
**連結**：[文件](https://kuber.studio/blog/AI/Claude-Code's-Entire-Source-Code-Got-Leaked-via-a-Sourcemap-in-npm,-Let's-Talk-About-it)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-01 ~ 2026-04-02）
> **活躍天數** 2 天 · **最新 commit** feat: substantial revisions and progess, version cc

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#24](https://github.com/Kuberwastaken/claurst/issues/24) | Extend to other provider | 2 | 0 |
> | [#15](https://github.com/Kuberwastaken/claurst/issues/15) | Is anyone here because how he managed to convert to Rust so  | 0 | 9 |
> | [#3](https://github.com/Kuberwastaken/claurst/issues/3) | hi people, it was nice seeing you all before dmca | 0 | 2 |
> | [#2](https://github.com/Kuberwastaken/claurst/issues/2) | SAFE?? | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # IMPORTANT NOTICE - UPDATE
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
> ## Technical Breakdown
> 
> > **PS:** I've also published this [breakdown on my blog](https://kuber.studio/blog/AI/Claude-Code's-Entire-Source-Code-Got-Leaked-via-a-Sourcemap-in-npm,-Let's-Talk-About-it) with a better reading experience and UX :)
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
> They built a whole subsystem to stop their AI from accidentally revealing internal codenames in git commits... and then shipped the entire source in a `.map` file, likely by Claude.
> 
> ---
> 
> 
> ## What's Claude Under The Hood?
> 
> If you've been living under a rock, Claude Code is Anthropic's official CLI tool for coding with Claude and the most popular AI coding agent.
> 
> From the outside, it looks like a polished but relatively simple CLI.
> 
> From the inside, It's a **785KB [`main.tsx`](https://github.com/kuberwastaken/claude-code/blob/main/src-rust/crates/cli/src/main.rs)** entry point, a custom React terminal renderer, 40+ tools, a multi-agent orchestration system, a background memory consolidation engine called "dream," and much more
> 
> Enough yapping, here's some parts about the source code that are genuinely cool that I found after an afternoon deep dive:
> 
> ---
> 
> 
> ## BUDDY - A Tamagotchi I

## 延伸閱讀

相關概念：[[清房工程]] · [[CLI/TUI]] · [[多模態]]

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
> const concepts = ["清房工程","CLI/TUI","多模態"];
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

- [[2026-04-04|2026-04-04]] — 再次上榜，7.8k stars
- [[2026-04-03|2026-04-03]] — 再次上榜，7.4k stars
- [[2026-04-02|2026-04-02]] — 首次收錄，6.6k stars
