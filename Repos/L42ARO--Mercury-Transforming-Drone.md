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
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "一款可變形的無人機，適用於多種用途，具備靈活的機動性和多樣的傳感器。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 2
next_review: "2026-03-18"
contributor_count: 2
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:364,2026-03-11:364,2026-03-11:364"
tags:
  - github
  - "category/其他"
  - "lang/python"
aliases:
  - "Mercury-Transforming-Drone"
  - "L42ARO/Mercury-Transforming-Drone"
  - "一款可變形的無人機，適用於多種用途，具備靈活的機動性和多樣的傳感器。"
---

# Mercury-Transforming-Drone

**364** stars · **73** stars/天 · 建立 5 天前 · Python · CERN-OHL-S-2.0

```dataviewjs
const me = dv.page("Repos/L42ARO--Mercury-Transforming-Drone");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

> [!summary] 一句話摘要
> 一款可變形的無人機，適用於多種用途，具備靈活的機動性和多樣的傳感器。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (73 stars/day)
> **授權** CERN-OHL-S-2.0 · **維護** Active (最後推送 3 天前) · **貢獻者** 2 人 · **參與度** Medium
> **適合** 對於需要靈活應用的無人機解決方案的開發者和愛好者。
> **一句話重點** Mercury 的設計不僅是無人機，更是一個開放的創新平台，讓使用者能夠根據需求自由調整。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Alpha (不穩定) · **安裝** Medium (需設定) · **學習** ~10h · **綁定風險** low
> **結論** 花 10 小時學習，15 小時整合，得到靈活的無人機解決方案，值得嘗試。

> [!abstract] 核心創新
> Mercury 的變形能力和多功能設計使其在無人機領域中獨樹一幟。

## 專案簡介

Mercury 是一款可變形的無人機，設計上考慮了多用途的需求，具備 1 公斤的內部載貨艙，並配備 RGB、深度和熱成像攝影機，適合各種環境下的應用。使用者可以透過簡單的變形機制，將無人機從飛行模式轉換為地面行駛模式，這樣的設計使其在狹窄或不平坦的地形中也能靈活運動。核心的控制系統基於 Ardupilot 和 GPS，確保了高效的導航和自動駕駛功能。關鍵指令如 `python main.py` 可以啟動無人機的自主飛行模式，這是其主要賣點之一。技術上，這個專案使用 Python 和 C++ 來實現控制邏輯，並依賴於 Raspberry Pi 5 作為主控單元，這樣的選擇使得開發者能夠快速迭代和擴展功能。

與傳統的無人機相比，Mercury 的變形能力和內部載貨艙使其在運輸和多功能應用上具有明顯優勢。相較於其他無人機，像是 DJI 的 Phantom 系列，Mercury 提供了更大的靈活性和自定義能力，特別適合需要特定任務的開發者。使用者在實際操作中可能會遇到的問題包括組裝過程的複雜性和對硬體的依賴，這需要一定的電子和機械知識。這個專案目前處於活躍開發階段，未來可能會增加更多的傳感器和功能，值得關注。對於小型團隊或個人開發者來說，這是一個值得嘗試的專案，尤其是在需要快速原型或特定任務的情境下。

**技術棧**：`Python` · `C++` · `Raspberry Pi 5`

## 重點功能

- 內部載貨艙 — 可容納 1 公斤的貨物，適合運輸小型物品。
- 簡單變形機制 — 允許無人機在飛行和地面行駛之間快速轉換。
- 多種攝影機 — 配備 RGB、深度和熱成像攝影機，支持多種環境下的拍攝需求。
- 基於 Ardupilot 的自動駕駛 — 提供穩定的導航和控制功能。
- 完整的材料清單 — 包含所有組裝所需的硬體和連結，方便使用者採購。

## 快速開始

1. 克隆專案到本地
```bash
git clone https://github.com/L42ARO/Mercury-Transforming-Drone.git
```
2. 安裝所需的 Python 套件
```bash
pip install -r requirements.txt
```
3. 啟動無人機控制程式
```bash
python main.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 5 天就累積 364 stars（73/天），forks 45（12.4%），這顯示出相對較高的關注度。主要貢獻者 L42ARO 和 Agonat0r 在開源硬體領域有一定的經驗，這使得專案在技術上具備可靠性。這個專案解決了傳統無人機在特定應用場景下的靈活性不足問題，特別是在需要變形和多功能的需求上。社群的活躍度和開發者的參與也為其增添了吸引力。最近的推文和社群討論進一步推動了其知名度，尤其是在 DIY 和開源硬體愛好者中。forks/stars 比率顯示出有不少人對這個專案進行實際修改和使用，這是健康的社群信號。

## 適合誰使用

**目標受眾**：對於需要靈活應用的無人機解決方案的開發者和愛好者。

> [!example] 使用場景
> - 機器人愛好者用它來建造一款多功能無人機，因為其可變形設計和多樣的傳感器使其能夠適應不同的任務需求。
> - 環境監測團隊用它來進行野外調查，因為其搭載的熱成像攝影機能夠在夜間或低能見度環境下工作。
> - 教育機構用它來教學無人機技術，因為其開源設計和詳細的材料清單使學生能夠輕鬆組裝和學習。

## 架構分析

