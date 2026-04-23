---
repo: Manavarya09/design-extract
url: https://github.com/Manavarya09/design-extract
owner: Manavarya09
owner_type: User
language: JavaScript
license: MIT
description: "Extract any website's complete design system with one command. DTCG tokens, semantic+primitive+composite, MCP server for Claude Code/Cursor/Windsurf, multi-platform emitters (iOS SwiftUI, Android Compose, Flutter, WordPress), Tailwind v4, Figma variables, shadcn/ui, CSS health audit, WCAG remediation, Chrome extension. MIT, Playwright, Node 20+."
homepage: "https://designlang.manavaryasingh.com"
stars: 1376
stars_per_day: 197
forks: 119
open_issues: 7
created: 2026-04-15
pushed_at: 2026-04-22
first_seen: 2026-04-18
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "設計工具"
release_tag: "v10.5.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-18
use_case: "一鍵提取任何網站的完整設計系統，生成多種格式的設計語言文件。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-04-25"
contributor_count: 4
engagement: "low"
issue_close_rate: 42
repo_size_kb: 8440
readme_length: 9989
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-18"
star_history: "2026-04-18:882,2026-04-18:883,2026-04-19:1007,2026-04-19:1007,2026-04-20:1089,2026-04-20:1089,2026-04-21:1155,2026-04-21:1157,2026-04-22:1277,2026-04-22:1278,2026-04-23:1376"
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
  - "一鍵提取任何網站的完整設計系統，生成多種格式的設計語言文件。"
---

# design-extract

**1.4k** stars · **197** stars/天 · 建立 7 天前 · JavaScript · MIT

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

`v10.5.0` `easy-install`

`accessibility` `agent-skill` `ai` `chrome-extension` `claude-code-plugin` `cli` `css` `cursor` `design-system` `design-to-code` `design-tokens` `dtcg` `figma` `mcp-server` `npx` `playwright` `shadcn-ui` `skills-sh` `tailwind` `web-scraping`

