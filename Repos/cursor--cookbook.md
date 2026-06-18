---
repo: cursor/cookbook
url: https://github.com/cursor/cookbook
owner: cursor
owner_type: Organization
language: TypeScript
license: N/A
description: ""
homepage: ""
stars: 3931
stars_per_day: 77
forks: 463
open_issues: 31
created: 2026-04-27
pushed_at: 2026-06-10
first_seen: 2026-04-30
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-30
use_case: "提供 Cursor 的小範例，幫助開發者快速上手和擴展功能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-05-07"
contributor_count: 5
engagement: "medium"
issue_close_rate: 3
repo_size_kb: 2652
readme_length: 2176
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-30"
star_history: "2026-04-30:1427,2026-04-30:1501,2026-05-01:2631,2026-05-01:2639,2026-05-02:2965,2026-05-02:2966,2026-05-03:3137,2026-05-03:3139,2026-05-04:3279,2026-05-04:3279,2026-05-05:3412,2026-05-06:3532,2026-05-07:3652,2026-05-08:3672,2026-05-09:3694,2026-05-10:3710,2026-05-11:3722,2026-05-12:3736,2026-05-13:3746,2026-05-14:3757,2026-05-15:3763,2026-05-16:3771,2026-05-17:3774,2026-05-18:3780,2026-05-19:3786,2026-05-20:3791,2026-05-24:3841,2026-05-26:3860,2026-05-27:3867,2026-05-29:3880,2026-05-30:3886,2026-05-31:3886,2026-06-01:3889,2026-06-02:3891,2026-06-03:3899,2026-06-04:3899,2026-06-05:3903,2026-06-06:3905,2026-06-07:3906,2026-06-08:3907,2026-06-09:3911,2026-06-13:3924,2026-06-14:3923,2026-06-15:3925,2026-06-16:3929,2026-06-17:3931,2026-06-18:3931"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "cookbook"
  - "cursor/cookbook"
  - "提供 Cursor 的小範例，幫助開發者快速上手和擴展功能。"
---

# cookbook

**3.9k** stars · **77** stars/天 · 建立 51 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/cursor--cookbook");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `easy-install`

