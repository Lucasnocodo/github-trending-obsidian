---
repo: dongshuyan/compass-skills
url: https://github.com/dongshuyan/compass-skills
owner: dongshuyan
owner_type: User
language: Python
license: MIT
description: "司南：个性化 AI 任务总控 Skills 系统 /COMPASS: Personal Alignment Skills OS for AI Agents"
homepage: ""
stars: 430
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
release_tag: "v0.3.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-21
use_case: "提供 AI 編程代理的個性化任務管理技能系統。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-06-29"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 55089
readme_length: 10000
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-21"
star_history: "2026-06-21:397,2026-06-21:397,2026-06-22:429,2026-06-22:430"
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
  - "提供 AI 編程代理的個性化任務管理技能系統。"
---

# compass-skills

**430** stars · **72** stars/天 · 建立 6 天前 · Python · MIT

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

`個人專案` `v0.3.0` `easy-install`

`agent-memory` `agent-skills` `ai-agents` `ai-coding-agent` `claude-code` `claude-skills` `codex-skills` `developer-tools` `local-first` `openai-codex` `personal-ai` `prompt-engineering` `skill-md` `task-management` `workflow-automation`

> [!summary] 一句話摘要
> 提供 AI 編程代理的個性化任務管理技能系統。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (72 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要提升 AI 代理任務管理能力的開發者和團隊。
> **一句話重點** COMPASS Skills 的設計重點在於提升 AI 代理的任務管理能力，特別是在長期和複雜的任務中保持上下文的連貫性。

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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學習，2 小時整合，能夠提升 AI 代理的任務管理效率，值得一試。

> [!abstract] 核心創新
> COMPASS Skills 提供了一個本地化的任務管理系統，專注於 AI 代理的任務澄清和上下文保持。

## 專案簡介

COMPASS Skills 是一個為 AI 編程代理設計的技能系統，提供四種本地技能：任務澄清、任務記憶、會話交接提示和用戶檔案管理。使用者可以透過簡單的 CLI 指令，如 `npx skills add dongshuyan/compass-skills --skill '*' -a claude-code`，輕鬆安裝所有技能。這些技能的設計旨在提升 AI 代理的任務管理能力，特別是在面對模糊或高風險的任務時，能夠進行有效的澄清和記錄。具體來說，`task-clarifier` 可以幫助用戶在執行任務前確認需求，`task-forest` 則維護任務的結構和進度，`session-handoff-prompt` 則能夠生成適合新會話的提示，讓 AI 代理無縫接續之前的對話。這樣的設計不僅提高了任務的透明度，也減少了因信息遺失而造成的錯誤。整體而言，COMPASS Skills 的一句話賣點是：通過本地化的任務管理和用戶檔案，提升 AI 代理的協作效率和準確性。

**技術棧**：`Python` · `HTML`

## 重點功能

- 任務澄清 — 使用 `$task-clarifier` 來確認任務需求，並引導用戶提供具體細節。
- 任務森林 — 使用 `$task-forest` 來維護任務結構和進度，支持 DAG 模型。
- 會話交接提示 — 使用 `$session-handoff-prompt` 生成適合新會話的提示，保持上下文連貫性。
- 用戶檔案管理 — 使用 `$user-profile-keeper` 來維護本地用戶檔案，記錄協作偏好。
- 跨平台支持 — 兼容 macOS、Linux 和 Windows，無需硬編碼路徑。

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
# 前置條件
使用 COMPASS Skills 的任務澄清技能。
# 指令
Use $task-clarifier to align the task below.
Task: ...
Material: ...
Constraints: ask user-owned decisions first; infer discoverable facts from files, context, or reliable sources. Ask only questions that change scope, method, evidence, format, safety, or acceptance criteria.
Output: ask 1-3 key questions with recommended answers first; once the core need is clear, restate your understanding in 2-5 lines and ask me to confirm.
# 預期輸出
生成一系列關鍵問題以澄清任務需求。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 430 stars（71.7/天），forks 35（8.1%），顯示出不錯的增長潛力。作者 dongshuyan 在 AI 和開源領域有一定的經驗，這個專案解決了 AI 代理在長期任務管理中的痛點，特別是如何保持上下文和任務狀態的連貫性。這個工具的出現恰逢個性化 AI 代理需求上升的時期，並且在社群中引發了一些討論。forks/stars 比率 8.1% 表示有相當比例的開發者對此專案感興趣，可能會進行修改或擴展。

## 適合誰使用

**目標受眾**：需要提升 AI 代理任務管理能力的開發者和團隊。

> [!example] 使用場景
> - AI 開發者用它來管理長期任務，因為它能夠保持任務的上下文和進度，避免重複工作。
> - 產品經理用它來澄清需求，因為它能夠引導用戶提供具體的任務細節，減少模糊性。
> - 團隊協作時用它來生成會話交接提示，因為它能夠快速整理之前的對話內容，讓新會話無縫接續。

## 架構分析

COMPASS Skills 採用模組化設計，將不同的技能分為獨立的模組，這樣的設計使得用戶可以根據需求選擇安裝。每個技能都通過簡單的 CLI 指令進行調用，這降低了使用門檻。資料流方面，任務澄清技能首先收集用戶輸入，然後生成具體的問題以澄清需求，接著將結果存儲在本地任務森林中。這種設計的代價是需要用戶主動參與澄清過程，可能會增加初始的交互成本。整體而言，這種模組化架構使得未來擴展新技能變得簡單，但也可能導致用戶在選擇技能時感到困惑。

## 技術深入分析

COMPASS Skills 的核心技術機制是基於模組化的技能設計，允許用戶根據需求選擇安裝和使用不同的技能。這些技能利用 Python 實現，並通過 CLI 進行調用，這使得整個系統的使用變得靈活。任務澄清技能在處理用戶輸入時，會生成具體問題以澄清需求，這樣的設計能有效降低因模糊需求導致的錯誤。整體效能方面，該系統能夠處理中小型專案的任務管理，但在面對大型專案時可能會出現性能瓶頸。選擇 Python 作為開發語言的好處在於其強大的生態系統和豐富的庫支持，但也可能帶來一定的性能損失。技術風險方面，未來如果需要擴展更多技能，可能會面臨依賴管理的挑戰，特別是在版本更新時。整合方面，與現有的 CI/CD 流程相容性良好，但需要用戶自行進行配置，這可能會增加學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和範例，安裝過程相對順暢，但對於不熟悉 CLI 的用戶可能會有一定的學習曲線。整體而言，花 30 分鐘應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 模組化設計，便於擴展和維護。
> - 支持多平台，無需特定環境配置。
> - 提供清晰的任務澄清流程，減少模糊性。

> [!danger] 缺點
> - 目前僅支持 CLI 操作，對於不熟悉命令行的用戶不友好。
> - 缺乏圖形界面，可能影響用戶體驗。
> - 對於大型專案的任務管理可能需要進一步的優化。

> [!warning] 注意事項
> - 僅支援 Python 和 HTML，對於其他語言的支持有限。
> - 需要安裝 Node.js 環境以使用 npx 指令。
> - 目前沒有圖形界面，完全依賴 CLI 操作。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 AI 代理技能管理，但專注於更廣泛的代理生態系統，而非特定任務管理。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於 AI 代理的記憶管理，缺乏 COMPASS 的任務澄清和用戶檔案功能。 |
| [DenisSergeevitch/agents-best-practices](https://github.com/DenisSergeevitch/agents-best-practices) | 提供 AI 代理的最佳實踐指南，但不具備實際的技能實作功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供一個更全面的 AI 代理生態系統管理工具，專注於代理之間的協作。 | 如果你的團隊需要管理多個代理並促進它們之間的協作，這個工具會更合適。 | medium，因為需要重新配置代理之間的協作方式。 |
| [DenisSergeevitch/agents-best-practices](https://github.com/DenisSergeevitch/agents-best-practices) | 提供 AI 代理的最佳實踐和指導，但不具備實際的技能實作功能。 | 如果你需要一個指導性的資源來提升 AI 代理的使用效率，這會是一個好選擇。 | low，因為主要是參考資料，不需要實際遷移。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **compass-skills** | **agent-sprite-forge** | **agents-best-practices** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供一個更全面的 AI 代理生態系統管理工具，專注於代理之間的協作。 | 提供 AI 代理的最佳實踐和指導，但不具備實際的技能實作功能。 |
> | 遷移成本 | - | medium，因為需要重新配置代理之間的協作方式。 | low，因為主要是參考資料，不需要實際遷移。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要管理多個代理並促進它們之間的協作，這個工具會 | 如果你需要一個指導性的資源來提升 AI 代理的使用效率，這會 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和探索，不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，安裝過程可能會出現權限問題
  - 解法：確保以管理員身份運行命令行工具
- [MEDIUM] CLI 指令的輸入格式需要非常精確，否則會導致錯誤
  - 解法：仔細參考 README 中的範例指令

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的初創團隊使用 AI 代理進行任務管理 | 非常適合 | COMPASS Skills 提供的任務澄清和記錄功能能夠有效支持小型團隊的協作。 |
| 大型企業的多部門協作 | 不適合 | 目前的功能可能無法滿足大型專案的複雜需求。 |
| 個人開發者在個人專案中使用 AI 代理 | 適合 | 提供的技能能夠幫助個人開發者更好地管理任務和上下文。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，能夠提升 AI 代理的任務管理效率，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限操作，且不會存取敏感資料，但用戶需自行確保本地環境的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

COMPASS Skills 最常與 AI 編程代理搭配使用，特別是在任務管理和協作的環節中。用戶可以在使用 Next.js 開發的專案中，透過 CLI 指令直接調用 COMPASS Skills 來管理任務。該工具與主流 CI 工具（如 GitHub Actions）相容，能夠輕鬆整合進現有的開發流程。整合過程中，最常見的問題是 CLI 指令的格式需要精確，否則會導致錯誤。

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
| Forks | 35 |
| Open Issues | 0 |
| 最後推送 | 2026-06-21 |
| 建立日期 | 2026-06-15 |
| Repo 大小 | 53.8 MB |
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
> | [@dongshuyan](https://github.com/dongshuyan) | 42 |

**最新版本**：v0.3.0 — COMPASS Skills v0.3.0 (2026-06-21)

> [!info]- Release Notes
> # COMPASS Skills v0.3.0
> 
> This release updates COMPASS into a fuller four-skill package for local, cross-agent collaboration: task clarification, repo-local task memory, AI conversation handoff prompts, and local user-profile context.
> 
> ## Highlights
> 
> - Added `session-handoff-prompt`, a new skill for creating paste-ready continuation prompts when an AI conversation needs to continue in a fresh session.
> - Updated `task-clarifier` to use explicit activation and a clearer question format: reason first, options second, recommendation last.
> - Made `task-clarifier` startup reads portable across Codex, Claude Code, OpenClaw, OpenCode, macOS, Linux, and Windows. It no longer assumes hard-coded local paths.
> - Added live task-clarifier examples to the English and Chinese READMEs, showing how a vague “which suitcase is best?” request becomes a confirmed requirement before recommendation.
> - Added English and Chinese task-clarifier test screenshots as evidence assets.
> - Refined README positioning, logo, badges, tutorial link, and public install guidance.
> - Added the COMPASS skill-writing tutorial for using, auditing, drafting, and evolving `SKILL.md` skills.
> - Updated public assets, favicon, and visual materials for the COMPASS repo.
> 
> ## Included skills
> 
> - `task-clarifier`
> - `task-forest`
> - `session-handoff-prompt`
> - `user-profile-keeper`
> 
> ## Install
> 
> List available skills:
> 
> ```bash
> npx skills add dongshuyan/compass-skills --list

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者持續更新文檔和範例。
**連結**：[文件](https://dongshuyan.com/compass-skills/skill-writing-tutorial.html)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-20 ~ 2026-06-21）
> **活躍天數** 2 天 · **最新 commit** docs: improve task clarifier example readability

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
> ## Task Clarifier Example
> 
> A vague request is turned into a checked requirement before the agent recommends anything.
> 
> Example: choosing a suitcase
> 
> Formatted from a live terminal run. Terminal status lines are omitted.
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
> ### Turn 1: vague request
> 
> **User**
> 
> > I want to buy a suitcase, can you tell me which one is the best?
> 
> **$task-clarifier**
> 
> Before recommending a product, the skill turns "best" into concrete decision criteria:
> 
> 1. **Use case** — What will you use the suitcase for most?
>    - Options: business travel, leisure vacations, extended travel, or custom situation.
>    - Recommendation: start with the primary use case, because it changes size, weight, and feature priorities.
> 2. **Budget** — What price range is realistic?
>    - Options: under $10

## 延伸閱讀

相關概念：[[任務管理]] · [[AI 代理]] · [[工作流自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

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
> const concepts = ["任務管理","AI 代理","工作流自動化"];
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
