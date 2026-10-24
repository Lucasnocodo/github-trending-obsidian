---
repo: xiaoyang111222/cn-math-taxonomy
url: https://github.com/xiaoyang111222/cn-math-taxonomy
owner: xiaoyang111222
owner_type: User
language: Python
license: NOASSERTION
description: "中小学知识图谱 + 前置诊断：数学（一–九年级、高中必修与选择性必修）+ 英语（小学、初中），课标对齐、人教版，1244 知识点、5123 题、自适应诊断"
homepage: "https://math.pansgo.com/"
stars: 2890
stars_per_day: 578
forks: 661
open_issues: 6
created: 2026-10-18
pushed_at: 2026-10-24
first_seen: 2026-10-21
week: "2026-W43"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-21
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-10-27"
contributor_count: 1
engagement: "medium"
issue_close_rate: 50
repo_size_kb: 25637
readme_length: 9985
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-10-21"
star_history: "2026-10-21:1703,2026-10-22:2060,2026-10-23:2340,2026-10-24:2890"
tags:
  - github
  - "category/other"
  - "lang/python"
  - "topic/chinese"
  - "topic/curriculum"
  - "topic/diagnostic"
  - "topic/edtech"
  - "topic/education"
aliases:
  - "cn-math-taxonomy"
  - "xiaoyang111222/cn-math-taxonomy"
---

# cn-math-taxonomy

**1.7k** stars · **852** stars/天 · 建立 2 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/xiaoyang111222--cn-math-taxonomy");
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

`chinese` `curriculum` `diagnostic` `edtech` `education` `elementary-school` `english` `high-school` `junior-high-school` `k12` `knowledge-graph` `math` `mathematics` `middle-school` `open-data` `primary-school`

> [!summary] 一句話摘要
> 中小学知识图谱 + 前置诊断：数学（一–九年级、高中必修与选择性必修）+ 英语（小学、初中），课标对齐、人教版，1244 知识点、5123 题、自适应诊断

## 專案簡介

