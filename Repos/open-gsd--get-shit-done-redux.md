---
repo: open-gsd/get-shit-done-redux
url: https://github.com/open-gsd/get-shit-done-redux
owner: open-gsd
owner_type: Organization
language: JavaScript
license: MIT
description: "Getting Shit Done, the Aftermath"
homepage: "https://github.com/gsd-redux/get-shit-done-redux/discussions/109"
stars: 1344
stars_per_day: 269
forks: 77
open_issues: 78
created: 2026-05-22
pushed_at: 2026-05-28
first_seen: 2026-05-25
week: "2026-W22"
month: "2026-05"
category: "開發工具"
subcategory: "自動化"
release_tag: "v1.01.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-25
use_case: "幫助獨立開發者和小團隊高效地管理 AI 開發流程，避免上下文混亂。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-05-31"
contributor_count: 5
engagement: "low"
issue_close_rate: 46
repo_size_kb: 21170
readme_length: 9835
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-25"
star_history: "2026-05-25:566,2026-05-26:857,2026-05-27:1102,2026-05-28:1344"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - org
  - easy_install
  - "topic/claude_code"
  - "topic/context_engineering"
  - "topic/meta_prompting"
  - "topic/spec_driven_development"
aliases:
  - "get-shit-done-redux"
  - "open-gsd/get-shit-done-redux"
  - "幫助獨立開發者和小團隊高效地管理 AI 開發流程，避免上下文混亂。"
---

# get-shit-done-redux

**566** stars · **283** stars/天 · 建立 2 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/open-gsd--get-shit-done-redux");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v1.01.0` `easy-install`

`claude-code` `context-engineering` `meta-prompting` `spec-driven-development`

