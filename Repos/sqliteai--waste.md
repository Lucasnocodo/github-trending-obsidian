---
repo: sqliteai/waste
url: https://github.com/sqliteai/waste
owner: sqliteai
owner_type: Organization
language: C
license: Apache-2.0
description: "Run the full 2.78-trillion-parameter Kimi K3 model beyond available RAM by streaming activated weights directly from NVMe. A dependency-free, embeddable C inference engine."
homepage: ""
stars: 705
stars_per_day: 176
forks: 68
open_issues: 2
created: 2026-07-28
pushed_at: 2026-08-01
first_seen: 2026-08-02
week: "2026-W32"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: "v0.6.2"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-02
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-08-09"
contributor_count: 2
engagement: "low"
issue_close_rate: 75
repo_size_kb: 3871
readme_length: 9496
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-08-02"
star_history: "2026-08-02:705"
tags:
  - github
  - "category/other"
  - "lang/c"
  - org
aliases:
  - "waste"
  - "sqliteai/waste"
---

# waste

**705** stars · **176** stars/天 · 建立 4 天前 · C · Apache-2.0

```dataviewjs
const me = dv.page("Repos/sqliteai--waste");
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

`ORG` `v0.6.2`

> [!summary] 一句話摘要
> Run the full 2.78-trillion-parameter Kimi K3 model beyond available RAM by streaming activated weights directly from NVMe. A dependency-free, embeddable C inference engine.

## 專案簡介

Run the full 2.78-trillion-parameter Kimi K3 model beyond available RAM by streaming activated weights directly from NVMe. A dependency-free, embeddable C inference engine.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/sqliteai--waste");
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
> const me = dv.page("Repos/sqliteai--waste");
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
| Forks | 68 |
| Open Issues | 2 |
| Issue 解決率 | 75% (6 closed) |
| 最後推送 | 2026-08-01 |
| 建立日期 | 2026-07-28 |
| Repo 大小 | 3.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/sqliteai/waste) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C" : 47
>     "Python" : 45
>     "Shell" : 6
>     "Makefile" : 1
>     "Objective-C" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@marcobambini](https://github.com/marcobambini) | 138 |
> | [@isenbek](https://github.com/isenbek) | 3 |

**最新版本**：v0.6.2 (2026-08-01)

> [!info]- Release Notes
> ### Fixed
> 
> - **`waste info` and `waste run` crashed on K3 on every x86 build**
>   ([#10](https://github.com/sqliteai/waste/issues/10)). The tensors the
>   loader skips — the vision tower, and anything outside `tensor_prefix` —
>   kept `group` at 0, and the row-scratch sizing divided by it. The
>   architecture decided what that meant: arm64's `sdiv` answers 0 and the
>   run continues, x86's `idiv` raises `#DE`. `waste plan` was unaffected
>   because it does not load. §37.
> - **`WASTE_Q8=0` could not load a 4-bit trunk**
>   ([#6](https://github.com/sqliteai/waste/issues/6)) — that is, any
>   container a default `tools/convert.py` run produces. The dequantizer
>   read one byte per weight, true of Q8G alone, while catching every
>   quantized format. It now decodes through `waste_deq_row`, the one place
>   that knows all three widths. The same lines also predated `waste_f16`'s
>   subnormal fix and flushed group scales below 6.1e-05 to zero.
> - **`embed_tokens` stays on disk under `WASTE_Q8=0`**, as it does
>   otherwise: 7.93 → 6.52 GiB of peak RSS on Kimi-Linear, identical logits.
>   The f32-equivalence check now differs from the default path in the
>   storage width alone, which is what it claims to compare.
> 
> ### Added
> 
> - **Router lookahead in the decode path.** At the end of a MoE layer, once
>   its reads are consumed and the disk is about to idle through the next
>   layer's attention, layer L+1's router runs on layer L's hidden state and
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-01 ~ 2026-08-01）
> **活躍天數** 1 天 · **最新 commit** Connect the engine's traces to the cache simulator, and fix what it modelled

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#11](https://github.com/sqliteai/waste/issues/11) | CUDA backend: what would have to be true for it to pay `enhancement` `help wanted` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # WASTE — Weight-Aware Streaming Tensor Engine
> 
> **Kimi K3 — 2.78 trillion parameters — running on a consumer laptop.**
> 
> ```
> $ waste run ~/models/k3.waste 'What is the capital of Italy?'
> waste: no --budget, using 46.24 GB of 64.00 GB (expert cache 17.56 GB)
> The capital of Italy is **Rome**.
> [16 tokens, 25.78 s, 0.62 tok/s | experts 9038 hit / 14514 miss = 38%]
> ```
> 
> WASTE is an embeddable inference engine written in C, with no third-party runtime dependencies. It keeps the model trunk in memory, streams selected experts directly from disk, and uses the remaining RAM as a bounded expert cache.
> 
> Its current proof point is the complete open-weights Kimi K3 model: 2.78 trillion parameters, converted into a 982 GiB container and running on a 64 GB MacBook Pro at 0.45–0.62 tokens per second. **This is not a distilled, pruned, or reduced variant**.
> 
> | Model               | Container | Minimum RAM | Tested speed    |
> | ------------------- | --------- | ----------- | --------------- |
> | **Kimi K3 2.78T**   | 982 GiB   | 29.05 GiB   | 0.45–0.62 tok/s |
> | **Kimi-Linear 48B** | 19 GiB    | 1.87 GiB    | 10.7 tok/s      |
> 
> WASTE was written for that one model and that one constraint: **K3 does
> not fit in the RAM of current mainstream consumer systems.** It is 1.42 TB
> as published and 982 GB after conversion. But a mixture of experts
> activates about 4% of itself per token, so almost all of that weight is
> idle at any instant — and idle weight does not need to be in memory, it
> needs to be *reachable in time*. WASTE keeps it on disk in a layout where
> one expert costs exactly one read, streams what each token actually
> needs, and spends every remaining byte of RAM on the part that repeats.
> 
> 
> ## What it is
> 
> - **Self-contained.** One `libwaste.a`, one `waste` binary, nothing at run
>   time beyond libc and pthreads.
> - **Zero dependencies.** No BLAS, no ONNX, no Python in the inference
>   path, nothing to install. The Python under `tools/` converts models and
>   validates the engine; it never runs alongside it.
> - **Fully embeddable.** Twenty-six public functions in
>   [src/waste.h](src/waste.h): open a model under a RAM ceiling, generate,
>   save the session, close. The CLI is a client of that API and touches
>   nothing private — if the CLI can do it, so can an embedding host.
> 
> ```c
> waste_cfg cfg;
> waste_cfg_init(&cfg);
> cfg.ram_budget_bytes = 46ULL  N   */
> waste_generate(ctx, ids, n_ids, &params, cb, u);   /* consumes the queue */
> ```
> 
> The tower's shape, the patch budget and the pixel normalization live in
> `vision.json`, which the converter writes from the release's own nested
> `vision_config` and from `preprocessor_config.json`. K3 normalizes to
> [-1, 1] with mean = std = 0.5.
> 
> That last sentence was wrong here for a day, and the way it was wrong is
> worth keeping. This section used to say **K3 ships no preprocessor
> config**, so the normalization was "the CLIP convention this lineage of
> towers uses rather than a value read out of the release" — an assumption,
> labelled as one. The release does ship the file; the downloader fetched a
> hardcoded list of filenames and never asked the repo what it contained.
> The tower still matched its oracle at 2.3e-06 throughout, because the
> oracle is fed random pixels and never touches the normalization. An
> honest caveat is not a substitute for reading the file.
> 
> 
> ## Why the name
> 
> Every token answered by a cloud service is paid for twice: once on the
> invoice, and once in the electricity of a datacenter running a model that
> would fit — barely, awkwardly, but genuinely — on hardware already sitting
> on a desk. WASTE means to be the first concrete step toward ending that
> waste of tokens. The acronym came second.
> 
> 
> ## Where this stands
> 
> The engine is correct: every layer is validated against a PyTorch
> reference, the final logits agree to 3.6e-06, and the vision tower matches
> its own oracle to 2.3e-06. It is also slow — half a token per second,
> twenty-six seconds for the sentence above.
> 
> Both of those matter, and the second one should not be read as a
> disclaimer. We are not aware of another published demonstration of a
> model this size streaming from disk on a consumer machine: we found none
> for trillion-scale NVMe streaming, and the best-documented 671B-class
> recipes assume a server with a terabyte of DDR5. That is a report of what
> our search turned up rather than a survey — this repository carries no
> bibliography and no comparison table, so read it as an invitation to send
> a counter-example, not as a result. The interesting part is not the
> speed, it is that the whole thing is in the reachable range on a single
> consumer machine — and that from here the question is engineering rather
> than feasibility.
> 
> Where the levers were is not where they are. The two that looked biggest —
> reading fewer bytes per token, and keeping more of them in RAM — were both
> measured and both refused: this family's router has no tail to demote, and a
> cache the machine will not leave resident cannot be bought at any price. What
> paid instead was never about *which* bytes to read but *when*. Overlapping
> the expert reads with the arithmetic is worth ~1.6x; starting the next
> layer's reads on its own router's guess, one residual early, takes the hit
> rate from 14% to 38% at no extra bytes at all.
> 
> Both of those are exact — the cache statistics and the logits are unchanged
> — which is the property that makes them shippable rather than tuning.
> [docs/EFFICIENCY.md](docs/EFFICIENCY.md) is the account of how each lever was
> priced, including the three that were built before being measured and the two
> that were then taken back out.
> 
> What that opens up, concretely: a frontier-scale model that answers with
> no network, no per-token invoice, and nothing leaving the machine — which
> is the difference between "you may not send that data to an API" and "run
> it here". The format and the engine are not K3-specific in any deep way;
> K3 is simply the hardest case that exists today, and a model that streams
> at 2.78T streams comfortably at 48B.
> 
> Every number in this document was measured on the commit it is published
> with, and the ones that were wrong are recorded as wrong in
> [docs/LEARNED.md](docs/LEARNED.md) rather than quietly corrected.
> 
> 
> ## What you need
> 
> | | |
> |---|---|
> | **disk, for the model** | **982 GB** for the converted container — plan a terabyte |
> | disk, to convert it | another 1.42 TB of staging for the published shards, freed afterwards |
> | **RAM** | **29.05 GB** minimum to open K3 at 4K context; **64 GB** for the numbers here |
> | storage speed | the container must be on internal NVMe — see below |
> | build | a C11 compiler and `make`. No BLAS, no CUDA, no Python at run time |
> 
> Sizes here are powers of two, the way `df` and the engine both report
> them: the container is 982 GiB, which a disk vendor would call 1.05 TB.
> 
> The RAM floor is what the engine refuses to start below, and it is almost
> entirely the 27.28 GB resident trunk. Useful throughput starts higher: on
> a 64 GB machine the engine gives itself a 46 GB budget, of which 17.56 GB
> is expert cache, and that is the top of the measured curve. A 32 GB
> machine can technically open the model and will page badly; treat 64 GB as
> the real requirement.
> 
> **Storage speed is not a detail.** A token reads 17 GB of experts. On the
> internal SSD that is 12.78 GB/s and the model streams; over a USB
> enclosure it is 0.94 GB/s and the same token takes thirteen seconds.
> Convert onto internal NVMe, and use the external disk for the download
> only.
> 
> If a terabyte is not available, the same engine and the same format run
> `Kimi-Linear-48B-A3B-Instruct` from a **19 GB** container with a
> **1.87 GB** floor, at 10.7 tok/s. That is the good path for trying WASTE
> out before committing a disk to K3.
> 
> 
> ## Platforms
> 
> | | build | model-free suite | backend |
> |---|---|---|---|
> | macOS arm64 | yes | 23 pass / 0 fail / 11 skip | NEON |
> | Linux arm64 | yes | 23 pass / 0 fail / 11 skip | NEON |
> | Linux x86_64 | yes | 23 pass / 0 fail / 11 skip | AVX2 |
> | Windows x86_64 | yes | contai

## 延伸閱讀

相關專案：[[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]]

[GitHub](https://github.com/sqliteai/waste)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "sqliteai--waste"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C" AND file.name != "sqliteai--waste" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W32" AND file.name != "sqliteai--waste"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/sqliteai--waste");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "sqliteai--waste" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "sqliteai" AND file.name != "sqliteai--waste"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/sqliteai--waste");
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
> const me = dv.page("Repos/sqliteai--waste");
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
> const me = dv.page("Repos/sqliteai--waste");
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
> const me = dv.page("Repos/sqliteai--waste");
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
> const me = dv.page("Repos/sqliteai--waste");
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

> **2026-08-02** — 首次收錄
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

- [[2026-08-02|2026-08-02]] — 首次收錄，705 stars
