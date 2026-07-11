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
use_case: "讓 Command & Conquer Generals: Zero Hour 在 macOS、iPhone 和 iPad 上原生運行，提供觸控操作和真實引擎支"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 6
next_review: "2026-07-14"
contributor_count: 5
engagement: "low"
issue_close_rate: 19
repo_size_kb: 45484
readme_length: 9687
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-06"
star_history: "2026-07-06:856,2026-07-06:862,2026-07-07:1177,2026-07-07:1179,2026-07-08:1300,2026-07-08:1300,2026-07-09:1369,2026-07-09:1370,2026-07-10:1395,2026-07-10:1395,2026-07-11:1407,2026-07-11:1407"
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

**1.4k** stars · **201** stars/天 · 建立 7 天前 · C++ · NOASSERTION

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
> 讓 Command & Conquer Generals: Zero Hour 在 macOS、iPhone 和 iPad 上原生運行，提供觸控操作和真實引擎支持。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (201 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 5 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 希望在 Apple 硬體上運行 RTS 遊戲的玩家和開發者，特別是對於經典遊戲有興趣的使用者。
> **一句話重點** 這個專案展示了如何將經典 RTS 遊戲成功移植到現代 Apple 硬體上，並提供了詳細的工程記錄和技術挑戰。

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
> **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，10 小時整合，得到流暢的 RTS 遊戲體驗，值得嘗試。

> [!abstract] 核心創新
> 這個專案是將 Command & Conquer Generals: Zero Hour 原生移植到 Apple 硬體的首個成功案例，並且提供了完整的觸控操作支持。

## 專案簡介

這個專案的核心機制是將 Command & Conquer Generals: Zero Hour 原生移植到 Apple 的生態系統中，具體來說是 macOS、iPhone 和 iPad。使用者需要擁有遊戲資產，這個專案不包含任何遊戲資產。安裝後，使用者可以透過觸控操作進行遊戲，這些操作包括點選、拖曳選擇框、長按取消選擇等。這個移植使用了 EA 的 GPL v3 原始碼，並透過 DXVK 和 MoltenVK 將 DirectX 8 渲染轉換為 Metal，這樣的設計使得遊戲能夠在 Apple 硬體上流暢運行。主要的指令包括 `./scripts/build/macos/build-macos-zh.sh` 和 `./scripts/build/ios/package-ios-zh.sh --install`，這些指令分別用於構建 macOS 和 iOS 版本。這個專案的賣點在於它提供了一個無需模擬的原生遊戲體驗，並且針對 iOS 的特殊環境進行了大量調整。

技術上，這個專案使用了 CMake 作為構建系統，並依賴於 SDL3 來處理觸控事件。這些選擇使得專案能夠在不同平台上保持一致的遊戲體驗。與其他類似工具相比，如 Wine 或其他模擬器，這個專案的優勢在於它提供了更高的性能和更低的延遲，因為它是直接在原生環境中運行，而不是透過模擬層。使用者在長時間遊玩時可能會遇到 iOS 的內存管理問題，這需要特別注意。這個專案目前處於活躍開發中，未來可能會有更多功能和修復。適合對 RTS 遊戲有興趣的 Apple 硬體使用者，尤其是希望在移動設備上體驗經典遊戲的玩家。

**技術棧**：`C++` · `CMake` · `SDL3` · `DXVK` · `MoltenVK`

## 重點功能

- 原生支持 — 在 macOS、iPhone 和 iPad 上運行，無需模擬。
- 觸控操作 — 提供 RTS 特有的觸控控制，包括點選、拖曳和長按。
- 基於 EA GPL v3 原始碼 — 利用社群的努力進行現代化和移植。
- 高效能渲染 — 使用 DXVK 和 MoltenVK 將 DirectX 8 渲染轉換為 Metal。
- 詳細的工程日誌 — 提供完整的移植過程和技術挑戰的記錄。

## 快速開始

1. 安裝工具鏈
```bash
xcode-select --install && brew install cmake ninja meson pkgconf && brew install --cask steamcmd
```
2. 克隆專案並構建
```bash
git clone https://github.com/ammaarreshi/Generals-Mac-iOS-iPad.git GeneralsX && cd GeneralsX && ./scripts/build/macos/build-macos-zh.sh
```
3. 獲取遊戲資產
```bash
./scripts/get-assets.sh
```

## 程式碼範例

```cpp
{
  "前置條件": "需要安裝 Xcode 和 Homebrew。",
  "指令": "./scripts/build/macos/build-macos-zh.sh",
  "預期輸出": "構建成功，並生成可運行的遊戲文件。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天就累積 1407 stars（201/天），forks 118（8.4%），這顯示出強烈的社群興趣。專案的主要貢獻者來自於多個知名的開源專案，這些貢獻者在遊戲移植和引擎開發方面有豐富的經驗。這個專案解決了在 Apple 硬體上運行舊版 RTS 遊戲的痛點，因為以往的解決方案如 Wine 需要較高的硬體要求且性能不佳。最近的社群討論和需求也促進了這個專案的曝光，特別是對於 iOS 版本的需求。技術上，Apple Silicon 的支持和 Vulkan 的使用使得這個專案在現今的遊戲開發環境中具有高度的可行性，並且能夠充分利用 Apple 的硬體性能。forks/stars 比率為 8.4%，顯示出有相當比例的使用者在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：希望在 Apple 硬體上運行 RTS 遊戲的玩家和開發者，特別是對於經典遊戲有興趣的使用者。

> [!example] 使用場景
> - 遊戲開發者用它來在 macOS 上測試 RTS 遊戲的觸控操作，因為這樣可以直接在 Apple 硬體上驗證遊戲的性能和操作流暢度。
> - 移動遊戲玩家用它來在 iPad 上享受 Command & Conquer 的經典玩法，因為這個移植提供了原生的遊戲體驗，而不是依賴模擬器。
> - 開源愛好者用它來學習如何將舊遊戲移植到現代平台，因為這個專案詳細記錄了移植過程中的挑戰和解決方案。

## 架構分析

這個專案的架構基於 EA 的 GPL v3 原始碼，並使用 CMake 作為構建系統。專案的設計考量了 Apple 硬體的特性，特別是 iOS 的應用程序沙箱環境，這導致需要重新路由所有的配置和存儲路徑。渲染方面，使用 DXVK 將 DirectX 8 轉換為 Vulkan，再透過 MoltenVK 轉換為 Metal，這樣的設計使得遊戲能夠在 Apple 的圖形 API 上運行。

這種多層轉換雖然增加了複雜性，但能夠充分利用 Apple 硬體的性能。選擇使用 SDL3 來處理觸控事件，這使得專案能夠在不同平台上保持一致的操作體驗。這樣的設計也帶來了性能上的優勢，因為直接在原生環境中運行比模擬器更高效。

未來的擴展可能會面臨更多的技術挑戰，特別是在處理更複雜的遊戲邏輯和資源管理時。

## 技術深入分析

這個專案的核心技術機制是將 Command & Conquer Generals: Zero Hour 的引擎移植到 Apple 的生態系統中，使用了 C++ 和 CMake 來構建。渲染方面，使用 DXVK 將 DirectX 8 轉換為 Vulkan，再透過 MoltenVK 轉換為 Metal，這樣的設計使得遊戲能夠在 Apple 硬體上流暢運行。這個專案能夠處理的資料量相對較小，因為它主要是針對遊戲引擎的移植，而不是整個遊戲的資源。這樣的設計選擇使得專案能夠在不同平台上保持一致的遊戲體驗。

選擇使用 SDL3 來處理觸控事件，這使得專案能夠在不同平台上保持一致的操作體驗。這個專案的依賴關係相對簡單，主要依賴於開源庫，降低了 vendor lock-in 的風險。隨著專案的擴展，可能會面臨更多的技術挑戰，特別是在處理更複雜的遊戲邏輯和資源管理時。整合到現有的開發流程中相對容易，因為它使用了標準的構建工具和流程，並且有詳細的文檔支持。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的安裝步驟和使用指令，清晰易懂。安裝過程相對順暢，但需要注意獲取遊戲資產的步驟。文件中有針對 macOS 和 iOS 的快速入門指南，對於新手來說非常友好。整體來說，花 30 分鐘應該能夠成功運行起來。

## 優缺點分析

> [!success] 優點
> - 提供原生遊戲體驗，無需模擬。
> - 支持觸控操作，適合移動設備。
> - 基於開源原始碼，社群支持強大。

> [!danger] 缺點
> - 需要自行獲得遊戲資產，增加使用門檻。
> - 在 iOS 上可能會遇到內存管理問題。
> - 背景運行時可能會導致應用崩潰。

> [!warning] 注意事項
> - 不包含遊戲資產，使用者需自行獲得。
> - 長時間遊玩可能會因內存管理問題導致應用崩潰。
> - 在 iOS 上背景運行時可能會遇到崩潰問題。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊希望在 Apple 硬體上測試 RTS 遊戲 | 非常適合 | 專案提供了原生的遊戲運行環境，適合進行性能測試和觸控操作驗證。 |
| 個人玩家希望在 iPad 上體驗經典 RTS 遊戲 | 非常適合 | 專案專為 iOS 設計，提供了流暢的觸控操作和遊戲體驗。 |
| 大型遊戲公司希望將舊遊戲移植到現代平台 | 普通 | 雖然專案提供了移植的基礎，但可能需要更多的資源和技術支持來處理複雜的遊戲邏輯。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到流暢的 RTS 遊戲體驗，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 這個專案本身不需要高權限，但在安裝過程中可能需要訪問系統資源。依賴的開源庫經過社群審計，風險相對較低。整合到 CI/CD 中使用時，需注意資產的管理和版本控制。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個專案最常與 Apple 的開發工具（如 Xcode）搭配使用，並且在開發流程中處於構建和測試的環節。實際整合範例包括在 Xcode 中設置專案，使用 CMake 進行構建，並透過 SDL3 處理觸控事件。與主流工具鏈的相容性良好，支援 GitHub Actions 進行 CI/CD 流程。最常見的整合問題是資產管理，使用者需要確保遊戲資產的正確路徑配置，以避免運行時錯誤。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個專案出現之前，Command & Conquer Generals: Zero Hour 只能透過模擬器或兼容層在 Apple 硬體上運行，這些方案通常性能不佳且不穩定。隨著 Apple Silicon 的推出，對於原生遊戲的需求越來越高，這促使開發者尋求將舊遊戲移植到現代平台的解決方案。這個專案代表了開源社群在遊戲移植方面的努力，並且展示了如何利用現有的開源工具鏈來實現這一目標。

未來，隨著更多經典遊戲的移植需求增加，這個領域可能會持續擴展，並引入更多的技術創新。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 C++ 和 CMake
- 了解 Apple 開發環境
- 有遊戲開發經驗

> [!tip] 導入策略
> 第一週：在個人項目中試用，了解專案結構。第二週：在小型團隊內部進行測試，收集反饋。第三週：根據反饋進行調整，優化使用流程。第四週：在正式產品中進行小範圍部署，觀察效果。

**成功指標**：遊戲性能提升 30%，玩家滿意度提高。

> [!warning] 退出計畫
> 如果要退出這個工具，所有設定和資源都可以轉換為標準格式，並且有詳細的文檔支持。

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
| Forks | 118 |
| Open Issues | 13 |
| Issue 解決率 | 19% (3 closed) |
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

**社群活躍度**：社群活躍，定期更新和修復問題。
**連結**：[文件](https://github.com/ammaarreshi/Generals-Mac-iOS-iPad)

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
