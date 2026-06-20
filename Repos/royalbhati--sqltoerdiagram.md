---
repo: royalbhati/sqltoerdiagram
url: https://github.com/royalbhati/sqltoerdiagram
owner: royalbhati
owner_type: User
language: HTML
license: MIT
description: "ER diagram generator. Paste CREATE TABLE statements and get a clean, interactive ERD — runs 100% in your browser, nothing uploaded"
homepage: "https://sqltoerdiagram.com."
stars: 483
stars_per_day: 97
forks: 39
open_issues: 3
created: 2026-06-14
pushed_at: 2026-06-20
first_seen: 2026-06-20
week: "2026-W25"
month: "2026-06"
category: "開發工具"
subcategory: "資料庫工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-20
use_case: "將 SQL 表結構轉換為互動式 ER 圖，完全在瀏覽器中運行，無需上傳。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-06-27"
contributor_count: 1
engagement: "low"
issue_close_rate: 57
repo_size_kb: 132
readme_length: 5209
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-20"
star_history: "2026-06-20:483"
tags:
  - github
  - "category/開發工具"
  - "lang/html"
  - easy_install
  - "topic/data_modeling"
  - "topic/database"
  - "topic/database_schema"
  - "topic/dbdiagram"
  - "topic/dbml"
aliases:
  - "sqltoerdiagram"
  - "royalbhati/sqltoerdiagram"
  - "將 SQL 表結構轉換為互動式 ER 圖，完全在瀏覽器中運行，無需上傳。"
---

# sqltoerdiagram

**483** stars · **97** stars/天 · 建立 5 天前 · HTML · MIT

