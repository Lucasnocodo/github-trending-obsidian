---
repo: L42ARO/Mercury-Transforming-Drone
url: https://github.com/L42ARO/Mercury-Transforming-Drone
owner: L42ARO
owner_type: User
language: Python
license: CERN-OHL-S-2.0
description: "Mercury is a transforming drone anyone can build that can be adapted for many use cases thanks to it's versatile mobility, wide range of sensors, and cargo bay area"
homepage: ""
stars: 357
stars_per_day: 89
forks: 44
open_issues: 0
created: 2026-03-06
pushed_at: 2026-03-07
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/其他"
  - "lang/python"
aliases:
  - "Mercury-Transforming-Drone"
  - "L42ARO/Mercury-Transforming-Drone"
  - "讓任何人都能打造一款可變形的多用途無人機，具備多種感測器和貨艙空間。"
---

# Mercury-Transforming-Drone

**357** stars · **89** stars/天 · 建立 4 天前 · Python · CERN-OHL-S-2.0

> [!summary] 一句話摘要
> 讓任何人都能打造一款可變形的多用途無人機，具備多種感測器和貨艙空間。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (89 stars/day)
> **適合** 對無人機有興趣且希望自己動手組裝的開發者和愛好者。
> **一句話重點** 這款無人機的設計不僅展示了開源硬體的潛力，也讓 DIY 愛好者能夠實現自己的無人機夢想。

## 專案簡介

這個專案提供了一個可變形的無人機設計，使用者可以根據需求進行組裝和改造。它的核心機制是透過簡單的變形機構，結合 RGB、深度和熱成像攝影機，實現多種功能。專案使用了 Raspberry Pi 5 和 Ardupilot 作為控制系統，並支持 GPS 定位，讓無人機能夠自動導航。與傳統無人機相比，Mercury 的獨特之處在於其內部貨艙可容納 1 公斤的有效載荷，並且有多種感測器選擇，適合不同的應用場景。使用者可以透過提供的 STL 檔案進行 3D 打印，並且有詳細的材料清單以便於組裝。這款無人機的設計適合 DIY 愛好者和小型團隊，能夠在多種環境下運行。專案目前處於 beta 階段，對於喜歡實驗的開發者來說非常值得一試。建議在有一定硬體基礎的情況下使用，對於初學者可能需要額外的學習成本。

**技術棧**：`Python` · `TypeScript` · `C++` · `Shell`

## 重點功能

- 內部貨艙 — 可容納 1 公斤的有效載荷，適合搭載各種感測器。
- 簡單變形機構 — 使無人機能夠在不同模式間快速切換。
- 多種感測器選擇 — 包括 RGB、深度和熱成像攝影機，滿足不同應用需求。
- 使用 Raspberry Pi 5 和 Ardupilot — 提供穩定的控制系統和自動導航功能。
- 詳細材料清單 — 包含所有組裝所需的硬體連結，方便使用者購買。

## 快速開始

1. 下載 STL 檔案
```bash
git clone https://github.com/L42ARO/Mercury-Transforming-Drone.git
```
2. 組裝無人機
```bash
使用提供的材料清單購買所需硬體並組裝。
```
3. 安裝軟體
```bash
參考 Software Setup 部分進行軟體安裝。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 L42ARO 和 Agonat0r 具備豐富的無人機開發經驗，這款無人機切中了 DIY 和開源硬體的需求。隨著無人機技術的普及，越來越多的人希望能夠自己動手組裝和改造無人機，這使得 Mercury 的市場需求上升。最近的無人機技術進步也讓這個專案的實現變得更加可行。

## 適合誰使用

**目標受眾**：對無人機有興趣且希望自己動手組裝的開發者和愛好者。

> [!example] 使用場景
> - 機器人愛好者用它來組裝一款可變形的無人機，因為這樣可以根據不同需求進行改造，提升使用的靈活性。
> - 環境監測專家用它來搭載各種感測器進行數據收集，因為其內部貨艙設計可容納多種設備，方便進行實地測試。
> - 教育工作者用它來進行無人機相關的實驗教學，因為提供了詳細的組裝指南和開源設計，適合學生學習和實踐。

## 架構分析

這是一個開源的單體專案，使用者可以下載 STL 檔案和軟體進行組裝和操作。用戶輸入 → 組裝無人機 → 控制無人機飛行。關鍵技術決策包括使用 Raspberry Pi 5 作為控制器，並結合 Ardupilot 進行自動導航。專案目錄結構包含 STL Files、Autonomy Software 和 PCB Files 等資料夾，方便使用者查找所需資源。

## 優缺點分析

> [!success] 優點
> - 開源設計，使用者可以自由修改和擴展功能。
> - 多用途設計，適合不同的應用場景。
> - 提供詳細的組裝指南和材料清單，降低進入門檻。

> [!danger] 缺點
> - 需要一定的技術背景，對初學者不太友好。
> - 目前的文檔和支援有限，可能需要自行摸索。
> - 組裝過程可能較為繁瑣，需花費時間和精力。

> [!warning] 注意事項
> - 需要一定的硬體組裝經驗，對初學者可能有挑戰。
> - 目前僅提供英文文檔，對非英語使用者不太友好。
> - 不支援即時技術支援，使用者需自行解決問題。

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

**社群活躍度**：社群活躍，提供 Discord 支援和交流平台。
**連結**：[Discord](https://discord.gg/ZudrWv6E)

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

相關概念：[[機器學習]] · [[自動化測試]] · [[開源硬體]]

[GitHub](https://github.com/L42ARO/Mercury-Transforming-Drone)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "其他" AND file.name != "L42ARO--Mercury-Transforming-Drone"
> SORT stars DESC
> LIMIT 8
> ```

---

## 個人筆記

> [!question]+ 快速評估（第一次看時填寫）
> _填寫後更新 frontmatter 的 `my_rating` 和 `status` 欄位_
> 
> **跟我的工作相關嗎？** 是 / 否 / 間接相關
> **值得花時間試用嗎？** 是 / 以後再說 / 不需要
> **第一印象**：_一句話_

> [!success]- 深度評估（試用後填寫）
> 
> | 項目 | 分數 (1-5) | 備註 |
> | --- | :---: | --- |
> | 實用性 | /5 | |
> | 技術新穎性 | /5 | |
> | 文件品質 | /5 | |
> | 社群活躍度 | /5 | |
> | 上手難度 | /5 | 1=很難 5=很簡單 |
> 
> **成熟度**：早期 / 可用 / 穩定
> **總評**：_整體評價、跟其他工具的比較、推薦給誰..._

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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，353 stars
