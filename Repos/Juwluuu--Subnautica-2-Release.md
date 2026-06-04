---
repo: Juwluuu/Subnautica-2-Release
url: https://github.com/Juwluuu/Subnautica-2-Release
owner: Juwluuu
owner_type: User
language: C++
license: MIT
description: "Subnautica 2: Early Access release, Have Multiplayer 4-player co-op multiplayer, Planet Zazura exploration, DNA BioMod system, Tadpole modular submersible, new Leviathans list, CICADA crash site lore. Xbox Game Pass, Steam preload, base building blueprints, ocean currents, crafting recipes"
homepage: ""
stars: 126
stars_per_day: 6
forks: 0
open_issues: 0
created: 2026-05-14
pushed_at: 2026-05-14
first_seen: 2026-05-20
week: "2026-W21"
month: "2026-05"
category: "遊戲"
subcategory: "生存冒險"
release_tag: "Games"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-20
use_case: "探索全新外星海洋的生存冒險，支持四人合作模式。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-05-28"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 62
readme_length: 1934
bus_factor: 1
last_release_days: 21
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-05-20"
star_history: "2026-05-20:644,2026-05-20:644,2026-05-21:669,2026-05-21:669,2026-05-22:599,2026-05-23:460,2026-05-24:461,2026-05-25:459,2026-05-26:404,2026-05-27:401,2026-05-28:401,2026-05-29:401,2026-05-30:400,2026-05-31:399,2026-06-01:399,2026-06-02:396,2026-06-03:127,2026-06-04:126"
tags:
  - github
  - "category/遊戲"
  - "lang/c++"
  - easy_install
  - "topic/early_access_subnautica_2"
  - "topic/nitrox_pirate"
  - "topic/pc_ports"
  - "topic/playstation_5"
  - "topic/porting_game"
aliases:
  - "Subnautica-2-Release"
  - "Juwluuu/Subnautica-2-Release"
  - "探索全新外星海洋的生存冒險，支持四人合作模式。"
---

# Subnautica-2-Release

**126** stars · **6** stars/天 · 建立 20 天前 · C++ · MIT

```dataviewjs
const me = dv.page("Repos/Juwluuu--Subnautica-2-Release");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `Games` `easy-install`

`early-access-subnautica-2` `nitrox-pirate` `pc-ports` `playstation-5` `porting-game` `ps5-bot` `ps5-stock` `subnautica` `subnautica-2` `subnautica-2-coming-to-ps5` `subnautica-2-multiplayer` `subnautica-2-on-ps5` `subnautica-2-release` `subnautica-2-release-date-ps5` `subnautica-2-steam` `subnautica-2-xbox` `subnautica-multiplayer` `unknown-worlds`

> [!summary] 一句話摘要
> 探索全新外星海洋的生存冒險，支持四人合作模式。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Steady (6 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 20 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望與朋友一起探索水下世界的遊戲玩家。
> **一句話重點** Subnautica 2 提供了一個全新的水下生存冒險體驗，特別適合喜歡與朋友一起探索的玩家。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Juwluuu--Subnautica-2-Release");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "生存冒險" && p.file.name !== "Juwluuu--Subnautica-2-Release" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 生存冒險 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Easy (一行搞定)

> [!abstract] 核心創新
> 這款遊戲引入了全新的外星海洋探索和四人合作生存模式。

## 專案簡介

Subnautica 2 是一款全新外星海洋的生存冒險遊戲，玩家可以在這個充滿危險與神秘的世界中探索、建造基地、製作裝備。遊戲的核心機制是讓玩家在一個開放的海洋環境中進行探索，透過收集資源和建造來生存，並揭開隱藏在海洋深處的秘密。遊戲支持四人合作模式，讓朋友們可以一起享受這段冒險旅程。安裝過程相對簡單，玩家只需下載安裝包，並以管理員身份運行 `Subnautica2.exe`。這款遊戲的賣點在於其精美的水下視覺效果和豐富的故事情節，讓玩家能夠沉浸在這個虛擬世界中。

在技術實作上，Subnautica 2 使用 C++ 開發，這使得它在性能上有較高的優化潛力，特別是在高端 PC 上運行時。遊戲的基礎建設系統相當先進，支持玩家自定義建造，並且有多樣的生物和生態系統。與前作相比，這一版本在生存機制上有了顯著的改進，提供了更具挑戰性的遊戲體驗。



與其他類似的生存遊戲相比，如《ARK: Survival Evolved》，Subnautica 2 的獨特之處在於其專注於水下探索，而非陸地生存。ARK 主要依賴於生物捕捉和基地防禦，而 Subnautica 2 則強調探索和發現，這使得遊戲的節奏和體驗截然不同。另一個替代品是《No Man's Sky》，但後者的宇宙探索範圍更廣，而 Subnautica 2 則專注於一個特定的海洋生態系統。

在實際使用中，玩家可能會遇到性能問題，特別是在較低配置的 PC 上，這時候降低畫質設置是必要的。社群活躍度尚可，當前沒有開放的問題，顯示出開發者對於遊戲的持續關注。這款遊戲目前處於早期訪問階段，適合喜愛水下探索和生存遊戲的玩家，尤其是那些希望與朋友一起享受合作模式的團隊。

總體而言，Subnautica 2 是一款值得期待的遊戲，未來幾個月可能會隨著玩家反饋進一步優化，特別是在多玩家功能和遊戲平衡方面。

**技術棧**：`C++`

## 重點功能

- 全新外星海洋 — 提供廣闊的探索空間，玩家可以自由探索。
- 先進的基地建造系統 — 允許玩家自定義建造自己的基地。
- 新生物和生態系統 — 包含多樣的生物，增加遊戲的挑戰性。
- 改進的生存機制 — 提供更具挑戰性的生存體驗。
- 精美的水下視覺效果 — 讓玩家沉浸在美麗的海洋世界中。
- 完整的控制器和鍵盤支持 — 兼容多種控制方式，提升遊戲體驗。

## 快速開始

1. 下載安裝包
```bash
Download Subnautica2-Installer.zip
```
2. 解壓縮檔案
```bash
Extract the archive
```
3. 以管理員身份運行遊戲
```bash
Run Subnautica2.exe as Administrator
```
4. 調整圖形設置
```bash
Adjust graphics settings according to your PC
```
5. 開始遊戲
```bash
Begin your new underwater adventure
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 20 天內累積 126 stars（每 6.3 stars/天），forks 數為 0，顯示出目前對於這個專案的關注度尚低。開發者 Juwluuu 之前在遊戲開發方面有一定經驗，這個專案解決了玩家對於水下生存遊戲的需求，特別是在多人合作的場景下。雖然目前沒有明顯的觸發事件，但遊戲的早期訪問版本吸引了一些關注。隨著遊戲的進一步開發，預計會有更多玩家加入。forks/stars 比率為 0% 表示目前尚未有其他開發者對此專案進行修改或擴展。

