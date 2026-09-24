---
repo: jaredpalmer/kev
url: https://github.com/jaredpalmer/kev
owner: jaredpalmer
owner_type: User
language: Python
license: Apache-2.0
description: "tiny Jev-like family of decision models built on top of Qwen3.5 you can train and run on your own"
homepage: ""
stars: 6236
stars_per_day: 1039
forks: 341
open_issues: 30
created: 2026-09-17
pushed_at: 2026-09-24
first_seen: 2026-09-22
week: "2026-W39"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: "kev-family"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-22
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-09-27"
contributor_count: 5
engagement: "low"
issue_close_rate: 50
repo_size_kb: 27159
readme_length: 9832
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-09-22"
star_history: "2026-09-22:2679,2026-09-23:4666,2026-09-24:6236"
tags:
  - github
  - "category/other"
  - "lang/python"
  - "topic/decision_model"
  - "topic/jev"
  - "topic/qwen3"
aliases:
  - "kev"
  - "jaredpalmer/kev"
---

# kev

**2.7k** stars · **670** stars/天 · 建立 4 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/jaredpalmer--kev");
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

`kev-family`

`decision-model` `jev` `qwen3`

> [!summary] 一句話摘要
> tiny Jev-like family of decision models built on top of Qwen3.5 you can train and run on your own

## 專案簡介

