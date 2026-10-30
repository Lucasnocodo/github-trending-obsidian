---
repo: andyhuo520/digital-human-koubo
url: https://github.com/andyhuo520/digital-human-koubo
owner: andyhuo520
owner_type: User
language: TypeScript
license: MIT
description: "AI digital-human talking-head videos from one photo: Renoise MCP generation + 5 editing styles + 48 creator-grade packaging components. Agent skill for Claude Code / Codex / OpenClaw / WorkBuddy …"
homepage: ""
stars: 1508
stars_per_day: 377
forks: 341
open_issues: 2
created: 2026-10-26
pushed_at: 2026-10-26
first_seen: 2026-10-30
week: "2026-W44"
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
last_reviewed: 2026-10-30
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-02"
contributor_count: 1
engagement: "medium"
issue_close_rate: 33
repo_size_kb: 21919
readme_length: 9887
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-30"
star_history: "2026-10-30:1508"
tags:
  - github
  - "category/other"
  - "lang/typescript"
aliases:
  - "digital-human-koubo"
  - "andyhuo520/digital-human-koubo"
---

# digital-human-koubo

**1.5k** stars · **377** stars/天 · 建立 4 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/andyhuo520--digital-human-koubo");
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
> AI digital-human talking-head videos from one photo: Renoise MCP generation + 5 editing styles + 48 creator-grade packaging components. Agent skill for Claude Code / Codex / OpenClaw / WorkBuddy …

## 專案簡介

