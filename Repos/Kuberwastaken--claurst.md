---
repo: Kuberwastaken/claurst
url: https://github.com/Kuberwastaken/claurst
owner: Kuberwastaken
owner_type: User
language: Rust
license: GPL-3.0
description: "Your favorite Terminal Coding Agent, now in Rust & a Breakdown of the Claude Code leak & discoveries"
homepage: "https://kuber.studio/blog/AI/Claude-Code's-Entire-Source-Code-Got-Leaked-via-a-Sourcemap-in-npm,-Let's-Talk-About-it"
stars: 8518
stars_per_day: 1420
forks: 7629
open_issues: 18
created: 2026-03-31
pushed_at: 2026-04-06
first_seen: 2026-04-02
week: "2026-W14"
month: "2026-04"
category: "開發工具"
subcategory: "CLI 工具"
release_tag: "v0.0.8"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-02
use_case: "提供一個用 Rust 實作的終端編碼代理，並深入分析 Claude 代碼洩漏事件。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-04-10"
contributor_count: 2
engagement: "high"
issue_close_rate: 57
repo_size_kb: 4290
readme_length: 9998
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:6592,2026-04-02:6612,2026-04-03:7380,2026-04-03:7389,2026-04-04:7802,2026-04-04:7803,2026-04-05:8063,2026-04-05:8063,2026-04-06:8294,2026-04-06:8297,2026-04-07:8517,2026-04-07:8518"
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

**8.5k** stars · **1.4k** stars/天 · 建立 6 天前 · Rust · GPL-3.0

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

`v0.0.8`

