---
repo: xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer
url: https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer
owner: xdash
owner_type: User
language: N/A
license: N/A
description: "FDE（前沿部署工程师）从零入门指南（基于范冰《增长黑客》原书框架）"
homepage: ""
stars: 3415
stars_per_day: 569
forks: 417
open_issues: 8
created: 2026-07-30
pushed_at: 2026-08-06
first_seen: 2026-08-01
week: "2026-W31"
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
last_reviewed: 2026-08-01
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-08-09"
contributor_count: 1
engagement: "medium"
issue_close_rate: 14
repo_size_kb: 14446
readme_length: 2013
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-08-01"
star_history: "2026-08-01:594,2026-08-02:1122,2026-08-03:1679,2026-08-04:2216,2026-08-05:3029,2026-08-06:3415"
tags:
  - github
  - "category/other"
  - "lang/other"
aliases:
  - "FDE-the-Guidance-Book-of-Forward-Deployed-Engineer"
  - "xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer"
---

# FDE-the-Guidance-Book-of-Forward-Deployed-Engineer

**594** stars · **594** stars/天 · 建立 1 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/xdash--FDE-the-Guidance-Book-of-Forward-Deployed-Engineer");
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
> FDE（前沿部署工程师）从零入门指南（基于范冰《增长黑客》原书框架）

## 專案簡介

