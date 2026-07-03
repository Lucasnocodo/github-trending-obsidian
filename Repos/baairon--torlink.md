---
repo: baairon/torlink
url: https://github.com/baairon/torlink
owner: baairon
owner_type: User
language: TypeScript
license: MIT
description: "A sleek, zero-setup torrent finder and downloader that lives right in your terminal."
homepage: "https://www.npmjs.com/package/torlnk"
stars: 2597
stars_per_day: 371
forks: 170
open_issues: 6
created: 2026-06-25
pushed_at: 2026-07-03
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
use_case: "一個無需設置的終端 torrent 搜尋和下載工具。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-05"
contributor_count: 5
engagement: "low"
issue_close_rate: 70
repo_size_kb: 167
readme_length: 3329
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-30"
star_history: "2026-06-30:659,2026-06-30:672,2026-07-01:1693,2026-07-01:1704,2026-07-02:2315,2026-07-02:2315,2026-07-03:2597"
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
  - "一個無需設置的終端 torrent 搜尋和下載工具。"
---

# torlink

**2.6k** stars · **371** stars/天 · 建立 7 天前 · TypeScript · MIT

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
> 一個無需設置的終端 torrent 搜尋和下載工具。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (371 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速搜尋和下載 torrent 的終端用戶，特別是喜歡命令行操作的人。
> **一句話重點** torlink 讓 torrent 下載變得簡單而快速，特別適合命令行愛好者。

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
> **成熟度** Beta (可試用) · **安裝** Easy (一行搞定) · **學習** ~1h · **綁定風險** low
> **結論** 花 1 小時學習和 1 小時整合，得到快速和簡單的 torrent 下載體驗，值得嘗試。

> [!abstract] 核心創新
> 提供一個無需設置的終端 torrent 搜尋和下載工具。

## 專案簡介

torlink 是一個終端中的 torrent 搜尋器，設計上不需要任何配置。使用者只需在終端中執行 `npx torlnk`，就能直接進入搜尋界面，輸入關鍵字或粘貼 magnet 連結，然後按 Enter 開始搜尋。搜尋結果會即時顯示，包括檔案大小和分享者數量，方便用戶選擇快速下載的檔案。下載過程中，用戶可以繼續搜尋，並且下載會在背景中運行，完成後會自動開始分享。這種設計使得使用者無需記憶指令，所有操作都可以通過簡單的鍵盤按鍵完成。

torlink 主要依賴於 `webtorrent` 和 `ink`，這些選擇使其在終端中提供流暢的用戶體驗，並且能夠即時處理 torrent 資料。相較於其他 torrent 客戶端，如 qBittorrent 和 Transmission，torlink 的優勢在於其零配置和終端友好性，適合喜歡命令行的用戶。對於需要快速搜尋和下載的情境，torlink 提供了簡單而高效的解決方案，但對於需要複雜功能的用戶，可能會感到功能不足。社群活躍度良好，開發者對於問題回應迅速，這對於使用者來說是一個加分項。整體來看，torlink 是一個穩定的選擇，適合小型團隊或個人使用，未來可能會增加更多功能以滿足不同需求。

**技術棧**：`TypeScript` · `Nix` · `JavaScript` · `webtorrent` · `ink`

## 重點功能

- 零配置 — 只需執行 `npx torlnk` 即可開始使用，無需任何設置。
- 即時搜尋 — 輸入關鍵字後，結果會即時顯示，並標示檔案大小和分享者數量。
- 背景下載 — 下載過程中可以繼續搜尋，並且下載會在背景運行。
- 自動分享 — 下載完成後會自動開始分享，幫助其他用戶。
- 簡單操作 — 使用鍵盤按鍵進行操作，無需記憶複雜指令。

## 快速開始

1. 安裝 Node.js
```bash
從 https://nodejs.org 下載並安裝 Node.js
```
2. 啟動 torlink
```bash
npx torlnk
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 7 天內累積 2597 stars（371/天），forks 170（6.5%），這顯示出穩定的增長趨勢。作者 baairon 之前參與過多個開源專案，這次專案解決了 torrent 下載過程中的繁瑣步驟，提供一個簡單的終端解決方案。近期在社群中引發討論，特別是對於其簡易性和隱私保護的特點。隨著對隱私的重視增加，這種工具的需求也隨之上升。forks/stars 比率顯示出用戶對於這個專案的實際修改意願，屬於中等水平。

## 適合誰使用

**目標受眾**：需要快速搜尋和下載 torrent 的終端用戶，特別是喜歡命令行操作的人。

> [!example] 使用場景
> - 獨立開發者用它來快速搜尋和下載開源軟體的 torrent，因為不需要任何配置，直接在終端中操作非常方便。
> - 小型團隊的成員用它來下載大型資料集，因為可以同時進行多個下載，並且下載完成後會自動開始分享。
> - 學生用它來尋找和下載學術資料的 torrent，因為可以快速找到可信的來源，並且節省了大量的搜尋時間。

## 架構分析

torlink 採用單一的終端應用架構，使用 TypeScript 和 Nix 來管理依賴和構建。資料流方面，使用 `webtorrent` 進行 torrent 下載，並透過 `ink` 提供終端用戶介面。這樣的設計使得應用程式能夠快速啟動並且保持輕量，適合快速搜尋和下載。選擇 TypeScript 提供了靜態類型檢查，減少了潛在的錯誤，但也增加了學習成本。整體上，這種架構在小型專案中表現良好，但隨著功能擴展，可能會面臨維護困難的挑戰。

## 技術深入分析

torlink 的核心技術機制是基於 `webtorrent`，這使得它能夠直接與 torrent 網絡進行互動，而不需要經過中央伺服器。這種設計不僅提高了隱私性，還減少了延遲。效能方面，torlink 可以同時處理多個下載，並且在背景中運行，這對於需要高效能的用戶來說是個優勢。選擇 TypeScript 作為開發語言，提供了靜態類型檢查，減少了錯誤的可能性，但也增加了學習曲線。對於依賴的管理，使用 Nix 使得環境的搭建變得簡單，但可能會對不熟悉 Nix 的用戶造成困擾。在技術風險方面，未來可能會面臨擴展性問題，特別是在功能增長的情況下。整合到現有的 CI/CD pipeline 中相對容易，但對於大型專案，可能需要額外的適配。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝和使用的具體步驟。安裝過程順暢，只需安裝 Node.js。沒有提供多語言支持，但文檔內容簡潔易懂，適合快速上手。

## 優缺點分析

> [!success] 優點
> - 使用簡單，無需配置，適合快速上手。
> - 背景下載功能，允許用戶同時進行多個下載。
> - 自動分享功能，促進 P2P 下載效率。

> [!danger] 缺點
> - 功能相對簡單，缺乏進階選項。
> - 僅支援特定 torrent 來源，可能無法滿足所有需求。
> - 完全依賴終端操作，對於不熟悉命令行的用戶不友好。

> [!warning] 注意事項
> - 僅支援 Node.js 版本 >= 22。
> - 不支援圖形介面，完全依賴終端操作。
> - 目前僅支持特定的 torrent 來源，功能較為簡單。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [qbittorrent/qBittorrent](https://github.com/qbittorrent/qBittorrent) | 提供完整的 GUI 和更多進階功能，如 RSS 支持和廣播功能，適合需要複雜功能的用戶。 |
| [transmission/transmission](https://github.com/transmission/transmission) | 輕量級的 torrent 客戶端，支持 Web 界面，但需要更多配置，對於喜歡命令行的用戶不如 torlink 方便。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [qbittorrent/qBittorrent](https://github.com/qbittorrent/qBittorrent) | 提供完整的 GUI 和進階功能，適合需要複雜操作的用戶。 | 如果你的團隊需要 GUI 和更多進階功能，qbittorrent 是更好的選擇。 | medium，因為需要重新學習 GUI 操作。 |
| [transmission/transmission](https://github.com/transmission/transmission) | 輕量級的 torrent 客戶端，支持 Web 界面，但需要更多配置。 | 如果你需要一個輕量級的解決方案，並且不介意進行配置，transmission 是不錯的選擇。 | medium，因為需要重新配置下載環境。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **torlink** | **qBittorrent** | **transmission** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供完整的 GUI 和進階功能，適合需要複雜操作的用戶。 | 輕量級的 torrent 客戶端，支持 Web 界面，但需要更多配置。 |
> | 遷移成本 | - | medium，因為需要重新學習 GUI 操作。 | medium，因為需要重新配置下載環境。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要 GUI 和更多進階功能，qbittorre | 如果你需要一個輕量級的解決方案，並且不介意進行配置，tran |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型專案試用，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在 macOS 上下載時可能會遇到 EADDRINUSE 錯誤，導致下載崩潰。
  - 解法：檢查是否有其他應用佔用 UDP 5350 端口，必要時關閉其他應用。
- [MEDIUM] 某些 torrent 來源可能會不穩定，導致搜尋結果不完整。
  - 解法：手動檢查來源的可用性，並在搜尋時選擇其他來源。
- [MEDIUM] 對於不熟悉命令行的用戶，操作可能會感到困難。
  - 解法：建議提供簡單的使用指南或視頻教程。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 個人用戶在家中下載電影和音樂 | 非常適合 | 簡單易用，無需配置，適合快速下載。 |
| 小型團隊需要下載大型資料集 | 適合 | 支持多個同時下載，能夠有效利用帶寬。 |
| 企業環境中需要穩定的下載工具 | 不適合 | 缺乏進階功能和穩定性，可能不符合企業需求。  |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~1 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 1 小時學習和 1 小時整合，得到快速和簡單的 torrent 下載體驗，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：不需要高權限，所有檔案都保存在本地，並且不經過中央伺服器。對於 torrent 網絡的直接連接，使用者需自行評估風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

torlink 最常與 Node.js 環境搭配使用，適合在開發或個人項目中進行下載。在一個使用 Node.js 的專案中，可以通過 `npx torlnk` 直接啟動，並在終端中進行搜尋和下載。對於 CI/CD pipeline 的整合，torlink 可以作為一個簡單的下載工具，但需要注意與其他工具的兼容性。常見的整合問題包括依賴版本不一致，建議在使用前檢查相關依賴。

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
| Forks | 170 |
| Open Issues | 6 |
| Issue 解決率 | 70% (14 closed) |
| 最後推送 | 2026-07-03 |
| 建立日期 | 2026-06-25 |
| 官方網站 | [Link](https://www.npmjs.com/package/torlnk) |
| Repo 大小 | 167 KB |
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
>     "JavaScript" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@baairon](https://github.com/baairon) | 22 |
> | [@anandghegde](https://github.com/anandghegde) | 3 |
> | [@Ghastrum](https://github.com/Ghastrum) | 2 |
> | [@yaninni](https://github.com/yaninni) | 2 |
> | [@avinashgundimeda](https://github.com/avinashgundimeda) | 1 |

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

**社群活躍度**：社群活躍，問題回應迅速。
**連結**：[文件](https://github.com/baairon/torlink#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-30 ~ 2026-07-03）
> **活躍天數** 4 天 · **最新 commit** chore: update nix package 1.1.1 -> 1.2.0 (#41)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/baairon/torlink/issues/13) | Branding. Nothing to do with Tor | 4 | 2 |
> | [#10](https://github.com/baairon/torlink/issues/10) | VPN Support | 1 | 1 |
> | [#40](https://github.com/baairon/torlink/issues/40) | feat: Add Music category with torrent sources | 0 | 0 |
> | [#22](https://github.com/baairon/torlink/issues/22) | macOS: Download crashes with EADDRINUSE on UDP port 5350 | 0 | 2 |

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
> Type what you're looking for and press Enter. Results stream in from every source as they answer, tagged with size and how many people are sharing each one, so you can see what'll come down fast. Arrow to what you want and press `d` to save it.
> 
>   
> 
> ## Your downloads
> 
> Active downloads sit up top with their progress, speed, and time left; when one finishes it drops into Recently downloaded just below, so the list stays tidy. Everything's still there when you come back, and anything interrupted picks up where it left off.
> 
> Downloads run in the background while you keep searching, so you can queue up as many as you want. They save to your downloads folder, and the Downloads pane keeps tabs on each one. When something finishes it keeps seeding automatically so the next person can find it too, and the Seeding tab lets you pause or stop that anytime.
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

相關概念：[[P2P]] · [[CLI/TUI]] · [[自動化]]

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
> const concepts = ["P2P","CLI/TUI","自動化"];
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
