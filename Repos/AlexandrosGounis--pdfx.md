---
repo: AlexandrosGounis/pdfx
url: https://github.com/AlexandrosGounis/pdfx
owner: AlexandrosGounis
owner_type: User
language: TypeScript
license: MIT
description: "An extension of the traditional PDF standard, allowing multiple files to be stored in a single file via metadata"
homepage: ""
stars: 489
stars_per_day: 122
forks: 52
open_issues: 0
created: 2026-06-24
pushed_at: 2026-06-28
first_seen: 2026-06-29
week: "2026-W27"
month: "2026-06"
category: "開發工具"
subcategory: "文件處理"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-29
use_case: "讓多個文件以單一 PDF 檔案儲存，並具備簡易的檢視器。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-06"
contributor_count: 4
engagement: "medium"
issue_close_rate: -1
repo_size_kb: 3214
readme_length: 1304
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-29"
star_history: "2026-06-29:489"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "pdfx"
  - "AlexandrosGounis/pdfx"
  - "讓多個文件以單一 PDF 檔案儲存，並具備簡易的檢視器。"
---

# pdfx

**489** stars · **122** stars/天 · 建立 4 天前 · TypeScript · MIT

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

> [!summary] 一句話摘要
> 讓多個文件以單一 PDF 檔案儲存，並具備簡易的檢視器。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (122 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要將多個 PDF 文件整合成一個文件的專業人士和學生。
> **一句話重點** PDFx 讓多個 PDF 文件的管理變得簡單而高效，特別適合需要整合多文件的用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/AlexandrosGounis--pdfx");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "文件處理" && p.file.name !== "AlexandrosGounis--pdfx" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 文件處理 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，3 小時整合，得到簡便的多文件管理效果，值得嘗試。

> [!abstract] 核心創新
> PDFx 是一個向後相容的 PDF 擴展，允許將多個文件打包成一個單一的 PDF 檔案。

## 專案簡介

PDFx 是一個向後相容的 PDF 擴展，允許將多個文件打包成一個單一的 PDF 檔案。用戶可以將 `.pdf` 或 `.pdfx` 文件拖放到應用程式中，這些文件將以水平頁面條的形式顯示，並且可以重新排序或刪除。最終，用戶可以選擇「Export PDF」來將整個集合保存為一個文件。這樣的設計使得 PDFx 能夠兼容傳統 PDF 檔案，無需改變現有的 PDF 瀏覽器或應用程式。核心技術使用 Electron、Vite、TypeScript 和 React，並依賴 pdf.js 進行 PDF 渲染以及 pdf-lib 進行文件組合。這樣的架構選擇提供了跨平台的支持，涵蓋 macOS、Windows 和 Linux。

與傳統 PDF 工具相比，PDFx 提供了更靈活的文件管理功能，特別適合需要處理多文件的用戶。相較於 Adobe Acrobat 等工具，PDFx 的使用門檻更低，並且不需要昂貴的授權費用。使用者可以在開發過程中輕鬆進行測試和調試，因為它支持即時開發模式。雖然目前仍在早期階段，但其設計理念和功能已經顯示出潛力，特別是在需要多文檔管理的場景中。對於小型團隊或個人使用者，PDFx 是一個值得考慮的選擇，尤其是在需要快速整合多個 PDF 文件的情況下。

**技術棧**：`Electron 38.4.0` · `Vite 7.3.5` · `TypeScript 5.9.3` · `React 19.2.7`

## 重點功能

- 多文件整合 — 支持將多個 PDF 文件合併為一個 `.pdfx` 文件，方便管理。
- 跨平台支持 — 可在 macOS、Windows 和 Linux 上運行，無需額外配置。
- 即時預覽 — 拖放文件後即時顯示，並可進行排序和刪除。
- 簡易導出 — 一鍵導出整合後的 PDF 文件，保持原有格式。
- 開放標準 — 使用嵌入的 JSON 清單來管理文件，兼容傳統 PDF。

## 快速開始

1. 安裝依賴
```bash
yarn
```
2. 啟動開發模式
```bash
yarn dev
```
3. 為 macOS 打包
```bash
yarn build:mac
```
4. 為 Windows 打包
```bash
yarn build:win
```
5. 為 Linux 打包
```bash
yarn build:linux
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Yarn 和 Node.js。",
  "指令": "yarn dev",
  "預期輸出": "啟動開發伺服器，並在瀏覽器中顯示應用程式。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 489 stars（122/天），forks 52（10.6%），顯示出穩定的增長趨勢。這個專案由 Alexandros Gounis 主導，他在開源社區有一定的知名度，並且解決了傳統 PDF 檔案管理中的一個痛點：多文件的整合。過去，使用者通常需要依賴昂貴的商業軟體來處理多個 PDF 文件，而 PDFx 提供了一個免費且開放的解決方案。最近的推廣活動和社群討論也可能促進了這個專案的曝光率。其設計的靈活性和易用性使得它在多文件處理的需求中顯得尤為重要，特別是在教育和商業環境中。

## 適合誰使用

**目標受眾**：需要將多個 PDF 文件整合成一個文件的專業人士和學生。

> [!example] 使用場景
> - 行政助理用它來將多個報告合併成一個 PDF，因為這樣可以更方便地分享和存檔。
> - 設計師用它來整理多個設計草稿，因為可以在一個文件中快速檢視和修改。
> - 學生用它來整合課堂筆記和參考資料，因為這樣可以減少文件管理的麻煩。
> - 法律專業人士用它來將多份合約合併，因為這樣可以提高文件的可讀性和整體性。

## 架構分析

PDFx 的架構基於 Electron，這使得它能夠在多個平台上運行。核心功能是將多個 PDF 文件透過 JSON 清單進行整合，這樣的設計使得每個 PDF 文件仍然可以獨立打開。使用 pdf.js 來渲染 PDF，這意味著它可以利用現有的 PDF 渲染技術，並且能夠快速顯示內容。選擇 Electron 的代價是需要較大的應用包大小，但這樣的選擇使得開發者能夠使用現有的 Web 技術進行開發。擴展性方面，PDFx 目前的設計能夠支持未來的功能添加，例如對其他文件格式的支持，但這需要進一步的開發和測試。

## 技術深入分析

PDFx 的核心技術機制是使用 Electron 框架來構建桌面應用，這使得它能夠利用 Web 技術進行開發。它的資料流主要是透過 JSON 清單來管理多個 PDF 文件，這樣的設計不僅簡化了文件的整合過程，還保持了 PDF 文件的獨立性。效能方面，雖然尚未有具體的數據，但由於使用了 pdf.js 進行渲染，預計在處理小型和中型文件時會有良好的表現。選擇 Electron 的好處是能夠快速開發和跨平台支持，但代價是應用包的大小會相對較大，這可能對某些用戶造成困擾。技術風險方面，PDFx 目前的設計在面對大型文件時可能會出現性能瓶頸，特別是在內存管理上。整合方面，由於使用了主流的 Web 技術，與現有的開發工具鏈（如 VS Code 和 GitHub Actions）整合應該不會有太大困難。整體而言，PDFx 在多文件管理的需求上提供了一個創新的解決方案，未來可能會隨著功能的擴展而變得更加成熟。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了基本的安裝和使用說明，但缺乏詳細的範例。安裝過程相對順暢，但需要用戶具備 Node.js 和 Yarn 的基本知識。沒有提供多語言支持，可能對非英語使用者造成困難。

## 優缺點分析

> [!success] 優點
> - 支持多文件整合，方便用戶管理多個 PDF。
> - 跨平台支持，無需額外配置即可在多個操作系統上運行。
> - 開放標準，使用 JSON 清單進行文件管理，兼容傳統 PDF。
> - 即時預覽和導出功能，提升用戶體驗。

> [!danger] 缺點
> - 對於大型文件的性能尚未經過充分測試，可能存在性能瓶頸。
> - 目前缺乏詳細的使用文檔，對新手不夠友好。
> - 需要安裝 Node.js 和 Yarn，可能對某些用戶造成困擾。
> - 尚未有廣泛的社群支持，可能影響問題解決速度。

> [!warning] 注意事項
> - 目前僅支持 PDF 文件，對其他格式的支持有限。
> - 對於大型 PDF 文件的處理性能尚未經過充分測試。
> - 需要安裝 Node.js 和 Yarn，對於不熟悉的用戶可能有一定的學習曲線。
> - 目前缺乏詳細的使用文檔和範例，可能影響新手使用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於生成多種格式的文件，而 PDFx 專注於 PDF 文件的整合和管理。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了文件版本控制功能，而 PDFx 更加專注於文件的合併和簡單的視覺化。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | Codex Shim 主要用於代碼生成，而 PDFx 是針對 PDF 文件的管理和整合。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Adobe Acrobat | Adobe Acrobat 提供全面的 PDF 編輯和管理功能，而 PDFx 專注於多文件的整合，功能範圍較窄。 | 如果需要高級的 PDF 編輯功能和企業級支持，Adobe Acrobat 是更好的選擇。 | medium，因為需要重新適應不同的工作流程和功能。 |
| Foxit PDF Editor | Foxit 提供類似的 PDF 編輯功能，但 PDFx 在多文件整合上更具優勢。 | 如果需要輕量級的 PDF 編輯工具，Foxit 是不錯的選擇，但對於多文件管理，PDFx 更加方便。 | low，因為兩者的基本操作相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **pdfx** | **Adobe Acrobat** | **Foxit PDF Editor** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Adobe Acrobat 提供全面的 PDF 編輯和管理功能，而 PDFx 專注於多文件的整合，功能範圍較窄。 | Foxit 提供類似的 PDF 編輯功能，但 PDFx 在多文件整合上更具優勢。 |
> | 遷移成本 | - | medium，因為需要重新適應不同的工作流程和功能。 | low，因為兩者的基本操作相似。 |
> | 適用場景 | 主要場景 | 如果需要高級的 PDF 編輯功能和企業級支持，Adobe A | 如果需要輕量級的 PDF 編輯工具，Foxit 是不錯的選擇 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人側項目試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在大型 PDF 文件中可能出現性能問題，導致加載緩慢。
  - 解法：將大型文件分割成多個小文件再進行整合。
- [MEDIUM] 某些 PDF 文件在導出時可能無法正確顯示格式。
  - 解法：在導出前檢查文件格式，必要時進行調整。
- [MEDIUM] 缺乏詳細的使用文檔，可能導致使用困難。
  - 解法：參考社群討論或 GitHub issue 獲取幫助。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的文件管理系統 | 非常適合 | PDFx 的多文件整合功能能有效提升文件管理效率。 |
| 大型企業的 PDF 編輯需求 | 不適合 | 目前功能尚不夠全面，無法滿足高級編輯需求。 |
| 教育機構的課程資料整理 | 適合 | 能夠將多份課程資料整合為一個文件，方便學生使用。 |
| 個人使用的文件整理工具 | 非常適合 | 簡單易用，適合個人用戶進行多文件管理。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到簡便的多文件管理效果，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：PDFx 本身不需要高權限，且不存取敏感資料。依賴的庫都來自於知名的開源社區，信任度較高。

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
| Forks | 52 |
| Open Issues | 0 |
| 最後推送 | 2026-06-28 |
| 建立日期 | 2026-06-24 |
| Repo 大小 | 3.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/AlexandrosGounis/pdfx) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@electron-toolkit/preload` `@electron-toolkit/utils` `@electron-toolkit/tsconfig` `@types/node` `@types/react` `@types/react-dom` `@types/d3-selection` `@types/d3-zoom` `@vitejs/plugin-react` `d3-selection` `d3-zoom` `electron` `electron-builder` `electron-vite` `fflate`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 85
>     "CSS" : 10
>     "Objective-C++" : 3
>     "Shell" : 1
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@AlexandrosGounis](https://github.com/AlexandrosGounis) | 10 |
> | [@ArcanConsulting](https://github.com/ArcanConsulting) | 1 |
> | [@ShreySavsani](https://github.com/ShreySavsani) | 1 |
> | [@mauitaxes](https://github.com/mauitaxes) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度尚可，最近有幾個提交和問題回應。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-17 ~ 2026-06-28）
> **活躍天數** 6 天 · **最新 commit** Cleans up labels (#4)

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

相關概念：[[文件管理]] · [[PDF 擴展]] · [[跨平台應用]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

[GitHub](https://github.com/AlexandrosGounis/pdfx)

## 相關收錄

> [!note]- 直接競品（同子分類：文件處理）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "文件處理" AND file.name != "AlexandrosGounis--pdfx"
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
> const concepts = ["文件管理","PDF 擴展","跨平台應用"];
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

- [[2026-06-29|2026-06-29]] — 首次收錄，489 stars
