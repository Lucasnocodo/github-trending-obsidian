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
use_case: "自動化從 SISTER 取得意大利地籍數據的 API 服務。"
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
  - "自動化從 SISTER 取得意大利地籍數據的 API 服務。"
---

# visura-api

**477** stars · **68** stars/天 · 建立 7 天前 · Python · GPL-3.0

> [!summary] 一句話摘要
> 自動化從 SISTER 取得意大利地籍數據的 API 服務。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Growing (68 stars/day)
> **授權** GPL-3.0 (Copyleft，商用需注意)
> **適合** 需要自動化查詢意大利地籍數據的開發者或企業。
> **一句話重點** Visura API 讓地籍數據的提取變得自動化，對於需要頻繁查詢的開發者來說非常實用。

> [!abstract] 核心創新
> 這個專案提供了一個自動化的 API 來提取意大利地籍數據，並且強調了請求的排隊處理以避免過載。

## 專案簡介

Visura API 是一個 RESTful API，透過 HTTP 請求自動提取意大利地籍數據。其工作流程分為兩個階段：第一階段使用 `POST /visura` 查詢與地籍編號相關的房產，第二階段使用 `POST /visura/intestati` 獲取特定房產的所有者資訊。這個服務使用 FastAPI 框架來提供 API 端點，並利用 Playwright 進行無頭瀏覽器操作以自動化登入和數據提取。與其他類似工具相比，Visura API 特別強調了自動化的 SPID 認證過程，並且具備請求排隊處理的功能，避免對 SISTER 服務造成過大壓力。使用者可以透過 `GET /visura/{request_id}` 來輪詢請求結果，並且系統會自動處理會話過期的情況。這個專案目前處於穩定階段，適合需要頻繁查詢地籍數據的開發者或企業使用。建議在需要自動化查詢地籍資料時使用，若只需偶爾查詢則可考慮手動方式。

**技術棧**：`FastAPI` · `Playwright` · `Docker`

## 重點功能

- 自動化 SPID 認證 — 使用 Sielte ID 進行自動登入，支持推播通知。
- 請求排隊處理 — 請求將依序處理，避免對 SISTER 造成過大壓力。
- 自動會話維護 — 系統會在會話過期前自動重新登入。
- 完整的 HTML 日誌 — 每次訪問的頁面都會被保存以便於調試。
- Docker 支持 — 提供 Docker 映像以簡化部署。

## 快速開始

1. 克隆專案
```bash
git clone https://github.com/zornade/visura-api.git
```
2. 安裝依賴
```bash
pip install -r requirements.txt
```
3. 啟動服務
```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

## 程式碼範例

```python
import requests

# 查詢房產
response = requests.post('http://localhost:8000/visura', json={'foglio': '123', 'particella': '456'})
print(response.json())
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 專案由 zornade 和 alestucci 共同開發，兩位貢獻者在開源社群中有一定的影響力。Visura API 解決了以往手動查詢地籍數據繁瑣的問題，提供了一個自動化的解決方案。最近在 GitHub 上獲得了較高的關注度，可能是因為對於開發者來說，這類工具的需求逐漸增加，尤其是在地產和法律領域。技術生態的變化使得自動化工具的開發變得更加可行。

## 適合誰使用

**目標受眾**：需要自動化查詢意大利地籍數據的開發者或企業。

> [!example] 使用場景
> - 地產開發商用它來自動查詢地籍資料，因為手動查詢耗時且容易出錯，這樣可以節省約 50% 的時間。
> - 法律顧問用它來快速獲得房產所有權資訊，因為傳統查詢方式需要多次登入和手動操作，這樣可以提高工作效率。
> - 數據分析師用它來批量提取地籍數據進行分析，因為這樣可以避免重複的手動操作，並且能夠快速獲得最新數據。

## 架構分析

Visura API 採用微服務架構，主要由 FastAPI 提供 RESTful 端點，並使用 Playwright 進行無頭瀏覽器操作。用戶輸入請求 → FastAPI 處理請求並將其排入隊列 → Playwright 瀏覽器執行查詢 → 返回結果給用戶。關鍵技術決策包括使用 asyncio 來處理請求排隊，並且在 `main.py` 中定義了主要的 API 端點和服務邏輯。

## 優缺點分析

> [!success] 優點
> - 自動化流程減少手動操作，提高效率。
> - 完整的日誌功能便於調試和審計。
> - Docker 支持使得部署變得簡單。

> [!danger] 缺點
> - 僅支持特定的 SPID 提供者，限制了使用範圍。
> - 對於某些特殊地籍結構的支持有限。
> - 需要一定的技術背景才能進行部署和配置。

> [!warning] 注意事項
> - 僅支持 Sielte ID 作為 SPID 提供者，其他提供者需修改程式碼。
> - 某些城市的地籍結構特殊，可能導致查詢結果不完整。
> - 如果查詢的地籍編號不存在，API 將返回空列表。

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

相關概念：[[API 設計]] · [[自動化]] · [[資料提取]]

相關專案：[[zornade--another-tool|zornade/another-tool]] · [[anotherdev--land-registry-api|anotherdev/land-registry-api]] · [[AlpinDale--parsync|AlpinDale/parsync]] · [[Flowseal--tg-ws-proxy|Flowseal/tg-ws-proxy]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，475 stars
