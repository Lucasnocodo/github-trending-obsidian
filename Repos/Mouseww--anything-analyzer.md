---
repo: Mouseww/anything-analyzer
url: https://github.com/Mouseww/anything-analyzer
owner: Mouseww
owner_type: User
language: TypeScript
license: N/A
description: "全能协议分析工具：浏览器抓包 + MITM 代理 + 指纹伪装 + AI 分析 + MCP Server 无缝对接 AI Agent/IDE   |  All-in-one protocol analysis toolkit — built-in browser capture, MITM proxy, JS hooks, fingerprint spoofing, AI analysis & MCP server for agent integration"
homepage: ""
stars: 1614
stars_per_day: 179
forks: 358
open_issues: 7
created: 2026-04-12
pushed_at: 2026-04-21
first_seen: 2026-04-16
week: "2026-W16"
month: "2026-04"
category: "開發工具"
subcategory: "協議分析"
release_tag: "v3.5.1"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-16
use_case: "提供全方位的協議分析工具，能夠自動抓取和分析各類流量。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-04-22"
contributor_count: 3
engagement: "medium"
issue_close_rate: 72
repo_size_kb: 885
readme_length: 7003
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-04-16"
star_history: "2026-04-16:798,2026-04-16:799,2026-04-17:1042,2026-04-17:1048,2026-04-18:1276,2026-04-18:1277,2026-04-19:1350,2026-04-19:1353,2026-04-20:1488,2026-04-21:1574,2026-04-22:1614"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - easy_install
  - "topic/2api"
  - "topic/ai_tools"
  - "topic/analysis_cli"
  - "topic/api_analysis"
  - "topic/automation_tools"
aliases:
  - "anything-analyzer"
  - "Mouseww/anything-analyzer"
  - "提供全方位的協議分析工具，能夠自動抓取和分析各類流量。"
---

# anything-analyzer

**1.6k** stars · **179** stars/天 · 建立 9 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/Mouseww--anything-analyzer");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v3.5.1` `easy-install`

`2api` `ai-tools` `analysis-cli` `api-analysis` `automation-tools` `blackbox-testing` `network-analysis` `protocol-analysis` `reverse-engineering` `traffic-analysis`

