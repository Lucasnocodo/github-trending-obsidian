---
repo: ammaarreshi/Generals-Mac-iOS-iPad
url: https://github.com/ammaarreshi/Generals-Mac-iOS-iPad
owner: ammaarreshi
owner_type: User
language: C++
license: NOASSERTION
description: "Command & Conquer Generals: Zero Hour running natively on macOS, iPhone & iPad — real engine (EA GPL v3 source, via GeneralsX), DXVK/MoltenVK renderer, RTS touch controls. No game assets included."
homepage: ""
stars: 1407
stars_per_day: 201
forks: 118
open_issues: 13
created: 2026-07-04
pushed_at: 2026-07-05
first_seen: 2026-07-06
week: "2026-W28"
month: "2026-07"
category: "遊戲"
subcategory: "遊戲移植"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-06
use_case: "讓 Command & Conquer Generals: Zero Hour 在 macOS、iPhone 和 iPad 上原生運行，無需模擬器。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-07-14"
contributor_count: 5
engagement: "low"
issue_close_rate: 20
repo_size_kb: 45484
readme_length: 9687
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-06"
star_history: "2026-07-06:856,2026-07-06:862,2026-07-07:1177,2026-07-07:1179,2026-07-08:1300,2026-07-08:1300,2026-07-09:1369,2026-07-09:1370,2026-07-10:1395,2026-07-10:1395,2026-07-11:1407"
tags:
  - github
  - "category/遊戲"
  - "lang/c++"
  - "topic/apple_silicon"
  - "topic/command_and_conquer"
  - "topic/dxvk"
  - "topic/game_port"
  - "topic/generals_zero_hour"
aliases:
  - "Generals-Mac-iOS-iPad"
  - "ammaarreshi/Generals-Mac-iOS-iPad"
  - "讓 Command & Conquer Generals: Zero Hour 在 macOS、iPhone 和 iPa"
---

# Generals-Mac-iOS-iPad

**1.4k** stars · **233** stars/天 · 建立 6 天前 · C++ · NOASSERTION