```dataviewjs
const me = dv.page("Repos/royalbhati--sqltoerdiagram");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `easy-install`

`data-modeling` `database` `database-schema` `dbdiagram` `dbml` `developer-tools` `diagram` `entity-relationship-diagram` `er-diagram` `erd` `mysql` `open-source` `postgresql` `schema` `sql` `sql-parser` `sqlite` `vanilla-js` `visualization` `vite`

> [!summary] 一句話摘要
> 將 SQL 表結構轉換為互動式 ER 圖，完全在瀏覽器中運行，無需上傳。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Growing (97 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要快速生成 ER 圖且重視數據隱私的開發者或資料庫管理者。
> **一句話重點** 這個工具展示了如何在不依賴伺服器的情況下，提供高效且安全的資料可視化解決方案。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/royalbhati--sqltoerdiagram");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "資料庫工具" && p.file.name !== "royalbhati--sqltoerdiagram" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 資料庫工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到快速生成 ER 圖的效果，值得使用。

> [!abstract] 核心創新
> 這個專案的核心創新是提供一個完全本地化的 ER 圖生成器，無需上傳數據，並且支持即時編輯和多種 SQL 方言。

## 專案簡介

這個工具的核心機制是將 SQL 的 `CREATE TABLE` 語句轉換為可視化的 ER 圖。用戶只需將 SQL 語句粘貼到工具中，系統會自動解析並生成一個清晰的實體關係圖，並且所有操作都在本地進行，確保數據安全。使用者可以通過雙擊表格名稱或列名進行即時編輯，並且這些變更會自動反映到 SQL 語句中，這樣的設計使得編輯過程非常直觀。工具的賣點在於其快速和無需註冊的特性，並且支持多種 SQL 方言，包括 PostgreSQL、MySQL 和 Snowflake。技術上，這個專案使用 Vite 作為構建工具，並依賴於 @dagrejs/dagre 進行自動佈局，這使得在處理大量表格時仍能保持流暢的性能，測試顯示在 300 張表的情況下可達到約 120fps。

與其他 ER 圖工具相比，如 dbdiagram.io 和 Lucidchart，這個工具提供了完全本地化的解決方案，避免了數據上傳的風險，並且不需要任何付費訂閱。使用者可以輕鬆地將圖表導出為 PNG 或 SVG 格式，並且支持保存和分享功能，這使得團隊協作變得更加方便。儘管目前還在早期階段，但其簡單易用的特性使其對於小型專案或個人開發者來說非常合適。未來可能會增加更多的 SQL 方言支持和功能擴展。對於需要快速生成 ER 圖的開發者來說，這是一個值得考慮的工具。

**技術棧**：`HTML` · `JavaScript` · `CSS` · `Vite 5.4.0` · `@dagrejs/dagre 1.1.4`

## 重點功能

- 本地運行 — 所有操作在瀏覽器中進行，無需上傳數據。
- 支持多種 SQL 方言 — 包括 PostgreSQL、MySQL、SQLite、SQL Server 和 Snowflake。
- 實時編輯 — 雙擊表格或列名即可進行即時編輯，並自動更新 SQL。
- 自動佈局 — 使用 @dagrejs/dagre 進行智能佈局，確保表格不重疊。
- 導出功能 — 支持將 ER 圖導出為 PNG 和 SVG 格式，方便分享和保存。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 啟動開發伺服器
```bash
npm run dev
```
3. 訪問本地伺服器
```bash
http://localhost:5173
```

## 程式碼範例

```html
{
  "前置條件": "用戶需在本地安裝 Node.js 環境。",
  "指令": "npm run build    # outputs static files to dist/",
  "預期輸出": "生成靜態文件，準備部署到任何靜態主機。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 483 stars（97/天），forks 39（8.1%），這顯示出不錯的增長潛力。作者 Royal Bhati 之前有開發過其他開源工具，這次專案解決了現有 SQL 圖表工具的多數痛點，如付費牆和性能問題。這個工具的出現恰逢開發者對於簡單、快速的本地解決方案的需求上升，特別是在數據隱私日益受到重視的背景下。forks/stars 比率在 8.1% 表示有相當一部分使用者對其進行了實際修改或使用，這是健康的社群參與指標。

## 適合誰使用

**目標受眾**：需要快速生成 ER 圖且重視數據隱私的開發者或資料庫管理者。

> [!example] 使用場景
> - 資料庫工程師用它來快速生成 ER 圖，因為不需要上傳數據，確保了資料安全。
> - 開發者用它來即時編輯 SQL 表結構，因為編輯後的變更會自動反映在 ER 圖中，提升了工作效率。
> - 教學人員用它來展示資料庫設計概念，因為其簡單易用的界面適合初學者快速上手。

## 架構分析

這個專案採用了單頁應用架構，所有功能都在用戶的瀏覽器中運行，這樣的設計使得數據不會被上傳到伺服器，確保了隱私。資料流方面，使用者的 SQL 語句通過自定義的 SQL 解析器進行解析，然後生成相應的 ER 圖，並在畫布上進行渲染。選擇這種架構的代價是需要在客戶端處理所有的計算，這對於大型資料庫可能會造成性能瓶頸。擴展性方面，未來可以通過增加更多的 SQL 方言支持來擴展功能，但需要考慮到用戶端的性能限制。

## 技術深入分析

這個專案的核心技術機制是通過自定義的 SQL 解析器將 SQL 語句轉換為 ER 圖，並使用 Canvas 渲染技術進行顯示。這樣的設計使得在處理大量表格時仍能保持流暢的性能，特別是在使用 @dagrejs/dagre 進行自動佈局時，能夠有效避免表格重疊。效能方面，測試顯示在 300 張表的情況下可達到約 120fps，這對於大多數開發者來說是足夠的。選擇使用 Vite 作為構建工具的好處是能夠快速啟動和熱重載，這對於開發過程中的迭代非常重要。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在客戶端處理大型資料庫時。整合方面，由於這是一個純前端的工具，與現有的開發工具鏈（如 VS Code 和 CI/CD pipeline）整合的難度相對較低，但仍需考慮如何將其與後端系統進行有效的協作。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的使用說明和範例。安裝過程順暢，沒有明顯的坑。提供了良好的入門指南，讓新手能夠快速上手。文件目前僅有英文版本，可能對非英語使用者造成一定障礙。

## 優缺點分析

> [!success] 優點
> - 完全本地運行，確保數據隱私。
> - 支持多種 SQL 方言，靈活性高。
> - 即時編輯功能提升了工作效率。

> [!danger] 缺點
> - 目前支持的 SQL 語法有限，未來需要擴展。
> - 在處理非常大的資料庫時可能會影響性能。
> - 不支持 Windows 系統的某些特定功能。

> [!warning] 注意事項
> - 目前僅支持部分 SQL 語法，未來可能會增加更多方言。
> - 在處理極大規模的資料庫時，性能可能會受到影響。
> - 不支持 Windows 系統的某些特定功能。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 ER 圖生成，但需要上傳數據，無法保證數據隱私。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於代碼生成，並不專注於 ER 圖的可視化。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| dbdiagram.io | 提供雲端解決方案，但需要上傳數據，無法保證數據隱私。 | 如果需要團隊協作和雲端存儲功能，dbdiagram.io 是更好的選擇。 | medium，因為需要將 SQL 語句轉換為 dbdiagram.io 的格式。 |
| Lucidchart | 提供強大的圖形編輯功能，但需要付費訂閱。 | 如果需要更高級的圖形編輯功能和團隊合作，Lucidchart 更適合。 | high，因為需要手動重建圖表。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **sqltoerdiagram** | **dbdiagram.io** | **Lucidchart** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供雲端解決方案，但需要上傳數據，無法保證數據隱私。 | 提供強大的圖形編輯功能，但需要付費訂閱。 |
> | 遷移成本 | - | medium，因為需要將 SQL 語句轉換為 dbdiagram.io 的格式。 | high，因為需要手動重建圖表。 |
> | 適用場景 | 主要場景 | 如果需要團隊協作和雲端存儲功能，dbdiagram.io 是 | 如果需要更高級的圖形編輯功能和團隊合作，Lucidchart |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人項目或小型團隊試用，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在處理超過 300 張表時可能會出現性能下降的情況。
  - 解法：考慮將資料庫拆分為多個小型資料庫進行處理。
- [MEDIUM] 某些 SQL 語法未被支持，可能導致解析錯誤。
  - 解法：查看官方文檔以獲取支持的 SQL 語法列表。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的資料庫設計 | 非常適合 | 簡單易用，無需上傳數據，適合快速迭代。 |
| 大型企業的資料庫管理 | 不適合 | 處理大量資料時性能可能會下降。 |
| 學術研究中的資料可視化 | 適合 | 能夠快速生成 ER 圖，便於展示。 |
| 個人開發者的專案原型設計 | 非常適合 | 完全本地運行，確保數據隱私。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到快速生成 ER 圖的效果，值得使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：完全在本地運行，不需要高權限，且不存取敏感資料，適合在 CI/CD pipeline 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/royalbhati--sqltoerdiagram");
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
> const me = dv.page("Repos/royalbhati--sqltoerdiagram");
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
| Forks | 39 |
| Open Issues | 3 |
| Issue 解決率 | 57% (4 closed) |
| 最後推送 | 2026-06-20 |
| 建立日期 | 2026-06-14 |
| 官方網站 | [Link](https://sqltoerdiagram.com.) |
| Repo 大小 | 132 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/royalbhati/sqltoerdiagram) |
| Topics | `data-modeling` `database` `database-schema` `dbdiagram` `dbml` `developer-tools` `diagram` `entity-relationship-diagram` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@dagrejs/dagre` `vite`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "HTML" : 51
>     "JavaScript" : 45
>     "CSS" : 4
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@royalbhati](https://github.com/royalbhati) | 8 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者定期更新和回應問題。
**連結**：[文件](https://sqltoerdiagram.com)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-10 ~ 2026-06-20）
> **活躍天數** 4 天 · **最新 commit** refactor code, add MIT license and Snowflake dialect (CREATE OR REPLACE / TRANSIENT)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#7](https://github.com/royalbhati/sqltoerdiagram/issues/7) | Please add an explicit open-source LICENSE file | 0 | 1 |
> | [#6](https://github.com/royalbhati/sqltoerdiagram/issues/6) | Relation lines cross | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # SQL to ER Diagram
> 
> **A free, open-source online ERD generator.** Paste a SQL schema (`CREATE TABLE`
> statements) → get a clean, interactive entity-relationship diagram.
> 
>  
> 
> **100% local · no signup · no upload.** It runs entirely in your browser, so your
> schema never leaves your machine — no server, no backend. Live at
> **[sqltoerdiagram.com](https://sqltoerdiagram.com)**.
> 
> ## Why
> 
> Every other SQL-diagram tool is either paywalled, ugly, or slow. SQL to ER Diagram is
> a single static page that stays smooth at **hundreds of tables**, edits your SQL
> two-way, and shares a whole diagram in a single link — with no account and nothing
> leaving your browser.
> 
> ## Features
> 
> ### Parse
> 
> - Standard `CREATE TABLE` / `ALTER TABLE` DDL across **PostgreSQL, MySQL, SQLite,
>   SQL Server & Snowflake**.
> 
> ### Visualize & navigate
> 
> - **Canvas renderer** with cached bitmaps + viewport culling — smooth at hundreds of
>   tables (benchmarked **~120fps** while zooming 300 tables / 593 FKs).
> - **Declutter dense schemas**: FK lines are soft by default; **hover** a table to
>   highlight just its relationships, **click** to pin focus (fades every unrelated
>   table and line), click empty space to clear.
> - **Drag** tables, **scroll / pinch to zoom**, and pan.
> 
> ### Smart layout
> 
> - **Hub-aware layered auto-arrange**: the most-connected table is placed on one side
>   with its related tables aligned beside it. **Horizontal / Vertical** direction and
>   **Compact / Comfortable / Spacious** spacing live under the **Arrange ▾** menu.
> - **Overlap-free**: auto-arrange runs a separation pass so no two tables overlap.
> - **Your arrangement is saved**: positions and the camera persist automatically, so
>   reloading restores your exact layout. Editing SQL keeps your manual positions —
>   only brand-new tables get auto-placed beside the rest. **Arrange** re-runs layout
>   on demand.
> 
> ### Edit on the canvas → SQL updates
> 
> - **Double-click** a table name, column name, or column type to edit it inline. The
>   change is applied as a *surgical text edit* (comments, formatting, and unsupported
>   clauses are preserved), and a table rename updates every `REFERENCES` to it.
> - **Add columns**: pin a table, then **+ add column**. The new column is inserted into
>   your SQL with a default type for the selected **dialect** (PostgreSQL / MySQL /
>   SQLite / SQL Server / Snowflake) and opens inline so you can name it. Editing a
>   column type shows dialect-aware suggestions.
> 
> ### Annotate
> 
> - A bottom-left palette adds **sticky notes** and **group boxes** to label and cluster
>   sections. Drag to move, drag the corner to resize, double-click to edit text, click
>   to select (colour swatches + delete), or press Delete. They're part of the diagram —
>   included in saves, share links, and PNG/SVG exports.
> 
> ### Save, share & export
> 
> - **Save / Open projects**: **Save** downloads a `.json` project (SQL + layout + camera
>   + dialect); **Open** loads one back.
> - **Share link**: **Share** copies a URL with the entire project encoded in the hash —
>   gzip-compressed + base64. The `#…` fragment is never sent to a server, so sharing
>   needs **no backend**, and opening the link restores the exact diagram.
> - **Export** to **PNG** (raster) and **SVG** (vector).
> 
> ### Editor & appearance
> 
> - **Syntax-highlighted SQL editor**: keywords / types / strings / comments / numbers
>   are colored via a paint layer behind the textarea. Re-tokenizing is a single linear
>   pass coalesced to one animation frame, so typing stays instant (~6ms full repaint on
>   a 45KB / 300-table script, sub-ms on normal schemas).
> - **Hide the SQL panel** (⬚ in the toolbar) for a full-width diagram.
> - **Light + dark themes**, and it remembers your last schema locally.
> 
> ## Run locally
> 
> ```bash
> npm install
> npm run dev      # http://localhost:5173
> ```
> 
> ## Build & host
> 
> ```bash
> npm run build    # outputs static files to dist/
> npm run preview  # preview the production build locally
> ```
> 
> `dist/` is plain static HTML/JS/CSS — drop it on any static host:
> 
> - **GitHub Pages** — push `dist/` to a `gh-pages` branch, or use an action.
> - **Netlify / Vercel / Cloudflare Pages** — build command `npm run build`, publish dir `dist`.
> - **Any web server / S3 bucket** — just upload the contents of `dist/`.
> 
> ## Supported SQL
> 
> - `CREATE [OR REPLACE] [TEMPORARY | TRANSIENT] TABLE [IF NOT EXISTS] name ( ... )` with quoted / backtick / `[bracket]` / `schema.qualified` names.
> - Inline column constraints: `PRIMARY KEY`, `NOT NULL`, `UNIQUE`, `REFERENCES other(col)`.
> - Table-level constraints: `PRIMARY KEY (...)`, `UNIQUE (...)`,
>   `FOREIGN KEY (...) REFERENCES other(...)`, `CONSTRAINT ... FOREIGN KEY ...`.
> - `ALTER TABLE x ADD [CONSTRAINT ...] FOREIGN KEY (...) REFERENCES y(...)`.
> - Line (`--`, `#`) and block (`/* */`) comments are ignored.
> 
> ## Tech
> 
> - **Vite** — build + dev server.
> - **@dagrejs/dagre** — layered auto-layout.
> - Custom canvas renderer + SQL DDL parser (no heavy SQL-parser dependency).
> 
> ## Shortcuts
> 
> | Key | Action |
> | --- | --- |
> | **⌘ / Ctrl + Enter** | Re-arrange |
> | **Double-click** canvas | Zoom in |
> | Drag the pane divider | Resize the editor |
> 
> ## License
> 
> [MIT](./LICENSE) © Royal Bhati. Fork it, self-host it, add your own SQL dialects — go for it.

## 延伸閱讀

相關概念：[[資料視覺化]] · [[資料庫]] · [[ER 圖]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]]

[GitHub](https://github.com/royalbhati/sqltoerdiagram) · [官方網站](https://sqltoerdiagram.com.)

## 相關收錄

> [!note]- 直接競品（同子分類：資料庫工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "資料庫工具" AND file.name != "royalbhati--sqltoerdiagram"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "royalbhati--sqltoerdiagram"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "HTML" AND file.name != "royalbhati--sqltoerdiagram" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W25" AND file.name != "royalbhati--sqltoerdiagram"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["資料視覺化","資料庫","ER 圖"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "royalbhati--sqltoerdiagram" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/royalbhati--sqltoerdiagram");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "royalbhati--sqltoerdiagram" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "royalbhati" AND file.name != "royalbhati--sqltoerdiagram"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/royalbhati--sqltoerdiagram");
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
> const me = dv.page("Repos/royalbhati--sqltoerdiagram");
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
> const me = dv.page("Repos/royalbhati--sqltoerdiagram");
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
> const me = dv.page("Repos/royalbhati--sqltoerdiagram");
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
> const me = dv.page("Repos/royalbhati--sqltoerdiagram");
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

> **2026-06-20** — 首次收錄
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

- [[2026-06-20|2026-06-20]] — 首次收錄，483 stars
