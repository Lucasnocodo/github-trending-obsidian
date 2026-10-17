---
repo: opengeos/RustGIS
url: https://github.com/opengeos/RustGIS
owner: opengeos
owner_type: Organization
language: Rust
license: Apache-2.0
description: "A fast, free and open-source GIS in pure Rust."
homepage: "https://rustgis.app"
stars: 1380
stars_per_day: 230
forks: 192
open_issues: 33
created: 2026-10-10
pushed_at: 2026-10-17
first_seen: 2026-10-16
week: "2026-W42"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.2.0"
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
appearances: 2
next_review: "2026-10-20"
contributor_count: 5
engagement: "medium"
issue_close_rate: 54
repo_size_kb: 5160
readme_length: 9252
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-16"
star_history: "2026-10-16:1237,2026-10-17:1380"
tags:
  - github
  - "category/other"
  - "lang/rust"
  - org
  - "topic/geospatial"
  - "topic/gis"
  - "topic/remote_sensing"
  - "topic/rust"
  - "topic/rust_lang"
aliases:
  - "RustGIS"
  - "opengeos/RustGIS"
---

# RustGIS

**1.2k** stars · **247** stars/天 · 建立 5 天前 · Rust · Apache-2.0

```dataviewjs
const me = dv.page("Repos/opengeos--RustGIS");
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

`ORG` `v0.2.0`

`geospatial` `gis` `remote-sensing` `rust` `rust-lang`

> [!summary] 一句話摘要
> A fast, free and open-source GIS in pure Rust.

## 專案簡介

A fast, free and open-source GIS in pure Rust.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/opengeos--RustGIS");
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
> const me = dv.page("Repos/opengeos--RustGIS");
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
| Forks | 171 |
| Open Issues | 30 |
| Issue 解決率 | 54% (35 closed) |
| 最後推送 | 2026-10-16 |
| 建立日期 | 2026-10-10 |
| 官方網站 | [Link](https://rustgis.app) |
| Repo 大小 | 5.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/opengeos/RustGIS) |
| Topics | `geospatial` `gis` `remote-sensing` `rust` `rust-lang` |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members` `default-members` `version` `edition` `license` `rust-version` `repository` `rustgis-geom` `rustgis-data` `rustgis-map` `rustgis-analysis` `rustgis-render` `rustgis-engine` `rustgis-ui-egui`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Rust" : 98
>     "Shell" : 1
>     "Python" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@giswqs](https://github.com/giswqs) | 167 |
> | [@jgregoriorincon](https://github.com/jgregoriorincon) | 22 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 8 |
> | [@elpidioassinaturas](https://github.com/elpidioassinaturas) | 5 |
> | [@TalhaHunter101](https://github.com/TalhaHunter101) | 4 |

**最新版本**：v0.2.0 (2026-10-13)

> [!info]- Release Notes
> RustGIS v0.2.0 opens far more of your data, in the app and in the browser, and lets AI agents drive it. GeoPackage, GeoParquet, FlatGeobuf, KML and GPX open natively, large files stream a view at a time, and the web app at [web.rustgis.app](https://web.rustgis.app) reads them too. SQL queries run through DuckDB, an MCP server lets AI agents make maps, and the ribbon is reorganised around the order of the work.
> 
> ## Highlights
> 
> - **More data, read in place**: GeoPackage, GeoParquet and FlatGeobuf open in place, and large files are read a view at a time; KML and KMZ (styles included) and GPX open natively; zipped Shapefiles open, with the coordinate system from their `.prj`; PMTiles raster and vector archives open by web address or file; GeoTIFF adds palette images and files in their own projection. All of these work in the web app too (GeoPackages through a pure-Rust SQLite reader, PMTiles by web address). See the new [Supported Data Formats](https://rustgis.app/user-guide/data-formats/) page.
> - **Export to more formats**: layers export to GeoPackage, GeoParquet, Shapefile and KMZ, alongside GeoJSON, CSV, FlatGeobuf, KML, GPX and WKT.
> - **SQL and DuckDB, and GDAL's formats**: run SQL queries and open DuckDB databases through DuckDB Spatial, and read File Geodatabase, DXF and the other vector formats GDAL supports through `ogr2ogr`, when they are installed.
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-16 ~ 2026-10-16）
> **活躍天數** 1 天 · **最新 commit** Fix Copy Coordinates in the map menu; remove, import and export bookmarks; movable dialogs (#295)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#77](https://github.com/opengeos/RustGIS/issues/77) | Tracking: feature parity with GeoLibre `enhancement` | 1 | 0 |
> | [#301](https://github.com/opengeos/RustGIS/issues/301) | [Feature]: List layers by Drawing Order, Data Source or Sele `enhancement` | 0 | 0 |
> | [#300](https://github.com/opengeos/RustGIS/issues/300) | [Feature]: Filter layers by name in the Layers pane `enhancement` | 0 | 0 |
> | [#299](https://github.com/opengeos/RustGIS/issues/299) | [Feature]: Tabs in the left pane header to switch between La `enhancement` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> RustGIS
> 
>   A fast, free and open-source GIS in pure Rust for mapping, analyzing and sharing geospatial data.
>   Native on Windows, macOS and Linux, and in your web browser. Your data stays on your machine
>   unless you send it to an AI model you choose, and every action is a command you can script.
> 
>   
>   
>   
>   
>   
>   
> 
>   
>   
>   
> 
>   
> 
> 
> ## Quick start
> 
> ```sh
> cargo run --release -p rustgis                       # the desktop app with the World Atlas sample
> cargo run --release -p rustgis -- data.geojson       # open data (or a .rgis project)
> ```
> 
> Command line: every ribbon action is a command with an id.
> 
> ```sh
> rustgis-cli commands                                 # all command ids and parameters
> rustgis-cli render countries.geojson map.png --basemap ocean
> rustgis-cli run --sample \
>   --cmd 'gp.run={"tool":"countPoints","params":{"polygons":"Countries","points":"Cities"}}' \
>   --cmd 'layer.symbology={"layer":"Countries_Summarize","type":"graduated","field":"point_count"}' \
>   --cmd 'share.exportMap={"path":"out.png","dpi":192}' --save atlas.rgis
> rustgis-cli ask --sample "Which 5 countries have the largest GDP?"
> claude mcp add rustgis -- rustgis-cli mcp --sample   # RustGIS as an MCP server for AI agents
> ```
> 
> See [Command Line](docs/cli.md) for more.
> 
> Python: the same engine and commands in-process (`pip install rustgis`), and the app itself in a
> Jupyter notebook.
> 
> ```python
> import rustgis
> s = rustgis.Session(sample=True)
> s.run("gp.run", tool="buffer", params={"input": "Cities", "distance": 100})
> s.to_png("map.png")
> gdf = s.layer("Cities_Buffer").to_geopandas()
> ```
> 
> See [Python](docs/python.md) and the [getting-started notebook](apps/rustgis-python/examples/getting-started.ipynb)
> ([open in Colab](https://colab.research.google.com/github/opengeos/RustGIS/blob/main/apps/rustgis-python/examples/getting-started.ipynb)).
> 
> 
> ## Features
> 
> | Area | Highlights |
> |---|---|
> | **Data** | GeoJSON, CSV/TSV with x/y columns in any coordinate system or WKT geometry, Excel and OpenDocument spreadsheets, GeoRSS, LandXML, encoded polylines, Shapefile (zipped too, in the browser as well), GeoPackage, GeoParquet, FlatGeobuf, KML/KMZ (with styles), GPX, GML, MapInfo MIF/MID, OpenStreetMap PBF, TopoJSON, AutoCAD DXF, LiDAR point clouds (LAS, LAZ, COPC) and geotagged photos in (large files read in place), files by their web address, every vector format GDAL reads when it is installed, PostGIS tables read live from PostgreSQL, and SQL queries and DuckDB databases through DuckDB Spatial when DuckDB is; PMTiles archives (web or file) and MBTiles files; GeoJSON, CSV, GeoPackage, GeoParquet, Shapefile, FlatGeobuf, KML/KMZ, GPX and WKT out; standalone tables; layer and map files, styles, templates and packages |
> | **Rasters** | GeoTIFF and cloud-optimised GeoTIFF (any pixel type, tiled or striped, compressed), ASCII grids, Zarr 2 and 3 stores (a variable at a time step, by folder or web address); reprojection from any EPSG code; Stretch, RGB, Classify, Unique Values, Colormap and Shaded Relief; DRA, band combinations, brightness/contrast/gamma; raster functions, indices, change detection, classification, georeferencing |
> | **Maps** | Multiple maps per project; a 3D globe; Web Mercator or any projection (Equal Earth, Robinson, Winkel Tripel, polar and regional presets, or an EPSG code); bookmarks, extent history, Go To XY; five offline basemaps |
> | **Web services** | WMS, WMTS, WFS, OGC API Features and ArcGIS REST (FeatureServer, MapServer, ImageServer, VectorTileServer) from their capabilities |
> | **Web tiles** | XYZ/TMS/WMS raster tiles, Mapbox Vector Tiles and MapLibre styles (sprites, patterns, expressions), cached and fetched in the background |
> | **Cartography** | Single symbol, unique values, graduated colours, proportional symbols; collision-free labels with placement, scale ranges and annotation; masking, display filters, aggregation bins, 2.5D extrusion; graphics and dynamic text |
> | **Editing** | Create, move, rotate, scale, merge, split and explode features; snapping, templates, elevation, traverse, topology rules; domains, subtypes, attribute rules, relationships, archiving; undo for everything |
> | **Analysis** | Selection by attributes (SQL) and location; Buffer, Clip, Erase, Dissolve, Summarize Within, Summary Statistics and more; viewshed, line of sight, IDW, shortest path, suitability modelling; ModelBuilder and scripts; 1,000+ [GeoLibre](https://github.com/opengeos/geolibre-rust) and Whitebox raster, vector, LiDAR, hydrology and terrain tools |
> | **Imagery** | Ortho and reality mapping, pixel classification (k-means, minimum distance, a trainable neural network), mensuration, hosted imagery tiles |
> | **Layouts and reports** | Page layouts with map frames, legends, scale bars, grids and map series; reports with groups, statistics, charts and subreports; presentations (HTML slideshow, PDF); notebooks (Jupyter in and out) |
> | **Sharing** | PNG export at any DPI; PDF; web map pages, OGC API Features collections, MapLibre styles, glTF scenes, locators; project, map and mobile map packages; offline areas with sync |
> | **AI Assistant** | Ask about your data or tell the map what to do in plain language, with Anthropic, OpenAI (a key, or your ChatGPT plan by signing in), Gemini, OpenRouter, Ollama or any OpenAI-compatible model; also `rustgis-cli ask`, and an [MCP server](docs/mcp.md) (`rustgis-cli mcp`) for Claude Code, Cursor, VS Code and other agents |
> | **Plugins** | Sandboxed WebAssembly [plugins](docs/plugins.md) add commands, tools and ribbon tabs; install them from [plugins.rustgis.app](https://plugins.rustgis.app) on the desktop, command line and web |
> | **Interface** | Command search (Ctrl+K), keyboard shortcuts, dark mode, a customizable ribbon and Quick Access Toolbar, linked side-by-side maps, 16 languages |
> 
> The [user guide](https://rustgis.app/user-guide/) covers each area in detail,
> [Comparison](https://rustgis.app/comparison/) sets RustGIS beside GeoLibre, QGIS and ArcGIS, and
> [ROADMAP.md](ROADMAP.md) lists what's next.
> 
> 
> ## Why RustGIS
> 
> - **Fast and small.** One native program, drawn on the GPU, with no runtime to install and no
>   server to run.
> - **Runs everywhere.** The same app on Windows, macOS and Linux, and compiled to WebAssembly at
>   [web.rustgis.app](https://web.rustgis.app) with nothing to install.
> - **Local and private.** Your files are read and written on your machine, and nothing is uploaded
>   on its own. The network is used only when you ask for it: web basemaps, plugins, the GeoLibre
>   tools and the AI model you pick, which receives your questions and the data it reads to answer
>   them.
> - **Everything is a command.** Every button in the ribbon is a command with an id. Script it from
>   `rustgis-cli`, chain it in notebooks and models, or ask the AI Assistant to run it for you.
> - **Familiar.** A ribbon laid out in the order of the work (Home, Data, Style, Edit, Analyze,
>   View, Publish), Layers and Browser panes, an attribute table, and undo for every change.
> - **Extensible.** Over 1,000 GeoLibre and Whitebox tools for terrain, hydrology, LiDAR and remote sensing, and
>   sandboxed WebAssembly [plugins](docs/plugins.md) that add commands, tools and ribbon tabs.
> 
> 
> ## A tour
> 
> Symbology and tables. Selecting a layer opens its contextual tabs: symbology, effects, labeling and data. Selection is synced between the map and the attribute table.
> AI Assistant. Ask about your data or tell the map what to do. The assistant runs RustGIS commands for you, and each change can be undone.
> 
> Analysis. A tool gallery, the Tools pane and a run history, guided workflows, ModelBuilder, and 1,000+ GeoLibre and Whitebox tools.
> Rasters. GeoTIFF and COG of any pixel type, reprojected on the fly, with stretch, RGB, classified and shaded-relief symbology.
> 
> Globe and projections. A 3D globe, Equal Earth, Robinson, polar and regional presets, or any EPSG code.
> Web basemaps. XYZ, TMS and WMS tiles, Mapbox Vector Tiles and MapLibre styles, on the flat map and the globe.
> 
> Layouts. Map

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/opengeos/RustGIS) · [官方網站](https://rustgis.app)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "opengeos--RustGIS"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "opengeos--RustGIS" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W42" AND file.name != "opengeos--RustGIS"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/opengeos--RustGIS");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "opengeos--RustGIS" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "opengeos" AND file.name != "opengeos--RustGIS"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/opengeos--RustGIS");
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
> const me = dv.page("Repos/opengeos--RustGIS");
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
> const me = dv.page("Repos/opengeos--RustGIS");
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
> const me = dv.page("Repos/opengeos--RustGIS");
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
> const me = dv.page("Repos/opengeos--RustGIS");
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

- [[2026-10-17|2026-10-17]] — 再次上榜，1.4k stars
- [[2026-10-16|2026-10-16]] — 首次收錄，1.2k stars
