---
repo: BigBodyCobain/Shadowbroker
url: https://github.com/BigBodyCobain/Shadowbroker
owner: BigBodyCobain
owner_type: User
language: TypeScript
license: N/A
description: "Open-source intelligence for the global theater. Track everything from the corporate/private jets of the wealthy, and spy satellites, to seismic events in one unified interface. The knowledge is available to all but rarely aggregated in the open, until now."
homepage: ""
stars: 1464
stars_per_day: 244
forks: 162
open_issues: 0
created: 2026-03-05
pushed_at: 2026-03-11
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "OSINT 工具"
release_tag: "v0.6.0"
install_complexity: "medium"
status: to-review
my_rating: 0
score_confidence: 0
score_interest: 0
score_risk: 0
last_reviewed: 2026-03-10
use_case: "提供全球開源情報的即時地理情報平台，追蹤從富豪私人飛機到地震事件的各種數據。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
appearances: 1
next_review: "2026-03-13"
contributor_count: 4
engagement: "medium"
verdict: ""
ring_history: "assess@2026-03-10"
star_history: "2026-03-10:1455,2026-03-11:1464"
tags:
  - github
  - "category/開發工具"
  - "lang/typescript"
  - "topic/osint"
  - "topic/osint_resources"
  - "topic/osint_tool"
  - "topic/osint_tools"
aliases:
  - "Shadowbroker"
  - "BigBodyCobain/Shadowbroker"
  - "提供全球開源情報的即時地理情報平台，追蹤從富豪私人飛機到地震事件的各種數據。"
---

# Shadowbroker

**1.5k** stars · **244** stars/天 · 建立 6 天前 · TypeScript · 未標註授權

```dataviewjs
const me = dv.page("Repos/BigBodyCobain--Shadowbroker");
if (me && ((me.verdict && me.verdict !== "") || (me.my_rating || 0) > 0)) {
  const parts = [];
  if (me.my_rating > 0) parts.push("\u2605".repeat(me.my_rating) + "\u2606".repeat(5 - me.my_rating));
  if (me.ring && me.ring !== "assess") parts.push("Ring: **" + me.ring + "**");
  if (me.verdict) parts.push(me.verdict);
  dv.paragraph("> [!success] 你的結論\n> " + parts.join(" / "));
}
```

`v0.6.0`

`osint` `osint-resources` `osint-tool` `osint-tools`

> [!summary] 一句話摘要
> 提供全球開源情報的即時地理情報平台，追蹤從富豪私人飛機到地震事件的各種數據。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (244 stars/day)
> **授權** 未標註授權 (風險較高) · **維護** Active (最後推送 0 天前) · **貢獻者** 4+ 人 · **參與度** Medium
> **適合** 需要即時追蹤全球活動的安全分析師和研究人員。
> **一句話重點** 這個專案展示了如何將多種開源數據整合到一個平台，為用戶提供即時的全球情報視圖。

> [!question] TL;DR — 值得投入嗎？
> **成熟度** Beta (可試用) · **安裝** Medium (需設定) · **學習** ~5h · **綁定風險** medium
> **結論** 花 5 小時學習，10 小時整合，得到即時的全球情報視圖，值得投資。

> [!abstract] 核心創新
> 提供一個統一的界面來即時追蹤多種全球活動，並支持自定義數據來源。

## 專案簡介

ShadowBroker 是一個即時的多領域開源情報（OSINT）儀表板，聚合來自數十個開源情報來源的實時數據，並在統一的黑色操作地圖界面上呈現。用戶可以追蹤飛機、船隻、衛星、地震、衝突區域、CCTV 網絡、GPS 干擾等，所有數據均實時更新。其核心賣點在於提供一個單一視窗來觀察全球活動，特別適合分析師和研究人員。使用 Next.js、MapLibre GL 和 FastAPI 等技術，這個平台的設計考量了性能和擴展性，能夠處理高流量的數據層，並透過直接的 setData() 調用來優化地圖渲染。相較於其他 OSINT 工具，ShadowBroker 具備更高的數據更新頻率和更豐富的數據來源，能夠即時追蹤超過 2000 顆衛星及 25000 艘船隻。

