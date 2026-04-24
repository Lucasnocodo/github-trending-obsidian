---
repo: cathrynlavery/diagram-design
url: https://github.com/cathrynlavery/diagram-design
owner: cathrynlavery
owner_type: User
language: HTML
license: N/A
description: "Thirteen editorial diagram types for Claude Code. Self-contained HTML + SVG. No shadows, no Mermaid-slop."
homepage: ""
stars: 1780
stars_per_day: 254
forks: 127
open_issues: 1
created: 2026-04-16
pushed_at: 2026-04-22
first_seen: 2026-04-21
week: "2026-W17"
month: "2026-04"
category: "開發工具"
subcategory: "圖表生成"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-21
use_case: "提供 14 種編輯圖表類型，讓設計師不會反感的圖表生成工具。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-26"
contributor_count: 4
engagement: "low"
issue_close_rate: 0
repo_size_kb: 2652
readme_length: 9929
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-21"
star_history: "2026-04-21:965,2026-04-21:970,2026-04-22:1358,2026-04-22:1366,2026-04-23:1606,2026-04-23:1609,2026-04-24:1780"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - easy_install
aliases:
  - "diagram-design"
  - "cathrynlavery/diagram-design"
  - "提供 14 種編輯圖表類型，讓設計師不會反感的圖表生成工具。"
---

# diagram-design

**1.8k** stars · **254** stars/天 · 建立 7 天前 · HTML · 未標註授權

