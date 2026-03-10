---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local SOCKS5 proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 783
stars_per_day: 131
forks: 14
open_issues: 4
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
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
  - "提供本地 SOCKS5 代理以加速 Telegram 加載。"
---

# tg-ws-proxy

**783** stars · **131** stars/天 · 建立 6 天前 · Python · MIT

`v1.0.4` `easy-install`

> [!summary] 一句話摘要
> 提供本地 SOCKS5 代理以加速 Telegram 加載。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (131 stars/day)
> **適合** 需要加速 Telegram 使用體驗的普通用戶和開發者。
> **一句話重點** tg-ws-proxy 專注於 Telegram 的性能優化，讓用戶能夠更流暢地使用這個即時通訊工具。

> [!abstract] 核心創新
> tg-ws-proxy 提供了一個專門針對 Telegram 的 SOCKS5 代理解決方案，顯著提升了使用體驗。

## 專案簡介

tg-ws-proxy 是一個本地 SOCKS5 代理伺服器，旨在透過 WebSocket 連接加速 Telegram 的加載速度。使用者只需在本地啟動代理，然後配置 Telegram 使用該代理，即可實現更快的加載和下載速度。該工具使用 Python 實作，並提供簡單的命令行介面，使用者可以透過 `python proxy/tg_ws_proxy.py` 啟動代理，並可選擇性地指定端口和目標 DC IP。與傳統的代理工具相比，tg-ws-proxy 專注於 Telegram 的優化，並能自動切換到直接 TCP 連接以確保穩定性。這個專案目前處於穩定版本，適合需要提升 Telegram 使用體驗的用戶。對於不使用 Telegram 的用戶，這個工具則沒有實際用途。

**技術棧**：`Python`

## 重點功能

- 本地 SOCKS5 代理 — 在 `127.0.0.1:1080` 上啟動代理，簡化 Telegram 配置。
- WebSocket 連接 — 透過 WebSocket 加速 Telegram 的數據傳輸。
- 自動切換 — 當 WebSocket 不可用時自動切換到直接 TCP 連接。
- 簡單配置 — 提供 GUI 和命令行兩種配置方式，方便使用者設置。
- 詳細日誌 — 提供日誌功能，方便用戶檢查代理狀態。

## 快速開始

1. 下載可執行檔
```bash
前往 https://github.com/Flowseal/tg-ws-proxy/releases 下載 TgWsProxy.exe
```
2. 啟動代理
```bash
python windows.py
```
3. 配置 Telegram 使用代理
```bash
在 Telegram 中設置 SOCKS5 代理，伺服器為 127.0.0.1，端口為 1080。
```

## 程式碼範例

```bash
python proxy/tg_ws_proxy.py --port 9050 --dc-ip 1:149.154.175.205
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Flowseal 專注於 Telegram 的性能優化，滿足了用戶對於加速 Telegram 使用的需求。隨著 Telegram 用戶的增加，對於加速工具的需求也隨之上升，使得 tg-ws-proxy 受到關注。

## 適合誰使用

**目標受眾**：需要加速 Telegram 使用體驗的普通用戶和開發者。

> [!example] 使用場景
> - Telegram 用戶用它來加速文件下載，因為它能顯著減少下載時間。
> - 開發者用它來測試 Telegram 應用的性能，因為它提供了簡單的代理配置。
> - 安全專家用它來分析 Telegram 流量，因為它能夠捕獲和重定向流量。

## 架構分析

tg-ws-proxy 是一個單體架構的 CLI 工具。用戶輸入 → 啟動代理 → 透過 WebSocket 傳輸數據。核心技術決策是使用 Python 實現簡單的代理功能，專案目錄結構包含 `proxy` 目錄和主要的 Python 腳本。

## 優缺點分析

> [!success] 優點
> - 簡單易用的代理設置，適合普通用戶。
> - 能夠顯著提升 Telegram 的加載速度，改善使用體驗。
> - 提供詳細的日誌功能，方便用戶檢查狀態。

> [!danger] 缺點
> - 僅限於 Telegram Desktop，對於其他應用無法使用。
> - 需要手動配置，對於新手用戶可能較為困難。
> - 在某些網路環境下可能不穩定。

> [!warning] 注意事項
> - 僅支援 Telegram Desktop，對於手機版不適用。
> - 需要手動配置 Telegram 使用代理，對於新手用戶可能較為複雜。
> - 在某些網路環境下，可能無法穩定運行。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Shadowsocks | Shadowsocks 是一個通用的 SOCKS5 代理工具，而 tg-ws-proxy 專注於 Telegram 的性能優化。 |
| ProxyCap | ProxyCap 提供更廣泛的應用代理功能，而 tg-ws-proxy 專注於 Telegram 的加速。 |

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
> 1. Telegram → **Настройки** → **Продвинутые настройки** → **Тип подключения** → **Прокси**
> 2. Добавить прокси:
>    - **Тип:** SOCKS5
>    - **Сервер:** `127.0.0.1`
>    - **Порт:** `1080`
>    - **Логин/Пароль:** оставить пустыми
> 
> ## Конфигурация
> 
> Tray-приложение хранит данные в `%APPDATA%/TgWsProxy`:
> 
> ```json
> {
>   "port": 1080,
>   "dc_ip": [
>     "2:149.154.167.220",
>     "4:149.154.167.220"
>   ],
>   "verbose": false
> }
> ```
> 
> ## Автоматическая сборка
> 
> Проект содержит спецификацию PyInstaller ([`windows.spec`](packaging/windows.spec)) и GitHub Actions workflow ([`.github/workflows/build.yml`](.github/workflows/build.yml)) для автоматической сборки.
> 
> ```bash
> pip install pyinstaller
> pyinstaller packaging/windows.spec
> ```
> 
> ## Лицензия
> 
> [MIT License](LICENSE)

## 延伸閱讀

相關概念：[[即時通訊]] · [[代理伺服器]] · [[網路優化]]

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

> [!question]+ 快速評估（第一次看時填寫）
> _填寫後更新 frontmatter 的 `my_rating` 和 `status` 欄位_
> 
> **跟我的工作相關嗎？** 是 / 否 / 間接相關
> **值得花時間試用嗎？** 是 / 以後再說 / 不需要
> **第一印象**：_一句話_

> [!success]- 深度評估（試用後填寫）
> 
> | 項目 | 分數 (1-5) | 備註 |
> | --- | :---: | --- |
> | 實用性 | /5 | |
> | 技術新穎性 | /5 | |
> | 文件品質 | /5 | |
> | 社群活躍度 | /5 | |
> | 上手難度 | /5 | 1=很難 5=很簡單 |
> 
> **成熟度**：早期 / 可用 / 穩定
> **總評**：_整體評價、跟其他工具的比較、推薦給誰..._

### 試用記錄

> [!example]- 試用 #1
> 試用日期 :: 
> 試用版本 :: 
> 安裝過程 :: _順利 / 遇到問題（描述）_
> 實際效果 :: _達到預期 / 不如預期（原因）_
> 決定 :: _繼續使用 / 暫時擱置 / 放棄（原因）_

> [!question]- 待研究的問題
> _記下看完後還沒有答案的問題，未來回來補充_
> 
> - [ ] 

### 採用判斷

> [!tip]- 什麼時候該用 / 不該用
> **該用的情況**：
> - 
> 
> **不該用的情況**：
> - 

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._
_重點：寫下你的主觀判斷（為什麼好/不好），而不只是功能列表_

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，768 stars
