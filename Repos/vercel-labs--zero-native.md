---
repo: vercel-labs/zero-native
url: https://github.com/vercel-labs/zero-native
owner: vercel-labs
owner_type: Organization
language: Zig
license: Apache-2.0
description: "Build desktop + mobile apps with Zig and web UI"
homepage: "https://zero-native.dev"
stars: 2953
stars_per_day: 738
forks: 125
open_issues: 23
created: 2026-05-08
pushed_at: 2026-05-12
first_seen: 2026-05-10
week: "2026-W20"
month: "2026-05"
category: "開發工具"
subcategory: "桌面應用"
release_tag: "v0.1.9"
install_complexity: "easy"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-05-10
use_case: "用 Zig 和網頁 UI 構建桌面和移動應用，實現小型二進制和快速重建。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 4
next_review: "2026-05-16"
contributor_count: 3
engagement: "low"
issue_close_rate: 0
repo_size_kb: 576
readme_length: 4251
bus_factor: 1
last_release_days: 1
release_cadence: "weekly"
verdict: ""
ring_history: "assess@2026-05-10"
star_history: "2026-05-10:1650,2026-05-11:2308,2026-05-12:2649,2026-05-13:2953"
tags:
  - github
  - "category/開發工具"
  - "lang/zig"
  - org
  - easy_install
aliases:
  - "zero-native"
  - "vercel-labs/zero-native"
  - "用 Zig 和網頁 UI 構建桌面和移動應用，實現小型二進制和快速重建。"
---

# zero-native

**1.6k** stars · **1.6k** stars/天 · 建立 1 天前 · Zig · Apache-2.0

