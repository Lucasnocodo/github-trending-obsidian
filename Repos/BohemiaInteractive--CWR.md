---
repo: BohemiaInteractive/CWR
url: https://github.com/BohemiaInteractive/CWR
owner: BohemiaInteractive
owner_type: Organization
language: C++
license: NOASSERTION
description: "Arma: Cold War Assault Remastered Source Code Repository."
homepage: ""
stars: 494
stars_per_day: 165
forks: 58
open_issues: 4
created: 2026-06-22
pushed_at: 2026-06-22
first_seen: 2026-06-26
week: "2026-W26"
month: "2026-06"
category: "其他"
subcategory: "遊戲開發"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-06-26
use_case: "提供《Arma: Cold War Assault》的重製版引擎和遊戲源碼。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-07-03"
contributor_count: 2
engagement: "medium"
issue_close_rate: 0
repo_size_kb: 5320
readme_length: 4621
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-06-26"
star_history: "2026-06-26:494,2026-06-26:494"
tags:
  - github
  - "category/其他"
  - "lang/c++"
  - org
aliases:
  - "CWR"
  - "BohemiaInteractive/CWR"
  - "提供《Arma: Cold War Assault》的重製版引擎和遊戲源碼。"
---

# CWR

**494** stars · **165** stars/天 · 建立 3 天前 · C++ · NOASSERTION

