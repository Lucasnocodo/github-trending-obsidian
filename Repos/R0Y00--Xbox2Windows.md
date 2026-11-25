---
repo: R0Y00/Xbox2Windows
url: https://github.com/R0Y00/Xbox2Windows
owner: R0Y00
owner_type: User
language: Python
license: MIT
description: "GTA VI static recompilation research for x64 Windows. Source-built EXEs run on Windows, and two translated pixel shaders match reference outputs on hardware and WARP. Full-game startup is unverified."
homepage: ""
stars: 1933
stars_per_day: 483
forks: 221
open_issues: 254
created: 2026-11-20
pushed_at: 2026-11-25
first_seen: 2026-11-23
week: "2026-W48"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "gpu-check-v0.1.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-23
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-11-28"
contributor_count: 5
engagement: "medium"
issue_close_rate: 49
repo_size_kb: 7421
readme_length: 9343
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-23"
star_history: "2026-11-23:1365,2026-11-24:1753,2026-11-25:1933"
tags:
  - github
  - "category/other"
  - "lang/python"
  - "topic/d3d12"
  - "topic/directx_raytracing"
  - "topic/scarlett"
  - "topic/static_recompilation"
  - "topic/windows"
aliases:
  - "Xbox2Windows"
  - "R0Y00/Xbox2Windows"
---

# Xbox2Windows

**1.4k** stars · **683** stars/天 · 建立 2 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/R0Y00--Xbox2Windows");
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

`gpu-check-v0.1.0`

`d3d12` `directx-raytracing` `scarlett` `static-recompilation` `windows` `xbox` `xbox-series-x`

> [!summary] 一句話摘要
> GTA VI static recompilation research for x64 Windows. Source-built EXEs run on Windows, and two translated pixel shaders match reference outputs on hardware and WARP. Full-game startup is unverified.

## 專案簡介

