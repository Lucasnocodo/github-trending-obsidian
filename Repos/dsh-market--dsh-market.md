---
repo: dsh-market/dsh-market
url: https://github.com/dsh-market/dsh-market
owner: dsh-market
owner_type: Organization
language: TypeScript
license: MIT
description: "The plugin market inside DeepSeek Harness — browse, search, one-click install · DSH 可视化插件市场"
homepage: "https://dshmarket.com"
stars: 1466
stars_per_day: 244
forks: 85
open_issues: 32
created: 2026-08-14
pushed_at: 2026-08-21
first_seen: 2026-08-21
week: "2026-W34"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: "v1.16.2"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-21
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-08-24"
contributor_count: 5
engagement: "low"
issue_close_rate: 78
repo_size_kb: 10205
readme_length: 9902
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-08-21"
star_history: "2026-08-21:1466"
tags:
  - github
  - "category/other"
  - "lang/typescript"
  - org
  - "topic/deepseek_harness"
  - "topic/dsh_plugin"
  - "topic/marketplace"
aliases:
  - "dsh-market"
  - "dsh-market/dsh-market"
---

# dsh-market

**1.5k** stars · **244** stars/天 · 建立 6 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/dsh-market--dsh-market");
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

`ORG` `v1.16.2`

`deepseek-harness` `dsh-plugin` `marketplace`

> [!summary] 一句話摘要
> The plugin market inside DeepSeek Harness — browse, search, one-click install · DSH 可视化插件市场

## 專案簡介

