---
repo: L42ARO/Mercury-Transforming-Drone
url: https://github.com/L42ARO/Mercury-Transforming-Drone
owner: L42ARO
owner_type: User
language: Python
license: CERN-OHL-S-2.0
description: "Mercury is a transforming drone anyone can build that can be adapted for many use cases thanks to it's versatile mobility, wide range of sensors, and cargo bay area"
homepage: ""
stars: 358
stars_per_day: 90
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
use_case: "讓任何人都能組裝一架可變形的無人機，適用於多種用途。"
priority: medium
tags:
  - github
  - "category/其他"
  - "lang/python"
aliases:
  - "Mercury-Transforming-Drone"
  - "L42ARO/Mercury-Transforming-Drone"
  - "讓任何人都能組裝一架可變形的無人機，適用於多種用途。"
---

# Mercury-Transforming-Drone

**358** stars · **90** stars/天 · 建立 4 天前 · Python · CERN-OHL-S-2.0

> [!summary] 一句話摘要
> 讓任何人都能組裝一架可變形的無人機，適用於多種用途。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (90 stars/day)
> **適合** 對無人機組裝和自定義有興趣的開發者和愛好者。
> **一句話重點** 這個專案展示了如何通過開源設計讓無人機技術變得更為普及和可定制。

> [!abstract] 核心創新
> 這個專案的創新在於其可變形設計，讓無人機能夠根據不同任務靈活調整形態。

## 專案簡介

Mercury 是一款可變形的無人機，具備內部有效載荷艙（可容納 1 公斤）和簡單的變形機構，讓使用者能夠根據需求調整其形態。它搭載 RGB、深度和熱成像攝影機，並使用 Ardupilot 和 GPS 進行自主飛行。這款無人機的設計特別適合 DIY 愛好者，提供了完整的材料清單和 CAD 檔案，讓使用者能夠輕鬆組裝。與其他無人機相比，Mercury 的獨特之處在於其變形能力和多樣的感測器配置，這使其在多種應用場景中更具靈活性。實際使用中，這款無人機的效能依賴於所選用的硬體，並且需要一定的組裝技巧。這個專案目前處於穩定階段，適合小型團隊或個人開發者使用。對於希望探索無人機技術的愛好者來說，這是一個值得嘗試的選擇，但對於需要高效能商業應用的團隊，可能需要考慮其他專業產品。

**技術棧**：`Python` · `TypeScript` · `JavaScript` · `C++` · `Shell`

## 重點功能

- 內部有效載荷艙 — 可容納 1 公斤的貨物，適合多種應用。
- 簡單變形機構 — 允許用戶根據需求調整無人機形態。
- 多種感測器 — 配備 RGB、深度和熱成像攝影機，支持多樣化的數據收集。
- 完整材料清單 — 提供詳細的硬體購買連結，方便使用者組裝。
- CAD 檔案 — 提供 STL 檔案和其他格式，方便進行自定義設計。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/L42ARO/Mercury-Transforming-Drone.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 組裝無人機
```bash
參考 Bill of Materials 和 CAD Files 進行組裝。
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的作者 L42ARO 和 Agonat0r 在無人機和開源硬體領域有豐富的經驗，能夠切中 DIY 無人機愛好者的需求。隨著無人機技術的普及，越來越多的人希望能夠自己組裝和定制無人機，這個專案正好滿足了這一需求。最近的無人機應用案例增多，讓這個專案在社群中獲得了更多關注。

## 適合誰使用

**目標受眾**：對無人機組裝和自定義有興趣的開發者和愛好者。

> [!example] 使用場景
> - 無人機愛好者用它來組裝一架可變形的無人機，因為這樣能夠根據不同的任務需求靈活調整機體形態。
> - 工程師用它來進行環境監測，因為其搭載的多種感測器（RGB、深度、熱成像）能夠收集多樣化的數據。
> - 學生用它來學習無人機技術，因為提供完整的材料清單和 CAD 檔案，讓組裝過程變得簡單明瞭。

## 架構分析

這是一個前後端分離的專案，使用者輸入 → 組裝無人機 → 輸出可變形無人機。核心技術決策包括使用 Ardupilot 進行自主飛行和多種感測器的搭載。專案目錄結構包括 STL 檔案、自治軟體和 PCB 檔案，方便使用者進行組裝和編程。

## 優缺點分析

> [!success] 優點
> - 靈活的設計，能夠根據需求變形。
> - 多樣的感測器配置，適合多種應用場景。
> - 提供詳細的組裝指導和材料清單，降低入門門檻。

> [!danger] 缺點
> - 組裝過程需要一定的技術背景。
> - 效能依賴於使用者選擇的硬體配置。
> - 不適合需要高效能商業應用的團隊。

> [!warning] 注意事項
> - 組裝過程需要一定的技術背景。
> - 效能依賴於所選用的硬體配置。
> - 不適合需要高效能商業應用的團隊。

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

**社群活躍度**：社群活躍，提供即時支持和交流。
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

相關概念：[[無人機技術]] · [[開源硬體]] · [[DIY 電子產品]]

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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，353 stars
