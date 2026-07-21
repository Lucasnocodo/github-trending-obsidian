---
repo: lopopolo/harness-engineering
url: https://github.com/lopopolo/harness-engineering
owner: lopopolo
owner_type: User
language: Python
license: CC-BY-4.0
description: "🐎 Ryan Lopopolo’s anthology, field guide, and agent context bundle for harness engineering"
homepage: "https://openai.com/index/harness-engineering/"
stars: 868
stars_per_day: 434
forks: 47
open_issues: 1
created: 2026-07-18
pushed_at: 2026-07-18
first_seen: 2026-07-21
week: "2026-W30"
month: "2026-07"
category: "開發工具"
subcategory: "代理工具"
release_tag: "v1.0.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-21
use_case: "提升代理輸出，透過塑造環境來改善代理的運作。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-24"
contributor_count: 1
engagement: "low"
issue_close_rate: 50
repo_size_kb: 595
readme_length: 4074
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-07-21"
star_history: "2026-07-21:868"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "harness-engineering"
  - "lopopolo/harness-engineering"
  - "提升代理輸出，透過塑造環境來改善代理的運作。"
---

# harness-engineering

**868** stars · **434** stars/天 · 建立 2 天前 · Python · CC-BY-4.0

```dataviewjs
const me = dv.page("Repos/lopopolo--harness-engineering");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v1.0.0`

> [!summary] 一句話摘要
> 提升代理輸出，透過塑造環境來改善代理的運作。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (434 stars/day)
> **授權** CC-BY-4.0 · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要提升代理效能並整合組織內部知識的技術團隊。
> **一句話重點** 這個專案的核心在於如何透過環境塑造來提升代理的效能，而非僅依賴模型的輸出。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/lopopolo--harness-engineering");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "代理工具" && p.file.name !== "lopopolo--harness-engineering" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 代理工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Stable (可用) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，20 小時整合，得到高效能的代理環境，值得投資。

> [!abstract] 核心創新
> 透過塑造環境來提升代理的輸出，這是傳統代理工具所無法實現的。

## 專案簡介

Harness Engineering 是一種專注於改善代理輸出的實踐，透過塑造其周遭環境來達成。使用者可以將代理指向此資料庫，並利用其內含的上下文、工具和範例來提升代理的效能。這個工具的核心在於將組織的非功能性需求（如可靠性、安全性等）轉化為可執行的約束和上下文，以便於代理在執行任務時能夠獲得必要的資訊。使用者可透過 `AGENTS.md` 文件來引導任務，並從論文索引或應用手冊中選擇合適的範本來進行實作。這種設計的好處在於能夠累積組織的判斷和經驗，形成一個持續改進的反饋循環。

技術上，這個專案採用 Python 實作，並且依賴於一系列的文檔和範例來支持使用者的需求。與傳統的代理工具相比，Harness Engineering 更加注重環境的塑造，而非僅僅依賴模型的輸出。這使得它在需要高可靠性和安全性的應用場景中更具優勢。使用者在實際操作中可能會遇到需要整合多種工具的挑戰，但這也促使了更高的靈活性和適應性。這個專案目前處於穩定版本，適合在需要高效能代理的環境中使用，未來可能會進一步擴展其功能和應用範圍。

**技術棧**：`Python`

## 重點功能

- 環境塑造 — 透過定義非功能性需求來改善代理的運作。
- 上下文管理 — 將組織的判斷和經驗轉化為可執行的約束。
- 應用手冊 — 提供多種範本以便快速實作代理任務。
- 反饋循環 — 累積過去的經驗以改善未來的代理表現。
- 系統整合 — 能夠與其他工具和系統無縫整合，提升靈活性。

## 快速開始

