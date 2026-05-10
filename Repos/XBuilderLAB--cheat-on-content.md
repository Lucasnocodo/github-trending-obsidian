---
repo: XBuilderLAB/cheat-on-content
url: https://github.com/XBuilderLAB/cheat-on-content
owner: XBuilderLAB
owner_type: Organization
language: Shell
license: MIT
description: "You're reading this. The skill predicted it. A workflow that turns every post into a calibrated experiment—score, blind-predict, retro, evolve. The future doesn't reward effort, it rewards those who see the pattern first. 1M followers in a month — not luck, system."
homepage: ""
stars: 1426
stars_per_day: 357
forks: 296
open_issues: 3
created: 2026-05-05
pushed_at: 2026-05-08
first_seen: 2026-05-07
week: "2026-W19"
month: "2026-05"
category: "開發工具"
subcategory: "內容創作"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-07
use_case: "將每個內容創作轉化為可校準的實驗，幫助創作者透過數據提升判斷力。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-05-13"
contributor_count: 3
engagement: "medium"
issue_close_rate: 14
repo_size_kb: 285
readme_length: 5690
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-07"
star_history: "2026-05-07:778,2026-05-07:780,2026-05-08:1022,2026-05-08:1031,2026-05-09:1214,2026-05-09:1219,2026-05-10:1426"
tags:
  - github
  - "category/開發工具"
  - "lang/shell"
  - org
  - easy_install
aliases:
  - "cheat-on-content"
  - "XBuilderLAB/cheat-on-content"
  - "將每個內容創作轉化為可校準的實驗，幫助創作者透過數據提升判斷力。"
---

# cheat-on-content

**1.2k** stars · **406** stars/天 · 建立 3 天前 · Shell · MIT