使用者可自定義 RSS 情報來源，並為其分配重要性權重，這使得信息的管理更加靈活。使用 Docker 或 Podman 部署簡便，並且支持多種 API 整合，讓用戶能夠輕鬆獲取所需數據。實際使用中，使用者可能會遇到 API 限制或數據延遲的問題，但整體上，這個工具的社群活躍度高，且持續更新，未來發展潛力大。對於需要即時全球情報的團隊，這是一個非常合適的選擇。

**技術棧**：`Next.js 14` · `FastAPI` · `MapLibre GL` · `Python 3.10+`

## 重點功能

- 即時數據聚合 — 從多個來源（如 OpenSky、aisstream.io）獲取飛行和海運數據，更新頻率約 60 秒。
- 自定義 RSS 情報來源 — 用戶可添加、移除、優先排序最多 20 個 RSS 源，並為其分配權重。
- 全球數據中心地圖層 — 繪製 2000 多個數據中心，提供運營商詳情和網絡中斷交叉參考。
- 高效能地圖渲染 — 透過直接的 setData() 調用優化渲染性能，減少延遲。
- 多種數據來源支持 — 包括衛星、地震、CCTV、交通攝像頭等，滿足不同需求。

## 快速開始

1. 克隆專案並啟動 Docker 環境
```bash
git clone https://github.com/BigBodyCobain/Shadowbroker.git && cd Shadowbroker && ./compose.sh up -d
```
2. 訪問儀表板
```bash
Open http://localhost:3000
```
3. 設置環境變數（可選）
```bash
echo 'AIS_API_KEY=your_aisstream_key' >> .env
```

## 程式碼範例

{
  "前置條件": "需要安裝 Docker 或 Podman。",
  "指令": "./compose.sh up -d",
  "預期輸出": "啟動儀表板，並可在 http://localhost:3000 訪問。"
}

## 為什麼值得關注

> [!tip] 爆紅原因
> 建立 6 天內累積 1464 stars（244/天），forks 162（11.1%），顯示出強勁的增長趨勢。這個專案的作者群體活躍且具備技術背景，解決了以往 OSINT 工具數據分散、更新不及時的痛點。隨著全球安全形勢的變化，對於即時情報的需求日益增加，這使得 ShadowBroker 的功能變得更加重要。社群的反饋和需求也推動了其快速發展，未來可能會吸引更多的用戶和貢獻者。

## 適合誰使用

**目標受眾**：需要即時追蹤全球活動的安全分析師和研究人員。

> [!example] 使用場景
> - 安全分析師用它來追蹤全球的飛行活動，因為能即時獲取商業與軍事飛機的數據，提升情報收集效率。
> - 研究人員用它來監控地震事件，因為提供了即時的全球地震數據，便於分析災害影響。
> - 開發者用它來整合多種數據來源，因為其 API 支持多種外部服務，方便快速構建應用。

## 架構分析

ShadowBroker 採用微服務架構，前端使用 Next.js 進行用戶界面構建，後端則使用 FastAPI 提供 API 服務。數據流從各個開源 API 獲取，經過處理後在地圖上顯示。這種設計使得系統能夠靈活擴展，並能夠快速集成新的數據來源。選擇使用 Docker 進行容器化部署，降低了環境配置的複雜度，但也增加了對 Docker 環境的依賴。整體架構的可擴展性良好，但在高流量的情況下，可能會面臨性能瓶頸，特別是在數據更新頻率較高時。

## 技術深入分析