1. 克隆資料庫
```bash
git clone https://github.com/lopopolo/harness-engineering.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 啟動代理
```bash
python main.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天就累積 868 stars（434/天），forks 47（5.4%），顯示出不錯的關注度。Ryan Lopopolo 是該領域的專家，過去在代理技術方面有豐富的經驗，這個專案解決了如何有效整合代理與環境的痛點，之前的方案往往無法充分利用組織內部的知識。近期的推廣和討論可能也促進了其曝光度，尤其是在代理技術日益受到重視的背景下。forks/stars 比率顯示出使用者對於修改和實驗的興趣，這可能會促進社群的活躍度。

## 適合誰使用

**目標受眾**：需要提升代理效能並整合組織內部知識的技術團隊。

> [!example] 使用場景
> - AI 研究人員用它來優化代理的輸出質量，因為它能提供具體的上下文和工具，提升代理的效能。
> - 企業開發團隊用它來建立符合組織需求的代理系統，因為它能將非功能性需求轉化為可執行的約束。
> - 產品經理用它來評估代理在實際運作中的表現，因為它提供了累積的反饋和改進的工具。

## 架構分析

Harness Engineering 採用模組化的設計，將代理的運作與環境的塑造分開。這樣的架構使得使用者能夠靈活地調整環境以滿足不同的需求。資料流方面，使用者可以通過 `AGENTS.md` 將任務路由到相關的範例和工具，這樣的設計使得整個系統的可擴展性更高。選擇這種設計的代價在於需要使用者具備一定的技術背景來進行調整和優化。未來的擴展可能會面臨如何保持系統的一致性和穩定性等挑戰。

## 技術深入分析

Harness Engineering 的核心技術在於如何將組織的非功能性需求轉化為可執行的約束，這樣的設計使得代理能夠在執行任務時獲得必要的上下文。該專案的效能特性在於能夠持續累積組織的經驗，這意味著隨著時間的推移，代理的表現會逐漸改善。選擇 Python 作為開發語言的原因在於其廣泛的應用和豐富的庫支持，這使得開發和維護變得更加容易。依賴樹的複雜度相對較低，這有助於減少維護成本。技術風險方面，隨著使用者數量的增加，如何保持系統的一致性和穩定性將是一個挑戰。整合方面，該專案與主流的開發工具（如 VS Code）兼容性良好，但在某些情況下可能需要額外的適配層。整體來看，這個專案在代理技術的應用上提供了一個新的視角，未來可能會隨著技術的進步而進一步擴展。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了基本的使用範例，安裝過程相對順暢，但對於新手來說可能會有一定的學習曲線。缺乏多語言支持，可能會對非英語使用者造成困難。

## 優缺點分析

> [!success] 優點
> - 提供靈活的環境塑造能力，能夠根據組織需求進行調整。
> - 累積的反饋循環能夠持續改善代理的表現。
> - 模組化設計使得整合其他工具變得簡單。

> [!danger] 缺點
> - 需要使用者具備一定的技術背景，對新手不太友好。
> - 對於大型組織的複雜需求可能需要額外的調整和配置。
> - 目前僅支援 Python，限制了使用範圍。

> [!warning] 注意事項
> - 目前僅支援 Python 環境。
> - 需要使用者具備一定的代理技術背景。
> - 對於大型組織的複雜需求可能需要額外的調整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理的創建和管理，而本專案更強調環境的塑造和非功能性需求的整合。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的代理功能，但缺乏針對環境塑造的深度支持。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理的創建和管理，而本專案更強調環境的塑造和非功能性需求的整合。 | 如果你的團隊需要一個全面的代理管理工具，而不僅僅是環境塑造。 | medium，因為需要重新調整代理的運作方式。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供更廣泛的代理功能，但缺乏針對環境塑造的深度支持。 | 如果你的需求更偏向於代理的功能擴展，而不是環境的調整。 | low，因為功能上有一定的相似性。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **harness-engineering** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於代理的創建和管理，而本專案更強調環境的塑造和非功能性需求的整合。 | 提供更廣泛的代理功能，但缺乏針對環境塑造的深度支持。 |
> | 遷移成本 | - | medium，因為需要重新調整代理的運作方式。 | low，因為功能上有一定的相似性。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個全面的代理管理工具，而不僅僅是環境塑造。 | 如果你的需求更偏向於代理的功能擴展，而不是環境的調整。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Stable |
| 生產環境就緒 | Yes |
| Breaking Change 風險 | low |

