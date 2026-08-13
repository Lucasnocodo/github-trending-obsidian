---
repo: oil-oil/oil-motion
url: https://github.com/oil-oil/oil-motion
owner: oil-oil
owner_type: User
language: Python
license: MIT
description: "Create smooth, responsive interactive web animations."
homepage: ""
stars: 1628
stars_per_day: 326
forks: 126
open_issues: 2
created: 2026-08-07
pushed_at: 2026-08-09
first_seen: 2026-08-11
week: "2026-W33"
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
last_reviewed: 2026-08-11
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-08-16"
contributor_count: 2
engagement: "low"
issue_close_rate: 0
repo_size_kb: 2943
readme_length: 3301
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-08-11"
star_history: "2026-08-11:1231,2026-08-12:1488,2026-08-13:1628"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "oil-motion"
  - "oil-oil/oil-motion"
---

# oil-motion

**1.2k** stars · **410** stars/天 · 建立 3 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/oil-oil--oil-motion");
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

> [!summary] 一句話摘要
> Create smooth, responsive interactive web animations.

## 專案簡介

Create smooth, responsive interactive web animations.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/oil-oil--oil-motion");
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
> const me = dv.page("Repos/oil-oil--oil-motion");
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
| Forks | 104 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-08-09 |
| 建立日期 | 2026-08-07 |
| Repo 大小 | 2.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/oil-oil/oil-motion) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 74
>     "HTML" : 19
>     "TypeScript" : 8
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@oil-oil](https://github.com/oil-oil) | 13 |
> | [@TheNeovimmer](https://github.com/TheNeovimmer) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-07 ~ 2026-08-09）
> **活躍天數** 3 天 · **最新 commit** feat: auto-select motion delivery format

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/oil-oil/oil-motion/issues/2) | 用了这个skill，他说浏览器纹理上限 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> **English**: [README.en.md](./README.en.md) · **中文**: README.md
> 
> Oil Motion 是一个 Agent 通用的交互动画 Skill。它负责设计动作、生成连续画面、整理动画资源，并把最终效果接入页面滚动、鼠标、拖动、触摸或设备方向。
> 
> 使用时只需要说明希望表达什么、提供哪些素材，以及动画应该跟随什么操作。具体的生成、检查、压缩和前端实现由 Agent 完成。
> 
> ## 演示
> 
> https://github.com/user-attachments/assets/08e26ad6-ca23-4f31-ac53-44c7692ba99d
> 
> ## 安装
> 
> 告诉 Agent：帮我安装「https://github.com/oil-oil/oil-motion」这个 Skill。
> 
> ## 适合实现的动画
> 
> - 页面向下滚动时，产品逐步展开、拆解或切换状态。
> - 鼠标移动时，角色、宠物或产品自然地调整朝向。
> - 拖动进度时，动画跟随手势前进、后退或停在指定位置。
> - 在手机上使用触摸或设备方向控制画面。
> - 点击、悬停或组件状态变化时，播放对应的动作。
> - 没有操作时自然播放，用户开始操作后切换为跟随模式。
> 
> 这些动画可以用于产品介绍、角色互动、操作演示、数据变化和章节转场。Oil Motion 同时处理动作连贯性、画面清晰度、加载体积和移动端表现。
> 
> ## 工作原理
> 
> AI 生成的视频本身只能从头播放到结尾。为了让它跟随滚动或鼠标变化，Oil Motion 会先生成一段连续动作，再把用户的操作位置对应到动画进度。
> 
> 例如，一段产品拆解动画共有 100 个画面。页面滚动到 30% 时显示第 30 个画面，滚动到 70% 时显示第 70 个画面。用户反向滚动，动画也会沿着同一组画面自然返回。鼠标、拖动和设备方向使用的是同一种映射方式，只是输入来源不同。
> 
> 完整过程如下：
> 
> ```text
> 参考素材、表达目的和控制方式
>   ↓
> 先确认开始、中间和结束时应该是什么样子
>   ↓
> 使用 AI 视频生成这些画面之间的连续动作
>   ↓
> 逐帧检查，删除停顿、重复和异常画面
>   ↓
> 按照页面中的实际显示大小整理并压缩资源
>   ↓
> 把滚动、鼠标、拖动、触摸或设备方向对应到动画进度
> ```
> 
> 这套流程分成三个部分。
> 
> ### 先确认关键画面
> 
> 关键画面是动作过程中必须保持准确的几个状态，例如产品完整、零件展开和最终拆解。Agent 会先生成并检查这些画面，确认主体身份、结构、Logo、构图和风格没有变化。
> 
> 如果直接生成整段视频，模型可能在过程中改变产品结构、角色比例或动作终点。先确认关键画面，可以让连续动作有明确的起点、过程和终点。
> 
> ### 再生成连续动作
> 
> 关键画面确认后，AI 视频负责生成它们之间的变化。肢体转动、产品变形、材质变化和前后遮挡都在这个阶段完成，因为这些变化只靠前端移动或缩放图片通常不自然。
> 
> 位移、缩放、裁切、播放速度、跟随阻尼和最大转动速度由程序控制。这些变化不需要交给视频模型重新生成，程序处理会更稳定，也方便后续调整。
> 
> ### 最后转换成可控制的网页资源
> 
> 生成的视频需要经过整理才能用于交互。Agent 会检查每个画面，裁掉开头和结尾的停顿，删除近似重复画面，找出闪烁或结构变化，并根据页面中的实际显示大小进行压缩。
> 
> 处理完成后，浏览器不会在用户操作时重新生成视频，而是在已经准备好的连续画面中定位。这样可以让动画及时响应输入，也能避免每次交互出现不同结果。
> 
> ## 资源形式
> 
> 所有动画都从绿幕母版开始，页面背景独立。Agent 会根据画面大小、动画长度、访问方式和设备预算自动选择资源形式，不要求使用者理解或决定技术方案。
> 
> | 使用情况 | 常用形式 | 原因 |
> | --- | --- | --- |
> | 小型、环形、二维或频繁跳转 | Alpha WebP 图集 | 构建时完成抠色，随机访问响应稳定 |
> | 大尺寸、长时间轴、一维滚动 | 绿幕全关键帧 MP4 | WebGL 实时抠色，压缩率高，避免大型图集占用大量内存 |
> 
> Agent 会先运行预算脚本并直接采用最合适的一种主方案，不会把图集与视频选择交给使用者，也不会重复实现两套。无论选择哪种，最终背景都由页面提供，换背景不用重新生成主体。
> 
> 压缩会依据页面中的实际显示尺寸进行。展示区域较大时保留更高分辨率；展示区域较小时减少不必要的数据。文件大小和清晰度发生冲突时，优先保证页面中的实际观感。
> 
> ## 快速开始
> 
> 已经有素材和动作方向时，可以直接说明：
> 
> ```text
> 使用 $oil-motion，把这两张产品图制作成随页面滚动逐步展开的动画。
> 桌面端的展示区域较大，需要保持清晰；移动端使用较轻的资源。
> ```
> 
> 只有产品素材，还没有动作方案时，可以让 Agent 先完成设计：
> 
> ```text
> 使用 $oil-motion，为这个产品首页设计一个随滚动变化的连续动画。
> 先提供三个方向，分别说明它们表达什么、如何跟随滚动，以及实现成本。
> 确认方向以后再生成关键画面和视频。
> ```
> 
> 角色或宠物需要跟随鼠标时，可以说明运动范围和期望感受：
> 
> ```text
> 使用 $oil-motion，让这个角色跟随鼠标调整朝向。
> 动作需要及时响应，同时限制转动速度，快速反向时不能闪烁或抽动。
> ```
> 
> ## Agent 会判断什么
> 
> 在开始制作前，Agent 会确认以下内容：
> 
> - 动画要表达的内容，以及它在页面中的作用。
> - 主体的身份、结构、比例和不能改变的部分。
> - 动画由滚动、鼠标、拖动、触摸还是其他状态控制。
> - 动作是一条前后变化的路径，还是需要同时响应水平和垂直方向。
> - 页面中的实际显示大小，以及桌面端和移动端是否需要不同资源。
> - 动画尚未加载、加载失败或用户关闭动态效果时显示什么。
> 
> 如果鼠标的水平位置和垂直位置都会改变主体姿态，就需要准备二维方向的画面。只使用一段左右往返的视频，无法准确表达上下和远近变化。
> 
> ## 交付内容
> 
> 根据项目需要，Agent 会交付其中一部分或全部内容：
> 
> - 已确认的关键画面和生成提示词。
> - 可以继续处理的原始视频。
> - 删除停顿、重复和异常画面后的动画资源。
> - 适合桌面端与移动端加载的图集或视频。
> - 可以直接接入项目的交互代码。
> - 展示完整画面、当前帧和交互输入的原理预览页。
> - 动画资源、交互范围和加载方式的配置文件。
> 
> 这些文件会保留生成、处理和验收所需的信息，方便后续修改动作、替换画面或调整交互参数。
> 
> ## 质量检查
> 
> 交付前需要检查：
> 
> - 主体身份、产品结构、比例、位置和光线在连续画面中保持一致。
> - 没有多余肢体、部件复制、硬切、闪帧和异常停顿。
> - 透明素材的边缘干净，内部白色区域和细线没有被误删。
> - 快速滚动、快速反向和频繁移动鼠标时，动画不粘滞、不抽动、不越界。
> - 页面滚动、缩放或设备旋转后，输入位置与动画方向仍然对应。
> - 初次加载时有清晰的首帧，资源加载失败时可以回退到静态画面。
> - 最终资源放进真实页面以后仍然清晰，移动端不会因为资源过大而明显卡顿。
> - 用户选择减少动态效果时，页面可以显示静态替代内容。
> 
> 程序可以处理轻微漂移、颜色差异、重复画面和编码问题，但无法修复错误的动作设计。发现主体结构、肢体关系或动作方向错误时，需要重新调整关键画面或生成视频。
> 
> ## 第一次生成动画
> 
> 第一次需要生成动画时，Agent 会引导配置所需的 API Key。密钥只保存在本机，之后会自动读取，不需要重复输入。
> 
> ## 技术资料
> 
> 日常使用不需要手动运行脚本。如果需要修改生成参数、资源处理方式或网页运行逻辑，可以继续查看 [`SKILL.md`](./SKILL.md) 和 [`references/`](./references/)。
> 
> ## License
> 
> [MIT](./LICENSE)

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]] · [[FareedKhan-dev--kimi-k3-in-c|FareedKhan-dev/kimi-k3-in-c]]

[GitHub](https://github.com/oil-oil/oil-motion)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "oil-oil--oil-motion"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "oil-oil--oil-motion" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W33" AND file.name != "oil-oil--oil-motion"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/oil-oil--oil-motion");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "oil-oil--oil-motion" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "oil-oil" AND file.name != "oil-oil--oil-motion"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/oil-oil--oil-motion");
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
> const me = dv.page("Repos/oil-oil--oil-motion");
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
> const me = dv.page("Repos/oil-oil--oil-motion");
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
> const me = dv.page("Repos/oil-oil--oil-motion");
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
> const me = dv.page("Repos/oil-oil--oil-motion");
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

> **2026-08-11** — 首次收錄
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

- [[2026-08-13|2026-08-13]] — 再次上榜，1.6k stars
- [[2026-08-12|2026-08-12]] — 再次上榜，1.5k stars
- [[2026-08-11|2026-08-11]] — 首次收錄，1.2k stars
