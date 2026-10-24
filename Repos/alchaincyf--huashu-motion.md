---
repo: alchaincyf/huashu-motion
url: https://github.com/alchaincyf/huashu-motion
owner: alchaincyf
owner_type: User
language: JavaScript
license: MIT
description: "让你的agent一键直出商业级产品宣传片：会作曲，能指着画面改。Commercial-grade launch films by your coding agent — point at the frame to change it."
homepage: "https://github.com/alchaincyf/huashu-motion"
stars: 1550
stars_per_day: 310
forks: 150
open_issues: 3
created: 2026-10-18
pushed_at: 2026-10-22
first_seen: 2026-10-24
week: "2026-W43"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.3.1"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-24
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-27"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 43226
readme_length: 9835
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-24"
star_history: "2026-10-24:1550"
tags:
  - github
  - "category/other"
  - "lang/javascript"
  - "topic/agent_skills"
  - "topic/animation"
  - "topic/claude_code"
  - "topic/codex"
  - "topic/gsap"
aliases:
  - "huashu-motion"
  - "alchaincyf/huashu-motion"
---

# huashu-motion

**1.6k** stars · **310** stars/天 · 建立 5 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/alchaincyf--huashu-motion");
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

`個人專案` `v0.3.1`

`agent-skills` `animation` `claude-code` `codex` `gsap` `launch-video` `motion-graphics` `skills`

> [!summary] 一句話摘要
> 让你的agent一键直出商业级产品宣传片：会作曲，能指着画面改。Commercial-grade launch films by your coding agent — point at the frame to change it.

## 專案簡介

