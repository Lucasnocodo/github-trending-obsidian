---
repo: oosexgang/hackios-xnu-kernel
url: https://github.com/oosexgang/hackios-xnu-kernel
owner: oosexgang
owner_type: Organization
language: C
license: NOASSERTION
description: ""
homepage: ""
stars: 1498
stars_per_day: 499
forks: 270
open_issues: 8
created: 2026-10-22
pushed_at: 2026-10-26
first_seen: 2026-10-26
week: "2026-W44"
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
last_reviewed: 2026-10-26
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-29"
contributor_count: 2
engagement: "medium"
issue_close_rate: 11
repo_size_kb: 187558
readme_length: 9787
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-26"
star_history: "2026-10-26:1498"
tags:
  - github
  - "category/other"
  - "lang/c"
  - org
aliases:
  - "hackios-xnu-kernel"
  - "oosexgang/hackios-xnu-kernel"
---

# hackios-xnu-kernel

**1.5k** stars · **499** stars/天 · 建立 3 天前 · C · NOASSERTION

```dataviewjs
const me = dv.page("Repos/oosexgang--hackios-xnu-kernel");
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

`ORG` `v0.1.0`

> [!summary] 一句話摘要
> No description

## 專案簡介

No description available.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/oosexgang--hackios-xnu-kernel");
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
> const me = dv.page("Repos/oosexgang--hackios-xnu-kernel");
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
| Forks | 270 |
| Open Issues | 8 |
| Issue 解決率 | 11% (1 closed) |
| 最後推送 | 2026-10-26 |
| 建立日期 | 2026-10-22 |
| Repo 大小 | 183.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/oosexgang/hackios-xnu-kernel) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C" : 81
>     "Python" : 10
>     "C++" : 4
>     "Shell" : 3
>     "Objective-C" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@vcvkk](https://github.com/vcvkk) | 576 |
> | [@shimoku74](https://github.com/shimoku74) | 51 |

**最新版本**：v0.1.0 — HackiOS v0.1.0 -- source drop (2026-10-22)

> [!info]- Release Notes
> First open-source release of HackiOS: Apple's open-source XNU kernel on the POCO X5 Pro 5G (redwood) and in QEMU, running the iOS 16.5 user space that **you** extract from Apple's IPSW on your own machine.
> 
> **Attached:** `hackios-redwood-boot.img` -- the redwood UEFI (Project Silicium port) with our XNU loader inside, for `fastboot boot`. Nothing is flashed. It contains no Apple files.
> SHA-256: `4fd27190b7515bafeadae324d08d9495f09530078e84902e13b0f42f37181c1f`
> 
> **Start here:**
> ```sh
> git clone https://github.com/oosexgang/hackios-xnu-kernel.git hackios && cd hackios
> common/setup.sh            # brings in hackios-xnu-userland
> ios165/fetch.sh            # iOS 16.5 from Apple's CDN, to your machine
> common/build.sh qemu-virt  # or: common/build.sh redwood
> common/run.sh qemu-virt
> ```
> Porting to another device: `common/new-device.sh` and docs/PORTING.md.
> 
> HackiOS is an independent research project by OOSEX GANG, not affiliated with Apple Inc.

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-26 ~ 2026-10-26）
> **活躍天數** 1 天 · **最新 commit** tools/soc-args-test.sh: regression test that soc-args.py reproduces all 16 POCO X5 Pro soc_* values 

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#17](https://github.com/oosexgang/hackios-xnu-kernel/issues/17) | The hackios-os repo doesnt exist | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # HakiOS
> 
> English · [中文](README.zh.md) · [Українська](README.uk.md)
> 
> HakiOS runs the open-source XNU kernel (xnu-8796.121.2) with my own boot loader and my own drivers
> on an Android phone with a Qualcomm SoC, and boots the stock iOS 16.5 user space on top of it:
> launchd, backboardd, SpringBoard, the apps. The same thing runs in QEMU (`virt`, aarch64) on a
> Linux PC.
> 
> Nothing is flashed. The loader goes into RAM through `fastboot boot`, the system lives in RAM for
> the length of a session, and a reboot brings the phone back to its own Android. This is a research
> bench, not a ROM.
> 
> The first phone is the **POCO X5 Pro 5G** (`redwood`, Snapdragon 778G). The kernel knows nothing
> about it in advance: every address, interrupt, power rail and firmware comes from the phone's own
> device tree and its own Android, so a port to another Qualcomm phone is a new directory under
> `devices/`, not a rewrite.
> 
> ## What is in the repository
> 
> Only my code and my data:
> 
> - the kernel: a patch to Apple's open-source XNU (`xnu/hakios.patch`, APSL 2.0) and my driver
>   files (`xnu/files/`), laid over a fresh clone by `xnu/apply.sh`;
> - the boot loader (`xnuloader/`), my programs and libraries (`userland/src/`), tools (`tools/`),
>   build and run scripts;
> - `prebuilt/`: the kernel, loader and libraries built from this repository;
> - `devices/poco-x5-pro/`: what one phone needs (its UEFI port, device tree, firmware script).
> 
> Not in the repository, never:
> 
> - any file of iOS: no binary, image, cache, font, picture or screenshot. You build the system
>   image on your machine from the iOS 16.5 IPSW, which `sysimage/fetch.sh` downloads from Apple's
>   public servers for you, without decrypting or circumventing anything;
> - the phone's firmware (GPU, Wi-Fi, audio DSP, modem, haptics, cameras): it is the vendor's and
>   is pulled from your own phone into `fw-*/`, which git ignores;
> - keys, certificates, activation, or anything that would make the phone pass as an iPhone to
>   Apple's services. Signing in to an Apple account is impossible here and not a goal.
> 
> ## Status
> 
> | Works | Not yet |
> |---|---|
> | Lock screen, home screen, Control Center, gestures, the stock apps | Cellular: the modem boots, sees the network, the SIM is bound, the IPA data path and `en1` are in place; registration, the data session and the status bar bars are in progress (`docs/cellular.md`) |
> | Touch screen, multitouch, power and volume buttons | Bluetooth |
> | All 8 CPU cores, the big core at 2.4 GHz | Charging under this kernel |
> | GPU rendering on Adreno (`gpu=1`, OpenGL ES through Mesa) | Metal (there is a shader compiler, no Metal) |
> | Speakers and microphone (`adsp=1 sound=4 mic=4`) | Apple account: no Secure Enclave |
> | Battery level in the UI (through the audio DSP, `adsp=1`) | |
> | Vibration (`haptic=5`) | |
> | Wi-Fi: radio, driver, network connection (`wifi=1`) | |
> | Cameras in Camera.app (`cam=5`) | |
> | `/private/var` kept across reboots (`var_store=1 ufs_write=1`) | |
> | Sileo, Procursus packages, SSH into the phone | |
> 
> ## Quick start in QEMU
> 
> Linux x86-64, about 12 GB of disk, 7-Zip 23 or newer, `lz4`, `qemu-system-aarch64`, `edk2-aarch64`.
> 
> ```sh
> git clone https://github.com/oosexgang/hakios-os.git hakios
> cd hakios
> sysimage/fetch.sh             # the iOS 16.5 IPSW from Apple's servers, the needed parts unpacked (7.4 GB)
> REST=1 userland/build.sh      # the APFS images: userland/root.apfs and userland/system.apfs
> mkdir -p logs
> qemu/run-ios.sh 1200 -display gtk > logs/qemu.log     # a 20-minute session
> ```
> 
> The lock screen appears after two or three minutes. The mouse with the button held is a finger;
> `H` is Home, `L` is the power button, `↑`/`↓` are volume.
> 
> ## On the phone
> 
> A phone with a port (`devices/poco-x5-pro/`, POCO X5 Pro 5G), its boot loader unlocked, `adb` and
> `fastboot` on the PC, the images from the previous section, and the phone's own firmware:
> 
> ```sh
> devices/poco-x5-pro/pull-firmware.sh    # GPU, Wi-Fi, audio/battery, haptics, modem, cameras -> fw-*/
> ./xl enter                          # Android -> fastboot -> our loader in RAM
> ./xl ramdisk userland/system.apfs   # the system image into the phone's RAM (~80 s), once per loader session
> XL_SB_DELAY=8 XL_SECS=600 \
> XL_CMDLINE="bootcpu=7 cpus=8 cpufreq=1 ufs=2 touchscreen=1 gpu=1 adsp=1 sound=4 wifi=1 haptic=5 modem=1" \
> ./xl run                            # a 10-minute session, the log goes to logs/
> ./xl reboot                         # back to Android
> ```
> 
> `tools/modem-cycle.sh "ARGS" SECS` does all of that in one command and returns the phone to Android.
> 
> The main kernel arguments (the full list is in `docs/ru/notes.md`):
> 
> | Argument | What it does |
> |---|---|
> | `cpus=8 bootcpu=7 cpufreq=1` | all CPU cores and their clocks |
> | `touchscreen=1` | the touch screen |
> | `gpu=1` | rendering on Adreno (an image built with `GL=1`, firmware in `fw-gpu/`) |
> | `adsp=1 sound=4 mic=4` | the audio DSP: speakers, microphone; battery and charging come with it |
> | `haptic=5` | the vibration motor |
> | `wifi=1` | Wi-Fi (the network from `fw-wifi/network`) |
> | `cam=5` | the cameras |
> | `modem=1` | the modem beside the system: its firmware, file systems, IPA, SIM, NAS |
> | `modem_step=N` | the modem step by step, for debugging (`docs/cellular.md`) |
> | `var_store=1 ufs_write=1` | keep `/private/var` across reboots |
> 
> ## Building from source
> 
> The kernel (Linux: theos with its cctools and `iPhoneOS16.5.sdk`; macOS: Xcode or cctools, the SDK
> is fetched for you):
> 
> ```sh
> xnu/apply.sh             # XNU sources from Apple's GitHub + my changes -> xnu-src/
> xnu-deps/setup.sh        # dependencies, tools and the SDK
> ./xnu-build.sh -j8 -k    # -> xnu-src/.../BUILD/obj/DEVELOPMENT_ARM64_BCM2837/mach.development.bcm2837
> ```
> 
> The loader: `xnuloader/build.sh` (clang + lld-link, an EFI application without EDK2). The header
> `xnuloader/identity.h`, the properties by which iOS tells which iPhone it is, is not kept in the
> repository: `xnuloader/mkidentity.sh` makes it at build time from the device tree in your own IPSW
> (one 34 KB file; LZFSE is decoded by `lzfse`, macOS's `compression_tool` or the Python `lzfse`
> module, or the open lzfse library gets built). User space and the images: `REST=1 userland/build.sh`
> (`MODEM=1 SYSTEM=1` put the modem's firmware into the system image). Details: `xnu/README.md`,
> `docs/ru/notes.md`.
> 
> ## Layout
> 
> | Directory | Contents |
> |---|---|
> | `xnu/` | the kernel patch and files; `apply.sh`, `export.sh`; a README about the kernel |
> | `xnu/files/bsd/dev/hakios.*.c` | my drivers: display, touch, UFS, GPU, Wi-Fi, audio, modem (`hakios.mpss.c`), its packets (`hakios.ipa.c`, `hakios.cell.c`), SIM/NAS, haptics, cameras |
> | `xnuloader/` | the boot loader (a UEFI application) |
> | `userland/` | my programs and libraries (`src/`), the image build, launchd jobs |
> | `sysimage/` | scripts that fetch and unpack the OS files from the IPSW (none of the files themselves) |
> | `devices/poco-x5-pro/` | one phone: its UEFI port, device tree, prebuilt UEFI images, firmware script, tools |
> | `tools/` | APFS, firmware, QMI tests, run scripts |
> | `qemu/` | running in QEMU |
> | `docs/` | `notes.md`: the detailed notes (Russian); `cellular.md`: cellular; `air.md`, `metal.md`: the GPU |
> | `prebuilt/` | the built kernel, loader and libraries |
> 
> ## Devices
> 
> The kernel, loader and user space are shared. Everything about one phone lives in
> `devices//`: its UEFI, device tree, firmware list and tools. Today there is one,
> `devices/poco-x5-pro/`, and its README is the map of what a port to another Qualcomm phone must bring.
> The phone's drivers are the files `xnu/files/bsd/dev/hakios.*.c`; the head of each says where its
> numbers came from.
> 
> ## Cellular
> 
> The modem (the Hexagon MPSS) is brought up from XNU: firmware through TrustZone, shared memory,
> SMP2P, GLINK, QRTR, QMI; its file systems are served from the UFS (read-only, writes stay in kernel
> memory), TFTP and the service registry are mine. The IPA packet engine runs with its firmware,
> clock and SMMU context, and the handshake with the modem goes t

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/oosexgang/hackios-xnu-kernel)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "oosexgang--hackios-xnu-kernel"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C" AND file.name != "oosexgang--hackios-xnu-kernel" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W44" AND file.name != "oosexgang--hackios-xnu-kernel"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/oosexgang--hackios-xnu-kernel");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "oosexgang--hackios-xnu-kernel" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "oosexgang" AND file.name != "oosexgang--hackios-xnu-kernel"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/oosexgang--hackios-xnu-kernel");
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
> const me = dv.page("Repos/oosexgang--hackios-xnu-kernel");
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
> const me = dv.page("Repos/oosexgang--hackios-xnu-kernel");
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
> const me = dv.page("Repos/oosexgang--hackios-xnu-kernel");
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
> const me = dv.page("Repos/oosexgang--hackios-xnu-kernel");
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

> **2026-10-26** — 首次收錄
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

- [[2026-10-26|2026-10-26]] — 首次收錄，1.5k stars
