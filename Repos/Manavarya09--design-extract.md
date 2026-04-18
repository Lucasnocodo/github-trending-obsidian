---
repo: Manavarya09/design-extract
url: https://github.com/Manavarya09/design-extract
owner: Manavarya09
owner_type: User
language: JavaScript
license: MIT
description: "Extract the complete design language from any website — colors, typography, spacing, shadows, and more. npx CLI + Claude Code plugin."
homepage: "https://designlang.vercel.app/"
stars: 882
stars_per_day: 441
forks: 71
open_issues: 11
created: 2026-04-15
pushed_at: 2026-04-17
first_seen: 2026-04-18
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "設計工具"
release_tag: "v4.0.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-18
use_case: "從任何網站提取完整的設計語言，包括顏色、字體、間距、陰影等。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-21"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 7956
readme_length: 10000
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-18"
star_history: "2026-04-18:882"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
  - "topic/agent_skill"
  - "topic/agent_skills"
  - "topic/ai"
  - "topic/claude_code_plugin"
  - "topic/cli"
aliases:
  - "design-extract"
  - "Manavarya09/design-extract"
  - "從任何網站提取完整的設計語言，包括顏色、字體、間距、陰影等。"
---

# design-extract

**882** stars · **441** stars/天 · 建立 2 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/Manavarya09--design-extract");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v4.0.0` `easy-install`

`agent-skill` `agent-skills` `ai` `claude-code-plugin` `cli` `colors` `css` `design-system` `design-tokens` `npx` `playwright` `skills-sh` `tailwind` `typography` `web-scraping`