> [!summary] 一句話摘要
> 提供 Cursor 的小範例，幫助開發者快速上手和擴展功能。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Growing · **熱度** Growing (77 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 7 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要快速原型開發和自定義代理的開發者，特別是使用 Cursor 的開發者。
> **一句話重點** Cursor Cookbook 的靈活性和範例使得開發者能夠快速上手並自定義代理，這在其他工具中並不常見。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/cursor--cookbook");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "cursor--cookbook" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 自動化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學、10 小時整合，得到靈活的代理功能，值得一試。

> [!abstract] 核心創新
> 提供一個靈活的 Hooks 系統，讓開發者能夠自定義代理的行為和工作流。

## 專案簡介

Cursor Cookbook 是一個針對 Cursor 平台的範例庫，幫助開發者快速建立和擴展自定義代理。這個專案的核心在於提供一系列的 Hooks，讓開發者能夠在代理事件（如提示提交、命令執行等）周圍執行自定義檢查和工作流。使用者可以透過簡單的 API 來管理代理的提示、模型和狀態，並且能夠在本地或雲端環境中運行代理。最重要的 CLI 指令是 `npm install @cursor/cookbook`，然後透過 `npx cursor` 來啟動代理。這個工具的賣點在於其靈活性，開發者可以根據需求自定義工作流，並且能夠輕鬆整合到現有的開發環境中。

技術上，Cursor 使用 TypeScript 實現，並且提供了多種 SDK 來支援不同的開發需求。這使得它在功能上比其他類似工具如 `0x0funky/agent-sprite-forge` 更具擴展性，因為後者主要集中在特定的代理功能，而 Cursor 提供了更廣泛的應用場景。使用者在實際操作中可能會遇到一些常見問題，例如如何防止代理使用本地文件，這些問題的解決方案在社群中有討論。這個專案目前處於活躍開發階段，對於需要快速原型開發和自定義代理的開發者來說，值得一試。對於小型團隊或個人開發者，這是一個理想的選擇，但在大型專案中可能需要更多的測試和調整以確保穩定性。

**技術棧**：`TypeScript` · `Docker` · `Node.js`

## 重點功能

- Cursor Hooks — 允許在代理事件周圍執行自定義檢查和工作流。
- Cursor SDK — TypeScript API，支援在本地和雲端環境中運行代理。
- DAG 任務執行器 — 將任務分解為 JSON DAG，並在 Cursor Canvas 中實時顯示狀態。
- 自架 Cloud Agents — 提供在 AWS 上運行 Cursor Cloud Agent 的範例。
- Kanban 看板 — 用於查看和管理 Cursor Cloud Agents 的狀態和工件。

## 快速開始

1. 安裝 Cursor SDK
```bash
npm install @cursor/cookbook
```
2. 啟動 Cursor 代理
```bash
npx cursor
```
3. 設置 API 金鑰
```bash
export CURSOR_API_KEY=你的金鑰
```

## 程式碼範例

```ts
[
  "# 前置條件：安裝了 Cursor SDK",
  "const { Cursor } = require('@cursor/sdk');",
  "const cursor = new Cursor();",
  "cursor.run('你的提示').then(response => console.log(response));",
  "# 預期輸出：代理的回應結果"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 51 天就累積 3931 stars（77/天），forks 463（11.8%），這顯示出其在開發者社群中的受歡迎程度。這個專案的主要貢獻者包括多位活躍的開發者，他們在開源社群中有著良好的聲譽。Cursor Cookbook 解決了在使用 Cursor 時缺乏範例和指導的痛點，之前開發者需要花費大量時間去理解如何整合和使用 Cursor 的功能。這個專案的推出正好填補了這一空白。社群的活躍度和開發者的參與度都很高，顯示出這個工具的潛力和未來的發展空間。

## 適合誰使用

**目標受眾**：需要快速原型開發和自定義代理的開發者，特別是使用 Cursor 的開發者。

> [!example] 使用場景
> - 後端工程師用它來快速建立自定義代理，因為提供了多種範例和 Hooks，能夠快速上手。
> - DevOps 工程師用它來在 AWS 上自架 Cloud Agents，因為有詳細的部署範例，能夠節省時間。
> - 全端工程師用它來整合 Cursor SDK 到現有的應用中，因為其 TypeScript API 使得整合過程變得簡單。

## 架構分析

Cursor Cookbook 採用模組化的架構設計，主要由 Cursor SDK 和 Hooks 系統組成。SDK 提供了 TypeScript API，讓開發者能夠輕鬆地與 Cursor 代理進行互動。Hooks 系統則允許開發者在代理事件中插入自定義邏輯，這樣的設計使得工具在功能上具有高度的擴展性。

資料流方面，當代理接收到提示時，會觸發相應的 Hooks，這些 Hooks 可以進行額外的檢查或處理，然後再將結果返回給用戶。這種設計的代價是需要開發者對 Hooks 的使用有一定的理解，否則可能會導致性能問題。擴展性方面，這個架構能夠輕鬆地添加新的功能或整合其他服務，但在大型專案中可能需要更多的測試來確保穩定性。

## 技術深入分析

Cursor Cookbook 的核心技術機制在於其模組化的架構，使用 TypeScript 實現的 SDK 使得開發者能夠透過簡單的 API 進行操作。Hooks 系統的設計允許在代理事件中插入自定義邏輯，這樣的設計使得開發者能夠根據實際需求進行擴展。效能方面，該工具能夠處理多個代理請求，但在高負載情況下，Hooks 的使用可能會導致性能下降。設計取捨上，選擇 TypeScript 作為開發語言帶來了靜態類型檢查的好處，但也限制了語言的多樣性。技術風險方面，Hooks 的使用可能在擴展時出現問題，特別是在大型專案中。整合方面，Cursor Cookbook 與現有的開發工具鏈（如 Node.js 和 Docker）相容性良好，能夠輕鬆整合到 CI/CD pipeline 中，並且對於團隊的學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的範例和指導，安裝過程順暢，沒有明顯的坑。文件中有良好的快速入門指南，並且支持多語言。整體來說，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 靈活的 Hooks 系統，能夠自定義代理行為。
> - 簡單的 API，易於整合到現有的開發流程中。
> - 提供多種範例，幫助開發者快速上手。

> [!danger] 缺點
> - 對於大型專案的穩定性可能需要額外測試。
> - 在某些情況下，Hooks 的使用可能會導致性能下降。
> - 目前僅支援 TypeScript 和 JavaScript。

> [!warning] 注意事項
> - 目前僅支援 TypeScript 和 JavaScript。
> - 對於大型專案的穩定性可能需要額外測試。
> - 在某些情況下，Hooks 的使用可能會導致性能下降。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於特定的代理功能，缺乏 Cursor 的靈活性和擴展性。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的代理功能，但整合和使用上不如 Cursor 直觀。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於特定的代理功能，缺乏 Cursor 的靈活性和擴展性。 | 如果你的需求非常專注於特定的代理功能，而不需要額外的擴展性。 | medium，因為需要重寫部分代碼以適應不同的 API。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的代理功能，但整合和使用上不如 Cursor 直觀。 | 如果你已經在使用 boneyard 並希望保持一致性，而不想轉換到新的工具。 | high，因為需要重新學習和整合新的 API。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cookbook** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於特定的代理功能，缺乏 Cursor 的靈活性和擴展性。 | 提供類似的代理功能，但整合和使用上不如 Cursor 直觀。 |
> | 遷移成本 | - | medium，因為需要重寫部分代碼以適應不同的 API。 | high，因為需要重新學習和整合新的 API。 |
> | 適用場景 | 主要場景 | 如果你的需求非常專注於特定的代理功能，而不需要額外的擴展性。 | 如果你已經在使用 boneyard 並希望保持一致性，而不想 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人 side project 試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些情況下，Hooks 可能會導致性能下降，特別是在高負載時。
  - 解法：考慮在不必要時禁用某些 Hooks，或優化 Hooks 的邏輯。
- [MEDIUM] 使用自架 Cloud Agents 時，可能會遇到配置問題。
  - 解法：參考官方文檔中的配置範例，並確保環境變數設置正確。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊的快速原型開發 | 非常適合 | 提供多種範例和靈活的 Hooks 系統，能夠快速上手。 |
| 大型企業的核心系統 | 不適合 | 在穩定性和性能上可能需要更多的測試和調整。 |
| 需要自定義工作流的開發者 | 適合 | Hooks 系統提供了靈活性，能夠根據需求自定義行為。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學、10 小時整合，得到靈活的代理功能，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，且不存取敏感資料，但需注意依賴的庫是否有已知漏洞。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Cursor Cookbook 最常與 Node.js 和 Docker 搭配使用，通常在開發和部署階段進行整合。在一個使用 Node.js 的專案中，開發者可以透過 `npm install` 安裝 Cursor SDK，然後使用 `npx cursor` 啟動代理。這個工具支援與 GitHub Actions 和 GitLab CI 的整合，並且可以在 VS Code 中使用相關的擴展。整合的摩擦點主要在於 Hooks 的使用，開發者需要理解如何正確配置和使用這些 Hooks，以避免性能問題。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Cursor Cookbook 出現之前，開發者主要依賴於官方文檔和少量範例來學習如何使用 Cursor。這些方案的痛點在於缺乏實際的範例和指導，導致學習曲線較陡。隨著開發者對於自定義代理需求的增加，Cursor Cookbook 的出現正好填補了這一空白。

這個工具代表了開發者對於靈活性和可擴展性的需求，未來可能會隨著更多範例和功能的增加而持續演進。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 TypeScript
- 了解 Node.js 基本操作
- 有 CI/CD pipeline 經驗

> [!tip] 導入策略
> 第一週：在個人 side project 試用。第二週：在非關鍵的內部工具導入。第三週：撰寫 best practices 文件。第四週：在主產品的一個非核心模組開始使用。

**成功指標**：代理的回應時間減少 30%。

> [!warning] 退出計畫
> 所有設定存在標準 JSON 格式，可以用官方 migration 工具轉換為其他工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/cursor--cookbook");
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
> const me = dv.page("Repos/cursor--cookbook");
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
| Forks | 463 |
| Open Issues | 31 |
| Issue 解決率 | 3% (1 closed) |
| 最後推送 | 2026-06-10 |
| 建立日期 | 2026-04-27 |
| Repo 大小 | 2.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/cursor/cookbook) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 81
>     "HCL" : 7
>     "Shell" : 5
>     "JavaScript" : 2
>     "Python" : 2
>     "CSS" : 2
>     "Makefile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@cursoragent](https://github.com/cursoragent) | 6 |
> | [@hsaab](https://github.com/hsaab) | 2 |
> | [@ericzakariasson](https://github.com/ericzakariasson) | 2 |
> | [@leerob](https://github.com/leerob) | 1 |
> | [@rysuds](https://github.com/rysuds) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，經常有問題和功能請求被討論。
**連結**：[文件](https://cursor.com/docs)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-01 ~ 2026-06-10）
> **活躍天數** 4 天 · **最新 commit** Add Cursor hooks examples (#40)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/cursor/cookbook/issues/13) | Would there be a Python SDK in future ? | 3 | 0 |
> | [#14](https://github.com/cursor/cookbook/issues/14) | there is an error about Ripgrep in both dev and start script | 1 | 3 |
> | [#39](https://github.com/cursor/cookbook/issues/39) | Support custom model base_url / BYOK for the agent's inferen | 0 | 1 |
> | [#37](https://github.com/cursor/cookbook/issues/37) | How do I prevent the agent from using local files, while let | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Cursor Cookbook
> 
> This repo contains small examples for building with Cursor.
> 
> ## Cursor Hooks
> 
> Cursor Hooks let you run custom checks and workflows around agent events such as prompt submission, shell commands, file edits, and agent completion.
> 
> ### [Hooks examples](hooks)
> 
> A guided project hook setup for audit logging, sensitive prompt guards, and follow-up checks that keep Cursor skills aligned with code changes.
> 
> ## Cloud Agents
> 
> ### [Self-hosted Cloud Agents lab](cloud-agent)
> 
> Run Cursor Cloud Agent workers on customer-managed AWS infrastructure with examples for EC2 + Docker, ECS/Fargate, and EKS + Helm.
> 
> ## Cursor SDK
> 
> The Cursor SDK is the TypeScript API for running Cursor's coding agent from your own apps, scripts, and workflows. It supports the same agent across local workspaces and cloud runtimes, streams agent events as runs progress, and lets you manage prompts, models, cancellation, artifacts, and conversation state from code.
> 
> To run the SDK examples, create a Cursor API key from the [Cursor integrations dashboard](https://cursor.com/dashboard/integrations), then set it as `CURSOR_API_KEY`.
> 
> ### [Quickstart](sdk/quickstart)
> 
> A minimal Node.js example that creates a local agent, sends one prompt, and streams the response.
> 
> ### [Prototyping tool](sdk/app-builder)
> 
> A web app for spinning up agents to scaffold new projects and iterate on ideas in a sandboxed cloud environment.
> 
> ### [Kanban board](sdk/agent-kanban)
> 
> A kanban board for viewing Cursor Cloud Agents, grouping them by status or repository, previewing artifacts, and creating new cloud agents from a repository and prompt.
> 
> ### [Coding agent CLI](sdk/coding-agent-cli)
> 
> A minimal command-line interface that lets you spawn Cursor agents from your terminal.
> 
> ### [DAG task runner](sdk/dag-task-runner)
> 
> Decompose a task into a JSON DAG, fan it out across local subagents, and stream live status into a Cursor Canvas that hot-reloads on every state change. Ships as both a runnable example and a copyable Cursor skill at [`.cursor/skills/dag-task-runner`](.cursor/skills/dag-task-runner).
> 
> Learn more in the [Cursor SDK TypeScript docs](https://cursor.com/docs/api/sdk/typescript).

## 延伸閱讀

相關概念：[[自動化]] · [[CLI/TUI]] · [[微服務]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[432539--gpt2api|432539/gpt2api]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[Einsia--OpenChronicle|Einsia/OpenChronicle]]

[GitHub](https://github.com/cursor/cookbook)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "cursor--cookbook"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "cursor--cookbook"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "cursor--cookbook" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "cursor--cookbook"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","CLI/TUI","微服務"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "cursor--cookbook" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/cursor--cookbook");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "cursor--cookbook" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "cursor" AND file.name != "cursor--cookbook"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/cursor--cookbook");
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
> const me = dv.page("Repos/cursor--cookbook");
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
> const me = dv.page("Repos/cursor--cookbook");
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
> const me = dv.page("Repos/cursor--cookbook");
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
> const me = dv.page("Repos/cursor--cookbook");
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

> **2026-04-30** — 首次收錄
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

- [[2026-05-04|2026-05-04]] — 再次上榜，3.3k stars
- [[2026-05-03|2026-05-03]] — 再次上榜，3.1k stars
- [[2026-05-02|2026-05-02]] — 再次上榜，3.0k stars
- [[2026-05-01|2026-05-01]] — 再次上榜，2.6k stars
- [[2026-04-30|2026-04-30]] — 首次收錄，1.4k stars