> [!summary] 一句話摘要
> 幫助獨立開發者和小團隊高效地管理 AI 開發流程，避免上下文混亂。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (283 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要在多個 AI 模型之間高效切換的獨立開發者或小型團隊。
> **一句話重點** GSD 的設計重點在於上下文管理，這是許多 AI 開發者面臨的主要挑戰。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/open-gsd--get-shit-done-redux");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "open-gsd--get-shit-done-redux" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到高效的上下文管理和驗證，值得採用。

> [!abstract] 核心創新
> GSD 提供了一個針對 AI 開發的上下文管理和驗證系統，解決了上下文膨脹的問題。

## 專案簡介

這個專案的核心機制是透過一系列命令來管理 AI 開發流程，從初始化專案到驗證執行結果，確保每一步都在清晰的上下文中進行。使用者可以透過 `npx @opengsd/get-shit-done-redux@latest` 安裝，並選擇運行時環境，像是 Claude Code 或 OpenCode，這樣能夠自動處理不同環境的配置問題。GSD 的設計重點在於減少上下文膨脹的問題，透過子代理來保持主要上下文的清晰度，並在每個階段使用獨立的 200k-token 上下文來執行任務。這樣的設計不僅提高了執行效率，還能在出現錯誤時快速生成修復計畫。相較於傳統的 AI 開發工具，GSD 提供了更好的上下文管理和驗證機制，讓開發者能夠專注於創建高質量的代碼。

這個工具的依賴樹相對簡單，主要依賴於 `@anthropic-ai/claude-agent-sdk` 和 `ws`，使其在安裝和運行上都保持輕量化。與其他工具相比，如 `spec-driven-development` 和 `Taskmaster`，GSD 更加專注於上下文的管理和自動化，適合需要高效開發流程的小型團隊或獨立開發者。使用者在實際操作中可能會遇到需要手動配置的情況，特別是在非 Node.js 環境下，但整體而言，這個工具的設計使得新手也能快速上手。考慮到它的活躍開發和社群支持，這個專案在未來幾個月內可能會持續增長，特別是在 AI 開發領域的應用。適合那些希望在 AI 開發中保持高效和清晰的開發者，尤其是小型團隊或獨立開發者。

**技術棧**：`JavaScript` · `TypeScript` · `Shell`

## 重點功能

- 多運行時支持 — 能夠自動處理 Claude Code、OpenCode、Gemini CLI 等多種運行時的配置。
- 上下文管理 — 使用子代理來保持主要上下文的清晰度，避免上下文膨脹。
- 自動化驗證 — 提供驗證步驟，能夠在出現錯誤時生成修復計畫。
- 靈活的安裝選項 — 支持全局或本地安裝，並能選擇安裝所需的技能。
- 配置靈活性 — 允許用戶在 `.planning/config.json` 中自定義多種設置。

## 快速開始

1. 安裝 GSD
```bash
npx @opengsd/get-shit-done-redux@latest
```
2. 初始化新專案
```bash
/gsd-new-project
```
3. 執行第一階段
```bash
/gsd-execute-phase 1
```

## 程式碼範例

```js
{
  "前置條件": "安裝 GSD 並初始化專案",
  "指令": "/gsd-execute-phase 1",
  "預期輸出": "執行結果將在子代理中完成，並保持主要上下文的清晰度。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 566 stars（283/天），forks 42（7.4%），這顯示出相對穩定的增長。這個專案的主要貢獻者來自於開源社群，並且在過去的開發中有著良好的聲譽。它解決了 AI 開發中上下文混亂的問題，這是許多開發者在使用傳統工具時常遇到的痛點。特別是在多個 AI 模型之間切換時，GSD 提供了更好的上下文管理和驗證機制。社群的活躍度也顯示出使用者對這個工具的需求和期望，尤其是在 AI 開發的快速變化中。這個工具的設計和功能使其在當前的開發環境中具備了良好的適應性和可擴展性。

## 適合誰使用

**目標受眾**：需要在多個 AI 模型之間高效切換的獨立開發者或小型團隊。

> [!example] 使用場景
> - 獨立開發者用它來快速啟動 AI 專案，因為它能自動處理不同運行時的配置，節省了手動設置的時間。
> - 小型團隊用它來管理多個 AI 模型的開發流程，因為它提供了清晰的上下文管理，避免了上下文混亂的問題。
> - 工程師用它來驗證 AI 代碼的執行結果，因為它能快速生成修復計畫，減少了手動調試的時間。

## 架構分析

GSD 採用多代理架構，將不同的任務分配給專門的子代理，這樣可以保持主要上下文的清晰度。每個子代理都有自己的上下文，能夠獨立執行任務，並在任務完成後將結果返回。這樣的設計使得 GSD 能夠有效地處理多個任務，並在出現錯誤時快速生成修復計畫。選擇這種架構的代價是需要更多的資源來管理多個代理，但這也提高了整體的執行效率。擴展性方面，這種架構能夠輕鬆地添加新的代理來處理不同的任務，適合快速變化的開發環境。

## 技術深入分析

GSD 的核心技術機制是多代理架構，這使得不同的任務能夠在獨立的上下文中執行。這樣的設計不僅提高了執行效率，還能在出現錯誤時快速生成修復計畫。GSD 能夠處理的資料量相對較大，因為每個子代理都有自己的上下文，能夠獨立運行。這樣的設計選擇使得 GSD 在處理多任務時能夠保持高效，但也需要更多的資源來管理這些代理。選擇 JavaScript 和 TypeScript 作為開發語言，使得這個工具能夠在多種環境中運行，並且易於與其他工具整合。與主流框架的整合難度相對較低，因為它的設計是為了支持多種運行時環境，這使得它能夠輕鬆融入現有的開發流程。整體而言，GSD 提供了一個高效的解決方案來管理 AI 開發中的上下文問題，並且在未來的發展中可能會進一步擴展其功能。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，並且有範例。安裝過程相對順暢，但在非 Node.js 環境下可能會遇到一些挑戰。文件有多語言版本，方便不同語言的使用者理解。

## 優缺點分析

> [!success] 優點
> - 提供清晰的上下文管理，避免上下文混亂。
> - 支持多種運行時環境，靈活性高。
> - 自動化驗證步驟，減少手動調試的時間。

> [!danger] 缺點
> - 需要 Node.js 和 npm 環境，對於某些用戶來說可能不方便。
> - 在非 Node.js 環境下安裝可能需要手動配置。
> - 對於大型專案，可能需要額外的性能調整。

> [!warning] 注意事項
> - 需要 Node.js 和 npm 環境才能運行。
> - 在非 Node.js 環境下安裝可能需要手動配置。
> - 對於大型專案，可能需要額外的性能調整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI 代理的生成和管理，GSD 更加專注於上下文管理和開發流程的自動化。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供代碼管理功能，但不具備 GSD 的上下文清晰度和驗證機制。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| spec-driven-development | 專注於規範驅動的開發流程，但不具備 GSD 的上下文管理能力。 | 如果你的團隊已經在使用規範驅動的開發流程，並希望保持一致性。 | medium，因為需要重新調整開發流程。 |
| Taskmaster | 提供任務管理功能，但缺乏 GSD 的上下文清晰度和驗證機制。 | 如果你的團隊需要更強的任務管理功能，而不僅僅是上下文管理。 | high，因為需要重新設計任務管理流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **get-shit-done-redux** | **spec-driven-development** | **Taskmaster** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於規範驅動的開發流程，但不具備 GSD 的上下文管理能力。 | 提供任務管理功能，但缺乏 GSD 的上下文清晰度和驗證機制。 |
> | 遷移成本 | - | medium，因為需要重新調整開發流程。 | high，因為需要重新設計任務管理流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用規範驅動的開發流程，並希望保持一致性。 | 如果你的團隊需要更強的任務管理功能，而不僅僅是上下文管理。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在非 Node.js 環境下安裝可能會遇到問題。
  - 解法：參考文檔中的手動安裝指南。
- [MEDIUM] 某些功能在大型專案中可能會導致性能下降。
  - 解法：考慮進行性能調整或分步執行。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的新創團隊進行 AI 開發 | 非常適合 | 提供清晰的上下文管理和自動化驗證，適合小型團隊的需求。 |
| 大型企業的 AI 開發部門 | 普通 | 雖然功能強大，但可能需要額外的性能調整。 |
| 獨立開發者進行個人專案 | 非常適合 | 能夠快速啟動專案並保持上下文清晰。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到高效的上下文管理和驗證，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：經過內部安全審核，無已知的安全漏洞，適合在 CI/CD 環境中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

GSD 最常與 Claude Code 和 OpenCode 搭配使用，通常在開發和執行階段中發揮作用。在一個使用 Node.js 的專案中，可以通過 `npx @opengsd/get-shit-done-redux@latest` 安裝，然後使用 `/gsd-new-project` 初始化專案。該工具支援 GitHub Actions 和其他 CI 工具，並且可以輕鬆整合到現有的開發流程中。常見的整合問題包括需要手動配置的情況，特別是在非 Node.js 環境下，但整體而言，GSD 的設計使得它能夠與主流工具鏈相容。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/open-gsd--get-shit-done-redux");
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
> const me = dv.page("Repos/open-gsd--get-shit-done-redux");
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
| Forks | 42 |
| Open Issues | 90 |
| Issue 解決率 | 46% (76 closed) |
| 最後推送 | 2026-05-25 |
| 建立日期 | 2026-05-22 |
| 官方網站 | [Link](https://github.com/gsd-redux/get-shit-done-redux/discussions/109) |
| Repo 大小 | 20.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/open-gsd/get-shit-done-redux) |
| Topics | `claude-code` `context-engineering` `meta-prompting` `spec-driven-development` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 73
>     "TypeScript" : 26
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@trek-e](https://github.com/trek-e) | 1545 |
> | [@glittercowboy](https://github.com/glittercowboy) | 945 |
> | [@Tibsfox](https://github.com/Tibsfox) | 127 |
> | [@jeremymcs](https://github.com/jeremymcs) | 60 |
> | [@davesienkowski](https://github.com/davesienkowski) | 23 |

**最新版本**：v1.01.0 — v1.1.0 (2026-05-24)

> [!info]- Release Notes
> ## What's Changed
> * fix(3785): case-insensitive depends_on resolution in phase resolver by @trek-e in https://github.com/open-gsd/get-shit-done-redux/pull/88
> * fix(ci): use GETSHITDONEREDUXNPMTOKEN secret in release workflows by @trek-e in https://github.com/open-gsd/get-shit-done-redux/pull/129
> * fix(ci): escape colons in echo strings in workflow yaml by @trek-e in https://github.com/open-gsd/get-shit-done-redux/pull/125
> * chore: add concurrency block to 11 PR workflows by @trek-e in https://github.com/open-gsd/get-shit-done-redux/pull/141
> * fix(#131): isolate HOME for release-tarball-smoke (before() + runSmoke A-F) by @trek-e in https://github.com/open-gsd/get-shit-done-redux/pull/139
> * docs(118): org-level security baseline RFC (draft) by @trek-e in https://github.com/open-gsd/get-shit-done-redux/pull/137
> * fix(116): locale-safe base64-scan with portable timeout and partial-scan signaling by @trek-e in https://github.com/open-gsd/get-shit-done-redux/pull/132
> * feat(113): detect javascript:/data:/userinfo/token-in-query in markdown links by @trek-e in https://github.com/open-gsd/get-shit-done-redux/pull/133
> * fix(ci): harden test workflow git auth on github-hosted runners by @trek-e in https://github.com/open-gsd/get-shit-done-redux/pull/153
> * fix(3): milestone.complete header dup, bullet leakage, one-liner noise by @trek-e in https://github.com/open-gsd/get-shit-done-redux/pull/146
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，定期更新和討論。
**連結**：[文件](https://github.com/open-gsd/get-shit-done-redux/discussions/109) · [Discord](https://discord.gg/mYgfVNfA2r)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-24 ~ 2026-05-25）
> **活躍天數** 2 天 · **最新 commit** refactor(#181): migrate workstream inventory builder to sdk/src/workstream (#250)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#212](https://github.com/open-gsd/get-shit-done-redux/issues/212) | Documentation-Driven Development (DDD) mode as a sibling to  `area: commands` `feature-request` `needs-maintainer-review` | 1 | 4 |
> | [#248](https://github.com/open-gsd/get-shit-done-redux/issues/248) | enhancement: unify subprocess policy seam after SDK retireme `enhancement` `needs-triage` | 0 | 1 |
> | [#247](https://github.com/open-gsd/get-shit-done-redux/issues/247) | enhancement: runtime-neutral phase-complete predicate from H `enhancement` `needs-triage` | 0 | 0 |
> | [#246](https://github.com/open-gsd/get-shit-done-redux/issues/246) | enhancement: deduplicate runtime metadata after SDK retireme `enhancement` `needs-triage` | 0 | 0 |
> | [#245](https://github.com/open-gsd/get-shit-done-redux/issues/245) | bug: make worktree.cleanup-wave summary rescue runtime-neutr `bug` `needs-triage` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> > # Project Continuity Notice
> >
> > GSD is maintained by the **open-gsd** team at:
> > **`open-gsd/get-shit-done-redux`**
> >
> > Use only these package names:
> >
> > - npm (main): `@opengsd/get-shit-done-redux`
> > - npm (sdk): `@opengsd/gsd-sdk`
> >
> > The legacy upstream (`gsd-build/*`) is outside open-gsd control. Based on public transition announcements and repository ownership reality, we strongly recommend removing `gsd-build` organization packages and migrating to `@opengsd/*`.
> >
> > Security status:
> >
> > - maintainers completed an internal security audit
> > - maintainers report an independent review pass
> > - no known active exploit was found in tracked source during those passes
> >
> > See:
> >
> > - continuity announcement: https://github.com/open-gsd/get-shit-done-redux/discussions/109
> > - audit transparency report: https://github.com/open-gsd/get-shit-done-redux/discussions/119
> >
> > ---
> 
> 
> ## Getting Started
> 
> ```bash
> npx @opengsd/get-shit-done-redux@latest
> ```
> 
> The installer prompts for your runtime (Claude Code, OpenCode, Gemini CLI, Kilo, Codex, Copilot, Cursor, Windsurf, and more) and whether to install globally or locally.
> 
> ```bash
> claude --dangerously-skip-permissions
> ```
> 
> GSD is built for frictionless automation. Skip-permissions is how it's intended to run.
> 
> Install only the skills you need with `--profile=core` (six core-loop skills), `--profile=standard` (core + phase management), or the default full install. Profiles compose: `--profile=core,audit`. `--minimal` is an alias for `--profile=core`. See **[docs/USER-GUIDE.md](docs/USER-GUIDE.md)** for the full walkthrough, non-interactive install flags for all 15 runtimes, and permissions configuration. See [ADR-0011](docs/adr/0011-skill-surface-budget-module.md) for the profile model and runtime surface control.
> 
> Current release highlights are in [docs/RELEASE-v1.42.1.md](docs/RELEASE-v1.42.1.md): package legitimacy checks, safer installer migrations, runtime surface control, custom ship PR sections, reviewer defaults, fallow structural review, and quota-aware execution recovery.
> 
> 
> ### Cross-runtime compatibility: installer required
> 
> The `agents/` and `commands/` directories in this repository are Claude Code-format source files. The installer (`npx @opengsd/get-shit-done-redux@latest`) transforms them per target runtime — stripping or converting frontmatter fields that Claude Code uses but other runtimes reject. For example, OpenCode requires `color` as a hex or semantic value from a fixed set, and does not accept a `tools:` frontmatter field; the installer function `convertClaudeToOpencodeFrontmatter` (`bin/install.js`) handles this automatically.
> 
> **Manually copying files** from `agents/` or `commands/` directly into a non-Claude-Code runtime config directory (e.g., `~/.config/opencode/agents`) skips the conversion step and will produce schema validation errors in that runtime.
> 
> If you are on a system without Node.js or npm (Windows + OpenCode is the most common case), see **[docs/USER-GUIDE.md — Manual install / no-Node.js setup](docs/USER-GUIDE.md#manual-install--no-nodejs-setup)** for the per-runtime conversion summary and alternative install paths.
> 
> ---
> 
> 
> ## Configuration
> 
> Settings live in `.planning/config.json`. Configure during `/gsd-new-project` or update with `/gsd-settings`.
> 
> Key dials:
> 
> | Setting | What it controls |
> |---------|-----------------|
> | `mode` | `interactive` (confirm each step) or `yolo` (auto-approve) |
> | Model profiles | `quality` / `balanced` / `budget` — controls which model each agent uses |
> | `workflow.research` / `plan_check` / `verifier` | Toggle the quality agents that add tokens and time |
> | `parallelization.enabled` | Run independent plans simultaneously |
> 
> Optional structural review: set `code_quality.fallow.enabled` to `true` to add a fallow pre-pass to `/gsd-code-review`. GSD writes `.planning/phases//FALLOW.json` and surfaces a `Structural Findings (fallow)` section in `REVIEW.md`. Install with `npm install -D fallow@^2.70.0` (or system-wide via `cargo install fallow`; note that the Rust binary's JSON schema must match the documented v2.70+ contract — older versions may produce silent zero-finding output).
> 
> Package legitimacy checks are built into the research, planning, and execution path: recommended dependencies get audited, unverified packages require a human checkpoint, and failed installs stop instead of trying similarly named alternatives.
> 
> For the full configuration reference — all settings, git branching strategies, per-runtime model overrides, workstream config inheritance, agent skills injection — see **[docs/CONFIGURATION.md](docs/CONFIGURATION.md)**.
> 
> ---
> 
> 
> ## Why We Continue Building GSD
> 
> GSD exists to help solo builders and small teams ship reliably with AI: clear specs, controlled context, and verification before release.
> 
> In May 2026, maintainers published a continuity announcement and migrated active development to `open-gsd/get-shit-done-redux` after trust and ownership concerns around the former upstream, including a meme-coin rug-pull incident publicly associated with that ecosystem.
> 
> The former creator and the `gsd-build` lineage are no longer part of this program. This repository is the maintained continuation under open-gsd governance.
> 
> The current team continues release operations, triage, and security hardening in public. Audit status and follow-up security work are documented in Discussion #119 and linked issues.
> 
> ---
> 
> 
> ## Why It Works
> 
> Three things most AI-coding setups get wrong:
> 
> **1. Context bloat.** As a session grows, quality degrades. GSD keeps your main context clean by doing the heavy work in fresh subagent contexts. Researchers, planners, and executors each start fresh with exactly what they need.
> 
> **2. No shared memory.** GSD maintains structured artifacts that survive session boundaries: `PROJECT.md` (vision), `REQUIREMENTS.md` (scope), `ROADMAP.md` (where you're going), `STATE.md` (current position and decisions), `CONTEXT.md` (per-phase implementation decisions). Every new session loads these and knows exactly where things stand.
> 
> **3. No verification.** Code that "runs" isn't code that "works." GSD's verify step walks you through what was built, diagnoses failures with dedicated debug agents, and generates fix plans before you declare a phase done.
> 
> See **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)** for how the multi-agent orchestration and context engineering work in detail.
> 
> ---
> 
> 
> # GET SHIT DONE
> 
> **English** · [Português](README.pt-BR.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja-JP.md) · [한국어](README.ko-KR.md)
> 
> **A light-weight meta-prompting, context engineering, and spec-driven development system for Claude Code, OpenCode, Gemini CLI, Kilo, Codex, Copilot, Cursor, Windsurf, and more.**
> 
> **Solves context rot — the quality degradation that happens as your AI fills its context window.**
> 
> [](https://www.npmjs.com/package/@opengsd/get-shit-done-redux)
> [](https://www.npmjs.com/package/@opengsd/get-shit-done-redux)
> [](https://github.com/open-gsd/get-shit-done-redux/actions/workflows/test.yml)
> [](https://discord.gg/mYgfVNfA2r)
> [](https://github.com/open-gsd/get-shit-done-redux)
> [](LICENSE)
> 
> ```bash
> npx @opengsd/get-shit-done-redux@latest
> ```
> 
> **Works on Mac, Windows, and Linux.**
> 
> *"If you know clearly what you want, this WILL build it for you. No bs."*
> 
> *"I've done SpecKit, OpenSpec and Taskmaster — this has produced the best results for me."*
> 
> *"By far the most powerful addition to my Claude Code. Nothing over-engineered. Literally just gets shit done."*
> 
> **Trusted by engineers at Amazon, Google, Shopify, and Webflow.**
> 
> ---
> 
> > [!IMPORTANT]
> > **Returning to GSD?**
> >
> > Run `/gsd-map-codebase` to re-index your codebase, then `/gsd-new-project` to rebuild GSD's planning context. Your code is fine — GSD just needs its context rebuilt. See the [CHANGELOG](CHANGELOG.md) for what's new.
> 
> ---
> 
> 
> ## How It Works
> 
> The loop is six commands. Each one does exactly one thing.
> 
> 
> ### 1. Initialize
> 
> ```bash
> /gsd-new-project
> ```
> 
> Questions →

## 延伸閱讀

相關概念：[[meta-prompting]] · [[context-engineering]] · [[spec-driven-development]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[FoundZiGu--GuJumpgate|FoundZiGu/GuJumpgate]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[QLHazyCoder--codex-oauth-automation-extension|QLHazyCoder/codex-oauth-automation-extension]]

[GitHub](https://github.com/open-gsd/get-shit-done-redux) · [官方網站](https://github.com/gsd-redux/get-shit-done-redux/discussions/109)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "open-gsd--get-shit-done-redux"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "open-gsd--get-shit-done-redux"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "open-gsd--get-shit-done-redux" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W22" AND file.name != "open-gsd--get-shit-done-redux"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["meta-prompting","context-engineering","spec-driven-development"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "open-gsd--get-shit-done-redux" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/open-gsd--get-shit-done-redux");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "open-gsd--get-shit-done-redux" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "open-gsd" AND file.name != "open-gsd--get-shit-done-redux"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/open-gsd--get-shit-done-redux");
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
> const me = dv.page("Repos/open-gsd--get-shit-done-redux");
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
> const me = dv.page("Repos/open-gsd--get-shit-done-redux");
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
> const me = dv.page("Repos/open-gsd--get-shit-done-redux");
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
> const me = dv.page("Repos/open-gsd--get-shit-done-redux");
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

> **2026-05-25** — 首次收錄
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

- [[2026-05-28|2026-05-28]] — 再次上榜，1.3k stars
- [[2026-05-27|2026-05-27]] — 再次上榜，1.1k stars
- [[2026-05-26|2026-05-26]] — 再次上榜，857 stars
- [[2026-05-25|2026-05-25]] — 首次收錄，566 stars
