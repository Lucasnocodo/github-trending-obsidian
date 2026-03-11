---
repo: Flowseal/tg-ws-proxy
url: https://github.com/Flowseal/tg-ws-proxy
owner: Flowseal
owner_type: User
language: Python
license: MIT
description: "Local SOCKS5 proxy server for partial bypassing of Telegram loading"
homepage: ""
stars: 787
stars_per_day: 131
forks: 15
open_issues: 4
created: 2026-03-04
pushed_at: 2026-03-10
first_seen: 2026-03-10
week: "2026-W11"
month: "2026-03"
category: "開發工具"
subcategory: "網路工具"
release_tag: "v1.0.4"
install_complexity: "medium"
status: to-review
my_rating: 0
last_reviewed: 2026-03-10
use_case: "透過 SOCKS5 代理加速 Telegram 的加載速度，讓使用者享受更流暢的體驗。"
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
  - "透過 SOCKS5 代理加速 Telegram 的加載速度，讓使用者享受更流暢的體驗。"
---

# tg-ws-proxy

**787** stars · **131** stars/天 · 建立 6 天前 · Python · MIT

`v1.0.4`

> [!summary] 一句話摘要
> 透過 SOCKS5 代理加速 Telegram 的加載速度，讓使用者享受更流暢的體驗。

> [!info] 速覽
> **安裝難度** Easy · **專案狀態** Brand New · **熱度** Hot (131 stars/day)
> **授權** MIT (商業友好) · **維護** Active (最後推送 0 天前) · **貢獻者** 2 人
> **適合** 需要在不穩定網路環境中使用 Telegram 的普通用戶和開發者。
> **一句話重點** 這個專案透過簡單的代理設置，讓 Telegram 使用者能夠在不穩定的網路環境中獲得更好的使用體驗。

> [!abstract] 核心創新
> 自動切換連接方式以提升 Telegram 的穩定性和加載速度。

## 專案簡介

這個專案建立了一個本地的 SOCKS5 代理伺服器，將 Telegram 的流量透過 WebSocket 轉發到指定的伺服器，從而加速 Telegram 的加載和下載。具體來說，使用者的 Telegram Desktop 會連接到本地的 SOCKS5 代理（127.0.0.1:1080），然後代理會攔截連接並提取 DC ID，接著建立 TLS 的 WebSocket 連接到 Telegram 的資料中心。若 WebSocket 連接失敗，則會自動切換到直接的 TCP 連接。這個工具使用 Python 開發，並且能夠在 Windows 環境下運行，提供簡單的 GUI 介面來管理代理設定。與其他類似工具相比，這個專案的特點在於它能夠自動切換連接方式，提升了穩定性和可用性。使用者可以透過簡單的命令行參數來設定代理的埠號和目標 DC IP，並且支援詳細的日誌記錄。這個工具適合需要在不穩定網路環境中使用 Telegram 的用戶，特別是在某些地區可能會遇到連接問題的情況下。這個專案目前處於穩定階段，值得考慮使用。對於需要高頻率使用 Telegram 的團隊或個人來說，這是一個非常實用的解決方案。建議在需要加速 Telegram 加載的情境下使用，而在不需要代理的情況下則不必使用。

**技術棧**：`Python 3.x`

## 重點功能

- 本地 SOCKS5 代理 — 在 127.0.0.1:1080 上運行，支持 Telegram Desktop 的流量轉發。
- 自動切換連接 — 當 WebSocket 連接失敗時自動切換到 TCP 連接，提升穩定性。
- 詳細日誌記錄 — 使用 -v 參數啟用 DEBUG 模式，便於排查問題。
- 多 DC 支援 — 可透過 --dc-ip 參數指定多個 Telegram 資料中心的 IP。
- 簡單的 GUI 介面 — 提供系統托盤功能，方便用戶快速設置和管理代理。

## 快速開始

1. 安裝依賴
```bash
pip install -r requirements.txt
```
2. 啟動代理
```bash
python proxy/tg_ws_proxy.py
```
3. 設置 Telegram 代理
```bash
在 Telegram 中設置 SOCKS5 代理，伺服器為 127.0.0.1，端口為 1080
```

## 程式碼範例

python
# 啟動代理並指定不同的端口和 DC
python proxy/tg_ws_proxy.py --port 9050 --dc-ip 1:149.154.175.205 --dc-ip 2:149.154.167.220
# 預期輸出：代理成功啟動，並開始轉發流量。

## 為什麼值得關注

