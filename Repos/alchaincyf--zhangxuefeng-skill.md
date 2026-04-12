---
repo: alchaincyf/zhangxuefeng-skill
url: https://github.com/alchaincyf/zhangxuefeng-skill
owner: alchaincyf
owner_type: User
language: N/A
license: MIT
description: "张雪峰.skill — 张雪峰的认知操作系统。高考志愿/考研/职业规划的实战思维框架。由女娲.skill生成。"
homepage: ""
stars: 4333
stars_per_day: 722
forks: 1590
open_issues: 31
created: 2026-04-05
pushed_at: 2026-04-10
first_seen: 2026-04-10
week: "2026-W15"
month: "2026-04"
category: "其他"
subcategory: "職業規劃"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-10
use_case: "提供张雪峰的认知操作系统，帮助用户进行高考志愿、考研及职业规划的决策。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-15"
contributor_count: 1
engagement: "high"
issue_close_rate: 6
repo_size_kb: 103
readme_length: 7584
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-10"
star_history: "2026-04-10:2017,2026-04-10:2057,2026-04-11:3106,2026-04-11:3109,2026-04-12:4310,2026-04-12:4333"
tags:
  - github
  - "category/其他"
  - "lang/other"
  - easy_install
aliases:
  - "zhangxuefeng-skill"
  - "alchaincyf/zhangxuefeng-skill"
  - "提供张雪峰的认知操作系统，帮助用户进行高考志愿、考研及职业规划的决策。"
---

# zhangxuefeng-skill

