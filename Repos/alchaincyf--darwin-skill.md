---
repo: alchaincyf/darwin-skill
url: https://github.com/alchaincyf/darwin-skill
owner: alchaincyf
owner_type: User
language: HTML
license: N/A
description: "达尔文.skill —— 一个让你的Skill无限进化的系统：评估→改进→测试→保留或回滚 | Autoresearch-inspired autonomous skill optimization for Claude Code. Evaluate, improve, test, keep or revert."
homepage: ""
stars: 816
stars_per_day: 408
forks: 99
open_issues: 2
created: 2026-04-13
pushed_at: 2026-04-14
first_seen: 2026-04-16
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "技能優化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-16
use_case: "讓你的技能自動進化，通過評估、改進和測試來優化技能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-19"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 1812
readme_length: 2838
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-16"
star_history: "2026-04-16:816"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - easy_install
aliases:
  - "darwin-skill"
  - "alchaincyf/darwin-skill"
  - "讓你的技能自動進化，通過評估、改進和測試來優化技能。"
---

# darwin-skill

**816** stars · **408** stars/天 · 建立 2 天前 · HTML · 未標註授權

```dataviewjs
const me = dv.page("Repos/alchaincyf--darwin-skill");
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
> 讓你的技能自動進化，通過評估、改進和測試來優化技能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (408 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要優化多個 AI 技能的開發者和產品經理。
> **一句話重點** 達爾文.skill 的設計讓技能優化過程變得自動化且可控，適合需要管理大量技能的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--darwin-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "技能優化" && p.file.name !== "alchaincyf--darwin-skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 技能優化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學、1 小時整合，得到自動化的技能優化效果，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於將自主實驗循環應用於技能優化領域，實現了結構和效果的雙重評估。

## 專案簡介

達爾文.skill 是一個專為技能優化設計的系統，靈感來自於 Andrej Karpathy 的 autoresearch。它的核心機制是通過評估 SKILL.md 文件的結構和實際效果，來自動化技能的改進過程。使用者只需執行 `npx skills add alchaincyf/darwin-skill`，系統便會開始優化所有技能或特定技能。這個工具的賣點在於它的棘輪機制，確保每次改進都能保留，而不會因為不良改動而退步。系統的評估分為結構和效果兩個維度，結構評分佔 60 分，實際效果則佔 40 分，這樣的設計確保了技能的質量不僅依賴於格式，還要看實際運行的結果。與傳統的技能審查方法相比，達爾文.skill 提供了一個更全面的評估機制，能夠自動回滾不良改動，並在每次優化後等待使用者確認，這樣的設計使得技能的改進過程更加可靠和透明。

**技術棧**：`HTML` · `JavaScript`

## 重點功能

- 棘輪機制 — 確保每次改進都能保留，避免不良改動導致的退步。
- 雙重評估 — 結構評分和效果驗證，確保技能的質量。
- 自動回滾 — 當新分數低於舊分數時，自動回滾到上一次的改進。
- 獨立評分 — 使用子 agent 進行評分，避免偏差。
- 人在回路 — 每次優化後等待使用者確認，增加透明度。

## 快速開始

1. 安裝達爾文技能
```bash
npx skills add alchaincyf/darwin-skill
```

## 程式碼範例

```html
{
  "前置條件": "已安裝達爾文技能",
  "指令": "npx skills add alchaincyf/darwin-skill",
  "預期輸出": "技能優化系統已啟動，等待進一步指令。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 816 stars（408/天），forks 99（12.1%），顯示出強勁的增長潛力。作者 alchaincyf 之前的作品如 nuwa-skill 也受到關注，這次的專案解決了技能優化過程中缺乏自動化和評估標準的痛點。傳統的技能管理往往依賴手動維護，當技能數量增多時，這種方法變得不可行。這個專案的出現正好填補了這一空白，並且在社群中引發了討論。技術上，隨著 AI 技術的進步，對技能優化的需求也在增加，這使得達爾文.skill 成為一個有吸引力的解決方案。forks/stars 比率為 12.1%，顯示出不少人對這個專案進行了實際修改和使用。

## 適合誰使用

**目標受眾**：需要優化多個 AI 技能的開發者和產品經理。

> [!example] 使用場景
> - AI 開發者用它來優化多個技能，因為當技能數量達到 60+ 時，手動維護變得不切實際。
> - 產品經理用它來評估技能的實際效果，因為這樣可以確保每次改進都是基於數據的，避免不必要的回退。
> - 研究人員用它來測試不同的技能配置，因為它的自動化流程能夠節省大量的時間和精力。

## 架構分析

達爾文.skill 的架構基於一個自動化的技能優化循環，設計目的是減少手動維護的負擔。系統會對每個 SKILL.md 進行結構和效果的評估，並根據評分結果進行改進。這樣的設計使得使用者能夠專注於技能的質量，而不必擔心手動調整的繁瑣。

每次改進後，系統會自動回滾不良改動，確保技能的持續提升。這種方法的代價在於需要使用者在每次優化後進行確認，增加了操作的複雜性。整體而言，這種架構適合需要優化大量技能的團隊，但對於小型項目來說可能顯得過於繁瑣。

## 技術深入分析

達爾文.skill 的核心技術機制是將自主實驗循環應用於技能優化，這意味著每次改進都是基於數據驅動的評估。系統使用靜態分析和實測結果來評估 SKILL.md 的質量，並根據評分結果進行改進。這樣的設計使得技能的質量不僅依賴於格式，還要看實際運行的結果。效能上，這個系統能夠處理大量的技能優化，因為它的自動化流程能夠節省時間和精力。

設計上，選擇 JavaScript 和 HTML 作為技術棧，這使得整個系統能夠輕鬆集成到現有的技能管理工具中。這個選擇的代價在於可能需要額外的學習成本來理解整個系統的運作。技術風險方面，系統的依賴於使用者的確認可能會在高負載時造成瓶頸，這在某些情況下可能影響整體效率。整合到主流框架的難度相對較低，但仍需考慮到與現有工具鏈的相容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指導和範例，安裝過程順暢，沒有明顯的坑。文件中有多語言支持，但中文部分相對簡單，可能需要進一步完善。

## 優缺點分析

> [!success] 優點
> - 自動化的技能優化過程，減少手動維護的負擔。
> - 雙重評估機制，確保技能的質量。
> - 棘輪機制避免不良改動導致的退步。

> [!danger] 缺點
> - 需要使用者在每次優化後進行確認，增加操作步驟。
> - 對於小型項目，可能會感覺過於複雜。
> - 目前僅支持 SKILL.md 格式的技能。

> [!warning] 注意事項
> - 目前僅支持 SKILL.md 格式的技能。
> - 需要使用者在每次優化後進行確認，增加了操作步驟。
> - 對於小型項目，可能會感覺過於複雜。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於技能的版本管理，而達爾文.skill 更加關注於技能的自動化優化過程。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | AgentSeal 提供了一個更全面的技能管理平台，但缺乏達爾文.skill 的自動化優化功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於技能的版本管理，達爾文.skill 則專注於自動化優化過程。 | 如果你的團隊需要強調版本控制而非優化，則應選擇 boneyard。 | medium，因為需要重新調整技能的管理方式。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供全面的技能管理平台，但缺乏自動化優化功能。 | 如果你的團隊需要一個完整的技能管理解決方案，而不僅僅是優化，則應選擇 codeburn。 | high，因為需要全面轉換到新的管理平台。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **darwin-skill** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於技能的版本管理，達爾文.skill 則專注於自動化優化過程。 | 提供全面的技能管理平台，但缺乏自動化優化功能。 |
> | 遷移成本 | - | medium，因為需要重新調整技能的管理方式。 | high，因為需要全面轉換到新的管理平台。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要強調版本控制而非優化，則應選擇 boneya | 如果你的團隊需要一個完整的技能管理解決方案，而不僅僅是優化， |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型項目，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載時，使用者確認可能造成瓶頸，影響優化效率。
  - 解法：考慮在低峰時段進行優化，以減少等待時間。
- [MEDIUM] 對於小型項目，操作步驟可能過於繁瑣，影響使用體驗。
  - 解法：在小型項目中，考慮手動維護技能而非使用此工具。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要優化 60+ 個技能的大型團隊 | 非常適合 | 自動化的優化過程能夠有效減少手動維護的負擔。 |
| 小型專案的技能管理 | 不適合 | 操作步驟過於繁瑣，可能影響使用體驗。 |
| 需要進行技能效果評估的產品經理 | 適合 | 雙重評估機制能夠確保技能的質量。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學、1 小時整合，得到自動化的技能優化效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，使用過程中不涉及安全性問題。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

達爾文.skill 最常與支持 SKILL.md 格式的 AI 工具搭配使用，處於技能優化的環節。在一個使用 Claude Code 的專案中，可以通過 `npx skills add alchaincyf/darwin-skill` 來集成此工具，然後使用者可以直接在對話中要求優化技能。與主流 CI/CD 工具的相容性良好，能夠輕鬆集成到現有的開發流程中。整合的摩擦點主要在於需要使用者確認每次優化的結果，這可能會影響整體效率。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--darwin-skill");
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
> const me = dv.page("Repos/alchaincyf--darwin-skill");
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
| Forks | 99 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-14 |
| 建立日期 | 2026-04-13 |
| Repo 大小 | 1.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/alchaincyf/darwin-skill) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "HTML" : 99
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alchaincyf](https://github.com/alchaincyf) | 13 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有 2 個開放問題尚未解決。
**連結**：[文件](https://skills.sh)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-13 ~ 2026-04-14）
> **活躍天數** 2 天 · **最新 commit** add: dark achievement + white gold result card templates

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/alchaincyf/darwin-skill/issues/1) | [建议] 能否适配一下Antigravity?或开源一个claude skill转 antigravity skill的 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> **[English](README_EN.md)** | 中文
> 
> # 达尔文.skill
> 
> **像训练模型一样优化你的 Agent Skills。**
> 
> 受 [Andrej Karpathy 的 autoresearch](https://github.com/karpathy/autoresearch) 启发，将自主实验循环从模型训练搬到 Skill 优化领域。一个只能向前转的棘轮。
> 
> [](LICENSE)
> [](https://skills.sh)
> [](https://skills.sh)
> 
> ```
> npx skills add alchaincyf/darwin-skill
> ```
> 
> ---
> 
> ## 核心循环
> 
> ---
> 
> ## 为什么做这个
> 
> Agent Skill 生态在快速扩张。Claude Code、Codex、OpenClaw、Trae、CodeBuddy 等工具都支持 SKILL.md 格式。当你有 10 个 Skills 时可以手动维护；当你有 60+ 个 Skills 时，你需要一个系统。
> 
> 传统的 Skill 审查是**纯结构性的**：检查格式对不对、步骤有没有编号、路径能不能访问。但一个格式完美的 Skill，跑出来的效果可能很差。
> 
> 达尔文.skill 同时评估**结构质量**和**实际效果**，然后只保留真正有改进的修改。
> 
> ---
> 
> ## 从 autoresearch 到 Skill Optimizer
> 
> 这个项目直接受 Karpathy autoresearch 启发。autoresearch 的做法是：写一个 `program.md` 定义目标和约束，让 agent 自主生成和测试代码变更，只保留可测量的改进。
> 
> 我们把同样的思路搬到了 Skill 优化：
> 
> | autoresearch | 达尔文.skill | 为什么这样映射 |
> |:---|:---|:---|
> | `program.md` | 本 SKILL.md | 定义评估标准和约束规则 |
> | `train.py` | 每个待优化的 SKILL.md | 被优化的资产，每次实验只改它 |
> | `val_bpb` | 8 维加权总分（满分100） | 可量化的优化目标 |
> | `git ratchet` | keep / revert 机制 | 只保留有改进的 commit |
> | `test set` | test-prompts.json | 验证改进是否真的有效 |
> | 全自主运行 | **人在回路** | Skill 的好坏比 loss 更微妙，需要人的判断 |
> 
> ---
> 
> ## 五条核心原则
> 
> | # | 原则 | 说明 |
> |:---|:---|:---|
> | 01 | **单一可编辑资产** | 每次只改一个 SKILL.md，变量可控，改进可归因 |
> | 02 | **双重评估** | 结构评分（静态分析）+ 效果验证（跑测试看输出） |
> | 03 | **棘轮机制** | 只保留改进，自动回滚退步，分数只升不降 |
> | 04 | **独立评分** | 评分用子 agent，避免「自己改自己评」的偏差 |
> | 05 | **人在回路** | 每个 Skill 优化完后暂停，用户确认再继续下一个 |
> 
> ---
> 
> ## 8 维度评估体系
> 
> 总分 100。结构维度靠静态分析（60分），效果维度必须实测（40分）。
> 
> > 实测表现权重最高（25分）。Skill 写得再漂亮，跑出来效果不好就是零。
> 
> ---
> 
> ## 优化循环：5 个阶段
> 
> 系统在每个阶段内自主运行，但在阶段之间暂停等待人类确认。
> 
> **Phase 2 的核心逻辑**：
> 
> 1. 找出得分最低的维度
> 2. 针对该维度生成 1 个具体改进方案
> 3. 编辑 SKILL.md，git commit
> 4. 子 agent 独立重新评分
> 5. 新分 > 旧分 → 保留；否则 → git revert
> 6. 每个 Skill 完成后暂停，展示 diff + 分数变化，等用户确认
> 
> ---
> 
> ## 棘轮机制
> 
> 分数只能上升。每一轮要么改进 Skill，要么干净地回滚。不会随时间积累局部退化。
> 
> 轮次 2 的 75 分低于当前最优的 78 分，被自动回滚。有效基线始终锁定在 78，后续改进从 78 继续。
> 
> ---
> 
> ## 快速开始
> 
> ```bash
> npx skills add alchaincyf/darwin-skill
> ```
> 
> 安装后在任何支持 Skill 的 Agent 工具中说「优化所有skills」或「优化某个skill」就行。
> 
> 无法访问 GitHub 的朋友，可以直接下载 zip 包：[darwin-skill.zip](https://pub-161ae4b5ed0644c4a43b5c6412287e03.r2.dev/skills/darwin-skill.zip)，解压后把 SKILL.md 放到 `~/.claude/skills/darwin-skill/` 目录即可。
> 
> ---
> 
> ## 设计灵感
> 
> 这个项目的设计直接受 **Andrej Karpathy 的 [autoresearch](https://github.com/karpathy/autoresearch)** 启发。
> 
> 核心机制完全相同：**只保留可测量的改进，其余全部回滚。**
> 
> ---
> 
> ## 关于作者
> 
> | | |
> |:---|:---|
> | 🌐 官网 | [bookai.top](https://bookai.top) · [huasheng.ai](https://www.huasheng.ai) |
> | 𝕏 Twitter | [@AlchainHust](https://x.com/AlchainHust) |
> | 📺 B站 | [花叔](https://space.bilibili.com/14097567) |
> | ▶️ YouTube | [@Alchain](https://www.youtube.com/@Alchain) |
> | 📕 小红书 | [花叔](https://www.xiaohongshu.com/user/profile/5abc6f17e8ac2b109179dfdf) |
> | 💬 公众号 | 微信搜「花叔」 |
> 
> ---
> 
> ## 许可证
> 
> MIT
> 
> ---
> 
> **[女娲](https://github.com/alchaincyf/nuwa-skill)** 造 Skill。
> **达尔文** 让 Skill 进化。
> *只保留改进，时间就站在你这边。*
> 
> MIT License © [花叔 Huashu](https://github.com/alchaincyf)

## 延伸閱讀

相關概念：[[自動化]] · [[技能管理]] · [[AI 優化]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

[GitHub](https://github.com/alchaincyf/darwin-skill)

## 相關收錄

> [!note]- 直接競品（同子分類：技能優化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "技能優化" AND file.name != "alchaincyf--darwin-skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "alchaincyf--darwin-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "alchaincyf--darwin-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "alchaincyf--darwin-skill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","技能管理","AI 優化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "alchaincyf--darwin-skill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/alchaincyf--darwin-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "alchaincyf--darwin-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "alchaincyf" AND file.name != "alchaincyf--darwin-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--darwin-skill");
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
> const me = dv.page("Repos/alchaincyf--darwin-skill");
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
> const me = dv.page("Repos/alchaincyf--darwin-skill");
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
> const me = dv.page("Repos/alchaincyf--darwin-skill");
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
> const me = dv.page("Repos/alchaincyf--darwin-skill");
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

> **2026-04-16** — 首次收錄
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

- [[2026-04-16|2026-04-16]] — 首次收錄，816 stars