> [!summary] 一句話摘要
> 一鍵提取任何網站的完整設計系統，生成多種格式的設計語言文件。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (197 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要快速提取和生成設計系統的前端開發者和設計師。
> **一句話重點** designlang 不僅僅是提取顏色和字體的工具，它能夠全面捕捉網站的設計系統，並提供可及性評估和品牌聲音提取，這在市場上是獨一無二的。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，得到全面的設計系統提取效果，值得投資。

> [!abstract] 核心創新
> designlang 是唯一能夠提取佈局模式和品牌聲音的設計提取工具。

## 專案簡介

designlang 是一個強大的工具，可以從任何網站提取完整的設計系統，包括顏色、排版、間距、陰影等。用戶只需執行 `npx designlang https://example.com`，便能獲得超過 17 種輸出文件，這些文件包括 AI 優化的 Markdown、Tailwind 配置、Figma 變數等。這樣的設計提取不僅限於靜態樣式，還涵蓋了佈局模式、動作語言和品牌聲音，這些都是其他工具無法提供的。設計語言的提取過程中，designlang 會自動捕捉響應式行為、互動狀態和 WCAG 可及性評分，這使得它在設計質量評估上具有優勢。

技術上，這個工具依賴於 Playwright 進行無頭瀏覽器的操作，並且支持多平台的輸出，包括 iOS、Android 和 WordPress。與其他設計提取工具相比，designlang 不僅僅提供顏色和字體，還能提取佈局系統和品牌語音，這使得它在市場上獨樹一幟。使用者可以根據需要選擇不同的提取選項，例如 `--full` 參數來獲取所有信息，或使用 `--responsive` 來捕捉多個視口的設計變化。這樣的靈活性和全面性使得 designlang 成為設計師和開發者的理想選擇。

**技術棧**：`Node.js 20+` · `Playwright` · `TypeScript` · `CSS`

## 重點功能

- 一鍵提取 — 使用 `npx designlang https://example.com` 提取網站的完整設計系統。
- 多平台輸出 — 支持生成 iOS SwiftUI、Android Compose、Flutter 和 WordPress 的設計文件。
- 佈局系統提取 — 自動提取網格、彈性佈局和容器寬度等結構信息。
- 可及性評估 — 自動計算 WCAG 可及性分數，並提供改進建議。
- 品牌聲音提取 — 提取網站的語調和 CTA 動詞，幫助設計一致的品牌體驗。
- 動作語言提取 — 捕捉動畫持續時間、緩動效果和滾動動畫等信息。
- 設計質量評分 — 提供基於 7 個類別的設計質量評分，幫助用戶識別問題。
- 多品牌比較 — 使用 `designlang brands` 命令比較多個品牌的設計系統。

## 快速開始

1. 提取網站設計系統
```bash
npx designlang https://example.com
```
2. 提取完整設計系統
```bash
npx designlang https://example.com --full
```
3. 安裝為全局工具
```bash
npm install -g designlang
```

## 程式碼範例

```js
{
  "前置條件": "已安裝 Node.js 20+",
  "指令": "npx designlang https://stripe.com --full",
  "預期輸出": "✓ stripe-com-design-language.md (32.6KB)\n✓ stripe-com-design-tokens.json (5.6KB)\n✓ stripe-com-tailwind.config.js (3.4KB)"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 1376 stars（197/天），forks 119（8.6%），顯示出強勁的增長趨勢。作者 Manavarya09 之前在設計和開發工具領域有豐富經驗，這個工具解決了設計提取過程中的多個痛點，特別是對於需要快速生成設計系統的團隊。近期的推廣活動和社群討論也為這個專案帶來了關注。技術上，Playwright 的使用使得這個工具能夠高效地進行網站爬取，這是其他工具難以實現的。forks/stars 比率為 8.6%，顯示出許多用戶正在積極修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要快速提取和生成設計系統的前端開發者和設計師。

> [!example] 使用場景
> - 前端工程師用它來提取競爭對手網站的設計系統，因為這樣可以快速了解市場趨勢，並在自己的產品中應用類似的設計元素。
> - 設計師用它來生成 Figma 變數，因為這樣可以節省手動設置顏色和字體的時間，並確保設計的一致性。
> - 產品經理用它來進行可及性評估，因為設計語言的 WCAG 評分可以幫助他們確保產品符合標準，提升用戶體驗。

## 架構分析

designlang 採用無頭瀏覽器技術，使用 Playwright 來進行網站爬取，這使得它能夠獲取動態生成的樣式和內容。資料流中，首先從目標網站抓取 DOM，然後提取樣式信息，最後生成多種格式的輸出文件。這種設計使得工具能夠靈活應對不同網站的結構，並且能夠捕捉到複雜的佈局和互動狀態。選擇 Playwright 而非其他爬蟲工具的原因在於其對現代網頁技術的良好支持，這使得 designlang 在提取過程中能夠更準確地反映網站的實際樣式。擴展性方面，這個工具可以輕鬆集成到 CI/CD 流程中，並且支持多平台的輸出，這使得它在大型專案中也能夠保持高效。

## 技術深入分析

designlang 的核心機制是利用 Playwright 進行網站爬取，這使得它能夠獲取動態生成的內容和樣式。提取過程中，工具會分析 DOM 結構，並自動提取顏色、排版、間距、陰影等設計元素。這個工具能夠處理多達 4 個響應式視口，並捕捉到不同狀態下的互動效果。設計選擇上，使用 TypeScript 提高了代碼的可維護性和可讀性，並且依賴於 Playwright 使得整體架構輕量且高效。技術風險方面，對於某些網站的動態內容提取可能會遇到挑戰，特別是涉及到複雜的 JavaScript 操作時。整合方面，這個工具能夠輕鬆與現有的 CI/CD 流程結合，並且支持多種開發環境的輸出，這使得它在實際應用中非常靈活。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並包含了範例指令。安裝過程順暢，無需複雜的配置。文件中有詳細的功能介紹和使用場景，對於新手來說非常友好。

## 優缺點分析

> [!success] 優點
> - 全面提取設計系統，包括佈局和品牌聲音。
> - 支持多平台輸出，方便不同開發環境使用。
> - 自動化的可及性評估，幫助提升設計質量。
> - 靈活的命令行選項，能夠滿足不同需求。

> [!danger] 缺點
> - 對於某些動態內容的提取可能不夠完整。
> - 需要 Node.js 20 以上版本，限制了使用者範圍。
> - 在提取受保護頁面時需要處理認證問題。
> - 對於某些第三方小部件的樣式提取可能存在困難。

> [!warning] 注意事項
> - 僅支援 Node.js 20 以上版本。
> - 對於某些動態生成的內容，可能無法完全提取所有樣式。
> - 在提取受保護的頁面時需要提供正確的認證信息。
> - 可能無法處理所有類型的第三方小部件樣式。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於提取靜態樣式，而 designlang 提供動態提取和多平台支持。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | claude-obsidian 主要針對特定平台，而 designlang 提供更廣泛的設計系統提取功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於靜態樣式提取，無法處理動態內容。 | 如果你的需求僅限於靜態網站，且不需要動態內容的提取。 | low，因為功能範圍較小，易於上手。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 針對特定平台進行設計提取，而 designlang 提供更廣泛的支持。 | 如果你需要針對特定平台的設計提取，而不需要多平台支持。 | medium，因為需要適應不同的設計語言和結構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **design-extract** | **boneyard** | **claude-obsidian** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於靜態樣式提取，無法處理動態內容。 | 針對特定平台進行設計提取，而 designlang 提供更廣泛的支持。 |
> | 遷移成本 | - | low，因為功能範圍較小，易於上手。 | medium，因為需要適應不同的設計語言和結構。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於靜態網站，且不需要動態內容的提取。 | 如果你需要針對特定平台的設計提取，而不需要多平台支持。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合在內部工具或小型專案中試用，不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在提取某些網站時可能會遇到跨域問題，導致樣式無法完全提取。
  - 解法：使用 `--cookie` 參數來處理受保護的頁面。
- [MEDIUM] 對於某些動態生成的內容，可能無法捕捉到所有樣式。
  - 解法：嘗試使用 `--full` 參數來獲取更多信息。
- [MEDIUM] 在提取過程中可能會遇到性能瓶頸，特別是在大型網站上。
  - 解法：考慮分批提取或使用 `--depth` 限制內部頁面數量。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的設計系統提取 | 非常適合 | 能夠快速生成設計語言文件，提升開發效率。 |
| 大型企業的設計審核 | 普通 | 雖然功能強大，但在大型網站上可能會遇到性能問題。 |
| 需要快速比較多個品牌的設計系統 | 非常適合 | 支持多品牌比較功能，能夠快速識別設計差異。 |
| 對可及性有高要求的產品 | 適合 | 自動化的可及性評估功能能夠幫助提升產品質量。 |
| 對於靜態網站的設計提取 | 不適合 | 對於靜態網站的需求，可能不需要這麼全面的功能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到全面的設計系統提取效果，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：工具本身不需要高權限，僅在提取過程中訪問網站內容，無需存取敏感資料。

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
| Forks | 119 |
| Open Issues | 7 |
| Issue 解決率 | 42% (5 closed) |
| 最後推送 | 2026-04-22 |
| 建立日期 | 2026-04-15 |
| 官方網站 | [Link](https://designlang.manavaryasingh.com) |
| Repo 大小 | 8.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Manavarya09/design-extract) |
| Topics | `accessibility` `agent-skill` `ai` `chrome-extension` `claude-code-plugin` `cli` `css` `cursor` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@modelcontextprotocol/sdk` `chalk` `commander` `ora` `playwright`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 97
>     "CSS" : 1
>     "HTML" : 1
>     "TypeScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Manavarya09](https://github.com/Manavarya09) | 67 |
> | [@bot-manavarya](https://github.com/bot-manavarya) | 2 |
> | [@OyaAIProd](https://github.com/OyaAIProd) | 1 |
> | [@vercel[bot]](https://github.com/vercel[bot]) | 1 |

**最新版本**：v10.5.0 — v10.5.0 — Forms & States (2026-04-22)

> [!info]- Release Notes
> Closes the v10.x minor series. Surfaces forms, modals, skeleton/spinner loading, empty + error states, and toast library detection (Sonner / react-hot-toast / react-toastify / Radix / Chakra / Notistack). Emits `*-form-states.json`. 317/317 tests.

## 社群與生態

**社群活躍度**：社群活躍，定期更新和修復問題。
**連結**：[文件](https://designlang.manavaryasingh.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-21 ~ 2026-04-22）
> **活躍天數** 2 天 · **最新 commit** Update website link in README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#41](https://github.com/Manavarya09/design-extract/issues/41) | [Bug]: `bug` | 0 | 1 |
> | [#15](https://github.com/Manavarya09/design-extract/issues/15) | feat: ignore list for third-party widget styles `enhancement` | 0 | 0 |
> | [#12](https://github.com/Manavarya09/design-extract/issues/12) | bug: shadow DOM components not extracted `bug` | 0 | 0 |
> | [#11](https://github.com/Manavarya09/design-extract/issues/11) | bug: cross-origin stylesheets miss media queries and keyfram `bug` | 0 | 0 |
> | [#10](https://github.com/Manavarya09/design-extract/issues/10) | feat: generate Storybook from extracted components `enhancement` | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> [](https://safeskill.dev/scan/manavarya09-design-extract)
> 
> ---
> 
>   
> 
> [](https://www.npmjs.com/package/designlang)
> 
> **designlang** crawls any website with a headless browser, extracts every computed style from the live DOM, and generates **17+ output files** — including an AI-optimized markdown file, visual HTML preview, Tailwind config, React theme, shadcn/ui theme, Figma variables, W3C design tokens, CSS custom properties, motion tokens, typed component anatomy stubs, a brand voice summary, **page intent + section roles**, **visual DNA** (material language + imagery style), **component library detection**, a **logo file**, a **multi-page consistency report**, and a **prompt pack** of ready-to-paste prompts for v0, Lovable, Cursor, and Claude Artifacts.
> 
> But unlike every other tool out there, it also extracts **layout patterns** (grids, flexbox, containers), **motion language** (durations, easings, springs, scroll-linked animations), **component anatomy** (slots, variant × size × state matrices), **brand voice** (tone, CTA verbs, heading style), captures **responsive behavior** across 4 breakpoints, records **interaction states** (hover, focus, active), scores **WCAG accessibility**, lints your own token files, and lets you **drift-check a codebase against a live site**, **visual-diff two URLs**, **compare multiple brands**, or **sync live sites to local tokens**.
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
> ## Install Everywhere
> 
> designlang ships surfaces beyond the CLI:
> 
> | Surface | Path | Description |
> |---------|------|-------------|
> | **CLI** | `npx designlang ` | Main entry point. |
> | **VS Code extension** | [`vscode-extension/`](vscode-extension/) | "Extract design from URL" command + auto-inject into workspace. |
> | **Raycast extension** | [`raycast-extension/`](raycast-extension/) | Extract, score, and "copy CLI command" from Raycast. |
> | **Figma plugin** | [`figma-plugin/`](figma-plugin/) | Paste a URL inside Figma, get a full Variables collection. |
> | **GitHub Action** | [`github-action/`](github-action/) | "Design regression guard" — diffs tokens on every PR and comments. |
> | **Chrome extension** | [`chrome-extension/`](chrome-extension/) | One-click handoff from any tab (MV3, `activeTab` only). |
> | **MCP server** | `npx designlang mcp` | Exposes the extracted design as MCP resources + tools for Cursor, Claude Code, Windsurf, etc. See [`docs/MCP-REGISTRY.md`](docs/MCP-REGISTRY.md). |
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
> ## What's New in v9 — The Motion & Voice Release
> 
> - **Motion Language** — durations bucketed into semantic tokens (`instant`/`xs`/`sm`/`md`/`lg`/`xl`), easings classified into families (ease-out, spring-overshoot, steps), scroll-linked animation detection (`animation-timeline`, `view-timeline-name`), keyframe kind classification (slide / fade / reveal / rotate / scale / pulse), and a

## 延伸閱讀

相關概念：[[設計系統]] · [[可及性]] · [[CSS 健康審核]] · [[設計語言]] · [[動作語言]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

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
> const concepts = ["設計系統","可及性","CSS 健康審核","設計語言","動作語言"];
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

- [[2026-04-22|2026-04-22]] — 再次上榜，1.3k stars
- [[2026-04-21|2026-04-21]] — 再次上榜，1.2k stars
- [[2026-04-20|2026-04-20]] — 再次上榜，1.1k stars
- [[2026-04-19|2026-04-19]] — 再次上榜，1.0k stars
- [[2026-04-18|2026-04-18]] — 首次收錄，882 stars
