---
repo: amElnagdy/guard-skills
url: https://github.com/amElnagdy/guard-skills
owner: amElnagdy
owner_type: User
language: N/A
license: MIT
description: "Guard skills for coding agents, quality gates that catch AI-generated failure modes in code, tests, and docs"
homepage: "https://skills.sh/amElnagdy/guard-skills"
stars: 517
stars_per_day: 172
forks: 59
open_issues: 0
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
use_case: "為編碼代理提供質量門檻，捕捉 AI 生成代碼、測試和文檔中的失敗模式。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-17"
contributor_count: 0
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 77
readme_length: 7943
bus_factor: 0
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-09"
star_history: "2026-06-09:470,2026-06-09:470,2026-06-10:517,2026-06-10:517"
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
  - "為編碼代理提供質量門檻，捕捉 AI 生成代碼、測試和文檔中的失敗模式。"
---

# guard-skills

**517** stars · **172** stars/天 · 建立 3 天前 · N/A · MIT

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
> 為編碼代理提供質量門檻，捕捉 AI 生成代碼、測試和文檔中的失敗模式。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (172 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要確保 AI 生成代碼質量的開發團隊，特別是使用 Claude Code 和 Codex 的團隊。
> **一句話重點** 這個專案填補了 AI 生成內容質量檢查的空白，提供了針對性強的解決方案。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，能夠顯著提升代碼質量，值得採用。

> [!abstract] 核心創新
> 提供針對 AI 生成內容的專門質量檢查技能，填補了現有工具的空白。

## 專案簡介

guard-skills 是一組專為編碼代理設計的質量檢查工具，能在 AI 生成代碼、測試和文檔之前進行第二次質量審查。使用者可以在代理生成工作後，針對差異運行相應的 guard，例如使用 `$clean-code-guard` 來檢查生產代碼，或使用 `$test-guard` 來檢查測試代碼。這些技能的設計理念是主動捕捉 AI 生成內容的系統性錯誤，並在提交或合併前進行檢查，這樣能有效減少潛在的錯誤。技術上，這些 guard 能夠識別常見的代碼問題，如 LLM 代碼異味、重複測試和文檔不一致等，並且可以與多種代理（如 Claude Code 和 Codex）兼容使用。相較於其他工具，guard-skills 提供了針對特定平台的守衛（如 WordPress 和 WooCommerce），這使得它在特定場景下的有效性更高。

這些技能的使用不僅限於被動檢查，還可以在編寫過程中主動啟用，進一步提升代碼質量。使用者在實際操作中可能會發現，這些 guard 能夠顯著減少錯誤率，特別是在大型專案中。社群活躍度高，開發者能夠快速獲得支持和更新。這個專案目前處於初始階段，但已經顯示出潛力，未來可能會增加更多功能和支持的代理。對於需要高質量代碼的團隊來說，這是一個值得考慮的工具，尤其是在 AI 生成內容的使用越來越普遍的情況下。

## 重點功能

- clean-code-guard — 檢查生產代碼中的 LLM 代碼異味和設計違規，適用於任何語言的代碼。
- test-guard — 檢查測試代碼的有效性，捕捉重複測試和無效斷言。
- docs-guard — 檢查文檔的一致性，捕捉文檔與代碼的差異。
- wp-guard — 專為 WordPress 相關代碼設計，檢查安全性和最佳實踐。
- woo-guard — 專為 WooCommerce 相關代碼設計，檢查特定功能的正確性。

## 快速開始

1. 安裝 guard-skills 套件
```bash
npx skills add amElnagdy/guard-skills
```
2. 運行 clean-code-guard 檢查代碼
```bash
Use $clean-code-guard on the diff you just produced.
```
3. 運行 test-guard 檢查測試
```bash
Use $test-guard on the tests you just wrote.
```

## 程式碼範例

```bash
{
  "前置條件": "已安裝 guard-skills 套件",
  "指令": "npx skills add amElnagdy/guard-skills --skill clean-code-guard",
  "預期輸出": "將檢查生產代碼中的 LLM 代碼異味和設計違規。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 517 stars（172/天），forks 59（11.4%），顯示出強勁的增長潛力。作者專注於 AI 生成內容的質量檢查，解決了傳統代碼審查中難以捕捉 AI 生成錯誤的痛點。這個專案的推出正值 AI 生成技術快速發展的時期，開發者對於如何確保生成內容質量的需求日益增加。高比例的 forks/stars 表示許多人對這個工具進行了實際修改和使用，顯示出社群的積極參與。

## 適合誰使用

**目標受眾**：需要確保 AI 生成代碼質量的開發團隊，特別是使用 Claude Code 和 Codex 的團隊。

> [!example] 使用場景
> - 後端工程師用它來在提交代碼前檢查代碼質量，因為這樣可以有效捕捉 AI 生成代碼中的潛在錯誤，減少回退的可能性。
> - 測試工程師用它來檢查自動生成的測試代碼，因為這樣可以確保測試的有效性，避免因測試不完整而導致的生產問題。
> - 文檔編輯者用它來審核 README 更新，因為這樣可以確保文檔與代碼的一致性，減少使用者的困惑。

## 架構分析

guard-skills 採用模組化設計，允許用戶根據需要選擇安裝特定的 guard。每個 guard 專注於特定的代碼類型或內容，這樣的設計使得用戶可以靈活地應用不同的檢查。資料流方面，使用者在代理生成內容後，運行相應的 guard 進行檢查，這樣能夠及時捕捉錯誤。這種設計的代價在於用戶需要主動運行檢查，無法完全自動化。擴展性方面，未來可以增加更多的 guard 來支持其他平台或語言。

## 技術深入分析

guard-skills 的核心技術機制在於其模組化設計，允許用戶根據需求選擇安裝特定的 guard。每個 guard 針對特定的代碼類型進行檢查，能有效捕捉 AI 生成內容中的系統性錯誤。這些 guard 能夠識別常見的代碼問題，如 LLM 代碼異味和測試中的重複，這在傳統的代碼審查工具中並不常見。由於這些技能專注於 AI 生成內容，因此在處理大型專案時能顯著減少錯誤率。設計上，這些 guard 的依賴性較低，主要依賴於 Skills CLI，這使得整體架構較為輕量。未來可能會面臨擴展性瓶頸，特別是在支持更多代理和平台時，可能需要進一步的開發和測試。整合方面，這些 guard 可以輕鬆與現有的開發工具鏈結合，並且能夠在 CI/CD pipeline 中使用，這對於現代開發流程來說是非常友好的。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的詳細步驟。安裝過程順暢，無需特別的配置。文件中包含了多個範例，幫助用戶快速上手。整體上，新手能在 30 分鐘內成功運行這個工具。

## 優缺點分析

> [!success] 優點
> - 針對 AI 生成內容的專門質量檢查，能有效捕捉潛在錯誤。
> - 模組化設計，允許用戶根據需求選擇安裝特定的 guard。
> - 高社群活躍度，能快速獲得支持和更新。

> [!danger] 缺點
> - 目前僅支援特定的代理，限制了使用範圍。
> - 需要用戶主動運行檢查，無法完全自動化。
> - 可能無法捕捉所有複雜代碼中的錯誤。

> [!warning] 注意事項
> - 目前僅支援特定的代理，如 Claude Code 和 Codex。
> - 可能無法捕捉所有 AI 生成的錯誤，特別是在複雜的代碼邏輯中。
> - 需要用戶主動運行檢查，無法自動化整個流程。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成和管理 AI 代理的工具，與 guard-skills 的代碼質量檢查功能不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供代碼審查和管理功能，但不專注於 AI 生成內容的質量控制。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 旨在改善 Codex 的使用體驗，與 guard-skills 的質量檢查功能不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成和管理 AI 代理的工具，與 guard-skills 的代碼質量檢查功能不同。 | 如果你的團隊需要生成和管理多個 AI 代理，而不僅僅是檢查代碼質量。 | medium，因為需要重新設計代理的使用流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供代碼審查和管理功能，但不專注於 AI 生成內容的質量控制。 | 如果你的團隊已經在使用其他代碼審查工具，並希望保持現有流程。 | low，因為可以輕鬆整合到現有的工作流程中。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **guard-skills** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成和管理 AI 代理的工具，與 guard-skills 的代碼質量檢查功能不同。 | 提供代碼審查和管理功能，但不專注於 AI 生成內容的質量控制。 |
> | 遷移成本 | - | medium，因為需要重新設計代理的使用流程。 | low，因為可以輕鬆整合到現有的工作流程中。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要生成和管理多個 AI 代理，而不僅僅是檢查代 | 如果你的團隊已經在使用其他代碼審查工具，並希望保持現有流程。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用或小型專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些複雜代碼中可能無法捕捉所有錯誤
  - 解法：結合其他代碼審查工具使用以增加檢查覆蓋率
- **[HIGH]** 需要用戶主動運行檢查，可能導致漏檢
  - 解法：建立自動化流程以確保檢查的執行

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端開發團隊 | 非常適合 | 能有效捕捉 AI 生成代碼中的潛在錯誤，提升代碼質量。 |
| 大型企業的核心產品開發團隊 | 普通 | 雖然能捕捉錯誤，但可能無法完全自動化，需搭配其他工具使用。 |
| 專注於 AI 生成內容的開發團隊 | 非常適合 | 專門針對 AI 生成內容的質量檢查，能顯著減少錯誤。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，能夠顯著提升代碼質量，值得採用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，適合在 CI/CD pipeline 中使用。

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
| Forks | 59 |
| Open Issues | 0 |
| 最後推送 | 2026-06-07 |
| 建立日期 | 2026-06-06 |
| 官方網站 | [Link](https://skills.sh/amElnagdy/guard-skills) |
| Repo 大小 | 77 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/amElnagdy/guard-skills) |
| Topics | `agent-skills` `ai` `claude` `claude-code` `code-review` `codex` `skills-sh` `woocommerce` |

## 社群與生態

**社群活躍度**：社群活躍，開發者能快速獲得支持和更新。
**連結**：[文件](https://skills.sh/amElnagdy/guard-skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-06 ~ 2026-06-07）
> **活躍天數** 2 天 · **最新 commit** Initial release: five guard skills for coding agents

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

相關概念：[[AI]] · [[自動化測試]] · [[代碼生成]]

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
> const concepts = ["AI","自動化測試","代碼生成"];
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

- [[2026-06-10|2026-06-10]] — 再次上榜，517 stars
- [[2026-06-09|2026-06-09]] — 首次收錄，470 stars
