---
repo: storytold/craft-launcher
url: https://github.com/storytold/craft-launcher
owner: storytold
owner_type: Organization
language: Rust
license: Apache-2.0
description: "The Craft App Launcher"
homepage: ""
stars: 2702
stars_per_day: 540
forks: 897
open_issues: 309
created: 2026-10-09
pushed_at: 2026-10-15
first_seen: 2026-10-15
week: "2026-W42"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.4.1"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-15
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-18"
contributor_count: 5
engagement: "high"
issue_close_rate: 15
repo_size_kb: 4840
readme_length: 7977
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-15"
star_history: "2026-10-15:2702"
tags:
  - github
  - "category/other"
  - "lang/rust"
  - org
aliases:
  - "craft-launcher"
  - "storytold/craft-launcher"
---

# craft-launcher

**2.7k** stars · **540** stars/天 · 建立 5 天前 · Rust · Apache-2.0

```dataviewjs
const me = dv.page("Repos/storytold--craft-launcher");
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

`ORG` `v0.4.1`

> [!summary] 一句話摘要
> The Craft App Launcher

## 專案簡介

The Craft App Launcher

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/storytold--craft-launcher");
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
> const me = dv.page("Repos/storytold--craft-launcher");
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
| Forks | 897 |
| Open Issues | 309 |
| Issue 解決率 | 15% (53 closed) |
| 最後推送 | 2026-10-15 |
| 建立日期 | 2026-10-09 |
| Repo 大小 | 4.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/storytold/craft-launcher) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members` `version` `edition` `license` `rust-version` `repository` `unsafe_code` `dbg_macro` `todo` `artcraft-launcher-core` `artcraft-launcher-ui-egui` `artcraft-launcher-native` `egui` `eframe`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 93
>     "Shell" : 4
>     "PowerShell" : 2
>     "Python" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@echelon](https://github.com/echelon) | 36 |
> | [@itrycodinganditsbad](https://github.com/itrycodinganditsbad) | 12 |
> | [@dylanmtaylor](https://github.com/dylanmtaylor) | 11 |
> | [@Nael-Nathanael](https://github.com/Nael-Nathanael) | 5 |
> | [@MarekSpodBiedry](https://github.com/MarekSpodBiedry) | 4 |

**最新版本**：v0.4.1 — ArtCraft Launcher v0.4.1 (2026-10-13)

> [!info]- Release Notes
> ## What's Changed
> * Add FigCraft; release 0.4.1 by @echelon in https://github.com/storytold/craft-launcher/pull/313
> 
> 
> **Full Changelog**: https://github.com/storytold/craft-launcher/compare/v0.4.0...v0.4.1

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-12 ~ 2026-10-15）
> **活躍天數** 4 天 · **最新 commit** fix(update): a Flatpak-installed launcher gets the bundle download link, not the AppImage (#370)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#33](https://github.com/storytold/craft-launcher/issues/33) | [Feature Request] Support Downloading Portable Versions of A | 12 | 7 |
> | [#183](https://github.com/storytold/craft-launcher/issues/183) | [App Proposal] PainterCraft: An open-source Substance 3D Pai | 8 | 1 |
> | [#93](https://github.com/storytold/craft-launcher/issues/93) | [Suggestion] Choose folder for installed apps, either indivi | 7 | 2 |
> | [#172](https://github.com/storytold/craft-launcher/issues/172) | [feature request] Add SolveCraft (now SolidCraft) to the lau | 6 | 0 |
> | [#157](https://github.com/storytold/craft-launcher/issues/157) | [feat] Ability to set a Custom Installation Folder | 5 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> ArtCraft Launcher
> 
>   One place to install, update and open every app in the Craft App Suite, rebuilt in pure Rust.
>   PhotoCraft, LightCraft, FilmCraft, DesignCraft, VectorCraft, PdfCraft, EffectCraft, WordCraft,
>   DeckCraft, GridCraft, CADCraft, SoundCraft and FigCraft: the right build for your computer, kept up to date.
> 
>   
>   
>   
>   
> 
>   
> 
>   Download ArtCraft Launcher ·
>   ArtCraft ·
>   The Craft App Suite
> 
> > [!NOTE]
> > **ArtCraft is a community of artists from all walks of life.** Painters, photographers,
> > filmmakers, illustrators, designers, animators, hobbyists, and people who picked up a pencil
> > last week. If you make things, you're one of us. **[Come say hi on Discord](https://discord.gg/artcraft).**
> 
>   What it does ·
>   Features ·
>   Downloads ·
>   Build from source ·
>   Craft App Suite ·
>   Discord
> 
>   
> 
>   
>   Switch between the grid and a sortable table.
> 
> 
> ## Where apps are installed
> 
> ArtCraft Launcher installs each app where your system normally keeps applications, using the
> app's official release package, so an app installed by the launcher is the same as one you
> installed by hand (and the launcher finds apps you installed yourself):
> 
> | System | Where | How |
> |---|---|---|
> | macOS | `/Applications/.app` | Copied from the signed, notarized release DMG |
> | Windows | `C:\Program Files\` | The release MSI, through Windows Installer (with Start menu entry and Apps & features entry) |
> | Linux | `/usr/bin`, `/usr/share/applications` | The release `.deb` (apt) or `.rpm` (dnf, zypper), with your system's password prompt. Without those, a Flatpak, or an AppImage in `~/Applications` |
> | Linux, inside the launcher's Flatpak, with no Flatpak on the host | `~/.var/app/ai.storyteller.artcraft-launcher/data/artcraft-launcher/apps/` | The release tarball, unpacked into the launcher's own folder and run inside the same sandbox, with its settings in a `home/` folder beside it. Nothing is installed on the host, and each app's configuration stays in the sandbox |
> | FreeBSD | `/usr/local` | The release tree, with a password prompt (polkit); `~/.local` when polkit isn't installed |
> 
> ArtCraft Launcher keeps itself current too: when a new version is out, **Update and restart**
> downloads it, verifies it, puts it where this copy is installed (the `.app`, the Windows Installer
> package or portable folder, the AppImage, or the `.deb`/`.rpm`) and reopens it.
> 
> Updates use the same format an app was installed with. Every download is checked against the
> release's published SHA-256 before it is installed, and a running app is never replaced.
> 
> The launcher writes its log to `logs/artcraft-launcher.log` in its data folder
> (`~/.local/share/artcraft-launcher` on Linux, `~/Library/Application Support/ArtCraft Launcher`
> on macOS, `%LOCALAPPDATA%\ArtCraft Launcher` on Windows, `ArtCraftLauncherData` beside the
> portable zip's executable) and keeps the previous two runs as `artcraft-launcher.1.log` and
> `artcraft-launcher.2.log`. `RUST_LOG` changes what it records (`debug`, `info,zbus=warn`, …).
> 
> 
> ### Installing your own builds
> 
> To install and update the Craft apps from checkouts on your machine instead of GitHub, clone them
> next to this repo (`../photocraft`, `../wordcraft`, …) and run:
> 
> ```sh
> cargo xtask local sync      # git pull every app, build and package each new version into ../local-mirror
> cargo xtask local serve     # serve the builds and a release feed on http://127.0.0.1:8787/
> ARTCRAFT_LAUNCHER_DOWNLOAD_BASE=http://127.0.0.1:8787/ cargo run --release -p artcraft-launcher --features local-mirror
> ```
> 
> Run `sync` again whenever you want updates, or let the server do it: `cargo xtask local serve
> --sync-every 1h` pulls and builds on that interval while it serves. An app is rebuilt when its
> checkout's version isn't in the mirror yet (`--rebuild` forces it), and the launcher's next check
> picks it up. Add `--every-commit` to build every new commit instead, as a dev version between
> releases (`0.4.0` builds as `0.4.1-dev.`), which the launcher offers as an update. While
> `ARTCRAFT_LAUNCHER_DOWNLOAD_BASE` is set (loopback addresses only), the launcher asks only the
> mirror, never GitHub. Only builds with the `local-mirror` feature read it; releases never have it. `cargo xtask local help` lists the options (`--only`, `--no-pull`, `--arch`, …).
> 
> New contributors and AI agents: start with [`AGENTS.md`](AGENTS.md). Release packaging lives in
> [`packaging/`](packaging/) and [`.github/workflows/release.yml`](.github/workflows/release.yml).
> 
> > [!IMPORTANT]
> > **Status:** ArtCraft Launcher is new and in early alpha. Expect rough edges, and please file
> > issues (include your OS, which app you were installing and the launcher's log file) or tell us on
> > [Discord](https://discord.gg/artcraft).
> 
> 
> ## What it does
> 
> The Craft apps each ship their own builds for every platform. ArtCraft Launcher saves you from
> hunting through a dozen release pages: it lists every app in the suite, shows which ones you have
> and which version, installs the right build for your operating system and processor, and tells
> you when an update is out. It is a small native app that can sit in your menu bar or system tray.
> 
> 
> ## Features
> 
>   
>     
>       📦 Install in one click
>       Picks the right download for your OS and CPU (DMG, MSI, AppImage, .deb, .rpm and more), checks it against the release's SHA-256 checksums and installs it.
>     
>     
>       🔄 Stay up to date
>       Checks each app's GitHub releases and updates the ones you have. A notification tells you when there's something new.
>     
>     
>       🧭 Always at hand
>       Opens any Craft app from one window, or from the tray and menu-bar icon. Native egui, no Electron, no web view.
>     
>   
> 
> The web version shows the same catalog in the browser, with the latest download for each app.
> 
> 
> ## Interface languages
> 
> The interface is in English, Brazilian Portuguese (Português (Brasil)), Czech (Čeština), French
> (Français), German (Deutsch), Hungarian (Magyar), Japanese (日本語), Polish (Polski), Russian
> (Русский), Simplified Chinese (简体中文) or Spanish (Español). **Auto**, the default, follows the
> system or browser language; **Settings → Language** picks one and switches at once, and the choice
> is kept between runs. Czech locales (`cs-CZ`, `cs_CZ.UTF-8`…) select Czech, German ones (`de-DE`,
> `de-AT`, `de-CH`, `de_DE.UTF-8`…) German, French ones (`fr-FR`, `fr-CA`…) French, Hungarian ones
> (`hu`, `hu-HU`, `hu_HU.UTF-8`…) Hungarian, Japanese ones (`ja`, `ja-JP`, `ja_JP.UTF-8`…) Japanese,
> Polish ones (`pl`, `pl-PL`, `pl_PL.UTF-8`) Polish, Spanish ones (`es-ES`, `es-MX`, `es-419`…)
> Spanish, and Portuguese ones (`pt-BR`, and `pt-PT` too, for now) Brazilian Portuguese. Simplified
> Chinese locales (`zh-CN`, `zh-SG`, `zh-Hans`, and POSIX forms such as `zh_CN.UTF-8`) select
> Chinese; Traditional Chinese ones don't. To try a language without changing the setting, start the
> desktop app with `ARTCRAFT_LAUNCHER_LOCALE=pt-BR`, or add `?lang=ru` to the web address.
> 
> The CJK languages are drawn with the system's own CJK font (Hiragino Sans or PingFang on macOS,
> Yu Gothic, Meiryo or Microsoft YaHei on Windows, Noto Sans CJK, IPA, Takao or WenQuanYi on Linux and
> FreeBSD). Where the system has no font for one, and in the web version, the interface stays in
> English and Settings says why. Product names and release notes stay as published; text without a
> translation falls back to English.
> 
> 
> ## Build from source
> 
> You need a recent stable Rust (1.90 or newer). On Linux, install the windowing headers first
> (Debian/Ubuntu: `sudo apt install libxkbcommon-dev libwayland-dev libx11-dev libxrandr-dev libxi-dev libgl1-mesa-dev`).
> 
> ```sh
> git clone https://github.com/storytold/craft-launcher
> cd craft-launcher
> cargo run --release -p artcraft-launcher   # the desktop app
> cargo xtask ci                             # fmt, clippy, tests and the wasm check
> ```
> 
> The web version builds with [trunk](https://trunkrs.dev/):
> 
> ```sh
> rustup target add wasm32-unknown-unknown
> cd apps/artcraft-launcher-web && trunk serve
> ```
> 
> 

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/storytold/craft-launcher)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "storytold--craft-launcher"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "storytold--craft-launcher" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W42" AND file.name != "storytold--craft-launcher"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/storytold--craft-launcher");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "storytold--craft-launcher" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "storytold" AND file.name != "storytold--craft-launcher"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/storytold--craft-launcher");
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
> const me = dv.page("Repos/storytold--craft-launcher");
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
> const me = dv.page("Repos/storytold--craft-launcher");
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
> const me = dv.page("Repos/storytold--craft-launcher");
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
> const me = dv.page("Repos/storytold--craft-launcher");
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

> **2026-10-15** — 首次收錄
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

- [[2026-10-15|2026-10-15]] — 首次收錄，2.7k stars
