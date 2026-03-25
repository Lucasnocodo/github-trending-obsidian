---
repo: NawfalMotii79/PLFM_RADAR
url: https://github.com/NawfalMotii79/PLFM_RADAR
owner: NawfalMotii79
owner_type: User
language: Verilog
license: NOASSERTION
description: "Open-source, low-cost 10.5 GHz PLFM phased array RADAR system"
homepage: ""
stars: 3549
stars_per_day: 222
forks: 751
open_issues: 11
created: 2026-03-08
pushed_at: 2026-03-22
first_seen: 2026-03-15
week: "2026-W12"
month: "2026-03"
category: "基礎設施"
subcategory: "開源雷達系統"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-15
use_case: "提供開源、低成本的 10.5 GHz PLFM 相控陣雷達系統，讓研究者和開發者能夠探索雷達技術。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-18"
contributor_count: 2
engagement: "medium"
issue_close_rate: 52
repo_size_kb: 104532
readme_length: 8768
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-15"
star_history: "2026-03-15:1703,2026-03-15:1708,2026-03-16:2576,2026-03-17:3042,2026-03-18:3202,2026-03-19:3341,2026-03-20:3405,2026-03-21:3448,2026-03-22:3471,2026-03-23:3512,2026-03-24:3539,2026-03-25:3549"
tags:
  - github
  - "category/基礎設施"
  - "lang/verilog"
aliases:
  - "PLFM_RADAR"
  - "NawfalMotii79/PLFM_RADAR"
  - "提供開源、低成本的 10.5 GHz PLFM 相控陣雷達系統，讓研究者和開發者能夠探索雷達技術。"
---

# PLFM_RADAR

**3.5k** stars · **222** stars/天 · 建立 16 天前 · Verilog · NOASSERTION

