---
repo: antirez/h3.c
url: https://github.com/antirez/h3.c
owner: antirez
owner_type: User
language: C
license: MIT
description: "MiniMax H3 inference engine for Mac computers"
homepage: ""
stars: 1303
stars_per_day: 652
forks: 64
open_issues: 13
created: 2026-08-09
pushed_at: 2026-08-11
first_seen: 2026-08-12
week: "2026-W33"
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
last_reviewed: 2026-08-12
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-08-15"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 716
readme_length: 9882
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-08-12"
star_history: "2026-08-12:1303"
tags:
  - github
  - "category/other"
  - "lang/c"
aliases:
  - "h3.c"
  - "antirez/h3.c"
---

# h3.c

**1.3k** stars · **652** stars/天 · 建立 2 天前 · C · MIT

```dataviewjs
const me = dv.page("Repos/antirez--h3.c");
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
> MiniMax H3 inference engine for Mac computers

## 專案簡介

MiniMax H3 inference engine for Mac computers

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/antirez--h3.c");
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
> const me = dv.page("Repos/antirez--h3.c");
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
| Open Issues | 13 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-08-11 |
| 建立日期 | 2026-08-09 |
| Repo 大小 | 716 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/antirez/h3.c) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C" : 70
>     "Objective-C" : 16
>     "Metal" : 13
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@antirez](https://github.com/antirez) | 122 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-09 ~ 2026-08-11）
> **活躍天數** 3 天 · **最新 commit** Clarify SSD streaming memory and speed tradeoff

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/antirez/h3.c/issues/13) | Performance: 1344x768 / 5s renders wait-dominated (GPU idle  | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # h3-metal
> 
> Native MiniMax-H3 inference for Apple Silicon. The project is being built as a
> sequence of working vertical slices: deterministic host/model metadata first,
> then portable Metal block parity, prompt encoding, prompt-to-video/audio, and
> first/last-frame conditioning and then ordered references.
> 
> Prompt-to-video/audio, first/last-frame conditioning, and ordered Ref2VA
> image/video/audio references work end to end. The current work is incremental
> H3-specific Metal performance and memory optimization on M3 Max and M5 Max.
> 
> 
> ## Tutorial
> 
> 
> ### 1. Build and inspect the model
> 
> The examples assume that the Hugging Face snapshot is in `./MiniMax-H3` and
> that FFmpeg and FFprobe are available on `PATH`.
> 
> ```sh
> make -j8
> mkdir -p outputs
> ./h3 --info -d ./MiniMax-H3
> ```
> 
> `--info` checks the model layout and prints the selected Metal device without
> mapping all weights or generating media. Run `./h3 --help` for the complete CLI
> reference.
> 
> Without `-p`, the same binary starts an Iris-style interactive session:
> 
> ```sh
> ./h3 -d ./MiniMax-H3 --width 512 --height 512 --steps 6
> ```
> 
> Type a prompt to generate a numbered video. The session keeps the exact BF16
> prompt conditioning, prepared DiT, and video decoder in memory, so repeating a
> prompt with another seed avoids loading and encoding them again. Useful commands
> are `!status`, `!seed random`, `!seconds 2`, `!show`, `!save output.mp4`, and
> `!cache`. Use `!help` for the full, short list.
> 
> First/last-frame conditioning is persistent in the session:
> 
> ```text
> h3> !first opening.png
> h3> !last ending.png
> h3> The camera moves slowly around the subject.
> ```
> 
> Use `!first clear` or `!last clear` to remove an anchor. Generated videos are
> written to the session directory printed at startup.
> 
> For a general Ref2VA conditioning image, use `!ref-image PATH` instead. Images
> are appended in order and exposed to the model as ``, ``,
> and so on; filenames have no meaning to the model.
> 
> ```text
> h3> !ref-image person.png
> h3> Make the person shown in Picture 1 wave to the camera.
> ```
> 
> `!refs` lists the current order, `!ref-remove N` removes one entry, and
> `!refs clear` removes them all. Ref2VA references cannot be mixed with
> `!first`/`!last` anchors.
> 
> 
> ### 2. Make a first fast video
> 
> Start with the validated balanced preset. It generates 22 frames at 24 fps
> (about 0.92 seconds), displays the evolving middle-video frame after every
> denoising transition in a supported graphical terminal, and prints phase
> timings:
> 
> ```sh
> ./h3 --profile \
>   -d ./MiniMax-H3 \
>   -p "A red fox walks through fresh snow in a pine forest. Medium tracking shot, natural winter light, realistic fur, soft footsteps and wind." \
>   --width 512 --height 512 \
>   --frames 22 --steps 20 \
>   --layers 45 --reuse 2 \
>   --show \
>   -o outputs/fox-fast.mp4
> ```
> 
> This is deliberately not the most aggressive configuration:
> 
> - `--steps 20` performs the default 20 denoising passes.
> - `--reuse 2` computes 11 fresh denoiser velocities instead of all 20 and
>   extrapolates the skipped transitions.
> - `--layers 45` runs 45 of the 50 transformer blocks, reducing both time and
>   unified-memory use.
> - `--show` is optional. It supports Kitty/Ghostty and
>   iTerm2/WezTerm/Konsole graphical protocols. It loads a resident preview VAE,
>   displays one representative middle-video frame after every Euler transition,
>   and then displays all final frames. Display dimensions default to 2x so the
>   image has its intended logical size on macOS Retina screens; use `--zoom 1`
>   on a non-HiDPI display. This adds preview decode time and roughly 10 GiB of
>   temporary model residency; runs without `--show` are unchanged.
> - `--profile` is optional and does not select a different generation path.
> 
> The first process invocation also pays model loading and filesystem-cache
> costs. Compare performance using repeated runs, and alternate variants when
> the machines are warming up because this workload is sensitive to thermal
> throttling.
> 
> For a very short iteration, request four denoising passes directly:
> 
> ```sh
> ./h3 --profile \
>   -d ./MiniMax-H3 \
>   -p "A red fox walks through fresh snow in a pine forest. Medium tracking shot, natural winter light, realistic fur." \
>   --width 512 --height 512 --frames 22 \
>   --steps 4 --layers 50 --reuse 1 \
>   --show \
>   -o outputs/fox-four-step.mp4
> ```
> 
> `--steps N` always means exactly N denoising passes. Four through seven passes
> use the same schedule that won the low-budget comparison; increasing from 4
> to 7 progressively improves detail and motion. Keep `--reuse 1` at such small
> budgets so every requested pass runs the model. `--show` displays one preview
> after each pass.
> 
> Several tail-heavy schedules were evaluated because most visible cleanup
> happens late in a long run. They preserved too few early composition updates
> and produced woven texture, weak motion, or clipped colors. The retained mode
> uses the released linear base grid with one terminal point. On the 512-square,
> 22-frame fox test, the selected four-pass result had 0.556 full-video SSIM
> against a 29-pass reference; an independent surfer test measured 0.547. The
> four-pass denoise took about 3.5 seconds on M5 Max, versus 26.4 seconds for the
> reference.
> 
> For a low-memory run, add `--ssd-streaming`:
> 
> ```sh
> ./h3 --profile \
>   -d ./MiniMax-H3 \
>   -p "A red fox walks through fresh snow in a pine forest." \
>   --width 512 --height 512 --frames 22 --steps 20 \
>   --layers 50 --reuse 1 --ssd-streaming \
>   -o outputs/fox-ssd.mp4
> ```
> 
> This uses the original BF16 checkpoint without conversion or quantization. It
> keeps two DiT blocks in memory and reads the next block from SSD while the GPU
> runs the current one. On M5 Max, tracked DiT storage fell from about 36.5 GiB to
> 2.0 GiB at 512 square and 2.1 GiB at 864x480. A warm 50-block forward measured
> 1.35 versus 2.49 seconds at 512 square (84% slower), and 2.14 versus 2.68
> seconds at 864x480 (26% slower). These are comparisons against the same
> full-residency BF16 path, and the results were byte-identical in both checks.
> 
> The 2.0--2.1 GiB figure is the DiT's tracked tensor storage, not total system
> RAM. Prompt encoding and the two VAEs run in separate phases rather than adding
> their full peaks to it; the OS, media buffers, and output resolution still need
> headroom. `--show` keeps a preview VAE resident and adds roughly 10 GiB, so omit
> it for the lowest-memory run.
> 
> SSD streaming is an explicit memory/speed tradeoff and is not the default. It
> cannot be combined with `--use-int8-row-fc2`. In an interactive session, use
> `!ssd-streaming on`.
> 
> 
> ### 3. Move toward reference quality
> 
> Change one control at a time when evaluating quality. First restore all layers,
> then all denoiser evaluations, and finally raise the default 20-pass schedule
> to the slower 50-pass reference:
> 
> ```sh
> ./h3 --profile \
>   -d ./MiniMax-H3 \
>   -p "A red fox walks through fresh snow in a pine forest. Medium tracking shot, natural winter light, realistic fur, soft footsteps and wind." \
>   --width 512 --height 512 \
>   --frames 22 --steps 50 \
>   --layers 50 --reuse 1 \
>   -o outputs/fox-close.mp4
> ```
> 
> The defaults are `--steps 20 --layers 50 --reuse 1`; keep `--steps 50`
> explicit for this close path. It performs 50 complete 50-block denoiser
> forwards and is much more expensive than the default, but is the right oracle
> when a fast mode changes the subject, anatomy, motion, or composition.
> Numerical pixel identity with MLX is not expected because the random-number and
> execution engines differ; the depicted content and motion should agree.
> 
> 
> ### 6. Improve the prompt
> 
> A short prompt works, but the released system expects a Context-IR-like
> description. State the subject, action, setting, camera, lighting/style, and
> desired sound. For example:
> 
> ```text
> Scene: a single red fox in a snow-covered pine forest at dawn.
> Action: the fox walks steadily left to right and looks toward the camera once.
> Camera: medium-height lateral tracking shot, 50 mm lens, stable framing.
> Look: photorealistic fur, cold blue ambient light, warm sunrise rim lig

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]] · [[FareedKhan-dev--kimi-k3-in-c|FareedKhan-dev/kimi-k3-in-c]]

[GitHub](https://github.com/antirez/h3.c)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "antirez--h3.c"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C" AND file.name != "antirez--h3.c" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W33" AND file.name != "antirez--h3.c"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/antirez--h3.c");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "antirez--h3.c" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "antirez" AND file.name != "antirez--h3.c"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/antirez--h3.c");
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
> const me = dv.page("Repos/antirez--h3.c");
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
> const me = dv.page("Repos/antirez--h3.c");
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
> const me = dv.page("Repos/antirez--h3.c");
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
> const me = dv.page("Repos/antirez--h3.c");
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

> **2026-08-12** — 首次收錄
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

- [[2026-08-12|2026-08-12]] — 首次收錄，1.3k stars
