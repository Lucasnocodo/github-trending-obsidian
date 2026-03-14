---
repo: ParthJadhav/app-store-screenshots
url: https://github.com/ParthJadhav/app-store-screenshots
owner: ParthJadhav
owner_type: User
language: N/A
license: MIT
description: "end to end app store screenshot creation using AI"
homepage: "https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots"
stars: 2419
stars_per_day: 403
forks: 156
open_issues: 6
created: 2026-03-07
pushed_at: 2026-03-13
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
use_case: "自動生成 iOS 應用的 App Store 截圖，省去手動設計的麻煩。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-03-17"
contributor_count: 4
engagement: "low"
issue_close_rate: 0
repo_size_kb: 2781
readme_length: 5388
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:1249,2026-03-11:1294,2026-03-13:2190,2026-03-13:2193,2026-03-14:2419"
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
  - "自動生成 iOS 應用的 App Store 截圖，省去手動設計的麻煩。"
---

# app-store-screenshots

**2.2k** stars · **439** stars/天 · 建立 5 天前 · N/A · MIT

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
> 自動生成 iOS 應用的 App Store 截圖，省去手動設計的麻煩。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (439 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Low
> **適合** 需要快速生成 iOS 應用截圖的開發者和行銷人員。
> **一句話重點** 這個專案讓開發者能夠快速生成符合 Apple 要求的高質量截圖，從而提升應用的市場競爭力。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，得到自動化生成截圖的效果，值得嘗試。

> [!abstract] 核心創新
> 這個專案的核心創新在於將 AI 技術應用於自動生成廣告風格的 App Store 截圖。

## 專案簡介

這個專案提供了一個 AI 驅動的工具，用於生成 iOS 應用的 App Store 截圖。用戶只需提供應用的品牌、功能和風格偏好，工具會自動搭建一個 Next.js 專案，設計出廣告風格的截圖，並以 Apple 要求的四種尺寸導出 PNG 檔案。這樣的設計不僅節省了手動調整的時間，還能確保截圖在視覺上吸引人。使用者可以透過簡單的 CLI 指令，如 `npx skills add ParthJadhav/app-store-screenshots` 來安裝並使用這個工具，操作非常簡單。技術上，這個工具依賴於 Next.js 作為開發伺服器，並使用 TypeScript 和 Tailwind CSS 來確保代碼的可維護性和樣式的一致性。

與其他截圖生成工具相比，如 AlpinDale/parsync，這個專案專注於生成廣告風格的截圖，而不是單純的 UI 展示，這使得它在行銷上更具優勢。實際使用中，這個工具能夠快速生成高質量的截圖，但也需要注意使用者提供的參數是否足夠清晰，否則可能導致生成的結果不如預期。這個專案目前處於活躍開發中，社群回應良好，對於需要快速生成 App Store 截圖的開發者來說，這是一個值得考慮的選擇。適合中小型團隊或個人開發者，尤其是那些在行銷上需要快速迭代的情況下。

**技術棧**：`Next.js` · `TypeScript` · `Tailwind CSS` · `html-to-image`

## 重點功能

- 自動生成截圖 — 根據用戶提供的品牌和風格偏好，生成廣告風格的 App Store 截圖。
- 多尺寸導出 — 支持 Apple 要求的四種截圖尺寸（6.9", 6.5", 6.3", 6.1"），確保兼容性。
- 簡單的 CLI 安裝 — 使用 `npx skills add ParthJadhav/app-store-screenshots` 進行安裝，方便快捷。
- 內建 iPhone 模擬框架 — 提供 `mockup.png`，便於設計和展示截圖。
- 支持多種 AI 代理 — 可與 Claude Code、Cursor 等多個 AI 代理協作使用。

## 快速開始

1. 安裝工具
```bash
npx skills add ParthJadhav/app-store-screenshots
```
2. 啟動截圖生成
```bash
> Build App Store screenshots for my app
```
3. 選擇設計參數
```bash
根據提示輸入應用的品牌、功能和風格偏好
```

## 程式碼範例

```bash
{
  "前置條件": "已安裝工具並啟動服務",
  "指令": "> Build App Store screenshots for my habit tracker.\nThe app helps people stay consistent with simple daily routines.\nI want 6 slides, clean/minimal style, warm neutrals, and a calm premium feel.",
  "預期輸出": "生成 6 張符合要求的 App Store 截圖"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 2193 stars（439/天），forks 146（6.7%），顯示出強勁的增長潛力。作者 ParthJadhav 之前有開發其他 AI 相關工具，這次專案解決了手動設計截圖的繁瑣過程，讓開發者能更專注於應用本身。近期在 AI Digital Crew 的推薦也提升了曝光率。技術上，這個工具的出現正好契合了開發者對於自動化和高效能工具的需求，尤其是在 iOS 應用開發中，截圖的設計往往是個耗時的步驟。forks/stars 比率為 6.7%，顯示出不少用戶對這個專案的實際應用感興趣。

## 適合誰使用

**目標受眾**：需要快速生成 iOS 應用截圖的開發者和行銷人員。

> [!example] 使用場景
> - iOS 開發者用它來自動生成 App Store 截圖，因為手動設計截圖耗時且容易出錯。
> - 行銷團隊用它來快速製作應用的宣傳素材，因為它能生成廣告風格的截圖，提升應用的吸引力。
> - 產品經理用它來測試不同的截圖風格，因為這個工具支持快速迭代和多樣化設計。

## 架構分析

這個專案採用 Next.js 作為基礎架構，因為它能夠快速搭建伺服器並靜態提供圖片。資料流方面，使用者提供的參數經過處理後，生成的截圖會在一個單一的 `page.tsx` 文件中進行渲染。這樣的設計使得整個工具的維護變得簡單，但也可能限制了功能的擴展性。

選擇 Next.js 而非其他框架的原因在於其靈活性和社群支持，然而這也意味著對 Node.js 環境的依賴。隨著使用者需求的增加，可能會面臨性能瓶頸，特別是在高並發的情況下。整體來說，這個架構適合中小型專案，但在大型應用中可能需要進一步的優化。

## 技術深入分析

這個專案的核心技術機制是使用 AI 來自動生成 App Store 截圖，透過用戶提供的參數來設計每一個截圖。它採用 Next.js 作為開發框架，這使得截圖生成過程能夠快速且高效。效能方面，這個工具能夠在短時間內生成多張截圖，但在高並發情況下可能會遇到性能瓶頸。設計上，選擇 TypeScript 和 Tailwind CSS 來確保代碼的可維護性和樣式的一致性，這樣的選擇雖然增加了一定的學習曲線，但也提高了整體的開發效率。這個工具的依賴樹相對簡單，主要依賴於 Next.js 和一些輔助庫，這使得整體的安裝和使用變得輕鬆。技術風險方面，對於截圖生成的準確性和美觀性，依賴於用戶提供的參數，若參數不清晰，可能導致生成的結果不如預期。在整合方面，這個工具能夠與多種 AI 代理協作，這使得它在現有的開發生態中有著良好的兼容性。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並附有範例。安裝過程相對順暢，使用者只需執行簡單的 CLI 指令即可。文件目前僅提供英文，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 自動化生成截圖，節省時間和人力成本。
> - 支持多種尺寸，符合 Apple 的要求，提升應用上架效率。
> - 簡單易用的 CLI，方便開發者快速上手。

> [!danger] 缺點
> - 對於複雜的應用功能，可能無法完全捕捉所有細節。
> - 需要 Node.js 環境，對於某些開發者來說可能增加學習成本。
> - 生成的截圖風格受限於用戶提供的參數，缺乏靈活性。

> [!warning] 注意事項
> - 僅支援 Node.js 18+ 環境
> - 需要提供清晰的品牌和風格參數，否則生成的截圖可能不符合預期
> - 對於複雜的應用功能，可能無法完全捕捉所有細節

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和備份，而本專案專注於生成 App Store 截圖，兩者適用場景不同。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 主要用於數據抓取，無法提供截圖生成的功能，適用範圍不相同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和備份，而本專案專注於生成 App Store 截圖，兩者適用場景不同。 | 如果你的需求是文件同步而非截圖生成，則應選擇它。 | low，因為兩者的功能範圍截然不同。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 主要用於數據抓取，無法提供截圖生成的功能，適用範圍不相同。 | 如果你的需求是數據抓取，則應選擇它。 | medium，因為需要重新考慮整個工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **app-store-screenshots** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文件同步和備份，而本專案專注於生成 App Store 截圖，兩者適用場景不同。 | 主要用於數據抓取，無法提供截圖生成的功能，適用範圍不相同。 |
> | 遷移成本 | - | low，因為兩者的功能範圍截然不同。 | medium，因為需要重新考慮整個工作流程。 |
> | 適用場景 | 主要場景 | 如果你的需求是文件同步而非截圖生成，則應選擇它。 | 如果你的需求是數據抓取，則應選擇它。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 生成的截圖可能不符合預期，特別是當用戶提供的參數不清晰時。
  - 解法：提供詳細的應用描述和風格參數。
- [MEDIUM] 在高並發情況下，可能會遇到性能瓶頸。
  - 解法：考慮分散請求或使用更強的伺服器。
- [MEDIUM] 需要 Node.js 環境，對於某些開發者來說可能增加學習成本。
  - 解法：提前確認開發環境符合要求。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要快速生成 App Store 截圖 | 非常適合 | 自動化生成截圖，節省時間和人力成本。 |
| 大型企業需要高質量的行銷素材 | 普通 | 雖然能生成高質量截圖，但可能需要更多的自定義設計。 |
| 獨立開發者希望簡化截圖生成流程 | 非常適合 | 簡單易用的 CLI，方便快速上手。 |
| 需要生成多種風格的截圖以進行 A/B 測試 | 適合 | 支持多樣化的設計參數，能快速迭代。 |
| 希望在 Windows 環境中使用此工具 | 不適合 | 目前僅支援 Node.js 環境，可能無法在 Windows 上運行。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到自動化生成截圖的效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，依賴的庫也相對安全，適合在 CI/CD pipeline 中使用。

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
| Forks | 146 |
| Open Issues | 5 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-03-12 |
| 建立日期 | 2026-03-07 |
| 官方網站 | [Link](https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots) |
| Repo 大小 | 2.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ParthJadhav/app-store-screenshots) |
| Topics | `agentic-ai` `apple` `appstore` `automate` `claude` `cursor` `design` `generate` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ParthJadhav](https://github.com/ParthJadhav) | 8 |
> | [@berketok-git](https://github.com/berketok-git) | 2 |
> | [@cameronehrlich](https://github.com/cameronehrlich) | 1 |
> | [@martinpam](https://github.com/martinpam) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，近期有多次更新和回應。
**連結**：[文件](https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-07 ~ 2026-03-12）
> **活躍天數** 4 天 · **最新 commit** Add example prompts and copy rewrite patterns (#9)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/ParthJadhav/app-store-screenshots/issues/3) | FrameKit: | 8 | 0 |
> | [#4](https://github.com/ParthJadhav/app-store-screenshots/issues/4) | Your project was featured on AI Digital Crew 🎉 | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
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
> ## Better prompt tips
> 
> - say what the app does in one sentence
> - list the top 3-5 features in priority order
> - describe the visual style you want
> - mention how many slides you need
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
> │   └── screenshots/        # Your app screenshots
> ├── src/app/
> │   ├── layout.tsx          # Font setup
> │   └── page.tsx            # Screenshot generator (single file)
> ├── package.json
> └── ...
> ```
> 
> The entire generator is a **single `page.tsx` file**. Run the dev server, open the browser, click any screenshot to export it as a PNG.
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
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[自動化]] · [[行銷]] · [[UI設計]]

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
> const concepts = ["自動化","行銷","UI設計"];
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
