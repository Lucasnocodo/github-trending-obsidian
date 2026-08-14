---
repo: Flaminis/Dalaran
url: https://github.com/Flaminis/Dalaran
owner: Flaminis
owner_type: User
language: Rust
license: Apache-2.0
description: "Dalaran — Apache-2.0, robotics-first visualization and data infrastructure for multimodal time-series. ROS 2 native, reads existing .rrd recordings. A hard fork of Rerun."
homepage: ""
stars: 938
stars_per_day: 156
forks: 56
open_issues: 8
created: 2026-08-07
pushed_at: 2026-08-12
first_seen: 2026-08-13
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
last_reviewed: 2026-08-13
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-08-21"
contributor_count: 5
engagement: "low"
issue_close_rate: 0
repo_size_kb: 155238
readme_length: 9607
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-08-13"
star_history: "2026-08-13:891,2026-08-14:938"
tags:
  - github
  - "category/other"
  - "lang/rust"
  - "topic/apache2"
  - "topic/computer_vision"
  - "topic/lidar"
  - "topic/pointcloud"
  - "topic/python"
aliases:
  - "Dalaran"
  - "Flaminis/Dalaran"
---

# Dalaran

**891** stars · **178** stars/天 · 建立 5 天前 · Rust · Apache-2.0

```dataviewjs
const me = dv.page("Repos/Flaminis--Dalaran");
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

`apache2` `computer-vision` `lidar` `pointcloud` `python` `robotics` `ros2` `rust` `time-series` `visualization`

> [!summary] 一句話摘要
> Dalaran — Apache-2.0, robotics-first visualization and data infrastructure for multimodal time-series. ROS 2 native, reads existing .rrd recordings. A hard fork of Rerun.

## 專案簡介

Dalaran — Apache-2.0, robotics-first visualization and data infrastructure for multimodal time-series. ROS 2 native, reads existing .rrd recordings. A hard fork of Rerun.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Flaminis--Dalaran");
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
> const me = dv.page("Repos/Flaminis--Dalaran");
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
| Forks | 55 |
| Open Issues | 8 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-08-12 |
| 建立日期 | 2026-08-07 |
| Repo 大小 | 151.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Flaminis/Dalaran) |
| Topics | `apache2` `computer-vision` `lidar` `pointcloud` `python` `robotics` `ros2` `rust` |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members` `exclude` `authors` `edition` `homepage` `include` `license` `repository` `rust-version` `version` `ignored` `ignored-paths` `dl_build_info` `dl_build_tools`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 82
>     "Python" : 14
>     "C++" : 2
>     "WGSL" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@emilk](https://github.com/emilk) | 2309 |
> | [@Wumpf](https://github.com/Wumpf) | 1626 |
> | [@teh-cmc](https://github.com/teh-cmc) | 1033 |
> | [@abey79](https://github.com/abey79) | 849 |
> | [@jprochazk](https://github.com/jprochazk) | 438 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-07 ~ 2026-08-07）
> **活躍天數** 1 天 · **最新 commit** style(tests): replace throwaway lambdas in the frame-transform test

## README 摘錄

> [!info]- 展開查看原文 README
> # Dalaran
> 
> **Dalaran is an Apache-2.0, robotics-first observability and visualization stack
> for multimodal time-series data — ROS 2 topics, LiDAR sweeps, camera streams,
> IMU, and TF transforms, recorded and replayed on one timeline.**
> 
> You log data from your robot, your simulator, or an offline pipeline; Dalaran
> stores it in an Arrow-backed columnar chunk store, renders it in a 3D/2D viewer
> that stays in sync across every sensor, and hands the same data back to you as
> dataframes when you want to compute on it instead of look at it.
> 
> ---
> 
> 
> ## 60-second quickstart
> 
> 
> ## Why Dalaran
> 
> Everything below is what Dalaran adds for robotics teams specifically, and
> everything below works today — it is code in this repository with tests, not a
> roadmap. What is *not* built yet lives in [ROADMAP.md](ROADMAP.md).
> 
> - **`dalaran.robot`, a high-level robotics logging API** — one handle that knows
>   about a robot: joint states, base pose, sensor frames, and URDF-driven link
>   transforms, so you log `robot.log_joint_states(...)` instead of hand-rolling a
>   dozen entity paths and quaternion conversions. Point it at a URDF and joint
>   limits, joint axes and `` joints are honoured for you.
> - **ROS 2 bridge and rosbag2 replay** — subscribe to live ROS 2
>   topics or replay a rosbag2 into Dalaran, backed by an **extensible message
>   registry** so you can teach it your own `.msg` types without patching the
>   core. Today the repository already ingests MCAP and a set of common ROS
>   message schemas.
> - **ROS axis-convention helpers** — REP-103/REP-105 conventions (`x`-forward
>   `z`-up, ENU vs. NED for positions *and* orientations, `map`/`odom`/`base_link`
>   frame semantics that make the direction hard to get backwards) as first-class
>   helpers, because silently mismatched axis conventions are the single most
>   common way a robotics visualization ends up wrong.
> - **Occupancy grids and costmaps** — `nav_msgs/OccupancyGrid`, `nav2_msgs/Costmap`
>   and nav2's `/global_costmap` and `/local_costmap` topics land on the `GridMap`
>   archetype with proper origin/resolution handling, instead of being flattened
>   into an untyped image. nav2's cost semantics are modelled properly, so
>   `INSCRIBED_INFLATED_OBSTACLE` and `LETHAL_OBSTACLE` are drawn as the categories
>   they are rather than as points on the cost gradient, a costmap's layers stack
>   as separate entities with their own draw order and opacity, and the rolling
>   local window keeps one entity while its origin moves.
> - **`dalaran doctor`** — a diagnostic subcommand that inspects your environment
>   (build info, wgpu adapters and drivers, `DALARAN_*` variables, headless and
>   ROS 2 setup, recording integrity) and tells you what is wrong in plain
>   language. It lives in the viewer binary, so it still runs when your Python
>   installation is the thing that is broken; `dalaran-doctor` covers the
>   interpreter and SDK/viewer version skew from the Python side.
> - **`.dlrpack` portable dataset bundles** — a single file that
>   carries recordings, the blueprint, referenced assets, and metadata, so
>   "here is the run that failed" is one artifact you can hand to a colleague.
> - **Apache-2.0 throughout, self-hostable** — no dual-licence ambiguity, no
>   hosted-service dependency. Everything in this repository runs on your own
>   machines, and the catalog server is part of the open-source tree.
> 
> 
> ### Python
> 
> ```sh
> pip install dalaran-sdk
> ```
> 
> ```python
> import dalaran as dl
> import numpy as np
> 
> dl.init("dalaran_example_app", spawn=True)  # spawn a viewer process and stream to it
> 
> positions = np.random.default_rng(0).normal(size=(1000, 3)).astype(np.float32)
> colors = np.random.default_rng(1).integers(0, 255, size=(1000, 3), dtype=np.uint8)
> 
> for frame in range(100):
>     dl.set_time("frame", sequence=frame)
>     dl.log("world/points", dl.Points3D(positions + frame * 0.01, colors=colors))
> ```
> 
> Write to a file instead of a live viewer with `dl.save("session.dlr")`, then
> open it later with `dalaran session.dlr`.
> 
> 
> ### Rust
> 
> ```sh
> cargo add dalaran
> ```
> 
> ```rust
> fn main() -> Result> {
>     let rec = dalaran::RecordingStreamBuilder::new("dalaran_example_app").spawn()?;
> 
>     let positions: Vec = (0..1000)
>         .map(|i| ((i % 10) as f32, ((i / 10) % 10) as f32, (i / 100) as f32))
>         .collect();
> 
>     rec.set_time_sequence("frame", 0);
>     rec.log("world/points", &dalaran::Points3D::new(positions))?;
> 
>     Ok(())
> }
> ```
> 
> 
> ### C++
> 
> Fetch the SDK in your `CMakeLists.txt` and link against `dalaran_sdk`:
> 
> ```cmake
> include(FetchContent)
> FetchContent_Declare(dalaran_sdk URL
>   https://github.com/Flaminis/Dalaran/releases/latest/download/dalaran_cpp_sdk.zip)
> FetchContent_MakeAvailable(dalaran_sdk)
> target_link_libraries(your_target PRIVATE dalaran_sdk)
> ```
> 
> ```cpp
> #include 
> 
> int main() {
>     const auto rec = dalaran::RecordingStream("dalaran_example_app");
>     rec.spawn().exit_on_failure();
> 
>     rec.set_time_sequence("frame", 0);
>     rec.log("world/points", dalaran::Points3D({{0.0f, 0.0f, 0.0f}, {1.0f, 1.0f, 1.0f}}));
> }
> ```
> 
> 
> ### The viewer and CLI
> 
> The `dalaran` binary is both the viewer and the CLI. It ships with the Python
> wheel, or you can install it on its own:
> 
> ```sh
> cargo install dalaran-cli --locked
> dalaran --help
> dalaran session.dlr        # open a recording
> dalaran --serve            # serve a web viewer
> ```
> 
> Recordings are `.dlr` files and saved blueprints are `.dbl` files. Live streams
> and remote catalogs are addressed with `dalaran://` URIs.
> 
> ---
> 
> 
> ## Reading existing `.rrd` recordings
> 
> Dalaran did not change the storage container. The on-disk format still uses the
> `RRF2` fourcc, so `dalaran recording.rrd` opens an upstream recording directly —
> no renaming and no conversion step — and `dalaran convert` will turn one into a
> `.dlr` if you want it normalized.
> 
> How far that goes, stated precisely, because "compatible" is easy to overclaim:
> 
> - **Container and framing: compatible.** The stream header, framing and footer
>   are unchanged, and legacy `.rrd`/`.rbl` extensions are accepted everywhere
>   `.dlr`/`.dbl` are.
> - **Chunk data: compatible.** Upstream writes its Arrow metadata under `rerun:*`
>   and Dalaran writes `dalaran:*`; readers accept both, so chunks, entity paths,
>   timelines and segment ids resolve out of an upstream file.
> - **Blueprints from upstream: partial.** Some component descriptors in upstream
>   blueprint stores do not yet resolve here, so a recording's saved layout may be
>   ignored while its data loads. Being worked on.
> - **Very old recordings:** bounded by the same migration rules that apply
>   upstream. Recordings from long-past versions may need a migration pass.
> 
> 
> ## Architecture
> 
> Rust crates live under `crates/` and are prefixed `dl_*`. The table lists the
> ones worth knowing about first; each directory has its own `README.md`.
> 
> | Crate | Group | What it does |
> | --- | --- | --- |
> | [`dalaran`](crates/top/dalaran) | top | Umbrella crate. What `cargo add dalaran` gives you. |
> | [`dalaran-cli`](crates/top/dalaran-cli) | top | The `dalaran` binary: viewer, CLI, web server. |
> | [`dl_sdk`](crates/top/dl_sdk) | top | The logging SDK proper: `RecordingStream` and sinks. |
> | [`dalaran_c`](crates/top/dalaran_c) | top | C API (`dl_`/`DL_` prefixed), which the C++ SDK wraps. |
> | [`dl_types`](crates/store/dl_types) | store | Generated archetypes, components, and datatypes. |
> | [`dl_log_types`](crates/store/dl_log_types) | store | Entity paths, timelines, and core log primitives. |
> | [`dl_chunk`](crates/store/dl_chunk) | store | The Arrow chunk: the unit of data everything moves in. |
> | [`dl_chunk_store`](crates/store/dl_chunk_store) | store | Indexed storage and retrieval of chunks. |
> | [`dl_query`](crates/store/dl_query) | store | Latest-at and range queries over the store. |
> | [`dl_dataframe`](crates/store/dl_dataframe) | store | Dataframe view of a recording, for getting data back out. |
> | [`dl_log_encoding`](crates/store/dl_log_encoding) | store | The `.dlr` container: encode, decode, migrate. |
> | [`dl_mcap`](crates/store/dl_mcap) | store | MCAP ingest

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]] · [[FareedKhan-dev--kimi-k3-in-c|FareedKhan-dev/kimi-k3-in-c]]

[GitHub](https://github.com/Flaminis/Dalaran)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Flaminis--Dalaran"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "Flaminis--Dalaran" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W33" AND file.name != "Flaminis--Dalaran"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Flaminis--Dalaran");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Flaminis--Dalaran" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Flaminis" AND file.name != "Flaminis--Dalaran"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Flaminis--Dalaran");
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
> const me = dv.page("Repos/Flaminis--Dalaran");
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
> const me = dv.page("Repos/Flaminis--Dalaran");
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
> const me = dv.page("Repos/Flaminis--Dalaran");
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
> const me = dv.page("Repos/Flaminis--Dalaran");
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

> **2026-08-13** — 首次收錄
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

- [[2026-08-14|2026-08-14]] — 再次上榜，938 stars
- [[2026-08-13|2026-08-13]] — 首次收錄，891 stars
