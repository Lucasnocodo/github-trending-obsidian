---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local SOCKS5 proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 778
stars_per_day: 130
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
  - "提供本地 SOCKS5 代理伺服器，幫助 Telegram 加速載入。"
---

# tg-ws-proxy

**778** stars · **130** stars/天 · 建立 6 天前 · Python · MIT

`v1.0.4` `easy-install`

> [!summary] 一句話摘要
> 提供本地 SOCKS5 代理伺服器，幫助 Telegram 加速載入。

> [!abstract] 核心創新
> 專為 Telegram 設計的本地 SOCKS5 代理解決方案。

## 專案簡介

它讓 Telegram 使用者能夠透過本地 SOCKS5 代理加速訊息和媒體的載入。這個工具使用 Python 實作，透過 WebSocket 連接來轉發流量，從而改善 Telegram 的使用體驗。與其他代理工具相比，tg-ws-proxy 專注於 Telegram 的特定需求，提供了簡單的設置和使用介面。實際使用中，使用者可以顯著減少載入時間，特別是在網路不穩定的情況下。這個專案適合希望提升 Telegram 使用效率的用戶。

**技術棧**：`Python`

## 重點功能

- 本地 SOCKS5 代理伺服器，簡單易用。
- 透過 WebSocket 轉發 Telegram 流量，提升速度。
- 支援多種配置選項，靈活應對不同需求。
- 提供 GUI 設定介面，方便用戶操作。
- 詳細的日誌功能，便於故障排除。

## 快速開始

1. 下載最新版本的執行檔
```bash
從 releases 頁面下載 TgWsProxy.exe
```
2. 啟動代理伺服器
```bash
python windows.py
```
3. 設定 Telegram 使用 SOCKS5 代理
```bash
右鍵點擊系統托盤圖示，選擇「打開 Telegram」
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 在 Telegram 使用者中，對於加速載入的需求日益增加，特別是面對網路延遲的挑戰。作者 Flowseal 的開源背景也促進了這個專案的關注。

## 適合誰使用

**目標受眾**：希望提升 Telegram 使用效率的普通用戶和開發者。

> [!example] 使用場景
> - 普通用戶用它來加速 Telegram 的載入，因為可以減少等待時間。
> - 開發者用它來測試 Telegram 應用，因為能夠輕鬆設置代理。
> - 技術愛好者用它來探索 Telegram 的網路行為，因為提供了詳細的日誌功能。

## 架構分析

專案架構簡單，透過 Python 實作本地 SOCKS5 代理，並將流量轉發至 Telegram 的 WebSocket 伺服器。

## 優缺點分析

> [!success] 優點
> - 簡單易用，快速設置。
> - 專為 Telegram 優化，提升使用體驗。
> - 提供詳細的日誌，方便故障排除。

> [!danger] 缺點
> - 僅支援 Telegram Desktop，無法擴展至其他應用。
> - 需要手動設定，對新手不友好。
> - 某些功能在 Windows 上可能不穩定。

> [!warning] 注意事項
> - 僅支援 Telegram Desktop，對於行動版無法使用。
> - 需要手動設定 Telegram 以使用代理。
> - 某些功能可能在 Windows 上表現不佳。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Shadowsocks | Shadowsocks 是通用的代理工具，無法針對 Telegram 進行優化。 |
| ProxyCap | ProxyCap 是商業工具，使用上較為複雜且需付費。 |

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

相關概念：[[SOCKS5]] · [[WebSocket]] · [[網路代理]] · [[即時通訊]]

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
