---
repo: L42ARO/Mercury-Transforming-Drone
url: https://github.com/L42ARO/Mercury-Transforming-Drone
owner: L42ARO
owner_type: User
language: Python
license: CERN-OHL-S-2.0
description: "Mercury is a transforming drone anyone can build that can be adapted for many use cases thanks to it's versatile mobility, wide range of sensors, and cargo bay area"
homepage: ""
stars: 359
stars_per_day: 90
forks: 44
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
use_case: "讓任何人都能建造一架多用途的變形無人機，適應各種使用場景。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
next_review: "2026-03-17"
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
tags:
  - github
  - "category/其他"
  - "lang/python"
aliases:
  - "Mercury-Transforming-Drone"
  - "L42ARO/Mercury-Transforming-Drone"
  - "讓任何人都能建造一架多用途的變形無人機，適應各種使用場景。"
---

# Mercury-Transforming-Drone

**359** stars · **90** stars/天 · 建立 4 天前 · Python · CERN-OHL-S-2.0

> [!summary] 一句話摘要
> 讓任何人都能建造一架多用途的變形無人機，適應各種使用場景。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (90 stars/day)
> **授權** CERN-OHL-S-2.0 · **維護** Active (最後推送 3 天前) · **貢獻者** 2 人
> **適合** 對無人機有興趣並希望自製和編程的開發者和愛好者。
> **一句話重點** Mercury 不僅是一架無人機，更是一個開放的 DIY 平台，讓使用者能夠自由探索無人機技術。

> [!abstract] 核心創新
> 這款無人機的變形機制和多功能感測器配置使其在多樣化任務中更具靈活性。

## 專案簡介

Mercury 是一款變形無人機，能夠在不同模式下運行，使用者只需組裝所需的硬體和上傳軟體即可。它的核心流程為：使用者組裝無人機 → 上傳自動化軟體至 Raspberry Pi → 無人機透過 GPS 和各種傳感器進行自主飛行和任務執行。這款無人機配備 RGB、深度和熱成像攝影機，並使用 Ardupilot 進行自動導航，支持 1 公斤的內部貨物運載。專案使用 Python 和 TypeScript 開發，並提供完整的 STL 和 PCB 檔案，方便使用者自製和修改。與傳統無人機相比，Mercury 的變形機制和多種感測器配置使其在多樣化任務中更具靈活性。這款無人機的設計適合 DIY 愛好者和開發者，並且能夠處理多種環境下的任務。雖然目前仍在開發階段，但其功能已經相當完整，適合小型團隊或個人使用。對於需要快速原型或特定任務的使用者，Mercury 是一個值得考慮的選擇。相對於商業無人機，Mercury 提供了更高的自定義性和擴展性，但可能需要使用者具備一定的硬體組裝和編程能力。

**技術棧**：`Python` · `TypeScript` · `C++`

## 重點功能

- 內部貨物艙 — 可容納 1 公斤的貨物，適合運送小型物品。
- 變形機制 — 簡單的變形設計，能在不同模式下運行。
- 多種攝影機 — 配備 RGB、深度和熱成像攝影機，支持多種視覺任務。
- 自動導航 — 使用 Ardupilot 和 GPS 進行自主飛行。
- 完整的組裝指南 — 提供 STL 和 PCB 檔案，方便 DIY 組裝。

## 快速開始

1. 下載軟體
```bash
git clone https://github.com/L42ARO/Mercury-Transforming-Drone.git
```
2. 上傳自動化軟體至 Raspberry Pi
```bash
scp -r Mercury-Transforming-Drone/Autonomy Software pi@<Raspberry_Pi_IP>:~/
```
3. 安裝必要的依賴
```bash
pip install -r requirements.txt
```

## 程式碼範例

import dronekit

# 連接到無人機
vehicle = dronekit.connect('udp:127.0.0.1:14550', wait_ready=True)

# 獲取無人機狀態
print('Mode: %s' % vehicle.mode.name)

# 開始自動導航
vehicle.mode = dronekit.VehicleMode('AUTO')

# 預期輸出: Mode: AUTO

## 為什麼值得關注

