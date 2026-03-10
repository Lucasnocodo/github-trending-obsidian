---
repo: BigBodyCobain/Shadowbroker
url: https://github.com/BigBodyCobain/Shadowbroker
owner: BigBodyCobain
owner_type: User
language: TypeScript
license: N/A
description: "Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. The knowledge is available to all but rarely aggregated in the open, until now."
homepage: ""
stars: 1337
stars_per_day: 267
forks: 144
open_issues: 1
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
  - 資料科學
  - typescript
aliases:
  - "Shadowbroker"
  - "BigBodyCobain/Shadowbroker"
  - "提供一個整合多種開源情報的即時地理情報平台，讓使用者能夠追蹤全球活動。"
---

# Shadowbroker

**1.3k** stars · **267** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`v0.5.0`

> [!summary] 一句話摘要
> 提供一個整合多種開源情報的即時地理情報平台，讓使用者能夠追蹤全球活動。

> [!abstract] 核心創新
> 提供即時更新的多領域開源情報儀表板，整合航空、海運、衛星等數據於一體。

## 專案簡介

這個專案透過即時數據聚合，將航空、海運、衛星、地震等資訊呈現在統一的地圖介面上。它使用了 Next.js 和 FastAPI，並透過多個開源情報來源實時更新數據，讓分析師和研究人員能夠快速獲取全球動態。與其他類似工具相比，ShadowBroker 提供了更全面的追蹤功能，包括私人飛機和軍事航班的詳細資訊。使用者可以即時監控各種事件，並獲得高解析度的衛星影像，這在其他工具中較為罕見。雖然這個平台在功能上非常強大，但對於某些特定的數據來源，可能會受到限制。整體來說，這是一個值得嘗試的成熟工具，特別適合需要即時情報的專業人士。

**技術棧**：`Next.js` · `FastAPI` · `Python`

## 重點功能

- 即時航空追蹤，包括商業和私人飛機。
- 海運追蹤，提供超過25,000艘船隻的實時數據。
- 衛星和地震事件的即時監控。
- 多種數據來源的整合，提供全面的全球活動視圖。
- 用戶友好的地圖介面，方便使用者操作和查詢。

## 快速開始

1. 克隆專案並進入目錄
```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git && cd Shadowbroker
```
2. 啟動 Docker 容器
```bash
./compose.sh up -d
```
3. 在瀏覽器中打開儀表板
```bash
http://localhost:3000
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 專案的作者具備強大的技術背景，並且這個平台切中現代社會對於即時情報的需求。隨著全球政治與經濟形勢的變化，對於開源情報的需求日益增加，這使得 ShadowBroker 在當前時期特別受到關注。

## 適合誰使用

**目標受眾**：需要即時開源情報的分析師、研究人員和安全專家。

> [!example] 使用場景
> - 分析師用它來追蹤富豪的私人飛機，因為可以即時獲得航班資訊。
> - 研究人員用它來監控衛星運行，因為能夠獲得高解析度影像。
> - 安全專家用它來檢測GPS干擾區域，因為可以即時獲取相關數據。

## 架構分析

前端使用 Next.js 進行即時數據展示，後端則利用 FastAPI 處理數據聚合和API請求。數據流從多個開源情報來源進入後端，經過處理後呈現在前端介面上。

## 優缺點分析

> [!success] 優點
> - 提供全面的即時情報追蹤功能。
> - 用戶介面友好，易於操作。
> - 多種數據來源整合，信息量大。

> [!danger] 缺點
> - 需要 Docker 環境，對新手有一定門檻。
> - 某些數據來源可能不穩定。
> - 在特定情況下，數據更新速度可能受限。

> [!warning] 注意事項
> - 需要 Docker 或 Podman 環境。
> - 某些數據來源可能會受到限制。
> - 對於新手使用者，可能需要時間熟悉介面。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 144 |
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

## 社群與生態

**社群活躍度**：社群活躍，持續更新和維護。
**連結**：[文件](https://github.com/BigBodyCobain/Shadowbroker)

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

相關概念：[[開源情報 (OSINT)]] · [[即時數據聚合]] · [[地理信息系統 (GIS)]]

[GitHub](https://github.com/BigBodyCobain/Shadowbroker)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，1.3k stars
