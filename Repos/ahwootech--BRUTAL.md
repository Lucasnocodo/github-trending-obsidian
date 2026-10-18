---
repo: ahwootech/BRUTAL
url: https://github.com/ahwootech/BRUTAL
owner: ahwootech
owner_type: Organization
language: C#
license: NOASSERTION
description: "A free, open source C# framework for making games, or your own game engine. Direct access to native APIs and Vulkan, with the low-level libraries around them. The foundation under Kitten Space Agency and RimWorld's Waylith engine."
homepage: "https://ahwoo.com/brutal"
stars: 1812
stars_per_day: 604
forks: 97
open_issues: 10
created: 2026-10-14
pushed_at: 2026-10-18
first_seen: 2026-10-16
week: "2026-W42"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: ""
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-16
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-10-21"
contributor_count: 5
engagement: "low"
issue_close_rate: 0
repo_size_kb: 4447
readme_length: 9883
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-10-16"
star_history: "2026-10-16:1253,2026-10-17:1607,2026-10-18:1812"
tags:
  - github
  - "category/other"
  - "lang/c#"
  - org
aliases:
  - "BRUTAL"
  - "ahwootech/BRUTAL"
---

# BRUTAL

**1.3k** stars · **1.3k** stars/天 · 建立 1 天前 · C# · NOASSERTION

