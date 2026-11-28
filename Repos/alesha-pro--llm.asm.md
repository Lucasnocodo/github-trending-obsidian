---
repo: alesha-pro/llm.asm
url: https://github.com/alesha-pro/llm.asm
owner: alesha-pro
owner_type: User
language: Assembly
license: MIT
description: "Qwen3-0.6B inference (12 KB), bare-metal bootable OS (22 KB), and from-scratch Mini-GPT trainer with live Braille TUI (32 KB) in 100% pure x86-64 NASM assembly. Zero C, zero libc, zero dependencies."
homepage: ""
stars: 2398
stars_per_day: 799
forks: 368
open_issues: 27
created: 2026-11-25
pushed_at: 2026-11-27
first_seen: 2026-11-28
week: "2026-W48"
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
last_reviewed: 2026-11-28
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-12-01"
contributor_count: 1
engagement: "medium"
issue_close_rate: 4
repo_size_kb: 343
readme_length: 9863
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-11-28"
star_history: "2026-11-28:2398"
tags:
  - github
  - "category/other"
  - "lang/assembly"
  - "topic/assembly"
  - "topic/avx2"
  - "topic/bare_metal"
  - "topic/llm"
  - "topic/machine_learning"
aliases:
  - "llm.asm"
  - "alesha-pro/llm.asm"
---

# llm.asm

**2.4k** stars · **799** stars/天 · 建立 3 天前 · Assembly · MIT

