---
repo: FrigadeHQ/yogurt
url: https://github.com/FrigadeHQ/yogurt
owner: FrigadeHQ
owner_type: Organization
language: TypeScript
license: MIT
description: "Private AI meeting notes that stay on your computer. A free, open-source alternative to Granola for Mac, Windows and Linux."
homepage: "https://yogurt.so"
stars: 1326
stars_per_day: 442
forks: 62
open_issues: 18
created: 2026-11-10
pushed_at: 2026-11-14
first_seen: 2026-11-14
week: "2026-W46"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v0.3.14"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-14
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-17"
contributor_count: 5
engagement: "low"
issue_close_rate: 25
repo_size_kb: 9296
readme_length: 6148
bus_factor: 2
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-14"
star_history: "2026-11-14:1326"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - org
  - "topic/ai_meeting_assistant"
  - "topic/ai_notetaker"
  - "topic/electron"
  - "topic/granola_alternative"
  - "topic/linux"
aliases:
  - "yogurt"
  - "FrigadeHQ/yogurt"
---

# yogurt

**1.3k** stars · **442** stars/天 · 建立 3 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/FrigadeHQ--yogurt");
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

`ORG` `v0.3.14`

`ai-meeting-assistant` `ai-notetaker` `electron` `granola-alternative` `linux` `llama-cpp` `local-ai` `local-first` `macos` `mcp` `meeting-minutes` `meeting-notes` `offline-first` `open-source` `privacy` `speech-to-text` `transcription` `whisper` `whisper-cpp` `windows`

> [!summary] 一句話摘要
> Private AI meeting notes that stay on your computer. A free, open-source alternative to Granola for Mac, Windows and Linux.

## 專案簡介

