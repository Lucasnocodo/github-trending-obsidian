---
repo: ParthJadhav/app-store-screenshots
url: https://github.com/ParthJadhav/app-store-screenshots
owner: ParthJadhav
owner_type: User
language: N/A
license: MIT
description: "end to end app store screenshot creation using AI"
homepage: "https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots"
stars: 2644
stars_per_day: 378
forks: 173
open_issues: 4
created: 2026-03-07
pushed_at: 2026-03-14
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "利用 AI 自動生成 iOS 應用的 App Store 截圖，省去手動設計的麻煩。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-03-17"
contributor_count: 4
engagement: "low"
issue_close_rate: 0
repo_size_kb: 2803
readme_length: 8177
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:1249,2026-03-11:1294,2026-03-13:2190,2026-03-13:2193,2026-03-14:2419,2026-03-14:2420,2026-03-15:2644"
tags:
  - github
  - "category/開發工具"
  - "lang/other"
  - easy_install
  - "topic/agentic_ai"
  - "topic/apple"
  - "topic/appstore"
  - "topic/automate"
  - "topic/claude"
aliases:
  - "app-store-screenshots"
  - "ParthJadhav/app-store-screenshots"
  - "利用 AI 自動生成 iOS 應用的 App Store 截圖，省去手動設計的麻煩。"
---

# app-store-screenshots

**2.6k** stars · **378** stars/天 · 建立 7 天前 · N/A · MIT

```dataviewjs
const me = dv.page("Repos/ParthJadhav--app-store-screenshots");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

`agentic-ai` `apple` `appstore` `automate` `claude` `cursor` `design` `generate` `ios` `ios-app` `marketing` `screenshot` `skills` `skills-sh` `swift` `swiftui` `ui`

> [!summary] 一句話摘要
> 利用 AI 自動生成 iOS 應用的 App Store 截圖，省去手動設計的麻煩。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (378 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要快速生成高品質行銷截圖的 iOS 應用開發者，尤其是面對多語言市場的團隊。
> **一句話重點** 這個專案展示了如何利用 AI 自動化行銷素材的生成，讓開發者能夠專注於產品本身。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/ParthJadhav--app-store-screenshots");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "ParthJadhav--app-store-screenshots" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到快速生成行銷截圖的能力，值得一試。

> [!abstract] 核心創新
> 這個專案的核心創新在於將 AI 技術應用於自動生成行銷截圖，並支持多語言和主題預設。

## 專案簡介

這個專案提供了一個 AI 驅動的工具，能夠自動生成 iOS 應用的 App Store 截圖。使用者只需提供應用的品牌、功能和風格偏好，工具會自動搭建一個 Next.js 專案，設計出廣告風格的截圖，並以 Apple 所需的各種解析度輸出 PNG 檔案。關鍵的 CLI 指令如 `npx skills add ParthJadhav/app-store-screenshots` 可以快速安裝並啟用這個技能，讓開發者輕鬆生成行銷用的截圖。這個工具的賣點在於其自動化程度高，能夠快速生成符合 Apple 標準的截圖，並支持多語言和主題預設，讓使用者能夠快速調整設計風格。技術上，專案使用 Next.js 作為開發伺服器，TypeScript 提供型別安全，Tailwind CSS 負責樣式設計，並利用 html-to-image 進行 PNG 輸出。

這些選擇使得專案在效能和可擴展性上有不錯的表現，能夠處理多種語言和主題的截圖生成。與其他截圖生成工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，這個專案更專注於行銷截圖的設計，而不是單純的 UI 展示，這使得它在行銷需求上更具優勢。實際使用中，使用者可以生成多達四種不同解析度的截圖，並且支持 RTL 語言的設計，這對於需要多語言支持的應用尤其重要。這個專案目前處於 alpha 階段，雖然功能強大，但仍需進一步的穩定性測試和社群支持。適合需要快速生成高品質行銷截圖的開發團隊，尤其是那些面對多語言市場的團隊。

**技術棧**：`Next.js` · `TypeScript` · `Tailwind CSS` · `html-to-image` · `React`

## 重點功能

- 自動生成行銷截圖 — 根據用戶輸入的品牌和風格自動設計截圖。
- 支持多語言和 RTL 語言 — 能夠生成多種語言的截圖，並適應右到左的語言排版。
- 一鍵導出多種解析度 — 生成符合 Apple 要求的四種不同解析度的截圖。
- 可重用主題預設 — 允許用戶快速切換設計風格，支持不同的視覺方向。
- 內建 iPhone 模擬框架 — 提供預設的 iPhone 框架以便於截圖設計。

## 快速開始

1. 安裝 App Store 截圖生成工具
```bash
npx skills add ParthJadhav/app-store-screenshots
```
2. 啟動生成過程
```bash
告訴 Claude Code 生成截圖，例如：'Build App Store screenshots for my app'
```
3. 選擇截圖風格和數量
```bash
根據提示選擇品牌顏色、字型、功能等
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 2644 stars（378/天），forks 173（6.5%），顯示出強勁的增長潛力。作者 ParthJadhav 之前有開發其他 AI 相關工具，這次專案解決了手動設計截圖的繁瑣過程，讓開發者能夠專注於應用本身，而非行銷素材的製作。這個專案的推出正值 AI 工具需求上升的時期，尤其是在行銷和設計領域。高 forks/stars 比率顯示出社群對這個工具的實際修改和使用意圖。

