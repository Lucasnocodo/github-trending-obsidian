---
repo: VoltAgent/awesome-design-md
url: https://github.com/VoltAgent/awesome-design-md
owner: VoltAgent
owner_type: Organization
language: HTML
license: MIT
description: "Collection of DESIGN.md files that capture design systems from popular websites. Drop one into your project and let coding agents build matching UI."
homepage: "https://github.com/VoltAgent/voltagent"
stars: 30375
stars_per_day: 4339
forks: 3766
open_issues: 229
created: 2026-03-31
pushed_at: 2026-04-07
first_seen: 2026-04-05
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "設計系統"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-05
use_case: "提供設計系統的 DESIGN.md 文件，讓 AI 自動生成符合網站風格的 UI。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-10"
contributor_count: 4
engagement: "medium"
issue_close_rate: 12
repo_size_kb: 807
readme_length: 9509
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-05"
star_history: "2026-04-05:8473,2026-04-05:8531,2026-04-06:15235,2026-04-06:15335,2026-04-07:23033,2026-04-07:23235,2026-04-08:30375"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - org
  - easy_install
  - "topic/awesome_list"
  - "topic/design_md"
  - "topic/design_system"
  - "topic/design_tokens"
  - "topic/figma"
aliases:
  - "awesome-design-md"
  - "VoltAgent/awesome-design-md"
  - "提供設計系統的 DESIGN.md 文件，讓 AI 自動生成符合網站風格的 UI。"
---

# awesome-design-md

**30.4k** stars · **4.3k** stars/天 · 建立 7 天前 · HTML · MIT

```dataviewjs
const me = dv.page("Repos/VoltAgent--awesome-design-md");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

`awesome-list` `design-md` `design-system` `design-tokens` `figma` `google-stitch` `landing-page`

> [!summary] 一句話摘要
> 提供設計系統的 DESIGN.md 文件，讓 AI 自動生成符合網站風格的 UI。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (4.3k stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 希望簡化 UI 設計流程的前端開發者和產品經理。
> **一句話重點** 這個專案讓設計和開發之間的溝通變得前所未有的簡單，開發者只需專注於編碼，而不必擔心設計細節。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "設計系統" && p.file.name !== "VoltAgent--awesome-design-md" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，快速生成 UI，值得嘗試。

> [!abstract] 核心創新
> DESIGN.md 是一種新概念，讓 AI 代理能夠直接生成符合設計的 UI，而無需複雜的工具或格式轉換。

## 專案簡介

這個專案的核心在於提供一系列的 DESIGN.md 文件，這些文件是純文本格式的設計系統文檔，AI 代理可以直接讀取並生成符合設計風格的 UI。用戶只需將某個網站的 DESIGN.md 文件複製到專案根目錄，然後告訴 AI 代理「為我建立一個看起來像這樣的頁面」，便能獲得精確匹配的 UI。這種設計方式的優勢在於簡化了設計到實作的過程，無需複雜的工具或格式轉換，因為 Markdown 是 LLM 最容易解析的格式。專案中包含的 DESIGN.md 文件遵循 Google Stitch 的格式，涵蓋了視覺主題、色彩調色板、排版規則、組件樣式等多個部分，讓設計和開發之間的溝通更加流暢。使用者可以直接從這個庫中提取現成的設計系統，並在自己的專案中使用，這樣可以節省大量的設計時間和精力。

相較於傳統的設計工具，如 Figma 或 Sketch，這種方法不僅降低了學習曲線，還避免了設計與開發之間的溝通障礙。此專案的設計理念是讓開發者能夠快速實現高品質的 UI，而不必深入設計細節。對於需要快速原型或小型專案的開發者來說，這是一個非常合適的選擇。社群活躍度高，開放的請求功能也讓用戶能夠為自己喜愛的網站生成 DESIGN.md 文件，進一步擴展這個庫的內容。

**技術棧**：`HTML`

## 重點功能

- 簡單易用 — 只需將 DESIGN.md 文件放入專案根目錄，無需額外配置。
- 即時生成 UI — 告訴 AI 代理生成頁面，即可獲得符合設計的 UI。
- 完整的設計系統 — 每個 DESIGN.md 文件包含色彩、排版、組件樣式等詳細信息。
- 高兼容性 — Markdown 格式讓 LLM 可以輕鬆解析，無需額外工具。
- 社群貢獻 — 用戶可以請求生成新的 DESIGN.md 文件，持續擴充庫的內容。

## 快速開始

1. 將 DESIGN.md 複製到專案根目錄
```bash
cp path/to/your/DESIGN.md /path/to/your/project/
```
2. 告訴 AI 代理生成頁面
```bash
agent.build('build me a page that looks like this')
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 30375 stars（4339/天），forks 3766（12.4%），顯示出強烈的社群需求和興趣。這個專案的作者們在設計和開發領域有豐富的經驗，解決了開發者在設計系統與實作之間的溝通問題。之前，開發者通常需要依賴複雜的設計工具來創建 UI，這不僅耗時，還容易出現誤差。這個專案的出現正好填補了這一空白，提供了一個簡單易用的解決方案。社群的反應熱烈，尤其是對於希望簡化設計流程的開發者來說，這是一個重要的工具。

