---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local SOCKS5 proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 768
stars_per_day: 128
forks: 14
open_issues: 5
created: 2026-03-04
first_seen: 2026-03-10
week: "2026-W11"
category: "基礎設施"
release_tag: "v1.0.4"
status: to-review
tags:
  - github
  - 基礎設施
  - python
---

# tg-ws-proxy

**768** stars · **128** stars/天 · 建立 6 天前 · Python · MIT

> [!summary] 一句話摘要
> 透過本地 SOCKS5 代理伺服器加速 Telegram 的加載速度。

## 專案簡介

這個專案提供了一個本地 SOCKS5 代理，能夠透過 WebSocket 連接來加速 Telegram 的加載和下載。它使用 Python 實作，能夠有效地重定向 Telegram 的流量，改善使用者體驗。與其他加速工具相比，這個代理專注於 Telegram 的特定需求，提供更針對性的解決方案。值得一試，特別是對於經常使用 Telegram 的用戶。

## 重點功能

- 本地 SOCKS5 代理，能夠加速 Telegram 的加載和下載。
- 自動切換到直接 TCP 連接，確保連接穩定性。
- 簡單的安裝和配置過程，讓用戶快速上手。

## 快速開始

下載並安裝 TgWsProxy.exe。,啟動代理並配置 Telegram Desktop 連接。

## 為什麼值得關注

> [!tip] 爆紅原因
> Telegram 用戶對於加載速度的需求不斷增加，這個工具正好滿足了這一需求。作者的技術背景使得這個工具在性能上有了保障。

## 適合誰使用

**目標受眾**：Telegram 用戶，特別是需要提高使用體驗的使用者。

> [!example] 使用場景
> - 用戶用它來加速 Telegram 的文件下載，因為能夠更快地接收大檔案。
> - 學生用它來提高 Telegram 上的訊息加載速度，因為能更快地參與討論。
> - 團隊用它來改善 Telegram 群組的使用體驗，因為能減少延遲和卡頓。

> [!warning] 注意事項
> 僅支援 Telegram Desktop，移動端可能無法使用。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| 語言 | Python |
| 授權 | MIT |
| Stars | 768 |
| Forks | 14 |
| Issues | 5 |
| 建立日期 | 2026-03-04 |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Flowseal](https://github.com/Flowseal) | 19 |
> | [@Copilot](https://github.com/Copilot) | 2 |

**最新版本**：v1.0.4 — TG WS Proxy v1.0.4 (2026-03-10)

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
> При первом запуске откроется окно с инструкцией по подключению Telegram Desktop. Приложение сворачивается в системный трей.
> 
> **Меню трея:**
> - **Открыть в Telegram** — автоматически настроить прокси через `tg://socks` ссылку
> - **Перезапустить прокси** — перезапуск без выхода из приложения
> - **Настройки...** — GUI-редактор конфигурации
> - **Открыть логи** — открыть файл логов
> - **Выход*

## 延伸閱讀

相關概念：#代理伺服器 · #WebSocket · #即時通訊

[GitHub](https://github.com/Flowseal/tg-ws-proxy)

---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，768 stars
