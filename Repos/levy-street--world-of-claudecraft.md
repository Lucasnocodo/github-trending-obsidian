---
repo: levy-street/world-of-claudecraft
url: https://github.com/levy-street/world-of-claudecraft
owner: levy-street
owner_type: Organization
language: TypeScript
license: MIT
description: ""
homepage: ""
stars: 878
stars_per_day: 146
forks: 247
open_issues: 162
created: 2026-06-10
pushed_at: 2026-06-17
first_seen: 2026-06-15
week: "2026-W25"
month: "2026-06"
category: "遊戲"
subcategory: "MMO"
release_tag: "v0.5.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-15
use_case: "提供一個可線上或離線遊玩的微型 MMO 遊戲環境，模擬經典 WoW 體驗。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-06-24"
contributor_count: 5
engagement: "medium"
issue_close_rate: 14
repo_size_kb: 98428
readme_length: 7910
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-15"
star_history: "2026-06-15:701,2026-06-16:795,2026-06-17:878"
tags:
  - github
  - "category/遊戲"
  - "lang/typescript"
  - org
aliases:
  - "world-of-claudecraft"
  - "levy-street/world-of-claudecraft"
  - "提供一個可線上或離線遊玩的微型 MMO 遊戲環境，模擬經典 WoW 體驗。"
---

# world-of-claudecraft

**701** stars · **175** stars/天 · 建立 4 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/levy-street--world-of-claudecraft");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.5.0`

