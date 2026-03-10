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
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - 開發工具
  - python
---

# visura-api

**475** stars · **68** stars/天 · 建立 7 天前 · Python · GPL-3.0

`easy-install`

> [!summary] 一句話摘要
> 自動化從 SISTER 入口網站提取地籍數據的 API 服務。

> [!abstract] 核心創新
> 這個專案提供了一個專門針對地籍數據提取的自動化解決方案。

## 專案簡介

它讓使用者能夠自動從 SISTER 入口網站提取地籍資料，省去手動查詢的麻煩。這個服務使用 FastAPI 提供 RESTful API，並利用 Playwright 進行無頭瀏覽器操作。與其他資料提取工具相比，Visura API 專注於地籍數據的自動化提取，並且提供即時的 API 查詢功能。這是一個實用的工具，特別適合需要頻繁查詢地籍資料的使用者。

**技術棧**：`Python` · `Dockerfile`

## 重點功能

- 提供 RESTful API 方便整合。
- 使用 Playwright 實現無頭瀏覽器操作，穩定性高。
- 支持多種查詢功能，滿足不同需求。

## 快速開始

1. 安裝依賴
```bash
pip install fastapi playwright
```
2. 啟動服務
```bash
uvicorn main:app --reload
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 專案作者在 Python 和自動化領域有豐富經驗，這個工具滿足了對於地籍數據自動化提取的需求。隨著數據驅動決策的普及，這類工具的需求也在增加。

## 適合誰使用

**目標受眾**：需要自動化地籍數據提取的開發者和專業人士。

> [!example] 使用場景
> - 地產開發商 用它來 自動提取地籍資料，因為 這樣能節省大量時間和人力成本。
> - 法律顧問 用它來 獲取土地所有權資訊，因為 這能幫助他們更快地完成案件調查。
> - 政府機構 用它來 監控地籍數據變化，因為 這有助於提升公共服務的效率。

> [!warning] 注意事項
> 使用自動化可能違反 SISTER 的服務條款。

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
> Visura API permette di interrogare i dati catastali italian

## 延伸閱讀

相關概念：[[自動化數據提取]] · [[RESTful API]] · [[無頭瀏覽器]]

[GitHub](https://github.com/zornade/visura-api)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，475 stars
