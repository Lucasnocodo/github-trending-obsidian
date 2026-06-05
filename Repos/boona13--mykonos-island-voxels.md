---
repo: boona13/mykonos-island-voxels
url: https://github.com/boona13/mykonos-island-voxels
owner: boona13
owner_type: User
language: JavaScript
license: MIT
description: "A browser-based isometric island builder with the soft, sun-bleached look of Mykonos. Vanilla ES modules, no bundler, mobile-friendly."
homepage: "https://mykonos-island-voxels.netlify.app"
stars: 790
stars_per_day: 38
forks: 184
open_issues: 1
created: 2026-05-14
pushed_at: 2026-05-14
first_seen: 2026-05-20
week: "2026-W21"
month: "2026-05"
category: "遊戲"
subcategory: "建造類遊戲"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-20
use_case: "一個基於瀏覽器的等角島嶼建造工具，擁有柔和的陽光褪色外觀，讓你輕鬆創建美麗的島嶼。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-28"
contributor_count: 0
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 81388
readme_length: 6501
bus_factor: 0
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-20"
star_history: "2026-05-20:661,2026-05-20:663,2026-05-21:679,2026-05-21:679,2026-05-23:704,2026-05-24:733,2026-05-25:753,2026-05-26:757,2026-05-27:757,2026-05-29:767,2026-05-30:775,2026-05-31:777,2026-06-01:778,2026-06-02:782,2026-06-03:788,2026-06-04:790,2026-06-05:790"
tags:
  - github
  - "category/遊戲"
  - "lang/javascript"
  - easy_install
  - "topic/canvas2d"
  - "topic/city_builder"
  - "topic/html5_game"
  - "topic/isometric_game"
  - "topic/mobile_friendly"
aliases:
  - "mykonos-island-voxels"
  - "boona13/mykonos-island-voxels"
  - "一個基於瀏覽器的等角島嶼建造工具，擁有柔和的陽光褪色外觀，讓你輕鬆創建美麗的島嶼。"
---

# mykonos-island-voxels

**790** stars · **38** stars/天 · 建立 21 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/boona13--mykonos-island-voxels");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`canvas2d` `city-builder` `html5-game` `isometric-game` `mobile-friendly` `open-source` `vanilla-js`

