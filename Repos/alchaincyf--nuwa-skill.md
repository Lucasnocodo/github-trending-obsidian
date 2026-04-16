---
repo: alchaincyf/nuwa-skill
url: https://github.com/alchaincyf/nuwa-skill
owner: alchaincyf
owner_type: User
language: Python
license: MIT
description: "你想蒸馏的下一个员工，何必是同事。蒸馏任何人的思维方式——心智模型、决策启发式、表达DNA。Distill how anyone thinks."
homepage: ""
stars: 11264
stars_per_day: 1126
forks: 1873
open_issues: 15
created: 2026-04-05
pushed_at: 2026-04-13
first_seen: 2026-04-09
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "AI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-09
use_case: "蒸馏任何人的思维方式，提取认知框架与决策启发式。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-04-15"
contributor_count: 1
engagement: "medium"
issue_close_rate: 48
repo_size_kb: 18096
readme_length: 8616
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-09"
star_history: "2026-04-09:3895,2026-04-09:3932,2026-04-10:5526,2026-04-10:5558,2026-04-11:6623,2026-04-11:6627,2026-04-12:7442,2026-04-12:7453,2026-04-13:8592,2026-04-14:9697,2026-04-15:10596,2026-04-16:11264"
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "nuwa-skill"
  - "alchaincyf/nuwa-skill"
  - "蒸馏任何人的思维方式，提取认知框架与决策启发式。"
---

# nuwa-skill

