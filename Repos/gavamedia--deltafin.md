---
repo: gavamedia/deltafin
url: https://github.com/gavamedia/deltafin
owner: gavamedia
owner_type: Organization
language: Python
license: NOASSERTION
description: "Run full Kimi K3 on a single device. And an OpenAI-compatible API server for local chat and coding agents."
homepage: ""
stars: 567
stars_per_day: 142
forks: 64
open_issues: 6
created: 2026-07-28
pushed_at: 2026-07-30
first_seen: 2026-08-01
week: "2026-W31"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-01
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-08-08"
contributor_count: 2
engagement: "medium"
issue_close_rate: 40
repo_size_kb: 755
readme_length: 9975
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-08-01"
star_history: "2026-08-01:567"
tags:
  - github
  - "category/other"
  - "lang/python"
  - org
  - "topic/kimi"
  - "topic/kimi_k3"
  - "topic/local_ai"
  - "topic/local_llm"
aliases:
  - "deltafin"
  - "gavamedia/deltafin"
---

# deltafin

**567** stars · **142** stars/天 · 建立 4 天前 · Python · NOASSERTION

```dataviewjs
const me = dv.page("Repos/gavamedia--deltafin");
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

`kimi` `kimi-k3` `local-ai` `local-llm`

> [!summary] 一句話摘要
> Run full Kimi K3 on a single device. And an OpenAI-compatible API server for local chat and coding agents.

## 專案簡介

Run full Kimi K3 on a single device. And an OpenAI-compatible API server for local chat and coding agents.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/gavamedia--deltafin");
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
> const me = dv.page("Repos/gavamedia--deltafin");
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
| Forks | 64 |
| Open Issues | 6 |
| Issue 解決率 | 40% (4 closed) |
| 最後推送 | 2026-07-30 |
| 建立日期 | 2026-07-28 |
| Repo 大小 | 755 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/gavamedia/deltafin) |
| Topics | `kimi` `kimi-k3` `local-ai` `local-llm` |

> [!info]- 主要依賴
> `requirements.txt` 中的核心套件：
> `numpy` `safetensors` `tiktoken` `ml_dtypes` `blobfile` `transformers` `einops` `tokenizers` `packaging` `gigatoken @ https://files.pythonhosted.org/packages/05/8c/89091815057ea41a1e81061704266de52ac12e5411bc66d5f1b33a3f85a8/gigatoken-0.10.0-cp310-abi3-macosx_11_0_arm64.whl#sha256` `gigatoken @ https://files.pythonhosted.org/packages/35/6f/d393a7735cbf775f612da4d0674f7ecc8900e0be4989fd46cbe23f650965/gigatoken-0.10.0-cp310-abi3-manylinux_2_17_aarch64.manylinux2014_aarch64.whl#sha256` `gigatoken @ https://files.pythonhosted.org/packages/e7/32/a0b3af6db26b3704224d3ad856ebadfdb6ed5d50210ab16ab9ad27b30673/gigatoken-0.10.0-cp310-abi3-manylinux_2_17_x86_64.manylinux2014_x86_64.whl#sha256`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 90
>     "C" : 4
>     "Objective-C++" : 3
>     "Metal" : 2
>     "Cuda" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@chrisringrose](https://github.com/chrisringrose) | 21 |
> | [@AdamTheCoderman](https://github.com/AdamTheCoderman) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-29 ~ 2026-07-30）
> **活躍天數** 2 天 · **最新 commit** Add idle-warmed exact server tokenization

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#15](https://github.com/gavamedia/deltafin/issues/15) | M5 Max / 128 GB full-local K3 profile (internal NVMe, int8 s | 3 | 1 |
> | [#13](https://github.com/gavamedia/deltafin/issues/13) | M3 Ultra 512GB testing | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> ```
>    ____       _ _         __ _
>         |  _ \  ___| | |_ __ _ / _(_)_ __
>         | | | |/ _ \ | __/ _` | |_| | '_ \
>         | |_| |  __/ | || (_| |  _| | | | |
>         |____/ \___|_|\__\__,_|_| |_|_| |_|
> ```
> 
> 
> ## 1. Install or upgrade
> 
> 
> ### New installation
> 
> Clone the repository and enter it first; every path below is relative to the
> Deltafin folder. The only real decision is step 3.
> 
> ```bash
> git clone https://github.com/gavamedia/deltafin.git
> cd deltafin
> 
> 
> ### An experiment in running [Kimi K3](https://huggingface.co/moonshotai/Kimi-K3) (2.8T parameters) on one local workstation
> 
> Deltafin is a small research project that runs a Mixture-of-Experts model far
> larger than the machine it sits on. It supports Apple Silicon macOS and
> x86-64/aarch64 Linux, automatically selecting MPS, CUDA or CPU for the resident
> model path and a qualified Metal, CUDA or CPU MXFP4 expert kernel. The
> maintainer-run exact-oracle reference is now **0.2660 token/s (3.76
> seconds/token median)** on a modest 64 GB M1 Max; that is one first-generation
> machine, not a ceiling for newer hardware. Speculative acceptance varies with
> the text, so the observed three-run range is reported below rather than hidden.
> 
> The README stays focused on installing and running the project. For the
> mechanisms, measurements, and fallback rules behind the speed work, see
> [How Deltafin's optimizations work](OPTIMIZATIONS.md).
> 
> One principle sits above every optimization: **speed must never come from
> reducing model quality**. Deltafin keeps all 16 routed experts and the full K3
> target as the sole authority for every emitted token. Small draft models may
> suggest work, but confidence and model selection can change only what K3
> verifies—not what is allowed to reach the output.
> 
> -brightgreen)
> 
> ---
> 
> 
> ### Configuration
> 
> Everything works with no configuration: Deltafin picks a preferred available
> device and the int8 spine when it has been built, and says what it chose at
> startup. These variables exist for overriding that:
> 
> | Variable | Default | Meaning |
> |---|---|---|
> | `K3_DEV` | auto | `mps` when available, then the first CUDA device visible to the process, otherwise `cpu`; accepts explicit `mps`, `cuda`, `cuda:N` or `cpu` |
> | `K3_MOE` | auto | `metal` on MPS; a native `cuda` candidate on CUDA; otherwise `cpu`. Optional GPU backends must pass their own ABI, shape and correctness checks or fall back to CPU |
> | `K3_GEMV_LIB` / `K3_BATCH_LIB` | platform default | override the native MXFP4 library paths (`.dylib` on macOS, `.so` on Linux) |
> | `K3_CUDA_MOE_LIB` | `tools/libcudamoe.so` | override the optional native CUDA library path |
> | `K3_CUDA_ARCH` | auto | add compiler-supported native CUDA images detected from installed GPUs while retaining a portable PTX fallback; accepts strict values such as `sm_89` or `sm_89,sm_120` for cross-builds |
> | `K3_CUDA_EXPERT_CACHE` | `auto` | maximum resident GPU experts; `auto` budgets from free VRAM at the first real route, after model allocations, while `0` keeps CUDA compute but disables residency |
> | `K3_CUDA_EXPERT_CACHE_RESERVE` | `auto` | VRAM kept outside the expert cache (`auto` is at least 2 GiB and 20% of free VRAM); accepts byte units or a percentage |
> | `K3_CUDA_INT8_DEQUANT` | `auto` | qualified one-pass CUDA dequant for int8 resident-spine tensors; `off` retains the selected PyTorch expression |
> | `K3_SPINE` | auto | `int8` when built (recommended), else `bf16`; former 4/6-bit mixed-spine modes are rejected by the quality guard |
> | `K3_INT8_LM_HEAD` | `auto` | packed row-int8 output head on a qualified native backend; automatic on MPS, forceable elsewhere, with the first real head call guarded by a dense fallback |
> | `K3_INT8_KDA_QKV` | `0` | experimental packed row-int8 bundle for KDA Q/K/V/G/F-A/B; one real MPS streamed-weight sequence has passed exactly, while every backend remains capability-gated with a dense fallback |
> | `K3_KDA_RECUR` | `device` | keep the KDA recurrence on the selected CPU, CUDA or MPS device; `cpu` preserves the historical MPS-to-CPU experiment and legacy `mps` is accepted as an alias for `device` |
> | `K3_MLA_QUERY_ALIAS` | `0` | opt-in T=1 eager-MLA zero-copy query view; source, provider, inference and layout gates retain the established path on any mismatch; removes a redundant allocation, with no end-to-end speed claim yet ([details](OPTIMIZATIONS.md#zero-copy-mla-query-view-at-single-token-decode)) |
> | `K3_SHORTCONV` | `auto` | use the portable decode-time four-tap multiply/sum kernel on MPS, CUDA and CPU; `conv1d` remains forceable for backend retesting |
> | `K3_UAG_DRAFT` | `auto` | load the local, pinned Qwen3 hybrid on the measured MPS path when both models are installed, with either model usable alone; every proposal is re-tokenized and target-verified by K3; `on` enables CUDA/CPU testing and `off` disables it |
> | `K3_UAG_MODEL` | auto | override the wide assistant directory; automatic selection prefers `k3-draft-qwen3-1.7b-base`, then an existing 0.6B directory; hybrid eligibility comes from the validated model config rather than the folder name, and loading stays local-only, safetensors-only and `trust_remote_code=False` |
> | `K3_UAG_PROBE_MODEL` | auto | override the 0.6B admission assistant used alongside the default 1.7B model; `off` keeps the selected single-model path |
> | `K3_UAG_PROBE_DRAFTS` / `K3_UAG_MAX_DRAFTS` | `2` / `8` | exact adaptive verifier widths, capped at the capability-tested nine target rows |
> | `K3_UAG_ASSISTANT_TOKENS` | `20` | hard ceiling for assistant-side tokens per proposal; the runtime first uses a smaller width-derived budget and retries at this ceiling only when translation needs it |
> | `K3_UAG_CONFIDENCE` | `0.3` | stop a wide proposal before the assistant's first low-confidence token; the two-draft admission probe is always verified directly, while an empty wide proposal runs one ordinary K3 token and retries at the next position |
> | `K3_SPEC` | `1` | master switch for target-verified universal and n-gram speculation |
> | `K3_SPEC_ROLLBACK` | `replay` | replay captured KDA inputs and truncate MLA for partial n-gram drafts; partial universal drafts always restore and narrow-rerun, while `rerun` selects that conservative path for n-grams too |
> | `K3_TEMPLATES` | `1` | template-layer buffer reuse |
> | `K3_PRELOAD` / `K3_PREFETCH` | `1` | background layer loading / expert prefetch |
> | `K3_GEMV_THREADS` | auto | native CPU MXFP4 workers: up to 4 effective CPUs on macOS and 8 on Linux, respecting affinity and cgroup quota; override to retune a specific host |
> | `K3_GEMV_AUTOTUNE` | `0` | experimental one-shot CPU worker-width calibration on the first complete expert set; enables a width only when two exact trials agree on at least a 5% gain, and skips under load or when Metal/CUDA is selected ([details](OPTIMIZATIONS.md#live-cpu-worker-width-calibration)) |
> | `K3_METAL_POSITION_BATCH` | `0` | MPS/Metal-specific exact opt-in T>1 position-major MoE; measured +2.0% on accepted speculative passes and should be retuned per Mac |
> | `K3_MOE_TOP_K` | `16` | must remain the model's full 16 routed experts; startup rejects any lower value rather than exposing a quality/speed trade |
> | `K3_CPU_MOE_BATCH` | `auto` | exact persistent CPU MXFP4 worker ring; padded counters measured +3.6% at eight threads |
> | `K3_ASYNC_CACHE_WRITE` | `0` | opt-in cache-miss write overlap; `K3_CACHE_WRITE_QUEUE` (4) bounds outstanding buffers and `K3_CACHE_WRITE_WORKERS` (1) is retunable per host |
> | `K3_APPROX` / `K3_DTYPE` | `0` / `fp32` | the supported runtime requires fp32 activation numerics and rejects former approximate/fp16 settings |
> | `K3_RAM_GB` / `K3_PIN_LAYERS` | auto | override the RAM budget |
> | `K3_PROFILE` | `0` | per-phase timing for each pass |
> | `K3_TRACE` | `off` | `buffered` writes one router-trace block per pass; `sync` writes each layer immediately |
> | `DELTAFIN_ROOT` | repo root | where caches and weights live |
> | `K3_HF_HOST` / `K3_HF_PATH` | Hugging Face | point expert fetching at a mirror |
> | `K3_SERVER

## 延伸閱讀

相關專案：[[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[QwenAudio--qwen-audio-agent|QwenAudio/qwen-audio-agent]] · [[WilonityXYZ--Wilonity|WilonityXYZ/Wilonity]] · [[bashalarmistalt--decimen-optical-transfer|bashalarmistalt/decimen-optical-transfer]] · [[xdash--FDE-the-Guidance-Book-of-Forward-Deployed-Engineer|xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer]] · [[xikhar--persona|xikhar/persona]] · [[yc-software--qm|yc-software/qm]]

[GitHub](https://github.com/gavamedia/deltafin)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "gavamedia--deltafin"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "gavamedia--deltafin" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W31" AND file.name != "gavamedia--deltafin"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/gavamedia--deltafin");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "gavamedia--deltafin" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "gavamedia" AND file.name != "gavamedia--deltafin"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/gavamedia--deltafin");
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
> const me = dv.page("Repos/gavamedia--deltafin");
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
> const me = dv.page("Repos/gavamedia--deltafin");
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
> const me = dv.page("Repos/gavamedia--deltafin");
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
> const me = dv.page("Repos/gavamedia--deltafin");
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

> **2026-08-01** — 首次收錄
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

- [[2026-08-01|2026-08-01]] — 首次收錄，567 stars
