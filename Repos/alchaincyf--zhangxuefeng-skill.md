---
repo: alchaincyf/zhangxuefeng-skill
url: https://github.com/alchaincyf/zhangxuefeng-skill
owner: alchaincyf
owner_type: User
language: N/A
license: MIT
description: "张雪峰.skill — 张雪峰的认知操作系统。高考志愿/考研/职业规划的实战思维框架。由女娲.skill生成。"
homepage: ""
stars: 6188
stars_per_day: 442
forks: 2103
open_issues: 9
created: 2026-04-05
pushed_at: 2026-04-10
first_seen: 2026-04-10
week: "2026-W15"
month: "2026-04"
category: "其他"
subcategory: "职业规划"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-10
use_case: "提供高考志愿、考研和职业规划的实战思维框架。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-15"
contributor_count: 1
engagement: "high"
issue_close_rate: 79
repo_size_kb: 103
readme_length: 7584
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-10"
star_history: "2026-04-10:2017,2026-04-10:2057,2026-04-11:3106,2026-04-11:3109,2026-04-12:4310,2026-04-12:4333,2026-04-13:5301,2026-04-14:5548,2026-04-15:5765,2026-04-16:5923,2026-04-17:6038,2026-04-18:6107,2026-04-19:6161,2026-04-20:6188"
tags:
  - github
  - "category/其他"
  - "lang/other"
  - easy_install
aliases:
  - "zhangxuefeng-skill"
  - "alchaincyf/zhangxuefeng-skill"
  - "提供高考志愿、考研和职业规划的实战思维框架。"
---

# zhangxuefeng-skill

