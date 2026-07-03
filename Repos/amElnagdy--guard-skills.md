---
repo: amElnagdy/guard-skills
url: https://github.com/amElnagdy/guard-skills
owner: amElnagdy
owner_type: User
language: N/A
license: MIT
description: "Guard skills for coding agents, quality gates that catch AI-generated failure modes in code, tests, and docs"
homepage: "https://skills.sh/amElnagdy/guard-skills"
stars: 949
stars_per_day: 37
forks: 110
open_issues: 5
created: 2026-06-06
pushed_at: 2026-06-20
first_seen: 2026-06-09
week: "2026-W24"
month: "2026-06"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-09
use_case: "提供針對 AI 生成代碼、測試和文檔的質量檢查技能，防止常見錯誤。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-06-20"
contributor_count: 0
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 84
readme_length: 7943
bus_factor: 0
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-09"
star_history: "2026-06-09:470,2026-06-09:470,2026-06-10:517,2026-06-10:517,2026-06-11:553,2026-06-11:553,2026-06-12:571,2026-06-12:571,2026-06-13:601,2026-06-13:601,2026-06-14:679,2026-06-15:730,2026-06-16:763,2026-06-17:791,2026-06-18:817,2026-06-19:830,2026-06-20:838,2026-06-21:852,2026-06-22:868,2026-06-23:877,2026-06-24:882,2026-06-25:887,2026-06-26:894,2026-06-27:898,2026-06-28:904,2026-06-29:918,2026-06-30:921,2026-07-01:930,2026-07-02:942,2026-07-03:949"
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
  - "提供針對 AI 生成代碼、測試和文檔的質量檢查技能，防止常見錯誤。"
---

# guard-skills

