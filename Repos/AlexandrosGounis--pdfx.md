---
repo: AlexandrosGounis/pdfx
url: https://github.com/AlexandrosGounis/pdfx
owner: AlexandrosGounis
owner_type: User
language: TypeScript
license: MIT
description: "An extension of the traditional PDF standard, allowing multiple files to be stored in a single file via metadata"
homepage: ""
stars: 743
stars_per_day: 37
forks: 87
open_issues: 4
created: 2026-06-24
pushed_at: 2026-07-02
first_seen: 2026-06-29
week: "2026-W27"
month: "2026-06"
category: "開發工具"
subcategory: "PDF 工具"
release_tag: "v2026.6.1-beta.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-29
use_case: "將多個文件存儲在單一 PDF 文件中的擴展，並通過元數據進行管理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-08"
contributor_count: 4
engagement: "medium"
issue_close_rate: 20
repo_size_kb: 3224
readme_length: 1304
bus_factor: 1
last_release_days: 13
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-06-29"
star_history: "2026-06-29:489,2026-06-29:490,2026-06-30:564,2026-06-30:564,2026-07-01:611,2026-07-01:611,2026-07-02:635,2026-07-03:661,2026-07-04:687,2026-07-05:707,2026-07-06:716,2026-07-07:720,2026-07-08:726,2026-07-09:729,2026-07-10:734,2026-07-11:738,2026-07-12:741,2026-07-13:741,2026-07-14:743,2026-07-15:743"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - "topic/electron"
  - "topic/electron_app"
  - "topic/electronjs"
  - "topic/liquid_glass"
  - "topic/macos_app"
aliases:
  - "pdfx"
  - "AlexandrosGounis/pdfx"
  - "將多個文件存儲在單一 PDF 文件中的擴展，並通過元數據進行管理。"
---

# pdfx

**743** stars · **37** stars/天 · 建立 20 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/AlexandrosGounis--pdfx");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v2026.6.1-beta.0`

`electron` `electron-app` `electronjs` `liquid-glass` `macos-app` `open-source` `pdf` `pdf-generator` `pdf-parser` `pdf-processing` `pdf-tools` `pdf-viewer` `react` `spec` `typescript`

