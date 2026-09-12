---
repo: Vincentwei1021/anything2explainer
url: https://github.com/Vincentwei1021/anything2explainer
owner: Vincentwei1021
owner_type: User
language: TypeScript
license: NOASSERTION
description: "Topic in, narrated explainer video out. A Claude Code / Codex skill that turns any topic into a black-canvas motion-graphics explainer video with TTS voiceover, subtitles and a chapter progress bar. Chinese or English; every frame drawn in code with Remotion."
homepage: ""
stars: 967
stars_per_day: 322
forks: 174
open_issues: 2
created: 2026-09-08
pushed_at: 2026-09-10
first_seen: 2026-09-12
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
last_reviewed: 2026-09-12
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-09-15"
contributor_count: 2
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 15357
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-09-12"
star_history: "2026-09-12:967"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - "topic/agent_skills"
  - "topic/ai_agents"
  - "topic/ai_video"
  - "topic/claude_code"
  - "topic/claude_code_skill"
aliases:
  - "anything2explainer"
  - "Vincentwei1021/anything2explainer"
---

# anything2explainer

**967** stars · **322** stars/天 · 建立 3 天前 · TypeScript · NOASSERTION

```dataviewjs
const me = dv.page("Repos/Vincentwei1021--anything2explainer");
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

`agent-skills` `ai-agents` `ai-video` `claude-code` `claude-code-skill` `codex` `edge-tts` `educational-video` `explainer-video` `kokoro` `motion-graphics` `multi-agent` `react` `remotion` `text-to-video` `tts` `typescript` `video-generation`

> [!summary] 一句話摘要
> Topic in, narrated explainer video out. A Claude Code / Codex skill that turns any topic into a black-canvas motion-graphics explainer video with TTS voiceover, subtitles and a chapter progress bar. Chinese or English; every frame drawn in code with Remotion.

## 專案簡介

Topic in, narrated explainer video out. A Claude Code / Codex skill that turns any topic into a black-canvas motion-graphics explainer video with TTS voiceover, subtitles and a chapter progress bar. Chinese or English; every frame drawn in code with Remotion.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Vincentwei1021--anything2explainer");
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
> const me = dv.page("Repos/Vincentwei1021--anything2explainer");
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
| Forks | 174 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-09-10 |
| 建立日期 | 2026-09-08 |
| Repo 大小 | 15.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Vincentwei1021/anything2explainer) |
| Topics | `agent-skills` `ai-agents` `ai-video` `claude-code` `claude-code-skill` `codex` `edge-tts` `educational-video` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 73
>     "Python" : 24
>     "Shell" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Vincentwei1021](https://github.com/Vincentwei1021) | 15 |
> | [@DHCatLaw](https://github.com/DHCatLaw) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-08 ~ 2026-09-10）
> **活躍天數** 3 天 · **最新 commit** fix(tts): 显式请求词边界，字幕起点不再静默退化成插值

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/Vincentwei1021/anything2explainer/issues/5) | 商业授权咨询：教育类自媒体视频制作与发布 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # anything2explainer
> 
> [](https://claude.com/claude-code)
> [](https://openai.com/codex)
> [](https://remotion.dev)
> [](LICENSE)
> 
> **English** | [简体中文](README_ZH.md)
> 
> **Topic in, narrated explainer video out.** anything2explainer is a [Claude Code](https://claude.com/claude-code) / [Codex](https://openai.com/codex) skill that turns any topic into a black-canvas motion-graphics explainer video with TTS voiceover, subtitles and a chapter progress bar, in Chinese or English. Every frame is drawn in code with [Remotion](https://remotion.dev) (React + TypeScript). No stock footage, no generative video model, no frames lifted from anyone else's work.
> 
> It is not a CLI. What ships here is the whole method an AI coding agent needs to finish the film: a compilable Remotion template, a primitives and lighting library, tooling for voiceover / storyboard / rendering / quantitative QC, written style and motion specs, a multi-agent division-of-labour protocol, and one complete reference film as the quality bar.
> 
> **English cut** — *RAG & Knowledge Bases*, 5′02″, 44 lines / 785 words, voiced by kokoro-82m `am_liam` at natural speed:
> 
> https://github.com/user-attachments/assets/e2771c68-a28c-4459-ac5a-a5b685181eeb
> 
> **Chinese cut** — *RAG 与知识库* v2, 4′54″, 44 lines / 1490 characters, dot-field backdrop (`bg: 'dots'`), voiced through the bring-your-own-TTS path (Volcengine TTS 2.0 + forced alignment):
> 
> https://github.com/user-attachments/assets/5c213990-cbba-439e-8371-fbb3aa348e05
> 
> Both cuts share one storyboard and 44 shots; the English cut re-times every shot to the English voiceover. The full paper trail of the original Chinese cut (4′35″, star-field backdrop, 8 build agents in parallel for 40 minutes, two QC rounds) lives in [`examples/rag/`](examples/rag/) (research → narration → storyboard → shot source → QC reports → delivery notes); rendered frames are in [`examples/rag/frames/`](examples/rag/frames/).
> 
> 
> ## Install
> 
> ```bash
> git clone https://github.com/Vincentwei1021/anything2explainer.git
> ln -s "$PWD/anything2explainer" ~/.claude/skills/anything2explainer   # Claude Code
> ln -s "$PWD/anything2explainer" ~/.codex/skills/anything2explainer    # Codex
> ```
> 
> Dependencies:
> 
> ```bash
> 
> # Node ≥18 (the template's npm install pulls remotion 4.0.507 / react 19)
> brew install ffmpeg          # frame extraction / transcoding, required
> 
> python3 -m venv ~/.venvs/a2e && source ~/.venvs/a2e/bin/activate
> pip install 'edge-tts==7.2.8' numpy pillow scipy   # pin edge-tts: it tracks a Microsoft endpoint and breaks across upgrades (7.2.0+ needs word boundaries requested explicitly; the script does)
> 
> 
> ## Usage
> 
> In Claude Code or Codex, just say what you want. The skill triggers itself:
> 
> > Make me an explainer video about vector databases.
> 
> > 讲一下向量数据库，做成一条讲解视频
> 
> It then walks the 9 stages in `SKILL.md`:
> 
> 1. **Scaffold** the Remotion project from the template.
> 2. **Research** (1 agent): a sourced research doc with a list of numbers and analogies, every item with a URL.
> 3. **Narration & timeline**: the script, then TTS voiceover with per-word boundaries turned into a frame-accurate timeline and subtitle table.
> 4. **Storyboard**: one line per shot with frame range, beat, visuals, motion, hero element and lighting.
> 5. **Overlays & primitives**: title, chapter cards, HUD, pipeline rail, plus 2–5 topic-specific icons.
> 6. **Pilot** (1 agent): the first shot group, then a 30-second cut for you to judge the look.
> 7. **Parallel build**: the remaining groups, 5–7 shots per agent, each writing pure-function Remotion components.
> 8. **Render** the full film and run quantitative frame metrics.
> 9. **QC & fixes**: one QC agent per chapter, fix agents per group, re-verification, then delivery notes.
> 
> You can also drive the template by hand:
> 
> ```bash
> template/scripts/new_project.sh ~/work/my-video myslug
> cd ~/work/my-video
> 
> ## What it does
> 
> - **Input**: a topic ("explain vector databases"), or an article / document you want turned into a video. You also pick the length and the language.
> - **Output**: a 1280×720 H.264 MP4 with synchronized voiceover, word-boundary-aligned subtitles, chapter cards, a top HUD and a bottom chapter progress bar, plus the full paper trail (research doc with sources, narration, storyboard, per-shot source code, QC reports).
> - **How**: the agent researches the topic with sources, writes the narration, generates the voiceover and frame-accurate timeline, storyboards every shot, then dispatches parallel build agents that write one Remotion component per shot. QC agents review the rendered frames against written criteria before delivery.
> - **Time**: roughly 1 to 3 hours of wall clock depending on length, most of it agents building shots in parallel. You are consulted at exactly four checkpoints.
> 
> 
> # 3. script/storyboard_src.md → python3 scripts/render_storyboard.py     4. edit src/config.ts
> 
> ## Output spec
> 
> | | |
> |---|---|
> | Frame / rate | 1280×720 @ 30fps, H.264 |
> | Length | your call (see table below); 2–8 minutes all work |
> | Language | Chinese or English (`lang` in `src/config.ts`); typography, subtitle budgets and TTS switch with it |
> | Look | black canvas with one of two backdrops, star field + fog gradient or dot-field wave (`bg` in `src/config.ts`; the dot-field wave is ported from video-talkcraft); white line art + purple accents; ultra-bold headline type |
> | Persistent layers | 44px white-on-black-stroke subtitles, bottom chapter progress bar, top capsule HUD, optional pipeline rail |
> | Voiceover | Chinese: edge-tts `zh-CN-YunxiNeural` (Yunxi, male). English: kokoro-82m `am_liam` (Liam, male). Or bring your own TTS / finished audio |
> 
> Length drives how much ground the film covers, and the size of the whole pipeline:
> 
> | Length | Chinese chars | English words | Lines / shots | Build agents | Wall clock | Disk |
> |---|---|---|---|---|---|---|
> | 2–3 min | 700–950 | 280–420 | 24–32 | 4–6 | ≈1 h | ≈2 GB |
> | 3–5 min (reference tier) | 1200–1500 | 420–700 | 40–50 | 8 | ≈2 h | ≈2 GB |
> | 5–8 min | 1800–2400 | 700–1150 | 60–80 | 10–14 | ≈2–3 h | ≈3 GB |
> 
> Chapter count is not tied to length. One chapter that goes deep or several short ones both work; the progress bar splits evenly across however many chapters the narration declares.
> 
> 
> # only needed for English narration (kokoro-82m runs locally)
> pip install kokoro soundfile && brew install espeak-ng
> ```
> 
> `scipy` is only used by the QC script `frame_metrics.py`. The shell scripts are zsh + Python 3, developed and verified on macOS; Linux should work, Windows is untested.
> 
> 
> # 1. research/调研.md          2. script/narration.txt → python3 scripts/tts_build.py
> 
> # 5. src/shots/G1..Gn          6. scripts/preview.sh 30   (first 30 seconds)
> 
> # 7. VER=v1 scripts/render.sh + python3 scripts/frame_metrics.py         8. QC → fix → v2/v3
> ```
> 
> 
> ## Four checkpoints
> 
> The run stops and waits for you at exactly four points instead of ploughing through (details in `SKILL.md`):
> 
> 1. **Length and language**: before the script is written. Length decides the line count, shot count and how many agents run in parallel, i.e. how much the film can actually cover; language flips `lang` in `src/config.ts`, which drives typography, subtitle budgets and the default voice.
> 2. **Narration sign-off**: before voiceover. Once locked, frame numbers are hard-coded into every shot; changing one word re-times the whole film. This is the cheapest place to intervene.
> 3. **Voiceover**: before TTS runs you get asked whether you have a preferred engine. If not, defaults apply (edge-tts Yunxi for Chinese, kokoro-82m Liam for English). You can also hand over finished audio and fill the per-line timeline yourself.
> 4. **First 30 seconds**: only the first build group is done, then 30 seconds get rendered for you to judge the look. Fixing the style here costs one group; after the full render it costs every group.
> 
> 
> ## How it compares
> 
> | Tool class | What it produces | Where anything2explainer differs |
> |---|---|---|
> | Generative video models (Sora, Veo, Runway) | Footage synthesized from a prompt 

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/Vincentwei1021/anything2explainer)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Vincentwei1021--anything2explainer"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Vincentwei1021--anything2explainer" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W37" AND file.name != "Vincentwei1021--anything2explainer"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Vincentwei1021--anything2explainer");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Vincentwei1021--anything2explainer" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Vincentwei1021" AND file.name != "Vincentwei1021--anything2explainer"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Vincentwei1021--anything2explainer");
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
> const me = dv.page("Repos/Vincentwei1021--anything2explainer");
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
> const me = dv.page("Repos/Vincentwei1021--anything2explainer");
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
> const me = dv.page("Repos/Vincentwei1021--anything2explainer");
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
> const me = dv.page("Repos/Vincentwei1021--anything2explainer");
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

> **2026-09-12** — 首次收錄
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

- [[2026-09-12|2026-09-12]] — 首次收錄，967 stars
