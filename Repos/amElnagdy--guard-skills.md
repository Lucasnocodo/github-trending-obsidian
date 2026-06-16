---
repo: amElnagdy/guard-skills
url: https://github.com/amElnagdy/guard-skills
owner: amElnagdy
owner_type: User
language: N/A
license: MIT
description: "Guard skills for coding agents, quality gates that catch AI-generated failure modes in code, tests, and docs"
homepage: "https://skills.sh/amElnagdy/guard-skills"
stars: 763
stars_per_day: 85
forks: 89
open_issues: 1
created: 2026-06-06
pushed_at: 2026-06-07
first_seen: 2026-06-09
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "代碼質量檢查"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-09
use_case: "為編碼代理提供質量門檻，捕捉 AI 生成的代碼、測試和文檔中的失敗模式。"
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
star_history: "2026-06-09:470,2026-06-09:470,2026-06-10:517,2026-06-10:517,2026-06-11:553,2026-06-11:553,2026-06-12:571,2026-06-12:571,2026-06-13:601,2026-06-13:601,2026-06-14:679,2026-06-15:730,2026-06-16:763"
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
  - "為編碼代理提供質量門檻，捕捉 AI 生成的代碼、測試和文檔中的失敗模式。"
---

# guard-skills

**763** stars · **85** stars/天 · 建立 9 天前 · N/A · MIT

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
> 為編碼代理提供質量門檻，捕捉 AI 生成的代碼、測試和文檔中的失敗模式。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (85 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 8 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在 AI 生成代碼中確保高質量的開發團隊。
> **一句話重點** 這個專案提供了一種專門針對 AI 生成代碼的質量檢查工具，能有效捕捉常見錯誤。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/amElnagdy--guard-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "代碼質量檢查" && p.file.name !== "amElnagdy--guard-skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 代碼質量檢查 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到高質量代碼檢查，值得一試。

> [!abstract] 核心創新
> 提供針對 AI 生成代碼的專門質量檢查技能。

## 專案簡介

這個專案提供了一組專注於編碼代理的 guard skills，作為質量檢查的第二道防線，旨在捕捉 AI 生成代碼、測試和文檔中的系統性失敗模式。使用者可以在代理生成工作後，針對差異運行相應的 guard，例如使用 `$clean-code-guard` 檢查生產代碼，或 `$test-guard` 檢查測試代碼。這樣的設計讓使用者能夠在提交或合併之前，確保代碼質量，避免常見的 AI 生成錯誤。技術上，這些技能依賴於 Markdown 文件和輕量級的代理元數據，並且不需要執行任何腳本或網路呼叫，這樣的設計使得檢查過程輕量且快速。與其他類似工具相比，如 WordPress/agent-skills，guard-skills 更加專注於提供具體的質量檢查，而不是全面的流程框架。

這使得它在捕捉 AI 生成的錯誤方面更為有效。使用者在實際操作中，可能會遇到一些具體的問題，例如如何選擇合適的 guard 來檢查不同類型的代碼，這需要一定的學習成本。整體而言，這個專案在質量控制方面提供了一個強有力的工具，特別適合需要高代碼質量的團隊。未來可能會進一步擴展功能以支援更多的編程語言和框架。

## 重點功能

- clean-code-guard — 檢查生產代碼中的 LLM 代碼氣味和設計原則違反。
- test-guard — 驗證測試代碼的有效性，避免重複測試和無效測試。
- docs-guard — 確保文檔的準確性，檢查文檔與代碼的一致性。
- wp-guard — 專為 WordPress 代碼設計的質量檢查，確保安全性和最佳實踐。
- woo-guard — 專為 WooCommerce 擴展設計的質量檢查，確保支付和訂單處理的正確性。

## 快速開始

1. 安裝 guard-skills 套件
```bash
npx skills add amElnagdy/guard-skills
```
2. 使用 clean-code-guard 檢查代碼
```bash
Use $clean-code-guard on the diff you just produced.
```
3. 使用 test-guard 檢查測試代碼
```bash
Use $test-guard on the tests you just wrote.
```

## 程式碼範例

```bash
[
  "# 前置條件（安裝 guard-skills）",
  "npx skills add amElnagdy/guard-skills",
  "# 預期輸出（檢查代碼質量）",
  "Use $clean-code-guard on the diff you just produced."
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 763 stars（85/天），forks 89（11.7%），這顯示出相對穩定的增長。作者 amElnagdy 在 AI 和編碼代理領域有一定的背景，這個專案解決了 AI 生成代碼的質量問題，這在當前 AI 工具普及的背景下變得越來越重要。雖然沒有明確的觸發事件，但隨著 AI 生成工具的普及，對於質量檢查的需求也在上升。forks/stars 比率為 11.7%，顯示出有相當一部分使用者在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要在 AI 生成代碼中確保高質量的開發團隊。

> [!example] 使用場景
> - 後端工程師用它來檢查 AI 生成的生產代碼，因為這樣可以避免常見的代碼氣味和錯誤，提升代碼質量。
> - 測試工程師用它來驗證自動生成的測試代碼，因為這能確保測試的有效性和準確性，減少測試失敗的風險。
> - 文檔編輯者用它來檢查 README 和 API 文檔的準確性，因為這樣可以確保文檔與代碼的一致性，提升使用者體驗。

## 架構分析

這個專案的架構由多個獨立的技能組成，每個技能都有自己的 Markdown 文檔和輕量級的元數據。這樣的設計使得每個技能可以獨立加載，並根據需要提供具體的指導。資料流從代理生成的代碼開始，然後通過相應的 guard 進行檢查，最終輸出檢查結果。這種設計的代價是需要使用者了解每個 guard 的具體功能和使用情境，否則可能無法充分發揮其效用。擴展性方面，未來可以添加更多的 guard 來覆蓋不同的編程語言和框架，但這需要維護者持續更新和擴展技能庫。

## 技術深入分析

這個專案的核心技術機制是提供一組針對 AI 生成代碼的質量檢查技能，這些技能使用 Markdown 文件和輕量級的元數據來實現。每個技能專注於特定的檢查領域，如 clean-code-guard 專注於代碼質量，test-guard 專注於測試有效性，docs-guard 專注於文檔準確性。這樣的設計使得使用者可以根據需要選擇合適的技能進行檢查，並且不需要加載不必要的內容。效能方面，這些技能的檢查過程相對快速，因為它們不涉及複雜的運算或網路請求。設計取捨方面，選擇使用輕量級的元數據來保持檢查過程的快速性，但這也意味著使用者需要了解每個技能的具體功能。技術風險方面，隨著 AI 生成工具的普及，這些技能的有效性可能會受到挑戰，特別是在處理複雜的代碼時。整合方面，這些技能可以與主流的編碼代理無縫整合，但對於不支持的代理，則需要額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的具體範例。安裝過程順暢，無明顯坑。文件目前僅提供英文版本，對於非英語使用者可能存在一定的學習障礙。

## 優缺點分析

> [!success] 優點
> - 專注於捕捉 AI 生成代碼中的質量問題，提供針對性的檢查。
> - 輕量級設計，無需執行腳本或網路呼叫，檢查過程快速。
> - 支持多種編碼代理，靈活性高。

> [!danger] 缺點
> - 目前僅支援特定的編碼代理，限制了使用範圍。
> - 對於非支持的編程語言，無法提供有效的檢查。
> - 需要使用者具備一定的 AI 生成代碼的背景知識。

> [!warning] 注意事項
> - 目前僅支援特定的編碼代理，如 Claude Code 和 Codex。
> - 對於非支持的編程語言，可能無法提供有效的檢查。
> - 需要使用者具備一定的 AI 生成代碼的背景知識。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供更全面的代理技能，但不專注於質量檢查，適合需要多功能的開發環境。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代碼生成，但缺乏針對質量的檢查機制，適合快速原型開發。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供更全面的代理技能，但不專注於質量檢查，適合需要多功能的開發環境。 | 如果你的團隊需要一個多功能的代理技能集，而不僅僅是質量檢查。 | medium，因為需要重新設計工作流程以適應新的技能集。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於代碼生成，但缺乏針對質量的檢查機制，適合快速原型開發。 | 如果你的團隊主要關注快速代碼生成，而不太重視質量控制。 | low，因為可以直接替換現有的代碼生成工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **guard-skills** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供更全面的代理技能，但不專注於質量檢查，適合需要多功能的開發環境。 | 專注於代碼生成，但缺乏針對質量的檢查機制，適合快速原型開發。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流程以適應新的技能集。 | low，因為可以直接替換現有的代碼生成工具。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個多功能的代理技能集，而不僅僅是質量檢查。 | 如果你的團隊主要關注快速代碼生成，而不太重視質量控制。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 使用者可能不清楚如何選擇合適的 guard 來檢查不同類型的代碼
  - 解法：參考 README 中的使用建議和表格
- **[HIGH]** 對於非支持的編程語言，可能無法提供有效的檢查
  - 解法：考慮使用其他工具或手動檢查
- [MEDIUM] 需要一定的 AI 生成代碼的背景知識，否則難以充分利用這些技能
  - 解法：參加相關的培訓或閱讀文檔以提升知識

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠有效捕捉 AI 生成代碼中的質量問題，提升代碼質量。 |
| 大型企業的核心系統開發 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |
| 需要快速原型開發的團隊 | 普通 | 雖然提供質量檢查，但可能會影響開發速度。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到高質量代碼檢查，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，依賴鏈相對簡單，適合在 CI/CD 中使用。

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
| Forks | 89 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-07 |
| 建立日期 | 2026-06-06 |
| 官方網站 | [Link](https://skills.sh/amElnagdy/guard-skills) |
| Repo 大小 | 77 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/amElnagdy/guard-skills) |
| Topics | `agent-skills` `ai` `claude` `claude-code` `code-review` `codex` `skills-sh` `woocommerce` |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題數量少。
**連結**：[文件](https://skills.sh/amElnagdy/guard-skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-06 ~ 2026-06-07）
> **活躍天數** 2 天 · **最新 commit** Initial release: five guard skills for coding agents

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/amElnagdy/guard-skills/issues/1) | update-01 | 2 | 0 |

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

相關概念：[[自動化測試]] · [[代碼生成]] · [[CI/CD]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[FoundZiGu--GuJumpgate|FoundZiGu/GuJumpgate]] · [[Gloridust--WechatOnCloud|Gloridust/WechatOnCloud]]

[GitHub](https://github.com/amElnagdy/guard-skills) · [官方網站](https://skills.sh/amElnagdy/guard-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：代碼質量檢查）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "代碼質量檢查" AND file.name != "amElnagdy--guard-skills"
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
> const concepts = ["自動化測試","代碼生成","CI/CD"];
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
