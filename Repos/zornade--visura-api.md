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
use_case: "自動從 SISTER 入口網站提取地籍數據的 API 服務。"
priority: medium
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "visura-api"
  - "zornade/visura-api"
  - "自動從 SISTER 入口網站提取地籍數據的 API 服務。"
---

# visura-api

**477** stars · **68** stars/天 · 建立 7 天前 · Python · GPL-3.0

> [!summary] 一句話摘要
> 自動從 SISTER 入口網站提取地籍數據的 API 服務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (68 stars/day)
> **適合** 需要自動化查詢意大利地籍數據的開發者或企業。
> **一句話重點** 這個專案展示了如何利用無頭瀏覽器自動化從政府網站提取數據的過程，對於需要頻繁查詢的開發者來說非常實用。

> [!abstract] 核心創新
> 該專案獨特地實現了自動化 SPID 身份驗證以便於從 SISTER 獲取地籍數據。

## 專案簡介

Visura API 透過 HTTP 介面自動提取意大利地籍數據，分為兩個主要階段：第一階段查詢與特定地號相關的房產，第二階段查詢特定房產的所有者。它使用 FastAPI 作為後端框架，並利用 Playwright 驅動無頭瀏覽器進行自動化操作，確保每個請求都在一個經過身份驗證的會話中依序執行。該服務還具備自動 SPID 身份驗證、會話保持和自動重新登錄的功能，以應對會話過期的情況。與其他類似工具相比，Visura API 的獨特之處在於其對於 SPID 身份驗證的支持和對請求的序列化處理，這降低了對目標網站的負擔。使用者可以透過簡單的 API 請求來獲取數據，但需注意某些城市的特殊地籍結構可能導致數據不完整。該專案目前處於穩定階段，適合需要自動化地籍查詢的開發團隊使用。建議在需要高頻率查詢地籍數據的情況下使用，但若僅需偶爾查詢，則可考慮其他輕量級解決方案。

**技術棧**：`FastAPI` · `Playwright` · `Python 3.9`

## 重點功能

- 自動化 SPID 身份驗證 — 支持 Sielte ID (CIE Sign) 的自動登錄，通過推送通知進行身份驗證。
- 請求序列化 — 透過 asyncio.Queue 逐一處理請求，避免對 SISTER 入口網站造成過大負擔。
- 會話保持 — 每 30 秒進行輕量級的 keep-alive，並每 5 分鐘進行深度刷新，確保會話不會過期。
- 自動重新登錄 — 在會話過期時自動嘗試恢復，若失敗則重新登錄。
- 完整的 HTML 日誌記錄 — 每次訪問的頁面都會保存到磁碟，便於調試和審計。
- Docker 支援 — 提供完整的 Docker 映像，方便部署和使用。

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

# 查詢特定地號的房產
response = requests.post('http://localhost:8000/visura', json={'foglio': '123', 'particella': '456'})
print(response.json())
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 該專案由經驗豐富的開發者 zornade 和 alestucci 開發，專注於自動化地籍數據提取，切中意大利市場的需求。隨著數位化進程加速，對於自動化查詢工具的需求日益增加，尤其是在地籍數據查詢方面。這使得 Visura API 在當前時期受到關注。

## 適合誰使用

**目標受眾**：需要自動化查詢意大利地籍數據的開發者或企業。

> [!example] 使用場景
> - 地產開發商用它來自動查詢土地所有權信息，因為手動查詢耗時且容易出錯。
> - 法律顧問用它來快速獲取客戶地產的相關數據，因為這樣可以節省大量的查詢時間。
> - 數據分析師用它來收集地籍數據進行市場分析，因為自動化流程能夠提高數據收集的效率和準確性。

## 架構分析

該專案採用微服務架構，使用 FastAPI 作為後端框架，並透過 Playwright 控制無頭瀏覽器進行自動化數據提取。用戶請求經過 HTTP 客戶端發送到 FastAPI，然後由 VisuraService 處理請求並將其排入隊列。每個請求都會在經過身份驗證的會話中依序執行，並最終將結果返回給用戶。關鍵檔案包括 main.py，負責啟動 FastAPI 應用及定義 API 端點。

## 技術深入分析

> [!note]- 展開深入分析
> Visura API 的核心在於其使用 Playwright 進行無頭瀏覽器操作，這使得它能夠在不顯示界面的情況下自動化與 SISTER 入口網站的交互。該專案的效能表現在於其能夠有效地處理多個請求，並且通過 asyncio.Queue 確保請求的序列化，避免對網站造成過大壓力。設計上，選擇 FastAPI 作為後端框架是因為其高效能和簡單的路由設計，這使得開發者能夠快速擴展功能。與其他工具相比，Visura API 的自動 SPID 登錄功能是其主要的技術優勢，這使得使用者在身份驗證上省去許多麻煩。

## 優缺點分析

> [!success] 優點
> - 自動化身份驗證流程，減少手動操作的需求。
> - 支持高頻率查詢，適合需要大量地籍數據的應用。
> - 完整的日誌記錄功能，便於後續的調試和審計。

> [!danger] 缺點
> - 僅支持特定的 SPID 提供者，限制了使用範圍。
> - 對於某些特殊地籍結構的查詢可能無法返回完整數據。
> - 需要一定的技術背景來配置和運行服務。

> [!warning] 注意事項
> - 僅支持 Sielte ID (CIE Sign) 進行自動登錄，其他 SPID 提供者不兼容。
> - 某些城市的特殊地籍結構可能導致結果不完整。
> - 若查詢的地號不存在，API 將返回空列表。
> - 對於標記為 'Soppressa' 的房產，雖然會返回結果，但不會顯示所有者信息。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[zornade--another-tool\|zornade/another-tool]] | 雖然也提供地籍數據查詢功能，但不支持自動 SPID 登錄，需手動處理身份驗證。 |
| [[anotherdev--land-registry-api\|anotherdev/land-registry-api]] | 此工具專注於特定地區的地籍數據查詢，無法自動處理多城市查詢。 |

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

**社群活躍度**：社群活躍，定期更新和維護。
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

相關概念：[[自動化測試]] · [[API 設計]] · [[微服務]] · [[容器化]]

相關專案：[[zornade--another-tool|zornade/another-tool]] · [[anotherdev--land-registry-api|anotherdev/land-registry-api]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]]

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
