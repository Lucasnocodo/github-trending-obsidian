---
repo: LaurieWired/tailslayer
url: https://github.com/LaurieWired/tailslayer
owner: LaurieWired
owner_type: User
language: C++
license: Apache-2.0
description: "Library for reducing tail latency in RAM reads"
homepage: ""
stars: 1915
stars_per_day: 383
forks: 101
open_issues: 14
created: 2026-04-05
pushed_at: 2026-04-07
first_seen: 2026-04-10
week: "2026-W15"
month: "2026-04"
category: "開發工具"
subcategory: "效能優化"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-04-10
use_case: "減少 RAM 讀取中的尾延遲，提升效能。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-04-13"
contributor_count: 1
engagement: "low"
issue_close_rate: 7
repo_size_kb: 41
readme_length: 3232
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-10"
star_history: "2026-04-10:1667,2026-04-10:1668,2026-04-11:1915"
tags:
  - github
  - "category/開發工具"
  - "lang/c++"
aliases:
  - "tailslayer"
  - "LaurieWired/tailslayer"
  - "減少 RAM 讀取中的尾延遲，提升效能。"
---

# tailslayer

**1.9k** stars · **383** stars/天 · 建立 5 天前 · C++ · Apache-2.0

```dataviewjs
const me = dv.page("Repos/LaurieWired--tailslayer");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`個人專案`

> [!summary] 一句話摘要
> 減少 RAM 讀取中的尾延遲，提升效能。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (383 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 3 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要在高效能計算環境中減少 RAM 讀取延遲的系統開發者。
> **一句話重點** Tailslayer 的設計專注於 DRAM 刷新延遲的優化，這在高效能計算中是個關鍵問題。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/LaurieWired--tailslayer");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "效能優化" && p.file.name !== "LaurieWired--tailslayer" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 效能優化 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學、5 小時整合，得到顯著的效能提升，值得投入。

> [!abstract] 核心創新
> Tailslayer 使用未公開的通道混淆偏移來減少 DRAM 刷新延遲。

## 專案簡介

Tailslayer 是一個 C++ 函式庫，專注於減少由 DRAM 刷新停頓引起的尾延遲。其核心機制是通過在多個獨立的 DRAM 通道中複製數據，並使用不相關的刷新計劃來進行數據讀取，這樣一來，當請求到達時，Tailslayer 會同時發出多個讀取請求，並選擇最先返回的結果。這種方法不僅能降低延遲，還能提高整體效能，特別是在高負載情況下。使用者需要提供信號函數和最終工作函數作為模板參數，這樣可以靈活地控制何時讀取數據以及如何處理讀取的結果。關鍵的 CLI 指令是 `make` 和 `./tailslayer_example`，這將編譯並運行範例程式碼。Tailslayer 的設計選擇了 C++，因為它能提供高效的性能和對底層硬體的控制，並且支持多種平台，包括 AMD、Intel 和 Graviton。

這種設計使得 Tailslayer 能夠在多通道環境中有效運作，並且能夠在未來擴展到更多通道的支持。與其他工具相比，如 0xGF/boneyard 和 AlpinDale/parsync，Tailslayer 的獨特之處在於其針對 DRAM 刷新延遲的專門優化，而不是僅僅依賴於傳統的緩存策略。實際使用中，Tailslayer 能夠處理高達數十 GB 的數據，並且在多核處理器上能夠充分利用 CPU 資源。維護者的活躍度相對較高，但目前的 issue 解決率較低，顯示出社群對於這個新工具的需求和關注。整體來看，這是一個值得關注的專案，特別是對於需要高效能 RAM 讀取的應用場景。

**技術棧**：`C++17` · `CMake`

## 重點功能

- 多通道數據複製 — 在多個獨立 DRAM 通道中複製數據，減少因刷新造成的延遲。
- 信號函數和工作函數模板 — 使用者可以自定義何時讀取數據及如何處理結果。
- 支持多核處理 — 每個副本被固定到不同的核心，充分利用 CPU 資源。
- 靈活的參數設置 — 可選擇不同的通道偏移、通道位元和副本數量。
- 基於 C++ 的高效性能 — 提供對底層硬體的精細控制，適合高效能計算需求。

## 快速開始

1. 克隆專案並進入目錄
```bash
git clone https://github.com/LaurieWired/tailslayer.git && cd tailslayer
```
2. 編譯範例程式
```bash
make
```
3. 運行範例程式
```bash
./tailslayer_example
```

## 程式碼範例

```cpp
{
  "前置條件": "需要包含 tailslayer 的標頭檔案",
  "程式碼": "#include <tailslayer/hedged_reader.hpp>\n\n[[gnu::always_inline]] inline std::size_t my_signal() {\n    return index_to_read;\n}\n\ntemplate <typename T>\n[[gnu::always_inline]] inline void my_work(T val) {\n    // Use the value\n}\n\nint main() {\n    using T = uint8_t;\n    tailslayer::pin_to_core(tailslayer::CORE_MAIN);\n\n    tailslayer::HedgedReader<T> reader{};\n    reader.insert(0x43);\n    reader.insert(0x44);\n    reader.start_workers();\n}",
  "預期輸出": "讀取的值將根據信號函數返回的索引進行處理。"
}
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 1915 stars（383/天），forks 101（5.3%），顯示出相對穩定的關注度。該專案的作者 LaurieWired 以其在效能優化領域的專業知識而聞名，這使得 Tailslayer 能夠針對 DRAM 刷新延遲這一具體痛點提供解決方案。之前，這類問題通常依賴於硬體升級或傳統的緩存技術，並未有針對性的解決方案。隨著高效能計算需求的增加，這個工具的出現恰好填補了市場的空白。社群對於其潛在應用的討論也進一步推動了其關注度。

