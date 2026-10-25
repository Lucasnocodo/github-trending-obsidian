---
repo: Zagitta/gpu-unlock
url: https://github.com/Zagitta/gpu-unlock
owner: Zagitta
owner_type: User
language: C
license: N/A
description: "Unlock FP/BF16 instruction issue rate on Nvidia 3000's cards to their professional equivalents"
homepage: ""
stars: 3549
stars_per_day: 507
forks: 393
open_issues: 61
created: 2026-10-18
pushed_at: 2026-10-24
first_seen: 2026-10-25
week: "2026-W44"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: ""
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
appearances: 1
next_review: "2026-10-28"
contributor_count: 4
engagement: "medium"
issue_close_rate: 15
repo_size_kb: 124
readme_length: 7005
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-10-25"
star_history: "2026-10-25:3549"
tags:
  - github
  - "category/other"
  - "lang/c"
aliases:
  - "gpu-unlock"
  - "Zagitta/gpu-unlock"
---

# gpu-unlock

**3.5k** stars · **507** stars/天 · 建立 7 天前 · C · 未標註授權

```dataviewjs
const me = dv.page("Repos/Zagitta--gpu-unlock");
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

> [!summary] 一句話摘要
> Unlock FP/BF16 instruction issue rate on Nvidia 3000's cards to their professional equivalents

## 專案簡介

Unlock FP/BF16 instruction issue rate on Nvidia 3000's cards to their professional equivalents

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Zagitta--gpu-unlock");
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
> const me = dv.page("Repos/Zagitta--gpu-unlock");
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
| Forks | 393 |
| Open Issues | 61 |
| Issue 解決率 | 15% (11 closed) |
| 最後推送 | 2026-10-24 |
| 建立日期 | 2026-10-18 |
| Repo 大小 | 124 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Zagitta/gpu-unlock) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C" : 86
>     "Python" : 11
>     "Makefile" : 3
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Zagitta](https://github.com/Zagitta) | 5 |
> | [@claude](https://github.com/claude) | 4 |
> | [@jesvs](https://github.com/jesvs) | 2 |
> | [@foureight84](https://github.com/foureight84) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-23 ~ 2026-10-24）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #37 from tsondo/claude/wizardly-turing-ecpa8w

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/Zagitta/gpu-unlock/issues/10) | Successful unlock on 3080 20GB `Capability report` | 2 | 1 |
> | [#66](https://github.com/Zagitta/gpu-unlock/issues/66) | Compatibility report: Lenovo OEM RTX 3080 10 GB LHR (10de:22 | 1 | 1 |
> | [#61](https://github.com/Zagitta/gpu-unlock/issues/61) | Compatibility report: NVIDIA RTX 3080 Ti 12 GB, GA102-225 (1 | 1 | 1 |
> | [#59](https://github.com/Zagitta/gpu-unlock/issues/59) | Compatibility report: HP OEM RTX 3080 Ti 12 GB (10de:2208) `Capability report` | 1 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # GPU unlock 1.0.0
> 
> Unlock FP/BF16 instruction issue rate on Nvidia 3000's cards to their professional equivalents
> 
> This Linux kernel module combines the CMP unlocker's V67/PLM technique with the pre-driver timing of the UEFI approach. It runs the unlock, writes the speed selectors (SS0 `0x88888888`, which selects the full BF16 rate, and the 4-bit SS1 `0x8` IMLA4) and performs FLR before the unmodified NVIDIA driver binds the card. It is neither a UEFI application nor a patched NVIDIA driver. 
> 
> The benefit of this early kmod driver is that it does not require manual patching each time nvidia releases a new driver version.
> 
> The effect of this unlock is that it doubles the instruction issuing speed of FP/BF16 FMA into FP32 operations on GA102, GA103, GA104 and GA106 cards.
> 
> [3090 Ti dense 8192³ GEMM at 450 W, five-sample medians with FP32 accumulation](https://github.com/Zagitta/gpu-unlock/issues/1#issue-5905622687):
> 
> | Input | Before       | After         |
> | ----- | ------------ | ------------- |
> | FP16  | 87.46 TFLOPS | 118.39 TFLOPS |
> | BF16  | 87.50 TFLOPS | 157.41 TFLOPS |
> | TF32  | 42.58 TFLOPS | 82.61 TFLOPS  |
> 
> 
> ## How to install
> 
> First run:
> 
> ```sh
> git clone https://github.com/Zagitta/gpu-unlock
> cd gpu-unlock
> make install
> ```
> 
> Then append `gpu_unlock.targets=all` to your kernel command line, keeping
> existing options:
> 
> - **GRUB (Debian/Ubuntu/Mint):** add it inside `GRUB_CMDLINE_LINUX_DEFAULT`
> in `/etc/default/grub`, then run `sudo update-grub`.
> - **GRUB (Arch/CachyOS):** same edit, then run
> `sudo grub-mkconfig -o /boot/grub/grub.cfg`.
> - **Fedora/RHEL:** run
> `sudo grubby --update-kernel=ALL --args="gpu_unlock.targets=all"`.
> - **systemd-boot:** append it to the `options` line in your boot entry
> (`bootctl status` shows its location).
> - **UKI / generated entries:** add it to `/etc/kernel/cmdline` and regenerate
> your boot images/entries (e.g. `sudo mkinitcpio -P` for mkinitcpio UKIs).
> 
> 
> ## Tested cards
> 
> Results reported by users. The module accepts every GeForce ID listed in
> `kernel/gpu_unlock/main.c`, but the cards below are the ones someone has
> reported on. Please add yours with a
> [compatibility report](https://github.com/Zagitta/gpu-unlock/issues/new?template=compatibility-report.yml),
> whether it worked or not.
> 
> | Chip  | Card                              | PCI ID      | Result                              | BF16 GEMM gain | Reports |
> | ----- | --------------------------------- | ----------- | ----------------------------------- | -------------- | ------- |
> | GA102 | RTX 3090 Ti                       | `10de:2203` | Unlocked                            | +68–80%        | [#1](https://github.com/Zagitta/gpu-unlock/issues/1) |
> | GA102 | RTX 3090                          | `10de:2204` | Unlocked                            | +25–67%        | [#5](https://github.com/Zagitta/gpu-unlock/issues/5), [#9](https://github.com/Zagitta/gpu-unlock/issues/9), [#10](https://github.com/Zagitta/gpu-unlock/issues/10), [#17](https://github.com/Zagitta/gpu-unlock/issues/17), [#25](https://github.com/Zagitta/gpu-unlock/issues/25), [#27](https://github.com/Zagitta/gpu-unlock/issues/27), [#33](https://github.com/Zagitta/gpu-unlock/issues/33) |
> | GA102 | RTX 3080 Ti 20 GB (OEM, GA102-250) | `10de:2205` | Unlock completes, BF16 stays at half rate | —        | [#28](https://github.com/Zagitta/gpu-unlock/issues/28) |
> | GA102 | RTX 3080 10 GB                    | `10de:2206` | Unlocked                            | +70–73%        | [#14](https://github.com/Zagitta/gpu-unlock/issues/14) |
> | GA102 | RTX 3080 20 GB (memory upgrade)   | `10de:2206` | Unlocked                            | +56–59%        | [#10](https://github.com/Zagitta/gpu-unlock/issues/10), [#15](https://github.com/Zagitta/gpu-unlock/issues/15) |
> | GA104 | RTX 3070                          | `10de:2484` | Unlocked                            | +73–81%        | [#10](https://github.com/Zagitta/gpu-unlock/issues/10), [#12](https://github.com/Zagitta/gpu-unlock/issues/12) |
> | GA104 | RTX 3070 Ti                       | `10de:2482` | Not tested with this module (the same unlock worked from a UEFI port on Windows) | — | [#32](https://github.com/Zagitta/gpu-unlock/issues/32) |
> | GA106 | RTX 3060 12 GB                    | `10de:2504` | Unlocked                            | about +80%     | [#13](https://github.com/Zagitta/gpu-unlock/pull/13), [#31](https://github.com/Zagitta/gpu-unlock/issues/31) |
> | GA103 | any                               | `10de:2414` | No reports yet                      | —              | — |
> 
> The gains are dense GEMM throughput from each report's own benchmark, so
> they are not directly comparable. The power limit matters a lot: the lowest
> figure (+25%) is from cards capped at 225 W.
> 
> Matrix-heavy work speeds up: LLM prefill (+14–36% in
> [#9](https://github.com/Zagitta/gpu-unlock/issues/9),
> [#15](https://github.com/Zagitta/gpu-unlock/issues/15),
> [#25](https://github.com/Zagitta/gpu-unlock/issues/25) and
> [#33](https://github.com/Zagitta/gpu-unlock/issues/33)), diffusion and
> FlashAttention. LLM decode, which is limited by memory bandwidth, and INT8
> work stay about the same. The reports that compared outputs found them
> bit-identical before and after.
> 
> Reports also cover up to four cards in one machine, the card driving the
> display, and cards passed through to a VM with vfio-pci
> ([#17](https://github.com/Zagitta/gpu-unlock/issues/17)).
> 
> 
> ## Local build
> 
> Every build downloads the pinned NVIDIA/CachyOS inputs over HTTPS, checks
> their SHA-256, and generates firmware only in the build directory and the
> binary package. All three formats install through the same `make install-*`
> targets. Packages are built from the committed `HEAD`.
> 
> Build, install build dependencies, and install the packages in one step
> (asks for your sudo password):
> 
> ```sh
> make install        # detect the distribution and select an installer
> make install-arch   # makepkg -sif
> make install-deb    # apt-get build-dep, dpkg-buildpackage, apt-get install
> make install-rpm    # dnf builddep, rpmbuild, dnf install
> ```
> 
> `make install` uses `/etc/os-release` (`ID`, then `ID_LIKE`) to detect Arch,
> Debian/Ubuntu, or Fedora/RHEL/CentOS families. The RPM installer requires DNF.
> For other distributions, select a compatible explicit target above.
> 
> `make arch`, `make deb` and `make rpm` only build. Debian and RPM packages go
> to `build/deb` and `build/rpm`. The NVIDIA inputs are cached in
> `~/.cache/gpu-unlock/inputs` (`make inputs`; override with `INPUTS=`).
> `dpkg-buildpackage` itself never uses the network, so a clean-chroot build (sbuild or
> pbuilder) needs `GPU_UNLOCK_INPUTS` pointing at that cache.
> The `make dist` archive, the Debian source package and the `.nosrc.rpm`
> contain no NVIDIA archives or generated firmware.
> 
> 
> # Support me
> 
> Help me buy more GPUs <3
> 
> [https://buymeacoffee.com/zagitta](https://buymeacoffee.com/zagitta)  
> 
> ETH: 0xf4eee937937f92038D70B16AbD7736D8a53a1c5c
> 
> BTC: bc1qwpkwp70fn76z3s4kg2l9y3j4kst95twcznuugf
> 
> SOL: 8Rih6HY7V4LcdjYHz4iSffT4fTniqw5CACaBigSVxNYu

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/Zagitta/gpu-unlock)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Zagitta--gpu-unlock"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C" AND file.name != "Zagitta--gpu-unlock" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W44" AND file.name != "Zagitta--gpu-unlock"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Zagitta--gpu-unlock");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Zagitta--gpu-unlock" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Zagitta" AND file.name != "Zagitta--gpu-unlock"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Zagitta--gpu-unlock");
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
> const me = dv.page("Repos/Zagitta--gpu-unlock");
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
> const me = dv.page("Repos/Zagitta--gpu-unlock");
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
> const me = dv.page("Repos/Zagitta--gpu-unlock");
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
> const me = dv.page("Repos/Zagitta--gpu-unlock");
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

- [[2026-10-25|2026-10-25]] — 首次收錄，3.5k stars