GTA VI static recompilation research for x64 Windows. Source-built EXEs run on Windows, and two translated pixel shaders match reference outputs on hardware and WARP. Full-game startup is unverified.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/R0Y00--Xbox2Windows");
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
> const me = dv.page("Repos/R0Y00--Xbox2Windows");
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
| Forks | 135 |
| Open Issues | 75 |
| Issue 解決率 | 49% (72 closed) |
| 最後推送 | 2026-11-23 |
| 建立日期 | 2026-11-20 |
| Repo 大小 | 7.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/R0Y00/Xbox2Windows) |
| Topics | `d3d12` `directx-raytracing` `scarlett` `static-recompilation` `windows` `xbox` `xbox-series-x` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 73
>     "C++" : 13
>     "Assembly" : 9
>     "CMake" : 4
>     "C" : 1
>     "HLSL" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@R0Y00](https://github.com/R0Y00) | 609 |
> | [@Vonsek](https://github.com/Vonsek) | 140 |
> | [@Leyukaka](https://github.com/Leyukaka) | 48 |
> | [@denn0x](https://github.com/denn0x) | 38 |
> | [@descent81](https://github.com/descent81) | 32 |

**最新版本**：gpu-check-v0.1.0 — Windows GPU Check v0.1.0 — native wave64 testers wanted (2026-11-20)

> [!info]- Release Notes
> We are looking for Windows GPU testers, especially Radeon owners with a wave64-capable adapter. The RTX 2060 and WARP baselines both passed the BVH differential check and skipped forced wave64. An independent run can fill that gap. This set of synthetic D3D12 tests supports the Xbox Series X|S compatibility research.
> 
> ## Run and share
> 
> 1. Download `Xbox2Windows-GpuCheck-win-x64.zip` and its SHA-256 file from the release assets.
> 2. Compare the checksum with `Get-FileHash .\Xbox2Windows-GpuCheck-win-x64.zip -Algorithm SHA256`, extract the ZIP, and open PowerShell in the extracted directory.
> 3. Run `.\Run-GpuCheck.ps1`. Review `gpu-report-hardware.md` and paste its contents in [the hardware coverage thread](https://github.com/R0Y00/Xbox2Windows/issues/1). Failures and capability skips are welcome. Mention if you would like credit by name or handle.
> 
> Tests run locally using embedded shaders. The package includes the exact source commit, MIT license and instructions. A Windows PC is enough. Source builders can help separately by [checking the first build from a clean checkout](https://github.com/R0Y00/Xbox2Windows/issues/2).

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-23 ~ 2026-11-23）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #817 from stan495/codex/x87-7800x3d-measurements

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/R0Y00/Xbox2Windows/issues/1) | Run the native wave64 BVH fixture on a supported Windows GPU `help wanted` | 4 | 213 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Xbox2Windows
> 
> Xbox2Windows researches static recompilation from Xbox Series X|S (Scarlett) to x64 Windows. It translates selected x64 machine code into C++ and selected gfx1013 shaders into desktop DXIL. The public tests build their own inputs and run without a game installation.
> 
> **Startup status.** Source-built Windows programs run from entry to process exit. The main executable was absent from the inspected package. Execution of the title's CPU code, full-game startup and frame rate remain unverified.
> 
> [Results](#current-results-and-open-work) · [Coverage chart](#instruction-coverage) · [Community and contributions](#community-and-contributions) · [Build on Windows](#first-build) · [Choose an experiment](#choose-an-experiment) · [Run the GPU check](#run-the-gpu-check)
> 
> 
> ## Current results and open work
> 
> | What runs | What was compared |
> |---|---|
> | **x64 programs from PE entry** | A two-record archive reader runs with blast 1.3 decompression under Windows, the PE mapper and the recompiled build. The three agree on output bytes, callback order, completed records, allocations, releases and exit status, including truncation and a refused output window. [Reproduce the archive comparison](docs/experiments.md#recompiling-the-blast-decoder) |
> | **Raster draw from PE entry** | The shim-startup EXE reuses one D3D12 texture across three 64×64 draws, including a partial compute update and a pipeline change. Native, mapped and recompiled runs match all 16,384 RGBA bytes per frame. A skipped update is detected at the first stale pixel. A second fixture uploads an 8x8 RGBA8 and a mode-6 BC7 texture from the CPU and samples them through a vertex-buffer quad, byte-exact across the three runners, with half-texel-UV and corrupted-upload negative controls. [Reproduce the draw comparison](docs/experiments.md#exe-startup-through-the-desktop-runtime-shims) |
> | **Pixel shaders** | At `c849f7a`, 851 of 12,101 PS records compiled, built D3D12 pipelines and matched controlled output on RTX 4060 Laptop and WARP. A two-mip draw verifies explicit LOD 0. A separate probe follows a constant-buffer read shared by 529 blocked records. Swapping buffers changes all 1,024 probe pixels. [Color readback](docs/experiments.md#offline-pixel-shader-recompilation) · [Depth and bindings](docs/experiments.md#buffered-depth-export) · [Read probe and latest counts](docs/experiments.md#first-unresolved-constant-buffer-read) |
> | **Compute shaders** | Of 2,689 package records, 12 ran under the tested UAV bindings. Each adapter passed 14 full-buffer comparisons, including dispatches with different group counts. [Dispatch and readback](docs/experiments.md#compute-uav-stores-from-a-native-container) |
> | **Mesh shaders** | A specialized entry fetched indexed vertices from a GPU buffer. Two position sets covered 1,024 and 276 pixels on a 32×32 target, matching the CPU reference on hardware and WARP. A compute and vertex fallback also draws the source-built indexed triangle on GTX 1060 and Windows 10 in-box WARP. [Mesh draw and specialization limits](docs/experiments.md#single-group-mesh-entry-specialization) · [SM 6.0 fallback](docs/experiments.md#mesh-draw-fallback) |
> | **Windows runtime** | Bink frame-buffer allocations reach the Windows heap through the shared provider. The FidelityFX experiment follows scratch writes from two passes through the RCAS output on an 8×4 tile. [Allocation, failure and retry](docs/experiments.md#frame-buffers-through-the-shared-windows-heap) · [Upscaler pixel comparison](docs/experiments.md#last-writers-of-the-pass-26-scratch-reads) |
> 
> 
> ### Instruction coverage
> 
> The chart counts instruction forms exercised by passing source-built fixtures. The experiments above measure program outputs and package shader records.
> 
> Both Windows jobs on `main` must pass before CI publishes a new chart. The image shows the measured commit and run ID.
> 
> [Chart source commit and CI run](https://github.com/R0Y00/Xbox2Windows/tree/coverage-dashboard#instruction-coverage) · [Find forms without a passing fixture](CONTRIBUTING.md#share-a-reproducible-finding)
> 
> 
> ## First build
> 
> On x64 Windows, install Python 3.11 or newer and Visual Studio's **Desktop development with C++** workload, including x64 MSVC, CMake, Ninja, and Windows SDK 10.0.26100 with DXC. Windows CI uses Python 3.12. Open PowerShell at the repository root and run the following commands.
> 
> ```powershell
> .\tools\dev.ps1
> python -m venv out/pe-env
> .\out\pe-env\Scripts\python.exe -m pip install -r requirements-dev.txt
> cmake --preset dev
> cmake --build --preset dev
> ctest --preset dev --no-tests=error -R 'desktop_root_signature|era_heap_allocation|offscreen_warp'
> ```
> 
> The smoke tests exercise a D3D12 root signature, heap allocation and software rendering. For just those checks, you can omit the two Python setup commands. With the Python environment installed, [run a focused experiment](#choose-an-experiment) or run the full suite with `ctest --preset dev --no-tests=error`.
> 
> To build and test at /O2 as Windows CI also does, use the `release` preset in place of `dev`. Its build directory is `out/build/release`.
> 
> Contributing from macOS or Linux? See the [non-Windows host guide](docs/non-windows-hosts.md) for the platform-independent Python and LLVM 15 checks.
> 
> 
> ### Windows build notes
> 
> - **DXC validation.** `shader_metadata_probe` skips when the validator lacks module-only validation. DXC 1.8.2502 is the first verified release that passes. To use a separate DXC installation, configure with `cmake --preset dev -DDXC_EXECUTABLE=C:/path/to/dxc/bin/x64/dxc.exe`. [Results by release](docs/experiments.md#module-only-validation-by-dxc-release) · [Original report](https://github.com/R0Y00/Xbox2Windows/issues/98) · [DXC download](https://github.com/microsoft/DirectXShaderCompiler/releases/tag/v1.8.2502)
> - **Windows 10.** The source-built BVH buffer operations run on in-box WARP at SM 6.0. For WARP checks that require SM 6.5 or DXR, use the app-local Agility SDK and WARP packages. [BVH buffer operations](docs/experiments.md#bvh-buffer-operations-on-in-box-warp) · [Windows 10 setup](docs/experiments.md#windows-10-with-the-app-local-agility-sdk-and-warp)
> - **Independent build.** A Windows 11 contributor reproduced the three smoke tests from a clean checkout at `71bb9f4` and again after an incremental rebuild at `2465837`. [Toolchain, full-suite results and capability skips](https://github.com/R0Y00/Xbox2Windows/issues/2#issuecomment-7063351821)
> 
> 
> ## Choose an experiment
> 
> After the full [Windows build](#first-build), run one comparison from the repository root.
> 
> | Experiment | Focused test |
> |---|---|
> | Native, mapped and recompiled archive reader | `ctest --preset dev --no-tests=error -R '^cpu_native_archive_blast$' -V` |
> | Indexed mesh draw on WARP | `ctest --preset dev --no-tests=error -R '^mesh_indexed_draw_warp$' -V` |
> | Textured mesh fallback at Shader Model 6.0 | `ctest --preset dev --no-tests=error -R '^mesh_textured_fallback_' -V` |
> | GPU-produced texture through the SM 6.0 mesh fallback | `ctest --preset dev --no-tests=error -R '^compute_mesh_texture_fallback_' -V` |
> | Compute shader buffer writes on WARP | `ctest --preset dev --no-tests=error -R '^compute_store_aot_warp$' -V` |
> | SPIR-V sampler views at Shader Model 6.0 | `ctest --preset dev --no-tests=error -R '^spirv_sampler_views_' -V` |
> | PE 32/64-bit base fixups against Windows | `ctest --preset dev --no-tests=error -R '^cpu_native_highlow$' -V` · [scope and controls](docs/experiments.md#highlow-and-mixed-width-base-relocations) |
> 
> The control-flow CPU translator supports [source-built string memory transfers](docs/experiments.md#string-memory-transfers-in-the-control-flow-cpu-lifter). MOVS and STOS, with and without REP, copy and fill 1-, 2-, 4- and 8-byte elements in either direction.
> 
> 
> ## Run the GPU check
> 
> Download the [Windows x64 GPU check and SHA-256](https://github.com/R0Y00/Xbox2Windows/releases/tag/gpu-check-v0.1.0), verify and extract the ZIP, then run this in PowerShell from t

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/R0Y00/Xbox2Windows)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "R0Y00--Xbox2Windows"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "R0Y00--Xbox2Windows" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W48" AND file.name != "R0Y00--Xbox2Windows"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/R0Y00--Xbox2Windows");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "R0Y00--Xbox2Windows" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "R0Y00" AND file.name != "R0Y00--Xbox2Windows"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/R0Y00--Xbox2Windows");
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
> const me = dv.page("Repos/R0Y00--Xbox2Windows");
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
> const me = dv.page("Repos/R0Y00--Xbox2Windows");
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
> const me = dv.page("Repos/R0Y00--Xbox2Windows");
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
> const me = dv.page("Repos/R0Y00--Xbox2Windows");
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

> **2026-11-23** — 首次收錄
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

- [[2026-11-25|2026-11-25]] — 再次上榜，1.9k stars
- [[2026-11-24|2026-11-24]] — 再次上榜，1.8k stars
- [[2026-11-23|2026-11-23]] — 首次收錄，1.4k stars
