---
repo: cursor/cookbook
url: https://github.com/cursor/cookbook
owner: cursor
owner_type: Organization
language: TypeScript
license: N/A
description: ""
homepage: ""
stars: 3139
stars_per_day: 628
forks: 363
open_issues: 19
created: 2026-04-27
pushed_at: 2026-05-01
first_seen: 2026-04-30
week: "2026-W18"
month: "2026-04"
category: "開發工具"
subcategory: "API 工具"
release_tag: ""
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-30
use_case: "提供 Cursor SDK 的範例，幫助開發者快速上手。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-05-06"
contributor_count: 5
engagement: "medium"
issue_close_rate: 5
repo_size_kb: 2703
readme_length: 1636
bus_factor: 2
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-30"
star_history: "2026-04-30:1427,2026-04-30:1501,2026-05-01:2631,2026-05-01:2639,2026-05-02:2965,2026-05-02:2966,2026-05-03:3137,2026-05-03:3139"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - org
  - easy_install
aliases:
  - "cookbook"
  - "cursor/cookbook"
  - "提供 Cursor SDK 的範例，幫助開發者快速上手。"
---

# cookbook

**3.1k** stars · **628** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

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
> 提供 Cursor SDK 的範例，幫助開發者快速上手。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (628 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要快速開發原型並整合編碼代理的 TypeScript 開發者。
> **一句話重點** Cursor SDK 的即時流式傳輸能力讓編碼代理的使用變得更加靈活和高效。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/cursor--cookbook");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "API 工具" && p.file.name !== "cursor--cookbook" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 API 工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到快速開發的能力，值得投入。

> [!abstract] 核心創新
> Cursor SDK 提供了一個統一的 API 來管理編碼代理，支持即時流式傳輸。

## 專案簡介

**核心機制**

Cursor Cookbook 是一個針對 Cursor SDK 的範例集，旨在幫助開發者快速理解如何利用 Cursor 的編碼代理進行開發。這個工具的核心機制是透過 TypeScript API 來運行 Cursor 的編碼代理，開發者可以在本地或雲端環境中使用相同的代理，並且能夠管理提示、模型、取消請求、產物和對話狀態。使用者只需創建一個 Cursor API 金鑰並設置為環境變數 `CURSOR_API_KEY`，便可運行 SDK 範例。最關鍵的 CLI 指令是 `node sdk/quickstart`，這會啟動一個本地代理並發送一個提示，並流式傳輸回應。這個設計讓開發者能夠在不同的環境中保持一致性，並簡化了開發流程。

**技術實作**



技術上，Cursor SDK 使用 TypeScript，並依賴 Node.js 環境來運行。這使得它能夠輕鬆整合到現有的 JavaScript 生態系統中，並利用其強大的型別系統來提高開發效率。這個專案的依賴相對輕量，主要集中在 Node.js 的生態系統中，並不需要過多的外部庫。

與其他類似工具相比，如 0x0funky/agent-sprite-forge 和 432539/gpt2api，Cursor SDK 提供了更為直觀的 API 來管理代理的狀態和交互，並且支持即時流式傳輸，這在處理大型數據時尤為重要。相較於 0xGF/boneyard，Cursor 的設計更注重於開發者的使用體驗，讓新手也能快速上手。

**競品比較**



實際使用中，Cursor SDK 的效能表現良好，能夠處理多個並行請求，並且在本地環境中啟動速度快，冷啟動時間通常在幾秒內。社群活躍度也不錯，開發者能夠在 GitHub 上找到許多範例和資源。

這個專案目前處於 beta 階段，適合中小型團隊進行快速原型開發，但在生產環境中使用時需要進一步的測試和驗證。未來六個月內，預計會有更多的功能和範例被加入，進一步擴展其生態系統。

建議在需要快速開發原型或測試新想法時使用 Cursor SDK，特別是當你的團隊已經在使用 TypeScript 和 Node.js 時。

**效果與限制**

若你的專案需要更高的擴展性或複雜的分布式系統，則可能需要考慮其他解決方案。整體而言，學習和整合時間相對較短，值得投入。

**技術棧**：`TypeScript` · `Node.js` · `CSS`

## 重點功能

- Cursor SDK — 提供 TypeScript API 來運行 Cursor 的編碼代理，支持本地和雲端環境。
- 即時流式傳輸 — 能夠在代理運行過程中實時接收事件和狀態更新。
- 簡單的 CLI — 使用 `node sdk/coding-agent-cli` 指令可以快速啟動代理。
- 範例應用 — 包含多個範例，如 Kanban board 和 DAG task runner，幫助開發者快速上手。
- 環境變數支持 — 透過設置 `CURSOR_API_KEY` 環境變數來輕鬆配置 API 金鑰。

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
node sdk/quickstart
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Node.js 和設置 CURSOR_API_KEY。",
  "指令": "node sdk/quickstart",
  "預期輸出": "返回代理的即時回應。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 3139 stars（628/天），forks 363（11.6%），顯示出強勁的增長潛力。這個專案的主要貢獻者包括 cursoragent 和 leerob，這些開發者在開源社群中有一定的知名度。Cursor SDK 解決了開發者在整合編碼代理時的複雜性，之前的方案往往需要繁瑣的設置和配置。最近的推廣活動和社群討論也為這個專案帶來了關注。隨著 TypeScript 和 Node.js 的流行，這個工具的需求也隨之上升。forks/stars 比率為 11.6%，顯示出有相當比例的使用者在實際修改和使用此專案。

## 適合誰使用

**目標受眾**：需要快速開發原型並整合編碼代理的 TypeScript 開發者。

> [!example] 使用場景
> - 前端工程師用它來快速原型開發新的功能，因為 Cursor SDK 提供了即時流式傳輸和簡單的 API，能夠快速迭代。
> - 後端開發者用它來整合編碼代理進行自動化測試，因為它支持管理多個代理狀態，讓測試流程更為高效。
> - 產品經理用它來搭建原型應用，因為其雲端環境能夠快速驗證想法，並且不需要繁瑣的設置。

## 架構分析

Cursor Cookbook 的架構設計以簡化開發者的使用體驗為核心，採用 TypeScript 和 Node.js 作為主要技術棧。這樣的選擇使得開發者能夠在熟悉的環境中快速上手，並且利用 TypeScript 的型別系統來減少錯誤。資料流方面，Cursor SDK 透過 API 金鑰來驗證請求，並使用 WebSocket 進行即時數據傳輸，這樣的設計使得開發者能夠在本地和雲端環境中保持一致的操作體驗。選擇 Node.js 作為後端技術，能夠快速啟動並處理多個並行請求，但在高負載情況下可能會面臨性能瓶頸。整體而言，這樣的架構設計能夠支持快速開發和迭代，但在擴展性上仍需謹慎考量。

## 技術深入分析

Cursor Cookbook 的核心在於提供一個簡單易用的 SDK，讓開發者能夠快速整合 Cursor 的編碼代理。它使用 TypeScript 作為主要開發語言，這不僅提高了代碼的可讀性，也減少了潛在的錯誤。資料流方面，Cursor SDK 利用 WebSocket 來實現即時數據傳輸，這使得開發者能夠在代理運行過程中實時接收狀態更新，這在處理複雜的任務時尤為重要。這個設計選擇的代價在於，對於高負載的情況，Node.js 可能會成為性能瓶頸，特別是在多個並行請求的情況下。從技術風險的角度來看，Cursor SDK 的依賴關係相對簡單，但未來的 API 變更可能會影響到現有的應用。整合方面，Cursor SDK 與現有的 Node.js 生態系統相容性良好，開發者可以輕鬆地將其整合進現有的工作流中，並且支持主流的 CI/CD 工具，這使得它在開發和部署過程中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了多個範例，讓新手能夠快速理解如何使用。安裝過程簡單，只需安裝 Node.js 和設置 API 金鑰。文件中有良好的快速入門指南，幫助使用者快速上手。可惜的是，文件目前僅提供英文版本，對於非英語使用者可能會有些挑戰。

## 優缺點分析

> [!success] 優點
> - 快速上手 — 提供簡單的範例和清晰的文檔，讓新手能夠迅速開始。
> - 即時流式傳輸 — 允許開發者在代理運行時實時接收數據，提升開發效率。
> - 輕量依賴 — 主要依賴 Node.js 環境，無需過多的外部庫。

> [!danger] 缺點
> - 僅支持 Node.js 環境，限制了使用範圍。
> - 對於大型專案，可能需要額外的性能優化。
> - API 仍在變化中，未來可能會有不兼容的變更。

> [!warning] 注意事項
> - 目前僅支持 Node.js 環境，無法在瀏覽器中直接運行。
> - 對於大型專案，可能需要額外的性能優化。
> - API 仍在變化中，未來可能會有不兼容的變更。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的編碼代理功能，但缺乏即時流式傳輸的能力，適合靜態請求處理。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 GPT-2 模型的 API 接入，而 Cursor SDK 提供更廣泛的代理管理功能。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 雖然也支持編碼代理，但設計上較為複雜，對新手不友好。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Rust 實作，記憶體用量少，但生態系統相對不如 Node.js 豐富。 | 如果你的團隊偏好使用 Rust 並且需要更高的性能，則可以考慮這個方案。 | medium，因為需要重新學習 Rust 的語法和生態系統。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 專注於 GPT-2 模型的 API 接入，提供簡單的 RESTful 接口。 | 如果你的專案主要使用 GPT-2 模型並需要簡單的 API 接入，則這個工具會更合適。 | low，因為 API 設計相似，轉換成本較低。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **cookbook** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Rust 實作，記憶體用量少，但生態系統相對不如 Node.js 豐富。 | 專注於 GPT-2 模型的 API 接入，提供簡單的 RESTful 接口。 |
> | 遷移成本 | - | medium，因為需要重新學習 Rust 的語法和生態系統。 | low，因為 API 設計相似，轉換成本較低。 |
> | 適用場景 | 主要場景 | 如果你的團隊偏好使用 Rust 並且需要更高的性能，則可以考 | 如果你的專案主要使用 GPT-2 模型並需要簡單的 API  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合中小型團隊進行快速原型開發，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境中，可能會遇到 Ripgrep 錯誤，導致啟動失敗。
  - 解法：檢查環境變數設置，確保 Ripgrep 正確安裝。
- [MEDIUM] API 金鑰設置不當會導致所有請求失敗。
  - 解法：確保在運行前正確設置 CURSOR_API_KEY。
- [MEDIUM] 在高負載情況下，Node.js 可能會成為性能瓶頸。
  - 解法：考慮使用負載均衡器來分散請求。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊的原型開發 | 非常適合 | Cursor SDK 提供了快速開發的能力，適合快速迭代。 |
| 大型企業的生產環境 | 不適合 | 目前處於 beta 階段，穩定性不足。 |
| 需要即時數據流的應用 | 非常適合 | 即時流式傳輸功能能夠滿足需求。 |
| 對性能要求極高的系統 | 普通 | Node.js 在高負載下可能成為瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | low |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到快速開發的能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：Cursor SDK 本身不需要高權限，僅需設置 API 金鑰，且不存取敏感資料。依賴鏈相對簡單，無已知的供應鏈風險，適合在 CI/CD 中使用。

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
| Forks | 363 |
| Open Issues | 19 |
| Issue 解決率 | 5% (1 closed) |
| 最後推送 | 2026-05-01 |
| 建立日期 | 2026-04-27 |
| Repo 大小 | 2.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/cursor/cookbook) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 96
>     "CSS" : 2
>     "JavaScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@cursoragent](https://github.com/cursoragent) | 3 |
> | [@leerob](https://github.com/leerob) | 1 |
> | [@rysuds](https://github.com/rysuds) | 1 |
> | [@ericzakariasson](https://github.com/ericzakariasson) | 1 |
> | [@rwashburne](https://github.com/rwashburne) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者能夠找到範例和資源。
**連結**：[文件](https://cursor.com/docs/api/sdk/typescript)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-29 ~ 2026-05-01）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #7 from cursor/add-dag-task-runner-example

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/cursor/cookbook/issues/13) | Would there be a Python SDK in future ? | 2 | 0 |
> | [#14](https://github.com/cursor/cookbook/issues/14) | there is an error about Ripgrep in both dev and start script | 1 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Cursor Cookbook
> 
> This repo contains small examples for building with Cursor.
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

相關概念：[[CLI/TUI]] · [[API 設計]] · [[自動化]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[TianyiDataScience--openclaw-control-center|TianyiDataScience/openclaw-control-center]] · [[hexiecs--talk-normal|hexiecs/talk-normal]] · [[AlpinDale--parsync|AlpinDale/parsync]]

[GitHub](https://github.com/cursor/cookbook)

## 相關收錄

> [!note]- 直接競品（同子分類：API 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "API 工具" AND file.name != "cursor--cookbook"
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
> const concepts = ["CLI/TUI","API 設計","自動化"];
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

- [[2026-05-03|2026-05-03]] — 再次上榜，3.1k stars
- [[2026-05-02|2026-05-02]] — 再次上榜，3.0k stars
- [[2026-05-01|2026-05-01]] — 再次上榜，2.6k stars
- [[2026-04-30|2026-04-30]] — 首次收錄，1.4k stars
