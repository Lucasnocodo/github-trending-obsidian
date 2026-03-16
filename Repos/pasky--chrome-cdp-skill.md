---
repo: pasky/chrome-cdp-skill
url: https://github.com/pasky/chrome-cdp-skill
owner: pasky
owner_type: User
language: JavaScript
license: N/A
description: "Give your AI agent access to your live Chrome session — works out of the box, connects to tabs you already have open"
homepage: ""
stars: 1502
stars_per_day: 501
forks: 85
open_issues: 2
created: 2026-03-13
pushed_at: 2026-03-15
first_seen: 2026-03-16
week: "2026-W12"
month: "2026-03"
category: "開發工具"
subcategory: "自動化"
release_tag: "v1.0.2"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-16
use_case: "讓你的 AI 代理能夠直接訪問現有的 Chrome 瀏覽器會話，無需重啟或重新登入。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-19"
contributor_count: 2
engagement: "low"
issue_close_rate: 71
repo_size_kb: 18
readme_length: 3343
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-03-16"
star_history: "2026-03-16:1502"
tags:
  - github
  - "category/開發工具"
  - "lang/javascript"
  - easy_install
aliases:
  - "chrome-cdp-skill"
  - "pasky/chrome-cdp-skill"
  - "讓你的 AI 代理能夠直接訪問現有的 Chrome 瀏覽器會話，無需重啟或重新登入。"
---

# chrome-cdp-skill

**1.5k** stars · **501** stars/天 · 建立 3 天前 · JavaScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/pasky--chrome-cdp-skill");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.0.2` `easy-install`

