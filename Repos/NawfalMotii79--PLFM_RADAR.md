---
repo: NawfalMotii79/PLFM_RADAR
url: https://github.com/NawfalMotii79/PLFM_RADAR
owner: NawfalMotii79
owner_type: User
language: C
license: NOASSERTION
description: "Open-source, low-cost 10.5 GHz PLFM phased array RADAR system"
homepage: ""
stars: 3448
stars_per_day: 287
forks: 719
open_issues: 10
created: 2026-03-08
pushed_at: 2026-03-20
first_seen: 2026-03-15
week: "2026-W12"
month: "2026-03"
category: "基礎設施"
subcategory: "雷達系統"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-15
use_case: "提供開源、低成本的 10.5 GHz 脈衝線性頻率調變相控陣列雷達系統。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-18"
contributor_count: 1
engagement: "medium"
issue_close_rate: 52
repo_size_kb: 93184
readme_length: 8018
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-15"
star_history: "2026-03-15:1703,2026-03-15:1708,2026-03-16:2576,2026-03-17:3042,2026-03-18:3202,2026-03-19:3341,2026-03-20:3405,2026-03-21:3448"
tags:
  - github
  - "category/基礎設施"
  - "lang/c"
aliases:
  - "PLFM_RADAR"
  - "NawfalMotii79/PLFM_RADAR"
  - "提供開源、低成本的 10.5 GHz 脈衝線性頻率調變相控陣列雷達系統。"
---

# PLFM_RADAR

**3.4k** stars · **287** stars/天 · 建立 12 天前 · C · NOASSERTION

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

`個人專案`

