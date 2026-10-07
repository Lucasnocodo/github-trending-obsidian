---
repo: storytold/printcraft
url: https://github.com/storytold/printcraft
owner: storytold
owner_type: Organization
language: Rust
license: Apache-2.0
description: "An open-source, clean-room reimplementation of Adobe Acrobat built in pure Rust"
homepage: "https://getartcraft.com/apps/printcraft"
stars: 1410
stars_per_day: 235
forks: 486
open_issues: 45
created: 2026-09-30
pushed_at: 2026-10-07
first_seen: 2026-10-07
week: "2026-W41"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.2.1"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-07
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-10"
contributor_count: 5
engagement: "high"
issue_close_rate: 29
repo_size_kb: 22391
readme_length: 9856
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-07"
star_history: "2026-10-07:1410"
tags:
  - github
  - "category/other"
  - "lang/rust"
  - org
  - "topic/acrobat"
  - "topic/acrobat_full"
  - "topic/acrobat_pro"
  - "topic/adobe"
  - "topic/adobe_acrobat"
aliases:
  - "printcraft"
  - "storytold/printcraft"
---

# printcraft

**1.4k** stars · **235** stars/天 · 建立 6 天前 · Rust · Apache-2.0

```dataviewjs
const me = dv.page("Repos/storytold--printcraft");
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

`ORG` `v0.2.1`

`acrobat` `acrobat-full` `acrobat-pro` `adobe` `adobe-acrobat` `document-processing` `documents` `pdf` `pdf-generation` `pdf-processing` `pdf-tools` `pdf-viewer` `rust`

> [!summary] 一句話摘要
> An open-source, clean-room reimplementation of Adobe Acrobat built in pure Rust

## 專案簡介

An open-source, clean-room reimplementation of Adobe Acrobat built in pure Rust

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/storytold--printcraft");
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
> const me = dv.page("Repos/storytold--printcraft");
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
| Forks | 486 |
| Open Issues | 45 |
| Issue 解決率 | 29% (18 closed) |
| 最後推送 | 2026-10-07 |
| 建立日期 | 2026-09-30 |
| 官方網站 | [Link](https://getartcraft.com/apps/printcraft) |
| Repo 大小 | 21.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/storytold/printcraft) |
| Topics | `acrobat` `acrobat-full` `acrobat-pro` `adobe` `adobe-acrobat` `document-processing` `documents` `pdf` |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members` `exclude` `default-members` `version` `edition` `license` `rust-version` `repository` `printcraft-geom` `printcraft-filters` `printcraft-cos` `printcraft-crypt` `printcraft-organize` `printcraft-annot`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 97
>     "HTML" : 2
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@echelon](https://github.com/echelon) | 249 |
> | [@bflatastic](https://github.com/bflatastic) | 23 |
> | [@storybored379](https://github.com/storybored379) | 8 |
> | [@justinjohn0306](https://github.com/justinjohn0306) | 1 |
> | [@midasdf](https://github.com/midasdf) | 1 |

**最新版本**：v0.2.1 — PrintCraft v0.2.1 (2026-10-06)

> [!info]- Release Notes
> ## What's Changed
> * Updates: check only when asked (no check at start) by @echelon in https://github.com/storytold/printcraft/pull/38
> * Docs: honest parity assessment, gap list and direction by @echelon in https://github.com/storytold/printcraft/pull/39
> * Never crash: the fuzz job's eleven hangs finish (parser retries, inline images, Type 3 fan-out) by @echelon in https://github.com/storytold/printcraft/pull/41
> * Fix text editing layout and preserve source PDF font styles by @justinjohn0306 in https://github.com/storytold/printcraft/pull/36
> * docs: point agents to the shared test corpora by @echelon in https://github.com/storytold/printcraft/pull/44
> * Never crash: JBIG2 images can't decode billions of pixels by @echelon in https://github.com/storytold/printcraft/pull/43
> * FreeBSD: build and test the workspace in a FreeBSD VM by @echelon in https://github.com/storytold/printcraft/pull/45
> * Never crash: Type 1 font programs can't hang or overflow the stack (skrifa 0.47) by @echelon in https://github.com/storytold/printcraft/pull/46
> * FreeBSD: release tarball, packaging check and docs (builds on #45) by @echelon in https://github.com/storytold/printcraft/pull/42
> * XFDF: gracefully ignore invalid Unicode annotation colours by @storybored379 in https://github.com/storytold/printcraft/pull/48
> * Add persisted English/Japanese interface language by @midasdf in https://github.com/storytold/printcraft/pull/47
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-07 ~ 2026-10-07）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #122 from storytold/fix/107-windows-pdf-association

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#81](https://github.com/storytold/printcraft/issues/81) | add brew and scope support for more MacOS/Windows way instal | 2 | 0 |
> | [#96](https://github.com/storytold/printcraft/issues/96) | Linux Wayland: default LowPower GPU preference causes startu | 1 | 0 |
> | [#80](https://github.com/storytold/printcraft/issues/80) | MacOS - Move the "Menu" to Menu Bar | 1 | 0 |
> | [#135](https://github.com/storytold/printcraft/issues/135) | fix(cli): commands panic when the stdout reader exits early | 0 | 0 |
> | [#134](https://github.com/storytold/printcraft/issues/134) | fix(automation): document when doc_protect permission defaul | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> PrintCraft
> 
>   The PDF workbench; an open-source, clean-room reimplementation of Adobe Acrobat, rebuilt in pure Rust.
>   Read, organize, combine, split and secure PDFs in a fast, native app, written in Rust from the ground up.
>   macOS · Windows · Linux · FreeBSD · the web
> 
>   
>   
>   
>   
> 
>   
> 
>   PrintCraft on getartcraft.com ·
>   ArtCraft ·
>   All Crafting Apps
> 
>   
>   
>   The PrintCraft Showcase, a 13-page specimen PDF, open with the All tools panel and threaded comments.
> 
> > [!NOTE]
> > **ArtCraft is a community of artists from all walks of life.** Digital, generative, music,
> > games &mdash; if you make things, you're one of us. **[Come say hi on Discord](https://discord.gg/artcraft).**
> 
>   Highlights ·
>   Read ·
>   Find ·
>   Organize ·
>   Combine &amp; split ·
>   Protect ·
>   Forms &amp; layers ·
>   Everywhere ·
>   Agents ·
>   How it's built ·
>   Get started ·
>   What's next ·
>   Crafting Apps
> 
> ---
> 
> 
> ## Highlights
> 
> 
> ## Community
> 
> PrintCraft is part of [ArtCraft](https://getartcraft.com). Come say hello, get help and follow development:
> 
> - **Discord: [discord.gg/artcraft](https://discord.gg/artcraft)**. This is the fastest way to get help and share feedback. The app has a Discord button in its title bar.
> - **Web page:** [getartcraft.com/apps/printcraft](https://getartcraft.com/apps/printcraft)
> - **Source:** [github.com/storytold/printcraft](https://github.com/storytold/printcraft)
> 
> The ArtCraft name and logos in `docs/brand/` are trademarks of the ArtCraft Team and are not open source. They may be used only unmodified, and only as part of PrintCraft (see `docs/brand/LICENSE-brand.txt`). Forks and modified versions must remove them.
> 
> 
> ### Faithful
> Real-world typography: world scripts, vertical Japanese, colour emoji, gradients, soft masks and transparency. All of it renders the way the author intended.
> 
> 
> ### Fearless
> Every save appends your changes and leaves the original bytes untouched. Writes are atomic, undo runs deep, and nothing is lost if you close by mistake.
> 
> 
> ### Yours
> No account, no telemetry, no cloud. It works offline and opens instantly. The engine, CLI and app are all open source.
> 
> ---
> 
> 
> ## Read anything, beautifully
> 
> PrintCraft renders PDFs with care for the details that make a page feel right: kerning and ligatures, right-to-left and complex scripts, vertical CJK, colour emoji, shadings, blend modes, soft masks and optional content.
> 
>   
>   
>   Twelve writing systems on one page, plus vertical Japanese, at 125%.
> 
> - **Deep zoom stays sharp.** Large pages render in tiles, so text stays crisp at any magnification.
> - **Built to survive bad files.** Every page renders in isolation and damaged documents are repaired. Across the 983-file pdf.js test corpus the result is 0 crashes.
> - **Layouts for every task:** continuous, single page, two-up, view rotation, full screen and a distraction-free Read mode.
> - **Light and dark themes**, both designed to be easy on the eyes for long sessions.
> 
> Two-up Read mode, ready for long reading
> The dark theme, with the comments panel open
> 
> 
> ## Find it, select it, copy it
> 
> Search the whole document as you type, step through matches with ⌘G, and select text that comes out in the right reading order. That holds for columns, right-to-left runs and CJK too.
> 
> 
> ## Navigate long documents
> 
> Bookmarks, page thumbnails and the document's own page labels (i, ii, 1, 2…) keep you oriented in long documents.
> 
> Find as you type: match 10 of 16
> Nested bookmarks with the document's own page labels
> 
> ---
> 
> 
> ## Organize pages like cards on a table
> 
> Open **Organize pages** to see every page at once:
> - **Select pages:** click, ⌘-click or ⇧-click.
> - **Change them:** rotate, delete, insert blank pages, insert pages from another file, and move them earlier or later.
> - **Undo anything:** ⌘Z, then save.
> 
>   
>   
>   Organize pages with three pages selected and the page tools in the toolbar above.
> 
> **Undo that goes the distance.** Each change is one step in a history you can walk backwards and forwards. The Edit menu names the step ("Undo Rotate pages"), and undo still works after you save.
> 
> **Saves you can trust:**
> - *Incremental:* the original bytes stay byte-for-byte intact.
> - *Atomic:* the file is written to a temporary copy, then swapped in.
> - *Verified:* independently checked with qpdf.
> 
> Unsaved documents carry a dot on their tab, and closing or quitting asks before anything is lost. Changes are autosaved every minute. If PrintCraft ever quits unexpectedly, it offers to recover your work the next time it opens. Encrypted documents stay encrypted on disk.
> 
> Split document: one page per file makes 13 files.
> 
> 
> ## Combine and split without losing a thing
> 
> **Combine files** merges any number of PDFs into one. Each file gets a bookmark, with its own bookmarks nested underneath.
> 
> **Extract** copies the pages you select into a new document. **Split** divides a document every *n* pages, or before the pages you choose.
> 
> Nothing quietly disappears along the way:
> - links and named destinations are rewired to the copied pages;
> - form fields stay interactive;
> - layers keep their on/off defaults;
> - attachments come along.
> 
> Every page of a combined document renders pixel-identical to its source.
> 
> ```sh
> printcraft-cli combine report.pdf appendix.pdf --out combined.pdf
> printcraft-cli extract report.pdf --pages 1,3,5 --out highlights.pdf
> printcraft-cli split   report.pdf --every 10 --out-dir parts/
> ```
> 
> ---
> 
> 
> ## Open protected documents and respect their rules
> 
> PrintCraft implements the PDF standard security handler completely:
> - every revision, from 40-bit RC4 to AES-256;
> - user and owner passwords, including Unicode passwords normalised with SASLprep;
> - crypt filters and attachment-only encryption.
> 
> Documents restricted by their author show a clear notice, and PrintCraft honours their permissions. Enter the owner password and the restrictions lift. Edits to encrypted documents are saved encrypted, under the same keys.
> 
> Document Properties, Description tab
> 
> **Document Properties** shows:
> - the document's title, author, subject and keywords, which you can edit;
> - the fonts it uses and whether each is embedded;
> - PDF version, page size, tags, fields, layers and attachments;
> - the full security picture: encryption method, which password opened it, and each permission.
> 
> 
> ## Comments, forms, layers and attachments
> 
> Forms: every field with its current value, field highlighting, and checkboxes, radio buttons, lists and signatures drawn the way their author designed them.
> Layers: switch optional content on and off and the page re-renders instantly. Comments appear as threaded conversations, and attachments can be opened or saved.
> 
> 
> ## Every tool, one keystroke away
> 
> Press ⌘K to search every tool and command, or browse the **All tools** catalogue. Tools that are still in development are marked with the milestone that will ship them.
> 
> The ⌘K command palette
> The home screen and the All tools catalogue
> 
> ---
> 
> 
> ## Runs everywhere, stays yours
> 
> - **Native on macOS, Windows, Linux and FreeBSD**, and **in the browser** through WebAssembly, from the same Rust codebase. Windows builds come for x64, x86 and ARM64 (Windows on ARM, no emulation); every ARM64 change is tested on ARM64 hardware in CI.
> - **Private by design.** Documents never leave your machine. There's no account, no telemetry and no cloud processing.
> - **Engine first.** Parsing, rendering and editing live in reusable library crates. The interface is one swappable layer on top.
> - **Scriptable.** The `printcraft-cli` tool (see [Built for agents, too](#built-for-agents-too)) covers inspecting, rendering, extracting text, editing, combining, extracting pages and splitting. Robustness sweeps run on the same engine as the app.
> 
> ```sh
> printcraft-cli info  form.pdf                                  # structure as JSON
> printcraft-cli text  paper.pdf --page 3                        # reading-order text
> printcraft-cli edit  in.pdf --rotate 1,2:90 --delete 5 --title "Q3" --out out.pdf
> ```
> 
> ---
> 
> 
> ## Built for agents, too
> 
> Every engine feature is reach

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/storytold/printcraft) · [官方網站](https://getartcraft.com/apps/printcraft)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "storytold--printcraft"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "storytold--printcraft" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W41" AND file.name != "storytold--printcraft"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/storytold--printcraft");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "storytold--printcraft" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "storytold" AND file.name != "storytold--printcraft"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/storytold--printcraft");
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
> const me = dv.page("Repos/storytold--printcraft");
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
> const me = dv.page("Repos/storytold--printcraft");
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
> const me = dv.page("Repos/storytold--printcraft");
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
> const me = dv.page("Repos/storytold--printcraft");
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

> **2026-10-07** — 首次收錄
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

- [[2026-10-07|2026-10-07]] — 首次收錄，1.4k stars
