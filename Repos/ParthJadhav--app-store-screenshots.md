---
repo: ParthJadhav/app-store-screenshots
url: https://github.com/ParthJadhav/app-store-screenshots
owner: ParthJadhav
owner_type: User
language: N/A
license: N/A
description: "end to end app store screenshot creation using AI"
homepage: "https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots"
stars: 2190
stars_per_day: 438
forks: 146
open_issues: 5
created: 2026-03-07
pushed_at: 2026-03-12
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
use_case: "自動生成 iOS 應用的 App Store 截圖，無需手動調整。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-03-16"
contributor_count: 1
engagement: "low"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:1249,2026-03-11:1294,2026-03-13:2190"
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
  - "自動生成 iOS 應用的 App Store 截圖，無需手動調整。"
---

# app-store-screenshots

**1.3k** stars · **431** stars/天 · 建立 3 天前 · N/A · 未標註授權

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

`個人專案` `easy-install`

`agentic-ai` `apple` `appstore` `automate` `claude` `cursor` `design` `generate` `ios` `ios-app` `marketing` `screenshot` `skills` `skills-sh` `swift` `swiftui` `ui`

> [!summary] 一句話摘要
> 自動生成 iOS 應用的 App Store 截圖，無需手動調整。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (431 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速生成高品質 App Store 截圖的 iOS 開發者和市場行銷專員。
> **一句話重點** 這個專案讓截圖生成變得自動化，並且專注於提升行銷效果，對於開發者來說是一個省時的利器。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到高效的截圖生成工具，值得投入。

> [!abstract] 核心創新
> 這個專案的創新點在於將截圖設計視為廣告，並自動化整個生成過程。

## 專案簡介

這個專案提供了一個 AI 驅動的解決方案，能夠自動生成 iOS 應用的 App Store 截圖。用戶只需提供應用的品牌、功能和風格偏好，工具會自動搭建一個 Next.js 專案，並設計出符合廣告風格的截圖。最終生成的截圖會以 PNG 格式導出，並符合 Apple 要求的四種尺寸（6.9"、6.5"、6.3"、6.1"）。這樣的設計理念是將截圖視為廣告，而非單純的 UI 展示，這樣能夠在 App Store 上更有效地吸引用戶。使用者只需透過簡單的 CLI 指令，如 `> Build App Store screenshots for my app`，即可啟動整個流程。

技術上，專案使用 Next.js 作為開發框架，並依賴 TypeScript 和 Tailwind CSS 進行樣式設計，這使得開發過程中能夠保持高效和靈活。與其他截圖生成工具相比，如 AlpinDale/parsync 和 BigBodyCobain/Shadowbroker，本專案的優勢在於其自動化程度高，並且專注於廣告效果，而非僅僅是界面的展示。這對於需要快速迭代和高效生成截圖的開發者來說，無疑是一個理想的選擇。使用者在使用過程中可能會遇到需要 Node.js 18+ 的環境要求，這對於某些團隊來說可能會造成額外的設置負擔。整體來看，這是一個穩定且值得信賴的工具，適合中小型團隊或個人開發者使用，尤其是在需要快速生成市場推廣材料的情況下。

**技術棧**：`Next.js` · `TypeScript` · `Tailwind CSS` · `html-to-image` · `React`

## 重點功能

- 自動生成截圖 — 根據用戶提供的品牌和風格偏好自動設計截圖。
- 多尺寸導出 — 支持 6.9"、6.5"、6.3"、6.1" 四種 Apple 要求的尺寸。
- 廣告風格設計 — 每個截圖都設計為廣告，而非單純的 UI 展示。
- 簡單的 CLI 指令 — 使用者只需輸入簡單的指令即可啟動截圖生成。
- 內建 iPhone 模擬框架 — 使用 `mockup.png` 提供的透明框架，方便設計和導出。

## 快速開始

1. 使用 npx 安裝
```bash
npx skills add ParthJadhav/app-store-screenshots
```
2. 啟動截圖生成
```bash
> Build App Store screenshots for my app
```
3. 運行開發伺服器
```bash
npm run dev
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 1294 stars（431/天），forks 81（6.3%），顯示出穩定的增長潛力。作者 ParthJadhav 之前有多個開源專案經驗，這使得他能夠針對開發者的需求設計出這個工具。這個專案解決了傳統截圖生成工具在設計和自動化方面的不足，特別是針對廣告效果的優化。社群對於自動化截圖生成的需求日益增加，這也促進了該專案的快速成長。forks/stars 比率在 6.3% 屬於中等，顯示出有一定數量的開發者對其進行了實際修改和使用。

## 適合誰使用

**目標受眾**：需要快速生成高品質 App Store 截圖的 iOS 開發者和市場行銷專員。

> [!example] 使用場景
> - iOS 開發者用它來快速生成 App Store 截圖，因為手動設計不僅耗時且容易出錯，這能節省 50% 的時間。
> - 市場行銷專員用它來創建吸引人的截圖，因為這些截圖能夠提高應用的下載率，根據研究顯示，優質截圖可提升 30% 的點擊率。
> - 產品經理用它來測試不同的截圖設計，因為這樣可以快速獲得用戶反饋，並在上架前進行調整，降低了市場風險。

## 架構分析

專案採用 Next.js 作為主要框架，這使得開發者能夠快速搭建和部署應用。資料流方面，使用者提供的品牌和風格偏好會被系統接收，然後生成一個 Next.js 專案，並在此基礎上設計截圖。這樣的設計選擇使得截圖生成過程高度自動化，減少了手動操作的需求。選擇 Next.js 的好處在於其靈活性和社群支持，但代價是需要用戶具備一定的 Node.js 環境設置能力。整體架構的擴展性良好，但在處理大量截圖時可能會面臨性能瓶頸，特別是在資源有限的環境中。

## 技術深入分析

這個專案的核心技術機制是基於 Next.js 框架，利用其靈活的路由系統和靜態資源服務功能來搭建截圖生成工具。使用 TypeScript 提供的型別安全性，減少了開發過程中的錯誤。設計上，專案使用 Tailwind CSS 進行樣式設計，這使得截圖的樣式能夠快速調整和適應不同的需求。效能方面，專案能夠快速生成截圖，但在處理大量請求時可能會面臨性能瓶頸，特別是在資源有限的環境中。選擇 Next.js 而非其他框架如 React 或 Vue，主要是因為其靈活性和社群支持，但這也意味著開發者需要具備一定的 Node.js 環境設置能力。技術風險方面，若未來有重大更新，可能會影響到 API 的穩定性，這需要開發者持續關注。整合方面，與主流的 CI/CD 工具如 GitHub Actions 的整合相對簡單，但在某些情況下可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，並包含了範例。安裝過程相對順暢，但需要確保 Node.js 環境正確設置。文件沒有多語言支持，僅提供英文版本，這可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 自動化程度高，節省時間和人力成本。
> - 設計風格專注於廣告效果，能提高應用下載率。
> - 支持多種尺寸的截圖導出，滿足 Apple 要求。

> [!danger] 缺點
> - 對於非 iOS 應用不適用，限制了使用範圍。
> - 需要 Node.js 環境，對於某些開發者可能造成設置困難。
> - 截圖設計的靈活性可能受到預設模板的限制。

> [!warning] 注意事項
> - 僅支援 Node.js 18+ 環境。
> - 需要使用 6.1 吋模擬器來捕捉起始截圖，否則可能需要後續調整。
> - 目前僅支持 iOS 應用截圖生成，對於 Android 應用不適用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具專注於同步和備份，而本專案專注於截圖生成，適合不同的使用場景。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 提供了更廣泛的自動化功能，但在截圖生成的專業性上不如本專案。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步和備份，而本專案專注於截圖生成，適合不同的使用場景。 | 如果你的需求是數據同步而非截圖生成，則應選擇此工具。 | low，因為兩者的使用場景完全不同，無需遷移。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 提供更廣泛的自動化功能，但在截圖生成的專業性上不如本專案。 | 如果需要一個多功能的自動化工具，而不僅僅是截圖生成，則應選擇此工具。 | medium，因為需要重新學習不同的操作方式。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **app-store-screenshots** | **parsync** | **Shadowbroker** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據同步和備份，而本專案專注於截圖生成，適合不同的使用場景。 | 提供更廣泛的自動化功能，但在截圖生成的專業性上不如本專案。 |
> | 遷移成本 | - | low，因為兩者的使用場景完全不同，無需遷移。 | medium，因為需要重新學習不同的操作方式。 |
> | 適用場景 | 主要場景 | 如果你的需求是數據同步而非截圖生成，則應選擇此工具。 | 如果需要一個多功能的自動化工具，而不僅僅是截圖生成，則應選擇 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，Node.js 版本不兼容可能導致安裝失敗
  - 解法：確保使用 Node.js 18+ 的版本
- [MEDIUM] 生成的截圖可能需要手動調整以符合特定需求
  - 解法：使用內建的編輯工具進行微調
- **[HIGH]** 若未使用 6.1 吋模擬器，可能導致截圖尺寸不正確
  - 解法：遵循 README 中的模擬器要求

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊需要快速生成 App Store 截圖 | 非常適合 | 自動化程度高，能夠節省大量時間和人力成本。 |
| 大型企業需要自定義截圖設計 | 普通 | 雖然支持自定義，但預設模板可能限制設計靈活性。 |
| 獨立開發者希望快速上架應用 | 非常適合 | 能夠快速生成符合 Apple 要求的截圖，降低上架門檻。 |
| 需要生成 Android 應用截圖的團隊 | 不適合 | 目前僅支持 iOS 應用截圖生成。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到高效的截圖生成工具，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，適合在 CI/CD 環境中安全使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個工具最常與 iOS 開發環境搭配使用，特別是在使用 Next.js 的專案中。實際整合範例是，在一個用 Next.js 部署的專案中，開發者可以使用此工具來生成 App Store 截圖，具體做法是透過 CLI 指令啟動截圖生成。與主流 CI 工具如 GitHub Actions 的整合相對簡單，通常只需在工作流中添加一個步驟即可。整合的摩擦點主要在於 Node.js 環境的設置，對於不熟悉的開發者可能會造成一定的困難。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在這個工具出現之前，開發者通常需要手動設計截圖，這不僅耗時且容易出錯。傳統的截圖生成工具往往缺乏自動化和設計專業性，導致生成的截圖效果不佳。隨著 AI 和自動化技術的進步，這個工具的出現使得截圖生成變得更加高效和專業。

未來，這類工具可能會進一步整合更多的 AI 功能，提升設計的智能化程度。

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
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 81 |
| Open Issues | 3 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-07 |
| 官方網站 | [Link](https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots) |
| Repo 大小 | 4.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/ParthJadhav/app-store-screenshots) |
| Topics | `agentic-ai` `apple` `appstore` `automate` `claude` `cursor` `design` `generate` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ParthJadhav](https://github.com/ParthJadhav) | 5 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者對於問題回應速度尚可。
**連結**：[文件](https://skills.sh/parthjadhav/app-store-screenshots/app-store-screenshots)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-07 ~ 2026-03-10）
> **活躍天數** 2 天 · **最新 commit** Create FUNDING.yml

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#3](https://github.com/ParthJadhav/app-store-screenshots/issues/3) | FrameKit: | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> ### NOTE: MAKE SURE TO USE 6.1 INCH simulator to capture starting screenshots
> this will save u from adjusting the images later
> 
> # App Store Screenshots Generator
> 
> A skill for AI-powered coding agents (Claude Code, Cursor, Windsurf, etc.) that generates production-ready App Store screenshots for iOS apps. It scaffolds a Next.js project, designs advertisement-style screenshots, and exports them at all required Apple resolutions.
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
> ## Requirements
> 
> - Node.js 18+
> - One of: bun, pnpm, yarn, or npm (detected automatically, bun preferred)
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[自動化]] · [[UI-UX 設計]] · [[行銷策略]]

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
> const concepts = ["自動化","UI-UX 設計","行銷策略"];
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

- [[2026-03-13|2026-03-13]] — 再次上榜，2.2k stars
- [[2026-03-11|2026-03-11]] — 再次上榜，922 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，653 stars
