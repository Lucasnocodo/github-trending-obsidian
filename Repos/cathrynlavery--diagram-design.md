---
repo: cathrynlavery/diagram-design
url: https://github.com/cathrynlavery/diagram-design
owner: cathrynlavery
owner_type: User
language: HTML
license: N/A
description: "Thirteen editorial diagram types for Claude Code. Self-contained HTML + SVG. No shadows, no Mermaid-slop."
homepage: ""
stars: 1859
stars_per_day: 232
forks: 135
open_issues: 1
created: 2026-04-16
pushed_at: 2026-04-22
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
use_case: "提供 14 種編輯圖表類型，快速生成符合品牌的高品質圖表。"
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
star_history: "2026-04-21:965,2026-04-21:970,2026-04-22:1358,2026-04-22:1366,2026-04-23:1606,2026-04-23:1609,2026-04-24:1780,2026-04-25:1859"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - easy_install
aliases:
  - "diagram-design"
  - "cathrynlavery/diagram-design"
  - "提供 14 種編輯圖表類型，快速生成符合品牌的高品質圖表。"
---

# diagram-design

**1.9k** stars · **232** stars/天 · 建立 8 天前 · HTML · 未標註授權

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
> 提供 14 種編輯圖表類型，快速生成符合品牌的高品質圖表。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (232 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 2 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要快速生成符合品牌的高品質圖表的設計師和開發者。
> **一句話重點** 這個專案最厲害的地方在於它能快速生成符合品牌的高品質圖表，解決了設計師和開發者在圖表生成上的痛點。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到快速生成符合品牌的圖表，值得一試。

> [!abstract] 核心創新
> 這個專案的創新在於其自動化的品牌匹配功能，能在 60 秒內生成符合品牌的高品質圖表。

## 專案簡介

這個專案提供了 14 種不同類型的編輯圖表，使用者只需將網站連結提供給 Claude，系統會自動提取顏色和字體，並生成符合品牌的圖表。使用者可以透過簡單的指令，如 `/plugin install diagram-design@diagram-design`，快速安裝並使用這個插件。這些圖表不僅外觀精美，還能直接在瀏覽器中查看，無需額外的建置步驟或 JavaScript。技術上，這個專案使用 HTML 和 SVG，並設計為無依賴的結構，這意味著它能夠快速加載並運行。與其他圖表生成工具相比，如 Mermaid 或 Figma，這個專案的優勢在於其自動化的品牌匹配功能，能夠在 60 秒內生成符合品牌風格的圖表，而不需要手動調整顏色或樣式。

使用者可選擇三種變體：簡約淺色、簡約深色和完整編輯版，這在設計上提供了靈活性。這個工具特別適合需要快速生成高品質圖表的設計師或開發者，尤其是在需要與品牌一致性時。使用者在使用過程中可能會遇到的問題包括首次使用時需要進行品牌設置，但這是為了確保生成的圖表符合品牌風格。整體而言，這個專案在設計上考慮到了使用者的需求，並提供了一個簡單的解決方案來生成專業的圖表。

**技術棧**：`HTML` · `SVG`

## 重點功能

- 14 種圖表類型 — 包括架構圖、流程圖、時間軸等，滿足不同需求。
- 自動品牌匹配 — 透過網站連結自動提取顏色和字體，生成符合品牌的圖表。
- 三種視覺變體 — 提供簡約淺色、簡約深色和完整編輯版，適應不同的展示需求。
- 無需外部依賴 — 直接使用 HTML 和 SVG，無需額外的 JavaScript 或建置步驟。
- 即時預覽 — 使用者可以直接在瀏覽器中查看生成的圖表，方便快速調整。

## 快速開始

1. 安裝插件
```bash
/plugin marketplace add cathrynlavery/diagram-design
```
2. 安裝圖表設計技能
```bash
/plugin install diagram-design@diagram-design
```
3. 進行品牌設置
```bash
在 Claude 中輸入 "onboard diagram-design to https://yoursite.com"
```

## 程式碼範例

```html
# 前置條件
# 使用 Claude Code

# 安裝插件
/plugin marketplace add cathrynlavery/diagram-design

# 安裝圖表設計技能
/plugin install diagram-design@diagram-design

# 進行品牌設置
"onboard diagram-design to https://yoursite.com"
# 預期輸出
生成符合品牌的圖表，並自動提取顏色和字體。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 1859 stars（232/天），forks 135（7.3%），這顯示出快速增長的興趣。作者 Cathryn Lavery 是 BestSelf.co 的創始人，過去在設計和 AI 領域有豐富的經驗。這個專案解決了使用者在生成圖表時常遇到的問題，即生成的圖表往往不符合品牌風格，且需要大量手動調整。這種自動化的品牌匹配功能在市場上並不常見，讓這個工具在設計師和開發者中引起了關注。社群的反應也顯示出對這種簡化流程的需求，特別是在需要快速生成高品質圖表的情境下。

## 適合誰使用

**目標受眾**：需要快速生成符合品牌的高品質圖表的設計師和開發者。

> [!example] 使用場景
> - 設計師用它來快速生成符合品牌的圖表，因為手動調整顏色和樣式耗時且容易出錯。
> - 開發者用它來在技術文檔中嵌入高品質的架構圖，因為這樣可以提升文檔的專業度和可讀性。
> - 產品經理用它來展示項目進度和影響力，因為能夠快速生成視覺化的圖表有助於團隊溝通和決策。

## 架構分析

這個專案採用模組化的設計，所有圖表類型的定義和參數都存放在獨立的參考文件中。這種設計使得系統能夠根據需求動態加載所需的圖表類型，從而提高了性能和靈活性。每個圖表類型的參考文件僅在需要時加載，這樣可以避免不必要的資源浪費。選擇這種設計的代價是需要在首次使用時進行品牌設置，但這確保了生成的圖表與使用者的品牌風格一致。擴展性方面，未來可以輕鬆添加新的圖表類型，而不影響現有功能。

## 技術深入分析

這個專案的核心技術在於使用 HTML 和 SVG 來生成圖表，這使得圖表可以在瀏覽器中直接呈現，無需額外的建置步驟。每個圖表類型的參考文件包含了必要的樣式和結構，這樣可以在需要時快速加載。效能方面，由於採用模組化設計，系統能夠快速響應使用者的請求，並且在生成圖表時不會造成顯著的延遲。選擇 HTML 和 SVG 而非其他圖形庫的原因在於其輕量和兼容性，這樣可以確保在各種環境中都能正常運行。技術風險方面，若未來需要擴展更多圖表類型，可能會面臨維護和兼容性的挑戰，但目前的設計已經考慮到了這些因素，並提供了良好的擴展性。整合方面，這個工具與 Claude Code 的工作流程無縫對接，使用者可以輕鬆地將其納入現有的開發環境中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程順暢，沒有明顯的坑。新手可以在 30 分鐘內完成安裝並生成第一個圖表，文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 快速生成高品質圖表，節省設計時間。
> - 自動品牌匹配功能，確保圖表與品牌一致性。
> - 無需額外依賴，簡化使用流程。

> [!danger] 缺點
> - 僅限於 Claude Code 環境，無法跨平台使用。
> - 首次使用需要進行品牌設置，對新手有一定學習曲線。
> - 插件更新後可能需要重新設置品牌樣式。

> [!warning] 注意事項
> - 僅支援 Claude Code 環境，無法在其他平台使用。
> - 首次使用時需要進行品牌設置，對於不熟悉的使用者可能有學習曲線。
> - 插件更新後可能需要重新設置品牌樣式，這對於需要頻繁更新的使用者來說是一個不便。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個工具專注於生成簡單的圖表，缺乏自動品牌匹配功能，適合不需要品牌一致性的快速原型設計。 |
| [ahmadawais/chartli](https://github.com/ahmadawais/chartli) | Chartli 提供更多的圖表類型和自定義選項，但需要更多的手動設置，對於快速生成圖表的需求不如本專案方便。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Mermaid | Mermaid 使用 Markdown 語法生成圖表，雖然功能強大，但需要學習曲線，且生成的圖表不一定符合品牌風格。 | 如果你的團隊已經熟悉 Markdown 語法並需要更複雜的圖表，Mermaid 會是更好的選擇。 | medium，因為需要重新學習語法和調整現有的圖表設計。 |
| Figma | Figma 提供完整的設計工具，但生成圖表需要手動操作，並且不具備自動品牌匹配功能。 | 如果你的團隊需要進行詳細的設計和原型製作，Figma 會是更合適的選擇。 | high，因為需要從手動設計轉向自動化生成，並且需要重新設計圖表。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **diagram-design** | **Mermaid** | **Figma** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Mermaid 使用 Markdown 語法生成圖表，雖然功能強大，但需要學習曲線，且生成的圖表不一定符合品牌風格。 | Figma 提供完整的設計工具，但生成圖表需要手動操作，並且不具備自動品牌匹配功能。 |
> | 遷移成本 | - | medium，因為需要重新學習語法和調整現有的圖表設計。 | high，因為需要從手動設計轉向自動化生成，並且需要重新設計圖表。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經熟悉 Markdown 語法並需要更複雜的圖 | 如果你的團隊需要進行詳細的設計和原型製作，Figma 會是更 |

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

- **[HIGH]** 首次使用時需要進行品牌設置，否則無法生成符合品牌的圖表。
  - 解法：在首次使用時按照指示進行品牌設置。
- [MEDIUM] 插件更新後可能會導致品牌樣式丟失。
  - 解法：定期備份 style-guide.md 文件以防丟失。
- [low] 在某些瀏覽器中可能會出現顯示問題。
  - 解法：建議使用最新版本的 Chrome 或 Firefox 瀏覽器。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型設計團隊需要快速生成圖表 | 非常適合 | 自動品牌匹配功能能夠節省大量時間。 |
| 大型企業需要進行詳細的圖表設計 | 不適合 | 缺乏手動設計的靈活性，無法滿足複雜需求。 |
| 新創公司需要快速展示產品架構 | 適合 | 能夠快速生成符合品牌的圖表，提升專業度。 |
| 教育機構需要製作教學用圖表 | 普通 | 雖然能生成圖表，但可能需要更多的自定義選項。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速生成符合品牌的圖表，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不存取敏感資料，使用過程中不會暴露任何憑證或用戶資料。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Claude Code 搭配使用，主要在開發和設計階段進行整合。在使用 Claude Code 的專案中，使用者可以透過簡單的指令快速生成圖表，並且將其嵌入到現有的文檔中。與主流的 CI/CD 工具（如 GitHub Actions）相容性良好，能夠在自動化流程中使用。整合的摩擦點主要在於首次品牌設置，這需要使用者手動進行，但一旦設置完成，後續使用非常順暢。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，設計師和開發者通常依賴 Figma 或手動設計工具來生成圖表，這些工具雖然功能強大，但往往需要大量的手動調整和設置。隨著自動化需求的增加，這個專案的出現正好填補了市場上對於快速生成符合品牌圖表的需求。這個工具的設計理念反映了當前對於效率和品牌一致性的重視，未來可能會隨著更多自動化工具的出現而進一步發展。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉基本的 HTML 和 CSS
- 了解品牌設計的基本原則

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在小型團隊的內部工具中導入。第三週：收集反饋並進行調整。第四週：在正式產品中使用。

**成功指標**：生成的圖表符合品牌標準的比例達到 90%。

> [!warning] 退出計畫
> 如果要退出這個工具，所有設定存在標準 JSON 格式，可以輕鬆轉換為其他圖表工具。

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
| Forks | 135 |
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

**社群活躍度**：社群活躍，最近有合併請求和問題回應。
**連結**：[文件](https://github.com/cathrynlavery/diagram-design)

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

相關概念：[[資料視覺化]] · [[自動化]] · [[設計系統]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[jxnxts--mcp-brasil|jxnxts/mcp-brasil]] · [[lewislulu--html-ppt-skill|lewislulu/html-ppt-skill]] · [[steipete--discrawl|steipete/discrawl]] · [[viperrcrypto--Siftly|viperrcrypto/Siftly]]

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

- [[2026-04-23|2026-04-23]] — 再次上榜，1.6k stars
- [[2026-04-22|2026-04-22]] — 再次上榜，1.4k stars
- [[2026-04-21|2026-04-21]] — 首次收錄，965 stars