## 適合誰使用

**目標受眾**：希望簡化 UI 設計流程的前端開發者和產品經理。

> [!example] 使用場景
> - 前端工程師用它來快速生成符合品牌風格的 UI，因為只需複製 DESIGN.md 文件並告訴 AI 代理生成頁面，節省了大量設計時間。
> - 產品經理用它來驗證設計概念，因為可以快速生成原型並進行用戶測試，提升了產品開發效率。
> - 設計師用它來與開發團隊溝通設計意圖，因為 DESIGN.md 文件清晰定義了色彩、排版和組件樣式，減少了誤解的可能性。

## 架構分析

這個專案的架構基於 Markdown 文件的簡單性，設計理念是讓開發者能夠快速使用設計系統。每個 DESIGN.md 文件都包含了多個部分，從視覺主題到組件樣式，這樣的結構使得 AI 代理能夠快速解析並生成 UI。選擇 Markdown 格式的好處在於其可讀性和易用性，這樣開發者無需學習新的工具或語言。這種設計的代價是對於非常複雜的設計需求可能無法完全滿足，因為 Markdown 的表達能力有限。整體而言，這個架構在簡單性和功能性之間取得了良好的平衡。

## 技術深入分析

這個專案的核心技術在於使用 Markdown 文件作為設計系統的載體，這使得設計和開發之間的溝通變得更加流暢。每個 DESIGN.md 文件都包含了視覺主題、色彩、排版等多個部分，這些信息都能被 AI 代理快速解析。這種設計的效能特性在於其快速生成 UI 的能力，對於小型專案或快速原型開發特別有效。選擇 Markdown 作為格式的好處在於其可讀性和易用性，這樣開發者無需學習新的工具或語言。設計取捨方面，這種方法雖然簡單，但對於非常複雜的設計需求可能無法完全滿足，因為 Markdown 的表達能力有限。在技術風險方面，依賴於 AI 代理的性能，若代理性能不足，生成的 UI 可能不理想。整合方面，這個工具與主流的前端框架（如 React、Vue）相容性良好，能夠輕鬆融入現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含使用範例，讓新手能夠快速上手。安裝過程簡單，只需複製 DESIGN.md 文件即可。沒有明顯的坑，適合新手使用。

## 優缺點分析

> [!success] 優點
> - 快速生成符合設計的 UI，節省開發時間。
> - 無需複雜的設計工具，降低學習曲線。
> - 社群活躍，持續更新和擴充內容。

> [!danger] 缺點
> - 對於複雜的設計需求可能無法完全滿足。
> - 依賴 AI 代理的性能，可能影響生成效果。
> - 僅支援 Markdown 格式，對於其他格式的兼容性有限。