中小学知识图谱 + 前置诊断：数学（一–九年级、高中必修与选择性必修）+ 英语（小学、初中），课标对齐、人教版，1244 知识点、5123 题、自适应诊断

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/xiaoyang111222--cn-math-taxonomy");
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
> const me = dv.page("Repos/xiaoyang111222--cn-math-taxonomy");
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
| Forks | 374 |
| Open Issues | 1 |
| Issue 解決率 | 50% (1 closed) |
| 最後推送 | 2026-10-21 |
| 建立日期 | 2026-10-18 |
| 官方網站 | [Link](https://math.pansgo.com/) |
| Repo 大小 | 25.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/xiaoyang111222/cn-math-taxonomy) |
| Topics | `chinese` `curriculum` `diagnostic` `edtech` `education` `elementary-school` `english` `high-school` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 75
>     "JavaScript" : 22
>     "CSS" : 2
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@xiaoyang111222](https://github.com/xiaoyang111222) | 31 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-20 ~ 2026-10-21）
> **活躍天數** 2 天 · **最新 commit** 加入初中英语的知识点、先修、题库和课标

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/xiaoyang111222/cn-math-taxonomy/issues/3) | [建议] 教材版本是老教材，2026年9月已发布新版教材，希望能更新。 `功能建议` | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 中小学知识图谱（数学 + 英语）
> 
> 对齐《义务教育数学课程标准（2022 年版）》、《普通高中数学课程标准（2017年版2020年修订）》的**必修和选择性必修**，以及《义务教育英语课程标准（2022年版）》一级、二级和三级（7–9 年级）。数学教材是人教版一–九、人教 A 版（2019）必修两册和选择性必修三册；英语按人教 PEP（三年级起点）三上到六下，以及人教版 Go for it! 七上到九年级全一册。附**自适应前置诊断**与题库。数学答错会沿先修边从高中、初中一直回溯到具体的小学知识点。英语单独成图，不和数学连边；初中英语会连回小学英语。仓库名仍是 `cn-math-taxonomy`。
> 
> **范围：数学高中做到必修和选择性必修，并且只用人民教育出版社 A 版（2019）；英语做到三年级到九年级。这是 AI 生成的初稿。** 7.3「复数的三角表示」仍按教材选学处理，没有单独建点。定积分不在选择性必修的内容要求里，没有建点。英语不出听力和口语题。
> 
> [](https://creativecommons.org/licenses/by-nc/4.0/)
> [](https://math.pansgo.com/)
> [](https://xiaoyang111222.github.io/cn-math-taxonomy/)
> 
> **[→ 在线试用诊断（演示：配方法）](https://math.pansgo.com/diagnose/?target=cnm_221&demo=1)** · [首页](https://math.pansgo.com/) · [知识图谱](https://math.pansgo.com/explore/) · [诊断工具](https://math.pansgo.com/diagnose/) · [GitHub Pages 备份](https://xiaoyang111222.github.io/cn-math-taxonomy/)
> 
> | | 知识点 | 先修边 | 课标条目 | 题库 |
> | --- | ---: | ---: | ---: | ---: |
> | 小学（1–6 年级） | 216 | 311（小学内部） | 73（第一至三学段） | 864 |
> | 初中（7–9 年级） | 315 | 563（初中内部，未改） | 157（第四学段） | 1407 |
> | 高中必修 | 143 | 144（高中内部） | 48（2017 必修，待核） | 572 |
> | 高中选择性必修 | 128 | 148（选择性必修内部） | 32（2017 选择性必修，待核） | 512 |
> | 数学合计 | 802 | 1299（另有初中→小学 35、必修跨学段 52、选择性必修跨模块 46） | 310 | 3355 |
> | 小学英语（3–6 年级） | 197 | 236（hard 50，soft 186；不与数学相连） | 35（2022 英语一级、二级，全部待核） | 788 |
> | 初中英语（7–9 年级） | 245 | 342（hard 105，soft 237；其中 29 条硬边指向小学英语） | 37（2022 英语三级，全部待核） | 980 |
> 
> 数据格式参考 [Marble os-taxonomy](https://github.com/withmarbleapp/os-taxonomy)（`topics` + `dependencies`）。
> 
> **反馈 / 挑错：** 题干、答案或先修关系有问题，或想提功能建议，请 [提交 Issue](https://github.com/xiaoyang111222/cn-math-taxonomy/issues/new/choose)（已提供「题目纠错」「功能建议」模板）。
> 
> > **状态声明：这是 AI 生成的初稿，未经任何教师审核。** 小学、初中、高中数学，以及小学、初中英语都一样。
> > 知识点的拆分粒度、掌握标准、诊断题答案，尤其是**先修关系（哪些是 hard、哪些是 soft，甚至某条边该不该存在）都需要一线教师审核**后才能用于教学、诊断或学习路径推荐。小学和初中数学的诊断题有自动核验，初中数学另有盲解复核，小学数学有独立程序复核；**高中题和英语题没有做盲解**，`verify` 和答案来自同一条表达式。小学册次目录、高中课标正文和高中章节目录多数不是官方逐页核对。英语课标正文、人教 PEP 与 Go for it! 的单元目录都没有逐页核对，标了「待核」的不要当成官方原文或页码。
> >
> > **册次标注：** 人教 A 版必修第二册通常在高一下学期讲授。本仓库为了把两册分成两个 `grade`，把必修第一册标成 10 / 高一，必修第二册标成 11 / 高二必修。选择性必修三册继续用 12 / 选必一、13 / 选必二、14 / 选必三，页面上不写成高三、高四。这都不是教学进度的规定，待教师调整。
> 
> 
> # 访问 http://localhost:8000/diagnose/            （演示：?target=cnm_221&demo=1）
> node tests/test_engine.js                          # 引擎测试
> node scripts/screenshot.js                         # 冒烟测试 + 截图（需要本机 Chrome）
> ```
> 
> 算法说明、判题规则、URL 参数与局限见 [diagnose/README.md](diagnose/README.md)。首页、知识图谱和诊断页顶部都有同一套导航。每个知识点最多问 2 题，诊断结果只是线索。
> 
> 
> ## 数据来源与对齐依据
> 
> - **课程标准**：教育部《义务教育数学课程标准（2022年版）》第一至第四学段（1—9 年级）的【内容要求】，以及《普通高中数学课程标准（2017年版2020年修订）》必修五个主题和选择性必修（函数、几何与代数、概率与统计、数学建模与数学探究）的公开转述。`data/cn-curriculum-standards.json` 现有 **310** 条（义务教育 230 + 高中必修 48 + 高中选择性必修 32）。第四学段条文仍是原先从教育部 PDF 识别的原文；第一至三学段和高中条目都**未与教育部 PDF 逐页核对**，高中条目一律 `verbatim: false`、`page_or_ref` 为「待核」。来源、规则、覆盖率与局限见 [docs/standards-mapping.md](docs/standards-mapping.md)。高中编号是本图谱自编的 `cms-2017:H..NN`，不是教育部原编号。
> - **教材顺序**：人民教育出版社（人教版）义务教育教科书数学。**初中**采用 2024 年审定的新版，章节目录取自第三方电子课本目录站 dzskb.com（非人教社官方页面），核对情况如下（小学各册见下文「小学册次目录」）：
> 
>   | 册次 | 采用的目录 | 核实情况 |
>   |---|---|---|
>   | 七上 | 第一章 有理数 … 第六章 几何图形初步 | 已核对目录页 |
>   | 七下 | 第七章 相交线与平行线 … 第十二章 数据的收集、整理与描述 | 已核对目录页 |
>   | 八上 | 第十三章 三角形 … 第十八章 分式（2024 审定版） | 已核对目录页 |
>   | 八下 | 第十九章 二次根式 … 第二十四章 数据的分析（2024 审定版） | 已核对目录页 |
>   | 九上 | 第二十五章 一元二次方程 … 第三十章 直线与圆的位置关系（2024 审定版） | 已核对目录页 |
>   | 九下 | 第三十一章 相似；第三十二章 锐角三角函数（章末综合与实践：停车设计问题）；第三十三章 投影与视图（章末综合与实践：建筑中的数学）；第三十四章 随机事件的概率（34.1.1 随机事件，34.1.2 概率，34.2 用列举法求概率，34.3 用频率估计概率） | **非官方、待核**，详见下方「九下目录的来源与核实情况」 |
> 
>   新版教材相对旧版有较大调整（如多边形移入八下“四边形”、反比例函数移入九上、新增“数据的四分位数”“综合与实践”主题、概率由九上移到九下并改名“随机事件的概率”等），本图谱按新版目录处理。
> 
> 
> ### 九下目录的来源与核实情况（查证日期：2026-10-17；**非官方、待核**）
> 
> **结论**：没有找到人教社（pep.com.cn）官方发布的 2024 版九下目录页（官方“新教材介绍”页只介绍编写思路，未列各册章目；pep.com.cn 的“数学 九年级下册”页是旧版封面，页面不显示目录）。九下的 2024 版教材预计 2027 年春季学期才开始使用。下列目录是综合第三方来源后的**最可靠推定**，并非官方原文，章名、章号请以教材实物或人教社官方目录为准。
> 
> | 章 | 采用的章名 | 依据 |
> |---|---|---|
> | 第三十一章 | 相似 | 来源 A（搜索摘要）；与来源 D 的九上末章“第三十章”衔接 |
> | 第三十二章 | 锐角三角函数；章末“综合与实践：停车设计问题” | 来源 A（搜索摘要） |
> | 第三十三章 | 投影与视图；章末“综合与实践：建筑中的数学” | 来源 A（搜索摘要） |
> | 第三十四章 | 随机事件的概率：34.1.1 随机事件、34.1.2 概率、34.2 用列举法求概率、34.3 用频率估计概率 | 来源 B、C |
> 
> 来源：
> - A：知乎专栏《2024年秋季学期修订人教版初中数学7-9年级教材目录》https://zhuanlan.zhihu.com/p/706262283 。正文需登录无法读取，**只看到搜索结果摘要**：“九年级下册：第三十一章相似 第三十二章锐角三角函数 综合与实践：停车设计问题 第三十三章投影与视图 综合与实践：建筑中的数学 第三十四章随机……”（摘要在此截断）。
> - B：LibreMath 教辅页 https://libremath.cn/textbook/renjiao-jiuxia-sui-ji-shi-jian-de-gai-lv/ ，标称“人教版（2024 审定）九年级下册第三十四章《随机事件的概率》”，列出 34.1.1—34.3 各小节，并说明 2027 春起使用、章名由“概率初步”改为“随机事件的概率”。第三方教辅，非官方。
> - C：21cnjy 新教材九下页的搜索摘要（https://mip.21cnjy.com/mulu/7/326226-2.html ，页面本身抓取超时）：“第三十四章随机事件的概率 34.1 随机事件与概率 34.2 用列举法求概率 ……”，与 B 一致。
> - D：电子课本网 dzskb.com 的九上 2024 页 https://www.dzskb.com/rjbsx9sc-2024.html ，九上为第二十五至第三十章（反比例函数已在九上第二十七章），所以九下从第三十一章起，与 A 衔接。
> 
> **未采用的来源**：dzskb.com 标为“2024 审定版（现行）”的九下页 https://www.dzskb.com/rjbsx9sce-2024.html 列出的是“第二十六章 反比例函数 / 二十七 相似 / 二十八 锐角三角函数 / 二十九 投影与视图”，与同站旧版页内容完全相同，且与它自己的九上 2024 页矛盾（反比例函数不可能同时在九上第二十七章和九下第二十六章），判断为误标的旧版目录，不采用。
> 
> **仍待核的部分**：(1) 第三十一至三十三章的**小节号**没有查到，`chapter` 字段只写到章，不写小节号；第三十四章小节号来自 B、C。(2) “综合与实践”两项只来自来源 A 的摘要，活动的具体内容未核实，`cnm_290`、`cnm_291` 的描述与先修边是按主题名推定的。(3) 章内知识点是沿用第一版的拆分，没有逐节对照新教材。(4) 第三十四章章名“随机事件的概率”来自 B、C 两个第三方来源，来源 A 的摘要被截断。
> 
> 
> ### 小学教材目录（人教版；查证日期 2026-10-19）
> 
> 没有找到人教社（pep.com.cn）一次列全 1–6 年级各册单元的官方目录。新版（2024 起陆续审定）公开目录只覆盖到部分低年级；三至六年级按**现行版**单元名。下表写的是本图谱实际采用的单元，查不到官网的都标「非官方、待核」。总复习、整理和复习不建知识点。`chapter` 写成「X年级上册 第N单元 单元名」，综合与实践写成「X年级X册 综合与实践 名称」（没有多余空格，诊断工具按这个格式拆册次）。
> 
> | 册次 | 采用的目录 | 核实情况 |
> |---|---|---|
> | 一上（2024） | 开篇「数学游戏」（在校园 / 操场 / 教室里找一找、认一认、玩一玩，不单列知识点）；一 5以内数的认识和加、减法；二 6到10的认识和加、减法；三 认识立体图形；四 11到20的认识；五 20以内的进位加法；六 复习与关联（不建点） | **非官方、待核**。三处转载的编号单元一致：好多电子课本网 、教师之家 、21世纪教育网教学计划 。人教社官网全文目录未核到。图谱另有「综合与实践 我的教室」「综合与实践 数学游戏分享」，**不在上述目录的编号单元里**（教师之家把「在教室里认一认」放在开篇数学游戏中）。这两点按课标主题活动保留，没有为了对齐目录去改先修顺序。 |
> | 一下（2024） | 一 认识平面图形；二 20以内的退位减法；三 100以内数的认识；四 100以内的口算加、减法；五 100以内的笔算加、减法；六 数量间的加减关系；☆ 欢乐购物街（图谱写作综合与实践，认识人民币）；七 复习与关联（不建点） | **非官方、待核**。教师之家课文目录 （非人教社官网）。单元名与图谱一致。 |
> | 二上（2024） | 1 分类与整理；2 1～6的表内乘法；3 厘米和米；4 7～9的表内乘、除法；5 身体上的尺子；6 1～6的表内除法；7 校园小导游；8 复习与关联（不建点） | **非官方、待核**。课本网  标「人教版 二年级上册 2024版」。图谱把第 5 单元「身体上的尺子」、第 7 单元「校园小导游」写成综合与实践，**第 5 单元未单列、待核**，编号从第 4 跳到第 6。电子课本网另一份二年级上册目录（表内除法提前）与此顺序不同，未采用。 |
> | 二下 | 图谱只建了 4 个单元：有余数的除法、万以内数的认识、克和千克、混合运算 | **官方目录未核到，待核**。按「2024 上册已把表内乘除、厘米和米、方向放在上册」推定下册只留这些，没有查到 2024 下册目录原文。现行版常见目录仍是：数据收集整理、表内除法（一）（二）、图形的运动（一）、混合运算、有余数的除法、万以内数的认识、克和千克、数学广角——推理（学习力转载 ，非官方），**与本图谱不一致**。 |
> | 三上–四上（现行） | 三上：时、分、秒；万以内的加法和减法（一）；测量；万以内的加法和减法（二）；倍的认识；多位数乘一位数；长方形和正方形；分数的初步认识；数学广角——集合。三下：位置与方向（一）；除数是一位数的除法；复式统计表；两位数乘两位数；面积；年、月、日；小数的初步认识；数学广角——搭配。四上：大数的认识；公顷和平方千米；角的度量；三位数乘两位数；平行四边形和梯形；除数是两位数的除法；条形统计图；数学广角——优化 | **非官方、待核**。没有逐册打开人教社目录页。单元名沿用现行人教的常见顺序（与四下、五至六年级同一套现行版衔接）。2024 新版是否改这几册，未核到。时、分、秒和吨在课标里属于更早学段的主题活动，现行教材放在三年级上册，册次待核。 |
> | 四下（现行） | 1 四则运算；2 观察物体（二）；3 运算定律；4 小数的意义和性质；5 三角形；6 小数的加法和减法；7 图形的运动（二）；8 平均数与条形统计图；★ 营养午餐；9 数学广角——鸡兔同笼；10 总复习（不建点） | **非官方、待核**。学习力  与电子课本网  单元名一致。图谱与编号单元相同。**★营养午餐未建知识点**。 |
> | 五上–六下（现行） | 五上：小数乘法；位置；小数除法；可能性；简易方程；多边形的面积；数学广角——植树问题。五下：观察物体（三）；因数与倍数；长方体和正方体；分数的意义和性质；图形的运动（三）；分数的加法和减法；折线统计图；数学广角——找次品。六上：分数乘法；位置与方向（二）；分数除法；比；圆；百分数（一）；扇形统计图；数学广角——数与形。六下：负数；百分数（二）；圆柱与圆锥；比例；数学广角——鸽巢问题 | **非官方、待核**。教师之家汇总  与数学课  的五、六年级单元名一致（这两页的一、二年级仍是旧目录，一、二年级不采用它们）。六上 2022 年印次预览（）在「圆」后有综合与实践「确定起跑线」、扇形统计图后有「节约用水」，**本图谱未单列，待核**。 |
> 
> 数学广角保持为编号单元，领域记为综合与实践，不改成「综合与实践」那种 chapter 写法。
> - **旧的小学外部节点（方案 b）**：原来的 18 个 `cnm_ext_*` 已从 `topics.json` **删除**，不保留为汇总节点。`data/id-aliases.json` 把每个旧 id 映射到一个或多个小学正式知识点（`cnm_pNNN`）。根路径或知识图谱页遇到 `#cnm_ext_002` 会打开映射里的第一个小学知识点（地址栏仍保留这个旧编号）；诊断页 `?target=cnm_ext_002` 会把该旧 id 展开成映射里的全部小学知识点再开始诊断。图上不再有任何 `cnm_ext_*` 边。
> - **格式参考**：已阅读 Marble 的 `data/topics.json` / `data/dependencies.json`（节点含 `type`、`domain`、`evidence`、`assessmentPrompt`；边为 `topicId` 依赖 `prerequisiteId`）。其中文分支 [os-taxonomy-beijing](https://github.com/luw2007/os-taxonomy-beijing) 只读了 README，**没有解析它的数据文件**。本项目在字段含义上对应关系为：`mastery_criteria` ≈ `evidence`，`diagnostic_question` ≈ `assessmentPrompt`；但文件顶层是裸数组（没有 `version`/`topicCount` 包装），id 为 `cnm_NNN`，也没有 `centrality`、`ageRange`、`standards`。
> 
> 
> ## 文件
> 
> ```
> data/topics.json         知识点节点（JSON 数组）
> data/dependencies.json   先修边（JSON 数组

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/xiaoyang111222/cn-math-taxonomy) · [官方網站](https://math.pansgo.com/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "xiaoyang111222--cn-math-taxonomy"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "xiaoyang111222--cn-math-taxonomy" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W43" AND file.name != "xiaoyang111222--cn-math-taxonomy"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/xiaoyang111222--cn-math-taxonomy");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "xiaoyang111222--cn-math-taxonomy" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "xiaoyang111222" AND file.name != "xiaoyang111222--cn-math-taxonomy"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/xiaoyang111222--cn-math-taxonomy");
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
> const me = dv.page("Repos/xiaoyang111222--cn-math-taxonomy");
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
> const me = dv.page("Repos/xiaoyang111222--cn-math-taxonomy");
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
> const me = dv.page("Repos/xiaoyang111222--cn-math-taxonomy");
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
> const me = dv.page("Repos/xiaoyang111222--cn-math-taxonomy");
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

> **2026-10-21** — 首次收錄
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

- [[2026-10-24|2026-10-24]] — 再次上榜，2.9k stars
- [[2026-10-23|2026-10-23]] — 再次上榜，2.3k stars
- [[2026-10-22|2026-10-22]] — 再次上榜，2.1k stars
- [[2026-10-21|2026-10-21]] — 首次收錄，1.7k stars
