---
repo: FareedKhan-dev/kimi-k3-in-c
url: https://github.com/FareedKhan-dev/kimi-k3-in-c
owner: FareedKhan-dev
owner_type: User
language: C
license: Apache-2.0
description: "A 2.78-trillion-parameter Kimi K3 running inference on a single CPU in 8.24 GB of RAM. Portable C99: no BLAS, no framework, no GPU."
homepage: "https://medium.com/@fareedkhandev/building-kimi-k3-in-c-to-run-a-2-8t-model-on-consumer-hardware-a5792cbf3b59"
stars: 2889
stars_per_day: 578
forks: 483
open_issues: 2
created: 2026-08-01
pushed_at: 2026-08-06
first_seen: 2026-08-04
week: "2026-W32"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: "v0.1.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-04
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-08-10"
contributor_count: 2
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 31177
readme_length: 10000
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-08-04"
star_history: "2026-08-04:1319,2026-08-05:2097,2026-08-06:2612,2026-08-07:2889"
tags:
  - github
  - "category/other"
  - "lang/c"
  - "topic/avx2"
  - "topic/c99"
  - "topic/cpu_inference"
  - "topic/deep_learning"
  - "topic/from_scratch"
aliases:
  - "kimi-k3-in-c"
  - "FareedKhan-dev/kimi-k3-in-c"
---

# kimi-k3-in-c

**1.3k** stars · **660** stars/天 · 建立 2 天前 · C · Apache-2.0