> [!summary] 一句話摘要
> 從任何網站提取完整的設計語言，包括顏色、字體、間距、陰影等。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (441 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速提取和應用網站設計系統的前端開發者和設計師。
> **一句話重點** designlang 不僅僅是提取顏色和字體，而是全面捕捉網站的設計系統。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Manavarya09--design-extract");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "設計工具" && p.file.name !== "Manavarya09--design-extract" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 設計工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，3 小時整合，得到全面的設計系統提取，值得投入。

> [!abstract] 核心創新
> designlang 是唯一一個能夠提取完整設計系統並評估設計質量的工具。

## 專案簡介

designlang 是一個強大的 CLI 工具，能夠從任何網站提取完整的設計系統。用戶只需執行 `npx designlang <url>`，工具會自動爬取網站，提取所有計算樣式並生成多達 8 種輸出文件，包括 AI 優化的 markdown、Tailwind 配置和 CSS 變數。這個工具的賣點在於它不僅提取顏色和字體，還能捕捉佈局模式、響應行為和互動狀態，並提供 WCAG 可及性評分。設計評分功能能夠對網站的設計質量進行 A-F 的評級，幫助用戶快速識別設計問題。使用者可以透過 `designlang clone <url>` 生成一個完整的 Next.js 應用，並且透過 `designlang watch <url>` 監控網站設計變更，這在持續集成和開發中非常有用。技術上，這個工具依賴於 Playwright 來進行無頭瀏覽，並且支援多種框架的自動檢測和配置。與其他設計提取工具相比，designlang 提供了更全面的功能，特別是在佈局和響應設計的捕捉上，這使得它在設計系統的開發中更具優勢。

**技術棧**：`Playwright 1.42.0` · `Commander 12.0.0` · `Chalk 5.3.0`

## 重點功能

- 一鍵提取設計系統 — 使用 `npx designlang <url>` 提取顏色、字體、間距等。
- 設計評分系統 — 使用 `designlang score <url>` 評估網站設計質量，提供 A-F 的評分。
- 佈局模式提取 — 自動檢測網頁的網格和彈性佈局，提供詳細的佈局結構。
- 響應設計捕捉 — 支援多達 4 種視口的響應設計提取，記錄設計在不同尺寸下的變化。
- 監控設計變更 — 使用 `designlang watch <url>` 監控網站設計變更，並在變更時發送警報。

## 快速開始

1. 直接使用設計提取
```bash
npx designlang https://example.com
```
2. 提取完整設計系統
```bash
npx designlang https://example.com --full
```
3. 生成 Next.js 應用
```bash
designlang clone https://example.com
```

## 程式碼範例

```js
{
  "前置條件": "需要安裝 Node.js 20 以上版本",
  "指令": "npx designlang https://vercel.com --full",
  "預期輸出": "✓ vercel-com-design-language.md (32.6KB)\n✓ vercel-com-design-tokens.json (5.6KB)\n✓ vercel-com-tailwind.config.js (3.4KB)\n✓ vercel-com-variables.css (18.6KB)\n✓ vercel-com-preview.html (31.8KB)"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 2 天內累積 882 stars（441/天），forks 71（8.0%），顯示出強勁的增長潛力。作者 Manavarya09 在設計和開發領域有豐富經驗，此工具解決了市場上設計提取工具僅提供顏色和字體的痛點，提供了更全面的設計系統提取功能。社群對於其功能的需求和反饋也促進了其快速成長，特別是在多品牌比較和響應設計的需求上。這個工具的出現，正好填補了設計開發過程中的多個空白。

## 適合誰使用

**目標受眾**：需要快速提取和應用網站設計系統的前端開發者和設計師。

> [!example] 使用場景
> - 前端工程師用它來從競爭對手網站提取設計系統，因為這樣可以快速了解市場趨勢，並在設計上做出調整。
> - 設計師用它來生成 Figma 變數，因為這樣可以直接在設計工具中使用提取的顏色和字體，節省時間。
> - 產品經理用它來監控網站的設計變更，因為這樣可以確保品牌一致性，並及時調整產品策略。

## 架構分析

designlang 採用無頭瀏覽器 Playwright 來爬取網站，這使得它能夠獲取實時的 CSS 計算樣式。架構上，工具的核心是提取和分析 DOM 樹，並生成多種格式的輸出文件。這種設計使得用戶能夠快速獲取所需的設計資訊，而不需要手動檢查每個元素。

選擇 Playwright 而非其他爬蟲工具的原因在於其強大的 DOM 操作能力和對現代網站的良好支持，然而這也意味著需要一定的資源來運行無頭瀏覽器。整體而言，這個工具的架構設計能夠有效地滿足設計提取的需求，但在處理大型網站時可能會面臨性能瓶頸。使用者需要考慮到網站的複雜性和資源消耗。

這個工具的擴展性良好，能夠適應不同的網站結構和設計需求。

## 技術深入分析

designlang 的核心技術機制是利用 Playwright 進行無頭瀏覽，這使得它能夠獲取網站的實時樣式和佈局。這個工具能夠處理多達 4 種視口的響應設計，並且能夠捕捉互動狀態的變化，這在其他工具中是無法實現的。設計評分系統則是基於 WCAG 2.1 標準，對顏色對比進行評估，這使得設計的可及性得到了重視。從性能上來看，這個工具在提取過程中可能會消耗較多的資源，特別是在處理大型網站時，冷啟動時間和記憶體佔用可能會增加。選擇 Playwright 而非其他爬蟲工具的原因在於其對現代網站的良好支持和強大的 DOM 操作能力，但這也帶來了對資源的需求。技術風險方面，對於某些複雜的網站結構，可能會面臨提取不完全的情況，這需要用戶在使用時進行一定的手動檢查。整合方面，這個工具能夠與主流的設計工具和前端框架良好兼容，並且提供了豐富的輸出格式，這使得它在設計開發流程中具有很高的靈活性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了多個範例，安裝過程順暢，使用 `npx` 直接運行無需安裝。文件中有詳細的使用指南，但目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 全面提取設計系統，包括顏色、字體、佈局和互動狀態。
> - 提供設計評分功能，幫助用戶識別設計問題。
> - 支援多種輸出格式，方便與不同工具整合。

> [!danger] 缺點
> - 對於某些複雜網站可能無法完全提取所有樣式。
> - 需要穩定的網路連接以確保網站爬取的成功。
> - 在處理大型網站時可能會面臨性能瓶頸。

> [!warning] 注意事項
> - 僅支援公開網站，無法提取受保護的內容。
> - 對於某些複雜的網站結構，可能無法完全提取所有樣式。
> - 需要穩定的網路連接以確保網站爬取的成功。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 專注於提取靜態樣式，無法捕捉響應設計和互動狀態，而 designlang 提供全面的設計系統提取。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | claude-obsidian 主要針對內容提取，缺乏設計系統的全面性，而 designlang 專注於設計元素的提取和評估。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 專注於靜態樣式的提取，無法捕捉響應設計和互動狀態，而 designlang 提供全面的設計系統提取。 | 如果只需要靜態樣式的提取，且對響應設計無需求，可以選擇 boneyard。 | medium，因為需要重新配置提取流程。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | claude-obsidian 主要針對內容提取，缺乏設計系統的全面性，而 designlang 專注於設計元素的提取和評估。 | 如果需要提取內容而非設計系統，可以考慮 claude-obsidian。 | low，因為內容提取相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **design-extract** | **boneyard** | **claude-obsidian** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | boneyard 專注於靜態樣式的提取，無法捕捉響應設計和互動狀態，而 designlang 提供全面的設計系統提取。 | claude-obsidian 主要針對內容提取，缺乏設計系統的全面性，而 designlang 專注於設計元素的提取和評估。 |
> | 遷移成本 | - | medium，因為需要重新配置提取流程。 | low，因為內容提取相對簡單。 |
> | 適用場景 | 主要場景 | 如果只需要靜態樣式的提取，且對響應設計無需求，可以選擇 bo | 如果需要提取內容而非設計系統，可以考慮 claude-obs |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 某些複雜網站無法完全提取樣式，特別是使用 Shadow DOM 的網站
  - 解法：手動檢查和補充缺失的樣式
- [MEDIUM] 在高流量網站上可能會遇到爬取速度慢的問題
  - 解法：選擇較低的爬取頻率或在非高峰時段進行爬取
- [MEDIUM] 對於某些設計模式的支持可能不完全
  - 解法：使用者需手動調整提取結果以符合需求

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型設計團隊需要快速提取設計系統 | 非常適合 | 設計團隊可以快速獲取並應用網站的設計系統。 |
| 大型企業需要監控多個品牌的設計變化 | 適合 | 能夠進行多品牌比較和同步設計變更。 |
| 個人開發者想要快速生成設計樣式 | 普通 | 雖然功能強大，但對於簡單專案可能過於複雜。 |
| 需要提取受保護網站的設計系統 | 不適合 | 目前無法處理需要認證的網站。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到全面的設計系統提取，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需訪問網站的公開內容，不會存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Manavarya09--design-extract");
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
> const me = dv.page("Repos/Manavarya09--design-extract");
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
| Forks | 71 |
| Open Issues | 11 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-17 |
| 建立日期 | 2026-04-15 |
| 官方網站 | [Link](https://designlang.vercel.app/) |
| Repo 大小 | 7.8 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Manavarya09/design-extract) |
| Topics | `agent-skill` `agent-skills` `ai` `claude-code-plugin` `cli` `colors` `css` `design-system` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `playwright` `commander` `chalk` `ora`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 96
>     "CSS" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Manavarya09](https://github.com/Manavarya09) | 29 |

**最新版本**：v4.0.0 — v4.0.0 — Clone, Score, Watch, 11 Components (2026-04-15)

> [!info]- Release Notes
> ## New Commands
> 
> - **`designlang clone <url>`** — generates a working Next.js project with the extracted design applied. One command → runnable app.
> - **`designlang score <url>`** — rates design system quality across 7 categories (color discipline, typography, spacing, shadows, radii, accessibility, tokenization) with a letter grade A-F.
> - **`designlang watch <url>`** — monitors a site for design changes on a configurable interval. Alerts when colors, fonts, or accessibility scores change.
> 
> ## Enhanced Component Detection
> 
> Now detects 11 component types (up from 4):
> buttons, cards, inputs, links, **navigation, footer, modals/dialogs, dropdowns/menus, tables, badges/tags, avatars**
> 
> ## Design Score in Every Output
> 
> The markdown file and CLI summary now include a full design system score with category breakdown and actionable issues.
> 
> ```
> designlang score https://vercel.com
> → 68/100 Grade D
>   Color Discipline     ██████████░░░░░░░░░░ 50
>   Typography           ██████████████░░░░░░ 70
>   Spacing System       ████████████████░░░░ 80
>   Accessibility        ███████████████████░ 94
>   Tokenization         ████████████████████ 100
> ```

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題尚未解決。
**連結**：[文件](https://designlang.vercel.app/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-15 ~ 2026-04-17）
> **活躍天數** 3 天 · **最新 commit** style(website): switch theme to pure black and white

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#17](https://github.com/Manavarya09/design-extract/issues/17) | feat: wordpress theme export | 0 | 0 |
> | [#15](https://github.com/Manavarya09/design-extract/issues/15) | feat: ignore list for third-party widget styles `enhancement` | 0 | 0 |
> | [#14](https://github.com/Manavarya09/design-extract/issues/14) | feat: JSON output mode for CI/CD pipelines `enhancement` | 0 | 0 |
> | [#13](https://github.com/Manavarya09/design-extract/issues/13) | feat: support Vue, Svelte, Angular theme output `enhancement` | 0 | 0 |
> | [#12](https://github.com/Manavarya09/design-extract/issues/12) | bug: shadow DOM components not extracted `bug` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> DESIGNLANG
>   Reverse-engineer any website's complete design system in one command.
> 
>   
>   
>   
>   
> 
> ---
> 
>   
> 
> **designlang** crawls any website with a headless browser, extracts every computed style from the live DOM, and generates **8 output files** — including an AI-optimized markdown file, visual HTML preview, Tailwind config, React theme, shadcn/ui theme, Figma variables, W3C design tokens, and CSS custom properties.
> 
> But unlike every other tool out there, it also extracts **layout patterns** (grids, flexbox, containers), captures **responsive behavior** across 4 breakpoints, records **interaction states** (hover, focus, active), scores **WCAG accessibility**, and lets you **compare multiple brands** or **sync live sites to local tokens**.
> 
> 
> ## Quick Start
> 
> ```bash
> npx designlang https://stripe.com
> ```
> 
> Get everything at once:
> 
> ```bash
> npx designlang https://stripe.com --full
> ```
> 
> 
> ## Install
> 
> ```bash
> 
> # Use directly (no install needed)
> npx designlang https://example.com
> 
> 
> # Or install globally
> npm install -g designlang
> 
> 
> ## Example Output
> 
> Running `designlang https://vercel.com --full`:
> 
> ```
>   designlang
>   https://vercel.com
> 
>   Output files:
>   ✓ vercel-com-design-language.md (32.6KB)
>   ✓ vercel-com-design-tokens.json (5.6KB)
>   ✓ vercel-com-tailwind.config.js (3.4KB)
>   ✓ vercel-com-variables.css (18.6KB)
>   ✓ vercel-com-preview.html (31.8KB)
>   ✓ vercel-com-figma-variables.json (12.4KB)
>   ✓ vercel-com-theme.js (1.4KB)
>   ✓ vercel-com-shadcn-theme.css (477B)
>   ✓ screenshots/button.png
>   ✓ screenshots/card.png
>   ✓ screenshots/nav.png
>   ✓ screenshots/hero.png
>   ✓ screenshots/full-page.png
> 
>   Summary:
>   Colors: 27 unique colors
>   Fonts: Geist, Geist Mono
>   Spacing: 18 values (base: 2px)
>   Shadows: 11 unique shadows
>   Radii: 10 unique values
>   Breakpoints: 45 breakpoints
>   Components: 11 types detected (with CSS snippets)
>   CSS Vars: 407 custom properties
>   Layout: 55 grids, 492 flex containers
>   Gradients: 4 unique gradients
>   Z-Index: 8 layers mapped
>   Icons: 23 unique SVGs
>   Font Files: 4 font sources detected
>   Images: 6 style patterns
>   Responsive: 4 viewports, 3 breakpoint changes
>   Interactions: 8 state changes captured
>   A11y: 94% WCAG score (7 failing pairs)
>   Design Score: 68/100 (D) — 4 issues
> ```
> 
> 
> ## All Features
> 
> | Feature | Flag / Command | Description |
> |---------|---------------|-------------|
> | Base extraction | `designlang ` | Colors, typography, spacing, shadows, radii, CSS vars, breakpoints, animations, components |
> | Layout system | automatic | Grid patterns, flex usage, container widths, gap values |
> | Accessibility | automatic | WCAG 2.1 contrast ratios for all fg/bg pairs |
> | Design scoring | automatic | 7-category quality rating (A-F) with actionable issues |
> | Gradients | automatic | Gradient type, direction, stops, classification |
> | Z-index map | automatic | Layer hierarchy, z-index wars detection |
> | SVG icons | automatic | Deduplicated icons, size/style classification, color palette |
> | Font files | automatic | Source detection (Google/self-hosted/CDN/system), @font-face CSS |
> | Image styles | automatic | Aspect ratios, shapes, filters, pattern classification |
> | Dark mode | `--dark` | Extracts dark color scheme + light/dark diff |
> | Auth pages | `--cookie`, `--header` | Extract from authenticated/protected pages |
> | Multi-page | `--depth ` | Crawl N internal pages for site-wide tokens |
> | Screenshots | `--screenshots` | Capture buttons, cards, inputs, nav, hero, full page |
> | Responsive | `--responsive` | Crawl at 4 viewports, map breakpoint changes |
> | Interactions | `--interactions` | Capture hover/focus/active state transitions |
> | Everything | `--full` | Enable screenshots + responsive + interactions |
> | Apply | `designlang apply ` | Auto-detect framework and write tokens to your project |
> | Clone | `designlang clone ` | Generate a working Next.js starter with extracted design |
> | Score | `designlang score ` | Rate design quality with visual bar chart breakdown |
> | Watch | `designlang watch ` | Monitor for design changes on interval |
> | Diff | `designlang diff  ` | Compare two sites (MD + HTML) |
> | Multi-brand | `designlang brands ` | N-site comparison matrix |
> | Sync | `designlang sync ` | Update local tokens from live site |
> | History | `designlang history ` | Track design changes over time |
> 
> 
> ### 5. Multi-Brand Comparison
> 
> Compare N brands side-by-side:
> 
> ```bash
> designlang brands stripe.com vercel.com github.com linear.app
> ```
> 
> Generates a matrix with color overlap analysis, typography comparison, spacing systems, and accessibility scores. Outputs both `brands.md` and `brands.html`.
> 
> 
> ## What You Get (8 Files)
> 
> | File | What it is |
> |------|------------|
> | `*-design-language.md` | AI-optimized markdown — feed it to any LLM to recreate the design |
> | `*-preview.html` | Visual report with swatches, type scale, shadows, a11y score |
> | `*-design-tokens.json` | [W3C Design Tokens](https://design-tokens.github.io/community-group/format/) format |
> | `*-tailwind.config.js` | Drop-in Tailwind CSS theme |
> | `*-variables.css` | CSS custom properties |
> | `*-figma-variables.json` | Figma Variables import (with dark mode support) |
> | `*-theme.js` | React/CSS-in-JS theme (Chakra, Stitches, Vanilla Extract) |
> | `*-shadcn-theme.css` | shadcn/ui globals.css variables |
> 
> The markdown output has **19 sections**: Color Palette, Typography, Spacing, Border Radii, Box Shadows, CSS Custom Properties, Breakpoints, Transitions & Animations, Component Patterns (with full CSS snippets), Layout System, Responsive Design, Interaction States, Accessibility (WCAG 2.1), Gradients, Z-Index Map, SVG Icons, Font Files, Image Style Patterns, and Quick Start.
> 
> 
> # As an agent skill (Claude Code, Cursor, Codex, 40+ agents)
> npx skills add Manavarya09/design-extract
> ```
> 
> 
> ## What Makes This Different
> 
> Most design extraction tools give you colors and fonts. That's it. designlang fills 5 market gaps that no other tool addresses:
> 
> 
> ### 1. Layout System Extraction
> 
> Extracts the structural skeleton — grid column patterns, flex direction usage, container widths, gap values, and justify/align patterns.
> 
> ```
> Layout: 55 grids, 492 flex containers
> ```
> 
> Every other tool gives you the paint. designlang gives you the architecture.
> 
> 
> ### 2. Responsive Multi-Breakpoint Capture
> 
> Crawls the site at 4 viewports (mobile, tablet, desktop, wide) and maps exactly what changes:
> 
> ```bash
> designlang https://vercel.com --responsive
> ```
> 
> ```
> Responsive: 4 viewports, 3 breakpoint changes
>   375px → 768px: Nav visibility hidden → visible, Hamburger shown → hidden
>   768px → 1280px: Max grid columns 1 → 3, H1 size 32px → 48px
> ```
> 
> No other tool captures how the design *adapts*, just how it looks at one size.
> 
> 
> ### 3. Interaction State Capture
> 
> Programmatically hovers and focuses interactive elements, capturing the actual style transitions:
> 
> ```bash
> designlang https://stripe.com --interactions
> ```
> 
> ```css
> /* Button Hover */
> background-color: rgb(83, 58, 253) → rgb(67, 47, 202);
> box-shadow: none → 0 4px 12px rgba(83, 58, 253, 0.4);
> 
> /* Input Focus */
> border-color: rgb(200, 200, 200) → rgb(83, 58, 253);
> outline: none → 2px solid rgb(83, 58, 253);
> ```
> 
> 
> ### 4. Live Site Sync
> 
> Treat the deployed site as your source of truth, not Figma:
> 
> ```bash
> designlang sync https://stripe.com --out ./src/tokens
> ```
> 
> Detects design changes and auto-updates your local `design-tokens.json`, `tailwind.config.js`, and `variables.css`.
> 
> 
> ### 6. Clone Command
> 
> Generate a working Next.js app with the extracted design applied:
> 
> ```bash
> designlang clone https://stripe.com
> cd cloned-design && npm install && npm run dev
> ```
> 
> One command → a running app with the site's colors, fonts, spacing, and component patterns.
> 
> 
> ### 7. Design System Scoring
> 
> Rate any site's design quality across 7 categories:
> 
> ```bash
> designlang score https://vercel.com
> ```
> 
> ```
>   68/100  Grade: D
> 
>   Color Discipline     ██████████░░░░░░░░░░ 50
>   Typography           ██████████████░░░░░░ 70
>   Spacing System       ████████████████░░░░ 80
>   Shadows  

## 延伸閱讀

相關概念：[[設計系統]] · [[響應設計]] · [[自動化測試]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]]

[GitHub](https://github.com/Manavarya09/design-extract) · [官方網站](https://designlang.vercel.app/)

## 相關收錄

> [!note]- 直接競品（同子分類：設計工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "設計工具" AND file.name != "Manavarya09--design-extract"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Manavarya09--design-extract"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "Manavarya09--design-extract" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "Manavarya09--design-extract"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["設計系統","響應設計","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Manavarya09--design-extract" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Manavarya09--design-extract");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Manavarya09--design-extract" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Manavarya09" AND file.name != "Manavarya09--design-extract"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Manavarya09--design-extract");
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
> const me = dv.page("Repos/Manavarya09--design-extract");
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
> const me = dv.page("Repos/Manavarya09--design-extract");
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
> const me = dv.page("Repos/Manavarya09--design-extract");
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
> const me = dv.page("Repos/Manavarya09--design-extract");
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

> **2026-04-18** — 首次收錄
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

- [[2026-04-18|2026-04-18]] — 首次收錄，882 stars
