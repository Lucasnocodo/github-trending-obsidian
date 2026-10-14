---
repo: storytold/deckcraft
url: https://github.com/storytold/deckcraft
owner: storytold
owner_type: Organization
language: Rust
license: Apache-2.0
description: "Presentations and slide shows: an open-source, clean-room reimplementation of Microsoft PowerPoint in pure Rust. Part of the ArtCraft Crafting Apps."
homepage: "https://getartcraft.com/apps/slidecraft"
stars: 3016
stars_per_day: 431
forks: 1649
open_issues: 589
created: 2026-10-07
pushed_at: 2026-10-14
first_seen: 2026-10-14
week: "2026-W42"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.6.1"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-14
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-17"
contributor_count: 5
engagement: "high"
issue_close_rate: 3
repo_size_kb: 3174
readme_length: 9041
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-14"
star_history: "2026-10-14:3016"
tags:
  - github
  - "category/other"
  - "lang/rust"
  - org
aliases:
  - "deckcraft"
  - "storytold/deckcraft"
---

# deckcraft

**3.0k** stars · **431** stars/天 · 建立 7 天前 · Rust · Apache-2.0

```dataviewjs
const me = dv.page("Repos/storytold--deckcraft");
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

`ORG` `v0.6.1`

> [!summary] 一句話摘要
> Presentations and slide shows: an open-source, clean-room reimplementation of Microsoft PowerPoint in pure Rust. Part of the ArtCraft Crafting Apps.

## 專案簡介

Presentations and slide shows: an open-source, clean-room reimplementation of Microsoft PowerPoint in pure Rust. Part of the ArtCraft Crafting Apps.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/storytold--deckcraft");
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
> const me = dv.page("Repos/storytold--deckcraft");
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
| Forks | 1.6k |
| Open Issues | 589 |
| Issue 解決率 | 3% (19 closed) |
| 最後推送 | 2026-10-14 |
| 建立日期 | 2026-10-07 |
| 官方網站 | [Link](https://getartcraft.com/apps/slidecraft) |
| Repo 大小 | 3.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/storytold/deckcraft) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members` `default-members` `version` `edition` `license` `rust-version` `repository` `deckcraft-geom` `deckcraft-color` `deckcraft-metafile` `deckcraft-model` `deckcraft-fonts` `deckcraft-text` `deckcraft-render`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@echelon](https://github.com/echelon) | 141 |
> | [@alexanderalber](https://github.com/alexanderalber) | 9 |
> | [@LloydNicholson](https://github.com/LloydNicholson) | 5 |
> | [@MarekSpodBiedry](https://github.com/MarekSpodBiedry) | 3 |
> | [@Silvertree2010](https://github.com/Silvertree2010) | 3 |

**最新版本**：v0.6.1 — DeckCraft v0.6.1 (2026-10-12)

> [!info]- Release Notes
> ## What's Changed
> * ci: refactor workflows to use storytold/craft-common-actions by @dylanmtaylor in https://github.com/storytold/deckcraft/pull/152
> * Release workflow: pass the Azure signing secrets by @echelon in https://github.com/storytold/deckcraft/pull/181
> 
> 
> **Full Changelog**: https://github.com/storytold/deckcraft/compare/v0.5.0...v0.6.1

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-13 ~ 2026-10-13）
> **活躍天數** 1 天 · **最新 commit** Docs: keep the progress table in one piece

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#138](https://github.com/storytold/deckcraft/issues/138) | [Bug] macOS: double-clicking a .pptx in Finder shows "DeckCr | 3 | 2 |
> | [#347](https://github.com/storytold/deckcraft/issues/347) | [DeckCraft] Cannot open pptx by double clic | 1 | 0 |
> | [#193](https://github.com/storytold/deckcraft/issues/193) | [Feature Request] Add OSC (Open Sound Control) support for s | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> DeckCraft
> 
>   Presentations and slide shows; an open-source, clean-room reimplementation of Microsoft PowerPoint, rebuilt in pure Rust.
> 
>   Build decks with themes, layouts, shapes, pictures, tables, charts, transitions and animations,
>   open and save PowerPoint files, and present them full screen. Native on macOS, Windows, Linux
>   and FreeBSD, and in the browser. Every button is also a command that the CLI and AI agents
>   (through MCP) can drive.
> 
>   
>   
>   
>   
> 
>   
> 
>   DeckCraft on getartcraft.com ·
>   ArtCraft ·
>   All Crafting Apps
> 
> > [!NOTE]
> > **ArtCraft is a community of artists from all walks of life.** Painters, photographers,
> > filmmakers, illustrators, designers, animators, hobbyists, and people who picked up a pencil
> > last week. If you make things, you're one of us. **[Come say hi on Discord](https://discord.gg/artcraft).**
> 
>   
> 
>   What works ·
>   Getting started ·
>   Agents, CLI and MCP ·
>   Roadmap ·
>   Downloads ·
>   The Crafting Apps ·
>   License
> 
> 
> ## Getting started
> 
> ```sh
> git clone https://github.com/storytold/deckcraft
> cd deckcraft
> cargo run --release -p deckcraft-cli -- render --sample --all --scale 1 out/
> ```
> 
> On Linux, the build also needs the ALSA headers for slide-show sound: `alsa-lib-devel` on Fedora,
> `libasound2-dev` on Debian and Ubuntu, `alsa-lib` on Arch. Without them it stops at `alsa-sys`.
> 
> Fonts come from [craft-fonts](https://github.com/storytold/craft-fonts): clone it next to this repo
> (`../craft-fonts`) and local builds pick it up automatically; without it DeckCraft uses your system
> fonts.
> 
> Each [GitHub release](https://github.com/storytold/deckcraft/releases) has ready-made builds, on Linux as
> an AppImage, a `.deb`, an `.rpm` and a tarball. On Gentoo, the community [::snakebyte
> overlay](https://github.com/switch87/snakebyte-overlay) packages the Linux release as
> `app-office/deckcraft-bin` (not maintained by the DeckCraft team):
> 
> ```sh
> eselect repository add snakebyte git https://github.com/switch87/snakebyte-overlay.git
> emaint sync -r snakebyte
> echo 'app-office/deckcraft-bin ~amd64' >> /etc/portage/package.accept_keywords/deckcraft
> emerge --ask app-office/deckcraft-bin
> ```
> 
> 
> ## What works today
> 
> DeckCraft is in alpha, heading for beta (see the [roadmap](ROADMAP.md)).
> Today it can:
> 
> - **Make decks**: slide masters and eleven layouts with placeholders that inherit position and
>   formatting, eight original themes with colour and font schemes, sections, notes, comments,
>   headers and footers, custom slide sizes.
> - **Draw**: 150+ preset shapes with adjust handles, connectors that stay glued to shapes, freeform,
>   curve and scribble tools, merge shapes (union, combine, fragment, intersect, subtract), gradient,
>   picture and pattern fills, outlines with dashes and arrowheads, shadows, glow, soft edges and
>   reflections.
> - **Write**: in-place text editing with full font and paragraph formatting, bullets and numbering,
>   columns, autofit, vertical text, fields and hyperlinks.
> - **Add content**: pictures with crop and corrections, tables with styles, charts, SmartArt basics,
>   audio and video (MP3, AAC, FLAC, ALAC, Ogg, Opus, WAV, AIFF; H.264, HEVC, VP9, AV1).
> - **Present**: transitions (including Morph), entrance/emphasis/exit and motion-path animations,
>   by-paragraph builds, full-screen slide show, presenter view, pen, rehearse timings, media playback.
> - **Exchange files**: open and save PowerPoint `.pptx`, export PDF (slides, notes pages, handouts
>   with selectable text), PNG/JPEG and outlines. Unsaved work is kept by AutoRecover.
> - **Automate**: 200+ commands with undo, all scriptable from the CLI, a JSON control channel and an
>   MCP server for AI agents.
> 
>   
>     Shape Format contextual tab and selection handles
>     Format Shape pane: gradient type, direction and stops
>   
>   
>     Slide Sorter with each slide's transition
>     Dark mode, with a native chart
>   
> 
>   
>   The built-in sample deck, rendered by deckcraft-cli render --sample --all
> 
> 
> ### Logs
> 
> The desktop app writes its `log` records to standard error and to `logs/deckcraft.log` in the
> settings directory, beside `ui.json` and `prefs.json` (Linux `~/.config/deckcraft/logs/`, or
> `$XDG_CONFIG_HOME/deckcraft/logs/`; macOS `~/Library/Application Support/DeckCraft/logs/`; Windows
> `%APPDATA%\DeckCraft\logs\`). A start from a desktop menu or the Dock has no terminal, so this file
> is what to attach to a bug report: the crash guard's panic report, a failed crash-recovery save,
> PowerPoint parts skipped on import and audio output problems land there. Each launch moves the
> previous log to `deckcraft.1.log` (and that one to `deckcraft.2.log`), so the log of a run that
> crashed survives the next start. The file stops growing at 16 MiB. `--version` writes no file.
> 
> | Variable | Effect |
> |---|---|
> | `RUST_LOG` | Log levels for standard error and the log file. Default: `info` for DeckCraft's own crates, `warn` for everything else. env_logger-style directives replace that, e.g. `RUST_LOG=debug`, `RUST_LOG=warn,deckcraft_pptx=trace` or `RUST_LOG=info,wgpu_core=warn`; a directive ending in `*` covers every target starting with it (`deckcraft*=debug`). |
> 
> The logger is `apps/deckcraft/src/logging.rs`; the realtime audio callback does not log. The web
> app logs to the browser console instead.
> 
> 
> ## Agents, CLI and MCP
> 
> Every action in DeckCraft is a command with a stable id, so people, scripts and AI agents use the
> same verbs:
> 
> ```sh
> deckcraft-cli commands format.          # list commands
> deckcraft-cli run --sample --cmd 'slide.new={"layout":"titleOnly","title":"Hello"}' --save hello.deckcraft
> deckcraft-cli mcp                       # MCP server over stdio (headless)
> deckcraft-cli mcp --connect 7990        # drive the running app (deckcraft --control 7990)
> ```
> 
> 
> ## Roadmap
> 
> DeckCraft is in **alpha**. It covers **79% of PowerPoint's features by breadth** (92% of the core
> ones, measured) and is about **55% of the way to replacing PowerPoint for real work** (estimated).
> See [ROADMAP.md](ROADMAP.md) for the stage, numbers by dimension and what's next,
> [docs/target-app-parity.md](docs/target-app-parity.md) for the full assessment,
> [docs/gaps.md](docs/gaps.md) for every known shortfall and
> [docs/parity-checklist.md](docs/parity-checklist.md) for the feature-by-feature checklist.
> 
> 
> ## Downloads
> 
> **Download DeckCraft** from GitHub: the [latest release](https://github.com/storytold/deckcraft/releases/latest) has every build listed below, and [all releases](https://github.com/storytold/deckcraft/releases) has earlier versions and their notes. `` in the file names is the version number, and `SHA256SUMS.txt` lists a checksum for every file.
> 
> 
> ### Windows
> 
> | Build | Installer | Portable |
> |---|---|---|
> | x64 (64-bit Intel/AMD) | `deckcraft--windows-x64.msi` | `deckcraft--windows-x64-portable.zip` |
> | arm64 (Snapdragon and other ARM PCs) | `deckcraft--windows-arm64.msi` | `deckcraft--windows-arm64-portable.zip` |
> | x86 (32-bit) | `deckcraft--windows-x86.msi` | `deckcraft--windows-x86-portable.zip` |
> 
> Installers and executables are code-signed.
> 
> **If the app doesn't open on Windows:** the desktop app initializes only DirectX 12 by default.
> Letting wgpu also create an OpenGL instance can crash some graphics drivers (AMD's
> `atio6axx.dll`) before the window appears, so the app would flash in Task Manager and quit.
> `WGPU_BACKEND` overrides the default for troubleshooting (for example `dx12` or `vulkan`). In
> PowerShell, from the folder containing the executable:
> 
> ```powershell
> $env:WGPU_BACKEND = "vulkan"
> & .\deckcraft.exe
> Remove-Item Env:WGPU_BACKEND                     # restore the default for later launches
> ```
> 
> An explicit `gl` override can bring the driver crash back on affected systems. The macOS, Linux
> and web backend defaults are unchanged.
> 
> 
> ### macOS
> 
> | Build | File | Notes |
> |---|---|---|
> | App, universal (Apple silicon + Intel) | `deckcraft--macos-universal.dmg` | Signed and notarized |
> | Command-line tool, universal | `deckcraft-cli--macos-universal.zip` | Signed and notarized |
> 
> 
> ### Linux
> 
> | Format | x86_64

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/storytold/deckcraft) · [官方網站](https://getartcraft.com/apps/slidecraft)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "storytold--deckcraft"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "storytold--deckcraft" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W42" AND file.name != "storytold--deckcraft"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/storytold--deckcraft");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "storytold--deckcraft" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "storytold" AND file.name != "storytold--deckcraft"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/storytold--deckcraft");
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
> const me = dv.page("Repos/storytold--deckcraft");
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
> const me = dv.page("Repos/storytold--deckcraft");
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
> const me = dv.page("Repos/storytold--deckcraft");
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
> const me = dv.page("Repos/storytold--deckcraft");
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

> **2026-10-14** — 首次收錄
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

- [[2026-10-14|2026-10-14]] — 首次收錄，3.0k stars
