---
repo: trycompai/crm
url: https://github.com/trycompai/crm
owner: trycompai
owner_type: Organization
language: TypeScript
license: MIT
description: ""
homepage: ""
stars: 832
stars_per_day: 832
forks: 109
open_issues: 2
created: 2026-07-31
pushed_at: 2026-08-01
first_seen: 2026-08-02
week: "2026-W32"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-02
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-08-05"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 4460
readme_length: 9506
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-08-02"
star_history: "2026-08-02:832"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - org
aliases:
  - "crm"
  - "trycompai/crm"
---

# crm

**832** stars · **832** stars/天 · 建立 1 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/trycompai--crm");
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

`ORG`

> [!summary] 一句話摘要
> No description

## 專案簡介

No description available.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/trycompai--crm");
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
> const me = dv.page("Repos/trycompai--crm");
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
| Forks | 109 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-08-01 |
| 建立日期 | 2026-07-31 |
| Repo 大小 | 4.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/trycompai/crm) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@biomejs/biome` `turbo` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 91
>     "Python" : 5
>     "HTML" : 3
>     "CSS" : 1
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@carhartlewis](https://github.com/carhartlewis) | 28 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-01 ~ 2026-08-01）
> **活躍天數** 1 天 · **最新 commit** Refactor task handling and enhance error management in agent scheduling

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/trycompai/crm/issues/1) | Feature Request: Native Clay & Claap Integrations | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> CRM
> 
>   An open-source, agentic-first CRM.
>   A durable research agent is the product. The database is just where it writes things down.
> 
>   The agent ·
>   Stack ·
>   Quick start ·
>   Configuration ·
>   Deploying ·
>   Contributing
> 
>   
>   
>   
>   
> 
>   
>     
>     
>   
> 
> ---
> 
> 
> ## Quick start
> 
> You need [Bun](https://bun.com) and Docker.
> 
> ```sh
> git clone https://github.com/trycompai/crm.git && cd crm
> bun install
> 
> docker compose up -d          # Postgres on :5432
> cp .env.example .env          # then fill in the four values below
> 
> bun run db:deploy             # apply migrations
> bun run db:seed               # optional: a believable pipeline to look at
> bun run dev
> ```
> 
> The app is on [localhost:3000](http://localhost:3000), the API on
> [localhost:3001](http://localhost:3001).
> 
> 
> ## Configuration
> 
> **There is one `.env`, at the root of the repo**, read by all three processes. Real
> environment variables always win, so on a hosting platform you configure it there and
> the file is purely a local convenience.
> 
> Beyond the four required values, everything is optional and the app runs without any
> of it. [`.env.example`](./.env.example) is the full list with a note on each; the
> short version:
> 
> | | |
> | --- | --- |
> | `API_URL` / `APP_URL` | Where the two halves are served. Only needed off localhost. |
> | `PERPLEXITY_API_KEY` | Lets the agent search the open web, with citations. |
> | `RAPIDAPI_KEY` | Lets the agent read LinkedIn profiles for identity. |
> | `CONTEXT_DEV_API_KEY` | Company logo, industry and socials from a domain. |
> | `AGENT_BRIDGE_SECRET` | Lets a rep talk to the agent from a contact's **Agent** tab. |
> | `REDIS_URL` | A shared cache. Without it, per-instance and in-memory. |
> | `CRON_SECRET` | Guards the Gmail/Calendar sync route. Required to use it. |
> 
> 
> ## What this is
> 
> Most CRMs are a database with a form in front of it. The AI ones bolt a chat box onto
> the side of that form. Both leave the actual work — finding out what is true, and
> writing it down — to a human who has better things to do.
> 
> This is built the other way round. **The agent is not a feature of the CRM; the CRM is
> where the agent keeps its notes.** It runs on its own deployment, on its own schedule,
> against its own work queue. It decides what to look at next, books its own follow-ups,
> spends a research budget, and stops when the budget runs out. Nothing about it is
> request-response: close the browser and it keeps going.
> 
> The API deliberately has no intelligence in it at all. NestJS reports that *something
> happened* — a thread was ingested, a company was created, an attendee is unknown — by
> writing a row to a queue. The agent leases that row and decides what it means. A Nest
> service that calls an enrichment API is treated as a bug, and
> [`docs/api.md`](./docs/api.md) explains the outage that made that a rule.
> 
> The rule the agent itself never breaks: **nothing about a person is guessed.** No tool
> accepts a confidence score, because a model asked to grade its own certainty will, and
> it will be wrong in the direction that makes it look useful. Tools report what they
> *observed* — `crm.signature-block`, `github.account-identity` — and a ledger prices the
> evidence. Strong evidence writes to the record. Weak evidence becomes a suggestion a
> human settles. A confidently wrong fact about a customer is worse than a blank field,
> because nobody can tell it is wrong.
> 
> It is single-tenant and internal by design. Sign-in is Google, the allow-list is one
> environment variable, and everyone who gets in can see everything. That is the whole
> authorisation model — see [SECURITY.md](./SECURITY.md) before you point it at real
> customer data.
> 
> 
> ## Screenshots
> 
>   
>     
>       
>         
>         
>       
>       Deals — filters, sort and page live in the URL, so a view is a link.
>     
>     
>       
>         
>         
>       
>       Contacts — most of these were created by the mailbox sync, not typed.
>     
>   
>   
>     
>       
>         
>         
>       
>       Companies — logo, industry and location arrive on their own.
>     
>     
>       
>         
>         
>       
>       Overview — yours or the whole team's, toggled in the URL.
>     
>   
> 
> 
> ## The agent
> 
> [`apps/agent`](./apps/agent) is its own deployment, built on
> [**eve**](https://eve.dev) — Vercel's filesystem-first framework for durable agents.
> A tool is a file, a skill is a markdown file, a schedule is a file, and the runtime
> handles the durable part: sessions that survive a redeploy, work that resumes where it
> stopped.
> 
> | | |
> | --- | --- |
> | **18 authored tools** | `read_crm_history`, `search_crm`, `identify_contact`, `research_person`, `enrich_company`, `record_fact`, `schedule_recheck`… |
> | **4 skills** | `evidence.md`, `identity-matching.md`, `data-boundaries.md`, `writing-a-brief.md` — prose the agent reads, versioned like code |
> | **1 schedule** | `dispatch.ts`, which decides nothing. It leases what is due and starts a session per row. |
> | **A sandbox** | `bash`, `grep`, `glob` and a `/workspace`, with **`deny-all` egress** |
> 
> **It runs itself.** `lib/tasks.ts` is the work queue: `claimDue` leases rows with
> `FOR UPDATE SKIP LOCKED`, so two dispatchers take disjoint work and a run that dies
> frees its row when the lease expires. Anything that looks like "every N minutes, the
> oldest ten contacts" belongs in a task's `dueAt`, not in a cron expression. When the
> agent wants another look at somebody it calls `schedule_recheck` and says why — and
> the reason is shown to the rep, because an agent that cannot say why it will be back
> in fourteen days does not have a reason, it has a default.
> 
> **Every outside source is optional, and it is designed to run with none of them.**
> With no API keys at all it still works: `read_crm_history` reads your own threads,
> meetings and signature blocks, which is free and is the best evidence there is — no
> data vendor can sell you a reply from the person's own address. Each key opens one
> more place to look. It is told at the start of every session which ones this install
> has, so it plans around what it actually has rather than discovering the gaps one
> failed call at a time, and it prints the list at startup:
> 
> ```
> [agent] on   LinkedIn (RAPIDAPI_KEY)
> [agent] off  Web research (PERPLEXITY_API_KEY)
> [agent] off  Company brand data (CONTEXT_DEV_API_KEY)
> ```
> 
> **The sandbox has no network and no database.** Turning it on is what gives the model
> a shell — the difference between a tool-caller and something that can keep a dossier,
> diff this month's profile against last month's, and grep a thread for a signature
> block. `deny-all` egress costs nothing, because `web_fetch` runs in the app runtime
> and `web_search` at the model provider. What it removes is the only path by which a
> customer's email body could leave through a shell command. The other half of that rule
> is an absence: **the sandbox is never given `DATABASE_URL`.** A shell with credentials
> and egress is exfiltration-shaped even in an internal tool; a shell with neither is a
> text processor.
> 
> **You can talk to it, and watch it work.** Every contact, company and deal has an
> **Agent** tab — the steps as it takes them, the leads it throws away and why, and its
> questions answered in place when it cannot decide between two people. Conversations
> are durable and survive a reload; the record travels in a signed token rather than
> being bolted onto the front of your message. Set `AGENT_BRIDGE_SECRET` to the same
> value in both processes to turn it on. Without it the tab reports that it is not
> configured, and the agent carries on running its own schedule.
> 
> [`docs/agent.md`](./docs/agent.md) is the full write-up.
> 
> 
> ## The stack
> 
> A [Turborepo](https://turborepo.dev) monorepo on [Bun](https://bun.com), deployed on
> [Vercel](https://vercel.com).
> 
> | | |
> | --- | --- |
> | **Agent** | [eve](https://eve.dev) — durable sessions, tools, skills, schedules, sandboxes |
> | **Model** | [Vercel AI Gateway](https://vercel.com/docs/ai-gateway) — no provider SDK, and OIDC on Vercel means no key to manage |
> | **Sandbox** | [Vercel Sandbox](https://vercel.com/docs/vercel-s

## 延伸閱讀

相關專案：[[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]] · [[QwenAudio--qwen-audio-agent|QwenAudio/qwen-audio-agent]] · [[WilonityXYZ--Wilonity|WilonityXYZ/Wilonity]] · [[bashalarmistalt--decimen-optical-transfer|bashalarmistalt/decimen-optical-transfer]] · [[gavamedia--deltafin|gavamedia/deltafin]] · [[sqliteai--waste|sqliteai/waste]]

[GitHub](https://github.com/trycompai/crm)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "trycompai--crm"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "trycompai--crm" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W32" AND file.name != "trycompai--crm"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/trycompai--crm");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "trycompai--crm" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "trycompai" AND file.name != "trycompai--crm"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/trycompai--crm");
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
> const me = dv.page("Repos/trycompai--crm");
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
> const me = dv.page("Repos/trycompai--crm");
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
> const me = dv.page("Repos/trycompai--crm");
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
> const me = dv.page("Repos/trycompai--crm");
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

> **2026-08-02** — 首次收錄
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

- [[2026-08-02|2026-08-02]] — 首次收錄，832 stars
