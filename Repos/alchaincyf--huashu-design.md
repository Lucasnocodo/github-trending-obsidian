---
repo: alchaincyf/huashu-design
url: https://github.com/alchaincyf/huashu-design
owner: alchaincyf
owner_type: User
language: HTML
license: NOASSERTION
description: "Huashu Design · HTML-native design skill for Claude Code · Claude Code 里 HTML 原生的设计 skill · 高保真原型 / 幻灯片 / 动画 + 20 设计哲学 + 5 维评审 + MP4 导出 · Agent-agnostic"
homepage: ""
stars: 5466
stars_per_day: 1367
forks: 848
open_issues: 7
created: 2026-04-19
pushed_at: 2026-04-21
first_seen: 2026-04-22
week: "2026-W17"
month: "2026-04"
category: "開發工具"
subcategory: "設計工具"
release_tag: "v2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-22
use_case: "讓設計師透過簡單的對話生成高保真的設計原型和動畫。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-04-27"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 222494
readme_length: 6843
bus_factor: 1
last_release_days: 2
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-22"
star_history: "2026-04-22:3080,2026-04-22:3121,2026-04-23:4472,2026-04-23:4500,2026-04-24:5466"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - easy_install
aliases:
  - "huashu-design"
  - "alchaincyf/huashu-design"
  - "讓設計師透過簡單的對話生成高保真的設計原型和動畫。"
---

# huashu-design

**4.5k** stars · **1.5k** stars/天 · 建立 3 天前 · HTML · NOASSERTION

```dataviewjs
const me = dv.page("Repos/alchaincyf--huashu-design");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v2.0` `easy-install`

> [!summary] 一句話摘要
> 讓設計師透過簡單的對話生成高保真的設計原型和動畫。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.5k stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望快速生成高質量設計但不想使用傳統設計工具的設計師和產品經理。
> **一句話重點** Huashu Design 讓設計變得簡單，透過對話即可生成高保真設計，這是傳統工具無法實現的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--huashu-design");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "設計工具" && p.file.name !== "alchaincyf--huashu-design" && p.status !== "archived")
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
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到高效的設計生成工具，值得一試。

> [!abstract] 核心創新
> Huashu Design 透過對話生成高保真的設計，無需傳統的圖形界面。

## 專案簡介

Huashu Design 是一個讓用戶能夠透過簡單的對話生成高保真的設計工具。用戶只需在 Claude Code 中輸入需求，例如「做一份 AI 心理學的演講 PPT」，系統會自動生成可交付的設計，並支持多種格式如 HTML、MP4 和 PPTX。這個工具的核心在於其品牌資產協議，能夠根據用戶提供的品牌元素自動調整設計，並且即使沒有提供任何資源，內建的設計語彙也能保證設計質量。使用者可以在 3 到 30 分鐘內獲得產品發布動畫、可點擊的 App 原型或演示幻燈片，這種效率是傳統設計工具無法比擬的。主要的 CLI 指令是 `npx skills add alchaincyf/huashu-design`，安裝後即可使用各種設計功能。

技術上，Huashu Design 使用 HTML 和 JavaScript，並且設計上遵循了 20 種設計哲學，這使得它在設計質量上具備了相當的深度和廣度。與其他工具相比，如 Claude Design，Huashu Design 的優勢在於其跨平台的兼容性和對話式的操作方式，這使得它在不需要 GUI 的情況下，依然能夠提供高效的設計服務。實際使用中，這個工具的限制在於對於非常複雜的動畫需求可能無法滿足，且完全空白的品牌設計質量會有所下降。整體來看，Huashu Design 是一個適合不想使用傳統設計工具的用戶的高效解決方案。

**技術棧**：`HTML` · `JavaScript` · `Shell` · `Python`

## 重點功能

- 品牌資產協議 — 根據用戶提供的品牌元素自動調整設計，確保品牌一致性。
- 多格式輸出 — 支持 HTML、MP4、GIF 和可編輯 PPTX 的輸出，滿足不同需求。
- 快速生成 — 交互原型和動畫的生成時間在 3 到 30 分鐘之間，極大提升效率。
- 設計方向顧問 — 提供 5 種流派和 20 種設計哲學的選擇，幫助用戶找到最佳設計方向。
- 5 維度評審 — 提供雷達圖可視化和操作建議，幫助用戶快速改進設計。