Private AI meeting notes that stay on your computer. A free, open-source alternative to Granola for Mac, Windows and Linux.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/FrigadeHQ--yogurt");
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
> const me = dv.page("Repos/FrigadeHQ--yogurt");
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
| Forks | 62 |
| Open Issues | 18 |
| Issue 解決率 | 25% (6 closed) |
| 最後推送 | 2026-11-14 |
| 建立日期 | 2026-11-10 |
| 官方網站 | [Link](https://yogurt.so) |
| Repo 大小 | 9.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/FrigadeHQ/yogurt) |
| Topics | `ai-meeting-assistant` `ai-notetaker` `electron` `granola-alternative` `linux` `llama-cpp` `local-ai` `local-first` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 80
>     "CSS" : 7
>     "Rust" : 5
>     "JavaScript" : 4
>     "Swift" : 2
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@christianmat](https://github.com/christianmat) | 70 |
> | [@brownrout](https://github.com/brownrout) | 66 |
> | [@eltoncrego](https://github.com/eltoncrego) | 6 |
> | [@10ax](https://github.com/10ax) | 4 |
> | [@DID-69](https://github.com/DID-69) | 1 |

**最新版本**：v0.3.14 — Yogurt 0.3.14 (2026-11-13)

> [!info]- Release Notes
> ## What's Changed
> * feat(linux): read call names from the new Zoom Workplace window by @10ax in https://github.com/FrigadeHQ/yogurt/pull/31
> 
> 
> **Full Changelog**: https://github.com/FrigadeHQ/yogurt/compare/v0.3.13...v0.3.14

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-13 ~ 2026-11-14）
> **活躍天數** 2 天 · **最新 commit** AI downloads say why they stopped, and a disk that fills mid-download says so

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#33](https://github.com/FrigadeHQ/yogurt/issues/33) | Feature request - Delete meeting recordings | 3 | 0 |
> | [#29](https://github.com/FrigadeHQ/yogurt/issues/29) | Feature request: Transcription-only mode — let users opt out | 1 | 1 |
> | [#37](https://github.com/FrigadeHQ/yogurt/issues/37) | Windows 11 - Local transcribe staturates GPU | 0 | 1 |
> | [#36](https://github.com/FrigadeHQ/yogurt/issues/36) | Linux: notes fail with no fallback when the Intel GPU hangs  | 0 | 1 |
> | [#35](https://github.com/FrigadeHQ/yogurt/issues/35) | Windows 11 / Teams - Meeting audio is missing if routed to B | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> Private AI meeting notes. A free, open-source alternative to Granola.
> 
>   Download for Mac · Windows · Linux
> 
>   
> 
>   Yogurt records your calls without adding a bot to the meeting.
> 
>   macOS 14.4+ (Apple Silicon) · Windows 10 2004+ (x64) · Ubuntu 22.04+ or similar (x64 AppImage) · 8 GB memory
>   yogurt.so · Help · Build and run locally · MIT license
>   Made by Frigade.
> 
> ## What it does
> 
> - **Live transcripts.** Yogurt records calls and turns speech into text as you talk.
> - **Meeting summaries.** Yogurt writes up the conversation and any notes you add.
> - **Private by default.** Your audio, transcripts and AI processing stay on your computer.
> - **Free and open source.** You can use Yogurt without an account.
> - **Who said what.** Yogurt names speakers from Zoom, Teams and Meet on Mac only.
> - **Languages.** Multi-language mode transcribes 99 languages.
> - **Recording reminders.** Yogurt offers to record when a supported call starts.
> - **Answers with sources.** Yogurt answers questions across meetings and links to the source.
> - **Folders and search.** You can find meetings by folder, title, notes or transcript.
> - **Copy and export.** You can copy notes or transcripts, or save both as Markdown.
> - **Local MCP server.** Your chosen assistant app can read your notes when you allow access.
> - **Automatic stop.** Yogurt stops recording when the call ends.
> 
> ## Watch the demo
> 
> https://github.com/user-attachments/assets/da16b894-beb1-491a-89e1-fd10666dc9b8
> 
> ## How it works
> 
> 1. **Record.** Start recording your microphone and call audio; you can add your own notes.
> 2. **Transcribe.** Yogurt uses whisper.cpp and, on supported Macs, Apple SpeechAnalyzer.
> 3. **Summarize and ask.** A local open-weight model runs through llama.cpp.
> 
> Meeting data stays local; Yogurt goes online for model downloads and update checks.
> 
> Where your meetings, recordings, settings and models are stored
> 
> - Mac uses `~/Library/Application Support/Yogurt`.
> - Windows uses `%APPDATA%\Yogurt`.
> - Linux uses `~/.config/Yogurt`, or `$XDG_CONFIG_HOME/Yogurt` if set.
> 
> ## FAQ
> 
> What kind of computer do I need?
> 
> > A Mac with Apple silicon and macOS 14.4 or newer, a 64-bit PC with Windows 10 (version 2004) or newer, or a 64-bit Linux computer with Ubuntu 22.04 or newer. Each needs at least 8 GB of memory. If your computer is too slow, Yogurt tells you during setup. Calendar and speaker names from calls are Mac only for now.
> 
> Windows says “Windows protected your PC.” What do I do?
> 
> > Click More info, then Run anyway. Windows shows this for new apps that aren’t signed with a Microsoft certificate yet. Yogurt is open source, so anyone can check what it does.
> 
> Does Yogurt join my meetings?
> 
> > No. Yogurt records your microphone and the sound playing on your computer. No bot joins the call, so let the other people on the call know you’re recording.
> 
> Are recordings saved?
> 
> > Yes. Your recordings, transcripts, and notes are saved locally on your computer.
> 
> Is Yogurt free?
> 
> > Yes. Yogurt is free and open source under the MIT license. No account is needed.
> 
> Does Yogurt work offline?
> 
> > Yes. After a one-time download of the AI models, transcription and summaries run locally on your computer.
> 
> How much does setup download?
> 
> > It depends on your computer. Yogurt downloads a smaller notes model first, about 5 GB, then the best one your computer can run well, which can be 14 GB or more. Recording works once setup finishes, and notes and questions work offline once the notes model is in.
> 
> How do I connect my assistant app?
> 
> > In **Settings → AI apps**, turn on access, copy the helper command, and add it as a local MCP server in your assistant app. Access is off by default. The app can read your meetings, notes and transcripts, but cannot change them. It may send what it reads to its own online model. Turn access off in Yogurt to stop further reads.
> 
> Can other apps read my notes through MCP?
> 
> > Access is off until you enable it in **Settings → AI apps**. Apps get read-only access to meetings, notes and transcripts. Mac and Linux use a socket in your profile folder with `0600` permissions, so only your user account can open it. Windows uses a named pipe with a new random name each launch, stored only in your profile folder. There is no per-app token, so any app running under your account can read while access is on. Settings shows connected apps by their self-reported names.
> 
> Which AI models does Yogurt use?
> 
> > Transcription uses Whisper through whisper.cpp, with large-v3-turbo or a smaller model depending on your computer. On supported Macs, Apple SpeechAnalyzer supplies live words while Whisper produces the saved transcript. Summaries and answers use a local open-weight model from the Gemma 4, gpt-oss or Qwen3 families, chosen for your hardware and run through llama.cpp. The app uses Electron and needs no account.
> 
> Which languages does Yogurt support?
> 
> > Pick **Multi-language** in **Settings → Language → Spoken language** to transcribe 99 languages. You can also switch from the **English** menu in a note’s footer before or during recording. English only is the default. Summaries follow the meeting’s main language; answers follow your question’s language. Settings also offers 32 app languages.
> 
> Which call apps does Yogurt work with?
> 
> > You can record calls in any app because Yogurt captures your microphone and system audio. Call detection covers Zoom, Teams and Meet. On Mac, Yogurt can also read their speaker names with Accessibility permission, when the call app shows who is speaking.
> 
> How does Yogurt know a call has started?
> 
> > It checks which apps are using your microphone. For browser calls, it also checks the tab title or a nearby calendar event with a call link. This triggers an offer to record; recording starts only when you choose to.
> 
> How do I connect my calendar?
> 
> > On Mac, allow Calendar access in Settings. Yogurt reads the calendars already on your computer and lets you choose which ones to show. You do not sign into a calendar account in Yogurt.
> 
> ## Build from source
> 
> See [Build and run locally](docs/building.md) for setup, tests and installer builds.
> 
> ## License
> 
> [MIT](LICENSE) · Copyright 2026 Frigade.

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/FrigadeHQ/yogurt) · [官方網站](https://yogurt.so)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "FrigadeHQ--yogurt"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "FrigadeHQ--yogurt" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W46" AND file.name != "FrigadeHQ--yogurt"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/FrigadeHQ--yogurt");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "FrigadeHQ--yogurt" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "FrigadeHQ" AND file.name != "FrigadeHQ--yogurt"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/FrigadeHQ--yogurt");
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
> const me = dv.page("Repos/FrigadeHQ--yogurt");
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
> const me = dv.page("Repos/FrigadeHQ--yogurt");
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
> const me = dv.page("Repos/FrigadeHQ--yogurt");
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
> const me = dv.page("Repos/FrigadeHQ--yogurt");
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

> **2026-11-14** — 首次收錄
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

- [[2026-11-14|2026-11-14]] — 首次收錄，1.3k stars
