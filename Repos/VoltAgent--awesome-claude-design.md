---
repo: VoltAgent/awesome-claude-design
url: https://github.com/VoltAgent/awesome-claude-design
owner: VoltAgent
owner_type: Organization
language: N/A
license: MIT
description: "Awesome Claude Design: 68 ready-to-use design system inspirations in DESIGN.md format. Drop one in, scaffold a full UI in one shot."
homepage: ""
stars: 1893
stars_per_day: 146
forks: 212
open_issues: 1
created: 2026-04-18
pushed_at: 2026-04-18
first_seen: 2026-04-23
week: "2026-W17"
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
last_reviewed: 2026-04-23
use_case: "提供 68 種即用型設計系統靈感，讓你一鍵生成完整 UI。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-28"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 23
readme_length: 9649
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-23"
star_history: "2026-04-23:1213,2026-04-23:1213,2026-04-24:1412,2026-04-24:1413,2026-04-25:1519,2026-04-25:1521,2026-04-26:1601,2026-04-27:1674,2026-04-28:1743,2026-04-29:1789,2026-04-30:1832,2026-05-01:1874,2026-05-02:1893"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - org
  - easy_install
  - "topic/claude_code"
  - "topic/claude_design"
  - "topic/design_md"
  - "topic/design_system"
  - "topic/figma"
aliases:
  - "awesome-claude-design"
  - "VoltAgent/awesome-claude-design"
  - "提供 68 種即用型設計系統靈感，讓你一鍵生成完整 UI。"
---

# awesome-claude-design

**1.9k** stars · **146** stars/天 · 建立 13 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/VoltAgent--awesome-claude-design");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

`claude-code` `claude-design` `design-md` `design-system` `figma`

