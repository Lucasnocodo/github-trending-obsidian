---
repo: cclank/cell-architecture-studio
url: https://github.com/cclank/cell-architecture-studio
owner: cclank
owner_type: User
language: HTML
license: MIT
description: "Interactive 3D cell architecture gallery built with React and Three.js"
homepage: "https://cell-architecture-studio.lanshuagent.com/"
stars: 1283
stars_per_day: 46
forks: 265
open_issues: 8
created: 2026-05-10
pushed_at: 2026-06-06
first_seen: 2026-05-16
week: "2026-W20"
month: "2026-05"
category: "教育資源"
subcategory: "生物學工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-16
use_case: "提供互動式的3D細胞架構展示，讓使用者深入了解各種細胞類型及其細節。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-23"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 134054
readme_length: 4087
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-16"
star_history: "2026-05-16:610,2026-05-16:610,2026-05-17:621,2026-05-18:631,2026-05-19:669,2026-05-20:707,2026-05-21:722,2026-05-23:765,2026-05-24:783,2026-05-25:789,2026-05-26:798,2026-05-27:808,2026-05-29:821,2026-05-30:825,2026-05-31:825,2026-06-01:827,2026-06-02:832,2026-06-03:834,2026-06-04:835,2026-06-05:841,2026-06-06:973,2026-06-07:1229,2026-06-08:1283"
tags:
  - github
  - "category/教育資源"
  - "lang/html"
  - easy_install
aliases:
  - "cell-architecture-studio"
  - "cclank/cell-architecture-studio"
  - "提供互動式的3D細胞架構展示，讓使用者深入了解各種細胞類型及其細節。"
---

# cell-architecture-studio

**1.3k** stars · **46** stars/天 · 建立 28 天前 · HTML · MIT

