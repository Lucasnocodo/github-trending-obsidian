---
repo: JoasASantos/REA-Prompts
url: https://github.com/JoasASantos/REA-Prompts
owner: JoasASantos
owner_type: User
language: N/A
license: N/A
description: "REAP - Prompts for you to use REA (Reverse Engineer Anything), get the most out of it, and clone or break down any program"
homepage: ""
stars: 1504
stars_per_day: 501
forks: 226
open_issues: 0
created: 2026-10-19
pushed_at: 2026-10-21
first_seen: 2026-10-22
week: "2026-W43"
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
last_reviewed: 2026-10-22
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-10-26"
contributor_count: 2
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 39
readme_length: 10000
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-10-22"
star_history: "2026-10-22:1374,2026-10-23:1504"
tags:
  - github
  - "category/other"
  - "lang/other"
  - "topic/prompt_engineering"
  - "topic/rea"
  - "topic/reverse_enginnering"
aliases:
  - "REA-Prompts"
  - "JoasASantos/REA-Prompts"
---

# REA-Prompts

**1.4k** stars · **687** stars/天 · 建立 2 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/JoasASantos--REA-Prompts");
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

`prompt-engineering` `rea` `reverse-enginnering`

> [!summary] 一句話摘要
> REAP - Prompts for you to use REA (Reverse Engineer Anything), get the most out of it, and clone or break down any program

## 專案簡介