> [!tip] 爆紅原因
> Flowseal 是一位活躍的開發者，過去也有其他開源專案。這個工具解決了 Telegram 在某些地區加載緩慢的問題，特別是在網路不穩定的情況下。最近在社群中引起討論，因為許多用戶面臨 Telegram 連接問題，這使得這個工具的需求增加。當前的技術環境中，對於加速通訊工具的需求日益增長，這個專案正好滿足了這一需求。

## 適合誰使用

**目標受眾**：需要在不穩定網路環境中使用 Telegram 的普通用戶和開發者。

> [!example] 使用場景
> - 普通用戶用它來加速 Telegram 的加載速度，因為在某些地區 Telegram 加載緩慢，使用這個代理可以顯著提升體驗。
> - 開發者用它來測試 Telegram 應用的網路性能，因為這個代理能夠模擬不同的網路環境，幫助找出潛在的性能瓶頸。
> - IT 支援人員用它來幫助客戶解決 Telegram 連接問題，因為這個工具提供了簡單的 GUI 介面，方便用戶快速設置代理。

## 架構分析

這是一個單體應用，主要由一個本地 SOCKS5 代理組成。用戶輸入流量 → SOCKS5 代理 → WebSocket 連接 → Telegram 資料中心。關鍵技術決策包括使用 Python 開發以便於快速迭代和維護。專案目錄結構中，proxy/tg_ws_proxy.py 是主要的執行檔案。

## 技術深入分析

這個專案的核心技術機制是使用 SOCKS5 代理來轉發 Telegram 的流量，並透過 WebSocket 連接到 Telegram 的資料中心。這樣的設計能夠有效減少延遲，提升用戶的使用體驗。效能方面，這個代理能夠處理多個 DC 的流量，並且在連接失敗時能夠自動切換，這對於需要穩定連接的用戶來說非常重要。選擇 Python 作為開發語言使得專案能夠快速迭代和維護，但可能在高負載情況下會出現性能瓶頸。設計上，這個專案的主要風險在於如果 Telegram 的連接方式發生變化，可能會影響到代理的穩定性和可用性。安全性方面，使用者需要確保代理伺服器的安全性，以防止潛在的數據洩露。這些都是在使用過程中需要考慮的因素。

## 新手體驗

> [!info] 上手難度評估
> README 文件清晰且包含了詳細的安裝步驟和使用範例，對於新手來說非常友好。安裝過程相對順暢，但需要注意手動設置 Telegram 的代理。整體來說，花 30 分鐘應該能夠順利運行起來。

## 優缺點分析

> [!success] 優點
> - 簡單易用的 GUI 介面，方便用戶快速設置代理。
> - 自動切換連接方式，提升了使用的穩定性。
> - 詳細的日誌記錄功能，便於排查問題。

> [!danger] 缺點
> - 僅支援 Windows 環境，對於其他操作系統的用戶不友好。
> - 需要手動設置 Telegram 的代理，對於新手可能有些困難。
> - 不支援其他通訊工具的代理功能，功能較為單一。

> [!warning] 注意事項
> - 僅支援 Windows 環境。
> - 需要手動設置 Telegram 的代理設定。
> - 不支援其他通訊工具的代理功能。

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

**社群活躍度**：社群活躍度中等，定期有更新和維護。

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

相關概念：[[網路代理]] · [[SOCKS5]] · [[WebSocket]]

相關專案：[[AlpinDale--parsync|AlpinDale/parsync]] · [[HKUDS--CLI-Anything|HKUDS/CLI-Anything]] · [[HenryXiaoYang--wechat-access-unqclawed|HenryXiaoYang/wechat-access-unqclawed]] · [[JohnRiceML--clawport-ui|JohnRiceML/clawport-ui]] · [[OasAIStudio--symphony-ts|OasAIStudio/symphony-ts]] · [[ParthJadhav--app-store-screenshots|ParthJadhav/app-store-screenshots]] · [[BigBodyCobain--Shadowbroker|BigBodyCobain/Shadowbroker]] · [[TinyAGI--fractals|TinyAGI/fractals]] · [[ahmadawais--chartli|ahmadawais/chartli]]

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

> [!warning]- 替換成本
> 若半年後要換掉，難度多高？資料格式是標準的嗎？
> 
> 侵入性:: _低 / 中 / 高_
> 遷移路徑:: _描述_

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

- [[2026-03-11|2026-03-11]] — 再次上榜，787 stars
- [[2026-03-10|2026-03-10]] — 首次收錄，768 stars
