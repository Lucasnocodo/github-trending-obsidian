---
repo: Louis-CFM/coucou
url: https://github.com/Louis-CFM/coucou
owner: Louis-CFM
owner_type: User
language: Swift
license: MIT
description: "A tiny friend that lives in your notch (macOS) or at the top of your screen (Windows) and keeps an eye on your Claude Code sessions."
homepage: "https://louis-cfm.github.io/coucou/"
stars: 3034
stars_per_day: 607
forks: 466
open_issues: 108
created: 2026-09-27
pushed_at: 2026-10-03
first_seen: 2026-10-01
week: "2026-W40"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.1.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-01
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-10-06"
contributor_count: 2
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 11447
readme_length: 6760
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-01"
star_history: "2026-10-01:1725,2026-10-02:2572,2026-10-03:3034"
tags:
  - github
  - "category/other"
  - "lang/swift"
  - "topic/ai_agents"
  - "topic/anthropic"
  - "topic/claude"
  - "topic/claude_code"
  - "topic/dynamic_island"
aliases:
  - "coucou"
  - "Louis-CFM/coucou"
---

# coucou

**1.7k** stars · **575** stars/天 · 建立 3 天前 · Swift · MIT

```dataviewjs
const me = dv.page("Repos/Louis-CFM--coucou");
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

`v0.1.0`

`ai-agents` `anthropic` `claude` `claude-code` `dynamic-island` `macos` `macos-app` `menubar-app` `notch` `open-source` `swift` `swiftui`

> [!summary] 一句話摘要
> A tiny friend that lives in your notch (macOS) or at the top of your screen (Windows) and keeps an eye on your Claude Code sessions.

## 專案簡介

A tiny friend that lives in your notch (macOS) or at the top of your screen (Windows) and keeps an eye on your Claude Code sessions.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Louis-CFM--coucou");
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
> const me = dv.page("Repos/Louis-CFM--coucou");
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
| Forks | 219 |
| Open Issues | 29 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-10-01 |
| 建立日期 | 2026-09-27 |
| 官方網站 | [Link](https://louis-cfm.github.io/coucou/) |
| Repo 大小 | 11.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Louis-CFM/coucou) |
| Topics | `ai-agents` `anthropic` `claude` `claude-code` `dynamic-island` `macos` `macos-app` `menubar-app` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 53
>     "TypeScript" : 28
>     "Rust" : 14
>     "CSS" : 3
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Louis-CFM](https://github.com/Louis-CFM) | 37 |
> | [@Kamasoutra](https://github.com/Kamasoutra) | 1 |

**最新版本**：v0.1.0 — Coucou 0.1.0 (2026-09-27)

> [!info]- Release Notes
> ## What's in this release
> 
> - Mochi lives in your notch — breathing, blinking, eyes that follow your cursor
> - Claude Code sessions: live steps, approve permissions, answer questions, jump to terminal
> - Built-in Claude chat from the notch
> - Drop a file on the notch → ask a question or send it by email
> - Drag Mochi onto any window to attach it as context
> - Integrations: Stripe, n8n, GitHub, Vercel, Resend, Notion, Cal.com
> - 28 handcrafted sounds
> - Hides when idle, peeks when you hover
> 
> ## First launch
> 
> macOS will say it can't verify Coucou (free side project, not notarized).
> 
> Open **System Settings → Privacy & Security** and click **Open Anyway**, or run in Terminal:
> 
> ```
> xattr -dr com.apple.quarantine /Applications/Coucou.app
> ```
> 
> ## Build from source
> 
> ```bash
> brew install xcodegen
> git clone https://github.com/Louis-CFM/coucou.git
> cd coucou/NotchBuddy && xcodegen && open NotchBuddy.xcodeproj
> ```

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-30 ~ 2026-10-01）
> **活躍天數** 2 天 · **最新 commit** docs: refine no-notch FAQ and README (lid closed on external display)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/Louis-CFM/coucou/issues/8) | Create a Linux version `enhancement` | 10 | 7 |
> | [#13](https://github.com/Louis-CFM/coucou/issues/13) | Codex support on macOS (implementation + verified event surf | 5 | 0 |
> | [#9](https://github.com/Louis-CFM/coucou/issues/9) | Support for other agents, like Oh-my-pi `enhancement` | 5 | 2 |
> | [#39](https://github.com/Louis-CFM/coucou/issues/39) | Overlapping Text on Windows `bug` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Coucou
> 
> **A tiny friend that lives in your Mac's notch — or at the top of your screen on Windows — and keeps an eye on your Claude Code sessions.**
> 
> Approve permissions, watch your agents work, drop a file, chat with Claude — all without leaving what you're doing.
> 
> ---
> 
> ## Why
> 
> Some studios showed off gorgeous notch companions… and never let anyone use them.
> **Coucou is the open version.** Every line of code, every animation, every sound — free to use, read, fork and remix.
> 
> Meet **Mochi**: a soft little squircle with big eyes that pops out of your notch, waves hello, follows your cursor with its eyes, gets annoyed when you poke it (and dizzy if you insist), and tells you the moment Claude Code needs you.
> 
> ## Features
> 
> - 🤖 **Claude Code, live** — see every session in your notch: what it reads, edits and runs, step by step. Finished? Mochi does a happy little jump.
> - ✅ **Approve from the notch** — Claude Code permission requests show up with **Allow / Deny**. One click, back to work.
> - 🧑‍💻 **Jump to the right terminal** — open the exact terminal window of a session *(macOS)*.
> - 💬 **Ask Claude anything** — built-in chat, straight from the notch.
> - 📎 **Drop a file on the notch** — Mochi turns into a box and swallows it, then ask a question about it or send it by email *(email: macOS, Mail.app)*.
> - 🪟 **Drag Mochi onto any window** — attach that window as context for Claude *(macOS)*.
> - 🔌 **Integrations** — Stripe payments, n8n workflows, GitHub, Vercel deployments, Resend emails, Notion, Cal.com. Each one gets its own little colored Mochi.
> - 🎭 **A real character** — idle breathing, blinks, eyes on a sphere that follow your mouse, emotes, 28 handcrafted sounds, a greeting on launch.
> - 🫥 **Invisible when idle** — hides away when nothing is running, peeks out when you hover the notch (the top edge of the screen on Windows).
> - 🖥️ **Any Mac, notch or not** — on an iMac, a Mac mini, or a MacBook with its lid closed on an external display, Mochi sits in a small bar at the top of the screen.
> - 🔒 **Private by design** — no telemetry, no account. Keys live in your macOS Keychain or Windows Credential Manager. The app only talks to the services you plug in.
> 
> ## Install
> 
> ### Download for macOS
> 
> 1. Grab the latest `Coucou.zip` from [Releases](https://github.com/Louis-CFM/coucou/releases).
> 2. Unzip and move **Coucou.app** to `/Applications`.
> 3. Launch. This build isn't notarized by Apple yet, so the first time macOS says it can't verify the developer: open **System Settings → Privacy & Security**, scroll down and click **Open Anyway** (only once).
> 
> ### Windows
> 
> The Windows installer is **temporarily unavailable**. Microsoft Defender wrongly
> flags the unsigned installer as malware; a false-positive report is under review
> at Microsoft and the installer will come back once it is cleared and signed.
> Until then you can [build it from source](#build-from-source).
> 
> There is no notch on a PC, so the island slides out of the top edge of the screen
> instead of hiding inside one. See [`windows/README.md`](windows/README.md) for the
> rest of the differences.
> 
> ### Build from source
> 
> **macOS** — requirements: macOS 15+, Xcode 16+, [XcodeGen](https://github.com/yonaskolb/XcodeGen).
> 
> ```bash
> brew install xcodegen
> git clone https://github.com/Louis-CFM/coucou.git
> cd coucou/NotchBuddy
> xcodegen
> open NotchBuddy.xcodeproj   # then ⌘R
> ```
> 
> **Windows** — requirements: [Rust](https://rustup.rs), Node 20+, MSVC build tools.
> 
> ```powershell
> git clone https://github.com/Louis-CFM/coucou.git
> cd coucou/windows
> npm install
> npm run pack                # installer lands in windows/release/
> ```
> 
> ## Setup
> 
> Click the Coucou icon in the menu bar (macOS) or in the system tray (Windows) → **Settings…**
> 
> | What | Why | Where the key goes |
> |---|---|---|
> | **Claude Code hooks** | live sessions and approvals | **Install hooks** — Coucou backs up `~/.claude/settings.json`, merges its hooks and shows you the diff before writing anything |
> | **Anthropic API key** | chat and questions about files | Keychain / Windows Credential Manager |
> | Stripe, n8n, GitHub, Vercel, Resend, Notion, Cal.com | the integration pills | Keychain / Windows Credential Manager, all optional |
> 
> If Coucou isn't running, the hook exits immediately: **Claude Code is never blocked.**
> 
> ## Things to try
> 
> | Do this | Mochi does that |
> |---|---|
> | Hover the notch (top edge on Windows) | peeks out and says hi 👋 |
> | Click it | opens |
> | Hover Mochi | blinks, eyes grow |
> | Click Mochi | squish + annoyed |
> | Click 3 times fast | 😵‍💫 dizzy for a few seconds |
> | Drag a file onto the island | turns into a box and swallows it |
> | Drag Mochi onto a window *(macOS)* | attaches it as context |
> 
> ## How it works
> 
> **macOS**
> 
> - **Island**: a borderless `NSPanel` hugging the notch, driven by a small state machine (`hidden → petit → home`).
> - **Character**: drawn in SwiftUI `Canvas` + `TimelineView` at 60 fps — squircle body, eyes projected on a sphere, spring animations. No Rive, no Lottie, no images.
> - **Claude Code**: a tiny `nb-hook` script receives hook events and forwards them over a Unix socket to the app. For approvals it waits for your click, then answers the hook.
> - **Integrations**: lightweight pollers, paused when nothing is watching.
> - **Sounds**: 28 short WAVs played through preloaded `AVAudioPlayer`s.
> 
> The macOS app is native Swift 6 / SwiftUI / AppKit with **zero third-party dependencies**.
> 
> **Windows**
> 
> - A [Tauri 2](https://tauri.app) app (Rust + TypeScript): the island is a transparent, always-on-top window that never steals focus, Mochi is drawn in Canvas 2D with the same shapes, timings and sounds as on the Mac.
> - Claude Code hooks go through a tiny `coucou-hook.exe` and a named pipe; keys live in Windows Credential Manager.
> - Details and differences in [`windows/README.md`](windows/README.md).
> 
> ## Contributing
> 
> Issues and PRs are very welcome — new integrations, new emotes, new sounds, bug fixes. See [CONTRIBUTING.md](CONTRIBUTING.md).
> 
> ## Credits
> 
> Built by [Louis Raillé](https://louisraille.fr) with Claude Code.
> Inspired by the notch-companion concepts shared by design studios — this project is independent and not affiliated with any of them.
> 
> ## License
> 
> - **Code:** [MIT](LICENSE) — use it, fork it, learn from it, just keep the copyright notice.
> - **Name, Mochi character, icon, sounds and media:** © Louis Raillé, all rights reserved — see [LICENSE-ASSETS.md](LICENSE-ASSETS.md). Shipping your own fork? Give it your own name and character.
> 
> **If Mochi made you smile, a ⭐ helps a lot.**
> 
> [Website](https://louis-cfm.github.io/coucou/) · [Privacy](https://louis-cfm.github.io/coucou/privacy.html) · [Terms](https://louis-cfm.github.io/coucou/terms.html) · [Support](https://louis-cfm.github.io/coucou/support.html)

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]]

[GitHub](https://github.com/Louis-CFM/coucou) · [官方網站](https://louis-cfm.github.io/coucou/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Louis-CFM--coucou"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "Louis-CFM--coucou" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W40" AND file.name != "Louis-CFM--coucou"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Louis-CFM--coucou");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Louis-CFM--coucou" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Louis-CFM" AND file.name != "Louis-CFM--coucou"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Louis-CFM--coucou");
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
> const me = dv.page("Repos/Louis-CFM--coucou");
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
> const me = dv.page("Repos/Louis-CFM--coucou");
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
> const me = dv.page("Repos/Louis-CFM--coucou");
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
> const me = dv.page("Repos/Louis-CFM--coucou");
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

> **2026-10-01** — 首次收錄
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

- [[2026-10-03|2026-10-03]] — 再次上榜，3.0k stars
- [[2026-10-02|2026-10-02]] — 再次上榜，2.6k stars
- [[2026-10-01|2026-10-01]] — 首次收錄，1.7k stars
