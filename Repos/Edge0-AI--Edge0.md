---
repo: Edge0-AI/Edge0
url: https://github.com/Edge0-AI/Edge0
owner: Edge0-AI
owner_type: Organization
language: Python
license: Apache-2.0
description: ""
homepage: ""
stars: 1090
stars_per_day: 545
forks: 88
open_issues: 7
created: 2026-09-08
pushed_at: 2026-09-11
first_seen: 2026-09-11
week: "2026-W37"
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
last_reviewed: 2026-09-11
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-09-14"
contributor_count: 4
engagement: "low"
issue_close_rate: 0
repo_size_kb: 1334
readme_length: 9751
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-09-11"
star_history: "2026-09-11:1090"
tags:
  - github
  - "category/other"
  - "lang/python"
  - org
aliases:
  - "Edge0"
  - "Edge0-AI/Edge0"
---

# Edge0

**1.1k** stars · **545** stars/天 · 建立 2 天前 · Python · Apache-2.0

```dataviewjs
const me = dv.page("Repos/Edge0-AI--Edge0");
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
> No description

## 專案簡介

No description available.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Edge0-AI--Edge0");
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
> const me = dv.page("Repos/Edge0-AI--Edge0");
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
| Forks | 88 |
| Open Issues | 7 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-09-11 |
| 建立日期 | 2026-09-08 |
| Repo 大小 | 1.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Edge0-AI/Edge0) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@linyubupa](https://github.com/linyubupa) | 42 |
> | [@Ali-CHUA](https://github.com/Ali-CHUA) | 3 |
> | [@Alichua](https://github.com/Alichua) | 2 |
> | [@ahrazzle](https://github.com/ahrazzle) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-10 ~ 2026-09-11）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #10 from Edge0-AI/fix/mlx-0.30.6-nax-a18

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#11](https://github.com/Edge0-AI/Edge0/issues/11) | edge0-35b: serve collapses to "!" output from the third requ | 0 | 0 |
> | [#8](https://github.com/Edge0-AI/Edge0/issues/8) | Garbled/incoherent output from edge0-8b and edge0-35b on App | 0 | 1 |
> | [#5](https://github.com/Edge0-AI/Edge0/issues/5) | Thank you for creating this model. How do I run it on my pho | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # edge0
> 
> **An open-source streaming MoE inference framework — SSD expert offload + Recover-LoRA + prerouter routing prediction.**
> 
> [](https://huggingface.co/Edge0/Edge0-35B-A3B-preview)
> [](https://huggingface.co/Edge0/Edge0-8B-A1B-preview)
> [](https://github.com/Edge0-AI/Edge0)
> [](LICENSE)
> 
> English | [中文](README_zh.md)
> 
> **edge0** is an open-source streaming MoE inference framework. It
> generalizes the production-proven recipe — **SSD expert offload +
> Recover-LoRA + prerouter routing prediction** — into an extensible
> framework. The backend is isolated by design: the current MLX backend
> runs on Apple Silicon, and additional platforms (CUDA, …) plug into the
> same core abstractions.
> 
> Two model tiers ship with the framework. Each tier is an end-to-end
> release: the released checkpoint, the trained LoRA adapters, and the
> trained prerouter heads work together as one unit.
> 
> | Tier | Released checkpoint | Inference profile |
> |---|---|---|
> | `edge0-35b` | [`Edge0/Edge0-35B-A3B-preview`](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) | 4-bit, 40 layers, 256 experts, prerouter K=4 |
> | `edge0-8b` | [`Edge0/Edge0-8B-A1B-preview`](https://huggingface.co/Edge0/Edge0-8B-A1B-preview) | 4-bit, 24 layers, 128 experts, prerouter K=8 |
> 
> Both checkpoints are built on open sparse-MoE base models (Qwen3.5-MoE
> 35B-A3B and the Ling 3.0 bailing hybrid respectively) and ship with the
> LoRA and prerouter training done for this framework — the adapter files
> are co-located with each checkpoint and load automatically, so
> `edge0 serve ` runs the trained pipeline out of the box.
> 
> 
> ## Quick start
> 
> 
> ### 1) Install
> 
> ```bash
> 
> # quick demo
> edge0 demo edge0-35b
> 
> 
> ### Python API
> 
> ```python
> from edge0 import AutoEngine
> from edge0.server.chat import ChatMessage, ChatRequest, ChatSession
> 
> engine = AutoEngine.from_pretrained("/path/to/model")  # tier auto-detected
> req = ChatRequest(
>     model=engine.name,
>     messages=[ChatMessage(role="user", content="Hello!")],
>     max_tokens=64,
> )
> tokens, meta = ChatSession(engine, req).run()
> print(engine._tok.decode(tokens))
> engine.close()   # release mmaps / expert cache
> ```
> 
> `examples/demo.py` is the same minimal walkthrough (`edge0 demo` runs
> this exact path).
> 
> 
> ## Benchmark
> 
> Measured with `examples/bench.py` (3.3k-token prompt prefill → 10 sampled
> warmup steps → 200 timed sampled decode tokens, 2 runs per tier):
> 
> | Tier | Decode speed | Prefill throughput (cold / warm)* | Peak active memory** | Test machine |
> |---|---|---|---|---|
> | `edge0-35b` | 14.9–17.7 tok/s | 113 / 140 tok/s | 2.9 GiB | Mac mini M4 Pro, 24 GB |
> | `edge0-8b` | 23.9–25.3 tok/s | 500 / 1428 tok/s | 1.0 GiB | Mac mini M4 Pro, 24 GB |
> 
> *Cold = first request after process start (expert weights fault in from
> SSD); warm = subsequent requests (page cache resident). Prefill numbers
> are throughput over a ~3.3k-token prompt (`BENCH_LONG=1`).*
> 
> **Peak active memory at short contexts (MLX allocator peak; expert weights
> stream from SSD via mmap and are not resident). Long contexts add KV
> cache: ~3.3 GiB on `edge0-8b` at 3.3k tokens.*
> 
> Reproduce:
> 
> ```bash
> python examples/bench.py edge0-35b    # via $EDGE0_35B_MODEL
> python examples/bench.py edge0-8b    # via $EDGE0_8B_MODEL
> ```
> 
> 
> ## Requirements
> 
> - **OS / hardware**: the MLX backend runs on macOS with Apple Silicon
>   (M1/M2/M3/M4). The CUDA backend is on the roadmap — no other
>   platforms are supported yet.
> - **Python**: 3.10+ (3.12 recommended).
> - **MLX**: `mlx==0.30.6` / `mlx-metal==0.30.6` with `mlx-lm==0.31.0` (see
>   `pyproject.toml`). Garbled, mixed-language output on Apple A18 / A18 Pro
>   means an older `mlx`: `pip install 'mlx==0.30.6' 'mlx-metal==0.30.6'`
>   ([#8](https://github.com/Edge0-AI/Edge0/issues/8)).
> - **Memory**: ~2.9 GB peak active memory for `edge0-35b`, ~1.0 GB for
>   `edge0-8b` (short contexts; see [Benchmark](#benchmark)). Add
>   headroom for the OS, tokenizer, and long-context KV growth.
> - **Disk**: the 4-bit checkpoints are ~23 GB (`edge0-35b`) and ~4.2 GB
>   (`edge0-8b`); expert weights are mmapped and read on demand, they are
>   not loaded into RAM up front.
> 
> 
> ## Design
> 
> - **transformers-style usage**: `AutoModel` / `AutoConfig` / `AutoEngine`
>   resolve the tier from the model name;
> - **Backend isolation**: all MLX code lives under `edge0/backends/mlx/`;
>   the core logic (model specs, prerouter, streaming expert pool, server)
>   depends only on the backend facade (`edge0/backends/base.py`), so a new
>   backend implements the same facade (`backends/cuda/` is a reserved
>   slot) with zero changes to core code;
> - **Adapters as safetensors**: LoRA and prerouter weights are
>   `.safetensors` files with provenance metadata (source, version, owner
>   layers), resolved from the model directory or `artifacts/`;
> - **Model + adapters in one directory**: a model directory holds both
>   the base checkpoint (`config.json` / `model*.safetensors` / tokenizer)
>   and that model's adapters; upgrading adapters swaps adapter
>   files only — the base stays read-only and is never merged.
> 
> 
> ## Core mechanisms
> 
> - **SSD expert offload**: expert weights are streamed from storage on
>   demand; peak memory is bounded by the active set, not the parameter
>   count.
> - **Prerouter**: a trained head predicts expert routing one step
>   ahead, so expert loads overlap the forward pass instead of stalling
>   it — **up to +59%** decode throughput; the gain grows with storage
>   latency, model size, and routed width *K*.
> - **Recover-LoRA**: the int4 base is frozen and LoRA adapters are
>   trained by distillation from the FP teacher, recovering most of the
>   quantization loss at 4-bit (see [Quality](#quality)).  Adapters stay
>   unmerged: one read-only base serves multiple adapter sets.
> 
> 
> # Python >= 3.10; the MLX backend requires macOS with Apple Silicon
> python3.12 -m venv .venv && .venv/bin/pip install -e '.[dev,fetch]'
> ```
> 
> 
> ### 2) Download a model
> 
> The two tiers are published on Hugging Face — each repo bundles the
> base checkpoint and the trained LoRA + prerouter adapters in **one
> directory**, so a single download is a ready-to-run model:
> 
> - [`Edge0/Edge0-35B-A3B-preview`](https://huggingface.co/Edge0/Edge0-35B-A3B-preview) (~23 GB)
> - [`Edge0/Edge0-8B-A1B-preview`](https://huggingface.co/Edge0/Edge0-8B-A1B-preview) (~4.2 GB)
> 
> ```bash
> 
> # with the repo's helper (defaults to the two repos above):
> .venv/bin/python scripts/fetch_models.py --tier edge0-35b --target-dir models
> .venv/bin/python scripts/fetch_models.py --tier edge0-8b --target-dir models
> 
> 
> # or directly with the CLI:
> .venv/bin/huggingface-cli download Edge0/Edge0-35B-A3B-preview     --local-dir models/edge0-35b
> .venv/bin/huggingface-cli download Edge0/Edge0-8B-A1B-preview     --local-dir models/edge0-8b
> ```
> 
> Either way you end up with a directory like:
> 
> ```
> models/edge0-35b/
> ├── config.json, model-*.safetensors, tokenizer files   # base checkpoint
> ├── lora_edge0_35b.safetensors          # trained LoRA adapters
> └── prerouter_edge0_35b.safetensors     # trained prerouter heads
> ```
> 
> 
> ### 3) Point edge0 at it
> 
> Tier names resolve to local directories via environment variables
> (where you put the download is up to you):
> 
> ```bash
> export EDGE0_35B_MODEL=$PWD/models/edge0-35b
> export EDGE0_8B_MODEL=$PWD/models/edge0-8b
> ```
> 
> Or skip the env vars entirely and pass the directory directly — the
> tier is auto-detected from the checkpoint's `config.json`:
> 
> ```bash
> edge0 demo models/edge0-35b
> edge0 serve models/edge0-8b
> ```
> 
> 
> ### 4) Run
> 
> ```bash
> 
> # serve (OpenAI-compatible /v1/chat/completions)
> edge0 serve edge0-35b
> ```
> 
> ```bash
> curl http://127.0.0.1:8000/v1/chat/completions \
>   -H 'Content-Type: application/json' \
>   -d '{"messages":[{"role":"user","content":"Hello!"}],"max_tokens":32}'
> 
> 
> # 5) One-shot chat (pass --max-new to cap length; add --show-thinking to
> 
> #    print the model's reasoning block too)
> edge0 chat edge0-35b --prompt "Explain streaming inference in one sentence."
> ```
> 
> `python -m edge0 ...` is equivalent to `edge0 ...`.
> 
> 
> ### Models and adapters
> 
> - **Checkpoint**: the original model directory (`config.json`,
>   `model*.

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/Edge0-AI/Edge0)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Edge0-AI--Edge0"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "Edge0-AI--Edge0" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W37" AND file.name != "Edge0-AI--Edge0"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Edge0-AI--Edge0");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Edge0-AI--Edge0" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Edge0-AI" AND file.name != "Edge0-AI--Edge0"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Edge0-AI--Edge0");
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
> const me = dv.page("Repos/Edge0-AI--Edge0");
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
> const me = dv.page("Repos/Edge0-AI--Edge0");
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
> const me = dv.page("Repos/Edge0-AI--Edge0");
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
> const me = dv.page("Repos/Edge0-AI--Edge0");
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

> **2026-09-11** — 首次收錄
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

- [[2026-09-11|2026-09-11]] — 首次收錄，1.1k stars