> [!summary] 一句話摘要
> 提供 68 種即用型設計系統靈感，讓你一鍵生成完整 UI。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (146 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 13 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成設計系統但不想花太多時間在手動設置的設計團隊。
> **一句話重點** 這個專案展示了如何通過簡單的 Markdown 文件自動生成完整的設計系統，顯著提高設計效率。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/VoltAgent--awesome-claude-design");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "設計系統" && p.file.name !== "VoltAgent--awesome-claude-design" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到快速生成設計系統的效果，值得一試。

> [!abstract] 核心創新
> 通過 `DESIGN.md` 文件自動生成完整的設計系統，無需手動設置。

## 專案簡介

這個專案的核心機制是利用 `DESIGN.md` 文件作為輸入，通過 Claude Design 生成完整的設計系統。使用者只需上傳一個 `DESIGN.md`，Claude 會自動產出包括顏色、字型、元件、預覽卡片及一個可運作的 UI 套件的完整設計包，省去繁瑣的手動設置。這樣的設計不僅提高了效率，還能確保設計的一致性和可重用性。技術上，這個工具依賴於 Claude Design 的 AI 能力，能夠快速解析和應用設計規則，並生成符合品牌視覺的設計元素。相較於傳統的設計工具，這個流程大幅簡化了設計的初始階段，讓設計師能專注於創意而非繁瑣的設定。

與 Figma 等工具相比，這個專案的優勢在於其自動化程度高，並且能夠生成即用的設計系統，而不僅僅是單一畫面。實際使用中，這個工具能夠快速生成設計包，適合需要快速迭代的團隊，特別是初創公司或小型專案。使用者可能會遇到的問題包括 `DESIGN.md` 格式的要求，這可能需要一些學習成本。這個專案目前處於 alpha 階段，建議在非關鍵專案中試用，未來可能會加入更多功能和改進。對於需要快速生成設計系統的團隊，這個工具非常合適，但對於需要高度自定義的設計需求，可能會有所限制。

## 重點功能

- 一鍵生成設計系統 — 上傳 `DESIGN.md` 即可生成完整的設計包，包含顏色、字型、元件等。
- 自動化 CSS 變數 — 生成的 `colors_and_type.css` 包含 CSS 變數和實用類別，便於使用。
- 品牌上下文 — 生成的 `README.md` 包含品牌背景和視覺基礎，方便團隊理解設計理念。
- 即用的 UI 套件 — 生成的 `index.html` 和元件可直接應用於實際的行銷頁面。
- 便攜的技能文件 — 生成的 `SKILL.md` 可用於未來的專案，提升設計的可重用性。

## 快速開始

1. 創建新的設計系統
```bash
前往 https://claude.ai/design/#org，點擊 'Create new design system'，上傳 `DESIGN.md`。
```
2. 從原型開始
```bash
在儀表板創建新的原型，將 `DESIGN.md` 附加在聊天中，輸入 'Create a design system from this DESIGN.md'。
```
3. 檢查生成的設計包
```bash
在設計系統審查標籤中查看生成的設計包。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天內累積 1893 stars（146/天），forks 212（11.2%），顯示出強勁的增長潛力。這個專案由 necatiozmen 開發，解決了設計師在快速生成設計系統時的痛點，之前的工具往往需要大量手動設置。隨著設計自動化需求的增加，這個工具的出現正好填補了市場空白。社群的反應熱烈，可能是因為它簡化了設計流程，讓設計師能更專注於創意而非技術細節。

## 適合誰使用

**目標受眾**：需要快速生成設計系統但不想花太多時間在手動設置的設計團隊。

> [!example] 使用場景
> - 前端工程師用它來快速生成一個新的 UI 設計系統，因為手動設置繁瑣且耗時，這樣可以節省 50% 的設計時間。
> - 設計師用它來從現有的設計靈感中創建完整的設計包，因為這樣可以避免重複工作，快速迭代設計。
> - 產品經理用它來幫助團隊在短時間內產出可用的原型，因為這樣可以加快產品開發流程，提升市場反應速度。

## 架構分析

這個專案的架構基於 Claude Design 的 AI 能力，能夠解析 `DESIGN.md` 文件並生成設計系統。整個過程中，使用者只需上傳一個簡單的 Markdown 文件，系統會自動生成所需的設計元素。這種設計選擇使得使用者能夠快速獲得設計結果，降低了學習曲線。由於依賴於 Claude Design 的 AI，這個架構在處理複雜設計需求時可能會遇到挑戰，特別是在需要高度自定義的情況下。整體來說，這個架構適合快速生成設計系統，但在某些情況下可能無法滿足所有設計需求。

## 技術深入分析

這個專案的核心技術機制是利用 AI 解析 `DESIGN.md` 文件，生成設計系統的各個組件。這種設計模式使得使用者能夠快速獲得所需的設計元素，並且能夠保持設計的一致性。效能方面，這個工具能夠在幾分鐘內生成完整的設計包，適合需要快速迭代的團隊。由於依賴於 Claude Design 的 AI，這個工具在處理複雜設計需求時可能會遇到挑戰，特別是在需要高度自定義的情況下。選擇使用 AI 生成設計系統的好處在於能夠快速適應變化的需求，但也可能帶來設計上的限制。這個工具與主流設計工具的整合難度較低，因為它能夠快速生成可用的設計包，並且不需要額外的配置。整體來看，這個專案在設計自動化的趨勢中具有重要的地位，未來可能會隨著 AI 技術的進步而持續演化。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的使用說明和步驟。安裝過程非常順暢，無需複雜的設置。雖然沒有專門的入門指南，但使用者可以輕鬆上手。文件目前僅提供英文版本，可能對非英語使用者造成一些障礙。

## 優缺點分析

> [!success] 優點
> - 快速生成設計系統，節省時間。
> - 自動化程度高，減少手動設置的需求。
> - 生成的設計包可立即使用，提升工作效率。

> [!danger] 缺點
> - 對於不熟悉 `DESIGN.md` 格式的使用者有學習成本。
> - 生成的設計系統可能無法完全滿足高度自定義的需求。
> - 目前僅支援 Claude Design 平台，限制了使用範圍。

> [!warning] 注意事項
> - 需要遵循 `DESIGN.md` 格式，否則生成的設計包可能不完整。
> - 目前僅支援 Claude Design 平台，無法在其他設計工具中使用。
> - 對於高度自定義的設計需求，可能無法完全滿足。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成角色精靈圖，而本專案專注於整體設計系統的生成。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供設計資源庫，但不具備自動生成設計系統的功能。 |
| [AgriciDaniel/claude-obsidian](https://github.com/AgriciDaniel/claude-obsidian) | 專注於知識管理和筆記，而本專案專注於設計系統的生成。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Figma | Figma 是一個強大的設計工具，支持即時協作，而本專案專注於自動生成設計系統。 | 如果你的團隊需要即時協作和高自定義的設計功能，Figma 更適合。 | medium，因為需要將設計轉換為 `DESIGN.md` 格式。 |
| Sketch | Sketch 提供了豐富的設計工具和插件生態，而本專案則專注於自動化設計系統的生成。 | 如果你的團隊已經在使用 Sketch 並需要更強大的設計工具，則 Sketch 更合適。 | medium，因為需要將設計轉換為 `DESIGN.md` 格式。 |
| Adobe XD | Adobe XD 提供了完整的設計和原型工具，而本專案則專注於自動生成設計系統。 | 如果你的團隊需要強大的設計和原型功能，Adobe XD 更適合。 | medium，因為需要將設計轉換為 `DESIGN.md` 格式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **awesome-claude-design** | **Figma** | **Sketch** | **Adobe XD** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Figma 是一個強大的設計工具，支持即時協作，而本專案專注於自動生成設計系統。 | Sketch 提供了豐富的設計工具和插件生態，而本專案則專注於自動化設計系統的生成。 | Adobe XD 提供了完整的設計和原型工具，而本專案則專注於自動生成設計系統。 |
> | 遷移成本 | - | medium，因為需要將設計轉換為 `DESIGN.md` 格式。 | medium，因為需要將設計轉換為 `DESIGN.md` 格式。 | medium，因為需要將設計轉換為 `DESIGN.md` 格式。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要即時協作和高自定義的設計功能，Figma 更 | 如果你的團隊已經在使用 Sketch 並需要更強大的設計工具 | 如果你的團隊需要強大的設計和原型功能，Adobe XD 更適 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 需要遵循特定的 `DESIGN.md` 格式，否則生成的設計包可能不完整。
  - 解法：確保參考官方的 `DESIGN.md` 格式範本。
- [MEDIUM] 生成的設計系統可能無法完全滿足高度自定義的需求。
  - 解法：在生成後手動調整設計元素。
- [MEDIUM] 目前僅支援 Claude Design 平台，無法在其他設計工具中使用。
  - 解法：考慮使用其他設計工具進行後續調整。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊需要快速生成設計系統 | 非常適合 | 能夠快速生成設計包，節省時間和資源。 |
| 大型企業需要高度自定義的設計系統 | 不適合 | 可能無法滿足特定的設計需求。 |
| 設計師需要快速迭代設計原型 | 非常適合 | 能夠快速生成可用的設計系統，提升工作效率。 |
| 需要與其他設計工具整合的專案 | 普通 | 雖然可以生成設計系統，但整合可能需要額外的手動調整。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到快速生成設計系統的效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不會存取敏感資料，使用時不會對系統造成安全威脅。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 Claude Design 搭配使用，作為設計系統生成的核心工具。在一個使用 Claude Design 的專案中，使用者可以上傳 `DESIGN.md`，然後快速生成設計包，這樣的流程能夠無縫整合到現有的設計工作流中。與主流設計工具如 Figma、Sketch 等的整合相對容易，但需要將設計轉換為 `DESIGN.md` 格式，這可能會帶來一些摩擦點。整體來看，這個工具能夠有效提升設計效率，但在與其他工具的整合上仍需注意格式轉換的問題。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，設計師通常需要手動設置設計系統，這個過程繁瑣且耗時。隨著設計自動化需求的增加，這個工具的出現正好填補了市場空白。AI 技術的進步使得這種自動化設計成為可能，未來可能會隨著 AI 的發展而持續演化。

這個工具代表了設計自動化的趨勢，未來可能會在設計領域中佔據重要地位。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型設計團隊

**前置技能**：
- 熟悉 Markdown 格式
- 了解基本的設計原則

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型團隊中進行內部測試。第三週：收集反饋並進行調整。第四週：在正式專案中開始使用。

**成功指標**：設計生成時間減少 50%，設計一致性提升。

> [!warning] 退出計畫
> 如果要退出這個工具，可以將設計系統轉換為其他設計工具的格式，並保留生成的設計元素。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/VoltAgent--awesome-claude-design");
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
> const me = dv.page("Repos/VoltAgent--awesome-claude-design");
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
| Forks | 212 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-18 |
| 建立日期 | 2026-04-18 |
| Repo 大小 | 23 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/VoltAgent/awesome-claude-design) |
| Topics | `claude-code` `claude-design` `design-md` `design-system` `figma` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@necatiozmen](https://github.com/necatiozmen) | 7 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有更新和討論。
**連結**：[Discord](https://s.voltagent.dev/discord)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-18 ~ 2026-04-18）
> **活躍天數** 1 天 · **最新 commit** update README

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/VoltAgent/awesome-claude-design/issues/4) | Permission to feature a README demo GIF in a LinkedIn promo  | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> A collection of ready-to-use DESIGN.md files that Claude Design expands into a full UI scaffold with one drop.
>     
>     
> 
> [](https://awesome.re)
> 
> [](https://github.com/VoltAgent/awesome-claude-design)
> [](https://s.voltagent.dev/discord)
> 
> 
> ### Option A. Start from a design system
> 
>    Go to [claude.ai/design/#org](https://claude.ai/design/#org), click **Create new design system**, and on the *Set up your design system* screen, upload the `DESIGN.md` under **Add assets**.
> 
> 
> ### Option B. Start from a prototype
>    Go to dashboard, create a new prototype, attach the `DESIGN.md` in the chat, and type: **"Create a design system from this DESIGN.md"**
> 
> Either way, Claude produces a full starter package in minutes:
> 
> - `README.md` with brand context, voice, and visual foundations
> - `colors_and_type.css` with CSS variables, type scale, utility classes
> - Google Fonts substitutes when the brand font is proprietary
> - `preview/` cards for colors, type, spacing, components, and brand
> - A working UI kit (`index.html` + components) applying the system to a real marketing page
> - `SKILL.md`, a portable skill file for future projects
> 
> One markdown file → production-ready design package. No boilerplate, no manual setup.
> 
> 
> # Awesome Claude Design
> 
> Upload any `DESIGN.md` to Claude Design and it scaffolds a full design system (colors, type, components, preview cards, and a working UI kit) in a single shot. 
> 
> Skip the blank-page design brief, grab a design system inspiration that matches the feel you want, and let Claude Design do the scaffolding.
> 
> 
> ## What is Claude Design?
> 
> [Claude Design](https://claude.ai/design) is Anthropic's new design-focused workspace. Instead of generating one-off screens in a chat window, it holds a persistent **design system** for your project: tokens, components, and preview assets you can actually ship, not just swatches in a chat window.
> 
> You give it a starting point (an aesthetic, a vibe, or a `DESIGN.md`), and it scaffolds the system: color tokens, type scale, buttons, cards, nav, and a working UI kit. The output lands in the project's Design System review tab, organized and inspectable, so every new screen you request stays on-system.
> 
> 
> ## What is DESIGN.md?
> 
> [`DESIGN.md`](https://getdesign.md/what-is-design-md) is a single plain-text markdown file that describes a brand's visual language in a format AI agents can actually act on. The concept was first introduced by Google Stitch and built into a real, comparable collection by at 🎨[**getdesign.md**](https://getdesign.md/). 
> 
> > The core idea: keep **token, rule, and rationale in the same file**. A Figma export tells you *what* to use but skips *why*. A brand guideline PDF talks to humans ("approachable yet premium") but is too loose for an agent. `DESIGN.md` sits in the middle. Specific enough for the agent to make its next decision, and carrying the *why* so it can stay on-system when it hits a case the file never covered.
> 
> | File | Who reads it | What it defines |
> |------|-------------|-----------------|
> | `AGENTS.md` | Coding agents | How to build the project |
> | `DESIGN.md` | Design agents (Claude Design, Stitch …) | How the project should look and feel |
> 
> Claude Design can use `DESIGN.md` as its source of truth. Hand it one, and the full starter package falls out the other side.
> 
> 
> ## How it works
> 
> 1. Pick a design system inspiration from the list below, click through to its preview page to inspect the system in detail, then download its `DESIGN.md`.
> 2. Open [Claude Design](https://claude.ai/design). You've got **two ways** to feed it the file:
> 
> 
> ## Collection
> 
> 
> ### AI & LLM Platforms
> 
> - [**Claude**](https://getdesign.md/claude/design-md) - Anthropic's AI assistant. Warm terracotta accent, clean editorial layout
> - [**Cohere**](https://getdesign.md/cohere/design-md) - Enterprise AI platform. Vibrant gradients, data-rich dashboard aesthetic
> - [**ElevenLabs**](https://getdesign.md/elevenlabs/design-md) - AI voice platform. Dark cinematic UI, audio-waveform aesthetics
> - [**Minimax**](https://getdesign.md/minimax/design-md) - AI model provider. Bold dark interface with neon accents
> - [**Mistral AI**](https://getdesign.md/mistral.ai/design-md) - Open-weight LLM provider. French-engineered minimalism, purple-toned
> - [**Ollama**](https://getdesign.md/ollama/design-md) - Run LLMs locally. Terminal-first, monochrome simplicity
> - [**OpenCode AI**](https://getdesign.md/opencode.ai/design-md) - AI coding platform. Developer-centric dark theme
> - [**Replicate**](https://getdesign.md/replicate/design-md) - Run ML models via API. Clean white canvas, code-forward
> - [**RunwayML**](https://getdesign.md/runwayml/design-md) - AI video generation. Cinematic dark UI, media-rich layout
> - [**Together AI**](https://getdesign.md/together.ai/design-md) - Open-source AI infrastructure. Technical, blueprint-style design
> - [**VoltAgent**](https://getdesign.md/voltagent/design-md) - AI agent framework. Void-black canvas, emerald accent, terminal-native
> - [**xAI**](https://getdesign.md/x.ai/design-md) - Elon Musk's AI lab. Stark monochrome, futuristic minimalism
> 
> 
> ### Developer Tools & IDEs
> 
> - [**Cursor**](https://getdesign.md/cursor/design-md) - AI-first code editor. Sleek dark interface, gradient accents
> - [**Expo**](https://getdesign.md/expo/design-md) - React Native platform. Dark theme, tight letter-spacing, code-centric
> - [**Lovable**](https://getdesign.md/lovable/design-md) - AI full-stack builder. Playful gradients, friendly dev aesthetic
> - [**Raycast**](https://getdesign.md/raycast/design-md) - Productivity launcher. Sleek dark chrome, vibrant gradient accents
> - [**Superhuman**](https://getdesign.md/superhuman/design-md) - Fast email client. Premium dark UI, keyboard-first, purple glow
> - [**Vercel**](https://getdesign.md/vercel/design-md) - Frontend deployment platform. Black and white precision, Geist font
> - [**Warp**](https://getdesign.md/warp/design-md) - Modern terminal. Dark IDE-like interface, block-based command UI
> 
> 
> ### Backend, Database & DevOps
> 
> - [**ClickHouse**](https://getdesign.md/clickhouse/design-md) - Fast analytics database. Yellow-accented, technical documentation style
> - [**Composio**](https://getdesign.md/composio/design-md) - Tool integration platform. Modern dark with colorful integration icons
> - [**HashiCorp**](https://getdesign.md/hashicorp/design-md) - Infrastructure automation. Enterprise-clean, black and white
> - [**MongoDB**](https://getdesign.md/mongodb/design-md) - Document database. Green leaf branding, developer documentation focus
> - [**PostHog**](https://getdesign.md/posthog/design-md) - Product analytics. Playful hedgehog branding, developer-friendly dark UI
> - [**Sanity**](https://getdesign.md/sanity/design-md) - Headless CMS. Red accent, content-first editorial layout
> - [**Sentry**](https://getdesign.md/sentry/design-md) - Error monitoring. Dark dashboard, data-dense, pink-purple accent
> - [**Supabase**](https://getdesign.md/supabase/design-md) - Open-source Firebase alternative. Dark emerald theme, code-first
> 
> 
> ### Productivity & SaaS
> 
> - [**Cal.com**](https://getdesign.md/cal/design-md) - Open-source scheduling. Clean neutral UI, developer-oriented simplicity
> - [**Intercom**](https://getdesign.md/intercom/design-md) - Customer messaging. Friendly blue palette, conversational UI patterns
> - [**Linear**](https://getdesign.md/linear.app/design-md) - Project management for engineers. Ultra-minimal, precise, purple accent
> - [**Mintlify**](https://getdesign.md/mintlify/design-md) - Documentation platform. Clean, green-accented, reading-optimized
> - [**Notion**](https://getdesign.md/notion/design-md) - All-in-one workspace. Warm minimalism, serif headings, soft surfaces
> - [**Resend**](https://getdesign.md/resend/design-md) - Email API for developers. Minimal dark theme, monospace accents
> - [**Zapier**](https://getdesign.md/zapier/design-md) - Automation platform. Warm orange, friendly illustration-driven
> 
> 
> ### Design & Creative Tools
> 
> - [**Airtable**](https://getdesign.md/airtable/des

## 延伸閱讀

相關概念：[[設計系統]] · [[自動化設計]] · [[Markdown]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[432539--gpt2api|432539/gpt2api]] · [[VoltAgent--awesome-codex-subagents|VoltAgent/awesome-codex-subagents]] · [[VoltAgent--awesome-design-md|VoltAgent/awesome-design-md]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

[GitHub](https://github.com/VoltAgent/awesome-claude-design)

## 相關收錄

> [!note]- 直接競品（同子分類：設計系統）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "設計系統" AND file.name != "VoltAgent--awesome-claude-design"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "VoltAgent--awesome-claude-design"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "VoltAgent--awesome-claude-design" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "VoltAgent--awesome-claude-design"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["設計系統","自動化設計","Markdown"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "VoltAgent--awesome-claude-design" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/VoltAgent--awesome-claude-design");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "VoltAgent--awesome-claude-design" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "VoltAgent" AND file.name != "VoltAgent--awesome-claude-design"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/VoltAgent--awesome-claude-design");
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
> const me = dv.page("Repos/VoltAgent--awesome-claude-design");
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
> const me = dv.page("Repos/VoltAgent--awesome-claude-design");
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
> const me = dv.page("Repos/VoltAgent--awesome-claude-design");
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
> const me = dv.page("Repos/VoltAgent--awesome-claude-design");
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

> **2026-04-23** — 首次收錄
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

- [[2026-04-25|2026-04-25]] — 再次上榜，1.5k stars
- [[2026-04-24|2026-04-24]] — 再次上榜，1.4k stars
- [[2026-04-23|2026-04-23]] — 首次收錄，1.2k stars
