---
repo: zornade/visura-api
url: https://github.com/zornade/visura-api
owner: zornade
owner_type: User
language: Python
license: GPL-3.0
description: "Servizio API per l'estrazione automatizzata di dati catastali dal portale SISTER"
homepage: ""
stars: 477
stars_per_day: 68
forks: 61
open_issues: 0
created: 2026-03-03
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "API 工具"
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "自動從 SISTER 入口網站提取土地登記資料的 API 服務。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "visura-api"
  - "zornade/visura-api"
  - "自動從 SISTER 入口網站提取土地登記資料的 API 服務。"
---

# visura-api

**477** stars · **68** stars/天 · 建立 7 天前 · Python · GPL-3.0

> [!summary] 一句話摘要
> 自動從 SISTER 入口網站提取土地登記資料的 API 服務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (68 stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人
> **適合** 需要自動化查詢意大利土地登記資料的開發者或企業。
> **一句話重點** Visura API 透過自動化的方式，讓土地登記資料的查詢變得更高效，特別適合法律和地產領域的專業人士。

> [!abstract] 核心創新
> 使用 Playwright 自動化瀏覽器操作，實現土地登記資料的自動查詢。

## 專案簡介

Visura API 透過 RESTful 介面，讓使用者可以自動查詢意大利的土地登記資料。使用者首先透過 `POST /visura` 請求查詢特定地號的房產，接著系統會將請求排入隊列，並在一個已認證的無頭瀏覽器中執行查詢，最終透過 `GET /visura/{request_id}` 來獲取結果。這個過程中，API 使用 Playwright 來控制瀏覽器，並利用 FastAPI 提供的高效能框架來處理請求。該系統支援自動化的 SPID 認證，並能夠在會話過期時自動重新登入，確保查詢的連續性。與其他工具相比，Visura API 的請求是按順序處理，避免了對 SISTER 伺服器的過度負載，這樣可以在高流量情況下保持穩定性。雖然它能夠處理多個請求，但在某些特殊的地區結構中可能會遇到資料缺失的情況。這個專案目前處於穩定階段，適合需要自動化查詢土地登記資料的開發者或企業。對於小型團隊或個人開發者來說，這是一個值得考慮的工具，尤其是在需要頻繁查詢土地資料的情境下。

**技術棧**：`Python 3.11` · `FastAPI` · `Playwright` · `Docker`

## 重點功能

- 自動化 SPID 認證 — 使用 Sielte ID 進行自動登入，並透過推播通知確認身份。
- 請求排隊處理 — 所有查詢請求按順序處理，避免伺服器過載。
- 自動會話維護 — 每 30 秒保持會話活躍，並每 5 分鐘進行深度刷新。
- 完整的 HTML 日誌 — 每次訪問的頁面都會被記錄，方便調試和審計。
- Docker 支援 — 提供 Docker 映像，方便部署和管理。

## 快速開始

1. 克隆專案並進入資料夾
```bash
git clone https://github.com/zornade/visura-api.git && cd visura-api
```
2. 複製環境變數範本
```bash
cp .env.example .env
```
3. 修改 .env 檔案以設定 SPID 認證
```bash
# 編輯 .env 檔案
```
4. 使用 Docker 啟動服務
```bash
docker-compose up
```

## 程式碼範例

import requests

# 查詢房產
response = requests.post('http://localhost:8000/visura', json={'foglio': '123', 'particella': '456'})

# 獲取請求結果
request_id = response.json()['request_id']
result = requests.get(f'http://localhost:8000/visura/{request_id}')
print(result.json())

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案由 zornade 和 alestucci 兩位開發者共同維護，他們在開源社群中有一定的知名度。Visura API 解決了自動化查詢土地登記資料的需求，這在過去並沒有一個好的解決方案。最近在 GitHub 上的討論和一些社交媒體的分享，讓這個工具獲得了更多的曝光。隨著對於資料自動化需求的增加，這個工具的實用性也愈加凸顯。

## 適合誰使用

**目標受眾**：需要自動化查詢意大利土地登記資料的開發者或企業。

> [!example] 使用場景
> - 地產開發商用它來自動查詢土地登記資料，因為手動查詢繁瑣且耗時，這樣可以節省 50% 的時間。
> - 法律顧問用它來快速獲取房產所有權資訊，因為這樣能夠在客戶諮詢時提供即時的法律建議。
> - 數據分析師用它來收集土地資料進行市場分析，因為這樣能夠更快速地獲得大量資料，提升分析效率。

## 架構分析

這是一個基於 FastAPI 的 RESTful API 服務，架構為單體應用。用戶通過 HTTP 請求與 API 互動，請求被送入 `VisuraService` 進行處理，並使用 Playwright 控制無頭瀏覽器進行查詢。專案的關鍵檔案包括 `main.py`（處理 API 請求）和 `utils.py`（負責瀏覽器自動化）。整體架構設計考量了請求的排隊處理和會話的自動維護，確保查詢的穩定性和效率。

## 技術深入分析

Visura API 的核心技術是使用 FastAPI 提供 RESTful 介面，並利用 Playwright 進行無頭瀏覽器的操作。這樣的設計使得 API 能夠高效地處理多個請求，並且能夠在伺服器端保持會話的穩定性。該系統能夠處理的請求數量取決於 SISTER 伺服器的負載能力，雖然設計上有請求排隊的機制，但在高流量時期仍可能遇到延遲。選擇 Python 和 FastAPI 的優勢在於其快速開發和高效能，特別適合需要高併發的應用場景。然而，這樣的設計也帶來了對於 SPID 提供者的依賴，限制了使用者的選擇。隨著使用者數量的增加，如何擴展系統以應對更高的請求量將是一個挑戰，特別是在需要保持穩定性的情況下。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且結構良好，提供了詳細的安裝步驟和範例。安裝過程相對順暢，但需要使用者自行配置 SPID 認證。文件中沒有多語言支持，僅提供英文內容，對於非英語使用者可能會有一定的障礙。

## 優缺點分析

> [!success] 優點
> - 提供自動化的土地登記資料查詢，節省時間和人力成本。
> - 支援 Docker 部署，方便在不同環境中運行。
> - 詳細的日誌記錄功能，有助於調試和審計。

> [!danger] 缺點
> - 僅支援特定的 SPID 提供者，限制了使用範圍。
> - 在某些特殊情況下可能無法獲取完整資料。
> - 需要使用者擁有有效的 SISTER 帳號，增加了使用門檻。

> [!warning] 注意事項
> - 僅支援 Sielte ID 作為 SPID 提供者，其他提供者需修改程式碼。
> - 某些城市的特殊結構可能導致查詢結果不完整。
> - 如果查詢的地號不存在，API 會返回空列表，並顯示錯誤訊息。
> - 在高流量情況下，請求排隊可能會導致延遲。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 61 |
| Open Issues | 0 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-03 |
| Repo 大小 | 36 KB |

> [!info]- 語言組成
> ```mermaid
> pie title 語言組成
>     "Python" : 99
>     "Dockerfile" : 1
> ```

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@zornade](https://github.com/zornade) | 2 |
> | [@alestucci](https://github.com/alestucci) | 1 |

## 社群與生態

**社群活躍度**：社群活躍度中等，有定期的更新和回應。
**連結**：[文件](https://github.com/zornade/visura-api#readme)

## README 摘錄

> [!info]- 展開查看原文 README
> # Visura API
> 
> [](LICENSE)
> [](https://www.python.org/)
> [](https://fastapi.tiangolo.com/)
> 
> Servizio REST per l'estrazione automatizzata di dati catastali dal portale **SISTER** dell'Agenzia delle Entrate. Utilizza [Playwright](https://playwright.dev/python/) per pilotare un browser headless e [FastAPI](https://fastapi.tiangolo.com/) per esporre gli endpoint.
> 
> > **Disclaimer legale** — Questo progetto è uno strumento indipendente e **non** è affiliato, approvato o supportato dall'Agenzia delle Entrate. L'utente è l'unico responsabile del rispetto dei termini di servizio del portale SISTER e della normativa vigente. L'uso di automazione sul portale potrebbe violare i termini d'uso del servizio.
> 
> ---
> 
> ## Indice
> 
> - [Panoramica](#panoramica)
> - [Architettura](#architettura)
> - [Prerequisiti](#prerequisiti)
> - [Avvio rapido](#avvio-rapido)
> - [Configurazione](#configurazione)
> - [Endpoint API](#endpoint-api)
>   - [Health check](#health-check)
>   - [Visura immobili (Fase 1)](#visura-immobili-fase-1)
>   - [Visura intestati (Fase 2)](#visura-intestati-fase-2)
>   - [Polling risultati](#polling-risultati)
>   - [Sezioni territoriali](#sezioni-territoriali)
>   - [Shutdown](#shutdown)
> - [Esempi d'uso](#esempi-duso)
> - [Logging e debug](#logging-e-debug)
> - [Dettagli tecnici](#dettagli-tecnici)
> - [Sviluppo e contribuzione](#sviluppo-e-contribuzione)
> - [Risoluzione dei problemi](#risoluzione-dei-problemi)
> - [Licenza](#licenza)
> 
> ---
> 
> ## Panoramica
> 
> Visura API permette di interrogare i dati catastali italiani tramite una semplice interfaccia HTTP. Il flusso operativo è diviso in due fasi:
> 
> | Fase | Endpoint | Descrizione |
> |------|----------|-------------|
> | **1 — Immobili** | `POST /visura` | Cerca gli immobili associati a foglio + particella |
> | **2 — Intestati** | `POST /visura/intestati` | Recupera i titolari di uno specifico subalterno |
> 
> Entrambe le richieste vengono accodate ed eseguite sequenzialmente su un singolo browser autenticato al portale SISTER. I risultati si recuperano in polling con `GET /visura/{request_id}`.
> 
> ### Funzionalità principali
> 
> - **Autenticazione SPID automatizzata** via provider Sielte ID (CIE Sign) con push notification
> - **Coda sequenziale** — le richieste vengono processate una alla volta per non sovraccaricare il portale
> - **Ri-autenticazione automatica** — alla scadenza della sessione, il servizio tenta prima un recovery diretto e, solo se necessario, un nuovo login SPID
> - **Keep-alive** — la sessione viene mantenuta attiva con un light keep-alive ogni 30 secondi e un refresh profondo ogni 5 minuti
> - **Graceful shutdown** — su `SIGINT`/`SIGTERM` il servizio effettua il logout dal portale prima di chiudere il browser
> - **Logging HTML completo** — ogni pagina visitata dal browser viene salvata su disco per debug e audit
> - **Docker-ready** — immagine pronta con tutte le dipendenze di sistema per Chromium headless
> 
> ### Compatibilità SPID
> 
> Il login automatizzato funziona **esclusivamente** con il provider **Sielte ID (CIE Sign)**. Il flusso prevede l'approvazione via push notification sull'app MySielteID. Altri provider SPID non sono supportati e richiederebbero modifiche alla funzione `login()` in `utils.py`.
> 
> ### Limitazioni note
> 
> - Alcune città presentano strutture catastali particolari (sezioni urbane, mappe speciali) che possono causare risultati parziali.
> - Se la particella non esiste nel catasto, il portale restituisce "NESSUNA CORRISPONDENZA TROVATA" e l'API ritorna una lista vuota con il campo `error` valorizzato.
> - Gli immobili con partita "Soppressa" vengono inclusi nei risultati ma senza intestati.
> 
> ---
> 
> ## Architettura
> 
> ```
> Client HTTP
>      │
>      ▼
> ┌──────────────────────────────────────────────────────┐
> │  FastAPI  (main.py)                                  │
> │                                                      │
> │  ┌─────────────┐  ┌──────────────────────────────┐   │
> │  │ Endpoints   │──│ VisuraService                │   │
> │  │ REST        │  │  • asyncio.Queue             │   │
> │  └─────────────┘  │  • respo

## 延伸閱讀

相關概念：[[自動化]] · [[API 設計]] · [[資料抓取]]

相關專案：[[zornade--another-tool|zornade/another-tool]] · [[anotherdev--land-registry-api|anotherdev/land-registry-api]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[ahmadawais--chartli|ahmadawais/chartli]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]] · [[holysheep123--holysheep-cli|holysheep123/holysheep-cli]] · [[jackwener--bilibili-cli|jackwener/bilibili-cli]]

[GitHub](https://github.com/zornade/visura-api)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "zornade--visura-api"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "zornade--visura-api"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，475 stars
