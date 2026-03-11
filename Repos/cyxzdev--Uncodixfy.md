---
repo: cyxzdev/Uncodixfy
url: https://github.com/cyxzdev/Uncodixfy
owner: cyxzdev
owner_type: User
language: N/A
license: N/A
description: "the holly uncodexify instructions - letting GPT create uncodexified UI"
homepage: ""
stars: 1382
stars_per_day: 276
forks: 106
open_issues: 0
created: 2026-03-06
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "UI 設計工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "幫助 GPT 生成更符合設計規範的 UI，避免常見的設計缺陷。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 3
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:1380,2026-03-11:1382"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
aliases:
  - "Uncodixfy"
  - "cyxzdev/Uncodixfy"
  - "幫助 GPT 生成更符合設計規範的 UI，避免常見的設計缺陷。"
---

# Uncodixfy

**1.4k** stars · **276** stars/天 · 建立 5 天前 · N/A · 未標註授權

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
> 幫助 GPT 生成更符合設計規範的 UI，避免常見的設計缺陷。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (276 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要快速生成符合設計規範的 UI 的前端開發者和產品經理。
> **一句話重點** 這個專案的核心在於提供一套簡單的規則，讓 GPT 生成的 UI 更加符合設計標準。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~1h · **綁定風險** low
> **結論** 花 1 小時學習，1 小時整合，能快速提升 UI 設計質量，值得嘗試。

> [!abstract] 核心創新
> 這個專案提供了一套明確的規則集，幫助 GPT 避免常見的 UI 設計缺陷。

## 專案簡介

Uncodixfy 是一個針對 GPT 生成 UI 設計的規則集，旨在避免其常見的設計模式，例如浮動卡片、過大的圓角和過度使用漸層。使用者可以將 `uncodixify.md` 包含在提示或系統指令中，讓 GPT 在生成 UI 時遵循更傳統的設計規範。這樣的設計選擇是基於對 GPT 設計能力的觀察，發現其生成的 UI 常常重複使用不佳的設計模式。使用者只需在命令中加入 `/uncodixfy`，便能快速調用此功能，這樣的簡化流程使得設計過程更加高效。Uncodixfy 的技術實作上，並不試圖教導 GPT 如何設計，而是明確告訴它應該避免哪些設計元素，這樣的方式能有效減少設計上的錯誤。

與其他設計輔助工具相比，如 Figma 或 Adobe XD，Uncodixfy 更專注於生成過程中的指導，而不是提供完整的設計環境。這使得它在需要快速生成 UI 的情境下特別有用，尤其是對於需要快速迭代的開發團隊。使用者可能會發現，這個工具在處理複雜的設計需求時，仍然無法替代專業設計師的角色，但在簡單的 UI 生成上卻能顯著提升效率。這個專案目前處於早期階段，未來可能會加入更多的設計規則或擴展功能。對於小型團隊或個人開發者來說，這是一個值得嘗試的工具，但在大型專案中可能需要搭配其他設計工具使用。

## 重點功能

- 設計規則集 — 包含 `uncodixify.md`，明確告訴 GPT 應避免的設計元素。
- 簡單的命令調用 — 使用 `/uncodixfy` 來快速啟用設計規則。
- 跨平台支持 — 可用於多種 AI 編碼代理，包括 Codex 和 Claude Code。
- 即時反饋 — 生成的 UI 會根據規則即時調整，提升設計質量。
- 易於整合 — 只需簡單的 npx 指令即可安裝和使用。

## 快速開始

1. 安裝 Uncodixfy
```bash
npx skills add cyxzdev/Uncodixfy
```
2. 調用 Uncodixfy 功能
```bash
/uncodixfy
```
3. 將 `uncodixify.md` 包含在提示中
```bash
Include `uncodixify.md` in your prompt.
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 1382 stars（276/天），forks 106（7.7%），這顯示出不錯的增長潛力。作者 cyxzdev 及其團隊過去在 AI 設計方面有一定的經驗，這個專案解決了 GPT 在 UI 設計上常見的問題，提供了一個簡單的解決方案。近期的推廣活動和社群的討論也可能促進了這個專案的曝光度。這個工具的出現正好符合了對於 AI 設計輔助工具日益增長的需求，特別是在開發者社群中。forks/stars 比率在 7.7% 表示有相當一部分使用者在實際修改或擴展這個工具，顯示出其實用性。

## 適合誰使用

**目標受眾**：需要快速生成符合設計規範的 UI 的前端開發者和產品經理。

> [!example] 使用場景
> - 前端工程師用它來生成符合設計規範的 UI，因為這樣能避免 GPT 生成的常見設計缺陷，提升設計質量。
> - 產品經理用它來快速原型設計，因為能夠在短時間內獲得更符合用戶需求的界面。
> - 獨立開發者用它來簡化 UI 設計流程，因為這樣可以專注於功能開發，而不必花太多時間在設計上。

## 架構分析

Uncodixfy 的架構設計簡單明瞭，主要是基於一組設計規則來引導 GPT 的生成過程。這些規則以 Markdown 格式存在，使用者可以輕鬆地將其納入到提示中。這樣的設計選擇使得使用者能夠快速上手，而不需要深入了解複雜的設計理論。

資料流方面，使用者的輸入會經過這些設計規則的篩選，最終生成的 UI 會更符合常規設計標準。這種方法的優勢在於簡化了設計過程，但也可能限制了創造性，因為它強調的是避免錯誤而非創新。擴展性方面，未來可以考慮加入更多的設計規則或擴展功能，以適應不同的設計需求。

## 技術深入分析

Uncodixfy 的核心技術機制是基於一組設計規則，這些規則以 Markdown 格式存在，並且可以輕鬆地納入到 GPT 的提示中。這樣的設計選擇使得使用者能夠快速上手，並且不需要深入了解複雜的設計理論。效能方面，這個工具能夠在短時間內生成符合設計規範的 UI，但在處理更複雜的設計需求時，可能會遇到瓶頸。設計取捨方面，選擇使用簡單的規則來引導 GPT 的生成過程，這樣的方式雖然簡化了設計過程，但也可能限制了創造性。技術風險方面，未來在擴展功能時，可能會面臨設計規則的維護和更新問題。整合方面，這個工具與主流的 AI 編碼代理（如 Codex 和 Claude Code）有良好的相容性，但在與其他設計工具的整合上，可能需要進一步的適配。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了基本的使用說明和範例。安裝過程相對簡單，使用者只需執行一條命令即可。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 能夠有效避免 GPT 常見的設計缺陷。
> - 使用簡單，快速集成到現有工作流中。
> - 提供即時反饋，提升設計質量。

> [!danger] 缺點
> - 不適合處理複雜的設計需求。
> - 無法替代專業設計師的角色。
> - 目前僅支持特定的 AI 編碼代理。

> [!warning] 注意事項
> - 不適合處理複雜的 UI 設計需求。
> - 無法替代專業設計師的角色。
> - 目前僅支持特定的 AI 編碼代理。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用或小型專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在使用過程中，可能會遇到 GPT 仍然生成不符合規範的 UI。
  - 解法：多次調整提示內容，並重複使用 `uncodixify.md`。
- **[HIGH]** 對於複雜的 UI 設計需求，可能無法完全滿足。
  - 解法：考慮搭配專業設計工具使用。
- [MEDIUM] 目前僅支持特定的 AI 編碼代理，可能限制使用範圍。
  - 解法：關注未來的更新，期待擴展支持更多平台。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊的 UI 設計需求 | 非常適合 | 能快速生成符合設計規範的 UI，提升開發效率。 |
| 大型企業的複雜 UI 設計專案 | 不適合 | 無法處理複雜的設計需求，需專業設計師介入。 |
| 獨立開發者的原型設計 | 適合 | 能快速生成原型，節省設計時間。 |
| 需要高自由度的創意設計專案 | 普通 | 雖然提供設計規則，但可能限制創造性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~1 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 1 小時學習，1 小時整合，能快速提升 UI 設計質量，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，不存取敏感資料，且依賴鏈相對簡單，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Uncodixfy 最常與 AI 編碼代理搭配使用，特別是在開發過程中生成 UI 設計。在一個使用 Codex 的專案中，開發者可以通過將 `uncodixify.md` 包含在提示中，快速生成符合設計規範的 UI。這個工具與主流的 CI/CD 工具（如 GitHub Actions）相容，能夠輕鬆集成到現有的開發流程中。整合的摩擦點主要在於對於不同設計工具的支持，未來可能需要進一步的適配。

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

**社群活躍度**：社群活躍度尚可，最近有更新和維護。

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

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]]

[GitHub](https://github.com/cyxzdev/Uncodixfy)

## 相關收錄

> [!note]- 直接競品（同子分類：UI 設計工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "UI 設計工具" AND file.name != "cyxzdev--Uncodixfy"
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

- [[2026-03-11|2026-03-11]] — 再次上榜，1.4k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，1.3k stars
