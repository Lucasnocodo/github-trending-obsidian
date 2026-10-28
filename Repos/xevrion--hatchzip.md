---
repo: xevrion/hatchzip
url: https://github.com/xevrion/hatchzip
owner: xevrion
owner_type: User
language: Rust
license: Apache-2.0
description: "Extract huge archives in place: the archive shrinks as your files hatch, so you only need room for the output. ZIP, 7z, tar, split archives."
homepage: "https://hatchzip.dev"
stars: 2212
stars_per_day: 369
forks: 66
open_issues: 4
created: 2026-10-21
pushed_at: 2026-10-28
first_seen: 2026-10-25
week: "2026-W44"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.1.3"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-25
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-10-31"
contributor_count: 3
engagement: "low"
issue_close_rate: 14
repo_size_kb: 2288
readme_length: 10000
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-25"
star_history: "2026-10-25:1757,2026-10-26:1967,2026-10-27:2071,2026-10-28:2212"
tags:
  - github
  - "category/other"
  - "lang/rust"
  - "topic/7z"
  - "topic/archive"
  - "topic/cli"
  - "topic/crash_safe"
  - "topic/disk_space"
aliases:
  - "hatchzip"
  - "xevrion/hatchzip"
---

# hatchzip

**1.8k** stars · **586** stars/天 · 建立 3 天前 · Rust · Apache-2.0

