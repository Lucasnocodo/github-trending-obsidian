---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local SOCKS5 proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 781
stars_per_day: 130
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
  - "提供 Telegram 的 SOCKS5 代理，幫助加速 Telegram 的加載。"
---

# tg-ws-proxy

**781** stars · **130** stars/天 · 建立 6 天前 · Python · MIT

`v1.0.4` `easy-install`

> [!summary] 一句話摘要
> 提供 Telegram 的 SOCKS5 代理，幫助加速 Telegram 的加載。

> [!abstract] 核心創新
> 專為 Telegram 設計的 SOCKS5 代理，能夠有效提升加載速度。

## 專案簡介

它讓使用者能夠通過本地 SOCKS5 代理加速 Telegram 的加載速度。這個工具使用 Python 實現，通過 WebSocket 轉發流量，從而提高 Telegram 的性能。與其他代理工具相比，tg-ws-proxy 專注於 Telegram 的特定需求，能夠有效地處理 Telegram 的流量，並提供簡單的用戶界面來設置和管理代理。使用者可以輕鬆配置代理參數，並在系統托盤中運行，方便使用。這個工具特別適合在網路環境不佳的情況下使用，能夠顯著提升 Telegram 的使用體驗。整體來說，tg-ws-proxy 是一個簡單易用的工具，值得 Telegram 用戶嘗試。

**技術棧**：`Python`

## 重點功能

- 本地 SOCKS5 代理，簡單易用。
- 通過 WebSocket 轉發流量，提升 Telegram 性能。
- 支持多種配置選項，靈活調整代理設置。
- 系統托盤運行，方便用戶管理。
- 詳細的日誌功能，幫助用戶排查問題。

## 快速開始

1. 下載 Windows 可執行檔
```bash
前往 https://github.com/Flowseal/tg-ws-proxy/releases 下載 TgWsProxy.exe
```
2. 啟動代理
```bash
python windows.py
```
3. 在 Telegram 中設置代理
```bash
右鍵點擊系統托盤圖示，選擇「打開 Telegram」
```

## 為什麼值得關注

> [!tip] 爆紅原因
> 作者 Flowseal 專注於改善 Telegram 的使用體驗，這正好符合當前用戶對於速度和穩定性的需求。隨著 Telegram 用戶的增加，對於加速工具的需求也隨之上升，tg-ws-proxy 提供了一個針對性的解決方案。近期的更新也讓使用者看到持續的改進，進一步提升了其吸引力。

## 適合誰使用

**目標受眾**：希望提升 Telegram 使用體驗的普通用戶和開發者。

> [!example] 使用場景
> - Telegram 用戶 用它來 加速消息加載，因為它能顯著提高文件和媒體的下載速度。
> - 開發者 用它來 測試 Telegram 應用的性能，因為它提供了簡單的代理設置。
> - 網路不佳的地區的用戶 用它來 確保 Telegram 的穩定連接，因為它能夠繞過某些網路限制。

## 架構分析

該專案使用本地 SOCKS5 代理架構，通過 WebSocket 轉發 Telegram 的流量，並支持靈活的配置選項。

## 優缺點分析

> [!success] 優點
> - 簡單易用，適合普通用戶。
> - 能夠顯著提升 Telegram 的加載速度。
> - 靈活的配置選項，適應不同需求。

> [!danger] 缺點
> - 僅限於 Telegram Desktop，無法應用於手機端。
> - 某些網路環境仍可能影響性能。
> - 初次設置可能需要一定的技術知識。

> [!warning] 注意事項
> - 僅支持 Telegram Desktop，對於手機應用無法使用。
> - 某些網路環境可能仍然影響性能。
> - 初次設置可能需要一些技術知識。

## 類似工具比較

| 工具 | 差異 |
| --- | --- |
| Shadowsocks | Shadowsocks 是一個通用的代理工具，而 tg-ws-proxy 專注於 Telegram 的性能優化。 |
| V2Ray | V2Ray 提供更複雜的代理功能，但設置較為繁瑣。 |

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

**社群活躍度**：社群活躍度良好，持續更新中。
**連結**：[文件](https://github.com/Flowseal/tg-ws-proxy#readme)

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

相關概念：[[即時通訊]] · [[網路代理]] · [[性能優化]]

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