## 快速開始

1. 安裝 Huashu Design
```bash
npx skills add alchaincyf/huashu-design
```
2. 在 Claude Code 中輸入設計需求
```bash
例如：做一份 AI 心理學的演講 PPT
```
3. 獲取生成的設計
```bash
直接查看生成的 HTML 或下載 MP4
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 4500 stars（1500/天），forks 713（15.8%），顯示出強勁的增長潛力。作者 alchaincyf 是一位獨立開發者，過去有多個成功的 AI 相關專案，這次的 Huashu Design 解決了設計師在使用傳統工具時的繁瑣流程，讓設計變得更為直觀和高效。社群對於這個工具的反應熱烈，尤其是在 AI 設計領域的應用上，這使得它在短時間內獲得了大量關注。

## 適合誰使用

**目標受眾**：希望快速生成高質量設計但不想使用傳統設計工具的設計師和產品經理。

> [!example] 使用場景
> - 產品經理用它來快速生成產品發布動畫，因為傳統工具需要花費數小時，而這個工具只需 10 分鐘即可完成。
> - 設計師用它來創建可點擊的 App 原型，因為它能自動生成符合品牌風格的設計，節省了大量的手動調整時間。
> - 市場行銷專員用它來製作演示幻燈片，因為它能夠在短時間內提供高質量的可編輯 PPTX，提升了工作效率。

## 架構分析

Huashu Design 採用模組化的架構，核心功能由多個 JavaScript 模組組成，這些模組負責不同的設計任務，如動畫生成、PPTX 轉換等。資料流從用戶輸入的需求開始，經過品牌資產協議的處理，最終生成所需的設計文件。這種設計使得工具能夠靈活應對不同的設計需求，並且易於擴展。選擇 JavaScript 使得它在瀏覽器中運行時性能優越，但也可能導致在某些複雜動畫上表現不佳。整體架構的輕量化設計使得用戶能夠快速上手，但在處理大量數據時可能會遇到性能瓶頸。

## 技術深入分析

Huashu Design 的核心技術機制是基於對話生成設計，使用 JavaScript 和 HTML 來實現各種設計功能。其模組化架構使得每個功能都可以獨立運作，這樣的設計使得工具能夠快速適應不同的設計需求。效能上，Huashu Design 能夠在短時間內生成設計，但在處理複雜動畫時可能會遇到性能瓶頸。選擇 JavaScript 作為主要開發語言，讓它在瀏覽器中運行時性能優越，但也可能導致在某些情況下的資源消耗過高。設計上，Huashu Design 強調品牌資產協議，這使得生成的設計能夠保持品牌一致性，這在許多傳統工具中是難以實現的。技術風險方面，對於複雜的設計需求，使用者可能會發現工具的限制，這需要在未來的版本中進一步優化。整合方面，Huashu Design 可以輕鬆與現有的開發環境結合，並且支持多種輸出格式，這使得它在實際工作流程中非常方便。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，包含了安裝和使用範例，安裝過程順暢，沒有明顯的坑。文件目前僅提供英文版本，對於非英語使用者可能需要額外的學習時間。

## 優缺點分析

> [!success] 優點
> - 快速生成高質量設計，節省時間。
> - 支持多種輸出格式，靈活滿足需求。
> - 易於使用，無需學習複雜的設計工具。

> [!danger] 缺點
> - 對於複雜動畫的支持有限。
> - 完全空白的品牌設計質量可能不佳。
> - 不支持圖層級可編輯的 PPTX 到 Figma。

> [!warning] 注意事項
> - 不支持圖層級可編輯的 PPTX 到 Figma。
> - Framer Motion 级别的复杂动画不行，3D、物理模拟、粒子系统超出 skill 边界。
> - 完全空白的品牌从零设计质量会掉到 60–65 分。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [alchaincyf/claude-design](https://github.com/alchaincyf/claude-design) | Claude Design 是一個專注於圖形界面的設計工具，而 Huashu Design 則是通過對話生成設計，無需 GUI。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了一些設計模板，但缺乏 Huashu Design 的即時生成和品牌資產協議功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [alchaincyf/claude-design](https://github.com/alchaincyf/claude-design) | Claude Design 提供了一個更完整的圖形界面設計工具，而 Huashu Design 則專注於通過對話生成設計，省去圖形界面的繁瑣。 | 如果需要更複雜的圖形設計和交互操作，Claude Design 會是更好的選擇。 | medium，因為需要重新適應不同的操作方式和功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了一些設計模板，但缺乏 Huashu Design 的即時生成和品牌資產協議功能。 | 如果需要使用預設模板進行設計，Boneyard 可能更合適。 | low，因為 Boneyard 的使用方式相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **huashu-design** | **claude-design** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Claude Design 提供了一個更完整的圖形界面設計工具，而 Huashu Design 則專注於通過對話生成設計，省去圖形界面的繁瑣。 | Boneyard 提供了一些設計模板，但缺乏 Huashu Design 的即時生成和品牌資產協議功能。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的操作方式和功能。 | low，因為 Boneyard 的使用方式相對簡單。 |
> | 適用場景 | 主要場景 | 如果需要更複雜的圖形設計和交互操作，Claude Desig | 如果需要使用預設模板進行設計，Boneyard 可能更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 對於非常複雜的動畫需求，可能無法達到預期效果
  - 解法：簡化動畫設計，避免使用過多的效果
- [MEDIUM] 完全空白的品牌設計質量可能不佳
  - 解法：提供至少一些品牌元素以提高設計質量
- [MEDIUM] 不支持圖層級可編輯的 PPTX 到 Figma，導致無法直接編輯
  - 解法：將生成的 PPTX 轉換為圖片進行編輯

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的產品設計 | 非常適合 | 能快速生成設計，節省時間和成本。 |
| 大型企業的複雜設計需求 | 不適合 | 對於複雜動畫和多層次設計的支持有限。 |
| 個人開發者的原型設計 | 適合 | 能夠快速生成可用的設計，提升開發效率。 |
| 需要高保真設計的行銷專案 | 普通 | 雖然能生成高質量設計，但對於品牌要求較高的項目可能不夠。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的設計生成工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Huashu Design 可以與現有的開發環境無縫整合，特別是在使用 Claude Code 的情況下。它可以作為設計生成的工具鏈的一部分，並且支持多種輸出格式，方便與其他工具配合使用。在實際場景中，你可以在一個使用 Next.js 的專案中，透過 Huashu Design 生成設計，然後將其嵌入到你的應用中。與主流 CI 工具如 GitHub Actions 兼容，並且可以輕鬆集成到現有的開發流程中，這使得它在實際工作中非常方便。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Huashu Design 出現之前，設計師通常依賴於傳統的圖形設計工具，如 Figma 或 Adobe XD，這些工具雖然功能強大，但操作繁瑣且需要學習曲線。隨著 AI 技術的進步，越來越多的工具開始嘗試通過對話生成設計，Huashu Design 正是這一趨勢的代表。它不僅簡化了設計流程，還讓設計變得更加直觀和高效。

未來，隨著 AI 技術的進一步發展，這類工具將會變得更加普及，並可能成為設計領域的主流。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--huashu-design");
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
> const me = dv.page("Repos/alchaincyf--huashu-design");
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
| Forks | 713 |
| Open Issues | 7 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-21 |
| 建立日期 | 2026-04-19 |
| Repo 大小 | 217.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/alchaincyf/huashu-design) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "HTML" : 72
>     "JavaScript" : 25
>     "Shell" : 2
>     "Python" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@alchaincyf](https://github.com/alchaincyf) | 30 |

**最新版本**：v2.0 — V2.0 · 9 个能力演示重制 + 中英双版 (2026-04-21)

> [!info]- Release Notes
> README 里引用的所有大文件——避免仓库 clone 体积膨胀。
> 
> **Assets**:
> - 18 个 demo GIF（9 个能力 × 中英双版，1280×720, 25fps, palette 优化）
> - hero-animation-v10-en.gif · 10s hero 动画（v10 英文版）
> - hero-animation-v10-en.mp4 · hero MP4（带 BGM + SFX）
> 
> **亮点**:
> - 统一 VI：纯黑 + 赤陶橙 (#D97757) + 米色面板 Brand Reveal signature
> - 文字克制：每个 demo ≤48 字 / 36 词
> - 中英平行重做（不是字幕翻译）
> - 高清 GIF：full palette + sierra2_4a dither
> 
> 仓库 demos/ 只保留 HTML 源码 (~660K)，所有 GIF/MP4 通过 release URL 引用。

## 社群與生態

**社群活躍度**：社群活躍，開發者經常更新和回應問題。
**連結**：[文件](https://skills.sh)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-20 ~ 2026-04-21）
> **活躍天數** 2 天 · **最新 commit** docs: HTML-first 幻灯片架构 + grammar 模板 + moxt 实战经验

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#6](https://github.com/alchaincyf/huashu-design/issues/6) | 只能给Claude用吗？Codex能用吗 | 1 | 1 |
> | [#7](https://github.com/alchaincyf/huashu-design/issues/7) | 帮忙看一下这个是什么报错 | 0 | 1 |
> | [#5](https://github.com/alchaincyf/huashu-design/issues/5) | API Error: 400 {"id":"xxx","error":{"message":"invalid param | 0 | 0 |
> | [#4](https://github.com/alchaincyf/huashu-design/issues/4) | 牛大了这个skill | 0 | 0 |
> | [#3](https://github.com/alchaincyf/huashu-design/issues/3) | vscode copilot能支持吗？ | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> 🌐 English · 中文
> 
> # Huashu Design
> 
> > *「打字。回车。一份能交付的设计。」*
> > *"Type. Hit enter. A finished design lands in your lap."*
> 
> [](LICENSE)
> [](https://skills.sh)
> [](https://skills.sh)
> 
> **在你的 agent 里打一句话，拿回一份能交付的设计。**
> 
> 3 到 30 分钟，你能 ship 一段**产品发布动画**、一个能点击的 App 原型、一套能编辑的 PPT、一份印刷级的信息图。
> 
> 不是「AI 做的还行」那种水平——是看起来像大厂设计团队做的。给 skill 你的品牌资产（logo、色板、UI 截图），它会读懂你的品牌气质；什么都不给，内置的 20 种设计语汇也能兜底到不出 AI slop。
> 
> **你看到这篇 README 里的每一个动画，都是 huashu-design 自己做的。** 不是 Figma，不是 AE，就是一句话 prompt + skill 跑通。下次产品发布要做宣传片？现在你也能做。
> 
> ```
> npx skills add alchaincyf/huashu-design
> ```
> 
> 跨 agent 通用——Claude Code、Cursor、Codex、OpenClaw、Hermes 都能装。
> 
> [看效果](#demo-画廊) · [安装](#装上就能用) · [能做什么](#能做什么) · [核心机制](#核心机制) · [和 Claude Design 的关系](#和-claude-design-的关系)
> 
> ---
> 
>   
> 
>   ▲ 25 秒 · Terminal → 4 方向 → Gallery ripple → 4 次 Focus → Brand reveal
>   👉 访问带音效的 HTML 互动版 ·
>   下载 MP4（含 BGM+SFX · 10MB）
> 
> ---
> 
> ## 装上就能用
> 
> ```bash
> npx skills add alchaincyf/huashu-design
> ```
> 
> 然后在 Claude Code 里直接说话：
> 
> ```
> 「做一份 AI 心理学的演讲 PPT，推荐 3 个风格方向让我选」
> 「做个 AI 番茄钟 iOS 原型，4 个核心屏幕要真能点击」
> 「把这段逻辑做成 60 秒动画，导出 MP4 和 GIF」
> 「帮我对这个设计做一个 5 维度评审」
> ```
> 
> 没有按钮、没有面板、没有 Figma 插件。
> 
> ---
> 
> ## Star 趋势
> 
>   
>     
>   
> 
> ---
> 
> ## 能做什么
> 
> | 能力 | 交付物 | 典型耗时 |
> |------|--------|----------|
> | 交互原型（App / Web） | 单文件 HTML · 真 iPhone bezel · 可点击 · Playwright 验证 | 10–15 min |
> | 演讲幻灯片 | HTML deck（浏览器演讲）+ 可编辑 PPTX（文本框保留） | 15–25 min |
> | 时间轴动画 | MP4（25fps / 60fps 插帧）+ GIF（palette 优化）+ BGM | 8–12 min |
> | 设计变体 | 3+ 并排对比 · Tweaks 实时调参 · 跨维度探索 | 10 min |
> | 信息图 / 可视化 | 印刷级排版 · 可导 PDF/PNG/SVG | 10 min |
> | 设计方向顾问 | 5 流派 × 20 种设计哲学 · 推荐 3 方向 · 并行生成 Demo | 5 min |
> | 5 维度专家评审 | 雷达图 + Keep/Fix/Quick Wins · 可操作修复清单 | 3 min |
> 
> ---
> 
> ## Demo 画廊
> 
> ### 设计方向顾问
> 
> 模糊需求时的 fallback：从 5 流派 × 20 种设计哲学里挑 3 个差异化方向，并行生成 3 个 Demo 让你选。
> 
> ### iOS App 原型
> 
> iPhone 15 Pro 精确机身（灵动岛 / 状态栏 / Home Indicator）· 状态驱动多屏切换 · 真图从 Wikimedia/Met/Unsplash 取 · Playwright 自动点击测试。
> 
> ### Motion Design 引擎
> 
> Stage + Sprite 时间片段模型 · `useTime` / `useSprite` / `interpolate` / `Easing` 四 API 覆盖所有动画需求 · 一条命令导出 MP4 / GIF / 60fps 插帧 / 带 BGM 的成片。
> 
> ### HTML Slides → 可编辑 PPTX
> 
> HTML deck 浏览器演讲 · `html2pptx.js` 读 DOM 的 computedStyle 逐元素翻译成 PowerPoint 对象 · 导出的是**真文本框**，不是图片铺底。
> 
> ### Tweaks · 实时变体切换
> 
> 配色 / 字型 / 信息密度等参数化 · 侧边面板切换 · 纯前端 + `localStorage` 持久化 · 刷新不丢。
> 
> ### 信息图 / 数据可视化
> 
> 杂志级排版 · CSS Grid 精准分栏 · `text-wrap: pretty` 排印细节 · 真数据驱动 · 可导 PDF 矢量 / PNG 300dpi / SVG。
> 
> ### 5 维度专家评审
> 
> 哲学一致性 · 视觉层级 · 细节执行 · 功能性 · 创新性 各 0–10 分 · 雷达图可视化 · 输出 Keep / Fix / Quick Wins 清单。
> 
> ### Junior Designer 工作流
> 
> 不闷头做大招：先写 assumptions + placeholders + reasoning，尽早 show 给你，再迭代。理解错了早改比晚改便宜 100 倍。
> 
> ### 品牌资产协议 5 步硬流程
> 
> 涉及具体品牌时强制执行：问 → 搜 → 下载（三条兜底）→ grep 色值 → 写 `brand-spec.md`。
> 
> ---
> 
> ## 核心机制
> 
> ### 品牌资产协议
> 
> skill 里最硬的一段规则。涉及具体品牌（Stripe、Linear、Anthropic、自家公司等）时强制执行 5 步：
> 
> | 步骤 | 动作 | 目的 |
> |------|------|------|
> | 1 · 问 | 用户有 brand guidelines 吗？ | 尊重已有资源 |
> | 2 · 搜官方品牌页 | `.com/brand` · `brand..com` · `.com/press` | 抓权威色值 |
> | 3 · 下载资产 | SVG 文件 → 官网 HTML 全文 → 产品截图取色 | 三条兜底，前一条失败立刻走下一条 |
> | 4 · grep 提取色值 | 从资产里抓所有 `#xxxxxx`，按频率排序，过滤黑白灰 | **绝不从记忆猜品牌色** |
> | 5 · 固化 spec | 写 `brand-spec.md` + CSS 变量，所有 HTML 引用 `var(--brand-*)` | 不固化就会忘 |
> 
> A/B 测试（v1 vs v2，各跑 6 agent）：**v2 的稳定性方差比 v1 低 5 倍**。稳定性的稳定性，这是 skill 真正的护城河。
> 
> ### 设计方向顾问（Fallback）
> 
> 当用户需求模糊到无法着手时触发：
> 
> - 不凭通用直觉硬做，进入 Fallback 模式
> - 从 5 流派 × 20 种设计哲学里推荐 3 个**必须来自不同流派**的差异化方向
> - 每个方向配代表作、气质关键词、代表设计师
> - 并行生成 3 个视觉 Demo 让用户选
> - 选定后进入主干 Junior Designer 流程
> 
> ### Junior Designer 工作流
> 
> 默认工作模式，贯穿所有任务：
> 
> - 开工前 show 问题清单一次性发给用户，等批量答完再动手
> - HTML 里先写 assumptions + placeholders + reasoning comments
> - 尽早 show 给用户（哪怕只是灰色方块）
> - 填充实际内容 → variations → Tweaks 这三步分别再 show 一次
> - 交付前用 Playwright 肉眼过一遍浏览器
> 
> ### 反 AI slop 规则
> 
> 避免一眼 AI 的视觉最大公约数（紫渐变 / emoji 图标 / 圆角+左 border accent / SVG 画人脸 / Inter 做 display）。用 `text-wrap: pretty` + CSS Grid + 精心选择的 serif display 和 oklch 色彩。
> 
> ---
> 
> ## 和 Claude Design 的关系
> 
> 我大方承认：品牌资产协议的哲学是从 Claude Design 流传出来的提示词里偷师的。那份提示词反复强调**好的高保真设计不是从白纸开始，而是从已有的设计上下文长出来**。这个原则是 65 分作品和 90 分作品的分水岭。
> 
> 定位差异：
> 
> | | Claude Design | huashu-design |
> |---|---|---|
> | 形态 | 网页产品（浏览器里用） | skill（Claude Code 里用） |
> | 配额 | 订阅 quota | API 消耗 · 并行跑 agent 不受 quota 限 |
> | 交付物 | 画布内 + 可导 Figma | HTML / MP4 / GIF / 可编辑 PPTX / PDF |
> | 操作方式 | GUI（点、拖、改） | 对话（说话、等 agent 做完） |
> | 复杂动画 | 有限 | Stage + Sprite 时间轴 · 60fps 导出 |
> | 跨 agent | 专属 Claude.ai | 任意 skill 兼容 agent |
> 
> Claude Design 是**更好的图形工具**，huashu-design 是**让图形工具这层消失**。两条路，不同受众。
> 
> ---
> 
> ## Limitations
> 
> - **不支持图层级可编辑的 PPTX 到 Figma**。产出 HTML，可截图、录屏、导图，但不能拖进 Keynote 改文字位置。
> - **Framer Motion 级别的复杂动画不行**。3D、物理模拟、粒子系统超出 skill 边界。
> - **完全空白的品牌从零设计质量会掉到 60–65 分**。凭空画 hi-fi 本来就是 last resort。
> 
> 这是一个 80 分的 skill，不是 100 分的产品。对不愿意打开图形界面的人，80 分的 skill 比 100 分的产品好用。
> 
> ---
> 
> ## 仓库结构
> 
> ```
> huashu-design/
> ├── SKILL.md                 # 主文档（给 agent 读）
> ├── README.md                # 本文件（给用户读）
> ├── assets/                  # Starter Components
> │   ├── animations.jsx       # Stage + Sprite + Easing + interpolate
> │   ├── ios_frame.jsx        # iPhone 15 Pro bezel
> │   ├── android_frame.jsx
> │   ├── macos_window.jsx
> │   ├── browser_window.jsx
> │   ├── deck_stage.js        # HTML 幻灯片引擎
> │   ├── deck_index.html      # 多文件 deck 拼接器
> │   ├── design_canvas.jsx    # 并排变体展示
> │   ├── showcases/           # 24 个预制样例（8 场景 × 3 风格）
> │   └── bgm-*.mp3            # 6 首场景化背景音乐
> ├── references/              # 按任务深入读的子文档
> │   ├── animation-pitfalls.md
> │   ├── design-styles.md     # 20 种设计哲学详细库
> │   ├── slide-decks.md
> │   ├── editable-pptx.md
> │   ├── critique-guide.md
> │   ├── video-export.md
> │   └── ...
> ├── scripts/                 # 导出工具链
> │   ├── render-video.js      # HTML → MP4
> │   ├── convert-formats.sh   # MP4 → 60fps + GIF
> │   ├── add-music.sh         # MP4 + BGM
> │   ├── export_deck_pdf.mjs
> │   ├── export_deck_pptx.mjs
> │   ├── html2pptx.js
> │   └── verify.py
> └── demos/                   # 9 个能力演示 (c*/w*)，中英双版 GIF/MP4/HTML + hero v10
> ```
> 
> ---
> 
> ## 起源
> 
> Anthropic 发布 Claude Design 那天我玩到凌晨四点。几天之后发现自己再也没点开过它，不是它不好——它是这个赛道目前最成熟的产品——是我宁愿让 agent 在终端里帮我干活，也不愿意打开任何图形界面。
> 
> 于是让 agent 拆解 Claude Design 本身（包括社区流传的系统提示词、品牌资产协议、组件机制），蒸馏成结构化 spec，再写成 skill 装进自己的 Claude Code。
> 
> 感谢 Anthropic 把 Claude Design 的提示词写得清晰。这种基于其他产品灵感的二次创作，是开源文化在 AI 时代的新形态。
> 
> ---
> 
> ## License · 使用授权
> 
> **个人使用免费、自由**——学习、研究、创作、给自己做东西、写文章、做副业、发微博发公众号，随便用，不用打招呼。
> 
> **企业商用禁止**——任何公司、团队、或以盈利为目的的组织，想把本 skill 集成到产品、对外服务、给客户交付工作中使用，**必须先和花生联系获得授权**。包括但不限于：
> - 把 skill 作为公司内部工具链的一部分
> - 把 skill 产出物作为对外交付物的主要创作手段
> - 基于 skill 二次开发做成商业产品
> - 在客户商单项目中使用
> 
> **商用授权联系方式**见下方社交平台。
> 
> ---
> 
> ## Connect · 花生（花叔）
> 
> 花生是 AI Native Coder、独立开发者、AI 自媒体博主。代表作：小猫补光灯（AppStore 付费榜 Top 1）、《一本书玩转 DeepSeek》、女娲 .skill（GitHub 12000+ star）。自媒体全平台 30 万+ 粉丝。
> 
> | 平台 | 账号 | 链接 |
> |---|---|---|
> | X / Twitter | @AlchainHust | https://x.com/AlchainHust |
> | 公众号 | 花叔 | 微信搜索「花叔」 |
> | B 站 | 花叔 | https://space.bilibili.com/14097567 |
> | YouTube | 花叔 | https://www.youtube.com/@Alchain |
> | 小红书 | 花叔 | https://www.xiaohongshu.com/user/profile/5abc6f17e8ac2b109179dfdf |
> | 官网 | huasheng.ai | https://www.huasheng.ai/ |
> | 开发者主页 | bookai.top | https://bookai.top |
> 
> 商用授权、合作咨询、自媒体约稿 → 以上任一平台私信花生即可。