**6.2k** stars · **442** stars/天 · 建立 14 天前 · N/A · MIT

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
> 提供高考志愿、考研和职业规划的实战思维框架。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (442 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 9 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 面临高考志愿选择或职业规划的学生及职场新人。
> **一句話重點** 张雪峰.skill 不仅是一个工具，更是一个思维框架，帮助用户在复杂的职业选择中找到方向。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--zhangxuefeng-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "职业规划" && p.file.name !== "alchaincyf--zhangxuefeng-skill" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 职业规划 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到個性化的職業規劃建議，值得一試。

> [!abstract] 核心創新
> 通过张雪峰的思维框架提供个性化的职业规划建议，超越传统的职业咨询工具。

## 專案簡介

张雪峰.skill 是一套基于张雪峰的思维框架，旨在帮助用户在高考志愿、考研和职业规划中做出明智的决策。用户可以通过输入具体问题，获得基于张雪峰心智模型的分析和建议。核心机制是通过就业倒推法、家庭背景分流等模型，帮助用户理解不同选择的后果。安装后，用户只需使用简单的指令，如 `> 用张雪峰的视角帮我分析这个专业选择`，即可获得个性化的建议。该系统基于大量调研和张雪峰的著作，提炼出5个核心心智模型和8条决策启发式，确保建议的实用性和针对性。

技术实现上，使用了 npx 进行安装，依赖较少，适合快速上手。与传统的职业咨询工具相比，张雪峰.skill 提供了更为深度和个性化的分析，尤其在面对复杂的职业选择时，能够提供更具针对性的建议。使用者在选择专业或职业时，可以通过该工具获得更清晰的方向，避免盲目跟风。该工具适合高中生、大学生及职场新人，尤其是那些面临重大选择的人群。虽然该工具提供了丰富的分析框架，但用户仍需结合自身情况做出最终决策。

## 重點功能

- 个性化分析 — 用户可以输入具体问题，获取基于张雪峰思维框架的个性化建议。
- 多种心智模型 — 提炼出5个核心心智模型，帮助用户理解复杂的职业选择。
- 决策启发式 — 提供8条决策启发式，帮助用户在不同情境下做出明智选择。
- 基于调研 — 结合张雪峰的著作和深度采访，确保建议的实用性和针对性。
- 快速安装 — 使用 npx 一行命令即可安装，依赖较少，适合快速上手。

## 快速開始

1. 安装张雪峰.skill
```bash
npx skills add alchaincyf/zhangxuefeng-skill
```
2. 在 Claude Code 中输入问题
```bash
> 用张雪峰的视角帮我分析这个专业选择
```
3. 获取个性化建议
```bash
> 张雪峰会怎么看这个职业方向？
```

## 程式碼範例

```bash
{
  "前置條件": "已安裝張雪峰.skill",
  "指令": "> 用张雪峰的视角帮我分析这个专业选择",
  "預期輸出": "张雪峰会根据你的具体情况提供个性化的分析和建议。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 14 天就累積 6188 stars（442/天），forks 2103（34.0%），顯示出強烈的社群關注。作者 alchaincyf 以獨立開發者身份，專注於 AI 和教育領域，過去的作品也獲得了不少關注。這個專案解決了傳統職業規劃工具缺乏個性化和深度分析的痛點，通過具體的心智模型提供實用建議。近期的社交媒體討論和教育領域的需求也推動了這個工具的流行。高達 34% 的 forks/stars 比率顯示出許多開發者正在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：面临高考志愿选择或职业规划的学生及职场新人。

> [!example] 使用場景
> - 高中生用它來選擇高考志願，因為它能提供基於家庭背景和就业市场的深度分析，避免盲目跟風。
> - 大学生用它来决定是否考研，因為它能分析不同专业的就业前景，帮助学生做出明智选择。
> - 职场新人用它来规划职业发展，因為它能提供针对性的建议，帮助他们在复杂的职场环境中找到方向。

## 架構分析

该工具采用了简单的命令行接口，用户通过 npx 安装后，可以直接在 Claude Code 中与系统交互。设计上，强调快速上手和易用性，用户只需输入具体问题即可获得建议。由于依赖较少，用户可以快速集成到现有的工作流中。整体架构轻量，适合快速迭代和更新。未来可能会扩展更多心智模型和决策启发式，以增强分析深度。

## 技術深入分析

张雪峰.skill 的核心在于其思维框架的提炼，结合了张雪峰的多本著作和深度采访，形成了一套完整的决策分析体系。用户通过简单的命令行指令即可与系统互动，获取个性化的建议。该工具的设计理念是快速、实用，旨在帮助用户在面对复杂选择时，提供清晰的思路和方向。虽然该工具在分析深度上有所限制，但其提供的心智模型和决策启发式能够有效引导用户思考。未来，随着用户反馈的积累，可能会进一步扩展功能，增强分析的深度和广度。整体来看，该工具在职业规划领域具有较高的实用价值。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了详细的安装步骤和使用示例。安装过程顺畅，没有明显的坑。虽然没有专门的 getting started guide，但通过示例可以快速上手。文件没有中文版本，但内容易于理解。

## 優缺點分析

> [!success] 優點
> - 提供个性化的职业规划建议，适合不同背景的用户。
> - 基于深度调研，确保建议的实用性和针对性。
> - 安装和使用过程简单，适合快速上手。

> [!danger] 缺點
> - 依赖用户提供的信息质量，信息不全可能导致建议不准确。
> - 不适合没有明确问题的用户，建议需要具体情境。
> - 缺乏对复杂多变量的深入分析能力。

> [!warning] 注意事項
> - 不适合没有明确问题的用户，建议需要具体情境。
> - 依赖于用户提供的信息质量，信息不全可能导致建议不准确。
> - 不支持复杂的多变量分析，主要聚焦于职业选择和教育规划。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 适合个人使用和小型团队试用，但不建议在生产环境的核心路径上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 用户输入不准确可能导致建议不适用
  - 解法：确保提供详细的背景信息
- [MEDIUM] 对复杂问题的分析能力有限
  - 解法：将问题拆分为简单问题逐步分析
- [MEDIUM] 缺乏对多变量的深入分析能力
  - 解法：结合其他工具进行综合分析

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 高中生选择高考志愿 | 非常适合 | 提供基于家庭背景和就业市场的深度分析，避免盲目跟风。 |
| 大学生决定是否考研 | 适合 | 能够分析不同专业的就业前景，帮助学生做出明智选择。 |
| 职场新人规划职业发展 | 非常适合 | 提供针对性的建议，帮助他们在复杂的职场环境中找到方向。 |
| 没有明确职业目标的用户 | 不适合 | 需要具体情境才能提供有效建议。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到個性化的職業規劃建議，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，使用過程中無需擔心安全性問題。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

张雪峰.skill 主要与 Claude Code 结合使用，适合在教育和职业规划的场景中应用。用户可以在 Claude Code 中直接调用该工具，进行个性化的职业分析。与主流的教育咨询工具相比，该工具提供了更深度的个性化建议，能够更好地满足用户的需求。整合过程简单，用户只需安装并输入问题即可，无需复杂的配置。

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
| Forks | 2.1k |
| Open Issues | 9 |
| Issue 解決率 | 79% (34 closed) |
| 最後推送 | 2026-04-10 |
| 建立日期 | 2026-04-05 |
| Repo 大小 | 103 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/alchaincyf/zhangxuefeng-skill) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alchaincyf](https://github.com/alchaincyf) | 6 |

## 社群與生態

**社群活躍度**：社群活躍，近期有多個熱門問題和討論。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-05 ~ 2026-04-10）
> **活躍天數** 5 天 · **最新 commit** fix: update 小红书 display name from 花生 to 花叔

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/alchaincyf/zhangxuefeng-skill/issues/5) | 他虽然离开了我们，但他又还在。 | 6 | 1 |
> | [#1](https://github.com/alchaincyf/zhangxuefeng-skill/issues/1) | 趁着现在多收集一些数据，功德无量 | 5 | 2 |
> | [#3](https://github.com/alchaincyf/zhangxuefeng-skill/issues/3) | 已收录到 Awesome Persona Distill Skills，欢迎查看与补充 | 4 | 0 |
> | [#4](https://github.com/alchaincyf/zhangxuefeng-skill/issues/4) | 已将您的 skill 收录到同事.skill 网站啦！ | 1 | 1 |
> | [#43](https://github.com/alchaincyf/zhangxuefeng-skill/issues/43) | 律师职业规划 | 0 | 0 |

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

相關概念：[[职业规划]] · [[教育咨询]] · [[决策分析]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[alchaincyf--nuwa-skill|alchaincyf/nuwa-skill]] · [[alvinunreal--awesome-opensource-ai|alvinunreal/awesome-opensource-ai]] · [[farzaa--clicky|farzaa/clicky]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]]

[GitHub](https://github.com/alchaincyf/zhangxuefeng-skill)

## 相關收錄

> [!note]- 直接競品（同子分類：职业规划）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "职业规划" AND file.name != "alchaincyf--zhangxuefeng-skill"
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
> const concepts = ["职业规划","教育咨询","决策分析"];
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
