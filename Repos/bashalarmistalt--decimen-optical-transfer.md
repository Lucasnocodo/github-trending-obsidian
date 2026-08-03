---
repo: bashalarmistalt/decimen-optical-transfer
url: https://github.com/bashalarmistalt/decimen-optical-transfer
owner: bashalarmistalt
owner_type: User
language: TypeScript
license: MIT
description: ""
homepage: ""
stars: 3772
stars_per_day: 1257
forks: 438
open_issues: 7
created: 2026-07-30
pushed_at: 2026-08-02
first_seen: 2026-08-01
week: "2026-W31"
month: "2026-08"
category: "Other"
subcategory: ""
release_tag: "v0.1.0"
install_complexity: "unknown"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-08-01
use_case: ""
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-08-06"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 2762
readme_length: 6463
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-08-01"
star_history: "2026-08-01:2194,2026-08-02:3129,2026-08-03:3772"
tags:
  - github
  - "category/other"
  - "lang/typescript"
aliases:
  - "decimen-optical-transfer"
  - "bashalarmistalt/decimen-optical-transfer"
---

# decimen-optical-transfer

**2.2k** stars · **2.2k** stars/天 · 建立 1 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/bashalarmistalt--decimen-optical-transfer");
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

`個人專案` `v0.1.0`

> [!summary] 一句話摘要
> No description

## 專案簡介

