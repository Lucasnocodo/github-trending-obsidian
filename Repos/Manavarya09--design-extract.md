---
repo: Manavarya09/design-extract
url: https://github.com/Manavarya09/design-extract
owner: Manavarya09
owner_type: User
language: JavaScript
license: MIT
description: "Extract any website's complete design system with one command. DTCG tokens, semantic+primitive+composite, MCP server for Claude Code/Cursor/Windsurf, multi-platform emitters (iOS SwiftUI, Android Compose, Flutter, WordPress), Tailwind v4, Figma variables, shadcn/ui, CSS health audit, WCAG remediation, Chrome extension. MIT, Playwright, Node 20+."
homepage: "https://designlang.manavaryasingh.com"
stars: 1089
stars_per_day: 272
forks: 86
open_issues: 6
created: 2026-04-15
pushed_at: 2026-04-19
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
use_case: "一鍵提取任何網站的完整設計系統，並生成可用的前端代碼。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-23"
contributor_count: 2
engagement: "low"
issue_close_rate: 45
repo_size_kb: 8268
readme_length: 9991
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-18"
star_history: "2026-04-18:882,2026-04-18:883,2026-04-19:1007,2026-04-19:1007,2026-04-20:1089"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
  - "topic/accessibility"
  - "topic/agent_skill"
  - "topic/ai"
  - "topic/chrome_extension"
  - "topic/claude_code_plugin"
aliases:
  - "design-extract"
  - "Manavarya09/design-extract"
  - "一鍵提取任何網站的完整設計系統，並生成可用的前端代碼。"
---

# design-extract

**1.0k** stars · **336** stars/天 · 建立 3 天前 · JavaScript · MIT

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

`v4.0.0` `easy-install`

`accessibility` `agent-skill` `ai` `chrome-extension` `claude-code-plugin` `cli` `css` `cursor` `design-system` `design-to-code` `design-tokens` `dtcg` `figma` `mcp-server` `npx` `playwright` `shadcn-ui` `skills-sh` `tailwind` `web-scraping`