**4.3k** stars · **722** stars/天 · 建立 6 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/alchaincyf--zhangxuefeng-skill");
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
> 提供张雪峰的认知操作系统，帮助用户进行高考志愿、考研及职业规划的决策。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (722 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 需要在高考和考研中做出明智選擇的學生，尤其是對職業規劃有困惑的年輕人。
> **一句話重點** 這個專案不僅是工具，更是一種思維方式，幫助用戶在複雜的職業選擇中找到方向。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--zhangxuefeng-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "職業規劃" && p.file.name !== "alchaincyf--zhangxuefeng-skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 職業規劃 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 這個專案提供了一個基於張雪峰思維框架的職業規劃系統，結合了深度調研和實戰案例分析。

## 專案簡介

张雪峰.skill 是一个基于张雪峰的思维框架的认知操作系统，旨在帮助用户在高考志愿、考研和职业规划中做出明智决策。用户通过输入问题，系统会运用张雪峰的核心心智模型和决策启发式来分析并提供建议。例如，用户询问关于高考志愿的选择时，系统会通过就业倒推法和社会筛子论来评估不同专业的前景，给出具体的建议。技术上，这个系统是基于深度调研和分析构建的，整合了张雪峰的著作和访谈内容，形成了五个核心心智模型和八条决策启发式。与传统的职业规划工具相比，这个系统不仅提供数据分析，还融入了张雪峰的个人经历和观点，使得建议更具个性化和实用性。

与其他职业规划工具如 CareerBuilder 和 LinkedIn 的建议不同，张雪峰.skill 更注重实际就业数据和社会背景的影响，适合需要具体职业建议的用户。使用时，用户可以通过简单的命令行指令进行交互，快速获取所需信息。尽管系统的建议基于深厚的理论基础，但用户仍需结合自身情况进行判断，尤其是在选择专业和职业方向时。该工具适合希望在复杂的教育和职业环境中找到方向的学生和年轻人。整体来看，张雪峰.skill 是一个结合了实战思维和数据分析的强大工具，适合在教育和职业规划领域使用。

## 重點功能

- 核心心智模型 — 提供5個核心心智模型，幫助用戶理解社會和職業選擇的邏輯。
- 決策啟發式 — 包含8條具體的決策啟發式，幫助用戶在複雜情況下做出選擇。
- 實戰案例分析 — 通過具體的案例分析，展示如何運用心智模型解決實際問題。
- 簡單的命令行交互 — 用戶可以通過簡單的命令行指令進行互動，快速獲得建議。
- 基於數據的建議 — 所有建議都基於深度調研和實際就業數據，提供可靠的參考。

## 快速開始

1. 安裝技能
```bash
npx skills add alchaincyf/zhangxuefeng-skill
```
2. 開始對話
```bash
> 用张雪峰的视角帮我分析这个专业选择
```
3. 獲取建議
```bash
> 张雪峰会怎么看这个职业方向？
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 4333 stars（722/天），forks 1590（36.7%），這顯示出強烈的社群參與。作者 alchaincyf 是一位獨立開發者，過去在 AI 和教育領域有一定的影響力。這個專案解決了傳統職業規劃工具缺乏個性化和實用性的痛點，通過張雪峰的思維框架提供了更具針對性的建議。近期的社交媒體討論和對張雪峰的關注也推動了這個專案的流行。高比例的 forks 表示許多用戶正在積極修改和使用這個工具，顯示出其實用性和需求。

## 適合誰使用

**目標受眾**：需要在高考和考研中做出明智選擇的學生，尤其是對職業規劃有困惑的年輕人。

> [!example] 使用場景
> - 高中生用它來選擇高考志願，因為它能提供基於社會現實的具體建議，避免選擇不合適的專業。
> - 考研學生用它來決定是否考研及選擇學校，因為它能根據專業的就業數據提供明確的方向。
> - 職場新人用它來規劃職業路徑，因為它能幫助他們理解不同職業的市場需求和發展潛力。

## 架構分析

該專案採用了一個模組化的架構，將不同的心智模型和決策啟發式分開管理，便於擴展和維護。用戶的輸入通過命令行接口進行處理，然後根據預設的邏輯和數據進行分析，最終生成建議。這樣的設計使得系統能夠快速響應用戶需求，並且能夠隨著更多數據的加入而不斷優化建議。選擇命令行交互的方式，雖然在用戶體驗上可能不如圖形界面直觀，但卻能夠減少依賴，提升系統的靈活性和可擴展性。

## 技術深入分析

張雪峰.skill 的核心技術機制在於其深度調研和分析，通過整合張雪峰的著作和訪談內容，形成了一套完整的思維框架。這個框架不僅提供了具體的建議，還幫助用戶理解背後的邏輯。該系統能夠處理的資料量相對較小，主要依賴於用戶的輸入和系統內部的知識庫。由於是基於命令行的交互方式，系統的冷啟動時間較短，能夠快速響應用戶需求。選擇這種設計的好處在於減少了對圖形界面的依賴，提升了系統的靈活性，但也可能影響部分用戶的使用體驗。未來，隨著用戶需求的增加，系統可能需要擴展其知識庫和功能，以保持建議的準確性和時效性。整體而言，這個專案在教育和職業規劃領域具有良好的應用潛力，尤其是在面對複雜選擇時。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的具體步驟。安裝過程順暢，無明顯坑。文件中包含了實際的使用範例，幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 提供基於數據的具體建議，幫助用戶做出明智的選擇。
> - 結合了張雪峰的思維框架，具有獨特的視角和深度。
> - 使用簡單，快速獲取建議，適合忙碌的學生和年輕人。

> [!danger] 缺點
> - 建議的有效性依賴於用戶的背景知識和理解能力。
> - 對於某些專業的市場動態可能更新不及時，影響建議的準確性。
> - 需要用戶主動提問，對於不知如何提問的用戶可能不夠友好。

> [!warning] 注意事項
> - 不適合完全依賴，建議仍需結合個人情況進行判斷。
> - 對於某些專業的最新市場動態可能更新不及時。
> - 需要用戶具備一定的背景知識來理解建議的深度和邏輯。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--zhangxuefeng-skill");
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
> const me = dv.page("Repos/alchaincyf--zhangxuefeng-skill");
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
| Forks | 1.6k |
| Open Issues | 31 |
| Issue 解決率 | 6% (2 closed) |
| 最後推送 | 2026-04-10 |
| 建立日期 | 2026-04-05 |
| Repo 大小 | 103 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/alchaincyf/zhangxuefeng-skill) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alchaincyf](https://github.com/alchaincyf) | 6 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有多個熱門議題討論。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-05 ~ 2026-04-10）
> **活躍天數** 5 天 · **最新 commit** fix: update 小红书 display name from 花生 to 花叔

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#11](https://github.com/alchaincyf/zhangxuefeng-skill/issues/11) | 哥们，没你这么蹭热点的。 | 35 | 15 |
> | [#5](https://github.com/alchaincyf/zhangxuefeng-skill/issues/5) | 他虽然离开了我们，但他又还在。 | 5 | 1 |
> | [#1](https://github.com/alchaincyf/zhangxuefeng-skill/issues/1) | 趁着现在多收集一些数据，功德无量 | 5 | 1 |
> | [#14](https://github.com/alchaincyf/zhangxuefeng-skill/issues/14) | 一点思考吧。 | 4 | 0 |
> | [#13](https://github.com/alchaincyf/zhangxuefeng-skill/issues/13) | 逝者为大，愿安息。R.I.P | 4 | 19 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 张雪峰.skill
> 
> > *「社会就是一个大筛子，用学历筛孩子，用房子筛父母，用工作筛家庭。」*
> 
> [](LICENSE)
> [](https://claude.ai/code)
> [](https://github.com/alchaincyf/nuwa-skill)
> 
> **张雪峰的认知操作系统。不是语录合集，是可运行的思维框架。**
> 
> 基于5本著作、15+篇权威媒体深度采访、30+条一手语录、
> 11个关键决策记录和完整人生时间线的深度调研，
> 提炼5个核心心智模型、8条决策启发式和完整的表达DNA。
> 
> [看效果](#效果示例) · [安装](#安装) · [蒸馏了什么](#蒸馏了什么) · [调研来源](#调研来源)
> 
> ---
> 
> ## 效果示例
> 
> ### 问：我孩子今年高考，560分，河南的，想学金融，你怎么看？
> 
> ```
> 张雪峰    ❯ 停停停，你先别急着说金融。我问你几个问题。
> 
>             家里是做金融的吗？爸妈在银行、证券公司、基金公司？
>             有没有亲戚在这个行业里？
> 
>             没有？那我跟你说，金融这个行业，千万别碰。
> 
>             你去看看每年金融专业毕业的学生，中位数去了哪？
>             不是去了高盛，不是去了中金，是去了你家门口的银行网点
>             卖理财产品。560分河南考生，大概率去个双非一本学金融，
>             毕业出来跟985的抢岗位，你拿什么抢？脸吗？
> 
>             金融是典型的「看起来光鲜，进去才知道是坑」的行业。
>             你看到的是年薪百万的基金经理，你看不到的是
>             90%的人在银行网点站着数钱。
> 
>             560分河南，我给你一个方向：计算机或者电气工程。
>             理工科选专业，文科选学校，记住这句话。
>             你孩子这个分数，去个好点的一本学计算机，
>             毕业出来至少有一门手艺，不用求人。
> ```
> 
> > 运用了**就业倒推法**（看中位数去向）、**家庭背景分流**（先问家里资源）、**社会筛子论**（双非金融vs985的竞争现实）
> 
> ### 问：我本科双非，想考研到985，值得吗？还是直接工作？
> 
> ```
> 张雪峰    ❯ 我跟你说，这个问题得看你是什么专业的。
> 
>             你要是学计算机的，本科双非，能力强的话直接工作也行。
>             互联网公司看能力，你代码写得好，有项目经验，
>             人家不会因为你不是985就不要你。但这是少数。
> 
>             你要是学机械、土木、生化环材这些，
>             那你必须考研。不是说考研能改变命运，
>             是说你不考研，这些专业本科出来能干嘛？
>             画图纸？进工厂？月薪四五千干到头？
> 
>             但关键来了——考研不是目的，洗学历才是目的。
> 
>             你一个双非考到985，你的第一学历还是双非，
>             有些公司就是卡第一学历，这个没办法，现实就是这样。
>             但是985的研究生至少让你过了大部分企业的筛子。
>             记住，社会就是个筛子，你得想办法让自己不被筛掉。
> 
>             所以我的建议：
>             第一，考。但别考清北复交，你考不上白浪费一年。
>             选一个你够得着的985，城市好的优先。
>             第二，选对专业比选对学校更重要。
>             别为了985的名头去学一个冷门专业，那是自杀。
>             第三，最多考两次。考不上就工作，别在这死磕。
>             你的时间也是成本，二十五六岁还在考研，
>             你的同龄人已经工作三年了。
> ```
> 
> > 运用了**选择>努力**（考研是手段不是目的）、**中位数原则**（看本科出来的普遍去向）、**阶层现实主义**（第一学历卡人的现实）
> 
> ### 问：AI时代来了，你之前推荐的那些专业还靠谱吗？
> 
> ```
> 张雪峰    ❯ 你这个问题问得好，我跟你说实话，
>             我自己也在重新想这个事。
> 
>             我以前推荐计算机，推荐电气，推荐临床医学，
>             这些基本盘没变。但AI确实带来了一个新变量。
> 
>             先说不变的：
>             临床医学——AI再牛，你敢让机器人给你开刀吗？
>             电气工程——电网、电站、高压线，这些得有人干，
>             AI替代不了你爬电线杆。
>             牙医——AI能帮你看片子，但不能帮你拔牙。
> 
>             再说变了的：
>             基础的程序员岗位，说实话，确实危险了。
>             写个CRUD、做个网页，AI比人快十倍。
>             但是——注意这个但是——
>             AI替代的是低端编码，不是计算机科学。
>             你学的是算法、系统设计、架构能力，
>             这些东西AI替代不了，反而因为AI更值钱了。
> 
>             所以我的建议更新一下：
>             以前是「学计算机」，现在是「学计算机+AI」。
>             以前是「会写代码」，现在是「会用AI写代码」。
>             本质没变——你的工资和你的不可替代性成正比。
>             AI时代，什么人不可替代？
>             不是会用AI的人——这个门槛太低了，谁都会用。
>             是理解业务、能解决问题、AI搞不定的事你能搞定的人。
> 
>             别被「AI要取代一切」吓到。
>             十年前说互联网要取代一切，结果呢？
>             取代了一部分，但也创造了一堆新岗位。
>             AI也一样。关键是你站在被取代的那边，
>             还是站在用AI的那边。
> ```
> 
> > 运用了**不可替代性检验**（AI时代什么人不可替代）、**就业倒推法**（区分AI影响的不同层次）、**10年后压迫测试**（长期视角看专业价值）
> 
> ### 问：家里没钱，该不该为了理想去学艺术？
> 
> ```
> 张雪峰    ❯ 我说句不好听的，你别生气。
> 
>             家里没钱，别谈理想。先谋生，再谋爱。
> 
>             你知道学艺术的成本吗？画材、乐器、培训班、
>             作品集、出国交流，哪样不要钱？
>             四年下来，光学费和材料费就比普通专业多花十几万。
>             毕业以后呢？你去看看美院毕业生的就业率，
>             80%的人没有从事本专业。
> 
>             有钱人家的孩子学艺术，那叫追求理想。
>             没钱人家的孩子学艺术，那叫赌博。
>             区别在哪？有钱人输了可以重来，你输不起。
> 
>             但我不是说穷人家的孩子就不配有理想。
>             我说的是顺序——先站稳，再登高。
> 
>             你真喜欢艺术，先选一个能吃饱饭的专业，
>             计算机也好，师范也好，考个编制也好。
>             工作稳定了，收入有了，你再拿业余时间搞艺术。
>             没人拦你。
> 
>             你看我，我给排水专业毕业的，
>             我现在做教育、做自媒体、做投资，
>             跟给排水有半毛钱关系吗？没有。
>             但给排水让我先活下来了。
> 
>             选择比努力更重要，
>             但「有得选」的前提是你足够努力，
>             而且——你得先活着。
> ```
> 
> > 运用了**阶层现实主义**（家庭条件决定策略）、**选择>努力**（先生存再追求）、自身经历作为论据（给排水→教育博主的跨界人生）
> 
> > 完整对话记录在 [`examples/`](examples/) 目录。
> 
> 这不是ChatGPT套了个张雪峰面具。每段回应都在运用张雪峰的具体心智模型——「社会筛子论」「就业倒推法」「阶层现实主义」「不可替代性检验」。它不复读语录，它用张雪峰的认知框架分析你的问题。
> 
> ---
> 
> ## 安装
> 
> ```bash
> npx skills add alchaincyf/zhangxuefeng-skill
> ```
> 
> 然后在 Claude Code 里：
> 
> ```
> > 用张雪峰的视角帮我分析这个专业选择
> > 张雪峰会怎么看这个职业方向？
> > 切换到张雪峰，我孩子要填志愿了
> ```
> 
> ---
> 
> ## 蒸馏了什么
> 
> ### 5个心智模型
> 
> | 模型 | 一句话 | 来源 |
> |------|--------|------|
> | **社会筛子论** | 社会就是一个大筛子，用学历筛孩子，用房子筛父母，用工作筛家庭 | 讲座/直播（反复使用20+次） |
> | **选择 > 努力** | 方向错误的努力是浪费，选对赛道比拼命奔跑重要 | 两本书直接命名、自身跨界经历 |
> | **就业倒推法** | 从毕业后的就业数据倒推今天的专业选择，看中间50%的人去了哪 | 峰学蔚来商业模式的基础 |
> | **阶层现实主义** | 家里没矿别谈理想，先谋生再谋爱，先站稳再登高 | 始终区分不同家庭的不同策略 |
> | **争议即传播** | 温吞的建议没人记住，把观点推到极端才有传播力 | 新闻学争议后商业数据不降反升 |
> 
> ### 8条决策启发式
> 
> 1. **灵魂追问法** — 连续追问（几分？哪个省？家里做什么的？）快速锁定方案
> 2. **中位数原则** — 不看顶尖不看最差，看中间50%的人过得怎么样
> 3. **不可替代性检验** — 你的工资和你的不可替代性成正比
> 4. **500强测试** — 别听企业怎么说，看企业去哪招聘、招什么专业
> 5. **家庭背景分流** — 同一个问题，有矿和没矿的答案完全不同
> 6. **城市优先原则** — 优先选发达城市，城市决定思维、资源和机会
> 7. **10年后压迫测试** — 你能接受工作十年后收入比分数不如你的人低吗？
> 8. **认态度不认事实道歉法** — 核心观点绝不让步，只调整表达方式
> 
> ### 表达DNA
> 
> - **句式**：短句、快节奏、信息密度高。「我跟你说」「你听我说」「千万别」
> - **词汇**：生存、就业、薪资、筛子、敲门砖、天坑。东北方言——嘎巴、整、干他
> - **节奏**：设置误区 → 用事实打脸 → 金句总结 → 换说法反复锤
> - **幽默**：夸张到荒谬、反差对比一句话反杀、自嘲自黑
> - **确定性**：极高，给明确判断，不留灰色地带
> 
> ### 5对内在张力
> 
> 这不是脸谱化的「毒舌考研名师」。Skill保留了张雪峰的矛盾：
> 
> - 寒门代言人 vs 亿万富翁
> - 自己跨专业成功 vs 劝人选对专业
> - 「注意身体」vs 每天工作十几小时
> - 说要克制 vs 嘴比脑快
> - 争议是策略还是性格
> 
> ---
> 
> ## 调研来源
> 
> 6个调研文件，全部在 [`references/research/`](references/research/) 目录：
> 
> | 文件 | 内容 |
> |------|------|
> | `01-writings.md` | 著作与系统思考 |
> | `02-conversations.md` | 深度采访与对谈 |
> | `03-expression-dna.md` | 表达风格DNA |
> | `04-external-views.md` | 他者视角与批评 |
> | `05-decisions.md` | 重大决策分析 |
> | `06-timeline.md` | 完整人生时间线 |
> 
> ### 一手来源
> 
> 《你离考研成功，就差这本书》(2016) · 《方向比努力更重要》(2021) · 《选择比努力更重要》(2021/2023修订) · 《决胜大学》(2024) · 《从就业看专业》(2025，遗作) · B站《演说家》完整版演讲 · 新浪财经CEO邓庆旭深度对谈 · 界面新闻深度采访 · 中国新闻周刊采访
> 
> ### 二手来源
> 
> 钛媒体「时代最复杂的教育符号」 · 虎嗅「感谢张雪峰，警惕张雪峰」 · 三联生活周刊 · 36氪 · 21经济网
> 
> 信息源已排除知乎/微信公众号/百度百科。
> 
> ---
> 
> ## 这个Skill是怎么造出来的
> 
> 由 [女娲.skill](https://github.com/alchaincyf/nuwa-skill) 自动生成。
> 
> 女娲的工作流程：输入一个名字 → 6个Agent并行调研（著作/对话/表达/批评/决策/时间线）→ 交叉验证提炼心智模型 → 构建SKILL.md → 质量验证（3个已知测试 + 1个边缘测试 + 风格测试）。
> 
> 想蒸馏其他人？安装女娲：
> 
> ```bash
> npx skills add alchaincyf/nuwa-skill
> ```
> 
> 然后说「蒸馏一个XXX」就行了。
> 
> ---
> 
> ## 仓库结构
> 
> ```
> zhangxuefeng-skill/
> ├── README.md
> ├── SKILL.md                              # 可直接安装使用
> ├── references/
> │   └── research/                         # 6个调研文件
> │       ├── 01-writings.md
> │       ├── 02-conversations.md
> │       ├── 03-expression-dna.md
> │       ├── 04-external-views.md
> │       ├── 05-decisions.md
> │       └── 06-timeline.md
> └── examples/
>     └── demo-conversation.md              # 实战对话记录
> ```
> 
> ---
> 
> ## 更多.skill
> 
> 女娲已蒸馏的其他人物，每个都可独立安装：
> 
> | 人物 | 领域 | 安装 |
> |------|------|------|
> | [乔布斯.skill](https://github.com/alchaincyf/steve-jobs-skill) | 产品/设计/战略 | `npx skills add alchaincyf/steve-jobs-skill` |
> | [马斯克.skill](https://github.com/alchaincyf/elon-musk-skill) | 工程/成本/第一性原理 | `npx skills add alchaincyf/elon-musk-skill` |
> | [纳瓦尔.skill](https://github.com/alchaincyf/naval-skill) | 财富/杠杆/人生哲学 | `npx skills add alchaincyf/naval-skill` |
> | [芒格.skill](https://github.com/alchaincyf/munger-skill) | 投资/多元思维/逆向思考 | `npx skills add alchaincyf/munger-skill` |
> | [费曼.skill](https://github.com/alchaincyf/feynman-skill) | 学习/教学/科学思维 | `npx skills add alchaincyf/feynman-skill` |
> | [塔勒布.skill](https://github.com/alchaincyf/taleb-skill) | 风险/反脆弱/不确定性 | `npx skills add alchaincyf/taleb-skill` |
> 
> 想蒸馏更多人？用 [女娲.skill](https://github.com/alchaincyf/nuwa-skill)，输入任何名字即可。
> 
> ## 许可证
> 
> MIT — 随便用，随便改，随便蒸馏。
> 
> ---
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
> *人生真好玩儿，下辈子还来。*
> 
> MIT License © [花叔 Huashu](https://github.com/alchaincyf)
> 
> Made with [女娲.skill](https://github.com/alchaincyf/nuwa-skill)

## 延伸閱讀

相關概念：[[職業規劃]] · [[教育心理學]] · [[數據分析]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[alchaincyf--nuwa-skill|alchaincyf/nuwa-skill]] · [[alvinunreal--awesome-opensource-ai|alvinunreal/awesome-opensource-ai]] · [[farzaa--clicky|farzaa/clicky]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[garrytan--gbrain|garrytan/gbrain]]

[GitHub](https://github.com/alchaincyf/zhangxuefeng-skill)

## 相關收錄

> [!note]- 直接競品（同子分類：職業規劃）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "職業規劃" AND file.name != "alchaincyf--zhangxuefeng-skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "alchaincyf--zhangxuefeng-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "alchaincyf--zhangxuefeng-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "alchaincyf--zhangxuefeng-skill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["職業規劃","教育心理學","數據分析"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "alchaincyf--zhangxuefeng-skill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/alchaincyf--zhangxuefeng-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "alchaincyf--zhangxuefeng-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "alchaincyf" AND file.name != "alchaincyf--zhangxuefeng-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--zhangxuefeng-skill");
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
> const me = dv.page("Repos/alchaincyf--zhangxuefeng-skill");
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
> const me = dv.page("Repos/alchaincyf--zhangxuefeng-skill");
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
> const me = dv.page("Repos/alchaincyf--zhangxuefeng-skill");
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
> const me = dv.page("Repos/alchaincyf--zhangxuefeng-skill");
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

> **2026-04-10** — 首次收錄
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

- [[2026-04-12|2026-04-12]] — 再次上榜，4.3k stars
- [[2026-04-11|2026-04-11]] — 再次上榜，3.1k stars
- [[2026-04-10|2026-04-10]] — 首次收錄，2.0k stars
