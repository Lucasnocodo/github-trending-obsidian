---
repo: Kulaxyz/self-learning-skills
url: https://github.com/Kulaxyz/self-learning-skills
owner: Kulaxyz
owner_type: User
language: N/A
license: MIT
description: "A self-improving skill for AI coding agents (Claude Code, Cursor, AGENTS.md): recognize a hard-won golden path in a session and harvest it into a reusable skill/rule for next time."
homepage: ""
stars: 845
stars_per_day: 106
forks: 25
open_issues: 2
created: 2026-06-28
pushed_at: 2026-07-01
first_seen: 2026-07-02
week: "2026-W27"
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
last_reviewed: 2026-07-02
use_case: "讓 AI 編碼代理自動記錄和重用成功的工作流程，避免重複學習。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-07-12"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 28
readme_length: 5798
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-02"
star_history: "2026-07-02:748,2026-07-02:748,2026-07-03:902,2026-07-03:902,2026-07-04:806,2026-07-04:806,2026-07-05:827,2026-07-05:827,2026-07-06:837,2026-07-07:845"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
aliases:
  - "self-learning-skills"
  - "Kulaxyz/self-learning-skills"
  - "讓 AI 編碼代理自動記錄和重用成功的工作流程，避免重複學習。"
---

# self-learning-skills

**845** stars · **106** stars/天 · 建立 8 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/Kulaxyz--self-learning-skills");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 讓 AI 編碼代理自動記錄和重用成功的工作流程，避免重複學習。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (106 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 6 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望提升 AI 編碼代理效率，並減少重複學習的開發者。
> **一句話重點** 這個專案讓 AI 編碼代理能夠自動學習和記錄成功的工作流程，顯著提升開發效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Kulaxyz--self-learning-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "Kulaxyz--self-learning-skills" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到顯著的開發效率提升，值得考慮。

> [!abstract] 核心創新
> 這個專案的核心創新在於讓 AI 編碼代理能夠自動識別並記錄成功的工作流程，避免重複學習。

## 專案簡介

這個專案提供了一個自我學習的技能，讓 AI 編碼代理（如 Claude Code 和 Cursor）能夠在每次會話中識別並記錄成功的工作路徑，並在下次會話中自動加載這些知識。具體來說，當代理完成一個任務後，它會捕捉這個過程，包括成功和失敗的經驗，並將其保存為可重用的技能或規則。這樣，下一次進行相似任務時，代理就不需要重新學習，而是直接使用之前的知識。這種設計的核心賣點在於提高效率，讓代理在面對重複性任務時能夠更快地達成目標。

技術上，這個專案利用了社群的 `skills` CLI 工具，支持 70 多個代理的自動安裝和配置，並且能夠根據不同工具的需求將知識持久化到特定的文件中。相較於其他工具，這個專案的獨特之處在於它不僅記錄成功的步驟，還能捕捉失敗的經驗，這在許多傳統的自動化工具中是缺乏的。使用者可以在多種環境中靈活運用這個技能，並且不需要額外的提示或操作，這使得它在實際使用中非常方便。這個專案目前處於早期階段，活躍度尚可，但仍需注意其開發進度和社群支持的情況。

**技術棧**：`Node.js` · `npx`

## 重點功能

- 自動識別成功路徑 — 代理能夠在完成任務後自動記錄成功的步驟和失敗的經驗。
- 無需提示的知識捕捉 — 代理在識別到重要信息時會自動保存，不需要額外的操作。
- 多工具支持 — 支援 Claude Code、Cursor 等多種代理，能夠靈活應用於不同環境。
- 持久化知識 — 將學習到的知識保存到特定的文件中，便於下次自動加載。
- 社群 CLI 工具整合 — 使用 `npx skills` CLI 工具，方便安裝和配置。

## 快速開始

