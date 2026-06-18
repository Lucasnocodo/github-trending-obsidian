---
repo: amElnagdy/guard-skills
url: https://github.com/amElnagdy/guard-skills
owner: amElnagdy
owner_type: User
language: N/A
license: MIT
description: "Guard skills for coding agents, quality gates that catch AI-generated failure modes in code, tests, and docs"
homepage: "https://skills.sh/amElnagdy/guard-skills"
stars: 817
stars_per_day: 74
forks: 96
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
star_history: "2026-06-09:470,2026-06-09:470,2026-06-10:517,2026-06-10:517,2026-06-11:553,2026-06-11:553,2026-06-12:571,2026-06-12:571,2026-06-13:601,2026-06-13:601,2026-06-14:679,2026-06-15:730,2026-06-16:763,2026-06-17:791,2026-06-18:817"
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

**817** stars · **74** stars/天 · 建立 11 天前 · N/A · MIT

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
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (74 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 10 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望在使用 AI 生成代碼時加強代碼質量控制的開發團隊。
> **一句話重點** guard-skills 的核心在於提供針對 AI 生成代碼的質量檢查，這在當前的開發環境中是非常重要的。

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
> **結論** 花 2 小時學習，1 小時整合，得到提升代碼質量的效果，值得嘗試。

> [!abstract] 核心創新
> 這個專案提供了一套專為 AI 生成代碼設計的質量檢查工具，能夠捕捉常見的生成代碼失敗模式。

## 專案簡介

guard-skills 是一套專為編碼代理設計的質量檢查工具，旨在捕捉 AI 生成的代碼、測試和文檔中的系統性失敗模式。使用者可以在代理生成代碼後，針對差異運行相應的 guard，例如使用 `$clean-code-guard` 來檢查生產代碼，或使用 `$test-guard` 來檢查測試代碼。這些技能不僅能在寫作時提供指導，還能在提交或合併之前進行反應式檢查，確保代碼質量。這樣的設計是因為 AI 生成的代碼常常存在潛在的問題，這些問題在傳統的代碼審查中可能被忽略。技術上，這些 guard 使用了針對不同語言和框架的具體規則，並且能夠與多種代理（如 Claude Code 和 Codex）兼容。

與其他類似工具相比，guard-skills 更專注於後期的質量檢查，而不是整個開發流程的指導。這意味著它能夠針對 AI 生成的特定問題進行深度檢查，從而提高代碼的可靠性。使用者在使用過程中可能會遇到的問題包括對特定 guard 的理解不足，或在特定情境下無法正確應用 guard。這個專案目前處於初始階段，適合希望加強 AI 生成代碼質量的開發團隊，尤其是那些在使用 AI 進行代碼生成的環境中工作。未來可能會增加更多的 guard 和功能，以應對不斷演變的 AI 生成代碼挑戰。

## 重點功能

- clean-code-guard — 檢查生產代碼中的 LLM 代碼異味，確保符合 SOLID/DRY/KISS 原則。
- test-guard — 檢查測試代碼，避免重複測試和無效測試，確保測試質量。
- docs-guard — 驗證文檔的準確性，確保文檔與代碼一致，避免錯誤的參考。
- wp-guard — 專為 WordPress 代碼設計的檢查，確保代碼符合 WordPress 的最佳實踐。
- woo-guard — 專為 WooCommerce 擴展設計的檢查，確保代碼符合 WooCommerce 的特定要求。

## 快速開始

1. 安裝 guard-skills 套件
```bash
npx skills add amElnagdy/guard-skills
```
2. 安裝特定的 guard
```bash
npx skills add amElnagdy/guard-skills --skill clean-code-guard
```
3. 運行 guard 檢查生成的代碼
```bash
Use $clean-code-guard on the diff you just produced.
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天就累積 817 stars（74/天），forks 96（11.8%），這顯示出相對較高的社群參與度。作者 amElnagdy 之前在 AI 和編碼代理領域有過相關經驗，這個專案解決了 AI 生成代碼質量不穩定的問題，這在過去的工具中並未得到充分解決。近期的推廣活動和社群討論可能也促進了這一增長。技術上，AI 生成代碼的普及使得這種質量檢查工具變得越來越重要，尤其是在開發流程中。forks/stars 比率為 11.8%，顯示出有相當比例的用戶在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：希望在使用 AI 生成代碼時加強代碼質量控制的開發團隊。

> [!example] 使用場景
> - 後端工程師用它來檢查 AI 生成的 REST API 代碼，因為這樣可以確保代碼符合清潔代碼原則，避免潛在的錯誤。
> - QA 測試人員用它來驗證 AI 生成的測試代碼，因為這樣能夠快速發現測試中的重複和無效情況，提升測試質量。
> - 文檔編輯用它來檢查 README 更新，因為這樣可以確保文檔與代碼一致，避免出現過時或錯誤的說明。

## 架構分析

guard-skills 的架構由多個獨立的 guard 組成，每個 guard 專注於特定的代碼檢查任務。這樣的設計使得每個 guard 可以針對特定的問題進行深度檢查，而不會影響其他功能。資料流上，使用者在代理生成代碼後，針對差異運行相應的 guard，這樣可以及時捕捉問題。選擇這種架構的代價是需要使用者對每個 guard 的功能有一定了解，否則可能無法充分發揮其效用。擴展性方面，未來可以根據需求增加更多的 guard，但目前的設計仍需進一步完善以應對更複雜的檢查需求。

## 技術深入分析

guard-skills 的核心技術機制是針對 AI 生成代碼的質量檢查，使用了多個獨立的 guard，每個 guard 專注於特定的檢查任務，如 clean-code-guard 和 test-guard。這些 guard 能夠檢查代碼中的特定問題，如 LLM 代碼異味和測試代碼的重複性。效能上，這些檢查能夠在代碼生成後即時進行，避免了在後期發現問題的成本。設計上，這些 guard 的選擇是基於對 AI 生成代碼常見問題的深入分析，並且能夠與多種代理兼容。這樣的選擇使得使用者能夠在不同的開發環境中靈活運用。技術風險方面，隨著 AI 生成代碼的普及，這些檢查工具的需求將會增加，但目前的功能仍需進一步擴展以應對更複雜的情境。整合方面，這些 guard 可以與現有的開發工具鏈無縫結合，並且能夠在 CI/CD 流程中進行自動化檢查，這對於提升代碼質量至關重要。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的具體範例。安裝過程順暢，無明顯坑點。文件中缺乏多語言支持，可能對非英語使用者造成障礙。

## 優缺點分析

> [!success] 優點
> - 針對 AI 生成代碼的質量檢查，能夠捕捉特定的失敗模式。
> - 簡單易用的安裝過程，快速上手。
> - 提供多種 guard，針對不同的代碼類型進行檢查。

> [!danger] 缺點
> - 目前功能較為初步，可能無法涵蓋所有代碼檢查需求。
> - 需要對每個 guard 的使用情境有清晰的理解。
> - 僅支援特定的編碼代理，限制了使用範圍。

> [!warning] 注意事項
> - 目前僅支援特定的編碼代理，如 Claude Code 和 Codex。
> - 需要對每個 guard 的使用情境有清晰的理解，否則可能無法正確應用。
> - 目前功能較為初步，未來可能會增加更多的 guard 和功能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成代碼的工具，而 guard-skills 更專注於後期質量檢查，適合不同的開發階段。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供代碼生成的框架，但缺乏針對生成代碼的質量檢查功能。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 主要用於與 Codex 進行交互，而 guard-skills 則提供具體的質量檢查工具。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成代碼的工具，而 guard-skills 更專注於後期質量檢查，適合不同的開發階段。 | 如果你的團隊需要一個全方位的代碼生成解決方案，而不僅僅是質量檢查。 | medium，因為需要調整開發流程以適應新的工具。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供代碼生成的框架，但缺乏針對生成代碼的質量檢查功能。 | 如果你的團隊已經在使用其他代碼生成工具，並希望保持一致性。 | low，因為可以直接使用現有的代碼生成流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **guard-skills** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成代碼的工具，而 guard-skills 更專注於後期質量檢查，適合不同的開發階段。 | 提供代碼生成的框架，但缺乏針對生成代碼的質量檢查功能。 |
> | 遷移成本 | - | medium，因為需要調整開發流程以適應新的工具。 | low，因為可以直接使用現有的代碼生成流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個全方位的代碼生成解決方案，而不僅僅是質量 | 如果你的團隊已經在使用其他代碼生成工具，並希望保持一致性。 |

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

- [MEDIUM] 對於不熟悉 AI 生成代碼的使用者，可能無法充分理解每個 guard 的功能
  - 解法：建議仔細閱讀文檔，並進行實驗以了解各 guard 的使用情境
- **[HIGH]** 在特定情境下，某些 guard 可能無法正確運作
  - 解法：在使用前進行小範圍測試，以確保 guard 的有效性

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠有效捕捉 AI 生成代碼中的潛在問題，提升代碼質量。 |
| 大型企業的核心系統開發 | 不適合 | 目前功能仍在開發中，可能無法滿足高標準的質量要求。 |
| 需要快速迭代的開發團隊 | 適合 | 能夠在生成代碼後即時檢查，提升開發效率。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到提升代碼質量的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，適合在 CI/CD 流程中使用。

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
| Forks | 96 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-07 |
| 建立日期 | 2026-06-06 |
| 官方網站 | [Link](https://skills.sh/amElnagdy/guard-skills) |
| Repo 大小 | 77 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/amElnagdy/guard-skills) |
| Topics | `agent-skills` `ai` `claude` `claude-code` `code-review` `codex` `skills-sh` `woocommerce` |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題數量較少，顯示出初期的穩定性。
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

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[FoundZiGu--GuJumpgate|FoundZiGu/GuJumpgate]] · [[Gloridust--WechatOnCloud|Gloridust/WechatOnCloud]]

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
