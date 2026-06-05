---
repo: jdevalk/specification.website
url: https://github.com/jdevalk/specification.website
owner: jdevalk
owner_type: User
language: TypeScript
license: NOASSERTION
description: "Website specification — HTML, accessibility, security, SEO, agent-readiness. Platform-agnostic, sourced, MIT."
homepage: "https://specification.website"
stars: 524
stars_per_day: 87
forks: 33
open_issues: 3
created: 2026-05-29
pushed_at: 2026-06-04
first_seen: 2026-06-05
week: "2026-W23"
month: "2026-06"
category: "開發工具"
subcategory: "網站規範"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-05
use_case: "提供一個網站規範，涵蓋 HTML、可及性、安全性、SEO 和代理準備等技術特性。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-12"
contributor_count: 5
engagement: "low"
issue_close_rate: 50
repo_size_kb: 7073
readme_length: 4705
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-05"
star_history: "2026-06-05:524"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - "topic/accessibility"
  - "topic/agent_readiness"
  - "topic/astro"
  - "topic/cloudflare_pages"
  - "topic/llms_txt"
aliases:
  - "specification.website"
  - "jdevalk/specification.website"
  - "提供一個網站規範，涵蓋 HTML、可及性、安全性、SEO 和代理準備等技術特性。"
---

# specification.website

**524** stars · **87** stars/天 · 建立 6 天前 · TypeScript · NOASSERTION