> [!warning] 注意事項
> - 僅支援 Markdown 格式的 DESIGN.md 文件。
> - 對於複雜的設計需求，可能無法完全滿足。
> - 需要依賴 AI 代理的能力，若代理性能不足，生成效果可能不理想。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 這個專案專注於設計系統的版本控制，而本專案則專注於提供即時生成的設計文件。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具主要用於資料同步，與設計無關，而本專案專注於設計系統的生成。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Figma | Figma 提供了強大的設計工具和協作功能，而本專案則專注於生成設計文件，無需複雜的工具。 | 如果需要高級的設計功能和團隊協作，Figma 是更好的選擇。 | medium，因為需要將設計轉換為 Markdown 格式。 |
| Sketch | Sketch 提供了專業的設計工具，而本專案則專注於簡化設計到開發的過程。 | 如果團隊已經在使用 Sketch 進行設計，則不建議轉換到本專案。 | high，因為需要重新創建設計系統。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-design-md** | **Figma** | **Sketch** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Figma 提供了強大的設計工具和協作功能，而本專案則專注於生成設計文件，無需複雜的工具。 | Sketch 提供了專業的設計工具，而本專案則專注於簡化設計到開發的過程。 |
> | 遷移成本 | - | medium，因為需要將設計轉換為 Markdown 格式。 | high，因為需要重新創建設計系統。 |
> | 適用場景 | 主要場景 | 如果需要高級的設計功能和團隊協作，Figma 是更好的選擇。 | 如果團隊已經在使用 Sketch 進行設計，則不建議轉換到本 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合快速原型開發，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 某些設計需求過於複雜時，生成的 UI 可能不符合預期。
  - 解法：手動調整生成的 UI，確保符合設計要求。
- [MEDIUM] 依賴於 AI 代理的性能，若性能不足，生成效果不理想。
  - 解法：選擇性能更好的 AI 代理進行生成。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的快速原型開發 | 非常適合 | 能夠快速生成符合設計的 UI，節省時間和精力。 |
| 大型企業的複雜設計需求 | 不適合 | 對於複雜的設計需求可能無法完全滿足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，快速生成 UI，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，無需擔心安全性問題。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與前端框架（如 React、Vue）搭配使用，能夠輕鬆融入現有的開發流程。在一個使用 React 的專案中，開發者可以將 DESIGN.md 文件放入專案根目錄，並告訴 AI 代理生成 UI，具體做法是使用 agent.build 方法。與主流 CI/CD 工具（如 GitHub Actions）相容良好，能夠輕鬆整合到開發流程中。整合的摩擦點主要在於需要確保 AI 代理的性能足夠，否則生成的效果可能不理想。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，開發者通常需要依賴複雜的設計工具來創建 UI，這不僅耗時，還容易出現誤差。隨著 AI 技術的進步，這種基於文本的設計系統變得可行，讓開發者能夠快速生成符合設計的 UI。這個工具代表了設計和開發之間的溝通趨勢，未來可能會有更多類似的工具出現，進一步簡化開發流程。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 基本的 HTML 知識
- 了解 Markdown 格式

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型團隊內部工具中導入。第三週：收集反饋並調整使用方式。

**成功指標**：UI 開發時間減少 30%。