```dataviewjs
const me = dv.page("Repos/ahwootech--BRUTAL");
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
> A free, open source C# framework for making games, or your own game engine. Direct access to native APIs and Vulkan, with the low-level libraries around them. The foundation under Kitten Space Agency and RimWorld's Waylith engine.

## 專案簡介

A free, open source C# framework for making games, or your own game engine. Direct access to native APIs and Vulkan, with the low-level libraries around them. The foundation under Kitten Space Agency and RimWorld's Waylith engine.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ahwootech--BRUTAL");
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
> const me = dv.page("Repos/ahwootech--BRUTAL");
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
| Forks | 63 |
| Open Issues | 6 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-10-16 |
| 建立日期 | 2026-10-14 |
| 官方網站 | [Link](https://ahwoo.com/brutal) |
| Repo 大小 | 4.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ahwootech/BRUTAL) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@st-ev](https://github.com/st-ev) | 4 |
> | [@werkz-by-drake](https://github.com/werkz-by-drake) | 2 |
> | [@rocket2guns](https://github.com/rocket2guns) | 2 |
> | [@LaurensDeV](https://github.com/LaurensDeV) | 1 |
> | [@renancamm](https://github.com/renancamm) | 1 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-15 ~ 2026-10-15）
> **活躍天數** 1 天 · **最新 commit** docs: add gruntz to the projects using brutal (#12)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#7](https://github.com/ahwootech/BRUTAL/issues/7) | Will this support other platforms besides desktop? | 2 | 4 |
> | [#11](https://github.com/ahwootech/BRUTAL/issues/11) | NativeList.Insert never updates Capacity, so the next Add wr | 1 | 2 |
> | [#14](https://github.com/ahwootech/BRUTAL/issues/14) | Splash image requirement / Licensing | 0 | 1 |
> | [#13](https://github.com/ahwootech/BRUTAL/issues/13) | Jolt 2026.10.2 (win-x64): valid triangle mesh fails; native  | 0 | 3 |

## README 摘錄

> [!info]- 展開查看原文 README
> # BRUTAL Framework
> 
> **A free, open source C# framework for making games, or your own game engine.**
> 
> BRUTAL is a framework. You can make a game directly with it, or use it as the foundation for a separate engine. We made Kitten Space Agency directly on BRUTAL. Ludeon built their Waylith engine on it to move RimWorld off Unity.
> 
> At its core is a custom interop layer giving C# direct access to native APIs and libraries. Around that we've built mathematics, memory management, strings, collections, job scheduling, logging, localization, and bindings for Vulkan, GLFW, Dear ImGui, FMOD, RakNet, Jolt and Box2D. BRUTAL doesn't make the architectural decisions for you. You write your own stack. You can use whatever NuGet packages you want, including third-party ones.
> 
> It's called BRUTAL for a reason. In some ways it's much harder to use than Unity, Unreal or Godot. In other ways, particularly if you're doing something unusual, it's considerably easier. You actually have to know what you want to do first.
> 
> ## Why
> 
> You are only as independent as your tools are.
> 
> Developers have surrendered an extraordinary amount of control over their work to companies whose interests are not necessarily aligned with their own. We're not suggesting everyone should make their own game engine. We're suggesting every developer should have the option to, without having to spend four years building the foundations first.
> 
> What that means in practice:
> 
> - **Free, including for commercial games.** No royalties. We don't want a percentage of your game's revenue. We ask for credit.
> - **Open source.** The source is here under an MIT-based licence. If one day we stop being accountable to developers, you can fork it and go your own way.
> - **Deliberately small.** We do a few low-level things well: interop, memory, concurrency, maths, strings, and bindings to native libraries, on the latest C# and Vulkan. We avoid allocations and unnecessary overhead and use unmanaged memory and unsafe code where it makes sense.
> - **A foundation, like a kernel.** Think of the Linux kernel and something like Ubuntu. It's not an exact comparison, but it gets the idea across. We provide the foundation and you build your own systems on top.
> 
> ### What BRUTAL is not
> 
> BRUTAL is not trying to be a general-purpose engine. There is no editor, no scene graph and no renderer, and we're not adding them. We push back on efforts to add more, because adding everything is how the industry ended up with the kind of engines we don't want to use. Pull requests that drift away from a clear purpose will be rejected.
> 
> ## Projects using BRUTAL
> 
> | Product | Studio | Engine (if any) |
> | --- | --- | --- |
> | [RimWorld](https://store.steampowered.com/app/294100/RimWorld/) | Ludeon Studios | Waylith |
> | [Kitten Space Agency](https://ahwoo.com/app/100000/kitten-space-agency/) | RocketWerkz | Direct on BRUTAL |
> | Torpedia | RocketWerkz | Direct on BRUTAL |
> | Art of the Rail | RocketWerkz | Direct on BRUTAL |
> | [Gruntz](https://www.youtube.com/watch?v=ROB5IilenZE) | RocketWerkz | Direct on BRUTAL |
> | Afterskies | Floating Origin Interactive | Direct on BRUTAL |
> 
> Ludeon report 2 to 4 times the performance of the Unity build in their own tests, with the vast majority of existing mods still compatible. See their [Steam announcement](https://steamcommunity.com/games/294100/announcements/detail/672882362547178634).
> 
> Kitten Space Agency is a free pre-alpha spaceflight simulation. It runs a solar system at real scale, and is the first major project built directly on BRUTAL. [Download it on Ahwoo](https://ahwoo.com/app/100000/kitten-space-agency/) and see the technology yourself.
> 
> ## What is in the box
> 
> Each top-level folder in this repository is one library, published as a NuGet package. Reference only the ones you need.
> 
> | Library | What it is |
> | --- | --- |
> | `Brutal.Core` | Base types, attributes, platform detection, pointer helpers, Roslyn analyzers |
> | `Brutal.Interop` | The custom interop layer that gives C# direct access to native APIs |
> | `Brutal.Memory` | Unmanaged memory management and allocators |
> | `Brutal.Collections` | Collections that don't allocate |
> | `Brutal.Strings` | String building and handling without allocation |
> | `Brutal.Maths`, `Brutal.Numerics` | Vector, matrix and numeric types |
> | `Brutal.Concurrency` | Job system and threading |
> | `Brutal.Logging` | Logging |
> | `Brutal.Localization` | Localization |
> | `Brutal.Vulkan`, `Brutal.Vulkan.Abstractions`, `Brutal.Vulkan.Vma` | Vulkan bindings, abstractions and the Vulkan Memory Allocator |
> | `Brutal.OpenGl` | OpenGL bindings |
> | `Brutal.ShaderC`, `Brutal.Slang` | Shader compilation |
> | `Brutal.Glfw`, `Brutal.Sdl`, `Brutal.Sdl.Image`, `Brutal.Sdl.Mixer`, `Brutal.Sdl.Ttf` | Windowing and input, with SDL's image, audio mixing and font add-ons |
> | `Brutal.ImGui`, `Brutal.ImGui.*`, `Brutal.ImPlot` | Dear ImGui and ImPlot bindings, docking branch |
> | `Brutal.Render.Mesh` | Mesh utilities |
> | `Brutal.Texture`, `Brutal.Texture.Abstractions`, `Brutal.Ktx`, `Brutal.Gli`, `Brutal.Stb` | Texture loading, KTX and compressed formats, image decoding |
> | `Brutal.Gltf`, `Brutal.MeshOptimizer` | glTF loading and mesh optimisation |
> | `Brutal.FreeType` | Font rasterisation |
> | `Brutal.Fmod`, `Brutal.OpenAl` | Audio |
> | `Brutal.RakNet` | Networking |
> | `Brutal.Jolt`, `Brutal.Box2D` | 3D and 2D physics |
> | `Brutal.Monitor.Common`, `Brutal.Monitor.Host`, `Brutal.RenderDoc`, `Brutal.RenderDoc.ImGui` | Runtime monitoring and RenderDoc capture integration |
> | `Brutal.NativeFileDialog`, `Brutal.NotCurses`, `Brutal.ZLib` | Native file dialogs, terminal UI, compression |
> 
> Third-party notices for each library live in its `LICENSES` folder, `Brutal.ImGui/LICENSES` say.
> 
> ## Getting started
> 
> ### Prerequisites
> 
> - [.NET 10 SDK](https://dotnet.microsoft.com/download)
> - A Vulkan 1.3 capable GPU with current drivers (if you render)
> - The [Vulkan SDK](https://vulkan.lunarg.com/) if you want validation layers while developing
> - Windows or Linux
> 
> ### Your first window
> 
> Create a project and add Core and Glfw:
> 
> ```sh
> dotnet new console -n HelloBrutal
> cd HelloBrutal
> dotnet add package Ahwoo.Brutal.Core
> dotnet add package Ahwoo.Brutal.Glfw
> ```
> 
> Replace `Program.cs`:
> 
> ```csharp
> using Brutal.GlfwApi;
> using Brutal.Numerics;
> 
> if (!Glfw.Init())
>     throw new Exception("Failed to initialize GLFW");
> 
> Glfw.WindowHint(GlfwWindowHint.ClientApi, 0);
> var window = Glfw.CreateWindow(new GlfwWindow.CreateInfo
> {
>     Title = "Hello BRUTAL",
>     Size = new int2(1280, 720),
> });
> 
> while (!window.ShouldClose)
>     Glfw.PollEvents();
> 
> Glfw.Terminate();
> ```
> 
> ```sh
> dotnet run
> ```
> 
> That opens a window with no graphics API. What you add next is up to you:
> 
> - **Rendering:** `Ahwoo.Brutal.Vulkan.Abstractions` and `Ahwoo.Brutal.Vulkan.Vma` for a Vulkan renderer, `Ahwoo.Brutal.ShaderC` to compile shaders at runtime.
> - **Debug UI:** `Ahwoo.Brutal.ImGui` and `Ahwoo.Brutal.ImPlot`.
> - **Parallelism:** `Ahwoo.Brutal.Concurrency` for the job system.
> - **Audio and networking:** `Ahwoo.Brutal.Fmod`, `Ahwoo.Brutal.RakNet`.
> 
> Questions and "how do I" threads go on the [Guides and Help forum](https://forums.ahwoo.com/forums/brutal/guides-and-help/).
> 
> ### Building from source
> 
> This is the source for every published package. Project files, a solution and build scripts are coming. Until then use the NuGet packages, and use this repository to read and fork the code.
> 
> ```sh
> git clone https://github.com/ahwootech/BRUTAL.git
> ```
> 
> ## Licence
> 
> BRUTAL is free to use, modify and distribute, including in commercial games. There are no royalties and we don't want a percentage of your game's revenue.
> 
> The licence is based on MIT with an added attribution requirement. A game or product built with BRUTAL:
> 
> 1. includes the BRUTAL copyright notice in its credits screen, or equivalent (section 2.1)
> 2. shows the BRUTAL logo before gameplay starts (section 2.2)
> 3. ships `NOTICE.txt` alongside the product (section 2.3)
> 
> If you don't want to do that, we can arrange a separate commer

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/ahwootech/BRUTAL) · [官方網站](https://ahwoo.com/brutal)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "ahwootech--BRUTAL"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C#" AND file.name != "ahwootech--BRUTAL" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W42" AND file.name != "ahwootech--BRUTAL"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/ahwootech--BRUTAL");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ahwootech--BRUTAL" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ahwootech" AND file.name != "ahwootech--BRUTAL"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ahwootech--BRUTAL");
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
> const me = dv.page("Repos/ahwootech--BRUTAL");
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
> const me = dv.page("Repos/ahwootech--BRUTAL");
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
> const me = dv.page("Repos/ahwootech--BRUTAL");
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
> const me = dv.page("Repos/ahwootech--BRUTAL");
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

> **2026-10-16** — 首次收錄
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

- [[2026-10-18|2026-10-18]] — 再次上榜，1.8k stars
- [[2026-10-17|2026-10-17]] — 再次上榜，1.6k stars
- [[2026-10-16|2026-10-16]] — 首次收錄，1.3k stars
