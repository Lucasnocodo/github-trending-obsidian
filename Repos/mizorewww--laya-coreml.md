---
repo: mizorewww/laya-coreml
url: https://github.com/mizorewww/laya-coreml
owner: mizorewww
owner_type: User
language: Python
license: Apache-2.0
description: "Local Laya typed decisions on Apple Core ML and Neural Engine. Validated ports, ~5 ms short decisions on M3 Max, reproducible speed and energy benchmarks."
homepage: "https://github.com/mizorewww/laya-coreml#readme"
stars: 1442
stars_per_day: 288
forks: 121
open_issues: 3
created: 2026-09-19
pushed_at: 2026-09-22
first_seen: 2026-09-25
week: "2026-W39"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-25
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-09-28"
contributor_count: 1
engagement: "low"
issue_close_rate: 40
repo_size_kb: 5614
readme_length: 8902
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-09-25"
star_history: "2026-09-25:1442"
tags:
  - github
  - "category/other"
  - "lang/python"
  - "topic/apple_neural_engine"
  - "topic/apple_silicon"
  - "topic/coreml"
  - "topic/decision_model"
  - "topic/laya"
aliases:
  - "laya-coreml"
  - "mizorewww/laya-coreml"
---

# laya-coreml

**1.4k** stars · **288** stars/天 · 建立 5 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/mizorewww--laya-coreml");
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

`個人專案`

`apple-neural-engine` `apple-silicon` `coreml` `decision-model` `laya` `local-ai` `modernbert` `on-device-ai` `typed-decisions`

> [!summary] 一句話摘要
> Local Laya typed decisions on Apple Core ML and Neural Engine. Validated ports, ~5 ms short decisions on M3 Max, reproducible speed and energy benchmarks.

## 專案簡介