```dataviewjs
const me = dv.page("Repos/FareedKhan-dev--kimi-k3-in-c");
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

`v0.1.0`

`avx2` `c99` `cpu-inference` `deep-learning` `from-scratch` `inference-engine` `kimi-k3` `linear-attention` `llm` `llm-inference` `machine-learning` `memory-efficient` `mixture-of-experts` `moe` `mxfp4` `quantization` `simd` `systems-programming` `transformer` `zero-dependencies`

> [!summary] 一句話摘要
> A 2.78-trillion-parameter Kimi K3 running inference on a single CPU in 8.24 GB of RAM. Portable C99: no BLAS, no framework, no GPU.

## 專案簡介

A 2.78-trillion-parameter Kimi K3 running inference on a single CPU in 8.24 GB of RAM. Portable C99: no BLAS, no framework, no GPU.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/FareedKhan-dev--kimi-k3-in-c");
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
> const me = dv.page("Repos/FareedKhan-dev--kimi-k3-in-c");
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
| Forks | 206 |
| Open Issues | 5 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-08-01 |
| 建立日期 | 2026-08-01 |
| 官方網站 | [Link](https://medium.com/@fareedkhandev/building-kimi-k3-in-c-to-run-a-2-8t-model-on-consumer-hardware-a5792cbf3b59) |
| Repo 大小 | 30.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/FareedKhan-dev/kimi-k3-in-c) |
| Topics | `avx2` `c99` `cpu-inference` `deep-learning` `from-scratch` `inference-engine` `kimi-k3` `linear-attention` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C" : 64
>     "Python" : 30
>     "Shell" : 4
>     "Makefile" : 1
>     "CMake" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@FareedKhan-dev](https://github.com/FareedKhan-dev) | 27 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 1 |

**最新版本**：v0.1.0 (2026-08-02)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-01 ~ 2026-08-01）
> **活躍天數** 1 天 · **最新 commit** ci: bump actions/checkout from 4 to 7

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#7](https://github.com/FareedKhan-dev/kimi-k3-in-c/issues/7) | Can we have one for Qwen 3.8 27B also! (weights will be avai | 0 | 0 |
> | [#5](https://github.com/FareedKhan-dev/kimi-k3-in-c/issues/5) | ./download-model.sh ~/k3model `bug` | 0 | 0 |
> | [#3](https://github.com/FareedKhan-dev/kimi-k3-in-c/issues/3) | Support for Quantized / Storage-Efficient Kimi K3 Checkpoint `enhancement` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> kimi-k3-in-c
> 
> A 2.78-trillion-parameter model. One CPU. 8 GB of RAM.
> 
> Kimi K3 inference in portable C99.No BLAS. No framework. No GPU.
> 
> 2.78Tparameters
> 1.56 TBcheckpoint on disk
> 8.24 GBpeak RSS, measured
> 176 KBthe whole engine
> 0GPUs
> 
> ```console
> $ ./bin/k3 ~/k3model --trunk ~/k3trunk --preset laptop \
>            --tok ~/k3model --prompt "The capital of France is" --gen 8 --incremental
> 
> --- generated text ---
>  Paris.",
> +            "The Eiffel
> ----------------------
> 8 tokens in 261.5 s, 32.69 s/token average
> PEAK RSS for the whole run: 8.24 GB
> ```
> 
> Slow, and answering correctly, in 8.24 GB, from a checkpoint of 1.56 TB. This is a base
> model, so what follows " Paris." is a continuation rather than a reply; there is no chat
> template. Give it more memory and the answer does not change, only the clock:
> 
> ```console
> $ ./bin/k3 ~/k3model --trunk ~/k3trunk --preset server \
>            --tok ~/k3model --prompt "def fibonacci(n):" --gen 28 --incremental
> 
> --- generated text ---
>     if n  [prompt] [memory] [generation] [diagnostics]
> ```
> 
> `` is the directory holding the `.safetensors` shards. It is required for any
> run, but `--help`, `--version` and `--list-presets` work without it:
> 
> ```bash
> ./bin/k3 --help
> ./bin/k3 --version
> ./bin/k3 --list-presets
> ```
> 
> 
> ### Worked examples
> 
> ```bash
> 
> ## The machine, and what it assumes
> 
> Every measurement here comes from one workstation: a two-socket AMD EPYC 7763 with 124
> cores and no SMT, 228 GB of RAM, and 3.2 TB of NVMe. It also has four NVIDIA L40 GPUs,
> which sat completely idle for the entire campaign, because this engine has no GPU path.
> 
> ```text
> --- ISA (note: AVX2 present, AVX-512 ABSENT) ---
> avx avx2 fma sse4_2
> 
> --- memory ---
> Mem:           228Gi       5.1Gi       207Gi       3.1Mi        18Gi       223Gi
> MemTotal:       239308464 kB
> MemAvailable:   233961008 kB
> Hugepagesize:       2048 kB
> ```
> 
> There is **no AVX-512**. The engine needs AVX2 and FMA and nothing more, the instruction
> set on any desktop CPU from the last decade.
> 
> The storage numbers matter more than the CPU numbers, and one runs against expectation.
> 
> ```text
> --- storage bandwidth, measured ---
> O_DIRECT cold : 3.2 GB/s     (dd bs=4M iflag=direct after drop_caches)
> buffered warm : 2.3 GB/s
> engine, trunk : 5373-6064 MB/s sustained during runs
> NOTE O_DIRECT is FASTER than buffered here. That is the opposite of the usual
> expectation, and it is why the engine opens the trunk O_DIRECT.
> ```
> 
> Reading with `O_DIRECT`, bypassing the page cache entirely, is **faster** here than
> reading through it. That single measurement decided the whole I/O design.
> 
> One piece of hygiene, because a loaded machine is easy to measure badly:
> 
> ```text
> --- measurement hygiene ---
> unattended-upgrades: STOPPED and DISABLED before measurement (was using ~63% of a
>   core during the smoke run).
> apt-daily.timer and apt-daily-upgrade.timer: DISABLED
> ```
> 
> A background package updater eating most of a core moves a timing by more than most
> optimisations do, so it goes off before anything is measured.
> 
> How much memory does the engine actually need? Multiplying config values by hand gives the
> wrong answer in an instructive way, which is why `tools/budget.py` exists:
> 
> ```python
> 
> ### Prompt options
> 
> Exactly one of these is required. Passing none, or more than one, is a usage error
> (exit 2).
> 
> | flag | argument | |
> |---|---|---|
> | `--prompt` | `TEXT` | tokenize TEXT and run it. **Requires `--tok`.** |
> | `--prompt-file` | `PATH` | tokenize the file's bytes. **Requires `--tok`.** Preferred for anything non-ASCII: the shell re-encodes `argv`, whereas a file is read verbatim |
> | `--ids` | `1,2,3` | token ids directly. No tokenizer is loaded at all, so this works on a machine with no tokenizer files. The reproducible channel the tests use |
> 
> ```bash
> 
> ### Memory options
> 
> | flag | argument | default | |
> |---|---|---|---|
> | `--preset` | `NAME` | none | `laptop` · `desktop` · `workstation` · `server` · `max`. Sets both budgets below |
> | `--trunk` | `DIR` | off | the packed trunk directory from step 5. **This is what enables streaming.** Without it the trunk loads fully resident, around 113.5 GB |
> | `--trunk-gb` | `X` | 16 | budget for pinned layers plus the streaming ring |
> | `--cache-gb` | `X` | 64 | budget for the routed-expert LRU cache |
> 
> `--preset` and the two `-gb` flags set the same two numbers, so a preset is just a
> shorthand. Order matters if you mix them: a later flag wins, so
> `--preset server --cache-gb 40` gives you the server trunk budget with a 40 GB cache.
> 
> > **`--preset` without `--trunk` does nothing useful.** Every preset assumes the trunk is
> > streamed. Omit `--trunk` and the engine loads all 113.5 GB resident regardless of the
> > budget you asked for.
> 
> 
> ### Generation options
> 
> | flag | argument | default | |
> |---|---|---|---|
> | `--gen` | `N` | 8 | tokens to generate. Ceiling 4096; prompts may be up to 32768 tokens |
> | `--incremental` | none | off | carry the KV cache and the recurrent state between tokens instead of re-running the whole prefix |
> | `--tok` | `DIR` | none | directory holding `tiktoken.model` and `tokenizer_config.json` |
> 
> **Pass `--incremental` for any generation of length.** Without it every step re-runs the
> entire prefix, which is *O(T²)*; with it, step 0 pays for the prompt and every later step
> costs the same fixed amount. Both paths are gated on producing identical tokens, so this
> is a pure speed choice.
> 
> 
> ### Diagnostic options
> 
> | flag | argument | |
> |---|---|---|
> | `--config` | `PATH` | model config; defaults to `/config.json` |
> | `--layers` | `N` | bind only the first N layers, for partial shard sets |
> | `--out` | `FILE` | JSON results (default `k3_run.json`) |
> | `--dump-logits` | `PATH` | float32 logits for the first step, for elementwise comparison |
> | `--dump-cache-trace` | `DIR` | writes `expert_hist.json` and `expert_trace.bin`, which `tools/sim_cache.py` replays |
> 
> 
> # Elementwise logit comparison against the PyTorch reference.
> ./bin/k3 ~/k3model --trunk ~/k3trunk --preset server \
>          --ids 3,4,5,6,7 --gen 1 --dump-logits /tmp/c_logits.bin
> python3 tools/cmp_logits.py /tmp/c_logits.bin ref_logits.json
> 
> 
> ## Why the trunk is not quantised
> 
> The trunk is 108.81 GB of bfloat16. Quantising it to int8 would halve that, and to int4
> would quarter it. Every other engine of this shape offers a bit-width knob. This one has
> exactly two weight types and no knob at all:
> 
> ```c
> enum { K3_WF32 = 0, K3_WBF16 = 1 };
> ```
> 
> The reason is that the cost was measured. The study sampled 31 attention tensors from the
> released checkpoint over HTTP range reads, 384 rows each, quantised with symmetric per-row
> scaling.
> 
> ```text
>   type   tensor                      int8 mean  int4 mean    ratio
>   ------------------------------------------------------------------
>   KDA    L13.o_proj                    0.01188    0.21122    17.8x
>   MLA    L3.kv_b_proj                  0.00736    0.13355    18.2x
>   MLA    L11.o_proj                    0.01399    0.24612    17.6x
>   ------------------------------------------------------------------
>   MEAN over KDA-layer tensors          0.01046    0.18746    17.9x  (n=2)
>   MEAN over MLA-layer tensors          0.00948    0.17154    18.1x  (n=18)
>   MEAN over ALL sampled tensors        0.00961    0.17383    18.1x  (n=31)
> ```
> 
> Int8 costs about one percent and int4 about seventeen, a ratio of 18 that holds across every
> tensor sampled. And the mean understates the damage, because the tail is much worse.
> 
> The worst individual rows at int4 reach 45 percent, 56 percent and **65 percent** relative
> error. Those are not rounding artefacts.
> 
> There is also a strong hint from the model authors. The technical report says the experts
> are MXFP4 with quantisation-aware training, "while all non-expert components remain in
> higher precision". That list of non-expert components is exactly this trunk. It was
> deliberately not quantised, and it was never trained to tolerate four bits.
> 
> A lossless stream costs seconds per token, and those seconds are recoverable by giving the
> engine more RAM,

