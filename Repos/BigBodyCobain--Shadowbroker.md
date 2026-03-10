---
repo: BigBodyCobain/Shadowbroker
url: https://github.com/BigBodyCobain/Shadowbroker
owner: BigBodyCobain
owner_type: User
language: TypeScript
license: N/A
description: "Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. The knowledge is available to all but rarely aggregated in the open, until now."
homepage: ""
stars: 1370
stars_per_day: 274
forks: 148
open_issues: 3
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
  - "提供即時的全球開源情報，追蹤各類事件與物體。"
---

# Shadowbroker

**1.4k** stars · **274** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`v0.6.0`

> [!summary] 一句話摘要
> 提供即時的全球開源情報，追蹤各類事件與物體。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (274 stars/day)
> **適合** 需要即時全球情報的分析師、研究人員和安全專家。
> **一句話重點** ShadowBroker 將多領域的開源情報整合到一個平台，讓即時追蹤全球事件變得更簡單。

> [!abstract] 核心創新
> ShadowBroker 提供了一個統一的即時情報平台，能夠聚合多領域的開源數據，並以直觀的方式展示。

## 專案簡介

ShadowBroker 是一個即時的多域開源情報平台，能夠聚合來自多個開源情報來源的數據，並在統一的介面上顯示。使用者可以透過 `git clone` 下載專案，並使用 `./compose.sh up -d` 指令啟動 Docker 環境，快速查看即時的全球活動。該平台使用 Next.js 和 FastAPI 開發，支援航空、海洋、衛星、地緣政治等多種追蹤功能，並能夠即時更新。與其他情報平台相比，ShadowBroker 提供了更為直觀的視覺化介面和多樣化的數據來源，適合分析師和研究人員使用。該工具的效能在處理大量即時數據上表現良好，但對於某些特定數據的準確性可能有所限制。這個專案目前處於穩定階段，適合需要即時情報的團隊和個人使用。建議在需要全面追蹤全球事件時使用，但若對數據準確性有高要求，則需謹慎考量。

**技術棧**：`Next.js` · `FastAPI` · `Python`

## 重點功能

- 即時航空追蹤 — 追蹤超過 5,000 架商業航班和私人飛機。
- 海洋交通監控 — 提供 25,000 多艘船隻的即時 AIS 數據。
- 衛星運行追蹤 — 追蹤 2,000 多顆衛星的即時位置，無需 API 金鑰。
- 地緣政治事件聚合 — 提供即時的全球衝突事件數據，並可自定義信息源。
- 高解析度衛星影像 — 提供 NASA 和 Esri 的衛星影像，支持即時查看。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git
```
2. 進入專案目錄
```bash
cd Shadowbroker
```
3. 啟動 Docker 環境
```bash
./compose.sh up -d
```

## 程式碼範例

```bash
./compose.sh up -d
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 BigBodyCobain 具備豐富的開源開發經驗，並專注於信息聚合和可視化。隨著全球事件的增多，對於即時情報的需求也在上升，這個專案正好切中這一需求，並且在 GitHub 上獲得了廣泛的關注。

## 適合誰使用

**目標受眾**：需要即時全球情報的分析師、研究人員和安全專家。

> [!example] 使用場景
> - 情報分析師用它來追蹤全球航班動態，因為能夠即時獲取高達 5,000 架飛機的位置信息。
> - 研究人員用它來監控衛星運行，因為提供了 2,000 多顆衛星的即時位置數據，無需 API 金鑰。
> - 安全專家用它來分析地緣政治事件，因為能夠聚合來自 GDELT 的衝突事件數據，並提供即時更新。

## 架構分析

該專案採用前後端分離的架構，前端使用 Next.js，後端使用 FastAPI。用戶輸入 → 前端請求後端數據 → 後端聚合數據並返回給前端。關鍵技術決策包括使用 MapLibre GL 進行地圖可視化，並整合多個開源數據來源。目錄結構中，`compose.sh` 是啟動服務的關鍵檔案。

## 優缺點分析

> [!success] 優點
> - 即時更新的全球情報，提供多領域的數據聚合。
> - 直觀的可視化介面，方便用戶快速獲取信息。
> - 支援多種數據來源，靈活性高。

> [!danger] 缺點
> - 需要 Docker 環境，對於不熟悉的用戶可能有學習曲線。
> - 對於某些數據的準確性需進一步驗證，可能存在延遲。
> - 在低帶寬環境下，數據更新速度可能受到影響。

> [!warning] 注意事項
> - 需要 Docker 或 Podman 環境才能運行。
> - 對於某些數據的準確性可能存在限制，需進一步驗證。
> - 在低帶寬環境下可能影響即時數據更新的速度。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[OpenSkyNetwork--OpenSky-API\|OpenSkyNetwork/OpenSky-API]] | OpenSky API 專注於航空數據，但不提供其他領域的即時情報聚合。 |
| [[GDELT--GDELT\|GDELT/GDELT]] | GDELT 提供全球事件數據，但缺乏可視化和即時更新的功能。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 148 |
| Open Issues | 3 |
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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，1.3k stars
