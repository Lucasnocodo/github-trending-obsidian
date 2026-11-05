---
repo: BryceYuuu/RUN
url: https://github.com/BryceYuuu/RUN
owner: BryceYuuu
owner_type: User
language: Python
license: CC-BY-SA-4.0
description: "RUN · 润：海外移居手册（欧洲 36 国 · 110 条路线 · 主要移民地区）"
homepage: ""
stars: 3810
stars_per_day: 635
forks: 273
open_issues: 3
created: 2026-10-29
pushed_at: 2026-11-03
first_seen: 2026-11-03
week: "2026-W45"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-03
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-11-08"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 339
readme_length: 9204
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-11-03"
star_history: "2026-11-03:2134,2026-11-04:3310,2026-11-05:3810"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "RUN"
  - "BryceYuuu/RUN"
---

# RUN

**2.1k** stars · **534** stars/天 · 建立 4 天前 · Python · CC-BY-SA-4.0

```dataviewjs
const me = dv.page("Repos/BryceYuuu--RUN");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!warning] AI 摘要產生失敗
> 此筆記的中文翻譯和分析未能成功產生。以下為原始資料，你可以手動補充。

`個人專案`

> [!summary] 一句話摘要
> RUN · 润：海外移居手册（欧洲 36 国 · 110 条路线 · 主要移民地区）

## 專案簡介

RUN · 润：海外移居手册（欧洲 36 国 · 110 条路线 · 主要移民地区）

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/BryceYuuu--RUN");
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
> const me = dv.page("Repos/BryceYuuu--RUN");
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
| Forks | 147 |
| Open Issues | 0 |
| 最後推送 | 2026-11-03 |
| 建立日期 | 2026-10-29 |
| Repo 大小 | 339 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/BryceYuuu/RUN) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@BryceYuuu](https://github.com/BryceYuuu) | 3 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-29 ~ 2026-11-03）
> **活躍天數** 3 天 · **最新 commit** RUN · 润

## README 摘錄

> [!info]- 展開查看原文 README
> # RUN · 润
> 
> ### 一本海外移居手册
> 
> 数字游民 · 技术移民 · 欧盟蓝卡 · 创业自雇 · 投资居留
> 
> [](README.en.md)
> 
> **[🧭 我该走哪条路](docs/routes/choose-route.md)** ｜ **[🌏 主要移民地区](docs/global/README.md)** ｜ **[🇪🇺 欧洲 36 国](docs/europe/README.md)** ｜ **[📊 路线对比](docs/europe/README.md#compare)** ｜ **[📑 文件准备](docs/practical/china-documents.md)**
> 
> > [!NOTE]
> > **📅 最新更新：2026 年 11 月 3 日**
> > - 🇬🇧 **英国永居定案**（11-02）：标准 10 年，高收入 3 / 5 年；**学签、毕业生签证、HPI 时间不再计入永居**；"十年长居"路线关闭，2026 年 12 月起陆续写入规则 → [详情](docs/europe/united-kingdom.md#deep)
> > - 🇨🇦 **加拿大 Express Entry 新规生效**（11-03）：加拿大工作经验、高薪职业 offer 加分，offer 不再需要 LMIA → [详情](docs/global/canada.md)
> > - 🇧🇪 **比利时蓝卡**审理时限缩短为 90 天 → [详情](docs/europe/belgium.md)
> 
> > [!CAUTION]
> > 本手册仅供信息参考，**不构成**移民、法律、税务或投资建议。2025–2026 年大量路线关闭或改规则，网上很多旧攻略已经失效——任何决定前请以各国官方页面为准。详见 [免责声明](DISCLAIMER.md)。
> 
> ---
> 
> ## 🚪 你是哪种情况？
> 
> ### 💻
> **[数字游民](docs/routes/digital-nomad.md)**
> 
> 为境外雇主或客户远程工作，想换个国家生活
> 
> 15 条欧洲路线 · 月入 €330 起
> 
> ### 🧑‍💻
> **[技术工作 · 蓝卡](docs/routes/skilled-work.md)**
> 
> 拿到当地雇主 offer：工作 → 居留 → 永居 → 入籍
> 
> 50+ 条路线 · 最快 21 个月永居
> 
> ### 🎓
> **[留学 → 工作 → 移民](docs/routes/study-to-work.md)**
> 
> 毕业后 6–36 个月找工作签证，再转工作签
> 
> 德国 18 个月 · 芬兰 2 年 · 爱尔兰硕士 2 年
> 
> ### 🚀
> **[创业 · 自雇](docs/routes/startup-self-employed.md)**
> 
> 在当地开公司、做自由职业
> 
> 爱沙尼亚、爱尔兰 STEP、荷兰、丹麦…
> 
> ### 🏖️
> **[被动收入 · 退休](docs/routes/passive-income.md)**
> 
> 靠养老金、租金、存款生活，不在当地工作
> 
> 葡萄牙 D7 €920/月起 · 西班牙 NLV
> 
> ### 💰
> **[投资居留 · 入籍](docs/routes/investment.md)**
> 
> 用投资换身份，住得少也能保持
> 
> 希腊 · 塞浦路斯 · 马耳他 · 匈牙利
> 
> ---
> 
> ## 🌏 主要移民地区
> 
> 🇺🇸美国H-1B · NIW · EB-5
> 🇨🇦加拿大Express Entry · 省提名
> 🇦🇺澳大利亚189 · 482 · 858
> 🇳🇿新西兰SMC · 投资移民
> 🇯🇵日本高度人才 · 经管签
> 🇰🇷韩国F-1-D · Top-Tier
> 🇸🇬新加坡EP · ONE Pass
> 
> 🇭🇰香港高才通 · 优才
> 🇵🇭菲律宾SRRV 退休 · SIRV
> 🇹🇭泰国DTV · LTR
> 🇲🇾马来西亚DE Rantau · MM2H
> 🇦🇪阿联酋黄金签证
> 🌎拉美墨西哥 · 巴拿马…
> 🇬🇧英国见欧洲篇
> 
> ---
> 
> ## 🇪🇺 欧洲 36 国
> 
> > [!NOTE]
> > 每个国家页都有 **🏙️ 生活与身份档案**（生活成本、房租、安全、平均工资、个税、护照、永居和入籍年限、双重国籍、中国护照入境方式），以及每条路线的关键数字、流程图和材料清单。横向对比见 [生活与身份对比表](docs/europe/README.md#profiles)。
> 
> 💻 数字游民 · 🧑‍💻 技术工作 · 🚀 创业 · 🧾 自雇 · 🏖️ 被动收入 · 💰 投资 · 🛂 入籍 · 🧩 其他
> 
> 🇦🇱 阿尔巴尼亚Albania · 1 条路线 💻数字游民许可门槛极低（月入约 EUR 330），适合低预算试住🇦🇩 安道尔Andorra · 1 条路线 💰被动居留 2026 起涨到 EUR 100 万投资 + 配额，门槛很高🇦🇹 奥地利Austria · 3 条路线 🧑‍💻 🧾红白红卡积分制 / 蓝卡 EUR 55,678，21 个月转 Plus 卡🇧🇪 比利时Belgium · 3 条路线 🧑‍💻 🧾工作许可按大区审批，四个大区门槛各不同
> 🇧🇬 保加利亚Bulgaria · 3 条路线 🚀 🧑‍💻无数字游民签证；蓝卡 + StartUp Visa 证书，税率 10%🇭🇷 克罗地亚Croatia · 3 条路线 💻 🧑‍💻数字游民最长 18 个月、境外收入免税，但不能续成长期身份🇨🇾 塞浦路斯Cyprus · 4 条路线 💰 💻 🧑‍💻30 万欧投资永居约 2 个月获批；数字游民名额 500🇨🇿 捷克Czechia · 3 条路线 💻 🧑‍💻员工卡门槛低；数字游民计划不含中国大陆护照
> 🇩🇰 丹麦Denmark · 2 条路线 🚀 🧑‍💻不签蓝卡，走 Pay Limit（DKK 55.2 万/年）等本国路线🇪🇪 爱沙尼亚Estonia · 4 条路线 💻 🚀 🧑‍💻数字游民是 D 签证非居留；就业许可最长 5 年🇫🇮 芬兰Finland · 3 条路线 🧑‍💻 🧾专家许可与蓝卡同为 EUR 3,937/月，快速通道 2 周🇫🇷 法国France · 3 条路线 🧑‍💻 🧾人才护照员工类年薪 EUR 39,582 即可，首卡最长 4 年
> 🇩🇪 德国Germany · 4 条路线 🧑‍💻 🧾蓝卡 EUR 50,700（IT 无学历可办），最快 21 个月永居🇬🇷 希腊Greece · 5 条路线 🏖️ 💰 💻 🧑‍💻黄金签证 40/80 万欧买房；数字游民 EUR 3,500/月🇭🇺 匈牙利Hungary · 4 条路线 💰 💻 🧑‍💻25 万欧基金换 10+10 年居留可工作；白卡不能带家属🇮🇸 冰岛Iceland · 1 条路线 🧩旧远程工作签证已废止，目前无可用数字游民路线
> 🇮🇪 爱尔兰Ireland · 2 条路线 🚀 🧑‍💻不签蓝卡；Critical Skills EUR 40,904 起，英语国家🇮🇹 意大利Italy · 4 条路线 🏖️ 💰 💻 🧑‍💻数字游民须高技能；投资者签证 25 万欧起（非房产）🇱🇻 拉脱维亚Latvia · 4 条路线 💰 💻 🧑‍💻2026 新法关闭买房居留；蓝卡门槛 EUR 2,723/月🇱🇮 列支敦士登Liechtenstein · 1 条路线 🧩配额 + 抽签，第三国国民几乎不可行
> 🇱🇹 立陶宛Lithuania · 3 条路线 🚀 🧑‍💻2024 起工作必须本国居留；Startup Visa 免资本要求🇱🇺 卢森堡Luxembourg · 2 条路线 🧑‍💻 🧾蓝卡 EUR 65,652 但首卡 4 年；自雇许可 3 年🇲🇹 马耳他Malta · 8 条路线 💰 💻 🛂 🧑‍💻MPRP 永居约 11–47 万欧；数字游民最长 4 年🇲🇪 黑山Montenegro · 2 条路线 💰 💻非申根；数字游民 2+2 年最友好；投资入籍已关闭
> 🇳🇱 荷兰Netherlands · 3 条路线 🧑‍💻 🧾高技术移民 30 岁以下 EUR 4,357/月，需认可雇主🇳🇴 挪威Norway · 1 条路线 🧾技术自雇许可禁止远程工作；3 年可申请永居🇵🇱 波兰Poland · 3 条路线 🧑‍💻 🧾工作许可门槛低；2026-04 起全部 MOS 线上递交🇵🇹 葡萄牙Portugal · 6 条路线 🏖️ 💰 💻 🧑‍💻数字游民 EUR 3,680/月；黄金签证不能买房；入籍改为 10 年
> 🇷🇴 罗马尼亚Romania · 3 条路线 💻 🧑‍💻数字游民门槛最高之一（约 EUR 5,500/月）；蓝卡门槛低🇸🇰 斯洛伐克Slovakia · 3 条路线 🧑‍💻 🧾蓝卡门槛全欧最低之一 EUR 1,944/月，首卡 5 年🇸🇮 斯洛文尼亚Slovenia · 3 条路线 💻 🧑‍💻数字游民 2025 新开、家属可立即团聚；蓝卡 1 倍平均工资🇪🇸 西班牙Spain · 2 条路线 🏖️ 💻数字游民 EUR 2,442/月起；黄金签证 2025 年已关闭
> 🇸🇪 瑞典Sweden · 3 条路线 🧑‍💻 🧾2026 起工作许可须达中位工资 90%（SEK 34,470/月）🇨🇭 瑞士Switzerland · 1 条路线 🧾第三国国民配额 + 优先本地，基本只适合高端人才🇹🇷 土耳其Türkiye · 1 条路线 🛂USD 40 万买房可申请入籍（非欧盟护照）🇬🇧 英国United Kingdom · 3 条路线 🧑‍💻永居 2026-11 定案改为标准 10 年；学签、毕业生签证不再计入
> 
> ---
> 
> ## 📰 2025–2026 必须知道的变化
> 
> | 时间 | 国家 | 类型 | 变化 |
> |---|---|:-:|---|
> | 2025-04-03 | 🇪🇸 [西班牙](docs/europe/spain.md) | ⛔ 关闭 | 黄金签证全部投资类别停止受理新申请 |
> | 2025-07 | 🇲🇹 [马耳他](docs/europe/malta.md) | ⛔ 关闭 | 投资入籍（护照项目）在欧盟法院判决后被废止，只剩功绩入籍 |
> | 2025-10-16 | 🇯🇵 [日本](docs/global/japan.md) | 🔺 收紧 | 经营管理签证资本金 500 万 → 3,000 万日元，并须雇员和日语 |
> | 2025-11-21 | 🇸🇮 [斯洛文尼亚](docs/europe/slovenia.md) | 🆕 新开 | 新开数字游民许可；蓝卡门槛降至平均工资 1 倍 |
> | 2026-01-01 | 🇧🇬 [保加利亚](docs/europe/bulgaria.md) | 🔄 变化 | 改用欧元（2025 年已完整加入申根） |
> | 2026-01-08 | 🇫🇮 [芬兰](docs/europe/finland.md) | 🔄 变化 | 永居新规：年收入 ≥ EUR 40,000 可 4 年申请 |
> | 2026 | 🇵🇹 [葡萄牙](docs/europe/portugal.md) | 🔺 收紧 | 国籍法改革：入籍从 5 年改为一般 10 年 |
> | 2026 | 🇦🇩 [安道尔](docs/europe/andorra.md) | 🔺 收紧 | 被动居留投资门槛涨到 EUR 100 万 + 年度配额 |
> | 2026 | 🇸🇪 [瑞典](docs/europe/sweden.md) | 🔺 收紧 | 工作许可须达中位工资 90%（SEK 34,470/月） |
> | 2026 | 🇷🇴 [罗马尼亚](docs/europe/romania.md) | 🔄 变化 | 工作移民改为 WorkinRomania 平台 + D/AM 签证 |
> | 2026-04-27 | 🇵🇱 [波兰](docs/europe/poland.md) | 🔄 变化 | 居留申请全部改为 MOS 线上递交 |
> | 2026-05 | 🇮🇸 [冰岛](docs/europe/iceland.md) | ⛔ 关闭 | 远程工作长期签证废止 |
> | 2026-06-30 | 🇨🇦 [加拿大](docs/global/canada.md) | ⛔ 关闭 | 联邦创业签证（SUV）完全暂停 |
> | 2026-06-30 | 🇰🇷 [韩国](docs/global/south-korea.md) | 🆕 新开 | F-1-D 数字游民签证转为正式签证，最长 3 年 |
> | 2026-09-15 | 🇱🇻 [拉脱维亚](docs/europe/latvia.md) | ⛔ 关闭 | 新《移民法》关闭买房居留和银行次级债居留 |
> | 2026-09-30 | 🇺🇸 [美国](docs/global/usa.md) | 🔄 变化 | 法院阻止执行 H-1B 10 万美元附加费；抽签改为按工资加权 |
> | 2026-11-02 | 🇬🇧 [英国](docs/europe/united-kingdom.md) | 🔺 收紧 | 永居定案：标准 10 年（高收入 3/5 年）；学签、毕业生签证、HPI 时间不再计入；十年长居路线关闭；2026-12 起写入规则 |
> | 2026-11-03 | 🇨🇦 [加拿大](docs/global/canada.md) | 🔄 变化 | Express Entry 新规生效：加拿大工作经验和高薪职业 offer 加分，offer 不再需要 LMIA |
> 
> ---
> 
> ## 📈 一图看门槛
> 
> **⚡ 最快拿永居**
> - 🇨🇾 塞浦路斯投资永居 — 直接，约 2 个月
> - 🇲🇹 马耳他 MPRP — 直接
> - 🇩🇪 德国蓝卡 + B1 德语 — 21 个月
> - 🇦🇹 奥地利红白红卡 Plus — 21 个月
> - 🇯🇵 日本高度人才 80 分 — 1 年
> 
> **💸 门槛最低**
> - 🇦🇱 阿尔巴尼亚数字游民 — 月入约 €330
> - 🇪🇸 西班牙数字游民 — €2,442/月
> - 🇸🇰 斯洛伐克蓝卡 — €1,944/月
> - 🇵🇱 波兰普通工作许可 — 最低工资即可
> - 🇨🇿 捷克员工卡 — 最低工资即可
> 
> **🚫 中国大陆护照不适用**
> - 🇨🇿 捷克数字游民计划
> - 🇯🇵 日本数字游民签证
> - 🇱🇻 拉脱维亚远程工作签证（雇主须 OECD）
> - 🇵🇦 巴拿马友好国家签证
> - 🇺🇸 E-2 条约投资者
> 
> ---
> 
> ## 📚 实用指南
> 
> | | 指南 | 内容 |
> |:-:|---|---|
> | 🧭 | [我该走哪条路？](docs/routes/choose-route.md) | 四步判断：收入来源 → 目标 → 护照限制 → 自检清单 |
> | 🎓 | [留学 → 工作 → 移民](docs/routes/study-to-work.md) | 欧洲及全球毕业后找工作签证期限对比 |
> | 🏙️ | [生活与身份对比表](docs/europe/README.md#profiles) | 36 国生活成本、工资、个税、护照、入籍年限、双重国籍 |
> | 📑 | [中国申请人文件准备](docs/practical/china-documents.md) | 海牙认证、无犯罪、学历认证、姓名拼音、资金合规 |
> | 🧾 | [税务居民入门](docs/practical/tax-residency.md) | 居留 ≠ 税务居民；183 天规则；各国特殊税制 |
> | ✅ | [落地前 90 天清单](docs/practical/landing-checklist.md) | 住址登记、居留卡、税号、银行、续签时间点 |
> | 🔗 | [资源导航](docs/resources.md) | 官方门户、类似网站、其他润学项目 |
> | 📊 | [programmes.csv](data/programmes.csv) | 99 条路线的结构化数据，可直接用 Excel 打开 |
> 
> ---
> 
> ## 🧭 一张图选路线
> 
> ```mermaid
> flowchart LR
>     A([你的收入从哪来？]) --> B(目的国雇主 offer)
>     A --> C(境外雇主/客户)
>     A --> D(自己当老板)
>     A --> E(一笔长期闲置资金)
>     B --> B1[🧑‍💻 技术工作 / 欧盟蓝卡德国 · 荷兰 · 爱尔兰 · 法国]
>     C --> C1[💻 数字游民签证西班牙 · 葡萄牙 · 希腊 · 克罗地亚]
>     D --> D1[🚀 创业 / 自雇爱尔兰 STEP · 芬兰 · 荷兰]
>     E --> E1[💰 投资居留希腊 · 塞浦路斯 · 马耳他 · 匈牙利]
> ```
> 
> 更细的判断见 [我该走哪条路？](docs/routes/choose-route.md)
> 
> ---
> 
> 📁 项目结构 & 如何参与
> 
> ```text
> RUN/
> ├── README.md                 ← 你在这里
> ├── docs/
> │   ├── europe/               欧洲 36 国，每国一页（自动生成）
> │   ├── routes/               按路线：决策指南、数字游民、技术工作、创业、投资
> │   ├── global/               美加澳新、日韩新港台、泰马、阿联酋、拉美
> │   ├── practical/            文件准备、税务居民、落地清单
> │   └── resources.md
> ├── data/                     programmes.csv/json、changes.json、指南索引
> ├── src/
> │   ├── details/.json    每条路线的关键数字、流程、材料、注意事项
> │   └── notes/.md        每个国家的深度解读
> ├── assets/charts/            自动生成的 SVG 图表
> └── scripts/build_docs.py     由 data + src 生成 docs/europe、图表和本页的自动区块
> ```
> 
> 修改国家内容请编辑 `src/`，然后运行：
> 
> ```bash
> python3 scripts/build_docs.py
> ```
> 
> 发现过时信息欢迎提 Issue / PR，请附官方来源链接。详见 [CONTRIBUTING.md](CONTRIBUTING.md)。
> 
> 📚 

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/BryceYuuu/RUN)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "BryceYuuu--RUN"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "BryceYuuu--RUN" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W45" AND file.name != "BryceYuuu--RUN"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/BryceYuuu--RUN");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "BryceYuuu--RUN" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "BryceYuuu" AND file.name != "BryceYuuu--RUN"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/BryceYuuu--RUN");
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
> const me = dv.page("Repos/BryceYuuu--RUN");
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
> const me = dv.page("Repos/BryceYuuu--RUN");
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
> const me = dv.page("Repos/BryceYuuu--RUN");
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
> const me = dv.page("Repos/BryceYuuu--RUN");
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

> **2026-11-03** — 首次收錄
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

- [[2026-11-05|2026-11-05]] — 再次上榜，3.8k stars
- [[2026-11-04|2026-11-04]] — 再次上榜，3.3k stars
- [[2026-11-03|2026-11-03]] — 首次收錄，2.1k stars
