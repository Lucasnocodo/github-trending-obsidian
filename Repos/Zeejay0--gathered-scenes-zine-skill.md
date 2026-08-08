---
repo: Zeejay0/gathered-scenes-zine-skill
url: https://github.com/Zeejay0/gathered-scenes-zine-skill
owner: Zeejay0
owner_type: User
language: N/A
license: MIT
description: ""
homepage: ""
stars: 970
stars_per_day: 162
forks: 51
open_issues: 0
created: 2026-08-01
pushed_at: 2026-08-07
first_seen: 2026-08-08
week: "2026-W32"
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
last_reviewed: 2026-08-08
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-08-15"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 4442
readme_length: 3794
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-08-08"
star_history: "2026-08-08:970"
tags:
  - github
  - "category/other"
  - "lang/other"
aliases:
  - "gathered-scenes-zine-skill"
  - "Zeejay0/gathered-scenes-zine-skill"
---

# gathered-scenes-zine-skill

**970** stars · **162** stars/天 · 建立 6 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/Zeejay0--gathered-scenes-zine-skill");
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
> No description

## 專案簡介

No description available.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Zeejay0--gathered-scenes-zine-skill");
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
> const me = dv.page("Repos/Zeejay0--gathered-scenes-zine-skill");
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
| Forks | 51 |
| Open Issues | 0 |
| 最後推送 | 2026-08-07 |
| 建立日期 | 2026-08-01 |
| Repo 大小 | 4.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Zeejay0/gathered-scenes-zine-skill) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Zeejay0](https://github.com/Zeejay0) | 9 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-01 ~ 2026-08-07）
> **活躍天數** 2 天 · **最新 commit** Update README.md

## README 摘錄

> [!info]- 展開查看原文 README
> # 拾景zine
> 
> ### GATHERED SCENES ZINE
> 
> 把普通画面，变成值得停留的一页。
> 
> **作者 / Author · Zeejay0**
> 
> [English](README.en.md) · [两种创作路径](#两种创作路径) · [开始使用](#开始使用) · [作品档案](#作品档案)
> 
> > A SMALL PRESS FOR EVERYDAY SCENES.
> 
> 拾景纸刊是一组为 Codex 编写的生图 Skill。它不把照片当作等待套用的模板，而是先阅读场景：辨认主体、空间、色彩、动作与没有说完的情绪，再选择保留真实现场，或把现场蒸馏为一件新的纸上作品。
> 
> 照片提供事实，创作决定如何留下它。
> 
> ---
> 
> ## 我们如何观看一张照片
> 
> ```text
> 一张照片  →  阅读现场  →  提取关系  →  选择创作路径  →  重新装订成一页
> ```
> 
> 我们优先保留场景中真正重要的关系，而不是复制所有细节：人物与远方、窗与光、道路与方向、植物与空白，以及一瞬间留下的情绪余韵。
> 
> 这套视觉语言建立在五条原则上：
> 
> - **真景为锚**：真实场景不是装饰素材，而是作品的事实基础。
> - **插画成场**：插画扩展照片尚未说完的空间，而不是描摹照片。
> - **色彩成结构**：高纯度色彩负责平衡、方向和视觉重心。
> - **纸面会呼吸**：留白参与叙事，复杂信息被压缩成少量清楚的形。
> - **边界有触感**：撕纸、纤维、干墨与印刷误差构成材料语言。
> 
> ## 两种创作路径
> 
> 同一张照片，可以被保存，也可以被重新想象。本仓库收录两个互补的 Skill。
> 
> | | 实景拼贴 · Gathered Scenes | 影像蒸馏 · Scene Distillation |
> | --- | --- | --- |
> | **适合** | 想保留原照片与现场身份 | 想获得独立成立的原创插画作品 |
> | **照片的角色** | 成为最终海报中的真实视觉锚点 | 只作为语义与情绪来源，不进入成品 |
> | **转化方式** | 摄影、抽象插画、结构性色彩与手撕边界共同构图 | 从事实中提取命题、张力与视觉隐喻，重新创作 |
> | **结果** | 真实而克制的纸感拼贴海报 | 表达优先的极简编辑插画 |
> | **调用名称** | `$scenes-gathered-zine-v1-3` | `$scene-distillation-zine-v1-3` |
> 
> ### 01 · 实景拼贴
> 
> `scenes-gathered-zine-v1-3` 保留照片中不可替代的现场关系，以真实摄影作为锚点，让源自原图的抽象形状、单一高纯度色彩与可见的手撕纤维边缘向纸面延伸。
> 
> 它适合这样的请求：
> 
> ```text
> 用 $scenes-gathered-zine-v1-3 把这张照片做成一张拾景纸刊海报。
> 保留人物与海岸线的关系，文字用中文。
> ```
> 
> [阅读完整 Skill](skills/scenes-gathered-zine-v1-3/SKILL.md)
> 
> ### 02 · 影像蒸馏
> 
> `scene-distillation-zine-v1-3` 不在成品中保留原始照片。它从照片中提取语义核心、情绪张力和视觉隐喻，再用纸张、插画、色彩与自由文字创作一件新的作品。
> 
> 它适合这样的请求：
> 
> ```text
> 用 $scene-distillation-zine-v1-3 重新创作这张照片。
> 不要保留照片本身，让作品表达“靠近与错过”。
> ```
> 
> [阅读完整 Skill](skills/scene-distillation-zine-v1-3/SKILL.md)
> 
> ## 从现场到纸面
> 
> 每次创作都会经历同一套观察过程，但不会套用固定模板。
> 
> | 阶段 | 发生什么 |
> | --- | --- |
> | **01 · 观察** | 找到核心主体、空间关系、方向、重量与安静区域 |
> | **02 · 取舍** | 保留让场景仍然成立的最少信息，移除无关细节 |
> | **03 · 转译** | 将轮廓、路径、光影或情绪转为纸上形状与色彩结构 |
> | **04 · 编排** | 让摄影、插画、文字、边界与留白形成清楚的观看路径 |
> | **05 · 成页** | 输出一张平面、克制、有触感且能独立成立的纸刊作品 |
> 
> ## 作品档案
> 
> 这里将按“原始照片 → 观察记录 → 最终作品”保存代表案例，而不是只陈列一面结果图墙。每份档案会说明作品保留了什么、舍弃了什么，以及色彩和构图如何从现场生长出来。
> 
> ### 实景拼贴 01 · 第比利斯远眺
> 
> | 原始照片 | 最终作品 |
> | :---: | :---: |
> |  |  |
> 
> 保留教堂塔楼作为真实锚点，将城市密度压缩为蓝色印刷场，让石质轮廓穿过摄影、线描与撕纸边界。[查看观察记录](examples/real-scene-collage/01-where-stone-meets-sky/)
> 
> ### 实景拼贴 02 · 冬日渡桥
> 
> | 原始照片 | 最终作品 |
> | :---: | :---: |
> |  |  |
> 
> 保留桥上人群与水面倒影，将雪林向外转译为安静的蓝灰纸上场景，让横向行进成为整张作品的节奏。[查看观察记录](examples/real-scene-collage/02-winter-crossing/)
> 
> ### 影像蒸馏 01 · 时间挥手回应
> 
> | 原始照片 | 最终作品 |
> | :---: | :---: |
> |  |  |
> 
> 舍弃照片本身，只保留挥手的动作、远处石像与两者之间尚未抵达的回应；一条黄色手势轨迹成为时间的视觉隐喻。[查看观察记录](examples/image-distillation/01-time-waves-back/)
> 
> ### 影像蒸馏 02 · 雪落得很轻
> 
> | 原始照片 | 最终作品 |
> | :---: | :---: |
> |  |  |
> 
> 从雪地中的坐姿与冬衣色彩提炼出松散纸片人物，以大面积纸白保留雪的轻盈，并用一枚暖红色小块建立遥远的视觉回应。[查看观察记录](examples/image-distillation/02-snow-falls-lightly/)
> 
> [浏览完整作品档案](examples/)
> 
> ## 开始使用
> 
> ### 安装
> 
> 克隆仓库，然后把需要的 Skill 复制到 Codex Skills 目录：
> 
> ```bash
> git clone https://github.com/Zeejay0/gathered-scenes-zine-skill.git
> mkdir -p ~/.codex/skills
> cp -R gathered-scenes-zine-skill/skills/scenes-gathered-zine-v1-3 ~/.codex/skills/
> cp -R gathered-scenes-zine-skill/skills/scene-distillation-zine-v1-3 ~/.codex/skills/
> ```
> 
> 如果 Skill 没有立即出现，请重启 Codex。
> 
> ### 使用
> 
> 1. 上传一张照片。
> 2. 选择“实景拼贴”或“影像蒸馏”。
> 3. 调用对应的 Skill；也可以补充希望保留的关系、文字语言或情绪方向。
> 
> 除图片外，两个 Skill 都会返回简短的创作说明；具体输出规则请以各自的 `SKILL.md` 为准。
> 
> ## 仓库结构
> 
> ```text
> gathered-scenes-zine-skill/
> ├── README.md
> ├── README.en.md
> ├── assets/
> │   └── brand/
> ├── examples/
> │   └── README.md
> └── skills/
>     ├── scenes-gathered-zine-v1-3/
>     │   ├── SKILL.md
>     │   └── agents/openai.yaml
>     └── scene-distillation-zine-v1-3/
>         ├── SKILL.md
>         └── agents/openai.yaml
> ```
> 
> ## 关于照片
> 
> Skill 只把用户提供的照片作为当前生成任务的参考。除非用户明确要求，不应浏览、分享、另行上传或保存原始照片。有关具体处理规则，请阅读对应的 Skill 文档。
> 
> ## 找到作者
> 
> **作者：Zeejay0**
> 
> 抖音及其他内容平台统一用户名：`Zeejay0`。在你常用的平台搜索这个名字，即可找到作者与后续作品。
> 
> 每个 Skill 在同一段对话的前两次生成完成后，会轻量提示：`若公开分享，欢迎标注：Visual Skill by @Zeejay0`；从第三次起不再重复。
> 
> ## License
> 
> [MIT](LICENSE) © Zeejay0
> 
> **拾起景物，留住片刻。**
> 
> AI-GENERATED PAPER ART · 2026

## 延伸閱讀

相關專案：[[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]]

[GitHub](https://github.com/Zeejay0/gathered-scenes-zine-skill)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Zeejay0--gathered-scenes-zine-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "Zeejay0--gathered-scenes-zine-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W32" AND file.name != "Zeejay0--gathered-scenes-zine-skill"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Zeejay0--gathered-scenes-zine-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Zeejay0--gathered-scenes-zine-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Zeejay0" AND file.name != "Zeejay0--gathered-scenes-zine-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Zeejay0--gathered-scenes-zine-skill");
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
> const me = dv.page("Repos/Zeejay0--gathered-scenes-zine-skill");
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
> const me = dv.page("Repos/Zeejay0--gathered-scenes-zine-skill");
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
> const me = dv.page("Repos/Zeejay0--gathered-scenes-zine-skill");
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
> const me = dv.page("Repos/Zeejay0--gathered-scenes-zine-skill");
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

> **2026-08-08** — 首次收錄
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

- [[2026-08-08|2026-08-08]] — 首次收錄，970 stars
