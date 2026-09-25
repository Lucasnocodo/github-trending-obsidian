---
repo: newliver666/apk-reverse
url: https://github.com/newliver666/apk-reverse
owner: newliver666
owner_type: User
language: Python
license: MIT
description: "Suitable for Android APK reverse engineering analysis"
homepage: ""
stars: 1428
stars_per_day: 286
forks: 377
open_issues: 0
created: 2026-09-19
pushed_at: 2026-09-24
first_seen: 2026-09-25
week: "2026-W39"
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
last_reviewed: 2026-09-25
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-09-28"
contributor_count: 3
engagement: "medium"
issue_close_rate: 100
repo_size_kb: 1424
readme_length: 8951
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-09-25"
star_history: "2026-09-25:1428"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "apk-reverse"
  - "newliver666/apk-reverse"
---

# apk-reverse

**1.4k** stars · **286** stars/天 · 建立 5 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/newliver666--apk-reverse");
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
> Suitable for Android APK reverse engineering analysis

## 專案簡介

Suitable for Android APK reverse engineering analysis

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/newliver666--apk-reverse");
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
> const me = dv.page("Repos/newliver666--apk-reverse");
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
| Forks | 377 |
| Open Issues | 0 |
| Issue 解決率 | 100% (1 closed) |
| 最後推送 | 2026-09-24 |
| 建立日期 | 2026-09-19 |
| Repo 大小 | 1.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/newliver666/apk-reverse) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 93
>     "JavaScript" : 6
>     "Java" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@inliver233](https://github.com/inliver233) | 46 |
> | [@dabao1955](https://github.com/dabao1955) | 1 |
> | [@newliver666](https://github.com/newliver666) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-22 ~ 2026-09-24）
> **活躍天數** 2 天 · **最新 commit** README: add a theme-aware header, live badges, and a Simplified Chinese edition

## README 摘錄

> [!info]- 展開查看原文 README
> English · 简体中文
> 
>   
>   
>   
>   
>   
>   
> 
>   Capabilities · Structure · Install · Requirements · Failure catalogue · Scope · Maintenance · Disclaimer
> 
> 
> ## Install
> 
> This repository is a **skills repository**: the skill lives at `skills/apk-reverse/`, which is the
> layout the `skills` CLI resolves, and it is installed by name rather than by copying a directory:
> 
> ```
> npx skills add newliver666/apk-reverse              # install every skill in the repo
> npx skills add newliver666/apk-reverse --list       # list what is here, install nothing
> npx skills add newliver666/apk-reverse --skill apk-reverse -y
> npx skills use  newliver666/apk-reverse@apk-reverse # use it once, without installing
> ```
> 
> The CLI symlinks the skill into your agent's skills directory by default (`--copy` makes independent
> copies instead), and `-g` installs for every project rather than the current one. With one skill in
> the repository, `--skill apk-reverse` is redundant today; it is written out here because it is what
> selects a single skill once a second one exists.
> 
> Once installed, the agent loads `SKILL.md` when a task matches its description, and pulls in
> `references/*` only as needed. No global state, no machine-specific paths, and no build step.
> 
> 
> ## What it is good at
> 
> - Deciding **fast** whether a request is even achievable client-side, instead of
>   burning hours on a paywall that is enforced by a server.
> - Deciding **what form the deliverable must take** before any work starts — an
>   unrooted, self-contained artifact is a different problem from "make it work on this
>   machine", and confusing the two is the most expensive drift in this domain.
> - Choosing the **safest patch layer** for a given change, and avoiding the layers that
>   break the app.
> - Catching the repack failure that looks like success: an app that installs, launches and
>   renders perfectly while **every signed request is rejected**, because the client derives its
>   request-signing key from its own signing certificate.
> - Separating **your own mistakes from the app's or the server's problems** — a
>   feature-scoped failure (login, registration, payment) is often a TLS/certificate issue on
>   one code path, not a consequence of the patch you just built. Device state, a dead device
>   server and clock drift masquerade the same way.
> - Establishing **which architecture and which library are actually executing**, rather
>   than trusting what the manifest ships or what the device claims.
> - Working through **packed/hardened targets**: identifying the packer, unpacking, and turning a
>   memory dump back into a patched, installable APK.
> - Handling a **hardened library that terminates the process on purpose** — including the
>   deliberate-crash shape (`fault addr 0x4`) that looks exactly like an ordinary null-dereference
>   bug, and the "neutralise it, but never by making it *not return*" rule that decides whether the
>   fix works or freezes the whole app in a way that looks nothing like the cause.
> - Knowing **which tools to reach for and where each one lies** — including the ones that only
>   exist as a GUI, so you ask for a human instead of silently substituting a weaker method.
> - Making a patched build **stay** patched: neutralising version checks, forced-upgrade dialogs and
>   self-update installers so the work cannot be switched off remotely — and recognising the
>   hot-update/remote-config channel that can quietly undo it without any version change.
> - Separating a **client-side sign-in gate** (patchable) from an **account-scoped resource** (empty
>   because the server has nothing to answer with), and knowing that forging a session produces a state
>   worse than being signed out.
> - Keeping a **long task honest**: a live record, graded conclusions, calibrated timeouts, and
>   bounded waits, so progress is not lost and the same mistake is not made twice.
> - Avoiding the specific mistakes that produce an APK that builds perfectly and dies at
>   runtime.
> - Deciding **what the deliverable should be when an APK is not an option** — a repack refused by
>   several independent checks is *blocked*, not expensive, and the fallback ladder is a system-level
>   module, a local RPC service, or an honest report with a stated boundary.
> - Telling a **real memory dump from an extraction-shell skeleton**, and knowing which recovery route
>   applies — including the root-side dump for when `frida` itself is refused. What the measurement can
>   and cannot see is in `skills/apk-reverse/references/advanced-unpacking.md`.
> - **Calling a routine instead of reversing it** when reversing costs more than invoking: emulated
>   execution on the host, or a live function service-ified over Frida RPC.
> - Reading **instruction-level execution evidence** when a native function has been flattened into a
>   state machine by OLLVM — including the two ways Stalker was measured to bite back on a real device.
> - Recognising when **userspace hooking cannot reach the check at all** (raw `svc` syscalls,
>   `init_array`-early detection), what the next layer up and down can actually do, and when escalating
>   is the wrong answer.
> - Working **protocols that are not REST** — protobuf without a schema, gRPC, QUIC/HTTP3 — and
>   native-side certificate pinning that ignores the system trust store.
> - Working **from the phone itself**: MT Manager's edit/repack/sign flow and its APK MCP surface,
>   LSPosed Manager, and on-device data inspection, alongside the PC toolchain rather than instead of it.
> - Telling **Java2C apart from an extraction shell** before spending hours hunting a decrypted DEX that
>   does not exist at any point in the process lifetime — the code was compiled into a `.so`.
> - Handling a build that arrives as a **split APK / App Bundle set**: reading the set off a device,
>   signing every member with one keystore for `pm install-multiple`, or merging code/native members
>   into a standalone APK when that is legal.
> - Working a **real Dex VMP** with the known-plaintext differential — which links can be automated and
>   which cannot, what a compiled fixture can and cannot reach, and how to *prove* a derived
>   private-opcode table instead of asserting one.
> - **Publishing what it learns without publishing the target** — a scanner that reports identity
>   shapes with their context, an explicit list of what must *not* be redacted (tools, libraries,
>   protocol fields, CVEs, hardening products, public crackmes) because redacting those destroys the
>   reusable part, and exit codes that gate a commit.
> - Reading a **precedent** before repeating work this repository already converged on: the positive
>   half of the record, with the route including its dead ends, a grade on every assertion, and the
>   files the case says to write back to.
> 
> 
> # apk-reverse
> 
> An Agent Skill for Android APK reverse engineering, debloating, ad removal, surgical
> dex patching, repacking, and runtime/server analysis.
> 
> It is a **skill**, not a tutorial: it is written to be loaded by an agent (Claude Code,
> Codex, or any harness that supports the Agent Skills format) while it works, so it is
> organized for progressive disclosure — a short decision-oriented `SKILL.md`, detailed
> references loaded only when a step needs them, and parameterized scripts you can run
> directly.
> 
> 
> ## How an agent is expected to consume this
> 
> `SKILL.md` is deliberately written as a **procedure with gates** rather than as advice, because the
> observed failure mode is not ignorance — it is a model reading the whole thing, agreeing with it, and
> then reasoning from first principles anyway.
> 
> So there are four things in the body that are meant to be *acted on*, not read:
> 
> - **Four override rules (R1–R4).** Where they conflict with the current plan, they win until evidence
>   overrides them.
> - **A symptom index.** Each row is a failure that has already been paid for. **A matching row is a
>   stop signal**: load that file before running another command, rather than after a few more attempts.
>   Reasoning past a known symptom is how the same hours get spent twice.
> - **Four gates (G1–G4),*

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/newliver666/apk-reverse)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "newliver666--apk-reverse"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "newliver666--apk-reverse" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W39" AND file.name != "newliver666--apk-reverse"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/newliver666--apk-reverse");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "newliver666--apk-reverse" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "newliver666" AND file.name != "newliver666--apk-reverse"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/newliver666--apk-reverse");
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
> const me = dv.page("Repos/newliver666--apk-reverse");
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
> const me = dv.page("Repos/newliver666--apk-reverse");
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
> const me = dv.page("Repos/newliver666--apk-reverse");
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
> const me = dv.page("Repos/newliver666--apk-reverse");
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

> **2026-09-25** — 首次收錄
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

- [[2026-09-25|2026-09-25]] — 首次收錄，1.4k stars
