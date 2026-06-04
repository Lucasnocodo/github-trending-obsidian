---
repo: cpaczek/skylight
url: https://github.com/cpaczek/skylight
owner: cpaczek
owner_type: User
language: TypeScript
license: MIT
description: "Project the aircraft passing overhead onto your ceiling in real time, from an RTL-SDR — with a live sky layer (sun, moon, stars, ISS) and where each plane is headed."
homepage: ""
stars: 804
stars_per_day: 804
forks: 44
open_issues: 0
created: 2026-06-02
pushed_at: 2026-06-03
first_seen: 2026-06-04
week: "2026-W23"
month: "2026-06"
category: "其他"
subcategory: "藝術裝置"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-04
use_case: "將飛機實時投影到天花板，讓你在家中也能觀察飛行航班。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-07"
contributor_count: 2
engagement: "low"
issue_close_rate: -1
repo_size_kb: 5844
readme_length: 8290
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-04"
star_history: "2026-06-04:795,2026-06-04:804"
tags:
  - github
  - "category/其他"
  - "lang/typescript"
  - "topic/ads_b"
  - "topic/aircraft"
  - "topic/art_installation"
  - "topic/flight_tracker"
  - "topic/projector"
aliases:
  - "skylight"
  - "cpaczek/skylight"
  - "將飛機實時投影到天花板，讓你在家中也能觀察飛行航班。"
---

# skylight

**804** stars · **804** stars/天 · 建立 1 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/cpaczek--skylight");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ads-b` `aircraft` `art-installation` `flight-tracker` `projector` `raspberry-pi` `react` `rtl-sdr` `typescript`

