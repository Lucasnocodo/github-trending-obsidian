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
  - "自動從 SISTER 入口網站提取義大利地籍數據的 API 服務。"
---

# visura-api

**477** stars · **68** stars/天 · 建立 7 天前 · Python · GPL-3.0

> [!summary] 一句話摘要
> 自動從 SISTER 入口網站提取義大利地籍數據的 API 服務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (68 stars/day)
> **適合** 需要自動化提取義大利地籍數據的開發者或數據分析師。
> **一句話重點** Visura API 不僅提供了自動化的數據提取功能，還考慮到了用戶的使用便利性和數據的可追溯性。

> [!abstract] 核心創新
> 該專案的創新在於其自動化的 SPID 認證流程，能夠無縫地與 SISTER 入口網站互動。

## 專案簡介

Visura API 提供了一個 RESTful 接口，讓用戶可以自動查詢義大利的地籍數據。其工作流程分為兩個階段：第一階段使用 `POST /visura` 來查詢與特定地號相關的房地產，第二階段使用 `POST /visura/intestati` 來獲取特定房產的所有者。該服務使用 FastAPI 架設 API，並利用 Playwright 控制無頭瀏覽器進行數據提取。與其他類似工具相比，Visura API 的獨特之處在於其自動化的 SPID 認證流程，並且能夠在會話過期時自動重新登錄。使用者需要注意的是，僅支持 Sielte ID 作為 SPID 提供者，這可能限制了某些用戶的使用。該工具的效能在於能夠穩定地處理請求，並且提供了完整的 HTML 日誌以便於調試。對於小型團隊或個人開發者來說，這是一個成熟的解決方案，值得考慮使用。若需處理大量請求或需要更高的靈活性，則可能需要考慮其他選擇。

**技術棧**：`FastAPI` · `Playwright` · `Python 3.9`

## 重點功能

- 自動化 SPID 認證 — 使用 Sielte ID 進行自動登錄，並透過推播通知進行身份驗證。
- 請求排隊處理 — 所有請求按順序執行，避免對 SISTER 伺服器造成過載。
- 自動重新登錄 — 在會話過期時自動嘗試恢復會話，確保持續穩定的數據提取。
- 完整的 HTML 日誌 — 所有訪問的頁面都會保存到磁碟，便於後續的調試和審計。
- Docker 支援 — 提供完整的 Docker 映像，簡化部署過程。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/zornade/visura-api.git
```
2. 進入專案目錄
```bash
cd visura-api
```
3. 安裝依賴
```bash
pip install -r requirements.txt
```
4. 啟動服務
```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

## 程式碼範例

```python
import requests

# 查詢特定地號的房地產
response = requests.post('http://localhost:8000/visura', json={'foglio': '123', 'particella': '456'})
print(response.json())
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 該專案的作者具有相關背景，並針對義大利地籍數據提取的需求進行了深入研究。隨著對自動化數據提取需求的增加，這個工具恰好滿足了市場的需求。最近的法規變更也促使開發者尋找更有效的解決方案來獲取地籍數據。

## 適合誰使用

**目標受眾**：需要自動化提取義大利地籍數據的開發者或數據分析師。

> [!example] 使用場景
> - 地產開發者用它來自動查詢土地所有權信息，因為手動查詢繁瑣且耗時。
> - 法律顧問用它來快速獲取客戶的地產資料，因為這樣可以節省大量的時間和精力。
> - 數據分析師用它來收集地籍數據進行市場分析，因為這樣能夠獲得更準確的數據支持其分析結論。

## 架構分析

該專案採用微服務架構，主要由 FastAPI 提供 RESTful API，並使用 Playwright 控制無頭瀏覽器進行數據提取。用戶的 HTTP 請求經 FastAPI 處理後，透過 VisuraService 進行排隊和執行，最終與 SISTER 入口網站互動。專案目錄中，`main.py` 是主要的應用程式入口。

## 優缺點分析

> [!success] 優點
> - 自動化的 SPID 認證流程，提高了用戶的便利性。
> - 請求排隊機制有效避免了對 SISTER 伺服器的過載。
> - 提供完整的日誌功能，便於後續的調試和審計。

> [!danger] 缺點
> - 僅支持 Sielte ID，限制了用戶的選擇。
> - 某些特殊地籍結構可能導致查詢不完整，影響數據準確性。
> - 需要一定的技術背景來進行安裝和配置。

> [!warning] 注意事項
> - 僅支持 Sielte ID 作為 SPID 提供者，其他提供者需修改程式碼。
> - 某些城市的特殊地籍結構可能導致查詢結果不完整。
> - 如果查詢的地號不存在，API 會返回空列表，並標示錯誤。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[other-tool--example\|other-tool/example]] | 該工具支持多種 SPID 提供者，並且提供更靈活的查詢選項，但可能缺乏 Visura API 的自動化功能。 |
| [[another-tool--example\|another-tool/example]] | 此工具專注於數據分析，提供更豐富的數據處理功能，但不支持自動化提取。 |

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

相關專案：[[other-tool--example|other-tool/example]] · [[another-tool--example|another-tool/example]]

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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，475 stars
