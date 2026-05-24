---
repo: thananon/9arm-skills
url: https://github.com/thananon/9arm-skills
owner: thananon
owner_type: User
language: Shell
license: N/A
description: ""
homepage: ""
stars: 1863
stars_per_day: 466
forks: 244
open_issues: 3
created: 2026-05-20
pushed_at: 2026-05-20
first_seen: 2026-05-21
week: "2026-W21"
month: "2026-05"
category: "開發工具"
subcategory: "程式碼工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-21
use_case: "提供一系列針對工程和生產力的 Shell 技能，幫助開發者提升日常工作效率。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-05-27"
contributor_count: 0
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 20
readme_length: 1891
bus_factor: 0
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-21"
star_history: "2026-05-21:890,2026-05-22:1166,2026-05-23:1522,2026-05-24:1863"
tags:
  - github
  - "category/開發工具"
  - "lang/shell"
  - easy_install
aliases:
  - "9arm-skills"
  - "thananon/9arm-skills"
  - "提供一系列針對工程和生產力的 Shell 技能，幫助開發者提升日常工作效率。"
---

# 9arm-skills

**890** stars · **890** stars/天 · 建立 1 天前 · Shell · 未標註授權

```dataviewjs
const me = dv.page("Repos/thananon--9arm-skills");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 提供一系列針對工程和生產力的 Shell 技能，幫助開發者提升日常工作效率。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (890 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要提升日常開發效率的工程師，特別是使用 Shell 的開發者。
> **一句話重點** 這個專案的價值在於提供具體的 Shell 技能，幫助開發者提升日常工作效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/thananon--9arm-skills");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "程式碼工具" && p.file.name !== "thananon--9arm-skills" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 程式碼工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到提升工作效率的技能，值得一試。

> [!abstract] 核心創新
> 提供針對工程和生產力的具體 Shell 技能，幫助開發者提升日常工作效率。

## 專案簡介

這個專案提供了一組針對工程和生產力的 Shell 技能，讓開發者可以在日常工作中更有效率地處理各種任務。技能分為不同的類別，包括工程、產品力、雜項和個人使用等，每個技能都包含一個 `SKILL.md` 文件，詳細說明其功能和使用方式。用戶只需執行 `./scripts/link-skills.sh` 指令，即可將可用的技能連結到指定目錄，方便使用。這樣的設計使得技能的管理和使用變得簡單明瞭，並且能夠快速擴展新的技能。這個專案的賣點在於其專注於實用性，特別是針對工程師日常工作中的需求，提供了如 `debug-mantra` 和 `post-mortem` 等具體技能，幫助用戶在面對問題時有系統地進行分析和解決。

技術上，這些技能都是用 Shell 實現，依賴性輕，適合在各種 Unix-like 環境中使用。相較於其他類似工具，如 `0x0funky/agent-sprite-forge` 和 `DenisSergeevitch/agents-best-practices`，這個專案更專注於具體的工程實踐，而不是廣泛的 AI 或通用工具，適合需要高效能和專業技能的開發者使用。使用者在實際操作中可能會遇到技能更新不及時的問題，因為目前只有一個開放的 Issue，社群活躍度尚待觀察。整體來說，這是一個適合小型團隊或個人開發者的工具，特別是那些希望提升日常工作效率的工程師。未來可能會加入更多技能，進一步擴展其功能。

**技術棧**：`Shell`

## 重點功能

- 技能分類 — 包括工程、產品力、雜項和個人使用，方便用戶根據需求選擇。
- 自動連結技能 — 使用 `./scripts/link-skills.sh` 指令快速將技能連結到指定目錄。
- 詳細的技能說明 — 每個技能都有 `SKILL.md` 文件，包含名稱和描述，便於理解和使用。
- 工程專用技能 — 提供如 `debug-mantra` 和 `post-mortem` 等專業技能，幫助工程師系統性解決問題。
- 輕量級依賴 — 基於 Shell 實現，適合各種 Unix-like 環境，無需繁重的安裝步驟。

## 快速開始

1. 克隆專案到本地
```bash
git clone https://github.com/thananon/9arm-skills.git
```
2. 進入專案目錄
```bash
cd 9arm-skills
```
3. 連結可用技能
```bash
./scripts/link-skills.sh
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 890 stars（890/天），forks 124（13.9%），這顯示出相對較高的使用者興趣。專案作者似乎專注於開發實用的工具，並且過去有相關的開發經驗。這個專案解決了工程師在日常工作中缺乏高效工具的痛點，提供了具體的技能來提升工作效率。社群的反應也顯示出對這類工具的需求，尤其是在工程領域。這些因素共同促成了專案的快速增長。

