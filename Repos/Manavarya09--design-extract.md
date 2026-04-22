---
repo: Manavarya09/design-extract
url: https://github.com/Manavarya09/design-extract
owner: Manavarya09
owner_type: User
language: JavaScript
license: MIT
description: "Extract any website's complete design system with one command. DTCG tokens, semantic+primitive+composite, MCP server for Claude Code/Cursor/Windsurf, multi-platform emitters (iOS SwiftUI, Android Compose, Flutter, WordPress), Tailwind v4, Figma variables, shadcn/ui, CSS health audit, WCAG remediation, Chrome extension. MIT, Playwright, Node 20+."
homepage: "https://designlang.manavaryasingh.com"
stars: 1278
stars_per_day: 213
forks: 107
open_issues: 6
created: 2026-04-15
pushed_at: 2026-04-22
first_seen: 2026-04-18
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "設計工具"
release_tag: "v10.0.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-18
use_case: "透過一個指令提取任何網站的完整設計系統。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-04-25"
contributor_count: 3
engagement: "low"
issue_close_rate: 45
repo_size_kb: 8265
readme_length: 9976
bus_factor: 1
last_release_days: 0
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-18"
star_history: "2026-04-18:882,2026-04-18:883,2026-04-19:1007,2026-04-19:1007,2026-04-20:1089,2026-04-20:1089,2026-04-21:1155,2026-04-21:1157,2026-04-22:1277,2026-04-22:1278"
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
  - "透過一個指令提取任何網站的完整設計系統。"
---

# design-extract

**1.3k** stars · **213** stars/天 · 建立 6 天前 · JavaScript · MIT

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

`v10.0.0` `easy-install`

`accessibility` `agent-skill` `ai` `chrome-extension` `claude-code-plugin` `cli` `css` `cursor` `design-system` `design-to-code` `design-tokens` `dtcg` `figma` `mcp-server` `npx` `playwright` `shadcn-ui` `skills-sh` `tailwind` `web-scraping`