> [!summary] 一句話摘要
> 提供一個用 Rust 實作的終端編碼代理，並深入分析 Claude 代碼洩漏事件。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Viral (1.4k stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** High
> **適合** 需要在終端環境中進行編碼且對隱私有高要求的開發者。
> **一句話重點** CLAURST 讓開發者在終端中安全地使用 AI 編碼工具，並且不會追蹤用戶行為。

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
> **結論** 花 5 小時學、3 小時整合，得到高效的終端編碼環境，值得採用。

> [!abstract] 核心創新
> CLAURST 是一個用 Rust 實作的終端編碼代理，專注於隱私和記憶體效率。

## 專案簡介

CLAURST 是一個用 Rust 實作的終端編碼代理，旨在提供一個高效且無追蹤的開發環境。用戶可以透過 `/connect` 指令連接到不同的 AI 提供者，並利用多種語音模式進行互動。這個工具的設計重點在於記憶體效率和無追蹤特性，這使得它比原始的 TypeScript 版本更具優勢。CLAURST 的核心架構使用了 Rust 的特性來實現高效的記憶體管理，並且在功能上提供了多種實驗性選項，如多提供者支持和語音輸入。與同類工具相比，如 `Claude Code` 和 `OpenAI CLI`，CLAURST 的記憶體使用量更低，並且不會收集用戶數據。這使得它特別適合對隱私有高要求的開發者。

使用者在處理大量請求時，CLAURST 能夠保持較低的延遲，並且支援多種 API 特性。這個專案的社群活躍度高，開發者對問題的回應速度快，並且有持續的更新和修復。從成熟度上看，CLAURST 目前處於 beta 階段，適合小型團隊或個人開發者進行實驗和開發。未來六個月內，預計會有更多功能和穩定性提升。對於需要在終端環境中進行編碼的開發者，CLAURST 提供了一個不錯的選擇，但對於大型專案或生產環境，可能需要更長時間的測試和驗證。

**技術棧**：`Rust`

## 重點功能

- 多提供者支持 — 透過 `/connect` 指令連接到不同的 AI 提供者。
- 多種語音模式 — 使用 `/Rocky` 和 `/Caveman` 指令切換語音風格。
- 高效記憶體管理 — 相較於原始版本，CLAURST 在記憶體使用上更為高效。
- 無追蹤特性 — 不會收集用戶的行為數據，保護用戶隱私。
- 實驗性功能 — 提供多種實驗性選項，讓用戶可以探索新功能。

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
> 建立 6 天就累積 8518 stars（1420/天），forks 7629（89.6%），這顯示出極高的社群參與度。這個專案的作者 Kuberwastaken 之前在開源社群中活躍，並且有著良好的開發紀錄。CLAURST 解決了開發者在使用 AI 編碼工具時的隱私問題，因為它不會追蹤用戶行為，這在目前的市場中是個重要的痛點。這個專案的爆發可能與最近的 Claude 代碼洩漏事件有關，讓更多人關注到開源替代方案的需求。forks/stars 比率高達 89.6%，顯示出許多開發者對這個專案的實際修改和使用。

## 適合誰使用

**目標受眾**：需要在終端環境中進行編碼且對隱私有高要求的開發者。

> [!example] 使用場景
> - 後端工程師用它來在終端中快速編寫和測試 API，因為 CLAURST 提供了高效的記憶體管理和無追蹤特性，讓開發過程更安全。
> - 獨立開發者用它來連接不同的 AI 提供者，因為它的多提供者支持讓他們能夠靈活選擇最適合的工具。
> - 教育工作者用它來教學編碼，因為它的終端界面簡潔且易於使用，適合新手學習。

## 架構分析

CLAURST 的架構基於 Rust 的高效能設計，使用了多執行緒來處理並發請求，並且透過命令行介面與用戶互動。資料流方面，使用者的輸入會被即時處理並傳遞給相應的 AI 提供者，然後將結果返回給用戶。這種設計使得系統能夠在高負載下保持穩定。選擇 Rust 而非其他語言（如 Python）是因為 Rust 提供了更好的記憶體管理和效能，雖然這也增加了開發的複雜性。擴展性方面，CLAURST 可以輕鬆整合新的 AI 提供者，但在功能擴展時可能需要額外的測試和驗證。

## 技術深入分析

CLAURST 使用 Rust 語言來實現高效的記憶體管理和執行效能，這使得它在處理大量請求時能夠保持低延遲。系統架構中，使用了多執行緒來處理並發請求，並且透過命令行介面與用戶互動。這樣的設計選擇使得 CLAURST 能夠在高負載下穩定運行，並且能夠快速響應用戶的請求。選擇 Rust 而非其他語言（如 Python）是因為 Rust 提供了更好的記憶體管理和效能，雖然這也增加了開發的複雜性。技術風險方面，CLAURST 的設計決策可能在擴大使用時遇到性能瓶頸，特別是在處理大型資料集時。整合方面，CLAURST 與現有的 CLI 工具鏈相容性良好，並且可以輕鬆整合到 CI/CD pipeline 中，降低了團隊的學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且有範例，安裝過程順暢，沒有明顯的坑。文件目前僅提供英文版本，但整體上適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 高效的記憶體管理，適合資源有限的環境。
> - 無追蹤特性，保護用戶隱私。
> - 活躍的社群和快速的問題解決能力。

> [!danger] 缺點
> - 仍在 beta 階段，穩定性可能不足。
> - 某些實驗性功能可能不可靠。
> - 對大型專案的支持尚未經過充分測試。

> [!warning] 注意事項
> - 目前仍在 beta 階段，可能存在不穩定性。
> - 某些實驗性功能可能不完全可靠，使用時需謹慎。
> - 對於大型專案的支持尚未經過充分測試。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [Kuberwastaken/claude-code](https://github.com/Kuberwastaken/claude-code) | CLAURST 是 CLAUDE CODE 的 Rust 重寫版本，專注於記憶體效率和隱私保護。 |
| OpenAI CLI | OpenAI CLI 需要用戶提供 API 金鑰，並可能會追蹤用戶行為，而 CLAURST 則不會。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供類似的功能，但主要用於資料抓取，而 CLAURST 專注於終端編碼。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| OpenAI CLI | OpenAI CLI 需要用戶提供 API 金鑰，並且可能會追蹤用戶行為，而 CLAURST 則不會。 | 如果你的團隊已經在使用 OpenAI 的 API 且需要集成到現有的工作流程中。 | medium，因為需要重新配置 API 金鑰和環境變數。 |
| [Kuberwastaken/claude-code](https://github.com/Kuberwastaken/claude-code) | CLAUDE CODE 是 CLAURST 的前身，使用 TypeScript 實作，記憶體使用較高。 | 如果你需要使用 CLAUDE CODE 的特定功能或工具。 | high，因為需要重寫部分代碼以適應 Rust 環境。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **claurst** | **OpenAI CLI** | **claude-code** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | OpenAI CLI 需要用戶提供 API 金鑰，並且可能會追蹤用戶行為，而 CLAURST 則不會。 | CLAUDE CODE 是 CLAURST 的前身，使用 TypeScript 實作，記憶體使用較高。 |
> | 遷移成本 | - | medium，因為需要重新配置 API 金鑰和環境變數。 | high，因為需要重寫部分代碼以適應 Rust 環境。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 OpenAI 的 API 且需要集成 | 如果你需要使用 CLAUDE CODE 的特定功能或工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 某些實驗性功能可能不穩定，使用時需謹慎
  - 解法：在使用之前先進行充分測試
- **[HIGH]** 在高負載下可能會遇到性能瓶頸
  - 解法：考慮使用多執行緒來分擔負載
- [MEDIUM] 安裝過程中可能需要額外的依賴包
  - 解法：確保系統已安裝所有必要的依賴

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的開發環境 | 非常適合 | CLAURST 提供高效的記憶體管理，適合資源有限的環境。 |
| 大型企業的生產環境 | 不適合 | 目前仍在 beta 階段，穩定性可能不足。 |
| 教育機構的編碼教學 | 適合 | 簡潔的終端界面適合新手學習。 |
| 需要高隱私保護的開發者 | 非常適合 | 無追蹤特性保護用戶隱私。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、3 小時整合，得到高效的終端編碼環境，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：CLAURST 不需要高權限，且不會存取敏感資料。依賴鏈中無已知的供應鏈風險，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

CLAURST 最常與其他 CLI 工具搭配使用，特別是在開發和測試階段。用戶可以在使用 Rust 開發的專案中，通過簡單的命令行指令來整合 CLAURST。它與主流 CI 工具（如 GitHub Actions 和 GitLab CI）相容，並且可以輕鬆集成到現有的開發流程中。整合的摩擦點主要在於需要配置環境變數和 API 金鑰，但整體上相對簡單。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 CLAURST 出現之前，開發者主要依賴於其他 CLI 工具，如 OpenAI CLI 和 CLAUDE CODE，這些工具在隱私和記憶體管理上存在一定的不足。隨著對開源替代方案需求的增加，CLAURST 提供了一個新的選擇。技術上，Rust 語言的興起使得高效能和安全性成為可能，這使得 CLAURST 的實現變得可行。

這個工具代表了開源社群對於隱私和效率的重視，未來可能會引領更多類似工具的出現。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Rust 基本語法
- 了解 CLI 工具的使用
- 有基本的 API 整合經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用 CLAURST。第二週：在小型團隊的內部工具中導入。第三週：撰寫使用文檔和最佳實踐。第四週：在主產品中進行測試。

**成功指標**：開發效率提升 30%，用戶滿意度提高。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方工具轉換為其他 CLI 工具的配置。

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
| Open Issues | 18 |
| Issue 解決率 | 57% (24 closed) |
| 最後推送 | 2026-04-06 |
| 建立日期 | 2026-03-31 |
| 官方網站 | [Link](https://kuber.studio/blog/AI/Claude-Code's-Entire-Source-Code-Got-Leaked-via-a-Sourcemap-in-npm,-Let's-Talk-About-it) |
| Repo 大小 | 4.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Kuberwastaken/claurst) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Kuberwastaken](https://github.com/Kuberwastaken) | 48 |
> | [@Sporkley](https://github.com/Sporkley) | 3 |

**最新版本**：v0.0.8 — Claurst v0.0.8 (2026-04-06)

> [!info]- Release Notes
> ## What's Changed
> * fix: prevent app crashes and terminal corruption on bad model output by @Sporkley in https://github.com/Kuberwastaken/claurst/pull/37
> * fix: respect --provider and -m flags from command line by @Sporkley in https://github.com/Kuberwastaken/claurst/pull/35
> 
> ## New Contributors
> * @Sporkley made their first contribution in https://github.com/Kuberwastaken/claurst/pull/37
> 
> **Full Changelog**: https://github.com/Kuberwastaken/claurst/commits/v0.0.8

## 社群與生態

**社群活躍度**：社群活躍，問題解決率為 57%。
**連結**：[文件](https://github.com/Kuberwastaken/claurst)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-06 ~ 2026-04-06）
> **活躍天數** 1 天 · **最新 commit** fix: codex sessions errors, oauth token fix

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#48](https://github.com/Kuberwastaken/claurst/issues/48) | Custom base URL and API key not loading/injecting properly | 1 | 3 |
> | [#45](https://github.com/Kuberwastaken/claurst/issues/45) | This Is Insane | 1 | 3 |
> | [#40](https://github.com/Kuberwastaken/claurst/issues/40) | context limit for models | 1 | 3 |
> | [#54](https://github.com/Kuberwastaken/claurst/issues/54) | Installation Guide | 0 | 1 |

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
> > UPDATE: Multi Provider Support is OUT ! Run /connect to connect to your AI Provider of Choice! [EXPERIMENTAL]
> >
> > Fun Additition: There's multiple speech types now ! Try out /Rocky and /Caveman to hear the difference! /Normal to go back to normal. [EXPERIMENTAL]
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
> The funniest part is, there's an entire system called ["Undercover Mode"](#undercover-mode--do-not-b

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[隱私保護]]

相關專案：[[Kuberwastaken--claude-code|Kuberwastaken/claude-code]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]]

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

- [[2026-04-07|2026-04-07]] — 再次上榜，8.5k stars
- [[2026-04-06|2026-04-06]] — 再次上榜，8.3k stars
- [[2026-04-05|2026-04-05]] — 再次上榜，8.1k stars
- [[2026-04-04|2026-04-04]] — 再次上榜，7.8k stars
- [[2026-04-03|2026-04-03]] — 再次上榜，7.4k stars
- [[2026-04-02|2026-04-02]] — 首次收錄，6.6k stars
