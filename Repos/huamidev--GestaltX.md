---
repo: huamidev/GestaltX
url: https://github.com/huamidev/GestaltX
owner: huamidev
owner_type: User
language: Swift
license: GPL-3.0
description: "An MobileGestalt editor for iOS 27.x, featuring region-code tweaks, device presets, backups, and support for 7 languages."
homepage: ""
stars: 6615
stars_per_day: 2205
forks: 2480
open_issues: 56
created: 2026-11-09
pushed_at: 2026-11-11
first_seen: 2026-11-10
week: "2026-W46"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v1.0.4"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-10
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-11-15"
contributor_count: 5
engagement: "high"
issue_close_rate: 41
repo_size_kb: 1122
readme_length: 6252
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-10"
star_history: "2026-11-10:3278,2026-11-11:5478,2026-11-12:6615"
tags:
  - github
  - "category/other"
  - "lang/swift"
aliases:
  - "GestaltX"
  - "huamidev/GestaltX"
---

# GestaltX

**3.3k** stars · **3.3k** stars/天 · 建立 1 天前 · Swift · GPL-3.0

```dataviewjs
const me = dv.page("Repos/huamidev--GestaltX");
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

`v1.0.4`

> [!summary] 一句話摘要
> An MobileGestalt editor for iOS 27.x, featuring region-code tweaks, device presets, backups, and support for 7 languages.

## 專案簡介

An MobileGestalt editor for iOS 27.x, featuring region-code tweaks, device presets, backups, and support for 7 languages.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/huamidev--GestaltX");
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
> const me = dv.page("Repos/huamidev--GestaltX");
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
| Forks | 1.3k |
| Open Issues | 20 |
| Issue 解決率 | 41% (14 closed) |
| 最後推送 | 2026-11-10 |
| 建立日期 | 2026-11-09 |
| Repo 大小 | 1.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/huamidev/GestaltX) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 84
>     "Python" : 8
>     "Objective-C" : 7
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@huamidev](https://github.com/huamidev) | 31 |
> | [@Afloat16](https://github.com/Afloat16) | 13 |
> | [@hooray804](https://github.com/hooray804) | 6 |
> | [@jhao941](https://github.com/jhao941) | 2 |
> | [@Lucas04-nhr](https://github.com/Lucas04-nhr) | 2 |

**最新版本**：v1.0.4 — GestaltX v1.0.4 (2026-11-10)

> [!info]- Release Notes
> English | [简体中文](https://github.com/huamidev/GestaltX/blob/v1.0.4/CHANGELOG_ZH-CN.md)
> 
> Build `11101436`.
> 
> ### Added
> 
> - WAPI preset under **Device → Presets**: disable the WAPI regulatory flag or
>   restore the recorded original value. The cached Boolean is resolved from the
>   device's own MobileGestalt image instead of a hard-coded slot (#30).
> - Per-device originals for the WAPI flag. The value survives edits, app
>   restarts, journal migration, and is restored together with the other cached
>   options (#30).
> - New display presets: high-luminance Always-On Display, AOD flipbook and its
>   entry count, HDR photo display, wallpaper parallax control, and experimental
>   PWM and DisplayPort capability flags.
> - New device presets: Collision SOS, Audio Mix, and Spatial FaceTime audio.
> - New intelligence presets: on-device Siri, Audio Intelligence, Personal
>   Translator, Photos Clean Up, Handwriting Synthesis, and always-listening Hey
>   Siri. These remain capability flags; hardware and region still decide what
>   actually runs.
> - Korean localization, bringing the app to eight supported languages (#24).
> - CI now builds an ad-hoc signed IPA automatically and uploads it as an
>   artifact; tag and release runs also attach it to the matching release.
> 
> ### Changed
> 
> - Additional Options and the WAPI row are shown directly in
>   **Device → Presets**. The hidden ten-tap unlock on the About version string
>   was removed.
> - Restore and open actions are disabled while the current document has staged

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-10 ~ 2026-11-10）
> **活躍天數** 1 天 · **最新 commit** docs: credit Korean localization from #24

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#49](https://github.com/huamidev/GestaltX/issues/49) | 如果想开Apple智能，绝对不要开“显示内部存储信息”！ | 3 | 0 |
> | [#42](https://github.com/huamidev/GestaltX/issues/42) | 求加入功能 | 1 | 0 |
> | [#26](https://github.com/huamidev/GestaltX/issues/26) | [提醒/讨论] 地区修改可能导致 iMessage, iPhone 镜像和家庭不可用 | 1 | 3 |
> | [#52](https://github.com/huamidev/GestaltX/issues/52) | [技术咨询] 外版 iPhone 使用大陆 eSIM 的限制层级及 GestaltX 能力范围 | 0 | 0 |
> | [#46](https://github.com/huamidev/GestaltX/issues/46) | 读不了属性文件 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> GestaltX
> 
> [](https://github.com/huamidev/GestaltX)
> [](#compatibility)
> [](https://github.com/huamidev/GestaltX)
> [](LICENSE)
> 
> [English](README.md) · [简体中文](README_ZH-CN.md)
> 
> A MobileGestalt editor for iPhone and iPad. Developed by [huamidev](https://github.com/huamidev).
> 
> ## Features
> 
> | Category | Presets and tools |
> | --- | --- |
> | Display | Dynamic Island capability and layout, Always-On Display, AOD Vibrancy, high-luminance AOD, AOD flipbook, HDR photo display, wallpaper parallax, Liquid Glass low-power rendering, experimental PWM and DisplayPort flags |
> | Device | Model name, boot/shutdown chime, charge limit, tap to wake, Camera Control settings, Action Button settings, Collision SOS, Audio Mix, Spatial FaceTime audio |
> | iPad | Apple Pencil settings, Stage Manager capability, iPad app compatibility |
> | Intelligence | Independent region-code options, Apple Intelligence capability flag, on-device Siri, Audio Intelligence, Personal Translator, Photos Clean Up, Handwriting Synthesis, always-listening Hey Siri, and sales-region options for activation attempts on China-mainland devices |
> | Advanced | Apple internal feature flags, internal storage view, internal settings bundle, Security Research Device flag |
> | Field editor | Read, search, add, edit, and remove `CacheExtra` fields; local plist import/export; String, Integer, Real, Boolean, Data, Date, Array, and Dictionary values |
> | Changes | Automatic reading and manual re-read, staged before/after review, verified writes, per-preset restore |
> | Backups | Automatic initial backup before device editing, backup before every write, original-value records; open, export, restore, and delete |
> | Logs & respring | Actual exploit-stage logs and manual NeoSpring respring |
> 
> Usually, changing the region code is enough to try enabling AI; there is no need to change Sales Region. Selecting United States for Region Code sets `RegionCode` to `LL` and keeps the sales-region suffix. You can also choose China (Mainland), Hong Kong, Taiwan, Japan or the United Kingdom. Sales Region and Region Code can be applied together: the sales suffix follows Sales Region, while the code follows Region Code.
> 
> *If you previously changed Sales Region, restore your device’s original sales region and apply it first.*
> 
> Disabling a preset or using its Revert button restores the recorded original values and types. Keys that were originally absent are removed. If an older change has no original record, use Remove Added Fields only when you know those fields were added.
> 
> Presets modify capability flags; actual effects depend on the device and OS. China-mainland devices can use the Apple Intelligence and region options to attempt activation; availability also depends on the model, OS version, and Apple services.
> 
> ## Compatibility
> 
> Supports **iOS / iPadOS 27.x**. **iOS / iPadOS 26.x is not supported for on-device MobileGestalt access.** Powered by [worse_query](https://github.com/forcequitOS/worse_query). SystemGroup access requires iOS 27; available features depend on the device and OS. Local plist editing is also supported.
> 
> Signing requires a certificate and provisioning profile with at least one usable App Group. Sign the app and its embedded share extension with at least one **common App Group**, and keep the extension when re-signing. Both processes detect their actual signed App Groups at runtime. Distributed IPAs carry ad-hoc signatures with these entitlements embedded so SideStore and AltStore can detect them when re-signing; they are not signed with a developer certificate.
> 
> ## Import a plist
> 
> In Files or another app, select a MobileGestalt plist, tap **Share**, and choose **GestaltX**. The share extension reads the supplied file and hands it to the app through the shared App Group. Return to GestaltX if it does not open automatically. The app checks a device-bound proof from a GestaltX export, or at least two unique identifiers obtained from this device, then asks you to confirm the import. Files that cannot be verified are rejected. Previously imported files are never used as the reference for device identity.
> 
> Some original plists contain no unique device identifiers. Export a copy from GestaltX on this device first: its verification key stays in the device-only Keychain and is never included in the file.
> 
> Shared files are checked at launch and on return to the foreground. Pending edits are preserved until you save or discard them. Confirmed imports open as local documents. **MG Control** supports adding, editing, renaming and deleting typed keys and values. Use **Restore Imported Plist** to restore a verified file to this device; restoration requires a matching system cache layout and an additional confirmation, backs up the current file, and verifies the write. Restart the device afterward.
> 
> ## Language support
> 
> GestaltX follows your iOS language settings, with English as the default and fallback. Persian includes right-to-left layout support.
> 
> | Language | Locale |
> | --- | --- |
> | English | `en` |
> | 简体中文 — Simplified Chinese | `zh-Hans` |
> | 繁體中文（台灣）— Traditional Chinese (Taiwan) | `zh-Hant-TW` |
> | 繁體中文（香港）— Traditional Chinese (Hong Kong) | `zh-Hant-HK` |
> | Tiếng Việt — Vietnamese | `vi` |
> | Русский — Russian | `ru` |
> | فارسی — Persian | `fa` |
> | 한국어 — Korean | `ko` |
> 
> ## Credits
> 
> - [forcequitOS / Taj C — worse_query](https://github.com/forcequitOS/worse_query)
> - [neonmodder123](https://github.com/neonmodder123)
> - [skadz108](https://github.com/skadz108)
> - [rooootdev — NeoSpring](https://github.com/rooootdev/neospring)
> - [Nouvborne — Ketamine](https://github.com/Nouvborne/Ketamine)
> - [PoomSmart — MGKeys](https://github.com/PoomSmart/MGKeys)
> - [leminlimez — Nugget](https://github.com/leminlimez/Nugget)
> - [rooootdev — mond](https://github.com/rooootdev/mond)
> - [frs0n — GestaltEdit](https://github.com/frs0n/GestaltEdit)
> 
> ## Disclaimer
> 
> For security research and educational purposes only. Use only on devices you own or are authorized to manage.
> 
> Back up your data before making changes. Modifying MobileGestalt may cause system instability or require a device restore. You are responsible for the changes you apply and the resulting risks.
> 
> ## License
> 
> [GNU GPL v3](LICENSE) · Copyright © 2026 huamidev.
> 
> ## Star History

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/huamidev/GestaltX)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "huamidev--GestaltX"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "huamidev--GestaltX" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W46" AND file.name != "huamidev--GestaltX"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/huamidev--GestaltX");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "huamidev--GestaltX" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "huamidev" AND file.name != "huamidev--GestaltX"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/huamidev--GestaltX");
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
> const me = dv.page("Repos/huamidev--GestaltX");
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
> const me = dv.page("Repos/huamidev--GestaltX");
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
> const me = dv.page("Repos/huamidev--GestaltX");
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
> const me = dv.page("Repos/huamidev--GestaltX");
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

> **2026-11-10** — 首次收錄
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

- [[2026-11-12|2026-11-12]] — 再次上榜，6.6k stars
- [[2026-11-11|2026-11-11]] — 再次上榜，5.5k stars
- [[2026-11-10|2026-11-10]] — 首次收錄，3.3k stars
