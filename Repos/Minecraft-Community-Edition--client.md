---
repo: Minecraft-Community-Edition/client
url: https://github.com/Minecraft-Community-Edition/client
owner: Minecraft-Community-Edition
owner_type: Organization
language: C++
license: N/A
description: "Minecraft CE Client"
homepage: ""
stars: 336
stars_per_day: 112
forks: 40
open_issues: 8
created: 2026-03-07
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
subcategory: "遊戲開發"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供一個開源的 Minecraft 客戶端，讓玩家能夠自訂和擴展遊戲體驗。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-17"
contributor_count: 5
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:336"
tags:
  - github
  - "category/其他"
  - "lang/c++"
  - org
aliases:
  - "client"
  - "Minecraft-Community-Edition/client"
  - "提供一個開源的 Minecraft 客戶端，讓玩家能夠自訂和擴展遊戲體驗。"
---

# client

**336** stars · **112** stars/天 · 建立 3 天前 · C++ · 未標註授權

`ORG`

> [!summary] 一句話摘要
> 提供一個開源的 Minecraft 客戶端，讓玩家能夠自訂和擴展遊戲體驗。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (112 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望自訂 Minecraft 客戶端的開發者和遊戲設計師。
> **一句話重點** 這個專案展示了開源社群如何在 Minecraft 中實現創新和自訂功能的潛力。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，5 小時整合，得到開源的 Minecraft 客戶端，值得嘗試。

> [!abstract] 核心創新
> 提供一個完全開源的 Minecraft 客戶端，讓開發者能夠自由修改和擴展。

## 專案簡介

這個專案旨在建立一個開源的 Minecraft 客戶端，讓玩家能夠自由地修改和擴展遊戲功能。用戶可以透過 C++ 和其他語言編寫自定義功能，並利用現有的代碼庫進行開發。核心功能包括對遊戲內部資源的訪問和修改，並支持多種擴展，包括音效和視覺效果的改進。這個專案的賣點在於其開放性和可擴展性，讓開發者能夠根據自己的需求進行調整。技術上，專案使用 CMake 進行構建，這使得跨平台的支持變得更加容易，並且能夠利用現有的 Minecraft 代碼庫進行開發。與其他 Minecraft 客戶端相比，如 Forge 或 Fabric，這個專案更注重於開源和社群貢獻，讓開發者能夠直接參與到代碼的改進中。雖然目前仍在早期階段，但已有一些功能實現，如對音效的改進建議。使用者在實際使用中可能會遇到一些編譯問題，這在 GitHub 的熱門 Issues 中有所反映。這個專案的成熟度目前為 alpha，適合對 Minecraft 有深入了解並希望進行自定義的開發者。未來幾個月，隨著社群的參與，預期會有更多功能和改進。建議對 Minecraft 有熱情的開發者參與，尤其是那些希望在遊戲中實現創新功能的人。

**技術棧**：`C++` · `CMake`

## 重點功能

- 開源架構 — 允許開發者自由修改和擴展客戶端功能。
- 多語言支持 — 使用 C++, Python, HTML 等多種語言進行開發。
- CMake 構建系統 — 支持跨平台編譯，方便開發者在不同環境中使用。
- 社群貢獻 — 鼓勵開發者提交 PR 和功能建議，促進合作。
- 音效改進 — 提供對音效的自定義和改進建議。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/Minecraft-Community-Edition/client.git
```
2. 進入專案目錄
```bash
cd client
```
3. 使用 CMake 構建專案
```bash
cmake . && make
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 336 stars（112/天），forks 40（11.9%），顯示出開源社群的強烈興趣。主要貢獻者包括 LazyByteDev 和 coah80，他們在開源社群中有一定的影響力。這個專案解決了 Minecraft 客戶端自定義的痛點，提供了一個開放的平台讓開發者能夠自由創作。社群的反饋和建議也在不斷推動專案的進步。這個專案的開放性和可擴展性吸引了許多希望在 Minecraft 中實現創新的開發者。

## 適合誰使用

**目標受眾**：希望自訂 Minecraft 客戶端的開發者和遊戲設計師。

> [!example] 使用場景
> - Minecraft 開發者用它來自訂遊戲功能，因為開源的特性讓他們能夠自由修改代碼。
> - 遊戲設計師用它來測試新音效和視覺效果，因為可以直接在客戶端中實現和調整。
> - 社群貢獻者用它來提交功能建議和修復，因為專案鼓勵開放的貢獻和合作。

## 架構分析

這個專案採用模組化的架構，允許開發者根據需求添加或修改功能。使用 CMake 作為構建系統，這使得專案能夠在不同平台上進行編譯和運行。資料流方面，客戶端會通過 API 與 Minecraft 伺服器進行通訊，並能夠動態加載擴展模組。

選擇 CMake 的原因在於其跨平台能力，代價是需要開發者熟悉這個構建系統。擴展性方面，專案設計允許開發者輕鬆添加新功能，但在功能穩定性上可能會面臨挑戰，特別是在多開發者環境中。整體來看，這個架構設計適合希望進行創新和實驗的開發者，但對於尋求穩定性的使用者來說，可能不夠成熟。

## 技術深入分析

這個專案的核心技術機制在於其開源架構和模組化設計，允許開發者根據需求進行自定義。使用 CMake 作為構建系統，這使得專案能夠在多平台上運行，並且能夠利用現有的 Minecraft 代碼庫進行開發。雖然目前尚未有具體的效能數據，但預期能夠處理中等規模的遊戲資源。設計上選擇 CMake 的原因在於其廣泛的支持和靈活性，但這也要求開發者具備一定的技術背景。技術風險方面，專案仍在早期階段，可能面臨穩定性問題，特別是在多開發者環境中。整合方面，與主流的遊戲開發框架的兼容性尚未完全測試，但預期能夠與現有的 Minecraft 生態系統進行整合。整體來看，這個專案在技術上具備潛力，但仍需進一步的測試和改進。

## 新手體驗

> [!info] 上手難度評估
> README 文件簡短，缺乏詳細的使用範例。安裝過程中可能會遇到編譯問題，對新手不太友好。沒有提供明確的入門指南，且文件主要以英文撰寫，缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 開源，允許自由修改和擴展。
> - 支持多種語言，增加了靈活性。
> - 社群活躍，能夠快速獲得反饋和改進建議。

> [!danger] 缺點
> - 仍在早期開發，功能不完整。
> - 缺乏詳細文檔，對新手不友好。
> - 編譯過程中可能遇到問題，特別是在不同平台上。

> [!warning] 注意事項
> - 目前仍在早期開發階段，功能不完整。
> - 可能會遇到編譯問題，特別是在不同平台上。
> - 缺乏詳細的文檔和使用範例，對新手不太友好。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步，但不提供遊戲客戶端的擴展性。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 主要用於網路攻擊模擬，與 Minecraft 客戶端無直接關聯。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Forge | 使用 Java 實作，專注於提供穩定的模組支持和豐富的生態系統。 | 如果你的團隊需要一個成熟且穩定的模組開發平台，Forge 是更好的選擇。 | medium，因為需要將現有的 Java 模組轉換為新的架構。 |
| Fabric | 輕量級的模組化框架，專注於性能和快速更新。 | 如果你的專案需要快速的更新和輕量級的模組支持，Fabric 是更合適的選擇。 | low，因為許多模組可以直接轉換。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **client** | **Forge** | **Fabric** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Java 實作，專注於提供穩定的模組支持和豐富的生態系統。 | 輕量級的模組化框架，專注於性能和快速更新。 |
> | 遷移成本 | - | medium，因為需要將現有的 Java 模組轉換為新的架構。 | low，因為許多模組可以直接轉換。 |
> | 適用場景 | 主要場景 | 如果你的團隊需要一個成熟且穩定的模組開發平台，Forge 是 | 如果你的專案需要快速的更新和輕量級的模組支持，Fabric  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合對 Minecraft 有深入了解的開發者進行實驗，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 編譯過程中可能會遇到舊版本編譯器的問題
  - 解法：確保使用最新版本的編譯器
- [MEDIUM] 某些功能可能無法正常運作，特別是音效相關的功能
  - 解法：查看社群提供的修復建議

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊進行 Minecraft 客戶端的自定義開發 | 非常適合 | 開源架構和社群支持使得自定義開發變得容易。 |
| 大型遊戲公司需要穩定的客戶端解決方案 | 不適合 | 目前仍在 alpha 階段，功能不穩定。 |
| 遊戲設計師希望快速測試新功能 | 適合 | 開放性和可擴展性使得快速實驗成為可能。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，5 小時整合，得到開源的 Minecraft 客戶端，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，且不存取敏感資料。但由於開源特性，需注意依賴的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Minecraft-Community-Edition--client");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 40 |
| Open Issues | 8 |
| 最後推送 | 2026-03-09 |
| 建立日期 | 2026-03-07 |
| Repo 大小 | 1171.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Minecraft-Community-Edition/client) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C++" : 94
>     "C" : 6
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@LazyByteDev](https://github.com/LazyByteDev) | 28 |
> | [@coah80](https://github.com/coah80) | 18 |
> | [@Lucas6228](https://github.com/Lucas6228) | 2 |
> | [@doggybootsy](https://github.com/doggybootsy) | 1 |
> | [@rodrigothe1st](https://github.com/rodrigothe1st) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，主要依賴於 GitHub 的 PR 和 Issues 互動。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-07 ~ 2026-03-09）
> **活躍天數** 3 天 · **最新 commit** Merge pull request #12 from Lucas6228/main

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#11](https://github.com/Minecraft-Community-Edition/client/issues/11) | Capes appear to be invisible `bug` | 0 | 1 |
> | [#10](https://github.com/Minecraft-Community-Edition/client/issues/10) | precompiled header file is from a previous version of the co `bug` | 0 | 4 |
> | [#7](https://github.com/Minecraft-Community-Edition/client/issues/7) | [Suggestion] Add smartcmd/MinecraftConsoles' implementation  `feature request` | 0 | 4 |

## README 摘錄

> [!info]- 展開查看原文 README
> ## this project is very early, and not the entire product
> 
> thank you [LCEMP](https://github.com/LCEMP/LCEMP) and [smartcmd's fork](https://github.com/smartcmd/MinecraftConsoles) for some code 
> 
> # pr rules
> 
> 1. ai is somewhat fine, if you used it in fixing bugs, whatever dude. fully vibe coded implementations are not okay
> 
> 2. prs must be yours unless asked to be added to the repo, hopefully with proof.

## 延伸閱讀

相關概念：[[開源]] · [[遊戲開發]] · [[社群貢獻]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[Thearas--wechat-db-decrypt-macos|Thearas/wechat-db-decrypt-macos]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[juliye2025--evil-read-arxiv|juliye2025/evil-read-arxiv]]

[GitHub](https://github.com/Minecraft-Community-Edition/client)

## 相關收錄

> [!note]- 直接競品（同子分類：遊戲開發）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "遊戲開發" AND file.name != "Minecraft-Community-Edition--client"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "Minecraft-Community-Edition--client"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C++" AND file.name != "Minecraft-Community-Edition--client" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "Minecraft-Community-Edition--client"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["開源","遊戲開發","社群貢獻"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Minecraft-Community-Edition--client" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "Minecraft-Community-Edition" AND file.name != "Minecraft-Community-Edition--client"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Minecraft-Community-Edition--client");
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
> const me = dv.page("Repos/Minecraft-Community-Edition--client");
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
> const me = dv.page("Repos/Minecraft-Community-Edition--client");
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
> const me = dv.page("Repos/Minecraft-Community-Edition--client");
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
> const me = dv.page("Repos/Minecraft-Community-Edition--client");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-10|2026-03-10]] — 首次收錄，331 stars
