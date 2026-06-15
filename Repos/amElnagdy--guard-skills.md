---
repo: amElnagdy/guard-skills
url: https://github.com/amElnagdy/guard-skills
owner: amElnagdy
owner_type: User
language: N/A
license: MIT
description: "Guard skills for coding agents, quality gates that catch AI-generated failure modes in code, tests, and docs"
homepage: "https://skills.sh/amElnagdy/guard-skills"
stars: 730
stars_per_day: 91
forks: 83
open_issues: 1
created: 2026-06-06
pushed_at: 2026-06-07
first_seen: 2026-06-09
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "代碼檢查"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-09
use_case: "為編碼代理提供質量檢查技能，捕捉 AI 生成的代碼、測試和文檔中的失敗模式。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-06-20"
contributor_count: 0
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 77
readme_length: 7943
bus_factor: 0
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-09"
star_history: "2026-06-09:470,2026-06-09:470,2026-06-10:517,2026-06-10:517,2026-06-11:553,2026-06-11:553,2026-06-12:571,2026-06-12:571,2026-06-13:601,2026-06-13:601,2026-06-14:679,2026-06-15:730"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
  - "topic/agent_skills"
  - "topic/ai"
  - "topic/claude"
  - "topic/claude_code"
  - "topic/code_review"
aliases:
  - "guard-skills"
  - "amElnagdy/guard-skills"
  - "為編碼代理提供質量檢查技能，捕捉 AI 生成的代碼、測試和文檔中的失敗模式。"
---

# guard-skills

**730** stars · **91** stars/天 · 建立 8 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/amElnagdy--guard-skills");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`agent-skills` `ai` `claude` `claude-code` `code-review` `codex` `skills-sh` `woocommerce` `wordpress`