tiny Jev-like family of decision models built on top of Qwen3.5 you can train and run on your own

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/jaredpalmer--kev");
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
> const me = dv.page("Repos/jaredpalmer--kev");
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
| Forks | 133 |
| Open Issues | 3 |
| Issue 解決率 | 50% (3 closed) |
| 最後推送 | 2026-09-22 |
| 建立日期 | 2026-09-17 |
| Repo 大小 | 26.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jaredpalmer/kev) |
| Topics | `decision-model` `jev` `qwen3` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 88
>     "TypeScript" : 10
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jaredpalmer](https://github.com/jaredpalmer) | 206 |
> | [@bhimrazy](https://github.com/bhimrazy) | 1 |
> | [@TwelveNights](https://github.com/TwelveNights) | 1 |
> | [@ImgBotApp](https://github.com/ImgBotApp) | 1 |
> | [@Radexito](https://github.com/Radexito) | 1 |

**最新版本**：kev-family — Kev-0.8B, Kev-4B, Kev-9B (2026-09-20)

> [!info]- Release Notes
> The Kev family: **Kev-0.8B**, **Kev-4B**, **Kev-9B** — open decision models, all on Qwen3.5 bases. Typed questions in, calibrated probabilities out, one forward pass, no text generation. Each is a LoRA adapter (r=16) plus a pointer head on a frozen Qwen base; the base model downloads on first load.
> 
> **2026-09-21 update:** All three models received a short second training pass on generated examples (policy cases with explicit day counts; evidence-free cases trained toward a uniform answer). Locked test, out of domain: Kev-9B 0.837 → **0.852** (+1.8 pp [+0.8, +2.9]), Kev-4B 0.832 → **0.837**, Kev-0.8B 0.668 → **0.684**. The pre-delta weights are attached as `*-v7-base.tar.gz` and on the Hub at revision `v7-base`. Two opt-in serving settings: `KEV_TEMPERATURE=2.0` (calibration) and `KEV_DATE_FACTS=1` (day counts between dates in the state).
> 
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-21 ~ 2026-09-22）
> **活躍天數** 2 天 · **最新 commit** Fold modal_probe35.py into modal_app.py; the how-to lives in the kev-modal-study skill

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#28](https://github.com/jaredpalmer/kev/issues/28) | Getting kev to work with images ? | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Kev
> 
> Small Jev-like decision models you can train and run yourself.
> 
>   
>   
>   
>   
>   
>   
> 
> Kev is a family of small decision models built on Qwen3.5 and based on the architecture described in [Jev's Architecture Unmasked](https://archerhume.com/posts/jevs-architecture-unmasked). You can use the pretrained weights or train your own. The API matches TypeSafe's [System One](https://docs.typesafe.ai/api), so you can point their Python SDK at your local server.
> 
> 
> ## Quick Start
> 
> You'll need Python 3.12+ and [uv](https://docs.astral.sh/uv/).
> 
> ```bash
> git clone https://github.com/jaredpalmer/kev.git && cd kev
> uv sync --extra serve
> KEV_DTYPE=bf16 uv run --extra serve python -m kev.serve --run jaredpalmer/kev-4b --port 8009
> ```
> 
> This starts Kev-4B locally. The first run downloads the adapter and base model. `--run` also accepts a local checkpoint directory or a Hub revision, such as `jaredpalmer/kev-4b@qwen3` for the previous generation.
> 
> In another terminal, send it a ticket:
> 
> ```bash
> curl -s localhost:8009/v1/systemone -H 'content-type: application/json' -d '{
>   "state": "Shoes arrived two weeks late and in the wrong size. Also I see two charges on my card.",
>   "model": "kev-latest",
>   "questions": {
>     "department":  {"type": "choice", "instructions": "Which team should handle this?",
>                     "criteria": {"returns": "Exchanges, refunds, wrong or damaged items",
>                                  "shipping": "Delivery status, delays, lost packages",
>                                  "billing": "Charges, invoices, payment problems"}},
>     "escalate":    {"type": "noul",  "instructions": "Does this need urgent human attention?"},
>     "frustration": {"type": "score", "instructions": "How frustrated is the customer?",
>                     "criteria": ["Calm", "Frustrated", "Very angry"]}
>   }}'
> ```
> 
> Example response from Kev-4B, running in bf16 on an Apple M5:
> 
> ```json
> {
>   "model": "kev-latest",
>   "answers": {
>     "department":  { "type": "choice", "choice": "returns", "confidence": 0.21,
>                      "probabilities": { "returns": 0.47, "shipping": 0.28, "billing": 0.25 } },
>     "escalate":    { "type": "noul", "noul": 0.93 },
>     "frustration": { "type": "score", "score": 1.44, "confidence": 0.78,
>                      "legend": { "0": "Calm", "1": "Frustrated", "2": "Very angry" },
>                      "probabilities": { "0": 0.00, "1": 0.56, "2": 0.44 } }
>   },
>   "usage": { "input_tokens": 101, "output_tokens": 161 },
>   "latency_ms": 495
> }
> ```
> 
> The ticket mentions a return, a late delivery, and a billing problem, and the department probabilities say so. That is the point of getting probabilities back instead of a single label.
> 
> 
> ## Highlights
> 
> - 0.8B, 4B, and 9B models, with training code and evaluation data.
> - Yes/no (`noul`), multiple-choice (`choice`), and rating (`score`) questions in the same request.
> - Questions share the input text but can't read each other.
> - Runs on CUDA, ROCm, and Apple Silicon. The 4B and 9B models fit a 32 GB Mac using bf16; see [Serving Performance](#serving-performance) for what to expect on a Mac.
> - A web playground for trying your own inputs and checking how option order affects the answers. Or try Kev-4B and Kev-0.8B in the browser at [huggingface.co/spaces/jaredpalmer/kev](https://huggingface.co/spaces/jaredpalmer/kev), no install needed.
> 
> 
> ## API
> 
> 
> ### Python
> 
> The TypeSafe SDK is included in `uv sync --extra serve`:
> 
> ```python
> from typesafe_sdk import Choice, Noul, Score, TypeSafeClient
> 
> client = TypeSafeClient(
>     api_key="local",
>     base_url="http://127.0.0.1:8009",
>     model="kev-latest",
> )
> response = client.system_one(
>     state="I was charged twice. Please fix this ASAP.",
>     questions={
>         "billing": Noul(instructions="Is this ticket about billing?"),
>         "tone": Choice(
>             instructions="What is the customer's tone?",
>             criteria={"calm": None, "frustrated": None, "angry": None},
>         ),
>         "urgency": Score(
>             instructions="How urgent is this ticket?",
>             criteria=["can wait", "this week", "today"],
>         ),
>     },
> )
> print(response.nouls["billing"].noul)
> print(response.choices["tone"].choice)
> print(response.scores["urgency"].score)
> ```
> 
> 
> ### Playground
> 
> With the server still running, open another terminal. You'll need Node 20.9+:
> 
> ```bash
> cd playground
> npm install
> npm run dev -- -p 3001
> ```
> 
> Open [localhost:3001](http://localhost:3001), load a preset, and edit the text and questions. Press `⌘↵` to run it. "Packed vs separate" compares asking all questions at once with asking them one at a time. "Permute" runs a Choice question with six option orders. There are also presets for testing question isolation and fake delimiter tokens.
> 
> There's a [chess demo](http://localhost:3001/chess), too. The board is the input, legal moves are Choice options, and a Score question rates the position. You can play against Kev or let it play itself. Games are saved in `localStorage`.
> 
> 
> ## Models
> 
> Start with Kev-4B. Use Kev-9B when accuracy and calibration matter more than memory. Use Kev-0.8B if you need the smallest model. All three are built on Qwen3.5 bases with the same training data and settings.
> 
> | Model | Base | Accuracy: Trained Sources | Accuracy: New Sources | Brier: New Sources | Model Card |
> |---|---|---|---|---|---|
> | [Kev-0.8B](https://huggingface.co/jaredpalmer/kev-0.8b) | Qwen3.5-0.8B-Base | 0.825 / 0.834 | 0.652 / 0.684 | 0.499 / 0.460 | [Details](docs/model-cards/kev-0.8b.md) |
> | [Kev-4B](https://huggingface.co/jaredpalmer/kev-4b) | Qwen3.5-4B-Base | 0.872 / 0.871 | 0.797 / 0.837 | 0.299 / 0.255 | [Details](docs/model-cards/kev-4b.md) |
> | [Kev-9B](https://huggingface.co/jaredpalmer/kev-9b) | Qwen3.5-9B-Base | 0.872 / 0.874 | **0.822 / 0.852** | **0.286 / 0.237** | [Details](docs/model-cards/kev-9b.md) |
> | Jev | Hosted | 0.845 / – | 0.857 / – | 0.211 / – | – |
> 
> Each cell is **development / test**. "Trained sources" means held-out examples from the datasets used to train Kev. "New sources" means datasets and policy rule types Kev wasn't trained on. Every model was evaluated on the same development sets (`decision-v7`, `transfer-v4`) and the same test sets, which were read once per released checkpoint, after model selection. Lower Brier is better.
> 
> Kev-9B trails Jev by 3.5 points on the new-source development set (0.822 vs 0.857) and scores 0.852 on the test set, which Jev hasn't been run on. We don't know which datasets Jev was trained on, so this isn't a controlled comparison of the two architectures.
> 
> All three models were updated on 2026-09-21 with a short second training pass on generated examples: policy cases with explicit day counts, and cases whose deciding evidence was removed, trained toward a uniform answer. On the test set this moved Kev-9B from 0.837 to 0.852 (95% CI +0.8 to +2.9 points), Kev-4B from 0.832 to 0.837, and Kev-0.8B from 0.668 to 0.684. The previous weights are at revision `v7-base`. Details and costs are in the model cards and [PLAN.md](PLAN.md).
> 
> Probabilities are calibrated by default. Each checkpoint stores a temperature (about 2.1–2.4) fitted on its in-distribution development set, and the pointer head applies it when the model is loaded. It never changes an answer: on new sources Kev-9B's calibration error goes from 0.106 to 0.042 and its confident errors (wrong answers with probability ≥ 0.9) from 8.7% to 4.0%, about Jev's 3.7%, with accuracy identical. Set `KEV_TEMPERATURE=1.0` for the raw logits. The accuracy numbers in the table are the same either way; the Brier numbers are for the raw logits.
> 
> One optional setting: `KEV_DATE_FACTS=1` appends the number of days between any two absolute dates found in the state ("June 26, 2026 is 8 days before July 4, 2026"). Kev can't subtract dates reliably but it can use a stated day count: on the deadline policy questions Kev-9B goes from 0.80 to 0.90 (Jev 0.93). The table above doesn't use it.
> 
> All weights are in the [Kev collection](https://huggingface.co/collections/jaredp

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[ArasTey--lunel|ArasTey/lunel]]

[GitHub](https://github.com/jaredpalmer/kev)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "jaredpalmer--kev"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "jaredpalmer--kev" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W39" AND file.name != "jaredpalmer--kev"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/jaredpalmer--kev");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "jaredpalmer--kev" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "jaredpalmer" AND file.name != "jaredpalmer--kev"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/jaredpalmer--kev");
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
> const me = dv.page("Repos/jaredpalmer--kev");
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
> const me = dv.page("Repos/jaredpalmer--kev");
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
> const me = dv.page("Repos/jaredpalmer--kev");
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
> const me = dv.page("Repos/jaredpalmer--kev");
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

> **2026-09-22** — 首次收錄
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

- [[2026-09-24|2026-09-24]] — 再次上榜，6.2k stars
- [[2026-09-23|2026-09-23]] — 再次上榜，4.7k stars
- [[2026-09-22|2026-09-22]] — 首次收錄，2.7k stars
