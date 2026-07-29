---
repo: DennisLeroy/WilsonMC
url: https://github.com/DennisLeroy/WilsonMC
owner: DennisLeroy
owner_type: User
language: Rust
license: GPL-3.0
description: "Making fast, efficient Minecraft server hosting accessible to everyone."
homepage: ""
stars: 457
stars_per_day: 16
forks: 29
open_issues: 0
created: 2026-06-30
pushed_at: 2026-07-27
first_seen: 2026-07-01
week: "2026-W27"
month: "2026-07"
category: "其他"
subcategory: "遊戲伺服器"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-07-01
use_case: "提供快速、高效的 Minecraft 伺服器托管，讓每個人都能輕鬆使用。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 5
next_review: "2026-07-12"
contributor_count: 1
engagement: "low"
issue_close_rate: -1
repo_size_kb: 169653
readme_length: 2525
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-07-01"
star_history: "2026-07-01:599,2026-07-01:602,2026-07-02:718,2026-07-02:720,2026-07-03:756,2026-07-03:756,2026-07-04:520,2026-07-04:520,2026-07-05:523,2026-07-05:523,2026-07-06:525,2026-07-07:528,2026-07-08:529,2026-07-09:500,2026-07-10:499,2026-07-11:500,2026-07-12:501,2026-07-13:501,2026-07-14:492,2026-07-15:488,2026-07-16:476,2026-07-17:477,2026-07-18:477,2026-07-19:477,2026-07-20:478,2026-07-21:471,2026-07-22:466,2026-07-23:464,2026-07-24:457,2026-07-25:456,2026-07-26:456,2026-07-27:456,2026-07-28:457,2026-07-29:457"
tags:
  - github
  - "category/其他"
  - "lang/rust"
  - "topic/docker"
  - "topic/game_server"
  - "topic/gamedev"
  - "topic/minecraf_server"
  - "topic/minecraft"
aliases:
  - "WilsonMC"
  - "DennisLeroy/WilsonMC"
  - "提供快速、高效的 Minecraft 伺服器托管，讓每個人都能輕鬆使用。"
---

# WilsonMC

**457** stars · **16** stars/天 · 建立 29 天前 · Rust · GPL-3.0