## 延伸閱讀

相關專案：[[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]] · [[QwenAudio--qwen-audio-agent|QwenAudio/qwen-audio-agent]] · [[WilonityDev--WilonityLoader|WilonityDev/WilonityLoader]] · [[WilonityXYZ--Wilonity|WilonityXYZ/Wilonity]] · [[bashalarmistalt--decimen-optical-transfer|bashalarmistalt/decimen-optical-transfer]]

[GitHub](https://github.com/FareedKhan-dev/kimi-k3-in-c) · [官方網站](https://medium.com/@fareedkhandev/building-kimi-k3-in-c-to-run-a-2-8t-model-on-consumer-hardware-a5792cbf3b59)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "FareedKhan-dev--kimi-k3-in-c"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C" AND file.name != "FareedKhan-dev--kimi-k3-in-c" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W32" AND file.name != "FareedKhan-dev--kimi-k3-in-c"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/FareedKhan-dev--kimi-k3-in-c");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "FareedKhan-dev--kimi-k3-in-c" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "FareedKhan-dev" AND file.name != "FareedKhan-dev--kimi-k3-in-c"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/FareedKhan-dev--kimi-k3-in-c");
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
> const me = dv.page("Repos/FareedKhan-dev--kimi-k3-in-c");
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
> const me = dv.page("Repos/FareedKhan-dev--kimi-k3-in-c");
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
> const me = dv.page("Repos/FareedKhan-dev--kimi-k3-in-c");
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
> const me = dv.page("Repos/FareedKhan-dev--kimi-k3-in-c");
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

> **2026-08-04** — 首次收錄
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

- [[2026-08-07|2026-08-07]] — 再次上榜，2.9k stars
- [[2026-08-06|2026-08-06]] — 再次上榜，2.6k stars
- [[2026-08-05|2026-08-05]] — 再次上榜，2.1k stars
- [[2026-08-04|2026-08-04]] — 首次收錄，1.3k stars
