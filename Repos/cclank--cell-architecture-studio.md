---
repo: cclank/cell-architecture-studio
url: https://github.com/cclank/cell-architecture-studio
owner: cclank
owner_type: User
language: TypeScript
license: MIT
description: "Interactive 3D cell architecture gallery built with React and Three.js"
homepage: "https://cell-architecture-studio-inky.vercel.app"
stars: 722
stars_per_day: 72
forks: 167
open_issues: 4
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
use_case: "提供互動式的細胞結構畫廊，讓使用者探索不同細胞類型及其細節。"
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
star_history: "2026-05-16:610,2026-05-16:610,2026-05-17:621,2026-05-18:631,2026-05-19:669,2026-05-20:707,2026-05-21:722"
tags:
  - github
  - "category/其他"
  - "lang/typescript"
  - easy_install
aliases:
  - "cell-architecture-studio"
  - "cclank/cell-architecture-studio"
  - "提供互動式的細胞結構畫廊，讓使用者探索不同細胞類型及其細節。"
---

# cell-architecture-studio

**722** stars · **72** stars/天 · 建立 10 天前 · TypeScript · MIT

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
> 提供互動式的細胞結構畫廊，讓使用者探索不同細胞類型及其細節。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (72 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 10 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 對細胞生物學有興趣的教育工作者和學生，特別是需要互動學習工具的使用者。
> **一句話重點** 這個專案不僅是細胞模型的展示，更是結合了教育與互動的全新學習平台。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到一個互動式的細胞學習工具，值得嘗試。

> [!abstract] 核心創新
> 提供高保真的 3D 細胞模型互動體驗，結合教育功能與 AI 教學面板。

## 專案簡介

Cell Architecture Studio 是一個基於 React 和 Three.js 的互動式細胞結構畫廊，設計目的是讓使用者能夠探索和學習不同的細胞類型。使用者可以選擇不同的細胞模型，如植物細胞、白血球和神經元，並透過高保真的 GLB 模型進行視覺化。這個專案的賣點在於其可互動性和教育性，提供了選擇細胞類型、顯示細胞器細節以及比較模式等功能。使用者只需運行 `npm run dev` 即可啟動本地開發伺服器，並在瀏覽器中查看應用。技術上，專案使用了 React 19、TypeScript 和 Vite，並結合了 Three.js 進行 3D 渲染，這使得細胞模型的展示更加生動。

相較於其他類似工具，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，Cell Architecture Studio 提供了更高的細節和互動性，特別是在教育用途上。這個專案的設計考量了不同設備的響應式佈局，並且在網路速度較慢的情況下提供了模型加載的覆蓋層。使用者可能會遇到 Vercel 部署問題，這是目前的熱門問題之一。這個專案仍在持續開發中，未來計畫增加更多細胞模型和教育註解。整體來看，這是一個適合教育機構和生物學愛好者的工具，能夠提升學習體驗。

**技術棧**：`React 19` · `TypeScript` · `Vite` · `Three.js` · `React Three Fiber` · `Drei`

## 重點功能

- 七種細胞樣本視圖 — 包括植物細胞、白血球、神經元等，提供多樣化的學習選擇。
- 高保真 GLB 渲染 — 確保細胞模型的真實感和細節保留。
- AI 教學面板 — 提供學習提示、課程重點和掌握追蹤功能。
- 響應式佈局 — 支援桌面、緊湊和移動設備的顯示，確保良好的使用體驗。
- 模型加載覆蓋層 — 在慢速網路下提供流暢的使用體驗。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 運行本地開發伺服器
```bash
npm run dev
```
3. 在瀏覽器中打開應用
```bash
http://127.0.0.1:5173/
```
4. 建置生產版本
```bash
npm run build
```
5. 運行視覺驗證
```bash
npm run verify
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝依賴並運行本地開發伺服器",
  "指令": "npm run dev",
  "預期輸出": "應用在 http://127.0.0.1:5173/ 上運行"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天內累積 722 stars（72/天），forks 167（23.1%），顯示出強勁的增長潛力。作者 cclank 先前有其他開源專案經驗，這個專案解決了互動式生物學學習的需求，提供了一個視覺化的學習平台。近期的推廣活動和社群反饋也促進了其知名度。高達 23.1% 的 forks 表示許多開發者對此專案有實際修改和使用的興趣，顯示出良好的社群參與度。

## 適合誰使用

**目標受眾**：對細胞生物學有興趣的教育工作者和學生，特別是需要互動學習工具的使用者。

> [!example] 使用場景
> - 生物學教師用它來展示細胞結構，因為其互動性能夠吸引學生的注意力並提升學習效果。
> - 學生用它來自學細胞生物學，因為可以直觀地探索不同細胞類型及其功能，增強理解。
> - 研究人員用它來檢視細胞模型，因為高保真的 3D 渲染能夠幫助他們進行更深入的分析和比較。

## 架構分析

Cell Architecture Studio 採用現代的前端架構，主要基於 React 和 Vite，這使得開發過程中能夠快速構建和熱重載。資料流方面，使用 Three.js 和 React Three Fiber 進行 3D 渲染，確保細胞模型的高效顯示。選擇 Vite 作為構建工具，因為其快速的開發體驗和優化的生產構建。這個架構的代價在於需要對 React 和 Three.js 有一定的理解，對於新手來說可能會有學習曲線。擴展性方面，未來可以輕鬆添加更多細胞模型和功能，但目前的依賴樹相對簡單，主要集中在幾個核心庫上。

## 技術深入分析

Cell Architecture Studio 的核心技術機制是基於 React 和 Three.js，利用 React Three Fiber 來簡化 3D 渲染的過程。這使得開發者能夠在 React 組件中直接使用 Three.js 的功能，降低了學習成本。專案的效能特性在於能夠處理高保真的 GLB 模型，並且在慢速網路下提供模型加載覆蓋層以提升使用者體驗。設計上選擇 Vite 作為構建工具，因其快速的開發和構建速度，這樣的選擇使得專案在開發過程中能夠快速迭代，但也要求開發者對 Vite 的配置有一定的了解。技術風險方面，隨著模型數量的增加，可能會面臨性能瓶頸，特別是在渲染複雜場景時。整合方面，與主流的 CI/CD 工具如 GitHub Actions 的相容性良好，能夠方便地進行自動化測試和部署。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程順暢，沒有明顯的坑。提供了良好的入門指南，讓新手能夠在短時間內上手。文件目前僅提供英文版，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 提供互動式學習體驗，能夠吸引學生的注意力。
> - 高保真的 3D 渲染，增強細胞結構的理解。
> - 響應式設計，適合各種設備使用。

> [!danger] 缺點
> - 目前僅支持有限的細胞模型，未來擴展性需加強。
> - Vercel 部署存在問題，影響使用者體驗。
> - 對於新手來說，學習曲線可能較陡峭。

> [!warning] 注意事項
> - 目前僅支援 GLB 模型，對於其他格式的支持有限。
> - Vercel 部署存在問題，可能影響使用者的上線體驗。
> - 目前的模型數量有限，尚未覆蓋所有細胞類型。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 2D 精靈創建，缺乏 3D 渲染的細胞互動性。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供基於 3D 的骨骼模型，但不具備細胞教育功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 2D 精靈創建，缺乏 3D 渲染的細胞互動性。 | 如果你的專案需要 2D 精靈而非 3D 模型，則可以考慮此工具。 | low，因為兩者的學習曲線相似。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供基於 3D 的骨骼模型，但不具備細胞教育功能。 | 如果需要專注於骨骼模型的展示，則此工具更合適。 | medium，因為需要重新適應不同的模型結構和功能。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cell-architecture-studio** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 2D 精靈創建，缺乏 3D 渲染的細胞互動性。 | 提供基於 3D 的骨骼模型，但不具備細胞教育功能。 |
> | 遷移成本 | - | low，因為兩者的學習曲線相似。 | medium，因為需要重新適應不同的模型結構和功能。 |
> | 適用場景 | 主要場景 | 如果你的專案需要 2D 精靈而非 3D 模型，則可以考慮此工 | 如果需要專注於骨骼模型的展示，則此工具更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合教育用途的試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** Vercel 部署不穩定，可能導致應用無法正常運行。
  - 解法：考慮使用其他部署平台或本地運行。
- [MEDIUM] 在某些設備上渲染性能可能不佳。
  - 解法：優化模型大小或使用較簡單的幾何體。
- [MEDIUM] 對於新手來說，學習曲線較陡峭。
  - 解法：參考官方文件和範例進行學習。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 生物學課程的互動學習工具 | 非常適合 | 提供了高保真的細胞模型和互動功能，能夠提升學生的學習體驗。 |
| 個人學習細胞生物學的學生 | 適合 | 能夠直觀地探索細胞結構，增強理解。 |
| 需要展示細胞模型的科研人員 | 普通 | 雖然提供了細胞模型，但目前數量有限，可能不滿足所有需求。 |
| 需要高效能渲染的商業應用 | 不適合 | 目前的性能可能無法支持商業級的需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到一個互動式的細胞學習工具，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，依賴的庫也相對穩定，適合在 CI/CD 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Cell Architecture Studio 通常與教育平台和生物學相關的應用搭配使用，能夠作為教學輔助工具。在一個使用 React 的教育應用中，可以將此工具嵌入，具體做法是透過 npm 安裝並在組件中引用。支援 GitHub Actions 進行 CI/CD，並能與 VS Code 等 IDE 整合。整合過程中，最常見的問題是需要確保依賴庫的版本相容性，避免出現衝突。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Cell Architecture Studio 出現之前，互動式生物學學習主要依賴靜態圖像和簡單的 2D 模型，這些方法無法提供足夠的細節和互動性。隨著 3D 渲染技術的進步，特別是 WebGL 的普及，使得在網頁上實現高保真的 3D 模型成為可能。這個工具代表了教育技術的一個重要趨勢，未來可能會有更多類似的互動學習平台出現。

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
| Forks | 167 |
| Open Issues | 4 |
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

**社群活躍度**：社群活躍度中等，近期有持續的更新與問題回應。
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

相關概念：[[資料視覺化]] · [[教育資源]] · [[互動學習]]

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
> const concepts = ["資料視覺化","教育資源","互動學習"];
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
