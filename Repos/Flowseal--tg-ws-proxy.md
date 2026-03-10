---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local SOCKS5 proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 776
stars_per_day: 129
forks: 14
open_issues: 4
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
category: "開發工具"
release_tag: "v1.0.4"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "tg-ws-proxy"
  - "Flowseal/tg-ws-proxy"
  - "提供 Telegram 的本地 SOCKS5 代理伺服器，幫助加速 Telegram 加載。"
---

# tg-ws-proxy

**776** stars · **129** stars/天 · 建立 6 天前 · Python · MIT

`v1.0.4` `easy-install`

> [!summary] 一句話摘要
> 提供 Telegram 的本地 SOCKS5 代理伺服器，幫助加速 Telegram 加載。

> [!abstract] 核心創新
> 專為 Telegram 設計的本地 SOCKS5 代理，提供加速功能。

## 專案簡介

這個專案是一個本地 SOCKS5 代理伺服器，專為 Telegram Desktop 設計，能夠透過 WebSocket 連接來加速 Telegram 的加載速度。它在本地啟動一個代理伺服器，並將流量轉發到 Telegram 的伺服器，從而提高文件下載和消息加載的效率。與其他代理工具相比，tg-ws-proxy 專注於 Telegram 的使用場景，提供了簡單的設置和使用方式。這個工具在加速 Telegram 使用上表現良好，但需要用戶手動配置 Telegram 的代理設定。總體來說，tg-ws-proxy 是一個針對 Telegram 用戶的實用工具，特別適合在網路環境不佳的情況下使用。

**技術棧**：`Python`

## 重點功能

- 啟動本地 SOCKS5 代理伺服器。
- 透過 WebSocket 連接加速 Telegram 流量。
- 支援多種配置選項，易於使用。
- 提供 GUI 設定介面，方便用戶操作。
- 支援多平台，包括 Windows 和 Linux。

## 快速開始

1. 下載 Windows 版本
```bash
前往 https://github.com/Flowseal/tg-ws-proxy/releases 下載 TgWsProxy.exe
```
2. 啟動代理伺服器
```bash
python proxy/tg_ws_proxy.py
```
3. 在 Telegram 中配置代理
```bash
右鍵點擊系統托盤圖示，選擇「打開 Telegram」
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 這個專案的開發者 Flowseal 專注於 Telegram 的使用需求，隨著越來越多的用戶在使用 Telegram，對於加速其使用體驗的需求也隨之上升，使得這個工具在短時間內受到關注。

## 適合誰使用

**目標受眾**：使用 Telegram 並希望提升使用體驗的用戶。

> [!example] 使用場景
> - Telegram 用戶 用它來 加速消息加載，因為它能夠透過代理伺服器提升速度。
> - 開發者 用它來 測試 Telegram 應用，因為它提供了簡單的本地代理設置。
> - 網路管理員 用它來 監控 Telegram 流量，因為它能夠捕獲和分析流量數據。

## 架構分析

本地代理伺服器架構，通過 SOCKS5 轉發流量，並透過 WebSocket 與 Telegram 的伺服器進行連接。資料流是 Telegram Desktop → SOCKS5 代理 → WebSocket 連接。

## 優缺點分析

> [!success] 優點
> - 專為 Telegram 設計，提供針對性加速。
> - 簡單易用的 GUI 設定介面。
> - 支援多平台，方便使用。

> [!danger] 缺點
> - 需要手動配置 Telegram 的代理設定。
> - 在某些網路環境中效果有限。
> - 可能會遇到連接不穩定的情況。

> [!warning] 注意事項
> - 需要手動配置 Telegram 的代理設定。
> - 對於某些網路環境可能無法完全加速。
> - 在使用過程中可能會遇到連接不穩定的情況。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Shadowsocks | Shadowsocks 是通用的 SOCKS5 代理，未專注於 Telegram 的加速。 |
| ProxyCap | ProxyCap 是一個商業工具，缺乏針對 Telegram 的專用功能。 |

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 14 |
| Open Issues | 4 |
| 最後推送 | 2026-03-10 |
| 建立日期 | 2026-03-04 |
| Repo 大小 | 78 KB |

> [!info]- 主要貢獻者
> | 貢獻者 | Commits |
> | --- | --- |
> | [@Flowseal](https://github.com/Flowseal) | 19 |
> | [@Copilot](https://github.com/Copilot) | 2 |

**最新版本**：v1.0.4 — TG WS Proxy v1.0.4 (2026-03-10)

## 社群與生態

**社群活躍度**：專案活躍，持續更新中。
**連結**：[文件](https://github.com/Flowseal/tg-ws-proxy)

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
> - **Выход** — остановить прокси и закрыть приложение
> 
> ## Установка из исходников
> 
> ```bash
> pip install -r requirements.txt
> ```
> 
> ### Windows (Tray-приложение)
> 
> ```bash
> python windows.py
> ```
> 
> ### Консольный режим
> 
> ```bash
> python proxy/tg_ws_proxy.py [--port PORT] [--dc-ip DC:IP ...] [-v]
> ```
> 
> **Аргументы:**
> 
> | Аргумент | По умолчанию | Описание |
> |---|---|---|
> | `--port` | `1080` | Порт SOCKS5-прокси |
> | `--dc-ip` | `2:149.154.167.220`, `4:149.154.167.220` | Целевой IP для DC (можно указать несколько раз) |
> | `-v`, `--verbose` | выкл. | Подробное логирование (DEBUG) |
> 
> **Примеры:**
> 
> ```bash
> # Стандартный запуск
> python proxy/tg_ws_proxy.py
> 
> # Другой порт и дополнительные DC
> python proxy/tg_ws_proxy.py --port 9050 --dc-ip 1:149.154.175.205 --dc-ip 2:149.154.167.220
> 
> # С подробным логированием
> python proxy/tg_ws_proxy.py -v
> ```
> 
> ## Настройка Telegram Desktop
> 
> ### Автоматически
> 
> ПКМ по иконке в трее → **«Открыть в Telegram»**
> 
> ### Вручную
> 
> 1. Telegram → **Настройки** → **Продвинутые настройки** → **Тип

## 延伸閱讀

相關概念：[[SOCKS5 代理]] · [[WebSocket]] · [[Telegram]] · [[網路加速]]

[GitHub](https://github.com/Flowseal/tg-ws-proxy)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Flowseal--tg-ws-proxy"
> SORT stars DESC
> LIMIT 8
> ```


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，768 stars
