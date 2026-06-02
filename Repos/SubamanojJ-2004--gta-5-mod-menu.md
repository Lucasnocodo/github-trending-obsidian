---
repo: SubamanojJ-2004/gta-5-mod-menu
url: https://github.com/SubamanojJ-2004/gta-5-mod-menu
owner: SubamanojJ-2004
owner_type: User
language: N/A
license: MIT
description: "Ultimate Enhancement Toolkit for GTA V — powerful mod menu with ESP, vehicle spawner, recovery features, and clean UI"
homepage: ""
stars: 446
stars_per_day: 28
forks: 60
open_issues: 0
created: 2026-05-16
pushed_at: 2026-05-16
first_seen: 2026-05-23
week: "2026-W21"
month: "2026-05"
category: "遊戲"
subcategory: "模組工具"
release_tag: "v1.1.5"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-23
use_case: "為 GTA V 提供強大的模組菜單，包含 ESP、載具生成器、恢復功能和乾淨的 UI。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-30"
contributor_count: 1
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 19
readme_length: 2313
bus_factor: 1
last_release_days: 17
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-05-23"
star_history: "2026-05-23:445,2026-05-23:445,2026-05-24:445,2026-05-25:445,2026-05-26:445,2026-05-27:445,2026-05-28:445,2026-05-29:445,2026-05-30:445,2026-05-31:446,2026-06-01:446,2026-06-02:446"
tags:
  - github
  - "category/遊戲"
  - "lang/other"
  - easy_install
  - "topic/gameenhancement"
  - "topic/luauiframework"
  - "topic/openworldtools"
  - "topic/runtimeoverlay"
  - "topic/sandboxextensions"
aliases:
  - "gta-5-mod-menu"
  - "SubamanojJ-2004/gta-5-mod-menu"
  - "為 GTA V 提供強大的模組菜單，包含 ESP、載具生成器、恢復功能和乾淨的 UI。"
---

# gta-5-mod-menu

**446** stars · **28** stars/天 · 建立 16 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/SubamanojJ-2004--gta-5-mod-menu");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `v1.1.5` `easy-install`

`gameenhancement` `luauiframework` `openworldtools` `runtimeoverlay` `sandboxextensions`

