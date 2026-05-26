---
repo: GENEXIS-AI/chromex
url: https://github.com/GENEXIS-AI/chromex
owner: GENEXIS-AI
owner_type: User
language: TypeScript
license: MIT
description: "A Codex-powered Chrome side-panel assistant for page context, tabs, voice, and image workflows."
homepage: ""
stars: 1115
stars_per_day: 41
forks: 117
open_issues: 3
created: 2026-04-28
pushed_at: 2026-05-10
first_seen: 2026-05-01
week: "2026-W18"
month: "2026-05"
category: "開發工具"
subcategory: "Chrome 擴展"
release_tag: "v0.1.7"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-01
use_case: "提供 Codex 支援的 Chrome 側邊面板助手，增強網頁上下文、標籤、語音和圖像工作流程。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-05-12"
contributor_count: 5
engagement: "medium"
issue_close_rate: 63
repo_size_kb: 4993
readme_length: 8951
bus_factor: 1
last_release_days: 17
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-05-01"
star_history: "2026-05-01:687,2026-05-01:687,2026-05-02:738,2026-05-02:738,2026-05-03:755,2026-05-03:755,2026-05-04:772,2026-05-05:819,2026-05-05:819,2026-05-06:838,2026-05-07:846,2026-05-08:900,2026-05-09:947,2026-05-10:1011,2026-05-11:1057,2026-05-12:1077,2026-05-13:1088,2026-05-14:1102,2026-05-15:1104,2026-05-16:1106,2026-05-17:1105,2026-05-18:1109,2026-05-19:1112,2026-05-20:1110,2026-05-21:1109,2026-05-22:1109,2026-05-23:1110,2026-05-24:1112,2026-05-25:1113,2026-05-26:1115"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "chromex"
  - "GENEXIS-AI/chromex"
  - "提供 Codex 支援的 Chrome 側邊面板助手，增強網頁上下文、標籤、語音和圖像工作流程。"
---

# chromex

**1.1k** stars · **41** stars/天 · 建立 27 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/GENEXIS-AI--chromex");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.1.7`

