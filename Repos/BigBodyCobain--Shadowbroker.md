---
repo: BigBodyCobain/Shadowbroker
url: https://github.com/BigBodyCobain/Shadowbroker
owner: BigBodyCobain
owner_type: User
language: TypeScript
license: N/A
description: "Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. The knowledge is available to all but rarely aggregated in the open, until now."
homepage: ""
stars: 1376
stars_per_day: 275
forks: 148
open_issues: 1
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
tags:
  - github
  - "category/其他"
  - "lang/typescript"
aliases:
  - "Shadowbroker"
  - "BigBodyCobain/Shadowbroker"
  - "提供即時的多領域開源情報平台，整合全球活動數據。"
---

# Shadowbroker

**1.4k** stars · **275** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`v0.6.0`

> [!summary] 一句話摘要
> 提供即時的多領域開源情報平台，整合全球活動數據。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (275 stars/day)
> **適合** 需要即時全球情報數據的分析師和研究人員。
> **一句話重點** Shadowbroker 的即時情報整合能力讓使用者能夠快速掌握全球動態，特別適合需要即時數據的專業團隊。

> [!abstract] 核心創新
> Shadowbroker 提供一個統一的即時情報平台，整合多個開源數據來源，讓使用者能夠即時追蹤全球活動。

## 專案簡介

Shadowbroker 是一個即時的多領域開源情報平台，能夠整合來自多個開源情報來源的數據，並在統一的介面上呈現。使用者可以透過 `git clone` 和 `./compose.sh up -d` 快速啟動服務，並在 `http://localhost:3000` 查看即時的全球活動數據。該平台使用 Next.js 和 FastAPI，專為分析師和研究人員設計，提供航空、海事、衛星、地緣政治等多種追蹤功能。與其他情報平台相比，Shadowbroker 的即時更新和多樣化的數據來源使其在市場上脫穎而出。使用者可以追蹤私人飛機、海上交通、衛星運行等，並獲得即時的地緣政治事件更新。該專案目前處於穩定版本，適合需要即時情報的專業團隊使用。對於只需要單一領域數據的使用者，可能會覺得功能過於繁雜。

**技術棧**：`Next.js` · `FastAPI` · `MapLibre GL` · `Python`

## 重點功能

- 即時航空追蹤 — 追蹤超過 5,000 架商業飛機的即時位置。
- 海事追蹤 — 提供超過 25,000 艘船隻的即時 AIS 數據。
- 衛星追蹤 — 追蹤超過 2,000 顆衛星的即時位置，無需 API 金鑰。
- 地緣政治事件聚合 — 整合 GDELT 提供的全球衝突事件數據。
- 即時衛星影像 — 提供 NASA 和 Esri 的高解析度衛星影像。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git
```
2. 進入專案目錄
```bash
cd Shadowbroker
```
3. 啟動服務
```bash
./compose.sh up -d
```

## 程式碼範例

```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git
cd Shadowbroker
./compose.sh up -d
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 BigBodyCobain 具備開源情報的背景，針對即時數據整合的需求開發了這個平台。隨著地緣政治事件的頻繁發生，對於即時情報的需求日益增加，使得 Shadowbroker 受到廣泛關注。

## 適合誰使用

**目標受眾**：需要即時全球情報數據的分析師和研究人員。

> [!example] 使用場景
> - 情報分析師用它來即時追蹤全球衝突事件，因為它能整合多個數據來源，提供即時更新。
> - 研究人員用它來分析航空交通模式，因為它提供了高解析度的飛行數據和航跡追蹤功能。
> - 安全專家用它來監控海上交通，因為它能即時顯示船隻位置和類型，幫助識別潛在威脅。

## 架構分析

Shadowbroker 採用前後端分離架構，前端使用 Next.js，後端使用 FastAPI。用戶輸入 → 數據整合 → 即時顯示。核心技術決策是使用 MapLibre GL 進行地圖顯示，專案目錄結構包含 `compose.sh` 用於啟動服務。

## 優缺點分析

> [!success] 優點
> - 即時更新的多領域數據，適合專業分析需求。
> - 用戶友好的界面，易於導航和使用。
> - 整合多個數據來源，提供全面的情報視圖。

> [!danger] 缺點
> - 需要 Docker 環境，對於某些使用者來說可能增加複雜度。
> - 即時數據的準確性依賴於外部來源。
> - 對於不熟悉開源情報的使用者，可能需要學習曲線。

> [!warning] 注意事項
> - 需要 Docker 或 Podman 環境來運行。
> - 即時數據更新可能會受到來源的影響。
> - 對於不熟悉開源情報的使用者，可能需要時間上手。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| FlightRadar24 | FlightRadar24 專注於航空交通追蹤，而 Shadowbroker 提供多領域的即時情報整合。 |
| MarineTraffic | MarineTraffic 專注於海事追蹤，而 Shadowbroker 提供更廣泛的全球活動數據。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 148 |
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

相關概念：[[即時通訊]] · [[資料視覺化]] · [[開源情報]]

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

- [[2026-03-10|2026-03-10]] — 首次收錄，1.3k stars
