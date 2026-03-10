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
forks: 15
open_issues: 4
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
release_tag: "v1.0.4"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "tg-ws-proxy"
  - "Flowseal/tg-ws-proxy"
  - "透過 SOCKS5 代理加速 Telegram Desktop 的連接，改善載入速度。"
---

# tg-ws-proxy

**783** stars · **131** stars/天 · 建立 6 天前 · Python · MIT

`v1.0.4`

> [!summary] 一句話摘要
> 透過 SOCKS5 代理加速 Telegram Desktop 的連接，改善載入速度。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (131 stars/day)
> **適合** 希望提升 Telegram Desktop 使用體驗的普通用戶和開發者。
> **一句話重點** 這個專案的自動切換功能讓 Telegram 的使用體驗更為流暢，特別是在不穩定的網路環境中。

> [!abstract] 核心創新
> 自動切換到直接 TCP 連接的功能，確保在 WebSocket 不可用時仍能保持連接。

## 專案簡介

這個專案提供了一個本地 SOCKS5 代理伺服器，能夠將 Telegram Desktop 的流量透過 WebSocket 轉發到指定的伺服器，從而部分提升 Telegram 的使用體驗。具體流程是，Telegram Desktop 透過 SOCKS5 代理連接到本地伺服器，然後該伺服器再透過 WebSocket 連接到 Telegram 的數據中心。技術上，它使用 Python 實作，並依賴 WebSocket 和 MTProto 協議來進行數據傳輸。與其他 Telegram 代理工具相比，這個專案的特點在於它能夠自動切換到直接 TCP 連接，當 WebSocket 不可用時，這在連接不穩定的情況下特別有用。使用者可以輕鬆地透過系統托盤菜單來管理代理設定，並且支援詳細的日誌記錄。儘管這個專案在穩定性上已經達到 v1.0.4，但仍然需要注意其對於特定 Telegram 數據中心的依賴。對於需要穩定連接的使用者，這個工具非常適合，但在高流量環境下可能會遇到性能瓶頸。建議在低延遲的網路環境中使用，以獲得最佳效果。

**技術棧**：`Python 3.8` · `WebSocket`

## 重點功能

- 本地 SOCKS5 代理 — 在 `127.0.0.1:1080` 上運行，支持 Telegram Desktop 的流量轉發。
- WebSocket 連接 — 自動建立到 Telegram 數據中心的 WebSocket 連接，提升數據傳輸速度。
- 自動切換 TCP 連接 — 當 WebSocket 不可用時，自動切換到直接 TCP 連接，確保連接穩定性。
- 詳細日誌記錄 — 支持 `-v` 參數啟用詳細日誌，方便排查問題。
- 系統托盤管理 — 提供 GUI 介面來管理代理設定，方便用戶操作。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 啟動代理
```bash
python proxy/tg_ws_proxy.py
```
3. 設定 Telegram 代理
```bash
在 Telegram 中添加 SOCKS5 代理，伺服器為 127.0.0.1，端口為 1080。
```

## 程式碼範例

```bash
python proxy/tg_ws_proxy.py --port 9050 --dc-ip 1:149.154.175.205 --dc-ip 2:149.154.167.220
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Flowseal 專注於 Telegram 相關的工具開發，這個專案正好切中需要加速 Telegram 使用體驗的需求。隨著 Telegram 用戶數量的增加，對於提升其性能的工具需求也隨之上升。這個專案的推出時間恰好在 Telegram 用戶面臨速度瓶頸的時期，因此引起了廣泛關注。

## 適合誰使用

**目標受眾**：希望提升 Telegram Desktop 使用體驗的普通用戶和開發者。

> [!example] 使用場景
> - 普通用戶用它來加速 Telegram Desktop 的載入速度，因為透過 SOCKS5 代理能夠減少延遲，提升使用體驗。
> - 開發者用它來測試 Telegram API 的性能，因為可以快速切換不同的數據中心，方便進行性能評估。
> - 網路管理員用它來監控 Telegram 的流量，因為可以透過詳細的日誌記錄來分析使用情況。

## 架構分析

這是一個單體應用，架構上包含一個本地 SOCKS5 代理伺服器。用戶輸入 → SOCKS5 代理 → WebSocket 連接 → Telegram 數據中心。關鍵技術決策包括使用 WebSocket 來提升數據傳輸速度，並在不穩定的情況下自動切換到 TCP 連接。專案目錄結構中，`proxy/tg_ws_proxy.py` 是主要的執行檔案。

## 優缺點分析

> [!success] 優點
> - 能夠顯著提升 Telegram 的載入速度，改善使用體驗。
> - 自動切換到 TCP 連接的功能，增加了連接的穩定性。
> - 提供詳細的日誌記錄，方便用戶排查問題。

> [!danger] 缺點
> - 需要手動設定 Telegram 的代理選項，對於新手用戶不夠友好。
> - 在高流量環境下可能會遇到性能瓶頸，影響使用體驗。
> - 僅支援 Telegram Desktop，無法用於其他應用。

> [!warning] 注意事項
> - 僅支援 Telegram Desktop，不適用於手機版 Telegram。
> - 需要手動設定 Telegram 的代理選項，對於新手用戶可能不夠友好。
> - 在高流量環境下可能會遇到性能瓶頸，影響使用體驗。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[Telegram--Telegram\|Telegram/Telegram]] | Telegram 官方客戶端本身不提供 SOCKS5 代理功能，而 tg-ws-proxy 專注於提升連接速度。 |
| [[LQX--Telegram-Proxy\|LQX/Telegram-Proxy]] | LQX 的 Telegram-Proxy 提供了類似的功能，但不支持自動切換到 TCP 連接，穩定性較差。 |

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

## 社群與生態

**社群活躍度**：社群活躍度中等，定期更新和維護。

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

相關概念：[[API 設計]] · [[網路協議]] · [[效能優化]]

相關專案：[[Telegram--Telegram|Telegram/Telegram]] · [[LQX--Telegram-Proxy|LQX/Telegram-Proxy]]

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