```dataviewjs
const me = dv.page("Repos/BohemiaInteractive--CWR");
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
> 提供《Arma: Cold War Assault》的重製版引擎和遊戲源碼。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (165 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 3 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 希望重製經典遊戲或開發自定義模組的獨立遊戲開發者。
> **一句話重點** 這個專案不僅是源碼的釋出，更是對經典遊戲的重生與延續。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/BohemiaInteractive--CWR");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "遊戲開發" && p.file.name !== "BohemiaInteractive--CWR" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 遊戲開發 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **安裝** Medium (需設定)

> [!abstract] 核心創新
> 這個專案提供了現代化的遊戲引擎源碼，讓經典遊戲能夠在現代環境中繼續發展。

## 專案簡介

這個專案是《Arma: Cold War Assault》的重製版源碼，代號為 *Poseidon*，最初於2001年發行。它的核心機制是將舊有的遊戲引擎現代化，使用 C++20 和 CMake 進行構建，並支援 Windows 和 Linux 平台。使用者可以透過 `cmake --preset win-x64-clang-rwdi` 指令來編譯，這樣的設計使得開發者能夠在多平台上進行開發和測試。這個專案的賣點在於它不僅提供了源碼，還鼓勵社群進行修改和擴展，讓這款經典遊戲能夠在現代環境中繼續生存。技術上，專案使用了 CMake 和 Clang，這使得編譯過程更為靈活且易於管理。相較於其他遊戲引擎，如 Unity 或 Unreal Engine，這個專案的依賴性較低，因為它主要依賴於 C++ 標準庫和一些第三方庫。

與 Unity 的高階抽象和 Unreal 的藍圖系統相比，這個專案提供了更底層的控制，適合需要自定義功能的開發者。實際使用中，開發者可能會遇到編譯環境設置的挑戰，特別是在 Linux 上，這在 Issues 中也有提到。專案目前處於早期階段，社群活躍度高，但仍需進一步的文檔和支持。未來六個月內，隨著社群的參與和貢獻，專案有潛力成為一個穩定的開發平台。適合對經典遊戲開發和引擎修改有興趣的開發者，特別是那些希望在開源環境中進行創作的人。需要注意的是，使用者必須獲得遊戲數據以運行編譯後的二進制文件，這可能會增加使用的複雜性。

**技術棧**：`C++ 20` · `CMake` · `Clang`

## 重點功能

- 跨平台支持 — 支援 Windows 和 Linux 平台，方便開發者在不同環境中使用。
- 現代化的 C++20 引擎 — 使用最新的 C++ 標準，提供更好的性能和語法支持。
- CMake 構建系統 — 使用 CMake 進行編譯，簡化了構建過程，支持多種編譯器。
- 開源社群參與 — 鼓勵開發者修改和擴展源碼，促進社群貢獻。
- 完整的遊戲源碼 — 提供完整的引擎和遊戲邏輯，方便開發者進行深入開發。

## 快速開始

1. 設置 CMake 預設
```bash
cmake --preset win-x64-clang-rwdi
```
2. 編譯專案
```bash
cmake --build build/win-x64-clang-rwdi
```
3. 在 Linux 上使用相應的預設
```bash
cmake --preset linux-x64-clang-rwdi
```

## 程式碼範例

```cpp
{
  "前置條件": "需要安裝 CMake 和 Clang",
  "指令": "cmake --preset win-x64-clang-rwdi",
  "預期輸出": "成功生成編譯配置。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 3 天內累積 494 stars（165/天），forks 58（11.7%），顯示出強烈的社群興趣。Bohemia Interactive 是這個專案的開發者，過去他們在遊戲開發上有豐富的經驗，這使得專案具有可信度。這個專案解決了遊戲開發者對於舊有遊戲引擎的需求，提供了一個可修改的源碼基礎，讓開發者能夠進行創新。社群的反應熱烈，尤其是對於重製版的期待。技術上，這個專案的開源性和跨平台支持是其吸引力的關鍵，特別是在 Linux 環境中。forks/stars 比率為 11.7%，顯示出不少開發者在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：希望重製經典遊戲或開發自定義模組的獨立遊戲開發者。

> [!example] 使用場景
> - 遊戲開發者用它來重製經典遊戲，因為它提供了完整的源碼和現代化的引擎架構。
> - 學術研究者用它來研究遊戲引擎的演進，因為它的開源性允許深入分析和修改。
> - 獨立開發者用它來創建自定義模組，因為它的靈活性和可擴展性讓他們能夠自由創作。

## 架構分析

這個專案採用 CMake 作為構建系統，這使得跨平台支持變得更加簡單。資料流中，源碼經過 CMake 配置後，會生成適合目標平台的編譯文件。選擇 CMake 的好處在於它的靈活性和廣泛支持的編譯器，代價是需要開發者熟悉 CMake 的配置方式。專案的架構設計使得不同模組之間的依賴關係清晰，便於維護和擴展。未來可能的擴展瓶頸在於如何管理第三方依賴，特別是當專案規模擴大時，這可能會影響編譯速度和維護成本。

## 技術深入分析

這個專案的核心技術機制是將舊有的遊戲引擎現代化，使用 C++20 進行重構，這使得引擎能夠利用最新的語言特性來提高性能和可讀性。它的架構設計使用了 CMake 作為構建系統，這不僅簡化了編譯過程，還提供了跨平台的支持。專案能夠處理的資料量取決於遊戲數據的大小，並且在編譯過程中，開發者需要確保所有依賴都正確安裝。選擇 CMake 的好處在於它的靈活性和廣泛支持的編譯器，但這也意味著開發者需要花時間學習如何配置 CMake。技術風險方面，隨著專案的擴大，對於第三方庫的依賴可能會成為瓶頸，特別是在版本更新和兼容性方面。整合方面，這個專案與主流的開發工具鏈（如 VS Code 和 GitHub Actions）相容性良好，但在整合過程中可能會遇到文檔不足的問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指令和基本的設置步驟，但對於新手來說，可能需要額外的文檔來解釋環境設置。安裝過程相對順暢，但在 Linux 環境下可能會遇到一些挑戰。總體來說，花 30 分鐘能夠完成基本的編譯和運行，但對於新手來說，可能需要查閱額外的資源。

## 優缺點分析

> [!success] 優點
> - 提供完整的源碼，方便開發者進行修改和擴展。
> - 支持多平台，能夠在不同操作系統上運行。
> - 使用現代化的 C++ 標準，提供更好的性能和語法支持。

> [!danger] 缺點
> - 需要額外的遊戲數據才能運行編譯後的二進制文件。
> - 文檔不夠完善，特別是在 Linux 環境的設置上。
> - 社群支持仍在發展中，可能缺乏即時的技術支援。

> [!warning] 注意事項
> - 需要額外的遊戲數據才能運行編譯後的二進制文件。
> - 目前文檔不夠完善，特別是在 Linux 環境的設置上。
> - 社群支持仍在發展中，可能缺乏即時的技術支援。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/BohemiaInteractive--CWR");
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
> const me = dv.page("Repos/BohemiaInteractive--CWR");
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
| Forks | 58 |
| Open Issues | 4 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-06-22 |
| 建立日期 | 2026-06-22 |
| Repo 大小 | 5.2 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/BohemiaInteractive/CWR) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C++" : 95
>     "Rust" : 3
>     "CMake" : 1
>     "SQF" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@BohemiaOwner](https://github.com/BohemiaOwner) | 1 |
> | [@simi](https://github.com/simi) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度高，Issues 和反饋持續增加。
**連結**：[文件](https://github.com/BohemiaInteractive/CWR)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-06-22 ~ 2026-06-22）
> **活躍天數** 1 天 · **最新 commit** Update issue templates

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#2](https://github.com/BohemiaInteractive/CWR/issues/2) | Thank you! | 37 | 3 |
> | [#1](https://github.com/BohemiaInteractive/CWR/issues/1) | We were expecting Cold War Crisis remaster in Arma Reforger  | 27 | 2 |
> | [#4](https://github.com/BohemiaInteractive/CWR/issues/4) | [Linux] Complicated build process and maybe better documenta | 0 | 3 |
> | [#3](https://github.com/BohemiaInteractive/CWR/issues/3) | Setting up a correct build environment | 0 | 5 |

## README 摘錄

> [!info]- 展開查看原文 README
> # Arma: Cold War Assault - Remastered
> 
> This repository holds the engine and game source code (codename *Poseidon*) behind *Arma: Cold War Assault* — the game first released in 2001 as *Operation Flashpoint: Cold War Crisis*. That release launched Bohemia Interactive and began the technology lineage that later grew into Real Virtuality, Arma, and Enfusion. The code has been modernized to C++20, built with CMake and Clang, with cross-platform support for Windows x64 and Linux x64.
> Bohemia Interactive is releasing it to the community that has kept this game alive for more than two decades — to study it, build on it, fix it, and create from it. Three things are worth keeping separate:
> 
> **Source code (this repository)**
> 
> The engine and game executables, licensed under GPL-3.0-or-later with additional terms under Section 7. You may use, study, modify, and redistribute it, provided it stays GPL and you follow those terms.
> 
> **The name and brand**
> 
> "ARMA", "Operation Flashpoint", and the logos are *not* granted. The trademarks stay with their owners ("ARMA" is Bohemia Interactive's). A fork must be renamed and must not present itself as "Arma" or as an official Bohemia Interactive product.
> 
> **Game data (separate)**
> 
> Models, textures, sounds, missions, and voices. These are not in this repository and are not GPL; they ship separately under the APL-SA license. A free Demo is available on Steam.
> 
> In short: the code is free software, the name is not, and the game data comes separately. This license covers the source code only and grants no rights to the trademarks.
> 
> ## Quick Start
> 
> ```sh
> cmake --preset win-x64-clang-rwdi
> cmake --build build/win-x64-clang-rwdi
> ```
> 
> On GNU/Linux, use the matching `linux-x64-clang-rwdi` preset.
> 
> ## Layout
> 
> - [Apps](apps/README.md) - executable targets
> - [Engine](engine/README.md) - engine libraries and Rust Trident tooling
> - [Master server tools](mserver/README.md) - Rust service and CLI crates
> - [Tests](tests/README.md) - test source trees; CI currently compiles them only
> - `cmake/` - presets, toolchains, vcpkg triplets, and overlay ports
> - `docker/` - container support for service and runtime environments
> - `packages/` - ignored local game data staging area
> - `resources/` - application icon resources
> - `thirdparty/` - vendored third-party headers and sources
> 
> ## Project Notes
> 
> - [Contributing](CONTRIBUTING.md)
> - [Credits](CREDITS.md)
> - [Third-party notices](THIRD_PARTY_NOTICES.md)
> - [Vendored dependencies](thirdparty/README.md)
> 
> ## License
> 
> The source in this repository is licensed under the **GNU General Public License
> v3.0 *or later***, with additional terms under **Section 7** of the GPL. See [`LICENSE`](LICENSE) for the
> full text.
> This license does not grant you any right to use "ARMA" or any other Bohemia Interactive trademark.
> 
> The [`thirdparty/`](thirdparty) directory is **excluded** from the project's GPL
> license: it contains vendored third-party code (glad, the RenderDoc API header)
> under their own respective licenses — see [`thirdparty/README.md`](thirdparty/README.md).
> Dependencies pulled in via vcpkg ([`vcpkg.json`](vcpkg.json)) likewise remain under
> their own licenses.
> 
> *"ARMA" is a registered trademark of BOHEMIA INTERACTIVE a.s. "OPERATION FLASHPOINT" is a registered trademark of Electronic Arts Inc.
> See [`LICENSE`](LICENSE) for information concerning trademarks. This credits file is
> informational and does not constitute any grant and/or waiver of rights.*
> 
> ### Game data / assets — Arma Public License Share Alike (APL-SA)
> 
> Game data and assets (models, textures, sounds, missions, etc.) are **not part of
> this repository** and are **not** covered by the GPL. They are released separately
> by Bohemia Interactive under the **Arma Public License Share Alike (APL-SA)**:
> 
> - APL-SA license text: 
> 
> ### Getting game data to run what you build
> 
> The compiled binaries need game data to run. You can obtain the **free Demo game
> data** on Steam:
> 
> - *Arma: Cold War Assault Remastered* Demo on Steam: 
> 
> The full game data ships with the retail game. Whatever you do with assets is
> governed by the APL-SA linked above; whatever you do with this source is governed by
> the GPL with additional terms per Section 7 in [`LICENSE`](LICENSE).
> 
> ## Contributing
> 
> This is a **locked** repository: pull requests are not accepted here, and this
> repository will not be continuously updated.
> Issues are only for bugs in official Bohemia Interactive builds distributed on
> Steam. For ideas, development builds, ports, and community work, fork the code or
> join the community continuation. See [`CONTRIBUTING.md`](CONTRIBUTING.md) for more information.

## 延伸閱讀

相關概念：[[遊戲開發]] · [[開源軟體]] · [[CMake]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[0xGF--boneyard|0xGF/boneyard]] · [[Juwluuu--Subnautica-2-Release|Juwluuu/Subnautica-2-Release]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[SubamanojJ-2004--gta-5-mod-menu|SubamanojJ-2004/gta-5-mod-menu]] · [[leigest519--OpenGame|leigest519/OpenGame]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]]

[GitHub](https://github.com/BohemiaInteractive/CWR)

## 相關收錄

> [!note]- 直接競品（同子分類：遊戲開發）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "遊戲開發" AND file.name != "BohemiaInteractive--CWR"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "BohemiaInteractive--CWR"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C++" AND file.name != "BohemiaInteractive--CWR" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W26" AND file.name != "BohemiaInteractive--CWR"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["遊戲開發","開源軟體","CMake"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "BohemiaInteractive--CWR" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/BohemiaInteractive--CWR");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "BohemiaInteractive--CWR" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "BohemiaInteractive" AND file.name != "BohemiaInteractive--CWR"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/BohemiaInteractive--CWR");
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
> const me = dv.page("Repos/BohemiaInteractive--CWR");
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
> const me = dv.page("Repos/BohemiaInteractive--CWR");
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
> const me = dv.page("Repos/BohemiaInteractive--CWR");
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
> const me = dv.page("Repos/BohemiaInteractive--CWR");
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

> **2026-06-26** — 首次收錄
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

- [[2026-06-26|2026-06-26]] — 首次收錄，494 stars
