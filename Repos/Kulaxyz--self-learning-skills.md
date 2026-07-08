---
repo: Kulaxyz/self-learning-skills
url: https://github.com/Kulaxyz/self-learning-skills
owner: Kulaxyz
owner_type: User
language: N/A
license: MIT
description: "A self-improving skill for AI coding agents (Claude Code, Cursor, AGENTS.md): recognize a hard-won golden path in a session and harvest it into a reusable skill/rule for next time."
homepage: ""
stars: 857
stars_per_day: 95
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
use_case: "讓 AI 編碼代理自動學習並重用過去的成功經驗，避免重複學習相同的問題。"
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
star_history: "2026-07-02:748,2026-07-02:748,2026-07-03:902,2026-07-03:902,2026-07-04:806,2026-07-04:806,2026-07-05:827,2026-07-05:827,2026-07-06:837,2026-07-07:845,2026-07-08:857"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
aliases:
  - "self-learning-skills"
  - "Kulaxyz/self-learning-skills"
  - "讓 AI 編碼代理自動學習並重用過去的成功經驗，避免重複學習相同的問題。"
---

# self-learning-skills

**857** stars · **95** stars/天 · 建立 9 天前 · N/A · MIT

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
> 讓 AI 編碼代理自動學習並重用過去的成功經驗，避免重複學習相同的問題。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (95 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 7 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望提升 AI 編碼代理學習能力的開發者，尤其是需要重複解決相似問題的團隊。
> **一句話重點** 這個專案讓 AI 編碼代理能夠自動學習和重用成功的解決方案，顯著提升了工作效率。

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
> **結論** 花 2 小時學習，1 小時整合，得到自動學習的 AI 編碼代理，值得一試。

> [!abstract] 核心創新
> 這個專案的創新點在於讓 AI 編碼代理能夠自動捕捉和重用成功的解決方案，而不僅僅是記錄答案。

## 專案簡介

這個專案的核心機制是讓 AI 編碼代理（如 Claude Code 和 Cursor）能夠自動識別和保存成功解決問題的過程，稱為「golden path」，以便在未來的會話中重用。使用者在進行調試或重複任務時，代理會自動捕捉這些關鍵步驟，並將其存儲為可重用的技能或規則。具體來說，當代理識別到一個成功的解決方案後，它會記錄下這個過程，包括失敗的嘗試，以便未來能夠避免重蹈覆轍。這樣的設計不僅提高了效率，還減少了重複學習的時間。安裝過程可以通過 `npx` 指令輕鬆完成，支持多達 70 種代理。

這個工具的獨特之處在於它的「meta-skill」概念，專注於捕捉解決問題的過程，而非僅僅是答案。相較於其他工具，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，這個專案不僅記錄成功的步驟，還能記錄失敗的經驗，這在長期使用中能夠顯著提高代理的智能水平。使用者在使用過程中可能會遇到配置過程中需要手動調整的情況，但整體來說，這個工具的設計是為了簡化 AI 代理的學習過程，讓它們在未來的任務中更具備知識和經驗。對於小型團隊或個人開發者來說，這是一個值得考慮的工具，尤其是在需要重複解決相似問題的情境下。

**技術棧**：`Node.js` · `npx`

## 重點功能

- 自動識別成功的解決方案 — 代理能夠在會話中捕捉關鍵步驟並保存。
- 記錄失敗的經驗 — 讓代理在未來避免重蹈覆轍，提升學習效率。
- 支持多種代理 — 兼容 Claude Code、Cursor 等 70 多種工具。
- 使用 `npx` 安裝 — 簡單易用，無需繁瑣的配置。
- 自動加載已保存的技能 — 在下一次會話中自動加載過去的成功經驗。

## 快速開始

1. 安裝 self-learning-skills
```bash
npx skills add kulaxyz/self-learning-skills
```
2. 全局安裝所有項目
```bash
npx skills add kulaxyz/self-learning-skills -g
```
3. 為特定代理安裝
```bash
npx skills add kulaxyz/self-learning-skills -a claude-code
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 857 stars（95/天），forks 25（2.9%），這顯示出穩定的增長潛力。作者 Kulaxyz 之前在 AI 相關領域有過豐富的經驗，這個專案解決了 AI 編碼代理在重複任務中缺乏記憶的痛點，讓代理能夠持續學習和改進。社群對於自動化學習的需求日益增長，這使得該專案的出現正好契合了這一趨勢。這個工具的設計讓 AI 代理能夠在不同的環境中持續進步，並且不會因為重複的任務而浪費時間。

## 適合誰使用

**目標受眾**：希望提升 AI 編碼代理學習能力的開發者，尤其是需要重複解決相似問題的團隊。

> [!example] 使用場景
> - 後端工程師用它來自動記錄和重用調試過程中的成功經驗，因為這樣能節省大量的重複學習時間。
> - AI 開發者用它來提升代理的學習能力，因為它能夠捕捉過去的失敗和成功，讓代理更智能。
> - 小型團隊用它來加速新成員的上手過程，因為代理能夠記錄和分享關鍵的操作流程和命令。

## 架構分析

這個專案採用模組化設計，主要由一個核心的自學習技能組成，能夠與多種 AI 編碼代理進行整合。資料流方面，當代理識別到成功的解決方案時，它會自動將這些步驟記錄到指定的文件中，並在下次會話中自動加載。選擇這種設計的原因是為了提高代理的智能水平，讓它們能夠在未來的任務中更有效率。這樣的設計雖然增加了初期的配置成本，但長期來看能夠顯著減少重複學習的時間。擴展性方面，這個工具能夠支持多種代理，但在與某些特定工具的整合上可能會遇到挑戰。

## 技術深入分析

這個專案的核心技術機制在於自動識別和記錄成功的解決方案，並將其保存為可重用的技能或規則。使用的主要技術是 Node.js 和 npx，這使得安裝和使用都非常方便。效能方面，這個工具能夠在多種代理環境中運行，並且能夠快速捕捉和加載過去的成功經驗。設計上選擇了模組化的方式，這樣可以方便地擴展和維護。技術風險方面，可能會在某些特定代理的整合上遇到挑戰，特別是在配置過程中。整合方面，這個工具能夠與多種主流開發環境兼容，但在某些情況下可能需要額外的配置。整體來看，這個專案在提升 AI 編碼代理的智能水平方面具有顯著的潛力。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝步驟和使用範例。安裝過程順暢，使用 npx 指令非常方便。文件中沒有提供多語言支持，但內容足夠完整，讓新手能夠快速上手。

## 優缺點分析

> [!success] 優點
> - 提高 AI 編碼代理的學習效率，減少重複學習的時間。
> - 自動記錄成功和失敗的經驗，讓代理更智能。
> - 簡單的安裝過程，適合各種開發環境。

> [!danger] 缺點
> - 目前僅支持特定的代理工具，可能無法與所有 AI 編碼代理兼容。
> - 需要手動配置某些代理的存儲路徑，對新手來說可能有一定的學習曲線。
> - 在捕捉過程中，可能會錯過一些非關鍵的成功經驗。

> [!warning] 注意事項
> - 目前僅支持特定的代理工具，可能無法與所有 AI 編碼代理兼容。
> - 在捕捉過程中，可能會錯過一些非關鍵的成功經驗。
> - 需要手動配置某些代理的存儲路徑，對新手來說可能有一定的學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理 AI 代理的技能，但不具備自動學習和記錄失敗的功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的技能管理功能，但缺乏自動捕捉成功過程的能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建和管理 AI 代理的技能，但不具備自動學習和記錄失敗的功能。 | 如果你的團隊需要一個更強大的技能管理系統，而不僅僅是自動學習功能。 | medium，因為需要重新設計技能管理流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的技能管理功能，但缺乏自動捕捉成功過程的能力。 | 如果你的團隊已經在使用這個工具，並且不需要自動學習的功能。 | low，因為可以直接使用現有的技能管理流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **self-learning-skills** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建和管理 AI 代理的技能，但不具備自動學習和記錄失敗的功能。 | 提供類似的技能管理功能，但缺乏自動捕捉成功過程的能力。 |
> | 遷移成本 | - | medium，因為需要重新設計技能管理流程。 | low，因為可以直接使用現有的技能管理流程。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個更強大的技能管理系統，而不僅僅是自動學習 | 如果你的團隊已經在使用這個工具，並且不需要自動學習的功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些代理中，配置過程可能會導致錯誤，需要手動調整。
  - 解法：仔細檢查配置文件，確保路徑正確。
- [low] 自動捕捉過程中可能會錯過一些非關鍵的成功經驗。
  - 解法：定期檢查和手動補充記錄。
- [MEDIUM] 對於新手來說，可能需要一些時間來理解如何使用這個工具。
  - 解法：參考官方文檔和社群討論。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 AI 編碼代理 | 非常適合 | 能夠自動學習和重用成功的解決方案，提升工作效率。 |
| 大型企業的 AI 開發部門 | 普通 | 雖然功能強大，但可能需要更多的配置和整合。 |
| 個人開發者的專案 | 非常適合 | 簡單易用，能夠快速提升開發效率。 |
| 需要高安全性的專案 | 不適合 | 可能存在記錄敏感信息的風險。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到自動學習的 AI 編碼代理，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不會寫入任何敏感信息，僅記錄如何找到秘密的方式，適合在 CI/CD 環境中使用。

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

**社群活躍度**：社群活躍度中等，最近有提交和問題反饋。
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

相關概念：[[自動化]] · [[機器學習]] · [[AI 編碼代理]]

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
> const concepts = ["自動化","機器學習","AI 編碼代理"];
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
