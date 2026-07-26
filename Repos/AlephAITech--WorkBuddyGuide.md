---
repo: AlephAITech/WorkBuddyGuide
url: https://github.com/AlephAITech/WorkBuddyGuide
owner: AlephAITech
owner_type: Organization
language: Python
license: MIT
description: "A practical, open-source guide to mastering WorkBuddy through real-world workflows.开源的 WorkBuddy 实战蓝皮书：教程、真实工作流、Skills、MCP、自动化与多智能体实践。"
homepage: "https://workbuddy.homes/"
stars: 1284
stars_per_day: 80
forks: 185
open_issues: 7
created: 2026-07-10
pushed_at: 2026-07-26
first_seen: 2026-07-15
week: "2026-W29"
month: "2026-07"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-15
use_case: "提供實用的開源指南，幫助用戶透過真實工作流程掌握 WorkBuddy。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-24"
contributor_count: 5
engagement: "medium"
issue_close_rate: 13
repo_size_kb: 128635
readme_length: 3169
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-15"
star_history: "2026-07-15:720,2026-07-15:720,2026-07-16:837,2026-07-16:839,2026-07-17:1010,2026-07-17:1010,2026-07-18:1055,2026-07-19:1086,2026-07-20:1124,2026-07-21:1151,2026-07-22:1196,2026-07-23:1222,2026-07-24:1247,2026-07-25:1264,2026-07-26:1284"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - org
  - easy_install
  - "topic/codex"
  - "topic/guide"
  - "topic/llm"
  - "topic/workbuddy"
aliases:
  - "WorkBuddyGuide"
  - "AlephAITech/WorkBuddyGuide"
  - "提供實用的開源指南，幫助用戶透過真實工作流程掌握 WorkBuddy。"
---

# WorkBuddyGuide

**1.3k** stars · **80** stars/天 · 建立 16 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

`codex` `guide` `llm` `workbuddy`