```dataviewjs
const me = dv.page("Repos/ammaarreshi--Generals-Mac-iOS-iPad");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`apple-silicon` `command-and-conquer` `dxvk` `game-port` `generals-zero-hour` `ios` `ipad` `macos` `moltenvk` `open-source-game` `rts` `sdl3`

> [!summary] 一句話摘要
> 讓 Command & Conquer Generals: Zero Hour 在 macOS、iPhone 和 iPad 上原生運行，無需模擬器。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (233 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 4 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望在 Apple 硬體上運行 Command & Conquer Generals: Zero Hour 的遊戲愛好者和開發者。
> **一句話重點** 這個專案展示了如何將經典遊戲引擴展到新平台，並且提供了原生的遊戲體驗。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/ammaarreshi--Generals-Mac-iOS-iPad");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "遊戲移植" && p.file.name !== "ammaarreshi--Generals-Mac-iOS-iPad" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 遊戲移植 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、10 小時整合，得到良好的遊戲體驗，值得投入。

> [!abstract] 核心創新
> 這個專案實現了 Command & Conquer Generals: Zero Hour 在 iOS 上的原生運行，並針對觸控操作進行了專門優化。

## 專案簡介

這個專案的核心是將 2003 年的 Command & Conquer Generals: Zero Hour 遊戲引擎移植到 Apple 的 ARM64 硬體上，實現原生運行。使用者需要將遊戲資源從合法來源獲取，然後透過這個專案提供的程式碼進行運行。專案的關鍵在於將 DirectX 8 渲染轉換為 Vulkan，再透過 MoltenVK 轉換為 Metal，這樣的設計使得遊戲能夠在 iOS 環境中高效運行。主要指令包括 `cmake` 用於編譯和配置，並且需要處理 iOS 的特定限制，例如可寫文件系統的需求和 Metal 的渲染特性。這個專案的賣點是它不僅僅是移植，而是對引擎進行了深度的適配和優化，以符合 iOS 的運行環境。由於遊戲本身是基於 EA 的 GPL v3 開源代碼，這使得開發者能夠在社群的基礎上進行擴展和改進。

這個專案的技術選型上，使用了 DXVK 和 MoltenVK 這兩個庫來處理圖形渲染，這在其他類似的移植專案中並不常見，因為許多專案可能會選擇使用較為簡單的模擬器或虛擬機來達成相似目的。相較於其他遊戲移植工具，如 Wine 或 Crossover，這個專案的優勢在於它能夠提供更接近原生的遊戲體驗，並且針對觸控操作進行了優化。使用者在實際運行中可能會遇到一些特定的 bug，例如黑色迷你地圖或音效問題，這些都需要進一步的調試和修正。這個專案目前仍在活躍開發中，未來可能會有更多的功能和修復推出。對於希望在 Apple 硬體上運行這款經典 RTS 遊戲的玩家來說，這是一個值得關注的選擇。整體來看，這個專案適合有一定技術背景的使用者，因為需要進行編譯和配置，並且可能需要解決一些技術問題。

**技術棧**：`CMake` · `C++` · `SDL3` · `DXVK` · `MoltenVK`

## 重點功能

- 原生運行 — 在 macOS、iPhone 和 iPad 上無需模擬器運行遊戲。
- 觸控操作優化 — 針對 RTS 遊戲設計的觸控控制，支持拖曳選擇、長按取消選擇等操作。
- 使用 DXVK 和 MoltenVK — 將 DirectX 8 渲染轉換為 Vulkan，再轉換為 Metal，實現高效能渲染。
- 基於 EA 的 GPL v3 開源代碼 — 允許社群進行擴展和改進，並且有豐富的社群支持。
- 支持多種遊戲模式 — 包括戰役、單人對戰和將軍挑戰等多種遊戲模式。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/ammaarreshi/Generals-Mac-iOS-iPad.git
```
2. 進入專案目錄
```bash
cd Generals-Mac-iOS-iPad
```
3. 使用 CMake 編譯專案
```bash
cmake . && make
```

## 程式碼範例

