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
first_seen: 2026-03-10
week: "2026-W11"
category: "Other"
release_tag: ""
status: to-review
tags:
  - github
  - other
  - python
---

# visura-api

**475** stars · **68** stars/天 · 建立 7 天前 · Python · GPL-3.0

> [!summary] 一句話摘要
> Servizio API per l'estrazione automatizzata di dati catastali dal portale SISTER

## 專案簡介

Servizio API per l'estrazione automatizzata di dati catastali dal portale SISTER

## 為什麼值得關注

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | Python |
| 授權 | GPL-3.0 |
| Stars | 475 |
| Forks | 61 |
| Issues | 0 |
| 建立日期 | 2026-03-03 |

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
> Visura API permette di interrogare i dati catastali italian

## 延伸閱讀

[GitHub](https://github.com/zornade/visura-api)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，475 stars