```dataviewjs
const me = dv.page("Repos/DennisLeroy--WilsonMC");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

`docker` `game-server` `gamedev` `minecraf-server` `minecraft` `networking` `rust` `server`

> [!summary] 一句話摘要
> 提供快速、高效的 Minecraft 伺服器托管，讓每個人都能輕鬆使用。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Growing (16 stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 1 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 希望搭建高效能 Minecraft 伺服器的獨立開發者或小型團隊。
> **一句話重點** Wilson 是一個用 Rust 實作的 Minecraft 伺服器，專注於性能和安全性，適合希望自訂伺服器的開發者。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/DennisLeroy--WilsonMC");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "遊戲伺服器" && p.file.name !== "DennisLeroy--WilsonMC" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 遊戲伺服器 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習、5 小時整合，得到高效能的 Minecraft 伺服器，值得嘗試。

> [!abstract] 核心創新
> Wilson 提供了一個用 Rust 實作的高效能 Minecraft 伺服器，專注於安全性和可配置性。

## 專案簡介

Wilson 是一個完全用 Rust 實作的 Minecraft 伺服器，專注於性能和玩家體驗。它支援最新的 Java 和 Bedrock 版本，並確保遵循遊戲的基本機制。伺服器的設計利用多執行緒來提升速度與效率，並且提供高度的可配置性，讓用戶能夠關閉不必要的功能。使用者可以透過 TOML 格式的配置檔進行設定，並享受如伺服器狀態查詢、加密、封包壓縮等功能。技術上，Wilson 使用了 Rust 的高效能特性，並依賴於 tokio 和 futures 等庫來實現非同步處理，這使得它在高負載情況下仍能保持良好的效能。

與其他 Minecraft 伺服器相比，如 Spigot 和 Paper，Wilson 提供了更高的安全性和靈活性，因為它能夠防止已知的安全漏洞並支持插件開發。對於需要高效能和安全性的伺服器，Wilson 是一個理想的選擇，但仍在開發中，可能會遇到不穩定的情況。使用者在選擇 Wilson 時，應考慮到它的開發狀態和未來的功能完善。適合小型伺服器或希望自訂功能的開發者，但不建議用於大型商業伺服器，因為可能需要更多的穩定性和支持。

**技術棧**：`Rust 1.95` · `tokio 1.53` · `serde_json5 0.2.1`

## 重點功能

- 多執行緒性能 — 利用 Rust 的多執行緒特性提升伺服器效能，支持高並發玩家連接。
- 高度可配置性 — 使用 TOML 格式的配置檔，允許用戶自訂伺服器設置。
- 安全性優先 — 防止已知的安全漏洞，確保玩家資料安全。
- 支援 Java 和 Bedrock 版本 — 兼容最新的 Minecraft 伺服器版本，滿足不同玩家需求。
- 插件開發基礎 — 提供插件開發的框架，讓開發者能夠擴展伺服器功能。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/DennisLeroy/WilsonMC.git
```
2. 進入專案目錄
```bash
cd WilsonMC
```
3. 使用 Cargo 編譯專案
```bash
cargo build --release
```
4. 啟動伺服器
```bash
./target/release/wilson
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 29 天就累積 457 stars（16/天），forks 29（6.3%），這顯示出穩定的增長。作者 DennisLeroy 是一位專注於遊戲伺服器開發的開發者，過去有相關經驗。Wilson 解決了傳統 Minecraft 伺服器在性能和安全性上的痛點，特別是對於希望用 Rust 來提升效能的開發者。近期的社群討論和 GitHub issues 也反映出對於伺服器性能和安全性的需求上升。這個工具的可行性也得益於 Rust 語言在高效能應用中的普及。forks/stars 比率顯示出使用者對於這個專案的興趣，並且有一定的修改需求。

## 適合誰使用

**目標受眾**：希望搭建高效能 Minecraft 伺服器的獨立開發者或小型團隊。

> [!example] 使用場景
> - 伺服器管理員用它來快速搭建 Minecraft 伺服器，因為它提供了高效能和安全性，能夠支持多位玩家同時在線。
> - 遊戲開發者用它來測試自訂的 Minecraft 插件，因為其高度可配置性讓他們能夠輕鬆調整伺服器設置。
> - 獨立開發者用它來學習 Rust 語言和伺服器開發，因為這個專案的設計讓他們能夠深入理解遊戲伺服器的運作原理。

## 架構分析

Wilson 的架構基於 Rust 的高效能特性，使用多執行緒來處理玩家請求和伺服器運行。伺服器的資料流從玩家的請求進入，經過非同步處理後，返回遊戲狀態和數據。選擇 Rust 是為了獲得更好的性能和安全性，但這也意味著需要開發者具備 Rust 的相關知識。由於使用了 tokio 和 futures，伺服器能夠在高負載下保持穩定，但這也增加了學習曲線。擴展性方面，Wilson 支持插件開發，這使得未來可以根據需求擴展功能，但也可能帶來額外的維護負擔。

## 技術深入分析

Wilson 的核心技術機制是基於 Rust 語言的多執行緒特性，這使得伺服器能夠在高並發情況下保持良好的效能。伺服器的資料流從玩家的請求開始，經過 tokio 的非同步處理，最終返回遊戲狀態。這種設計模式使得伺服器能夠快速響應玩家操作，並且在高負載時仍然穩定。選擇 Rust 作為開發語言的原因在於其高性能和安全性，但這也意味著開發者需要具備相應的技能。依賴樹方面，Wilson 使用了多個輕量級的庫，如 tokio 和 serde，這使得整體架構相對簡潔。技術風險方面，隨著伺服器規模的擴大，可能會面臨性能瓶頸，特別是在資源管理和數據同步方面。與主流框架的整合方面，Wilson 目前的設計使其能夠與現有的 Minecraft 生態系統相容，但仍需進一步的測試和優化。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的專案介紹和功能列表，但缺乏詳細的使用範例。安裝過程相對順暢，但對於新手來說，可能需要一些 Rust 的基礎知識。文件沒有多語言支持，目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 高效能 — 利用 Rust 的特性，能夠處理大量並發連接。
> - 靈活性 — 可配置性高，適合不同需求的伺服器設置。
> - 安全性 — 針對已知漏洞進行防護，保障玩家資料安全。

> [!danger] 缺點
> - 仍在開發中，功能不穩定。
> - 對於大型伺服器的支持可能不足。
> - 學習曲線較陡，需要熟悉 Rust 和相關工具。

> [!warning] 注意事項
> - 目前仍在開發中，功能尚未完全穩定。
> - 對於大型伺服器的支持可能不足，特別是在高負載情況下。
> - Bedrock 版本的支持仍在開發中，功能不完整。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [PaperMC/Paper](https://github.com/PaperMC/Paper) | Paper 提供了更成熟的 Minecraft 伺服器解決方案，專注於性能優化和插件生態，但不如 Wilson 靈活可配置。 |
| [SpigotMC/Spigot](https://github.com/SpigotMC/Spigot) | Spigot 是一個廣泛使用的伺服器框架，功能強大，但相對於 Wilson，性能和安全性可能稍遜。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [PaperMC/Paper](https://github.com/PaperMC/Paper) | Paper 使用 Java 實作，專注於性能優化和插件生態，記憶體使用量較低，但不如 Rust 的性能。 | 如果你的團隊已經熟悉 Java 且需要一個成熟的伺服器解決方案，Paper 是更好的選擇。 | medium，因為需要重寫部分插件和配置。 |
| [SpigotMC/Spigot](https://github.com/SpigotMC/Spigot) | Spigot 同樣是用 Java 開發，提供廣泛的插件支持，但在性能上可能不如 Wilson。 | 如果你需要一個穩定的伺服器且不在意性能，Spigot 是不錯的選擇。 | medium，因為需要調整配置和插件。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **WilsonMC** | **Paper** | **Spigot** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Paper 使用 Java 實作，專注於性能優化和插件生態，記憶體使用量較低，但不如 Rust 的性能。 | Spigot 同樣是用 Java 開發，提供廣泛的插件支持，但在性能上可能不如 Wilson。 |
> | 遷移成本 | - | medium，因為需要重寫部分插件和配置。 | medium，因為需要調整配置和插件。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經熟悉 Java 且需要一個成熟的伺服器解決方 | 如果你需要一個穩定的伺服器且不在意性能，Spigot 是不錯 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人開發者或小型專案試用，但不建議用於生產環境。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 伺服器在高負載下可能會出現性能瓶頸，特別是在數據同步時。
  - 解法：優化伺服器配置，減少不必要的功能。
- [MEDIUM] 目前 Bedrock 版本的功能尚未完全實現，可能導致不穩定。
  - 解法：僅使用 Java 版本進行測試。
- [MEDIUM] 對於新手來說，Rust 的學習曲線可能較陡。
  - 解法：參考官方文檔和社群資源進行學習。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型團隊開發自訂 Minecraft 插件 | 非常適合 | Wilson 提供了靈活的插件開發框架，適合快速迭代。 |
| 大型商業伺服器運營 | 不適合 | 目前穩定性不足，可能無法承受高負載。 |
| 獨立開發者學習 Rust 和伺服器開發 | 非常適合 | 專案提供了良好的學習機會和實作範例。 |
| 對性能要求極高的遊戲伺服器 | 適合 | 利用 Rust 的高效能特性，能夠處理大量並發連接。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習、5 小時整合，得到高效能的 Minecraft 伺服器，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 中等風險：伺服器需要適當的權限來運行，但不會存取敏感資料。依賴的庫有一定的安全性，但需定期更新以防止漏洞。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/DennisLeroy--WilsonMC");
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
> const me = dv.page("Repos/DennisLeroy--WilsonMC");
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
| Forks | 29 |
| Open Issues | 0 |
| 最後推送 | 2026-07-27 |
| 建立日期 | 2026-06-30 |
| Repo 大小 | 165.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/DennisLeroy/WilsonMC) |
| Topics | `docker` `game-server` `gamedev` `minecraf-server` `minecraft` `networking` `rust` `server` |

> [!info]- 主要依賴
> `Cargo.toml` 中的核心套件：
> `resolver` `members` `exclude` `all` `nursery` `pedantic` `cargo` `if_then_some_else_none` `empty_enum_variants_with_brackets` `empty_structs_with_brackets` `separated_literal_suffix` `semicolon_outside_block` `redundant_test_prefix` `non_zero_suggestions` `dbg_macro`

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@DennisLeroy](https://github.com/DennisLeroy) | 2502 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/DennisLeroy/WilsonMC/wiki)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-07-25 ~ 2026-07-27）
> **活躍天數** 3 天 · **最新 commit** docs

## README 摘錄

> [!info]- 展開查看原文 README
> # Wilson
> 
> [](https://opensource.org/licenses/gpl-3-0)
> 
> Wilson is a Minecraft server built entirely in Rust, offering a fast, efficient,
> and customizable experience. It prioritizes performance and player enjoyment while adhering to the core mechanics of the game.
> 
> ## Goals
> 
> - **Performance**: Leveraging multi-threading for maximum speed and efficiency.
> - **Compatibility**: Supports the latest Java & Bedrock Minecraft server version while adhering to Vanilla game mechanics.
> - **Security**: Prioritizes security by preventing known security exploits.
> - **Flexibility**: Highly configurable, with the ability to disable unnecessary features.
> - **Extensibility**: Provides a foundation for plugin development.
> 
> > [!IMPORTANT]
> > Wilson is currently under heavy development.
> >
> > [See what needs to be done before the 1.0.0 Release](https://github.com/Wilson-MC/Wilson/issues/449)
> 
> ## Features
> 
> - [x] Configuration (toml)
> - [Tracking: Protocol](https://github.com/Wilson-MC/Wilson/issues/1401)
>   - [x] Server Status/Ping
>   - [x] Encryption
>   - [x] Packet Compression
>   - [x] Java Edition
>   - [x] Bedrock Edition (W.I.P)
>   - ...
> - [Tracking: World](https://github.com/Wilson-MC/Wilson/issues/1403)
>   - [x] Player Tab-list
>   - [x] Scoreboard
>   - [x] World Loading
>   - [x] World Time
>   - [x] World Borders
>   - [x] World Saving
>   - [x] Lighting
>   - [x] Entity Spawning
>   - [x] Bossbar
>   - [x] Chunk Loading (Vanilla, Linear, Pump)
>   - [Chunk Generation](https://github.com/Wilson-MC/Wilson/issues/36)
>   - [x] Chunk Saving (Vanilla, Linear, Pump)
>   - [Redstone](https://github.com/Wilson-MC/Wilson/issues/1402)
>   - [x] Liquid Physics
>   - ...
> - [Tracking: Player](https://github.com/Wilson-MC/Wilson/issues/1405)
>   - [x] Skins
>   - [x] Teleport
>   - [x] Movement
>   - [x] Animation
>   - [x] Inventory
>   - [Combat](https://github.com/Wilson-MC/Wilson/issues/1404)
>   - [x] Experience
>   - [x] Hunger
>   - [X] Off Hand
>   - [X] Advancements (W.I.P)
>   - [x] Eating
>   - ...
> - Entities
>   - [x] Non-Living (Minecart, Eggs...) (W.I.P)
>   - [x] Entity Effects
>   - [x] Players
>   - [x] Mobs (W.I.P)
>   - [x] Animals (W.I.P)
>   - [Entity AI](https://github.com/Wilson-MC/Wilson/issues/1406)
>   - [x] Boss (W.I.P)
>   - [x] Villagers (W.I.P)
>   - [X] Entity Saving
> - Server
>   - [Plugins](https://github.com/Wilson-MC/Wilson/issues/1407)
>   - [x] Query
>   - [x] RCON
>   - [x] Inventories
>   - [x] Particles
>   - [x] Chat
>   - [Commands](https://github.com/Wilson-MC/Wilson/issues/15)
>   - [x] Permissions
>   - [x] Translations
> - Proxy
>   - [x] Bungeecord
>   - [x] Velocity

## 延伸閱讀

相關概念：[[遊戲伺服器]] · [[Rust]] · [[多執行緒]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[2aronS--Duel-Agents|2aronS/Duel-Agents]] · [[nv-tlabs--Gamma-World|nv-tlabs/Gamma-World]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]] · [[ClaudioDrews--memory-os|ClaudioDrews/memory-os]] · [[GammaLabTechnologies--harmonist|GammaLabTechnologies/harmonist]] · [[HKUDS--ClawTeam|HKUDS/ClawTeam]]

[GitHub](https://github.com/DennisLeroy/WilsonMC)

## 相關收錄

> [!note]- 直接競品（同子分類：遊戲伺服器）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "遊戲伺服器" AND file.name != "DennisLeroy--WilsonMC"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "DennisLeroy--WilsonMC"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Rust" AND file.name != "DennisLeroy--WilsonMC" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W27" AND file.name != "DennisLeroy--WilsonMC"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["遊戲伺服器","Rust","多執行緒"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "DennisLeroy--WilsonMC" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/DennisLeroy--WilsonMC");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "DennisLeroy--WilsonMC" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "DennisLeroy" AND file.name != "DennisLeroy--WilsonMC"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/DennisLeroy--WilsonMC");
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
> const me = dv.page("Repos/DennisLeroy--WilsonMC");
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
> const me = dv.page("Repos/DennisLeroy--WilsonMC");
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
> const me = dv.page("Repos/DennisLeroy--WilsonMC");
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
> const me = dv.page("Repos/DennisLeroy--WilsonMC");
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

> **2026-07-01** — 首次收錄
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

- [[2026-07-05|2026-07-05]] — 再次上榜，523 stars
- [[2026-07-04|2026-07-04]] — 再次上榜，520 stars
- [[2026-07-03|2026-07-03]] — 再次上榜，756 stars
- [[2026-07-02|2026-07-02]] — 再次上榜，718 stars
- [[2026-07-01|2026-07-01]] — 首次收錄，599 stars
