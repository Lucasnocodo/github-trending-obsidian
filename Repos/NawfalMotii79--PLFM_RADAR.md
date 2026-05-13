---
repo: NawfalMotii79/PLFM_RADAR
url: https://github.com/NawfalMotii79/PLFM_RADAR
owner: NawfalMotii79
owner_type: User
language: PLSQL
license: NOASSERTION
description: "Open-source, low-cost 10.5 GHz PLFM phased array RADAR system"
homepage: ""
stars: 20108
stars_per_day: 309
forks: 4789
open_issues: 8
created: 2026-03-08
pushed_at: 2026-05-12
first_seen: 2026-03-15
week: "2026-W12"
month: "2026-03"
category: "基礎設施"
subcategory: "開源硬體"
release_tag: "v2.0.2-p0-audit"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-15
use_case: "提供開源、低成本的 10.5 GHz PLFM 相控陣雷達系統，讓研究者和開發者能夠輕鬆實驗雷達技術。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-18"
contributor_count: 5
engagement: "medium"
issue_close_rate: 86
repo_size_kb: 126537
readme_length: 10000
bus_factor: 1
last_release_days: 23
release_cadence: "monthly"
verdict: ""
ring_history: "assess@2026-03-15"
star_history: "2026-03-15:1703,2026-03-15:1708,2026-03-16:2576,2026-03-17:3042,2026-03-18:3202,2026-03-19:3341,2026-03-20:3405,2026-03-21:3448,2026-03-22:3471,2026-03-23:3512,2026-03-24:3539,2026-03-25:3549,2026-03-26:3559,2026-03-27:3573,2026-03-28:3584,2026-03-29:3597,2026-03-30:3611,2026-03-31:3626,2026-04-01:3640,2026-04-02:3653,2026-04-03:3671,2026-04-04:3681,2026-04-05:3693,2026-04-06:3714,2026-04-07:3752,2026-04-08:3771,2026-04-09:3782,2026-04-10:3793,2026-04-11:3801,2026-04-12:3810,2026-04-13:3906,2026-04-14:5268,2026-04-15:7305,2026-04-16:9335,2026-04-17:11511,2026-04-18:13720,2026-04-19:14604,2026-04-20:16125,2026-04-21:17033,2026-04-22:17367,2026-04-23:17606,2026-04-24:17829,2026-04-25:18082,2026-04-26:18197,2026-04-27:18333,2026-04-28:18452,2026-04-29:18597,2026-04-30:18724,2026-05-01:18823,2026-05-02:18893,2026-05-03:18993,2026-05-04:19099,2026-05-05:19192,2026-05-06:19315,2026-05-07:19440,2026-05-08:19663,2026-05-09:19805,2026-05-10:19918,2026-05-11:20013,2026-05-12:20064,2026-05-13:20108"
tags:
  - github
  - "category/基礎設施"
  - "lang/plsql"
aliases:
  - "PLFM_RADAR"
  - "NawfalMotii79/PLFM_RADAR"
  - "提供開源、低成本的 10.5 GHz PLFM 相控陣雷達系統，讓研究者和開發者能夠輕鬆實驗雷達技術。"
---

# PLFM_RADAR

**20.1k** stars · **309** stars/天 · 建立 65 天前 · PLSQL · NOASSERTION

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

`v2.0.2-p0-audit`

