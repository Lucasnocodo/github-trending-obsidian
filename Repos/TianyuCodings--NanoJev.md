---
repo: TianyuCodings/NanoJev
url: https://github.com/TianyuCodings/NanoJev
owner: TianyuCodings
owner_type: User
language: Python
license: MIT
description: "A nano replica of Jev: parallel decisions, dynamic candidates, and an end-to-end training pipeline."
homepage: ""
stars: 1562
stars_per_day: 521
forks: 180
open_issues: 6
created: 2026-09-17
pushed_at: 2026-09-20
first_seen: 2026-09-20
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
last_reviewed: 2026-09-20
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-09-24"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 17884
readme_length: 9715
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-09-20"
star_history: "2026-09-20:1072,2026-09-21:1562"
tags:
  - github
  - "category/other"
  - "lang/python"
aliases:
  - "NanoJev"
  - "TianyuCodings/NanoJev"
---

# NanoJev

**1.1k** stars · **536** stars/天 · 建立 2 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/TianyuCodings--NanoJev");
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

> [!summary] 一句話摘要
> A nano replica of Jev: parallel decisions, dynamic candidates, and an end-to-end training pipeline.

## 專案簡介

A nano replica of Jev: parallel decisions, dynamic candidates, and an end-to-end training pipeline.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/TianyuCodings--NanoJev");
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
> const me = dv.page("Repos/TianyuCodings--NanoJev");
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
| Forks | 141 |
| Open Issues | 6 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-09-17 |
| 建立日期 | 2026-09-17 |
| Repo 大小 | 17.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/TianyuCodings/NanoJev) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 81
>     "JavaScript" : 17
>     "HTML" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@TianyuCodings](https://github.com/TianyuCodings) | 13 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-17 ~ 2026-09-17）
> **活躍天數** 1 天 · **最新 commit** Add a shareable maze video and maze README preview

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#7](https://github.com/TianyuCodings/NanoJev/issues/7) | 请问训练方法和训练数据是否有公开？ | 0 | 1 |
> | [#6](https://github.com/TianyuCodings/NanoJev/issues/6) | x | 0 | 0 |
> | [#5](https://github.com/TianyuCodings/NanoJev/issues/5) | [Verified] Your recorded results independently audited — sig | 0 | 0 |
> | [#3](https://github.com/TianyuCodings/NanoJev/issues/3) | collaboration | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # NanoJev — A nano replica of [Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev)
> 
> **English** | [简体中文](README.zh-CN.md)
> 
> **A 0.6B parallel decision model. States and questions in, complete probability distributions out—with zero output-token decoding.**
> 
> [Model](https://huggingface.co/C-Tianyu/NanoJev) · [Dataset](https://huggingface.co/datasets/C-Tianyu/NanoJev-Data)
> 
> **[Open the live side-by-side demo →](https://nanojev.tianyuchen99.chatgpt.site)**
> 
> 
> ## Quick start: side-by-side replay
> 
> The interactive replay runs with Python's built-in HTTP server:
> 
> ```bash
> git clone https://github.com/TianyuCodings/NanoJev.git
> cd NanoJev
> python3 -m http.server 8080 --bind 127.0.0.1 --directory web
> ```
> 
> Open **http://127.0.0.1:8080/side-by-side.html** for the three-panel Snake and maze comparison. The dark arcade remains at **http://127.0.0.1:8080/arcade.html**, and the earlier benchmark viewer at **http://127.0.0.1:8080/comparison.html**.
> 
> 
> ## Features
> 
> - **0.6B LLM backbone.** Qwen3-0.6B with decision heads for structured outputs.
> - **Multiple states and questions in one forward.** Batch independent decisions together.
> - **Dynamic Choice.** Supply **2–255 candidates** and receive a probability for every candidate.
> - **Boolean decisions.** Receive the probability that a complete proposition is true.
> - **Ordered Score.** Supply **2–10 levels** and receive the level distribution and expected score.
> - **Complete distributions.** Use the same output for ranking, greedy selection, or probability sampling.
> - **Zero output decoding.** Read decisions directly from a forward pass.
> - **Persistent serving.** Load a checkpoint once and reuse it across requests.
> 
> Measured in the running service: **6 states · 18 questions · 44 candidate paths · 1 backbone forward**.
> 
> 
> ## Earlier 40-map navigation benchmark
> 
> **Controller: T=1 probability sampling.** The full benchmark contains 20 test maps and 20 OOD maps.
> 
> | System | 4×4 test | 6×6 OOD |
> |---|---:|---:|
> | **NanoJev** | **19/20 — 95%** | **18/20 — 90%** |
> | [Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) | 20/20 — 100% | 19/20 — 95% |
> | Untuned Qwen3-0.6B | 7/20 — 35% | 3/20 — 15% |
> 
> [Earlier comparison viewer](web/comparison.html) · [Complete benchmark results](research/nanojev_comparison_public.json)
> 
> 
> ## Three models, one game
> 
> [](https://nanojev.tianyuchen99.chatgpt.site/#maze)
> 
> [Download the maze video (MP4)](assets/side_by_side_maze.mp4) · 27 seconds · 1440 × 1120 · 30 fps
> 
> [Play Snake](https://nanojev.tianyuchen99.chatgpt.site/#snake) · [Explore the 50×50 maze](https://nanojev.tianyuchen99.chatgpt.site/#maze) · [Recorded sources and replay checks](assets/side_by_side_data_manifest.json)
> 
> The standalone ChatGPT Sites demo presents **Jev, NanoJev, and Untuned Qwen** in three light panels. Playback advances by the same environment step across panels; completed runs freeze at their actual final state. Probability bars show the last decision that produced the displayed state. Shared code planning remains part of each system.
> 
> The new maze baseline is the original Qwen3-0.6B: **4,726 attempts, 2,044 collisions, goal reached**. The older maze video below keeps its original **Starting NanoJev** comparison and recorded results.
> 
> 
> ## Recorded showcase runs
> 
> Watch model judgments and shared code planning work together. Each game uses the same controller code across its three systems; the recordings preserve the actual actions, probabilities, and final outcomes.
> 
> 
> ### Find the exit: 50×50 maze
> 
> [](assets/arcade_maze.mp4)
> 
> [Watch the MP4](assets/arcade_maze.mp4) · [Interactive replay](web/arcade.html)
> 
> The model judges four local directions. Code remembers collisions, explores untried edges, and repositions through verified open paths.
> 
> | System | Attempts | Collisions | Outcome |
> |---|---:|---:|---|
> | **NanoJev** | **244** | **36** | **Goal reached** |
> | [Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) | 2,738 | 1,044 | Goal reached |
> | Starting NanoJev | 171 | 43 | Goal reached |
> 
> Starting NanoJev is the earlier trained NanoJev checkpoint. The new NanoJev model uses matched local safety training.
> 
> 
> ### Keep growing: 12×12 Snake
> 
> [](assets/arcade_snake.mp4)
> 
> [Watch the MP4](assets/arcade_snake.mp4) · [Interactive replay](web/arcade.html)
> 
> The common planner filters immediate collisions and finds static paths toward the visible food. The model breaks ties between the remaining actions; a single remaining action is a code-forced move. **Seed: 61005. Controller: greedy.**
> 
> | System | Food collected | Steps | Outcome |
> |---|---:|---:|---|
> | **NanoJev** | **27** | **256** | **Alive at horizon** |
> | [Jev](https://typesafe.ai/blog/introducing-system-one-models-and-jev) | 30 | 256 | Alive at horizon |
> | Untuned Qwen3-0.6B | 25 | 211 | Trapped |
> 
> Untuned Qwen uses its original pretrained weights and native language-model head, conditioned on the offered A–D answer tokens.
> 
> [Recorded cases and replay verification](assets/arcade_data_manifest.json) · [Eight-case controller comparison](results/arcade_controller_comparison.json)
> 
> 
> ## Larger games and calibrated decisions
> 
> - **Full-size environments:** 8×8, 16×16, 32×32, and 50×50 mazes, four topologies, multiple positions per map, and configurable larger sizes.
> - **Local judgments + code planning:** matched 5×5 observations, four parallel safety judgments, movement memory, and model-guided exploration.
> - **Snake dynamics:** reproducible food generation, body growth, collision rules, tail movement, dynamic action candidates, and safety questions.
> - **Probability learning:** observed-event datasets, CE/Brier training, paired proper-reward learning, exact gradient checks, and completed Qwen3-0.6B runs.
> - **Verified evaluation:** map-separated data, frozen game cohorts, real model execution, and independent trajectory replay.
> 
> The local safety model reaches **77.84% accuracy on test questions** and **76.56% on 50×50 OOD questions**. The probability-learning pilot's paired proper-reward arm reaches **0.11844 test / 0.06202 OOD distribution error**, measured as the sum of squared differences from the simulator's event probabilities.
> 
> [Atomic planning](docs/ATOMIC_PLANNING.md) · [Scaled-game pipeline](docs/SCALED_GAMES.md) · [RLCD implementation and results](docs/RLCD_EXPERIMENT.md) · [Input contract](docs/TYPESAFE_CONTRACT.md) · [Game results](docs/DEVELOPMENT_RESULTS.md)
> 
> 
> ## How it works
> 
> Each decision is defined by a **state**, a **question**, and its **candidate set**. Every candidate path carries the relevant input into the backbone. Shared decision heads return a distribution over the candidates supplied for that question.
> 
> Choice uses a shared scalar head and set attention. Boolean uses a single-path sigmoid. Score evaluates its ordered level descriptions and returns their probability-weighted expectation.
> 
> 1. **Build queries.** Generate states, questions, candidate descriptions, and target distributions.
> 2. **Organize data.** Keep related maps, rules, and their variations in the same split.
> 3. **Train.** Initialize Qwen3-0.6B, warm up the decision heads, and train with complete-question distribution losses.
> 4. **Evaluate.** Measure probability quality and execute game controllers with recorded actions.
> 5. **Serve and visualize.** Reuse a persistent model endpoint and replay complete trajectories in the browser.
> 
> [Complete pipeline commands](research/pipeline_runbook.md)
> 
> 
> ## Download the showcase models
> 
> | Use | Checkpoint in [C-Tianyu/NanoJev](https://huggingface.co/C-Tianyu/NanoJev/tree/main/variants) |
> |---|---|
> | **50×50 maze demo** | `variants/local_atomic_seed17` |
> | **Snake demo** | `variants/games_gold_seed17` |
> | Full-map comparison | `variants/games_api_seed17` |
> | Calibrated-decision experiments | `variants/events_ce_seed17`, `variants/events_brier_seed17`, `variants/events_paired_seed17` |
> 
> ```python
> from pathlib import Path
> from huggingface_hub import snapshot_download
> 
> variant = "local_atomic_seed17"  # Select "games

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[ArasTey--lunel|ArasTey/lunel]]

[GitHub](https://github.com/TianyuCodings/NanoJev)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "TianyuCodings--NanoJev"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "TianyuCodings--NanoJev" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W39" AND file.name != "TianyuCodings--NanoJev"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/TianyuCodings--NanoJev");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "TianyuCodings--NanoJev" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "TianyuCodings" AND file.name != "TianyuCodings--NanoJev"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/TianyuCodings--NanoJev");
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
> const me = dv.page("Repos/TianyuCodings--NanoJev");
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
> const me = dv.page("Repos/TianyuCodings--NanoJev");
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
> const me = dv.page("Repos/TianyuCodings--NanoJev");
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
> const me = dv.page("Repos/TianyuCodings--NanoJev");
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

> **2026-09-20** — 首次收錄
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

- [[2026-09-21|2026-09-21]] — 再次上榜，1.6k stars
- [[2026-09-20|2026-09-20]] — 首次收錄，1.1k stars