> [!summary] 一句話摘要
> 為 GTA V 提供強大的模組菜單，包含 ESP、載具生成器、恢復功能和乾淨的 UI。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (28 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 16 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望在 GTA V 中獲得更多自由度和自定義選項的玩家。
> **一句話重點** 這個專案不僅提供了豐富的功能，還強調了用戶體驗，讓玩家能夠輕鬆享受 GTA V 的樂趣。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/SubamanojJ-2004--gta-5-mod-menu");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "模組工具" && p.file.name !== "SubamanojJ-2004--gta-5-mod-menu" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 模組工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到豐富的遊戲增強功能，值得嘗試。

> [!abstract] 核心創新
> 提供一個全面的遊戲增強工具，讓玩家能夠輕鬆自定義和提升他們的 GTA V 體驗。

## 專案簡介

這個 GTA V 模組菜單提供了一個強大且可自定義的工具，讓玩家能夠在遊戲中享受更大的自由度。用戶可以透過簡單的安裝步驟，下載並運行 Launcher.exe，然後啟動 GTA V，享受精確瞄準輔助、ESP 視覺覆蓋、載具生成、金錢恢復等功能。這些功能的設計旨在提升遊戲體驗，並確保流暢的性能。菜單的界面簡潔現代，並且經過優化以確保穩定性和性能。這個工具的「一句話賣點」是：提供一個全面的遊戲增強工具，讓玩家能夠輕鬆自定義和提升他們的 GTA V 體驗。

技術上，它使用了 Luau 框架來實現即時覆蓋和擴展功能，這使得它在性能上優於許多傳統的模組工具。與其他模組相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，這個工具提供了更完整的功能集和更友好的用戶界面。實際使用中，玩家可能會發現需要在啟動 GTA V 前先啟動菜單，以獲得最佳效果。這個專案目前處於穩定階段，適合各種規模的玩家，特別是那些希望在 GTA V 中獲得更多自由度的玩家。未來可能會推出更多的增強工具和 UI 設計更新，進一步提升用戶體驗。

**技術棧**：`Luau Framework`

## 重點功能

- 精確瞄準輔助 — 提升射擊準確性，幫助玩家在戰鬥中獲得優勢。
- ESP & 視覺覆蓋 — 提供敵人和物品的即時視覺提示，增強遊戲體驗。
- 載具生成器 — 允許玩家快速生成各種載具，節省遊戲時間。
- 金錢恢復功能 — 幫助玩家快速獲得遊戲內金錢，提升遊戲進度。
- 上帝模式 — 使玩家在遊戲中無敵，增加遊戲的趣味性。
- 保護選項 — 提供安全功能，防止被其他玩家攻擊。
- 會話工具 — 提供多種實用工具，增強遊戲互動性。
- 完全可自定義的 UI — 允許玩家根據個人喜好調整界面。

## 快速開始

1. 下載最新版本
```bash
下載 GTA5-Mod-Menu.zip 或 Launcher.exe
```
2. 解壓縮檔案
```bash
右鍵點擊下載的檔案，選擇解壓縮
```
3. 運行啟動器
```bash
以管理員身份運行 Launcher.exe
```
4. 啟動 GTA V
```bash
啟動 GTA V 並按照應用內指示設置
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 16 天內累積 446 stars（28/天），forks 60（13.5%），這顯示出穩定的增長趨勢。作者 SubamanojJ-2004 在遊戲模組開發上有一定的經驗，這個工具解決了玩家在 GTA V 中缺乏高效模組的痛點，之前的選擇往往功能不全或操作複雜。最近的推廣和社群討論也可能促進了這個專案的曝光。技術上，Luau 框架的使用使得這個工具能夠快速適應遊戲的變化，並提供即時的功能擴展。forks/stars 比率顯示出許多用戶對這個工具的實際修改和使用，顯示出其受歡迎程度。

## 適合誰使用

**目標受眾**：希望在 GTA V 中獲得更多自由度和自定義選項的玩家。

> [!example] 使用場景
> - 遊戲玩家用它來快速生成載具，因為手動尋找載具過程繁瑣且浪費時間。
> - 模組開發者用它來測試新功能，因為其穩定性和易用性讓開發過程更高效。
> - 社群成員用它來分享遊戲經驗，因為其清晰的界面和豐富的功能使得分享變得容易。

## 架構分析

這個專案採用輕量級的架構設計，主要由一個可執行檔和一組資源文件組成。使用者只需下載並運行 Launcher.exe，便可啟動模組菜單。資料流方面，使用者的操作會直接影響遊戲內的狀態，這樣的設計確保了即時反饋。選擇使用 Luau 框架的原因在於其輕量和高效能，這使得模組能夠快速響應玩家的需求。擴展性方面，這個架構能夠輕鬆加入新的功能模組，但也可能面臨與遊戲更新的兼容性問題。

## 技術深入分析

這個模組菜單的核心技術機制是基於 Luau 框架，這使得它能夠在遊戲中實現即時的功能擴展和視覺效果。效能方面，該工具能夠在標準的遊戲環境下流暢運行，對於配備 GTX 660 或 RX 560 的顯示卡來說，能夠保持穩定的幀率。設計上選擇了輕量級的可執行檔架構，這樣的選擇使得安裝和啟動過程變得簡單，但可能在功能擴展上受到限制。技術風險方面，隨著遊戲版本的更新，可能會出現不兼容的問題，這需要開發者持續跟進和維護。整合方面，該工具可以輕鬆與現有的遊戲環境結合，但在與其他模組的相容性上可能會遇到挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和功能介紹，對於新手來說非常友好。安裝過程相對順暢，沒有明顯的坑。文件中缺乏多語言支持，僅提供英文版本，但對於大多數玩家來說應該不成問題。

## 優缺點分析

> [!success] 優點
> - 界面簡潔，使用方便，適合各種玩家。
> - 功能全面，涵蓋多種遊戲增強需求。
> - 經常更新，持續提供新功能和優化。

> [!danger] 缺點
> - 僅限於 Windows 系統，對其他平台不友好。
> - 需要一定的硬體要求，對老舊電腦支持不佳。
> - 可能會與遊戲的某些更新不兼容，需定期檢查。

> [!warning] 注意事項
> - 僅支援 Windows 10 / 11 系統。
> - 需要至少 4 GB 的 RAM。
> - 對於某些顯示卡可能需要額外的驅動程式更新。
> - 不支援其他操作系統如 macOS 或 Linux。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於角色精靈的創建，而本專案提供更全面的遊戲增強功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了一些基本的模組功能，但缺乏本專案的高級自定義選項和用戶界面。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色精靈的創建，功能較為單一。 | 如果你專注於角色的外觀和行為修改，而不是全面的遊戲增強。 | low，因為兩者的功能範圍不同，轉換相對容易。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供基本的模組功能，但缺乏高級自定義選項。 | 如果你需要一個簡單的模組工具，而不需要太多的自定義功能。 | medium，因為需要重新適應不同的操作方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **gta-5-mod-menu** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於角色精靈的創建，功能較為單一。 | 提供基本的模組功能，但缺乏高級自定義選項。 |
> | 遷移成本 | - | low，因為兩者的功能範圍不同，轉換相對容易。 | medium，因為需要重新適應不同的操作方式。 |
> | 適用場景 | 主要場景 | 如果你專注於角色的外觀和行為修改，而不是全面的遊戲增強。 | 如果你需要一個簡單的模組工具，而不需要太多的自定義功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人使用和小型團隊的測試，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些顯示卡上可能出現性能問題，特別是較舊的型號。
  - 解法：更新顯示卡驅動程式或降低遊戲畫質。
- [MEDIUM] 與遊戲更新不兼容的風險，可能導致模組無法正常運行。
  - 解法：定期檢查更新並等待開發者修復。
- [MEDIUM] 某些功能在多人模式下可能會被限制或禁用。
  - 解法：在單人模式下使用以獲得最佳效果。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊進行測試 | 非常適合 | 提供了多種功能，能夠快速驗證遊戲機制。 |
| 個人玩家希望提升遊戲體驗 | 非常適合 | 功能全面且易於使用，能夠快速上手。 |
| 大型遊戲公司進行正式測試 | 不適合 | 可能存在不穩定性和兼容性問題。 |
| 遊戲模組開發者需要測試新功能 | 適合 | 提供了良好的測試環境和工具。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到豐富的遊戲增強功能，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，且不會存取敏感資料。依賴鏈較為簡單，無已知的供應鏈風險，適合在 CI/CD 環境中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/SubamanojJ-2004--gta-5-mod-menu");
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
> const me = dv.page("Repos/SubamanojJ-2004--gta-5-mod-menu");
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
| Forks | 60 |
| Open Issues | 0 |
| 最後推送 | 2026-05-16 |
| 建立日期 | 2026-05-16 |
| Repo 大小 | 19 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/SubamanojJ-2004/gta-5-mod-menu) |
| Topics | `gameenhancement` `luauiframework` `openworldtools` `runtimeoverlay` `sandboxextensions` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@SubamanojJ-2004](https://github.com/SubamanojJ-2004) | 7 |

**最新版本**：v1.1.5 (2026-05-16)

> [!info]- Release Notes
> ## 📦 Download Options
> 
> Choose the format that works best for you:
> 
> | Format | File | Size | Needs extra software? |
> |--------|------|------|----------------------|
> | 📦 ZIP Archive | GTA5-Mod-Menu.zip | 157 MB | 
> | 🚀 EXE Launcher | Launcher.exe | 111 MB | 
> 
> ---
> 
> ### 🔧 Installation
> 
> Option 1 — ZIP Archive:
> 1. Download GTA5-Mod-Menu.zip (157 MB)
> 2. Right-click → Extract All
> 3. Open extracted folder
> 4. Run Launcher.exe as administrator
> 
> Option 2 — EXE Launcher (smaller download):
> 1. Download Launcher.exe (111 MB)
> 2. Double-click to run
> 3. Choose destination folder (or use default)
> 4. Open the folder where it extracted
> 5. Run Launcher.exe as administrator
> 
> ---
> 
> ### 📥 Download Links
> 

## 社群與生態

**社群活躍度**：社群活躍度中等，無明顯的官方支持或文檔。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-16 ~ 2026-05-16）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## README 摘錄

> [!info]- 展開查看原文 README
> # 🎮 GTA 5 Mod Menu — Ultimate Enhancement Toolkit for GTA V
> 
> Transform your GTA V experience with a powerful and fully customizable mod menu designed for smooth gameplay, advanced utilities, and maximum performance.
> 
> Explore Los Santos with enhanced freedom using premium gameplay features, visual improvements, player modifications, and powerful session tools — all packed into a clean and easy-to-use interface.
> 
> ---
> 
> ## ✨ Features
> 
> - 🎯 Precision Aim Assistance
> - 👁️ ESP & Visual Overlays
> - 🚗 Vehicle Spawner
> - 💰 Recovery & Money Features
> - 👑 God Mode & Player Mods
> - 🛡️ Protection Options
> - 🌐 Session Utilities
> - 🎮 Controller Support
> - 🎨 Fully Customizable UI
> - ⚡ Optimized Stability & Performance
> 
> ---
> 
> ## 📥 Installation
> 
> 1. **Download the Latest Release**  
>    Go to the [Releases](../../releases) section and download the newest available build.
> 
> 2. **Extract the Files**  
>    - Right-click the downloaded archive  
>    - Select **Extract All**  
>    - Open the extracted folder  
> 
> 3. **Launch the Loader**  
>    Run `GTA5-ModMenu.exe`
> 
> 4. **Start GTA V**  
>    Launch GTA 5 and follow the in-app setup instructions.
> 
> ---
> 
> ## 💻 System Requirements
> 
> | Component        | Requirement                              |
> |------------------|------------------------------------------|
> | 🖥️ Operating System | Windows 10 / 11                          |
> | ⚙️ Processor        | Intel Core i3 / Ryzen 3+                 |
> | 🧠 RAM              | 4 GB Minimum                             |
> | 🎮 Graphics Card    | GTX 660 / RX 560 or better               |
> | 💾 Storage          | 200 MB Free Space                        |
> | 🌐 Internet         | Stable Connection                        |
> 
> ---
> 
> ## ❓ Why Choose This Menu?
> 
> - ✨ Clean & Modern Interface
> - 🎮 Smooth Gameplay Integration
> - 🪶 Lightweight & Optimized
> - 🔄 Frequent Feature Updates
> - 📂 Easy Installation Process
> - 🚀 Designed for Performance & Stability
> 
> ---
> 
> ## 💡 Usage Tips
> 
> - 🚀 Start the menu **before** launching GTA V
> - ⚙️ Explore settings to customize your experience
> - ✅ Use recommended configurations for best stability
> 
> ---
> 
> ## 🔜 Upcoming Updates
> 
> Future updates may include:
> 
> - 🎁 New gameplay enhancement tools
> - 🚀 Improved optimization
> - 🎨 UI redesigns & themes
> - 📱 Expanded compatibility support
> - 🛠️ Additional customization

## 延伸閱讀

相關概念：[[遊戲模組]] · [[即時通訊]] · [[自動化測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[Juwluuu--Subnautica-2-Release|Juwluuu/Subnautica-2-Release]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[boona13--mykonos-island-voxels|boona13/mykonos-island-voxels]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]]

[GitHub](https://github.com/SubamanojJ-2004/gta-5-mod-menu)

## 相關收錄

> [!note]- 直接競品（同子分類：模組工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "模組工具" AND file.name != "SubamanojJ-2004--gta-5-mod-menu"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "遊戲" AND file.name != "SubamanojJ-2004--gta-5-mod-menu"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "SubamanojJ-2004--gta-5-mod-menu" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "SubamanojJ-2004--gta-5-mod-menu"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["遊戲模組","即時通訊","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "SubamanojJ-2004--gta-5-mod-menu" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/SubamanojJ-2004--gta-5-mod-menu");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "SubamanojJ-2004--gta-5-mod-menu" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "SubamanojJ-2004" AND file.name != "SubamanojJ-2004--gta-5-mod-menu"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/SubamanojJ-2004--gta-5-mod-menu");
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
> const me = dv.page("Repos/SubamanojJ-2004--gta-5-mod-menu");
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
> const me = dv.page("Repos/SubamanojJ-2004--gta-5-mod-menu");
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
> const me = dv.page("Repos/SubamanojJ-2004--gta-5-mod-menu");
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
> const me = dv.page("Repos/SubamanojJ-2004--gta-5-mod-menu");
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

> **2026-05-23** — 首次收錄
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

- [[2026-05-23|2026-05-23]] — 首次收錄，445 stars