## 適合誰使用

**目標受眾**：需要提升日常開發效率的工程師，特別是使用 Shell 的開發者。

> [!example] 使用場景
> - 後端工程師用它來快速連結和使用日常開發技能，因為這樣能夠減少重複性工作，提高效率。
> - 產品經理用它來撰寫和整理會議紀錄，因為能夠將技術內容轉化為易於理解的格式，便於溝通。
> - 新手開發者用它來學習和實踐工程技能，因為提供了具體的指導和範例，降低了學習門檻。

## 架構分析

這個專案採用簡單的目錄結構，每個技能都獨立存放在 `skills/` 目錄下，並以 `SKILL.md` 文件描述其功能。這樣的設計使得技能的管理變得簡單，並且能夠快速擴展新的技能。資料流方面，使用者透過指令連結技能，然後可以直接在命令行中使用。選擇 Shell 作為實現語言，優勢在於輕量和高效，缺點是對於不熟悉 Shell 的使用者來說，學習曲線可能較陡。整體架構的擴展性良好，但如果未來技能數量大幅增加，可能需要考慮更複雜的管理方式。

## 技術深入分析

這個專案的核心技術機制是基於 Shell 腳本，提供了一系列具體的技能來解決工程師在日常工作中面臨的問題。每個技能都獨立管理，並且有清晰的文檔說明，這樣的設計使得用戶能夠快速上手。效能方面，由於是基於 Shell 實現，對系統資源的需求相對較低，但在處理複雜任務時可能會受到 Shell 本身的限制。選擇 Shell 作為實現語言的好處在於其輕量和高效，但對於不熟悉 Shell 的開發者來說，學習曲線可能較陡。技術風險方面，未來如果技能數量大幅增加，可能需要考慮更複雜的管理方式，否則會影響使用體驗。整體來說，這個專案在與現有工具鏈的整合上相對簡單，適合在各種 Unix-like 環境中使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的技能分類和安裝步驟，讓新手能夠快速上手。安裝過程簡單，只需執行一條指令即可連結技能。雖然沒有提供詳細的使用範例，但技能的文檔清晰，能夠幫助用戶理解其功能。整體來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 技能分類清晰，便於用戶根據需求選擇。
> - 輕量級設計，無需繁重的安裝步驟。
> - 提供具體的工程技能，幫助用戶系統性解決問題。

> [!danger] 缺點
> - 社群活躍度尚待觀察，可能影響未來的更新。
> - 缺乏詳細的使用範例，對新手不夠友好。
> - 技能更新頻率不明，可能導致某些技能過時。

