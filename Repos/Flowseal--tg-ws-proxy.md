---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local SOCKS5 proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 785
stars_per_day: 131
forks: 15
open_issues: 4
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
release_tag: "v1.0.4"
install_complexity: "easy"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "透過 SOCKS5 代理伺服器加速 Telegram 的載入速度。"
priority: medium
tags:
  - github
  - "category/開發工具"
  - "lang/python"
  - easy_install
aliases:
  - "tg-ws-proxy"
  - "Flowseal/tg-ws-proxy"
  - "透過 SOCKS5 代理伺服器加速 Telegram 的載入速度。"
---

# tg-ws-proxy

**785** stars · **131** stars/天 · 建立 6 天前 · Python · MIT

`v1.0.4` `easy-install`

> [!summary] 一句話摘要
> 透過 SOCKS5 代理伺服器加速 Telegram 的載入速度。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (131 stars/day)
> **適合** 希望提升 Telegram 使用體驗的普通用戶和開發者。
> **一句話重點** 這個專案專注於 Telegram 的特定需求，提供了一個簡單有效的加速方案。

> [!abstract] 核心創新
> 這個專案提供了一個專門針對 Telegram 的 SOCKS5 代理解決方案，能夠自動處理不同的連接方式。

## 專案簡介

這個專案提供一個本地的 SOCKS5 代理伺服器，能夠將 Telegram Desktop 的流量透過 WebSocket 轉發到指定的伺服器，從而部分加速 Telegram 的使用體驗。具體流程是：Telegram Desktop 透過 SOCKS5 代理連接到本地伺服器，然後該伺服器會根據 MTProto 的初始化包提取 DC ID，並建立到 Telegram 數據中心的 WebSocket 連接。如果 WebSocket 連接失敗，則會自動切換到直接的 TCP 連接。這個工具使用 Python 實作，並且提供了簡單的安裝和使用方式，支持 Windows 系統的托盤應用和控制台模式。與其他類似的代理工具相比，這個專案專注於 Telegram 的特定需求，能夠自動處理不同的連接方式，並提供詳細的日誌功能。實際使用中，這個工具能顯著提高 Telegram 的消息和媒體載入速度，但需要注意的是，這個專案目前仍在開發中，穩定性可能會有所欠缺。對於小型團隊或個人使用者來說，這是一個值得一試的工具，尤其是在需要提升 Telegram 使用體驗的情況下。建議在需要加速 Telegram 使用時使用，但如果對穩定性有較高要求，則可能需要考慮其他解決方案。

**技術棧**：`Python`

## 重點功能

- 本地 SOCKS5 代理 — 在 `127.0.0.1:1080` 提供 SOCKS5 代理服務。
- WebSocket 轉發 — 自動將流量轉發至 Telegram 的 WebSocket 伺服器以加速連接。
- 自動切換連接 — 當 WebSocket 連接失敗時，自動切換到 TCP 連接。
- 詳細日誌功能 — 支持 `-v` 參數啟用詳細日誌，便於故障排除。
- 簡單的安裝和配置 — 透過 `pip install` 安裝，並提供 GUI 設定界面。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 啟動 Windows 托盤應用
```bash
python windows.py
```
3. 啟動控制台模式
```bash
python proxy/tg_ws_proxy.py --port 1080
```

## 程式碼範例

```bash
# 標準啟動
python proxy/tg_ws_proxy.py

# 指定端口和數據中心
python proxy/tg_ws_proxy.py --port 9050 --dc-ip 1:149.154.175.205 --dc-ip 2:149.154.167.220

# 詳細日誌啟動
python proxy/tg_ws_proxy.py -v
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Flowseal 專注於 Telegram 的使用需求，這個工具正好解決了用戶在使用 Telegram 時遇到的速度問題。隨著 Telegram 用戶數量的增加，對於加速工具的需求也隨之上升。這個專案的推出正好切中了這個需求，因此受到關注。

## 適合誰使用

**目標受眾**：希望提升 Telegram 使用體驗的普通用戶和開發者。

> [!example] 使用場景
> - 普通用戶用它來加速 Telegram 的消息載入速度，因為使用 SOCKS5 代理能夠顯著減少延遲。
> - 開發者用它來測試 Telegram 應用的性能，因為能夠快速切換不同的數據中心連接，方便進行性能調整。
> - 系統管理員用它來優化公司內部使用 Telegram 的網路環境，因為能夠自動處理連接問題，減少手動配置的麻煩。

## 架構分析

這是一個單體應用，使用 Python 實作。用戶輸入 → SOCKS5 代理 → TG WS Proxy → WebSocket 伺服器 → Telegram DC。主要技術決策是使用 WebSocket 來加速連接，並在失敗時自動切換到 TCP。專案目錄中包含了主要的 Python 檔案和配置文件。

## 優缺點分析

> [!success] 優點
> - 能夠顯著提高 Telegram 的載入速度，特別是在網路不穩定的情況下。
> - 提供了簡單的 GUI 設定界面，方便用戶配置。
> - 支持多種數據中心的連接，靈活性高。

> [!danger] 缺點
> - 目前僅支持 Windows，對於其他操作系統的支持有限。
> - 需要用戶手動配置 Telegram 的代理設定，對新手不太友好。
> - 仍在開發中，可能會遇到穩定性問題。

> [!warning] 注意事項
> - 目前僅支持 Windows 系統。
> - 需要手動配置 Telegram 的 SOCKS5 代理設定。
> - 在某些網路環境下可能無法穩定連接。
> - 仍在開發中，可能存在未解決的 bug。

## 技術細節

| 欄位 | 值 |
| --- | --- |
| Forks | 15 |
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

[GitHub](https://github.com/Flowseal/tg-ws-proxy)

## 相關收錄

> [!note]- 同分類的其他專案
> ```dataview
> TABLE stars, install_complexity AS "難度", status
> FROM "Repos"
> WHERE category = "開發工具" AND file.name != "Flowseal--tg-ws-proxy"
> SORT stars DESC
> LIMIT 8
> ```

> [!note]- 同週收錄
> ```dataview
> TABLE category AS "分類", stars, stars_per_day AS "stars/天"
> FROM "Repos"
> WHERE week = "2026-W11" AND file.name != "Flowseal--tg-ws-proxy"
> SORT stars DESC
> ```

---

## 個人筆記

> [!question]+ 快速評估（30 秒填完）
> 
> 相關性:: 未評估
> 印象:: _一句話_
> 行動:: 不需要
> 
> _相關性選項：直接相關 / 間接相關 / 不相關 / 未評估_
> _行動選項：立刻試用 / 加入待辦 / 持續觀察 / 不需要_

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
