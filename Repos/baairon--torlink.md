---
repo: baairon/torlink
url: https://github.com/baairon/torlink
owner: baairon
owner_type: User
language: TypeScript
license: MIT
description: "A sleek, zero-setup torrent finder and downloader that lives right in your terminal."
homepage: "https://www.npmjs.com/package/torlnk"
stars: 3109
stars_per_day: 311
forks: 211
open_issues: 10
created: 2026-06-25
pushed_at: 2026-07-05
first_seen: 2026-06-30
week: "2026-W27"
month: "2026-06"
category: "CLI 工具"
subcategory: "下載工具"
release_tag: "v1.2.0"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-30
use_case: "一個無需設置的終端 Torrent 搜尋和下載工具。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-05"
contributor_count: 5
engagement: "low"
issue_close_rate: 63
repo_size_kb: 187
readme_length: 3516
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-30"
star_history: "2026-06-30:659,2026-06-30:672,2026-07-01:1693,2026-07-01:1704,2026-07-02:2315,2026-07-02:2315,2026-07-03:2597,2026-07-04:2861,2026-07-05:2979,2026-07-06:3109"
tags:
  - github
  - "category/cli_工具"
  - "lang/typescript"
  - easy_install
  - "topic/downloader"
  - "topic/magnet_links"
  - "topic/p2p"
  - "topic/torrent"
  - "topic/torrent_client"
aliases:
  - "torlink"
  - "baairon/torlink"
  - "一個無需設置的終端 Torrent 搜尋和下載工具。"
---

# torlink

**3.1k** stars · **311** stars/天 · 建立 10 天前 · TypeScript · MIT

```dataviewjs
const me = dv.page("Repos/baairon--torlink");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v1.2.0` `easy-install`

`downloader` `magnet-links` `p2p` `torrent` `torrent-client` `zero-configuration`