> [!summary] 一句話摘要
> 提供實用的開源指南，幫助用戶透過真實工作流程掌握 WorkBuddy。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (80 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望在團隊中實現 AI 自動化但缺乏實用指導的開發者和專業人士。
> **一句話重點** 這本指南不僅是學習工具，更是社群共創的實踐平台。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "AlephAITech--WorkBuddyGuide" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習、3 小時整合，得到實用的自動化指導，值得投入。

> [!abstract] 核心創新
> 這本指南以真實工作流程為主線，提供了實用的案例和指導，讓用戶能夠快速掌握 WorkBuddy。

## 專案簡介

WorkBuddyGuide 是一個針對 WorkBuddy 的實用開源指南，旨在幫助用戶從安裝到實際應用，通過真實工作流程掌握這個工具。用戶可以從第一項任務開始，逐步學習如何設置 AI 團隊，涵蓋移動辦公、知識管理等多個場景。這本指南的設計理念是基於實際任務，讓用戶能夠在完成具體任務的同時，學會如何構建可重用的工作系統。它提供了詳細的使用手冊、案例分析和進階技巧，並鼓勵用戶提交自己的使用案例以豐富內容。技術上，這個專案使用了 Node.js 進行本地開發，並建議使用 Node.js 22 版本。

這樣的選擇使得開發環境的搭建相對簡單，並且能夠快速構建和預覽文檔。與其他類似工具相比，WorkBuddyGuide 更加注重實踐性，提供的案例和指導能夠幫助用戶迅速上手。相對於傳統的文檔，這種以案例為主的學習方式能夠更有效地解決用戶的實際問題。使用者在遇到具體工作場景時，可以通過提交問卷來獲得針對性的幫助，這種社群互動的方式也增強了用戶的參與感。整體而言，這是一個適合希望在團隊中實現 AI 自動化的開發者和專業人士的指南，未來可能會持續擴展更多的案例和功能。

**技術棧**：`Node.js 22`

## 重點功能

- 實用手冊 — 提供詳細的安裝、使用和配置指南，幫助用戶快速上手。
- 案例分析 — 包含多個真實工作場景的案例，幫助用戶理解如何應用 WorkBuddy。
- 社群互動 — 用戶可以提交自己的使用案例，促進社群的共同創作。
- 進階技巧 — 涵蓋多智能體系統設計和自動化可靠性等進階主題。
- 本地開發支持 — 提供 Node.js 環境的本地構建和預覽指令，方便開發者進行二次開發。

## 快速開始

1. 安裝 Node.js 環境
```bash
npm install
```
2. 啟動開發伺服器
```bash
npm run dev
```
3. 構建本地文檔
```bash
npm run docs:build
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 16 天內累積 1284 stars（80/天），forks 185（14.4%），顯示出相對活躍的社群參與。主要貢獻者包括多位活躍的開源開發者，這些貢獻者在 AI 和自動化領域有著豐富的經驗。這個專案解決了用戶在使用 WorkBuddy 時缺乏實用指導的痛點，提供了結構化的學習資源和社群支持。近期的活動和提交也顯示出專案的持續發展和社群的活躍度。這種開源模式使得用戶能夠參與到內容的創建中，進一步促進了專案的成長。

## 適合誰使用

**目標受眾**：希望在團隊中實現 AI 自動化但缺乏實用指導的開發者和專業人士。

> [!example] 使用場景
> - 產品經理用它來設計和優化團隊的工作流程，因為能夠快速找到適合的案例和指導，提升工作效率。
> - 開發者用它來學習如何在 WorkBuddy 中實現自動化任務，因為提供了詳細的指導和實際範例，減少了學習曲線。
> - 團隊領導用它來建立多智能體系統，因為能夠參考其他成功案例，快速部署並驗證系統的有效性。

## 架構分析

WorkBuddyGuide 採用 VitePress 作為文檔生成工具，這使得文檔的構建和部署變得高效。用戶可以通過簡單的 npm 指令來安裝和啟動開發伺服器，這樣的設計使得新手能夠快速上手。資料流方面，所有的文檔和案例都存放在 docs 目錄下，並通過 VitePress 的配置進行管理。

這種結構化的方式使得內容的維護和更新變得方便。選擇 VitePress 而非其他框架的好處在於其快速的構建時間和良好的開發體驗，但可能在功能擴展性上有所限制。整體架構的設計考慮到了易用性和可維護性，適合快速迭代和更新。

## 技術深入分析

WorkBuddyGuide 的核心技術機制是基於 VitePress 的文檔生成，這使得內容的構建和維護變得高效。這個專案能夠處理多種文檔格式，並支持即時預覽，這對於快速迭代非常重要。選擇 Node.js 作為開發環境的原因在於其廣泛的生態系統和良好的性能，這讓開發者能夠快速構建和部署文檔。設計上，這個專案強調了社群互動的重要性，用戶可以提交自己的案例，這不僅豐富了內容，也促進了社群的活躍。技術上，這個專案的依賴樹相對簡單，主要依賴於 Node.js 和 VitePress，這使得整體維護成本較低。在擴展性方面，未來可能需要考慮如何支持更多的文檔格式和功能，以滿足不斷增長的用戶需求。整合到現有的開發流程中，這個工具能夠輕鬆融入 CI/CD pipeline，並與主流的 IDE 兼容，這降低了學習成本和整合難度。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且結構合理，提供了詳細的安裝和使用指導。安裝過程相對順暢，但需要確保 Node.js 環境符合要求。文件中包含了良好的 getting started guide，讓新手能夠快速上手。文件目前僅提供中文和英文，可能對非這兩種語言的使用者造成障礙。

## 優缺點分析

> [!success] 優點
> - 提供實用的案例和指導，幫助用戶快速上手。
> - 社群互動強，鼓勵用戶參與內容創建。
> - 結構化的文檔設計，易於查找和使用。

> [!danger] 缺點
> - 案例數量目前有限，可能無法涵蓋所有需求。
> - 依賴於用戶的積極參與，內容更新速度可能不一。
> - 需要 Node.js 環境，對某些用戶來說可能有門檻。

> [!warning] 注意事項
> - 僅支援 Node.js 20～24，需確保環境符合要求。
> - 目前的案例數量有限，可能無法涵蓋所有用例。
> - 社群互動依賴於用戶的積極參與，若無人提交案例，內容更新會受限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於智能體的創建與管理，而 WorkBuddyGuide 更加注重實際工作流程的應用。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的自動化工具，但缺乏針對 WorkBuddy 的專門指南。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於智能體的創建與管理，提供更細緻的功能，但缺乏針對真實工作流程的案例指導。 | 如果你的需求是建立和管理多個智能體，並且需要更細緻的功能配置。 | medium，因為需要重新學習其特定的操作流程和功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的自動化工具，但缺乏針對 WorkBuddy 的專門指南，使用上可能需要額外的學習。 | 如果你需要一個多功能的自動化工具，而不僅僅是針對 WorkBuddy 的應用。 | high，因為需要重新適應其工具鏈和操作方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **WorkBuddyGuide** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於智能體的創建與管理，提供更細緻的功能，但缺乏針對真實工作流程的案例指導。 | 提供更廣泛的自動化工具，但缺乏針對 WorkBuddy 的專門指南，使用上可能需要額外的學習。 |
> | 遷移成本 | - | medium，因為需要重新學習其特定的操作流程和功能。 | high，因為需要重新適應其工具鏈和操作方式。 |
> | 適用場景 | 主要場景 | 如果你的需求是建立和管理多個智能體，並且需要更細緻的功能配置 | 如果你需要一個多功能的自動化工具，而不僅僅是針對 WorkB |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型團隊的實驗性專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 某些案例可能缺乏詳細的步驟，導致用戶無法完全復現
  - 解法：查看社群提交的案例以獲取更多細節
- **[HIGH]** 在特定環境下安裝 Node.js 可能會遇到問題
  - 解法：確保使用推薦的 Node.js 版本，或查看官方文檔解決安裝問題
- [low] 社群互動依賴於用戶的參與，若無人提交案例，內容更新會受限
  - 解法：主動參與社群，提交自己的案例以促進內容豐富

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 提供實用的案例和指導，能夠快速上手並實現自動化。 |
| 大型企業的複雜工作流 | 普通 | 雖然有進階內容，但案例數量可能不足以涵蓋所有需求。 |
| 希望建立 AI 團隊的中小型企業 | 非常適合 | 提供了從安裝到實踐的全過程指導，適合快速部署。 |
| 個人開發者的學習項目 | 非常適合 | 結構化的文檔和案例能夠幫助新手快速上手。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到實用的自動化指導，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：本專案不需要高權限，且不存取敏感資料，依賴鏈的信任程度較高，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
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
> const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
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
| Forks | 185 |
| Open Issues | 7 |
| Issue 解決率 | 13% (1 closed) |
| 最後推送 | 2026-07-26 |
| 建立日期 | 2026-07-10 |
| 官方網站 | [Link](https://workbuddy.homes/) |
| Repo 大小 | 125.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/AlephAITech/WorkBuddyGuide) |
| Topics | `codex` `guide` `llm` `workbuddy` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 98
>     "TypeScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@liucongg](https://github.com/liucongg) | 30 |
> | [@freestylefly](https://github.com/freestylefly) | 5 |
> | [@kangarookingluohm](https://github.com/kangarookingluohm) | 4 |
> | [@KevinYoung-Kw](https://github.com/KevinYoung-Kw) | 3 |
> | [@stephenlzc](https://github.com/stephenlzc) | 2 |

## 社群與生態

**社群活躍度**：社群活躍，鼓勵用戶提交案例和參與共創。
**連結**：[文件](https://workbuddy.homes/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-15 ~ 2026-07-26）
> **活躍天數** 4 天 · **最新 commit** Merge pull request #17 from stephenlzc/case/annual-report-digital-transformation

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#15](https://github.com/AlephAITech/WorkBuddyGuide/issues/15) | 美国反腐败法律都有哪些 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> WorkBuddy 实战蓝皮书
> 
> 从第一项任务，到一支 AI 团队
> 
>   简体中文 · English ·
>   在线阅读 ·
>   社区案例集 ·
>   帮你解决 ·
>   阅读指南 ·
>   参与共创
> 
> > 这不是官方功能说明书的改写，而是一本以真实任务为主线的实战读本。先完成安装和第一项工作，再进入移动办公、知识管理、专业诊断、内容自动化和多 Agent 团队，最后把一次成功变成团队可复用的工作系统。
> 
> ## 在线阅读
> 
> 推荐访问 **[workbuddy.homes](https://workbuddy.homes/)** 阅读。网站提供完整侧边栏、全文搜索、章节目录、深色模式、流程图和移动端适配。
> 
> GitHub 适合了解项目和参与贡献；真正阅读蓝皮书时，网站体验更完整。
> 
> ## 你会在这里看到什么
> 
> | 部分 | 内容 |
> | --- | --- |
> | 第一篇 · 使用手册 | 下载、安装、界面、第一个任务、Skill、连接器、API 和自动化 |
> | 第二篇 · 案例篇 | 办公、文件、远程、资讯、知识、会议、投资、视频、自媒体和 GEO |
> | 第三篇 · 进阶篇 | 打造 Skill、多 Agent 系统设计、自动化可靠性 |
> | 第四篇 · 岗位与行业 | 不同岗位的使用路线和行业工作流 |
> | 附录 | 常用指令模板与场景速查表 |
> 
> ## 推荐阅读方式
> 
> - **第一次使用**：从[第 1 章](./docs/bluebook/第一篇%20使用手册：先把%20WorkBuddy%20用起来/第%201%20章%20初识%20WorkBuddy/index.md)开始，按顺序完成第一篇。
> - **已经有具体任务**：直接进入第二篇对应案例，跑通后再阅读第三篇。
> - **准备团队落地**：重点阅读第三、四篇，并记录权限边界、验收标准和失败回退。
> 
> 更完整的路线见[如何阅读这本蓝皮书](./docs/reading-guide.md)。
> 
> ## 帮你解决
> 
> 如果你有真实的工作场景，却不知道怎样用 WorkBuddy 完成，可以前往 **[帮你解决](https://workbuddy.homes/help/)** 提交场景问卷。
> 
> 请在问卷中说明你遇到的问题、目前的处理方式、会用到的资料、期望结果和安全边界。我们会阅读并评估每一份需求；如果需要补充信息，会通过你主动留下的联系方式与你沟通。
> 
> 具有代表性和复用价值的问题，我们会尝试制作成完整的开源 Case，写清所用 Skill、安装与使用方法、任务描述、操作过程和最终效果，并发布到[社区案例集](https://workbuddy.homes/cases/)，帮助更多遇到类似问题的人。
> 
> ## 本地阅读与开发
> 
> 需要 Node.js 20～24，推荐 Node.js 22。
> 
> ```bash
> npm install
> npm run dev
> ```
> 
> 本地构建：
> 
> ```bash
> npm run docs:build
> npm run docs:preview
> ```
> 
> ## 参与共创
> 
> 我们优先收集真实、可复现的 WorkBuddy 使用案例。提交 Case 前，请先搜索[社区案例集](https://workbuddy.homes/cases/)和[蓝皮书目录](https://workbuddy.homes/bluebook/)，确认场景或任务没有重复。若目标相同但使用了不同的 Skill、方法或交付形式，请在 PR 中说明差异。
> 
> 每个案例至少需要写清：
> 
> - **场景与问题**：谁在什么任务中遇到了什么困难。
> - **使用的 Skill**：Skill 的作用、来源、安装方式和必要配置。
> - **任务描述**：在 WorkBuddy 中输入的提示词、步骤或自动化设置。
> - **执行过程**：关键操作、权限要求、输入资料和安全边界。
> - **实际效果**：使用截图或其他结果证明展示最终输出。
> - **验收标准**：怎样判断任务已经正确完成。
> 
> 投稿时，在 `docs/cases/submissions/` 下为案例新建独立目录，使用 [Case 正文模板](./.github/CASE_TEMPLATE.md)编写内容，并通过 [Case PR 模板](./.github/PULL_REQUEST_TEMPLATE/case.md)提交。审核合并后，案例会自动出现在网站左侧目录；具有代表性的经典案例经过进一步复现和编辑后，可能进入蓝皮书正式章节。
> 
> 完整流程请阅读 [Case 投稿指南](https://workbuddy.homes/community/case-contributing)和[贡献指南](./CONTRIBUTING.md)。准备或提交 PR 后，也可以按网站提示加入 WorkBuddy 共创群，交流选题并获得内容完善建议。
> 
> ## 目录结构
> 
> ```text
> WorkBuddyGuide
> ├─ .github/
> │  ├─ CASE_TEMPLATE.md             # Case 正文模板
> │  └─ PULL_REQUEST_TEMPLATE/       # Pull Request 模板
> ├─ docs/
> │  ├─ .vitepress/                  # 网站配置、主题、导航与 SEO
> │  ├─ bluebook/                    # 蓝皮书正式章节
> │  ├─ cases/
> │  │  └─ submissions/              # 社区提交的独立 Case
> │  ├─ community/                   # Case 投稿与社区共创指南
> │  ├─ help/                        # “帮你解决”场景问卷页面
> │  ├─ public/                      # 网站图片、二维码等静态资源
> │  ├─ index.md                     # 网站首页
> │  └─ reading-guide.md             # 阅读指南
> ├─ scripts/                        # 内容同步与辅助工具
> ├─ CONTRIBUTING.md                 # 完整贡献规范
> ├─ README.md                       # 中文项目说明
> └─ README_en.md                    # English README
> ```
> 
> ## 部署
> 
> 本站使用 **VitePress + Cloudflare Pages + GitHub**。Cloudflare Pages 连接本仓库的 `main` 分支后，每次推送都会自动构建部署。配置见 [DEPLOYMENT.md](./DEPLOYMENT.md)。
> 
> ## 作者们
> 
> 感谢以下作者共同参与《WorkBuddy 蓝皮书》的创作与维护。点击名片可查看原图并扫描二维码。
> 
>   
>   
> 
>   
>   
> 
>   
> 
> ## 声明
> 
> 本项目是社区维护的 WorkBuddy 实战知识库。涉及产品功能、界面、价格、可用范围和安全策略等时效性信息时，请以 WorkBuddy 官方渠道为准。
> 
> ## 开源协议
> 
> 本项目采用 [MIT License](./LICENSE) 开源。你可以自由使用、复制、修改和分发本项目，但需要保留原始版权声明和许可证文本。

## 延伸閱讀

相關概念：[[自動化]] · [[多模態]] · [[CLI/TUI]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[Gloridust--WechatOnCloud|Gloridust/WechatOnCloud]]

[GitHub](https://github.com/AlephAITech/WorkBuddyGuide) · [官方網站](https://workbuddy.homes/)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "AlephAITech--WorkBuddyGuide"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "AlephAITech--WorkBuddyGuide"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "AlephAITech--WorkBuddyGuide" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "AlephAITech--WorkBuddyGuide"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","多模態","CLI/TUI"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "AlephAITech--WorkBuddyGuide" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "AlephAITech--WorkBuddyGuide" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "AlephAITech" AND file.name != "AlephAITech--WorkBuddyGuide"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
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
> const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
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
> const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
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
> const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
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
> const me = dv.page("Repos/AlephAITech--WorkBuddyGuide");
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

> **2026-07-15** — 首次收錄
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

- [[2026-07-17|2026-07-17]] — 再次上榜，1.0k stars
- [[2026-07-16|2026-07-16]] — 再次上榜，837 stars
- [[2026-07-15|2026-07-15]] — 首次收錄，720 stars