ShadowBroker 的核心技術機制在於其即時數據聚合能力，利用多個開源 API 獲取飛行、海運、地震等數據，並通過 FastAPI 提供後端服務。前端則使用 Next.js 和 MapLibre GL 進行可視化，確保用戶能夠直觀地查看數據。效能方面，系統設計考量了高流量的需求，透過直接的 setData() 調用來優化地圖渲染，減少延遲。選擇使用 Docker 進行容器化部署，雖然降低了環境配置的複雜度，但也增加了對 Docker 的依賴，可能在某些情況下造成不便。技術風險方面，隨著數據量的增加，系統可能會面臨性能瓶頸，特別是在高頻率更新的情況下。整合分析上，與主流框架如 React 的整合相對順暢，但對於不熟悉 Docker 的開發者來說，可能需要額外的學習成本。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且提供了詳細的安裝指導，包含 Docker 部署的步驟。安裝過程相對順暢，但對於不熟悉 Docker 的用戶可能會有一定的學習曲線。文件中有多種使用場景的示例，幫助用戶快速上手。

## 優缺點分析

> [!success] 優點
> - 即時更新的多領域數據聚合，適合多種分析需求。
> - 支持自定義 RSS 源，靈活性高。
> - 使用 Docker 部署簡便，降低了環境配置的難度。

> [!danger] 缺點
> - 需要 Docker 環境，對於不熟悉的用戶有一定學習曲線。
> - 某些數據來源需要 API 金鑰，可能會限制使用。
> - 在高流量情況下可能會遇到性能瓶頸。

