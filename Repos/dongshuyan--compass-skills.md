---
repo: dongshuyan/compass-skills
url: https://github.com/dongshuyan/compass-skills
owner: dongshuyan
owner_type: User
language: Python
license: MIT
description: "司南：个性化 AI 任务总控 Skills 系统 /COMPASS: Personal Alignment Skills OS for AI Agents"
homepage: ""
stars: 429
stars_per_day: 72
forks: 35
open_issues: 0
created: 2026-06-15
pushed_at: 2026-06-21
first_seen: 2026-06-21
week: "2026-W26"
month: "2026-06"
category: "開發工具"
subcategory: "任務管理"
release_tag: "v0.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-21
use_case: "提供個性化 AI 任務管理的技能系統，幫助 AI 更有效地執行任務。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-29"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 14407
readme_length: 9883
bus_factor: 1
last_release_days: 5
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-21"
star_history: "2026-06-21:397,2026-06-21:397,2026-06-22:429"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
  - "topic/agent_memory"
  - "topic/agent_skills"
  - "topic/ai_agents"
  - "topic/ai_coding_agent"
  - "topic/claude_code"
aliases:
  - "compass-skills"
  - "dongshuyan/compass-skills"
  - "提供個性化 AI 任務管理的技能系統，幫助 AI 更有效地執行任務。"
---

# compass-skills

**397** stars · **79** stars/天 · 建立 5 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/dongshuyan--compass-skills");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v0.2.0` `easy-install`

`agent-memory` `agent-skills` `ai-agents` `ai-coding-agent` `claude-code` `claude-skills` `codex-skills` `developer-tools` `local-first` `openai-codex` `personal-ai` `prompt-engineering` `skill-md` `task-management` `workflow-automation`