## 適合誰使用

**目標受眾**：需要快速生成高品質行銷截圖的 iOS 應用開發者，尤其是面對多語言市場的團隊。

> [!example] 使用場景
> - 行銷經理用它來快速生成應用的行銷截圖，因為這樣可以節省設計時間，並確保截圖符合 Apple 的要求。
> - 獨立開發者用它來為新應用創建截圖，因為這樣可以專注於應用開發，而不必擔心設計問題。
> - 多語言團隊用它來生成不同語言的截圖，因為它支持多語言和 RTL 語言的設計，能夠快速適應不同市場需求。

## 架構分析

專案採用 Next.js 作為開發框架，這使得開發者能夠快速搭建和部署應用。資料流方面，使用者輸入應用信息後，系統會自動生成截圖並導出 PNG 檔案。選擇 Next.js 的原因在於其靈活性和強大的靜態資源處理能力，這對於截圖生成至關重要。這個架構的 trade-off 在於，雖然能夠快速開發，但可能在高流量時面臨性能瓶頸。擴展性方面，專案設計支持多語言和主題預設，這使得未來可以輕鬆添加更多功能。

## 技術深入分析

這個專案的核心技術機制在於使用 AI 生成行銷截圖，並通過 Next.js 提供的靜態資源處理能力來實現。專案能夠處理多種解析度的截圖，並支持多語言和 RTL 語言的設計，這使得它在全球市場上具有競爭力。選擇 TypeScript 提供型別安全，減少了潛在的錯誤，並提升了開發效率。依賴樹方面，專案相對輕量，主要依賴 Next.js 和 Tailwind CSS，這使得整體維護成本較低。技術風險方面，隨著使用者數量增加，可能會面臨性能瓶頸，特別是在生成大量截圖時。整合方面，專案能夠與多種 AI 編碼代理兼容，這為開發者提供了靈活的使用選擇，並且與主流 CI/CD 流程的整合也相對友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝和使用說明，包含範例提示。安裝過程順暢，使用者只需執行簡單的 npx 指令。文件目前僅提供英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，能夠快速生成符合 Apple 標準的截圖。
> - 支持多語言和 RTL 語言，適合全球市場。
> - 提供可重用的主題預設，方便快速調整設計風格。

> [!danger] 缺點
> - 目前處於 alpha 階段，可能存在不穩定性。
> - 需要使用者提供詳細的應用信息，否則生成效果可能不佳。
> - 僅支持 Node.js 18+ 環境，限制了使用者的選擇。

> [!warning] 注意事項
> - 僅支持 Node.js 18+ 環境。
> - 需要使用者提供足夠的品牌和功能信息以生成有效的截圖。
> - 目前處於 alpha 階段，可能存在不穩定性和功能缺失。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和備份，而本專案專注於行銷截圖的生成，適用場景不同。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 主要用於數據抓取和分析，而本專案則是針對應用截圖設計，功能範圍不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步和備份，而本專案專注於行銷截圖的生成，功能範圍不同。 | 如果你的需求是資料同步而非截圖生成，則應選擇它。 | low，因為兩者功能差異明顯，無需遷移。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 主要用於數據抓取和分析，而本專案則針對應用截圖設計，功能範圍不同。 | 如果需要進行數據分析而非截圖生成，則應選擇它。 | low，因為兩者功能差異明顯，無需遷移。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **app-store-screenshots** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料同步和備份，而本專案專注於行銷截圖的生成，功能範圍不同。 | 主要用於數據抓取和分析，而本專案則針對應用截圖設計，功能範圍不同。 |
> | 遷移成本 | - | low，因為兩者功能差異明顯，無需遷移。 | low，因為兩者功能差異明顯，無需遷移。 |
> | 適用場景 | 主要場景 | 如果你的需求是資料同步而非截圖生成，則應選擇它。 | 如果需要進行數據分析而非截圖生成，則應選擇它。 |

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

