---
repo: firecrawl/anydoc
url: https://github.com/firecrawl/anydoc
owner: firecrawl
owner_type: Organization
language: Rust
license: MIT
description: "Convert Word, PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV, and PDF to clean Markdown. Built in Rust, with Node.js and Python bindings."
homepage: ""
stars: 11134
stars_per_day: 2784
forks: 516
open_issues: 44
created: 2026-08-03
pushed_at: 2026-08-07
first_seen: 2026-08-05
week: "2026-W32"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: "v0.1.3"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-05
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-08-11"
contributor_count: 4
engagement: "low"
issue_close_rate: 9
repo_size_kb: 813
readme_length: 9749
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-08-05"
star_history: "2026-08-05:1867,2026-08-06:5444,2026-08-07:8832,2026-08-08:11134"
tags:
  - github
  - "category/other"
  - "lang/rust"
  - org
aliases:
  - "anydoc"
  - "firecrawl/anydoc"
---

# anydoc

**1.9k** stars · **1.9k** stars/天 · 建立 1 天前 · Rust · MIT

```dataviewjs
const me = dv.page("Repos/firecrawl--anydoc");
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

`ORG` `v0.1.3`

> [!summary] 一句話摘要
> Convert Word, PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV, and PDF to clean Markdown. Built in Rust, with Node.js and Python bindings.

## 專案簡介

Convert Word, PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV, and PDF to clean Markdown. Built in Rust, with Node.js and Python bindings.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/firecrawl--anydoc");
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
> const me = dv.page("Repos/firecrawl--anydoc");
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
| Forks | 83 |
| Open Issues | 10 |
| Issue 解決率 | 9% (1 closed) |
| 最後推送 | 2026-08-04 |
| 建立日期 | 2026-08-03 |
| Repo 大小 | 813 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/firecrawl/anydoc) |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `members` `exclude` `name` `version` `edition` `rust-version` `description` `license` `repository` `readme` `keywords` `categories` `include` `insta` `sha2`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 78
>     "Python" : 17
>     "JavaScript" : 5
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tomsideguide](https://github.com/tomsideguide) | 84 |
> | [@nickscamara](https://github.com/nickscamara) | 3 |
> | [@Andsu-dev](https://github.com/Andsu-dev) | 1 |
> | [@ericciarla](https://github.com/ericciarla) | 1 |

**最新版本**：v0.1.3 (2026-08-04)

> [!info]- Release Notes
> **Full Changelog**: https://github.com/firecrawl/anydoc/compare/v0.1.2...v0.1.3

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-04 ~ 2026-08-04）
> **活躍天數** 1 天 · **最新 commit** fix(build): drop zip's C-backed zstd codec, unblock wasm32 builds

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/firecrawl/anydoc/issues/9) | XLSX conversion silently treats hidden rows and columns as v | 1 | 0 |
> | [#12](https://github.com/firecrawl/anydoc/issues/12) | Fillable forms lose their field layer — expose form fields i | 0 | 0 |
> | [#11](https://github.com/firecrawl/anydoc/issues/11) | Docker support please | 0 | 0 |
> | [#10](https://github.com/firecrawl/anydoc/issues/10) | Expose worksheet identity and source coordinates in to_docum | 0 | 0 |
> | [#8](https://github.com/firecrawl/anydoc/issues/8) | XLSX merged-cell spans are clipped to the populated range | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # anydoc
> 
> [](https://crates.io/crates/anydoc)
> [](https://www.npmjs.com/package/@firecrawl/anydoc)
> [](https://pypi.org/project/firecrawl-anydoc/)
> [](LICENSE)
> [](https://skills.sh/firecrawl/anydoc)
> 
> Fast Rust library that converts documents (Word, PowerPoint, Excel, OpenDocument, RTF, EPUB, CSV, and PDF) into clean GitHub-Flavored Markdown. Includes bindings for [Node.js](node/README.md) and [Python](python/README.md).
> 
> Built by [Firecrawl](https://firecrawl.dev) to turn any office document into LLM-ready Markdown in single-digit milliseconds, with one consistent output no matter which format goes in. It powers [Firecrawl Parse](https://firecrawl.dev/parse), so if you'd rather not run it yourself, the hosted API gives you the same conversion plus our OCR models for the scanned pages anydoc can't read on its own.
> 
> 
> ## Quick start
> 
> 
> ## Features
> 
> - **One output for every format.** Each format parses into a shared document model and renders through a single Markdown serializer, so escaping, tables, heading anchors, and footnotes behave identically whether the input was a `.doc` from 2003 or a `.pptx` from yesterday.
> - **Full document structure.** Headings with anchors, bold/italic/strikethrough, inline code and code blocks, links and internal cross-references, bulleted/numbered/nested/task lists with the source's own numbering, tables with merged cells and header rows, block quotes, footnotes and endnotes, and speaker notes.
> - **Embedded assets.** Images and embedded objects render as their alt text in the Markdown, and the raw bytes stay available on the document model, tagged with their media type. Images with an external URL become ordinary Markdown images.
> - **Content-based format detection.** The format is read from the bytes themselves (PDF header, RTF open group, OLE stream names, ZIP package mimetype), so mislabeled files still convert correctly.
> - **Fast.** Pure Rust, no ML models, no external services. Median conversion time is under 5ms per document.
> - **Bindings that stay out of the way.** Node.js conversion runs on the libuv thread pool and never blocks the event loop; Python releases the GIL so other threads keep running. TypeScript types and Python stubs ship with the packages.
> - **PDF support built in.** Text-based PDFs convert locally through [pdf-inspector](https://github.com/firecrawl/pdf-inspector), no OCR service required.
> - **Agent ready.** Ships as an [Agent Skill](#agent-skill): one `npx skills add firecrawl/anydoc` and any agent can read office documents.
> 
> 
> ## Benchmark
> 
> anydoc is measured against six other converters on 100 real-world documents spanning fourteen formats. Scores run from 0 to 100, higher is better; speed is the median time to convert one document.
> 
> | tool         | formats   | median ms | docs judged | score  | completeness | structure | formatting | cleanliness |
> | ------------ | --------- | --------- | ----------- | ------ | ------------ | --------- | ---------- | ----------- |
> | anydoc       | **14/14** | **4.7**   | 94          | **80** | **88**       | **78**    | **77**     | **79**      |
> | libreoffice  | 12/14     | 1129.5    | 87          | 40     | 59           | 43        | 43         | 24          |
> | unstructured | 8/14      | 572.9     | 58          | 65     | 76           | 62        | 52         | 67          |
> | markitdown   | 6/14      | 134.8     | 33          | 65     | 80           | 67        | 61         | 53          |
> | pandoc       | 5/14      | 102.1     | 34          | 57     | 75           | 57        | 58         | 39          |
> | docling      | 4/14      | 513.6     | 21          | 57     | 63           | 59        | 57         | 52          |
> | mammoth      | 1/14      | 52.5      | 8           | 70     | 85           | 68        | 74         | 55          |
> 
> Per format, like for like:
> 
> | format | anydoc | libreoffice | unstructured | markitdown | pandoc | docling | mammoth |
> | ------ | ------ | ----------- | ------------ | ---------- | ------ | ------- | ------- |
> | doc    | **88** | 58          | 68           | -          | -      | -       | -       |
> | docm   | **82** | 49          | -            | -          | -      | -       | -       |
> | docx   | **86** | 53          | 56           | 72         | 68     | 68      | 70      |
> | epub   | 74     | -           | 74           | **77**     | 53     | -       | -       |
> | odp    | **87** | 22          | -            | -          | -      | -       | -       |
> | ods    | **82** | 42          | -            | -          | -      | -       | -       |
> | odt    | **80** | 52          | 70           | -          | 61     | -       | -       |
> | ppt    | **80** | 25          | -            | -          | -      | -       | -       |
> | pptx   | **76** | 22          | -            | 59         | -      | 50      | -       |
> | rtf    | **89** | 58          | 48           | -          | 46     | -       | -       |
> | xls    | **77** | 40          | 68           | 64         | -      | -       | -       |
> | xlsm   | **70** | 30          | -            | -          | -      | -       | -       |
> | xlsx   | **70** | 31          | 69           | 55         | -      | 51      | -       |
> 
> **How quality was scored:** an LLM judge (Claude Sonnet 5) compares two tools' outputs blind against ground truth: the document's first six pages, rendered to images by LibreOffice. Each output is scored on completeness, structure, formatting, and cleanliness. Every pair is judged twice with the outputs swapped to cancel position bias, for 479 verdicts in total. Each tool's `score` averages its per-format scores over the formats it supports, so a corpus heavy in one format can't skew it. It also means each row averages a different set of formats (mammoth's 70 is docx alone, while anydoc's 80 spans all fourteen), so the per-format table is the fair comparison.
> 
> Speed is one warm conversion per document on a Ryzen 9 9950X3D (Windows 11, 64 GB DDR5-6400). anydoc and the Python libraries are timed with process spawn excluded; the CLI tools include it, since that is how they are used. The harness lives in [`bench/`](bench/README.md); the corpus is not redistributable and is not in the repo.
> 
> **Best fit:** pipelines that receive a mixed bag of office documents and need one consistent, structured Markdown output. In this comparison, anydoc was the only tool to cover all fourteen formats, scored highest on every judged format except EPUB, and converted documents an order of magnitude faster than the next-fastest tool.
> 
> 
> ### Agent skill
> 
> anydoc ships as an [Agent Skill](https://agentskills.io), so your agent can read any document it runs into:
> 
> ```bash
> npx skills add firecrawl/anydoc
> ```
> 
> The [skill](skills/convert-documents-to-markdown/SKILL.md) teaches the agent to convert documents with the anydoc CLI. Works with [Claude Code](https://claude.ai/code), [Codex](https://openai.com/codex/), [Cursor](https://cursor.com), [OpenCode](https://opencode.ai), and any other [compatible agent](https://agentskills.io/clients).
> 
> 
> ### CLI
> 
> ```bash
> npx @firecrawl/anydoc report.docx               # Markdown to stdout
> npx @firecrawl/anydoc slides.pptx -o slides.md  # or to a file
> npx @firecrawl/anydoc - --format csv  Full API reference: [node/README.md](node/README.md)
> 
> 
> ### Python
> 
> ```bash
> pip install firecrawl-anydoc
> ```
> 
> ```python
> import anydoc
> 
> 
> # From a file path:
> markdown = anydoc.to_markdown("report.docx")
> 
> 
> # From bytes, with the format detected from the content:
> markdown = anydoc.to_markdown_bytes(data)
> 
> 
> # Or name it, which signature-less formats (CSV) need:
> markdown = anydoc.to_markdown_bytes(data, "csv")
> 
> 
> # Or stop at the document model, which also carries embedded assets:
> document = anydoc.to_document(data)
> ```
> 
> > Full API reference: [python/README.md](python/README.md)
> 
> 
> ### Rust
> 
> ```bash
> cargo add anydoc
> ```
> 
> ```rust
> // From a file path:
> let markdown = anydoc::to_markdown("report.docx")?;
> 
> // From bytes, with the format detected from the content:
> let markdown = anydoc:

## 延伸閱讀

相關專案：[[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]] · [[FareedKhan-dev--kimi-k3-in-c|FareedKhan-dev/kimi-k3-in-c]] · [[QwenAudio--qwen-audio-agent|QwenAudio/qwen-audio-agent]] · [[WilonityDev--WilonityLoader|WilonityDev/WilonityLoader]] · [[WilonityXYZ--Wilonity|WilonityXYZ/Wilonity]]

[GitHub](https://github.com/firecrawl/anydoc)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "firecrawl--anydoc"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "firecrawl--anydoc" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W32" AND file.name != "firecrawl--anydoc"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/firecrawl--anydoc");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "firecrawl--anydoc" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "firecrawl" AND file.name != "firecrawl--anydoc"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/firecrawl--anydoc");
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
> const me = dv.page("Repos/firecrawl--anydoc");
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
> const me = dv.page("Repos/firecrawl--anydoc");
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
> const me = dv.page("Repos/firecrawl--anydoc");
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
> const me = dv.page("Repos/firecrawl--anydoc");
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

> **2026-08-05** — 首次收錄
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

- [[2026-08-08|2026-08-08]] — 再次上榜，11.1k stars
- [[2026-08-07|2026-08-07]] — 再次上榜，8.8k stars
- [[2026-08-06|2026-08-06]] — 再次上榜，5.4k stars
- [[2026-08-05|2026-08-05]] — 首次收錄，1.9k stars