```dataviewjs
const me = dv.page("Repos/alesha-pro--llm.asm");
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

`assembly` `avx2` `bare-metal` `llm` `machine-learning` `nasm` `osdev` `qwen` `transformer` `x86-64`

> [!summary] 一句話摘要
> Qwen3-0.6B inference (12 KB), bare-metal bootable OS (22 KB), and from-scratch Mini-GPT trainer with live Braille TUI (32 KB) in 100% pure x86-64 NASM assembly. Zero C, zero libc, zero dependencies.

## 專案簡介

Qwen3-0.6B inference (12 KB), bare-metal bootable OS (22 KB), and from-scratch Mini-GPT trainer with live Braille TUI (32 KB) in 100% pure x86-64 NASM assembly. Zero C, zero libc, zero dependencies.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/alesha-pro--llm.asm");
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
> const me = dv.page("Repos/alesha-pro--llm.asm");
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
| Forks | 368 |
| Open Issues | 27 |
| Issue 解決率 | 4% (1 closed) |
| 最後推送 | 2026-11-27 |
| 建立日期 | 2026-11-25 |
| Repo 大小 | 343 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/alesha-pro/llm.asm) |
| Topics | `assembly` `avx2` `bare-metal` `llm` `machine-learning` `nasm` `osdev` `qwen` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Assembly" : 53
>     "Python" : 25
>     "C" : 18
>     "Shell" : 2
>     "C++" : 1
>     "Makefile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alesha-pro](https://github.com/alesha-pro) | 4 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-25 ~ 2026-11-27）
> **活躍天數** 2 天 · **最新 commit** Add 04-ring1-kernel-surgeon: Ring -1 AMD SVM hypervisor + MiniCPM5-2B live kernel patcher

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#20](https://github.com/alesha-pro/llm.asm/issues/20) | Project built on llm.asm: ringzero | 1 | 0 |
> | [#16](https://github.com/alesha-pro/llm.asm/issues/16) | FAST_Q8=1 AVX2+F16C Decode Curve, 24KB Bare-Metal OS & Linux | 1 | 0 |
> | [#9](https://github.com/alesha-pro/llm.asm/issues/9) | asm-llm: default of 32 threads collapses throughput on CPUs  | 1 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # llm.asm
> 
> **Three complete LLM projects written in 100% pure x86-64 NASM assembly.**
> Zero C, zero C++, zero Rust, zero libc, zero libm, zero runtime dependencies.
> 
> Assembled directly with `nasm` and linked with `ld`. Every math kernel (`expf`, `sincosf`, `RMSNorm`, `RoPE`, `SiLU`, `Softmax`), AVX2+FMA+F16C GEMM/GEMV engine, BPE tokenizer, `clone()`/`futex()` thread pool, bare-metal SMP kernel, analytical backward pass, AdamW optimizer, and live Unicode Braille TUI is hand-written x86-64 assembly (`17,252` lines total across all three projects).
> 
> 
> ## Quick Start
> 
> Clone the repo and build everything with `make all`:
> 
> ```bash
> git clone https://github.com/alesha-pro/llm.asm.git
> cd llm.asm
> make all
> ```
> 
> 
> ## Head-to-Head CPU Decode Benchmark: `llm.asm` vs `llama.cpp` (`Qwen3-0.6B Q8_0`)
> 
> Measured on the same machine (**AMD EPYC 7642**, 47C online, 256 MiB L3, DDR4, CPU-only `-ngl 0`), same model (`Qwen3-0.6B Q8_0`: `613.66 MiB` `.asmbin` v2 FP16-scale vs `604.15 MiB` GGUF `Q8_0`), `34` prompt tokens / `64` generated tokens, `3`-run average:
> 
> | Threads | `llm.asm` (`FAST_Q8=0`, FP32 act) | `llama.cpp` (`Q8_0`, `-ngl 0`) | **`llm.asm` (`FAST_Q8=1`, 14.7 KB)** | **vs `llama.cpp`** | **Bare-Metal OS KVM (`FAST_Q8=1`)** |
> |---:|---:|---:|---:|---:|---:|
> | **1** | 7.18 tok/s | 16.63 tok/s | **20.70 tok/s** | **1.24x (+24.5%)** | **23.67 tok/s** |
> | **4** | 28.12 tok/s | 51.08 tok/s | **69.24 tok/s** | **1.36x (+35.6%)** | **78.89 tok/s** |
> | **8** | 53.09 tok/s | 80.79 tok/s | **103.64 tok/s** | **1.28x (+28.3%)** | **118.08 tok/s** |
> | **16** | 77.50 tok/s | 103.03 tok/s | **121.86 tok/s** | **1.18x (+18.3%)** | **134.94 tok/s** |
> | **24** | 91.88 tok/s | 104.11 tok/s | **123.72 tok/s** | **1.19x (+18.8%)** | **132.90 tok/s** |
> | **32** | 96.63 tok/s | 103.82 tok/s | **122.51 tok/s** | **1.18x (+18.0%)** | **133.75 tok/s** |
> | **40** | 98.50 tok/s | 105.08 tok/s | **125.86 tok/s** *(peak 126.81)* | **1.20x (+19.8%)** | — |
> 
> *(Note: `llama.cpp` uses batched GEMM for prompt prefill `pp34`, whereas `llm.asm` runs token-by-token GEMV. For autoregressive decode `tg64`, `llm.asm` (`FAST_Q8=1`) combines INT8xINT8 AVX2 `vpmaddubsw`/`vpmaddwd`, `.asmbin` v2 FP16 block scales (`F16C vcvtph2ps`), monotonic next-row prefetch, contiguous head-major KV-cache, and parallel GQA attention — beating `llama.cpp` by +18%..+36% across 1..40 threads while producing bit-exact deterministic outputs across all thread counts. The bare-metal OS gains another ~10% from 2 MiB huge-page identity mapping.)*
> 
> ---
> 
> 
> ## The Projects
> 
> | Project | Binary | Size | Deps | Key Numbers |
> |---|---|---:|---:|---|
> | **[01-qwen3-inference/](01-qwen3-inference/)** | `build/asm-llm` | **14,712 B** *(14,008 B `FAST_Q8=0`)* | **0** | Pure x86-64 NASM static Linux ELF running `Qwen/Qwen3-0.6B` (Q8_0, built-in BPE tokenizer, GQA + QK-Norm + RoPE + SwiGLU, single-shot & `--chat` multi-turn KV-cache REPL). **`FAST_Q8=1` (default):** **126.8 tok/s** decode at 40T (**20.7 tok/s** at 1T), **+18% to +36% faster than `llama.cpp` CPU (`Q8_0`) across 1..40T**, **`0.99965`** cosine & **64/64** exact greedy tokens vs PyTorch FP32. |
> | **[02-baremetal-os/](02-baremetal-os/)** | `build/asm-llm-os.elf` | **24,252 B** *(23,612 B `FAST_Q8=0`)* | **0** | Pure x86-64 NASM bootable bare-metal `Qwen3-0.6B` OS with no Linux or Windows. Multiboot 1 -> Long Mode -> AVX2/FMA/F16C -> ACPI/APIC SMP -> VGA + PS/2 + COM1 multi-turn KV-cache chat (`/clear`, `/think`, `/bench`). **74–94 ms** boot, **134.9 tok/s** KVM EPYC (**23.7 tok/s** 1 vCPU, **136.6 tok/s** peak), **55.4 tok/s** live on Proxmox Xeon E5-2670 v3 with **0 GB** disk. |
> | **[03-minigpt-train/](03-minigpt-train/)** | `build/asm-gpt-train` | **32,944 B** | **0** | Pure x86-64 NASM FP32 Mini-GPT trainer and sampler. Register-blocked `6x16` AVX2+FMA SGEMM, full analytical backward pass (**`1.0000000000`** cosine across all 21 gradient tensors vs PyTorch CPU), decoupled AdamW, **27,662 train tok/s**, live 80x24 Braille TUI, `val_loss 4.19 -> 1.51` on TinyShakespeare in 4 min. |
> | **[04-ring1-kernel-surgeon/](04-ring1-kernel-surgeon/)** | `04-ring1-kernel-surgeon/build/surgeon.elf` | **75,424 B** | **0** *(freestanding NASM + zero-libc C)* | Bare-metal Type-1 AMD SVM hypervisor (`Ring -1`) running beneath unmodified Linux `5.15` (`Ring 0`) with an embedded **MiniCPM5-2B `Q4_K_M`** engine across 24 LAPIC SMP cores, NPT memory isolation, live `efifb` HUD, static x86-64 patch validator, and single-level KVM verifier RL. **97.54% pass@1** (`119/122` unseen test scenarios, `0%` dangerous continues) vs **16.39%** base. |
> 
> ---
> 
> 
> ## Live Output & Visual Proof
> 
> 
> ### Phase 2: Booting Qwen3-0.6B Directly on Bare Metal (QEMU KVM, 16 vCPUs)
> 
> 
> ### Phase 2: Running Live on a Proxmox VE VM (0 GB Disk, Intel Xeon E5-2670 v3, 12 Cores)
> 
> 
> ### Phase 3: Pure-Assembly Live 80x24 UTF-8 Braille TUI (`build/asm-gpt-train`)
> 
> ```text
> ╭──────────────────────────────────────────────────────────────────────────────╮
> │ asm-gpt-train │ 100% Pure x86-64 Assembly (Zero libc, AVX2+FMA)              │
> │ L=6 D=192 H=6 FF=512 V=65 │ params=2681664 │ B=16 T=128 │ threads=20         │
> ├──────────────────────────────────────────────────────────────────────────────┤
> │ Loss Curve (0..400)    ⣿⣿⣿ train   ◆ val    best_val=1.8399                  │
> │ 4.34 ┤◆   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·  │
> │      │⡇                                                                      │
> │ 3.61 ┤⢱   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·  │
> │      │ ⢱                                                                     │
> │ 2.87 ┤· ⠣⣀·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·  │
> │      │    ⠑⠢⠤⣀◆                                                              │
> │ 2.14 ┤·   ·   ·⠉⠉⠑⠒⠒⠢⠤⠤◆⠤⣀⣀⣀⡀⣀⣀◆  ·   · ◆ ·   ·   ·   ·   ·   ·   ·   ·   ·  │
> │      │                      ⠈  ⠉⠉⠉⠊⠉⠊⠒⠊⠒⠊⠒⠔⠒⠢⠤⠤⠔⠢◆⠤⠤⠤⢄⣀⣀⢄◆⣀⣀⣀⣀⡀⣀⣀⢀◆⡀ ⡀⢀   ⣀◆ │
> │ 1.40 ┤·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ·   ⠈  ⠁⠁⠈⠉⠈⠁⠉⠉⠉·⠈ │
> │      └step 0 ───────────────────────── 200 ────────────────────────── 400    │
> ├──────────────────────────────────────────────────────────────────────────────┤
> │ Step 400/400 [████████████████████████████] 100% │ elapsed 35.2s             │
> │ loss=1.6604  val=1.8399  best=1.8399  gnorm=0.53  lr=0.000200  25470 tok/s   │
> ├─ Live Sample (step 400) ─────────────────────────────────────────────────────┤
> │ ROMEO:                                                                       │
> │ Nay, to lond, in if as my kears, some with death.                            │
> │                                                                              │
> │ DUKE VINCENTIO:                                                              │
> ╰──────────────────────────────────────────────────────────────────────────────╯
> ```
> 
> ---
> 
> 
> ### 1. Run Qwen3-0.6B Inference in 14 KB (`01-qwen3-inference/`)
> 
> ```bash
> 
> # Export compact .asmbin v2 (FP16 block scales, 613.66 MiB; or --scale-dtype fp32 for legacy v1)
> python3 scripts/export_weights.py --model-dir models/qwen3-0.6b-bf16 --out models/qwen3-0.6b-q8_0.asmbin --scale-dtype fp16
> 
> # Build with FAST_Q8=1 (default: INT8xINT8 AVX2 + parallel GQA) or FAST_Q8=0 (exact FP32 activations)
> make inference FAST_Q8=1
> ./build/asm-llm -m models/qwen3-0.6b-q8_0.asmbin -p "Explain how a CPU cache works in 3 concise sentences." -n 128 -t 16
> 
> # Or start an interactive multi-turn chat preserving the KV-cache across turns:
> ./build/asm-llm -m models/qwen3-0.6b-q8_0.asmbin --chat -t 16
> ```
> 
> Full step-by-step setup, model download, CLI flags, and benchmarks: **[01-qwen3-inference/README.md](01-qwen3-inference/README.md)**.
> 
> 
> ### 2. Boot Bare-Metal Qwen3-0.6B OS in 24 KB (`02-baremetal-os/`)
> 
> ```bash
> make os FAST_Q8=1
> make os-run MODEL=models/qwen3-0.6b-q8_0.asmbin SMP=16
> 
> # Or build a bootable BIOS+UEFI ISO for QEMU / Proxmox VE:
> make os-iso MODEL=models/qwen3-0.6b-q8_0.asmbin
> ```
> 
> Full QEMU KVM, bootable ISO, and 0 GB disk Proxmox VE deployment guide: **[02-bareme

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[4lwayz--portwatch-vi|4lwayz/portwatch-vi]] · [[852wa--JIZURA|852wa/JIZURA]] · [[AFK-surf--xnulinux|AFK-surf/xnulinux]] · [[ARahim3--DigUp|ARahim3/DigUp]]

[GitHub](https://github.com/alesha-pro/llm.asm)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "alesha-pro--llm.asm"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Assembly" AND file.name != "alesha-pro--llm.asm" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W48" AND file.name != "alesha-pro--llm.asm"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/alesha-pro--llm.asm");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "alesha-pro--llm.asm" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "alesha-pro" AND file.name != "alesha-pro--llm.asm"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/alesha-pro--llm.asm");
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
> const me = dv.page("Repos/alesha-pro--llm.asm");
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
> const me = dv.page("Repos/alesha-pro--llm.asm");
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
> const me = dv.page("Repos/alesha-pro--llm.asm");
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
> const me = dv.page("Repos/alesha-pro--llm.asm");
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

> **2026-11-28** — 首次收錄
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

- [[2026-11-28|2026-11-28]] — 首次收錄，2.4k stars
