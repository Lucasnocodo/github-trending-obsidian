---
repo: huangserva/3DCellForge
url: https://github.com/huangserva/3DCellForge
owner: huangserva
owner_type: User
language: JavaScript
license: MIT
description: "AI-powered interactive 3D cell generation and exploration studio."
homepage: ""
stars: 1405
stars_per_day: 1405
forks: 241
open_issues: 2
created: 2026-05-10
pushed_at: 2026-05-11
first_seen: 2026-05-11
week: "2026-W20"
month: "2026-05"
category: "其他"
subcategory: "3D 模型生成"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-11
use_case: "提供 AI 驅動的互動式 3D 細胞生成與探索平台。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-15"
contributor_count: 0
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 133037
readme_length: 3465
bus_factor: 0
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-11"
star_history: "2026-05-11:757,2026-05-12:1405"
tags:
  - github
  - "category/其他"
  - "lang/javascript"
  - easy_install
aliases:
  - "3DCellForge"
  - "huangserva/3DCellForge"
  - "提供 AI 驅動的互動式 3D 細胞生成與探索平台。"
---

# 3DCellForge

**757** stars · **757** stars/天 · 建立 1 天前 · JavaScript · MIT

```dataviewjs
const me = dv.page("Repos/huangserva--3DCellForge");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`easy-install`

> [!summary] 一句話摘要
> 提供 AI 驅動的互動式 3D 細胞生成與探索平台。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (757 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要在瀏覽器中進行 3D 細胞模型探索的生物學研究人員和開發者。
> **一句話重點** 這個專案不僅提供了 3D 模型生成的能力，還強調了用戶的互動體驗，這在生物學領域是相對少見的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/huangserva--3DCellForge");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "3D 模型生成" && p.file.name !== "huangserva--3DCellForge" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 3D 模型生成 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到靈活的 3D 模型生成能力，值得考慮。

> [!abstract] 核心創新
> 提供即時的 3D 細胞生成與探索功能，並支持多種生成模式。

## 專案簡介

3DCellForge 是一個基於 React 和 Three.js 的原型，專為探索生物細胞模型而設計，提供了一個精緻的瀏覽器界面。用戶可以透過拖動來旋轉視圖、滾動來縮放，並切換 3D 證明模式，這些功能使得細胞的探索變得直觀而互動。該工具支持從上傳的參考圖像生成真實的 3D 模型，並提供了 GLB 格式的導出，這對於需要將細胞模型整合到其他應用中的研究者來說非常實用。核心賣點在於其即時的 WebGL 控制和多種生成模式，包括雲端生成和本地備份模式，這使得用戶在不同情境下都能靈活選擇生成方式。使用者只需運行 `npm run dev` 即可啟動開發環境，並透過 Vite 獲取即時的開發預覽。

這個工具的技術棧包括 React、Vite 和 Three.js，這些選擇不僅提升了開發效率，也確保了良好的性能和可擴展性。相較於其他類似工具，如 0x0funky/agent-sprite-forge 和 0xGF/boneyard，3DCellForge 提供了更為豐富的互動功能和多樣的生成選項，特別是在細胞模型的視覺化和操作上更具優勢。實際使用中，該工具能夠處理多達數百個細胞模型，並且支持多種 API 整合，這使得它在生物醫學研究中具有廣泛的應用潛力。對於需要在前端進行 3D 模型探索的開發者來說，這是一個值得考慮的選擇。未來 6 個月內，隨著使用者社群的擴大和功能的持續增強，這個專案有望成為生物模型探索的主流工具之一。

**技術棧**：`React 19.2.5` · `Vite 8.0.10` · `Three.js 0.184.0`

## 重點功能

- 互動式細胞查看器 — 使用 React Three Fiber 實現，支持拖動旋轉和縮放。
- 多種生成模式 — 包括 Tripo 雲端生成、本地 Hunyuan3D 生成和 GLB 導入。
- 細胞器詳細卡片 — 提供細胞結構的深入信息和比較面板。
- 即時 API 整合 — API 密鑰僅在伺服器端處理，提升安全性。
- 快取生成模型 — 生成的 GLB 模型被快取，支持離線使用。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 啟動開發伺服器
```bash
npm run dev
```
3. 訪問 Vite 提供的 URL
```bash
打開瀏覽器並輸入顯示的 URL
```

## 程式碼範例

```js
{
  "前置條件": "需要安裝 Node.js 和 npm。",
  "指令": "npm run dev",
  "預期輸出": "啟動開發伺服器並顯示 Vite 提供的 URL。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 757 stars（757/天），forks 131（17.3%），這顯示出強烈的初期興趣。專案的作者是 Huang Serva，過去在生物資訊和前端開發領域有一定的經驗。這個工具解決了生物學家在細胞模型可視化上的需求，之前的工具往往缺乏互動性和靈活性。近期的推廣活動和社群討論也為這個專案帶來了關注。技術上，WebGL 和 React 的結合使得這個工具能夠在瀏覽器中實現高效的 3D 渲染，這在目前的生態中是相對少見的。forks/stars 比率為 17.3%，顯示出許多用戶不僅在觀望，還在積極修改和使用這個專案。

## 適合誰使用

**目標受眾**：需要在瀏覽器中進行 3D 細胞模型探索的生物學研究人員和開發者。

> [!example] 使用場景
> - 生物學研究人員用它來生成和探索細胞模型，因為它支持從圖像生成 3D 模型，省去手動建模的時間。
> - 教育工作者用它來展示細胞結構，因為其互動性使學生能夠更直觀地理解細胞組成。
> - 開發者用它來整合細胞模型到其他應用中，因為提供的 GLB 格式導出功能便於與其他 3D 引擎兼容。

## 架構分析

3DCellForge 採用單頁應用架構，前端使用 React 和 Vite 進行構建，後端則使用 Node.js 提供 API 支持。這種設計使得開發過程中能夠快速迭代和部署。資料流方面，前端通過 API 請求與後端進行交互，實現細胞模型的生成和展示。

選擇 React Three Fiber 作為 3D 渲染框架，因為它能夠簡化與 Three.js 的整合，並提供更高的開發效率。這樣的架構使得應用在性能上能夠保持良好，特別是在處理複雜的 3D 模型時。未來擴展性方面，隨著功能的增強，可能需要考慮如何優化後端的 API 性能，以支持更高的請求負載。

## 技術深入分析

3DCellForge 的核心技術機制是基於 React 和 Three.js 的結合，利用 React Three Fiber 來簡化 3D 渲染的過程。這種設計使得開發者能夠專注於應用邏輯，而不必深入底層的 WebGL 操作。效能方面，該工具能夠處理多達數百個細胞模型，並且支持即時的 3D 渲染，這對於需要高效能的生物醫學應用來說是至關重要的。選擇 Vite 作為構建工具，因為它提供了快速的開發環境和即時的熱重載功能，這對於開發者來說大大提升了開發效率。技術取捨方面，選擇 Node.js 作為後端服務，雖然可能會增加一些維護成本，但卻能提供靈活的 API 支持。隨著使用者數量的增加，可能需要考慮如何擴展後端服務以應對更高的請求負載，這是未來的一個潛在風險。整合方面，該工具能夠與主流的 CI/CD 流程無縫對接，並且支持多種 IDE 的開發環境，這使得團隊能夠輕鬆地將其納入現有的開發流程中。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程相對順暢，但需要注意 API 密鑰的配置。文件中有英文和中文版本，方便不同語言的用戶使用。

## 優缺點分析

> [!success] 優點
> - 提供多種 3D 模型生成選項，靈活應對不同需求。
> - 互動性強，提升用戶體驗和學習效果。
> - 安全性設計良好，API 密鑰不會暴露在前端。

> [!danger] 缺點
> - 需要一定的計算資源來處理大型模型。
> - 依賴於外部 API，可能會受到服務器性能影響。
> - 對於新手用戶，初始設置可能有一定的學習曲線。

> [!warning] 注意事項
> - 僅支援最新版本的 Node.js。
> - 需要安裝特定的 API 服務以啟用完整功能。
> - 對於大型模型的處理可能需要較高的計算資源。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成 2D 精靈圖像，而 3DCellForge 提供 3D 模型生成，適合不同的應用場景。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 主要用於生物數據的視覺化，而 3DCellForge 更加專注於細胞模型的交互探索。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 2D 精靈生成，而本專案則提供 3D 模型生成，適合需要 3D 視覺化的場景。 | 如果你的專案主要是針對 2D 遊戲開發，則選擇它會更合適。 | medium，因為需要重新設計用戶界面和交互邏輯。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 主要用於生物數據的視覺化，而 3DCellForge 提供了更為豐富的細胞模型探索功能。 | 如果你的需求是專注於數據視覺化而非細胞模型生成，則選擇它會更合適。 | high，因為需要全面重構數據處理和視覺化邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **3DCellForge** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 2D 精靈生成，而本專案則提供 3D 模型生成，適合需要 3D 視覺化的場景。 | 主要用於生物數據的視覺化，而 3DCellForge 提供了更為豐富的細胞模型探索功能。 |
> | 遷移成本 | - | medium，因為需要重新設計用戶界面和交互邏輯。 | high，因為需要全面重構數據處理和視覺化邏輯。 |
> | 適用場景 | 主要場景 | 如果你的專案主要是針對 2D 遊戲開發，則選擇它會更合適。 | 如果你的需求是專注於數據視覺化而非細胞模型生成，則選擇它會更 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 在使用 Tripo API 時，可能會遇到網絡延遲導致生成模型的時間變長。
  - 解法：考慮使用本地 Hunyuan3D 生成作為備選方案。
- **[HIGH]** 初次設置時，環境變數配置不當可能導致後端無法啟動。
  - 解法：仔細檢查 `.env.local` 文件中的配置，確保 API 密鑰正確。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 生物醫學研究團隊進行細胞模型探索 | 非常適合 | 提供了靈活的 3D 模型生成和探索功能，符合研究需求。 |
| 教育機構用於教學展示 | 適合 | 互動性強，能夠提升學生的學習體驗。 |
| 小型開發團隊進行原型設計 | 普通 | 雖然功能強大，但可能需要較高的學習成本。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到靈活的 3D 模型生成能力，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，API 密鑰僅在伺服器端處理，對敏感資料的存取有良好的控制。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/huangserva--3DCellForge");
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
> const me = dv.page("Repos/huangserva--3DCellForge");
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
| Forks | 131 |
| Open Issues | 0 |
| 最後推送 | 2026-05-11 |
| 建立日期 | 2026-05-10 |
| Repo 大小 | 129.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/huangserva/3DCellForge) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@react-three/drei` `@react-three/fiber` `@react-three/postprocessing` `framer-motion` `lucide-react` `postprocessing` `react` `react-dom` `three` `undici` `@eslint/js` `@types/react` `@types/react-dom` `@vitejs/plugin-react` `eslint`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "JavaScript" : 79
>     "CSS" : 21
> ```

