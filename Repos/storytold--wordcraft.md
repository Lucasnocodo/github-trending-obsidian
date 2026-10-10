---
repo: storytold/wordcraft
url: https://github.com/storytold/wordcraft
owner: storytold
owner_type: Organization
language: Rust
license: Apache-2.0
description: "An open-source, clean-room reimplementation of Microsoft Word in pure Rust"
homepage: "https://getartcraft.com/apps/wordcraft"
stars: 2147
stars_per_day: 1074
forks: 638
open_issues: 140
created: 2026-10-07
pushed_at: 2026-10-10
first_seen: 2026-10-10
week: "2026-W41"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.4.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-10
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-13"
contributor_count: 5
engagement: "medium"
issue_close_rate: 7
repo_size_kb: 7042
readme_length: 9943
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-10"
star_history: "2026-10-10:2147"
tags:
  - github
  - "category/other"
  - "lang/rust"
  - org
aliases:
  - "wordcraft"
  - "storytold/wordcraft"
---

# wordcraft

**2.1k** stars · **1.1k** stars/天 · 建立 2 天前 · Rust · Apache-2.0

```dataviewjs
const me = dv.page("Repos/storytold--wordcraft");
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

`ORG` `v0.4.0`

> [!summary] 一句話摘要
> An open-source, clean-room reimplementation of Microsoft Word in pure Rust

## 專案簡介

An open-source, clean-room reimplementation of Microsoft Word in pure Rust

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/storytold--wordcraft");
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
> const me = dv.page("Repos/storytold--wordcraft");
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
| Forks | 638 |
| Open Issues | 140 |
| Issue 解決率 | 7% (11 closed) |
| 最後推送 | 2026-10-10 |
| 建立日期 | 2026-10-07 |
| 官方網站 | [Link](https://getartcraft.com/apps/wordcraft) |
| Repo 大小 | 6.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/storytold/wordcraft) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members` `default-members` `version` `edition` `license` `rust-version` `repository` `wordcraft-geom` `wordcraft-doc` `wordcraft-fonts` `wordcraft-layout` `wordcraft-docx` `wordcraft-formats` `wordcraft-render`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 92
>     "Max" : 6
>     "Shell" : 1
>     "PowerShell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@echelon](https://github.com/echelon) | 27 |
> | [@MarekSpodBiedry](https://github.com/MarekSpodBiedry) | 5 |
> | [@DWAA1660](https://github.com/DWAA1660) | 4 |
> | [@goldsbd](https://github.com/goldsbd) | 2 |
> | [@h-a-n-a-s-h-i](https://github.com/h-a-n-a-s-h-i) | 2 |

**最新版本**：v0.4.0 — WordCraft v0.4.0 (2026-10-10)

> [!info]- Release Notes
> ## What's Changed
> * Apply heading/Title clears a paragraph's list numbering by @justinjohn0306 in https://github.com/storytold/wordcraft/pull/13
> * Layout: first-page header test no longer depends on installed fonts by @dkhlapov in https://github.com/storytold/wordcraft/pull/65
> * Fix font dropdown hang caused by nested egui context lock by @DWAA1660 in https://github.com/storytold/wordcraft/pull/9
> * Ctrl+-, Ctrl+= and Ctrl+0 no longer zoom the whole window (#14) by @MarekSpodBiedry in https://github.com/storytold/wordcraft/pull/36
> * Ruler: dragging an indent marker is one undo step (#57) by @MarekSpodBiedry in https://github.com/storytold/wordcraft/pull/62
> * Windows MSI: give WordCraft its own UpgradeCode (fixes #4) by @DWAA1660 in https://github.com/storytold/wordcraft/pull/10
> * M6: footnotes no longer cite themselves in saved .docx files by @goldsbd in https://github.com/storytold/wordcraft/pull/53
> * draw Symbol and Wingdings bullets as Unicode when the font is missing (#29) by @MarekSpodBiedry in https://github.com/storytold/wordcraft/pull/37
> * Default Windows startup to DirectX 12 by @DWAA1660 in https://github.com/storytold/wordcraft/pull/50
> * Options: remember the user name between runs (#32) by @MarekSpodBiedry in https://github.com/storytold/wordcraft/pull/35
> * M6: TOC page numbers, and save the TOC as a field Word can update by @goldsbd in https://github.com/storytold/wordcraft/pull/52
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-09 ~ 2026-10-10）
> **活躍天數** 2 天 · **最新 commit** Bump version to 0.4.0 (from 0.3.0) for release; refresh contributors

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#66](https://github.com/storytold/wordcraft/issues/66) | Full Arabic and RTL Support | 4 | 2 |
> | [#44](https://github.com/storytold/wordcraft/issues/44) | Modifying Tables | 2 | 0 |
> | [#25](https://github.com/storytold/wordcraft/issues/25) | Choice of language for correction not implemented yet | 2 | 0 |
> | [#121](https://github.com/storytold/wordcraft/issues/121) | Wordcraft freezes when interacting with the font picker | 1 | 0 |
> | [#63](https://github.com/storytold/wordcraft/issues/63) | Arabic text not displaying correctly | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> WordCraft
> 
>   Writing and document design; an open-source, clean-room reimplementation of Microsoft Word, rebuilt in pure Rust.
> 
>   A fast, open-source word processor with the Word workflow you already know: the ribbon, styles,
>   tables, track changes, references and mail merge. It reads and writes .docx, runs natively on
>   macOS, Windows, Linux and BSD, and in the browser via WebAssembly.
>   By the ArtCraft team.
> 
>   
>   
>   
>   
> 
>   
> 
>   WordCraft on getartcraft.com ·
>   ArtCraft ·
>   All Crafting Apps
> 
>   
>   The Open Studio Handbook, WordCraft's built-in sample: the ribbon, live Styles gallery, rulers and the Navigation pane.
> 
> > [!NOTE]
> > **ArtCraft is a community of artists from all walks of life.** Painters, photographers,
> > filmmakers, illustrators, designers, animators, hobbyists, and people who picked up a pencil
> > last week. If you make things, you're one of us. **[Come say hi on Discord](https://discord.gg/artcraft).**
> 
>   A tour ·
>   Why WordCraft ·
>   What works today ·
>   Quick start ·
>   For agents ·
>   Architecture ·
>   Roadmap ·
>   Downloads ·
>   The Crafting Apps ·
>   License and credits
> 
> 
> ## Quick start
> 
> ```sh
> git clone https://github.com/storytold/wordcraft
> cd wordcraft
> cargo run --release -p wordcraft -- --sample        # the desktop app with the sample document
> cargo run --release -p wordcraft -- report.docx     # open a document
> ```
> 
> Command line:
> 
> ```sh
> wordcraft-cli convert report.docx report.pdf        # docx, pdf, odt, rtf, html, md, txt, png
> wordcraft-cli text report.docx                      # plain text
> wordcraft-cli inspect report.docx                   # structure as JSON
> wordcraft-cli run --template sample \
>   --cmd 'select.text={"text":"Membership"}' --cmd format.bold --save out.docx
> ```
> 
> Web: `cd apps/wordcraft-web && trunk serve`, then open .
> 
> 
> ## Why WordCraft
> 
> - **Familiar.** Word's ribbon tabs, groups, shortcuts and behaviour: Enter continues a list,
>   Tab demotes it, Ctrl/⌘+B bolds the word under the caret, the Styles gallery previews styles live,
>   F4 repeats, F7 checks spelling, F8 extends the selection.
> - **Your files.** Opens and saves .docx (OOXML), and also .odt, .rtf, .html, .md, .txt; exports PDF
>   with real, selectable text, links and bookmarks.
> - **Fast.** Paragraph layout is cached, so typing in a 188-page document re-lays it out in about
>   1.4 ms; pages render on demand.
> - **Everywhere.** One Rust codebase for macOS, Windows, Linux, BSD and the web. No Electron, no
>   Tauri: native [egui](https://github.com/emilk/egui) on the GPU.
> - **Built for agents.** Every action is a command with an id. The same 389 commands drive the
>   ribbon, keyboard shortcuts, the command search, a command-line tool, a JSON control channel and
>   an MCP server.
> - **Private.** Spelling, grammar and everything else work offline.
> - **Open.** MIT OR Apache-2.0. Clean-room: built from public specifications and observation, with
>   every asset original or openly licensed.
> 
> 
> ## A tour
> 
> Every screenshot below is WordCraft itself, rendered offscreen by its own UI test harness
> (`cargo run -p wordcraft-ui-egui --example ui_shot`).
> 
> Review. Track changes, comment balloons in the margin, accept and reject, spelling and grammar as you type.
> References. Tables of contents, footnotes, citations in APA, MLA, Chicago or IEEE, index and captions.
> 
> Design. Themes, style sets, paragraph spacing, watermarks, page colour and borders.
> Dark mode with formatting marks, and the Insert tab: tables, pictures, shapes, links, headers, footers, fields and symbols.
> 
> Layout. Drop caps, text wrapping around pictures and shapes, automatic hyphenation, line numbers and page borders.
> 
> File. Start from a template, open recent documents, edit properties, export to PDF and other formats.
> 
> 
> ## What works today
> 
> | Area | Highlights |
> |---|---|
> | **Writing** | Fast typing with IME, smart quotes, AutoCorrect, list autoformat (`* `, `1. `), dashes; word, sentence, paragraph selection; drag-select; clipboard with formatting; undo/redo; find and replace with regex |
> | **Formatting** | Fonts, sizes, bold/italic/underline styles, strike, sub/superscript, caps, highlight, colours, character spacing, Format Painter, Change Case, Clear Formatting |
> | **Paragraphs** | Alignment, indents (draggable on the ruler), spacing, line spacing, tabs with leaders, borders, shading, keep with next, widow/orphan control |
> | **Styles** | Built-in style set, live gallery, Styles pane, create/modify/update styles, style sets, themes |
> | **Lists** | Bullets, numbering, multilevel, restart, set value, custom formats |
> | **Tables** | Insert by grid, merge/split, styles with banded rows, borders, shading, header rows repeated across pages, rows that split across pages, sort, formulas, text ↔ table |
> | **Pages** | Margins, orientation, size, columns, page/column/section breaks, headers and footers (first page, odd/even), page numbers, watermark, page borders, line numbers, vertical alignment, drop caps, automatic hyphenation |
> | **Objects** | Pictures (resize, crop, recolour, brightness/contrast, transparency, background removal, picture styles, rotate), shapes, text boxes, floating position with text wrapping (square, top and bottom, behind or in front of text) |
> | **References** | Table of contents, footnotes and endnotes, citations and bibliography (APA, MLA, Chicago, IEEE), captions, table of figures, cross-references, index, table of authorities |
> | **Review** | Spelling and grammar with suggestions, thesaurus, word count, comments in margin balloons or a pane, track changes, accept/reject, compare documents, restrict editing, accessibility checker, document inspector |
> | **Mailings** | Mail merge from CSV, merge fields, address block, greeting line, rules, preview, finish to a document; envelopes and labels |
> | **View** | Print layout, web layout, draft, read mode, focus, zoom, one/multiple pages, page width, Navigation pane, rulers, gridlines, dark mode; interface in English, 简体中文, 繁體中文 or 日本語 (follows the system language by default) |
> | **Files** | .docx read/write (opens in Word), PDF export, .odt, .rtf, .html, .md, .txt import/export, page images |
> 
> The honest picture, area by area, is in [ROADMAP.md](ROADMAP.md) and the generated
> [feature parity report](docs/parity.md).
> 
> 
> ## For agents: CLI and MCP
> 
> WordCraft was designed to be driven by people *and* by AI agents.
> 
> ```sh
> claude mcp add wordcraft -- wordcraft-cli mcp                  # headless documents
> wordcraft --control 7981 &                                     # or drive the running app…
> claude mcp add wordcraft-app -- wordcraft-cli mcp --connect 127.0.0.1:7981
> ```
> 
> Tools include `list_commands`, `execute`, `batch`, `type_text`, `select_text`, `inspect_document`,
> `render_page`, `save_document`, and, with a running app, `screenshot`, `click` and `key`. Agents
> can check their work through `inspect_document` without screenshots. See [docs/mcp.md](docs/mcp.md)
> and the [control protocol](docs/control-protocol.md). Macros record any sequence of commands and
> play it back (`tools.recordMacro`, `tools.macros`).
> 
> 
> ## Logs
> 
> The desktop app writes its log records to standard error and to `logs/wordcraft.log` next to its
> preferences: on Linux `$XDG_CONFIG_HOME/wordcraft/logs/` (by default `~/.config/wordcraft/logs/`),
> on macOS `~/Library/Application Support/WordCraft/logs/`, on Windows `%APPDATA%\WordCraft\logs\`.
> A start from a desktop menu or the Dock has no terminal, so this file is what to attach to a bug
> report: unreadable parts of a .docx, pictures or fonts a PDF export had to leave out and panics the
> command guard recovered from land there. Each launch moves the previous log to `wordcraft.1.log`
> (and that one to `wordcraft.2.log`), so the log of a run that crashed survives the next start; a
> log stops growing at 16 MiB. `--version` writes no file, and runs with `WORDCRAFT_NO_PREFS` (agents'
> test runs) log to standard error only. Document text is never logged; a panic message leaves out
> the text it quotes.
> 
> By default WordCraft's own crates log at `info` and ever

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/storytold/wordcraft) · [官方網站](https://getartcraft.com/apps/wordcraft)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "storytold--wordcraft"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "storytold--wordcraft" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W41" AND file.name != "storytold--wordcraft"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/storytold--wordcraft");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "storytold--wordcraft" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "storytold" AND file.name != "storytold--wordcraft"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/storytold--wordcraft");
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
> const me = dv.page("Repos/storytold--wordcraft");
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
> const me = dv.page("Repos/storytold--wordcraft");
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
> const me = dv.page("Repos/storytold--wordcraft");
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
> const me = dv.page("Repos/storytold--wordcraft");
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

> **2026-10-10** — 首次收錄
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

- [[2026-10-10|2026-10-10]] — 首次收錄，2.1k stars
