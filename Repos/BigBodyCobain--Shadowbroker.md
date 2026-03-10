---
repo: BigBodyCobain/Shadowbroker
url: https://github.com/BigBodyCobain/Shadowbroker
owner: BigBodyCobain
owner_type: User
language: TypeScript
license: N/A
description: "Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. The knowledge is available to all but rarely aggregated in the open, until now."
homepage: ""
stars: 1360
stars_per_day: 272
forks: 147
open_issues: 2
created: 2026-03-05
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "資料科學"
release_tag: "v0.5.0"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/資料科學"
  - "lang/typescript"
aliases:
  - "Shadowbroker"
  - "BigBodyCobain/Shadowbroker"
  - "提供即時的全球開源情報，整合多種資料來源於單一介面。"
---

# Shadowbroker

**1.4k** stars · **272** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`v0.5.0`

> [!summary] 一句話摘要
> 提供即時的全球開源情報，整合多種資料來源於單一介面。

> [!abstract] 核心創新
> 提供即時的多領域開源情報整合平台。

## 專案簡介

它讓使用者能夠在一個統一的介面上追蹤全球的航空、海洋、地震等事件。這個平台使用 Next.js 和 FastAPI，整合了多個開源情報來源，並以地圖形式呈現實時數據。與其他情報平台相比，Shadowbroker 提供了更全面的追蹤功能，涵蓋了私營飛機、軍事航班、海洋交通等多種領域。實際使用中，使用者可以快速獲得即時的地理情報，對於研究和分析非常有幫助。這個專案已經達到穩定版本，適合需要即時情報的分析師和研究人員。

**技術棧**：`Next.js` · `FastAPI` · `Python` · `MapLibre GL`

## 重點功能

- 即時航空追蹤，涵蓋商業、私營及軍事航班。
- 海洋交通監控，提供船隻實時位置。
- 地震和災害即時追蹤，提供最新的災害資訊。
- 整合多種開源情報來源，提供全面的數據視圖。
- 使用 MapLibre GL 提供互動式地圖介面。

## 快速開始

1. 克隆專案並進入資料夾
```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git
```
2. 啟動 Docker 容器
```bash
./compose.sh up -d
```
3. 打開瀏覽器查看儀表板
```bash
http://localhost:3000
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者背景強大，專案切合當前對即時情報的需求，尤其是在地緣政治緊張的時期。最近的功能更新和社群活躍度也促進了其關注度。

## 適合誰使用

**目標受眾**：需要即時地理情報的分析師、研究人員和安全專家。

> [!example] 使用場景
> - 研究人員用它來追蹤全球的地震活動，因為可以即時獲得最新數據。
> - 安全分析師用它來監控航空交通，因為能夠識別高淨值個人的飛行路徑。
> - 政府機構用它來分析海洋交通，因為提供了實時的船隻追蹤功能。

## 架構分析

專案採用前後端分離架構，前端使用 Next.js，後端使用 FastAPI，數據通過多個開源來源整合並呈現於地圖上。

## 優缺點分析

> [!success] 優點
> - 即時數據更新，提供最新的全球情報。
> - 多領域整合，涵蓋航空、海洋及地震等資訊。
> - 互動式地圖介面，提升使用體驗。

> [!danger] 缺點
> - 需要 Docker 環境，對新手不友善。
> - 資料來源的穩定性可能影響使用效果。
> - 對於特定需求可能需要額外的設定。

> [!warning] 注意事項
> - 需要 Docker 或 Podman 環境才能運行。
> - 資料來源的準確性依賴於外部 API 的穩定性。
> - 可能需要進一步的設定以滿足特定需求。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| FlightAware | FlightAware 主要專注於商業航班，缺乏對軍事和私營飛機的追蹤。 |
| MarineTraffic | MarineTraffic 專注於海洋交通，無法提供全面的地理情報。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 147 |
| Open Issues | 2 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 103.1 MB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "TypeScript" : 73
>     "Python" : 25
>     "Shell" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@anoracleofra-code](https://github.com/anoracleofra-code) | 44 |
> | [@BigBodyCobain](https://github.com/BigBodyCobain) | 21 |
> | [@ttulttul](https://github.com/ttulttul) | 1 |

**最新版本**：v0.5.0 — ShadowBroker v0.5.0 (2026-03-10)

## README 摘錄

> [!info]- 展開查看原文 README
> 🛰️ S H A D O W B R O K E R
>   Global Threat Intercept — Real-Time Geospatial Intelligence Platform
>   
> 
>   
> 
> ---
> 
> **ShadowBroker** is a real-time, multi-domain OSINT dashboard that aggregates live data from dozens of open-source intelligence feeds and renders them on a unified dark-ops map interface. It tracks aircraft, ships, satellites, earthquakes, conflict zones, CCTV networks, GPS jamming, and breaking geopolitical events — all updating in real time.
> 
> Built with **Next.js**, **MapLibre GL**, **FastAPI**, and **Python**, it's designed for analysts, researchers, and enthusiasts who want a single-pane-of-glass view of global activity.
> 
> ---
> 
> ## Interesting Use Cases
> 
> * Track private jets of billionaires
> * Monitor satellites passing overhead and see high-resolution satellite imagery
> * Nose around local emergency scanners
> * Watch naval traffic worldwide
> * Detect GPS jamming zones
> * Follow earthquakes and disasters in real time
> 
> ---
> 
> ## ⚡ Quick Start (Docker or Podman)
> 
> ```bash
> git clone https://github.com/BigBodyCobain/Shadowbroker.git
> cd Shadowbroker
> ./compose.sh up -d
> ```
> 
> Open `http://localhost:3000` to view the dashboard! *(Requires Docker or Podman)*
> 
> `compose.sh` auto-detects `docker compose`, `docker-compose`, `podman compose`, and `podman-compose`.
> If both runtimes are installed, you can force Podman with `./compose.sh --engine podman up -d`.
> Do not append a trailing `.` to that command; Compose treats it as a service name.
> 
> ---
> 
> ## ✨ Features
> 
> ### 🛩️ Aviation Tracking
> 
> * **Commercial Flights** — Real-time positions via OpenSky Network (~5,000+ aircraft)
> * **Private Aircraft** — Light GA, turboprops, bizjets tracked separately
> * **Private Jets** — High-net-worth individual aircraft with owner identification
> * **Military Flights** — Tankers, ISR, fighters, transports via adsb.lol military endpoint
> * **Flight Trail Accumulation** — Persistent breadcrumb trails for all tracked aircraft
> * **Holding Pattern Detection** — Automatically flags aircraft circling (>300° total turn)
> * **Aircraft Classification** — Shape-accurate SVG icons: airliners, turboprops, bizjets, helicopters
> * **Grounded Detection** — Aircraft below 100ft AGL rendered with grey icons
> 
> ### 🚢 Maritime Tracking
> 
> * **AIS Vessel Stream** — 25,000+ vessels via aisstream.io WebSocket (real-time)
> * **Ship Classification** — Cargo, tanker, passenger, yacht, military vessel types with color-coded icons
> * **Carrier Strike Group Tracker** — All 11 active US Navy aircraft carriers with OSINT-estima

## 延伸閱讀

相關概念：[[開源情報]] · [[地理資訊系統]] · [[即時數據分析]] · [[航空與海洋監控]]

[GitHub](https://github.com/BigBodyCobain/Shadowbroker)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "資料科學" AND file.name != "BigBodyCobain--Shadowbroker"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，1.3k stars
