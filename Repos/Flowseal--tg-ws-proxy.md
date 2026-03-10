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
category: "其他"
release_tag: "v1.0.4"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/其他"
  - "lang/python"
  - easy_install
aliases:
  - "tg-ws-proxy"
  - "Flowseal/tg-ws-proxy"
  - "提供 Telegram 的 SOCKS5 代理，幫助加速加載。"
---

# tg-ws-proxy

**776** stars · **129** stars/天 · 建立 6 天前 · Python · MIT

`v1.0.4` `easy-install`

> [!summary] 一句話摘要
> 提供 Telegram 的 SOCKS5 代理，幫助加速加載。

> [!abstract] 核心創新
> 提供專為 Telegram 設計的 SOCKS5 代理，能夠加速加載和下載。

## 專案簡介

這是一個本地的 SOCKS5 代理伺服器，專為 Telegram Desktop 設計，能夠透過 WebSocket 連接來加速 Telegram 的加載速度。它的工作原理是攔截 Telegram 的連接請求，並將流量重定向到指定的伺服器。與其他代理工具相比，tg-ws-proxy 專注於 Telegram 的使用場景，提供簡單的安裝和使用方式。雖然它能有效提升 Telegram 的性能，但仍然依賴於 Telegram 的伺服器狀態，可能在某些情況下無法完全解決加載問題。整體而言，這是一個針對 Telegram 用戶的實用工具，特別適合在網路環境不佳的情況下使用。

**技術棧**：`Python`

## 重點功能

- 提供本地 SOCKS5 代理，方便 Telegram 使用。
- 透過 WebSocket 連接加速 Telegram 的加載速度。
- 簡單的安裝和使用方式，適合普通用戶。
- 支援多種配置選項，靈活性高。
- 提供詳細的日誌功能，方便故障排除。

## 快速開始

1. 下載最新版本
```bash
前往 https://github.com/Flowseal/tg-ws-proxy/releases 下載 TgWsProxy.exe
```
2. 運行代理程式
```bash
python windows.py
```
3. 設定 Telegram 連接
```bash
右鍵點擊系統托盤圖示，選擇「打開 Telegram」
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Flowseal 在 Telegram 社群中有一定的影響力，這個專案切合了對 Telegram 加速的需求，特別是在某些地區網路不穩定的情況下。最近的更新也顯示出活躍的開發進度，吸引了更多使用者的注意。

## 適合誰使用

**目標受眾**：需要改善 Telegram 使用體驗的普通用戶和開發者。

> [!example] 使用場景
> - Telegram 用戶用它來加速檔案下載，因為它能透過代理提高速度。
> - 開發者用它來測試 Telegram 應用的連接性能，因為它提供了簡單的代理設定。
> - 網路管理員用它來優化 Telegram 的使用體驗，因為它能改善連接穩定性。

## 架構分析

這個專案由一個本地的 SOCKS5 代理伺服器組成，使用 Python 開發，能夠攔截 Telegram 的連接請求並重定向流量。使用者只需簡單的設定即可啟動代理服務。

## 優缺點分析

> [!success] 優點
> - 簡單易用，適合普通用戶。
> - 能有效改善 Telegram 的加載速度。
> - 提供詳細的日誌功能，方便故障排除。

> [!danger] 缺點
> - 僅限於 Telegram Desktop，無法用於其他應用。
> - 性能提升依賴於 Telegram 伺服器的狀態。
> - 在某些情況下，效果可能不明顯。

> [!warning] 注意事項
> - 僅支援 Telegram Desktop，對於手機版無法使用。
> - 性能提升依賴於 Telegram 伺服器的狀態。
> - 在某些網路環境下，效果可能不明顯。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Shadowsocks | Shadowsocks 是通用的 SOCKS5 代理，而 tg-ws-proxy 專注於 Telegram 的使用場景。 |
| V2Ray | V2Ray 提供更複雜的代理功能，而 tg-ws-proxy 更簡單易用。 |

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

相關概念：[[SOCKS5 代理]] · [[WebSocket]] · [[網路加速]] · [[Telegram]] · [[代理伺服器]]

[GitHub](https://github.com/Flowseal/tg-ws-proxy)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> LIST
> FROM "Repos"
> WHERE category = "其他" AND file.name != "Flowseal--tg-ws-proxy"
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
