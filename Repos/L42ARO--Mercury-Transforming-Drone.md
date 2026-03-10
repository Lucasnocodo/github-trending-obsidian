---
repo: L42ARO/Mercury-Transforming-Drone
url: https://github.com/L42ARO/Mercury-Transforming-Drone
owner: L42ARO
owner_type: User
language: Python
license: CERN-OHL-S-2.0
description: "Mercury is a transforming drone anyone can build that can be adapted for many use cases thanks to it's versatile mobility, wide range of sensors, and cargo bay area"
homepage: ""
stars: 356
stars_per_day: 89
forks: 44
open_issues: 0
created: 2026-03-06
pushed_at: 2026-03-07
first_seen: 2026-03-10
week: "2026-W11"
category: "其他"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 其他
  - python
aliases:
  - "Mercury-Transforming-Drone"
  - "L42ARO/Mercury-Transforming-Drone"
  - "讓任何人都能組裝一台具多功能的變形無人機，適用於各種用途。"
---

# Mercury-Transforming-Drone

**356** stars · **89** stars/天 · 建立 4 天前 · Python · CERN-OHL-S-2.0

> [!summary] 一句話摘要
> 讓任何人都能組裝一台具多功能的變形無人機，適用於各種用途。

> [!abstract] 核心創新
> 這個專案的創新點在於其可變形設計和多功能感測器的整合，讓無人機能夠適應不同的使用場景。

## 專案簡介

這個專案提供了一個可組裝的變形無人機，具備多種感測器和載貨空間，適合不同的應用場景。它的核心機制是透過簡單的變形機構和內部載貨艙，讓無人機能夠在不同環境中靈活運行。技術上使用了 Raspberry Pi 和 Ardupilot，搭配 RGB、深度和熱成像攝影機，實現高效的自動駕駛功能。與其他無人機相比，Mercury 的獨特之處在於其可變形設計和廣泛的感測器選擇，讓使用者能夠根據需求進行調整。實際使用中，這款無人機的載重能力為 1 公斤，適合多種應用，但在戶外風速過大時可能會影響穩定性。整體來說，這個專案非常適合對無人機有興趣的開發者和愛好者，值得一試。

**技術棧**：`Raspberry Pi` · `Ardupilot` · `Python`

## 重點功能

- 具備 1 公斤的內部載貨艙。
- 簡單的變形機構，快速轉換模式。
- 搭載 RGB、深度和熱成像攝影機。
- 支援 Ardupilot 和 GPS 自動駕駛。
- 提供完整的組裝 STL 檔案和電路板檔案。

## 快速開始

1. 下載所需的 STL 檔案和電路板檔案
```bash
git clone https://github.com/L42ARO/Mercury-Transforming-Drone
```
2. 組裝無人機，根據說明書安裝各部件
```bash
參考 README 中的組裝指南
```
3. 安裝 Raspberry Pi 和相關軟體
```bash
依照 README 中的軟體設置步驟進行
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 專案的創作者 L42ARO 和 Agonat0r 具備豐富的無人機開發經驗，這使得這個專案能夠切中 DIY 無人機愛好者的需求。隨著無人機技術的普及，越來越多的人希望能夠自己組裝和改裝無人機，而 Mercury 提供了這樣的可能性。近年來，無人機在各行各業的應用越來越廣泛，這也促使了該專案的興起。

## 適合誰使用

**目標受眾**：對無人機組裝和自動化感興趣的開發者和愛好者。

> [!example] 使用場景
> - 工程師用它來開發自動化監測系統，因為它的多種感測器可以適應不同環境。
> - 學生用它來學習無人機組裝和編程，因為這是一個實用的實驗平台。
> - 業餘愛好者用它來拍攝空中攝影，因為它的變形設計使得拍攝角度更加靈活。

## 架構分析

專案採用前後端分離架構，硬體部分由 Raspberry Pi 控制，並搭配各種感測器進行數據收集和處理。無人機的運行邏輯由 Ardupilot 提供，實現自動駕駛功能。

## 優缺點分析

> [!success] 優點
> - 可組裝性高，適合 DIY 愛好者。
> - 多種感測器選擇，適應性強。
> - 變形設計提升了使用靈活性。

> [!danger] 缺點
> - 組裝過程需要一定的技術知識。
> - 在特定環境下可能影響穩定性。
> - 文件和資源主要以英文提供。

> [!warning] 注意事項
> - 在強風環境中穩定性可能受影響。
> - 需要一定的電子和機械知識來組裝。
> - 目前僅提供英文文件，對於非英語使用者可能不太友好。

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
> | XT60 Male & Female | 1 | [Buy](https://www.amazon.com/dp/B0CMM1BBDQ

## 延伸閱讀

相關概念：[[無人機技術]] · [[自動駕駛系統]] · [[感測器整合]]

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
