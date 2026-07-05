---
repo: baairon/torlink
url: https://github.com/baairon/torlink
owner: baairon
owner_type: User
language: TypeScript
license: MIT
description: "A sleek, zero-setup torrent finder and downloader that lives right in your terminal."
homepage: "https://www.npmjs.com/package/torlnk"
stars: 2979
stars_per_day: 331
forks: 199
open_issues: 14
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
use_case: "在終端機中輕鬆找到和下載 torrent，無需任何設置。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 3
next_review: "2026-07-05"
contributor_count: 5
engagement: "low"
issue_close_rate: 50
repo_size_kb: 167
readme_length: 3329
bus_factor: 1
last_release_days: 3
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-06-30"
star_history: "2026-06-30:659,2026-06-30:672,2026-07-01:1693,2026-07-01:1704,2026-07-02:2315,2026-07-02:2315,2026-07-03:2597,2026-07-04:2861,2026-07-05:2979"
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
  - "在終端機中輕鬆找到和下載 torrent，無需任何設置。"
---

# torlink

**3.0k** stars · **331** stars/天 · 建立 9 天前 · TypeScript · MIT

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
> 在終端機中輕鬆找到和下載 torrent，無需任何設置。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Hot (331 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 2 天前) · **貢獻者** 5+ 人 · **參與度** Low
> **適合** 需要快速查找和下載 torrent 的終端用戶，尤其是不想安裝完整桌面應用的開發者和學生。
> **一句話重點** 這個工具的最大優勢在於其零設置的使用體驗，讓 torrent 查找變得前所未有的簡單。

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
> **結論** 花 1 小時學習和 1 小時整合，得到快速查找和下載的效果，值得使用。

> [!abstract] 核心創新
> 提供零設置的 torrent 查找和下載體驗，直接在終端中操作。

## 專案簡介

torlink 是一個在終端機中運行的 torrent 查找和下載工具，無需任何設置。用戶只需執行 `npx torlnk`，即可進入搜尋界面，輸入關鍵字或粘貼 magnet 連結，系統會從一系列經過篩選的來源中返回結果。用戶可以查看每個 torrent 的大小和分享者數量，選擇後按 `d` 下載，下載過程在背景中進行，並可隨時查看進度。這個工具的賣點在於其簡單性和高效性，特別適合不想花時間在繁瑣網站上的用戶。技術上，它使用 TypeScript 和 React，並依賴於 WebTorrent 進行下載，這使得它在處理 torrent 時非常輕量且快速。

相較於其他 torrent 客戶端，如 qBittorrent 和 Transmission，torlink 的優勢在於其零配置的使用體驗，適合快速查找和下載，而不需要安裝完整的桌面應用。這使得它在小型專案或臨時需求中非常有用。使用者可以在下載完成後選擇自動分享，這對於維護 torrent 生態系統尤為重要。儘管如此，對於需要更複雜功能的用戶，可能會覺得 torlink 的功能較為簡單。整體來看，這是一個適合個人使用的輕量級工具，特別是在需要快速查找和下載時。

**技術棧**：`TypeScript` · `React` · `WebTorrent`

## 重點功能

- 零設置 — 用戶只需執行 `npx torlnk` 即可開始使用。
- 多來源搜索 — 同時查詢多個可信來源，快速獲得結果。
- 背景下載 — 下載過程在背景進行，允許用戶繼續搜索其他內容。
- 自動分享 — 下載完成後自動開始分享，支持 torrent 生態系統。
- 簡單的鍵盤操作 — 使用者可以通過簡單的鍵盤快捷鍵進行操作，無需記憶複雜指令。

## 快速開始

1. 安裝 Node.js
```bash
從 https://nodejs.org 下載並安裝 Node.js
```
2. 啟動 torlink
```bash
npx torlnk
```

## 程式碼範例

