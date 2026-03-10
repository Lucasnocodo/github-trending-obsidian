---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local SOCKS5 proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 775
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
  - 開發工具
  - python
aliases:
  - "tg-ws-proxy"
  - "Flowseal/tg-ws-proxy"
  - "透過 SOCKS5 代理伺服器部分繞過 Telegram 的加載問題，提升使用體驗。"
---

# tg-ws-proxy

**775** stars · **129** stars/天 · 建立 6 天前 · Python · MIT

`v1.0.4` `easy-install`

> [!summary] 一句話摘要
> 透過 SOCKS5 代理伺服器部分繞過 Telegram 的加載問題，提升使用體驗。

> [!abstract] 核心創新
> 透過 WebSocket 連接優化 Telegram 的加載速度，提供更流暢的使用體驗。

## 專案簡介

這個專案建立了一個本地的 SOCKS5 代理伺服器，將 Telegram 的流量通過 WebSocket 連接轉發，從而加速 Telegram 的加載和下載速度。它利用 MTProto 協議的初始化包來提取數據中心 ID，並根據需要自動切換到 TCP 連接，確保連接的穩定性。與其他代理工具相比，它專注於 Telegram 的特定需求，提供了更針對性的性能優化。使用者反映，這個工具能顯著減少消息加載時間，但仍需注意其在某些網絡環境下的兼容性。整體來說，這是一個值得嘗試的工具，特別是對於經常使用 Telegram 的用戶來說，能夠在一定程度上提升使用體驗。

**技術棧**：`Python`

## 重點功能

- 本地 SOCKS5 代理伺服器，簡單易用。
- 自動提取 Telegram 數據中心 ID，確保連接的準確性。
- 支持 WebSocket 和 TCP 連接的自動切換。
- 提供詳細的日誌記錄功能，方便排查問題。
- GUI 設定界面，簡化配置流程。

## 快速開始

1. 下載最新的可執行檔
```bash
從 GitHub Releases 下載 TgWsProxy.exe
```
2. 啟動代理伺服器
```bash
運行 TgWsProxy.exe
```
3. 在 Telegram 中設置 SOCKS5 代理
```bash
使用 tg://socks 連結
```

## 為什麼值得關注

> [!tip] 爆紅原因
> Flowseal 是一位活躍的開發者，專注於 Telegram 相關的工具，這個專案正好切中了 Telegram 用戶對於加載速度的需求。隨著 Telegram 用戶數量的增加，對於提升使用體驗的需求也隨之上升，這使得這個專案在短時間內獲得了關注。

## 適合誰使用

**目標受眾**：Telegram 用戶和開發者，特別是需要提升應用性能的人。

> [!example] 使用場景
> - 用戶用它來加速 Telegram 的消息加載，因為這樣可以更快地查看最新消息。
> - 開發者用它來測試 Telegram 應用的性能，因為它能提供更穩定的網絡環境。
> - 系統管理員用它來優化公司內部 Telegram 溝通，因為它能減少延遲，提高工作效率。

## 架構分析

本地 SOCKS5 代理伺服器架構，通過 WebSocket 連接 Telegram 的數據中心，實現流量的轉發和加速。

## 優缺點分析

> [!success] 優點
> - 簡單易用，快速上手。
> - 針對 Telegram 的特定需求進行優化。
> - 提供詳細的日誌功能，方便問題排查。

> [!danger] 缺點
> - 僅限於 Telegram Desktop 使用。
> - 在某些網絡環境下可能不穩定。
> - 需要手動設置代理，對新手不太友好。

> [!warning] 注意事項
> - 可能在某些網絡環境下無法正常工作。
> - 僅支持 Telegram Desktop 客戶端。
> - 需要手動配置 Telegram 的代理設置。

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

相關概念：[[SOCKS5 代理]] · [[WebSocket]] · [[MTProto 協議]]

[GitHub](https://github.com/Flowseal/tg-ws-proxy)


---

## 個人筆記

> [!question]+ 我的想法
> _在此寫下你的想法、使用心得、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，768 stars