1. 使用 npx 安裝自學技能
```bash
npx skills add kulaxyz/self-learning-skills
```
2. 全局安裝到所有項目
```bash
npx skills add kulaxyz/self-learning-skills -g
```
3. 為特定代理安裝
```bash
npx skills add kulaxyz/self-learning-skills -a claude-code
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 845 stars（106/天），forks 25（3.0%），顯示出一定的關注度。作者 Kulaxyz 之前在 AI 工具開發上有相關經驗，這個專案解決了 AI 編碼代理在重複任務中知識流失的痛點，讓代理能夠持續學習和改進。社群的反應顯示出對於這種自我學習能力的需求，尤其是在多次重複的開發任務中。這個工具的出現正好滿足了開發者希望提高效率的需求，並且在技術上利用了現有的 CLI 工具生態，讓安裝和使用變得簡單。

## 適合誰使用

**目標受眾**：希望提升 AI 編碼代理效率，並減少重複學習的開發者。

> [!example] 使用場景
> - 後端工程師用它來自動記錄成功的資料庫連接步驟，因為這樣可以避免每次都重新查找連接資訊，節省時間。
> - DevOps 工程師用它來記錄部署流程中的關鍵命令，因為這樣可以減少部署失敗的風險，提升系統穩定性。
> - 新手開發者用它來捕捉常見的錯誤和解決方案，因為這樣可以加速學習過程，減少重複犯錯的機會。

## 架構分析

這個專案的架構主要依賴於社群的 CLI 工具，透過 `npx` 進行安裝和配置。知識的持久化依賴於不同代理的特定文件格式，這樣的設計使得使用者可以靈活選擇適合的代理進行操作。資料流方面，當代理完成任務後，會自動識別成功的步驟並保存，這樣能夠在下次會話中直接調用，減少重複學習的時間。

選擇這種架構的代價在於對於不同代理的支持需要額外的適配，可能會增加維護成本。這個專案在擴展性上有一定的瓶頸，因為不同代理的知識持久化方式不一，未來可能需要進一步優化。整體而言，這個設計使得使用者能夠快速上手，並在實際使用中獲得良好的體驗。

## 技術深入分析

這個專案的核心技術在於自動識別和記錄成功的工作流程，利用社群的 CLI 工具進行安裝和配置。它的資料流設計使得代理在完成任務後能夠即時捕捉成功的步驟，並將其保存到特定的文件中，這樣在下次會話中可以直接調用。效能上，這種設計能夠顯著減少重複學習的時間，讓開發者能夠更快地達成目標。選擇使用社群的 CLI 工具使得安裝過程簡單，但也帶來了對於不同代理的適配需求，這可能會增加維護成本。技術風險方面，未來在擴展到更多代理時，可能會遇到兼容性問題。整體而言，這個專案在技術上具有一定的創新性，並且能夠與主流開發工具鏈良好整合，對於希望提升開發效率的團隊來說是一個值得考慮的選擇。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和使用範例，對於新手來說相對友好。安裝過程順暢，使用 npx 進行安裝不會遇到太多問題。文件中有針對不同代理的安裝說明，能夠幫助使用者快速上手。

## 優缺點分析

> [!success] 優點
> - 自動記錄成功的工作流程，提升開發效率。
> - 支持多種 AI 編碼代理，靈活性高。
> - 無需額外提示即可捕捉知識，使用方便。

> [!danger] 缺點
> - 目前僅支援特定的代理，限制了使用範圍。
> - 依賴社群工具，可能存在版本兼容問題。
> - 早期階段的文檔和支持可能不夠完善。

> [!warning] 注意事項
> - 目前僅支援特定的 AI 編碼代理，其他工具可能無法使用。
> - 需要依賴社群的 CLI 工具進行安裝，可能會有版本兼容問題。
> - 在早期階段，社群支持和文檔可能不夠完善。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的自學功能，但專注於特定的代理，可能不如本專案通用。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於記錄開發過程中的錯誤，缺乏自動學習的能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於特定代理的自學功能，可能不如本專案通用。 | 如果你的團隊主要使用特定的代理，且需要針對性功能，這個工具可能更合適。 | medium，因為需要重新配置和學習新的工具。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於記錄開發過程中的錯誤，缺乏自動學習的能力。 | 如果你的需求主要是記錄錯誤而非自動學習，這個工具可能更合適。 | low，因為功能相對簡單，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **self-learning-skills** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定代理的自學功能，可能不如本專案通用。 | 專注於記錄開發過程中的錯誤，缺乏自動學習的能力。 |
> | 遷移成本 | - | medium，因為需要重新配置和學習新的工具。 | low，因為功能相對簡單，容易上手。 |
> | 適用場景 | 主要場景 | 如果你的團隊主要使用特定的代理，且需要針對性功能，這個工具可 | 如果你的需求主要是記錄錯誤而非自動學習，這個工具可能更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些代理中，知識持久化可能無法正常工作
  - 解法：檢查代理的版本和配置，確保兼容性
- [MEDIUM] 早期階段的文檔可能不夠詳細，導致使用困難
  - 解法：參考社群討論或尋求幫助

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行重複性任務 | 非常適合 | 能夠自動記錄成功的工作流程，提升效率。 |
| 大型企業的複雜系統開發 | 普通 | 雖然有自動學習功能，但可能需要更多的定制化。 |
| 新手開發者學習基本技能 | 非常適合 | 能夠幫助他們快速捕捉和記錄學習過程中的重要步驟。 |
| 對於不需要重複學習的單次任務 | 不適合 | 這個工具的優勢在於重複性任務的自動學習。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到顯著的開發效率提升，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不存取敏感資料，使用過程中相對安全。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 AI 編碼代理搭配使用，特別是在開發和部署過程中。實際整合範例包括在使用 Claude Code 進行開發時，自動記錄成功的部署流程，具體做法是使用 `npx skills add kulaxyz/self-learning-skills` 指令進行安裝。它能夠與主流 CI 工具（如 GitHub Actions）良好整合，並且支援在 VS Code 等 IDE 中使用。整合的摩擦點主要在於不同代理的兼容性，使用者需要確保所使用的代理版本與工具相容。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Kulaxyz--self-learning-skills");
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
> const me = dv.page("Repos/Kulaxyz--self-learning-skills");
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
| Forks | 25 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-01 |
| 建立日期 | 2026-06-28 |
| Repo 大小 | 28 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Kulaxyz/self-learning-skills) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Kulaxyz](https://github.com/Kulaxyz) | 5 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有更新但問題解決率低。
**連結**：[文件](https://github.com/kulaxyz/self-learning-skills)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-28 ~ 2026-07-01）
> **活躍天數** 2 天 · **最新 commit** fix: make SKILL.md fully tool-neutral and even-handed (Claude + Codex)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/Kulaxyz/self-learning-skills/issues/1) | Add a review receipt before auto-harvested skills become dur | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # self-learning-skills
> 
> **A self-improving skill for AI coding agents.** Works with Claude Code, Cursor,
> and any agent that reads an `AGENTS.md` / standing-instructions file.
> 
> Every session you do hard debugging or rediscover the same thing — *how do I
> reach the prod DB? where do the creds live? what's the deploy command? how do I
> verify this live?* — and that hard-won knowledge evaporates when the session
> ends. The next session starts from zero and re-learns it.
> 
> **self-learning** fixes that. It teaches your agent to recognize the moment it
> has just earned a reusable **golden path** and persist it where the tool will
> auto-load it next time — so the next session starts already knowing the route
> instead of rediscovering it.
> 
> It's a *meta-skill*: it doesn't do the work, it captures **how** the work got
> done — including the **failures**, since skipping a known dead-end next session
> is often worth more than the win itself.
> 
> ## The loop (same everywhere)
> 
> 1. **Recognize the moment** — a task that only worked after several tries, a
>    non-obvious command, a project fact you didn't know up front, an operational
>    workflow likely to recur, or you simply saying *"remember this"*.
> 2. **Capture it, no prompt needed** — it acts on the cue immediately, picks the
>    scope/name itself, and tells you afterward. The *procedure* is captured (not
>    a one-off answer), plus a "what didn't work" note.
> 3. **Reuse** — next session the entry loads automatically, by skill/rule
>    description or because the instructions file is always read.
> 
> What differs per tool is only *where* knowledge is persisted and *how* it's
> auto-loaded:
> 
> | Tool | Persists golden paths to | Auto-loads via |
> |---|---|---|
> | Claude Code, Codex, Agent Skills clients | a new `skills//SKILL.md` | skill description matching |
> | Cursor | a new `.cursor/rules/learned/.mdc` | rule description / globs |
> | Zed, Aider, Gemini CLI, … | `AGENTS.md` (or project notes/memory) | always-read instructions |
> 
> ## Install
> 
> ### `npx` — recommended (works with 70+ agents)
> 
> Uses the community [`skills`](https://github.com/vercel-labs/skills) CLI, which
> installs into whatever agents it detects — Claude Code, Cursor, Codex, Cline,
> OpenCode, and more:
> 
> ```bash
> npx skills add kulaxyz/self-learning-skills                 # this project (auto-detects agents)
> npx skills add kulaxyz/self-learning-skills -g              # global — all your projects
> npx skills add kulaxyz/self-learning-skills -a claude-code  # a specific agent
> ```
> 
> Try it once without installing:
> 
> ```bash
> npx skills use kulaxyz/self-learning-skills --skill self-learning | claude
> ```
> 
> ### Claude Code plugin
> 
> ```
> /plugin marketplace add kulaxyz/self-learning-skills
> /plugin install self-learning@self-learning-skills
> ```
> 
> ### Manual
> 
> Copy the files into place yourself
> 
> ```bash
> git clone https://github.com/kulaxyz/self-learning-skills
> 
> # Claude Code — global (or into a project's .claude/skills/ to share via git)
> cp -R self-learning-skills/skills/self-learning ~/.claude/skills/
> 
> # Cursor — auto-loads .cursor/rules/ (harvested rules land in .cursor/rules/learned/)
> mkdir -p .cursor/rules
> cp self-learning-skills/.cursor/rules/self-learning.mdc .cursor/rules/
> 
> # Any AGENTS.md agent (Codex, Zed, Aider, Gemini CLI, …)
> curl https://raw.githubusercontent.com/kulaxyz/self-learning-skills/main/AGENTS.md >> AGENTS.md
> ```
> 
> ## Triage: skill, memory, or skip?
> 
> It won't bloat your config with one-liners. Each lesson is routed:
> 
> | Lesson | Where it goes |
> |---|---|
> | A multi-step, reusable **procedure/workflow** | a new skill / rule |
> | A single **fact or one-line correction** | lightweight notes/memory (e.g. a `MEMORY.md`) |
> | A genuine **one-off** | skipped |
> 
> ## Promotion rule (don't enshrine guesses)
> 
> Triage decides *granularity*; the promotion rule decides *confidence*. A skill is
> authoritative — the next session trusts it without re-deriving it — so a session
> is only promoted to a skill when **all three** hold:
> 
> 1. **A passing check** — the path was actually verified (a test passed, a clean
>    exit, a green build, a reproduced repro). "Seemed to work" doesn't count.
> 2. **A named failure pattern** — the failure it avoids or diagnoses, named.
> 3. **At least one ruled-out dead-end** — a concrete approach tried and eliminated.
> 
> Miss any one and it stays a tentative memory note (or is skipped) rather than a
> skill. This keeps confident-but-unverified guesses out of the skill set.
> _(Promotion rule suggested by community feedback.)_
> 
> ## Safety
> 
> Harvested skills/rules get committed and shared, so this is built to **never
> write secret values** — no passwords, tokens, connection strings, or API keys.
> It records only *where* to find a secret (env var name, a client/selector
> function, an MCP tool, a secret manager). Reproducing a secret into a shared
> file leaks it.
> 
> ## Repo layout
> 
> ```
> self-learning-skills/
> ├── AGENTS.md                          # generic, cross-tool version of the loop
> ├── skills.sh.json                     # registry manifest for `npx skills` / skills.sh
> ├── .claude-plugin/
> │   └── marketplace.json               # Claude Code plugin manifest
> ├── skills/
> │   └── self-learning/                 # Agent Skills standard (Claude Code + clients)
> │       ├── SKILL.md                   # recognize-the-moment + harvest procedure
> │       ├── references/
> │       │   └── skill-authoring.md     # condensed spec the writer loads to author a good skill
> │       └── assets/
> │           └── SKILL.template.md      # fill-in template for harvested skills
> └── .cursor/
>     └── rules/
>         ├── self-learning.mdc          # Cursor adapter (always-applied rule)
>         └── learned/                   # harvested Cursor rules land here
> ```
> 
> Built on the open [Agent Skills](https://agentskills.io) standard.
> 
> ## License
> 
> [MIT](LICENSE) © kulaxyz

## 延伸閱讀

相關概念：[[自動化]] · [[CI/CD]] · [[程式碼生成]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[alchaincyf--darwin-skill|alchaincyf/darwin-skill]]

[GitHub](https://github.com/Kulaxyz/self-learning-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "Kulaxyz--self-learning-skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Kulaxyz--self-learning-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "Kulaxyz--self-learning-skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "Kulaxyz--self-learning-skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CI/CD","程式碼生成"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Kulaxyz--self-learning-skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Kulaxyz--self-learning-skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Kulaxyz--self-learning-skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Kulaxyz" AND file.name != "Kulaxyz--self-learning-skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Kulaxyz--self-learning-skills");
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
> const me = dv.page("Repos/Kulaxyz--self-learning-skills");
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
> const me = dv.page("Repos/Kulaxyz--self-learning-skills");
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
> const me = dv.page("Repos/Kulaxyz--self-learning-skills");
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
> const me = dv.page("Repos/Kulaxyz--self-learning-skills");
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

> **2026-07-02** — 首次收錄
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

- [[2026-07-05|2026-07-05]] — 再次上榜，827 stars
- [[2026-07-04|2026-07-04]] — 再次上榜，806 stars
- [[2026-07-03|2026-07-03]] — 再次上榜，902 stars
- [[2026-07-02|2026-07-02]] — 首次收錄，748 stars
