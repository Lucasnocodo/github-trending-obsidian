---
repo: BigBodyCobain/Shadowbroker
url: https://github.com/BigBodyCobain/Shadowbroker
owner: BigBodyCobain
owner_type: User
language: TypeScript
license: N/A
description: "Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. The knowledge is available to all but rarely aggregated in the open, until now."
homepage: ""
stars: 1354
stars_per_day: 271
forks: 145
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
  - "category/資料科學"
  - "lang/typescript"
aliases:
  - "Shadowbroker"
  - "BigBodyCobain/Shadowbroker"
  - "提供即時的全球開源情報，整合多種資料來源於單一介面。"
---

# Shadowbroker

**1.4k** stars · **271** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`v0.5.0`

> [!summary] 一句話摘要
> 提供即時的全球開源情報，整合多種資料來源於單一介面。

> [!abstract] 核心創新
> 提供統一的即時開源情報儀表板，整合多種資料來源於單一介面。

## 專案簡介

這個專案是一個即時的多領域開源情報儀表板，能夠從多個開源情報來源聚合資料，並在統一的介面上呈現。它追蹤飛機、船隻、衛星、地震、衝突區域等，所有資料都即時更新，適合分析師和研究人員使用。使用 Next.js 和 FastAPI 架構，這個平台能夠提供高效的資料視覺化和即時更新功能。與其他情報平台相比，Shadowbroker 提供了更全面的資料來源整合，並且在使用者介面上更為友好。這個工具的效能在即時資料更新上表現優異，但需要 Docker 環境來運行。總體來說，Shadowbroker 是一個非常有潛力的工具，適合需要即時情報的專業人士和愛好者。

**技術棧**：`Next.js` · `MapLibre GL` · `FastAPI` · `Python`

## 重點功能

- 即時追蹤飛機、船隻和衛星。
- 整合多種開源情報資料來源。
- 提供高解析度的衛星影像。
- 支援地震和災難的即時追蹤。
- 友好的使用者介面，易於操作。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git
```
2. 啟動 Docker 容器
```bash
./compose.sh up -d
```
3. 打開儀表板
```bash
在瀏覽器中訪問 http://localhost:3000
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的開發者背景強大，結合了多種開源資料來源，滿足了對即時情報的需求。隨著地緣政治事件的頻繁發生，對於即時追蹤和分析的需求上升，使得 Shadowbroker 在短時間內受到關注。

## 適合誰使用

**目標受眾**：需要即時開源情報的分析師和研究人員。

> [!example] 使用場景
> - 情報分析師 用它來 追蹤全球飛機動態，因為它提供即時的飛行資料。
> - 研究人員 用它來 監控地震活動，因為它整合了多個資料來源於單一介面。
> - 安全專家 用它來 追蹤海上交通，因為它能夠提供即時的船隻位置資訊。

## 架構分析

前後端分離架構，前端使用 Next.js 進行資料視覺化，後端使用 FastAPI 提供即時資料更新。資料流是 開源資料來源 → FastAPI 服務 → 前端渲染。

## 優缺點分析

> [!success] 優點
> - 即時更新的多領域情報資料。
> - 友好的使用者介面，易於操作。
> - 整合多種資料來源，提供全面的視角。

> [!danger] 缺點
> - 需要 Docker 環境來運行，增加了安裝複雜度。
> - 即時資料更新可能受到網路延遲影響。
> - 對於某些資料來源的支援可能有限。

> [!warning] 注意事項
> - 需要 Docker 環境來運行。
> - 即時資料更新可能會受到網路延遲影響。
> - 對於某些資料來源的支援可能有限。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| FlightAware | FlightAware 主要專注於商業航班，無法提供如此多元的資料來源整合。 |
| MarineTraffic | MarineTraffic 主要針對海上交通，缺乏對其他領域的即時追蹤。 |

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

## 社群與生態

**社群活躍度**：專案活躍，持續更新中。
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

相關概念：[[開源情報]] · [[即時資料更新]] · [[地理資訊系統]] · [[資料視覺化]]

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
