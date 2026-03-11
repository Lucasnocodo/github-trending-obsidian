---
repo: BigBodyCobain/Shadowbroker
url: https://github.com/BigBodyCobain/Shadowbroker
owner: BigBodyCobain
owner_type: User
language: TypeScript
license: N/A
description: "Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. The knowledge is available to all but rarely aggregated in the open, until now."
homepage: ""
stars: 1414
stars_per_day: 283
forks: 153
open_issues: 0
created: 2026-03-05
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "情報分析"
release_tag: "v0.6.0"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供一個整合的即時開源情報平台，追蹤全球的航空、海洋、衛星等活動。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
aliases:
  - "Shadowbroker"
  - "BigBodyCobain/Shadowbroker"
  - "提供一個整合的即時開源情報平台，追蹤全球的航空、海洋、衛星等活動。"
---

# Shadowbroker

**1.4k** stars · **283** stars/天 · 建立 5 天前 · TypeScript · 未標註授權

`v0.6.0`

> [!summary] 一句話摘要
> 提供一個整合的即時開源情報平台，追蹤全球的航空、海洋、衛星等活動。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (283 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 3 人
> **適合** 需要即時追蹤全球事件的軍事分析師和安全專家。
> **一句話重點** 這個專案的整合能力讓開源情報變得更易於訪問和分析。

> [!abstract] 核心創新
> 提供了一個統一的即時開源情報平台，能夠追蹤多種全球活動。

## 專案簡介

ShadowBroker 是一個即時的多領域開源情報儀表板，能夠從數十個開源情報來源聚合數據，並在統一的黑色操作地圖界面上顯示。用戶可以追蹤飛機、船隻、衛星、地震、衝突區域、CCTV 網絡、GPS 干擾等，所有數據實時更新。這個平台使用 Next.js、MapLibre GL、FastAPI 和 Python 開發，專為分析師、研究人員和愛好者設計，提供全球活動的單一視圖。與傳統的情報平台相比，ShadowBroker 提供了更為豐富的數據來源和即時更新，讓用戶能夠在一個界面上獲取多種情報。它的航空追蹤功能能夠實時顯示超過 5000 架商業飛機的位置，並且能夠識別高資產個體的私人飛機。平台還提供了 2500 多顆衛星的實時位置追蹤，並且不需要 API 金鑰。使用者可以透過 GDELT 數據源獲取全球事件的即時更新，並且能夠自定義 RSS 源以獲取特定情報。這個專案目前處於穩定版本，適合需要即時情報的團隊使用，特別是軍事和安全領域的專業人士。對於需要追蹤地緣政治事件或災害的研究者來說，這是一個非常有價值的工具，但對於一般個人用戶可能過於複雜。

**技術棧**：`Next.js` · `MapLibre GL` · `FastAPI` · `Python`

## 重點功能

- 航空追蹤 — 實時顯示超過 5000 架商業飛機的位置，並能識別私人飛機擁有者。
- 海洋追蹤 — 透過 AIS 流媒體追蹤超過 25000 艘船隻，並提供顏色編碼的船隻類型圖標。
- 衛星追蹤 — 實時追蹤超過 2000 顆衛星的位置，無需 API 金鑰。
- 地緣政治事件 — 聚合 GDELT 數據源的全球事件，並提供即時更新。
- CCTV 監控 — 顯示超過 2000 個實時交通攝像頭的數據，並自動檢測視頻流。

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

bash
# 啟動 ShadowBroker
./compose.sh up -d
# 打開儀表板
http://localhost:3000

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的主要貢獻者包括 BigBodyCobain 和 anoracleofra-code，這些開發者在開源社群中有一定的知名度。ShadowBroker 解決了開源情報數據分散的問題，將多個信息來源整合到一個平台上，讓用戶可以更方便地獲取和分析數據。最近的推廣活動和社交媒體討論可能也提升了它的曝光率。隨著對開源情報需求的增加，這個工具的實用性和必要性也隨之上升。

## 適合誰使用

**目標受眾**：需要即時追蹤全球事件的軍事分析師和安全專家。

> [!example] 使用場景
> - 安全分析師用它來追蹤全球的軍事飛行活動，因為它能夠即時顯示超過 5000 架飛機的位置，並提供詳細的飛行路徑。
> - 研究人員用它來監控地震和災害事件，因為它能夠實時更新全球的地震數據，並提供即時的災害反應資訊。
> - 環境監測專家用它來追蹤全球的火災熱點，因為它能夠顯示超過 5000 個熱點的即時數據，並提供詳細的火災強度資訊。

## 架構分析

ShadowBroker 採用前後端分離的架構模式，前端使用 Next.js，後端則是 FastAPI。用戶輸入數據後，通過 API 請求將數據處理並返回給前端，最終在地圖界面上顯示。關鍵技術決策包括使用 MapLibre GL 來渲染地圖數據，並且支持多種數據來源的即時更新。專案目錄結構中，主要的配置文件是 docker-compose.yml 和 compose.sh，這些文件負責容器的啟動和配置。

## 技術深入分析

ShadowBroker 的核心技術機制是通過聚合多個開源數據來源，並使用 FastAPI 來處理後端請求，實現即時數據更新。它能夠處理大量的數據流，並且通過 MapLibre GL 進行高效的地圖渲染，支持超過 2000 顆衛星和 25000 艘船隻的實時追蹤。這個專案的設計考量了用戶的需求，提供了多種視覺化選項，讓用戶能夠輕鬆獲取所需信息。選擇使用 Docker 來簡化部署過程，雖然這樣增加了安裝的複雜度，但卻能夠確保環境的一致性。隨著數據量的增加，可能會面臨性能瓶頸，特別是在高並發請求的情況下，這需要進一步的優化和擴展。安全性方面，開源的特性雖然提高了透明度，但也可能帶來潛在的安全風險，特別是在處理敏感數據時。整體而言，ShadowBroker 提供了一個強大的平台，但在使用時需要考慮到這些技術風險和挑戰。

## 新手體驗

> [!info] 上手難度評估
> README 文件提供了清晰的安裝指引和功能介紹，但缺乏詳細的使用範例。安裝過程相對順暢，只需簡單的 Docker 命令即可啟動。對於新手來說，可能需要額外的學習資源來熟悉界面和功能。文件目前僅提供英語版本，對於非英語用戶可能會造成障礙。

## 優缺點分析

> [!success] 優點
> - 即時更新的多領域情報聚合，提供豐富的數據來源。
> - 支持多種數據視覺化，讓用戶能夠直觀了解全球事件。
> - 開源且活躍的社群支持，方便用戶獲取幫助和更新。

> [!danger] 缺點
> - 需要一定的技術背景才能有效使用和配置。
> - 界面可能對新手來說較為複雜，學習曲線較陡。
> - 目前僅支援英語，對於非英語用戶可能不太友好。

> [!warning] 注意事項
> - 需要 Docker 或 Podman 環境才能運行。
> - 對於不熟悉開源情報的用戶，界面可能較為複雜。
> - 目前僅支援英語界面，缺乏多語言支持。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 這個工具專注於文件同步，而 ShadowBroker 專注於即時情報追蹤，功能範圍不同。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | OpenClaw 專注於醫療技能，而 ShadowBroker 提供更廣泛的全球情報追蹤功能。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 |
| --- | --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於文件同步和備份，而不是即時情報追蹤。 | 如果你的需求是文件同步而非情報追蹤，則應選擇它。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 專注於醫療領域的技能，而 ShadowBroker 提供更廣泛的情報追蹤。 | 如果你的需求是針對醫療技能的開源解決方案，則應選擇它。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 153 |
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

## 社群與生態

**社群活躍度**：社群活躍，定期更新和維護。
**連結**：[文件](https://github.com/BigBodyCobain/Shadowbroker#readme)

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

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]]

[GitHub](https://github.com/BigBodyCobain/Shadowbroker)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "BigBodyCobain--Shadowbroker"
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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

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
