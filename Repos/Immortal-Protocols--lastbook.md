---
repo: Immortal-Protocols/lastbook
url: https://github.com/Immortal-Protocols/lastbook
owner: Immortal-Protocols
owner_type: Organization
language: Python
license: MIT
description: "Offline knowledge AI, maps and videos for survival and rebuilding"
homepage: "lastbook.org"
stars: 1922
stars_per_day: 384
forks: 251
open_issues: 150
created: 2026-11-12
pushed_at: 2026-11-18
first_seen: 2026-11-18
week: "2026-W47"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v1.1.11"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-18
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-21"
contributor_count: 5
engagement: "medium"
issue_close_rate: 1
repo_size_kb: 28632
readme_length: 9771
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-18"
star_history: "2026-11-18:1922"
tags:
  - github
  - "category/other"
  - "lang/python"
  - org
aliases:
  - "lastbook"
  - "Immortal-Protocols/lastbook"
---

# lastbook

**1.9k** stars · **384** stars/天 · 建立 5 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/Immortal-Protocols--lastbook");
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

`ORG` `v1.1.11`

> [!summary] 一句話摘要
> Offline knowledge AI, maps and videos for survival and rebuilding

## 專案簡介

Offline knowledge AI, maps and videos for survival and rebuilding

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Immortal-Protocols--lastbook");
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
> const me = dv.page("Repos/Immortal-Protocols--lastbook");
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
| Forks | 251 |
| Open Issues | 150 |
| Issue 解決率 | 1% (1 closed) |
| 最後推送 | 2026-11-18 |
| 建立日期 | 2026-11-12 |
| 官方網站 | [Link](lastbook.org) |
| Repo 大小 | 28.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Immortal-Protocols/lastbook) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 54
>     "Swift" : 20
>     "JavaScript" : 11
>     "HTML" : 6
>     "CSS" : 5
>     "Shell" : 2
>     "C++" : 1
>     "PowerShell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@wonderdawg](https://github.com/wonderdawg) | 53 |
> | [@adamtpang](https://github.com/adamtpang) | 8 |
> | [@GonzaloFuentes28](https://github.com/GonzaloFuentes28) | 3 |
> | [@JohnathanBevers](https://github.com/JohnathanBevers) | 3 |
> | [@joshuaswarren](https://github.com/joshuaswarren) | 3 |

**最新版本**：v1.1.11 — Lastbook 1.1.11 (2026-11-17)

> [!info]- Release Notes
> # Lastbook 1.1.11
> 
> For Mac, Windows and Linux (Ubuntu 24.04, and now Ubuntu 26.04). Your library, settings and saved items carry over.
> 
> ## Downloads
> 
> - [Mac](https://downloads.lastbook.org/Lastbook-1.1.11-mac.dmg) — signed and notarized
> - [Windows](https://downloads.lastbook.org/Lastbook-1.1.11-Setup.exe) — signed
> - [Ubuntu 24.04](https://downloads.lastbook.org/Lastbook_1.1.11_amd64.deb)
> - [Ubuntu 26.04](https://downloads.lastbook.org/Lastbook_1.1.11_ubuntu26.04_amd64.deb)
> 
> Install instructions are on [lastbook.org/download](https://lastbook.org/download/).
> 
> ## New
> 
> - **Settings and About in the sidebar.** Library and local AI settings, app information and Check for updates are one click away.
> - **See what Chat is doing.** While it answers, Chat shows its steps (Search, Read, Write) and how far the local AI has got while it starts.
> - **Storm guides.** Hurricane, tornado and thunderstorm situations in the disaster guide, from FEMA and CERT sources.
> - **Living in a city.** Choices for apartments and high-rises: water when the taps stop, a power cut with the lift out, a hot upper floor, a high-rise fire, and leaving with no car.
> - **Dentists on the map,** from the installed offline map.
> - **Search finds more words:** tourniquet, breathing problems, flu; words used outside the US (torch, rubbish, 999, 112); words used in India (108, loose motions, geyser, monsoon).
> - **Heat exhaustion video** (British Red Cross) in "Someone is hurt or sick".
> 
> ## Fixed
> 
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-18 ~ 2026-11-18）
> **活躍天數** 1 天 · **最新 commit** Add Lastbook security reporting policy (#176)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#23](https://github.com/Immortal-Protocols/lastbook/issues/23) | Great idea, but it shouldn't be US-centric `enhancement` | 8 | 6 |
> | [#51](https://github.com/Immortal-Protocols/lastbook/issues/51) | Add torrent for the lastbook data `enhancement` | 5 | 2 |
> | [#138](https://github.com/Immortal-Protocols/lastbook/issues/138) | Feature request: auto-update the desktop app instead of re-d `enhancement` | 2 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Lastbook
> 
> Lastbook is an offline survival library for Mac, Windows and Linux. It puts manuals, videos, encyclopedias, an offline map and
> short practical guides on one computer. After setup, it works offline. The desktop sidebar opens Videos, Map and Chat.
> Chat answers questions using the library and links to its sources.
> 
> Website: . Contact: hello@lastbook.org.
> 
> > Lastbook’s original code and documentation are licensed under the [MIT License](LICENSE).
> > Contributions are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) to get started.
> 
> 
> ## Install on Linux
> 
> The Linux packages target **Ubuntu 24.04 LTS and Ubuntu 26.04 LTS on Intel/AMD x86_64 computers**, one package for each. Download
> [Lastbook for Ubuntu 24.04](https://downloads.lastbook.org/Lastbook_1.1.11_amd64.deb) (or [for Ubuntu 26.04](https://downloads.lastbook.org/Lastbook_1.1.11_ubuntu26.04_amd64.deb)), then install it with apt so Ubuntu resolves its dependencies.
> 
> ```bash
> sudo apt install ./Lastbook_1.1.11_amd64.deb                  # Ubuntu 24.04
> sudo apt install ./Lastbook_1.1.11_ubuntu26.04_amd64.deb      # Ubuntu 26.04
> ```
> 
> Open Lastbook from the application menu. First-run setup downloads your chosen library, state map and optional local AI.
> The app uses Ubuntu's GTK, WebKitGTK and media codecs. Its own files install under `/opt/lastbook`, and your library and
> settings stay in your home folder. Removing the package leaves those downloaded files and settings in place.
> 
> The Linux release was tested on Ubuntu 24.04.5 in WSL2, including installation, setup, video playback, maps, address search,
> PDF reading, offline AI with citations, shutdown and uninstall. AI tests used the CPU. Native Linux GPU performance and
> other Linux distributions have not been validated for this release.
> 
> 
> ## What it does
> 
> - **Guides first.** Short, curated guides for urgent needs (`content/topics/`), each pointing to real pages in the library
>   with page numbers, plus what curators looked for and did not find (`content/gaps.json`).
> - **The full library.** Manuals and PDFs (with a whole-PDF view), videos, and offline encyclopedias (ZIM files), with
>   keyword search everywhere and meaning-based search on Windows.
> - **Offline map.** A base map of the world and the US, plus a detailed map for the state selected during setup: local streets,
>   buildings, terrain, crops, and water, help and resource points. Addresses in that state can be found offline. The person
>   picks the state; Lastbook never detects location.
> - **Optional local AI.** Ask questions in plain words and get answers that cite library pages, from a model that runs on
>   the computer itself (see "The local AI" below). Without it, Chat still finds the right pages.
> - **One-download setup.** On first run, setup defaults to Small and selects local AI when the computer can run it.
>   The person can choose Small, Medium or All, selects a state map, and starts the checked downloads. A library already on the
>   computer (a folder or a pack zip) can be used instead of downloading.
> - **Check for updates, only when asked.** About has a Check for updates button (and the Mac menu has Lastbook > Check for
>   Updates…). It only says whether a newer version is on the website; nothing is downloaded or installed.
> 
> 
> ## What is not in this repository, and why
> 
> - **The library** (`library-data/`): hundreds of gigabytes of third-party manuals, videos and encyclopedias, each under
>   its own terms. It is distributed as packs, with a Sources and permissions page in each pack.
> - **Models and maps** (GGUF, ONNX, map data): large, and published by their makers or built from public data. Setup
>   fetches them, and the checksums and pins are here.
> - **Generated data** (`derived/`, builds, installers): everything there can be rebuilt with the scripts here.
> - **Release and signing material**: signing keys and certificates, notarization and Azure settings, deploy settings and
>   the release folders.
> - **Private data**: the household's own home area (`web/home-area.json`), the private word lists the scans use, machine
>   and user names, keys and internal security-audit notes. The guides here are already in their shipped, general wording.
>   To keep your own home-area words out of a build, put them in a local copy of `packaging/ship_edits.json` (`forbidden`)
>   and never commit it.
> 
> 
> ## Release status
> 
> | Platform | Version | Status |
> |---|---|---|
> | macOS (Apple Silicon, macOS 14 or later) | 1.1.11 | Live on lastbook.org, signed and notarized |
> | Windows (64-bit, Windows 10 or later) | 1.1.11 | Live on lastbook.org, Authenticode signed |
> | Linux (Ubuntu 24.04 or 26.04 LTS, x86_64) | 1.1.11 | Ubuntu packages; installation instructions below |
> 
> 
> ## iPad (development preview, source only)
> 
> A native iPad app (Videos, Map and Chat, offline, with optional on-device AI) is in [`mobile/ipad/`](mobile/ipad/).
> - It is source for contributors to build and sign themselves.
> - There is no App Store, TestFlight or downloadable iPad build.
> - See [mobile/ipad/README.md](mobile/ipad/README.md) for what works, the current limitations and how to build it.
> 
> 
> ## Privacy and network use
> 
> - **No listening port.** The desktop app opens no network port. The window and the engine talk through an in-memory bridge
>   (`app/bridge.py`): WKURLSchemeHandler on macOS (`app/shell_macos.py`), WebView2 `WebResourceRequested` on Windows
>   (`app/shell_windows.py`), and WebKitGTK `URISchemeRequest` on Linux (`app/shell_linux.py`). The local AI runner speaks JSON lines on standard input and output and opens no socket either.
> - **Two uses of the network, both started by the person.** (1) Setup's downloader (`engine/setup/`), when the person
>   starts or resumes a download. (2) The update check (`engine/update.py`, `web/update.js`), when the person presses
>   the button. Both go through `engine/setup/download.py`, the only module that opens a connection: HTTPS on port 443 only,
>   to allow-listed hosts only (`downloads.lastbook.org` for packs, maps, the manifest and update information; Hugging Face's
>   download hosts for the AI model; the update check accepts `downloads.lastbook.org` alone), no proxy from the system, and a
>   redirect is followed only to another allowed host.
> - **Pinned trust.** The downloader trusts only the root certificates in `engine/setup/roots.pem` (11 roots from Mozilla's
>   bundle), never the system's trust store. The builds refuse to finish if those roots no longer cover the allowed hosts
>   (`packaging/check_tls_roots.py`).
> - **Checked files.** Every download is checked against the SHA-256 in the manifest before it is used. Zips are checked
>   for unsafe paths, links and sizes before anything is written.
> - **Nothing else.** The windows block all web loads, there is no telemetry, no account, and nothing runs on a timer or at
>   startup that reaches the network.
> - **A working library is never broken.** New data is unpacked beside the old one, checked, and then switched in with a
>   single rename. A failure at any step leaves the old library as it was.
> 
> The setup contract, including state maps, is in [docs/SETUP-API.md](docs/SETUP-API.md); the engine side is described in
> [engine/setup/README.md](engine/setup/README.md).
> 
> 
> ## What's where
> 
> | Path | What it is |
> |---|---|
> | `app/` | The desktop app: entry point (`main.py`), the no-port bridge, the macOS, Windows and Linux shells, and tests (`app/tests/`). |
> | `engine/` | Paths and data-folder lookup, library access, saved pages, offline address search (`address_search.py`), the update check (`update.py`) and first-run setup (`engine/setup/`). `engine/vendor-macos/` holds pypdfium2 for the Mac build. |
> | `server.py`, `assistant.py`, `retrieval.py`, `llm_local.py` | The engine: request handler, the assistant and its citation checks, keyword plus meaning-based search, and the local AI (model pins, fit check, runner control). |
> | `web/` | The interface, in plain HTML, CSS and JavaScript with no build step and nothing loaded from the web. `setup.*` is the setup screen, `update.js

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/Immortal-Protocols/lastbook) · [官方網站](lastbook.org)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Immortal-Protocols--lastbook"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Immortal-Protocols--lastbook" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W47" AND file.name != "Immortal-Protocols--lastbook"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Immortal-Protocols--lastbook");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Immortal-Protocols--lastbook" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Immortal-Protocols" AND file.name != "Immortal-Protocols--lastbook"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Immortal-Protocols--lastbook");
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
> const me = dv.page("Repos/Immortal-Protocols--lastbook");
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
> const me = dv.page("Repos/Immortal-Protocols--lastbook");
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
> const me = dv.page("Repos/Immortal-Protocols--lastbook");
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
> const me = dv.page("Repos/Immortal-Protocols--lastbook");
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

> **2026-11-18** — 首次收錄
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

- [[2026-11-18|2026-11-18]] — 首次收錄，1.9k stars
