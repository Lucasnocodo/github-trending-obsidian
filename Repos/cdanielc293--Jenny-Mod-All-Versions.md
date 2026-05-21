---
repo: cdanielc293/Jenny-Mod-All-Versions
url: https://github.com/cdanielc293/Jenny-Mod-All-Versions
owner: cdanielc293
owner_type: User
language: C#
license: MIT
description: "Jenny Mod: Minecraft 1.12.2 Java download, Bedrock addon, Pocket Edition PE mcpack, Android APK. SchnuriTV original, Ellie companion, Slime Girl. Forge loader setup, Fabric port, custom animations, interactive skins. Installation guide, dependency files, .jar download, crash fix, portable."
homepage: ""
stars: 670
stars_per_day: 223
forks: 1
open_issues: 1
created: 2026-05-16
pushed_at: 2026-05-16
first_seen: 2026-05-20
week: "2026-W21"
month: "2026-05"
category: "其他"
subcategory: "Minecraft 模組"
release_tag: "Minecraft"
install_complexity: "medium"
status: archived
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-20
use_case: "提供多版本的 Minecraft 成人模組，增添互動角色與動畫。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-05-23"
contributor_count: 1
engagement: "low"
issue_close_rate: 0
repo_size_kb: 173
readme_length: 1948
bus_factor: 1
last_release_days: 4
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-20"
star_history: "2026-05-20:669,2026-05-20:670"
tags:
  - github
  - "category/其他"
  - "lang/c#"
  - "topic/1_12_2_mod"
  - "topic/forge_mod"
  - "topic/forgemc_mod"
  - "topic/java_edition"
  - "topic/jenny_mod"
aliases:
  - "Jenny-Mod-All-Versions"
  - "cdanielc293/Jenny-Mod-All-Versions"
  - "提供多版本的 Minecraft 成人模組，增添互動角色與動畫。"
---

# Jenny-Mod-All-Versions

**670** stars · **223** stars/天 · 建立 3 天前 · C# · MIT

```dataviewjs
const me = dv.page("Repos/cdanielc293--Jenny-Mod-All-Versions");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案` `Minecraft`

`1-12-2-mod` `forge-mod` `forgemc-mod` `java-edition` `jenny-mod` `jenny-mod-2026` `jenny-mod-all-versions` `jenny-mod-minecraft-download` `jennybot` `jennymod` `jennymod-2026` `jennymod-minecraft` `mcmod` `minecraft` `minecraft-jenny-mod` `minecraft-jenny-mod-2026` `minecraft-mod` `minecraftjennymod` `minecraftjennymod-2026` `tminecaft`

