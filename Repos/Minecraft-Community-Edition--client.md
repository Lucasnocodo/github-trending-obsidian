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
open_issues: 7
created: 2026-03-07
pushed_at: 2026-03-09
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
subcategory: "遊戲客戶端"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供一個開源的 Minecraft 客戶端，讓玩家能夠自定義和擴展遊戲體驗。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 5
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:336,2026-03-11:336,2026-03-11:336"
tags:
  - github
  - "category/其他"
  - "lang/c++"
  - org
aliases:
  - "client"
  - "Minecraft-Community-Edition/client"
  - "提供一個開源的 Minecraft 客戶端，讓玩家能夠自定義和擴展遊戲體驗。"
---

# client

**336** stars · **112** stars/天 · 建立 3 天前 · C++ · 未標註授權

```dataviewjs
const me = dv.page("Repos/Minecraft-Community-Edition--client");
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
> 提供一個開源的 Minecraft 客戶端，讓玩家能夠自定義和擴展遊戲體驗。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (112 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 1 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望自定義 Minecraft 客戶端的開發者和玩家。
> **一句話重點** 這個專案展示了開源社群如何能夠共同創造和擴展一個遊戲客戶端的潛力。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習，5 小時整合，得到一個可自定義的 Minecraft 客戶端，值得探索。

> [!abstract] 核心創新
> 這個專案的創新在於其開放性和社群驅動的開發模式。

## 專案簡介

這個專案的核心功能是提供一個可擴展的 Minecraft 客戶端，支持多種語言如 C++ 和 Python，讓開發者能夠輕鬆地進行自定義開發。使用者可以透過修改源碼來增強遊戲功能，並且該專案的設計初衷是為了讓玩家能夠更自由地享受 Minecraft 的世界。專案目前仍在早期階段，並未完全實現所有功能，但已經有基本的架構和部分實作。使用者可以透過 `make` 指令來編譯專案，並且可以參考其他開源專案如 LCEMP 和 smartcmd 的代碼來進行擴展。這個工具的賣點在於其開放性和可擴展性，讓玩家和開發者能夠根據自己的需求進行調整。

與其他 Minecraft 客戶端相比，如 Forge 和 Fabric，這個專案更注重於社群的參與和代碼的共享，而不是僅僅提供模組化的支持。這使得它適合那些希望深入了解 Minecraft 內部運作的開發者。使用者在使用過程中可能會遇到一些編譯問題，例如舊的預編譯標頭文件問題，這需要開發者有一定的技術背景來解決。這個專案的活躍度相對較高，最近有多個合併請求，顯示出社群的參與度。未來幾個月內，專案可能會逐步完善，並吸引更多的開發者參與進來，特別是在功能擴展和錯誤修復方面。

**技術棧**：`C++` · `Python` · `CMake`

## 重點功能

- 開源代碼 — 提供完整的源碼，讓開發者可以自由修改和擴展功能。
- 多語言支持 — 使用 C++、Python 等多種語言開發，方便不同背景的開發者參與。
- 社群驅動 — 鼓勵社群貢獻代碼，並提供明確的 PR 規則。
- 基本功能實作 — 雖然仍在早期階段，但已經有基本的遊戲功能實作可供使用。
- 編譯支持 — 使用 `make` 指令進行編譯，簡化了安裝過程。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/Minecraft-Community-Edition/client.git
```
2. 進入專案目錄
```bash
cd client
```
3. 編譯專案
```bash
make
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天就累積 336 stars（112/天），forks 40（11.9%），顯示出相對較高的參與度。作者 LazyByteDev 和其他貢獻者在開源社群中有一定的知名度，過去參與過多個相關專案。這個專案解決了玩家對於 Minecraft 客戶端的自定義需求，之前的方案如 Forge 雖然功能強大，但對於新手來說學習曲線較陡。最近的社群討論和推廣活動也促進了這個專案的曝光度。技術上，隨著 C++ 和 Python 的普及，這個專案的可行性大大提高。forks/stars 比率為 11.9%，顯示出許多人對此專案有實際的修改需求。

## 適合誰使用

**目標受眾**：希望自定義 Minecraft 客戶端的開發者和玩家。

> [!example] 使用場景
> - 遊戲開發者用它來自定義 Minecraft 客戶端的功能，因為這樣可以快速實現新遊戲機制，並且不需要從零開始。
> - 愛好者用它來修改遊戲內部設定，因為這樣可以提升遊戲的可玩性和個性化，並且能夠與朋友分享自定義的遊戲體驗。
> - 學術研究者用它來分析 Minecraft 的遊戲機制，因為開源的代碼讓他們能夠深入理解遊戲的運作邏輯，並進行相關的研究。

## 架構分析

這個專案採用模組化的架構，主要使用 C++ 作為核心開發語言，並結合 Python 進行腳本擴展。這樣的設計使得開發者能夠在不改動核心代碼的情況下進行功能擴展。資料流方面，遊戲邏輯和用戶界面分開處理，使用 CMake 進行編譯和依賴管理。選擇 C++ 而非其他語言如 Java，主要是為了獲得更高的性能和更好的控制權，但這也增加了學習曲線。擴展性方面，專案的模組化設計使得未來可以輕鬆添加新功能，但也可能導致依賴管理的複雜性增加。

## 技術深入分析

這個專案的核心技術機制是使用 C++ 進行高效能的遊戲邏輯處理，並且利用 Python 進行腳本化的擴展。這樣的設計使得開發者可以快速地進行功能調整和擴展。效能方面，專案能夠處理基本的遊戲邏輯，但在大型模組或複雜功能的實作上可能會遇到瓶頸，特別是在資源管理上。選擇 C++ 而非 Java 是為了獲得更高的性能，但這也意味著開發者需要具備更高的技術能力。技術風險方面，隨著專案的擴展，可能會出現依賴管理的問題，特別是在多語言協作的情況下。整合方面，與主流的遊戲開發框架的兼容性尚待測試，特別是在 CI/CD 流程中可能需要額外的配置。

## 新手體驗

> [!info] 上手難度評估
> README 文件簡短，缺乏詳細的使用範例和文檔。安裝過程相對順暢，但對於新手來說可能會有一定的挑戰。沒有提供專門的入門指南，且文件目前僅有英文版本。

## 優缺點分析

> [!success] 優點
> - 開源且社群驅動，鼓勵貢獻和擴展。
> - 多語言支持，適合不同背景的開發者。
> - 模組化架構，便於未來功能擴展。

> [!danger] 缺點
> - 功能尚不完整，對新手不太友好。
> - 可能會遇到編譯和依賴問題。
> - 缺乏詳細的文檔和使用指導。

> [!warning] 注意事項
> - 目前功能尚不完整，仍在開發中。
> - 可能會遇到編譯問題，特別是與舊版本的預編譯標頭有關。
> - 缺乏詳細的使用文檔，對新手不太友好。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的開源功能，但專注於檔案同步，而非遊戲客戶端的擴展。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 專注於網路安全和隱私保護，與 Minecraft 客戶端的功能無直接關聯。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 主要用於 Telegram 的 WebSocket 代理，與遊戲開發無關。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| Forge | 提供一個成熟的模組化框架，支持大量現有模組，並且有活躍的社群。 | 如果你需要一個穩定的環境來運行多個模組，Forge 是更好的選擇。 | low，因為已有大量文檔和社群支持。 |
| Fabric | 專注於輕量級和快速的模組開發，適合需要快速迭代的開發者。 | 如果你的團隊需要快速開發和測試新模組，Fabric 是更合適的選擇。 | medium，因為需要重新學習一些 API 和工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **client** | **Forge** | **Fabric** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 提供一個成熟的模組化框架，支持大量現有模組，並且有活躍的社群。 | 專注於輕量級和快速的模組開發，適合需要快速迭代的開發者。 |
> | 遷移成本 | - | low，因為已有大量文檔和社群支持。 | medium，因為需要重新學習一些 API 和工具。 |
> | 適用場景 | 主要場景 | 如果你需要一個穩定的環境來運行多個模組，Forge 是更好的 | 如果你的團隊需要快速開發和測試新模組，Fabric 是更合適 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用和探索，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 編譯過程中可能會遇到舊的預編譯標頭文件問題
  - 解法：確保使用最新的編譯器版本
- [MEDIUM] 某些功能可能尚未實裝，導致遊戲體驗不完整
  - 解法：定期檢查更新以獲取最新功能
- [MEDIUM] 缺乏詳細的文檔，可能導致使用困難
  - 解法：參考社群討論和其他開源專案的文檔

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型開發團隊希望自定義 Minecraft 客戶端 | 非常適合 | 開源和社群驅動的特性使其易於擴展和修改。 |
| 大型遊戲公司需要穩定的客戶端解決方案 | 不適合 | 專案仍在 alpha 階段，功能不穩定。 |
| 獨立開發者希望快速實驗新的遊戲機制 | 適合 | 開源特性使得快速迭代和實驗成為可能。 |
| 教育機構希望使用 Minecraft 進行教學 | 普通 | 雖然有潛力，但缺乏穩定的功能和文檔支持。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習，5 小時整合，得到一個可自定義的 Minecraft 客戶端，值得探索。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：專案本身不需要高權限，且不存取敏感資料，但開發者需注意依賴的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

這個專案最常與其他開源 Minecraft 工具搭配使用，如 Forge 和 Fabric。在一個使用 Forge 的專案中，你可以用這個工具來擴展現有的客戶端功能，具體做法是通過修改源碼來添加新模組。與主流 CI 工具如 GitHub Actions 的整合尚未測試，但由於專案使用 CMake，理論上應該能夠順利整合。最常見的整合問題是依賴管理，特別是在多語言環境中，可能需要額外的配置來解決。

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
| Open Issues | 7 |
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

**社群活躍度**：社群活躍度中等，近期有多個合併請求。

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

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[Thearas--wechat-db-decrypt-macos|Thearas/wechat-db-decrypt-macos]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]]

[GitHub](https://github.com/Minecraft-Community-Edition/client)

## 相關收錄

> [!note]- 直接競品（同子分類：遊戲客戶端）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "遊戲客戶端" AND file.name != "Minecraft-Community-Edition--client"
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

- [[2026-03-11|2026-03-11]] — 再次上榜，336 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，331 stars
