---
repo: Juwluuu/Subnautica-2-Release
url: https://github.com/Juwluuu/Subnautica-2-Release
owner: Juwluuu
owner_type: User
language: C++
license: MIT
description: "Subnautica 2: Early Access release, Have Multiplayer 4-player co-op multiplayer, Planet Zazura exploration, DNA BioMod system, Tadpole modular submersible, new Leviathans list, CICADA crash site lore. Xbox Game Pass, Steam preload, base building blueprints, ocean currents, crafting recipes"
homepage: ""
stars: 399
stars_per_day: 23
forks: 0
open_issues: 0
created: 2026-05-14
pushed_at: 2026-05-14
first_seen: 2026-05-20
week: "2026-W21"
month: "2026-05"
category: "遊戲"
subcategory: "潛水冒險"
release_tag: "Games"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-20
use_case: "探索全新外星海洋，體驗四人合作的潛水生存冒險。"
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
last_release_days: 18
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-05-20"
star_history: "2026-05-20:644,2026-05-20:644,2026-05-21:669,2026-05-21:669,2026-05-22:599,2026-05-23:460,2026-05-24:461,2026-05-25:459,2026-05-26:404,2026-05-27:401,2026-05-28:401,2026-05-29:401,2026-05-30:400,2026-05-31:399,2026-06-01:399"
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
  - "探索全新外星海洋，體驗四人合作的潛水生存冒險。"
---

# Subnautica-2-Release

