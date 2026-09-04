---
repo: rakanki911/DLSS5-Swapper
url: https://github.com/rakanki911/DLSS5-Swapper
owner: rakanki911
owner_type: User
language: JavaScript
license: MIT
description: "DLSS 5 Swapper is a powerful, easy-to-use tool for installing, managing, and restoring DLSS 5 across games and supported emulators. It features automatic game detection, optional drive scanning, DLSS5-Feeder for compatible titles without native DLSS, emulator support, and compatibility with DirectX 9/10/11/12, Vulkan, and OpenGL."
homepage: ""
stars: 1157
stars_per_day: 231
forks: 49
open_issues: 28
created: 2026-08-29
pushed_at: 2026-09-03
first_seen: 2026-09-04
week: "2026-W36"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: "v2.2.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-04
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-09-07"
contributor_count: 2
engagement: "low"
issue_close_rate: 52
repo_size_kb: 27828
readme_length: 4730
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-09-04"
star_history: "2026-09-04:1157"
tags:
  - github
  - "category/other"
  - "lang/javascript"
aliases:
  - "DLSS5-Swapper"
  - "rakanki911/DLSS5-Swapper"
---

# DLSS5-Swapper

**1.2k** stars · **231** stars/天 · 建立 5 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/rakanki911--DLSS5-Swapper");
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

`v2.2.0`

> [!summary] 一句話摘要
> DLSS 5 Swapper is a powerful, easy-to-use tool for installing, managing, and restoring DLSS 5 across games and supported emulators. It features automatic game detection, optional drive scanning, DLSS5-Feeder for compatible titles without native DLSS, emulator support, and compatibility with DirectX 9/10/11/12, Vulkan, and OpenGL.

## 專案簡介

