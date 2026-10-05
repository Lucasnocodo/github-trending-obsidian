---
repo: firelex/jeff
url: https://github.com/firelex/jeff
owner: firelex
owner_type: User
language: Python
license: MIT
description: "Fine-tunes of Qwen3.5 and Gemma 4 for zero-shot classification"
homepage: ""
stars: 1374
stars_per_day: 229
forks: 64
open_issues: 5
created: 2026-09-28
pushed_at: 2026-10-01
first_seen: 2026-10-01
week: "2026-W40"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v1.1"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-01
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-10-08"
contributor_count: 2
engagement: "low"
issue_close_rate: 67
repo_size_kb: 76947
readme_length: 9660
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-01"
star_history: "2026-10-01:1211,2026-10-02:1284,2026-10-03:1331,2026-10-04:1352,2026-10-05:1374"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "jeff"
  - "firelex/jeff"
---

# jeff

**1.2k** stars · **606** stars/天 · 建立 2 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/firelex--jeff");
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

`v1.1`

> [!summary] 一句話摘要
> Fine-tunes of Qwen3.5 and Gemma 4 for zero-shot classification

## 專案簡介

Fine-tunes of Qwen3.5 and Gemma 4 for zero-shot classification

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/firelex--jeff");
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
> const me = dv.page("Repos/firelex--jeff");
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
| Forks | 52 |
| Open Issues | 1 |
| Issue 解決率 | 67% (2 closed) |
| 最後推送 | 2026-09-29 |
| 建立日期 | 2026-09-28 |
| Repo 大小 | 75.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/firelex/jeff) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 91
>     "HTML" : 8
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@firelex](https://github.com/firelex) | 11 |
> | [@mikeatlas](https://github.com/mikeatlas) | 1 |

**最新版本**：v1.1 — v1.1: up to 254 options (2026-09-29)

> [!info]- Release Notes
> **Jeff-Qwen3.5-0.8B and Jeff-Qwen3.5-2B v1.1** accept up to 254 options per question (v1.0: 26).
> 
> - **Long lists:** 32,000 new training questions with 20 to 254 options (code-built lists, and the MASSIVE and CLINC150 training splits). Long-list test: 0.8B 40.3% → 94.7%; 2B 95.2%. Thanks to @puhuk for the report (#1).
> - **Final checkpoint:** v1.1 publishes the end-of-epoch checkpoint; development-loss selection had picked an early, less settled checkpoint.
> - **Calibration:** error 0.049 → 0.021 (0.8B), 0.028 → 0.026 (2B). JevBench hard tier: 46.7% (0.8B), 57.1% (2B, up from 53.3%).
> - **Benchmarks:** 0.8B unchanged at 79.1%; 2B 83.1% → 82.0%, mostly JudgeBench (64.6% → 59.4%), which sits near chance at this size.
> - **Serving-only install:** `uv sync --no-default-groups` (#2, thanks to @WavesMan).
> - **New base option:** Phi-4-mini-instruct can now be fine-tuned (#4, thanks to @mikeatlas).
> - MASSIVE and CLINC150 results are no longer zero-shot. Jeff-Gemma4-E2B stays at v1.0.
> 
> Weights: [Jeff-Qwen3.5-0.8B](https://huggingface.co/mstrasser/Jeff-Qwen3.5-0.8B) · [Jeff-Qwen3.5-2B](https://huggingface.co/mstrasser/Jeff-Qwen3.5-2B). v1.0 stays available on Hugging Face as revision `v1.0`.

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-28 ~ 2026-09-29）
> **活躍天數** 2 天 · **最新 commit** Add Phi-4-mini-instruct as a generic decoder base (#4)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/firelex/jeff/issues/5) | jeff? | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Jeff
> 
> > **New: v1.1 (29 September 2026).** Jeff-Qwen3.5-0.8B and Jeff-Qwen3.5-2B now choose among up to **254 options**
> > (v1.0: 26), with better calibration. On our long-list test the 0.8B goes from 40% to 95%. The 2B's benchmark score
> > dips from 83.1% to 82.0%. Details in the [changelog](#changelog); v1.0 stays available on Hugging Face as
> > revision `v1.0`.
> 
> **Fine-tunes of Qwen3.5 and Gemma 4 for zero-shot classification: small, fast decision models you slot into your
> code, with the same request format as Jev.** You describe a situation and list the options in plain words; Jeff returns a
> calibrated probability for each option from a single forward pass. No generated text, no parsing: about **22 ms** per
> decision on an RTX PRO 6000 and **28 ms** on an Apple M4 Max (MLX).
> 
> Zero-shot means the options can be anything: support queues, user intents, moderation labels, voice commands, game
> moves. Your categories don't need to appear in the training data; you describe them, and Jeff picks.
> 
> **What it is, and what it isn't.** These are very small models. They make extremely fast, well-calibrated judgement
> calls between options, and they slot easily into your local code. On benchmarks they approach, and sometimes beat, Jev;
> but at this size their reasoning won't match Jev's, which runs on a much larger model. If zero-shot accuracy isn't
> good enough for your purposes, a short fine-tune on your own examples takes you much further: our
> voice-navigation fine-tune moved held-out accuracy from 31.7% to 95.8% in under half an hour on one GPU.
> 
> **Built entirely on local hardware.** Training on one RTX PRO 6000 workstation GPU (the 0.8B trains in about 2 hours,
> the 2B in about 3.5), all synthetic training data written by an open model (Qwen3.8-Flash-Next) on two DGX Sparks,
> testing on a MacBook. No cloud GPUs, and no closed-model output in the training data; a closed model was used only to
> spot-check the quality of a sample of the synthetic data.
> 
> **Independent project.** Jeff uses the same request format as Jev, but it is not affiliated with or endorsed by TypeSafe, the
> makers of Jev. Our training code starts from the open-source [AutoJev](https://github.com/denis-pplx/autojev) recipe.
> 
> **Models on Hugging Face:** [Jeff-Qwen3.5-0.8B](https://huggingface.co/mstrasser/Jeff-Qwen3.5-0.8B) · [Jeff-Qwen3.5-2B](https://huggingface.co/mstrasser/Jeff-Qwen3.5-2B) · [Jeff-Gemma4-E2B](https://huggingface.co/mstrasser/Jeff-Gemma4-E2B) · chess fine-tune: [Jeff-Qwen3.5-0.8B-Chess](https://huggingface.co/mstrasser/Jeff-Qwen3.5-0.8B-Chess)
> 
> 
> ## Quick start
> 
> To serve a model you only need the serving install (`--no-default-groups` leaves out the training, data and
> evaluation packages; plain `uv sync` installs everything):
> 
> ```bash
> uv sync --no-default-groups                 # CPU
> uv sync --no-default-groups --extra cuda    # NVIDIA GPU: adds the fast kernels (much slower without them)
> uv sync --no-default-groups --extra mac     # Apple silicon: adds MLX
> uv run --no-default-groups hf download mstrasser/Jeff-Qwen3.5-0.8B --local-dir checkpoints/jeff-0.8b
> 
> 
> ## Fine-tuning example: chess
> 
> When zero-shot isn't enough, fine-tune. As a worked example we trained Jeff-Qwen3.5-0.8B on 600,000 Lichess positions,
> labelled by Stockfish, in about 3½ hours on one GPU. On 1,000 held-out chess puzzles:
> 
> | Model | Puzzles solved |
> |---|---|
> | Qwen3.5-0.8B, untrained | 6.2% |
> | Jeff-Qwen3.5-0.8B, zero-shot (no chess training) | 15.5% |
> | **[Jeff-Qwen3.5-0.8B-Chess](https://huggingface.co/mstrasser/Jeff-Qwen3.5-0.8B-Chess)** | **55.8%** |
> 
> It is not a strong player: about 1,000 Elo with no search, and it loses to Stockfish's weakest setting. The point is
> speed. Each move is one forward pass in tens of milliseconds, so one GPU keeps up with about 600 human blitz games at
> once.
> 
> 100 games at once in real time; the featured game is its one win of the 100, a nine-move checkmate. The full video,
> results and training details are on the [model card](https://huggingface.co/mstrasser/Jeff-Qwen3.5-0.8B-Chess). The code to
> reproduce it, step by step, is in [examples/chess](examples/chess).
> 
> 
> ## Benchmarks
> 
> 4,599 questions from five public benchmarks, plus JevBench's public hard tier (105 items, scored separately):
> 
> | Benchmark | Qwen3.5-0.8B untrained | Jeff-Qwen3.5-0.8B | Qwen3.5-2B untrained | Jeff-Qwen3.5-2B | Gemma 4 E2B untrained | Jeff-Gemma4-E2B | Jev (published) | AutoJev-27B (published) |
> |---|---|---|---|---|---|---|---|---|
> | **Overall (5 benchmarks)** | 45.3 | 79.1 | 46.5 | 82.0 | 62.5 | 81.6 | **83.0** | ***84.9*** |
> | BBH | 39.5 | 64.9 | 46.0 | 68.7 | 51.3 | 66.4 | **94.3** | 82.8 |
> | Financial PhraseBank | 36.0 | **95.7** | 53.4 | **94.7** | 86.0 | **96.1** | 77.0 | 84.2 |
> | JudgeBench | 56.6 | 63.1 | 57.4 | 59.4 | 46.9 | 60.6 | **78.6** | ***78.9*** |
> | RAGTruth | 49.1 | **85.6** | 35.9 | **87.7** | 63.8 | **87.4** | 77.3 | ***88.9*** |
> | WinoGrande | 49.2 | 69.0 | 52.2 | 78.8 | 51.0 | 77.4 | **90.7** | 83.3 |
> | JevBench hard (separate) | 36.2 | 46.7 | 45.7 | 57.1 | 41.0 | 48.6 | **73.3** | 70.3 |
> 
> **Bold:** the winner of Jeff against Jev in each row. ***Bold italic:*** AutoJev-27B where it is the best of all models
> in the row; it is shown for reference, since the head-to-head comparison is
> with Jev. The Qwen columns are v1.1; Jeff-Gemma4-E2B is v1.0. The published Jev and AutoJev figures were measured on a different sample of the same benchmarks. Jeff's
> overall score comes from classification and grounding, where it matches or beats the large models; on the
> reasoning-heavy benchmarks (BBH, JudgeBench, JevBench) it stays well below them, as you would expect at this size.
> 
> 
> # NVIDIA GPU or CPU (PyTorch)
> JEFF_CHECKPOINT=checkpoints/jeff-0.8b PORT=8765 uv run --no-default-groups jeff-serve
> 
> # Apple silicon (MLX, much faster on a Mac; Qwen models only)
> JEFF_BACKEND=mlx JEFF_CHECKPOINT=checkpoints/jeff-0.8b PORT=8765 uv run --no-default-groups --extra mac jeff-serve
> ```
> 
> ```bash
> curl -s localhost:8765/v1/systemone -H 'content-type: application/json' -d '{
>   "model": "jeff-latest",
>   "state": "Refund request: the customer says the parcel arrived crushed and wants their money back.",
>   "questions": {
>     "route": {"type": "choice", "instructions": "Which team should handle this?",
>               "criteria": {"1": "Refunds and payments", "2": "Damaged or lost parcels", "3": "Account and login problems"}},
>     "angry": {"type": "noul", "instructions": "Is the customer angry?"}
>   }
> }'
> ```
> 
> Each answer has a probability per option, the chosen option and a confidence. Three question types: `choice` (pick one
> of up to 254 options with the v1.1 Qwen models, 26 with Jeff-Gemma4-E2B), `noul` (yes/no, returned as a probability) and `score` (a point on a scale you describe).
> Several independent questions in one request are answered together.
> 
> 
> ## Speed and size
> 
> Median time per decision over the same 200 benchmark questions (about 200 input tokens each), one question at a time,
> from raw text to probabilities:
> 
> | Model | Parameters | Weights (16-bit) | NVIDIA RTX PRO 6000 | Apple M4 Max (MLX) | CPU (32 threads) |
> |---|---|---|---|---|---|
> | **Jeff-Qwen3.5-0.8B** | 0.8B | 1.7 GB | **22 ms** | **28 ms** | 463 ms |
> | Jeff-Qwen3.5-2B | 2B | 4.2 GB | 24 ms | 60 ms | 708 ms |
> | Jeff-Gemma4-E2B | 2B effective (4.6B stored) | 9.3 GB | 29 ms | — (MLX runs Qwen only) | 1.0 s |
> | AutoJev-27B | 27B | ~54 GB | not published | — | — |
> | Jev | not disclosed | API only | 114–212 ms per call in published Doom runs, including the network | | |
> 
> 
> ## Using it well
> 
> - **Reason in code, decide with Jeff.** It's a classifier, not a planner. State what each option leads to ("this move
>   gets you hit by a car"); asked to forecast ("a car arrives in 2 turns"), it does no better than random.
> - **Wording matters enormously.** Describe options consistently: giving Frogger's goal option the same words as every
>   other forward option took one episode from 15 crossings to 23.
> - **Use short option keys and descriptive text:** `{"1": "Engageme

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]]

[GitHub](https://github.com/firelex/jeff)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "firelex--jeff"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "firelex--jeff" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W40" AND file.name != "firelex--jeff"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/firelex--jeff");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "firelex--jeff" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "firelex" AND file.name != "firelex--jeff"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/firelex--jeff");
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
> const me = dv.page("Repos/firelex--jeff");
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
> const me = dv.page("Repos/firelex--jeff");
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
> const me = dv.page("Repos/firelex--jeff");
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
> const me = dv.page("Repos/firelex--jeff");
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

> **2026-10-01** — 首次收錄
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

- [[2026-10-05|2026-10-05]] — 再次上榜，1.4k stars
- [[2026-10-04|2026-10-04]] — 再次上榜，1.4k stars
- [[2026-10-03|2026-10-03]] — 再次上榜，1.3k stars
- [[2026-10-02|2026-10-02]] — 再次上榜，1.3k stars
- [[2026-10-01|2026-10-01]] — 首次收錄，1.2k stars