**949** stars · **37** stars/天 · 建立 26 天前 · N/A · MIT

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
> 提供針對 AI 生成代碼、測試和文檔的質量檢查技能，防止常見錯誤。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (37 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 12 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在 AI 生成代碼的專案中確保代碼質量的開發者。
> **一句話重點** guard-skills 的設計讓 AI 生成的代碼質量檢查變得更加系統化和高效。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/amElnagdy--guard-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "amElnagdy--guard-skills" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習、3 小時整合，能夠提升代碼質量，值得嘗試。

> [!abstract] 核心創新
> 這個專案專注於捕捉 AI 生成代碼中的系統性錯誤，提供針對性的質量檢查技能。

## 專案簡介

guard-skills 是一組專為編碼代理設計的質量檢查技能，旨在捕捉 AI 生成代碼、測試和文檔中的系統性錯誤。使用者可以在代理生成工作後，針對差異運行相關的 guard，例如使用 `$clean-code-guard` 檢查生產代碼，或 `$test-guard` 檢查測試代碼。這些技能不僅能指導寫作，還能在提交或合併之前進行反應式檢查，確保代碼質量。技術上，這些技能基於清晰的代碼原則（如 SOLID、DRY、KISS、YAGNI），並針對 AI 生成的代碼特有的問題進行檢查，像是過度抽象和錯誤處理。與其他工具相比，如 WordPress/agent-skills，guard-skills 更專注於質量檢查，而不是整個開發過程的指導。

這些技能的設計使得它們能夠輕鬆集成到現有的開發流程中，並且能夠在不同的代理（如 Claude Code、Codex）中運行。使用者在實際操作中會發現，這些技能能有效減少錯誤代碼的提交，並提升整體代碼質量。這個專案目前處於初期階段，社群活躍度尚可，但開放的問題數量顯示出仍有改進空間。對於小型團隊或個人開發者來說，這是一個值得嘗試的工具，特別是在使用 AI 生成代碼的情境下。

## 重點功能

- clean-code-guard — 檢查生產代碼中的 LLM 代碼異味和過度抽象，使用範例：`npx skills add amElnagdy/guard-skills --skill clean-code-guard`。
- test-guard — 檢查生成的測試代碼，捕捉重複測試和無效測試，使用範例：`npx skills add amElnagdy/guard-skills --skill test-guard`。
- docs-guard — 驗證文檔的準確性，確保文檔與代碼一致，使用範例：`npx skills add amElnagdy/guard-skills --skill docs-guard`。
- wp-guard — 專門針對 WordPress 代碼的檢查，確保安全性和最佳實踐，使用範例：`npx skills add amElnagdy/guard-skills --skill wp-guard`。
- woo-guard — 專門針對 WooCommerce 代碼的檢查，確保交易安全和功能正確，使用範例：`npx skills add amElnagdy/guard-skills --skill woo-guard`。

## 快速開始

1. 安裝 guard-skills 套件
```bash
npx skills add amElnagdy/guard-skills
```
2. 安裝特定的 guard
```bash
npx skills add amElnagdy/guard-skills --skill clean-code-guard
```
3. 在生成代碼後運行 guard
```bash
Use $clean-code-guard on the diff you just produced.
```

## 程式碼範例

```bash
# 前置條件
使用 npx skills 安裝 guard-skills。

# 真實指令
npx skills add amElnagdy/guard-skills --skill clean-code-guard

# 預期輸出
安裝 clean-code-guard 成功，準備進行代碼質量檢查。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 26 天就累積 949 stars（37/天），forks 110（11.6%），顯示出穩定的增長。作者 amElnagdy 之前在 AI 和編碼代理領域有過相關經驗，這個專案解決了 AI 生成代碼質量不穩定的問題，以往的工具往往無法針對 AI 特有的錯誤進行有效檢查。近期的推廣活動和社群討論也可能促進了這個專案的曝光。整體來看，這個工具的 forks/stars 比率為 11.6%，顯示出有相當比例的使用者對其進行了實際修改和使用。

## 適合誰使用

**目標受眾**：需要在 AI 生成代碼的專案中確保代碼質量的開發者。

> [!example] 使用場景
> - 後端工程師用它來在提交前檢查生成的代碼，因為這樣可以及早發現潛在的錯誤，避免後續的回滾和修正成本。
> - 測試工程師用它來驗證自動生成的測試代碼，因為這樣能確保測試的有效性，減少無效測試的出現。
> - 文檔編寫者用它來檢查 API 文檔的準確性，因為這樣可以確保文檔與實際代碼一致，避免用戶混淆。

## 架構分析

guard-skills 的架構設計為一組獨立的技能，每個技能都包含一個輕量級的元數據和參考資料。這種設計使得技能可以快速加載，並在需要時提供深入的指導。每個技能的內容以 Markdown 格式存儲，這樣可以輕鬆檢查和修改。

這種模組化的設計使得未來可以方便地擴展新的技能或更新現有技能，而不會影響整體系統的穩定性。由於技能之間的依賴性較低，這樣的架構也有助於降低維護成本。整體而言，這種設計使得 guard-skills 能夠靈活應對不同的開發需求，並且能夠快速適應新的技術變化。

## 技術深入分析

guard-skills 的核心技術機制是針對 AI 生成代碼的質量檢查，使用了清晰的代碼原則和針對 AI 特有的問題進行檢查。這些技能能夠在代碼生成後進行反應式檢查，確保代碼的質量和一致性。這些技能的效能特性尚未明確，但由於其設計為輕量級，應該能夠在不影響開發流程的情況下進行檢查。選擇這種模組化的設計使得未來可以方便地擴展新的技能或更新現有技能，而不會影響整體系統的穩定性。這樣的設計也降低了依賴風險，因為每個技能都是獨立的，並不依賴於其他技能的實現。技術風險方面，未來可能會面臨 AI 生成代碼質量不穩定的問題，這需要不斷更新和改進技能以應對新的挑戰。整合方面，這些技能能夠與現有的開發工具鏈（如 CI/CD 流程）進行良好的整合，並且能夠在不同的開發環境中靈活使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，並且包含了具體的範例。安裝過程相對順暢，使用者可以快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 專注於 AI 生成代碼的質量檢查，能有效捕捉常見錯誤。
> - 模組化設計，易於擴展和維護。
> - 與多種編碼代理兼容，靈活性高。

> [!danger] 缺點
> - 目前功能較為初步，尚未完全成熟。
> - 社群支持和文檔資源有限，可能影響使用體驗。
> - 僅針對特定場景，通用性不足。

> [!warning] 注意事項
> - 目前僅支援特定的編碼代理，如 Claude Code 和 Codex。
> - 對於非程式碼內容的檢查能力有限，主要集中在代碼和文檔上。
> - 尚未有完整的社群支持和文檔，可能會遇到使用上的困難。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [WordPress/agent-skills](https://github.com/WordPress/agent-skills) | 提供更廣泛的代理技能，但不專注於質量檢查，適合需要全面開發指導的場景。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成代理的能力，而非質量檢查，適合需要強化生成能力的情境。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成代理的能力，而非質量檢查，這使得它在生成代碼方面更具優勢。 | 如果你的團隊需要強化生成能力，並且不太關注質量檢查，則可以選擇這個工具。 | medium，因為需要重新調整開發流程以適應新的生成方式。 |
| [WordPress/agent-skills](https://github.com/WordPress/agent-skills) | 提供更廣泛的代理技能，適合需要全面開發指導的場景。 | 如果你的專案需要全面的開發指導和技能，而不僅僅是質量檢查，則可以選擇這個工具。 | low，因為這個工具與 WordPress 生態系統的整合度高，易於上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **guard-skills** | **agent-sprite-forge** | **agent-skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成代理的能力，而非質量檢查，這使得它在生成代碼方面更具優勢。 | 提供更廣泛的代理技能，適合需要全面開發指導的場景。 |
> | 遷移成本 | - | medium，因為需要重新調整開發流程以適應新的生成方式。 | low，因為這個工具與 WordPress 生態系統的整合度高，易於上手。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要強化生成能力，並且不太關注質量檢查，則可以選 | 如果你的專案需要全面的開發指導和技能，而不僅僅是質量檢查，則 |

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

- **[HIGH]** 在特定代理下可能無法正常運行，特別是較舊版本的代理。
  - 解法：確保使用最新版本的代理，並參考官方文檔進行配置。
- [MEDIUM] 某些 guard 在特定情境下可能無法捕捉所有錯誤。
  - 解法：結合使用多個 guard 以提高檢查的全面性。
- [MEDIUM] 安裝過程中可能會遇到依賴問題，特別是在不同的開發環境中。
  - 解法：檢查依賴版本並根據需要進行調整。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊在使用 AI 生成代碼的專案中 | 非常適合 | 這個工具專注於捕捉 AI 生成代碼中的錯誤，能有效提升代碼質量。 |
| 大型企業的核心產品開發 | 不適合 | 目前尚未成熟，可能無法滿足高標準的質量要求。 |
| 個人開發者在 side project 中使用 AI 生成代碼 | 適合 | 能夠快速檢查生成代碼的質量，減少後續維護成本。 |
| 需要全面開發指導的專案 | 普通 | 雖然提供質量檢查，但不涵蓋整個開發過程的指導。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習、3 小時整合，能夠提升代碼質量，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不存取敏感資料，適合在 CI/CD 流程中安全使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

guard-skills 可以與多種編碼代理（如 Claude Code 和 Codex）無縫整合，並且能夠在 CI/CD 流程中使用。實際整合範例包括在使用 GitHub Actions 進行自動化測試時，將 guard-skills 作為檢查步驟加入。這些技能的設計使得它們能夠快速適應不同的開發環境，並且能夠與現有的工具鏈相容。常見的整合問題包括依賴版本不一致，這需要在整合前進行充分測試以確保兼容性。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 guard-skills 出現之前，開發者通常依賴手動檢查或使用通用的代碼檢查工具，這些工具往往無法針對 AI 生成代碼的特有問題進行有效檢查。隨著 AI 技術的進步，對於代碼質量的要求也越來越高，這使得專門針對 AI 生成代碼的質量檢查工具變得必要。guard-skills 代表了這一技術趨勢，未來可能會隨著 AI 生成技術的進一步發展而持續演進。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 JavaScript
- 了解基本的 CI/CD 流程
- 有使用 AI 生成代碼的經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用 guard-skills。第二週：在小型團隊的非核心專案中導入。第三週：收集反饋並調整使用方式。第四週：在核心專案中正式使用，並撰寫最佳實踐文檔。

**成功指標**：代碼提交後的錯誤率降低 30%。

> [!warning] 退出計畫
> 如果需要退出，所有設定和數據都可以導出為標準格式，方便轉換到其他工具。

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
| Forks | 110 |
| Open Issues | 5 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-20 |
| 建立日期 | 2026-06-06 |
| 官方網站 | [Link](https://skills.sh/amElnagdy/guard-skills) |
| Repo 大小 | 84 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/amElnagdy/guard-skills) |
| Topics | `agent-skills` `ai` `claude` `claude-code` `code-review` `codex` `skills-sh` `woocommerce` |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題數量顯示出仍有改進空間。
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

相關概念：[[自動化]] · [[程式碼生成]] · [[CI/CD]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[FoundZiGu--GuJumpgate|FoundZiGu/GuJumpgate]] · [[Gloridust--WechatOnCloud|Gloridust/WechatOnCloud]]

[GitHub](https://github.com/amElnagdy/guard-skills) · [官方網站](https://skills.sh/amElnagdy/guard-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "amElnagdy--guard-skills"
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
> const concepts = ["自動化","程式碼生成","CI/CD"];
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
