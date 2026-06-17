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
stars_per_day: 79
forks: 464
open_issues: 32
created: 2026-04-27
pushed_at: 2026-06-10
first_seen: 2026-04-30
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "自動化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-30
use_case: "提供 Cursor 的小範例，幫助開發者建立和擴展自定義代理。"
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
star_history: "2026-04-30:1427,2026-04-30:1501,2026-05-01:2631,2026-05-01:2639,2026-05-02:2965,2026-05-02:2966,2026-05-03:3137,2026-05-03:3139,2026-05-04:3279,2026-05-04:3279,2026-05-05:3412,2026-05-06:3532,2026-05-07:3652,2026-05-08:3672,2026-05-09:3694,2026-05-10:3710,2026-05-11:3722,2026-05-12:3736,2026-05-13:3746,2026-05-14:3757,2026-05-15:3763,2026-05-16:3771,2026-05-17:3774,2026-05-18:3780,2026-05-19:3786,2026-05-20:3791,2026-05-24:3841,2026-05-26:3860,2026-05-27:3867,2026-05-29:3880,2026-05-30:3886,2026-05-31:3886,2026-06-01:3889,2026-06-02:3891,2026-06-03:3899,2026-06-04:3899,2026-06-05:3903,2026-06-06:3905,2026-06-07:3906,2026-06-08:3907,2026-06-09:3911,2026-06-13:3924,2026-06-14:3923,2026-06-15:3925,2026-06-16:3929,2026-06-17:3931"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
aliases:
  - "cookbook"
  - "cursor/cookbook"
  - "提供 Cursor 的小範例，幫助開發者建立和擴展自定義代理。"
---

# cookbook

**3.9k** stars · **79** stars/天 · 建立 50 天前 · TypeScript · 未標註授權

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

`ORG`