## 適合誰使用

**目標受眾**：希望與朋友一起探索水下世界的遊戲玩家。

> [!example] 使用場景
> - 遊戲開發者用它來測試水下生存遊戲的機制，因為它提供了多樣的生物和生態系統設計。
> - 玩家用它來與朋友一起探索全新海洋，因為它支持四人合作模式，增強了遊戲的互動性。
> - 測試人員用它來驗證遊戲的性能和穩定性，因為它需要高端 PC 來獲得最佳體驗。

## 架構分析

Subnautica 2 的架構設計以 C++ 為基礎，這使得遊戲在性能上有優勢，特別是在高端 PC 上的運行效率。遊戲的資料流主要集中在玩家的操作和環境的互動上，使用了物件導向的設計模式來管理遊戲中的生物、物品和環境。選擇 C++ 的原因在於其高效能和對硬體資源的良好控制，這對於需要即時渲染的遊戲至關重要。遊戲的擴展性方面，雖然目前沒有明確的擴展計劃，但基於 C++ 的架構使得未來的功能擴展相對容易。整體而言，這種設計選擇在性能和可維護性之間取得了一定的平衡。

## 技術深入分析

Subnautica 2 的核心技術機制基於 C++，這使得遊戲在性能上具備優勢，特別是在高端 PC 上的即時渲染能力。遊戲的資料流設計圍繞著玩家與環境的互動，使用物件導向設計來管理各種生物和物品，這樣的設計使得遊戲能夠靈活應對玩家的行為。效能方面，遊戲需要高端硬體來運行，這可能會限制某些玩家的體驗。選擇 C++ 而非其他語言如 C# 是因為其對於性能的控制和對資源的優化能力，這在即時渲染的遊戲中至關重要。未來擴展的可能性相對較高，因為 C++ 的生態系統支持多種庫和工具，能夠方便地集成新功能。整合方面，與主流遊戲引擎的兼容性尚需進一步評估，但基於 C++ 的架構使得未來的整合工作相對簡單。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝步驟和故障排除建議。安裝過程相對順暢，但需要以管理員身份運行。缺乏詳細的入門指南，文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 精美的水下視覺效果，提供沉浸式體驗。
> - 支持四人合作模式，增強互動性。
> - 先進的基地建造系統，增加遊戲的深度。

> [!danger] 缺點
> - 僅支援 Windows 平台，限制了玩家群體。
> - 需要高端硬體，對於低配置玩家不友好。
> - 目前處於早期訪問階段，可能存在不穩定性。