> [!summary] 一句話摘要
> 透過一個指令提取任何網站的完整設計系統。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (213 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要快速提取和應用網站設計的前端開發者和設計師。
> **一句話重點** 這個專案讓設計與開發之間的溝通變得更加流暢，特別是對於需要快速提取和應用設計資源的團隊。

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
> **結論** 花2小時學習、3小時整合，得到快速提取設計的效果，值得一試。

> [!abstract] 核心創新
> v10版本引入了語義層級的提取，這使得LLM能夠更準確地重建網站。

## 專案簡介

這個工具的核心機制是使用無頭瀏覽器爬取網站，提取所有計算樣式並生成超過17種輸出文件，包括AI優化的Markdown文件、視覺HTML預覽、Tailwind配置等。用戶只需執行 `npx designlang https://example.com` 即可獲得完整的設計語言，這樣的設計讓開發者能夠快速獲取網站的設計元素，並將其應用於自己的專案中。v10版本特別引入了語義層級的提取，這使得LLM能夠更準確地重建網站，而不僅僅是重新樣式化一個通用的框架。技術上，它利用Playwright進行網頁抓取，並生成W3C設計標記、CSS自定義屬性等，這些都是現代前端開發中不可或缺的元素。相較於其他工具，這個專案的獨特之處在於它不僅提取視覺樣式，還能分析網站的結構和語義，這對於設計和開發團隊來說是極大的幫助。

它的多平台支持（iOS、Android、Flutter等）和對設計系統的全面覆蓋，使得這個工具在多種開發環境中都能派上用場。使用者可以在不同的情境下利用這個工具，例如在進行設計審核或比較多個品牌的設計時，能夠快速獲得所需的資料。這個專案的活躍度也相當高，最近的提交和開放問題顯示出社群的參與度。整體來看，這是一個值得關注的工具，特別適合需要快速提取和應用網站設計的開發者。

**技術棧**：`Playwright` · `Node.js 20+` · `TypeScript`

## 重點功能

- 完整設計提取 — 提取顏色、字體、間距、陰影等設計元素，並生成多種格式的輸出文件。
- 語義層級提取 — 提供頁面意圖和區域角色分類，幫助LLM重建網站。
- 多平台支持 — 支援生成iOS SwiftUI、Android Compose、Flutter、WordPress等平台的設計輸出。
- 自動化可及性檢查 — 自動評估WCAG可及性分數，並提供改進建議。
- 即時設計比較 — 支援多品牌比較，生成設計一致性報告。

## 快速開始

1. 直接使用無需安裝
```bash
npx designlang https://example.com
```
2. 全功能提取
```bash
npx designlang https://example.com --full
```
3. 全局安裝
```bash
npm install -g designlang
```

## 程式碼範例

```js
{
  "前置條件": "已安裝Node.js 20+",
  "指令": "npx designlang https://stripe.com --full",
  "預期輸出": "生成完整的設計語言文件，包括Markdown、CSS變數、Tailwind配置等。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立6天內累積1278 stars（213/天），forks 107（8.4%），顯示出強勁的增長潛力。作者Manavarya09在設計系統和自動化工具方面有豐富的經驗，這個專案解決了設計與開發之間的溝通問題，讓開發者能夠快速獲取設計資源。最近的推文和社群討論也促進了這個工具的曝光度。技術上，Playwright的使用使得這個工具能夠高效地進行網頁抓取，這在現有的設計提取工具中並不常見。forks/stars比率為8.4%，顯示出有相當比例的用戶在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要快速提取和應用網站設計的前端開發者和設計師。

> [!example] 使用場景
> - 前端工程師用它來提取網站的設計系統，因為這樣可以快速獲得所需的設計資源，節省手動分析的時間。
> - 設計師用它來生成設計標記和樣式指南，因為這樣能夠確保設計的一致性和可重用性，提升團隊的工作效率。
> - 產品經理用它來比較競爭對手的網站設計，因為這樣可以更直觀地了解市場趨勢，並制定相應的產品策略。

## 架構分析

這個專案採用了無頭瀏覽器架構，利用Playwright進行網站抓取，並提取所有計算樣式。這樣的設計使得工具能夠在不依賴用戶交互的情況下獲取網站的完整設計語言。資料流從網站的DOM開始，經過樣式計算、語義分析，最終生成多種格式的輸出文件。這種設計的代價在於對於某些複雜網站的支持可能有限，特別是那些使用了大量JavaScript的網站。在擴展性方面，這個工具能夠支持多平台的輸出，但隨著功能的增加，維護和更新的成本也會上升。

## 技術深入分析

這個工具的核心技術機制是基於Playwright的無頭瀏覽器抓取，能夠提取網站的所有計算樣式和結構信息。它使用了多種自動化技術來生成設計標記和樣式指南，這些都是現代前端開發中不可或缺的元素。效能方面，這個工具能夠在短時間內處理多個網站，但在面對高度互動的網站時，可能會遇到性能瓶頸。設計選擇上，使用Node.js和TypeScript使得這個工具在開發和維護上都相對簡單，但也帶來了對Node環境的依賴。技術風險方面，對於某些複雜的網站結構，可能會導致提取不完全或錯誤。整合方面，這個工具能夠與現有的開發流程無縫對接，特別是在CI/CD環境中，能夠自動化設計檢查和提取流程。整體來看，這是一個非常有潛力的工具，特別適合需要快速提取和應用網站設計的開發者和設計師。

## 新手體驗

> [!info] 上手難度評估
> README文件提供了清晰的指導，並包含了多個使用範例。安裝過程相對順暢，使用npx無需安裝即可直接使用。文件中有詳細的功能描述和命令選項，對於新手來說非常友好。

## 優缺點分析

> [!success] 優點
> - 快速提取網站設計，節省時間。
> - 多平台支持，靈活應用於不同開發環境。
> - 自動化可及性檢查，提升設計質量。

> [!danger] 缺點
> - 對於某些網站的提取效果可能不佳。
> - 需要Node.js環境，對於某些用戶來說可能有門檻。
> - 在處理複雜網站時，可能會遇到性能瓶頸。

> [!warning] 注意事項
> - 僅支援Node.js 20+。
> - 對於某些網站，可能無法正確提取shadow DOM中的樣式。
> - 在處理跨域樣式表時，可能會遺漏媒體查詢和關鍵幀。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於設計資源的管理和版本控制，而本專案則強調設計提取和語義分析。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供代碼生成和轉換功能，但不具備本專案的全面設計提取能力。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 專注於自然語言處理和智能助手，而本專案專注於設計系統的提取和應用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於設計資源的管理和版本控制，而本專案則強調設計提取和語義分析。 | 如果你的團隊需要管理和版本控制設計資源，boneyard會是更好的選擇。 | medium，因為需要重新適應不同的工作流程。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供代碼生成和轉換功能，但不具備本專案的全面設計提取能力。 | 如果你的需求主要集中在代碼生成而非設計提取，codeburn會更合適。 | low，因為功能上有一定的重疊。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **design-extract** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於設計資源的管理和版本控制，而本專案則強調設計提取和語義分析。 | 提供代碼生成和轉換功能，但不具備本專案的全面設計提取能力。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的工作流程。 | low，因為功能上有一定的重疊。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要管理和版本控制設計資源，boneyard會是 | 如果你的需求主要集中在代碼生成而非設計提取，codeburn |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 某些網站的提取效果不佳，特別是使用shadow DOM的網站。
  - 解法：嘗試使用不同的提取選項或手動調整提取參數。
- [MEDIUM] 在處理跨域樣式表時，可能會遺漏媒體查詢和關鍵幀。
  - 解法：確保所有樣式表都在同一域名下，或手動添加缺失的樣式。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的設計審核流程 | 非常適合 | 能夠快速提取設計資源並進行比較。 |
| 大型企業的設計系統管理 | 普通 | 雖然功能強大，但可能需要更多的自定義和整合工作。 |
| 個人開發者的側項目 | 非常適合 | 快速提取和應用設計資源，提升開發效率。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花2小時學習、3小時整合，得到快速提取設計的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料。依賴鏈的信任程度較高，無已知的供應鏈風險。

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
| Forks | 107 |
| Open Issues | 6 |
| Issue 解決率 | 45% (5 closed) |
| 最後推送 | 2026-04-22 |
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
>     "CSS" : 1
>     "HTML" : 1
>     "TypeScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Manavarya09](https://github.com/Manavarya09) | 59 |
> | [@bot-manavarya](https://github.com/bot-manavarya) | 2 |
> | [@vercel[bot]](https://github.com/vercel[bot]) | 1 |

**最新版本**：v10.0.0 — v10.0.0 — The Intent Release (2026-04-22)

> [!info]- Release Notes
> **v9 captured *how* a site looks. v10 captures *what it is*** — the semantic layer an LLM needs to rebuild a site faithfully instead of restyling a generic scaffold.
> 
> ## New extractors
> 
> - **Page Intent** — landing / pricing / docs / blog / blog-post / product / about / dashboard / auth / legal classifier with confidence + alternates
> - **Section Roles** — hero, feature-grid, logo-wall, stats, testimonial, pricing-table, faq, steps, comparison, gallery, bento, cta, footer + slot copy + reading order
> - **Material Language** — glassmorphism / neumorphism / flat / brutalist / skeuomorphic / material-you / soft-ui classifier
> - **Imagery Style** — photography / 3d-render / isometric / flat-illustration / gradient-mesh / icon-only / screenshot fingerprint
> - **Component Library detection** — shadcn/ui, Radix, Headless UI, MUI, Chakra, Mantine, Ant Design, Bootstrap, HeroUI/NextUI, Tailwind UI, Vuetify, or plain Tailwind, with evidence + alternates
> - **Logo extraction** — pulls the live SVG (or raster bytes) and samples clearspace
> 
> ## New orchestration
> 
> - **Multi-page crawl** (`--full` or `--pages <n>`) — auto-discovers canonical pages from the site's own nav, runs the full pipeline on each, and emits a cross-page consistency report
> - **`--smart` classifier** — optional LLM fallback for low-confidence heuristic results. Uses `OPENAI_API_KEY` or `ANTHROPIC_API_KEY`; no key, no call. Zero-dep fetch.
> 
> ## LLM-native outputs
> 
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，最近有多次提交和開放問題。
**連結**：[文件](https://designlang.manavaryasingh.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-19 ~ 2026-04-22）
> **活躍天數** 4 天 · **最新 commit** feat(v10): the Intent release — semantic layer for LLM agents

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
> ## What's New in v10 — The Intent Release
> 
> Everything else captures *how* a site looks. v10 captures *what it is* — the semantic signal an LLM needs to rebuild a site faithfully instead of restyling a generic scaffold.
> 
> - **Page Intent** — classifier labels the URL as `landing` / `pricing` / `docs` / `blog` / `blog-post` / `product` / `about` / `dashboard` / `auth` / `legal`, with a confidence score and rival alternates. URL + title + meta +

## 延伸閱讀

相關概念：[[設計系統]] · [[設計標記]] · [[可及性評估]] · [[自動化測試]] · [[多模態]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]]

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
> const concepts = ["設計系統","設計標記","可及性評估","自動化測試","多模態"];
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
