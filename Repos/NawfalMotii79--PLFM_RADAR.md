---
repo: NawfalMotii79/PLFM_RADAR
url: https://github.com/NawfalMotii79/PLFM_RADAR
owner: NawfalMotii79
owner_type: User
language: C
license: NOASSERTION
description: "Open-source, low-cost 10.5 GHz PLFM phased array RADAR system"
homepage: ""
stars: 1708
stars_per_day: 285
forks: 387
open_issues: 7
created: 2026-03-08
pushed_at: 2026-03-15
first_seen: 2026-03-15
week: "2026-W12"
month: "2026-03"
category: "基礎設施"
subcategory: "開源硬體"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-15
use_case: "提供開源、低成本的10.5 GHz相控陣雷達系統，讓研究人員和開發者能夠探索雷達技術。"
priority: high
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-18"
contributor_count: 1
engagement: "medium"
issue_close_rate: 13
repo_size_kb: 88601
readme_length: 7564
bus_factor: 1
last_release_days: -1
release_cadence: "never"
verdict: ""
ring_history: "assess@2026-03-15"
star_history: "2026-03-15:1703,2026-03-15:1708"
tags:
  - github
  - "category/基礎設施"
  - "lang/c"
aliases:
  - "PLFM_RADAR"
  - "NawfalMotii79/PLFM_RADAR"
  - "提供開源、低成本的10.5 GHz相控陣雷達系統，讓研究人員和開發者能夠探索雷達技術。"
---

# PLFM_RADAR

**1.7k** stars · **285** stars/天 · 建立 6 天前 · C · NOASSERTION

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
> 提供開源、低成本的10.5 GHz相控陣雷達系統，讓研究人員和開發者能夠探索雷達技術。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (285 stars/day)
> **授權** NOASSERTION · **維護** Active (最後推送 0 天前) · **貢獻者** Solo (bus factor 風險) · **參與度** Medium
> **適合** 對雷達技術有興趣的研究人員和開發者，特別是小型團隊和個人開發者。
> **一句話重點** AERIS-10不僅是一個雷達系統，更是一個開源平台，讓任何人都能探索和實驗雷達技術。

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
> **安裝** Medium (需設定)

> [!abstract] 核心創新
> AERIS-10專案的核心創新在於其開源和模組化設計，讓雷達技術變得更可及。

## 專案簡介

AERIS-10是一個開源的10.5 GHz相控陣雷達系統，專為研究人員、無人機開發者和SDR愛好者設計。它提供兩種版本，分別為3公里和20公里的探測範圍，並支持脈衝線性頻率調製（LFM）。系統的核心在於其模組化設計，允許用戶自由組裝和修改，並且所有硬體和軟體的設計文件都公開可用。使用者可以透過Python GUI進行操作，並整合GPS和IMU進行實時定位和姿態修正。AERIS-10的信號處理由FPGA負責，能夠執行脈衝壓縮、Doppler FFT、運動目標指示（MTI）和恒虛警報（CFAR）等高級處理。

這種設計使得雷達系統不僅適合學術研究，也適合實際應用，如無人機監控和環境探測。與傳統雷達系統相比，AERIS-10的開源和低成本特性使其成為一個理想的實驗平台，特別適合小型團隊或個人開發者。使用者需要具備基本的雷達原理知識和PCB組裝經驗，並需使用Python 3.8以上版本進行GUI操作。這個專案的最大賣點在於其開放性和可擴展性，讓任何人都能夠進行雷達技術的探索和創新。

**技術棧**：`C` · `Python` · `Verilog` · `C++` · `Tcl` · `MATLAB`

## 重點功能

- 開源硬體與軟體 — 完整的電路圖、PCB佈局、韌體和軟體均可獲得。
- 雙版本可選 — AERIS-10N (3km) 和 AERIS-10X (20km)，滿足不同需求。
- 全電子波束轉向 — 在仰角和方位角上可進行±45°的電子轉向。
- 先進的信號處理 — FPGA負責脈衝壓縮、Doppler FFT、MTI和CFAR處理。
- Python GUI — 提供用戶友好的界面，並整合地圖功能。
- GPS/IMU整合 — 實時位置和姿態修正，提升雷達精度。
- 模組化設計 — 獨立的電源管理、頻率合成和射頻板，便於維護和升級。

## 快速開始

