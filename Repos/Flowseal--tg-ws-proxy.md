---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local SOCKS5 proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 777
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
  - "提供 Telegram 的 SOCKS5 代理，幫助加速連線。"
---

# tg-ws-proxy

**777** stars · **130** stars/天 · 建立 6 天前 · Python · MIT

`v1.0.4` `easy-install`

> [!summary] 一句話摘要
> 提供 Telegram 的 SOCKS5 代理，幫助加速連線。

> [!abstract] 核心創新
> 專為 Telegram 設計的 SOCKS5 代理，能夠提升連線速度。

## 專案簡介

這個專案提供一個本地的 SOCKS5 代理伺服器，專門用於 Telegram Desktop，能夠透過 WebSocket 連接來加速 Telegram 的加載速度。它使用 Python 開發，並能夠自動切換連接方式以確保穩定性。與其他代理工具相比，tg-ws-proxy 專注於 Telegram 的優化，能夠有效提升檔案下載和訊息加載的速度。實際使用中，這個工具能夠顯著改善 Telegram 的使用體驗，但仍需注意其對於不同網路環境的適應性。這個專案適合需要提升 Telegram 使用效率的用戶。

**技術棧**：`Python`

## 重點功能

- 提供本地 SOCKS5 代理，方便 Telegram 使用。
- 自動切換連接方式以確保穩定性。
- 支援 Windows 和 Linux 平台。
- 簡單的 GUI 設定，方便用戶操作。
- 詳細的日誌記錄功能，便於故障排除。

## 快速開始

1. 下載 Windows 執行檔
```bash
前往 https://github.com/Flowseal/tg-ws-proxy/releases
```
2. 啟動代理伺服器
```bash
python windows.py
```
3. 在 Telegram 中設定 SOCKS5 代理
```bash
右鍵點擊系統托盤圖示，選擇「打開 Telegram」
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 隨著 Telegram 使用者的增加，對於加速其連線的需求也隨之上升，作者 Flowseal 的背景使得這個專案能夠迅速獲得關注。特別是在某些地區，Telegram 的連線速度較慢，這個工具提供了一個有效的解決方案。

## 適合誰使用

**目標受眾**：需要提升 Telegram 使用效率的普通用戶和開發者。

> [!example] 使用場景
> - 普通用戶用它來加速 Telegram 的檔案下載，因為它能改善連線速度。
> - 開發者用它來測試 Telegram 應用的性能，因為它提供了 SOCKS5 代理功能。
> - 網路管理員用它來分析 Telegram 的流量，因為它能夠捕捉和轉發數據。

## 架構分析

專案架構簡單，使用 Python 建立本地 SOCKS5 代理，並透過 WebSocket 轉發流量。資料流為：Telegram Desktop → SOCKS5 代理 → WebSocket 伺服器 → Telegram 伺服器。

## 優缺點分析

> [!success] 優點
> - 簡單易用，快速提升 Telegram 使用效率。
> - 提供詳細的日誌記錄，便於故障排除。
> - 支援多平台，方便不同用戶使用。

> [!danger] 缺點
> - 僅限於 Telegram Desktop，無法應用於手機版。
> - 需要適當的網路設定，對某些用戶來說可能較為複雜。
> - 在特定網路環境下可能無法達到預期效果。

> [!warning] 注意事項
> - 僅支援 Telegram Desktop，對於手機版無法使用。
> - 需要適當的網路設定以確保代理正常運行。
> - 在某些網路環境下可能無法達到預期效果。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Shadowsocks | Shadowsocks 是通用的代理工具，並不專注於 Telegram 的優化。 |
| ProxyCap | ProxyCap 是一個更為複雜的代理管理工具，使用上較為繁瑣。 |

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

相關概念：[[SOCKS5 代理]] · [[WebSocket]] · [[網路加速]] · [[Telegram]]

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
