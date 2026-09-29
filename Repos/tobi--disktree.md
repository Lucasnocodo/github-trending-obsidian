---
repo: tobi/disktree
url: https://github.com/tobi/disktree
owner: tobi
owner_type: User
language: Rust
license: MIT
description: "A treemap for finding and removing what fills your disk, for Omarchy. Rust + GPUI."
homepage: ""
stars: 1844
stars_per_day: 461
forks: 120
open_issues: 19
created: 2026-09-24
pushed_at: 2026-09-27
first_seen: 2026-09-27
week: "2026-W40"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: "v0.10.1"
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
appearances: 3
next_review: "2026-10-02"
contributor_count: 5
engagement: "low"
issue_close_rate: 50
repo_size_kb: 1982
readme_length: 10000
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-09-27"
star_history: "2026-09-27:1351,2026-09-28:1685,2026-09-29:1844"
tags:
  - github
  - "category/other"
  - "lang/rust"
aliases:
  - "disktree"
  - "tobi/disktree"
---

# disktree

**1.4k** stars · **676** stars/天 · 建立 2 天前 · Rust · MIT

```dataviewjs
const me = dv.page("Repos/tobi--disktree");
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

`v0.10.1`

> [!summary] 一句話摘要
> A treemap for finding and removing what fills your disk, for Omarchy. Rust + GPUI.

## 專案簡介

A treemap for finding and removing what fills your disk, for Omarchy. Rust + GPUI.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/tobi--disktree");
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
> const me = dv.page("Repos/tobi--disktree");
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
| Forks | 89 |
| Open Issues | 6 |
| Issue 解決率 | 50% (6 closed) |
| 最後推送 | 2026-09-27 |
| 建立日期 | 2026-09-24 |
| Repo 大小 | 1.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/tobi/disktree) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members` `version` `edition` `rust-version` `license` `repository` `disktree-core` `anyhow` `rayon` `rustc-hash` `unsafe_code` `unused_lifetimes` `trivial_casts` `trivial_numeric_casts`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 99
>     "Makefile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tobi](https://github.com/tobi) | 63 |
> | [@mgpai22](https://github.com/mgpai22) | 6 |
> | [@ai94iq](https://github.com/ai94iq) | 4 |
> | [@olegius88](https://github.com/olegius88) | 4 |
> | [@btsouth](https://github.com/btsouth) | 4 |

**最新版本**：v0.10.1 — disktree 0.10.1 (2026-09-25)

> [!info]- Release Notes
> ## What's Changed
> * gpui-omarchy 0.1.3, and the quarantine fix for macOS downloads by @tobi in https://github.com/tobi/disktree/pull/22
> * release 0.10.1 by @tobi in https://github.com/tobi/disktree/pull/24
> 
> 
> **Full Changelog**: https://github.com/tobi/disktree/compare/v0.10.0...v0.10.1

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-27 ~ 2026-09-27）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #44 from tobi/mount-dedup-fix

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#38](https://github.com/tobi/disktree/issues/38) | Missing disk/partition selection for a check | 0 | 0 |
> | [#29](https://github.com/tobi/disktree/issues/29) | make install from a fresh clone fails when rustup's default  | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # disktree
> 
> Find what is filling a disk, mark what should go, and remove it — with the
> volume's free space in view the whole time.
> 
> disktree is a treemap for Omarchy. It scans your home directory by default,
> draws every directory as a nested mosaic sized by what it really costs on disk,
> and lets you walk into it with the keyboard or the mouse. Mark as much as you
> like; nothing happens until you review the list and commit, and the permanent
> path always asks first.
> 
> Built with [GPUI](https://gpui-kit.com/) through
> [gpui-omarchy](https://github.com/huacnlee/gpui-omarchy), so it follows your
> Omarchy theme and behaves like the rest of the desktop.
> 
> 
> ## Install
> 
> Download `disktree-*-x86_64-linux.tar.gz` (`aarch64-linux` on ARM) from the
> [latest release](https://github.com/tobi/disktree/releases/latest), unpack
> it, and run `./install.sh` inside (or just copy `disktree` onto your
> `PATH`). Or build it:
> 
> ```sh
> git clone https://github.com/tobi/disktree
> cd disktree
> make install
> ```
> 
> `make install` builds a release binary and puts three things under `~/.local`
> (no root needed):
> 
> - `~/.local/bin/disktree`
> - a desktop entry, so disktree is in the launcher and in a file manager's
>   **Open with** for a directory (it adds a handler; it never becomes the
>   default)
> - an icon
> 
> `sudo make install PREFIX=/usr/local` installs system-wide; `make uninstall`
> removes exactly what was installed.
> 
> On Arch, including Omarchy, disktree is in the AUR:
> [`disktree`](https://aur.archlinux.org/packages/disktree) builds each release
> from source, and
> [`disktree-bin`](https://aur.archlinux.org/packages/disktree-bin) installs
> the release binary:
> 
> ```sh
> yay -S disktree-bin
> ```
> 
> You need Rust 1.97 or newer and a Wayland or X11 session with a GPU that GPUI
> can drive (Vulkan). Distributions often package an older Rust;
> [rustup](https://rustup.rs) installs a current one. The repo pins 1.97 in
> `rust-toolchain.toml`, so with rustup the right toolchain is fetched on the
> first build even if `rustup default` points at something older.
> 
> 
> ## What it measures
> 
> - **Disk usage** by default: `st_blocks × 512`, the number `du` reports and the
>   space that actually comes back when a file is deleted. Apparent size (what
>   `ls -l` shows) is one toggle away.
> - **Hardlinks once.** Two names for one inode cost one file.
> - **Hidden entries included**, because `~/.cache` is often the biggest thing in
>   a home directory. Symlinks are not followed.
> 
> The scan follows [dust](https://github.com/bootandy/dust)'s approach: one rayon
> scope per root, a completion counter per directory so no directory is built
> before its last subdirectory lands, and one bottom-up pass that aggregates sizes
> and removes duplicate hardlinks.
> 
> 
> ## What it refuses to do
> 
> The removal rules live in `crates/disktree-core/src/removal.rs`, and each one is
> tested:
> 
> - only paths under the scanned root can be removed;
> - the filesystem root, the scanned root and your home directory are refused;
> - a mount point is refused, and so is anything with a mount point inside it,
>   since removing it would reach into another filesystem; permanent deletion
>   also stops at a mount boundary rather than descending into one (a btrfs
>   subvolume that is not mounted goes with its directory, as the scan shows
>   it);
> - a directory holding your home directory or a system tree is refused (on
>   macOS `/Users` is on the same volume as `/`, and `/opt` holds
>   `/opt/homebrew`);
> - system trees (`/usr`, `/etc`, `/boot`, `/var/lib`, `/nix/store`,
>   `/gnu/store`, Homebrew's prefix on macOS and Linux, …) are
>   refused even where permissions would allow it: packages own them, and
>   pacman, paccache or `journalctl --vacuum` are the tools;
> - a symlink is unlinked, never followed;
> - nothing is passed through a shell — a file called `-rf` is just a file;
> - selecting a checkout never runs a program it names: git is asked with its
>   fsmonitor, hooks and pager off, and a checkout that defines its own filter
>   drivers is not asked for its status at all ("changes unknown").
> 
> 
> ### macOS
> 
> Download `disktree-*-aarch64-macos.zip` (`x86_64-macos` for an Intel Mac)
> from the [latest release](https://github.com/tobi/disktree/releases/latest),
> unzip it, and drag `disktree.app` into Applications. macOS 11 or newer.
> 
> A release that was not signed and notarized is stopped by Gatekeeper: macOS
> says it "is damaged and can't be opened" or "cannot be verified". The app is
> fine; the browser marked the download as quarantined. Clear the mark once:
> 
> ```sh
> xattr -dr com.apple.quarantine /Applications/disktree.app
> ```
> 
> (Or open it once, then choose **Open Anyway** in System Settings › Privacy &
> Security.)
> 
> Or build it, with Rust 1.97 or newer and Xcode or its Command Line Tools.
> macOS does not come with Rust; install it with [rustup](https://rustup.rs).
> 
> ```sh
> make install     # ~/Applications/disktree.app, and ~/.local/bin/disktree
> make uninstall
> ```
> 
> To see everything, give disktree **Full Disk Access** in System Settings ›
> Privacy & Security (the panel offers a button when it is missing), then
> reopen it. Without it macOS hides Mail, Messages, Safari, other apps' data
> and the Trash, and disktree counts them as unreadable. Started from a
> terminal, it is the terminal that needs the access. macOS also asks once
> each for Desktop, Documents and Downloads.
> 
> What is different from Linux:
> 
> - **Free space** is what `df` reports. Finder's figure is larger: it counts
>   purgeable space (caches and local snapshots macOS will clear on its own).
> - **Cloned files** (copies APFS shares blocks between, as Finder's Duplicate
>   makes) are each counted in full, so a total can exceed what deleting them
>   frees.
> - **Time Machine's local snapshots** are not files and do not appear; they
>   are part of the gap between the scan and the disk's used space.
> - **Cloud-only folders** (iCloud Drive, Dropbox and the like, evicted to the
>   server) are not opened, so a scan never downloads them.
> 
> To sign and notarize a build for others, with a Developer ID certificate in
> the keychain and credentials saved by `xcrun notarytool store-credentials`:
> 
> ```sh
> NOTARY_PROFILE= cargo xtask bundle \
>   --sign "Developer ID Application: Name (TEAMID)" --notarize
> ```
> 
> 
> ### Windows
> 
> On Windows 10 or 11, download `disktree-*-x86_64-windows.zip`
> (`aarch64-windows` on ARM) from the same release, unpack it anywhere and run
> `disktree.exe`. Or build it with Rust 1.97 or newer, from
> [rustup](https://rustup.rs), and the MSVC toolchain (Visual Studio Build
> Tools, C++ workload):
> 
> ```powershell
> git clone https://github.com/tobi/disktree
> cd disktree
> cargo build --release    # target\release\disktree.exe
> ```
> 
> See [On Windows](#on-windows) for what differs there.
> 
> 
> ## Use
> 
> ```sh
> disktree            # scan the home directory
> disktree --disk     # the whole disk it lives on
> disktree ~/src      # or any directory
> disktree --help     # options: apparent size, follow links, skip hidden, …
> ```
> 
> 
> ### The screen
> 
> - **Top:** the trail from `/`, then what is measured — **Size**, **Files** or
>   **Age**, **Hidden files**, **Apparent size**, and the depth drawn. In the
>   tree a crumb goes there, and its ▾ lists its siblings, largest first with
>   their share and size, to jump sideways (arrows and Enter work too). Above
>   the scanned root a crumb is dimmer, and clicking it widens the scan to
>   there (see below).
> - **Under it:** the scan totals, the filter when one is typed, and the legend.
> - **Mosaic:** colour is the *kind* of data — code, agent scratch,
>   toolchains, synced files, git, media, documents, caches — at one muted
>   level, lighter with depth. A diagonal hatch is space that can be had back
>   (caches, sync history, package stores, build output), independent of
>   colour. Top-level directories carry a strip of their colour and a name
>   band; deeper open directories a slim label row. In **Age** mode colour is
>   the last write instead, from this week to older.
> - **Panel:** the selection (its size set large, share of the scan, files,
>   last write, and for a checkout what git says — c

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[ArasTey--lunel|ArasTey/lunel]]

[GitHub](https://github.com/tobi/disktree)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "tobi--disktree"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "tobi--disktree" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W40" AND file.name != "tobi--disktree"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/tobi--disktree");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "tobi--disktree" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "tobi" AND file.name != "tobi--disktree"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/tobi--disktree");
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
> const me = dv.page("Repos/tobi--disktree");
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
> const me = dv.page("Repos/tobi--disktree");
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
> const me = dv.page("Repos/tobi--disktree");
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
> const me = dv.page("Repos/tobi--disktree");
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

- [[2026-09-29|2026-09-29]] — 再次上榜，1.8k stars
- [[2026-09-28|2026-09-28]] — 再次上榜，1.7k stars
- [[2026-09-27|2026-09-27]] — 首次收錄，1.4k stars
