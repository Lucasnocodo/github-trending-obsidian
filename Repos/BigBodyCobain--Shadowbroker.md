---
repo: BigBodyCobain/Shadowbroker
url: https://github.com/BigBodyCobain/Shadowbroker
owner: BigBodyCobain
owner_type: User
language: TypeScript
license: N/A
description: "Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. The knowledge is available to all but rarely aggregated in the open, until now."
homepage: ""
stars: 1351
stars_per_day: 270
forks: 145
open_issues: 1
created: 2026-03-05
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "其他"
release_tag: "v0.5.0"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/其他"
  - "lang/typescript"
aliases:
  - "Shadowbroker"
  - "BigBodyCobain/Shadowbroker"
  - "提供即時的全球開源情報，追蹤航空、海洋及地震等事件。"
---

# Shadowbroker

**1.4k** stars · **270** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`v0.5.0`

> [!summary] 一句話摘要
> 提供即時的全球開源情報，追蹤航空、海洋及地震等事件。

> [!abstract] 核心創新
> 提供即時的多領域開源情報，並在統一介面上顯示全球活動。

## 專案簡介

這是一個即時的多領域開源情報儀表板，能夠聚合來自多個開源情報來源的數據，並在統一的介面上顯示。它使用 Next.js 和 FastAPI 建構，能夠追蹤飛機、船隻、衛星、地震等事件，並即時更新。與其他情報工具相比，Shadowbroker 提供了更為直觀的地圖介面，讓使用者可以輕鬆地查看各種全球活動。雖然功能強大，但需要 Docker 或 Podman 環境來運行，這對於某些使用者來說可能是一個門檻。整體而言，這是一個非常適合情報分析師和研究者的工具，能夠提供豐富的即時數據。

**技術棧**：`Next.js` · `MapLibre GL` · `FastAPI` · `Python`

## 重點功能

- 即時追蹤商業和私人飛機，提供詳細的航班資訊。
- 海洋交通監控，顯示超過 25,000 艘船隻的即時位置。
- 地震和災害事件的即時更新，提供重要的地理資訊。
- 統一的黑色操作地圖介面，方便使用者查看各種數據。
- 支援多種開源情報來源，提供豐富的數據聚合。

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
Open http://localhost:3000
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 BigBodyCobain 在開源情報領域有一定的影響力，這個專案切合了對即時全球事件追蹤的需求，特別是在地緣政治日益複雜的當下。最近的更新也顯示出活躍的開發進度，吸引了更多使用者的注意。

## 適合誰使用

**目標受眾**：對全球即時事件追蹤有需求的情報分析師和研究者。

> [!example] 使用場景
> - 情報分析師用它來追蹤全球的飛機動態，因為它能提供即時的航空數據。
> - 研究者用它來監控海洋交通，因為它能夠顯示船隻的即時位置和類別。
> - 災害管理者用它來追蹤地震事件，因為它能即時更新並提供相關資訊。

## 架構分析

這個專案採用前後端分離架構，前端使用 Next.js 進行開發，後端則使用 FastAPI 提供 API 支援。資料流是使用者請求 → API Server → 數據聚合 → 前端渲染即時資訊。

## 優缺點分析

> [!success] 優點
> - 即時更新的全球情報，提供豐富的數據視覺化。
> - 多領域的數據聚合，方便使用者進行全面分析。
> - 直觀的地圖介面，易於使用和理解。

> [!danger] 缺點
> - 需要 Docker 或 Podman 環境，對某些使用者來說可能是一個障礙。
> - 即時數據的準確性依賴於外部數據來源。
> - 功能雖然強大，但可能需要一定的學習曲線來熟悉。

> [!warning] 注意事項
> - 需要 Docker 或 Podman 環境來運行。
> - 對於不熟悉容器技術的使用者來說，可能有一定的學習曲線。
> - 即時數據的準確性依賴於外部數據來源的穩定性。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| FlightAware | FlightAware 專注於商業航班，而 Shadowbroker 也支援私人和軍事航班的追蹤。 |
| MarineTraffic | MarineTraffic 專注於海洋交通，而 Shadowbroker 提供更廣泛的情報來源和即時更新。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 145 |
| Open Issues | 1 |
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

相關概念：[[開源情報]] · [[即時數據]] · [[地理資訊系統]] · [[航空監控]] · [[災害管理]]

[GitHub](https://github.com/BigBodyCobain/Shadowbroker)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "其他" AND file.name != "BigBodyCobain--Shadowbroker"
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