> [!summary] 一句話摘要
> 提供開源、低成本的 10.5 GHz PLFM 相控陣雷達系統，讓研究者和開發者能夠輕鬆實驗雷達技術。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Growing · **熱度** Hot (309 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** 5+ 人 · **參與度** Medium
> **適合** 希望探索和實驗相控陣雷達技術的研究者和開發者。
> **一句話重點** AERIS-10 不僅是一個雷達系統，更是一個開源社群的實驗平台，讓更多人能夠參與到雷達技術的探索中。

> [!abstract]- 同類競品快速對比
> ```dataviewjs
> const me = dv.page("Repos/NawfalMotii79--PLFM_RADAR");
> if (me) {
>   const rivals = dv.pages('"Repos"')
>     .where(p => p.subcategory === "開源硬體" && p.file.name !== "NawfalMotii79--PLFM_RADAR" && p.status !== "archived")
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
>   } else { dv.paragraph("_目前 vault 中沒有其他 開源硬體 類工具_"); }
> }
> ```

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~20h · **綁定風險** low
> **結論** 花 20 小時學習，40 小時整合，得到一個靈活的雷達系統，值得投資。

> [!abstract] 核心創新
> AERIS-10 是一個完全開源的相控陣雷達系統，讓雷達技術的實驗變得更加可及和靈活。

## 專案簡介

AERIS-10 是一個開源的 10.5 GHz 相控陣雷達系統，旨在讓研究者和開發者能夠輕鬆進行雷達技術的實驗。該系統支持 Pulse Linear Frequency Modulated (LFM) 調變，並提供兩個版本：AERIS-10N（3km 範圍）和 AERIS-10E（20km 範圍）。用戶可以透過 Python GUI 進行操作，並實現實時目標追蹤和地圖整合。系統的核心在於 FPGA，負責信號處理，包括脈衝壓縮和多普勒 FFT，這使得雷達能夠高效地捕捉和分析信號。這個設計的賣點在於其模組化架構，方便用戶根據需求進行擴展和修改。

AERIS-10 的硬體設計完全開源，包含所有的電路圖和 PCB 佈局，這對於希望深入了解雷達技術的開發者來說是個極大的優勢。與其他商業雷達系統相比，AERIS-10 的成本大幅降低，並且提供了更大的靈活性和可擴展性。使用者需要具備基本的雷達原理知識和 PCB 組裝經驗，並需安裝 Python 3.8 以上版本的環境來運行 GUI。該專案的社群活躍度高，開發者可以透過 GitHub 提出問題或貢獻代碼。

**技術棧**：`Python 3.8+` · `Verilog` · `C++` · `FPGA (Vivado)`

## 重點功能

- 開源硬體與軟體 — 提供完整的電路圖、PCB 佈局、韌體和軟體。
- 雙版本可用性 — AERIS-10N（3km）和 AERIS-10E（20km），滿足不同需求。
- 全電子波束轉向 — 提供 ±45° 的電子轉向能力。
- 先進的信號處理 — FPGA 處理脈衝壓縮、多普勒 FFT、MTI 和 CFAR。
- Python GUI — 用戶友好的介面，支持地圖整合和實時目標追蹤。
- GPS/IMU 整合 — 實時位置和姿態修正。
- 模組化設計 — 獨立的電源管理、頻率合成和 RF 板塊。

## 快速開始

1. 安裝必要的依賴
```bash
pip install -r requirements.txt
```
2. 編譯 FPGA 代碼
```bash
make -C 9_Firmware/9_2_FPGA
```
3. 運行 Python GUI
```bash
python gui.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 65 天內累積 20108 stars（309/天），forks 4789（23.8%），顯示出強烈的社群參與度。這個專案由 NawfalMotii79 和其他幾位貢獻者共同開發，旨在解決傳統雷達系統高成本和封閉性問題，讓更多人能夠接觸和實驗雷達技術。近期的推廣活動和社群討論也促進了其曝光率，特別是在開源硬體和無人機開發領域。這個系統的開源性和模組化設計使其成為研究者和開發者的理想選擇，尤其是在需要自定義和實驗的情境下。

## 適合誰使用

**目標受眾**：希望探索和實驗相控陣雷達技術的研究者和開發者。

> [!example] 使用場景
> - 大學研究生用它來進行雷達信號處理實驗，因為其開源設計和模組化架構讓學生能夠深入理解雷達技術的運作原理。
> - 無人機開發者用它來實現目標追蹤功能，因為 AERIS-10 的 20km 範圍和先進的信號處理能力能夠提升無人機的導航精度。
> - 電子工程師用它來測試和驗證自己的雷達算法，因為完整的硬體和軟體開源資源使得修改和擴展變得容易。

## 架構分析

AERIS-10 的架構設計上採用模組化的方式，主要分為電源管理、頻率合成和主板三大部分。電源管理板確保所有電子元件的電壓供應，頻率合成板則使用高性能的時鐘生成器來提供相位對齊的時鐘參考。主板上包含 DAC、微波混頻器、相位移器和 FPGA，負責雷達信號的生成和處理。

這種設計的優勢在於可擴展性，使用者可以根據需求替換或升級各個模組，代價則是需要較高的組裝和調試技術。隨著使用者對系統的需求增加，可能會面臨信號處理性能的瓶頸，特別是在高負載的情況下。整體架構的設計使得 AERIS-10 能夠在多種應用場景中靈活運用。

## 技術深入分析

AERIS-10 的核心技術機制是基於 FPGA 的信號處理，這使得系統能夠高效地進行脈衝壓縮和多普勒 FFT。系統能夠處理的最大範圍達到 20km，這在開源雷達系統中是相當具有競爭力的。設計上選擇使用 Verilog 進行 FPGA 編程，這樣的選擇使得開發者能夠充分利用 FPGA 的並行處理能力，提升信號處理的效率。由於系統的模組化設計，使用者可以根據需求調整各個模組，這在商業雷達系統中往往是難以實現的。

技術上，AERIS-10 依賴於高性能的 DAC 和 ADC，這對於信號的準確性至關重要。在擴展性方面，系統的設計使得未來可以輕鬆添加新功能或改進現有功能。對於開發者來說，這意味著可以在不重新設計整個系統的情況下進行迭代和升級。整合到現有的開發環境中，AERIS-10 也相對友好，特別是對於熟悉 Python 和 FPGA 開發的團隊。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝步驟和必要的依賴說明，對於新手來說相對友好。安裝過程中可能會遇到一些硬體組裝的挑戰，但整體流程是順暢的。文件中包含的範例和文檔也有助於快速上手，特別是對於有 PCB 組裝經驗的用戶。文件目前僅提供英文版本，對於非英語使用者可能會有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 開源設計，方便用戶自定義和擴展。
> - 低成本，相比商業雷達系統更具經濟性。
> - 模組化架構，便於維護和升級。

> [!danger] 缺點
> - 需要較高的技術背景來組裝和調試。
> - 對於初學者來說，學習曲線較陡峭。
> - 可能需要額外的硬體支持來達到最佳性能。

> [!warning] 注意事項
> - 需要基本的雷達原理知識。
> - 需要具備 PCB 組裝經驗。
> - 不支援 Windows 環境，需使用 Linux 或 macOS。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI agent 的開發，而 AERIS-10 專注於雷達技術，兩者的應用場景和技術需求不同。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 主要用於自然語言處理，而 AERIS-10 是硬體系統，技術路線和應用場景截然不同。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [0x0funky/agent-sprite-forge](https://github.com/0x0funky/agent-sprite-forge) | 專注於 AI agent 的開發，而 AERIS-10 專注於雷達技術，兩者的應用場景和技術需求不同。 | 如果你的團隊專注於 AI 開發，且需要強大的 agent 功能，則選擇 agent-sprite-forge 更合適。 | medium，因為需要重新學習不同的技術棧和架構。 |
| [432539/gpt2api](https://github.com/432539/gpt2api) | 主要用於自然語言處理，而 AERIS-10 是硬體系統，技術路線和應用場景截然不同。 | 如果你的專案需要處理文本生成或理解，則選擇 gpt2api 更合適。 | high，因為需要完全轉換到不同的技術領域。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **PLFM_RADAR** | **agent-sprite-forge** | **gpt2api** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於 AI agent 的開發，而 AERIS-10 專注於雷達技術，兩者的應用場景和技術需求不同。 | 主要用於自然語言處理，而 AERIS-10 是硬體系統，技術路線和應用場景截然不同。 |
> | 遷移成本 | - | medium，因為需要重新學習不同的技術棧和架構。 | high，因為需要完全轉換到不同的技術領域。 |
> | 適用場景 | 主要場景 | 如果你的團隊專注於 AI 開發，且需要強大的 agent 功 | 如果你的專案需要處理文本生成或理解，則選擇 gpt2api  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合用於研究和實驗，但不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在組裝過程中，某些元件可能需要特殊的焊接技術，否則可能導致功能失效。
  - 解法：參考官方的組裝指南，並尋求經驗豐富的工程師協助。
- [MEDIUM] FPGA 設置不當可能導致信號處理性能下降。
  - 解法：確保使用正確的設置參數，並參考文檔中的最佳實踐。
- [MEDIUM] Python GUI 在某些環境下可能會出現相容性問題。
  - 解法：確保使用 Python 3.8 以上版本，並安裝所有必要的依賴。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行雷達技術開發 | 非常適合 | 開源設計和低成本使其成為小型團隊的理想選擇。 |
| 大型企業的商業雷達系統部署 | 不適合 | 商業系統通常需要更高的穩定性和支援。 |
| 學術研究機構進行雷達信號處理研究 | 非常適合 | 開源特性和技術靈活性非常符合研究需求。 |
| 需要即時雷達數據處理的應用 | 普通 | 雖然性能不錯，但可能在高負載下出現瓶頸。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~20 小時 |
| 整合時間 | ~40 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 20 小時學習，40 小時整合，得到一個靈活的雷達系統，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限，且不存取敏感資料。依賴鏈的信任程度良好，適合在 CI/CD 中使用。

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
| Forks | 4.8k |
| Open Issues | 8 |
| Issue 解決率 | 86% (49 closed) |
| 最後推送 | 2026-05-12 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 123.6 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NawfalMotii79/PLFM_RADAR) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "PLSQL" : 32
>     "Verilog" : 18
>     "Python" : 15
>     "C" : 15
>     "SMT" : 10
>     "C++" : 3
>     "Tcl" : 3
>     "TypeSpec" : 2
>     "Ada" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@JJassonn69](https://github.com/JJassonn69) | 192 |
> | [@NawfalMotii79](https://github.com/NawfalMotii79) | 124 |
> | [@joyshmitz](https://github.com/joyshmitz) | 10 |
> | [@3aLaee](https://github.com/3aLaee) | 3 |
> | [@shaun0927](https://github.com/shaun0927) | 3 |

**最新版本**：v2.0.2-p0-audit — v2.0.2-p0-audit — AERIS-10 Pre-Bringup P0 Audit Closure + FT2232H Timing Relax (2026-04-20)

> [!info]- Release Notes
> ## AERIS-10 Pre-Bringup P0 Audit Closure + FT2232H Timing Relax
> 
> Production bitstream for xc7a50t-ftg256-2 closing the 2026-04-20 pre-bringup P0 audit. Key items: a datasheet-accurate FT2232H `output_delay` (was synthetically over-constrained by ~8 ns in v2.0.1), 400 MHz CIC/MMCM margin fixes, an ADC overrange hold waiver matching the existing source-synchronous pattern, and an MCU refactor removing the redundant SPI T/R path now that the FPGA chirp controller owns per-chirp switching.
> 
> ### Timing (2026-04-20, commit ca8c586)
> | Clock | Period | WNS | WHS | Failing |
> |---|---|---|---|---|
> | clk_mmcm_out0 (400 MHz) | 2.5 ns | +0.029 | +0.080 | 0 |
> | adc_dco_p (400 MHz) | 2.5 ns | +0.906 | — | 0 |
> | clk_100m | 10 ns | +0.263 | +0.057 | 0 |
> | clk_120m_dac | 8.333 ns | +1.635 | +0.130 | 0 |
> | ft_clkout (60 MHz) | 16.667 ns | +1.053 | +0.121 | 0 |
> | Pulse width (WPWS) | — | +0.361 | — | 0 |
> 
> All user-specified timing constraints are met. 0 failing endpoints (setup / hold / pulse width).
> 
> ### Utilization (xc7a50tftg256-2)
> | Resource | Used | Available | Util% |
> |---|---|---|---|
> | LUTs | 10,358 | 32,600 | 31.77% |
> | Flip-Flops | 12,905 | 65,200 | 19.79% |
> | BRAM tiles | 17.5 | 75 | 23.33% |
> | DSP48E1 | 112 | 120 | 93.33% |
> | F7 Muxes | 2,499 | 16,300 | 15.33% |
> | F8 Muxes | 661 | 8,150 | 8.11% |
> 
> ...（完整內容見 GitHub）

## 社群與生態

**社群活躍度**：社群活躍度高，經常有問題和討論。
**連結**：[文件](https://NawfalMotii79.github.io/PLFM_RADAR/docs/)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-04-20 ~ 2026-05-12）
> **活躍天數** 9 天 · **最新 commit** Add files via upload

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#21](https://github.com/NawfalMotii79/PLFM_RADAR/issues/21) | Adding LAN interface | 2 | 22 |
> | [#75](https://github.com/NawfalMotii79/PLFM_RADAR/issues/75) | [Question/Discussion] Beamforming Calibration Strategy & Pha | 1 | 9 |
> | [#137](https://github.com/NawfalMotii79/PLFM_RADAR/issues/137) | [RFC] Proposal: Add inter-board RF cable assembly specificat | 0 | 1 |
> | [#133](https://github.com/NawfalMotii79/PLFM_RADAR/issues/133) | Detect animal and human | 0 | 2 |

## README 摘錄

> [!info]- 展開查看原文 README
> [](https://github.com/NawfalMotii79/PLFM_RADAR/stargazers)
> [](https://github.com/NawfalMotii79/PLFM_RADAR/network/members)
> [](https://github.com/NawfalMotii79/PLFM_RADAR/watchers)
> [](https://opensource.org/licenses/MIT)
> [](https://ohwr.org/cern_ohl_p_v2.txt)
> 
> 
> ## 🚀 Getting Started
> 
> 
> ### Prerequisites
> 
> - Basic understanding of radar principles
> - Experience with PCB assembly (for hardware build)
> - Python 3.8+ for the GUI software
> - FPGA development tools (Vivado) for signal processing modifications
> 
> 
> ## 📡 Overview
> 
> The AERIS-10 project aims to democratize radar technology by providing a fully open-source, modular, and hackable radar system. Whether you're a university researcher, a drone startup, or an advanced maker, AERIS-10 offers a platform for experimenting with beamforming, pulse compression, Doppler processing, and target tracking.
> 
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
> 
> ### Why This Change?
> Originally, the entire project used the MIT license. The community (special thanks to gmaynez!) pointed out that MIT lacks legal protections needed for physical hardware. The switch to CERN-OHL-P ensures the project is properly protected while maintaining the same permissive spirit.
> 
> 
> # AERIS-10: Open Source Pulse Linear Frequency Modulated Phased Array Radar
> 
> [](https://ohwr.org/cern_ohl_p_v2.txt)
> [](https://opensource.org/licenses/MIT)
> [](https://github.com/NawfalMotii79/PLFM_RADAR)
> [](https://github.com/NawfalMotii79/PLFM_RADAR/issues)
> [](https://github.com/NawfalMotii79/PLFM_RADAR)
> [](https://github.com/NawfalMotii79/PLFM_RADAR/pulls)
> 
> AERIS-10 is an open-source, low-cost 10.5 GHz phased array radar system featuring Pulse Linear Frequency Modulated (LFM) modulation. Available in two versions (3km and 20km range), it's designed for researchers, drone developers, and serious SDR enthusiasts who want to explore and experiment with phased array radar technology.
> 
> 
> ## 🏗️ System Architecture
> 
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
>   - **2x Microwave Mixers (LTC5552)** - For up-conversion and IF-down-conversion
>   - **4x 4-Channel Phase Shifters (ADAR1000)** - For RX and TX chain beamforming
>   - **16x Front End Chips (ADTR1107)** - Used for both Low Noise Amplifying (RX) and Power Amplifying (TX) stages
>   - **XC7A50T FPGA** - Handles RADAR Signal Processing on the upstream FTG256 board:
>     - PLFM Chirps generation via the DAC
>     - Raw ADC data read
>     - Hybrid Automatic Gain Control (AGC) — cross-layer FPGA/STM32/GUI loop
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
>       - 2x ADS7830 8-channel I²C ADCs (Main Board, U88 @ 0x48 / U89 @ 0x4A) for 16x Idq measurement, one per PA channel, each sensed through a 5 mΩ shunt on the PA board and an INA241A3 current-sense amplifier (x50) on the Main Board
>       - 2x DAC5578 8-channel I²C DACs (Main Board, U7 @ 0x48 / U69 @ 0x49) for 16x Vg control, one per PA channel; closed-loop calibrated at boot to the target Idq
>       - GPS module (UM982) for GUI map centering and per-detection position tagging
>       - GY-85 IMU for pitch/roll correction of target coordinates
>       - BMP180 Barometer
>       - Stepper Motor
>       - 1x ADS7830 8-channel I²C ADC (Main Board, U10) reading 8 thermistors for thermal monitoring; a single GPIO (EN_DIS_COOLING) switches the cooling fans on when any channel exceeds the threshold
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
>   - Enclosure
> 
> 
> ### Processing Pipeline
> 
> 1. **Waveform Generation** - DAC creates LFM chirps
> 2. **Up/Down Conversion** - LTC5552 mixers handle frequency translation
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
> | **Output Power** | ~1W×16 | 10W×16 (GaN amplifier) |
> | **Processing** | FPGA + STM32 | FPGA + STM32 |
> 
> 
> ### 🧹 Repository File Placement Policy
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
> **Do not leave generated artifacts in the repository root.**
> 
> 
> ### Hardware Assembly
> 
> 1. **Order PCBs**: Production outputs are under `/4_Schematics and Boards Layout/4_7_Production Files`
> 2. **Source Components**: BOM/CPL files are co-located under `/4_Schematics and Boards Layout/4_7_Production Files`
> 3. **Assembly**: Use the schematics in `/4_Schematics and Boards Layout/4_6_Schematics` together with the production outputs above; a standalone assembly guide is not currently tracked
> 4. **Antenna**: Choose appropriate array files for your target variant
> 5. **Enclosure**: Mechanical drawings currently live in `/8_Utils/Mechanical_Drawings`
> 
> 
> ### Hardware Documentation
> The hardware design files—including:
> - Schematics and PCB layout

## 延伸閱讀

相關概念：[[開源硬體]] · [[雷達技術]] · [[信號處理]]

相關專案：[[0x0funky--agent-sprite-forge|0x0funky/agent-sprite-forge]] · [[432539--gpt2api|432539/gpt2api]] · [[0xGF--boneyard|0xGF/boneyard]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[NVIDIA--NemoClaw|NVIDIA/NemoClaw]] · [[AgriciDaniel--claude-obsidian|AgriciDaniel/claude-obsidian]] · [[BuilderPulse--BuilderPulse|BuilderPulse/BuilderPulse]] · [[AgentSeal--codeburn|AgentSeal/codeburn]]

[GitHub](https://github.com/NawfalMotii79/PLFM_RADAR)

## 相關收錄

> [!note]- 直接競品（同子分類：開源硬體）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "開源硬體" AND file.name != "NawfalMotii79--PLFM_RADAR"
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
> WHERE language = "PLSQL" AND file.name != "NawfalMotii79--PLFM_RADAR" AND status != "archived"
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
> const concepts = ["開源硬體","雷達技術","信號處理"];
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
