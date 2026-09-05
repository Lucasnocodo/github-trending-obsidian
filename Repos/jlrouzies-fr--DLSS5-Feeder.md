---
repo: jlrouzies-fr/DLSS5-Feeder
url: https://github.com/jlrouzies-fr/DLSS5-Feeder
owner: jlrouzies-fr
owner_type: User
language: C++
license: NOASSERTION
description: "DLSS 5 neural rendering in D3D11/D12/Vulkan games that ship without any DLSS — feeds a synthetic DLAA contract (ReShade depth + motion vectors) to the DLSS 5 add-on via a private D3D12 device."
homepage: ""
stars: 724
stars_per_day: 121
forks: 33
open_issues: 18
created: 2026-08-29
pushed_at: 2026-09-04
first_seen: 2026-09-05
week: "2026-W36"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: "v0.13.1-beta.1"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-05
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-09-12"
contributor_count: 4
engagement: "low"
issue_close_rate: 65
repo_size_kb: 4920
readme_length: 9861
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-09-05"
star_history: "2026-09-05:724"
tags:
  - github
  - "category/other"
  - "lang/c++"
aliases:
  - "DLSS5-Feeder"
  - "jlrouzies-fr/DLSS5-Feeder"
---

# DLSS5-Feeder

**724** stars · **121** stars/天 · 建立 6 天前 · C++ · NOASSERTION