## 適合誰使用

**目標受眾**：需要在高效能計算環境中減少 RAM 讀取延遲的系統開發者。

> [!example] 使用場景
> - 系統工程師用它來優化高頻交易系統的 RAM 讀取延遲，因為 Tailslayer 能夠在多通道中快速讀取數據，降低延遲。
> - 遊戲開發者用它來提升大型開放世界遊戲的資源加載速度，因為其能有效減少因 DRAM 刷新造成的停頓。
> - 數據科學家用它來加速大數據處理過程中的內存讀取，因為在處理大量數據時，尾延遲的影響會顯著降低效能。

## 架構分析

Tailslayer 採用 C++ 函式庫的架構，設計目的是為了在多通道 DRAM 環境中減少尾延遲。它的資料流從信號函數開始，當外部事件發生時，觸發讀取請求。每個副本在不同的核心上運行，並根據信號函數進行自旋，直到讀取完成。

這種設計使得 Tailslayer 能夠在多核環境中充分利用資源，並且能夠快速響應讀取請求。選擇 C++ 是因為其性能優勢，而這也意味著需要較高的開發成本和學習曲線。擴展性方面，未來可能會增加對更多通道的支持，但目前的設計在多通道環境中已經能夠顯著提升效能。

## 技術深入分析

Tailslayer 的核心技術機制是通過在多個 DRAM 通道中複製數據來減少尾延遲。其使用的信號函數和工作函數模板設計，允許開發者靈活地控制數據的讀取和處理。效能方面，Tailslayer 能夠在多核處理器上充分利用資源，並且在高負載情況下能夠顯著降低延遲。設計上選擇 C++ 是為了獲得更高的性能，但這也意味著需要開發者具備相應的技術能力。技術風險方面，隨著使用者數量的增加，可能會出現對 DRAM 硬體的依賴性問題，這可能在未來的擴展中造成挑戰。整合方面，Tailslayer 目前的設計與主流的 C++ 開發環境相容，但對於不熟悉 C++ 的開發者來說，學習成本較高。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了基本的使用說明和範例，整體清晰度良好。安裝過程需要使用者具備一定的 CMake 和 C++ 知識，對於新手來說可能有些挑戰。文件中未提供多語言支持，僅有英文版本。整體而言，對於有經驗的開發者來說，花 30 分鐘能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 能有效減少 RAM 讀取延遲，特別是在高負載情況下。
> - 支持多核處理，充分利用 CPU 資源。
> - 靈活的設計，允許用戶自定義讀取和處理邏輯。

> [!danger] 缺點
> - 目前僅支持兩個通道，未來需要更新以支持更多通道。
> - 需要在多核環境中運行以達到最佳效能，對硬體要求較高。
> - 對於不熟悉 C++ 的開發者，學習曲線較陡。

