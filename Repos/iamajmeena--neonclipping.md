---
repo: iamajmeena/neonclipping
url: https://github.com/iamajmeena/neonclipping
owner: iamajmeena
owner_type: User
language: Python
license: MIT
description: "Paste a link, get captioned 9:16 clips in ~2 min. Free, local, open-source clipping engine (audio-first, YouTube captions, local LLM)."
homepage: ""
stars: 1388
stars_per_day: 1388
forks: 66
open_issues: 17
created: 2026-11-19
pushed_at: 2026-11-21
first_seen: 2026-11-21
week: "2026-W47"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v1.0.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-21
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-24"
contributor_count: 2
engagement: "low"
issue_close_rate: 6
repo_size_kb: 5290
readme_length: 9750
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-21"
star_history: "2026-11-21:1388"
tags:
  - github
  - "category/other"
  - "lang/python"
  - "topic/clipping"
  - "topic/ffmpeg"
  - "topic/shorts"
  - "topic/video"
  - "topic/whisper"
aliases:
  - "neonclipping"
  - "iamajmeena/neonclipping"
---

# neonclipping

**1.4k** stars · **1.4k** stars/天 · 建立 1 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/iamajmeena--neonclipping");
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

`v1.0.0`

`clipping` `ffmpeg` `shorts` `video` `whisper` `yt-dlp`

> [!summary] 一句話摘要
> Paste a link, get captioned 9:16 clips in ~2 min. Free, local, open-source clipping engine (audio-first, YouTube captions, local LLM).

## 專案簡介