FDE（前沿部署工程师）从零入门指南（基于范冰《增长黑客》原书框架）

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/xdash--FDE-the-Guidance-Book-of-Forward-Deployed-Engineer");
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
> const me = dv.page("Repos/xdash--FDE-the-Guidance-Book-of-Forward-Deployed-Engineer");
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
| Forks | 70 |
| Open Issues | 6 |
| Issue 解決率 | 14% (1 closed) |
| 最後推送 | 2026-07-31 |
| 建立日期 | 2026-07-30 |
| Repo 大小 | 14.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@xdash](https://github.com/xdash) | 10 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-30 ~ 2026-07-31）
> **活躍天數** 2 天 · **最新 commit** 书名统一为《前线部署工程师》：全局改译名、封面加网址、章节挪至根目录方便浏览

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer/issues/4) | 分享两篇 FDE 一线观察：快消企业与日本市场的 AI 落地现场 | 1 | 1 |
> | [#2](https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer/issues/2) | 建议补充企业 AI 项目的角色错位：买单者、使用者、受益者与担责者并非同一人 | 1 | 1 |
> | [#6](https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer/issues/6) | 建议升级为 site 模式，提升读者阅读体验. | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 前线部署工程师：人工智能时代的客户价值交付秘籍
> 
> 范冰 著 · 免费公开全文，欢迎在线阅读与分享
> 
> ---
> 
> ## 关于本书
> 
> 2025 年夏天，我的朋友圈被同一个数字刷屏：95%。
> 
> 麻省理工学院的一份报告说，过去三年，全球企业在生成式人工智能上烧了三四百亿美元，其中 95% 的项目没能产生任何能写进财务报表的价值。几乎同一时间，另一条新闻在往相反的方向狂奔：硅谷的招聘网站上，一个叫「前线部署工程师」（Forward Deployed Engineer，简称 FDE）的岗位，发布量九个月涨了八倍。OpenAI 在招，Anthropic 在招，YC 孵化器里一百多家创业公司都在招。
> 
> 一边是企业人工智能项目 95% 的阵亡率，一边是一个岗位 800% 的抢手度。把这两条新闻摆在一起看，答案不难猜：**模型已经不稀缺了，能把模型塞进客户真实业务里的人，才稀缺。**
> 
> 我由此对 FDE 这个岗位产生了浓厚的兴趣。多年前写《增长黑客》时，我做的事情本质上和这次一样：把一个硅谷正在发生、但国内还没有名字的东西，系统地研究一遍，再诚实地讲清楚。这次我也沿用了同样的笨办法——翻遍能找到的一手材料：Palantir 早期高管在播客里的复盘、前员工的回忆录、风投的行业分析、麻省理工那份报告的原文、几十份各家公司的招聘启事、薪酬报告、论坛上从业者的吐槽，以及国内第一批实践者的经验谈。
> 
> 这本书就是那个研究过程的完整沉淀。它聊清楚三件事：
> 
> - **FDE 是什么**：这个从 Palantir 情报项目里长出来的角色，如何定义、为何在人工智能时代爆发
> - **怎么做**：沿着一次真实交付的完整旅程——找对问题、赢得客户、激活部署、守住续约、扩大收入、规模化复制
> - **谁在做**：112 个真实可查的案例，从 Palantir、OpenAI、Anthropic 到 Harvey、Sierra，再到中国的第一批实践者
> 
> 书里所有数据和案例，都在附录 C 里标明了出处。整理的过程本身就是学习，我尽量让每一条引用都经得起核查；如有疏漏，欢迎通过 Issue 指正。
> 
> ## 为什么免费公开
> 
> 这本书首先是我写给自己的学习笔记。研究一个陌生领域，最好的验收方式就是把它讲成一本别人也能读懂的书——讲不清楚的地方，就是自己没弄懂的地方。
> 
> 整理完之后，把它锁在硬盘里，多少有些可惜。FDE 在国内还是一个刚有名字的岗位，很多讨论还停留在「它是不是换了个名字的售前」。如果这份沉淀能帮正在考虑转型的工程师看清这个岗位的全貌，帮投身企业人工智能的创业者少走一段弯路，帮任何一个想弄明白「人工智能到底怎么才能在企业里落地」的人节省几十个小时的检索时间，那它公开出来，显然比躺在我的硬盘里更有价值。
> 
> 知识的价值在于流动，而不在于囤积。
> 
> ## 关于作者
> 
> 范冰，网名 XDash，互联网从业者，长期关注技术趋势与商业方法论。本书为个人研究整理，不代表任何机构立场。
> 
> ## 阅读方式
> 
> - **在线阅读**：点击下方目录，直接在 GitHub 上按章节阅读
> - **整本下载**：[前线部署工程师.pdf](前线部署工程师.pdf)（根目录合并版，95 页；如有更新以章节 Markdown 为准）
> 
> ## 目录
> 
> | 章节 | 内容 |
> | --- | --- |
> | [第 1 章](01-第1章-FDE的崛起.md) | FDE 的崛起 |
> | [第 2 章](02-第2章-解决正确的问题.md) | 解决正确的问题 |
> | [第 3 章](03-第3章-赢得客户.md) | 赢得客户 |
> | [第 4 章](04-第4章-激活部署.md) | 激活部署 |
> | [第 5 章](05-第5章-守住续约.md) | 守住续约 |
> | [第 6 章](06-第6章-扩大收入.md) | 扩大收入 |
> | [第 7 章](07-第7章-规模化复制.md) | 规模化复制 |
> | [第 8 章](08-第8章-完整案例集.md) | 完整案例集 |
> | [后记](09-后记-FDE的职业道德.md) | FDE 的职业道德 |
> | [附录 A](10-附录A-FDE应当关注的常用指标.md) | FDE 应当关注的常用指标 |
> | [附录 B](11-附录B-FDE人物与团队名单.md) | FDE 人物与团队名单 |
> | [附录 C](12-附录C-全书案例索引与资料出处.md) | 全书案例索引与资料出处 |
> 
> ## 版权声明
> 
> 本书著作权归作者范冰所有。本仓库内容由作者本人授权公开，供读者**免费阅读与非商业性分享**，转载请务必注明出处与作者；任何商业用途（包括但不限于出版、培训、付费内容改编）须事先获得作者书面许可。
> 
> ---
> 
> 如果这本书对你有帮助，欢迎 Star 本仓库，或把它分享给需要的人。

## 延伸閱讀

相關專案：[[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[QwenAudio--qwen-audio-agent|QwenAudio/qwen-audio-agent]] · [[WilonityXYZ--Wilonity|WilonityXYZ/Wilonity]] · [[bashalarmistalt--decimen-optical-transfer|bashalarmistalt/decimen-optical-transfer]] · [[gavamedia--deltafin|gavamedia/deltafin]] · [[xikhar--persona|xikhar/persona]] · [[yc-software--qm|yc-software/qm]]

[GitHub](https://github.com/xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "xdash--FDE-the-Guidance-Book-of-Forward-Deployed-Engineer"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "xdash--FDE-the-Guidance-Book-of-Forward-Deployed-Engineer" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W31" AND file.name != "xdash--FDE-the-Guidance-Book-of-Forward-Deployed-Engineer"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/xdash--FDE-the-Guidance-Book-of-Forward-Deployed-Engineer");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "xdash--FDE-the-Guidance-Book-of-Forward-Deployed-Engineer" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "xdash" AND file.name != "xdash--FDE-the-Guidance-Book-of-Forward-Deployed-Engineer"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/xdash--FDE-the-Guidance-Book-of-Forward-Deployed-Engineer");
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
> const me = dv.page("Repos/xdash--FDE-the-Guidance-Book-of-Forward-Deployed-Engineer");
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
> const me = dv.page("Repos/xdash--FDE-the-Guidance-Book-of-Forward-Deployed-Engineer");
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
> const me = dv.page("Repos/xdash--FDE-the-Guidance-Book-of-Forward-Deployed-Engineer");
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
> const me = dv.page("Repos/xdash--FDE-the-Guidance-Book-of-Forward-Deployed-Engineer");
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

> **2026-08-01** — 首次收錄
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

- [[2026-08-06|2026-08-06]] — 再次上榜，3.4k stars
- [[2026-08-05|2026-08-05]] — 再次上榜，3.0k stars
- [[2026-08-04|2026-08-04]] — 再次上榜，2.2k stars
- [[2026-08-03|2026-08-03]] — 再次上榜，1.7k stars
- [[2026-08-02|2026-08-02]] — 再次上榜，1.1k stars
- [[2026-08-01|2026-08-01]] — 首次收錄，594 stars