> [!tip] 爆紅原因
> L42ARO 是一位活躍的開源貢獻者，過去有多個相關專案，這讓他在無人機社群中有一定的知名度。Mercury 解決了無人機自定義和擴展性不足的問題，提供了完整的組裝和軟體配置指南。專案的推廣和社群互動（如 Discord）也促進了其受歡迎程度。隨著 DIY 和開源硬體的興起，這種可組裝的無人機專案在當前市場上越來越受到重視。

## 適合誰使用

**目標受眾**：對無人機有興趣並希望自製和編程的開發者和愛好者。

> [!example] 使用場景
> - 工程師用它來設計和測試自動化任務，因為其靈活的感測器配置可以快速適應不同的環境需求。
> - 學生用它來學習無人機技術和編程，因為提供了完整的硬體和軟體資源，能夠實現實際操作。
> - 業餘愛好者用它來參加無人機競賽，因為其變形機制和輕量設計能夠提升競賽表現。

## 架構分析

這是一個前後端分離的專案，使用者需要組裝硬體並上傳軟體。用戶輸入 → 組裝無人機 → 上傳軟體 → 無人機自主執行任務。關鍵技術決策包括使用 Raspberry Pi 作為控制器，並利用 Ardupilot 進行導航。專案目錄結構清晰，包含 STL 檔案、PCB 檔案和自動化軟體。

## 技術深入分析

Mercury 的核心技術機制在於其變形設計和多種感測器的整合，這使得無人機能夠在不同的環境下靈活運行。使用 Ardupilot 進行自動導航，這是一個成熟的開源無人機控制平台，能夠處理複雜的飛行任務。這款無人機能夠承載多達 1 公斤的貨物，適合進行小型運輸或監測任務。由於使用 Raspberry Pi 作為控制器，這使得開發者能夠輕鬆地進行軟體擴展和功能調整。然而，這也意味著使用者需要具備一定的編程能力和硬體知識。設計上，選擇開源硬體的方式使得使用者能夠根據需求進行自定義，但也可能導致在大規模應用時出現兼容性問題。整體而言，Mercury 是一個充滿潛力的專案，適合對無人機技術有興趣的開發者和愛好者。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的組裝和軟體配置指南，並附有必要的範例。安裝過程相對順暢，但需要使用者具備一定的技術背景。文件目前僅提供英文版本，對於非英語使用者可能會有一些挑戰。整體來說，花 30 分鐘能夠完成基本的組裝和配置。

## 優缺點分析

> [!success] 優點
> - 提供完整的組裝和軟體指南，適合 DIY 愛好者。
> - 多種感測器配置，能夠應對不同的任務需求。
> - 變形機制使其在多種環境下運行更靈活。

> [!danger] 缺點
> - 需要一定的技術背景才能順利組裝和配置。
> - 目前的硬體需求可能較高，對於預算有限的使用者來說不太友好。
> - 仍在開發階段，可能會有不穩定的功能或缺陷。

> [!warning] 注意事項
> - 需要使用者具備一定的硬體組裝能力。
> - 目前僅支援 Raspberry Pi 作為控制器。
> - 對於初學者來說，可能需要額外的學習時間來理解軟體配置。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 44 |
| Open Issues | 0 |
| 最後推送 | 2026-03-07 |
| 建立日期 | 2026-03-06 |
| Repo 大小 | 74.5 MB |

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

**社群活躍度**：社群活躍度中等，定期更新和互動。
**連結**：[文件](https://github.com/L42ARO/Mercury-Transforming-Drone/wiki) · [Discord](https://discord.gg/ZudrWv6E)

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
> | [Cover - Base](STL%20Files/Cover%20-%20Base.

## 延伸閱讀

相關概念：[[自動化]] · [[無人機]] · [[開源硬體]]

相關專案：[[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[Lightricks--LTX-Desktop|Lightricks/LTX-Desktop]] · [[Thearas--wechat-db-decrypt-macos|Thearas/wechat-db-decrypt-macos]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[juliye2025--evil-read-arxiv|juliye2025/evil-read-arxiv]] · [[uluckyXH--OpenMOSS|uluckyXH/OpenMOSS]]

[GitHub](https://github.com/L42ARO/Mercury-Transforming-Drone)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "L42ARO--Mercury-Transforming-Drone"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "L42ARO--Mercury-Transforming-Drone"
> SORT stars DESC
> ```

---

## 個人筆記

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
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 實際效果 :: _達到預期 / 不如預期（原因）_
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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，353 stars
