---
repo: gsd-build/gsd-2
url: https://github.com/gsd-build/gsd-2
owner: gsd-build
owner_type: Organization
language: TypeScript
license: MIT
description: "A powerful meta-prompting, context engineering and spec-driven development system that enables agents to work for long periods of time autonomously without losing track of the big picture"
homepage: ""
stars: 1364
stars_per_day: 341
forks: 116
open_issues: 36
created: 2026-03-11
pushed_at: 2026-03-16
first_seen: 2026-03-13
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: "v2.5.1"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-13
use_case: "讓代理能夠長時間自主工作而不失去全局視野的強大元提示、上下文工程和規格驅動開發系統。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-03-19"
contributor_count: 5
engagement: "low"
issue_close_rate: 71
repo_size_kb: 3653
readme_length: 9975
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-13"
star_history: "2026-03-13:779,2026-03-13:783,2026-03-14:990,2026-03-15:1155,2026-03-16:1364"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
  - "topic/context_engineering"
  - "topic/meta_prompting"
  - "topic/spec_driven_development"
aliases:
  - "gsd-2"
  - "gsd-build/gsd-2"
  - "讓代理能夠長時間自主工作而不失去全局視野的強大元提示、上下文工程和規格驅動開發系統。"
---

# gsd-2

**783** stars · **783** stars/天 · 建立 1 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/gsd-build--gsd-2");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v2.5.1` `easy-install`

`context-engineering` `meta-prompting` `spec-driven-development`

