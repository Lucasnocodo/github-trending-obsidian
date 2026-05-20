---
repo: boona13/mykonos-island-voxels
url: https://github.com/boona13/mykonos-island-voxels
owner: boona13
owner_type: User
language: JavaScript
license: MIT
description: "A browser-based isometric island builder with the soft, sun-bleached look of Mykonos. Vanilla ES modules, no bundler, mobile-friendly."
homepage: "https://mykonos-island-voxels.netlify.app"
stars: 663
stars_per_day: 133
forks: 158
open_issues: 1
created: 2026-05-14
pushed_at: 2026-05-14
first_seen: 2026-05-20
week: "2026-W21"
month: "2026-05"
category: "遊戲"
subcategory: "建設類"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-20
use_case: "一個基於瀏覽器的等角島嶼建設者，讓你隨意創建美麗的島嶼景觀。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-27"
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
star_history: "2026-05-20:661,2026-05-20:663"
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
  - "一個基於瀏覽器的等角島嶼建設者，讓你隨意創建美麗的島嶼景觀。"
---

# mykonos-island-voxels

**663** stars · **133** stars/天 · 建立 5 天前 · JavaScript · MIT

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
> 一個基於瀏覽器的等角島嶼建設者，讓你隨意創建美麗的島嶼景觀。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (133 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 5 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望快速創建遊戲場景的獨立開發者或遊戲設計愛好者。
> **一句話重點** 這個專案的設計理念是讓創作變得簡單且無壓力，適合任何人輕鬆上手。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/boona13--mykonos-island-voxels");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "建設類" && p.file.name !== "boona13--mykonos-island-voxels" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 建設類 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到簡單易用的創作工具，值得嘗試。

> [!abstract] 核心創新
> 這個專案的核心創新在於使用純 ES 模組，無需任何打包工具，簡化了開發流程。

## 專案簡介

Mykonos Island Voxels 是一個以瀏覽器為基礎的等角島嶼建設遊戲，玩家可以在 14x14 的網格上自由放置建築和自然元素，並享受無壓力的創作過程。這個工具的核心機制是使用滑鼠或觸控手勢來選擇資產並放置，並且支援一鍵填充草地以快速開始建設。該專案使用純 ES 模組，無需任何打包工具，這使得開發者可以輕鬆地在本地環境中運行。它的高保真資產管道確保了即使在不同的屏幕密度下，畫面依然清晰。與傳統的遊戲開發工具相比，這個專案不需要繁瑣的設置，適合於快速原型設計和創意發揮。

相較於其他類似的遊戲建設工具，如 0x0funky/agent-sprite-forge 和 BuilderPulse/BuilderPulse，Mykonos Island Voxels 提供了更簡單的使用體驗和更直觀的操作界面，特別適合新手和休閒玩家。它的自動保存功能和音效設計也增強了用戶體驗。儘管目前只有一個開放的問題，社群的活躍度尚可，未來可能會有更多功能的擴展。這個專案在穩定性和使用便捷性上表現良好，適合小型團隊或個人開發者進行創意實驗。

**技術棧**：`JavaScript` · `CSS` · `HTML` · `Python`

## 重點功能

- 點擊建設等角網格 — 從右側調色板選擇資產，點擊單元格即可放置，並伴隨彈性動畫。
- 一鍵填充草地 — 快速鋪設草地，讓建設過程更順暢。
- 75+ 繪畫風格資產 — 包含各種建築和自然元素，如教堂、風車、橄欖樹等。
- 觸控優先的移動端 UI — 支援觸控手勢，適配各種設備。
- 高保真資產管道 — 預渲染資產以確保在不同解析度下的清晰度。
- 自動保存功能 — 使用 localStorage 保存島嶼設計，便於下次訪問。
- 精緻的音效設計 — 為不同的放置和 UI 操作提供獨特的音效。

## 快速開始

1. 在本地啟動伺服器
```bash
python3 -m http.server 8000
```
2. 打開瀏覽器訪問
```bash
http://localhost:8000
```
3. 開始創建你的島嶼
```bash
# 直接在瀏覽器中操作
```

## 程式碼範例

```js
{
  "前置條件": "需要在本地啟動伺服器",
  "指令": "python3 -m http.server 8000",
  "預期輸出": "在瀏覽器中訪問 http://localhost:8000 以開始使用。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 663 stars（132.6/天），forks 158（23.8%），顯示出相對活躍的開發和使用者基礎。作者 boona13 似乎專注於創造簡單易用的遊戲工具，這個專案解決了傳統遊戲建設工具的繁瑣設置問題，讓使用者能夠快速上手。這個專案的推出引起了一些社群的關注，特別是在遊戲開發和創意工具領域。由於其簡單的架構和無需依賴的特性，這個工具在現今的開發生態中顯得尤為重要。forks/stars 比率為 23.8%，顯示出有相當比例的使用者在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：希望快速創建遊戲場景的獨立開發者或遊戲設計愛好者。

> [!example] 使用場景
> - 遊戲開發者用它來快速原型設計島嶼場景，因為它的無壓力創作環境讓靈感能夠自由發揮。
> - 教育工作者用它來教導學生關於遊戲設計的基本概念，因為它的簡單操作和即時反饋能夠吸引學生的注意。
> - 獨立開發者用它來創建小型遊戲，因為不需要繁瑣的設置和依賴，能夠專注於創意實現。

## 架構分析

Mykonos Island Voxels 採用純 HTML/CSS/JavaScript 的架構，無需任何框架或打包工具，這使得開發者能夠輕鬆地在本地環境中運行。資料流方面，使用者的操作會通過 InputManager.js 處理，然後更新遊戲狀態，最後由 Renderer.js 負責渲染畫面。這種設計使得每個組件之間的耦合度較低，便於維護和擴展。選擇高 DPI 緩存畫布的方式，能夠在不同解析度下保持畫質，這對於遊戲的視覺效果至關重要。擴展性方面，雖然目前的設計適合小型項目，但隨著資產數量的增加，可能會面臨性能瓶頸，特別是在渲染複雜場景時。

## 技術深入分析

Mykonos Island Voxels 的核心技術機制是基於純 ES 模組的架構，這使得開發者無需依賴任何打包工具，簡化了開發流程。使用者的操作通過 InputManager.js 處理，並更新遊戲狀態，最終由 Renderer.js 負責渲染畫面。這種設計使得每個組件之間的耦合度較低，便於維護和擴展。效能上，使用高 DPI 緩存畫布的方式，能夠在不同解析度下保持畫質，這對於遊戲的視覺效果至關重要。設計取捨方面，選擇不使用框架的方式，雖然降低了依賴複雜度，但也限制了某些高級功能的實現。技術風險方面，隨著資產數量的增加，可能會面臨性能瓶頸，特別是在渲染複雜場景時。整合分析上，該工具與主流的開發框架（如 React 或 Vue）的整合難度較高，因為其設計理念與這些框架的使用方式有所不同。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含使用範例，安裝過程簡單，只需啟動伺服器即可運行。沒有明顯的坑，對於新手來說，30 分鐘內可以輕鬆上手。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 無需繁瑣的設置，開發者可以快速上手。
> - 高保真的視覺效果，適合創意發揮。
> - 自動保存功能，便於用戶隨時返回。
> - 觸控優先的設計，適合移動端使用。

> [!danger] 缺點
> - 目前僅有一個開放的問題，社群活躍度尚可。
> - 缺乏多語言支持，可能限制使用者範圍。
> - 隨著資產增加，可能會面臨性能瓶頸。
> - 功能相對簡單，對於高級用戶可能不夠滿足需求。

> [!warning] 注意事項
> - 目前僅支援桌面和移動端瀏覽器，無法在本地直接打開。
> - 僅有一個開放的問題，顯示出社群活躍度尚可，但仍需更多參與。
> - 缺乏多語言支持，可能對非英語使用者造成障礙。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 該工具專注於角色精靈創建，而 Mykonos Island Voxels 更加專注於環境建設，適合不同的創作需求。 |
| [BuilderPulse/BuilderPulse](https://github.com/BuilderPulse/BuilderPulse) | BuilderPulse 提供更複雜的建設功能，但需要更多的設置和學習時間，而 Mykonos Island Voxels 則是即開即用的簡單工具。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色精靈創建，提供更高的自定義性，而 Mykonos Island Voxels 更加專注於環境建設，適合不同的創作需求。 | 如果你需要創建複雜的角色動畫，這個工具會更合適。 | medium，因為需要重新學習工具的操作方式。 |
| [BuilderPulse/BuilderPulse](https://github.com/BuilderPulse/BuilderPulse) | 提供更複雜的建設功能，但需要更多的設置和學習時間，而 Mykonos Island Voxels 則是即開即用的簡單工具。 | 如果你的團隊需要更高的功能擴展性，BuilderPulse 會更適合。 | high，因為需要重新適應更複雜的功能和設置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **mykonos-island-voxels** | **agent-sprite-forge** | **BuilderPulse** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於角色精靈創建，提供更高的自定義性，而 Mykonos Island Voxels 更加專注於環境建設，適合不同的創作需求。 | 提供更複雜的建設功能，但需要更多的設置和學習時間，而 Mykonos Island Voxels 則是即開即用的簡單工具。 |
> | 遷移成本 | - | medium，因為需要重新學習工具的操作方式。 | high，因為需要重新適應更複雜的功能和設置。 |
> | 適用場景 | 主要場景 | 如果你需要創建複雜的角色動畫，這個工具會更合適。 | 如果你的團隊需要更高的功能擴展性，BuilderPulse  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在某些移動設備上，觸控操作可能不夠靈敏。
  - 解法：嘗試在不同的設備上測試，或使用桌面版本。
- **[HIGH]** 當資產數量增加時，可能會導致性能下降。
  - 解法：限制同時顯示的資產數量，或在簡單場景中使用。
- [MEDIUM] 自動保存功能在某些情況下可能失效。
  - 解法：定期手動保存進度，避免數據丟失。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型獨立遊戲開發團隊 | 非常適合 | 簡單易用的界面讓開發者可以快速創建和測試場景。 |
| 教育機構的遊戲設計課程 | 適合 | 無壓力的創作環境能夠吸引學生的注意。 |
| 大型遊戲開發公司 | 不適合 | 缺乏高級功能和擴展性，無法滿足複雜需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到簡單易用的創作工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，並且不存取敏感資料，適合在 CI/CD 中安全使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Mykonos Island Voxels 最常與瀏覽器環境搭配使用，適合在開發和測試階段進行快速原型設計。在一個使用 HTML/CSS/JavaScript 的專案中，你可以直接將這個工具嵌入，具體做法是將 index.html 引入到你的專案中。該工具與主流的 CI/CD 工具（如 GitHub Actions）相容，但由於其設計理念與這些工具的使用方式有所不同，整合時可能需要一些調整。整合的摩擦點主要在於需要手動設置伺服器來運行，這對於習慣使用打包工具的開發者來說可能會有些不便。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Mykonos Island Voxels 出現之前，許多遊戲建設工具都需要繁瑣的設置和依賴，這使得新手難以入手。隨著瀏覽器技術的進步，特別是 ES 模組的普及，這個工具的出現使得快速原型設計變得可行。這個工具代表了遊戲開發領域中對於簡化開發流程的趨勢，未來可能會有更多類似的工具出現，以滿足不斷增長的創意需求。

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
| Forks | 158 |
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

**社群活躍度**：社群活躍度尚可，開放問題數量較少。
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

相關概念：[[遊戲設計]] · [[創意工具]] · [[瀏覽器遊戲]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[Juwluuu--Subnautica-2-Release|Juwluuu/Subnautica-2-Release]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[calesthio--Crucix|calesthio/Crucix]] · [[op7418--Claude-to-IM-skill|op7418/Claude-to-IM-skill]]

[GitHub](https://github.com/boona13/mykonos-island-voxels) · [官方網站](https://mykonos-island-voxels.netlify.app)

## 相關收錄

> [!note]- 直接競品（同子分類：建設類）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "建設類" AND file.name != "boona13--mykonos-island-voxels"
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
> const concepts = ["遊戲設計","創意工具","瀏覽器遊戲"];
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

- [[2026-05-20|2026-05-20]] — 首次收錄，661 stars
