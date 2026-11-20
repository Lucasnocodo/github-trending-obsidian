---
repo: joshpuckett/allo
url: https://github.com/joshpuckett/allo
owner: joshpuckett
owner_type: User
language: Python
license: OFL-1.1
description: "Allo is your friendly neighborhood typeface, free and open source"
homepage: "https://allo.joshpuckett.me/"
stars: 1173
stars_per_day: 293
forks: 32
open_issues: 4
created: 2026-11-15
pushed_at: 2026-11-18
first_seen: 2026-11-20
week: "2026-W47"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: "v1.0.3"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-20
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-23"
contributor_count: 1
engagement: "low"
issue_close_rate: 64
repo_size_kb: 46199
readme_length: 6088
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-11-20"
star_history: "2026-11-20:1173"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "allo"
  - "joshpuckett/allo"
---

# allo

**1.2k** stars · **293** stars/天 · 建立 4 天前 · Python · OFL-1.1

```dataviewjs
const me = dv.page("Repos/joshpuckett--allo");
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

`個人專案` `v1.0.3`

> [!summary] 一句話摘要
> Allo is your friendly neighborhood typeface, free and open source

## 專案簡介

Allo is your friendly neighborhood typeface, free and open source

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/joshpuckett--allo");
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
> const me = dv.page("Repos/joshpuckett--allo");
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
| Forks | 32 |
| Open Issues | 4 |
| Issue 解決率 | 64% (7 closed) |
| 最後推送 | 2026-11-18 |
| 建立日期 | 2026-11-15 |
| 官方網站 | [Link](https://allo.joshpuckett.me/) |
| Repo 大小 | 45.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/joshpuckett/allo) |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `afdko` `attrs` `booleanOperations` `brotli` `cffsubr` `defcon` `fontMath` `fontParts` `fontPens` `fonttools` `lxml` `MutatorMath` `pyclipper` `tqdm` `ufo2ft`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 83
>     "CSS" : 17
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@joshpuckett](https://github.com/joshpuckett) | 6 |

**最新版本**：v1.0.3 — Allo 1.0.3 (2026-11-18)

> [!info]- Release Notes
> Bug fixes.

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-15 ~ 2026-11-18）
> **活躍天數** 3 天 · **最新 commit** Allo 1.0.3: stem caps & kerning fixes

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#12](https://github.com/joshpuckett/allo/issues/12) | Cyrillic support | 13 | 3 |
> | [#1](https://github.com/joshpuckett/allo/issues/1) | Feature Request: Monospace Variant for Coding | 5 | 3 |
> | [#3](https://github.com/joshpuckett/allo/issues/3) | Typography & Glyph Refinements | 1 | 0 |
> | [#13](https://github.com/joshpuckett/allo/issues/13) | Let the typed arrows be turned off on their own | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Allo
> 
> Allo is your friendly neighborhood typeface. It’s variable in weight and roundness, with proportions and curves
> designed to feel warm without being too cute and clear without being too cold. It’s a perfect companion out of the
> box, and three variable axes and plenty of alternates let you tune its personality to exactly what you need.
> 
> Allo is optimized for screens and interfaces, with an optical size that adjusts automatically between text and
> display. And it’s packed with big little details: tabular figures, fractions, punctuation that lifts beside capitals,
> arrows that appear when you type them, a host of alternates and symbols, as well as a true oblique in every weight.
> 
> ### [Type specimen at allo.joshpuckett.me →](https://allo.joshpuckett.me)
> 
> ## Download
> 
> Get `Allo-1.0.3.zip` from the [latest release](https://github.com/joshpuckett/allo/releases/latest):
> 
> | Folder | Contents |
> |---|---|
> | `fonts/otf` | 18 static fonts, Thin to Black, each with an Oblique |
> | `fonts/variable` | `AlloVariable.ttf`: all optical sizes, weights and roundnesses |
> | `fonts/webfonts` | The same fonts as WOFF2, plus `AlloVariableFriendly.woff2` (roundness fixed at 50, about half the size) |
> 
> The static and variable fonts are separate families, **Allo** and **Allo Variable**, so both can be installed.
> 
> ## Web
> 
> From npm:
> 
> ```sh
> npm install allo-font
> ```
> 
> ```js
> import "allo-font";            // the full variable font, and the obliques
> // import "allo-font/friendly"; // or: roundness fixed at 50, about half the size
> ```
> 
> ```css
> body {
>   font-family: "Allo", system-ui, sans-serif;
> }
> ```
> 
> Or host the files yourself, from `fonts/webfonts`:
> 
> ```css
> @font-face {
>   font-family: "Allo";
>   src: url("AlloVariable.woff2") format("woff2");
>   font-weight: 100 900;
>   font-style: normal;
>   font-display: swap;
> }
> 
> body {
>   font-family: "Allo", system-ui, sans-serif;
> }
> ```
> 
> - **Optical size** follows the font size (`font-optical-sizing: auto`, the CSS default). Set it to `none` to keep the
>   Text design at every size, or pick one with `font-variation-settings: "opsz" 32`.
> - **Roundness** has no CSS property: use `font-variation-settings: "ROND" 0` (sharp) to `"ROND" 100` (round).
>   Default 50.
> - **Smaller file:** `AlloVariableFriendly.woff2` has roundness fixed at 50; `"ROND"` has no effect. Its family name
>   is "Allo Variable Friendly".
> - **Obliques:** the npm CSS includes them. Self-hosting, add an `@font-face` with `font-style: italic` and the matching `font-weight` for each oblique WOFF2
>   you use (`Allo-Oblique.woff2`, `Allo-BoldOblique.woff2`, …).
> 
> ## Axes
> 
> | Axis | Tag | Range | Default | Named values |
> |---|---|---|---|---|
> | Optical size | `opsz` | 9–32 | 14 | 9 Small, 14 Text, 32 Display |
> | Weight | `wght` | 100–900 | 400 | Thin 100 to Black 900 |
> | Roundness | `ROND` | 0–100 | 50 | 0 Sharp, 50 Friendly, 100 Round |
> 
> Display (32) is tighter, with stronger optical corrections. Below 14 only the spacing changes. The static fonts are
> the variable font at opsz 14, ROND 50.
> 
> ## OpenType features
> 
> | Feature | Effect |
> |---|---|
> | `ss01` Single-story a | ɑ-shaped a |
> | `ss02` Disambiguation | Serifed I, tailed l, footed 1, slashed zero |
> | `ss03` Open figures | Open 4, 6 and 9 |
> | `cv01`–`cv04` | Footed 1, slashed zero, tailed l, serifed I, separately |
> | `cv05` | Dotted zero |
> | `tnum` | Tabular figures |
> | `zero` | Slashed zero |
> | `frac` | Fractions: 1/2 → ½ |
> | `sups`, `subs`, `numr`, `dnom` | Superscript, subscript, numerator, denominator |
> | `case` | Punctuation and symbols raised for capitals |
> | `liga` | tt, ff, tf, ft with a shared crossbar |
> | `calt` | `->` → →; brackets, signs, ¿ and ¡ raised beside capitals and figures |
> 
> Browsers turn ligatures off when letter-spacing is set. For code, use `font-variant-ligatures: no-contextual`.
> 
> ## Build
> 
> Python 3.9 or newer:
> 
> ```sh
> python3 -m venv .venv
> .venv/bin/python -m pip install -r requirements.txt
> .venv/bin/python build.py
> ```
> 
> Writes `fonts/` (variable TTF and WOFF2; 18 static OTFs and WOFF2s, autohinted with AFDKO), `fonts/SHA256SUMS` and
> `Allo-1.0.3.zip`. Dependencies are pinned and `release.json` fixes the timestamp, so builds are reproducible.
> 
> ## Sources
> 
> `sources/Allo.designspace` (designspace 5, UFO) has 48 masters: opsz 9, 14, 20, 32 × wght 100, 400, 580, 900 ×
> ROND 0, 50, 100, plus eight sparse layers at ROND 10 and 30 for heavy joins. The opsz 9 masters are the opsz 14
> masters with wider spacing (`release.json` "smallShift"). Corners are rounded in the outlines; the build compiles
> the sources as they are. Keep points compatible across masters.
> 
> `sources/static` holds the 18 static fonts' sources: cut from the variable masters at opsz 14, ROND 50, then edited
> separately. The obliques are separate drawings, not a slant axis.
> 
> ## Contributing
> 
> Found a problem, or missing a character? Please [open an issue](https://github.com/joshpuckett/allo/issues); a
> screenshot and the text you typed help a lot.
> 
> Pull requests that change the masters or the font files aren't accepted for now. Every change to a letter gets
> reviewed by eye across all the weights and axes, and that's hard to do well for work that arrives from outside. If
> you have a larger idea, such as a new script, open an issue first so we can talk about it.
> 
> You're free to modify Allo and ship your own version under the [license](OFL.txt).
> 
> ## License
> 
> [SIL Open Font License 1.1](OFL.txt): free to use, modify and redistribute, including commercially. The fonts can't
> be sold by themselves.
> 
> ## Credit
> 
> Allo began from [Inter](https://github.com/rsms/inter) 4.2, which provided an incredible base to work from. Every
> one of Allo's glyphs has been redrawn, with extensive work on spacing, kerning, features and axes, all tuned for the
> friendly character that makes Allo its own. I owe a huge debt of gratitude to my friend [Rasmus Andersson](https://rsms.me) for creating
> Inter and releasing it under an open license; without it, Allo would not exist.
> 
> Allo also pays homage to Honk Sans by [Seb McLauchlan](https://www.sebmclauchlan.com) and aims to bring some of that
> same warmth and fun to everyone.

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/joshpuckett/allo) · [官方網站](https://allo.joshpuckett.me/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "joshpuckett--allo"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "joshpuckett--allo" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W47" AND file.name != "joshpuckett--allo"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/joshpuckett--allo");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "joshpuckett--allo" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "joshpuckett" AND file.name != "joshpuckett--allo"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/joshpuckett--allo");
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
> const me = dv.page("Repos/joshpuckett--allo");
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
> const me = dv.page("Repos/joshpuckett--allo");
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
> const me = dv.page("Repos/joshpuckett--allo");
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
> const me = dv.page("Repos/joshpuckett--allo");
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

> **2026-11-20** — 首次收錄
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

- [[2026-11-20|2026-11-20]] — 首次收錄，1.2k stars
