---
repo: cclank/cell-architecture-studio
url: https://github.com/cclank/cell-architecture-studio
owner: cclank
owner_type: User
language: TypeScript
license: MIT
description: "Interactive 3D cell architecture gallery built with React and Three.js"
homepage: "https://cell-architecture-studio-inky.vercel.app"
stars: 669
stars_per_day: 84
forks: 157
open_issues: 2
created: 2026-05-10
pushed_at: 2026-05-11
first_seen: 2026-05-16
week: "2026-W20"
month: "2026-05"
category: "其他"
subcategory: "教育工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-16
use_case: "提供互動式 3D 細胞架構展示，讓使用者深入了解細胞結構與功能。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-23"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 98246
readme_length: 4091
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-16"
star_history: "2026-05-16:610,2026-05-16:610,2026-05-17:621,2026-05-18:631,2026-05-19:669"
tags:
  - github
  - "category/其他"
  - "lang/typescript"
  - easy_install
aliases:
  - "cell-architecture-studio"
  - "cclank/cell-architecture-studio"
  - "提供互動式 3D 細胞架構展示，讓使用者深入了解細胞結構與功能。"
---

# cell-architecture-studio

**669** stars · **84** stars/天 · 建立 8 天前 · TypeScript · MIT

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
> 提供互動式 3D 細胞架構展示，讓使用者深入了解細胞結構與功能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (84 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 8 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 希望以互動方式學習細胞生物學的教育工作者和學生。
> **一句話重點** 這個專案的互動式學習方式能有效提升學生對細胞生物學的理解與興趣。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/cclank--cell-architecture-studio");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "教育工具" && p.file.name !== "cclank--cell-architecture-studio" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 教育工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，4 小時整合，得到一個互動式的生物學學習工具，值得投資。

> [!abstract] 核心創新
> 提供高保真度的 3D 細胞模型和互動式學習體驗，結合 AI 導師功能。

## 專案簡介

Cell Architecture Studio 是一個互動式 3D 細胞架構畫廊，使用 React 和 Three.js 建立，提供多種細胞類型的展示。使用者可以選擇不同的細胞（如植物細胞、白血球等），並查看細胞器的詳細資訊，這樣的設計讓學習生物學變得更加直觀且有趣。核心功能包括高保真度的 GLB 模型渲染、可選的細胞器焦點模式，以及 AI 導師面板來輔助學習。使用者只需運行 `npm run dev` 即可啟動本地開發伺服器，並在瀏覽器中查看應用。這個工具的賣點在於其高互動性和視覺化效果，能夠有效提升學習者的理解能力和記憶效果。

技術上，這個專案使用了 React 19、TypeScript 和 Vite 作為應用層，並利用 Three.js 和 React Three Fiber 進行 3D 渲染。這樣的選擇使得開發過程中能夠充分利用現代化的前端技術，並保持高效能和良好的使用者體驗。

依賴於 GLB 模型和透明 PNG 縮圖，這些資源的使用提升了視覺效果，但也可能在網路環境較差時影響載入速度。

與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Cell Architecture Studio 提供了更專注於生物學教育的功能，並且支援的細胞類型更為多樣。這些工具可能在 3D 渲染方面有所不同，但本專案的教育導向和互動性使其在學習場景中更具優勢。

使用者在實際使用中可能會遇到的限制包括需要較快的網路連接以便快速載入大型 GLB 模型，並且目前的開發狀態為 beta，可能會有一些未解決的問題，像是 Vercel 部署的問題。此外，社群活動相對活躍，但尚未解決的 Issues 可能會影響使用體驗。

總體來說，這個專案適合教育機構或對生物學有興趣的開發者，尤其是那些希望以視覺化方式呈現細胞結構的團隊。未來幾個月內，隨著更多 GLB 模型的添加和功能的擴展，這個專案有潛力成為生物學教學的重要工具。

**技術棧**：`React 19` · `TypeScript` · `Vite` · `Three.js` · `React Three Fiber`

## 重點功能

- 七種細胞樣本展示 — 包括植物細胞、白血球、神經元等，提供多樣化的學習選擇。
- 高保真度 GLB 渲染 — 確保細胞模型的質量和細節，提升學習體驗。
- AI 導師面板 — 提供學習提示和進度追蹤，幫助使用者掌握知識。
- 響應式佈局 — 支援桌面和行動裝置，確保不同設備上的良好體驗。
- 視覺驗證功能 — 使用 Playwright 進行畫面截圖和像素檢查，確保應用的穩定性。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 啟動本地開發伺服器
```bash
npm run dev
```
3. 在瀏覽器中打開應用
```bash
http://127.0.0.1:5173/
```

## 程式碼範例

```ts
[
  "# 前置條件\n# 安裝依賴後，啟動本地開發伺服器\nnpm run dev\n# 預期輸出\n# 本地開發伺服器啟動，應用可在瀏覽器中訪問。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 8 天內累積 669 stars（84/天），forks 157（23.5%），這顯示出強烈的社群興趣。作者 cclank 之前的作品可能在教育領域有一定的影響力，這個專案解決了傳統生物學教學中缺乏互動性和視覺化的問題。雖然沒有明確的觸發事件，但這樣的工具在教育科技領域的需求日益增加，尤其是在遠端學習的背景下。高達 23.5% 的 forks/stars 比率表明許多人對這個專案進行了實際修改和使用，顯示出其潛在的實用性和可擴展性。

## 適合誰使用

**目標受眾**：希望以互動方式學習細胞生物學的教育工作者和學生。

> [!example] 使用場景
> - 生物老師用它來展示細胞結構，因為互動式 3D 模型能幫助學生更好地理解細胞功能。
> - 生物學研究者用它來比較不同細胞類型的特徵，因為可視化的細胞器細節能提高研究效率。
> - 學生用它來進行自主學習，因為 AI 導師面板提供的學習提示能幫助他們掌握生物學知識。

## 架構分析

這個專案採用現代化的前端架構，使用 React 和 Vite 來構建應用，並利用 Three.js 進行 3D 渲染。這樣的選擇使得開發過程中能夠快速迭代，並保持良好的性能。資料流方面，GLB 模型從 `public/models/` 加載，並在 `src/data/cells.ts` 中配置，這樣的結構使得資源管理變得清晰。

選擇使用 GLB 模型而非傳統的圖片或簡單幾何形狀，能夠提供更真實的視覺效果，但也需要考慮到載入時間和網路速度的影響。整體架構的擴展性良好，但隨著模型數量的增加，可能會面臨性能瓶頸，特別是在移動設備上。因為使用了 Vite，開發和構建速度都相對較快，這對於快速迭代和測試非常有幫助。

## 技術深入分析

Cell Architecture Studio 的核心技術機制是基於 React 和 Three.js 的 3D 渲染，這使得使用者能夠在網頁上互動式地探索細胞結構。使用 GLB 模型作為主要資源，這些模型提供了高保真度的視覺效果，但也要求較高的網路帶寬以便快速載入。在效能方面，這個專案能夠處理多達數十個細胞模型，但在移動設備上可能會面臨性能瓶頸，特別是在載入大型 GLB 模型時。選擇 React 和 Vite 作為技術棧的好處在於能夠快速開發和部署，但這也意味著在未來可能需要面對 API 的變更風險。整體來說，這個專案的設計考量了教育場景的需求，並提供了良好的擴展性，未來可以加入更多的細胞模型和功能來增強學習體驗。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含了必要的安裝和使用說明，安裝過程順暢。提供的範例指令簡單易懂，讓新手能夠快速上手。整體而言，花 30 分鐘就能夠成功運行應用並開始探索細胞結構。

## 優缺點分析

> [!success] 優點
> - 互動性強，能有效提升學習者的參與感。
> - 高保真度的 3D 渲染，提供真實的細胞結構視覺效果。
> - AI 導師功能能夠提供個性化的學習支持。

> [!danger] 缺點
> - 需要穩定的網路連接以便載入大型模型。
> - 目前的開發狀態為 beta，可能存在未解決的問題。
> - Vercel 部署存在問題，影響線上使用體驗。

> [!warning] 注意事項
> - 需要較快的網路連接以便快速載入大型 GLB 模型。
> - 目前的開發狀態為 beta，可能會有未解決的問題。
> - Vercel 部署存在問題，可能影響線上使用體驗。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成 3D 角色模型，而 Cell Architecture Studio 更專注於細胞生物學的教育和互動展示。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供 3D 模型的展示，但缺乏針對生物學的專業功能和教育導向。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成 3D 角色模型，而 Cell Architecture Studio 更專注於細胞生物學的教育和互動展示。 | 如果需要生成多樣化的 3D 角色模型，而不僅限於生物學領域的應用。 | medium，因為需要重新設計應用的邏輯和資源管理。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供 3D 模型的展示，但缺乏針對生物學的專業功能和教育導向。 | 如果需要一個通用的 3D 模型展示平台，而不需要特定的教育功能。 | low，因為可以直接使用 3D 模型而不需要太多改動。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cell-architecture-studio** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成 3D 角色模型，而 Cell Architecture Studio 更專注於細胞生物學的教育和互動展示。 | 提供 3D 模型的展示，但缺乏針對生物學的專業功能和教育導向。 |
> | 遷移成本 | - | medium，因為需要重新設計應用的邏輯和資源管理。 | low，因為可以直接使用 3D 模型而不需要太多改動。 |
> | 適用場景 | 主要場景 | 如果需要生成多樣化的 3D 角色模型，而不僅限於生物學領域的 | 如果需要一個通用的 3D 模型展示平台，而不需要特定的教育功 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合教育機構試用，但不建議用於生產環境的核心教學工具。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Vercel 部署存在問題，可能導致應用無法正常運行
  - 解法：暫時使用本地開發伺服器進行測試
- [MEDIUM] 大型 GLB 模型載入時間較長，影響使用體驗
  - 解法：在快速網路環境下使用，或考慮使用較小的模型進行測試
- [low] 目前的功能仍在開發中，可能會遇到未實現的功能
  - 解法：定期查看更新，並參與社群討論以獲取最新資訊

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 生物學教育機構的教學工具 | 非常適合 | 提供互動式學習體驗，能有效提升學生的學習動機和理解能力。 |
| 個人學習生物學的學生 | 適合 | 能夠提供豐富的視覺化資源，幫助學生掌握複雜的生物概念。 |
| 需要展示細胞結構的科學研究者 | 普通 | 雖然提供了細胞模型，但可能缺乏專業的數據分析功能。 |
| 小型團隊進行生物學相關的開發專案 | 不適合 | 目前功能仍在開發中，可能不夠穩定。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~4 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，4 小時整合，得到一個互動式的生物學學習工具，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限操作，且不會存取敏感資料。依賴的第三方庫需定期檢查以確保安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Cell Architecture Studio 最常與教育平台和學習管理系統搭配使用，作為互動式學習工具。舉例來說，在一個使用 React 和 Vite 的教育網站中，你可以將這個工具嵌入到課程中，讓學生透過 3D 模型進行互動學習。支援 GitHub Actions 進行 CI/CD，並能與 VS Code 等 IDE 整合，提升開發效率。常見的整合問題包括模型載入速度和應用性能，這需要在設計時考慮到資源的管理和優化。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Cell Architecture Studio 出現之前，許多生物學教學工具主要依賴於靜態圖片和文字說明，缺乏互動性和視覺化的元素。這些傳統方法往往無法有效吸引學生的注意力。隨著 3D 渲染技術的進步和網路速度的提升，這個專案能夠利用現代技術提供更具吸引力的學習方式。

這個工具代表了教育科技向互動學習和視覺化資源的轉變，未來可能會有更多類似的工具出現，進一步提升學習效果。

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
| Forks | 157 |
| Open Issues | 2 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-11 |
| 建立日期 | 2026-05-10 |
| 官方網站 | [Link](https://cell-architecture-studio-inky.vercel.app) |
| Repo 大小 | 95.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/cclank/cell-architecture-studio) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@react-three/drei` `@react-three/fiber` `lucide-react` `react` `react-dom` `three` `@types/node` `@types/pngjs` `@types/react` `@types/react-dom` `@vitejs/plugin-react` `playwright-core` `pngjs` `typescript` `vite`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 68
>     "CSS" : 24
>     "JavaScript" : 8
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@cclank](https://github.com/cclank) | 6 |

## 社群與生態

**社群活躍度**：社群活動相對活躍，但尚未解決的 Issues 可能會影響使用體驗。
**連結**：[文件](https://github.com/cclank/cell-architecture-studio#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-10 ~ 2026-05-11）
> **活躍天數** 2 天 · **最新 commit** Add AI tutor learning layer

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/cclank/cell-architecture-studio/issues/1) | The vercel deployment is not working | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Cell Architecture Studio
> 
> [](https://cell-architecture-studio-inky.vercel.app)
> 
> An interactive cell architecture gallery built with React, Vite, Three.js, and staged GLB or procedural 3D cell assets. The project recreates a premium educational biology interface with selectable cell types, organelle details, comparison mode, responsive layout, and visual verification coverage.
> 
> ## Live Demo
> 
> [Open the live Vercel deployment](https://cell-architecture-studio-inky.vercel.app)
> 
> [](https://cell-architecture-studio-inky.vercel.app)
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

相關概念：[[資料視覺化]] · [[教育科技]] · [[互動學習]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[XBuilderLAB--cheat-on-content|XBuilderLAB/cheat-on-content]]

[GitHub](https://github.com/cclank/cell-architecture-studio) · [官方網站](https://cell-architecture-studio-inky.vercel.app)

## 相關收錄

> [!note]- 直接競品（同子分類：教育工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "教育工具" AND file.name != "cclank--cell-architecture-studio"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "cclank--cell-architecture-studio"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "cclank--cell-architecture-studio" AND status != "archived"
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
> const concepts = ["資料視覺化","教育科技","互動學習"];
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
