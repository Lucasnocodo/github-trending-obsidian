---
repo: alchaincyf/nuwa-skill
url: https://github.com/alchaincyf/nuwa-skill
owner: alchaincyf
owner_type: User
language: Python
license: MIT
description: "你想蒸馏的下一个员工，何必是同事。蒸馏任何人的思维方式——心智模型、决策启发式、表达DNA。Distill how anyone thinks."
homepage: ""
stars: 12522
stars_per_day: 963
forks: 2090
open_issues: 21
created: 2026-04-05
pushed_at: 2026-04-13
first_seen: 2026-04-09
week: "2026-W15"
month: "2026-04"
category: "AI/ML"
subcategory: "NLP"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-09
use_case: "讓你蒸餾任何人的思維方式，從名人中提取心智模型和決策啟發式。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-04-15"
contributor_count: 1
engagement: "medium"
issue_close_rate: 40
repo_size_kb: 18096
readme_length: 8616
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-09"
star_history: "2026-04-09:3895,2026-04-09:3932,2026-04-10:5526,2026-04-10:5558,2026-04-11:6623,2026-04-11:6627,2026-04-12:7442,2026-04-12:7453,2026-04-13:8592,2026-04-14:9697,2026-04-15:10596,2026-04-16:11264,2026-04-17:11800,2026-04-18:12263,2026-04-19:12522"
tags:
  - github
  - "category/ai_ml"
  - "lang/python"
  - easy_install
aliases:
  - "nuwa-skill"
  - "alchaincyf/nuwa-skill"
  - "讓你蒸餾任何人的思維方式，從名人中提取心智模型和決策啟發式。"
---

# nuwa-skill

