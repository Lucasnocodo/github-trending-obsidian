---
repo: LaurieWired/tailslayer
url: https://github.com/LaurieWired/tailslayer
owner: LaurieWired
owner_type: User
language: C++
license: Apache-2.0
description: "Library for reducing tail latency in RAM reads"
homepage: ""
stars: 2349
stars_per_day: 181
forks: 132
open_issues: 14
created: 2026-04-05
pushed_at: 2026-04-11
first_seen: 2026-04-10
week: "2026-W15"
month: "2026-04"
category: "基礎設施"
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
appearances: 2
next_review: "2026-04-15"
contributor_count: 1
engagement: "low"
issue_close_rate: 18
repo_size_kb: 42
readme_length: 3232
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-04-10"
star_history: "2026-04-10:1667,2026-04-10:1668,2026-04-11:1915,2026-04-12:2028,2026-04-12:2028,2026-04-13:2100,2026-04-14:2193,2026-04-15:2235,2026-04-16:2269,2026-04-17:2303,2026-04-18:2329,2026-04-19:2349"
tags:
  - github
  - "category/基礎設施"
  - "lang/c++"
aliases:
  - "tailslayer"
  - "LaurieWired/tailslayer"
  - "減少 RAM 讀取中的尾延遲，提升效能。"
---

# tailslayer

