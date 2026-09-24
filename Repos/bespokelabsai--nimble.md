---
repo: bespokelabsai/nimble
url: https://github.com/bespokelabsai/nimble
owner: bespokelabsai
owner_type: Organization
language: Python
license: N/A
description: "Local typed decisions, contrastive data curation, and model evaluation."
homepage: ""
stars: 1699
stars_per_day: 340
forks: 127
open_issues: 4
created: 2026-09-18
pushed_at: 2026-09-23
first_seen: 2026-09-24
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
last_reviewed: 2026-09-24
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-09-27"
contributor_count: 3
engagement: "low"
issue_close_rate: 0
repo_size_kb: 6223
readme_length: 9714
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-09-24"
star_history: "2026-09-24:1699"
tags:
  - github
  - "category/other"
  - "lang/python"
  - org
aliases:
  - "nimble"
  - "bespokelabsai/nimble"
---

# nimble

**1.7k** stars · **340** stars/天 · 建立 5 天前 · Python · 未標註授權

```dataviewjs
const me = dv.page("Repos/bespokelabsai--nimble");
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

`ORG`

> [!summary] 一句話摘要
> Local typed decisions, contrastive data curation, and model evaluation.

## 專案簡介

Local typed decisions, contrastive data curation, and model evaluation.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/bespokelabsai--nimble");
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
> const me = dv.page("Repos/bespokelabsai--nimble");
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
| Forks | 127 |
| Open Issues | 4 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-09-23 |
| 建立日期 | 2026-09-18 |
| Repo 大小 | 6.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/bespokelabsai/nimble) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@mahesh-bespoke](https://github.com/mahesh-bespoke) | 4 |
> | [@eddited17](https://github.com/eddited17) | 1 |
> | [@catcherinthesty](https://github.com/catcherinthesty) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-18 ~ 2026-09-23）
> **活躍天數** 5 天 · **最新 commit** Fix typo in Nimble model description (#8)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/bespokelabsai/nimble/issues/3) | Benchmark Results & Streaming Evaluation: Comparing Zero-Wei | 1 | 0 |
> | [#10](https://github.com/bespokelabsai/nimble/issues/10) | JevBench v1.4 results for Bespoke Labs | 0 | 0 |
> | [#6](https://github.com/bespokelabsai/nimble/issues/6) | Feature Request: ROCm/ AMD GPU support for Nimble inference | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Bespoke Nimble
> 
> **Data, Model, Recipe for an open Jev**
> 
> [Model](https://huggingface.co/bespokelabs/Bespoke-Nimble-9B) · [Updates](#updates) · [Capabilities](#capabilities) · [Quickstart](#quickstart) · [Methodology](#methodology) · [Documentation and development](#documentation-and-development) · [Citation](#citation)
> 
> Nimble takes some text and a schema, and makes typed decisions about the text.
> The schema is the list of questions to answer. Each question is either a choice
> from a list that you give or a true or false question. For each question, Nimble
> returns the answer it picked and the probability of each allowed answer.
> 
> Nimble makes each decision in one step and does not write out any reasoning
> first, so it is fast (blazing fast!). Nimble is
> inspired by the System One approach of
> [TypeSafe's Jev](https://docs.typesafe.ai/primitives/choice). In this repository,
> we share our recipe for training such a model.
> 
> Note that we did not distill from Jev. The point of the repository is to show how to curate data, how to train, and to serve such a model, and encourage more research!
> 
> You can run [Bespoke-Nimble-9B](https://huggingface.co/bespokelabs/Bespoke-Nimble-9B)
> on a Mac with Apple Silicon or on a machine with an NVIDIA GPU.
> 
> 
> ## Quickstart
> 
> Clone the repository and move into its folder. Run all the commands below from
> this folder.
> 
> ```sh
> git clone https://github.com/bespokelabsai/nimble.git nimble
> cd nimble
> ```
> 
> Use Python 3.12. To run the model on a Mac, you need Apple Silicon. Python must
> also run directly on macOS so that it can use Metal, which is Apple's interface
> to the GPU. To run the model on Linux, you need an NVIDIA GPU that supports
> BF16, a 16-bit number format.
> 
> Without quantization, the 9B weights alone take about 18 GB. Quantization means
> storing the weights with fewer bits to save memory. The model needs more memory
> than this while it runs. The merge step below runs on the CPU. It needs extra
> RAM, and it needs disk space for both the base weights and the merged weights.
> A Mac with 64 GB of memory has more free memory for this than a machine with
> 24 GB.
> 
> 
> ### Evaluation on 324 held-out examples
> 
> | Model | Reference matches | Agreement |
> | --- | ---: | ---: |
> | Gemma 3 270M IT | 93/324 | 28.70% |
> | Qwen3.5-0.8B | 147/324 | 45.37% |
> | Qwen3.5-4B | 199/324 | 61.42% |
> | Qwen3.5-9B | 215/324 | 66.36% |
> | Qwen3.8-27B | 275/324 | 84.88% |
> | **Bespoke-Nimble-9B** | **292/324** | **90.12%** |
> | Jev 1.13.0 | 302/324 | 93.21% |
> 
> On these 324 examples, Bespoke-Nimble-9B matched 17 more reference labels than
> the untuned 27B model, which is 5.25 percentage points more. Jev matched 10 more
> reference labels than Bespoke-Nimble-9B, which is 3.09 points more. The untuned
> models are models that we did not fine-tune for this task. We tested all seven
> models on the same examples with the same reference labels. We ran Gemma and
> the untuned Qwen models on an H100 GPU. For Bespoke-Nimble-9B, we reused
> checked results from an earlier H100 run. For Jev, we reused results from an
> earlier run through its API.
> 
> The reference labels are synthetic. The 324 examples form 162 pairs of closely
> related examples. All of them come from only six source families, so this is a narrow
> test.
> 
> For the untuned models, we computed the scores of the candidate answers in FP32,
> a 32-bit number format. For Bespoke-Nimble-9B, we kept the setup that we had
> already checked, which computes the output layer in BF16. In a new run of the
> untuned 9B model, one answer that had been a 50/50 tie was no longer a tie. This
> changed the model's count from 214 to 215. For rating tasks, we count a match
> when the most probable level equals the reference level. The
> [machine-readable comparison](assets/evidence-324-results.json) contains
> the reference-match counts shown above.
> 
> We checked the saved adapter in two ways. After we reloaded it, it gave exactly
> the same logits as before. When we turned the adapter off, the model gave the
> same results as the base model. We ran these checks only on the CUDA path that
> loads the adapter without merging it. We did not run a separate quality test on
> the merged model that the Mac and Linux quickstarts use. See the
> [training guide](docs/NIMBLE_TRAINING.md) for the commands and for the contract
> file saved with each model. In the contract file, we record the base model and
> the prompt format that the model expects.
> 
> For external, human-labeled tests on tasks outside these training categories, see
> the [public benchmarks guide](docs/PUBLIC_BENCHMARKS.md), which runs Bespoke-Nimble-9B
> and Jev on the same records from thirteen public subsets, starting with VitaminC.
> 
> 
> ## Updates
> 
> - On September 22, 2026, we fitted a temperature for Bespoke-Nimble-9B. With
>   this temperature, the probabilities better match how often the answers are
>   right. The model picks the same answers as before. Noul probabilities and
>   Score values do change, so if you compare them with a threshold, test the
>   threshold again. See [Probability temperature](#probability-temperature) and
>   [PR #7](https://github.com/bespokelabsai/nimble/pull/7).
> - On September 20, 2026, we published the 2,676 training examples and the 324
>   held-out examples for Bespoke-Nimble-9B. We had left them out of the first
>   release by mistake. See the [dataset guide](docs/DATASET.md) and
>   [PR #5](https://github.com/bespokelabsai/nimble/pull/5).
> - On September 19, 2026, we raised the prompt limit of the hosted API to 8,192
>   tokens for each question. The model was trained on prompts of up to 2,048
>   tokens, so shorter prompts are better tested. See the
>   [SGLang deployment guide](docs/MODAL_SERVING.md) and
>   [PR #4](https://github.com/bespokelabsai/nimble/pull/4).
> - On September 18, 2026, [Edgar Dyck](https://github.com/eddited17) added a
>   public benchmark suite. With it, you can run Bespoke-Nimble-9B and Jev on the
>   same records from 13 public subsets with human labels. The
>   [public benchmarks guide](docs/PUBLIC_BENCHMARKS.md) has the steps and the
>   results. See [PR #2](https://github.com/bespokelabsai/nimble/pull/2).
> 
> 
> ## Capabilities
> 
> We built Nimble in one day, so expect some rough edges. What Nimble can do comes
> from two sources: the first is the base model, Qwen3.5-9B, the second is our
> training data, which we curated for a few specific domains.
> 
> 
> ### What you can build
> 
> | Task | You define | You get back |
> | --- | --- | --- |
> | Route a request | The destinations and when each one applies | The chosen destination and the probability of each destination |
> | Check a condition | A yes or no question and the evidence | True or false, and the probability of each |
> | Apply a policy | The rules and the allowed outcomes | A typed decision based on the text you supply |
> | Rate an outcome | Ordered levels, each with clear criteria | The chosen level and the probability of each level |
> 
> You supply a context, which is the text to judge, and a schema. The schema must
> be flat, which means that it has no nested fields. Each field is an enum or a
> boolean. An enum field has a fixed list of string choices, and a boolean field
> is true or false.
> 
> Each allowed answer has a code that is one token long. The scorer reads the
> model's logits for these codes. Logits are the raw scores that the model gives
> to each token. The scorer turns the logits into probabilities with the softmax
> function. Our Python code then builds the output from these probabilities, so
> there is no generated JSON to parse. If a field is an ordered rating scale, your
> application can use the probabilities to calculate an expected level.
> 
> On a Mac, `ParallelScorer` processes the shared context once and then scores all
> the fields in parallel. The CUDA scorer scores each field on its own, with the
> full prompt each time. Both scorers return the typed output. They also return
> the logits and the probabilities of the candidate answers. Each field is scored
> separately, so one field cannot see the answer to another field.
> 
> 
> ### What you cannot build with the current release
> 
> 

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/bespokelabsai/nimble)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "bespokelabsai--nimble"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "bespokelabsai--nimble" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W39" AND file.name != "bespokelabsai--nimble"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/bespokelabsai--nimble");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "bespokelabsai--nimble" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "bespokelabsai" AND file.name != "bespokelabsai--nimble"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/bespokelabsai--nimble");
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
> const me = dv.page("Repos/bespokelabsai--nimble");
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
> const me = dv.page("Repos/bespokelabsai--nimble");
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
> const me = dv.page("Repos/bespokelabsai--nimble");
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
> const me = dv.page("Repos/bespokelabsai--nimble");
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

> **2026-09-24** — 首次收錄
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

- [[2026-09-24|2026-09-24]] — 首次收錄，1.7k stars
