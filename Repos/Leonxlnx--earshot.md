---
repo: Leonxlnx/earshot
url: https://github.com/Leonxlnx/earshot
owner: Leonxlnx
owner_type: User
language: Python
license: MIT
description: "Ears for coding agents: let AI hear, review and make sound. CPU-only, open source."
homepage: ""
stars: 1634
stars_per_day: 409
forks: 94
open_issues: 3
created: 2026-10-15
pushed_at: 2026-10-18
first_seen: 2026-10-20
week: "2026-W43"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.2.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-20
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-23"
contributor_count: 1
engagement: "low"
issue_close_rate: 40
repo_size_kb: 4078
readme_length: 9898
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-20"
star_history: "2026-10-20:1634"
tags:
  - github
  - "category/other"
  - "lang/python"
  - "topic/ai_agents"
  - "topic/audio"
  - "topic/claude_code"
  - "topic/mcp"
  - "topic/sound_design"
aliases:
  - "earshot"
  - "Leonxlnx/earshot"
---

# earshot

**1.6k** stars · **409** stars/天 · 建立 4 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/Leonxlnx--earshot");
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

`個人專案` `v0.2.0`

`ai-agents` `audio` `claude-code` `mcp` `sound-design`

> [!summary] 一句話摘要
> Ears for coding agents: let AI hear, review and make sound. CPU-only, open source.

## 專案簡介

