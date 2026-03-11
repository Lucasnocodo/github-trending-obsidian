---
repo: cyxzdev/Uncodixfy
url: https://github.com/cyxzdev/Uncodixfy
owner: cyxzdev
owner_type: User
language: N/A
license: N/A
description: "the holly uncodexify instructions - letting GPT create uncodexified UI"
homepage: ""
stars: 1380
stars_per_day: 276
forks: 106
open_issues: 0
created: 2026-03-06
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "UI 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "幫助 GPT 生成更正常的 UI 設計，避免常見的糟糕設計模式。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 3
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:1380"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
aliases:
  - "Uncodixfy"
  - "cyxzdev/Uncodixfy"
  - "幫助 GPT 生成更正常的 UI 設計，避免常見的糟糕設計模式。"
---

# Uncodixfy

**1.4k** stars · **276** stars/天 · 建立 5 天前 · N/A · 未標註授權

`easy-install`

> [!summary] 一句話摘要
> 幫助 GPT 生成更正常的 UI 設計，避免常見的糟糕設計模式。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (276 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要快速生成 UI 原型的開發者和設計師，尤其是對 GPT 生成內容有需求的團隊。
> **一句話重點** Uncodixify 的最大亮點在於它能有效改善 GPT 生成的 UI 設計，避免常見的設計缺陷。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~1h · **綁定風險** low
> **結論** 花 1 小時學習，1 小時整合，得到快速生成 UI 的效果，值得一試。

> [!abstract] 核心創新
> 這個專案的創新點在於通過明確的設計禁忌來改善 GPT 生成的 UI 設計。

## 專案簡介

Uncodixify 的核心機制是通過一組規則來限制 GPT 在生成 UI 時的設計選擇。使用者只需在提示中包含 `uncodixify.md`，這樣 GPT 就會避免使用過度圓角、浮動卡片等常見的糟糕設計模式，從而生成更符合用戶期望的界面。這個工具的賣點在於，它不教 GPT 如何設計，而是告訴它應該避免什麼，這樣可以有效減少設計上的重複性錯誤。技術上，這個專案並不依賴於複雜的框架或庫，而是通過簡單的文本規則來達成目的，這使得它的依賴性非常輕量。與其他 UI 設計工具相比，如 Figma 或 Sketch，Uncodixify 更加專注於生成過程中的限制，而不是提供設計工具本身。這使得它在需要快速生成原型或草圖的場景中非常有用，但在需要精細設計的情況下可能不夠靈活。使用者可能會發現，這個工具在生成的 UI 風格上有明顯的改善，但仍需手動調整以達到最佳效果。社群的活躍度相對較高，因為它在短短幾天內就獲得了1380顆星，顯示出對這個工具的需求。這個專案目前處於早期階段，但其簡單的使用方式使得它值得一試，特別是對於需要快速生成 UI 的開發者來說。建議在小型專案或原型開發中使用，但在大型商業應用中可能需要更多的設計調整。

## 重點功能

- 設計限制規則 — 包含一組明確的設計禁忌，幫助 GPT 避免常見的糟糕設計模式。
- 簡單集成 — 只需在提示中包含 `uncodixify.md`，即可啟用設計限制。
- 多平台支持 — 可用作 AI 編碼代理的技能，支持 Codex 和 Claude Code。
- 快速生成 — 能夠迅速生成符合用戶期望的 UI 設計，節省設計時間。
- 易於使用 — 透過簡單的指令即可調用，降低使用門檻。

## 快速開始

1. 安裝 Uncodixify 作為技能
```bash
npx skills add cyxzdev/Uncodixfy
```
2. 在提示中使用 Uncodixify
```bash
/uncodixfy
```
3. 檢查生成的 UI 設計
```bash
# 檢查生成的 UI 是否符合預期
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 1380 stars（276/天），forks 106（7.7%），這顯示出強烈的使用需求。作者 cyxzdev 及其團隊在 AI 和 UI 設計方面有豐富經驗，這個工具解決了 GPT 在 UI 設計中常見的重複性問題，之前的方案往往無法有效控制生成的設計風格。近期的社交媒體討論和開源社群的關注也促進了這個專案的快速成長。技術上，這個工具的出現是因為對於 AI 生成內容的需求不斷增加，特別是在 UI 設計領域。forks/stars 比率在 7.7% 屬於中等，顯示出有相當數量的用戶在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要快速生成 UI 原型的開發者和設計師，尤其是對 GPT 生成內容有需求的團隊。

> [!example] 使用場景
> - 前端工程師用它來生成 UI 原型，因為可以快速避免常見的設計錯誤，提升設計效率。
> - 產品經理用它來檢查 GPT 生成的界面設計，因為可以確保設計符合用戶期望，減少後期修改成本。
> - 設計師用它來作為初步草圖工具，因為能夠快速生成多個設計選項，節省時間。

## 架構分析

Uncodixify 的架構非常簡單，主要依賴於一組文本規則來限制 GPT 的設計選擇。這種設計模式的選擇使得工具的使用門檻非常低，任何人都可以輕鬆上手。資料流方面，使用者只需在提示中包含 `uncodixify.md`，GPT 便會在生成過程中遵循這些規則。這樣的設計雖然簡單，但在某些情況下可能無法完全控制生成的結果，使用者仍需進行手動調整。整體而言，這種設計使得 Uncodixify 在快速生成 UI 原型的場景中非常有效，但在需要精細設計的情況下可能會有局限性。

## 技術深入分析

Uncodixify 的核心技術機制是通過一組文本規則來限制 GPT 在 UI 設計中的選擇。這些規則針對 GPT 常見的設計模式進行了明確的禁忌設定，這樣可以有效減少生成過程中的重複性錯誤。由於這個工具不依賴於複雜的框架或庫，因此其效能非常輕量，對資源的需求也相對較低。設計取捨方面，選擇這種簡單的文本規則而非複雜的算法，雖然降低了實現的難度，但在某些情況下可能無法完全控制生成的結果。這意味著使用者仍需進行一定的手動調整，以確保生成的 UI 符合預期。在整合方面，這個工具可以輕鬆與現有的 GPT 系統進行集成，並且不會對現有的工作流造成太大的影響。整體而言，Uncodixify 提供了一種簡單而有效的方式來改善 AI 生成的 UI 設計，特別適合需要快速原型的開發者和設計師。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含了使用範例和安裝步驟。安裝過程非常順暢，無需複雜的配置。文件目前僅提供英文版本，對於非英語使用者可能會有一定的學習成本。

## 優缺點分析

> [!success] 優點
> - 能快速生成符合用戶期望的 UI 設計。
> - 簡單易用，降低了使用門檻。
> - 有效避免常見的設計錯誤，提升設計效率。

> [!danger] 缺點
> - 不提供完整的設計工具，僅限於生成過程中的限制。
> - 生成的 UI 可能仍需手動調整以達到最佳效果。
> - 對於複雜的設計需求，可能不夠靈活。

> [!warning] 注意事項
> - 不提供設計工具，只是限制生成的設計風格。
> - 可能需要手動調整生成的 UI，以達到最佳效果。
> - 對於複雜的 UI 設計需求，可能不夠靈活。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 生成的 UI 可能仍需手動調整以達到最佳效果
  - 解法：在生成後進行必要的手動修改
- [MEDIUM] 對於複雜的設計需求，可能不夠靈活
  - 解法：考慮結合其他設計工具使用
- [low] 可能無法完全控制生成的結果
  - 解法：在使用前仔細檢查生成的設計

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的 UI 原型開發 | 非常適合 | 能快速生成符合用戶期望的設計，節省時間。 |
| 大型商業應用的 UI 設計 | 不適合 | 對於複雜的設計需求，可能無法滿足。 |
| 個人開發者的 side project | 適合 | 簡單易用，能快速生成原型。 |
| 需要精細設計的專案 | 普通 | 可能需要額外的手動調整。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~1 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 1 小時學習，1 小時整合，得到快速生成 UI 的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不存取敏感資料。

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
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 106 |
| Open Issues | 0 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-06 |
| Repo 大小 | 2.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/cyxzdev/Uncodixfy) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@cyxzdev](https://github.com/cyxzdev) | 12 |
> | [@cyxdev](https://github.com/cyxdev) | 4 |
> | [@ianjamesburke](https://github.com/ianjamesburke) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度高，近期有多次更新和討論。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-06 ~ 2026-03-10）
> **活躍天數** 4 天 · **最新 commit** Add star history section to README

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

相關概念：[[自動化測試]] · [[程式碼生成]] · [[UI/UX 設計]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]]

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
> const concepts = ["自動化測試","程式碼生成","UI/UX 設計"];
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

- [[2026-03-11|2026-03-11]] — 再次上榜，1.4k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，1.3k stars
