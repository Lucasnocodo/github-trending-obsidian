---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local SOCKS5 proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 786
stars_per_day: 131
forks: 15
open_issues: 4
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "代理工具"
release_tag: "v1.0.4"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "透過 SOCKS5 代理加速 Telegram 的加載與下載。"
priority: medium
ring: assess
discovered_via: "GitHub Trending"
verdict: ""
tags:
  - github
  - "category/開發工具"
  - "lang/python"
aliases:
  - "tg-ws-proxy"
  - "Flowseal/tg-ws-proxy"
  - "透過 SOCKS5 代理加速 Telegram 的加載與下載。"
---

# tg-ws-proxy

**786** stars · **131** stars/天 · 建立 6 天前 · Python · MIT

`v1.0.4`

> [!summary] 一句話摘要
> 透過 SOCKS5 代理加速 Telegram 的加載與下載。

> [!info] 速覽
> **安裝難度** Medium · **專案狀態** Brand New · **熱度** Hot (131 stars/day)
> **授權** MIT (商業友好)
> **適合** 希望在網路不佳的環境中加速 Telegram 使用的普通用戶。
> **一句話重點** 這個專案的設計思路是針對 Telegram 的特性進行優化，而不是僅僅提供一個通用的代理工具。

> [!abstract] 核心創新
> 透過 WebSocket 連接優化 Telegram 的加載速度，並提供自動切換功能。

## 專案簡介

這個專案提供了一個本地的 SOCKS5 代理伺服器，將 Telegram 的流量透過 WebSocket 轉發，從而加速 Telegram 的使用體驗。具體流程是，Telegram Desktop 透過 SOCKS5 代理連接到指定的伺服器，然後建立 WebSocket 連接到 Telegram 的資料中心。它使用 Python 實作，並支援多個資料中心的 IP 地址配置，預設為 `2:149.154.167.220` 和 `4:149.154.167.220`。相較於其他代理工具，tg-ws-proxy 針對 Telegram 的特性進行了優化，能夠在 WebSocket 連接失敗時自動切換到 TCP 連接，這一點在其他一般的 SOCKS5 代理中並不常見。使用者可以透過 GUI 介面輕鬆設定代理，或是使用命令行模式進行更細緻的配置。該專案目前處於穩定階段，對於需要加速 Telegram 的使用者來說，值得考慮使用。建議在需要快速下載文件或加速消息加載時使用，但對於不需要此功能的用戶則可忽略。

**技術棧**：`Python`

## 重點功能

- 本地 SOCKS5 代理 — 在 `127.0.0.1:1080` 提供 SOCKS5 代理服務。
- 自動切換連接 — 當 WebSocket 連接失敗時自動切換到 TCP 連接。
- 多資料中心支援 — 可配置多個 Telegram 資料中心的 IP 地址。
- 詳細日誌功能 — 使用 `-v` 參數啟用詳細的 DEBUG 日誌。
- GUI 設定介面 — 提供系統托盤的 GUI 介面來簡化配置過程。

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
python proxy/tg_ws_proxy.py --port 9050 --dc-ip 1:149.154.175.205 --dc-ip 2:149.154.167.220
```

## 為什麼值得關注

> [!tip] 爆紅原因
> Flowseal 是一位活躍的開發者，過去也有其他 Telegram 相關的專案。這個工具解決了 Telegram 用戶在某些地區網路不穩定時的加載速度問題，之前的解決方案往往無法針對 Telegram 的特性進行優化。近期 Telegram 用戶對於加速需求的增加，可能促使這個工具受到更多關注。

## 適合誰使用

**目標受眾**：希望在網路不佳的環境中加速 Telegram 使用的普通用戶。

> [!example] 使用場景
> - 普通用戶用它來加速 Telegram 的文件下載，因為直接連接經常會因為網路不穩而失敗。
> - 開發者用它來測試 Telegram 應用的性能，因為可以快速切換不同的資料中心以評估速度。
> - 系統管理員用它來監控 Telegram 的流量，因為可以透過 SOCKS5 代理輕鬆獲取流量日誌。

## 架構分析

這是一個單體應用，包含一個本地 SOCKS5 代理伺服器。用戶輸入 → SOCKS5 代理 → TG WS Proxy → WebSocket 連接 → Telegram DC。關鍵技術決策是使用 WebSocket 來加速連接，並在失敗時自動回退到 TCP 連接。專案目錄結構中，`proxy/tg_ws_proxy.py` 是主要的執行檔。

## 優缺點分析

> [!success] 優點
> - 針對 Telegram 進行了專門優化，能有效加速加載。
> - 提供 GUI 設定介面，降低使用門檻。
> - 支援多個資料中心的 IP 配置，靈活性高。

> [!danger] 缺點
> - 僅限於 Windows 環境使用，跨平台支援不足。
> - 需要用戶手動配置 Telegram 的代理設定，使用不夠直觀。
> - 不支援其他即時通訊應用，功能範圍有限。

> [!warning] 注意事項
> - 僅支援 Windows 環境的托盤應用。
> - 需要手動配置 Telegram 的 SOCKS5 代理設定。
> - 不支援其他即時通訊應用的加速功能。

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

相關概念：[[代理工具]] · [[自動化]] · [[網路優化]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[autoclaw-cc--xiaohongshu-skills|autoclaw-cc/xiaohongshu-skills]]

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
**Tech Radar**：`assess` → `trial` → `adopt` / `hold`

> [!info]- 評估完成後
> 更新 frontmatter：
> - `ring`: adopt / trial / assess / hold
> - `verdict`: 一句話結論
> - `my_rating`: 1-5 分
> - `status`: reading / tried / integrated / archived

## 出現記錄

- [[2026-03-11|2026-03-11]] — 再次上榜，786 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，768 stars
