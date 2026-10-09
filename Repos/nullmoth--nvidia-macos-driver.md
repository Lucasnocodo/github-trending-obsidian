---
repo: nullmoth/nvidia-macos-driver
url: https://github.com/nullmoth/nvidia-macos-driver
owner: nullmoth
owner_type: User
language: Rust
license: NOASSERTION
description: "Metal driver for NVIDIA GeForce RTX cards on macOS 15 Sequoia (Intel / OpenCore). Free, source included."
homepage: "https://nullmothsystems.com"
stars: 1419
stars_per_day: 1419
forks: 130
open_issues: 44
created: 2026-10-07
pushed_at: 2026-10-08
first_seen: 2026-10-09
week: "2026-W41"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v1.1.1"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-09
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-12"
contributor_count: 1
engagement: "low"
issue_close_rate: 4
repo_size_kb: 2774
readme_length: 8483
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-09"
star_history: "2026-10-09:1419"
tags:
  - github
  - "category/other"
  - "lang/rust"
aliases:
  - "nvidia-macos-driver"
  - "nullmoth/nvidia-macos-driver"
---

# nvidia-macos-driver

**1.4k** stars · **1.4k** stars/天 · 建立 1 天前 · Rust · NOASSERTION

```dataviewjs
const me = dv.page("Repos/nullmoth--nvidia-macos-driver");
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

`個人專案` `v1.1.1`

> [!summary] 一句話摘要
> Metal driver for NVIDIA GeForce RTX cards on macOS 15 Sequoia (Intel / OpenCore). Free, source included.

## 專案簡介

Metal driver for NVIDIA GeForce RTX cards on macOS 15 Sequoia (Intel / OpenCore). Free, source included.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/nullmoth--nvidia-macos-driver");
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
> const me = dv.page("Repos/nullmoth--nvidia-macos-driver");
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
| Forks | 130 |
| Open Issues | 44 |
| Issue 解決率 | 4% (2 closed) |
| 最後推送 | 2026-10-08 |
| 建立日期 | 2026-10-07 |
| 官方網站 | [Link](https://nullmothsystems.com) |
| Repo 大小 | 2.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/nullmoth/nvidia-macos-driver) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 77
>     "C++" : 8
>     "C" : 7
>     "Objective-C" : 6
>     "Swift" : 1
>     "Python" : 1
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@nullmoth](https://github.com/nullmoth) | 2 |

**最新版本**：v1.1.1 — 1401 Mac 1.1.1 (2026-10-08)

> [!info]- Release Notes
> 1401 Mac 1.1.1
> 
> Send logs now captures what happened right before each WindowServer crash.
> 
> - For each of the three most recent WindowServer crashes, the logs include the driver's and WindowServer's own messages from the two minutes before the crash. Previously only the newest lines were kept, so the reason for a crash at startup was usually gone by the time logs were sent.
> - Driver and plugin messages and kernel messages are kept in separate budgets so one cannot crowd out the other.
> 
> The NVIDIA driver is unchanged from 1.1.0 (nullmoth-nvidia-1.1.0.tar.gz is included for convenience).
> 
> Known issue (fix planned)
> - With two displays, changing the refresh rate or resolution of one can make the other flash or go blank until you restart.

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-08 ~ 2026-10-08）
> **活躍天數** 1 天 · **最新 commit** Mac 1.1.1: Send logs keeps the two minutes before each WindowServer crash

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#36](https://github.com/nullmoth/nvidia-macos-driver/issues/36) | Is it supported on Tahoe? | 1 | 3 |
> | [#14](https://github.com/nullmoth/nvidia-macos-driver/issues/14) | GTX 10 series support? | 1 | 0 |
> | [#4](https://github.com/nullmoth/nvidia-macos-driver/issues/4) | RTX 5060 Ti macOS 15.7.9 no image | 1 | 1 |
> | [#46](https://github.com/nullmoth/nvidia-macos-driver/issues/46) | [Issue] Core Ultra 7 265KF / Colorful BATTLE-AX B860M-GHA WI | 0 | 0 |
> | [#45](https://github.com/nullmoth/nvidia-macos-driver/issues/45) | 1650s | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # NullMoth NVIDIA Driver for macOS
> 
> A Metal driver for NVIDIA Turing-and-later cards on Intel Macs and OpenCore systems running **macOS 15 Sequoia**.
> The device table includes GTX 16, RTX 20/30/40/50, TITAN RTX, and supported Quadro/RTX workstation cards.
> The driver implements NVIDIA-backed display and Metal interfaces. Feature availability and application behavior depend on the card, operating-system version and installed components; device-table coverage is not runtime qualification.
> 
> Made by **NullMoth Systems**.
> 
> **Latest update:** [1401 and NVIDIA driver 1.1.0](docs/RELEASE-1.1.0.md). See the changes, validation and qualification scope before updating.
> 
> Installing macOS from Windows? Use **1401**: https://github.com/nullmoth/1401
> 
> > **This driver is new and may not work on every PC.** It is tested on an RTX 5060 under macOS 15.7.x and 15.8.1. Device-table coverage is broader than physical hardware validation; see [card support](docs/CARD-SUPPORT.md). If your PC does
> > not boot macOS with OpenCore yet, set that up first with the
> > [OpenCore Install Guide](https://dortania.github.io/OpenCore-Install-Guide/)
> > ([OpenCore releases](https://github.com/acidanthera/OpenCorePkg/releases)), then install the driver.
> > The full write-up of how the driver works is in [`docs/HOW-IT-WORKS.md`](docs/HOW-IT-WORKS.md).
> 
> Support the work: https://buymeacoffee.com/nullmoth
> 
> | | |
> |---|---|
> | macOS | 15 Sequoia (tested 15.7.x and 15.8.1), x86_64 |
> | GPUs | NVIDIA Turing and later from the GSP device table; physical validation: RTX 5060 |
> | Metal | Metal 3: argument buffers tier 2, ray tracing, mesh shaders, MPS, MetalFX path |
> | Also | OpenGL (through Apple's GL-on-Metal), OpenCL, Core Image, Core ML |
> 
> ## How it works
> 
> ```
> Metal app ─► NVMTLDriver.bundle ─► translator (Apple AIR → SPIR-V) ─► NVK (Mesa Vulkan + NAK compiler) ─► kexts ─► GPU
> ```
> 
> | Component | Path on disk | Source |
> |---|---|---|
> | Metal driver plugin | `/Library/GPUBundles/NVMTLDriver.bundle` | `plugin/` |
> | Shader translator | inside the plugin (`libnvmtl_translate.dylib`) | `translator/` (LGPL-3.0, based on metal2vulkan) |
> | Vulkan back end (NVK) | `/Library/GPUBundles/nvmtl/` | `nvk/nvk-macos.patch` on Mesa `17ca6174` |
> | Kernel extensions | `/Library/Extensions/NVRM, NVAccel, NVRMFB, NVRMAGDC` | `kexts/` |
> | GPU firmware (GSP) | `/Users/Shared/nvfw/nvidia/610.57.04` | NVIDIA, unmodified |
> 
> The kernel side runs NVIDIA's own open GPU kernel modules (r610) under macOS. NVRMFB is the display framebuffer,
> NVAccel the accelerator WindowServer composites through, NVRMAGDC the display-policy shim.
> 
> ## Install — prebuilt (recommended)
> 
> Download `nullmoth-nvidia-.tar.gz` from **Releases**, then:
> 
> ```bash
> tar -xzf nullmoth-nvidia-*.tar.gz && cd pkgroot
> shasum -a 256 -c SHA256SUMS          # every file must say OK
> sudo ./install.sh                    # copies the files, rebuilds the Auxiliary Kernel Collection
> sudo shutdown -r now                 # a reboot is required: logout does not load the driver
> ```
> 
> macOS asks you to **allow the extensions** in System Settings → Privacy & Security the first time. Allow, then reboot again.
> 
> ## 1401 Mac app (easiest)
> 
> Download the latest `1401-Mac-.dmg` from **Releases**, open it, and run **1401** (the driver package is inside the disk
> image, so nothing else to download). Follow its steps. A supported setup must use a verified or explicitly selected OpenCore partition. The app finds the OpenCore that started your Mac (in `EFI/OC` or `EFI/BOOT`, on an
> EFI or FAT32 partition), shows every change before making it, backs the config up, installs the driver, and adds
> **1401: Remove NVIDIA driver** to the OpenCore boot picker. Choosing that entry removes the driver at the next start and
> puts the Mac back exactly as it was before the install, OpenCore config included, then restarts by itself. The app also
> maps your USB ports and, if the driver ever crashes the Mac, offers to make a crash report you can upload yourself
> (it never sends anything on its own).
> 
> **Something not working?** Open 1401 > Crash report > **Send logs to NullMoth**. It sends what 1401 did, the driver's
> state, driver crash reports, recent WindowServer crash reports and OpenCore's startup logs (names, serial numbers and addresses removed), each
> with a SHA-256 the site checks, and shows a report ID to quote in the NullMoth Discord.
> 
> **macOS 26 Tahoe:** the package carries a separate NVAccel build, but full hardware and application qualification remains pending. The obsolete preparation action has been removed from the app; do not treat package contents as a verified upgrade path.
> 
> **Keep the USB stick or disk OpenCore started your Mac from plugged in** while the app runs: that is the config it
> changes. A shared SMBIOS model alone does not establish the startup partition. Automatic USB-to-internal copying is disabled, preserving Windows and vendor boot files. Driver installation uses the selected startup partition. Keep the OpenCore stick attached for every restart until the internal boot setup is reviewed. After the install,
> restart; the first start with the driver pauses for up to a minute at "PCI configuration end" while the GPU comes up.
> 
> ## Wiring into an existing OpenCore setup
> 
> The kexts install into `/Library/Extensions` and load from the Auxiliary Kernel Collection — **do not** also inject
> them from `EFI/OC/Kexts`. OpenCore only needs to set SIP and boot-args.
> 
> **`NVRAM → Add → 7C436110-AB2A-4BBB-A880-FE41995C9F82`**
> 
> | Key | Value | Why |
> |---|---|---|
> | `csr-active-config` | `` (Data) | the tested value: unsigned kexts, plus what root patches need |
> | `boot-args` | `nvfb=1 nvaccel=1 nvfbheads=4 -nvkmsnosmooth amfi_get_out_of_my_way=0x1 amfi=0x80` | framebuffer + accelerator, 4 display heads; the AMFI args let WindowServer load the driver bundle |
> 
> Add every key you set to `NVRAM → Delete` as well, so the values are rewritten each boot.
> 
> | Setting | Value | Why |
> |---|---|---|
> | `UEFI → Quirks → ResizeGpuBars` | `13` | 8 GB BAR: full memory bandwidth (tested on the RTX 5060) |
> | `Booter → Quirks → ResizeAppleGpuBars` | `-1` | macOS sees the full BAR |
> | `Kernel → Block` | `com.apple.iokit.IONDRVSupport`, Strategy `Exclude` | otherwise the firmware framebuffer takes display index 0 from NVRMFB |
> | `Misc → Security → SecureBootModel` | `Disabled` | Apple Secure Boot refuses kexts Apple did not sign |
> 
> The macOS **installer** needs the opposite BAR settings (`ResizeAppleGpuBars` `0`, `ResizeGpuBars` `-1`, IONDRVSupport
> not excluded): it has no NVIDIA driver and runs on the firmware's screen. 1401 builds installers that way, and the 1401
> Mac app switches to the values above when it installs the driver.
> 
> Also required:
> - **BIOS:** Above 4G Decoding ON (the card maps memory above 4 GB), CSM OFF.
> - **SMBIOS:** a Mac model that runs macOS 15 with a discrete GPU (tested: `iMacPro1,1`, which 1401 uses).
> - **Remove** any `nv_disable=1`, WhateverGreen NVIDIA patches, or `agdpmod=pikera` for this card.
> - **No `DeviceProperties`** are needed for the NVIDIA card.
> 
> Verify after the reboot:
> 
> ```bash
> kmutil showloaded --list-only | grep nullmoth      # 4 lines
> system_profiler SPDisplaysDataType | head -20      # your GeForce, Metal: supported
> ```
> 
> ## Dual boot
> 
> Nothing in the driver touches other disks. OpenCore's picker boots Windows (`ScanPolicy` 0 or including NTFS) and Linux
> (`OpenLinuxBoot.efi` in `UEFI → Drivers`, `LauncherOption = Full`) alongside macOS.
> 
> ## Uninstall
> 
> ```bash
> sudo ./uninstall.sh && sudo shutdown -r now
> ```
> 
> ## Build from source
> 
> Requires Xcode 16, Rust (stable), Meson/Ninja, and NVIDIA's `open-gpu-kernel-modules` at tag `610.57.04`.
> 
> ```bash
> build/build_xlate.sh       # translator  -> libnvmtl_translate.dylib
> RELEASE=1 build/build_plugin.sh   # plugin -> NVMTLDriver.bundle (RELEASE=1 strips every diagnostic)
> build/build263.sh          # NVK: apply nvk/nvk-macos.patch to Mesa 17ca6174 first
> build/accel_build.sh    # kexts
> ```
> 
> ## License
> 
> Free of charge, source code included. Nobody may sell

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/nullmoth/nvidia-macos-driver) · [官方網站](https://nullmothsystems.com)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "nullmoth--nvidia-macos-driver"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "nullmoth--nvidia-macos-driver" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W41" AND file.name != "nullmoth--nvidia-macos-driver"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/nullmoth--nvidia-macos-driver");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "nullmoth--nvidia-macos-driver" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "nullmoth" AND file.name != "nullmoth--nvidia-macos-driver"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/nullmoth--nvidia-macos-driver");
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
> const me = dv.page("Repos/nullmoth--nvidia-macos-driver");
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
> const me = dv.page("Repos/nullmoth--nvidia-macos-driver");
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
> const me = dv.page("Repos/nullmoth--nvidia-macos-driver");
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
> const me = dv.page("Repos/nullmoth--nvidia-macos-driver");
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

> **2026-10-09** — 首次收錄
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

- [[2026-10-09|2026-10-09]] — 首次收錄，1.4k stars
