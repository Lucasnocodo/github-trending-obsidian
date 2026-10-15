---
repo: liseami/CCBaga
url: https://github.com/liseami/CCBaga
owner: liseami
owner_type: User
language: Rust
license: MIT
description: ""
homepage: ""
stars: 2282
stars_per_day: 571
forks: 225
open_issues: 12
created: 2026-10-11
pushed_at: 2026-10-14
first_seen: 2026-10-15
week: "2026-W42"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.2.44"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-15
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-18"
contributor_count: 5
engagement: "low"
issue_close_rate: 20
repo_size_kb: 3604
readme_length: 9300
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-15"
star_history: "2026-10-15:2282"
tags:
  - github
  - "category/other"
  - "lang/rust"
aliases:
  - "CCBaga"
  - "liseami/CCBaga"
---

# CCBaga

**2.3k** stars · **571** stars/天 · 建立 4 天前 · Rust · MIT

```dataviewjs
const me = dv.page("Repos/liseami--CCBaga");
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

`v0.2.44`

> [!summary] 一句話摘要
> No description

## 專案簡介

No description available.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/liseami--CCBaga");
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
> const me = dv.page("Repos/liseami--CCBaga");
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
| Forks | 225 |
| Open Issues | 12 |
| Issue 解決率 | 20% (3 closed) |
| 最後推送 | 2026-10-14 |
| 建立日期 | 2026-10-11 |
| Repo 大小 | 3.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/liseami/CCBaga) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 49
>     "TypeScript" : 18
>     "Python" : 17
>     "CSS" : 5
>     "Shell" : 5
>     "Objective-C" : 4
>     "PowerShell" : 1
>     "C" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@liseami](https://github.com/liseami) | 50 |
> | [@yq04](https://github.com/yq04) | 12 |
> | [@LIghtJUNction](https://github.com/LIghtJUNction) | 6 |
> | [@rudycelekli](https://github.com/rudycelekli) | 6 |
> | [@lucky-Luor](https://github.com/lucky-Luor) | 1 |

**最新版本**：v0.2.44 — CCBaga 0.2.44 (2026-10-14)

> [!info]- Release Notes
> CCBaga combines recoverable local Claude identities, CLI management, real environment checks and an isolated companion browser.
> 
> - Inspect local Claude files, sizes and account-field names, then choose exactly what to remove. Cache-only defaults and explicit deletion confirmation protect personal assets.
> - Follow identity switching, empty identities and file cleanup through live execution stages and actual step counts, including verification and recovery outcomes.
> 
> 
> | Platform | Installer |
> | --- | --- |
> | macOS Apple Silicon · A + B | [Download](https://github.com/liseami/CCBaga/releases/download/v0.2.44/CCBaga-0.2.44-macos-arm64.dmg) |
> | Windows x64 · A + B | [Download](https://github.com/liseami/CCBaga/releases/download/v0.2.44/CCBaga-0.2.44-windows-x86_64-setup.exe) |
> | Linux DEB | [Download](https://github.com/liseami/CCBaga/releases/download/v0.2.44/CCBaga-0.2.44-linux-x86_64.deb) |
> | Linux RPM | [Download](https://github.com/liseami/CCBaga/releases/download/v0.2.44/CCBaga-0.2.44-linux-x86_64.rpm) |
> | Linux AppImage | [Download](https://github.com/liseami/CCBaga/releases/download/v0.2.44/CCBaga-0.2.44-linux-x86_64.AppImage) |
> | Arch/pacman | [Download](https://github.com/liseami/CCBaga/releases/download/v0.2.44/CCBaga-0.2.44-linux-x86_64.pkg.tar.zst) |
> 
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-14 ~ 2026-10-14）
> **活躍天數** 1 天 · **最新 commit** feat: add selective Claude file cleanup and live identity operation progress

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#32](https://github.com/liseami/CCBaga/issues/32) | 加一个macOS intel版本呗 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> CCBaga
>   A native macOS, Linux and Windows toolkit for a cleaner workspace and an environment you can verify.
>   Claude identities · Browser fingerprints · System settings · Network Skill
>   
>     
>     
>     
>     
>     
>   
>   
>     Features ·
>     Installation ·
>     Updates ·
>     Quick start ·
>     Usage guide ·
>     Architecture ·
>     Development ·
>     Contributing
>   
> 
> **Intended use:** CCBaga is intended solely for people residing or traveling abroad to manage their own Claude identities. Use that violates Anthropic's official terms of service is prohibited.
> 
> CCBaga brings local maintenance and environment setup into one focused desktop workflow. Inspect Claude data before removing it, rotate your companion browser's fingerprint and restart it, align system settings with a selected region, and compare real browser readings with the machine and network exit.
> 
> Two applications work together: **CCBaga-A** owns native operations; **CCBaga-B** runs an isolated Fingerprint Chromium profile. Browser measurements return to the host through a local session. Changing a setting and verifying its effect are separate steps.
> 
> 
> ## Installation
> 
> **Platforms:** macOS 12 or later on Apple Silicon; Linux x86_64 with GTK 3 and WebKitGTK 4.1; Windows 10/11 x86_64. Intel macOS and Linux ARM64 are not supported.
> 
> Linux x86_64 packages include DEB, RPM, AppImage and Arch/pacman formats, with the companion browser included. See [Linux setup](docs/linux.md) for installation and platform limits. Official versions are published exclusively by the project owner, **liseami**.
> 
> Windows x86_64 uses one NSIS setup installer containing both A and B. The installer is not Authenticode signed and may show SmartScreen; managed security policy can block it. See [Windows setup](docs/windows.md) for installation, toolchains and platform behaviors.
> 
> 
> ## Quick start
> 
> 
> ### Everyday setup
> 
> Open **Easy setup**, select a country or region, then choose an action. Browser fingerprint rotation closes and restarts CCBaga-B, so save unfinished browser work first. Selecting a region changes language, timezone and regional settings; it does **not** change your public IP.
> 
> 
> ### Network setup
> 
> Open **Network** for three steps: **Get VPS → Get residential proxy → Install Skill**. Select **General**, **Codex**, **Cursor**, **OpenCode** or **Copilot**, then copy the installation prompt into your local coding agent. The prompt follows the app's English/Chinese setting.
> 
> The [Network Skill](skills/ccbaga-network/README.md#installation) follows the Agent Skills specification and installs separately from the apps. It supports the npm `skills` CLI: `npx skills add liseami/CCBaga --skill ccbaga-network --global`; the AI selects the target tool, uses copy mode on Windows, and disables installer tracking. Give the AI your VPS address, the three matching PEM/PPK/PUB files or downloaded key bundle, and your residential SOCKS5 connection details. It handles file paths, private configuration, commands and checks; you do not need to open a terminal or edit JSON. Missing resources are purchased by you with the AI's guidance. Remote setup runs only after approval of the actual server changes.
> 
> The Skill supports authorized Debian 12/13 servers using root key login on port 22. It checks the SSH identity and fixed SOCKS5 exit, configures Xray/Reality and delivers a private local import file after server self-checks pass. Client setup uses **TUN ON**, **System Proxy OFF** and an empty explicit browser proxy; actual TUN/browser verification remains a separate step. The subscription URL uses HTTP and contains credentials; prefer the file retrieved over SSH.
> 
> Provider buttons link to [DMIT](https://www.dmit.io/aff.php?aff=28800) and [Webshare](https://www.webshare.io/?referral_code=qlm1mt9xibc9). Network setup is optional; local cleanup does not require a VPS or a proxy subscription. **The app does not collect SSH keys or proxy credentials and does not deploy to servers.**
> 
> 
> ### Prerequisites
> 
> On Linux, follow [Linux setup](docs/linux.md). On macOS, use an Apple Silicon Mac with Xcode Command Line Tools, stable Rust and Bun. Follow [Tauri's macOS prerequisites](https://v2.tauri.app/start/prerequisites/#macos) for the native toolchain.
> 
> The browser engine is an external build input. `python3 scripts/fetch-browser.py` downloads the pinned macOS arm64 **Fingerprint Chromium 148.0.7778.215** engine from the [upstream project](https://github.com/adryfish/fingerprint-chromium), verifies its SHA-256 and preserves its bundle structure and notices. Browser runtime binaries are not included in the source repository.
> 
> From your checkout:
> 
> ```sh
> bun install --frozen-lockfile
> python3 scripts/fetch-browser.py
> sh scripts/make-icons.sh
> sh scripts/package-browser.sh
> bun run tauri dev
> ```
> 
> Local builds are for development and testing; they are not official project downloads.
> 
> 
> ### Fast local build and install (macOS)
> 
> ```sh
> bun run dev:install
> ```
> 
> This builds a debug app with the embedded UI, uses local ad-hoc signatures and installs/starts both apps. It does not use Apple credentials or create an installer. It preserves profiles and settings. The development installer accepts only locally built debug apps; downloaded installers still require the normal signature and Gatekeeper checks.
> 
> 
> ## Features
> 
>   
>     Local Claude identitiesArchive the current local identity, switch to a saved identity or start with an empty workspace. Choose what stays shared and what moves with each identity.
>     Fingerprint &amp; restartGenerate a fresh seed, apply the selected region's language and timezone, then restart the companion browser.
>     Real environment checksCompare browser and machine readings with the actual network exit. Passing measured checks produces a green page and a large checkmark.
>   
>   
>     Native system settingsApply timezone, preferred language and region settings. Open desktop controls for location and permissions; see platform-specific limits.
>     AI-guided network setupThree simple steps, a coding-agent selector and a copyable Skill installation prompt. Give the AI your files and connection details; it handles the commands.
>     Claude Code CLI toolsDetect the installation method and version. Uninstall or reinstall through native, npm/bun, Homebrew or WinGet workflows.
>   
> 
> **One region selector. Four everyday actions.** Easy setup puts browser cache cleanup, fingerprint rotation, timezone/language reset and identity archiving on the same page. The sidebar keeps advanced controls in Network, Claude identities, Browser and Computer.
> 
> The interface supports **English and Chinese**, with shared YAML catalogs. Switching the interface language does not change the computer or browser language.
> 
> The bilingual **Usage guide** covers common actions and data boundaries. See the [full guide](docs/usage.md).
> 
> 
> ### macOS
> 
> Download the official installer from [GitHub Releases](https://github.com/liseami/CCBaga/releases/latest). The distribution package is named `CCBaga--macos-arm64.dmg`. It contains both applications:
> 
> | Application | Installed bundle | Role |
> | --- | --- | --- |
> | CCBaga-A | `CCBaga-A.app` | Identity management, system settings and environment verification |
> | CCBaga-B | `CCBaga-B.app` | Companion browser with a dedicated profile |
> 
> Download **one DMG**; it contains both applications. There is no separate browser download. The installer uses the same pixel-art style as this README.
> 
> 1. Open the disk image and drag **both applications** into Applications.
> 2. Launch CCBaga-A. It starts the companion browser automatically.
> 3. Choose English at the bottom of the sidebar if needed.
> 
> Source builds are available through the [development guide](#development).
> 
> 
> ## Updates
> 
> Use **Check for updates** at the bottom of CCBaga-A’s sidebar. Startup checks quietly; installation only starts when you choose **Update and restart**. Downloads show actual progress and are verified before installation. Failed downloads can be retried; a failed restart does not downl

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/liseami/CCBaga)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "liseami--CCBaga"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "liseami--CCBaga" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W42" AND file.name != "liseami--CCBaga"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/liseami--CCBaga");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "liseami--CCBaga" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "liseami" AND file.name != "liseami--CCBaga"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/liseami--CCBaga");
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
> const me = dv.page("Repos/liseami--CCBaga");
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
> const me = dv.page("Repos/liseami--CCBaga");
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
> const me = dv.page("Repos/liseami--CCBaga");
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
> const me = dv.page("Repos/liseami--CCBaga");
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

> **2026-10-15** — 首次收錄
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

- [[2026-10-15|2026-10-15]] — 首次收錄，2.3k stars
