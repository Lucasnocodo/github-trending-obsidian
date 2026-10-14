---
repo: ARahim3/DigUp
url: https://github.com/ARahim3/DigUp
owner: ARahim3
owner_type: User
language: Swift
license: MIT
description: "Search your Mac by what's in your files: photos, PDFs, recordings, videos and code. On-device, built on Google DeepMind's EmbeddingGemma 2."
homepage: ""
stars: 2722
stars_per_day: 544
forks: 194
open_issues: 55
created: 2026-10-08
pushed_at: 2026-10-12
first_seen: 2026-10-14
week: "2026-W42"
month: "2026-10"
category: "Other"
subcategory: ""
release_tag: "v0.6.1"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-10-14
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-10-17"
contributor_count: 1
engagement: "low"
issue_close_rate: 13
repo_size_kb: 6799
readme_length: 9653
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-10-14"
star_history: "2026-10-14:2722"
tags:
  - github
  - "category/other"
  - "lang/swift"
  - "topic/embeddinggemma"
  - "topic/embeddings"
  - "topic/llama_cpp"
  - "topic/local_first"
  - "topic/macos"
aliases:
  - "DigUp"
  - "ARahim3/DigUp"
---

# DigUp

**2.7k** stars · **544** stars/天 · 建立 5 天前 · Swift · MIT

