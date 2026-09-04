---
repo: Player-YN/PawWork_ZhuaZhua
url: https://github.com/Player-YN/PawWork_ZhuaZhua
owner: Player-YN
owner_type: User
language: JavaScript
license: MIT
description: "Paw Work - selection-first web agent for Chrome: select on the live page, describe the outcome, take away an editable office file. BYOK, sandboxed, no server."
homepage: ""
stars: 873
stars_per_day: 146
forks: 5
open_issues: 0
created: 2026-08-28
pushed_at: 2026-09-01
first_seen: 2026-09-04
week: "2026-W36"
month: "2026-09"
category: "Other"
subcategory: ""
release_tag: "unpacked-f2a02f0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-09-04
use_case: ""
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-09-11"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 15555
readme_length: 9229
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-09-04"
star_history: "2026-09-04:873"
tags:
  - github
  - "category/other"
  - "lang/javascript"
  - "topic/ai_agent"
  - "topic/browser_agent"
  - "topic/byok"
  - "topic/chrome_extension"
  - "topic/llm"
aliases:
  - "PawWork_ZhuaZhua"
  - "Player-YN/PawWork_ZhuaZhua"
---

# PawWork_ZhuaZhua

**873** stars · **146** stars/天 · 建立 6 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/Player-YN--PawWork_ZhuaZhua");
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

`個人專案` `unpacked-f2a02f0`

`ai-agent` `browser-agent` `byok` `chrome-extension` `llm` `pptx` `tldraw` `univer`

> [!summary] 一句話摘要
> Paw Work - selection-first web agent for Chrome: select on the live page, describe the outcome, take away an editable office file. BYOK, sandboxed, no server.

## 專案簡介