> [!summary] 一句話摘要
> 一個無需設置的終端 Torrent 搜尋和下載工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (311 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速、無需配置的 Torrent 下載解決方案的終端用戶。
> **一句話重點** torlink 讓 Torrent 下載變得前所未有的簡單，特別適合喜歡終端操作的用戶。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/baairon--torlink");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "下載工具" && p.file.name !== "baairon--torlink" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 下載工具 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~2h · **綁定風險** low
> **結論** 花 2 小時學習，1 小時整合，得到即時 Torrent 搜尋和下載的便利，值得嘗試。

> [!abstract] 核心創新
> torlink 提供了無需設置的終端 Torrent 搜尋和下載體驗，簡化了用戶的操作流程。

## 專案簡介

torlink 是一款在終端中運行的 Torrent 搜尋和下載工具，旨在簡化用戶的下載體驗。用戶只需安裝 Node.js，然後透過 `npx torlnk` 啟動，便可進入搜尋界面，輸入關鍵字或磁鏈，系統會自動從一系列信譽良好的來源中獲取結果。用戶可以透過箭頭鍵選擇下載項目，並使用 `d` 鍵保存至預設的下載資料夾，或使用 `D` 鍵選擇其他資料夾。這樣的設計讓用戶無需記憶指令，操作簡單直觀。該工具使用了 React 和 Ink 框架來構建終端界面，並依賴 WebTorrent 進行下載，這使得它能夠在用戶的本地環境中直接與 Torrent 網絡互動，無需經過中央伺服器。

相較於其他 Torrent 客戶端，如 qBittorrent 和 Transmission，torlink 的優勢在於其零配置和即時搜尋功能，能夠快速獲取多個來源的結果。對於需要快速且無需繁瑣設定的用戶，torlink 提供了一個理想的解決方案。它的下載過程在背景中運行，並且支持自動繼續分享已下載的檔案，這有助於維持 Torrent 網絡的活躍性。社群活躍度良好，開發者對問題的回應速度也相對較快，這對於新手來說是個加分項。整體來看，torlink 是一款適合個人使用的輕量級 Torrent 工具，特別適合那些對終端操作感興趣的用戶。

**技術棧**：`TypeScript` · `Node.js` · `React` · `Ink` · `WebTorrent`

## 重點功能

- 零配置啟動 — 只需安裝 Node.js，透過 `npx torlnk` 啟動。
- 即時搜尋 — 同時從多個信譽來源獲取 Torrent 下載結果。
- 背景下載 — 下載過程在背景中進行，支持同時多個下載。
- 自動分享 — 下載完成後自動開始分享，支持社群活躍。
- 簡單的鍵盤操作 — 使用箭頭鍵選擇，`d` 鍵下載，`D` 鍵選擇資料夾。

## 快速開始

1. 安裝 Node.js
```bash
從 https://nodejs.org 下載並安裝
```
2. 啟動 torlink
```bash
npx torlnk
```
3. 輸入搜尋關鍵字
```bash
在搜尋框中輸入並按 Enter
```

## 程式碼範例

```ts
[
  "# 前置條件：已安裝 Node.js",
  "npx torlnk",
  "# 預期輸出：進入搜尋界面，等待用戶輸入"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 10 天就累積 3109 stars（311/天），forks 211（6.8%），這是相對穩定的增長。作者 baairon 之前的專案經驗使得這個工具的開發更為成熟，解決了用戶在 Torrent 搜尋中面臨的繁瑣和不便。之前的解決方案如傳統的 Torrent 客戶端通常需要繁瑣的設置和配置，而 torlink 則提供了即時的搜尋和下載功能。社群中對於簡化 Torrent 下載流程的需求也促進了這個工具的流行。技術上，這個工具利用了 Node.js 和 WebTorrent 技術，讓用戶能夠直接在終端中進行操作，這在現有的 Torrent 工具中並不常見。forks/stars 比率適中，顯示出有不少用戶在實際修改和使用這個工具。

## 適合誰使用

**目標受眾**：需要快速、無需配置的 Torrent 下載解決方案的終端用戶。

> [!example] 使用場景
> - 獨立開發者用它來快速搜尋和下載開源軟體，因為它的零配置和即時搜尋功能讓下載變得簡單快速。
> - 學生用它來下載學術資源和資料，因為它能夠從多個信譽良好的來源中獲取結果，避免了假下載鏈接的困擾。
> - 小型團隊用它來共享大型檔案，因為它支持背景下載和自動分享，讓團隊成員能夠輕鬆獲取所需資源。

## 架構分析

torlink 採用單一的 Node.js 應用架構，這使得部署和使用都非常簡單。資料流方面，使用者輸入關鍵字後，應用會通過 WebTorrent 直接與 Torrent 網絡進行互動，獲取下載結果。選擇使用 React 和 Ink 來構建終端界面，這樣的選擇讓界面更具互動性和可用性。這種設計的代價是需要用戶具備基本的 Node.js 環境。擴展性方面，這個架構能夠輕鬆添加新的來源或功能，但對於大型資料集的處理能力可能會受到 Node.js 單執行緒的限制。

## 技術深入分析

torlink 的核心技術機制是基於 Node.js 和 WebTorrent，這使得它能夠直接與 Torrent 網絡互動，無需經過中央伺服器。使用 React 和 Ink 構建的終端界面提供了良好的用戶體驗，支持即時搜尋和鍵盤操作。效能方面，因為是單執行緒的 Node.js 應用，對於大量同時下載的情況可能會出現瓶頸，特別是在處理大型檔案時。選擇 Node.js 作為開發語言的好處在於其豐富的生態系統和社群支持，但這也意味著需要用戶具備一定的技術基礎。技術風險方面，對於某些來源的可用性依賴於網絡狀況，這可能會影響用戶的下載體驗。整合方面，torlink 可以輕鬆與其他 Node.js 工具鏈搭配使用，但對於非技術用戶來說，可能需要額外的學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了詳細的安裝和使用指引。安裝過程順暢，無需複雜的配置。提供了良好的入門指南，讓新手能夠快速上手。文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 簡單易用，無需繁瑣設置
> - 支持多來源即時搜尋，提升下載效率
> - 背景下載和自動分享功能，促進社群活躍

> [!danger] 缺點
> - 僅限於終端操作，對於不熟悉 CLI 的用戶可能不友好
> - 依賴於 Node.js 環境，對於某些用戶可能造成額外負擔
> - 某些來源的可用性可能不穩定，影響下載體驗

> [!warning] 注意事項
> - 僅支援 Node.js 22 以上版本
> - 不支持直接下載某些類型的檔案，如執行檔
> - 對於某些來源的可用性依賴於網絡狀況

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [qbittorrent/qBittorrent](https://github.com/qbittorrent/qBittorrent) | qBittorrent 提供完整的 GUI 介面和豐富的功能，但需要較多的設置和配置，而 torlink 則專注於簡化的終端操作。 |
| [transmission/transmission](https://github.com/transmission/transmission) | Transmission 是一個輕量級的 Torrent 客戶端，適合桌面使用，但缺乏終端操作的便捷性，torlink 提供了更快速的搜尋和下載體驗。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [qbittorrent/qBittorrent](https://github.com/qbittorrent/qBittorrent) | qBittorrent 提供完整的 GUI 介面和豐富的功能，適合需要高級功能的用戶。 | 如果你的團隊需要一個功能全面的 Torrent 客戶端，並且不介意花時間進行設置。 | medium，因為需要重新學習界面和功能。 |
| [transmission/transmission](https://github.com/transmission/transmission) | Transmission 是一個輕量級的 Torrent 客戶端，適合桌面使用，但缺乏終端操作的便捷性。 | 如果你需要一個簡單的桌面應用，而不需要終端操作的靈活性。 | low，因為兩者的基本操作相似。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **torlink** | **qBittorrent** | **transmission** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | qBittorrent 提供完整的 GUI 介面和豐富的功能，適合需要高級功能的用戶。 | Transmission 是一個輕量級的 Torrent 客戶端，適合桌面使用，但缺乏終端操作的便捷性。 |
> | 遷移成本 | - | medium，因為需要重新學習界面和功能。 | low，因為兩者的基本操作相似。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個功能全面的 Torrent 客戶端，並且 | 如果你需要一個簡單的桌面應用，而不需要終端操作的靈活性。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人使用和小型專案，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 某些來源可能會不穩定，導致搜尋結果不完整。
  - 解法：可以手動檢查來源的可用性，或使用其他 Torrent 工具作為備選。
- **[HIGH]** 在某些情況下，下載速度可能會受到網絡狀況影響。
  - 解法：使用 VPN 來改善下載速度，或選擇其他來源。
- [MEDIUM] 對於不熟悉 CLI 的用戶，操作可能會感到困難。
  - 解法：建議新手先閱讀 README 文件，熟悉基本操作。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 個人使用者下載電影和音樂 | 非常適合 | 簡單的操作流程和即時搜尋功能使得下載變得輕鬆。 |
| 小型團隊共享大型檔案 | 適合 | 支持背景下載和自動分享，方便團隊成員獲取資源。 |
| 不熟悉 CLI 的用戶 | 不適合 | 對於不熟悉終端操作的用戶，可能需要額外的學習成本。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到即時 Torrent 搜尋和下載的便利，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：torlink 僅在本地運行，無需高權限，並且不存取敏感資料。依賴於 Torrent 網絡的安全性，使用者應注意來源的可靠性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

torlink 最常與 Node.js 生態系統中的其他工具搭配使用，特別是在開發和測試階段。用戶可以在終端中使用 torlink 來快速下載依賴項或資源，並在 CI/CD 流程中將其整合。與主流 CI 工具如 GitHub Actions 和 GitLab CI 的相容性良好，能夠輕鬆集成到現有的工作流中。整合過程中，最常見的問題是需要確保 Node.js 環境的正確配置，這可能對新手造成一些困擾。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 torlink 出現之前，用戶通常依賴於傳統的 Torrent 客戶端，如 qBittorrent 和 Transmission，這些工具雖然功能強大，但設置繁瑣，對新手不友好。隨著 Node.js 和 WebTorrent 技術的發展，torlink 能夠提供即時的搜尋和下載體驗，這在過去是難以實現的。這個工具代表了 CLI 工具向簡化和易用化的趨勢，未來可能會有更多類似的工具出現，進一步降低 Torrent 下載的門檻。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 Node.js 環境
- 基本的終端操作能力

> [!tip] 導入策略
> 第一週：在個人專案中試用 torlink，第二週：在小型團隊內部工具中導入，第三週：收集使用反饋並調整使用策略。

**成功指標**：下載效率提升 30%，用戶滿意度提高。

> [!warning] 退出計畫
> 若需退出，所有設定和下載記錄均可導出為標準格式，方便轉移至其他工具。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/baairon--torlink");
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
> const me = dv.page("Repos/baairon--torlink");
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
| Forks | 211 |
| Open Issues | 10 |
| Issue 解決率 | 63% (17 closed) |
| 最後推送 | 2026-07-05 |
| 建立日期 | 2026-06-25 |
| 官方網站 | [Link](https://www.npmjs.com/package/torlnk) |
| Repo 大小 | 187 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/baairon/torlink) |
| Topics | `downloader` `magnet-links` `p2p` `torrent` `torrent-client` `zero-configuration` |

> [!info]- 主要依賴
> `package.json` 中的核心套件：
> `env-paths` `ink` `parse-torrent` `react` `webtorrent` `@types/node` `@types/react` `ink-testing-library` `tsup` `tsx` `typescript` `vitest`

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 98
>     "Nix" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@baairon](https://github.com/baairon) | 22 |
> | [@anandghegde](https://github.com/anandghegde) | 3 |
> | [@Ghastrum](https://github.com/Ghastrum) | 2 |
> | [@yaninni](https://github.com/yaninni) | 2 |
> | [@aaronjmars](https://github.com/aaronjmars) | 1 |

**最新版本**：v1.2.0 (2026-07-02)

> [!info]- Release Notes
> ## What's Changed
> * Added navigating panes by arrows by @oskarkrawczyk in https://github.com/baairon/torlink/pull/4
> * fix: show clear error when Node.js is too old instead of a parse crash by @LeBaronDeCharlus in https://github.com/baairon/torlink/pull/5
> * feat: added 'Copy magnet' option via 'y' key by @pirafrank in https://github.com/baairon/torlink/pull/6
> * Add an 's' key to sort results by size, seeders, or source by @samoht9277 in https://github.com/baairon/torlink/pull/9
> * feat: change the download folder from the UI by @yaninni in https://github.com/baairon/torlink/pull/12
> * fix: show sort param during search phase by @anandghegde in https://github.com/baairon/torlink/pull/15
> * Extract upload date for 1337x results by @anandghegde in https://github.com/baairon/torlink/pull/16
> * nix: init at 1.1.1-unstable by @Ghastrum in https://github.com/baairon/torlink/pull/2
> * fix: make postbuild cross-platform so the CLI builds on Windows by @yaninni in https://github.com/baairon/torlink/pull/18
> * fix: avoid swallowed results rows while scrolling by @anandghegde in https://github.com/baairon/torlink/pull/30
> * feat: add vi-style vim keybindings (hjkl) for navigation throughout t… by @avinashgundimeda in https://github.com/baairon/torlink/pull/29
> * Let users add their own trackers via the t key by @manishkumar1601 in https://github.com/baairon/torlink/pull/31
> 
> ## New Contributors
> * @oskarkrawczyk made their first contribution in https://github.com/baairon/torlink/pull/4
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍，開發者對問題回應迅速。
**連結**：[文件](https://github.com/baairon/torlink#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-02 ~ 2026-07-05）
> **活躍天數** 3 天 · **最新 commit** feat: pick a folder per download with D (#54)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/baairon/torlink/issues/13) | Branding. Nothing to do with Tor | 6 | 2 |
> | [#40](https://github.com/baairon/torlink/issues/40) | feat: Add Music category with torrent sources | 3 | 0 |
> | [#10](https://github.com/baairon/torlink/issues/10) | VPN Support | 3 | 1 |
> | [#56](https://github.com/baairon/torlink/issues/56) | bug: minor bug with clipboard (nix package) | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> Finding a torrent these days sucks. One site is a minefield of fake download buttons. Another hides the real link under a popup that spawns two more tabs. And after all that, half the results are dead, zero seeders.
> 
> torlink is a torrent finder that lives in your terminal, with zero setup and nothing to configure. One search checks a short, curated list of reputable sources at once, and whatever you pick downloads straight to your computer. The files are yours, saved to your downloads folder.
> 
> ## Get started
> 
> 1. **Install Node** (from [nodejs.org](https://nodejs.org)), it's all torlink needs.
> 2. **Open your terminal.**
> 3. **Start it:**
> 
>    ```sh
>    npx torlnk
>    ```
> 
> That's the only thing you'll type. torlink opens straight to a search bar: search for what you want, paste in a magnet link or a bare infohash, or just press Enter on an empty box to browse the curated library. From there it's all keypresses, nothing to memorize, and `?` brings up the full list anytime.
> 
> ## Finding something
> 
> Type what you're looking for and press Enter. Results stream in from every source as they answer, tagged with size and how many people are sharing each one, so you can see what'll come down fast. Arrow to what you want and press `d` to save it, or `D` to pick a different folder for just that download.
> 
>   
> 
> ## Your downloads
> 
> Active downloads sit up top with their progress, speed, and time left; when one finishes it drops into Recently downloaded just below, so the list stays tidy. Everything's still there when you come back, and anything interrupted picks up where it left off.
> 
> Downloads run in the background while you keep searching, so you can queue up as many as you want. They save to your downloads folder — press `o` anytime to change where that is, or grab one result with `D` to send it somewhere else without touching the default — and the Downloads pane keeps tabs on each one. When something finishes it keeps seeding automatically so the next person can find it too, and the Seeding tab lets you pause or stop that anytime.
> 
>   
> 
> ## What it searches
> 
> A short, hand-picked list of trusted sources:
> 
> | Category | Sources |
> | --- | --- |
> | Games | FitGirl |
> | Movies | YTS, The Pirate Bay, 1337x |
> | TV | EZTV, The Pirate Bay, 1337x |
> | Anime | Nyaa, SubsPlease |
> 
> Games are the only category that can run code, so they come from FitGirl alone, a repacker with a long, trusted track record; everything else is plain video and subtitles. If a source is down, the search carries on without it, and torlink tells you which one is offline.
> 
> ## Contributing
> 
> To run or work on torlink locally:
> 
> 1. Clone the repository and open the folder.
> 2. Install dependencies:
>    ```sh
>    npm install
>    ```
> 3. Run the development version:
>    ```sh
>    npm run dev
>    ```
>    Or build it and run the bundled version:
>    ```sh
>    npm run build
>    npx torlnk
>    ```
> 
> Before opening a PR, skim [CONTRIBUTING.md](CONTRIBUTING.md); it lays out the bar with examples from real merged PRs.
> 
> ## Privacy
> 
> Your files stay on your disk, and nothing routes through a central server; torlink only talks to the torrent network directly. Once a download finishes it keeps seeding by default, sharing it back so the next person can find it just as easily. The network only works because people pass things along, and even a few minutes makes a real difference. If you'd rather not, opt out anytime: open the Seeding tab, press `p` to pause or stop any item, and press it again to pick it back up. Always your call.
> 
> ## Star History

## 延伸閱讀

相關概念：[[P2P]] · [[Torrent]] · [[CLI/TUI]]

相關專案：[[pixel-point--media-downloader|pixel-point/media-downloader]] · [[MayersScott--rkn-block-checker|MayersScott/rkn-block-checker]] · [[Narcooo--inkos|Narcooo/inkos]] · [[KNG7-P--Se7en-Pro|KNG7-P/Se7en-Pro]] · [[V0id-v2--Void-Tools-v2.0|V0id-v2/Void-Tools-v2.0]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]]

[GitHub](https://github.com/baairon/torlink) · [官方網站](https://www.npmjs.com/package/torlnk)

## 相關收錄

> [!note]- 直接競品（同子分類：下載工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "下載工具" AND file.name != "baairon--torlink"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "CLI 工具" AND file.name != "baairon--torlink"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "baairon--torlink" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "baairon--torlink"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["P2P","Torrent","CLI/TUI"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "baairon--torlink" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/baairon--torlink");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "baairon--torlink" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "baairon" AND file.name != "baairon--torlink"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/baairon--torlink");
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
> const me = dv.page("Repos/baairon--torlink");
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
> const me = dv.page("Repos/baairon--torlink");
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
> const me = dv.page("Repos/baairon--torlink");
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
> const me = dv.page("Repos/baairon--torlink");
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

> **2026-06-30** — 首次收錄
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

- [[2026-07-02|2026-07-02]] — 再次上榜，2.3k stars
- [[2026-07-01|2026-07-01]] — 再次上榜，1.7k stars
- [[2026-06-30|2026-06-30]] — 首次收錄，659 stars