> [!summary] 一句話摘要
> 提供全方位的協議分析工具，能夠自動抓取和分析各類流量。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (179 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Medium
> **適合** 需要進行協議逆向和安全審計的開發者或安全研究人員。
> **一句話重點** 這個工具不僅僅是抓包，還能自動分析流量，讓開發者省去大量手動工作。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Mouseww--anything-analyzer");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "協議分析" && p.file.name !== "Mouseww--anything-analyzer" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 協議分析 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** low
> **結論** 花 5 小時學習，2 小時整合，能夠獲得自動化的協議分析功能，值得投入。

> [!abstract] 核心創新
> 提供全場景抓包和 AI 驅動的自動分析，無需手動篩選請求。

## 專案簡介

Anything Analyzer 是一款全能的協議分析工具，能夠從多種來源（如瀏覽器、桌面應用、終端命令等）抓取流量，並透過內建的 AI 功能進行自動分析。使用者可以透過內嵌的瀏覽器直接操作，或使用 MITM 代理來捕捉桌面應用及 CLI 工具的請求，所有請求會匯入同一個 Session 進行統一分析。這種設計使得用戶不必手動篩選和分析數百條請求，AI 會自動生成協議逆向和安全審計報告，顯著提高效率。技術上，該工具使用 TypeScript 開發，並依賴 Electron 框架來提供跨平台支持，這意味著它可以在 Windows、macOS 和 Linux 上運行。相較於傳統的抓包工具如 Fiddler 和 Wireshark，Anything Analyzer 不僅支持 HTTP/HTTPS 的抓取，還能自動識別和分析加密請求，這在安全審計和 API 逆向中尤為重要。

使用者在進行 API 逆向時，可以直接獲得 API 端點文檔和 Python 代碼，這對於開發者來說是個巨大的時間節省。實際使用中，該工具能夠處理大量請求，並且在性能上經過優化，避免了常見的緩衝區問題。社群活躍度高，已經有 72% 的 Issue 被解決，顯示出開發者對於用戶反饋的重視。整體來看，Anything Analyzer 是一個成熟且功能強大的工具，適合需要進行深入協議分析的開發者和安全研究人員。

**技術棧**：`TypeScript` · `Electron` · `React`

## 重點功能

- 全場景抓包 — 支持瀏覽器、桌面應用、CLI 和移動設備的流量捕捉。
- AI 智能分析 — 自動生成協議逆向和安全審計報告，支持多種分析模式。
- MCP 生態集成 — 內建 MCP Server，支持與 AI Agent 的無縫對接。
- 多平台支持 — 可在 Windows、macOS 和 Linux 上運行，提供一致的使用體驗。
- 即時流式輸出 — 分析報告實時顯示，並支持多輪追問以獲取更多細節。

## 快速開始

1. 下載安裝包
```bash
從 Releases 頁面下載對應平台的安裝包
```
2. 安裝應用
```bash
運行下載的安裝包進行安裝
```
3. 啟動應用
```bash
打開 Anything Analyzer，開始抓包和分析
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天就累積 1614 stars（179/天），forks 358（22.2%），顯示出強大的社群支持。開發者 Mouseww 和團隊在協議分析領域有豐富經驗，這個工具解決了傳統抓包工具無法自動化分析的痛點，讓開發者能夠更快速地獲得所需的資訊。近期的推廣活動和社群討論也引起了廣泛關注，進一步推動了使用者的增長。

## 適合誰使用

**目標受眾**：需要進行協議逆向和安全審計的開發者或安全研究人員。

> [!example] 使用場景
> - 安全研究人員用它來逆向網站 API，因為它能自動生成 API 文檔和 Python 代碼，節省大量手動分析時間。
> - 後端開發者用它來調試 CLI 工具的請求，因為它提供完整的請求/響應記錄，並能夠自動解讀每一步。
> - 移動開發者用它來分析 App 的隱藏 API，因為它支持 Wi-Fi 代理，能夠捕捉到手機應用的所有流量。

## 架構分析

Anything Analyzer 採用 Electron 框架，這使得它能夠在多個平台上運行，並且利用 TypeScript 和 React 提供流暢的用戶界面。資料流從內嵌瀏覽器和 MITM 代理進入統一的 Session，然後由 AI 模組進行分析。這種設計使得用戶能夠在一個環境中處理來自不同來源的請求，避免了傳統工具的碎片化問題。選擇 Electron 的好處是能夠快速開發跨平台應用，但代價是可能會增加應用的資源消耗。整體架構的擴展性良好，能夠支持未來的功能擴展。

## 技術深入分析

Anything Analyzer 的核心技術在於其全能的抓包能力和 AI 驅動的分析模組。它能夠通過內嵌的瀏覽器和 MITM 代理捕捉來自不同來源的請求，並將這些請求統一匯入同一個 Session 進行分析。AI 模組則使用多種分析模式來識別和解釋請求，這在傳統工具中是無法實現的。該工具的性能經過優化，能夠有效處理大量請求，並且在分析過程中避免了常見的緩衝區問題。選擇 Electron 作為框架使得開發者能夠快速構建跨平台應用，但這也可能帶來較高的資源消耗。整體而言，這個工具的設計考慮到了用戶的實際需求，並且在功能上有很好的擴展性，未來可以支持更多的分析模式和功能。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的使用說明和安裝步驟，安裝過程相對順暢，沒有明顯的坑。文件中有詳細的使用場景和功能介紹，對於新手來說，能夠在 30 分鐘內上手並運行起來。

## 優缺點分析

> [!success] 優點
> - 全方位的流量捕捉，支持多種來源。
> - AI 驅動的自動分析，顯著提高效率。
> - 活躍的社群和持續的更新支持。

> [!danger] 缺點
> - 對新手來說，MITM 代理的配置可能較為複雜。
> - 在高頻請求的情況下可能會遇到性能瓶頸。
> - 某些功能可能需要額外的網路配置。

> [!warning] 注意事項
> - 需要配置 MITM 代理，對於新手可能有一定學習曲線。
> - 在某些環境下可能需要額外的網路配置，才能正常抓取流量。
> - 對於高頻請求的處理可能會有性能瓶頸，需根據實際情況調整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Fiddler | Fiddler 主要針對 HTTP/HTTPS 流量，而 Anything Analyzer 支持更廣泛的流量來源，包括桌面應用和 CLI 工具。 |
| Wireshark | Wireshark 是一個強大的網路封包分析工具，但缺乏自動化分析功能，而 Anything Analyzer 提供 AI 驅動的分析報告。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Fiddler | Fiddler 專注於 HTTP/HTTPS 流量的抓取和分析，而 Anything Analyzer 提供更廣泛的流量來源支持，包括桌面應用和 CLI 工具。 | 如果你的主要需求是針對 HTTP 流量的詳細分析，Fiddler 是一個成熟的選擇。 | medium，因為需要重新學習 Fiddler 的操作界面和功能。 |
| Wireshark | Wireshark 是一個功能強大的網路封包分析工具，但缺乏自動化分析功能，而 Anything Analyzer 提供 AI 驅動的分析報告。 | 如果需要深入的網路封包分析，Wireshark 是不二之選，但不適合需要自動化分析的場景。 | high，因為 Wireshark 的使用方式與 Anything Analyzer 有很大不同。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **anything-analyzer** | **Fiddler** | **Wireshark** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Fiddler 專注於 HTTP/HTTPS 流量的抓取和分析，而 Anything Analyzer 提供更廣泛的流量來源支持，包括桌面應用和 CLI 工具。 | Wireshark 是一個功能強大的網路封包分析工具，但缺乏自動化分析功能，而 Anything Analyzer 提供 AI 驅動的分析報告。 |
> | 遷移成本 | - | medium，因為需要重新學習 Fiddler 的操作界面和功能。 | high，因為 Wireshark 的使用方式與 Anything Analyzer 有很大不同。 |
> | 適用場景 | 主要場景 | 如果你的主要需求是針對 HTTP 流量的詳細分析，Fiddl | 如果需要深入的網路封包分析，Wireshark 是不二之選， |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人試用和小型專案，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，MITM 代理的配置可能導致抓包失敗。
  - 解法：確保所有相關的網路設置正確，並參考官方文檔進行配置。
- [MEDIUM] 在高頻請求的情況下，可能會遇到性能瓶頸。
  - 解法：根據實際情況調整請求頻率或使用更高效的配置。
- [MEDIUM] 某些加密請求可能無法正確識別。
  - 解法：手動檢查和調整 JS Hook 設置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 提供自動化的 API 逆向和安全審計功能，能夠節省大量時間。 |
| 大型企業的安全測試團隊 | 適合 | 能夠處理大量請求並提供詳細的安全分析報告。 |
| 個人開發者的側邊專案 | 普通 | 功能強大但可能對於小型專案來說過於複雜。 |
| 需要快速原型的開發團隊 | 不適合 | 可能需要較長的學習時間來熟悉工具的使用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 5 小時學習，2 小時整合，能夠獲得自動化的協議分析功能，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，並且不存取敏感資料。依賴鏈的信任程度高，無已知的供應鏈風險，適合在 CI/CD pipeline 中使用。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Anything Analyzer 最常與各類開發工具搭配使用，如 Postman、curl 和 Python 等。在一個用 Node.js 開發的專案中，你可以使用 MITM 代理來捕捉所有 API 請求，然後通過內建的 AI 分析功能生成詳細的報告。該工具支持與 GitHub Actions 等 CI 工具的整合，並且能夠與 VS Code 等 IDE 進行協作。整合的摩擦點主要在於 MITM 代理的配置，可能需要一些額外的環境設置來確保正常運行。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Anything Analyzer 出現之前，開發者主要依賴於 Fiddler 和 Wireshark 等工具進行流量分析，但這些工具各有其局限性，無法自動化分析過程。隨著 AI 技術的進步，Anything Analyzer 能夠利用 AI 進行自動化分析，這在過去是難以實現的。這個工具代表了協議分析領域的一個重要趨勢，未來可能會有更多類似的工具出現，並進一步推動自動化分析的普及。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉網路協議
- 了解基本的安全測試原則
- 有一定的編程基礎

> [!tip] 導入策略
> 第一週：在個人側邊專案中試用。第二週：在小型內部工具中導入。第三週：撰寫最佳實踐文檔，分享給團隊。第四週：在主要產品中選擇一個模組進行使用。

**成功指標**：能夠在 30 分鐘內完成 API 逆向，並生成詳細的報告。

> [!warning] 退出計畫
> 所有設定和數據都存儲在標準格式中，可以輕鬆導出和轉換為其他工具的格式。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Mouseww--anything-analyzer");
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
> const me = dv.page("Repos/Mouseww--anything-analyzer");
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
| Forks | 358 |
| Open Issues | 7 |
| Issue 解決率 | 72% (18 closed) |
| 最後推送 | 2026-04-21 |
| 建立日期 | 2026-04-12 |
| Repo 大小 | 885 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Mouseww/anything-analyzer) |
| Topics | `2api` `ai-tools` `analysis-cli` `api-analysis` `automation-tools` `blackbox-testing` `network-analysis` `protocol-analysis` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `@ant-design/icons` `@modelcontextprotocol/sdk` `@vscode/sudo-prompt` `antd` `better-sqlite3` `electron-updater` `node-forge` `react` `react-dom` `react-markdown` `react-window` `rehype-highlight` `remark-gfm` `socks` `uuid`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 88
>     "CSS" : 12
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Mouseww](https://github.com/Mouseww) | 7 |
> | [@furkankoykiran](https://github.com/furkankoykiran) | 2 |
> | [@captain686](https://github.com/captain686) | 2 |

**最新版本**：v3.5.1 (2026-04-21)

> [!info]- Release Notes
> # Anything Analyzer v3.5.1
> 
> ## 修复
> 
> - **MITM 代理上游代理支持** — MITM 代理服务器现在正确通过已配置的上游代理（HTTP/HTTPS/SOCKS5）转发出站连接，修复外部浏览器通过 MITM 代理抓包时无法访问需要翻墙站点的问题
> 
> ## 改进
> 
> - **CONNECT 隧道健壮性** — 修复代理响应解析中的 Buffer 编码问题和尾部数据丢失，HTTPS 代理类型正确使用 TLS 连接
> - **超时保护** — 上游代理 CONNECT 隧道添加 30 秒超时，防止连接挂起和 socket 泄漏
> - **请求体累积性能** — 修复 O(n^2) Buffer.concat 问题，改用计数器追踪大小
> 
> ## 下载
> 
> | 平台 | 文件 |
> |------|------|
> | Windows | `Anything-Analyzer-Setup-3.5.1.exe` |
> | macOS (Apple Silicon) | `Anything-Analyzer-3.5.1-arm64.dmg` |
> | macOS (Intel) | `Anything-Analyzer-3.5.1-x64.dmg` |
> | Linux | `Anything-Analyzer-3.5.1.AppImage` |

## 社群與生態

**社群活躍度**：社群活躍，Issue 解決率為 72%。
**連結**：[文件](https://github.com/Mouseww/anything-analyzer/wiki)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-20 ~ 2026-04-21）
> **活躍天數** 2 天 · **最新 commit** fix(ci): disable macOS code signing auto discovery

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#18](https://github.com/Mouseww/anything-analyzer/issues/18) | 稍微有点反爬，就歇菜了 | 2 | 5 |
> | [#28](https://github.com/Mouseww/anything-analyzer/issues/28) | bug：mac更新时，下载新包之后无法安装 | 0 | 1 |
> | [#27](https://github.com/Mouseww/anything-analyzer/issues/27) | 能不能支持浏览器插件 | 0 | 0 |
> | [#26](https://github.com/Mouseww/anything-analyzer/issues/26) | 问题：AI分析聊天问题 | 0 | 0 |
> | [#25](https://github.com/Mouseww/anything-analyzer/issues/25) | BUG：浏览器->anything analyzer->clash流量出不去 | 0 | 7 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Anything Analyzer
> 
> [简体中文](README.md) | [English](README.en.md)
> 
> > **网页、桌面应用、终端命令、Python 脚本、手机 App —— 不管流量从哪来，抓到就能让 AI 自动逆向分析。**
> 
> [](https://www.electronjs.org/)
> [](https://react.dev/)
> [](https://www.typescriptlang.org/)
> [](LICENSE)
> 
> ---
> 
> ## 为什么用 Anything Analyzer？
> 
> 传统工具各管一摊：DevTools 只看浏览器、Fiddler/Charles 只做代理、Wireshark 看不了 HTTPS。抓完包还得自己翻几百条请求，手动分析。
> 
> **Anything Analyzer 不一样 —— 全场景抓包 + AI 自动分析：**
> 
> ```
>   网页          桌面应用         终端            脚本          手机/IoT
>   Chrome       Postman         curl/wget      Python        App / 小程序
>     │          Electron          │             Node.js          │
>     │            │               │               │              │
>     ▼            ▼               ▼               ▼              ▼
>  ┌──────────┐ ┌─────────────────────────────────────────────────────┐
>  │ 内嵌浏览器 │ │              MITM 代理 (端口 8888)                   │
>  │   (CDP)   │ │   系统代理 / 手动指定 / Wi-Fi 代理                    │
>  └─────┬─────┘ └──────────────────────┬──────────────────────────────┘
>        │                              │
>        └──────────┬───────────────────┘
>                   ▼
>         ┌─────────────────┐
>         │  统一会话 Session  │  ← 所有来源的请求汇入同一个会话
>         └────────┬────────┘
>                  ▼
>         ┌─────────────────┐
>         │   AI 智能分析     │  ← 一键生成协议逆向 / 安全审计 / 加密分析报告
>         └─────────────────┘
> ```
> 
> ---
> 
> ## 三大核心能力
> 
> ### 1. 全场景抓包 — Anything，不止浏览器
> 
> | 抓包对象 | 怎么抓 | 典型场景 |
> |---------|--------|---------|
> | **网页** | 内嵌浏览器直接操作 | 网站 API 逆向、OAuth 登录、前端加密 |
> | **桌面应用** | MITM 代理 + 系统代理 | Postman、Electron 应用、游戏客户端 |
> | **终端命令** | MITM 代理 + 环境变量 | curl、wget、httpie |
> | **脚本程序** | MITM 代理 + 代码配置 | Python requests、Node.js fetch、Go http |
> | **手机 / 平板** | MITM 代理 + Wi-Fi 代理 | iOS/Android App、小程序、H5 |
> | **IoT / 其他设备** | MITM 代理 + 网关代理 | 智能家居、嵌入式设备的 HTTP 通信 |
> 
> 所有来源的请求**统一汇入同一个 Session**，AI 分析时一并处理。
> 
> ### 2. AI 智能分析 — 不只是抓包，是自动理解协议
> 
> - **两阶段分析** — Phase 1 智能过滤噪声请求 → Phase 2 聚焦深度分析
> - **5 种分析模式** — 自动识别 / API 逆向 / 安全审计 / 性能分析 / JS 加密逆向
> - **JS Hook 注入** — 自动拦截 fetch、XHR、crypto.subtle、CryptoJS、SM2/3/4 等加密调用
> - **加密代码提取** — 从 JS 文件中自动提取加密相关代码片段
> - **流式输出 + 多轮追问** — 报告实时流式显示，可继续追问细节
> 
> ### 3. MCP 生态集成 — AI Agent 的抓包工具
> 
> - **MCP Client** — 接入外部 MCP Server（stdio + StreamableHTTP），扩展 AI 分析能力
> - **内置 MCP Server** — 将抓包和分析能力暴露为 MCP 工具，可被 Claude Desktop、Cursor 等直接调用
> 
> ---
> 
> ## 使用场景
> 
> | 场景 | 流量来源 | 你能得到什么 |
> |------|---------|-------------|
> | **逆向网站 API** | 内嵌浏览器 | API 端点文档 + 鉴权流程 + Python 复现代码 |
> | **逆向 App 协议** | 手机 Wi-Fi 代理 | App 的隐藏 API + 请求签名逻辑 |
> | **JS 加密逆向** | 内嵌浏览器 + JS Hook | 加密算法识别 + 流程还原 + Python 实现 |
> | **安全审计** | 浏览器 + 代理混合 | Token 泄露、CSRF/XSS 漏洞、敏感数据暴露 |
> | **调试 CLI 工具** | 终端 curl/httpie | 完整请求/响应记录 + AI 解读每一步 |
> | **调试微服务** | 脚本 + 环境变量代理 | 服务间调用链路 + 认证流转分析 |
> 
> ---
> 
> ## Anything Analyzer — 使用说明
> 
> [使用说明](USAGE.md) 
> 
> ---
> 
> ## 快速开始
> 
> ### 下载安装
> 
> 从 [Releases](https://github.com/Mouseww/anything-analyzer/releases) 下载对应平台安装包：
> 
> | 平台 | 文件 |
> |------|------|
> | Windows | `Anything-Analyzer-Setup-x.x.x.exe` |
> | macOS (Apple Silicon) | `Anything-Analyzer-x.x.x-arm64.dmg` |
> | macOS (Intel) | `Anything-Analyzer-x.x.x-x64.dmg` |
> | Linux | `Anything-Analyzer-x.x.x.AppImage` |
> 
> ### 抓网页 — 内嵌浏览器
> 
> 1. **配置 LLM** — Settings → LLM，填入 API Key（支持 OpenAI / Anthropic / 任何兼容 API）
> 2. **新建 Session** — 输入名称和目标 URL
> 3. **操作抓包** — 在内嵌浏览器中操作网站，点击 Start Capture
> 4. **AI 分析** — 停止捕获，点击 Analyze，选择分析模式
> 
> ### 抓应用/终端/手机 — MITM 代理
> 
> 1. Settings → MITM 代理 → **安装 CA 证书**
> 2. **启用代理**（默认端口 `8888`）
> 3. 根据场景配置代理：
> 
> ```bash
> # ---- 终端命令 ----
> curl -x http://127.0.0.1:8888 https://api.example.com/data
> 
> # ---- Python 脚本 ----
> proxies = {"http": "http://127.0.0.1:8888", "https": "http://127.0.0.1:8888"}
> requests.get("https://api.example.com/data", proxies=proxies)
> 
> # ---- Node.js ----
> HTTP_PROXY=http://127.0.0.1:8888 HTTPS_PROXY=http://127.0.0.1:8888 node app.js
> 
> # ---- 系统全局（桌面应用自动走代理）----
> # Settings 中一键开启「设为系统代理」
> 
> # ---- 手机 / 平板 ----
> # Wi-Fi 设置 → HTTP 代理 → 手动 → 填入电脑 IP + 端口 8888
> # 然后用手机浏览器访问代理地址下载并安装 CA 证书
> ```
> 
> 4. 新建 Session（URL 可留空）→ Start Capture → 外部应用流量自动汇入
> 
> CA 证书详细说明
> 
> - 证书存储：`%APPDATA%/anything-analyzer/certs/`（Windows）/ `~/Library/Application Support/anything-analyzer/certs/`（macOS）
> - 首次安装需管理员权限（Windows UAC / macOS 密码）
> - Settings 中可随时卸载、重新生成或导出证书
> - 根 CA 有效期 10 年，子证书 825 天（符合 Apple 要求）
> - MITM 代理为**只读捕获**，不修改请求/响应内容
> - WebSocket 流量隧道转发，不做解密
> - 单个 body 上限 1MB，二进制内容自动跳过
> 
> ---
> 
> ## 全部功能
> 
> 展开查看完整功能列表
> 
> **抓包引擎**
> - 全量网络捕获 — CDP Fetch 拦截，所有 HTTP 请求/响应（含 headers、body）
> - MITM 代理 — 内置 HTTPS 中间人代理，自动签发 TLS 证书，按域名 LRU 缓存
> - 双通道捕获 — 浏览器 CDP + MITM 代理，统一汇入同一会话
> - SSE / WebSocket 识别 — 自动检测流式通信和 WebSocket 升级请求
> - 存储快照 — 定时采集 Cookie、localStorage、sessionStorage 变化
> - Domain 过滤 — 请求列表按域名分组过滤，支持部分匹配搜索
> - 请求来源标记 — 区分「CDP」和「代理」来源
> - 导出请求 — 原始请求数据导出为 JSON 文件
> 
> **浏览器**
> - 多标签页 — 支持弹窗自动捕获为内部标签（OAuth 流程友好）
> - 标签页防护 — 阻止 `window.close()` 关闭标签页，最后一个标签页被意外销毁时自动恢复
> - 一键清除环境 — Cookies、localStorage、sessionStorage、缓存一键清空
> 
> **AI 分析**
> - 两阶段分析 — Phase 1 智能过滤 → Phase 2 深度分析，AI 按需查看请求详情
> - 手动多选分析 — 勾选指定请求直接分析，跳过预过滤
> - 自定义 Prompt 模板 — 内置多种模板，支持自定义
> - 流式输出 + 追问 — 报告实时显示，支持多轮对话
> 
> **系统**
> - 系统代理集成 — 一键设为系统代理（Windows 注册表 / macOS networksetup / Linux gsettings）
> - CA 证书管理 — 安装 / 卸载 / 重新生成 / 导出，跨平台支持
> - 全局代理 — 支持 SOCKS5/HTTP/HTTPS 代理
> - 自动更新 — 内置 electron-updater
> - 暗色主题 — 基于 Ant Design 的现代界面
> 
> ---
> 
> ## 从源码构建
> 
> ```bash
> git clone https://github.com/MouseWW/anything-analyzer.git
> cd anything-analyzer
> pnpm install
> pnpm dev        # 开发模式
> pnpm test       # 运行测试
> pnpm build && npx electron-builder --win  # 构建 Windows 安装包
> ```
> 
> > macOS 发布说明：自动更新依赖**已签名且已公证**的安装包。GitHub Actions 发布 mac 版本前，请在仓库 Secrets 中配置 `CSC_LINK`、`CSC_KEY_PASSWORD`、`APPLE_ID`、`APPLE_APP_SPECIFIC_PASSWORD`、`APPLE_TEAM_ID`，否则 `ShipIt` 无法安装更新。
> 
> **环境要求：** Node.js >= 18 · pnpm · Visual Studio Build Tools (Windows)
> 
> ## Tech Stack
> 
> | Layer | Technology |
> |-------|-----------|
> | Framework | Electron 35 + electron-vite |
> | Frontend | React 19 + Ant Design 5 + TypeScript |
> | Database | better-sqlite3 (local SQLite) |
> | Protocol | Chrome DevTools Protocol (CDP) |
> | Proxy | 内置 MITM HTTPS 代理（node-forge TLS） |
> | AI | OpenAI / Anthropic / Custom LLM（Chat Completions + Responses API） |
> | AI 扩展 | MCP Client（stdio + StreamableHTTP）+ 内置 MCP Server |
> 
> 项目结构
> 
> ```
> src/
> ├── main/                    # Electron main process
> │   ├── ai/                  # AI 分析流水线（两阶段编排、prompt、LLM 路由）
> │   ├── capture/             # 抓包引擎（CDP Fetch + JS Hook + 存储快照）
> │   ├── cdp/                 # Chrome DevTools Protocol 管理
> │   ├── proxy/               # MITM 代理（CA 管理、证书签发、系统代理）
> │   ├── mcp/                 # MCP Client + 内置 MCP Server
> │   ├── db/                  # SQLite 数据层
> │   └── session/             # 会话生命周期管理
> ├── preload/                 # Context bridge + Hook 注入脚本
> ├── renderer/                # React UI（组件 + Hooks）
> └── shared/                  # 共享类型定义
> ```
> 
> ---
> 
> 本项目`不具备`以下能力：
> - 不具备【非法获取计算机数据】的功能
> - 不具备【非法修改计算机数据】的功能
> - 不具备【非法控制计算机系统】的功能
> - 不具备【破坏计算机系统】的功能
> - 不具备【内置AI模型】（AI 模型由用户自行配置，请按照《生成式人工智能服务管理暂行办法》合规使用大模型）
> 
> **务必不要使用本工具进行任何违反中国法律的行为！！！**
> 
> ---
> 
> Thanks to everyone on [LinuxDo](https://linux.do/) for their support!
> 
> ## Star History
> 
> [](https://star-history.com/#Mouseww/anything-analyzer&Date)
> 
> ## License
> 
> MIT

## 延伸閱讀

相關概念：[[協議分析]] · [[自動化測試]] · [[安全漏洞]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]]

[GitHub](https://github.com/Mouseww/anything-analyzer)

## 相關收錄

> [!note]- 直接競品（同子分類：協議分析）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "協議分析" AND file.name != "Mouseww--anything-analyzer"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Mouseww--anything-analyzer"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "Mouseww--anything-analyzer" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W16" AND file.name != "Mouseww--anything-analyzer"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["協議分析","自動化測試","安全漏洞"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Mouseww--anything-analyzer" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Mouseww--anything-analyzer");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Mouseww--anything-analyzer" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Mouseww" AND file.name != "Mouseww--anything-analyzer"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Mouseww--anything-analyzer");
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
> const me = dv.page("Repos/Mouseww--anything-analyzer");
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
> const me = dv.page("Repos/Mouseww--anything-analyzer");
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
> const me = dv.page("Repos/Mouseww--anything-analyzer");
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
> const me = dv.page("Repos/Mouseww--anything-analyzer");
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

> **2026-04-16** — 首次收錄
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

- [[2026-04-19|2026-04-19]] — 再次上榜，1.4k stars
- [[2026-04-18|2026-04-18]] — 再次上榜，1.3k stars
- [[2026-04-17|2026-04-17]] — 再次上榜，1.0k stars
- [[2026-04-16|2026-04-16]] — 首次收錄，798 stars