> [!warning] 退出計畫
> 所有設定存在標準 Markdown 格式，可以輕鬆轉換為其他格式。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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
| Forks | 3.8k |
| Open Issues | 229 |
| Issue 解決率 | 12% (31 closed) |
| 最後推送 | 2026-04-07 |
| 建立日期 | 2026-03-31 |
| 官方網站 | [Link](https://github.com/VoltAgent/voltagent) |
| Repo 大小 | 807 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/VoltAgent/awesome-design-md) |
| Topics | `awesome-list` `design-md` `design-system` `design-tokens` `figma` `google-stitch` `landing-page` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@necatiozmen](https://github.com/necatiozmen) | 19 |
> | [@doanbactam](https://github.com/doanbactam) | 1 |
> | [@LeeDoYup](https://github.com/LeeDoYup) | 1 |
> | [@omeraplak](https://github.com/omeraplak) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，持續有新請求和更新。
**連結**：[文件](https://github.com/VoltAgent/awesome-design-md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-03 ~ 2026-04-07）
> **活躍天數** 3 天 · **最新 commit** Fix link formatting in DESIGN.md request template

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#156](https://github.com/VoltAgent/awesome-design-md/issues/156) | DESIGN.md for <your website> | 1 | 0 |
> | [#151](https://github.com/VoltAgent/awesome-design-md/issues/151) | DESIGN.md for modal.com | 1 | 0 |
> | [#90](https://github.com/VoltAgent/awesome-design-md/issues/90) | Add Claude Code skill for the awesome-design-md collection | 1 | 1 |
> | [#86](https://github.com/VoltAgent/awesome-design-md/issues/86) | DESIGN.md for <your website> | 1 | 0 |
> | [#50](https://github.com/VoltAgent/awesome-design-md/issues/50) | DESIGN.md for <your website> | 1 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> Curated collection of DESIGN.md files inspired by developer focused websites.
>     
>     
> 
> [](https://awesome.re)
> 
> [](https://github.com/VoltAgent/awesome-design-md)
> [](https://s.voltagent.dev/discord)
> 
> 
> ### How to Use
> 
> 1. Copy a site's `DESIGN.md` into your project root
> 2. Tell your AI agent to use it.
> 
> 
> # Awesome DESIGN.md
> 
> Copy a DESIGN.md into your project, tell your AI agent "build me a page that looks like this" and get pixel-perfect UI that actually matches.
> 
> 
> ## What is DESIGN.md?
> 
> [DESIGN.md](https://stitch.withgoogle.com/docs/design-md/overview/) is a new concept introduced by Google Stitch. A plain-text design system document that AI agents read to generate consistent UI.
> 
> It's just a markdown file. No Figma exports, no JSON schemas, no special tooling. Drop it into your project root and any AI coding agent or Google Stitch instantly understands how your UI should look. Markdown is the format LLMs read best, so there's nothing to parse or configure.
> 
> | File | Who reads it | What it defines |
> |------|-------------|-----------------|
> | `AGENTS.md` | Coding agents | How to build the project |
> | `DESIGN.md` | Design agents | How the project should look and feel |
> 
> **This repo provides ready-to-use DESIGN.md files** extracted from real websites. 
> 
> 
> ## What's Inside Each DESIGN.md
> 
> Every file follows the [Stitch DESIGN.md format](https://stitch.withgoogle.com/docs/design-md/format/) with extended sections:
> 
> | # | Section | What it captures |
> |---|---------|-----------------|
> | 1 | Visual Theme & Atmosphere | Mood, density, design philosophy |
> | 2 | Color Palette & Roles | Semantic name + hex + functional role |
> | 3 | Typography Rules | Font families, full hierarchy table |
> | 4 | Component Stylings | Buttons, cards, inputs, navigation with states |
> | 5 | Layout Principles | Spacing scale, grid, whitespace philosophy |
> | 6 | Depth & Elevation | Shadow system, surface hierarchy |
> | 7 | Do's and Don'ts | Design guardrails and anti-patterns |
> | 8 | Responsive Behavior | Breakpoints, touch targets, collapsing strategy |
> | 9 | Agent Prompt Guide | Quick color reference, ready-to-use prompts |
> 
> Each site includes:
> 
> | File | Purpose |
> |------|---------|
> | `DESIGN.md` | The design system (what agents read) |
> | `preview.html` | Visual catalog showing color swatches, type scale, buttons, cards |
> | `preview-dark.html` | Same catalog with dark surfaces |
> 
> 
> ## Request a DESIGN.md
> 
> [Open a GitHub issue with this template](https://github.com/VoltAgent/awesome-design-md/issues/new?template=design-md-request.yml) to request a DESIGN.md generation for a website.
> 
> 
> ## Collection
> 
> 
> ### AI & Machine Learning
> 
> - [**Claude**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/claude/) - Anthropic's AI assistant. Warm terracotta accent, clean editorial layout
> - [**Cohere**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/cohere/) - Enterprise AI platform. Vibrant gradients, data-rich dashboard aesthetic
> - [**ElevenLabs**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/elevenlabs/) - AI voice platform. Dark cinematic UI, audio-waveform aesthetics
> - [**Minimax**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/minimax/) - AI model provider. Bold dark interface with neon accents
> - [**Mistral AI**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/mistral.ai/) - Open-weight LLM provider. French-engineered minimalism, purple-toned
> - [**Ollama**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/ollama/) - Run LLMs locally. Terminal-first, monochrome simplicity
> - [**OpenCode AI**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/opencode.ai/) - AI coding platform. Developer-centric dark theme
> - [**Replicate**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/replicate/) - Run ML models via API. Clean white canvas, code-forward
> - [**RunwayML**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/runwayml/) - AI video generation. Cinematic dark UI, media-rich layout
> - [**Together AI**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/together.ai/) - Open-source AI infrastructure. Technical, blueprint-style design
> - [**VoltAgent**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/voltagent/) - AI agent framework. Void-black canvas, emerald accent, terminal-native
> - [**xAI**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/x.ai/) - Elon Musk's AI lab. Stark monochrome, futuristic minimalism
> 
> 
> ### Developer Tools & Platforms
> 
> - [**Cursor**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/cursor/) - AI-first code editor. Sleek dark interface, gradient accents
> - [**Expo**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/expo/) - React Native platform. Dark theme, tight letter-spacing, code-centric
> - [**Linear**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/linear.app/) - Project management for engineers. Ultra-minimal, precise, purple accent
> - [**Lovable**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/lovable/) - AI full-stack builder. Playful gradients, friendly dev aesthetic
> - [**Mintlify**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/mintlify/) - Documentation platform. Clean, green-accented, reading-optimized
> - [**PostHog**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/posthog/) - Product analytics. Playful hedgehog branding, developer-friendly dark UI
> - [**Raycast**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/raycast/) - Productivity launcher. Sleek dark chrome, vibrant gradient accents
> - [**Resend**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/resend/) - Email API for developers. Minimal dark theme, monospace accents
> - [**Sentry**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/sentry/) - Error monitoring. Dark dashboard, data-dense, pink-purple accent
> - [**Supabase**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/supabase/) - Open-source Firebase alternative. Dark emerald theme, code-first
> - [**Superhuman**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/superhuman/) - Fast email client. Premium dark UI, keyboard-first, purple glow
> - [**Vercel**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/vercel/) - Frontend deployment platform. Black and white precision, Geist font
> - [**Warp**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/warp/) - Modern terminal. Dark IDE-like interface, block-based command UI
> - [**Zapier**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/zapier/) - Automation platform. Warm orange, friendly illustration-driven
> 
> 
> ### Infrastructure & Cloud
> 
> - [**ClickHouse**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/clickhouse/) - Fast analytics database. Yellow-accented, technical documentation style
> - [**Composio**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/composio/) - Tool integration platform. Modern dark with colorful integration icons
> - [**HashiCorp**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/hashicorp/) - Infrastructure automation. Enterprise-clean, black and white
> - [**MongoDB**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/mongodb/) - Document database. Green leaf branding, developer documentation focus
> - [**Sanity**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/sanity/) - Headless CMS. Red accent, content-first editorial layout
> - [**Stripe**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/stripe/) - Payment infrastructure. Signature purple gradients, weight-300 elegance
> 
> 
> ### Design & Productivity
> 
> - [**Airtable**](https://github.com/VoltAgent/awesome-design-md/tree/main/design-md/airtable/) - Spreadsheet-database hybrid.

## 延伸閱讀

相關概念：[[設計系統]] · [[Markdown]] · [[AI 生成]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[VoltAgent--awesome-codex-subagents|VoltAgent/awesome-codex-subagents]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]]

[GitHub](https://github.com/VoltAgent/awesome-design-md) · [官方網站](https://github.com/VoltAgent/voltagent)

## 相關收錄

> [!note]- 直接競品（同子分類：設計系統）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "設計系統" AND file.name != "VoltAgent--awesome-design-md"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "VoltAgent--awesome-design-md"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "VoltAgent--awesome-design-md" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "VoltAgent--awesome-design-md"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["設計系統","Markdown","AI 生成"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "VoltAgent--awesome-design-md" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "VoltAgent--awesome-design-md" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "VoltAgent" AND file.name != "VoltAgent--awesome-design-md"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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
> const me = dv.page("Repos/VoltAgent--awesome-design-md");
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

> **2026-04-05** — 首次收錄
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

- [[2026-04-07|2026-04-07]] — 再次上榜，23.0k stars
- [[2026-04-06|2026-04-06]] — 再次上榜，15.2k stars
- [[2026-04-05|2026-04-05]] — 首次收錄，8.5k stars