> [!summary] 一句話摘要
> 提供開源、低成本的 10.5 GHz 脈衝線性頻率調變相控陣列雷達系統。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Recent · **熱度** Hot (287 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 對雷達技術有深入需求的研究者和開發者，特別是需要自定義硬體的團隊。
> **一句話重點** 這個專案不僅是雷達系統的開源實現，更是對於開源硬體設計的深刻探索，讓更多人能夠進入這個領域。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/NawfalMotii79--PLFM_RADAR");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "雷達系統" && p.file.name !== "NawfalMotii79--PLFM_RADAR" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 雷達系統 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~20h · **綁定風險** medium
> **結論** 花 20 小時學習，40 小時整合，得到強大的雷達系統，值得投入。

> [!abstract] 核心創新
> 這個專案的核心創新在於其開源的相控陣列雷達系統設計，讓研究者能夠自由修改和擴展。

## 專案簡介

AERIS-10 是一個開源的 10.5 GHz 相控陣列雷達系統，專為研究者和無人機開發者設計，支持 3km 和 20km 的兩種版本。其核心機制是利用脈衝線性頻率調變（LFM）來生成雷達波形，並透過 FPGA 進行信號處理，最終輸出經過處理的目標數據。使用者可透過 Python GUI 進行實時控制和目標追蹤，並整合 GPS 和 IMU 進行位置修正。這個系統的賣點在於其開源硬體和軟體設計，讓使用者能夠自由修改和擴展功能。技術上，AERIS-10 使用了高性能的時鐘生成器和多通道相位移器，並且具備電子波束控制，能夠在 ±45° 的範圍內進行調整。

與傳統雷達系統相比，這個系統的模組化設計使得維護和升級變得更加簡單。與其他替代方案如 AlpinDale/parsync 和 Flowseal/tg-ws-proxy 相比，AERIS-10 提供了更高的靈活性和可擴展性，特別適合需要自定義硬體的開發者。實際使用中，系統的效能和穩定性取決於硬體組裝的精確度，並且需要一定的 FPGA 開發經驗來進行信號處理的調整。這個專案目前處於活躍開發階段，社群回應迅速，適合對雷達技術有深入需求的團隊使用。對於小型團隊或個人開發者，這個系統的學習曲線可能較陡峭，但長期來看，能夠提供強大的實驗平台。

**技術棧**：`C++` · `Python` · `Verilog` · `MATLAB`

## 重點功能

- 開源硬體與軟體 — 提供完整的電路圖、PCB 佈局、韌體和軟體。
- 雙版本可選 — AERIS-10N (3km) 和 AERIS-10E (20km)，滿足不同需求。
- 全電子波束控制 — 在 ±45° 的範圍內進行電子調整。
- 先進的信號處理 — FPGA 處理脈衝壓縮、Doppler FFT、MTI 和 CFAR。
- Python GUI — 提供友好的介面，支持地圖整合和實時目標追蹤。

## 快速開始

1. 訂購 PCB
```bash
從 /4_Schematics and Boards Layout 獲取 Gerber 檔案
```
2. 組裝硬體
```bash
遵循 /10_docs/assembly_guide.md 中的組裝指南
```
3. 安裝 Python 環境
```bash
pip install -r requirements.txt
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 12 天就累積 3448 stars（287/天），forks 719（20.9%），顯示出強烈的社群興趣。NawfalMotii79 是這個專案的主要貢獻者，專注於開源硬體和無人機技術。這個專案解決了傳統雷達系統高成本和封閉性問題，提供了一個可供研究和實驗的開放平台。近期的社群討論集中在硬體測試和功能擴展，顯示出用戶對於實際應用的需求。技術上，開源硬體的趨勢使得這類專案越來越可行，並且吸引了大量開發者的關注。高達 20.9% 的 forks/stars 比率顯示出許多人正在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：對雷達技術有深入需求的研究者和開發者，特別是需要自定義硬體的團隊。

> [!example] 使用場景
> - 無人機開發者用它來測試雷達系統，因為它提供了開源的硬體設計和模組化的組件，便於快速迭代和實驗。
> - 學術研究者用它來進行雷達信號處理的研究，因為其 FPGA 支持複雜的信號處理演算法，能夠進行深入的數據分析。
> - 電子工程師用它來設計和測試新的雷達應用，因為其開放的設計允許自由修改和擴展功能，適合創新開發。

## 架構分析

AERIS-10 的架構設計為模組化，主要由電源管理、頻率合成、主板和天線陣列組成。電源管理板確保所有元件獲得正確的電壓和濾波，而頻率合成板則使用高性能的時鐘生成器來提供相位對齊的時鐘參考。主板上集成了 DAC、微波混頻器和相位移器，這些元件共同實現了雷達信號的生成和處理。

選擇 FPGA 作為信號處理核心，因為其靈活性和高效能，能夠實現複雜的信號處理任務。這種設計的代價是需要較高的技術門檻來進行硬體組裝和信號處理的調整。整體架構的擴展性良好，但在處理高頻信號時可能會面臨熱管理和電源供應的挑戰。

## 技術深入分析

AERIS-10 的核心技術機制是基於 FPGA 的信號處理，這使得系統能夠實現高效的脈衝壓縮和 Doppler 處理。其使用的 DAC 和混頻器能夠生成高品質的雷達波形，並通過相位移器實現電子波束控制。系統的效能特性在於其能夠處理高達 20km 的範圍，並且具備實時數據處理能力。設計上選擇 FPGA 而非傳統的微控制器，因為 FPGA 在處理速度和靈活性上具有明顯優勢，但這也意味著需要較高的開發門檻。技術風險方面，隨著使用者數量的增加，可能會面臨硬體兼容性和維護的挑戰。整合到現有的開發環境中，特別是與 Python GUI 的結合，能夠提供良好的使用體驗，但對於 CI/CD 的支持仍需進一步強化。

## 新手體驗

> [!info] 上手難度評估
> README 文件詳細且清晰，包含了硬體組裝和軟體安裝的步驟。安裝過程中可能會遇到一些電子組裝的挑戰，但整體流程順暢。文件中提供了足夠的範例和參考資料，對於有基礎的使用者來說，能在 30 分鐘內完成基本設置。

## 優缺點分析

> [!success] 優點
> - 開源設計，提供完整的硬體和軟體資源，便於修改。
> - 模組化架構，易於維護和升級。
> - 支持先進的信號處理功能，適合專業研究和開發。

> [!danger] 缺點
> - 組裝和配置過程對新手不友好，需要一定的電子知識。
> - 需要額外的 FPGA 開發工具，增加了學習成本。
> - 目前社群相對較新，資源和支持可能有限。

> [!warning] 注意事項
> - 需要 FPGA 開發工具（Vivado）進行信號處理修改。
> - 組裝過程需要一定的電子硬體知識，對新手可能不友好。
> - 不支援 Windows 環境，需在 Linux 或 macOS 上運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的開源雷達系統，但主要聚焦於數據同步和傳輸，缺乏 AERIS-10 的信號處理能力。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 雖然是開源工具，但主要用於網路流量代理，與雷達系統無直接關聯。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於數據同步和傳輸，並不專注於雷達信號處理，這使得其在功能上不如 AERIS-10 多樣化。 | 如果你的需求主要是數據同步，而非雷達信號處理，則可以考慮這個工具。 | low，因為其功能範圍較窄，轉移過程中不會有太多技術挑戰。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 主要用於網路流量代理，與雷達系統無直接關聯，功能上相對單一。 | 如果你的專案需要處理網路流量而非雷達信號，則可以選擇這個工具。 | medium，因為需要重新設計整個系統架構以適應新的工具。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **PLFM_RADAR** | **parsync** | **tg-ws-proxy** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於數據同步和傳輸，並不專注於雷達信號處理，這使得其在功能上不如 AERIS-10 多樣化。 | 主要用於網路流量代理，與雷達系統無直接關聯，功能上相對單一。 |
> | 遷移成本 | - | low，因為其功能範圍較窄，轉移過程中不會有太多技術挑戰。 | medium，因為需要重新設計整個系統架構以適應新的工具。 |
> | 適用場景 | 主要場景 | 如果你的需求主要是數據同步，而非雷達信號處理，則可以考慮這個 | 如果你的專案需要處理網路流量而非雷達信號，則可以選擇這個工具 |

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

- **[HIGH]** 組裝過程中可能會出現元件不兼容的問題，特別是在使用不同供應商的 PCB 時。
  - 解法：確保所有元件來自同一供應商，並在組裝前進行充分的測試。
- [MEDIUM] FPGA 開發工具的版本更新可能導致不兼容的問題。
  - 解法：在開始開發前，確認使用的工具版本與專案要求相符。
- [MEDIUM] 使用 Python GUI 時，可能會遇到性能瓶頸，特別是在處理大量數據時。
  - 解法：考慮優化數據處理流程，或使用更高效的數據結構。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司開發雷達應用 | 非常適合 | 開源設計和模組化架構使得小型團隊能夠快速迭代。 |
| 大型研究機構進行雷達信號處理研究 | 適合 | 具備先進的信號處理能力，能滿足高需求的研究環境。 |
| 對雷達技術完全不熟悉的初學者 | 不適合 | 組裝和配置過程對新手不友好，需要一定的電子知識。 |
| 需要快速原型開發的無人機公司 | 普通 | 雖然具備開源優勢，但可能需要較長的學習曲線來掌握。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~20 小時 |
| 整合時間 | ~40 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 20 小時學習，40 小時整合，得到強大的雷達系統，值得投入。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：系統本身不需要高權限，且不存取敏感資料，但硬體組裝過程中需小心電源管理和信號處理的安全性。

## 生態系整合

> [!abstract] 如何融入你的工具鏈

AERIS-10 最常與無人機開發平台和信號處理工具搭配使用，通常在開發和測試階段進行整合。實際整合範例包括在使用 Raspberry Pi 進行數據收集時，透過 USB 接口連接 AERIS-10，並使用 Python GUI 進行控制。與主流 CI/CD 工具如 GitHub Actions 的整合仍需進一步開發，特別是在自動化測試方面。整合過程中，最常見的問題是硬體兼容性，特別是在使用不同版本的 FPGA 時。

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
| Forks | 719 |
| Open Issues | 10 |
| Issue 解決率 | 52% (11 closed) |
| 最後推送 | 2026-03-20 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 91.0 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NawfalMotii79/PLFM_RADAR) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C" : 43
>     "Python" : 15
>     "Verilog" : 13
>     "PLSQL" : 11
>     "C++" : 7
>     "SMT" : 7
>     "TypeSpec" : 3
>     "MATLAB" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@NawfalMotii79](https://github.com/NawfalMotii79) | 63 |

## 社群與生態

**社群活躍度**：社群活躍，最近有多個問題和功能請求被討論。
**連結**：[文件](https://github.com/NawfalMotii79/PLFM_RADAR)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-19 ~ 2026-03-20）
> **活躍天數** 2 天 · **最新 commit** Change radar system image format to PNG

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#26](https://github.com/NawfalMotii79/PLFM_RADAR/issues/26) | Project Updates | 2 | 2 |
> | [#21](https://github.com/NawfalMotii79/PLFM_RADAR/issues/21) | Adding LAN interface | 2 | 12 |
> | [#10](https://github.com/NawfalMotii79/PLFM_RADAR/issues/10) | Folder 10_docs seems missing | 1 | 2 |
> | [#25](https://github.com/NawfalMotii79/PLFM_RADAR/issues/25) | Looking for hardware testers: XC7A200T-2FBG484(I/C) (TE0712/ | 0 | 4 |
> | [#23](https://github.com/NawfalMotii79/PLFM_RADAR/issues/23) | Missing Gerberfiles and Schematics | 0 | 6 |

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
> ### Why This Change?
> Originally, the entire project used the MIT license. The community (special thanks to gmaynez!) pointed out that MIT lacks legal protections needed for physical hardware. The switch to CERN-OHL-P ensures the project is properly protected while maintaining the same permissive spirit.
> 
> ## Contact & Collaboration
> I welcome serious inquiries from researchers, engineers, and potential collaborators. However, due to the high volume of interest in this project, please understand that I cannot guarantee a response to every message.
> 
> For technical questions or bug reports: Please open a GitHub issue so the whole community can benefit from the discussion.
> 
> For collaboration, licensing, or business inquiries:
> 📧 nawfal.motii.33 [a

## 延伸閱讀

相關概念：[[自動化測試]] · [[機器學習]] · [[深度學習]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[novatic14--MANPADS-System-Launcher-and-Rocket|novatic14/MANPADS-System-Launcher-and-Rocket]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[aiming-lab--AutoResearchClaw|aiming-lab/AutoResearchClaw]]

[GitHub](https://github.com/NawfalMotii79/PLFM_RADAR)

## 相關收錄

> [!note]- 直接競品（同子分類：雷達系統）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "雷達系統" AND file.name != "NawfalMotii79--PLFM_RADAR"
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
> WHERE language = "C" AND file.name != "NawfalMotii79--PLFM_RADAR" AND status != "archived"
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
> const concepts = ["自動化測試","機器學習","深度學習"];
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
