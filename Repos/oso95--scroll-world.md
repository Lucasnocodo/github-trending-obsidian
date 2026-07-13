---
repo: oso95/scroll-world
url: https://github.com/oso95/scroll-world
owner: oso95
owner_type: User
language: JavaScript
license: MIT
description: "A skill that turn any brand into a scrollable 3D world"
homepage: ""
stars: 1319
stars_per_day: 220
forks: 176
open_issues: 1
created: 2026-07-06
pushed_at: 2026-07-10
first_seen: 2026-07-12
week: "2026-W29"
month: "2026-07"
category: "開發工具"
subcategory: "網頁工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-12
use_case: "將任何品牌轉換為可滾動的 3D 世界，提供沉浸式體驗。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-16"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 91
readme_length: 3862
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-12"
star_history: "2026-07-12:916,2026-07-13:1319"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
aliases:
  - "scroll-world"
  - "oso95/scroll-world"
  - "將任何品牌轉換為可滾動的 3D 世界，提供沉浸式體驗。"
---

# scroll-world

**916** stars · **183** stars/天 · 建立 5 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/oso95--scroll-world");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 將任何品牌轉換為可滾動的 3D 世界，提供沉浸式體驗。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (183 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望在品牌網站上創建互動式 3D 體驗的前端開發者和設計師。
> **一句話重點** 這個專案展示了如何利用現有技術創建沉浸式的品牌展示，並且簡化了整個過程。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/oso95--scroll-world");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "網頁工具" && p.file.name !== "oso95--scroll-world" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 網頁工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學習，6 小時整合，得到提升品牌展示的效果，值得一試。

> [!abstract] 核心創新
> 提供了一個無縫的滾動式 3D 世界生成技能，提升品牌展示的沉浸感。

## 專案簡介

這個專案提供了一個技能，能夠為任何品牌生成一個沉浸式的滾動式 3D 世界著陸頁。使用者只需提供品牌信息，系統會生成一系列場景，並在滾動時通過相機無縫地從一個場景飛入另一個場景。這個過程中，使用者的滾動動作會驅動時間，而不是相機的移動，這樣的設計使得整體體驗更加流暢。關鍵指令包括 `/plugin install scroll-world` 和 `npx skills add oso95/scroll-world`，這些指令可以快速將此技能整合到 Claude Code 或 Codex 中。技術上，這個專案依賴於 Higgsfield 生成藝術資產，並使用了一個可配置的滾動引擎，支持多種前端框架如 HTML、Next.js 和 Vue。

這種框架無關的設計讓它能夠輕鬆集成到現有的網站中。與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，本專案提供了更高的自定義性和更流暢的滾動效果，因為它使用了連續的相機飛行技術，而不是傳統的切換場景。使用者需要注意生成資產會消耗 Higgsfield 的點數，並且生成過程可能需要一些時間。整體來說，這是一個適合需要創建互動式品牌展示的開發者的工具，特別是對於那些希望提升用戶體驗的網站開發者。

**技術棧**：`JavaScript` · `Python` · `HTML`

## 重點功能

- 沉浸式滾動體驗 — 用戶滾動時相機無縫飛入不同場景，提供流暢的視覺效果。
- 框架無關 — 支持 HTML、Next.js、Vue 等多種前端框架，方便集成。
- 自動資產生成 — 使用 Higgsfield 生成場景和相機動畫，簡化創建過程。
- 可配置的滾動引擎 — 提供一個可配置的 JavaScript 滾動引擎，支持 lazy load 和 crossfade 效果。
- 支持多種代理 — 可與 Claude Code、Codex 等多種代理兼容，擴展性強。

## 快速開始