> [!summary] 一句話摘要
> 讓你的 AI 代理能夠直接訪問現有的 Chrome 瀏覽器會話，無需重啟或重新登入。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (501 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人 · **參與度** Low
> **適合** 需要在現有 Chrome 瀏覽器會話中進行自動化操作的開發者。
> **一句話重點** 這個專案最厲害的地方在於它能夠讓 AI 代理直接訪問當前的 Chrome 瀏覽器會話，這在自動化測試和開發中提供了極大的便利。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/pasky--chrome-cdp-skill");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "自動化" && p.file.name !== "pasky--chrome-cdp-skill" && p.status !== "archived")
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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到即時訪問當前頁面的能力，值得投入。

> [!abstract] 核心創新
> 這個專案能夠讓 AI 代理直接訪問現有的 Chrome 瀏覽器會話，無需重啟或重新登入。

## 專案簡介

這個專案的核心機制是讓 AI 代理能夠直接與當前運行的 Chrome 瀏覽器進行互動，這樣用戶就不需要重啟瀏覽器或重新登入。透過啟用 Chrome 的遠端除錯功能，代理可以讀取用戶已登入的頁面，並與當前的工作標籤互動。使用者只需執行 `pi install git:github.com/pasky/chrome-cdp-skill@v1.0.1` 來安裝，並在 Chrome 中啟用遠端除錯即可開始使用。這個工具的賣點在於它能夠在不影響用戶當前工作流的情況下，提供即時的頁面狀態和交互能力。

技術上，這個專案直接連接到 Chrome 的遠端除錯 WebSocket，並在首次訪問標籤時啟動輕量級的後台守護進程，這樣可以持續保持會話開啟。這種設計避免了 Puppeteer 等工具在多標籤下的超時問題，因為它能夠穩定地處理 100 多個標籤。

與其他類似工具相比，如 `chrome-devtools-mcp`，這個專案的優勢在於它不需要每次命令都重新連接，從而減少了 Chrome 的「允許除錯」彈窗出現的頻率，並且能夠更有效地管理多個標籤。



實際使用中，這個工具能夠快速列出當前打開的標籤，並支持多種操作，如截圖、點擊元素、評估 JavaScript 表達式等。用戶可能會遇到的問題包括在沙盒環境中使用 Unix socket IPC 失敗的情況，這需要特別注意。

目前這個專案處於穩定階段，值得考慮在需要與現有 Chrome 瀏覽器會話互動的場景中使用。預計未來會持續增強與更多代理的兼容性，並進一步優化性能。

建議在需要即時訪問當前網頁狀態的情境下使用，例如開發者需要在測試過程中即時獲取頁面數據，而不適合用於需要完全隔離的自動化測試場景。整體來說，這個工具的學習和整合成本相對較低，適合快速部署。

**技術棧**：`Node.js 22+`

## 重點功能

- 即時訪問當前 Chrome 瀏覽器會話 — 無需重啟或重新登入，直接與已開啟的標籤互動。
- 支持多種操作 — 包括截圖、點擊元素、評估 JavaScript 表達式等，使用 `scripts/cdp.mjs` 指令進行操作。
- 持久守護進程 — 每個標籤持有一個持久守護進程，避免了重複彈窗和超時問題。
- 兼容多種瀏覽器 — 自動檢測 Chrome、Chromium、Brave、Edge 和 Vivaldi，簡化使用流程。
- 輕量級安裝 — 只需 Node.js 22+，無需額外的 npm 安裝，快速上手。

## 快速開始

1. 安裝 pi skill
```bash
pi install git:github.com/pasky/chrome-cdp-skill@v1.0.1
```
2. 啟用 Chrome 遠端除錯
```bash
在 Chrome 中導航至 chrome://inspect/#remote-debugging 並切換開關
```
3. 列出當前標籤
```bash
scripts/cdp.mjs list
```

## 程式碼範例

```js
[
  "# 前置條件：已安裝並啟用 Chrome 遠端除錯",
  "scripts/cdp.mjs eval \"console.log('Hello World')\"",
  "# 預期輸出：Hello World"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 1502 stars（501/天），forks 85（5.7%），這顯示出相當高的興趣和初步的採用率。作者 Pasky 之前在開源社群中有過多個貢獻，這次專案解決了傳統瀏覽器自動化工具在多標籤管理上的痛點，特別是需要即時訪問當前頁面狀態的需求。這個工具的出現正好滿足了開發者對於更靈活的瀏覽器自動化的需求，並且在社群中引發了討論。由於其獨特的設計，能夠避免傳統工具的許多限制，這使得它在技術生態中具備了良好的可行性。forks/stars 比率顯示出使用者對於修改和實際應用的興趣，這是健康的社群指標。

## 適合誰使用

**目標受眾**：需要在現有 Chrome 瀏覽器會話中進行自動化操作的開發者。

> [!example] 使用場景
> - 前端工程師用它來在開發過程中即時截圖當前頁面，因為這樣可以快速獲取頁面狀態，無需重新登入。
> - 測試工程師用它來自動化測試流程，因為它能夠直接與當前的 Chrome 瀏覽器會話互動，避免了多次啟動新實例的麻煩。
> - 數據分析師用它來提取當前頁面的 HTML 結構，因為這樣可以快速獲取需要的數據，而不必手動複製。

## 架構分析

這個專案採用直接連接 Chrome 的遠端除錯 WebSocket 的架構，省去了 Puppeteer 等中介工具的複雜性。每當用戶首次訪問某個標籤時，會啟動一個輕量級的守護進程來保持會話開啟，這樣可以避免重複的彈窗和超時問題。這種設計使得它能夠穩定地處理多達 100 個標籤，而不會因為超時而失敗。選擇這種方式的代價是需要用戶手動啟用遠端除錯功能，但這樣的設計能夠提供更流暢的使用體驗。整體來說，這個架構的擴展性良好，能夠支持多種瀏覽器，並且在未來可以進一步增強功能。

## 技術深入分析

這個專案的核心技術機制是通過 Chrome 的遠端除錯 WebSocket 進行直接連接，這使得它能夠在不需要中介工具的情況下與瀏覽器進行互動。這種設計避免了 Puppeteer 等工具在多標籤管理上的超時問題，因為它能夠持續保持會話開啟。效能方面，這個工具能夠穩定地處理 100 多個標籤，並且在執行操作時不會因為超時而失敗。選擇 Node.js 作為技術棧的原因是其輕量和高效的特性，這使得整個專案的依賴樹相對簡單，降低了維護成本。技術風險方面，這個工具在沙盒環境中可能會遇到 IPC 失敗的問題，這需要使用者在特定環境下小心使用。整合方面，這個工具能夠與多種瀏覽器兼容，並且在 CI/CD pipeline 中的整合相對簡單，適合快速部署和使用。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用說明，並且包含範例指令。安裝過程相對順暢，只需啟用 Chrome 的遠端除錯功能。整體來說，花 30 分鐘就能順利運行起來。

## 優缺點分析

> [!success] 優點
> - 能夠直接與當前 Chrome 瀏覽器會話互動，無需重啟或重新登入。
> - 支持多種操作，能夠快速獲取頁面狀態和數據。
> - 持久守護進程設計，能夠有效管理多個標籤，避免超時問題。

> [!danger] 缺點
> - 需要手動啟用 Chrome 的遠端除錯功能，對於新手來說可能有一定的學習曲線。
> - 在沙盒環境中使用可能會遇到 IPC 失敗的問題，限制了某些操作。
> - 僅支持 Node.js 22+，對於使用舊版本 Node.js 的用戶不友好。

> [!warning] 注意事項
> - 僅支援 Node.js 22+。
> - 在沙盒環境中使用 Unix socket IPC 可能會失敗，導致所有頁面級操作被阻止。
> - 需要手動啟用 Chrome 的遠端除錯功能，對於新手可能有一定的學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具專注於文件同步，而 chrome-cdp-skill 專注於與 Chrome 瀏覽器的即時互動，適合需要即時頁面狀態的場景。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | Shadowbroker 主要用於網絡流量監控，而 chrome-cdp-skill 提供直接的頁面交互能力，更適合自動化測試和開發。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | tg-ws-proxy 用於 WebSocket 代理，而 chrome-cdp-skill 則是針對 Chrome 瀏覽器的自動化操作，功能範圍不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| chrome-devtools-mcp | 這個工具每次命令都重新連接，導致 Chrome 的彈窗頻繁出現，而本專案則持有持久守護進程，避免了這個問題。 | 如果需要一個穩定的長期連接來管理多個標籤，chrome-cdp-skill 更適合。 | low，因為兩者的使用方式相似，僅需調整連接方式。 |
| puppeteer | Puppeteer 是一個完整的瀏覽器自動化框架，而 chrome-cdp-skill 專注於與現有會話的互動，這使得 chrome-cdp-skill 更輕量且快速。 | 如果需要更全面的瀏覽器自動化功能，Puppeteer 會是更好的選擇。 | medium，因為需要重新設計自動化流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **chrome-cdp-skill** | **chrome-devtools-mcp** | **puppeteer** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個工具每次命令都重新連接，導致 Chrome 的彈窗頻繁出現，而本專案則持有持久守護進程，避免了這個問題。 | Puppeteer 是一個完整的瀏覽器自動化框架，而 chrome-cdp-skill 專注於與現有會話的互動，這使得 chrome-cdp-skill 更輕量且快速。 |
> | 遷移成本 | - | low，因為兩者的使用方式相似，僅需調整連接方式。 | medium，因為需要重新設計自動化流程。 |
> | 適用場景 | 主要場景 | 如果需要一個穩定的長期連接來管理多個標籤，chrome-cd | 如果需要更全面的瀏覽器自動化功能，Puppeteer 會是更 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人項目和小型團隊試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在沙盒環境中使用 Unix socket IPC 可能會失敗，導致所有頁面級操作被阻止。
  - 解法：使用命名管道或在非沙盒環境中運行。
- [MEDIUM] 需要手動啟用 Chrome 的遠端除錯功能，對於新手來說可能會造成困惑。
  - 解法：提供詳細的啟用步驟和指導。
- [MEDIUM] 在某些環境下，可能無法自動檢測到 Chrome 瀏覽器。
  - 解法：手動設置 CDP_PORT_FILE 環境變數。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要在開發過程中即時獲取頁面狀態的前端工程師 | 非常適合 | 能夠直接與當前的 Chrome 瀏覽器會話互動，無需重啟。 |
| 需要進行自動化測試的測試工程師 | 適合 | 支持多種操作，能夠快速獲取頁面數據。 |
| 需要在沙盒環境中運行的開發者 | 不適合 | 在沙盒環境中使用可能會遇到 IPC 失敗的問題。 |
| 需要全面瀏覽器自動化的團隊 | 普通 | Puppeteer 提供更全面的功能，但 chrome-cdp-skill 更輕量。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到即時訪問當前頁面的能力，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：這個工具不需要高權限，並且不會存取敏感資料。依賴鏈的信任程度良好，適合在 CI/CD pipeline 中使用。安全性考量方面，需注意在沙盒環境中的 IPC 問題。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/pasky--chrome-cdp-skill");
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
> const me = dv.page("Repos/pasky--chrome-cdp-skill");
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
| Open Issues | 2 |
| Issue 解決率 | 71% (5 closed) |
| 最後推送 | 2026-03-15 |
| 建立日期 | 2026-03-13 |
| Repo 大小 | 18 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/pasky/chrome-cdp-skill) |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@pasky](https://github.com/pasky) | 17 |
> | [@fredheir](https://github.com/fredheir) | 1 |

**最新版本**：v1.0.2 (2026-03-13)

> [!info]- Release Notes
> - Add `click`, `clickxy`, `type`, `loadall`, `evalraw` commands
> - `snap` now compact by default (no more InlineTextBox noise)
> - `shot` prints DPR and coordinate conversion hint
> - Coordinate system documented: CSS px = screenshot px / DPR
> - Eval index fragility warning in docs
> - Daemon IPC wire protocol documented in source
> - Reorganized as a proper pi package (installable via `pi install git:github.com/pasky/chrome-cdp-skill`)
> - Compatible with all agents (Amp, Claude Code, Cursor, etc.), not just pi

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者回應問題的速度尚可。
**連結**：[文件](https://github.com/pasky/chrome-cdp-skill/blob/main/README.md)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-13 ~ 2026-03-15）
> **活躍天數** 2 天 · **最新 commit** feat: add Windows support via named pipes

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#19](https://github.com/pasky/chrome-cdp-skill/issues/19) | Unix socket IPC fails with EPERM in sandboxed environments,  | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> # chrome-cdp
> 
> Let your AI agent see and interact with your **live Chrome session** — the tabs you already have open, your logged-in accounts, your current page state. No browser automation framework, no separate browser instance, no re-login.
> 
> Works out of the box with any Chrome installation. One toggle to enable, nothing else to install.
> 
> ## Why this matters
> 
> Most browser automation tools launch a fresh, isolated browser. This one connects to the Chrome you're already running, so your agent can:
> 
> - Read pages you're logged into (Gmail, GitHub, internal tools, ...)
> - Interact with tabs you're actively working in
> - See the actual state of a page mid-workflow, not a clean reload
> 
> ## Installation
> 
> ### As a pi skill
> 
> ```bash
> pi install git:github.com/pasky/chrome-cdp-skill@v1.0.1
> ```
> 
> ### For other agents (Amp, Claude Code, Cursor, etc.)
> 
> Clone or copy the `skills/chrome-cdp/` directory wherever your agent loads skills or context from. The only runtime dependency is **Node.js 22+** — no npm install needed.
> 
> ### Enable remote debugging in Chrome
> 
> Navigate to `chrome://inspect/#remote-debugging` and toggle the switch. That's it.
> 
> The CLI auto-detects Chrome, Chromium, Brave, Edge, and Vivaldi on macOS and Linux. If your browser stores `DevToolsActivePort` in a non-standard location, set the `CDP_PORT_FILE` environment variable to the full path.
> 
> ## Usage
> 
> ```bash
> scripts/cdp.mjs list                              # list open tabs
> scripts/cdp.mjs shot                      # screenshot → runtime dir
> scripts/cdp.mjs snap                      # accessibility tree (compact, semantic)
> scripts/cdp.mjs html    [".selector"]     # full HTML or scoped to CSS selector
> scripts/cdp.mjs eval    "expression"      # evaluate JS in page context
> scripts/cdp.mjs nav     https://...       # navigate and wait for load
> scripts/cdp.mjs net                       # network resource timing
> scripts/cdp.mjs click   "selector"        # click element by CSS selector
> scripts/cdp.mjs clickxy             # click at CSS pixel coordinates
> scripts/cdp.mjs type    "text"            # type at focused element (works in cross-origin iframes)
> scripts/cdp.mjs loadall  "selector"       # click "load more" until gone
> scripts/cdp.mjs evalraw   [json]  # raw CDP command passthrough
> scripts/cdp.mjs open   [url]                      # open new tab (triggers Allow prompt)
> scripts/cdp.mjs stop   [target]                   # stop daemon(s)
> ```
> 
> `` is a unique prefix of the targetId shown by `list`.
> 
> ## Why not chrome-devtools-mcp?
> 
> [chrome-devtools-mcp](https://github.com/ChromeDevTools/chrome-devtools-mcp) reconnects on every command, so Chrome's "Allow debugging" modal can re-appear repeatedly and target enumeration times out with many tabs open. `chrome-cdp` holds one persistent daemon per tab — the modal fires once, and it handles 100+ tabs reliably.
> 
> ## How it works
> 
> Connects directly to Chrome's remote debugging WebSocket — no Puppeteer, no intermediary. On first access to a tab, a lightweight background daemon is spawned that holds the session open. Chrome's "Allow debugging" modal appears once per tab; subsequent commands reuse the daemon silently. Daemons auto-exit after 20 minutes of inactivity.
> 
> This approach is also why it handles 100+ open tabs reliably, where tools built on Puppeteer often time out during target enumeration.

## 延伸閱讀

相關概念：[[自動化]] · [[瀏覽器自動化]] · [[遠端除錯]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[garrytan--gstack|garrytan/gstack]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]]

[GitHub](https://github.com/pasky/chrome-cdp-skill)

## 相關收錄

> [!note]- 直接競品（同子分類：自動化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "自動化" AND file.name != "pasky--chrome-cdp-skill"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "pasky--chrome-cdp-skill"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "JavaScript" AND file.name != "pasky--chrome-cdp-skill" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "pasky--chrome-cdp-skill"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","瀏覽器自動化","遠端除錯"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "pasky--chrome-cdp-skill" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/pasky--chrome-cdp-skill");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "pasky--chrome-cdp-skill" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "pasky" AND file.name != "pasky--chrome-cdp-skill"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/pasky--chrome-cdp-skill");
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
> const me = dv.page("Repos/pasky--chrome-cdp-skill");
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
> const me = dv.page("Repos/pasky--chrome-cdp-skill");
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
> const me = dv.page("Repos/pasky--chrome-cdp-skill");
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
> const me = dv.page("Repos/pasky--chrome-cdp-skill");
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

> **2026-03-16** — 首次收錄
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

- [[2026-03-16|2026-03-16]] — 首次收錄，1.5k stars