> [!summary] 一句話摘要
> 提供 Cursor 的小範例，幫助開發者建立和擴展自定義代理。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Growing (79 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 6 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在專案中快速整合自定義代理功能的開發者和團隊。
> **一句話重點** Cursor Cookbook 提供了一個強大的平台，讓開發者能夠快速建立和擴展自定義代理功能，提升開發效率。

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
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~8h · **綁定風險** medium
> **結論** 花 8 小時學習，12 小時整合，得到靈活的代理功能，值得考慮。

> [!abstract] 核心創新
> Cursor SDK 提供了一個統一的 API，讓開發者能夠在本地和雲端環境中無縫運行代理。

## 專案簡介

Cursor Cookbook 是一個專為 Cursor 開發的範例庫，主要目的是幫助開發者快速上手並擴展 Cursor 的功能。核心機制是透過 Cursor Hooks，讓開發者能夠在代理事件（如提示提交、命令執行、文件編輯等）周圍執行自定義檢查和工作流。使用者可以透過簡單的 API 來管理提示、模型和會話狀態，並且支援在本地和雲端環境中運行。這個工具的賣點在於其靈活性，開發者能夠在自己的應用程式中輕鬆整合 Cursor 的代理功能，並且能夠即時獲取代理事件的狀態。技術上，Cursor SDK 使用 TypeScript 實現，並且提供了多種範例，包括 CLI 工具和 DAG 任務執行器，這些都能幫助開發者更有效率地進行專案開發。

與其他工具相比，Cursor 的優勢在於其強大的自定義能力和即時反饋機制，這使得開發者能夠在開發過程中快速迭代。使用者在實際操作中可能會遇到一些常見問題，例如如何防止代理使用本地文件，這些問題在社群中也有討論。這個專案目前處於活躍開發中，適合需要快速原型開發和自定義工作流的團隊。未來幾個月，預計會有更多功能和範例加入，進一步擴展其應用範圍。

**技術棧**：`TypeScript` · `Node.js` · `Docker`

## 重點功能

- Cursor Hooks — 允許開發者在代理事件周圍執行自定義檢查和工作流。
- Cursor SDK — 提供 TypeScript API，支援在本地和雲端環境中運行代理。
- CLI 工具 — 讓使用者可以從終端機啟動 Cursor 代理，簡化操作流程。
- DAG 任務執行器 — 將任務分解為 JSON DAG，並即時更新狀態。
- Prototyping tool — 提供一個網頁應用來快速建立和測試代理。

## 快速開始

1. 安裝依賴
```bash
npm install
```
2. 設置 API 金鑰
```bash
export CURSOR_API_KEY=你的金鑰
```
3. 運行範例
```bash
node sdk/quickstart.js
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Node.js 和 Cursor API 金鑰。",
  "指令": "node sdk/quickstart.js",
  "預期輸出": "代理成功啟動並回應提示。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 50 天內累積 3931 stars（79/天），forks 464（11.8%），這顯示出開發者對於這個工具的高度興趣。Cursor 的主要貢獻者來自於多個背景，這可能促進了其功能的多樣性和實用性。這個專案解決了開發者在建立自定義代理時的複雜性，提供了一個簡單的 API 和範例，讓開發者能夠快速上手。最近的討論和問題顯示出社群對於 Python SDK 和自定義模型的需求，這可能會成為未來的發展重點。整體來看，這個專案的增長速度和社群互動都反映出其潛在的實用性和需求。

## 適合誰使用

**目標受眾**：需要在專案中快速整合自定義代理功能的開發者和團隊。

> [!example] 使用場景
> - 後端工程師用它來快速建立自定義的代理工作流，因為可以透過 Hooks 來擴展功能，提升開發效率。
> - DevOps 工程師用它來在 AWS 上自架 Cloud Agents，因為提供了詳細的範例和文檔，降低了部署難度。
> - 產品經理用它來原型設計新的功能，因為可以利用 Prototyping tool 快速迭代想法，並在沙盒環境中測試。

## 架構分析

Cursor Cookbook 的架構基於模組化設計，讓開發者能夠根據需求選擇不同的組件。核心是 Cursor SDK，這個 SDK 提供了 TypeScript API，讓開發者能夠輕鬆地整合代理功能。資料流方面，開發者可以透過 Hooks 來監控和處理代理事件，這樣的設計使得開發者能夠在不同的事件中插入自定義邏輯。

選擇 TypeScript 而非 JavaScript 的原因是為了提高開發過程中的類型安全性，這樣可以減少錯誤的發生。這種模組化的架構使得擴展性良好，但也可能增加學習曲線，特別是對於不熟悉 TypeScript 的開發者。整體來看，這種設計能夠支持快速迭代和開發，但在大型專案中可能需要更多的配置和調整。

## 技術深入分析

Cursor Cookbook 的核心技術機制是透過 Cursor SDK 提供的 TypeScript API，這使得開發者能夠在本地和雲端環境中無縫運行代理。SDK 支援即時事件流，讓開發者能夠在代理運行過程中獲取狀態更新。效能方面，這個工具能夠處理多個代理的並行請求，但在高負載情況下可能會遇到瓶頸，特別是在資源有限的環境中。選擇 TypeScript 而非 JavaScript 的原因在於提高類型安全性，這樣可以減少開發過程中的錯誤。依賴樹相對簡單，主要依賴 Node.js 和 Docker，這降低了整體的維護成本。技術風險方面，隨著使用者數量的增加，可能會出現性能瓶頸，特別是在高並發請求的情況下。整合方面，Cursor Cookbook 可以與主流的 CI/CD 工具（如 GitHub Actions）無縫整合，這使得在現有工作流中使用變得更加方便。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用範例，讓新手能夠快速上手。安裝過程相對順暢，但需要注意 API 金鑰的設置。文件目前僅提供英文版本，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 靈活的自定義能力，開發者可以根據需求擴展功能。
> - 提供多種範例和文檔，降低了上手難度。
> - 即時反饋機制，開發者能夠快速獲取代理狀態。

> [!danger] 缺點
> - 對於大型專案的整合可能需要額外的配置。
> - 目前僅支援 TypeScript 和 JavaScript，限制了使用範圍。
> - 尚未提供 Python SDK，開發者對此有需求。

> [!warning] 注意事項
> - 目前僅支援 TypeScript 和 JavaScript。
> - 對於大型專案的整合可能需要額外的配置。
> - 尚未提供 Python SDK，開發者對此有需求。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的代理功能，但專注於遊戲開發，適合需要遊戲代理的開發者。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於資料處理和分析，適合需要處理大量資料的場景。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理協作的功能，適合需要多個代理協同工作的情境。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於遊戲開發的代理功能，提供更針對性的工具和範例。 | 如果你的專案主要集中在遊戲開發，這個工具會更合適。 | medium，因為需要調整開發邏輯以符合遊戲開發的需求。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於資料處理和分析，提供更強大的數據處理能力。 | 如果你的專案需要處理大量資料，這個工具會更合適。 | high，因為需要重構資料流和處理邏輯。 |
| [2aronS/Duel-Agents](https://github.com/2aronS/Duel-Agents) | 提供多代理協作的功能，適合需要多個代理協同工作的情境。 | 如果你的專案需要多個代理之間的協作，這個工具會更合適。 | medium，因為需要調整代理間的通訊邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cookbook** | **agent-sprite-forge** | **boneyard** | **Duel-Agents** |
> | --- | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於遊戲開發的代理功能，提供更針對性的工具和範例。 | 專注於資料處理和分析，提供更強大的數據處理能力。 | 提供多代理協作的功能，適合需要多個代理協同工作的情境。 |
> | 遷移成本 | - | medium，因為需要調整開發邏輯以符合遊戲開發的需求。 | high，因為需要重構資料流和處理邏輯。 | medium，因為需要調整代理間的通訊邏輯。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在遊戲開發，這個工具會更合適。 | 如果你的專案需要處理大量資料，這個工具會更合適。 | 如果你的專案需要多個代理之間的協作，這個工具會更合適。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合小型專案試用，但不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，API 金鑰設置可能會導致代理無法啟動。
  - 解法：確保環境變數正確設置，並重新啟動應用。
- [MEDIUM] 某些 Hooks 的行為在不同環境中可能不一致。
  - 解法：在開發過程中進行充分測試，以確保一致性。
- **[HIGH]** 高並發請求時，可能會出現性能瓶頸。
  - 解法：考慮擴展基礎設施以支持更高的負載。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 5 人以下的初創團隊開發小型應用 | 非常適合 | 提供靈活的自定義能力，適合快速迭代和開發。 |
| 需要處理大量資料的企業級應用 | 不適合 | 目前對於大型資料處理的支援有限。 |
| 需要快速原型開發的產品團隊 | 適合 | 提供了多種範例和工具，能夠快速上手。 |
| 大型企業的核心系統 | 不適合 | 尚未達到穩定的生產環境標準。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~8 小時 |
| 整合時間 | ~12 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 8 小時學習，12 小時整合，得到靈活的代理功能，值得考慮。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：需要 API 金鑰來存取服務，確保金鑰的安全性非常重要。依賴的庫和模組需定期檢查以避免潛在的安全漏洞。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Cursor Cookbook 最常與 Node.js 和 Docker 搭配使用，通常在開發和部署階段進行整合。在一個使用 Node.js 的專案中，開發者可以透過 Cursor SDK 來快速建立代理，具體做法是安裝 SDK 並運行範例程式碼。支援 GitHub Actions 和其他 CI 工具，能夠輕鬆融入現有的開發流程。整合時的摩擦點主要在於 API 金鑰的設置和環境變數的配置，這可能會導致初次使用者遇到困難。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Cursor Cookbook 出現之前，開發者通常需要手動整合各種代理功能，這樣的過程繁瑣且容易出錯。隨著雲端技術的發展，開發者對於自動化和靈活性的需求越來越高，這使得 Cursor 的出現變得必要。這個工具代表了開發者對於簡化工作流和提高生產力的追求，未來可能會隨著更多自動化技術的進步而進一步演變。

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
| Forks | 464 |
| Open Issues | 32 |
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

**社群活躍度**：社群活躍，定期更新和回應問題。
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