```dataviewjs
const me = dv.page("Repos/jdevalk--specification.website");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`accessibility` `agent-readiness` `astro` `cloudflare-pages` `llms-txt` `mcp` `seo` `specification` `web-security` `web-standards` `well-known`

> [!summary] 一句話摘要
> 提供一個網站規範，涵蓋 HTML、可及性、安全性、SEO 和代理準備等技術特性。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (87 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要遵循網站標準並提升可及性和安全性的前端開發者和團隊。
> **一句話重點** 這個專案提供了一個全面的網站規範，讓開發者能夠更好地理解和實作網站標準。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/jdevalk--specification.website");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "網站規範" && p.file.name !== "jdevalk--specification.website" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 網站規範 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** low
> **結論** 花 4 小時學習、2 小時整合，得到全面的網站規範，值得一試。

> [!abstract] 核心創新
> 提供一個全面的網站技術規範，涵蓋多個方面，並強調來源透明性。

## 專案簡介

這個專案的核心機制是提供一個平台無關的網站規範，涵蓋從 HTML 到安全性標頭的各種技術要求。用戶可以透過 `npm run dev` 在本地啟動開發伺服器，並使用 `npm run build` 生成靜態網站，這樣的設計使得開發者能夠專注於網站的技術特性，而不必擔心具體的實現細節。這個規範的賣點在於它的全面性和來源透明性，所有頁面都會引用至少一個來源，這樣用戶可以清楚了解每個建議的依據。技術上，專案使用了 TypeScript 和 Astro 框架，並依賴於 Node.js 22.12 以上版本，這樣的選擇使得開發過程中能夠利用現代 JavaScript 的特性，並且保持高效能。與其他網站規範相比，如 MDN 或 W3C，這個專案不僅提供了標準的參考，還強調了可及性和安全性，並且不強制特定的實現方式，這使得它對於多樣化的開發環境更具適應性。

實際使用中，開發者可以根據自己的需求選擇實現方式，這樣的靈活性是其他規範所不具備的。該專案的社群活躍度不高，開放的問題數量也相對較少，這可能影響到使用者在遇到問題時的支援。這個專案目前處於 alpha 階段，對於小型團隊或個人開發者來說，值得嘗試，但在生產環境中使用時仍需謹慎。未來可能會進一步擴展更多的技術細節和實作範例，建議使用者密切關注更新。適合的使用情境包括需要遵循網頁標準的開發專案，或是希望提升網站可及性和安全性的團隊，而不建議在尚未成熟的生產環境中直接使用。

**技術棧**：`TypeScript` · `Astro` · `JavaScript` · `CSS` · `XSLT` · `Shell`

## 重點功能

- 平台無關的網站規範 — 涵蓋 HTML、可及性、安全性、SEO 等多個方面，無需依賴特定技術棧。
- 引用來源透明 — 每個建議都有明確的來源，便於用戶查證和理解。
- 靈活的實作建議 — 不強制特定實作方式，開發者可以根據需求選擇適合的技術。
- 狀態等級標示 — 提供必要、推薦、可選和避免的標準，幫助開發者做出明智決策。
- 自動生成的靜態網站 — 使用 `npm run build` 生成靜態輸出，便於部署和分享。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 啟動開發伺服器
```bash
npm run dev
```
3. 生成靜態網站
```bash
npm run build
```

## 程式碼範例

```ts
{
  "前置條件": "需要 Node.js 22.12+ 環境",
  "指令": "npm run build",
  "預期輸出": "靜態輸出在 ./dist 目錄中"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 524 stars（87/天），forks 33（6.3%），這顯示出一定的關注度。專案的主要貢獻者包括多位開發者，這表明有一定的社群支持。它解決了網站開發中缺乏統一規範的痛點，特別是在可及性和安全性方面，這些是許多開發者在實作時常常忽略的部分。技術上，使用了現代的開發工具和框架，這使得專案更具吸引力。這個專案的爆發可能受到開發者對於網站標準化需求的驅動，尤其是在多樣化的開發環境中。

## 適合誰使用

**目標受眾**：需要遵循網站標準並提升可及性和安全性的前端開發者和團隊。

> [!example] 使用場景
> - 前端工程師用它來設計符合 WCAG 標準的網站，因為這樣可以確保網站對所有用戶都可及，並提升 SEO 排名。
> - 網站開發團隊用它來檢查網站的安全性標頭，因為這能夠減少潛在的安全漏洞，並提升用戶信任度。
> - 產品經理用它來制定網站的技術規範，因為這樣可以確保所有開發人員都遵循相同的標準，減少溝通成本。

## 架構分析

這個專案採用的是一個基於 Astro 的靜態網站架構，這樣的選擇使得網站能夠快速生成並且易於部署。資料流方面，使用者透過 Markdown 文件編輯規範內容，然後使用 npm 指令生成靜態頁面，這樣的流程簡化了內容管理。選擇 Astro 框架的好處是能夠利用其現代化的開發特性，但代價是需要使用者具備一定的 Node.js 環境知識。擴展性方面，這個架構可以輕鬆添加新的規範頁面，但如果未來需要更複雜的功能，可能需要重新考慮架構設計。整體而言，這個設計使得網站能夠保持輕量和高效，但在功能擴展上可能會遇到瓶頸。

## 技術深入分析

這個專案的核心技術機制是基於 Astro 框架，這使得網站能夠快速生成靜態頁面，並且利用現代 JavaScript 的特性來提升開發效率。專案的資料流是透過 Markdown 文件來管理規範內容，這樣的設計使得內容更新變得簡單且直觀。效能方面，靜態網站的生成速度快，並且在部署後能夠提供良好的用戶體驗，但在處理大量請求時可能會遇到瓶頸。選擇 Node.js 和 TypeScript 的好處是能夠利用其強大的生態系統，但同時也要求開發者具備一定的技術背景。這個專案的依賴樹相對簡單，主要依賴於 Astro 和一些常見的工具，這降低了維護的複雜度。技術風險方面，專案的 alpha 階段可能導致未來的功能不穩定，並且對於外部 API 的依賴程度較低，這在一定程度上降低了供應鏈風險。整合方面，與主流的 CI/CD 工具（如 GitHub Actions）相容性良好，這使得在現有的開發流程中導入變得更加容易。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，並且包含了範例指令。安裝過程相對順暢，但對於不熟悉 Node.js 的用戶可能會有一定的學習曲線。整體而言，花 30 分鐘應該能夠順利啟動一個簡單的專案。

## 優缺點分析

> [!success] 優點
> - 提供全面的網站規範，涵蓋多個技術領域。
> - 來源透明，便於用戶查證和理解。
> - 靈活的實作建議，適合多樣化的開發環境。

> [!danger] 缺點
> - 目前仍處於 alpha 階段，可能存在不穩定性。
> - 社群活躍度不高，支援有限。
> - 不提供具體的實作範例，對新手不友好。

> [!warning] 注意事項
> - 目前仍處於 alpha 階段，可能存在不穩定的功能。
> - 社群活躍度不高，可能在遇到問題時缺乏支援。
> - 不提供具體的實作範例，對於新手可能有學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI 代理的生成和管理，而本專案則是針對網站標準的規範。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供網站的安全性和性能分析，與本專案的規範性質不同。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於特定的代碼生成，而本專案則是針對網站的全面規範。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成和管理 AI 代理，而本專案則是針對網站標準的規範，兩者的應用場景完全不同。 | 如果你的專案需要專注於 AI 代理的管理和生成，則應選擇此工具。 | low，因為兩者的功能和應用場景完全不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供網站的安全性和性能分析，而本專案則是針對網站的全面規範，兩者的功能重點不同。 | 如果你的專案需要專注於網站的安全性和性能，則應選擇此工具。 | medium，因為需要重新調整專案的重點和方向。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **specification.website** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成和管理 AI 代理，而本專案則是針對網站標準的規範，兩者的應用場景完全不同。 | 提供網站的安全性和性能分析，而本專案則是針對網站的全面規範，兩者的功能重點不同。 |
> | 遷移成本 | - | low，因為兩者的功能和應用場景完全不同。 | medium，因為需要重新調整專案的重點和方向。 |
> | 適用場景 | 主要場景 | 如果你的專案需要專注於 AI 代理的管理和生成，則應選擇此工 | 如果你的專案需要專注於網站的安全性和性能，則應選擇此工具。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境中，Node.js 版本不兼容可能導致安裝失敗
  - 解法：確保使用 Node.js 22.12+ 版本
- [MEDIUM] 靜態生成過程中可能會因為 Markdown 格式錯誤而導致構建失敗
  - 解法：檢查 Markdown 文件的格式和內容
- [MEDIUM] 社群支持不足，可能在遇到問題時無法獲得即時幫助
  - 解法：參考官方文檔和 GitHub Issues

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要遵循網站標準的專案 | 非常適合 | 提供全面的網站規範，幫助團隊確保技術一致性。 |
| 大型企業網站需要提升可及性和安全性 | 適合 | 雖然專案仍在 alpha 階段，但提供的規範對於提升網站質量有幫助。 |
| 個人開發者希望快速了解網站標準 | 非常適合 | 提供清晰的規範和來源，適合快速學習和實作。 |
| 需要一個成熟穩定的網站規範工具 | 不適合 | 目前仍在 alpha 階段，存在不穩定性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 4 小時學習、2 小時整合，得到全面的網站規範，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料。依賴鏈相對簡單，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/jdevalk--specification.website");
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
> const me = dv.page("Repos/jdevalk--specification.website");
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
| Forks | 33 |
| Open Issues | 3 |
| Issue 解決率 | 50% (3 closed) |
| 最後推送 | 2026-06-04 |
| 建立日期 | 2026-05-29 |
| 官方網站 | [Link](https://specification.website) |
| Repo 大小 | 6.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/jdevalk/specification.website) |
| Topics | `accessibility` `agent-readiness` `astro` `cloudflare-pages` `llms-txt` `mcp` `seo` `specification` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@astrojs/mdx` `@astrojs/rss` `@tailwindcss/vite` `astro` `tailwindcss` `@cloudflare/workers-types` `pagefind` `sharp`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 47
>     "Astro" : 26
>     "JavaScript" : 16
>     "CSS" : 5
>     "XSLT" : 4
>     "Shell" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@jdevalk](https://github.com/jdevalk) | 66 |
> | [@dependabot[bot]](https://github.com/dependabot[bot]) | 6 |
> | [@andersdosen](https://github.com/andersdosen) | 1 |
> | [@apermo](https://github.com/apermo) | 1 |
> | [@claude](https://github.com/claude) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度不高，開放的問題數量相對較少。
**連結**：[文件](https://specification.website)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-31 ~ 2026-06-04）
> **活躍天數** 5 天 · **最新 commit** mcp: add tool annotations, structured output, and richer schemas

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#16](https://github.com/jdevalk/specification.website/issues/16) | [Fix] Set to Skip links to required | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # The Website Specification
> 
> [](https://github.com/jdevalk/specification.website/actions/workflows/ci.yml)
> [](LICENSE)
> [](https://creativecommons.org/licenses/by/4.0/)
> [](https://specification.website)
> 
> The website specification — from `` to `/.well-known/security.txt`, from WCAG contrast to `llms.txt`. Platform-agnostic, sourced on every page, written for humans and agents. MIT licensed, open for pull requests.
> 
> **Live site:** 
> **MCP server:** 
> 
> ## What this is
> 
> The web is a layer cake of standards: WHATWG defines HTML, W3C ratifies WCAG, the IETF publishes the RFCs behind security headers and `/.well-known/` URIs, IANA registers the namespaces, search engines publish their own rules, browsers add quirks. Almost nobody carries the whole picture.
> 
> This site collects the slices into one platform-agnostic specification — sources cited on every page.
> 
> It is *not* a framework. It is *not* a tutorial. It is a spec, in the same way the HTML Living Standard is a spec: outcomes, requirements, references.
> 
> ## What this is not
> 
> - Not platform-specific. No "use this Next.js plugin" advice — the spec describes the outcome, you choose the implementation.
> - Not opinion. Where there is no settled standard, the spec says so.
> - Not a marketing site. No newsletter capture. No cookies. Aggregate Plausible analytics; that's it.
> 
> ## Categories
> 
> - **Foundations** — HTML, head, document basics.
> - **SEO** — search visibility.
> - **Accessibility** — WCAG-aligned rules.
> - **Security** — headers, transport, policies.
> - **Well-Known URIs** — agreed paths under `/.well-known/`.
> - **Agent Readiness** — making a site legible to AI agents.
> - **Performance** — Core Web Vitals, caching, fonts.
> - **Privacy** — consent, signals, respecting choice.
> - **Resilience** — graceful failure.
> - **Internationalisation** — language, locale, direction.
> 
> ## Development
> 
> Requirements: Node.js 22.12+, npm.
> 
> ```bash
> npm install
> npm run dev      # http://localhost:31337
> npm run build    # static output in ./dist
> npm run preview  # serve ./dist on port 31337
> ```
> 
> The dev server runs on port `31337` by convention (because of course it does).
> 
> ## Adding or changing a spec page
> 
> 1. Find the right category under `src/content/spec//`.
> 2. Copy an existing `.md` file — for example, `src/content/spec/foundations/title.md`.
> 3. Fill in the front matter (see schema in [`src/content.config.ts`](src/content.config.ts)). At minimum: `title`, `summary`, `category`, `status`, `order`, and `sources`.
> 4. Write the body. Sections: `## What it is`, `## Why it matters`, `## How to implement`, `## Common mistakes`, `## Verification`.
> 5. Open a PR.
> 
> The build will fail if the schema is invalid — that is intentional.
> 
> Everything derived from the spec content updates automatically: `/spec/`, `/checklist/`, `/llms.txt`, `/llms-full.txt`, `/sitemap-index.xml`, `/rss.xml`, per-page `.md` endpoints, the Pagefind search index, and the MCP server's bundled data. Never hand-edit those; edit the source markdown.
> 
> ## Status levels
> 
> - **Required** — the web platform contract breaks without it.
> - **Recommended** — modern sites should do it.
> - **Optional** — depends on context.
> - **Avoid** — outdated, harmful, or actively superseded.
> 
> ## Sources
> 
> Every page cites at least one source. The site draws on:
> 
> - [WHATWG HTML Living Standard](https://html.spec.whatwg.org/)
> - [MDN Web Docs](https://developer.mozilla.org/)
> - [WCAG 2.2](https://www.w3.org/TR/WCAG22/) and the Understanding documents
> - [IETF RFCs](https://www.rfc-editor.org/) for protocol-level items
> - [sitemaps.org](https://www.sitemaps.org/), [schema.org](https://schema.org/), [llmstxt.org](https://llmstxt.org/)
> - [Google Search Central](https://developers.google.com/search), [web.dev](https://web.dev/)
> - [Yoast Developer Portal](https://developer.yoast.com/)
> - [Equalize Digital Accessibility Checker docs](https://equalizedigital.com/accessibility-checker/documentation/)
> - [WP Accessibility Knowledge Base](https://wpaccessibility.org/)
> - [Is It Agent Ready?](https://isitagentready.com/)
> - [Overlay Fact Sheet](https://overlayfactsheet.com/)
> 
> ## MCP server
> 
> A separate Cloudflare Worker in [`mcp/`](mcp/) exposes the spec to MCP-aware agents. See [`mcp/README.md`](mcp/README.md) for tools, the connection config, and how to deploy.
> 
> ## Licence
> 
> Content is licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Code is licensed under [MIT](LICENSE). Use it, fork it, ship it.
> 
> ## Contributing
> 
> See [CONTRIBUTING.md](CONTRIBUTING.md). Three rules: cite your sources, stay platform-agnostic, be honest about status.
> 
> ## Security
> 
> See [SECURITY.md](SECURITY.md) or [/.well-known/security.txt](https://specification.website/.well-known/security.txt).

## 延伸閱讀

相關概念：[[可及性]] · [[網站安全]] · [[SEO]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

[GitHub](https://github.com/jdevalk/specification.website) · [官方網站](https://specification.website)

## 相關收錄

> [!note]- 直接競品（同子分類：網站規範）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "網站規範" AND file.name != "jdevalk--specification.website"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "jdevalk--specification.website"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "jdevalk--specification.website" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W23" AND file.name != "jdevalk--specification.website"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["可及性","網站安全","SEO"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "jdevalk--specification.website" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/jdevalk--specification.website");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "jdevalk--specification.website" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "jdevalk" AND file.name != "jdevalk--specification.website"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/jdevalk--specification.website");
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
> const me = dv.page("Repos/jdevalk--specification.website");
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
> const me = dv.page("Repos/jdevalk--specification.website");
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
> const me = dv.page("Repos/jdevalk--specification.website");
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
> const me = dv.page("Repos/jdevalk--specification.website");
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

> **2026-06-05** — 首次收錄
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

- [[2026-06-05|2026-06-05]] — 首次收錄，524 stars