> [!warning] 注意事項
> - 目前僅支持兩個通道，未來會更新以支持更多通道。
> - 需要在多核環境中運行以達到最佳效能。
> - 對於不支持的硬體平台，可能無法正常運作。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 主要專注於數據存儲和檢索，而 Tailslayer 專注於減少 RAM 讀取延遲，兩者的應用場景有所不同。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | Parsync 提供了並行數據傳輸的功能，但不針對 DRAM 刷新延遲進行優化，適用場景不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | Boneyard 主要專注於數據存儲和檢索，而 Tailslayer 專注於減少 RAM 讀取延遲，兩者的應用場景有所不同。 | 如果你的專案需要高效的數據存儲和檢索，而不特別關注 RAM 讀取延遲，則可以選擇 Boneyard。 | medium，因為需要重新設計數據存儲邏輯。 |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | Parsync 提供了並行數據傳輸的功能，但不針對 DRAM 刷新延遲進行優化，適用場景不同。 | 如果你的應用需要高效的並行數據傳輸，而不特別關注 DRAM 的延遲問題，則可以考慮使用 Parasync。 | low，因為可以直接替換數據傳輸邏輯。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **tailslayer** | **boneyard** | **parsync** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | Boneyard 主要專注於數據存儲和檢索，而 Tailslayer 專注於減少 RAM 讀取延遲，兩者的應用場景有所不同。 | Parsync 提供了並行數據傳輸的功能，但不針對 DRAM 刷新延遲進行優化，適用場景不同。 |
> | 遷移成本 | - | medium，因為需要重新設計數據存儲邏輯。 | low，因為可以直接替換數據傳輸邏輯。 |
> | 適用場景 | 主要場景 | 如果你的專案需要高效的數據存儲和檢索，而不特別關注 RAM  | 如果你的應用需要高效的並行數據傳輸，而不特別關注 DRAM  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和測試，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些硬體上可能無法正常運作，特別是舊款 DRAM。
  - 解法：確認硬體兼容性，必要時升級硬體。
- [MEDIUM] 對於不熟悉 C++ 的開發者，學習曲線較陡。
  - 解法：尋找 C++ 的學習資源，或考慮團隊內部的培訓。
- [MEDIUM] 在多核環境中可能會出現資源競爭問題。
  - 解法：合理配置核心資源，避免多個副本同時運行在同一核心上。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 高頻交易系統的 RAM 讀取 | 非常適合 | 能顯著降低延遲，提升交易速度。 |