> [!summary] 一句話摘要
> 提供 Codex 支援的 Chrome 側邊面板助手，增強網頁上下文、標籤、語音和圖像工作流程。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (41 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 15 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 需要在 Chrome 環境中進行多模態交互的開發者和用戶。
> **一句話重點** Chromex 將 Codex 的強大功能直接帶入 Chrome 瀏覽器，實現了前所未有的多模態交互體驗。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/GENEXIS-AI--chromex");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Chrome 擴展" && p.file.name !== "GENEXIS-AI--chromex" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 Chrome 擴展 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~4h · **綁定風險** medium
> **結論** 花 4 小時學、6 小時整合，得到即時的多模態交互效果，值得一試。

> [!abstract] 核心創新
> Chromex 透過本地橋接實現了 Chrome 與 Codex 的無縫整合，提供了多種即時交互功能。

## 專案簡介

Chromex 是一個基於 Chrome MV3 的側邊面板助手，透過本地原生橋接連接 Chrome 和 Codex，幫助用戶與當前頁面、選定標籤、上傳的文件、語音輸入、圖像和瀏覽器工作流程進行互動。用戶可以使用 `npm install -g @openai/codex` 安裝 Codex CLI，並透過 `node scripts/install-native-host.mjs --browser=chrome` 註冊本地橋接，從而安全地啟動 Codex 應用伺服器。這個工具的賣點在於它能在不將憑證存儲在擴展存儲中的情況下，提供強大的網頁交互功能。技術上，Chromex 使用了 TypeScript 和 JavaScript，並依賴於 Chrome 的原生消息傳遞機制來實現與 Codex 的通信。這種設計使得它能夠在用戶的瀏覽器環境中提供即時的交互體驗，而不需要額外的伺服器支持。

與其他類似工具相比，如 `0xGF/boneyard` 和 `0xSero/codex-shim`，Chromex 提供了更為豐富的功能集，包括對多種文件格式的支持和即時翻譯功能。實際使用中，Chromex 能夠處理大量的資料和請求，但在設置過程中可能會遇到 Windows 環境特有的問題，如本地橋接的安裝。社群活躍度尚可，開發者定期更新，並對問題的回應速度良好。這個專案目前處於 beta 階段，適合需要在 Chrome 環境中進行多模態交互的開發者和用戶。未來可能會增加對 Firefox 的支持，擴大其用戶基礎。

**技術棧**：`TypeScript` · `JavaScript` · `CSS` · `HTML`

## 重點功能

- 持久的 MV3 側邊面板 — 提供聊天優先的用戶體驗，支持多種請求類型。
- 自動路由請求 — 能夠根據用戶需求自動處理頁面、文件、圖像和語音請求。
- @ 選擇器 — 允許用戶選擇一個或多個打開的標籤，提升操作靈活性。
- 計劃模式 — 將模糊請求轉化為明確計劃，確保執行的準確性。
- 即時翻譯功能 — 支持實時翻譯和後續聊天，增強用戶互動體驗。
- Markdown 渲染 — 支持代碼區塊、表格和鏈接的顯示，方便用戶進行內容編輯。
- 多語言支持 — 自動根據瀏覽器語言選擇，並支持多種語言的用戶界面。

## 快速開始

1. 安裝 Codex CLI
```bash
npm install -g @openai/codex
```
2. 確認 Codex CLI 版本
```bash
codex --version
```
3. 下載並安裝本地橋接
```bash
node scripts/install-native-host.mjs --browser=chrome
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Codex CLI。",
  "指令": "npm install -g @openai/codex",
  "預期輸出": "顯示 Codex CLI 的版本號。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 27 天就累積 1115 stars（41/天），forks 117（10.5%），這顯示出不錯的增長潛力。作者 GenexisAI CHOI 之前在開源社群中活躍，解決了現有 Chrome 擴展無法有效整合 Codex 的痛點，讓用戶能夠在瀏覽器中直接進行多種操作。最近的推廣活動和社群討論也引起了關注，特別是對於需要多語言支持的用戶。隨著 Codex 的普及，這個工具的需求自然上升，讓它成為一個值得關注的選擇。

## 適合誰使用

**目標受眾**：需要在 Chrome 環境中進行多模態交互的開發者和用戶。

> [!example] 使用場景
> - 網頁開發者用它來快速生成和編輯網頁內容，因為它能即時處理多種文件格式並提供上下文建議。
> - 數據分析師用它來分析和比較不同的數據來源，因為它支持從多個標籤和文件中提取信息。
> - 內容創作者用它來生成和編輯圖像，因為它提供了非破壞性的圖像編輯功能，提升工作效率。

## 架構分析

Chromex 的架構由四個主要組件組成：Chrome 擴展、原生消息主機、本地橋接和 Codex 應用伺服器。這種設計使得用戶能夠在瀏覽器中直接進行多模態交互，而不需要額外的伺服器支持。數據流從 Chrome 擴展通過原生消息主機傳遞到本地橋接，然後再到 Codex 應用伺服器，這樣的設計確保了安全性和性能。

選擇使用本地橋接的原因在於能夠安全地處理用戶的憑證和數據，而不將其暴露在擴展存儲中。這種設計的代價是需要用戶手動安裝本地橋接，對於不熟悉命令行的用戶來說可能會造成一定的困難。擴展性方面，該架構能夠支持多種功能的擴展，但在高並發情況下可能會遇到性能瓶頸。

## 技術深入分析

Chromex 的核心技術機制是基於 Chrome MV3 的擴展架構，利用原生消息傳遞來實現與 Codex 的通信。這種設計使得用戶能夠在瀏覽器中即時進行多種操作，從而提升工作效率。效能方面，Chromex 能夠處理大量的請求，但在高並發情況下可能會遇到性能瓶頸。選擇 TypeScript 和 JavaScript 作為開發語言，能夠提高代碼的可維護性和可讀性，並且依賴於 Chrome 的原生消息傳遞機制，降低了外部依賴的風險。技術風險方面，對於高並發請求的處理能力仍需進一步測試，特別是在用戶數量增長的情況下。與主流框架的整合難度較低，能夠輕鬆融入現有的開發流程中，對於熟悉 Chrome 擴展開發的團隊來說，學習成本相對較低。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含多語言支持，安裝過程中提供詳細步驟。安裝過程對於新手來說可能有些複雜，特別是在 Windows 環境下。整體而言，花 30 分鐘應該能夠成功運行。文件目前僅提供英文和部分語言版本，對於非英語用戶可能會有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 提供多種即時交互功能，提升用戶工作效率。
> - 安全性高，憑證不存儲於擴展中。
> - 支持多種文件格式和語言，適用範圍廣泛。

> [!danger] 缺點
> - 安裝過程對於新手來說可能較為複雜。
> - 目前僅支持 Chrome，對於 Firefox 用戶不友好。
> - 在 Windows 環境下可能會遇到特定的安裝問題。

> [!warning] 注意事項
> - 僅支持 Chrome 瀏覽器，未來可能會增加對 Firefox 的支持。
> - 在 Windows 環境下安裝過程可能會遇到特定的問題，如本地橋接安裝失敗。
> - 需要安裝 Codex CLI，對於不熟悉命令行的用戶可能有一定的學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供類似的 Codex 集成，但功能較為單一，主要集中在文本生成上。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 專注於簡化 Codex 的使用，但不支持多模態交互，適合對簡單文本生成有需求的用戶。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於文本生成，功能較為單一，無法提供多模態交互。 | 如果你的需求僅限於文本生成，且不需要多種文件格式的支持。 | low，因為功能簡單，遷移成本低。 |
| [0xSero/codex-shim](https://github.com/0xSero/codex-shim) | 簡化 Codex 使用，但不支持多模態交互，功能較為有限。 | 如果你的團隊需要快速集成 Codex 且不需要多模態功能。 | medium，因為需要調整現有的工作流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **chromex** | **boneyard** | **codex-shim** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於文本生成，功能較為單一，無法提供多模態交互。 | 簡化 Codex 使用，但不支持多模態交互，功能較為有限。 |
> | 遷移成本 | - | low，因為功能簡單，遷移成本低。 | medium，因為需要調整現有的工作流程。 |
> | 適用場景 | 主要場景 | 如果你的需求僅限於文本生成，且不需要多種文件格式的支持。 | 如果你的團隊需要快速集成 Codex 且不需要多模態功能。 |

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

- **[HIGH]** 在 Windows 環境下安裝本地橋接時可能會遇到特定的問題，如找不到 package.json
  - 解法：確保在正確的目錄下運行安裝命令。
- [MEDIUM] Codex CLI 版本不兼容會導致啟動失敗
  - 解法：確保安裝的版本為 0.130.0 或更新版本。
- [MEDIUM] 在某些情況下，側邊面板可能無法正常顯示
  - 解法：重新啟動 Chrome 瀏覽器並檢查連接。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端開發 | 非常適合 | 能夠快速集成多種功能，提升開發效率。 |
| 需要處理大量數據的分析團隊 | 適合 | 支持多種文件格式和即時翻譯功能，能夠提升數據處理效率。 |
| 大型企業的核心產品開發 | 不適合 | 目前處於 beta 階段，穩定性和性能尚需驗證。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~4 小時 |
| 整合時間 | ~6 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 4 小時學、6 小時整合，得到即時的多模態交互效果，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不存儲敏感資料，並且使用本地橋接來保護用戶憑證，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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
| Forks | 117 |
| Open Issues | 3 |
| Issue 解決率 | 63% (5 closed) |
| 最後推送 | 2026-05-10 |
| 建立日期 | 2026-04-28 |
| Repo 大小 | 4.9 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/GENEXIS-AI/chromex) |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@types/chrome` `@types/node` `esbuild` `jszip` `playwright-core` `typescript` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 95
>     "CSS" : 3
>     "JavaScript" : 2
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@GENEXIS-AI](https://github.com/GENEXIS-AI) | 48 |
> | [@pomcro](https://github.com/pomcro) | 19 |
> | [@Dayoooun](https://github.com/Dayoooun) | 2 |
> | [@eramax](https://github.com/eramax) | 1 |
> | [@TheCrazyLex](https://github.com/TheCrazyLex) | 1 |

**最新版本**：v0.1.7 — Chromex v0.1.7 (2026-05-09)

> [!info]- Release Notes
> Chromex v0.1.7 refresh.
> 
> Updates:
> - Added a General setting to disable the page image hover button when users do not want the overlay.
> - Documented the supported Codex CLI requirement as @openai/codex 0.130.0 or newer in all README locales.
> - Rebuilt the local bridge package with a CommonJS-compatible bundled launcher and import.meta URL fallback, fixing Windows native host exits such as Dynamic require of fs is not supported.
> 
> Validation:
> - typecheck, full unit test suite, public package build, Chrome Web Store package build, release audit, npm audit.
> - GitHub Actions CI passed on macOS, Ubuntu, and Windows for commit 922b0d4.

## 社群與生態

**社群活躍度**：社群活躍，開發者定期更新並回應問題。
**連結**：[文件](https://github.com/GENEXIS-AI/chromex)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-09 ~ 2026-05-10）
> **活躍天數** 2 天 · **最新 commit** Add multilingual public install and privacy pages

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#22](https://github.com/GENEXIS-AI/chromex/issues/22) | languages  | 0 | 0 |
> | [#21](https://github.com/GENEXIS-AI/chromex/issues/21) | Chromex local bridge v0.1.7 exits immediately: missing @napi | 0 | 1 |
> | [#2](https://github.com/GENEXIS-AI/chromex/issues/2) | Add a firefox version | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Chromex
> 
> [](https://github.com/GENEXIS-AI/chromex/actions/workflows/ci.yml)
> [](./LICENSE)
> [](https://github.com/GENEXIS-AI/chromex/stargazers)
> [](./README.md)
> [](./readmes/README.ko.md)
> [](./readmes/README.ja.md)
> [](./readmes/README.zh-CN.md)
> 
> Chromex is a Chrome MV3 side-panel assistant that connects Chrome to Codex through a local native bridge. It helps users work with the current page, selected tabs, uploaded files, voice input, images, and browser workflows while keeping credentials out of extension storage.
> 
> Published by **GenexisAI CHOI**.
> 
> 
> ## Chrome Web Store Install
> 
> Chrome Web Store users do **not** need to build Chromex from source.
> 
> For a step-by-step guide with copy buttons in English, Korean, Japanese, and Simplified Chinese, use the public setup page: 
> 
> 1. Install the official Codex CLI and confirm it works. See the official Codex CLI install options at .
> 
> ```bash
> npm install -g @openai/codex
> codex --version
> ```
> 
>    Chromex requires `@openai/codex` **0.130.0 or newer**. Older releases (for example 0.124.x and 0.125.x) refuse some bootstrap feature flags and surface as `codex app-server exited with code 1` immediately after a successful `codex login`.
> 
> 2. Download `chromex-local-bridge.zip` from the latest [GitHub Release](https://github.com/GENEXIS-AI/chromex/releases/latest), unzip it, and run:
> 
> ```bash
> node scripts/install-native-host.mjs --browser=chrome
> ```
> 
> 3. Fully quit every Chrome window, reopen Chrome, then press **Check connection** in Chromex.
> 
> The Store extension can run only after this one-time local bridge registration. The bridge lets Chrome start the local Codex app-server safely through Chrome Native Messaging; the extension itself cannot install that local host automatically.
> 
> 
> ## Install From Source
> 
> Use the source checkout or [`chromex-public-source.zip`](https://github.com/GENEXIS-AI/chromex/releases/latest/download/chromex-public-source.zip):
> 
> ```bash
> git clone https://github.com/GENEXIS-AI/chromex.git
> cd chromex
> npm install
> npm run build
> node scripts/install-native-host.mjs
> ```
> 
> Then close every Chrome window, reopen Chrome, open `chrome://extensions`, enable **Developer mode**, select **Load unpacked**, and choose:
> 
> ```text
> packages/extension/dist
> ```
> 
> Important: run `npm install`, `npm run build`, and `install-native-host.mjs` from the `chromex` source folder that contains `package.json`. If Windows reports `ENOENT Could not read package.json`, you are in the wrong folder.
> 
> 
> ### Windows Local Bridge Setup
> 
> On Windows, install Node.js 20 LTS or newer, then install and verify the Codex CLI first:
> 
> ```powershell
> npm install -g @openai/codex
> codex --version
> ```
> 
> Use the npm install path above even if `winget install Codex -s msstore` fails. `0x8a15005e: The server certificate did not match any of the expected values` is a Windows Store / TLS certificate-chain problem outside Chromex, not a Chromex install step.
> 
> Then use **PowerShell** from the `chromex` source folder:
> 
> ```powershell
> npm install
> npm run build
> node scripts/install-native-host.mjs --browser=chrome
> ```
> 
> Then open `chrome://extensions`, click **Reload** on Chromex, and press **Check connection** in the Chromex side panel.
> 
> If the side panel still says the local bridge is waiting:
> 
> 1. Confirm Chromex is loaded from `packages/extension/dist`.
> 2. Copy the extension ID shown on the Chromex card in `chrome://extensions`.
> 3. Re-run the installer with that ID:
> 
> ```powershell
> node scripts/install-native-host.mjs  --browser=chrome
> ```
> 
> The expected public release ID is `menmlhahmendmkiicbjihgjhppkgaeom`. If Chrome shows a different ID, use the ID shown in Chrome.
> 
> If login fails with `Failed to start codex app-server`, Chromex can reach the local bridge but cannot start the Codex CLI. Re-run `codex --version`. If Windows cannot find it, set the optional Codex binary path to `%APPDATA%\npm\codex.cmd`, or set the folder to `%APPDATA%\npm`. Do not put your workspace folder in the Codex binary field; the workspace folder and Codex executable path are separate settings.
> 
> To force executable detection on Windows:
> 
> ```powershell
> npm install -g @openai/codex
> where codex
> codex --version
> ```
> 
> If `where codex` prints `C:\Users\\AppData\Roaming\npm\codex.cmd`, open Chromex settings and set the optional Codex binary path to `%APPDATA%\npm\codex.cmd`, save, close every Chrome window, reopen Chrome, and press **Check connection**.
> 
> 
> ## What It Does
> 
> - Chat with the current webpage, selected open tabs, screenshots, uploaded files, PDFs, Office files, images, and browser history when requested.
> - Summarize and compare page content, YouTube videos, news articles, research pages, PDFs, and arXiv papers.
> - Edit or generate images through Codex image workflows with local output handling.
> - Use voice transcription, plan mode, page-aware suggestions, custom profiles, and optional Codex skills.
> - Run the unified Translation/Live mode for live transcripts, optional realtime translation, and follow-up chat over the captured transcript.
> - Run browser-control workflows through Chrome content scripts with visible in-page activity indicators.
> 
> 
> ## Features
> 
> - Persistent MV3 side panel with chat-first UX.
> - Automatic routing for page, file, image, history, voice, and browser-control requests.
> - `@` picker for selecting one or more open tabs.
> - `/` picker for profile selection.
> - Plan mode for turning ambiguous requests into an explicit plan before execution.
> - Attachments for images, text, PDF, DOCX, CSV, TSV, XLSX, and XLSM.
> - Read strategy policy for DOM, vision, hybrid, and site-adapter workflows.
> - Selected-text context injection with fact-check suggestions and right-click ask flow.
> - Editable site suggestions where the visible command and the sent prompt can be different.
> - Translation/Live mode with live transcript history, optional realtime translation playback, and transcript-grounded follow-up chat.
> - Site-aware suggestions for YouTube, news, research, mail, collaboration, notes, task tools, shopping, travel, and Korean work services.
> - YouTube adapter with current timestamp context and seek actions.
> - Non-destructive image editing for uploaded images, page images, or visible screen captures.
> - Markdown rendering with code blocks, tables, links, and copy controls.
> - Optional Codex skills loaded from a user's local `.codex/skills/*/SKILL.md` only when enabled.
> 
> 
> ## Runtime Boundary
> 
> Chromex uses this boundary:
> 
> ```text
> Chrome Extension -> Native Messaging Host -> Local Bridge -> codex app-server
> ```
> 
> The source tree is organized as:
> 
> - `packages/extension`: Chrome MV3 side-panel extension
> - `packages/bridge`: local bridge daemon for Codex app-server and multimodal workflows
> - `packages/native-host`: Chrome Native Messaging relay
> - `packages/shared`: shared types, policies, profiles, and helpers
> 
> 
> ## Language Support
> 
> Chromex follows the browser language automatically by default. Users can also choose a language in **Settings > General > App UI language**.
> 
> The extension ships Chrome `_locales` entries for English, Korean, Japanese, Chinese, Arabic, French, German, Spanish, Portuguese, Hindi, Vietnamese, Thai, Turkish, Ukrainian, and many other Chrome-compatible locales. Model responses are instructed to follow the selected UI language unless the user asks for another language.
> 
> 
> ## Security And Privacy Defaults
> 
> - The extension does not store raw OpenAI API keys, OAuth tokens, or ChatGPT session tokens in Chrome extension storage.
> - Codex OAuth / ChatGPT login is handled through the local Codex app-server flow.
> - API-key login is an optional local fallback and is never used automatically without user confirmation.
> - Realtime translation uses a separately confirmed OpenAI API key path and can be disconnected from settings.
> - Page content, tab data, screenshots, browser history, microphone input, and browser actions are used only for user-requested workflows.
> - `history`, `tabs`, screen capture, microphone, and site access are requested only when a feature needs them.
> - Conversati

## 延伸閱讀

相關概念：[[多模態]] · [[即時通訊]] · [[API 設計]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[0xSero--codex-shim|0xSero/codex-shim]] · [[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[BigPizzaV3--CodexPlusPlus|BigPizzaV3/CodexPlusPlus]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[HKUDS--OpenHarness|HKUDS/OpenHarness]] · [[432539--gpt2api|432539/gpt2api]] · [[QLHazyCoder--codex-oauth-automation-extension|QLHazyCoder/codex-oauth-automation-extension]]

[GitHub](https://github.com/GENEXIS-AI/chromex)

## 相關收錄

> [!note]- 直接競品（同子分類：Chrome 擴展）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Chrome 擴展" AND file.name != "GENEXIS-AI--chromex"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "GENEXIS-AI--chromex"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "GENEXIS-AI--chromex" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W18" AND file.name != "GENEXIS-AI--chromex"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["多模態","即時通訊","API 設計"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "GENEXIS-AI--chromex" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/GENEXIS-AI--chromex");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "GENEXIS-AI--chromex" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "GENEXIS-AI" AND file.name != "GENEXIS-AI--chromex"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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
> const me = dv.page("Repos/GENEXIS-AI--chromex");
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

- [[2026-05-05|2026-05-05]] — 再次上榜，819 stars
- [[2026-05-03|2026-05-03]] — 再次上榜，755 stars
- [[2026-05-02|2026-05-02]] — 再次上榜，738 stars
- [[2026-05-01|2026-05-01]] — 首次收錄，687 stars
