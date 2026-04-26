---
repo: alchaincyf/huashu-design
url: https://github.com/alchaincyf/huashu-design
owner: alchaincyf
owner_type: User
language: HTML
license: NOASSERTION
description: "Huashu Design · HTML-native design skill for Claude Code · Claude Code 里 HTML 原生的设计 skill · 高保真原型 / 幻灯片 / 动画 + 20 设计哲学 + 5 维评审 + MP4 导出 · Agent-agnostic"
homepage: ""
stars: 6521
stars_per_day: 1087
forks: 992
open_issues: 5
created: 2026-04-19
pushed_at: 2026-04-25
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
use_case: "讓使用者透過簡單的對話生成高保真的設計原型和動畫，省去繁瑣的設計流程。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-04-29"
contributor_count: 1
engagement: "medium"
issue_close_rate: 50
repo_size_kb: 222380
readme_length: 7969
bus_factor: 1
last_release_days: 5
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-22"
star_history: "2026-04-22:3080,2026-04-22:3121,2026-04-23:4472,2026-04-23:4500,2026-04-24:5466,2026-04-24:5493,2026-04-25:6096,2026-04-25:6103,2026-04-26:6518,2026-04-26:6521"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - easy_install
aliases:
  - "huashu-design"
  - "alchaincyf/huashu-design"
  - "讓使用者透過簡單的對話生成高保真的設計原型和動畫，省去繁瑣的設計流程。"
---

# huashu-design

**6.5k** stars · **1.1k** stars/天 · 建立 6 天前 · HTML · NOASSERTION

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
> 讓使用者透過簡單的對話生成高保真的設計原型和動畫，省去繁瑣的設計流程。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.1k stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要快速生成高保真設計的開發者和設計師，尤其是在產品發布和市場推廣階段。
> **一句話重點** Huashu Design 讓設計變得如此簡單，任何人都能透過簡單的對話生成高質量的設計。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速生成高保真設計的效果，值得投入。

> [!abstract] 核心創新
> Huashu Design 透過對話式操作實現高保真設計的自動生成，省去傳統設計工具的繁瑣步驟。

## 專案簡介

Huashu Design 是一個基於對話的設計工具，使用者只需輸入簡單的指令，就能生成高保真的設計交付物，如產品動畫、可點擊的應用原型和可編輯的 PPT。核心機制是利用品牌資產協議，讓使用者提供品牌元素後，系統能夠自動生成符合品牌風格的設計。使用者可以透過 `npx skills add alchaincyf/huashu-design` 安裝並開始使用，並在 Claude Code 中直接進行對話式操作。這個工具的賣點在於其能夠快速生成高質量的設計，通常只需 3 到 30 分鐘，這對於需要快速迭代的產品開發者尤其有用。技術上，Huashu Design 使用 HTML 和 JavaScript，並且支持多種輸出格式，包括 MP4 和 GIF，這使得它在設計工具中具備了高度的靈活性和可擴展性。

與其他工具如 Claude Design 相比，Huashu Design 更加注重無需圖形界面的操作，適合不想使用 GUI 的開發者。實際使用中，這個工具能夠處理多達 10-15 分鐘的交付物生成，並且在設計方向的顧問功能上提供了 5 種設計哲學的選擇，讓使用者能夠快速獲得靈感。雖然它在處理複雜動畫方面有一定的限制，但對於大多數常見的設計需求來說，Huashu Design 提供了一個高效的解決方案。這個專案目前處於穩定階段，適合小型團隊或個人開發者使用，未來可能會持續增強其功能和擴展性。

**技術棧**：`HTML` · `JavaScript` · `Shell` · `Python`

## 重點功能

- 快速生成設計 — 只需輸入對話指令，3-30 分鐘內可生成高保真設計交付物。
- 多種輸出格式 — 支持 HTML、MP4、GIF 和可編輯的 PPTX，滿足不同需求。
- 品牌資產協議 — 根據提供的品牌元素自動生成符合品牌風格的設計。
- 設計方向顧問 — 提供 5 種設計哲學的選擇，幫助使用者快速獲得靈感。
- 高效的動畫生成 — 使用 Stage + Sprite 模型，支持 60fps 的高質量動畫輸出。

