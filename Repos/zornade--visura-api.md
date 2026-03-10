---
repo: zornade/visura-api
url: https://github.com/zornade/visura-api
owner: zornade
owner_type: User
language: Python
license: GPL-3.0
description: "Servizio API per l'estrazione automatizzata di dati catastali dal portale SISTER"
homepage: ""
stars: 475
stars_per_day: 68
forks: 61
open_issues: 0
created: 2026-03-03
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
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
  - "自動從 SISTER 端口提取地籍數據的 API 服務。"
---

# visura-api

**475** stars · **68** stars/天 · 建立 7 天前 · Python · GPL-3.0

> [!summary] 一句話摘要
> 自動從 SISTER 端口提取地籍數據的 API 服務。

> [!abstract] 核心創新
> 能夠自動化提取地籍數據並支持 SPID 認證。

## 專案簡介

這個專案提供了一個 REST API，可以自動從意大利的 SISTER 端口提取地籍數據。它使用 Playwright 來控制無頭瀏覽器，並通過 FastAPI 提供 API 端點。與其他地籍數據提取工具不同，Visura API 支持自動化的 SPID 認證和請求排隊，避免了對服務的過載。使用者可以通過簡單的 HTTP 請求來獲取所需的地籍數據，並且支持結果的輪詢檢索。雖然這個工具在功能上非常強大，但使用者需要注意法律責任，因為它不是官方授權的工具。整體而言，這是一個適合需要自動化地籍數據提取的開發者的工具。

**技術棧**：`Python` · `FastAPI` · `Playwright`

## 重點功能

- 提供 REST API 以提取地籍數據。
- 支持自動化 SPID 認證，簡化登錄過程。
- 請求排隊處理，避免過載 SISTER 端口。
- 支持結果的輪詢檢索，方便用戶獲取數據。
- 提供詳細的 API 文檔，方便開發者使用。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 啟動 API 服務
```bash
uvicorn main:app --reload
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 該專案的作者在開發社群中有一定的知名度，並且隨著對地籍數據需求的增加，這個工具正好滿足了開發者自動化提取數據的需求。近年來，政府數據開放的趨勢也促進了這類工具的興起。

## 適合誰使用

**目標受眾**：需要自動化提取意大利地籍數據的開發者和專業人士。

> [!example] 使用場景
> - 地產開發商 用它來 自動提取地籍數據，因為這樣可以快速獲取所需信息。
> - 法律顧問 用它來 獲取不動產的所有權信息，因為這能提高工作效率。
> - 開發者 用它來 測試地籍數據提取功能，因為它提供了簡單的 API 接口。

## 架構分析

使用 FastAPI 提供 REST API，並通過 Playwright 控制無頭瀏覽器進行數據提取。

## 優缺點分析

> [!success] 優點
> - 自動化數據提取，節省人力成本。
> - 支持 SPID 認證，簡化用戶體驗。
> - 提供詳細的 API 文檔，易於集成。

> [!danger] 缺點
> - 需遵守 SISTER 端口的使用條款，存在法律風險。
> - 可能會受到訪問限制，影響數據提取的穩定性。

> [!warning] 注意事項
> - 使用者需自行遵守 SISTER 端口的使用條款。
> - 可能會受到 SISTER 端口的訪問限制影響。

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
> - **Keep-alive** — la sessione viene mantenuta attiva con un light keep-alive ogni

## 延伸閱讀

相關概念：[[自動化數據提取]] · [[REST API]] · [[無頭瀏覽器]]

[GitHub](https://github.com/zornade/visura-api)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，475 stars