DLSS 5 Swapper is a powerful, easy-to-use tool for installing, managing, and restoring DLSS 5 across games and supported emulators. It features automatic game detection, optional drive scanning, DLSS5-Feeder for compatible titles without native DLSS, emulator support, and compatibility with DirectX 9/10/11/12, Vulkan, and OpenGL.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/rakanki911--DLSS5-Swapper");
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
> const me = dv.page("Repos/rakanki911--DLSS5-Swapper");
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
| Forks | 49 |
| Open Issues | 28 |
| Issue 解決率 | 52% (30 closed) |
| 最後推送 | 2026-09-03 |
| 建立日期 | 2026-08-29 |
| Repo 大小 | 27.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/rakanki911/DLSS5-Swapper) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `extract-zip` `electron` `electron-builder`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 91
>     "CSS" : 7
>     "HTML" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@rakanki911](https://github.com/rakanki911) | 19 |
> | [@Febsho](https://github.com/Febsho) | 2 |

**最新版本**：v2.2.0 — DLSS 5 Swapper v2.2.0 - OptiScaler & Smarter Library (2026-09-02)

> [!info]- Release Notes
> # DLSS 5 Swapper v2.2.0 — Optional OptiScaler & Smarter Library
> 
> The biggest addition in **2.2.0** is **optional OptiScaler DLSS-NR integration**,
> alongside new library tools, persistent History, improved recovery, and
> 38-language coverage for search, filters and installation warnings.
> 
> ## ⭐ Headline: choose OptiScaler or ReShade per game
> 
> - Select **Rendering backend → OptiScaler DLSS-NR** in the game details,
>   then **Apply backend change / Install** with the game closed.
> - **ReShade remains the default.** OptiScaler is completely optional. Select
>   ReShade and apply to return; each backend keeps separate settings.
> - Downloads a pinned, SHA-256-verified
>   [OptiScaler DLSS-NR v0.1.1.5](https://github.com/Dagherbou/OptiScaler_DLSSNR/releases/tag/v0.1.1.5-dlssnr)
>   from its author on first use (~130 MB); upstream batch scripts are not run.
> - Requires **RTX 50 series**, **NVIDIA driver 616.56+**, and a **64-bit game
>   with native DLSS enabled**. This is not a generic injector for non-DLSS
>   games or emulators; use ReShade/Feeder for those.
> - DX12 uses DLSS output by default. DX11/Vulkan uses the DX12 bridge with
>   FSR output by default, while DLSS remains selected in the game's settings
>   to provide inputs. Performance and image quality depend on the game.
> - Vulkan backend changes require **Restore originals** first. Active global
>   ReShade Vulkan installations must be restored before using OptiScaler;
>   layers belonging to other games are not silently disabled.
> 
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-02 ~ 2026-09-03）
> **活躍天數** 2 天 · **最新 commit** Organize emulator profiles and all 38 languages into README tables

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#40](https://github.com/rakanki911/DLSS5-Swapper/issues/40) | API detecter wrong `good first issue` | 3 | 2 |
> | [#41](https://github.com/rakanki911/DLSS5-Swapper/issues/41) | Proposed QOL Improvement. `enhancement` | 2 | 1 |
> | [#76](https://github.com/rakanki911/DLSS5-Swapper/issues/76) | Allow rendering API to be changed. | 1 | 0 |
> | [#50](https://github.com/rakanki911/DLSS5-Swapper/issues/50) | [Suggestion] Allow installing OptiScaler method for older Nv | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> DLSS 5 Swapper
> 
>   Install and manage DLSS 5 Neural Rendering for compatible games and emulators.
> 
>   
>   
>   
>   
> 
> ## Download 2.2.0
> 
> [**Windows Installer**](https://github.com/rakanki911/DLSS5-Swapper/releases/download/v2.2.0/DLSS5-Swapper-Setup-2.2.0.exe) ·
> [**Portable**](https://github.com/rakanki911/DLSS5-Swapper/releases/download/v2.2.0/DLSS5-Swapper-2.2.0-portable.exe) ·
> [Checksums](https://github.com/rakanki911/DLSS5-Swapper/releases/download/v2.2.0/SHA256SUMS.txt)
> 
>   
> 
> ## Features
> 
> - **Easy installation:** native DLSS games, or compatible non-DLSS games through DLSS5-Feeder.
> - **Your library:** Steam, Epic, GOG, modern Xbox Game Pass folders, and manually added games/emulators.
> - **Search and filters:** combine title, graphics API, DLSS status/version and add-ons; click counters to filter.
> - **Flexible layout:** group by store or show everything in one list, with game artwork and light/dark themes.
> - **Controlled scanning:** full-drive scanning is **off by default**. Added folders still scan normally; enable all-drive discovery or remove scan folders in Settings.
> - **Right-click shortcuts:** open/copy folder, rescan, change cover, restore originals or hide a game.
> - **Backups and History:** restore original files, keep installation records, and copy History/activity/install logs.
> - **Custom add-ons:** the Add-ons page remains available alongside the integrated installation routes.
> 
> ## New in 2.2.0
> 
> - **⭐ Optional [OptiScaler DLSS-NR](https://github.com/Dagherbou/OptiScaler_DLSSNR/releases):** choose it in the game page instead of ReShade. Apply the change with the game closed; switch back when wanted. Settings are kept separately.
> - **SWTOR / DX9:** correct Feeder selection instead of the native-only route; adds 32-bit DX8 installation.
> - **Feeder repairs:** matching 0.12.0 components, corrected shader/preset settings, and missing Visual C++ runtime checks.
> - **Better detection:** small/nested executables and Cyberpunk 2077 / Phantom Liberty library entries.
> - **Safer installs/restores:** preserve native Streamline/FG files, protect backups during repeat installs and backend switches, and restore even when the executable is missing.
> - **History and translations:** fixes missing installation history; search, filters and installation warnings now cover all 38 languages.
> 
> [Full fixes and known limitations →](docs/releases/v2.2.0.md)
> 
> ## Compatibility
> 
> | Category | Support |
> | --- | --- |
> | **System** | Windows 10/11 x64; compatible 32-bit and 64-bit games |
> | **ReShade / Feeder GPUs** | RTX 20 / 30 / 40 / 50; older-series support is reported by the bundled modified runtime's author |
> | **OptiScaler GPUs** | RTX 50 only, NVIDIA driver **616.56+**, 64-bit games with native DLSS enabled |
> | **DirectX 12** | Native DLSS, Feeder, or eligible OptiScaler games |
> | **DirectX 11** | Feeder for 32/64-bit games; eligible OptiScaler games |
> | **DirectX 9 / 8** | DX9: 32/64-bit; DX8: 32-bit, through dgVoodoo2 → DX11 → Feeder |
> | **Vulkan / OpenGL** | ReShade/Feeder; eligible Vulkan games can also use OptiScaler |
> | **DirectX 10** | Not directly supported by Feeder; choose DX11 when available |
> 
> OptiScaler's DX11/Vulkan path uses a DX12 bridge with FSR output by default.
> For Vulkan backend changes, **restore originals first**. OptiScaler is not the emulator/non-DLSS route.
> 
> ## Emulators
> 
> Select the emulator folder and its active renderer, then use **ReShade/Feeder**.
> 
>   Emulators
>   DuckStationPCSX2RPCS3
>   DolphinPPSSPPXenia
>   CemuRyujinxyuzu / suyu / Eden / Citron / Sudachi
>   shadPS4Azahar / Citra / Lime3DSmelonDS
>   FlycastxemuVita3K
>   RetroArchmGBASnes9x
>   Play!
> 
> Compatibility varies by renderer and game. Xenia HUD correction remains experimental.
> 
> ## 38 languages
> 
>   All 38 languages
>   Englishالعربية简体中文繁體中文
>   EspañolPortuguêsРусскийDeutsch
>   Français日本語한국어Italiano
>   TürkçePolskiУкраїнськаNederlands
>   ČeštinaMagyarRomânăΕλληνικά
>   SvenskaDanskNorskSuomi
>   ไทยTiếng ViệtBahasa IndonesiaBahasa Melayu
>   Filipinoहिन्दीবাংলাفارسی
>   اردوБългарскиСрпскиHrvatski
>   SlovenčinaCatalà
> 
> **Arabic, Persian and Urdu support right-to-left layout.**
> 
> ## Screenshots
> 
> ## Before installing
> 
> - **Anti-cheat:** red warning and optional confirmation, not a blanket block. Injection can cause crashes or account bans; the app never bypasses anti-cheat.
> - **Requirements:** Feeder needs Visual C++ runtimes (x64, plus x86 for 32-bit games). Some components download on first use.
> - **Compatibility is not guaranteed.** Keep backups; existing mods may conflict. Not every reported game crash is fixed.
> - **Linux/Proton:** experimental community source only; no Linux binaries in this release.
> 
> ---
> 
> Built by **Rakan Alkhaldi** · MIT · [Third-party credits and licences](THIRD_PARTY_NOTICES.md)

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/rakanki911/DLSS5-Swapper)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "rakanki911--DLSS5-Swapper"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "rakanki911--DLSS5-Swapper" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W36" AND file.name != "rakanki911--DLSS5-Swapper"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/rakanki911--DLSS5-Swapper");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "rakanki911--DLSS5-Swapper" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "rakanki911" AND file.name != "rakanki911--DLSS5-Swapper"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/rakanki911--DLSS5-Swapper");
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
> const me = dv.page("Repos/rakanki911--DLSS5-Swapper");
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
> const me = dv.page("Repos/rakanki911--DLSS5-Swapper");
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
> const me = dv.page("Repos/rakanki911--DLSS5-Swapper");
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
> const me = dv.page("Repos/rakanki911--DLSS5-Swapper");
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

> **2026-09-04** — 首次收錄
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

- [[2026-09-04|2026-09-04]] — 首次收錄，1.2k stars
