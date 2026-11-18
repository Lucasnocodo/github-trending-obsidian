---
repo: erkamyaman/rust-anything
url: https://github.com/erkamyaman/rust-anything
owner: erkamyaman
owner_type: User
language: Rust
license: MIT
description: "Rewrite your whole app in Rust, one piece at a time, checked against the original's recorded behavior at every step. CLIs, HTTP servers and libraries in TypeScript, Python, C, Go, Ruby and Java."
homepage: "https://www.npmjs.com/package/rust-anything"
stars: 1989
stars_per_day: 1989
forks: 144
open_issues: 44
created: 2026-11-16
pushed_at: 2026-11-18
first_seen: 2026-11-18
week: "2026-W47"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v1.4.0"
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
contributor_count: 4
engagement: "low"
issue_close_rate: 20
repo_size_kb: 5325
readme_length: 9824
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-18"
star_history: "2026-11-18:1989"
tags:
  - github
  - "category/other"
  - "lang/rust"
  - "topic/agent_skills"
  - "topic/claude_code"
  - "topic/cli"
  - "topic/code_migration"
  - "topic/codex"
aliases:
  - "rust-anything"
  - "erkamyaman/rust-anything"
---

# rust-anything

**2.0k** stars · **2.0k** stars/天 · 建立 1 天前 · Rust · MIT