```dataviewjs
const me = dv.page("Repos/NawfalMotii79--PLFM_RADAR");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 提供開源、低成本的 10.5 GHz PLFM 相控陣雷達系統，讓研究者和開發者能夠探索雷達技術。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (222 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 3 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 對雷達技術有興趣的開發者和研究者，尤其是那些希望在低成本環境中進行實驗的人。
> **一句話重點** AERIS-10 透過開源和模組化設計，讓雷達技術變得可及，適合各種實驗和應用。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/NawfalMotii79--PLFM_RADAR");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "開源雷達系統" && p.file.name !== "NawfalMotii79--PLFM_RADAR" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 開源雷達系統 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~20h · **綁定風險** low
> **結論** 花 20 小時學習，30 小時整合，得到一個可擴展的雷達系統，值得投入。

> [!abstract] 核心創新
> AERIS-10 是一個完全開源的相控陣雷達系統，旨在降低雷達技術的進入門檻。

## 專案簡介

AERIS-10 是一個開源的 10.5 GHz 相控陣雷達系統，專為研究者、無人機開發者和 SDR 愛好者設計。該系統支持兩種版本，分別為 3 公里和 20 公里的探測範圍，並提供完整的開源硬體和軟體設計，包括電路圖、PCB 佈局和固件。其核心機制是通過 FPGA 處理信號，實現脈衝壓縮、Doppler FFT 和目標追蹤等功能。用戶可以使用 Python GUI 進行實時控制和可視化，並集成 GPS 和 IMU 進行位置修正。這個系統的賣點在於其模組化設計，允許用戶根據需求進行擴展和修改。

技術上，AERIS-10 使用高性能的時鐘生成器和頻率合成器，確保信號的相位對齊，並通過 FPGA 處理大量數據，實現高效的信號處理。與其他雷達系統相比，AERIS-10 的開源特性和低成本使其成為進行雷達技術實驗的理想選擇，特別是在資金有限的情況下。使用者在實際應用中可能會遇到硬體組裝和信號處理的挑戰，但社群的活躍度和開放的問題解決平台提供了良好的支持。這個專案目前處於活躍開發階段，未來可能會增加更多功能和改進，適合對雷達技術有興趣的開發者和研究者。

**技術棧**：`Verilog` · `C` · `Python` · `Tcl` · `C++` · `SMT` · `TypeSpec` · `MATLAB` · `Shell` · `Makefile`

## 重點功能

- 開源硬體與軟體 — 提供完整的電路圖、PCB 佈局和固件，方便用戶修改和擴展。
- 雙版本可選 — AERIS-10N (3km) 和 AERIS-10E (20km)，滿足不同需求。
- 全電子波束控制 — 在仰角和方位角上可達 ±45° 的電子控制。
- 先進信號處理 — FPGA 處理脈衝壓縮、Doppler FFT 和 CFAR 檢測。
- Python GUI — 提供友好的用戶界面，支持地圖集成和實時控制。
- GPS/IMU 整合 — 實時位置和姿態修正，增強雷達精度。
- 模組化設計 — 獨立的電源管理、頻率合成和 RF 板，便於維護和升級。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/NawfalMotii79/PLFM_RADAR.git
```
2. 安裝 Python 依賴
```bash
pip install -r requirements.txt
```
3. 組裝硬體
```bash
參考 /10_docs/assembly_guide.md
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 16 天內累積 3549 stars（222/天），forks 751（21.2%），顯示出強烈的社群興趣。專案的創建者 NawfalMotii79 和 JJassonn69 在開源硬體領域有一定的背景，這個專案解決了高成本雷達系統的問題，讓更多人能夠接觸和實驗雷達技術。社群中對於合作和設計支援的需求也反映在熱門問題中，例如對於 LAN 接口的需求和組裝指南的請求。技術上，開源的硬體設計和模組化的架構使得這個專案在當前的開源生態中具有獨特的優勢。

## 適合誰使用

**目標受眾**：對雷達技術有興趣的開發者和研究者，尤其是那些希望在低成本環境中進行實驗的人。

> [!example] 使用場景
> - 無人機開發者用它來測試和優化飛行中的雷達探測，因為其模組化設計允許快速迭代和實驗。
> - 學術研究者用它來進行雷達信號處理的實驗，因為開源的硬體和軟體讓他們能夠深入理解和修改系統。
> - 高級製造者用它來開發自定義的雷達應用，因為完整的設計文件和社群支持使得實現變得可行。

## 架構分析

AERIS-10 採用模組化的硬體架構，主要由電源管理板、頻率合成器板和主板組成。這種設計使得各個子系統可以獨立開發和測試，降低了整體系統的複雜性。數據流從 DAC 生成的脈衝信號開始，經過上/下變頻處理，然後由 FPGA 進行信號處理，最後通過 Python GUI 進行可視化。

選擇 FPGA 進行信號處理的原因是其高效能和可編程性，能夠處理大量數據並實現即時反應。這種架構的代價是需要較高的技術門檻來進行硬體組裝和信號處理的修改。擴展性方面，模組化設計使得未來可以輕鬆添加新功能或改進現有功能。

## 技術深入分析

AERIS-10 的核心技術在於其模組化的設計和 FPGA 的應用。使用 Verilog 和 C 語言開發的 FPGA 使得信號處理過程能夠快速且高效，特別是在處理大量數據時。系統能夠實現的功能包括脈衝壓縮、Doppler FFT 和 CFAR 檢測，這些都是現代雷達系統中至關重要的技術。該系統的設計考慮到了擴展性，未來可以根據需求添加新的功能或改進現有的處理算法。由於使用了多種開源技術，這使得開發者能夠在現有的生態系統中快速整合和部署。技術風險方面，硬體組裝和信號處理的複雜性可能會在擴大使用時帶來挑戰，特別是在高功率 RF 應用中。整體而言，這個專案在開源硬體領域具有重要的地位，並且隨著社群的發展，未來可能會出現更多創新。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了詳細的系統架構和組裝指南，但對於新手來說，可能需要額外的學習時間來理解雷達原理。安裝過程相對順暢，但硬體組裝可能會遇到挑戰。文件中包含了基本的使用指南，但缺乏多語言支持，可能會影響非英語使用者的體驗。

## 優缺點分析

> [!success] 優點
> - 開源設計，降低了進入門檻，適合學術和業餘愛好者。
> - 模組化架構，便於維護和擴展。
> - 先進的信號處理能力，支持多種雷達應用。

> [!danger] 缺點
> - 硬體組裝需要專業知識，對新手不友好。
> - 目前的文檔和指導可能不夠全面，需依賴社群支持。
> - 開發和維護需要較高的技術投入。

> [!warning] 注意事項
> - 需要基本的雷達原理知識來理解系統運作。
> - 硬體組裝需要一定的 PCB 組裝經驗。
> - 目前僅支持 Python 3.8 以上版本的 GUI 軟體。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的開源雷達系統，但專注於不同的頻率範圍和應用場景。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 雖然是不同類型的工具，但在開源和模組化設計上有相似之處，適合需要快速開發的場景。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於高效的數據同步和傳輸，使用不同的技術棧來實現。 | 如果你的需求主要集中在數據傳輸和同步，而不是雷達信號處理，則應選擇此工具。 | medium，因為需要重新設計數據流和處理邏輯。 |
| [NVIDIA/NemoClaw](https://github.com/NVIDIA/NemoClaw) | 專注於高性能計算和深度學習，使用 GPU 加速來處理複雜的數據集。 | 如果你的應用需要高性能的計算能力，並且能夠使用 NVIDIA 硬體，則這是更好的選擇。 | high，因為需要重新設計整個系統架構以適應 GPU 加速。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **PLFM_RADAR** | **parsync** | **NemoClaw** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於高效的數據同步和傳輸，使用不同的技術棧來實現。 | 專注於高性能計算和深度學習，使用 GPU 加速來處理複雜的數據集。 |
> | 遷移成本 | - | medium，因為需要重新設計數據流和處理邏輯。 | high，因為需要重新設計整個系統架構以適應 GPU 加速。 |
> | 適用場景 | 主要場景 | 如果你的需求主要集中在數據傳輸和同步，而不是雷達信號處理，則 | 如果你的應用需要高性能的計算能力，並且能夠使用 NVIDIA |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合進行實驗和開發，但不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 硬體組裝過程中可能缺少某些零件，導致無法完成組裝。
  - 解法：仔細檢查 BOM 並提前採購所有零件。
- [MEDIUM] 信號處理過程中可能出現延遲，影響實時性能。
  - 解法：優化 FPGA 設定和信號處理算法。
- [MEDIUM] 文檔不夠詳細，對新手不友好。
  - 解法：參考社群討論和問題解答。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型無人機開發團隊 | 非常適合 | 模組化設計和開源特性使得快速迭代和實驗成為可能。 |
| 學術研究機構的雷達信號處理研究 | 適合 | 提供完整的設計文件和開源軟體，便於深入研究。 |
| 大型商業雷達系統開發 | 不適合 | 目前的穩定性和成熟度不足以支持商業應用。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~20 小時 |
| 整合時間 | ~30 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 20 小時學習，30 小時整合，得到一個可擴展的雷達系統，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴鏈的信任程度較高，無已知的供應鏈風險，適合在 CI/CD 中使用。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/NawfalMotii79--PLFM_RADAR");
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
> const me = dv.page("Repos/NawfalMotii79--PLFM_RADAR");
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
| Forks | 751 |
| Open Issues | 11 |
| Issue 解決率 | 52% (12 closed) |
| 最後推送 | 2026-03-22 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 102.1 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NawfalMotii79/PLFM_RADAR) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Verilog" : 32
>     "C" : 27
>     "Python" : 22
>     "Tcl" : 7
>     "C++" : 5
>     "SMT" : 3
>     "TypeSpec" : 3
>     "MATLAB" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@JJassonn69](https://github.com/JJassonn69) | 105 |
> | [@NawfalMotii79](https://github.com/NawfalMotii79) | 67 |

## 社群與生態

**社群活躍度**：社群活躍，定期更新和回應問題。
**連結**：[文件](https://github.com/NawfalMotii79/PLFM_RADAR)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-20 ~ 2026-03-22）
> **活躍天數** 3 天 · **最新 commit** Delete 14_RADAR_Old_version directory

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#29](https://github.com/NawfalMotii79/PLFM_RADAR/issues/29) | Suggestion: Create Chat Group for Collaboration + Enclosure  | 4 | 4 |
> | [#26](https://github.com/NawfalMotii79/PLFM_RADAR/issues/26) | Project Updates | 2 | 5 |
> | [#21](https://github.com/NawfalMotii79/PLFM_RADAR/issues/21) | Adding LAN interface | 2 | 13 |
> | [#10](https://github.com/NawfalMotii79/PLFM_RADAR/issues/10) | Folder 10_docs seems missing | 1 | 3 |
> | [#31](https://github.com/NawfalMotii79/PLFM_RADAR/issues/31) | doppler_processor | 0 | 1 |

## README 摘錄

> [!info]- 展開查看原文 README
> # AERIS-10: Open Source Pulse Linear Frequency Modulated Phased Array Radar
> 
> [](https://ohwr.org/cern_ohl_p_v2.txt)
> [](https://opensource.org/licenses/MIT)
> [](https://github.com/NawfalMotii79/PLFM_RADAR)
> [](https://github.com/NawfalMotii79/PLFM_RADAR))
> [](https://github.com/NawfalMotii79/PLFM_RADAR/pulls)
> 
> AERIS-10 is an open-source, low-cost 10.5 GHz phased array radar system featuring Pulse Linear Frequency Modulated (LFM) modulation. Available in two versions (3km and 20km range), it's designed for researchers, drone developers, and serious SDR enthusiasts who want to explore and experiment with phased array radar technology.
> 
> ## 📡 Overview
> 
> The AERIS-10 project aims to democratize radar technology by providing a fully open-source, modular, and hackable radar system. Whether you're a university researcher, a drone startup, or an advanced maker, AERIS-10 offers a platform for experimenting with beamforming, pulse compression, Doppler processing, and target tracking.
> 
> ## 🔬 Key Features
> 
> - **Open Source Hardware & Software** - Complete schematics, PCB layouts, firmware, and software available
> - **Dual Version Availability**:
>   - **AERIS-10N (Nexus)**: 3km range with 8x16 patch antenna array
>   - **AERIS-10E (Extended)**: 20km range with 32x16 dielectric-filled slotted waveguide array
> - **Full Electronic Beam Steering** - ±45° electronic steering in elevation and azimuth
> - **Advanced Signal Processing** - On-board FPGA handles pulse compression, Doppler FFT, MTI, and CFAR
> - **Python GUI** - User-friendly interface with map integration
> - **GPS/IMU Integration** - Real-time position and attitude correction
> - **Modular Design** - Separate power management, frequency synthesis, and RF boards
> 
> ## 🏗️ System Architecture
> 
> ### Hardware Components
> 
> The AERIS-10 main sub-systems are:
> 
> - **Power Management Board** - Supplies all necessary voltage levels to the electronics components with proper filtering and sequencing (sequencing ensured by the microcontroller)
> 
> - **Frequency Synthesizer Board** - Uses a high-performance Low Jitter Clock Generator (AD9523-1) that supplies phase-aligned clock references for:
>   - RX and TX Frequency Synthesizers (ADF4382)
>   - DAC
>   - ADC
>   - FPGA
> 
> - **Main Board** containing:
>   - **DAC** - Generates the RADAR Chirps
>   - **2x Microwave Mixers (LT5552)** - For up-conversion and IF-down-conversion
>   - **4x 4-Channel Phase Shifters (ADAR1000)** - For RX and TX chain beamforming
>   - **16x Front End Chips (ADTR1107)** - Used for both Low Noise Amplifying (RX) and Power Amplifying (TX) stages
>   - **XC7A100T FPGA** - Handles RADAR Signal Processing:
>     - PLFM Chirps generation via the DAC
>     - Raw ADC data read
>     - Automatic Gain Control (AGC)
>     - I/Q Baseband Down-Conversion
>     - Decimation
>     - Filtering
>     - Forward FFT
>     - Pulse Compression
>     - Doppler, MTI and CFAR processing
>     - USB Interface
>   - **STM32F746xx Microcontroller** - Used for:
>     - Power-up and power-down sequencing (see Power Management Excel File)
>     - FPGA communication
>     - Setup and Interface with:
>       - Clock Generator (AD9523-1)
>       - 2x Frequency Synthesizers (ADF4382)
>       - 4x 4-Channel Phase Shifters (ADAR1000) for RADAR pulse sequencing
>       - 2x ADS7830 ADCs (on Power Amplifier Boards) for Idq measurement
>       - 2x DAC5578 (on Power Amplifier Boards) for Vg control
>       - GPS module for GUI map centering
>       - GY-85 IMU for pitch/roll correction of target coordinates
>       - BMP180 Barometer
>       - Stepper Motor
>       - 8x ADS7830 Temperature Sensors for cooling fan control
>       - RF switches
> 
> - **16x Power Amplifier Boards** - Used only for AERIS-10E version, featuring 10Watt QPA2962 GaN amplifier for extended range
> 
> - **Antenna Arrays**:
>   - **AERIS-10N (Nexus)** - 8x16 patch antenna array
>   - **AERIS-10X (Extended)** - 32x16 dielectric-filled slotted waveguide antenna array
> 
> - **Miscellaneous Components**:
>   - Slip-Ring
>   - Stepper Motor and drivers
>   - Cooling Fans
>   - Enclosure) 
> 
> ### Processing Pipeline
> 
> 1. **Waveform Generation** - DAC creates LFM chirps
> 2. **Up/Down Conversion** - LT5552 mixers handle frequency translation
> 3. **Beam Steering** - ADAR1000 phase shifters control 16 elements
> 4. **Signal Processing (FPGA)**:
>    - Raw ADC data capture
>    - I/Q baseband down-conversion
>    - Decimation & filtering (CIC/FIR)
>    - Pulse compression
>    - Doppler FFT processing
>    - MTI & CFAR detection
> 5. **System Management (STM32)**:
>    - Power sequencing
>    - Peripheral configuration
>    - GPS/IMU integration
>    - Stepper motor control
> 6. **Visualization (Python GUI)**:
>    - Real-time target plotting
>    - Map integration
>    - Radar control interface
> 
> ## 📊 Technical Specifications
> 
> | Parameter | AERIS-10N (Nexus) | AERIS-10X (Extended) |
> |-----------|-------------------|----------------------|
> | **Frequency** | 10.5 GHz | 10.5 GHz |
> | **Max Range** | 3 km | 20 km |
> | **Antenna** | 8x16 Patch Array | 32x16 Slotted Waveguide |
> | **Beam Steering** | Electronic (±45°) | Electronic (±45°) |
> | **Mechanical Scan** | 360° (stepper motor) | 360° (stepper motor) |
> | **Output Power** | ~1Wx16 | 10Wx16 (GaN amplifier) |
> | **Processing** | FPGA + STM32 | FPGA + STM32 |
> 
> ## 🚀 Getting Started
> 
> ## 🧹 Repository File Placement Policy
> 
> To keep the repository root clean and make artifacts easy to find, place generated files in the following locations:
> 
> - **Published reports (tracked, GitHub Pages):** `docs/`
>   - Example: `docs/AERIS_Simulation_Report_v2.pdf`
> - **Simulation-generated outputs (local, gitignored):** `5_Simulations/generated/`
>   - Plots, scenario outputs, temporary analysis directories
> - **FPGA/Vivado generated artifacts (local, gitignored):** `9_Firmware/9_2_FPGA/reports/`
>   - VCD/VVP dumps, temporary CSVs, local report snapshots
> - **Reusable FPGA automation scripts (tracked):** `9_Firmware/9_2_FPGA/scripts/`
>   - TCL flows, helper scripts used by build/bring-up
> 
> Do not leave generated artifacts in the repository root.
> 
> ### Prerequisites
> 
> - Basic understanding of radar principles
> - Experience with PCB assembly (for hardware build)
> - Python 3.8+ for the GUI software
> - FPGA development tools (Vivado) for signal processing modifications
> 
> ### Hardware Assembly
> 
> 1. **Order PCBs**: All Gerber files are available in `/4_Schematics and Boards Layout`
> 2. **Source Components**: Bill of materials (BOM) in `/4_Schematics and Boards Layout/4_7_Production Files`
> 3. **Assembly**: Follow the assembly guide in `/10_docs/assembly_guide.md`
> 4. **Antenna**: Choose appropriate array for your version
> 5. **Enclosure**: 3D printable files in `/10_docs/Hardware/Enclosure`
> 
> ## 📜 License
> 
> This project is open-source but uses **different licenses for hardware and software** to ensure proper legal coverage.
> 
> ### Hardware Documentation
> The hardware design files—including:
> - Schematics and PCB layouts (in `/4_Schematics and Boards Layout`)
> - Bill of Materials (BOM) files
> - Gerber files and manufacturing outputs
> - Mechanical drawings and enclosure designs
> 
> are licensed under the **CERN Open Hardware Licence Version 2 – Permissive (CERN-OHL-P)** .
> 
> This is a hardware-specific license that:
> - ✅ Clearly defines "Hardware," "Documentation," and "Products"
> - ✅ Includes explicit patent protection for contributors and users
> - ✅ Provides stronger liability limitations (important for high-power RF)
> - ✅ Aligns with professional open-hardware standards (CERN, OSHWA)
> 
> You may use, modify, and sell products based on these designs, provided you:
> - Maintain the original copyright notices
> - Distribute any modified designs under the same license
> - Make your modifications available in Source format
> 
> ### Software and Firmware
> The software components—including:
> - FPGA code (VHDL/Verilog in `/9_Firmware`)
> - Microcontroller firmware (STM32)
> - Python GUI and utilities
> 
> remain under the **MIT License** for maximum flexibility.
> 
> ### Full License Texts
> - The complete CERN-OHL-P license text is in the `LICENSE` file
> - MIT license terms apply to software where not otherwise specified
> 
> 

## 延伸閱讀

相關概念：[[相控陣雷達]] · [[開源硬體]] · [[信號處理]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[novatic14--MANPADS-System-Launcher-and-Rocket|novatic14/MANPADS-System-Launcher-and-Rocket]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]]

[GitHub](https://github.com/NawfalMotii79/PLFM_RADAR)

## 相關收錄

> [!note]- 直接競品（同子分類：開源雷達系統）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "開源雷達系統" AND file.name != "NawfalMotii79--PLFM_RADAR"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "NawfalMotii79--PLFM_RADAR"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Verilog" AND file.name != "NawfalMotii79--PLFM_RADAR" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W12" AND file.name != "NawfalMotii79--PLFM_RADAR"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["相控陣雷達","開源硬體","信號處理"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "NawfalMotii79--PLFM_RADAR" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
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
> const me = dv.page("Repos/NawfalMotii79--PLFM_RADAR");
> if (me) {
>   const ringOrder = { hold: 0, assess: 1, trial: 2, adopt: 3 };
>   const myRing = ringOrder[me.ring] || 0;
>   const better = dv.pages('"Repos"')
>     .where(p => p.file.name !== "NawfalMotii79--PLFM_RADAR" && p.category === me.category && (ringOrder[p.ring] || 0) > myRing)
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
> WHERE owner = "NawfalMotii79" AND file.name != "NawfalMotii79--PLFM_RADAR"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/NawfalMotii79--PLFM_RADAR");
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
> const me = dv.page("Repos/NawfalMotii79--PLFM_RADAR");
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
> const me = dv.page("Repos/NawfalMotii79--PLFM_RADAR");
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
> const me = dv.page("Repos/NawfalMotii79--PLFM_RADAR");
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
> const me = dv.page("Repos/NawfalMotii79--PLFM_RADAR");
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

> **2026-03-15** — 首次收錄
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

- [[2026-03-15|2026-03-15]] — 首次收錄，1.7k stars