```cpp
{
  "前置條件": "需要安裝 CMake 和相關依賴",
  "指令": "cmake . && make",
  "預期輸出": "成功編譯並生成可執行檔案"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天就累積 1395 stars（233/天），forks 110（7.9%），這顯示出強烈的社群興趣。作者 xezon 和其他貢獻者在開源遊戲移植方面有豐富的經驗，之前的專案如 GeneralsX 和 Fighter19 的 Unix port 都為這個專案奠定了基礎。這個專案解決了在 iOS 上運行經典 RTS 遊戲的需求，之前的解決方案多依賴於模擬器，無法提供原生性能。社群的反應和需求促使了這個專案的快速成長，尤其是在遊戲愛好者中。這個專案的成功也反映了開源社群對於經典遊戲的持續熱情和對於新平台的探索。forks/stars 比率達到 7.9%，顯示出許多人在實際修改使用，這表明這個專案不僅僅是觀望，而是有實際的開發和使用需求。

## 適合誰使用

**目標受眾**：希望在 Apple 硬體上運行 Command & Conquer Generals: Zero Hour 的遊戲愛好者和開發者。

> [!example] 使用場景
> - 遊戲開發者用它來在 macOS 上測試 Command & Conquer Generals: Zero Hour 的移植效果，因為這樣可以直接在 Apple 硬體上運行，無需額外的模擬器。
> - 遊戲愛好者用它來在 iPhone 上重溫經典 RTS 遊戲，因為這個專案提供了原生的觸控操作體驗，讓遊戲更符合移動設備的使用習慣。
> - 開源貢獻者用它來學習如何將舊遊戲引擎移植到新平台，因為這個專案展示了如何處理 DirectX 到 Metal 的轉換，並且有實際的程式碼參考。

## 架構分析

這個專案採用 CMake 作為構建系統，並且使用了多個庫來處理不同的渲染需求。首先，專案將 DirectX 8 的渲染轉換為 Vulkan，然後再透過 MoltenVK 轉換為 Metal，這樣的設計使得遊戲能夠在 iOS 環境中高效運行。資料流方面，遊戲的配置和存檔路徑被重新路由，以符合 iOS 的沙盒限制。這樣的設計使得遊戲能夠在不需要模擬器的情況下運行，但也帶來了需要處理的複雜性，例如 iOS 的文件系統限制和渲染循環的管理。這個架構的選擇使得遊戲能夠在 Apple 硬體上提供接近原生的性能，但也可能在未來的擴展中遇到瓶頸，尤其是在支持其他平台時。

## 技術深入分析

這個專案的核心技術機制在於將 DirectX 8 渲染轉換為 Vulkan，然後再透過 MoltenVK 轉換為 Metal，這樣的設計使得遊戲能夠在 iOS 環境中高效運行。使用 SDL3 處理觸控事件，並根據 RTS 遊戲的需求進行了優化。效能方面，這個專案能夠在 Apple 硬體上提供接近原生的性能，但在處理複雜場景時可能會遇到瓶頸。選擇 CMake 作為構建系統使得專案能夠在不同平台上靈活構建，但也增加了學習成本。技術風險方面，iOS 環境的限制可能會在未來的擴展中帶來挑戰，特別是在支持其他平台時。整合方面，這個專案與主流的遊戲開發工具鏈相容性良好，但需要注意 iOS 環境的特定要求。整體來看，這個專案展示了如何在新平台上實現經典遊戲，並且提供了良好的擴展性和社群支持。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的移植過程說明，對於新手來說相對友好。安裝過程需要克隆專案並使用 CMake 編譯，對於有一定技術背景的使用者來說順暢。文件中有指向 wiki 的連結，提供了進一步的使用說明，但目前沒有多語言支持。

## 優缺點分析

> [!success] 優點
> - 能在 Apple 硬體上原生運行，提供更好的性能和體驗。
> - 針對觸控操作進行了優化，適合移動設備使用。
> - 基於開源代碼，社群支持和擴展性強。

> [!danger] 缺點
> - 需要用戶自行獲取遊戲資源，增加了使用門檻。
> - 目前僅支持 Apple 硬體，對於其他平台的支持尚未實現。
> - 在 iOS 環境中可能會遇到特定的性能和兼容性問題。

> [!warning] 注意事項
> - 不包含遊戲資源，需要用戶自行獲取合法副本。
> - 目前僅支持 Apple 硬體，對於其他平台的支持尚未實現。
> - 在 iOS 環境中可能會遇到特定的性能和兼容性問題，需進行調試。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [xezon/GeneralsX](https://github.com/xezon/GeneralsX) | 這個專案是 GeneralsX 的一個分支，專注於 iOS 和 macOS 的移植，而 GeneralsX 主要針對 Linux 和 Windows。 |
| [Fighter19/CnC_Generals_Zero_Hour](https://github.com/Fighter19/CnC_Generals_Zero_Hour) | 這是最早的 Unix 移植版本，提供了基本的功能，但沒有針對 iOS 的優化。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [xezon/GeneralsX](https://github.com/xezon/GeneralsX) | GeneralsX 主要針對 Linux 和 Windows 平台，而本專案專注於 iOS 和 macOS 的原生運行。 | 如果你的目標是針對 Linux 或 Windows 平台，GeneralsX 會是更合適的選擇。 | medium，因為需要重新配置和調整針對不同平台的特定需求。 |
| [Fighter19/CnC_Generals_Zero_Hour](https://github.com/Fighter19/CnC_Generals_Zero_Hour) | 這是最早的 Unix 移植版本，提供了基本的功能，但沒有針對 iOS 的優化。 | 如果你需要一個簡單的 Unix 移植版本，這個專案會是較好的選擇。 | low，因為這個專案的設置相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Generals-Mac-iOS-iPad** | **GeneralsX** | **CnC_Generals_Zero_Hour** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | GeneralsX 主要針對 Linux 和 Windows 平台，而本專案專注於 iOS 和 macOS 的原生運行。 | 這是最早的 Unix 移植版本，提供了基本的功能，但沒有針對 iOS 的優化。 |
> | 遷移成本 | - | medium，因為需要重新配置和調整針對不同平台的特定需求。 | low，因為這個專案的設置相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的目標是針對 Linux 或 Windows 平台，G | 如果你需要一個簡單的 Unix 移植版本，這個專案會是較好的 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和學習，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 iOS 環境中，應用切換後可能會導致渲染崩潰
  - 解法：需在應用中實現狀態保存和恢復機制
- [MEDIUM] 迷你地圖渲染為黑色，因為某些紋理格式未正確處理
  - 解法：需手動調整紋理格式或更新渲染邏輯

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊希望在 Apple 硬體上測試經典 RTS 遊戲 | 非常適合 | 專案提供了原生運行的環境，適合進行測試和開發。 |
| 個人玩家希望在 iPad 上運行 Command & Conquer Generals | 非常適合 | 專案專注於 iOS 的優化，能提供良好的遊戲體驗。 |
| 大型遊戲公司希望將此遊戲移植到其他平台 | 不適合 | 目前專案僅針對 Apple 硬體，對其他平台的支持尚未實現。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、10 小時整合，得到良好的遊戲體驗，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，且不存取敏感資料，但需注意依賴的庫是否有已知的安全漏洞。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個專案最常與 CMake 和 SDL3 搭配使用，通常在開發和建置階段進行整合。在一個使用 CMake 的專案中，你可以輕鬆地將這個專案作為子模組引入，具體做法是將其添加到 CMakeLists.txt 中。這個專案與主流的 CI/CD 工具如 GitHub Actions 兼容，能夠輕鬆集成到現有的開發流程中。整合的摩擦點主要在於需要處理 iOS 環境的特定要求，可能需要額外的配置來確保正確運行。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ammaarreshi--Generals-Mac-iOS-iPad");
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
> const me = dv.page("Repos/ammaarreshi--Generals-Mac-iOS-iPad");
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
| Forks | 110 |
| Open Issues | 12 |
| Issue 解決率 | 20% (3 closed) |
| 最後推送 | 2026-07-05 |
| 建立日期 | 2026-07-04 |
| Repo 大小 | 44.4 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ammaarreshi/Generals-Mac-iOS-iPad) |
| Topics | `apple-silicon` `command-and-conquer` `dxvk` `game-port` `generals-zero-hour` `ios` `ipad` `macos` |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C++" : 96
>     "C" : 3
>     "CMake" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@xezon](https://github.com/xezon) | 713 |
> | [@fbraz3](https://github.com/fbraz3) | 381 |
> | [@Mauller](https://github.com/Mauller) | 154 |
> | [@Caball009](https://github.com/Caball009) | 129 |
> | [@Stubbjax](https://github.com/Stubbjax) | 120 |

## 社群與生態

**社群活躍度**：社群活躍，定期有更新和問題回應。
**連結**：[文件](https://github.com/ammaarreshi/Generals-Mac-iOS-iPad/wiki)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-04 ~ 2026-07-05）
> **活躍天數** 2 天 · **最新 commit** docs: tell the story — what the iOS port involved, and what's next

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/ammaarreshi/Generals-Mac-iOS-iPad/issues/3) | Missing attributions / license violations | 6 | 1 |
> | [#8](https://github.com/ammaarreshi/Generals-Mac-iOS-iPad/issues/8) | Feature Request: Android Port 🚀 | 2 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Command & Conquer Generals: Zero Hour — macOS, iOS & iPadOS
> 
> **Zero Hour running natively on Apple Silicon Macs, iPhone, and iPad** — campaign,
> skirmish, and Generals Challenge, with touch controls built for RTS (tap-select,
> drag-box, long-press deselect, two-finger scroll, pinch zoom). No emulation: this
> is the real 2003 engine compiled for ARM64, rendering DirectX 8 →
> [DXVK](https://github.com/doitsujin/dxvk) → Vulkan →
> [MoltenVK](https://github.com/KhronosGroup/MoltenVK) → Metal.
> 
> Built on EA's GPL v3 source release, standing on a chain of community work —
> [TheSuperHackers](https://github.com/TheSuperHackers/GeneralsGameCode),
> [Fighter19's original Unix port](https://github.com/Fighter19/CnC_Generals_Zero_Hour), and
> [fbraz3/GeneralsX](https://github.com/fbraz3/GeneralsX) — this fork adds the iOS/iPadOS
> port and a set of engine fixes. See [Lineage & credits](#lineage--credits) for who built
> what. The original GeneralsX README lives on the `upstream-main` branch.
> 
> **No game assets are included or distributed.** You need your own copy
> ([Steam](https://store.steampowered.com/app/2732960/), ~$5 on sale).
> 
> ## What this port actually involved
> 
> "Porting" undersells how weird this journey was, so here's the honest shape of it.
> The lineage below built the foundation: EA's source release, the community's
> modernization, Fighter19's original Unix port, GeneralsX's macOS/Linux work.
> What did *not* exist was any of this on iOS — and iOS is a hostile place for a
> 2003 Windows RTS:
> 
> - **The engine assumes a writable filesystem wherever it lives.** iOS apps live in a
>   read-only, code-signed bundle. Every config write, cache, and save path had to be
>   rerouted — and the working directory bootstrapped from the bundle itself.
> - **The renderer speaks DirectX 8. The iPad speaks Metal.** In between: DXVK
>   translating D3D8→Vulkan, MoltenVK translating Vulkan→Metal — and DXVK had never
>   been built for iPhoneOS. That took a Meson cross-build and a patch to its Vulkan
>   loader, because iOS confines `dlopen` to the app bundle ([`Patches/dxvk-ios.patch`](Patches/dxvk-ios.patch)).
> - **iOS owns your process.** Open the app switcher and the OS seizes the Metal
>   drawable *without backgrounding you* — draw one more frame and you're dead on
>   resume. The whole render/sim loop learned to hold its breath.
> - **An RTS needs a mouse.** SDL3 (from the lineage below) delivers raw touch events;
>   the RTS semantics on top are new. Taps defer until the 2003 GUI has processed
>   hover (or menu buttons never highlight), a drag has to decide "selection box or
>   camera pan," long-press became right-click, and a cancelled touch must never
>   ghost-click a rally point.
> - **And then the bug hunts** — the best part. The minimap that rendered black
>   because a 2003 texture-format fallback silently dropped the alpha channel. The
>   EVA voice that went randomly mute because one zombie audio stream held a global
>   "don't talk over speech" flag while chirping forever. Every one chased to root
>   cause on a real device, fixed, and offered upstream.
> 
> **→ The war stories: [Porting Playbook §8 — the bug archaeology](docs/port/PORTING_PLAYBOOK.md#8-post-ship-bug-hunts-junejuly-2026--the-archaeology-section)**
> **→ The complete engineering log: [docs/port/PORTING_PLAYBOOK.md](docs/port/PORTING_PLAYBOOK.md)**
> **→ How to do this to another game: [docs/port/PORTING_PATTERNS.md](docs/port/PORTING_PATTERNS.md)**
> 
> Worth saying plainly: this was a **human + AI collaboration**. The engineering —
> the C++, the cross-builds, the device debugging — was done by
> [Claude Code](https://claude.com/claude-code) (Anthropic's Claude, Fable model),
> directed and playtested by a human who described symptoms like *"the minimap is
> black"* and *"I hear chirping"* and owned every decision. Neither half ships this
> alone: one of us can't write C++, and the other can't hear the chirping.
> 
> ## Quick start — macOS
> 
> Prerequisites (one time):
> 
> ```sh
> # Toolchain
> xcode-select --install
> brew install cmake ninja meson pkgconf
> brew install --cask steamcmd
> 
> # vcpkg (full clone — a shallow clone breaks manifest baselines)
> git clone https://github.com/microsoft/vcpkg ~/vcpkg && ~/vcpkg/bootstrap-vcpkg.sh
> export VCPKG_ROOT=~/vcpkg          # add to your shell profile
> 
> # LunarG Vulkan SDK (NOT the Homebrew cask) — https://vulkan.lunarg.com/sdk/home
> export VULKAN_SDK=$HOME/VulkanSDK//macOS   # add to your shell profile
> ```
> 
> Clone, build, get assets, play:
> 
> ```sh
> git clone https://github.com/ammaarreshi/Generals-Mac-iOS-iPad.git GeneralsX
> cd GeneralsX
> ./scripts/build/macos/build-macos-zh.sh     # checks deps, configures, builds
> ./scripts/build/macos/deploy-macos-zh.sh    # creates ~/GeneralsX/GeneralsZH + run.sh
> ./scripts/get-assets.sh    # fetches game data you own
> cd ~/GeneralsX/GeneralsZH && ./run.sh -win
> ```
> 
> ## Quick start — iPhone / iPad
> 
> On top of the macOS prerequisites: full Xcode (signed into your Apple ID),
> `brew install xcodegen`, and a (free or paid) Apple Developer team.
> 
> ```sh
> cd GeneralsX
> git submodule update --init references/fbraz3-dxvk   # iOS DXVK is built from this + Patches/dxvk-ios.patch
> ./scripts/build/ios/fetch-moltenvk.sh                # pinned MoltenVK.framework (checksummed)
> ./scripts/build/ios/stage-fonts.sh                   # Liberation fonts, renamed as the game expects
> cmake --preset ios-vulkan
> cmake --build build/ios-vulkan --target z_generals
> GX_TEAM_ID= GX_BUNDLE_ID=com.you.generalszh \
>     ./scripts/build/ios/package-ios-zh.sh --install  # assembles, signs, installs
> ```
> 
> Find your team id in Xcode → Settings → Accounts. Assets ship inside the app
> bundle (self-contained install); `--dev` skips the ~2.7 GB copy for fast code
> iteration.
> 
> ## Where things are
> 
> | Path | What it is |
> |---|---|
> | [`docs/port/PORTING_PLAYBOOK.md`](docs/port/PORTING_PLAYBOOK.md) | The complete engineering log of this port: every failure mode, root cause, fix — start with [§8, the bug archaeology](docs/port/PORTING_PLAYBOOK.md#8-post-ship-bug-hunts-junejuly-2026--the-archaeology-section): the black minimap, the silent EVA lines, and the chirp |
> | `docs/port/PORTING_PATTERNS.md` | Generalized methodology for porting classic Windows games to Apple platforms |
> | `docs/port/RELEASE_CHECKLIST.md` | Gate for public release |
> | `scripts/get-assets.sh` | Steam asset fetcher (your own copy; app 2732960) |
> | `scripts/build/macos/`, `scripts/build/ios/` | Build, deploy, packaging pipelines |
> | `ios/` | XcodeGen signing-stub project + `ios/config/` (staged Options.ini, dxvk.conf) |
> | `Patches/dxvk-ios.patch` | DXVK changes the iOS d3d8/d3d9 dylibs are built from (applied via the local-fork build) |
> 
> ## Known issues
> 
> - Long sessions on iPad can be killed by iOS for memory (~3 GB+ resident); the app
>   exits to the home screen with no dialog. Session logs (current + previous) are in
>   the Files app under the game's folder. Under investigation.
> - Backgrounding mid-game can occasionally crash on iOS — the lifecycle pause covers
>   the common paths; a rare race remains. Save often.
> 
> ## What's next: Renegade 👀
> 
> Generals had a chain of giants to stand on. **Command & Conquer: Renegade** — EA's
> 2002 FPS from the same GPL source release — has far less: no native macOS or iOS
> build of the W3D engine has ever shipped (Mac players today go through Wine-based
> compatibility layers). The [OpenW3D](https://github.com/w3dhub/OpenW3D) community
> project has real cross-platform groundwork — a DXVK wrapper scaffold and SDL3 build
> plumbing — with Mac/Linux on its roadmap, and that groundwork is exactly what we
> built on.
> 
> Same methodology as this repo, much deeper water: OpenW3D's Win32 compat scaffold
> expanded by ~3,000 lines (the engine calls raw Windows APIs for file finding,
> keyboard state, COM), a case-sensitivity strategy for twenty thousand asset paths,
> the DXVK/MoltenVK renderer bring-up, the audio/video stack, and FPS touch controls.
> It's playable today — campaign, cinematics, mission scripts — on a Mac and an
> iPhone. For scale: this Generals port added ~2,200 lines on to

## 延伸閱讀

相關概念：[[遊戲移植]] · [[開源遊戲]] · [[觸控操作]]

相關專案：[[Juwluuu--Subnautica-2-Release|Juwluuu/Subnautica-2-Release]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[SubamanojJ-2004--gta-5-mod-menu|SubamanojJ-2004/gta-5-mod-menu]] · [[boona13--mykonos-island-voxels|boona13/mykonos-island-voxels]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[kanavtwtgg--birds.cafe|kanavtwtgg/birds.cafe]] · [[levy-street--world-of-claudecraft|levy-street/world-of-claudecraft]] · [[winsznx--bull-rush|winsznx/bull-rush]]

[GitHub](https://github.com/ammaarreshi/Generals-Mac-iOS-iPad)

## 相關收錄

> [!note]- 直接競品（同子分類：遊戲移植）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "遊戲移植" AND file.name != "ammaarreshi--Generals-Mac-iOS-iPad"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "遊戲" AND file.name != "ammaarreshi--Generals-Mac-iOS-iPad"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C++" AND file.name != "ammaarreshi--Generals-Mac-iOS-iPad" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W28" AND file.name != "ammaarreshi--Generals-Mac-iOS-iPad"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["遊戲移植","開源遊戲","觸控操作"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "ammaarreshi--Generals-Mac-iOS-iPad" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/ammaarreshi--Generals-Mac-iOS-iPad");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ammaarreshi--Generals-Mac-iOS-iPad" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ammaarreshi" AND file.name != "ammaarreshi--Generals-Mac-iOS-iPad"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ammaarreshi--Generals-Mac-iOS-iPad");
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
> const me = dv.page("Repos/ammaarreshi--Generals-Mac-iOS-iPad");
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
> const me = dv.page("Repos/ammaarreshi--Generals-Mac-iOS-iPad");
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
> const me = dv.page("Repos/ammaarreshi--Generals-Mac-iOS-iPad");
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
> const me = dv.page("Repos/ammaarreshi--Generals-Mac-iOS-iPad");
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

> **2026-07-06** — 首次收錄
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

- [[2026-07-11|2026-07-11]] — 再次上榜，1.4k stars
- [[2026-07-10|2026-07-10]] — 再次上榜，1.4k stars
- [[2026-07-09|2026-07-09]] — 再次上榜，1.4k stars
- [[2026-07-08|2026-07-08]] — 再次上榜，1.3k stars
- [[2026-07-07|2026-07-07]] — 再次上榜，1.2k stars
- [[2026-07-06|2026-07-06]] — 首次收錄，856 stars