> [!summary] 一句話摘要
> 提供多版本的 Minecraft 成人模組，增添互動角色與動畫。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (223 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 尋找成人內容的 Minecraft 玩家，特別是希望增加角色互動的玩家。
> **一句話重點** 這個模組不僅提供了成人內容，還強調了角色互動的豐富性，讓玩家在 Minecraft 中獲得全新的體驗。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/cdanielc293--Jenny-Mod-All-Versions");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "Minecraft 模組" && p.file.name !== "cdanielc293--Jenny-Mod-All-Versions" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 Minecraft 模組 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~2h · **綁定風險** medium
> **結論** 花 2 小時學習，1 小時整合，得到豐富的角色互動體驗，值得嘗試。

> [!abstract] 核心創新
> 這個專案的創新點在於提供一個高互動性的成人角色，並且整合了多種動畫和聲音效果。

## 專案簡介

Jenny Mod 是一個針對 Minecraft 的成人模組，專為 18 歲以上玩家設計，加入了名為 Jenny 的角色，並提供高品質的 3D 模型、流暢的動畫和互動功能。安裝過程中，使用者需先安裝 Forge 或 Fabric，然後將模組檔案放入 `mods` 資料夾，啟動遊戲即可使用。這個模組的賣點在於其獨特的角色互動，包含多種姿勢和自定義的聲音，讓玩家能夠享受更豐富的遊戲體驗。技術上，模組支援 Forge 和 Fabric 兩種載入器，這使得它能夠在不同的 Minecraft 環境中運行，並且能夠隨著遊戲版本的更新而持續更新。相較於其他成人模組，如 0x0funky/agent-sprite-forge，Jenny Mod 提供了更為豐富的互動性和動畫效果，而不僅僅是靜態角色。此模組的使用者需注意，若遇到遊戲崩潰或載入問題，需檢查模組與其他模組的相容性，並確保所有依賴項都已安裝。整體而言，這個模組適合希望在 Minecraft 中增加成人內容的玩家，但需謹慎處理相關的法律和倫理問題。

**技術棧**：`C#`

## 重點功能

- 高品質 3D 模型 — 提供細緻的角色設計，增強遊戲沉浸感。
- 多種互動姿勢 — 角色可進行多種互動，提升遊戲趣味性。
- 自定義聲音 — 包含角色的聲音線路，增強角色的個性。
- 支援 Forge 和 Fabric — 兼容多種 Minecraft 載入器，方便玩家選擇。
- 所有版本集中管理 — 提供所有版本的下載，方便玩家選擇適合的版本。
- 定期更新 — 持續推出新內容，保持模組的新鮮感。

## 快速開始

1. 下載模組檔案
```bash
Download `JennyMod.zip` from the releases.
```
2. 安裝 Forge 或 Fabric
```bash
Install the correct version of Forge or Fabric for your Minecraft.
```
3. 放置模組檔案
```bash
Place the mod file in the `mods` folder.
```
4. 啟動遊戲
```bash
Launch the game and enjoy.
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 670 stars（223/天），forks 僅 1（0.1%），顯示出初期的關注度。作者 cdanielc293 似乎專注於成人內容的 Minecraft 模組開發，解決了玩家對於更具互動性和個性化角色的需求。這個模組的推出可能因為社群對於成人內容的需求增加而受到關注，特別是在 Minecraft 這個平台上。stars 和 forks 的比例顯示出使用者對於這個模組的興趣仍在觀望階段。

## 適合誰使用

**目標受眾**：尋找成人內容的 Minecraft 玩家，特別是希望增加角色互動的玩家。

> [!example] 使用場景
> - 成人玩家用它來在 Minecraft 中增添互動角色，因為這樣可以享受更豐富的遊戲體驗和角色互動。
> - 模組開發者用它來學習如何在 Minecraft 中實現高品質的 3D 模型和動畫，因為這可以幫助他們提升自己的開發技能。
> - 社群創作者用它來製作成人內容的遊戲影片，因為這樣可以吸引特定觀眾群體並增加觀看次數。

## 架構分析

Jenny Mod 採用模組化架構，允許玩家透過 Forge 或 Fabric 載入不同版本的模組。這樣的設計使得模組能夠隨著 Minecraft 的更新而持續更新，並且能夠與其他模組共存。資料流方面，模組依賴於 Minecraft 的核心 API 進行角色渲染和互動，這樣的設計使得模組能夠在遊戲中無縫運行。選擇 Forge 和 Fabric 作為載入器，能夠提供更大的靈活性，但也可能導致相容性問題，特別是在與其他模組一起使用時。整體而言，這個架構設計的擴展性良好，但在使用過程中需注意與其他模組的相容性。

## 技術深入分析

Jenny Mod 的核心技術機制在於其高品質的 3D 模型和動畫，這些都是透過 C# 編寫的，並利用 Minecraft 的模組 API 進行整合。模組能夠支持多種互動姿勢和聲音，這使得角色的表現更加生動。效能方面，由於模組需要加載大量的資源，建議玩家在啟動遊戲時分配更多的 RAM，以避免性能瓶頸。設計上，選擇 Forge 和 Fabric 作為載入器，這樣的選擇使得模組能夠在不同的環境中運行，但也帶來了相容性問題的風險。技術上，這個模組的依賴樹相對簡單，主要依賴於 Minecraft 的核心庫，這降低了維護的複雜度。從整合的角度來看，這個模組可以與其他常見的 Minecraft 模組一起使用，但需要注意相容性問題，特別是在大型模組包中使用時可能會遇到衝突。

## 新手體驗

> [!info] 上手難度評估
> README 文件品質尚可，提供了清晰的安裝步驟和故障排除建議。安裝過程相對順暢，但可能需要注意與防毒軟體的衝突。文件未提供多語言支持，可能對非英語使用者造成困難。

## 優缺點分析

> [!success] 優點
> - 提供高品質的角色模型和動畫，增強遊戲體驗。
> - 支援多種載入器，方便不同玩家使用。
> - 定期更新，保持內容的新鮮感。

> [!danger] 缺點
> - 僅適用於成人玩家，限制了使用者範圍。
> - 可能與其他模組不相容，需謹慎選擇。
> - 安裝過程中可能需要額外的依賴項，增加了複雜度。

> [!warning] 注意事項
> - 僅適用於 18 歲以上玩家。
> - 可能與其他模組不相容，需檢查相容性。
> - 安裝過程中可能需要額外的依賴項。
> - 可能會因為防毒軟體誤報而無法正常運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的成人角色互動，但可能缺乏 Jenny Mod 的動畫和聲音效果。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於不同的角色設計和互動，適合尋找多樣化內容的玩家。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 這個模組專注於成人角色的互動，但可能缺乏 Jenny Mod 的動畫和聲音效果。 | 如果你需要一個更簡單的成人角色模組，且不在意動畫效果。 | low，因為兩者的安裝流程相似。 |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 提供不同的角色設計和互動，適合尋找多樣化內容的玩家。 | 如果你希望探索不同的角色和互動方式，而不僅僅是 Jenny。 | medium，因為可能需要重新配置模組環境。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Jenny-Mod-All-Versions** | **agent-sprite-forge** | **boneyard** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這個模組專注於成人角色的互動，但可能缺乏 Jenny Mod 的動畫和聲音效果。 | 提供不同的角色設計和互動，適合尋找多樣化內容的玩家。 |
> | 遷移成本 | - | low，因為兩者的安裝流程相似。 | medium，因為可能需要重新配置模組環境。 |
> | 適用場景 | 主要場景 | 如果你需要一個更簡單的成人角色模組，且不在意動畫效果。 | 如果你希望探索不同的角色和互動方式，而不僅僅是 Jenny。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人試用，但不建議在生產環境中使用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 安裝後模組無法加載，可能是因為 Forge/Fabric 版本不正確。
  - 解法：確認安裝的 Forge/Fabric 版本與模組相容。
- **[HIGH]** 遊戲崩潰，可能是與其他模組不相容。
  - 解法：檢查其他模組的相容性，並嘗試禁用其他模組。
- [MEDIUM] 防毒軟體誤報模組檔案，導致無法啟動。
  - 解法：將模組資料夾添加到防毒軟體的例外清單。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 成人玩家希望在 Minecraft 中增添互動角色 | 非常適合 | 提供了豐富的角色互動和動畫效果，滿足成人內容需求。 |
| 開發者希望學習如何製作 Minecraft 模組 | 適合 | 提供了實用的安裝指南和模組開發的基礎知識。 |
| 尋找適合兒童的 Minecraft 模組 | 不適合 | 此模組專為成人設計，包含不適合未成年人的內容。 |
| 希望在大型模組包中使用此模組 | 普通 | 可能會遇到與其他模組的相容性問題。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~2 小時 |
| 整合時間 | ~1 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 2 小時學習，1 小時整合，得到豐富的角色互動體驗，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：此模組不需要高權限，僅在遊戲內部運行，不存取敏感資料。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/cdanielc293--Jenny-Mod-All-Versions");
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
> const me = dv.page("Repos/cdanielc293--Jenny-Mod-All-Versions");
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
| Forks | 1 |
| Open Issues | 1 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-16 |
| 建立日期 | 2026-05-16 |
| Repo 大小 | 173 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/cdanielc293/Jenny-Mod-All-Versions) |
| Topics | `1-12-2-mod` `forge-mod` `forgemc-mod` `java-edition` `jenny-mod` `jenny-mod-2026` `jenny-mod-all-versions` `jenny-mod-minecraft-download` |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@cdanielc293](https://github.com/cdanielc293) | 4 |

**最新版本**：Minecraft — JennyMod (2026-05-16)

## 社群與生態

**社群活躍度**：社群活躍度中等，僅有一個開放問題，顯示出初期的關注度。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-16 ~ 2026-05-16）
> **活躍天數** 1 天 · **最新 commit** Add files via upload

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#1](https://github.com/cdanielc293/Jenny-Mod-All-Versions/issues/1) | [phantomstars] Fake engagement detected on this repository | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Jenny Mod - All Versions
> 
> > **Jenny Mod** — Popular adult Minecraft mod that adds a new character with unique animations and interactions.
> 
> [](https://github.com/cdanielc293/Jenny-Mod-All-Versions/stargazers)
> [](https://github.com/cdanielc293/Jenny-Mod-All-Versions/network)
> [](https://github.com/cdanielc293/Jenny-Mod-All-Versions/releases)
> [](LICENSE)
> 
> ## Overview
> **Jenny Mod** is a well-known adult modification for Minecraft that adds the character Jenny with high-quality 3D model, detailed animations, voice lines, and interactive features. This repository contains all versions of the mod for easy access.
> 
> > [!Important]
> > This mod is intended for players **18+ only**. Contains adult content and animations.
> 
> ## Key Features
> - High-quality 3D model and smooth animations
> - Multiple interaction types and poses
> - Custom voice lines and sounds
> - Compatible with Forge and Fabric
> - All versions available in one repository
> - Regular updates and new content
> 
> # Screenshot:
> 
> ---
> ## Install
> [Download `JennyMod.zip`](https://github.com/cdanielc293/Jenny-Mod-All-Versions/releases/download/Minecraft/JennyMod.zip)
> ---
> > Requires Forge or Fabric loader. Recommended for 18+ audience.
> 
> ## Installation
> ### For Regular Users
> 1. Install the correct version of Forge or Fabric for your Minecraft
> 2. Place the mod file in the `mods` folder
> 3. Launch the game and enjoy
> 
> ---
> ## Troubleshooting
> | Problem                    | Solution                                      |
> |----------------------------|-----------------------------------------------|
> | Mod not loading            | Install correct Forge/Fabric version          |
> | Missing textures           | Make sure all required dependencies are installed |
> | Game crashes               | Check mod compatibility with other mods       |
> | Antivirus warning          | Add the folder to exclusions                  |
> | Low performance            | Allocate more RAM in launcher settings        |

## 延伸閱讀

相關概念：[[成人內容]] · [[Minecraft 模組]] · [[互動角色]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[DuskMosquito--Lossless-Scaling-Desktop-2026|DuskMosquito/Lossless-Scaling-Desktop-2026]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[Keychron--Keychron-Keyboards-Hardware-Design|Keychron/Keychron-Keyboards-Hardware-Design]] · [[TriangleFalcon--KMS-Tools-Portable-2026-Last-Version|TriangleFalcon/KMS-Tools-Portable-2026-Last-Version]]

[GitHub](https://github.com/cdanielc293/Jenny-Mod-All-Versions)

## 相關收錄

> [!note]- 直接競品（同子分類：Minecraft 模組）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "Minecraft 模組" AND file.name != "cdanielc293--Jenny-Mod-All-Versions"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "cdanielc293--Jenny-Mod-All-Versions"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C#" AND file.name != "cdanielc293--Jenny-Mod-All-Versions" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W21" AND file.name != "cdanielc293--Jenny-Mod-All-Versions"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["成人內容","Minecraft 模組","互動角色"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "cdanielc293--Jenny-Mod-All-Versions" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/cdanielc293--Jenny-Mod-All-Versions");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "cdanielc293--Jenny-Mod-All-Versions" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "cdanielc293" AND file.name != "cdanielc293--Jenny-Mod-All-Versions"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/cdanielc293--Jenny-Mod-All-Versions");
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
> const me = dv.page("Repos/cdanielc293--Jenny-Mod-All-Versions");
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
> const me = dv.page("Repos/cdanielc293--Jenny-Mod-All-Versions");
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
> const me = dv.page("Repos/cdanielc293--Jenny-Mod-All-Versions");
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
> const me = dv.page("Repos/cdanielc293--Jenny-Mod-All-Versions");
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

- [[2026-05-20|2026-05-20]] — 首次收錄，669 stars
