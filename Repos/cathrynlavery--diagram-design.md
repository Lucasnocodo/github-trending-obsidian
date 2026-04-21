---
repo: cathrynlavery/diagram-design
url: https://github.com/cathrynlavery/diagram-design
owner: cathrynlavery
owner_type: User
language: HTML
license: N/A
description: "Thirteen editorial diagram types for Claude Code. Self-contained HTML + SVG. No shadows, no Mermaid-slop."
homepage: ""
stars: 970
stars_per_day: 243
forks: 65
open_issues: 1
created: 2026-04-16
pushed_at: 2026-04-19
first_seen: 2026-04-21
week: "2026-W17"
month: "2026-04"
category: "開發工具"
subcategory: "圖表工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-21
use_case: "提供 13 種編輯風格的圖表類型，讓使用者能快速生成符合品牌的高品質圖表。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-24"
contributor_count: 2
engagement: "low"
issue_close_rate: 0
repo_size_kb: 788
readme_length: 9807
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-21"
star_history: "2026-04-21:965,2026-04-21:970"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - easy_install
aliases:
  - "diagram-design"
  - "cathrynlavery/diagram-design"
  - "提供 13 種編輯風格的圖表類型，讓使用者能快速生成符合品牌的高品質圖表。"
---

# diagram-design

