---
repo: microsoft/skill-recorder
url: https://github.com/microsoft/skill-recorder
owner: microsoft
owner_type: Organization
language: TypeScript
license: MIT
description: "Desktop app that records your on-screen work session and uses the GitHub Copilot CLI to reconstruct it as an intent + ordered steps, then builds a reusable Skill or Automation for Microsoft Scout, Microsoft Copilot Cowork, or Copilot Studio."
homepage: ""
stars: 907
stars_per_day: 227
forks: 102
open_issues: 29
created: 2026-07-29
pushed_at: 2026-08-03
first_seen: 2026-08-03
week: "2026-W32"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: "v0.3.1"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-03
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-08-06"
contributor_count: 3
engagement: "medium"
issue_close_rate: 3
repo_size_kb: 5929
readme_length: 8439
bus_factor: 2
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-08-03"
star_history: "2026-08-03:907"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - org
  - "topic/agent_skills"
  - "topic/ai_agents"
  - "topic/automation"
  - "topic/copilot"
  - "topic/copilot_cli"
aliases:
  - "skill-recorder"
  - "microsoft/skill-recorder"
---

# skill-recorder

**907** stars · **227** stars/天 · 建立 4 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/microsoft--skill-recorder");
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

`ORG` `v0.3.1`

`agent-skills` `ai-agents` `automation` `copilot` `copilot-cli` `copilot-cowork` `copilot-studio` `electron` `microsoft-scout` `screen-recording`

> [!summary] 一句話摘要
> Desktop app that records your on-screen work session and uses the GitHub Copilot CLI to reconstruct it as an intent + ordered steps, then builds a reusable Skill or Automation for Microsoft Scout, Microsoft Copilot Cowork, or Copilot Studio.

## 專案簡介