让你的agent一键直出商业级产品宣传片：会作曲，能指着画面改。Commercial-grade launch films by your coding agent — point at the frame to change it.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--huashu-motion");
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
> const me = dv.page("Repos/alchaincyf--huashu-motion");
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
| Forks | 150 |
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-10-22 |
| 建立日期 | 2026-10-18 |
| 官方網站 | [Link](https://github.com/alchaincyf/huashu-motion) |
| Repo 大小 | 42.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/alchaincyf/huashu-motion) |
| Topics | `agent-skills` `animation` `claude-code` `codex` `gsap` `launch-video` `motion-graphics` `skills` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 89
>     "HTML" : 10
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alchaincyf](https://github.com/alchaincyf) | 15 |

**最新版本**：v0.3.1 (2026-10-22)

> [!info]- Release Notes
> ## 这一版改了什么
> 
> **配乐由导演按产品特点自己定，不再让用户挑**
> - 三个方向卡上不再列配乐。大多数人没法凭一个曲风名字判断好坏，这个选择交给导演：方向选定后，按产品的使用者、场景、节奏、使用感受和出身来选音乐世界、速度和编制，写进分镜。
> - 用户主动想参与配乐，才给选项；用户点名了风格或曲子，就用用户的。
> - 速度跟着产品和剪辑走，不再默认 120。
> 
> ## 怎么更新
> 
> ```bash
> git pull --ff-only
> ```
> 
> ---
> 
> **Music is the director's call**: the direction cards no longer list music. Once a direction is chosen, the director picks the music world, tempo and band from the product's character and writes it into the treatment; options only when the user asks, and a style or track the user names wins. Tempo follows the product and the cut, not a default 120.
> 
> Update with `git pull --ff-only`.

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-22 ~ 2026-10-22）
> **活躍天數** 1 天 · **最新 commit** v0.3.1

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/alchaincyf/huashu-motion/issues/1) | إدارة مؤسستي-W. AMI™ | 2 | 0 |
> | [#3](https://github.com/alchaincyf/huashu-motion/issues/3) | Windows 11: `om render` intermittently exits with a zero-byt | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> **简体中文** | [English](README.en.md)
> 
> 
> # huashu-motion
> 
> > *「一键直出商业级产品宣传片。」*
> 
> [](LICENSE)
> [](https://agentskills.io)
> [](#安装)
> 
> **让你的agent做动画、作曲，指着画面改。**
> 
> 跟Claude Code、Codex这些agent说一句「给我的产品做个30秒的发布片」，
> 它会先读你的产品，给你三个方向挑，写出整支片子，自己写谱配乐，
> 然后在浏览器里打开一个编辑器等你。哪里不满意，在画面上点一下，写下要改什么，它就只改那一处。
> 
> ```sh
> npx skills add alchaincyf/huashu-motion
> ```
> 
> [看效果](#看效果) · [安装](#安装) · [能做什么](#能做什么) · [怎么做到的](#怎么做到的) · [背后的故事](#背后的故事)
> 
> ---
> 
> 
> ## 看效果
> 
> 这篇README里的每一段动画都是huashu-motion做的。上面那段取自它给自己做的53秒发布片，👉 [下载完整发布片（MP4，带声音）](https://github.com/alchaincyf/huashu-motion/releases/latest)，下面Grok Bot（非官方）、huashu-design、DeepSeek、Claude Duet（非官方）这几支的完整版也在同一个页面。
> 
> 
> ### 指着画面改
> 
> 按C，在画面上点一下，写下要改什么。评论发过去的时候带着时间点、场景、点中的元素和它在源码里的位置，agent先把那一帧和你点的那一小块截图放大看一眼，再只改那一处，改完回一句人话，预览停在原来的位置刷新。每一版都留着，⌘Z随时撤回；标题、数字、颜色、停留时长这些会变成编辑器右边的输入框，自己改，不用等agent。
> 
> （这段里的编辑器和终端是照真实界面重建的，代码细节是示意；评论是真实提过的意见。）
> 
> 
> ### 先写谱，再拍片
> 
> 做发布片用的是作曲家模式：agent按节奏单先写一份谱（ABC记谱法，纯文本的乐谱），谱里的标记对齐每个场景，再由三角钢琴、弦乐和鼓组的采样演奏出来（真乐器采样要先跑一次`om samples build`，不跑就用合成音色）；画面上每个东西落地的那一帧，再配一个音效。配乐全部在本机现场生成，不调用任何收费接口。
> 
> 
> ### 一天，二十支
> 
> 16个镜头，来自同一天做的七支片子，按拍子切。
> 
> Grok Bot（粉丝自制，非官方）· 30秒：傍晚交代任务，夜里几个agent各干各的，早上7点手机上收到汇报。这段是汇报一张张送往Chief of Staff的那几拍。
> 
> huashu-design 3.0 · 一句提示词钉住不动，背后的风格按拍子换
> 小猫补光灯Pro · 八种补光色，一拍换一种
> 
> 
> ### 不依赖Opus：DeepSeek V4.1 Flash也能做
> 
> 这支22秒的动效片，是把Claude Code背后的模型换成DeepSeek V4.1 Flash（1017版）做的。中间我给了三轮意见（比如加上DeepSeek的鲸鱼logo、删掉几个镜头），带配乐和音效，前后不到半小时，按当时的价格花了1块9毛5（缓存命中率99.4%）。统一的配色、贯穿全片的那颗圆点、卡在124BPM上的配乐，是skill带出来的，我一句都没提过。方法写进了skill，便宜的模型也能拍出像样的片子。
> 
> 
> ### Claude Duet（粉丝自制，非官方）：一次给足需求，全程没找我确认
> 
> Anthropic发布Claude Duet当天做的，29秒英文版。像素小人Claude Code在终端里等你敲键，变形成Duet以后主动来找你，你睡着了它接着干。完整版在[Release页面](https://github.com/alchaincyf/huashu-motion/releases/latest)。
> 
> ---
> 
> 
> ## 样片是怎么做出来的
> 
> 很多人问这些样片用的是什么提示词。下面是我当时的原话，一字没改，语音输入的错字也留着；本机路径和截图换成了方括号里的说明，跟这支片无关的话删掉了，用……标出；圆括号里是我补的上下文。
> 
> 可以看出来，效果不全来自第一句话：有的片子我一次把需求说清楚，就放手让它做；有的片子我盯着改了好几轮。一句话也能出片，想到这个水准，要么第一句给足，要么后面有人当导演。
> 
> Claude Duet（非官方）· 一份需求、两条追加，中间没有修改意见
> 
> > anthropic刚刚发布了claude duet，我希望你帮我充分调研信息，然后帮我做三个版本的视频 /huashu-motion  
> > 版本一：16：9 英文版本，30秒以内  
> > 版本二：16：9 中文版本 我希望除了品牌信息外，主要元素都是中文 ，30秒以内  
> > 版本三：带中文口播，2：3比例，主要界面内容包含官方英文，以及我们制作的中文版本，目标是发在抖音上给用户介绍Claude duet，1分钟以内
> >
> > 这三个版本我们都需要体现三个方面，但你可以通过不同的方式强调和和体现：  
> > 1、Claude duet和Claude code这种coding agent之间的区别  
> > 2、目前的使用门槛：大致是pro、max会员可以用上，但是需要申请waitlist  
> > 3、ChatGPT dots、muse、grok bot这三个都是personal agent，一定程度上可以认为面对前面三个personal agent，claude选择了claude duet出击。[一张Claude Code像素形象的截图] 这是Claude code原本的形象，我觉得你可以用一个比较视觉化的，动效出色的语言比较有趣的去表达这件事。  
> > 三个版本都需要被认为超过了90分才能算制作完成。以及第三个版本我们做完后，你制作封面和标题简介，然后发到抖音和视频号
> >
> > 除了huashu-motion之外，你也可以使用 /huashu-video-pipeline  /huashu-art-motion 这两个skill辅助你完成内容创作
> 
> 随后追加了两条，一条在11秒后，一条在5分钟后：
> 
> > 不需要找我做任何确认，请完全独立执行
> 
> > 用更多的动效和视觉隐喻去表达，而非用过多的字幕与语言。
> >
> > 抖音版本里可以用x截图之类的方式辅助口播去表达anthropic刚刚发布了这个新产品
> 
> 之后除了交代做完发到X，没再给过意见。方向是agent自己选的，「过了90分」由另开的评审agent按评分标准打分，英文版改到第9版拿到91分才交。
> 
> DeepSeek V4.1 Flash动效片 · 一句话＋三轮意见，全程不到半小时
> 
> > 用 /huashu-motion skill尽情展示你的动效制作能力，不要关心传达什么，做尽可能多的快切和不同类型的动效展示，30秒以内。最后展示这个动画是由DeepSeek v4.1 flash 1017制作的即可
> 
> 做的过程中：
> 
> > 哦对，开头也可以加一点DeepSeek的logo、鲸鱼，然后快速转动画
> 
> 看第1版：
> 
> > [截了一帧] 这部分画面动效就去掉吧，我觉得很差，不需要展示。以及最后的结尾也长了一些。我觉得爆点可以更早开始！
> 
> 看第2版：
> 
> > [又截了两帧] 这两个动效画面也可以去掉，很差
> 
> 之后就没再改过，最后交的是第8版。
> 
> Grok Bot粉丝片 · 一句话＋选方向＋一轮意见
> 
> > 我们去给马斯克新推出的personal agent：grok bot做一个产品发布的宣传片
> 
> agent给了三个方向（团队上线、夜班、八只手），推荐用夜班的故事做骨架、中间插一段色块快切、电脑窗口用真界面。我回：
> 
> > 没问题，按你的推荐结构
> 
> 看第4版：
> 
> > 整体不错，但是第一帧开场的效果我觉得很差，还不如核心聚焦在typing呢
> 
> 看第6版：
> 
> > 非常非常棒！！我觉得我们的huashu-motion比昨晚又强了很多很多。……
> 
> huashu-design 3.0发布片 · 一句话＋选方向，第一版就过了，后来又往上提
> 
> > 你再打开两个fanbox窗口，分别去做huashu-design、darwin.skill的宣传动画吧。不用要求太多，用上我们最新的huashu-motion skill即可。
> >
> > ……
> 
> 看完三个方向的关键帧：
> 
> > 我希望a和b结合
> 
> 看第3版：
> 
> > 非常不错！
> 
> （agent问片里的「60种风格库」要不要改成84种）
> 
> > 可以改！
> 
> 隔天重看：
> 
> > 我们这期视频做得其实非常出色。但是我觉得使用的案例，包括开头的快切，以及后面的三个选择的案例，app的案例等等，多样性都有些不足，很单调。你帮我找找我们最近是否有更好的 /huashu-design 的案例可用。
> >
> > 以及如果不行的话，你也可以自己调用新的终端窗口，让opus5.5再根据你的影片实现目标和镜头语言需要的设计，去做一些案例。 /huashu-motion 是这次设计的总负责人。
> >
> > 我希望能把我们这次宣传片的品质再提升100%，这对我们很重要！！！
> 
> huashu-motion自己的发布片 · 最折腾的一支：一个半小时，十个版本
> 
> > ……以及，我觉得我们需要现在，立刻重新做一个 /huashu-motion 的发布动画！！！让它把自己的能力，操作流程，特点都表达清楚，最后展示huashu-motion的仓库地址！
> 
> 看第2版：
> 
> > 还不错，但是有两个问题：  
> > 1、我希望开头部分先行做一些快速的切镜，包括不同素材，不同运镜方式，比如一堆素材，3d视角流动，然后快速拉进切出好几个产品发布篇。
> >
> > 接着开始展示huashu-motion的发布流程！
> >
> > 然后，我觉得现在的发布流程展示挺清晰的，但是1、2、3、4、5，那切换运动很像ppt，不够高级！
> 
> 看第3版：
> 
> > [两个素材文件夹] 我们这两个文件夹中一大堆素材，你可以选择其中最好的。以及如果觉得还不够的话，可以更进一步！！自己去做一些你认为需要的。
> >
> > 其实我觉得一个精细化的精密仪器或者生理结构的模型，然后爆炸，环绕之类的会能够展现出非常出色的效果，你可以考虑下
> 
> > [一张接触表] 这个感觉还挺多的，不过我希望你注意下素材的丰富性，以及这些素材凭借在一起时的审美表现！
> 
> 看第7版，连着说了几条：
> 
> > [截了一帧] 我觉得01-06这部分依然需要大改，如果乔布斯想要把这个产品发布出去，他会对这部分动画提什么要求？
> 
> > 另外，开头的节奏感我觉得很怪！！
> 
> > 音乐和视频节奏都不对，需要导演再提一些意见
> 
> > （agent说要保留顶部的01–06导航栏）我觉得不应该保留，这一保留就显得很ppt
> 
> > （agent说素材墙里有一张真人面孔，先剔除）我们不排斥真人素材
> 
> 看第8版：
> 
> > 37-38秒左右的音乐音效非常奇怪糟糕。像是突然卡了一下，然后断了。我发现别的视频制作也出现类似的问题。我们排查下原因并且修复掉！！！
> 
> 最后这条后来变成了配乐引擎的一个修复。第10版就是这篇README最上面那段。
> 
> 这些意见里反复出现的几条（开场不够强、整段像PPT、节奏平、素材单调），现在已经写进skill：用户只给一句话的时候，agent会先拿这几条自己挑一遍，再把片子给你看。
> 
> ---
> 
> 
> ## 安装
> 
> 
> ### 方式一：跟你的agent说（推荐）
> 
> ```
> 帮我安装huashu-motion这个skill（github.com/alchaincyf/huashu-motion），装好后跑一遍demo
> ```
> 
> 
> ### 方式二：一行命令
> 
> ```sh
> npx skills add alchaincyf/huashu-motion
> ```
> 
> [skills](https://github.com/vercel-labs/skills)会认出你在用的agent，把skill放进对应目录；要指定的话加`-a claude-code`、`-a codex`等参数。
> 
> Claude Code、Codex、WorkBuddy、Grok Bot、Muse、Dots等产品都能跑；它遵循[Agent Skills](https://agentskills.io)协议，支持skill的agent都能装。
> 
> 
> ### 方式三：克隆整个仓库
> 
> 展开查看
> 
> ```sh
> git clone https://github.com/alchaincyf/huashu-motion.git
> ln -s "$PWD/huashu-motion/skills/huashu-motion" ~/.claude/skills/huashu-motion   # Codex换成~/.codex/skills/
> ```
> 
> skill里的`bin/om`会直接调用仓库里的命令行工具，改仓库就是改skill，本机只有一份。
> 
> 
> ### 需要什么
> 
> - Node 22以上。
> - Chrome（或Chromium、Edge）：截帧、检查、导出都用你电脑上已经装好的浏览器，不额外下载渲染器。
> - FFmpeg：导出视频、合成配乐要用。
> - 真乐器音色（可选）：想要三角钢琴、弦乐、鼓组，让agent跑一次`om samples build`，下载约55MB的免费采样（CC0和CC-BY授权）；不跑就用合成音色。
> - 口播（可选）：macOS的系统音色不用装；想用Kokoro念中文稿，第一次用时会给出一行安装命令（要uv和Python 3.12，模型约325MB）；逐字对齐要装whisper-cli（`brew install whisper-cpp`）。
> 
> 缺什么跑`om doctor`就知道，这些都可以直接让agent帮你装。目前只在macOS上实测过。Codex的沙箱会拦本地预览和浏览器，遇到时手动批准一下。
> 
> ---
> 
> 
> ## 能做什么
> 
> 装好以后，直接跟agent说：
> 
> | 你说 | 它做 |
> |---|---|
> | 「用huashu-motion给我的产品做一支30秒的发布片，官网是xxx.com」 | 先读产品，出三个方向的关键帧给你挑，写节奏单，再写片、作曲配乐，打开编辑器等你 |
> | 「把data/funnel.csv做成30秒解说，讲清楚为什么注册率翻倍了」 | 按数据讲故事：先轴、后数据、只标一件事，数字变成可以直接改的输入框 |
> | 「做一支发布片，要口播，用我自己的录音：voice.m4a」 | 逐字对齐，画面落在说到的那个词上，自动出字幕，配乐在说话时让位 |
> | 「这条口播视频加个包装」 | 名字条、数字卡、关键词花字、章节卡，导出带透明通道的叠层，直接拖进剪映或Premiere |
> | 「改成竖屏」 | 复制一份1080×1920的版本，重新排版的活儿进收件箱，接着改 |
> | 「导出GIF」「要透明底」「做成网页分享」 | MP4、MOV（透明）、WebM、GIF；或者导出一个带播放器和源码的分享页 |
> 
> 开工前，它会先读你以前的偏好和过去片子留下的经验；每支片子做完，再把你这次说过的话、在编辑器里提的评论收一遍，值得留下的记下来。你的偏好只存在你自己电脑上。
> 
> 导出以后，`om share`会出一个分享包：一张10MB以内的GIF（开头加片尾，可以直接当README头图、发X），和一份写好发帖文案、README头图代码的share.md。4秒以上的片子，最后1.2秒会在片尾空着的角落出现一行小字「Made with huashu-motion」，用这支片自己的字体和颜色；不想要，跟agent说一声就关掉。
> 
> ---
> 
> 
> ## 怎么做到的
> 
> 
> ### 一支片子就是一个`index.html`
> 
> 画面用代码写，GSAP、Canvas、Three.js、SVG，浏览器能画的都能用；不调用视频生成模型，每一帧只由代码和时间决定。没有私有格式，片子就是一个网页，带走就能用。
> 
> ```
> 你的agent ──写──▶ my-film/index.html ◀──盯着── om studio（浏览器里的编辑器）
>     ▲                                              │
>     └── om inbox --wait ◀── .om/inbox.jsonl ◀── 你在画面上点一下、写一句
> ```
> 
> 
> ### 导演规则，不是模板
> 
> skill最大的一块是导演方法：先读产品、找出它的气质，再选片子的结构和运动语言。这些规则来自实测，不是拍脑袋：
> 
> - 拿21支真实的发布片（Apple、Nothing、GoPro、Google、Vercel、Linear、Anthropic等），用FFmpeg逐支量切点、节拍、响度和能量曲线；
> - 拆了142支高互动的发布片和动效片，按产品类型整理出20种运动语言，每种写清楚它在说什么、适合什么产品；
> - 每支片子开工前先写一张节奏单：3秒内要有钩子，中段要有一次爆发，最响的那一下前面先停一拍。
> 
> 颜色也量过：顶级发布片的颜色几乎都是找来的（品牌色、产品外壳和界面、实拍里的光），所以三个方向先从产品里找颜色，`om swatch`把色板和对比度摆出来看。
> 
> 
> ### 声音是片子的一半
> 
> - 作曲家模式：agent写谱，程序用真乐器采样演奏，谱里的场景标记对齐画面；仓库里带了三份有注释的示范谱。
> - 兜底配乐：不想作曲，内置12类产品、每类3种配乐方向，按片子的种子挑，不喜欢可以重抽。
> - 23种音效：落地、甩镜、打字、盖章、故障……写在动画落地的那一行代码上，导出时自动对上。
> - 口播：系统音色念稿，或者用你自己的录音；逐字对齐，画面可以落在某个词上。
> 
> 
> ### 自己的渲染引擎
> 
> 渲染、截帧、检查都直接驱动你电脑上的Chrome：按CPU核数开几个浏览器同时渲染（默认最多8个），配乐和画面并行编码，配乐没改就直接复用。一支30秒的片子，在我这台14核的Mac上大约12–15秒渲完；加运动模糊大约1到1.5分钟。
> 
> 
> ### 交付前有人挑错
> 
> - `om check`：渲染前查脚本、缺失的文件、违反规则的动画写法，再抽帧查被裁切、被盖住、对比度不够的字；
> - `om qa`：查成片里一闪而过的单帧、没东西在动的空档、硬切和整片的运动曲线；
> - skill要求agent交付前真的看帧、按正常速度看一遍，能派独立的agent冷审就派。
> 
> 
> ### 常用命令
> 
> 平时都是agent在敲，想自己动手也可以：
> 
> | 命令 | 做什么 |
> |---|---|
> | `om grab` | 把产品的真实素材收进项目：网页截图、logo、配图、品牌色和字体，或本地工程里的截图、图标、录屏 |
> | `om new` · `om templates` | 新建项目，可以从12个模板起步 |
> | `om studio` | 编辑器：实时预览、场景条、直接改值、在画面上留评论 |
> | `om inbox --wait` · `om look` · `om done` | agent那一侧：接下一条评论、看你点的位置、回报改了什么 |
> | `om sound` · `

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/alchaincyf/huashu-motion) · [官方網站](https://github.com/alchaincyf/huashu-motion)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "alchaincyf--huashu-motion"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "alchaincyf--huashu-motion" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W43" AND file.name != "alchaincyf--huashu-motion"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--huashu-motion");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "alchaincyf--huashu-motion" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "alchaincyf" AND file.name != "alchaincyf--huashu-motion"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--huashu-motion");
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
> const me = dv.page("Repos/alchaincyf--huashu-motion");
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
> const me = dv.page("Repos/alchaincyf--huashu-motion");
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
> const me = dv.page("Repos/alchaincyf--huashu-motion");
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
> const me = dv.page("Repos/alchaincyf--huashu-motion");
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

> **2026-10-24** — 首次收錄
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

- [[2026-10-24|2026-10-24]] — 首次收錄，1.6k stars
