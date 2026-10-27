---
repo: JustAResearcher/gpu-unlock-ada
url: https://github.com/JustAResearcher/gpu-unlock-ada
owner: JustAResearcher
owner_type: User
language: C
license: GPL-2.0
description: "GPU tensor unlock source for RTX 4090 and experimental RTX 4070 Ti SUPER; firmware generated locally"
homepage: ""
stars: 3951
stars_per_day: 1317
forks: 510
open_issues: 26
created: 2026-10-23
pushed_at: 2026-10-26
first_seen: 2026-10-26
week: "2026-W44"
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
last_reviewed: 2026-10-26
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-10-30"
contributor_count: 5
engagement: "medium"
issue_close_rate: 86
repo_size_kb: 703
readme_length: 8421
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-26"
star_history: "2026-10-26:3057,2026-10-27:3951"
tags:
  - github
  - "category/other"
  - "lang/c"
aliases:
  - "gpu-unlock-ada"
  - "JustAResearcher/gpu-unlock-ada"
---

# gpu-unlock-ada

**3.1k** stars · **1.5k** stars/天 · 建立 2 天前 · C · GPL-2.0

```dataviewjs
const me = dv.page("Repos/JustAResearcher--gpu-unlock-ada");
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

`v1.1.1`

> [!summary] 一句話摘要
> GPU tensor unlock source for RTX 4090 and experimental RTX 4070 Ti SUPER; firmware generated locally

## 專案簡介

GPU tensor unlock source for RTX 4090 and experimental RTX 4070 Ti SUPER; firmware generated locally

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/JustAResearcher--gpu-unlock-ada");
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
> const me = dv.page("Repos/JustAResearcher--gpu-unlock-ada");
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
| Forks | 394 |
| Open Issues | 5 |
| Issue 解決率 | 86% (30 closed) |
| 最後推送 | 2026-10-26 |
| 建立日期 | 2026-10-23 |
| Repo 大小 | 703 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/JustAResearcher/gpu-unlock-ada) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C" : 75
>     "Python" : 20
>     "Cuda" : 3
>     "PowerShell" : 2
>     "Makefile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@benefit14snake](https://github.com/benefit14snake) | 40 |
> | [@Windroid234](https://github.com/Windroid234) | 8 |
> | [@A-XIANGQAQ](https://github.com/A-XIANGQAQ) | 7 |
> | [@lly0571](https://github.com/lly0571) | 5 |
> | [@ilikenwf](https://github.com/ilikenwf) | 5 |

**最新版本**：v1.1.1 — GPU Unlock 1.1.1 — TF32 and INT4 evidence (2026-10-24)

> [!info]- Release Notes
> GPU Unlock 1.1.1 publishes a reproducible SM89 tensor issue-rate probe and matched stock/unlocked TF32 and unsigned INT4 results on one RTX 4070 Ti SUPER (`10de:2705`, NVIDIA `580.178.04`, 240 W cap). The Ada unlock transaction is unchanged from 1.1.0; the module and DKMS version metadata advance to 1.1.1.
> 
> | Register-resident mode | Stock | Unlocked |
> | --- | ---: | ---: |
> | FP16 inputs, FP32 accumulate (control) | 94.96 TF/s | 188.97 TF/s |
> | TF32 inputs, FP32 accumulate | 47.49 TF/s | 94.51 TF/s |
> | Unsigned INT4 inputs, INT32 accumulate | 754.81 TOP/s | 754.68 TOP/s |
> 
> The same cubin, card, driver, 240 W cap, and launch settings were used in both boots. Each mode checked 270,336 output cells with zero mismatches per state. **TF32 instruction issue rate gained 1.99×; unsigned INT4 did not improve.** These all-one, register-resident loops do not establish an application GEMM or inference speedup. INT8 and one previously tested FP8 GEMM were also unchanged.
> 
> Read the [canary report](https://github.com/JustAResearcher/gpu-unlock-ada/blob/v1.1.1/docs/ada-2705-report.md), [sanitized numeric output and hashes](https://github.com/JustAResearcher/gpu-unlock-ada/tree/v1.1.1/docs/evidence/ada2705), and [GPL benchmark source and reproduction steps](https://github.com/JustAResearcher/gpu-unlock-ada/blob/v1.1.1/diagnostics/bench/README.md). Installation and boot rollback are in the [Quick Start](https://github.com/JustAResearcher/gpu-unlock-ada/blob/v1.1.1/QUICKSTART.md).
> 
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-26 ~ 2026-10-26）
> **活躍天數** 1 天 · **最新 commit** bench: accept N/A as the expected power limit for laptops

## README 摘錄

> [!info]- 展開查看原文 README
> # GPU unlock 1.1.1 — RTX 4090 and experimental Ada GPUs
> 
> New to this project? Start with the [copy-paste Quick Start](QUICKSTART.md).
> 
> This Linux kernel module enables the SM speed-select override before the stock
> NVIDIA driver starts. RTX 4090 (`10de:2684`, AD102) support has demonstrated
> approximately **2× FP16 and BF16 tensor throughput with FP32 accumulation**:
> 
> | Mode | Before | After |
> |---|---:|---:|
> | FP16 → FP32 accumulate | 165.6 TF/s | 331.6 TF/s |
> | BF16 → FP32 accumulate | 165.5 TF/s | 330.6 TF/s |
> 
> The override survived PCIe Function Level Reset (FLR), stock NVIDIA `615.78.08`
> initialization and CUDA benchmarks. INT8, `dp4a` and scalar FP32 stayed near their
> baseline rates. The original transaction preceded the repository cleanup; see
> the [technical report](rtx4090-register-report.md) and
> [original evidence](docs/evidence/rtx4090/README.md).
> 
> An independent owner run of revision `8855e7b` also completed the RTX 4090
> transaction and NVIDIA driver handoff on Linux `7.2.11-arch1-1`. Matched
> stock/unlocked measurements with NVIDIA `615.78.08` and the same 450 W cap
> found FP16/FP32 instruction throughput **160.4 → 320.4 TF/s** and BF16/FP32
> **159.7 → 320.2 TF/s**. All exercised numerical checks passed. Real cuBLAS
> GEMM median throughput varied by shape: FP16 gained 12–34%, BF16 gained
> 16–20% at two shapes and was essentially unchanged at 4096³. These are one
> matched run pair with the desktop active, not whole-application speedups or
> an extended stability test. See the [matched evidence and limits](docs/evidence/rtx4090-pr1-matched/README.md)
> and [testing workflow](docs/testing.md).
> 
> A modified 48 GB RTX 4090 (`10de:2684`, AD102) on Ubuntu 26.04 with Linux
> `7.0.0-38-generic` and NVIDIA `610.57.04` open kernel modules also completed the
> transaction and driver handoff on 2026-10-25: `fmla32` went from `1` to `0`,
> FP16/FP32 instruction throughput **164.9 → 328.9 TF/s**, BF16/FP32
> **164.8 → 328.7 TF/s**, with INT8, `dp4a` and scalar unchanged and no Xid. A
> quantized mixture-of-experts serving workload on the same card showed **no**
> gain (8K prefill 0.983×), which is consistent with quantized matmuls not
> consuming the FP32-accumulate tensor path. That is one card, one cold boot and
> one workload. See the [modified-card evidence and limits](docs/evidence/rtx4090-48g-modded/README.md).
> Further matched owner reproductions used NVIDIA [610.57.04](docs/evidence/rtx4090-610.57.04/README.md)
> and [595.91.07](docs/evidence/rtx4090-595.91.07/README.md).
> 
> A separate cold test of the Ada port on one RTX 4070 Ti SUPER
> (`10de:2705`) with NVIDIA `580.178.04` measured FP16/FP32 tensor issue rate
> at **95.0 → 189.9 TF/s** and BF16/FP32 at **95.0 → 189.7 TF/s** under the
> same 240 W power cap. INT8 stayed at 379.5 TOP/s. The stock driver loaded,
> the NVIDIA RM getter reported full FMLA32 rate, deterministic FP16/BF16 GEMM
> outputs matched exactly, and owner mining recovered with fresh accepted shares.
> A second matched instruction benchmark found **TF32/FP32 47.49 → 94.51 TF/s**
> (1.99×), with its FP16/FP32 control also near 2×. Unsigned INT4/INT32 stayed
> at approximately **754.8 TOP/s** in both states. These are register-resident
> issue rates, not application GEMM or inference speedups.
> A matched, verified E4M3 FP8/FP32 CUTLASS GEMM measured **59.326 TF/s stock →
> 59.495 TF/s unlocked** on this card, a 0.3% difference. That kernel reaches only
> about 17% of this card's FP8 peak, so it cannot resolve an issue-rate change.
> Other measurements do put FP8 in the affected group: an 8192³ E4M3 GEMM on a
> Windows RTX 4080 SUPER measured **199.4 → 310.4 TF/s (+55.7%)** and
> **199.4 → 298.7 TF/s (+49.8%)** in two runs (see
> [goldlionren/gpu-unlock-4080s](https://github.com/Goldlionren/gpu-unlock-4080s);
> its author flags FP8 variance and keeps FP8 out of that repo's own pass/fail
> gate), and register-resident E4M3 probes read **603.1 TF/s** unlocked on the
> modified 48 GB RTX 4090 (see [that evidence directory](docs/evidence/rtx4090-48g-modded/README.md))
> and **165.45 → 323.95 TF/s (1.96×)** on a Windows RTX 4070 Ti SUPER (see
> [A-XIANGQAQ/rtx4070tis-ad103-tensor-unlock](https://github.com/A-XIANGQAQ/rtx4070tis-ad103-tensor-unlock)).
> The 4090 figure is 91% of its 660.6 TF/s full FP8 rate; NVIDIA rates a stock
> RTX 4090 at 330.3 TF/s for FP8 with FP32 accumulate and 660.6 with FP16
> accumulate.
> So FP8 does move at the issue-rate level; a matched AD103 pair is 1.96×. At a
> fixed power limit the application GEMM stays below that: an
> unlocked RTX 4090 peaked at 346 W against 313 W stock and spent both MMA and
> GEMM passes under SW Power Cap (see
> [the 610.57.04 evidence](docs/evidence/rtx4090-610.57.04/README.md)).
> This is one card; the unlock succeeded on two cold boots and two ordinary
> warm reboots, the last from a persistent EFI default. Throughput was measured
> on the first cold boot. See the [2705 canary report](docs/ada-2705-report.md)
> and its [sanitized raw benchmark output](docs/evidence/ada2705/README.md).
> 
> The AD102 payload and its debug-booter analysis come from
> **[TOTORONG/AD103_win_unlocker](https://huggingface.co/TOTORONG/AD103_win_unlocker)**.
> This fork integrates that published payload into
> **[Zagitta/gpu-unlock](https://github.com/Zagitta/gpu-unlock)**'s Linux module,
> firmware generation and boot packaging. The payload is essential to the result.
> 
> 
> ## Build and install
> 
> Clone the GPL-2.0-only source and build the packages locally so the pinned
> NVIDIA firmware is downloaded and generated on your own machine:
> 
> ```sh
> git clone https://github.com/JustAResearcher/gpu-unlock-ada.git
> cd gpu-unlock-ada
> make install
> ```
> 
> `make install` detects the supported distribution family. Its explicit targets
> are:
> 
> ```sh
> make install-arch   # makepkg -sif
> make install-deb    # apt-get build-dep, dpkg-buildpackage, apt-get install
> make install-rpm    # dnf builddep, rpmbuild, dnf install
> ```
> 
> `make arch`, `make deb` and `make rpm` build without installing. Packages are
> built from the committed `HEAD`; Debian and RPM outputs go to `build/deb` and
> `build/rpm`. Kernel headers and a working DKMS toolchain are required.
> 
> Builds fetch the pinned NVIDIA `610.43.03` source and binary inputs over HTTPS
> and verify their SHA-256 hashes. `make inputs` prepares the cache;
> `make firmware` generates assets from cached inputs; `make assets` does both.
> The default cache is `$HOME/.cache/gpu-unlock` and can be overridden with
> `CACHE=`, `INPUTS=` and `ASSETS=`. A clean-chroot Debian build needs
> `GPU_UNLOCK_INPUTS` pointing to the input cache because `dpkg-buildpackage`
> does not fetch inputs itself.
> 
> The source archive produced by `make dist`, the Debian source package and the
> `.nosrc.rpm` contain no NVIDIA archives or generated firmware. See
> [firmware/README.md](firmware/README.md) for the input and asset layout.
> Prebuilt firmware packages are not distributed by this repository.
> 
> 
> ## Supported targets
> 
> The module selects the AD102 firmware and payload automatically for RTX 4090
> `10de:2684`. The original GeForce/CMP GA102/GA104 device list and GA102 payload
> are retained, along with the newer GA103/GA106 device list. Upstream reported
> RTX 3090 success; this branch does not revalidate every legacy board.
> GA107 RTX 3050 6GB (`10de:2584`) uses the same GA102 Booter path and was
> unlocked on one card ([2584 report](docs/ga107-2584-report.md)).
> 
> 
> ## Check and disable
> 
> Inspect the kernel log after boot:
> 
> ```sh
> journalctl -k -b | grep gpu_unlock
> lspci -nnk -s 0000:03:00.0  # replace the example address
> ```
> 
> A loaded module or successful `modprobe` return alone does not prove an unlock:
> look for the selected card's `gpu_unlock: unlocked` message and the payload,
> selector and post-FLR checks. The report describes independent register and
> performance confirmation. The optional read-only sampler lives in
> `diagnostics/peek`; the CUDA instruction benchmark is in `diagnostics/bench`.
> Never load a second BAR0 sampler while `gpu_unlock` is performing its firmware
> transaction.
> 
> If the module reports that firmware did not stop and its DMA bu

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/JustAResearcher/gpu-unlock-ada)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "JustAResearcher--gpu-unlock-ada"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C" AND file.name != "JustAResearcher--gpu-unlock-ada" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W44" AND file.name != "JustAResearcher--gpu-unlock-ada"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/JustAResearcher--gpu-unlock-ada");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "JustAResearcher--gpu-unlock-ada" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "JustAResearcher" AND file.name != "JustAResearcher--gpu-unlock-ada"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/JustAResearcher--gpu-unlock-ada");
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
> const me = dv.page("Repos/JustAResearcher--gpu-unlock-ada");
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
> const me = dv.page("Repos/JustAResearcher--gpu-unlock-ada");
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
> const me = dv.page("Repos/JustAResearcher--gpu-unlock-ada");
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
> const me = dv.page("Repos/JustAResearcher--gpu-unlock-ada");
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

- [[2026-10-27|2026-10-27]] — 再次上榜，4.0k stars
- [[2026-10-26|2026-10-26]] — 首次收錄，3.1k stars