```dataviewjs
const me = dv.page("Repos/cathrynlavery--diagram-design");
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
> 提供 14 種編輯圖表類型，讓設計師不會反感的圖表生成工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (254 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要快速生成品牌一致圖表的設計師和開發者。
> **一句話重點** 這個專案的最大優勢在於它能夠快速生成符合品牌風格的高品質圖表，省去繁瑣的設計過程。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/cathrynlavery--diagram-design");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "圖表生成" && p.file.name !== "cathrynlavery--diagram-design" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 圖表生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到快速生成高品質圖表的效果，值得嘗試。

> [!abstract] 核心創新
> 這個專案的創新在於能夠自動從網站提取品牌元素，並生成高品質的編輯圖表。

## 專案簡介

這個專案的核心機制是透過 Claude Code 生成 14 種不同類型的編輯圖表，使用者只需提供網站 URL，工具會自動提取顏色和字體，並生成符合品牌風格的圖表。使用者可以透過 `/plugin marketplace add cathrynlavery/diagram-design` 安裝，並使用 `/plugin install diagram-design@diagram-design` 指令來啟用。這個工具的賣點在於它能在 60 秒內生成高品質的圖表，避免了傳統設計工具如 Figma 的繁瑣流程。技術上，這個專案使用 HTML 和 SVG，並且不依賴 JavaScript 或外部圖片，這使得生成的圖表可以直接在瀏覽器中查看，無需額外的構建步驟。

相較於其他圖表生成工具如 Mermaid，這個專案提供了更高的編輯質量和品牌一致性，因為它能夠自動從網站中提取設計元素。使用者在首次使用時，工具會檢查是否已自定義樣式指南，確保生成的圖表不會是默認模板。這個工具的社群活躍度不高，目前只有一個開放的問題。整體來看，這是一個適合需要快速生成品牌一致圖表的團隊，特別是對於設計師和開發者來說，能夠節省大量的設計時間。

**技術棧**：`HTML` · `SVG`

## 重點功能

- 14 種圖表類型 — 包括流程圖、架構圖、時間軸等，滿足不同需求。
- 自動提取品牌顏色和字體 — 透過網站 URL 快速生成符合品牌的圖表。
- 無需外部依賴 — 完全使用 HTML 和 SVG，直接在瀏覽器中查看。
- 多種樣式選擇 — 提供最小化淺色、最小化深色和完整編輯風格的圖表。
- 自動檢查對比度 — 確保生成的圖表符合 WCAG AA 標準。

## 快速開始

1. 安裝插件
```bash
/plugin marketplace add cathrynlavery/diagram-design
```
2. 安裝圖表生成插件
```bash
/plugin install diagram-design@diagram-design
```
3. 開始生成圖表
```bash
在 Claude Code 中詢問: "Make me an architecture diagram of my app"
```

## 程式碼範例

```html
{
  "前置條件": "需要在 Claude Code 中安裝 diagram-design 插件。",
  "指令": "/plugin install diagram-design@diagram-design",
  "預期輸出": "成功安裝後，可以使用該插件生成各種圖表。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天就累積 1780 stars（254/天），forks 127（7.1%），這顯示出其快速增長的潛力。作者 Cathryn Lavery 是 BestSelf.co 的創始人，過去專注於設計和創業，這個工具解決了使用者在生成圖表時常遇到的品牌不一致和設計繁瑣的痛點。這個專案的推出正好契合了對高品質設計需求的上升，並且在社交媒體上引起了一定的討論。其簡單的安裝和使用方式使得它成為一個吸引人的選擇。forks/stars 比率為 7.1%，顯示出有相當比例的使用者在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要快速生成品牌一致圖表的設計師和開發者。

> [!example] 使用場景
> - 設計師用它來快速生成符合品牌風格的圖表，因為它能自動提取網站的顏色和字體，節省了手動設計的時間。
> - 開發者用它來在技術文件中插入高品質的架構圖，因為這樣可以避免使用低質量的圖表，提升文件的專業度。
> - 產品經理用它來展示專案進度的流程圖，因為它提供了多種圖表類型，能夠清晰地表達複雜的資訊。

## 架構分析

這個專案採用模組化設計，將不同類型的圖表和參考資料分開存放，這樣可以根據需求動態加載。使用者只需安裝一次插件，然後可以根據需求生成不同類型的圖表。這種設計使得工具能夠保持輕量且快速，因為只有在需要時才會加載相關的參考資料。選擇這種架構的代價是需要使用者了解如何使用命令行進行安裝和配置，但這樣的靈活性使得工具能夠適應不同的使用場景。整體來看，這種設計方式有助於未來的擴展，因為新增的圖表類型只需添加相應的參考文件，而不會影響到現有的功能。

## 技術深入分析

這個專案的核心技術在於使用 HTML 和 SVG 來生成圖表，這使得生成的圖表可以直接在瀏覽器中查看，而不需要任何額外的 JavaScript 或外部資源。這樣的設計不僅提高了性能，還簡化了使用流程。每種圖表類型都有其獨立的參考文件，這樣可以根據需求動態加載，保持工具的輕量性。這種模組化的設計方式使得未來的擴展變得簡單，只需添加新的參考文件即可。

選擇 HTML 和 SVG 的好處在於它們的普遍性和兼容性，幾乎所有現代瀏覽器都能夠支持。這樣的選擇也降低了對外部依賴的需求，增加了使用的靈活性。技術風險方面，由於目前社群活躍度不高，未來的支持和更新可能會受到影響，這需要使用者在選擇時考慮。整合方面，這個工具可以輕鬆地與現有的工作流結合，尤其是對於已經在使用 Claude Code 的團隊來說，整合的摩擦點相對較少。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程相對順暢，但需要使用者熟悉命令行操作。文件中包含了快速入門指南，對於新手來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 快速生成符合品牌的圖表，節省設計時間。
> - 無需依賴外部工具，直接在瀏覽器中查看。
> - 提供多種圖表類型，滿足不同需求。

> [!danger] 缺點
> - 目前僅支援 HTML 和 SVG，無法生成其他格式的圖表。
> - 社群活躍度不高，可能影響未來的支持。
> - 插件更新後可能會導致自定義樣式丟失。

> [!warning] 注意事項
> - 目前僅支援 HTML 和 SVG，無法生成其他格式的圖表。
> - 社群活躍度不高，只有一個開放的問題，可能影響未來的支持。
> - 插件更新後可能會導致自定義樣式丟失，需謹慎選擇安裝方式。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的圖表生成，但主要聚焦於更複雜的數據視覺化，適合需要深入分析的使用者。 |
| [ahmadawais/chartli](https://github.com/ahmadawais/chartli) | 專注於生成各種圖表的 CLI 工具，適合需要在命令行中快速生成圖表的開發者。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Mermaid | 使用 Markdown 語法生成圖表，適合需要快速編寫文檔的使用者，但生成的圖表質量較低。 | 如果你的團隊已經在使用 Markdown 並需要快速生成圖表，Mermaid 是個不錯的選擇。 | low，因為 Mermaid 的語法相對簡單，容易上手。 |
| draw.io | 提供圖形化界面進行圖表設計，適合需要高度自定義的使用者，但學習曲線較陡。 | 如果你的團隊需要更高的自定義能力和圖形化操作，draw.io 是更好的選擇。 | medium，因為需要重新學習工具的操作方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **diagram-design** | **Mermaid** | **draw.io** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Markdown 語法生成圖表，適合需要快速編寫文檔的使用者，但生成的圖表質量較低。 | 提供圖形化界面進行圖表設計，適合需要高度自定義的使用者，但學習曲線較陡。 |
> | 遷移成本 | - | low，因為 Mermaid 的語法相對簡單，容易上手。 | medium，因為需要重新學習工具的操作方式。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經在使用 Markdown 並需要快速生成圖表 | 如果你的團隊需要更高的自定義能力和圖形化操作，draw.io |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 插件更新後自定義樣式可能丟失
  - 解法：在更新前備份 style-guide.md 文件
- [MEDIUM] 首次使用時需手動配置樣式指南
  - 解法：遵循 README 中的 onboarding 流程進行配置

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的新創團隊需要快速生成報告用圖表 | 非常適合 | 能夠快速生成符合品牌的高品質圖表，節省時間。 |
| 大型企業需要多種圖表類型進行內部報告 | 普通 | 雖然提供多種圖表類型，但可能不夠靈活以滿足所有需求。 |
| 設計師需要高品質的圖表來提升作品集 | 非常適合 | 生成的圖表質量高，符合設計需求。 |
| 需要生成複雜數據視覺化的數據分析團隊 | 不適合 | 目前僅支援基本的圖表類型，無法處理複雜的數據視覺化需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速生成高品質圖表的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，僅需訪問網站以提取顏色和字體，不存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/cathrynlavery--diagram-design");
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
> const me = dv.page("Repos/cathrynlavery--diagram-design");
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
| Forks | 127 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-22 |
| 建立日期 | 2026-04-16 |
| Repo 大小 | 2.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/cathrynlavery/diagram-design) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@cathrynlavery](https://github.com/cathrynlavery) | 7 |
> | [@web-flow](https://github.com/web-flow) | 1 |
> | [@jirayu3141](https://github.com/jirayu3141) | 1 |
> | [@nkeneng](https://github.com/nkeneng) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度不高，目前只有一個開放的問題。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-16 ~ 2026-04-22）
> **活躍天數** 5 天 · **最新 commit** Merge pull request #2 from jirayu3141/fix/plugin-path-structure

## README 摘錄

> [!info]- 展開查看原文 README
> # Diagram Design
> 
> **Editorial diagrams your designer won't hate.**
> 
> 14 types. One Claude Code skill. Your brand in 60 seconds — the skill reads your website and maps colors + fonts to every diagram.
> 
> No Figma. No generic rounded boxes. No 30-minute color-picking sessions.
> 
> ---
> 
> 
> ## Install
> 
> ```bash
> 
> ### Alternative: install as a plugin
> 
> Quicker to install — but the skill lives in the plugin cache, so edits to `references/style-guide.md` don't survive plugin updates. Pick this if you just want to try it out; use the clone route above if you plan to customize the style guide by hand.
> 
> **Claude Code:**
> ```
> /plugin marketplace add cathrynlavery/diagram-design
> /plugin install diagram-design@diagram-design
> ```
> 
> **Claude Cowork:** Customize → Directory → Plugins → **+** → paste `cathrynlavery/diagram-design` → Sync, then install from the Personal list.
> 
> **Codex:**
> ```
> /plugin marketplace add cathrynlavery/diagram-design
> /plugin install diagram-design@diagram-design
> ```
> 
> ---
> 
> 
> ## Quickstart
> 
> ```bash
> 
> ## What it makes
> 
> All 14 diagrams ship in three variants: minimal light, minimal dark, and full-editorial. Open any of them directly in a browser — no build step, no JS, no external images.
> 
>   ArchitectureComponents + connections
>   FlowchartDecision logic
>   SequenceMessages over time
> 
>   State machineStates + transitions
>   ER / data modelEntities + fields
>   TimelineEvents on an axis
> 
>   SwimlaneCross-functional flow
>   QuadrantTwo-axis positioning
>   NestedHierarchy by containment
> 
>   TreeParent → children
>   Layer stackStacked abstractions
>   VennSet overlap
> 
>   Pyramid / funnelRanked hierarchy or drop-off
>   Consultant 2×2Scenario matrix · named cells
>   &nbsp;
> 
> **Browse the live gallery:** open [`skills/diagram-design/assets/index.html`](skills/diagram-design/assets/index.html) in your browser to flip through all 14 diagrams with light / dark / full-editorial tabs.
> 
> ---
> 
> 
> ## About
> 
> Made by **Cathryn Lavery** — founder of [BestSelf.co](https://bestself.co?utm_source=diagram-design&utm_medium=readme&utm_campaign=github&utm_content=bio). I write about AI, entrepreneurship, and designing nice-looking things at [littlemight.com](https://littlemight.com?utm_source=diagram-design&utm_medium=readme&utm_campaign=github&utm_content=bio) — blog + newsletter.
> 
> If this is useful, **star the repo** and come [say hi on X](https://x.com/cathrynlavery).
> ## Why I built it
> 
> I write at [littlemight.com](https://littlemight.com?utm_source=diagram-design&utm_medium=readme&utm_campaign=github&utm_content=intro) (and run [BestSelf.co](https://bestself.co?utm_source=diagram-design&utm_medium=readme&utm_campaign=github&utm_content=intro) on the side). Every time I needed a diagram — an architecture sketch, a flowchart, a pyramid of what matters most — I'd ask Claude and get back a generic rounded-box thing that looked nothing like the rest of the site. I'd either fight with Figma for 30 minutes or just skip the diagram.
> 
> So I built a Claude Code skill for it. Fourteen types, editorial quality, matches your brand in 60 seconds by reading your website.
> 
> > *The highest-quality move is usually deletion.* Every node earns its place. The accent color is reserved for the 1–2 things the reader should look at first. Target density: 4/10.
> 
> ---
> 
> 
> # "I need a quadrant showing Q2 projects by impact vs effort."
> 
> # Clone the repo somewhere, then symlink the inner skill into Claude Code's skills dir
> git clone git@github.com:cathrynlavery/diagram-design.git ~/code/diagram-design
> ln -s ~/code/diagram-design/skills/diagram-design ~/.claude/skills/diagram-design
> ```
> 
> The real skill lives at `skills/diagram-design/` inside the repo (so the same tree works as a Claude Code plugin, a Codex plugin, and a standalone skill). The symlink points Claude Code at that inner directory.
> 
> Restart Claude Code. The skill registers as `diagram-design` and activates whenever you ask Claude to make a diagram.
> 
> 
> ## Onboarding — make it look like *your* brand
> 
> The whole point: ship editorial-quality diagrams in **your** colors and typography, not a generic template.
> 
> Out of the box, diagrams render in a clean **jet-black + atomic-tangerine** palette (white-smoke paper, jet-black ink, atomic-tangerine accent, blue-slate muted, silver hairlines). Good enough to screenshot straight away. But 60 seconds of onboarding is better — the skill will pull your brand from your website and apply it across every diagram.
> 
> 
> ### The flow
> 
> ```
> You:     "onboard diagram-design to https://yoursite.com"
> Claude:  → fetches the homepage
>          → extracts the dominant palette + font stack
>          → maps detected values to semantic roles:
>              paper, ink, muted, accent, link
>          → shows a proposed diff
>          → writes your tokens to references/style-guide.md
> You:     "yes, apply it"
> ```
> 
> Every new diagram now uses your colors. Your website's paper color becomes the diagram background. Your CTA color becomes the focal accent. Your body font stack becomes the node label family.
> 
> 
> ### What gets extracted
> 
> | Detected from your site | Becomes |
> |---|---|
> | `` background | `paper` token |
> | Primary text color | `ink` token |
> | Secondary / caption text | `muted` token |
> | Cards or containers | `paper-2` token |
> | Most-used brand color (CTA, link, heading) | `accent` token |
> | `` font family | `title` font |
> | `` font family | `node-name` font |
> | `` / `` font | `sublabel` font |
> 
> 
> ### Contrast checks happen automatically
> 
> Before writing tokens, the skill verifies WCAG AA contrast on `ink` over `paper`. If your site has a color that fails contrast at diagram sizes (9–12px), it proposes an adjusted value and explains why.
> 
> 
> ### Manual override
> 
> Prefer to set tokens by hand? Open [`skills/diagram-design/references/style-guide.md`](skills/diagram-design/references/style-guide.md) and edit the table. Everything downstream reads from there — all 14 diagrams, the annotation primitive, and the gallery all inherit semantic role names (`accent`, not `#eb6c36`).
> 
> 
> ### First-run gate
> 
> The skill won't silently ship default-skinned diagrams into a branded project. On first use in a new project, it checks if `style-guide.md` has been customized. If not, it pauses and asks:
> 
> > *"This is your first diagram in this project. The style guide is still at the default. Want to run onboarding, paste tokens manually, or proceed with default?"*
> 
> See [`skills/diagram-design/references/onboarding.md`](skills/diagram-design/references/onboarding.md) for the full spec.
> 
> ---
> 
> 
> # Open the gallery to see all 14 diagrams
> open ~/.claude/skills/diagram-design/assets/index.html
> 
> 
> # In Claude Code, just ask:
> 
> # "Make me an architecture diagram of my app: frontend, backend, database, Redis cache."
> 
> # "Give me a sequence diagram of the OAuth handshake."
> ```
> 
> Claude will pick the right type, build the HTML, and save it. You can also start from a template directly:
> 
> ```bash
> cp assets/template.html my-diagram.html        # minimal light
> cp assets/template-full.html my-diagram.html   # editorial with summary cards
> ```
> 
> ---
> 
> 
> ## Architecture
> 
> Progressive disclosure. `SKILL.md` is a lean index — it tells Claude how to pick a type and where to look for detail. Every type lives in its own reference file, loaded only when relevant.
> 
> ```
> diagram-design/
> ├── SKILL.md                         — top-level: philosophy, selection guide, checklist
> ├── references/                      — loaded only when a type or primitive is chosen
> │   ├── style-guide.md               — single source of truth for colors + fonts
> │   ├── onboarding.md                — the URL-to-tokens flow
> │   ├── type-architecture.md
> │   ├── type-flowchart.md
> │   ├── type-sequence.md
> │   ├── type-state.md
> │   ├── type-er.md
> │   ├── type-timeline.md
> │   ├── type-swimlane.md
> │   ├── type-quadrant.md
> │   ├── type-nested.md
> │   ├── type-tree.md
> │   ├── type-layers.md
> │   ├── type-venn.md
> │   ├── type-pyramid.md
> │   ├── primitive-annotation.md      — italic-serif editorial callouts
> │   └── primitive-sketchy.md         — hand-drawn SVG filt

## 延伸閱讀

相關概念：[[資料視覺化]] · [[自動化]] · [[CLI/TUI]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[jxnxts--mcp-brasil|jxnxts/mcp-brasil]] · [[lewislulu--html-ppt-skill|lewislulu/html-ppt-skill]] · [[steipete--discrawl|steipete/discrawl]] · [[viperrcrypto--Siftly|viperrcrypto/Siftly]]

[GitHub](https://github.com/cathrynlavery/diagram-design)

## 相關收錄

> [!note]- 直接競品（同子分類：圖表生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "圖表生成" AND file.name != "cathrynlavery--diagram-design"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "cathrynlavery--diagram-design"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "cathrynlavery--diagram-design" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "cathrynlavery--diagram-design"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["資料視覺化","自動化","CLI/TUI"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "cathrynlavery--diagram-design" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/cathrynlavery--diagram-design");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "cathrynlavery--diagram-design" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "cathrynlavery" AND file.name != "cathrynlavery--diagram-design"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/cathrynlavery--diagram-design");
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
> const me = dv.page("Repos/cathrynlavery--diagram-design");
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
> const me = dv.page("Repos/cathrynlavery--diagram-design");
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
> const me = dv.page("Repos/cathrynlavery--diagram-design");
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
> const me = dv.page("Repos/cathrynlavery--diagram-design");
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

> **2026-04-21** — 首次收錄
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

- [[2026-04-23|2026-04-23]] — 再次上榜，1.6k stars
- [[2026-04-22|2026-04-22]] — 再次上榜，1.4k stars
- [[2026-04-21|2026-04-21]] — 首次收錄，965 stars
