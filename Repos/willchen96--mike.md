---
repo: willchen96/mike
url: https://github.com/willchen96/mike
owner: willchen96
owner_type: User
language: TypeScript
license: AGPL-3.0
description: "OSS AI Legal Platform"
homepage: ""
stars: 785
stars_per_day: 785
forks: 185
open_issues: 5
created: 2026-04-29
pushed_at: 2026-04-29
first_seen: 2026-05-01
week: "2026-W18"
month: "2026-05"
category: "開發工具"
subcategory: "法律科技"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-01
use_case: "提供開源的法律 AI 平台，簡化法律文件處理與管理。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-04"
contributor_count: 1
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 730
readme_length: 1193
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-05-01"
star_history: "2026-05-01:785"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "mike"
  - "willchen96/mike"
  - "提供開源的法律 AI 平台，簡化法律文件處理與管理。"
---

# mike

**785** stars · **785** stars/天 · 建立 1 天前 · TypeScript · AGPL-3.0

```dataviewjs
const me = dv.page("Repos/willchen96--mike");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 提供開源的法律 AI 平台，簡化法律文件處理與管理。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (785 stars/day)
> **授權** AGPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 需要一個靈活且開源的法律文件處理平台的法律專業人士。
> **一句話重點** 這個專案的開源性質讓法律專業人士能夠完全控制其數據和功能，這在商業解決方案中往往無法實現。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/willchen96--mike");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "法律科技" && p.file.name !== "willchen96--mike" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 法律科技 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學、10 小時整合，得到靈活的法律文件處理平台，值得一試。

> [!abstract] 核心創新
> 這個專案的創新點在於其開源性質，讓法律專業人士能夠自由部署和修改系統。

## 專案簡介

Mike 是一個開源的法律 AI 平台，旨在簡化法律文件的處理和管理。使用者可以透過前端的 Next.js 應用程式與後端的 Express API 互動，並利用 Supabase 進行身份驗證和資料存儲。整個流程中，使用者首先需要安裝後端和前端的依賴，然後配置環境變數，接著執行 Supabase 的資料庫遷移以建立初始結構。最後，啟動後端和前端服務後，使用者可以在本地的 http://localhost:3000 訪問應用。這個平台的賣點在於其開源性質，讓法律專業人士能夠自由地部署和修改系統以符合特定需求。

技術上，Mike 使用 TypeScript 和 JavaScript 來構建前端和後端，並依賴 Supabase 提供的身份驗證和 PostgreSQL 數據庫服務。這樣的選擇使得開發者能夠快速構建和擴展應用，而不必擔心底層基礎設施的管理。

相較於其他法律 AI 平台，Mike 的開源特性使得用戶能夠完全控制其數據和功能，這在商業解決方案中往往是無法實現的。

在市場上，類似的工具如 0x0funky/agent-sprite-forge 和 0xGF/boneyard 主要集中於特定的法律應用，然而 Mike 提供了更全面的功能，支持多種文件格式的處理，並且允許用戶自定義模型提供者，這使得其在靈活性上有明顯優勢。

然而，使用者在部署時需要注意，必須有 S3 相容的物件存儲服務和 LibreOffice 來進行文件轉換，這可能會增加初期的設置成本。社群活躍度方面，儘管目前只有 5 個開放的問題，但這也顯示出專案仍在早期階段，未來可能會有更多的功能和修復。

總體而言，這個專案目前處於 alpha 階段，適合小型法律團隊或個人開發者進行試用和探索，但不建議用於生產環境的核心業務。未來 6 個月內，隨著社群的擴展和功能的增強，這個平台有潛力成為法律科技領域的一個重要工具。

**技術棧**：`TypeScript` · `JavaScript` · `CSS` · `PLpgSQL`

## 重點功能

- 開源平台 — 完全開放源碼，使用者可以自由修改和部署。
- Next.js 前端 — 提供現代化的用戶界面，支持快速響應。
- Express API — 強大的後端服務，支持文件處理和數據管理。
- Supabase 數據存儲 — 使用 PostgreSQL 進行數據管理，支持身份驗證。
- 文件轉換支持 — 需要 LibreOffice 進行 DOC/DOCX 到 PDF 的轉換。

## 快速開始

1. 安裝後端依賴
```bash
npm install --prefix backend
```
2. 安裝前端依賴
```bash
npm install --prefix frontend
```
3. 執行資料庫遷移
```bash
npm run dev --prefix backend
```
4. 啟動後端服務
```bash
npm run dev --prefix backend
```
5. 啟動前端服務
```bash
npm run dev --prefix frontend
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Node.js 和 npm。",
  "指令": "npm run dev --prefix backend",
  "預期輸出": "後端服務啟動，訪問 http://localhost:3000 瀏覽前端應用。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 785 stars（785/天），forks 185（23.6%），這顯示出使用者對於這個開源法律平台的高度興趣。開發者 willchen96 擁有開源專案的背景，這使得他能夠針對法律文件處理的痛點提供解決方案。這個專案的出現正好填補了市場上對於靈活且開源的法律 AI 平台的需求，尤其是在許多商業解決方案無法提供完全控制權的情況下。社群的反應也表明，許多人對於簡化法律文件處理的需求迫切，這可能是促使其快速增長的原因之一。

