---
repo: tvytlx/ai-agent-deep-dive
url: https://github.com/tvytlx/ai-agent-deep-dive
owner: tvytlx
owner_type: User
language: N/A
license: N/A
description: "AI Agent 源码深度研究报告"
homepage: ""
stars: 4491
stars_per_day: 2246
forks: 1400
open_issues: 1
created: 2026-03-31
pushed_at: 2026-04-02
first_seen: 2026-04-02
week: "2026-W14"
month: "2026-04"
category: "其他"
subcategory: "學習資源"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-02
use_case: "提供 AI Agent 源碼的深度分析報告，幫助開發者理解其運作機制。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-04-06"
contributor_count: 1
engagement: "high"
issue_close_rate: 50
repo_size_kb: 14733
readme_length: 176
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-02"
star_history: "2026-04-02:3130,2026-04-03:4491"
tags:
  - github
  - "category/其他"
  - "lang/other"
  - easy_install
aliases:
  - "ai-agent-deep-dive"
  - "tvytlx/ai-agent-deep-dive"
  - "提供 AI Agent 源碼的深度分析報告，幫助開發者理解其運作機制。"
---

# ai-agent-deep-dive

**3.1k** stars · **3.1k** stars/天 · 建立 1 天前 · N/A · 未標註授權

```dataviewjs
const me = dv.page("Repos/tvytlx--ai-agent-deep-dive");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!caution] README 資訊不足
> 此專案的 README 僅 176 字元，以下分析可能含有推測內容。建議直接查看 [GitHub](https://github.com/tvytlx/ai-agent-deep-dive) 原始碼。

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供 AI Agent 源碼的深度分析報告，幫助開發者理解其運作機制。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (3.1k stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** High
> **適合** 對 AI Agent 技術有興趣的開發者和研究者，特別是希望深入了解其源碼和設計的學習者。
> **一句話重點** 這個專案的價值在於它提供了一個系統性的 AI Agent 深度分析報告，對於希望深入了解該技術的開發者和研究者來說非常有幫助。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/tvytlx--ai-agent-deep-dive");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "學習資源" && p.file.name !== "tvytlx--ai-agent-deep-dive" && p.status !== "archived")
>     .sort(p => p.stars || 0, "desc").limit(5);
>   if (rivals.length > 0) {
>     dv.table(["專案", "Stars", "Stars/天", "安裝", "授權", "Ring"], rivals.map(p => [
>       p.file.link,
>       (p.stars || 0).toLocaleString(),
>       p.stars_per_day || 0,
>       p.install_complexity || "?",
>       p.license || "?",
>       p.ring || "assess"
>     ]));
>   } else { dv.paragraph("_目前 vault 中沒有其他 學習資源 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

## 專案簡介

這個專案的核心是提供一份針對 AI Agent 的深入分析報告，主要以 PDF 格式呈現。用戶可以下載最新的報告，並透過這份資料了解 AI Agent 的設計和實作細節，這對於希望深入研究 AI 技術的開發者來說非常有價值。報告中可能涵蓋了多種 AI Agent 的架構、算法及其應用場景，讓讀者能夠獲得實用的知識。此專案的設計選擇了 PDF 作為主要的輸出格式，因為這樣能夠方便地分享和閱讀，並且適合於學術和技術討論。這種方式的優勢在於能夠集中展示大量資訊，並且便於後續的引用和參考。與其他開源專案相比，這個專案並不提供源碼，而是專注於分析和報告，這使得它在同類工具中獨樹一幟。

相較於其他類似的專案，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，這個專案更專注於文檔和學習資源的提供，而不是實際的代碼實現。這樣的設計雖然限制了其應用範圍，但對於學術研究和技術學習卻是十分有益的。使用者在使用這份報告時，應注意其內容的更新頻率和實用性，因為 AI 技術的發展速度非常快。總體來看，這是一個適合對 AI Agent 有興趣的開發者和研究者的資源，能夠幫助他們更好地理解這一領域的最新趨勢和技術。未來幾個月，隨著 AI 技術的進步，這份報告可能會持續更新，提供更多的見解和分析。

## 重點功能

- 深入分析 — 提供對 AI Agent 設計和實作的詳細報告，幫助讀者理解其運作機制。
- PDF 格式 — 便於下載和分享，適合學術和技術討論。
- 系統性資料 — 整合多種 AI Agent 的架構和算法，提供全面的知識。
- 更新頻率 — 隨著技術進步，報告將持續更新，保持內容的時效性。
- 學習資源 — 適合用於教學和自學，幫助使用者掌握最新的 AI 技術趨勢。

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 3130 stars（3130/天），forks 1107（35.4%），這顯示出強烈的社群興趣。作者 tvytlx 可能是 AI 領域的專家，這份報告解決了對於 AI Agent 源碼理解的需求，之前的資源可能較為分散且缺乏系統性。此專案的推出可能受到社群對於 AI 技術深入理解的需求驅動，並且在技術論壇或社交媒體上引起了關注。這種高比例的 forks 表示許多人對於這份報告的內容感興趣，並希望進一步探索或修改。整體來看，這是一個自然擴散的現象，反映了當前對於 AI 技術的熱情。

## 適合誰使用

**目標受眾**：對 AI Agent 技術有興趣的開發者和研究者，特別是希望深入了解其源碼和設計的學習者。

> [!example] 使用場景
> - AI 研究者用它來深入理解 AI Agent 的設計原理，因為報告提供了詳細的分析和背景資料。
> - 開發者用它來獲取最新的 AI 技術趨勢，因為報告中可能包含了多種實作案例和最佳實踐。
> - 學生用它來作為學習資源，因為報告的系統性分析能幫助他們快速掌握 AI Agent 的核心概念。

## 架構分析

本專案的架構主要是以 PDF 文件為核心，並不涉及複雜的技術架構。報告的內容是通過對 AI Agent 的研究和分析整理而成，這樣的設計使得使用者能夠方便地獲取資訊，而不需要進行額外的技術配置。資料流主要是從研究資料到報告生成，並不涉及實時數據處理或互動功能。

這樣的設計雖然簡單，但也限制了其應用範圍，無法提供即時的互動或更新。擴展性方面，由於報告內容的更新依賴於作者的研究進度，因此在資料的持續更新上可能會遇到瓶頸。整體來看，這是一個針對學習和研究的資源，而非一個可擴展的技術平台。

## 技術深入分析

這個專案的核心技術機制是針對 AI Agent 的深入分析，主要以 PDF 格式呈現。報告中可能涵蓋了多種 AI Agent 的設計原理、算法及其應用場景，這對於希望深入研究 AI 技術的開發者來說非常有價值。由於專案並不涉及實際的代碼實現，因此在技術選型上並無特定的框架或語言依賴。報告的內容整理和分析可能基於大量的文獻和現有的研究，這使得其資料來源相對廣泛。雖然這樣的設計能夠提供系統性的學習資源，但也限制了其在實際應用中的靈活性。使用者在使用這份報告時，應注意其內容的更新頻率和實用性，因為 AI 技術的發展速度非常快。整體來看，這是一個適合對 AI Agent 有興趣的開發者和研究者的資源，能夠幫助他們更好地理解這一領域的最新趨勢和技術。

## 新手體驗

> [!info] 上手難度評估
> README 文件簡潔明瞭，提供了 PDF 下載的連結，但缺乏具體的使用範例。安裝過程非常簡單，只需下載 PDF 文件即可。沒有提供多語言支持，僅以英文呈現。整體來說，對於新手來說，能夠在短時間內獲得所需的資料，但對於深入學習可能需要額外的資源。

## 優缺點分析

> [!success] 優點
> - 提供深入的 AI Agent 分析，適合學術研究和技術學習。
> - PDF 格式便於分享和引用，適合學術討論。
> - 系統性資料整合，幫助讀者快速掌握核心概念。

> [!danger] 缺點
> - 不提供源碼或實作細節，限制了實際應用。
> - 內容更新依賴於作者的研究進度，可能過時。
> - 缺乏互動性，無法即時回饋或討論。

> [!warning] 注意事項
> - 僅提供 PDF 格式的報告，不包含源碼或實作細節。
> - 報告內容可能隨著技術進步而快速過時，需要定期檢查更新。
> - 缺乏互動性，無法即時回饋或討論報告中的內容。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步和傳輸，適合需要實作代碼的開發者，而本專案則專注於分析和報告。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供實作代碼和工具，適合直接應用於開發，而本專案則是學習和分析資源。 |

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/tvytlx--ai-agent-deep-dive");
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
> const me = dv.page("Repos/tvytlx--ai-agent-deep-dive");
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
| Forks | 1.1k |
| Open Issues | 1 |
| Issue 解決率 | 50% (1 closed) |
| 最後推送 | 2026-04-01 |
| 建立日期 | 2026-03-31 |
| Repo 大小 | 14.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/tvytlx/ai-agent-deep-dive) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@tvytlx](https://github.com/tvytlx) | 2 |

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-01 ~ 2026-04-01）
> **活躍天數** 1 天 · **最新 commit** Trim README to links and notes only

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/tvytlx/ai-agent-deep-dive/issues/1) | 这pdf 咋做的、是用啥提示词扫的 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # AI Agent Deep Dive
> 
> ## Quick Links
> 
> PDF 下载 / PDF Report:
> - 最新 [ai-agent-deep-dive-v2.pdf](./ai-agent-deep-dive-v2.pdf)
> 
> ## Notes
> 
> - 本仓库仅保留面向学习与评论的分析材料，不提供源码目录。
> - 第二版 PDF 已完成。

## 延伸閱讀

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[alvinunreal--awesome-opensource-ai|alvinunreal/awesome-opensource-ai]] · [[hicode002--qualcomm_gbl_exploit_poc|hicode002/qualcomm_gbl_exploit_poc]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[juliye2025--evil-read-arxiv|juliye2025/evil-read-arxiv]]

[GitHub](https://github.com/tvytlx/ai-agent-deep-dive)

## 相關收錄

> [!note]- 直接競品（同子分類：學習資源）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "學習資源" AND file.name != "tvytlx--ai-agent-deep-dive"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "tvytlx--ai-agent-deep-dive"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "tvytlx--ai-agent-deep-dive" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W14" AND file.name != "tvytlx--ai-agent-deep-dive"
> SORT stars DESC
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/tvytlx--ai-agent-deep-dive");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "tvytlx--ai-agent-deep-dive" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "tvytlx" AND file.name != "tvytlx--ai-agent-deep-dive"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/tvytlx--ai-agent-deep-dive");
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
> const me = dv.page("Repos/tvytlx--ai-agent-deep-dive");
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
> const me = dv.page("Repos/tvytlx--ai-agent-deep-dive");
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
> const me = dv.page("Repos/tvytlx--ai-agent-deep-dive");
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
> const me = dv.page("Repos/tvytlx--ai-agent-deep-dive");
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

> **2026-04-02** — 首次收錄
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

- [[2026-04-03|2026-04-03]] — 再次上榜，4.5k stars
- [[2026-04-02|2026-04-02]] — 首次收錄，3.1k stars