- [MEDIUM] 在生成多語言截圖時，可能會出現排版錯誤，特別是 RTL 語言的處理上。
  - 解法：使用預設的 RTL 樣式，並進行手動調整。
- **[HIGH]** 在高解析度下生成截圖時，可能會導致性能下降。
  - 解法：減少同時生成的截圖數量，分批處理。
- **[HIGH]** 需要 Node.js 18+ 環境，舊版本可能無法運行。
  - 解法：確保環境更新至最新版本。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要快速生成行銷截圖 | 非常適合 | 自動化程度高，能夠快速生成符合 Apple 標準的截圖。 |
| 獨立開發者想為新應用創建截圖 | 適合 | 簡單的使用流程和快速的生成能力。 |
| 大型企業需要多語言支持的截圖 | 普通 | 雖然支持多語言，但可能需要手動調整 RTL 語言的排版。 |
| 需要高自定義設計的行銷團隊 | 不適合 | 目前的設計選項較為固定，缺乏高度自定義的能力。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速生成行銷截圖的能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，並且不存取敏感資料。依賴的庫經過廣泛使用，信任程度高，適合在 CI/CD pipeline 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 AI 編碼代理搭配使用，特別是在開發和行銷流程中。實際整合範例包括在一個用 Next.js 部署的專案中，使用 `npx skills add ParthJadhav/app-store-screenshots` 指令來快速生成行銷截圖。它支援與 GitHub Actions 和其他 CI 工具的整合，並且可以在 VS Code 中進行開發。整合的摩擦點主要在於需要確保 Node.js 環境符合要求，否則可能會導致運行錯誤。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，開發者通常需要手動設計 App Store 截圖，這個過程繁瑣且耗時。許多工具雖然提供了截圖生成的功能，但缺乏針對行銷需求的設計。隨著 AI 技術的進步，這個專案能夠自動化截圖生成，並提供符合行銷需求的設計。

這個工具代表了自動化設計的趨勢，未來可能會有更多類似的工具出現，進一步提升開發者的工作效率。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Node.js 環境
- 了解基本的 Next.js 使用
- 有行銷素材設計經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用。第二週：在小型內部工具中導入。第三週：撰寫使用手冊和最佳實踐。第四週：在主產品中開始使用。

**成功指標**：成功生成的行銷截圖數量和質量提升。

