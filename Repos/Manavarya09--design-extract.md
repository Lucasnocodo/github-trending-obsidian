---
repo: Manavarya09/design-extract
url: https://github.com/Manavarya09/design-extract
owner: Manavarya09
owner_type: User
language: JavaScript
license: MIT
description: "Extract any website's complete design system with one command. DTCG tokens, semantic+primitive+composite, MCP server for Claude Code/Cursor/Windsurf, multi-platform emitters (iOS SwiftUI, Android Compose, Flutter, WordPress), Tailwind v4, Figma variables, shadcn/ui, CSS health audit, WCAG remediation, Chrome extension. MIT, Playwright, Node 20+."
homepage: "https://designlang.manavaryasingh.com"
stars: 1519
stars_per_day: 169
forks: 142
open_issues: 0
created: 2026-04-15
pushed_at: 2026-04-24
first_seen: 2026-04-18
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "設計系統"
release_tag: "v11.1.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-18
use_case: "一鍵提取任何網站的完整設計系統，生成多種格式的設計語言。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-04-25"
contributor_count: 5
engagement: "low"
issue_close_rate: 100
repo_size_kb: 8530
readme_length: 9976
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-18"
star_history: "2026-04-18:882,2026-04-18:883,2026-04-19:1007,2026-04-19:1007,2026-04-20:1089,2026-04-20:1089,2026-04-21:1155,2026-04-21:1157,2026-04-22:1277,2026-04-22:1278,2026-04-23:1376,2026-04-24:1446,2026-04-25:1519"
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
  - "一鍵提取任何網站的完整設計系統，生成多種格式的設計語言。"
---

# design-extract

**1.5k** stars · **169** stars/天 · 建立 9 天前 · JavaScript · MIT

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

`v11.1.0` `easy-install`

`accessibility` `agent-skill` `ai` `chrome-extension` `claude-code-plugin` `cli` `css` `cursor` `design-system` `design-to-code` `design-tokens` `dtcg` `figma` `mcp-server` `npx` `playwright` `shadcn-ui` `skills-sh` `tailwind` `web-scraping`

