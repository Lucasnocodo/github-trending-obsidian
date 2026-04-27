---
repo: Manavarya09/design-extract
url: https://github.com/Manavarya09/design-extract
owner: Manavarya09
owner_type: User
language: JavaScript
license: MIT
description: "Extract any website's complete design system with one command. DTCG tokens, semantic+primitive+composite, MCP server for Claude Code/Cursor/Windsurf, multi-platform emitters (iOS SwiftUI, Android Compose, Flutter, WordPress), Tailwind v4, Figma variables, shadcn/ui, CSS health audit, WCAG remediation, Chrome extension. MIT, Playwright, Node 20+."
homepage: "https://www.designlang.app"
stars: 1634
stars_per_day: 149
forks: 152
open_issues: 0
created: 2026-04-15
pushed_at: 2026-04-26
first_seen: 2026-04-18
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "設計工具"
release_tag: "v12.0.0"
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
contributor_count: 5
engagement: "low"
issue_close_rate: 100
repo_size_kb: 8583
readme_length: 9976
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-18"
star_history: "2026-04-18:882,2026-04-18:883,2026-04-19:1007,2026-04-19:1007,2026-04-20:1089,2026-04-20:1089,2026-04-21:1155,2026-04-21:1157,2026-04-22:1277,2026-04-22:1278,2026-04-23:1376,2026-04-24:1446,2026-04-25:1519,2026-04-26:1585,2026-04-27:1634"
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

**1.6k** stars · **149** stars/天 · 建立 11 天前 · JavaScript · MIT

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

`v12.0.0` `easy-install`

`accessibility` `agent-skill` `ai` `chrome-extension` `claude-code-plugin` `cli` `css` `cursor` `design-system` `design-to-code` `design-tokens` `dtcg` `figma` `mcp-server` `npx` `playwright` `shadcn-ui` `skills-sh` `tailwind` `web-scraping`