```dataviewjs
const me = dv.page("Repos/ARahim3--DigUp");
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

`個人專案` `v0.6.1`

`embeddinggemma` `embeddings` `llama-cpp` `local-first` `macos` `menubar-app` `multimodal` `on-device` `semantic-search` `swift`

> [!summary] 一句話摘要
> Search your Mac by what's in your files: photos, PDFs, recordings, videos and code. On-device, built on Google DeepMind's EmbeddingGemma 2.

## 專案簡介

Search your Mac by what's in your files: photos, PDFs, recordings, videos and code. On-device, built on Google DeepMind's EmbeddingGemma 2.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ARahim3--DigUp");
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
> const me = dv.page("Repos/ARahim3--DigUp");
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
| Forks | 194 |
| Open Issues | 55 |
| Issue 解決率 | 13% (8 closed) |
| 最後推送 | 2026-10-12 |
| 建立日期 | 2026-10-08 |
| Repo 大小 | 6.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ARahim3/DigUp) |
| Topics | `embeddinggemma` `embeddings` `llama-cpp` `local-first` `macos` `menubar-app` `multimodal` `on-device` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Swift" : 84
>     "Python" : 6
>     "Rust" : 4
>     "JavaScript" : 3
>     "Shell" : 3
>     "CSS" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ARahim3](https://github.com/ARahim3) | 46 |

**最新版本**：v0.6.1 — DigUp 0.6.1 (2026-10-12)

> [!info]- Release Notes
> Fixes for what people ran into in the first week, and a few additions.
> 
> Fixed:
> 
> - Typing with an input method that composes text (Korean, Japanese, Chinese) no longer breaks into loose letters in the search field. (#13)
> - A word that's in your files only as the start of a longer one ("Grok" in "Grok4") stays found after you stop typing. It used to show while you typed, then disappear. (#40)
> - A chosen folder with accents, Korean or Japanese in its name (Google Drive's "내 드라이브", for one) no longer stops indexing for every folder. (#14)
> - Indexing keeps going while your folders keep changing. Before, a slow scan of a big folder could start over and over without reading a single file. (#23)
> - DigUp's helpers quit with DigUp. A folder estimate could keep running at full speed after quitting, even after uninstalling. (#22)
> - If reading one file runs away (a PDF did, using tens of gigabytes of memory), DigUp now stops it, skips that file and goes on. Quit and Pause stop indexing even when it's stuck on a file. (#3)
> - Indexing long text documents no longer slowly grows the helper's memory (about 30 KB a chunk of text). (#3)
> - Settings scrolls when you have many folders, instead of growing past the bottom of the screen. (#17)
> - Code folders show their files right away, and Settings says they're read after your other folders. They used to show "0 of 0". (#21)
> ...（完整內容見 GitHub）

## 開發動態

> [!abstract] 最近 10 次 commit（2026-10-12 ~ 2026-10-12）
> **活躍天數** 1 天 · **最新 commit** Add 0.6.1 to the update feed

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#30](https://github.com/ARahim3/DigUp/issues/30) | Raycast Integration | 4 | 1 |
> | [#47](https://github.com/ARahim3/DigUp/issues/47) | [Feature] Apple Neural Engine backend via EverPaper's Embedd | 2 | 0 |
> | [#1](https://github.com/ARahim3/DigUp/issues/1) | Windows | 1 | 1 |
> | [#63](https://github.com/ARahim3/DigUp/issues/63) | porting to Linux, and Windows | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> DigUp
> 
> Describe it. Dig it up.
> Search the files on your Mac by what's in them, with Google DeepMind's
> EmbeddingGemma 2.
> 
> Download for Mac · Apple Silicon,
> macOS 14 or later · Free and open source
> Windows and Linux versions are on the way.
> 
> EmbeddingGemma 2 is the multimodal embedding model Google DeepMind released in October 2026. It puts text, images,
> audio and video into one shared space: a photo of a dog on a beach lands next to the words "a dog on the beach", and a
> recording of someone talking about sleep lands next to "where they talk about sleep". It understands more than 100
> languages, it's open (Apache 2.0), and at 740M parameters it's small enough to run comfortably on a laptop.
> 
> DigUp brings that to the files on your Mac. Pick the folders to search, and it reads the pictures, PDFs, documents,
> recordings and videos in them. Then describe what you're looking for, in your own words, and it finds the match,
> whatever kind of file it is. All of it happens on your Mac.
> 
> 
> ## Install
> 
> 1. Download the DMG from [Releases](https://github.com/ARahim3/DigUp/releases) and drag DigUp to Applications, or use
>    Homebrew: `brew install --cask arahim3/tap/digup`.
> 2. Open it. While the model downloads (865 MB, once), pick the folders to search: whole folders, or only some of their
>    subfolders. DigUp shows how long the first pass will take for each.
> 3. Press **⇧⌘Space** in any app and describe what you're looking for.
> 
> DigUp needs an Apple Silicon Mac with macOS 14 or later (it's tested on macOS 26), and it keeps itself up to date.
> 
> 
> ## What it reads
> 
> Only the folders you choose:
> 
> - pictures and screenshots (HEIC, JPEG, PNG, RAW, WebP and more), by what they show, and screenshots by their text too
> - PDFs, page by page, scans included. A long one gets its first 30 pages right away and the rest once everything
>   else is in (up to 5,000 pages a file)
> - documents: txt, md, rtf, doc, docx, odt, html, long ones the same way. Text that's mostly numbers, like a data
>   export, is matched by its exact text only
> - audio of any length: the model listens to 30 seconds at a time, so DigUp takes overlapping 30-second windows and a
>   match points to its moment
> - video of any length: a frame every few seconds, one per shot, plus the soundtrack the same way as audio
> 
> Outside the folders you pick for code search, it never reads code, and inside a code project (a folder with `.git`,
> `package.json` and the like) it reads only screenshots. It never reads keys, certificates, password files, hidden
> folders like `~/.ssh`, app bundles or caches. It skips folders that look like datasets, and never downloads iCloud
> files that only live in the cloud. You can skip more folders or file types in Settings. DigUp only reads your files;
> it never changes, moves or uploads them.
> 
> The first pass takes a few minutes for a few hundred files and can take an hour for a big Downloads folder. That
> happens once, on battery too unless you tell it to wait for a charger, and it pauses in Low Power Mode. After that, a
> new file is searchable a second or two after it lands.
> 
> 
> ## What you can find
> 
> - "zebra in a video" opens the clip at the moment the zebra shows up
> - "where they talk about sleep" jumps to that minute of a podcast
> - "the clause about pets in the lease" shows the PDF page, with the words marked
> - "a dog on the beach" finds the photo, and "payment declined error" the screenshot
> - a search in English can find a note written in Bengali, Arabic or any of the model's 100+ languages, and the other
>   way around
> - "code: retry a failed call with backoff" finds the function in your projects, if you turn on code search
> 
> Exact words count too. Invoice numbers, error codes and names are matched as written, in file names, document text
> and the text inside screenshots, so a search gets both the meaning and the exact string.
> 
> 
> ## Private
> 
> Nothing you index leaves your Mac. DigUp goes online only to download the model once and to check for updates once a
> day. The update check sends nothing about your files, and you can turn it off. No account, no telemetry.
> 
> 
> ## Using it
> 
> | Key | What it does |
> |---|---|
> | ⇧⌘Space | Opens the search panel from any app (you can change it in Settings) |
> | ↓ ↑ | Moves through the results |
> | ↩ | Opens the result: videos and recordings at the moment, PDFs with your words in Preview's search, code in your editor at the line |
> | Space | Quick Look, at the page or moment (once you've moved to a result) |
> | ⌘↩ | Shows it in Finder |
> | ⌘C | Copies the file, to paste anywhere |
> | ⌘O | The same search in a bigger window, with a picture grid and filters |
> 
> DigUp lives in the menu bar, where you can see how indexing is going, pause it, or open Settings. The first time a
> video opens at its moment, macOS asks whether DigUp may control QuickTime Player; that's how it jumps there.
> 
> 
> ## Code
> 
> EmbeddingGemma 2 reads code too, so DigUp can search your projects. Code search is off until you turn it on, in
> Settings → Code or during setup, for the folders you pick. Each repo shows how long reading it takes and how much room
> its index needs. Then start a search with `code:` and say what the code does, or type a name that's in it:
> 
> - "code: retry a failed call with backoff" finds the function, whatever it's called
> - "code: refreshAccessToken" goes to the line that defines it, not the places that call it
> - "code: plot how many examples each class has" finds the notebook cell
> 
> Results open in your editor at the line: Zed, VS Code, Cursor, Xcode, Sublime Text, JetBrains IDEs and a few more
> (pick one in Settings). Code has an index of its own and never shows up in other searches. DigUp reads source files,
> notebooks (without their outputs) and a repo's own docs. It skips what git ignores, vendored and generated code, data
> files, and anything that looks like a key or a password. While you're working on code, the index catches up a minute
> after things go quiet.
> 
> Reading code takes about 20 seconds for a small app, and about 20 minutes and 130 MB of index for all of llama.cpp.
> 
> 
> ## How it works
> 
> ```
> your folders ─► readers (ImageIO, PDFKit, AVFoundation, and Vision for the text in screenshots)
>              ─► EmbeddingGemma 2 on llama.cpp (Metal), in a helper process that quits when it's done
>              ─► one SQLite file: a vector for every picture, page, passage, video frame and 30 s of sound,
>                 plus a keyword index (code search keeps a second one, for code)
> your words   ─► the same model's text part (~250 MB, only while you search) ─► nearest vectors + exact words
> ```
> 
> DigUp runs ggml-org's 8-bit build of EmbeddingGemma 2 through [llama.cpp](https://github.com/ggml-org/llama.cpp) on
> the Mac's GPU. Every vector lives in the same 768-dimensional space, which is why one query can rank a video frame
> against a PDF page. A search embeds your words in milliseconds and compares them with everything in the index.
> Exact-word matches get a boost, because no embedding holds an invoice number exactly.
> 
> The index remembers which model version made its vectors. An update that leaves the vectors unchanged keeps your
> index, and a test checks every llama.cpp update against stored reference vectors before it ships.
> 
> 
> ## Build from source
> 
> You'll need Xcode 26, git, and CMake (or `uv`) for llama.cpp. If `xcode-select -p` shows the Command Line Tools,
> switch to Xcode first (`sudo xcode-select -s /Applications/Xcode.app`): they lack the SwiftUI and Swift Testing
> macros the build needs.
> 
> ```sh
> git clone https://github.com/ARahim3/DigUp && cd DigUp
> scripts/build-llama.sh            # llama.cpp at a pinned tag, with a one-line patch (a few minutes)
> swift build -c release && swift test
> ./build.sh                        # → build.noindex/DigUp.app
> ```
> 
> There's also a command-line tool, `.build/release/digup`, that indexes, searches and runs the evals from the terminal
> (`digup --help`). `scripts/make-testbed.sh` builds a folder of test files to try it on (it needs ffmpeg), and `evals/`
> holds the queries ranking chan

## 延伸閱讀

相關專案：[[0xwilliamortiz--claude-red|0xwilliamortiz/claude-red]] · [[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]]

[GitHub](https://github.com/ARahim3/DigUp)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "ARahim3--DigUp"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Swift" AND file.name != "ARahim3--DigUp" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W42" AND file.name != "ARahim3--DigUp"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/ARahim3--DigUp");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ARahim3--DigUp" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ARahim3" AND file.name != "ARahim3--DigUp"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ARahim3--DigUp");
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
> const me = dv.page("Repos/ARahim3--DigUp");
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
> const me = dv.page("Repos/ARahim3--DigUp");
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
> const me = dv.page("Repos/ARahim3--DigUp");
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
> const me = dv.page("Repos/ARahim3--DigUp");
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

> **2026-10-14** — 首次收錄
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

- [[2026-10-14|2026-10-14]] — 首次收錄，2.7k stars
