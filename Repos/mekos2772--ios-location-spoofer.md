---
repo: mekos2772/ios-location-spoofer
url: https://github.com/mekos2772/ios-location-spoofer
owner: mekos2772
owner_type: User
language: JavaScript
license: AGPL-3.0
description: "Standalone iOS app to spoof GPS location without jailbreak. Includes Shadowrocket/Surge/Loon/QX/Stash module."
homepage: ""
stars: 1148
stars_per_day: 574
forks: 164
open_issues: 1
created: 2026-06-30
pushed_at: 2026-07-02
first_seen: 2026-07-02
week: "2026-W27"
month: "2026-07"
category: "其他"
subcategory: "定位工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-02
use_case: "無需越獄即可偽造 iOS GPS 位置的獨立應用，支持多種代理工具。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-07-06"
contributor_count: 2
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 6775
readme_length: 4449
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-02"
star_history: "2026-07-02:670,2026-07-03:1148"
tags:
  - github
  - "category/其他"
  - "lang/javascript"
aliases:
  - "ios-location-spoofer"
  - "mekos2772/ios-location-spoofer"
  - "無需越獄即可偽造 iOS GPS 位置的獨立應用，支持多種代理工具。"
---

# ios-location-spoofer

**670** stars · **670** stars/天 · 建立 1 天前 · JavaScript · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/mekos2772--ios-location-spoofer");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 無需越獄即可偽造 iOS GPS 位置的獨立應用，支持多種代理工具。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (670 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 需要在不越獄的情況下偽造 iOS GPS 位置的用戶，尤其是遊戲玩家和開發者。
> **一句話重點** 這個專案的強大之處在於其無需越獄的 GPS 偽造能力，並且支持多種代理工具，讓使用者能夠輕鬆修改位置。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/mekos2772--ios-location-spoofer");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "定位工具" && p.file.name !== "mekos2772--ios-location-spoofer" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 定位工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** medium
> **結論** 花 3 小時學習，2 小時整合，得到靈活的 GPS 偽造能力，值得嘗試。

> [!abstract] 核心創新
> 將 GPS 偽造功能擴展到多個代理平台，無需編譯和開發者帳號。

## 專案簡介

這個專案的核心功能是透過 HTTPS 解密來偽造 iOS 裝置的 GPS 位置，讓使用者可以將 Apple 地圖定位到任何想要的地方。使用者只需在支持的代理軟體中導入相應的模組，並設置好 HTTPS 解密，便能夠輕鬆修改定位資訊。這個工具的賣點在於它的多平台支持，從最初的 Go 實作擴展到 JavaScript 版本，兼容 Shadowrocket、Surge、Loon、Quantumult X 和 Stash 等五種代理工具，讓更多用戶能夠使用。技術上，這個專案利用了 MITM 代理技術，攔截 Apple 的定位請求並修改回應，這樣 iPhone 就能獲得偽造的坐標。相較於原版，這個版本還新增了蜂窩基站坐標修改和運動狀態偽造的功能，進一步降低被系統識破的風險。

與其他類似工具相比，如 acheong08/ios-location-spoofer，這個專案的優勢在於其多平台的兼容性和即用性，無需編譯或開發者帳號。使用者在實際操作中，可能會遇到 HTTPS 解密設置的複雜性，特別是在不同代理工具中的配置差異。這個專案目前處於早期階段，雖然功能完整，但仍需進一步的測試和社群反饋來提升穩定性。對於需要頻繁更改位置的用戶，這個工具非常適合，但對於不熟悉代理設置的用戶，可能需要花時間學習如何配置。

**技術棧**：`JavaScript`

## 重點功能

- 多平台支持 — 同時支持 Shadowrocket、Surge、Loon、Quantumult X 和 Stash。
- 蜂窩基站坐標修改 — 除了 WiFi 熱點，還能修改 CellTower 坐標。
- 運動狀態偽造 — 改寫 motionActivityType 和 motionActivityConfidence，降低被識破的風險。
- 自動格式檢測 — 自動檢測 Apple 回應的封裝格式，確保修改後的坐標能被正確識別。
- 簡易配置 — 無需編譯，直接導入模組即可使用。

## 快速開始