Local Laya typed decisions on Apple Core ML and Neural Engine. Validated ports, ~5 ms short decisions on M3 Max, reproducible speed and energy benchmarks.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/mizorewww--laya-coreml");
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
> const me = dv.page("Repos/mizorewww--laya-coreml");
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
| Forks | 121 |
| Open Issues | 3 |
| Issue 解決率 | 40% (2 closed) |
| 最後推送 | 2026-09-22 |
| 建立日期 | 2026-09-19 |
| 官方網站 | [Link](https://github.com/mizorewww/laya-coreml#readme) |
| Repo 大小 | 5.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/mizorewww/laya-coreml) |
| Topics | `apple-neural-engine` `apple-silicon` `coreml` `decision-model` `laya` `local-ai` `modernbert` `on-device-ai` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 98
>     "Rust" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@mizorewww](https://github.com/mizorewww) | 5 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-19 ~ 2026-09-22）
> **活躍天數** 3 天 · **最新 commit** Clamp calibration temperatures, syncing upstream v0.3.5 (#35/#42)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/mizorewww/laya-coreml/issues/5) | Mixing question types in one predict call is 20x slower (850 | 0 | 0 |
> | [#2](https://github.com/mizorewww/laya-coreml/issues/2) | PyPI 0.1.0 predates the calibration-temperature clamp docume | 0 | 0 |
> | [#1](https://github.com/mizorewww/laya-coreml/issues/1) | Intel Mac variant | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Laya-CoreML
> 
> **Open-weight typed decisions on Apple Silicon. Core ML, Neural Engine, zero generated tokens.**
> 
> [PyPI](https://pypi.org/project/laya-coreml/) · [Hugging Face weights](https://huggingface.co/aac6fef/laya-multilingual-coreml-ane) · [中文](https://github.com/mizorewww/laya-coreml/blob/main/README.zh-CN.md)
> 
> A real Laya model plays Snake locally, with visible probabilities, score, length,
> latency and safety interventions. The GIF replays a recorded Core ML run at **1× speed**.
> The game uses explicit planner features and a visible cycle safety layer.
> 
> The complete active Snake loop sustained **49.1–50.0 decisions/s** across three
> uncapped 600-step episodes, with zero deaths and two safety interventions.
> [Game-loop timings and paced-rate limits](https://github.com/mizorewww/laya-coreml/blob/main/docs/SNAKE_BENCHMARKS.md)
> include rendering serialization; terminal painting is excluded.
> 
> **One short multilingual decision: 4.98 ms P50 / 5.31 ms P95 on M3 Max with ANE FP16.**
> The same experiment measured **2.78× better whole-system energy per decision** than
> compiled MLX FP16. A separately validated W8 palette variant reached 4.88 ms and
> 3.19× energy improvement. These are single-question results, not full Snake frame
> times; the requested 10× improvement was not achieved.
> 
> ## Run the demo
> 
> Apple Silicon · macOS 15+ · Python 3.11–3.13.
> 
> ```bash
> pip install 'laya-coreml[demo]'
> hf download aac6fef/laya-multilingual-coreml-ane --local-dir models/snake
> laya-coreml-snake --model ./models/snake
> ```
> 
> Download once, then play offline. No PyTorch, Transformers or MLX is needed for
> inference. The terminal needs 104 columns × 35 rows. Space pauses; ↑/↓ changes
> speed; R resets; Q quits. First-time Core ML initialization can take tens of seconds.
> 
> [Controls, recording and video export](https://github.com/mizorewww/laya-coreml/blob/main/docs/SNAKE_DEMO.md)
> · [Measured stable decision rates](https://github.com/mizorewww/laya-coreml/blob/main/docs/SNAKE_BENCHMARKS.md)
> · [Shareable video and recording provenance](https://github.com/mizorewww/laya-coreml/blob/main/docs/LAUNCH.md)
> 
> ## Ask for a decision
> 
> ```bash
> pip install laya-coreml
> ```
> 
> ```python
> import laya_coreml as laya
> 
> agent = laya.load("aac6fef/laya-multilingual-coreml-ane")
> result = agent.predict(
>     "The customer requests a refund of a duplicate payment.",
>     {
>         "refund": {
>             "type": "noul",
>             "instructions": "Does the customer request a refund?",
>         }
>     },
> )
> print(result["answers"]["refund"])
> ```
> 
> Laya returns probabilities for **choice**, ordinal **score**, and boolean **noul**
> questions. There is no autoregressive decoding or generated JSON to parse. Hub
> models download before initialization; subsequent predictions stay local. Pass
> `local_files_only=True` to require an existing cache, or load a local directory.
> 
> Following upstream v0.3.5, fitted calibration temperatures are clamped to
> `[0.5, 5.0]` before use: the shipped `choice:11+` bucket is 0.1006, which would
> sharpen logits ~10x and report a coin flip as near-certainty. The checkpoint's
> raw values remain available as `agent.temperature_raw` and
> `agent.temperature_by_options_raw`, and a `RuntimeWarning` names every clamped
> bucket at load.
> 
> The ANE bundle has a **96-token total limit**, including question, options and
> state. Longer requests raise a capacity error. Use
> `aac6fef/laya-multilingual-coreml` for the general-purpose 1024-token model.
> [Full API, model selection and offline usage](https://github.com/mizorewww/laya-coreml/blob/main/docs/USAGE.md).
> 
> ## Measured on M3 Max
> 
> 40-core GPU, 128 GiB, macOS 27.2. One 91-token question padded to 96, including
> prompt preparation, tokenization, arrays, synchronous inference, calibration and
> formatting. Loading and warmup are excluded. MLX enables compile, prefix caching
> and shape buckets. Six alternating 20-second blocks per implementation produced
> **65,598 stable calls**.
> 
> | Metric | Compiled MLX FP16 | Core ML ANE FP16 | Core ML ANE W8 |
> |---|---:|---:|---:|
> | P50 / P95 | 6.94 / 7.39 ms | **4.98 / 5.31 ms** | **4.88 / 5.23 ms** |
> | Mean system power estimate | 61.39 W | 30.75 W | 27.39 W |
> | System energy / decision | 0.4288 J | **0.1540 J** | **0.1344 J** |
> | Speed gain | 1× | **1.39×** | **1.42×** |
> | System energy gain | 1× | **2.78×** | **3.19×** |
> 
> Energy uses direct SMC PSTR sensor readings, with raw samples and explicit anomaly
> rejection. This is an estimate with sensor and background-load uncertainty.
> **Speed gain × average power ratio = energy gain**; multiplying energy by speed
> again would double-count time. The W8 variant compresses weights while retaining
> FP16 compute. It is approximate, and its package-size reduction is not a speed ratio.
> 
> [Speed, energy and hardware evidence](https://github.com/mizorewww/laya-coreml/blob/main/docs/ANE_BENCHMARKS.md)
> · [Raw measurements](https://github.com/mizorewww/laya-coreml/tree/main/benchmarks/results).
> 
> ## Available checkpoints
> 
> | Hugging Face bundle | Default engine | Capacity | Purpose |
> |---|---|---:|---|
> | [Laya 421M](https://huggingface.co/aac6fef/laya-coreml) | CPU + GPU | 512 tokens | Original English model |
> | [Multilingual 322M](https://huggingface.co/aac6fef/laya-multilingual-coreml) | CPU + GPU | 1024 tokens | General multilingual decisions |
> | [Typed Decisions 421M](https://huggingface.co/aac6fef/laya-typed-decisions-coreml) | CPU + GPU | 1024 tokens | Original specialized checkpoint |
> | [Snake GPU](https://huggingface.co/aac6fef/laya-multilingual-coreml-snake) | CPU + GPU | B3 / L64 | Batches the three compact game questions |
> | [Multilingual ANE](https://huggingface.co/aac6fef/laya-multilingual-coreml-ane) | CPU + ANE | B1 / L96 | Short decisions, FP16 |
> | [Multilingual ANE W8](https://huggingface.co/aac6fef/laya-multilingual-coreml-ane-w8) | CPU + ANE | B1 / L96 | Optional approximate palette compression |
> 
> Every bundle includes tokenizer/configuration, model card, provenance, checksums
> and packaging-time validation. ANE bundles also include the exact original host
> embedding/action tensors they need. No original training checkout is required.
> 
> ## Port fidelity and limits
> 
> The three general-purpose FP16 checkpoints match upstream selected answers on
> **189/189 validation questions**. Each passes 100 repeated calls. ANE FP16 L96
> passes **59/59 fitting questions**, with maximum calibrated-probability drift
> 0.002925; W8 passes the same subset with drift 0.014393 under an unchanged 0.02
> gate. Six- and four-bit experiments failed that gate and are not published weights.
> These are conversion-fidelity fixtures, not proof of general task accuracy.
> 
> A separately exported FP16 ANE L1024 graph passes the complete **63/63** fixture,
> but an actual 1024-token request takes about **91.7 ms** in its serial screen.
> The short ANE result does not establish a long-context advantage. A 600-step
> paired Snake check matches **600/600 actions**, with zero deaths and zero shield
> interventions; the current ANE adapter's three sequential calls do not establish
> a consistent full-game speedup over compiled MLX.
> 
> The ordinary SDPA Core ML export and the ANE graph are different implementations.
> The ordinary export defaults to CPU+GPU after unrestricted RangeDim GPU shapes
> failed local fidelity checks. Changing its device setting alone does not reproduce
> the ANE result. The ANE rewrite uses BC1L activations, 1×1 projections and per-head
> attention; its plan and a separate Instruments trace support Neural Engine work.
> CPU still handles input/output boundaries.
> 
> ## Documentation and reproducibility
> 
> - [Install and Python/CLI API](https://github.com/mizorewww/laya-coreml/blob/main/docs/USAGE.md)
> - [Snake demo and media](https://github.com/mizorewww/laya-coreml/blob/main/docs/SNAKE_DEMO.md)
> - [Release artifacts and pinned Hub revisions](https://github.com/mizorewww/laya-coreml/blob/main/docs/RELEASE.md)
> - [General Core ML benchmarks](https://github.com/mizorewww/laya-coreml/blob/main/BENCHMARKS.md)
> - [ANE engineering experiments](https:/

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/mizorewww/laya-coreml) · [官方網站](https://github.com/mizorewww/laya-coreml#readme)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "mizorewww--laya-coreml"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "mizorewww--laya-coreml" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W39" AND file.name != "mizorewww--laya-coreml"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/mizorewww--laya-coreml");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "mizorewww--laya-coreml" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "mizorewww" AND file.name != "mizorewww--laya-coreml"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/mizorewww--laya-coreml");
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
> const me = dv.page("Repos/mizorewww--laya-coreml");
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
> const me = dv.page("Repos/mizorewww--laya-coreml");
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
> const me = dv.page("Repos/mizorewww--laya-coreml");
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
> const me = dv.page("Repos/mizorewww--laya-coreml");
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

> **2026-09-25** — 首次收錄
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

- [[2026-09-25|2026-09-25]] — 首次收錄，1.4k stars
