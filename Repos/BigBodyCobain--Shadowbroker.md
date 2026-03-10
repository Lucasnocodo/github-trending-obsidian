---
repo: BigBodyCobain/Shadowbroker
url: https://github.com/BigBodyCobain/Shadowbroker
owner: BigBodyCobain
owner_type: User
language: TypeScript
license: N/A
description: "Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. The knowledge is available to all but rarely aggregated in the open, until now."
homepage: ""
stars: 1357
stars_per_day: 271
forks: 145
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
  - "提供即時的全球開源情報平台，追蹤航班、衛星等多種數據。"
---

# Shadowbroker

**1.4k** stars · **271** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`v0.5.0`

> [!summary] 一句話摘要
> 提供即時的全球開源情報平台，追蹤航班、衛星等多種數據。

> [!abstract] 核心創新
> 提供即時的多域開源情報聚合和可視化功能。

## 專案簡介

這個專案提供一個即時的多域開源情報儀表板，能夠聚合來自多個開源情報來源的數據，並在統一的介面上顯示。它使用 Next.js 和 FastAPI 架構，能夠追蹤飛機、船隻、衛星、地震等事件，並即時更新。與其他情報工具相比，Shadowbroker 的獨特之處在於其整合了多種數據來源，並提供可視化的地圖介面，讓使用者能夠快速掌握全球動態。實際使用中，這個平台能夠提供豐富的即時資訊，但對於資料的準確性和完整性仍需用戶自行判斷。這個專案已經達到一定的成熟度，適合對開源情報有興趣的分析師和研究者使用。

**技術棧**：`Next.js` · `FastAPI` · `Python` · `MapLibre GL`

## 重點功能

- 即時追蹤商業和私人航班，提供位置和飛行路徑。
- 聚合多個開源情報來源，提供全面的全球監控。
- 可視化地圖介面，方便用戶快速理解數據。
- 支援追蹤海上船隻和軍事交通。
- 提供即時的地震和災難監控。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git
```
2. 啟動 Docker 容器
```bash
./compose.sh up -d
```
3. 訪問儀表板
```bash
打開 http://localhost:3000
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 開源情報的需求隨著全球局勢變化而增加，作者 BigBodyCobain 的背景使得這個專案能夠快速吸引注意。隨著社交媒體和即時通訊的普及，對於即時情報的需求也在上升，讓這個專案在短時間內獲得關注。

## 適合誰使用

**目標受眾**：對開源情報和即時數據分析有興趣的研究者和分析師。

> [!example] 使用場景
> - 情報分析師用它來追蹤全球航班動態，因為它能即時顯示飛機位置。
> - 地震研究者用它來監控地震事件，因為它提供即時的震中位置。
> - 安全專家用它來追蹤海上交通，因為它能顯示船隻的即時位置和類型。

## 架構分析

專案採用前後端分離架構，前端使用 Next.js，後端使用 FastAPI 來處理數據請求。資料流為：外部數據來源 → 後端 API → 前端可視化介面。

## 優缺點分析

> [!success] 優點
> - 即時更新的全球情報，提供豐富的數據。
> - 可視化介面使得數據易於理解。
> - 整合多種數據來源，提供全面的監控。

> [!danger] 缺點
> - 依賴於外部數據來源，可能影響準確性。
> - 需要 Docker 環境，對於某些用戶來說安裝較為繁瑣。
> - 即時性可能受到網路延遲影響。

> [!warning] 注意事項
> - 需要 Docker 或 Podman 環境才能運行。
> - 資料的準確性依賴於外部數據來源。
> - 對於特定事件的即時性可能受到網路延遲影響。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| FlightAware | FlightAware 主要專注於商業航班，無法追蹤私人飛機和其他事件。 |
| MarineTraffic | MarineTraffic 專注於海上交通，無法提供全面的全球情報。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 145 |
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

相關概念：[[開源情報]] · [[地理資訊系統]] · [[即時數據分析]] · [[衛星追蹤]]

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