> [!summary] 一句話摘要
> 提供個性化 AI 任務管理的技能系統，幫助 AI 更有效地執行任務。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (79 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在多輪對話中管理任務的 AI 開發者和產品經理。
> **一句話重點** COMPASS Skills 的設計讓 AI 能夠在多輪對話中有效管理任務，強調用戶的隱私和數據安全。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/dongshuyan--compass-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "任務管理" && p.file.name !== "dongshuyan--compass-skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 任務管理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學習，6 小時整合，得到高效的任務管理系統，值得嘗試。

> [!abstract] 核心創新
> COMPASS Skills 提供了一個本地化的 AI 任務管理系統，強調用戶隱私和數據安全。

## 專案簡介

COMPASS Skills 是一個為 AI 編碼代理提供的本地技能系統，旨在提升任務管理的效率。它包含四個主要技能：`task-clarifier` 用於在執行前澄清任務目標和範圍，確保用戶的需求被優先考慮；`task-forest` 則維護一個本地任務圖，記錄目標、子任務和進度，幫助使用者跟蹤任務的變化；`session-handoff-prompt` 將當前對話的上下文壓縮成一個便於接續的提示，避免重複整個對話歷史；而 `user-profile-keeper` 則負責維護用戶的本地協作檔案，記錄溝通偏好和風險風格。這些技能的設計使得 AI 能夠在多輪對話中保持上下文一致性，並能夠在不同的 AI 代理之間進行無縫切換。使用者可以通過簡單的 CLI 指令如 `npx skills add dongshuyan/compass-skills --skill '*' -a claude-code` 來安裝所有技能，並在對話中直接調用這些技能。這個系統的賣點在於它的本地化設計，確保所有數據都不會上傳，增強了用戶的隱私和安全性。

**技術棧**：`Python` · `HTML`

## 重點功能

- 任務澄清 — 使用 `task-clarifier` 在執行前確認任務範圍和目標，避免誤解。
- 任務森林 — `task-forest` 維護一個本地任務圖，記錄進度和變更，支持長期任務管理。
- 會話交接提示 — `session-handoff-prompt` 將當前對話的上下文壓縮成便於接續的提示。
- 用戶檔案管理 — `user-profile-keeper` 本地保存用戶的協作偏好，增強隱私保護。
- CLI 安裝 — 使用簡單的 CLI 指令安裝和調用技能，方便開發者快速上手。

## 快速開始

1. 列出可用技能
```bash
npx skills add dongshuyan/compass-skills --list
```
2. 安裝所有 Claude Code 技能
```bash
npx skills add dongshuyan/compass-skills --skill '*' -a claude-code
```
3. 直接在 AI 對話中調用技能
```bash
$task-clarifier
```

## 程式碼範例

```python
{
  "前置條件": "安裝 COMPASS Skills 後",
  "指令": "$task-clarifier",
  "預期輸出": "請確認任務的範圍和目標，並提出關鍵問題。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 397 stars（79/天），forks 34（8.6%），顯示出良好的社群反響。作者 dongshuyan 之前在 AI 代理和任務管理領域有豐富經驗，這個專案解決了 AI 在長期任務中缺乏上下文管理的痛點，提供了一個整合的解決方案。社群對於這種本地化的技能管理系統有著明顯的需求，特別是在隱私日益受到重視的當下。這個專案的出現正好填補了市場上對於個性化 AI 任務管理的空白。

## 適合誰使用

**目標受眾**：需要在多輪對話中管理任務的 AI 開發者和產品經理。

> [!example] 使用場景
> - AI 開發者用它來管理多輪對話中的任務狀態，因為它能夠保持上下文一致性，避免重複工作。
> - 產品經理用它來協調團隊的任務分配，因為它提供了清晰的任務圖，幫助追蹤進度和風險。
> - 自由職業者用它來管理客戶需求，因為它能夠根據用戶的溝通偏好自動調整提問方式。

## 架構分析

COMPASS Skills 採用模組化設計，將不同的技能分開管理，這樣可以根據需要選擇安裝。每個技能都獨立運作，並通過 CLI 進行調用，這樣的設計使得使用者可以靈活地選擇所需功能。資料流方面，任務澄清技能首先確認用戶需求，然後將結果傳遞給任務森林進行記錄，最後生成會話交接提示。

這樣的設計確保了任務的連貫性和可追蹤性。選擇本地化存儲的代價是需要用戶自行管理數據，但這樣可以有效避免數據洩露的風險。擴展性方面，隨著技能的增加，使用者可以根據需求進行擴展，而不會影響現有功能的運作。

## 技術深入分析

COMPASS Skills 的核心機制是模組化的技能設計，使用者可以根據需求選擇安裝不同的技能。這些技能使用 Python 實作，並依賴於本地存儲來管理數據，確保用戶的隱私。任務澄清技能首先會確認用戶的需求，然後將這些信息傳遞給任務森林進行記錄，這樣可以保持任務的連貫性。這個系統能夠處理長期的任務和多輪對話，並且能夠在不同的 AI 代理之間進行切換。設計上選擇了本地化存儲的方式，雖然這樣會增加用戶的管理負擔，但卻能有效避免數據洩露的風險。未來在擴展性方面，隨著技能的增加，使用者可以根據需求進行擴展，而不會影響現有功能的運作。整體來看，COMPASS Skills 在 AI 代理的任務管理上提供了一個創新的解決方案，能夠有效提升工作效率。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程相對順暢，但對新手來說可能需要一些環境配置的經驗。文件中有提供簡單的快速入門指南，對於想要快速上手的使用者非常友好。

## 優缺點分析

> [!success] 優點
> - 提供本地化的數據管理，增強用戶隱私。
> - 模組化設計，使用者可根據需求靈活選擇技能。
> - 支持多輪對話的上下文管理，提升任務執行效率。

> [!danger] 缺點
> - 目前僅支持特定的 AI 代理，擴展性有限。
> - 用戶檔案管理使用純文本存儲，需注意安全性。
> - 需要用戶自行管理和配置環境，對新手不太友好。

> [!warning] 注意事項
> - 僅支援 Python 環境，需安裝相關依賴。
> - 用戶檔案管理使用純文本存儲，請勿存儲敏感信息。
> - 目前僅支持 Claude Code 和 Codex 代理，其他代理需手動配置。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI 代理的創建和管理，而 COMPASS 更加注重任務的持續管理和上下文保持。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理協作的框架，但缺乏 COMPASS 的本地任務管理功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI 代理的創建和管理，而 COMPASS 更加注重任務的持續管理和上下文保持。 | 如果你的團隊需要一個強大的 AI 代理創建框架，而不僅僅是任務管理，則應選擇 agent-sprite-forge。 | medium，因為需要重新設計任務管理的流程。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理協作的框架，但缺乏 COMPASS 的本地任務管理功能。 | 如果你的專案需要多代理協作而不是單一任務管理，則應選擇 Duel-Agents。 | high，因為需要重構任務管理邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **compass-skills** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 AI 代理的創建和管理，而 COMPASS 更加注重任務的持續管理和上下文保持。 | 提供多代理協作的框架，但缺乏 COMPASS 的本地任務管理功能。 |
> | 遷移成本 | - | medium，因為需要重新設計任務管理的流程。 | high，因為需要重構任務管理邏輯。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個強大的 AI 代理創建框架，而不僅僅是任 | 如果你的專案需要多代理協作而不是單一任務管理，則應選擇 Du |

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

- **[HIGH]** 用戶檔案管理未加密，存儲敏感信息風險高
  - 解法：避免在檔案中存儲密碼和敏感數據
- [MEDIUM] 僅支援特定的 AI 代理，擴展性有限
  - 解法：手動配置其他代理的支持
- [MEDIUM] 安裝過程中可能需要安裝額外的 Python 依賴
  - 解法：確保環境中已安裝必要的依賴

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的初創團隊進行 AI 開發 | 非常適合 | 提供本地化的任務管理，適合小型團隊的靈活需求。 |
| 大型企業的 AI 任務管理 | 不適合 | 目前僅支持特定的 AI 代理，無法滿足大型企業的多樣化需求。 |
| 自由職業者管理多個客戶項目 | 適合 | 能夠有效管理不同客戶的任務和需求。 |
| 需要高安全性的 AI 開發環境 | 普通 | 雖然提供本地化存儲，但未加密的用戶檔案管理仍有風險。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~6 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學習，6 小時整合，得到高效的任務管理系統，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：COMPASS Skills 僅在本地運行，不會上傳數據，但用戶檔案管理未加密，需注意存儲敏感信息的風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/dongshuyan--compass-skills");
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
> const me = dv.page("Repos/dongshuyan--compass-skills");
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
| Forks | 34 |
| Open Issues | 0 |
| 最後推送 | 2026-06-20 |
| 建立日期 | 2026-06-15 |
| Repo 大小 | 14.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/dongshuyan/compass-skills) |
| Topics | `agent-memory` `agent-skills` `ai-agents` `ai-coding-agent` `claude-code` `claude-skills` `codex-skills` `developer-tools` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 53
>     "HTML" : 47
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@dongshuyan](https://github.com/dongshuyan) | 36 |

**最新版本**：v0.2.0 — COMPASS Skills v0.2.0 (2026-06-16)

> [!info]- Release Notes
> # COMPASS Skills v0.2.0
> 
> This release updates the public COMPASS skill set after the task alignment and persistence hardening pass.
> 
> ## Highlights
> 
> - `task-clarifier` now prioritizes user-owned decisions before external research, asks 1-3 focused questions, and confirms shared understanding before execution.
> - `task-forest` now delegates clarification routing to `task-clarifier`, keeps graph and proposal logic in task-forest, and moves node classification details into `references/node-types.md`.
> - `user-profile-keeper` now uses a simpler first-run gate: active profile means incremental update; no active profile means recommend onboarding. If the user declines onboarding, durable candidates stay in proposals.
> - `user-profile-keeper` now routes inferred, background, operational-instruction, and unknown-category candidates through proposal review instead of active auto-apply.
> - `skills.sh.json` and README metadata are included for easier discovery and cross-agent installation.
> - The skill writing tutorial now includes guidance on reducing unnecessary routing and judgment points.
> 
> ## Included skills
> 
> - `task-clarifier`
> - `task-forest`
> - `user-profile-keeper`
> 
> ## Install
> 
> List available skills:
> 
> ```bash
> npx skills add dongshuyan/compass-skills --list
> ```
> 
> Install all skills for Claude Code:
> 
> ```bash

## 社群與生態

**社群活躍度**：社群活躍度中等，持續更新和維護。
**連結**：[文件](https://dongshuyan.com/compass-skills/skill-writing-tutorial.html)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-17 ~ 2026-06-20）
> **活躍天數** 3 天 · **最新 commit** docs: add tutorial favicon

## README 摘錄

> [!info]- 展開查看原文 README
> COMPASS Skills
> 
>   
>   
>   
>   
>   
> 
>   中文 · Security · License
> 
> > **Start here: [Use & develop your own Skill ecosystem](https://dongshuyan.com/compass-skills/skill-writing-tutorial.html)**
> >
> > A practical tutorial for using `SKILL.md`, auditing reusable skills, drafting skills with AI, extracting real workflows, and building a local Skill ecosystem.
> 
> ```bash
> npx skills add dongshuyan/compass-skills --skill '*' -a claude-code
> ```
> 
> COMPASS Skills gives AI coding agents four local skills: task clarification, repo-local task memory, AI conversation handoff prompts, and a local collaboration profile.
> 
> The project currently ships four `SKILL.md` skills:
> 
> | Skill | Purpose |
> | --- | --- |
> | [`task-clarifier`](skills/task-clarifier/) | Aligns goals, scope, evidence, acceptance criteria, and risk boundaries before ambiguous, costly, or externally visible work. |
> | [`task-forest`](skills/task-forest/) | Maintains a repo-local task forest / DAG with goals, subtasks, dependencies, progress, deviations, todos, decisions, and conversation history. |
> | [`session-handoff-prompt`](skills/session-handoff-prompt/) | Compresses the current AI conversation's goal, progress, constraints, and next steps into a paste-ready prompt for a new AI conversation. |
> | [`user-profile-keeper`](skills/user-profile-keeper/) | Maintains a local, auditable, correctable collaboration profile for communication preferences, risk style, and recurring working context. |
> 
> 
> ## Quick Start
> 
> List the available skills before installing:
> 
> ```bash
> npx skills add dongshuyan/compass-skills --list
> ```
> 
> Install all skills for Claude Code:
> 
> ```bash
> npx skills add dongshuyan/compass-skills --skill '*' -a claude-code
> ```
> 
> Install all skills for both Codex and Claude Code:
> 
> ```bash
> npx skills add dongshuyan/compass-skills --skill '*' -a codex -a claude-code
> ```
> 
> After installation, invoke the skills directly in an AI conversation:
> 
> ```text
> $task-clarifier
> $task-forest
> $session-handoff-prompt
> $user-profile-keeper
> ```
> 
> For manual installation, copy the four folders under [`skills/`](skills/) into the agent's local skills directory and keep their `references/`, `scripts/`, and `agents/` subdirectories intact.
> 
> 
> ## Example Prompts
> 
> Clarify a task before execution:
> 
> ```text
> Use $task-clarifier to align the task below.
> 
> Task: ...
> Material: ...
> Constraints: ask user-owned decisions first; infer discoverable facts from files, context, or reliable sources. Ask only questions that change scope, method, evidence, format, safety, or acceptance criteria.
> Output: ask 1-3 key questions with recommended answers first; once the core need is clear, restate your understanding in 2-5 lines and ask me to confirm.
> ```
> 
> Maintain the task forest for a workspace:
> 
> ```text
> Use $task-forest to analyze the current AI conversation and maintain the task forest for this workspace.
> 
> Goal: create a task-forest proposal from long-running goals, tasks, progress, deviations, risks, decisions, and follow-ups in this AI conversation.
> Requirements:
> 1. Read the current task-forest list and todo first; initialize task-forest if missing.
> 2. Identify which long-term goal this AI conversation served. If no relation is clear, ask me or create a question/risk node.
> 3. Save a proposal and show me the planned changes before applying.
> 4. After approval, apply, validate, export, and report the HTML path.
> ```
> 
> Create a continuation prompt for a new AI conversation:
> 
> ```text
> Use $session-handoff-prompt to create a balanced continuation prompt for a new AI conversation.
> 
> Goal: let the next AI conversation continue the current task without replaying the whole transcript.
> Requirements:
> 1. Use the current conversation, explicit files I provide, current workspace evidence, and task-forest exports if present.
> 2. Keep task-forest read-only; do not save proposals or modify the task graph.
> 3. Use my language for the prompt. Default to Chinese if unknown.
> 4. Use privacy=local for this machine. If I ask for a public/shareable handoff, redact local paths and credential-like strings first.
> 5. Put the paste-ready prompt first, then briefly state mode, sources, and limitations.
> ```
> 
> Representative output shape:
> 
> ```text
> 你正在接手一个已经进行过多轮的 AI 对话。请按以下上下文恢复任务状态；如果当前文件或可验证证据与这里冲突，以当前证据为准。
> 
> 【工作目录】
> 
> 【用户目标】
> 把 session-handoff-prompt 作为 COMPASS 的正式 skill 接入，支持 macOS、Linux、Windows 和主流 agent。
> 
> 【必须遵守的要求】
> - [已验证] 内部说明用英文；交互和输出使用用户语言，默认中文。
> - [已验证] 不读取 credential、cookie、浏览器 session 或无关私有日志。
> 
> 【下一步】
> 1. 更新 README 和 manifest。
> 2. 运行 smoke test 和安全扫描。
> 3. 报告验证结果和剩余风险。
> ```
> 
> Initialize a local user profile:
> 
> ```text
> Use $user-profile-keeper to initialize my local user profile.
> 
> Goal: build an auditable, correctable, retractable profile from a local questionnaire or the current context.
> Boundaries:
> 1. Store locally only. Do not upload anything or read browser cookies, tokens, or credentials.
> 2. Do not save secrets, passwords, private keys, verification codes, or browser-session information.
> 3. Put inferred, private, sensitive, or conflicting claims into pending proposals for my review.
> 4. Report what was saved, proposed, skipped, or redacted.
> ```
> 
> 
> ## Why COMPASS Exists
> 
> Long-running agent work needs four kinds of state:
> 
> - User context: communication preferences, risk boundaries, recurring omissions, and collaboration style.
> - Project context: where the current request fits, what it depends on, and how far it has progressed.
> - Goal context: how the current task contributes to the original objective and whether it still matches it.
> - Handoff context: what a new AI conversation needs to continue the current task without replaying the whole transcript.
> 
> COMPASS organizes that state into four local workflows:
> 
> 1. A local profile that the user can inspect and correct.
> 2. A repo-local task graph that survives AI conversation boundaries.
> 3. A paste-ready continuation prompt for a new AI conversation.
> 4. A clarification gate before ambiguous or risky execution.
> 
> 
> ## How The Four Skills Work Together
> 
> `task-clarifier` is the entry point for ambiguous, high-cost, high-risk, evidence-sensitive, or externally visible work. It first identifies the user-owned decisions that must be made, asks 1-3 focused questions with recommended answers, confirms shared understanding, and only then searches or executes.
> 
> `task-forest` records long-running work structure: why a task exists, where it fits, how far it progressed, what changed, and what remains unresolved.
> 
> `session-handoff-prompt` turns the current AI conversation, explicit transcripts, workspace evidence, and optional task-forest exports into a concise prompt for the next AI conversation. It reads task-forest as structured context but never modifies it.
> 
> `user-profile-keeper` stores collaboration preferences locally. Future AI conversations use the profile to ask relevant questions and apply the right risk boundary. Current files, logs, and user-provided context remain the authority; secrets stay out of the profile.
> 
> ```text
> user-profile-keeper    -> who is the user and how should we collaborate?
> task-forest            -> where does this task fit and is it still aligned?
> session-handoff-prompt -> what should the next AI conversation know to continue now?
> task-clarifier         -> what should the agent do now?
> ```
> 
> 
> ## Screenshots
> 
> Task forest HTML export:
> 
> Live DAG view:
> 
> Task detail view:
> 
> User profile and alignment flow:
> 
> Ecosystem map:
> 
> 
> ## Compatibility
> 
> COMPASS works across agent runtimes as a `SKILL.md` package with Markdown instructions, YAML frontmatter, optional `references/`, optional `scripts/`, and optional agent metadata.
> 
> | Agent / environment | Recommended setup |
> | --- | --- |
> | Claude Code | Use `npx skills add dongshuyan/compass-skills --skill '*' -a claude-code`, or copy the folders under `skills/` into Claude Code's custom skills directory. |
> | Codex | Use the `skills` CLI with `-a codex` when supported by your environment, or use the repo as a local skills source. |
> | OpenCode / OpenClaw / other agents | Keep [`AGENTS.md`](AGENTS.md) and load t

## 延伸閱讀

相關概念：[[任務管理]] · [[AI 代理]] · [[本地化存儲]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]]

[GitHub](https://github.com/dongshuyan/compass-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：任務管理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "任務管理" AND file.name != "dongshuyan--compass-skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "dongshuyan--compass-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "dongshuyan--compass-skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "dongshuyan--compass-skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["任務管理","AI 代理","本地化存儲"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "dongshuyan--compass-skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/dongshuyan--compass-skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "dongshuyan--compass-skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "dongshuyan" AND file.name != "dongshuyan--compass-skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/dongshuyan--compass-skills");
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
> const me = dv.page("Repos/dongshuyan--compass-skills");
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
> const me = dv.page("Repos/dongshuyan--compass-skills");
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
> const me = dv.page("Repos/dongshuyan--compass-skills");
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
> const me = dv.page("Repos/dongshuyan--compass-skills");
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

> **2026-06-21** — 首次收錄
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

- [[2026-06-22|2026-06-22]] — 再次上榜，429 stars
- [[2026-06-21|2026-06-21]] — 首次收錄，397 stars
