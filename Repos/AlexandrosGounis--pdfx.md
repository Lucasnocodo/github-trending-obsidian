---
repo: AlexandrosGounis/pdfx
url: https://github.com/AlexandrosGounis/pdfx
owner: AlexandrosGounis
owner_type: User
language: TypeScript
license: MIT
description: "An extension of the traditional PDF standard, allowing multiple files to be stored in a single file via metadata"
homepage: ""
stars: 768
stars_per_day: 28
forks: 88
open_issues: 3
created: 2026-06-24
pushed_at: 2026-07-20
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
issue_close_rate: 40
repo_size_kb: 3349
readme_length: 1352
bus_factor: 1
last_release_days: 20
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-06-29"
star_history: "2026-06-29:489,2026-06-29:490,2026-06-30:564,2026-06-30:564,2026-07-01:611,2026-07-01:611,2026-07-02:635,2026-07-03:661,2026-07-04:687,2026-07-05:707,2026-07-06:716,2026-07-07:720,2026-07-08:726,2026-07-09:729,2026-07-10:734,2026-07-11:738,2026-07-12:741,2026-07-13:741,2026-07-14:743,2026-07-15:743,2026-07-16:745,2026-07-17:750,2026-07-18:757,2026-07-19:760,2026-07-20:760,2026-07-21:762,2026-07-22:768"
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