No description available.

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/bashalarmistalt--decimen-optical-transfer");
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
> const me = dv.page("Repos/bashalarmistalt--decimen-optical-transfer");
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
| Forks | 260 |
| Open Issues | 4 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-31 |
| 建立日期 | 2026-07-30 |
| Repo 大小 | 2.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/bashalarmistalt/decimen-optical-transfer) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@types/qrcode` `@vitejs/plugin-basic-ssl` `qrcode` `typescript` `vite` `zxing-wasm`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 75
>     "HTML" : 17
>     "CSS" : 8
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@bashalarmistalt](https://github.com/bashalarmistalt) | 1 |

**最新版本**：v0.1.0 (2026-07-31)

> [!info]- Release Notes
> **Full Changelog**: https://github.com/bashalarmistalt/decimen-optical-transfer/commits/v0.1.0

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-30）
> **活躍天數** 1 天 · **最新 commit** Initial commit

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/bashalarmistalt/decimen-optical-transfer/issues/3) | Host it on Github Pages | 2 | 0 |
> | [#4](https://github.com/bashalarmistalt/decimen-optical-transfer/issues/4) | [Feature] add to F-Droid | 0 | 2 |
> | [#1](https://github.com/bashalarmistalt/decimen-optical-transfer/issues/1) | # Receiver memory-exhaustion DoS: `parseFrame` accepts frame | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Decimen Optical Transfer: fountain-coded QR file transfer
> 
> Send a file between two devices using nothing but a **screen and a camera**.
> One page displays the file as an endless stream of animated QR codes; another
> device points its camera at it and reconstructs the file. **No network path
> between the devices, no app, no pairing, no permissions beyond the camera.**
> The payload travels as light.
> 
> This is a minimal proof of concept extracted from a larger
> experiment that reached **128 KB/s phone-to-phone** with denser frames,
> multi-code grids, and an error-corrected color channel. This PoC keeps only
> the essential trick and transmits a 512 KB image (or a 2 MB one, selectable
> in the sender's settings) at a comfortable rate.
> 
>   
> 
> Mid-transfer: a phone pulling a 2 MB image out of the air at 129 KB/s.
> 
> ## Try it
> 
> ```bash
> npm install
> npm run dev
> ```
> 
> - On the **sending** device (a laptop is ideal): open
>   `https://localhost:5173/send/` and it starts streaming immediately. Max
>   screen brightness helps.
> - On the **receiving** device (a phone): open the `Network` URL Vite prints
>   (`https://:5173/receive/`), accept the certificate warning once,
>   tap **Start camera**, and point it at the code.
> - A few seconds later: *Transfer Complete!* and the received image, verified
>   by hash.
> 
> **Why the dev server is https-only:** the receiver uses `getUserMedia`, and
> browsers remove that API entirely on insecure origins: a phone reaching
> your dev server over plain http has no camera, full stop (`localhost` is
> exempt, but your phone isn't localhost). That's a web platform rule, not a
> choice. The dev server therefore ships with a self-signed certificate
> (`@vitejs/plugin-basic-ssl`); the browser will warn on first visit. Tap
> "Show Details" then "visit this website" (iOS) or "Advanced" then "Proceed"
> (Android/desktop), and the page is still a secure context, so the camera
> works. The odd-looking `lvh.me` hosts Vite prints are a public convenience
> domain that resolves to 127.0.0.1 (same machine, nothing extra running).
> 
> Hold the phone steady, or better, prop it against something. Camera
> autofocus hunting from hand tremor is the #1 throughput killer.
> 
> ## How it works
> 
> **The one-way channel problem.** A screen-to-camera link has no back-channel:
> the receiver can't ask for retransmission, and it will inevitably miss frames
> (blur, refresh straddling, autofocus). Looping the frames and hoping is
> miserable: miss one frame and you wait a full cycle for it to come around.
> 
> **Fountain codes fix this completely.** The sender never sends the file's
> blocks directly. Each frame is the XOR of a pseudorandom *subset* of blocks;
> the subset is derived deterministically from the frame's sequence number,
> with subset sizes drawn from a robust-soliton distribution ([Luby transform
> coding](https://en.wikipedia.org/wiki/Luby_transform_code)). The receiver
> collects **any** ~K·1.15 distinct frames, in any order, and peels the file
> out of them. Dropped frames cost a little time, never correctness. Sender
> and receiver frame rates don't need to match at all.
> 
> **Every frame is self-describing.** A 20-byte header carries the session id,
> sequence number, block count/size, file length, and a hash. There is no
> handshake: the receiver locks onto a stream mid-flight, and restarting the
> sender (new session id) automatically resets the receiver.
> 
> **Decoding.** Safari has never shipped `BarcodeDetector` (WebKit bug 281848),
> so decoding is [zxing-cpp](https://github.com/zxing-cpp/zxing-cpp) compiled
> to WASM, running in workers fed by `requestVideoFrameCallback`. Busy workers
> mean dropped frames, which the fountain happily absorbs.
> 
> ## Hard-won details baked into this PoC
> 
> - **JS engines disagree about `Math.log`** (it's implementation-approximated).
>   Sender and receiver must build bit-identical soliton distributions, so
>   `fountain.ts` includes a deterministic log built from exactly-specified
>   IEEE-754 ops. V8 vs JavaScriptCore desync is a silent, total failure mode.
> - **iOS lies about camera frame rate.** `frameRate: {ideal: 60}` silently
>   delivers 30; you must demand `{exact: 60}` (works at 1280-wide capture)
>   and fall back. Always read back `getSettings()`.
> - **`requestVideoFrameCallback` chains outlive their stream** and resume on
>   the next one; without a generation counter, every stop/start leaks a
>   zombie capture loop.
> - **Progress bars must track frames collected, not blocks solved.** LT
>   peeling back-loads its solve cascade: block-count progress looks stalled
>   for most of the transfer, then teleports to 100%.
> - **QR error correction is set to the minimum (L).** In-frame ECC and the
>   fountain layer solve different problems (corruption vs erasure), but at
>   these frame sizes level L plus frame disposal is the better trade.
> 
> ## Tuning
> 
> Both pages have a collapsed **Settings** panel. On the sender: payload size
> (512 KB or 2 MB), tx fps, bytes per frame, error-correction level, and
> display size. Changing anything restarts the stream, and the receiver resets
> automatically off the new session id. On the receiver: capture width,
> capture fps, and decode worker count, applied when the camera starts.
> 
> | setting | default | notes |
> |---|---|---|
> | tx fps | 24 | each frame must own at least 2 refresh cycles of the display |
> | bytes / frame | 1465 (QR v27) | denser is faster if the receiver still decodes it; 2953 (v40) works phone-to-phone at close range |
> 
> The parent experiment's measured ceiling with this exact architecture plus
> denser frames, a 120 fps ProMotion sender, and stacked codes: ~128 KB/s
> handheld, ~186 KB/s propped.
> 
> ## Similar projects
> 
> The concept here was arrived at independently. It turns out
> several people have had similar ideas, and their takes are all
> worth a look:
> 
> - [mohankumarelec/airgapped-qr-code-transfer](https://github.com/mohankumarelec/airgapped-qr-code-transfer):
>   browser-based QR file transfer with compression and sequential chunking.
>   Discovered after publicly demoing this project; convergent evolution in
>   action.
> - [divan/txqr](https://github.com/divan/txqr) (2018): animated QR plus
>   fountain codes in Go, with two excellent write-ups on why fountain coding
>   beats sequential looping.
> - [sz3/libcimbar](https://github.com/sz3/libcimbar): goes past QR entirely
>   with a custom high-density color code purpose-built for this channel.
> 
> Built with [node-qrcode](https://github.com/soldair/node-qrcode) and
> [zxing-wasm](https://github.com/Sec-ant/zxing-wasm).
> 
> ## License
> 
> MIT

## 延伸閱讀

相關專案：[[0xwilliamortiz--openclaude-improved|0xwilliamortiz/openclaude-improved]] · [[0xwilliamortiz--ponytail-improved|0xwilliamortiz/ponytail-improved]] · [[QwenAudio--qwen-audio-agent|QwenAudio/qwen-audio-agent]] · [[WilonityXYZ--Wilonity|WilonityXYZ/Wilonity]] · [[gavamedia--deltafin|gavamedia/deltafin]] · [[xdash--FDE-the-Guidance-Book-of-Forward-Deployed-Engineer|xdash/FDE-the-Guidance-Book-of-Forward-Deployed-Engineer]] · [[xikhar--persona|xikhar/persona]] · [[yc-software--qm|yc-software/qm]]

[GitHub](https://github.com/bashalarmistalt/decimen-optical-transfer)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "Other" AND file.name != "bashalarmistalt--decimen-optical-transfer"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "bashalarmistalt--decimen-optical-transfer" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W31" AND file.name != "bashalarmistalt--decimen-optical-transfer"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/bashalarmistalt--decimen-optical-transfer");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "bashalarmistalt--decimen-optical-transfer" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "bashalarmistalt" AND file.name != "bashalarmistalt--decimen-optical-transfer"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/bashalarmistalt--decimen-optical-transfer");
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
> const me = dv.page("Repos/bashalarmistalt--decimen-optical-transfer");
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
> const me = dv.page("Repos/bashalarmistalt--decimen-optical-transfer");
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
> const me = dv.page("Repos/bashalarmistalt--decimen-optical-transfer");
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
> const me = dv.page("Repos/bashalarmistalt--decimen-optical-transfer");
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

> **2026-08-01** — 首次收錄
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

- [[2026-08-03|2026-08-03]] — 再次上榜，3.8k stars
- [[2026-08-02|2026-08-02]] — 再次上榜，3.1k stars
- [[2026-08-01|2026-08-01]] — 首次收錄，2.2k stars
