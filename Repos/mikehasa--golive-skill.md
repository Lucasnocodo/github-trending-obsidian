---
repo: mikehasa/golive-skill
url: https://github.com/mikehasa/golive-skill
owner: mikehasa
owner_type: User
language: TypeScript
license: MIT
description: "Take your agent-built product live: hosting, database, domain, email, payments — on your own accounts. Open-source Agent Skill + zero-dependency Node CLI: detect → plan → approve → apply → verify. No GoLive account, backend or telemetry."
homepage: "https://trytofu.ai"
stars: 1120
stars_per_day: 187
forks: 83
open_issues: 1
created: 2026-09-23
pushed_at: 2026-09-29
first_seen: 2026-09-27
week: "2026-W40"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: "v0.1.0-alpha.5"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-27
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-10-07"
contributor_count: 1
engagement: "low"
issue_close_rate: 91
repo_size_kb: 2055
readme_length: 9791
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-09-27"
star_history: "2026-09-27:985,2026-09-28:1019,2026-09-29:1055,2026-09-30:1120"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - "topic/agent_skill"
  - "topic/agent_skills"
  - "topic/ai_agents"
  - "topic/claude_code"
  - "topic/cloudflare"
aliases:
  - "golive-skill"
  - "mikehasa/golive-skill"
---

# golive-skill

**985** stars · **328** stars/天 · 建立 3 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/mikehasa--golive-skill");
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

`個人專案` `v0.1.0-alpha.5`

`agent-skill` `agent-skills` `ai-agents` `claude-code` `cloudflare` `codex` `database` `deployment` `developer-tools` `devops` `dns` `godaddy` `hosting` `infrastructure` `neon` `netlify` `porkbun` `skills` `supabase` `vercel`

> [!summary] 一句話摘要
> Take your agent-built product live: hosting, database, domain, email, payments — on your own accounts. Open-source Agent Skill + zero-dependency Node CLI: detect → plan → approve → apply → verify. No GoLive account, backend or telemetry.

## 專案簡介