> [!summary] 一句話摘要
> 提供一個可線上或離線遊玩的微型 MMO 遊戲環境，模擬經典 WoW 體驗。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (175 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望開發或體驗經典 MMO 遊戲的獨立開發者和遊戲愛好者。
> **一句話重點** 這個專案不僅是一個遊戲，更是一個開放的開發平台，讓開發者能夠自由探索 MMO 的可能性。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/levy-street--world-of-claudecraft");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "MMO" && p.file.name !== "levy-street--world-of-claudecraft" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 MMO 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到一個可運行的 MMO 原型，值得一試。

> [!abstract] 核心創新
> 提供一個完整的 MMO 遊戲環境，支持線上和離線遊玩，並且具有持久化角色和交易系統。

## 專案簡介

World of ClaudeCraft 是一個模擬經典 WoW 的微型 MMO，支持線上和離線遊玩。用戶可以透過 Docker 快速部署伺服器，並在本地或遠端環境中運行遊戲。遊戲的核心是基於一個確定性模擬引擎，無論是線上還是離線，玩家的體驗都是一致的。用戶可以創建帳號和角色，並透過 REST 和 WebSocket 與伺服器互動，支持多達 10 個角色的持久化存儲。遊戲中包含了多種功能，如交易、對戰和團隊合作，並且有著經典的 MMO 規則。這個專案的賣點在於其簡單的部署方式和豐富的遊戲機制，讓開發者和玩家都能輕鬆上手。

技術上，專案使用 TypeScript 和 Vite 進行開發，並依賴 PostgreSQL 作為資料庫，這使得資料的持久化和多用戶互動變得高效。相較於其他類似工具，ClaudeCraft 提供了更完整的 MMO 體驗，而不僅僅是簡單的遊戲模擬。使用者可以在本地環境中快速測試和開發，這對於遊戲開發者來說是個很大的優勢。專案的活躍度相對較高，開發者社群也在持續增長，這意味著未來可能會有更多的功能和改進。對於希望探索 MMO 開發或想要體驗經典遊戲的開發者來說，這是一個值得考慮的選擇。

**技術棧**：`TypeScript` · `Vite` · `PostgreSQL 16` · `Docker`

## 重點功能

- 線上和離線遊玩 — 支持用戶在瀏覽器中直接進入遊戲或透過伺服器連線。
- 持久化角色 — 每個帳號最多可擁有 10 個角色，並持久保存角色的狀態和進度。
- 交易系統 — 玩家可以進行物品和金錢的交易，並且交易過程是伺服器驗證的。
- 對戰系統 — 提供 1v1 的競技場對戰，並有持久的 Elo 排名系統。
- 簡單的部署 — 透過 Docker 一行命令即可啟動伺服器和資料庫。

## 快速開始

1. 複製環境變數範本
```bash
cp .env.example .env
```
2. 編輯 .env 設定資料庫密碼
```bash
# 手動編輯 .env
```
3. 啟動伺服器和資料庫
```bash
docker compose up -d --build
```
4. 訪問遊戲
```bash
打開 http://localhost:8787
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 Docker 和 Docker Compose",
  "docker compose up -d --build",
  "# 預期輸出：啟動 PostgreSQL 和遊戲伺服器"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 4 天就累積 701 stars（175/天），forks 180（25.7%），這顯示出強烈的社群興趣。作者 Rubsey 和其他貢獻者在遊戲開發領域有過往經驗，這讓專案更具可信度。這個專案解決了傳統 MMO 開發中的複雜性，提供了一個簡單的部署方式，讓開發者能夠快速上手。社群的活躍度和快速增長的 stars 數量顯示出用戶對於這個工具的需求。最近的討論和問題也反映了使用者對於功能的期待和改進的需求。

## 適合誰使用

**目標受眾**：希望開發或體驗經典 MMO 遊戲的獨立開發者和遊戲愛好者。

> [!example] 使用場景
> - 遊戲開發者用它來快速搭建一個可測試的 MMO 環境，因為其簡單的 Docker 部署流程讓開發過程更高效。
> - 學生用它來學習遊戲開發，因為它提供了完整的範例和可操作的代碼，讓學習者能夠輕鬆理解 MMO 的架構。
> - 獨立開發者用它來創建自己的遊戲世界，因為其開源特性和可擴展性讓他們能夠自由修改和添加功能。

## 架構分析

ClaudeCraft 採用微服務架構，將遊戲伺服器和資料庫分開運行，這樣可以實現更好的擴展性和維護性。資料流從客戶端發送用戶的操作到伺服器，伺服器處理所有遊戲邏輯並返回結果給客戶端。這種設計使得伺服器能夠控制遊戲的所有狀態，避免了客戶端作弊的可能性。

選擇 PostgreSQL 作為資料庫是因為其強大的資料持久化能力和支援複雜查詢的特性。這樣的架構使得擴展性良好，但也增加了部署的複雜度，尤其是在多用戶環境中。未來可能會面臨的瓶頸是資料庫的性能，尤其是在用戶數量激增的情況下。

整體來說，這個架構適合中小型團隊進行開發和維護。

## 技術深入分析

World of ClaudeCraft 的核心技術在於其確定性模擬引擎，這使得遊戲的行為在不同環境中保持一致。使用 TypeScript 和 Vite 進行開發，這不僅提高了開發效率，還能夠利用現代前端技術的優勢。資料庫使用 PostgreSQL，這意味著可以處理複雜的資料結構和查詢，並且支持高效的資料持久化。遊戲伺服器的設計是以 REST 和 WebSocket 為基礎，這樣的選擇使得客戶端和伺服器之間的通訊更加靈活和高效。未來可能面臨的挑戰包括如何在用戶數量增長時保持伺服器的性能，以及如何擴展資料庫以支持更多的玩家。整體來說，這個專案在遊戲開發領域提供了一個有趣的探索機會，尤其是對於希望進一步了解 MMO 構建的開發者來說。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導和範例，讓新手能夠快速理解如何部署和使用。安裝過程相對順暢，但需要對 Docker 有基本了解。文件中包含了開發和運行的詳細步驟，對於新手來說非常友好。

## 優缺點分析

> [!success] 優點
> - 簡單的 Docker 部署流程，讓新手開發者能快速上手。
> - 完整的 MMO 遊戲機制，提供豐富的遊戲體驗。
> - 活躍的開發社群，持續更新和改進功能。

> [!danger] 缺點
> - 目前功能仍在開發中，可能存在不穩定性。
> - 需要一定的技術背景來進行自定義開發。
> - 依賴 Docker，對於不熟悉 Docker 的開發者可能有學習曲線。

> [!warning] 注意事項
> - 僅支援 PostgreSQL 16 及以上版本
> - 需要 Docker 環境來運行伺服器和資料庫
> - 目前功能仍在持續開發中，部分功能可能不穩定

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個工具專注於角色精靈的生成，而 ClaudeCraft 提供完整的 MMO 環境和遊戲機制。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 是一個簡單的遊戲引擎，而 ClaudeCraft 則是針對 MMO 的複雜性進行設計，提供更豐富的功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於角色精靈的生成，ClaudeCraft 則提供完整的 MMO 環境。 | 如果你只需要角色生成而不需要完整的遊戲環境，這是更輕量的選擇。 | low，因為兩者的功能範圍不同，轉移不會很複雜。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 是一個簡單的遊戲引擎，而 ClaudeCraft 提供更豐富的 MMO 體驗。 | 如果你需要一個簡單的遊戲引擎來快速開發，Boneyard 可能更適合。 | medium，因為需要重構遊戲邏輯以適應不同的架構。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **world-of-claudecraft** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於角色精靈的生成，ClaudeCraft 則提供完整的 MMO 環境。 | Boneyard 是一個簡單的遊戲引擎，而 ClaudeCraft 提供更豐富的 MMO 體驗。 |
> | 遷移成本 | - | low，因為兩者的功能範圍不同，轉移不會很複雜。 | medium，因為需要重構遊戲邏輯以適應不同的架構。 |
> | 適用場景 | 主要場景 | 如果你只需要角色生成而不需要完整的遊戲環境，這是更輕量的選擇 | 如果你需要一個簡單的遊戲引擎來快速開發，Boneyard 可 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人和小型團隊的開發實驗，不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 資料庫連線問題，可能因為環境變數未正確設置而導致連線失敗
  - 解法：確保 .env 檔案中的 POSTGRES_PASSWORD 正確設置
- [MEDIUM] 在高流量情況下，伺服器可能會出現性能瓶頸
  - 解法：考慮使用更強大的伺服器或進行負載平衡
- [MEDIUM] 某些功能在離線模式下可能無法正常運作
  - 解法：在開發時優先使用線上模式進行測試

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊希望快速開發一個 MMO 原型 | 非常適合 | 提供了完整的 MMO 機制和簡單的部署方式。 |
| 獨立開發者想要創建一個個人遊戲項目 | 適合 | 開源和可擴展性使其成為不錯的選擇。 |
| 大型遊戲公司需要一個穩定的 MMO 平台 | 不適合 | 目前仍在開發中，功能不夠穩定。 |
| 學生希望學習遊戲開發 | 非常適合 | 提供了豐富的範例和可操作的代碼，易於學習。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到一個可運行的 MMO 原型，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 安全性評估顯示，該工具需要適當的環境變數設置，並且在生產環境中必須小心使用開發命令。整體來說，若遵循最佳實踐，使用於 CI/CD pipeline 是安全的。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

ClaudeCraft 最常與 Docker 和 PostgreSQL 搭配使用，這樣的組合讓開發者能夠快速部署和管理遊戲伺服器。在一個使用 Vite 和 TypeScript 的專案中，開發者可以輕鬆整合 ClaudeCraft 作為遊戲後端，並使用 REST API 和 WebSocket 進行通訊。與主流 CI 工具（如 GitHub Actions）相容，支持自動化部署和測試。整合過程中，最常見的問題是環境變數的設置不當，這需要開發者特別注意。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/levy-street--world-of-claudecraft");
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
> const me = dv.page("Repos/levy-street--world-of-claudecraft");
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
| Forks | 180 |
| Open Issues | 132 |
| Issue 解決率 | 14% (21 closed) |
| 最後推送 | 2026-06-15 |
| 建立日期 | 2026-06-10 |
| Repo 大小 | 96.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/levy-street/world-of-claudecraft) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `n8ao` `obscenity` `pg` `postprocessing` `three` `ws` `@gltf-transform/cli` `@types/node` `@types/pg` `@types/three` `@types/ws` `esbuild` `puppeteer-core` `typescript` `vite`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 85
>     "HTML" : 8
>     "JavaScript" : 7
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Rubsey](https://github.com/Rubsey) | 139 |
> | [@sf-chris](https://github.com/sf-chris) | 34 |
> | [@FernandoX7](https://github.com/FernandoX7) | 33 |
> | [@gndk](https://github.com/gndk) | 26 |
> | [@maxpolaczuk](https://github.com/maxpolaczuk) | 12 |

**最新版本**：v0.5.0 — World of Claudecraft v0.5.0 (2026-06-14)

> [!info]- Release Notes
> # World of ClaudeCraft v0.5 Release Notes
> 
> Branch: `release/v0.5`
> Release head: `b1d9f28`
> Baseline: `v0.4.0`
> 
> ## Highlights
> 
> - Expands the **Ashen Coliseum** with arena polish, safer match cleanup, countdown/
> buff fixes, root diminishing, camera bounds, and realm-scoped leaderboard
> correctness.
> - Adds the first **fishing loop**: buy a Simple Fishing Pole, cast at fishable
> water, complete a cast bar, and catch early fishing loot.
> - Adds **Mogger**, a starter-zone rare elite inspired by classic MMO outdoor bosses,
> alongside new outdoor rares, richer loot tables, dungeon boss loot tuning, and group
> loot rolling.
> - Adds **party-visible target markers** and **personal quest corpse loot**, making
> group questing clearer and less frustrating.
> - Improves controls with **custom hover cursors**, optional **OSRS-style Mouse
> Camera**, optional click-to-move, and reduced pointer-lock spam.
> - Delivers major QoL across action bars, vendors, chat, social discovery, mobile
> controls, friendly targeting, and combat feel.
> - Hardens release safety with CI, auth rate-limit fixes, case-insensitive character-
> name uniqueness, autosave bounds, and admin account moderation tools.
> 
> ## Gameplay
> 
> ### Ashen Coliseum Arena
> 
> - Improves the 1v1 ranked arena introduced in v0.4.

## 社群與生態

**社群活躍度**：社群活躍，定期有更新和討論。
**連結**：[Discord](https://discord.gg/GjhnUsBtw)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-14 ~ 2026-06-14）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #237 from levy-street/fix/evade-stuck-on-obstacles

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#10](https://github.com/levy-street/world-of-claudecraft/issues/10) | Missing features | 1 | 4 |

## README 摘錄

> [!info]- 展開查看原文 README
> # World of Claudecraft — a WoW-Classic-style MMO
> 
> [Join the community Discord](https://discord.gg/GjhnUsBtw)
> 
> A vanilla-WoW-flavored micro-MMO you can host and play:
> 
> 1. **Play it online** — a real client/server game with accounts, persistent
>    characters in Postgres, and other players in the world with you.
> 2. **Play it offline** in your browser to jump straight into the world.
> 
> Both run the **same deterministic simulation core** (`src/sim/`), so the
> offline world behaves identically to what the authoritative multiplayer server
> runs for everyone online.
> 
> 
> ## Screenshots
> 
> | | |
> |:---:|:---:|
> | *Dusk at the Eastbrook campfire* | *Torch-lit elite pulls in the Hollow Crypt* |
> | *The restless dead at the ruined chapel* | *Outnumbered at the bandit camp* |
> | *Old Greyjaw, the rare spawn, run down on the north road* | *Gearing up at Smith Haldren's — tooltips, bags, coin* |
> 
> ---
> 
> 
> ## Host it (one command)
> 
> ```bash
> cp .env.example .env
> 
> # edit .env and set a long random POSTGRES_PASSWORD
> docker compose up -d --build     # postgres + game server, fully built
> 
> # open http://localhost:8787 — accounts, characters, the whole world
> ```
> 
> For **remote hosting**: put the compose stack on any VPS, set a real
> `POSTGRES_PASSWORD` in the environment, and front port 8787 with a TLS
> reverse proxy (Caddy makes this two lines — `your.domain { reverse_proxy
> localhost:8787 }`); WebSockets are proxied automatically and the client
> auto-selects `wss://` on https pages. Auth endpoints are rate-limited per IP;
> passwords are scrypt-hashed; tokens expire after 7 days. Never set
> `ALLOW_DEV_COMMANDS=1` in production (it enables level/teleport cheats used
> by the test bots).
> 
> 
> ## Develop online (hot reload)
> 
> ```bash
> npm install
> cp .env.example .env
> 
> # edit .env and set POSTGRES_PASSWORD and DATABASE_URL to the same password
> npm run db:up        # postgres 16 in docker (port 5433, volume-persisted)
> npm run server       # authoritative game server on :8787 (REST + WebSocket)
> npm run dev          # client dev server on :5173 (proxies /api and /ws)
> ```
> 
> Open http://localhost:5173 → **Play Online** → create an account → create a
> character → Enter World. Open a second browser/tab and log in again — you'll
> see each other in town. `Enter` opens chat.
> 
> - **Accounts**: scrypt-hashed passwords, 7-day bearer tokens (`auth_tokens`).
> - **Characters**: up to 10 per account; level/gear/bags/quests/position/money
>   persist as JSONB in Postgres — saved every 30 s, on logout, and on server
>   shutdown. Names are globally unique, letters only, classic style.
> - **The server is authoritative**: clients stream movement intent + commands
>   at 20 Hz; the server runs the world (one shared `Sim`) and sends
>   interest-scoped snapshots (~120 yd) plus per-player-routed events. All
>   combat math, loot rolls, quest credit and vendor transactions happen
>   server-side; the client is a renderer.
> - **Parties** (up to 5): right-click a player → *Invite to Party*. Party
>   frames on the left, members share tap rights, kill quest credit and split
>   XP with the real vanilla group bonuses (1.166/1.3/1.43 for 3/4/5). Party
>   chat with `/p message`. Blue member blips on the minimap.
> - **Trading**: right-click a player → *Trade*. Both sides stage items + money,
>   both must accept, and the swap is atomic and server-validated (quest items
>   are untradeable). Walking apart cancels.
> - **Duels**: right-click → *Challenge to a Duel*. 3-second countdown, fight
>   until one side hits 1 hp — nobody dies, the winner is announced zone-wide.
>   Running 60 yards away forfeits.
> - **The Ashen Coliseum** (1v1 ranked arena): press `G` (or the ⚔ button) to
>   open the arena panel and *Enter the Queue*. Matchmaking pairs you with the
>   nearest-rated challenger online, then teleports you both into a private,
>   torch-lit fighting pit. A 5-second countdown heals and resets both fighters
>   for a fair start; the bout ends when one yields at 1 hp (nobody dies). Wins
>   and losses move a persistent **Elo rating** (everyone starts at 1500), and
>   you return exactly where you queued. The panel shows your standing, the live
>   online ladder, and the all-time leaderboard (`GET /api/arena/leaderboard`).
> - **Multiplayer rules**: classic tap rights (first player to damage a mob owns
>   its loot/XP/quest credit — others get "You don't have permission to loot
>   that."), mobs retarget the next attacker when their victim dies (no free
>   resets), join/leave announcements, `/say`-style chat.
> 
> 
> ## The Hollow Crypt — 5-player elite instance
> 
> Brother Aldric's storyline continues past *The Restless Dead*: **Whispers
> Below** (find the Gravecaller's sigil at the ruined chapel) → **The Binding
> Rite** (gather Blessed Tallow from the kobold dig and Ghostly Essence from
> the restless dead) → **Into the Hollow** (*suggested players: 5*) — kill
> Morthen the Gravecaller at the bottom of the crypt beneath the chapel.
> 
> - The crypt door at the Fallen Chapel teleports your **party into its own
>   private instance copy** (6 slots; instances reset after 5 minutes empty).
> - Inside: torch-lit halls, paired **elite** trash packs (vanilla elite
>   scaling: ~2.3× health, ~1.5× damage, double XP), the miniboss Sexton
>   Marrow, and Morthen — a level-10 elite boss with a **Shadow Pulse** AoE
>   every 10 seconds. Dungeon trash does not respawn until the instance resets.
> - Rewards: rare (blue) weapons per class archetype, 1 gold, 1500 XP.
> - It is genuinely tuned for 5: our automated 5-bot raid (warrior, paladin,
>   priest, mage, hunter with focus-fire + healer AI) clears it in ~5 minutes
>   with ~10 deaths (`node scripts/crypt_raid.mjs`, needs ALLOW_DEV_COMMANDS=1).
> 
> ```
> docker compose ps          # eastbrook-db (postgres:16-alpine, healthcheck)
> node scripts/mp_integration.mjs   # 26-check API/WS/persistence suite
> node scripts/mp_browser.mjs       # two real browser clients see each other
> ```
> 
> 
> ## The Sunken Bastion & Gravewyrm Sanctum
> 
> The conspiracy doesn't end with Morthen. **The Sunken Bastion** (5-player,
> ~level 13, southeast Mirefen) holds Vael the Mistcaller — he summons waves of
> Drowned Thralls at 60% and 30% health. The finale is the **Gravewyrm
> Sanctum** (5-player, level 20, beneath Thornpeak): three chambers of elite
> boneguard and drakonid, Korgath the Bound (enrages below 30%), Grand
> Necromancer Velkhar (more add waves), and **Korzul the Gravewyrm** — epic
> weapons drop here, and the lead-up quest chain is soloable so nobody is
> locked out of the story.
> 
> 
> ## Play offline
> 
> ```bash
> npm run dev        # open http://localhost:5173 -> Play Offline
> ```
> 
> Name your character, pick any of the nine classes, and you're in **Eastbrook
> Vale** (levels 1-7): a market town ringed by six hubs — wolf runs north, boar
> meadows east, the Webwood west, Mirror Lake northwest, a kobold copper dig
> southwest, a ruined chapel with restless dead northeast, and Gorrak's bandit
> camp southeast. The road north climbs through a mountain pass into **Mirefen
> Marsh** (6-13, hub: Fenbridge) and on up to **Thornpeak Heights** (13-20,
> hub: Highwatch) — three zones, ~60 quests, and one storyline: the Gravecaller
> conspiracy, from the first restless bones outside Eastbrook to **Korzul the
> Gravewyrm** beneath the peaks. Each hub has vendors (including weapon- and
> armorsmiths selling honest white gear), a graveyard, its own music, and a
> zone map.
> 
> 
> ### Controls (classic layout)
> 
> | Input | Action |
> |---|---|
> | `W`/`S` | run / backpedal — `A`/`D` turn (strafe while right mouse held), `Q`/`E` strafe |
> | right-drag / left-drag | mouselook / orbit camera &nbsp;·&nbsp; wheel zooms · `Space` jumps |
> | `Tab` | cycle nearest enemies · left-click target · right-click attack/loot/talk |
> | `1`–`9`, `0`, `-`, `=` | action bar |
> | `F` | interact (loot corpse / pick up object / talk) |
> | `C` `P` `L` `M` `B` `G` | character · spellbook · quest log · world map · bags · arena (Ashen Coliseum) |
> | `V` / `R` / `Esc` | nameplates · autorun · close windows / clear target |
> 
> 

## 延伸閱讀

相關概念：[[微服務]] · [[容器化]] · [[遊戲開發]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Juwluuu--Subnautica-2-Release|Juwluuu/Subnautica-2-Release]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[SubamanojJ-2004--gta-5-mod-menu|SubamanojJ-2004/gta-5-mod-menu]] · [[emdash-cms--emdash|emdash-cms/emdash]] · [[pewdiepie-archdaemon--odysseus|pewdiepie-archdaemon/odysseus]] · [[ps5-linux--ps5-linux-loader|ps5-linux/ps5-linux-loader]]

[GitHub](https://github.com/levy-street/world-of-claudecraft)

## 相關收錄

> [!note]- 直接競品（同子分類：MMO）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "MMO" AND file.name != "levy-street--world-of-claudecraft"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "遊戲" AND file.name != "levy-street--world-of-claudecraft"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "levy-street--world-of-claudecraft" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W25" AND file.name != "levy-street--world-of-claudecraft"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["微服務","容器化","遊戲開發"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "levy-street--world-of-claudecraft" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/levy-street--world-of-claudecraft");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "levy-street--world-of-claudecraft" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "levy-street" AND file.name != "levy-street--world-of-claudecraft"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/levy-street--world-of-claudecraft");
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
> const me = dv.page("Repos/levy-street--world-of-claudecraft");
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
> const me = dv.page("Repos/levy-street--world-of-claudecraft");
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
> const me = dv.page("Repos/levy-street--world-of-claudecraft");
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
> const me = dv.page("Repos/levy-street--world-of-claudecraft");
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

> **2026-06-15** — 首次收錄
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

- [[2026-06-17|2026-06-17]] — 再次上榜，878 stars
- [[2026-06-16|2026-06-16]] — 再次上榜，795 stars
- [[2026-06-15|2026-06-15]] — 首次收錄，701 stars
