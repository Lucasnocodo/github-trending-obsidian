---
repo: EverettFish/holo-card-studio
url: https://github.com/EverettFish/holo-card-studio
owner: EverettFish
owner_type: User
language: Python
license: NOASSERTION
description: "Turn the user's description or uploaded reference into a finished, editable Blender card and an interactive Three.js page. Preserve the requested subject, style, typography and destination. This skill contains code and text only; generated artwork belongs in the user's output project."
homepage: ""
stars: 1264
stars_per_day: 421
forks: 184
open_issues: 2
created: 2026-09-07
pushed_at: 2026-09-10
first_seen: 2026-09-08
week: "2026-W37"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-08
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-09-13"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 95
readme_length: 3211
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-09-08"
star_history: "2026-09-08:936,2026-09-09:1158,2026-09-10:1264"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "holo-card-studio"
  - "EverettFish/holo-card-studio"
---

# holo-card-studio

**936** stars · **936** stars/天 · 建立 1 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/EverettFish--holo-card-studio");
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
> Turn the user's description or uploaded reference into a finished, editable Blender card and an interactive Three.js page. Preserve the requested subject, style, typography and destination. This skill contains code and text only; generated artwork belongs in the user's output project.

## 專案簡介

Turn the user's description or uploaded reference into a finished, editable Blender card and an interactive Three.js page. Preserve the requested subject, style, typography and destination. This skill contains code and text only; generated artwork belongs in the user's output project.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/EverettFish--holo-card-studio");
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
> const me = dv.page("Repos/EverettFish--holo-card-studio");
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
| Forks | 144 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-09-07 |
| 建立日期 | 2026-09-07 |
| Repo 大小 | 95 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/EverettFish/holo-card-studio) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 88
>     "HTML" : 9
>     "JavaScript" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@EverettFish](https://github.com/EverettFish) | 6 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-07 ~ 2026-09-07）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/EverettFish/holo-card-studio/issues/1) | 如果真拿去工厂加工还缺什么？ | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # 🃏 Holo Card Studio
> 
> 实现教程来源（补上，感谢大佬的教程）：小红书@乌托邦的香蕉🍌
> 
> > 一个 **Codex Skill**：对 Codex 说一句话，收获一张会随视角流光溢彩的 3D 全息闪卡。
> > 能在浏览器里拖着转、翻到背面、拉滑块看它闪；还附赠一个可以随便改的 Blender 工程。
> 
> 小时候在文具店门口舍不得买的那种闪卡，现在你想印谁就印谁。
> 
> ---
> 
> ## ✨ 三十秒看懂
> 
> ```
> 你：「给我做一张赛博朋克风的机械猫闪卡，背景霓虹雨夜，编号 No.007」
> 
> Codex：
>   🎨 画好四层图（主体 / 背景 / 线稿 / 文字）
>   🧊 搭好 Blender 场景，视差、镭射、星光一次到位
>   🌐 组装成 Three.js 网页，本地跑起来
>   📦 递给你：网页链接 + card.blend + 渲染图
> ```
> 
> 你只负责想，剩下的它来。
> 
> ---
> 
> ## 🎬 你可以拿它做什么
> 
> ### 🐱 给自家毛孩子发一张"传说级"卡
> 上传一张猫主子的照片，加一句"传说稀有度、金色边框、名字叫布丁"。
> 主体保留它本猫的神态和构图，背景和线稿全新绘制。拖一拖，猫在卡里往前凸，背景往后退，镭射彩虹随角度流动——朋友圈晒图请自便。
> 
> ### 🎮 给独立游戏做角色卡牌
> 一个角色一句描述，批量出一整套：战士、法师、盗贼、Boss。
> 每张卡自带 `card-config.json`，稀有度、编号、属性文字都在里面，改完重新跑一遍流水线就更新。发售前发一波"抽卡预告"，玩家会疯。
> 
> ### 🏢 团队周年纪念 / 新人入职卡
> 把同事做成卡牌：头像当主体、部门色当背景、Slogan 当文字层。
> 每人一张，网页链接一发，大家在浏览器里翻自己的卡翻一下午。比 PPT 里的"团队介绍"页好玩一百倍。
> 
> ### 🎁 情人节 / 生日 / 纪念日
> "复古胶片风、粉金配色、背面写一句话"。
> 做好之后发一个链接过去，对方在手机上转着看，翻到背面看到那句话。仪式感这东西，闪光效果拉满就有了。
> 
> ### 🎤 演讲 / 发布会的"彩蛋物料"
> 产品发布做一张产品卡，讲到最后一页丢一个链接："扫码看会闪的那种"。
> 响应式网页，手机横竖屏都能玩，观众当场就转起来了。
> 
> ### 🖌️ 设计师的材质实验场
> 不只是网页，`card.blend` 是真正可编辑的 Blender 工程。
> 共享节点组里有中文命名的 `缩放`、`深度`、`视差效果`，镭射条纹、星光、线稿发光都是独立可调的材质节点。想研究全息卡是怎么"闪"起来的，打开它就是最好的教材。
> 
> ---
> 
> ## 🧱 一张闪卡是怎么叠出来的
> 
> 四层图叠在同一块画布上，视差把它们在空间里"撑开"：
> 
> ```
>         👀 你的视线
>          │
>    ┌─────┴──────┐
>    │  text.png  │  文字层     ─ 稳稳贴在表面
>    ├────────────┤
>    │ lineart.png│  线稿层     ─ 发光的轮廓
>    ├────────────┤
>    │ subject.png│  主体层     ─ 往前凸出来
>    ├────────────┤
>    │ background │  背景层     ─ 往后缩进去
>    └────────────┘
> ```
> 
> 再铺上镭射彩虹（相位跟着视角走，转到哪闪到哪）、Voronoi 星光、金色卡边。
> 浏览器端用 Three.js 按同一套 UV 公式重建这四层合成，所以 Blender 里看到什么，网页里就是什么。
> 
> ---
> 
> ## 🚀 怎么用
> 
> ### 安装
> 把这个目录放进 Codex 的 skills 目录即可：
> 
> ```
> ~/.codex/skills/holo-card-studio/
> ```
> 
> ### 环境
> - Python 3 + Pillow
> - Node.js + npm
> - Blender **不用自己装** —— 流水线会自动把官方便携版放到 `/tools/`，校验 SHA-256，项目自带、互不干扰
> 
> ### 开口
> 然后在 Codex 里直接说人话：
> 
> > "用 holo-card-studio 给我做一张水墨风的锦鲤闪卡，文字用书法体，编号 No.001"
> 
> 或者上传参考图：
> 
> > "照这张图做一张闪卡，保留人物和构图，背景换成星空"
> 
> Codex 会先把卡片规格和它推断的细节说给你听，然后开工：画图 → 生成文字层 → 写配置 → 跑流水线 → 起本地服务 → 真正打开页面测拖拽、翻面、滑块和手机布局 → 交付。
> 
> ### 你会收到
> | 东西 | 用来干嘛 |
> |---|---|
> | 本地网页链接 | 拖、转、翻、拉滑块 |
> | `card.blend` | 在 Blender 里继续调材质、换灯光、出渲染 |
> | `assets/` 四层图 | 想换哪层换哪层，重跑流水线即可 |
> | `card-config.json` | 改名字、改编号、改稀有度 |
> | 渲染图 | 直接发 |
> 
> ---
> 
> ## 🔧 可以调的旋钮
> 
> 流水线出厂就是一套顺手的参数，也都留了口子：
> 
> - **视差强度**：主体默认 scale 1.25 / depth 0.4，背景 depth -0.25，想更"跳"就往上加
> - **镭射条纹**：条纹密度、扭曲度、角度，以及粉-黄-蓝-白的渐变
> - **线稿发光**：强度和遮罩密度，可以从"淡淡勾边"到"霓虹描边"
> - **星光**：Voronoi 尺度 + 动画噪声，从零星几颗到满天星
> - **Blender 界面语言**：默认简体中文，存在项目本地配置里，一句话可换
> 
> ---
> 
> ## 📁 目录一览
> 
> ```
> holo-card-studio/
> ├── SKILL.md                    # Codex 读的"操作手册"
> ├── references/
> │   ├── art-direction.md        # 分层画图的提示词写法、参考图处理
> │   ├── config.example.json     # 卡片配置示例
> │   └── verification.md         # 交付前的验收清单
> ├── scripts/
> │   ├── ensure_blender.py       # 自动获取官方 Blender 便携版
> │   ├── build_card.py           # 生成可编辑的 Blender 场景
> │   ├── export_web.py           # 导出卡片几何
> │   ├── generate_typography.py  # 精确的透明文字层
> │   ├── validate_assets.py      # 四层图体检
> │   ├── run_pipeline.py         # 一键流水线
> │   └── package_skill.py        # 纯文本打包成可分享的 ZIP
> └── assets/
>     └── web-template/           # 响应式 Three.js 查看器
> ```
> 
> skill 本体只有代码和文字，轻得很。你生成的画作、`.blend`、模型都待在你自己的输出项目里。
> 
> ---
> 
> ## 🤝 分享这个 skill
> 
> 想发给朋友或放进仓库？
> 
> ```bash
> python scripts/package_skill.py
> ```
> 
> 它按白名单只打包文本文件，打出来的 ZIP 干干净净，拿走就能用。
> 
> ---
> 
> *想好第一张卡画谁了吗？* ✨

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[CopilotKit--OpenBot|CopilotKit/OpenBot]]

[GitHub](https://github.com/EverettFish/holo-card-studio)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "EverettFish--holo-card-studio"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "EverettFish--holo-card-studio" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W37" AND file.name != "EverettFish--holo-card-studio"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/EverettFish--holo-card-studio");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "EverettFish--holo-card-studio" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "EverettFish" AND file.name != "EverettFish--holo-card-studio"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/EverettFish--holo-card-studio");
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
> const me = dv.page("Repos/EverettFish--holo-card-studio");
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
> const me = dv.page("Repos/EverettFish--holo-card-studio");
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
> const me = dv.page("Repos/EverettFish--holo-card-studio");
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
> const me = dv.page("Repos/EverettFish--holo-card-studio");
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

> **2026-09-08** — 首次收錄
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

- [[2026-09-10|2026-09-10]] — 再次上榜，1.3k stars
- [[2026-09-09|2026-09-09]] — 再次上榜，1.2k stars
- [[2026-09-08|2026-09-08]] — 首次收錄，936 stars