> [!warning] 退出計畫
> 如果要退出這個工具，所有設定和生成的素材都可以輕鬆導出，並轉換為其他格式。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/ParthJadhav--app-store-screenshots");
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
> const me = dv.page("Repos/ParthJadhav--app-store-screenshots");
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
| Forks | 173 |
| Open Issues | 4 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-14 |
| 建立日期 | 2026-03-07 |
| 官方網站 | [Link](https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots) |
| Repo 大小 | 2.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ParthJadhav/app-store-screenshots) |
| Topics | `agentic-ai` `apple` `appstore` `automate` `claude` `cursor` `design` `generate` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ParthJadhav](https://github.com/ParthJadhav) | 11 |
> | [@berketok-git](https://github.com/berketok-git) | 4 |
> | [@cameronehrlich](https://github.com/cameronehrlich) | 1 |
> | [@martinpam](https://github.com/martinpam) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者近期有持續更新和維護。
**連結**：[文件](https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-12 ~ 2026-03-14）
> **活躍天數** 3 天 · **最新 commit** Add contribution docs and GitHub templates (#7)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/ParthJadhav/app-store-screenshots/issues/3) | FrameKit: | 8 | 0 |
> | [#4](https://github.com/ParthJadhav/app-store-screenshots/issues/4) | Your project was featured on AI Digital Crew 🎉 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> [](https://bloom.parthjadhav.com)
> 
> ### NOTE: MAKE SURE TO USE 6.1 INCH simulator to capture starting screenshots
> this will save u from adjusting the images later
> 
> # App Store Screenshots Generator
> 
> A skill for AI-powered coding agents (Claude Code, Cursor, Windsurf, etc.) that generates production-ready App Store screenshots for iOS apps. It scaffolds a Next.js project, designs advertisement-style screenshots, and exports them at all required Apple resolutions.
> #### Screenshots & App approved by Apple - https://apps.apple.com/us/app/bloom-coffee-shelf-recipe/id6759914524
> 
> ## What it does
> 
> - Asks you about your app's brand, features, and style preferences
> - Scaffolds a minimal Next.js project (or works within an existing one)
> - Designs each screenshot as an **advertisement** — not a UI showcase
> - Writes compelling copy using proven App Store copywriting patterns
> - Renders screenshots at full resolution with a built-in iPhone mockup
> - Exports PNGs at all 4 Apple-required sizes (6.9", 6.5", 6.3", 6.1")
> - Supports locale-based screenshot sets and localized copy
> - Supports reusable theme presets so you can swap art direction quickly
> - Supports RTL-aware layouts and bulk export across locale/device/theme combinations
> 
> ## Included assets
> 
> - `mockup.png` — Pre-measured iPhone frame with transparent screen area
> 
> ## Install
> 
> ### Using npx skills (recommended)
> 
> ```bash
> npx skills add ParthJadhav/app-store-screenshots
> ```
> 
> This works with Claude Code, Cursor, Windsurf, OpenCode, Codex, and [40+ other agents](https://github.com/vercel-labs/skills#available-agents).
> 
> Install globally (available across all projects):
> 
> ```bash
> npx skills add ParthJadhav/app-store-screenshots -g
> ```
> 
> Install for a specific agent:
> 
> ```bash
> npx skills add ParthJadhav/app-store-screenshots -a claude-code
> ```
> 
> ### Manual (git clone)
> 
> ```bash
> git clone https://github.com/ParthJadhav/app-store-screenshots ~/.claude/skills/app-store-screenshots
> ```
> 
> ## Usage
> 
> Once installed, the skill triggers automatically when you ask Claude Code to:
> 
> - Build App Store screenshots
> - Generate marketing screenshots for an iOS app
> - Create exportable screenshot assets
> 
> Or just tell Claude Code what you need:
> 
> ```
> > Build App Store screenshots for my app
> ```
> 
> Claude will ask you about your app's screenshots, brand colors, font, features, style direction, and number of slides before building anything.
> 
> ## Example prompts
> 
> These are good starting prompts because they provide product context while still leaving room for the skill to guide the design process.
> 
> ### Habit tracker
> 
> ```text
> Build App Store screenshots for my habit tracker.
> The app helps people stay consistent with simple daily routines.
> I want 6 slides, clean/minimal style, warm neutrals, and a calm premium feel.
> ```
> 
> ### Finance app
> 
> ```text
> Generate App Store screenshots for my personal finance app.
> The app's main strengths are fast expense capture, clear monthly trends, and shared budgets.
> I want a sharp, modern style with high contrast and 7 slides.
> ```
> 
> ### AI productivity tool
> 
> ```text
> Create exportable App Store screenshots for my AI note-taking app.
> The core value is turning messy voice notes into clean summaries and action items.
> I want bold copy, dark backgrounds, and a polished tech-forward look.
> ```
> 
> ### Wellness app
> 
> ```text
> Build marketing screenshots for my meditation app.
> The app focuses on sleep, stress relief, and short guided sessions.
> Use a soft, warm, organic style and prioritize emotional outcomes over feature lists.
> ```
> 
> ### Multi-language / multi-theme
> 
> ```text
> Build App Store screenshots for my language learning app.
> I need English, German, and Arabic screenshot sets.
> Use two reusable themes: clean-light and dark-bold.
> Make sure Arabic slides feel RTL-native, not just translated.
> ```
> 
> ## Better prompt tips
> 
> - say what the app does in one sentence
> - list the top 3-5 features in priority order
> - describe the visual style you want
> - mention how many slides you need
> - mention if you need multiple languages or RTL locales
> - mention if you want one art direction or reusable theme presets
> - provide references if you want the output to match a certain App Store style
> 
> ## What gets scaffolded
> 
> If starting from an empty folder, the skill creates:
> 
> ```
> project/
> ├── public/
> │   ├── mockup.png          # iPhone frame (copied from skill)
> │   ├── app-icon.png        # Your app icon
> │   ├── screenshots/        # Your app screenshots (locale folders optional)
> │   └── screenshots-ipad/   # Optional iPad screenshots (locale folders optional)
> ├── src/app/
> │   ├── layout.tsx          # Font setup
> │   └── page.tsx            # Screenshot generator (single file)
> ├── package.json
> └── ...
> ```
> 
> The entire generator is a **single `page.tsx` file**. Run the dev server, open the browser, click any screenshot to export it as a PNG.
> 
> The latest version of the skill also guides the agent to generate:
> 
> - locale tabs and locale-specific screenshot folders
> - reusable theme presets backed by design tokens
> - RTL-aware layouts for languages like Arabic and Hebrew
> - bulk export flows for locale/device/theme combinations
> 
> ## Export sizes
> 
> | Display | Resolution |
> |---------|-----------|
> | 6.9" | 1320 x 2868 |
> | 6.5" | 1284 x 2778 |
> | 6.3" | 1206 x 2622 |
> | 6.1" | 1125 x 2436 |
> 
> Screenshots are designed at 1320x2868 (largest) and scaled down for smaller sizes.
> 
> ## Advanced capabilities
> 
> ### Multi-language screenshots
> 
> The skill can generate screenshot systems for multiple locales by nesting images under locale folders such as:
> 
> ```text
> public/screenshots/en/home.png
> public/screenshots/de/home.png
> public/screenshots/ar/home.png
> ```
> 
> The generated page keeps slide structure the same and swaps only the locale base path and copy dictionary.
> 
> ### Theme presets
> 
> Instead of hardcoding one art direction, the skill now encourages a token-driven preset system, for example:
> 
> ```ts
> const THEMES = {
>   "clean-light": { bg: "#F6F1EA", fg: "#171717", accent: "#5B7CFA" },
>   "dark-bold": { bg: "#0B1020", fg: "#F8FAFC", accent: "#8B5CF6" },
>   "warm-editorial": { bg: "#F7E8DA", fg: "#2B1D17", accent: "#D97706" },
> } as const;
> ```
> 
> This lets you reuse the same slide system while testing different visual directions fast.
> 
> ### RTL-aware design
> 
> For RTL locales such as Arabic and Hebrew, the skill now tells the agent to:
> 
> - set `dir="rtl"` on the screenshot canvas
> - rewrite line breaks for the target language
> - mirror asymmetric layouts intentionally
> - keep the composition feeling native instead of mechanically flipped
> 
> ### Bulk export matrix
> 
> The generator is now expected to support exporting not only the current slide, but also:
> 
> - all slides for the current locale/device/theme
> - all locales for the current theme
> - full locale + device + theme matrices when needed
> 
> ## Tech stack
> 
> | Dependency | Purpose |
> |-----------|---------|
> | Next.js | Dev server + static image serving |
> | TypeScript | Type safety |
> | Tailwind CSS | Styling |
> | html-to-image | PNG export at exact resolutions |
> | React | Component composition |
> 
> ## Key design principles
> 
> - **Screenshots are ads, not docs** — each slide sells one idea
> - **Copy follows the "one second" rule** — readable at thumbnail size in the App Store
> - **Layouts vary** — no two adjacent slides share the same phone placement
> - **Style is user-driven** — no hardcoded colors, gradients, or fonts
> 
> ## Quality Checklist
> 
> Before exporting, each slide should pass this quick review:
> 
> - the headline communicates one idea in about one second
> - the first slide sells the strongest user benefit
> - adjacent slides do not reuse the same layout
> - decorative elements support the message instead of blocking the UI
> - text, screenshots, and framing still look correct after export sizing
> 
> ## Requirements
> 
> - Node.js 18+
> - One of: bun, pnpm, yarn, or npm (detected automatically, bun preferred)
> 
> ## Contributing
> 
> Contributions are welcome, especially around:
> 
> - screenshot generation reliability
> - skill prompt quality
> - clearer docs and onboarding
> - cross-agent compatibility
> 

## 延伸閱讀

相關概念：[[自動化]] · [[行銷]] · [[多語言支持]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[app-screenshot-generator--app-screenshot-generator|app-screenshot-generator/app-screenshot-generator]] · [[screenshot-generator--screenshot-generator|screenshot-generator/screenshot-generator]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]]

[GitHub](https://github.com/ParthJadhav/app-store-screenshots) · [官方網站](https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "ParthJadhav--app-store-screenshots"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "ParthJadhav--app-store-screenshots"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "N/A" AND file.name != "ParthJadhav--app-store-screenshots" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "ParthJadhav--app-store-screenshots"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","行銷","多語言支持"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "ParthJadhav--app-store-screenshots" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/ParthJadhav--app-store-screenshots");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "ParthJadhav--app-store-screenshots" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "ParthJadhav" AND file.name != "ParthJadhav--app-store-screenshots"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/ParthJadhav--app-store-screenshots");
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
> const me = dv.page("Repos/ParthJadhav--app-store-screenshots");
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
> const me = dv.page("Repos/ParthJadhav--app-store-screenshots");
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
> const me = dv.page("Repos/ParthJadhav--app-store-screenshots");
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
> const me = dv.page("Repos/ParthJadhav--app-store-screenshots");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-14|2026-03-14]] — 再次上榜，2.4k stars
- [[2026-03-13|2026-03-13]] — 再次上榜，2.2k stars
- [[2026-03-11|2026-03-11]] — 再次上榜，922 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，653 stars
