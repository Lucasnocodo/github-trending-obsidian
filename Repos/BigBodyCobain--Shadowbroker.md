---
repo: BigBodyCobain/Shadowbroker
url: https://github.com/BigBodyCobain/Shadowbroker
owner: BigBodyCobain
owner_type: User
language: TypeScript
license: N/A
description: "Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. The knowledge is available to all but rarely aggregated in the open, until now."
homepage: ""
stars: 1408
stars_per_day: 282
forks: 152
open_issues: 0
created: 2026-03-05
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "其他"
subcategory: "開源情報"
release_tag: "v0.6.0"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供一個即時的開源情報平台，讓用戶能夠追蹤全球的航空、海洋、衛星等活動。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/其他"
  - "lang/typescript"
aliases:
  - "Shadowbroker"
  - "BigBodyCobain/Shadowbroker"
  - "提供一個即時的開源情報平台，讓用戶能夠追蹤全球的航空、海洋、衛星等活動。"
---

# Shadowbroker

**1.4k** stars · **282** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`v0.6.0`

> [!summary] 一句話摘要
> 提供一個即時的開源情報平台，讓用戶能夠追蹤全球的航空、海洋、衛星等活動。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (282 stars/day)
> **授權** 未標註授權 (風險較高)
> **適合** 需要即時追蹤全球活動的安全分析師和研究人員。
> **一句話重點** ShadowBroker 的強大在於它能夠整合多種開源情報，並提供即時更新，讓用戶能夠快速掌握全球動態。

> [!abstract] 核心創新
> 這個專案提供了一個統一的黑色操作地圖介面，整合多種開源情報來源，實現即時數據更新。

## 專案簡介

ShadowBroker 是一個即時的多領域開源情報儀表板，整合來自數十個開源情報來源的即時數據，並在統一的黑色操作地圖介面上呈現。用戶可以追蹤飛機、船隻、衛星、地震、衝突區域、CCTV 網絡、GPS 干擾等，所有數據均實時更新。該專案使用 Next.js、MapLibre GL、FastAPI 和 Python 開發，旨在為分析師、研究人員和愛好者提供全球活動的單一視窗。與其他工具相比，ShadowBroker 的獨特之處在於其多樣化的數據來源和即時更新能力，特別是在航空和海洋追蹤方面。實際使用中，該工具能夠追蹤超過 5,000 架商業飛機和 25,000 艘船隻，並提供高解析度衛星影像。這個專案目前處於穩定版本，適合需要即時情報的團隊或個人使用。對於需要長期監控特定地區或事件的用戶，這個工具特別有用，而對於只需要簡單數據查詢的用戶，可能會顯得過於複雜。

**技術棧**：`Next.js` · `MapLibre GL` · `FastAPI` · `Python`

## 重點功能

- 航空追蹤 — 實時追蹤超過 5,000 架商業飛機，並提供持續的飛行軌跡。
- 海洋追蹤 — 透過 AIS 船舶流，實時追蹤 25,000 多艘船隻，並提供類型分類。
- 衛星追蹤 — 實時衛星位置追蹤，無需 API 金鑰，涵蓋 2,000 多顆衛星。
- 地緣政治事件 — 聚合 GDELT 資料，提供最新的衝突事件報告。
- 即時 CCTV 監控 — 整合 2,000 多個交通攝像頭的實時影像。

## 快速開始

1. 克隆專案並啟動 Docker
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
./compose.sh up -d
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 BigBodyCobain 和其他貢獻者在開源社群中有一定的知名度，過去參與過多個相關專案。這個工具解決了以往難以整合的多種開源情報來源的痛點，提供了一個統一的視覺化介面。最近的社交媒體討論和開源社群的推廣也為其帶來了關注。隨著全球安全形勢的變化，對於即時情報的需求日益增加，使得這個工具的實用性愈加凸顯。

## 適合誰使用

**目標受眾**：需要即時追蹤全球活動的安全分析師和研究人員。

> [!example] 使用場景
> - 安全分析師用它來追蹤全球衝突事件，因為它能即時更新並提供詳細的地理資訊，讓分析更具時效性。
> - 研究人員用它來監控衛星活動，因為它整合了多個衛星數據來源，提供高解析度影像，便於進行深入分析。
> - 環保活動家用它來追蹤地震和災害事件，因為它能即時顯示災害影響區域，協助制定應對策略。

## 架構分析

ShadowBroker 採用前後端分離的架構模式，前端使用 Next.js 提供用戶界面，後端則使用 FastAPI 處理數據請求。用戶輸入 → 數據來源（如航空、海洋、衛星） → 輸出到統一的地圖介面。專案目錄結構包含主要的前端和後端代碼，並使用 Docker 進行容器化部署。

## 優缺點分析

> [!success] 優點
> - 即時數據更新，提供最新的全球活動資訊。
> - 多樣化的數據來源，涵蓋航空、海洋、衛星等多個領域。
> - 用戶友好的地圖介面，便於視覺化分析。

> [!danger] 缺點
> - 需要一定的技術背景來設置和運行。
> - 數據的準確性依賴於外部來源，可能會有延遲。
> - 對於小型團隊或個人用戶，功能可能過於複雜。

> [!warning] 注意事項
> - 需要 Docker 或 Podman 環境才能運行。
> - 對於非技術用戶，設置和使用可能會有一定難度。
> - 數據更新頻率依賴於外部情報來源的穩定性。

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

相關概念：[[開源情報]] · [[即時通訊]] · [[資料視覺化]]

相關專案：[[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[Thearas--wechat-db-decrypt-macos|Thearas/wechat-db-decrypt-macos]] · [[gradenGnostic--LegacyLauncher|gradenGnostic/LegacyLauncher]] · [[viperrcrypto--Siftly|viperrcrypto/Siftly]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，1.4k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，1.3k stars