> [!warning] 注意事項
> - 需要 Docker 或 Podman 環境才能運行。
> - 某些數據來源需要 API 金鑰，可能會有使用限制。
> - 對於大量數據的實時更新，可能會遇到性能瓶頸。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [AlpinDale/parsync](https://github.com/AlpinDale/parsync) | 提供類似的數據聚合功能，但主要集中於文件同步，不支持即時地理情報。 |
| [Flowseal/tg-ws-proxy](https://github.com/Flowseal/tg-ws-proxy) | 專注於 Telegram 的 WebSocket 代理，功能範圍較窄，不具備多領域的數據追蹤能力。 |

## 替代方案決策

> [!question] 什麼時候該選別的工具？

| 工具 | 技術路線 | 選它的時機 | 遷移難度 |
| --- | --- | --- | --- |
| OpenSky Network | 專注於航空數據的即時追蹤，而 ShadowBroker 提供多領域的數據聚合。 | 如果只需要航空數據，OpenSky Network 是更專注的選擇。 | low，因為 API 設計相似，容易整合。 |
| GDELT | 專注於全球事件的數據收集，而 ShadowBroker 提供即時的地理信息視圖。 | 如果需要深入分析全球事件，GDELT 提供更豐富的數據。 | medium，因為需要重新設計數據整合流程。 |

> [!abstract]- 功能對比矩陣
>
> | 維度 | **Shadowbroker** | **OpenSky Network** | **GDELT** |
> | --- | --- | --- | --- |
> | 技術路線 | 本專案 | 專注於航空數據的即時追蹤，而 ShadowBroker 提供多領域的數據聚合。 | 專注於全球事件的數據收集，而 ShadowBroker 提供即時的地理信息視圖。 |
> | 遷移成本 | - | low，因為 API 設計相似，容易整合。 | medium，因為需要重新設計數據整合流程。 |
> | 適用場景 | 主要場景 | 如果只需要航空數據，OpenSky Network 是更專注 | 如果需要深入分析全球事件，GDELT 提供更豐富的數據。 |

## 成熟度評估

| 項目 | 評估 |
| --- | --- |
| 開發階段 | Beta |
| 生產環境就緒 | No |
| Breaking Change 風險 | medium |

> [!tip] 採用建議
> 適合個人或小型團隊的試用，不建議用於生產環境的核心業務。

## 已知陷阱

> [!bug] 踩坑才知道的問題

- **[HIGH]** 在某些環境下，Docker 啟動可能會失敗，特別是資源不足時。
  - 解法：確保 Docker 有足夠的資源可用，或嘗試重啟 Docker。
- [MEDIUM] API 金鑰配置不當會導致數據無法獲取。
  - 解法：仔細檢查 .env 文件中的 API 金鑰配置。
- [MEDIUM] 高流量時可能會出現性能下降。
  - 解法：考慮優化數據來源或減少同時追蹤的對象。

## 使用情境適合度

| 情境 | 適合度 | 說明 |
| --- | --- | --- |
| 需要即時追蹤全球飛行活動的安全分析團隊 | 非常適合 | 提供即時的飛行數據和多種數據來源整合。 |
| 小型研究團隊需要分析地震數據 | 適合 | 能夠即時獲取全球地震信息，便於分析。 |
| 大型企業需要穩定的 OSINT 解決方案 | 不適合 | 目前仍在 beta 階段，穩定性不足。 |
| 開發者想要快速構建 OSINT 應用 | 非常適合 | 提供了豐富的 API 和數據來源，便於快速整合。 |

## 採用成本分析

| 項目 | 評估 |
| --- | --- |
| 學習時間 | ~5 小時 |
| 整合時間 | ~10 小時 |
| 維護負擔 | medium |
| 綁定風險 | medium |

> [!tip] 投入 vs 回報
> 花 5 小時學習，10 小時整合，得到即時的全球情報視圖，值得投資。

## 安全性評估

> [!warning] 安全性快速掃描
> 低風險：該工具不需要高權限運行，但需要配置 API 金鑰，使用時需注意保護這些敏感信息。

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
| Forks | 162 |
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

> [!info]- Release Notes
> ## What's New in v0.6.0
> 
> ### Custom News Feed Manager
> - Add, remove, and prioritize up to **20 RSS intelligence sources** from the Settings panel
> - Assign weight levels (1-5) to control feed importance - no more editing Python files
> - Custom feeds persist across restarts via backend/config/news_feeds.json
> 
> ### Global Data Center Map Layer
> - **2,000+ data centers** plotted worldwide from a curated dataset
> - Clustered purple markers with server-rack icons
> - Click any DC for operator details - internet outage cross-referencing by country
> 
> ### Performance Hardening
> - **Imperative map rendering** - high-volume layers bypass React reconciliation via direct setData() calls
> - **Debounced updates** (2s) on dense layers to prevent render thrashing
> - Enhanced /api/health with per-source freshness timestamps and counts
> 
> ### Fixes and Improvements
> - Data center coordinates fixed for 187 Southern Hemisphere entries
> - Docker CORS_ORIGINS env var properly passed through docker-compose
> - Start scripts warn on Python 3.13+ compatibility issues
> - Settings panel redesigned with tabbed UI (API Keys / News Feeds)
> 
> ---
> 
> ### Quick Start
> 1. Download ShadowBroker_v0.6.0.zip below
> 2. Extract and run start.bat (Windows) or ./start.sh (Mac/Linux)
> 3. Open http://localhost:3000

## 社群與生態

**社群活躍度**：社群活躍，定期更新，且無開放問題。
**連結**：[文件](https://github.com/BigBodyCobain/Shadowbroker)

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

相關概念：[[OSINT]] · [[地理信息系統]] · [[實時數據處理]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[FreedomIntelligence--OpenClaw-Medical-Skills|FreedomIntelligence/OpenClaw-Medical-Skills]] · [[L42ARO--Mercury-Transforming-Drone|L42ARO/Mercury-Transforming-Drone]] · [[Minecraft-Community-Edition--client|Minecraft-Community-Edition/client]] · [[joeseesun--qiaomu-mondo-poster-design|joeseesun/qiaomu-mondo-poster-design]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]]

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
> WHERE category = "開發工具" AND file.name != "BigBodyCobain--Shadowbroker"
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
> const concepts = ["OSINT","地理信息系統","實時數據處理"];
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
> | 維度 | 分數 (1-5) | 說明 |
> | --- | :---: | --- |
> | 信心 | /5 | _我對這工具的了解程度_ |
> | 興趣 | /5 | _想投入時間研究的程度_ |
> | 風險 | /5 | _導入風險，5=極低風險_ |
> 
> _填完後更新 frontmatter：`score_confidence` / `score_interest` / `score_risk`_
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