Paw Work - selection-first web agent for Chrome: select on the live page, describe the outcome, take away an editable office file. BYOK, sandboxed, no server.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Player-YN--PawWork_ZhuaZhua");
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
> const me = dv.page("Repos/Player-YN--PawWork_ZhuaZhua");
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
| Forks | 5 |
| Open Issues | 0 |
| 最後推送 | 2026-09-01 |
| 建立日期 | 2026-08-28 |
| Repo 大小 | 15.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Player-YN/PawWork_ZhuaZhua) |
| Topics | `ai-agent` `browser-agent` `byok` `chrome-extension` `llm` `pptx` `tldraw` `univer` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 92
>     "CSS" : 5
>     "HTML" : 3
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Player-YN](https://github.com/Player-YN) | 11 |

**最新版本**：unpacked-f2a02f0 — Paw Work unpacked unpacked-f2a02f0 (2026-09-01)

> [!info]- Release Notes
> Preferred: clone only branch unpacked —
> 
>   git clone --depth 1 --single-branch --branch unpacked https://github.com/Player-YN/PawWork_ZhuaZhua.git paw-work
> 
> Then Chrome → chrome://extensions → Developer mode → Load unpacked → select the `paw-work` folder (the one with manifest.json).
> 
> This zip is the same bytes. Unzip, then the same Chrome steps on the inner `paw-work` folder.
> 
> Do not git clone the default (source) branch to install. Do not load a folder that contains node_modules.
> 
> 推荐：只克隆 unpacked 分支，然后 Chrome → chrome://extensions → 开发者模式 → 加载已解压的扩展程序 → 选 `paw-work` 文件夹（里面有 manifest.json）。不要 clone 源码仓当安装包。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-08-28 ~ 2026-09-01）
> **活躍天數** 3 天 · **最新 commit** release: sync main 89a4cda

## README 摘錄

> [!info]- 展開查看原文 README
> # 爪爪 · Paw Work
> 
> **Select on the live page. Describe the outcome. Take away a real file.**
> 
> English · [中文](README.zh-CN.md)
> 
> > [!IMPORTANT]
> > **Just want to use Paw Work?** Do **not** clone this whole repository. You do not need the developer files. Clone **only** branch [`unpacked`](https://github.com/Player-YN/PawWork_ZhuaZhua/tree/unpacked) (~44 MB). That folder *is* the Chrome extension (`manifest.json` at the root).
> >
> > Clone creates `paw-work` under **the directory where you run the command**, not a fixed Desktop path. If you run it from your user home, that is `C:\Users\yyy\paw-work`. Git cannot print the path by itself — the last line of the block below does. In Chrome, Load unpacked that printed folder.
> >
> > **Windows (PowerShell)** — paste this whole block:
> >
> > ```powershell
> > git clone --depth 1 --single-branch --branch unpacked https://github.com/Player-YN/PawWork_ZhuaZhua.git paw-work
> > (Get-Item .\paw-work).FullName
> > ```
> >
> > **macOS / Linux:**
> >
> > ```bash
> > git clone --depth 1 --single-branch --branch unpacked https://github.com/Player-YN/PawWork_ZhuaZhua.git paw-work
> > realpath paw-work
> > ```
> >
> > Then: Chrome → `chrome://extensions` → **Developer mode** → **Load unpacked** → select the folder whose path was just printed.
> >
> > No git? On this GitHub page: **Code → switch the branch to `unpacked` → Download ZIP**. Unzip, then Load unpacked the folder that contains `manifest.json`.
> >
> > Optional, same bytes: the [Release zip](https://github.com/Player-YN/PawWork_ZhuaZhua/releases/latest) (`paw-work-unpacked.zip`). Unzip and Load unpacked the inner `paw-work` folder.
> 
> [](https://github.com/Player-YN/PawWork_ZhuaZhua/actions/workflows/ci.yml)
> [](LICENSE)
> 
> ```text
> SELECT + DESCRIBE OUTCOME → DELIVER
> ```
> 
> [What you can do](#what-you-can-do) · [See it](#see-it) · [How it works](#how-it-works) · [Install](#install) · [Trust](#trust--privacy) · [Limitations](#limitations)
> 
> ---
> 
> ## What it is
> 
> Paw Work is a **Chrome MV3 extension**. Turn Paw Mode on, point at images, tables, text, blocks, or links on the page you already have open, then say what you want in the sidepanel. It returns **editable office files** on live canvases — not a chat essay about the page.
> 
> It is not an unattended Operator that roams the web for you, and not a terminal coding agent. It sits beside the browser world you are already logged into: you set the scope, it returns something you can check.
> 
> ## Who it is for
> 
> | For | Not a first choice for |
> |-----|------------------------|
> | People who already work in the browser — compare, extract, export, turn a page into a sheet, deck, poster, site, or long doc | Unattended RPA (cross-site checkout, submit, pay) |
> | Work that starts on a page you are already looking at (shop, SaaS, docs, article) | A coding-agent home: Docker, local shell, million-file repos |
> 
> No account. No server. You bring your own model keys.
> 
> ## What you can do
> 
> | On the page | You ask for | You take away |
> |-------------|-------------|----------------|
> | Product photos, tables, copy, blocks, links | “Make a comparison sheet” | A live spreadsheet ([Univer](https://univer.ai)) you can keep editing |
> | The same selection, or a blank workspace | “Make an 8-page deck / one poster” | Design/Slides on a [tldraw](https://tldraw.dev) canvas; decks export to PPTX |
> | The current page | “Make an editable site, with entrance motion” | Real HTML. Tweaks stay on that file. Site QA gates quality |
> | Long notes or a transcript | “Turn this into a document” | A document canvas |
> | Need a picture or a lookup | “Generate in this style / search, then put it in the sheet” | Images in the workspace; search uses **your** web-acquire key |
> 
> You can run more than one task in the same session. `@` mentions a capture. Empty templates for sheet / slides / docs / site sit at the foot of the workspace rail.
> 
> **Try asking:**
> 
> - Turn these product cards into a comparison sheet.
> - Make a poster from the selected images.
> - Rebuild this page as an editable site.
> - Turn these notes into an 8-page deck.
> - This is messy — show a plan first and wait for my approval.
> 
> Complex work can yield a **plan card** before it writes: Approve, Decline, or Required to change (you leave notes; it revises the plan; the old card stays). It does not silently expand outside what you selected.
> 
> ## See it
> 
> Selecting product photos on a live Apple page. The sidepanel holds the capture; the next line is the outcome.
> 
> A live spreadsheet beside the sidepanel. The agent is splitting a SKU column on the **open** workbook — not dropping a second file into chat.
> 
> ## How it works
> 
> 1. Turn **Paw Mode** on (off = normal browsing).
> 2. Click what matters on the page.
> 3. In the sidepanel, describe the outcome.
> 4. Open the file from the workspace rail. Click a node, say the change, only that node changes.
> 
> ```text
> Live page (Paw on) → select → sidepanel → live canvas / file
> ```
> 
> Not listed on the Chrome Web Store yet. **Passersby:** clone only branch [`unpacked`](https://github.com/Player-YN/PawWork_ZhuaZhua/tree/unpacked) (see the box at the top) — do not clone this source tree. Then: Paw on → paste a model key → select something → say one sentence.
> 
> ## Trust & privacy
> 
> - No account, no Paw Work server, no hosted model quota.
> - Keys live in Chrome extension storage on **your** machine and are sent only to the HTTPS endpoints **you** set.
> - Model-generated code compiles with packaged esbuild-wasm and runs in a QuickJS VM. It never sees `chrome.*`, the live page DOM, or another session’s files. No executable code is loaded from a CDN.
> - Capture is what you pointed at, not the whole site. The agent inspects on demand. You can stop a run; it must not keep working in the background.
> 
> ## Install
> 
> **If you just want to use it** — do not clone this whole repository. Clone **only** branch `unpacked`.
> 
> 1. Paste the PowerShell (or macOS/Linux) block at the top of this README. The last line prints the absolute path of `paw-work`.
> 2. Open Chrome → `chrome://extensions`
> 3. Turn on **Developer mode**
> 4. **Load unpacked** → select the folder whose path was printed (`manifest.json` is at that root)
> 
> No git? **Code → branch `unpacked` → Download ZIP**, unzip, then steps 2–4. Same pack is also on the [Release page](https://github.com/Player-YN/PawWork_ZhuaZhua/releases/latest) as `paw-work-unpacked.zip`.
> 
> No Node, no `npm install`. Do not load the source-repo root.
> 
> ### Build from source (contributors)
> 
> Prerequisites: Node.js 20+, npm, Chrome 120+.
> 
> ```bash
> git clone https://github.com/Player-YN/PawWork_ZhuaZhua.git
> cd PawWork_ZhuaZhua
> npm install
> npm run build:agent
> npm run pack:extension
> ```
> 
> Then Load unpacked → `artifacts/unpacked/`. After `npm install` the folder is hundreds of megabytes (`node_modules`). **Do not load the repository root.** Rebuild (`npm run build:agent`) and reload after pulling.
> 
> How to build and test: [CONTRIBUTING.md](CONTRIBUTING.md).
> 
> ## Bring your own keys
> 
> Nothing runs without them. Configure in the sidepanel settings.
> 
> - **Chat** — any OpenAI-compatible HTTPS endpoint (base URL + key + model).
> - **Image** (optional) — its own base URL / key / model; empty fields inherit chat. OpenRouter’s image origin is filled by the template.
> - **Web search / fetch** (optional) — your search or crawl keys. Without them, fetch can still do an anonymous GET.
> - **tldraw license** (optional) — removes the Design/Slides watermark; see Limitations.
> 
> ## Stack
> 
> Chrome MV3 extension. Sidepanel talks to an in-extension workspace (no Paw Work cloud). Spreadsheets and documents: Univer. Posters and slides: tldraw. Sites: real HTML. Generated JS runs in a local WASM sandbox. Files persist in the browser (IndexedDB + OPFS). MIT code in this repo; third-party engines in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
> 
> Runtime contracts (isolation, writes, tools) live in [`docs/SESSION_WORKSPACE_RUNTIME.md`](docs/SESSION_WORKSPACE_RUNTIME.md) and [`docs/PROMPT_RUNTIME.md`](docs/PROMPT_RUNTIME.md). Host path: [constitution § Host path](docs/SESSIO

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/Player-YN/PawWork_ZhuaZhua)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "Player-YN--PawWork_ZhuaZhua"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "Player-YN--PawWork_ZhuaZhua" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W36" AND file.name != "Player-YN--PawWork_ZhuaZhua"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/Player-YN--PawWork_ZhuaZhua");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Player-YN--PawWork_ZhuaZhua" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Player-YN" AND file.name != "Player-YN--PawWork_ZhuaZhua"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Player-YN--PawWork_ZhuaZhua");
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
> const me = dv.page("Repos/Player-YN--PawWork_ZhuaZhua");
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
> const me = dv.page("Repos/Player-YN--PawWork_ZhuaZhua");
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
> const me = dv.page("Repos/Player-YN--PawWork_ZhuaZhua");
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
> const me = dv.page("Repos/Player-YN--PawWork_ZhuaZhua");
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

> **2026-09-04** — 首次收錄
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

- [[2026-09-04|2026-09-04]] — 首次收錄，873 stars