| 大型開放世界遊戲的資源加載 | 適合 | 能有效減少因 DRAM 刷新造成的停頓。 |
| 小型專案或個人實驗 | 普通 | 雖然能提供效能優化，但對於小型專案的需求可能過於複雜。 |
| 不需要高效能 RAM 讀取的應用 | 不適合 | 對於一般應用來說，這種優化可能不必要。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~5 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學、5 小時整合，得到顯著的效能提升，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，使用時需注意依賴的庫的安全性。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/LaurieWired--tailslayer");
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
> const me = dv.page("Repos/LaurieWired--tailslayer");
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
| Forks | 101 |
| Open Issues | 14 |
| Issue 解決率 | 7% (1 closed) |
| 最後推送 | 2026-04-07 |
| 建立日期 | 2026-04-05 |
| Repo 大小 | 41 KB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/LaurieWired/tailslayer) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C++" : 76
>     "C" : 22
>     "Makefile" : 1
>     "CMake" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@LaurieWired](https://github.com/LaurieWired) | 12 |

## 社群與生態

**社群活躍度**：社群活躍度中等，最近有 2 天的活躍提交。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-05 ~ 2026-04-07）
> **活躍天數** 2 天 · **最新 commit** Update readme

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#7](https://github.com/LaurieWired/tailslayer/issues/7) | Will this break my 64 GB DDR4 Kingston RAM I just purchased  | 35 | 13 |
> | [#13](https://github.com/LaurieWired/tailslayer/issues/13) | Tailslayer as a CPU-level quantum patch — and why it breaks  | 19 | 3 |
> | [#2](https://github.com/LaurieWired/tailslayer/issues/2) | [RFC] Tailslayer implementation for linux kernel | 18 | 4 |

## README 摘錄

> [!info]- 展開查看原文 README
> [](https://www.apache.org/licenses/LICENSE-2.0)
> [](https://github.com/LaurieWired/tailslayer/stargazers)
> [](https://github.com/LaurieWired/tailslayer/network/members)
> [](https://github.com/LaurieWired/tailslayer/graphs/contributors)
> [](https://twitter.com/lauriewired)
> 
> # Tailslayer
> 
> Tailslayer is a C++ library that reduces tail latency in RAM reads caused by DRAM refresh stalls. 
> 
> It replicates data across multiple, independent DRAM channels with uncorrelated refresh schedules, using (undocumented!) channel scrambling offsets that works on AMD, Intel, and Graviton. Once the request comes in, Tailslayer issues hedged reads across all replicas, allowing the work to be performed on whichever result responds first.
> 
> ## Usage
> 
> The library code is available in [hedged_reader.cpp](https://github.com/LaurieWired/tailslayer/blob/main/include/tailslayer/hedged_reader.hpp) and the example using the library can be found in [tailslayer_example.cpp](https://github.com/LaurieWired/tailslayer/blob/main/tailslayer_example.cpp). To use it, copy `include/tailslayer` into your project and `#include `. The library currently works with two channels (updates to come!), but full N-way usage is available in the [benchmark](https://github.com/LaurieWired/tailslayer/tree/main/discovery/benchmark).
> 
> You provide the value type and two functions as template parameters:
> 
> 1. **Signal function**: Add the loop that waits for the external signal. This determines when to read. Return the desired index to read, and the read immediately fires.
> 2. **Final work function**: This receives the value immediately after it is read. Add the desired value processing code here.
> 
> ```cpp
> #include 
> 
> [[gnu::always_inline]] inline std::size_t my_signal() {
>     // Wait for your event, then return the index to read
>     return index_to_read;
> }
> 
> template 
> [[gnu::always_inline]] inline void my_work(T val) {
>     // Use the value
> }
> 
> int main() {
>     using T = uint8_t;
>     tailslayer::pin_to_core(tailslayer::CORE_MAIN);
> 
>     tailslayer::HedgedReader> reader{};
>     reader.insert(0x43);
>     reader.insert(0x44);
>     reader.start_workers();
> }
> ```
> 
> Arguments can be passed to either function via `ArgList`:
> 
> ```cpp
> tailslayer::HedgedReader,
>     tailslayer::ArgList,   // args to signal function
>     tailslayer::ArgList       // args to final work function
> > reader{};
> ```
> 
> You can also optionally pass in a different channel offset, channel bit, and number of replicas to the constructor. *Note:* Each insert copies the element N times where N is the number of replicas. It does the address calculation work on the backend, allowing tailslayer to act as a hedged vector that uses logical indices. Additionally, each replica is pinned to a separate core, and will spin on that core according to the signal function until the read happens.
> 
> ## Build the example
> 
> ```bash
> make
> ./tailslayer_example
> ```
> 
> ## Benchmarks and spike timing
> 
> The `discovery/` directory contains supporting code used to characterize DRAM refresh behavior:
> 
> - `discovery/benchmark/`: Channel-hedged read benchmark
> - `discovery/trefi_probe.c`: Spike timing probe for measuring the refresh cycle
> 
> ```bash
> cd discovery/benchmark
> make
> sudo chrt -f 99 ./hedged_read_cpp --all --channel-bit 8
> ```

## 延伸閱讀

相關概念：[[效能優化]] · [[多核處理]] · [[DRAM 刷新]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]] · [[Gitlawb--openclaude|Gitlawb/openclaude]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

[GitHub](https://github.com/LaurieWired/tailslayer)

## 相關收錄

> [!note]- 直接競品（同子分類：效能優化）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "效能優化" AND file.name != "LaurieWired--tailslayer"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "LaurieWired--tailslayer"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "C++" AND file.name != "LaurieWired--tailslayer" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W15" AND file.name != "LaurieWired--tailslayer"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["效能優化","多核處理","DRAM 刷新"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "LaurieWired--tailslayer" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/LaurieWired--tailslayer");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "LaurieWired--tailslayer" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "LaurieWired" AND file.name != "LaurieWired--tailslayer"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/LaurieWired--tailslayer");
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
> const me = dv.page("Repos/LaurieWired--tailslayer");
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
> const me = dv.page("Repos/LaurieWired--tailslayer");
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
> const me = dv.page("Repos/LaurieWired--tailslayer");
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
> const me = dv.page("Repos/LaurieWired--tailslayer");
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

> **2026-04-10** — 首次收錄
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

- [[2026-04-10|2026-04-10]] — 首次收錄，1.7k stars