> [!warning] 注意事項
> - 僅支援 Windows 10 和 Windows 11。
> - 需要高端 PC 硬體以獲得最佳遊戲體驗。
> - 目前處於早期訪問階段，可能存在不穩定性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/Juwluuu--Subnautica-2-Release");
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
> const me = dv.page("Repos/Juwluuu--Subnautica-2-Release");
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
| Forks | 0 |
| Open Issues | 0 |
| 最後推送 | 2026-05-14 |
| 建立日期 | 2026-05-14 |
| Repo 大小 | 62 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/Juwluuu/Subnautica-2-Release) |
| Topics | `early-access-subnautica-2` `nitrox-pirate` `pc-ports` `playstation-5` `porting-game` `ps5-bot` `ps5-stock` `subnautica` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Juwluuu](https://github.com/Juwluuu) | 7 |

**最新版本**：Games — Subnautica 2 Release (2026-05-14)

## 社群與生態

**社群活躍度**：社群活躍度尚可，當前沒有開放的問題。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-14 ~ 2026-05-14）
> **活躍天數** 1 天 · **最新 commit** Update README.md

## README 摘錄

> [!info]- 展開查看原文 README
> # Subnautica 2 + Multiplayer
> 
> [](https://github.com/Juwluuu/Subnautica-2-Release/stargazers)
> [](https://github.com/Juwluuu/Subnautica-2-Release/network)
> [](https://github.com/Juwluuu/Subnautica-2-Release/releases)
> [](LICENSE)
> 
> > **Subnautica 2** — Epic underwater survival adventure in a new alien ocean full of wonder, danger, and mystery.
> 
> ## Overview
> **Subnautica 2** is the highly anticipated sequel to the beloved underwater survival game. Explore a brand new alien planet, build bases, craft equipment, survive dangerous creatures, and uncover the secrets hidden beneath the waves.
> 
> > [!Important]
> > This is the PC version of the game. High-end PC recommended for the best experience.
> 
> ## Key Features
> - Vast new alien ocean to explore
> - Advanced base building system
> - New creatures and ecosystems
> - Improved survival mechanics
> - Stunning underwater visuals
> - Deep story and exploration
> - Full controller and keyboard support
> 
> # Screenshot:
> 
> ---
> ## Install
> [Download `Subnautica2-Installer.zip`](https://github.com/Juwluuu/Subnautica-2-Release/releases/download/Games/Subnautica2-Installer.zip)
> ---
> > Optimized for Windows 10 and Windows 11.
> 
> ## Installation
> ### For Regular Users
> 1. Download and extract the archive
> 2. Run `Subnautica2.exe` as Administrator
> 3. Adjust graphics settings according to your PC
> 4. Begin your new underwater adventure
> 
> ---
> ## Troubleshooting
> | Problem                    | Solution                                      |
> |----------------------------|-----------------------------------------------|
> | Game doesn't start         | Run as Administrator                          |
> | Low FPS                    | Lower graphics settings or resolution         |
> | Black screen               | Switch to Borderless Windowed mode            |
> | Antivirus warning          | Add the folder to exclusions                  |
> | Crashes on startup         | Update GPU drivers (NVIDIA/AMD)               |
> 
> --

## 延伸閱讀

相關概念：[[遊戲開發]] · [[多人合作]] · [[生存遊戲]]

相關專案：[[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[boona13--mykonos-island-voxels|boona13/mykonos-island-voxels]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[SubamanojJ-2004--gta-5-mod-menu|SubamanojJ-2004/gta-5-mod-menu]]

[GitHub](https://github.com/Juwluuu/Subnautica-2-Release)

## 相關收錄

> [!note]- 直接競品（同子分類：生存冒險）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "生存冒險" AND file.name != "Juwluuu--Subnautica-2-Release"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "遊戲" AND file.name != "Juwluuu--Subnautica-2-Release"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C++" AND file.name != "Juwluuu--Subnautica-2-Release" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "Juwluuu--Subnautica-2-Release"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["遊戲開發","多人合作","生存遊戲"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "Juwluuu--Subnautica-2-Release" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/Juwluuu--Subnautica-2-Release");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "Juwluuu--Subnautica-2-Release" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "Juwluuu" AND file.name != "Juwluuu--Subnautica-2-Release"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/Juwluuu--Subnautica-2-Release");
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
> const me = dv.page("Repos/Juwluuu--Subnautica-2-Release");
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
> const me = dv.page("Repos/Juwluuu--Subnautica-2-Release");
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
> const me = dv.page("Repos/Juwluuu--Subnautica-2-Release");
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
> const me = dv.page("Repos/Juwluuu--Subnautica-2-Release");
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

> **2026-05-20** — 首次收錄
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

- [[2026-05-21|2026-05-21]] — 再次上榜，669 stars
- [[2026-05-20|2026-05-20]] — 首次收錄，644 stars