Take your agent-built product live: hosting, database, domain, email, payments — on your own accounts. Open-source Agent Skill + zero-dependency Node CLI: detect → plan → approve → apply → verify. No GoLive account, backend or telemetry.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/mikehasa--golive-skill");
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
> const me = dv.page("Repos/mikehasa--golive-skill");
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
| Forks | 68 |
| Open Issues | 1 |
| Issue 解決率 | 91% (10 closed) |
| 最後推送 | 2026-09-27 |
| 建立日期 | 2026-09-23 |
| 官方網站 | [Link](https://trytofu.ai) |
| Repo 大小 | 2.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/mikehasa/golive-skill) |
| Topics | `agent-skill` `agent-skills` `ai-agents` `claude-code` `cloudflare` `codex` `database` `deployment` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@types/node` `esbuild` `typescript` `vitest` `yaml`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 68
>     "JavaScript" : 32
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@mikehasa](https://github.com/mikehasa) | 63 |

**最新版本**：v0.1.0-alpha.5 (2026-09-27)

> [!info]- Release Notes
> GoLive `0.1.0-alpha.5` — an alpha release of the skill and the bundled zero-dependency runtime.
> 
> ## What changed since 0.1.0-alpha.4
> 
> - **The offline smoke check now denies what it claimed to.** Before switching an updated copy, the installer runs the new bundle's `help` and `menu --json` under a guard that blocks network and subprocess entry points. The guard only replaced module functions, so `new net.Socket().connect()`, `node:dgram`, `node:dns`, `node:http2`, `node:worker_threads` and `node:cluster` were still reachable — reproduced, then closed. A regression matrix covers each path and fails on the old guard. `references/updates.md` now says plainly that the guard is a sanity check for a broken or careless release, **not a sandbox**.
> - **Untrusted content is data, never instructions.** A new hard rule tells the agent that repository files and their comments, dependency and lockfile text, provider API responses, dashboard copy, and golive's own generated report, state and handover files describe the world — and that only the digest-verified bundle is an instruction channel.
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-25 ~ 2026-09-27）
> **活躍天數** 3 天 · **最新 commit** Point the translation markers at the 0.1.0-alpha.5 release commit

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#63](https://github.com/mikehasa/golive-skill/issues/63) | HOL Guard rule for `golive teardown`? | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # GoLive
> 
> [English](README.md) · [简体中文](README.zh-CN.md) · [日本語](README.ja.md) · [한국어](README.ko.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [Deutsch](README.de.md)
> 
> **Take your agent-built product live: hosting, database, auth, domain, email, payments — on your own accounts. Then hand it over, or tear it all down.**
> 
> Your coding agent can build an app in minutes. Getting it to real users still means accounts,
> hosting, databases, domains, secrets and connected services. GoLive is the open-source Agent Skill
> for that work: it **detects what your app needs, plans the exact changes, asks for your approval,
> applies them with your own logins, and verifies what actually works** — then records what it
> created, re-checks it for drift on demand, and can remove it again.
> 
> Automate the parts providers expose. Guide you through the parts that need a human. Verify what
> can be observed, and make unfinished work clear. No GoLive account, hosted backend or product telemetry.
> 
> > **Early alpha · 0.1.0-alpha.5**
> > Disposable live tests now cover six journeys: **hosting** (Vercel, Netlify), **database**
> > (Supabase, Neon), **custom-domain DNS** (Porkbun, GoDaddy), **transactional email** (Resend),
> > **test-mode payments** (Stripe) and **Supabase authentication**, plus the `teardown` uninstall
> > path. The ownership document and the on-demand `golive status` drift check are implemented
> > with test coverage (`golive status` also ran read-only in a live validation), while the broader
> > [roadmap](#the-full-go-live-checklist-and-roadmap) is our direction, not a claim that it is all built.
> 
> 
> ## Install
> 
> You need **Node.js 20+**, npm/npx, Git, and a coding agent that can load skills and run commands.
> Installation has been checked for Codex and Claude Code; other clients are unverified.
> 
> **Install once for all your projects.** Run this from any directory:
> 
> ```bash
> npx skills add https://github.com/mikehasa/golive-skill --skill golive --global
> ```
> 
> Select your agent when prompted: use the arrow keys to move, Space to select, and Enter to
> confirm. That screen is waiting for input; installation continues after you confirm.
> 
> To skip the agent picker, use the command for your agent:
> 
> ```bash
> 
> ### Install from npm
> 
> The same skill is published to npm as `golive@0.1.0-alpha.5` (dist-tags `alpha` and `latest`), which
> installs it offline, with no Git or Skills CLI involved:
> 
> ```bash
> 
> ## Before you hand over production access
> 
> Whether to give an agent your provider accounts comes down to four questions. These are this
> project's answers, with the limits stated where they exist.
> 
> - **You still approve every write.** Nothing reaches a real account without a plan you have seen and
>   approved: `apply` refuses without that plan's id and `--yes`, and it re-checks the plan's identity
>   before writing, so a changed release or config invalidates the old approval. DNS writes need
>   `--confirm-dns`, deletions need `--confirm-destroy`, and live-mode steps — live payments, production
>   data, a real account — need `--confirm-live`, which now includes a project's **first production
>   deploy**, because approving a plan alone used to be enough to write production for the first time.
>   Credential values are read only in-process, never printed, and never in arguments, plans, state or
>   reports; the file golive stores them in is plaintext at mode 0600 outside your repo, not a keychain.
>   One limit worth naming: those flags are arguments the agent passes on your behalf, and an agent
>   already logged in to your provider can write there with no golive plan at all.
>   [Trust, access and control](docs/TRUST.md) separates what the code enforces from what is only an
>   instruction the agent is asked to follow.
> - **A run stops rather than pushing on.** `apply` stops at the first failed check, missing
>   confirmation, missing prerequisite or provider that contradicts the plan. Later steps do not run,
>   and the next `apply` resumes at that step. [Recovery](docs/RECOVERY.md#the-run-stopped) covers
>   reading the failure, which steps resume, and the cases that need a reviewed decision first.
> - **Rollback is narrow, opt-in and never automatic.** A failed check never triggers a rollback.
>   `release.rollback: true` plans one step that re-points production at an earlier deployment golive
>   itself recorded; a deployment built by a dashboard, a Git push or a pull request is not a target,
>   and it touches no data, DNS, payment or email resource. Only Netlify supports these re-points
>   today — on Vercel you correct production in the dashboard (Vercel's adapter has no read of what
>   production serves). Promotion and rollback are implemented and mock-covered, **not live-validated**.
> - **Nothing is left behind silently — which is not the same as nothing being left behind.**
>   `golive teardown` removes only resources it can prove it created, re-reads the DNS zone and the
>   host project after deleting, and names every leftover it cannot remove — Supabase and Neon
>   projects, the Resend sending domain, a zone or host project it cannot read — as a handoff saying
>   what remains and how to remove it by hand. A removal also forgets the baseline golive recorded for
>   that resource, so `golive status` does not report golive's own teardown as drift.
> 
> Those answers in full: [trust, access and control](docs/TRUST.md) and
> [recovery](docs/RECOVERY.md). The [architecture](docs/ARCHITECTURE.md) is the product contract,
> [provider scope](docs/PROVIDERS.md) says what each provider can do today, the
> [validation record](docs/VALIDATION.md) separates what has been exercised live from what is only
> mock-covered, and [distribution](docs/DISTRIBUTION.md) covers installation and updates.
> 
> [Install](#install) · [Use GoLive](#use-golive) · [See the workflow](#what-a-run-looks-like) · [Alpha scope](#what-this-alpha-supports) · [Roadmap](#the-full-go-live-checklist-and-roadmap) · [Contribute](CONTRIBUTING.md)
> 
> 
> # Codex
> npx skills add https://github.com/mikehasa/golive-skill --skill golive --global --agent codex --yes
> 
> 
> # Claude Code
> npx skills add https://github.com/mikehasa/golive-skill --skill golive --global --agent claude-code --yes
> ```
> 
> For installation in just one project, run from that project's repository and omit `--global`.
> 
> **Or paste this into your coding agent:**
> 
> ```text
> Install the GoLive skill globally so I can use it across projects:
> npx skills add https://github.com/mikehasa/golive-skill --skill golive --global
> 
> Target the agent I'm using: add --agent codex --yes for Codex, or
> --agent claude-code --yes for Claude Code. Keep --global.
> If the agent isn't clear, ask me which one.
> 
> Verify the installation with:
> node /scripts/golive.mjs version --json
> Tell me if I need to reload skills or start a new session.
> Stop after installation; don't connect accounts or deploy yet.
> ```
> 
> The install includes the instructions, provider references and prebuilt runtime. It does not
> connect accounts or deploy anything. See [installation and updates](docs/DISTRIBUTION.md) for
> noninteractive agent flags, runtime verification and the optional own installer.
> 
> 
> # Codex
> npx golive@alpha install --agent codex
> 
> 
> # Claude Code
> npx golive@alpha install --agent claude
> ```
> 
> Add `--global` to install into your home directory (`~/.agents/skills/golive` or
> `~/.claude/skills/golive`) instead of the current project; `--agent claude-code`, the spelling the
> Skills CLI channel uses, is accepted as well. The installer copies the complete skill the package
> ships with, refuses an existing destination, and never connects provider accounts.
> 
> **Both channels carry the same release.** The npm package publishes the version in this repository,
> including the standalone installer helpers, so an npm installation is an owned copy that updates in
> place. The earlier `0.1.0-alpha.0` snapshot has no updater: remove that copy and reinstall, or use
> the GitHub channel, which manages its own installs.
> The npm package also exposes the terminal CLI: the golive commands `npx golive@a

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[ArasTey--lunel|ArasTey/lunel]]

[GitHub](https://github.com/mikehasa/golive-skill) · [官方網站](https://trytofu.ai)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "mikehasa--golive-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "mikehasa--golive-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W40" AND file.name != "mikehasa--golive-skill"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/mikehasa--golive-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "mikehasa--golive-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "mikehasa" AND file.name != "mikehasa--golive-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/mikehasa--golive-skill");
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
> const me = dv.page("Repos/mikehasa--golive-skill");
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
> const me = dv.page("Repos/mikehasa--golive-skill");
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
> const me = dv.page("Repos/mikehasa--golive-skill");
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
> const me = dv.page("Repos/mikehasa--golive-skill");
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

> **2026-09-27** — 首次收錄
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

- [[2026-09-30|2026-09-30]] — 再次上榜，1.1k stars
- [[2026-09-29|2026-09-29]] — 再次上榜，1.1k stars
- [[2026-09-28|2026-09-28]] — 再次上榜，1.0k stars
- [[2026-09-27|2026-09-27]] — 首次收錄，985 stars
