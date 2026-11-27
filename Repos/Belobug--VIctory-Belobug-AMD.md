---
repo: Belobug/VIctory-Belobug-AMD
url: https://github.com/Belobug/VIctory-Belobug-AMD
owner: Belobug
owner_type: User
language: Rust
license: GPL-3.0
description: ""
homepage: ""
stars: 3646
stars_per_day: 3646
forks: 1055
open_issues: 416
created: 2026-11-25
pushed_at: 2026-11-26
first_seen: 2026-11-27
week: "2026-W48"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-27
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-30"
contributor_count: 5
engagement: "medium"
issue_close_rate: 4
repo_size_kb: 7325
readme_length: 8901
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-11-27"
star_history: "2026-11-27:3646"
tags:
  - github
  - "category/other"
  - "lang/rust"
aliases:
  - "VIctory-Belobug-AMD"
  - "Belobug/VIctory-Belobug-AMD"
---

# VIctory-Belobug-AMD

**3.6k** stars · **3.6k** stars/天 · 建立 1 天前 · Rust · GPL-3.0

```dataviewjs
const me = dv.page("Repos/Belobug--VIctory-Belobug-AMD");
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
> No description

## 專案簡介

No description available.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Belobug--VIctory-Belobug-AMD");
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
> const me = dv.page("Repos/Belobug--VIctory-Belobug-AMD");
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
| Forks | 1.1k |
| Open Issues | 416 |
| Issue 解決率 | 4% (16 closed) |
| 最後推送 | 2026-11-26 |
| 建立日期 | 2026-11-25 |
| Repo 大小 | 7.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Belobug/VIctory-Belobug-AMD) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members` `exclude` `version` `edition` `rust-version` `license` `publish` `victory-core` `victory-pe` `victory-loader` `victory-hle` `victory-gpu` `victory-shader` `victory-formats`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Marvisak](https://github.com/Marvisak) | 87 |
> | [@Belobug](https://github.com/Belobug) | 24 |
> | [@Dufftwt](https://github.com/Dufftwt) | 16 |
> | [@fxceless](https://github.com/fxceless) | 16 |
> | [@gomeaw](https://github.com/gomeaw) | 12 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-26 ~ 2026-11-26）
> **活躍天數** 1 天 · **最新 commit** Merge PR #324: Shaders: a size query is not reused (AMD's compiler crashes on 29 compute pipelines o

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#411](https://github.com/Belobug/VIctory-Belobug-AMD/issues/411) | RTX 5060 Ti 16GB - Gameplay compatibility and Series X/S per | 2 | 0 |
> | [#98](https://github.com/Belobug/VIctory-Belobug-AMD/issues/98) | Intel Arc B580: D3D12 GPU device removed during gameplay/men | 2 | 1 |
> | [#494](https://github.com/Belobug/VIctory-Belobug-AMD/issues/494) | Models glitching like crazy and vegetation flickers/disappea | 1 | 0 |
> | [#488](https://github.com/Belobug/VIctory-Belobug-AMD/issues/488) | Support for GPUs without mesh shaders (RX 580, RX 5600 XT, G | 1 | 0 |
> | [#445](https://github.com/Belobug/VIctory-Belobug-AMD/issues/445) | GPU Report: GeForce RTX 4090 (24 GB) + i9-14900K + 64GB — Lo | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # VIctory on an RX 7900 XTX
> 
> A fork of [VIctory](https://github.com/Marvisak/VIctory), a compatibility layer
> that runs an Xbox Series title natively on Windows from files the user supplies.
> 
> 
> ## How to run it
> 
> You need Windows 10/11 x64, a CPU with AVX2, a Direct3D 12 GPU with shader
> model 6.6 and mesh shaders, Rust (the toolchain is pinned), the MSVC build
> tools, and your own dump of the title.
> 
> ```powershell
> git clone https://github.com/avatarmanz/VIctory-7900XTX
> cd VIctory-7900XTX
> copy victory.example.toml victory.toml      # then set your paths, outside this folder
> cargo build --locked --profile diag -p victory --features diagnostics
> scripts\play.ps1 -Exe 
> ```
> 
> The launcher requests light device removal diagnostics (DRED) by default with
> `-Build diag`. DRED requires `--features diagnostics`. For a release binary
> built with that feature, request DRED with
> `-Build release -More @{VICTORY_D3D12_DRED='light'}`.
> 
> `scripts\play.ps1 -Safe` leaves out the newest, faster ways; try it first when
> something is wrong. `-RayTracing` turns the title's ray-traced indirect light on.
> 
> For PC FSR 4.1.2, set `[paths].fidelityfx_dir` in `victory.toml` or
> `VICTORY_FIDELITYFX_DIR` to the folder containing AMD's signed
> `amd_fidelityfx_upscaler_dx12.dll`. Use the DirectX 12 upscaler in
> `Kits/FidelityFX/signedbin`. [AMD FSR SDK 2.4.0](https://github.com/GPUOpen-LibrariesAndSDKs/FidelityFX-SDK/tree/v2.4.0/Kits/FidelityFX/signedbin)
> 
> `scripts\play.ps1 -Exe  -Fsr4K quality` selects 2560×1440 input for
> the retail 1.0.2.1 Series X 4K SDR profile. `balanced` selects 2258×1270
> and `performance` selects 1920×1080. All three output 3840×2160. With
> `victory run` directly, set `VICTORY_FSR_4K` to the preset name.
> AMD's SDK offers FSR 4.1.2 for some cards only. Where it does not, the
> newest FSR 3.1 it offers is used in its place and the log says so; its
> picture differs from FSR 4's. Where it offers neither, the run stops
> before the title starts and names the versions that were offered.
> The log reports the provider at context creation and the actual input and
> output sizes at the first successful temporal dispatch. The title profile
> and PC FidelityFX bridge were ported from [DexNom/VIctory](https://github.com/DexNom/VIctory/commit/ab34a8b21477c94da2a6cf07249138e8bc84602e).
> 
> On a hybrid-graphics PC, the runtime and offline pipeline checks prefer a
> high-performance adapter with Shader Model 6.6. The runtime logs its adapter
> name, PCI vendor and device IDs, and dedicated VRAM. Set
> `VICTORY_D3D12_ADAPTER` to a zero-based DXGI index or part of the adapter's
> name to select it explicitly. With the launcher, pass
> `-More @{VICTORY_D3D12_ADAPTER='NVIDIA'}`.
> 
> Before the first run, ahead of time (both can be stopped and go on later):
> 
> ```powershell
> target\diag\victory.exe shaders    # every shader translated, minutes
> target\diag\victory.exe warm --used                     # pipelines earlier runs drew with, for a new driver or build
> ```
> 
> Commands, debugging switches and upstream's own description:
> [docs/README-fxceless.md](docs/README-fxceless.md). Every `VICTORY_...` switch is
> described in a comment where it is read.
> 
> 
> ## The goal
> 
> **A stable 30 fps or more without ray tracing, then as high a frame rate and as
> low frame times as the PC allows**, on an AMD RX 7900 XTX first and on PCs with
> 32 GB (later 16 GB) of RAM.
> 
> The way there is **porting, not emulating**: patching the title's renderer so it
> behaves the way a PC renderer does, rather than having the layer watch and copy
> the console's shared memory every frame. Shaders are translated ahead of time
> into a versioned store that is kept between builds. Ray tracing stays optional
> and off by default. The picture comes after the frame rate: texture pop-in and
> lighting that is too bright or too dark when walking indoors are next in line.
> 
> **This repository contains no game files, code or assets.** You need your own
> copy of the game. It is not affiliated with or endorsed by the game's developer
> or publisher.
> 
> 
> ## Where it stands (2026-11-26)
> 
> The measurements below come from one Windows 11 PC with an Intel i9-12900K,
> 64 GB of system RAM and a Radeon RX 7900 XTX (24 GB of dedicated video memory).
> Ray tracing was off for these runs.
> 
> | | |
> |---|---|
> | City street, Series S profile, renderer patches 1, 2, 5, 6 and 7 on | about 45 ms a frame (about 22 fps, 44.9 ms in run merge-5) |
> | Same, patches 1, 2, 5 and 6 | 45.6 ms, p95 47 ms |
> | Same, patches 1, 2 and 5 | 47.3 ms (about 21 fps), p95 49 ms |
> | Series X profile, patches 1+2 | about 53 ms (about 19 fps) |
> | Same scene before the patches | 57-75 ms (13-17 fps) |
> | Shaders the title uses that translate | all of them (25,790 of 25,985; the rest are unused geometry shaders) |
> | Memory | about 30 GB of private memory, 10.5 GB of VRAM: **64 GB of RAM recommended** for now |
> 
> It started at 280 ms a frame in the same scenes three days earlier. What sets
> the frame now is the one thread that submits the title's work to the card
> (about 40 ms); the card itself needs about 36 ms and now waits about 7 ms a frame with nothing queued.
> 
> 
> ### Reports from other GPUs
> 
> | GPU and build | What the contributor observed |
> |---|---|
> | Radeon RX 9060 XT (16 GB), `cd8dfc0` with local changes | In the same Series X interior at 1080p, the game averaged 19.8 fps with ray tracing off and 15.6 fps with it on. Indirect lighting showed white patches and dark smears. [Run settings and results](https://github.com/Belobug/VIctory-Belobug-AMD/issues/313) |
> | GeForce RTX 3090 (24 GB), `a-publier@cd8dfc0` | The prison rendered. Two warm Series S runs averaged 545 and 532 ms per frame. The contributor reported 10.0 and 10.2 GB of VRAM in those runs. [Run settings and results](https://github.com/Belobug/VIctory-Belobug-AMD/issues/333) |
> | Intel Arc B580 (12 GB), revision unreported | Startup and initial menu navigation worked. Further menu interaction slowed to about 0.7 fps before D3D12 device removal. [Crash report](https://github.com/Belobug/VIctory-Belobug-AMD/issues/98) |
> 
> The 10.5 GB of VRAM in the RX 7900 XTX table is the usage reported for that run.
> Memory use and frame time depend on the scene and settings. The [ray-tracing notes](docs/fork-ray-tracing.md)
> describe which lighting paths run and the remaining rendering issues.
> 
> 
> ### Renderer patches (off by default while they are tested)
> 
> | Switch | What it does |
> |---|---|
> | `VICTORY_PORT_CONSTANTS=1` | The title's 174 MB constants heap is read by the card where the title writes it: no uploads, no fills |
> | `VICTORY_PORT_DESCRIPTORS=1` | The title's descriptor-table stores are patched (byte-checked) to report the slots they write, instead of a scan of ~600,000 slots a frame |
> | `VICTORY_PORT_CBV=1` | Translated shaders read constant buffers in place as raw bytes (~22,000 fills a frame to none; -4.7 ms) |
> | `VICTORY_PORT_GUARD=1` | The write guards' lock is shared by faults and refreshes, with a claim per 64 KiB block; the submission's planning runs beside it (title threads' waits 29 ms to ~2 ms a frame; -2 ms) |
> | `VICTORY_PORT_JOURNAL=1` | The heaps' records are asked for at the title's submit, and the journal's notes are split into 64 parts with locks of their own (the submit thread's waits ~5 ms + 1 ms to ~0.3 ms; -1 to -3 ms) |
> 
> 
> ### Other switches
> 
> | Switch | What it does |
> |---|---|
> | `--console series-s` | The Series S profile: 1080p output, about 5 ms faster, a softer picture |
> | `VICTORY_OUTPUT=1920x1080` | The title renders to that output size itself (Series X profile; about 16 ms less card time) |
> | `VICTORY_FRAME_INTERVAL_MS=16.667` | Lets the title go above 30 fps (menus and videos reach 60; the game's clock stays right) |
> | `VICTORY_AMBIENT_SETTLE` | How fast light settles after walking indoors (on by default, `250,3`; `0` turns it off) |
> | `VICTORY_TEXTURE_STORE=1` | Converted textures kept between runs (about 8 ms a frame for now: off) |
> | `VICTORY_KBM_GTA=1` | Optional GTA V PC-style keyboard and mouse mapping on the stand-in pad: `F2` or `` ` `` (`~`) toggles mouse

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[4lwayz--portwatch-vi|4lwayz/portwatch-vi]] · [[852wa--JIZURA|852wa/JIZURA]] · [[AFK-surf--xnulinux|AFK-surf/xnulinux]] · [[ARahim3--DigUp|ARahim3/DigUp]]

[GitHub](https://github.com/Belobug/VIctory-Belobug-AMD)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Belobug--VIctory-Belobug-AMD"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "Belobug--VIctory-Belobug-AMD" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W48" AND file.name != "Belobug--VIctory-Belobug-AMD"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Belobug--VIctory-Belobug-AMD");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Belobug--VIctory-Belobug-AMD" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Belobug" AND file.name != "Belobug--VIctory-Belobug-AMD"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Belobug--VIctory-Belobug-AMD");
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
> const me = dv.page("Repos/Belobug--VIctory-Belobug-AMD");
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
> const me = dv.page("Repos/Belobug--VIctory-Belobug-AMD");
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
> const me = dv.page("Repos/Belobug--VIctory-Belobug-AMD");
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
> const me = dv.page("Repos/Belobug--VIctory-Belobug-AMD");
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

> **2026-11-27** — 首次收錄
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

- [[2026-11-27|2026-11-27]] — 首次收錄，3.6k stars