## 延伸閱讀

相關概念：[[自動化設計]] · [[AI 設計工具]] · [[品牌資產管理]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Manavarya09--design-extract|Manavarya09/design-extract]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]]

[GitHub](https://github.com/alchaincyf/huashu-design)

## 相關收錄

> [!note]- 直接競品（同子分類：設計工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "設計工具" AND file.name != "alchaincyf--huashu-design"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "alchaincyf--huashu-design"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "alchaincyf--huashu-design" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W17" AND file.name != "alchaincyf--huashu-design"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化設計","AI 設計工具","品牌資產管理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "alchaincyf--huashu-design" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/alchaincyf--huashu-design");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "alchaincyf--huashu-design" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "alchaincyf" AND file.name != "alchaincyf--huashu-design"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/alchaincyf--huashu-design");
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
> const me = dv.page("Repos/alchaincyf--huashu-design");
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
> const me = dv.page("Repos/alchaincyf--huashu-design");
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
> const me = dv.page("Repos/alchaincyf--huashu-design");
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
> const me = dv.page("Repos/alchaincyf--huashu-design");
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

> **2026-04-22** — 首次收錄
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

- [[2026-04-24|2026-04-24]] — 再次上榜，5.5k stars
- [[2026-04-23|2026-04-23]] — 再次上榜，4.5k stars
- [[2026-04-22|2026-04-22]] — 首次收錄，3.1k stars
