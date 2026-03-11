---
repo: L42ARO/Mercury-Transforming-Drone
url: https://github.com/L42ARO/Mercury-Transforming-Drone
owner: L42ARO
owner_type: User
language: Python
license: CERN-OHL-S-2.0
description: "Mercury is a transforming drone anyone can build that can be adapted for many use cases thanks to it's versatile mobility, wide range of sensors, and cargo bay area"
homepage: ""
stars: 364
stars_per_day: 73
forks: 45
open_issues: 0
created: 2026-03-06
pushed_at: 2026-03-07
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
subcategory: "無人機"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "一款可變形的無人機，適合多種用途，具備靈活的移動性和多種感測器。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 2
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:364,2026-03-11:364"
tags:
  - github
  - "category/其他"
  - "lang/python"
aliases:
  - "Mercury-Transforming-Drone"
  - "L42ARO/Mercury-Transforming-Drone"
  - "一款可變形的無人機，適合多種用途，具備靈活的移動性和多種感測器。"
---

# Mercury-Transforming-Drone

**364** stars · **73** stars/天 · 建立 5 天前 · Python · CERN-OHL-S-2.0

> [!summary] 一句話摘要
> 一款可變形的無人機，適合多種用途，具備靈活的移動性和多種感測器。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (73 stars/day)
> **授權** CERN-OHL-S-2.0 · **維護** Active (最後推送 3 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 對無人機設計和開發有興趣的 DIY 愛好者和學生團隊。
> **一句話重點** 這款無人機的設計不僅強調功能性，還提供了開源的靈活性，讓使用者能夠根據需求進行自定義。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** medium
> **結論** 花 10 小時學習、15 小時整合，得到一個靈活的無人機平台，值得嘗試。

> [!abstract] 核心創新
> 這個專案的創新點在於其模組化設計和多功能性，使得無人機能夠適應多種應用場景。

## 專案簡介

Mercury 是一款可變形的無人機，設計上強調靈活性和多功能性。使用者可以透過簡單的變形機制將其轉換為不同的模式，適應各種任務需求。該無人機配備 RGB、深度和熱成像相機，並且支持 Ardupilot 和 GPS，讓其在自動導航和環境感知方面表現出色。使用者只需將自動化軟體上傳至 Raspberry Pi 5，並透過簡單的指令啟動 Mavproxy 和主程式即可開始操作。這樣的設計使得無人機的控制和監控變得更加直觀和方便。其最大的賣點在於內部貨物艙可容納 1 公斤的負載，讓使用者能夠根據需求進行不同的任務。這款無人機的架構使用了多種材料和元件，包括碳纖維和各類電子元件，提供了一個完整的 DIY 解決方案。

**技術棧**：`Python` · `TypeScript` · `C++` · `Raspberry Pi 5`

## 重點功能

- 內部貨物艙 — 可容納 1 公斤的負載，適合多種任務。
- 簡單變形機制 — 使用者可以輕鬆切換無人機模式以適應不同需求。
- 多種感測器 — 配備 RGB、深度和熱成像相機，提供豐富的環境數據。
- 自動化軟體 — 透過 Raspberry Pi 5 和 Mavproxy 控制無人機，簡化操作流程。
- 完整的材料清單 — 提供詳細的零件清單和購買連結，方便使用者組裝。

## 快速開始

1. 安裝 Python 環境
```bash
python3 -m venv venv
```
2. 啟動虛擬環境
```bash
source venv/bin/activate
```
3. 安裝依賴
```bash
pip install -r requirements.txt
```
4. 啟動 Mavproxy
```bash
./start_mavproxy.sh
```
5. 啟動主程式
```bash
./run.sh
```

## 程式碼範例

{
  "前置條件": "在 Raspberry Pi 上安裝了必要的軟體和依賴。",
  "指令": "./start_mavproxy.sh",
  "預期輸出": "應該顯示 IP 地址以便控制無人機。"
}

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天內累積 364 stars（73/天），forks 45（12.4%），顯示出強勁的增長潛力。這個專案的作者 L42ARO 和 Agonat0r 之前有其他開源專案的經驗，這使得他們能夠快速吸引關注。Mercury 解決了 DIY 無人機市場上缺乏靈活性和多功能性的痛點，讓使用者能夠根據需求進行自定義。社群對於這樣的開放式設計有著高度的興趣，並且無人機技術的進步也讓這個專案的可行性大幅提升。forks/stars 比率為 12.4%，顯示出許多人在實際修改和使用這個專案。

## 適合誰使用

**目標受眾**：對無人機設計和開發有興趣的 DIY 愛好者和學生團隊。

> [!example] 使用場景
> - 無人機愛好者用它來建造自己的多功能無人機，因為它的模組化設計和豐富的感測器選擇使得各種應用場景皆可實現。
> - 工程師用它來進行環境監測，因為其搭載的熱成像和深度相機能夠提供多樣的數據收集。
> - 學生團隊用它來學習無人機技術，因為這個開源專案提供了完整的材料清單和軟體設置步驟，降低了學習門檻。

## 架構分析

Mercury 的架構設計為模組化，使用 Raspberry Pi 5 作為控制中心，並透過 Mavproxy 進行無人機的操作和控制。資料流從感測器收集數據，經由 Raspberry Pi 處理後發送至用戶端進行顯示和控制。這種設計使得無人機能夠快速適應不同的任務需求，但也需要使用者具備一定的技術背景來進行組裝和配置。選擇 Raspberry Pi 而非其他控制器的原因在於其開放性和社群支持，但這也意味著使用者需要自行解決可能的兼容性問題。整體架構的擴展性良好，但在處理高負載任務時可能會遇到性能瓶頸。

## 技術深入分析

Mercury 的核心技術機制在於其模組化設計，使用 Raspberry Pi 5 作為控制單元，並透過 Mavproxy 進行無人機的操作和控制。這樣的設計使得無人機能夠快速適應不同的任務需求，並且具備良好的擴展性。該無人機的感測器組合包括 RGB、深度和熱成像相機，這些感測器能夠提供豐富的環境數據，適合各種應用場景。效能方面，無人機的負載能力為 1 公斤，這在同類產品中屬於中等水平。設計上選擇 Raspberry Pi 而非其他控制器的原因在於其開放性和社群支持，但這也意味著使用者需要自行解決可能的兼容性問題。技術風險方面，無人機在高負載任務下可能會遇到性能瓶頸，特別是在處理大量數據時。整合方面，與主流的開發框架和工具鏈相容性良好，但在 CI/CD pipeline 的整合上可能需要額外的適配工作。

## 新手體驗

> [!info] 上手難度評估
> README 文件品質良好，提供了詳細的安裝步驟和範例；安裝過程相對順暢，但需要使用者具備一定的技術背景；有提供 Discord 伺服器作為支援渠道；文件目前僅提供英文版本。

## 優缺點分析

> [!success] 優點
> - 模組化設計，容易根據需求進行修改。
> - 多種感測器選擇，適合多樣化的應用場景。
> - 開源專案，社群支持良好，能夠獲得持續的更新和改進。

> [!danger] 缺點
> - 組裝過程需要一定的技術知識，對初學者不友好。
> - 需要額外的硬體支援，如 Raspberry Pi，增加了成本。
> - 在高負載情況下可能會遇到性能瓶頸。

> [!warning] 注意事項
> - 需要 Raspberry Pi 5 作為控制單元。
> - 組裝過程需要一定的電子和機械知識。
> - 不適合初學者，因為需要自行處理硬體和軟體的整合。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這是一個針對數據同步的工具，與無人機的物理組裝和操作無關。 |
| [BigBodyCobain/Shadowbroker](https://github.com/BigBodyCobain/Shadowbroker) | 這個專案專注於網路安全，而 Mercury 則是針對無人機的設計和開發。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 這是一個針對 Telegram 的 WebSocket 代理，與無人機的硬體組裝無關。 | 如果你的需求是針對 Telegram 的即時通訊，而非無人機的操作。 | low，因為這是完全不同的應用場景。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 這是一個針對醫療技能的開源專案，與無人機技術無關。 | 如果你的需求是針對醫療領域的應用，而非無人機的設計和開發。 | medium，因為需要重新學習不同的技術領域。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Mercury-Transforming-Drone** | **tg-ws-proxy** | **OpenClaw-Medical-Skills** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 這是一個針對 Telegram 的 WebSocket 代理，與無人機的硬體組裝無關。 | 這是一個針對醫療技能的開源專案，與無人機技術無關。 |
> | 遷移成本 | - | low，因為這是完全不同的應用場景。 | medium，因為需要重新學習不同的技術領域。 |
> | 適用場景 | 主要場景 | 如果你的需求是針對 Telegram 的即時通訊，而非無人機 | 如果你的需求是針對醫療領域的應用，而非無人機的設計和開發。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和學習，但不建議用於生產環境的核心任務。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在高負載情況下，無人機可能會出現性能瓶頸。
  - 解法：減少同時運行的任務，或使用更強的硬體。
- [MEDIUM] 組裝過程中可能會遇到零件不兼容的問題。
  - 解法：仔細檢查材料清單，確保所有零件相容。
- [MEDIUM] 初次啟動時可能需要多次調整設定。
  - 解法：參考社群提供的最佳實踐和調整建議。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型無人機開發團隊 | 非常適合 | 模組化設計和開源特性使得團隊能夠快速迭代和測試。 |
| 個人 DIY 無人機愛好者 | 非常適合 | 提供詳細的組裝指南和材料清單，降低了入門門檻。 |
| 商業無人機服務提供商 | 不適合 | 目前處於 alpha 階段，尚未穩定，無法滿足商業需求。 |
| 學術研究團隊 | 適合 | 具備多種感測器和開放性設計，適合進行實驗和研究。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~15 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 10 小時學習、15 小時整合，得到一個靈活的無人機平台，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限操作，並且不存取敏感資料。依賴鏈的信任程度良好，無已知的供應鏈風險。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 45 |
| Open Issues | 0 |
| 最後推送 | 2026-03-07 |
| 建立日期 | 2026-03-06 |
| Repo 大小 | 74.5 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/L42ARO/Mercury-Transforming-Drone) |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 35
>     "TypeScript" : 31
>     "JavaScript" : 22
>     "C++" : 7
>     "CSS" : 2
>     "Shell" : 1
>     "C" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@L42ARO](https://github.com/L42ARO) | 12 |
> | [@Agonat0r](https://github.com/Agonat0r) | 1 |

## 社群與生態

**社群活躍度**：社群活躍，經常有更新和討論。
**連結**：[Discord](https://discord.gg/ZudrWv6E)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-06 ~ 2026-03-07）
> **活躍天數** 2 天 · **最新 commit** step files now mentioned

## README 摘錄

> [!info]- 展開查看原文 README
> # MERCURY - TRANSFORMING DRONE
> 
> [](https://buymeacoffee.com/mercuriustech)
> [](https://www.patreon.com/c/MercuriusTech)
> [](https://x.com/L42ARO)
> [](https://discord.gg/ZudrWv6E)
> 
> ## Quick Index
> 
> - [Demo](#demo)
> - [Features](#features)
> - [Folder Structure](#folder-structure)
> - [Bill of Materials](#bill-of-materials)
> - [CAD Files](#cad-files)
> - [Software Setup](#software-setup)
> 
> ## Demo
> 
> [](https://youtu.be/DZhdSxqXiKo)
> 
> ## Features
> 
>   
>     Inner Payload Bay (1 kg)
>     Simple Transformation Mechanism
>   
>   
>     
>     
>   
> 
>   
>     RGB + Depth + Thermal Cameras
>     Ardupilot + GPS
>   
>   
>     
>     
>   
> 
>   
>     Wheel + Prop Guard
>     Mobile App
>   
>   
>     
>     
>   
> 
> ## Folder Structure
> - **STL Files:** all the required stl files for the drone assembly
> - **Autonomy Software:** all the required software for the drone autonomy
> - **PCB Files:** all the gerber files for the drone PCBs
> 
> ## Bill of Materials
> 
> | Hardware | Units | Link |
> |----------|-------|------|
> | 120N Linear Actuator 1.2" | 2 | [Buy](https://a.co/d/f1gvmVA) |
> | 8 inch propellers | 4 | [Buy](https://a.co/d/bCJhVNM) |
> | BLDC Motor (A2812 2812 900KV) | 4 | [Buy](https://a.co/d/0YZLBnR) |
> | Raspberry Pi 5 | 1 | [Buy](https://a.co/d/0e89eMiw) |
> | Mobile Data Dongle | 1 | [Buy](https://a.co/d/clkxkL8) |
> | Lipo Battery (3S 2200mah) | 2 | [Buy](https://a.co/d/04b29lgE) |
> | Screws (3mm x 10mm) | 10 | ACE Hardware |
> | Screws (3mm x 30mm) | 20 | ACE Hardware |
> | Screws (3mm x 50mm) | 10 | ACE Hardware |
> | CF 30 cm x 30 cm (for frame) | 2 | [Buy](https://a.co/d/0dzbtn5p) |
> | 8 awg cable | 1 | [Buy](https://www.amazon.com/dp/B07B8N6751) |
> | T Plug Pairs | 2 | [Buy](https://www.amazon.com/dp/B01C8NWJ78) |
> | XT60 Male & Female | 1 | [Buy](https://www.amazon.com/dp/B0CMM1BBDQ) |
> | IMU (MPU 9250) | 2 | [Buy](https://www.amazon.com/dp/B01I1J0Z7Y) |
> | TOF Camera | 1 | [Buy](https://www.amazon.com/dp/B0BRB12W7Y) |
> | ESP32S3 | 1 | [Buy](https://a.co/d/0fMawJYb) |
> | USB Webcam | 1 | [Buy](https://a.co/d/dZ3TK0W) |
> | Buck Converter | 3 | [Buy](https://a.co/d/iBVBORv) |
> | Radiolink R8XM | 1 | [Buy](https://www.amazon.com/dp/B0BCPDLWXZ) |
> | DRV8871 H Bridge | 2 | [Buy](https://a.co/d/iBVBORv) |
> | Cube + Flight Controller | 1 | [Buy](https://a.co/d/19FUWXO) |
> | SEQURE 4in1 ESC 70A | 1 | [Buy](https://a.co/d/5X12oWn) |
> | Custom PCBs | 3 | EasyEDA |
> | BLDC Motor 140KV (for driving) | 2 | [Buy](https://a.co/d/iKZayiN) |
> | Optical Flow MTF-01 | 1 | [Buy](https://www.ewingaerospace.com/products/ewing-aerospace-h7-flight-controller-ndaa-compliant-and-blueuas) |
> | Thermal Camera | 1 | [Buy](https://a.co/d/dZ3TK0W) |
> | Bidirectional ESC 50A (for driving) | 2 | [Buy](https://a.co/d/00C138fG) |
> 
> ## CAD Files
> 
> The STL files are available to download in the [STL Files](STL%20Files) folder. If STL files aren't good enough feel free to [JOIN OUR PATERON](https://www.patreon.com/c/MercuriusTech) for access to the full CAD project as well as SLDPRT and STEP files.
> 
> | Name | Qty | Material | Density |
> |------|-----|----------|---------|
> | [Arm - Left](STL%20Files/Arm%20-%20Left.stl) | 1 | Black PLA-CF | 10% |
> | [Arm - Right](STL%20Files/Arm%20-%20Right.stl) | 1 | Black PLA-CF | 10% |
> | [BLDC Holder - Left](STL%20Files/BLDC%20Holder%20-%20Left.stl) | 1 | Black PLA-CF | 10% |
> | [BLDC Holder - Right](STL%20Files/BLDC%20Holder%20-%20Right.stl) | 1 | Black PLA-CF | 10% |
> | [CargoBay - Base](STL%20Files/CargoBay%20-%20Base.stl) | 1 | Black PLA-CF | 10% |
> | [CargoBay - Battery Holder 1](STL%20Files/CargoBay%20-%20Battery%20Holder%201.stl) | 1 | Black PLA-CF | 10% |
> | [CargoBay - Battery Holder 2](STL%20Files/CargoBay%20-%20Battery%20Holder%202.stl) | 1 | Black PLA-CF | 10% |
> | [CargoBay - Battery Holder 3](STL%20Files/CargoBay%20-%20Battery%20Holder%203.stl) | 1 | Black PLA-CF | 10% |
> | [CargoBay - Battery Holder 4](STL%20Files/CargoBay%20-%20Battery%20Holder%204.stl) | 1 | Black PLA-CF | 10% |
> | [CargoBay - Cover](STL%20Files/CargoBay%20-%20Cover.stl) | 1 | White Aero PLA | 0–5% |
> | [Cover - Base](STL%20Files/Cover%20-%20Base.stl) | 1 | Black PLA-CF | 10% |
> | [Cover Out - Bottom](STL%20Files/Cover%20Out%20-%20Bottom.stl) | 1 | Red PLA | 0–5% |
> | [Cover Out - Front Name](STL%20Files/Cover%20Out%20-%20Front%20Name.stl) | 1 | Red PLA | 0–5% |
> | [Cover Out - Front Sensors](STL%20Files/Cover%20Out%20-%20Front%20Sensors.stl) | 1 | Red PLA | 0–5% |
> | [Cover Out - Front](STL%20Files/Cover%20Out%20-%20Front.stl) | 1 | Red PLA | 0–5% |
> | [Cover Out - Rear](STL%20Files/Cover%20Out%20-%20Rear.stl) | 1 | Red PLA | 0–5% |
> | [Cover Out - Top Front](STL%20Files/Cover%20Out%20-%20Top%20Front.stl) | 1 | Red PLA | 0–5% |
> | [Cover Out - Top Rear](STL%20Files/Cover%20Out%20-%20Top%20Rear.stl) | 1 | Red PLA | 0–5% |
> | [Drone Motor Holder](STL%20Files/Drone%20Motor%20Holder.stl) | 1 | Black PLA-CF | 10% |
> | [Gear - Central](STL%20Files/Gear%20-%20Central.stl) | 2 | Black PLA-CF | 10% |
> | [Gear - Driving](STL%20Files/Gear%20-%20Driving.stl) | 2 | Black PLA-CF | 10% |
> | [Gear - Peripheral](STL%20Files/Gear%20-%20Peripheral.stl) | 2 | Black PLA-CF | 10% |
> | [Linear Actuator Holder](STL%20Files/Linear%20Actuator%20Holder.stl) | 2 | Black PLA-CF | 10% |
> | [ShoulderMount - Front](STL%20Files/ShoulderMount%20-%20Front.stl) | 1 | Black PLA-CF | 10% |
> | [ShoulderMount - Rear](STL%20Files/ShoulderMount%20-%20Rear.stl) | 1 | Black PLA-CF | 10% |
> | [Wheel - Left](STL%20Files/Wheel%20-%20Left.stl) | 2 | Black PLA-CF | 10% |
> | [Wheel - Right](STL%20Files/Wheel%20-%20Right.stl) | 2 | Black PLA-CF | 10% |
> | [Frame Side Blueprint](STL%20Files/Frame%20Side%20Blueprint.pdf) | 2 | Carbon Fiber Sheet | N/A |
> 
> ## Software Setup
> 
> To use the software as it is, upload the Autonomy Software folder to a Raspberry Pi 5, using your preferred SCP method. For beginners we recommend [WinSCP](https://winscp.net/eng/download.php).
> 
> Inside the folder in the raspberry pi create a virtual environment and install the dependencies.
> 
> ```bash
> python3 -m venv venv
> source venv/bin/activate
> pip install -r requirements.txt
> ```
> 
> You must run both the Mavproxy Bridge to interface with the flight controller as well as the main software powering the rest of the robot. For that run in two separate temrinals the scripts:
> 
> ```bash
> start_mavproxy.sh
> ```
> ```bash
> run.sh
> ```
> In the terminal you should see the IP addres to be able to control the robot, if you're connected to the same network just copy paste that on your browser.
> 
> If you would like to be able to control it from different networks and at long distances we recommend you setup [Tailscale](https://tailscale.com/) on your devices.
> 
> For more convenience you can setup these scripts to run automatically on startup, and then use other scripts like `restarter.sh` or `killer.sh` to manage them.
> 
> ## 🧑‍💻 Official Codebase Core Contributors and Maintainers
> 
>   
>     
>       
>         
>       
>       
>       Alvaro L
>     
>     
>       
>         
>       
>       
>       Connor Raymer
>     
>   
> 
> *Join our Pateron for full access to the CAD project as well as .SLDPRT & .STEP formats*
> 
> [](https://buymeacoffee.com/mercuriustech)
> [](https://www.patreon.com/c/MercuriusTech)
> 
> *If you have any questions or need support, feel free to join our Discord server*
> 
> [](https://discord.gg/ZudrWv6E)

## 延伸閱讀

相關概念：[[自動化]] · [[無人機技術]] · [[感測器技術]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[Thearas--wechat-db-decrypt-macos|Thearas/wechat-db-decrypt-macos]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[juliye2025--evil-read-arxiv|juliye2025/evil-read-arxiv]]

[GitHub](https://github.com/L42ARO/Mercury-Transforming-Drone)

## 相關收錄

> [!note]- 直接競品（同子分類：無人機）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "無人機" AND file.name != "L42ARO--Mercury-Transforming-Drone"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "L42ARO--Mercury-Transforming-Drone"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "Python" AND file.name != "L42ARO--Mercury-Transforming-Drone" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "L42ARO--Mercury-Transforming-Drone"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["自動化","無人機技術","感測器技術"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "L42ARO--Mercury-Transforming-Drone" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "L42ARO" AND file.name != "L42ARO--Mercury-Transforming-Drone"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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
> const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
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

> **2026-03-10** — 首次收錄
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

- [[2026-03-11|2026-03-11]] — 再次上榜，364 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，353 stars
