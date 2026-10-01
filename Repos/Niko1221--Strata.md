---
repo: Niko1221/Strata
url: https://github.com/Niko1221/Strata
owner: Niko1221
owner_type: User
language: C++
license: MIT
description: "Qwen3.8-Flash-Next (125B MoE) on a 8GB+ NVIDIA GPU: one-click install for Windows / Linux. Strata inference engine, OpenAI/Anthropic API on localhost, optional image input."
homepage: ""
stars: 3389
stars_per_day: 565
forks: 316
open_issues: 48
created: 2026-09-24
pushed_at: 2026-10-01
first_seen: 2026-09-29
week: "2026-W40"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: "v0.1.21"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-29
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-10-04"
contributor_count: 5
engagement: "low"
issue_close_rate: 41
repo_size_kb: 11682
readme_length: 9103
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-09-29"
star_history: "2026-09-29:1208,2026-09-30:1968,2026-10-01:3389"
tags:
  - github
  - "category/other"
  - "lang/c++"
aliases:
  - "Strata"
  - "Niko1221/Strata"
---

# Strata

**1.2k** stars · **302** stars/天 · 建立 4 天前 · C++ · MIT

```dataviewjs
const me = dv.page("Repos/Niko1221--Strata");
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

`v0.1.21`

> [!summary] 一句話摘要
> Qwen3.8-Flash-Next (125B MoE) on a 8GB+ NVIDIA GPU: one-click install for Windows / Linux. Strata inference engine, OpenAI/Anthropic API on localhost, optional image input.

## 專案簡介

Qwen3.8-Flash-Next (125B MoE) on a 8GB+ NVIDIA GPU: one-click install for Windows / Linux. Strata inference engine, OpenAI/Anthropic API on localhost, optional image input.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Niko1221--Strata");
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
> const me = dv.page("Repos/Niko1221--Strata");
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
| Forks | 142 |
| Open Issues | 48 |
| Issue 解決率 | 41% (34 closed) |
| 最後推送 | 2026-09-29 |
| 建立日期 | 2026-09-24 |
| Repo 大小 | 11.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Niko1221/Strata) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C++" : 60
>     "Cuda" : 20
>     "Python" : 15
>     "JavaScript" : 2
>     "CMake" : 1
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Niko1221](https://github.com/Niko1221) | 98 |
> | [@pipeob0](https://github.com/pipeob0) | 7 |
> | [@j-luwierski](https://github.com/j-luwierski) | 5 |
> | [@Mirtraxxx](https://github.com/Mirtraxxx) | 3 |
> | [@code-martin](https://github.com/code-martin) | 3 |

**最新版本**：v0.1.21 — Strata v0.1.21 (2026-09-29)

> [!info]- Release Notes
> **One model across two or three NVIDIA cards (experimental).**
> 
> - **Layer split across GPUs:**
>   - Setup: `START-HERE.bat --setup --gpus 0,2` (Linux: `./setup.sh --setup --gpus 0,2`), or `"gpu": [0, 2]` in a run config.
>   - Each card runs a range of the model's layers and keeps the experts of those layers in its own VRAM; the last card also runs the output head and the draft layer.
>   - Prompts flow through the cards in a pipeline: the next card reads chunk c while the first reads chunk c+1.
>   - Conversation checkpoints, adaptive expert swaps and the PCIe share work per card.
>   - No NVLink or peer-to-peer access needed: cards in x4 slots work.
> - **Measured** on an RTX 5080 + RTX 3090 (Ryzen 9 9950X3D) with the Coder, 32K context:
>   - prompts 18-20% faster than the 5080 alone: 2,357 vs 1,970 tokens/s at 28K tokens;
>   - decoding on par (84 / 110 tokens/s, story / code), because both caches then hold ~99% of the routed experts and the per-layer GPU time decides.
> - **Placement:**
>   - `--layer-split auto` (the default with several cards) places the split from each card's free VRAM and speed. It picked a split within 0-12% of the best one measured.
>   - List the fastest card first, and leave out a much slower one: an RTX 2080 Ti as a third card made the pair slower.
>   - Details, limits and all measurements: [docs/MULTI_GPU.md](https://github.com/Niko1221/Strata/blob/main/docs/MULTI_GPU.md) and `bench/results/2026-09-29-layer-split/`.
> - **Also included:**
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-09-28 ~ 2026-09-29）
> **活躍天數** 2 天 · **最新 commit** Engine 0.1.21: one model across two or three GPUs (layer split, experimental); setup requires it

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#95](https://github.com/Niko1221/Strata/issues/95) | Add support for multi GPU | 6 | 0 |
> | [#77](https://github.com/Niko1221/Strata/issues/77) | two GPUs | 2 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> Strata
> 
> Run a 125-billion-parameter AI model on a normal gaming PC
> one NVIDIA card (12-24 GB) + 64 GB of RAM · Windows or Linux · one click to install
> 
> A voxel pagoda garden, 1 shot prompt running on an RTX 5070 with Strata (IQ3_S, 128K context) ·
> full video (49 s)
> 
> Strata runs **[Qwen3.8-Flash-Next](https://huggingface.co/Qwen/Qwen3.8-Flash-Next)** - a large, smart AI model that
> normally needs a server - on your own PC. It writes its answers at **60-95 tokens per second** (a token is about ¾
> of a word): faster than you can read.
> 
> - **Free and open source.**
> 
> > **Jump to:** [How fast?](#how-fast-is-it) · [Which model?](#which-model-should-i-pick) · [Install](#install) ·
> > [Using it](#using-it) · [Problems?](#something-went-wrong) · [How it works](#how-does-it-work) ·
> > [All the details](docs/DETAILS.md)
> 
> ---
> 
> 
> ## Install
> 
> **You need:** an NVIDIA RTX 30, 40 or 50 card with 12 GB of VRAM or more, enough RAM for the size you pick (above),
> ~80 GB of free disk space (an SSD makes the first start much faster), and Windows 10/11 or Linux. The only thing you
> install yourself is a current **NVIDIA driver** ([nvidia.com/drivers](https://www.nvidia.com/drivers) or the NVIDIA
> App). Everything else - Python, the engine, the model - is set up for you.
> 
> **Windows**
> 
> 1. [Download this project](https://github.com/Niko1221/Strata/archive/refs/heads/main.zip) and unzip it (or `git clone` it).
> 2. Double-click **`START-HERE.bat`**.
> 3. Answer a few questions - or just press Enter each time for the recommended choice:
>    - **Which model and size?** The original or Swift 1.5, and Q2_0, IQ2_XS, IQ3_XXS or IQ3_S - see [above](#which-model-should-i-pick)
>    - **How much context?** How much text it can keep in mind at once (it suggests one for your card)
>    - **Images?** Whether it should also read pictures
>    - **Experimental speed projection?** Off unless you say yes - [read what it does](docs/DETAILS.md#experimental-speed-projection-experimental-off-by-default) first
> 
> Then it downloads everything (the model is ~70 GB, so the first time takes a while - you can stop and it picks up
> where it left off) and **starts the model**. Your browser opens the Strata app at `http://127.0.0.1:8080`.
> 
> > **While the model starts, your PC can be slow or stop responding for 1-3 minutes** (longest the first time): Strata
> > loads 35-55 GB into your RAM and locks part of it for the graphics card. That's normal - wait, and don't close the
> > window. The window tells you what it is doing.
> 
> **Next time**, just double-click `START-HERE.bat` again: it starts right away, nothing is downloaded twice. Close its
> window to stop the model.
> 
> **Updating:** download the new version and unzip it anywhere (or `git pull`), then run `START-HERE.bat` in it. The
> model files are kept in a `Strata-data` folder next to your Strata folder, so a new copy finds them and sets itself up
> the same way - nothing big is downloaded again.
> 
> **Linux:** run `./setup.sh` - same questions, same result.
> 
> 
> ## How fast is it?
> 
> Measured on an RTX 5070 (12 GB), a Ryzen 5 7600 and 64 GB of RAM:
> 
> | Size | Writes answers (short chat) | Writes answers (128K context) | Reads your prompt |
> | --- | ---: | ---: | ---: |
> | **Q2_0** | 90 tokens/s | 67 tokens/s | 1,310 tokens/s |
> | **IQ2_XS** | 74 tokens/s | 60 tokens/s | 1,240 tokens/s |
> | **IQ3_XXS** | 62 tokens/s | 46 tokens/s | 1,110 tokens/s |
> | **IQ3_S** | 52 tokens/s | 41 tokens/s | 1,070 tokens/s |
> | **Coder** (IQ1_M) | 51 tokens/s | 44 tokens/s | 1,300 tokens/s |
> 
> - **Writes answers** = how fast the reply appears (tokens per second).
> - **Reads your prompt** = how fast it takes in what you send (long documents, code, chat history), measured on a
>   32K-token prompt; a 4K prompt reads at 740-1,000 tokens/s. A 32K prompt takes about 25 seconds with Q2_0.
> 
> A card with more VRAM is faster, because more of the model fits on the GPU: an RTX 3090 (24 GB) should do roughly
> 100-140 tokens per second. All measurements, long-context numbers and estimates for other cards are in the
> [details](docs/DETAILS.md#speed-measured).
> 
> Every PC is different: `START-HERE.bat --calibrate` measures a few engine settings on yours and keeps the fastest
> (about 5-10 minutes; on the PC above it made the Coder 7% faster).
> 
> **Two or three NVIDIA cards?** `START-HERE.bat --setup --gpus 0,2` splits the model's layers across them (experimental):
> each card keeps the experts of its own layers, and prompts flow through the cards in a pipeline. On an RTX 5080 +
> RTX 3090 it read prompts 18-20% faster than the 5080 alone, with decoding on par. See [docs/MULTI_GPU.md](docs/MULTI_GPU.md).
> 
> 
> ## Which model should I pick?
> 
> **The size** (the same model, compressed more or less):
> 
> | Model | RAM+VRAM Requirements | Speed | Quality |
> | --- | ---: | --- | --- |
> | **Q2_0** | 37.6 GB | fastest | good |
> | **IQ2_XS** | 39.2 GB | fast | better (**recommended**) |
> | **IQ3_XXS** | 47.0 GB | slower | great |
> | **IQ3_S** | 54.8 GB | slowest | best: matches the full model on the published tests (original model only) |
> 
> **Will it fit?** Shard 1 is the part of the model that gets loaded when it starts: its experts go into your **RAM**,
> the rest onto your graphics card (the second shard, a 29 GB lookup table, stays on the SSD). So it fits when your
> **RAM is at least shard 1 + about 10 GB** for Windows and your other programs. With 64 GB of RAM every size fits
> (IQ3_S with little else open); with 48 GB, Q2_0 and IQ2_XS. A bigger graphics card makes it faster, but it doesn't
> lower the RAM needed.
> 
> **The version:**
> 
> - **Qwen3.8-Flash-Next** - the original.
> - **[Coder](https://huggingface.co/ISTA-DASLab/Qwen3.8-Flash-Next-GSQ-RCO-Coder-GGUF)** - ISTA-DASLab's coding
>   version: half of the experts removed, keeping the ones that code, tool use and images need (91% of the full model's
>   SWE-bench Verified score, 99% of LiveCodeBench, by its authors). One size (IQ1_M: its experts stored like IQ3_S):
>   shard 1 is **29.6 GB**, so it fits a PC with **32 GB of RAM**, runs 262K context on 64 GB, and reads long prompts
>   the fastest of all. Weaker outside coding.
> - **[Swift 1.5](https://huggingface.co/ukisai/Swift-1.5-Qwen3.8-Flash-Next-GSQ-RCO-GGUF)** - a fine-tune by UkisAI
>   that thinks much shorter before answering, so you get the answer sooner, with about the same quality. Same speed per
>   token, and about the same RAM as the same size of the original (no IQ3_S). Its own license applies (see its page).
> 
> Not sure? Take **IQ2_XS** - or the **Coder** if you mainly write code, or have 32-48 GB of RAM. You can add another
> one later with `SETUP.bat` (the same as `START-HERE.bat --setup`; on Linux `./setup.sh --setup`).
> 
> For **OrcaRouter's Flash-Next Uncensored IQ3_XXS**, see the [manual compatibility setup](docs/ORCA.md).
> It needs an explicit packing conversion and is not an installer menu option.
> 
> 
> ## Using it
> 
> The Strata app's Monitor (left) while a coding agent writes the pagoda garden from the video (right)
> 
> - **In the browser:** `http://127.0.0.1:8080` - the Strata app (it opens by itself when the model starts): **Chat**, a
>   live **Monitor** of the model and your GPU/CPU/RAM, and **About** with the settings and addresses.
> - **Chat in the terminal:** `.venv\Scripts\python chat.py`
> - **Your apps and coding agents:** add it as an "OpenAI-compatible" provider with base URL
>   **`http://127.0.0.1:8080/v1`**, any API key and any model name. Apps that use Anthropic's API: `http://127.0.0.1:8080/v1/messages`.
> - **Thinking:** the model thinks before it answers. Choose **off, low, medium or high** - in the chat page menu, with
>   `/think low` in `chat.py`, or with your app's "reasoning effort" setting. Off is fastest; high is best for hard questions.
> - **Pictures:** in the chat page click **Picture**; in `chat.py` type `/image `; in apps just attach them.
> - **From your phone or another PC:** `START-HERE.bat --setup --host 0.0.0.0 --api-key `, then open the
>   address the server window prints; see the [details](docs/DETAILS.md#using-it).
> - **Experimental speed projection (off b

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]] · [[ApodexAI--FrontierAgent|ApodexAI/FrontierAgent]] · [[ArasTey--lunel|ArasTey/lunel]]

[GitHub](https://github.com/Niko1221/Strata)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Niko1221--Strata"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C++" AND file.name != "Niko1221--Strata" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W40" AND file.name != "Niko1221--Strata"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Niko1221--Strata");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Niko1221--Strata" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Niko1221" AND file.name != "Niko1221--Strata"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Niko1221--Strata");
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
> const me = dv.page("Repos/Niko1221--Strata");
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
> const me = dv.page("Repos/Niko1221--Strata");
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
> const me = dv.page("Repos/Niko1221--Strata");
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
> const me = dv.page("Repos/Niko1221--Strata");
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

> **2026-09-29** — 首次收錄
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

- [[2026-10-01|2026-10-01]] — 再次上榜，3.4k stars
- [[2026-09-30|2026-09-30]] — 再次上榜，2.0k stars
- [[2026-09-29|2026-09-29]] — 首次收錄，1.2k stars