```dataviewjs
const me = dv.page("Repos/vercel-labs--zero-native");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`ORG` `v0.1.9` `easy-install`

> [!summary] 一句話摘要
> 用 Zig 和網頁 UI 構建桌面和移動應用，實現小型二進制和快速重建。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Viral (1.6k stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人 · **參與度** Low
> **適合** 需要快速構建原生桌面應用並希望使用現代網頁技術的開發者。
> **一句話重點** zero-native 的設計讓開發者能夠快速構建輕量級的桌面應用，並且利用現有的網頁技術進行開發。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/vercel-labs--zero-native");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "桌面應用" && p.file.name !== "vercel-labs--zero-native" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 桌面應用 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Easy (一行搞定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學、5 小時整合，得到快速構建桌面應用的能力，值得一試。

> [!abstract] 核心創新
> zero-native 提供了一個用 Zig 語言構建的輕量級桌面應用框架，專注於快速重建和小型二進制檔案。

## 專案簡介

zero-native 是一個用於構建原生桌面應用的工具，專注於使用 Zig 語言來實現輕量級和快速的應用開發。用戶可以選擇使用系統 WebView 來保持應用體積小，或通過 CEF 打包 Chromium 以獲得一致的渲染效果。安裝 CLI 後，使用 `zero-native init my_app --frontend next` 指令即可快速創建應用，並且在首次運行時會自動安裝前端依賴並構建原生外殼。這種設計使得應用啟動速度快，因為不需要捆綁瀏覽器運行時，並且 Zig 語言的特性使得原生層的重建速度極快。zero-native 的安全模型也很明確，WebView 默認被視為不受信任，所有原生命令和權限都需要明確授權。與其他工具相比，zero-native 提供了更靈活的選擇，能夠在不同平台上輕鬆構建應用，並且在性能和安全性上有較好的平衡。這個專案目前處於預發佈階段，支援 macOS、Linux 和 Windows，並且有計劃進一步擴展功能和穩定性。

**技術棧**：`Zig` · `Objective-C++` · `C` · `JavaScript`

## 重點功能

- 輕量級應用 — 使用系統 WebView，無需捆綁瀏覽器運行時，保持應用體積小。
- 選擇網頁引擎 — 可選擇使用系統 WebView 或 CEF 以獲得一致的渲染效果。
- 快速重建 — Zig 語言的特性使得原生層的重建速度極快，提升開發效率。
- 明確的安全模型 — WebView 默認視為不受信任，所有原生命令和權限需明確授權。
- 跨平台支持 — 支援 macOS、Linux 和 Windows，方便開發者在多個平台上構建應用。

## 快速開始

1. 安裝 CLI
```bash
npm install -g zero-native
```
2. 創建並運行應用
```bash
zero-native init my_app --frontend next
```
3. 進入應用目錄並運行
```bash
cd my_app && zig build run
```

## 程式碼範例

```zig
[
  "# 前置條件：安裝 zero-native CLI",
  "zero-native init my_app --frontend next",
  "# 預期輸出：創建一個新的應用並啟動。"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 1 天就累積 1650 stars（1650/天），forks 68（4.1%），這顯示出強烈的興趣和潛在的使用者基礎。作者 ctate 之前在開源社區有過多個貢獻，這次專案解決了桌面應用開發中對於輕量和快速重建的需求，特別是在需要使用現代網頁前端技術的情境下。雖然目前沒有明確的觸發事件，但其獨特的設計和功能吸引了開發者的注意。這個工具的出現是因為 Zig 語言的流行和對於高效能應用的需求，forks/stars 比率顯示出一定的實際使用和修改潛力。

## 適合誰使用

**目標受眾**：需要快速構建原生桌面應用並希望使用現代網頁技術的開發者。

> [!example] 使用場景
> - 前端工程師用它來快速構建桌面應用，因為它支持使用現有的網頁技術，並且能夠快速重建，提升開發效率。
> - 移動開發者用它來在 iOS 和 Android 上嵌入原生應用，因為它提供了簡單的 C ABI 連接，方便與現有的原生代碼整合。
> - 小型團隊用它來開發輕量級的內部工具，因為它的二進制檔案小且啟動迅速，適合快速迭代和部署。

## 架構分析

zero-native 採用 Zig 語言作為核心開發語言，這使得原生層能夠直接調用 C 語言的庫，保持高效能和低內存佔用。架構中，應用的元數據和配置存儲在 `app.zon` 文件中，這樣可以靈活定義應用的行為和安全政策。資料流方面，應用的 WebView 來源可以是內嵌 HTML、URL 或本地資源，這樣的設計使得開發者可以根據需求選擇合適的資源。選擇 Zig 而非其他語言如 C++，使得編譯時間更短，開發過程中能夠快速迭代。這種架構在小型應用中表現良好，但在大型應用中可能會面臨擴展性瓶頸，特別是在需要整合多個原生庫的情況下。

## 技術深入分析

zero-native 的核心技術機制基於 Zig 語言，這使得它能夠直接調用 C 語言的庫，保持高效能。這種設計模式使得應用的二進制檔案小且啟動迅速，特別適合需要快速迭代的開發環境。效能方面，由於使用了系統 WebView，應用的啟動時間和內存佔用都很低，適合小型應用。選擇 Zig 而非其他語言如 C++，使得編譯時間更短，開發過程中能夠快速迭代。這個選擇雖然帶來了更快的開發速度，但在某些情況下可能會限制與其他語言的整合能力。技術風險方面，隨著應用規模的擴大，可能會面臨擴展性瓶頸，特別是在需要整合多個原生庫的情況下。整合方面，zero-native 與現有的開發工具鏈（如 Next.js）相容性良好，但在某些情況下可能需要額外的配置來實現最佳效果。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含範例，安裝過程順暢，沒有明顯的坑。提供了良好的快速入門指南，文件目前僅有英文版本。

## 優缺點分析

> [!success] 優點
> - 小型二進制檔案，快速啟動。
> - 支持多平台，方便開發者跨平台部署。
> - 明確的安全模型，減少潛在的安全風險。

> [!danger] 缺點
> - 仍在預發佈階段，功能可能不穩定。
> - 對於不熟悉 Zig 的開發者有學習曲線。
> - 某些平台的支持可能不如成熟的框架。

> [!warning] 注意事項
> - 目前仍在預發佈階段，可能存在不穩定的功能。
> - 對於某些平台的支持可能不如成熟的桌面應用框架。
> - 需要開發者熟悉 Zig 語言，對於不熟悉的開發者有一定學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 提供類似的桌面應用開發功能，但主要基於其他語言和框架，可能在性能和靈活性上有所不同。 |
| [Lightricks/LTX-Desktop](https://github.com/Lightricks/LTX-Desktop) | 專注於高效能的桌面應用開發，但不支持 Zig，可能需要更多的配置和學習成本。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 使用 Python 和 C++ 組合來構建桌面應用，可能在性能上不如 Zig，但生態系統更成熟。 | 如果你的團隊已經熟悉 Python，且需要更豐富的庫支持，則選擇它。 | medium，因為需要重寫部分邏輯和配置。 |
| [Lightricks/LTX-Desktop](https://github.com/Lightricks/LTX-Desktop) | 專注於高效能的桌面應用開發，但不支持 Zig，可能需要更多的配置和學習成本。 | 如果你的應用需要高性能且團隊熟悉 C++，則選擇它。 | high，因為需要重寫大部分代碼和配置。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **zero-native** | **agent-sprite-forge** | **LTX-Desktop** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 使用 Python 和 C++ 組合來構建桌面應用，可能在性能上不如 Zig，但生態系統更成熟。 | 專注於高效能的桌面應用開發，但不支持 Zig，可能需要更多的配置和學習成本。 |
> | 遷移成本 | - | medium，因為需要重寫部分邏輯和配置。 | high，因為需要重寫大部分代碼和配置。 |
> | 適用場景 | 主要場景 | 如果你的團隊已經熟悉 Python，且需要更豐富的庫支持，則 | 如果你的應用需要高性能且團隊熟悉 C++，則選擇它。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人 side project 試用，不建議用在生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些平台上可能無法正確加載 WebView，特別是在 Linux 上。
  - 解法：檢查平台支持的 WebView 配置，確保正確設置。
- [MEDIUM] 安裝過程中可能會出現依賴問題，特別是 Zig 的版本不兼容。
  - 解法：確保使用最新版本的 Zig 和相關依賴。
- [MEDIUM] 應用在某些情況下可能無法正確處理外部鏈接。
  - 解法：檢查應用的安全政策和權限設置。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊開發內部工具 | 非常適合 | 因為其輕量級和快速重建的特性非常符合小型團隊的需求。 |
| 大型企業開發複雜的桌面應用 | 不適合 | 因為目前仍在預發佈階段，功能不夠穩定。 |
| 需要快速迭代的開發環境 | 非常適合 | 因為其快速重建和小型二進制的特性使得開發過程更加高效。 |
| 對安全性要求極高的應用 | 適合 | 因為其明確的安全模型可以有效控制權限和命令。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學、5 小時整合，得到快速構建桌面應用的能力，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：WebView 默認視為不受信任，所有原生命令和權限需明確授權，降低了潛在的安全風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/vercel-labs--zero-native");
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
> const me = dv.page("Repos/vercel-labs--zero-native");
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
| Forks | 68 |
| Open Issues | 14 |
| Issue 解決率 | 0% (0 closed) |
| 最後推送 | 2026-05-09 |
| 建立日期 | 2026-05-08 |
| 官方網站 | [Link](https://zero-native.dev) |
| Repo 大小 | 576 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/vercel-labs/zero-native) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Zig" : 74
>     "Objective-C++" : 7
>     "Objective-C" : 7
>     "C" : 6
>     "C++" : 3
>     "JavaScript" : 2
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@ctate](https://github.com/ctate) | 19 |
> | [@Anshuman71](https://github.com/Anshuman71) | 1 |
> | [@PrathamGhaywat](https://github.com/PrathamGhaywat) | 1 |

**最新版本**：v0.1.9 (2026-05-09)

> [!info]- Release Notes
> ### New Features
> 
> - **Linux and Windows desktop support**: Add platform-aware CEF tooling, Linux and Windows desktop build paths, Windows native host plumbing, and cross-platform CEF runtime packaging/release coverage.
> 
> ### Contributors
> 
> - @ctate
> 
> ### Bug Fixes
> 
> - **Install completion delay** - Drain redirected GitHub responses during postinstall so npm exits immediately after the native binary is installed.
> 
> ### Contributors
> 
> - @ctate
> 
> ### Improvements
> 
> - **Install progress** - Show native binary download progress and checksum status during the npm postinstall step.
> 
> ### Contributors
> 
> - @ctate
> 
> ### Improvements
> 
> - **Init next steps** - Print the follow-up commands after scaffolding so users can immediately run their new app.
> 
> ### Contributors
> 

## 社群與生態

**社群活躍度**：社群活躍度中等，開發者持續貢獻和修復問題。
**連結**：[文件](https://zero-native.dev)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-05-09 ~ 2026-05-09）
> **活躍天數** 1 天 · **最新 commit** Merge pull request #11 from vercel-labs/anshuman/react-example-add-missing-types

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#16](https://github.com/vercel-labs/zero-native/issues/16) | ee2ðsd da ß | 0 | 0 |
> | [#15](https://github.com/vercel-labs/zero-native/issues/15) | feat: thread-safe WebView reload API for sidecar-respawn use | 0 | 0 |
> | [#13](https://github.com/vercel-labs/zero-native/issues/13) | CEF Missing for Linux/Windows | 0 | 0 |

## README 摘錄

> [!info]- 展開查看原文 README
> # zero-native
> 
> Build native desktop apps with web UI. Tiny binaries. Minimal memory. Instant rebuilds.
> 
> zero-native is a Zig desktop app shell for modern web frontends. Use the platform WebView when you want the smallest possible app, or bundle Chromium through CEF when rendering consistency matters.
> 
> ## Quick Start
> 
> Install the CLI:
> 
> ```bash
> npm install -g zero-native
> ```
> 
> Create and run an app:
> 
> ```bash
> zero-native init my_app --frontend next
> cd my_app
> zig build run
> ```
> 
> The first run installs frontend dependencies, builds the generated native shell, and opens a desktop window rendering your web UI.
> 
> Read the full guide at [zero-native.dev/quick-start](https://zero-native.dev/quick-start).
> 
> ## Why zero-native
> 
> ### Tiny and fast
> 
> System WebView apps do not bundle a browser runtime, so the native shell stays small and starts quickly. Your app uses WKWebView on macOS and WebKitGTK on Linux.
> 
> ### Choose your web engine
> 
> Pick the engine that fits the product. System WebView gives you a lightweight native footprint. Chromium through CEF gives you predictable rendering and a pinned web platform on supported targets.
> 
> ### Fast native rebuilds
> 
> The native layer is Zig, so app logic, bridge commands, and platform integrations rebuild quickly. Your frontend can still use the web tooling you already know.
> 
> ### Native power without heavy glue
> 
> Zig calls C directly, which keeps platform SDKs, native libraries, codecs, and local system integrations within reach when the WebView layer needs to do real native work.
> 
> ### Explicit security model
> 
> The WebView is treated as untrusted by default. Native commands, permissions, navigation, external links, and window APIs are opt-in and policy controlled.
> 
> ## Status
> 
> zero-native is pre-release. Desktop support now covers macOS, Linux, and Windows build paths, with Chromium/CEF distributed as platform-specific runtimes.
> 
> ## Core Concepts
> 
> `App` is the small Zig object that describes your application: name, WebView source, lifecycle hooks, and optional native services.
> 
> `Runtime` owns the event loop, windows, bridge dispatch, automation hooks, tracing, and platform services.
> 
> `WebViewSource` tells the runtime what to load: inline HTML, a URL, or packaged frontend assets served from a local app origin.
> 
> `app.zon` is the app manifest. It declares app metadata, icons, windows, frontend assets, web engine selection, security policy, bridge permissions, and packaging inputs.
> 
> `window.zero.invoke()` is the JavaScript-to-Zig bridge. Calls are size-limited, origin checked, permission checked, and routed only to registered handlers.
> 
> ## Configuration
> 
> Most project-level behavior lives in `app.zon`:
> 
> ```zig
> .{
>     .id = "com.example.my-app",
>     .name = "my-app",
>     .display_name = "My App",
>     .version = "0.1.0",
>     .web_engine = "system",
>     .permissions = .{ "window" },
>     .capabilities = .{ "webview", "js_bridge" },
>     .security = .{
>         .navigation = .{
>             .allowed_origins = .{ "zero://app", "http://127.0.0.1:5173" },
>         },
>     },
>     .windows = .{
>         .{ .label = "main", .title = "My App", .width = 960, .height = 640 },
>     },
> }
> ```
> 
> Use `.web_engine = "system"` for the platform WebView. On supported macOS builds, use `.web_engine = "chromium"` with a `.cef` config when you want to bundle Chromium.
> 
> ## Documentation
> 
> The full documentation is at [zero-native.dev](https://zero-native.dev).
> 
> - [Quick Start](https://zero-native.dev/quick-start)
> - [Web Engines](https://zero-native.dev/web-engines)
> - [App Model](https://zero-native.dev/app-model)
> - [Bridge](https://zero-native.dev/bridge)
> - [Security](https://zero-native.dev/security)
> - [Packaging](https://zero-native.dev/packaging)
> 
> ## Examples
> 
> Framework-specific starter examples live in `examples/`:
> 
> - `examples/next`
> - `examples/react`
> - `examples/svelte`
> - `examples/vue`
> 
> Each example is a complete zero-native app with `app.zon`, a Zig shell, and a minimal frontend project. Run one with `zig build run` from its directory.
> 
> Mobile embedding examples are available too:
> 
> - `examples/ios`
> - `examples/android`
> 
> These show how an iOS or Android host app links the zero-native C ABI from `libzero-native.a`.
> 
> For local framework development, see [CONTRIBUTING.md](./CONTRIBUTING.md).

## 延伸閱讀

相關概念：[[CLI/TUI]] · [[容器化]] · [[自動化測試]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[qiuzhi2046--Qclaw|qiuzhi2046/Qclaw]] · [[0xGF--boneyard|0xGF/boneyard]] · [[432539--gpt2api|432539/gpt2api]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Infatoshi--OpenSquirrel|Infatoshi/OpenSquirrel]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]]

[GitHub](https://github.com/vercel-labs/zero-native) · [官方網站](https://zero-native.dev)

## 相關收錄

> [!note]- 直接競品（同子分類：桌面應用）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "桌面應用" AND file.name != "vercel-labs--zero-native"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "vercel-labs--zero-native"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Zig" AND file.name != "vercel-labs--zero-native" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W20" AND file.name != "vercel-labs--zero-native"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["CLI/TUI","容器化","自動化測試"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "vercel-labs--zero-native" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/vercel-labs--zero-native");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "vercel-labs--zero-native" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "vercel-labs" AND file.name != "vercel-labs--zero-native"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/vercel-labs--zero-native");
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
> const me = dv.page("Repos/vercel-labs--zero-native");
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
> const me = dv.page("Repos/vercel-labs--zero-native");
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
> const me = dv.page("Repos/vercel-labs--zero-native");
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
> const me = dv.page("Repos/vercel-labs--zero-native");
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

> **2026-05-10** — 首次收錄
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

- [[2026-05-13|2026-05-13]] — 再次上榜，3.0k stars
- [[2026-05-12|2026-05-12]] — 再次上榜，2.6k stars
- [[2026-05-11|2026-05-11]] — 再次上榜，2.3k stars
- [[2026-05-10|2026-05-10]] — 首次收錄，1.6k stars