> [!summary] 一句話摘要
> 將多個文件存儲在單一 PDF 文件中的擴展，並通過元數據進行管理。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (37 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 12 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要將多個文件整合成單一 PDF 的小型團隊或個人用戶。
> **一句話重點** PDFx 的創新在於將多個文檔整合到一個 PDF 文件中，這在傳統 PDF 工具中是難以實現的。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/AlexandrosGounis--pdfx");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "PDF 工具" && p.file.name !== "AlexandrosGounis--pdfx" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 PDF 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到高效的文檔管理效果，值得考慮。

> [!abstract] 核心創新
> PDFx 是一個向後兼容的 PDF 擴展，允許將多個文檔打包成一個文件。

## 專案簡介

PDFx 是一個開放的、向後兼容的 PDF 擴展，允許將多個文檔打包成一個文件，並提供一個簡單的桌面查看器。用戶可以將 `.pdf` 或 `.pdfx` 文件拖放到應用中，系統會將每個文檔呈現為水平頁面條，並可進行重新排序或移除，最後通過「Export PDF」將整個集合保存為一個文件。這種設計使得用戶能夠在不改變原始 PDF 文件的情況下，靈活地管理和組織多個文檔。PDFx 使用 Electron、Vite、TypeScript 和 React 開發，並依賴於 pdf.js 進行 PDF 渲染，pdf-lib 用於文檔組合。這樣的技術選型使得應用具有良好的跨平台支持，並且能夠快速構建和部署。與傳統的 PDF 工具相比，PDFx 提供了更高的靈活性和便捷性，特別是在需要處理多個文檔的情境下。

與其他 PDF 編輯器相比，如 Adobe Acrobat，PDFx 的使用成本更低，且不需要昂貴的授權費用。實際使用中，PDFx 支持 Windows、macOS 和 Linux，並且在使用 OCR 功能時，能夠在主線程之外進行搜索索引，這樣可以減少對用戶界面的影響。雖然目前仍處於 beta 階段，但其功能已經相對完整，適合小型團隊或個人使用。未來，隨著功能的增強和社群的發展，PDFx 有潛力成為更強大的文檔管理工具。對於需要將多個文檔整合成一個文件的用戶，PDFx 是一個值得考慮的選擇，但如果需求是高度專業的 PDF 編輯，則可能需要考慮其他成熟的解決方案。

**技術棧**：`Electron` · `Vite` · `TypeScript` · `React` · `pdf.js` · `pdf-lib`

## 重點功能

- 多文檔支持 — 允許將多個 PDF 文件打包成一個 `.pdfx` 文件，並在應用中進行管理。
- 跨平台支持 — 可在 Windows、macOS 和 Linux 上運行，滿足不同用戶的需求。
- 即時預覽 — 拖放文件後，系統即時顯示文檔內容，方便用戶快速查看。
- OCR 功能 — 支持在主線程之外進行文本識別，提升應用性能和用戶體驗。
- 簡單的導出功能 — 用戶可以將所有文檔導出為單一 PDF 文件，方便分享和存檔。

## 快速開始

1. 安裝依賴
```bash
yarn
```
2. 啟動開發模式
```bash
yarn dev
```
3. 打包 macOS 版本
```bash
yarn build:mac
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Node.js 和 Yarn。",
  "指令": "yarn dev",
  "預期輸出": "啟動應用並在本地伺服器上運行。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 20 天就累積 743 stars（37/天），forks 87（11.7%），這顯示出穩定的增長潛力。作者 Alexandros Gounis 在開源社群中有一定的影響力，並且這個專案解決了傳統 PDF 工具在處理多文檔時的局限性，特別是在需要將多個文件整合的情境下。近期的更新和修復也顯示出活躍的開發進度，這可能吸引了更多的開發者關注。社群的反饋和提案也顯示出用戶對於功能擴展的需求，這進一步促進了專案的發展。

## 適合誰使用

**目標受眾**：需要將多個文件整合成單一 PDF 的小型團隊或個人用戶。

> [!example] 使用場景
> - 文檔管理員用它來將多個報告整合成一個 PDF 文件，因為這樣可以更方便地分享和存檔，避免了多個文件的混亂。
> - 教育工作者用它來將課程資料和作業集合在一起，因為這樣可以簡化學生的學習資料存取，提升學習效率。
> - 自由職業者用它來將合同和發票整合成一個文件，因為這樣可以方便客戶查看和管理相關文件，提升專業形象。

## 架構分析

PDFx 採用 Electron 作為桌面應用框架，這使得它能夠在多平台上運行。應用的核心是使用 Vite 和 TypeScript 開發，並利用 React 進行用戶界面構建。PDF 渲染使用 pdf.js，這是一個成熟的開源庫，能夠高效處理 PDF 文件。

資料流方面，應用通過一個嵌入的 JSON 清單來管理多個文檔，這樣的設計使得每個 PDF 文件都能在不改變原始結構的情況下進行操作。選擇 Electron 使得應用能夠快速開發和部署，但也帶來了較大的應用包大小和相對較高的內存使用。擴展性方面，PDFx 可以通過增加新的功能模組來進一步增強，但目前的架構可能在處理大型文檔時會遇到性能瓶頸。

## 技術深入分析

PDFx 的核心技術在於其使用的 Electron 框架，這使得它能夠跨平台運行。應用的資料結構通過嵌入 JSON 清單來管理多個文檔，這樣的設計不僅簡化了文檔的組織，也提高了操作的靈活性。效能方面，PDFx 在處理小型文檔時表現良好，但在處理大型文檔時可能會遇到性能瓶頸，特別是在使用 OCR 功能時。選擇 TypeScript 和 React 使得開發過程更加高效，且能夠利用現有的生態系統，但也帶來了較高的學習曲線。技術風險方面，隨著用戶數量的增加，如何保持應用的穩定性和性能將是一個挑戰。整合方面，PDFx 能夠與現有的 PDF 工具鏈相容，但在某些情況下可能需要額外的適配器來實現最佳效果。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的基本指導。安裝過程相對順暢，但可能需要安裝 Node.js 和 Yarn。文件中有基本的使用範例，對於新手來說，能夠在 30 分鐘內上手使用。

## 優缺點分析

> [!success] 優點
> - 支持多文檔打包，提升文檔管理效率。
> - 跨平台支持，適合不同操作系統的用戶。
> - 簡單易用的界面，降低了使用門檻。

> [!danger] 缺點
> - 仍在 beta 階段，可能存在不穩定的功能。
> - 對於大型文檔的處理性能可能不足。
> - 某些功能的實現可能不夠完善，需進一步優化。

> [!warning] 注意事項
> - 目前仍在 beta 階段，可能存在不穩定的功能。
> - 對於大型文檔的處理性能可能會受到影響。
> - 某些 OCR 功能可能會導致文本識別不準確。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成和管理多模塊的代理，而 PDFx 專注於文檔的整合和管理。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供文檔存儲和版本控制，但不支持多文檔打包功能。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 專注於代理的互動，而 PDFx 專注於文檔的視覺化和整合。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Adobe Acrobat | 專注於高端 PDF 編輯和管理功能，而 PDFx 則專注於多文檔整合。 | 如果需要專業的 PDF 編輯功能和高級的文檔管理，Adobe Acrobat 是更好的選擇。 | medium，因為需要重新適應不同的操作界面和功能。 |
| Foxit PDF Editor | 提供類似的 PDF 編輯功能，但不支持多文檔打包。 | 如果需要快速的 PDF 編輯和批註功能，Foxit 是不錯的選擇。 | low，因為界面和操作邏輯相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **pdfx** | **Adobe Acrobat** | **Foxit PDF Editor** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於高端 PDF 編輯和管理功能，而 PDFx 則專注於多文檔整合。 | 提供類似的 PDF 編輯功能，但不支持多文檔打包。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的操作界面和功能。 | low，因為界面和操作邏輯相似。 |
> | 適用場景 | 主要場景 | 如果需要專業的 PDF 編輯功能和高級的文檔管理，Adobe | 如果需要快速的 PDF 編輯和批註功能，Foxit 是不錯的 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些情況下，OCR 功能可能會導致文本識別不準確。
  - 解法：檢查原始文件的清晰度，並在必要時手動校正。
- [MEDIUM] 大型文檔的加載速度可能較慢。
  - 解法：考慮將文檔拆分為較小的部分進行處理。
- [MEDIUM] 在特定操作系統上可能存在兼容性問題。
  - 解法：確保使用最新版本的應用和操作系統。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的文檔管理系統 | 非常適合 | 支持多文檔整合，提升團隊協作效率。 |
| 大型企業的專業 PDF 編輯需求 | 不適合 | 功能尚不夠成熟，無法滿足高端需求。 |
| 教育機構的課程資料整合 | 適合 | 簡單易用，適合教師和學生使用。 |
| 自由職業者的合同管理 | 非常適合 | 能夠將多份合同整合，方便管理和分享。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到高效的文檔管理效果，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：PDFx 本身不需要高權限，且不存取敏感資料。依賴的庫和工具均為開源，信任程度較高。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/AlexandrosGounis--pdfx");
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
> const me = dv.page("Repos/AlexandrosGounis--pdfx");
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
| Forks | 87 |
| Open Issues | 4 |
| Issue 解決率 | 20% (1 closed) |
| 最後推送 | 2026-07-02 |
| 建立日期 | 2026-06-24 |
| Repo 大小 | 3.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/AlexandrosGounis/pdfx) |
| Topics | `electron` `electron-app` `electronjs` `liquid-glass` `macos-app` `open-source` `pdf` `pdf-generator` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@electron-toolkit/preload` `@electron-toolkit/utils` `@electron-toolkit/tsconfig` `@tesseract.js-data/deu` `@tesseract.js-data/eng` `@tesseract.js-data/fra` `@tesseract.js-data/spa` `@types/d3-selection` `@types/d3-zoom` `@types/node` `@types/react` `@types/react-dom` `@vitejs/plugin-react` `d3-selection` `d3-zoom`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 86
>     "CSS" : 9
>     "Objective-C++" : 3
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@AlexandrosGounis](https://github.com/AlexandrosGounis) | 13 |
> | [@ArcanConsulting](https://github.com/ArcanConsulting) | 1 |
> | [@ShreySavsani](https://github.com/ShreySavsani) | 1 |
> | [@mauitaxes](https://github.com/mauitaxes) | 1 |

**最新版本**：v2026.6.1-beta.0 — PDFX 2026.6.1-beta.0 (2026-07-02)

> [!info]- Release Notes
> ## What's Changed
> * Windows build fixes — blank form-field pages in packaged builds (pdf.js worker polyfill) by @mauitaxes in https://github.com/AlexandrosGounis/pdfx/pull/2
> * Adds Linux support (AppImage, deb, rpm, Flatpak) by @ArcanConsulting in https://github.com/AlexandrosGounis/pdfx/pull/1
> * Adds a direct export "to pdf" button by @ShreySavsani in https://github.com/AlexandrosGounis/pdfx/pull/3
> * Introduces OCR and search indexing off the main thread by @AlexandrosGounis in https://github.com/AlexandrosGounis/pdfx/pull/6
> 
> ## New Contributors
> * @mauitaxes made their first contribution in https://github.com/AlexandrosGounis/pdfx/pull/2
> * @ArcanConsulting made their first contribution in https://github.com/AlexandrosGounis/pdfx/pull/1
> * @ShreySavsani made their first contribution in https://github.com/AlexandrosGounis/pdfx/pull/3
> 
> **Full Changelog**: https://github.com/AlexandrosGounis/pdfx/commits/2026.6.1-beta.0

## 社群與生態

**社群活躍度**：社群活躍，近期有多次提交和功能更新。
**連結**：[文件](https://github.com/AlexandrosGounis/pdfx)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-26 ~ 2026-07-02）
> **活躍天數** 5 天 · **最新 commit** adds GitHub Sponsors funding configuration

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#11](https://github.com/AlexandrosGounis/pdfx/issues/11) | Feature proposals: Same file Open-Edit-Save, Search capabili | 0 | 1 |
> | [#10](https://github.com/AlexandrosGounis/pdfx/issues/10) | OCR silently overrides real text — search & copy return corr | 0 | 1 |
> | [#5](https://github.com/AlexandrosGounis/pdfx/issues/5) | RFC: Schema and layout optimizations needed | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # PDFx
> 
> **One file. Many documents. Still a PDF.**
> 
>   
> 
> [](LICENSE)
> &nbsp;
> [](#)
> &nbsp;
> [](SPEC.md)
> 
> ## What it is
> 
> PDFx is an open, backwards compatible extension of PDF that bundles many documents into a single file, plus a minimal desktop viewer for macOS, Windows, and Linux.
> 
> A `.pdfx` file is a fully valid PDF: open it anywhere and every page shows in sequence. Open it in PDFx and it splits back into the original documents. Plain single PDFs work as they are.
> 
> Drag and drop `.pdf` or `.pdfx` files anywhere in the window. Each document renders as a horizontal strip of pages, and documents stack vertically. Reorder or remove them, then **Export PDF** to save the whole collection as one file.
> 
> See [SPEC.md](SPEC.md) for the format. It is short: the entire trick is one embedded JSON manifest.
> 
> ## How to run
> 
> Built with Electron, Vite, TypeScript, and React. PDF rendering by [pdf.js](https://mozilla.github.io/pdf.js/), assembly by [pdf-lib](https://pdf-lib.js.org/).
> 
> ```bash
> yarn              # install
> yarn dev          # run in development
> yarn build:mac    # package for macOS
> yarn build:win    # package for Windows
> yarn build:linux  # package for Linux
> ```
> 
> *Linux packaging notes (formats, Flatpak, prerequisites) live in [docs/LINUX_SETUP.md](docs/LINUX_SETUP.md).*
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[PDF 處理]] · [[文檔管理]] · [[OCR]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[AlexandrosGounis--pdfx|AlexandrosGounis/pdfx]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

[GitHub](https://github.com/AlexandrosGounis/pdfx)

## 相關收錄

> [!note]- 直接競品（同子分類：PDF 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "PDF 工具" AND file.name != "AlexandrosGounis--pdfx"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "AlexandrosGounis--pdfx"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "AlexandrosGounis--pdfx" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "AlexandrosGounis--pdfx"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["PDF 處理","文檔管理","OCR"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "AlexandrosGounis--pdfx" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/AlexandrosGounis--pdfx");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "AlexandrosGounis--pdfx" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "AlexandrosGounis" AND file.name != "AlexandrosGounis--pdfx"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/AlexandrosGounis--pdfx");
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
> const me = dv.page("Repos/AlexandrosGounis--pdfx");
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
> const me = dv.page("Repos/AlexandrosGounis--pdfx");
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
> const me = dv.page("Repos/AlexandrosGounis--pdfx");
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
> const me = dv.page("Repos/AlexandrosGounis--pdfx");
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

> **2026-06-29** — 首次收錄
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

- [[2026-07-01|2026-07-01]] — 再次上榜，611 stars
- [[2026-06-30|2026-06-30]] — 再次上榜，564 stars
- [[2026-06-29|2026-06-29]] — 首次收錄，489 stars