Paste a link, get captioned 9:16 clips in ~2 min. Free, local, open-source clipping engine (audio-first, YouTube captions, local LLM).

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/iamajmeena--neonclipping");
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
> const me = dv.page("Repos/iamajmeena--neonclipping");
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
| Forks | 66 |
| Open Issues | 17 |
| Issue 解決率 | 6% (1 closed) |
| 最後推送 | 2026-11-21 |
| 建立日期 | 2026-11-19 |
| Repo 大小 | 5.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/iamajmeena/neonclipping) |
| Topics | `clipping` `ffmpeg` `shorts` `video` `whisper` `yt-dlp` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `fastapi` `uvicorn` `python-multipart` `yt-dlp` `numpy` `Pillow` `faster-whisper` `opencv-python-headless` `streamlink` `pytchat`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 82
>     "JavaScript" : 8
>     "HTML" : 7
>     "PowerShell" : 3
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@iamajmeena](https://github.com/iamajmeena) | 32 |
> | [@noreply](https://github.com/noreply) | 8 |

**最新版本**：v1.0.0 — NeonClipping v1.0.0 (2026-11-19)

> [!info]- Release Notes
> ## NeonClipping v1.0.0
> 
> Paste a link, get captioned 9:16 clips in about two minutes. Free, local, open-source.
> 
> **What's in it**
> - One-click **Make clips** for YouTube / Twitch / Kick links and MP4 files (Fast = audio-first, Deep = full video + optical flow)
> - **Smart moment picking**: loudness jumps, raised voices, what is said ("oh my god", "run", "bhaago"), on-screen action cues (motion, flashes, light flicker) and a local AI score
> - **Learns from you**: 5-star ratings under every clip re-weight the signals (stored only on your computer)
> - **Hinglish captions** (Hindi in English letters), 2-4 word phrases, 5 styles (GTA Neon, Hormozi, MrBeast, Impact, Clean)
> - **Facecam presets** or draw your own face/game boxes; Min/Max clip length
> - Live clipper (`live/`) for Twitch / YouTube Live chat spikes
> - **8-page guide in English + हिंदी** (attached) with a copy-paste prompt that lets any AI agent set everything up for you
> 
> **Setup in one paste:** open the PDF, copy the prompt into Claude Code / Codex / Antigravity / Cursor.
> Or: `git clone https://github.com/iamajmeena/neonclipping` then `./run.ps1` (Windows) or `./run.sh`.
> 
> If it saves you time, please star the repo and follow @iamajmeena on Instagram. Made by Ajay K Meena.

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-20 ~ 2026-11-21）
> **活躍天數** 2 天 · **最新 commit** Fix first CI findings: unsupported newest Python on macOS, Windows temp cleanup in tests

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/iamajmeena/neonclipping/issues/2) | Captioned clips fail: "open() got an unexpected keyword argu | 1 | 1 |
> | [#18](https://github.com/iamajmeena/neonclipping/issues/18) | Problem: other | 0 | 0 |
> | [#17](https://github.com/iamajmeena/neonclipping/issues/17) | Problem: other | 0 | 0 |
> | [#16](https://github.com/iamajmeena/neonclipping/issues/16) | STUCK AT FINDING MOMENT IN AUDIO 12% . | 0 | 1 |
> | [#15](https://github.com/iamajmeena/neonclipping/issues/15) | Problem: ffmpeg | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # NeonClipping
> 
> **Paste a link. Get captioned 9:16 clips in about two minutes. Free, local, open-source.**
> 
> NeonClipping turns long YouTube / Twitch / Kick videos (or your own MP4) into vertical, captioned clips with a title and hook for each. Everything runs on your machine: no account, no subscription, no upload.
> 
> [](https://github.com/iamajmeena/neonclipping) [](https://www.instagram.com/iamajmeena/)
> 
> 🌐 **Website with one-click Windows setup:** 
> 
> **Made by [Ajay K Meena](https://www.instagram.com/iamajmeena/)** (Director, DOP, colorist, DaVinci Resolve educator, Jaipur). If NeonClipping saves you time, please ⭐ star the repo and follow [@iamajmeena](https://www.instagram.com/iamajmeena/) on Instagram.
> 
> 📘 **Guides (Hindi + English, PDF):** [docs/NeonClipping-Guide-EN-HI.pdf](docs/NeonClipping-Guide-EN-HI.pdf)  
> 🤖 **Let an AI agent install it for you:** copy [docs/NEONCLIPPING-AGENT-SETUP-PROMPT.txt](docs/NEONCLIPPING-AGENT-SETUP-PROMPT.txt) into Claude Code, Codex CLI or Cursor.
> 
> 
> ## Install
> 
> **Easiest (Windows):** download [`NeonClipping-Setup.bat`](https://github.com/iamajmeena/neonclipping/releases/latest/download/NeonClipping-Setup.bat) from the [website](https://iamajmeena.github.io/neonclipping/) or the Releases page and double-click it. It checks your PC, installs Python and FFmpeg if missing, installs NeonClipping into `%LOCALAPPDATA%\NeonClipping`, creates a Desktop shortcut and opens the app. Mac/Linux: `install.sh` (new, not yet tested on a real Mac). Or follow the steps below.
> 
> Requirements: Python 3.10 to 3.13 (the newest Python often has no wheels for the speech/vision packages yet; the Mac/Linux installer picks a supported one for you), FFmpeg on PATH. Optional but recommended: [Ollama](https://ollama.com) with `ollama pull llama3.2:3b` for AI titles, hooks and scores (without it clips are picked by the audio/motion score), and an NVIDIA GPU for NVENC and faster-whisper.
> 
> ```bash
> git clone https://github.com/iamajmeena/neonclipping
> cd neonclipping
> 
> ## Features
> 
> - One-click **Make clips**, live progress, clips appear one by one with preview and MP4 download.
> - **Min / Max clip length** (e.g. 30–80 s). Clips end on a sentence.
> - **Facecam position presets** (top-left, top-right, bottom-left, bottom-right, bottom-centre, none) for the usual streamer layouts, remembered between sessions. Or draw the face and gameplay boxes yourself in the editor.
> - **11 native layouts:** camera above/below gameplay, blurred fill, full-screen crop, gameplay only, four corner overlays, circle facecam and side-by-side. Independent face/game selection and a face-size slider. Preview-only platform safe zones.
> - Caption styles: GTA Neon, Impact, Clean, Hormozi and MrBeast. Word-timed, editable words, SRT export.
> - **Opening headings:** eight seconds by default, adjustable from 2–60 seconds, with black backing for bright gameplay and facecam layouts. Use **Improve opening heading** to write a grounded curiosity question from the selected transcript. Existing clips can apply the new look without downloading or finding moments again.
> - **Moment mix:** Balanced combines activity and transcript-led proposals; Action favours energy; Dialogue favours story, humour and insights. Final selection reduces overlapping and repetitive moments. Balanced/Dialogue prefer an already-installed Gemma 4 local judge; other local models remain a fallback. This changes curation rules and prompts, not foundation-model weights.
> - **Custom captions:** installed font family, size, text/active/outline colours, words per caption and local saved profiles. Import SRT/ASS/WebVTT or paste subtitle text, adjust word timings, split/merge and shift captions. Within-cue word timings from imported files are estimated. Download WebVTT alongside SRT.
> - **Transcript explorer:** explicitly generate or import a full-source transcript, search phrases across cues, browse pages, and click the first/last word to export that passage. Cached transcripts are reused by Make clips and invalidated when the source changes.
> - **Trim a saved clip:** in *Edit saved clips*, change Start / End and press *Only this clip*; the clip is cut again from the saved video and the subtitles move with the cut (3 to 180 s, within the saved video).
> - **52 caption languages** in the Language menu, see Honest limits for caveats.
> - **Hinglish captions**: Hindi speech is written in English letters ("kya haal hai bhai") by default. Pick Hinglish / हिंदी / English explicitly if you like. Fast uses available source captions; Best Hindi explicitly uses local large-v3 recognition and can be slower on small GPUs. Missing source captions require local recognition.
> - **Make clips uses your own setup**: facecam preset or the boxes you draw in step 03.
> - Optical-flow motion + audio highlight ranking, frame-accurate NVENC export (falls back to x264).
> - Nothing leaves your computer. The server binds to `127.0.0.1` only.
> 
> 
> ## Source quality (1080p default, 4K optional)
> 
> Under **Resolution** there is a **Source quality** menu: how sharp the video is that gets downloaded from YouTube. It used to be fixed at 720p, which made 1080p/4K exports upscaled and soft. Now:
> 
> | Choice | What you get | Measured (20 s section of a 4K video) |
> |---|---|---|
> | **1080p (default)** | H.264 1920x1080 | 10 MB |
> | 4K | AV1/VP9 3840x2160, much larger, slower to decode | 70 MB |
> | 1440p | in between | |
> | 720p | fastest, smallest | 6 MB |
> 
> If a video only exists at 720p on YouTube (some new uploads and low-quality sources), you get 720p whatever you choose. **Resolution** (export size) is a separate setting: for a sharp 4K export pick Source quality 4K and Resolution 2160. Imports are cached per link and re-downloaded if you later ask for a higher quality.
> 
> 
> ## How it finds good moments
> 
> Two modes, one button.
> 
> **⚡ Fast mode (default, videos over 10 min)** copies the trick that makes the fastest clippers fast: never look at the whole video.
> 
> 1. Download **audio only** (79 MB for an 85-minute video, about 10 s).
> 2. Take the transcript for free from YouTube's own captions (word-timed). No speech model needed. For other sources a local Whisper model is used as the fallback.
> 3. Score the whole audio track for *sudden loudness jumps* (vs a 2-minute local baseline), *raised voices* (2–4 kHz energy) and quiet-to-loud transitions.
> 4. Take the best moments, read each one's transcript with a local LLM (Ollama) and let it score the moment, write a title and a hook. Snap the start and end to sentence boundaries inside your Min/Max length.
> 5. Download **only the chosen sections** of the video (not the whole file), trim exactly by matching their sound to the audio track, and render 1080x1920 clips with burned-in captions.
> 
> **🔬 Deep mode** downloads the whole video, adds optical-flow motion (OpenCV Farneback: fast objects, impacts, camera whips) and cut density to the audio signals, shortlists 4× more candidates and gives the LLM 15 seconds of context before and after each one.
> 
> Measured on one machine (RTX 2060, 16 threads), Fast mode, 3 clips each:
> 
> | Source | Time |
> |---|---|
> | 85-minute YouTube stream (YouTube captions) | **97 s** |
> | 3-hour Twitch VOD (no captions, local speech model) | **136 s** |
> | 90-second YouTube trailer | 21 s |
> | 90-second local MP4 | 14 s |
> 
> Your numbers depend on network and CPU.
> 
> 
> ## How it decides what is a good moment
> 
> Every candidate moment is scored from several signals, then the best ones are kept:
> 
> | Signal | What it looks for |
> |---|---|
> | Loudness jump | A sudden boom or shout compared with the last two minutes |
> | Raised voice | Energy in the 2–4 kHz band (screaming, yelling) |
> | What is said | "oh my god", "oh shit", "run", "police", "bhaago", "arre yaar" and similar (English, Hinglish, Hindi) |
> | On-screen action | Fast motion (optical flow), explosion-like flashes, red/blue light flicker, scene cuts |
> | AI score | A small local LLM reads the transcript: emotion, punchline, payoff |
> 
> **It learns from you.** Under every clip there are 5 st

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/iamajmeena/neonclipping)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "iamajmeena--neonclipping"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "iamajmeena--neonclipping" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W47" AND file.name != "iamajmeena--neonclipping"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/iamajmeena--neonclipping");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "iamajmeena--neonclipping" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "iamajmeena" AND file.name != "iamajmeena--neonclipping"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/iamajmeena--neonclipping");
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
> const me = dv.page("Repos/iamajmeena--neonclipping");
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
> const me = dv.page("Repos/iamajmeena--neonclipping");
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
> const me = dv.page("Repos/iamajmeena--neonclipping");
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
> const me = dv.page("Repos/iamajmeena--neonclipping");
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

> **2026-11-21** — 首次收錄
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

- [[2026-11-21|2026-11-21]] — 首次收錄，1.4k stars