> [!summary] 一句話摘要
> 一個基於瀏覽器的等角島嶼建造工具，擁有柔和的陽光褪色外觀，讓你輕鬆創建美麗的島嶼。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (38 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 21 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 喜歡開源和簡單遊戲的開發者，特別是尋求輕鬆創作工具的使用者。
> **一句話重點** 這個專案的魅力在於其簡單性和高品質的藝術資產，讓任何人都能輕鬆創造出美麗的島嶼。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "建造類遊戲" && p.file.name !== "boona13--mykonos-island-voxels" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 建造類遊戲 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到簡單易用的建造工具，值得嘗試。

> [!abstract] 核心創新
> 這個專案的核心創新在於其純 ES 模組實現，無需任何打包工具，讓開發和使用變得極為簡單。

## 專案簡介

Mykonos Island Voxels 是一個基於瀏覽器的等角島嶼建造工具，使用者可以在 14×14 的網格上自由放置建築物和自然元素，無需任何目標或資源管理，專注於創造的樂趣。使用者只需從右側的資產面板中選擇一個元素，點擊網格即可放置，並享受彈性動畫效果。這個工具的賣點在於其簡單易用的介面和高品質的資產，讓任何人都能輕鬆創建出迷人的小村莊。技術上，這個專案使用純 ES 模組，無需打包工具，並且支援高 DPI 顯示，確保在各種設備上都能保持清晰的畫面。

與其他類似的建造遊戲相比，如 0x0funky/agent-sprite-forge 和 BuilderPulse/BuilderPulse，本專案不需要複雜的資源管理或分數系統，適合尋求輕鬆創作體驗的使用者。這個工具的自動儲存功能利用 localStorage，確保使用者的創作不會丟失。雖然目前只有一個開放的 issue，但社群活躍度尚可，適合喜歡開源和簡單遊戲的開發者。整體來看，這是一個穩定的專案，適合個人或小型團隊使用，未來可能會增加更多資產或功能以豐富使用者體驗。

**技術棧**：`JavaScript` · `CSS` · `HTML` · `Python`

## 重點功能

- 點擊建造等角網格 — 從右側面板選擇資產，點擊網格即可放置，並享受彈性動畫效果。
- 一鍵填充草地 — 使用者可以快速將整個島嶼填滿草地，方便開始佈局。
- 75+ 藝術資產 — 包含教堂、風車、別墅等多種建築和自然元素，讓創作更具多樣性。
- 觸控優先的移動介面 — 支援觸控操作，適合在手機上使用，並能適應不同螢幕大小。
- 高保真資產管道 — 資產以高 DPI 渲染，確保在各種解析度下畫面清晰。
- 自動儲存功能 — 使用 localStorage 保存使用者的創作，方便下次訪問時恢復。
- 純 ES 模組 — 無需打包工具，直接開啟 index.html 即可運行。

## 快速開始

1. 啟動本地伺服器
```bash
python3 -m http.server 8000
```
2. 在瀏覽器中打開
```bash
http://localhost:8000
```
3. 開始創建你的島嶼
```bash
使用介面上的工具進行建造。
```

## 程式碼範例

```js
{
  "前置條件": "需要在本地伺服器上運行。",
  "指令": "python3 -m http.server 8000",
  "預期輸出": "伺服器啟動並可在瀏覽器中訪問。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 21 天內累積 790 stars（37.6/天），forks 184（23.3%），這顯示出強烈的社群興趣。作者 boona13 是一位開源愛好者，專注於創建簡單易用的遊戲工具，這個專案解決了許多使用者在建造類遊戲中面臨的複雜性問題。這個工具的簡單性和開源特性吸引了許多開發者的注意，尤其是在社交媒體上有一定的討論和分享。隨著 Web 技術的進步，這種無需打包的純瀏覽器應用變得越來越可行，吸引了不少開發者試用。高達 23.3% 的 forks/stars 比率顯示出許多人對此專案進行修改和擴展的興趣。

## 適合誰使用

**目標受眾**：喜歡開源和簡單遊戲的開發者，特別是尋求輕鬆創作工具的使用者。

> [!example] 使用場景
> - 遊戲開發者用它來快速原型設計島嶼建造遊戲，因為它的簡單性讓他們能專注於遊戲機制而非技術細節。
> - 藝術家用它來創建靜態場景，因為其高品質的資產和簡單的操作界面能快速實現視覺效果。
> - 教育工作者用它來教導學生關於城市規劃和設計，因為它不需要複雜的程式碼，學生可以專注於創意發想。

## 架構分析

Mykonos Island Voxels 採用純 HTML/CSS/JavaScript 組成，無需打包工具，這樣的設計使得開發者可以輕鬆上手。資料流方面，使用者的操作通過 InputManager.js 處理，然後更新 Game.js 的狀態，最終由 Renderer.js 渲染到畫布上。這種架構的好處在於簡化了開發流程，但可能會在大型專案中導致維護困難。整體而言，這個專案的架構輕量且易於擴展，適合小型開發團隊使用。

## 技術深入分析

Mykonos Island Voxels 的核心技術機制是基於純 ES 模組的實現，這使得開發者無需依賴任何打包工具，直接在瀏覽器中運行。效能方面，專案使用了高 DPI 渲染技術，確保即使在縮放時畫面依然清晰。設計上，選擇了分層快取渲染的方式，這樣可以在不影響效能的情況下保持畫面的流暢性。這種架構的選擇雖然簡化了開發流程，但在面對更複雜的場景時可能會遇到性能瓶頸。技術風險方面，隨著使用者創作的增多，可能會出現性能下降的問題，特別是在低效能的設備上。整合方面，由於專案是純瀏覽器應用，與現有的開發工具鏈整合相對簡單，但缺乏對 CI/CD 的支援可能會影響大規模開發的效率。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的使用說明，安裝過程簡單無需特別配置。雖然沒有專門的入門指南，但使用者可以輕鬆理解如何開始。文件目前僅提供英文版本，對於非英語使用者可能會有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 簡單易用的介面，適合所有年齡層的使用者。
> - 高品質的藝術資產，能快速創建美麗的場景。
> - 無需打包工具，開發和使用都非常方便。

> [!danger] 缺點
> - 資產數量有限，可能無法滿足所有創作需求。
> - 缺乏多用戶協作功能，限制了使用場景。
> - 目前僅支援瀏覽器，無法作為桌面應用使用。

> [!warning] 注意事項
> - 目前僅支援桌面和移動瀏覽器，未提供桌面應用版本。
> - 資產數量有限，可能無法滿足所有使用者的需求。
> - 缺乏多用戶協作功能，目前僅支援單人創作。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於創建角色精靈，而 Mykonos Island Voxels 專注於建造島嶼，適合不同的創作需求。 |
| [BuilderPulse/BuilderPulse](https://github.com/BuilderPulse/BuilderPulse) | BuilderPulse 提供更複雜的資源管理系統，而 Mykonos Island Voxels 則專注於簡單的建造體驗。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色精靈的創建，使用者可以更深入地自定義角色外觀。 | 如果你的專案需要更複雜的角色設計，這個工具會更適合。 | low，因為兩者都使用簡單的 JavaScript 和 HTML。 |
| [BuilderPulse/BuilderPulse](https://github.com/BuilderPulse/BuilderPulse) | 提供更複雜的資源管理系統，適合需要多層次管理的建造遊戲。 | 如果你的遊戲需要資源管理和經濟系統，BuilderPulse 是更好的選擇。 | medium，因為需要調整遊戲邏輯以適應資源管理。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **mykonos-island-voxels** | **agent-sprite-forge** | **BuilderPulse** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於角色精靈的創建，使用者可以更深入地自定義角色外觀。 | 提供更複雜的資源管理系統，適合需要多層次管理的建造遊戲。 |
> | 遷移成本 | - | low，因為兩者都使用簡單的 JavaScript 和 HTML。 | medium，因為需要調整遊戲邏輯以適應資源管理。 |
> | 適用場景 | 主要場景 | 如果你的專案需要更複雜的角色設計，這個工具會更適合。 | 如果你的遊戲需要資源管理和經濟系統，BuilderPulse |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的創作工具，但不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些瀏覽器中可能無法正確顯示高 DPI 資產
  - 解法：確保使用最新版本的瀏覽器
- [MEDIUM] 在移動設備上操作時可能會有延遲
  - 解法：使用較新型的設備以獲得更流暢的體驗

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的產品原型設計 | 非常適合 | 簡單易用的介面讓團隊能快速迭代設計。 |
| 教育機構的創意課程 | 適合 | 無需複雜的技術背景，學生能輕鬆上手。 |
| 大型遊戲開發團隊的核心產品 | 不適合 | 缺乏多用戶協作功能，無法滿足團隊需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到簡單易用的建造工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，且不會存取敏感資料，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
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
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
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
| Forks | 184 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-14 |
| 建立日期 | 2026-05-14 |
| 官方網站 | [Link](https://mykonos-island-voxels.netlify.app) |
| Repo 大小 | 79.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/boona13/mykonos-island-voxels) |
| Topics | `canvas2d` `city-builder` `html5-game` `isometric-game` `mobile-friendly` `open-source` `vanilla-js` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 86
>     "CSS" : 10
>     "Python" : 2
>     "HTML" : 2
> ```

## 社群與生態

**社群活躍度**：社群活躍度尚可，開放的 issue 數量不多，顯示出使用者的參與度。
**連結**：[文件](https://mykonos-island-voxels.netlify.app)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-14）
> **活躍天數** 1 天 · **最新 commit** Initial open-source release

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/boona13/mykonos-island-voxels/issues/1) | Game Frontend | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Mykonos Island Voxels
> 
> A browser-based isometric island builder with the soft, sun-bleached
> Mediterranean look of Mykonos: cobalt-blue domes on whitewashed walls,
> bougainvillea spilling over stone, olive trees, windmills, narrow
> cobble paths, and a sea you can carve with a click.
> 
> It's a small, self-contained creative toy — drop blocks on a 14×14 grid
> and a tiny village builds itself in front of you. There's no goal,
> no resource grind, no scoring; just the puzzle-piece pleasure of
> arranging things until they look right.
> 
> **🌐 Play it: **
> 
> ---
> 
> ## Features
> 
> - **Click-to-build isometric grid.** Pick an asset from the right-side
>   palette, click a cell, and it pops in with an elastic placement
>   animation.
> - **One-click "Fill with grass"** to carpet the island and start
>   arranging in seconds.
> - **75+ painterly assets** organised into terrain, nature, props, water,
>   and buildings — chapels, windmills, two-story villas, cypress, olive
>   trees, agave, wells, lanterns, fences, bridges, and more.
> - **Touch-first mobile UI.** Tap to place, long-press to erase, drag
>   to brush, two-finger pinch and pan. Layout adapts from desktop down
>   to small phones with safe-area insets for the iPhone notch.
> - **High-fidelity asset pipeline.** Source PNGs are pre-rendered at
>   6× display resolution at load time, baked into high-DPI cached
>   layers, then composited per frame so the canvas stays crisp at
>   every zoom on every screen density.
> - **Auto-save.** Your island is persisted to `localStorage` and
>   re-loaded on the next visit.
> - **Tasteful sound design.** Distinct placement sounds for water,
>   stone, wood, small vegetation, large vegetation, and UI clicks,
>   with debounced overlap so brush-painting doesn't flood the bus.
> - **Pure ES modules.** No bundler, no transpiler, no `node_modules` —
>   open `index.html` and it runs.
> 
> ## Controls
> 
> ### Mouse + keyboard
> 
> | Input | Action |
> |---|---|
> | Click | Place selected asset |
> | Drag | Brush-place across cells |
> | Right click | Erase tile |
> | Right drag | Brush-erase |
> | Shift + drag | Pan camera |
> | Scroll wheel | Zoom |
> | `H` / `V` | Flip the placement preview |
> | `E` | Toggle erase mode |
> | `G` | Toggle grid overlay |
> | `1`–`5` | Switch palette categories |
> | `S` / `R` | Save / reset |
> 
> ### Touch
> 
> | Gesture | Action |
> |---|---|
> | Tap | Place selected asset |
> | Drag | Brush-place across cells |
> | Long-press (~420 ms) | Erase the tile under your finger |
> | Two-finger pinch | Zoom |
> | Two-finger drag | Pan camera |
> 
> ## Run it locally
> 
> The project is plain HTML / CSS / ES modules — there's no build step
> required to develop on it. Because browsers refuse to load ES modules
> from `file://` URLs, you do need to serve it over HTTP. Pick whichever
> of these is easiest:
> 
> ```bash
> # any one of these from the project root:
> python3 -m http.server 8000
> npx serve .
> npx http-server -c-1 .
> ```
> 
> Then open .
> 
> ## Deploy
> 
> The site is deployed to Netlify. The included `netlify.toml` and
> `netlify-build.mjs` produce a clean `dist/` folder containing only the
> runtime files (no design references, no `.DS_Store`, no `.webp`
> duplicates) and ship the right cache headers (immutable for assets,
> must-revalidate for HTML/CSS/JS).
> 
> ```bash
> netlify deploy --prod
> ```
> 
> ## Project layout
> 
> ```
> .
> ├── index.html               # entry point
> ├── styles.css               # the entire UI (no framework)
> ├── src/
> │   ├── main.js              # boot, asset loading, starter scene
> │   ├── config.js            # grid size, tile dims, palette, debug flags
> │   ├── core/
> │   │   ├── Game.js          # game state + tool dispatch
> │   │   ├── Camera.js        # pan / zoom / change notifications
> │   │   ├── Renderer.js      # layered canvas caching + animations
> │   │   └── InputManager.js  # mouse + touch + keyboard
> │   ├── grid/
> │   │   ├── IsoGrid.js       # screen ↔ cell math
> │   │   └── TileMap.js       # terrain + objects, occupancy index
> │   ├── building/
> │   │   └── PlacementSystem.js
> │   ├── assets/
> │   │   ├── assetManifest.js # the 75+ asset definitions
> │   │   ├── assetLoader.js   # PNG → display canvas + shadow canvas
> │   │   ├── imageToAsset.js  # silhouette extraction, anchor inference
> │   │   └── voxelRenderer.js # procedural fallback when PNGs missing
> │   ├── ui/
> │   │   ├── UIManager.js
> │   │   ├── Toolbar.js
> │   │   ├── AssetPalette.js
> │   │   ├── HUD.js
> │   │   └── Audio.js         # WebAudio clip routing + debouncing
> │   └── persistence/
> │       └── SaveSystem.js
> ├── assets/                  # PNG asset pack (pre-generated)
> ├── *.ogg                    # placement / UI sound effects
> ├── netlify.toml
> └── netlify-build.mjs
> ```
> 
> ## Architecture notes
> 
> A few choices worth flagging if you want to hack on the renderer:
> 
> - **Layered cache rendering.** `Renderer.js` keeps four cache canvases:
>   a screen-space backdrop + vignette pair (rebuilt on resize), a
>   world-space platform (rebuilt on grid resize), a world-space terrain
>   layer (rebuilt when the terrain version counter changes), and a
>   world-space static-objects layer (rebuilt on add/remove). Each frame
>   the renderer composites these caches and overlays only the currently
>   animating tiles. Idle frames are essentially free.
> - **High-DPI cache canvases.** Cache canvases are sized at
>   `world × CACHE_SCALE` (2× on standard displays, 3× on retina) so
>   that even after the camera scales them up, the pixels are at or
>   near final on-screen resolution. The asset displayCanvases are
>   pre-rendered at up to 6× their reference size, so detail flows
>   through without any "softening" intermediate.
> - **Spatial occupancy index in `TileMap`.** Object lookup and free-cell
>   checks are O(1) per cell instead of O(N) over the object list.
> - **Dirty-flag rendering.** `markDirty()` is called from camera /
>   input / tool transitions; the loop early-exits when the scene is
>   static and no animations are pending.
> 
> ## Contributing
> 
> PRs welcome. Please:
> 
> - Keep it framework-free — no bundlers, no transpilers, no
>   `node_modules` for the runtime.
> - Keep the asset count modest and the visual style coherent
>   (cobalt-on-cream, soft shadows, gentle elastic motion).
> - Don't add per-frame `ctx.filter`, ImageBitmap shenanigans, or
>   anything that would re-introduce frame drops at heavy scenes.
>   The renderer's caching invariants are load-bearing.
> 
> ## License
> 
> MIT — see [LICENSE](LICENSE).
> 
> The PNG asset pack in `assets/` is released under the same license,
> generated for this project. Audio clips were authored separately;
> see file metadata if you need to attribute them.

## 延伸閱讀

相關概念：[[遊戲設計]] · [[開源]] · [[瀏覽器遊戲]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[Juwluuu--Subnautica-2-Release|Juwluuu/Subnautica-2-Release]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[calesthio--Crucix|calesthio/Crucix]] · [[op7418--Claude-to-IM-skill|op7418/Claude-to-IM-skill]]

[GitHub](https://github.com/boona13/mykonos-island-voxels) · [官方網站](https://mykonos-island-voxels.netlify.app)

## 相關收錄

> [!note]- 直接競品（同子分類：建造類遊戲）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "建造類遊戲" AND file.name != "boona13--mykonos-island-voxels"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "遊戲" AND file.name != "boona13--mykonos-island-voxels"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "boona13--mykonos-island-voxels" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "boona13--mykonos-island-voxels"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["遊戲設計","開源","瀏覽器遊戲"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "boona13--mykonos-island-voxels" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "boona13--mykonos-island-voxels" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "boona13" AND file.name != "boona13--mykonos-island-voxels"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
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
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
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
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
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
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
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
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
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

> **2026-05-20** — 首次收錄
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

- [[2026-05-21|2026-05-21]] — 再次上榜，679 stars
- [[2026-05-20|2026-05-20]] — 首次收錄，661 stars