The plugin market inside DeepSeek Harness — browse, search, one-click install · DSH 可视化插件市场

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/dsh-market--dsh-market");
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
> const me = dv.page("Repos/dsh-market--dsh-market");
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
| Forks | 85 |
| Open Issues | 32 |
| Issue 解決率 | 78% (112 closed) |
| 最後推送 | 2026-08-21 |
| 建立日期 | 2026-08-14 |
| 官方網站 | [Link](https://dshmarket.com) |
| Repo 大小 | 10.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/dsh-market/dsh-market) |
| Topics | `deepseek-harness` `dsh-plugin` `marketplace` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 74
>     "JavaScript" : 21
>     "CSS" : 2
>     "HTML" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@fkysly](https://github.com/fkysly) | 214 |
> | [@qichuang321](https://github.com/qichuang321) | 5 |
> | [@ysyyhhh](https://github.com/ysyyhhh) | 5 |
> | [@Karl-441](https://github.com/Karl-441) | 5 |
> | [@Bruce-Yii](https://github.com/Bruce-Yii) | 3 |

**最新版本**：v1.16.2 — dshmarket 1.16.2 (2026-08-20)

> [!info]- Release Notes
> npm: https://www.npmjs.com/package/dshmarket/v/1.16.2 · dist-tag: latest
> 
> ## What's Changed
> * fix: a proxy reaches pnpm, a CRLF workspace file stays valid, and a long tag stops wrapping the row by @fkysly in https://github.com/dsh-market/dsh-market/pull/239
> 
> 
> **Full Changelog**: https://github.com/dsh-market/dsh-market/compare/v1.16.1...v1.16.2

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-20 ~ 2026-08-21）
> **活躍天數** 2 天 · **最新 commit** fix: restore in-flight update progress when the config page reopens (#233)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#241](https://github.com/dsh-market/dsh-market/issues/241) | 插件市场打开失败 `bug` | 0 | 0 |
> | [#235](https://github.com/dsh-market/dsh-market/issues/235) | [UI] 列表新双列布局有点怪，要不改成瀑布式？ `roadmap` | 0 | 3 |
> | [#232](https://github.com/dsh-market/dsh-market/issues/232) | 内网加载不了市场数据了，内网能访问github `bug` | 0 | 4 |

## README 摘錄

> [!info]- 展開查看原文 README
> # dsh-market
> 
> English | [中文](README.zh.md)
> 
> [](https://www.npmjs.com/package/dshmarket)
> [](https://github.com/dsh-market/dsh-market)
> 
> > `dsh-market` is independent of any particular client — it works in any host that speaks the standard DeepSeek Harness protocol. We're currently in discussions with `anywhere-labs/deepseek-harness-desktop` about future cooperation, and we'll share updates here as they happen. Use [dsh-desktop](https://github.com/dataelement/dsh-desktop) or [deepseek-harness-desktop](https://github.com/hairyf/deepseek-harness-desktop) — both ship with this plugin market built in — or another excellent third-party client.
> 
> The plugin market inside DeepSeek Harness. Open Settings → **Plugin Market** → browse, search, one-click install.
> 
> One-click themes: install, switch live, no restart.
> 
> ## Install
> 
> ```sh
> dsh plugin --profile web add dshmarket
> ```
> 
> Restart `dsh web`, then open **Settings → Plugin Market**.
> 
> **Requires dsh web 0.1.0-rc.6 or newer.** On an older host the market
> disables itself and says so in the browser console rather than rendering
> against primitives that are not there — if the Plugin Market entry never
> appears, that is usually why. Worth checking when a desktop build bundles
> its own dsh: it may be older than the one `npm` would give you (#139).
> 
> ## What you get
> 
> - **Browse & search** the full community catalog (1550+ plugins, growing daily) — category filters, star counts, top/new sorting, bilingual descriptions that follow your UI language
> - **Screenshots** — AppStore-style screenshots, auto-carousel when there's more than one, click to preview full-size: author-curated shots show right on the card (zero extra requests); plugins without curated shots fall back to automatic README extraction once you open the install dialog. Images load from GitHub hosting only
> - **Themes** — a dedicated tab for community themes and skins: install → active immediately, switch with one click (themes are mutually exclusive, your choice survives restarts), uninstall to revert
> - **One-click install** — confirm the source, watch live progress; most plugins go live after a page refresh, no restart
> - **Backup & restore** — export your profile's plugin list and configuration as readable JSON, import it on another machine, store it on WebDAV with daily auto-backup, or sync through a private GitHub Gist; restores **merge** (plugins installed after the backup are kept), validate before writing, and roll back on failure
> - **Updates** — per-plugin update checks (npm version or pinned commit vs HEAD), one-click update, or update everything at once; the market updates itself the same way
> - **Uninstall** — two-step confirm; plugins installed this session are removed live
> - **Hot disable / enable** — toggles write `- id: …` + `disabled: true|false` into the profile's `cordis.patch.yml` (the official patch layer, mechanism ported from [dsh-plugin-hub](https://github.com/Noob-stupid/dsh-plugin-hub)): DSH's HMR re-composes within ~1s, no restart, and the loader re-applies the choice on every boot; hand-edited patch rows show as badges, host-infrastructure plugins are protected from toggling, and a malformed patch file is never made worse
> - **Restart when needed** — changes that cannot hot-load show a one-click restart beside the pending-change banner; the action is restricted to same-origin loopback requests
> - **Zero jargon** — if a component is missing (pnpm), the market detects it and offers a one-click automatic setup
> - **Log export** — one click produces a sanitized plain-text log for bug reports (home paths and credential shapes are masked; nothing is ever sent anywhere). The market's version sits next to the page heading, so a screenshot of a problem already carries it
> - **Settings card** — on dsh 0.1.0-rc.7 and newer the market manages *itself* from **Settings → Plugins → Plugin configuration**, next to every other plugin: see the running version, pick a **release channel** (stable, or beta to try builds still being verified — the market only, never your other plugins; a third *dev* channel appears once developer mode is switched on, and carries builds published straight off a branch), update, or remove the market — with an opt-in cleanup that also drops the disable rows it wrote, so plugins it switched off start running again rather than staying off with no UI left to switch them back on
> - **Diagnostics** — the plugin load order and conflict surface, one page: bundle stack with official/community badges, duplicate loader entries, dependency version mismatches, multi-version core packages, overrides and invalid config entries. Plain-language terms, problem blocks highlighted, everything collapsible
> 
> - **Load order** — drag community bundles into the order you want, or take the suggested one derived from the plugins' own before/after rules. Nothing is written until a trial composition passes, and the panel tells you what the new order would change (overrides, invalid or duplicate entries) before you apply it
> - **AI fix** — one click copies a diagnostics-driven fix prompt (errors/warnings/order conflicts + conservative scope instructions) to the clipboard; you paste it into a new conversation and decide whether to send
> 
> ## Speed
> 
> Installs prefer npm tarballs over full-repo GitHub downloads whenever a plugin publishes to npm (registry-verified against the repo to prevent name squatting). Registry installs are typically seconds; GitHub-only plugins depend on your connection to GitHub.
> 
> ## Security
> 
> - Installs are restricted to sources listed in the curated [awesome-dsh-plugin](https://awesome-dsh-plugin.com) registry — anything else is rejected
> - Build scripts stay blocked by default (pnpm ≥10); allowing one is your explicit per-package choice
> - Terminal/CLI-surface plugins are flagged before you install them into the web profile
> - The install endpoint accepts same-origin POST only; the market never phones home
> - Backups can contain credentials from your profile config — the UI warns before export and upload; WebDAV sync is https-only, refuses private-network targets, and never stores your password in the browser
> - The restart endpoint additionally requires a direct loopback client (forwarded requests are rejected) and relaunches the exact DSH entry, arguments, environment, and working directory
> - One-click restart launches a detached replacement. If DSH is managed by systemd, launchd, pm2, or another supervisor, turn the restart button off and let the supervisor own restarts instead; the pending-change notice remains visible but the button is hidden. Either flip **Allow restart** off in **Settings → Plugins → Plugin configuration**, or write it into the profile patch — where it has to sit under `config:`, because the loader passes only that sub-object to a plugin and a top-level `allowRestart:` is silently ignored (#227 by @Fantasymax):
> 
>   ```yaml
>   - id: dsh-market
>     name: dshmarket
>     config:
>       allowRestart: false   # NOT at the top level beside `name:`
>   ```
> 
>   `GET /dsh-market/status` reports `"restart": false` once it has taken effect.
> - For terminal-attached launches, the detached replacement keeps running after the original terminal closes
> - Listing ≠ endorsement: plugins are third-party code, install sources you trust
> 
> ## Submit your plugin
> 
> **This repo is the market app, not the catalog.** The plugin list comes from the curated [awesome-dsh-plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) registry — to get your plugin listed in the market, open a PR **there** (one entry in the list; the site and this market pick it up automatically, usually within a day). Please don't PR plugin entries against this repo.
> 
> ## Roadmap & feedback
> 
> - **Bugs** go in [issues](https://github.com/dsh-market/dsh-market/issues) — attaching the market's "Export log" makes diagnosis roughly ten times faster
> - **Feature ideas** go on the [Roadmap](https://github.com/orgs/dsh-market/projects/1). Issues are kept for things that are broken, so a prop

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Binaryify--open-kimi-ppt-skill|Binaryify/open-kimi-ppt-skill]] · [[CopilotKit--OpenBot|CopilotKit/OpenBot]] · [[DannyMac180--sol-advisor|DannyMac180/sol-advisor]] · [[DramaticShape--DramaticShapeVoxelMod|DramaticShape/DramaticShapeVoxelMod]]

[GitHub](https://github.com/dsh-market/dsh-market) · [官方網站](https://dshmarket.com)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "dsh-market--dsh-market"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "dsh-market--dsh-market" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W34" AND file.name != "dsh-market--dsh-market"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/dsh-market--dsh-market");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "dsh-market--dsh-market" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "dsh-market" AND file.name != "dsh-market--dsh-market"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/dsh-market--dsh-market");
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
> const me = dv.page("Repos/dsh-market--dsh-market");
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
> const me = dv.page("Repos/dsh-market--dsh-market");
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
> const me = dv.page("Repos/dsh-market--dsh-market");
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
> const me = dv.page("Repos/dsh-market--dsh-market");
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

> **2026-08-21** — 首次收錄
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

- [[2026-08-21|2026-08-21]] — 首次收錄，1.5k stars
