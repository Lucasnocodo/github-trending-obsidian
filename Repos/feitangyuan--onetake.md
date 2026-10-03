---
repo: feitangyuan/onetake
url: https://github.com/feitangyuan/onetake
owner: feitangyuan
owner_type: User
language: Python
license: NOASSERTION
description: "Motion films that never cut to the next slide: every beat grows out of the one before, one continuous camera, continuity measured by an oracle. A Claude Agent Skill for product launch films and feature demos."
homepage: ""
stars: 1363
stars_per_day: 195
forks: 84
open_issues: 3
created: 2026-09-26
pushed_at: 2026-09-29
first_seen: 2026-10-02
week: "2026-W40"
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
last_reviewed: 2026-10-02
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-10-10"
contributor_count: 0
engagement: "low"
issue_close_rate: 0
repo_size_kb: 77318
readme_length: 9061
bus_factor: 0
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-10-02"
star_history: "2026-10-02:1172,2026-10-03:1363"
tags:
  - github
  - "category/other"
  - "lang/python"
  - "topic/agent_skill"
  - "topic/animation"
  - "topic/canvas"
  - "topic/claude_skill"
  - "topic/launch_video"
aliases:
  - "onetake"
  - "feitangyuan/onetake"
---

# onetake

**1.2k** stars · **195** stars/天 · 建立 6 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/feitangyuan--onetake");
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

`agent-skill` `animation` `canvas` `claude-skill` `launch-video` `motion-graphics` `video`

> [!summary] 一句話摘要
> Motion films that never cut to the next slide: every beat grows out of the one before, one continuous camera, continuity measured by an oracle. A Claude Agent Skill for product launch films and feature demos.

## 專案簡介