**11.3k** stars · **1.1k** stars/天 · 建立 10 天前 · Python · MIT

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
> 蒸馏任何人的思维方式，提取认知框架与决策启发式。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Viral (1.1k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望快速獲取名人思維方式的創業者和自媒體工作者。
> **一句話重點** Nuwa.skill 不僅是蒸馏名人的工具，更是提取和應用思維框架的創新方式。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--nuwa-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "AI 工具" && p.file.name !== "alchaincyf--nuwa-skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 AI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到多元思維視角，值得一試。

> [!abstract] 核心創新
> Nuwa.skill 提供了一種全新的方式來蒸馏名人的思維方式，超越了傳統的語錄模仿。

## 專案簡介

Nuwa.skill 是一個用於蒸馏名人思維方式的工具，透過用戶輸入一個名字，系統會自動進行多路徑資料收集，提煉出該名人的心智模型、決策啟發式和表達風格。這個過程包括六路並行的資料收集，涵蓋著作、播客、社交媒體等，並經過三重驗證以確保提煉的內容具有預測性和排他性。最終生成的 Skill 包含了多個心智模型和價值觀，並且能在 Claude Code 中直接調用。這個工具的賣點在於不僅是模擬名人的語錄，而是提取其背後的思維框架，讓用戶能在面對問題時獲得名人的視角。技術上，Nuwa.skill 使用 Python 和 Shell，並依賴於多個資料來源進行資料的蒐集和分析，這使得它在處理複雜的問題時能夠提供多樣化的解決方案。

與其他類似工具相比，Nuwa.skill 的獨特之處在於它不僅限於蒸馏同事或身邊的人，而是可以蒸馏任何領域的頂尖人物，這在過去的工具中並不常見。使用者在實際操作中可能會發現，蒸馏的結果取決於公開資料的完整性，這意味著對於一些不太知名的人物，可能無法獲得足夠的資料來進行有效的蒸馏。整體而言，這是一個非常適合想要快速獲取名人思維方式的開發者或創業者的工具，特別是在需要快速決策或尋求靈感的情境下。未來的發展方向可能會集中在擴展更多人物的蒸馏能力及提升資料收集的效率。

**技術棧**：`Python` · `Shell`

## 重點功能

- 六路並行資料收集 — 同時從著作、播客、社交媒體等多個來源收集資料。
- 三重驗證提煉 — 確保提煉的心智模型具備預測性和排他性。
- 多樣化的心智模型 — 提供多達 7 種心智模型和 10 條決策啟發式。
- 直接調用的 Skill — 用戶可以直接在 Claude Code 中調用蒸馏的結果。
- 透明的調研過程 — 每個 Skill 都附有完整的調研資料和示例對話。

## 快速開始

1. 安裝 Nuwa.skill
```bash
npx skills add alchaincyf/nuwa-skill
```
2. 在 Claude Code 中蒸馏名人
```bash
> 蒸馏一个保罗·格雷厄姆
```
3. 使用蒸馏的視角分析問題
```bash
> 用芒格的视角帮我分析这个投资决策
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天內累積 11264 stars（1126/天），forks 1873（16.6%），顯示出強烈的社群興趣。作者 alchaincyf 是一位獨立開發者，之前的作品已經獲得關注，這次的專案解決了如何有效蒸馏名人思維的痛點，這在市場上是相對新穎的。社群對於名人思維的需求與日俱增，尤其是在創業和自我提升的領域，這使得 Nuwa.skill 的出現恰逢其時。這個專案的成功也反映了人們對於知識提煉和應用的渴望，尤其是在快速變化的商業環境中。

## 適合誰使用

**目標受眾**：希望快速獲取名人思維方式的創業者和自媒體工作者。

> [!example] 使用場景
> - 創業者用它來蒸馏馬斯克的思維方式，因為這能幫助他們在產品開發中更好地理解市場需求和成本控制。
> - 自媒體工作者用它來獲取費曼的學習方法，因為這能提升他們在內容創作中的科學思維和表達能力。
> - 學生用它來蒸馏芒格的投資理念，因為這能幫助他們在學習金融時獲得更深入的見解和思考方式。

## 架構分析

Nuwa.skill 的架構設計為六路並行資料收集，這使得資料蒐集的速度和多樣性大幅提升。每個資料來源都由獨立的 Agent 負責，這樣的設計能有效減少資料收集的瓶頸。資料經過三重驗證後，生成的 Skill 包含多層次的心智模型和決策啟發式，這樣的結構使得最終的輸出不僅僅是名人的語錄，而是其背後的思維框架。這種設計的代價在於需要較高的計算資源來支持多路徑的資料收集和處理。擴展性方面，隨著蒐集資料的增加，系統可能需要進一步優化以處理更大規模的資料集。

## 技術深入分析

Nuwa.skill 的核心技術機制在於其六路並行資料收集，這使得資料來源多樣化，能夠從不同的角度分析名人的思維方式。每個 Agent 負責不同的資料來源，這樣的設計能有效提高資料的完整性和準確性。效能方面，這個工具在處理小型到中型資料集時表現良好，但隨著資料量的增加，可能需要更多的計算資源。設計上選擇 Python 和 Shell 作為開發語言，這使得工具在跨平台上具有良好的兼容性，但也可能導致在某些環境下的性能瓶頸。技術風險方面，資料的質量和完整性是關鍵，若資料來源不可靠，將直接影響最終的蒸馏結果。整合方面，Nuwa.skill 可以輕鬆與 Claude Code 整合，並且支持多種使用場景，這使得它在實際應用中具有良好的靈活性。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用範例，讓新手能夠快速上手。安裝過程順暢，無需複雜的配置。文件中有多語言支持，對於不同語言的使用者友好。

## 優缺點分析

> [!success] 優點
> - 能夠蒸馏多位名人的思維方式，提供多元視角。
> - 資料收集過程透明，易於驗證和信任。
> - 直接在 Claude Code 中使用，方便快捷。

> [!danger] 缺點
> - 對於不知名人物的蒸馏效果有限。
> - 依賴公開資料，可能無法捕捉到完整的思維框架。
> - 質量受限於資料的完整性和準確性。

> [!warning] 注意事項
> - 蒸馏不了直觉 — 只能提取框架，無法捕捉靈感。
> - 依賴公開資料 — 對於不太知名的人物，可能無法獲得足夠的資料進行蒸馏。
> - 質量依賴於資料完整性 — 資料不全可能導致蒸馏結果不準確。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [titanwings/colleague-skill](https://github.com/titanwings/colleague-skill) | 這個工具專注於蒸馏同事的思維方式，而 Nuwa.skill 則擴展到任何名人，提供更廣泛的應用場景。 |
| [alchaincyf/darwin-skill](https://github.com/alchaincyf/darwin-skill) | 達爾文技能專注於技能的進化和優化，而 Nuwa.skill 則專注於蒸馏思維方式，兩者可以互補。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [titanwings/colleague-skill](https://github.com/titanwings/colleague-skill) | 專注於蒸馏同事的思維方式，適合小型團隊內部使用。 | 如果你的需求僅限於蒸馏身邊同事的思維，這個工具會更簡單易用。 | low，因為功能相似且界面友好。 |
| [alchaincyf/darwin-skill](https://github.com/alchaincyf/darwin-skill) | 專注於技能的進化和優化，適合需要持續改進的場景。 | 如果你需要不斷優化已經蒸馏的技能，達爾文技能會更合適。 | medium，因為需要理解不同的蒸馏邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **nuwa-skill** | **colleague-skill** | **darwin-skill** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於蒸馏同事的思維方式，適合小型團隊內部使用。 | 專注於技能的進化和優化，適合需要持續改進的場景。 |
> | 遷移成本 | - | low，因為功能相似且界面友好。 | medium，因為需要理解不同的蒸馏邏輯。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於蒸馏身邊同事的思維，這個工具會更簡單易用。 | 如果你需要不斷優化已經蒸馏的技能，達爾文技能會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 對於不知名人物的蒸馏效果有限，可能無法獲得足夠資料。
  - 解法：選擇知名度較高的人物進行蒸馏。
- [MEDIUM] 資料來源的質量不一，影響最終結果。
  - 解法：檢查資料來源的可靠性，並選擇多個來源交叉驗證。
- [MEDIUM] 蒸馏過程中可能出現資料過時的情況。
  - 解法：定期更新蒸馏的資料庫，保持內容的時效性。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 創業團隊需要快速獲取名人思維 | 非常適合 | 能夠提供多元的思維視角，幫助快速決策。 |
| 個人開發者希望提升自我思維能力 | 適合 | 能夠從名人的思維中獲得靈感和啟發。 |
| 學術研究需要深入分析名人觀點 | 普通 | 資料的完整性可能影響分析結果。 |
| 小型團隊內部知識分享 | 不適合 | 主要針對名人思維，對於內部同事的蒸馏效果有限。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到多元思維視角，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅存取公開資料，不涉及敏感信息。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Nuwa.skill 通常與 Claude Code 一起使用，作為一個思維蒸馏工具，在開發和決策過程中提供支持。用戶可以在 Claude Code 中直接調用蒸馏的結果，這使得它在實際工作流中非常方便。與其他主流工具如 GitHub Actions 和 CI/CD 流程的整合良好，能夠輕鬆嵌入到現有的開發環境中。整合的摩擦點主要在於資料來源的選擇和驗證，使用者需要確保所用資料的可靠性，以獲得最佳的蒸馏效果。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Nuwa.skill 出現之前，蒸馏名人思維的方式主要依賴於書籍和演講的記錄，這些方法無法快速提取和應用。隨著 AI 和資料處理技術的進步，能夠自動化地從多個資料來源提取有價值的思維框架成為可能。這個工具代表了一種新的知識提煉方式，未來可能會隨著更多資料來源的加入而進一步演變。

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
| Forks | 1.9k |
| Open Issues | 15 |
| Issue 解決率 | 48% (14 closed) |
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

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/alchaincyf/nuwa-skill)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-07 ~ 2026-04-13）
> **活躍天數** 6 天 · **最新 commit** add: 达尔文.skill promotion with banner and install command

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#29](https://github.com/alchaincyf/nuwa-skill/issues/29) | 为啥不是nvwa-skill? | 0 | 0 |
> | [#28](https://github.com/alchaincyf/nuwa-skill/issues/28) | Showcase: Iran.skill — 119-file geopolitical analysis OS bui | 0 | 0 |
> | [#27](https://github.com/alchaincyf/nuwa-skill/issues/27) | 运行到phase1时循环卡住 | 0 | 0 |
> | [#26](https://github.com/alchaincyf/nuwa-skill/issues/26) | nv or nu ，怎么感觉项目名称应该是nvwa而不是nuwa呢 | 0 | 0 |

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

相關概念：[[心智模型]] · [[決策啟發式]] · [[自動化]]

相關專案：[[titanwings--colleague-skill|titanwings/colleague-skill]] · [[alchaincyf--darwin-skill|alchaincyf/darwin-skill]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]]

[GitHub](https://github.com/alchaincyf/nuwa-skill)

## 相關收錄

> [!note]- 直接競品（同子分類：AI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "AI 工具" AND file.name != "alchaincyf--nuwa-skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "alchaincyf--nuwa-skill"
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
> const concepts = ["心智模型","決策啟發式","自動化"];
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