**768** stars · **28** stars/天 · 建立 27 天前 · TypeScript · MIT

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
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (28 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 1 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要將多個文件合併為單一 PDF 的專業人士或學生。
> **一句話重點** PDFx 的創新在於其能夠將多個文檔打包成一個 PDF 文件，這在傳統 PDF 工具中是無法實現的。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~3h · **綁定風險** low
> **結論** 花 3 小時學習、2 小時整合，得到靈活的文檔合併功能，值得嘗試。

> [!abstract] 核心創新
> PDFx 是一個向後兼容的 PDF 擴展，能夠將多個文檔打包成單一文件。

## 專案簡介

PDFx 是一個開放的、向後兼容的 PDF 擴展，允許將多個文檔打包成單一文件，並提供一個簡單的桌面查看器。用戶可以將 PDF 文件、圖像或文件夾拖放到窗口中，這些文檔會以頁面條的形式顯示，並可以垂直堆疊。用戶可以重新排序或刪除文檔，然後使用「Export PDF」功能將整個集合保存為一個文件。這種設計使得使用者能夠在不影響原始 PDF 文件的情況下，方便地管理和導出多個文檔。PDFx 使用 Electron、Vite 和 React 開發，並利用 pdf.js 進行 PDF 渲染，pdf-lib 用於文檔組合。這種架構選擇使得應用程序能夠在多個平台上運行，並保持良好的性能。

相較於傳統的 PDF 工具，PDFx 提供了更靈活的文件管理方式，特別適合需要處理多個文檔的用戶。與其他 PDF 處理工具相比，例如 Adobe Acrobat，PDFx 的優勢在於其開源性和靈活性，特別是在需要將多個文件合併的情境下。實際使用中，PDFx 目前仍處於 beta 階段，可能會遇到一些穩定性問題，如 OCR 功能的文本覆蓋問題。這個專案的社群活躍度不高，開發者需要注意其開發進度和問題解決的速度。整體來看，PDFx 適合個人和小型團隊使用，特別是那些需要簡單、靈活的 PDF 管理解決方案的用戶。

**技術棧**：`Electron` · `Vite` · `TypeScript` · `React`

## 重點功能

- 多文檔合併 — 支持將多個 PDF、圖像或文件夾合併為一個 PDF 文件。
- 簡單的拖放界面 — 用戶可以直接將文件拖放到應用中進行操作。
- OCR 功能 — 支持對 PDF 中的文本進行光學字符識別，方便搜索和複製。
- 跨平台支持 — 可在 macOS、Windows 和 Linux 上運行，提供一致的使用體驗。
- 導出功能 — 用戶可以將合併的文檔導出為單一 PDF 文件，方便分享和存檔。

## 快速開始

1. 安裝依賴
```bash
yarn
```
2. 啟動開發模式
```bash
yarn dev
```
3. 構建 macOS 版本
```bash
yarn build:mac
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 yarn；",
  "yarn dev          # 啟動開發模式；",
  "# 預期輸出：應用程序在開發模式下運行，並可進行即時預覽。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 27 天就累積 768 stars（28/天），forks 88（11.5%），顯示出一定的社群關注度。作者 Alexandros Gounis 之前有開發其他開源工具，這次的 PDFx 解決了傳統 PDF 工具在多文件管理上的不足，讓用戶能夠更方便地處理多個文檔。近期的更新中，加入了 OCR 和搜索索引功能，這些都是用戶在 PDF 處理中常見的需求。這些改進吸引了開發者的注意，並在社群中引發討論。PDFx 的設計理念符合當前對於開源和靈活性需求的趨勢，特別是在多平台支持方面。

## 適合誰使用

**目標受眾**：需要將多個文件合併為單一 PDF 的專業人士或學生。

> [!example] 使用場景
> - 文檔管理員用它來將多個報告合併成一個 PDF 文件，因為這樣可以更方便地分享和存檔，避免了多個文件的混亂。
> - 設計師用它來整理多個設計草稿，因為可以將不同版本的設計文件合併，並在一個文件中進行比較和修改。
> - 學生用它來整合課堂講義和參考資料，因為這樣可以在考試前快速查閱所有相關資料，提升學習效率。

## 架構分析

PDFx 採用 Electron 作為應用框架，這使得它能夠跨平台運行。資料流方面，使用 pdf.js 進行 PDF 渲染，並通過 pdf-lib 進行文檔組合。這種設計使得應用能夠在多個平台上保持一致的性能，但也增加了應用的體積和依賴性。選擇 Electron 使得開發者能夠快速構建桌面應用，但在性能上可能不及原生應用。擴展性方面，PDFx 目前的架構能夠支持未來的功能擴展，但隨著功能的增多，可能會面臨性能瓶頸。

## 技術深入分析

PDFx 的核心技術在於其使用 Electron 框架，這使得它能夠跨平台運行。資料流方面，PDFx 利用 pdf.js 進行 PDF 渲染，並通過 pdf-lib 來組合多個文檔。這種設計使得應用能夠在不同平台上保持一致的性能，但也增加了應用的體積和依賴性。效能方面，PDFx 能夠處理多達數十個文檔，但在處理大量文檔時可能會出現延遲。

選擇 Electron 作為開發框架，使得開發者能夠快速構建桌面應用，但在性能上可能不及原生應用。未來擴展性方面，PDFx 的架構能夠支持未來的功能擴展，但隨著功能的增多，可能會面臨性能瓶頸。技術風險方面，OCR 功能的穩定性和準確性可能在未來的版本中需要進一步優化，特別是在處理複雜文檔時。整合方面，PDFx 可以與現有的 PDF 工具鏈相容，但在某些情況下需要進行額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝和使用指導，並包含了基本的範例。安裝過程相對順暢，但需要注意依賴的安裝。文件沒有提供多語言支持，可能對非英語用戶造成困難。

## 優缺點分析

> [!success] 優點
> - 靈活的文件管理，能夠將多個文檔合併為一個文件。
> - 跨平台支持，適合多種操作系統。
> - 開源，社群可以自由修改和擴展功能。

> [!danger] 缺點
> - 目前仍在 beta 階段，穩定性有待提高。
> - OCR 功能存在文本覆蓋問題，影響使用體驗。
> - 社群活躍度不高，問題解決速度慢。

> [!warning] 注意事項
> - 目前仍處於 beta 階段，可能會遇到穩定性問題。
> - OCR 功能在某些情況下可能會導致文本覆蓋問題。
> - 社群活躍度不高，問題解決速度可能較慢。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於生成和管理多個代理的工具，而 PDFx 專注於文檔合併和管理。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供文件版本控制功能，適合需要版本管理的用戶，而 PDFx 更適合簡單的文檔合併。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Adobe Acrobat | 專業的 PDF 處理工具，提供全面的功能，包括編輯、註釋和簽名等，而 PDFx 專注於多文檔合併。 | 如果需要全面的 PDF 編輯功能和商業支持，Adobe Acrobat 是更好的選擇。 | medium，因為需要轉換工作流程和習慣。 |
| Foxit PDF Editor | 提供輕量級的 PDF 編輯功能，適合需要快速處理 PDF 的用戶，而 PDFx 更適合需要合併多個文檔的情境。 | 如果需要快速的 PDF 編輯和註釋功能，Foxit 是更合適的選擇。 | low，因為界面和功能相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **pdfx** | **Adobe Acrobat** | **Foxit PDF Editor** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專業的 PDF 處理工具，提供全面的功能，包括編輯、註釋和簽名等，而 PDFx 專注於多文檔合併。 | 提供輕量級的 PDF 編輯功能，適合需要快速處理 PDF 的用戶，而 PDFx 更適合需要合併多個文檔的情境。 |
> | 遷移成本 | - | medium，因為需要轉換工作流程和習慣。 | low，因為界面和功能相似。 |
> | 適用場景 | 主要場景 | 如果需要全面的 PDF 編輯功能和商業支持，Adobe Ac | 如果需要快速的 PDF 編輯和註釋功能，Foxit 是更合適 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** OCR 功能在某些情況下會導致文本覆蓋問題
  - 解法：暫時禁用 OCR 功能以避免問題
- [MEDIUM] 在某些平台上安裝過程可能會遇到依賴問題
  - 解法：確保所有依賴已正確安裝
- [MEDIUM] 社群活躍度不高，可能導致問題解決緩慢
  - 解法：定期檢查 GitHub Issues 獲取最新進展

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的小型團隊需要合併多個報告 | 非常適合 | PDFx 提供了簡單的文檔合併功能，適合小型團隊的需求。 |
| 大型企業需要全面的 PDF 編輯功能 | 不適合 | PDFx 目前功能有限，無法滿足大型企業的需求。 |
| 學生需要整理課堂資料 | 適合 | PDFx 的多文檔合併功能非常適合學生整理資料。 |
| 設計師需要版本控制的設計文件 | 普通 | PDFx 雖然能合併文件，但缺乏版本控制功能，可能不完全符合需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~3 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 3 小時學習、2 小時整合，得到靈活的文檔合併功能，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：PDFx 不需要高權限運行，且不存取敏感資料，但使用 OCR 功能時需注意資料的隱私性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

PDFx 最常與其他 PDF 工具搭配使用，特別是在文檔合併和管理的工作流中。在一個使用 Electron 和 React 的專案中，PDFx 可以作為文檔管理工具，具體做法是將其集成到現有的應用中，通過 API 調用來實現文檔的合併和導出。PDFx 支援與主流 CI 工具（如 GitHub Actions）整合，但可能需要額外的配置來確保兼容性。整合過程中，最常見的問題是依賴的版本不匹配，開發者需要仔細檢查依賴關係以避免衝突。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 PDFx 出現之前，許多 PDF 工具只能處理單一文檔，無法有效管理多個文件。傳統的解決方案如 Adobe Acrobat 雖然功能強大，但往往過於複雜且價格昂貴。隨著開源技術的發展，PDFx 提供了一個簡單且靈活的解決方案，能夠滿足用戶對多文檔管理的需求。

這個工具代表了開源 PDF 處理的趨勢，未來可能會有更多類似的工具出現，以滿足不斷增長的市場需求。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉基本的 PDF 處理
- 了解 Electron 框架

> [!tip] 導入策略
> 第一週：在個人項目中試用 PDFx。第二週：在小型團隊的內部工具中導入。第三週：收集使用反饋並進行調整。第四週：在主要產品中使用 PDFx 進行文檔管理。

**成功指標**：文檔合併時間減少 30%。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方工具轉換為其他 PDF 工具。

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
| Forks | 88 |
| Open Issues | 3 |
| Issue 解決率 | 40% (2 closed) |
| 最後推送 | 2026-07-20 |
| 建立日期 | 2026-06-24 |
| Repo 大小 | 3.3 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/AlexandrosGounis/pdfx) |
| Topics | `electron` `electron-app` `electronjs` `liquid-glass` `macos-app` `open-source` `pdf` `pdf-generator` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@electron-toolkit/preload` `@electron-toolkit/utils` `@electron-toolkit/tsconfig` `@tesseract.js-data/deu` `@tesseract.js-data/eng` `@tesseract.js-data/fra` `@tesseract.js-data/spa` `@types/d3-selection` `@types/d3-zoom` `@types/node` `@types/react` `@types/react-dom` `@vitejs/plugin-react` `d3-selection` `d3-zoom`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 90
>     "CSS" : 7
>     "Objective-C++" : 1
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@AlexandrosGounis](https://github.com/AlexandrosGounis) | 19 |
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

**社群活躍度**：社群活躍度不高，開發者需要關注問題解決進度。
**連結**：[文件](https://pdfx.zip)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-28 ~ 2026-07-20）
> **活躍天數** 8 天 · **最新 commit** implements text elements (#17)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/AlexandrosGounis/pdfx/issues/10) | OCR silently overrides real text — search & copy return corr | 0 | 1 |
> | [#5](https://github.com/AlexandrosGounis/pdfx/issues/5) | RFC: Schema and layout optimizations needed | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # PDFx
> 
> **One file. Many documents. Still a PDF.**
> 
> Web Demo: [https://pdfx.zip](https://pdfx.zip)
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
> The files produced are fully valid PDFs: open them anywhere and every page shows in sequence. Open them in PDFx and it splits back into the original documents. Plain single PDFs work as they are.
> 
> Drag and drop `.pdf` files, images or folders anywhere in the window. Each document renders as a horizontal strip of pages, and documents stack vertically. Reorder or remove them, then **Export PDF** to save the whole collection as one file.
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
> yarn dev:web      # run on the web
> yarn build:mac    # build:win for windows, build:linux for linux
> ```
> 
> *Linux packaging notes (formats, Flatpak, prerequisites) live in [docs/LINUX_SETUP.md](docs/LINUX_SETUP.md).*
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[PDF 處理]] · [[OCR]] · [[開源]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[AlexandrosGounis--pdfx|AlexandrosGounis/pdfx]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]]

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
> const concepts = ["PDF 處理","OCR","開源"];
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