```dataviewjs
const me = dv.page("Repos/erkamyaman--rust-anything");
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

`v1.4.0`

`agent-skills` `claude-code` `cli` `code-migration` `codex` `ffi` `golang` `java` `javascript` `mcp` `migration` `napi` `performance` `porting` `pyo3` `python` `rewrite` `ruby` `rust` `typescript`

> [!summary] 一句話摘要
> Rewrite your whole app in Rust, one piece at a time, checked against the original's recorded behavior at every step. CLIs, HTTP servers and libraries in TypeScript, Python, C, Go, Ruby and Java.

## 專案簡介

Rewrite your whole app in Rust, one piece at a time, checked against the original's recorded behavior at every step. CLIs, HTTP servers and libraries in TypeScript, Python, C, Go, Ruby and Java.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/erkamyaman--rust-anything");
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
> const me = dv.page("Repos/erkamyaman--rust-anything");
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
| Forks | 144 |
| Open Issues | 44 |
| Issue 解決率 | 20% (11 closed) |
| 最後推送 | 2026-11-18 |
| 建立日期 | 2026-11-16 |
| 官方網站 | [Link](https://www.npmjs.com/package/rust-anything) |
| Repo 大小 | 5.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/erkamyaman/rust-anything) |
| Topics | `agent-skills` `claude-code` `cli` `code-migration` `codex` `ffi` `golang` `java` |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `name` `version` `edition` `description` `license` `readme` `rust-version` `keywords` `categories` `repository` `homepage` `exclude` `anyhow` `clap` `ignore`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@erkamyaman](https://github.com/erkamyaman) | 111 |
> | [@rudycelekli](https://github.com/rudycelekli) | 26 |
> | [@elfenomenokim](https://github.com/elfenomenokim) | 4 |
> | [@lyufeng000](https://github.com/lyufeng000) | 2 |

**最新版本**：v1.4.0 (2026-11-18)

> [!info]- Release Notes
> Fixes from the first round of outside issues and pull requests, and the project's community files.
> 
> - Fix ([#31](https://github.com/erkamyaman/rust-anything/issues/31)): `bridge` takes a single source
>   file inside a unit (`rust-anything bridge . pkg/core.py`) and ports just that file, so a helper
>   script next to the real module can stay in the source language.
> - Fix ([#32](https://github.com/erkamyaman/rust-anything/issues/32)): a name defined twice in one
>   unit (a wrapper in `__init__.py` and the function it wraps in a submodule, say) made one
>   definition silently replace the other. `bridge` now refuses with both locations and how to
>   bridge the module you want on its own.
> - Fix ([#33](https://github.com/erkamyaman/rust-anything/issues/33)): Python command-line entry
>   points are kept in Python instead of offered as ports: functions the
>   `if __name__ == "__main__":` block (or a package's `__main__.py`) calls, and functions returning
>   an `argparse.ArgumentParser`. `app front-door` takes the command line over in a whole-app port.
> - Fix ([#34](https://github.com/erkamyaman/rust-anything/issues/34)): a Python parameter typed with a
>   dataclass now gets real instances in recorded cases, built from the dataclass's fields (defaulted
>   fields sometimes left out), instead of only `None` and shapes that can never fit.
> - From @elfenomenokim: optional dataclass parameters bind as `Option` so the generated crate
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-18 ~ 2026-11-18）
> **活躍天數** 1 天 · **最新 commit** docs: Türkçe right after English in the language bar

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#80](https://github.com/erkamyaman/rust-anything/issues/80) | record can stall when a generated integer trap makes the ori | 0 | 0 |
> | [#77](https://github.com/erkamyaman/rust-anything/issues/77) | Add native Windows integration coverage for migration workfl | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> rust-anything
> 
> by erKam Yaman
> 
> English · Türkçe · 简体中文 · 繁體中文 · Deutsch · Français · Русский · Українська · 日本語 · 한국어 · Azərbaycanca · Oʻzbekcha · Қазақша · Кыргызча · Türkmençe · Татарча · ئۇيغۇرچە
> 
> Rewrite your whole app in Rust. Keep it working the whole way.
> 
> CLIs, servers and libraries, piece by piece, checked against the original at every step.
> 
> Node.js and TypeScript · Python · C · Go · Ruby · Java · PHP and C# in preview
> 
>   
>   
>   
>   
>   
>   
>   
> 
> up to 20x faster · 38,251 recorded cases replayed · 0 mismatches · one command
> 
>   
> 
> **Rewrite your whole app in Rust, one piece at a time.** rust-anything records what your
> Node.js (TypeScript/JavaScript), Python, C, Go, Ruby or Java app does today, then checks every piece of the
> Rust rewrite against that recording before it moves on, until the app is pure Rust. CLIs, HTTP
> servers and libraries; your coding agent (or you) writes the Rust. It can only catch what the
> recording covers: see [What it can't catch](#what-it-cant-catch). Only need the slow part fast?
> Port just that, one hot path at a time:
> 
> | Real workload, same results as the original | Original | With rust-anything |
> | --- | ---: | ---: |
> | x18n's sidebar search, 50,000 keys (TypeScript, Node) | 10 ms per query | **0.5 ms: 20x faster** |
> | The same search in the browser (wasm, one thread) | 10 ms | **0.95 ms: 11.5x** |
> | `slugify` over 20,000 strings (Python) | 98 ms | **17x faster** |
> | `Shellwords.shellescape` from Ruby's standard library, 50,000 values | 88 ms | **11.8x faster** |
> | `Slugify` over 50,000 strings (Go) | 49 ms | **4x faster** |
> | `slugify` over 50,000 strings (Java) | 43 ms | **3x faster** |
> 
> Measured on 4 cores; every number has a benchmark in [`demo/`](./demo) that first checks the
> results are identical. Calling Rust once per small function is usually *slower* than a JIT;
> rust-anything finds the loop worth moving, and moves it.
> 
> > rust-anything is an independent project, not affiliated with or endorsed by the Rust Project
> > or the Rust Foundation. "Rust" is a trademark of the Rust Foundation.
> 
> 
> ## Quick start
> 
> Paste this into Claude Code, Codex, Cursor or Gemini CLI and let your agent install it:
> 
> ```text
> Install rust-anything: run `cargo install rust-anything`, then `rust-anything setup`.
> Tell me when to restart you.
> ```
> 
> Or yourself:
> 
> ```sh
> cargo install rust-anything   # from crates.io
> rust-anything setup           # registers it with Claude Code, Codex, Cursor and Gemini CLI
> ```
> 
> No Rust toolchain yet? Prebuilt binaries for macOS, Linux and Windows are attached to each
> [GitHub release](https://github.com/erkamyaman/rust-anything/releases), and for JavaScript
> projects `npm install -g rust-anything` installs the same binary.
> 
> In Claude Code you can also install it as a plugin (the MCP server and the skill; the CLI above
> must be on your `PATH`):
> 
> ```text
> /plugin install rust-anything --marketplace erkamyaman/rust-anything
> ```
> 
> `setup` adds the MCP server to each agent it finds and installs the workflow skill where the agent
> reads skills. It keeps your other settings, is safe to run again, and `--remove` undoes it.
> Then ask your agent, for example:
> 
> - *"Rewrite this CLI in Rust with rust-anything, end to end, and prove it behaves the same."*
> - *"This search feels slow. Profile it with rust-anything and move the hot loop to Rust."*
> - *"Plan a migration of `src/parser/` to Rust with rust-anything; port the first unit and prove it."*
> - *"Bench the Rust port in `rust/text-rs` against the original and tell me whether to ship it."*
> 
> 
> ## Install
> 
> ```sh
> cargo install --path .
> ```
> 
> `record`, `diff` and `bench` run the original in its own runtime: Node 22.6+ for TS (it runs `.ts`
> sources directly), Python 3.9+ for Python and C (ctypes), Go 1.21+, Ruby 3+, JDK 17+
> (`javac` and `java`). C also needs a C compiler. wasm bridges also need `rustup target add wasm32-unknown-unknown` and
> `cargo install wasm-bindgen-cli --version  --locked`; `build` names
> the exact version.
> 
> For agents, `rust-anything setup` registers everything (see Quick start). To add the MCP server to
> one project by hand instead (`.mcp.json`):
> 
> ```json
> { "mcpServers": { "rust-anything": { "command": "rust-anything", "args": ["mcp"] } } }
> ```
> 
> 
> ## Example: a real module from x18n
> 
> `packages/core/src/fuzzy.ts` from [x18n](https://github.com/x18n-dev/x18n), ported both ways in
> [`demo/`](./demo):
> 
> ```sh
> rust-anything analyze ../x18n                                      # fuzzy.ts: ready, wasm-bindgen (core runs in browsers)
> rust-anything bridge ../x18n packages/core/src/fuzzy.ts --out demo/fuzzy-rs
> rust-anything record demo/fuzzy-rs --count 2000
> 
> ## What it can't catch
> 
> Passing means the Rust matches every case that was recorded, nothing more. What bites rewrites
> usually lives outside the recording, so know where the edges are:
> 
> - **Inputs nobody recorded.** The generated cases, the traps and your own `--inputs` are the
>   ceiling. Add real inputs (production samples, bug reports, the original's test fixtures); the
>   user input that breaks prod is rarely one a generator thinks of.
> - **Regexes.** The `regex` crate has no lookaround or backreferences, and even a pattern that
>   compiles can treat `\w`, `\b`, `\d` and case-insensitive matching on non-ASCII text differently
>   from JS, Python or Java. Swapping in `fancy-regex` or rewriting the pattern can pass every
>   recorded case and still differ on a Turkish dotless `ı` or a zero-width joiner. `record` adds
>   regex traps (those, the Kelvin sign, long s, Arabic-Indic digits, line separators, final sigma)
>   to every function in a file that uses regexes, but fuzz your real patterns against real text too.
> - **What changes between runs.** `record` runs the original twice and sorts out what differed:
>   changed values (times, ids) become wildcards; the same lines in another order (hash maps,
>   concurrency) are compared in any order, so a port still has to produce exactly those lines; a
>   different number of lines becomes `...`, which matches anything. `record` lists each kind:
>   look at every one, since a hash-order or concurrency difference is exactly what can change for
>   real in a port.
> - **Floats.** Number-to-text formatting differs between languages (`1e21`, `-0`, digit counts).
>   The traps include those values, and they must match exactly; `--float-tolerance` forgives
>   rounding only, never formatting.
> - **Anything not in the output.** Timing, memory, concurrency under load, and side effects other
>   than stdout, stderr, exit codes, written files and HTTP responses (network calls, databases,
>   signals) are not compared.
> - **Other platforms.** A recording proves behavior on the machine that ran it. C whose results
>   depend on type sizes, endianness or the compiler can behave differently on the target; `analyze`
>   keeps hardware-facing C in C for that reason.
> 
> 
> ### Works with
> 
> | Agent | `rust-anything setup` adds |
> | --- | --- |
> | Claude Code | MCP server in `~/.claude.json`, skill in `~/.claude/skills/` |
> | Codex | MCP server in `~/.codex/config.toml`, skill in `~/.codex/skills/` |
> | Cursor | MCP server in `~/.cursor/mcp.json` |
> | Gemini CLI | MCP server in `~/.gemini/settings.json` |
> | Any other MCP client | add `rust-anything mcp` as a stdio server by hand (see [Install](#install)) |
> 
> Before changing a file that exists, `setup` saves a copy beside it (`.rust-anything.bak`).
> 
> Or run the steps yourself:
> 
>   
> 
> ```sh
> rust-anything profile . -- node bench.mjs              # what is hot, and who calls it
> rust-anything bridge . src/fuzzy.ts --batch fuzzyScore:text
> 
> # write src/port.rs (or let your agent), then:
> rust-anything record rust/fuzzy-rs && rust-anything build rust/fuzzy-rs
> rust-anything diff rust/fuzzy-rs                       # every recorded case must match
> rust-anything bench rust/fuzzy-rs                      # faster? the verdict says
> rust-anything gate rust/fuzzy-rs                       # done means this passes
> ```
> 
> rust-anything does not translate code: your coding agent (Claude Code, Codex, Cursor, ...) or you write
> t

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/erkamyaman/rust-anything) · [官方網站](https://www.npmjs.com/package/rust-anything)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "erkamyaman--rust-anything"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "erkamyaman--rust-anything" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W47" AND file.name != "erkamyaman--rust-anything"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/erkamyaman--rust-anything");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "erkamyaman--rust-anything" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "erkamyaman" AND file.name != "erkamyaman--rust-anything"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/erkamyaman--rust-anything");
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
> const me = dv.page("Repos/erkamyaman--rust-anything");
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
> const me = dv.page("Repos/erkamyaman--rust-anything");
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
> const me = dv.page("Repos/erkamyaman--rust-anything");
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
> const me = dv.page("Repos/erkamyaman--rust-anything");
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

- [[2026-11-18|2026-11-18]] — 首次收錄，2.0k stars