```dataviewjs
const me = dv.page("Repos/jlrouzies-fr--DLSS5-Feeder");
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

`v0.13.1-beta.1`

> [!summary] 一句話摘要
> DLSS 5 neural rendering in D3D11/D12/Vulkan games that ship without any DLSS — feeds a synthetic DLAA contract (ReShade depth + motion vectors) to the DLSS 5 add-on via a private D3D12 device.

## 專案簡介

DLSS 5 neural rendering in D3D11/D12/Vulkan games that ship without any DLSS — feeds a synthetic DLAA contract (ReShade depth + motion vectors) to the DLSS 5 add-on via a private D3D12 device.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/jlrouzies-fr--DLSS5-Feeder");
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
> const me = dv.page("Repos/jlrouzies-fr--DLSS5-Feeder");
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
| Forks | 33 |
| Open Issues | 18 |
| Issue 解決率 | 65% (34 closed) |
| 最後推送 | 2026-09-04 |
| 建立日期 | 2026-08-29 |
| Repo 大小 | 4.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jlrouzies-fr/DLSS5-Feeder) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C++" : 78
>     "PowerShell" : 15
>     "HLSL" : 4
>     "C" : 2
>     "Batchfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jlrouzies-fr](https://github.com/jlrouzies-fr) | 72 |
> | [@rubicoul](https://github.com/rubicoul) | 1 |
> | [@Phroster](https://github.com/Phroster) | 1 |
> | [@imminaa](https://github.com/imminaa) | 1 |

**最新版本**：v0.13.1-beta.1 — 0.13.1-beta.1 (2026-09-04)

> [!info]- Release Notes
> > ### You probably do not need to install this by hand
> >
> > **[`Install-DLSS5Feeder.ps1`](https://github.com/jlrouzies-fr/DLSS5-Feeder/blob/main/tools/Install-DLSS5Feeder.ps1)** does the whole install from one command — ReShade, this feeder, LumeniteFX, your chosen neural consumer, both NVIDIA runtimes, dgVoodoo2 for Direct3D 8/9, and the `.ini` files with the techniques already enabled in the right order. Drop it next to the game's `.exe`, right-click ▸ **Open in Terminal**, and run:
> >
> > ```
> > powershell.exe -ExecutionPolicy Bypass -File .\Install-DLSS5Feeder.ps1
> > ```
> >
> > Existing files are merged and backed up, never replaced, and it finishes with a verification pass. See **AUTOMATIC_INSTALLATION_AVAILABLE.txt** in the assets below for the full details and the unattended-run switches.
> 
> ---
> 
> One new thing on top of `0.13.0-beta.1`: **the 32-bit add-on now supports Direct3D 10 games directly**, with no translation layer in front. Everything else is unchanged, and the helper is byte-for-byte the same code.
> 
> > **32-bit games: take BOTH `dlss5-feed.addon32` and `host64\dlss5-feed-host64.exe` from this zip.** The helper protocol is unchanged (still v7) and the helper itself did not change this release — but keep the pair together as a matter of habit; mixed halves are how confusing bug reports start.
> 
> ---
> 
> ## Direct3D 10 games now work
> 
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-31 ~ 2026-09-03）
> **活躍天數** 4 天 · **最新 commit** README: fold the verifier section into the automated installer, and show it

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#47](https://github.com/jlrouzies-fr/DLSS5-Feeder/issues/47) | NVSDK_NGX_D3D12_Init -> 0xBAD00001 on three machines with NG | 2 | 25 |
> | [#57](https://github.com/jlrouzies-fr/DLSS5-Feeder/issues/57) | DLSS5 Feeder stops after several minutes in Batman: Arkham K | 0 | 0 |
> | [#56](https://github.com/jlrouzies-fr/DLSS5-Feeder/issues/56) | dgVoodooCpl.exe installed by script instead of dgVoodoo2 | 0 | 1 |
> | [#55](https://github.com/jlrouzies-fr/DLSS5-Feeder/issues/55) | dont know how install | 0 | 0 |
> | [#54](https://github.com/jlrouzies-fr/DLSS5-Feeder/issues/54) | It doesn’t work for 32‑bit games with the new Nvidia driver  | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> [](AI-DECLARATION.md)
> 
> 
> ## Before you install: three things
> 
> None of this is hard, and the [automated installer](#install-the-automated-way) verifies most of it for you.
> 
> 
> ### 2. You need one neural add-on installed next to this one
> 
> DLSS5-Feeder does not sharpen anything by itself. It builds the DLSS request your game never
> makes; a **second add-on** does the actual neural rendering. You install **exactly one** of them.
> 
> **Recommended: Deep Fried Chicken**, by Alexander, from its Discord:
>  — take **1.4.8 or newer**.
> 
> Copy its three files next to your game's `.exe` (or into `host64\` for a 32-bit game):
> `deep-fried-chicken.addon64`, `deep-fried-chicken-nvngx.dll` and `deep-fried-chicken.cfg`.
> Its settings file already arrives set up correctly, so leave it alone for your first run. You
> supply `nvngx_dlssnr.dll` and `nvngx_dlss.dll` yourself, as always.
> 
> > **Never install two neural add-ons.** If Deep Fried Chicken finds RenoDX's add-on or Alex's
> > Toolkit loaded beside it, it does nothing at all for the whole session — silently, as far as
> > your eyes are concerned. Pick one. If something looks like it is not working, this is the first
> > thing to check.
> 
> Using Krish's RenoDX add-on instead (the older option, still fully supported)
> 
> `renodx-dlss5.addon64`, the `#DLSS5` build, from the RenoDX Discord, `#DLSS5` channel:
> . It is what every release
> up to now was developed against.
> 
> The feeder fingerprints whichever build it finds and adapts, so any recent one works — take the
> newest in the channel. Any `renodx-dlss5*.addon64` name is recognised (`renodx-dlss5-4.7.addon64`
> included; before 0.11.0-beta.2 only the exact name was, and a versioned file was logged as "not
> found" and treated as the classic engine). Keep just one copy — ReShade loads them all.
> 
> The feeder writes `EnableHooks=2`, `NeuralUplift=1` and `NREnableUpscaling=0` when they are unset,
> and in the `host64` helper it unbinds the global hotkeys so a gameplay keypress cannot silently
> toggle neural rendering in a background process. Every guard is keyed to a marker only the build
> that needs it carries. **None of this applies to Deep Fried Chicken**, which has its own config
> file and its own overlay tab.
> 
> | Build | Marker | What the feeder does about it |
> | --- | --- | --- |
> | v4.7 | `NRGlobalTone` | Newest, checked 2026-09-01. Replaces the paper-white codec with a reversible colour bridge (SDR sRGB / linear HDR BT.709 / PQ BT.2020) picked from the contract the feeder already publishes, plus a fenced D3D12 workset pool. Nothing new is required from the feeder; the 32-bit overlay mirrors its renamed sliders and its two new keys. |
> | v4.6 | `NRToggleKey` | Global hotkeys, WIP upscaling with a rejection latch, richer decline diagnostics. See the `NRStyle=2` note under Smooth Motion below. |
> | v45+ | `EnableHooks` | Rescans every present and adopts missed features lazily, so the feeder skips its warm-up re-create. |
> | older | — | Classic single hook pass; the warm-up re-create stays on. |
> 
> **Verification status:** no game row has verified a v4.6 or v4.7 run end-to-end yet. The
> compatibility work is static — marker detection, key defaults, panel mirroring — and both
> generations were checked against the shipped binaries.
> 
> Careful: renodx-dlss and renodx-dlss5 are two different add-ons
> 
> - **`renodx-dlss5`** (Krish) is a *neural add-on*. It works **with** this project, as the
>   alternative to Deep Fried Chicken above.
> - **`renodx-dlss`** (ShortFuse) *replaces* this project — it builds the DLSS request itself, so it
>   neither needs nor tolerates the feeder. One or the other, never both.
> 
> 
> ## Install: the automated way
> 
> `Install-DLSS5Feeder.ps1` does the whole install from one command:
> 
> - Download [the script](tools/Install-DLSS5Feeder.ps1).
> - Drop the `.ps1` file next to your game's `.exe`.
> - Right-click in the folder ▸ **Open in Terminal**.
> - Paste this and press Enter:
>   ```
>   powershell.exe -ExecutionPolicy Bypass -File .\Install-DLSS5Feeder.ps1
>   ```
> - Confirm the executable it proposes.
> 
> Or point it at the exe from anywhere:
> 
> ```
> powershell -ExecutionPolicy Bypass -File .\Install-DLSS5Feeder.ps1 "C:\path\to\game.exe"
> ```
> 
> It reads the architecture and render API out of the executable, then downloads (once, into a
> cache) and installs everything the manual sections below describe: ReShade 6.8+ with add-on
> support (a local DLL, or the machine-wide Vulkan layer plus the `ReShadeApps.ini` entry), the
> feeder from the latest release (`addon32` + `host64\` for a 32-bit game), the ReShade framework
> headers, LumeniteFX, Deep Fried Chicken, both NVIDIA runtimes, dgVoodoo2 for Direct3D 8/9 games
> (watermark off; `-DgVoodooWatermark` keeps it), and `ReShade.ini` / `ReShadePreset.ini` with the
> provider selected and both techniques enabled in the right order. Existing files are merged into
> and backed up, not replaced. It ends by running a read-only verification pass and prints the
> result — every line is `[ OK ]`, `[WARN]` or `[FAIL]`, with the fix for each failure.
> 
> Things to know:
> 
> - **Windows Defender flags Deep Fried Chicken** (it hooks NVIDIA's NGX runtime with Detours,
>   which heuristics dislike). The script tries the plain install first; only if Defender removes
>   the file does it explain, ask, and add an exclusion for the game folder through a UAC prompt.
>   Nothing is excluded without your yes.
> - Vulkan games need one UAC prompt to register ReShade's layer and add the exe to
>   `ReShadeApps.ini`. `-NoElevate` turns every such step into printed instructions instead.
> - **It asks which neural consumer you want** before downloading anything: Deep Fried Chicken,
>   or Krish's RenoDX DLSS 5 add-on. Both are fetched automatically, only one is ever installed,
>   and if the other is already in the folder it offers to disable it. `-Consumer DFC` or
>   `-Consumer RenoDX` answers that in advance for an unattended run.
> - Pieces you already have go in a folder passed with `-LocalFiles`, or one at a time with
>   `-DfcZip`, `-RenoDxAddon`, `-DlssNrDll`, `-DlssDll`, `-FeederZip`, `-ReShadeSetup`,
>   `-LumeniteZip`, `-DgVoodooZip`.
> - `-Api D3D|Vulkan|OpenGL|D3D9|D3D8` overrides the detection (some engines, Max Payne 3 among
>   them, can run on either Direct3D 9 or 11; the script assumes 11 and says so).
> - The Discord download links inside the script expire; when one does, the script says so and
>   tells you which parameter takes a fresh link or file.
> 
> 
> ## Install for a 64-bit game
> 
> 1. Run **ReShade's installer** (https://reshade.me), point it at your game's `.exe`, choose
>    **Direct3D 10/11/12**, and tick **"Enable loading of add-ons"**.
> 2. Download **`dlss5-feed.addon64`** and **`DLSS5_Feed.fx`** from the
>    **[latest release](https://github.com/jlrouzies-fr/DLSS5-Feeder/releases/latest)**. Put
>    `dlss5-feed.addon64` next to the game `.exe`, and `DLSS5_Feed.fx` into `reshade-shaders\Shaders\`.
>    The shader includes the standard **`ReShade.fxh`** header. ReShade normally installs it with its
>    standard shader package; if `ReShade.log` says it cannot open that file, copy `ReShade.fxh` from
>    the official [reshade-shaders](https://github.com/crosire/reshade-shaders/tree/slim/Shaders)
>    repository into the same `Shaders\` folder.
> 3. Download **[LumeniteFX](https://github.com/umar-afzaal/LumeniteFX)** (Code ▸ Download ZIP). Copy
>    its `Shaders\` folder (the `lumenite_*.fx` files and `include\`) into `reshade-shaders\Shaders\`,
>    and `Textures\lumenite_bluenoise256.png` into `reshade-shaders\Textures\`.
>    *(Other providers: see [Motion vectors: choosing a provider](#motion-vectors-choosing-a-provider).)*
> 4. Get the neural consumer — **[Deep Fried Chicken](https://discord.gg/g2v2XGqvR)**
>    (see [Before you install](#2-you-need-one-neural-add-on-installed-next-to-this-one)) — and put its three files next to the game `.exe`:
>    `deep-fried-chicken.addon64`, `deep-fried-chicken-nvngx.dll` and `deep-fried-chicken.cfg`.
>    Add **`nvngx_dlssnr.dll`** (from the RenoDX Discord — Chicken does not bundle it) and a
>    **`nvngx_dlss.dll`** (f

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[CopilotKit--OpenBot|CopilotKit/OpenBot]]

[GitHub](https://github.com/jlrouzies-fr/DLSS5-Feeder)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "jlrouzies-fr--DLSS5-Feeder"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C++" AND file.name != "jlrouzies-fr--DLSS5-Feeder" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W36" AND file.name != "jlrouzies-fr--DLSS5-Feeder"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/jlrouzies-fr--DLSS5-Feeder");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "jlrouzies-fr--DLSS5-Feeder" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "jlrouzies-fr" AND file.name != "jlrouzies-fr--DLSS5-Feeder"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/jlrouzies-fr--DLSS5-Feeder");
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
> const me = dv.page("Repos/jlrouzies-fr--DLSS5-Feeder");
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
> const me = dv.page("Repos/jlrouzies-fr--DLSS5-Feeder");
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
> const me = dv.page("Repos/jlrouzies-fr--DLSS5-Feeder");
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
> const me = dv.page("Repos/jlrouzies-fr--DLSS5-Feeder");
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

> **2026-09-05** — 首次收錄
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

- [[2026-09-05|2026-09-05]] — 首次收錄，724 stars
