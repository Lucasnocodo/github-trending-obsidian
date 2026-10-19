---
repo: Gathin23/tv-vibehack
url: https://github.com/Gathin23/tv-vibehack
owner: Gathin23
owner_type: User
language: Java
license: NOASSERTION
description: "Your TV, minus the ads. Debloat any Android TV or Google TV over Wi-Fi and swap the ad-filled home screen for a clean Apple TV-style launcher. No root, fully reversible."
homepage: "https://x.com/gathint/status/2111379569030939102"
stars: 2458
stars_per_day: 2458
forks: 294
open_issues: 41
created: 2026-10-17
pushed_at: 2026-10-19
first_seen: 2026-10-19
week: "2026-W43"
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
last_reviewed: 2026-10-19
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-22"
contributor_count: 5
engagement: "medium"
issue_close_rate: 2
repo_size_kb: 5943
readme_length: 8763
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-10-19"
star_history: "2026-10-19:2458"
tags:
  - github
  - "category/other"
  - "lang/java"
  - "topic/ad_free"
  - "topic/adb"
  - "topic/android_tv"
  - "topic/android_tv_launcher"
  - "topic/bloatware_removal"
aliases:
  - "tv-vibehack"
  - "Gathin23/tv-vibehack"
---

# tv-vibehack

**2.5k** stars · **2.5k** stars/天 · 建立 1 天前 · Java · NOASSERTION