> [!warning] 注意事項
> - 目前只有一個開放的 Issue，社群活躍度尚待觀察。
> - 技能更新頻率不明，可能導致某些技能過時。
> - 缺乏詳細的使用範例，對新手可能不夠友好。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI agent 的開發，而本專案則專注於具體的工程技能，適合需要快速解決問題的工程師。 |
| [DenisSergeevitch/agents-best-practices](https://github.com/DenisSergeevitch/agents-best-practices) | 提供更廣泛的最佳實踐，而本專案則提供具體的技能，適合需要實用工具的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI agent 的開發，提供更廣泛的功能，而本專案則專注於具體的工程技能。 | 如果你的團隊需要一個全面的 AI agent 開發框架，而不僅僅是針對工程的技能。 | medium，因為需要重新適應不同的技能管理方式。 |
| [DenisSergeevitch/agents-best-practices](https://github.com/DenisSergeevitch/agents-best-practices) | 提供最佳實踐的指導，而本專案則提供具體的技能來解決問題。 | 如果你需要一個全面的最佳實踐指南，而不僅僅是具體的技能。 | low，因為可以根據需求選擇性整合。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **9arm-skills** | **agent-sprite-forge** | **agents-best-practices** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 AI agent 的開發，提供更廣泛的功能，而本專案則專注於具體的工程技能。 | 提供最佳實踐的指導，而本專案則提供具體的技能來解決問題。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的技能管理方式。 | low，因為可以根據需求選擇性整合。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個全面的 AI agent 開發框架，而不 | 如果你需要一個全面的最佳實踐指南，而不僅僅是具體的技能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 技能更新頻率不明，可能導致某些技能過時
  - 解法：定期檢查專案更新，確保使用最新技能
- **[HIGH]** 對於不熟悉 Shell 的使用者，學習曲線較陡
  - 解法：參考 Shell 基礎教程，提升使用者技能
- [MEDIUM] 社群活躍度低，可能影響未來的更新
  - 解法：關注專案動態，參與社群討論

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要高效的工程技能 | 非常適合 | 提供具體的技能來提升日常工作效率。 |
| 新手開發者希望學習 Shell 技能 | 適合 | 提供清晰的文檔和技能說明，降低學習門檻。 |
| 大型企業需要全面的開發工具 | 不適合 | 專案功能較為狹窄，無法滿足複雜需求。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到提升工作效率的技能，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/thananon--9arm-skills");
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
> const me = dv.page("Repos/thananon--9arm-skills");
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
| Forks | 124 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-20 |
| 建立日期 | 2026-05-20 |
| Repo 大小 | 20 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/thananon/9arm-skills) |

## 社群與生態

**社群活躍度**：社群活躍度尚待觀察，目前只有一個開放的 Issue。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-20 ~ 2026-05-20）
> **活躍天數** 1 天 · **最新 commit** Add debug-mantra skill; restore cross-references in post-mortem

## README 摘錄

> [!info]- 展開查看原文 README
> # 9arm-skills
> 
> Agent skills loaded by Claude Code.
> 
> ## Layout
> 
> Skills live under `skills/`, grouped into buckets:
> 
> - `engineering/` — daily code work
> - `productivity/` — daily non-code workflow tools
> - `misc/` — kept around but rarely used
> - `personal/` — tied to my own setup, not promoted
> - `in-progress/` — drafts not yet ready to ship
> - `deprecated/` — no longer used
> 
> Each skill is its own directory containing a `SKILL.md` (with YAML frontmatter — `name` and `description`) and any bundled scripts or reference files.
> 
> ## Install
> 
> For my own dev loop — symlink every shippable skill into `~/.claude/skills/`:
> 
> ```bash
> ./scripts/link-skills.sh
> ```
> 
> List every `SKILL.md` in the repo:
> 
> ```bash
> ./scripts/list-skills.sh
> ```
> 
> ## Reference
> 
> ### Engineering
> 
> - **[debug-mantra](./skills/engineering/debug-mantra/SKILL.md)** — Four-mantra debugging discipline: reproduce → trace the fail path → falsify the hypothesis → cross-reference every breadcrumb. Recites verbatim at session start, then applies in order before any fix.
> - **[post-mortem](./skills/engineering/post-mortem/SKILL.md)** — Write the canonical engineering record of a fixed bug — root cause, mechanism, fix, validation, how it slipped through. Engineer-audience; refuses to draft without a reliable repro, known cause, and validated fix.
> - **[scrutinize](./skills/engineering/scrutinize/SKILL.md)** — Outsider-perspective end-to-end review of a plan, PR, or code change. Questions intent (is there a simpler way?), traces the actual code path, and verifies the change does what it claims. Output is concise, actionable, with rationale.
> 
> ### Productivity
> 
> - **[management-talk](./skills/productivity/management-talk/SKILL.md)** — Rewrite engineer-to-engineer content for engineering-org leadership and shape it for the channel it's going to (JIRA, Slack, async standup, email, meeting talking-points).
> 
> ### Misc
> 
> _(none yet)_

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[自動化]] · [[程式碼生成]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[DenisSergeevitch--agents-best-practices|DenisSergeevitch/agents-best-practices]] · [[duoan--TorchCode|duoan/TorchCode]] · [[sanbuphy--claude-code-source-code|sanbuphy/claude-code-source-code]] · [[twostraws--SwiftUI-Agent-Skill|twostraws/SwiftUI-Agent-Skill]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[Doorman11991--smallcode|Doorman11991/smallcode]]

[GitHub](https://github.com/thananon/9arm-skills)

## 相關收錄

> [!note]- 直接競品（同子分類：程式碼工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "程式碼工具" AND file.name != "thananon--9arm-skills"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "thananon--9arm-skills"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Shell" AND file.name != "thananon--9arm-skills" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "thananon--9arm-skills"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","自動化","程式碼生成"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "thananon--9arm-skills" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/thananon--9arm-skills");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "thananon--9arm-skills" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "thananon" AND file.name != "thananon--9arm-skills"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/thananon--9arm-skills");
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
> const me = dv.page("Repos/thananon--9arm-skills");
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
> const me = dv.page("Repos/thananon--9arm-skills");
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
> const me = dv.page("Repos/thananon--9arm-skills");
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
> const me = dv.page("Repos/thananon--9arm-skills");
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

> **2026-05-21** — 首次收錄
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

- [[2026-05-24|2026-05-24]] — 再次上榜，1.9k stars
- [[2026-05-23|2026-05-23]] — 再次上榜，1.5k stars
- [[2026-05-22|2026-05-22]] — 再次上榜，1.2k stars
- [[2026-05-21|2026-05-21]] — 首次收錄，890 stars