```dataviewjs
const me = dv.page("Repos/xevrion--hatchzip");
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

`v0.1.3`

`7z` `archive` `cli` `crash-safe` `disk-space` `extract` `extractor` `gui` `rust` `tar` `unzip` `zip`

> [!summary] 一句話摘要
> Extract huge archives in place: the archive shrinks as your files hatch, so you only need room for the output. ZIP, 7z, tar, split archives.

## 專案簡介

Extract huge archives in place: the archive shrinks as your files hatch, so you only need room for the output. ZIP, 7z, tar, split archives.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/xevrion--hatchzip");
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
> const me = dv.page("Repos/xevrion--hatchzip");
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
| Forks | 43 |
| Open Issues | 6 |
| Issue 解決率 | 14% (1 closed) |
| 最後推送 | 2026-10-24 |
| 建立日期 | 2026-10-21 |
| 官方網站 | [Link](https://hatchzip.dev) |
| Repo 大小 | 2.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/xevrion/hatchzip) |
| Topics | `7z` `archive` `cli` `crash-safe` `disk-space` `extract` `extractor` `gui` |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members` `version` `edition` `rust-version` `license` `repository` `homepage` `hatchzip-core` `anyhow` `serde` `serde_json` `sevenz-rust2` `tar` `tempfile`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 87
>     "Slint" : 4
>     "Shell" : 3
>     "HTML" : 2
>     "Python" : 1
>     "PowerShell" : 1
>     "Inno Setup" : 1
>     "CSS" : 1
>     "Ruby" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@xevrion](https://github.com/xevrion) | 93 |
> | [@011010](https://github.com/011010) | 4 |
> | [@kodejeet](https://github.com/kodejeet) | 1 |

**最新版本**：v0.1.3 — HatchZip v0.1.3 (2026-10-24)

> [!info]- Release Notes
> ## Highlights
> 
> - **RAR support.** RAR 5 and RAR 4, single files and volume sets (`.part1.rar`, `.rar`/`.r00`), with passwords. Space is freed file by file, the same way as ZIP. Solid RAR archives extract with the archive kept.
> - **Extract and keep the archive.** A normal extraction that removes nothing: the "Remove the archive during extraction" option in the app, "Extract here (keep archive)" in the right-click menu, and `--keep-archive` on the command line.
> - **Several archives in one run.** `hatchzip extract a.zip b.7z c.tar.gz`, and several archives selected in the right-click menu on Linux.
> - **Opening large archives is much faster.** A 50 GB ZIP now opens in 0.01 s instead of reading the whole archive first (42 s). Long opens show their progress.
> 
> ## Fixes
> 
> - Archives with a link where a folder is needed, or with duplicate ZIP entry names, are refused before anything is touched (#10, #11).
> - Paths and names longer than the system allows are refused before anything is touched, instead of failing partway through.
> - A clearer diagnosis when a file system cannot free space inside a file, including FAT32 on macOS 27.
> - "Open another archive" after a completed extraction.
> 
> ## Downloads
> 
> Every file comes with a SHA-256 checksum and signed build provenance. To check a download:
> 
> ```sh
> gh attestation verify HatchZip-x64-setup.exe --repo xevrion/hatchzip
> ```
> 
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-24 ~ 2026-10-24）
> **活躍天數** 1 天 · **最新 commit** docs: homebrew and scoop are live, winget in review

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/xevrion/hatchzip/issues/13) | macOS Homebrew Cask Distribution `enhancement` | 1 | 0 |
> | [#11](https://github.com/xevrion/hatchzip/issues/11) | Duplicate ZIP entries are silently collapsed to the last one | 0 | 0 |
> | [#10](https://github.com/xevrion/hatchzip/issues/10) | Link path colliding with a folder dead-ends extraction after | 0 | 0 |
> | [#8](https://github.com/xevrion/hatchzip/issues/8) | FAT32 USB on macOS 27: extraction, resume and throughput res | 0 | 0 |
> | [#5](https://github.com/xevrion/hatchzip/issues/5) | Approach: .tar.xz in-place extraction with per-block resume  | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> HatchZip
> 
>   Extract huge archives in place. The archive shrinks as your files hatch,
>   so you only need free space for the output, not for the output and the archive.
> 
>   Installation |
>   Usage |
>   Safety |
>   How it works |
>   Contributing
> 
>   
>   
>   
> 
>   
> 
> A 180 GB game download that unpacks to 200 GB needs 380 GB of disk with WinRAR, 7-Zip or `unzip`, because the archive and everything extracted from it have to exist at the same time. HatchZip needs a little over 200 GB. It extracts the archive from the end and cuts each finished part off the archive file as it goes, so the space the archive gives back is reused for the next files.
> 
> It checks that the extraction will fit before it changes anything, keeps a safety margin of free space the whole way through, and can be stopped or crash at any moment and pick up where it left off. It reads ZIP, 7z, tar, `.tar.gz`, RAR volume sets and split archives.
> 
> 
> ## Installation
> 
> 
> ## Usage
> 
> 
> ## Highlights
> 
> The same 200 MB of game data (21 files), packed by the real tools, extracted on a 220 MiB disk with about 50 MB free:
> 
> | Archive | `unzip` / 7-Zip | HatchZip |
> |---|---|---|
> | ZIP, 180 MB | `unzip` ran out of space at file 6 of 21 | Finished, every file byte-identical |
> | 7z from 7-Zip 25.01, `-ms=20m` (10 solid blocks) | Needs 380 MB | Finished in 0.64 s, every file byte-identical |
> | 7z split into 5 volumes of 40 MB | Needs 380 MB | Finished; volumes deleted one at a time, peak 210 MB used |
> | tar from GNU tar, 200 MB | Needs 400 MB | Finished in 0.12 s, every file byte-identical |
> | 7z from 7-Zip with default settings (1 solid block) | Needs 380 MB | Refused before touching anything: one solid block can't be freed until all of it is out, so it needs 200 MB free |
> 
> | | Result |
> |---|---|
> | ZIP extraction speed, same data | 0.25 to 0.35 s, against 1.48 to 1.50 s for `unzip` 6.00, including an fsync `unzip` skips |
> | Crash safety | Killed at both unsafe moments of a batch at many points of each format's run; every resume finished with identical output |
> | Works on | Any filesystem that can shrink a file: ext4, btrfs, XFS, NTFS, APFS, and also exFAT and FAT32 USB drives |
> 
> Measured on Fedora 43, Intel Core i7-14700HX, SK Hynix NVMe SSD, warm page cache; the disk-space runs used a 220 MiB tmpfs to stand in for a full laptop disk, the speed runs ext4. Speed comes from decompressing files in parallel, so an archive holding one giant file extracts at the speed of a single core.
> 
> The extra space HatchZip needs beyond the output is about the size of the largest single unit it can free at once: one file for ZIP and tar, one solid block for 7z. On filesystems that can punch holes (ext4, XFS, btrfs, tmpfs; NTFS and APFS not yet verified), a large file stored or deflated in a ZIP, or in a tar, frees its archive bytes every 256 MiB while it is extracted: a ZIP holding one 600 MiB stored file extracted on a 950 MiB tmpfs with 367 MB free, where it needed 629 MB before. `hatchzip check` computes the exact figure for any archive.
> 
> 
> ### Get it
> 
> > [!IMPORTANT]
> > HatchZip is only distributed from this repository's [releases](https://github.com/xevrion/hatchzip/releases) and its site, [hatchzip.dev](https://hatchzip.dev). Other sites using the name, such as hatchzip.com, are not affiliated with this project.
> 
> No coding needed. **[Download for Windows](https://github.com/xevrion/hatchzip/releases/latest/download/HatchZip-x64-setup.exe)** (Windows 10 and 11), or for [macOS (Apple Silicon)](https://github.com/xevrion/hatchzip/releases/latest/download/HatchZip-aarch64.dmg), [macOS (Intel)](https://github.com/xevrion/hatchzip/releases/latest/download/HatchZip-x86_64.dmg) and [Linux](#installation).
> 
> 1. Run the installer. Windows may show "Windows protected your PC" because HatchZip is not code-signed yet: choose **More info**, then **Run anyway**.
> 2. Right-click the archive, choose **HatchZip**, then **Extract here**. On Windows 11 the menu is under **Show more options**.
> 3. Or open HatchZip from the Start menu, open the archive, and choose **Extract**.
> 
> HatchZip shows whether the files will fit before it changes anything. The archive is used up as the files come out, so when it finishes, only the extracted files are left.
> 
> To keep the archive when there is room for both, choose **Extract here (keep archive)** in the right-click menu, or clear **Remove the archive during extraction** in the app. That is a normal extraction: the archive is not changed, and space is required for all extracted files.
> 
> 
> ### Desktop app
> 
> Download from the [latest release](https://github.com/xevrion/hatchzip/releases/latest):
> 
> | System | File |
> |---|---|
> | Windows 10 and 11 (x64) | [`HatchZip-x64-setup.exe`](https://github.com/xevrion/hatchzip/releases/latest/download/HatchZip-x64-setup.exe): installs per user, no admin rights, adds the right-click menu |
> | macOS, Apple Silicon | [`HatchZip-aarch64.dmg`](https://github.com/xevrion/hatchzip/releases/latest/download/HatchZip-aarch64.dmg) |
> | macOS, Intel | [`HatchZip-x86_64.dmg`](https://github.com/xevrion/hatchzip/releases/latest/download/HatchZip-x86_64.dmg) |
> | Debian, Ubuntu | [`hatchzip_amd64.deb`](https://github.com/xevrion/hatchzip/releases/latest/download/hatchzip_amd64.deb) |
> | Fedora, openSUSE | [`hatchzip-x86_64.rpm`](https://github.com/xevrion/hatchzip/releases/latest/download/hatchzip-x86_64.rpm) |
> | Any Linux | [`HatchZip-x86_64.AppImage`](https://github.com/xevrion/hatchzip/releases/latest/download/HatchZip-x86_64.AppImage) |
> 
> The installers also put the `hatchzip` command (and its short name `hz`) on your `PATH`. The Windows setup and the macOS apps are not code-signed yet: on Windows choose **More info**, then **Run anyway**; on macOS 15 and later, open the app once, then allow it under System Settings, Privacy & Security.
> 
> 
> ### Command line only
> 
> Linux and macOS:
> 
> ```sh
> curl -fsSL https://raw.githubusercontent.com/xevrion/hatchzip/main/install.sh | sh
> ```
> 
> Windows, in PowerShell:
> 
> ```powershell
> irm https://raw.githubusercontent.com/xevrion/hatchzip/main/install.ps1 | iex
> ```
> 
> Both download the build for your machine from the latest release, check it against its published SHA-256 checksum, and install `hatchzip` and `hz` for your user only, with the man page and shell completions. No root or administrator rights.
> 
> Every release file from 0.1.3 on carries signed build provenance. To check that a download really was built from this repository by its release workflow, wherever you got it:
> 
> ```sh
> gh attestation verify HatchZip-x64-setup.exe --repo xevrion/hatchzip
> ```
> 
> 
> ### Package managers
> 
> Homebrew and Scoop are live. winget is in review, and the AUR packages are coming soon; until they are listed as live here, a package under those names does not come from this project.
> 
> | System | Command | Installs |
> |---|---|---|
> | Arch Linux (AUR) | `yay -S hatchzip-bin`, or `yay -S hatchzip` to build from source | App and CLI |
> | Windows (winget) | `winget install Xevrion.HatchZip` | App and CLI, same as the setup |
> | Windows (Scoop) | `scoop bucket add xevrion https://github.com/xevrion/scoop-bucket`, then `scoop install xevrion/hatchzip` | CLI |
> | macOS and Linux (Homebrew) | `brew install xevrion/tap/hatchzip` | CLI |
> | macOS (Homebrew) | `brew install --cask xevrion/tap/hatchzip` | App and CLI |
> 
> 
> ### With Cargo
> 
> ```sh
> cargo install hatchzip
> ```
> 
> This builds the command line tool from [crates.io](https://crates.io/crates/hatchzip). The engine is a library too: [`hatchzip-core`](https://crates.io/crates/hatchzip-core). It reads every format but RAR; `cargo install hatchzip --features rar` adds RAR support, which compiles UnRAR's C++ source under its own [license](#license) and needs a C++ compiler.
> 
> 
> ### From source
> 
> With [Rust](https://rustup.rs) (the version is pinned in `rust-toolchain.toml` and installed automatically):
> 
> ```sh
> git clone https://github.com/xevrion/hatchzip.git
> cd hatchzip
> cargo build --release
> ```
> 
> The binaries are `target/release/hatchzip` and `target/release/hatchzip-gui` (`.exe` on 

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/xevrion/hatchzip) · [官方網站](https://hatchzip.dev)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "xevrion--hatchzip"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "xevrion--hatchzip" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W44" AND file.name != "xevrion--hatchzip"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/xevrion--hatchzip");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "xevrion--hatchzip" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "xevrion" AND file.name != "xevrion--hatchzip"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/xevrion--hatchzip");
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
> const me = dv.page("Repos/xevrion--hatchzip");
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
> const me = dv.page("Repos/xevrion--hatchzip");
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
> const me = dv.page("Repos/xevrion--hatchzip");
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
> const me = dv.page("Repos/xevrion--hatchzip");
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

> **2026-10-25** — 首次收錄
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

- [[2026-10-28|2026-10-28]] — 再次上榜，2.2k stars
- [[2026-10-27|2026-10-27]] — 再次上榜，2.1k stars
- [[2026-10-26|2026-10-26]] — 再次上榜，2.0k stars
- [[2026-10-25|2026-10-25]] — 首次收錄，1.8k stars
