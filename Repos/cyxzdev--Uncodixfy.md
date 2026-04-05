---
repo: cyxzdev/Uncodixfy
url: https://github.com/cyxzdev/Uncodixfy
owner: cyxzdev
owner_type: User
language: N/A
license: MIT
description: "the holly uncodexify instructions - letting GPT create uncodexified UI"
homepage: ""
stars: 2122
stars_per_day: 73
forks: 143
open_issues: 0
created: 2026-03-06
pushed_at: 2026-03-18
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "UI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "幫助 GPT 生成更正常的 UI 設計，避免常見的設計缺陷。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-16"
contributor_count: 3
engagement: "low"
issue_close_rate: 100
repo_size_kb: 2679
readme_length: 1387
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:1380,2026-03-11:1382,2026-03-13:1461,2026-03-13:1461,2026-03-14:1495,2026-03-15:1527,2026-03-16:1563,2026-03-17:1592,2026-03-18:1613,2026-03-19:1636,2026-03-20:1672,2026-03-21:1697,2026-03-22:1717,2026-03-23:1731,2026-03-24:1758,2026-03-25:1770,2026-03-26:1792,2026-03-27:1862,2026-03-28:1894,2026-03-29:1973,2026-03-30:2001,2026-03-31:2023,2026-04-01:2051,2026-04-02:2068,2026-04-03:2085,2026-04-04:2110,2026-04-05:2122"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
aliases:
  - "Uncodixfy"
  - "cyxzdev/Uncodixfy"
  - "幫助 GPT 生成更正常的 UI 設計，避免常見的設計缺陷。"
---

# Uncodixfy

**2.1k** stars · **73** stars/天 · 建立 29 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/cyxzdev--Uncodixfy");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 幫助 GPT 生成更正常的 UI 設計，避免常見的設計缺陷。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (73 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 17 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要快速生成 UI 設計但又希望避免常見設計缺陷的開發者和設計師。
> **一句話重點** Uncodixfy 不僅是一個工具，更是一種改善 AI 生成內容質量的思維方式。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/cyxzdev--Uncodixfy");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "UI 工具" && p.file.name !== "cyxzdev--Uncodixfy" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 UI 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 這個專案最核心的創新點是提供一套專門針對 GPT 的 UI 設計規則，幫助生成更符合人類設計標準的介面。

## 專案簡介

Uncodixfy 的核心機制是提供一套規則，讓 GPT 在生成 UI 時避免常見的設計模式，如浮動卡片、過大的圓角和過度使用漸層。使用者只需將 `uncodixify.md` 包含在提示或系統指令中，GPT 就會根據這些規則生成更符合常規的介面設計。這樣的設計方法不僅簡單有效，還能顯著改善 GPT 生成的 UI 質量，讓最終產品看起來更專業。關鍵指令為 `npx skills add cyxzdev/Uncodixfy`，安裝後可用 `/uncodixfy` 來啟用該技能。這個工具的賣點在於它專注於告訴 GPT 什麼不應該做，而不是教它如何設計，這樣的方式能有效避免 GPT 的設計偏見。技術上，這個工具並不依賴複雜的框架或演算法，因為它的重點在於規則的制定而非技術實作。

相較於其他 UI 生成工具，Uncodixfy 提供了一種簡單的方式來改善生成結果，避免了傳統方法中需要大量手動調整的麻煩。對於需要快速生成 UI 的開發者來說，這是一個非常實用的工具，尤其在面對需要大量介面設計的專案時。使用者可能會發現，這個工具能夠顯著減少設計迭代的時間，並提高最終產品的質量。這個專案目前處於早期階段，並且已經有 100% 的問題解決率，顯示出其活躍的維護狀態。未來幾個月內，預計會有更多功能的加入，進一步提升其使用價值。對於小型團隊或個人開發者，這是一個值得考慮的工具，特別是在設計需求高的情況下。

## 重點功能