> [!summary] 一句話摘要
> 讓代理能夠長時間自主工作而不失去全局視野的強大元提示、上下文工程和規格驅動開發系統。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (783 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要長期自主開發並希望減少手動干預的軟體開發團隊。
> **一句話重點** GSD 2 的真正創新在於它不僅僅是一個提示框架，而是一個能夠自動執行整個開發流程的編程代理。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/gsd-build--gsd-2");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "gsd-build--gsd-2" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到高效的開發自動化，值得一試。

> [!abstract] 核心創新
> GSD 2 是一個真正的編程代理，能夠自動執行整個開發流程，並在每個任務之間保持清晰的上下文管理。

## 專案簡介

GSD 2 是一個全新的 CLI 工具，旨在解決原有 GSD 在上下文控制和自動化方面的不足。它透過 TypeScript 直接訪問代理架構，實現了清晰的上下文管理和自動化執行，使用者只需執行一條命令，便可讓系統自動完成整個項目。主要指令 `/gsd auto` 會啟動一個狀態機，根據磁碟上的檔案自動執行任務，並在每個任務之間保持乾淨的上下文窗口，避免了長時間執行導致的上下文垃圾累積。GSD 2 的設計使得每個任務都能在獨立的上下文中執行，並能在執行過程中自動追蹤成本和進度，提供即時的儀表板顯示。這種設計不僅提升了執行效率，還能在發生崩潰時進行恢復，確保工作不會丟失。與同類工具相比，GSD 2 的自動化程度更高，能夠自動檢測和安裝所需技能，並在每個切片完成後自動重新評估路線圖，這使得它在長期開發過程中表現出色。使用者可以選擇在步驟模式下逐步執行任務，或在自動模式下讓系統全自動運行，這對於需要長時間開發的項目特別有用。

**技術棧**：`TypeScript` · `JavaScript` · `Swift` · `Shell`

## 重點功能

- 自動化執行 — 使用 `/gsd auto` 指令，讓系統全自動完成任務，無需人為干預。
- 上下文管理 — 每個任務在獨立的上下文窗口中執行，避免上下文垃圾累積。
- 成本追蹤 — 提供每個單位的成本和代幣使用情況，並在儀表板上顯示進度。
- 崩潰恢復 — 在崩潰情況下能夠自動恢復，保證工作不會丟失。
- 自動技能檢測 — 在研究過程中自動檢測並安裝所需的技能，提升開發效率。

## 快速開始

1. 全局安裝 GSD 2
```bash
npm install -g gsd-pi
```
2. 啟動 GSD 互動會話
```bash
gsd
```
3. 進入自動模式
```bash
/gsd auto
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 GSD 2",
  "指令": "/gsd auto",
  "預期輸出": "系統將自動執行任務，並在每個階段提供進度更新。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 783 stars（783/天），forks 65（8.3%），這顯示出強烈的興趣和潛在的使用者基礎。作者 glittercowboy 和其他貢獻者在開源社群中有一定的影響力，之前的 GSD 版本已經獲得了廣泛的關注。這個版本解決了原有 GSD 在上下文控制和自動化方面的痛點，提供了一個更為穩定和高效的開發環境。技術上，這個工具的出現是因為 TypeScript 和 Pi SDK 的進步，使得開發者能夠更好地控制代理的行為。高達 8.3% 的 forks/stars 比率顯示出許多人在實際修改和使用這個工具，而不僅僅是觀望。

## 適合誰使用

**目標受眾**：需要長期自主開發並希望減少手動干預的軟體開發團隊。

> [!example] 使用場景
> - 後端工程師用它來自動化整個開發流程，因為它能夠在不需要人為干預的情況下完成多個任務，節省了大量的時間。
> - 專案經理用它來追蹤項目進度和成本，因為它提供即時的儀表板，能夠清晰顯示每個任務的狀態和花費。
> - 全職開發者用它來管理多個 Git 分支，因為它能夠自動為每個切片創建獨立的分支，簡化了版本控制的流程。

## 架構分析

GSD 2 採用單一 CLI 應用架構，基於 Pi SDK 開發，這使得它能夠直接控制代理的行為。資料流方面，GSD 2 透過 `.gsd/` 目錄管理任務狀態，並在每個任務中使用新的上下文窗口來執行。這種設計的好處是能夠避免上下文的累積問題，但代價是需要使用者熟悉新的檔案結構。擴展性方面，GSD 2 可以輕鬆整合新的 LLM 提供者，並且能夠自動檢測所需技能，這使得它在應對不同開發需求時非常靈活。

## 技術深入分析

GSD 2 的核心技術機制是基於 TypeScript 和 Pi SDK 的應用架構，這使得它能夠直接控制代理的行為。它使用狀態機來管理任務流，確保每個任務在獨立的上下文中執行，這樣可以避免長時間執行導致的上下文垃圾累積。效能上，GSD 2 能夠處理多個任務，並在每個任務中提供即時的進度和成本追蹤。設計上，選擇 TypeScript 使得開發者能夠利用靜態類型檢查的優勢，降低錯誤率，但這也意味著需要一定的學習曲線。技術風險方面，使用者可能會在大規模項目中遇到性能瓶頸，特別是在處理大量任務時。整合方面，GSD 2 與主流 CI/CD 工具的相容性良好，但在整合過程中可能需要進行一些配置調整。

## 新手體驗

> [!info] 上手難度評估
> README 文件詳細且清晰，提供了安裝和使用的範例。安裝過程相對順暢，但需要注意 Node.js 的版本要求。文件中缺乏多語言支持，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 高自動化程度，減少手動干預。
> - 清晰的上下文管理，避免上下文垃圾累積。
> - 即時的進度和成本追蹤，便於管理項目。

> [!danger] 缺點
> - 目前僅支援特定的 LLM 提供者，可能限制使用者選擇。
> - 需要一定的學習曲線來熟悉新的 CLI 操作。
> - 不支援 Windows 環境，限制了使用者範圍。

> [!warning] 注意事項
> - 需要 Node.js 20.6.0 或更高版本。
> - 不支援 Windows 環境。
> - 目前僅支援特定的 LLM 提供者，需手動配置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | 這是一個自動化研究工具，專注於 AI 模型的自動化訓練，而 GSD 2 更加關注於整個開發流程的自動化和上下文管理。 |
| [runanywhereAI/RCLI](https://github.com/runanywhereAI/RCLI) | RCLI 提供了一個命令行介面來管理 AI 任務，但缺乏 GSD 2 的上下文管理和自動化執行功能。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 是一個針對特定任務的自動化工具，GSD 2 則提供了更全面的開發流程管理能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [karpathy/autoresearch](https://github.com/karpathy/autoresearch) | 專注於自動化研究，而 GSD 2 更加關注於整個開發流程的自動化。 | 如果你的專案需要大量的自動化研究，且不需要完整的開發流程管理，則可以選擇 autoresearch。 | medium，因為兩者在使用上有一定的差異。 |
| [runanywhereAI/RCLI](https://github.com/runanywhereAI/RCLI) | 提供命令行介面來管理 AI 任務，但缺乏 GSD 2 的上下文管理和自動化執行功能。 | 如果你需要一個簡單的命令行工具來執行 AI 任務，RCLI 可能更合適。 | low，因為 RCLI 的使用相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gsd-2** | **autoresearch** | **RCLI** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於自動化研究，而 GSD 2 更加關注於整個開發流程的自動化。 | 提供命令行介面來管理 AI 任務，但缺乏 GSD 2 的上下文管理和自動化執行功能。 |
> | 遷移成本 | - | medium，因為兩者在使用上有一定的差異。 | low，因為 RCLI 的使用相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的專案需要大量的自動化研究，且不需要完整的開發流程管理 | 如果你需要一個簡單的命令行工具來執行 AI 任務，RCLI  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在特定 LLM 提供者下，可能會遇到授權問題，導致無法正常使用。
  - 解法：確保使用正確的 API 金鑰並遵循授權流程。
- [MEDIUM] 在長時間運行後，可能會出現性能下降的情況。
  - 解法：定期重啟 GSD 以清理內部狀態。
- **[HIGH]** 某些功能在 Windows 環境下可能無法正常運行。
  - 解法：考慮使用 WSL 或在 Linux 環境中運行。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端開發 | 非常適合 | GSD 2 的自動化特性能夠大幅提升小團隊的開發效率。 |
| 大型企業的長期軟體開發項目 | 適合 | 能夠有效管理多個任務和進度，但需要注意性能瓶頸。 |
| 需要快速原型開發的個人開發者 | 普通 | 雖然 GSD 2 提供自動化，但對於小型專案的學習曲線可能過高。 |
| Windows 環境的開發者 | 不適合 | 目前不支援 Windows 環境，限制了使用者範圍。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的開發自動化，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：GSD 2 本身不需要高權限，且不存取敏感資料，但使用者需確保 API 金鑰的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

GSD 2 最常與 Node.js 和各種 LLM 提供者搭配使用，適合在開發和部署階段使用。實際整合範例包括在一個使用 Node.js 的專案中，透過 GSD 2 自動化開發流程，使用指令 `/gsd auto` 來啟動自動化。GSD 2 支援與 GitHub Actions 等 CI 工具的整合，並能夠與主流 IDE（如 VS Code）良好協作。整合過程中，使用者可能需要進行一些配置調整，以確保所有功能正常運行。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 GSD 2 出現之前，開發者主要依賴手動管理和提示框架來進行開發，這些方法效率低下且容易出錯。隨著 TypeScript 和 Pi SDK 的進步，使得開發者能夠更好地控制代理的行為，GSD 2 的出現正是對這一需求的回應。這個工具代表了開發自動化的趨勢，未來可能會有更多類似工具出現，進一步提升開發效率。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Node.js
- 了解 TypeScript 基本操作
- 有 CI/CD pipeline 經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用 GSD 2。第二週：在小型團隊的內部工具中導入。第三週：撰寫最佳實踐文件。第四週：在主產品的一個非核心模組中開始使用。

**成功指標**：開發時間減少 30%，錯誤率降低 50%。

> [!warning] 退出計畫
> 所有設定存在標準格式，可以用官方工具轉換為其他開發工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/gsd-build--gsd-2");
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
> const me = dv.page("Repos/gsd-build--gsd-2");
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
| Forks | 65 |
| Open Issues | 26 |
| Issue 解決率 | 71% (64 closed) |
| 最後推送 | 2026-03-12 |
| 建立日期 | 2026-03-11 |
| Repo 大小 | 3.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/gsd-build/gsd-2) |
| Topics | `context-engineering` `meta-prompting` `spec-driven-development` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@clack/prompts` `@mariozechner/pi-coding-agent` `picocolors` `playwright` `@types/node` `patch-package` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 94
>     "JavaScript" : 3
>     "Swift" : 3
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@glittercowboy](https://github.com/glittercowboy) | 169 |
> | [@FacuVCanale](https://github.com/FacuVCanale) | 22 |
> | [@jonathancostin](https://github.com/jonathancostin) | 13 |
> | [@vp275](https://github.com/vp275) | 5 |
> | [@marcelreschke](https://github.com/marcelreschke) | 3 |

**最新版本**：v2.5.1 (2026-03-12)

> [!info]- Release Notes
> ## [2.5.1] - 2026-03-12
> 
> ### Added
> - `secure_env_collect` now auto-detects existing keys, destination files, and provides guidance field for better onboarding UX
> 
> ### Changed
> - Right-sized pipeline for simple work — single-slice milestones skip redundant research/plan sessions, reducing 9-10 sessions to 5-6
> - Heavyweight plan sections (Proof Level, Integration Closure, Observability) are now conditional, omitted for simple slices
> 
> ### Fixed
> - Squash-merge now aborts cleanly on conflict and stops auto-mode instead of looping with corrupted state
> - Resolved baked-in merge conflict markers in loader.ts, logo.ts, and postinstall.js
> 
> Install/upgrade: `npm install -g gsd-pi@latest`

## 社群與生態

**社群活躍度**：社群活躍度中等，開放的問題數量顯示出使用者在實際使用中的挑戰。
**連結**：[文件](https://github.com/glittercowboy/gsd-pi#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-12 ~ 2026-03-12）
> **活躍天數** 1 天 · **最新 commit** 2.5.1

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#86](https://github.com/gsd-build/gsd-2/issues/86) | Can't Anthropic ban the account for using the oauth token ou `question` | 9 | 11 |
> | [#70](https://github.com/gsd-build/gsd-2/issues/70) | [Feature Request] Replace Brave/Jina with Self-Hosted SearXN `enhancement` | 8 | 5 |
> | [#138](https://github.com/gsd-build/gsd-2/issues/138) | Enhancement: Add local Model Support (LM Studio, Ollama, vLL `enhancement` | 3 | 1 |
> | [#82](https://github.com/gsd-build/gsd-2/issues/82) | [Feature] Add a way beyond just steering to hard-steer all d `enhancement` | 2 | 0 |
> | [#129](https://github.com/gsd-build/gsd-2/issues/129) | Everything shortcut-related (like Ctrl+Alt+G) should be togg `enhancement` | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # GSD 2
> 
> **The evolution of [Get Shit Done](https://github.com/gsd-build/get-shit-done) — now a real coding agent.**
> 
> [](https://www.npmjs.com/package/gsd-pi)
> [](https://www.npmjs.com/package/gsd-pi)
> [](https://github.com/gsd-build/GSD-2)
> [](LICENSE)
> 
> The original GSD went viral as a prompt framework for Claude Code. It worked, but it was fighting the tool — injecting prompts through slash commands, hoping the LLM would follow instructions, with no actual control over context windows, sessions, or execution.
> 
> This version is different. GSD is now a standalone CLI built on the [Pi SDK](https://github.com/badlogic/pi-mono), which gives it direct TypeScript access to the agent harness itself. That means GSD can actually *do* what v1 could only *ask* the LLM to do: clear context between tasks, inject exactly the right files at dispatch time, manage git branches, track cost and tokens, detect stuck loops, recover from crashes, and auto-advance through an entire milestone without human intervention.
> 
> One command. Walk away. Come back to a built project with clean git history.
> 
> npm install -g gsd-pi
> 
> ---
> 
> 
> ## Getting Started
> 
> 
> ### Install
> 
> ```bash
> npm install -g gsd-pi
> ```
> 
> 
> ## Configuration
> 
> 
> ## What Changed From v1
> 
> The original GSD was a collection of markdown prompts installed into `~/.claude/commands/`. It relied entirely on the LLM reading those prompts and doing the right thing. That worked surprisingly well — but it had hard limits:
> 
> - **No context control.** The LLM accumulated garbage over a long session. Quality degraded.
> - **No real automation.** "Auto mode" was the LLM calling itself in a loop, burning context on orchestration overhead.
> - **No crash recovery.** If the session died mid-task, you started over.
> - **No observability.** No cost tracking, no progress dashboard, no stuck detection.
> 
> GSD v2 solves all of these because it's not a prompt framework anymore — it's a TypeScript application that *controls* the agent session.
> 
> | | v1 (Prompt Framework) | v2 (Agent Application) |
> |---|---|---|
> | Runtime | Claude Code slash commands | Standalone CLI via Pi SDK |
> | Context management | Hope the LLM doesn't fill up | Fresh session per task, programmatic |
> | Auto mode | LLM self-loop | State machine reading `.gsd/` files |
> | Crash recovery | None | Lock files + session forensics |
> | Git strategy | LLM writes git commands | Programmatic branch-per-slice, squash merge |
> | Cost tracking | None | Per-unit token/cost ledger with dashboard |
> | Stuck detection | None | Retry once, then stop with diagnostics |
> | Timeout supervision | None | Soft/idle/hard timeouts with recovery steering |
> | Context injection | "Read this file" | Pre-inlined into dispatch prompt |
> | Roadmap reassessment | Manual | Automatic after each slice completes |
> | Skill discovery | None | Auto-detect and install relevant skills during research |
> 
> 
> ### Migrating from v1
> 
> > **Note:** Migration works best with a `ROADMAP.md` file for milestone structure. Without one, milestones are inferred from the `phases/` directory.
> 
> If you have projects with `.planning` directories from the original Get Shit Done, you can migrate them to GSD-2's `.gsd` format:
> 
> ```bash
> 
> # From within the project directory
> /gsd migrate
> 
> 
> # Or specify a path
> /gsd migrate ~/projects/my-old-project
> ```
> 
> The migration tool:
> - Parses your old `PROJECT.md`, `ROADMAP.md`, `REQUIREMENTS.md`, phase directories, plans, summaries, and research
> - Maps phases → slices, plans → tasks, milestones → milestones
> - Preserves completion state (`[x]` phases stay done, summaries carry over)
> - Consolidates research files into the new structure
> - Shows a preview before writing anything
> - Optionally runs an agent-driven review of the output for quality assurance
> 
> Supports format variations including milestone-sectioned roadmaps with `` blocks, bold phase entries, bullet-format requirements, decimal phase numbering, and duplicate phase numbers across milestones.
> 
> ---
> 
> 
> ## How It Works
> 
> GSD structures work into a hierarchy:
> 
> ```
> Milestone  →  a shippable version (4-10 slices)
>   Slice    →  one demoable vertical capability (1-7 tasks)
>     Task   →  one context-window-sized unit of work
> ```
> 
> The iron rule: **a task must fit in one context window.** If it can't, it's two tasks.
> 
> 
> ### The Loop
> 
> Each slice flows through phases automatically:
> 
> ```
> Research → Plan → Execute (per task) → Complete → Reassess Roadmap → Next Slice
> ```
> 
> **Research** scouts the codebase and relevant docs. **Plan** decomposes the slice into tasks with must-haves (mechanically verifiable outcomes). **Execute** runs each task in a fresh context window with only the relevant files pre-loaded. **Complete** writes the summary, UAT script, marks the roadmap, and commits. **Reassess** checks if the roadmap still makes sense given what was learned.
> 
> 
> ### `/gsd auto` — The Main Event
> 
> This is what makes GSD different. Run it, walk away, come back to built software.
> 
> ```
> /gsd auto
> ```
> 
> Auto mode is a state machine driven by files on disk. It reads `.gsd/STATE.md`, determines the next unit of work, creates a fresh agent session, injects a focused prompt with all relevant context pre-inlined, and lets the LLM execute. When the LLM finishes, auto mode reads disk state again and dispatches the next unit.
> 
> **What happens under the hood:**
> 
> 1. **Fresh session per unit** — Every task, every research phase, every planning step gets a clean 200k-token context window. No accumulated garbage. No "I'll be more concise now."
> 
> 2. **Context pre-loading** — The dispatch prompt includes inlined task plans, slice plans, prior task summaries, dependency summaries, roadmap excerpts, and decisions register. The LLM starts with everything it needs instead of spending tool calls reading files.
> 
> 3. **Git branch-per-slice** — Each slice gets its own branch (`gsd/M001/S01`). Tasks commit atomically on the branch. When the slice completes, it's squash-merged to main as one clean commit.
> 
> 4. **Crash recovery** — A lock file tracks the current unit. If the session dies, the next `/gsd auto` reads the surviving session file, synthesizes a recovery briefing from every tool call that made it to disk, and resumes with full context.
> 
> 5. **Stuck detection** — If the same unit dispatches twice (the LLM didn't produce the expected artifact), it retries once with a deep diagnostic. If it fails again, auto mode stops with the exact file it expected.
> 
> 6. **Timeout supervision** — Soft timeout warns the LLM to wrap up. Idle watchdog detects stalls. Hard timeout pauses auto mode. Recovery steering nudges the LLM to finish durable output before giving up.
> 
> 7. **Cost tracking** — Every unit's token usage and cost is captured, broken down by phase, slice, and model. The dashboard shows running totals and projections. Budget ceilings can pause auto mode before overspending.
> 
> 8. **Adaptive replanning** — After each slice completes, the roadmap is reassessed. If the work revealed new information that changes the plan, slices are reordered, added, or removed before continuing.
> 
> 9. **Escape hatch** — Press Escape to pause. The conversation is preserved. Interact with the agent, inspect what happened, or just `/gsd auto` to resume from disk state.
> 
> 
> ### `/gsd` and `/gsd next` — Step Mode
> 
> By default, `/gsd` runs in **step mode**: the same state machine as auto mode, but it pauses between units with a wizard showing what completed and what's next. You advance one step at a time, review the output, and continue when ready.
> 
> - **No `.gsd/` directory** → Start a new project. Discussion flow captures your vision, constraints, and preferences.
> - **Milestone exists, no roadmap** → Discuss or research the milestone.
> - **Roadmap exists, slices pending** → Plan the next slice, execute one task, or switch to auto.
> - **Mid-task** → Resume from where you left off.
> 
> `/gsd next` is an explicit alias for step mode. You can switch from step → auto mid-session via the wizard.
> 
> Step mode is the on-ramp. Auto mode is the highway.
> 
> ---
> 
> 
> ### Log in t

## 延伸閱讀

相關概念：[[自動化]] · [[上下文工程]] · [[規格驅動開發]]

相關專案：[[karpathy--autoresearch|karpathy/autoresearch]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[runesleo--claude-code-workflow|runesleo/claude-code-workflow]]

[GitHub](https://github.com/gsd-build/gsd-2)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "gsd-build--gsd-2"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "gsd-build--gsd-2"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "gsd-build--gsd-2" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "gsd-build--gsd-2"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","上下文工程","規格驅動開發"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "gsd-build--gsd-2" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/gsd-build--gsd-2");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "gsd-build--gsd-2" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "gsd-build" AND file.name != "gsd-build--gsd-2"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/gsd-build--gsd-2");
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
> const me = dv.page("Repos/gsd-build--gsd-2");
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
> const me = dv.page("Repos/gsd-build--gsd-2");
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
> const me = dv.page("Repos/gsd-build--gsd-2");
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
> const me = dv.page("Repos/gsd-build--gsd-2");
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

> **2026-03-13** — 首次收錄
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

- [[2026-03-16|2026-03-16]] — 再次上榜，1.4k stars
- [[2026-03-15|2026-03-15]] — 再次上榜，1.2k stars
- [[2026-03-14|2026-03-14]] — 再次上榜，990 stars
- [[2026-03-13|2026-03-13]] — 首次收錄，779 stars