```dataviewjs
const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

> [!summary] 一句話摘要
> 將每個內容創作轉化為可校準的實驗，幫助創作者透過數據提升判斷力。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (406 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 希望提升內容創作準確性的獨立創作者和小型團隊。
> **一句話重點** 這個工具不僅幫助創作者發佈內容，更重要的是幫助他們提升對內容表現的判斷能力。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "內容創作" && p.file.name !== "XBuilderLAB--cheat-on-content" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 內容創作 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到內容創作的深度分析，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於將內容創作過程轉化為可量化的實驗，並根據歷史數據自動調整評分公式。

## 專案簡介

這個工具的核心機制是將內容創作過程轉化為一個可量化的實驗流程，具體來說，創作者在發佈之前會進行評分和預測，然後在發佈後的三天內進行數據回顧，最終根據這些數據進行調整和進化。這種方法的賣點在於它不僅僅是提供靈感，而是讓創作者能夠量化自己的直覺，從而在三個月內提升判斷準確性達到十倍。技術上，這個工具依賴於創作者的歷史數據來反向工程出評分公式，並且每次發佈後都會更新其理解，這樣的設計使得它能夠隨著時間的推移不斷進化。與其他創作工具相比，這個工具不僅僅是幫助創作者發佈更多內容，而是幫助他們更精確地評估內容的潛力。

相較於 ChatGPT 等通用助手，這個工具專注於個別創作者的需求，能夠記住過去的表現並根據其特定的歷史數據進行調整。實際使用中，創作者需要在內容專案目錄中啟動這個工具，並回答五個問題來完成初始設置，這樣可以讓工具更快地適應其風格和需求。這個工具的成熟度目前看起來是 beta 階段，因為它剛剛建立不久，並且有一些開放的問題需要解決，但它的設計理念和功能確實提供了一個有趣的方向。對於小型創業團隊或個人創作者來說，這個工具能夠幫助他們更好地理解和預測內容表現，特別是在需要快速迭代和學習的環境中。

**技術棧**：`Shell` · `Python`

## 重點功能

- 內容評分 — 在發佈前對每篇文章進行評分，幫助創作者量化直覺。
- 盲目預測 — 提供發佈前的預測功能，讓創作者能夠記錄預期表現。
- 數據回顧 — 發佈後三天進行數據回顧，幫助創作者了解內容表現。
- 自動進化 — 根據歷史數據自動調整評分公式，提升判斷準確性。
- 支持多種代理 — 可與多種內容創作代理兼容，提升靈活性。

## 快速開始

1. 克隆專案並安裝
```bash
git clone https://github.com/XBuilderLAB/cheat-on-content.git && cd cheat-on-content && bash install.sh
```
2. 初始化工具
```bash
初始化 cheat-on-content
```
3. 開始使用
```bash
score this scripts/.md
```

## 程式碼範例

```bash
{
  "前置條件": "在內容專案目錄中啟動兼容的代理。",
  "指令": "初始化 cheat-on-content",
  "預期輸出": "完成五個是/否問題的問卷，強烈建議導入基準帳戶。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 1219 stars（406/天），forks 254（20.8%），這顯示出高活躍度和社群參與度。作者 Jooonnn 及其團隊的背景不明，但這個工具解決了內容創作者在發佈後無法有效學習的痛點，讓創作者能夠從每次發佈中獲得具體的數據反饋。近期的推廣活動或社群討論可能促進了其快速增長，特別是針對內容創作者的需求。高達 20.8% 的 forks/stars 比率顯示出許多人在實際修改和使用這個工具，反映出其實用性和潛力。

## 適合誰使用

**目標受眾**：希望提升內容創作準確性的獨立創作者和小型團隊。

> [!example] 使用場景
> - 內容創作者用它來分析每篇文章的潛力，因為這樣能夠根據數據調整創作策略，提升內容的吸引力。
> - 社交媒體經營者用它來追蹤和預測貼文表現，因為這樣能夠在短時間內找到最佳的發佈時機和內容格式。
> - 市場營銷專員用它來評估廣告內容的效果，因為這樣能夠基於歷史數據進行精準的市場定位和策略調整。

## 架構分析

這個工具的架構設計是基於一個模組化的系統，允許創作者根據自己的需求選擇不同的子技能。每次創作的數據都會被記錄並用於未來的預測，這樣的設計使得創作者能夠在每次發佈後獲得具體的反饋。資料流方面，創作者的每次評分和預測都會被記錄，並在發佈後進行回顧，這樣的迴圈設計確保了數據的持續更新和準確性。選擇這種設計的代價在於需要創作者主動參與數據的記錄和回顧，這對於某些用戶來說可能是一個負擔。整體上，這個架構能夠有效地提升創作者的內容評估能力，但在使用初期可能需要一定的學習成本。

## 技術深入分析

這個工具的核心技術機制是將內容創作過程轉化為可量化的實驗，這需要依賴創作者的歷史數據來反向工程出評分公式。每次創作的數據都會被記錄，並在發佈後進行回顧，這樣的設計確保了數據的持續更新和準確性。效能方面，這個工具能夠在短時間內提供準確的預測，但需要創作者主動參與數據的記錄和回顧。設計取捨方面，選擇這種模組化的設計使得工具的靈活性提高，但也增加了使用的複雜性。技術風險方面，對於不習慣數據記錄的創作者來說，使用成本較高，可能會影響其使用意願。整合分析方面，這個工具能夠與多種內容創作代理兼容，但在使用初期可能需要一定的學習成本。整體來看，這個工具的設計理念和功能提供了一個有趣的方向，特別是在需要快速迭代和學習的環境中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了安裝和使用的範例，安裝過程順暢且無明顯坑。初始設置過程簡單，並且有良好的引導。文件目前僅提供英文，缺乏中文或其他語言支持。

## 優缺點分析

> [!success] 優點
> - 能夠量化創作直覺，提升內容評估能力。
> - 自動調整評分公式，隨著時間推進變得更加準確。
> - 支持多種內容創作代理，靈活性高。

> [!danger] 缺點
> - 需要一定的歷史數據來提升預測準確性。
> - 初期使用時預測精度可能較低。
> - 對於不習慣數據記錄的創作者來說，使用成本較高。

> [!warning] 注意事項
> - 目前僅支持特定的內容創作代理。
> - 需要一定的歷史數據來提升預測準確性。
> - 在新帳戶上，初始預測的精度可能較低。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於創作者的內容評估，而 agent-sprite-forge 更加注重於生成內容的過程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 提供的是內容管理功能，而這個工具則專注於內容的預測和評估。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| ChatGPT | ChatGPT 提供的是通用的內容生成和建議，而本專案專注於創作者的個別需求和歷史數據的分析。 | 如果需要一個通用的內容生成工具，ChatGPT 是更好的選擇，但如果想要針對個別創作者的需求進行深度分析，則選擇本專案。 | medium，因為需要將過去的數據整合到新工具中。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | agent-sprite-forge 更加注重於生成內容的過程，而本專案則專注於內容的評估和預測。 | 如果需要一個強大的內容生成工具，agent-sprite-forge 是更好的選擇，但如果想要針對內容的表現進行深度分析，則選擇本專案。 | low，因為兩者的使用方式相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cheat-on-content** | **ChatGPT** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | ChatGPT 提供的是通用的內容生成和建議，而本專案專注於創作者的個別需求和歷史數據的分析。 | agent-sprite-forge 更加注重於生成內容的過程，而本專案則專注於內容的評估和預測。 |
> | 遷移成本 | - | medium，因為需要將過去的數據整合到新工具中。 | low，因為兩者的使用方式相似。 |
> | 適用場景 | 主要場景 | 如果需要一個通用的內容生成工具，ChatGPT 是更好的選擇 | 如果需要一個強大的內容生成工具，agent-sprite-f |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人創作者或小型團隊試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 初次使用時預測精度較低，可能影響創作者信心
  - 解法：建議在初期導入基準帳戶以提高預測準確性
- **[HIGH]** 需要持續記錄數據，對於不習慣的創作者來說可能造成負擔
  - 解法：可以設置自動化流程來減少手動記錄的需求
- [MEDIUM] 對於新帳戶，初始預測的精度可能較低
  - 解法：建議在開始使用前進行充分的數據準備

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 1-3 人的小型創業團隊 | 非常適合 | 能夠幫助團隊快速迭代和學習內容表現。 |
| 大型企業的內容創作部門 | 普通 | 雖然功能強大，但可能需要更多的定制化支持。 |
| 個人內容創作者 | 非常適合 | 能夠提供針對個別創作者的深度分析和預測。 |
| 不習慣數據分析的創作者 | 不適合 | 需要一定的數據記錄和分析能力。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到內容創作的深度分析，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴鏈的信任程度良好，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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
| Forks | 254 |
| Open Issues | 6 |
| Issue 解決率 | 14% (1 closed) |
| 最後推送 | 2026-05-08 |
| 建立日期 | 2026-05-05 |
| Repo 大小 | 285 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/XBuilderLAB/cheat-on-content) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Shell" : 51
>     "Python" : 49
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Jooonnn](https://github.com/Jooonnn) | 8 |
> | [@woniuxuezhang](https://github.com/woniuxuezhang) | 6 |
> | [@songth1ef](https://github.com/songth1ef) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題數量不高。
**連結**：[文件](https://github.com/XBuilderLAB/cheat-on-content)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-05 ~ 2026-05-08）
> **活躍天數** 3 天 · **最新 commit** README: clarify target audience in hero description

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/XBuilderLAB/cheat-on-content/issues/9) | 预测一下这个 Issue 能 Open 多久 | 0 | 0 |
> | [#8](https://github.com/XBuilderLAB/cheat-on-content/issues/8) | 看起来不错 | 0 | 0 |
> | [#7](https://github.com/XBuilderLAB/cheat-on-content/issues/7) | 如果对标账号是来自不同领域的，比方说现在我导入的几个对标账号是 AI 领域的，那如果我想导入科技数码领域的，会不会影响？ | 0 | 0 |
> | [#3](https://github.com/XBuilderLAB/cheat-on-content/issues/3) | 这个skill希望也能够支持cursor | 0 | 1 |
> | [#2](https://github.com/XBuilderLAB/cheat-on-content/issues/2) | 请问能不能添加 tiktok 的支持？ | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> Cheat on Content
> 
> For content creators — a skill that turns every post into a calibrated experiment.
> 
> You're reading this. The skill predicted it.
> It turns every "I feel this will go viral" into a calibrated experiment.
> It took me from zero to 1M followers in a month. It said I'd write this. I did.
> Your doubt — predicted too.
> 
>   English
>   &nbsp;·&nbsp;
>   简体中文
> 
> &nbsp;
> 
> ---
> 
> ## 🎬 What it actually does
> 
> Most creators live in the same gambling loop:
> 
> > Publish → Numbers come in → Learn nothing → Roll the dice again
> 
> A creator who's shipped 200 pieces is barely 10% sharper than someone who's shipped 1 — because they never **kept books** after each round.
> 
> **Cheat on Content** makes every judgment get logged, retrospected, absorbed into the next:
> 
> 📊 Score → 🎯 Blind-predict → 🚀 Publish → 📈 T+3d retro → 🧬 Evolve your rubric
> 
> This isn't motivation. It's **compounding** — every piece you don't retro is silently eroding your ability to see yourself.
> 
> One month in = you have a hit-formula that's **only yours**.
> Three months in = you're 10× sharper than your first-day self.
> 
> ---
> 
> ## 🌀 Origin
> 
> > I never believed in fate. Until this skill made me film a video — and predicted exactly how much traffic that video would pull.
> >
> > I tried to break it. I told my audience. I hoped collective observation would collapse the wave function and shift the trajectory.
> >
> > The data was accurate.
> >
> > I didn't escape fate. I just moved from first-order to second-order.
> >
> > If even my awakening — even my audience's observation — was already in its prediction, then right now, reading this:
> > are you here out of curiosity, or just closing the algorithm's last move?
> >
> > — *the creator*
> 
> ---
> 
> ## ⚖️ How it differs from other "creator tools"
> 
> | Others | This |
> |---|---|
> | Give you "inspiration" | Make **your own intuition** measurable |
> | AI writes for you | AI **judges** for you — the script stays yours |
> | Ship 10 versions, A/B test | Ship one — **bet** in writing, settle the books with data |
> | Static dashboard | An **evolving rubric** — your formula 3 months from now isn't the starting one |
> 
> In a sentence: other tools help you "ship more." This helps you "judge sharper."
> 
> ---
> 
> ## 🤔 Can't I just use ChatGPT / DeepSeek / Doubao?
> 
> Those are **general assistants** — they tell everyone the same thing. You ask "will this go viral?" and the answer is fitted to global average opinion, not your channel. Ask again tomorrow — same answer. **It doesn't remember you. It doesn't change because of you.**
> 
> This is **your own ops expert** — serving only your one channel:
> 
> - The scoring formula is reverse-engineered from **your** history, not the global training distribution
> - Every piece you ship updates its understanding — by month three, judgment accuracy is 10× sharper than day one (**auto-evolving**)
> - It knows your benchmark account, your cadence, the last three reasons you flopped — things ChatGPT forgets after the first reply
> 
> General LLMs help everyone. This helps **your** account.
> 
> ---
> 
> ## 🛡️ Why the loop actually evolves
> 
> 📝 **Every piece is logged**: Score and prediction get written before publish, archived end-to-end. Three days later you settle accounts — you see exactly where you were sharp, where you were off. No more vague "I feel this one didn't land."
> 
> 🔁 **It gets sharper**: Three same-direction misses in a row, the tool actively prompts you to upgrade your scoring formula. **You don't have to remember — it remembers for you.**
> 
> 🛡️ **Upgrades have a brake**: Switching the formula requires re-scoring all historical samples — only released if it ranks more accurately than the old. Plus a cross-model independent audit — **so you can't fool yourself.**
> 
> 🪒 **The rubric is a workbench, not a museum**: Observations refuted by data get deleted; observations absorbed into formal dimensions also get deleted. It only holds what's most useful right now.
> 
> ---
> 
> ## 📦 Install
> 
> ```bash
> git clone https://github.com/XBuilderLAB/cheat-on-content.git
> cd cheat-on-content
> bash install.sh
> ```
> 
> 13 sub-skills are symlinked into your agent's skill directory. One install, every content project gets it.
> 
> **Supported agents**: Claude Code (default) · Codex (`bash install.sh --codex`) · Both (`bash install.sh --all`)
> 
> > Frozen version: `bash install.sh --copy` / `bash install.sh --codex --copy`
> >
> > Uninstall: `bash uninstall.sh` / `bash uninstall.sh --codex` (your content data is not touched)
> 
> ---
> 
> ## 🚀 First run
> 
> In your content project directory, open a skill-compatible agent and say:
> 
> ```
> 初始化 cheat-on-content
> ```
> 
> (or `init cheat-on-content`)
> 
> Five yes/no questions complete onboarding. **Strongly recommend importing a benchmark account** — 5–10 samples and the tool gets an anchor immediately. Without one, your first 5 predictions land at ±50% precision.
> 
> ---
> 
> ## ⚡ Daily use
> 
> ```
> score this scripts/.md       → grade only
> start prediction scripts/.md → blind prediction + decision log
> shot scripts/.md             → create video folder + buffer +1
> shipped https://...                → buffer -1
> retro videos//                → T+3d data + retrospective
> status / fetch trends / find topic / bump rubric / find benchmark
> ```
> 
> Hook-aware agents auto-report buffer + pending retros + top candidates at every session start — no need to ask. Other agents: just say `status`.
> 
> Full workflow + sub-skill details: see [SKILL.md](SKILL.md).
> 
> ---
> 
> ## 📈 Star History
> 
>   
> 
> ---
> 
> ## 📜 License
> 
> MIT. Commercial use, modification, closed-source integration — all fine.
> 
> ---
> 
> *Is this cheating? So was the calculator. So was Google.*
> *The future doesn't reward effort — it rewards those who see the pattern first.*
> 
> *You reading this line — that's predicted too.*

## 延伸閱讀

相關概念：[[自動化測試]] · [[資料視覺化]] · [[機器學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

[GitHub](https://github.com/XBuilderLAB/cheat-on-content)

## 相關收錄

> [!note]- 直接競品（同子分類：內容創作）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "內容創作" AND file.name != "XBuilderLAB--cheat-on-content"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "XBuilderLAB--cheat-on-content"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Shell" AND file.name != "XBuilderLAB--cheat-on-content" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W19" AND file.name != "XBuilderLAB--cheat-on-content"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化測試","資料視覺化","機器學習"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "XBuilderLAB--cheat-on-content" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "XBuilderLAB--cheat-on-content" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "XBuilderLAB" AND file.name != "XBuilderLAB--cheat-on-content"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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
> const me = dv.page("Repos/XBuilderLAB--cheat-on-content");
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

> **2026-05-07** — 首次收錄
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

- [[2026-05-10|2026-05-10]] — 再次上榜，1.4k stars
- [[2026-05-09|2026-05-09]] — 再次上榜，1.2k stars
- [[2026-05-08|2026-05-08]] — 再次上榜，1.0k stars
- [[2026-05-07|2026-05-07]] — 首次收錄，778 stars
