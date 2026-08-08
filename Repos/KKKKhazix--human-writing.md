---
repo: KKKKhazix/human-writing
url: https://github.com/KKKKhazix/human-writing
owner: KKKKhazix
owner_type: User
language: Python
license: MIT
description: "让 AI 写的中文读起来像一个具体的人在说话。通用创作与改稿 Skill，开箱即用。"
homepage: ""
stars: 1889
stars_per_day: 630
forks: 167
open_issues: 4
created: 2026-08-05
pushed_at: 2026-08-05
first_seen: 2026-08-06
week: "2026-W32"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: "v1.1.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-06
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-08-11"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 67
readme_length: 2536
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-08-06"
star_history: "2026-08-06:1230,2026-08-07:1663,2026-08-08:1889"
tags:
  - github
  - "category/other"
  - "lang/python"
  - "topic/agent_skills"
  - "topic/chinese_writing"
  - "topic/creative_writing"
  - "topic/writing_skill"
aliases:
  - "human-writing"
  - "KKKKhazix/human-writing"
---

# human-writing

**1.2k** stars · **1.2k** stars/天 · 建立 1 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/KKKKhazix--human-writing");
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

`個人專案` `v1.1.0`

`agent-skills` `chinese-writing` `creative-writing` `writing-skill`

> [!summary] 一句話摘要
> 让 AI 写的中文读起来像一个具体的人在说话。通用创作与改稿 Skill，开箱即用。

## 專案簡介

