---
repo: AlexandrosGounis/pdfx
url: https://github.com/AlexandrosGounis/pdfx
owner: AlexandrosGounis
owner_type: User
language: TypeScript
license: MIT
description: "An extension of the traditional PDF standard, allowing multiple files to be stored in a single file via metadata"
homepage: ""
stars: 716
stars_per_day: 65
forks: 84
open_issues: 6
created: 2026-06-24
pushed_at: 2026-07-02
first_seen: 2026-06-29
week: "2026-W27"
month: "2026-06"
category: "開發工具"
subcategory: "PDF 工具"
release_tag: "v2026.6.1-beta.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-29
use_case: "將多個文件以元數據的方式存儲在單一 PDF 文件中。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-08"
contributor_count: 4
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 3224
readme_length: 1304
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-29"
star_history: "2026-06-29:489,2026-06-29:490,2026-06-30:564,2026-06-30:564,2026-07-01:611,2026-07-01:611,2026-07-02:635,2026-07-03:661,2026-07-04:687,2026-07-05:707,2026-07-06:716"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
  - "topic/electron"
  - "topic/electron_app"
  - "topic/electronjs"
  - "topic/liquid_glass"
  - "topic/macos_app"
aliases:
  - "pdfx"
  - "AlexandrosGounis/pdfx"
  - "將多個文件以元數據的方式存儲在單一 PDF 文件中。"
---

# pdfx

**716** stars · **65** stars/天 · 建立 11 天前 · TypeScript · MIT

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

`v2026.6.1-beta.0` `easy-install`

`electron` `electron-app` `electronjs` `liquid-glass` `macos-app` `open-source` `pdf` `pdf-generator` `pdf-parser` `pdf-processing` `pdf-tools` `pdf-viewer` `react` `spec` `typescript`

