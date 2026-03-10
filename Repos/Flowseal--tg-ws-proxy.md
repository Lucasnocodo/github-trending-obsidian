---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
stars: 766
forks: 14
created: 2026-03-04
first_seen: 2026-03-10
category: "其他"
status: to-review
tags:
  - github
  - 其他
  - python
---

# tg-ws-proxy

> [!summary] 一句話摘要
> 本地SOCKS5代理伺服器，用於部分繞過Telegram加載問題。

## 專案簡介

這是一個本地的SOCKS5代理伺服器，專為Telegram Desktop設計，能夠通過WebSocket連接來加速Telegram的加載速度。它解決了用戶在使用Telegram時遇到的加載緩慢問題，特別是在網絡不穩定的情況下。獨特之處在於其簡單易用的設置和高效的性能。

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著Telegram用戶數量的增加，許多人面臨加載速度慢的問題，這個專案因此受到廣泛關注。

**766** stars · **128** stars/天 · 建立 6 天前

## 適合誰使用

**目標受眾**：適合Telegram用戶和開發者。

> [!example] 使用場景
> - 用戶在網絡不穩定時加速Telegram加載。
> - 開發者測試Telegram機器人時提高效率。
> - 在受限網絡環境中使用Telegram。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | Python |
| 授權 | MIT |
| Stars | 766 |
| Forks | 14 |
| Issues | 5 |
| 建立日期 | 2026-03-04 |

### 主要貢獻者

| 貢獻者 | Commits |
| --- | --- |
| [@Flowseal](https://github.com/Flowseal) | 19 |
| [@Copilot](https://github.com/Copilot) | 2 |

### 最新版本

**v1.0.4** — TG WS Proxy v1.0.4 (2026-03-10)

## README 摘錄

> [!info]- 展開查看原文 README
> # TG WS Proxy
> 
> Локальный SOCKS5-прокси для Telegram Desktop, который перенаправляет трафик через WebSocket-соединения к указанным серверам, помогая частично ускорить работу Telegram.  
>   
> **Ожидаемый результат аналогичен прокидыванию hosts для Web Telegram**: ускорение загрузки и скачивания файлов, загрузки сообщений и части медиа.
> 
> ## Как это работает
> 
> ```
> Telegram Desktop → SOCKS5 (127.0.0.1:1080) → TG WS Proxy → WSS (kws*.web.telegram.org) → Telegram DC
> ```
> 
> 1. Приложение поднимает локальный SOCKS5-прокси на `127.0.0.1:1080`
> 2. Перехватывает подключения к IP-адресам Telegram
> 3. Извлекает DC ID из MTProto obfuscation init-пакета
> 4. Устанавливает WebSocket (TLS) соединение к соответствующему DC через домены `kws{N}.web.telegram.org`
> 5. Если WS недоступен (302 redirect) — автоматически переключается на прямое TCP-соединение
> 
> ## 🚀 Быстрый старт
> 
> ### Windows
> Перейдите на [страницу релизов](https://github.com/Flowseal/tg-ws-proxy/releases) и скачайте **`TgWsProxy.exe`**. Он собирается автоматически через [Github Actions](https://github.com/Flowseal/tg-ws-proxy/actions) из открытого исходного кода.
> 
> При первом запуске откроется окно с инструкцией по подключению Telegram Desktop. Прило

## 相關概念

[[代理伺服器]] · [[WebSocket]] · [[即時通訊]]

---

> [!question] 個人筆記
> _在此寫下你的想法、使用心得..._

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，766 stars
