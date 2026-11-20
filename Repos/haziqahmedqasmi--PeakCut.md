---
repo: haziqahmedqasmi/PeakCut
url: https://github.com/haziqahmedqasmi/PeakCut
owner: haziqahmedqasmi
owner_type: User
language: Python
license: MIT
description: "AI clipping for long videos and live streams. Self-hosted, bring your own AI key."
homepage: ""
stars: 1400
stars_per_day: 233
forks: 469
open_issues: 51
created: 2026-11-14
pushed_at: 2026-11-17
first_seen: 2026-11-20
week: "2026-W47"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-20
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-23"
contributor_count: 5
engagement: "high"
issue_close_rate: 12
repo_size_kb: 760
readme_length: 9868
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-11-20"
star_history: "2026-11-20:1400"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "PeakCut"
  - "haziqahmedqasmi/PeakCut"
---

# PeakCut

**1.4k** stars · **233** stars/天 · 建立 6 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/haziqahmedqasmi--PeakCut");
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
> AI clipping for long videos and live streams. Self-hosted, bring your own AI key.

## 專案簡介

AI clipping for long videos and live streams. Self-hosted, bring your own AI key.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/haziqahmedqasmi--PeakCut");
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
> const me = dv.page("Repos/haziqahmedqasmi--PeakCut");
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
| Forks | 469 |
| Open Issues | 51 |
| Issue 解決率 | 12% (7 closed) |
| 最後推送 | 2026-11-17 |
| 建立日期 | 2026-11-14 |
| Repo 大小 | 760 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/haziqahmedqasmi/PeakCut) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `fastapi` `httpx` `numpy` `psycopg` `psycopg-binary` `python-multipart` `sherpa-onnx` `soundfile` `SQLAlchemy` `uvicorn` `yt-dlp` `pillow`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 59
>     "HTML" : 37
>     "JavaScript" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@haziqahmedqasmi](https://github.com/haziqahmedqasmi) | 19 |
> | [@SamarthKale](https://github.com/SamarthKale) | 2 |
> | [@AryanJha1207](https://github.com/AryanJha1207) | 1 |
> | [@AymanAhsan](https://github.com/AymanAhsan) | 1 |
> | [@dannybyarun](https://github.com/dannybyarun) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-15 ~ 2026-11-17）
> **活躍天數** 2 天 · **最新 commit** Made to work on game streams (#28)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/haziqahmedqasmi/PeakCut/issues/5) | General issue | 1 | 1 |
> | [#71](https://github.com/haziqahmedqasmi/PeakCut/issues/71) | Russian speech is not transcribed: captions only show Englis | 0 | 0 |
> | [#68](https://github.com/haziqahmedqasmi/PeakCut/issues/68) | unable to add api key | 0 | 0 |
> | [#67](https://github.com/haziqahmedqasmi/PeakCut/issues/67) | Long videos can exhaust memory during loudness analysis | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # PeakCut
> 
> Turn long videos and live streams into captioned vertical clips, ready to post. Free and open source: run it on
> your own computer or server, with your own AI key.
> 
> Paste a YouTube, Twitch or Kick link (or upload a file) and PeakCut finds the moments worth clipping, cuts them to
> 9:16, adds word-by-word captions and a hook, and can post them to your connected accounts. It can also record a
> creator's live stream and clip the highlights while the stream is still running.
> 
> 
> ## Quick start
> 
> You need Python 3.10 or newer and `ffmpeg`. On Windows: `winget install Gyan.FFmpeg`. On a Mac: `brew install ffmpeg`.
> On Linux: `sudo apt install ffmpeg`. PeakCut finds it by itself and tells you in the dashboard if it is missing.
> 
> Put PeakCut in a short folder that stays put: `C:\peakcut` on Windows, `~/peakcut` on a Mac or Linux. Not inside a
> temporary folder or an AI assistant's workspace: those get cleaned up, and on Windows a folder that deep stops the
> speech model from loading (Windows can't open files whose full path is over 260 characters). If an AI assistant
> installs it for you, it should ask you where to put it first ([AGENTS.md](AGENTS.md) tells it to).
> 
> On Windows:
> 
> ```bash
> git clone  C:\peakcut
> ```
> 
> ```bash
> cd C:\peakcut
> ```
> 
> On a Mac or Linux:
> 
> ```bash
> git clone  ~/peakcut
> ```
> 
> ```bash
> cd ~/peakcut
> ```
> 
> ```bash
> pip install -r requirements.txt
> ```
> 
> Start the server:
> 
> ```bash
> python -m studio.server
> ```
> 
> The first start downloads the speech model by itself (about 480 MB, once).
> 
> Open http://127.0.0.1:8765. There is no sign-in: it opens straight into the dashboard. Go to **Settings, AI**, choose
> your AI service, paste your key and press **Save and test** (see [Choose your AI](#choose-your-ai)).
> 
> 
> ## What it does
> 
> - **Clips from any video.** Transcribes the audio, asks an AI which moments would hold a stranger's attention, and
>   renders each one with captions in one of three styles.
> - **Live clipping.** Records a stream into a rolling buffer and clips as it happens, using loudness, chat activity
>   and the transcript.
> - **Workspaces per creator.** Channels, clip settings, posting rules and an activity log for each creator you clip.
> - **Posting.** Connect YouTube, Instagram and TikTok in one click, then queue or auto-post finished clips, with
>   spacing and daily caps (see [DEPLOY.md](DEPLOY.md#connecting-youtube-instagram-and-tiktok) for the one-time setup).
> - **No sign-in on your own computer.** It opens straight into the dashboard. On a shared server, switch accounts on
>   (`PEAKCUT_ACCOUNTS=1`) for email or Google sign-in and an admin dashboard.
> - **Your own AI.** Gemini, OpenAI, Grok, Groq, OpenRouter, Claude, a local model through Ollama, or anything that
>   speaks the OpenAI chat format. No key at all also works: clips are then picked by loudness.
> 
> 
> ## Choose your AI
> 
> PeakCut needs a chat model that can return JSON. The easy way is in the dashboard: **Settings, AI**. Pick the
> service, paste your key, press **Find models** to choose from the service's own list, then **Save and test**. The
> key is kept in the data folder on your machine and is never shown again.
> 
> If you prefer a file (or run a server), the same three things can go in `.env`. What is saved in the dashboard wins:
> 
> ```ini
> PEAKCUT_AI_PROVIDER=gemini
> PEAKCUT_AI_MODELS=gemini-2.5-flash
> PEAKCUT_AI_KEY=your-key-here
> ```
> 
> | `PEAKCUT_AI_PROVIDER` | Service | Where to get a key |
> |---|---|---|
> | `gemini` | Google Gemini | https://aistudio.google.com/apikey |
> | `openai` | OpenAI | https://platform.openai.com/api-keys |
> | `xai` | Grok (xAI) | https://console.x.ai |
> | `groq` | Groq | https://console.groq.com/keys |
> | `openrouter` | OpenRouter (many models, one key) | https://openrouter.ai/keys |
> | `anthropic` | Claude | https://console.anthropic.com |
> | `ollama` | A model on your own machine, no key | https://ollama.com |
> | `custom` | Any OpenAI-compatible address: also set `PEAKCUT_AI_BASE_URL` | |
> 
> - `PEAKCUT_AI_MODELS` is the model id exactly as the service names it. Model names change often, so check the
>   service's current list. Several ids separated by commas are tried in order, which gives you a fallback.
> - A fast, inexpensive model is the right choice. A one-hour video is read in about four requests.
> - You pay the AI service directly for what you use. The **AI usage** page in the app shows how many requests and
>   tokens each video took.
> - Speech to text does not use the AI service. It runs on your own machine, so audio never leaves it.
> 
> 
> ## Settings
> 
> Everything is set through environment variables, normally in a `.env` file next to this README.
> [`.env.example`](.env.example) lists every setting with a short explanation. The ones that matter first:
> 
> | Setting | What it is for |
> |---|---|
> | `PEAKCUT_AI_PROVIDER`, `PEAKCUT_AI_MODELS`, `PEAKCUT_AI_KEY` | The AI that picks clips and writes titles (or set it in the dashboard) |
> | `PEAKCUT_ACCOUNTS` | `1` makes everyone sign in. Use it on any server other people can reach |
> | `GOOGLE_CLIENT_ID`, `GOOGLE_CLIENT_SECRET` | Optional: Sign in with Google, and connecting YouTube |
> | `PEAKCUT_SMTP_*`, `PEAKCUT_MAIL_FROM` | Optional: confirmation and password emails |
> | `PEAKCUT_DATA` | Where videos, clips and the database are kept (default `./data`) |
> 
> `.env`, the `secrets/` folder and all user data are ignored by git. Keep keys there, never in the code.
> 
> 
> ## Admins
> 
> This only matters with accounts switched on (`PEAKCUT_ACCOUNTS=1`); without them you are the owner and can do
> everything. An account is an admin only when the database says so. No email address is special in the code and no web request
> can change a role. Do it on the machine that runs PeakCut:
> 
> ```bash
> python -m studio.admin grant you@example.com
> ```
> 
> `revoke` and `list` work the same way. The admin dashboard is at `/admin` and answers "not found" to everyone else.
> 
> 
> ## How it is built
> 
> | Part | What it is |
> |---|---|
> | `studio/` | The server: FastAPI, the clip pipeline, live recording, accounts |
> | `studio/ai.py` | The only file that talks to an AI service. Add a provider here |
> | `web/` | The pages: landing, sign-in, the app, the admin dashboard (plain HTML, CSS and JavaScript, no build step) |
> | `tests/` | Tests that run against a throwaway copy of the app |
> | `deploy/`, `Dockerfile`, `docker-compose.yml` | One-server deployment with PostgreSQL and automatic HTTPS |
> 
> Video work is done with `ffmpeg` and `yt-dlp`. Speech is transcribed with `sherpa-onnx` and the Parakeet model.
> Data is kept per user: accounts in the database (SQLite on your own computer, PostgreSQL on a server), videos and
> clips in each user's own folder. [AGENTS.md](AGENTS.md) is a short map of the code for contributors and AI coding
> assistants.
> 
> 
> ## Where your videos and clips are kept
> 
> Everything PeakCut keeps is in one folder: videos, clips, recordings, creators, settings and the speech model. By
> default it is the `data` folder inside PeakCut. **Settings, Storage** shows the folder and how much room its drive
> has, opens it in one click, and lets you move it to another drive: choose the new folder, and PeakCut moves
> everything there the next time it starts. If the drive is nearly full, PeakCut says so and stops taking new videos
> until there is room. (`PEAKCUT_DATA` in `.env` still works and takes priority.)
> 
> 
> ## Updating
> 
> PeakCut checks GitHub once a minute while it runs. When a newer version is out, the dashboard shows a notice
> within a minute or two (no restart needed), with what changed
> and how to update: ask your AI coding assistant to do it (the notice has a sentence to paste), or run
> `git pull && pip install -r requirements.txt` in the PeakCut folder and restart it (with Docker:
> `git pull && docker compose up -d --build`). Your `.env`, keys and clips are not touched. Only the two commit ids
> are sent to GitHub; set `PEAKCUT_UPDATE_CHECK=0` to turn the check off.
> 
> 
> ## Deploy
> 
> [DEPLOY.md](DEPLOY.md) walks through a single server with Docker: the app, PostgreSQL, and Caddy for HTTPS.
> 
> ```bash
> docker compose up -d 

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/haziqahmedqasmi/PeakCut)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "haziqahmedqasmi--PeakCut"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "haziqahmedqasmi--PeakCut" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W47" AND file.name != "haziqahmedqasmi--PeakCut"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/haziqahmedqasmi--PeakCut");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "haziqahmedqasmi--PeakCut" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "haziqahmedqasmi" AND file.name != "haziqahmedqasmi--PeakCut"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/haziqahmedqasmi--PeakCut");
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
> const me = dv.page("Repos/haziqahmedqasmi--PeakCut");
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
> const me = dv.page("Repos/haziqahmedqasmi--PeakCut");
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
> const me = dv.page("Repos/haziqahmedqasmi--PeakCut");
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
> const me = dv.page("Repos/haziqahmedqasmi--PeakCut");
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

> **2026-11-20** — 首次收錄
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

- [[2026-11-20|2026-11-20]] — 首次收錄，1.4k stars