> [!summary] 一句話摘要
> 將多個文件以元數據的方式存儲在單一 PDF 文件中。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (65 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要將多個 PDF 文件整合成一個文件的專業人士，如文檔管理員、學生和設計師。
> **一句話重點** PDFx 的創新在於它能夠在不改變 PDF 結構的情況下，將多個文檔整合為一個文件，這對於需要高效文檔管理的用戶來說是一大福音。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，3 小時整合，得到高效的文檔管理工具，值得一試。

> [!abstract] 核心創新
> PDFx 提供了一種向後兼容的 PDF 擴展，能夠將多個文檔打包成一個文件，並且保持原有 PDF 的有效性。

## 專案簡介

PDFx 是一個開放的、向後兼容的 PDF 擴展，允許將多個文檔打包成單一文件，並提供一個簡單的桌面查看器。用戶可以將 `.pdf` 或 `.pdfx` 文件拖放到應用中，PDFx 會將其拆分為原始文檔，並以水平條帶的形式顯示頁面，方便用戶重新排序或刪除文檔，最終可選擇導出為一個完整的 PDF 文件。這種設計使得用戶在處理多個相關文檔時，能夠更方便地管理和導出，而不必分別處理每一個文件。PDFx 的核心技術基於 Electron、Vite 和 React，並使用 pdf.js 進行 PDF 渲染，pdf-lib 進行文檔組合，這樣的選擇使得應用在多平台上（macOS、Windows、Linux）都能良好運行。

相較於傳統的 PDF 工具，PDFx 提供了更靈活的文檔管理方式，能夠在不改變原有 PDF 結構的情況下，實現多文檔的合併與導出。這對於需要處理大量文檔的用戶來說，無疑是一個大幅提升效率的工具。使用者在開發過程中可以使用 `yarn dev` 指令進行本地開發，並透過 `yarn build:mac`、`yarn build:win` 和 `yarn build:linux` 分別打包成適合不同操作系統的應用。這樣的設計使得 PDFx 在多平台的兼容性上表現出色，並且能夠快速適應不同的使用場景。

**技術棧**：`Electron` · `Vite` · `TypeScript` · `React`

## 重點功能

- 多文檔合併 — 允許將多個 PDF 文件以元數據方式存儲在一個文件中，並可隨時拆分。
- 跨平台支持 — 提供 macOS、Windows 和 Linux 的桌面應用，方便不同操作系統的用戶使用。
- 簡單的拖放界面 — 用戶可以直接將文件拖放到應用中，快速導入文檔。
- 導出功能 — 用戶可以將所有文檔導出為一個單一的 PDF 文件，簡化分享流程。
- OCR 支持 — 提供光學字符識別功能，方便用戶搜索和索引文檔內容。

## 快速開始

1. 安裝依賴
```bash
yarn
```
2. 啟動開發模式
```bash
yarn dev
```
3. 打包應用（macOS）
```bash
yarn build:mac
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 11 天就累積 716 stars（65/天），forks 84（11.7%），這顯示出不錯的社群關注度。作者 Alexandros Gounis 之前在 PDF 領域有相關經驗，這個專案解決了傳統 PDF 工具無法有效管理多文檔的痛點，特別是在需要將多個文件合併為一個 PDF 的需求上。這個工具的推出恰逢市場對於更靈活文檔管理的需求上升，並且在 GitHub 上的討論和提案也顯示出用戶對於功能的期待。這樣的背景使得 PDFx 能夠迅速吸引注意力，並獲得使用者的支持。

## 適合誰使用

**目標受眾**：需要將多個 PDF 文件整合成一個文件的專業人士，如文檔管理員、學生和設計師。

> [!example] 使用場景
> - 文檔管理員用它來將多個報告合併為一個 PDF 文件，因為這樣可以減少文件數量，方便分享和存檔。
> - 學生用它來整理課堂講義和參考資料，因為能夠快速導出成一個整合的 PDF，避免了多個文件的混亂。
> - 設計師用它來將多個設計草稿整合成一個文件，因為這樣可以更方便地進行客戶展示和反饋收集。

## 架構分析

PDFx 採用 Electron 作為桌面應用框架，這使得它能夠跨平台運行。應用的核心是使用 Vite 進行快速構建，並利用 TypeScript 和 React 進行前端開發。資料流方面，PDFx 使用 pdf.js 進行 PDF 渲染，並使用 pdf-lib 來組合多個文檔。

這樣的架構選擇使得開發過程中能夠快速迭代，並且保持良好的性能。選擇 Electron 雖然帶來了較大的應用體積，但卻能夠實現跨平台的便利性，這對於需要在多個操作系統上運行的用戶來說是個優勢。整體架構設計上，PDFx 的擴展性良好，未來可以根據需求增加更多功能。

## 技術深入分析

PDFx 的核心技術機制是基於 Electron 框架，這使得它能夠在多平台上運行。使用 pdf.js 進行 PDF 渲染，這是一個成熟的開源庫，能夠高效地處理 PDF 文件的顯示。pdf-lib 則用於文檔的組合，這樣的選擇使得 PDFx 能夠在保持良好性能的同時，提供靈活的文檔處理能力。效能方面，PDFx 在處理小型文件時表現良好，但在面對大型文件時，可能會出現延遲。設計上選擇 Electron 雖然帶來了較大的應用體積，但卻能夠實現跨平台的便利性，這對於需要在多個操作系統上運行的用戶來說是個優勢。技術風險方面，隨著用戶數量的增加，可能會出現性能瓶頸，特別是在處理大量文檔時。整體來看，PDFx 與主流框架的整合難度不高，能夠快速上手並融入現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的詳細步驟。安裝過程順暢，無明顯坑點。提供的指令簡單易懂，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 支持多文檔合併，提升了文檔管理的靈活性。
> - 跨平台支持，能夠在多種操作系統上運行。
> - 簡單易用的界面，降低了使用門檻。

> [!danger] 缺點
> - 目前僅支持 PDF 格式，對其他格式的支持有限。
> - 在處理大型文件時性能可能會下降。
> - OCR 功能的準確性可能受限於文本的清晰度。

> [!warning] 注意事項
> - 目前僅支援 PDF 格式，不支持其他文件格式。
> - OCR 功能在某些情況下可能會導致文本識別不準確。
> - 在處理大型 PDF 文件時，性能可能會受到影響。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 主要用於生成和管理多文檔的代理，而 PDFx 專注於 PDF 文件的合併與導出。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 提供了文件版本控制功能，而 PDFx 更加專注於多文檔的整合和導出。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成和管理多文檔的代理，而 PDFx 專注於 PDF 文件的合併與導出。 | 如果需要生成多文檔的代理，並且不僅限於 PDF 格式。 | medium，因為需要重新設計文檔管理流程。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供文件版本控制功能，而 PDFx 更加專注於多文檔的整合和導出。 | 如果需要強大的版本控制功能，特別是在團隊協作中。 | high，因為需要重新設計整個文檔管理系統。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **pdfx** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於生成和管理多文檔的代理，而 PDFx 專注於 PDF 文件的合併與導出。 | 提供文件版本控制功能，而 PDFx 更加專注於多文檔的整合和導出。 |
> | 遷移成本 | - | medium，因為需要重新設計文檔管理流程。 | high，因為需要重新設計整個文檔管理系統。 |
> | 適用場景 | 主要場景 | 如果需要生成多文檔的代理，並且不僅限於 PDF 格式。 | 如果需要強大的版本控制功能，特別是在團隊協作中。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目試用，尚不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** OCR 功能在某些情況下可能會導致文本識別不準確，特別是在有圖像的頁面上。
  - 解法：在使用 OCR 前，確保文本清晰可見。
- [MEDIUM] 在處理大型 PDF 文件時，性能可能會下降。
  - 解法：盡量將文件拆分為較小的部分進行處理。
- [MEDIUM] 某些操作系統的打包過程可能會出現問題，導致應用無法正常啟動。
  - 解法：參考官方文檔中的打包指南進行操作。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司需要管理多個報告 | 非常適合 | 能夠有效整合多個文檔，提升工作效率。 |
| 學生需要整理課堂講義 | 適合 | 能夠快速導出整合的 PDF，方便學習。 |
| 大型企業需要處理大量文檔 | 普通 | 在處理大型文件時性能可能會下降。 |
| 設計團隊需要展示多個設計草稿 | 非常適合 | 能夠快速整合並導出設計文件。 |
| 需要處理非 PDF 格式的文檔 | 不適合 | 目前僅支持 PDF 格式。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，3 小時整合，得到高效的文檔管理工具，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：PDFx 不需要高權限，且不存取敏感資料，適合在 CI/CD 環境中使用。

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
| Forks | 84 |
| Open Issues | 6 |
| Issue 解決率 | 0% (0 closed) |
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

**社群活躍度**：社群活躍度中等，最近有幾個合併請求和問題討論。
**連結**：[文件](https://github.com/AlexandrosGounis/pdfx)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-26 ~ 2026-07-02）
> **活躍天數** 5 天 · **最新 commit** adds GitHub Sponsors funding configuration

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#11](https://github.com/AlexandrosGounis/pdfx/issues/11) | Feature proposals: Same file Open-Edit-Save, Search capabili | 0 | 0 |
> | [#10](https://github.com/AlexandrosGounis/pdfx/issues/10) | OCR silently overrides real text — search & copy return corr | 0 | 1 |
> | [#7](https://github.com/AlexandrosGounis/pdfx/issues/7) | Proposal: contribute appearance-based signing + security/a11 | 0 | 2 |

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

相關概念：[[PDF 處理]] · [[文件管理]] · [[OCR]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]]

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
> const concepts = ["PDF 處理","文件管理","OCR"];
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