```dataviewjs
const me = dv.page("Repos/Gathin23--tv-vibehack");
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

`ad-free` `adb` `android-tv` `android-tv-launcher` `bloatware-removal` `claude-code` `debloat` `google-tv` `hisense` `home-screen` `launcher` `nvidia-shield` `open-source` `smart-tv` `sony-bravia` `tcl` `xiaomi`

> [!summary] 一句話摘要
> Your TV, minus the ads. Debloat any Android TV or Google TV over Wi-Fi and swap the ad-filled home screen for a clean Apple TV-style launcher. No root, fully reversible.

## 專案簡介

Your TV, minus the ads. Debloat any Android TV or Google TV over Wi-Fi and swap the ad-filled home screen for a clean Apple TV-style launcher. No root, fully reversible.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Gathin23--tv-vibehack");
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
> const me = dv.page("Repos/Gathin23--tv-vibehack");
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
| Forks | 294 |
| Open Issues | 41 |
| Issue 解決率 | 2% (1 closed) |
| 最後推送 | 2026-10-19 |
| 建立日期 | 2026-10-17 |
| 官方網站 | [Link](https://x.com/gathint/status/2111379569030939102) |
| Repo 大小 | 5.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Gathin23/tv-vibehack) |
| Topics | `ad-free` `adb` `android-tv` `android-tv-launcher` `bloatware-removal` `claude-code` `debloat` `google-tv` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Java" : 77
>     "PowerShell" : 9
>     "Shell" : 8
>     "Python" : 6
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Gathin23](https://github.com/Gathin23) | 68 |
> | [@pananon](https://github.com/pananon) | 6 |
> | [@narenkram](https://github.com/narenkram) | 4 |
> | [@nowaaak](https://github.com/nowaaak) | 4 |
> | [@Jatin-LeafLoans](https://github.com/Jatin-LeafLoans) | 3 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-19 ~ 2026-10-19）
> **活躍天數** 1 天 · **最新 commit** Merge PR #89: Add Insignia 55-inch F30 4K Fire TV (NS-55F301NA25 / AFTDCT31) debloat list

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#31](https://github.com/Gathin23/tv-vibehack/issues/31) | Publish GitHub Releases so users can subscribe to updates | 5 | 0 |
> | [#20](https://github.com/Gathin23/tv-vibehack/issues/20) | Proposal: a desktop remote control (remote/) built on tools/ | 2 | 0 |
> | [#88](https://github.com/Gathin23/tv-vibehack/issues/88) | Clock screensaver ignores the translated date format | 0 | 0 |
> | [#87](https://github.com/Gathin23/tv-vibehack/issues/87) | Launcher: columns above 4 make tiles overlap (cards are a fi | 0 | 0 |
> | [#86](https://github.com/Gathin23/tv-vibehack/issues/86) | build-and-install.ps1: no stock-launcher detection, so Home  | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # tv-vibehack
> 
> **Your TV, minus the ads.**
> 
> Strip the bloatware from any Android TV or Google TV over Wi-Fi, and replace the ad-filled home
> screen with a clean launcher that looks like an Apple TV.
> 
> **No root, no cable, nothing uninstalled, and a one-line restore if you change your mind.**
> 
> It started as an afternoon fixing my parents' Mi TV, which showed them an advert before they
> could reach Netflix. The whole thing was done with Claude Code talking to the real TV, and the
> prompt that did it is in this repo so you can do the same with yours. The replies to the
> [tweet below](https://x.com/gathint/status/2111379569030939102) are where most of the TV lists in
> this repo came from.
> 
>   
> 
> ---
> 
> 
> ## Quick start
> 
> You need a computer on the same Wi-Fi as the TV and a coding assistant with shell access
> (Claude Code, or anything similar).
> 
> **1. On the TV**
> Settings → Device Preferences → About → press OK on **Build** seven times → go back →
> Developer options → turn on **USB debugging**. Some TVs also show a Network or ADB debugging
> toggle; turn it on too. Keep the TV switched on.
> 
> **2. On your computer**
> Open your assistant, paste the prompt from [`PROMPT.md`](PROMPT.md), and fill in your TV model.
> 
> **3. Follow along**
> Accept the "Allow USB debugging?" prompt when it appears on the TV, then answer the checklist
> questions: which streaming apps you use, which four go in the dock, whether to keep the voice
> assistant, Chromecast and firmware updates.
> 
> That's it. The assistant backs up, debloats, builds and installs the launcher, and checks every
> step with screenshots pulled from the TV. On a 1 GB Mi TV the whole thing took one afternoon the
> first time; with this repo as context, people report about fifteen minutes.
> 
> 
> ## Supported TVs
> 
> Anything running **Android TV** or **Google TV**: Xiaomi and Redmi, TCL, Hisense, Sony, OnePlus,
> Realme, Nvidia Shield and most others.
> 
> Not supported: Samsung (Tizen) and LG (webOS), which run different systems. Amazon Fire TV
> (Fire OS) takes the debloat half only: Fire OS won't let a third-party launcher take over Home,
> so the Fire TV lists below are about removing Amazon's ads and telemetry, not the home screen.
> 
> Lists that people have tested and contributed live in [`examples/`](examples/):
> 
> | TV | OS |
> |---|---|
> | BenQ E55-735 (Changhong AI PONT, DVB96BQ) | Google TV 14 |
> | CHiQ AI PONT (DVB93CQ) | Android TV 11 |
> | Hisense SmartTV 4K FFM (huangshan, MediaTek) | Android TV 10 |
> | Insignia 55" F30 4K Fire TV (NS-55F301NA25, AFTDCT31, duckie) | Fire OS 7 / Android 9 |
> | NVIDIA SHIELD TV Pro 2019 (P2897, mdarcy) | Android TV 11 |
> | OnePlus TV (D00, Dubai) | Google TV 14 |
> | RCA AI PONT SA (Changhong, redwood, ISDB92RC) | Android 14 |
> | SANYO ATV R2 (SCBC, Realtek RTD285O) | Android TV 9 |
> | Sony BRAVIA 4K UR2 (BRAVIA_UR2_4K, MediaTek) | Android TV 10 |
> | Sony BRAVIA XBR-65X900E (2017, BRAVIA_ATV2) | Android TV 9 |
> | TCL 55" 4K Google TV, 2023 (G10, G10_4K_US_NF) | Google TV 12 |
> | TCL 65C725 (Smart TV Pro, BeyondTV4) | Android TV 11 |
> | TCL BeyondTV (India) | Android TV 9 |
> | TCL QM6K Pro, 2025 (G08, MediaTek tcl9618) | Google TV 14 |
> | Xiaomi Mi Box S (MIBOX4, oneday), streaming box | Android TV 9 |
> | Xiaomi Mi TV (MiTV-MOOQ0, croods) | Android TV 10 |
> | Xiaomi Mi TV 4A (MiTV-MOOQ1) | Android TV 10 |
> | Xiaomi MiTV-AESP0 stick (aquaman, 1 GB) | Android TV 9 |
> | Xiaomi MiTV-AXSO0 (dangal) | Android TV 9 |
> | Xiaomi MiTV-MOOR2 (venom, MediaTek) | Google TV 11 |
> | Xiaomi TV A Pro 75" 2026 (MiTV-MZTU0, river, MediaTek) | Google TV 14 |
> 
> Your TV not here? The prompt works regardless, it discovers the bloat itself. If you add your
> list afterwards, the next person with your model skips that step. See
> [Contributing](#contributing).
> 
> 
> ## Table of contents
> 
> - [How it works](#how-it-works)
> - [Quick start](#quick-start)
> - [What you get](#what-you-get)
> - [Supported TVs](#supported-tvs)
> - [Doing it by hand](#doing-it-by-hand)
> - [The launcher](#the-launcher)
> - [Troubleshooting](#troubleshooting)
> - [Questions people ask](#questions-people-ask)
> - [Contributing](#contributing)
> - [Licence](#licence)
> 
> ---
> 
> 
> ## How it works
> 
> Android TVs have the same debug bridge as Android phones. Once you switch on USB debugging in the
> TV's developer options, the TV listens on your Wi-Fi and asks you once to allow your computer.
> After that, everything is standard Android tooling:
> 
> 1. **Back up** the list of installed packages and settings.
> 2. **Disable** the manufacturer's telemetry, ad services, content rows and preloaded junk with
>    `pm disable-user`. Nothing is uninstalled, so a restore script can undo every step.
> 3. **Install** a small native launcher and make it the default home screen.
> 
> The bloat differs by brand, which is why the prompt asks your coding assistant to discover it
> on your TV and ask you before touching anything you might use.
> 
> 
> ## What you get
> 
> A home screen that is yours again:
> 
> - **Pitch-black background** and a dock of your four favourite apps at the bottom, in a lighter
>   rounded band, exactly where Apple TV puts it.
> - **A top shelf** showing the focused app's name in large type, with an ambient glow in a colour
>   taken from the app's own artwork.
> - **The rest of your apps in a grid** that slides up when you press Down.
> - **One floating glass highlight** that springs from tile to tile instead of each tile drawing its
>   own border. The focused tile lifts slightly and shows its name.
> - **Three frosted buttons**: Inputs (a dropdown of HDMI ports, AV and Live TV), Wi-Fi (showing the
>   network you're on) and Settings.
> - **A greeting, a large thin clock and the date**, set in
>   [Outfit](https://fonts.google.com/specimen/Outfit).
> - **A matching Clock screensaver**, optional, that drifts around the screen so nothing burns in.
> - **The remote's Input button can keep working.** On Google TV the stock launcher handled it; an
>   optional accessibility service maps it (`KEYCODE_TV`) to the system input switcher in any app.
>   Install with `INPUT_KEY_SERVICE=1` to turn it on.
> 
> And a TV that stops working against you: no sponsored rows, no "Discover" nags, no analytics
> phoning home, no apps you never asked for.
> 
> 
> ## Doing it by hand
> 
> Everything the assistant does, you can run yourself. The tools need Python 3 and nothing else.
> 
> ```bash
> python3 -m venv tools/venv && tools/venv/bin/pip install -r tools/requirements.txt
> export TV_HOST=192.168.1.50                                   # your TV's IP address
> 
> tools/venv/bin/python -I tools/tv.py --probe                 # model, Android version, firmware
> tools/venv/bin/python -I tools/tv.py 'pm list packages'      # run one shell command on the TV
> printf 'cmd1\ncmd2\n' | tools/venv/bin/python -I tools/tv.py --batch   # several, one connection
> 
> tools/disable.sh examples/xiaomi-mi-tv-4a/debloat.txt        # apply a debloat list
> tools/restore.sh examples/xiaomi-mi-tv-4a/debloat.txt        # undo it and restore the stock launcher
> ```
> 
> | Tool | What it does |
> |---|---|
> | [`tools/tv.py`](tools/tv.py) | A pure-Python ADB client: shell, batch, push, pull. Works where the stock `adb` binary is blocked. |
> | [`tools/b64push.py`](tools/b64push.py) | Uploads larger files such as APKs as base64 chunks and verifies the checksum. |
> | [`tools/disable.sh`](tools/disable.sh) / [`tools/restore.sh`](tools/restore.sh) | Apply or undo a debloat list. PowerShell versions sit next to them. |
> 
> 
> ### Windows
> 
> The PowerShell scripts work without WSL or Git Bash. With Android Studio installed nothing else
> is needed: the install script uses Android Studio's bundled JDK and the default SDK location.
> 
> ```powershell
> python -m venv tools\venv; tools\venv\Scripts\python.exe -m pip install -r tools\requirements.txt
> powershell -ExecutionPolicy Bypass -File launcher\build-and-install.ps1 -TvHost 192.168.1.50
> powershell -ExecutionPolicy Bypass -File tools\disable.ps1 -TvHost 192.168.1.50 examples\xiaomi-mi-tv-4a\debloat.txt
> powershell -ExecutionPolicy Bypass -File tools\restore.ps1 -TvHost 192.168.1.50 examples\xiaomi-mi-tv-4a\debloat.txt
> ```
> 
> The install s

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/Gathin23/tv-vibehack) · [官方網站](https://x.com/gathint/status/2111379569030939102)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Gathin23--tv-vibehack"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Java" AND file.name != "Gathin23--tv-vibehack" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W43" AND file.name != "Gathin23--tv-vibehack"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Gathin23--tv-vibehack");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Gathin23--tv-vibehack" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Gathin23" AND file.name != "Gathin23--tv-vibehack"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Gathin23--tv-vibehack");
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
> const me = dv.page("Repos/Gathin23--tv-vibehack");
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
> const me = dv.page("Repos/Gathin23--tv-vibehack");
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
> const me = dv.page("Repos/Gathin23--tv-vibehack");
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
> const me = dv.page("Repos/Gathin23--tv-vibehack");
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

> **2026-10-19** — 首次收錄
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

- [[2026-10-19|2026-10-19]] — 首次收錄，2.5k stars
