---
repo: alchaincyf/deepseek-harness-orange-book
url: https://github.com/alchaincyf/deepseek-harness-orange-book
owner: alchaincyf
owner_type: User
language: HTML
license: N/A
description: "DeepSeek Harness橙皮书《从开机到拆开》：完整系统提示词、129行启动清单、三份原始会话日志——官方文档没有的一手实测。PDF/EPUB/HTML免费下载"
homepage: ""
stars: 1103
stars_per_day: 184
forks: 98
open_issues: 6
created: 2026-08-14
pushed_at: 2026-08-17
first_seen: 2026-08-21
week: "2026-W34"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-21
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-08-28"
contributor_count: 1
engagement: "low"
issue_close_rate: 14
repo_size_kb: 58490
readme_length: 4325
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-08-21"
star_history: "2026-08-21:1103"
tags:
  - github
  - "category/other"
  - "lang/html"
aliases:
  - "deepseek-harness-orange-book"
  - "alchaincyf/deepseek-harness-orange-book"
---

# deepseek-harness-orange-book

**1.1k** stars · **184** stars/天 · 建立 6 天前 · HTML · 未標註授權

```dataviewjs
const me = dv.page("Repos/alchaincyf--deepseek-harness-orange-book");
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
> DeepSeek Harness橙皮书《从开机到拆开》：完整系统提示词、129行启动清单、三份原始会话日志——官方文档没有的一手实测。PDF/EPUB/HTML免费下载

## 專案簡介

DeepSeek Harness橙皮书《从开机到拆开》：完整系统提示词、129行启动清单、三份原始会话日志——官方文档没有的一手实测。PDF/EPUB/HTML免费下载

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--deepseek-harness-orange-book");
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
> const me = dv.page("Repos/alchaincyf--deepseek-harness-orange-book");
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
| Forks | 98 |
| Open Issues | 6 |
| Issue 解決率 | 14% (1 closed) |
| 最後推送 | 2026-08-17 |
| 建立日期 | 2026-08-14 |
| Repo 大小 | 57.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/alchaincyf/deepseek-harness-orange-book) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alchaincyf](https://github.com/alchaincyf) | 7 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-14 ~ 2026-08-17）
> **活躍天數** 3 天 · **最新 commit** docs: README 增加 WorkBuddy 在线阅读入口

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#7](https://github.com/alchaincyf/deepseek-harness-orange-book/issues/7) | 大粪 | 77 | 10 |
> | [#3](https://github.com/alchaincyf/deepseek-harness-orange-book/issues/3) | 虽然《橙皮书》系列都是AI写的，但是这版有点太粗糙了。 | 1 | 1 |
> | [#5](https://github.com/alchaincyf/deepseek-harness-orange-book/issues/5) | 【互链邀请】dsh-suite 生态目录已收录《DeepSeek Harness 橙皮书》，寻求互链合作 | 0 | 0 |
> | [#4](https://github.com/alchaincyf/deepseek-harness-orange-book/issues/4) | 信息来源说明 | 0 | 0 |
> | [#2](https://github.com/alchaincyf/deepseek-harness-orange-book/issues/2) | DeepSeek Harness 生态项目互链邀请 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> **中文** | [English summary](#english-summary)
> 
>   
> 
> # DeepSeek Harness：从开机到拆开
> 
> > 橙皮书系列 · 花叔 著 · v260814（2026年8月14日）
> 
> 一个不写代码的人，把一个刚出厂24小时的agent框架装在自己机器上跑穿了。这本书记录它此刻的样子。
> 
> 2026年8月13日，DeepSeek开源了agent框架Harness（MIT协议，发布当天开源）。官方发布稿的主语从头到尾是「它」——它怎么造的、它是什么架构。而这本书把主语换回「我」：我装上之后第一件事干什么、会不会花我的钱、会不会动我硬盘上别的文件。
> 
> ## 🎬 15秒发布动画
> 
>   
> 
>   使用DeepSeek官方VI · 由Huashu-Design设计制作
>   ⬇ 下载1080p60 MP4（含音效）
> 
> ## 🎥 60秒能力演示
> 
> 四段真实能力，全部对应书里的一手实测：开机装载129个插件 → 写入前的权限审批 → PTC让模型直接写程序编排工具（5次开口15次操作）→ 创造模式现场给自己造出第33个工具`count_chinese`，最后把整个终端拆成积木。
> 
>   
> 
>   ▶ 观看60秒完整版（1080p60 MP4，含音效）
> 
> ## 📑 杂志编辑风幻灯片（20页）
> 
> 不想读整本书？这套20页的杂志编辑风deck是全书的浓缩版：五个章节、进门四问、成本账单、44条事件、PTC、创造模式、拆开看架构，一页一个结论，适合快速过一遍或拿去做分享。
> 
>   
> 
>   ⬇ 下载PPTX（20页 · 11MB）
> 
> ## 下载
> 
> | 格式 | 文件 | 大小 |
> |------|------|------|
> | PDF | [**DeepSeek-Harness-Orange-Book-zh-v260814.pdf**](DeepSeek-Harness-Orange-Book-zh-v260814.pdf) | 13MB |
> | EPUB（微信读书优化版） | [**DeepSeek-Harness-Orange-Book-zh-v260814.epub**](DeepSeek-Harness-Orange-Book-zh-v260814.epub) | 5.4MB |
> | HTML（单文件，图片已内联） | [**DeepSeek-Harness-Orange-Book-zh-v260814.html**](DeepSeek-Harness-Orange-Book-zh-v260814.html) | 4.9MB |
> 
> > 💡 PDF建议下载后阅读，GitHub在线预览可能无法完整渲染。
> 
> ## 这本书有什么官方文档里没有的
> 
> 全部一手实测，跑在作者自己的电脑上：
> 
> - **完整系统提示词**——每次开口之前被灌进模型脑子里的那一大段话
> - **129行出厂启动清单**——`dsh --profile web --dump-default-config`导出，一行行看它开机装了什么
> - **三份原始会话日志**——标准模式、PTC、创造模式各一份，一条事件都没删
> - **AI现场给自己造工具的全程**——19步，工具清单从32行变成33行，多出来的那一行是它自己写的
> - **PTC实测账单**——5次开口编排15次操作，以及那笔反直觉的账：固定开销反而涨9%
> - **35个不随产品安装的扩展包清单**——都在npm上，但不在安装闭包里，「仓库里有」不等于「装上就有」
> - **代码库考古**——12,293次提交/约64天、683篇Agent Note、4篇事故复盘（含「100%覆盖率全绿，编辑器一连上就崩」）
> 
> ## 本书结构
> 
> | 部分 | 内容 |
> |------|------|
> | **序章** | 探索未至之境：你装的到底是什么，以及替你做掉那道四选一 |
> | **Part 1 进门** | 十分钟干成第一件活 · 它被允许碰什么 · 四种模式人话版 · 从Claude Code搬家，哪些能直接用 |
> | **Part 2 主线** | 每一次运行都有迹可循 · 一次任务多少钱 · 它给自己长出一只手 · 让模型写程序及那笔反直觉的账 · 让它自己干完一件长活 |
> | **Part 3 地基** | skill、MCP、插件到底谁管谁 · 两个插件都想管文件编辑谁赢 · 它出过什么事 |
> | **Part 4 收** | 一个几乎全由AI写出来的代码库长什么样 · 它在赌什么，代价是什么 |
> | **附录** | 数字基准表（每个数字带命令和快照时间）· 术语对照 · 命令速查 · 迁移总表 |
> 
> 每节末尾有个固定小栏目：**《他们本来想这么做，后来没做》**——取自仓库里被否决的设计方案，回答「为什么这里没有X」。
> 
> ## 适合谁读
> 
> - **不写代码、但用过Claude Code / Codex / OpenClaw这类工具的人**：每个概念一句技术定义+一个日常类比+类比在哪失真
> - **业内工程师**：一手材料是自己跑出来的日志、被否决的方案、事故复盘的考古，不是发布稿的转译
> - **想评估要不要迁移的人**：能直接用/要自己装/用不了，逐项实测（`~/.agents/skills`被零配置读走这种事，文档不会告诉你）
> 
> 书里凡是卡住作者的地方都原样写下来了——顺的过程没什么可信度，卡住的地方才有。
> 
> ## 关于时效
> 
> 这本书写于Harness发布后的24小时内，书里凡是从网上取的数字（star数、包数量）都只是按下回车那一刻的样子，正文里标了取数时间。实测部分（系统提示词、日志、启动清单）随版本演进可能变化，复现时以你本机输出为准。
> 
> ## 橙皮书系列
> 
> 面向AI Native Builder的实战指南系列：
> 
> - Claude Code 从入门到精通
> - Claude Code 源码解析
> - Harness Engineering
> - Agent Skills
> - OpenClaw：养一只你自己的AI
> - Polymarket 指南
> - [OpenAI Codex 从入门到精通](https://github.com/alchaincyf/codex-orange-book)（中英双版）
> - **DeepSeek Harness：从开机到拆开** ← 你在这里
> 
> 完整合集见[huasheng.ai](https://www.huasheng.ai/)。
> 
> ## 友情链接
> 
> 同一个生态里的项目：
> 
> | 项目 | 简介 | 链接 |
> |------|------|------|
> | DeepSeek Harness Desktop | 为DSH生态做的桌面端，把Harness装进图形界面里跑。 | [GitHub](https://github.com/anywhere-labs/deepseek-harness-desktop) · [官网](https://dshdesktop.cn) |
> | Awesome DeepSeek Harness | DSH终极指南：快速入门、资源推荐、精选插件与工具，中英日三语。 | [GitHub](https://github.com/libukai/awesome-deepseek-harness) |
> 
> ## 关于作者
> 
> **花叔（HuaShu）** · AI Native Coder · 独立开发者
> 
> 小猫补光灯（App Store付费榜第一）的开发者，橙皮书系列作者，全平台50万+读者。所有产品全部用AI完成，从未手写过一行代码。CCTV《焦点访谈》报道的「手搓经济」代表人物。
> 
> - X/Twitter：[@AlchainHust](https://x.com/AlchainHust)
> - YouTube：[@Alchain](https://www.youtube.com/@Alchain)
> - B站：[花叔v](https://space.bilibili.com/14097567)
> - 微信公众号：花叔
> - GitHub：[@alchaincyf](https://github.com/alchaincyf)
> - 官网：[huasheng.ai](https://www.huasheng.ai/)
> 
> ## English summary
> 
> **DeepSeek Harness: From First Boot to Teardown** (Chinese edition) — written within 24 hours of DeepSeek open-sourcing its agent harness (Aug 13, 2026, MIT license). The author — who has never hand-written a line of code — ran it end to end on his own machine and documented what the official docs don't show: the full system prompt, the 129-line default boot manifest, three unedited session logs, and a live recording of the AI building a new tool for itself (19 steps, tool list going from 32 to 33 lines). Chinese only for now.
> 
> ## 📚 在线阅读（WorkBuddy）
> 
> 本书已同步到 WorkBuddy 资料库：每章一个网页，也可以直接把链接丢给你的 Agent 当上下文。
> 
> https://www.workbuddy.cn/space/d/XABVjoKqAElO
> 
> 全部橙皮书入口：https://www.workbuddy.cn/space/d/YcllWXknAUoMk6lFSWdfbI
> 
> ## 协议
> 
>   
> 
> 本作品基于[CC BY-NC-SA 4.0](http://creativecommons.org/licenses/by-nc-sa/4.0/)协议发布。在保留署名的前提下，可自由分享和改编（非商用）。

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/alchaincyf/deepseek-harness-orange-book)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "alchaincyf--deepseek-harness-orange-book"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "alchaincyf--deepseek-harness-orange-book" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W34" AND file.name != "alchaincyf--deepseek-harness-orange-book"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--deepseek-harness-orange-book");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "alchaincyf--deepseek-harness-orange-book" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "alchaincyf" AND file.name != "alchaincyf--deepseek-harness-orange-book"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--deepseek-harness-orange-book");
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
> const me = dv.page("Repos/alchaincyf--deepseek-harness-orange-book");
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
> const me = dv.page("Repos/alchaincyf--deepseek-harness-orange-book");
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
> const me = dv.page("Repos/alchaincyf--deepseek-harness-orange-book");
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
> const me = dv.page("Repos/alchaincyf--deepseek-harness-orange-book");
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

> **2026-08-21** — 首次收錄
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

- [[2026-08-21|2026-08-21]] — 首次收錄，1.1k stars