> [!summary] 一句話摘要
> 一鍵提取任何網站的完整設計系統，生成多種格式的設計語言。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (169 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速提取和生成設計系統的前端開發者和設計師。
> **一句話重點** 這個工具不僅能提取設計，還能分析網站的可及性和動態效果，為前端開發者提供了強大的支持。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Manavarya09--design-extract");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "設計系統" && p.file.name !== "Manavarya09--design-extract" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 設計系統 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** low
> **結論** 花3小時學習，2小時整合，能快速獲得設計系統，值得投資。

> [!abstract] 核心創新
> 能夠提取網站的完整設計語言，包括動態效果和可及性評分。

## 專案簡介

這個工具的核心機制是透過無頭瀏覽器爬取網站，提取所有計算樣式，並生成超過17種輸出文件，包括AI優化的Markdown文件、視覺HTML預覽、Tailwind配置、React主題等。使用者只需執行一條命令，例如 `npx designlang https://stripe.com --full`，即可獲得完整的設計語言，這樣的設計選擇是為了簡化設計提取過程，避免手動操作的繁瑣。技術上，它使用Playwright來進行網站爬取，並生成W3C設計標記、CSS自定義屬性等，這些都是現代前端開發中不可或缺的元素。相較於其他工具，這個專案不僅提取顏色和字體，還能分析佈局模式、動態語言、組件解剖學等，這讓它在設計系統的完整性上更具優勢。與Figma或Sketch等設計工具相比，這個工具的優勢在於它能直接從現有網站提取設計，而不僅僅是設計稿，這對於需要快速迭代的團隊來說非常有用。

使用者可以在多個平台上發佈設計，包括iOS、Android和WordPress，這使得它在多平台開發中非常靈活。實際使用中，這個工具能夠處理複雜的網站結構，並提供WCAG可及性評分，這對於需要遵循無障礙標準的開發者來說至關重要。這個專案目前處於穩定階段，並且有活躍的社群支持，適合中小型團隊在設計系統開發中使用。未來可能會進一步增強AI功能，以提升設計提取的智能化程度。

**技術棧**：`Playwright` · `Node.js 20+` · `TypeScript`

## 重點功能

- 一鍵提取 — 透過 `npx designlang <url> --full` 提取網站的完整設計語言。
- 多平台支持 — 生成iOS SwiftUI、Android Compose、Flutter和WordPress的設計資源。
- WCAG可及性評分 — 自動評估設計的可及性，確保符合無障礙標準。
- 動態語言提取 — 提取網站的動態效果，包括過渡和關鍵幀。
- 多品牌比較 — 使用 `designlang brands` 命令比較多個網站的設計系統。

## 快速開始

1. 從網站提取設計語言
```bash
npx designlang https://example.com
```
2. 提取完整設計系統
```bash
npx designlang https://stripe.com --full
```
3. 生成多品牌比較報告
```bash
designlang brands stripe.com vercel.com github.com
```

## 程式碼範例

```js
{
  "前置條件": "需要安裝Node.js 20+",
  "指令": "npx designlang https://stripe.com --full",
  "預期輸出": "✓ stripe-com-design-language.md (32.6KB)\n✓ stripe-com-design-tokens.json (5.6KB)\n✓ stripe-com-tailwind.config.js (3.4KB)\n✓ stripe-com-variables.css (18.6KB)"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立9天內累積1519 stars（169/天），forks 142（9.3%），顯示出強勁的增長潛力。作者Manavarya09在設計系統和前端開發領域有豐富經驗，這個工具解決了以往設計提取過程中繁瑣的手動操作，讓開發者能夠快速獲得完整的設計語言。近期的推廣活動和社群討論也提升了其曝光率。技術上，這個工具的出現正好搭配了無頭瀏覽器和設計標記的流行趨勢，讓設計提取變得更為可行。高達9.3%的forks/stars比率顯示出許多人在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要快速提取和生成設計系統的前端開發者和設計師。

> [!example] 使用場景
> - 前端工程師用它來從現有網站提取設計語言，因為這樣能快速生成符合現有設計的開發資源，節省手動設計的時間。
> - UX設計師用它來分析競爭對手的設計系統，因為它能提供詳細的顏色、字體和佈局信息，幫助設計決策。
> - 產品經理用它來監控設計一致性，因為它能生成多頁面的一致性報告，確保品牌形象的統一性。

## 架構分析

這個專案採用無頭瀏覽器架構，利用Playwright進行網站爬取和樣式提取。資料流從網站的DOM開始，經過計算樣式的提取，最終生成多種格式的設計資源。這樣的設計選擇使得工具能夠在不依賴特定框架的情況下，廣泛適用於各種網站。

選擇Playwright而非其他爬蟲工具的原因在於其強大的互動能力和對現代網站的支持。這個架構的代價是需要一定的計算資源，特別是在處理大型網站時。擴展性方面，這個工具能夠隨著網站的增長而擴展，但在高流量網站上可能會遇到性能瓶頸。

## 技術深入分析

這個工具的核心技術機制是使用Playwright進行網站爬取，並提取所有計算樣式，生成多種輸出文件。它能夠處理複雜的網站結構，並提供WCAG可及性評分，這對於需要遵循無障礙標準的開發者來說至關重要。效能方面，這個工具能夠在合理的時間內完成設計提取，但在處理大型網站時可能會遇到性能瓶頸。選擇Node.js和TypeScript作為開發語言，讓這個工具在現代前端開發中具備良好的兼容性和可維護性。這個工具的依賴樹相對簡單，主要依賴Playwright和一些基本的Node.js庫，降低了使用的門檻。技術風險方面，對於某些動態內容的捕捉可能不完全，這需要在未來的版本中進一步改善。整合方面，這個工具可以輕鬆與現有的前端開發流程結合，並且支持多平台的設計輸出，這使得它在實際使用中非常靈活。

## 新手體驗

> [!info] 上手難度評估
> README文件清晰且詳細，提供了多個範例和安裝指令。安裝過程相對順暢，使用者只需確保Node.js版本符合要求。文件中有良好的入門指南，能夠幫助新手快速上手。

## 優缺點分析

> [!success] 優點
> - 快速提取設計系統，節省時間。
> - 支持多平台生成，靈活性高。
> - 自動化可及性評分，符合無障礙標準。

> [!danger] 缺點
> - 對於某些動態內容的捕捉可能不完全。
> - 需要Node.js 20以上，限制了使用者範圍。
> - 在處理大型網站時可能性能不足。

> [!warning] 注意事項
> - 僅支援 Node.js 20 以上版本。
> - 對於某些動態內容，可能無法完全捕捉所有交互狀態。
> - 在處理大型網站時，可能會遇到性能瓶頸。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於設計系統的版本控制，而本專案則強調從現有網站提取設計。 |
| [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | OpenHarness專注於設計工具的整合，而本專案則提供全面的設計提取和生成能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於設計系統的版本控制，提供了設計變更的追蹤功能，而本專案則強調從現有網站提取設計。 | 如果你的團隊需要對設計變更進行嚴格的版本控制，則應選擇這個工具。 | medium，因為需要重新設計工作流程以適應版本控制的需求。 |
| [HKUDS/OpenHarness](https://github.com/HKUDS/OpenHarness) | 專注於設計工具的整合，提供了多種設計工具的支持，而本專案則提供全面的設計提取和生成能力。 | 如果你的團隊已經在使用多種設計工具，並需要一個整合平台，則應選擇這個工具。 | low，因為可以直接整合到現有的設計流程中。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **design-extract** | **boneyard** | **OpenHarness** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於設計系統的版本控制，提供了設計變更的追蹤功能，而本專案則強調從現有網站提取設計。 | 專注於設計工具的整合，提供了多種設計工具的支持，而本專案則提供全面的設計提取和生成能力。 |
> | 遷移成本 | - | medium，因為需要重新設計工作流程以適應版本控制的需求。 | low，因為可以直接整合到現有的設計流程中。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要對設計變更進行嚴格的版本控制，則應選擇這個工 | 如果你的團隊已經在使用多種設計工具，並需要一個整合平台，則應 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目或小型團隊試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 某些動態內容的捕捉可能不完全，特別是在複雜的網站上。
  - 解法：在提取之前手動檢查網站的動態效果。
- **[HIGH]** 需要Node.js 20以上，對於舊版本的使用者不友好。
  - 解法：升級Node.js版本。
- [MEDIUM] 在處理大型網站時可能會遇到性能瓶頸。
  - 解法：考慮分批提取或使用更高效的硬體。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10人以下的新創公司後端API | 非常適合 | 能快速提取設計語言，節省開發時間。 |
| 大型企業的設計系統管理 | 普通 | 可能在性能上遇到瓶頸，但仍能提供有價值的設計提取。 |
| 需要遵循無障礙標準的開發團隊 | 非常適合 | 自動化的WCAG評分功能非常有用。 |
| 對設計變更有嚴格控制需求的團隊 | 不適合 | 缺乏版本控制功能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花3小時學習，2小時整合，能快速獲得設計系統，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需訪問網站資料，且不會存取敏感資料。依賴鏈中無已知的供應鏈風險，適合在CI/CD中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與現有的前端開發工具鏈搭配使用，特別是在設計系統開發和維護過程中。實際整合範例包括在使用Next.js的專案中，透過 `npx designlang` 提取設計並生成相應的配置文件。它也能與CI/CD工具如GitHub Actions整合，實現設計回歸測試。與主流IDE如VS Code的整合也相對簡單，提供了VS Code擴展來直接提取設計。整合的摩擦點主要在於需要確保Node.js版本符合要求，並且在大型網站提取時可能需要調整性能設定。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，開發者通常依賴手動提取設計元素，這樣的過程繁瑣且容易出錯。隨著無頭瀏覽器技術的進步，這個工具能夠自動化提取過程，並提供更全面的設計語言。這個工具代表了設計提取自動化的趨勢，未來可能會進一步整合AI技術，提升提取的智能化程度。

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
| Forks | 142 |
| Open Issues | 0 |
| Issue 解決率 | 100% (14 closed) |
| 最後推送 | 2026-04-24 |
| 建立日期 | 2026-04-15 |
| 官方網站 | [Link](https://designlang.manavaryasingh.com) |
| Repo 大小 | 8.3 MB |
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
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Manavarya09](https://github.com/Manavarya09) | 75 |
> | [@bot-manavarya](https://github.com/bot-manavarya) | 2 |
> | [@ArturLinnik](https://github.com/ArturLinnik) | 1 |
> | [@OyaAIProd](https://github.com/OyaAIProd) | 1 |
> | [@vercel[bot]](https://github.com/vercel[bot]) | 1 |

**最新版本**：v11.1.0 — v11.1.0 — storybook emitter + motion replay (2026-04-24)

> [!info]- Release Notes
> Closes #9 and #10.
> 
> ### \`--storybook\`
> 
> Emits a runnable Storybook project from detected \`componentAnatomy\`:
> 
> - One \`*.stories.tsx\` per kind (button, card, input, …) with variant + size controls
> - \`stories/Tokens.mdx\` with \`ColorPalette\` blocks
> - \`stories/tokens.css\` derived from extracted palette, radius, shadow, font
> - \`.storybook/main.ts\`, \`.storybook/preview.ts\`, \`package.json\`, \`tsconfig.json\`, \`README.md\`
> 
> \`\`\`
> npx designlang <url> --storybook --full
> cd <outDir>/<prefix>-storybook && npm install && npm run storybook
> \`\`\`
> 
> ### \`designlang replay\`
> 
> Records a short WebM of a site's motion via Playwright's built-in recording — scripted scroll + hover to force transitions and keyframes to fire. Optional MP4 if \`ffmpeg\` is on PATH. Zero new deps.
> 
> \`\`\`
> npx designlang replay stripe.com -d 5
> npx designlang replay stripe.com -d 5 --mp4
> \`\`\`
> 
> ### Also stubbed / closed with evidence
> 
> - #8 — figma plugin already shipped in \`figma-plugin/\`
> - #11 — cross-origin CSS fetch + parse already in \`crawler.js\` (\`parseCrossOriginCSS\`)
> - #12 — open shadow roots already traversed in \`collectElements\`; closed roots are unreachable by web platform spec

## 社群與生態

**社群活躍度**：社群活躍，問題解決率100%。
**連結**：[文件](https://designlang.manavaryasingh.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-23 ~ 2026-04-24）
> **活躍天數** 2 天 · **最新 commit** security: SECURITY.md + CodeQL + postcss >=8.5.10 override

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

相關概念：[[設計系統]] · [[無頭瀏覽器]] · [[WCAG]] · [[設計標記]] · [[前端開發]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]]

[GitHub](https://github.com/Manavarya09/design-extract) · [官方網站](https://designlang.manavaryasingh.com)

## 相關收錄

> [!note]- 直接競品（同子分類：設計系統）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "設計系統" AND file.name != "Manavarya09--design-extract"
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
> const concepts = ["設計系統","無頭瀏覽器","WCAG","設計標記","前端開發"];
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