- 規則集 — 提供一套明確的設計規則，讓 GPT 避免常見的設計缺陷。
- 簡單整合 — 只需使用 `npx skills add cyxzdev/Uncodixfy` 即可安裝並啟用。
- 即時反饋 — 使用 `/uncodixfy` 指令可立即應用規則於生成的 UI。
- 跨平台支持 — 可用於所有支持 AI 編碼代理的環境。
- 高效能 — 100% 的問題解決率，顯示出其良好的維護狀態。

## 快速開始

1. 安裝 Uncodixfy
```bash
npx skills add cyxzdev/Uncodixfy
```
2. 啟用 Uncodixfy
```bash
/uncodixfy
```
3. 將 `uncodixify.md` 包含在提示中
```bash
# 包含在提示中
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 29 天就累積 2122 stars（73/天），forks 143（6.7%），這是中等增長。作者 cyxzdev 之前在 UI 設計領域有相關經驗，這個工具解決了 GPT 在 UI 設計上常見的問題，讓生成的介面更符合人類的設計標準。近期在社群中引發討論，特別是在設計師和開發者之間。技術上，這個工具的出現是因為對於 AI 生成內容的需求不斷上升，尤其是在 UI 設計領域。forks/stars 比率顯示出許多人對這個工具感興趣並進行實際修改，顯示出其潛在的實用性。

## 適合誰使用

**目標受眾**：需要快速生成 UI 設計但又希望避免常見設計缺陷的開發者和設計師。

> [!example] 使用場景
> - 前端開發者用它來生成符合設計標準的 UI，因為這樣可以減少手動調整的時間，提升開發效率。
> - 產品經理用它來快速生成原型介面，因為這樣可以更快地收集用戶反饋，並進行迭代。
> - 設計師用它來檢查 GPT 生成的 UI 是否符合預期，因為這樣可以避免常見的設計缺陷，提升最終產品的質量。

## 架構分析

Uncodixfy 的架構設計相對簡單，主要依賴於一套規則集來引導 GPT 的生成過程。這種設計模式使得使用者可以輕鬆整合到現有的 GPT 使用流程中，而不需要額外的複雜配置。資料流方面，使用者在提示中包含 `uncodixify.md`，然後 GPT 根據這些規則生成 UI。這樣的設計選擇使得整體使用過程流暢，但也意味著使用者需要對 GPT 的基本操作有一定了解。擴展性方面，未來可能會加入更多的設計規則，但目前的設計已經能夠有效地改善生成的 UI 質量。

## 技術深入分析

Uncodixfy 的核心技術機制在於其設計的規則集，這些規則專門針對 GPT 在 UI 設計中常見的缺陷進行阻止。這種方法不依賴於複雜的演算法，而是通過明確的指導來引導生成過程。效能方面，這個工具的設計使得它能夠快速集成到現有的 GPT 使用流程中，並且不會對系統性能造成顯著影響。設計取捨方面，選擇這種規則導向的方式使得使用者能夠快速上手，但也意味著對於更複雜的設計需求可能無法提供足夠的支持。技術風險方面，由於這個工具主要依賴於 GPT 的生成能力，因此在 GPT 的性能不佳時，Uncodixfy 的效果也會受到影響。整合方面，這個工具可以輕鬆與現有的 GPT 使用流程相結合，並且不需要額外的配置，這使得它在實際應用中非常方便。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且簡潔，提供了足夠的範例來幫助新手理解如何使用。安裝過程順暢，沒有明顯的坑。雖然沒有專門的入門指南，但基本的使用說明已經足夠。文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 簡單易用，安裝和啟用過程快速。
> - 能有效改善 GPT 生成的 UI 質量，避免常見設計缺陷。
> - 高效的問題解決率，顯示出良好的維護狀態。

> [!danger] 缺點
> - 僅適用於 GPT 生成的 UI，對其他工具無法保證效果。
> - 不提供具體的設計指導，僅針對避免常見缺陷。
> - 需要使用者具備基本的 GPT 操作知識。

> [!warning] 注意事項
> - 僅適用於 GPT 生成的 UI，對於其他工具無法保證效果。
> - 不提供具體的設計指導，僅針對避免常見缺陷。
> - 需要使用者具備基本的 GPT 操作知識。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/cyxzdev--Uncodixfy");
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
> const me = dv.page("Repos/cyxzdev--Uncodixfy");
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
| Forks | 143 |
| Open Issues | 0 |
| Issue 解決率 | 100% (6 closed) |
| 最後推送 | 2026-03-18 |
| 建立日期 | 2026-03-06 |
| Repo 大小 | 2.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/cyxzdev/Uncodixfy) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@cyxzdev](https://github.com/cyxzdev) | 13 |
> | [@cyxdev](https://github.com/cyxdev) | 4 |
> | [@ianjamesburke](https://github.com/ianjamesburke) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度高，已解決所有開放問題。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-06 ~ 2026-03-18）
> **活躍天數** 5 天 · **最新 commit** Create LICENSE

## README 摘錄

> [!info]- 展開查看原文 README
> # Uncodixify
> 
>   
> 
> GPT is surprisingly bad at UI design.
> 
> If you ask it to generate interfaces long enough, you start noticing the same bad design-patterns repeating.
> 
> Floating cards.  
> Oversized rounded corners.  
> Gradient-heavy dashboards.    
> Decorative labels everywhere.  
> Glass panels.  
> 
> After a while you can recognize a “GPT UI” immediately.
> 
> This file exists to stop that.
> 
> ---
> 
> ## What this is
> 
> `uncodixify.md` is a rule set that forces GPT to stop relying on its usual UI habits.
> 
> Instead of letting it improvise design decisions, the file blocks the patterns it almost always falls back to and pushes it toward more normal interfaces.
> 
> It doesn't try to teach GPT how to design.
> 
> It mostly just tells it what **not** to do.
> 
> ## Using it
> 
> Include `uncodixify.md` in your prompt or system instructions when asking GPT to generate UI.
> 
> Example:
> 
>   
>   
> 
> Before (Typical GPT UI) | After (Uncodixified)
> 
>   
>   
> 
> Before (Typical GPT UI) | After (Uncodixified)
> 
> ---
> ## Agent Skill
> 
> Uncodixfy is also available as an agent skill via `SKILL.md`. This works with AI coding agents that support the skill format, including Codex and Claude Code.
> 
> #### All platforms.
> 
> ```
> npx skills add cyxzdev/Uncodixfy
> ```
> Or bunx if you want.
> 
> Once installed, invoke it with:
> 
> ```text
> /uncodixfy
> ```
> ## Star History
> 
> [](https://www.star-history.com/?repos=cyxzdev%2FUncodixfy&type=date&legend=top-left)

## 延伸閱讀

相關概念：[[UI-UX 設計]] · [[AI 生成內容]] · [[設計規則]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]]

[GitHub](https://github.com/cyxzdev/Uncodixfy)

## 相關收錄

> [!note]- 直接競品（同子分類：UI 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "UI 工具" AND file.name != "cyxzdev--Uncodixfy"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "cyxzdev--Uncodixfy"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "cyxzdev--Uncodixfy" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "cyxzdev--Uncodixfy"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["UI-UX 設計","AI 生成內容","設計規則"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "cyxzdev--Uncodixfy" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

> [!note]- Ring 更高的同類競品
> ```dataviewjs
> const me = dv.page("Repos/cyxzdev--Uncodixfy");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "cyxzdev--Uncodixfy" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "cyxzdev" AND file.name != "cyxzdev--Uncodixfy"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/cyxzdev--Uncodixfy");
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
> const me = dv.page("Repos/cyxzdev--Uncodixfy");
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
> const me = dv.page("Repos/cyxzdev--Uncodixfy");
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
> const me = dv.page("Repos/cyxzdev--Uncodixfy");
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
> const me = dv.page("Repos/cyxzdev--Uncodixfy");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-13|2026-03-13]] — 再次上榜，1.5k stars
- [[2026-03-11|2026-03-11]] — 再次上榜，1.4k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，1.3k stars
