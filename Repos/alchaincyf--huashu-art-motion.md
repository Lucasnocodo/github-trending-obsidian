---
repo: alchaincyf/huashu-art-motion
url: https://github.com/alchaincyf/huashu-art-motion
owner: alchaincyf
owner_type: User
language: JavaScript
license: MIT
description: "艺术动画skill：35种艺术风格、9种解说语法，用代码让画动起来。"
homepage: ""
stars: 1972
stars_per_day: 986
forks: 217
open_issues: 3
created: 2026-10-06
pushed_at: 2026-10-08
first_seen: 2026-10-08
week: "2026-W41"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v1.0.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-08
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-11"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 47646
readme_length: 7162
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-08"
star_history: "2026-10-08:1972"
tags:
  - github
  - "category/other"
  - "lang/javascript"
aliases:
  - "huashu-art-motion"
  - "alchaincyf/huashu-art-motion"
---

# huashu-art-motion

**2.0k** stars · **986** stars/天 · 建立 2 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/alchaincyf--huashu-art-motion");
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

`個人專案` `v1.0.0`

> [!summary] 一句話摘要
> 艺术动画skill：35种艺术风格、9种解说语法，用代码让画动起来。

## 專案簡介

艺术动画skill：35种艺术风格、9种解说语法，用代码让画动起来。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--huashu-art-motion");
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
> const me = dv.page("Repos/alchaincyf--huashu-art-motion");
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
| Forks | 217 |
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-10-08 |
| 建立日期 | 2026-10-06 |
| Repo 大小 | 46.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/alchaincyf/huashu-art-motion) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 93
>     "Python" : 7
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alchaincyf](https://github.com/alchaincyf) | 3 |

**最新版本**：v1.0.0 — huashu-art-motion v1.0.0 (2026-10-06)

> [!info]- Release Notes
> huashu-art-motion首次公开发布。
> 
> - 35种艺术风格配方与可运行场景。
> - 9种解说语法，其中8种提供示范片与参数化片段。
> - 3段长卷穿越示范，附卡通角色帧；口播整片参考代码需自备部分角色素材与音频。
> - 动画拆解、配乐合成、确定性及框景检查工具。
> 
> 安装：`npx skills add alchaincyf/huashu-art-motion`
> 
> 附件中的MP4是35种风格的无声画面样片；ZIP与本次公开提交内容一致，不含.git和开发历史。
> 
> 代码与文档采用MIT许可；字体、第三方笔顺数据与示范角色的使用边界见README及各目录许可说明。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-06 ~ 2026-10-08）
> **活躍天數** 2 天 · **最新 commit** feat: add configurable voice and host-image capabilities

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/alchaincyf/huashu-art-motion/issues/3) | [Bug] Windows: render.py 本地 http 服务用单线程 TCPServer，Chromium 并 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # huashu-art-motion · 艺术动画
> 
> 让你的coding agent，把艺术风格写成会动的画。
> 
> 35种艺术风格 · 9种解说语法 · 8种参数化片段 · 口播整片参考代码
> 
> ```sh
> npx skills add alchaincyf/huashu-art-motion
> ```
> 
> [看动画](#动画样片) · [看风格](#看效果) · [开始使用](#里面有什么) · [下载完整样片](https://github.com/alchaincyf/huashu-art-motion/releases/latest)
> 
> ## 动画样片
> 
> ### 核心案例：花叔闯进超级玛丽
> 
> 把自己做成像素主角，跑完一整关。砖块、水管、关卡运动与转场用代码完成，人物用生成帧合成；下面直接截自65秒成片。
> 
> 连吃蘑菇都得先选会员：OpenAI，还是Claude？选完Claude，星芒道具落下来，花叔变大。
> 
> 连踩带踢 · 像素Sam与Dario客串敌人
> 钻进水管 · 金币密室与扫描线甩镜
> 
> 这组展示的是成片效果；GIF无声、循环播放。[片段时间点与导出参数](assets/showcase/mario-clips.md)。
> 
> ### 花叔穿越名画
> 
> 画里真的会动。下面三段来自同一支穿越短片，场景用代码画，角色用生成帧合成。
> 
> 日本桥上的一次水漂。
> 
> 古埃及 · 圣甲虫
> 8-bit · 顶出金币
> 
> ## 看效果
> 
> 35段样片各取一帧：同一位少女、同一只橘白猫、同一张桌子，从公元前 40000 年的岩洞一路穿到 2026 年。每一段都在动：梵高的星空在转，马赛克的颜色从石块上流过去，水墨晕染把画面带进下一个时代。
> 
> 👉 [下载全风格样片（MP4）](https://github.com/alchaincyf/huashu-art-motion/releases/latest)
> 
> 长卷穿越片：一个人从左走到右，跨过边界的那一刻，世界和他自己的画风一起换（下图是收进仓库的 3 段示范：埃及壁画 → 莫奈《日本桥》→ 8-bit）：
> 
> 8种解说语法各有一支可运行示范片（下图每镜取一帧）。此外还有第9种「讲解员式财经科普」，提供语法卡和需自备角色的整片代码快照。白板适合跟着口播画关系，Vox适合图形与信息拼贴：
> 
> | | |
> |---|---|
> |  Kurzgesagt：扁平无描边、尺度穿行 |  Vox：剪报、红线、荧光笔 |
> |  白板：笔尖揭开线稿 |  3Blue1Brown：一个对象形变成下一个 |
> |  Storytime：反应特写、笑点停顿 |  动态文字：主词砸进来 |
> |  发布会：光斑底、毛玻璃卡、大数字 |  财经图表：先轴、后数据、只标一件事 |
> 
> ---
> 
> ## 能做什么
> 
> | 你说 | 它做 |
> |---|---|
> | 「复刻这个动画」「拆一下这段」 | 先跑拆解脚本量出转场、节拍网格、每段运动热图，再按机制用代码复刻 |
> | 「做个梵高／莫奈／包豪斯那种的动画」 | 先设计一帧，再让它动起来；35张风格配方卡当起点 |
> | 「用我的口播做一段艺术动画」 | 镜头表 → 定风格 → 世界画布加镜头 → 输出一条画面轨 |
> | 「做一个人穿过一幅幅名画的片子」 | 长卷骨架：每个世界一个段文件，主角一路往右走，跨边界换画风，镜头只进不退 |
> | 「做解说视频的动画段」 | 按口播选语法，喂一份 JSON，出一段时长精确到帧的片段（横竖屏、可透明底） |
> | 「画面里要有人」 | 人交给生图模型出帧，代码负责合成、换帧和材质 |
> | 「配个乐、卡节奏」 | BPM 网格、动机换乐器、结尾音效序列，纯代码合成 |
> 
> 交付前有一道数字验收：`qa.py` 量稳定、效率、动感、流畅及文字框景线索，再派一个没参与制作的 agent 只看成片挑问题。
> 
> ---
> 
> ## 里面有什么
> 
> | | 数量 |
> |---|---|
> | 艺术风格配方卡（参数、母题动作、签名转场、当前短板） | 35张，`references/风格配方/` |
> | 对应的场景代码 | 35个，`scripts/engine/scenes/` |
> | 解说动画语法卡 | 9份；其中8种附示范片、参数化片段与示例spec |
> | 口播整片参考代码 | 混合风格、白板、Vox、讲解员；需自备部分素材，详见目录README |
> | 长卷穿越片示范（骨架＋3 段＋角色帧库） | 1 支，`scripts/engine/demos/long_scroll/` |
> | 转场 | 艺术风格签名转场与解说转场，包含淡入、硬切和纸面转场 |
> | 绘画与动画库（笔刷、渲染器、后期、骨架、镜头、图表、排版……） | 17 个，`scripts/engine/lib/` |
> | 方法文档（拆解、机制、一帧先行、纯代码绘制、节奏配乐、角色、长卷……） | 核心12篇，`references/01`–`12`；另有[可选语音指南](references/capabilities.md) |
> 
> ```
> huashu-art-motion/
> ├── SKILL.md                 # 先判断任务，再按表读对应文档
> ├── references/              # 01–12方法文档、35张风格配方卡、9张语法卡、正面经验
> ├── assets/                  # 总览图（README 用）
> └── scripts/
>     ├── engine/              # 可整个复制走的动画工程：引擎、转场、库、场景、示范片、片段
>     ├── analyze/breakdown.py # 把参考动画拆成「能写代码的地图」
>     ├── qa.py                # 一键验收
>     ├── audio/               # 纯代码合成配乐的模板
>     └── font_subset.py ...   # 字体子集、绿幕抠图
> ```
> 
> 依赖：[uv](https://docs.astral.sh/uv/)、ffmpeg、Playwright Chromium（第一次跑 `uv run --with playwright playwright install chromium`）。试一下：
> 
> ```sh
> cd huashu-art-motion
> uv run --with playwright python scripts/engine/render.py --solo 09_postimp --stills 0.3 --out 试渲   # 梵高那一段的一帧
> uv run --with playwright python scripts/engine/render.py --spec scripts/engine/examples/t3_finance_chart.json --out 财经图表.mp4
> ```
> 
> ---
> 
> ## 背后的故事
> 
> 2026 年 10 月初，我在 X 上看到 Tak（[@cherry_mx_reds](https://x.com/cherry_mx_reds/status/2106095190285144331)）的一支 15 秒动画：一位少女和一只猫穿过 40000 年艺术史，每个时代只有一秒左右，但画里的东西都在动。
> 
> 我让 Claude 复刻它。第一版是「一张张画之间做转场」，被我否了：原片每个时代可能就一秒，但画里的元素完全是流动的。于是改成先拆解（量转场、拟合节拍网格、看每段哪里在动），再用代码一层层把画画出来、让它动起来。
> 
> 做的过程中我跟它说：「我们不只是为了复刻，我需要你积累经验。」所以这个 skill 里记的不只是代码，还有哪些做法被证明有效（`references/07-正面经验.md`）、每种风格的坑和短板。之后又派了 4 组只读 skill 的 agent 去做它没见过的 20 种风格，把它们各自造的轮子收成统一的库；再加上 8 种 YouTube 解说动画语法，接进了我自己的口播视频管线。最后用同一套东西做了《花叔穿越名画》：23种画风、2分08秒，我从洞穴一路走到 2026，骨架和其中 3 段也收进来了。
> 
> ---
> 
> ## 致谢
> 
> - **Tak（[@cherry_mx_reds](https://x.com/cherry_mx_reds)）** 的《Art History Speedrun》是这个 skill 的起点。16 个艺术时代的场景构图和「少女＋猫穿越」的设定沿用了原片的思路，画面全部用代码重新画，配乐脚本里是原创示例乐谱（只保留拆解方法，不保留对原曲的转录）；仓库里不含原片的帧、截图或音频文件。想看原作请去他的 X。
> - 解说语法卡里拆解过的频道和资料（Kurzgesagt、Vox、3Blue1Brown、RSA Animate、TheOdd1sOut 等）都在各张卡的「一手参考」里给了链接，仓库只记测量出来的参数，不含他们的画面。
> - 字体都是 SIL OFL 1.1 开源字体，清单和版权见 `scripts/engine/lib/fonts/LICENSES.md`。
> 
> ---
> 
> ## 关于作者
> 
> | | |
> |:---|:---|
> | 🌐 官网 | [bookai.top](https://bookai.top) · [huasheng.ai](https://www.huasheng.ai) |
> | 𝕏 Twitter | [@AlchainHust](https://x.com/AlchainHust) |
> | 📺 B站 | [花叔v](https://space.bilibili.com/14097567) |
> | ▶️ YouTube | [@Alchain](https://www.youtube.com/@Alchain) |
> | 📕 小红书 | [花叔](https://www.xiaohongshu.com/user/profile/5abc6f17e8ac2b109179dfdf) |
> | 💬 公众号 | 微信搜「花叔」 |
> 
> ## 许可证
> 
> 代码和文档：MIT。随便用，随便改，随便造。
> 
> 例外：笔顺衍生数据`reference_films/spacex/spacex_wb/assets/strokes.js`沿用Arphic Public License（原文随文件附带）；`scripts/engine/lib/fonts/` 里的字体沿用各自的 OFL 许可；花叔的卡通形象与角色帧（`scripts/engine/demos/_shared/hero/`、`scripts/engine/demos/long_scroll/frames/`、`assets/角色/`）以及总览图、示范视频中包含的同一形象，只用于本 skill 的示范，不随 MIT 授权用于其他用途。
> 
> ---
> 
> **[女娲](https://github.com/alchaincyf/nuwa-skill)** 造 Skill。**[达尔文](https://github.com/alchaincyf/darwin-skill)** 让 Skill 进化。**艺术动画** 让画动起来。
> 
> MIT License © [花叔 Huashu](https://github.com/alchaincyf)
> 
> ---
> 
> 作者的其他项目 · also by 花叔
> 
> [](https://github.com/alchaincyf/fanbox)
> 
> ---
> 
> ## English
> 
> **huashu-art-motion** is an agent skill for making animation with code, where the paintings actually move. It ships 35 art-style recipes (cave painting, Egyptian murals, Van Gogh, Klimt, Bauhaus, Kirby comics, 8-bit, vaporwave, Shinkai and more), each with a working Canvas scene, a style "renderer" and a signature transition; 8 explainer-video grammars (Kurzgesagt, Vox, whiteboard, storytime, kinetic type, 3Blue1Brown, keynote UI, finance charts) with demo films and parameterized clips you drive with a JSON spec, frame-accurate and in landscape, portrait or alpha; a long-scroll skeleton where a character walks left to right through one painting after another (3 sample worlds included); plus a breakdown script that maps a reference animation into cuts, beat grid and motion heatmaps, and a QA script that measures stability, cost per frame, motion and smoothness.
> 
> It started as a code-only recreation of Tak's ([@cherry_mx_reds](https://x.com/cherry_mx_reds/status/2106095190285144331)) 15-second *Art History Speedrun*. The scene layouts and the girl-and-cat premise follow his original; every frame here is redrawn in code, and no frames, screenshots or audio from the original are included.
> 
> Install: `npx skills add alchaincyf/huashu-art-motion`. Requires uv, ffmpeg and Playwright Chromium. The skill content is in Chinese. The ninth grammar, presenter-led explainers, ships as a reference implementation and requires your own character assets. Full-narration examples are code snapshots, not ready-to-render projects. Code and docs are MIT; the bundled stroke medians retain the Arphic Public License; bundled fonts keep their SIL OFL licenses; the Huashu character artwork, including its appearance in overview images and demo videos, is for demo use only.
> 
> ## 可选媒体能力
> 
> 基础代码动画不需要语音或图片账号。有素材先沿用；需要生成时，按用户选择和当前环境调用。语音支持macOS系统声音和自己的火山复刻音色；图片支持现有文件导入和当前Agent/MCP工具桥接。
> 
> - [语音与私人配置](references/capabilities.md)：按需配置、可跳过，旧koubo入口兼容。
> - [图片工具接入](references/images.md)：先生成计划，由Agent调用工具，再验收并收纳素材。
> - [兼容性与验证范围](references/compatibility.md)：三家安装重装通过；Codex在线回归通过，Claude Code/Kimi在线回归受测试账户条件阻塞，待补验。
> - [维护、扩展与发布](CONTRIBUTING.md)：公共默认与私人配置分离，升级不覆盖个人选择，发布检查覆盖实际待发Git对象。
> 
> 先运行`python scripts/capabilities.py status --explain`。新增能力默认未选择、未授权；不能从检测到Key或工具推断允许消费。独立图片API执行器为后续可选扩展，不会自动切换供应商。

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/alchaincyf/huashu-art-motion)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "alchaincyf--huashu-art-motion"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "alchaincyf--huashu-art-motion" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W41" AND file.name != "alchaincyf--huashu-art-motion"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--huashu-art-motion");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "alchaincyf--huashu-art-motion" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "alchaincyf" AND file.name != "alchaincyf--huashu-art-motion"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--huashu-art-motion");
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
> const me = dv.page("Repos/alchaincyf--huashu-art-motion");
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
> const me = dv.page("Repos/alchaincyf--huashu-art-motion");
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
> const me = dv.page("Repos/alchaincyf--huashu-art-motion");
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
> const me = dv.page("Repos/alchaincyf--huashu-art-motion");
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

> **2026-10-08** — 首次收錄
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

- [[2026-10-08|2026-10-08]] — 首次收錄，2.0k stars
