---
repo: BigBodyCobain/Shadowbroker
url: https://github.com/BigBodyCobain/Shadowbroker
owner: BigBodyCobain
owner_type: User
language: TypeScript
license: N/A
description: "Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. The knowledge is available to all but rarely aggregated in the open, until now."
homepage: ""
stars: 1394
stars_per_day: 279
forks: 152
open_issues: 0
created: 2026-03-05
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
release_tag: "v0.6.0"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供全球即時開源情報，從私人飛機到地震事件，所有數據都在一個統一介面上呈現。"
priority: medium
tags:
  - github
  - "category/其他"
  - "lang/typescript"
aliases:
  - "Shadowbroker"
  - "BigBodyCobain/Shadowbroker"
  - "提供全球即時開源情報，從私人飛機到地震事件，所有數據都在一個統一介面上呈現。"
---

# Shadowbroker

**1.4k** stars · **279** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`v0.6.0`

> [!summary] 一句話摘要
> 提供全球即時開源情報，從私人飛機到地震事件，所有數據都在一個統一介面上呈現。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (279 stars/day)
> **適合** 需要即時開源情報來支持決策的安全分析師和研究人員。
> **一句話重點** 這個專案不僅是數據的聚合，更是對全球事件的即時監控，對於安全分析和研究具有重要價值。

> [!abstract] 核心創新
> 這個專案提供了一個統一的即時開源情報平台，整合多種數據來源並以地圖形式呈現。

## 專案簡介

ShadowBroker 是一個即時多領域的開源情報儀表板，聚合來自數十個開源情報源的實時數據，並在統一的暗作地圖介面上呈現。它能夠追蹤飛機、船隻、衛星、地震、衝突區域、CCTV 網絡、GPS 干擾等，所有數據都會實時更新。技術上，這個專案使用了 Next.js、MapLibre GL 和 FastAPI，並以 Python 實現，適合分析師、研究人員和愛好者使用。與其他情報工具相比，ShadowBroker 提供了一個整合的視圖，並且能夠即時顯示多種數據類型，這在市場上是相對獨特的。使用者可以實時追蹤超過 5000 架商業飛機和 25000 艘船隻，並且能夠查看高解析度衛星影像。這個專案目前在 alpha 階段，但其功能已經相當完整，適合中小型團隊使用。對於需要即時情報的場景，這是一個非常有價值的工具，但在大型數據處理上可能會有性能限制。

**技術棧**：`Next.js` · `MapLibre GL` · `FastAPI` · `Python`

## 重點功能

- 航空追蹤 — 實時追蹤商業飛行、私人飛機和軍事航班，提供超過 5000 架飛機的數據。
- 海洋追蹤 — 透過 AIS 獲取 25000 艘船隻的實時位置，並提供船隻類型的顏色編碼圖標。
- 衛星追蹤 — 實時追蹤 2000 多顆衛星的運行，無需 API 金鑰。
- 地緣政治事件 — 聚合 GDELT 提供的全球衝突事件，實時更新。
- 高解析度衛星影像 — 提供 Esri 和 NASA 的衛星影像，解析度可達 10 米。
- SDR 接收器 — 全球 500 多個公共 SDR 接收器的即時數據，並提供嵌入式調諧器。
- CCTV 網絡 — 監控來自 2000 多個交通攝像頭的實時影像。
- 用戶自定義 RSS 聚合 — 支持最多 20 個情報來源的自定義 RSS 聚合，並可設置優先權。

## 快速開始

1. 克隆專案並啟動 Docker 容器
```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git && cd Shadowbroker && ./compose.sh up -d
```
2. 訪問儀表板
```bash
打開 http://localhost:3000
```
3. 使用 Podman 作為替代
```bash
./compose.sh --engine podman up -d
```

## 程式碼範例

