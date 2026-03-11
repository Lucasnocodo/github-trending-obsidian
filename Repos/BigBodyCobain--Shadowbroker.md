---
repo: BigBodyCobain/Shadowbroker
url: https://github.com/BigBodyCobain/Shadowbroker
owner: BigBodyCobain
owner_type: User
language: TypeScript
license: N/A
description: "Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. The knowledge is available to all but rarely aggregated in the open, until now."
homepage: ""
stars: 1455
stars_per_day: 243
forks: 161
open_issues: 0
created: 2026-03-05
pushed_at: 2026-03-11
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "基礎設施"
subcategory: "OSINT 工具"
release_tag: "v0.6.0"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "提供全球即時開源情報，追蹤富豪私人飛機、衛星、地震等事件。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 4
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:1455"
tags:
  - github
  - "category/基礎設施"
  - "lang/typescript"
  - "topic/osint"
  - "topic/osint_resources"
  - "topic/osint_tool"
  - "topic/osint_tools"
aliases:
  - "Shadowbroker"
  - "BigBodyCobain/Shadowbroker"
  - "提供全球即時開源情報，追蹤富豪私人飛機、衛星、地震等事件。"
---

# Shadowbroker

**1.5k** stars · **243** stars/天 · 建立 6 天前 · TypeScript · 未標註授權

`v0.6.0`