1. 安裝插件到 Claude Code
```bash
/plugin marketplace add oso95/scroll-world
```
2. 安裝到 Codex 或其他代理
```bash
npx skills add oso95/scroll-world
```
3. 生成滾動式世界著陸頁
```bash
$scroll-world
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 916 stars（183/天），forks 98（10.7%），這顯示出相當高的興趣和參與度。作者 oso95 之前的經歷和專案背景不詳，但這個專案解決了品牌展示中的沉浸式體驗問題，之前的方案往往缺乏流暢性和互動性。近期的推廣活動可能吸引了開發者的注意，特別是在社交媒體上分享的效果。技術上，Higgsfield 的進步使得這種 3D 展示變得可行，並且其框架無關的特性降低了使用門檻。forks/stars 比率為 10.7%，顯示出有不少開發者在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：希望在品牌網站上創建互動式 3D 體驗的前端開發者和設計師。

> [!example] 使用場景
> - 前端開發者用它來為客戶的品牌網站創建沉浸式的滾動式 3D 展示，因為這樣的展示能夠提升用戶的互動體驗，並增加網站的吸引力。
> - 市場營銷團隊用它來展示新產品的特點，因為這種視覺效果能夠更好地傳達品牌故事，並吸引潛在客戶的注意。
> - 創意總監用它來設計品牌活動的宣傳頁面，因為這種獨特的展示方式能夠讓品牌在競爭中脫穎而出。

## 架構分析

這個專案採用了一個模組化的架構，將生成和展示過程分開。使用 Higgsfield 生成藝術資產，並利用可配置的滾動引擎來控制相機的運動。這樣的設計使得使用者可以靈活地調整場景和相機路徑，而不需要深入了解底層實現。

資料流方面，使用者提供的品牌信息和場景順序會被轉換為生成請求，然後生成的資產會被整合到滾動引擎中。這種架構的好處在於能夠快速迭代和測試不同的設計，而代價是需要依賴外部服務（Higgsfield）來生成資產，這可能會影響生成速度和成本。整體的擴展性良好，但在資產生成過程中可能會遇到性能瓶頸。

## 技術深入分析

這個專案的核心技術機制是基於 Higgsfield 生成藝術資產，並使用一個可配置的 JavaScript 滾動引擎來控制相機的運動。這樣的設計使得生成的場景能夠無縫連接，提供流暢的用戶體驗。效能方面，生成過程需要消耗 Higgsfield 的點數，並且生成時間取決於場景的數量和複雜度。這個專案選擇 JavaScript 和 Python 作為主要語言，因為這兩種語言在網頁開發和數據處理中都非常流行，並且有著豐富的生態系統。依賴樹方面，這個專案的依賴相對簡單，但需要注意 Higgsfield 的使用限制和成本。技術風險方面，資產生成過程的穩定性可能會受到外部服務的影響，這在高流量的情況下可能會導致性能瓶頸。整合方面，這個專案與主流的前端框架（如 Next.js 和 Vue）有良好的相容性，並且可以輕鬆集成到 CI/CD pipeline 中，降低了團隊的學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和使用指令，對於新手來說相對友好。安裝過程中需要注意 Higgsfield 的認證和配置，這可能會對某些使用者造成困擾。整體來說，花 30 分鐘應該能夠順利運行起來，但需要對相關技術有基本了解。

## 優缺點分析

> [!success] 優點
> - 提供獨特的滾動式 3D 展示，提升用戶體驗。
> - 框架無關設計，方便集成到現有網站中。
> - 自動生成資產，減少手動工作量。

> [!danger] 缺點
> - 資產生成需要消耗 Higgsfield 點數，增加成本。
> - 生成過程可能需要較長時間，影響開發效率。
> - 依賴外部服務，可能導致穩定性問題。

> [!warning] 注意事項
> - 生成資產需要消耗 Higgsfield 點數，可能會增加成本。
> - 生成過程需要時間，對於大型項目可能導致延遲。
> - 需要 Python 3 和 ffmpeg，增加了環境配置的複雜性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的 3D 展示功能，但主要集中在角色生成，缺乏滾動式體驗的流暢性。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於生成靜態場景，無法提供連續的相機飛行效果，適合需要簡單展示的場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色生成，提供靜態展示，無法實現滾動式效果。 | 如果需要生成角色而非場景展示，這個工具更合適。 | medium，因為需要重新設計展示邏輯。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供靜態場景生成，無法提供連續的相機飛行效果。 | 如果只需要簡單的靜態展示，這個工具更合適。 | low，因為只需簡單的 HTML 整合。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **scroll-world** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於角色生成，提供靜態展示，無法實現滾動式效果。 | 提供靜態場景生成，無法提供連續的相機飛行效果。 |
> | 遷移成本 | - | medium，因為需要重新設計展示邏輯。 | low，因為只需簡單的 HTML 整合。 |
> | 適用場景 | 主要場景 | 如果需要生成角色而非場景展示，這個工具更合適。 | 如果只需要簡單的靜態展示，這個工具更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 生成資產過程可能會導致延遲，特別是在高負載時。
  - 解法：提前規劃生成時間，避免在高峰期使用。
- [MEDIUM] 需要正確配置 Higgsfield CLI，否則無法生成資產。
  - 解法：確保已完成認證並檢查配置。
- [MEDIUM] 生成的資產格式可能不兼容某些瀏覽器。
  - 解法：測試生成的資產在主要瀏覽器上的兼容性。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 大型品牌的產品展示網站 | 非常適合 | 能夠提供沉浸式的用戶體驗，提升品牌形象。 |
| 小型創業公司的簡單網站 | 普通 | 雖然功能強大，但對於小型項目可能過於複雜。 |
| 需要快速原型的設計團隊 | 適合 | 能夠快速生成視覺效果，便於展示想法。 |
| 靜態產品展示頁面 | 不適合 | 此工具專注於動態展示，不適合靜態內容。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~6 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學習，6 小時整合，得到提升品牌展示的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，僅需訪問 Higgsfield 的 API，並且不存取敏感資料。依賴鏈的信任程度良好，無已知的供應鏈風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與前端框架如 Next.js 和 Vue 搭配使用，通常在開發階段集成。實際整合範例是在一個使用 Next.js 的專案中，開發者可以通過安裝技能並在頁面中調用 `$scroll-world` 來生成滾動式展示。支援 GitHub Actions 和其他 CI 工具的整合，降低了自動化部署的難度。最常見的整合問題是需要確保 Higgsfield CLI 正確配置，否則無法生成資產，這可能會影響開發進度。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，品牌展示通常依賴靜態頁面或傳統的動畫技術，缺乏沉浸式的互動體驗。隨著網頁技術的進步，特別是 3D 渲染和動畫技術的發展，這種新型的展示方式變得可行。這個工具代表了品牌展示的未來趨勢，未來可能會有更多類似的工具出現，進一步提升用戶體驗。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/oso95--scroll-world");
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
> const me = dv.page("Repos/oso95--scroll-world");
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
| Forks | 98 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-10 |
| 建立日期 | 2026-07-06 |
| Repo 大小 | 91 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/oso95/scroll-world) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 84
>     "Python" : 8
>     "HTML" : 8
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@oso95](https://github.com/oso95) | 10 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有更新，但問題解決率為 0%。
**連結**：[文件](https://github.com/oso95/scroll-world)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-06 ~ 2026-07-10）
> **活躍天數** 4 天 · **最新 commit** Support Codex and the skills CLI alongside Claude Code

## README 摘錄

> [!info]- 展開查看原文 README
> # scroll-world
> 
> https://github.com/user-attachments/assets/b08e641e-985b-4bd4-83ff-6750272d0c37
> 
> An agent skill — for Claude Code, Codex, and any `SKILL.md`-compatible agent — that
> builds an immersive, **scroll-scrubbed "fly through the world" landing page** for any industry or brand — the kind where, as you scroll, a camera flies
> from *outside* each scene *into* its interior, then flows on to the next scene with **no
> cuts**. One continuous connected flight through a little generated world (think the Emons
> logistics site, applied to whatever you want).
> 
> ## Install
> 
> ### Claude Code — as a plugin (recommended)
> 
> ```
> /plugin marketplace add oso95/scroll-world
> /plugin install scroll-world@scroll-world
> ```
> 
> Then just ask for a scroll-through world landing page, or invoke `/scroll-world`.
> 
> ### Codex & other agents — via the skills CLI
> 
> Using [Vercel's skills CLI](https://github.com/vercel-labs/skills), which installs into
> Codex, Claude Code, Cursor, and 20+ other agents:
> 
> ```bash
> npx skills add oso95/scroll-world            # pick your agent(s) when prompted
> npx skills add oso95/scroll-world -a codex   # or target Codex directly
> ```
> 
> In Codex, invoke it with `$scroll-world` (or `/skills` to browse), or just ask for a
> scroll-through world landing page.
> 
> ### Manually (drop-in skill)
> 
> Copy the skill folder into your agent's skills directory:
> 
> ```bash
> git clone https://github.com/oso95/scroll-world
> cp -R scroll-world/skills/scroll-world ~/.claude/skills/   # Claude Code
> cp -R scroll-world/skills/scroll-world ~/.codex/skills/    # Codex
> ```
> 
> ## Requirements
> 
> - The [Higgsfield CLI](https://higgsfield.ai), authenticated (`higgsfield auth login`),
>   with credits.
> - `ffmpeg` / `ffprobe` for frame extraction and encoding.
> - Python 3 with Pillow (optional — only for the transparent-scene knockout).
> 
> ## What it does
> 
> It leans on [Higgsfield](https://higgsfield.ai) for the art: cohesive isometric diorama
> scenes (GPT Image 2) and the camera flights themselves (Seedance image-to-video), scrubbed
> by scroll position — the same technique behind Apple's scroll-through product pages. The
> camera genuinely moves; scroll only drives time. It's **framework-agnostic**: you get the
> Higgsfield pipeline, the prompt templates, and a portable vanilla-JS scrub engine that
> drops into plain HTML, Next.js, Vue, or a Python-served page — nothing assumes a stack.
> 
> When invoked, the skill:
> 
> 1. **Interviews you** — the subject/industry + pitch, a brand kit (import from a URL, hand
>    it over, or have it proposed), art direction, and the ordered scenes the camera visits.
> 2. **Generates the assets** with Higgsfield — one still per scene, one "dive-in" camera
>    clip per scene, and the **connector** clips that join consecutive scenes, generated
>    from the actual rendered frames of their neighbours so every seam is frame-identical.
> 3. **Wires it up** — a config-driven scroll engine that plays the whole chain as one flight.
> 
> ## What's in the skill
> 
> ```
> skills/scroll-world/
> ├── SKILL.md                    the procedure + the seam rule + gotchas
> └── references/
>     ├── prompts.md              intake checklist + every Higgsfield prompt template
>     ├── pipeline.md             copy-paste batch scripts (generate → frames → connectors → encode)
>     ├── scrub-engine.js         portable, config-driven scrub engine (blob-seek, lazy load, seam crossfade)
>     ├── index-template.html     a minimal standalone page that mounts the engine
>     └── knockout.py             background knockout for floating scenes
> ```
> 
> ## Notes
> 
> - Asset generation costs Higgsfield credits (~N image gens + ~2N-1 video gens for N scenes)
>   and takes a while — the skill runs generations in the background and polls.
> - The generated `.mp4`/`.webp` assets are produced per project; they're not shipped here.
> 
> ## Star History
> 
>  
>    
>    
>    
>  
> 
> ## License
> 
> MIT — see [LICENSE](LICENSE).

## 延伸閱讀

相關概念：[[資料視覺化]] · [[自動化]] · [[網頁應用]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[GordenSun--GordenPPTSkill|GordenSun/GordenPPTSkill]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[cathrynlavery--diagram-design|cathrynlavery/diagram-design]]

[GitHub](https://github.com/oso95/scroll-world)

## 相關收錄

> [!note]- 直接競品（同子分類：網頁工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "網頁工具" AND file.name != "oso95--scroll-world"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "oso95--scroll-world"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "oso95--scroll-world" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W29" AND file.name != "oso95--scroll-world"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["資料視覺化","自動化","網頁應用"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "oso95--scroll-world" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/oso95--scroll-world");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "oso95--scroll-world" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "oso95" AND file.name != "oso95--scroll-world"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/oso95--scroll-world");
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
> const me = dv.page("Repos/oso95--scroll-world");
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
> const me = dv.page("Repos/oso95--scroll-world");
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
> const me = dv.page("Repos/oso95--scroll-world");
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
> const me = dv.page("Repos/oso95--scroll-world");
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

> **2026-07-12** — 首次收錄
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

- [[2026-07-13|2026-07-13]] — 再次上榜，1.3k stars
- [[2026-07-12|2026-07-12]] — 首次收錄，916 stars