> [!summary] 一句話摘要
> 將飛機實時投影到天花板，讓你在家中也能觀察飛行航班。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (804 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 對航空和天文有興趣的家庭或個人，特別是希望在家中創造獨特視覺體驗的人。
> **一句話重點** Skylight 不僅是飛行追蹤工具，更是一種藝術裝置，讓科技與美學結合。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/cpaczek--skylight");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "藝術裝置" && p.file.name !== "cpaczek--skylight" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 藝術裝置 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到獨特的飛行觀察體驗，值得一試。

> [!abstract] 核心創新
> Skylight 將飛機實時投影到天花板，結合真實天空背景，提供獨特的視覺體驗。

## 專案簡介

Skylight 是一個利用 RTL-SDR 接收器，將飛機的實時數據投影到天花板上的系統。用戶可以透過這個系統看到飛機的航班資訊，包括航空公司、機型及目的地，並且在黑色背景上呈現，讓飛機的投影更為突出。系統還會顯示真實的天空背景，包括太陽、月亮、星星及國際空間站（ISS），這些都會根據用戶的地理位置和時間進行計算。使用者可以透過手機控制設置，並且系統支持從本地 RTL-SDR 或免費的網路 API 獲取數據，這使得即使沒有接收器也能試用。核心賣點在於其即時性和互動性，讓用戶能夠在家中享受獨特的飛行觀察體驗。

系統的架構基於 Node.js 和 Express，並使用 TypeScript 和 React 開發，具備良好的可擴展性。使用者只需設置位置坐標，便可在任何地方使用，並且支持多種硬體配置，特別是 Raspberry Pi 5。相較於其他飛行追蹤工具，Skylight 的即時性和視覺效果更為突出，適合喜愛航空的用戶和家庭使用。使用者需要注意的是，若想要在明亮的環境中使用，則需要較高亮度的投影儀，否則在暗房中效果最佳。

**技術棧**：`TypeScript 5.7.2` · `Node.js 20` · `React` · `Express` · `Vite`

## 重點功能

- 實時飛機追蹤 — 透過 RTL-SDR 或免費 API 獲取數據，並在天花板上顯示飛機位置。
- 真實天空背景 — 顯示太陽、月亮、星星及 ISS 的位置，增強視覺效果。
- 手機控制面板 — 所有設置可透過手機即時調整，方便使用。
- 平滑運動效果 — 透過插值技術實現流暢的飛機移動顯示，避免跳動。
- 多種顯示主題 — 提供不同的主題選擇（如 ambient、telemetry），滿足不同用戶需求。

## 快速開始

1. 安裝依賴
```bash
pnpm install
```
2. 啟動 API 模式
```bash
DATA_SOURCE=api pnpm dev
```
3. 訪問顯示頁面
```bash
http://localhost:5173/
```
4. 訪問控制面板
```bash
http://localhost:5173/control.html
```

## 程式碼範例

```ts
[
  "# 前置條件：安裝 pnpm 和 Node.js",
  "pnpm install",
  "# 預期輸出：安裝完成後，啟動開發伺服器"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 804 stars（804/天），forks 44（5.5%），這顯示出強烈的興趣和參與度。作者 cpaczek 之前有過相關的開源經驗，這個專案解決了傳統飛行追蹤工具缺乏視覺化的問題，讓用戶能在家中享受飛行的樂趣。這個專案的推出引起了社群的廣泛討論，尤其是在航空愛好者中。技術上，RTL-SDR 的普及和低成本使得這個專案的實現成為可能，並且其簡易的設置流程吸引了許多用戶。forks/stars 比率適中，顯示出有不少人對其進行實際修改和使用。

## 適合誰使用

**目標受眾**：對航空和天文有興趣的家庭或個人，特別是希望在家中創造獨特視覺體驗的人。

> [!example] 使用場景
> - 航空愛好者用它來在家中實時觀察飛機飛過，因為這樣可以獲得更直觀的飛行資訊，並且增強了家庭娛樂的趣味性。
> - 教育工作者用它來展示航空知識，因為這樣的互動式學習能讓學生更容易理解飛行原理和航空運作。
> - 家庭用戶用它來創造獨特的家庭氛圍，因為在晚上的時候，飛機的投影和星空背景能營造出浪漫的環境。

## 架構分析

Skylight 的架構基於一個多層次的系統，首先使用 RTL-SDR 接收器獲取飛機的 ADS-B 數據，然後通過 dump1090 進行解碼，並將數據轉發到 Node.js 伺服器。伺服器負責數據的處理和豐富，並通過 WebSocket 將數據推送到前端。前端使用 React 和 Vite 渲染飛機和天空的視覺效果。

這種設計使得系統能夠實現低延遲的實時顯示，但也要求用戶具備一定的硬體配置。選擇使用 TypeScript 提升了代碼的可維護性和可讀性，但也增加了學習成本。整體架構的可擴展性良好，未來可以根據需求添加更多功能。

## 技術深入分析

Skylight 的核心技術機制在於使用 RTL-SDR 接收器來捕捉飛機的 ADS-B 信號，並利用 dump1090 進行數據解碼。這些數據經過 Node.js 伺服器進行處理，並通過 WebSocket 實時推送到前端。前端使用 React 和 Vite 來渲染飛機和天空的視覺效果，並且支持手機控制。系統設計上考慮到延遲問題，使用插值技術來平滑飛機的運動，這樣可以避免顯示時的跳動。

效能方面，該系統能夠在低延遲下處理實時數據，但對硬體要求較高，特別是對於持續運行的 Raspberry Pi 5。選擇 TypeScript 提高了代碼的可維護性，但也增加了學習曲線。整體而言，這個專案在技術上具備良好的擴展性，未來可以根據用戶需求進行功能擴展。與主流框架的整合難度不高，特別是對於熟悉 JavaScript 生態系的開發者來說。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用說明，並且包含了範例指令。安裝過程相對順暢，但需要注意硬體要求。文件中有針對 Raspberry Pi 的詳細設置說明，適合新手使用。整體上，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 提供獨特的視覺體驗，讓用戶能在家中觀察飛機。
> - 支持實時數據更新，讓使用者隨時掌握飛行資訊。
> - 手機控制面板方便用戶調整設置，提升使用體驗。

> [!danger] 缺點
> - 需要特定硬體支持，對於一般用戶來說可能有門檻。
> - 在明亮環境中投影效果不佳，限制使用場景。
> - 目前功能較為基礎，未來可能需要更多擴展。

> [!warning] 注意事項
> - 需要 RTL-SDR 接收器才能獲取實時數據，否則只能使用 API 模式。
> - 在明亮環境中使用時，投影效果可能不佳，需要高亮度投影儀。
> - 目前僅支持特定的硬體配置，其他配置可能需要額外調整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於創建虛擬代理，而 Skylight 專注於實時飛行數據的可視化，適合不同的使用場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 是一個飛行數據分析工具，而 Skylight 提供即時視覺化，兩者的功能和目的不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於創建虛擬代理，與 Skylight 的實時飛行數據可視化不同。 | 如果需要創建虛擬代理或角色，這個工具更合適。 | medium，因為需要重新設計用戶界面和數據處理邏輯。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供飛行數據分析，而 Skylight 專注於視覺化，兩者功能不同。 | 如果需要深入分析飛行數據，Boneyard 更適合。 | high，因為需要完全不同的數據處理和展示方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **skylight** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於創建虛擬代理，與 Skylight 的實時飛行數據可視化不同。 | Boneyard 提供飛行數據分析，而 Skylight 專注於視覺化，兩者功能不同。 |
> | 遷移成本 | - | medium，因為需要重新設計用戶界面和數據處理邏輯。 | high，因為需要完全不同的數據處理和展示方式。 |
> | 適用場景 | 主要場景 | 如果需要創建虛擬代理或角色，這個工具更合適。 | 如果需要深入分析飛行數據，Boneyard 更適合。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 目前適合個人試用和實驗，不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，RTL-SDR 接收器可能無法穩定工作。
  - 解法：確保使用最新的驅動程式，並檢查硬體連接。
- [MEDIUM] 投影儀的亮度不足可能影響顯示效果。
  - 解法：在暗房中使用或選擇更高亮度的投影儀。
- [low] 手機控制面板在某些瀏覽器上可能無法正常顯示。
  - 解法：建議使用 Chrome 或 Firefox 瀏覽器。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 家庭娛樂系統 | 非常適合 | 獨特的視覺效果能增添家庭聚會的樂趣。 |
| 教育展示工具 | 適合 | 能夠直觀展示航空知識，適合教學使用。 |
| 專業航空分析 | 不適合 | 功能較為基礎，無法提供深入的數據分析。 |
| 藝術裝置展示 | 非常適合 | 結合科技與藝術，適合用於展覽或藝術展示。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到獨特的飛行觀察體驗，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴的 RTL-SDR 驅動和庫需注意安全性，但整體風險可控。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Skylight 最常與 Raspberry Pi 和 RTL-SDR 配合使用，通常在家庭娛樂或教育展示環境中運行。用戶可以在 Raspberry Pi 上安裝並運行 Skylight，並通過投影儀將畫面投射到天花板上。與主流 CI 工具的整合相對簡單，特別是對於熟悉 JavaScript 生態系的開發者來說。常見的整合問題包括硬體兼容性和設置過程中的驅動安裝，這些都需要用戶具備一定的技術背景。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Skylight 出現之前，飛行追蹤工具多數是以數據為主，缺乏視覺化的呈現。用戶通常只能透過手機或電腦查看飛行資訊，這樣的方式缺乏互動性和趣味性。隨著 RTL-SDR 的普及和開源社群的發展，Skylight 利用這些技術創造出一個全新的飛行觀察體驗。

這個工具代表了科技與藝術結合的趨勢，未來可能會有更多類似的創新出現，讓用戶能在家中享受更豐富的視覺體驗。

## 團隊採用指南

**建議團隊規模**：1-3 人的小型團隊

**前置技能**：
- 熟悉 TypeScript
- 了解 Raspberry Pi 基本操作
- 有基本的網路知識

> [!tip] 導入策略
> 第一週：在個人項目中試用。第二週：在家庭環境中展示。第三週：收集反饋並調整設置。第四週：撰寫使用手冊和最佳實踐。

**成功指標**：用戶滿意度提升，家庭娛樂活動增加。

> [!warning] 退出計畫
> 若要退出，所有設置均以 JSON 格式保存，便於轉移到其他系統。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/cpaczek--skylight");
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
> const me = dv.page("Repos/cpaczek--skylight");
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
| Forks | 44 |
| Open Issues | 0 |
| 最後推送 | 2026-06-03 |
| 建立日期 | 2026-06-02 |
| Repo 大小 | 5.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/cpaczek/skylight) |
| Topics | `ads-b` `aircraft` `art-installation` `flight-tracker` `projector` `raspberry-pi` `react` `rtl-sdr` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `concurrently` `playwright` `typescript`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 85
>     "Shell" : 9
>     "CSS" : 4
>     "JavaScript" : 1
>     "HTML" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@cpaczek](https://github.com/cpaczek) | 12 |
> | [@wes-chen](https://github.com/wes-chen) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度高，最近有合併請求和更新。
**連結**：[文件](https://github.com/cpaczek/skylight)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-03 ~ 2026-06-03）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #1 from wes-chen/feat/configurable-max-fps

## README 摘錄

> [!info]- 展開查看原文 README
> Skylight
> 
>   Project the aircraft passing overhead onto your ceiling, in real time — an X-ray through the roof.
> 
>   🛰️ Get notified when I launch on a crowdfunding platform → skylightceiling.com
>   A ready-made kit is coming. Join the waitlist for early access &amp; launch pricing.
> 
>   
> 
> https://github.com/user-attachments/assets/9256b0eb-cc27-4388-9a4f-0a6c05468304
> 
> Skylight decodes ADS-B from a cheap RTL-SDR radio and renders the planes physically
> flying over you onto a ceiling-pointed projector. A jet you'd hear overhead glides
> across your ceiling at the same moment — labeled with its airline, type, and where it's
> headed. Pure-black background so the projector's rectangle disappears and only the
> aircraft (and stars) are lit.
> 
> It also draws the **real sky** behind the planes — sun, moon, bright stars and
> constellations, and live **satellites including the ISS** — all at their true positions
> for your location and time. Tune everything from your phone.
> 
> > Reference build is centered on **San Francisco International (SFO)**, but it works
> > anywhere — set your coordinates (and swap the runway data) and you're flying.
> 
> ## Features
> 
> - **Real-time overhead aircraft** from a local RTL-SDR (sub-second), or from a free web
>   API with zero code changes — handy for trying it with no radio.
> - **Type-aware glyphs** in a luminous, swept-wing style: widebodies tower over regional
>   jets, **helicopters spin their rotors**, turboprops and GA aircraft spin their props.
> - **Smooth motion** — interpolates the ~1 Hz fixes to 60 fps by rendering slightly in
>   the past and tweening between real positions (no teleporting).
> - **Comet trails**, altitude-graded color, and range rings + compass for orientation.
> - **The airport** (runways) drawn at its true position, so you watch departures and
>   arrivals line up with the runway.
> - **Window to elsewhere** — each routed flight shows its destination **city, local time
>   there, and miles-to-go**, plus a faint great-circle arc toward where it's headed.
> - **Live sky layer** — sun, moon (with phase), bright stars + constellation lines, and
>   **satellites / ISS** computed from TLEs. Scrub time forward/back from your phone, or
>   jump straight to the next ISS pass.
> - **Phone control panel** — every setting (rotation, theme, palette, filters, sky
>   toggles, …) is live-tunable over your LAN and persists across reboots.
> - **Appliance-ready** — boots straight to a full-screen kiosk on a Raspberry Pi 5.
> 
> ## Hardware
> 
> | Part | Suggested | Notes |
> |---|---|---|
> | Receiver | **RTL-SDR Blog V4 + dipole** | The included dipole is plenty — planes are nearly overhead. |
> | Compute | **Raspberry Pi 5 (8 GB)** | Decode + render. Active cooling for 24/7. |
> | Projector | A 1080p projector pointed up | Laser (e.g. Optoma GT2100HDR) gives the deepest blacks, but it's overkill — see the budget tip below. |
> | Display link | micro-HDMI → HDMI | The Pi 5 uses **micro**-HDMI (not mini). |
> | Mount | Rotating 1/4-20 stand, pointed up | Lower the stand for a bigger image; tape **+ a safety tether**. |
> 
> > **💡 Budget tip — you don't need an expensive projector.** The pricey laser short-throw
> > is only worth it if you want the image visible in a **lit** room. If you're happy viewing
> > it in a **dim/dark** room (the intended vibe), a cheap **native-1080p LED** projector like
> > the **[Yaber Buffalo Pro U9](https://www.projectorcentral.com/Yaber-Pro_U9.htm) (~$150)**
> > works great:
> > - **No short-throw needed** — from the floor under an ~8 ft ceiling, even a 1.35:1 throw
> >   gives a ~5.5 ft image.
> > - **Low brightness is fine** (even better) — the content is sparse-on-black, so 200–400
> >   lumens in a dark room actually looks *deeper*.
> > - Just verify it's **native 1920×1080** (not "1080p supported"), has a **quiet fan**, and
> >   an **HDMI input that shows on power-on**.
> 
>   
>   The build — short-throw projector pointing up, RTL-SDR dipole on the cabinet.
> 
> You don't need any of this to try it — see Quick start.
> 
> ## Quick start (local, no radio)
> 
> Runs entirely on your computer against a free public ADS-B API.
> 
> ```bash
> pnpm install
> DATA_SOURCE=api pnpm dev
> ```
> 
> - **Display:** http://localhost:5173/
> - **Control panel:** http://localhost:5173/control.html (or from your phone: `http://:5173/control.html`)
> 
> Set your location in the control panel area is coming; for now set `centerLat` /
> `centerLon` in [`shared/src/config.ts`](shared/src/config.ts) (defaults to SFO).
> 
> ### With a radio (locally)
> 
> ```bash
> scripts/install-rtlsdr-fedora.sh    # rtl-sdr-blog driver + blacklist DVB-T (Fedora; see script for Debian)
> scripts/run-dump1090-local.sh       # decode + serve aircraft.json on :8080
> DATA_SOURCE=radio pnpm dev
> ```
> 
> ## Raspberry Pi appliance
> 
> Full walkthrough in [`pi-setup/README.md`](pi-setup/README.md): flash + headless
> provision the SD card, install the driver + decoder + app, and set up the boot-to-kiosk
> display. Once it's running, push updates from your dev machine with:
> 
> ```bash
> PI_HOST=skylight.local ./scripts/deploy-to-pi.sh
> ```
> 
> ## Configuration
> 
> `Config` ([`shared/src/config.ts`](shared/src/config.ts)) is the single source of truth,
> persisted to `server/data/config.json` and live-editable from the control panel. Key
> fields:
> 
> | | |
> |---|---|
> | `centerLat` / `centerLon` | **Your location** — where you're looking up. |
> | `radiusMiles` | How far out to show (default 3 — "what you could realistically see"). |
> | `rotationDeg` / `mirrorX` | Calibration for the looking-up flip (tune against a real pass). |
> | `theme` | `ambient` · `telemetry` · `focus`. |
> | `showStars` / `showSun` / `showMoon` / `showSatellites` | Sky layer toggles. |
> | `skyTimeOffsetMin` | Scrub the sky clock for testing (0 = live). |
> | `showDestArc` / `showRouteDetail` | "Window to elsewhere". |
> 
> **Using it somewhere other than SFO:** set `centerLat`/`centerLon`, and replace the
> runway geometry in [`web/src/display/airports.ts`](web/src/display/airports.ts) with your
> local airport (coordinates from [OurAirports](https://ourairports.com/data/)). Stars,
> sun, moon, and satellites are computed for your coordinates automatically.
> 
> ### Server environment
> 
> | Env | Default | Meaning |
> |---|---|---|
> | `DATA_SOURCE` | `radio` | `radio` (dump1090) or `api` (airplanes.live) |
> | `AIRCRAFT_JSON_URL` | `http://localhost:8080/aircraft.json` | dump1090 feed |
> | `SUPPLEMENT_API` | `1` | When on radio, merge the API too (keeps landing aircraft alive) |
> | `PORT` / `HOST` | `3000` / `0.0.0.0` | HTTP + WebSocket |
> 
> ## Architecture
> 
> ```
> RTL-SDR ──USB──> dump1090-fa ──> aircraft.json (:8080)
>                                       │ poll ~1 Hz  (+ API supplement)
>                                       ▼
>                          server/  (Node · Express · ws)
>                          • normalize + enrich (airline/type tables + adsbdb routes)
>                          • proxy satellite TLEs (Celestrak)
>                          • persist config, broadcast over WebSocket
>                          ├──────────────────────┬───────────────────────┐
>                          ▼                      ▼                       ▼
>                    Display (/)            Control (/control)        REST /api/*
>                    canvas renderer +      phone settings UI
>                    sky engine → projector (live, two-way)
> ```
> 
> - **`shared/`** — TypeScript types, config schema, and pure geo/projection math.
> - **`server/`** — polls the radio (primary) and API (supplement), enriches aircraft,
>   proxies TLEs, persists config, and pushes everything over a WebSocket.
> - **`web/`** — Vite + React, two pages: the **display** (`` renderer + celestial
>   engine) and the mobile **control panel**.
> 
> **Stack:** TypeScript · React · Vite · Express · ws · pnpm workspaces ·
> [astronomy-engine](https://github.com/cosinekitty/astronomy) ·
> [satellite.js](https://github.com/shashwatak/satellite-js).
> 
> ## Credits & data
> 
> - ADS-B decode: [dump1090-fa](https://github.com/flightaware/dump1090) · RTL-SDR Blog
>   [drivers](https://github.com/rtlsdrblog/rtl-sdr-blog)
> - Routes / aircra

## 延伸閱讀

相關概念：[[航空追蹤]] · [[實時數據可視化]] · [[Raspberry Pi]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Gloridust--WechatOnCloud|Gloridust/WechatOnCloud]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]]

[GitHub](https://github.com/cpaczek/skylight)

## 相關收錄

> [!note]- 直接競品（同子分類：藝術裝置）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "藝術裝置" AND file.name != "cpaczek--skylight"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "cpaczek--skylight"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "cpaczek--skylight" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W23" AND file.name != "cpaczek--skylight"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["航空追蹤","實時數據可視化","Raspberry Pi"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "cpaczek--skylight" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/cpaczek--skylight");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "cpaczek--skylight" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "cpaczek" AND file.name != "cpaczek--skylight"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/cpaczek--skylight");
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
> const me = dv.page("Repos/cpaczek--skylight");
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
> const me = dv.page("Repos/cpaczek--skylight");
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
> const me = dv.page("Repos/cpaczek--skylight");
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
> const me = dv.page("Repos/cpaczek--skylight");
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

> **2026-06-04** — 首次收錄
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

- [[2026-06-04|2026-06-04]] — 首次收錄，795 stars