> [!summary] 一句話摘要
> 一鍵提取任何網站的完整設計系統，生成多種格式的設計語言文件。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (149 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速提取和管理網站設計系統的前端開發者和設計師。
> **一句話重點** 這個工具不僅能提取設計資源，還能進行無障礙評分和多品牌比較，顯著提升設計工作效率。

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
> **成熟度** Stable (可用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習、3 小時整合，得到快速提取設計系統的效果，值得使用。

> [!abstract] 核心創新
> 自動提取網站的完整設計語言，並生成多種格式的設計資源，支持多品牌比較和無障礙評分。

## 專案簡介

這個工具的核心機制是透過無頭瀏覽器爬取網站，提取當前 DOM 的所有計算樣式，並生成超過 17 種輸出文件，包括 AI 優化的 Markdown 文件、視覺 HTML 預覽、Tailwind 配置、Figma 變數等。使用者只需執行 `npx designlang https://stripe.com` 即可獲得所有設計資源，或使用 `--full` 標誌來獲得更全面的資料。這樣的設計使得設計系統的提取變得快速且高效，避免了手動收集資料的繁瑣。技術上，它使用 Playwright 作為爬蟲框架，並且依賴於 Node.js 20+ 環境，這樣的選擇使得它能夠在多平台上運行，並且具備良好的擴展性。與其他類似工具相比，如 0xGF/boneyard 和 AlpinDale/parsync，這個工具不僅僅提取顏色和字體，還能捕捉佈局模式、互動狀態和無障礙評分，這使得它在設計語言的完整性上更具優勢。

實際使用中，這個工具能夠處理多達 4 個斷點的響應式設計，並且支持多品牌比較，這對於設計團隊在進行設計審查時非常有幫助。社群活躍度高，開放問題解決率達到 100%。這個專案目前處於穩定階段，適合中小型團隊用於快速提取和管理設計系統。未來可能會進一步增強與 AI 的整合能力，提升提取的智能化水平。

**技術棧**：`Node.js 20+` · `Playwright` · `TypeScript`

## 重點功能

- 一鍵提取 — 使用 `npx designlang https://example.com` 命令提取網站的完整設計系統。
- 多平台支持 — 支援生成 iOS SwiftUI、Android Compose、Flutter 和 WordPress 的設計資源。
- 無障礙評分 — 自動計算 WCAG 可及性分數，幫助確保設計符合標準。
- 多品牌比較 — 使用 `designlang brands` 命令生成多品牌設計比較矩陣。
- 互動狀態捕捉 — 自動提取網站的互動狀態，如 hover 和 focus，提供更完整的設計資料。

## 快速開始

1. 提取網站設計系統
```bash
npx designlang https://stripe.com
```
2. 獲取完整資料
```bash
npx designlang https://stripe.com --full
```
3. 安裝全局使用
```bash
npm install -g designlang
```

## 程式碼範例

```js
{
  "前置條件": "已安裝 Node.js 20+",
  "指令": "npx designlang https://stripe.com",
  "預期輸出": "生成多種設計資源，包括 Markdown 文件和 CSS 變數。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天內累積 1634 stars（149/天），forks 152（9.3%），顯示出強勁的增長潛力。作者 Manavarya09 之前有多個開源專案，這次專案解決了設計系統提取的痛點，讓使用者能夠快速獲得完整的設計語言，之前的工具往往只能提供部分資料。近期在社群中引發熱議，可能與設計自動化的需求上升有關。高 forks/stars 比率顯示許多人在實際修改和使用這個工具，反映出其實用性和需求。

## 適合誰使用

**目標受眾**：需要快速提取和管理網站設計系統的前端開發者和設計師。

> [!example] 使用場景
> - 前端工程師用它來提取 Stripe 網站的設計系統，因為手動收集樣式和顏色的過程繁瑣且容易出錯。
> - 設計師用它來生成 Figma 變數，因為這樣可以快速將網站設計轉換為可用的設計資源，節省時間。
> - 產品經理用它來進行多品牌比較，因為這能幫助他們在設計決策上更具依據，提升產品一致性。

## 架構分析

這個專案採用模組化設計，主要由 Node.js 和 Playwright 驅動，實現無頭瀏覽器的網站爬取。資料流從網站 DOM 提取樣式，經過多層處理後生成各種設計資源。選擇 Playwright 而非其他爬蟲框架的原因在於其強大的多平台支持和穩定性。這樣的設計使得專案能夠快速擴展，並且能夠適應不同網站的結構。擴展性瓶頸主要在於對於複雜網站的支持，未來可能需要進一步優化爬取邏輯以提升準確性。

## 技術深入分析

這個專案的核心技術在於使用 Playwright 進行網站爬取，能夠有效提取當前 DOM 的所有計算樣式。透過自動化的方式，這個工具能夠捕捉到多達 4 個斷點的響應式設計，並且能夠記錄互動狀態，這在其他工具中並不常見。設計選擇上，Node.js 提供了良好的性能和擴展性，能夠支持多種輸出格式。依賴樹相對簡單，主要依賴 Playwright 和一些輔助庫，這使得整體安裝和使用都相對容易。技術風險方面，對於複雜網站的支持可能會出現問題，特別是在提取佈局模式和互動狀態時。整合方面，這個工具能夠與主流的開發環境和 CI/CD 流程友好整合，降低了使用門檻。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了多個範例和安裝步驟。安裝過程順暢，無明顯坑。文件目前僅提供英文版本，對於非英語使用者可能有一定挑戰。

## 優缺點分析

> [!success] 優點
> - 快速提取設計系統，節省時間和人力成本。
> - 支持多平台輸出，方便整合到不同開發環境。
> - 自動化無障礙評分，提升設計的可及性。

> [!danger] 缺點
> - 對於某些網站的複雜結構支持不足。
> - 需要 Node.js 環境，對於某些開發者來說可能有門檻。
> - 無法處理某些受保護的頁面內容。

> [!warning] 注意事項
> - 僅支援 Node.js 20+ 環境
> - 對於某些複雜的網站結構，提取結果可能不完全
> - 需要額外配置來提取受保護的頁面內容

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於設計資源的提取，但不支持多品牌比較和無障礙評分功能。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具主要用於資料同步，與設計系統提取無關，功能範圍較窄。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於設計資源的提取，但不支持多品牌比較和無障礙評分功能。 | 如果只需要簡單的設計資源提取，而不需要無障礙評分或多品牌比較。 | low，因為功能範圍較窄，易於上手。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 主要用於資料同步，與設計系統提取無關，功能範圍較窄。 | 如果需要資料同步功能，而不是設計系統提取。 | medium，因為需要重新調整工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **design-extract** | **boneyard** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於設計資源的提取，但不支持多品牌比較和無障礙評分功能。 | 主要用於資料同步，與設計系統提取無關，功能範圍較窄。 |
> | 遷移成本 | - | low，因為功能範圍較窄，易於上手。 | medium，因為需要重新調整工作流程。 |
> | 適用場景 | 主要場景 | 如果只需要簡單的設計資源提取，而不需要無障礙評分或多品牌比較 | 如果需要資料同步功能，而不是設計系統提取。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Stable |
| 生產環境就緒 | Yes |
| Breaking Change 風險 | low |

> [!tip] 採用建議
> 適合中小型團隊用於快速提取和管理設計系統。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 對於某些複雜的網站結構，提取結果可能不完全
  - 解法：手動檢查和補充提取的資料
- **[HIGH]** 需要額外配置來提取受保護的頁面內容
  - 解法：使用 `--cookie` 參數提供認證資訊

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型設計團隊需要快速提取網站設計系統 | 非常適合 | 能夠快速生成多種設計資源，節省時間。 |
| 大型企業需要進行多品牌設計比較 | 適合 | 支持多品牌比較功能，提供詳細報告。 |
| 個人開發者需要提取簡單網站的設計系統 | 普通 | 對於簡單網站提取效果良好，但複雜網站可能有挑戰。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習、3 小時整合，得到快速提取設計系統的效果，值得使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：工具本身不需要高權限，僅在提取過程中訪問網站資源，無需存取敏感資料。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Node.js 和 Playwright 搭配使用，主要在開發和建置階段進行設計資源提取。在一個使用 Next.js 的專案中，可以透過 `npx designlang` 命令快速提取設計系統，並將生成的資源直接整合到專案中。支援的 CI 工具包括 GitHub Actions，能夠在每次提交時自動檢查設計變更。整合摩擦點主要在於對於某些網站的複雜結構支持不足，可能需要手動調整提取的資料。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，設計系統的提取通常需要手動進行，使用者需要逐一收集樣式和顏色，效率低下且容易出錯。隨著自動化工具的興起，這個專案利用 Playwright 的無頭瀏覽器技術，讓設計系統的提取變得更加高效和準確。這個工具代表了設計自動化的趨勢，未來可能會進一步整合 AI 技術，提升提取的智能化水平。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Node.js
- 了解設計系統概念
- 有基本的 CLI 使用經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在內部工具中導入。第三週：撰寫使用手冊和最佳實踐。第四週：在主產品中開始使用。

**成功指標**：設計提取時間減少 50%，設計一致性提升。

> [!warning] 退出計畫
> 所有設定和提取資料以標準格式保存，方便未來轉移到其他工具。

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
| Forks | 152 |
| Open Issues | 0 |
| Issue 解決率 | 100% (14 closed) |
| 最後推送 | 2026-04-26 |
| 建立日期 | 2026-04-15 |
| 官方網站 | [Link](https://www.designlang.app) |
| Repo 大小 | 8.4 MB |
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
> | [@Manavarya09](https://github.com/Manavarya09) | 90 |
> | [@bot-manavarya](https://github.com/bot-manavarya) | 2 |
> | [@aaronjmars](https://github.com/aaronjmars) | 1 |
> | [@ArturLinnik](https://github.com/ArturLinnik) | 1 |
> | [@OyaAIProd](https://github.com/OyaAIProd) | 1 |

**最新版本**：v12.0.0 — v12.0.0 — chat · permalinks · gallery · spec (2026-04-26)

> [!info]- Release Notes
> The "best in the game" release: takes designlang from one-shot extractor to **iterative + shareable + standardized + distributed**.
> 
> ### Iterative — \`designlang chat\`
> 
> A REPL over a live extraction. Heuristic-only router (zero new deps, no LLM), eight built-in mutation ops:
> 
> \`\`\`
> $ npx designlang chat stripe.com
> > make it brutalist          # radii → 0, hard shadows, mono font
> > primary #ff4800            # swap a role color
> > dark mode                  # invert background ↔ foreground
> > sharpen / soften           # halve / double every radius
> > font Geist                 # swap the primary font family
> > show                       # print current palette + tokens
> > save                       # write DTCG, Tailwind, CSS vars, DESIGN.md
> > reset                      # restore the original
> \`\`\`
> 
> Loads from a URL or an existing \`*-design-tokens.json\`.
> 
> ### Shareable — every extraction is a permalink
> 
> - **\`designlang.app/x/<hash>\`** — every cached extraction has a stable URL with the full 12-tab viewer (DESIGN.md, DTCG tokens, Tailwind, CSS vars, Figma, shadcn, React theme, WordPress, iOS, Android, Flutter), Source/Preview toggle, per-file Copy + Download.
> - The URL bar updates mid-stream via \`history.replaceState\` so refresh-and-share works during the extraction.
> - **\`/gallery\`** — public directory of recent extractions. Palette-strip cards, intent + material + library signals, relative timestamps. Cached for 10 min.
> 
> ### Standardized — DESIGN.md spec
> 
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，開放問題解決率達到 100%。
**連結**：[文件](https://www.designlang.app)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-25 ~ 2026-04-26）
> **活躍天數** 2 天 · **最新 commit** raycast: add scripts/dev-setup.sh for screenshot capture

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

相關概念：[[設計系統]] · [[無障礙設計]] · [[自動化測試]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]]

[GitHub](https://github.com/Manavarya09/design-extract) · [官方網站](https://www.designlang.app)

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
> const concepts = ["設計系統","無障礙設計","自動化測試"];
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