Ears for coding agents: let AI hear, review and make sound. CPU-only, open source.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Leonxlnx--earshot");
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
> const me = dv.page("Repos/Leonxlnx--earshot");
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
| Forks | 94 |
| Open Issues | 3 |
| Issue 解決率 | 40% (2 closed) |
| 最後推送 | 2026-10-18 |
| 建立日期 | 2026-10-15 |
| Repo 大小 | 4.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Leonxlnx/earshot) |
| Topics | `ai-agents` `audio` `claude-code` `mcp` `sound-design` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Leonxlnx](https://github.com/Leonxlnx) | 33 |

**最新版本**：v0.2.0 — earshot 0.2.0: audio to code + forge v2 (2026-10-16)

> [!info]- Release Notes
> ## earshot fit: turn a sound into code
> `earshot fit sound.wav -o recipe.py` listens to a recording and writes a readable Python recipe that re-plays it from numbers only (resonances for clicks / keys / impacts, a moving noise shape for whooshes, pitch tracks for dings), with knobs and morphs for new variations. On 12 real recordings the code renders reach a median 0.945 CLAP similarity; in our blind test the listener could not tell recording from code. See docs/FIT.md.
> 
> ## forge v2
> The AI-made sound effects grew from 5 types / 15 sounds to 34 types / 183 sounds for motion design (whooshes, risers, impacts, sub drops, logo stings, UI clicks, taps, toggles, pops, dings, shimmers, typing, glitches), with a held-out benchmark, a sharper critic, a faster search and `earshot gallery`. Details: CHANGELOG.md, docs/FORGE_V2.md.
> 
> ## Attached
> - earshot_v02.mp4: the v0.2 update film (17 s). All sounds are forge v2 code sounds except the REAL/CODE A/B pair.
> - real_vs_code.mp4: four real recordings next to their code rebuilds (22 s).
> - gallery_embedded.html: every forge v2 sound, playable in the browser (made sounds only).
> 
> Real recordings in the A/B demos: kalimba note by iainmccurdy (freesound.org, CC BY 4.0); key press by Sadiquecat, click by qubodup, mouth pop by CapsLok (freesound.org, CC0).

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-17 ~ 2026-10-18）
> **活躍天數** 2 天 · **最新 commit** Point the forge docs and eval comments at docs/history/FORGE_V2_LOG.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/Leonxlnx/earshot/issues/5) | Easy install | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # earshot
> 
> **Ears for coding agents.**
> 
> [**Watch the 22 s launch film**](https://github.com/Leonxlnx/earshot/releases/tag/v0.1.0) - every sound in it was made
> in code by `earshot forge`; no recordings, no music track.
> 
> AI coding agents can now write the code that renders a film, a product demo or a game. They still cannot hear what
> they made. They cannot tell a premium key press from a cheap one, notice that a hit lands 80 ms after the cut, or
> hear that the music swells in the wrong place.
> 
> earshot turns sound into evidence an agent can reason about: what a file sounds like in words, how well it fits a
> description, the best moment inside a long recording, whether it is a real recording or code-synthesized, a
> second-by-second listening transcript of a whole film, an annotated picture of it, and a scorecard against
> professional launch films. It runs locally on CPU, as a CLI, a Python API and an MCP server.
> 
> With ears, an agent can also **make its own sounds in code** and improve them by listening (`earshot forge`), and
> **translate a recording into code** it can vary (`earshot fit`). Both below.
> 
> **New in 0.3: sound for code-made films.** A bank of 201 sound effects stored as code that render by id in seconds,
> with no models and no network: `earshot sfx` aims a whoosh, hit, click or note at a moment in the picture, and
> `earshot kit` renders a whole film's effects with measured sync points ([below](#sound-for-films-bank-sfx-kits)).
> 
> ```
> $ earshot describe enter.ogg
>   0.56 s short transient (attack 3 ms, decays in 190 ms). Sounds most like: a single mechanical keyboard key press
>   (z +5.4), a soft key release click (z +3.6) ... [clear reading]. peak -0.1 dBFS, brightness 1.5 kHz ...
> 
> $ earshot match key.ogg "a deep thocky mechanical keyboard press" --alts "a clicky blue switch keyboard" "a mouse click"
>   -> strong (z +3.7; would rank #2 among 322 vocabulary descriptions) ...
> 
> $ earshot find keys.ogg "a single mechanical key press" --top 4
>   0:03.94-0:04.19 (0.24 s stroke, z +4.1 strong); 0:10.60-0:10.86 ...
> 
> $ earshot critique film.mp4
>   VERDICT: close - 21 of 23 scored metrics in range ... FIX FIRST: 1. [major] nothing reaches body level until 0:01.01 ...
> ```
> 
> 
> ## Install
> 
> Python 3.10+ and ffmpeg / ffprobe on PATH. CPU only; no GPU is used.
> 
> ```bash
> git clone https://github.com/Leonxlnx/earshot && cd earshot
> python -m venv .venv
> .venv/bin/python -m pip install torch --index-url https://download.pytorch.org/whl/cpu   # Windows: .venv/Scripts/python
> .venv/bin/python -m pip install -e ".[mcp,llm,dev]"
> .venv/bin/python -m earshot doctor --load
> ```
> 
> The first model use downloads two open models (~1.1 GB) into `.cache/hf` inside the repo (or `EARSHOT_HOME`), each at
> a pinned revision with safetensors weights: CLAP `laion/larger_clap_general` @ `16c8cc3` (text-audio embeddings; the
> Hub's safetensors conversion of its main revision) and the AudioSet tagger `MIT/ast-finetuned-audioset-10-10-0.4593`
> @ `f826b80`. `earshot doctor --fetch` downloads them up front. After that earshot loads them from that cache only and
> never contacts the Hub; a damaged cache is an error that names the folder, not a silent new download.
> 
> Offline: `EARSHOT_OFFLINE=1`, `HF_HUB_OFFLINE=1` and `TRANSFORMERS_OFFLINE=1` all mean the same to earshot: it never
> downloads, and a model missing from the cache is an error that says so. earshot never sets or clears these variables.
> 
> A cache made before 0.2.1 holds CLAP's main revision `ada0c23`, whose only weights are a pickle (`pytorch_model.bin`,
> the same tensors). earshot still loads it from the cache (torch `weights_only`), never downloads it, and `earshot
> doctor` says so; `earshot doctor --fetch` downloads the pinned safetensors (776 MB), used from then on.
> 
> Settings (environment variables): `EARSHOT_THREADS` (torch CPU threads, default min(4, cores/2)), `EARSHOT_HOME`
> (cache root), `EARSHOT_PRECISION` (`bf16` by default, used only on CPUs with native bf16 such as AVX512-BF16 / AMX,
> fp32 everywhere else; `fp32` forces fp32), `EARSHOT_OFFLINE=1` (above), `EARSHOT_CLAP` / `EARSHOT_AST` (another
> Hub model id, or a local model folder with `config.json` and `model.safetensors`, which loads from disk as it is with
> no network and is never downloaded into) and `EARSHOT_CLAP_REVISION` / `EARSHOT_AST_REVISION` (another Hub revision;
> safetensors weights only). A custom Hub model downloads its top-level config, tokenizer and safetensors files by name,
> never a repo's subfolders or weight variants.
> `earshot doctor` reports the revisions and what the cache holds; `--load` also what loads (revision, weights,
> precision).
> 
> 
> ## What it does
> 
> | command | what an agent gets |
> |---|---|
> | `describe FILE` | what it sounds like: calibrated tags (z) with the closest alternative readings, AudioSet labels, measurements |
> | `match FILE QUERY [--alts ...]` | how well a description fits: cosine, z among the vocabulary, a verdict (strong / plausible / weak / no match) with held-out evidence |
> | `rank QUERY PATHS...` | many candidate files sorted by a description (pick the best download) |
> | `find FILE QUERY` | the best moments inside a long recording, as sample trims (start / end seconds) |
> | `compare FILE --refs DIR` / `ab A B` | nearest reference recordings and typicality; A/B two sounds or two trims, the differences in words |
> | `realness FILE...` | real recording / pro-produced vs code-synthesized, with evidence and per-window scores |
> | `timeline FILE [--video V] [--cues C]` | the listening transcript: events (time, level, tag), sections, loudness, beat grid, sync of sound to picture cuts and cue frames |
> | `sheet FILE -o out.png` | an annotated PNG (video frames, sections, labelled events, spectrogram, waveform, loudness, sync markers) for agents that read images |
> | `critique FILE [--video V]` | a launch-video scorecard against a profile of 7 professional launch films, with timestamped fixes |
> | `profile REFS... -o p.json` | build your own reference profile from films you admire |
> | `measure FILE` | objective measurements only (no models): LUFS, true peak, LRA, envelope, spectrum, tempo / key |
> | `forge RECIPE --refset CAT` | make a sound in code and improve it by listening (see below) |
> | `fit FILE -o recipe.py` | translate a recording into a forge recipe module that re-renders it, with knobs and morphs (see below) |
> | `sfx render ID -o x.wav` | a sound from the shipped bank of 201, aimed at the picture (`--dur`, `--apex`, `--pitch`) and audited; `sfx list`, `sfx check` (no models) |
> | `kit init / render / check` | a film's sound kit: one bank sound per role, rendered into cached takes with measured onset / peak / end (no models) |
> | `gallery DIR -o page.html` | one static HTML listening page of forge outputs: players, spectrograms, numbers |
> | `llm FILE --yes-upload` | optional audio-LLM critique (Gemini), only with your own key and explicit consent |
> | `mcp` | the same tools as an MCP server for Claude Code and other agents |
> | `doctor [--load]` | check the install, models, data files and CPU settings |
> 
> Every command prints a plain-language summary first; `--json` gives the full result, `--out f.json` saves it. Errors
> are one line on stderr (`earshot : error: ...`, exit 1). Each CLI call is a new process and loads the models
> (~20-40 s) before it answers (`measure`, `sfx` and `kit` load none): for more than a few calls use the MCP server
> (models stay loaded) or one Python script with `from earshot import api`.
> 
> What an agent sees when it listens to that film with `earshot sheet` (frames, labelled sound events, spectrogram,
> loudness, sync to the beat):
> 
> 
> ## earshot fit: audio to code
> 
> `earshot fit` translates a recording into code by analysis by synthesis. It fits a small synthesis model with readable
> parameters (ringing modes, tracked partials, a time-varying noise gesture, or a layered hybrid of them) until its
> render matches the recording, then writes the model as a forge recipe module whose `render()` makes the sound. The
> module stores the structure of the sou

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/Leonxlnx/earshot)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Leonxlnx--earshot"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Leonxlnx--earshot" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W43" AND file.name != "Leonxlnx--earshot"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Leonxlnx--earshot");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Leonxlnx--earshot" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Leonxlnx" AND file.name != "Leonxlnx--earshot"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Leonxlnx--earshot");
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
> const me = dv.page("Repos/Leonxlnx--earshot");
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
> const me = dv.page("Repos/Leonxlnx--earshot");
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
> const me = dv.page("Repos/Leonxlnx--earshot");
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
> const me = dv.page("Repos/Leonxlnx--earshot");
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

> **2026-10-20** — 首次收錄
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

- [[2026-10-20|2026-10-20]] — 首次收錄，1.6k stars