> [!summary] 一句話摘要
> 提供全球即時開源情報，追蹤富豪私人飛機、衛星、地震等事件。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (243 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要即時監控全球活動的情報分析師和研究人員。
> **一句話重點** 這個專案的強大之處在於它能夠即時整合多個情報來源，讓使用者在一個平台上獲得全面的全球活動監控。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習、3 小時整合，得到即時的全球情報監控，值得一試。

> [!abstract] 核心創新
> 將多個開源情報來源整合到一個即時更新的儀表板中。

## 專案簡介

ShadowBroker 是一個即時多域的開源情報儀表板，整合來自多個開源情報來源的數據，並在統一的暗作地圖介面上顯示。用戶可以追蹤飛機、船隻、衛星、地震、衝突區域等，所有數據實時更新。核心賣點在於其能夠在一個界面中提供多種情報，方便分析師和研究人員進行監控。使用者只需透過 `./compose.sh up -d` 指令啟動 Docker 環境，即可在 `http://localhost:3000` 查看儀表板。技術上，該專案使用 Next.js、MapLibre GL 和 FastAPI，這些技術選擇使得資料呈現流暢且具互動性。相較於其他 OSINT 工具，ShadowBroker 的即時性和多樣性是其主要優勢，能夠同時監控多個領域的活動，這在傳統工具中較難實現。使用者可以追蹤的數據來源包括 OpenSky Network、USGS 地震數據等，這些來源的更新頻率通常在 60 秒內，確保了信息的即時性。雖然功能強大，但使用者需注意 API 金鑰的配置，特別是對於某些數據源的要求。這個專案目前處於活躍開發中，未來可能會增加更多功能和數據來源，適合需要即時情報的分析團隊或個人使用。

**技術棧**：`Next.js 14` · `FastAPI` · `Python 3.10+` · `MapLibre GL`

## 重點功能

- 即時數據整合 — 來自多個來源的數據（如飛機、船隻、衛星）在一個界面上實時更新。
- 多種數據來源 — 包括 OpenSky Network、USGS 地震數據等，更新頻率通常在 60 秒內。
- 可視化地圖介面 — 使用 MapLibre GL 提供互動式地圖，方便用戶查看和分析數據。
- 自定義 RSS 聚合 — 用戶可自定義多達 20 個情報來源的 RSS 聚合，優先級可調整。
- 支持 Docker 部署 — 提供簡單的 Docker 安裝和運行指令，方便用戶快速上手。

## 快速開始

1. 克隆專案並啟動 Docker 環境
```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git && cd Shadowbroker && ./compose.sh up -d
```
2. 訪問儀表板
```bash
Open http://localhost:3000
```
3. 若需自定義 API 金鑰
```bash
echo 'AIS_API_KEY=your_aisstream_key' >> .env
```

## 程式碼範例

{
  "前置條件": "需要安裝 Docker 或 Podman",
  "指令": "./compose.sh up -d",
  "預期輸出": "啟動後可在 http://localhost:3000 查看儀表板"
}

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 1455 stars（243/天），forks 161（11.1%），顯示出強烈的社群興趣。主要貢獻者包括 anoracleofra-code 和 BigBodyCobain，這些開發者在 OSINT 領域有一定的經驗。這個專案解決了以往信息分散的問題，將多個情報來源整合到一個平台上，讓使用者能夠更方便地獲取和分析數據。社群對於即時情報的需求日益增加，這使得 ShadowBroker 的出現恰逢其時。高比例的 forks/stars 也表明許多開發者在積極修改和使用這個工具，顯示出其潛在的實用性和需求。

## 適合誰使用

**目標受眾**：需要即時監控全球活動的情報分析師和研究人員。

> [!example] 使用場景
> - 情報分析師用它來追蹤億萬富翁的私人飛機，因為這樣可以即時掌握其行蹤，提升商業決策的準確性。
> - 應急管理人員用它來監控全球地震事件，因為這樣能夠迅速反應並調度資源，減少災害損失。
> - 海洋研究者用它來追蹤海上船隻的動態，因為這樣可以獲得實時的航行數據，支持海洋保護工作。

## 架構分析

ShadowBroker 採用微服務架構，前端使用 Next.js 提供用戶界面，後端則使用 FastAPI 處理數據請求。資料流從各個開源 API 獲取數據，經過 FastAPI 轉發至前端，實現即時更新。這種設計使得系統能夠靈活擴展，方便未來增加新的數據來源。選擇 Docker 部署的方式降低了環境配置的複雜度，但也限制了對於某些高性能需求的支持。整體而言，這種架構適合快速迭代和開發，但在高負載情況下可能需要考慮性能優化。

## 技術深入分析

ShadowBroker 的核心技術機制在於其即時數據整合能力，使用 FastAPI 作為後端框架，能夠高效處理來自多個開源 API 的請求。前端則使用 Next.js 和 MapLibre GL，提供流暢的用戶體驗和互動式地圖展示。該系統能夠處理大量的即時數據，並且在設計上考慮到擴展性，未來可以輕鬆添加新的數據來源或功能。選擇 Docker 部署的方式使得用戶能夠快速上手，但也可能在某些情況下影響性能，特別是在高並發請求的情況下。技術風險方面，依賴於外部 API 的穩定性和可用性，若某些數據來源出現問題，將直接影響到整體系統的功能。整合方面，與主流 CI/CD 工具的兼容性良好，能夠輕鬆融入現有的開發流程。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且詳細，提供了完整的安裝和使用指引。安裝過程相對順暢，但對於不熟悉 Docker 的用戶可能需要一些額外的學習。提供了簡單的快速入門指南，讓新手能夠快速上手。文件目前僅提供英文版本，可能對非英語使用者造成一定困難。

## 優缺點分析

> [!success] 優點
> - 即時數據更新，提供最新的全球情報
> - 多樣化的數據來源，涵蓋航空、海運、地震等多個領域
> - 簡單的 Docker 部署流程，降低了使用門檻

> [!danger] 缺點
> - 需要配置 API 金鑰，對於新手可能造成困擾
> - 在高負載情況下性能可能受限
> - 依賴 Docker 環境，對於不熟悉的用戶有學習曲線

> [!warning] 注意事項
> - 需要 Docker 或 Podman 環境才能運行
> - 某些數據來源需要 API 金鑰才能獲取完整功能
> - 對於 Python 3.13+ 版本可能存在相容性問題

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 專注於資料同步和備份，而 ShadowBroker 提供即時情報監控，功能範圍不同。 |
| [FreedomIntelligence/OpenClaw-Medical-Skills](https://github.com/FreedomIntelligence/OpenClaw-Medical-Skills) | 針對醫療領域的情報收集，而 ShadowBroker 涉及更廣泛的全球活動監控。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| FlightAware | 專注於商業航班的追蹤，提供更詳細的航班數據和分析功能，而 ShadowBroker 提供更廣泛的情報來源。 | 如果你的需求主要集中在商業航班的詳細數據分析上，FlightAware 會是更好的選擇。 | medium，因為需要重新適應新的數據來源和介面。 |
| MarineTraffic | 專注於海運數據，提供詳細的船隻追蹤和分析功能，而 ShadowBroker 提供更全面的全球活動監控。 | 如果你的工作主要集中在海運領域，MarineTraffic 提供更專業的工具和數據。 | medium，因為需要重新適應新的數據來源和介面。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Shadowbroker** | **FlightAware** | **MarineTraffic** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於商業航班的追蹤，提供更詳細的航班數據和分析功能，而 ShadowBroker 提供更廣泛的情報來源。 | 專注於海運數據，提供詳細的船隻追蹤和分析功能，而 ShadowBroker 提供更全面的全球活動監控。 |
> | 遷移成本 | - | medium，因為需要重新適應新的數據來源和介面。 | medium，因為需要重新適應新的數據來源和介面。 |
> | 適用場景 | 主要場景 | 如果你的需求主要集中在商業航班的詳細數據分析上，Flight | 如果你的工作主要集中在海運領域，MarineTraffic  |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的試用，不建議用於生產環境的核心應用。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 某些數據來源可能會因 API 限制而無法獲取完整數據
  - 解法：使用可選的 API 金鑰以提高數據獲取的頻率
- [MEDIUM] 在高流量時可能會遇到性能瓶頸
  - 解法：考慮增加後端服務的實例數量以分擔負載
- **[HIGH]** Docker 環境配置不當可能導致啟動失敗
  - 解法：確保 Docker 和 Docker Compose 正確安裝並配置

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 10 人以下的新創公司進行市場調查 | 非常適合 | 能夠即時獲取多種市場情報，支持決策。 |
| 大型企業的安全分析團隊 | 適合 | 提供多樣的數據來源，能夠支持安全監控。 |
| 學術研究者進行地緣政治研究 | 普通 | 雖然有豐富的數據，但可能需要進一步的數據清洗和分析。 |
| 個人開發者進行小型專案 | 非常適合 | 簡單的安裝和使用流程，適合快速原型開發。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~3 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習、3 小時整合，得到即時的全球情報監控，值得一試。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具本身不需要高權限運行，但需妥善管理 API 金鑰。依賴的外部 API 需定期檢查其安全性和穩定性，特別是在生產環境中使用時。

## 健康度儀表板

> [!abstract]- 專案健康度綜合評估
> ```dataviewjs
> const me = dv.page("Repos/BigBodyCobain--Shadowbroker");
> if (me) {
>   const pushed = me.pushed_at ? new Date(me.pushed_at.toString()) : null;
>   const daysSincePush = pushed ? Math.floor((Date.now() - pushed.getTime()) / 86400000) : null;
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : null;
>   const forkRatio = me.stars > 0 ? ((me.forks || 0) / me.stars * 100).toFixed(1) : 0;
>   const issueRatio = me.stars > 0 ? ((me.open_issues || 0) / me.stars * 100).toFixed(1) : 0;
>   const maint = daysSincePush === null ? "?" : daysSincePush <= 7 ? "Active" : daysSincePush <= 30 ? "Moderate" : "Stale";
>   const busFactor = (me.forks || 0) > 50 ? "Good" : (me.forks || 0) > 10 ? "OK" : "Risk";
>   dv.table(["指標", "值", "評估"], [
>     ["維護狀態", daysSincePush + " 天前推送", maint],
>     ["專案年齡", age + " 天", age > 180 ? "Established" : age > 30 ? "Growing" : "Brand New"],
>     ["Fork 比率", forkRatio + "%", parseFloat(forkRatio) > 20 ? "High adoption" : parseFloat(forkRatio) > 5 ? "Normal" : "Low"],
>     ["Issue 密度", issueRatio + "%", parseFloat(issueRatio) > 5 ? "High" : "Normal"],
>     ["Bus Factor", (me.forks || 0) + " forks", busFactor],
>   ]);
> }
> ```

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 161 |
| Open Issues | 0 |
| 最後推送 | 2026-03-11 |
| 建立日期 | 2026-03-05 |
| Repo 大小 | 102.7 MB |
| OpenSSF Scorecard | [查看](https://scorecard.dev/viewer/?uri=github.com/BigBodyCobain/Shadowbroker) |
| Topics | `osint` `osint-resources` `osint-tool` `osint-tools` |

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
> | [@BigBodyCobain](https://github.com/BigBodyCobain) | 23 |
> | [@suranyami](https://github.com/suranyami) | 5 |
> | [@ttulttul](https://github.com/ttulttul) | 1 |

**最新版本**：v0.6.0 — ShadowBroker v0.6.0 (2026-03-10)

## 社群與生態

**社群活躍度**：社群活躍，最近有合併請求和問題回應
**連結**：[文件](https://github.com/BigBodyCobain/Shadowbroker#readme)

## 開發動態

> [!abstract] 最近 10 次 commit（2026-03-10 ~ 2026-03-11）
> **活躍天數** 2 天 · **最新 commit** Merge pull request #35 from suranyami/feat/multi-arch-docker-and-backend-proxy

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
> 
> ## 🚀 Getting Started
> 
> 
> ### 🐳 Docker / Podman Setup (Recommended for Self-Hosting)
> 
> The repo includes a `docker-compose.yml` that builds both images locally.
> 
> ```bash
> git clone https://github.com/BigBodyCobain/Shadowbroker.git
> cd Shadowbroker
> 
> ### 📦 Quick Start (No Code Required)
> 
> If you just want to run the dashboard without dealing with terminal commands:
> 
> 1. Go to the **[Releases](../../releases)** tab on the right side of this GitHub page.
> 2. Download the latest `.zip` file from the release.
> 3. Extract the folder to your computer.
> 4. **Windows:** Double-click `start.bat`.
>    **Mac/Linux:** Open terminal, type `chmod +x start.sh`, and run `./start.sh`.
> 5. It will automatically install everything and launch the dashboard!
> 
> ---
> 
> 
> ### 💻 Developer Setup
> 
> If you want to modify the code or run from source:
> 
> #### Prerequisites
> 
> * **Node.js** 18+ and **npm** — [nodejs.org](https://nodejs.org/)
> * **Python** 3.10, 3.11, or 3.12 with `pip` — [python.org](https://www.python.org/downloads/) (**check "Add to PATH"** during install)
>   * ⚠️ Python 3.13+ may have compatibility issues with some dependencies. **3.11 or 3.12 is recommended.**
> * API keys for: `aisstream.io` (required), and optionally `opensky-network.org` (OAuth2), `lta.gov.sg`
> 
> 
> ### Installation
> 
> ```bash
> 
> # Backend setup
> cd backend
> python -m venv venv
> venv\Scripts\activate        # Windows
> 
> # Frontend setup
> cd ../frontend
> npm install
> ```
> 
> 
> ## ✨ Features
> 
> 
> ## 📊 Data Sources & APIs
> 
> | Source | Data | Update Frequency | API Key Required |
> |---|---|---|---|
> | [OpenSky Network](https://opensky-network.org) | Commercial & private flights | ~60s | Optional (anonymous limited) |
> | [adsb.lol](https://adsb.lol) | Military aircraft | ~60s | No |
> | [aisstream.io](https://aisstream.io) | AIS vessel positions | Real-time WebSocket | **Yes** |
> | [CelesTrak](https://celestrak.org) | Satellite orbital positions (TLE + SGP4) | ~60s | No |
> | [USGS Earthquake](https://earthquake.usgs.gov) | Global seismic events | ~60s | No |
> | [GDELT Project](https://www.gdeltproject.org) | Global conflict events | ~6h | No |
> | [DeepState Map](https://deepstatemap.live) | Ukraine frontline | ~30min | No |
> | [Transport for London](https://api.tfl.gov.uk) | London CCTV JamCams | ~5min | No |
> | [TxDOT](https://its.txdot.gov) | Austin TX traffic cameras | ~5min | No |
> | [NYC DOT](https://webcams.nyctmc.org) | NYC traffic cameras | ~5min | No |
> | [Singapore LTA](https://datamall.lta.gov.sg) | Singapore traffic cameras | ~5min | **Yes** |
> | [RestCountries](https://restcountries.com) | Country profile data | On-demand (cached 24h) | No |
> | [Wikidata SPARQL](https://query.wikidata.org) | Head of state data | On-demand (cached 24h) | No |
> | [Wikipedia API](https://en.wikipedia.org/api) | Location summaries & aircraft images | On-demand (cached) | No |
> | [NASA GIBS](https://gibs.earthdata.nasa.gov) | MODIS Terra daily satellite imagery | Daily (24-48h delay) | No |
> | [Esri World Imagery](https://www.arcgis.com) | High-res satellite basemap | Static (periodically updated) | No |
> | [MS Planetary Computer](https://planetarycomputer.microsoft.com) | Sentinel-2 L2A scenes (right-click) | On-demand | No |
> | [KiwiSDR](https://kiwisdr.com) | Public SDR receiver locations | ~30min | No |
> | [OSM Nominatim](https://nominatim.openstreetmap.org) | Place name geocoding (LOCATE bar) | On-demand | No |
> | [NASA FIRMS](https://firms.modaps.eosdis.nasa.gov) | NOAA-20 VIIRS fire/thermal hotspots | ~120s | No |
> | [NOAA SWPC](https://services.swpc.noaa.gov) | Space weather Kp index & solar events | ~120s | No |
> | [IODA (Georgia Tech)](https://ioda.inetintel.cc.gatech.edu) | Regional internet outage alerts | ~120s | No |
> | [DC Map (GitHub)](https://github.com/Ringmast4r/Data-Center-Map---Global) | Global data center locations | Static (cached 7d) | No |
> | [CARTO Basemaps](https://carto.com) | Dark map tiles | Continuous | No |
> 
> ---
> 
> 
> # Add your API keys in a repo-root .env file (optional — see Environment Variables below)
> ./compose.sh up -d
> ```
> 
> Open `http://localhost:3000` to view the dashboard.
> 
> > **Deploying publicly or on a LAN?** No configuration needed for most setups.
> > The frontend proxies all API calls through the Next.js server to `BACKEND_URL`,
> > which defaults to `http://backend:8000` (Docker internal networking).
> > Port 8000 does not need to be exposed externally.
> >
> > If your backend runs on a **different host or port**, set `BACKEND_URL` at runtime — no rebuild required:
> >
> > ```bash
> > # Linux / macOS
> > BACKEND_URL=http://myserver.com:9096 docker-compose up -d
> >
> > # Podman (via compose.sh wrapper)
> > BACKEND_URL=http://192.168.1.50:9096 ./compose.sh up -d
> >
> > # Windows (PowerShell)
> > $env:BACKEND_URL="http://myserver.com:9096"; docker-compose up -d
> >
> > # Or add to a .env file next to docker-compose.yml:
> > # BACKEND_URL=http://myserver.com:9096
> > ```
> 
> If you prefer to call the container engine directly, Podman users can run `podman compose up -d`, or force the wrapper to use Podman with `./compose.sh --engine podman up -d`.
> Depending on your local Podman configuration, `podman compose` may still delegate to an external compose provider while talking to the Podman socket.
> 
> ---
> 
> 
> # Create .env with your API keys
> echo "AIS_API_KEY=your_aisstream_key" >> .env
> echo "OPENSKY_CLIENT_ID=your_opensky_client_id" >> .env
> echo "OPENSKY_CLIENT_SECRET=your_opensky_secret" >> .env
> 
> 
> # Optional (enhances data quality)
> OPENSKY_CLIENT_ID=your_opensky_client_id      # OAuth2 — higher rate limits for flight data
> OPENSKY_CLIENT_SECRET=your_opensky_secret     # OAuth2 — paired with Client ID above
> LTA_ACCOUNT_KEY=your_lta_key                  # Singapore CCTV cameras
> ```
> 
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
> 
> ### 🚢 Maritime Tracking
> 
> * **AIS Vessel Stream** — 25,000+ vessels via aisstream.io WebSocket (real-time)
> * **Ship Classification** — Cargo, tanker, passenger, ya

## 延伸閱讀

相關概念：[[OSINT]] · [[即時通訊]] · [[資料視覺化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]]

[GitHub](https://github.com/BigBodyCobain/Shadowbroker)

## 相關收錄

> [!note]- 直接競品（同子分類：OSINT 工具）
> ```dataview
> TABLE stars, stars_per_day AS "Stars/天", install_complexity AS "難度", use_case AS "用途"
> FROM "Repos"
> WHERE subcategory = "OSINT 工具" AND file.name != "BigBodyCobain--Shadowbroker"
> SORT stars DESC
> ```

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "基礎設施" AND file.name != "BigBodyCobain--Shadowbroker"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同語言的熱門專案
> ```dataview
> TABLE stars_per_day AS "Stars/天", category AS "分類", use_case AS "用途"
> FROM "Repos"
> WHERE language = "TypeScript" AND file.name != "BigBodyCobain--Shadowbroker" AND status != "archived"
> SORT stars_per_day DESC
> LIMIT 5
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "BigBodyCobain--Shadowbroker"
> SORT stars DESC
> ```

> [!note]- 共用概念的相關專案
> ```dataviewjs
> const concepts = ["OSINT","即時通訊","資料視覺化"];
> const pages = dv.pages('"Repos"')
>   .where(p => p.file.name !== "BigBodyCobain--Shadowbroker" && p.file.outlinks?.some(l => concepts.some(c => l.path?.includes(c))))
>   .sort(p => p.stars, "desc")
>   .limit(5);
> if (pages.length > 0) {
>   dv.table(["專案", "Stars", "分類", "共用概念"], pages.map(p => {
>     const shared = concepts.filter(c => p.file.outlinks?.some(l => l.path?.includes(c)));
>     return [p.file.link, p.stars, p.category, shared.join(", ")];
>   }));
> } else { dv.paragraph("_目前沒有共用概念的相關專案_"); }
> ```

## 同 Owner 專案

> [!note]- 這位開發者的其他收錄專案
> ```dataview
> TABLE stars AS "Stars", category AS "分類", status AS "狀態"
> FROM "Repos"
> WHERE owner = "BigBodyCobain" AND file.name != "BigBodyCobain--Shadowbroker"
> SORT stars DESC
> ```

## Vault 排名

> [!abstract]- 這個專案在 vault 中的相對位置
> ```dataviewjs
> const me = dv.page("Repos/BigBodyCobain--Shadowbroker");
> const all = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars_per_day || 0, "desc");
> const rank = all.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const catAll = all.where(p => p.category === me?.category);
> const catRank = catAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> const totalStarsAll = dv.pages('"Repos"').where(p => p.status !== "archived").sort(p => p.stars || 0, "desc");
> const starsRank = totalStarsAll.array().findIndex(p => p.file.name === me?.file?.name) + 1;
> if (rank > 0) {
>   const pct = Math.round((1 - rank / all.length) * 100);
>   dv.paragraph(`Stars/天排名：**全 vault 第 ${rank}**/${all.length}（前 ${100 - pct}%）· **${me.category} 第 ${catRank}**/${catAll.length}\nStars 總量排名：**第 ${starsRank}**/${totalStarsAll.length}`);
> }
> ```

## Star 趨勢

> [!abstract]- Stars 成長追蹤
> ```dataviewjs
> const me = dv.page("Repos/BigBodyCobain--Shadowbroker");
> if (me?.star_history) {
>   const raw = me.star_history.toString();
>   const points = raw.split(",").map(p => { const [d, s] = p.split(":"); return { date: d, stars: parseInt(s) }; }).filter(p => !isNaN(p.stars));
>   if (points.length >= 2) {
>     const max = Math.max(...points.map(p => p.stars));
>     const lines = points.map(p => {
>       const w = Math.round(p.stars / max * 25);
>       return `${p.date} ${"\u2588".repeat(w)}${"\u2591".repeat(25-w)} ${p.stars.toLocaleString()}`;
>     });
>     const first = points[0].stars;
>     const last = points[points.length-1].stars;
>     const growth = first > 0 ? Math.round((last - first) / first * 100) : 0;
>     lines.push(`\n**成長** +${(last-first).toLocaleString()} stars（${growth}%）in ${points.length} snapshots`);
>     // 趨勢方向偵測
>     if (points.length >= 3) {
>       const mid = Math.floor(points.length / 2);
>       const fh = points.slice(0, mid), sh = points.slice(mid);
>       const rateF = fh.length > 1 ? (fh[fh.length-1].stars - fh[0].stars) / Math.max(1, (new Date(fh[fh.length-1].date) - new Date(fh[0].date)) / 86400000) : 0;
>       const rateS = sh.length > 1 ? (sh[sh.length-1].stars - sh[0].stars) / Math.max(1, (new Date(sh[sh.length-1].date) - new Date(sh[0].date)) / 86400000) : 0;
>       const ratio = rateF > 0 ? rateS / rateF : rateS > 0 ? 2 : 1;
>       const dir = ratio > 1.3 ? "Rising（加速中）" : ratio < 0.7 ? "Cooling（降溫中）" : "Stable（穩定）";
>       lines.push(`**趨勢方向** ${dir}（加速比 ${Math.round(ratio * 100) / 100}x）`);
>     }
>     dv.paragraph(lines.join("\n"));
>   } else { dv.paragraph("需要 2+ 次快照才能顯示趨勢"); }
> } else { dv.paragraph("尚無 star_history 資料（下次出現在 trending 時會開始追蹤）"); }
> ```

## 相對成長速度

> [!abstract]- 跟 vault 中同類專案比較
> ```dataviewjs
> const me = dv.page("Repos/BigBodyCobain--Shadowbroker");
> if (me) {
>   const all = dv.pages('"Repos"').where(p => p.status !== "archived");
>   const sameCat = all.where(p => p.category === me.category);
>   const avgAll = all.length > 0 ? Math.round(all.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / all.length) : 0;
>   const avgCat = sameCat.length > 0 ? Math.round(sameCat.map(p => p.stars_per_day || 0).array().reduce((a,b) => a+b, 0) / sameCat.length) : 0;
>   const mySpd = me.stars_per_day || 0;
>   const vsAll = avgAll > 0 ? Math.round(mySpd / avgAll * 100) : 0;
>   const vsCat = avgCat > 0 ? Math.round(mySpd / avgCat * 100) : 0;
>   dv.table(["比較對象", "平均 Stars/天", "本專案", "倍數"], [
>     ["全 Vault", avgAll, mySpd, vsAll + "%"],
>     ["同分類 (" + me.category + ")", avgCat, mySpd, vsCat + "%"],
>   ]);
>   if (vsAll >= 300) dv.paragraph("**極速成長** — 成長速度是 vault 平均的 3 倍以上");
>   else if (vsAll >= 150) dv.paragraph("**高速成長** — 成長速度高於 vault 平均");
>   else if (vsAll >= 50) dv.paragraph("**正常速度** — 接近 vault 平均水平");
>   else dv.paragraph("**低速成長** — 低於 vault 平均，可能已過熱度高峰");
> }
> ```

## 決策分數

> [!abstract]- 綜合評估（自動計算）
> ```dataviewjs
> const me = dv.page("Repos/BigBodyCobain--Shadowbroker");
> if (me) {
>   let score = 0;
>   let breakdown = [];
>   // 熱度 (0-25)
>   const spd = me.stars_per_day || 0;
>   const heat = Math.min(25, Math.round(spd / 40 * 25));
>   score += heat; breakdown.push(`熱度: ${heat}/25`);
>   // 安裝難度 (0-20)
>   const inst = me.install_complexity === "easy" ? 20 : me.install_complexity === "medium" ? 12 : 5;
>   score += inst; breakdown.push(`易用性: ${inst}/20`);
>   // 成熟度 (0-20)
>   const created = me.created ? new Date(me.created.toString()) : null;
>   const age = created ? Math.floor((Date.now() - created.getTime()) / 86400000) : 0;
>   const mat = age > 365 ? 20 : age > 180 ? 16 : age > 30 ? 10 : 5;
>   score += mat; breakdown.push(`成熟度: ${mat}/20`);
>   // 社群 (0-20)
>   const forks = me.forks || 0;
>   const comm = forks > 200 ? 20 : forks > 50 ? 15 : forks > 10 ? 10 : 5;
>   score += comm; breakdown.push(`社群: ${comm}/20`);
>   // 授權 (0-15)
>   const lic = me.license || "";
>   const friendly = ["MIT","Apache-2.0","BSD-2-Clause","BSD-3-Clause","ISC","Unlicense"].includes(lic);
>   const licScore = friendly ? 15 : lic && lic !== "N/A" ? 8 : 0;
>   score += licScore; breakdown.push(`授權: ${licScore}/15`);
>   const grade = score >= 80 ? "A" : score >= 60 ? "B" : score >= 40 ? "C" : "D";
>   const bar = "\u2588".repeat(Math.round(score/5)) + "\u2591".repeat(20 - Math.round(score/5));
>   dv.paragraph(`## ${grade} (${score}/100)\n${bar}\n\n${breakdown.join(" | ")}`);
> }
> ```

---

## 個人筆記

> [!abstract]- 評估進度
> ```dataviewjs
> const me = dv.page("Repos/BigBodyCobain--Shadowbroker");
> if (me) {
>   const steps = [
>     { name: "已讀", done: me.status && me.status !== "to-review" },
>     { name: "已評分", done: (me.my_rating || 0) > 0 },
>     { name: "有結論", done: me.verdict && me.verdict !== "" },
>     { name: "Ring 決策", done: me.ring && me.ring !== "" && me.ring !== "assess" },
>     { name: "試用記錄", done: me.status === "tried" || me.status === "integrated" },
>   ];
>   const done = steps.filter(s => s.done).length;
>   const pct = Math.round((done / steps.length) * 100);
>   const bar = "\u2588".repeat(Math.round(pct / 5)) + "\u2591".repeat(20 - Math.round(pct / 5));
>   dv.paragraph(`${bar} **${done}/${steps.length}** (${pct}%)`);
>   const todo = steps.filter(s => !s.done).map(s => s.name);
>   if (todo.length > 0) dv.paragraph("待完成：" + todo.join(" / "));
> }
> ```

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
> 測試環境 :: _OS / Node / Python 版本_
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 花費時間 :: _從零到可用_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 踩到的坑 :: _描述 + 解法_
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

### 決策記錄

> [!abstract]- 為什麼評估這個工具？
> **當時的痛點**：_遇到什麼問題才開始找工具？_
> **觸發來源**：_GitHub Trending / HN / 同事推薦 / 其他_
> **當時的約束**：_時間 / 團隊 / 語言 / 部署環境_

> [!note]- 最終決策
> decision:: _選了什麼（或為何還在觀望）_
> why:: _當時的理由（越具體越好）_
> outcome:: _後來實際發生了什麼_

### 探索日誌

_按時間記錄，每次接觸時追加一段（最新在上）_

> **2026-03-10** — 首次收錄
> _第一印象：_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `ring_history`: 追加新狀態（格式：`assess@2026-03-10, trial@2026-03-15`）
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，1.4k stars
- [[2026-03-10|2026-03-10]] — 首次收錄，1.3k stars
