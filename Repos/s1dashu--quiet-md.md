---
repo: s1dashu/quiet-md
url: https://github.com/s1dashu/quiet-md
owner: s1dashu
owner_type: User
language: Rust
license: MIT
description: "Blazing-fast native notes app for macOS & Windows. Rust + GPUI, local-first, compatible with Feishu/Lark DocxXML."
homepage: "https://quiet.md"
stars: 1295
stars_per_day: 216
forks: 116
open_issues: 38
created: 2026-11-01
pushed_at: 2026-11-07
first_seen: 2026-11-08
week: "2026-W46"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v0.1.7"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-08
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-11"
contributor_count: 5
engagement: "low"
issue_close_rate: 39
repo_size_kb: 27541
readme_length: 6960
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-08"
star_history: "2026-11-08:1295"
tags:
  - github
  - "category/other"
  - "lang/rust"
aliases:
  - "quiet-md"
  - "s1dashu/quiet-md"
---

# quiet-md

**1.3k** stars · **216** stars/天 · 建立 6 天前 · Rust · MIT

```dataviewjs
const me = dv.page("Repos/s1dashu--quiet-md");
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

`v0.1.7`

> [!summary] 一句話摘要
> Blazing-fast native notes app for macOS & Windows. Rust + GPUI, local-first, compatible with Feishu/Lark DocxXML.

## 專案簡介

Blazing-fast native notes app for macOS & Windows. Rust + GPUI, local-first, compatible with Feishu/Lark DocxXML.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/s1dashu--quiet-md");
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
> const me = dv.page("Repos/s1dashu--quiet-md");
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
| Forks | 116 |
| Open Issues | 38 |
| Issue 解決率 | 39% (24 closed) |
| 最後推送 | 2026-11-07 |
| 建立日期 | 2026-11-01 |
| 官方網站 | [Link](https://quiet.md) |
| Repo 大小 | 26.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/s1dashu/quiet-md) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `name` `version` `edition` `description` `license` `readme` `authors` `keywords` `categories` `devtools` `members` `default-members` `fdl_core` `anyhow` `dirs`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 95
>     "CSS" : 1
>     "Python" : 1
>     "Shell" : 1
>     "HTML" : 1
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@s1dashu](https://github.com/s1dashu) | 126 |
> | [@VJ-2303](https://github.com/VJ-2303) | 4 |
> | [@jimuzhe](https://github.com/jimuzhe) | 2 |
> | [@eltociear](https://github.com/eltociear) | 1 |
> | [@nexmoe](https://github.com/nexmoe) | 1 |

**最新版本**：v0.1.7 — Quiet.md 0.1.7 (2026-11-06)

> [!info]- Release Notes
> Quiet.md 0.1.7 improves save recovery, export safety, and Windows input.
> 
> - Quitting checks all windows. Save failures offer retry, reload from disk, or saving a separate copy.
> - Work that cannot be saved during application shutdown is preserved for recovery as a new document on the next launch.
> - Markdown exports now include inline attachment links and files, including attachments in tables.
> - Local-file exports enforce library boundaries and size limits; HTML exports no longer expose local attachment paths.
> - Writes use unique temporary files, stop on write-lock failures, and sync parent directories on Unix.
> - Fixed Weasel/Rime on Windows deleting a committed character when clearing composition, and inserting an extra newline when committing Latin text with Enter.
> 
> macOS and Windows release tests and clippy passed. Weasel 0.17.3 and Microsoft Pinyin were checked on Windows 11 using native keyboard input. Full version history is not included.
> 
> macOS: Apple Silicon, signed and notarized. Windows: x64 installer, unsigned. In-app updates are available to users on 0.1.4 or later.
> 
> ---
> 
> 0.1.7 改善保存恢复、导出安全和 Windows 输入。
> 
> - 退出时检查所有窗口；保存失败可以重试、重新载入磁盘版本或另存副本。
> - 应用退出阶段仍无法保存的内容会保留，下次启动恢复为新文档，不覆盖磁盘原版。
> - Markdown 导出保留行内附件的链接与文件，包含表格中的附件。
> - 导出限制本地资源的读取范围与大小，HTML 不再暴露本地附件路径。
> - 使用唯一临时文件，获取写锁失败时拒绝修改，Unix 平台同步父目录。
> - 修复 Windows 小狼毫清空拼音时多删已上屏字符，以及回车上屏字母时多插入换行。
> 
> 完整版本历史不在本次发布范围内。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-06 ~ 2026-11-07）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #97 from pengpercy/ci/macos-amd64

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#20](https://github.com/s1dashu/quiet-md/issues/20) | 新功能建议：支持打开本地的md文档 | 2 | 1 |
> | [#19](https://github.com/s1dashu/quiet-md/issues/19) | 希望支持飞书文档以及飞书知识库文档的双向同步或者单向同步 | 2 | 0 |
> | [#15](https://github.com/s1dashu/quiet-md/issues/15) | Full Right-to-Left (RTL) and Arabic Language Support | 1 | 0 |
> | [#99](https://github.com/s1dashu/quiet-md/issues/99) | 内存占用太大了，动不动超过1个GB的内存占用，真顶不住，赶紧优化下吧，感谢 | 0 | 0 |
> | [#96](https://github.com/s1dashu/quiet-md/issues/96) | Add an option to change the default browser search engine [F | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> Quiet.md
> 
>   A fast, quiet, local notes app.
>   Drawn natively with Rust + GPUI. Your notes stay on your computer, stored in the Feishu (Lark) DocxXML format.
> 
>   English · 简体中文 · 日本語
> 
>   
>   
>   
>   
>   
>   
> 
>   
>   &nbsp;
>   
> 
>   Website ·
>   Download ·
>   Performance ·
>   Features ·
>   Contributing
> 
>   
> 
> > [!NOTE]
> > Quiet.md is in **beta** and changing quickly. If you hit a bug or have an idea, please [open an issue](https://github.com/s1dashu/quiet-md/issues) — or better, send a pull request.
> 
> Linux support is experimental and currently built from source; see the [Linux instructions and validation limits](CONTRIBUTING.md#linux-experimental).
> 
> ## Why Quiet.md
> 
> **⚡ Fast, the native kind of fast.** The whole interface is drawn on the GPU by Rust and [GPUI](https://www.gpui.rs/). No WebView, no Electron. In a one-million-character document, typing, deleting and scrolling all stay under 6 ms per frame at P95.
> 
> **🔒 Local-first. Your files are yours.** No account, no cloud, and nothing goes over the network by default (the optional update check aside). Your library is an ordinary folder on your computer, and each note is one XML file. Manage it with Git, iCloud or any sync tool you like; if you ever stop using Quiet.md, your files are still there.
> 
> **📝 A full rich-text editor that speaks Feishu (Lark) DocxXML.** Notes are saved in the DocxXML format used by Feishu (Lark) Docs, so copy-paste, import and export keep their structure. Headings, to-dos, tables, columns, callouts, code, math, images and attachments — the blocks you reach for when writing documents are all there.
> 
> ## Download
> 
>   
>   &nbsp;
>   
> 
> | Platform | Requirements |
> |---|---|
> | **macOS** (Apple Silicon) | macOS 13 or later |
> | **Windows** (x64) | Windows 10 version 2004 or later |
> 
> - **macOS**: unzip and drag `quiet.md.app` into Applications. The app is signed and notarized by Apple.
> - **Windows**: run the installer. By default it installs for the current user only, and uninstalling never deletes your notes. If SmartScreen appears on first launch, click **More info → Run anyway**.
> 
> You can also download from [Quiet.md](https://quiet.md/?lang=en). Every release and its SHA-256 checksums are on [GitHub Releases](https://github.com/s1dashu/quiet-md/releases). There is no Intel Mac build yet; you can [build from source](CONTRIBUTING.md#building-from-source).
> 
> On first launch, Quiet.md puts a **Getting started** guide into an empty library — a ten-minute tour of the main features. Existing notes are never overwritten.
> 
> The interface is available in English and Simplified Chinese.
> 
> ## Performance
> 
> Frame processing time over 100 consecutive operations in a mixed document of **1 million characters** and 549 chapters:
> 
> | Operation | P50 | P95 |
> |---|---:|---:|
> | ⌨️ Typing | **5.06 ms** | 5.78 ms |
> | ⌫ Backspace | **4.99 ms** | 5.55 ms |
> | 🖱️ Scrolling | **2.08 ms** | 4.14 ms |
> 
> A 120 Hz display gives each frame 8.3 ms. Even at P95 on a million-character document, there is headroom left.
> 
> | | |
> |---|---|
> | macOS download | ~18 MB |
> | Windows installer | ~14 MB |
> | Runtime | No WebView, no Electron, no background services |
> 
> Apple M5 Pro / 48 GiB, macOS 26.5, release build. Methodology and scripts to reproduce: [docs/PERFORMANCE.md](docs/PERFORMANCE.md).
> 
> ## Features
> 
> - **Editing**: headings, ordered and bulleted lists, to-dos, quotes, code blocks with syntax highlighting, LaTeX math, tables (with merged cells), callouts, columns, images, attachments and covers. Markdown shortcuts such as `#`, `-`, `[]` and `>`, plus a `/` slash menu.
> - **Organizing**: a document tree, pinning, favorites, full-text search and a trash.
> - **Import and export**: import Markdown and Feishu (Lark) DocxXML; export Markdown and PDF, or print directly. Pasting from Feishu or a web page keeps the structure.
> - **Shortcuts**: press `⌘ /` (`Ctrl+/` on Windows) to see them all. Every one can be rebound. On Windows, Ctrl stands in for ⌘ and Alt for ⌥; the app and the Getting started guides show the keys for your system.
> - **Themes**: four built-in styles — Craft, Feishu, Notion and Obsidian — each with a dark variant, or write your own in CSS; see [docs/THEMES.md](docs/THEMES.md).
> 
> ## Contributors
> 
> Thanks to everyone who has helped build Quiet.md. Issues and pull requests are welcome: building, testing and code conventions are in [CONTRIBUTING.md](CONTRIBUTING.md).
> 
> [](https://github.com/s1dashu/quiet-md/graphs/contributors)
> 
> ## Recent updates
> 
> - **0.1.7** (Nov 6): safer multi-window saving, conflict recovery and disk writes; restricted export file access; Markdown exports keep inline attachments. Fixed Chinese input deletion with Weasel on Windows.
> - **0.1.6** (Nov 6): smoother window switching and typing, wider tables, regular saves during continuous typing, and Option+Space for global quick notes on macOS. Windows adds image paste, PDF export and printing, with corrected word deletion.
> - **0.1.5** (Nov 5): the app is now called Quiet.md; your library and notes stay where they were.
>   - Manage several documents at once from Home: duplicate, move or delete them together.
>   - Empty the Trash in one step; arrow keys move through the insert menu's icons; deleting every document no longer creates an empty one.
>   - After an in-app update, the sidebar shows once what changed in the new version.
>   - Windows: shortcuts and the built-in guide read Ctrl / Alt, and a failed launch explains itself and leaves a log.
> - **0.1.4** (Nov 5):
>   - In-app updates: when a new version is out, an **Update** button appears at the top of the sidebar. The download is verified against its signature, and a restart finishes the install; open documents are saved first. Automatic checks can be turned off in **Settings › General**. A check only fetches a version manifest and sends no data. Version 0.1.3 and earlier need a one-time manual download of 0.1.4.
>   - Dark mode: choose System, Light or Dark in **Settings › Appearance**. Built-in and custom themes all have a dark look; export and printing stay light.
> - **0.1.3** (Nov 4): sidebar text is readable again when macOS is in dark mode.
> - **0.1.2** (Nov 4): the standard macOS menus and shortcuts (Hide, Minimize, Zoom, Full Screen); clicking the Dock icon reopens a window after the last one was closed. Fixed some Chinese characters rendering with the wrong glyphs.
> - **0.1.1** (Nov 3): first Windows x64 release, installed per user, keeping your notes on uninstall. Polished the Chinese and English interface and the built-in guide.
> 
> Full notes for each version are on [Releases](https://github.com/s1dashu/quiet-md/releases).
> 
> ## License
> 
> The code is licensed under [MIT](LICENSE). Third-party code, fonts and assets are listed in [THIRD_PARTY.md](THIRD_PARTY.md).
> 
> The following are not covered by the MIT license and should be replaced in forks:
> 
> - The 67 Nucleo icons in `assets/icons/` are under a commercial Nucleo license. Do not extract or redistribute them on their own.
> - The name "Quiet.md" and the app icon.

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/s1dashu/quiet-md) · [官方網站](https://quiet.md)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "s1dashu--quiet-md"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "s1dashu--quiet-md" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W46" AND file.name != "s1dashu--quiet-md"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/s1dashu--quiet-md");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "s1dashu--quiet-md" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "s1dashu" AND file.name != "s1dashu--quiet-md"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/s1dashu--quiet-md");
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
> const me = dv.page("Repos/s1dashu--quiet-md");
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
> const me = dv.page("Repos/s1dashu--quiet-md");
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
> const me = dv.page("Repos/s1dashu--quiet-md");
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
> const me = dv.page("Repos/s1dashu--quiet-md");
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

> **2026-11-08** — 首次收錄
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

- [[2026-11-08|2026-11-08]] — 首次收錄，1.3k stars
