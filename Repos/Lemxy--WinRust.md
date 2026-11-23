---
repo: Lemxy/WinRust
url: https://github.com/Lemxy/WinRust
owner: Lemxy
owner_type: User
language: Rust
license: Apache-2.0
description: "Windows shell replacement in Rust: taskbar, file manager, NTFS search, task manager, disk cleaner. One installer exe."
homepage: ""
stars: 1293
stars_per_day: 259
forks: 71
open_issues: 52
created: 2026-11-17
pushed_at: 2026-11-22
first_seen: 2026-11-23
week: "2026-W48"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v0.5.6"
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
appearances: 1
next_review: "2026-11-26"
contributor_count: 1
engagement: "low"
issue_close_rate: 56
repo_size_kb: 1959
readme_length: 10000
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-23"
star_history: "2026-11-23:1293"
tags:
  - github
  - "category/other"
  - "lang/rust"
aliases:
  - "WinRust"
  - "Lemxy/WinRust"
---

# WinRust

**1.3k** stars · **259** stars/天 · 建立 5 天前 · Rust · Apache-2.0

```dataviewjs
const me = dv.page("Repos/Lemxy--WinRust");
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

`個人專案` `v0.5.6`

> [!summary] 一句話摘要
> Windows shell replacement in Rust: taskbar, file manager, NTFS search, task manager, disk cleaner. One installer exe.

## 專案簡介

Windows shell replacement in Rust: taskbar, file manager, NTFS search, task manager, disk cleaner. One installer exe.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Lemxy--WinRust");
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
> const me = dv.page("Repos/Lemxy--WinRust");
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
| Forks | 71 |
| Open Issues | 52 |
| Issue 解決率 | 56% (67 closed) |
| 最後推送 | 2026-11-22 |
| 建立日期 | 2026-11-17 |
| Repo 大小 | 1.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Lemxy/WinRust) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `name` `version` `edition` `license` `name` `path` `test` `name` `path` `name` `path` `name` `path` `winrust-common` `ed25519-dalek`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 95
>     "JavaScript" : 4
>     "PowerShell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Lemxy](https://github.com/Lemxy) | 51 |

**最新版本**：v0.5.6 — WinRust v0.5.6 (2026-11-22)

> [!info]- Release Notes
> ## English
> 
> A small patch on top of v0.5.5.
> 
> ### Installer (WinRust.exe)
> - **The window fits small screens (#113).** On 1920×1200 at 125–150 % scaling the bottom row with the Install / Update button went off screen. The window now scales down to fit the work area.
> - **rust-explorer no longer turns off `cbdhsvc` and `PcaSvc`.** `cbdhsvc` is the clipboard history (Win+V), `PcaSvc` the Program Compatibility Assistant that older games rely on. Uninstalling still restores them on machines where an older version turned them off.
> 
> ### Black desktop (#108, #111)
> - The wallpaper path was read through `reg query`, which garbled non-ASCII paths (a Cyrillic user name, for example). The conversion failed, Windows was pointed at a file that did not exist, and the desktop stayed black until a reboot. The path is now read through the registry API, with Explorer's own copy of the wallpaper as a fallback (this also covers Spotlight and slideshows).
> - Next to Explorer the system wallpaper is not touched any more.
> - Without a picture, the rust-explorer desktop shows your background colour instead of black.
> 
> ### topbar
> - **Maximized windows took half the screen (#106).** A far-off answer from Explorer about where the bar may sit is now ignored.
> - Windows maximized on a second monitor were cut to a sliver when the bar changed the work area. Only windows on the primary monitor are trimmed now.
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-22 ~ 2026-11-22）
> **活躍天數** 1 天 · **最新 commit** topbar: tray icons get the button messages and the double click like under Explorer, not NIN_SELECT 

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#125](https://github.com/Lemxy/WinRust/issues/125) | desktop icons and context menu can't display on secondary mo | 0 | 0 |
> | [#124](https://github.com/Lemxy/WinRust/issues/124) | feature request | 0 | 1 |
> | [#123](https://github.com/Lemxy/WinRust/issues/123) | Feedback on optional language packs and taskbar icon draggin | 0 | 0 |
> | [#122](https://github.com/Lemxy/WinRust/issues/122) | Unable to open Media Player files | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # WinRust
> 
> **A Windows shell written in Rust: faster and lighter than the stock one.** Small native programs (no .NET, no Electron) that replace parts of Windows: the taskbar, File Explorer, file search, Task Manager, plus a disk cleaner, a disk map and a photo viewer. One installer puts them in, one button takes them all out.
> 
> English | [Русский](README.ru.md) | [日本語](README.ja.md) | [Português (Brasil)](README.pt-BR.md)
> 
> > **Read this first.** WinRust turns off Windows Search, hides the taskbar and can turn off Explorer as the shell. The exe is not code-signed, so SmartScreen will warn you. A restore point is created before install, but try it on a spare machine or a VM first.
> 
> 
> ## Install
> 
> 1. Download `WinRust.exe` from the [latest release](https://github.com/Lemxy/WinRust/releases/latest) (Windows 10/11, x64).
> 2. Run it as administrator.
> 3. Tick the components you want and press the install button. On a fresh install, `rust-explorer` is unchecked. Tick it to replace the Windows Explorer shell (or use the gear on the topbar row: the **Shell: rust-explorer** switch). They are installed in the right order; one that fails or is skipped does not stop the others, the window lists what went wrong.
> 
> Windows Search is optional: on a stripped Windows (for example a debloated LTSC image without the Windows Search service) that step is skipped with a warning instead of failing the install.
> 
> If UAC asks for **another administrator's** password, the per-user settings (startup entries, scheduled tasks, PowerShell profile, search permissions) still go to the user who is signed in, not to the administrator you typed. If the installer cannot tell who that is, it stops before changing anything.
> 
> **Automatic updates:** after the first install, a `WinRust-update` scheduled task (runs as SYSTEM, no UAC prompt) checks the latest release at boot and once a day. It downloads only the programs that changed, checks each file against a manifest signed with the project's key (a tampered or unsigned release is refused) and replaces only files that are already installed. A running program switches to the new version the next time it starts (sign-in or reboot). Log: `%ProgramData%\plugin-launcher\install.log` (`autoupdate:` lines). To turn it off, disable the `WinRust-update` task in Task Scheduler; **Remove all** deletes it.
> 
> **Manual update:** download the new `WinRust.exe` from the releases page, run it as administrator and select the components you want to update or install. An existing `rust-explorer` stays selected by default for updates. Your settings and the saved original Windows values stay.
> 
> The installer is in English. The language button in its corner (or the gear on the bar → **Bar settings → Language**) switches every WinRust program to the chosen language: English, Русский, 日本語 or Português (Brasil). The choice is stored in `%ProgramData%\WinRust\lang.txt` (`en`, `ru`, `ja`, `pt`).
> 
> 
> ## What gets installed
> 
> | Plugin | What you get | What it changes in Windows |
> |---|---|---|
> | **rust-search** | File search over all NTFS drives, Alt+Space. With topbar, Win+R opens its Run mode: history, folder completion (Tab), Ctrl+Shift+Enter runs as administrator | Disables the Windows Search service, blocks SearchHost.exe, hides the taskbar search box |
> | **rtaskmgr-win32** | Task Manager (Ctrl+Shift+Esc opens it) | `taskmgr.exe` is redirected to it (the system file is untouched). Also installs the **rs-du** disk cleaner. The **Speed** page has opt-in, reversible switches: Game / Work profiles (stop background services, close launchers or sync apps, start them again), clear the memory standby cache (now, or automatically while topbar runs), block the Windows Start menu, widgets and Phone Link processes, one weekly `winget upgrade` instead of third-party updaters, Defender exclusions for build caches and game libraries, faster NTFS (no last-access times, no 8.3 names), an ad-blocking hosts file. **Startup** also lists logon/boot tasks and third-party auto-start services, with how much each slowed the last boots (Windows' own boot log). **What's slow** shows driver time (DPC/interrupts), hung windows, slow disk and boot times. Uninstall turns all of it back |
> | **topbar** | A Windows 11-style bottom bar: windows, clock, volume, menus | Hides the stock taskbar. Also installs **reshell** (hotkeys: Win+Ctrl+1/2/3 and Win+\` switch desktops (Win+1..9 open the bar's app buttons), Win+D shows the desktop, Win+I opens Settings, Win+E the file manager; brings the taskbar back if the bar dies), **rs-du**, and a block in your PowerShell profile (`zoxide`, `grep`=rg, `ll`=eza, `cat`=bat; does nothing if they are missing). The gear menu has short pages: Theme, Colors and transparency (any colour of the bar and the WinRust windows, the bar's opacity), Templates (save your own looks and switch between them), the bar (bottom / left / right edge, size, auto-hide, buttons at the left end like Windows 10) and Reset everything to defaults |
> | **rust-explorer** | A file manager with tabs, and the desktop | Folders and drives open in it; **Explorer stops being the shell** (comes back by itself if topbar fails). On fresh installs, adjusts the startup settings of InventorySvc, lfsvc and DoSvc, and the svchost grouping threshold, when their values can be backed up. Its own copier (several files at once on SSDs, unbuffered for big files, progress in the status line) and right-click **Compress to ZIP** (all cores) / **Extract here** (ZIP and 7z), our own ZIP engine; a `.zip` opens like a folder (browse, copy out, open files from it). "Show in folder" from other programs selects the file (for the common folders: Downloads, Documents, Desktop, Pictures, Music, Videos and pinned ones, also when no window is open); the mouse back / forward buttons work; right click the desktop to hide its icons. Requires topbar |
> | **wiztree** | A disk-usage map ("WinRust Disk" in Start) | Nothing, apart from the file and a shortcut |
> | **photoview** | A fast photo viewer | Adds it to "Open with" (it does not become the default) |
> | **rust-settings** | Settings in Rust: display (resolution, refresh rate), sound (volume), power plan and drive space, per-app volume and device choice, night light, display arrangement by dragging, network adapters, Wi-Fi on every adapter (password or 802.1X), VPN and proxy, Bluetooth, apps, Windows Update, disk cleanup, theme, about | Nothing, apart from the file and a shortcut. Win+I and the bar menus open this window instead of Windows Settings (only a few rare pages still open the system ones) |
> | **debloat** | Off: telemetry, diagnostics, Copilot, Recall, Start ads, Edge in the background | Services and registry policies; old values are saved and restored on uninstall. **Command line only:** `install debloat --yes` |
> | **purge** | Removes the bundled junk like Tiny11 does: Clipchamp, News, Weather, Xbox overlays, Teams, Cortana, Widgets, Skype and more, plus telemetry tasks | **IRREVERSIBLE, no undo.** Apps are removed for all users and from the image; the Store, Settings, Start and runtimes stay. Run `purge.exe` first: it only lists. **Command line only:** `install purge --yes` (OneDrive and Edge: `purge.exe --apply --onedrive --edge`) |
> | chrome-rs | A browser | Not installable yet |
> 
> Every change is reversible: uninstall puts back the values that were there before.
> 
> 
> ## Benchmark
> 
> One-off measurements on one machine (Windows 11 IoT Enterprise 10.0.26300, RTX 4060 Laptop, NTFS). Treat them as orders of magnitude, not lab numbers.
> 
> | What | Windows | WinRust | Difference |
> |---|---|---|---|
> | File search (rust-search over all of C: vs `dir /s` over one folder) | 8,340 ms | 45 ms | **99.5%** faster |
> | Same vs `Get-ChildItem -Recurse` | 16,200 – 28,600 ms | 45 ms | **99.7–99.8%** faster |
> | Open a folder window (rust-explorer, median of 5 runs) | 420 ms | 60 ms | **86%** faster |
> | Shell memory (topbar + rust-explorer + rs-shell + reshell vs explorer.exe) | 366 MB | 46 MB | **87%** less |

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/Lemxy/WinRust)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Lemxy--WinRust"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "Lemxy--WinRust" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W48" AND file.name != "Lemxy--WinRust"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Lemxy--WinRust");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Lemxy--WinRust" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Lemxy" AND file.name != "Lemxy--WinRust"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Lemxy--WinRust");
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
> const me = dv.page("Repos/Lemxy--WinRust");
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
> const me = dv.page("Repos/Lemxy--WinRust");
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
> const me = dv.page("Repos/Lemxy--WinRust");
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
> const me = dv.page("Repos/Lemxy--WinRust");
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

- [[2026-11-23|2026-11-23]] — 首次收錄，1.3k stars
