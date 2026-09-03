---
repo: jprx/darwin-vm
url: https://github.com/jprx/darwin-vm
owner: jprx
owner_type: User
language: Python
license: MIT
description: "Run iOS/ macOS in Qemu. Virtual iPhone 17, 16, 15, 14, 13, 12 and M5-M1 Apple Si Macs supported."
homepage: ""
stars: 959
stars_per_day: 160
forks: 81
open_issues: 5
created: 2026-08-27
pushed_at: 2026-09-02
first_seen: 2026-09-02
week: "2026-W36"
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
last_reviewed: 2026-09-02
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-09-10"
contributor_count: 1
engagement: "low"
issue_close_rate: 17
repo_size_kb: 33
readme_length: 9961
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-09-02"
star_history: "2026-09-02:893,2026-09-03:959"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "darwin-vm"
  - "jprx/darwin-vm"
---

# darwin-vm

**893** stars · **179** stars/天 · 建立 5 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/jprx--darwin-vm");
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

`個人專案`

> [!summary] 一句話摘要
> Run iOS/ macOS in Qemu. Virtual iPhone 17, 16, 15, 14, 13, 12 and M5-M1 Apple Si Macs supported.

## 專案簡介

Run iOS/ macOS in Qemu. Virtual iPhone 17, 16, 15, 14, 13, 12 and M5-M1 Apple Si Macs supported.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/jprx--darwin-vm");
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
> const me = dv.page("Repos/jprx--darwin-vm");
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
| Forks | 74 |
| Open Issues | 5 |
| Issue 解決率 | 17% (1 closed) |
| 最後推送 | 2026-09-01 |
| 建立日期 | 2026-08-27 |
| Repo 大小 | 33 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jprx/darwin-vm) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 58
>     "Shell" : 42
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jprx](https://github.com/jprx) | 5 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-27 ~ 2026-09-01）
> **活躍天數** 4 天 · **最新 commit** fix(sprr): read sprr index bits directly from page table descriptor

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/jprx/darwin-vm/issues/3) | add suport for ubuntu | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # darwin-vm
> 
> Run iOS/ macOS in Qemu. Supports emulating iPhone 17, 16, 15, 14, 13, and 12
> (A19-A14) and M5-M1 Macs (tested with Macbook Air and Mac Mini). You can debug
> the kernel, edit the root filesystem, and run a root shell + custom programs.
> 
> Features:
> - Runs a lightweight debuggable iOS/ macOS (Darwin) system with custom filesystem.
> - Boots you directly into a root shell in just a few seconds.
> - Compile and run your own programs as root in the VM, no jailbreak or kernel patches required.
> - Runs anywhere qemu runs (ARM host not required).
> - Supports emulating A19-A14 (iOS) and M5-M1 (macOS) CPUs.
> - Supports SPTM based kernels and CPUs with MIE.
> - Can debug / patch the kernel, SPTM, TXM, dyld, launchd, and userspace programs.
> - Automated setup to get going in just a few minutes.
> 
> ```
> $ ./run.sh
> Darwin Kernel Version 27.0.0: Tue Aug 11 22:05:33 PDT 2026; root:xnu-13432.1.9~3/RELEASE_ARM64_T8142
> pmap_startup() init/release time: 893478 microsec
> vm_page_bootstrap: 463555 free pages, 25917 wired pages
> VM bootstrap: 73 maps, 256 entries and 64 nodes available
> ptr-packing max: compressor:0x page:0x vmn:0xfffffeffffffff00 vme:0x
> zone_map_range: min:0x max:0x0, vm-size:0x5cc000000 ro-size:0x29e000000, vm_min:0x ro_min:0x
> vm: "vm_compressor_mode" is 4
> VM bootstrap done: 71 maps, 224 entries and 59 nodes left
> standard timeslicing quantum is 10000 us
> standard background quantum is 2500 us
> Long logs support configured: size: 16384
> Firehose configured: 16 chunks, 8 io pages
> Log queues configured: slot count: 90, per-slot size: 32768, total size: 2949120
> OSLog stream configured: stream: 8192 bytes, cache: 2112 bytes
> [trap_telemetry] trap_telemetry_init
> mig_table_max_displ = 91 mach_kobj_count = 390
> debug_log_init: Error!! gPanicBase is still not initialized
> libTXM_KernelVersion: 12
> libTXM_Image4Version: 1
> TXM [Log]: setup logging: 32768 bytes (256 | 128)
> TXM [Log]: system supports DIT feature
> TXM [Log]: setup device tree range
> TXM [Log]: unable to find esdm-fuses property in /chosen
> TXM [Log]: resolved system platform identity: 0
> TXM [Log]: Code Signing Monitor Image4 Module Version 7.0.0: Mon Aug 10 00:10:03 PDT 2026; root:AppleImage4_txm-374~7048/libima
> ...
> Darwin Ignition Sequence Version 1.0.0: Tue Aug 11 21:44:28 PDT 2026; root:libignition-64~19270/libignition_core/RELEASE_ARM64E
> libignition: 1: arguments           :
> libignition: 1:   ignition level    : 0x5
> libignition: 1:   force dylib root  : 0x0
> libignition: 1:   halt after stage  : n/a
> ...
> com.apple.xpc.launchd|1970-01-01 00:00:29.466851 : Darwin Bootstrapper Version 7.0.0: Mon Aug 10 01:06:09 PDT 2026; root:libxpc_executables-3298.1.1~29/launchd/RELEASE_ARM64E
> com.apple.xpc.launchd|1970-01-01 00:00:29.484709 : boot-args = rd=md0 serial=3 -v -noprogress wdt=-1 wlan-olyhal-abort
> com.apple.xpc.launchd|1970-01-01 00:00:29.486795 : Restore environment starting.
> com.apple.xpc.launchd|1970-01-01 00:00:29.487770 : System Integrity Protection is engaged.
> com.apple.xpc.launchd|1970-01-01 00:00:29.904447 (system/com.jprx.bash) : internal event: WILL_SPAWN, code = 0
> com.apple.xpc.launchd|1970-01-01 00:00:29.905070 (system/com.jprx.bash) : service state: spawn scheduled
> com.apple.xpc.launchd|1970-01-01 00:00:29.905166 (system/com.jprx.bash) : service state: spawning
> com.apple.xpc.launchd|1970-01-01 00:00:29.922055 (system/com.jprx.bash) : launching: speculative
> bash-3.2# uname -v
> Darwin Kernel Version 27.0.0: Tue Aug 11 22:05:33 PDT 2026; root:xnu-13432.1.9~3/RELEASE_ARM64_T8142
> bash-3.2# whoami
> root
> bash-3.2# ls
> .fseventsd      mnt1            mnt3            mnt8            usr
> System          mnt10           mnt4            mnt9            var
> bin             mnt11           mnt5            private
> dev             mnt12           mnt6            sbin
> etc             mnt2            mnt7            tmp
> ```
> 
> (some kernel messages were removed from the above log to make it easier to read)
> 
> 
> # Setup
> 
> You'll need a few things:
> 1. Access to a Mac with `python`, `jq`, `wget`, and `ipsw`.
> 2. A machine to build and run `qemu` on - this can be different to the first machine.
> 3. (optional) The URL of the IPSW (iOS or macOS) you want to use. You don't need to download the IPSW, you just need the URL. If you don't care which version you boot, we provide a default one.
> 
> > [!NOTE]
> > The [`ipsw`](https://blacktop.github.io/ipsw/) tool can help find the URLs for `IPSW` files.
> 
> 
> ## Quickstart
> 
> How to get this running as fast as possible. See below sections for
> explanations of what these commands do/ how to customize things.
> 
> Install dependencies:
> 
> ```
> brew install jq wget ipsw
> ```
> 
> Clone this repo:
> 
> ```
> git clone https://github.com/jprx/darwin-vm.git
> cd darwin-vm
> ```
> 
> Download iOS files. Must run this on a Mac (see step 1 below to customize which
> iOS/ macOS version we install):
> 
> ```
> ./get_files.sh
> ./fix_perms.sh firmware/ramdisk.dmg
> ```
> 
> Build qemu:
> 
> ```
> git submodule update --init
> cd qemu-sptm
> mkdir build
> cd build
> ../configure --target-list=aarch64-softmmu
> make -j
> cd ../..
> ```
> 
> Launch the VM:
> 
> ```
> ./run.sh
> ```
> 
> Your VM should boot to a root shell! Use `ctrl+A` followed by `x` in the
> terminal to quit Qemu.
> 
> 
> ### 2. Download and install the KDK for that version
> 
> Apple sometimes forgets to publish KDKs, so check that there is a KDK in Apple
> Developer Downloads before continuing (you'll need to sign in to view these):
> 
> https://developer.apple.com/download/all/?q=Kernel%20Debug%20Kit
> 
> Make sure the exact version number matches (eg. `25G70`), not just the
> customer-facing release (eg. `26.6`), as there can be multiple KDKs released
> per macOS release.
> 
> Download the KDK matching your exact macOS version and install it.
> 
> 
> ### 3. Setup an initial VM
> 
> Use `get_files.sh` to fetch a macOS IPSW matching the version we want to debug
> for the specific Mac you want to boot.
> 
> For example, if you wanted to run macOS build 25G70 on an M4 Mac Mini, use:
> 
> ```
> DEVNAME="Mac16,10" URL="https://updates.cdn-apple.com/2026SummerFCS/fullrestores/140-56823/1C29995E-8C11-4384-B9C0-B00145B84F51/UniversalMac_26.6_25G70_Restore.ipsw" ./get_files.sh
> ```
> 
> Make note of the following output; we'll need the `kernel ext` and `chip name`
> fields later:
> 
> ```
> Mac16,10
> board name: j773gap
> kernel ext: mac16g
> chip name:  t8132
> os sdk:     macosx
> ```
> 
> (and don't forget to run `./fix_perms.sh firmware/ramdisk.dmg` after `get_files.sh`).
> 
> Boot and run the VM and make sure it works before continuing.
> 
> 
> # Tested Configurations
> 
> `darwin-vm` has been tested with the following systems:
> 
> | Device          | `devname`    | CPU name | iOS 27.0 beta 8 | iOS 26.6 |
> |-----------------|--------------|----------|-----------------|----------|
> | iPhone 17 (A19) | `iPhone18,3` | `t8150`  | ✅              | ✅       |
> | iPhone 16 (A18) | `iPhone17,3` | `t8140`  | ✅              | ✅       |
> | iPhone 15 (A16) | `iPhone15,4` | `t8120`  | ✅              | ✅       |
> | iPhone 14 (A15) | `iPhone14,7` | `t8110`  | ✅              | ✅       |
> | iPhone 13 (A15) | `iPhone14,5` | `t8110`  | ✅              | ✅       |
> | iPhone 12 (A14) | `iPhone13,2` | `t8101`  | ✅              | ✅       |
> 
> | Device         | `devname`    | CPU name | macOS 27.0 beta 8 | macOS 26.6 |
> |----------------|--------------|----------|-------------------|------------|
> | M5 Macbook Air | `Mac17,4`    | `t8142`  | ✅                | ✅         |
> | M4 Mac Mini    | `Mac16,10`   | `t8132`  | ✅                | ✅         |
> | M3 Macbook Air | `Mac15,13`   | `t8122`  | ✅                | ✅         |
> | M2 Mac Mini    | `Mac14,3`    | `t8112`  | ✅                | ✅         |
> | M1 Mac Mini    | `Macmini9,1` | `t8103`  | ✅                | ✅         |
> 
> ✅ = boots to root shell and can run commands
> 
> Notes:
> - If you don't need MIE, use something without it, as emulating MIE can be slow.
> 
> 
> # What this is not
> 
> This is not a full iPhone/ Mac emulator. Don't expect the screen, wifi,
> bluetooth, graphics, GUI apps, or full springboard to work. This just boots iOS
> / macOS to a barebones root shell so you can run custom command line programs,
> debug the

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[CopilotKit--OpenBot|CopilotKit/OpenBot]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]]

[GitHub](https://github.com/jprx/darwin-vm)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "jprx--darwin-vm"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "jprx--darwin-vm" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W36" AND file.name != "jprx--darwin-vm"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/jprx--darwin-vm");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "jprx--darwin-vm" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "jprx" AND file.name != "jprx--darwin-vm"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/jprx--darwin-vm");
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
> const me = dv.page("Repos/jprx--darwin-vm");
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
> const me = dv.page("Repos/jprx--darwin-vm");
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
> const me = dv.page("Repos/jprx--darwin-vm");
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
> const me = dv.page("Repos/jprx--darwin-vm");
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

> **2026-09-02** — 首次收錄
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

- [[2026-09-03|2026-09-03]] — 再次上榜，959 stars
- [[2026-09-02|2026-09-02]] — 首次收錄，893 stars