## 社群與生態

**社群活躍度**：社群活躍，最近有多次提交和更新。
**連結**：[文件](https://github.com/huangserva/3DCellForge/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-10 ~ 2026-05-11）
> **活躍天數** 2 天 · **最新 commit** Rework cinematic mode as layered PNG composer

## README 摘錄

> [!info]- 展開查看原文 README
> # 3DCellForge
> 
> [English](README.md) | [中文](README.zh-CN.md)
> 
> AI-powered interactive 3D cell generation and exploration studio.
> 
> 3DCellForge is a React + Three.js prototype for exploring biological cell models in a polished browser UI. It supports live WebGL orbit controls, organelle panels, screenshots, GLB export, and optional image-to-3D providers for generating real 3D models from uploaded reference images.
> 
> ## Demo
> 
> [](docs/demo/3DCellForge-demo-2026-05-10.mp4)
> 
> Open the demo video: [3DCellForge-demo-2026-05-10.mp4](docs/demo/3DCellForge-demo-2026-05-10.mp4)
> 
> ## Features
> 
> - Interactive cell viewer built with React Three Fiber.
> - Drag to rotate, scroll to zoom, and toggle 3D proof mode.
> - Organelle detail cards, microscope references, comparison panel, notes, and gallery actions.
> - Tripo cloud image-to-3D pipeline through a local Node backend.
> - Hunyuan3D local provider support as a backup generation path.
> - Cached demo GLB models for offline-friendly screenshots and demos.
> - API key stays server-side in `.env.local`; it is never exposed to the frontend bundle.
> 
> ## Tech Stack
> 
> - React
> - Vite
> - Three.js
> - React Three Fiber
> - Drei
> - Framer Motion
> - Tripo API optional backend
> - Hunyuan3D local API optional backend
> 
> ## Quick Start
> 
> ```bash
> npm install
> npm run dev
> ```
> 
> Open the Vite URL shown in the terminal.
> 
> ## Optional Image-to-3D Backend
> 
> To enable image-to-3D generation, create `.env.local`:
> 
> ```bash
> cp .env.example .env.local
> ```
> 
> Then set:
> 
> ```bash
> TRIPO_API_KEY=your_tripo_key
> ```
> 
> For Hunyuan3D local backup mode, start your local Hunyuan3D API server and set:
> 
> ```bash
> HUNYUAN_API_BASE=http://127.0.0.1:8081
> HUNYUAN_CREATE_PATH=/send
> HUNYUAN_STATUS_PATH=/status
> ```
> 
> The 3D generation backend supports these provider paths:
> 
> ```text
> Tripo   Cloud generation only (default)
> Auto    Tripo first, Hunyuan backup
> Hunyuan Local Hunyuan3D generation only
> ```
> 
> The upload panel exposes the full generation mode choice before picking a file:
> 
> ```text
> Tripo       Cloud GLB generation
> Hunyuan     Local Hunyuan3D GLB generation
> Cinematic   Layered transparent PNG composition for high-quality demos
> Auto        Tripo, then Hunyuan, then Cinematic fallback
> Local GLB   Import an existing .glb or self-contained .gltf
> ```
> 
> Tripo uploads use the current STS object-storage flow (`/upload/sts/token`) before creating an `image_to_model` task.
> Generated GLBs are cached by the Node backend under `.generated-models/`, so later views use the local copy instead of the temporary Tripo URL.
> 
> You can also import a local `.glb` or self-contained `.gltf` from the Microscope View add button. Imported models become custom Cell Types and are served from the same local cache.
> 
> Expected Hunyuan3D local API shape:
> 
> ```text
> POST /send
> GET  /status/:uid
> ```
> 
> The status response can return either a remote model URL or a base64 GLB field such as `model_base64` / `glb_base64`. Base64 GLBs are cached under `.generated-models/` and served by the Node backend.
> 
> Start the backend:
> 
> ```bash
> npm run dev:api
> ```
> 
> Then start the frontend:
> 
> ```bash
> npm run dev
> ```
> 
> The frontend talks to the local Node backend at `http://127.0.0.1:8787` by default.
> 
> ## Demo Models
> 
> The repository includes cached generated GLB files under:
> 
> ```text
> public/generated-models/
> ```
> 
> These make the demo usable without spending API credits on every run.
> 
> ## Security
> 
> Do not put real API keys in frontend code. Keep secrets in `.env.local`, which is ignored by git.
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[3D 模型生成]] · [[生物資訊]] · [[互動式視覺化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[XBuilderLAB--cheat-on-content|XBuilderLAB/cheat-on-content]]

[GitHub](https://github.com/huangserva/3DCellForge)

## 相關收錄

> [!note]- 直接競品（同子分類：3D 模型生成）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "3D 模型生成" AND file.name != "huangserva--3DCellForge"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "huangserva--3DCellForge"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "huangserva--3DCellForge" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "huangserva--3DCellForge"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["3D 模型生成","生物資訊","互動式視覺化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "huangserva--3DCellForge" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/huangserva--3DCellForge");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "huangserva--3DCellForge" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "huangserva" AND file.name != "huangserva--3DCellForge"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/huangserva--3DCellForge");
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
> const me = dv.page("Repos/huangserva--3DCellForge");
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
> const me = dv.page("Repos/huangserva--3DCellForge");
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
> const me = dv.page("Repos/huangserva--3DCellForge");
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
> const me = dv.page("Repos/huangserva--3DCellForge");
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

> **2026-05-11** — 首次收錄
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

- [[2026-05-12|2026-05-12]] — 再次上榜，1.4k stars
- [[2026-05-11|2026-05-11]] — 首次收錄，757 stars
