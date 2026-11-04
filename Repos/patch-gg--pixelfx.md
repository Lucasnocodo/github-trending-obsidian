---
repo: patch-gg/pixelfx
url: https://github.com/patch-gg/pixelfx
owner: patch-gg
owner_type: Organization
language: JavaScript
license: MIT
description: "244 pixel art effects, every one a small piece of code. Plus a Claude Code skill to make your own."
homepage: "https://patch-gg.github.io/pixelfx/"
stars: 4299
stars_per_day: 860
forks: 579
open_issues: 4
created: 2026-10-30
pushed_at: 2026-10-31
first_seen: 2026-11-02
week: "2026-W45"
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
last_reviewed: 2026-11-02
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-11-07"
contributor_count: 1
engagement: "medium"
issue_close_rate: 33
repo_size_kb: 25462
readme_length: 8857
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-11-02"
star_history: "2026-11-02:2964,2026-11-03:3697,2026-11-04:4299"
tags:
  - github
  - "category/other"
  - "lang/javascript"
  - org
  - "topic/agent_skills"
  - "topic/animation"
  - "topic/canvas"
  - "topic/claude_code_plugin"
  - "topic/gamedev"
aliases:
  - "pixelfx"
  - "patch-gg/pixelfx"
---

# pixelfx

**3.0k** stars · **988** stars/天 · 建立 3 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/patch-gg--pixelfx");
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

`agent-skills` `animation` `canvas` `claude-code-plugin` `gamedev` `pixel-art` `sprite-sheet` `vfx`

> [!summary] 一句話摘要
> 244 pixel art effects, every one a small piece of code. Plus a Claude Code skill to make your own.

## 專案簡介