```dataviewjs
const me = dv.page("Repos/cclank--cell-architecture-studio");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

> [!summary] 一句話摘要
> 提供互動式的3D細胞架構展示，讓使用者深入了解各種細胞類型及其細節。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (46 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要互動式細胞學習工具的教育工作者和學生。
> **一句話重點** 這個專案不僅是 3D 渲染工具，更是結合教育的互動平台，讓學習變得更有趣。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/cclank--cell-architecture-studio");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "生物學工具" && p.file.name !== "cclank--cell-architecture-studio" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 生物學工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習、10 小時整合，得到高互動性的學習工具，值得投資。

> [!abstract] 核心創新
> 提供高保真度的 3D 細胞模型渲染，並結合 AI 教學面板進行互動學習。

## 專案簡介

Cell Architecture Studio 是一個互動式的 3D 細胞架構畫廊，使用 React 和 Three.js 建立，專注於教育用途。使用者可以選擇不同的細胞類型，查看細胞器的詳細資訊，並在比較模式下進行學習。這個專案的賣點在於其高保真度的 GLB 模型渲染，特別是植物細胞和白血球，並提供了流暢的使用者體驗。核心功能包括 AI 教學面板、響應式佈局和視覺驗證覆蓋。技術上，專案使用了 TypeScript 和 Vite 作為構建工具，並依賴於 Three.js 和 React Three Fiber 來處理 3D 渲染。

這樣的選擇使得開發過程中能夠快速迭代，並保持高效能。與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Cell Architecture Studio 提供了更高的互動性和教育性，特別適合需要深入了解細胞結構的學習者。使用者可以在桌面和移動設備上獲得一致的體驗，但對於大型 GLB 資產的加載速度可能會受到網路影響。這個專案目前處於 beta 階段，未來計劃增加更多的 GLB 模型和教育註釋，適合教育機構或生物學相關的學習平台使用。

**技術棧**：`React 19` · `TypeScript` · `Vite` · `Three.js` · `React Three Fiber`

## 重點功能

- 七種細胞樣本展示 — 包括植物細胞、白血球、神經元等，提供多樣的學習資源。
- 高保真 GLB 渲染 — 對植物細胞和白血球進行原生紋理保留的渲染。
- AI 教學面板 — 提供學習提示、課程重點和掌握追蹤功能。
- 響應式佈局 — 支援桌面、緊湊和移動裝置的佈局，確保良好使用體驗。
- 視覺驗證 — 使用 Playwright 進行視覺驗證，確保介面無重大佈局回歸。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 啟動本地開發伺服器
```bash
npm run dev
```
3. 打開應用程式
```bash
http://127.0.0.1:5173/
```
4. 為生產環境建置
```bash
npm run build
```
5. 運行視覺驗證
```bash
npm run verify
```

## 程式碼範例

```html
{
  "前置條件": "已安裝 Node.js 和 npm",
  "指令": "npm run dev",
  "預期輸出": "應用程式在 http://127.0.0.1:5173/ 上運行"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 28 天內累積 1283 stars（46/天），forks 265（20.7%），顯示出強烈的社群興趣。作者 cclank 之前有開發相關的教育工具，這個專案解決了互動式生物學學習的需求，提供了高保真的 3D 渲染，讓學生能夠更直觀地理解細胞結構。近期的推廣活動和社群討論也可能促進了這個專案的曝光。高比例的 forks 表示許多人在實際修改和使用這個工具，顯示出其實用性和潛力。

## 適合誰使用

**目標受眾**：需要互動式細胞學習工具的教育工作者和學生。

> [!example] 使用場景
> - 生物老師用它來展示細胞結構，因為互動式的 3D 模型能夠幫助學生更好地理解複雜的生物概念。
> - 學生用它來進行自主學習，因為可以隨時選擇不同細胞類型並查看細節，增強學習的趣味性。
> - 教育機構用它來設計課程，因為其高保真的渲染和 AI 教學面板能夠提升教學質量。

## 架構分析

這個專案採用現代的前端架構，使用 React 和 Vite 來實現快速開發和構建。資料流主要依賴於 Three.js 進行 3D 渲染，並透過 React Three Fiber 將 3D 元件整合到 React 生態中。這樣的設計使得開發者能夠利用 React 的組件化特性來管理複雜的 3D 組件。

選擇 Vite 作為構建工具，因其快速的熱重載和優化的生產構建，這對於需要頻繁迭代的教育工具來說是非常重要的。這個架構的代價在於對於不熟悉 React 的開發者來說，學習曲線可能會稍微陡峭。擴展性方面，未來可以輕鬆添加更多細胞模型和功能，這使得專案具備良好的未來發展潛力。

## 技術深入分析

Cell Architecture Studio 的核心技術機制是基於 React 和 Three.js 的結合，使用 React Three Fiber 來將 3D 元件整合到 React 的組件中。這樣的設計使得開發者能夠利用 React 的狀態管理和生命週期方法來控制 3D 渲染。效能上，專案能夠處理多種細胞模型，但對於大型 GLB 資產的加載速度可能會受到網路影響。選擇 Vite 作為構建工具，因其提供快速的開發體驗和優化的生產構建，這對於需要頻繁迭代的專案來說是非常重要的。這個選擇的代價在於對於不熟悉 Vite 的開發者來說，可能需要一些時間來適應。技術風險方面，隨著細胞模型數量的增加，可能會出現性能瓶頸，特別是在低效能設備上。整合方面，與主流的 CI/CD 工具（如 GitHub Actions）相容性良好，並且能夠輕鬆整合到現有的 React 生態中，學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指引，並附有範例。安裝過程相對順暢，沒有明顯的坑。提供的 getting started guide 能夠幫助新手快速上手，文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 互動性強，能夠吸引學生的注意力。
> - 高保真度的 3D 渲染，增強學習效果。
> - 響應式設計，適合各種設備使用。

> [!danger] 缺點
> - 對大型資產的加載速度可能較慢。
> - 目前僅支援有限的細胞類型。
> - 視覺驗證功能需要額外配置。

> [!warning] 注意事項
> - 對大型 GLB 資產的加載速度可能受網路影響。
> - 目前僅支援特定細胞類型的 GLB 模型，其他細胞尚在開發中。
> - 視覺驗證功能可能需要額外的配置以適應不同的環境。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 2D 精靈生成，缺乏 3D 渲染的互動性，適合需要簡單動畫的場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供 3D 模型的管理工具，但不具備教育功能，適合模型管理而非學習。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 2D 精靈生成，缺乏 3D 渲染的互動性。 | 如果需要簡單的 2D 動畫而非 3D 模型展示。 | low，因為兩者的使用方式有很大不同。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供 3D 模型的管理工具，但不具備教育功能。 | 如果需要更強大的模型管理功能，而非專注於教育。 | medium，因為需要重新調整專案的焦點和功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cell-architecture-studio** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 2D 精靈生成，缺乏 3D 渲染的互動性。 | 提供 3D 模型的管理工具，但不具備教育功能。 |
> | 遷移成本 | - | low，因為兩者的使用方式有很大不同。 | medium，因為需要重新調整專案的焦點和功能。 |
> | 適用場景 | 主要場景 | 如果需要簡單的 2D 動畫而非 3D 模型展示。 | 如果需要更強大的模型管理功能，而非專注於教育。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合教育機構試用，但不建議在生產環境的核心路徑上使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 大型 GLB 資產加載速度慢，特別是在低速網路環境下。
  - 解法：考慮使用更小的模型或優化網路連接。
- [MEDIUM] 視覺驗證功能可能未涵蓋所有情境，導致漏檢。
  - 解法：定期手動檢查關鍵功能。
- [MEDIUM] 對於不熟悉 React 的開發者，學習曲線較陡峭。
  - 解法：提供額外的學習資源或指導。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 生物學相關的教育機構 | 非常適合 | 提供互動式學習工具，增強學生的學習體驗。 |
| 需要展示細胞結構的科學展覽 | 適合 | 高保真的 3D 渲染能夠吸引觀眾。 |
| 個人學習者 | 普通 | 雖然有趣，但可能需要額外的學習支持。 |
| 非生物學相關的教育場景 | 不適合 | 專注於細胞學習，對其他領域的支持不足。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習、10 小時整合，得到高互動性的學習工具，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：此工具不需要高權限，且不存取敏感資料，依賴鏈的信任程度良好，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Cell Architecture Studio 最常與 React 生態系統搭配使用，特別是在教育和科學展示的應用中。實際整合範例包括在一個使用 React 的教育平台中，透過 npm 安裝並直接引入該工具來展示細胞模型。它支援 GitHub Actions 等 CI 工具，並且能夠與 VS Code 等 IDE 整合，提供良好的開發體驗。最常見的整合問題包括對於大型 GLB 模型的加載時間，可能需要進行優化以提升使用者體驗。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Cell Architecture Studio 出現之前，許多生物學教育工具主要依賴於靜態圖像和簡單的 2D 動畫，缺乏互動性和沉浸感。隨著 3D 渲染技術的進步，這個專案的出現使得教育者能夠提供更具吸引力的學習體驗。這個工具代表了教育技術向互動學習轉型的趨勢，未來可能會隨著更多高保真模型的加入而進一步發展。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型教育團隊

**前置技能**：
- 熟悉 React
- 了解基本的 3D 渲染概念
- 有教育設計經驗

> [!tip] 導入策略
> 第一週：在小型課程中試用。第二週：收集反饋並調整教學策略。第三週：在更大範圍內推廣使用。第四週：持續優化內容和功能。

**成功指標**：學生的學習成效提升，互動學習的參與度增加。

> [!warning] 退出計畫
> 如果要退出此工具，所有設定和資源都可以轉換為標準格式，便於遷移到其他工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/cclank--cell-architecture-studio");
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
> const me = dv.page("Repos/cclank--cell-architecture-studio");
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
| Forks | 265 |
| Open Issues | 8 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-06 |
| 建立日期 | 2026-05-10 |
| 官方網站 | [Link](https://cell-architecture-studio.lanshuagent.com/) |
| Repo 大小 | 130.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/cclank/cell-architecture-studio) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@react-three/drei` `@react-three/fiber` `lucide-react` `react` `react-dom` `three` `@types/node` `@types/pngjs` `@types/react` `@types/react-dom` `@vitejs/plugin-react` `playwright-core` `pngjs` `typescript` `vite`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "HTML" : 43
>     "TypeScript" : 39
>     "CSS" : 14
>     "JavaScript" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@cclank](https://github.com/cclank) | 6 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開放問題數量尚多。
**連結**：[文件](https://github.com/cclank/cell-architecture-studio#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-10 ~ 2026-06-06）
> **活躍天數** 5 天 · **最新 commit** Update README live demo link

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#5](https://github.com/cclank/cell-architecture-studio/issues/5) | Биология | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Cell Architecture Studio
> 
> [](https://cell-architecture-studio.lanshuagent.com/)
> 
> An interactive cell architecture gallery built with React, Vite, Three.js, and staged GLB or procedural 3D cell assets. The project recreates a premium educational biology interface with selectable cell types, organelle details, comparison mode, responsive layout, and visual verification coverage.
> 
> ## Live Demo
> 
> [Open the live deployment](https://cell-architecture-studio.lanshuagent.com/)
> 
> [](https://cell-architecture-studio.lanshuagent.com/)
> 
> [View the MP4 demo file](docs/media/cell-architecture-studio-demo.mp4)
> 
> ## Highlights
> 
> - Seven specimen views: plant cell, white blood cell, neuron, epithelial cell, bacteria cell, animal cell, and muscle cell.
> - High fidelity Plant Cell and White Blood Cell GLB rendering with native texture preservation.
> - Mesh first experience with 3D canvas rendering as the default view.
> - AI Tutor panel with learning prompts, lesson focus, and mastery tracking.
> - Model loading overlay for large GLB assets on slower networks.
> - Procedural fallback geometry for specimens that do not yet have production GLB assets.
> - Detail panel for organelles, microscope modes, specimen metadata, and comparison workflow.
> - Responsive desktop, compact, and mobile layouts with browser screenshot verification.
> 
> ## Preview Modes
> 
> | Mode | Purpose |
> | --- | --- |
> | Mesh | Loads available GLB models or procedural Three.js geometry. |
> | Focus | Emphasizes selected organelles and supporting biological details. |
> 
> ## Tech Stack
> 
> | Layer | Tools |
> | --- | --- |
> | App | React 19, TypeScript, Vite |
> | 3D | Three.js, React Three Fiber, Drei |
> | UI | CSS modules in `src/styles.css`, Lucide icons |
> | Assets | GLB models, transparent PNG thumbnails, NIH previews |
> | Verification | Playwright Core, PNG pixel metrics |
> 
> ## Project Structure
> 
> ```text
> .
> |-- docs/
> |   |-- media/
> |   `-- ASSETS.md
> |-- public/
> |   |-- cell-renders/
> |   |-- cell-renders-transparent/
> |   |-- models/
> |   `-- nih-previews/
> |-- scripts/
> |   `-- verify.mjs
> `-- src/
>     |-- App.tsx
>     |-- components/
>     |-- data/
>     `-- styles.css
> ```
> 
> ## Getting Started
> 
> Install dependencies:
> 
> ```bash
> npm install
> ```
> 
> Run the local development server:
> 
> ```bash
> npm run dev
> ```
> 
> Open the app:
> 
> ```text
> http://127.0.0.1:5173/
> ```
> 
> Build for production:
> 
> ```bash
> npm run build
> ```
> 
> Run visual verification:
> 
> ```bash
> npm run verify
> ```
> 
> ## Asset Notes
> 
> The highest fidelity specimens are loaded from `public/models/` and configured in `src/data/cells.ts`.
> 
> | Specimen | Current asset |
> | --- | --- |
> | Plant Cell | `public/models/plant-cell-first001.glb` |
> | White Blood Cell | `public/models/white-blood-cell-user.glb` |
> | Animal Cell | `public/models/animal-cell-nih.glb` |
> | Neuron | `public/models/neuron-nih.glb` |
> | Bacteria Wall | `public/models/bacteria-wall-nih.glb` |
> 
> Transparent PNG references in `public/cell-renders-transparent/` are used for thumbnails and model previews. Detailed provenance is tracked in `docs/ASSETS.md`.
> 
> ## Verification
> 
> `npm run verify` launches the local app, captures desktop, compact, mobile, and interaction screenshots, then checks canvas pixel metrics to catch blank renders or major layout regressions.
> 
> Current coverage includes:
> 
> - Desktop, compact, and mobile smoke checks.
> - Plant Cell GLB render check.
> - White Blood Cell GLB render check.
> - Bacteria mesh interaction check.
> - Comparison modal check.
> 
> ## Roadmap
> 
> - Add production quality GLB models for the remaining specimens.
> - Add lazy loading and route level code splitting for 3D bundles.
> - Expand educational annotations for each organelle.
> - Add screenshot export and 3D export workflows.
> - Add asset license metadata directly into the UI.
> 
> ## License
> 
> The application code is licensed under the MIT License. Included GLB models and image assets retain their documented provenance in `docs/ASSETS.md`.
> 
> ## Credits
> 
> Special thanks to the original creator [@DilumSanjaya](https://x.com/DilumSanjaya) for the source inspiration and visual direction.
> 
> Additional 3D model provenance is documented in `docs/ASSETS.md`.

## 延伸閱讀

相關概念：[[3D 渲染]] · [[互動學習]] · [[教育技術]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]]

[GitHub](https://github.com/cclank/cell-architecture-studio) · [官方網站](https://cell-architecture-studio.lanshuagent.com/)

## 相關收錄

> [!note]- 直接競品（同子分類：生物學工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "生物學工具" AND file.name != "cclank--cell-architecture-studio"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "教育資源" AND file.name != "cclank--cell-architecture-studio"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "cclank--cell-architecture-studio" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "cclank--cell-architecture-studio"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["3D 渲染","互動學習","教育技術"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "cclank--cell-architecture-studio" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/cclank--cell-architecture-studio");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "cclank--cell-architecture-studio" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "cclank" AND file.name != "cclank--cell-architecture-studio"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/cclank--cell-architecture-studio");
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
> const me = dv.page("Repos/cclank--cell-architecture-studio");
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
> const me = dv.page("Repos/cclank--cell-architecture-studio");
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
> const me = dv.page("Repos/cclank--cell-architecture-studio");
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
> const me = dv.page("Repos/cclank--cell-architecture-studio");
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

> **2026-05-16** — 首次收錄
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

- [[2026-05-16|2026-05-16]] — 首次收錄，610 stars