Desktop app that records your on-screen work session and uses the GitHub Copilot CLI to reconstruct it as an intent + ordered steps, then builds a reusable Skill or Automation for Microsoft Scout, Microsoft Copilot Cowork, or Copilot Studio.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/microsoft--skill-recorder");
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
> const me = dv.page("Repos/microsoft--skill-recorder");
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
| Forks | 102 |
| Open Issues | 29 |
| Issue 解決率 | 3% (1 closed) |
| 最後推送 | 2026-08-03 |
| 建立日期 | 2026-07-29 |
| Repo 大小 | 5.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/microsoft/skill-recorder) |
| Topics | `agent-skills` `ai-agents` `automation` `copilot` `copilot-cli` `copilot-cowork` `copilot-studio` `electron` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 76
>     "JavaScript" : 12
>     "CSS" : 6
>     "PowerShell" : 3
>     "Shell" : 2
>     "HTML" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@GiorgioUghini](https://github.com/GiorgioUghini) | 32 |
> | [@adilei](https://github.com/adilei) | 30 |
> | [@adilei-powerapps](https://github.com/adilei-powerapps) | 9 |

**最新版本**：v0.3.1 — Skill Recorder v0.3.1 (2026-07-30)

> [!info]- Release Notes
> # Skill Recorder v0.3.1
> 
> This is a **source-only patch release**. No prebuilt application, installer, or portable binary is attached. GitHub provides the tagged source archives, and the commands below build the exact release commit locally.
> 
> ## Fixed
> 
> - The Windows source installer now handles dependency paths longer than legacy `MAX_PATH` while moving and cleaning its staging tree.
> - The extracted source is renamed to a shorter build path before `npm ci` creates deeply nested dependencies.
> - Temporary-file cleanup can no longer hide the original installation error.
> - PowerShell 5.1 regression coverage exercises a path longer than 260 characters and a read-only dependency file.
> 
> ## Upgrade and compatibility notes
> 
> - **Windows users should use v0.3.1 instead of v0.3.0.** The v0.3.0 Windows command pins the defective installer and cannot receive this correction in place.
> - Existing successful installations remain usable. Re-run the command below to install the corrected revision.
> - macOS and Ubuntu behavior is unchanged.
> - No dependencies or compliance boundaries changed.
> 
> ## Release identity
> 
> - Tag: `v0.3.1`
> - Commit: `32fd0b57e02c3ea1e016cca0d64e59052e93a9b9`
> 
> Installer script SHA-256 values:
> 
> ```text
> f0251c09a7c3481b15850f77a512bd95850652b1d0991804290d16bc70ecf65d  install.ps1
> cda37c728b8bf8341075d4fb6225f4387f22df1ef880a172f186bbd1aa19481d  install.sh
> ```
> 

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-29 ~ 2026-07-30）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #31 from microsoft/giorgioughini-release-0-3-1

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#35](https://github.com/microsoft/skill-recorder/issues/35) | Bump sharp to 0.35.x to resolve Dependabot alert (requires l `dependencies` `security` | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Skill Recorder
> 
> **Record yourself doing a task once, then turn it into a skill your AI agent can repeat.**
> 
> Skill Recorder captures a real work session on your screen: the clicks, the app and
> window switches, the pages you visit, and (if you want) your spoken narration. It then uses
> the **GitHub Copilot CLI** to reconstruct *what you actually did* as a clear **intent plus
> an ordered list of steps**. From there, one step turns that single run into something an
> agent can reuse:
> 
> - a **Skill**: a `SKILL.md` procedure an agent runs on demand, or
> - an **Automation**: the same procedure on a schedule or trigger.
> 
> Both prefer the agent's **native tools** (like the `gh` CLI or `web_fetch`) over replaying
> UI clicks, and generalize from your one example, so recording yourself submitting *one*
> form can teach the agent to submit *all* of them.
> 
>   
>   &nbsp;&nbsp;
>   
> 
> ## How it works
> 
> 1. 🔴 **Record.** Hit record (or `⌘⇧R` / `Ctrl+Shift+R` from anywhere) and just do your
>    task. Skill Recorder captures your screen and activity locally, in the background.
> 2. 🎛️ **Control.** While recording, a small always-on-top bar shows capture and
>    microphone state. Mute, unmute, or switch mics on the fly, then finish, or discard
>    (with a confirmation) if the take didn't go to plan.
> 3. 🧠 **Analyze.** Click Analyze and GitHub Copilot reconstructs one overall intent and
>    an ordered list of steps. Review and edit until it reads right.
> 4. ✨ **Create.** From an approved analysis, generate a reusable **Skill** and/or a
>    scheduled **Automation**.
> 
> ## Get started
> 
> Skill Recorder is published as a **source release**: one command downloads a pinned Node.js
> runtime, builds the exact release commit on your machine, and adds a **Skill Recorder (Source)**
> app you can relaunch anytime. Nothing is installed globally. You'll need a GitHub account with
> **Copilot access**; the Copilot CLI ships with the app.
> 
> macOS is the primary target. Windows 11 (x64 and ARM64) is supported too (see
> [`WINDOWS-VALIDATION.md`](WINDOWS-VALIDATION.md)).
> 
> ### Install it
> 
> Open the **[latest release](https://github.com/microsoft/skill-recorder/releases/latest)** and
> copy the command for your platform. Each release pins an exact commit, so the real command looks
> like the patterns below with `` filled in.
> 
> **macOS / Ubuntu**
> 
> ```bash
> commit=""; curl -fsSL "https://raw.githubusercontent.com/microsoft/skill-recorder/$commit/install.sh" | SKILL_RECORDER_COMMIT="$commit" bash
> ```
> 
> The commit pins both the downloaded script and the source it builds. To keep the app running
> after the terminal closes, add `SKILL_RECORDER_DETACHED=1` after the pipe:
> 
> ```bash
> commit=""; curl -fsSL "https://raw.githubusercontent.com/microsoft/skill-recorder/$commit/install.sh" | SKILL_RECORDER_COMMIT="$commit" SKILL_RECORDER_DETACHED=1 bash
> ```
> 
> On macOS this adds a **Skill Recorder (Source)** app to `~/Applications` (relaunch from Spotlight,
> Launchpad, or the Dock). On Ubuntu it adds a matching application entry.
> 
> **Windows (PowerShell)**
> 
> ```powershell
> $commit=""; $env:SKILL_RECORDER_COMMIT=$commit; irm "https://raw.githubusercontent.com/microsoft/skill-recorder/$commit/install.ps1" | iex
> ```
> 
> This adds **Skill Recorder (Source)** shortcuts to your desktop and Start Menu.
> 
> ### Then record
> 
> 1. **Grant Screen Recording.** On first launch, macOS asks for Screen Recording permission;
>    grant it and you're ready to record.
> 2. **Record, Analyze, Create.** Do your task, then Analyze. The first time you Analyze,
>    Skill Recorder offers **Sign in to Copilot** if you aren't signed in yet.
> 
> To inspect the script before running it, set install options, update, or uninstall, see
> [`INSTALL.md`](INSTALL.md).
> 
> > ⚠️ **Keep secrets out of your recordings.** Don't record, type, paste, or narrate
> > passwords, tokens, API keys, or other confidential info. Choosing *Analyze* sends
> > recording data to GitHub's cloud. Skill Recorder reminds you before every recording.
> > Details in [What gets captured](#what-gets-captured).
> 
> ---
> 
> *Everything below is for people who want the details, or want to hack on the code.*
> 
> ## What gets captured
> 
> Recording, storage, frame extraction, and optional narration transcription all happen
> **on your computer**; nothing leaves while you record. Only when you choose **Analyze**
> does Skill Recorder send the event timeline (window/document titles, URLs, and clipboard
> previews), extracted screen images, and narration text to GitHub's cloud for Copilot to
> process.
> 
> The in-app "Records your screen and activity" panel spells out exactly what's collected:
> 
> - **Window tracking:** active-app / window switches.
> - **Browser URLs:** the page you're on (macOS).
> - **Screen video:** recorded by Chromium; low-rate snapshots are kept only when the
>   screen changes or a heartbeat is due.
> - **Clipboard:** short previews of copied text that tie steps together.
> - **Narration** *(optional)*: spoken commentary, transcribed **on-device** in any of
>   Whisper's 99 supported languages (a one-time ~252 MB model download on first use).
> 
> > ⚠️ **Please don't capture secrets.** Passwords, access tokens, API keys, credentials, and
> > other confidential information should never be recorded, typed, pasted, shown, copied,
> > or narrated during a session.
> 
> ## Develop from source
> 
> Requires **Node.js 24**. After checking out a release revision:
> 
> ```bash
> npm ci
> npm run compliance:licenses
> npm run dev
> ```
> 
> `npm run dev` starts Vite and launches the Electron app with hot-reload; `⌘⇧R` (macOS) /
> `Ctrl+Shift+R` (Windows) toggles recording from anywhere. Full manual setup, the build and
> `dist` scripts, and the licensing boundary between local source builds and redistributable
> packages are in [`INSTALL.md`](INSTALL.md). Maintainers changing versions, dependencies,
> assets, or releases must follow [`RELEASING.md`](RELEASING.md).
> 
> ## Evals
> 
> The Copilot **describer** and **builders** have a fixture-based eval suite; see
> [`evals/README.md`](evals/README.md).
> 
> ```bash
> npm run eval            # score the describer against synthetic recordings
> npm run eval:builder    # score the skill/automation generalization
> ```
> 
> ## Documentation
> 
> - **[INSTALL.md](INSTALL.md):** install options, inspect-first install, updating,
>   uninstalling, and manual developer setup.
> - **[RELEASING.md](RELEASING.md):** maintainer release runbook.
> - **[evals/README.md](evals/README.md):** the describer / builder eval harness.
> - **[THIRD-PARTY-NOTICES.md](THIRD-PARTY-NOTICES.md):** licenses for bundled dependencies.
> 
> ## Security
> 
> Please don't report security vulnerabilities through public GitHub issues. See
> [`SECURITY.md`](SECURITY.md) for Microsoft's coordinated-disclosure process and reporting
> channels.
> 
> ## Support
> 
> File bugs and feature requests through
> **[GitHub Issues](https://github.com/microsoft/skill-recorder/issues)** (search existing issues
> first to avoid duplicates). Support is limited to the resources described in
> [`SUPPORT.md`](SUPPORT.md).
> 
> ## License
> 
> [MIT](LICENSE)
> 
> ## Contributing
> 
> This project welcomes contributions and suggestions.  Most contributions require you to agree to a
> Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
> the rights to use your contribution. For details, visit [Contributor License Agreements](https://cla.opensource.microsoft.com).
> 
> When you submit a pull request, a CLA bot will automatically determine whether you need to provide
> a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
> provided by the bot. You will only need to do this once across all repos using our CLA.
> 
> This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
> For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
> contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
> 
> ## Trademarks
> 
> This project may contain trademarks or logos for projects, pro

## 延伸閱讀

相關專案：[[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]]

[GitHub](https://github.com/microsoft/skill-recorder)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "microsoft--skill-recorder"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "microsoft--skill-recorder" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W32" AND file.name != "microsoft--skill-recorder"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/microsoft--skill-recorder");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "microsoft--skill-recorder" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "microsoft" AND file.name != "microsoft--skill-recorder"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/microsoft--skill-recorder");
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
> const me = dv.page("Repos/microsoft--skill-recorder");
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
> const me = dv.page("Repos/microsoft--skill-recorder");
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
> const me = dv.page("Repos/microsoft--skill-recorder");
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
> const me = dv.page("Repos/microsoft--skill-recorder");
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

> **2026-08-03** — 首次收錄
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

- [[2026-08-03|2026-08-03]] — 首次收錄，907 stars