**12.5k** stars · **963** stars/天 · 建立 13 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/alchaincyf--nuwa-skill");
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
> 讓你蒸餾任何人的思維方式，從名人中提取心智模型和決策啟發式。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (963 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 5 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速獲取名人思維和決策框架的專業人士或學生。
> **一句話重點** Nuwa 不僅是蒸餾名人的語錄，而是提取他們的認知操作系統，讓用戶能夠從中獲得深刻的見解。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--nuwa-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "NLP" && p.file.name !== "alchaincyf--nuwa-skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 NLP 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習、1 小時整合，得到快速蒸餾名人思維的效果，值得一試。

> [!abstract] 核心創新
> Nuwa 提供了一種全新的方式來蒸餾名人的思維方式，並將其轉化為可操作的技能。

## 專案簡介

Nuwa 是一個 AI 技能，旨在蒸餾名人的思維方式，讓用戶能夠從像喬布斯、馬斯克等人的認知框架中獲得見解。用戶只需輸入一個名字，Nuwa 會自動進行調研，提取該人物的心智模型、決策啟發式和表達風格，並生成可用的技能。這個過程包括六路並行的資料收集，涵蓋著作、播客、社交媒體等多個來源，並經過三重驗證以確保提取的模型具有預測性和排他性。核心賣點在於它不僅僅是復述名人的語錄，而是提取他們的認知操作系統。安裝過程簡單，只需執行 `npx skills add alchaincyf/nuwa-skill`，然後即可開始使用。

技術上，Nuwa 使用 Python 和 Shell，依賴於多個資料來源進行資料蒐集和模型構建，這使得它在理解名人思維方面具有獨特的優勢。相較於其他類似工具，Nuwa 不僅能蒸餾同事，還能針對各領域的頂尖人物進行深度分析，這在市場上是獨一無二的。使用者可以透過簡單的指令來獲得名人的觀點，這對於需要快速獲取專業意見的使用者來說非常有價值。這個工具的設計考量了使用者的需求，並提供了清晰的使用範例，讓新手也能輕鬆上手。

**技術棧**：`Python` · `Shell`

## 重點功能

- 六路並行資料收集 — 同時從著作、播客、社交媒體等多個來源提取資料。
- 三重驗證提煉 — 確保提取的心智模型具有預測性和排他性。
- 可安裝的技能 — 透過 `npx skills add alchaincyf/nuwa-skill` 一鍵安裝使用。
- 多位名人技能 — 已蒸餾多位名人，提供多種視角可供選擇。
- 透明的調研過程 — 每個技能的調研過程公開，使用者可查閱。

## 快速開始

1. 安裝 Nuwa 技能
```bash
npx skills add alchaincyf/nuwa-skill
```
2. 使用技能蒸餾名人
```bash
> 蒸餾一個保羅·格雷厄姆
```
3. 調用蒸餾的視角
```bash
> 用芒格的視角幫我分析這個投資決策
```

## 程式碼範例

```python
{
  "前置條件": "已安裝 Nuwa 技能",
  "指令": "> 蒸餾一個保羅·格雷厄姆",
  "預期輸出": "提取保羅·格雷厄姆的心智模型和決策啟發式。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天就累積 12522 stars（963/天），forks 2090（16.7%），顯示出強勁的增長潛力。作者 alchaincyf 是一位獨立開發者，之前的作品同樣受到了廣泛關注，這使得他在社群中建立了良好的聲譽。這個工具解決了蒸餾名人思維的需求，之前的方案往往無法提供如此深入的認知提取。近期的社群討論和使用案例也進一步推動了這個專案的熱度。技術上，Nuwa 的設計使其能夠有效整合多種資料來源，這在當前的 AI 生態中是非常重要的。forks/stars 比率為 16.7%，顯示出許多人在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要快速獲取名人思維和決策框架的專業人士或學生。

> [!example] 使用場景
> - 創業者用它來從喬布斯的視角分析產品策略，因為這能幫助他們理解如何聚焦於核心價值。
> - 市場營銷專家用它來模擬馬斯克的思維，優化獲客成本，因為馬斯克的決策框架能提供獨特的見解。
> - 學生用它來從費曼的角度學習科學概念，因為費曼的教學方法能幫助他們更好地理解複雜的主題。

## 架構分析

Nuwa 的架構設計為六路並行資料收集，這樣可以在短時間內獲取大量資料。每個資料來源的資料都經過三重驗證，確保提取的心智模型具備預測性和排他性。這樣的設計使得 Nuwa 能夠高效地將名人的思維方式轉化為可用的技能，並且在資料收集過程中，能夠快速迭代和更新。

選擇 Python 作為主要開發語言，使得整個系統能夠快速開發和部署，並且易於擴展。這種架構的代價在於需要持續的資料更新和維護，以確保提取的模型不會過時。整體而言，這樣的設計使得 Nuwa 在面對多變的資料環境時，能夠保持靈活性和適應性。

## 技術深入分析

Nuwa 的核心技術機制在於其資料收集和心智模型提煉的過程。它使用六路並行的資料收集策略，從多個來源獲取資料，這樣能夠在短時間內獲得大量的背景資訊。每個資料來源的資料都經過三重驗證，確保提取的心智模型具備預測性和排他性，這樣的設計使得 Nuwa 能夠高效地將名人的思維方式轉化為可用的技能。技術上，選擇 Python 作為主要開發語言，這使得整個系統能夠快速開發和部署，並且易於擴展。這樣的選擇雖然提高了開發效率，但也可能在高負載情況下造成性能瓶頸。Nuwa 的設計考量了使用者的需求，並提供了清晰的使用範例，讓新手也能輕鬆上手。整體而言，Nuwa 在面對多變的資料環境時，能夠保持靈活性和適應性，並且能夠提供高質量的思維提取服務。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含多種語言版本，安裝過程順暢，無明顯坑。提供了良好的入門指導，讓新手能夠快速上手，文件中有完整的使用範例，適合花 30 分鐘內跑起來。

## 優缺點分析

> [!success] 優點
> - 快速蒸餾名人思維，節省時間。
> - 提供多種名人視角，增加分析深度。
> - 簡單易用，安裝和使用過程流暢。

> [!danger] 缺點
> - 無法捕捉名人的直覺和靈感。
> - 依賴於公開資料，可能存在偏差。
> - 蒸餾結果的質量受限於資料的完整性。

> [!warning] 注意事項
> - 無法蒸餾直覺或靈感。
> - 只能基於公開信息進行蒸餾。
> - 不支援即時更新，僅基於調研時間的快照。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [titanwings/colleague-skill](https://github.com/titanwings/colleague-skill) | 專注於蒸餾同事的思維方式，無法針對名人進行深度分析。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的思維提取功能，但缺乏多元化的名人資料來源。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [titanwings/colleague-skill](https://github.com/titanwings/colleague-skill) | 專注於蒸餾同事的思維方式，無法針對名人進行深度分析。 | 如果你的需求是蒸餾身邊同事的思維，而不是名人的話，這個工具會更合適。 | low，因為兩者的使用方式相似。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的思維提取功能，但缺乏多元化的名人資料來源。 | 如果你需要一個更簡單的工具，並且不需要多元的名人視角，這個工具會更適合。 | medium，因為可能需要調整使用習慣。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **nuwa-skill** | **colleague-skill** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於蒸餾同事的思維方式，無法針對名人進行深度分析。 | 提供類似的思維提取功能，但缺乏多元化的名人資料來源。 |
> | 遷移成本 | - | low，因為兩者的使用方式相似。 | medium，因為可能需要調整使用習慣。 |
> | 適用場景 | 主要場景 | 如果你的需求是蒸餾身邊同事的思維，而不是名人的話，這個工具會 | 如果你需要一個更簡單的工具，並且不需要多元的名人視角，這個工 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 蒸餾結果可能受限於公開資料的完整性，導致偏差
  - 解法：使用者需自行判斷蒸餾結果的可靠性
- [MEDIUM] 無法捕捉名人的直覺或靈感，可能導致分析不夠全面
  - 解法：搭配其他工具使用，以獲得更全面的見解
- [MEDIUM] 資料更新頻率可能影響蒸餾結果的時效性
  - 解法：定期檢查更新，確保使用最新版本的技能

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 創業團隊需要快速獲取名人思維 | 非常適合 | 能夠提供多位名人的視角，幫助團隊做出更好的決策。 |
| 學術研究需要深入分析名人思維 | 適合 | 提供的資料來源和心智模型能夠支持深入研究。 |
| 個人學習者想要了解名人的思維方式 | 非常適合 | 簡單易用，能夠快速獲得名人的見解。 |
| 大型企業需要蒸餾內部同事的思維 | 不適合 | 主要針對名人，無法有效蒸餾同事的思維方式。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習、1 小時整合，得到快速蒸餾名人思維的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：此工具不需要高權限，僅存取公開資料，不會存取敏感資訊。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--nuwa-skill");
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
> const me = dv.page("Repos/alchaincyf--nuwa-skill");
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
| Forks | 2.1k |
| Open Issues | 21 |
| Issue 解決率 | 40% (14 closed) |
| 最後推送 | 2026-04-13 |
| 建立日期 | 2026-04-05 |
| Repo 大小 | 17.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/alchaincyf/nuwa-skill) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 89
>     "Shell" : 11
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alchaincyf](https://github.com/alchaincyf) | 23 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應使用者問題。
**連結**：[文件](https://github.com/alchaincyf/nuwa-skill)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-07 ~ 2026-04-13）
> **活躍天數** 6 天 · **最新 commit** add: 达尔文.skill promotion with banner and install command

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#35](https://github.com/alchaincyf/nuwa-skill/issues/35) | 受大佬启发做了一个qiuyuan-skill | 0 | 0 |
> | [#32](https://github.com/alchaincyf/nuwa-skill/issues/32) | 点赞 + skill无法npx安装可以本地安装吗 | 0 | 0 |
> | [#31](https://github.com/alchaincyf/nuwa-skill/issues/31) | 想问一下你们的加速器还能用嘛？ | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 女娲.skill
> 
> > *「你想蒸馏的下一个员工，何必是同事」*
> 
> [](LICENSE)
> [](https://claude.ai/code)
> [](https://skills.sh)
> 
> **女娲帮你蒸馏任何人的思维方式，让乔布斯、马斯克、芒格、费曼都给你打工。**
> 
> [同事.skill](https://github.com/titanwings/colleague-skill) 证明了蒸馏一个人是可行的。
> 那何必蒸馏同事？去蒸馏乔布斯、芒格、费曼、马斯克。
> 只需输入一个名字，女娲自动完成调研、提炼、验证全流程。
> 
> [看效果](#效果示例) · [安装](#安装) · [它蒸馏了什么](#女娲蒸馏了什么) · [工作原理](#工作原理)
> 
> **其他语言 / Other Languages:**
> 
> [English](README_EN.md) · [日本語](README_JA.md) · [한국어](README_KO.md) · [Español](README_ES.md)
> 
> [](https://star-history.com/#alchaincyf/nuwa-skill&Date)
> 
> ---
> 
> ## 效果示例
> 
> ```
> 用户      ❯ 我同时想做自媒体、写书、做独立开发，精力完全不够
> 
> Naval     ❯ 你列了三个欲望。每个欲望都是你跟不快乐签的一份合同。
>             不是精力不够，是合同太多。
>             
>             问你自己：哪一个做起来你会忘记时间？
>             那个就是你的特定知识所在。
>             
>             不是三选一。是先一，再一，再一。
>             串行复利，不是并行内耗。
> ```
> 
> ```
> 用户      ❯ 我们的SaaS产品获客成本太高了
> 
> 马斯克     ❯ 先别想怎么降。先算物理极限。
>             获客的最小必要动作是什么？用户从知道你到付费，
>             信息传递的理论最短路径是什么？
>             
>             现在你的实际路径是理论路径的几倍？
>             如果超过3倍，中间一定有可以砍掉的步骤。
>             不是优化漏斗，是质疑漏斗本身该不该存在。
> ```
> 
> 再来一个大家更熟悉的。蒸馏乔布斯之后，问他「OpenAI和Anthropic谁的方向对」：
> 
> ```
> 用户      ❯ OpenAI和Anthropic谁的方向是对的？
> 
> 乔布斯    ❯ 你问错了。这不是一场关于方向的竞赛。
>             这是一场关于品味的竞赛。
> 
>             OpenAI像1985年的微软。什么都做，什么都要赢。
>             这种策略能赢市场份额。Bill Gates就是这么赢的。
>             问题是——当你什么都做的时候，你不可能每件事都做到
>             insanely great。
> 
>             Anthropic更像早期的Apple。聚焦。
>             Focus means saying no to a hundred good ideas.
> 
>             但两家公司都犯了一个我绝对不会犯的错误——
>             他们不控制硬件。
> 
>             最终赢的可能是同时控制芯片、模型和用户界面的人。
>             你知道现在谁在同时做这三件事吗？Apple.
> ```
> 
> 蒸馏张雪峰之后：
> 
> ```
> 用户      ❯ 家里条件一般，孩子想学金融，去不了顶尖学校，该不该报？
> 
> 张雪峰    ❯ 千万别报。我说过多少遍了，金融不是你学出来的，金融是
>             你爹妈给你带出来的。顶尖学校的金融，人家同学是行长的
>             儿子、基金经理的女儿，人脉就是资源。你普通家庭去个普通
>             学校学金融，毕业出来干什么？卖保险、跑银行柜台、做电销。
>             先谋生再谋爱，家里没矿就选技术类专业，学个硬本事，靠
>             自己吃饭。金融这碗饭，不是谁都端得起的。
> ```
> 
> 这不是角色扮演。乔布斯用的是「聚焦即说不」和「端到端控制」心智模型，Naval用的是「欲望即合同」，马斯克用的是「渐近极限法」，张雪峰用的是「ROI教育观」和「阶层流动现实主义」。**它们不是在复读名人语录，是在用名人的认知框架帮你分析。**
> 
> ---
> 
> ## 安装
> 
> ```bash
> npx skills add alchaincyf/nuwa-skill
> ```
> 
> 然后在 Claude Code 里：
> 
> ```
> > 蒸馏一个保罗·格雷厄姆
> > 造一个张小龙的视角Skill
> > 帮我做一个段永平的Skill
> ```
> 
> 造完之后直接调用：
> 
> ```
> > 用芒格的视角帮我分析这个投资决策
> > 费曼会怎么解释量子计算？
> > 切换到Naval，我在纠结三件事
> ```
> 
> ---
> 
> ## 女娲蒸馏了什么
> 
> 蒸馏各领域最强的人，需要提取比日常工作习惯更深的东西。女娲提取五层：
> 
> | 层次 | 说明 |
> |---|---|
> | **怎么说话** | 表达DNA——语气、节奏、用词偏好 |
> | **怎么想** | 心智模型、认知框架 |
> | **怎么判断** | 决策启发式 |
> | **什么不做** | 反模式、价值观底线 |
> | **知道局限** | 诚实边界 |
> 
> 工作习惯可以靠流程文档传递，但让芒格和马斯克面对同一个问题做出不同判断的，是认知框架。女娲提取的是认知操作系统。
> 
> ### 诚实边界
> 
> 每个Skill都明确标注做不到什么：
> 
> - 蒸馏不了直觉——框架能提取，灵感不能
> - 捕捉不了突变——截止到调研时间的快照
> - 公开表达 ≠ 真实想法——只能基于公开信息
> 
> **一个不告诉你局限在哪的Skill，不值得信任。**
> 
> ---
> 
> ## 已蒸馏人物
> 
> 女娲已蒸馏了13位人物 + 1个主题。每个都是独立的、可直接安装使用的Skill：
> 
> ### 人物Skill
> 
> | 人物 | 领域 | 独立仓库 | 一键安装 |
> |------|------|---------|---------|
> | 🔥 **Paul Graham** | 创业/写作/产品/人生哲学 | [paul-graham-skill](https://github.com/alchaincyf/paul-graham-skill) | `npx skills add alchaincyf/paul-graham-skill` |
> | 🔥 **张一鸣** | 产品/组织/全球化/人才 | [zhang-yiming-skill](https://github.com/alchaincyf/zhang-yiming-skill) | `npx skills add alchaincyf/zhang-yiming-skill` |
> | 🔥 **Karpathy** | AI/工程/教育/开源 | [karpathy-skill](https://github.com/alchaincyf/karpathy-skill) | `npx skills add alchaincyf/karpathy-skill` |
> | 🔥 **Ilya Sutskever** | AI安全/scaling/研究品味 | [ilya-sutskever-skill](https://github.com/alchaincyf/ilya-sutskever-skill) | `npx skills add alchaincyf/ilya-sutskever-skill` |
> | 🔥 **MrBeast** | 内容创造/YouTube方法论 | [mrbeast-skill](https://github.com/alchaincyf/mrbeast-skill) | `npx skills add alchaincyf/mrbeast-skill` |
> | 🔥 **特朗普** | 谈判/权力/传播/行为预判 | [trump-skill](https://github.com/alchaincyf/trump-skill) | `npx skills add alchaincyf/trump-skill` |
> | ⭐ **乔布斯** | 产品/设计/战略 | [steve-jobs-skill](https://github.com/alchaincyf/steve-jobs-skill) | `npx skills add alchaincyf/steve-jobs-skill` |
> | **马斯克** | 工程/成本/第一性原理 | [elon-musk-skill](https://github.com/alchaincyf/elon-musk-skill) | `npx skills add alchaincyf/elon-musk-skill` |
> | **芒格** | 投资/多元思维/逆向思考 | [munger-skill](https://github.com/alchaincyf/munger-skill) | `npx skills add alchaincyf/munger-skill` |
> | **费曼** | 学习/教学/科学思维 | [feynman-skill](https://github.com/alchaincyf/feynman-skill) | `npx skills add alchaincyf/feynman-skill` |
> | **纳瓦尔** | 财富/杠杆/人生哲学 | [naval-skill](https://github.com/alchaincyf/naval-skill) | `npx skills add alchaincyf/naval-skill` |
> | **塔勒布** | 风险/反脆弱/不确定性 | [taleb-skill](https://github.com/alchaincyf/taleb-skill) | `npx skills add alchaincyf/taleb-skill` |
> | **张雪峰** | 教育/职业规划/阶层流动 | [zhangxuefeng-skill](https://github.com/alchaincyf/zhangxuefeng-skill) | `npx skills add alchaincyf/zhangxuefeng-skill` |
> 
> ### 主题Skill
> 
> | 主题 | 领域 | 独立仓库 | 一键安装 |
> |------|------|---------|---------|
> | **X导师** | X/Twitter运营全栈 | [x-mentor-skill](https://github.com/alchaincyf/x-mentor-skill) | `npx skills add alchaincyf/x-mentor-skill` |
> 
> 人物Skill蒸馏一个人的思维方式；主题Skill蒸馏一个领域的方法论。每个仓库都包含完整的调研数据和效果示例对话。
> 
> 想蒸馏不在列表里的人或主题？安装女娲，说「蒸馏一个XXX」就行。
> 
> ---
> 
> ## 达尔文.skill：让所有Skill持续进化
> 
> 女娲造Skill，**[达尔文](https://github.com/alchaincyf/darwin-skill)** 让Skill进化。
> 
> 受 Karpathy autoresearch 启发，达尔文.skill 用自主实验循环批量优化所有Skill：8维度评估、棘轮机制（只保留改进，自动回滚退步）、独立子agent评分。女娲的 Phase 5 双Agent精炼就内置了达尔文的评估体系，这也是女娲生成的Skill质量高的原因之一。
> 
> ```bash
> npx skills add alchaincyf/darwin-skill
> ```
> 
> ---
> 
> ## 工作原理
> 
> 输入一个名字后，女娲做四件事：
> 
> **1. 六路并行采集**——著作、播客/访谈、社交媒体、批评者视角、决策记录、人生时间线，6个Agent同时跑，各自存档。
> 
> **2. 三重验证提炼**——一个观点要被收录为心智模型，必须：跨2+个领域出现过（不是随口一说）、能推断对新问题的立场（有预测力）、不是所有聪明人都会这么想（有排他性）。三个都过才收录。
> 
> **3. 构建Skill**——3-7个心智模型 + 5-10条决策启发式 + 表达DNA + 价值观与反模式 + 诚实边界，写入SKILL.md。
> 
> **4. 质量验证**——拿3个此人公开回答过的问题测试，方向一致才通过。再用1个他没讨论过的问题测试，Skill应该表现出适度不确定而非斩钉截铁。
> 
> 完整方法论在 `references/extraction-framework.md`。
> 
> ---
> 
> ## 仓库结构
> 
> ```
> nuwa-skill/
> ├── SKILL.md                      # 女娲本体
> ├── references/
> │   ├── extraction-framework.md   # 提炼方法论（想深入了解看这个）
> │   └── skill-template.md         # 生成Skill的模板
> └── examples/                          # 13个人物 + 1个主题，含完整调研数据
>     ├── steve-jobs-perspective/        # ⭐ 乔布斯（含实战对话记录）
>     ├── paul-graham-perspective/       # Paul Graham
>     ├── zhang-yiming-perspective/      # 张一鸣
>     ├── andrej-karpathy-perspective/   # Karpathy
>     ├── ilya-sutskever-perspective/    # Ilya Sutskever
>     ├── trump-perspective/             # 特朗普
>     ├── mrbeast-perspective/           # MrBeast
>     ├── elon-musk-perspective/         # 马斯克
>     ├── munger-perspective/            # 查理·芒格
>     ├── feynman-perspective/           # 费曼
>     ├── naval-perspective/             # Naval Ravikant
>     ├── taleb-perspective/             # 塔勒布
>     ├── zhangxuefeng-perspective/      # 张雪峰
>     └── x-mastery-mentor/             # X导师（主题Skill）
> ```
> 
> 调研过程全透明。每个example都包含完整的调研文件，你可以看到信息怎么被收集、筛选、变成心智模型。乔布斯的示例还附带了一段完整的实战对话记录（聊AI硬件、OpenAI vs Anthropic、Apple破局），展示Skill在多轮深度对话中的表现。
> 
> ---
> 
> ## 背后的故事
> 
> [同事.skill](https://github.com/titanwings/colleague-skill) 最近在GitHub爆火——把离职同事蒸馏成AI Skill，几天破5000星。它证明了一件事：蒸馏一个人是完全可行的。
> 
> 既然我们有了蒸馏人的能力，为什么只蒸馏身边的同事？去蒸馏各领域最强的人。而且幸运的是，这些人通常留下了大量可以被蒸馏的材料——著作、演讲、访谈、社交媒体。这是对自己能力的极大补充。
> 
> 我之前就一直在做类似的事，但蒸馏的不是同事，是芒格、费曼、Naval、马斯克、塔勒布这些人。今天把方法论开源了。
> 
> 女娲不复制人。它提取认知操作系统。
> 
> **女娲（Nuwa）**，中国神话里用泥土造人的女神。这里的泥土是公开信息，造出来的不是人，是一面镜子。
> 
> ---
> 
> ## 关于作者
> 
> **花叔 Huashu** — AI Native Coder，独立开发者，代表作：小猫补光灯（AppStore 付费榜 Top1）
> 
> | 平台 | 链接 |
> |------|------|
> | 🌐 官网 | [bookai.top](https://bookai.top) · [huasheng.ai](https://www.huasheng.ai) |
> | 𝕏 Twitter | [@AlchainHust](https://x.com/AlchainHust) |
> | 📺 B站 | [花叔](https://space.bilibili.com/14097567) |
> | ▶️ YouTube | [@Alchain](https://www.youtube.com/@Alchain) |
> | 📕 小红书 | [花叔](https://www.xiaohongshu.com/user/profile/5abc6f17e8ac2b109179dfdf) |
> | 💬 公众号 | 微信搜「花叔」或扫码关注 ↓ |
> 
> ## 许可证
> 
> MIT — 随便用，随便改，随便造。
> 
> ---
> 
> **同事.skill** 蒸馏了人做什么。
> **女娲** 蒸馏了人怎么想。
> *你想蒸馏的下一个员工，何必是同事。*
> 
> MIT License © [花叔 Huashu](https://github.com/alchaincyf)
> 
> ---
> 
> ## English
> 
> > *"The next person you want to distill doesn't have to be a colleague."*
> 
> **[colleague-skill](https://github.com/titanwings/colleague-skill)** proved that distilling a person into an AI skill is viable. **Nuwa** asks: why stop at colleagues? Distill the best minds in every field — Munger, Feynman, Musk, Naval — people who conveniently left mountains of distillable material behind.
> 
> Nuwa is a Claude Cod

## 延伸閱讀

相關概念：[[NLP]] · [[心智模型]] · [[決策啟發式]]

相關專案：[[titanwings--colleague-skill|titanwings/colleague-skill]] · [[0xGF--boneyard|0xGF/boneyard]] · [[alchaincyf--darwin-skill|alchaincyf/darwin-skill]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]]

[GitHub](https://github.com/alchaincyf/nuwa-skill)

## 相關收錄

> [!note]- 直接競品（同子分類：NLP）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "NLP" AND file.name != "alchaincyf--nuwa-skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "AI/ML" AND file.name != "alchaincyf--nuwa-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "alchaincyf--nuwa-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "alchaincyf--nuwa-skill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["NLP","心智模型","決策啟發式"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "alchaincyf--nuwa-skill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/alchaincyf--nuwa-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "alchaincyf--nuwa-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "alchaincyf" AND file.name != "alchaincyf--nuwa-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--nuwa-skill");
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
> const me = dv.page("Repos/alchaincyf--nuwa-skill");
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
> const me = dv.page("Repos/alchaincyf--nuwa-skill");
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
> const me = dv.page("Repos/alchaincyf--nuwa-skill");
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
> const me = dv.page("Repos/alchaincyf--nuwa-skill");
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

> **2026-04-09** — 首次收錄
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

- [[2026-04-12|2026-04-12]] — 再次上榜，7.4k stars
- [[2026-04-11|2026-04-11]] — 再次上榜，6.6k stars
- [[2026-04-10|2026-04-10]] — 再次上榜，5.5k stars
- [[2026-04-09|2026-04-09]] — 首次收錄，3.9k stars