```bash
./compose.sh up -d
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 專案的作者背景強大，結合了多種開源技術，滿足了對即時情報的需求。隨著地緣政治緊張局勢的加劇，對於即時監控的需求也隨之上升，這使得 ShadowBroker 的市場需求增加。這個專案的推出時機恰到好處，因為它填補了市場上缺乏整合性情報平台的空白。

## 適合誰使用

**目標受眾**：需要即時開源情報來支持決策的安全分析師和研究人員。

> [!example] 使用場景
> - 安全分析師用它來追蹤全球飛行活動，因為能夠即時獲取超過 5000 架飛機的數據，提升了風險評估的準確性。
> - 研究人員用它來監控地震活動，因為可以即時獲取最新的地震數據，並與其他地理信息結合，進行深入分析。
> - 政府機構用它來監控海上交通，因為能夠即時追蹤 25000 艘船隻，並分析其行為模式，增強海洋安全。

## 架構分析

ShadowBroker 採用前後端分離的架構，前端使用 Next.js，後端則是 FastAPI。用戶的輸入通過 API 請求發送至後端，後端處理數據並返回結果，最終在前端顯示。專案的目錄結構包含了前端和後端的分離，並且使用 Docker 進行容器化部署，便於管理和擴展。

## 技術深入分析

> [!note]- 展開深入分析
> ShadowBroker 的核心在於其即時數據聚合能力，使用了多種開源數據源來提供航空、海洋及地緣政治的情報。其效能特性在於能夠實時更新數據，並且支持超過 5000 架飛機和 25000 艘船隻的追蹤。關鍵設計取捨在於選擇了開源技術來構建平台，這使得其在成本和可擴展性上具有優勢。與其他競品相比，ShadowBroker 提供的多領域數據整合能力和即時更新的特性，使其在市場上具備獨特的競爭力。

## 優缺點分析

> [!success] 優點
> - 即時數據更新，適合需要快速反應的場景。
> - 整合多種數據來源，提供全面的全球監控視圖。
> - 用戶友好的界面，便於分析和決策。

> [!danger] 缺點
> - 需要 Docker 環境，對於新手可能有一定的學習曲線。
> - 在高負載情況下可能會影響性能。
> - 目前功能仍在持續開發中，可能存在不穩定性。

> [!warning] 注意事項
> - 目前仍在 alpha 階段，可能存在不穩定性。
> - 需要 Docker 或 Podman 環境才能運行。
> - 高解析度衛星影像的更新頻率約為每 5 天一次。
> - 對於大量數據的處理，性能可能會受到限制。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 152 |
| Open Issues | 0 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 103.2 MB |

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
> | [@anoracleofra-code](https://github.com/anoracleofra-code) | 45 |
> | [@BigBodyCobain](https://github.com/BigBodyCobain) | 21 |
> | [@ttulttul](https://github.com/ttulttul) | 1 |

**最新版本**：v0.6.0 — ShadowBroker v0.6.0 (2026-03-10)

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
> * **Carrier Strike Group Tracker** — All 11 active US Navy aircraft carriers with OSINT-estimated positions
>   * Automated GDELT news scraping for carrier movement intelligence
>   * 50+ geographic region-to-coordinate mappings
>   * Disk-cached positions, auto-updates at 00:00 & 12:00 UTC
> * **Cruise & Passenger Ships** — Dedicated layer for cruise liners and ferries
> * **Clustered Display** — Ships cluster at low zoom with count labels, decluster on zoom-in
> 
> ### 🛰️ Space & Satellites
> 
> * **Orbital Tracking** — Real-time satellite positions via CelesTrak TLE data + SGP4 propagation (2,000+ active satellites, no API key required)
> * **Mission-Type Classification** — Color-coded by mission: military recon (red), SAR (cyan), SIGINT (white), navigation (blue), early warning (magenta), commercial imaging (green), space station (gold)
> 
> ### 🌍 Geopolitics & Conflict
> 
> * **Global Incidents** — GDELT-powered conflict event aggregation (last 8 hours, ~1,000 events)
> * **Ukraine Frontline** — Live warfront GeoJSON from DeepState Map
> * **SIGINT/RISINT News Feed** — Real-time RSS aggregation from multiple intelligence-focused sources with user-customizable feeds (up to 20 sources, configurable priority weights 1-5)
> * **Region Dossier** — Right-click anywhere on the map for:
>   * Country profile (population, capital, languages, currencies, area)
>   * Head of state & government type (Wikidata SPARQL)
>   * Local Wikipedia summary with thumbnail
> 
> ### 🛰️ Satellite Imagery
> 
> * **NASA GIBS (MODIS Terra)** — Daily true-color satellite imagery overlay with 30-day time slider, play/pause animation, and

## 延伸閱讀

相關概念：[[開源情報]] · [[地理空間分析]] · [[即時通訊]]

[GitHub](https://github.com/BigBodyCobain/Shadowbroker)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "其他" AND file.name != "BigBodyCobain--Shadowbroker"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "BigBodyCobain--Shadowbroker"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，1.3k stars