## 快速開始

1. 安裝 Huashu Design
```bash
npx skills add alchaincyf/huashu-design
```
2. 在 Claude Code 中輸入指令
```bash
輸入「做一份 AI 心理學的演講 PPT，推薦 3 個風格方向讓我選」
```
3. 生成設計並導出
```bash
輸入「把這段邏輯做成 60 秒動畫，導出 MP4 和 GIF」
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 6521 stars（1087/天），forks 992（15.2%），這顯示出強勁的增長趨勢。作者 alchaincyf 是一位活躍的開發者，過去有多個成功的開源專案，這使得社群對其新作充滿期待。Huashu Design 解決了設計過程中需要大量手動操作的痛點，提供了一個快速生成高質量設計的解決方案。這個工具的推出正好契合了對快速迭代和高效設計需求的增長。forks/stars 比率為 15.2%，顯示出使用者對於這個工具的實際應用有興趣，並且有不少人正在進行修改或擴展。

## 適合誰使用

**目標受眾**：需要快速生成高保真設計的開發者和設計師，尤其是在產品發布和市場推廣階段。

> [!example] 使用場景
> - 產品經理用它來快速生成一份產品發布動畫，因為這樣可以在短時間內獲得高質量的視覺效果，提升產品宣傳的效率。
> - 設計師用它來創建可點擊的應用原型，因為這樣能夠快速驗證設計想法，並且節省了使用傳統工具的時間。
> - 市場營銷人員用它來製作演講幻燈片，因為它能夠自動生成可編輯的 PPT，讓他們專注於內容而非設計。

## 架構分析

Huashu Design 採用對話式操作模式，使用者透過簡單的指令與系統互動。這種設計使得使用者無需學習複雜的圖形界面，直接輸入需求即可生成設計。系統內部使用 HTML 和 JavaScript 進行渲染，並且支持多種輸出格式。

這樣的架構設計使得工具在功能上具備了高度的靈活性和可擴展性。選擇這種對話式操作的方式，能夠大幅降低使用門檻，讓非專業設計師也能輕鬆上手。擴展性方面，未來可以透過增加更多的設計哲學和功能來提升工具的能力。

## 技術深入分析

Huashu Design 的核心技術機制是基於對話式的設計生成，使用者只需輸入簡單的指令，系統便能自動生成高保真的設計交付物。這一過程中，系統利用品牌資產協議來確保生成的設計符合品牌風格，這是其獨特之處。效能方面，這個工具能夠在短時間內生成設計，通常只需 3 到 30 分鐘，這對於需要快速迭代的產品開發者尤其重要。設計取捨方面，Huashu Design 在處理複雜動畫時有一定的限制，這意味著對於需要高級動畫效果的使用者，可能需要尋找其他解決方案。技術風險方面，隨著使用者需求的增長，可能會面臨擴展性和穩定性的挑戰，特別是在處理大量請求時。整合方面，這個工具可以與現有的開發流程無縫結合，特別是在使用 Claude Code 的環境中，能夠快速上手並開始使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程順暢，使用者能夠快速上手。文件目前僅提供英文版本，對於非英語使用者可能會有一定的學習曲線。

## 優缺點分析

> [!success] 優點
> - 快速生成高保真設計，節省時間和成本。
> - 支持多種輸出格式，滿足不同需求。
> - 品牌資產協議能夠確保設計符合品牌風格。

> [!danger] 缺點
> - 對於複雜的動畫需求支持有限。
> - 完全空白的品牌設計質量可能不理想。
> - 不支持從 PPTX 到 Figma 的直接編輯。

> [!warning] 注意事項
> - 不支持圖層級可編輯的 PPTX 到 Figma，產出 HTML 可截圖但無法直接編輯。
> - Framer Motion 級別的複雜動畫不行，3D、物理模擬等超出 skill 邊界。
> - 完全空白的品牌從零設計質量會掉到 60–65 分，需提供品牌元素以獲得最佳效果。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [VoltAgent/awesome-claude-design](https://github.com/VoltAgent/awesome-claude-design) | 提供更強大的圖形界面和交互設計功能，但需要使用者進行更多的手動操作。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於同步設計資源的管理，適合需要團隊協作的場景，但不提供自動生成設計的功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [VoltAgent/awesome-claude-design](https://github.com/VoltAgent/awesome-claude-design) | 提供更強大的圖形界面和交互設計功能，但需要使用者進行更多的手動操作。 | 如果你的團隊需要更高的設計自由度和控制權，VoltAgent 會是更好的選擇。 | medium，因為需要適應新的圖形界面和操作方式。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於同步設計資源的管理，適合需要團隊協作的場景，但不提供自動生成設計的功能。 | 如果你的團隊已經在使用其他設計工具進行協作，AlpinDale 會是更合適的選擇。 | low，因為它主要是資源管理工具，整合相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **huashu-design** | **awesome-claude-design** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供更強大的圖形界面和交互設計功能，但需要使用者進行更多的手動操作。 | 專注於同步設計資源的管理，適合需要團隊協作的場景，但不提供自動生成設計的功能。 |
> | 遷移成本 | - | medium，因為需要適應新的圖形界面和操作方式。 | low，因為它主要是資源管理工具，整合相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要更高的設計自由度和控制權，VoltAgent | 如果你的團隊已經在使用其他設計工具進行協作，AlpinDal |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在生成複雜動畫時可能會遇到性能瓶頸，導致生成時間延長。
  - 解法：簡化動畫需求，減少使用的效果。
- **[HIGH]** 完全空白品牌的設計質量不理想，可能導致使用者不滿。
  - 解法：提供品牌元素以獲得最佳效果。
- [MEDIUM] 不支持從 PPTX 到 Figma 的直接編輯，使用者需手動處理。
  - 解法：將生成的 HTML 截圖或錄屏後再進行編輯。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的產品發布 | 非常適合 | 能快速生成高質量的設計，提升產品推廣效率。 |
| 大型企業的設計部門 | 普通 | 對於複雜的設計需求，可能需要更高的自由度和控制權。 |
| 個人開發者的側項目 | 非常適合 | 能夠快速生成設計，節省時間和成本。 |
| 需要高級動畫效果的專案 | 不適合 | 對於複雜動畫的支持有限，可能無法滿足需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速生成高保真設計的效果，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不會存取敏感資料，適合在 CI/CD 中安全使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Huashu Design 可以與 Claude Code 無縫整合，使用者只需在終端中輸入指令即可開始使用。它的設計使得與現有的開發流程兼容良好，特別是在需要快速生成設計的場景中。對於使用 GitHub Actions 的 CI 流程，Huashu Design 也能夠輕鬆集成，無需額外的配置。整合過程中，最常見的問題是需要確保品牌資產的準確性，這可能需要使用者進行額外的確認和調整。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Huashu Design 出現之前，設計工具通常需要使用者進行大量的手動操作，這使得設計過程變得繁瑣且耗時。隨著對快速迭代和高效設計需求的增長，Huashu Design 提供了一個創新的解決方案，讓使用者能夠透過簡單的對話生成高質量的設計。這一變化代表了設計工具向自動化和智能化的趨勢，未來可能會有更多類似的工具出現，進一步簡化設計流程。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉基本的 HTML 和 JavaScript
- 了解設計基礎知識

> [!tip] 導入策略
> 第一週：在個人側項目中試用。第二週：在小型團隊的內部工具中導入。第三週：撰寫使用手冊和最佳實踐。第四週：在主要產品中開始使用。

**成功指標**：設計交付時間減少 50%。

> [!warning] 退出計畫
> 所有設定和生成的設計都以標準格式保存，方便轉移到其他工具或平台。

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
| Forks | 992 |
| Open Issues | 5 |
| Issue 解決率 | 50% (5 closed) |
| 最後推送 | 2026-04-25 |
| 建立日期 | 2026-04-19 |
| Repo 大小 | 217.2 MB |
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
> | [@alchaincyf](https://github.com/alchaincyf) | 31 |

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

**社群活躍度**：社群活躍，定期更新和維護，回應速度良好。
**連結**：[文件](https://skills.sh)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-20 ~ 2026-04-25）
> **活躍天數** 3 天 · **最新 commit** docs: add Showcase section + cinematic-patterns reference

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#9](https://github.com/alchaincyf/huashu-design/issues/9) | [Korean Version + Extensions] huashu-design → ktk-design for | 0 | 1 |
> | [#2](https://github.com/alchaincyf/huashu-design/issues/2) | gemini_cli demo无效 | 0 | 1 |

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
> HTML deck 浏览器演讲 · `html2pptx.js` 读 DOM 的 computedStyle 逐元素翻译成 PowerPoint 对象 · 导出的是**真文本框**，PPT 里双击即可编辑。
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
> ## Showcase · 真实案例
> 
> ### 「聊聊 skill」 · PM after-party 演讲 deck
> 
> > **Live demo · [https://skill-huasheng.vercel.app](https://skill-huasheng.vercel.app)**
> 
> 13 页 HTML deck，**全部用 huashu-design 完成**：
> 
> - 黑底极简衬线视觉系统（cover / about / hook / what / why / closing）
> - 2 个带 BGM + SFX 的 22 秒 cinematic demo（Nuwa skill workflow + Darwin skill workflow），各采用**完全独立的视觉语言**：
>   - **Nuwa**：3D 知识 orbit + Pentagon 提炼 + SKILL.md typewriter + 「21 分钟」hero reveal
>   - **Darwin**：autoresearch loop spin + v1/v5 并列 diff + Hill-Climb 全屏曲线 + Ratchet gear lock
> - 每个 cinematic 默认显示**完整静态 workflow dashboard**（观众随时能看清 skill 怎么跑），点 ▶ 才触发动画，跑完自动 fade 回 dashboard
> - 嵌入 huasheng.ai 的 25 秒 hero 动画（iframe 本地化兜底）
> - 真实数据：14,495 stargazers 真实曲线（gh API 拉取）+ DeepSeek V4 真实 specs（WebSearch 验证）
> - 真实 AI 素材：用 `huashu-gpt-image` 跑 4×2 grid 大图，`extract_grid.py` 抠出 8 张独立透明 PNG，做 3D orbit 漂浮
> 
> **适合参考的页面**：
> - `/slides/slide-04b-nuwa-flow.html` · 静态 dashboard + cinematic overlay 双层架构
> - `/slides/slide-06b-darwin-flow.html` · 完全独立视觉语言的对照案例
> - `/slides/slide-03b-deepseek-cover.html` · AI slop vs 真实设计师视角的对比页
> 
> 详细 cinematic patterns 见 `references/cinematic-patterns.md`。
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

相關概念：[[自動化設計]] · [[設計哲學]] · [[高保真原型]]

相關專案：[[VoltAgent--awesome-claude-design|VoltAgent/awesome-claude-design]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Manavarya09--design-extract|Manavarya09/design-extract]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

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
> const concepts = ["自動化設計","設計哲學","高保真原型"];
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

- [[2026-04-26|2026-04-26]] — 再次上榜，6.5k stars
- [[2026-04-25|2026-04-25]] — 再次上榜，6.1k stars
- [[2026-04-24|2026-04-24]] — 再次上榜，5.5k stars
- [[2026-04-23|2026-04-23]] — 再次上榜，4.5k stars
- [[2026-04-22|2026-04-22]] — 首次收錄，3.1k stars