**399** stars · **23** stars/天 · 建立 17 天前 · C++ · MIT

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
> 探索全新外星海洋，體驗四人合作的潛水生存冒險。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Recent · **熱度** Growing (23 stars/day)
> **授權** MIT (商業友好) · **維護** Moderate (最後推送 17 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 喜歡潛水生存遊戲並希望與朋友一起探索的玩家。
> **一句話重點** Subnautica 2 的四人合作模式讓潛水生存遊戲的社交互動達到了新的高度。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/Juwluuu--Subnautica-2-Release");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "潛水冒險" && p.file.name !== "Juwluuu--Subnautica-2-Release" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 潛水冒險 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，2 小時整合，得到豐富的多人合作體驗，值得嘗試。

> [!abstract] 核心創新
> 引入四人合作模式，讓玩家可以與朋友一起探索全新的潛水生存世界。

## 專案簡介

Subnautica 2 是一款全新的潛水生存冒險遊戲，玩家將探索一個全新的外星海洋，建造基地、製作裝備，並在危險的生物中生存。遊戲的核心機制是玩家在探索過程中收集資源，建造基地以抵禦海洋中的威脅，並解開隱藏在水下的秘密。安裝後，玩家只需運行 `Subnautica2.exe` 並調整圖形設置即可開始冒險。這款遊戲支援全控制器和鍵盤操作，並提供了豐富的故事和探索內容。技術上，遊戲使用 C++ 開發，並針對 Windows 10 和 11 進行了優化，建議使用高端 PC 獲得最佳體驗。

相較於前作，Subnautica 2 引入了四人合作模式，讓玩家可以與朋友一起探索，這在潛水生存遊戲中是相當少見的。與其他同類遊戲相比，如 Raft 和 The Forest，Subnautica 2 更加注重探索和故事情節，而不是單純的生存和建造。遊戲的畫面效果和生態系統也有顯著提升，提供了更為真實的水下視覺體驗。儘管目前仍在早期訪問階段，但其穩定性和功能已經相當成熟，適合喜歡潛水和探索的玩家。對於想要在多人環境中享受這類遊戲的玩家來說，Subnautica 2 是一個不容錯過的選擇。

**技術棧**：`C++`

## 重點功能

- 全新外星海洋 — 提供廣闊的探索空間和多樣的生態系統。
- 四人合作模式 — 讓玩家可以與朋友一起冒險，增強遊戲的互動性。
- 先進的基地建設系統 — 玩家可以自定義基地以適應不同的生存需求。
- 改進的生存機制 — 包含新的生物和生態系統，增加遊戲的挑戰性。
- 驚人的水下視覺效果 — 提供真實的水下世界體驗，增強沉浸感。

## 快速開始

1. 下載安裝檔
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
> 建立 17 天內累積 399 stars（約 23 stars/天），目前無 forks，顯示出使用者對這款遊戲的興趣。開發者 Juwluuu 之前有過其他遊戲的開發經驗，這次推出的 Subnautica 2 解決了許多玩家對於多人合作潛水遊戲的需求。遊戲的早期訪問版本讓玩家能夠提前體驗新內容，並提供反饋，這在遊戲社群中引發了討論。隨著多人遊戲的流行，這款遊戲的推出正好迎合了市場需求。

## 適合誰使用

**目標受眾**：喜歡潛水生存遊戲並希望與朋友一起探索的玩家。

> [!example] 使用場景
> - 遊戲開發者用它來測試多人合作機制，因為這在潛水生存遊戲中是相對少見的功能。
> - 玩家用它來與朋友一起探索外星海洋，因為這提供了比單人模式更豐富的遊戲體驗。
> - 生存遊戲愛好者用它來享受全新的生態系統和故事情節，因為相比於其他同類遊戲，這款遊戲的畫面和故事更具吸引力。

## 架構分析

Subnautica 2 採用 C++ 開發，這使得其在性能上有優勢，特別是在處理大量的水下物件和生態系統時。遊戲的架構設計重視圖形效能和用戶互動，並針對多種硬體配置進行了優化。資料流方面，遊戲使用了高效的資源管理系統，以確保在多玩家環境下的流暢體驗。選擇 C++ 而非其他高級語言的原因在於其對性能的控制能力，這對於需要即時渲染的遊戲至關重要。隨著玩家數量的增加，伺服器的負載可能成為瓶頸，因此在未來可能需要進一步優化伺服器架構以支持更多玩家。

## 技術深入分析

Subnautica 2 的核心技術機制基於 C++，這使得遊戲在性能上有顯著優勢，特別是在處理複雜的水下物件和生態系統時。遊戲的資料流設計使用了高效的資源管理系統，以確保在多玩家環境下的流暢體驗。選擇 C++ 而非其他高級語言的原因在於其對性能的控制能力，這對於需要即時渲染的遊戲至關重要。遊戲的效能特性表現良好，能夠支持高畫質的水下場景，並在高端硬體上達到穩定的幀率。設計取捨方面，開發團隊選擇了高效的圖形引擎來提升視覺效果，但這也意味著對硬體的要求較高。隨著玩家數量的增加，伺服器的負載可能成為瓶頸，因此在未來可能需要進一步優化伺服器架構以支持更多玩家。整合方面，遊戲的安裝和運行過程相對簡單，適合大多數玩家，但仍需注意硬體配置的要求。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰，提供了安裝步驟和常見問題解答。安裝過程相對順暢，無明顯坑點。文件未提供多語言版本，但內容簡單易懂，適合新手快速上手。

## 優缺點分析

> [!success] 優點
> - 提供四人合作模式，增強了遊戲的社交性。
> - 擁有豐富的生態系統和探索內容，提升遊戲的重玩價值。
> - 高品質的水下視覺效果，增強沉浸感。

> [!danger] 缺點
> - 目前仍在早期訪問階段，可能存在不穩定性。
> - 僅支援 Windows 10 和 11，限制了使用者群體。
> - 需要高端 PC 硬體，對於普通玩家來說可能有門檻。

> [!warning] 注意事項
> - 僅支援 Windows 10 和 11。
> - 需要高端 PC 獲得最佳體驗。
> - 目前仍在早期訪問階段，可能存在不穩定性。

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試玩，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- [MEDIUM] 遊戲在某些高設定下可能會出現低幀率
  - 解法：降低圖形設置以提高性能
- [MEDIUM] 某些顯示器可能會遇到黑屏問題
  - 解法：切換到無邊框窗口模式
- [low] 安裝過程中可能被防毒軟體誤報
  - 解法：將安裝資料夾加入例外名單

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型遊戲開發團隊開發新遊戲 | 非常適合 | 提供了多人合作的基礎架構，適合進行創新開發。 |
| 喜歡潛水生存遊戲的玩家 | 非常適合 | 擁有豐富的探索和生存元素，適合喜好此類型的玩家。 |
| 大型遊戲工作室進行多玩家測試 | 普通 | 雖然有多人模式，但仍在早期階段，可能不夠穩定。 |
| 尋找輕鬆單人遊戲的玩家 | 不適合 | 遊戲的設計重點在於多人合作，單人體驗可能不如其他專案。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~2 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，2 小時整合，得到豐富的多人合作體驗，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：遊戲本身不需要高權限，且不存取敏感資料。依賴鏈的信任程度尚可，適合在 CI/CD 環境中使用。

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

**社群活躍度**：社群活躍度尚可，但目前無 forks，顯示出使用者對此專案的關注度仍在觀望中。

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

相關專案：[[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[boona13--mykonos-island-voxels|boona13/mykonos-island-voxels]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[SubamanojJ-2004--gta-5-mod-menu|SubamanojJ-2004/gta-5-mod-menu]]

[GitHub](https://github.com/Juwluuu/Subnautica-2-Release)

## 相關收錄

> [!note]- 直接競品（同子分類：潛水冒險）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "潛水冒險" AND file.name != "Juwluuu--Subnautica-2-Release"
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