> [!summary] 一句話摘要
> 為編碼代理提供質量檢查技能，捕捉 AI 生成的代碼、測試和文檔中的失敗模式。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (91 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 7 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要提高 AI 生成代碼質量的開發團隊，特別是使用自動化工具的團隊。
> **一句話重點** guard-skills 讓開發者能夠在 AI 生成代碼的過程中，輕鬆捕捉質量問題，提升代碼的可靠性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/amElnagdy--guard-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "代碼檢查" && p.file.name !== "amElnagdy--guard-skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 代碼檢查 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，能顯著提升 AI 生成代碼的質量，值得採用。

> [!abstract] 核心創新
> 提供針對 AI 生成代碼的專門質量檢查技能，填補了市場上的一大空白。

## 專案簡介

guard-skills 是一組專為編碼代理設計的質量檢查技能，旨在捕捉 AI 生成的代碼、測試和文檔中的系統性失敗模式。在使用時，開發者可以在代理生成代碼後，針對變更使用相關的 guard 進行檢查，這樣可以在提交或合併之前發現問題。這些技能不僅能在寫作過程中提供指導，還能在代碼生成後進行反應式檢查。核心指令如 `npx skills add amElnagdy/guard-skills` 可以輕鬆安裝整個技能包，或選擇單一技能進行安裝。

這些技能包括 clean-code-guard、test-guard、docs-guard 等，針對不同的代碼類型提供專門的檢查。這些技能的設計考慮了 AI 生成代碼的特性，例如過度抽象、錯誤處理不當等，並提供針對性的解決方案。這樣的設計能有效減少 AI 生成代碼的質量問題，提升代碼的可維護性和可靠性。與其他工具相比，guard-skills 更專注於代碼檢查，而不是全面的開發流程，這使得它在特定場景下能提供更精確的質量保障。

## 重點功能

- clean-code-guard — 檢查生成代碼的清晰度和可維護性，捕捉 LLM 代碼異常和過度抽象問題。
- test-guard — 專為測試代碼設計的質量檢查，避免測試重複和無效測試。
- docs-guard — 確保文檔準確性，檢查文檔與代碼的一致性。
- wp-guard — 專為 WordPress 代碼提供的檢查，確保安全性和最佳實踐。
- woo-guard — 專為 WooCommerce 擴展提供的檢查，確保支付和訂單處理的正確性。

## 快速開始

1. 安裝 guard-skills
```bash
npx skills add amElnagdy/guard-skills
```
2. 安裝特定技能
```bash
npx skills add amElnagdy/guard-skills --skill clean-code-guard
```
3. 在生成代碼後運行檢查
```bash
Use $clean-code-guard on the diff you just produced.
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天就累積 730 stars（91/天），forks 83（11.4%），顯示出強勁的增長潛力。作者 amElnagdy 專注於 AI 生成代碼的質量問題，這是目前開發者面臨的一大痛點。之前，開發者通常依賴手動代碼審查或基本的靜態分析工具，但這些方法無法有效捕捉 AI 生成代碼中的特定問題。這個工具的出現正好填補了這一空白，提供了針對性強的質量檢查。社群對於 AI 生成代碼的質量提升需求日益增加，這使得 guard-skills 成為一個值得關注的解決方案。

## 適合誰使用

**目標受眾**：需要提高 AI 生成代碼質量的開發團隊，特別是使用自動化工具的團隊。

> [!example] 使用場景
> - 後端工程師用它來在提交前檢查生成的 REST API 代碼，因為可以有效捕捉到潛在的安全漏洞和代碼異常。
> - 測試工程師用它來檢查自動生成的測試代碼，因為能夠避免重複測試和無效測試的問題，提升測試質量。
> - 文檔編輯者用它來驗證 README 和 API 文檔的準確性，因為這樣可以確保文檔與實際代碼的一致性，減少使用者困惑。

## 架構分析

guard-skills 的架構設計為每個技能獨立，並以輕量級的 Markdown 文件和元數據組成。這樣的設計使得技能可以快速加載，並且在需要時才加載更深層的參考資料。這種設計的好處在於降低了記憶體使用和加載時間，但也意味著在某些情況下可能需要額外的查詢來獲取詳細信息。整體架構的輕量化使得使用者能夠快速集成到現有的開發流程中，並且不會對系統性能造成顯著影響。

## 技術深入分析

guard-skills 的核心技術在於提供針對 AI 生成代碼的質量檢查，這些檢查技能針對不同的代碼類型設計，能夠有效捕捉潛在的錯誤和異常。這些技能的設計基於對 AI 生成代碼特性的深入分析，並參考了相關的研究文獻。由於這些技能是獨立的，使用者可以根據需求選擇安裝，這樣的設計使得整體架構輕量且靈活。這些技能在實際使用中能夠顯著提升代碼質量，特別是在大型專案中，能夠減少因 AI 生成代碼而導致的潛在問題。未來，隨著 AI 技術的進步，這些技能可能會進一步擴展，涵蓋更多的代碼檢查需求。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的詳細說明。安裝過程順暢，沒有明顯的坑。文件中有良好的示範，讓新手能夠快速上手。

## 優缺點分析

> [!success] 優點
> - 專注於 AI 生成代碼的質量檢查，能有效捕捉潛在問題。
> - 安裝和使用簡單，適合快速集成到現有工作流。
> - 提供多種專門的檢查技能，針對不同的代碼類型。

> [!danger] 缺點
> - 目前僅支持特定的編碼代理，限制了使用範圍。
> - 不提供代碼生成能力，僅限於檢查。
> - 需要手動運行檢查，無法完全自動化。

> [!warning] 注意事項
> - 目前僅支援特定的編碼代理，如 Claude Code 和 Codex。
> - 不支持直接生成代碼，僅提供檢查功能。
> - 需要在生成代碼後手動運行檢查，無法自動化整個流程。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供更全面的代理技能，但不專注於質量檢查，適合需要多功能的開發者。 |
| [ConardLi/garden-skills](https://github.com/ConardLi/garden-skills) | 專注於特定領域的技能，但缺乏針對 AI 生成代碼的專門檢查功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供代碼檢查和質量保證，但不專注於 AI 生成代碼，適合一般代碼檢查。 | 如果你的專案不涉及 AI 生成代碼，且需要全面的代碼檢查功能。 | medium，因為需要重新配置檢查規則和環境。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於 Codex 生成的代碼檢查，但功能較為單一。 | 如果你的專案主要使用 Codex 生成代碼，且需要針對性檢查。 | low，因為可以直接替換現有的檢查工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **guard-skills** | **boneyard** | **codex-shim** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供代碼檢查和質量保證，但不專注於 AI 生成代碼，適合一般代碼檢查。 | 專注於 Codex 生成的代碼檢查，但功能較為單一。 |
> | 遷移成本 | - | medium，因為需要重新配置檢查規則和環境。 | low，因為可以直接替換現有的檢查工具。 |
> | 適用場景 | 主要場景 | 如果你的專案不涉及 AI 生成代碼，且需要全面的代碼檢查功能 | 如果你的專案主要使用 Codex 生成代碼，且需要針對性檢查 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在使用特定技能時，可能會遇到不兼容的代理版本問題。
  - 解法：確保使用最新版本的代理。
- [MEDIUM] 某些檢查可能會因為 AI 生成代碼的特性而無法捕捉所有問題。
  - 解法：結合手動代碼審查以補充自動檢查。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創團隊使用 AI 生成代碼 | 非常適合 | 能有效捕捉 AI 生成代碼中的潛在問題，提升代碼質量。 |
| 大型企業的代碼審查流程 | 適合 | 能作為代碼質量的輔助工具，但需結合其他檢查工具。 |
| 不涉及 AI 生成代碼的傳統開發專案 | 不適合 | 專注於 AI 生成代碼的檢查，對傳統代碼無法提供幫助。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，能顯著提升 AI 生成代碼的質量，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，適合在 CI/CD 流程中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/amElnagdy--guard-skills");
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
> const me = dv.page("Repos/amElnagdy--guard-skills");
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
| Forks | 83 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-07 |
| 建立日期 | 2026-06-06 |
| 官方網站 | [Link](https://skills.sh/amElnagdy/guard-skills) |
| Repo 大小 | 77 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/amElnagdy/guard-skills) |
| Topics | `agent-skills` `ai` `claude` `claude-code` `code-review` `codex` `skills-sh` `woocommerce` |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者持續更新和維護。
**連結**：[文件](https://skills.sh/amElnagdy/guard-skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-06 ~ 2026-06-07）
> **活躍天數** 2 天 · **最新 commit** Initial release: five guard skills for coding agents

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/amElnagdy/guard-skills/issues/1) | update-01 | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # guard-skills
> 
> [](https://skills.sh/amElnagdy/guard-skills)
> 
> Focused **guard skills** for coding agents: second-pass quality gates that catch the systematic failure modes of AI-generated code, tests, and docs before they ship.
> 
> Best use: let your agent do the work, then invoke the relevant guard on the diff before you present, commit, or merge it. These skills can guide writing when you explicitly ask for that, but they are strongest as reactive review passes.
> 
> ## Install
> 
> Browse the package first:
> 
> ```bash
> npx skills add amElnagdy/guard-skills --list
> ```
> 
> Install the package:
> 
> ```bash
> npx skills add amElnagdy/guard-skills
> ```
> 
> Or install one guard:
> 
> ```bash
> npx skills add amElnagdy/guard-skills --skill clean-code-guard
> npx skills add amElnagdy/guard-skills --skill test-guard
> npx skills add amElnagdy/guard-skills --skill docs-guard
> npx skills add amElnagdy/guard-skills --skill wp-guard
> npx skills add amElnagdy/guard-skills --skill woo-guard
> ```
> 
> Install for a specific agent:
> 
> ```bash
> npx skills add amElnagdy/guard-skills --skill clean-code-guard --agent codex
> npx skills add amElnagdy/guard-skills --skill test-guard --agent claude-code
> npx skills add amElnagdy/guard-skills --skill '*' --agent cursor
> ```
> 
> Install globally:
> 
> ```bash
> npx skills add amElnagdy/guard-skills --global
> ```
> 
> Works with Claude Code, Codex, Cursor, OpenCode, and other supported agents via the [Skills CLI](https://github.com/vercel-labs/skills).
> 
> ## How to use them
> 
> Run a guard after your agent produces work:
> 
> ```text
> Use $clean-code-guard on the diff you just produced.
> Use $test-guard on the tests you just wrote.
> Use $docs-guard on this README update before we ship it.
> Use $wp-guard on this WordPress plugin change.
> Use $woo-guard on this WooCommerce checkout change.
> ```
> 
> Use a guard up front only when you want that constraint active while writing:
> 
> ```text
> Use $wp-guard while implementing this REST endpoint, then self-check before delivery.
> ```
> 
> ## Which guard to run
> 
> | Guard | Use after the agent changed | Catches | Pair with |
> | --- | --- | --- | --- |
> | `clean-code-guard` | Production code in any language | LLM code smells, over-abstraction, broad error swallowing, bad names, SOLID/DRY/KISS/YAGNI violations | Platform-specific guards |
> | `test-guard` | Test code | Mock abuse, duplicate tests, implementation-detail assertions, tests that catch nothing | `clean-code-guard` when test helpers contain real logic |
> | `docs-guard` | READMEs, docstrings, API docs, changelogs, tutorials | Hallucinated symbols, broken samples, docs-vs-code drift, unverifiable claims | Any guard whose behavior is documented |
> | `wp-guard` | WordPress plugin, theme, block, REST, AJAX, shortcode, query, or WP-CLI code | Escaping, sanitization, nonces, capabilities, prepared queries, i18n, query/caching mistakes | `clean-code-guard`; `woo-guard` when Woo APIs appear |
> | `woo-guard` | WooCommerce extension, checkout, order, product, gateway, shipping, or HPOS code | Direct order meta, HPOS breakage, missing compatibility declarations, checkout bypasses, money errors | `wp-guard` for the WordPress layer |
> 
> ## The skills
> 
> ### clean-code-guard
> 
> Applies Clean Code, SOLID, DRY/KISS/YAGNI to generated or changed code in any language, plus an AI-specific layer most rule packs miss: catch-all error swallowing, hardcoded "success" returns, hallucinated APIs, premature abstraction, comment pollution, and copy-from-similar bugs.
> 
> Why the AI layer matters: the skill references published research on duplication growth, package hallucination, and agents declaring success despite failed tests.
> 
> **You'll feel it when:** your agent refactors without silently changing behavior, asks before changing a contract, justifies what it deliberately left out, and stops wrapping everything in `try/catch -> return ok`.
> 
> ### test-guard
> 
> A quality gate for generated or changed test code in any language: pytest, PHPUnit/Pest, Jest/Vitest, Go tests, WordPress/WooCommerce tests, and more. Nine universal rules catch AI test bloat: mock only at system boundaries, never mock your own state objects, parametrize instead of copy-pasting, delete tests that catch nothing, and treat production regression tests as sacred.
> 
> Framework specifics live in progressive-disclosure references the agent loads only when relevant, including a dedicated reference for LLM applications.
> 
> **You'll feel it when:** a generated test file with `MagicMock()` state, duplicated test bodies, and log-message assertions comes back as "do not merge" with rule-by-rule fixes.
> 
> ### docs-guard
> 
> A documentation accuracy gate for READMEs, API references, docstrings, PHPDoc/JSDoc, changelogs, and tutorials. Its core move: treat documentation as a list of claims and verify every one against the codebase.
> 
> **You'll feel it when:** a generated README stops referencing functions that do not exist, `@param` tags match the real signature, samples run on a clean machine, and "blazingly fast" leaves the building.
> 
> ### wp-guard
> 
> A WordPress shipping guard for generated or changed plugins, themes, blocks, REST endpoints, AJAX handlers, shortcodes, WP-CLI commands, and queries. It enforces the layer generic clean-code guidance misses: escaping and sanitization, nonce plus capability checks, prepared database queries, core APIs before custom plumbing, translation-ready strings, and query/caching discipline.
> 
> **You'll feel it when:** a generated plugin stops echoing raw request data, a writing REST route gets a real permission callback, every string ships translation-ready, and a million-row site does not get handed `posts_per_page => -1`.
> 
> ### woo-guard
> 
> A WooCommerce shipping guard for generated or changed extensions, payment and shipping integrations, checkout customizations, and order/product logic. It sits on top of `wp-guard` and enforces what is WooCommerce-specific: HPOS-safe order access, CRUD over direct meta, truthful feature-compatibility declarations, server-side checkout validation, money-handling discipline, and hooks over template overrides.
> 
> **You'll feel it when:** order code survives HPOS, stock updates stop racing, checkout rules hold without JavaScript, and `'$' . $amount` never reaches a store that sells in dirhams.
> 
> ## How this differs
> 
> This is not a full process framework and not a broad platform catalog. Repos like [WordPress/agent-skills](https://github.com/WordPress/agent-skills) teach agents how to build across the WordPress ecosystem. `guard-skills` is narrower: it gives agents review gates to run after they have produced work, so common AI failure modes get caught before the work reaches your repo.
> 
> ## Repository shape
> 
> Each skill is a folder with a `SKILL.md` entrypoint, lightweight agent metadata, and progressive-disclosure references:
> 
> ```text
> skills/
> ├── clean-code-guard/
> │   ├── SKILL.md
> │   ├── agents/openai.yaml
> │   └── references/
> ├── docs-guard/
> │   ├── SKILL.md
> │   ├── agents/openai.yaml
> │   └── references/
> ├── test-guard/
> │   ├── SKILL.md
> │   ├── agents/openai.yaml
> │   └── references/
> ├── woo-guard/
> │   ├── SKILL.md
> │   ├── agents/openai.yaml
> │   └── references/
> └── wp-guard/
>     ├── SKILL.md
>     ├── agents/openai.yaml
>     └── references/
> ```
> 
> The `SKILL.md` stays small so it loads cheaply; deeper guidance loads only when the task needs it.
> 
> ## Trust and validation
> 
> This package is intentionally inspectable:
> 
> - Skill content is Markdown plus lightweight `agents/openai.yaml` metadata.
> - There are no executable scripts, network calls, MCP server dependencies, or credentials.
> - External source URLs live in each skill's `references/sources.md`.
> 
> Maintainer checks before publishing:
> 
> ```bash
> npx skills add . --list --full-depth
> ```
> 
> With SkillSpector installed:
> 
> ```bash
> for skill in skills/*; do
>   skillspector scan "$skill" --no-llm
> done
> ```
> 
> When authoring with a local skill-creator validator, each skill is also checked with `quick_validate.py` before release.
> 
> ## License
> 
> MIT — see [LICENSE](LICENSE).

## 延伸閱讀

相關概念：[[自動化測試]] · [[程式碼生成]] · [[CI/CD]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[FoundZiGu--GuJumpgate|FoundZiGu/GuJumpgate]] · [[Gloridust--WechatOnCloud|Gloridust/WechatOnCloud]]

[GitHub](https://github.com/amElnagdy/guard-skills) · [官方網站](https://skills.sh/amElnagdy/guard-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：代碼檢查）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "代碼檢查" AND file.name != "amElnagdy--guard-skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "amElnagdy--guard-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "amElnagdy--guard-skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W24" AND file.name != "amElnagdy--guard-skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","程式碼生成","CI/CD"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "amElnagdy--guard-skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/amElnagdy--guard-skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "amElnagdy--guard-skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "amElnagdy" AND file.name != "amElnagdy--guard-skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/amElnagdy--guard-skills");
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
> const me = dv.page("Repos/amElnagdy--guard-skills");
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
> const me = dv.page("Repos/amElnagdy--guard-skills");
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
> const me = dv.page("Repos/amElnagdy--guard-skills");
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
> const me = dv.page("Repos/amElnagdy--guard-skills");
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

> **2026-06-09** — 首次收錄
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

- [[2026-06-13|2026-06-13]] — 再次上榜，601 stars
- [[2026-06-12|2026-06-12]] — 再次上榜，571 stars
- [[2026-06-11|2026-06-11]] — 再次上榜，553 stars
- [[2026-06-10|2026-06-10]] — 再次上榜，517 stars
- [[2026-06-09|2026-06-09]] — 首次收錄，470 stars