1. 訂購PCB
```bash
從/4_Schematics and Boards Layout中獲取Gerber文件
```
2. 獲取元件
```bash
在/4_Schematics and Boards Layout/4_7_Production Files中查找物料清單 (BOM)
```
3. 組裝
```bash
參考/10_docs/assembly_guide.md中的組裝指南
```
4. 選擇天線
```bash
根據你的版本選擇合適的天線陣列
```
5. 設置外殼
```bash
在/10_docs/Hardware/Enclosure中獲取3D打印文件
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立6天內累積1708 stars（285/天），forks 387（22.7%），顯示出強烈的社群興趣。專案的作者NawfalMotii79在開源硬體領域有一定的影響力，這個專案解決了高成本雷達系統的問題，讓更多開發者能夠進入這一領域。近期的推廣活動和社群討論也為其增添了曝光。高達22.7%的forks/stars比率顯示出許多人對此專案進行了實際的修改和使用，這是其受歡迎的原因之一。

## 適合誰使用

**目標受眾**：對雷達技術有興趣的研究人員和開發者，特別是小型團隊和個人開發者。

> [!example] 使用場景
> - 無人機開發者用它來進行環境監測，因為其低成本和開源特性使得實驗變得可行。
> - 學術研究者用它來探索雷達信號處理技術，因為完整的硬體和軟體設計文件提供了良好的學習資源。
> - SDR愛好者用它來實現自定義的雷達應用，因為模組化設計允許他們自由修改和擴展功能。

## 架構分析

AERIS-10的架構由多個模組組成，主要包括電源管理板、頻率合成器板和主板。電源管理板負責為所有電子元件提供必要的電壓，並由微控制器確保電源序列。頻率合成器板使用高性能的低抖動時鐘發生器，為接收和發射頻率合成器提供相位對齊的時鐘參考。

主板上集成了DAC、微波混頻器、相位移器和FPGA，負責雷達信號的生成和處理。這種模組化設計使得系統易於維護和升級，但也增加了組裝的複雜度。系統的擴展性受到模組間的依賴關係影響，若某一模組出現問題，可能會影響整體性能。

## 技術深入分析

AERIS-10的核心技術在於其模組化設計和先進的信號處理能力。使用FPGA進行信號處理，使得系統能夠高效地執行脈衝壓縮和Doppler FFT等複雜運算，這在傳統雷達系統中往往需要昂貴的專用硬體。系統能夠處理的最大範圍取決於選擇的天線陣列和功率放大器，AERIS-10X版本的最大範圍可達20公里，這在開源雷達系統中是相當罕見的。設計選擇上，使用C和Python作為主要開發語言，這使得開發者能夠快速迭代和修改功能，並且Python的GUI設計使得使用者能夠輕鬆操作。這種設計雖然提供了靈活性，但也可能導致在高負載情況下的性能瓶頸，特別是在信號處理方面。對於需要高性能的應用，開發者可能需要進一步優化FPGA的配置和信號處理算法。整體而言，AERIS-10在開源硬體領域提供了一個強大的平台，能夠吸引各類開發者和研究人員進行創新和實驗。

## 新手體驗

> [!info] 上手難度評估
> README文件提供了清晰的項目概述和安裝指南，但缺乏具體的程式碼範例。安裝過程需要用戶具備一定的硬體組裝經驗，對於新手來說可能會有挑戰。文件中有提到的組裝指南和硬體需求能幫助用戶順利啟動，但缺乏多語言支持。

## 優缺點分析

> [!success] 優點
> - 開源設計，降低了進入雷達技術的門檻。
> - 模組化架構，便於維護和升級。
> - 支持多種信號處理功能，適合各種應用場景。

> [!danger] 缺點
> - 對使用者的技術要求較高，需具備雷達和電子學知識。
> - 組裝過程可能繁瑣，對新手不友好。
> - 硬體和軟體使用不同的授權，可能造成法律上的混淆。

> [!warning] 注意事項
> - 需要基本的雷達原理知識。
> - 需具備PCB組裝經驗。
> - 需要Python 3.8以上版本來運行GUI。
> - FPGA開發工具（Vivado）需用於信號處理修改。

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
| Forks | 387 |
| Open Issues | 7 |
| Issue 解決率 | 13% (1 closed) |
| 最後推送 | 2026-03-15 |
| 建立日期 | 2026-03-08 |
| Repo 大小 | 86.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/NawfalMotii79/PLFM_RADAR) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "C" : 47
>     "Python" : 22
>     "Verilog" : 20
>     "C++" : 9
>     "Tcl" : 1
>     "MATLAB" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@NawfalMotii79](https://github.com/NawfalMotii79) | 39 |

## 社群與生態

**社群活躍度**：社群活躍度中等，近期有多次提交和討論。
**連結**：[文件](https://github.com/NawfalMotii79/PLFM_RADAR)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-10 ~ 2026-03-15）
> **活躍天數** 4 天 · **最新 commit** Merge pull request #8 from walidb212/fix/gui-settings-validation

## 熱門議題

> [!question]- 社群最關注的問題
> | # | Issue | Reactions | Comments |
> | --- | --- | --- | --- |
> | [#4](https://github.com/NawfalMotii79/PLFM_RADAR/issues/4) | Missing folder | 5 | 3 |
> | [#10](https://github.com/NawfalMotii79/PLFM_RADAR/issues/10) | Folder 10_docs seems missing | 1 | 1 |
> | [#9](https://github.com/NawfalMotii79/PLFM_RADAR/issues/9) | Antenna array | 0 | 1 |

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
>   - **AERIS-10X (Extended)**: 20km range with 32x16 dielectric-filled slotted waveguide array
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
> Originally, the entire project used the MIT license. The community (special thanks to [GitHub Username]!) pointed out that MIT lacks legal protections needed for physical hardware. The switch to CERN-OHL-P ensures the project is properly protected while maintaining the same permissive spirit.

## 延伸閱讀

相關概念：[[開源硬體]] · [[信號處理]] · [[雷達技術]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[novatic14--MANPADS-System-Launcher-and-Rocket|novatic14/MANPADS-System-Launcher-and-Rocket]]

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
> const concepts = ["開源硬體","信號處理","雷達技術"];
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
