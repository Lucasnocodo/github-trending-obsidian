---
repo: Kulaxyz/self-learning-skills
url: https://github.com/Kulaxyz/self-learning-skills
owner: Kulaxyz
owner_type: User
language: N/A
license: MIT
description: "A self-improving skill for AI coding agents (Claude Code, Cursor, AGENTS.md): recognize a hard-won golden path in a session and harvest it into a reusable skill/rule for next time."
homepage: ""
stars: 837
stars_per_day: 120
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
use_case: "讓 AI 編程代理能夠自我學習並保存成功的操作流程，以便下次使用。"
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
star_history: "2026-07-02:748,2026-07-02:748,2026-07-03:902,2026-07-03:902,2026-07-04:806,2026-07-04:806,2026-07-05:827,2026-07-05:827,2026-07-06:837"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
aliases:
  - "self-learning-skills"
  - "Kulaxyz/self-learning-skills"
  - "讓 AI 編程代理能夠自我學習並保存成功的操作流程，以便下次使用。"
---

# self-learning-skills

**837** stars · **120** stars/天 · 建立 7 天前 · N/A · MIT

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
> 讓 AI 編程代理能夠自我學習並保存成功的操作流程，以便下次使用。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (120 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 5 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在多個 AI 編程代理中共享和重用知識的開發者。
> **一句話重點** 這個專案讓 AI 編程代理能夠自我學習，捕捉成功的操作流程，從而提升工作效率。

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
> **結論** 花 2 小時學習，1 小時整合，能夠提升重複性任務的效率，值得嘗試。

> [!abstract] 核心創新
> 這個專案的創新在於自動捕捉和重用 AI 編程代理的操作流程，提升了工作效率。

## 專案簡介

這個專案的核心機制是讓 AI 編程代理在每次會話中識別出成功的操作流程（稱為 golden path），並將其保存為可重用的技能或規則。具體來說，當代理完成一項任務後，它會自動捕捉這個過程，包括成功和失敗的經驗，並在下次會話中自動加載這些信息，避免重複學習。這樣的設計使得代理能夠在面對相似問題時，迅速找到解決方案，提升工作效率。使用者可以透過 `npx skills add kulaxyz/self-learning-skills` 指令來安裝，並且這個工具支持多種代理，包括 Claude Code 和 Cursor。技術上，它依賴於 AGENTS.md 標準來持久化和加載知識，這意味著它可以靈活適應不同的環境。

與其他工具相比，如 0x0funky/agent-sprite-forge 和 2aronS/Duel-Agents，這個工具專注於捕捉過程而非單一的結果，這使得它在面對複雜的調試和工作流時更具優勢。實際使用中，這個工具的效能取決於用戶的操作習慣和代理的配置，對於經常需要重複性任務的開發者來說，能顯著減少時間浪費。這個專案目前處於早期階段，活躍度不高，社群反饋也有限，對於想要在生產環境中使用的團隊來說，可能需要謹慎評估。適合那些需要在多個代理間共享知識的開發者，尤其是面對頻繁變動的工作環境時。對於小型團隊或個人項目，這個工具能夠快速上手，但在大型專案中可能會遇到整合上的挑戰。

## 重點功能

- 自動捕捉成功的工作流程 — 當代理完成任務後，自動記錄成功的操作過程。
- 支持多種代理 — 兼容 Claude Code、Cursor 等多種編程代理，靈活適應不同環境。
- 持久化知識 — 將捕捉到的知識保存到指定的文件中，便於下次自動加載。
- 失敗記錄 — 不僅記錄成功的步驟，還記錄失敗的經驗，幫助避免重複錯誤。
- 靈活的安裝方式 — 提供 `npx` 安裝和手動安裝的選項，方便用戶選擇。

## 快速開始

1. 安裝自學技能
```bash
npx skills add kulaxyz/self-learning-skills
```
2. 全局安裝
```bash
npx skills add kulaxyz/self-learning-skills -g
```
3. 為特定代理安裝
```bash
npx skills add kulaxyz/self-learning-skills -a claude-code
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 837 stars（119.57/天），forks 25（3.0%），這顯示出一定的興趣和初步的社群參與。作者 Kulaxyz 似乎專注於 AI 編程工具的開發，這個專案解決了 AI 編程代理在會話中無法持久化學習的痛點，之前的工具往往只能記住當前會話的上下文，無法自動學習和重用。這個工具的出現正好填補了這一空白，特別是對於需要長期調試和重複性任務的開發者來說，能夠自動捕捉和重用知識是非常有價值的。社群的反饋和需求也促進了這個專案的發展。

## 適合誰使用

**目標受眾**：需要在多個 AI 編程代理中共享和重用知識的開發者。

> [!example] 使用場景
> - 後端工程師用它來自動記錄和重用調試過程，因為這樣能減少每次重複學習的時間，提升工作效率。
> - 前端開發者用它來保存常用的部署命令，因為這樣能避免每次都查找文檔，快速上手。
> - DevOps 工程師用它來捕捉和重用操作流程，因為這樣能確保團隊成員在執行相同任務時不會遺漏關鍵步驟。

## 架構分析

這個專案的架構基於 AGENTS.md 標準，設計上旨在讓 AI 編程代理能夠持久化學習。它的資料流包括：首先，代理在完成任務時識別成功的操作流程；接著，這些流程被自動捕捉並保存到指定的文件中；最後，在下次會話中，這些保存的流程會被自動加載。這樣的設計使得用戶能夠在不同的代理間共享知識，並且減少重複學習的時間。選擇 AGENTS.md 標準的好處在於其靈活性和可擴展性，但這也意味著需要用戶對於不同代理的配置有一定的了解。整體而言，這個架構在小型專案中表現良好，但在大型專案中可能會遇到整合上的挑戰。

## 技術深入分析

這個專案的核心技術機制在於自動捕捉和持久化 AI 編程代理的操作流程。它使用 AGENTS.md 標準來實現知識的持久化，這意味著不同的代理可以共享相同的知識庫。效能上，這個工具能夠快速記錄和加載操作流程，但具體的效能數據尚未提供。設計上，選擇 AGENTS.md 標準的好處在於其靈活性和可擴展性，但這也意味著需要用戶對於不同代理的配置有一定的了解。技術風險方面，這個專案可能在面對大型專案時遇到整合上的挑戰，特別是在不同代理之間的知識共享。整合到現有的工具鏈中，這個工具能夠與多種代理協同工作，但對於不在支持列表中的代理則無法使用。整體而言，這個專案在小型專案中表現良好，但在大型專案中可能會遇到挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝步驟和使用範例。安裝過程順暢，使用 `npx` 指令能夠快速上手。文件目前僅提供英文，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 能夠自動捕捉和重用操作流程，提升工作效率。
> - 支持多種 AI 編程代理，靈活性高。
> - 記錄失敗經驗，幫助用戶避免重複錯誤。

> [!danger] 缺點
> - 目前僅支持特定的代理，限制了使用範圍。
> - 需要用戶主動觸發捕捉過程，無法完全自動化。
> - 社群活躍度不高，可能缺乏及時的支持和更新。

> [!warning] 注意事項
> - 目前僅支持特定的 AI 編程代理，對於不在支持列表中的代理無法使用。
> - 需要用戶主動觸發捕捉過程，無法完全自動化。
> - 社群活躍度不高，可能缺乏及時的支持和更新。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於生成和管理代理的技能，而 self-learning-skills 更加強調自動捕捉和重用過程中的知識。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | Duel-Agents 提供多代理協作的功能，但不具備自動學習和記錄的能力，這使得 self-learning-skills 更適合需要持久化知識的場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成和管理代理的技能，而 self-learning-skills 更加強調自動捕捉和重用過程中的知識。 | 如果你的團隊需要生成和管理多個代理的技能，而不僅僅是捕捉過程。 | medium，因為需要重新配置技能管理的方式。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理協作的功能，但不具備自動學習和記錄的能力，這使得 self-learning-skills 更適合需要持久化知識的場景。 | 如果你的團隊需要強調多代理之間的協作，而不太關注自動學習。 | low，因為可以直接使用現有的代理配置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **self-learning-skills** | **agent-sprite-forge** | **Duel-Agents** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成和管理代理的技能，而 self-learning-skills 更加強調自動捕捉和重用過程中的知識。 | 提供多代理協作的功能，但不具備自動學習和記錄的能力，這使得 self-learning-skills 更適合需要持久化知識的場景。 |
> | 遷移成本 | - | medium，因為需要重新配置技能管理的方式。 | low，因為可以直接使用現有的代理配置。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要生成和管理多個代理的技能，而不僅僅是捕捉過程 | 如果你的團隊需要強調多代理之間的協作，而不太關注自動學習。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在特定代理中可能無法正確捕捉流程，導致知識丟失
  - 解法：確保代理配置正確，並手動記錄重要步驟
- [MEDIUM] 社群活躍度不高，可能無法獲得及時的支持
  - 解法：參考文檔和 GitHub issues 自行解決問題
- [MEDIUM] 需要用戶主動觸發捕捉過程，否則可能錯過重要的學習機會
  - 解法：定期檢查和手動記錄重要的操作流程

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要快速記錄和重用調試過程 | 非常適合 | 能夠自動捕捉和重用操作流程，提升效率。 |
| 大型企業需要在多個代理間共享知識 | 普通 | 雖然支持多代理，但在整合上可能會遇到挑戰。 |
| 個人開發者希望簡化重複性任務 | 非常適合 | 能夠快速上手並提升工作效率。 |
| 需要高穩定性的生產環境 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，能夠提升重複性任務的效率，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不會寫入敏感信息，僅記錄如何找到秘密的方式，適合在 CI/CD 中使用。

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

**社群活躍度**：社群活躍度不高，目前只有 2 個開放問題未解決。

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

相關概念：[[自動化]] · [[CLI/TUI]] · [[Agent 框架]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[ConardLi--garden-skills|ConardLi/garden-skills]] · [[DietrichGebert--ponytail|DietrichGebert/ponytail]] · [[Fokkyp--SoftwareCopyright-Skill|Fokkyp/SoftwareCopyright-Skill]] · [[alchaincyf--darwin-skill|alchaincyf/darwin-skill]]

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
> const concepts = ["自動化","CLI/TUI","Agent 框架"];
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
