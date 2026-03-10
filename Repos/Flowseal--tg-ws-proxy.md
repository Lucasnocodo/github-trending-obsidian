---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local SOCKS5 proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 782
stars_per_day: 130
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
  - "透過 SOCKS5 代理加速 Telegram 的加載速度。"
---

# tg-ws-proxy

**782** stars · **130** stars/天 · 建立 6 天前 · Python · MIT

`v1.0.4` `easy-install`

> [!summary] 一句話摘要
> 透過 SOCKS5 代理加速 Telegram 的加載速度。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (130 stars/day)
> **適合** 需要提升 Telegram 使用體驗的普通用戶和開發者。
> **一句話重點** tg-ws-proxy 提供了一個簡單有效的解決方案，讓 Telegram 使用者能夠在不穩定的網路環境中獲得更好的體驗。

> [!abstract] 核心創新
> tg-ws-proxy 提供了一個簡單的 SOCKS5 代理解決方案，專注於提升 Telegram 的使用體驗。

## 專案簡介

tg-ws-proxy 是一個本地 SOCKS5 代理伺服器，旨在透過 WebSocket 連接加速 Telegram Desktop 的加載速度。使用者只需啟動代理，然後在 Telegram 中設置 SOCKS5 代理，即可享受更快的加載和下載速度。該工具使用 Python 編寫，並支援 Windows 和其他平台，能夠自動切換到直接 TCP 連接以確保穩定性。與其他代理工具相比，tg-ws-proxy 專注於 Telegram 的優化，提供了更簡單的設置和使用方式。使用者可以透過 `python proxy/tg_ws_proxy.py` 指令啟動代理，並可選擇性地設置端口和目標 DC IP。該工具在加速 Telegram 的加載速度上表現良好，但在某些情況下可能會受到 Telegram 伺服器的限制。這個專案目前處於穩定階段，適合需要提升 Telegram 使用體驗的個人用戶。建議在網路不穩定或速度較慢的情況下使用，但若對於隱私有高要求，則需謹慎考量。

**技術棧**：`Python`

## 重點功能

- 本地 SOCKS5 代理 — 提供本地代理服務，使用 `127.0.0.1:1080` 進行連接。
- 自動切換功能 — 在 WebSocket 連接失敗時自動切換到 TCP 連接，確保穩定性。
- 簡單的設置過程 — 只需啟動代理並在 Telegram 中設置 SOCKS5 代理即可使用。
- GUI 介面 — 提供系統托盤應用，方便用戶管理代理設置。
- 詳細的日誌功能 — 支援詳細的日誌記錄，方便故障排查。

## 快速開始

1. 下載釋出檔案
```bash
前往 https://github.com/Flowseal/tg-ws-proxy/releases 下載 TgWsProxy.exe
```
2. 啟動代理
```bash
python windows.py
```
3. 設置 Telegram 代理
```bash
在 Telegram 中設置 SOCKS5 代理，伺服器為 127.0.0.1，端口為 1080。
```

## 程式碼範例

```bash
python proxy/tg_ws_proxy.py
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Flowseal 專注於 Telegram 的性能優化，隨著使用者對於即時通訊工具的依賴增加，對於加速工具的需求也在上升。這個專案的推出正好滿足了這一需求，並且在 GitHub 上獲得了不錯的關注度。

## 適合誰使用

**目標受眾**：需要提升 Telegram 使用體驗的普通用戶和開發者。

> [!example] 使用場景
> - 普通用戶用它來加速 Telegram 的加載速度，因為在網路不穩定時能顯著提升使用體驗。
> - 開發者用它來測試 Telegram 應用的性能，因為能夠模擬不同的網路環境。
> - 安全研究人員用它來分析 Telegram 的網路流量，因為提供了 SOCKS5 代理的靈活性。

## 架構分析

該專案採用單體架構，使用者透過命令行啟動 SOCKS5 代理。用戶輸入 → 代理伺服器處理連接 → 輸出加速的 Telegram 數據流。核心技術決策包括使用 Python 以簡化開發，並提供 GUI 介面以提升使用者體驗。關鍵檔案包括 windows.py 和 proxy/tg_ws_proxy.py。

## 優缺點分析

> [!success] 優點
> - 簡單的設置過程，方便用戶快速上手。
> - 自動切換功能提高了連接的穩定性。
> - 詳細的日誌功能便於故障排查。

> [!danger] 缺點
> - 僅支援 Telegram Desktop，對於其他應用無法使用。
> - 在某些網路環境下可能無法達到預期的加速效果。
> - 需要用戶手動設置 Telegram 的代理配置，對於不熟悉的用戶可能有學習曲線。

> [!warning] 注意事項
> - 僅支援 Telegram Desktop，對於其他應用無法使用。
> - 在某些網路環境下可能無法達到預期的加速效果。
> - 需要用戶手動設置 Telegram 的代理配置，對於不熟悉的用戶可能有學習曲線。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| [[Telegram--Telegram-Desktop\|Telegram/Telegram-Desktop]] | Telegram Desktop 本身不提供 SOCKS5 代理功能，無法直接加速連接。 |
| [[ProxyCap--ProxyCap\|ProxyCap/ProxyCap]] | ProxyCap 是一個通用的代理工具，但設置較為複雜，且不專注於 Telegram 的優化。 |

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

相關概念：[[即時通訊]] · [[網路代理]] · [[效能優化]]

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

### 想法與筆記

_隨時記錄想法、發現、跟其他工具的比較..._

**狀態追蹤**：`to-review` → `reading` → `tried` → `integrated` / `archived`

## 出現記錄

- [[2026-03-10|2026-03-10]] — 首次收錄，768 stars