> [!summary] 一句話摘要
> 一鍵提取任何網站的完整設計系統，並生成可用的前端代碼。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (336 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要快速提取和重用網站設計的前端開發者和設計師。
> **一句話重點** designlang 不僅提取設計元素，還能捕捉佈局和互動狀態，這在市場上是獨一無二的。

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
> **結論** 花 2 小時學習，3 小時整合，得到快速提取設計系統的能力，值得投入。

> [!abstract] 核心創新
> designlang 是唯一一個能夠提取完整設計系統，包括佈局模式和互動狀態的工具。

## 專案簡介

designlang 是一個強大的工具，能夠通過無頭瀏覽器爬取網站，提取其所有計算樣式，並生成多達 8 種輸出文件，包括 AI 優化的 Markdown 文件、Tailwind 配置、Figma 變數等。使用者只需執行 `npx designlang <url>` 即可獲得完整設計系統，這個工具的賣點在於它不僅提取顏色和字體，還能捕捉佈局模式、響應式行為及互動狀態，這是許多其他工具無法做到的。設計評分功能可對網站的設計質量進行 A-F 的評分，並提供具體的改進建議。技術上，designlang 使用 Playwright 進行網站爬取，並依賴 Node.js 20+ 環境，這使得它能夠高效地處理複雜的 CSS 和 JavaScript。

與其他設計提取工具相比，如 0xGF/boneyard 和 AgriciDaniel/claude-obsidian，designlang 提供了更全面的佈局和互動狀態捕捉，並且支持多平台輸出（iOS、Android、Flutter、WordPress）。然而，使用者需要注意，當前版本仍有一些已知的問題，如無法提取 Shadow DOM 元素。整體而言，這個工具適合需要快速提取和重用網站設計的開發者，特別是在設計迭代頻繁的環境中。未來幾個月，隨著功能的增強和社群的活躍，預期會有更多的改進和擴展。

**技術棧**：`Node.js 20+` · `Playwright` · `Tailwind CSS`

## 重點功能

- 一鍵提取 — 使用 `npx designlang <url>` 提取網站的完整設計系統，包括顏色、字體、間距等。
- 設計評分 — 使用 `designlang score <url>` 評估網站設計質量，涵蓋顏色、排版、可訪問性等七個類別。
- 響應式捕捉 — 使用 `--responsive` 參數在四個視口下捕捉設計變化，提供詳細的斷點變化報告。
- 互動狀態捕捉 — 使用 `--interactions` 參數捕捉按鈕的懸停和焦點狀態，生成完整的 CSS 變化。
- 多平台輸出 — 支持生成 iOS、Android、Flutter 和 WordPress 的設計代碼，方便跨平台開發。

## 快速開始

1. 直接使用 npx 提取設計系統
```bash
npx designlang https://example.com
```
2. 提取完整設計系統
```bash
npx designlang https://stripe.com --full
```
3. 生成 Next.js 應用
```bash
designlang clone https://stripe.com
```

## 程式碼範例

```js
{
  "前置條件": "已安裝 Node.js 20+",
  "指令": "npx designlang https://vercel.com --full",
  "預期輸出": "✓ vercel-com-design-language.md (32.6KB)\n✓ vercel-com-design-tokens.json (5.6KB)\n✓ vercel-com-tailwind.config.js (3.4KB)\n✓ vercel-com-variables.css (18.6KB)\n✓ vercel-com-preview.html (31.8KB)\n✓ vercel-com-figma-variables.json (12.4KB)\n✓ vercel-com-theme.js (1.4KB)\n✓ vercel-com-shadcn-theme.css (477B)"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 1007 stars（336/天），forks 80（7.9%），顯示出強烈的增長潛力。作者 Manavarya09 之前有其他開源貢獻，這個工具解決了設計提取過程中的多個痛點，特別是對於需要快速生成可用前端代碼的開發者。近期的推廣活動和社群討論也可能促進了其曝光率。高 forks/stars 比率（7.9%）顯示出許多使用者在實際修改和使用這個工具，反映出其實用性和需求。

## 適合誰使用

**目標受眾**：需要快速提取和重用網站設計的前端開發者和設計師。

> [!example] 使用場景
> - 前端工程師用它來快速提取競爭對手網站的設計系統，因為這樣可以節省手動重建的時間，並加速自己的產品開發。
> - UX 設計師用它來評估網站的可訪問性，因為它提供了詳細的 WCAG 分數和設計質量評分，幫助他們做出改進。
> - 開發團隊用它來同步本地設計代碼與實際網站，因為它支持自動檢測設計變更並更新本地設計令牌，減少了手動維護的負擔。

## 架構分析

designlang 採用無頭瀏覽器（Playwright）來爬取網站，這樣設計的提取過程能夠模擬用戶行為，捕捉到實際的樣式和互動狀態。資料流方面，首先從網站抓取 DOM，然後提取樣式和佈局，最後生成多種格式的輸出文件。這種設計使得工具能夠高效地處理複雜的 CSS 和 JavaScript，並能夠捕捉到響應式設計的變化。

選擇 Playwright 而非其他工具的原因在於其強大的跨瀏覽器支持和高效的性能。這樣的架構雖然增加了初始的安裝複雜度，但能夠顯著提升提取的準確性和完整性。整體來看，這種設計對於需要高品質設計提取的開發者來說是非常有利的。

## 技術深入分析

designlang 的核心技術機制是使用 Playwright 進行網站爬取，這使得它能夠模擬用戶行為，捕捉到實際的樣式和互動狀態。它能夠處理複雜的 CSS 和 JavaScript，並生成多種格式的輸出文件，包括 Markdown、JSON 和 CSS。效能方面，設計提取的速度取決於網站的複雜度，通常在幾秒鐘內完成。設計選擇 Playwright 而非 Selenium，因為 Playwright 在處理現代網頁應用時表現更佳，並且支持多瀏覽器環境。這種選擇雖然使得工具的安裝過程稍顯複雜，但卻能顯著提升提取的準確性和完整性。技術風險方面，對於某些網站的提取可能會遇到跨域問題，這需要在未來的版本中進行優化。整合方面，designlang 可以輕鬆融入現有的開發流程，特別是在使用 CI/CD pipeline 的情況下，能夠自動化設計提取的過程。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導和範例，安裝過程相對順暢，使用 npx 命令即可快速上手。雖然目前沒有多語言支持，但文件內容詳盡，能夠幫助新手快速理解如何使用這個工具。

## 優缺點分析

> [!success] 優點
> - 能夠全面提取設計系統，包括佈局和互動狀態。
> - 支持多平台輸出，方便跨平台開發。
> - 設計評分功能提供了具體的改進建議，提升設計質量。

> [!danger] 缺點
> - 對於某些網站的提取可能會遇到跨域問題。
> - 目前仍有已知的 bug 需要修復。
> - 需要 Node.js 環境，對於某些使用者來說可能增加了學習成本。

> [!warning] 注意事項
> - 當前版本無法提取 Shadow DOM 元素。
> - 對於某些網站，可能無法正確處理跨域樣式表。
> - 目前的設計評分功能仍在改進中，可能會有誤差。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 主要專注於提取顏色和字體，而 designlang 提供了完整的佈局和互動狀態捕捉。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | claude-obsidian 針對設計系統的生成較為簡單，而 designlang 提供了多平台的輸出選項和設計評分功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | boneyard 主要專注於提取顏色和字體，而 designlang 提供了完整的佈局和互動狀態捕捉。 | 如果你只需要基本的顏色和字體提取，boneyard 會是更簡單的選擇。 | low，因為功能簡單，遷移過程不會太複雜。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | claude-obsidian 針對設計系統的生成較為簡單，而 designlang 提供了多平台的輸出選項和設計評分功能。 | 如果你的需求僅限於簡單的設計系統生成，claude-obsidian 可能會更適合。 | medium，因為功能和設計理念有所不同，可能需要調整使用方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **design-extract** | **boneyard** | **claude-obsidian** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | boneyard 主要專注於提取顏色和字體，而 designlang 提供了完整的佈局和互動狀態捕捉。 | claude-obsidian 針對設計系統的生成較為簡單，而 designlang 提供了多平台的輸出選項和設計評分功能。 |
> | 遷移成本 | - | low，因為功能簡單，遷移過程不會太複雜。 | medium，因為功能和設計理念有所不同，可能需要調整使用方式。 |
> | 適用場景 | 主要場景 | 如果你只需要基本的顏色和字體提取，boneyard 會是更簡 | 如果你的需求僅限於簡單的設計系統生成，claude-obsi |

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

- **[HIGH]** 對於某些網站的提取可能會遇到跨域問題，導致樣式無法正確加載。
  - 解法：嘗試使用 `--insecure` 參數來忽略 HTTPS 警告。
- [MEDIUM] 在提取 Shadow DOM 元素時，可能會出現樣式缺失的情況。
  - 解法：目前無法解決，需等待後續版本修復。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的前端開發專案 | 非常適合 | 能夠快速提取設計系統，節省開發時間。 |
| 大型企業的設計系統維護 | 普通 | 雖然功能全面，但可能需要更多的穩定性和支持。 |
| 需要快速迭代的設計團隊 | 非常適合 | 能夠自動同步設計變更，提升工作效率。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到快速提取設計系統的能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：工具本身不需要高權限，且不會存取敏感資料。依賴的庫和框架在社群中有良好的信任度，使用於 CI/CD pipeline 時相對安全。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

designlang 可以與現有的開發工具鏈無縫整合，特別是在使用 Node.js 和 Tailwind CSS 的專案中。它能夠作為 CI/CD 流程的一部分，自動化設計提取的過程。在一個使用 Next.js 的專案中，開發者可以使用 `designlang clone <url>` 命令快速生成一個包含提取設計的應用。整合過程中，最常見的問題是需要確保 Node.js 環境的版本符合要求，並且需要安裝 Playwright 的依賴。

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
| Forks | 80 |
| Open Issues | 6 |
| Issue 解決率 | 45% (5 closed) |
| 最後推送 | 2026-04-18 |
| 建立日期 | 2026-04-15 |
| 官方網站 | [Link](https://designlang.manavaryasingh.com) |
| Repo 大小 | 8.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Manavarya09/design-extract) |
| Topics | `accessibility` `agent-skill` `ai` `chrome-extension` `claude-code-plugin` `cli` `css` `cursor` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@modelcontextprotocol/sdk` `chalk` `commander` `ora` `playwright`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 97
>     "CSS" : 2
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Manavarya09](https://github.com/Manavarya09) | 50 |
> | [@bot-manavarya](https://github.com/bot-manavarya) | 1 |

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

**社群活躍度**：社群活躍度中等，開發者對於問題的回應速度尚可。
**連結**：[文件](https://designlang.manavaryasingh.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-18 ~ 2026-04-18）
> **活躍天數** 1 天 · **最新 commit** chore(release): v7.2.0 (#37)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#15](https://github.com/Manavarya09/design-extract/issues/15) | feat: ignore list for third-party widget styles `enhancement` | 0 | 0 |
> | [#12](https://github.com/Manavarya09/design-extract/issues/12) | bug: shadow DOM components not extracted `bug` | 0 | 0 |
> | [#11](https://github.com/Manavarya09/design-extract/issues/11) | bug: cross-origin stylesheets miss media queries and keyfram `bug` | 0 | 0 |
> | [#10](https://github.com/Manavarya09/design-extract/issues/10) | feat: generate Storybook from extracted components `enhancement` | 0 | 0 |
> | [#9](https://github.com/Manavarya09/design-extract/issues/9) | feat: animation replay as GIF/MP4 `enhancement` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
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
> | Auth pages | `--cookie`, `--cookie-file`, `--header` | Extract from authenticated/protected pages; cookie files in JSON / Playwright storageState / Netscape formats |
> | Self-signed / dev TLS | `--insecure` | Ignore HTTPS/SSL certificate errors |
> | User-Agent override | `--user-agent ` | Set a custom User-Agent string |
> | Chrome extension | `chrome-extension/` | One-click handoff from any tab, MV3, `activeTab` only |
> | Multi-page | `--depth ` | Crawl N internal pages; emits shared-vs-per-route token reconciliation (`*-tokens-shared.json`, `*-tokens-routes/.json`, `*-routes-report.md`) |
> | Screenshots | `--screenshots` | Capture buttons, cards, inputs, nav, hero, full page |
> | Responsive | `--responsive` | Crawl at 4 viewports, map breakpoint changes |
> | Interactions | `--interactions` | Capture hover/focus/active state transitions |
> | Auto-interact | `--deep-interact` | Scroll, open menus/modals/accordions, hover CTAs before extraction |
> | Everything | `--full` | Enable screenshots + responsive + interactions + deep-interact |
> | Apply | `designlang apply ` | Auto-detect framework and write tokens to your project |
> | Clone | `designlang clone ` | Generate a working Next.js starter with extracted design |
> | Score | `designlang score ` | Rate design quality with visual bar chart breakdown |
> | Watch | `designlang watch ` | Monitor for design changes on interval |
> | Diff | `designlang diff  ` | Compare two sites (MD + HTML) |
> | Multi-brand | `designlang brands ` | N-site comparison matrix |
> | Sync | `designlang sync ` | Update local tokens from live site |
> | History | `designlang history ` | Track design changes over time |
> | MCP server | `designlang mcp` | Expose extraction as MCP resources + tools |
> | Multi-platform | `--platforms ` | Emit iOS / Android / Flutter / WordPress outputs |
> | Agent rules | `--emit-agent-rules` | Cursor, Claude Code, generic agent rule files |
> | Stack fingerprint | automatic | Framework + Tailwind + analytics detection |
> | CSS health | automatic | Specificity, !important, unused CSS, keyframes |
> | A11y remediation | automatic | Nearest palette color passing AA / AAA for every failing pair |
> | Semantic regions | automatic | nav / hero / pricing / testimonials / cta / footer classification |
> | Reusable components | automatic | DOM subtree + style-vector clustering with variants |
> | DTCG tokens | default | W3C Design Tokens v1 with semantic + composite layers (`--tokens-legacy` for pre-v7) |
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
> In v7 a companion `*-mcp.json` file is also written alongside the 8 outputs so that `designlang mcp` can serve regions, components, and health data from disk on later invocations. Opting into `--platforms ` additively emits `ios/`, `android/`, `flutter/`, and/or `wordpress-theme/` directories in the output folder, and `--emit-agent-rules` adds a `.cursor/`, `.claude/`, `CLAUDE.md.fragment`, and `agents.md` set.
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
> Crawls the site at 4 viewports (mobile, t

## 延伸閱讀

相關概念：[[設計系統]] · [[可訪問性]] · [[響應式設計]] · [[自動化測試]] · [[設計標記]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

[GitHub](https://github.com/Manavarya09/design-extract) · [官方網站](https://designlang.manavaryasingh.com)

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
> const concepts = ["設計系統","可訪問性","響應式設計","自動化測試","設計標記"];
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

- [[2026-04-20|2026-04-20]] — 再次上榜，1.1k stars
- [[2026-04-19|2026-04-19]] — 再次上榜，1.0k stars
- [[2026-04-18|2026-04-18]] — 首次收錄，882 stars