REAP - Prompts for you to use REA (Reverse Engineer Anything), get the most out of it, and clone or break down any program

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/JoasASantos--REA-Prompts");
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
> const me = dv.page("Repos/JoasASantos--REA-Prompts");
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
| Forks | 205 |
| Open Issues | 0 |
| 最後推送 | 2026-10-21 |
| 建立日期 | 2026-10-19 |
| Repo 大小 | 39 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/JoasASantos/REA-Prompts) |
| Topics | `prompt-engineering` `rea` `reverse-enginnering` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@JoasASantos](https://github.com/JoasASantos) | 4 |
> | [@hirusheth](https://github.com/hirusheth) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-19 ~ 2026-10-21）
> **活躍天數** 3 天 · **最新 commit** Atualizar o README.md

## README 摘錄

> [!info]- 展開查看原文 README
> # REA Investigation Prompts (REAP) — Reverse Engineering with your Coding Agent
> 
> A curated collection of prompts for [REA (Reverse Engineer Anything)](https://rea.tools/) — the toolset that lets your AI coding agent inspect how software works, from native binaries, firmware and kernels to games, Electron apps, APKs and websites.
> 
> Prompts are ready to paste into your agent. Replace everything in `` and keep each request focused on **one feature** — narrow questions get evidence-backed answers.
> 
> 
> ## 0. Install & verify
> 
> ```text
> Install REA and connect it to this agent using: npx rea-agents@latest setup
> 
> First, show me the installation plan and the configuration changes for my
> approval. After the install, verify the connection and list the available
> tools and workflows.
> ```
> 
> ---
> 
> 
> ## 1. Getting started
> 
> 
> ## 2. Feature tracing (any program)
> 
> 
> ### Explain one feature
> 
> ```text
> Use REA to investigate how  works in .
> 
> Identify the entry point, the functions involved, the data flow, the
> dependencies and the observable effects.
> 
> For every conclusion, present evidence: file, function, address or relevant
> snippet. Separate confirmed facts, inferences and points that remain unknown.
> 
> Do not execute the application in this step.
> ```
> 
> 
> ## 4. Software & feature cloning
> 
> > Clean-room methodology: extract *behavior*, not code. Never copy
> > proprietary source, assets, branding or licensing mechanisms.
> 
> 
> ### Clone one feature into my own app
> 
> ```text
> Use REA to recover the exact behavior of  in : trigger,
> inputs, processing steps, outputs, side effects and failure modes.
> 
> Then implement  from scratch in  matching that
> behavior, with tests derived from the recovered rules. List every observable
> difference that remains between my version and the original.
> ```
> 
> 
> ### Trace a feature through Java/Kotlin and native code
> 
> ```text
> Use REA on  to trace  end to end: UI entry point (Activity/
> Fragment/Composable), the Java/Kotlin call chain, any JNI boundaries
> (RegisterNatives / native library loads), the .so functions involved, and the
> final effect (network call, file write, database row). Show class, method and
> offset evidence at every hop.
> ```
> 
> 
> ### Minified / bundled JS feature tracing
> 
> ```text
> Use REA on  to trace  through minified code.
> Identify the module boundaries, recover the relevant functions with readable
> names, follow the data flow from the UI event to the network/filesystem
> effect, and produce a call graph. Cite offsets in the bundle for each hop.
> ```
> 
> 
> ### Web feature mapping
> 
> ```text
> Use REA to observe  while I use . List the requests, scripts
> and state changes involved, then summarise how the feature works and which
> parts run on the client versus the server.
> ```
> 
> 
> ## 15. Version comparison & crash work
> 
> 
> ## Prompt-writing tips (why these work)
> 
> 1. **One feature per prompt.** Broad "explain the whole app" questions return shallow maps; narrow ones return call chains and addresses.
> 2. **Demand evidence.** Every prompt here requires file/function/address citations — it stops the agent from confabulating.
> 3. **Separate fact / inference / unknown.** The three-bucket format keeps hypotheses honest.
> 4. **Static first.** Say "do not execute the application" until you actually need runtime observation.
> 5. **End with a deliverable.** SPEC.md, a reader script, a port plan, a minimal rebuild — a concrete artifact forces the agent to verify its own claims.
> 6. **State the scope out loud.** "Lab machine I own", "offline single-player", "document, don't bypass" — the framing keeps results usable for research and reporting.
> 
> 
> ## Sources & credits
> 
> - **REA tools & guides:** https://rea.tools/
> - **Official prompt gallery:** https://madewithrea.com/prompts
> - **Intro thread ("REA is the most dangerous thing on the internet right now")** by codila — https://x.com/0xCodila/status/2109623431763292649
>   (quoting Matthew Berman — https://x.com/MatthewBerman/status/2108245653843509415)
> - **REAP Name** by https://x.com/zazencodes?s=11
> 
> ## Table of contents
> 
> | # | Section |
> |---|---------|
> | 0 | [Install & verify](#0-install--verify) |
> | 1 | [Getting started](#1-getting-started) |
> | 2 | [Feature tracing (any program)](#2-feature-tracing-any-program) |
> | 3 | [Native binary exploration](#3-native-binary-exploration) |
> | 4 | [Software & feature cloning](#4-software--feature-cloning) |
> | 5 | [Games](#5-games) |
> | 6 | [Game portability to WASM](#6-game-portability-to-wasm) |
> | 7 | [Firmware & embedded](#7-firmware--embedded) |
> | 8 | [Android](#8-android) |
> | 9 | [Kernel analysis](#9-kernel-analysis) |
> | 10 | [Vulnerability research](#10-vulnerability-research) |
> | 11 | [Electron & JavaScript](#11-electron--javascript) |
> | 12 | [Anti-cheat & protection research](#12-anti-cheat--protection-research) |
> | 13 | [DMA & hardware-assisted cheat research (defensive)](#13-dma--hardware-assisted-cheat-research-defensive) |
> | 14 | [Software cracking research](#14-software-cracking-research) |
> | 15 | [Version comparison & crash work](#15-version-comparison--crash-work) |
> | 16 | [Long-running investigations](#16-long-running-investigations) |
> | — | [Wildcard prompt](#wildcard-prompt-start-here) · [Prompt-writing tips](#prompt-writing-tips-why-these-work) · [Next steps](#next-steps-see-what-people-built-with-rea) |
> 
> > ⚠️ **Use responsibly.** Only analyze software you own or are explicitly authorized to test. Anti-cheat, DMA, DRM, kernel and vulnerability prompts below are for **security research, interoperability, CTFs, bug bounties and testing the protection of your own software**. Bypassing protection of software you don't own, cheating in online games, or weaponizing a found vulnerability may violate law and terms of service. Every prompt asks the agent to separate *confirmed facts* from *hypotheses* and to cite evidence — treat that as non-negotiable.
> 
> ---
> 
> 
> ### First exercise — trace a CSV export
> 
> ```text
> Download https://rea.tools/examples/notes-example.zip into a new folder and
> extract the contents.
> 
> Use REA to investigate what happens when I click "Export notes". Trace the
> flow from the button to the file write.
> 
> Show where notes.csv is created, which fields it contains, and the files and
> functions that prove each step.
> ```
> 
> 
> ### First look at an unfamiliar app
> 
> ```text
> Use REA to give me a map of : its main parts, entry points and the
> three features worth investigating first. Keep it short and point to evidence
> for each claim.
> ```
> 
> ---
> 
> 
> ### Trace a button to its effect
> 
> ```text
> Use REA on . Start at the  button and trace what happens
> until the result is written, sent or shown. Name every module or function on
> the path and what each one does.
> ```
> 
> 
> ### Recover a rule and rebuild it
> 
> ```text
> Use REA to find the rule that controls  in . Write the
> rule in plain words, then build a minimal standalone version I can run, and
> give me one input that proves it matches the original.
> ```
> 
> ---
> 
> 
> ## 3. Native binary exploration
> 
> 
> ### Understand an executable
> 
> ```text
> Analyze  with REA.
> 
> Identify format, architecture, runtime, libraries, relevant strings and
> possible entry points.
> 
> Map the main components and explain their responsibilities with evidence.
> State which analysis engine is available and its limitations.
> 
> Start with static analysis.
> ```
> 
> 
> ### Function deep-dive
> 
> ```text
> Use REA on . Pick the function that handles  and produce:
> decompiled pseudocode, its callers and callees, the data structures it reads
> or writes, and every string/global it touches. Annotate each finding with the
> address range that proves it.
> ```
> 
> 
> ### Imports, strings and triage map
> 
> ```text
> Use REA on . Produce a triage map: file format and architecture,
> section layout, linked libraries and imports grouped by capability (network,
> filesystem, crypto, process/thread, registry/IPC), interesting strings with
> their addresses, and the top candidate entry points for . Flag any
> signs of packing, obfuscation or control-flow flattening.
> ```
> 
> 
> ### File-format reverse engineering
> 
> ```text
> Use REA on  to work out how it reads and writes .
> Describe 

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/JoasASantos/REA-Prompts)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "JoasASantos--REA-Prompts"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "JoasASantos--REA-Prompts" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W43" AND file.name != "JoasASantos--REA-Prompts"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/JoasASantos--REA-Prompts");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "JoasASantos--REA-Prompts" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "JoasASantos" AND file.name != "JoasASantos--REA-Prompts"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/JoasASantos--REA-Prompts");
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
> const me = dv.page("Repos/JoasASantos--REA-Prompts");
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
> const me = dv.page("Repos/JoasASantos--REA-Prompts");
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
> const me = dv.page("Repos/JoasASantos--REA-Prompts");
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
> const me = dv.page("Repos/JoasASantos--REA-Prompts");
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

> **2026-10-22** — 首次收錄
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

- [[2026-10-23|2026-10-23]] — 再次上榜，1.5k stars
- [[2026-10-22|2026-10-22]] — 首次收錄，1.4k stars
