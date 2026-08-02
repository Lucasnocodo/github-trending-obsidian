---
repo: yc-software/qm
url: https://github.com/yc-software/qm
owner: yc-software
owner_type: Organization
language: TypeScript
license: MIT
description: "Multiplayer agent harness for work"
homepage: "https://qm.ycombinator.com"
stars: 5215
stars_per_day: 1738
forks: 535
open_issues: 66
created: 2026-07-29
pushed_at: 2026-08-01
first_seen: 2026-08-01
week: "2026-W31"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: "v0.1.4"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-01
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-08-05"
contributor_count: 3
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 5605
readme_length: 8263
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-08-01"
star_history: "2026-08-01:2422,2026-08-02:5215"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - org
aliases:
  - "qm"
  - "yc-software/qm"
---

# qm

**2.4k** stars · **1.2k** stars/天 · 建立 2 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/yc-software--qm");
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

`ORG` `v0.1.4`

> [!summary] 一句話摘要
> Multiplayer agent harness for work

## 專案簡介

Multiplayer agent harness for work

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/yc-software--qm");
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
> const me = dv.page("Repos/yc-software--qm");
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
| Forks | 218 |
| Open Issues | 30 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-08-01 |
| 建立日期 | 2026-07-29 |
| 官方網站 | [Link](https://qm.ycombinator.com) |
| Repo 大小 | 5.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/yc-software/qm) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 92
>     "HTML" : 5
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ReganBell](https://github.com/ReganBell) | 20 |
> | [@16francej](https://github.com/16francej) | 19 |
> | [@BinSquare](https://github.com/BinSquare) | 1 |

**最新版本**：v0.1.4 (2026-07-31)

> [!info]- Release Notes
> ## What's Changed
> * Restrict the web-ui model picker to the org allowed-models list by @16francej in https://github.com/yc-software/qm/pull/40
> * Use @latest in the qm init bootstrap instead of a version placeholder by @16francej in https://github.com/yc-software/qm/pull/41
> 
> 
> **Full Changelog**: https://github.com/yc-software/qm/compare/v0.1.3...v0.1.4

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-30 ~ 2026-07-31）
> **活躍天數** 2 天 · **最新 commit** Use @latest in the qm init bootstrap instead of a version placeholder (#41)

## README 摘錄

> [!info]- 展開查看原文 README
> # qm
> 
> A multiplayer agent harness for work. In Slack and on the web.
> 
> ## What is QM?
> 
> Most agents are designed like personal assistants. You can make one work for a whole
> company, but it quickly gets complex. QM is designed for startups. Employees each get
> their own isolated workspace and work independently without affecting each other, and
> they can also collaborate with the agent in channels, group messages, and projects.
> 
> Each person and each room has its own scoped memory, files, keychain view, permissions,
> crons, web apps, and durable sandbox.
> 
> It's built with open source in mind. Pick your own harness and model and switch between
> them — Pi, OpenCode, Codex, and Claude Code all drive the same core, so a deployment
> isn't tied to any single vendor.
> 
> ## Features
> 
> - **Personal and shared scopes.** People customize the agent to be _theirs_, and still
>   work with it collaboratively in Slack channels and projects.
> - **Slack and web.** The same identity and configuration carries between Slack and the
>   web app.
> - **Admin control.** Set org-level configuration, a security posture, and which
>   harnesses and models are available.
> - **Web apps.** Spin up custom internal apps and publish them to the right people.
> - **Shared skills.** Skills are scope-owned and shareable by grant, with admin-gated
>   promotion to the whole org and skill packs imported from git repositories.
> - **Background work.** Crons and watches run work while nobody's watching.
> 
> ## What you can do with it
> 
> - Search internal notes, email, documents, databases, and the web together
> - Retrieve information from your company brain
> - Build internal apps, publish them to the right people, and keep their data current
> - Learn your writing voice from past sends, then triage your inbox on a schedule —
>   labels and reply drafts included
> - Work in an existing repository: run tests, open PRs, monitor CI, check system logs
> - Track a project in a shared channel and post updates and follow-ups
> 
> ## Architecture
> 
> ```mermaid
> flowchart LR
>   DB[("Postgressessions · memory · queue")]
> 
>   subgraph CORE["Headless core"]
>     API["API · identity · policy · scheduler"]
>     LOOP["Agent loop(Pi, OpenCode, Claude Code)"]
>     API  LOOP
>   end
> 
>   SBX["Per-scope sandboxfiles · tools · logged-in services"]
> 
>   DB  API
>   LOOP  SBX
> ```
> 
> Every turn runs through a central core, which can use a variety of models and harnesses
> to generate the response. A Postgres persistence layer holds user data, session history,
> and other durable state. The agent has a small, fixed tool surface; one of those tools is
> `execute`, which runs commands in the scope's own isolated sandbox — its durable computer,
> where installed tools stay installed. The web UI, the admin panel, and the public portal
> are optional plugins over the core's HTTP API;
> Slack is an optional in-process plugin that core starts
> and supervises through a direct service client.
> 
> The core runs TypeScript directly on Node and uses Fastify for HTTP. The Slack plugin
> uses Bolt; the web UI builds with Vite and renders with Lit.
> 
> The core itself is generic. Everything specific to one company — org config, custom tools
> and skills, sandbox image, infrastructure — lives in a **deployment directory** that the
> [`qm` CLI](./cli/README.md) validates and deploys. Every substrate (harness, session
> store, sandbox, memory) sits behind an interface, so production implementations swap in
> via one wiring file.
> 
> ## Security and secrets
> 
> QM's approach follows local coding agents like OpenCode, Codex, and Claude Code: the
> agent acts as the person it's working for, with their credentials and permissions, and
> everything it does is audited. An org picks one security posture, which narrower scopes
> can only tighten:
> 
> - **Strict** — every harness tool call pauses for human approval, except the two
>   no-effect turn enders.
> - **Auto** (default) — a classifier screens provenance-labelled external data and tool
>   results before they reach the model; a deployment can point that at its own screening
>   proxy.
> - **Dangerous** — no content screening, no pauses between tool calls.
> 
> The predeclared command policy — approval rules and hard denials for things like
> recursive deletes or destructive SQL — applies in every posture, Dangerous included.
> 
> [`SECURITY.md`](./SECURITY.md) has the threat model, the operator assumptions, and the
> known limitations.
> 
> ## Deploy it for your org
> 
> Create an organization-owned deployment repository that depends on `@yc-software/qm`:
> 
> ```bash
> npm exec --yes --package=@yc-software/qm@latest -- \
>   qm init . --org  --target 
> npm install
> ```
> 
> Initialization materializes a deployment skill for an agent and walks through
> infrastructure, web sign-in, connector credentials, optional Slack access, deployment,
> and live verification — no source checkout required. Each deployment runs in the
> operator's own cloud account; initialization does not generate or enable deployment CI,
> and this repository has no production deployment workflow. See
> [`deployment.md`](./deployment.md) for the details.
> 
> ## Contributing
> 
> We take contributions as _human-written_ text, not code — see
> [`CONTRIBUTING.md`](./CONTRIBUTING.md). Describe the change you'd like informally in a
> `.txt` or `.md` file in [`adrs/`](./adrs/), and if we're aligned we'll handle the
> implementation. Report vulnerabilities privately — see [`SECURITY.md`](./SECURITY.md),
> not a public issue.
> 
> ## Customize your instance
> 
> The deployment repository above carries config and a sandbox layer, and never needs a
> source checkout. Some organizations want the opposite trade: the whole codebase in one
> place, so engineers and coding agents read core and customizations together, while the
> customizations themselves stay private. For that, keep a **private fork**: a standalone
> private repository whose history begins as a clone of qm and whose core stays identical
> to upstream.
> 
> Populate it once, then clone it to work in:
> 
> ```bash
> gh repo create /qm-private --private
> 
> git clone --bare git@github.com:yc-software/qm qm-seed.git
> git -C qm-seed.git push --mirror git@github.com:/qm-private
> rm -rf qm-seed.git
> 
> git clone git@github.com:/qm-private
> git -C qm-private remote add upstream git@github.com:yc-software/qm
> ```
> 
> Create the private fork with a plain clone, as shown above, and never with GitHub's fork
> feature. The word "fork" here names the concept — a downstream copy that diverges
> deliberately and merges from upstream — not GitHub's Fork button. A GitHub fork inherits
> the visibility of the repository it came from, so a fork of a public repository cannot be
> made private. A GitHub fork also shares one object network with the repository it came
> from, so commits pushed to the fork stay fetchable by SHA from the public side. Many
> organizations disallow forking private repositories as well. A plain clone has none of
> these problems, and it costs one thing: the clone is an ordinary repository, so upstream's
> CI workflows run live in your own account. Expect to supply the secrets those workflows
> need, or disable the ones you do not want running.
> 
> Everything specific to your organization goes in `deploy/layers//` — config, sandbox
> tools and skills, plugin images, infrastructure — in the same shape `qm init` produces. See
> [`deploy/layers/README.md`](./deploy/layers/README.md). Core stays byte-identical to
> upstream, which is what keeps merges small.
> 
> Two skills maintain the boundary in both directions. `update-qm` merges upstream qm into
> the private fork and opens the sync PR; `upstream-pr` sends an organization-agnostic fix back to
> qm, cutting the branch from `upstream/main` and checking the outgoing diff, commit
> messages, and screenshots for organization identifiers before it pushes. Nothing under
> `deploy/layers/` ever travels upstream.
> 
> ## Going deeper
> 
> - [`docs/getting-started.md`](./docs/getting-started.md) — first run, end to end
> - [`cli/README.md`](./cli/README.md) — the `qm` CLI and the deployment directory contract
> - [`docs/deploy-directory.md`](./docs/deploy-directory.md) — the d

## 延伸閱讀

相關專案：[[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[QwenAudio--qwen-audio-agent|QwenAudio/qwen-audio-agent]] · [[WilonityXYZ--Wilonity|WilonityXYZ/Wilonity]] · [[bashalarmistalt--decimen-optical-transfer|bashalarmistalt/decimen-optical-transfer]] · [[gavamedia--deltafin|gavamedia/deltafin]] · [[xdash--FDE-the-Guidance-Book-of-Forward-Deployed-Engineer|xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer]] · [[xikhar--persona|xikhar/persona]]

[GitHub](https://github.com/yc-software/qm) · [官方網站](https://qm.ycombinator.com)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "yc-software--qm"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "yc-software--qm" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W31" AND file.name != "yc-software--qm"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/yc-software--qm");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "yc-software--qm" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "yc-software" AND file.name != "yc-software--qm"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/yc-software--qm");
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
> const me = dv.page("Repos/yc-software--qm");
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
> const me = dv.page("Repos/yc-software--qm");
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
> const me = dv.page("Repos/yc-software--qm");
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
> const me = dv.page("Repos/yc-software--qm");
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

> **2026-08-01** — 首次收錄
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

- [[2026-08-02|2026-08-02]] — 再次上榜，5.2k stars
- [[2026-08-01|2026-08-01]] — 首次收錄，2.4k stars
