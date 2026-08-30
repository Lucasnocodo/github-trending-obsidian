---
repo: themartiano/try-omarchy
url: https://github.com/themartiano/try-omarchy
owner: themartiano
owner_type: User
language: Shell
license: MIT
description: "Run Omarchy on MacOS without any setup."
homepage: ""
stars: 901
stars_per_day: 150
forks: 39
open_issues: 11
created: 2026-08-23
pushed_at: 2026-08-29
first_seen: 2026-08-30
week: "2026-W36"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: "v0.2.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-30
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-09-06"
contributor_count: 5
engagement: "low"
issue_close_rate: 45
repo_size_kb: 3334
readme_length: 8847
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-08-30"
star_history: "2026-08-30:901"
tags:
  - github
  - "category/other"
  - "lang/shell"
  - "topic/aarch64"
  - "topic/apple_silicon"
  - "topic/archlinux"
  - "topic/arm"
  - "topic/arm64"
aliases:
  - "try-omarchy"
  - "themartiano/try-omarchy"
---

# try-omarchy

**901** stars · **150** stars/天 · 建立 6 天前 · Shell · MIT

```dataviewjs
const me = dv.page("Repos/themartiano--try-omarchy");
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

`v0.2.0`

`aarch64` `apple-silicon` `archlinux` `arm` `arm64` `community` `linux` `macos` `omarchy` `qemu` `virtualization`

> [!summary] 一句話摘要
> Run Omarchy on MacOS without any setup.

## 專案簡介

Run Omarchy on MacOS without any setup.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/themartiano--try-omarchy");
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
> const me = dv.page("Repos/themartiano--try-omarchy");
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
| Forks | 39 |
| Open Issues | 11 |
| Issue 解決率 | 45% (9 closed) |
| 最後推送 | 2026-08-29 |
| 建立日期 | 2026-08-23 |
| Repo 大小 | 3.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/themartiano/try-omarchy) |
| Topics | `aarch64` `apple-silicon` `archlinux` `arm` `arm64` `community` `linux` `macos` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Shell" : 40
>     "Swift" : 37
>     "Python" : 22
>     "Makefile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@themartiano](https://github.com/themartiano) | 236 |
> | [@pantulis](https://github.com/pantulis) | 2 |
> | [@rlimberger](https://github.com/rlimberger) | 2 |
> | [@ijt](https://github.com/ijt) | 1 |
> | [@pfelrodrigues](https://github.com/pfelrodrigues) | 1 |

**最新版本**：v0.2.0 (2026-08-27)

> [!info]- Release Notes
> This release brings a smoother experience, with the most requested features and fixes such as clipboard and folder sharing, Hyprland default config, ASCII animations and package installation working.
> 
> # Features
> * Omarchy updated to `4.0.1` (#19)
> * Shared clipboard, bidirectional, duplicate safe (#8)
> * Host-guest shared directory (#9, #21)
> 
> # Fixes
> * Fix AUR packages missing and installs failing (#28, #23)
> * Fix ASCII animations and screensaver (#31)
> * Fix missing window gaps and "floating" windows (#1)
> * Start menu UI alignment and text (#15)
> 
> ## Dev
> * Updated pinned package versions (#6, #27)
> * GitHub CI workflow for PRs (#14)
> * `make` cleanup commands (#16)
> * Smarter builds, reuse previous outputs where possible (#17)
> 
> ## New Contributors 🎉
> * @pfelrodrigues made their first contribution in https://github.com/themartiano/try-omarchy/pull/3
> * @ijt made their first contribution in https://github.com/themartiano/try-omarchy/pull/6
> * @rlimberger made their first contribution in https://github.com/themartiano/try-omarchy/pull/8
> * @sava-vidakovic made their first contribution in https://github.com/themartiano/try-omarchy/pull/27
> 
> ___
> 
> The new automatic updater is not yet working reliably enough, so `v0.1.0` disks won't be automatically migrated to `v0.2.0`.
> If you have files that need to be ported, manually export them and reimport on `v0.2.0`.
> 

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-28 ~ 2026-08-29）
> **活躍天數** 2 天 · **最新 commit** Fix rounded border coverage under VirGL (#55)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/themartiano/try-omarchy/issues/18) | Some super space “commsndd “ don't work? | 1 | 12 |
> | [#7](https://github.com/themartiano/try-omarchy/issues/7) | [Feature Request] Enable Nested Virtualization on M3+ Macs | 1 | 1 |
> | [#57](https://github.com/themartiano/try-omarchy/issues/57) | "target not found" when installing any package | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Try Omarchy
> 
> Run the upstream [Omarchy](https://github.com/basecamp/omarchy) desktop as a native, hardware-accelerated app on an Apple Silicon Mac.
> 
> Try Omarchy packages a project-built ARM64 Arch Linux image configured with Omarchy Quattro, a QEMU runtime using Apple Hypervisor Framework, and a small Swift/AppKit launcher into one macOS app. The image is built from pinned Arch Linux ARM packages and a pinned revision of the upstream Omarchy source. Temporary fixes carried ahead of the next upstream release are enumerated with strict hashes in the guest build spec and artifact provenance.
> 
> Try Omarchy is not official or affiliated with Omarchy.
> 
> ## Highlights
> 
> - Hardware-accelerated ARM64 virtualization and VirGL graphics
> - Resizable native window with automatic guest resolution and HiDPI scale updates
> - Mac audio input/output selection inside Omarchy, with live routing and system-default fallback
> - Two-way clipboard sharing for text and PNG images between macOS and Omarchy
> - One optional shared Mac folder, available inside Omarchy under the same name (`~/Work` stays `~/Work`)
> - Loopback-only TCP and UDP port forwarding from the Mac into Omarchy
> 
> > **Current limitation:** Video decoding is CPU-only, so playback can be slow, especially at high resolutions. An improved video path is in development.
> 
> ## Quick start
> 
> 1. Open [Releases](https://github.com/themartiano/try-omarchy/releases) and download the latest signed and notarized `.dmg`.
> 2. Open the DMG and drag **Try Omarchy** to **Applications**.
> 3. Launch **Try Omarchy** from Applications.
> 
> Every launch begins at the start menu. **Immersive** is on by default and its caption explains how to leave Full Screen. Turn it off to keep Omarchy full screen while letting the Mac menu bar and Dock appear at the screen edges. Accessibility enables Mac Command-to-guest-Super shortcuts; microphone access is optional. The first launch takes longer while the app prepares Linux and starts Omarchy's account provisioning.
> 
> Restarting from inside Omarchy reboots the guest in the same Try Omarchy app.
> Shutting down Omarchy closes the app and leaves it closed.
> 
> ## Clipboard sharing
> 
> Copy and paste work in both directions as soon as you sign in to Omarchy: text
> and PNG images copied on the Mac appear in the Omarchy clipboard, and content
> copied in Omarchy lands on the Mac pasteboard. Nothing is transferred until
> something is copied.
> 
> ## Sharing a folder with the Mac
> 
> Folder sharing is off until you pick a folder. Use **Choose…** next to
> **Shared folder** on the start menu to select one Mac folder; Omarchy links it
> into its home under the same name (`~/Work` on the Mac becomes `~/Work` in
> Omarchy) with full read and write access, so choose a folder you intend Linux
> software to modify. The whole home folder, `~/Library`, and system directories
> cannot be shared. **Turn Off** keeps the choice but stops exporting it on the
> next launch; Omarchy then removes the link and gives back any standard folder
> such as `~/Documents` that the link had taken over. The share belongs to the
> first Omarchy account created during
> provisioning. Additional guest accounts can reach the same share, with each
> entry's normal Unix permission bits deciding whether they can modify it.
> 
> ## Forwarding ports to Omarchy
> 
> Use **Configure…** next to **Port forwarding** on the start menu to map a Mac
> localhost port to a service port in Omarchy. Each mapping can use TCP or UDP;
> the same Mac port may be used once for each protocol. Forwarded ports bind only
> to `127.0.0.1`, so other devices on the network cannot connect to them. The
> service inside Omarchy must listen on `0.0.0.0` or the guest network interface,
> not only on the guest's own localhost.
> 
> The reverse direction does not need a mapping. From Omarchy, connect to
> `10.0.2.2:` to reach a service running on the Mac.
> 
> ## Requirements
> 
> - Apple Silicon Mac (`arm64`)
> - macOS 15 or newer
> - At least 8 GB free initially
> 
> ## Data and updates
> 
> Normal launches keep one persistent VM under `~/Library/Application Support/Try Omarchy/VM/v1`. Removing the app does not remove this data. The start menu can reset it, and requires confirmation before replacing a disk that is incompatible with a new factory guest build.
> 
> ## Development requirements
> 
> - Xcode command-line tools with Swift 6
> - Python 3
> - `pkg-config` (Homebrew is the simplest way to install it)
> - A running Docker-compatible engine that supports privileged `linux/arm64`
>   containers
> - Roughly 20 GB free for guest, runtime, caches, and assembled output
> 
> Install the one Homebrew build tool with:
> 
> ```sh
> brew install pkg-config
> ```
> 
> `make doctor` performs the basic preflight. `make runtime` downloads a
> checksum-pinned `arm64_sequoia` dependency set, builds QEMU for macOS 15.0,
> and rejects any runtime image that raises that minimum or strongly imports an
> API unavailable on the declared platform. Installed Homebrew library versions
> are never copied into the app.
> 
> ## Build and run
> 
> For a first full build and launch:
> 
> ```sh
> make build run
> ```
> 
> The first build downloads pinned sources, assembles a multi-gigabyte guest, and
> compiles QEMU, so it can take a while. `make build` includes the basic toolchain
> check. Later builds hash the effective inputs and validate the existing outputs,
> then rebuild only the guest, runtime, or app components that changed. To bypass
> that cache deliberately, run `make build FORCE=1` (or add `FORCE=1` to an
> individual component command).
> 
> Artifacts created before their `.build/state/` record exists are rebuilt once;
> the cache never adopts an output whose successful inputs it did not observe.
> 
> Launching also ensures that the guest, runtime, and native app are current, so
> the normal follow-up command is:
> 
> ```sh
> make run
> ```
> 
> Run the complete contract and native test suite with:
> 
> ```sh
> make test
> ```
> 
> Run `make help` for component builds, persistent-storage reset, ephemeral mode, and cleanup commands.
> 
> To reclaim development build space, run:
> 
> ```sh
> make clean
> ```
> 
> This removes all repository build output, the native and guest build caches,
> and Try Omarchy's project-scoped Docker builder image and work volumes. It does
> not touch a developer's persistent VM.
> 
> For a complete local reset, first quit Try Omarchy and then run:
> 
> ```sh
> make clean-all
> ```
> 
> The deep cleanup also permanently deletes the current user's Try Omarchy VM
> disks and app state, plus stale Try Omarchy build and test directories in the
> macOS temporary directories. It only selects Docker resources and temporary
> paths owned by this project; it does not run a global Docker or system prune.
> To prevent accidental data loss, the command requires an interactive terminal
> and only proceeds after the developer types `clean-all` at the confirmation
> prompt.
> 
> ## Packaging and releases
> 
> All generated output has one predictable home:
> 
> ```text
> dist/
> ├── Try Omarchy.app
> ├── TryOmarchy.dmg        # after make package or make release
> └── guest/                # verified guest build artifacts
> ```
> 
> Both DMG targets create distributable artifacts:
> 
> - `make package` rebuilds the app, Developer ID-signs the app and DMG,
>   notarizes the DMG with Apple, and staples the notarization tickets. It uses
>   `PACKAGE_SIGN_IDENTITY` and `PACKAGE_NOTARY_PROFILE`, which default to the
>   configured release credentials, and fails instead of producing an
>   unnotarized fallback.
> - `make release` performs the same signing and notarization workflow with the
>   release-specific credential variables.
> 
> Maintainers should follow [`docs/releasing.md`](docs/releasing.md) for the full build, test, signing, license, corresponding-source, and verification checklist.
> 
> ## Repository layout
> 
> ```text
> .
> ├── Makefile                 public build interface
> ├── macos/                   Swift launcher and QEMU/HVF runtime builder
> ├── guest/                   reproducible ARM64 factory-image builder
> ├── docs/                    architecture and release documentation
> ├── dist/                    generated output (ignored)
> ├── CONTRIBUTING.md
> ├── 

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[CopilotKit--OpenBot|CopilotKit/OpenBot]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]]

[GitHub](https://github.com/themartiano/try-omarchy)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "themartiano--try-omarchy"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Shell" AND file.name != "themartiano--try-omarchy" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W36" AND file.name != "themartiano--try-omarchy"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/themartiano--try-omarchy");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "themartiano--try-omarchy" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "themartiano" AND file.name != "themartiano--try-omarchy"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/themartiano--try-omarchy");
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
> const me = dv.page("Repos/themartiano--try-omarchy");
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
> const me = dv.page("Repos/themartiano--try-omarchy");
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
> const me = dv.page("Repos/themartiano--try-omarchy");
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
> const me = dv.page("Repos/themartiano--try-omarchy");
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

> **2026-08-30** — 首次收錄
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

- [[2026-08-30|2026-08-30]] — 首次收錄，901 stars