```ts
{
  "前置條件": "需要安裝 Node.js",
  "指令": "npx torlnk",
  "預期輸出": "進入搜尋界面，等待用戶輸入關鍵字或粘貼 magnet 連結。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 9 天內已累積 2979 stars（331/天），forks 199（6.7%），顯示出強勁的增長潛力。作者 baairon 之前有開發其他開源工具，這次專案解決了 torrent 查找過程中的繁瑣問題，提供了一個簡單的 CLI 解決方案。這個工具的出現正好滿足了用戶對於快速、無需設置的 torrent 下載需求，並且在社群中引起了討論，特別是關於其與 Tor 的品牌混淆問題。隨著 CLI 工具的流行，這樣的工具越來越受到開發者的青睞，尤其是在需要快速解決問題的場景中。

## 適合誰使用

**目標受眾**：需要快速查找和下載 torrent 的終端用戶，尤其是不想安裝完整桌面應用的開發者和學生。

> [!example] 使用場景
> - 獨立開發者用它來快速下載開發所需的資料檔案，因為不需要繁瑣的設置和配置，直接在終端中操作即可。
> - 學生用它來下載學術資源，因為能夠快速找到並下載需要的資料，節省了大量時間。
> - 遊戲玩家用它來下載遊戲安裝檔，因為可以直接從信任的來源快速獲取遊戲，避免了繁瑣的網站導航。

## 架構分析

torlink 採用單一的 CLI 架構，因為這樣可以減少用戶的學習成本和設置時間。用戶輸入關鍵字後，系統會通過 WebTorrent 協議直接與 torrent 網絡進行交互，這樣設計的好處是簡化了下載流程，並且避免了中間伺服器的延遲。資料流從用戶輸入到搜尋結果，再到下載，整個過程都是即時的。

選擇 CLI 而非 GUI 應用，能夠讓用戶在各種環境下輕鬆使用，尤其是在伺服器或無頭環境中。這樣的設計也使得工具的依賴性較低，僅需 Node.js 和一些輕量級的 npm 套件，利於快速部署和使用。整體來看，這樣的架構非常適合需要快速查找和下載的用戶，但對於需要更複雜功能的用戶可能會感到不足。

## 技術深入分析

torlink 的核心技術機制是基於 TypeScript 和 React 實現的 CLI 工具，這使得它在開發上具有良好的可維護性和擴展性。它使用 WebTorrent 協議進行下載，這意味著用戶的資料不會經過中央伺服器，而是直接與 torrent 網絡交互，這樣的設計提高了下載的效率和安全性。效能方面，torlink 能夠快速處理用戶的請求，並且在下載過程中不會佔用過多的系統資源，適合在各種環境下運行。選擇 TypeScript 和 React 使得開發者能夠利用現有的生態系統，並且能夠快速迭代功能。這個選擇的代價是需要 Node.js 的支持，這對於某些用戶來說可能是一個障礙。技術風險方面，隨著用戶數量的增加，可能會面臨更高的網絡負載，這對於下載速度和穩定性會有影響。整合方面，torlink 可以輕鬆與其他 CLI 工具鏈結合，並且支持在 CI/CD 環境中使用，這使得它在開發流程中非常友好。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含詳細的使用說明，安裝過程簡單順暢。提供了良好的入門指南，讓新手能夠快速上手。文件目前僅有英文，可能對非英語使用者造成一定的障礙。

## 優缺點分析

> [!success] 優點
> - 簡單易用，無需設置，適合快速查找和下載。
> - 支持多來源搜索，能夠快速獲得多個結果。
> - 背景下載功能，允許用戶同時進行多個下載。

> [!danger] 缺點
> - 功能相對簡單，對於高級用戶可能不夠靈活。
> - 僅支援 Node.js 22 以上版本，限制了使用者範圍。
> - 不支援 Windows 環境下的某些功能，可能影響部分用戶。

> [!warning] 注意事項
> - 僅支援 Node.js 22 以上版本
> - 對於需要高級功能的用戶可能不夠靈活
> - 不支援 Windows 環境下的某些功能

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [qbittorrent/qBittorrent](https://github.com/qbittorrent/qBittorrent) | qBittorrent 提供完整的桌面應用程式，支持更複雜的功能如 RSS 訂閱和遠端控制，而 torlink 則專注於簡單的 CLI 體驗。 |
| [transmission/transmission](https://github.com/transmission/transmission) | Transmission 是一個輕量級的桌面 torrent 客戶端，支持多平台，但需要安裝和配置，而 torlink 則無需設置，直接在終端使用。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [qbittorrent/qBittorrent](https://github.com/qbittorrent/qBittorrent) | qBittorrent 提供完整的桌面應用程式，支持更複雜的功能如 RSS 訂閱和遠端控制，而 torlink 則專注於簡單的 CLI 體驗。 | 如果需要更高級的功能和圖形界面來管理下載，qBittorrent 是更好的選擇。 | medium，因為需要重新適應 GUI 環境和功能。 |
| [transmission/transmission](https://github.com/transmission/transmission) | Transmission 是一個輕量級的桌面 torrent 客戶端，支持多平台，但需要安裝和配置，而 torlink 則無需設置，直接在終端使用。 | 如果需要跨平台支持和更穩定的桌面應用，Transmission 是更合適的選擇。 | medium，因為需要適應不同的使用方式和界面。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **torlink** | **qBittorrent** | **transmission** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | qBittorrent 提供完整的桌面應用程式，支持更複雜的功能如 RSS 訂閱和遠端控制，而 torlink 則專注於簡單的 CLI 體驗。 | Transmission 是一個輕量級的桌面 torrent 客戶端，支持多平台，但需要安裝和配置，而 torlink 則無需設置，直接在終端使用。 |
> | 遷移成本 | - | medium，因為需要重新適應 GUI 環境和功能。 | medium，因為需要適應不同的使用方式和界面。 |
> | 適用場景 | 主要場景 | 如果需要更高級的功能和圖形界面來管理下載，qBittorre | 如果需要跨平台支持和更穩定的桌面應用，Transmissio |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人使用和小型專案，但不建議用於生產環境的核心功能。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下執行時可能會遇到 'Segmentation fault' 錯誤
  - 解法：確保 Node.js 版本符合要求，並檢查系統環境。
- [MEDIUM] 某些來源可能會不穩定，導致查詢失敗
  - 解法：使用其他來源進行查詢，或手動檢查來源狀態。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司後端 API | 非常適合 | 簡單的 CLI 工具能快速集成，無需繁瑣的設置。 |
| 大型團隊需要穩定的下載工具 | 不適合 | 功能較為簡單，無法滿足高級需求。 |
| 學生需要快速下載學術資源 | 非常適合 | 快速查找和下載，無需安裝複雜的應用。 |
| 需要高級功能的 torrent 用戶 | 不適合 | 缺乏高級功能和圖形界面，可能無法滿足需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~1 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | low |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 1 小時學習和 1 小時整合，得到快速查找和下載的效果，值得使用。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，並且不會存取敏感資料，僅與 torrent 網絡直接交互。

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
| Forks | 199 |
| Open Issues | 14 |
| Issue 解決率 | 50% (14 closed) |
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

**社群活躍度**：社群活躍度中等，最近有多次提交和問題回應。
**連結**：[文件](https://github.com/baairon/torlink#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-30 ~ 2026-07-03）
> **活躍天數** 4 天 · **最新 commit** chore: update nix package 1.1.1 -> 1.2.0 (#41)

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/baairon/torlink/issues/13) | Branding. Nothing to do with Tor | 5 | 2 |
> | [#40](https://github.com/baairon/torlink/issues/40) | feat: Add Music category with torrent sources | 2 | 0 |
> | [#10](https://github.com/baairon/torlink/issues/10) | VPN Support | 2 | 1 |
> | [#52](https://github.com/baairon/torlink/issues/52) | Got 'Segmentation fault (core dumped)' when executing 'npx t | 0 | 0 |

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