让 AI 写的中文读起来像一个具体的人在说话。通用创作与改稿 Skill，开箱即用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--human-writing");
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
> const me = dv.page("Repos/KKKKhazix--human-writing");
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
| Forks | 109 |
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-08-05 |
| 建立日期 | 2026-08-05 |
| Repo 大小 | 67 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/KKKKhazix/human-writing) |
| Topics | `agent-skills` `chinese-writing` `creative-writing` `writing-skill` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@KKKKhazix](https://github.com/KKKKhazix) | 7 |

**最新版本**：v1.1.0 — 活人感写作 1.1.0 (2026-08-05)

> [!info]- Release Notes
> 1.0 靠字符串禁令拦 AI 味——禁掉「不是……而是……」、禁冒号、禁一批黑话。能拦住最明显的那层，但模型换个马甲继续做一模一样的事。
> 
> 1.1 把防线从字面挪到动作。
> 
> **规则层面**：禁的不再是某几个字，而是「先给读者立一个他没有的误解再推翻它」这个动作本身——翻案腔换什么外衣都拦。同时新增了排比、抒情借喻和名词化的禁令，冒号改成分级（引原话的放行，「一句话总结：」式的继续拦）。三处条文互相打架的地方也修了。
> 
> **检测脚本**：补了变形翻案句、三连排比、AI 抒情词、名词化句式的警告层，加了句长变异系数和连词密度的统计检查。反过来，「不丢人」「打法」「想象空间」这些正常中文从误伤名单里捞出来了。
> 
> **新东西**：出了一个两千字以内的蒸馏版（`dist/human-writing-lite.md`），ChatGPT、千问办公、WorkBuddy 这类聊天窗口直接粘贴就能用。
> 
> 完整变更见 [CHANGELOG.md](https://github.com/KKKKhazix/human-writing/blob/main/CHANGELOG.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-05 ~ 2026-08-05）
> **活躍天數** 1 天 · **最新 commit** docs: 重写 README，去掉产品说明书腔

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/KKKKhazix/human-writing/issues/3) | Is there a English version？ | 0 | 0 |
> | [#2](https://github.com/KKKKhazix/human-writing/issues/2) | feat: 增加产品案例与个人作品集项目故事的专用写作分支 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> 快速安装 ·
>   写作流程 ·
>   仓库结构 ·
>   提交问题
> 
> > AI 写中文有个通病：读完觉得挺流畅，但说不出是谁写的。活人感写作想治的就是这件事。
> 
> 让模型写出来的文章读起来像一个具体的人在说话——知道一些事，有判断，偶尔岔开一句，还能接回来。适用于知乎回答、公众号文章、博客、论坛帖、人物故事、科普、评测、小说、口播等大多数中文写作场景。
> 
> ## 它做什么
> 
> 写作之前先解决一个前置问题：你手上有没有东西可写。
> 
> 现实题材，材料不够就去查，查不到就追问或者缩短篇幅，绝不拿车轱辘话凑字数。虚构题材可以自由创造人物和情节，但每个场景仍然要有目标、有动作、有变化。
> 
> 材料过关之后管三件事：
> 
> | 材料 | 推进 | 中文 |
> | :--- | :--- | :--- |
> | 现实写作核准事实、数字、引语和亲历。虚构写作检查人物、行动与因果。 | 每段都要带来新东西——新事实、新动作、新例子或新后果。写过的不重复。 | 白话打底，在意词序和停顿，清掉报告腔、模型腔和翻案句。 |
> 
> 初稿写完还有一道关。Skill 会逐段检查有没有在原地转圈，砍掉重复解释，调整长短句节奏，拦住冒号滥用、破折号、「不是……而是……」之类的翻案腔和常见 AI 黑话。检查脚本只管已经写明的硬规则，不替你决定风格。
> 
> ## 快速安装
> 
> 把下面这句话发给你的 Agent。
> 
> ```bash
> 帮我安装这个skill：https://github.com/KKKKhazix/human-writing
> ```
> 
> Agent 会读取仓库、找到 `human-writing`，完成安装。装好之后显示名为「活人感写作」。
> 
> Agent 不支持直接安装时
> 
> 从 [Releases](https://github.com/KKKKhazix/human-writing/releases/latest) 下载，或者把仓库里的 [`human-writing`](./human-writing) 文件夹完整复制到本机 Skills 目录。文件夹名保留 `human-writing`。
> 
> ```text
> ~/.agents/skills/human-writing/
> ```
> 
> 装好之后这样用：
> 
> ```text
> 使用 $human-writing，把我的材料写成一篇有活人感和中文韵律的作品。
> ```
> 
> ## 1.1.0 改了什么
> 
> 1.0 用字符串禁令拦 AI 味——禁「不是……而是……」、禁冒号、禁一批黑话。有效，但模型会换一套字面继续做同样的事。「你以为……其实……」「回头才发现」和「不是A而是B」是同一个姿势，读者认的是姿势，不是字。
> 
> 1.1 把防线从字面挪到动作：禁的是「先给读者立一个他没有的误解，再推翻它」这件事本身，不管穿什么外衣。检测脚本也跟着升级，补了变形翻案句、AI 排比、抒情借喻的警告层，加了句长变异系数和连词密度的统计检查，同时把「不丢人」「打法」这类正常中文从误伤名单里捞出来。另外出了一个两千字的蒸馏版，ChatGPT、千问这类聊天窗口直接粘贴就能用。
> 
> 完整变更见 [CHANGELOG.md](./CHANGELOG.md)。
> 
> ## 仓库结构
> 
> 展开查看完整目录
> 
> ```text
> human-writing/
> ├── SKILL.md
> ├── VERSION
> ├── LICENSE
> ├── agents/
> │   └── openai.yaml
> ├── dist/
> │   └── human-writing-lite.md
> ├── references/
> │   ├── forum-prose.md
> │   ├── reality.md
> │   ├── fiction.md
> │   ├── formats.md
> │   └── revision.md
> └── scripts/
>     └── check_prose.py
> ```
> 
> | 位置 | 干什么的 |
> | :--- | :--- |
> | [`SKILL.md`](./human-writing/SKILL.md) | 入口。材料门槛、现实与虚构分流、写作流程、交付禁令，全在这一份里 |
> | [`forum-prose.md`](./human-writing/references/forum-prose.md) | 知乎、公众号、论坛长帖的写法，节奏和措辞的具体做法都在这里 |
> | [`reality.md`](./human-writing/references/reality.md) | 真人、历史、新闻、数据和个人经历的事实边界 |
> | [`fiction.md`](./human-writing/references/fiction.md) | 小说、故事、虚构散文和对白的创作规则 |
> | [`formats.md`](./human-writing/references/formats.md) | 短内容、口播、演讲、教程、评测等特殊形式 |
> | [`revision.md`](./human-writing/references/revision.md) | 初稿写完之后怎么改——逐遍检查清单 |
> | [`check_prose.py`](./human-writing/scripts/check_prose.py) | 检查成稿有没有踩到硬禁令 |
> | [`human-writing-lite.md`](./human-writing/dist/human-writing-lite.md) | 蒸馏版，两千字以内，聊天窗口直接粘贴用 |
> 
> ## 反馈
> 
> MIT 协议开源。仓库只有原创规则和工具，没有第三方文章、训练语料或模型权重。
> 
> 碰到规则冲突、误报或者某个模型上表现不对，欢迎[提 Issue](https://github.com/KKKKhazix/human-writing/issues)。附上你的提示词、模型输出片段和你觉得应该是什么样，排查起来快很多。
> 
>   活人感写作 · Human Writing · 1.1.0

## 延伸閱讀

相關專案：[[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]] · [[FareedKhan-dev--kimi-k3-in-c|FareedKhan-dev/kimi-k3-in-c]] · [[QwenAudio--qwen-audio-agent|QwenAudio/qwen-audio-agent]] · [[WilonityDev--WilonityLoader|WilonityDev/WilonityLoader]] · [[WilonityXYZ--Wilonity|WilonityXYZ/Wilonity]]

[GitHub](https://github.com/KKKKhazix/human-writing)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "KKKKhazix--human-writing"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "KKKKhazix--human-writing" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W32" AND file.name != "KKKKhazix--human-writing"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--human-writing");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "KKKKhazix--human-writing" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "KKKKhazix" AND file.name != "KKKKhazix--human-writing"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/KKKKhazix--human-writing");
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
> const me = dv.page("Repos/KKKKhazix--human-writing");
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
> const me = dv.page("Repos/KKKKhazix--human-writing");
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
> const me = dv.page("Repos/KKKKhazix--human-writing");
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
> const me = dv.page("Repos/KKKKhazix--human-writing");
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

> **2026-08-06** — 首次收錄
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

- [[2026-08-08|2026-08-08]] — 再次上榜，1.9k stars
- [[2026-08-07|2026-08-07]] — 再次上榜，1.7k stars
- [[2026-08-06|2026-08-06]] — 首次收錄，1.2k stars
