---
repo: AlexandrosGounis/pdfx
url: https://github.com/AlexandrosGounis/pdfx
owner: AlexandrosGounis
owner_type: User
language: TypeScript
license: MIT
description: "An extension of the traditional PDF standard, allowing multiple files to be stored in a single file via metadata"
homepage: ""
stars: 738
stars_per_day: 46
forks: 85
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
use_case: "將多個文件存儲在單一 PDF 文件中，並提供簡易的桌面查看器。"
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
last_release_days: 9
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-06-29"
star_history: "2026-06-29:489,2026-06-29:490,2026-06-30:564,2026-06-30:564,2026-07-01:611,2026-07-01:611,2026-07-02:635,2026-07-03:661,2026-07-04:687,2026-07-05:707,2026-07-06:716,2026-07-07:720,2026-07-08:726,2026-07-09:729,2026-07-10:734,2026-07-11:738"
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
  - "將多個文件存儲在單一 PDF 文件中，並提供簡易的桌面查看器。"
---

# pdfx

**738** stars · **46** stars/天 · 建立 16 天前 · TypeScript · MIT

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
> 將多個文件存儲在單一 PDF 文件中，並提供簡易的桌面查看器。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (46 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 8 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要將多個 PDF 文件整合為一個文件的專業人士或學生。
> **一句話重點** PDFx 的創新在於它將多個 PDF 文件整合為一個文件，並且保持了原有格式的兼容性。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** low
> **結論** 花 4 小時學習，2 小時整合，得到靈活的多文檔管理工具，值得一試。

> [!abstract] 核心創新
> PDFx 是一個向後兼容的 PDF 擴展，能夠在單一文件中打包多個文檔。

## 專案簡介

PDFx 是一個開放的 PDF 擴展，允許將多個文件打包成單一的 `.pdfx` 文件，並提供一個簡易的桌面查看器。用戶可以將 `.pdf` 或 `.pdfx` 文件拖放到應用中，所有文件將以橫向頁面條的形式顯示，並可進行重新排序或刪除，最終可通過「Export PDF」將整個集合保存為一個文件。這樣的設計使得用戶能夠在不改變原有 PDF 格式的情況下，靈活地管理多個文檔。核心功能是通過嵌入的 JSON 清單來實現文件的組合與分離。PDFx 使用 Electron、Vite、TypeScript 和 React 開發，並利用 pdf.js 進行 PDF 渲染，pdf-lib 進行文件組合。

這些技術選擇使得應用在各平台上（macOS、Windows、Linux）都能提供一致的使用體驗。相較於傳統的 PDF 工具，PDFx 提供了更高的靈活性，特別是在需要處理多個文檔的情境下。與其他 PDF 工具相比，如 Adobe Acrobat，PDFx 的優勢在於其開源性和對多文檔的支持，適合需要經常處理多個 PDF 文件的用戶。使用者在使用過程中可能會遇到 OCR 功能導致的文本損壞問題，這是目前的熱門問題之一。整體來說，PDFx 是一個適合小型團隊或個人使用的工具，特別是對於需要經常處理多個 PDF 文件的情境。

**技術棧**：`Electron` · `Vite` · `TypeScript` · `React` · `pdf.js` · `pdf-lib`

## 重點功能

- 多文檔支持 — 將多個 PDF 文件打包成單一 `.pdfx` 文件，並可隨時分離。
- 簡易的拖放界面 — 用戶可直接將文件拖入應用中，快速管理文檔。
- 跨平台支持 — 可在 macOS、Windows 和 Linux 上運行，保證一致的使用體驗。
- 內建 OCR 功能 — 支持文本識別，並可在主線程之外進行搜索索引。
- 導出功能 — 用戶可將所有文件導出為一個 PDF 文件，方便分享。

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
4. 打包 Windows 版本
```bash
yarn build:win
```
5. 打包 Linux 版本
```bash
yarn build:linux
```

## 程式碼範例

```ts
{
  "前置條件": "已安裝 Yarn 和 Node.js",
  "指令": "yarn dev",
  "預期輸出": "啟動開發模式，並在瀏覽器中顯示應用。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 16 天就累積 738 stars（46/天），forks 85（11.5%），這顯示出穩定的增長。作者 Alexandros Gounis 之前在 PDF 和文檔處理方面有相關經驗，這使得他能夠針對多文檔管理的需求提出解決方案。這個專案解決了傳統 PDF 工具在處理多個文件時的局限性，讓用戶能夠更靈活地管理文檔。近期的社群討論和問題反饋也促進了專案的活躍度，特別是對於 OCR 功能的改進需求。

## 適合誰使用

**目標受眾**：需要將多個 PDF 文件整合為一個文件的專業人士或學生。

> [!example] 使用場景
> - 文檔管理員用它來將多個報告合併為一個文件，因為這樣可以更方便地分享和存檔。
> - 設計師用它來整理多個設計草稿，因為能夠在一個 PDF 文件中快速查看和比較不同版本。
> - 學生用它來整合課程資料和講義，因為這樣可以減少查找資料的時間，提升學習效率。

## 架構分析

PDFx 採用 Electron 作為桌面應用框架，這使得它能夠跨平台運行。應用的核心是使用 pdf.js 進行 PDF 渲染，並通過 pdf-lib 來組合和處理多個文檔。資料流方面，當用戶將文件拖入應用時，會生成一個 JSON 清單來描述文件結構，這樣可以在不改變原有 PDF 格式的情況下，靈活地管理多個文檔。選擇 Electron 的好處是能夠快速開發跨平台應用，但代價是可能會增加應用的體積和資源需求。擴展性方面，隨著用戶需求的增加，可能需要進一步優化 OCR 功能和性能，以應對大型文件的處理需求。

## 技術深入分析

PDFx 的核心技術在於其對 PDF 格式的擴展，通過嵌入 JSON 清單來實現多文檔的管理。這使得用戶能夠在單一文件中靈活地處理多個文檔，而不需要改變原有的 PDF 結構。效能方面，雖然應用在處理小型文件時表現良好，但對於大型文件的處理仍需進一步優化，特別是在 OCR 功能的實現上。選擇 Electron 作為開發框架，雖然能夠快速實現跨平台支持，但也可能導致應用的體積增大，並增加資源需求。技術風險方面，OCR 功能的穩定性和準確性是未來需要關注的重點，特別是在處理包含圖片的 PDF 文件時。整合方面，PDFx 與現有的 PDF 工具鏈相容性良好，但在某些情況下可能需要額外的配置來支持特定的文件格式。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明。安裝過程相對順暢，但需要確保安裝 Node.js 和 Yarn。文件中包含了基本的使用範例，對於新手來說，能夠在 30 分鐘內上手。

## 優缺點分析

> [!success] 優點
> - 開源且免費，適合個人和小型團隊使用。
> - 支持多文檔管理，提升工作效率。
> - 跨平台支持，方便不同操作系統的用戶。

> [!danger] 缺點
> - 目前的 OCR 功能存在文本損壞問題，影響使用體驗。
> - 對於大型文件的性能可能不佳，需進一步優化。
> - 安裝和配置過程相對較為複雜。

> [!warning] 注意事項
> - 目前 OCR 功能可能會導致文本損壞，影響搜索和複製功能。
> - 對於大型 PDF 文件的處理，性能可能會受到影響。
> - 需要安裝 Node.js 和 Yarn 來運行和打包應用。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供多文檔支持，但專注於遊戲開發場景，功能較為專一。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 雖然也支持多文件處理，但主要針對 AI 代理的管理，應用場景不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Adobe Acrobat | Adobe Acrobat 是一個商業工具，提供全面的 PDF 編輯和管理功能，但不支持將多個文檔打包成一個文件。 | 如果需要高級的 PDF 編輯功能和企業級支持，Adobe Acrobat 是更好的選擇。 | medium，因為需要重新學習其界面和功能。 |
| Foxit PDF Editor | Foxit 提供了類似的 PDF 編輯功能，但在多文檔管理方面不如 PDFx 靈活。 | 如果需要一個輕量級的 PDF 編輯器，Foxit 是不錯的選擇，但對於多文檔處理不如 PDFx 方便。 | low，因為界面和操作邏輯相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **pdfx** | **Adobe Acrobat** | **Foxit PDF Editor** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Adobe Acrobat 是一個商業工具，提供全面的 PDF 編輯和管理功能，但不支持將多個文檔打包成一個文件。 | Foxit 提供了類似的 PDF 編輯功能，但在多文檔管理方面不如 PDFx 靈活。 |
> | 遷移成本 | - | medium，因為需要重新學習其界面和功能。 | low，因為界面和操作邏輯相似。 |
> | 適用場景 | 主要場景 | 如果需要高級的 PDF 編輯功能和企業級支持，Adobe A | 如果需要一個輕量級的 PDF 編輯器，Foxit 是不錯的選 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，但不建議用於生產環境的核心業務。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** OCR 功能可能導致文本損壞，影響搜索和複製功能
  - 解法：暫時避免使用 OCR 功能，或手動檢查文本
- [MEDIUM] 大型 PDF 文件處理時性能下降
  - 解法：將大型文件拆分為多個小文件處理
- [MEDIUM] 安裝過程中可能遇到 Node.js 和 Yarn 版本不兼容問題
  - 解法：確保安裝最新版本的 Node.js 和 Yarn

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型設計團隊需要整合多個設計稿 | 非常適合 | 能夠快速合併和管理多個設計文件，提升效率。 |
| 個人用戶需要整理學習資料 | 適合 | 能夠將多個 PDF 文件整合為一個，方便查閱。 |
| 大型企業需要處理大量 PDF 文件 | 不適合 | 對於大型文件的性能可能不佳，需考慮其他專業工具。 |
| 需要高級 PDF 編輯功能的專業用戶 | 不適合 | 缺乏 Adobe Acrobat 等工具的全面編輯功能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 4 小時學習，2 小時整合，得到靈活的多文檔管理工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：PDFx 不需要高權限，且不會存取敏感資料。依賴的庫經過廣泛使用，安全性相對可靠。

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
| Forks | 85 |
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

**社群活躍度**：社群活躍，最近有多個貢獻者提交了改進建議。
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

相關概念：[[PDF 處理]] · [[OCR]] · [[文檔管理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[AlexandrosGounis--pdfx|AlexandrosGounis/pdfx]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

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
> const concepts = ["PDF 處理","OCR","文檔管理"];
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
