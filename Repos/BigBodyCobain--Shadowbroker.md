---
repo: BigBodyCobain/Shadowbroker
url: https://github.com/BigBodyCobain/Shadowbroker
owner: BigBodyCobain
owner_type: User
language: TypeScript
license: N/A
description: "Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. The knowledge is available to all but rarely aggregated in the open, until now."
homepage: ""
stars: 1389
stars_per_day: 278
forks: 151
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
tags:
  - github
  - "category/其他"
  - "lang/typescript"
aliases:
  - "Shadowbroker"
  - "BigBodyCobain/Shadowbroker"
  - "提供一個統一的介面來追蹤全球的開源情報，包括私人飛機、衛星、地震等。"
---

# Shadowbroker

**1.4k** stars · **278** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`v0.6.0`

> [!summary] 一句話摘要
> 提供一個統一的介面來追蹤全球的開源情報，包括私人飛機、衛星、地震等。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (278 stars/day)
> **適合** 需要即時追蹤全球開源情報的安全分析師和研究人員。
> **一句話重點** ShadowBroker 不僅是一個情報工具，更是一個開源社群的集體智慧結晶，讓全球的開源情報變得可視化和易於存取。

> [!abstract] 核心創新
> 這個專案提供了一個統一的即時開源情報儀表板，整合了多個數據來源，並以視覺化方式呈現。

## 專案簡介

ShadowBroker 是一個即時的多領域開源情報儀表板，聚合來自數十個開源情報來源的數據，並在統一的黑色操作地圖介面上顯示。它實時追蹤飛機、船隻、衛星、地震、衝突區域、CCTV 網絡、GPS 干擾等，所有數據都在不斷更新。專案使用了 Next.js、MapLibre GL 和 FastAPI，適合分析師、研究人員和愛好者，讓他們可以在一個視窗中查看全球活動。與其他情報工具相比，ShadowBroker 提供了更全面的即時數據整合，並且支持多種數據來源的視覺化。實際使用中，該工具能夠即時顯示超過 5,000 架商業航班和 25,000 艘船隻的動態，並且不需要 API 金鑰。這個專案目前處於穩定版本，適合中小型團隊使用，特別是在需要即時情報的情況下。對於需要長期追蹤特定事件或對地緣政治感興趣的使用者，這是一個非常有價值的工具。

**技術棧**：`Next.js` · `MapLibre GL` · `FastAPI` · `Python`

## 重點功能

- 航空追蹤 — 實時顯示超過 5,000 架商業航班和私人飛機，並提供持續的飛行軌跡。
- 海事追蹤 — 追蹤超過 25,000 艘船隻，並提供分類顯示和集群功能。
- 衛星追蹤 — 實時衛星位置追蹤，支持超過 2,000 顆衛星，無需 API 金鑰。
- 地緣政治事件 — 整合 GDELT 的全球事件數據，並提供即時更新。
- CCTV 監控 — 提供超過 2,000 個實時交通攝像頭的視覺化顯示。

## 快速開始

1. 克隆專案並啟動 Docker
```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git && cd Shadowbroker && ./compose.sh up -d
```
2. 打開儀表板
```bash
Open http://localhost:3000
```

## 程式碼範例

```bash
./compose.sh up -d
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者團隊擁有豐富的開源背景，並且針對市場上缺乏整合性情報工具的需求進行開發。隨著全球政治局勢的變化，對於即時情報的需求越來越高，這使得 ShadowBroker 特別受到關注。這個專案的推出正好切合了當前對開源情報整合的需求，並且在功能上提供了獨特的視覺化展示。

## 適合誰使用

**目標受眾**：需要即時追蹤全球開源情報的安全分析師和研究人員。

> [!example] 使用場景
> - 情報分析師用它來即時追蹤全球衝突事件，因為它能夠整合來自 GDELT 的最新事件數據，並提供地圖視覺化。
> - 研究人員用它來監控衛星動態，因為它提供超過 2,000 顆衛星的即時位置，並且不需要額外的 API 金鑰。
> - 安全專家用它來檢測 GPS 干擾區域，因為它能夠即時顯示干擾位置，幫助他們評估潛在的安全風險。

## 架構分析

ShadowBroker 採用微服務架構，核心資料流為用戶輸入 → 數據聚合 → 地圖顯示。使用 Next.js 提供前端介面，FastAPI 處理後端數據請求。專案目錄結構包含主要的 Docker 配置檔和前端資源，便於用戶快速啟動和使用。

## 優缺點分析

> [!success] 優點
> - 即時數據更新，提供全球事件的快速反應能力。
> - 多領域數據整合，適合各類使用者需求。
> - 開源專案，社群可持續貢獻和擴展功能。

> [!danger] 缺點
> - 需要一定的技術背景來設置和運行。
> - 部分功能依賴外部數據源的穩定性。
> - 可能面臨數據隱私和安全性問題。

> [!warning] 注意事項
> - 需要 Docker 或 Podman 環境來運行。
> - 對於某些功能，可能需要穩定的網路連接以獲取即時數據。
> - 不支持 Windows 環境的直接運行。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 151 |
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

相關概念：[[開源情報]] · [[即時通訊]] · [[資料視覺化]]

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