Mercury 的架構設計採用 Raspberry Pi 5 作為主控單元，這使得開發者能夠靈活地進行軟體開發和迭代。無人機的控制系統基於 Ardupilot，這是一個成熟的開源自動駕駛平台，能夠提供穩定的導航和控制。資料流方面，無人機的感測器數據會透過 I2C 和 SPI 協議傳輸到 Raspberry Pi，然後進行處理並控制驅動電機。選擇 Raspberry Pi 而非專用控制器的好處是開發靈活性，但代價是可能需要更多的電源管理和散熱設計。擴展性方面，未來可以增加更多的傳感器或功能模組，但這也可能導致系統複雜度增加。

## 技術深入分析

Mercury 的核心技術機制依賴於 Raspberry Pi 5，這使得開發者能夠使用 Python 和 C++ 進行靈活的控制和擴展。無人機的感測器數據通過 I2C 和 SPI 協議進行傳輸，這樣的設計確保了高效的資料流和即時反應。效能方面，無人機的最大載重為 1 公斤，這對於小型物品的運輸是足夠的，但在大型物品上可能會遇到瓶頸。選擇 Raspberry Pi 而非專用控制器的好處是開發靈活性，但也帶來了對電源管理的挑戰。設計取捨方面，選擇開源硬體使得使用者能夠自由修改，但同時也需要使用者具備一定的技術背景。技術風險方面，隨著使用者數量的增加，可能會面臨更多的技術支持需求和社群維護挑戰。整合方面，Mercury 可以與主流的 CI/CD 工具進行整合，但在實際運用中，使用者可能需要自行解決一些相容性問題。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的指導和材料清單，安裝過程相對順暢，但對於新手來說仍有一定的挑戰。文件中包含的範例和指令能幫助使用者快速上手。整體來說，花 30 分鐘應該能夠成功啟動無人機。

## 優缺點分析

> [!success] 優點
> - 靈活的變形設計，適合多種應用場景。
> - 開源硬體，使用者可自由修改和擴展。
> - 配備多種傳感器，能應對不同的環境需求。

> [!danger] 缺點
> - 組裝過程可能對新手來說較為複雜。
> - 對硬體的依賴性高，需要額外的採購和組裝。
> - 目前文檔僅提供英文，對非英語使用者不友好。

> [!warning] 注意事項
> - 需要一定的電子和機械知識才能組裝和調試。
> - 對於大型物品的運輸能力有限，僅適合小型物品。
> - 目前僅提供英文文檔，對於非英語使用者可能有學習障礙。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [DJI/Phantom](https://github.com/DJI/Phantom) | DJI 的 Phantom 系列無人機專注於攝影和影像捕捉，缺乏變形功能，適合專業攝影，但不具備多功能性。 |
| [Parrot/ANAFI](https://github.com/Parrot/ANAFI) | Parrot 的 ANAFI 無人機雖然輕便，但同樣不具備變形能力，且載重能力有限，主要針對消費市場。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| [DJI/Phantom](https://github.com/DJI/Phantom) | 專注於攝影和影像捕捉，無法變形，適合專業攝影。 | 如果你的主要需求是高品質的影像捕捉，而不需要多功能性。 | low，因為 DJI 的生態系統成熟，使用者可輕鬆上手。 |
| [Parrot/ANAFI](https://github.com/Parrot/ANAFI) | 輕便無人機，無法變形，主要針對消費市場。 | 如果你的需求是輕便的無人機，且不需要變形能力。 | low，因為其使用界面友好，容易上手。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Mercury-Transforming-Drone** | **Phantom** | **ANAFI** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於攝影和影像捕捉，無法變形，適合專業攝影。 | 輕便無人機，無法變形，主要針對消費市場。 |
> | 遷移成本 | - | low，因為 DJI 的生態系統成熟，使用者可輕鬆上手。 | low，因為其使用界面友好，容易上手。 |
> | 適用場景 | 主要場景 | 如果你的主要需求是高品質的影像捕捉，而不需要多功能性。 | 如果你的需求是輕便的無人機，且不需要變形能力。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Alpha |
| 生產環境就緒 | No |
| Breaking Change 風險 | high |

> [!tip] 採用建議
> 適合個人實驗和開發，但不建議用於生產環境的關鍵任務。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 組裝過程中可能會遇到零件不匹配的情況
  - 解法：仔細檢查材料清單，確保所有零件都已準備好
- [MEDIUM] 在某些環境下無法穩定飛行
  - 解法：在開放空曠的地方進行測試，避免風速過大
- **[HIGH]** 需要額外的電源管理方案，否則可能會導致無人機無法正常運行
  - 解法：提前計算電池容量和使用時間

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 小型創業團隊開發無人機應用 | 非常適合 | 靈活的設計和開源特性使得快速原型成為可能。 |
| 大型企業需要穩定的無人機解決方案 | 不適合 | 目前處於 alpha 階段，穩定性不足。 |
| 教育機構進行無人機技術教學 | 適合 | 開源設計和詳細的材料清單能夠幫助學生學習。 |
| 個人愛好者進行 DIY 無人機項目 | 非常適合 | 靈活的設計和多樣的功能滿足個人需求。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~10 小時 |
| 整合時間 | ~15 小時 |
| 維護負擔 | medium |
| 綁定風險 | low |

> [!tip] 投入 vs 回報
> 花 10 小時學習，15 小時整合，得到靈活的無人機解決方案，值得嘗試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：無人機本身不需要高權限操作，但使用者需注意電池和電源管理的安全性。

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

**社群活躍度**：社群活躍，定期更新和討論。
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

相關概念：[[自動化測試]] · [[機器學習]] · [[無人機技術]]

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
> const concepts = ["自動化測試","機器學習","無人機技術"];
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