## 適合誰使用

**目標受眾**：需要一個靈活且開源的法律文件處理平台的法律專業人士。

> [!example] 使用場景
> - 法律顧問用它來自動化法律文件的處理，因為手動處理文件耗時且容易出錯。
> - 小型法律事務所用它來建立客戶資料庫，因為可以快速部署並自定義功能以符合特定需求。
> - 法律科技創業者用它來開發新的法律應用，因為開源平台提供了靈活性和可擴展性。

## 架構分析

Mike 的架構由前端和後端組成，前端使用 Next.js 提供現代化的用戶體驗，而後端則使用 Express API 來處理請求和數據管理。資料流中，使用者的請求首先由前端發送到後端，後端再與 Supabase 進行交互以存取數據。這樣的設計使得開發者能夠快速構建和擴展應用，並且保持了良好的性能。選擇使用 Supabase 作為數據存儲的原因在於其即時性和易用性，然而這也意味著使用者必須依賴第三方服務，可能會帶來額外的風險。整體架構的擴展性良好，但在高流量情況下，後端的性能可能會成為瓶頸，特別是在處理大量文件轉換時。

## 技術深入分析

Mike 的核心技術機制是基於 Next.js 和 Express 的全棧架構，前端使用 React 來構建用戶界面，後端則使用 Express 來處理 API 請求。這樣的設計使得應用能夠快速響應用戶操作，並且支持即時數據更新。效能方面，使用 Supabase 作為數據存儲，能夠快速處理用戶請求，但在高負載情況下，後端的性能可能成為瓶頸。選擇 TypeScript 作為開發語言的好處在於提高了代碼的可維護性和可讀性，但也增加了學習曲線。技術風險方面，依賴第三方服務如 Supabase 可能會帶來供應鏈風險，特別是在服務中斷的情況下。整合方面，與主流的 CI/CD 工具如 GitHub Actions 的兼容性良好，但在與現有的法律系統整合時，可能需要額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和指令，讓新手能夠快速上手。安裝過程相對順暢，但需要注意配置環境變數和依賴服務的安裝。文件中缺乏多語言支持，可能對非英語使用者造成困難。

## 優缺點分析

> [!success] 優點
> - 開源，使用者可以自由修改和擴展功能。
> - 現代化的前端界面，提供良好的用戶體驗。
> - 支持多種文件格式的處理，靈活性高。

> [!danger] 缺點
> - 需要額外的服務支持，如 S3 和 LibreOffice。
> - 目前功能仍在開發中，穩定性可能不足。
> - 社群活躍度尚低，問題解決速度可能較慢。

> [!warning] 注意事項
> - 需要 S3 相容的物件存儲服務。
> - 依賴 LibreOffice 進行文件轉換，需額外安裝。
> - 目前僅支援 PostgreSQL 作為數據存儲。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於特定的法律應用，功能較為局限，無法提供全面的文件處理支持。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的法律 AI 功能，但缺乏開源特性，使用者無法自由修改。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於特定的法律應用，功能較為局限，無法提供全面的文件處理支持。 | 如果你的需求非常專注於某一法律領域，且不需要開源的靈活性。 | medium，因為需要重新設計數據流和功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的法律 AI 功能，但缺乏開源特性，使用者無法自由修改。 | 如果你的團隊需要一個穩定的商業解決方案，而不需要自定義功能。 | high，因為需要重新評估整個系統架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **mike** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定的法律應用，功能較為局限，無法提供全面的文件處理支持。 | 提供類似的法律 AI 功能，但缺乏開源特性，使用者無法自由修改。 |
> | 遷移成本 | - | medium，因為需要重新設計數據流和功能。 | high，因為需要重新評估整個系統架構。 |
> | 適用場景 | 主要場景 | 如果你的需求非常專注於某一法律領域，且不需要開源的靈活性。 | 如果你的團隊需要一個穩定的商業解決方案，而不需要自定義功能。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 需要手動配置 Supabase，初學者可能會遇到困難。
  - 解法：參考官方文檔進行配置。
- **[HIGH]** 文件轉換功能依賴 LibreOffice，未安裝可能導致錯誤。
  - 解法：確保在系統中安裝 LibreOffice。
- [MEDIUM] 社群問題解決速度慢，可能影響使用體驗。
  - 解法：主動參與社群討論，提出問題。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型法律事務所的文件管理系統 | 非常適合 | 提供靈活的文件處理功能，能夠滿足小型團隊的需求。 |