**2.3k** stars · **181** stars/天 · 建立 13 天前 · C++ · Apache-2.0

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
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (181 stars/day)
> **授權** Apache-2.0 (商業友好) · **維護** Active (最後推送 7 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Low
> **適合** 需要優化高效能計算環境中 RAM 讀取延遲的系統工程師和開發者。
> **一句話重點** Tailslayer 透過多通道數據複製技術，顯著提升 RAM 讀取的效能，特別適合高效能計算環境。

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
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，3 小時整合，得到顯著的效能提升，值得投入。

> [!abstract] 核心創新
> 透過在多個 DRAM 通道中使用不相關的刷新計畫，顯著降低 RAM 讀取的尾延遲。

## 專案簡介

Tailslayer 是一個 C++ 函式庫，專注於減少因 DRAM 刷新停頓造成的尾延遲。它透過在多個獨立的 DRAM 通道中複製數據，並使用不相關的刷新計畫來進行資料讀取，這樣一來，當請求到達時，Tailslayer 可以同時發出多個讀取請求，並根據最先回應的結果進行處理。這種設計不僅提高了讀取的效率，還能有效降低延遲。使用者需要提供信號函數和最終工作函數作為模板參數，這樣就能靈活地控制何時讀取數據及如何處理讀取的結果。

核心的指令如 `tailslayer::HedgedReader` 可以輕鬆地將數據插入並啟動工作者。這個函式庫目前支援兩個通道，未來會有更新以支援更多通道的使用。其主要賣點在於能夠在多通道中進行並行讀取，從而顯著降低延遲。該函式庫的效能依賴於 DRAM 的刷新行為，並且在多核系統中，每個副本會被固定在不同的核心上運行，這樣可以充分利用多核處理器的性能。

**技術棧**：`C++17` · `CMake` · `Makefile`

## 重點功能

- 多通道數據複製 — 支援在多個獨立 DRAM 通道中複製數據，減少刷新延遲的影響。
- 並行讀取 — 透過同時發出多個讀取請求，根據最先回應的結果進行處理，降低尾延遲。
- 模板化設計 — 使用者可自定義信號函數和工作函數，靈活控制數據讀取和處理邏輯。
- 核心固定 — 每個副本被固定在不同的核心上運行，充分利用多核處理器的性能。
- 簡單的整合 — 只需將 `include/tailslayer` 複製到專案中並包含即可使用。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/LaurieWired/tailslayer.git
```
2. 編譯範例
```bash
cd tailslayer && make
```
3. 執行範例
```bash
./tailslayer_example
```

## 程式碼範例

```cpp
[
  "# 前置條件：包含 tailslayer 標頭檔",
  "#include <tailslayer/hedged_reader.hpp>",
  "int main() {",
  "    using T = uint8_t;",
  "    tailslayer::HedgedReader<T> reader{};",
  "    reader.insert(0x43);",
  "    reader.insert(0x44);",
  "    reader.start_workers();",
  "}"
]
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 13 天就累積 2349 stars（181/天），forks 132（5.6%），這顯示出一定的社群關注度。LaurieWired 是該專案的主要貢獻者，過去的經驗可能使其對 DRAM 性能優化有深入的理解。這個專案解決了現有 DRAM 讀取延遲的痛點，特別是在高效能計算環境中，傳統的讀取方法無法有效處理 DRAM 刷新造成的延遲。最近的討論和 RFC 提案顯示出社群對於在 Linux 核心中實現 Tailslayer 的興趣，這可能進一步推動其應用。隨著多核處理器的普及，這個工具的需求也隨之上升，特別是在需要高效能和低延遲的應用場景中。

## 適合誰使用

**目標受眾**：需要優化高效能計算環境中 RAM 讀取延遲的系統工程師和開發者。

> [!example] 使用場景
> - 系統工程師用它來優化伺服器的 RAM 讀取效能，因為在高負載情況下，傳統的讀取方法會導致明顯的延遲。
> - 遊戲開發者用它來加速遊戲中的資源加載，因為即時反應對於遊戲體驗至關重要，使用 Tailslayer 可以顯著降低加載時間。
> - 數據科學家用它來提升大數據處理的效率，因為在處理大量資料時，讀取延遲會影響整體性能，使用 Tailslayer 可以改善數據流的速度。

## 架構分析

Tailslayer 的架構設計旨在減少 RAM 讀取中的尾延遲。它使用多通道數據複製的模式，這意味著數據在多個 DRAM 通道中被複製，並且每個通道的刷新計畫是獨立的。這樣的設計使得當一個通道因刷新而暫停時，其他通道仍然可以提供數據，從而減少延遲。

資料流的每個節點都經過精心設計，以確保在多核環境中，每個副本都能在不同的核心上運行，這樣可以充分利用 CPU 的性能。選擇 C++ 作為開發語言是因為其高效能和對底層硬體的良好控制能力，但這也使得開發過程中需要處理更多的細節。這種設計的代價在於需要更高的開發和維護成本，並且在單核環境中無法發揮最佳效能。

擴展性方面，未來可能會增加對更多通道的支援，這將進一步提升效能。

## 技術深入分析

Tailslayer 的核心技術機制在於其多通道數據複製和並行讀取的設計。它使用了未公開的通道打亂偏移量來實現 DRAM 刷新行為的優化，這意味著在多個通道中進行讀取時，能夠有效地避免因刷新導致的延遲。效能方面，這個函式庫能夠在多核處理器上充分發揮性能，並且在高負載的情況下，能夠顯著降低尾延遲。設計上選擇 C++ 是因為其對硬體的控制能力和高效能，但這也意味著開發者需要處理更多的底層細節。依賴關係方面，這個專案的依賴相對較少，主要依賴於 C++ 標準庫和 pthread，這使得它在整合時相對簡單。技術風險方面，未來若要擴展到更多通道，可能會面臨更高的複雜度和潛在的性能瓶頸。整合方面，Tailslayer 可以與現有的多核系統輕鬆整合，但在單核系統中則無法發揮其最佳效能。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的使用說明和範例，安裝過程相對順暢，但需要使用者具備一定的 C++ 知識。整體上，對於熟悉 C++ 的開發者來說，花 30 分鐘能夠順利跑起來。

## 優缺點分析

> [!success] 優點
> - 顯著降低 RAM 讀取延遲，提升效能。
> - 靈活的模板設計，適應不同的應用需求。
> - 能充分利用多核處理器的性能，提升整體效能。

> [!danger] 缺點
> - 目前僅支援兩個通道，未來版本的支援尚未確定。
> - 使用複製數據的方式，可能導致內存使用增加。
> - 需要在多核環境中運行，單核環境下效能有限。

> [!warning] 注意事項
> - 目前僅支援兩個通道，未來版本將支援更多通道。
> - 每次插入會複製元素 N 次，N 為副本數，可能導致內存使用增加。
> - 需要在多核環境中運行以發揮最佳效能，單核環境下效能有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於資料存儲優化，但不具備 Tailslayer 的多通道讀取能力，適合不同的應用場景。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供類似的效能優化，但主要針對特定硬體架構，使用範圍較窄。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0xGF/boneyard](https://github.com/0xGF/boneyard) | 專注於資料存儲優化，使用不同的資料結構來提升存取效率。 | 如果你的專案主要集中在資料存儲和檢索的優化，而不是 RAM 讀取延遲的問題。 | medium，因為需要重新設計資料結構。 |
| [AgentSeal/codeburn](https://github.com/AgentSeal/codeburn) | 提供特定硬體架構的優化，針對特定場景進行性能調整。 | 如果你的應用場景非常依賴特定硬體的性能，並且需要針對性優化。 | high，因為需要對現有系統進行大規模調整。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **tailslayer** | **boneyard** | **codeburn** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於資料存儲優化，使用不同的資料結構來提升存取效率。 | 提供特定硬體架構的優化，針對特定場景進行性能調整。 |
> | 遷移成本 | - | medium，因為需要重新設計資料結構。 | high，因為需要對現有系統進行大規模調整。 |
> | 適用場景 | 主要場景 | 如果你的專案主要集中在資料存儲和檢索的優化，而不是 RAM  | 如果你的應用場景非常依賴特定硬體的性能，並且需要針對性優化。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合用於實驗性專案，但不建議用於生產環境的核心路徑上。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在單核環境下運行時，效能可能無法達到預期
  - 解法：確保在多核環境中運行以獲得最佳效能
- [MEDIUM] 使用不當可能導致內存使用過高
  - 解法：仔細設計數據插入邏輯，避免不必要的複製
- [MEDIUM] 在不同硬體上可能出現兼容性問題
  - 解法：在不同環境中進行充分測試以確保兼容性

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 高效能計算伺服器 | 非常適合 | 能有效降低 RAM 讀取延遲，提升整體效能。 |
| 單核環境的輕量級應用 | 不適合 | 無法發揮最佳效能，延遲問題仍然存在。 |
| 需要快速資源加載的遊戲開發 | 非常適合 | 能顯著提升資源加載速度，改善遊戲體驗。 |
| 大數據處理的數據科學專案 | 適合 | 能提升數據讀取效率，降低處理延遲。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，3 小時整合，得到顯著的效能提升，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料，但需注意依賴的庫是否存在安全風險。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

Tailslayer 通常與高效能計算環境中的其他工具搭配使用，特別是在需要優化 RAM 讀取的場景中。在一個使用 C++ 的計算專案中，你可以將 Tailslayer 整合進去，具體做法是將其包含在你的專案中並使用其提供的 API 進行數據讀取。它與主流的 CI 工具如 GitHub Actions 和 Jenkins 兼容，並且可以在 VS Code 等 IDE 中進行開發和調試。整合的摩擦點主要在於需要確保多核環境的配置正確，否則可能無法發揮最佳效能。

## 歷史脈絡

> [!info] 這個工具為什麼現在出現？

在 Tailslayer 出現之前，開發者主要依賴於傳統的 DRAM 讀取方法，這些方法在高負載情況下常常面臨延遲問題。隨著多核處理器的普及，對於低延遲的需求越來越高，這使得 Tailslayer 的出現變得尤為重要。技術上，DRAM 刷新行為的理解和優化是這個專案的核心，未來可能會有更多的優化方案出現，進一步提升 RAM 讀取的效能。

## 團隊採用指南

**建議團隊規模**：1-5 人的小型團隊

**前置技能**：
- 熟悉 C++
- 了解多核處理器架構
- 具備性能優化經驗

> [!tip] 導入策略
> 第一週：在個人專案中試用 Tailslayer。第二週：在內部工具中進行測試。第三週：收集性能數據並撰寫最佳實踐文件。第四週：在主產品中逐步導入。

**成功指標**：性能提升達到 30% 以上，讀取延遲顯著降低。

> [!warning] 退出計畫
> 如果需要退出，所有設定都可以轉換為標準 C++ 格式，並可輕鬆替換為其他數據讀取方案。

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
| Forks | 132 |
| Open Issues | 14 |
| Issue 解決率 | 18% (3 closed) |
| 最後推送 | 2026-04-11 |
| 建立日期 | 2026-04-05 |
| Repo 大小 | 42 KB |
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
> | [@LaurieWired](https://github.com/LaurieWired) | 13 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有多個討論和提案。

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-07 ~ 2026-04-11）
> **活躍天數** 2 天 · **最新 commit** Fix non-x86 compilation for lib + example

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#13](https://github.com/LaurieWired/tailslayer/issues/13) | Tailslayer as a CPU-level quantum patch — and why it breaks  | 25 | 3 |
> | [#2](https://github.com/LaurieWired/tailslayer/issues/2) | [RFC] Tailslayer implementation for linux kernel | 20 | 5 |
> | [#10](https://github.com/LaurieWired/tailslayer/issues/10) | Single-thread hedging via NTA prefetch -- ablation results o | 2 | 3 |
> | [#15](https://github.com/LaurieWired/tailslayer/issues/15) | thinking out loud: I think we can avoid the need to waste co | 1 | 0 |

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

相關概念：[[效能優化]] · [[多模態]] · [[微服務]]

相關專案：[[0xGF--boneyard|0xGF/boneyard]] · [[AgentSeal--codeburn|AgentSeal/codeburn]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ChinaSiro--claude-code-sourcemap|ChinaSiro/claude-code-sourcemap]] · [[CoderLuii--HolyClaude|CoderLuii/HolyClaude]] · [[GitFrog1111--badclaude|GitFrog1111/badclaude]]

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
> WHERE category = "基礎設施" AND file.name != "LaurieWired--tailslayer"
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
> const concepts = ["效能優化","多模態","微服務"];
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

- [[2026-04-12|2026-04-12]] — 再次上榜，2.0k stars
- [[2026-04-10|2026-04-10]] — 首次收錄，1.7k stars
