---
repo: sybil-solutions/inference-optimisation-skill
url: https://github.com/sybil-solutions/inference-optimisation-skill
owner: sybil-solutions
owner_type: Organization
language: Python
license: MIT
description: "Agent skill for hill-climbing local LLM serving speed (decode, speculative decoding, prefill, KV, startup, TTFT) on any hardware and quantization"
homepage: ""
stars: 1167
stars_per_day: 584
forks: 108
open_issues: 6
created: 2026-11-16
pushed_at: 2026-11-16
first_seen: 2026-11-19
week: "2026-W47"
month: "2026-11"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-11-19
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-22"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 32
readme_length: 8819
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-11-19"
star_history: "2026-11-19:1167"
tags:
  - github
  - "category/other"
  - "lang/python"
  - org
  - "topic/agent_skill"
  - "topic/benchmarking"
  - "topic/claude_code"
  - "topic/inference"
  - "topic/llm"
aliases:
  - "inference-optimisation-skill"
  - "sybil-solutions/inference-optimisation-skill"
---

# inference-optimisation-skill

**1.2k** stars · **584** stars/天 · 建立 2 天前 · Python · MIT

```dataviewjs
const me = dv.page("Repos/sybil-solutions--inference-optimisation-skill");
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

`agent-skill` `benchmarking` `claude-code` `inference` `llm` `speculative-decoding`

> [!summary] 一句話摘要
> Agent skill for hill-climbing local LLM serving speed (decode, speculative decoding, prefill, KV, startup, TTFT) on any hardware and quantization

## 專案簡介

Agent skill for hill-climbing local LLM serving speed (decode, speculative decoding, prefill, KV, startup, TTFT) on any hardware and quantization

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/sybil-solutions--inference-optimisation-skill");
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
> const me = dv.page("Repos/sybil-solutions--inference-optimisation-skill");
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
| Forks | 108 |
| Open Issues | 6 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-11-16 |
| 建立日期 | 2026-11-16 |
| Repo 大小 | 32 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/sybil-solutions/inference-optimisation-skill) |
| Topics | `agent-skill` `benchmarking` `claude-code` `inference` `llm` `speculative-decoding` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 87
>     "Shell" : 13
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@0xSero](https://github.com/0xSero) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-16）
> **活躍天數** 1 天 · **最新 commit** inference-optimisation skill: hardware- and quant-agnostic LLM serving hill-climb

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/sybil-solutions/inference-optimisation-skill/issues/2) | Roofline ceiling.py & Interleaved queue.sh A/B Setup Guide o | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # inference-optimisation
> 
> An agent skill for **hill-climbing the speed of a local LLM server** on any hardware and any quantization. It covers:
> 
> - single-user and concurrent decode
> - speculative decoding
> - prefill
> - KV cache size
> - startup time and time to first token
> 
> It works under a memory cap, and every result has to survive a full-context stability check.
> 
> It encodes how we actually got these speedups. It is not a list of flags. The workflow:
> 
> 1. Compute the theoretical ceiling.
> 2. Change one thing at a time.
> 3. Measure against interleaved controls.
> 4. Log every result, including the failures.
> 5. Gate on long-context retrieval.
> 6. Qualify a clean, pinned build before publishing.
> 
> It works with Claude Code and any agent that loads `SKILL.md`-style skills. Any model can also follow it from [`PROMPT.md`](PROMPT.md).
> 
> ## What we've been able to accomplish
> 
> Results from the hill-climbs this skill was distilled from. Every number was measured on the hardware named; see the linked sources for methods and raw data.
> 
> | Hardware | Model / quant / engine | Before → after |
> |---|---|---|
> | **Intel Arc B390 iGPU** (laptop, 64 GB unified LPDDR5X, ~115 GB/s) | Ornith-1.5-35B-A3B, EXL3 4 bpw, SGLang XPU + MTP | Decode, 1 user: 43.6 → **53 tok/s** (median)Decode, 4 users: 84.7 → **103 tok/s**Prefill 32K: 1,037 → **1,660 tok/s**Prefill 256K: 297 → **628 tok/s** (2.1×)KV cache: 264K tokens → **4 × 256K**Startup: 113 → **43 s**Registry Lab gates: decode 28.6 → **41.0**, prefill 255 → **667** |
> | **Intel Arc Pro B70** | Qwen3.8-27B, EXL3 4 bpw, vLLM + custom XPU kernels | Decode: **91.2 tok/s** at 1 user, **365** at 16 (prose, thinking on)Same card with llama.cpp Q4_K_M: 25.0Prefill 4K/32K/128K/254K: 1,654/1,434/928/650 → **2,421/2,259/1,415/911**Agent-session replay: 193 → **147 s** |
> | **Intel Arc Pro B70** | Same model, SGLang + the same kernels | Decode, 1 user: **82.6 tok/s**, vs vLLM 75.7 on the same card and day |
> | **RTX 3090** | Qwen3.8-27B EXL3 3 bpw + MTP | **96.2 tok/s** prose / **141.1** code, 1 user |
> | **RTX 3090** | Qwen3.6-35B-A3B EXL3 3 bpw + MTP | **251.7 / 357.9 tok/s**, 1 user |
> | **RTX 3090** | Flash-Next EXL3, 256K context | MTP: 45.5 → **65.6 tok/s** |
> | **4× H200 NVL** | DeepSeek-V4.1-Flash, vLLM + speculative decoding | Crashed under load → **229.1 tok/s** decode, **17,546 tok/s** prefill; all six gates pass |
> 
> Sources:
> 
> - [local-ai-registry](https://github.com/sybil-solutions/local-ai-registry):
>   - [Ornith B390 recipe](https://github.com/sybil-solutions/local-ai-registry/tree/main/data/sources/ornith-b390-exl3), with the full hill-climb log in [PR #453](https://github.com/sybil-solutions/local-ai-registry/pull/453)
>   - the RTX 3090 and H200 recipes
> - [trellis-serve](https://github.com/sybil-solutions/trellis-serve):
>   - `xpu/README.md`, `xpu/docs/PROGRESS.md` and `xpu/docs/SGLANG.md` for B70
>   - `cuda/README.md` for the RTX 3090
> - [qwen-serve](https://github.com/sybil-solutions/qwen-serve)
> 
> ### Reading the B390 result
> 
> That run is the one this skill grew out of. Its ceiling calculation said:
> 
> - **Decode:** 100 tok/s for one user was only reachable with two useful speculative drafts. This model's draft head accepts ~14% at depth 2, so the practical target was ~88–97 tok/s. We reached ~55% of it; the rest is GEMV kernel efficiency.
> - **Prefill at 256K:** we reached 628 tok/s against a ~670–684 tok/s ceiling.
> 
> The skill makes the agent compute this up front, so it can tell you early when a target is above the physics.
> 
> ## How it works
> 
> ```
>                 ┌────────────────────────────────────────────────────────────────┐
>   measure HW ─▶ │ THEORY.md: bytes/token ÷ bandwidth, FLOPs/token ÷ 50% peak, KV │
>                 └────────────────────────────────────────────────────────────────┘
>                                          │
>     baseline ─▶ profile ─▶ pick lever (ceiling gap × likelihood) ─▶ configs/NEW.json
>                     ▲                                                     │
>                     │                                    queue.sh ctl NEW ctl (serialized, AC-only,
>                     │                                    memory watchdog, ≥6 samples, medians)
>                     │                                                     │
>    PLAN.md + ledger.jsonl ◀── accept only if it beats BOTH neighbouring controls ──┘
>           │                    and regresses nothing by >3%
>           ▼
>   long-context needle gate ─▶ concurrent full-KV soak ─▶ plateau? ─▶ pinned clean build
>                                                                       ─▶ acceptance gates ─▶ publish
> ```
> 
> The skill has three parts:
> 
> **[`SKILL.md`](skills/inference-optimisation/SKILL.md): the procedure.**
> - Inventory, ceilings, ground rules, the loop and lever order.
> - When to stop, how to qualify and publish, and how to report.
> 
> **[`references/`](skills/inference-optimisation/references): loaded only when needed.**
> - [`ceilings.md`](skills/inference-optimisation/references/ceilings.md): how to compute decode, prefill, TTFT, startup and KV maxima, with a worked example.
> - [`methodology.md`](skills/inference-optimisation/references/methodology.md): measurement traps. Chunk-counted tokens, mis-sized prompts, acceptance counters, drift, unified-memory accounting.
> - [`levers.md`](skills/inference-optimisation/references/levers.md): every lever with measured evidence. It is tagged general vs stack-specific.
> - [`gotchas.md`](skills/inference-optimisation/references/gotchas.md): known traps in vLLM, SGLang, llama.cpp and ExLlama, and on Intel, NVIDIA, Apple and AMD hardware.
> - [`publishing.md`](skills/inference-optimisation/references/publishing.md): pinning, clean builds, the six acceptance gates, proving the build matches the best, results cards.
> 
> **[`scripts/`](skills/inference-optimisation/scripts): a small, engine-agnostic harness.** It is standard-library Python plus bash.
> - `bench.py` benchmarks any OpenAI-compatible server. It measures:
>   - startup and short-prompt TTFT;
>   - c1 decode (median of N) and cN aggregate decode;
>   - cold prefill at several lengths;
>   - long-context needle retrieval;
>   - peak memory, with a cap watchdog.
> 
>   It flags looping output, failed requests and runs on battery. Token counts come from server usage stats, never from streamed chunks, and everything lands in `ledger.jsonl`.
> - `ceiling.py` computes the theoretical ceilings from a JSON of measured bandwidth and FLOPs plus component sizes.
> - `queue.sh` is a serialized, detachable run queue, for interleaving control/candidate/control runs.
> - `mem.sh` reports a container's real footprint. That includes driver residency on unified-memory GPUs, which cgroups don't see.
> 
> ## Install
> 
> Claude Code (user-level):
> 
> ```bash
> git clone https://github.com/sybil-solutions/inference-optimisation-skill
> mkdir -p ~/.claude/skills
> cp -r inference-optimisation-skill/skills/inference-optimisation ~/.claude/skills/
> ```
> 
> Then ask, for example:
> 
> - "hill-climb decode and prefill for the model on :8000 under a 40 GiB cap"
> - "what's the theoretical max tok/s for this model on this machine?"
> 
> Other agents: point them at `skills/inference-optimisation/SKILL.md`, or paste [`PROMPT.md`](PROMPT.md) as the task prompt.
> 
> ## Quick start without an agent
> 
> ```bash
> S=skills/inference-optimisation
> python3 $S/scripts/ceiling.py $S/examples/ceiling-ornith-b390.json        # ceilings
> mkdir -p configs && cp $S/examples/config-existing-server.json configs/base.json   # edit base_url/model
> python3 $S/scripts/bench.py run configs/base.json --long 131072            # one run
> bash $S/scripts/queue.sh base cand base                                     # interleaved A/B
> python3 $S/scripts/bench.py show                                            # ledger table
> ```
> 
> ## Principles that carried the most weight
> 
> - **Ceilings first.** If you don't know the maximum, you can't tell whether 53 tok/s is great or bad, or whether "100 tok/s" is possible.
> - **Noise is ±5–10%.** Most single-run "wins" are drift. Interleave controls and use

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/sybil-solutions/inference-optimisation-skill)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "sybil-solutions--inference-optimisation-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "sybil-solutions--inference-optimisation-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W47" AND file.name != "sybil-solutions--inference-optimisation-skill"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/sybil-solutions--inference-optimisation-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "sybil-solutions--inference-optimisation-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "sybil-solutions" AND file.name != "sybil-solutions--inference-optimisation-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/sybil-solutions--inference-optimisation-skill");
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
> const me = dv.page("Repos/sybil-solutions--inference-optimisation-skill");
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
> const me = dv.page("Repos/sybil-solutions--inference-optimisation-skill");
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
> const me = dv.page("Repos/sybil-solutions--inference-optimisation-skill");
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
> const me = dv.page("Repos/sybil-solutions--inference-optimisation-skill");
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

> **2026-11-19** — 首次收錄
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

- [[2026-11-19|2026-11-19]] — 首次收錄，1.2k stars