Motion films that never cut to the next slide: every beat grows out of the one before, one continuous camera, continuity measured by an oracle. A Claude Agent Skill for product launch films and feature demos.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/feitangyuan--onetake");
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
> const me = dv.page("Repos/feitangyuan--onetake");
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
| Forks | 74 |
| Open Issues | 3 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-09-29 |
| 建立日期 | 2026-09-26 |
| Repo 大小 | 75.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/feitangyuan/onetake) |
| Topics | `agent-skill` `animation` `canvas` `claude-skill` `launch-video` `motion-graphics` `video` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 53
>     "JavaScript" : 24
>     "HTML" : 24
> ```

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-26 ~ 2026-09-29）
> **活躍天數** 2 天 · **最新 commit** docs: show the onetake icon above the wordmark

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/feitangyuan/onetake/issues/3) | Commercial license inquiry | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> > **Motion films that never cut to the next slide.** A Claude Agent Skill that makes product launch films, teasers and feature demos where every beat grows out of the one before — one continuous take, not a stack of scenes.
> > **一镜到底的连贯动效。** 做产品发布片、预告片、功能演示：每一个画面都从上一个画面里长出来，是一整条连续的镜头，而不是一张张轮流出场的"PPT"。
> 
> [](LICENSE)
> [](SKILL.md)
> [](cases/)
> [](scripts/verify_promo.py)
> 
> From onetake's own launch film. A prompt bar opens into the ad it asked for; the next prompt collapses into a line that shoots across the desk and opens into a festival screen. No cut. [Full film with sound →](cases/onetake-launch-30s/onetake-launch.mp4)
> 
> ---
> 
> [English](#english) | [中文说明](#chinese)
> 
> ---
> 
> ## English
> 
> ### The problem: motion that falls apart
> 
> Most motion videos an AI makes today — and most template tools — come out **loose**. Title card, fade, UI shot, fade,
> feature card, fade, logo. Each shot can look fine and the whole still reads like a slideshow, because nothing
> connects one beat to the next: scenes *replace* each other.
> 
> ### What onetake does differently: every beat is carried
> 
> onetake treats the boundary between two beats as the thing to design. At every boundary, **something on screen
> survives and visibly becomes the next beat**:
> 
> - the prompt bar **opens into** the app window; the window **reflows into** the phone;
> - a bar **collapses into a line**, the line **shoots across** the desk and **becomes the first grid line** of the next film;
> - a card **grows into** the page; a stage **opens from** the character; the camera **pushes through** a card until it *is* the next scene;
> - at the end, the cast **folds into** the lockup — in the launch film, the block cursor **writes the name** in one stroke.
> 
> And **one camera holds it all together**. It never cuts: it follows the subject a beat ahead, whips to where the next
> thing will land, floats like a hand-held operator and shakes when something hits — then holds dead still, because rests
> are what make the moves land.
> 
> ### Continuity is measured, not hoped for
> 
> Every film is checked by an oracle before a human watches it. `probe.py` records what is on screen in every frame, finds
> each boundary, and asks what carried across it. A film whose beats replace each other fails.
> 
> | film | verdict | continuity (carry score) |
> |---|---|---|
> | an earlier launch film, v1 — perfect rhythm, still a slideshow | rejected | **0.00** |
> | the same film, v2 | rejected | **0.40** |
> | the same film, v3 — every beat grows out of the last | accepted | **0.75** |
> | onetake launch film | accepted | **0.83** |
> 
> The same oracle fails uniform cadence (shots all the same length), no stillness, clipped audio, fast moves without
> motion blur, and a subject that leaves the frame.
> 
> ### What makes it look finished
> 
> - **Real UI, rebuilt.** The product's interface is rebuilt in HTML from screenshots and sits on the camera's plane, so the camera can fly into it at any zoom. No screen recording.
> - **Measured moves.** ~38 moves (springs, entrances, carries, contact, sims, camera, fluid grounds), each a pure function of time with its speed curve measured — never a hand-rolled ease.
> - **Real motion blur.** Every moving frame is several captures across an open 180° shutter, averaged in linear light. Fast moves smear instead of strobing.
> - **Sound in one room.** Foley and synthesis placed from the film's own events, in one reverb, ducking the music under the hits.
> - **Deterministic.** Seek to any time, get the same frame. Drafts at 1080p30, finals at 4K60.
> 
> ### 🌟 Films made with it
> 
> Every case ships the finished film and a breakdown (concept, beat sheet, numbers, what was rejected and why). The
> films' source code is not included.
> 
>   
>     onetake launch
>       Three prompts, three films, one take — each prompt visibly becomes its film
>       ▶ Film | 📖 Breakdown
>     one-dot
>       One dot is the whole film: caret → menu → loading ring → spring curve → the dot on the i
>       ▶ Film | 📖 Breakdown
>   
>   
>     knockon
>       A chain reaction: every beat is the collision that starts the next
>       ▶ Film | 📖 Breakdown
>     clearing
>       One zoom from a year to a free half hour — 1× to 300× and back, never a cut
>       ▶ Film | 📖 Breakdown
>   
>   
>     pith
>       The window grows out of one phosphor pixel: 440× → 0.52× in one move
>       ▶ Film | 📖 Breakdown
>     ebb
>       A field of light carries the take through five places; each flood drains onto the next
>       ▶ Film | 📖 Breakdown
>   
>   
>     overlap
>       Two print passes slide into register — and an & appears that was hidden in both
>       ▶ Film | 📖 Breakdown
>     unbroken
>       One ink stroke that is never lifted: procedural brush, no textures
>       ▶ Film | 📖 Breakdown
>   
>   
>     motion-web
>       Where the rhythm rules came from: small UI, big ground, rests, then a burst
>       ▶ Film | 📖 Breakdown
>     skill-demo
>       An operation demo from nothing: the chosen menu row flies into the input as a chip, and on from there
>       ▶ Film | 📖 Breakdown
>   
> 
> > one-dot and skill-demo were made when the skill was still called *ohmymotion*; the films show that name.
> 
> ### How a film is made
> 
> 1. **Deconstruct the reference in numbers:** how much of it is still, where it cuts, how its moves ease.
> 2. **Three concepts, pick one.** Each is one sentence about the *picture* — "one dot becomes everything", "one zoom through scale" — not three stories told with the same cards.
> 3. **A beat sheet for rhythm *and* carry.** Shot lengths vary by ≥ 4×, and every boundary names what survives it.
> 4. **Compose** one HTML file on the move library. **Render** with motion blur. **Score** the sound from the film's events.
> 5. **Verify**, then show a human.
> 
> ### 📦 Installation
> 
> ```bash
> # Claude Code
> git clone https://github.com/feitangyuan/onetake.git ~/.claude/skills/onetake
> # Codex / other agents that read skills
> git clone https://github.com/feitangyuan/onetake.git ~/.agents/skills/onetake
> ```
> 
> Then ask: *"Make a 15 s launch video for my app"*, *"a feature demo rebuilt from these screenshots, no screen
> recording"*, *"my motion video feels like a slideshow — fix it"*.
> 
> **Requires** python3 with `playwright` (chromium), `numpy`, `scipy`, `Pillow`, `matplotlib` (`opencv-python` for
> reference analysis), `ffmpeg`, `node`. Narration adds `faster-whisper` and Kokoro TTS. Music is royalty-free by default.
> 
> | | |
> |---|---|
> | `SKILL.md` | the protocol and the hard rules each rejected cut taught |
> | `lib/motion.js` · `lib/ui_kit.js` | the move library; the UI-rebuild kit |
> | `scripts/` | render (motion blur, 4K60), verify (the oracle), probe, stills, reference analysis, footage, narration, sound |
> | `gallery/` | one live demo and one six-frame sheet per move |
> | `references/` | rhythm, carry, composition, camera, sound, product demos — the method with its numbers |
> 
> ### License
> 
> [PolyForm Noncommercial 1.0.0](LICENSE): free for personal, educational, research and other noncommercial use.
> **Commercial use is not permitted.**
> 
> ---
> 
> ## 中文说明
> 
> ### 问题：动效是散的
> 
> 现在大多数 AI 做出来的动效视频，还有大多数模板工具做出来的，都是**散的**。
> 标题卡、淡出、界面镜头、淡出、功能卡片、淡出、Logo。每一镜单看也许都不错，合起来还是像在翻 PPT。
> 原因是画面和画面之间没有任何联系，后一个场景只是把前一个**替换**掉了。
> 
> ### onetake 不一样：每个画面都被"接住"
> 
> onetake 把两个画面之间的交接处当成设计的重点。每一个交接处，**都有一个东西活下来，并且看得见地变成下一个画面**：
> 
> - 输入框**展开成** App 窗口，窗口再**重排成**手机界面；
> - 输入框**压成一条线**，这条线**划过桌面**，**变成**下一条片子的第一根网格线；
> - 卡片**长成**整个页面；舞台从角色身上**打开**；镜头**穿过**一张卡片，穿过去就是下一个场景；
> - 结尾，所有元素**收拢成**标志。在 onetake 自己的发布片里，是光标一笔**写出**名字。
> 
> **把这一切串起来的是同一个镜头。** 它从不剪断：提前半拍跟着主体走，抢在下一个东西落地前甩过去，像手持一样轻微浮动，东西撞上来时跟着一震；
> 该停的时候又能完全静止，因为有停顿，动作才落得下来。
> 
> ### 连贯是量出来的，不是靠感觉
> 
> 每条片子给人看之前，先过一遍自动验收。`probe.py` 记录每一帧画面上有什么，找出每一个交接处，再判断有没有东西从这边带到那边。
> 画面互相替换的片子，直接判不合格。
> 
> | 片子 | 结果 | 连贯度（carry score） |
> |---|---|---|
> | 更早的一条发布片 v1：节奏完美，仍然像 PPT | 被否 | **0.00** |
> | the same film, v2 | 被否 | **0.40** |
> | 同一条片子 v3：每个画面从上一个里长出来 | 通过 | **0.75** |
> | onetake 发布片 | 通过 | **0.83** |
> 
> 同一套验收还会判掉这些问题：镜头长度全都一样、没有静止段落、音频爆音、快动作没有运动模糊、主体出画。
> 
> ### 为什么看起来像成品
> 
> - **复刻的真实界面**：按截图用 HTML 重建产品界面，放在镜头所在的平面上，推到多近都清楚，不需要录屏。
> - **实测过的动作**：约 38 个动作（弹簧、入场、衔接、碰撞、物理模拟、镜头、流体光场），每个都是时间的纯函数，速度曲线都实测过，不用随手写的缓动。
> - **真实运动

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]]

[GitHub](https://github.com/feitangyuan/onetake)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "feitangyuan--onetake"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "feitangyuan--onetake" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W40" AND file.name != "feitangyuan--onetake"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/feitangyuan--onetake");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "feitangyuan--onetake" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "feitangyuan" AND file.name != "feitangyuan--onetake"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/feitangyuan--onetake");
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
> const me = dv.page("Repos/feitangyuan--onetake");
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
> const me = dv.page("Repos/feitangyuan--onetake");
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
> const me = dv.page("Repos/feitangyuan--onetake");
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
> const me = dv.page("Repos/feitangyuan--onetake");
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

> **2026-10-02** — 首次收錄
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

- [[2026-10-03|2026-10-03]] — 再次上榜，1.4k stars
- [[2026-10-02|2026-10-02]] — 首次收錄，1.2k stars