1. 安裝並信任 CA 證書
```bash
設定 → 通用 → VPN 與設備管理 → 安裝 → 證書信任設置 → 啟用
```
2. 導入模組文件
```bash
配置 → 右上角 + (Shadowrocket) / 首頁 → 模塊 → 安裝新模塊 (Surge)
```
3. 斷開重連 VPN，開啟定位服務
```bash
在地圖 App 中驗證位置
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 670 stars（670/天），forks 98（14.6%），顯示出強烈的使用需求。作者 mekos2772 是一位活躍的開發者，之前參與過多個開源專案，這次的工具解決了 iOS 用戶在不越獄的情況下偽造位置的需求，之前的解決方案多數需要複雜的設置或越獄。這個專案的推出引起了社群的廣泛關注，尤其是在隱私和定位需求日益增長的背景下。forks/stars 比率為 14.6%，顯示出許多用戶在實際修改和使用此工具。

## 適合誰使用

**目標受眾**：需要在不越獄的情況下偽造 iOS GPS 位置的用戶，尤其是遊戲玩家和開發者。

> [!example] 使用場景
> - 遊戲玩家用它來在 AR 遊戲中偽造位置，因為這樣可以解鎖地區限制的遊戲內容。
> - 開發者用它來測試地理位置相關的應用，因為可以快速模擬不同地點的使用情境。
> - 隱私保護者用它來隱藏真實位置，因為這樣可以避免被追蹤和定位。

## 架構分析

這個專案的架構基於 MITM 代理技術，通過攔截 Apple 的定位請求來修改回應。核心邏輯用 JavaScript 實現，支持多個代理工具，降低了使用門檻。資料流方面，當 iPhone 向 Apple 發送定位請求時，這個工具會攔截並修改坐標，然後將修改過的數據發回給 iPhone。

選擇 JavaScript 而非 Go 的原因在於其更廣泛的兼容性和即用性。這樣的設計雖然提高了可用性，但也可能在性能上有所妥協，尤其是在高流量的情況下。整體來看，這個專案的擴展性良好，但仍需注意不同代理工具的兼容性和配置差異。

## 技術深入分析

這個專案的核心技術機制是利用 MITM 代理技術來攔截和修改 Apple 的定位請求。通過 JavaScript 實現的偽造邏輯，能夠兼容多種代理工具，這樣的設計使得使用者無需編譯即可直接使用。效能方面，這個工具的反應速度取決於代理工具的性能，理論上能夠即時修改定位資訊，但在高流量情況下可能會出現延遲。選擇 JavaScript 而非其他語言的原因在於其更好的跨平台支持和易用性，這樣的選擇雖然降低了性能，但提升了可用性。技術風險方面，這個專案在擴展時可能會面臨不同代理工具之間的兼容性問題，特別是在版本更新後。整合方面，這個工具能夠輕鬆與主流代理工具整合，但對於不熟悉代理設置的用戶來說，可能需要額外的學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的使用說明和配置步驟，對於新手來說相對友好。安裝過程中需要信任 CA 證書，這可能會讓一些用戶感到困惑。整體上，文件清晰，且有針對新手的教程，能夠幫助用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 支持多種代理工具，擴大了使用者基礎。
> - 無需編譯，簡單易用，降低了入門門檻。
> - 新增的蜂窩基站坐標修改功能，增強了偽造的真實性。

> [!danger] 缺點
> - 配置過程對新手來說較為複雜，需要一定的技術背景。
> - 目前仍在早期階段，穩定性和兼容性有待提升。
> - 依賴於代理工具的版本，未來可能需要持續更新。

> [!warning] 注意事項
> - 僅支持 iOS 系統，無法在 Android 上使用。
> - 需要手動配置 HTTPS 解密，對新手來說可能較為複雜。
> - 目前僅支持特定版本的代理工具，未來可能需要更新以保持兼容性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [acheong08/ios-location-spoofer](https://github.com/acheong08/ios-location-spoofer) | 原版專案，使用 Go 實作，僅支持單一 iOS App，無法支持多種代理工具。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理和隱私保護，但不具備 GPS 偽造的功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [acheong08/ios-location-spoofer](https://github.com/acheong08/ios-location-spoofer) | 使用 Go 實作，僅支持單一 iOS App，無法支持多種代理工具。 | 如果你的需求僅限於單一 iOS App，且希望使用 Go 實作的原版功能。 | medium，因為需要重新學習 Go 的配置方式。 |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於代理和隱私保護，但不具備 GPS 偽造的功能。 | 如果你的主要需求是代理和隱私保護，而非 GPS 偽造。 | low，因為這個工具的使用方式相對簡單。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **ios-location-spoofer** | **ios-location-spoofer** | **agent-sprite-forge** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Go 實作，僅支持單一 iOS App，無法支持多種代理工具。 | 專注於代理和隱私保護，但不具備 GPS 偽造的功能。 |
> | 遷移成本 | - | medium，因為需要重新學習 Go 的配置方式。 | low，因為這個工具的使用方式相對簡單。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於單一 iOS App，且希望使用 Go 實 | 如果你的主要需求是代理和隱私保護，而非 GPS 偽造。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人測試和學習，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** HTTPS 解密設置不當可能導致無法正常使用
  - 解法：仔細按照 README 中的步驟設置 HTTPS 解密
- [MEDIUM] 不同代理工具的配置差異可能導致功能無法正常運行
  - 解法：確認使用的代理工具版本與 README 中的描述一致
- [MEDIUM] 在某些情況下，修改的坐標可能不被 iOS 正確識別
  - 解法：檢查回應格式是否正確，並確保所有參數設置正確

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 遊戲玩家需要在 AR 遊戲中偽造位置 | 非常適合 | 能夠輕鬆修改 GPS 位置以解鎖遊戲內容。 |
| 開發者在測試地理位置相關的應用 | 適合 | 可以快速模擬不同地點的使用情境。 |
| 隱私保護者需要隱藏真實位置 | 非常適合 | 能夠有效地偽造位置，避免被追蹤。 |
| 普通用戶僅想偶爾修改位置 | 普通 | 雖然功能強大，但配置過程可能對新手有挑戰。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 3 小時學習，2 小時整合，得到靈活的 GPS 偽造能力，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要信任 CA 證書，可能會存取敏感的定位資訊。依賴於代理工具的安全性，確保使用的代理工具無已知漏洞。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/mekos2772--ios-location-spoofer");
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
> const me = dv.page("Repos/mekos2772--ios-location-spoofer");
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
| Forks | 98 |
| Open Issues | 5 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-07-01 |
| 建立日期 | 2026-06-30 |
| Repo 大小 | 6.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/mekos2772/ios-location-spoofer) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@mekos2772](https://github.com/mekos2772) | 31 |
> | [@ppanphper](https://github.com/ppanphper) | 4 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近 1 天內有更新，但 Issue 解決率為 0%。
**連結**：[文件](https://github.com/mekos2772/ios-location-spoofer)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-01 ~ 2026-07-01）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#8](https://github.com/mekos2772/ios-location-spoofer/issues/8) | 文档：补充 Shadowrocket 2.2.88(3308) 中 HTTPS 解密入口位置 | 0 | 0 |
> | [#7](https://github.com/mekos2772/ios-location-spoofer/issues/7) | 实测stash可行 | 0 | 0 |
> | [#6](https://github.com/mekos2772/ios-location-spoofer/issues/6) | surge 我试了可以的，已经解锁了 apple watch 功能 | 0 | 2 |
> | [#5](https://github.com/mekos2772/ios-location-spoofer/issues/5) | 这个有什么区别吗 | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # iOS Location Spoofer
> 
> 用代理软件的 HTTPS 解密功能，把 Apple 地图定位骗到世界任何角落。
> 
> > 📖 **新手直接看这篇** → [**小白保姆级图文教程**](使用教程.md)（一步步教你安装、配置、生效，含常见问题排查）
> 
> ## 参考项目
> 
> 本项目基于 [acheong08/ios-location-spoofer](https://github.com/acheong08/ios-location-spoofer) 的核心研究。原始项目是用 Go 写的独立 iOS App，通过自建 VPN + MITM 代理实现定位欺骗。
> 
> 本仓库将其核心逻辑移植为 JavaScript，适配到 Shadowrocket / Surge / Loon / Quantumult X / Stash 五个代理平台，免编译、免开发者账号，即导即用。
> 
> ### 相比原版新增的功能
> 
> - **多平台支持** — 从单一 iOS App 扩展到五个代理软件，覆盖更多用户
> - **蜂窝基站坐标修改** — 原版 Go 只改了 WiFi 热点坐标，JS 版额外处理了 CellTower（字段 22/24）的坐标替换
> - **多响应格式兼容** — 自动检测 Apple 回应的封装格式（ARPC / synthetic / marker / bare），确保改后还能被 iOS 正确识别
> - **运动状态伪造** — 一并改写 motionActivityType 和 motionActivityConfidence，减少被系统识破的可能
> 
> ## 怎么回事
> 
> iPhone 看 Wi-Fi 信号和基站信号，拿着 BSSID 列表去问 Apple 这些设备在什么位置。Apple 回一份坐标清单，iOS 根据这些坐标算出自己在哪里。
> 
> 这套配置做的事情很简单：**在 Apple 发回坐标的路上拦截下来，全部改成你想要的数字**。iPhone 拿到改造过的坐标，算出来就是你指定的地方。
> 
> ## 支持哪些软件
> 
> | 软件 | 文件 | 导入方法 | 状态 |
> |------|------|---------|------|
> | Shadowrocket（小火箭） | `ios-location-spoofer.sgmodule` | 配置 → 右上角 + | ✅ 实测通过 |
> | Surge | `ios-location-spoofer.sgmodule` | 首页 → 模块 → 安装新模块 | ✅ 实测通过 |
> | Loon | `ios-location-spoofer.lnplugin` | 设置 → 插件 → 添加插件 | ✅ 实测通过 |
> | Quantumult X | `ios-location-spoofer.snippet` | 设置 → 重写 → 添加 | 🟡 待测试 |
> | Stash | `ios-location-spoofer.stoverride` | 覆写 → 安装覆写 | ✅ 实测通过 |
> 
> > 欢迎测过的佬友在 Issue 区报实测结果；不通的地方欢迎直接提 PR 改 —— 至少写明**哪个软件、哪个版本、什么系统、报错的日志原文**。
> 
> ## 怎么用
> 
> 1. 软件里打开 HTTPS 解密 / MITM 开关
> 2. 安装并信任 CA 证书（设置 → 通用 → VPN 与设备管理 → 安装 → 证书信任设置 → 启用）
> 3. 导入模块文件，勾上启用
> 4. 断开重连 VPN，开关定位服务
> 5. 打开地图 App 验证
> 
> ### Loon 额外说明
> 
> 1. 导入 `ios-location-spoofer.lnplugin` 后，在 **设置 → 插件** 里打开插件配置页
> 2. 可直接填 **纬度 / 经度**；**地址搜索** 由每 15 分钟的定时任务联网解析并缓存（首次请直接填经纬度，或保存地址后等一轮 cron）
> 3. 必须开启 Loon 的 **MITM** 并信任证书，且插件内 `[mitm]` 四个域名生效
> 4. 插件含 **Prepare** 请求脚本（设置 `Accept-Encoding: identity`，避免 gzip 引发 `zip decompress error` / 脚本超时）
> 5. 改坐标后关开定位；调试打开 **调试日志**，在 Loon 日志搜 `Location spoofer`
> 
> > 日志若出现 `Evaluate script timeout` 或 `zip decompress error:-3`：更新插件并重载 Loon，确认三条脚本（Prepare / Response / Geocode cron）均已启用。
> 
> ## 改坐标
> 
> 默认 Apple Park（37.3349, -122.00902）。在模块参数里改：
> 
> ```
> latitude=39.9042&longitude=116.4074
> ```
> 
> 参数：
> 
> | 名字 | 默认值 | 说明 |
> |------|--------|------|
> | `latitude` | 37.3349 | 目标纬度 |
> | `longitude` | -122.00902 | 目标经度 |
> | `address` | （空） | 地址搜索（Loon 插件 UI 填写，联网解析为经纬度，优先于手动经纬度） |
> | `horizontalAccuracy` | 39 | 水平精度 |
> | `verticalAccuracy` | 1000 | 垂直精度 |
> | `altitude` | 530 | 海拔 |
> | `failOpen` | true | 出错放行原数据 |
> | `debug` | false | 调试日志 |
> 
> ## 文件清单
> 
> ```
> ios-location-spoofer.sgmodule    # Shadowrocket / Surge
> ios-location-spoofer.lnplugin    # Loon
> ios-location-spoofer.snippet     # Quantumult X
> ios-location-spoofer.stoverride  # Stash
> location-spoofer.js              # 核心脚本（四平台共用）
> location-spoofer-qx.js           # QX 专用
> location-spoofer-config.json     # 配置样板
> 使用教程.md                       # 小白保姆级图文教程
> location-picker/                 # 进阶（可选）：网页地图选点（Node 或 Cloudflare Worker）
> location-picker/worker/          # Cloudflare Worker 版（免 VPS，支持 Loon configUrl）
> ```
> 
> ## 进阶：网页地图选点工具
> 
> 经常换定位、懒得手动查坐标改参数？项目自带 [`location-picker/`](location-picker/) 地图选点工具：点地图即定位、海拔自动、精度可调，Loon / Shadowrocket 通过 `configUrl` 读取。
> 
> **两种部署方式：**
> 
> | 方式 | 目录 | 适合 |
> |------|------|------|
> | **Cloudflare Worker**（推荐） | [`location-picker/worker/`](location-picker/worker/) | 免 VPS、自带 HTTPS，[部署说明](location-picker/worker/README.md) |
> | Node 自托管 | [`location-picker/server.js`](location-picker/server.js) | 有自己的 VPS / NAS |
> 
> Loon 插件 **远程配置 URL** 示例：
> 
> ```
> https://你的worker.workers.dev/loc.json?token=你的TOKEN
> ```
> 
> ## 友情链接
> 
> 本项目接受 LINUX DO 社区佬友监督与反馈：[LINUX DO](https://linux.do)
> 
> ## location-picker 服务端配置
> 
> `location-picker/server.js` 通过环境变量控制，**`TOKEN` 不设进程会直接退出，不会用弱口令兜底**。
> 
> | 变量 | 是否必设 | 默认值 | 说明 |
> |------|---------|--------|------|
> | `TOKEN` | **必设** | 无 | 访问口令和 Shadowrocket 模块 `argument=` 末尾的 `configUrl` 里的 `token=` 必须一致。建议 `openssl rand -hex 24` 生成 |
> | `PORT` | 否 | `8080` | 监听端口；1024 以下需 root |
> | `CERT` | 否 | 空 | HTTPS 证书 fullchain 路径；与 `KEY` 同时设置才走 https |
> | `KEY` | 否 | 空 | HTTPS 私钥路径；与 `CERT` 同时设置才走 https |
> 
> 启动示例：
> 
> ```bash
> # http（最简，先跑通流程再用 https）
> TOKEN=$(openssl rand -hex 24) PORT=8080 node server.js
> 
> # https（复用 acme.sh 证书；续期无需重启，进程每 12 小时自动热加载）
> TOKEN=$(openssl rand -hex 24) PORT=8443 \
> CERT=/root/cert/example.com/fullchain.pem \
> KEY=/root/cert/example.com/privkey.pem \
> node server.js
> ```
> 
> 数据文件 `loc.json` 自动落在 `server.js` 同目录，记录当前坐标 / 海拔 / 精度；已在 `.gitignore` 中忽略，不会被误提交进仓库。
> 
> > ⚠️ **不要把 `TOKEN` 写在命令行历史里**——推荐用 systemd 的 `Environment=` 或 `.env` + `direnv`，避免 `history` / `ps aux` 泄露。

## 延伸閱讀

相關概念：[[MITM]] · [[HTTPS 解密]] · [[定位偽造]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[loc567--loc567|loc567/loc567]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[Yu9191--wloc|Yu9191/wloc]] · [[BohemiaInteractive--CWR|BohemiaInteractive/CWR]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]]

[GitHub](https://github.com/mekos2772/ios-location-spoofer)

## 相關收錄

> [!note]- 直接競品（同子分類：定位工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "定位工具" AND file.name != "mekos2772--ios-location-spoofer"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "mekos2772--ios-location-spoofer"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "mekos2772--ios-location-spoofer" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "mekos2772--ios-location-spoofer"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["MITM","HTTPS 解密","定位偽造"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "mekos2772--ios-location-spoofer" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/mekos2772--ios-location-spoofer");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "mekos2772--ios-location-spoofer" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "mekos2772" AND file.name != "mekos2772--ios-location-spoofer"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/mekos2772--ios-location-spoofer");
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
> const me = dv.page("Repos/mekos2772--ios-location-spoofer");
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
> const me = dv.page("Repos/mekos2772--ios-location-spoofer");
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
> const me = dv.page("Repos/mekos2772--ios-location-spoofer");
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
> const me = dv.page("Repos/mekos2772--ios-location-spoofer");
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

> **2026-07-02** — 首次收錄
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

- [[2026-07-03|2026-07-03]] — 再次上榜，1.1k stars
- [[2026-07-02|2026-07-02]] — 首次收錄，670 stars
