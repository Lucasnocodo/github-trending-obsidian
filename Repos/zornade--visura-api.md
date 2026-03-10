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
release_tag: ""
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "visura-api"
  - "zornade/visura-api"
  - "自動從 SISTER 入口網站提取意大利地籍數據的 API 服務。"
---

# visura-api

**477** stars · **68** stars/天 · 建立 7 天前 · Python · GPL-3.0

> [!summary] 一句話摘要
> 自動從 SISTER 入口網站提取意大利地籍數據的 API 服務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (68 stars/day)
> **適合** 需要自動化提取意大利地籍數據的開發者和企業。
> **一句話重點** Visura API 讓地籍數據提取變得自動化，顯著提高了查詢效率，特別適合需要頻繁查詢的開發者和企業。

> [!abstract] 核心創新
> 該專案的核心創新在於自動化 SPID 認證和請求的串行處理，避免了對 SISTER 服務的過載。

## 專案簡介

Visura API 透過 RESTful 介面，自動化從意大利 SISTER 入口網站提取地籍數據。使用者發送請求後，系統會在一個經過身份驗證的無頭瀏覽器中執行查詢，並透過輪詢獲取結果。這個專案主要基於 FastAPI 框架來提供 API 端點，並利用 Playwright 來控制無頭瀏覽器。與其他類似工具相比，Visura API 的獨特之處在於其自動化 SPID 認證流程和請求的串行處理，這樣可以避免過載 SISTER 服務。使用者可以透過 `POST /visura` 來查詢地產，並使用 `GET /visura/{request_id}` 來獲取查詢結果。該工具在處理請求時會自動保持會話活躍，並在會話過期時進行自動重登。雖然功能強大，但在某些特殊地區可能會遇到查詢結果不完整的情況。整體來說，這是一個穩定的專案，適合需要定期提取地籍數據的開發者和企業。使用者在選擇時應考慮其對 SPID 認證的依賴，這可能限制了某些用戶的使用。

**技術棧**：`FastAPI` · `Playwright` · `Docker`

## 重點功能

- 自動化 SPID 認證 — 使用 Sielte ID 進行自動登錄，支持推播通知。
- 請求串行處理 — 每次只處理一個請求，以避免過載 SISTER 服務。
- 自動重登 — 在會話過期時自動嘗試恢復會話。
- 會話保持 — 每 30 秒進行輕量級的 keep-alive，5 分鐘進行深度刷新。
- 完整的 HTML 日誌 — 訪問的每個頁面都會保存到磁碟，便於調試和審計。
- Docker 支持 — 提供完整的 Docker 映像，方便部署。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 啟動服務
```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```
3. 發送查詢請求
```bash
curl -X POST http://localhost:8000/visura -d '{"foglio": "123", "particella": "456"}'
```

## 程式碼範例

```python
import requests
response = requests.post('http://localhost:8000/visura', json={'foglio': '123', 'particella': '456'})
print(response.json())
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 該專案由經驗豐富的開發者 zornade 和 alestucci 共同開發，切中意大利地籍數據提取的需求，尤其是在自動化和數據整合方面。隨著數位化進程加快，越來越多的企業需要這樣的工具來簡化地籍查詢流程，這使得該專案在開發者社群中迅速受到關注。

## 適合誰使用

**目標受眾**：需要自動化提取意大利地籍數據的開發者和企業。

> [!example] 使用場景
> - 地產開發商用它來自動提取土地所有權信息，因為手動查詢耗時且容易出錯。
> - 法律顧問用它來快速獲取客戶地產的詳細地籍數據，因為這樣能夠節省大量的查詢時間。
> - 數據分析師用它來收集地籍數據進行市場分析，因為這樣能夠獲得準確且及時的數據支持決策。

## 架構分析

該專案採用微服務架構，核心資料流為：用戶輸入 → FastAPI 處理請求 → Playwright 控制無頭瀏覽器 → 返回結果。關鍵技術決策包括使用 FastAPI 提供高效的 RESTful 服務和 Playwright 進行自動化瀏覽器操作。專案目錄中，`main.py` 是主要的 FastAPI 應用程式，負責處理所有 API 請求。

## 優缺點分析

> [!success] 優點
> - 自動化的 SPID 登錄流程，簡化了用戶操作。
> - 支持完整的請求日誌，便於後續調試。
> - 能夠自動保持會話活躍，減少用戶干預。

> [!danger] 缺點
> - 僅支持特定的 SPID 提供者，限制了使用範圍。
> - 在某些特殊情況下可能無法獲取完整的地籍數據。
> - 需要一定的技術背景來進行安裝和配置。

> [!warning] 注意事項
> - 僅支持 Sielte ID 作為 SPID 提供者，其他提供者需修改代碼。
> - 某些地區的地籍結構可能導致查詢結果不完整。
> - 如果查詢的地號不存在，API 將返回空列表。
> - 對於標記為 'Soppressa' 的地產，將不會返回所有權信息。

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

**社群活躍度**：社群活躍度中等，定期更新和維護。
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

相關概念：[[自動化測試]] · [[API 設計]] · [[微服務]]

[GitHub](https://github.com/zornade/visura-api)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "zornade--visura-api"
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

- [[2026-03-10|2026-03-10]] — 首次收錄，475 stars