244 pixel art effects, every one a small piece of code. Plus a Claude Code skill to make your own.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/patch-gg--pixelfx");
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
> const me = dv.page("Repos/patch-gg--pixelfx");
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
| Forks | 386 |
| Open Issues | 2 |
| Issue 解決率 | 33% (1 closed) |
| 最後推送 | 2026-10-31 |
| 建立日期 | 2026-10-30 |
| 官方網站 | [Link](https://patch-gg.github.io/pixelfx/) |
| Repo 大小 | 24.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/patch-gg/pixelfx) |
| Topics | `agent-skills` `animation` `canvas` `claude-code-plugin` `gamedev` `pixel-art` `sprite-sheet` `vfx` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `esbuild`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@rehan-remade](https://github.com/rehan-remade) | 8 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-30 ~ 2026-10-31）
> **活躍天數** 2 天 · **最新 commit** pixelfx 0.3.0: give the effects a body that performs them

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/patch-gg/pixelfx/issues/1) | Featured in WaveWeaver Creator Tools Guide: pixelfx (244 Pro | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # pixelfx.
> 
> **244 pixel art effects and animations, every one a small piece of code.** Fire,
> explosions, magic, weather, UI, pickups, critters and more. Play them live, recolor and mirror them, drop them into
> a browser game, or export sprite sheets for any engine. Plus a Claude Code skill that makes new ones the way a
> picky pixel artist would: draft, render, look, refine.
> 
> Every effect that involves a character is **acted out**: he winds up, lets go, freezes on contact and recovers, and a
> target takes the hit. Twelve whole moves chain the effects into attacks from wind-up to recovery.
> 
> **[open the gallery](https://patch-gg.github.io/pixelfx/)** · [catalog](docs/CATALOG.md) · [acting](#acting) ·
> [the skill](#the-skill) · [make your own](#make-your-own) · [how it works](#how-it-works)
> 
> The method is [Hugo Duprez](https://x.com/HugoDuprez)'s, from [How to make (good) pixel art effects with
> Claude](https://www.spritefusion.com/blog/how-to-make-good-pixel-art-effects-with-claude): code is clay, trust your
> eyes, feed your references. His [open-source effects](https://www.spritefusion.com/pixel-art-vfx) at Sprite Fusion
> set the bar, and `src/core/sim.js` and the effects that say so at the top adapt his code. This repo is our take on
> the idea at library scale, with a skill to keep going.
> 
> 
> ## what's in it.
> 
> | category | effects | some of them |
> |---|---|---|
> | **moves** | 12 | arrow shot, dash strike, earth stomp, fireball throw, ground pound, holy smite… |
> | **fire** | 12 | brazier, campfire, candle, fire breath, fire ring, fire tornado… |
> | **explosions** | 12 | barrel explosion, big explosion, cartoon pow, dirt explosion, firework burst, firework rocket… |
> | **water** | 12 | bubbles, drip, fountain, geyser, rain splash, ripples… |
> | **ice** | 10 | blizzard vortex, freeze, frost breath, frost nova, ice crystal, ice lance… |
> | **lightning** | 11 | ball lightning, chain lightning, charge up, electrified, lightning strike, plasma ball… |
> | **sci-fi** | 12 | emp blast, energy core, force field, glitch, hologram, jetpack… |
> | **melee** | 12 | claw swipe, dagger flurry, double slash, hammer smash, heavy cleave, scythe reap… |
> | **impacts** | 11 | blunt hit, bullet impact, critical hit, ground slam, heavy landing, hit flash… |
> | **projectiles** | 13 | arrow, bullet tracer, cannon shot, energy disc, signal flare, homing missile… |
> | **spawn & death** | 10 | coin drop, disintegrate, dissolve burn, egg hatch, poof, respawn beam… |
> | **arcane** | 12 | arcane beam, arcane missiles, arcane orb, blink in, blink out, magic circle cast… |
> | **holy** | 10 | blessing, divine shield, feather burst, halo, heal, healing ring… |
> | **shadow** | 12 | black hole, curse, dark explosion, eclipse, grasping hands, hex sigil… |
> | **status** | 13 | bleeding, burning, charmed, confused, cursed, frozen… |
> | **nature** | 13 | acid splash, boulder, earth spike, healing bloom, leaf storm, poison cloud… |
> | **weather** | 12 | aurora, blizzard, cherry blossoms, clouds, falling leaves, fireflies… |
> | **ui** | 12 | achievement, coin collect, combo counter, confetti, countdown, crit number… |
> | **pickups** | 11 | chest open, coin spin, collect burst, crystal shard, gem spin, heart pickup… |
> | **transitions** | 10 | blinds, burn away, crt off, diamond wipe, glitch wipe, iris… |
> | **critters** | 12 | bat, bird, butterfly, eyeball, fish school, flying skull… |
> 
> Every effect is a file in `src/fx//.js`. The [catalog](docs/CATALOG.md) lists them all.
> 
> 
> ## use one.
> 
> **In a browser game** (canvas, Phaser, PixiJS, Kaplay, three.js), use the code. No dependencies.
> 
> ```js
> import { createFrame, clearFrame, createFx, composite } from "pixelfx";
> import * as frostNova from "pixelfx/fx/ice/frost-nova";
> 
> const frame = createFrame(320, 180);                   // your game's pixel resolution
> const img = new ImageData(320, 180);
> const fx = createFx(frostNova, { x: 160, y: 140 });   // also: flip, angle, seed, palette, light...
> 
> function tick(dt) {
>   fx.update(dt);
>   clearFrame(frame);
>   fx.draw(frame, "back");                              // behind characters
>   drawCharacters();
>   fx.draw(frame, "front");
>   composite(frame, img.data, backgroundColor);         // color, then light added on top
>   ctx.putImageData(img, 0, 0);                         // scale up with image-rendering: pixelated
> }
> ```
> 
> Install from GitHub with `npm i github:patch-gg/pixelfx`, or copy `src/core` and the effects you want.
> 
> **In any engine** (Godot, Unity, GameMaker, Defold, LÖVE, Bevy), use sprite sheets:
> 
> ```bash
> node tools/render.mjs ice/frost-nova --sheet
> ```
> 
> That writes a transparent PNG of every frame in a grid and an Aseprite-style JSON (frame rects, durations, and
> `meta.pixelfx` with fps, loop, columns and the pivot). Phaser's atlas loader and the Aseprite importers for Godot
> and Unity read it. `node tools/sheets.mjs` exports the whole library to `sheets/`.
> 
> Any effect takes a `palette` (a dark-to-bright ramp of hex colors), so a fire can burn blue and a heal can glow
> pink without touching its code:
> 
> ```bash
> node tools/render.mjs fire/torch --gif --opts '{"palette": ["#102","#215","#43a","#8cf","#cff","#fff"]}'
> ```
> 
> 
> ## acting.
> 
>   
> 
> An effect on its own looks like a sticker. What sells a hit is the body around it: the wind-up that says something is
> coming, the freeze on contact, the target rocking back, the recovery. So the 61 effects with a character, and the 12
> moves, say what the body does and when:
> 
> ```js
> export const act = {
>   target: { x: 58 },
>   poses: [
>     [-0.55, GUARD],            // he starts before the effect does (t = 0 is the effect's first frame)
>     [-0.3, WIND_UP],
>     [0, CUT, "snap"],          // "snap" holds the last pose and jumps on the key
>     [0.06, FOLLOW_THROUGH, "snap"],
>     [0.86, GUARD],
>   ],
>   hits: [{ t: 0.06, stop: 0.14, shake: 0.18, amp: 2, push: 2.8, straw: 18 }],   // freeze for 0.14 s on contact
> };
> ```
> 
> **Play the whole thing**, character and target included, by swapping `createFx` for `createAct`:
> 
> ```js
> import { createFrame, clearFrame, createAct, composite } from "pixelfx";
> import * as slash from "pixelfx/fx/melee/sword-slash";
> 
> const act = createAct(slash, { x: 80, y: 140 });
> 
> function tick(dt) {
>   act.update(dt);                                  // holds still by itself during a freeze
>   clearFrame(frame);
>   act.draw(frame);                                 // { body: false } and { target: false } leave them out
>   composite(frame, img.data, backgroundColor);
>   const [sx, sy] = act.shake;                      // throw the picture this far
>   ctx.putImageData(img, sx, sy);
> }
> ```
> 
> **Got your own character?** Effect ids haven't changed and a sprite sheet is still the effect alone, so existing games
> keep working. (Effects drawn on the body paint the stock dummy, so regenerate those if you ship them.) The timing is plain data: read `slash.act`, or `meta.pixelfx.act` in a sprite sheet's
> JSON (`windup`, `recovery`, `hits` with `t` and `freeze`, `poses`). Start your own wind-up animation that long before the effect, and
> stop updating everything for `freeze` seconds at each hit.
> 
> Effects drawn on the body (frost, poison, a scan line) are written against the standing character and follow him
> wherever he goes: each pixel of a pose knows which pixel of the standing body it came from. `node tools/act.mjs
>  --sheet` bakes a whole act, character included, into a sprite sheet.
> 
> The body is yours to use too: `skeleton(pose)` gives you every joint of a pose in 3D, to hang your own things on, and
> `posedParts(pose)` gives you each part drawn on its own.
> 
> 
> ## the skill.
> 
> The `pixelfx` skill teaches Claude Code to find, use, export and make effects. Install it as a plugin:
> 
> ```
> /plugin marketplace add patch-gg/pixelfx
> /plugin install pixelfx@pixelfx
> ```
> 
> or copy `skills/pixelfx` into `~/.claude/skills/`. Then ask for what you want:
> 
> - "Add a frost nova to my mage's ultimate."
> - "Make five takes on a coin pickup sparkle and show me the best two."
> - "Export the fire and explosions categories as sprite sheets for Godo

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/patch-gg/pixelfx) · [官方網站](https://patch-gg.github.io/pixelfx/)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "patch-gg--pixelfx"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "patch-gg--pixelfx" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W45" AND file.name != "patch-gg--pixelfx"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/patch-gg--pixelfx");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "patch-gg--pixelfx" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "patch-gg" AND file.name != "patch-gg--pixelfx"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/patch-gg--pixelfx");
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
> const me = dv.page("Repos/patch-gg--pixelfx");
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
> const me = dv.page("Repos/patch-gg--pixelfx");
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
> const me = dv.page("Repos/patch-gg--pixelfx");
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
> const me = dv.page("Repos/patch-gg--pixelfx");
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

> **2026-11-02** — 首次收錄
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

- [[2026-11-04|2026-11-04]] — 再次上榜，4.3k stars
- [[2026-11-03|2026-11-03]] — 再次上榜，3.7k stars
- [[2026-11-02|2026-11-02]] — 首次收錄，3.0k stars