AI digital-human talking-head videos from one photo: Renoise MCP generation + 5 editing styles + 48 creator-grade packaging components. Agent skill for Claude Code / Codex / OpenClaw / WorkBuddy …

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/andyhuo520--digital-human-koubo");
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
> const me = dv.page("Repos/andyhuo520--digital-human-koubo");
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
| Forks | 341 |
| Open Issues | 2 |
| Issue 解決率 | 33% (1 closed) |
| 最後推送 | 2026-10-26 |
| 建立日期 | 2026-10-26 |
| Repo 大小 | 21.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/andyhuo520/digital-human-koubo) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 95
>     "Python" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@andyhuo520](https://github.com/andyhuo520) | 2 |

**最新版本**：v1.0.0 (2026-10-26)

> [!info]- Release Notes
> First public release. The demo videos below are linked from the README.
> 
> 首个公开版本。下面的视频就是 README 里的示例成片。
> 
> - workbuddy-live-ad.mp4 — 27 s 9:16 livestream ad (482 Renoise credits) / 直播间带货广告
> - tutorial-digital-human-upgrade.mp4 — 5:54 multi-host, multi-language tutorial / 多主播多语言教程
> - tutorial-ep2.mp4 — step-by-step digital-human tutorial / 保姆级教程
> - renoise-koubo-huazi.mp4 — 9:16 huazi talking-head / 网红花字口播
> - memt-launch.mp4 — 16:9 launch explainer / 发布解读
> - xiaolin-style-explainer.mp4 — explainer-style demo (original host) / 解说风格示范
> - packaging-gallery.mp4 — all 48 packaging components / 包装组件图鉴
> - text-behind.mp4 — text-behind-person effect / 景深字
> 
> All presenters are AI digital humans. 内容由 AI 数字人演绎。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-26 ~ 2026-10-26）
> **活躍天數** 1 天 · **最新 commit** skill: give Renoise sign-up as UTM-tracked link in setup guide

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/andyhuo520/digital-human-koubo/issues/2) | 收录通知：digital-human-koubo 已收录于 Awesome Social Media Skills | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Digital Human Koubo · AI 数字人口播
> 
> **One photo + one sentence → a finished talking-head video with a digital human.**
> Script, lip-synced AI presenter, voice clean-up, captions, and pro-YouTuber-style packaging — fully automated by your AI agent.
> 
> **English** · [简体中文](README.zh-CN.md)
> 
> [](LICENSE)
> 
> [](https://renoise.ai/mcp?utm_medium=xcom&utm_source=official)
> 
> > This 27-second livestream ad has no real presenter. Face, voice, studio, captions and the price animation are all AI.
> > The only input was one sentence: *"Use this digital human to make a 30-second livestream ad for the WorkBuddy course — 10 lessons, ¥99, was ¥999."*
> > Total cost: **482 [Renoise](https://renoise.ai/mcp?utm_medium=xcom&utm_source=official) credits**.
> 
> ---
> 
> 
> ## Installation
> 
> 
> ### 2 · Install the two skills into your agent
> 
> The repo contains two skills: `digital-human-koubo` (main) and `finance-explainer` (the engine for Style A, the finance / tech explainer).
> 
> **Claude Code**
> ```bash
> mkdir -p ~/.claude/skills && cp -R skills/digital-human-koubo skills/finance-explainer ~/.claude/skills/
> ```
> **Codex**
> ```bash
> mkdir -p ~/.codex/skills && cp -R skills/digital-human-koubo skills/finance-explainer ~/.codex/skills/
> ```
> **WorkBuddy / OpenClaw / other agents** — zip the two folders and import them in the product's *Skills* page, or copy them into its skills directory (see the product's docs):
> ```bash
> cd skills && zip -r ../digital-human-skills.zip digital-human-koubo finance-explainer && cd ..
> ```
> 
> 
> ## Quick start
> 
> Talk to your agent in plain language:
> 
> ```text
> 用我的数字人 Skill 讲这段：……（paste your content）
> Use my digital human skill to make a 30-second livestream ad: WorkBuddy course, 10 lessons, ¥99 (was ¥999).
> Make a 3-minute explainer about why Silicon Valley Bank collapsed, Xiaolin-style.
> Add a map route when she mentions these countries. / Put "¥99" behind her. / Add a teaser cold open.
> 把包装组件图鉴发我看看  (show me the packaging gallery)
> ```
> 
> What happens next:
> 1. Setup check — anything already installed is skipped.
> 2. A one-line diagnosis + 2 recommended styles with preview images, and one round of questions.
> 3. Script + scene design + **credit quote** → you approve → segment 1 → you approve → the rest.
> 4. QA, voice clean-up, editing with the style's default packaging → the finished MP4.
> 
> ---
> 
> 
> ## Demos
> 
> Click a GIF (or "Watch") to play the full video. Every demo below was produced with this repo.
> 
> | | | |
> |:---:|:---:|:---:|
> |  |  |  |
> | **Livestream sales ad** · 9:16 · 27 sStyle B + depth-text price ¥999→¥99[▶ Watch](https://github.com/andyhuo520/digital-human-koubo/releases/download/v1.0.0/workbuddy-live-ad.mp4) | **Product recommendation** · 9:16 · 89 sAnimated captions, emoji, picture-in-picture[▶ Watch](https://github.com/andyhuo520/digital-human-koubo/releases/download/v1.0.0/renoise-koubo-huazi.mp4) | **Text behind the presenter** · 5 sVision person matting, 3-layer composite[▶ Watch](https://github.com/andyhuo520/digital-human-koubo/releases/download/v1.0.0/text-behind.mp4) |
> 
> | | |
> |:---:|:---:|
> |  |  |
> | **Step-by-step tutorial** · 16:9 · 4:36The digital human teaches how she was made (Style D)[▶ Watch](https://github.com/andyhuo520/digital-human-koubo/releases/download/v1.0.0/tutorial-ep2.mp4) | **Digital human, upgraded** · 16:9 · 5:55Two presenters, 6 languages, 4 scenes, cat & dog (Style E)[▶ Watch](https://github.com/andyhuo520/digital-human-koubo/releases/download/v1.0.0/tutorial-digital-human-upgrade.mp4) |
> |  |  |
> | **Launch breakdown** · 16:9 · 39 sPresenter on the side, code B-roll on the right (Style C)[▶ Watch](https://github.com/andyhuo520/digital-human-koubo/releases/download/v1.0.0/memt-launch.mp4) | **Finance / tech explainer** · 16:9 · 2:21Charts, documents, chapter cards (Style A)[▶ Watch](https://github.com/andyhuo520/digital-human-koubo/releases/download/v1.0.0/xiaolin-style-explainer.mp4) |
> 
> Packaging component gallery · 48 components · 2:40 · ▶ Watch
> 
> > All presenters in the demos are AI digital humans and every video is labelled "内容由 AI 数字人演绎" (performed by an AI digital human). The male presenter is the author's own digital twin, made from his own photo.
> 
> ---
> 
> 
> ## What it does
> 
> - **Digital human from one photo** — a fixed presenter (face, outfit, voice description, prompt template) stored in `persona.json`, so every video is the same person. Composite her into any scene (livestream studio, shop, classroom, Kyoto street) with GPT Image first, then make her talk.
> - **Lip-synced talking clips** — the script is split into ≤ 15-second segments and generated with **Grok Video 1.5** through **[Renoise MCP](https://renoise.ai/mcp?utm_medium=xcom&utm_source=official)**. Other models (Wan 3.0, OmniHuman for your own recording) are documented.
> - **Cost gate** — the agent always quotes *segments · seconds · credits · balance* first and waits for your "yes". It generates segment 1 for you to check before batching the rest.
> - **Quality control** — every segment is transcribed with whisper and compared with the script, and 4 frames per segment are inspected (Grok sometimes burns subtitles into the picture; those segments get re-shot).
> - **Voice unification** — 1/3-octave spectral matching, de-essing, one shared small-room reverb and loudness normalisation, so 30 separately-generated clips sound like one recording (sibilance spread 13.2 dB → 5.9 dB in our tests).
> - **5 editing styles, chosen for your content** — the agent diagnoses your content, recommends 2 styles with preview images and asks you everything in one go (style · ratio & length · caption intensity · presenter).
> - **48 packaging components** — measured frame-by-frame from 25 videos by top creators (MrBeast, Mark Rober, Ryan Trahan, MKBHD, MediaStorm/影视飓风, 何同学, Johnny Harris, Vox, Kurzgesagt, 回形针, 半佛仙人, 差评, 毕导). Each style has a default packaging recipe; add or remove techniques by just asking.
> - **Text behind the presenter** — big words / numbers between the background and the person (macOS Vision person segmentation → transparent video → 3-layer composite).
> - **Multi-language** — English, Japanese, Korean, French, Spanish, Arabic tested (whisper back-check 94–100 %).
> - **Works with your agent** — a standard `SKILL.md` Agent Skill plus scripts; any agent that can load skills, connect a remote MCP server and run local commands can drive it.
> 
> 
> ### 6 · (Optional) Xiaomi MiMo TTS — designed or cloned voices
> 
> The default voice is Grok's native voice (best lip-sync). For a designed voice, your own cloned voice, or narration-only videos, the skill uses **Xiaomi MiMo TTS**:
> 
> 1. Register at **[platform.xiaomimimo.com](https://platform.xiaomimimo.com/)** and create an API key. At the time of writing Xiaomi offered the TTS models free for a limited time — check the site for current pricing.
> 2. Put the key in an environment variable, or in `~/.config/ai-teardown/mimo.env`:
>    ```bash
>    mkdir -p ~/.config/ai-teardown && cat > ~/.config/ai-teardown/mimo.env  Note: Grok generates lip movement from its own voice. Swapping in a different voice afterwards leaves ~100 ms lip offset (fine in picture-in-picture, visible in full-screen close-ups). For your own recording with exact lip-sync, use an audio-driven model such as OmniHuman (documented in the skill).
> 
> ---
> 
> 
> ## How it works
> 
> ```
> your content ──► 0. setup check (Renoise MCP / ffmpeg / whisper — skip what you already have)
>                  1. diagnose content → recommend 2 of 5 styles → ask once → brief.json
>                  2. script.json (≤15 s per segment, ~5.4 Chinese chars/s)
>                  3. quote credits → wait for "yes" → generate segment 1 → you check → batch
>                  4. range-download (CDN-safe) → whisper back-check → frame check
>                  5. voice unification (spectral match + de-ess + shared room)
>                  6. word-level timeline (tl.json)
>                  7. edit in Remotion: style template + default packaging (+ your requests)
>                  8. render → check mid-transition frames → loudness (-14 / -16 LUFS)
> ```
> 
> ---
> 
> 
> ## Supported a

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/andyhuo520/digital-human-koubo)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "andyhuo520--digital-human-koubo"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "andyhuo520--digital-human-koubo" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W44" AND file.name != "andyhuo520--digital-human-koubo"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/andyhuo520--digital-human-koubo");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "andyhuo520--digital-human-koubo" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "andyhuo520" AND file.name != "andyhuo520--digital-human-koubo"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/andyhuo520--digital-human-koubo");
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
> const me = dv.page("Repos/andyhuo520--digital-human-koubo");
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
> const me = dv.page("Repos/andyhuo520--digital-human-koubo");
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
> const me = dv.page("Repos/andyhuo520--digital-human-koubo");
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
> const me = dv.page("Repos/andyhuo520--digital-human-koubo");
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

> **2026-10-30** — 首次收錄
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

- [[2026-10-30|2026-10-30]] — 首次收錄，1.5k stars