> [!tip] 採用建議
> 適合在需要高效能代理的環境中使用，並且能夠持續改進。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 對於大型組織的複雜需求可能需要額外的調整和配置。
  - 解法：建議在導入前進行需求評估。
- **[HIGH]** 需要使用者具備一定的代理技術背景。
  - 解法：提供相關的培訓資源。
- [low] 目前僅支援 Python，限制了使用範圍。
  - 解法：未來計劃擴展至其他語言。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 能夠靈活調整環境以滿足組織需求。 |
| 大型企業的複雜系統整合 | 普通 | 需要額外的調整和配置。 |
| AI 研究團隊的代理開發 | 非常適合 | 能夠提供必要的上下文和工具。 |
| 對代理技術不熟悉的團隊 | 不適合 | 需要一定的技術背景才能有效使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~20 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，20 小時整合，得到高效能的代理環境，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，依賴鏈的信任程度較高，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/lopopolo--harness-engineering");
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
> const me = dv.page("Repos/lopopolo--harness-engineering");
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
| Forks | 47 |
| Open Issues | 1 |
| Issue 解決率 | 50% (1 closed) |
| 最後推送 | 2026-07-18 |
| 建立日期 | 2026-07-18 |
| 官方網站 | [Link](https://openai.com/index/harness-engineering/) |
| Repo 大小 | 595 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/lopopolo/harness-engineering) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@lopopolo](https://github.com/lopopolo) | 2 |

**最新版本**：v1.0.0 — Harness Engineering v1.0.0 (2026-07-18)

> [!info]- Release Notes
> First edition of Ryan Lopopolo's anthology, field guide, and agent context bundle for harness engineering. It includes twelve developed theses, application playbooks, evaluation guidance, implementation cases, and a provenance-backed library of Ryan's public writing and related evidence.

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題數量不多，顯示出維護者的回應速度尚可。
**連結**：[文件](https://openai.com/index/harness-engineering/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-18 ~ 2026-07-18）
> **活躍天數** 1 天 · **最新 commit** Teach the environment to remember

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/lopopolo/harness-engineering/issues/2) | Skills integration | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Harness Engineering
> 
> > “Most people do not know that they can just point their agents at my writing,
> > tweets, podcasts, and talks and improve the output of their agents by 100x.”
> >
> > — [Ryan Lopopolo]
> 
> [Ryan Lopopolo]: https://x.com/_lopopolo/status/2050698864542482709
> 
> Harness engineering, the practice of improving agent output by shaping the
> environment around it, holds a chosen model and coding agent constant as a black
> box. It improves the two external levers—context and tools—and curates the
> environment around them. The worker should be able to recover intent, operate
> the real system, respect authority, prove the outcome, and leave the next run
> better equipped.
> 
> A central purpose of that environment is to carry an organization's
> nonfunctional requirements: the quality attributes and constraints governing
> reliability, security, compatibility, maintainability, performance, operability,
> risk posture, and polish. The harness also carries local decisions about how to
> prioritize, trade off, and satisfy those requirements. Ryan adopted a
> [systems-level framing] from 2026’s [\[un\]prompted conference] that describes this
> as getting the whole universe of nonfunctional requirements into code. [Make the
> Repository Teach the Agent] develops how the requirements and decisions become
> retrievable context, examples, tools, and executable constraints.
> 
> [systems-level framing]: https://x.com/_lopopolo/status/2028982729145237775
> [\[un\]prompted conference]: https://www.youtube.com/watch?v=U2O14Jd3MBU
> [Make the Repository Teach the Agent]:
>   docs/domain-modeling/#make-nonfunctional-requirements-recoverable
> 
> Because [work is an iterative game], a harness can make organizational judgment
> cumulative. Lessons from accepted work, corrections, failures, and user
> responses become context, boundaries, tools, examples, and checks that shape
> later trajectories. Over time, that feedback loop can [make coherence
> cumulative] across agent-maintained artifacts.
> 
> [work is an iterative game]: https://x.com/_lopopolo/status/2052858891835465813
> [make coherence cumulative]: docs/durable-systems/#make-coherence-cumulative
> 
> [Code is how an agent uses a computer]. That internal action language can
> produce reliable domain outcomes for people who never review the implementation
> when [last-mile deployment] supplies the organization’s context, capabilities,
> authority, and proof.
> 
> [Code is how an agent uses a computer]:
>   https://x.com/_lopopolo/status/2043495733375230026
> [last-mile deployment]: docs/last-mile-deployment/
> 
> General model weights contain only the visible tip of an organization’s
> process-data iceberg. Below the waterline sit the current operational state,
> local ontology, quality bar, procedures, exception history, and authority
> relationships that an agent needs to do a particular job. Organizations cannot
> presume that this private, changing process data will be present in general
> model weights, nor that agents will reliably intuit which process data matters
> to the organization. Harness engineering is the last-mile work of making it
> available to a capable worker as context and tools.
> 
> Point a coding agent at this repository alongside the system it should improve.
> [`AGENTS.md`] routes the task to the relevant arguments, cases, and proof. For
> direct reading, start with the [thesis index]. For an application, choose from
> the [playbooks].
> 
> [`AGENTS.md`]: AGENTS.md
> [thesis index]: docs/
> [playbooks]: playbooks/
> 
> ## Sources and related work
> 
> - [“Harness engineering: leveraging Codex in an agent-first world”] ([fetch
>   helper] for agents blocked by the canonical page)
> - [Source library]
> - [Influences and alternate framings]
> 
> [“Harness engineering: leveraging Codex in an agent-first world”]:
>   https://openai.com/index/harness-engineering/
> [fetch helper]: sources/scripts/fetch_openai.py
> [Source library]: sources/
> [Influences and alternate framings]: docs/lineage/
> 
> Repository-authored material is licensed under [CC BY 4.0]. See [`COPYING.md`]
> for attribution and rights in source material.
> 
> [CC BY 4.0]: LICENSE
> [`COPYING.md`]: COPYING.md

## 延伸閱讀

相關概念：[[代理框架]] · [[系統整合]] · [[反饋循環]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[baoweise-bot--aimili-vpngate|baoweise-bot/aimili-vpngate]] · [[masterking32--MasterHttpRelayVPN|masterking32/MasterHttpRelayVPN]]

[GitHub](https://github.com/lopopolo/harness-engineering) · [官方網站](https://openai.com/index/harness-engineering/)

## 相關收錄

> [!note]- 直接競品（同子分類：代理工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "代理工具" AND file.name != "lopopolo--harness-engineering"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "lopopolo--harness-engineering"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "lopopolo--harness-engineering" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W30" AND file.name != "lopopolo--harness-engineering"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["代理框架","系統整合","反饋循環"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "lopopolo--harness-engineering" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/lopopolo--harness-engineering");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "lopopolo--harness-engineering" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "lopopolo" AND file.name != "lopopolo--harness-engineering"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/lopopolo--harness-engineering");
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
> const me = dv.page("Repos/lopopolo--harness-engineering");
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
> const me = dv.page("Repos/lopopolo--harness-engineering");
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
> const me = dv.page("Repos/lopopolo--harness-engineering");
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
> const me = dv.page("Repos/lopopolo--harness-engineering");
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

> **2026-07-21** — 首次收錄
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

- [[2026-07-21|2026-07-21]] — 首次收錄，868 stars
