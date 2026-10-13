---
repo: storytold/gridcraft
url: https://github.com/storytold/gridcraft
owner: storytold
owner_type: Organization
language: Rust
license: Apache-2.0
description: "GridCraft: an open-source, clean-room spreadsheet (Microsoft Excel-style) in pure Rust. By ArtCraft."
homepage: ""
stars: 4006
stars_per_day: 668
forks: 1750
open_issues: 304
created: 2026-10-07
pushed_at: 2026-10-13
first_seen: 2026-10-11
week: "2026-W42"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.5.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-11
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-10-16"
contributor_count: 5
engagement: "high"
issue_close_rate: 29
repo_size_kb: 4857
readme_length: 9871
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-11"
star_history: "2026-10-11:1990,2026-10-12:3173,2026-10-13:4006"
tags:
  - github
  - "category/other"
  - "lang/rust"
  - org
aliases:
  - "gridcraft"
  - "storytold/gridcraft"
---

# gridcraft

**2.0k** stars · **498** stars/天 · 建立 4 天前 · Rust · Apache-2.0

```dataviewjs
const me = dv.page("Repos/storytold--gridcraft");
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

`ORG` `v0.5.0`

> [!summary] 一句話摘要
> GridCraft: an open-source, clean-room spreadsheet (Microsoft Excel-style) in pure Rust. By ArtCraft.

## 專案簡介

GridCraft: an open-source, clean-room spreadsheet (Microsoft Excel-style) in pure Rust. By ArtCraft.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/storytold--gridcraft");
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
> const me = dv.page("Repos/storytold--gridcraft");
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
| Forks | 759 |
| Open Issues | 116 |
| Issue 解決率 | 29% (47 closed) |
| 最後推送 | 2026-10-10 |
| 建立日期 | 2026-10-07 |
| Repo 大小 | 4.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/storytold/gridcraft) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members` `default-members` `version` `edition` `license` `rust-version` `repository` `gridcraft-core` `gridcraft-numfmt` `gridcraft-formula` `gridcraft-functions` `gridcraft-model` `gridcraft-calc` `gridcraft-xlsx`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 98
>     "PowerShell" : 1
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@echelon](https://github.com/echelon) | 146 |
> | [@nihilist-narwhal](https://github.com/nihilist-narwhal) | 35 |
> | [@harrisonoconnorhover](https://github.com/harrisonoconnorhover) | 22 |
> | [@MarekSpodBiedry](https://github.com/MarekSpodBiedry) | 14 |
> | [@justinjohn0306](https://github.com/justinjohn0306) | 7 |

**最新版本**：v0.5.0 — GridCraft v0.5.0 (2026-10-10)

> [!info]- Release Notes
> ## What's Changed
> * Desktop: write log records to standard error and a rotating log file by @switch87 in https://github.com/storytold/gridcraft/pull/8
> * Default Windows startup to DirectX 12 by @DWAA1660 in https://github.com/storytold/gridcraft/pull/22
> * Fix: inserting or deleting rows, columns or cells cancels copy/cut mode (#21) by @MarekSpodBiedry in https://github.com/storytold/gridcraft/pull/34
> * Fix missing dropdown arrows on large ribbon buttons (#26) by @harrisonoconnorhover in https://github.com/storytold/gridcraft/pull/35
> * Fix disappearing text when editing merged cells (#40) by @harrisonoconnorhover in https://github.com/storytold/gridcraft/pull/44
> * Fix header double-click AutoFit for selected columns and rows (#42) by @harrisonoconnorhover in https://github.com/storytold/gridcraft/pull/46
> * Fix worksheet popups staying open after outside clicks (#41) by @harrisonoconnorhover in https://github.com/storytold/gridcraft/pull/47
> * Issue #48: rotated text with Wrap Text draws upright (grid and print) by @LloydNicholson in https://github.com/storytold/gridcraft/pull/50
> * Issue #51: General numbers fit by the cell's own font, not 11pt by @LloydNicholson in https://github.com/storytold/gridcraft/pull/53
> * ROUND: keep 15 significant digits when asked for 15+ digits, so ROUND(0.1+0.2,15) is 0.3 (#58) by @MarekSpodBiedry in https://github.com/storytold/gridcraft/pull/60
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-10 ~ 2026-10-10）
> **活躍天數** 1 天 · **最新 commit** Bump version to 0.5.0 for release (#227)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/storytold/gridcraft/issues/6) | VBA Macros support | 3 | 1 |
> | [#121](https://github.com/storytold/gridcraft/issues/121) | The old XLS support | 1 | 0 |
> | [#120](https://github.com/storytold/gridcraft/issues/120) | Crash on startup on Windows with Intel UHD Graphics (Access  | 1 | 1 |
> | [#16](https://github.com/storytold/gridcraft/issues/16) | .ods support? Is it possible? | 1 | 1 |
> | [#257](https://github.com/storytold/gridcraft/issues/257) | Currency-formatted numbers pasted from Excel Online and Libr | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> GridCraft
> 
>   Spreadsheets and data; an open-source, clean-room reimplementation of Microsoft Excel, rebuilt in pure Rust.
> 
>   A fast, open-source, clean-room take on the Excel workflow. It runs natively on macOS,
>   Windows, Linux and BSD, and in the browser via WebAssembly.
>   By the ArtCraft team.
> 
>   
>   
>   
>   
> 
>   
> 
>   GridCraft on getartcraft.com ·
>   ArtCraft ·
>   All Crafting Apps
> 
>   
>   Quarterly Sales Dashboard: a table with a totals row, conditional formatting, sparklines and two live charts — built entirely from GridCraft commands (File → New → Sample).
> 
> > [!NOTE]
> > **ArtCraft is a community of artists from all walks of life.** Painters, photographers,
> > filmmakers, illustrators, designers, animators, hobbyists, and people who picked up a pencil
> > last week. If you make things, you're one of us. **[Come say hi on Discord](https://discord.gg/artcraft).**
> 
>   A look around ·
>   Why GridCraft ·
>   Quick start ·
>   For agents ·
>   Architecture ·
>   Roadmap ·
>   The Crafting Apps ·
>   License and credits
> 
> 
> ## Quick start
> 
> ```sh
> cargo run --release -p gridcraft                              # desktop app
> cargo run --release -p gridcraft -- --sample sales            # open a sample (sales, budget, grades)
> cargo run --release -p gridcraft -- book.xlsx                 # open a workbook
> cargo run --release -p gridcraft -- --sample sales --control 7979   # + JSON control channel
> cargo xtask ci                                                 # fmt, clippy, tests, assets, layering, wasm
> ```
> 
> Choose Español under View → Interface language for [Spanish formula names, decimal commas, and semicolon arguments](docs/formula-input.md).
> Workbooks, clipboard exchange, and programmatic APIs retain canonical English syntax.
> 
> 
> ## Why GridCraft
> 
> - **Familiar.** Excel's ribbon, formula bar, Name Box, sheet tabs, keyboard shortcuts, fill
>   handle, point-mode formula entry with coloured references, Format Cells, Paste Special,
>   conditional formatting, tables, charts and more. If you know Excel, you already know GridCraft.
> - **Compatible.** XLSX is the native format: styles, themes, formulas (including dynamic arrays),
>   tables, conditional formats, validation, comments, hyperlinks, charts, pictures, sparklines,
>   PivotTables and print settings round-trip. CSV and TSV too.
>   [XLSB worksheet data can be imported](docs/xlsb-import.md), using saved values instead of formulas.
>   [ODS worksheet data can be imported](docs/ods-import.md), using saved values instead of formulas.
>   [Static pictures can live inside cells](docs/cell-pictures.md), fitting their size and moving with the data.
> - **Capable.** A dependency-graph calculation engine with dynamic arrays and spilling,
>   500+ worksheet functions plus LET, LAMBDA, MAP, REDUCE, SCAN, BYROW, BYCOL and MAKEARRAY,
>   structured table references, Excel's full number-format language, sort and AutoFilter,
>   Flash Fill, data validation, outlining and subtotals.
> - **Fast.** Copy-on-write workbooks (undo snapshots are nearly free), incremental recalculation,
>   and a virtualised grid that only lays out what's on screen.
> - **Agent-native.** Every ribbon button, menu item, dialog, keystroke and mouse gesture is a
>   command that agents can run over a JSON control channel, an **MCP server**, or the CLI.
> - **Everywhere.** One Rust codebase for desktop and the web. No subscription, no licence server,
>   no telemetry.
> 
> 
> ## A look around
> 
> Formatting. Accounting formats, cell styles, conditional rules and colour scales, frozen headers and a bar chart.
> Formulas. 500+ functions, dynamic arrays, LET and LAMBDA, structured table references.
> 
> Dark mode and the Insert tab: tables, charts, sparklines, pictures, shapes, links and comments.
> PivotTables. Field list, filters, layouts, date grouping and show-values-as, saved to and read from XLSX.
> 
> Charts. Seventeen chart types, Chart Design tab and a Format pane; selecting a chart outlines its source data.
> Page Break Preview, print settings, and PDF export and printing.
> 
> 
> ### Web
> 
> ```sh
> cd apps/gridcraft-web && trunk build --release     # → dist/web (serve it with any static server)
> cd apps/gridcraft-web && trunk serve --release     # http://127.0.0.1:8771  (?sample=sales opens a sample)
> ```
> 
> You need [trunk](https://trunkrs.dev) and the `wasm32-unknown-unknown` target. Open uses the
> browser's file picker (dropping files works too) and Save downloads the workbook.
> 
> 
> ### Ribbon access keys
> 
> Press and release **left Alt** on Windows/Linux/BSD, or press **F10** on any platform,
> then type a sequence below one key at a time. Keytips appear on the supported Home
> controls and menu items. On macOS, use F10 (Fn+F10 if required by your keyboard); Option
> remains available for entering accented characters.
> 
> | Sequence after Alt/F10 | Action |
> |---|---|
> | `H A L` / `H A C` / `H A R` | Align left / center / right |
> | `H V S` or legacy `E S` | Open Paste Special |
> | `H O I` or legacy `O C A` | AutoFit selected columns |
> 
> In Paste Special, **T/V/F/C** select formats/values/formulas/comments, and **E** toggles
> Transpose. **Enter** applies the selected options; **Escape** cancels the dialog.
> These letters also work with Alt held on Windows/Linux/BSD.
> 
> Escape backs out one keytip level; Alt/F10 again exits keytips. Clicking, scrolling,
> or switching windows cancels navigation. Access keys do not start while editing text
> or using another dialog. This is initial support for these Home and legacy paths;
> other ribbon commands and full mouse-free navigation remain to be implemented.
> Browsers or desktop environments may reserve Alt/F10 for their own menus.
> 
> 
> ### Logs
> 
> The desktop app writes its log to standard error and to `gridcraft.log` in the `logs` folder
> next to its settings: `~/.config/gridcraft/logs` on Linux and BSD (`$XDG_CONFIG_HOME/gridcraft/logs`
> when set), `~/Library/Application Support/GridCraft/logs` on macOS and
> `%APPDATA%\GridCraft\logs` on Windows. Each start moves the previous log to `gridcraft.1.log` and
> that one to `gridcraft.2.log`, so the log of a run that crashed survives the next start; attach
> them to a bug report. A log file stops growing at 16 MiB. By default GridCraft's own crates log
> at `info` and everything else at `warn`; `RUST_LOG` replaces that with env_logger-style
> directives, e.g. `RUST_LOG=debug` or `RUST_LOG=warn,gridcraft_engine=debug` (a trailing `*`
> matches a prefix: `gridcraft*=debug`). Runs with `GRIDCRAFT_NO_PREFS` set (no saved settings)
> log to standard error only.
> 
> 
> ## For agents: MCP, CLI and the control channel
> 
> ```sh
> claude mcp add gridcraft -- gridcraft-cli mcp                 # headless MCP server
> gridcraft-cli mcp --connect 7979                               # MCP bridged to a running window
> gridcraft-cli eval '=XLOOKUP("b",{"a","b"},{1,2})'             # → 2
> gridcraft-cli run --sample budget --cmd 'home.bold={"range":"B4:F4"}' --out budget.xlsx
> gridcraft-cli cat budget.xlsx --range B4:F15                   # aligned text table
> gridcraft-cli commands --search chart                          # every command and its params
> ```
> 
> The MCP server offers tools such as `read_range`, `write_range`, `set_cell`, `evaluate_formula`,
> `format_range`, `insert_chart`, `create_table`, `sort_range`, `filter` and `execute_command`
> (which reaches every one of GridCraft's commands). The desktop app's control channel adds real
> pointer and keyboard input, dialogs and screenshots. See [`docs/mcp.md`](docs/mcp.md),
> [`docs/cli.md`](docs/cli.md) and [`docs/control-protocol.md`](docs/control-protocol.md).
> 
> 
> ## Architecture
> 
> GridCraft is an engine-first Cargo workspace with enforced layering (`cargo xtask layers`). The
> egui frontend is a separate crate, so the UI can be swapped without touching the engine.
> 
> | Layer | Crates |
> |---|---|
> | L0 | `core` (addresses, values, errors, dates, input parsing) · `numfmt` (number format codes) |
> | L1 | `formula` (lexer, parser, printer, reference adjustment) · `functions` (worksheet function library) |
> | L2 | `model` (workbook, sheets, copy-on-write cells, styles, tables, charts…) · `calc`

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]]

[GitHub](https://github.com/storytold/gridcraft)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "storytold--gridcraft"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "storytold--gridcraft" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W42" AND file.name != "storytold--gridcraft"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/storytold--gridcraft");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "storytold--gridcraft" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "storytold" AND file.name != "storytold--gridcraft"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/storytold--gridcraft");
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
> const me = dv.page("Repos/storytold--gridcraft");
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
> const me = dv.page("Repos/storytold--gridcraft");
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
> const me = dv.page("Repos/storytold--gridcraft");
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
> const me = dv.page("Repos/storytold--gridcraft");
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

> **2026-10-11** — 首次收錄
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

- [[2026-10-13|2026-10-13]] — 再次上榜，4.0k stars
- [[2026-10-12|2026-10-12]] — 再次上榜，3.2k stars
- [[2026-10-11|2026-10-11]] — 首次收錄，2.0k stars