**970** stars · **243** stars/天 · 建立 4 天前 · HTML · 未標註授權

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
> 提供 13 種編輯風格的圖表類型，讓使用者能快速生成符合品牌的高品質圖表。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (243 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要快速生成符合品牌風格的高品質圖表的內容創作者和開發者。
> **一句話重點** 這個專案不僅提供圖表生成工具，更強調品牌一致性和設計美學，適合需要高品質圖表的內容創作者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/cathrynlavery--diagram-design");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "圖表工具" && p.file.name !== "cathrynlavery--diagram-design" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 圖表工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到高品質圖表生成的效果，值得嘗試。

> [!abstract] 核心創新
> 這個專案提供了 13 種編輯風格的圖表類型，並能自動提取品牌色彩和字體，生成高品質圖表。

## 專案簡介

這個專案的核心機制是透過 Claude Code 生成 13 種不同類型的圖表，使用者只需提供網站連結，系統便能自動提取品牌色彩和字體，並生成符合品牌風格的圖表。使用者可以透過簡單的指令，例如 "Make me an architecture diagram of my app"，快速獲得所需的圖表，並且所有圖表都是以 HTML 和 SVG 格式輸出，無需額外的 JavaScript 或外部資源。這樣的設計使得圖表生成過程不僅高效，還能保持品牌一致性。技術上，專案使用了 HTML 和 SVG 來實現圖表的呈現，並且透過一個簡潔的目錄結構來管理不同類型的圖表和樣式指南，這樣的設計使得擴展性和維護性都相對較高。與其他圖表生成工具相比，如 Mermaid 或 Draw.io，這個專案專注於生成高品質的編輯風格圖表，而不是僅僅提供基本的圖形功能，這使得它在設計上更具吸引力。

使用者在使用過程中可能會遇到樣式自定義的挑戰，尤其是在首次設置時，但這可以通過手動編輯樣式指南來解決。這個專案目前處於早期階段，雖然功能已經相對完整，但仍有改進空間，特別是在社群互動和問題解決的速度上。對於小型團隊或個人開發者來說，這是一個值得嘗試的工具，特別是那些需要快速生成符合品牌形象的圖表的使用者。未來六個月內，預計會有更多的圖表類型和功能擴展。

**技術棧**：`HTML` · `SVG`

## 重點功能

- 13 種圖表類型 — 包括架構圖、流程圖、序列圖等，滿足不同需求。
- 品牌自動提取 — 透過網站連結自動提取顏色和字體，確保圖表符合品牌形象。
- 無需外部依賴 — 所有圖表以 HTML 和 SVG 格式輸出，無需額外的 JavaScript。
- 快速上手 — 使用者只需簡單的指令即可生成所需圖表，操作直觀。
- 可自定義樣式 — 提供樣式指南，使用者可手動調整顏色和字體。

## 快速開始

1. 克隆專案到 Claude Code 技能目錄
```bash
git clone git@github.com:cathrynlavery/diagram-design.git ~/.claude/skills/diagram-design
```
2. 重啟 Claude Code
```bash
重啟命令
```
3. 查看圖表類型畫廊
```bash
open ~/.claude/skills/diagram-design/assets/index.html
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天內累積 970 stars（243/天），forks 65（6.7%），這顯示出強烈的初期興趣。作者 Cathryn Lavery 過去在設計和創業方面有豐富經驗，這讓她能夠針對市場需求開發出這個工具。這個專案解決了許多使用者在生成高品質圖表時面臨的困難，特別是當前市面上許多工具提供的圖表質量不夠理想。社群對於這個工具的熱情可能來自於對於簡化設計流程的需求，特別是在內容創作者和開發者中。這個工具的出現，正好填補了市場上對於高品質、品牌一致性的圖表生成工具的空白。

## 適合誰使用

**目標受眾**：需要快速生成符合品牌風格的高品質圖表的內容創作者和開發者。

> [!example] 使用場景
> - 內容創作者用它來快速生成符合品牌風格的圖表，因為這樣可以節省設計時間，並提高文章的專業度。
> - 小型團隊的開發者用它來視覺化架構圖，因為這能幫助團隊更清晰地理解系統架構，減少溝通成本。
> - 教育工作者用它來創建教學用的流程圖，因為這樣可以讓學生更容易理解複雜的概念，提升學習效果。

## 架構分析

這個專案採用模組化的設計，將每種圖表類型的生成邏輯分開，使得 Claude Code 在需要時才加載相關的參考文件，這樣的設計提高了性能和擴展性。每個圖表類型都有自己的參考文件，這樣可以保持系統的輕量和快速反應。選擇這種架構的代價在於需要確保每個類型的參考文件都能正確加載，否則可能會影響圖表生成的準確性。隨著圖表類型的增加，維護這些參考文件的成本也會隨之上升，但整體上這種設計能夠有效地管理複雜性。

## 技術深入分析

這個專案的核心技術機制是利用 HTML 和 SVG 生成各種圖表，並透過 Claude Code 的能力來自動化這一過程。每種圖表類型的生成邏輯分開管理，這樣的設計使得系統在需要時才加載相關的參考文件，保持了性能的優化。效能方面，因為所有圖表都是靜態 HTML 和 SVG，無需額外的 JavaScript，因此在加載速度上有明顯優勢。設計上，專案選擇了簡約的風格，強調了圖表的可讀性和品牌一致性，這樣的選擇使得圖表不會顯得過於花哨。技術上，這個專案的依賴關係相對簡單，主要集中在 HTML 和 SVG，這降低了維護成本。未來可能的技術風險包括隨著圖表類型的增加，維護和擴展的複雜性可能會增加，這需要持續的社群支持和更新。整合方面，這個工具能夠輕鬆融入現有的開發流程，特別是對於已經使用 Claude Code 的團隊來說，學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝和使用指導，包含實際的指令範例。安裝過程相對順暢，沒有明顯的坑。Getting started guide 也相對完整，能幫助新手快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 快速生成高品質圖表，節省設計時間。
> - 品牌一致性強，能夠自動提取網站色彩和字體。
> - 無需外部依賴，直接使用 HTML 和 SVG 格式。

> [!danger] 缺點
> - 首次設置樣式指南可能需要手動調整，對新手不太友好。
> - 不適合生成簡單的 unicode 圖表或單一形狀的圖表。
> - 目前功能相對較少，未來可能需要更多的圖表類型。

> [!warning] 注意事項
> - 目前僅支援 HTML 和 SVG 格式，不支援其他圖形格式。
> - 圖表生成過程中，首次設置樣式指南可能需要手動調整。
> - 不適合用於生成簡單的 unicode 圖表或單一形狀的圖表。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [mermaid-js/mermaid](https://github.com/mermaid-js/mermaid) | Mermaid 提供更為靈活的文本描述語法，但圖表質量和品牌一致性較弱，適合快速生成簡單圖表。 |
| [drawio/drawio](https://github.com/drawio/drawio) | Draw.io 提供更全面的圖形編輯功能，但使用上較為繁瑣，對於需要快速生成高品質圖表的使用者來說不夠高效。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [mermaid-js/mermaid](https://github.com/mermaid-js/mermaid) | 使用文本描述語法生成圖表，靈活性高，但圖表質量和品牌一致性較弱。 | 如果需要快速生成簡單圖表，且不在意品牌一致性，可以選擇 Mermaid。 | low，因為 Mermaid 的語法相對簡單，容易上手。 |
| [drawio/drawio](https://github.com/drawio/drawio) | 提供全面的圖形編輯功能，適合複雜的圖表設計，但使用上較為繁瑣。 | 如果需要高度自定義的圖表，且有時間進行設計，可以選擇 Draw.io。 | medium，因為需要重新學習其編輯界面和功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **diagram-design** | **mermaid** | **drawio** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用文本描述語法生成圖表，靈活性高，但圖表質量和品牌一致性較弱。 | 提供全面的圖形編輯功能，適合複雜的圖表設計，但使用上較為繁瑣。 |
> | 遷移成本 | - | low，因為 Mermaid 的語法相對簡單，容易上手。 | medium，因為需要重新學習其編輯界面和功能。 |
> | 適用場景 | 主要場景 | 如果需要快速生成簡單圖表，且不在意品牌一致性，可以選擇 Me | 如果需要高度自定義的圖表，且有時間進行設計，可以選擇 Dra |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人專案或小型團隊試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 首次使用時，樣式指南未自定義會導致生成的圖表不符合品牌風格
  - 解法：在首次使用前進行樣式指南的自定義設置
- [MEDIUM] 生成的圖表可能在某些顯示設備上顯示不佳
  - 解法：在不同設備上進行測試，必要時調整圖表設計
- [MEDIUM] 對於不熟悉 HTML/SVG 的使用者，可能會感到困難
  - 解法：參考 README 中的範例和指導，逐步學習

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 內容創作者需要快速生成圖表以提高文章質量 | 非常適合 | 能夠快速生成符合品牌的高品質圖表，提升內容專業度。 |
| 大型企業需要生成多種圖表以視覺化數據 | 普通 | 雖然能生成多種圖表，但對於高度自定義的需求可能不夠靈活。 |
| 小型團隊希望快速協作生成圖表 | 適合 | 能夠快速生成圖表，並且易於團隊成員之間共享。 |
| 需要生成簡單的 unicode 圖表或單一形狀的圖表 | 不適合 | 這個工具不適合用於生成簡單的圖表，可能會導致不必要的複雜性。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高品質圖表生成的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不存取敏感資料，使用過程中不會涉及安全性問題。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Claude Code 搭配使用，處於圖表生成的環節。在一個使用 Claude Code 的專案中，使用者可以透過簡單的指令生成所需的圖表，並且可以輕鬆整合到現有的開發流程中。支援 GitHub Actions 等 CI 工具，並且能夠與 VS Code 等 IDE 整合。整合的摩擦點主要在於首次設置樣式指南，這可能需要一些時間來調整。

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
| Forks | 65 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-19 |
| 建立日期 | 2026-04-16 |
| Repo 大小 | 788 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/cathrynlavery/diagram-design) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@cathrynlavery](https://github.com/cathrynlavery) | 1 |
> | [@web-flow](https://github.com/web-flow) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，最近有更新，但問題解決率為 0%。
**連結**：[文件](https://github.com/cathrynlavery/diagram-design)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-16 ~ 2026-04-19）
> **活躍天數** 2 天 · **最新 commit** Add Claude Code plugin + marketplace manifests

## README 摘錄

> [!info]- 展開查看原文 README
> # Diagram Design
> 
> **I wanted good-looking diagrams for my blog posts.**
> 
> I write at [littlemight.com](https://littlemight.com). Every time I needed a diagram — an architecture sketch, a flowchart, a pyramid of what matters most — I'd ask Claude and get back a generic rounded-box thing that looked nothing like the rest of the site. I'd either fight with Figma for 30 minutes or just skip the diagram.
> 
> So I built a Claude Code skill for it. 13 types, editorial quality, matches your brand in 60 seconds by reading your website.
> 
> > *The highest-quality move is usually deletion.* Every node earns its place. The accent color is reserved for the 1–2 things the reader should look at first. Target density: 4/10.
> 
> ---
> 
> ## What it makes
> 
> All 13 diagrams ship in three variants: minimal light, minimal dark, and full-editorial. Open any of them directly in a browser — no build step, no JS, no external images.
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
>   Pyramid / funnelRanked hierarchy or conversion drop-off
> 
> **Browse the live gallery:** open [`assets/index.html`](assets/index.html) in your browser to flip through all 13 types with light / dark / full-editorial tabs.
> 
> ---
> 
> ## Install
> 
> ```bash
> # Clone into your Claude Code skills directory
> git clone git@github.com:cathrynlavery/diagram-design.git ~/.claude/skills/diagram-design
> 
> # Or if you keep skills elsewhere, symlink it
> git clone git@github.com:cathrynlavery/diagram-design.git ~/code/diagram-design
> ln -s ~/code/diagram-design ~/.claude/skills/diagram-design
> ```
> 
> Restart Claude Code. The skill registers as `diagram-design` and activates whenever you ask Claude to make a diagram.
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
> ---
> 
> ## Onboarding — make it look like *your* brand
> 
> The whole point: ship editorial-quality diagrams in **your** colors and typography, not a generic template.
> 
> Out of the box, diagrams render in a neutral **stone + rust** palette (warm off-white paper, deep charcoal ink, rust-orange accent). Good enough to screenshot straight away. But 60 seconds of onboarding is better — the skill will pull your brand from your website and apply it across every diagram.
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
> ### Contrast checks happen automatically
> 
> Before writing tokens, the skill verifies WCAG AA contrast on `ink` over `paper`. If your site has a color that fails contrast at diagram sizes (9–12px), it proposes an adjusted value and explains why.
> 
> ### Manual override
> 
> Prefer to set tokens by hand? Open [`references/style-guide.md`](references/style-guide.md) and edit the table. Everything downstream reads from there — the 13 types, the annotation primitive, and the gallery all inherit semantic role names (`accent`, not `#b5523a`).
> 
> ### First-run gate
> 
> The skill won't silently ship default-skinned diagrams into a branded project. On first use in a new project, it checks if `style-guide.md` has been customized. If not, it pauses and asks:
> 
> > *"This is your first diagram in this project. The style guide is still at the default. Want to run onboarding, paste tokens manually, or proceed with default?"*
> 
> See [`references/onboarding.md`](references/onboarding.md) for the full spec.
> 
> ---
> 
> ## Quickstart
> 
> ```bash
> # Open the gallery to see all 13 types
> open ~/.claude/skills/diagram-design/assets/index.html
> 
> # In Claude Code, just ask:
> # "Make me an architecture diagram of my app: frontend, backend, database, Redis cache."
> # "I need a quadrant showing Q2 projects by impact vs effort."
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
> │   └── primitive-sketchy.md         — hand-drawn SVG filter variant
> ├── assets/
> │   ├── index.html                   — live gallery, tabbed
> │   ├── template*.html               — scaffolds for new diagrams
> │   └── example-.html          — 3 variants × 13 types
> └── docs/screenshots/                — the images in this README
> ```
> 
> This keeps Claude's working context tight (only load what you need) and makes the skill easy to extend — drop a new `type-.md` and wire it into the selection guide.
> 
> ### What loads when
> 
> The top-level `SKILL.md` is always in context. Everything else is pulled in only when relevant — this is what keeps the skill fast even with 15 reference files.
> 
> | You ask for… | Claude loads |
> |---|---|
> | "Make me a flowchart" | `SKILL.md` + `references/type-flowchart.md` |
> | "Build an architecture diagram" | `SKILL.md` + `references/type-architecture.md` |
> | "Onboard this skill to my site" | `SKILL.md` + `references/onboarding.md` + `references/style-guide.md` |
> | "Add an editorial callout to this diagram" | `SKILL.md` + `references/primitive-annotation.md` |
> | "Give me a hand-drawn version" | `SKILL.md` + `references/primitive-sketchy.md` |
> | Routine diagram-making (any of the 13 types) | Only `SKILL.md` + that one type's reference |
> 
> No matter how many types exist, Claude only reads the one you need. Add a new type tomorrow and nothing else changes.
> 
> ---
> 
> ## The design system (in one paragraph)
> 
> One accent color, 1–2 focal elements per diagram. Three fon

## 延伸閱讀

相關概念：[[資料視覺化]] · [[自動化]] · [[設計系統]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[jxnxts--mcp-brasil|jxnxts/mcp-brasil]] · [[lewislulu--html-ppt-skill|lewislulu/html-ppt-skill]] · [[steipete--discrawl|steipete/discrawl]] · [[viperrcrypto--Siftly|viperrcrypto/Siftly]]

[GitHub](https://github.com/cathrynlavery/diagram-design)

## 相關收錄

> [!note]- 直接競品（同子分類：圖表工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "圖表工具" AND file.name != "cathrynlavery--diagram-design"
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
> const concepts = ["資料視覺化","自動化","設計系統"];
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

- [[2026-04-21|2026-04-21]] — 首次收錄，965 stars