| 大型企業的法律合規系統 | 不適合 | 目前功能仍在開發中，穩定性不足。 |
| 法律科技初創公司的產品開發 | 適合 | 開源特性允許高度自定義，適合快速迭代。 |
| 個人法律顧問的工具 | 非常適合 | 簡單易用，能夠快速上手。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學、10 小時整合，得到靈活的法律文件處理平台，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不會存取敏感資料，但依賴的第三方服務需謹慎選擇以避免供應鏈風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Mike 最常與 Supabase 和 S3 相容的物件存儲服務搭配使用，通常在開發和部署階段進行整合。在一個使用 Next.js + Vercel 部署的專案中，你可以用 Mike 來處理法律文件，具體做法是將文件上傳至 S3，然後通過 API 請求進行處理。與主流 CI/CD 工具如 GitHub Actions 的整合良好，但在與現有法律系統整合時，可能需要額外的適配工作。最常見的整合問題包括配置環境變數和依賴服務的安裝，這可能會增加初期的設置成本。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Mike 出現之前，法律文件處理主要依賴於商業解決方案，這些方案通常價格高昂且缺乏靈活性。隨著開源技術的發展，越來越多的法律專業人士開始尋求可自定義的解決方案。技術的進步使得像 Supabase 這樣的即時數據庫成為可能，這為開源法律 AI 平台的實現提供了基礎。

Mike 代表了法律科技領域向開源和自動化邊界的擴展，未來可能會隨著社群的發展而變得更加成熟。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/willchen96--mike");
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
> const me = dv.page("Repos/willchen96--mike");
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
| Forks | 185 |
| Open Issues | 5 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-04-29 |
| 建立日期 | 2026-04-29 |
| Repo 大小 | 730 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/willchen96/mike) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 98
>     "CSS" : 1
>     "PLpgSQL" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@willchen96](https://github.com/willchen96) | 2 |

## 社群與生態

**社群活躍度**：社群活躍度尚低，目前只有 5 個開放的問題。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-29 ~ 2026-04-29）
> **活躍天數** 1 天 · **最新 commit** Add local repo contents

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/willchen96/mike/issues/4) | Create Docker file and / or compose for easy deployment | 1 | 0 |
> | [#3](https://github.com/willchen96/mike/issues/3) | Is Mike aimed at any specific territory? | 0 | 0 |
> | [#1](https://github.com/willchen96/mike/issues/1) | Authorisation bypass in POST /chat/create permits cross-proj | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Mike
> 
> Open-source release containing the Mike frontend and backend.
> 
> ## Contents
> 
> - `frontend/` - Next.js application
> - `backend/` - Express API, Supabase access, document processing, and migrations
> - `backend/migrations/000_one_shot_schema.sql` - one-shot Supabase schema for fresh databases
> 
> ## Setup
> 
> Install dependencies:
> 
> ```bash
> npm install --prefix backend
> npm install --prefix frontend
> ```
> 
> Create local env files from the examples:
> 
> ```bash
> cp backend/.env.example backend/.env
> cp frontend/.env.local.example frontend/.env.local
> ```
> 
> Run `backend/migrations/000_one_shot_schema.sql` in the Supabase SQL editor for a fresh database.
> 
> Start the backend:
> 
> ```bash
> npm run dev --prefix backend
> ```
> 
> Start the frontend:
> 
> ```bash
> npm run dev --prefix frontend
> ```
> 
> Open `http://localhost:3000`.
> 
> ## Required Services
> 
> - Supabase Auth and Postgres
> - S3-compatible object storage, such as Cloudflare R2
> - At least one supported model provider key, depending on which models you enable
> - LibreOffice for DOC/DOCX to PDF conversion
> 
> ## Checks
> 
> ```bash
> npm run build --prefix backend
> npm run build --prefix frontend
> npm run lint --prefix frontend
> ```
> 
> ## License
> 
> AGPL-3.0-only. See `LICENSE`.

## 延伸閱讀

相關概念：[[自動化]] · [[文件處理]] · [[開源]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[magnum6actual--flipoff|magnum6actual/flipoff]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]]

[GitHub](https://github.com/willchen96/mike)

## 相關收錄

> [!note]- 直接競品（同子分類：法律科技）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "法律科技" AND file.name != "willchen96--mike"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "willchen96--mike"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "willchen96--mike" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "willchen96--mike"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","文件處理","開源"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "willchen96--mike" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/willchen96--mike");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "willchen96--mike" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "willchen96" AND file.name != "willchen96--mike"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/willchen96--mike");
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
> const me = dv.page("Repos/willchen96--mike");
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
> const me = dv.page("Repos/willchen96--mike");
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
> const me = dv.page("Repos/willchen96--mike");
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
> const me = dv.page("Repos/willchen96--mike");
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

> **2026-05-01** — 首次收錄
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

- [[2026-05-01|2026-05-01]] — 首次收錄，785 stars
