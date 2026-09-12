---
repo: vinzdg/codenotch
url: https://github.com/vinzdg/codenotch
owner: vinzdg
owner_type: User
language: Swift
license: MIT
description: "A macOS app that pins usage limits from Claude Code, Cursor, Codex, and Antigravity to a screen edge."
homepage: ""
stars: 1473
stars_per_day: 246
forks: 230
open_issues: 36
created: 2026-09-05
pushed_at: 2026-09-11
first_seen: 2026-09-08
week: "2026-W37"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: "v1.5.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-08
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-09-15"
contributor_count: 5
engagement: "medium"
issue_close_rate: 6
repo_size_kb: 15410
readme_length: 6543
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-09-08"
star_history: "2026-09-08:959,2026-09-09:1136,2026-09-10:1297,2026-09-11:1400,2026-09-12:1473"
tags:
  - github
  - "category/other"
  - "lang/swift"
aliases:
  - "codenotch"
  - "vinzdg/codenotch"
---

# codenotch

**959** stars · **480** stars/天 · 建立 2 天前 · Swift · MIT

```dataviewjs
const me = dv.page("Repos/vinzdg--codenotch");
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

`v1.5.0`

> [!summary] 一句話摘要
> A macOS app that pins usage limits from Claude Code, Cursor, Codex, and Antigravity to a screen edge.

## 專案簡介

A macOS app that pins usage limits from Claude Code, Cursor, Codex, and Antigravity to a screen edge.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/vinzdg--codenotch");
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
> const me = dv.page("Repos/vinzdg--codenotch");
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
| Forks | 153 |
| Open Issues | 31 |
| Issue 解決率 | 6% (2 closed) |
| 最後推送 | 2026-09-07 |
| 建立日期 | 2026-09-05 |
| Repo 大小 | 15.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/vinzdg/codenotch) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 99
>     "Makefile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@vinzdg](https://github.com/vinzdg) | 16 |
> | [@oasis1992](https://github.com/oasis1992) | 2 |
> | [@canberkys](https://github.com/canberkys) | 1 |
> | [@mohammad-albarham](https://github.com/mohammad-albarham) | 1 |
> | [@mhmzdev](https://github.com/mhmzdev) | 1 |

**最新版本**：v1.5.0 — 1.5.0 (2026-09-07)

> [!info]- Release Notes
> ## New
> 
> - **Grok** — SuperGrok's weekly Grok Build credits, read from the CLI's own session in `~/.grok/auth.json`. (#15, thanks @pgm-norbert; #10 @MintarasGrinius and #12 @maheshauti96 also explored this independently)
> - **OpenCode** — the Go plan's official usage endpoint, with the key OpenCode itself stores on sign-in. (#11, thanks @MintarasGrinius)
> 
> ## Fixed
> 
> - Switching a provider off could still have its account read when Settings opened, and a response already in flight could restore a reading you'd just asked it to forget. (#13, thanks @canberkys)
> - Codex's live reading only recognised a 5-hour and a 7-day window. A free-plan account's real limit was a 30-day one, which silently fell through and reported "nothing metered" on an account that was genuinely tracked — caught by testing the fix against a real account. (#14, thanks @TrapstarKS)
> - Contributors can now `make build`/`make test` with no Apple Developer account — Debug builds sign themselves automatically when the maintainer's certificate isn't present. (based on #8, thanks @MintarasGrinius)
> - (Shipped earlier as 1.4.1, now synced to this repo) A Mac waking from a long sleep could erase a ring's remembered reading entirely.
> 
> ## Not merged
> 
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-06 ~ 2026-09-07）
> **活躍天數** 2 天 · **最新 commit** Codenotch 1.5.0

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/vinzdg/codenotch/issues/18) | Publish a precompiled .dmg in releases | 11 | 0 |
> | [#21](https://github.com/vinzdg/codenotch/issues/21) | make run fails on a fresh clone: signing-identity check neve | 1 | 0 |
> | [#45](https://github.com/vinzdg/codenotch/issues/45) | Makefile: ad-hoc signing fallback never triggers (grep -c ne | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Codenotch
> 
> A macOS app that pins a small black notch to a screen edge, showing how much of
> each coding assistant's usage limit you have burned — and whether it is still
> working, done, or waiting on you.
> 
> Hover a ring for its limit windows and when they reset. Claude's ring shows the
> same **current session** window Claude Code's own `/usage` leads with, so the
> two never disagree.
> 
> ## What it reads
> 
> | Provider | Source | How |
> |---|---|---|
> | **Claude Code** | official | The OAuth token in the login keychain, against the same endpoint Claude Code's own `/usage` uses. |
> | **Cursor** | official | The editor's own signed-in session, read from its local SQLite state — no separate sign-in. |
> | **Codex** | official | ChatGPT's usage endpoint, using the local Codex sign-in. Shows the 5-hour and weekly limits when available. |
> | **Antigravity** | official where licensed, otherwise a request count | Antigravity's local language server first, then Google's quota endpoint; a plain count when neither will answer for the account. |
> | **GLM** | official | Z.ai's Coding Plan monitor endpoint, with a key borrowed from whichever coding tool already holds one — Claude Code's `settings.json`, ZCode, or OpenCode. |
> | **Grok** | official | The Grok CLI session in `~/.grok/auth.json`, against the same credits billing endpoint `/usage` uses. |
> | **OpenCode** | official | The Go plan's official usage endpoint, with the `opencode-go` key OpenCode itself stores on sign-in. |
> 
> Codenotch never signs in anywhere. Every reading is borrowed from a credential
> or session a tool on your Mac already holds — install and sign in to any of
> them, and its ring appears. Switching a provider off in Settings stops its
> credential being read at all and forgets the readings taken from it; it does
> not sign you out of the tool that owns the account, and the row says so.
> 
> It also answers **"is it still working?"** — a thin arc spins inside a
> provider's ring while a session is busy, and becomes a pulsing amber ring when
> one is blocked waiting on you. Hover for every live session by name, where it
> is running, and what it wants.
> 
> Two Claude Code logins are two rings. Anyone who keeps a work account apart with
> `CLAUDE_CONFIG_DIR=~/.claude-work claude` gets a **Claude (work)** ring beside the
> personal one, with its own limits, its own sessions and its own row in Settings.
> Any `~/.claude-` directory Claude Code has run against is found at launch;
> the default `~/.claude` always comes first, the rest in alphabetical order, so the
> rings never swap places.
> 
> ## Placement
> 
> The notch lives on any of the four screen edges. Right and left keep a
> vertical column; top and bottom lay the readings out side by side. It pins
> itself to the *usable* edge, so a bottom notch rests on the Dock and follows
> when the Dock hides or moves. On a Mac with a hardware notch, the top
> placement takes its exact shape, so the two read as one rather than as a bar
> parked underneath it.
> 
> At rest it is a small pill on the screen edge that unfolds when the pointer
> reaches it — configurable in Settings to always show, or to hide entirely.
> Settings live in an orb below the notch: an arc at rest, a gear on hover.
> 
> The app itself can show a Dock icon, a menu bar icon, or neither.
> 
> ## Updates
> 
> Codenotch updates itself. [Sparkle](https://sparkle-project.org) checks daily
> and installs in the background without prompting; Settings says so and can
> switch it off. Every update is EdDSA-signed, so nothing installs that wasn't
> built and signed by the maintainer.
> 
> ## Building
> 
> ```sh
> brew install xcodegen   # once
> make run                # generate, build, launch a Debug build
> make test               # unit tests
> ```
> 
> No signing identity is required for either. `make release` — which archives,
> notarizes, and produces a signed auto-update feed — needs a Developer ID
> certificate and an App Store Connect notary profile, and is only ever run by
> the maintainer to cut an official release. See
> [CONTRIBUTING.md](CONTRIBUTING.md).
> 
> Run with `CODENOTCH_DEMO=1` to see fixed sample data instead of live readings.
> 
> ## Architecture
> 
> Every provider implements `UsageProvider` (`Sources/Providers/`) and declares
> its own `Fidelity` — `.official`, `.derived`, or `.manual` — so the UI never
> presents a guess as if a vendor had published it. `UsageStore`
> (`Sources/Model/`) polls them on a timer, keeps the last good reading across
> launches, and degrades every failure to a visible status rather than a
> made-up percentage.
> 
> The notch itself works in one-dimensional **stack space** (`along`/`across`)
> regardless of which screen edge it's on; `NotchPlacement` is the only place
> that maps that back onto real screen coordinates. `NotchLayout` holds every
> measurement, quoted from `docs/design/frame-124-hover-tooltip.png` so the
> layout can be checked against the design frame directly.
> 
> - Design spec: [`docs/specs/2026-08-28-usage-notch-design.md`](docs/specs/2026-08-28-usage-notch-design.md)
> - Implementation history: [`TASKS.md`](TASKS.md)
> 
> ## The honest caveat
> 
> No vendor publishes a clean "your session limit is N% used" API for any of
> these tools. Each adapter reads whatever the owning app itself reads from —
> an internal endpoint, a local database, a language server's own RPC — and
> those can change without notice. Every adapter's response shape is pinned by
> tests, and every failure degrades to a visible status (`stale`, `needsAuth`,
> `error`) rather than an invented number.
> 
> **Keychain:** the app is signed with a stable Developer ID identity so the
> one-time "Always Allow" grant on Claude Code's and Antigravity's keychain
> items survives rebuilds. The secret itself is read only when the owning app
> has actually changed it — checked via the item's modification date, which
> isn't behind the same access prompt as the credential — so a valid grant does
> not mean a prompt on every poll.
> 
> **Rate limits:** Claude's endpoint returns 429 if polled too hard, with an
> unhelpful `Retry-After: 0`. The back-off treats that as a floor-raiser only —
> 60s, doubling per consecutive 429, capped at 15 minutes — and the deadline is
> persisted, so relaunching during a penalty waits instead of spending an
> attempt on it. Polling drops to every 5 minutes when nothing is running, and
> right-clicking the notch offers **Refresh now**.
> 
> **Logs:** the app has no window, so anything worth diagnosing goes to the
> unified log.
> 
> ```sh
> /usr/bin/log stream --predicate 'subsystem == "com.vinz.codenotch"' --level debug
> ```
> 
> ## Contributing
> 
> See [CONTRIBUTING.md](CONTRIBUTING.md).
> 
> ## License
> 
> [MIT](LICENSE)

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[CopilotKit--OpenBot|CopilotKit/OpenBot]]

[GitHub](https://github.com/vinzdg/codenotch)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "vinzdg--codenotch"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "vinzdg--codenotch" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W37" AND file.name != "vinzdg--codenotch"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/vinzdg--codenotch");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "vinzdg--codenotch" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "vinzdg" AND file.name != "vinzdg--codenotch"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/vinzdg--codenotch");
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
> const me = dv.page("Repos/vinzdg--codenotch");
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
> const me = dv.page("Repos/vinzdg--codenotch");
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
> const me = dv.page("Repos/vinzdg--codenotch");
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
> const me = dv.page("Repos/vinzdg--codenotch");
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

> **2026-09-08** — 首次收錄
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

- [[2026-09-12|2026-09-12]] — 再次上榜，1.5k stars
- [[2026-09-11|2026-09-11]] — 再次上榜，1.4k stars
- [[2026-09-10|2026-09-10]] — 再次上榜，1.3k stars
- [[2026-09-09|2026-09-09]] — 再次上榜，1.1k stars
- [[2026-09-08|2026-09-08]] — 首次收錄，959 stars
